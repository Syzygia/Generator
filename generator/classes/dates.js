const Base = require('./base');
const faker = require('faker');
class Dates extends Base{
    constructor(params) {
        super(params);
    }

    getData() {
        //return faker.random.arr
        return "'" + faker.date.recent() + "'";
    }
}

module.exports = Dates;