import axios from 'axios';

axios({
    method: 'POST',
    url: 'https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/v1/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'apiKey': '<Data API Key>'
    },
    data: {
        dataSource: '<cluster name>',
        database: 'learn-data-api',
        collection: 'people',
        document: {
            name: 'John Sample',
            age: 42
        }
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
