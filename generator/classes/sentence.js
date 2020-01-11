const Base = require('./base');
const faker = require('faker');
class Sentence extends Base{
    constructor(params) {
        super(params);
    }

    getData() {
        //return faker.random.arr
        return "'" + faker.lorem.sentence() + "'";
    }
}

module.exports = Sentence;