"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var network = process.argv[2] || 'mainnet';
function contractAddress(contractName) {
    var file = fs.readFileSync(path.resolve(__dirname, '../../core/deployments/artifacts/' + network + '/' + contractName + '.json'), 'utf8');
    var json = JSON.parse(file);
    return json.address;
}
var suffix = network == 'mainnet' ? '' : '.' + network;
var subgraphFilePath = path.resolve(__dirname, '../subgraph' + suffix + '.yaml');
console.log(subgraphFilePath);
var doc = yaml.load(fs.readFileSync(subgraphFilePath, 'utf8'));
doc.dataSources.forEach(function (ds) {
    try {
        var address = contractAddress(ds.name);
        ds.source.address = address;
    }
    catch (err) {
        var msg = 'Cannot find ' + network + ' contract artifacts for ' + ds.name + ' - missing deployment artifacts?';
        console.log(msg);
    }
});
fs.writeFile(subgraphFilePath, yaml.dump(doc, { lineWidth: 150 }), function (err) {
    if (err) {
        console.log(err);
    }
});
