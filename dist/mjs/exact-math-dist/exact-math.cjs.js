"use strict";
module.exports = function (e) { var t = {}; function r(n) { if (t[n])
    return t[n].exports; var i = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports; } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
    return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var i in e)
        r.d(n, i, function (t) { return e[t]; }.bind(null, i)); return n; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "", r(r.s = 2); }([function (e, t) { e.exports = require("of-type"); }, function (e, t) { e.exports = require("move-on"); }, function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0), i = r.n(n);
        function a(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var o = function () { function e(t) { return function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), this._turnNegatives(t.digits), new g(t); } var t, r, n; return t = e, n = [{ key: "_subDigits", value: function (e, t, r) { var n = e.after.length > t.after.length ? e.after.length : t.after.length, i = e.before.length > t.before.length ? e.before.length : t.before.length, a = !1, o = u(n, "after"), s = u(i, "before"); return new P({ before: s, after: o, e: 0, negative: r }); function u(r, n) { for (var i = [], o = r - 1; o >= 0; o--) {
                    var s = "after" === n ? o : o - (r - e[n].length), u = "after" === n ? o : o - (r - t[n].length), l = Number(e[n][s]) || 0, f = Number(t[n][u]) || 0;
                    a && (0 == l ? l = 9 : (l--, a = !1)), l < f ? (i[o] = 10 + l - f, a = !0) : i[o] = l - f;
                } return i; } } }], (r = [{ key: "_turnNegatives", value: function (e) { for (var t = 1; t < e.length; t++)
                    e[t].negative = !e[t].negative; } }]) && a(t.prototype, r), n && a(t, n), e; }(), s = function (e) { return e % 1 == 0; }, u = function (e, t) { for (var r = [], n = 0; n < t; n++)
            r[n] = e; return r; }, l = function (e, t) { if (e[t] <= 9)
            return 0; var r = e[t] % 10, n = (e[t] - r) / 10; return e[t] = r, n; }, f = function (e, t) { if (e.before.length > t.before.length)
            return !0; if (e.before.length < t.before.length)
            return !1; for (var r = 0; r < e.before.length; r++) {
            var n = Number(e.before[r]), i = Number(t.before[r]);
            if (n > i)
                return !0;
            if (n < i)
                return !1;
        } for (var a = 0;;) {
            var o = Number(e.after[a]), s = Number(t.after[a]);
            if (Number.isNaN(o) && Number.isNaN(s))
                return !1;
            if (o > s || Number.isNaN(s))
                return !0;
            if (o < s || Number.isNaN(o))
                return !1;
            a++;
        } }, c = function (e, t) { var r = 0 === t, n = t === e.length - 1; return { first: r, last: n, item: e[t], index: t, previous: r ? null : e[t - 1], next: n ? null : e[t + 1] }; };
        function h(e, t) { var r; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) { if (!e)
                return; if ("string" == typeof e)
                return d(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r)
                return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return d(e, t); }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, i = function () { };
                return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var a, o = !0, s = !1; return { s: function () { r = e[Symbol.iterator](); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { s = !0, a = e; }, f: function () { try {
                o || null == r.return || r.return();
            }
            finally {
                if (s)
                    throw a;
            } } }; }
        function d(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function v(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var g = function () { function e(t) { var r = t.digits, n = t.addToFirst, i = void 0 !== n && n; !function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), this.beforeTens = 0, this.addToFirst = i; var a, s = { neg: [], pos: [] }, u = h(r); try {
            for (u.s(); !(a = u.n()).done;) {
                var l = a.value;
                s[l.negative ? "neg" : "pos"].push(l), l.removeE();
            }
        }
        catch (e) {
            u.e(e);
        }
        finally {
            u.f();
        } var c = !!s.pos.length, d = !!s.neg.length; if (!d || !c)
            return this._addDigits(s[c ? "pos" : "neg"], d); var v = 1 === s.neg.length ? s.neg[0] : this._addDigits(s.neg, !0), g = 1 === s.pos.length ? s.pos[0] : this._addDigits(s.pos, !1), p = f(v, g), b = p ? v : g, m = p ? g : v; return o._subDigits(b, m, p); } var t, r, n; return t = e, (r = [{ key: "_addDigits", value: function (e, t) { switch (e.reduce(this._reduceAfter.bind(this)), e.reduce(this._reduceBefore.bind(this)), this.addToFirst) {
                    case !0: return e[0].before = this.sumBefore, e[0].after = this.sumAfter, e[0].e = 0, e[0].negative = t, e[0];
                    default: return new P({ before: this.sumBefore, after: this.sumAfter, e: 0, negative: t });
                } } }, { key: "_reduceAfter", value: function (e, t, r, n) { for (var i = e.after.length > t.after.length ? e : t, a = i.after, o = i === e ? t.after : e.after, s = 0, u = o.length - 1; u >= 0; u--)
                    a[u] = Number(a[u]) + Number(o[u]) + s, s = l(a, u); return this.beforeTens += s, s = 0, r === n.length - 1 && (this.sumAfter = a), i; } }, { key: "_reduceBefore", value: function (e, t, r, n) { for (var i = e.before.length > t.before.length ? e : t, a = i.before, o = i === e ? t.before : e.before, s = 0; s < a.length; s++) {
                    var u = o.length - 1 - s, f = a.length - 1 - s;
                    if (a[f] = Number(a[f]) + (u >= 0 ? Number(o[u]) : 0) + this.beforeTens, this.beforeTens = l(a, f), 0 === u && 0 === this.beforeTens)
                        break;
                } return this.beforeTens > 0 && a.unshift(this.beforeTens), this.beforeTens = 0, r === n.length - 1 && (this.sumBefore = a), i; } }]) && v(t.prototype, r), n && v(t, n), e; }();
        function p(e) { return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
        function b(e, t) { if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && m(e, t); }
        function m(e, t) { return (m = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; })(e, t); }
        function y(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1; if (Reflect.construct.sham)
            return !1; if ("function" == typeof Proxy)
            return !0; try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
        }
        catch (e) {
            return !1;
        } }(); return function () { var r, n = w(e); if (t) {
            var i = w(this).constructor;
            r = Reflect.construct(n, arguments, i);
        }
        else
            r = n.apply(this, arguments); return _(this, r); }; }
        function _(e, t) { return !t || "object" !== p(t) && "function" != typeof t ? function (e) { if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }(e) : t; }
        function w(e) { return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); })(e); }
        function E(e) { return function (e) { if (Array.isArray(e))
            return k(e); }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e); }(e) || function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return k(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r)
            return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return k(e, t); }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function k(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function S(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function x(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var D = function () { function e(t, r) { var n = t.digit, i = t.places, a = t.trim; if (S(this, e), this.action = r, this.digit = n, this.digit.removeE(), this.places = i, this.trim = a, 0 === this.places)
            return this.digit; this.mode = this.places > 0 ? "before" : "after"; var o = "before" === this.mode ? this.places - 1 : 0; "after" === this.mode && (this.places *= -1), "before" === this.mode && (this.places = this.digit.before.length - this.places + 1); var s = this._reduceRight(); return null === s ? new P({ before: [0], after: [], e: 0, negative: !1 }) : (this._round(s), this._addZeros(o), this.digit.trimZeros(), this._fillZeros(i), this.digit); } var t, r, n; return t = e, (r = [{ key: "_fillZeros", value: function (e) { var t = Math.abs(e); if (!(!0 === this.trim || e >= 0 || this.digit.after.length >= t))
                    for (; this.digit.after.length < t;)
                        this.digit.after.push(0); } }, { key: "_reduceRight", value: function () { return "ceil" !== this.action && this.places < 0 && "before" === this.mode ? null : (this.places < 0 && (this.places = 0), this.digit[this.mode].splice(this.places, this.digit[this.mode].length - this.places).concat("before" === this.mode ? this.digit.after.splice(0, this.digit.after.length) : [])); } }, { key: "_round", value: function (e) { function t() { for (var e = this.digit.after.length - 1; e >= 0; e--) {
                    if (Number(this.digit.after[e]) < 10)
                        return;
                    var t = e - 1 < 0;
                    e === this.digit.after.length - 1 ? this.digit.after.pop() : this.digit.after[e] = 0, this.digit[t ? "before" : "after"][t ? this.digit.before.length - 1 : e - 1]++;
                } for (var r = this.digit.before.length - 1; r >= 0; r--) {
                    if (Number(this.digit.before[r]) < 10)
                        return;
                    var n = r - 1 < 0;
                    this.digit.before[r] = 0, n ? this.digit.before.unshift(1) : this.digit.before[r - 1]++;
                } } "floor" !== this.action && e.length && ("round" === this.action ? function () { return Number(e[0]) >= 5; }.call(this) : function () { for (var t in e)
                    if (Number(e[t]) > 0)
                        return !0; return !1; }.call(this)) && (this.digit.after.length ? (this.digit.after[this.digit.after.length - 1]++, t.call(this)) : this.digit.before.length ? (this.digit.before[this.digit.before.length - 1]++, t.call(this)) : this.digit.before[0] = 1); } }, { key: "_addZeros", value: function (e) { var t; this.digit.before.length ? (t = this.digit.before).push.apply(t, E(u(0, e))) : this.digit.before[0] = 0; } }]) && x(t.prototype, r), n && x(t, n), e; }(), C = function (e) { b(r, e); var t = y(r); function r(e) { return S(this, r), t.call(this, e, "round"); } return r; }(D), T = function (e) { b(r, e); var t = y(r); function r(e) { return S(this, r), t.call(this, e, "ceil"); } return r; }(D), N = function (e) { b(r, e); var t = y(r); function r(e) { return S(this, r), t.call(this, e, "floor"); } return r; }(D);
        function O(e) { return function (e) { if (Array.isArray(e))
            return j(e); }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e); }(e) || function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return j(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r)
            return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return j(e, t); }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function j(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function I(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var P = function () { function e(t) { if (function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), i()(t, Object))
            this.negative = t.negative, this.before = t.before, this.after = t.after, this.e = t.e;
        else {
            this.print = i()(t, String) ? t : String(t);
            var r = /^\s*([+-]?)(\d*)(?:(?:([.,])(\d+)))?(?:e([+-]\d+))?\s*$/.exec(this.print);
            this.negative = "-" === r[1], this.before = (r[2] || "0").split(""), this.after = (r[4] || "").split(""), this.e = r[5] ? Number(r[5]) : 0;
        } this.trimZeros(); } var t, r, n; return t = e, (r = [{ key: "trimZeros", value: function () { for (; this.before.length > 1 && 0 == this.before[0];)
                    this.before.shift(); for (; this.after.length && 0 == this.after[this.after.length - 1];)
                    this.after.pop(); this.before.length || (this.before[0] = 0); } }, { key: "setExponential", value: function (e, t) { if (!this.after.length && this.before.length >= t)
                    for (; this.before.length > 1 && 0 == this.before[this.before.length - 1];)
                        this.before.pop(), this.e++;
                else if (this.beforeEqualsZero && this.after.length >= e) {
                    for (; 0 == this.after[0];)
                        this.after.shift(), this.e--;
                    this.after.length ? (this.before[0] = this.after.shift(), this.e--) : this.before[0] = 0;
                } } }, { key: "reduceE", value: function () { if (this.e > 0) {
                    var e, t = this.after.splice(0, this.e);
                    (e = this.before).push.apply(e, O(t)), this.e = this.e - t.length;
                } if (this.e < 0) {
                    var r, n = this.before.length + this.e, i = n < 0 ? 0 : n, a = this.before.splice(i, this.before.length - i);
                    (r = this.after).unshift.apply(r, O(a)), this.e = this.e + a.length, this.before.length || (this.before[0] = 0);
                } this.trimZeros(); } }, { key: "removeE", value: function (e) { var t, r; i()(e, Number) && (this.e += e), this.reduceE(), this.e > 0 && (t = this.before).push.apply(t, O(u(0, this.e))), this.e < 0 && (r = this.after).unshift.apply(r, O(u(0, -1 * this.e))), this.e = 0; } }, { key: "toString", value: function () { return (!this.negative || this.beforeEqualsZero && !this.after.length ? "" : "-") + (this.before.length ? this.before.join("") : "0") + (this.after.length ? "." + this.after.join("") : "") + (this.e > 0 ? "e+" + String(this.e) : this.e < 0 ? "e" + String(this.e) : ""); } }, { key: "toIntegers", value: function () { var e; this.after.length && (this.e -= this.after.length, (e = this.before).push.apply(e, O(this.after.splice(0, this.after.length)))), this.e > 0 && this.removeE(), this.trimZeros(); } }, { key: "negate", value: function () { this.negative = !this.negative; } }, { key: "floor", value: function (e) { new N({ digit: this, places: e }); } }, { key: "round", value: function (e) { new C({ digit: this, places: e }); } }, { key: "add", value: function (e) { new g({ digits: [this, e], addToFirst: !0 }); } }, { key: "equalsZero", get: function () { return 0 == this.toString(); } }, { key: "equalsTenths", get: function () { return this.trimZeros(), !(1 != this.before[0] || this.after.length || !this.before.every((function (e, t) { return 0 === t || 0 == e; }))) || !(1 != this.after[this.after.length - 1] || !this.beforeEqualsZero || !this.after.every((function (e, t, r) { return t === r.length - 1 || 0 == e; }))); } }, { key: "beforeEqualsZero", get: function () { return 1 === this.before.length && 0 == this.before[0]; } }]) && I(t.prototype, r), n && I(t, n), e; }();
        function A(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var R = function () { function e(t) { var r, n = this, i = t.digits, a = t.zeroValue, o = void 0 === a ? -1 : a, s = t.power, u = void 0 === s ? null : s; if (function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), o >= 0)
            return new P({ before: [0], after: [], e: 0, negative: !1 }); if (i[0].toIntegers(), null === u)
            r = i.reduce((function (e, t) { return t.toIntegers(), n.constructor._mulDigits(e, t); }));
        else {
            r = i[0];
            for (var l = 0; l < u - 1; l++)
                r = this.constructor._mulDigits(r, i[0]);
        } return r.removeE(), r; } var t, r, n; return t = e, n = [{ key: "_mulDigits", value: function (e, t) { var r = [], n = e.before.length + t.before.length - 1, i = e.equalsTenths, a = t.equalsTenths; if (i || a)
                    return i && e.setExponential(1, 1), a && t.setExponential(1, 1), new P({ before: i ? t.before.slice() : e.before.slice(), after: i ? t.after.slice() : e.after.slice(), e: e.e + t.e, negative: !(e.negative && t.negative || !e.negative && !t.negative) }); for (var o = n - 1, s = e.before.length - 1; s >= 0; s--, o--)
                    for (var u = 0, f = t.before.length - 1; f >= 0; f--, u++)
                        r[o - u] = r[o - u] || 0, r[o - u] += e.before[s] * t.before[f]; for (var c = r.length - 1; c >= 0; c--) {
                    var h = l(r, c);
                    c - 1 >= 0 && (r[c - 1] += h);
                } for (; h > 0;)
                    r.unshift(h), h = l(r, 0); return new P({ before: r, after: [], e: e.e + t.e, negative: !(e.negative && t.negative || !e.negative && !t.negative) }); } }], (r = null) && A(t.prototype, r), n && A(t, n), e; }();
        function Z(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var q = function () { function e(t) { var r = this, n = t.maxDecimal, i = t.digits, a = t.divideByZeroError, o = t.divisionError; return function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), this.maxDecimal = n, this._mapZeroDigits(i), this.zeroDigits.first && null === this.zeroDigits.next ? new P(0) : this.zeroDigits.next ? o(a, this.zeroDigits.next) : (this.result = function (e, t, r) { for (var n = arguments.length >= 3, i = n ? r : e[0], a = n ? 0 : 1; a < e.length; a++) {
            i = t(i, e[a]);
        } return i; }(i, (function (e, t) { return r._divDigits(e, t, !1); })), this.result.round(0 === this.maxDecimal ? 1 : -this.maxDecimal), this.result.removeE(), this.result); } var t, r, n; return t = e, (r = [{ key: "_mapZeroDigits", value: function (e) { var t = this; this.zeroDigits = { first: !1, next: null }, e.some((function (e, r) { if (e.equalsZero) {
                    if (0 !== r)
                        return t.zeroDigits.next = r, !0;
                    t.zeroDigits.first = !0;
                } })); } }, { key: "_divDigits", value: function (e, t) { var r = function () { return -(t.e - e.e); }, n = function () { return !(e.negative && t.negative || !e.negative && !t.negative); }; if (t.equalsTenths)
                    return t.setExponential(1, 1), e.e = r(), e.negative = n(), e; e.toIntegers(), t.toIntegers(); var i = r(), a = n(); t.negative = !1, t.e = 0; for (var s, u, l = new P(0), c = b(t, 14), h = 0;;) {
                    e.negative = !1, e.e = 0;
                    var d = b(e, 15), v = Math.floor(d.value / c.value);
                    if (v < 1) {
                        var g = c.extracted.length - d.extracted.length || 1;
                        e.removeE(g), h -= g;
                    }
                    else {
                        var p = new P(v);
                        if (p.e = d.left - c.left, s = new R({ digits: [p, t] }), u = new o({ digits: [e, s] }), p.e += h, l.add(p), e = u, !f(t, u))
                            continue;
                    }
                    if (u && 0 == u.toString() || l.after.length - i >= this.maxDecimal + 1)
                        break;
                } return l.e = i, l.negative = a, l.floor(-(this.maxDecimal + 1)), l; function b(e, t) { var r = e.before.slice(0, t), n = e.before.length - r.length, i = Number(r.join("")); return { extracted: r, left: n, value: i }; } } }]) && Z(t.prototype, r), n && Z(t, n), e; }();
        function V(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        var B = function () { function e(t) { var r = t.digit, n = t.power; return function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), this.digit = r, this.power = n, this.digitPower = new P(this.power), this.digitPower.equalsZero ? new P({ before: [1], after: [], e: 0, negative: !1 }) : this.digit.equalsZero ? new P({ before: [0], after: [], e: 0, negative: !1 }) : this.digit.equalsTenths ? (this.digit.setExponential(1, 1), this.digit.e *= this.power, this.digit.removeE(), this._setTenthsNegative(), this.digit) : new R({ digits: [this.digit], power: this.power }); } var t, r, n; return t = e, (r = [{ key: "_setTenthsNegative", value: function () { var e = this.power / 2, t = e === Math.round(e); this.digit.negative && t && (this.digit.negative = !1); } }]) && V(t.prototype, r), n && V(t, n), e; }(), M = r(1), z = r.n(M);
        function $(e) { return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
        function F(e) { return function (e) { if (Array.isArray(e))
            return G(e); }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e); }(e) || L(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function U(e, t) { var r; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = L(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, i = function () { };
                return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var a, o = !0, s = !1; return { s: function () { r = e[Symbol.iterator](); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { s = !0, a = e; }, f: function () { try {
                o || null == r.return || r.return();
            }
            finally {
                if (s)
                    throw a;
            } } }; }
        function L(e, t) { if (e) {
            if ("string" == typeof e)
                return G(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? G(e, t) : void 0;
        } }
        function G(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function H(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function J(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function K(e, t, r) { return t && J(e.prototype, t), r && J(e, r), e; }
        var Q = function () { function e(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length - 1; H(this, e), this.elements = t.splice(r, n - r + 1), this.print = this.printScope(this.elements), "(" === this.elements[0] && this.elements.shift(), ")" === this.elements[this.elements.length - 1] && this.elements.pop(); } return K(e, [{ key: "printScope", value: function (t) { var r, n = "", a = U(t); try {
                    for (a.s(); !(r = a.n()).done;) {
                        var o = r.value;
                        i()(o, String) && (n += o), i()(o, e) && (n += o.print);
                    }
                }
                catch (e) {
                    a.e(e);
                }
                finally {
                    a.f();
                } return n; } }]), e; }(), W = function () { function e(t, r) { H(this, e), this.type = r, this.print = t, this.adjacent = !/\s$/.test(t); } return K(e, [{ key: "digitChar", get: function () { return (this.add || this.sub) && /[+-]$/.test(this.print); } }, { key: "add", get: function () { return "add" === this.type; } }, { key: "sub", get: function () { return "sub" === this.type; } }, { key: "mul", get: function () { return "mul" === this.type; } }, { key: "div", get: function () { return "div" === this.type; } }]), e; }(), X = function () { function e(t) { var r = this, n = t.formula, i = t.chars, a = t.maxDecimal, o = t.invalidError, s = t.divisionError, u = t.unsafeError; H(this, e), this.maxDecimal = a, this.invalidError = o, this.divisionError = s, this.unsafeError = u, this.result = null; var l = [this, "_seekIllegalChars", "_cutParentheses", "_validateParentheses", "_createParenthesesScopes", "_resolveParenthesesScopes"], f = "\\d*[".concat(i.decimalChar, "]?\\d+(?:e[+-]\\d+)?"), c = { formula: n, chars: i, reg: { split: new RegExp("\\s*((".concat(f, ")|([-+").concat(i.divChar).concat(i.mulChar, "])|(.))\\s*"), "g"), digitRegExp: new RegExp("^\\s*".concat(f, "\\s*$")), charsRegExp: new RegExp("^\\s*(?:([+])|([-])|([".concat(i.mulChar, "])|([").concat(i.divChar, "]))\\s*$")) } }; if (z()([l], { context: c, timeout: null }, (function (e, t, n) { return r.result = n; }), (function (e, t) { var r = t.type, n = t.error, i = t.args, a = void 0 === i ? [] : i; return r(n.apply(void 0, F(a))); })), null !== this.result)
            return this.result; } return K(e, [{ key: "_seekIllegalChars", value: function (e, t, r) { if (/^\s*$/.test(r.formula))
                    return this.invalidError(this.errorDefaults.emptyFormula()); var n = new RegExp("[^0-9e()\\s-+".concat(r.chars.decimalChar).concat(r.chars.divChar).concat(r.chars.mulChar, "]")), i = r.formula.match(n); if (i && i.length)
                    return this.invalidError(this.errorDefaults.illegalCharacter(i[0])); e(); } }, { key: "_cutParentheses", value: function (e, t, r) { var n = /(\(|\))/g; r.allCollection = r.formula.split(n), r.parenthesesCollection = r.formula.match(n), e(); } }, { key: "_validateParentheses", value: function (e, t, r) { var n = 0, i = 0, a = 0, o = !1; if (!r.parenthesesCollection)
                    return e(); var s, u = U(r.parenthesesCollection); try {
                    for (u.s(); !(s = u.n()).done;) {
                        var l = s.value;
                        "(" === l && (n++, a++), ")" === l && (i++, a--), a < 0 && (o = !0);
                    }
                }
                catch (e) {
                    u.e(e);
                }
                finally {
                    u.f();
                } if (n !== i) {
                    var f = { side: n > i ? "closing" : "opening", num: Math.abs(n - i) };
                    return this.invalidError(this.errorDefaults.missingParenthesis(f.side, f.num));
                } if (o)
                    return this.invalidError(this.errorDefaults.invalidParenthesesOrder()); e(); } }, { key: "_createParenthesesScopes", value: function (e, t, r) { r.scopeOrder = [], function e(t) { for (var n = null, i = 0; i < t.length; i++) {
                    var a = t[i];
                    if ("(" === a)
                        n = i;
                    else if (")" === a) {
                        var o = new Q(t, n, i);
                        t.splice(n, 0, o), r.scopeOrder.push(o), e(t);
                    }
                    else if (/^\s*$/.test(a)) {
                        t.splice(i, 1), i--;
                        continue;
                    }
                } }(r.allCollection), r.scopeOrder.push(new Q(r.allCollection)), e(); } }, { key: "_resolveParenthesesScopes", value: function (e, t, r) { var n, i = [], a = [this, "_splitEquation", "_parseDigitsChars", "_validateScopeElements", "_computeScope"], o = U(r.scopeOrder); try {
                    var s = function () { var e = n.value; i.push((function (t, n) { var i = { root: r, scopeEquation: e }; z()([a], { context: i, timeout: null }, t, (function (e, t) { return n(t); })); })); };
                    for (o.s(); !(n = o.n()).done;)
                        s();
                }
                catch (e) {
                    o.e(e);
                }
                finally {
                    o.f();
                } z.a.all(i, { context: r, timeout: null }, (function (t, r) { var n = r.scopeOrder[r.scopeOrder.length - 1].result; return n.removeE(), e(n); }), (function (e, r) { return t(r); })); } }, { key: "_splitEquation", value: function (e, t, r) { var n, a = [], o = U(r.scopeEquation.elements); try {
                    for (o.s(); !(n = o.n()).done;) {
                        var s = n.value;
                        i()(s, String) ? a.push.apply(a, F(s.match(r.root.reg.split))) : a.push(s);
                    }
                }
                catch (e) {
                    o.e(e);
                }
                finally {
                    o.f();
                } r.equationItems = a, e(); } }, { key: "_parseDigitsChars", value: function (e, t, r) { for (var n = this, a = [], o = function (e) { var o = c(r.equationItems, e).item; if (i()(o, Q))
                    return a.push(o), "continue"; var s = o.match(r.root.reg.digitRegExp); if (s)
                    return a.push(new P(s[0])), "continue"; var u = o.match(r.root.reg.charsRegExp); return u ? (u.some((function (e, t) { var r = t > 0 && e; return r && a.push(new W(u[0], ["add", "sub", "mul", "div"][t - 1])), r; })), "continue") : { v: t({ type: n.invalidError, error: n.errorDefaults.illegalCombination, args: [r.scopeEquation.print, o] }) }; }, s = 0; s < r.equationItems.length; s++) {
                    var u = o(s);
                    if ("continue" !== u && "object" === $(u))
                        return u.v;
                } r.collection = a, e(); } }, { key: "_validateScopeElements", value: function (e, t, r) { for (var n = 0; n < r.collection.length; n++) {
                    var a = c(r.collection, n), o = a.item, s = a.previous, u = a.next, l = a.first, f = a.last;
                    if (i()(o, P)) {
                        if (i()(u, P))
                            return t({ type: this.invalidError, error: this.errorDefaults.illegalCombination, args: [r.scopeEquation.print, o.print + u.print] });
                        i()(u, Q) && r.collection.splice(++n, 0, new W("*", "mul"));
                    }
                    else if (i()(o, W))
                        switch (!0) {
                            case l && (o.div || o.mul || i()(u, W)) || i()(s, W) && i()(u, W):
                            case f:
                            case l && !o.adjacent && i()(u, P):
                            case i()(u, W) && (u.mul || u.div || !u.digitChar): return t({ type: this.invalidError, error: this.errorDefaults.illegalCombination, args: [r.scopeEquation.print, (l ? "" : s.print) + o.print + (f ? "" : u.print)] });
                            case l || i()(s, W): o.sub && i()(u, P) && u.negate(), o.sub && i()(u, Q) && u.result.negate(), r.collection.splice(n, 1), n--;
                        }
                    else
                        i()(o, Q) && i()(u, [Q, P]) && r.collection.splice(++n, 0, new W("*", "mul"));
                } e(); } }, { key: "_computeScope", value: function (e, t, r) { for (var n = this, a = 0; a < r.collection.length; a++) {
                    var s = c(r.collection, a), u = s.item, l = s.previous, f = s.next;
                    if (i()(u, W) && (u.mul || u.div)) {
                        var h = i()(l, P) ? l : l.result, d = i()(f, P) ? f : f.result;
                        if (u.mul && r.collection.splice(a - 1, 3, new R({ digits: [h, d], zeroValue: h.equalsZero ? 0 : d.equalsZero ? 1 : -1 })), u.div) {
                            var v = !1;
                            if (r.collection.splice(a - 1, 3, new q({ digits: [h, d], maxDecimal: this.maxDecimal, divideByZeroError: this.errorDefaults.divideByZero(r.scopeEquation.print), divisionError: function (e) { return v = !0, t({ type: n.divisionError, error: function () { return e; } }); } })), v)
                                return;
                        }
                        a--;
                    }
                } for (var p = 0; p < r.collection.length; p++) {
                    var b = c(r.collection, p), m = b.item, y = b.previous, _ = b.next;
                    if (i()(m, W) && (m.add || m.sub)) {
                        var w = i()(y, P) ? y : y.result, E = i()(_, P) ? _ : _.result;
                        m.add && r.collection.splice(p - 1, 3, new g({ digits: [w, E] })), m.sub && r.collection.splice(p - 1, 3, new o({ digits: [w, E] })), p--;
                    }
                } if (!r.collection.length)
                    return t({ type: this.invalidError, error: this.errorDefaults.emptyParentheses }); r.scopeEquation.result = i()(r.collection[0], P) ? r.collection[0] : r.collection[0].result, e(); } }, { key: "signDescriptor", get: function () { return { div: "division", mul: "multiplication", add: "addition", sub: "subtraction" }; } }, { key: "errorDefaults", get: function () { return { emptyFormula: function () { return new Error("The [String] formula cannot be empty."); }, missingParenthesis: function (e, t) { return new Error("The ".concat(t, " ").concat(e, " parenthes").concat(t > 1 ? "es are" : "is is", " missing in the [String] formula.")); }, invalidParenthesesOrder: function () { return new Error("The closing parenthesis has been placed before the opening parenthesis in the [String] formula."); }, illegalCharacter: function (e) { return new Error("The [String] formula contains illegal character ".concat(e)); }, illegalCombination: function (e, t) { return new Error("Invalid '".concat(e, "' expression. It contains illegal combination: '").concat(t, "'.")); }, emptyParentheses: function () { return new Error("The [String] formula cannot contain empty parentheses scope."); }, divideByZero: function (e) { return new Error("Invalid '".concat(e, "' expression. The division by zero is not allowed.")); } }; } }]), e; }();
        function Y(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function ee(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function te(e, t, r) { return t && ee(e.prototype, t), r && ee(e, r), e; }
        t.default = new (function () { function e() { Y(this, e); } return te(e, [{ key: "add", value: function () { return new re(arguments, "add")._algebra(); } }, { key: "sub", value: function () { return new re(arguments, "sub")._algebra(); } }, { key: "mul", value: function () { return new re(arguments, "mul")._algebra(); } }, { key: "div", value: function () { return new re(arguments, "div")._algebra(); } }, { key: "formula", value: function () { return new re(arguments, "formula")._formula(); } }, { key: "round", value: function () { return new re(arguments, "round")._rounding(); } }, { key: "ceil", value: function () { return new re(arguments, "ceil")._rounding(); } }, { key: "floor", value: function () { return new re(arguments, "floor")._rounding(); } }, { key: "pow", value: function () { return new re(arguments, "pow")._power(); } }]), e; }());
        var re = function () { function e(t, r) { function n(e, t) { if (i()(e, String)) {
            var r = e;
            if (!t.has(r))
                return t;
            t.forEach((function (e, n) { return t.set(n, r === n); }));
        } if (i()(e, Array)) {
            var n = e;
            if (!n.some((function (e) { return t.has(e); })))
                return t;
            t.forEach((function (e, r) { return t.set(r, n.some((function (e) { return e === r; }))); }));
        } return t; } Y(this, e), this._data = { mode: r, invalidReturn: NaN, values: Array.prototype.slice.call(t), zeroValue: -1, digits: [] }, function () { this._data.callback = i()(this._data.values[this._data.values.length - 1], Function) ? this._data.values.pop() : null; }.call(this), function () { var e = this._data.values[this._data.values.length - 1]; this._data.userConfig = i()(e, Object) ? this._data.values.pop() : i()(e, Boolean) ? { returnString: this._data.values.pop() } : {}; }.call(this), function () { this._data.config = this.configDefaults; var e = this.configValidatorList, t = this._data.userConfig; for (var r in t) {
            var n = t[r];
            this._data.config.hasOwnProperty(r) && e[r](n) && (this._data.config[r] = n);
        } }.call(this), function () { var e = this.charsDefaults, t = this._data.userConfig; for (var r in t) {
            var i = t[r];
            e.hasOwnProperty(r) && (e[r] = n(i, e[r]));
        } delete this._data.userConfig, this._data.chars = e; }.call(this), function () { for (var e in this._data.chars) {
            var t = this._data.chars[e], r = "";
            t.forEach((function (e, t) { e && (r += t); })), this._data.chars[e] = "".concat(r);
        } }.call(this); } return te(e, [{ key: "_validateValues", value: function (e) { for (var t = this.validStringNumber, r = 0; r < e.length; r++) {
                    var n = e[r];
                    if (i()(n, String)) {
                        if ("Infinity" === n || "-Infinity" === n) {
                            var a = this.errorDefaults.infinityValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: a, argumentSet: { error: a, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if ("NaN" === n) {
                            var o = this.errorDefaults.nanValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: o, argumentSet: { error: o, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if (!t.test(n)) {
                            var s = this.errorDefaults.invalidStringValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: s, argumentSet: { error: s, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                    }
                    else {
                        if (!i()(n, Number)) {
                            var u = this.errorDefaults.invalidValueTypeError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: u, argumentSet: { error: u, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if (n === 1 / 0 || n === -1 / 0) {
                            var l = this.errorDefaults.infinityValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: l, argumentSet: { error: l, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                        if (Number.isNaN(n)) {
                            var f = this.errorDefaults.nanValueError(r);
                            return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: f, argumentSet: { error: f, index: r, list: this._data.values, callback: this._data.callback || void 0 } });
                        }
                    }
                    h.call(this, n, r);
                    var c = new P(n);
                    this._data.digits.push(c);
                } function h(e, t) { this._data.zeroValue >= 0 || 0 == Number(e) && (this._data.zeroValue = t); } return !0; } }, { key: "_algebra", value: function () { var e = this; if (this._data.values.length < 2) {
                    var t = this.errorDefaults.algebraTwoValuesError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: t, argumentSet: { error: t, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } if (!this._validateValues(this._data.values))
                    return this._data.invalidReturn; switch (this._data.mode) {
                    case "add":
                        this._data.result = new g({ digits: this._data.digits });
                        break;
                    case "sub":
                        this._data.result = new o({ digits: this._data.digits });
                        break;
                    case "mul":
                        this._data.result = new R({ digits: this._data.digits, zeroValue: this._data.zeroValue });
                        break;
                    case "div":
                        var r = !1;
                        if (this._data.result = new q({ digits: this._data.digits, maxDecimal: this._data.config.maxDecimal, divideByZeroError: this.errorDefaults.divideByZeroError, divisionError: function (t, n) { r = !0; var i = t(n); e._handleErrors({ errorConfig: e._data.config.divideByZeroError, errorDefault: i, argumentSet: { error: i, index: n, list: e._data.values, callback: e._data.callback || void 0 } }); } }), r)
                            return this._data.invalidReturn;
                } return this._handleResult(); } }, { key: "_formula", value: function () { var e = this; if (1 !== this._data.values.length || !i()(this._data.values[0], String)) {
                    var t = this.errorDefaults.formulaOneParameterError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: t, argumentSet: { error: t, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } var r = !1, n = !1; return this._data.result = new X({ formula: this._data.values[0], chars: this._data.chars, maxDecimal: this._data.config.maxDecimal, zeroArgumentError: this.errorDefaults.divideByZero, divisionError: function (t) { n = !0, e._handleErrors({ errorConfig: e._data.config.divideByZeroError, errorDefault: t, argumentSet: { error: t, index: void 0, list: e._data.values, callback: e._data.callback || void 0 } }); }, invalidError: function (t) { r = !0, e._handleErrors({ errorConfig: e._data.config.invalidError, errorDefault: t, argumentSet: { error: t, index: 0, list: e._data.values, callback: e._data.callback || void 0 } }); } }), n || r ? this._data.invalidReturn : this._handleResult(); } }, { key: "_rounding", value: function () { var e = this._data.values.length; if (0 === e || e > 2) {
                    var t = this.errorDefaults.roundingTwoArgumentsError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: t, argumentSet: { error: t, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } if (!this._validateValues([this._data.values[0]]))
                    return this._data.invalidReturn; if (1 === e)
                    this._data.values.push(1);
                else if (!i()(this._data.values[1], Number) || !s(this._data.values[1])) {
                    var r = this.errorDefaults.roundingInvalidIntegerError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: r, argumentSet: { error: r, index: 1, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } var n = { digit: this._data.digits[0], places: this._data.values[1], trim: this._data.config.trim }; switch (this._data.mode) {
                    case "round":
                        this._data.result = new C(n);
                        break;
                    case "ceil":
                        this._data.result = new T(n);
                        break;
                    case "floor": this._data.result = new N(n);
                } return this._handleResult(); } }, { key: "_power", value: function () { var e = this._data.values.length; if (0 === e || e > 2) {
                    var t = this.errorDefaults.powerTwoArgumentsError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: t, argumentSet: { error: t, index: void 0, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } if (!this._validateValues([this._data.values[0]]))
                    return this._data.invalidReturn; if (1 === e)
                    this._data.values.push(2);
                else if (!(i()(this._data.values[1], Number) && s(this._data.values[1]) && this._data.values[1] >= 0)) {
                    var r = this.errorDefaults.powerInvalidPositiveIntegerError();
                    return this._handleErrors({ errorConfig: this._data.config.invalidError, errorDefault: r, argumentSet: { error: r, index: 1, list: this._data.values, callback: this._data.callback || void 0 } }), this._data.invalidReturn;
                } var n = { digit: this._data.digits[0], power: this._data.values[1] }; switch (this._data.mode) {
                    case "pow": this._data.result = new B(n);
                } return this._handleResult(); } }, { key: "_handleErrors", value: function (e) { var t = e.errorConfig, r = e.errorDefault, n = e.argumentSet, a = void 0 === n ? {} : n, o = t, s = this._data.callback; switch (!0) {
                    case i()(o, Boolean):
                        if (!0 === o && !s)
                            throw r;
                        return s && s(this.invalidCallbackObject(o ? r : null)), !1;
                    case i()(o, /.*Error/):
                        if (!s)
                            throw o;
                        return s(this.invalidCallbackObject(o)), !1;
                    case i()(o, Function): return this._data.invalidReturn = o(a), !1;
                } } }, { key: "_handleResult", value: function () { var e = this._data.config; (e.returnString || this._data.callback) && this._data.result.setExponential(e.eMinus, e.ePlus); var t = this._data.result.toString(), r = { error: null, string: t, number: Number(t) }; return this._data.callback && this._data.callback(r), r[e.returnString ? "string" : "number"]; } }, { key: "configValidatorList", get: function () { var e = this; return { returnString: function (e) { return i()(e, Boolean); }, eMinus: function (t) { return (e._data.callback || e._data.config.returnString) && i()(t, Number) && t >= 0 && (s(t) || t === 1 / 0); }, ePlus: function (t) { return (e._data.callback || e._data.config.returnString) && i()(t, Number) && t >= 0 && (s(t) || t === 1 / 0); }, maxDecimal: function (t) { return ("div" === e._data.mode || "formula" === e._data.mode) && i()(t, Number) && t >= 0 && s(t); }, divideByZeroError: function (t) { return ("div" === e._data.mode || "formula" === e._data.mode) && i()(t, /(Boolean|.*Error|Function)/); }, invalidError: function (e) { return i()(e, /(Boolean|.*Error|Function)/); }, trim: function (e) { return i()(e, Boolean); } }; } }, { key: "configDefaults", get: function () { return { returnString: !1, eMinus: 7, ePlus: 21, maxDecimal: 17, divideByZeroError: !1, invalidError: !0, trim: !0 }; } }, { key: "charsDefaults", get: function () { return { decimalChar: new Map([[".", !0], [",", !0]]), divChar: new Map([["/", !0], [":", !0], ["÷", !0]]), mulChar: new Map([["*", !0], ["x", !0], ["⋅", !0], ["×", !0]]) }; } }, { key: "errorDefaults", get: function () { return { algebraTwoValuesError: function () { return new Error("Set at least two [Number|String] values."); }, invalidValueTypeError: function (e) { return new TypeError("Incorrect argument [".concat(e, "]. The [Number|String] value is expected.")); }, nanValueError: function (e) { return new TypeError("Incorrect argument [".concat(e, "]. The argument cannot be a NaN value.")); }, infinityValueError: function (e) { return new TypeError("Incorrect argument [".concat(e, "]. The argument cannot be an Infinity or -Infinity value.")); }, invalidStringValueError: function (e) { return new Error("Incorrect argument [".concat(e, "]. The [String] argument is not a valid numerical value.")); }, formulaOneParameterError: function () { return new Error("The one [String] formula argument is expected."); }, roundingTwoArgumentsError: function () { return new Error("Two arguments are expected: [0]: [String|Number] value; [1]: [Number] decimal places integer."); }, powerTwoArgumentsError: function () { return new Error("Two arguments are expected: [0]: [String|Number] value; [1]: [Number] power exponent positive integer."); }, roundingInvalidIntegerError: function () { return new Error("Incorrect argument [1]. The [Number] decimal places integer is expected."); }, powerInvalidPositiveIntegerError: function () { return new Error("Incorrect argument [1]. The [Number] power exponent positive integer is expected."); }, divideByZeroError: function (e) { return new Error("Incorrect argument [".concat(e, "]. The division by zero is not allowed.")); } }; } }, { key: "invalidCallbackObject", get: function () { var e = this; return function (t) { return { number: e._data.invalidReturn, string: e._data.invalidReturn, error: t }; }; } }, { key: "validStringNumber", get: function () { return new RegExp("^([+-]?\\d*[".concat(this._data.chars.decimalChar, "]?\\d+(?:e[+-]\\d+)?)$")); } }]), e; }();
    }]).default;
