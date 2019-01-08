/* Disable minification (remove `.min` from URL path) for more info */
(function (undefined) {
    ! function (e) {
        var t = Object.prototype.hasOwnProperty("__defineGetter__"),
            r = "A property cannot both have accessors and be writable or have a value";
        Object.defineProperty = function (n, o, i) {
            if (e && (n === window || n === document || n === Element.prototype || n instanceof Element)) return e(n, o, i);
            if (null === n || !(n instanceof Object || "object" == typeof n)) throw new TypeError("Object.defineProperty called on non-object");
            if (!(i instanceof Object)) throw new TypeError("Property description must be an object");
            var c = String(o),
                a = "value" in i || "writable" in i,
                f = "get" in i && typeof i.get,
                p = "set" in i && typeof i.set;
            if (f) {
                if ("function" !== f) throw new TypeError("Getter must be a function");
                if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                if (a) throw new TypeError(r);
                Object.__defineGetter__.call(n, c, i.get)
            } else n[c] = i.value;
            if (p) {
                if ("function" !== p) throw new TypeError("Setter must be a function");
                if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                if (a) throw new TypeError(r);
                Object.__defineSetter__.call(n, c, i.set)
            }
            return "value" in i && (n[c] = i.value), n
        }
    }(Object.defineProperty);
    Object.defineProperty(Function.prototype, "bind", {
        value: function (t) {
            var n, o = Array,
                r = Object,
                e = r.prototype,
                i = o.prototype,
                c = function () {},
                p = e.toString,
                l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                a = Function.prototype.toString,
                u = function (t) {
                    try {
                        return a.call(t), !0
                    } catch (n) {
                        return !1
                    }
                };
            n = function (t) {
                if ("function" != typeof t) return !1;
                if (l) return u(t);
                var n = p.call(t);
                return "[object Function]" === n || "[object GeneratorFunction]" === n
            };
            var y = i.slice,
                f = i.concat,
                b = i.push,
                h = Math.max,
                s = this;
            if (!n(s)) throw new TypeError("Function.prototype.bind called on incompatible " + s);
            for (var g, d = y.call(arguments, 1), m = function () {
                    if (this instanceof g) {
                        var n = s.apply(this, f.call(d, y.call(arguments)));
                        return r(n) === n ? n : this
                    }
                    return s.apply(t, f.call(d, y.call(arguments)))
                }, v = h(0, s.length - d.length), F = [], j = 0; j < v; j++) b.call(F, "$" + j);
            return g = Function("binder", "return function (" + F.join(",") + "){ return binder.apply(this, arguments); }")(m), s.prototype && (c.prototype = s.prototype, g.prototype = new c, c.prototype = null), g
        }
    });
    ! function () {
        function e(e) {
            try {
                return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
            } catch (t) {}
        }
        var t, r, o, n = Function.prototype.call,
            c = Object.prototype,
            i = n.bind(c.hasOwnProperty);
        if ((o = i(c, "__defineGetter__")) && (t = n.bind(c.__lookupGetter__), r = n.bind(c.__lookupSetter__)), Object.defineProperty) {
            var p = e({});
            if (!("undefined" == typeof document || e(document.createElement("div"))) || !p) var _ = Object.getOwnPropertyDescriptor
        }
        if (!Object.getOwnPropertyDescriptor || _) {
            Object.getOwnPropertyDescriptor = function (e, n) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
                if (_) try {
                    return _.call(Object, e, n)
                } catch (l) {}
                if (i(e, n)) {
                    var p = {
                        enumerable: !0,
                        configurable: !0
                    };
                    if (o) {
                        var a = e.__proto__;
                        e.__proto__ = c;
                        var f = t(e, n),
                            u = r(e, n);
                        if (e.__proto__ = a, f || u) return f && (p.get = f), u && (p.set = u), p
                    }
                    return p.value = e[n], p.writable = !0, p
                }
            }
        }
    }();
    Object.keys = function () {
        "use strict";

        function t(t) {
            var e = r.call(t),
                n = "[object Arguments]" === e;
            return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
        }
        var e = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString,
            n = Object.prototype.propertyIsEnumerable,
            o = !n.call({
                toString: null
            }, "toString"),
            l = n.call(function () {}, "prototype"),
            c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            i = function (t) {
                var e = t.constructor;
                return e && e.prototype === t
            },
            u = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            a = function () {
                if ("undefined" == typeof window) return !1;
                for (var t in window) try {
                    if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                        i(window[t])
                    } catch (r) {
                        return !0
                    }
                } catch (r) {
                    return !0
                }
                return !1
            }(),
            f = function (t) {
                if ("undefined" == typeof window || !a) return i(t);
                try {
                    return i(t)
                } catch (e) {
                    return !1
                }
            };
        return function (n) {
            var i = "[object Function]" === r.call(n),
                u = t(n),
                a = "[object String]" === r.call(n),
                p = [];
            if (n === undefined || null === n) throw new TypeError("Cannot convert undefined or null to object");
            var s = l && i;
            if (a && n.length > 0 && !e.call(n, 0))
                for (var g = 0; g < n.length; ++g) p.push(String(g));
            if (u && n.length > 0)
                for (var w = 0; w < n.length; ++w) p.push(String(w));
            else
                for (var y in n) s && "prototype" === y || !e.call(n, y) || p.push(String(y));
            if (o)
                for (var h = f(n), $ = 0; $ < c.length; ++$) h && "constructor" === c[$] || !e.call(n, c[$]) || p.push(c[$]);
            return p
        }
    }();
    ! function () {
        function e(e) {
            if (null === e || e === undefined) throw new TypeError("Cannot call method on " + e);
            return Object(e)
        }
        Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (n, r) {
                var t = e(n);
                if (1 === arguments.length) return t;
                var l, o, a, i, u = Array.prototype.slice.call(arguments, 1);
                for (l = 0; l < u.length; l++) {
                    var c = u[l];
                    for (c === undefined || null === c ? a = [] : (i = e(c), a = Object.keys(i)), o = 0; o < a.length; o++) {
                        var f = a[o],
                            b = Object.getOwnPropertyDescriptor(i, f);
                        if (b !== undefined && b.enumerable) {
                            var d = i[f];
                            t[f] = d
                        }
                    }
                }
                return t
            }
        })
    }();
    Object.defineProperties = function (e, r) {
        for (var n in r) r.hasOwnProperty(n) && Object.defineProperty(e, n, r[n]);
        return e
    };
    Array.prototype.forEach = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (var n = Object(this), i = arguments[1], o = n instanceof String ? n.split("") : n, r = Math.max(Math.min(o.length, 9007199254740991), 0) || 0, e = -1; ++e < r;) e in o && t.call(i, o[e], e, n)
    };
    Array.prototype.filter = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (var n, i = Object(this), r = arguments[1], o = i instanceof String ? i.split("") : i, e = Math.max(Math.min(o.length, 9007199254740991), 0) || 0, f = -1, h = []; ++f < e;) n = o[f], f in o && t.call(r, n, f, i) && h.push(n);
        return h
    };
    Array.prototype.map = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (var n = Object(this), i = arguments[1], r = n instanceof String ? n.split("") : n, o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, e = -1, a = []; ++e < o;) e in r && (a[e] = t.call(i, r[e], e, n));
        return a
    };
    ! function () {
        function t(t) {
            return null == t || "object" != typeof t && "function" != typeof t
        }
        Object.create = function (e, n) {
            if (null !== e && t(e)) throw new TypeError("Object prototype may only be an Object or null");
            var o = new Function("e", "function Object() {}Object.prototype=e;return new Object")(e);
            return o.constructor.prototype = e, 1 in arguments && Object.defineProperties(o, n), o
        }
    }();
    Object.getOwnPropertyNames = function (e) {
        var r, n = [],
            t = ["length", "name", "arguments", "caller", "prototype", "observe", "unobserve"];
        if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && n.push(r);
        for (var o = 0, l = t.length; o < l; o++) t[o] in e && n.push(t[o]);
        return n
    };
    Object.freeze = function (e) {
        return e
    };
    ! function (e, n, t) {
        var r, o = 0,
            u = "" + Math.random(),
            a = "__symbol:",
            c = a.length,
            l = "__symbol@@" + u,
            i = "defineProperty",
            f = "defineProperties",
            v = "getOwnPropertyNames",
            s = "getOwnPropertyDescriptor",
            b = "propertyIsEnumerable",
            y = e.prototype,
            h = y.hasOwnProperty,
            m = y[b],
            p = y.toString,
            w = Array.prototype.concat,
            g = "object" == typeof window ? e.getOwnPropertyNames(window) : [],
            d = e[v],
            P = function (e) {
                if ("[object Window]" === p.call(e)) try {
                    return d(e)
                } catch (n) {
                    return w.call([], g)
                }
                return d(e)
            },
            S = e[s],
            O = e.create,
            j = e.keys,
            E = e.freeze || e,
            _ = e[i],
            k = e[f],
            N = S(e, v),
            T = function (e, n, t) {
                if (!h.call(e, l)) try {
                    _(e, l, {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: {}
                    })
                } catch (r) {
                    e[l] = {}
                }
                e[l]["@@" + n] = t
            },
            z = function (e, n) {
                var t = O(e);
                return P(n).forEach(function (e) {
                    M.call(n, e) && G(t, e, n[e])
                }), t
            },
            A = function (e) {
                var n = O(e);
                return n.enumerable = !1, n
            },
            D = function () {},
            F = function (e) {
                return e != l && !h.call(x, e)
            },
            I = function (e) {
                return e != l && h.call(x, e)
            },
            M = function (e) {
                var n = "" + e;
                return I(n) ? h.call(this, n) && this[l]["@@" + n] : m.call(this, e)
            },
            W = function (n) {
                var t = {
                    enumerable: !1,
                    configurable: !0,
                    get: D,
                    set: function (e) {
                        r(this, n, {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: e
                        }), T(this, n, !0)
                    }
                };
                try {
                    _(y, n, t)
                } catch (o) {
                    y[n] = t.value
                }
                return E(x[n] = _(e(n), "constructor", B))
            },
            q = function K(e) {
                if (this instanceof K) throw new TypeError("Symbol is not a constructor");
                return W(a.concat(e || "", u, ++o))
            },
            x = O(null),
            B = {
                value: q
            },
            C = function (e) {
                return x[e]
            },
            G = function (e, n, t) {
                var o = "" + n;
                return I(o) ? (r(e, o, t.enumerable ? A(t) : t), T(e, o, !!t.enumerable)) : _(e, n, t), e
            },
            H = function (e) {
                return function (n) {
                    return h.call(e, l) && h.call(e[l], "@@" + n)
                }
            },
            J = function (e) {
                return P(e).filter(e === y ? H(e) : I).map(C)
            };
        N.value = G, _(e, i, N), N.value = J, _(e, "getOwnPropertySymbols", N), N.value = function (e) {
            return P(e).filter(F)
        }, _(e, v, N), N.value = function (e, n) {
            var t = J(n);
            return t.length ? j(n).concat(t).forEach(function (t) {
                M.call(n, t) && G(e, t, n[t])
            }) : k(e, n), e
        }, _(e, f, N), N.value = M, _(y, b, N), N.value = q, _(t, "Symbol", N), N.value = function (e) {
            var n = a.concat(a, e, u);
            return n in y ? x[n] : W(n)
        }, _(q, "for", N), N.value = function (e) {
            if (F(e)) throw new TypeError(e + " is not a symbol");
            return h.call(x, e) ? e.slice(2 * c, -u.length) : void 0
        }, _(q, "keyFor", N), N.value = function (e, n) {
            var t = S(e, n);
            return t && I(n) && (t.enumerable = M.call(e, n)), t
        }, _(e, s, N), N.value = function (e, n) {
            return 1 === arguments.length || void 0 === n ? O(e) : z(e, n)
        }, _(e, "create", N), N.value = function () {
            var e = p.call(this);
            return "[object String]" === e && I(this) ? "[object Symbol]" : e
        }, _(y, "toString", N), r = function (e, n, t) {
            var r = S(y, n);
            delete y[n], _(e, n, t), e !== y && _(y, n, r)
        }
    }(Object, 0, this);
    Object.defineProperty(Symbol, "iterator", {
        value: Symbol("iterator")
    });
    Object.defineProperty(Symbol, "toStringTag", {
        value: Symbol("toStringTag")
    });
    var Iterator = function () {
        var e = function () {
                return this.length = 0, this
            },
            t = function (e) {
                if ("function" != typeof e) throw new TypeError(e + " is not a function");
                return e
            },
            _ = function (e, n) {
                if (!(this instanceof _)) return new _(e, n);
                Object.defineProperties(this, {
                    __list__: {
                        writable: !0,
                        value: e
                    },
                    __context__: {
                        writable: !0,
                        value: n
                    },
                    __nextIndex__: {
                        writable: !0,
                        value: 0
                    }
                }), n && (t(n.on), n.on("_add", this._onAdd.bind(this)), n.on("_delete", this._onDelete.bind(this)), n.on("_clear", this._onClear.bind(this)))
            };
        return Object.defineProperties(_.prototype, Object.assign({
            constructor: {
                value: _,
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _next: {
                value: function () {
                    var e;
                    if (this.__list__) return this.__redo__ && (e = this.__redo__.shift()) !== undefined ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            next: {
                value: function () {
                    return this._createResult(this._next())
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _createResult: {
                value: function (e) {
                    return e === undefined ? {
                        done: !0,
                        value: undefined
                    } : {
                        done: !1,
                        value: this._resolve(e)
                    }
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _resolve: {
                value: function (e) {
                    return this.__list__[e]
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _unBind: {
                value: function () {
                    this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)), this.__context__.off("_delete", this._onDelete.bind(this)), this.__context__.off("_clear", this._onClear.bind(this)), this.__context__ = null)
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            toString: {
                value: function () {
                    return "[object Iterator]"
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }
        }, {
            _onAdd: {
                value: function (e) {
                    if (!(e >= this.__nextIndex__)) {
                        if (++this.__nextIndex__, !this.__redo__) return void Object.defineProperty(this, "__redo__", {
                            value: [e],
                            configurable: !0,
                            enumerable: !1,
                            writable: !1
                        });
                        this.__redo__.forEach(function (t, _) {
                            t >= e && (this.__redo__[_] = ++t)
                        }, this), this.__redo__.push(e)
                    }
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _onDelete: {
                value: function (e) {
                    var t;
                    e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (t = this.__redo__.indexOf(e), -1 !== t && this.__redo__.splice(t, 1), this.__redo__.forEach(function (t, _) {
                        t > e && (this.__redo__[_] = --t)
                    }, this)))
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _onClear: {
                value: function () {
                    this.__redo__ && e.call(this.__redo__), this.__nextIndex__ = 0
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }
        })), Object.defineProperty(_.prototype, Symbol.iterator, {
            value: function () {
                return this
            },
            configurable: !0,
            enumerable: !1,
            writable: !0
        }), Object.defineProperty(_.prototype, Symbol.toStringTag, {
            value: "Iterator",
            configurable: !1,
            enumerable: !1,
            writable: !0
        }), _
    }();
    String.prototype.includes = function (t, e) {
        if ("object" == typeof t && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(t, e)
    };
    String.prototype.contains = String.prototype.includes;
    var ArrayIterator = function () {
        var e = function (t, r) {
            if (!(this instanceof e)) return new e(t, r);
            Iterator.call(this, t), r = r ? String.prototype.contains.call(r, "key+value") ? "key+value" : String.prototype.contains.call(r, "key") ? "key" : "value" : "value", Object.defineProperty(this, "__kind__", {
                value: r,
                configurable: !1,
                enumerable: !1,
                writable: !1
            })
        };
        return Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype), e.prototype = Object.create(Iterator.prototype, {
            constructor: {
                value: e,
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _resolve: {
                value: function (e) {
                    return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            toString: {
                value: function () {
                    return "[object Array Iterator]"
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }
        }), e
    }();
    ! function (r) {
        Object.defineProperty(Array, "isArray", {
            configurable: !0,
            value: function (t) {
                return "[object Array]" === r.call(t)
            },
            writable: !0
        })
    }(Object.prototype.toString);
    Number.isFinite = Number.isFinite || function (i) {
        return "number" == typeof i && isFinite(i)
    };
    Number.isNaN = Number.isNaN || function (N) {
        return "number" == typeof N && isNaN(N)
    };
    ! function () {
        "use strict";

        function t(t) {
            var e = Number(t);
            return r(e) * Math.floor(Math.abs(Math.min(Math.max(e || 0, 0), 9007199254740991)))
        }

        function r(t) {
            return t >= 0 ? 1 : -1
        }

        function e(t) {
            return "string" == typeof t || "object" == typeof t && (y ? i(t) : f.call(t) === l)
        }

        function n(t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (y) return s(t);
            if (b(t)) return !1;
            var r = f.call(t);
            return r === g || r === d
        }
        var o, a, u = Object.prototype.hasOwnProperty,
            c = String.prototype.valueOf,
            i = function (t) {
                try {
                    return c.call(t), !0
                } catch (r) {
                    return !1
                }
            },
            f = Object.prototype.toString,
            l = "[object String]",
            p = "function" == typeof Symbol,
            y = p && "toStringTag" in Symbol,
            v = Function.prototype.toString,
            h = /^\s*class /,
            b = function (t) {
                try {
                    var r = v.call(t),
                        e = r.replace(/\/\/.*\n/g, ""),
                        n = e.replace(/\/\*[.\s\S]*\*\//g, ""),
                        o = n.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return h.test(o)
                } catch (a) {
                    return !1
                }
            },
            s = function (t) {
                try {
                    return !b(t) && (v.call(t), !0)
                } catch (r) {
                    return !1
                }
            },
            g = "[object Function]",
            d = "[object GeneratorFunction]",
            S = Array.isArray,
            j = function (t) {
                var r, e = !1,
                    n = [];
                if (t && "function" == typeof t.next)
                    for (; !e;) {
                        if (r = t.next(), !u.call(r, "value") || !u.call(r, "done")) {
                            if (!0 === r.done) {
                                e = !0;
                                break
                            }
                            break
                        }
                        if (!0 === r.done) {
                            e = !0;
                            break
                        }
                        if (!1 !== r.done) break;
                        n.push(r.value)
                    }
                return !!e && n
            },
            m = "function" == typeof Set,
            w = "function" == typeof Map;
        if (p) o = Symbol.iterator;
        else {
            var F;
            try {
                F = Function("iterable", "var arr = []; for (var value of iterable) arr.push(value); return arr;")
            } catch (q) {}
            if (function () {
                    try {
                        var t = !1;
                        return F({
                            "@@iterator": function () {
                                return {
                                    next: function () {
                                        return t = !0, {
                                            done: !0,
                                            value: undefined
                                        }
                                    }
                                }
                            }
                        }), t
                    } catch (q) {
                        return !1
                    }
                }()) o = "@@iterator";
            else if ("function" == typeof Set) {
                var O = new Set;
                O.add(0);
                try {
                    1 === F(O).length && (a = F)
                } catch (q) {}
            }
        }
        var D;
        if (m) {
            var M = Object.getOwnPropertyDescriptor(Set.prototype, "size").get;
            D = function (t) {
                try {
                    return M.call(t), !0
                } catch (q) {
                    return !1
                }
            }
        }
        var x;
        if (w) {
            var A = Object.getOwnPropertyDescriptor(Map.prototype, "size").get;
            x = function (t) {
                try {
                    return A.call(t), !0
                } catch (q) {
                    return !1
                }
            }
        }
        var k = m && Set.prototype.forEach,
            P = w && Map.prototype.forEach,
            E = function (t) {
                var r = [];
                return u.call(t, o) ? t[o]() : k && D(t) ? (k.call(t, function (t) {
                    r.push(t)
                }), {
                    next: function () {
                        return 0 === r.length ? {
                            done: !0
                        } : {
                            value: r.splice(0, 1)[0],
                            done: !1
                        }
                    }
                }) : P && x(t) ? (P.call(t, function (t, e) {
                    r.push([e, t])
                }), {
                    next: function () {
                        return 0 === r.length ? {
                            done: !0
                        } : {
                            value: r.splice(0, 1)[0],
                            done: !1
                        }
                    }
                }) : t
            },
            T = String.prototype.match,
            z = function (t) {
                var r = j(E(t));
                if (!r)
                    if (e(t)) r = T.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
                    else if (a && !S(t)) try {
                    r = a(t)
                } catch (q) {}
                return r || t
            };
        Object.defineProperty(Array, "from", {
            configurable: !0,
            value: function (r) {
                var e = this;
                if (null === r || void 0 === r) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
                var o, a;
                if ("undefined" != typeof arguments[1]) {
                    if (o = arguments[1], !n(o)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");
                    arguments.length > 2 && (a = arguments[2])
                }
                for (var u, c, i = Object(z(r)), f = t(i.length), l = n(e) ? Object(new e(f)) : new Array(f), p = 0; p < f;) u = i[p], c = o ? void 0 === a ? o(u, p) : o.apply(a, [u, p]) : u, Object.defineProperty(l, p, {
                    configurable: !0,
                    enumerable: !0,
                    value: c,
                    writable: !0
                }), p += 1;
                return l.length = f, l
            },
            writable: !0
        })
    }();
    ! function () {
        "use strict";
        var r = function () {
                try {
                    var r = {},
                        e = Object.defineProperty,
                        n = e(r, r, r) && e
                } catch (t) {}
                return n
            }(),
            e = function (r) {
                try {
                    return !!new r
                } catch (e) {
                    return !1
                }
            },
            n = function () {
                for (var n, t = arguments, a = t.length, u = this, c = e(u) ? new u(a) : new Array(a), i = 0; i < a;) n = t[i], r ? r(c, i, {
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }) : c[i] = n, i += 1;
                return c.length = a, c
            };
        r ? r(Array, "of", {
            value: n,
            configurable: !0,
            writable: !0
        }) : Array.of = n
    }();
    Array.prototype.every = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (var n = Object(this), r = arguments[1], e = n instanceof String ? n.split("") : n, i = Number(e.length) || 0, o = -1; ++o < i;)
            if (o in e && !t.call(r, e[o], o, n)) return !1;
        return !0
    };
    Object.defineProperty(Array.prototype, "fill", {
        configurable: !0,
        value: function (t) {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            var e = Object(this),
                n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0,
                r = 1 in arguments ? parseInt(Number(arguments[1]), 10) || 0 : 0;
            r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
            var a = 2 in arguments && arguments[2] !== undefined ? parseInt(Number(arguments[2]), 10) || 0 : n;
            for (a = a < 0 ? Math.max(n + arguments[2], 0) : Math.min(a, n); r < a;) e[r] = t, ++r;
            return e
        },
        writable: !0
    });
    Array.prototype.indexOf = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        var i = this instanceof String ? this.split("") : this,
            n = Math.max(Math.min(i.length, 9007199254740991), 0) || 0,
            r = Number(arguments[1]) || 0;
        for (r = (r < 0 ? Math.max(n + r, 0) : r) - 1; ++r < n;)
            if (r in i && i[r] === t) return r;
        return -1
    };
    Array.prototype.lastIndexOf = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        var n = this instanceof String ? this.split("") : this,
            i = Math.max(Math.min(n.length, 9007199254740991), 0) || 0,
            r = Number(arguments[1]) || 0;
        r = 1 in arguments ? (r < 0 ? Math.max(i + r, 0) : r) + 1 : i;
        for (; --r >= 0;)
            if (r in n && n[r] === t) return r;
        return -1
    };
    Array.prototype.reduce = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        var n, i = Object(this),
            r = i instanceof String ? i.split("") : i,
            e = Math.max(Math.min(r.length, 9007199254740991), 0) || 0,
            o = -1;
        if (1 in arguments) n = arguments[1];
        else {
            for (; ++o < e && !(o in r););
            if (o >= e) throw new TypeError("Reduce of empty array with no initial value");
            n = r[o]
        }
        for (; ++o < e;) o in r && (n = t(n, r[o], o, i));
        return n
    };
    Array.prototype.reduceRight = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        var i, n = Object(this),
            r = n instanceof String ? n.split("") : n,
            e = Math.max(Math.min(r.length, 9007199254740991), 0) || 0;
        if (1 in arguments) i = arguments[1];
        else {
            for (; --e > -1 && !(e in r););
            if (e <= -1) throw new TypeError("Reduce of empty array with no initial value");
            i = r[e]
        }
        for (; --e > -1;) e in r && (i = t(i, r[e], e, n));
        return i
    };
    Array.prototype.some = function (t) {
        if (this === undefined || null === this) throw new TypeError(this + " is not an object");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (var n = Object(this), i = arguments[1], r = n instanceof String ? n.split("") : n, o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, e = -1; ++e < o;)
            if (e in r && t.call(i, r[e], e, n)) return !0;
        return !1
    };
    "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function (o) {
        o.constructor ? o.Window = o.constructor : (o.Window = o.constructor = new Function("return function Window() {}")()).prototype = this
    }(this);
    "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document));
    ! function () {
        function e() {
            return a-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (m(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
        }
        if (window.Element && !window.HTMLElement) return void(window.HTMLElement = window.Element);
        window.Element = window.HTMLElement = new Function("return function Element() {}")();
        var t, n = document.appendChild(document.createElement("body")),
            o = n.appendChild(document.createElement("iframe")),
            r = o.contentWindow.document,
            c = Element.prototype = r.appendChild(r.createElement("*")),
            d = {},
            m = function (e, t) {
                var n, o, r, c = e.childNodes || [],
                    u = -1;
                if (1 === e.nodeType && e.constructor !== Element) {
                    e.constructor = Element;
                    for (n in d) o = d[n], e[n] = o
                }
                for (; r = t && c[++u];) m(r, t);
                return e
            },
            u = document.getElementsByTagName("*"),
            i = document.createElement,
            a = 100;
        c.attachEvent("onpropertychange", function (e) {
            for (var t, n = e.propertyName, o = !d.hasOwnProperty(n), r = c[n], m = d[n], i = -1; t = u[++i];) 1 === t.nodeType && (o || t[n] === m) && (t[n] = r);
            d[n] = r
        }), c.constructor = Element, c.hasAttribute || (c.hasAttribute = function (e) {
            return null !== this.getAttribute(e)
        }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function (e) {
            var t = i(String(e).toLowerCase());
            return m(t)
        }, document.removeChild(n)
    }();
    ! function () {
        function e(e, t) {
            for (var n = -1, o = e.length; ++n < o;)
                if (n in e && e[n] === t) return n;
            return -1
        }
        var t = {
            click: 1,
            dblclick: 1,
            keyup: 1,
            keypress: 1,
            keydown: 1,
            mousedown: 1,
            mouseup: 1,
            mousemove: 1,
            mouseover: 1,
            mouseenter: 1,
            mouseleave: 1,
            mouseout: 1,
            storage: 1,
            storagecommit: 1,
            textinput: 1
        };
        if ("undefined" != typeof document && "undefined" != typeof window) {
            var n = window.Event && window.Event.prototype || null;
            window.Event = Window.prototype.Event = function (e, t) {
                if (!e) throw new Error("Not enough arguments");
                var n;
                if ("createEvent" in document) {
                    n = document.createEvent("Event");
                    var o = !(!t || t.bubbles === undefined) && t.bubbles,
                        i = !(!t || t.cancelable === undefined) && t.cancelable;
                    return n.initEvent(e, o, i), n
                }
                return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n
            }, n && Object.defineProperty(window.Event, "prototype", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: n
            }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () {
                var n = this,
                    o = arguments[0],
                    i = arguments[1];
                if (n === window && o in t) throw new Error("In IE8 the event: " + o + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                n._events || (n._events = {}), n._events[o] || (n._events[o] = function (t) {
                    var o, i = n._events[t.type].list,
                        r = i.slice(),
                        c = -1,
                        a = r.length;
                    for (t.preventDefault = function () {
                            !1 !== t.cancelable && (t.returnValue = !1)
                        }, t.stopPropagation = function () {
                            t.cancelBubble = !0
                        }, t.stopImmediatePropagation = function () {
                            t.cancelBubble = !0, t.cancelImmediate = !0
                        }, t.currentTarget = n, t.relatedTarget = t.fromElement || null, t.target = t.target || t.srcElement || n, t.timeStamp = (new Date).getTime(), t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop); ++c < a && !t.cancelImmediate;) c in r && (o = r[c], -1 !== e(i, o) && "function" == typeof o && o.call(n, t))
                }, n._events[o].list = [], n.attachEvent && n.attachEvent("on" + o, n._events[o])), n._events[o].list.push(i)
            }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () {
                var t, n = this,
                    o = arguments[0],
                    i = arguments[1];
                n._events && n._events[o] && n._events[o].list && -1 !== (t = e(n._events[o].list, i)) && (n._events[o].list.splice(t, 1), n._events[o].list.length || (n.detachEvent && n.detachEvent("on" + o, n._events[o]), delete n._events[o]))
            }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (e) {
                if (!arguments.length) throw new Error("Not enough arguments");
                if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                var t = this,
                    n = e.type;
                try {
                    if (!e.bubbles) {
                        e.cancelBubble = !0;
                        var o = function (e) {
                            e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                        };
                        this.attachEvent("on" + n, o)
                    }
                    this.fireEvent("on" + n, e)
                } catch (i) {
                    e.target = t;
                    do {
                        e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode
                    } while (t && !e.cancelBubble)
                }
                return !0
            }, document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                    bubbles: !0
                }))
            }))
        }
    }();
    this.CustomEvent = function (e, t) {
        if (!e) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
        var n;
        if (t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            }, "createEvent" in document) try {
            n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
        } catch (l) {
            n = document.createEvent("Event"), n.initEvent(e, t.bubbles, t.cancelable), n.detail = t.detail
        } else n = new Event(e, t), n.detail = t && t.detail || null;
        return n
    }, CustomEvent.prototype = Event.prototype;
    var _DOMTokenList = function () {
        var n = !0,
            t = function (t, e, r, o) {
                Object.defineProperty ? Object.defineProperty(t, e, {
                    configurable: !1 === n || !!o,
                    get: r
                }) : t.__defineGetter__(e, r)
            };
        try {
            t({}, "support")
        } catch (e) {
            n = !1
        }
        return function (n, e) {
            var r = this,
                o = [],
                i = {},
                a = 0,
                c = 0,
                f = function (n) {
                    t(r, n, function () {
                        return u(), o[n]
                    }, !1)
                },
                l = function () {
                    if (a >= c)
                        for (; c < a; ++c) f(c)
                },
                u = function () {
                    var t, r, c = arguments,
                        f = /\s+/;
                    if (c.length)
                        for (r = 0; r < c.length; ++r)
                            if (f.test(c[r])) throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'), t.code = 5, t.name = "InvalidCharacterError", t;
                    for (o = "object" == typeof n[e] ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f), "" === o[0] && (o = []), i = {}, r = 0; r < o.length; ++r) i[o[r]] = !0;
                    a = o.length, l()
                };
            return u(), t(r, "length", function () {
                return u(), a
            }), r.toLocaleString = r.toString = function () {
                return u(), o.join(" ")
            }, r.item = function (n) {
                return u(), o[n]
            }, r.contains = function (n) {
                return u(), !!i[n]
            }, r.add = function () {
                u.apply(r, t = arguments);
                for (var t, c, f = 0, g = t.length; f < g; ++f) c = t[f], i[c] || (o.push(c), i[c] = !0);
                a !== o.length && (a = o.length >>> 0, "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l())
            }, r.remove = function () {
                u.apply(r, t = arguments);
                for (var t, c = {}, f = 0, g = []; f < t.length; ++f) c[t[f]] = !0, delete i[t[f]];
                for (f = 0; f < o.length; ++f) c[o[f]] || g.push(o[f]);
                o = g, a = g.length >>> 0, "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l()
            }, r.toggle = function (n, t) {
                return u.apply(r, [n]), undefined !== t ? t ? (r.add(n), !0) : (r.remove(n), !1) : i[n] ? (r.remove(n), !1) : (r.add(n), !0)
            }, r
        }
    }();
    ! function (t) {
        "DOMTokenList" in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList),
            function () {
                var t = document.createElement("span");
                "classList" in t && (t.classList.toggle("x", !1), t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function (t) {
                    var s = arguments[1];
                    if (s === undefined) {
                        var e = !this.contains(t);
                        return this[e ? "add" : "remove"](t), e
                    }
                    return s = !!s, this[s ? "add" : "remove"](t), s
                }))
            }(),
            function () {
                var t = document.createElement("span");
                if ("classList" in t && (t.classList.add("a", "b"), !t.classList.contains("b"))) {
                    var s = t.classList.constructor.prototype.add;
                    t.classList.constructor.prototype.add = function () {
                        for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n])
                    }
                }
            }(),
            function () {
                var t = document.createElement("span");
                if ("classList" in t && (t.classList.add("a"), t.classList.add("b"), t.classList.remove("a", "b"), t.classList.contains("b"))) {
                    var s = t.classList.constructor.prototype.remove;
                    t.classList.constructor.prototype.remove = function () {
                        for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n])
                    }
                }
            }()
    }(this);
    Date.now = function () {
        return (new Date).getTime()
    };
    Date.prototype.toISOString = function () {
        function t(t, e) {
            return t = "" + t, "0000".substr(0, e - t.length) + t
        }
        var e = this;
        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1, 2) + "-" + t(e.getUTCDate(), 2) + "T" + t(e.getUTCHours(), 2) + ":" + t(e.getUTCMinutes(), 2) + ":" + t(e.getUTCSeconds(), 2) + "." + t(e.getUTCMilliseconds(), 3) + "Z"
    };
    var _mutation = function () {
        function e(e) {
            return "function" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12
        }
        return function (n) {
            if (1 === n.length) return e(n[0]) ? n[0] : document.createTextNode(n[0] + "");
            for (var t = document.createDocumentFragment(), o = 0; o < n.length; o++) t.appendChild(e(n[o]) ? n[o] : document.createTextNode(n[o] + ""));
            return t
        }
    }();
    Document.prototype.after = Element.prototype.after = function () {
        if (this.parentNode) {
            for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; - 1 !== o && (e = e.nextSibling);) o = t.indexOf(e);
            this.parentNode.insertBefore(_mutation(arguments), e)
        }
    }, "Text" in this && (Text.prototype.after = Element.prototype.after);
    Document.prototype.append = Element.prototype.append = function () {
        this.appendChild(_mutation(arguments))
    };
    Document.prototype.before = Element.prototype.before = function () {
        if (this.parentNode) {
            for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; - 1 !== o && (t = t.previousSibling);) o = e.indexOf(t);
            this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild)
        }
    }, "Text" in this && (Text.prototype.before = Element.prototype.before);
    ! function () {
        function e(e, n, o) {
            var l, u, c = document.createElement("div"),
                i = "qsa" + String(Math.random()).slice(3);
            return c.innerHTML = "x<style>" + n + "{qsa:" + i + ";}", l = r.appendChild(c.lastChild), u = t(e, n, o, i), r.removeChild(l), o ? u[0] : u
        }

        function t(e, r, n, o) {
            var l, u = /1|9/.test(e.nodeType),
                c = e.childNodes,
                i = [],
                a = -1;
            if (u && e.currentStyle && e.currentStyle.qsa === o && i.push(e) && n) return i;
            for (; l = c[++a];)
                if (i = i.concat(t(l, r, n, o)), n && i.length) return i;
            return i
        }
        var r = document.getElementsByTagName("head")[0];
        Document.prototype.querySelector = Element.prototype.querySelector = function (t) {
            return e(this, t, !0)
        }, Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function (t) {
            return e(this, t, !1)
        }
    }();
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function (e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; o[r] && o[r] !== t;) ++r;
        return !!o[r]
    };
    Element.prototype.closest = function (e) {
        for (var n = this; n;) {
            if (n.matches(e)) return n;
            n = "SVGElement" in window && n instanceof SVGElement ? n.parentNode : n.parentElement
        }
        return null
    };
    Document.prototype.prepend = Element.prototype.prepend = function () {
        this.insertBefore(_mutation(arguments), this.firstChild)
    };
    Document.prototype.remove = Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this)
    }, "Text" in this && (Text.prototype.remove = Element.prototype.remove);
    Document.prototype.replaceWith = Element.prototype.replaceWith = function () {
        this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this)
    }, "Text" in this && (Text.prototype.replaceWith = Element.prototype.replaceWith);
    ! function (n) {
        function h() {
            a !== n.location.hash && (a = n.location.hash, n.dispatchEvent(new Event("hashchange"))), setTimeout(h, 500)
        }
        var a = n.location.hash;
        n.onhashchange = function () {}, h()
    }(this);
    (function () {
        function t(e, n) {
            function c(t) {
                if (c[t] !== b) return c[t];
                var e;
                if ("bug-string-char-index" == t) e = "a" != "a" [0];
                else if ("json" == t) e = c("json-stringify") && c("json-parse");
                else {
                    var r, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == t) {
                        var l = n.stringify,
                            u = "function" == typeof l && v;
                        if (u) {
                            (r = function () {
                                return 1
                            }).toJSON = r;
                            try {
                                u = "0" === l(0) && "0" === l(new i) && '""' == l(new a) && l(d) === b && l(b) === b && l() === b && "1" === l(r) && "[1]" == l([r]) && "[null]" == l([b]) && "null" == l(null) && "[null,null,null]" == l([b, d, null]) && l({
                                    a: [r, !0, !1, null, "\0\b\n\f\r\t"]
                                }) == o && "1" === l(null, r) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new f(-1))
                            } catch (p) {
                                u = !1
                            }
                        }
                        e = u
                    }
                    if ("json-parse" == t) {
                        var s = n.parse;
                        if ("function" == typeof s) try {
                            if (0 === s("0") && !s(!1)) {
                                r = s(o);
                                var h = 5 == r.a.length && 1 === r.a[0];
                                if (h) {
                                    try {
                                        h = !s('"\t"')
                                    } catch (p) {}
                                    if (h) try {
                                        h = 1 !== s("01")
                                    } catch (p) {}
                                    if (h) try {
                                        h = 1 !== s("1.")
                                    } catch (p) {}
                                }
                            }
                        } catch (p) {
                            h = !1
                        }
                        e = h
                    }
                }
                return c[t] = !!e
            }
            e || (e = o.Object()), n || (n = o.Object());
            var i = e.Number || o.Number,
                a = e.String || o.String,
                l = e.Object || o.Object,
                f = e.Date || o.Date,
                u = e.SyntaxError || o.SyntaxError,
                s = e.TypeError || o.TypeError,
                h = e.Math || o.Math,
                p = e.JSON || o.JSON;
            "object" == typeof p && p && (n.stringify = p.stringify, n.parse = p.parse);
            var g, y, b, j = l.prototype,
                d = j.toString,
                v = new f(-0xc782b5b800cec);
            try {
                v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds()
            } catch (P) {}
            if (!c("json")) {
                var C = c("bug-string-char-index");
                if (!v) var S = h.floor,
                    O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    A = function (t, e) {
                        return O[e] + 365 * (t - 1970) + S((t - 1969 + (e = +(e > 1))) / 4) - S((t - 1901 + e) / 100) + S((t - 1601 + e) / 400)
                    };
                if ((g = j.hasOwnProperty) || (g = function (t) {
                        var e, r = {};
                        return (r.__proto__ = null, r.__proto__ = {
                            toString: 1
                        }, r).toString != d ? g = function (t) {
                            var e = this.__proto__,
                                r = t in (this.__proto__ = null, this);
                            return this.__proto__ = e, r
                        } : (e = r.constructor, g = function (t) {
                            var r = (this.constructor || e).prototype;
                            return t in this && !(t in r && this[t] === r[t])
                        }), r = null, g.call(this, t)
                    }), y = function (t, e) {
                        var n, o, c, i = 0;
                        (n = function () {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, o = new n;
                        for (c in o) g.call(o, c) && i++;
                        return n = o = null, i ? y = 2 == i ? function (t, e) {
                            var r, n = {},
                                o = "[object Function]" == d.call(t);
                            for (r in t) o && "prototype" == r || g.call(n, r) || !(n[r] = 1) || !g.call(t, r) || e(r)
                        } : function (t, e) {
                            var r, n, o = "[object Function]" == d.call(t);
                            for (r in t) o && "prototype" == r || !g.call(t, r) || (n = "constructor" === r) || e(r);
                            (n || g.call(t, r = "constructor")) && e(r)
                        } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function (t, e) {
                            var n, c, i = "[object Function]" == d.call(t),
                                a = !i && "function" != typeof t.constructor && r[typeof t.hasOwnProperty] && t.hasOwnProperty || g;
                            for (n in t) i && "prototype" == n || !a.call(t, n) || e(n);
                            for (c = o.length; n = o[--c]; a.call(t, n) && e(n));
                        }), y(t, e)
                    }, !c("json-stringify")) {
                    var w = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        T = function (t, e) {
                            return ("000000" + (e || 0)).slice(-t)
                        },
                        _ = function (t) {
                            for (var e = '"', r = 0, n = t.length, o = !C || n > 10, c = o && (C ? t.split("") : t); r < n; r++) {
                                var i = t.charCodeAt(r);
                                switch (i) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        e += w[i];
                                        break;
                                    default:
                                        if (i < 32) {
                                            e += "\\u00" + T(2, i.toString(16));
                                            break
                                        }
                                        e += o ? c[r] : t.charAt(r)
                                }
                            }
                            return e + '"'
                        },
                        N = function (t, e, r, n, o, c, i) {
                            var a, l, f, u, h, p, j, v, C, O, w, U, J, m, x, M;
                            try {
                                a = e[t]
                            } catch (P) {}
                            if ("object" == typeof a && a)
                                if ("[object Date]" != (l = d.call(a)) || g.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || g.call(a, "toJSON")) && (a = a.toJSON(t));
                                else if (a > -1 / 0 && a < 1 / 0) {
                                if (A) {
                                    for (h = S(a / 864e5), f = S(h / 365.2425) + 1970 - 1; A(f + 1, 0) <= h; f++);
                                    for (u = S((h - A(f, 0)) / 30.42); A(f, u + 1) <= h; u++);
                                    h = 1 + h - A(f, u), p = (a % 864e5 + 864e5) % 864e5, j = S(p / 36e5) % 24, v = S(p / 6e4) % 60, C = S(p / 1e3) % 60, O = p % 1e3
                                } else f = a.getUTCFullYear(), u = a.getUTCMonth(), h = a.getUTCDate(), j = a.getUTCHours(), v = a.getUTCMinutes(), C = a.getUTCSeconds(), O = a.getUTCMilliseconds();
                                a = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + T(6, f < 0 ? -f : f) : T(4, f)) + "-" + T(2, u + 1) + "-" + T(2, h) + "T" + T(2, j) + ":" + T(2, v) + ":" + T(2, C) + "." + T(3, O) + "Z"
                            } else a = null;
                            if (r && (a = r.call(e, t, a)), null === a) return "null";
                            if ("[object Boolean]" == (l = d.call(a))) return "" + a;
                            if ("[object Number]" == l) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                            if ("[object String]" == l) return _("" + a);
                            if ("object" == typeof a) {
                                for (m = i.length; m--;)
                                    if (i[m] === a) throw s();
                                if (i.push(a), w = [], x = c, c += o, "[object Array]" == l) {
                                    for (J = 0, m = a.length; J < m; J++) U = N(J, a, r, n, o, c, i), w.push(U === b ? "null" : U);
                                    M = w.length ? o ? "[\n" + c + w.join(",\n" + c) + "\n" + x + "]" : "[" + w.join(",") + "]" : "[]"
                                } else y(n || a, function (t) {
                                    var e = N(t, a, r, n, o, c, i);
                                    e !== b && w.push(_(t) + ":" + (o ? " " : "") + e)
                                }), M = w.length ? o ? "{\n" + c + w.join(",\n" + c) + "\n" + x + "}" : "{" + w.join(",") + "}" : "{}";
                                return i.pop(), M
                            }
                        };
                    n.stringify = function (t, e, n) {
                        var o, c, i, a;
                        if (r[typeof e] && e)
                            if ("[object Function]" == (a = d.call(e))) c = e;
                            else if ("[object Array]" == a) {
                            i = {};
                            for (var l, f = 0, u = e.length; f < u; l = e[f++], ("[object String]" == (a = d.call(l)) || "[object Number]" == a) && (i[l] = 1));
                        }
                        if (n)
                            if ("[object Number]" == (a = d.call(n))) {
                                if ((n -= n % 1) > 0)
                                    for (o = "", n > 10 && (n = 10); o.length < n; o += " ");
                            } else "[object String]" == a && (o = n.length <= 10 ? n : n.slice(0, 10));
                        return N("", (l = {}, l[""] = t, l), c, i, o, "", [])
                    }
                }
                if (!c("json-parse")) {
                    var U, J, m = a.fromCharCode,
                        x = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        M = function () {
                            throw U = J = null, u()
                        },
                        F = function () {
                            for (var t, e, r, n, o, c = J, i = c.length; U < i;) switch (o = c.charCodeAt(U)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    U++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return t = C ? c.charAt(U) : c[U], U++, t;
                                case 34:
                                    for (t = "@", U++; U < i;)
                                        if ((o = c.charCodeAt(U)) < 32) M();
                                        else if (92 == o) switch (o = c.charCodeAt(++U)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            t += x[o], U++;
                                            break;
                                        case 117:
                                            for (e = ++U, r = U + 4; U < r; U++)(o = c.charCodeAt(U)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || M();
                                            t += m("0x" + c.slice(e, U));
                                            break;
                                        default:
                                            M()
                                    } else {
                                        if (34 == o) break;
                                        for (o = c.charCodeAt(U), e = U; o >= 32 && 92 != o && 34 != o;) o = c.charCodeAt(++U);
                                        t += c.slice(e, U)
                                    }
                                    if (34 == c.charCodeAt(U)) return U++, t;
                                    M();
                                default:
                                    if (e = U, 45 == o && (n = !0, o = c.charCodeAt(++U)), o >= 48 && o <= 57) {
                                        for (48 == o && (o = c.charCodeAt(U + 1)) >= 48 && o <= 57 && M(), n = !1; U < i && (o = c.charCodeAt(U)) >= 48 && o <= 57; U++);
                                        if (46 == c.charCodeAt(U)) {
                                            for (r = ++U; r < i && (o = c.charCodeAt(r)) >= 48 && o <= 57; r++);
                                            r == U && M(), U = r
                                        }
                                        if (101 == (o = c.charCodeAt(U)) || 69 == o) {
                                            for (o = c.charCodeAt(++U), 43 != o && 45 != o || U++, r = U; r < i && (o = c.charCodeAt(r)) >= 48 && o <= 57; r++);
                                            r == U && M(), U = r
                                        }
                                        return +c.slice(e, U)
                                    }
                                    if (n && M(), "true" == c.slice(U, U + 4)) return U += 4, !0;
                                    if ("false" == c.slice(U, U + 5)) return U += 5, !1;
                                    if ("null" == c.slice(U, U + 4)) return U += 4, null;
                                    M()
                            }
                            return "$"
                        },
                        k = function (t) {
                            var e, r;
                            if ("$" == t && M(), "string" == typeof t) {
                                if ("@" == (C ? t.charAt(0) : t[0])) return t.slice(1);
                                if ("[" == t) {
                                    for (e = [];
                                        "]" != (t = F()); r || (r = !0)) r && ("," == t ? "]" == (t = F()) && M() : M()), "," == t && M(), e.push(k(t));
                                    return e
                                }
                                if ("{" == t) {
                                    for (e = {};
                                        "}" != (t = F()); r || (r = !0)) r && ("," == t ? "}" == (t = F()) && M() : M()), "," != t && "string" == typeof t && "@" == (C ? t.charAt(0) : t[0]) && ":" == F() || M(), e[t.slice(1)] = k(F());
                                    return e
                                }
                                M()
                            }
                            return t
                        },
                        D = function (t, e, r) {
                            var n = E(t, e, r);
                            n === b ? delete t[e] : t[e] = n
                        },
                        E = function (t, e, r) {
                            var n, o = t[e];
                            if ("object" == typeof o && o)
                                if ("[object Array]" == d.call(o))
                                    for (n = o.length; n--;) D(o, n, r);
                                else y(o, function (t) {
                                    D(o, t, r)
                                });
                            return r.call(t, e, o)
                        };
                    n.parse = function (t, e) {
                        var r, n;
                        return U = 0, J = "" + t, r = k(F()), "$" != F() && M(), U = J = null, e && "[object Function]" == d.call(e) ? E((n = {}, n[""] = r, n), "", e) : r
                    }
                }
            }
            return n.runInContext = t, n
        }
        var e = "function" == typeof define && define.amd,
            r = {
                "function": !0,
                object: !0
            },
            n = r[typeof exports] && exports && !exports.nodeType && exports,
            o = r[typeof window] && window || this,
            c = n && r[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!c || c.global !== c && c.window !== c && c.self !== c || (o = c), n && !e) t(o, n);
        else {
            var i = o.JSON,
                a = o.JSON3,
                l = !1,
                f = t(o, o.JSON3 = {
                    noConflict: function () {
                        return l || (l = !0, o.JSON = i, o.JSON3 = a, i = a = null), f
                    }
                });
            o.JSON = {
                parse: f.parse,
                stringify: f.stringify
            }
        }
        e && define(function () {
            return f
        })
    }).call(this);
    Object.defineProperty(Symbol, "species", {
        value: Symbol("species")
    });
    Object.getPrototypeOf = function (t) {
        if (t !== Object(t)) throw new TypeError("Object.getPrototypeOf called on non-object");
        var o = t.__proto__;
        return o || null === o ? o : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Object.prototype : null
    };
    ! function (e) {
        function t(e, t) {
            var r = e[t];
            if (null === r || r === undefined) return undefined;
            if ("function" != typeof r) throw new TypeError("Method not callable: " + t);
            return r
        }

        function r(e) {
            if (!(1 in arguments)) var r = t(e, Symbol.iterator);
            var o = r.call(e);
            if ("object" != typeof o) throw new TypeError("bad iterator");
            var n = o.next,
                a = Object.create(null);
            return a["[[Iterator]]"] = o, a["[[NextMethod]]"] = n, a["[[Done]]"] = !1, a
        }

        function o(e) {
            if (1 in arguments) var t = e["[[NextMethod]]"].call(e["[[Iterator]]"], arguments[1]);
            else var t = e["[[NextMethod]]"].call(e["[[Iterator]]"]);
            if ("object" != typeof t) throw new TypeError("bad iterator");
            return t
        }

        function n(e) {
            if ("object" != typeof e) throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
            return Boolean(e.done)
        }

        function a(e) {
            if ("object" != typeof e) throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
            return e.value
        }

        function i(e) {
            var t = o(e);
            return !0 !== n(t) && t
        }

        function l(e, r) {
            if ("object" != typeof e["[[Iterator]]"]) throw new Error(Object.prototype.toString.call(e["[[Iterator]]"]) + "is not an Object.");
            var o = e["[[Iterator]]"],
                n = t(o, "return");
            if (n === undefined) return r;
            try {
                var a = n.call(o)
            } catch (l) {
                var i = l
            }
            if (r) return r;
            if (i) throw i;
            if ("object" == typeof a) throw new TypeError("Iterator's return method returned a non-object.");
            return r
        }

        function c(e, t) {
            if ("boolean" != typeof t) throw new Error;
            var r = {};
            return r.value = e, r.done = t, r
        }

        function p(e, t) {
            if ("object" != typeof e) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
            if (!0 !== e._es6Map) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
            var r = Object.create(v);
            return Object.defineProperty(r, "[[Map]]", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: e
            }), Object.defineProperty(r, "[[MapNextIndex]]", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: 0
            }), Object.defineProperty(r, "[[MapIterationKind]]", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: t
            }), r
        }
        var u = function (e, t) {
                return typeof e == typeof t && ("number" == typeof e ? !(!isNaN(e) || !isNaN(t)) || (0 === e && -0 === t || (-0 === e && 0 === t || e === t)) : e === t)
            },
            f = function (e, t) {
                var r = arguments[2] || {},
                    o = Object.getPrototypeOf(e),
                    n = Object.create(o);
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && Object.defineProperty(n, a, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: r[a]
                });
                return n
            },
            y = Symbol("undef"),
            b = function () {
                try {
                    var e = {};
                    return Object.defineProperty(e, "t", {
                        configurable: !0,
                        enumerable: !1,
                        get: function () {
                            return !0
                        },
                        set: undefined
                    }), !!e.t
                } catch (t) {
                    return !1
                }
            }(),
            s = function (e) {
                return "function" == typeof e
            },
            d = function w() {
                if (!(this instanceof w)) throw new TypeError('Constructor Map requires "new"');
                var e = f(this, "%MapPrototype%", {
                    _keys: [],
                    _values: [],
                    _size: 0,
                    _es6Map: !0
                });
                b || Object.defineProperty(e, "size", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: 0
                });
                var t = arguments[0] || undefined;
                if (null === t || t === undefined) return e;
                var o = e.set;
                if (!s(o)) throw new TypeError("Map.prototype.set is not a function");
                try {
                    for (var n = r(t);;) {
                        var c = i(n);
                        if (!1 === c) return e;
                        var p = a(c);
                        if ("object" != typeof p) try {
                            throw new TypeError("Iterator value " + p + " is not an entry object")
                        } catch (h) {
                            return l(n, h)
                        }
                        try {
                            var u = p[0],
                                y = p[1];
                            o.call(e, u, y)
                        } catch (j) {
                            return l(n, j)
                        }
                    }
                } catch (j) {
                    if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee) {
                        var d, v = t.length;
                        for (d = 0; d < v; d++) o.call(e, t[d][0], t[d][1])
                    }
                }
                return e
            };
        Object.defineProperty(d, "prototype", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: {}
        }), b ? Object.defineProperty(d, Symbol.species, {
            configurable: !0,
            enumerable: !1,
            get: function () {
                return this
            },
            set: undefined
        }) : Object.defineProperty(d, Symbol.species, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: d
        }), Object.defineProperty(d.prototype, "clear", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function () {
                var e = this;
                if ("object" != typeof e) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                for (var t = e._keys, r = 0; r < t.length; r++) e._keys[r] = y, e._values[r] = y;
                return this._size = 0, b || (this.size = this._size), undefined
            }
        }), Object.defineProperty(d.prototype, "constructor", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: d
        }), Object.defineProperty(d.prototype, "delete", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function (e) {
                var t = this;
                if ("object" != typeof t) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._keys, o = 0; o < r.length; o++)
                    if (t._keys[o] !== y && u(t._keys[o], e)) return this._keys[o] = y, this._values[o] = y, --this._size, b || (this.size = this._size), !0;
                return !1
            }
        }), Object.defineProperty(d.prototype, "entries", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function () {
                return p(this, "key+value")
            }
        }), Object.defineProperty(d.prototype, "forEach", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function (e) {
                var t = this;
                if ("object" != typeof t) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!s(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
                if (arguments[1]) var r = arguments[1];
                for (var o = t._keys, n = 0; n < o.length; n++) t._keys[n] !== y && t._values[n] !== y && e.call(r, t._values[n], t._keys[n], t);
                return undefined
            }
        }), Object.defineProperty(d.prototype, "get", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function (e) {
                var t = this;
                if ("object" != typeof t) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._keys, o = 0; o < r.length; o++)
                    if (t._keys[o] !== y && u(t._keys[o], e)) return t._values[o];
                return undefined
            }
        }), Object.defineProperty(d.prototype, "has", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function (e) {
                var t = this;
                if ("object" != typeof t) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._keys, o = 0; o < r.length; o++)
                    if (t._keys[o] !== y && u(t._keys[o], e)) return !0;
                return !1
            }
        }), Object.defineProperty(d.prototype, "keys", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function () {
                return p(this, "key")
            }
        }), Object.defineProperty(d.prototype, "set", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function (e, t) {
                var r = this;
                if ("object" != typeof r) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(r));
                if (!0 !== r._es6Map) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(r));
                for (var o = r._keys, n = 0; n < o.length; n++)
                    if (r._keys[n] !== y && u(r._keys[n], e)) return r._values[n] = t, r; - 0 === e && (e = 0);
                var a = {};
                return a["[[Key]]"] = e, a["[[Value]]"] = t, r._keys.push(a["[[Key]]"]), r._values.push(a["[[Value]]"]), ++r._size, b || (r.size = r._size), r
            }
        }), b && Object.defineProperty(d.prototype, "size", {
            configurable: !0,
            enumerable: !1,
            get: function () {
                var e = this;
                if ("object" != typeof e) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                for (var t = e._keys, r = 0, o = 0; o < t.length; o++) e._keys[o] !== y && (r += 1);
                return r
            },
            set: undefined
        }), Object.defineProperty(d.prototype, "values", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function () {
                return p(this, "value")
            }
        }), Object.defineProperty(d.prototype, Symbol.iterator, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: d.prototype.entries
        }), "name" in d || Object.defineProperty(d, "name", {
            configurable: !0,
            enumerable: !1,
            writable: !1,
            value: "Map"
        });
        var v = {
            isMapIterator: !0,
            next: function () {
                var e = this;
                if ("object" != typeof e) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!e.isMapIterator) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                var t = e["[[Map]]"],
                    r = e["[[MapNextIndex]]"],
                    o = e["[[MapIterationKind]]"];
                if (t === undefined) return c(undefined, !0);
                if (!t._es6Map) throw new Error;
                for (var n = t._keys, a = n.length; r < a;) {
                    var i = Object.create(null);
                    if (i["[[Key]]"] = t._keys[r], i["[[Value]]"] = t._values[r], r += 1, e["[[MapNextIndex]]"] = r, i["[[Key]]"] !== y) {
                        if ("key" === o) var l = i["[[Key]]"];
                        else if ("value" === o) var l = i["[[Value]]"];
                        else {
                            if ("key+value" !== o) throw new Error;
                            var l = [i["[[Key]]"], i["[[Value]]"]]
                        }
                        return c(l, !1)
                    }
                }
                return e["[[Map]]"] = undefined, c(undefined, !0)
            }
        };
        Object.defineProperty(v, Symbol.iterator, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function () {
                return this
            }
        });
        try {
            Object.defineProperty(e, "Map", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: d
            })
        } catch (h) {
            e.Map = d
        }
    }(this);
    ! function () {
        function t(t) {
            if (!(0 in arguments)) throw new TypeError("1 argument is required");
            do {
                if (this === t) return !0
            } while (t = t && t.parentNode);
            return !1
        }
        if ("HTMLElement" in this && "contains" in HTMLElement.prototype) try {
            delete HTMLElement.prototype.contains
        } catch (e) {}
        "Node" in this ? Node.prototype.contains = t : document.contains = Element.prototype.contains = t
    }();
    ! function (t) {
        function e(t) {
            return Number.isNaN(t) ? r : t
        }

        function i(t) {
            return t === r ? NaN : t
        }

        function n(t, e) {
            var i = 0;
            return {
                next: function () {
                    for (; t._values[i] === o;) i++;
                    return i === t._values.length ? {
                        value: void 0,
                        done: !0
                    } : {
                        value: e.call(t, i++),
                        done: !1
                    }
                }
            }
        }
        var o = Symbol("undef"),
            r = Symbol("NaN"),
            s = function () {
                var t = arguments[0];
                this._values = [], this.size = this._size = 0, t && "function" == typeof t.forEach && t.forEach(function (t) {
                    this.add.call(this, t)
                }, this)
            };
        try {
            Object.defineProperty(s.prototype, "size", {
                get: function () {
                    return this._size
                }
            })
        } catch (u) {}
        s.prototype.add = function (t) {
            return t = e(t), -1 === this._values.indexOf(t) && (this._values.push(t), this.size = ++this._size), this
        }, s.prototype.has = function (t) {
            return -1 !== this._values.indexOf(e(t))
        }, s.prototype["delete"] = function (t) {
            var i = this._values.indexOf(e(t));
            return -1 !== i && (this._values[i] = o, this.size = --this._size, !0)
        }, s.prototype.clear = function () {
            this._values = [], this.size = this._size = 0
        }, s.prototype[Symbol.iterator] = s.prototype.values = s.prototype.keys = function () {
            var t = n(this, function (t) {
                return i(this._values[t])
            });
            return t[Symbol.iterator] = this.keys.bind(this), t
        }, s.prototype.entries = function () {
            var t = n(this, function (t) {
                return [i(this._values[t]), i(this._values[t])]
            });
            return t[Symbol.iterator] = this.entries.bind(this), t
        }, s.prototype.forEach = function (e, i) {
            i = i || t;
            for (var n = this.entries(), o = n.next(); !1 === o.done;) e.call(i, o.value[1], o.value[0], this), o = n.next()
        }, s.prototype.constructor = s.prototype[Symbol.species] = s, s.prototype.constructor = s, s.name = "Set", t.Set = s
    }(this);
    String.prototype.endsWith = function (t) {
        var n = arguments.length < 2 ? this.length : arguments[1],
            e = this.lastIndexOf(t);
        return -1 !== e && e === n - t.length
    };
    String.prototype.startsWith = function (t) {
        var i = arguments.length < 2 ? 0 : arguments[1];
        return 0 === this.slice(i).indexOf(t)
    };
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    };
    ! function (e, t) {
        e.XMLHttpRequest = function () {
            var e = this,
                n = e._request = t ? new t : new ActiveXObject("MSXML2.XMLHTTP.3.0");
            n.onreadystatechange = function () {
                e.readyState = n.readyState;
                var t = 4 === e.readyState;
                e.response = e.responseText = t ? n.responseText : null, e.status = t ? n.status : null, e.statusText = t ? n.statusText : null, e.dispatchEvent(new Event("readystatechange")), t && e.dispatchEvent(new Event("load"))
            }, "onerror" in n && (n.onerror = function () {
                e.dispatchEvent(new Event("error"))
            })
        }, e.XMLHttpRequest.UNSENT = 0, e.XMLHttpRequest.OPENED = 1, e.XMLHttpRequest.HEADERS_RECEIVED = 2, e.XMLHttpRequest.LOADING = 3, e.XMLHttpRequest.DONE = 4;
        var n = e.XMLHttpRequest.prototype;
        n.addEventListener = e.addEventListener, n.removeEventListener = e.removeEventListener, n.dispatchEvent = e.dispatchEvent, n.abort = function () {
            return this._request()
        }, n.getAllResponseHeaders = function () {
            return this._request.getAllResponseHeaders()
        }, n.getResponseHeader = function (e) {
            return this._request.getResponseHeader(e)
        }, n.open = function (e, t) {
            this._request.open(e, t, arguments[2], arguments[3], arguments[4])
        }, n.overrideMimeType = function (e) {
            this._request.overrideMimeType(e)
        }, n.send = function () {
            this._request.send(0 in arguments ? arguments[0] : null)
        }, n.setRequestHeader = function (e, t) {
            this._request.setRequestHeader(e, t)
        }
    }(this, this.XMLHttpRequest);
    ! function () {
        function e(e) {
            this.message = e
        }
        var t = "undefined" != typeof exports ? exports : "undefined" != typeof self ? self : $.global,
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        e.prototype = new Error, e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function (t) {
            for (var o, n, a = String(t), i = 0, f = r, c = ""; a.charAt(0 | i) || (f = "=", i % 1); c += f.charAt(63 & o >> 8 - i % 1 * 8)) {
                if ((n = a.charCodeAt(i += .75)) > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                o = o << 8 | n
            }
            return c
        }), t.atob || (t.atob = function (t) {
            var o = String(t).replace(/[=]+$/, "");
            if (o.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var n, a, i = 0, f = 0, c = ""; a = o.charAt(f++); ~a && (n = i % 4 ? 64 * n + a : a, i++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) a = r.indexOf(a);
            return c
        })
    }();
    try {
        Object.defineProperty(window.location, "origin", {
            enumerable: !0,
            writable: !1,
            value: window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
            configurable: !1
        })
    } catch (e) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
    }! function (n) {
        var e = Date.now();
        n.performance || (n.performance = {}), n.performance.now = function () {
            return Date.now() - e
        }
    }(this);
    ! function (n) {
        var e;
        if ("mozRequestAnimationFrame" in n ? e = "moz" : "webkitRequestAnimationFrame" in n && (e = "webkit"), e) n.requestAnimationFrame = function (t) {
            return n[e + "RequestAnimationFrame"](function () {
                t(performance.now())
            })
        }, n.cancelAnimationFrame = n[e + "CancelAnimationFrame"];
        else {
            var t = Date.now();
            n.requestAnimationFrame = function (n) {
                if ("function" != typeof n) throw new TypeError(n + " is not a function");
                var e = Date.now(),
                    i = 16 + t - e;
                return i < 0 && (i = 0), t = e, setTimeout(function () {
                    t = Date.now(), n(performance.now())
                }, i)
            }, n.cancelAnimationFrame = function (n) {
                clearTimeout(n)
            }
        }
    }(this);
    ! function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = y.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, m(t)
        }

        function o(e) {
            var t = v[e[p]];
            return t || (t = {}, g++, e[p] = g, v[g] = t), t
        }

        function c(e, n, r) {
            if (n || (n = t), s) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || f.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function i(e, n) {
            if (e || (e = t), s) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), c = 0, i = r(), l = i.length; l > c; c++) a.createElement(i[c]);
            return a
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return y.shivMethods ? c(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }

        function m(e) {
            e || (e = t);
            var r = o(e);
            return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), s || l(e, r), e
        }
        var u, s, d = e.html5 || {},
            f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            p = "_html5shiv",
            g = 0,
            v = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, s = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, s = !0
            }
        }();
        var y = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3-pre",
            shivCSS: !1 !== d.shivCSS,
            supportsUnknownElements: s,
            shivMethods: !1 !== d.shivMethods,
            type: "default",
            shivDocument: m,
            createElement: c,
            createDocumentFragment: i,
            addElements: a
        };
        e.html5 = y, m(t), "object" == typeof module && module.exports && (module.exports = y)
    }("undefined" != typeof window ? window : this, document);
}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});