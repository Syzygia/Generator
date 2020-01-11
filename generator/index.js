const {Client} = require('pg');
const {fs} = require('fs');
const GeneratorData = require ('./generator_data')
let client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: '9779',
    database: 'store'
});

client.connect();
//let options = JSON.parse(fs.readFileSync('./data/generator.json', 'utf-8'))rs

let options = [
    {
        "table_name":"",
        "rows": 1,
        "columns":[
            {
                "name":"album_id",
                "type":"numbers",
                "params":{
                    "number":563693
                }
            },

            {
                "name":"name",
                "type": "words",
                "params" : {
                    "number" : 3
                }
            },
            {
                "name":"duration",
                "type":"numbers",
                "params":{
                    "number":1000
                }
            },
            {
                "name": "cost",
                "type": "money",
            }
        ]
    }
];
let  generator = new GeneratorData();
// for (let table of options)  {
//     for(let i =0; i< table.rows; ++i) {
//         let query = 'insert into ' + table.table_name + ' (';
//         for (let index in table.columns) {
//             query += table.columns[index].name;
//             if (index < table.columns.length - 1) {
//                 query += ',';
//             }
//         }
//         query += ') values (';
//         for (let index in table.columns) {
//             query += generator.getData(table.columns[index]);
//             if (index < table.columns.length - 1) {
//                 query += ',';
//             }
//         }
//         query += ')';
//         // console.log(query);
//         //if (i === table.rows - 1) {
//           client.query(query, function (err, res) {
//               if (err !== null)
//                 console.log(err);
//            });
//        // }
//     }
// }
let albums;
client.query('select id from albums', function (err, res) {
    albums = res.rows;
    //console.log(albums);
    for (let obj of  albums) {
        let query = 'update albums set ' + ' image = ';
        query += generator.getData({'type': 'album_pic'});
        query += ' where id = ' + obj.id + ';';
        //console.log(query);
         client.query(query, function (err_, res_) {
            //console.log(res_);
            if (err_ != null) {
                console.log(err_);
            }
        });
    }
});


