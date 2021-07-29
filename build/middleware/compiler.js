"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_1 = __importDefault(require("webpack"));
var webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var compiler = function () {
    var config = {
        entry: "./src/client/index.tsx",
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.svg$/,
                    type: "assets/inline",
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: ["ts-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
        stats: "normal",
    };
    var compileInstance = webpack_1.default(config);
    return webpack_dev_middleware_1.default(compileInstance, {
        serverSideRender: true,
    });
};
exports.default = compiler;
