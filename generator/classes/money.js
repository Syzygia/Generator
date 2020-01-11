const Base = require('./base');
const faker = require('faker');
class Money extends Base{
    constructor(params) {
        super(params);
    }

    getData() {
        //return faker.random.arr
        return "'" + faker.finance.amount() + "'";
    }
}

module.exports = Money;