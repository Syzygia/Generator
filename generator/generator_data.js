const Words = require('./classes/words');
const Status = require('./classes/status');
const Names = require('./classes/Names');
const Image = require('./classes/image');
const Sentence = require('./classes/sentence');
const Numbers = require('./classes/numbers');
const Dates = require('./classes/dates');
const Money = require('./classes/money');
const album_pic = require('./classes/album_pic');
class GeneratorData {
    getData(column){
        let type = column.type;
        let generator = null;
        switch (type){
            case 'words' : generator = new Words(column.params); break;
            case 'statuses' : generator = new Status([]); break;
            case 'names' : generator = new Names ([]); break;
            case 'image' : generator = new Image ([]); break;
            case 'sentence' : generator = new Sentence([]);break;
            case 'numbers' : generator = new Numbers(column.params);break;
            case 'date' : generator = new Dates([]);break;
            case 'money' : generator = new Money([]);break;
            case 'album_pic' : generator = new album_pic([]);break;
            default: return null;
        }
        return generator.getData();
    }
}

module.exports = GeneratorData;