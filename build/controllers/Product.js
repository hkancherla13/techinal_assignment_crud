"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var express_1 = require("express");
var fs_extra_1 = __importDefault(require("fs-extra"));
var constants_1 = require("../constants");
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.router = express_1.Router();
        this.initializeRoutes();
    }
    ProductController.prototype.initializeRoutes = function () {
        var _this = this;
        this.router.post("/products", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var existingProducts, product, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fs_extra_1.default.readJSON(constants_1.productsFilePath)];
                    case 1:
                        existingProducts = _a.sent();
                        product = {
                            description: req.body.description,
                            id: existingProducts.length + 1,
                            imgUrl: req.body.imgUrl,
                            inventory: req.body.inventory,
                            name: req.body.name,
                            price: req.body.price,
                        };
                        existingProducts.push(product);
                        return [4 /*yield*/, fs_extra_1.default.writeJSON(constants_1.productsFilePath, existingProducts)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(201).send(product)];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, res.status(500).send({ error: error_1 })];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.router.get("/products", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var existingProducts, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs_extra_1.default.readJSON(constants_1.productsFilePath)];
                    case 1:
                        existingProducts = _a.sent();
                        return [2 /*return*/, res.send(existingProducts)];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, res.status(500).send({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.patch("/products/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var products, productIndex, updatedProduct_1, updates, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fs_extra_1.default.readJSON(constants_1.productsFilePath)];
                    case 1:
                        products = _a.sent();
                        productIndex = products.findIndex(function (product) { return product.id === Number(req.params.id); });
                        if (productIndex < 0) {
                            return [2 /*return*/, res.status(500).send({
                                    error: "No matching product!",
                                    products: products,
                                    id: req.params.id,
                                })];
                        }
                        updatedProduct_1 = __assign({}, products[productIndex]);
                        updates = Object.keys(req.body);
                        updates.forEach(function (update) { return (updatedProduct_1[update] = req.body[update]); });
                        products.splice(productIndex, 1, updatedProduct_1);
                        return [4 /*yield*/, fs_extra_1.default.writeJSON(constants_1.productsFilePath, products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.send(products[productIndex])];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, res.status(500).send({ error: error_3 })];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.router.delete("/products/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var products, productIndex, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fs_extra_1.default.readJSON(constants_1.productsFilePath)];
                    case 1:
                        products = _a.sent();
                        productIndex = products.findIndex(function (product) { return product.id === Number(req.params.id); });
                        products.splice(productIndex, 1);
                        return [4 /*yield*/, fs_extra_1.default.writeJSON(constants_1.productsFilePath, products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.send()];
                    case 3:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [2 /*return*/, res.status(500).send({ error: error_4 })];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return ProductController;
}());
exports.default = ProductController;
