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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var api_1 = require("../api");
var EditForm_1 = __importDefault(require("./EditForm"));
var Meta = antd_1.Card.Meta;
var ProductDisplay = function (props) {
    var description = props.description, id = props.id, imgUrl = props.imgUrl, inventory = props.inventory, name = props.name, price = props.price, setProducts = props.setProducts;
    var _a = React.useState(false), isEditing = _a[0], setIsEditing = _a[1];
    var _b = React.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = React.useState(null), updatedProduct = _c[0], setUpdatedProduct = _c[1];
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, api_1.deleteProduct(id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, api_1.getProducts()];
                case 2:
                    products = _a.sent();
                    if (products.error) {
                        console.error(products);
                        antd_1.message.error("Error while deleting product");
                    }
                    else {
                        setProducts(products);
                        antd_1.message.success("Product deleted successfully!");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    antd_1.message.error("Error while deleting product");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleEdit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var editedProduct, products, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    setIsLoading(true);
                    if (!updatedProduct) {
                        return [2 /*return*/, antd_1.message.error("Product has not been updated!")];
                    }
                    return [4 /*yield*/, api_1.editProduct(updatedProduct.description, id, updatedProduct.imgUrl, updatedProduct.inventory, updatedProduct.name, updatedProduct.price)];
                case 1:
                    editedProduct = _a.sent();
                    if (editedProduct.error) {
                        console.error(editedProduct.error);
                        setIsLoading(false);
                        return [2 /*return*/, antd_1.message.error("Error while editing product")];
                    }
                    return [4 /*yield*/, api_1.getProducts()];
                case 2:
                    products = _a.sent();
                    if (products.error) {
                        console.error(products.error);
                        setIsLoading(false);
                        return [2 /*return*/, antd_1.message.error("Error while editing product")];
                    }
                    else {
                        setProducts(products);
                        antd_1.message.success("Successfully edited " + editedProduct.name + "!");
                    }
                    setIsEditing(false);
                    setIsLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    antd_1.message.error("Error while editing product");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Card, { actions: [
                React.createElement(icons_1.EditOutlined, { key: "edit", onClick: function () { return setIsEditing(true); } }),
                React.createElement(antd_1.Popconfirm, { cancelText: "No", key: "delete", okText: "Yes", onConfirm: handleDelete, title: "Are you sure you'd like to delete this product?" },
                    React.createElement(icons_1.DeleteOutlined, null)),
            ], cover: React.createElement("img", { alt: "Product image", src: imgUrl }) },
            React.createElement(Meta, { description: React.createElement(React.Fragment, null,
                    React.createElement("div", null, description),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Price: "),
                        "$",
                        price),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Inventory: "),
                        inventory)), title: name })),
        React.createElement(antd_1.Modal, { confirmLoading: isLoading, okText: "Edit", onCancel: function () { return setIsEditing(false); }, onOk: handleEdit, title: "Edit Product", visible: isEditing },
            React.createElement(EditForm_1.default, { description: description, imgUrl: imgUrl, inventory: inventory, name: name, price: price, setUpdatedProduct: setUpdatedProduct }))));
};
exports.default = ProductDisplay;
