[
    {
        "table_name":test,
        "columns":[
            {
                "name": "text",
                "rows": 1000,
                "type": "words",
                "params" : {
                    "number" : 56
                }
            }
        ]
    }
]

    [
    {
        "table_name":"artists",
        "rows": 250000,
        "columns":[
            {
                "name": "name",
                "type": "names",
            },
            {
                "name":"image",
                "type":"image"
            },
            {
                "name":"description",
                "type": "sentence",
            }
        ]
    }
    ];

[
{
    "table_name":"albums",
    "rows": 500000,
    "columns":[
    {
        "name":"artist_id",
        "type":"numbers",
        "params":{
            "number":292494
        }
    },

    {
        "name":"name",
        "type": "words",
        "params" : {
            "number" : 13
        }
    },
    {
        "name": "cost",
        "type": "money",
    }
]
}]

    [
    {
        "table_name":"songs",
        "rows": 600000,
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
