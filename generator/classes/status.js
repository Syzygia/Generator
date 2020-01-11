const Base = require('./base');
const faker = require('faker');
class Status extends Base{
    constructor(params) {
        super(params);
        this.statuses = [
            'Оформленно',
            'Оплачено',
            'Выдан'
        ];
    }

    getData() {
        //return faker.random.arr
        return "'" + this.statuses[Math.floor(Math.random()*this.statuses.length)] + "'";
    }
}

module.exports = Status;