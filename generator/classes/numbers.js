const Base = require('./base')
const faker = require('faker')

class Numbers extends Base{
    constructor(params){
        super(params);
    }
    getData() {
        return "'" + Math.floor(Math.random() * this.params.number) + "'";
    }
}

module.exports = Numbers;