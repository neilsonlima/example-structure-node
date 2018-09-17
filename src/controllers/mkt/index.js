const insert = require('./mkt-insert')
const search = require('./mkt-search')

const controllerMkt = (list, results = []) => {

    const [item, ...rest] = list

    if(item){
        return search(item)
        .then(result => { return controllerMkt(rest, [...results, result])})
    }

    return Promise.resolve(results)
}


module.exports = controllerMkt
