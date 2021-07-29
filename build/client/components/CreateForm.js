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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
var CreateForm = function (props) {
    var setNewProduct = props.setNewProduct;
    return (React.createElement(antd_1.Form, { onFieldsChange: function (changedFields, allFields) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setNewProduct(allFields.reduce(function (previousValue, currentValue) {
                previousValue[currentValue.name[0]] = currentValue.value;
                return previousValue;
            }, {}));
        } },
        React.createElement(antd_1.Form.Item, { label: "Name", name: "name" },
            React.createElement(antd_1.Input, null)),
        React.createElement(antd_1.Form.Item, { label: "Description", name: "description" },
            React.createElement(antd_1.Input, null)),
        React.createElement(antd_1.Form.Item, { label: "Image URL", name: "imgUrl" },
            React.createElement(antd_1.Input, null)),
        React.createElement(antd_1.Form.Item, { label: "Price", name: "price" },
            React.createElement(antd_1.InputNumber, { formatter: function (value) {
                    return ("$" + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }, min: 0 })),
        React.createElement(antd_1.Form.Item, { label: "Inventory", name: "inventory" },
            React.createElement(antd_1.InputNumber, { min: 0 }))));
};
exports.default = CreateForm;
