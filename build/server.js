"use strict";
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
var express_1 = __importDefault(require("express"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var compiler_1 = __importDefault(require("./middleware/compiler"));
var renderer_1 = __importDefault(require("./middleware/renderer"));
var constants_1 = require("./constants");
var Server = /** @class */ (function () {
    function Server(controllers, mode, port) {
        this.app = express_1.default();
        this.mode = mode;
        this.port = port;
        this.initializeJsonDb();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeRenderer();
    }
    Server.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) { return _this.app.use("/", controller.router); });
    };
    Server.prototype.initializeMiddlewares = function () {
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default("dev"));
    };
    Server.prototype.initializeJsonDb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1.default.ensureFile(constants_1.productsFilePath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fs_extra_1.default.writeJSON(constants_1.productsFilePath, constants_1.starterProducts)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Server.prototype.initializeRenderer = function () {
        if (this.mode === "development") {
            this.app.use(compiler_1.default());
            this.app.use(renderer_1.default);
        }
        else {
            var clientPath = path_1.default.join(__dirname, "./dist");
            this.app.use(express_1.default.static(clientPath));
        }
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("\nServer Mode: " + _this.mode);
            console.log("Server is listening on port: " + _this.port + "\n");
        });
    };
    return Server;
}());
exports.default = Server;
