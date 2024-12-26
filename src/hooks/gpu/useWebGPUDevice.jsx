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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebGPUDevice = exports.WebGPUDeviceContextProvider = exports.WebGPUDeviceContext = void 0;
var react_1 = require("react");
exports.WebGPUDeviceContext = react_1.default.createContext(null);
var WebGPUDeviceContextProvider = function (_a) {
    var loadingMessage = _a.loadingMessage, notSupportedMessage = _a.notSupportedMessage, children = _a.children;
    var _b = (0, react_1.useState)(null), device = _b[0], setDevice = _b[1];
    var _c = (0, react_1.useState)(null), isWebGPUSupported = _c[0], setIsWebGPUSupported = _c[1];
    (0, react_1.useLayoutEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var initWebGPU;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        initWebGPU = function (callback) {
                            return __awaiter(this, void 0, void 0, function () {
                                var requestDevice, _a;
                                var _this = this;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            requestDevice = function () { return __awaiter(_this, void 0, void 0, function () {
                                                var adapter, device_1, ex_1;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!navigator.gpu || !navigator.gpu.requestAdapter) {
                                                                setIsWebGPUSupported(false);
                                                                return [2 /*return*/];
                                                            }
                                                            _a.label = 1;
                                                        case 1:
                                                            _a.trys.push([1, 4, , 6]);
                                                            return [4 /*yield*/, navigator.gpu.requestAdapter()];
                                                        case 2:
                                                            adapter = _a.sent();
                                                            if (!adapter) {
                                                                setIsWebGPUSupported(false);
                                                                return [2 /*return*/];
                                                            }
                                                            return [4 /*yield*/, adapter.requestDevice()];
                                                        case 3:
                                                            device_1 = _a.sent();
                                                            device_1.lost.then(function (info) { return __awaiter(_this, void 0, void 0, function () {
                                                                var _a;
                                                                return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            console.error("WebGPU device was lost: ".concat(info.message, ": ").concat(info.reason));
                                                                            if (!(info.reason !== "destroyed")) return [3 /*break*/, 2];
                                                                            // try again
                                                                            console.error("Trying to recreate the device...");
                                                                            _a = callback;
                                                                            return [4 /*yield*/, requestDevice()];
                                                                        case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                                                                        case 2: return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); });
                                                            return [2 /*return*/, device_1];
                                                        case 4:
                                                            ex_1 = _a.sent();
                                                            console.error("Trying to recreate the device..." + ex_1);
                                                            return [4 /*yield*/, requestDevice()];
                                                        case 5: return [2 /*return*/, _a.sent()];
                                                        case 6: return [2 /*return*/];
                                                    }
                                                });
                                            }); };
                                            _a = callback;
                                            return [4 /*yield*/, requestDevice()];
                                        case 1:
                                            _a.apply(void 0, [_b.sent()]);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        };
                        return [4 /*yield*/, initWebGPU(function (device) {
                                if (!navigator.gpu || !device) {
                                    setIsWebGPUSupported(false);
                                    return;
                                }
                                setIsWebGPUSupported(true);
                                setDevice(device);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
        return function () {
            device === null || device === void 0 ? void 0 : device.destroy();
        };
    }, []);
    if (isWebGPUSupported === null) {
        return loadingMessage ? loadingMessage : <p>Loading...</p>;
    }
    if (!isWebGPUSupported) {
        return notSupportedMessage ? (notSupportedMessage) : (<p>WebGPU is not supported on this browser.</p>);
    }
    return !device ? null : (<exports.WebGPUDeviceContext.Provider value={device}>
      {children}
    </exports.WebGPUDeviceContext.Provider>);
};
exports.WebGPUDeviceContextProvider = WebGPUDeviceContextProvider;
var useWebGPUDevice = function () {
    var device = react_1.default.useContext(exports.WebGPUDeviceContext);
    if (device == null) {
        throw new Error("useWebGPUDevice must be used within a WebGPUDeviceContextProvider");
    }
    return device;
};
exports.useWebGPUDevice = useWebGPUDevice;
