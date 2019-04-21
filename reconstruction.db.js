const mysql = require('mysql')
const moment = require('moment')
var fs = require("fs");

var remote = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  database: "tr_database_last"
});

var local = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  database: "tr_database"
})

remote.connect(function (err) {
  if (err) throw err;
  console.log("Connected Remote!");
});

local.connect(function (err) {
  if (err) throw err;
  console.log("Connected Local!");
});

function query(sql) {
  return new Promise((resolve, reject) => {
    remote.query(sql, function (err, res) {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

let SQL = ""

async function buildSqlFile() {
  let result1 = await query("select * from users")
  result1.forEach(function (r) {
    SQL += `insert into user (id, name, surname, email, password, created_at, updated_at) VALUES (${r.id}, '${r.name.split(" ")[0]}', '${r.name.split(" ")[1]}', '${r.email}', '${r.password}', ${getTimes(r.created_at, r.updated_at)}); \n\n`  
  })

  let result2 = await query("select * from gen_numeradores")
  result2.forEach(function (r) {
    SQL += `insert into numerator (id, code, name,  \`index\`, status, created_at, updated_at) VALUES (${r.id}, '${r.codigo_numerador}', '${r.nombre_numerador}', ${r.indice_actual}, ${r.status}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result3 = await query("select * from gen_modulos")
  result3.forEach(function (r) {
    SQL += `insert into module (id, code, name, description, status, created_at, updated_at) VALUES (${r.id}, '${r.codigo_modulo}', '${r.nombre_modulo}', '${r.descripcion_modulo}', 1, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result4 = await query("select * from gen_menues")
  result4.forEach(function (r) {
    SQL += `insert into navigation (id, module_id, parent_id, title, route, icon, \`order\`, \`status\`, created_at, updated_at) VALUES (${r.id}, 1, ${r.id_padre}, '${r.nombre_menu}', '${r.nombre_ruta ? r.nombre_ruta : '#'}', ${r.icono === null || r.icono === "" ? null : "'"+r.icono+"'"}, ${r.orden}, ${r.visible}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result5 = await query("select * from gen_condiciones_iva")
  result5.forEach(function (r) {
    SQL += `insert into iva_condition (id, code, name, description, \`status\`, created_at, updated_at) values (${r.id}, '${r.cod_condicion_iva}', '${r.nombre_condicion_iva}', '${r.descripcion_condicion_iva}', ${r.status}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result6 = await query("select * from gen_tipos_comprobantes")
  result6.forEach(function (r) {
    SQL += `insert into voucher_type (id, module_code, code, name, numerator_code, \`status\`, created_at, updated_at) values (${r.id}, '${r.codigo_modulo}', '${r.codigo_comprobante}', '${r.nombre_comprobante}', '${r.codigo_numerador}', ${r.visible}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result7 = await query("select * from stk_rubros")
  result7.forEach(function (r) {
    SQL += `insert into category (id, code, name, description, parent_code, \`status\`, created_at, updated_at) values (${r.id}, '${r.codigo_rubro}', '${r.nombre_rubro}', '${r.descripcion_rubro}', ${r.codigo_rubro_padre ? "'"+r.codigo_rubro_padre+"'" : null}, 1, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result8 = await query("select * from stk_unidades_medida")
  result8.forEach(function (r) {
    let qty = 1
    if (r.descripcion_unidad_medida.indexOf("Unidad ") !== -1) {
      qty = 1
    }
    if (r.descripcion_unidad_medida.indexOf("Pack ") !== -1) {
      qty = r.descripcion_unidad_medida.split(" ")[2]
    }
    SQL += `insert into measure (id, name, description, quantity, created_at, updated_at) values (${r.id}, '${r.nombre_unidad_medida}', '${r.descripcion_unidad_medida}', ${qty}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result9 = await query("select * from stk_conversiones_unimed")
  result9.forEach(function (r) {
    SQL += `insert into measure_convertion (id, 1_measure_id, 2_measure_id, convertion, created_at, updated_at) values (${r.id}, ${r.id_unidad_medida_1}, ${r.id_unidad_medida_2}, ${r.factor_conversion}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result10 = await query("select * from vts_listas_precios_cabecera")
  result10.forEach(function (r) {
    SQL += `insert into price_list_header (id, name, from_date, to_date, created_at, updated_at) values (${r.id}, '${r.nombre_lista_precio}', ${r.fecha_desde === "0000-00-00" ? null : "'"+r.fecha_desde+"'"}, ${r.fecha_hasta === "0000-00-00" ? null : "'"+r.fecha_hasta+"'"}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result11 = await query("select * from stk_articulos")
  result11.forEach(function (r) {
    SQL += `insert into article (id, code, name, description, barcode, stk_measure_id, sale_measure_id, price_list_header_id, \`status\`, created_at, updated_at) values (${r.id}, '${r.codigo_articulo}', '${r.nombre_articulo}', '${r.descripcion_articulo}', ${r.codigo_barra === "" || r.codigo_barra === "null" ? null : "'"+r.codigo_barra+"'"}, ${r.id_unidad_medida_stk}, ${r.id_unidad_medida_ven}, ${r.id_lista_precios_cabecera}, ${r.status}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result12 = await query("select * from vts_listas_precio_detalle")
  result12.forEach(function (r) {
    SQL += `insert into price_list_detail (id, price_list_header_id, article_code, supplier_price, sale_price, created_at, updated_at) values (${r.id}, ${r.id_lista_precios_cabecera}, '${r.codigo_articulo}', ${r.precio_proveedor}, ${r.precio_de_venta}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result13 = await query("select * from stk_articulos_rubros_relacion")
  result13.forEach(function (r) {
    SQL += `insert into article_category_relation (id, article_code, category_code, created_at, updated_at) values (${r.id}, '${r.codigo_articulo}', '${r.codigo_rubro}', ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result14 = await query("select * from vts_tipos_impuestos")
  result14.forEach(function (r) {
    SQL += `insert into tax_type (id, code, name, percentage, created_at, updated_at) values (${r.id}, '${r.codigo_impuesto}', '${r.nombre_impuesto}', ${r.porcentaje_impuesto}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result15 = await query("SELECT C.*, CI.cod_condicion_iva FROM vts_clientes C, gen_condiciones_iva CI WHERE CI.id = C.id_condicion_iva")
  result15.forEach(function (r) {
    SQL += `insert into client (id, name, document, address, email, iva_condition_code, created_at, updated_at) values (${r.id}, '${r.nombre_cliente}', ${r.documento_cliente}, '${r.direccion_cliente}', '${r.email_cliente}', '${r.cod_condicion_iva}', ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result16 = await query("SELECT * from vts_tipos_cobranzas")
  result16.forEach(function (r) {
    SQL += `insert into income_type (id, code, name, description, created_at, updated_at) values (${r.id}, '${r.nombre_tipo_cobranza.slice(0,3).toUpperCase()}', '${r.nombre_tipo_cobranza}', '${r.descripcion_tipo_cobranza}', ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result17 = await query("SELECT VC.*, TC.`nombre_tipo_cobranza` from vts_ventas_cabecera VC, vts_tipos_cobranzas TC WHERE TC.id = VC.id_tipo_cobranza")
  result17.forEach(function (r) {
    SQL += `insert into sale_header (id, voucher_type_code, voucher_number, voucher_date, client_id, amount, discounts, exempt, iva, internal_taxes, total, income_type_code, observations, created_at, updated_at) values (${r.id}, '${r.codigo_comprobante_vts}', ${r.numero_comprobante_vts}, '${moment(r.fecha_comprobante_vts).format("YYYY-MM-DD HH:mm:ss")}', ${r.id_cliente}, ${r.monto_sin_iva}, ${r.monto_descuentos}, ${r.monto_exento}, ${r.monto_iva}, ${r.monto_imp_internos}, ${r.monto_total}, '${r.nombre_tipo_cobranza.slice(0,3).toUpperCase()}', null, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result18 = await query("SELECT VD.*, VC.id AS sale_header_id FROM vts_ventas_detalle VD, vts_ventas_cabecera VC WHERE VD.numero_comprobante_vts = VC.numero_comprobante_vts")
  result18.forEach(function (r) {
    SQL += `insert into sale_detail (id, sale_header_id, item_voucher_number, article_code, item_quantity, item_price, item_supplier_price, item_discount, item_internal_taxes, item_iva, item_total, created_at, updated_at) values (${r.id}, ${r.sale_header_id}, ${r.renglon_comprobante_vts}, '${r.codigo_articulo}', ${r.cantidad}, ${r.precio_unitario}, ${r.precio_proveedor}, ${r.monto_descuento_renglon}, ${r.monto_impuestos_interno_renglon}, ${r.monto_iva_renglon}, ${r.monto_total_renglon}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result19 = await query("select * from vts_impuestos_articulos")
  result19.forEach(function (r) {
    SQL += `insert into article_tax (id, article_code, tax_type_code, created_at, updated_at) values (${r.id}, '${r.codigo_articulo}', '${r.codigo_impuesto}', ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result20 = [{ id: 1, value: "0.25" }, { id: 2, value: "0.50" }, { id: 3, value: "1" }, { id: 4, value: "2" }, { id: 5, value: "5" }, { id: 6, value: "10" }, { id: 7, value: "20" }, { id: 8, value: "50" }, { id: 9, value: "100" }, { id: 10, value: "200" }, { id: 11, value: "500" }, { id: 12, value: "1000" }]
  result20.forEach(function (r) {
    SQL += `insert into currency (id, value, created_at) values (${r.id}, ${r.value}, NOW()); \n\n`
  })

  let result21 = await query("select * from vts_cuadre_diario_cabecera")
  result21.forEach(function (r) {
    SQL += `insert into daily_control_header (id, date, initial_amount, sales_amount, expenses_amount, total_amount, created_at, updated_at) values (${r.id}, '${moment(r.fecha).format("YYYY-MM-DD")}', ${r.saldo_total_inicial}, ${r.saldo_total_ventas}, ${r.saldo_total_gastos}, ${r.saldo_total_final}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result22 = await query("select * from vts_saldos_iniciales_cuadre")
  result22.forEach(function (r) {
    let currency_id = getCurrencyId(r.denominacion_valor.toString())
    SQL += `insert into daily_control_initial (id, daily_control_header_id, currency_id, quantity, total_amount, created_at, updated_at) values (${r.id}, ${r.id_vts_cuadre_diario}, ${currency_id}, ${r.cantidad}, ${r.saldo_total}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  let result23 = await query("select * from vts_saldos_finales_cuadre")
  result23.forEach(function (r) {
    let currency_id = getCurrencyId(r.denominacion_valor.toString())
    SQL += `insert into daily_control_final (id, daily_control_header_id, currency_id, quantity, total_amount, created_at, updated_at) values (${r.id}, ${r.id_vts_cuadre_diario}, ${currency_id}, ${r.cantidad}, ${r.saldo_total}, ${getTimes(r.created_at, r.updated_at)}); \n\n`
  })

  fs.writeFile("tr_database.sql", SQL, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
}

function getTimes (created_at, updated_at) {
  let times = ""
  times += !created_at || created_at === "0000-00-00 00:00:00" ? "NOW()" : "'"+moment(created_at).format("YYYY-MM-DD HH:mm:ss")+"'"
  times += ", "
  times += !updated_at || updated_at === "0000-00-00 00:00:00" ? null : "'"+moment(updated_at).format("YYYY-MM-DD HH:mm:ss")+"'"
  return times
}

function getCurrencyId(currency) {
  switch (currency) {
    case "0.25":
      currency_id = 1
      break
    case "0.5":
      currency_id = 2
      break
    case "1":
      currency_id = 3
      break
    case "2":
      currency_id = 4
      break
    case "5":
      currency_id = 5
      break
    case "10":
      currency_id = 6
      break
    case "20":
      currency_id = 7
      break
    case "50":
      currency_id = 8
      break
    case "100":
      currency_id = 9
      break
    case "200":
      currency_id = 10
      break
    case "500":
      currency_id = 11
      break
    case "1000":
      currency_id = 12
      break
  }
  return currency_id
}

buildSqlFile()
  .then(() => {
    console.log("LISTO!!")
    console.log(SQL)
  })
  .catch(err => console.log("ERROR!!", err))
