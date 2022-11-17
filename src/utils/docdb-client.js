var MongoClient = require('mongodb').MongoClient,fs = require('fs');
var ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];
var connection_string = "mongodb://USERNAME:PASSWORD@docdb-2022-11-09-19-31-22.cluster-cr5xfwse4dfh.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

MongoClient.connect(
        connection_string, {
            sslValidate: true,
            sslCA: ca,
            useNewUrlParser: true
        },
        function (err,client) {
            console.log(err+" , "+ client);
        });