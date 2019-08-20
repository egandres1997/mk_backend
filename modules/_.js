'use-strict'

const _ = require('lodash')

const pad = (num, size) => {
    let s = num + ""
    while (s.length < size) s = "0" + s
    return s
}

const splitCamelCase = (word) => {
    let output, i, l, capRe = /[A-Z]/
    if (typeof (word) !== 'string') {
        throw new Error('The "word" parameter must be a string.')
    }
    output = [];
    for (i = 0, l = word.length; i < l; i += 1) {
        if (i === 0) {
            output.push(word[i].toUpperCase())
        }
        else {
            if (i > 0 && capRe.test(word[i])) {
                output.push(' ')
            }
            output.push(word[i])
        }
    }
    return output.join('').split(' ')
}

module.exports = {
    ..._,
    pad,
    splitCamelCase
}