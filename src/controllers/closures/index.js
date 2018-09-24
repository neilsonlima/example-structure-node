'use strict'

const testController = (name) => {

    return {
        index: function() {
            return name
        },
        create: function() {
            return name
        },
        update: function() {
            return name
        },
        destroy: function() {
            return name
        }
    }
}

module.exports = testController