"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var coreArtifactPath = __dirname + '/../../core/pkg/core/artifacts';
var outputPath = __dirname + '/../abis';
var abiJSONfilenames = [
    'Vault',
    'WeightedPool',
    'StablePool',
    'WeightedPoolFactory',
    'StablePoolFactory',
    'BalancerPoolToken',
    'BasePoolFactory',
    'ERC20',
    'BalancerHelpers',
].map(function (a) { return a + '.json'; });
glob(coreArtifactPath + '/**/!(*dbg).json', {}, function (err, files) {
    if (err) {
        console.error(err);
    }
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var filename = files_1[_i];
        var split = filename.split('/');
        var contractName = split[split.length - 1];
        if (abiJSONfilenames.includes(contractName)) {
            console.log(contractName);
            var abi = JSON.parse(fs.readFileSync(path.resolve(filename), 'utf8')).abi;
            fs.writeFileSync(outputPath + '/' + contractName, JSON.stringify(abi, null, 2));
        }
    }
});
