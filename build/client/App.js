"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
var api_1 = require("./api");
var Catalog_1 = __importDefault(require("./components/Catalog"));
var Footer_1 = __importDefault(require("./components/Footer"));
var Header_1 = __importDefault(require("./components/Header"));
var Sidebar_1 = __importDefault(require("./components/Sidebar"));
var Content = antd_1.Layout.Content, Sider = antd_1.Layout.Sider;
var App = function () {
    var _a = React.useState([]), products = _a[0], setProducts = _a[1];
    React.useEffect(function () {
        api_1.getProducts()
            .then(function (products) {
            if (products.error) {
                console.error(products);
            }
            else {
                setProducts(products);
            }
        })
            .catch(function (error) { return console.error(error); });
    }, []);
    return (React.createElement(antd_1.Layout, null,
        React.createElement(Header_1.default, null),
        React.createElement(antd_1.Layout, null,
            React.createElement(Sider, null,
                React.createElement(Sidebar_1.default, { setProducts: setProducts })),
            React.createElement(Content, { style: { padding: "25px" } },
                React.createElement(Catalog_1.default, { products: products, setProducts: setProducts }))),
        React.createElement(Footer_1.default, null)));
};
exports.default = App;
