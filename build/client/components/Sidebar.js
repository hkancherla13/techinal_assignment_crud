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
var CreateForm_1 = __importDefault(require("./CreateForm"));
var api_1 = require("../api");
var Sidebar = function (props) {
    var setProducts = props.setProducts;
    var _a = React.useState(false), isCreating = _a[0], setIsCreating = _a[1];
    var _b = React.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = React.useState(null), newProduct = _c[0], setNewProduct = _c[1];
    var handleCreate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var product, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    if (!newProduct) {
                        setIsLoading(false);
                        return [2 /*return*/, antd_1.message.error("No product")];
                    }
                    return [4 /*yield*/, api_1.createProduct(newProduct.description, newProduct.imgUrl, newProduct.inventory, newProduct.name, newProduct.price)];
                case 1:
                    product = _a.sent();
                    if (product.error) {
                        setIsLoading(false);
                        return [2 /*return*/, antd_1.message.error(product.error)];
                    }
                    return [4 /*yield*/, api_1.getProducts()];
                case 2:
                    products = _a.sent();
                    if (products.error) {
                        setIsLoading(false);
                        return [2 /*return*/, antd_1.message.error(product.error)];
                    }
                    setProducts(products);
                    setIsLoading(false);
                    setIsCreating(false);
                    antd_1.message.success("Created " + newProduct.name + " successfully!");
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(antd_1.Menu, { theme: "dark", mode: "inline" },
        React.createElement(antd_1.Menu.Item, { disabled: isCreating, icon: React.createElement(icons_1.PlusCircleOutlined, null), onClick: function () { return setIsCreating(true); } }, "Create Product"),
        React.createElement(antd_1.Modal, { confirmLoading: isLoading, okText: "Create", onCancel: function () { return setIsCreating(false); }, onOk: handleCreate, title: "Create Product", visible: isCreating },
            React.createElement(CreateForm_1.default, { setNewProduct: setNewProduct }))));
};
exports.default = Sidebar;
