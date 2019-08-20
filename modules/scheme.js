'use-strict'

const _ = require('./_')

const scheme = (
    props = [], 
    instance = {}
) => {
    let newScheme = {}
    props.forEach(prop => {
        if (prop.scheme) {
            if (instance[prop.key] !== undefined) {
                if (_.isArray(instance[prop.key])) {
                    newScheme[prop.key] = instance[prop.key].map(prop.scheme)
                } 
                else if (_.isObject(instance[prop.key])) {
                    newScheme[prop.key] = prop.scheme(instance[prop.key])
                }
            } else {
                if (_.isArray(instance[prop.key])) {
                    newScheme[prop.key] = []
                }
            }
        } else {
            if (instance[prop.key] !== undefined) {
                newScheme[prop.key] = instance[prop.key]
            }
        }
    })
    return newScheme
}

module.exports = scheme