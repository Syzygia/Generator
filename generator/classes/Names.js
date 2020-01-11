const Base = require('./base')
const faker = require('faker')

class Names extends Base{
    constructor(params){
        super(params);
    }
    getData() {
        return "'" + faker.name.firstName() + faker.name.lastName() + "'";
    }
}

module.exports = Names;