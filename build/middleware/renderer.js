"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseLocals = function (res) {
    var devMiddleware = res.locals.webpack.devMiddleware;
    var outputFileSystem = devMiddleware;
    var jsonWebpackStats = devMiddleware.stats.toJson();
    var assetsByChunkName = jsonWebpackStats.assetsByChunkName, outputPath = jsonWebpackStats.outputPath;
    var chunkPaths = Object.values(assetsByChunkName);
    var assets = chunkPaths.map(function (fileArr) { return fileArr[0]; });
    return { assets: assets, outputFileSystem: outputFileSystem, outputPath: outputPath };
};
var renderer = function (req, res) {
    var _a = parseLocals(res), assets = _a.assets, outputFileSystem = _a.outputFileSystem, outputPath = _a.outputPath;
    return res.send("\n    <html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Productotron 3000</title>\n    <style>\n    " + assets
        .filter(function (path) { return path.endsWith(".css"); })
        .map(function (path) {
        return outputFileSystem.readFileSync(path.concat(outputPath, path));
    })
        .join("\n") + "\n    </style>\n    </head>\n    <body>\n    <div id=\"root\"></div>\n    " + assets
        .filter(function (path) { return path.endsWith(".js"); })
        .map(function (path) { return "<script src=\"" + path + "\"></script>"; })
        .join("\n") + "\n    </body>\n    </html>");
};
exports.default = renderer;
