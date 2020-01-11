const Base = require('./base')
const faker = require('faker')

class Image extends Base{
    constructor(params){
        super(params);
    }
    getData() {
        return "'" + faker.image.avatar() + "'";
    }
}

module.exports = Image;