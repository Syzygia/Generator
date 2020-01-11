const Base = require('./base')
const faker = require('faker')

class album_pic extends Base{
    constructor(params){
        super(params);
    }
    getData() {
        return "'" + faker.image.image() + "'";
    }
}

module.exports = album_pic;