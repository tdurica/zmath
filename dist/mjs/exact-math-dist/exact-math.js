const exactMath = function (t) { var e = {}; function r(n) { if (e[n])
    return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports; } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
    return t; if (4 & e && "object" == typeof t && t && t.__esModule)
    return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
    for (var i in t)
        r.d(n, i, function (e) { return t[e]; }.bind(null, i)); return n; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "", r(r.s = 4); }([function (t, e, r) { (function (e) { t.exports = function (t) { var e = {}; function r(n) { if (e[n])
        return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports; } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
        return t; if (4 & e && "object" == typeof t && t && t.__esModule)
        return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var i in t)
            r.d(n, i, function (e) { return t[e]; }.bind(null, i)); return n; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "", r(r.s = 0); }([function (t, r, n) {
            "use strict";
            function i(t) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
            function o(t, e) { var r; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function (t, e) { if (t) {
                    if ("string" == typeof t)
                        return a(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(t, e) : void 0;
                } }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0, i = function () { };
                    return { s: i, n: function () { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }; }, e: function (t) { throw t; }, f: i };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            } var o, u = !0, s = !1; return { s: function () { r = t[Symbol.iterator](); }, n: function () { var t = r.next(); return u = t.done, t; }, e: function (t) { s = !0, o = t; }, f: function () { try {
                    u || null == r.return || r.return();
                }
                finally {
                    if (s)
                        throw o;
                } } }; }
            function a(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r]; return n; }
            function u(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            n.r(r);
            var s = function () { return e || window; }.bind(void 0), l = function () { function t() { !function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t); var e = this; return function (t, r) { return e._setInitials(arguments, t, r), e._validate(); }; } var e, r; return e = t, (r = [{ key: "_setInitials", value: function (t, e, r) { this._arguments = t, this._value = e, this._type = r; } }, { key: "_validate", value: function () { return !!this.isTypeDefined && (this.isTypeNull ? this.isValueNull : this.isTypeUndefined ? void 0 === this._value : this.isTypeFunction ? this._typeConstructor() : this.isTypeArray ? this._typeArray() : this.isTypeString ? this._typeString() : !!this.isTypeRegExp && this._typeRegexp()); } }, { key: "_typeConstructor", value: function () { return !this.isValueUndefined && !this.isValueNull && Object.getPrototypeOf(this._value).constructor === this._type; } }, { key: "_typeArray", value: function () { if (!this._type.length)
                        return !0; var t, e = o(this._type); try {
                        for (e.s(); !(t = e.n()).done;) {
                            var r = t.value;
                            if (null === r && this.isValueNull)
                                return !0;
                            if (void 0 === r && this.isValueUndefined)
                                return !0;
                            if (!this.isValueNull && !this.isValueUndefined && null != r && Object.getPrototypeOf(this._value).constructor === r)
                                return !0;
                        }
                    }
                    catch (t) {
                        e.e(t);
                    }
                    finally {
                        e.f();
                    } return !1; } }, { key: "_typeString", value: function () { var t = this, e = this._type.toLowerCase().split("|"); if (1 === e.length && "" === e[0] || e.some((function (t) { return "any" === t; })))
                        return !0; if (e.some((function (t) { return "truthy" === t; })) && this._value)
                        return !0; if (e.some((function (t) { return "falsy" === t; })) && !this._value)
                        return !0; if (this.isValueUndefined && e.some((function (t) { return "undefined" === t; })))
                        return !0; if (this.isValueNull && e.some((function (t) { return "null" === t; })))
                        return !0; if (this.isValueNull || void 0 === this._value)
                        return !1; var r = Object.getPrototypeOf(this._value).constructor; return !!(this.argumentsRegExp.test(this._value.toString()) && r && r === Object && e.some((function (t) { return "arguments" === t; }))) || !!(e.some((function (t) { return "instance" === t; })) && this.isValueObject && r && r !== s()[r.name]) || !(!e.some((function (t) { return "objectable" === t; })) || !this.isObjectInstance) || e.some((function (e) { return e === Object.getPrototypeOf(t._value).constructor.name.toLowerCase(); })); } }, { key: "_typeRegexp", value: function () { if (this._exec("any") || this._type.test(""))
                        return !0; if (this._exec("truthy") && this._value)
                        return !0; if (this._exec("falsy") && !this._value)
                        return !0; if (this._type.test("undefined") && this.isValueUndefined)
                        return !0; if (this._type.test("null") && this.isValueNull)
                        return !0; if (this.isValueNull || void 0 === this._value)
                        return !1; var t = Object.getPrototypeOf(this._value).constructor; return !!(this._exec("arguments") && t && t === Object && this.argumentsRegExp.test(this._value.toString())) || !!(this._exec("instance") && this.isValueObject && t && t !== s()[t.name]) || !(!this._exec("objectable") || !this.isObjectInstance) || this._type.test(Object.getPrototypeOf(this._value).constructor.name); } }, { key: "_exec", value: function (t) { var e = this._type.exec(t); return null !== e && e[0] === t; } }, { key: "isTypeDefined", get: function () { return this._arguments.length >= 2; } }, { key: "isTypeString", get: function () { return "string" == typeof this._type; } }, { key: "isTypeFunction", get: function () { return "function" == typeof this._type; } }, { key: "isTypeUndefined", get: function () { return void 0 === this._type; } }, { key: "isValueUndefined", get: function () { return void 0 === this._value; } }, { key: "isTypeNull", get: function () { return null === this._type; } }, { key: "isValueNull", get: function () { return null === this._value; } }, { key: "isValueObject", get: function () { return "object" === i(this._value); } }, { key: "isObjectInstance", get: function () { return this._value instanceof Object; } }, { key: "isTypeArray", get: function () { return !this.isTypeNull && "object" === i(this._type) && this._type.constructor === Array; } }, { key: "isTypeRegExp", get: function () { return this._type && this._type.constructor === RegExp; } }, { key: "argumentsRegExp", get: function () { return /^\[object Arguments\]$/i; } }]) && u(e.prototype, r), t; }();
            r.default = new l;
        }]).default; }).call(this, r(2)); }, function (t, e, r) { t.exports = function (t) { var e = {}; function r(n) { if (e[n])
        return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports; } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
        return t; if (4 & e && "object" == typeof t && t && t.__esModule)
        return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var i in t)
            r.d(n, i, function (e) { return t[e]; }.bind(null, i)); return n; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "", r(r.s = 2); }([function (t, e) { t.exports = r(0); }, function (t, e) { t.exports = r(3); }, function (t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1), i = r.n(n), o = r(0), a = r.n(o);
            function u(t) { return function (t) { if (Array.isArray(t))
                return l(t); }(t) || function (t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t); }(t) || s(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
            function s(t, e) { if (t) {
                if ("string" == typeof t)
                    return l(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(t, e) : void 0;
            } }
            function l(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r]; return n; }
            function c(t) { return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
            function f(t, e) { if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && function (t, e) { (Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; })(t, e); }(t, e); }
            function h(t) { var e = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1; if (Reflect.construct.sham)
                return !1; if ("function" == typeof Proxy)
                return !0; try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
            }
            catch (t) {
                return !1;
            } }(); return function () { var r, n = v(t); if (e) {
                var i = v(this).constructor;
                r = Reflect.construct(n, arguments, i);
            }
            else
                r = n.apply(this, arguments); return d(this, r); }; }
            function d(t, e) { return !e || "object" !== c(e) && "function" != typeof e ? function (t) { if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; }(t) : e; }
            function v(t) { return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t); })(t); }
            function g(t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }
            function p(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            function y(t, e, r) { return e && p(t.prototype, e), r && p(t, r), t; }
            var m = function () { function t(e) { g(this, t), Object.defineProperty(this, "_listLength", { value: e }); } return y(t, [{ key: "_add", value: function (t, e) { var r = a()(e, "arguments") ? Array.prototype.slice.call(e, 0) : e; this[t] = r; } }, { key: "forEach", value: function (t) { i()(arguments, [Function], (function (t) { throw new TypeError("".concat("move-on", ": forEach: ").concat(t.message)); })); for (var e = 0, r = Object.keys(this); e < r.length; e++) {
                        var n = r[e];
                        t(this[n], Number(n), this);
                    } } }, { key: "forAll", value: function (t) { i()(arguments, [Function], (function (t) { throw new TypeError("".concat("move-on", ": forAll: ").concat(t.message)); })); for (var e = 0, r = Object.keys(this); e < r.length; e++) {
                        var n = r[e];
                        for (var o in this[n])
                            t(this[n][o], Number(n), Number(o), this);
                    } } }, { key: "missing", get: function () { for (var t = [], e = 0; e < this._listLength; e++)
                        a()(this[e], Array) || t.push(e); return t; } }]), t; }(), b = function (t) { f(r, t); var e = h(r); function r(t) { return g(this, r), e.call(this, t); } return r; }(m), _ = function (t) { f(r, t); var e = h(r); function r(t) { return g(this, r), e.call(this, t); } return r; }(m), w = function () { function t(e) { var r = e.time, n = e.callback; g(this, t), this._time = r, this._callback = n, this._pending = !1, this._timedOut = !1, this._quietMode = !1, this._mount(); } return y(t, [{ key: "_mount", value: function () { var t = this; this._pending = !0, this._timer = setTimeout((function () { t._pending = !1, t._timedOut = !0, t._quietMode || t._callback(t._timeoutError); }), this._time); } }, { key: "unmount", value: function () { this._pending && (clearTimeout(this._timer), this._pending = !1); } }, { key: "quiet", value: function () { this._pending && (this._quietMode = !0); } }, { key: "timedOut", get: function () { return this._timedOut; } }, { key: "_timeoutError", get: function () { var t = new Error; return t.message = "Timeout. The chained function did not respond in the expected time of ".concat(this._time, " ms."), t.info = "timeout", t.code = "ETIMEDOUT", t; } }]), t; }(), E = function () { function t(e, r) { g(this, t), this._mode = e, this._init.apply(this, u(r)); } return y(t, [{ key: "_validateArguments", value: function (t) { var e = [Array, [Object, null], Function, Function]; i()(t, e, (function (t) { throw new TypeError("".concat("move-on", ": ").concat(t.message)); })); } }, { key: "_validateFunctionList", value: function (t) { var e = this; this.list = t; var r = function (t) { var r = e.list[t]; if (!a()(r, [Function, Array]))
                        throw e.error.incorrectListItem(t); if (a()(r, Array)) {
                        if (0 === r.length)
                            return "continue";
                        r.forEach((function (n, i) { if (0 !== i && !a()(n, [String, Function]))
                            throw e.error.incorrectMethodItem(t, i); if (0 !== i && a()(n, String) && !a()(r[0][n], Function))
                            throw e.error.incorrectMethodName(n, t, i); }));
                    } }; for (var n in this.list)
                        r(n); } }, { key: "_validateConfig", value: function (t) { this.config = this.defaults, a()(t, null) || ((t.hasOwnProperty("timeout") && a()(t.timeout, null) || a()(t.timeout, Number) & t.timeout >= 0 & Math.round(t.timeout) === t.timeout && !isNaN(t.timeout)) && (this.config.timeout = t.timeout), t.hasOwnProperty("bind") && a()(t.bind, Boolean) && (this.config.bind = t.bind), t.hasOwnProperty("context") && (this.config.context = t.context), t.hasOwnProperty("passContext") && a()(t.passContext, Boolean) && (this.config.passContext = t.passContext)); } }, { key: "_init", value: function (t, e, r, n) { this._validateArguments(arguments), this._validateFunctionList(t), this._validateConfig(e), this.finalCatch = this._bind({ caller: n }), this.finalDone = this._bind({ caller: r, reject: this.finalCatch }), this[this._mode](); } }, { key: "_moveOn", value: function () { var t = this; this.list.reduceRight((function (e, r) { if (a()(r, Function)) {
                        var n = { caller: r, resolve: e, reject: t.finalCatch, timeout: !0 };
                        return t._bind(n);
                    } var i = r[0]; return r.reduceRight((function (e, r, n) { return 0 === n ? e : t._bind({ caller: [i, r], resolve: e, reject: t.finalCatch, timeout: !0 }); }), e); }), this.finalDone)(); } }, { key: "_moveAll", value: function () { var t = this, e = new Map, r = this.timeoutDefined ? new w(this.timeoutConfig) : null, n = new b(this.listLength), i = !1, o = 0, a = function (a, u) { return function () { !0 === e.get(a) || i || (u ? (e.set(a, !0), n._add(a, arguments), ++o === this.listLength && (r && r.unmount(), r && r.timedOut || this.finalDone(n))) : (r && r.unmount(), r && r.timedOut || this.finalCatch.apply(this, arguments), i = !0)); }.bind(t); }; this._loopChain((function (e, r, n) { if (t._bind({ caller: e, resolve: a(r, !0), reject: a(r, !1) })(), i)
                        return n(); }), this.finalDone); } }, { key: "_moveEach", value: function () { var t = this, e = new Map, r = this.timeoutDefined ? new w(this.timeoutConfig) : null, n = new b(this.listLength), i = 0, o = function (o, a) { return function () { !0 !== e.get(o) && (e.set(o, !0), a && n._add(o, arguments), a || r && r.timedOut || this.finalCatch.apply(this, arguments), ++i === this.listLength && (r && r.unmount(), r && r.timedOut || this.finalDone(n))); }.bind(t); }; this._loopChain((function (e, r) { t._bind({ caller: e, resolve: o(r, !0), reject: o(r, !1) })(); }), this.finalDone); } }, { key: "_moveFirst", value: function () { var t = this, e = new Map, r = this.timeoutDefined ? new w(this.timeoutConfig) : null, n = new _(this.listLength), i = !1, o = 0, a = function (a, u) { return function () { !0 === e.get(a) || i || (u ? (r && r.unmount(), r && r.timedOut || this.finalDone.apply(this, arguments), i = !0) : (e.set(a, !0), n._add(a, arguments), ++o === this.listLength && (r && r.unmount(), r && r.timedOut || this.finalCatch(n)))); }.bind(t); }; this._loopChain((function (e, r, n) { if (t._bind({ caller: e, resolve: a(r, !0), reject: a(r, !1) })(), i)
                        return n(); }), this.finalDone); } }, { key: "_loopChain", value: function (t, e) { var r, n = 0, i = function () { return o = !0; }, o = !1, u = function (t, e) { var r; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (r = s(t))) {
                            r && (t = r);
                            var n = 0, i = function () { };
                            return { s: i, n: function () { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }; }, e: function (t) { throw t; }, f: i };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    } var o, a = !0, u = !1; return { s: function () { r = t[Symbol.iterator](); }, n: function () { var t = r.next(); return a = t.done, t; }, e: function (t) { u = !0, o = t; }, f: function () { try {
                            a || null == r.return || r.return();
                        }
                        finally {
                            if (u)
                                throw o;
                        } } }; }(this.list); try {
                        for (u.s(); !(r = u.n()).done;) {
                            var l = r.value;
                            if (a()(l, Function))
                                t(l, n++, i);
                            else
                                for (var c = 1; c < l.length && (t([l[0], l[c]], n++, i), !o); c++)
                                    ;
                            if (o)
                                break;
                        }
                    }
                    catch (t) {
                        u.e(t);
                    }
                    finally {
                        u.f();
                    } 0 === n && e(); } }, { key: "_bind", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.caller, r = t.resolve, n = t.reject, i = t.timeout, o = this.config.passContext ? [this.config.context] : []; return function () { var t, s, l = this.timeoutDefined && i ? new w(this.timeoutConfig) : null, c = []; this._middleChain(c, r, "resolve", l), this._middleChain(c, n, "reject", l); var f = [].concat(c, o); return a()(e, Array) ? a()(e[1], Function) ? (t = e[1]).call.apply(t, [e[0]].concat(u(f), Array.prototype.slice.call(arguments))) : (s = e[0])[e[1]].apply(s, u(f).concat(Array.prototype.slice.call(arguments))) : this.config.bind ? e.call.apply(e, [this.config.context].concat(u(f), Array.prototype.slice.call(arguments))) : e.apply(void 0, u(f).concat(Array.prototype.slice.call(arguments))); }.bind(this); } }, { key: "_middleChain", value: function (t, e, r, n) { a()(e, Function) && t.push(Object.defineProperty(function () { n && n.quiet(), n && n.timedOut || e.apply(void 0, arguments); }.bind(this), "name", { value: r })); } }, { key: "error", get: function () { return { incorrectListItem: function (t) { return new TypeError("".concat("move-on", ": Invalid argument [0]. Incorrect [").concat(t, "] item type. The item of [Function|Array] type is expected.")); }, incorrectObjectItem: function (t) { return new TypeError("".concat("move-on", ": Invalid argument [0]. Incorrect [").concat(t, "][0] item. The item of [Object] type is expected.")); }, incorrectMethodItem: function (t, e) { return new TypeError("".concat("move-on", ": Invalid argument [0]. Incorrect [").concat(t, "][").concat(e, "] item. The [Function|String] item is expected.")); }, incorrectMethodName: function (t, e, r) { return new TypeError("".concat("move-on", ": Invalid argument [0]. Incorrect [").concat(e, "][").concat(r, "] item. The given [").concat(e, '][0] object does not define ["').concat(t, '"] method.')); } }; } }, { key: "defaults", get: function () { return { timeout: 1e4, bind: !0, context: {}, passContext: !0 }; } }, { key: "listLength", get: function () { for (var t = 0, e = 0; e < this.list.length; e++)
                        a()(this.list[e], Function) ? t++ : a()(this.list[e], Array) && (t += this.list[e].length - 1); return t; } }, { key: "timeoutConfig", get: function () { return { time: this.config.timeout, callback: this.finalCatch }; } }, { key: "timeoutDefined", get: function () { return !(null === this.config.timeout || this.config.timeout === 1 / 0); } }]), t; }(), k = { all: { value: function () { new E("_moveAll", arguments); } }, each: { value: function () { new E("_moveEach", arguments); } }, first: { value: function () { new E("_moveFirst", arguments); } } };
            e.default = Object.defineProperties((function () { new E("_moveOn", arguments); }), k);
        }]).default; }, function (t, e) { var r; r = function () { return this; }(); try {
        r = r || new Function("return this")();
    }
    catch (t) {
        "object" == typeof window && (r = window);
    } t.exports = r; }, function (t, e, r) { t.exports = function (t) { var e = {}; function r(n) { if (e[n])
        return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports; } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
        return t; if (4 & e && "object" == typeof t && t && t.__esModule)
        return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var i in t)
            r.d(n, i, function (e) { return t[e]; }.bind(null, i)); return n; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "", r(r.s = 1); }([function (t, e) { t.exports = r(0); }, function (t, e, r) {
            "use strict";
            r.r(e), r.d(e, "default", (function () { return f; }));
            var n = r(0), i = r.n(n);
            function o(t, e, r) { return (o = a() ? Reflect.construct : function (t, e, r) { var n = [null]; n.push.apply(n, e); var i = new (Function.bind.apply(t, n)); return r && u(i, r.prototype), i; }).apply(null, arguments); }
            function a() { if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1; if (Reflect.construct.sham)
                return !1; if ("function" == typeof Proxy)
                return !0; try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
            }
            catch (t) {
                return !1;
            } }
            function u(t, e) { return (u = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; })(t, e); }
            function s(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r]; return n; }
            function l(t, e) { for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            } }
            var c = function () { function t(e, r, n) { if (function (t, e) { if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function"); }(this, t), !i()(e, "arguments"))
                throw new TypeError("typeof-arguments: The [0] argument must be the [arguments] Object."); if (!i()(r, Array))
                throw new TypeError("typeof-arguments: The [1] argument must be of type [Array]."); for (var o = 0; o < r.length; o++)
                if (!i()(e[o], r[o])) {
                    var a = this.getActualType(e[o]), u = this.getExpectedTypes(r[o]), s = "[".concat(a, "] ").concat(u.addons, "argument"), l = u.message, c = "Invalid argument [".concat(o, "]. The ").concat(s, " has been passed, while the ").concat(l, " is expected.");
                    if (i()(n, "function"))
                        return n({ index: o, actual: a, expected: u.expected, message: c, textActual: s, textExpected: l }), function () { return !1; };
                    throw new TypeError(c);
                } return function () { return !0; }; } var e, r; return e = t, (r = [{ key: "getActualType", value: function (t) { return i()(t, null) ? "null" : i()(t, void 0) ? "undefined" : i()(t, "arguments") ? "arguments" : t.constructor.name; } }, { key: "getExpectedTypes", value: function (t) { for (var e = 0, r = ["whenString", "whenRegExp", "whenObject", "whenArray"]; e < r.length; e++) {
                        var n = this[r[e]](t);
                        if (n)
                            return n;
                    } throw new TypeError("typeof-arguments: The expected type is not callable."); } }, { key: "whenString", value: function (t) { if (!i()(t, String))
                        return null; var e = 'argument of type matching string expression "'.concat(t, '"'), r = "", n = ""; return t.split("|").forEach((function (t) { "truthy" === t.toLowerCase() && (r = "<<falsy>> "), "falsy" === t.toLowerCase() && (r = "<<truthy>> "), "objectable" === t.toLowerCase() && (n = "<<non-objectable>> "); })), { message: e, addons: r + n, expected: t }; } }, { key: "whenRegExp", value: function (t) { return i()(t, RegExp) ? { message: "argument of type matching regular expression ".concat(t), addons: function (t) { var e = t.flags.match(/i/), r = t.toString(), n = "", i = ""; return (r = e ? r.toLowerCase() : r).match(/truthy/) && (n = "<<falsy>> "), r.match(/falsy/) && (n = "<<truthy>> "), r.match(/objectable/) && (i = "<<non-objectable>> "), n + i; }(t), expected: t.toString() } : null; } }, { key: "whenObject", value: function (t) { return i()(t, null) ? { message: "argument of type [null]", addons: "", expected: "null" } : i()(t, void 0) ? { message: "argument of type [undefined]", addons: "", expected: "undefined" } : i()(t, Function) ? { message: "argument of type [".concat(t.name, "]"), addons: "", expected: t.name } : null; } }, { key: "whenArray", value: function (t) { if (!i()(t, Array))
                        return null; var e, r = {}, n = function (t, e) { var r; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (r = function (t, e) { if (t) {
                            if ("string" == typeof t)
                                return s(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(t, e) : void 0;
                        } }(t)) || e && t && "number" == typeof t.length) {
                            r && (t = r);
                            var n = 0, i = function () { };
                            return { s: i, n: function () { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }; }, e: function (t) { throw t; }, f: i };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    } var o, a = !0, u = !1; return { s: function () { r = t[Symbol.iterator](); }, n: function () { var t = r.next(); return a = t.done, t; }, e: function (t) { u = !0, o = t; }, f: function () { try {
                            a || null == r.return || r.return();
                        }
                        finally {
                            if (u)
                                throw o;
                        } } }; }(t); try {
                        for (n.s(); !(e = n.n()).done;) {
                            var o = e.value, a = this.whenObject(o);
                            if (i()(a, null))
                                return null;
                            r[a.expected] = a.expected;
                        }
                    }
                    catch (t) {
                        n.e(t);
                    }
                    finally {
                        n.f();
                    } var u = Object.getOwnPropertyNames(r).join("|"); return { message: "argument of type [".concat(u, "]"), addons: "", expected: u }; } }]) && l(e.prototype, r), t; }();
            function f() { return o(c, Array.prototype.slice.call(arguments))(); }
        }]).default; }, function (t, e, r) {
        "use strict";
        r.r(e);
        var n = r(0), i = r.n(n);
        function o(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var a = function () { function t(e) { return function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this, t), this._turnNegatives(e.digits), new g(e); } var e, r, n; return e = t, n = [{ key: "_subDigits", value: function (t, e, r) { var n = t.after.length > e.after.length ? t.after.length : e.after.length, i = t.before.length > e.before.length ? t.before.length : e.before.length, o = !1, a = s(n, "after"), u = s(i, "before"); return new N({ before: u, after: a, e: 0, negative: r }); function s(r, n) { for (var i = [], a = r - 1; a >= 0; a--) {
                    var u = "after" === n ? a : a - (r - t[n].length), s = "after" === n ? a : a - (r - e[n].length), l = Number(t[n][u]) || 0, c = Number(e[n][s]) || 0;
                    o && (0 == l ? l = 9 : (l--, o = !1)), l < c ? (i[a] = 10 + l - c, o = !0) : i[a] = l - c;
                } return i; } } }], (r = [{ key: "_turnNegatives", value: function (t) { for (var e = 1; e < t.length; e++)
                    t[e].negative = !t[e].negative; } }]) && o(e.prototype, r), n && o(e, n), t; }(), u = function (t) { return t % 1 == 0; }, s = function (t, e) { for (var r = [], n = 0; n < e; n++)
            r[n] = t; return r; }, l = function (t, e) { if (t[e] <= 9)
            return 0; var r = t[e] % 10, n = (t[e] - r) / 10; return t[e] = r, n; }, c = function (t, e) { if (t.before.length > e.before.length)
            return !0; if (t.before.length < e.before.length)
            return !1; for (var r = 0; r < t.before.length; r++) {
            var n = Number(t.before[r]), i = Number(e.before[r]);
            if (n > i)
                return !0;
            if (n < i)
                return !1;
        } for (var o = 0;;) {
            var a = Number(t.after[o]), u = Number(e.after[o]);
            if (Number.isNaN(a) && Number.isNaN(u))
                return !1;
            if (a > u || Number.isNaN(u))
                return !0;
            if (a < u || Number.isNaN(a))
                return !1;
            o++;
        } }, f = function (t, e) { var r = 0 === e, n = e === t.length - 1; return { first: r, last: n, item: t[e], index: e, previous: r ? null : t[e - 1], next: n ? null : t[e + 1] }; };
        function h(t, e) { var r; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (r = function (t, e) { if (!t)
                return; if ("string" == typeof t)
                return d(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); "Object" === r && t.constructor && (r = t.constructor.name); if ("Map" === r || "Set" === r)
                return Array.from(t); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return d(t, e); }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var n = 0, i = function () { };
                return { s: i, n: function () { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }; }, e: function (t) { throw t; }, f: i };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var o, a = !0, u = !1; return { s: function () { r = t[Symbol.iterator](); }, n: function () { var t = r.next(); return a = t.done, t; }, e: function (t) { u = !0, o = t; }, f: function () { try {
                a || null == r.return || r.return();
            }
            finally {
                if (u)
                    throw o;
            } } }; }
        function d(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r]; return n; }
        function v(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var g = function () { function t(e) { var r = e.digits, n = e.addToFirst, i = void 0 !== n && n; !function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this, t), this.beforeTens = 0, this.addToFirst = i; var o, u = { neg: [], pos: [] }, s = h(r); try {
            for (s.s(); !(o = s.n()).done;) {
                var l = o.value;
                u[l.negative ? "neg" : "pos"].push(l), l.removeE();
            }
        }
        catch (t) {
            s.e(t);
        }
        finally {
            s.f();
        } var f = !!u.pos.length, d = !!u.neg.length; if (!d || !f)
            return this._addDigits(u[f ? "pos" : "neg"], d); var v = 1 === u.neg.length ? u.neg[0] : this._addDigits(u.neg, !0), g = 1 === u.pos.length ? u.pos[0] : this._addDigits(u.pos, !1), p = c(v, g), y = p ? v : g, m = p ? g : v; return a._subDigits(y, m, p); } var e, r, n; return e = t, (r = [{ key: "_addDigits", value: function (t, e) { switch (t.reduce(this._reduceAfter.bind(this)), t.reduce(this._reduceBefore.bind(this)), this.addToFirst) {
                    case !0: return t[0].before = this.sumBefore, t[0].after = this.sumAfter, t[0].e = 0, t[0].negative = e, t[0];
                    default: return new N({ before: this.sumBefore, after: this.sumAfter, e: 0, negative: e });
                } } }, { key: "_reduceAfter", value: function (t, e, r, n) { for (var i = t.after.length > e.after.length ? t : e, o = i.after, a = i === t ? e.after : t.after, u = 0, s = a.length - 1; s >= 0; s--)
                    o[s] = Number(o[s]) + Number(a[s]) + u, u = l(o, s); return this.beforeTens += u, u = 0, r === n.length - 1 && (this.sumAfter = o), i; } }, { key: "_reduceBefore", value: function (t, e, r, n) { for (var i = t.before.length > e.before.length ? t : e, o = i.before, a = i === t ? e.before : t.before, u = 0; u < o.length; u++) {
                    var s = a.length - 1 - u, c = o.length - 1 - u;
                    if (o[c] = Number(o[c]) + (s >= 0 ? Number(a[s]) : 0) + this.beforeTens, this.beforeTens = l(o, c), 0 === s && 0 === this.beforeTens)
                        break;
                } return this.beforeTens > 0 && o.unshift(this.beforeTens), this.beforeTens = 0, r === n.length - 1 && (this.sumBefore = o), i; } }]) && v(e.prototype, r), n && v(e, n), t; }();
        function p(t) { return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
        function y(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && m(t, e); }
        function m(t, e) { return (m = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t; })(t, e); }
        function b(t) { var e = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1; if (Reflect.construct.sham)
            return !1; if ("function" == typeof Proxy)
            return !0; try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
        }
        catch (t) {
            return !1;
        } }(); return function () { var r, n = w(t); if (e) {
            var i = w(this).constructor;
            r = Reflect.construct(n, arguments, i);
        }
        else
            r = n.apply(this, arguments); return _(this, r); }; }
        function _(t, e) { return !e || "object" !== p(e) && "function" != typeof e ? function (t) { if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; }(t) : e; }
        function w(t) { return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t); })(t); }
        function E(t) { return function (t) { if (Array.isArray(t))
            return k(t); }(t) || function (t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t); }(t) || function (t, e) { if (!t)
            return; if ("string" == typeof t)
            return k(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); "Object" === r && t.constructor && (r = t.constructor.name); if ("Map" === r || "Set" === r)
            return Array.from(t); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return k(t, e); }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function k(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r]; return n; }
        function x(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function S(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var O = function () { function t(e, r) { var n = e.digit, i = e.places, o = e.trim; if (x(this, t), this.action = r, this.digit = n, this.digit.removeE(), this.places = i, this.trim = o, 0 === this.places)
            return this.digit; this.mode = this.places > 0 ? "before" : "after"; var a = "before" === this.mode ? this.places - 1 : 0; "after" === this.mode && (this.places *= -1), "before" === this.mode && (this.places = this.digit.before.length - this.places + 1); var u = this._reduceRight(); return null === u ? new N({ before: [0], after: [], e: 0, negative: !1 }) : (this._round(u), this._addZeros(a), this.digit.trimZeros(), this._fillZeros(i), this.digit); } var e, r, n; return e = t, (r = [{ key: "_fillZeros", value: function (t) { var e = Math.abs(t); if (!(!0 === this.trim || t >= 0 || this.digit.after.length >= e))
                    for (; this.digit.after.length < e;)
                        this.digit.after.push(0); } }, { key: "_reduceRight", value: function () { return "ceil" !== this.action && this.places < 0 && "before" === this.mode ? null : (this.places < 0 && (this.places = 0), this.digit[this.mode].splice(this.places, this.digit[this.mode].length - this.places).concat("before" === this.mode ? this.digit.after.splice(0, this.digit.after.length) : [])); } }, { key: "_round", value: function (t) { function e() { for (var t = this.digit.after.length - 1; t >= 0; t--) {
                    if (Number(this.digit.after[t]) < 10)
                        return;
                    var e = t - 1 < 0;
                    t === this.digit.after.length - 1 ? this.digit.after.pop() : this.digit.after[t] = 0, this.digit[e ? "before" : "after"][e ? this.digit.before.length - 1 : t - 1]++;
                } for (var r = this.digit.before.length - 1; r >= 0; r--) {
                    if (Number(this.digit.before[r]) < 10)
                        return;
                    var n = r - 1 < 0;
                    this.digit.before[r] = 0, n ? this.digit.before.unshift(1) : this.digit.before[r - 1]++;
                } } "floor" !== this.action && t.length && ("round" === this.action ? function () { return Number(t[0]) >= 5; }.call(this) : function () { for (var e in t)
                    if (Number(t[e]) > 0)
                        return !0; return !1; }.call(this)) && (this.digit.after.length ? (this.digit.after[this.digit.after.length - 1]++, e.call(this)) : this.digit.before.length ? (this.digit.before[this.digit.before.length - 1]++, e.call(this)) : this.digit.before[0] = 1); } }, { key: "_addZeros", value: function (t) { var e; this.digit.before.length ? (e = this.digit.before).push.apply(e, E(s(0, t))) : this.digit.before[0] = 0; } }]) && S(e.prototype, r), n && S(e, n), t; }(), j = function (t) { y(r, t); var e = b(r); function r(t) { return x(this, r), e.call(this, t, "round"); } return r; }(O), T = function (t) { y(r, t); var e = b(r); function r(t) { return x(this, r), e.call(this, t, "ceil"); } return r; }(O), C = function (t) { y(r, t); var e = b(r); function r(t) { return x(this, r), e.call(this, t, "floor"); } return r; }(O);
        function D(t) { return function (t) { if (Array.isArray(t))
            return A(t); }(t) || function (t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t); }(t) || function (t, e) { if (!t)
            return; if ("string" == typeof t)
            return A(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); "Object" === r && t.constructor && (r = t.constructor.name); if ("Map" === r || "Set" === r)
            return Array.from(t); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return A(t, e); }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function A(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r]; return n; }
        function P(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var N = function () { function t(e) { if (function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this, t), i()(e, Object))
            this.negative = e.negative, this.before = e.before, this.after = e.after, this.e = e.e;
        else {
            this.print = i()(e, String) ? e : String(e);
            var r = /^\s*([+-]?)(\d*)(?:(?:([.,])(\d+)))?(?:e([+-]\d+))?\s*$/.exec(this.print);
            this.negative = "-" === r[1], this.before = (r[2] || "0").split(""), this.after = (r[4] || "").split(""), this.e = r[5] ? Number(r[5]) : 0;
        } this.trimZeros(); } var e, r, n; return e = t, (r = [{ key: "trimZeros", value: function () { for (; this.before.length > 1 && 0 == this.before[0];)
                    this.before.shift(); for (; this.after.length && 0 == this.after[this.after.length - 1];)
                    this.after.pop(); this.before.length || (this.before[0] = 0); } }, { key: "setExponential", value: function (t, e) { if (!this.after.length && this.before.length >= e)
                    for (; this.before.length > 1 && 0 == this.before[this.before.length - 1];)
                        this.before.pop(), this.e++;
                else if (this.beforeEqualsZero && this.after.length >= t) {
                    for (; 0 == this.after[0];)
                        this.after.shift(), this.e--;
                    this.after.length ? (this.before[0] = this.after.shift(), this.e--) : this.before[0] = 0;
                } } }, { key: "reduceE", value: function () { if (this.e > 0) {
                    var t, e = this.after.splice(0, this.e);
                    (t = this.before).push.apply(t, D(e)), this.e = this.e - e.length;
                } if (this.e < 0) {
                    var r, n = this.before.length + this.e, i = n < 0 ? 0 : n, o = this.before.splice(i, this.before.length - i);
                    (r = this.after).unshift.apply(r, D(o)), this.e = this.e + o.length, this.before.length || (this.before[0] = 0);
                } this.trimZeros(); } }, { key: "removeE", value: function (t) { var e, r; i()(t, Number) && (this.e += t), this.reduceE(), this.e > 0 && (e = this.before).push.apply(e, D(s(0, this.e))), this.e < 0 && (r = this.after).unshift.apply(r, D(s(0, -1 * this.e))), this.e = 0; } }, { key: "toString", value: function () { return (!this.negative || this.beforeEqualsZero && !this.after.length ? "" : "-") + (this.before.length ? this.before.join("") : "0") + (this.after.length ? "." + this.after.join("") : "") + (this.e > 0 ? "e+" + String(this.e) : this.e < 0 ? "e" + String(this.e) : ""); } }, { key: "toIntegers", value: function () { var t; this.after.length && (this.e -= this.after.length, (t = this.before).push.apply(t, D(this.after.splice(0, this.after.length)))), this.e > 0 && this.removeE(), this.trimZeros(); } }, { key: "negate", value: function () { this.negative = !this.negative; } }, { key: "floor", value: function (t) { new C({ digit: this, places: t }); } }, { key: "round", value: function (t) { new j({ digit: this, places: t }); } }, { key: "add", value: function (t) { new g({ digits: [this, t], addToFirst: !0 }); } }, { key: "equalsZero", get: function () { return 0 == this.toString(); } }, { key: "equalsTenths", get: function () { return this.trimZeros(), !(1 != this.before[0] || this.after.length || !this.before.every((function (t, e) { return 0 === e || 0 == t; }))) || !(1 != this.after[this.after.length - 1] || !this.beforeEqualsZero || !this.after.every((function (t, e, r) { return e === r.length - 1 || 0 == t; }))); } }, { key: "beforeEqualsZero", get: function () { return 1 === this.before.length && 0 == this.before[0]; } }]) && P(e.prototype, r), n && P(e, n), t; }();
        function I(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var R = function () { function t(e) { var r, n = this, i = e.digits, o = e.zeroValue, a = void 0 === o ? -1 : o, u = e.power, s = void 0 === u ? null : u; if (function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this, t), a >= 0)
            return new N({ before: [0], after: [], e: 0, negative: !1 }); if (i[0].toIntegers(), null === s)
            r = i.reduce((function (t, e) { return e.toIntegers(), n.constructor._mulDigits(t, e); }));
        else {
            r = i[0];
            for (var l = 0; l < s - 1; l++)
                r = this.constructor._mulDigits(r, i[0]);
        } return r.removeE(), r; } var e, r, n; return e = t, n = [{ key: "_mulDigits", value: function (t, e) { var r = [], n = t.before.length + e.before.length - 1, i = t.equalsTenths, o = e.equalsTenths; if (i || o)
                    return i && t.setExponential(1, 1), o && e.setExponential(1, 1), new N({ before: i ? e.before.slice() : t.before.slice(), after: i ? e.after.slice() : t.after.slice(), e: t.e + e.e, negative: !(t.negative && e.negative || !t.negative && !e.negative) }); for (var a = n - 1, u = t.before.length - 1; u >= 0; u--, a--)
                    for (var s = 0, c = e.before.length - 1; c >= 0; c--, s++)
                        r[a - s] = r[a - s] || 0, r[a - s] += t.before[u] * e.before[c]; for (var f = r.length - 1; f >= 0; f--) {
                    var h = l(r, f);
                    f - 1 >= 0 && (r[f - 1] += h);
                } for (; h > 0;)
                    r.unshift(h), h = l(r, 0); return new N({ before: r, after: [], e: t.e + e.e, negative: !(t.negative && e.negative || !t.negative && !e.negative) }); } }], (r = null) && I(e.prototype, r), n && I(e, n), t; }();
        function M(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var V = function () { function t(e) { var r = this, n = e.maxDecimal, i = e.digits, o = e.divideByZeroError, a = e.divisionError; return function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this, t), this.maxDecimal = n, this._mapZeroDigits(i), this.zeroDigits.first && null === this.zeroDigits.next ? new N(0) : this.zeroDigits.next ? a(o, this.zeroDigits.next) : (this.result = function (t, e, r) { for (var n = arguments.length >= 3, i = n ? r : t[0], o = n ? 0 : 1; o < t.length; o++) {
            i = e(i, t[o]);
        } return i; }(i, (function (t, e) { return r._divDigits(t, e, !1); })), this.result.round(0 === this.maxDecimal ? 1 : -this.maxDecimal), this.result.removeE(), this.result); } var e, r, n; return e = t, (r = [{ key: "_mapZeroDigits", value: function (t) { var e = this; this.zeroDigits = { first: !1, next: null }, t.some((function (t, r) { if (t.equalsZero) {
                    if (0 !== r)
                        return e.zeroDigits.next = r, !0;
                    e.zeroDigits.first = !0;
                } })); } }, { key: "_divDigits", value: function (t, e) { var r = function () { return -(e.e - t.e); }, n = function () { return !(t.negative && e.negative || !t.negative && !e.negative); }; if (e.equalsTenths)
                    return e.setExponential(1, 1), t.e = r(), t.negative = n(), t; t.toIntegers(), e.toIntegers(); var i = r(), o = n(); e.negative = !1, e.e = 0; for (var u, s, l = new N(0), f = y(e, 14), h = 0;;) {
                    t.negative = !1, t.e = 0;
                    var d = y(t, 15), v = Math.floor(d.value / f.value);
                    if (v < 1) {
                        var g = f.extracted.length - d.extracted.length || 1;
                        t.removeE(g), h -= g;
                    }
                    else {
                        var p = new N(v);
                        if (p.e = d.left - f.left, u = new R({ digits: [p, e] }), s = new a({ digits: [t, u] }), p.e += h, l.add(p), t = s, !c(e, s))
                            continue;
                    }
                    if (s && 0 == s.toString() || l.after.length - i >= this.maxDecimal + 1)
                        break;
                } return l.e = i, l.negative = o, l.floor(-(this.maxDecimal + 1)), l; function y(t, e) { var r = t.before.slice(0, e), n = t.before.length - r.length, i = Number(r.join("")); return { extracted: r, left: n, value: i }; } } }]) && M(e.prototype, r), n && M(e, n), t; }();
        function Z(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        var F = function () { function t(e) { var r = e.digit, n = e.power; return function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this, t), this.digit = r, this.power = n, this.digitPower = new N(this.power), this.digitPower.equalsZero ? new N({ before: [1], after: [], e: 0, negative: !1 }) : this.digit.equalsZero ? new N({ before: [0], after: [], e: 0, negative: !1 }) : this.digit.equalsTenths ? (this.digit.setExponential(1, 1), this.digit.e *= this.power, this.digit.removeE(), this._setTenthsNegative(), this.digit) : new R({ digits: [this.digit], power: this.power }); } var e, r, n; return e = t, (r = [{ key: "_setTenthsNegative", value: function () { var t = this.power / 2, e = t === Math.round(t); this.digit.negative && e && (this.digit.negative = !1); } }]) && Z(e.prototype, r), n && Z(e, n), t; }(), q = r(1), B = r.n(q);
        function L(t) { return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); }
        function z(t) { return function (t) { if (Array.isArray(t))
            return G(t); }(t) || function (t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t); }(t) || $(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function U(t, e) { var r; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (r = $(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var n = 0, i = function () { };
                return { s: i, n: function () { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] }; }, e: function (t) { throw t; }, f: i };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var o, a = !0, u = !1; return { s: function () { r = t[Symbol.iterator](); }, n: function () { var t = r.next(); return a = t.done, t; }, e: function (t) { u = !0, o = t; }, f: function () { try {
                a || null == r.return || r.return();
            }
            finally {
                if (u)
                    throw o;
            } } }; }
        function $(t, e) { if (t) {
            if ("string" == typeof t)
                return G(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? G(t, e) : void 0;
        } }
        function G(t, e) { (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r]; return n; }
        function H(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function J(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        function K(t, e, r) { return e && J(t.prototype, e), r && J(t, r), t; }
        var Q = function () { function t(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length - 1; H(this, t), this.elements = e.splice(r, n - r + 1), this.print = this.printScope(this.elements), "(" === this.elements[0] && this.elements.shift(), ")" === this.elements[this.elements.length - 1] && this.elements.pop(); } return K(t, [{ key: "printScope", value: function (e) { var r, n = "", o = U(e); try {
                    for (o.s(); !(r = o.n()).done;) {
                        var a = r.value;
                        i()(a, String) && (n += a), i()(a, t) && (n += a.print);
                    }
                }
                catch (t) {
                    o.e(t);
                }
                finally {
                    o.f();
                } return n; } }]), t; }(), W = function () { function t(e, r) { H(this, t), this.type = r, this.print = e, this.adjacent = !/\s$/.test(e); } return K(t, [{ key: "digitChar", get: function () { return (this.add || this.sub) && /[+-]$/.test(this.print); } }, { key: "add", get: function () { return "add" === this.type; } }, { key: "sub", get: function () { return "sub" === this.type; } }, { key: "mul", get: function () { return "mul" === this.type; } }, { key: "div", get: function () { return "div" === this.type; } }]), t; }(), X = function () { function t(e) { var r = this, n = e.formula, i = e.chars, o = e.maxDecimal, a = e.invalidError, u = e.divisionError, s = e.unsafeError; H(this, t), this.maxDecimal = o, this.invalidError = a, this.divisionError = u, this.unsafeError = s, this.result = null; var l = [this, "_seekIllegalChars", "_cutParentheses", "_validateParentheses", "_createParenthesesScopes", "_resolveParenthesesScopes"], c = "\\d*[".concat(i.decimalChar, "]?\\d+(?:e[+-]\\d+)?"), f = { formula: n, chars: i, reg: { split: new RegExp("\\s*((".concat(c, ")|([-+").concat(i.divChar).concat(i.mulChar, "])|(.))\\s*"), "g"), digitRegExp: new RegExp("^\\s*".concat(c, "\\s*$")), charsRegExp: new RegExp("^\\s*(?:([+])|([-])|([".concat(i.mulChar, "])|([").concat(i.divChar, "]))\\s*$")) } }; if (B()([l], { context: f, timeout: null }, (function (t, e, n) { return r.result = n; }), (function (t, e) { var r = e.type, n = e.error, i = e.args, o = void 0 === i ? [] : i; return r(n.apply(void 0, z(o))); })), null !== this.result)
            return this.result; } return K(t, [{ key: "_seekIllegalChars", value: function (t, e, r) { if (/^\s*$/.test(r.formula))
                    return this.invalidError(this.errorDefaults.emptyFormula()); var n = new RegExp("[^0-9e()\\s-+".concat(r.chars.decimalChar).concat(r.chars.divChar).concat(r.chars.mulChar, "]")), i = r.formula.match(n); if (i && i.length)
                    return this.invalidError(this.errorDefaults.illegalCharacter(i[0])); t(); } }, { key: "_cutParentheses", value: function (t, e, r) { var n = /(\(|\))/g; r.allCollection = r.formula.split(n), r.parenthesesCollection = r.formula.match(n), t(); } }, { key: "_validateParentheses", value: function (t, e, r) { var n = 0, i = 0, o = 0, a = !1; if (!r.parenthesesCollection)
                    return t(); var u, s = U(r.parenthesesCollection); try {
                    for (s.s(); !(u = s.n()).done;) {
                        var l = u.value;
                        "(" === l && (n++, o++), ")" === l && (i++, o--), o < 0 && (a = !0);
                    }
                }
                catch (t) {
                    s.e(t);
                }
                finally {
                    s.f();
                } if (n !== i) {
                    var c = { side: n > i ? "closing" : "opening", num: Math.abs(n - i) };
                    return this.invalidError(this.errorDefaults.missingParenthesis(c.side, c.num));
                } if (a)
                    return this.invalidError(this.errorDefaults.invalidParenthesesOrder()); t(); } }, { key: "_createParenthesesScopes", value: function (t, e, r) { r.scopeOrder = [], function t(e) { for (var n = null, i = 0; i < e.length; i++) {
                    var o = e[i];
                    if ("(" === o)
                        n = i;
                    else if (")" === o) {
                        var a = new Q(e, n, i);
                        e.splice(n, 0, a), r.scopeOrder.push(a), t(e);
                    }
                    else if (/^\s*$/.test(o)) {
                        e.splice(i, 1), i--;
                        continue;
                    }
                } }(r.allCollection), r.scopeOrder.push(new Q(r.allCollection)), t(); } }, { key: "_resolveParenthesesScopes", value: function (t, e, r) { var n, i = [], o = [this, "_splitEquation", "_parseDigitsChars", "_validateScopeElements", "_computeScope"], a = U(r.scopeOrder); try {
                    var u = function () { var t = n.value; i.push((function (e, n) { var i = { root: r, scopeEquation: t }; B()([o], { context: i, timeout: null }, e, (function (t, e) { return n(e); })); })); };
                    for (a.s(); !(n = a.n()).done;)
                        u();
                }
                catch (t) {
                    a.e(t);
                }
                finally {
                    a.f();
                } B.a.all(i, { context: r, timeout: null }, (function (e, r) { var n = r.scopeOrder[r.scopeOrder.length - 1].result; return n.removeE(), t(n); }), (function (t, r) { return e(r); })); } }, { key: "_splitEquation", value: function (t, e, r) { var n, o = [], a = U(r.scopeEquation.elements); try {
                    for (a.s(); !(n = a.n()).done;) {
                        var u = n.value;
                        i()(u, String) ? o.push.apply(o, z(u.match(r.root.reg.split))) : o.push(u);
                    }
                }
                catch (t) {
                    a.e(t);
                }
                finally {
                    a.f();
                } r.equationItems = o, t(); } }, { key: "_parseDigitsChars", value: function (t, e, r) { for (var n = this, o = [], a = function (t) { var a = f(r.equationItems, t).item; if (i()(a, Q))
                    return o.push(a), "continue"; var u = a.match(r.root.reg.digitRegExp); if (u)
                    return o.push(new N(u[0])), "continue"; var s = a.match(r.root.reg.charsRegExp); return s ? (s.some((function (t, e) { var r = e > 0 && t; return r && o.push(new W(s[0], ["add", "sub", "mul", "div"][e - 1])), r; })), "continue") : { v: e({ type: n.invalidError, error: n.errorDefaults.illegalCombination, args: [r.scopeEquation.print, a] }) }; }, u = 0; u < r.equationItems.length; u++) {
                    var s = a(u);
                    if ("continue" !== s && "object" === L(s))
                        return s.v;
                } r.collection = o, t(); } }, { key: "_validateScopeElements", value: function (t, e, r) { for (var n = 0; n < r.collection.length; n++) {
                    var o = f(r.collection, n), a = o.item, u = o.previous, s = o.next, l = o.first, c = o.last;
                    if (i()(a, N)) {
                        if (i()(s, N))
                            return e({ type: this.invalidError, error: this.errorDefaults.illegalCombination, args: [r.scopeEquation.print, a.print + s.print] });
                        i()(s, Q) && r.collection.splice(++n, 0, new W("*", "mul"));
                    }
                    else if (i()(a, W))
                        switch (!0) {
                            case l && (a.div || a.mul || i()(s, W)) || i()(u, W) && i()(s, W):
                            case c:
                            case l && !a.adjacent && i()(s, N):
                            case i()(s, W) && (s.mul || s.div || !s.digitChar): return e({ type: this.invalidError, error: this.errorDefaults.illegalCombination, args: [r.scopeEquation.print, (l ? "" : u.print) + a.print + (c ? "" : s.print)] });
                            case l || i()(u, W): a.sub && i()(s, N) && s.negate(), a.sub && i()(s, Q) && s.result.negate(), r.collection.splice(n, 1), n--;
                        }
                    else
                        i()(a, Q) && i()(s, [Q, N]) && r.collection.splice(++n, 0, new W("*", "mul"));
                } t(); } }, { key: "_computeScope", value: function (t, e, r) { for (var n = this, o = 0; o < r.collection.length; o++) {
                    var u = f(r.collection, o), s = u.item, l = u.previous, c = u.next;
                    if (i()(s, W) && (s.mul || s.div)) {
                        var h = i()(l, N) ? l : l.result, d = i()(c, N) ? c : c.result;
                        if (s.mul && r.collection.splice(o - 1, 3, new R({ digits: [h, d], zeroValue: h.equalsZero ? 0 : d.equalsZero ? 1 : -1 })), s.div) {
                            var v = !1;
                            if (r.collection.splice(o - 1, 3, new V({ digits: [h, d], maxDecimal: this.maxDecimal, divideByZeroError: this.errorDefaults.divideByZero(r.scopeEquation.print), divisionError: function (t) { return v = !0, e({ type: n.divisionError, error: function () { return t; } }); } })), v)
                                return;
                        }
                        o--;
                    }
                } for (var p = 0; p < r.collection.length; p++) {
                    var y = f(r.collection, p), m = y.item, b = y.previous, _ = y.next;
                    if (i()(m, W) && (m.add || m.sub)) {
                        var w = i()(b, N) ? b : b.result, E = i()(_, N) ? _ : _.result;
                        m.add && r.collection.splice(p - 1, 3, new g({ digits: [w, E] })), m.sub && r.collection.splice(p - 1, 3, new a({ digits: [w, E] })), p--;
                    }
                } if (!r.collection.length)
                    return e({ type: this.invalidError, error: this.errorDefaults.emptyParentheses }); r.scopeEquation.result = i()(r.collection[0], N) ? r.collection[0] : r.collection[0].result, t(); } }, { key: "signDescriptor", get: function () { return { div: "division", mul: "multiplication", add: "addition", sub: "subtraction" }; } }, { key: "errorDefaults", get: function () { return { emptyFormula: function () { return new Error("The [String] formula cannot be empty."); }, missingParenthesis: function (t, e) { return new Error("The ".concat(e, " ").concat(t, " parenthes").concat(e > 1 ? "es are" : "is is", " missing in the [String] formula.")); }, invalidParenthesesOrder: function () { return new Error("The closing parenthesis has been placed before the opening parenthesis in the [String] formula."); }, illegalCharacter: function (t) { return new Error("The [String] formula contains illegal character ".concat(t)); }, illegalCombination: function (t, e) { return new Error("Invalid '".concat(t, "' expression. It contains illegal combination: '").concat(e, "'.")); }, emptyParentheses: function () { return new Error("The [String] formula cannot contain empty parentheses scope."); }, divideByZero: function (t) { return new Error("Invalid '".concat(t, "' expression. The division by zero is not allowed.")); } }; } }]), t; }();
        function Y(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function tt(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } }
        function et(t, e, r) { return e && tt(t.prototype, e), r && tt(t, r), t; }
        e.default = new (function () { function t() { Y(this, t); } return et(t, [{ key: "add", value: function () { return new rt(arguments, "add")._algebra(); } }, { key: "sub", value: function () { return new rt(arguments, "sub")._algebra(); } }, { key: "mul", value: function () { return new rt(arguments, "mul")._algebra(); } }, { key: "div", value: function () { return new rt(arguments, "div")._algebra(); } }, { key: "formula", value: function () { return new rt(arguments, "formula")._formula(); } }, { key: "round", value: function () { return new rt(arguments, "round")._rounding(); } }, { key: "ceil", value: function () { return new rt(arguments, "ceil")._rounding(); } }, { key: "floor", value: function () { return new rt(arguments, "floor")._rounding(); } }, { key: "pow", value: function () { return new rt(arguments, "pow")._power(); } }]), t; }());
        var rt = function () { function t(e, r) { function n(t, e) { if (i()(t, String)) {
            var r = t;
            if (!e.has(r))
                return e;
            e.forEach((function (t, n) { return e.set(n, r === n); }));
        } if (i()(t, Array)) {
            var n = t;
            if (!n.some((function (t) { return e.has(t); })))
                return e;
            e.forEach((function (t, r) { return e.set(r, n.some((function (t) { return t === r; }))); }));
        } return e; } Y(this, t), this._data = { mode: r, invalidReturn: NaN, values: Array.prototype.slice.call(e), zeroValue: -1, digits: [] }, function () { this._data.callback = i()(this._data.values[this._data.values.length - 1], Function) ? this._data.values.pop() : null; }.call(this), function () { var t = this._data.values[this._data.values.length - 1]; this._data.userConfig = i()(t, Object) ? this._data.values.pop() : i()(t, Boolean) ? { returnString: this._data.values.pop() } : {}; }.call(this), function () { this._data.config = this.configDefaults; var t = this.configValidatorList, e = this._data.userConfig; for (var r in e) {
            var n = e[r];
            this._data.config.hasOwnProperty(r) && t[r](n) && (this._data.config[r] = n);
        } }.call(this), function () { var t = this.charsDefaults, e = this._data.userConfig; for (var r in e) {
            var i = e[r];
            t.hasOwnProperty(r) && (t[r] = n(i, t[r]));
        } delete this._data.userConfig, this._data.chars = t; }.call(this), function () { for (var t in this._data.chars) {
            var e = this._data.chars[t], r = "";
            e.forEach((function (t, e) { t && (r += e); })), this._data.chars[t] = "".concat(r);
        } }.call(this); } return et(t, [{ key: "_validateValues", value: function (t) { for (var e = this.validStringNumber, r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (i()(n, String)) {
                        if ("Infinity" === n || "-Infinity" === n) {
                            var o = this.errorDefaults.infinityValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: o, argumentSet: { error: o, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if ("NaN" === n) {
                            var a = this.errorDefaults.nanValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: a, argumentSet: { error: a, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if (!e.test(n)) {
                            var u = this.errorDefaults.invalidStringValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: u, argumentSet: { error: u, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                    }
                    else {
                        if (!i()(n, Number)) {
                            var s = this.errorDefaults.invalidValueTypeError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: s, argumentSet: { error: s, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if (n === 1 / 0 || n === -1 / 0) {
                            var l = this.errorDefaults.infinityValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: l, argumentSet: { error: l, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if (Number.isNaN(n)) {
                            var c = this.errorDefaults.nanValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: c, argumentSet: { error: c, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                    }
                    h.call(this, n, r);
                    var f = new N(n);
                    this._data.digits.push(f);
                } function h(t, e) { this._data.zeroValue >= 0 || 0 == Number(t) && (this._data.zeroValue = e); } return !0; } }, { key: "_algebra", value: function () { var t = this; if (this._data.values.length < 2) {
                    var e = this.errorDefaults.algebraTwoValuesError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: e, argumentSet: { error: e, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } if (!this._validateValues(this._data.values))
                    return this._data.invalidReturn; switch (this._data.mode) {
                    case "add":
                        this._data.result = new g({ digits: this._data.digits });
                        break;
                    case "sub":
                        this._data.result = new a({ digits: this._data.digits });
                        break;
                    case "mul":
                        this._data.result = new R({ digits: this._data.digits, zeroValue: this._data.zeroValue });
                        break;
                    case "div":
                        var r = !1;
                        if (this._data.result = new V({ digits: this._data.digits, maxDecimal: this._data.config.maxDecimal, divideByZeroError: this.errorDefaults.divideByZeroError, divisionError: function (e, n) { r = !0; var i = e(n); t._handleErrors({ errorConfig: t._data.config.divideByZeroError, errorDefault: i, argumentSet: { error: i, index: n, list: t._data.values, callback: t._data.callback || void 0 } }); } }), r)
                            return this._data.invalidReturn;
                } return this._handleResult(); } }, { key: "_formula", value: function () { var t = this; if (1 !== this._data.values.length || !i()(this._data.values[0], String)) {
                    var e = this.errorDefaults.formulaOneParameterError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: e, argumentSet: { error: e, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } var r = !1, n = !1; return this._data.result = new X({ formula: this._data.values[0], chars: this._data.chars, maxDecimal: this._data.config.maxDecimal, zeroArgumentError: this.errorDefaults.divideByZero, divisionError: function (e) { n = !0, t._handleErrors({ errorConfig: t._data.config.divideByZeroError, errorDefault: e, argumentSet: { error: e, index: void 0, list: t._data.values, callback: t._data.callback || void 0 } }); }, invalidError: function (e) { r = !0, t._handleErrors({ errorConfig: t._data.config.invalidError, errorDefault: e, argumentSet: { error: e, index: 0, list: t._data.values, callback: t._data.callback || void 0 } }); } }), n || r ? this._data.invalidReturn : this._handleResult(); } }, { key: "_rounding", value: function () { var t = this._data.values.length; if (0 === t || t > 2) {
                    var e = this.errorDefaults.roundingTwoArgumentsError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: e, argumentSet: { error: e, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } if (!this._validateValues([this._data.values[0]]))
                    return this._data.invalidReturn; if (1 === t)
                    this._data.values.push(1);
                else if (!i()(this._data.values[1], Number) || !u(this._data.values[1])) {
                    var r = this.errorDefaults.roundingInvalidIntegerError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: r, argumentSet: { error: r, index: 1, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } var n = { digit: this._data.digits[0], places: this._data.values[1], trim: this._data.config.trim }; switch (this._data.mode) {
                    case "round":
                        this._data.result = new j(n);
                        break;
                    case "ceil":
                        this._data.result = new T(n);
                        break;
                    case "floor": this._data.result = new C(n);
                } return this._handleResult(); } }, { key: "_power", value: function () { var t = this._data.values.length; if (0 === t || t > 2) {
                    var e = this.errorDefaults.powerTwoArgumentsError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: e, argumentSet: { error: e, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } if (!this._validateValues([this._data.values[0]]))
                    return this._data.invalidReturn; if (1 === t)
                    this._data.values.push(2);
                else if (!(i()(this._data.values[1], Number) && u(this._data.values[1]) && this._data.values[1] >= 0)) {
                    var r = this.errorDefaults.powerInvalidPositiveIntegerError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: r, argumentSet: { error: r, index: 1, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } var n = { digit: this._data.digits[0], power: this._data.values[1] }; switch (this._data.mode) {
                    case "pow": this._data.result = new F(n);
                } return this._handleResult(); } }, { key: "_handleErrors", value: function (t) { var e = t.errorConfig, r = t.errorDefault, n = t.argumentSet, o = void 0 === n ? {} : n, a = e, u = this._data.callback; switch (!0) {
                    case i()(a, Boolean):
                        if (!0 === a && !u)
                            throw r;
                        return u && u(this.invalidCallbackObject(a ? r : null)), !1;
                    case i()(a, /.*Error/):
                        if (!u)
                            throw a;
                        return u(this.invalidCallbackObject(a)), !1;
                    case i()(a, Function): return this._data.invalidReturn = a(o), !1;
                } } }, { key: "_handleResult", value: function () { var t = this._data.config; (t.returnString || this._data.callback) && this._data.result.setExponential(t.eMinus, t.ePlus); var e = this._data.result.toString(), r = { error: null, string: e, number: Number(e) }; return this._data.callback && this._data.callback(r), r[t.returnString ? "string" : "number"]; } }, { key: "configValidatorList", get: function () { var t = this; return { returnString: function (t) { return i()(t, Boolean); }, eMinus: function (e) { return (t._data.callback || t._data.config.returnString) && i()(e, Number) && e >= 0 && (u(e) || e === 1 / 0); }, ePlus: function (e) { return (t._data.callback || t._data.config.returnString) && i()(e, Number) && e >= 0 && (u(e) || e === 1 / 0); }, maxDecimal: function (e) { return ("div" === t._data.mode || "formula" === t._data.mode) && i()(e, Number) && e >= 0 && u(e); }, divideByZeroError: function (e) { return ("div" === t._data.mode || "formula" === t._data.mode) && i()(e, /(Boolean|.*Error|Function)/); }, invalidError: function (t) { return i()(t, /(Boolean|.*Error|Function)/); }, trim: function (t) { return i()(t, Boolean); } }; } }, { key: "configDefaults", get: function () { return { returnString: !1, eMinus: 7, ePlus: 21, maxDecimal: 17, divideByZeroError: !1, invalidError: !0, trim: !0 }; } }, { key: "charsDefaults", get: function () { return { decimalChar: new Map([[".", !0], [",", !0]]), divChar: new Map([["/", !0], [":", !0], ["÷", !0]]), mulChar: new Map([["*", !0], ["x", !0], ["⋅", !0], ["×", !0]]) }; } }, { key: "errorDefaults", get: function () { return { algebraTwoValuesError: function () { return new Error("Set at least two [Number|String] values."); }, invalidValueTypeError: function (t) { return new TypeError("Incorrect argument [".concat(t, "]. The [Number|String] value is expected.")); }, nanValueError: function (t) { return new TypeError("Incorrect argument [".concat(t, "]. The argument cannot be a NaN value.")); }, infinityValueError: function (t) { return new TypeError("Incorrect argument [".concat(t, "]. The argument cannot be an Infinity or -Infinity value.")); }, invalidStringValueError: function (t) { return new Error("Incorrect argument [".concat(t, "]. The [String] argument is not a valid numerical value.")); }, formulaOneParameterError: function () { return new Error("The one [String] formula argument is expected."); }, roundingTwoArgumentsError: function () { return new Error("Two arguments are expected: [0]: [String|Number] value; [1]: [Number] decimal places integer."); }, powerTwoArgumentsError: function () { return new Error("Two arguments are expected: [0]: [String|Number] value; [1]: [Number] power exponent positive integer."); }, roundingInvalidIntegerError: function () { return new Error("Incorrect argument [1]. The [Number] decimal places integer is expected."); }, powerInvalidPositiveIntegerError: function () { return new Error("Incorrect argument [1]. The [Number] power exponent positive integer is expected."); }, divideByZeroError: function (t) { return new Error("Incorrect argument [".concat(t, "]. The division by zero is not allowed.")); } }; } }, { key: "invalidCallbackObject", get: function () { var t = this; return function (e) { return { number: t._data.invalidReturn, string: t._data.invalidReturn, error: e }; }; } }, { key: "validStringNumber", get: function () { return new RegExp("^([+-]?\\d*[".concat(this._data.chars.decimalChar, "]?\\d+(?:e[+-]\\d+)?)$")); } }]), t; }();
    }]).default;
export default exactMath;
