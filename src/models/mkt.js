'use strict'

const mkt = (name) => {
    return {
        all: function() {
            return { name: name }
        },
        create: function() {
            return { name: name }
        },
        update: function() {
            return { name: name }
        },
        destroy: function() {
            return { name: name }
        }
    }
}


module.exports = mkt