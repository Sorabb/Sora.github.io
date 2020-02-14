function onloadFunction() {
    $("loading > img").attr("src", "/images/waveWithSeal.gif"),
        $(".mainPage").queue(function (t) {
        $("loading").css("display", "none"), $(this).css("display", "flex"), controlVideo(), Modernizr.mq("(min-width: 769px)") ? startAnimate() : $(".left > .phone > img").attr("src", "images/phone/phone-transp.png")
    })
}

function controlVideo() {
    var t = $("#video-init");
    t.prop("muted", !0), setTimeout(function () {
        t[0].play()
    }, 1e3)
}

function startAnimate() {
    $(".left > .phone").animate({right: "0", opacity: 1}, 1300), $(".banner").animate({
        "margin-left": "0px",
        opacity: 1
    }, 1300), $(".banner").delay(200).show(700), $(".banner").addClass("trst-banner-goleft"), $(".menu").delay(800).animate({"margin-top": "0px"}, 1300), $(".menu-footer").delay(800).animate({bottom: "-3em"}, 1300), $(".left > .phone > video").delay(2e3).animate({opacity: 1}, 1e3), $("#video-audio-off").delay(2500).queue(function () {
        $(".left > .phone > img").attr("src", "images/phone/phone-transp.png"), $(this).animate({opacity: 1}, 1300).dequeue()
    }), $(".menu-footer").delay(2500).animate({bottom: "0px"}, 900), $(".menu-footer").delay(2600).animate({bottom: "-3em"}, 900)
}

function createNewWave() {
    var t = new Date, e = t.getTime(), n = getRandomInt(20, 85);
    jQuery.inArray(n, tops) && (n = getRandomInt(20, 85), jQuery.inArray(n, tops) && (n = getRandomInt(20, 85))), tops.push(n), tops.length > 40 && (tops = new Array);
    var r = 35 * getRandomInt(3, 9);
    0 == sidenum ? sidenum = 1 : sidenum = 0, sidenum ? (classname = "waveline-right", sidename = "right") : (classname = "waveline-left", sidename = "left");
    var i = {time: e, side: sidename};
    return itemstoped.push(i), $("<div/>", {
        class: classname,
        id: e,
        css: {top: n + "%", width: r + "px"}
    }).appendTo(".mainPage"), $("#" + e).css(sidename, "-" + r + "px"), $("#" + e).addClass("transition-appear"), e
}

function getRandomInt(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t
}

!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function n(t, e) {
        e = e || nt;
        var n = e.createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(t) {
        var e = !!t && "length" in t && t.length, n = vt.type(t);
        return "function" !== n && !vt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function o(t, e, n) {
        return vt.isFunction(e) ? vt.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
        }) : e.nodeType ? vt.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? vt.grep(t, function (t) {
            return at.call(e, t) > -1 !== n
        }) : xt.test(e) ? vt.filter(e, t, n) : (e = vt.filter(e, t), vt.grep(t, function (t) {
            return at.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }

    function s(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function a(t) {
        var e = {};
        return vt.each(t.match(Ot) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function l(t) {
        return t
    }

    function c(t) {
        throw t
    }

    function u(t, e, n, r) {
        var i;
        try {
            t && vt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && vt.isFunction(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    function h() {
        nt.removeEventListener("DOMContentLoaded", h), t.removeEventListener("load", h), vt.ready()
    }

    function p() {
        this.expando = vt.expando + p.uid++
    }

    function d(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ft.test(t) ? JSON.parse(t) : t)
    }

    function f(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(Rt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(r))) {
            try {
                n = d(n)
            } catch (t) {
            }
            Lt.set(t, e, n)
        } else n = void 0;
        return n
    }

    function v(t, e, n, r) {
        var i, o = 1, s = 20, a = r ? function () {
                return r.cur()
            } : function () {
                return vt.css(t, e, "")
            }, l = a(), c = n && n[3] || (vt.cssNumber[e] ? "" : "px"),
            u = (vt.cssNumber[e] || "px" !== c && +l) && Ht.exec(vt.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                o = o || ".5", u /= o, vt.style(t, e, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
    }

    function y(t) {
        var e, n = t.ownerDocument, r = t.nodeName, i = Wt[r];
        return i || (e = n.body.appendChild(n.createElement(r)), i = vt.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), Wt[r] = i, i)
    }

    function g(t, e) {
        for (var n, r, i = [], o = 0, s = t.length; o < s; o++) r = t[o], r.style && (n = r.style.display, e ? ("none" === n && (i[o] = It.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && qt(r) && (i[o] = y(r))) : "none" !== n && (i[o] = "none", It.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (t[o].style.display = i[o]);
        return t
    }

    function m(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && i(t, e) ? vt.merge([t], n) : n
    }

    function b(t, e) {
        for (var n = 0, r = t.length; n < r; n++) It.set(t[n], "globalEval", !e || It.get(e[n], "globalEval"))
    }

    function _(t, e, n, r, i) {
        for (var o, s, a, l, c, u, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++) if ((o = t[d]) || 0 === o) if ("object" === vt.type(o)) vt.merge(p, o.nodeType ? [o] : o); else if (Yt.test(o)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (zt.exec(o) || ["", ""])[1].toLowerCase(), l = Gt[a] || Gt._default, s.innerHTML = l[1] + vt.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            vt.merge(p, s.childNodes), s = h.firstChild, s.textContent = ""
        } else p.push(e.createTextNode(o));
        for (h.textContent = "", d = 0; o = p[d++];) if (r && vt.inArray(o, r) > -1) i && i.push(o); else if (c = vt.contains(o.ownerDocument, o), s = m(h.appendChild(o), "script"), c && b(s), n) for (u = 0; o = s[u++];) Xt.test(o.type || "") && n.push(o);
        return h
    }

    function T() {
        return !0
    }

    function w() {
        return !1
    }

    function C() {
        try {
            return nt.activeElement
        } catch (t) {
        }
    }

    function k(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in e) k(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = w; else if (!i) return t;
        return 1 === o && (s = i, i = function (t) {
            return vt().off(t), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = vt.guid++)), t.each(function () {
            vt.event.add(this, e, i, r, n)
        })
    }

    function x(t, e) {
        return i(t, "table") && i(11 !== e.nodeType ? e : e.firstChild, "tr") ? vt(">tbody", t)[0] || t : t
    }

    function E(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function S(t) {
        var e = re.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function j(t, e) {
        var n, r, i, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (It.hasData(t) && (o = It.access(t), s = It.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (i in c) for (n = 0, r = c[i].length; n < r; n++) vt.event.add(e, i, c[i][n])
            }
            Lt.hasData(t) && (a = Lt.access(t), l = vt.extend({}, a), Lt.set(e, l))
        }
    }

    function A(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Ut.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function O(t, e, r, i) {
        e = ot.apply([], e);
        var o, s, a, l, c, u, h = 0, p = t.length, d = p - 1, f = e[0], v = vt.isFunction(f);
        if (v || p > 1 && "string" == typeof f && !dt.checkClone && ne.test(f)) return t.each(function (n) {
            var o = t.eq(n);
            v && (e[0] = f.call(this, n, o.html())), O(o, e, r, i)
        });
        if (p && (o = _(e, t[0].ownerDocument, !1, t, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (a = vt.map(m(o, "script"), E), l = a.length; h < p; h++) c = o, h !== d && (c = vt.clone(c, !0, !0), l && vt.merge(a, m(c, "script"))), r.call(t[h], c, h);
            if (l) for (u = a[a.length - 1].ownerDocument, vt.map(a, S), h = 0; h < l; h++) c = a[h], Xt.test(c.type || "") && !It.access(c, "globalEval") && vt.contains(u, c) && (c.src ? vt._evalUrl && vt._evalUrl(c.src) : n(c.textContent.replace(ie, ""), u))
        }
        return t
    }

    function D(t, e, n) {
        for (var r, i = e ? vt.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || vt.cleanData(m(r)), r.parentNode && (n && vt.contains(r.ownerDocument, r) && b(m(r, "script")), r.parentNode.removeChild(r));
        return t
    }

    function N(t, e, n) {
        var r, i, o, s, a = t.style;
        return n = n || ae(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || vt.contains(t.ownerDocument, t) || (s = vt.style(t, e)), !dt.pixelMarginRight() && se.test(s) && oe.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function P(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function M(t) {
        if (t in de) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = pe.length; n--;) if ((t = pe[n] + e) in de) return t
    }

    function I(t) {
        var e = vt.cssProps[t];
        return e || (e = vt.cssProps[t] = M(t) || t), e
    }

    function L(t, e, n) {
        var r = Ht.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function F(t, e, n, r, i) {
        var o, s = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === n && (s += vt.css(t, n + $t[o], !0, i)), r ? ("content" === n && (s -= vt.css(t, "padding" + $t[o], !0, i)), "margin" !== n && (s -= vt.css(t, "border" + $t[o] + "Width", !0, i))) : (s += vt.css(t, "padding" + $t[o], !0, i), "padding" !== n && (s += vt.css(t, "border" + $t[o] + "Width", !0, i)));
        return s
    }

    function R(t, e, n) {
        var r, i = ae(t), o = N(t, e, i), s = "border-box" === vt.css(t, "boxSizing", !1, i);
        return se.test(o) ? o : (r = s && (dt.boxSizingReliable() || o === t.style[e]), (o = parseFloat(o) || 0) + F(t, e, n || (s ? "border" : "content"), r, i) + "px")
    }

    function B(t, e, n, r, i) {
        return new B.prototype.init(t, e, n, r, i)
    }

    function H() {
        ve && (!1 === nt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(H) : t.setTimeout(H, vt.fx.interval), vt.fx.tick())
    }

    function $() {
        return t.setTimeout(function () {
            fe = void 0
        }), fe = vt.now()
    }

    function q(t, e) {
        var n, r = 0, i = {height: t};
        for (e = e ? 1 : 0; r < 4; r += 2 - e) n = $t[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function V(t, e, n) {
        for (var r, i = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, e, t)) return r
    }

    function W(t, e, n) {
        var r, i, o, s, a, l, c, u, h = "width" in e || "height" in e, p = this, d = {}, f = t.style,
            v = t.nodeType && qt(t), y = It.get(t, "fxshow");
        n.queue || (s = vt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, p.always(function () {
            p.always(function () {
                s.unqueued--, vt.queue(t, "fx").length || s.empty.fire()
            })
        }));
        for (r in e) if (i = e[r], ye.test(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                v = !0
            }
            d[r] = y && y[r] || vt.style(t, r)
        }
        if ((l = !vt.isEmptyObject(e)) || !vt.isEmptyObject(d)) {
            h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = y && y.display, null == c && (c = It.get(t, "display")), u = vt.css(t, "display"), "none" === u && (c ? u = c : (g([t], !0), c = t.style.display || c, u = vt.css(t, "display"), g([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === vt.css(t, "float") && (l || (p.done(function () {
                f.display = c
            }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), l = !1;
            for (r in d) l || (y ? "hidden" in y && (v = y.hidden) : y = It.access(t, "fxshow", {display: c}), o && (y.hidden = !v), v && g([t], !0), p.done(function () {
                v || g([t]), It.remove(t, "fxshow");
                for (r in d) vt.style(t, r, d[r])
            })), l = V(v ? y[r] : 0, r, p), r in y || (y[r] = l.start, v && (l.end = l.start, l.start = 0))
        }
    }

    function U(t, e) {
        var n, r, i, o, s;
        for (n in t) if (r = vt.camelCase(n), i = e[r], o = t[n], Array.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (s = vt.cssHooks[r]) && "expand" in s) {
            o = s.expand(o), delete t[r];
            for (n in o) n in t || (t[n] = o[n], e[n] = i)
        } else e[r] = i
    }

    function z(t, e, n) {
        var r, i, o = 0, s = z.prefilters.length, a = vt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i) return !1;
            for (var e = fe || $(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, o = 1 - r, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(o);
            return a.notifyWith(t, [c, o, n]), o < 1 && l ? n : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: vt.extend({}, e),
            opts: vt.extend(!0, {specialEasing: {}, easing: vt.easing._default}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: fe || $(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var r = vt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(r), r
            },
            stop: function (e) {
                var n = 0, r = e ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), u = c.props;
        for (U(u, c.opts.specialEasing); o < s; o++) if (r = z.prefilters[o].call(c, t, u, c.opts)) return vt.isFunction(r.stop) && (vt._queueHooks(c.elem, c.opts.queue).stop = vt.proxy(r.stop, r)), r;
        return vt.map(u, V, c), vt.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), vt.fx.timer(vt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function X(t) {
        return (t.match(Ot) || []).join(" ")
    }

    function G(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Y(t, e, n, r) {
        var i;
        if (Array.isArray(e)) vt.each(e, function (e, i) {
            n || Se.test(t) ? r(t, i) : Y(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
        }); else if (n || "object" !== vt.type(e)) r(t, e); else for (i in e) Y(t + "[" + i + "]", e[i], n, r)
    }

    function K(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0, o = e.toLowerCase().match(Ot) || [];
            if (vt.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function J(t, e, n, r) {
        function i(a) {
            var l;
            return o[a] = !0, vt.each(t[a] || [], function (t, a) {
                var c = a(e, n, r);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
            }), l
        }

        var o = {}, s = t === Be;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function Q(t, e) {
        var n, r, i = vt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && vt.extend(!0, t, r), t
    }

    function Z(t, e, n) {
        for (var r, i, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            l.unshift(i);
            break
        }
        if (l[0] in n) o = l[0]; else {
            for (i in n) {
                if (!l[0] || t.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function tt(t, e, n, r) {
        var i, o, s, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = u.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(s = c[l + " " + o] || c["* " + o])) for (i in c) if (a = i.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], u.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && t.throws) e = s(e); else try {
                e = s(e)
            } catch (t) {
                return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    var et = [], nt = t.document, rt = Object.getPrototypeOf, it = et.slice, ot = et.concat, st = et.push,
        at = et.indexOf, lt = {}, ct = lt.toString, ut = lt.hasOwnProperty, ht = ut.toString, pt = ht.call(Object),
        dt = {}, ft = "3.2.0", vt = function (t, e) {
            return new vt.fn.init(t, e)
        }, yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, gt = /^-ms-/, mt = /-([a-z])/g, bt = function (t, e) {
            return e.toUpperCase()
        };
    vt.fn = vt.prototype = {
        jquery: ft, constructor: vt, length: 0, toArray: function () {
            return it.call(this)
        }, get: function (t) {
            return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = vt.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return vt.each(this, t)
        }, map: function (t) {
            return this.pushStack(vt.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(it.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: st, sort: et.sort, splice: et.splice
    }, vt.extend = vt.fn.extend = function () {
        var t, e, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || vt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], r = t[e], s !== r && (c && r && (vt.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && vt.isPlainObject(n) ? n : {}, s[e] = vt.extend(c, o, r)) : void 0 !== r && (s[e] = r));
        return s
    }, vt.extend({
        expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === vt.type(t)
        }, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = vt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== ct.call(t) || (e = rt(t)) && ("function" != typeof (n = ut.call(e, "constructor") && e.constructor) || ht.call(n) !== pt))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            n(t)
        }, camelCase: function (t) {
            return t.replace(gt, "ms-").replace(mt, bt)
        }, each: function (t, e) {
            var n, i = 0;
            if (r(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(yt, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (r(Object(t)) ? vt.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
        }, inArray: function (t, e, n) {
            return null == e ? -1 : at.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
            return t.length = i, t
        }, grep: function (t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++) !e(t[i], i) !== s && r.push(t[i]);
            return r
        }, map: function (t, e, n) {
            var i, o, s = 0, a = [];
            if (r(t)) for (i = t.length; s < i; s++) null != (o = e(t[s], s, n)) && a.push(o); else for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
            return ot.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var n, r, i;
            if ("string" == typeof e && (n = t[e], e = t, t = n), vt.isFunction(t)) return r = it.call(arguments, 2), i = function () {
                return t.apply(e || this, r.concat(it.call(arguments)))
            }, i.guid = t.guid = t.guid || vt.guid++, i
        }, now: Date.now, support: dt
    }), "function" == typeof Symbol && (vt.fn[Symbol.iterator] = et[Symbol.iterator]), vt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var _t = function (t) {
        function e(t, e, n, r) {
            var i, o, s, a, l, u, p, d = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!r && ((e ? e.ownerDocument || e : B) !== D && O(e), e = e || D, P)) {
                if (11 !== f && (l = vt.exec(t))) if (i = l[1]) {
                    if (9 === f) {
                        if (!(s = e.getElementById(i))) return n;
                        if (s.id === i) return n.push(s), n
                    } else if (d && (s = d.getElementById(i)) && F(e, s) && s.id === i) return n.push(s), n
                } else {
                    if (l[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(i)), n
                }
                if (_.qsa && !W[t + " "] && (!M || !M.test(t))) {
                    if (1 !== f) d = e, p = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, _t) : e.setAttribute("id", a = R), u = k(t), o = u.length; o--;) u[o] = "#" + a + " " + h(u[o]);
                        p = u.join(","), d = yt.test(t) && c(e.parentNode) || e
                    }
                    if (p) try {
                        return K.apply(n, d.querySelectorAll(p)), n
                    } catch (t) {
                    } finally {
                        a === R && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ot, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = r
            }

            var e = [];
            return t
        }

        function r(t) {
            return t[R] = !0, t
        }

        function i(t) {
            var e = D.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = e
        }

        function s(t, e) {
            var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && wt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function l(t) {
            return r(function (e) {
                return e = +e, r(function (n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function u() {
        }

        function h(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r
        }

        function p(t, e, n) {
            var r = e.dir, i = e.next, o = i || r, s = n && "parentNode" === o, a = $++;
            return e.first ? function (e, n, i) {
                for (; e = e[r];) if (1 === e.nodeType || s) return t(e, n, i);
                return !1
            } : function (e, n, l) {
                var c, u, h, p = [H, a];
                if (l) {
                    for (; e = e[r];) if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                } else for (; e = e[r];) if (1 === e.nodeType || s) if (h = e[R] || (e[R] = {}), u = h[e.uniqueID] || (h[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e; else {
                    if ((c = u[o]) && c[0] === H && c[1] === a) return p[2] = c[2];
                    if (u[o] = p, p[2] = t(e, n, l)) return !0
                }
                return !1
            }
        }

        function d(t) {
            return t.length > 1 ? function (e, n, r) {
                for (var i = t.length; i--;) if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function f(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
            return r
        }

        function v(t, e, n, r, i) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (n && !n(o, r, i) || (s.push(o), c && e.push(a)));
            return s
        }

        function y(t, e, n, i, o, s) {
            return i && !i[R] && (i = y(i)), o && !o[R] && (o = y(o, s)), r(function (r, s, a, l) {
                var c, u, h, p = [], d = [], y = s.length, g = r || f(e || "*", a.nodeType ? [a] : a, []),
                    m = !t || !r && e ? g : v(g, p, t, a, l), b = n ? o || (r ? t : y || i) ? [] : s : m;
                if (n && n(m, b, a, l), i) for (c = v(b, d), i(c, [], a, l), u = c.length; u--;) (h = c[u]) && (b[d[u]] = !(m[d[u]] = h));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = b.length; u--;) (h = b[u]) && c.push(m[u] = h);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;) (h = b[u]) && (c = o ? Q(r, h) : p[u]) > -1 && (r[c] = !(s[c] = h))
                    }
                } else b = v(b === s ? b.splice(y, b.length) : b), o ? o(null, s, b, l) : K.apply(s, b)
            })
        }

        function g(t) {
            for (var e, n, r, i = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                return t === e
            }, s, !0), c = p(function (t) {
                return Q(e, t) > -1
            }, s, !0), u = [function (t, n, r) {
                var i = !o && (r || n !== S) || ((e = n).nodeType ? l(t, n, r) : c(t, n, r));
                return e = null, i
            }]; a < i; a++) if (n = T.relative[t[a].type]) u = [p(d(u), n)]; else {
                if (n = T.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                    for (r = ++a; r < i && !T.relative[t[r].type]; r++) ;
                    return y(a > 1 && d(u), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(ot, "$1"), n, a < r && g(t.slice(a, r)), r < i && g(t = t.slice(r)), r < i && h(t))
                }
                u.push(n)
            }
            return d(u)
        }

        function m(t, n) {
            var i = n.length > 0, o = t.length > 0, s = function (r, s, a, l, c) {
                var u, h, p, d = 0, f = "0", y = r && [], g = [], m = S, b = r || o && T.find.TAG("*", c),
                    _ = H += null == m ? 1 : Math.random() || .1, w = b.length;
                for (c && (S = s === D || s || c); f !== w && null != (u = b[f]); f++) {
                    if (o && u) {
                        for (h = 0, s || u.ownerDocument === D || (O(u), a = !P); p = t[h++];) if (p(u, s || D, a)) {
                            l.push(u);
                            break
                        }
                        c && (H = _)
                    }
                    i && ((u = !p && u) && d--, r && y.push(u))
                }
                if (d += f, i && f !== d) {
                    for (h = 0; p = n[h++];) p(y, g, s, a);
                    if (r) {
                        if (d > 0) for (; f--;) y[f] || g[f] || (g[f] = G.call(l));
                        g = v(g)
                    }
                    K.apply(l, g), c && !r && g.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                }
                return c && (H = _, S = m), y
            };
            return i ? r(s) : s
        }

        var b, _, T, w, C, k, x, E, S, j, A, O, D, N, P, M, I, L, F, R = "sizzle" + 1 * new Date, B = t.document, H = 0,
            $ = 0, q = n(), V = n(), W = n(), U = function (t, e) {
                return t === e && (A = !0), 0
            }, z = {}.hasOwnProperty, X = [], G = X.pop, Y = X.push, K = X.push, J = X.slice, Q = function (t, e) {
                for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
            rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
            it = new RegExp(tt + "+", "g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            st = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ct = new RegExp(rt),
            ut = new RegExp("^" + et + "$"), ht = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + nt),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            }, pt = /^(?:input|select|textarea|button)$/i, dt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/,
            gt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), mt = function (t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _t = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, Tt = function () {
                O()
            }, wt = p(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            K.apply(X = J.call(B.childNodes), B.childNodes), X[B.childNodes.length].nodeType
        } catch (t) {
            K = {
                apply: X.length ? function (t, e) {
                    Y.apply(t, J.call(e))
                } : function (t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];) ;
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, C = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, O = e.setDocument = function (t) {
            var e, n, r = t ? t.ownerDocument || t : B;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, N = D.documentElement, P = !C(D), B !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), _.attributes = i(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = i(function (t) {
                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = ft.test(D.getElementsByClassName), _.getById = i(function (t) {
                return N.appendChild(t).id = R, !D.getElementsByName || !D.getElementsByName(R).length
            }), _.getById ? (T.filter.ID = function (t) {
                var e = t.replace(gt, mt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, T.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && P) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function (t) {
                var e = t.replace(gt, mt);
                return function (t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, T.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && P) {
                    var n, r, i, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                        for (i = e.getElementsByName(t), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                    }
                    return []
                }
            }), T.find.TAG = _.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = _.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && P) return e.getElementsByClassName(t)
            }, I = [], M = [], (_.qsa = ft.test(D.querySelectorAll)) && (i(function (t) {
                N.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + R + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || M.push(".#.+[+~]")
            }), i(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (_.matchesSelector = ft.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function (t) {
                _.disconnectedMatch = L.call(t, "*"), L.call(t, "[s!='']:x"), I.push("!=", rt)
            }), M = M.length && new RegExp(M.join("|")), I = I.length && new RegExp(I.join("|")), e = ft.test(N.compareDocumentPosition), F = e || ft.test(N.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === B && F(B, t) ? -1 : e === D || e.ownerDocument === B && F(B, e) ? 1 : j ? Q(j, t) - Q(j, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return A = !0, 0;
                var n, r = 0, i = t.parentNode, o = e.parentNode, a = [t], l = [e];
                if (!i || !o) return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : j ? Q(j, t) - Q(j, e) : 0;
                if (i === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[r] === l[r];) r++;
                return r ? s(a[r], l[r]) : a[r] === B ? -1 : l[r] === B ? 1 : 0
            }, D) : D
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== D && O(t), n = n.replace(lt, "='$1']"), _.matchesSelector && P && !W[n + " "] && (!I || !I.test(n)) && (!M || !M.test(n))) try {
                var r = L.call(t, n);
                if (r || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (t) {
            }
            return e(n, D, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== D && O(t), F(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== D && O(t);
            var n = T.attrHandle[e.toLowerCase()],
                r = n && z.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
            return void 0 !== r ? r : _.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.escape = function (t) {
            return (t + "").replace(bt, _t)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], r = 0, i = 0;
            if (A = !_.detectDuplicates, j = !_.sortStable && t.slice(0), t.sort(U), A) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return j = null, t
        }, w = e.getText = function (t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else for (; e = t[r++];) n += w(e);
            return n
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(gt, mt), t[3] = (t[3] || t[4] || t[5] || "").replace(gt, mt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(gt, mt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && q(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, n, r) {
                    return function (i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(it, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === r && 0 === i ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var c, u, h, p, d, f, v = o !== s ? "nextSibling" : "previousSibling", y = e.parentNode,
                            g = a && e.nodeName.toLowerCase(), m = !l && !a, b = !1;
                        if (y) {
                            if (o) {
                                for (; v;) {
                                    for (p = e; p = p[v];) if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    f = v = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? y.firstChild : y.lastChild], s && m) {
                                for (p = y, h = p[R] || (p[R] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], d = c[0] === H && c[1], b = d && c[2],
                                         p = d && y.childNodes[d]; p = ++d && p && p[v] || (b = d = 0) || f.pop();) if (1 === p.nodeType && ++b && p === e) {
                                    u[t] = [H, d, b];
                                    break
                                }
                            } else if (m && (p = e, h = p[R] || (p[R] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], d = c[0] === H && c[1], b = d), !1 === b) for (; (p = ++d && p && p[v] || (b = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (m && (h = p[R] || (p[R] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), u[t] = [H, b]), p !== e));) ;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var i, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[R] ? o(n) : o.length > 1 ? (i = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                        for (var r, i = o(t, n), s = i.length; s--;) r = Q(t, i[s]), t[r] = !(e[r] = i[s])
                    }) : function (t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [], n = [], i = x(t.replace(ot, "$1"));
                    return i[R] ? r(function (t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                    }
                }), has: r(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: r(function (t) {
                    return t = t.replace(gt, mt), function (e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    }
                }), lang: r(function (t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(gt, mt).toLowerCase(), function (e) {
                        var n;
                        do {
                            if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === N
                }, focus: function (t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: a(!1), disabled: a(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !T.pseudos.empty(t)
                }, header: function (t) {
                    return dt.test(t.nodeName)
                }, input: function (t) {
                    return pt.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (t, e) {
                    return [e - 1]
                }), eq: l(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }), even: l(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }), odd: l(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }), lt: l(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }), gt: l(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[b] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(b);
        for (b in {submit: !0, reset: !0}) T.pseudos[b] = function (t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }(b);
        return u.prototype = T.filters = T.pseudos, T.setFilters = new u, k = e.tokenize = function (t, n) {
            var r, i, o, s, a, l, c, u = V[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = T.preFilter; a;) {
                r && !(i = st.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = at.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ot, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = ht[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? e.error(t) : V(t, l).slice(0)
        }, x = e.compile = function (t, e) {
            var n, r = [], i = [], o = W[t + " "];
            if (!o) {
                for (e || (e = k(t)), n = e.length; n--;) o = g(e[n]), o[R] ? r.push(o) : i.push(o);
                o = W(t, m(i, r)), o.selector = t
            }
            return o
        }, E = e.select = function (t, e, n, r) {
            var i, o, s, a, l, u = "function" == typeof t && t, p = !r && k(t = u.selector || t);
            if (n = n || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && P && T.relative[o[1].type]) {
                    if (!(e = (T.find.ID(s.matches[0].replace(gt, mt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);) if ((l = T.find[a]) && (r = l(s.matches[0].replace(gt, mt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(i, 1), !(t = r.length && h(o))) return K.apply(n, r), n;
                    break
                }
            }
            return (u || x(t, p))(r, e, !P, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, _.sortStable = R.split("").sort(U).join("") === R, _.detectDuplicates = !!A, O(), _.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
        }), i(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && i(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), i(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(Z, function (t, e, n) {
            var r;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    vt.find = _t, vt.expr = _t.selectors, vt.expr[":"] = vt.expr.pseudos, vt.uniqueSort = vt.unique = _t.uniqueSort, vt.text = _t.getText, vt.isXMLDoc = _t.isXML, vt.contains = _t.contains, vt.escapeSelector = _t.escape;
    var Tt = function (t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (i && vt(t).is(n)) break;
                r.push(t)
            }
            return r
        }, wt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }, Ct = vt.expr.match.needsContext, kt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        xt = /^.[^:#\[\.,]*$/;
    vt.filter = function (t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? vt.find.matchesSelector(r, t) ? [r] : [] : vt.find.matches(t, vt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, vt.fn.extend({
        find: function (t) {
            var e, n, r = this.length, i = this;
            if ("string" != typeof t) return this.pushStack(vt(t).filter(function () {
                for (e = 0; e < r; e++) if (vt.contains(i[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < r; e++) vt.find(t, i[e], n);
            return r > 1 ? vt.uniqueSort(n) : n
        }, filter: function (t) {
            return this.pushStack(o(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(o(this, t || [], !0))
        }, is: function (t) {
            return !!o(this, "string" == typeof t && Ct.test(t) ? vt(t) : t || [], !1).length
        }
    });
    var Et, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (vt.fn.init = function (t, e, n) {
        var r, i;
        if (!t) return this;
        if (n = n || Et, "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof vt ? e[0] : e, vt.merge(this, vt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), kt.test(r[1]) && vt.isPlainObject(e)) for (r in e) vt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return i = nt.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : vt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(vt) : vt.makeArray(t, this)
    }).prototype = vt.fn, Et = vt(nt);
    var jt = /^(?:parents|prev(?:Until|All))/, At = {children: !0, contents: !0, next: !0, prev: !0};
    vt.fn.extend({
        has: function (t) {
            var e = vt(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (vt.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof t && vt(t);
            if (!Ct.test(t)) for (; r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && vt.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? vt.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? at.call(vt(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(vt.uniqueSort(vt.merge(this.get(), vt(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), vt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return Tt(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return Tt(t, "parentNode", n)
        }, next: function (t) {
            return s(t, "nextSibling")
        }, prev: function (t) {
            return s(t, "previousSibling")
        }, nextAll: function (t) {
            return Tt(t, "nextSibling")
        }, prevAll: function (t) {
            return Tt(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return Tt(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return Tt(t, "previousSibling", n)
        }, siblings: function (t) {
            return wt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return wt(t.firstChild)
        }, contents: function (t) {
            return i(t, "iframe") ? t.contentDocument : (i(t, "template") && (t = t.content || t), vt.merge([], t.childNodes))
        }
    }, function (t, e) {
        vt.fn[t] = function (n, r) {
            var i = vt.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = vt.filter(r, i)), this.length > 1 && (At[t] || vt.uniqueSort(i), jt.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var Ot = /[^\x20\t\r\n\f]+/g;
    vt.Callbacks = function (t) {
        t = "string" == typeof t ? a(t) : vt.extend({}, t);
        var e, n, r, i, o = [], s = [], l = -1, c = function () {
            for (i = i || t.once, r = e = !0; s.length; l = -1) for (n = s.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && t.stopOnFalse && (l = o.length, n = !1);
            t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
        }, u = {
            add: function () {
                return o && (n && !e && (l = o.length - 1, s.push(n)), function e(n) {
                    vt.each(n, function (n, r) {
                        vt.isFunction(r) ? t.unique && u.has(r) || o.push(r) : r && r.length && "string" !== vt.type(r) && e(r)
                    })
                }(arguments), n && !e && c()), this
            }, remove: function () {
                return vt.each(arguments, function (t, e) {
                    for (var n; (n = vt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                }), this
            }, has: function (t) {
                return t ? vt.inArray(t, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = s = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = s = [], n || e || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (t, n) {
                return i || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return u
    }, vt.extend({
        Deferred: function (e) {
            var n = [["notify", "progress", vt.Callbacks("memory"), vt.Callbacks("memory"), 2], ["resolve", "done", vt.Callbacks("once memory"), vt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", vt.Callbacks("once memory"), vt.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", i = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return i.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return vt.Deferred(function (e) {
                            vt.each(n, function (n, r) {
                                var i = vt.isFunction(t[r[4]]) && t[r[4]];
                                o[r[1]](function () {
                                    var t = i && i.apply(this, arguments);
                                    t && vt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[r[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, r, i) {
                        function o(e, n, r, i) {
                            return function () {
                                var a = this, u = arguments, h = function () {
                                    var t, h;
                                    if (!(e < s)) {
                                        if ((t = r.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        h = t && ("object" == typeof t || "function" == typeof t) && t.then, vt.isFunction(h) ? i ? h.call(t, o(s, n, l, i), o(s, n, c, i)) : (s++, h.call(t, o(s, n, l, i), o(s, n, c, i), o(s, n, l, n.notifyWith))) : (r !== l && (a = void 0, u = [t]), (i || n.resolveWith)(a, u))
                                    }
                                }, p = i ? h : function () {
                                    try {
                                        h()
                                    } catch (t) {
                                        vt.Deferred.exceptionHook && vt.Deferred.exceptionHook(t, p.stackTrace), e + 1 >= s && (r !== c && (a = void 0, u = [t]), n.rejectWith(a, u))
                                    }
                                };
                                e ? p() : (vt.Deferred.getStackHook && (p.stackTrace = vt.Deferred.getStackHook()), t.setTimeout(p))
                            }
                        }

                        var s = 0;
                        return vt.Deferred(function (t) {
                            n[0][3].add(o(0, t, vt.isFunction(i) ? i : l, t.notifyWith)), n[1][3].add(o(0, t, vt.isFunction(e) ? e : l)), n[2][3].add(o(0, t, vt.isFunction(r) ? r : c))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? vt.extend(t, i) : i
                    }
                }, o = {};
            return vt.each(n, function (t, e) {
                var s = e[2], a = e[5];
                i[e[1]] = s.add, a && s.add(function () {
                    r = a
                }, n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        }, when: function (t) {
            var e = arguments.length, n = e, r = Array(n), i = it.call(arguments), o = vt.Deferred(), s = function (t) {
                return function (n) {
                    r[t] = this, i[t] = arguments.length > 1 ? it.call(arguments) : n, --e || o.resolveWith(r, i)
                }
            };
            if (e <= 1 && (u(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || vt.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) u(i[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    vt.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && Dt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, vt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Nt = vt.Deferred();
    vt.fn.ready = function (t) {
        return Nt.then(t).catch(function (t) {
            vt.readyException(t)
        }), this
    }, vt.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --vt.readyWait : vt.isReady) || (vt.isReady = !0, !0 !== t && --vt.readyWait > 0 || Nt.resolveWith(nt, [vt]))
        }
    }), vt.ready.then = Nt.then, "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll ? t.setTimeout(vt.ready) : (nt.addEventListener("DOMContentLoaded", h), t.addEventListener("load", h));
    var Pt = function (t, e, n, r, i, o, s) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === vt.type(n)) {
            i = !0;
            for (a in n) Pt(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, vt.isFunction(r) || (s = !0), c && (s ? (e.call(t, r), e = null) : (c = e, e = function (t, e, n) {
            return c.call(vt(t), n)
        })), e)) for (; a < l; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : c ? e.call(t) : l ? e(t[0], n) : o
    }, Mt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    p.uid = 1, p.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Mt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e) i[vt.camelCase(e)] = n; else for (r in e) i[vt.camelCase(r)] = e[r];
            return i
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][vt.camelCase(e)]
        }, access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(vt.camelCase) : (e = vt.camelCase(e), e = e in r ? [e] : e.match(Ot) || []), n = e.length;
                    for (; n--;) delete r[e[n]]
                }
                (void 0 === e || vt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !vt.isEmptyObject(e)
        }
    };
    var It = new p, Lt = new p, Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Rt = /[A-Z]/g;
    vt.extend({
        hasData: function (t) {
            return Lt.hasData(t) || It.hasData(t)
        }, data: function (t, e, n) {
            return Lt.access(t, e, n)
        }, removeData: function (t, e) {
            Lt.remove(t, e)
        }, _data: function (t, e, n) {
            return It.access(t, e, n)
        }, _removeData: function (t, e) {
            It.remove(t, e)
        }
    }), vt.fn.extend({
        data: function (t, e) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = Lt.get(o), 1 === o.nodeType && !It.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = vt.camelCase(r.slice(5)), f(o, r, i[r])));
                    It.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function () {
                Lt.set(this, t)
            }) : Pt(this, function (e) {
                var n;
                if (o && void 0 === e) {
                    if (void 0 !== (n = Lt.get(o, t))) return n;
                    if (void 0 !== (n = f(o, t))) return n
                } else this.each(function () {
                    Lt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Lt.remove(this, t)
            })
        }
    }), vt.extend({
        queue: function (t, e, n) {
            var r;
            if (t) return e = (e || "fx") + "queue", r = It.get(t, e), n && (!r || Array.isArray(n) ? r = It.access(t, e, vt.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = vt.queue(t, e), r = n.length, i = n.shift(), o = vt._queueHooks(t, e), s = function () {
                vt.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return It.get(t, n) || It.access(t, n, {
                empty: vt.Callbacks("once memory").add(function () {
                    It.remove(t, [e + "queue", n])
                })
            })
        }
    }), vt.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? vt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = vt.queue(this, t, e);
                vt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && vt.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                vt.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, r = 1, i = vt.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (n = It.get(o[s], t + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(e)
        }
    });
    var Bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ht = new RegExp("^(?:([+-])=|)(" + Bt + ")([a-z%]*)$", "i"),
        $t = ["Top", "Right", "Bottom", "Left"], qt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && vt.contains(t.ownerDocument, t) && "none" === vt.css(t, "display")
        }, Vt = function (t, e, n, r) {
            var i, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e) t.style[o] = s[o];
            return i
        }, Wt = {};
    vt.fn.extend({
        show: function () {
            return g(this, !0)
        }, hide: function () {
            return g(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                qt(this) ? vt(this).show() : vt(this).hide()
            })
        }
    });
    var Ut = /^(?:checkbox|radio)$/i, zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Xt = /^$|\/(?:java|ecma)script/i, Gt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
    var Yt = /<|&#?\w+;/;
    !function () {
        var t = nt.createDocumentFragment(), e = t.appendChild(nt.createElement("div")), n = nt.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), dt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Kt = nt.documentElement, Jt = /^key/, Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Zt = /^([^.]*)(?:\.(.+)|)/;
    vt.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, s, a, l, c, u, h, p, d, f, v, y = It.get(t);
            if (y) for (n.handler && (o = n, n = o.handler, i = o.selector), i && vt.find.matchesSelector(Kt, i), n.guid || (n.guid = vt.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function (e) {
                return void 0 !== vt && vt.event.triggered !== e.type ? vt.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(Ot) || [""], c = e.length; c--;) a = Zt.exec(e[c]) || [], d = v = a[1], f = (a[2] || "").split(".").sort(), d && (h = vt.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, h = vt.event.special[d] || {}, u = vt.extend({
                type: d,
                origType: v,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && vt.expr.match.needsContext.test(i),
                namespace: f.join(".")
            }, o), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && !1 !== h.setup.call(t, r, f, s) || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), vt.event.global[d] = !0)
        }, remove: function (t, e, n, r, i) {
            var o, s, a, l, c, u, h, p, d, f, v, y = It.hasData(t) && It.get(t);
            if (y && (l = y.events)) {
                for (e = (e || "").match(Ot) || [""], c = e.length; c--;) if (a = Zt.exec(e[c]) || [], d = v = a[1], f = (a[2] || "").split(".").sort(), d) {
                    for (h = vt.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !i && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
                    s && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, y.handle) || vt.removeEvent(t, d, y.handle), delete l[d])
                } else for (d in l) vt.event.remove(t, d + e[c], n, r, !0);
                vt.isEmptyObject(l) && It.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, n, r, i, o, s, a = vt.event.fix(t), l = new Array(arguments.length),
                c = (It.get(this, "events") || {})[a.type] || [], u = vt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = vt.event.handlers.call(this, a, c), e = 0; (i = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((vt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var n, r, i, o, s, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) r = e[n], i = r.selector + " ", void 0 === s[i] && (s[i] = r.needsContext ? vt(i, this).index(c) > -1 : vt.find(i, this, null, [c]).length), s[i] && o.push(r);
                o.length && a.push({elem: c, handlers: o})
            }
            return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(vt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: vt.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[vt.expando] ? t : new vt.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (Ut.test(this.type) && this.click && i(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return i(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, vt.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, vt.Event = function (t, e) {
        return this instanceof vt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? T : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && vt.extend(this, e), this.timeStamp = t && t.timeStamp || vt.now(), void (this[vt.expando] = !0)) : new vt.Event(t, e)
    }, vt.Event.prototype = {
        constructor: vt.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = T, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = T, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = T, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, vt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Jt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, vt.event.addProp), vt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        vt.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return i && (i === r || vt.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), vt.fn.extend({
        on: function (t, e, n, r) {
            return k(this, t, e, n, r)
        }, one: function (t, e, n, r) {
            return k(this, t, e, n, r, 1)
        }, off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, vt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = w), this.each(function () {
                vt.event.remove(this, t, n, e)
            })
        }
    });
    var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ee = /<script|<style|<link/i, ne = /checked\s*(?:[^=]|=\s*.checked.)/i, re = /^true\/(.*)/,
        ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    vt.extend({
        htmlPrefilter: function (t) {
            return t.replace(te, "<$1></$2>")
        }, clone: function (t, e, n) {
            var r, i, o, s, a = t.cloneNode(!0), l = vt.contains(t.ownerDocument, t);
            if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || vt.isXMLDoc(t))) for (s = m(a), o = m(t), r = 0, i = o.length; r < i; r++) A(o[r], s[r]);
            if (e) if (n) for (o = o || m(t), s = s || m(a), r = 0, i = o.length; r < i; r++) j(o[r], s[r]); else j(t, a);
            return s = m(a, "script"), s.length > 0 && b(s, !l && m(t, "script")), a
        }, cleanData: function (t) {
            for (var e, n, r, i = vt.event.special, o = 0; void 0 !== (n = t[o]); o++) if (Mt(n)) {
                if (e = n[It.expando]) {
                    if (e.events) for (r in e.events) i[r] ? vt.event.remove(n, r) : vt.removeEvent(n, r, e.handle);
                    n[It.expando] = void 0
                }
                n[Lt.expando] && (n[Lt.expando] = void 0)
            }
        }
    }), vt.fn.extend({
        detach: function (t) {
            return D(this, t, !0)
        }, remove: function (t) {
            return D(this, t)
        }, text: function (t) {
            return Pt(this, function (t) {
                return void 0 === t ? vt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return O(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    x(this, t).appendChild(t)
                }
            })
        }, prepend: function () {
            return O(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return O(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return O(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (vt.cleanData(m(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return vt.clone(this, t, e)
            })
        }, html: function (t) {
            return Pt(this, function (t) {
                var e = this[0] || {}, n = 0, r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ee.test(t) && !Gt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = vt.htmlPrefilter(t);
                    try {
                        for (; n < r; n++) e = this[n] || {}, 1 === e.nodeType && (vt.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return O(this, arguments, function (e) {
                var n = this.parentNode;
                vt.inArray(this, t) < 0 && (vt.cleanData(m(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), vt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        vt.fn[t] = function (t) {
            for (var n, r = [], i = vt(t), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), vt(i[s])[e](n), st.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var oe = /^margin/, se = new RegExp("^(" + Bt + ")(?!px)[a-z%]+$", "i"), ae = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    };
    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, a.style.marginRight = "50%", i = "4px" === e.marginRight, Kt.removeChild(s), a = null
            }
        }

        var n, r, i, o, s = nt.createElement("div"), a = nt.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), vt.extend(dt, {
            pixelPosition: function () {
                return e(), n
            }, boxSizingReliable: function () {
                return e(), r
            }, pixelMarginRight: function () {
                return e(), i
            }, reliableMarginLeft: function () {
                return e(), o
            }
        }))
    }();
    var le = /^(none|table(?!-c[ea]).+)/, ce = /^--/,
        ue = {position: "absolute", visibility: "hidden", display: "block"},
        he = {letterSpacing: "0", fontWeight: "400"}, pe = ["Webkit", "Moz", "ms"], de = nt.createElement("div").style;
    vt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = N(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = vt.camelCase(e), l = ce.test(e), c = t.style;
                return l || (e = I(a)), s = vt.cssHooks[e] || vt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : c[e] : (o = typeof n, "string" === o && (i = Ht.exec(n)) && i[1] && (n = v(t, e, i), o = "number"), void (null != n && n === n && ("number" === o && (n += i && i[3] || (vt.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (l ? c.setProperty(e, n) : c[e] = n))))
            }
        },
        css: function (t, e, n, r) {
            var i, o, s, a = vt.camelCase(e);
            return ce.test(e) || (e = I(a)), s = vt.cssHooks[e] || vt.cssHooks[a], s && "get" in s && (i = s.get(t, !0, n)), void 0 === i && (i = N(t, e, r)), "normal" === i && e in he && (i = he[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), vt.each(["height", "width"], function (t, e) {
        vt.cssHooks[e] = {
            get: function (t, n, r) {
                if (n) return !le.test(vt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? R(t, e, r) : Vt(t, ue, function () {
                    return R(t, e, r)
                })
            }, set: function (t, n, r) {
                var i, o = r && ae(t), s = r && F(t, e, r, "border-box" === vt.css(t, "boxSizing", !1, o), o);
                return s && (i = Ht.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = vt.css(t, e)), L(t, n, s)
            }
        }
    }), vt.cssHooks.marginLeft = P(dt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Vt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), vt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        vt.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + $t[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, oe.test(t) || (vt.cssHooks[t + e].set = L)
    }), vt.fn.extend({
        css: function (t, e) {
            return Pt(this, function (t, e, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (r = ae(t), i = e.length; s < i; s++) o[e[s]] = vt.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? vt.style(t, e, n) : vt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), vt.Tween = B, B.prototype = {
        constructor: B, init: function (t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || vt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (vt.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = B.propHooks[this.prop];
            return t && t.get ? t.get(this) : B.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = e = vt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = vt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                vt.fx.step[t.prop] ? vt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[vt.cssProps[t.prop]] && !vt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : vt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, vt.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, vt.fx = B.prototype.init, vt.fx.step = {};
    var fe, ve, ye = /^(?:toggle|show|hide)$/, ge = /queueHooks$/;
    vt.Animation = vt.extend(z, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return v(n.elem, t, Ht.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            vt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ot);
            for (var n, r = 0, i = t.length; r < i; r++) n = t[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e)
        }, prefilters: [W], prefilter: function (t, e) {
            e ? z.prefilters.unshift(t) : z.prefilters.push(t)
        }
    }), vt.speed = function (t, e, n) {
        var r = t && "object" == typeof t ? vt.extend({}, t) : {
            complete: n || !n && e || vt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !vt.isFunction(e) && e
        };
        return vt.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in vt.fx.speeds ? r.duration = vt.fx.speeds[r.duration] : r.duration = vt.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            vt.isFunction(r.old) && r.old.call(this), r.queue && vt.dequeue(this, r.queue)
        }, r
    }, vt.fn.extend({
        fadeTo: function (t, e, n, r) {
            return this.filter(qt).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
        }, animate: function (t, e, n, r) {
            var i = vt.isEmptyObject(t), o = vt.speed(e, n, r), s = function () {
                var e = z(this, vt.extend({}, t), o);
                (i || It.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (t, e, n) {
            var r = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, i = null != t && t + "queueHooks", o = vt.timers, s = It.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && ge.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                !e && n || vt.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, n = It.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = vt.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, vt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }), vt.each(["toggle", "show", "hide"], function (t, e) {
        var n = vt.fn[e];
        vt.fn[e] = function (t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, r, i)
        }
    }), vt.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        vt.fn[t] = function (t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), vt.timers = [], vt.fx.tick = function () {
        var t, e = 0, n = vt.timers;
        for (fe = vt.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || vt.fx.stop(), fe = void 0
    }, vt.fx.timer = function (t) {
        vt.timers.push(t), vt.fx.start()
    }, vt.fx.interval = 13, vt.fx.start = function () {
        ve || (ve = !0, H())
    }, vt.fx.stop = function () {
        ve = null
    }, vt.fx.speeds = {slow: 600, fast: 200, _default: 400}, vt.fn.delay = function (e, n) {
        return e = vt.fx ? vt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function () {
                t.clearTimeout(i)
            }
        })
    }, function () {
        var t = nt.createElement("input"), e = nt.createElement("select"),
            n = e.appendChild(nt.createElement("option"));
        t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = n.selected, t = nt.createElement("input"), t.value = "t", t.type = "radio", dt.radioValue = "t" === t.value
    }();
    var me, be = vt.expr.attrHandle;
    vt.fn.extend({
        attr: function (t, e) {
            return Pt(this, vt.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                vt.removeAttr(this, t)
            })
        }
    }), vt.extend({
        attr: function (t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? vt.prop(t, e, n) : (1 === o && vt.isXMLDoc(t) || (i = vt.attrHooks[e.toLowerCase()] || (vt.expr.match.bool.test(e) ? me : void 0)), void 0 !== n ? null === n ? void vt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = vt.find.attr(t, e), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!dt.radioValue && "radio" === e && i(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, r = 0, i = e && e.match(Ot);
            if (i && 1 === t.nodeType) for (; n = i[r++];) t.removeAttribute(n)
        }
    }), me = {
        set: function (t, e, n) {
            return !1 === e ? vt.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, vt.each(vt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = be[e] || vt.find.attr;
        be[e] = function (t, e, r) {
            var i, o, s = e.toLowerCase();
            return r || (o = be[s], be[s] = i, i = null != n(t, e, r) ? s : null, be[s] = o), i
        }
    });
    var _e = /^(?:input|select|textarea|button)$/i, Te = /^(?:a|area)$/i;
    vt.fn.extend({
        prop: function (t, e) {
            return Pt(this, vt.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[vt.propFix[t] || t]
            })
        }
    }), vt.extend({
        prop: function (t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && vt.isXMLDoc(t) || (e = vt.propFix[e] || e, i = vt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = vt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : _e.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), dt.optSelected || (vt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), vt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        vt.propFix[this.toLowerCase()] = this
    }), vt.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, s, a, l = 0;
            if (vt.isFunction(t)) return this.each(function (e) {
                vt(this).addClass(t.call(this, e, G(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(Ot) || []; n = this[l++];) if (i = G(n), r = 1 === n.nodeType && " " + X(i) + " ") {
                for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                a = X(r), i !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, s, a, l = 0;
            if (vt.isFunction(t)) return this.each(function (e) {
                vt(this).removeClass(t.call(this, e, G(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(Ot) || []; n = this[l++];) if (i = G(n), r = 1 === n.nodeType && " " + X(i) + " ") {
                for (s = 0; o = e[s++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                a = X(r), i !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : vt.isFunction(t) ? this.each(function (n) {
                vt(this).toggleClass(t.call(this, n, G(this), e), e)
            }) : this.each(function () {
                var e, r, i, o;
                if ("string" === n) for (r = 0, i = vt(this), o = t.match(Ot) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== t && "boolean" !== n || (e = G(this), e && It.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : It.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];) if (1 === n.nodeType && (" " + X(G(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var we = /\r/g;
    vt.fn.extend({
        val: function (t) {
            var e, n, r, i = this[0];
            return arguments.length ? (r = vt.isFunction(t), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? t.call(this, n, vt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = vt.map(i, function (t) {
                    return null == t ? "" : t + ""
                })), (e = vt.valHooks[this.type] || vt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
            })) : i ? (e = vt.valHooks[i.type] || vt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
        }
    }), vt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = vt.find.attr(t, "value");
                    return null != e ? e : X(vt.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, n, r, o = t.options, s = t.selectedIndex, a = "select-one" === t.type, l = a ? null : [],
                        c = a ? s + 1 : o.length;
                    for (r = s < 0 ? c : a ? s : 0; r < c; r++) if (n = o[r], (n.selected || r === s) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                        if (e = vt(n).val(), a) return e;
                        l.push(e)
                    }
                    return l
                }, set: function (t, e) {
                    for (var n, r, i = t.options, o = vt.makeArray(e), s = i.length; s--;) r = i[s], (r.selected = vt.inArray(vt.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), vt.each(["radio", "checkbox"], function () {
        vt.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = vt.inArray(vt(t).val(), e) > -1
            }
        }, dt.checkOn || (vt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ce = /^(?:focusinfocus|focusoutblur)$/;
    vt.extend(vt.event, {
        trigger: function (e, n, r, i) {
            var o, s, a, l, c, u, h, p = [r || nt], d = ut.call(e, "type") ? e.type : e,
                f = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = r = r || nt, 3 !== r.nodeType && 8 !== r.nodeType && !Ce.test(d + vt.event.triggered) && (d.indexOf(".") > -1 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[vt.expando] ? e : new vt.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : vt.makeArray(n, [e]), h = vt.event.special[d] || {}, i || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!i && !h.noBubble && !vt.isWindow(r)) {
                    for (l = h.delegateType || d, Ce.test(l + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || nt) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || d, u = (It.get(s, "events") || {})[e.type] && It.get(s, "handle"), u && u.apply(s, n), (u = c && s[c]) && u.apply && Mt(s) && (e.result = u.apply(s, n), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), n) || !Mt(r) || c && vt.isFunction(r[d]) && !vt.isWindow(r) && (a = r[c], a && (r[c] = null), vt.event.triggered = d, r[d](), vt.event.triggered = void 0, a && (r[c] = a)), e.result
            }
        }, simulate: function (t, e, n) {
            var r = vt.extend(new vt.Event, n, {type: t, isSimulated: !0});
            vt.event.trigger(r, null, e)
        }
    }), vt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                vt.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return vt.event.trigger(t, e, n, !0)
        }
    }), vt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        vt.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), vt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), dt.focusin = "onfocusin" in t, dt.focusin || vt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            vt.event.simulate(e, t.target, vt.event.fix(t))
        };
        vt.event.special[e] = {
            setup: function () {
                var r = this.ownerDocument || this, i = It.access(r, e);
                i || r.addEventListener(t, n, !0), It.access(r, e, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = It.access(r, e) - 1;
                i ? It.access(r, e, i) : (r.removeEventListener(t, n, !0), It.remove(r, e))
            }
        }
    });
    var ke = t.location, xe = vt.now(), Ee = /\?/;
    vt.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || vt.error("Invalid XML: " + e), n
    };
    var Se = /\[\]$/, je = /\r?\n/g, Ae = /^(?:submit|button|image|reset|file)$/i,
        Oe = /^(?:input|select|textarea|keygen)/i;
    vt.param = function (t, e) {
        var n, r = [], i = function (t, e) {
            var n = vt.isFunction(e) ? e() : e;
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(t) || t.jquery && !vt.isPlainObject(t)) vt.each(t, function () {
            i(this.name, this.value)
        }); else for (n in t) Y(n, t[n], e, i);
        return r.join("&")
    }, vt.fn.extend({
        serialize: function () {
            return vt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = vt.prop(this, "elements");
                return t ? vt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !vt(this).is(":disabled") && Oe.test(this.nodeName) && !Ae.test(t) && (this.checked || !Ut.test(t))
            }).map(function (t, e) {
                var n = vt(this).val();
                return null == n ? null : Array.isArray(n) ? vt.map(n, function (t) {
                    return {name: e.name, value: t.replace(je, "\r\n")}
                }) : {name: e.name, value: n.replace(je, "\r\n")}
            }).get()
        }
    });
    var De = /%20/g, Ne = /#.*$/, Pe = /([?&])_=[^&]*/, Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Le = /^(?:GET|HEAD)$/, Fe = /^\/\//, Re = {},
        Be = {}, He = "*/".concat("*"), $e = nt.createElement("a");
    $e.href = ke.href, vt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ke.href,
            type: "GET",
            isLocal: Ie.test(ke.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": He,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": vt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Q(Q(t, vt.ajaxSettings), e) : Q(vt.ajaxSettings, t)
        },
        ajaxPrefilter: K(Re),
        ajaxTransport: K(Be),
        ajax: function (e, n) {
            function r(e, n, r, a) {
                var c, p, d, _, T, w = n;
                u || (u = !0, l && t.clearTimeout(l), i = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (_ = Z(f, C, r)), _ = tt(f, _, C, c), c ? (f.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (vt.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (vt.etag[o] = T)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = _.state, p = _.data, d = _.error, c = !d)) : (d = w, !e && w || (w = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || w) + "", c ? g.resolveWith(v, [p, w, C]) : g.rejectWith(v, [C, w, d]), C.statusCode(b), b = void 0, h && y.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : d]), m.fireWith(v, [C, w]), h && (y.trigger("ajaxComplete", [C, f]), --vt.active || vt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, o, s, a, l, c, u, h, p, d, f = vt.ajaxSetup({}, n), v = f.context || f,
                y = f.context && (v.nodeType || v.jquery) ? vt(v) : vt.event, g = vt.Deferred(),
                m = vt.Callbacks("once memory"), b = f.statusCode || {}, _ = {}, T = {}, w = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (u) {
                            if (!a) for (a = {}; e = Me.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return u ? s : null
                    }, setRequestHeader: function (t, e) {
                        return null == u && (t = T[t.toLowerCase()] = T[t.toLowerCase()] || t, _[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == u && (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (u) C.always(t[C.status]); else for (e in t) b[e] = [b[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || w;
                        return i && i.abort(e), r(0, e), this
                    }
                };
            if (g.promise(C), f.url = ((e || f.url || ke.href) + "").replace(Fe, ke.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ot) || [""], null == f.crossDomain) {
                c = nt.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = $e.protocol + "//" + $e.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = vt.param(f.data, f.traditional)), J(Re, f, n, C), u) return C;
            h = vt.event && f.global, h && 0 == vt.active++ && vt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Le.test(f.type), o = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(De, "+")) : (d = f.url.slice(o.length), f.data && (o += (Ee.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Pe, "$1"), d = (Ee.test(o) ? "&" : "?") + "_=" + xe++ + d), f.url = o + d), f.ifModified && (vt.lastModified[o] && C.setRequestHeader("If-Modified-Since", vt.lastModified[o]), vt.etag[o] && C.setRequestHeader("If-None-Match", vt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + He + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) C.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(v, C, f) || u)) return C.abort();
            if (w = "abort", m.add(f.complete), C.done(f.success), C.fail(f.error), i = J(Be, f, n, C)) {
                if (C.readyState = 1, h && y.trigger("ajaxSend", [C, f]), u) return C;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, i.send(_, r)
                } catch (t) {
                    if (u) throw t;
                    r(-1, t)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, n) {
            return vt.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return vt.get(t, void 0, e, "script")
        }
    }), vt.each(["get", "post"], function (t, e) {
        vt[e] = function (t, n, r, i) {
            return vt.isFunction(n) && (i = i || r, r = n, n = void 0), vt.ajax(vt.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, vt.isPlainObject(t) && t))
        }
    }), vt._evalUrl = function (t) {
        return vt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, vt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (vt.isFunction(t) && (t = t.call(this[0])), e = vt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return vt.isFunction(t) ? this.each(function (e) {
                vt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = vt(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = vt.isFunction(t);
            return this.each(function (n) {
                vt(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                vt(this).replaceWith(this.childNodes)
            }), this
        }
    }), vt.expr.pseudos.hidden = function (t) {
        return !vt.expr.pseudos.visible(t)
    }, vt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, vt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var qe = {0: 200, 1223: 204}, Ve = vt.ajaxSettings.xhr();
    dt.cors = !!Ve && "withCredentials" in Ve, dt.ajax = Ve = !!Ve, vt.ajaxTransport(function (e) {
        var n, r;
        if (dt.cors || Ve && !e.crossDomain) return {
            send: function (i, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function (t) {
                    return function () {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            }, abort: function () {
                n && n()
            }
        }
    }), vt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), vt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return vt.globalEval(t), t
            }
        }
    }), vt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), vt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (r, i) {
                    e = vt("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", n = function (t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), nt.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var We = [], Ue = /(=)\?(?=&|$)|\?\?/;
    vt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = We.pop() || vt.expando + "_" + xe++;
            return this[t] = !0, t
        }
    }), vt.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i, o, s,
            a = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = vt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ue, "$1" + i) : !1 !== e.jsonp && (e.url += (Ee.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return s || vt.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
            s = arguments
        }, r.always(function () {
            void 0 === o ? vt(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, We.push(i)), s && vt.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), dt.createHTMLDocument = function () {
        var t = nt.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), vt.parseHTML = function (t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var r, i, o;
        return e || (dt.createHTMLDocument ? (e = nt.implementation.createHTMLDocument(""), r = e.createElement("base"), r.href = nt.location.href, e.head.appendChild(r)) : e = nt), i = kt.exec(t), o = !n && [], i ? [e.createElement(i[1])] : (i = _([t], e, o), o && o.length && vt(o).remove(), vt.merge([], i.childNodes))
    }, vt.fn.load = function (t, e, n) {
        var r, i, o, s = this, a = t.indexOf(" ");
        return a > -1 && (r = X(t.slice(a)), t = t.slice(0, a)), vt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && vt.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(r ? vt("<div>").append(vt.parseHTML(t)).find(r) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, vt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        vt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), vt.expr.pseudos.animated = function (t) {
        return vt.grep(vt.timers, function (e) {
            return t === e.elem
        }).length
    }, vt.offset = {
        setOffset: function (t, e, n) {
            var r, i, o, s, a, l, c, u = vt.css(t, "position"), h = vt(t), p = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), o = vt.css(t, "top"), l = vt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (r = h.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), vt.isFunction(e) && (e = e.call(t, n, vt.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + i), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, vt.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                vt.offset.setOffset(this, t, e)
            });
            var e, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), e = o.ownerDocument, n = e.documentElement, i = e.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n = this[0], r = {top: 0, left: 0};
                return "fixed" === vt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), i(t[0], "html") || (r = t.offset()), r = {
                    top: r.top + vt.css(t[0], "borderTopWidth", !0),
                    left: r.left + vt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - r.top - vt.css(n, "marginTop", !0),
                    left: e.left - r.left - vt.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === vt.css(t, "position");) t = t.offsetParent;
                return t || Kt
            })
        }
    }), vt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = "pageYOffset" === e;
        vt.fn[t] = function (r) {
            return Pt(this, function (t, r, i) {
                var o;
                return vt.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i ? o ? o[e] : t[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
            }, t, r, arguments.length)
        }
    }), vt.each(["top", "left"], function (t, e) {
        vt.cssHooks[e] = P(dt.pixelPosition, function (t, n) {
            if (n) return n = N(t, e), se.test(n) ? vt(t).position()[e] + "px" : n
        })
    }), vt.each({Height: "height", Width: "width"}, function (t, e) {
        vt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
            vt.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                return Pt(this, function (e, n, i) {
                    var o;
                    return vt.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? vt.css(e, n, a) : vt.style(e, n, i, a)
                }, e, s ? i : void 0, s)
            }
        })
    }), vt.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }, holdReady: function (t) {
            t ? vt.readyWait++ : vt.ready(!0)
        }
    }), vt.isArray = Array.isArray, vt.parseJSON = JSON.parse, vt.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return vt
    });
    var ze = t.jQuery, Xe = t.$;
    return vt.noConflict = function (e) {
        return t.$ === vt && (t.$ = Xe), e && t.jQuery === vt && (t.jQuery = ze), vt
    }, e || (t.jQuery = t.$ = vt), vt
}), window.Modernizr = function (t, e, n) {
    function r(t) {
        y.cssText = t
    }

    function i(t, e) {
        return r(_.join(t + ";") + (e || ""))
    }

    function o(t, e) {
        return typeof t === e
    }

    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function a(t, e) {
        for (var r in t) {
            var i = t[r];
            if (!s(i, "-") && y[i] !== n) return "pfx" != e || i
        }
        return !1
    }

    function l(t, e, r) {
        for (var i in t) {
            var s = e[t[i]];
            if (s !== n) return !1 === r ? t[i] : o(s, "function") ? s.bind(r || e) : s
        }
        return !1
    }

    function c(t, e, n) {
        var r = t.charAt(0).toUpperCase() + t.slice(1), i = (t + " " + w.join(r + " ") + r).split(" ");
        return o(e, "string") || o(e, "undefined") ? a(i, e) : (i = (t + " " + C.join(r + " ") + r).split(" "), l(i, e, n))
    }

    var u, h, p = {}, d = e.documentElement, f = "modernizr", v = e.createElement(f), y = v.style,
        g = e.createElement("input"), m = ":)", b = {}.toString, _ = " -webkit- -moz- -o- -ms- ".split(" "),
        T = "Webkit Moz O ms", w = T.split(" "), C = T.toLowerCase().split(" "),
        k = {svg: "http://www.w3.org/2000/svg"}, x = {}, E = {}, S = {}, j = [], A = j.slice,
        O = function (t, n, r, i) {
            var o, s, a, l, c = e.createElement("div"), u = e.body, h = u || e.createElement("body");
            if (parseInt(r, 10)) for (; r--;) a = e.createElement("div"), a.id = i ? i[r] : f + (r + 1), c.appendChild(a);
            return o = ["&#173;", '<style id="s', f, '">', t, "</style>"].join(""), c.id = f, (u ? c : h).innerHTML += o, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(h)), s = n(c, t), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), d.style.overflow = l), !!s
        }, D = function (e) {
            var n = t.matchMedia || t.msMatchMedia;
            if (n) return n(e) && n(e).matches || !1;
            var r;
            return O("@media " + e + " { #" + f + " { position: absolute; } }", function (e) {
                r = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            }), r
        }, N = function () {
            function t(t, i) {
                i = i || e.createElement(r[t] || "div"), t = "on" + t;
                var s = t in i;
                return s || (i.setAttribute || (i = e.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(t, ""), s = o(i[t], "function"), o(i[t], "undefined") || (i[t] = n), i.removeAttribute(t))), i = null, s
            }

            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return t
        }(), P = {}.hasOwnProperty;
    h = o(P, "undefined") || o(P.call, "undefined") ? function (t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return P.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError;
        var n = A.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var i = function () {
                };
                i.prototype = e.prototype;
                var o = new i, s = e.apply(o, n.concat(A.call(arguments)));
                return Object(s) === s ? s : o
            }
            return e.apply(t, n.concat(A.call(arguments)))
        };
        return r
    }), x.flexbox = function () {
        return c("flexWrap")
    }, x.flexboxlegacy = function () {
        return c("boxDirection")
    }, x.canvas = function () {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }, x.canvastext = function () {
        return !(!p.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"))
    }, x.webgl = function () {
        return !!t.WebGLRenderingContext
    }, x.touch = function () {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : O(["@media (", _.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
            n = 9 === t.offsetTop
        }), n
    }, x.geolocation = function () {
        return "geolocation" in navigator
    }, x.postmessage = function () {
        return !!t.postMessage
    }, x.websqldatabase = function () {
        return !!t.openDatabase
    }, x.indexedDB = function () {
        return !!c("indexedDB", t)
    }, x.hashchange = function () {
        return N("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
    }, x.history = function () {
        return !(!t.history || !history.pushState)
    }, x.draganddrop = function () {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t
    }, x.websockets = function () {
        return "WebSocket" in t || "MozWebSocket" in t
    }, x.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), s(y.backgroundColor, "rgba")
    }, x.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
    }, x.multiplebgs = function () {
        return r("background:url(//),url(//),red url(//)"), /(url\s*\(.*?){3}/.test(y.background)
    }, x.backgroundsize = function () {
        return c("backgroundSize")
    }, x.borderimage = function () {
        return c("borderImage")
    }, x.borderradius = function () {
        return c("borderRadius")
    }, x.boxshadow = function () {
        return c("boxShadow")
    }, x.textshadow = function () {
        return "" === e.createElement("div").style.textShadow
    }, x.opacity = function () {
        return i("opacity:.55"), /^0.55$/.test(y.opacity)
    }, x.cssanimations = function () {
        return c("animationName")
    }, x.csscolumns = function () {
        return c("columnCount")
    }, x.cssgradients = function () {
        var t = "background-image:";
        return r((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + _.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), s(y.backgroundImage, "gradient")
    }, x.cssreflections = function () {
        return c("boxReflect")
    }, x.csstransforms = function () {
        return !!c("transform")
    }, x.csstransforms3d = function () {
        var t = !!c("perspective");
        return t && "webkitPerspective" in d.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, n) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), t
    }, x.csstransitions = function () {
        return c("transition")
    }, x.fontface = function () {
        var t;
        return O('@font-face {font-family:"font";src:url("//")}', function (n, r) {
            var i = e.getElementById("smodernizr"), o = i.sheet || i.styleSheet,
                s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(r.split(" ")[0])
        }), t
    }, x.generatedcontent = function () {
        var t;
        return O(["#", f, "{font:0/0 a}#", f, ':after{content:"', m, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
            t = e.offsetHeight >= 3
        }), t
    }, x.video = function () {
        var t = e.createElement("video"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (t) {
        }
        return n
    }, x.audio = function () {
        var t = e.createElement("audio"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {
        }
        return n
    }, x.localstorage = function () {
        try {
            return localStorage.setItem(f, f), localStorage.removeItem(f), !0
        } catch (t) {
            return !1
        }
    }, x.sessionstorage = function () {
        try {
            return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0
        } catch (t) {
            return !1
        }
    }, x.webworkers = function () {
        return !!t.Worker
    }, x.applicationcache = function () {
        return !!t.applicationCache
    }, x.svg = function () {
        return !!e.createElementNS && !!e.createElementNS(k.svg, "svg").createSVGRect
    }, x.inlinesvg = function () {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == k.svg
    }, x.smil = function () {
        return !!e.createElementNS && /SVGAnimate/.test(b.call(e.createElementNS(k.svg, "animate")))
    }, x.svgclippaths = function () {
        return !!e.createElementNS && /SVGClipPath/.test(b.call(e.createElementNS(k.svg, "clipPath")))
    };
    for (var M in x) h(x, M) && (u = M.toLowerCase(), p[u] = x[M](), j.push((p[u] ? "" : "no-") + u));
    return p.input || function () {
        p.input = function (n) {
            for (var r = 0, i = n.length; r < i; r++) S[n[r]] = !!(n[r] in g);
            return S.list && (S.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), S
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (t) {
            for (var r, i, o, s = 0, a = t.length; s < a; s++) g.setAttribute("type", i = t[s]), r = "text" !== g.type, r && (g.value = m, g.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && g.style.WebkitAppearance !== n ? (d.appendChild(g), o = e.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight, d.removeChild(g)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? g.checkValidity && !1 === g.checkValidity() : g.value != m)), E[t[s]] = !!r;
            return E
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }(), p.addTest = function (t, e) {
        if ("object" == typeof t) for (var r in t) h(t, r) && p.addTest(r, t[r]); else {
            if (t = t.toLowerCase(), p[t] !== n) return p;
            e = "function" == typeof e ? e() : e, d.className += " " + (e ? "" : "no-") + t, p[t] = e
        }
        return p
    }, r(""), v = g = null, function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"), r = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var t = g.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function i(t) {
            var e = y[t[f]];
            return e || (e = {}, v++, t[f] = v, y[v] = e), e
        }

        function o(t, n, r) {
            if (n || (n = e), u) return n.createElement(t);
            r || (r = i(n));
            var o;
            return o = r.cache[t] ? r.cache[t].cloneNode() : d.test(t) ? (r.cache[t] = r.createElem(t)).cloneNode() : r.createElem(t), !o.canHaveChildren || p.test(t) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(t, n) {
            if (t || (t = e), u) return t.createDocumentFragment();
            n = n || i(t);
            for (var o = n.frag.cloneNode(), s = 0, a = r(), l = a.length; s < l; s++) o.createElement(a[s]);
            return o
        }

        function a(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                return g.shivMethods ? o(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (t) {
                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
            }) + ");return n}")(g, e.frag)
        }

        function l(t) {
            t || (t = e);
            var r = i(t);
            return !g.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, r), t
        }

        var c, u, h = t.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f = "_html5shiv", v = 0, y = {};
        !function () {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function () {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                }()
            } catch (t) {
                c = !0, u = !0
            }
        }();
        var g = {
            elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== h.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== h.shivMethods,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: s
        };
        t.html5 = g, l(e)
    }(this, e), p._version = "2.8.3", p._prefixes = _, p._domPrefixes = C, p._cssomPrefixes = w, p.mq = D, p.hasEvent = N, p.testProp = function (t) {
        return a([t])
    }, p.testAllProps = c, p.testStyles = O, p.prefixed = function (t, e, n) {
        return e ? c(t, e, n) : c(t, "pfx")
    }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + j.join(" "), p
}(this, this.document), mouseover = !0, firstMoveIn = firstMoveOut = !0, sidenum = 0, tops = new Array, itemstoped = new Array({
    time: "waveline1",
    side: "right"
}, {time: "waveline2", side: "left"}, {
    time: "waveline3",
    side: "right"
}), $("#video-audio-on").bind("click", function () {
    $("#video-audio-on").css("display", "none"), $("#video-audio-off").css("display", "block"), $("#video-init").prop("muted", !0)
}), $("#video-audio-off").bind("click", function () {
    $("#video-audio-on").css("display", "block"), $("#video-audio-off").css("display", "none"), $("#video-init").prop("muted", !1)
}), $(".logo > img").bind("mouseover", function () {
    if (firstMoveIn) for (var t = 0; t < itemstoped.length; t++) "left" == itemstoped[t].side ? ($("#" + itemstoped[t].time).addClass("transition-appear"), $("#" + itemstoped[t].time).css("left", "0px")) : ($("#" + itemstoped[t].time).addClass("transition-appear"), $("#" + itemstoped[t].time).css("right", "0px")); else {
        var e = createNewWave();
        $("#" + e).delay(100).queue(function () {
            $(this).css(sidename, "0px").dequeue()
        })
    }
}), $(".logo > img").bind("mouseout", function () {
    if (firstMoveIn) for (var t = 0; t < itemstoped.length; t++) "left" == itemstoped[t].side ? $("#" + itemstoped[t].time).css("left", "-200px") : $("#" + itemstoped[t].time).css("right", "-200px"); else {
        for (var t = 0; t < itemstoped.length; t++) "left" == itemstoped[t].side ? $("#" + itemstoped[t].time).css("left", "-300px") : $("#" + itemstoped[t].time).css("right", "-300px"), $("#" + itemstoped[t].time).queue(function () {
            $(this).remove()
        });
        itemstoped = new Array
    }
}), $(".logo > img").bind("click", function () {
    firstMoveIn = !1, itemstoped.length < 1 && createNewWave();
    for (var t = 0; t < itemstoped.length; t++) "left" == itemstoped[t].side ? $("#" + itemstoped[t].time).delay(100).queue(function () {
        $(this).removeClass("transition-appear"), $(this).addClass("transition-fly"), $(this).css("left", "120%")
    }) : $("#" + itemstoped[t].time).delay(100).queue(function () {
        $(this).removeClass("transition-appear"), $(this).addClass("transition-fly"), $(this).css("right", "120%")
    });
    itemstoped = new Array
}), $(".menu-footer").hover(function () {
    $(".menu-footer").stop().animate({bottom: "0px"}, 500)
}, function () {
    $(".menu-footer").stop().animate({bottom: "-3em"}, 500)
}), $(".menu-item").bind("click", function () {
    $(".menu-item").removeClass("active"), $(this).addClass("active");
    var t = $(this).attr("data-tab");
    $(".tab-content").removeClass("active"), $("#" + t).addClass("active")
}), $(".menu-item").bind("mouseout", function () {
    "item1" == $(".menu-item.active").attr("id") ? $("#menu-item-underline").css("left", "0") : $("#menu-item-underline").css("left", "50%")
}), $("#item1").bind("mouseover", function () {
    $("#menu-item-underline").css("left", "0")
}), $("#item2").bind("mouseover", function () {
    $("#menu-item-underline").css("left", "50%")
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.videojs = e()
}(this, function () {
    function t(t, e) {
        return e = {exports: {}}, t(e, e.exports), e.exports
    }

    function e(t, e) {
        Ve(t).forEach(function (n) {
            return e(t[n], n)
        })
    }

    function n(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Ve(t).reduce(function (n, r) {
            return e(n, t[r], r)
        }, n)
    }

    function r(t) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return Object.assign ? Object.assign.apply(Object, [t].concat(r)) : (r.forEach(function (n) {
            n && e(n, function (e, n) {
                t[n] = e
            })
        }), t)
    }

    function i(t) {
        return !!t && "object" === (void 0 === t ? "undefined" : Fe(t))
    }

    function o(t) {
        return i(t) && "[object Object]" === qe.call(t) && t.constructor === Object
    }

    function s(t) {
        return t.replace(/\n\r?\s*/g, "")
    }

    function a(t, e) {
        if (!t || !e) return "";
        if ("function" == typeof le.getComputedStyle) {
            var n = le.getComputedStyle(t);
            return n ? n[e] : ""
        }
        return t.currentStyle[e] || ""
    }

    function l(t) {
        return "string" == typeof t && /\S/.test(t)
    }

    function c(t) {
        if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
    }

    function u(t) {
        return new RegExp("(^|\\s)" + t + "($|\\s)")
    }

    function h() {
        return de === le.document && void 0 !== de.createElement
    }

    function p(t) {
        return i(t) && 1 === t.nodeType
    }

    function d() {
        try {
            return le.parent !== le.self
        } catch (t) {
            return !0
        }
    }

    function f(t) {
        return function (e, n) {
            if (!l(e)) return de[t](null);
            l(n) && (n = de.querySelector(n));
            var r = p(n) ? n : de;
            return r[t] && r[t](e)
        }
    }

    function v() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments[3],
            i = de.createElement(t);
        return Object.getOwnPropertyNames(e).forEach(function (t) {
            var n = e[t];
            -1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (Ge.warn(Ye(Ke, t, n)), i.setAttribute(t, n)) : "textContent" === t ? y(i, n) : i[t] = n
        }), Object.getOwnPropertyNames(n).forEach(function (t) {
            i.setAttribute(t, n[t])
        }), r && I(i, r), i
    }

    function y(t, e) {
        return void 0 === t.textContent ? t.innerText = e : t.textContent = e, t
    }

    function g(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }

    function m(t, e) {
        return c(e), t.classList ? t.classList.contains(e) : u(e).test(t.className)
    }

    function b(t, e) {
        return t.classList ? t.classList.add(e) : m(t, e) || (t.className = (t.className + " " + e).trim()), t
    }

    function _(t, e) {
        return t.classList ? t.classList.remove(e) : (c(e), t.className = t.className.split(/\s+/).filter(function (t) {
            return t !== e
        }).join(" ")), t
    }

    function T(t, e, n) {
        var r = m(t, e);
        if ("function" == typeof n && (n = n(t, e)), "boolean" != typeof n && (n = !r), n !== r) return n ? b(t, e) : _(t, e), t
    }

    function w(t, e) {
        Object.getOwnPropertyNames(e).forEach(function (n) {
            var r = e[n];
            null === r || void 0 === r || !1 === r ? t.removeAttribute(n) : t.setAttribute(n, !0 === r ? "" : r)
        })
    }

    function C(t) {
        var e = {};
        if (t && t.attributes && t.attributes.length > 0) for (var n = t.attributes, r = n.length - 1; r >= 0; r--) {
            var i = n[r].name, o = n[r].value;
            "boolean" != typeof t[i] && -1 === ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf("," + i + ",") || (o = null !== o), e[i] = o
        }
        return e
    }

    function k(t, e) {
        return t.getAttribute(e)
    }

    function x(t, e, n) {
        t.setAttribute(e, n)
    }

    function E(t, e) {
        t.removeAttribute(e)
    }

    function S() {
        de.body.focus(), de.onselectstart = function () {
            return !1
        }
    }

    function j() {
        de.onselectstart = function () {
            return !0
        }
    }

    function A(t) {
        if (t && t.getBoundingClientRect && t.parentNode) {
            var e = t.getBoundingClientRect(), n = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function (t) {
                void 0 !== e[t] && (n[t] = e[t])
            }), n.height || (n.height = parseFloat(a(t, "height"))), n.width || (n.width = parseFloat(a(t, "width"))), n
        }
    }

    function O(t) {
        var e = void 0;
        if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {left: 0, top: 0};
        var n = de.documentElement, r = de.body, i = n.clientLeft || r.clientLeft || 0,
            o = le.pageXOffset || r.scrollLeft, s = e.left + o - i, a = n.clientTop || r.clientTop || 0,
            l = le.pageYOffset || r.scrollTop, c = e.top + l - a;
        return {left: Math.round(s), top: Math.round(c)}
    }

    function D(t, e) {
        var n = {}, r = O(t), i = t.offsetWidth, o = t.offsetHeight, s = r.top, a = r.left, l = e.pageY, c = e.pageX;
        return e.changedTouches && (c = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (s - l + o) / o)), n.x = Math.max(0, Math.min(1, (c - a) / i)), n
    }

    function N(t) {
        return i(t) && 3 === t.nodeType
    }

    function P(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        return t
    }

    function M(t) {
        return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function (t) {
            return "function" == typeof t && (t = t()), p(t) || N(t) ? t : "string" == typeof t && /\S/.test(t) ? de.createTextNode(t) : void 0
        }).filter(function (t) {
            return t
        })
    }

    function I(t, e) {
        return M(e).forEach(function (e) {
            return t.appendChild(e)
        }), t
    }

    function L(t, e) {
        return I(P(t), e)
    }

    function F(t) {
        return void 0 === t.button && void 0 === t.buttons || 0 === t.button && void 0 === t.buttons || 9 === De || 0 === t.button && 1 === t.buttons
    }

    function R() {
        return tn++
    }

    function B(t) {
        var e = t[nn];
        return e || (e = t[nn] = R()), en[e] || (en[e] = {}), en[e]
    }

    function H(t) {
        var e = t[nn];
        return !!e && !!Object.getOwnPropertyNames(en[e]).length
    }

    function $(t) {
        var e = t[nn];
        if (e) {
            delete en[e];
            try {
                delete t[nn]
            } catch (e) {
                t.removeAttribute ? t.removeAttribute(nn) : t[nn] = null
            }
        }
    }

    function q(t, e) {
        var n = B(t);
        0 === n.handlers[e].length && (delete n.handlers[e], t.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && $(t)
    }

    function V(t, e, n, r) {
        n.forEach(function (n) {
            t(e, n, r)
        })
    }

    function W(t) {
        function e() {
            return !0
        }

        function n() {
            return !1
        }

        if (!t || !t.isPropagationStopped) {
            var r = t || le.event;
            t = {};
            for (var i in r) "layerX" !== i && "layerY" !== i && "keyLocation" !== i && "webkitMovementX" !== i && "webkitMovementY" !== i && ("returnValue" === i && r.preventDefault || (t[i] = r[i]));
            if (t.target || (t.target = t.srcElement || de), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function () {
                r.preventDefault && r.preventDefault(), t.returnValue = !1, r.returnValue = !1, t.defaultPrevented = !0
            }, t.defaultPrevented = !1, t.stopPropagation = function () {
                r.stopPropagation && r.stopPropagation(), t.cancelBubble = !0, r.cancelBubble = !0, t.isPropagationStopped = e
            }, t.isPropagationStopped = n, t.stopImmediatePropagation = function () {
                r.stopImmediatePropagation && r.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
            }, t.isImmediatePropagationStopped = n, null !== t.clientX && void 0 !== t.clientX) {
                var o = de.documentElement, s = de.body;
                t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }

    function U(t, e, n) {
        if (Array.isArray(e)) return V(U, t, e, n);
        var r = B(t);
        if (r.handlers || (r.handlers = {}), r.handlers[e] || (r.handlers[e] = []), n.guid || (n.guid = R()), r.handlers[e].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function (e, n) {
            if (!r.disabled) {
                e = W(e);
                var i = r.handlers[e.type];
                if (i) for (var o = i.slice(0), s = 0, a = o.length; s < a && !e.isImmediatePropagationStopped(); s++) try {
                    o[s].call(t, e, n)
                } catch (t) {
                    Ge.error(t)
                }
            }
        }), 1 === r.handlers[e].length) if (t.addEventListener) {
            var i = !1;
            rn && on.indexOf(e) > -1 && (i = {passive: !0}), t.addEventListener(e, r.dispatcher, i)
        } else t.attachEvent && t.attachEvent("on" + e, r.dispatcher)
    }

    function z(t, e, n) {
        if (H(t)) {
            var r = B(t);
            if (r.handlers) {
                if (Array.isArray(e)) return V(z, t, e, n);
                var i = function (t, e) {
                    r.handlers[e] = [], q(t, e)
                };
                if (void 0 !== e) {
                    var o = r.handlers[e];
                    if (o) {
                        if (!n) return void i(t, e);
                        if (n.guid) for (var s = 0; s < o.length; s++) o[s].guid === n.guid && o.splice(s--, 1);
                        q(t, e)
                    }
                } else for (var a in r.handlers) Object.prototype.hasOwnProperty.call(r.handlers || {}, a) && i(t, a)
            }
        }
    }

    function X(t, e, n) {
        var r = H(t) ? B(t) : {}, i = t.parentNode || t.ownerDocument;
        if ("string" == typeof e && (e = {
            type: e,
            target: t
        }), e = W(e), r.dispatcher && r.dispatcher.call(t, e, n), i && !e.isPropagationStopped() && !0 === e.bubbles) X.call(null, i, e, n); else if (!i && !e.defaultPrevented) {
            var o = B(e.target);
            e.target[e.type] && (o.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), o.disabled = !1)
        }
        return !e.defaultPrevented
    }

    function G(t, e, n) {
        if (Array.isArray(e)) return V(G, t, e, n);
        var r = function r() {
            z(t, e, r), n.apply(this, arguments)
        };
        r.guid = n.guid = n.guid || R(), U(t, e, r)
    }

    function Y(t, e) {
        e && (ln = e), le.setTimeout(cn, t)
    }

    function K(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.eventBusKey;
        if (n) {
            if (!t[n].nodeName) throw new Error('The eventBusKey "' + n + '" does not refer to an element.');
            t.eventBusEl_ = t[n]
        } else t.eventBusEl_ = v("span", {className: "vjs-event-bus"});
        return r(t, wn), t.on("dispose", function () {
            t.off(), le.setTimeout(function () {
                t.eventBusEl_ = null
            }, 0)
        }), t
    }

    function J(t, e) {
        return r(t, Cn), t.state = r({}, t.state, e), "function" == typeof t.handleStateChanged && vn(t) && t.on("statechanged", t.handleStateChanged), t
    }

    function Q(t) {
        return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
    }

    function Z(t, e) {
        return Q(t) === Q(e)
    }

    function tt() {
        for (var t = {}, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return r.forEach(function (n) {
            n && e(n, function (e, n) {
                if (!o(e)) return void (t[n] = e);
                o(t[n]) || (t[n] = {}), t[n] = tt(t[n], e)
            })
        }), t
    }

    function et(t, e, n) {
        if ("number" != typeof e || e < 0 || e > n) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + n + ").")
    }

    function nt(t, e, n, r) {
        return et(t, r, n.length - 1), n[r][e]
    }

    function rt(t) {
        return void 0 === t || 0 === t.length ? {
            length: 0, start: function () {
                throw new Error("This TimeRanges object is empty")
            }, end: function () {
                throw new Error("This TimeRanges object is empty")
            }
        } : {length: t.length, start: nt.bind(null, "start", 0, t), end: nt.bind(null, "end", 1, t)}
    }

    function it(t, e) {
        return Array.isArray(t) ? rt(t) : void 0 === t || void 0 === e ? rt() : rt([[t, e]])
    }

    function ot(t, e) {
        var n = 0, r = void 0, i = void 0;
        if (!e) return 0;
        t && t.length || (t = it(0, 0));
        for (var o = 0; o < t.length; o++) r = t.start(o), i = t.end(o), i > e && (i = e), n += i - r;
        return n / e
    }

    function st(t) {
        if (t instanceof st) return t;
        "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : i(t) && ("number" == typeof t.code && (this.code = t.code), r(this, t)), this.message || (this.message = st.defaultMessages[this.code] || "")
    }

    function at(t, e) {
        var n, r = null;
        try {
            n = JSON.parse(t, e)
        } catch (t) {
            r = t
        }
        return [r, n]
    }

    function lt(t) {
        return void 0 !== t && "function" == typeof t.then
    }

    function ct(t) {
        lt(t) && t.then(null, function (t) {
        })
    }

    function ut(t) {
        var e = or.call(t);
        return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
    }

    function ht(t, e, n) {
        if (!ir(e)) throw new TypeError("iterator must be a function");
        arguments.length < 3 && (n = this), "[object Array]" === lr.call(t) ? pt(t, e, n) : "string" == typeof t ? dt(t, e, n) : ft(t, e, n)
    }

    function pt(t, e, n) {
        for (var r = 0, i = t.length; r < i; r++) cr.call(t, r) && e.call(n, t[r], r, t)
    }

    function dt(t, e, n) {
        for (var r = 0, i = t.length; r < i; r++) e.call(n, t.charAt(r), r, t)
    }

    function ft(t, e, n) {
        for (var r in t) cr.call(t, r) && e.call(n, t[r], r, t)
    }

    function vt() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) dr.call(n, r) && (t[r] = n[r])
        }
        return t
    }

    function yt(t) {
        for (var e in t) if (t.hasOwnProperty(e)) return !1;
        return !0
    }

    function gt(t, e, n) {
        var r = t;
        return ir(e) ? (n = e, "string" == typeof t && (r = {uri: t})) : r = pr(e, {uri: t}), r.callback = n, r
    }

    function mt(t, e, n) {
        return e = gt(t, e, n), bt(e)
    }

    function bt(t) {
        function e() {
            4 === a.readyState && setTimeout(i, 0)
        }

        function n() {
            var t = void 0;
            if (t = a.response ? a.response : a.responseText || _t(a), y) try {
                t = JSON.parse(t)
            } catch (t) {
            }
            return t
        }

        function r(t) {
            return clearTimeout(u), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, s(t, g)
        }

        function i() {
            if (!c) {
                var e;
                clearTimeout(u), e = t.useXDR && void 0 === a.status ? 200 : 1223 === a.status ? 204 : a.status;
                var r = g, i = null;
                return 0 !== e ? (r = {
                    body: n(),
                    statusCode: e,
                    method: p,
                    headers: {},
                    url: h,
                    rawRequest: a
                }, a.getAllResponseHeaders && (r.headers = hr(a.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), s(i, r, r.body)
            }
        }

        if (void 0 === t.callback) throw new Error("callback argument missing");
        var o = !1, s = function (e, n, r) {
            o || (o = !0, t.callback(e, n, r))
        }, a = t.xhr || null;
        a || (a = t.cors || t.useXDR ? new mt.XDomainRequest : new mt.XMLHttpRequest);
        var l, c, u, h = a.url = t.uri || t.url, p = a.method = t.method || "GET", d = t.body || t.data,
            f = a.headers = t.headers || {}, v = !!t.sync, y = !1,
            g = {body: void 0, headers: {}, statusCode: 0, method: p, url: h, rawRequest: a};
        if ("json" in t && !1 !== t.json && (y = !0, f.accept || f.Accept || (f.Accept = "application/json"), "GET" !== p && "HEAD" !== p && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"), d = JSON.stringify(!0 === t.json ? d : t.json))), a.onreadystatechange = e, a.onload = i, a.onerror = r, a.onprogress = function () {
        }, a.onabort = function () {
            c = !0
        }, a.ontimeout = r, a.open(p, h, !v, t.username, t.password), v || (a.withCredentials = !!t.withCredentials), !v && t.timeout > 0 && (u = setTimeout(function () {
            if (!c) {
                c = !0, a.abort("timeout");
                var t = new Error("XMLHttpRequest timeout");
                t.code = "ETIMEDOUT", r(t)
            }
        }, t.timeout)), a.setRequestHeader) for (l in f) f.hasOwnProperty(l) && a.setRequestHeader(l, f[l]); else if (t.headers && !yt(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in t && (a.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(a), a.send(d || null), a
    }

    function _t(t) {
        if ("document" === t.responseType) return t.responseXML;
        var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
        return "" !== t.responseType || e ? null : t.responseXML
    }

    function Tt() {
    }

    function wt(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function Ct(t) {
        function e(t, e, n, r) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | r) / 1e3
        }

        var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return n ? n[3] ? e(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? e(n[1], n[2], 0, n[4]) : e(0, n[1], n[2], n[4]) : null
    }

    function kt() {
        this.values = Er(null)
    }

    function xt(t, e, n, r) {
        var i = r ? t.split(r) : [t];
        for (var o in i) if ("string" == typeof i[o]) {
            var s = i[o].split(n);
            if (2 === s.length) {
                var a = s[0], l = s[1];
                e(a, l)
            }
        }
    }

    function Et(t, e, n) {
        function r() {
            var e = Ct(t);
            if (null === e) throw new wt(wt.Errors.BadTimeStamp, "Malformed timestamp: " + o);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
        }

        function i() {
            t = t.replace(/^\s+/, "")
        }

        var o = t;
        if (i(), e.startTime = r(), i(), "--\x3e" !== t.substr(0, 3)) throw new wt(wt.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + o);
        t = t.substr(3), i(), e.endTime = r(), i(), function (t, e) {
            var r = new kt;
            xt(t, function (t, e) {
                switch (t) {
                    case"region":
                        for (var i = n.length - 1; i >= 0; i--) if (n[i].id === e) {
                            r.set(t, n[i].region);
                            break
                        }
                        break;
                    case"vertical":
                        r.alt(t, e, ["rl", "lr"]);
                        break;
                    case"line":
                        var o = e.split(","), s = o[0];
                        r.integer(t, s), r.percent(t, s) && r.set("snapToLines", !1), r.alt(t, s, ["auto"]), 2 === o.length && r.alt("lineAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case"position":
                        o = e.split(","), r.percent(t, o[0]), 2 === o.length && r.alt("positionAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case"size":
                        r.percent(t, e);
                        break;
                    case"align":
                        r.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", ""), e.line = r.get("line", "auto"), e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100), e.align = r.get("align", "middle"), e.position = r.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align), e.positionAlign = r.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }(t, e)
    }

    function St(t, e) {
        function n(t) {
            return Sr[t]
        }

        for (var r, i = t.document.createElement("div"), o = i, s = []; null !== (r = function () {
            if (!e) return null;
            var t = e.match(/^([^<]*)(<[^>]+>?)?/);
            return function (t) {
                return e = e.substr(t.length), t
            }(t[1] ? t[1] : t[2])
        }());) if ("<" !== r[0]) o.appendChild(t.document.createTextNode(function (t) {
            for (; c = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(c[0], n);
            return t
        }(r))); else {
            if ("/" === r[1]) {
                s.length && s[s.length - 1] === r.substr(2).replace(">", "") && (s.pop(), o = o.parentNode);
                continue
            }
            var a, l = Ct(r.substr(1, r.length - 2));
            if (l) {
                a = t.document.createProcessingInstruction("timestamp", l), o.appendChild(a);
                continue
            }
            var c = r.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
            if (!c) continue;
            if (!(a = function (e, n) {
                var r = jr[e];
                if (!r) return null;
                var i = t.document.createElement(r);
                i.localName = r;
                var o = Ar[e];
                return o && n && (i[o] = n.trim()), i
            }(c[1], c[3]))) continue;
            if (!function (t, e) {
                return !Or[e.localName] || Or[e.localName] === t.localName
            }(o, a)) continue;
            c[2] && (a.className = c[2].substr(1).replace(".", " ")), s.push(c[1]), o.appendChild(a), o = a
        }
        return i
    }

    function jt(t) {
        for (var e = 0; e < Dr.length; e++) {
            var n = Dr[e];
            if (t >= n[0] && t <= n[1]) return !0
        }
        return !1
    }

    function At(t) {
        function e(t, e) {
            for (var n = e.childNodes.length - 1; n >= 0; n--) t.push(e.childNodes[n])
        }

        function n(t) {
            if (!t || !t.length) return null;
            var r = t.pop(), i = r.textContent || r.innerText;
            if (i) {
                var o = i.match(/^.*(\n|\r)/);
                return o ? (t.length = 0, o[0]) : i
            }
            return "ruby" === r.tagName ? n(t) : r.childNodes ? (e(t, r), n(t)) : void 0
        }

        var r, i = [], o = "";
        if (!t || !t.childNodes) return "ltr";
        for (e(i, t); o = n(i);) for (var s = 0; s < o.length; s++) if (r = o.charCodeAt(s), jt(r)) return "rtl";
        return "ltr"
    }

    function Ot(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
        for (var e = t.track, n = e.textTrackList, r = 0, i = 0; i < n.length && n[i] !== e; i++) "showing" === n[i].mode && r++;
        return -1 * ++r
    }

    function Dt() {
    }

    function Nt(t, e, n) {
        var r = /MSIE\s8\.0/.test(navigator.userAgent), i = "rgba(255, 255, 255, 1)", o = "rgba(0, 0, 0, 0.8)";
        r && (i = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), Dt.call(this), this.cue = e, this.cueDiv = St(t, e.text);
        var s = {
            color: i,
            backgroundColor: o,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        r || (s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", s.unicodeBidi = "plaintext"), this.applyStyles(s, this.cueDiv), this.div = t.document.createElement("div"), s = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: n.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, r || (s.direction = At(this.cueDiv), s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(s), this.div.appendChild(this.cueDiv);
        var a = 0;
        switch (e.positionAlign) {
            case"start":
                a = e.position;
                break;
            case"middle":
                a = e.position - e.size / 2;
                break;
            case"end":
                a = e.position - e.size
        }
        "" === e.vertical ? this.applyStyles({
            left: this.formatStyle(a, "%"),
            width: this.formatStyle(e.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(a, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function (t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function Pt(t) {
        var e, n, r, i, o = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            n = t.div.offsetHeight, r = t.div.offsetWidth, i = t.div.offsetTop;
            var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
            t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || i, this.height = t.height || n, this.bottom = t.bottom || i + (t.height || n), this.width = t.width || r, this.lineHeight = void 0 !== e ? e : t.lineHeight, o && !this.lineHeight && (this.lineHeight = 13)
    }

    function Mt(t, e, n, r) {
        var i = new Pt(e), o = e.cue, s = Ot(o), a = [];
        if (o.snapToLines) {
            var l;
            switch (o.vertical) {
                case"":
                    a = ["+y", "-y"], l = "height";
                    break;
                case"rl":
                    a = ["+x", "-x"], l = "width";
                    break;
                case"lr":
                    a = ["-x", "+x"], l = "width"
            }
            var c = i.lineHeight, u = c * Math.round(s), h = n[l] + c, p = a[0];
            Math.abs(u) > h && (u = u < 0 ? -1 : 1, u *= Math.ceil(h / c) * c), s < 0 && (u += "" === o.vertical ? n.height : n.width, a = a.reverse()), i.move(p, u)
        } else {
            var d = i.lineHeight / n.height * 100;
            switch (o.lineAlign) {
                case"middle":
                    s -= d / 2;
                    break;
                case"end":
                    s -= d
            }
            switch (o.vertical) {
                case"":
                    e.applyStyles({top: e.formatStyle(s, "%")});
                    break;
                case"rl":
                    e.applyStyles({left: e.formatStyle(s, "%")});
                    break;
                case"lr":
                    e.applyStyles({right: e.formatStyle(s, "%")})
            }
            a = ["+y", "-x", "+x", "-y"], i = new Pt(e)
        }
        var f = function (t, e) {
            for (var i, o = new Pt(t), s = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(n, e[a]) || t.within(n) && t.overlapsAny(r);) t.move(e[a]);
                if (t.within(n)) return t;
                var l = t.intersectPercentage(n);
                s > l && (i = new Pt(t), s = l), t = new Pt(o)
            }
            return i || o
        }(i, a);
        e.move(f.toCSSCompatValues(n))
    }

    function It() {
    }

    function Lt(t) {
        return "string" == typeof t && !!Mr[t.toLowerCase()] && t.toLowerCase()
    }

    function Ft(t) {
        return "string" == typeof t && !!Ir[t.toLowerCase()] && t.toLowerCase()
    }

    function Rt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r]
        }
        return t
    }

    function Bt(t, e, n) {
        var r = this, i = /MSIE\s8\.0/.test(navigator.userAgent), o = {};
        i ? r = document.createElement("custom") : o.enumerable = !0, r.hasBeenReset = !1;
        var s = "", a = !1, l = t, c = e, u = n, h = null, p = "", d = !0, f = "auto", v = "start", y = 50,
            g = "middle", m = 50, b = "middle";
        if (Object.defineProperty(r, "id", Rt({}, o, {
            get: function () {
                return s
            }, set: function (t) {
                s = "" + t
            }
        })), Object.defineProperty(r, "pauseOnExit", Rt({}, o, {
            get: function () {
                return a
            }, set: function (t) {
                a = !!t
            }
        })), Object.defineProperty(r, "startTime", Rt({}, o, {
            get: function () {
                return l
            }, set: function (t) {
                if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                l = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "endTime", Rt({}, o, {
            get: function () {
                return c
            }, set: function (t) {
                if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                c = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "text", Rt({}, o, {
            get: function () {
                return u
            }, set: function (t) {
                u = "" + t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "region", Rt({}, o, {
            get: function () {
                return h
            }, set: function (t) {
                h = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "vertical", Rt({}, o, {
            get: function () {
                return p
            }, set: function (t) {
                var e = Lt(t);
                if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                p = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "snapToLines", Rt({}, o, {
            get: function () {
                return d
            }, set: function (t) {
                d = !!t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "line", Rt({}, o, {
            get: function () {
                return f
            }, set: function (t) {
                if ("number" != typeof t && t !== Pr) throw new SyntaxError("An invalid number or illegal string was specified.");
                f = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "lineAlign", Rt({}, o, {
            get: function () {
                return v
            }, set: function (t) {
                var e = Ft(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                v = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "position", Rt({}, o, {
            get: function () {
                return y
            }, set: function (t) {
                if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                y = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "positionAlign", Rt({}, o, {
            get: function () {
                return g
            }, set: function (t) {
                var e = Ft(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                g = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "size", Rt({}, o, {
            get: function () {
                return m
            }, set: function (t) {
                if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                m = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(r, "align", Rt({}, o, {
            get: function () {
                return b
            }, set: function (t) {
                var e = Ft(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                b = e, this.hasBeenReset = !0
            }
        })), r.displayState = void 0, i) return r
    }

    function Ht(t) {
        return "string" == typeof t && !!Fr[t.toLowerCase()] && t.toLowerCase()
    }

    function $t(t) {
        return "number" == typeof t && t >= 0 && t <= 100
    }

    function qt() {
        var t = 100, e = 3, n = 0, r = 100, i = 0, o = 100, s = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0, get: function () {
                    return t
                }, set: function (e) {
                    if (!$t(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            }, lines: {
                enumerable: !0, get: function () {
                    return e
                }, set: function (t) {
                    if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            }, regionAnchorY: {
                enumerable: !0, get: function () {
                    return r
                }, set: function (t) {
                    if (!$t(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    r = t
                }
            }, regionAnchorX: {
                enumerable: !0, get: function () {
                    return n
                }, set: function (t) {
                    if (!$t(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    n = t
                }
            }, viewportAnchorY: {
                enumerable: !0, get: function () {
                    return o
                }, set: function (t) {
                    if (!$t(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    o = t
                }
            }, viewportAnchorX: {
                enumerable: !0, get: function () {
                    return i
                }, set: function (t) {
                    if (!$t(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    i = t
                }
            }, scroll: {
                enumerable: !0, get: function () {
                    return s
                }, set: function (t) {
                    var e = Ht(t);
                    if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                    s = e
                }
            }
        })
    }

    function Vt(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, o = t.textTracks();
        i.kind = e, n && (i.label = n), r && (i.language = r), i.tech = t;
        var s = new xr.text.TrackClass(i);
        return o.addTrack(s), s
    }

    function Wt(t, e) {
        $r[t] = $r[t] || [], $r[t].push(e)
    }

    function Ut(t, e, n) {
        t.setTimeout(function () {
            return Kt(e, $r[e.type], n, t)
        }, 1)
    }

    function zt(t, e) {
        t.forEach(function (t) {
            return t.setTech && t.setTech(e)
        })
    }

    function Xt(t, e, n) {
        return t.reduceRight(Yt(n), e[n]())
    }

    function Gt(t, e, n, r) {
        return e[n](t.reduce(Yt(n), r))
    }

    function Yt(t) {
        return function (e, n) {
            return n[t] ? n[t](e) : e
        }
    }

    function Kt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments[2], i = arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], a = e[0], l = e.slice(1);
        if ("string" == typeof a) Kt(t, $r[a], n, i, o, s); else if (a) {
            var c = a(i);
            c.setSource(r({}, t), function (e, r) {
                if (e) return Kt(t, l, n, i, o, s);
                o.push(c), Kt(r, t.type === r.type ? l : $r[r.type], n, i, o, s)
            })
        } else l.length ? Kt(t, l, n, i, o, s) : s ? n(t, o) : Kt(t, $r["*"], n, i, o, !0)
    }

    function Jt(t, e) {
        return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
    }

    function Qt(t, e, n) {
        try {
            t.style[e] = n
        } catch (t) {
            return
        }
    }

    function Zt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        t = t < 0 ? 0 : t;
        var n = Math.floor(t % 60), r = Math.floor(t / 60 % 60), i = Math.floor(t / 3600), o = Math.floor(e / 60 % 60),
            s = Math.floor(e / 3600);
        return (isNaN(t) || t === 1 / 0) && (i = r = n = "-"), i = i > 0 || s > 0 ? i + ":" : "", r = ((i || o >= 10) && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n, i + r + n
    }

    function te(t, e) {
        if (e && (t = e(t)), t && "none" !== t) return t
    }

    function ee(t, e) {
        return te(t.options[t.options.selectedIndex].value, e)
    }

    function ne(t, e, n) {
        if (e) for (var r = 0; r < t.options.length; r++) if (te(t.options[r].value, n) === e) {
            t.selectedIndex = r;
            break
        }
    }

    function re(t, e, n) {
        var r = void 0;
        if ("string" == typeof t) {
            var o = re.getPlayers();
            if (0 === t.indexOf("#") && (t = t.slice(1)), o[t]) return e && Ge.warn('Player "' + t + '" is already initialised. Options will not be applied.'), n && o[t].ready(n), o[t];
            r = Je("#" + t)
        } else r = t;
        if (!r || !r.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        if (r.player || po.players[r.playerId]) return r.player || po.players[r.playerId];
        p(r) && !de.body.contains(r) && Ge.warn("The element supplied is not included in the DOM"), e = e || {}, re.hooks("beforesetup").forEach(function (t) {
            var n = t(r, tt(e));
            if (!i(n) || Array.isArray(n)) return void Ge.error("please return an object in beforesetup hooks");
            e = tt(e, n)
        });
        var s = kn.getComponent("Player"), a = new s(r, e, n);
        return re.hooks("setup").forEach(function (t) {
            return t(a)
        }), a
    }

    var ie, oe = "6.6.2",
        se = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    ie = "undefined" != typeof window ? window : void 0 !== se ? se : "undefined" != typeof self ? self : {};
    var ae, le = ie, ce = {}, ue = (Object.freeze || Object)({default: ce}), he = ue && ce || ue,
        pe = void 0 !== se ? se : "undefined" != typeof window ? window : {};
    "undefined" != typeof document ? ae = document : (ae = pe["__GLOBAL_DOCUMENT_CACHE@4"]) || (ae = pe["__GLOBAL_DOCUMENT_CACHE@4"] = he);
    var de = ae, fe = le.navigator && le.navigator.userAgent || "", ve = /AppleWebKit\/([\d.]+)/i.exec(fe),
        ye = ve ? parseFloat(ve.pop()) : null, ge = /iPad/i.test(fe), me = /iPhone/i.test(fe) && !ge,
        be = /iPod/i.test(fe), _e = me || ge || be, Te = function () {
            var t = fe.match(/OS (\d+)_/i);
            return t && t[1] ? t[1] : null
        }(), we = /Android/i.test(fe), Ce = function () {
            var t = fe.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            if (!t) return null;
            var e = t[1] && parseFloat(t[1]), n = t[2] && parseFloat(t[2]);
            return e && n ? parseFloat(t[1] + "." + t[2]) : e || null
        }(), ke = we && /webkit/i.test(fe) && Ce < 2.3, xe = we && Ce < 5 && ye < 537, Ee = /Firefox/i.test(fe),
        Se = /Edge/i.test(fe), je = !Se && /Chrome/i.test(fe), Ae = function () {
            var t = fe.match(/Chrome\/(\d+)/);
            return t && t[1] ? parseFloat(t[1]) : null
        }(), Oe = /MSIE\s8\.0/.test(fe), De = function () {
            var t = /MSIE\s(\d+)\.\d/.exec(fe), e = t && parseFloat(t[1]);
            return !e && /Trident\/7.0/i.test(fe) && /rv:11.0/.test(fe) && (e = 11), e
        }(), Ne = /Safari/i.test(fe) && !je && !we && !Se, Pe = Ne || _e,
        Me = h() && ("ontouchstart" in le || le.DocumentTouch && le.document instanceof le.DocumentTouch),
        Ie = h() && "backgroundSize" in le.document.createElement("video").style, Le = (Object.freeze || Object)({
            IS_IPAD: ge,
            IS_IPHONE: me,
            IS_IPOD: be,
            IS_IOS: _e,
            IOS_VERSION: Te,
            IS_ANDROID: we,
            ANDROID_VERSION: Ce,
            IS_OLD_ANDROID: ke,
            IS_NATIVE_ANDROID: xe,
            IS_FIREFOX: Ee,
            IS_EDGE: Se,
            IS_CHROME: je,
            CHROME_VERSION: Ae,
            IS_IE8: Oe,
            IE_VERSION: De,
            IS_SAFARI: Ne,
            IS_ANY_SAFARI: Pe,
            TOUCH_ENABLED: Me,
            BACKGROUND_SIZE_SUPPORTED: Ie
        }), Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Re = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, Be = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }, He = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }, $e = function (t, e) {
            return t.raw = e, t
        }, qe = Object.prototype.toString, Ve = function (t) {
            return i(t) ? Object.keys(t) : []
        }, We = void 0, Ue = "info", ze = [], Xe = function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!De && De < 11, r = We.levels[Ue],
                o = new RegExp("^(" + r + ")$");
            if ("log" !== t && e.unshift(t.toUpperCase() + ":"), ze && ze.push([].concat(e)), e.unshift("VIDEOJS:"), le.console) {
                var s = le.console[t];
                s || "debug" !== t || (s = le.console.info || le.console.log), s && r && o.test(t) && (n && (e = e.map(function (t) {
                    if (i(t) || Array.isArray(t)) try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return String(t)
                    }
                    return String(t)
                }).join(" ")), s.apply ? s[Array.isArray(e) ? "apply" : "call"](le.console, e) : s(e))
            }
        };
    We = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        Xe("log", e)
    }, We.levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: Ue
    }, We.level = function (t) {
        if ("string" == typeof t) {
            if (!We.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
            Ue = t
        }
        return Ue
    }, We.history = function () {
        return ze ? [].concat(ze) : []
    }, We.history.clear = function () {
        ze && (ze.length = 0)
    }, We.history.disable = function () {
        null !== ze && (ze.length = 0, ze = null)
    }, We.history.enable = function () {
        null === ze && (ze = [])
    }, We.error = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Xe("error", e)
    }, We.warn = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Xe("warn", e)
    }, We.debug = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Xe("debug", e)
    };
    var Ge = We, Ye = function (t) {
            for (var e = "", n = 0; n < arguments.length; n++) e += s(t[n]) + (arguments[n + 1] || "");
            return e
        },
        Ke = $e(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
        Je = f("querySelector"), Qe = f("querySelectorAll"), Ze = (Object.freeze || Object)({
            isReal: h,
            isEl: p,
            isInFrame: d,
            createEl: v,
            textContent: y,
            prependTo: g,
            hasClass: m,
            addClass: b,
            removeClass: _,
            toggleClass: T,
            setAttributes: w,
            getAttributes: C,
            getAttribute: k,
            setAttribute: x,
            removeAttribute: E,
            blockTextSelection: S,
            unblockTextSelection: j,
            getBoundingClientRect: A,
            findPosition: O,
            getPointerPosition: D,
            isTextNode: N,
            emptyEl: P,
            normalizeContent: M,
            appendContent: I,
            insertContent: L,
            isSingleLeftClick: F,
            $: Je,
            $$: Qe
        }), tn = 1, en = {}, nn = "vdata" + (new Date).getTime(), rn = !1;
    !function () {
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function () {
                    rn = !0
                }
            });
            le.addEventListener("test", null, t), le.removeEventListener("test", null, t)
        } catch (t) {
        }
    }();
    var on = ["touchstart", "touchmove"],
        sn = (Object.freeze || Object)({fixEvent: W, on: U, off: z, trigger: X, one: G}), an = !1, ln = void 0,
        cn = function () {
            if (h()) {
                var t = de.getElementsByTagName("video"), e = de.getElementsByTagName("audio"),
                    n = de.getElementsByTagName("video-js"), r = [];
                if (t && t.length > 0) for (var i = 0, o = t.length; i < o; i++) r.push(t[i]);
                if (e && e.length > 0) for (var s = 0, a = e.length; s < a; s++) r.push(e[s]);
                if (n && n.length > 0) for (var l = 0, c = n.length; l < c; l++) r.push(n[l]);
                if (r && r.length > 0) for (var u = 0, p = r.length; u < p; u++) {
                    var d = r[u];
                    if (!d || !d.getAttribute) {
                        Y(1);
                        break
                    }
                    if (void 0 === d.player) {
                        var f = d.getAttribute("data-setup");
                        null !== f && ln(d)
                    }
                } else an || Y(1)
            }
        };
    h() && "complete" === de.readyState ? an = !0 : G(le, "load", function () {
        an = !0
    });
    var un = function (t) {
        var e = de.createElement("style");
        return e.className = t, e
    }, hn = function (t, e) {
        t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
    }, pn = function (t, e, n) {
        e.guid || (e.guid = R());
        var r = function () {
            return e.apply(t, arguments)
        };
        return r.guid = n ? n + "_" + e.guid : e.guid, r
    }, dn = function (t, e) {
        var n = Date.now();
        return function () {
            var r = Date.now();
            r - n >= e && (t.apply(void 0, arguments), n = r)
        }
    }, fn = function () {
    };
    fn.prototype.allowedEvents_ = {}, fn.prototype.on = function (t, e) {
        var n = this.addEventListener;
        this.addEventListener = function () {
        }, U(this, t, e), this.addEventListener = n
    }, fn.prototype.addEventListener = fn.prototype.on, fn.prototype.off = function (t, e) {
        z(this, t, e)
    }, fn.prototype.removeEventListener = fn.prototype.off, fn.prototype.one = function (t, e) {
        var n = this.addEventListener;
        this.addEventListener = function () {
        }, G(this, t, e), this.addEventListener = n
    }, fn.prototype.trigger = function (t) {
        var e = t.type || t;
        "string" == typeof t && (t = {type: e}), t = W(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), X(this, t)
    }, fn.prototype.dispatchEvent = fn.prototype.trigger;
    var vn = function (t) {
        return t instanceof fn || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (e) {
            return "function" == typeof t[e]
        })
    }, yn = function (t) {
        return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
    }, gn = function (t) {
        if (!t.nodeName && !vn(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
    }, mn = function (t) {
        if (!yn(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
    }, bn = function (t) {
        if ("function" != typeof t) throw new Error("Invalid listener; must be a function.")
    }, _n = function (t, e) {
        var n = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_, r = void 0, i = void 0, o = void 0;
        return n ? (r = t.eventBusEl_, e.length >= 3 && e.shift(), i = e[0], o = e[1]) : (r = e[0], i = e[1], o = e[2]), gn(r), mn(i), bn(o), o = pn(t, o), {
            isTargetingSelf: n,
            target: r,
            type: i,
            listener: o
        }
    }, Tn = function (t, e, n, r) {
        gn(t), t.nodeName ? sn[e](t, n, r) : t[e](n, r)
    }, wn = {
        on: function () {
            for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var i = _n(this, n), o = i.isTargetingSelf, s = i.target, a = i.type, l = i.listener;
            if (Tn(s, "on", a, l), !o) {
                var c = function () {
                    return t.off(s, a, l)
                };
                c.guid = l.guid;
                var u = function () {
                    return t.off("dispose", c)
                };
                u.guid = l.guid, Tn(this, "on", "dispose", c), Tn(s, "on", "dispose", u)
            }
        }, one: function () {
            for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var i = _n(this, n), o = i.isTargetingSelf, s = i.target, a = i.type, l = i.listener;
            if (o) Tn(s, "one", a, l); else {
                var c = function e() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    t.off(s, a, e), l.apply(null, r)
                };
                c.guid = l.guid, Tn(s, "one", a, c)
            }
        }, off: function (t, e, n) {
            if (!t || yn(t)) z(this.eventBusEl_, t, e); else {
                var r = t, i = e;
                gn(r), mn(i), bn(n), n = pn(this, n), this.off("dispose", n), r.nodeName ? (z(r, i, n), z(r, "dispose", n)) : vn(r) && (r.off(i, n), r.off("dispose", n))
            }
        }, trigger: function (t, e) {
            return X(this.eventBusEl_, t, e)
        }
    }, Cn = {
        state: {}, setState: function (t) {
            var n = this;
            "function" == typeof t && (t = t());
            var r = void 0;
            return e(t, function (t, e) {
                n.state[e] !== t && (r = r || {}, r[e] = {from: n.state[e], to: t}), n.state[e] = t
            }), r && vn(this) && this.trigger({changes: r, type: "statechanged"}), r
        }
    }, kn = function () {
        function t(e, n, r) {
            if (Re(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = tt({}, this.options_), n = this.options_ = tt(this.options_, n), this.id_ = n.id || n.el && n.el.id, !this.id_) {
                var i = e && e.id && e.id() || "no_player";
                this.id_ = i + "_component_" + R()
            }
            this.name_ = n.name || null, n.el ? this.el_ = n.el : !1 !== n.createEl && (this.el_ = this.createEl()), !1 !== n.evented && K(this, {eventBusKey: this.el_ ? "el_" : null}), J(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== n.initChildren && this.initChildren(), this.ready(r), !1 !== n.reportTouchActivity && this.enableTouchActivity()
        }

        return t.prototype.dispose = function () {
            if (this.trigger({
                type: "dispose",
                bubbles: !1
            }), this.children_) for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), $(this.el_), this.el_ = null), this.player_ = null
        }, t.prototype.player = function () {
            return this.player_
        }, t.prototype.options = function (t) {
            return Ge.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = tt(this.options_, t), this.options_) : this.options_
        }, t.prototype.el = function () {
            return this.el_
        }, t.prototype.createEl = function (t, e, n) {
            return v(t, e, n)
        }, t.prototype.localize = function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                r = this.player_.language && this.player_.language(),
                i = this.player_.languages && this.player_.languages(), o = i && i[r], s = r && r.split("-")[0],
                a = i && i[s], l = n;
            return o && o[t] ? l = o[t] : a && a[t] && (l = a[t]), e && (l = l.replace(/\{(\d+)\}/g, function (t, n) {
                var r = e[n - 1], i = r;
                return void 0 === r && (i = t), i
            })), l
        }, t.prototype.contentEl = function () {
            return this.contentEl_ || this.el_
        }, t.prototype.id = function () {
            return this.id_
        }, t.prototype.name = function () {
            return this.name_
        }, t.prototype.children = function () {
            return this.children_
        }, t.prototype.getChildById = function (t) {
            return this.childIndex_[t]
        }, t.prototype.getChild = function (t) {
            if (t) return t = Q(t), this.childNameIndex_[t]
        }, t.prototype.addChild = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length, i = void 0,
                o = void 0;
            if ("string" == typeof e) {
                o = Q(e);
                var s = n.componentClass || o;
                n.name = o;
                var a = t.getComponent(s);
                if (!a) throw new Error("Component " + s + " does not exist");
                if ("function" != typeof a) return null;
                i = new a(this.player_ || this, n)
            } else i = e;
            if (this.children_.splice(r, 0, i), "function" == typeof i.id && (this.childIndex_[i.id()] = i), o = o || i.name && Q(i.name()), o && (this.childNameIndex_[o] = i), "function" == typeof i.el && i.el()) {
                var l = this.contentEl().children, c = l[r] || null;
                this.contentEl().insertBefore(i.el(), c)
            }
            return i
        }, t.prototype.removeChild = function (t) {
            if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                for (var e = !1, n = this.children_.length - 1; n >= 0; n--) if (this.children_[n] === t) {
                    e = !0, this.children_.splice(n, 1);
                    break
                }
                if (e) {
                    this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                    var r = t.el();
                    r && r.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                }
            }
        }, t.prototype.initChildren = function () {
            var e = this, n = this.options_.children;
            if (n) {
                var r = this.options_, i = function (t) {
                    var n = t.name, i = t.opts;
                    if (void 0 !== r[n] && (i = r[n]), !1 !== i) {
                        !0 === i && (i = {}), i.playerOptions = e.options_.playerOptions;
                        var o = e.addChild(n, i);
                        o && (e[n] = o)
                    }
                }, o = void 0, s = t.getComponent("Tech");
                o = Array.isArray(n) ? n : Object.keys(n), o.concat(Object.keys(this.options_).filter(function (t) {
                    return !o.some(function (e) {
                        return "string" == typeof e ? t === e : t === e.name
                    })
                })).map(function (t) {
                    var r = void 0, i = void 0;
                    return "string" == typeof t ? (r = t, i = n[r] || e.options_[r] || {}) : (r = t.name, i = t), {
                        name: r,
                        opts: i
                    }
                }).filter(function (e) {
                    var n = t.getComponent(e.opts.componentClass || Q(e.name));
                    return n && !s.isTech(n)
                }).forEach(i)
            }
        }, t.prototype.buildCSSClass = function () {
            return ""
        }, t.prototype.ready = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t) return this.isReady_ ? void (e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
        }, t.prototype.triggerReady = function () {
            this.isReady_ = !0, this.setTimeout(function () {
                var t = this.readyQueue_;
                this.readyQueue_ = [], t && t.length > 0 && t.forEach(function (t) {
                    t.call(this)
                }, this), this.trigger("ready")
            }, 1)
        }, t.prototype.$ = function (t, e) {
            return Je(t, e || this.contentEl())
        }, t.prototype.$$ = function (t, e) {
            return Qe(t, e || this.contentEl())
        }, t.prototype.hasClass = function (t) {
            return m(this.el_, t)
        }, t.prototype.addClass = function (t) {
            b(this.el_, t)
        }, t.prototype.removeClass = function (t) {
            _(this.el_, t)
        }, t.prototype.toggleClass = function (t, e) {
            T(this.el_, t, e)
        }, t.prototype.show = function () {
            this.removeClass("vjs-hidden")
        }, t.prototype.hide = function () {
            this.addClass("vjs-hidden")
        }, t.prototype.lockShowing = function () {
            this.addClass("vjs-lock-showing")
        }, t.prototype.unlockShowing = function () {
            this.removeClass("vjs-lock-showing")
        }, t.prototype.getAttribute = function (t) {
            return k(this.el_, t)
        }, t.prototype.setAttribute = function (t, e) {
            x(this.el_, t, e)
        }, t.prototype.removeAttribute = function (t) {
            E(this.el_, t)
        }, t.prototype.width = function (t, e) {
            return this.dimension("width", t, e)
        }, t.prototype.height = function (t, e) {
            return this.dimension("height", t, e)
        }, t.prototype.dimensions = function (t, e) {
            this.width(t, !0), this.height(e)
        }, t.prototype.dimension = function (t, e, n) {
            if (void 0 !== e) return null !== e && e === e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void (n || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var r = this.el_.style[t], i = r.indexOf("px");
            return -1 !== i ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + Q(t)], 10)
        }, t.prototype.currentDimension = function (t) {
            var e = 0;
            if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof le.getComputedStyle) {
                var n = le.getComputedStyle(this.el_);
                e = n.getPropertyValue(t) || n[t]
            }
            if (0 === (e = parseFloat(e))) {
                var r = "offset" + Q(t);
                e = this.el_[r]
            }
            return e
        }, t.prototype.currentDimensions = function () {
            return {width: this.currentDimension("width"), height: this.currentDimension("height")}
        }, t.prototype.currentWidth = function () {
            return this.currentDimension("width")
        }, t.prototype.currentHeight = function () {
            return this.currentDimension("height")
        }, t.prototype.focus = function () {
            this.el_.focus()
        }, t.prototype.blur = function () {
            this.el_.blur()
        }, t.prototype.emitTapEvents = function () {
            var t = 0, e = null, n = void 0;
            this.on("touchstart", function (r) {
                1 === r.touches.length && (e = {
                    pageX: r.touches[0].pageX,
                    pageY: r.touches[0].pageY
                }, t = (new Date).getTime(), n = !0)
            }), this.on("touchmove", function (t) {
                if (t.touches.length > 1) n = !1; else if (e) {
                    var r = t.touches[0].pageX - e.pageX, i = t.touches[0].pageY - e.pageY,
                        o = Math.sqrt(r * r + i * i);
                    o > 10 && (n = !1)
                }
            });
            var r = function () {
                n = !1
            };
            this.on("touchleave", r), this.on("touchcancel", r), this.on("touchend", function (r) {
                e = null, !0 === n && (new Date).getTime() - t < 200 && (r.preventDefault(), this.trigger("tap"))
            })
        }, t.prototype.enableTouchActivity = function () {
            if (this.player() && this.player().reportUserActivity) {
                var t = pn(this.player(), this.player().reportUserActivity), e = void 0;
                this.on("touchstart", function () {
                    t(), this.clearInterval(e), e = this.setInterval(t, 250)
                });
                var n = function (n) {
                    t(), this.clearInterval(e)
                };
                this.on("touchmove", t), this.on("touchend", n), this.on("touchcancel", n)
            }
        }, t.prototype.setTimeout = function (t, e) {
            var n = this;
            t = pn(this, t);
            var r = le.setTimeout(t, e), i = function () {
                return n.clearTimeout(r)
            };
            return i.guid = "vjs-timeout-" + r, this.on("dispose", i), r
        }, t.prototype.clearTimeout = function (t) {
            le.clearTimeout(t);
            var e = function () {
            };
            return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
        }, t.prototype.setInterval = function (t, e) {
            var n = this;
            t = pn(this, t);
            var r = le.setInterval(t, e), i = function () {
                return n.clearInterval(r)
            };
            return i.guid = "vjs-interval-" + r, this.on("dispose", i), r
        }, t.prototype.clearInterval = function (t) {
            le.clearInterval(t);
            var e = function () {
            };
            return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
        }, t.prototype.requestAnimationFrame = function (t) {
            var e = this;
            if (this.supportsRaf_) {
                t = pn(this, t);
                var n = le.requestAnimationFrame(t), r = function () {
                    return e.cancelAnimationFrame(n)
                };
                return r.guid = "vjs-raf-" + n, this.on("dispose", r), n
            }
            return this.setTimeout(t, 1e3 / 60)
        }, t.prototype.cancelAnimationFrame = function (t) {
            if (this.supportsRaf_) {
                le.cancelAnimationFrame(t);
                var e = function () {
                };
                return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
            }
            return this.clearTimeout(t)
        }, t.registerComponent = function (e, n) {
            if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
            var r = t.getComponent("Tech"), i = r && r.isTech(n), o = t === n || t.prototype.isPrototypeOf(n.prototype);
            if (i || !o) {
                var s = void 0;
                throw s = i ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + s + ".")
            }
            e = Q(e), t.components_ || (t.components_ = {});
            var a = t.getComponent("Player");
            if ("Player" === e && a && a.players) {
                var l = a.players, c = Object.keys(l);
                if (l && c.length > 0 && c.map(function (t) {
                    return l[t]
                }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return t.components_[e] = n, n
        }, t.getComponent = function (e) {
            if (e) return e = Q(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
        }, t
    }();
    kn.prototype.supportsRaf_ = "function" == typeof le.requestAnimationFrame && "function" == typeof le.cancelAnimationFrame, kn.registerComponent("Component", kn);
    for (var xn = {}, En = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], Sn = En[0], jn = void 0, An = 0; An < En.length; An++) if (En[An][1] in de) {
        jn = En[An];
        break
    }
    if (jn) for (var On = 0; On < jn.length; On++) xn[Sn[On]] = jn[On];
    st.prototype.code = 0, st.prototype.message = "", st.prototype.status = null, st.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], st.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var Dn = 0; Dn < st.errorTypes.length; Dn++) st[st.errorTypes[Dn]] = Dn, st.prototype[st.errorTypes[Dn]] = Dn;
    var Nn = at, Pn = function (t) {
        return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (e, n, r) {
            return t[n] && (e[n] = t[n]), e
        }, {
            cues: t.cues && Array.prototype.map.call(t.cues, function (t) {
                return {startTime: t.startTime, endTime: t.endTime, text: t.text, id: t.id}
            })
        })
    }, Mn = function (t) {
        var e = t.$$("track"), n = Array.prototype.map.call(e, function (t) {
            return t.track
        });
        return Array.prototype.map.call(e, function (t) {
            var e = Pn(t.track);
            return t.src && (e.src = t.src), e
        }).concat(Array.prototype.filter.call(t.textTracks(), function (t) {
            return -1 === n.indexOf(t)
        }).map(Pn))
    }, In = function (t, e) {
        return t.forEach(function (t) {
            var n = e.addRemoteTextTrack(t).track;
            !t.src && t.cues && t.cues.forEach(function (t) {
                return n.addCue(t)
            })
        }), e.textTracks()
    }, Ln = {textTracksToJson: Mn, jsonToTextTracks: In, trackToJson_: Pn}, Fn = "vjs-modal-dialog", Rn = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = v("div", {className: Fn + "-content"}, {role: "document"}), i.descEl_ = v("p", {
                className: Fn + "-description vjs-control-text",
                id: i.el().getAttribute("aria-describedby")
            }), y(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            }, {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            })
        }, e.prototype.dispose = function () {
            this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.buildCSSClass = function () {
            return Fn + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleKeyPress = function (t) {
            27 === t.which && this.closeable() && this.close()
        }, e.prototype.label = function () {
            return this.localize(this.options_.label || "Modal Window")
        }, e.prototype.description = function () {
            var t = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
        }, e.prototype.open = function () {
            if (!this.opened_) {
                var t = this.player();
                this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", pn(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
            }
        }, e.prototype.opened = function (t) {
            return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
        }, e.prototype.close = function () {
            if (this.opened_) {
                var t = this.player();
                this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", pn(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
            }
        }, e.prototype.closeable = function (t) {
            if ("boolean" == typeof t) {
                var e = this.closeable_ = !!t, n = this.getChild("closeButton");
                if (e && !n) {
                    var r = this.contentEl_;
                    this.contentEl_ = this.el_, n = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = r, this.on(n, "close", this.close)
                }
                !e && n && (this.off(n, "close", this.close), this.removeChild(n), n.dispose())
            }
            return this.closeable_
        }, e.prototype.fill = function () {
            this.fillWith(this.content())
        }, e.prototype.fillWith = function (t) {
            var e = this.contentEl(), n = e.parentNode, r = e.nextSibling;
            this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, n.removeChild(e), this.empty(), L(e, t), this.trigger("modalfill"), r ? n.insertBefore(e, r) : n.appendChild(e);
            var i = this.getChild("closeButton");
            i && n.appendChild(i.el_)
        }, e.prototype.empty = function () {
            this.trigger("beforemodalempty"), P(this.contentEl()), this.trigger("modalempty")
        }, e.prototype.content = function (t) {
            return void 0 !== t && (this.content_ = t), this.content_
        }, e.prototype.conditionalFocus_ = function () {
            var t = de.activeElement, e = this.player_.el_;
            this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(de, "keydown", this.handleKeyDown))
        }, e.prototype.conditionalBlur_ = function () {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(de, "keydown", this.handleKeyDown)
        }, e.prototype.handleKeyDown = function (t) {
            if (9 === t.which) {
                for (var e = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = void 0, i = 0; i < e.length; i++) if (n === e[i]) {
                    r = i;
                    break
                }
                de.activeElement === this.el_ && (r = 0), t.shiftKey && 0 === r ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || r !== e.length - 1 || (e[0].focus(), t.preventDefault())
            }
        }, e.prototype.focusableEls_ = function () {
            var t = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(t, function (t) {
                return (t instanceof le.HTMLAnchorElement || t instanceof le.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof le.HTMLInputElement || t instanceof le.HTMLSelectElement || t instanceof le.HTMLTextAreaElement || t instanceof le.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof le.HTMLIFrameElement || t instanceof le.HTMLObjectElement || t instanceof le.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
            })
        }, e
    }(kn);
    Rn.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, kn.registerComponent("ModalDialog", Rn);
    var Bn = function (t) {
        function e() {
            var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            Re(this, e);
            var o = He(this, t.call(this));
            if (!i && (i = o, Oe)) {
                i = de.createElement("custom");
                for (var s in e.prototype) "constructor" !== s && (i[s] = e.prototype[s])
            }
            i.tracks_ = [], Object.defineProperty(i, "length", {
                get: function () {
                    return this.tracks_.length
                }
            });
            for (var a = 0; a < r.length; a++) i.addTrack(r[a]);
            return n = i, He(o, n)
        }

        return Be(e, t), e.prototype.addTrack = function (t) {
            var e = this.tracks_.length;
            "" + e in this || Object.defineProperty(this, e, {
                get: function () {
                    return this.tracks_[e]
                }
            }), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({track: t, type: "addtrack"}))
        }, e.prototype.removeTrack = function (t) {
            for (var e = void 0, n = 0, r = this.length; n < r; n++) if (this[n] === t) {
                e = this[n], e.off && e.off(), this.tracks_.splice(n, 1);
                break
            }
            e && this.trigger({track: e, type: "removetrack"})
        }, e.prototype.getTrackById = function (t) {
            for (var e = null, n = 0, r = this.length; n < r; n++) {
                var i = this[n];
                if (i.id === t) {
                    e = i;
                    break
                }
            }
            return e
        }, e
    }(fn);
    Bn.prototype.allowedEvents_ = {change: "change", addtrack: "addtrack", removetrack: "removetrack"};
    for (var Hn in Bn.prototype.allowedEvents_) Bn.prototype["on" + Hn] = null;
    var $n = function (t, e) {
            for (var n = 0; n < t.length; n++) Object.keys(t[n]).length && e.id !== t[n].id && (t[n].enabled = !1)
        }, qn = function (t) {
            function e() {
                var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                Re(this, e);
                for (var o = void 0, s = i.length - 1; s >= 0; s--) if (i[s].enabled) {
                    $n(i, i[s]);
                    break
                }
                if (Oe) {
                    o = de.createElement("custom");
                    for (var a in Bn.prototype) "constructor" !== a && (o[a] = Bn.prototype[a]);
                    for (var l in e.prototype) "constructor" !== l && (o[l] = e.prototype[l])
                }
                return o = n = He(this, t.call(this, i, o)), o.changing_ = !1, r = o, He(n, r)
            }

            return Be(e, t), e.prototype.addTrack = function (e) {
                var n = this;
                e.enabled && $n(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function () {
                    n.changing_ || (n.changing_ = !0, $n(n, e), n.changing_ = !1, n.trigger("change"))
                })
            }, e
        }(Bn), Vn = function (t, e) {
            for (var n = 0; n < t.length; n++) Object.keys(t[n]).length && e.id !== t[n].id && (t[n].selected = !1)
        }, Wn = function (t) {
            function e() {
                var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                Re(this, e);
                for (var o = void 0, s = i.length - 1; s >= 0; s--) if (i[s].selected) {
                    Vn(i, i[s]);
                    break
                }
                if (Oe) {
                    o = de.createElement("custom");
                    for (var a in Bn.prototype) "constructor" !== a && (o[a] = Bn.prototype[a]);
                    for (var l in e.prototype) "constructor" !== l && (o[l] = e.prototype[l])
                }
                return o = n = He(this, t.call(this, i, o)), o.changing_ = !1, Object.defineProperty(o, "selectedIndex", {
                    get: function () {
                        for (var t = 0; t < this.length; t++) if (this[t].selected) return t;
                        return -1
                    }, set: function () {
                    }
                }), r = o, He(n, r)
            }

            return Be(e, t), e.prototype.addTrack = function (e) {
                var n = this;
                e.selected && Vn(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function () {
                    n.changing_ || (n.changing_ = !0, Vn(n, e), n.changing_ = !1, n.trigger("change"))
                })
            }, e
        }(Bn), Un = function (t) {
            function e() {
                var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                Re(this, e);
                var o = void 0;
                if (Oe) {
                    o = de.createElement("custom");
                    for (var s in Bn.prototype) "constructor" !== s && (o[s] = Bn.prototype[s]);
                    for (var a in e.prototype) "constructor" !== a && (o[a] = e.prototype[a])
                }
                return o = n = He(this, t.call(this, i, o)), r = o, He(n, r)
            }

            return Be(e, t), e.prototype.addTrack = function (e) {
                t.prototype.addTrack.call(this, e), e.addEventListener("modechange", pn(this, function () {
                    this.trigger("change")
                })), -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", pn(this, function () {
                    this.trigger("selectedlanguagechange")
                }))
            }, e
        }(Bn), zn = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                Re(this, t);
                var n = this;
                if (Oe) {
                    n = de.createElement("custom");
                    for (var r in t.prototype) "constructor" !== r && (n[r] = t.prototype[r])
                }
                n.trackElements_ = [], Object.defineProperty(n, "length", {
                    get: function () {
                        return this.trackElements_.length
                    }
                });
                for (var i = 0, o = e.length; i < o; i++) n.addTrackElement_(e[i]);
                if (Oe) return n
            }

            return t.prototype.addTrackElement_ = function (t) {
                var e = this.trackElements_.length;
                "" + e in this || Object.defineProperty(this, e, {
                    get: function () {
                        return this.trackElements_[e]
                    }
                }), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
            }, t.prototype.getTrackElementByTrack_ = function (t) {
                for (var e = void 0, n = 0, r = this.trackElements_.length; n < r; n++) if (t === this.trackElements_[n].track) {
                    e = this.trackElements_[n];
                    break
                }
                return e
            }, t.prototype.removeTrackElement_ = function (t) {
                for (var e = 0, n = this.trackElements_.length; e < n; e++) if (t === this.trackElements_[e]) {
                    this.trackElements_.splice(e, 1);
                    break
                }
            }, t
        }(), Xn = function () {
            function t(e) {
                Re(this, t);
                var n = this;
                if (Oe) {
                    n = de.createElement("custom");
                    for (var r in t.prototype) "constructor" !== r && (n[r] = t.prototype[r])
                }
                if (t.prototype.setCues_.call(n, e), Object.defineProperty(n, "length", {
                    get: function () {
                        return this.length_
                    }
                }), Oe) return n
            }

            return t.prototype.setCues_ = function (t) {
                var e = this.length || 0, n = 0, r = t.length;
                this.cues_ = t, this.length_ = t.length;
                var i = function (t) {
                    "" + t in this || Object.defineProperty(this, "" + t, {
                        get: function () {
                            return this.cues_[t]
                        }
                    })
                };
                if (e < r) for (n = e; n < r; n++) i.call(this, n)
            }, t.prototype.getCueById = function (t) {
                for (var e = null, n = 0, r = this.length; n < r; n++) {
                    var i = this[n];
                    if (i.id === t) {
                        e = i;
                        break
                    }
                }
                return e
            }, t
        }(), Gn = {
            alternative: "alternative",
            captions: "captions",
            main: "main",
            sign: "sign",
            subtitles: "subtitles",
            commentary: "commentary"
        }, Yn = {
            alternative: "alternative",
            descriptions: "descriptions",
            main: "main",
            "main-desc": "main-desc",
            translation: "translation",
            commentary: "commentary"
        }, Kn = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        }, Jn = {disabled: "disabled", hidden: "hidden", showing: "showing"}, Qn = function (t) {
            function e() {
                var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Re(this, e);
                var i = He(this, t.call(this)), o = i;
                if (Oe) {
                    o = de.createElement("custom");
                    for (var s in e.prototype) "constructor" !== s && (o[s] = e.prototype[s])
                }
                var a = {
                    id: r.id || "vjs_track_" + R(),
                    kind: r.kind || "",
                    label: r.label || "",
                    language: r.language || ""
                };
                for (var l in a) !function (t) {
                    Object.defineProperty(o, t, {
                        get: function () {
                            return a[t]
                        }, set: function () {
                        }
                    })
                }(l);
                return n = o, He(i, n)
            }

            return Be(e, t), e
        }(fn), Zn = function (t) {
            var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], n = de.createElement("a");
            n.href = t;
            var r = "" === n.host && "file:" !== n.protocol, i = void 0;
            r && (i = de.createElement("div"), i.innerHTML = '<a href="' + t + '"></a>', n = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), de.body.appendChild(i));
            for (var o = {}, s = 0; s < e.length; s++) o[e[s]] = n[e[s]];
            return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")), "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")), o.protocol || (o.protocol = le.location.protocol), r && de.body.removeChild(i), o
        }, tr = function (t) {
            if (!t.match(/^https?:\/\//)) {
                var e = de.createElement("div");
                e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
            }
            return t
        }, er = function (t) {
            if ("string" == typeof t) {
                var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i, n = e.exec(t);
                if (n) return n.pop().toLowerCase()
            }
            return ""
        }, nr = function (t) {
            var e = le.location, n = Zn(t);
            return (":" === n.protocol ? e.protocol : n.protocol) + n.host !== e.protocol + e.host
        }, rr = (Object.freeze || Object)({parseUrl: Zn, getAbsoluteURL: tr, getFileExtension: er, isCrossOrigin: nr}),
        ir = ut, or = Object.prototype.toString, sr = t(function (t, e) {
            function n(t) {
                return t.replace(/^\s*|\s*$/g, "")
            }

            e = t.exports = n, e.left = function (t) {
                return t.replace(/^\s*/, "")
            }, e.right = function (t) {
                return t.replace(/\s*$/, "")
            }
        }), ar = ht, lr = Object.prototype.toString, cr = Object.prototype.hasOwnProperty, ur = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, hr = function (t) {
            if (!t) return {};
            var e = {};
            return ar(sr(t).split("\n"), function (t) {
                var n = t.indexOf(":"), r = sr(t.slice(0, n)).toLowerCase(), i = sr(t.slice(n + 1));
                void 0 === e[r] ? e[r] = i : ur(e[r]) ? e[r].push(i) : e[r] = [e[r], i]
            }), e
        }, pr = vt, dr = Object.prototype.hasOwnProperty, fr = mt;
    mt.XMLHttpRequest = le.XMLHttpRequest || Tt, mt.XDomainRequest = "withCredentials" in new mt.XMLHttpRequest ? mt.XMLHttpRequest : le.XDomainRequest, function (t, e) {
        for (var n = 0; n < t.length; n++) !function (t) {
            mt["delete" === t ? "del" : t] = function (e, n, r) {
                return n = gt(e, n, r), n.method = t.toUpperCase(), bt(n)
            }
        }(t[n])
    }(["get", "put", "post", "patch", "head", "delete"]);
    var vr = function (t, e) {
        var n = new le.WebVTT.Parser(le, le.vttjs, le.WebVTT.StringDecoder()), r = [];
        n.oncue = function (t) {
            e.addCue(t)
        }, n.onparsingerror = function (t) {
            r.push(t)
        }, n.onflush = function () {
            e.trigger({type: "loadeddata", target: e})
        }, n.parse(t), r.length > 0 && (le.console && le.console.groupCollapsed && le.console.groupCollapsed("Text Track parsing errors for " + e.src), r.forEach(function (t) {
            return Ge.error(t)
        }), le.console && le.console.groupEnd && le.console.groupEnd()), n.flush()
    }, yr = function (t, e) {
        var n = {uri: t}, r = nr(t);
        r && (n.cors = r), fr(n, pn(this, function (t, n, r) {
            if (t) return Ge.error(t, n);
            if (e.loaded_ = !0, "function" != typeof le.WebVTT) {
                if (e.tech_) {
                    var i = function () {
                        return vr(r, e)
                    };
                    e.tech_.on("vttjsloaded", i), e.tech_.on("vttjserror", function () {
                        Ge.error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", i)
                    })
                }
            } else vr(r, e)
        }))
    }, gr = function (t) {
        function e() {
            var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (Re(this, e), !i.tech) throw new Error("A tech was not provided.");
            var o = tt(i, {kind: Kn[i.kind] || "subtitles", language: i.language || i.srclang || ""}),
                s = Jn[o.mode] || "disabled", a = o.default;
            "metadata" !== o.kind && "chapters" !== o.kind || (s = "hidden");
            var l = n = He(this, t.call(this, o));
            if (l.tech_ = o.tech, Oe) for (var c in e.prototype) "constructor" !== c && (l[c] = e.prototype[c]);
            l.cues_ = [], l.activeCues_ = [];
            var u = new Xn(l.cues_), h = new Xn(l.activeCues_), p = !1, d = pn(l, function () {
                this.activeCues, p && (this.trigger("cuechange"), p = !1)
            });
            return "disabled" !== s && l.tech_.ready(function () {
                l.tech_.on("timeupdate", d)
            }, !0), Object.defineProperty(l, "default", {
                get: function () {
                    return a
                }, set: function () {
                }
            }), Object.defineProperty(l, "mode", {
                get: function () {
                    return s
                }, set: function (t) {
                    var e = this;
                    Jn[t] && (s = t, "showing" === s && this.tech_.ready(function () {
                        e.tech_.on("timeupdate", d)
                    }, !0), this.trigger("modechange"))
                }
            }), Object.defineProperty(l, "cues", {
                get: function () {
                    return this.loaded_ ? u : null
                }, set: function () {
                }
            }), Object.defineProperty(l, "activeCues", {
                get: function () {
                    if (!this.loaded_) return null;
                    if (0 === this.cues.length) return h;
                    for (var t = this.tech_.currentTime(), e = [], n = 0, r = this.cues.length; n < r; n++) {
                        var i = this.cues[n];
                        i.startTime <= t && i.endTime >= t ? e.push(i) : i.startTime === i.endTime && i.startTime <= t && i.startTime + .5 >= t && e.push(i)
                    }
                    if (p = !1, e.length !== this.activeCues_.length) p = !0; else for (var o = 0; o < e.length; o++) -1 === this.activeCues_.indexOf(e[o]) && (p = !0);
                    return this.activeCues_ = e, h.setCues_(this.activeCues_), h
                }, set: function () {
                }
            }), o.src ? (l.src = o.src, yr(o.src, l)) : l.loaded_ = !0, r = l, He(n, r)
        }

        return Be(e, t), e.prototype.addCue = function (t) {
            var e = t;
            if (le.vttjs && !(t instanceof le.vttjs.VTTCue)) {
                e = new le.vttjs.VTTCue(t.startTime, t.endTime, t.text);
                for (var n in t) n in e || (e[n] = t[n]);
                e.id = t.id, e.originalCue_ = t
            }
            for (var r = this.tech_.textTracks(), i = 0; i < r.length; i++) r[i] !== this && r[i].removeCue(e);
            this.cues_.push(e), this.cues.setCues_(this.cues_)
        }, e.prototype.removeCue = function (t) {
            for (var e = this.cues_.length; e--;) {
                var n = this.cues_[e];
                if (n === t || n.originalCue_ && n.originalCue_ === t) {
                    this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
                    break
                }
            }
        }, e
    }(Qn);
    gr.prototype.allowedEvents_ = {cuechange: "cuechange"};
    var mr = function (t) {
        function e() {
            var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Re(this, e);
            var o = tt(i, {kind: Yn[i.kind] || ""}), s = n = He(this, t.call(this, o)), a = !1;
            if (Oe) for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
            return Object.defineProperty(s, "enabled", {
                get: function () {
                    return a
                }, set: function (t) {
                    "boolean" == typeof t && t !== a && (a = t, this.trigger("enabledchange"))
                }
            }), o.enabled && (s.enabled = o.enabled), s.loaded_ = !0, r = s, He(n, r)
        }

        return Be(e, t), e
    }(Qn), br = function (t) {
        function e() {
            var n, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Re(this, e);
            var o = tt(i, {kind: Gn[i.kind] || ""}), s = n = He(this, t.call(this, o)), a = !1;
            if (Oe) for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
            return Object.defineProperty(s, "selected", {
                get: function () {
                    return a
                }, set: function (t) {
                    "boolean" == typeof t && t !== a && (a = t, this.trigger("selectedchange"))
                }
            }), o.selected && (s.selected = o.selected), r = s, He(n, r)
        }

        return Be(e, t), e
    }(Qn), _r = 0, Tr = 2, wr = function (t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Re(this, e);
            var r = He(this, t.call(this)), i = void 0, o = r;
            if (Oe) {
                o = de.createElement("custom");
                for (var s in e.prototype) "constructor" !== s && (o[s] = e.prototype[s])
            }
            var a = new gr(n);
            if (o.kind = a.kind, o.src = a.src, o.srclang = a.language, o.label = a.label, o.default = a.default, Object.defineProperty(o, "readyState", {
                get: function () {
                    return i
                }
            }), Object.defineProperty(o, "track", {
                get: function () {
                    return a
                }
            }), i = _r, a.addEventListener("loadeddata", function () {
                i = Tr, o.trigger({type: "load", target: o})
            }), Oe) {
                var l;
                return l = o, He(r, l)
            }
            return r
        }

        return Be(e, t), e
    }(fn);
    wr.prototype.allowedEvents_ = {load: "load"}, wr.NONE = _r, wr.LOADING = 1, wr.LOADED = Tr, wr.ERROR = 3;
    var Cr = {
        audio: {ListClass: qn, TrackClass: mr, capitalName: "Audio"},
        video: {ListClass: Wn, TrackClass: br, capitalName: "Video"},
        text: {ListClass: Un, TrackClass: gr, capitalName: "Text"}
    };
    Object.keys(Cr).forEach(function (t) {
        Cr[t].getterName = t + "Tracks", Cr[t].privateName = t + "Tracks_"
    });
    var kr = {
        remoteText: {
            ListClass: Un,
            TrackClass: gr,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        },
        remoteTextEl: {
            ListClass: zn,
            TrackClass: wr,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    }, xr = tt(Cr, kr);
    kr.names = Object.keys(kr), Cr.names = Object.keys(Cr), xr.names = [].concat(kr.names).concat(Cr.names);
    var Er = Object.create || function () {
        function t() {
        }

        return function (e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();
    wt.prototype = Er(Error.prototype), wt.prototype.constructor = wt, wt.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
    }, kt.prototype = {
        set: function (t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        }, get: function (t, e, n) {
            return n ? this.has(t) ? this.values[t] : e[n] : this.has(t) ? this.values[t] : e
        }, has: function (t) {
            return t in this.values
        }, alt: function (t, e, n) {
            for (var r = 0; r < n.length; ++r) if (e === n[r]) {
                this.set(t, e);
                break
            }
        }, integer: function (t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        }, percent: function (t, e) {
            return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
        }
    };
    var Sr = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "},
        jr = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
        Ar = {v: "title", lang: "lang"}, Or = {rt: "ruby"},
        Dr = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
    Dt.prototype.applyStyles = function (t, e) {
        e = e || this.div;
        for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n])
    }, Dt.prototype.formatStyle = function (t, e) {
        return 0 === t ? 0 : t + e
    }, Nt.prototype = Er(Dt.prototype), Nt.prototype.constructor = Nt, Pt.prototype.move = function (t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case"+x":
                this.left += e, this.right += e;
                break;
            case"-x":
                this.left -= e, this.right -= e;
                break;
            case"+y":
                this.top += e, this.bottom += e;
                break;
            case"-y":
                this.top -= e, this.bottom -= e
        }
    }, Pt.prototype.overlaps = function (t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, Pt.prototype.overlapsAny = function (t) {
        for (var e = 0; e < t.length; e++) if (this.overlaps(t[e])) return !0;
        return !1
    }, Pt.prototype.within = function (t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, Pt.prototype.overlapsOppositeAxis = function (t, e) {
        switch (e) {
            case"+x":
                return this.left < t.left;
            case"-x":
                return this.right > t.right;
            case"+y":
                return this.top < t.top;
            case"-y":
                return this.bottom > t.bottom
        }
    }, Pt.prototype.intersectPercentage = function (t) {
        return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
    }, Pt.prototype.toCSSCompatValues = function (t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, Pt.getSimpleBoxPosition = function (t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            r = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        return t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t, {
            left: t.left,
            right: t.right,
            top: t.top || r,
            height: t.height || e,
            bottom: t.bottom || r + (t.height || e),
            width: t.width || n
        }
    }, It.StringDecoder = function () {
        return {
            decode: function (t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, It.convertCueToDOMTree = function (t, e) {
        return t && e ? St(t, e) : null
    }, It.processCues = function (t, e, n) {
        if (!t || !e || !n) return null;
        for (; n.firstChild;) n.removeChild(n.firstChild);
        var r = t.document.createElement("div");
        if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = "1.5%", n.appendChild(r), function (t) {
            for (var e = 0; e < t.length; e++) if (t[e].hasBeenReset || !t[e].displayState) return !0;
            return !1
        }(e)) {
            var i = [], o = Pt.getSimpleBoxPosition(r), s = Math.round(.05 * o.height * 100) / 100,
                a = {font: s + "px sans-serif"};
            !function () {
                for (var n, s, l = 0; l < e.length; l++) s = e[l], n = new Nt(t, s, a), r.appendChild(n.div), Mt(t, n, o, i), s.displayState = n.div, i.push(Pt.getSimpleBoxPosition(n))
            }()
        } else for (var l = 0; l < e.length; l++) r.appendChild(e[l].displayState)
    }, It.Parser = function (t, e, n) {
        n || (n = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = []
    }, It.Parser.prototype = {
        reportOrThrowError: function (t) {
            if (!(t instanceof wt)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        }, parse: function (t) {
            function e() {
                for (var t = i.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                var n = t.substr(0, e);
                return "\r" === t[e] && ++e, "\n" === t[e] && ++e, i.buffer = t.substr(e), n
            }

            function n(t) {
                var e = new kt;
                if (xt(t, function (t, n) {
                    switch (t) {
                        case"id":
                            e.set(t, n);
                            break;
                        case"width":
                            e.percent(t, n);
                            break;
                        case"lines":
                            e.integer(t, n);
                            break;
                        case"regionanchor":
                        case"viewportanchor":
                            var r = n.split(",");
                            if (2 !== r.length) break;
                            var i = new kt;
                            if (i.percent("x", r[0]), i.percent("y", r[1]), !i.has("x") || !i.has("y")) break;
                            e.set(t + "X", i.get("x")), e.set(t + "Y", i.get("y"));
                            break;
                        case"scroll":
                            e.alt(t, n, ["up"])
                    }
                }, /=/, /\s/), e.has("id")) {
                    var n = new (i.vttjs.VTTRegion || i.window.VTTRegion);
                    n.width = e.get("width", 100), n.lines = e.get("lines", 3), n.regionAnchorX = e.get("regionanchorX", 0), n.regionAnchorY = e.get("regionanchorY", 100), n.viewportAnchorX = e.get("viewportanchorX", 0), n.viewportAnchorY = e.get("viewportanchorY", 100), n.scroll = e.get("scroll", ""), i.onregion && i.onregion(n), i.regionList.push({
                        id: e.get("id"),
                        region: n
                    })
                }
            }

            function r(t) {
                var e = new kt;
                xt(t, function (t, n) {
                    switch (t) {
                        case"MPEGT":
                            e.integer(t + "S", n);
                            break;
                        case"LOCA":
                            e.set(t + "L", Ct(n))
                    }
                }, /[^\d]:/, /,/), i.ontimestampmap && i.ontimestampmap({
                    MPEGTS: e.get("MPEGTS"),
                    LOCAL: e.get("LOCAL")
                })
            }

            var i = this;
            t && (i.buffer += i.decoder.decode(t, {stream: !0}));
            try {
                var o;
                if ("INITIAL" === i.state) {
                    if (!/\r\n|\n/.test(i.buffer)) return this;
                    o = e();
                    var s = o.match(/^WEBVTT([ \t].*)?$/);
                    if (!s || !s[0]) throw new wt(wt.Errors.BadSignature);
                    i.state = "HEADER"
                }
                for (var a = !1; i.buffer;) {
                    if (!/\r\n|\n/.test(i.buffer)) return this;
                    switch (a ? a = !1 : o = e(), i.state) {
                        case"HEADER":
                            /:/.test(o) ? function (t) {
                                t.match(/X-TIMESTAMP-MAP/) ? xt(t, function (t, e) {
                                    switch (t) {
                                        case"X-TIMESTAMP-MAP":
                                            r(e)
                                    }
                                }, /=/) : xt(t, function (t, e) {
                                    switch (t) {
                                        case"Region":
                                            n(e)
                                    }
                                }, /:/)
                            }(o) : o || (i.state = "ID");
                            continue;
                        case"NOTE":
                            o || (i.state = "ID");
                            continue;
                        case"ID":
                            if (/^NOTE($|[ \t])/.test(o)) {
                                i.state = "NOTE";
                                break
                            }
                            if (!o) continue;
                            if (i.cue = new (i.vttjs.VTTCue || i.window.VTTCue)(0, 0, ""), i.state = "CUE", -1 === o.indexOf("--\x3e")) {
                                i.cue.id = o;
                                continue
                            }
                        case"CUE":
                            try {
                                Et(o, i.cue, i.regionList)
                            } catch (t) {
                                i.reportOrThrowError(t), i.cue = null, i.state = "BADCUE";
                                continue
                            }
                            i.state = "CUETEXT";
                            continue;
                        case"CUETEXT":
                            var l = -1 !== o.indexOf("--\x3e");
                            if (!o || l && (a = !0)) {
                                i.oncue && i.oncue(i.cue), i.cue = null, i.state = "ID";
                                continue
                            }
                            i.cue.text && (i.cue.text += "\n"), i.cue.text += o;
                            continue;
                        case"BADCUE":
                            o || (i.state = "ID");
                            continue
                    }
                }
            } catch (t) {
                i.reportOrThrowError(t), "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue), i.cue = null, i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        }, flush: function () {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new wt(wt.Errors.BadSignature)
            } catch (e) {
                t.reportOrThrowError(e)
            }
            return t.onflush && t.onflush(), this
        }
    };
    var Nr = It, Pr = "auto", Mr = {"": !0, lr: !0, rl: !0}, Ir = {start: !0, middle: !0, end: !0, left: !0, right: !0};
    Bt.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    };
    var Lr = Bt, Fr = {"": !0, up: !0}, Rr = qt, Br = t(function (t) {
        var e = t.exports = {WebVTT: Nr, VTTCue: Lr, VTTRegion: Rr};
        le.vttjs = e, le.WebVTT = e.WebVTT;
        var n = e.VTTCue, r = e.VTTRegion, i = le.VTTCue, o = le.VTTRegion;
        e.shim = function () {
            le.VTTCue = n, le.VTTRegion = r
        }, e.restore = function () {
            le.VTTCue = i, le.VTTRegion = o
        }, le.VTTCue || e.shim()
    }), Hr = function (t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                };
            Re(this, e), n.reportTouchActivity = !1;
            var i = He(this, t.call(this, null, n, r));
            return i.hasStarted_ = !1, i.on("playing", function () {
                this.hasStarted_ = !0
            }), i.on("loadstart", function () {
                this.hasStarted_ = !1
            }), xr.names.forEach(function (t) {
                var e = xr[t];
                n && n[e.getterName] && (i[e.privateName] = n[e.getterName])
            }), i.featuresProgressEvents || i.manualProgressOn(), i.featuresTimeupdateEvents || i.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (t) {
                !1 === n["native" + t + "Tracks"] && (i["featuresNative" + t + "Tracks"] = !1)
            }), !1 === n.nativeCaptions || !1 === n.nativeTextTracks ? i.featuresNativeTextTracks = !1 : !0 !== n.nativeCaptions && !0 !== n.nativeTextTracks || (i.featuresNativeTextTracks = !0), i.featuresNativeTextTracks || i.emulateTextTracks(), i.autoRemoteTextTracks_ = new xr.text.ListClass, i.initTrackListeners(), n.nativeControlsForTouch || i.emitTapEvents(), i.constructor && (i.name_ = i.constructor.name || "Unknown Tech"), i
        }

        return Be(e, t), e.prototype.manualProgressOn = function () {
            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
        }, e.prototype.manualProgressOff = function () {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
        }, e.prototype.trackProgress = function (t) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval(pn(this, function () {
                var t = this.bufferedPercent();
                this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
            }), 500)
        }, e.prototype.onDurationChange = function (t) {
            this.duration_ = this.duration()
        }, e.prototype.buffered = function () {
            return it(0, 0)
        }, e.prototype.bufferedPercent = function () {
            return ot(this.buffered(), this.duration_)
        }, e.prototype.stopTrackingProgress = function () {
            this.clearInterval(this.progressInterval)
        }, e.prototype.manualTimeUpdatesOn = function () {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
        }, e.prototype.manualTimeUpdatesOff = function () {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
        }, e.prototype.trackCurrentTime = function () {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
            }, 250)
        }, e.prototype.stopTrackingCurrentTime = function () {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, e.prototype.dispose = function () {
            this.clearTracks(Cr.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
        }, e.prototype.clearTracks = function (t) {
            var e = this;
            t = [].concat(t), t.forEach(function (t) {
                for (var n = e[t + "Tracks"]() || [], r = n.length; r--;) {
                    var i = n[r];
                    "text" === t && e.removeRemoteTextTrack(i), n.removeTrack(i)
                }
            })
        }, e.prototype.cleanupAutoTextTracks = function () {
            for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
                var n = t[e];
                this.removeRemoteTextTrack(n)
            }
        }, e.prototype.reset = function () {
        }, e.prototype.error = function (t) {
            return void 0 !== t && (this.error_ = new st(t), this.trigger("error")), this.error_
        }, e.prototype.played = function () {
            return this.hasStarted_ ? it(0, 0) : it()
        }, e.prototype.setCurrentTime = function () {
            this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
        }, e.prototype.initTrackListeners = function () {
            var t = this;
            Cr.names.forEach(function (e) {
                var n = Cr[e], r = function () {
                    t.trigger(e + "trackchange")
                }, i = t[n.getterName]();
                i.addEventListener("removetrack", r), i.addEventListener("addtrack", r), t.on("dispose", function () {
                    i.removeEventListener("removetrack", r), i.removeEventListener("addtrack", r)
                })
            })
        }, e.prototype.addWebVttScript_ = function () {
            var t = this;
            if (!le.WebVTT) if (de.body.contains(this.el())) {
                if (!this.options_["vtt.js"] && o(Br) && Object.keys(Br).length > 0) return void this.trigger("vttjsloaded");
                var e = de.createElement("script");
                e.src = this.options_["vtt.js"] || "//vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", e.onload = function () {
                    t.trigger("vttjsloaded")
                }, e.onerror = function () {
                    t.trigger("vttjserror")
                }, this.on("dispose", function () {
                    e.onload = null, e.onerror = null
                }), le.WebVTT = !0, this.el().parentNode.appendChild(e)
            } else this.ready(this.addWebVttScript_)
        }, e.prototype.emulateTextTracks = function () {
            var t = this, e = this.textTracks(), n = this.remoteTextTracks(), r = function (t) {
                return e.addTrack(t.track)
            }, i = function (t) {
                return e.removeTrack(t.track)
            };
            n.on("addtrack", r), n.on("removetrack", i), this.addWebVttScript_();
            var o = function () {
                return t.trigger("texttrackchange")
            }, s = function () {
                o();
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.removeEventListener("cuechange", o), "showing" === n.mode && n.addEventListener("cuechange", o)
                }
            };
            s(), e.addEventListener("change", s), e.addEventListener("addtrack", s), e.addEventListener("removetrack", s), this.on("dispose", function () {
                n.off("addtrack", r), n.off("removetrack", i), e.removeEventListener("change", s), e.removeEventListener("addtrack", s), e.removeEventListener("removetrack", s);
                for (var t = 0; t < e.length; t++) e[t].removeEventListener("cuechange", o)
            })
        }, e.prototype.addTextTrack = function (t, e, n) {
            if (!t) throw new Error("TextTrack kind is required but was not provided");
            return Vt(this, t, e, n)
        }, e.prototype.createRemoteTextTrack = function (t) {
            var e = tt(t, {tech: this});
            return new kr.remoteTextEl.TrackClass(e)
        }, e.prototype.addRemoteTextTrack = function () {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                r = this.createRemoteTextTrack(e);
            return !0 !== n && !1 !== n && (Ge.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), n = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), !0 !== n && this.ready(function () {
                return t.autoRemoteTextTracks_.addTrack(r.track)
            }), r
        }, e.prototype.removeRemoteTextTrack = function (t) {
            var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
            this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
        }, e.prototype.getVideoPlaybackQuality = function () {
            return {}
        }, e.prototype.setPoster = function () {
        }, e.prototype.playsinline = function () {
        }, e.prototype.setPlaysinline = function () {
        }, e.prototype.canPlayType = function () {
            return ""
        }, e.canPlayType = function () {
            return ""
        }, e.canPlaySource = function (t, n) {
            return e.canPlayType(t.type)
        }, e.isTech = function (t) {
            return t.prototype instanceof e || t instanceof e || t === e
        }, e.registerTech = function (t, n) {
            if (e.techs_ || (e.techs_ = {}), !e.isTech(n)) throw new Error("Tech " + t + " must be a Tech");
            if (!e.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!e.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return t = Q(t), e.techs_[t] = n, "Tech" !== t && e.defaultTechOrder_.push(t), n
        }, e.getTech = function (t) {
            if (t) return t = Q(t), e.techs_ && e.techs_[t] ? e.techs_[t] : le && le.videojs && le.videojs[t] ? (Ge.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), le.videojs[t]) : void 0
        }, e
    }(kn);
    xr.names.forEach(function (t) {
        var e = xr[t];
        Hr.prototype[e.getterName] = function () {
            return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
        }
    }), Hr.prototype.featuresVolumeControl = !0, Hr.prototype.featuresFullscreenResize = !1, Hr.prototype.featuresPlaybackRate = !1, Hr.prototype.featuresProgressEvents = !1, Hr.prototype.featuresTimeupdateEvents = !1, Hr.prototype.featuresNativeTextTracks = !1, Hr.withSourceHandlers = function (t) {
        t.registerSourceHandler = function (e, n) {
            var r = t.sourceHandlers;
            r || (r = t.sourceHandlers = []), void 0 === n && (n = r.length), r.splice(n, 0, e)
        }, t.canPlayType = function (e) {
            for (var n = t.sourceHandlers || [], r = void 0, i = 0; i < n.length; i++) if (r = n[i].canPlayType(e)) return r;
            return ""
        }, t.selectSourceHandler = function (e, n) {
            for (var r = t.sourceHandlers || [], i = 0; i < r.length; i++) if (r[i].canHandleSource(e, n)) return r[i];
            return null
        }, t.canPlaySource = function (e, n) {
            var r = t.selectSourceHandler(e, n);
            return r ? r.canHandleSource(e, n) : ""
        }, ["seekable", "duration"].forEach(function (t) {
            var e = this[t];
            "function" == typeof e && (this[t] = function () {
                return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
            })
        }, t.prototype), t.prototype.setSource = function (e) {
            var n = t.selectSourceHandler(e, this.options_);
            n || (t.nativeSourceHandler ? n = t.nativeSourceHandler : Ge.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), n !== t.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = n.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
        }, t.prototype.disposeSourceHandler = function () {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    }, kn.registerComponent("Tech", Hr), Hr.registerTech("Tech", Hr), Hr.defaultTechOrder_ = [];
    var $r = {}, qr = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1}, Vr = {setCurrentTime: 1},
        Wr = function t(e) {
            if (Array.isArray(e)) {
                var n = [];
                e.forEach(function (e) {
                    e = t(e), Array.isArray(e) ? n = n.concat(e) : i(e) && n.push(e)
                }), e = n
            } else e = "string" == typeof e && e.trim() ? [{src: e}] : i(e) && "string" == typeof e.src && e.src && e.src.trim() ? [e] : [];
            return e
        }, Ur = function (t) {
            function e(n, r, i) {
                Re(this, e);
                var o = tt({createEl: !1}, r), s = He(this, t.call(this, n, o, i));
                if (r.playerOptions.sources && 0 !== r.playerOptions.sources.length) n.src(r.playerOptions.sources); else for (var a = 0, l = r.playerOptions.techOrder; a < l.length; a++) {
                    var c = Q(l[a]), u = Hr.getTech(c);
                    if (c || (u = kn.getComponent(c)), u && u.isSupported()) {
                        n.loadTech_(c);
                        break
                    }
                }
                return s
            }

            return Be(e, t), e
        }(kn);
    kn.registerComponent("MediaLoader", Ur);
    var zr = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.emitTapEvents(), i.enable(), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            n = r({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, n), "button" === e && Ge.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), i = r({
                role: "button",
                "aria-live": "polite"
            }, i), this.tabIndex_ = n.tabIndex;
            var o = t.prototype.createEl.call(this, e, n, i);
            return this.createControlTextEl(o), o
        }, e.prototype.dispose = function () {
            this.controlTextEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.createControlTextEl = function (t) {
            return this.controlTextEl_ = v("span", {className: "vjs-control-text"}), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
        }, e.prototype.controlText = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
            if (void 0 === t) return this.controlText_ || "Need Text";
            var n = this.localize(t);
            this.controlText_ = t, y(this.controlTextEl_, n), this.nonIconControl || e.setAttribute("title", n)
        }, e.prototype.buildCSSClass = function () {
            return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.enable = function () {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
        }, e.prototype.disable = function () {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
        }, e.prototype.handleClick = function (t) {
        }, e.prototype.handleFocus = function (t) {
            U(de, "keydown", pn(this, this.handleKeyPress))
        }, e.prototype.handleKeyPress = function (e) {
            32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
        }, e.prototype.handleBlur = function (t) {
            z(de, "keydown", pn(this, this.handleKeyPress))
        }, e
    }(kn);
    kn.registerComponent("ClickableComponent", zr);
    var Xr = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.update(), n.on("posterchange", pn(i, i.update)), i
        }

        return Be(e, t), e.prototype.dispose = function () {
            this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
        }, e.prototype.createEl = function () {
            var t = v("div", {className: "vjs-poster", tabIndex: -1});
            return Ie || (this.fallbackImg_ = v("img"), t.appendChild(this.fallbackImg_)), t
        }, e.prototype.update = function (t) {
            var e = this.player().poster();
            this.setSrc(e), e ? this.show() : this.hide()
        }, e.prototype.setSrc = function (t) {
            if (this.fallbackImg_) this.fallbackImg_.src = t; else {
                var e = "";
                t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
            }
        }, e.prototype.handleClick = function (t) {
            this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
        }, e
    }(zr);
    kn.registerComponent("PosterImage", Xr);
    var Gr = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    }, Yr = function (t) {
        function e(n, r, i) {
            Re(this, e);
            var o = He(this, t.call(this, n, r, i));
            return n.on("loadstart", pn(o, o.toggleDisplay)), n.on("texttrackchange", pn(o, o.updateDisplay)), n.on("loadstart", pn(o, o.preselectTrack)), n.ready(pn(o, function () {
                if (n.tech_ && n.tech_.featuresNativeTextTracks) return void this.hide();
                n.on("fullscreenchange", pn(this, this.updateDisplay));
                for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                this.preselectTrack()
            })), o
        }

        return Be(e, t), e.prototype.preselectTrack = function () {
            for (var t = {
                captions: 1,
                subtitles: 1
            }, e = this.player_.textTracks(), n = this.player_.cache_.selectedLanguage, r = void 0, i = void 0, o = void 0, s = 0; s < e.length; s++) {
                var a = e[s];
                n && n.enabled && n.language === a.language ? a.kind === n.kind ? o = a : o || (o = a) : n && !n.enabled ? (o = null, r = null,
                    i = null) : a.default && ("descriptions" !== a.kind || r ? a.kind in t && !i && (i = a) : r = a)
            }
            o ? o.mode = "showing" : i ? i.mode = "showing" : r && (r.mode = "showing")
        }, e.prototype.toggleDisplay = function () {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }, e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }, e.prototype.clearDisplay = function () {
            "function" == typeof le.WebVTT && le.WebVTT.processCues(le, [], this.el_)
        }, e.prototype.updateDisplay = function () {
            var t = this.player_.textTracks();
            this.clearDisplay();
            for (var e = null, n = null, r = t.length; r--;) {
                var i = t[r];
                "showing" === i.mode && ("descriptions" === i.kind ? e = i : n = i)
            }
            n ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(n)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
        }, e.prototype.updateForTrack = function (t) {
            if ("function" == typeof le.WebVTT && t.activeCues) {
                for (var e = this.player_.textTrackSettings.getValues(), n = [], r = 0; r < t.activeCues.length; r++) n.push(t.activeCues[r]);
                le.WebVTT.processCues(le, n, this.el_);
                for (var i = n.length; i--;) {
                    var o = n[i];
                    if (o) {
                        var s = o.displayState;
                        if (e.color && (s.firstChild.style.color = e.color), e.textOpacity && Qt(s.firstChild, "color", Jt(e.color || "#fff", e.textOpacity)), e.backgroundColor && (s.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && Qt(s.firstChild, "backgroundColor", Jt(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? Qt(s, "backgroundColor", Jt(e.windowColor, e.windowOpacity)) : s.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === e.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), e.fontPercent && 1 !== e.fontPercent) {
                            var a = le.parseFloat(s.style.fontSize);
                            s.style.fontSize = a * e.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                        }
                        e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = Gr[e.fontFamily])
                    }
                }
            }
        }, e
    }(kn);
    kn.registerComponent("TextTrackDisplay", Yr);
    var Kr = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"})
        }, e
    }(kn);
    kn.registerComponent("LoadingSpinner", Kr);
    var Jr = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = "button", e = r({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, e), n = r({type: "button", "aria-live": "polite"}, n);
            var i = kn.prototype.createEl.call(this, t, e, n);
            return this.createControlTextEl(i), i
        }, e.prototype.addChild = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.constructor.name;
            return Ge.warn("Adding an actionable (user controllable) child to a Button (" + n + ") is not supported; use a ClickableComponent instead."), kn.prototype.addChild.call(this, t, e)
        }, e.prototype.enable = function () {
            t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
        }, e.prototype.disable = function () {
            t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
        }, e.prototype.handleKeyPress = function (e) {
            32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
        }, e
    }(zr);
    kn.registerComponent("Button", Jr);
    var Qr = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-big-play-button"
        }, e.prototype.handleClick = function (t) {
            var e = this.player_.play();
            if (!(this.mouseused_ && t.clientX && t.clientY)) {
                var n = this.player_.getChild("controlBar"), r = n && n.getChild("playToggle");
                if (!r) return void this.player_.focus();
                var i = function () {
                    return r.focus()
                };
                lt(e) ? e.then(i, function () {
                }) : this.setTimeout(i, 1)
            }
        }, e.prototype.handleKeyPress = function (e) {
            this.mouseused_ = !1, t.prototype.handleKeyPress.call(this, e)
        }, e.prototype.handleMouseDown = function (t) {
            this.mouseused_ = !0
        }, e
    }(Jr);
    Qr.prototype.controlText_ = "Play Video", kn.registerComponent("BigPlayButton", Qr);
    var Zr = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.controlText(r && r.controlText || i.localize("Close")), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleClick = function (t) {
            this.trigger({type: "close", bubbles: !1})
        }, e
    }(Jr);
    kn.registerComponent("CloseButton", Zr);
    var ti = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on(n, "play", i.handlePlay), i.on(n, "pause", i.handlePause), i.on(n, "ended", i.handleEnded), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleClick = function (t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, e.prototype.handleSeeked = function (t) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
        }, e.prototype.handlePlay = function (t) {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
        }, e.prototype.handlePause = function (t) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
        }, e.prototype.handleEnded = function (t) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
        }, e
    }(Jr);
    ti.prototype.controlText_ = "Play", kn.registerComponent("PlayToggle", ti);
    var ei = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.throttledUpdateContent = dn(pn(i, i.updateContent), 25), i.on(n, "timeupdate", i.throttledUpdateContent), i
        }

        return Be(e, t), e.prototype.createEl = function (e) {
            var n = this.buildCSSClass(),
                r = t.prototype.createEl.call(this, "div", {className: n + " vjs-time-control vjs-control"});
            return this.contentEl_ = v("div", {className: n + "-display"}, {"aria-live": "off"}, v("span", {
                className: "vjs-control-text",
                textContent: this.localize(this.controlText_)
            })), this.updateTextNode_(), r.appendChild(this.contentEl_), r
        }, e.prototype.dispose = function () {
            this.contentEl_ = null, this.textNode_ = null, t.prototype.dispose.call(this)
        }, e.prototype.updateTextNode_ = function () {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = de.createTextNode(this.formattedTime_ || "0:00"), this.contentEl_.appendChild(this.textNode_)
            }
        }, e.prototype.formatTime_ = function (t) {
            return Zt(t)
        }, e.prototype.updateFormattedTime_ = function (t) {
            var e = this.formatTime_(t);
            e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
        }, e.prototype.updateContent = function (t) {
        }, e
    }(kn);
    ei.prototype.controlText_ = "Time", kn.registerComponent("TimeDisplay", ei);
    var ni = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on(n, "ended", i.handleEnded), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-current-time"
        }, e.prototype.updateContent = function (t) {
            var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(e)
        }, e.prototype.handleEnded = function (t) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }, e
    }(ei);
    ni.prototype.controlText_ = "Current Time", kn.registerComponent("CurrentTimeDisplay", ni);
    var ri = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on(n, "durationchange", i.updateContent), i.on(n, "loadedmetadata", i.throttledUpdateContent), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-duration"
        }, e.prototype.updateContent = function (t) {
            var e = this.player_.duration();
            e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
        }, e
    }(ei);
    ri.prototype.controlText_ = "Duration Time", kn.registerComponent("DurationDisplay", ri);
    var ii = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, e
    }(kn);
    kn.registerComponent("TimeDivider", ii);
    var oi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on(n, "durationchange", i.throttledUpdateContent), i.on(n, "ended", i.handleEnded), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-remaining-time"
        }, e.prototype.formatTime_ = function (e) {
            return "-" + t.prototype.formatTime_.call(this, e)
        }, e.prototype.updateContent = function (t) {
            this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }, e.prototype.handleEnded = function (t) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }, e
    }(ei);
    oi.prototype.controlText_ = "Remaining Time", kn.registerComponent("RemainingTimeDisplay", oi);
    var si = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            var e = t.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
            return this.contentEl_ = v("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
            }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
        }, e.prototype.dispose = function () {
            this.contentEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.updateShowing = function (t) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }, e
    }(kn);
    kn.registerComponent("LiveDisplay", si);
    var ai = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i
        }

        return Be(e, t), e.prototype.enabled = function () {
            return this.enabled_
        }, e.prototype.enable = function () {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        }, e.prototype.disable = function () {
            if (this.enabled()) {
                var t = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
            }
        }, e.prototype.createEl = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return n.className = n.className + " vjs-slider", n = r({tabIndex: 0}, n), i = r({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, i), t.prototype.createEl.call(this, e, n, i)
        }, e.prototype.handleMouseDown = function (t) {
            var e = this.bar.el_.ownerDocument;
            t.preventDefault(), S(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
        }, e.prototype.handleMouseMove = function (t) {
        }, e.prototype.handleMouseUp = function () {
            var t = this.bar.el_.ownerDocument;
            j(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
        }, e.prototype.update = function () {
            if (this.el_) {
                var t = this.getPercent(), e = this.bar;
                if (e) {
                    ("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                    var n = (100 * t).toFixed(2) + "%", r = e.el().style;
                    return this.vertical() ? r.height = n : r.width = n, t
                }
            }
        }, e.prototype.calculateDistance = function (t) {
            var e = D(this.el_, t);
            return this.vertical() ? e.y : e.x
        }, e.prototype.handleFocus = function () {
            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, e.prototype.handleKeyPress = function (t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
        }, e.prototype.handleBlur = function () {
            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, e.prototype.handleClick = function (t) {
            t.stopImmediatePropagation(), t.preventDefault()
        }, e.prototype.vertical = function (t) {
            if (void 0 === t) return this.vertical_ || !1;
            this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }, e
    }(kn);
    kn.registerComponent("Slider", ai);
    var li = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.partEls_ = [], i.on(n, "progress", i.update), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }, e.prototype.dispose = function () {
            this.partEls_ = null, t.prototype.dispose.call(this)
        }, e.prototype.update = function (t) {
            var e = this.player_.buffered(), n = this.player_.duration(), r = this.player_.bufferedEnd(),
                i = this.partEls_, o = function (t, e) {
                    var n = t / e || 0;
                    return 100 * (n >= 1 ? 1 : n) + "%"
                };
            this.el_.style.width = o(r, n);
            for (var s = 0; s < e.length; s++) {
                var a = e.start(s), l = e.end(s), c = i[s];
                c || (c = this.el_.appendChild(v()), i[s] = c), c.style.left = o(a, r), c.style.width = o(l - a, r)
            }
            for (var u = i.length; u > e.length; u--) this.el_.removeChild(i[u - 1]);
            i.length = e.length
        }, e
    }(kn);
    kn.registerComponent("LoadProgressBar", li);
    var ci = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
        }, e.prototype.update = function (t, e, n) {
            var r = A(this.el_), i = A(this.player_.el()), o = t.width * e;
            if (i && r) {
                var s = t.left - i.left + o, a = t.width - o + (i.right - t.right), l = r.width / 2;
                s < l ? l += l - s : a < l && (l = a), l < 0 ? l = 0 : l > r.width && (l = r.width), this.el_.style.right = "-" + l + "px", y(this.el_, n)
            }
        }, e
    }(kn);
    kn.registerComponent("TimeTooltip", ci);
    var ui = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }, e.prototype.update = function (t, e) {
            var n = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                var r = n.player_.scrubbing() ? n.player_.getCache().currentTime : n.player_.currentTime(),
                    i = Zt(r, n.player_.duration()), o = n.getChild("timeTooltip");
                o && o.update(t, e, i)
            })
        }, e
    }(kn);
    ui.prototype.options_ = {children: []}, De && !(De > 8) || _e || we || ui.prototype.options_.children.push("timeTooltip"), kn.registerComponent("PlayProgressBar", ui);
    var hi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.update = dn(pn(i, i.update), 25), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
        }, e.prototype.update = function (t, e) {
            var n = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                var r = n.player_.duration(), i = Zt(e * r, r);
                n.el_.style.left = t.width * e + "px", n.getChild("timeTooltip").update(t, e, i)
            })
        }, e
    }(kn);
    hi.prototype.options_ = {children: ["timeTooltip"]}, kn.registerComponent("MouseTimeDisplay", hi);
    var pi = 30, di = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.update = dn(pn(i, i.update), pi), i.on(n, "timeupdate", i.update), i.on(n, "ended", i.handleEnded), i.updateInterval = null, i.on(n, ["playing"], function () {
                i.clearInterval(i.updateInterval), i.updateInterval = i.setInterval(function () {
                    i.requestAnimationFrame(function () {
                        i.update()
                    })
                }, pi)
            }), i.on(n, ["ended", "pause", "waiting"], function () {
                i.clearInterval(i.updateInterval)
            }), i.on(n, ["timeupdate", "ended"], i.update), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
        }, e.prototype.update_ = function (t, e) {
            var n = this.player_.duration();
            this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Zt(t, n), Zt(n, n)], "{1} of {2}")), this.bar.update(A(this.el_), e)
        }, e.prototype.update = function (e) {
            var n = t.prototype.update.call(this);
            return this.update_(this.getCurrentTime_(), n), n
        }, e.prototype.getCurrentTime_ = function () {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }, e.prototype.handleEnded = function (t) {
            this.update_(this.player_.duration(), 1)
        }, e.prototype.getPercent = function () {
            var t = this.getCurrentTime_() / this.player_.duration();
            return t >= 1 ? 1 : t
        }, e.prototype.handleMouseDown = function (e) {
            F(e) && (this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e))
        }, e.prototype.handleMouseMove = function (t) {
            if (F(t)) {
                var e = this.calculateDistance(t) * this.player_.duration();
                e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
            }
        }, e.prototype.enable = function () {
            t.prototype.enable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.show()
        }, e.prototype.disable = function () {
            t.prototype.disable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.hide()
        }, e.prototype.handleMouseUp = function (e) {
            t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying && ct(this.player_.play())
        }, e.prototype.stepForward = function () {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }, e.prototype.stepBack = function () {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }, e.prototype.handleAction = function (t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, e.prototype.handleKeyPress = function (e) {
            32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
        }, e
    }(ai);
    di.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    }, De && !(De > 8) || _e || we || di.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), di.prototype.playerEvent = "timeupdate", kn.registerComponent("SeekBar", di);
    var fi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.handleMouseMove = dn(pn(i, i.handleMouseMove), 25), i.throttledHandleMouseSeek = dn(pn(i, i.handleMouseSeek), 25), i.enable(), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
        }, e.prototype.handleMouseMove = function (t) {
            var e = this.getChild("seekBar"), n = e.getChild("mouseTimeDisplay"), r = e.el(), i = A(r), o = D(r, t).x;
            o > 1 ? o = 1 : o < 0 && (o = 0), n && n.update(i, o)
        }, e.prototype.handleMouseSeek = function (t) {
            this.getChild("seekBar").handleMouseMove(t)
        }, e.prototype.enabled = function () {
            return this.enabled_
        }, e.prototype.disable = function () {
            this.children().forEach(function (t) {
                return t.disable && t.disable()
            }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
        }, e.prototype.enable = function () {
            this.children().forEach(function (t) {
                return t.enable && t.enable()
            }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        }, e.prototype.handleMouseDown = function (t) {
            var e = this.el_.ownerDocument;
            this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
        }, e.prototype.handleMouseUp = function (t) {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
        }, e
    }(kn);
    fi.prototype.options_ = {children: ["seekBar"]}, kn.registerComponent("ProgressControl", fi);
    var vi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on(n, "fullscreenchange", i.handleFullscreenChange), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleFullscreenChange = function (t) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }, e.prototype.handleClick = function (t) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }, e
    }(Jr);
    vi.prototype.controlText_ = "Fullscreen", kn.registerComponent("FullscreenToggle", vi);
    var yi = function (t, e) {
        e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function () {
            e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
        })
    }, gi = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, e
    }(kn);
    kn.registerComponent("VolumeLevel", gi);
    var mi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on("slideractive", i.updateLastVolume_), i.on(n, "volumechange", i.updateARIAAttributes), n.ready(function () {
                return i.updateARIAAttributes()
            }), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }, e.prototype.handleMouseDown = function (e) {
            F(e) && t.prototype.handleMouseDown.call(this, e)
        }, e.prototype.handleMouseMove = function (t) {
            F(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)))
        }, e.prototype.checkMuted = function () {
            this.player_.muted() && this.player_.muted(!1)
        }, e.prototype.getPercent = function () {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, e.prototype.stepForward = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
        }, e.prototype.stepBack = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
        }, e.prototype.updateARIAAttributes = function (t) {
            var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
        }, e.prototype.volumeAsPercentage_ = function () {
            return Math.round(100 * this.player_.volume())
        }, e.prototype.updateLastVolume_ = function () {
            var t = this, e = this.player_.volume();
            this.one("sliderinactive", function () {
                0 === t.player_.volume() && t.player_.lastVolume_(e)
            })
        }, e
    }(ai);
    mi.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    }, mi.prototype.playerEvent = "volumechange", kn.registerComponent("VolumeBar", mi);
    var bi = function (t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Re(this, e), r.vertical = r.vertical || !1, (void 0 === r.volumeBar || o(r.volumeBar)) && (r.volumeBar = r.volumeBar || {}, r.volumeBar.vertical = r.vertical);
            var i = He(this, t.call(this, n, r));
            return yi(i, n), i.throttledHandleMouseMove = dn(pn(i, i.handleMouseMove), 25), i.on("mousedown", i.handleMouseDown), i.on("touchstart", i.handleMouseDown), i.on(i.volumeBar, ["focus", "slideractive"], function () {
                i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive")
            }), i.on(i.volumeBar, ["blur", "sliderinactive"], function () {
                i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive")
            }), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            var e = "vjs-volume-horizontal";
            return this.options_.vertical && (e = "vjs-volume-vertical"), t.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + e})
        }, e.prototype.handleMouseDown = function (t) {
            var e = this.el_.ownerDocument;
            this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
        }, e.prototype.handleMouseUp = function (t) {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
        }, e.prototype.handleMouseMove = function (t) {
            this.volumeBar.handleMouseMove(t)
        }, e
    }(kn);
    bi.prototype.options_ = {children: ["volumeBar"]}, kn.registerComponent("VolumeControl", bi);
    var _i = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return yi(i, n), i.on(n, ["loadstart", "volumechange"], i.update), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleClick = function (t) {
            var e = this.player_.volume(), n = this.player_.lastVolume_();
            if (0 === e) {
                var r = n < .1 ? .1 : n;
                this.player_.volume(r), this.player_.muted(!1)
            } else this.player_.muted(!this.player_.muted())
        }, e.prototype.update = function (t) {
            this.updateIcon_(), this.updateControlText_()
        }, e.prototype.updateIcon_ = function () {
            var t = this.player_.volume(), e = 3;
            0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
            for (var n = 0; n < 4; n++) _(this.el_, "vjs-vol-" + n);
            b(this.el_, "vjs-vol-" + e)
        }, e.prototype.updateControlText_ = function () {
            var t = this.player_.muted() || 0 === this.player_.volume(), e = t ? "Unmute" : "Mute";
            this.controlText() !== e && this.controlText(e)
        }, e
    }(Jr);
    _i.prototype.controlText_ = "Mute", kn.registerComponent("MuteToggle", _i);
    var Ti = function (t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Re(this, e), void 0 !== r.inline ? r.inline = r.inline : r.inline = !0, (void 0 === r.volumeControl || o(r.volumeControl)) && (r.volumeControl = r.volumeControl || {}, r.volumeControl.vertical = !r.inline);
            var i = He(this, t.call(this, n, r));
            return yi(i, n), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.muteToggle, "focus", i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_), i.on(i.muteToggle, "blur", i.sliderInactive_), i
        }

        return Be(e, t), e.prototype.sliderActive_ = function () {
            this.addClass("vjs-slider-active")
        }, e.prototype.sliderInactive_ = function () {
            this.removeClass("vjs-slider-active")
        }, e.prototype.createEl = function () {
            var e = "vjs-volume-panel-horizontal";
            return this.options_.inline || (e = "vjs-volume-panel-vertical"), t.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + e})
        }, e
    }(kn);
    Ti.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, kn.registerComponent("VolumePanel", Ti);
    var wi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return r && (i.menuButton_ = r.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyPress), i
        }

        return Be(e, t), e.prototype.addItem = function (t) {
            this.addChild(t), t.on("click", pn(this, function (e) {
                this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
            }))
        }, e.prototype.createEl = function () {
            var e = this.options_.contentElType || "ul";
            this.contentEl_ = v(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
            var n = t.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
            return n.appendChild(this.contentEl_), U(n, "click", function (t) {
                t.preventDefault(), t.stopImmediatePropagation()
            }), n
        }, e.prototype.dispose = function () {
            this.contentEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.handleKeyPress = function (t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
        }, e.prototype.stepForward = function () {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
        }, e.prototype.stepBack = function () {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
        }, e.prototype.focus = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = this.children().slice();
            e.length && e[0].className && /vjs-menu-title/.test(e[0].className) && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
        }, e
    }(kn);
    kn.registerComponent("Menu", wi);
    var Ci = function (t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            i.menuButton_ = new Jr(n, r), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var o = Jr.prototype.buildCSSClass();
            return i.menuButton_.el_.className = i.buildCSSClass() + " " + o, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_), i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "focus", i.handleFocus), i.on(i.menuButton_, "blur", i.handleBlur), i.on("keydown", i.handleSubmenuKeyPress), i
        }

        return Be(e, t), e.prototype.update = function () {
            var t = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }, e.prototype.createMenu = function () {
            var t = new wi(this.player_, {menuButton: this});
            if (this.hideThreshold_ = 0, this.options_.title) {
                var e = v("li", {className: "vjs-menu-title", innerHTML: Q(this.options_.title), tabIndex: -1});
                this.hideThreshold_ += 1, t.children_.unshift(e), g(e, t.contentEl())
            }
            if (this.items = this.createItems(), this.items) for (var n = 0; n < this.items.length; n++) t.addItem(this.items[n]);
            return t
        }, e.prototype.createItems = function () {
        }, e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
        }, e.prototype.buildWrapperCSSClass = function () {
            var e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Jr.prototype.buildCSSClass() + " " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildCSSClass = function () {
            var e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.controlText = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
            return this.menuButton_.controlText(t, e)
        }, e.prototype.handleClick = function (t) {
            this.one(this.menu.contentEl(), "mouseleave", pn(this, function (t) {
                this.unpressButton(), this.el_.blur()
            })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }, e.prototype.focus = function () {
            this.menuButton_.focus()
        }, e.prototype.blur = function () {
            this.menuButton_.blur()
        }, e.prototype.handleFocus = function () {
            U(de, "keydown", pn(this, this.handleKeyPress))
        }, e.prototype.handleBlur = function () {
            z(de, "keydown", pn(this, this.handleKeyPress))
        }, e.prototype.handleKeyPress = function (t) {
            27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
        }, e.prototype.handleSubmenuKeyPress = function (t) {
            27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
        }, e.prototype.pressButton = function () {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), _e && d()) return;
                this.menu.focus()
            }
        }, e.prototype.unpressButton = function () {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }, e.prototype.disable = function () {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
        }, e.prototype.enable = function () {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
        }, e
    }(kn);
    kn.registerComponent("MenuButton", Ci);
    var ki = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = r.tracks, o = He(this, t.call(this, n, r));
            if (o.items.length <= 1 && o.hide(), !i) return He(o);
            var s = pn(o, o.update);
            return i.addEventListener("removetrack", s), i.addEventListener("addtrack", s), o.player_.on("ready", s), o.player_.on("dispose", function () {
                i.removeEventListener("removetrack", s), i.removeEventListener("addtrack", s)
            }), o
        }

        return Be(e, t), e
    }(Ci);
    kn.registerComponent("TrackButton", ki);
    var xi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.selectable = r.selectable, i.selected(r.selected), i.selectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitem"), i
        }

        return Be(e, t), e.prototype.createEl = function (e, n, i) {
            return this.nonIconControl = !0, t.prototype.createEl.call(this, "li", r({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, n), i)
        }, e.prototype.handleClick = function (t) {
            this.selected(!0)
        }, e.prototype.selected = function (t) {
            this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText("")))
        }, e
    }(zr);
    kn.registerComponent("MenuItem", xi);
    var Ei = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = r.track, o = n.textTracks();
            r.label = i.label || i.language || "Unknown", r.selected = "showing" === i.mode;
            var s = He(this, t.call(this, n, r));
            s.track = i;
            var a = function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                s.handleTracksChange.apply(s, e)
            }, l = function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                s.handleSelectedLanguageChange.apply(s, e)
            };
            if (n.on(["loadstart", "texttrackchange"], a), o.addEventListener("change", a), o.addEventListener("selectedlanguagechange", l), s.on("dispose", function () {
                n.off(["loadstart", "texttrackchange"], a), o.removeEventListener("change", a), o.removeEventListener("selectedlanguagechange", l)
            }), void 0 === o.onchange) {
                var c = void 0;
                s.on(["tap", "click"], function () {
                    if ("object" !== Fe(le.Event)) try {
                        c = new le.Event("change")
                    } catch (t) {
                    }
                    c || (c = de.createEvent("Event"), c.initEvent("change", !0, !0)), o.dispatchEvent(c)
                })
            }
            return s.handleTracksChange(), s
        }

        return Be(e, t), e.prototype.handleClick = function (e) {
            var n = this.track.kind, r = this.track.kinds, i = this.player_.textTracks();
            if (r || (r = [n]), t.prototype.handleClick.call(this, e), i) for (var o = 0; o < i.length; o++) {
                var s = i[o];
                s === this.track && r.indexOf(s.kind) > -1 ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled")
            }
        }, e.prototype.handleTracksChange = function (t) {
            this.selected("showing" === this.track.mode)
        }, e.prototype.handleSelectedLanguageChange = function (t) {
            if ("showing" === this.track.mode) {
                var e = this.player_.cache_.selectedLanguage;
                if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }, e.prototype.dispose = function () {
            this.track = null, t.prototype.dispose.call(this)
        }, e
    }(xi);
    kn.registerComponent("TextTrackMenuItem", Ei);
    var Si = function (t) {
        function e(n, r) {
            return Re(this, e), r.track = {
                player: n,
                kind: r.kind,
                kinds: r.kinds,
                default: !1,
                mode: "disabled"
            }, r.kinds || (r.kinds = [r.kind]), r.label ? r.track.label = r.label : r.track.label = r.kinds.join(" and ") + " off", r.selectable = !0, He(this, t.call(this, n, r))
        }

        return Be(e, t), e.prototype.handleTracksChange = function (t) {
            for (var e = this.player().textTracks(), n = !0, r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                if (this.options_.kinds.indexOf(o.kind) > -1 && "showing" === o.mode) {
                    n = !1;
                    break
                }
            }
            this.selected(n)
        }, e.prototype.handleSelectedLanguageChange = function (t) {
            for (var e = this.player().textTracks(), n = !0, r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                if (["captions", "descriptions", "subtitles"].indexOf(o.kind) > -1 && "showing" === o.mode) {
                    n = !1;
                    break
                }
            }
            n && (this.player_.cache_.selectedLanguage = {enabled: !1})
        }, e
    }(Ei);
    kn.registerComponent("OffTextTrackMenuItem", Si);
    var ji = function (t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Re(this, e), r.tracks = n.textTracks(), He(this, t.call(this, n, r))
        }

        return Be(e, t), e.prototype.createItems = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ei, n = void 0;
            this.label_ && (n = this.label_ + " off"), t.push(new Si(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: n
            })), this.hideThreshold_ += 1;
            var r = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (this.kinds_.indexOf(o.kind) > -1) {
                    var s = new e(this.player_, {track: o, selectable: !0});
                    s.addClass("vjs-" + o.kind + "-menu-item"), t.push(s)
                }
            }
            return t
        }, e
    }(ki);
    kn.registerComponent("TextTrackButton", ji);
    var Ai = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = r.track, o = r.cue, s = n.currentTime();
            r.selectable = !0, r.label = o.text, r.selected = o.startTime <= s && s < o.endTime;
            var a = He(this, t.call(this, n, r));
            return a.track = i, a.cue = o, i.addEventListener("cuechange", pn(a, a.update)), a
        }

        return Be(e, t), e.prototype.handleClick = function (e) {
            t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, e.prototype.update = function (t) {
            var e = this.cue, n = this.player_.currentTime();
            this.selected(e.startTime <= n && n < e.endTime)
        }, e
    }(xi);
    kn.registerComponent("ChaptersTrackMenuItem", Ai);
    var Oi = function (t) {
        function e(n, r, i) {
            return Re(this, e), He(this, t.call(this, n, r, i))
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.update = function (e) {
            this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
        }, e.prototype.setTrack = function (t) {
            if (this.track_ !== t) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
                }
                if (this.track_ = t, this.track_) {
                    this.track_.mode = "hidden";
                    var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    n && n.addEventListener("load", this.updateHandler_)
                }
            }
        }, e.prototype.findChaptersTrack = function () {
            for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
                var n = t[e];
                if (n.kind === this.kind_) return n
            }
        }, e.prototype.getMenuCaption = function () {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(Q(this.kind_))
        }, e.prototype.createMenu = function () {
            return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
        }, e.prototype.createItems = function () {
            var t = [];
            if (!this.track_) return t;
            var e = this.track_.cues;
            if (!e) return t;
            for (var n = 0, r = e.length; n < r; n++) {
                var i = e[n], o = new Ai(this.player_, {track: this.track_, cue: i});
                t.push(o)
            }
            return t
        }, e
    }(ji);
    Oi.prototype.kind_ = "chapters", Oi.prototype.controlText_ = "Chapters", kn.registerComponent("ChaptersButton", Oi);
    var Di = function (t) {
        function e(n, r, i) {
            Re(this, e);
            var o = He(this, t.call(this, n, r, i)), s = n.textTracks(), a = pn(o, o.handleTracksChange);
            return s.addEventListener("change", a), o.on("dispose", function () {
                s.removeEventListener("change", a)
            }), o
        }

        return Be(e, t), e.prototype.handleTracksChange = function (t) {
            for (var e = this.player().textTracks(), n = !1, r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                if (o.kind !== this.kind_ && "showing" === o.mode) {
                    n = !0;
                    break
                }
            }
            n ? this.disable() : this.enable()
        }, e.prototype.buildCSSClass = function () {
            return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e
    }(ji);
    Di.prototype.kind_ = "descriptions", Di.prototype.controlText_ = "Descriptions", kn.registerComponent("DescriptionsButton", Di);
    var Ni = function (t) {
        function e(n, r, i) {
            return Re(this, e), He(this, t.call(this, n, r, i))
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e
    }(ji);
    Ni.prototype.kind_ = "subtitles", Ni.prototype.controlText_ = "Subtitles", kn.registerComponent("SubtitlesButton", Ni);
    var Pi = function (t) {
        function e(n, r) {
            Re(this, e), r.track = {
                player: n,
                kind: r.kind,
                label: r.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, r.selectable = !1, r.name = "CaptionSettingsMenuItem";
            var i = He(this, t.call(this, n, r));
            return i.addClass("vjs-texttrack-settings"), i.controlText(", opens " + r.kind + " settings dialog"), i
        }

        return Be(e, t), e.prototype.handleClick = function (t) {
            this.player().getChild("textTrackSettings").open()
        }, e
    }(Ei);
    kn.registerComponent("CaptionSettingsMenuItem", Pi);
    var Mi = function (t) {
        function e(n, r, i) {
            return Re(this, e), He(this, t.call(this, n, r, i))
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createItems = function () {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new Pi(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), t.prototype.createItems.call(this, e)
        }, e
    }(ji);
    Mi.prototype.kind_ = "captions", Mi.prototype.controlText_ = "Captions", kn.registerComponent("CaptionsButton", Mi);
    var Ii = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function (e, n, i) {
            var o = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (o += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), o += "</span>", t.prototype.createEl.call(this, e, r({innerHTML: o}, n), i)
        }, e
    }(Ei);
    kn.registerComponent("SubsCapsMenuItem", Ii);
    var Li = function (t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) > -1 && (i.label_ = "captions"), i.menuButton_.controlText(Q(i.label_)), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createItems = function () {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new Pi(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), e = t.prototype.createItems.call(this, e, Ii)
        }, e
    }(ji);
    Li.prototype.kinds_ = ["captions", "subtitles"], Li.prototype.controlText_ = "Subtitles", kn.registerComponent("SubsCapsButton", Li);
    var Fi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = r.track, o = n.audioTracks();
            r.label = i.label || i.language || "Unknown", r.selected = i.enabled;
            var s = He(this, t.call(this, n, r));
            s.track = i;
            var a = function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                s.handleTracksChange.apply(s, e)
            };
            return o.addEventListener("change", a), s.on("dispose", function () {
                o.removeEventListener("change", a)
            }), s
        }

        return Be(e, t), e.prototype.handleClick = function (e) {
            var n = this.player_.audioTracks();
            t.prototype.handleClick.call(this, e);
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enabled = i === this.track
            }
        }, e.prototype.handleTracksChange = function (t) {
            this.selected(this.track.enabled)
        }, e
    }(xi);
    kn.registerComponent("AudioTrackMenuItem", Fi);
    var Ri = function (t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Re(this, e), r.tracks = n.audioTracks(), He(this, t.call(this, n, r))
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createItems = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.hideThreshold_ = 1;
            for (var e = this.player_.audioTracks(), n = 0; n < e.length; n++) {
                var r = e[n];
                t.push(new Fi(this.player_, {track: r, selectable: !0}))
            }
            return t
        }, e
    }(ki);
    Ri.prototype.controlText_ = "Audio Track", kn.registerComponent("AudioTrackButton", Ri);
    var Bi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = r.rate, o = parseFloat(i, 10);
            r.label = i, r.selected = 1 === o, r.selectable = !0;
            var s = He(this, t.call(this, n, r));
            return s.label = i, s.rate = o, s.on(n, "ratechange", s.update), s
        }

        return Be(e, t), e.prototype.handleClick = function (e) {
            t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
        }, e.prototype.update = function (t) {
            this.selected(this.player().playbackRate() === this.rate)
        }, e
    }(xi);
    Bi.prototype.contentElType = "button", kn.registerComponent("PlaybackRateMenuItem", Bi);
    var Hi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.updateVisibility(), i.updateLabel(), i.on(n, "loadstart", i.updateVisibility), i.on(n, "ratechange", i.updateLabel), i
        }

        return Be(e, t), e.prototype.createEl = function () {
            var e = t.prototype.createEl.call(this);
            return this.labelEl_ = v("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }), e.appendChild(this.labelEl_), e
        }, e.prototype.dispose = function () {
            this.labelEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.buildCSSClass = function () {
            return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function () {
            return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createMenu = function () {
            var t = new wi(this.player()), e = this.playbackRates();
            if (e) for (var n = e.length - 1; n >= 0; n--) t.addChild(new Bi(this.player(), {rate: e[n] + "x"}));
            return t
        }, e.prototype.updateARIAAttributes = function () {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, e.prototype.handleClick = function (t) {
            for (var e = this.player().playbackRate(), n = this.playbackRates(), r = n[0], i = 0; i < n.length; i++) if (n[i] > e) {
                r = n[i];
                break
            }
            this.player().playbackRate(r)
        }, e.prototype.playbackRates = function () {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }, e.prototype.playbackRateSupported = function () {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
        }, e.prototype.updateVisibility = function (t) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, e.prototype.updateLabel = function (t) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, e
    }(Ci);
    Hi.prototype.controlText_ = "Playback Rate", kn.registerComponent("PlaybackRateMenuButton", Hi);
    var $i = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
        }, e
    }(kn);
    kn.registerComponent("Spacer", $i);
    var qi = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.createEl = function () {
            var e = t.prototype.createEl.call(this, {className: this.buildCSSClass()});
            return e.innerHTML = " ", e
        }, e
    }($i);
    kn.registerComponent("CustomControlSpacer", qi);
    var Vi = function (t) {
        function e() {
            return Re(this, e), He(this, t.apply(this, arguments))
        }

        return Be(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"}, {role: "group"})
        }, e
    }(kn);
    Vi.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, kn.registerComponent("ControlBar", Vi);
    var Wi = function (t) {
        function e(n, r) {
            Re(this, e);
            var i = He(this, t.call(this, n, r));
            return i.on(n, "error", i.open), i
        }

        return Be(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.content = function () {
            var t = this.player().error();
            return t ? this.localize(t.message) : ""
        }, e
    }(Rn);
    Wi.prototype.options_ = tt(Rn.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), kn.registerComponent("ErrorDisplay", Wi);
    var Ui = ["#000", "Black"], zi = ["#00F", "Blue"], Xi = ["#0FF", "Cyan"], Gi = ["#0F0", "Green"],
        Yi = ["#F0F", "Magenta"], Ki = ["#F00", "Red"], Ji = ["#FFF", "White"], Qi = ["#FF0", "Yellow"],
        Zi = ["1", "Opaque"], to = ["0.5", "Semi-Transparent"], eo = ["0", "Transparent"], no = {
            backgroundColor: {
                selector: ".vjs-bg-color > select",
                id: "captions-background-color-%s",
                label: "Color",
                options: [Ui, Ji, Ki, Gi, zi, Qi, Yi, Xi]
            },
            backgroundOpacity: {
                selector: ".vjs-bg-opacity > select",
                id: "captions-background-opacity-%s",
                label: "Transparency",
                options: [Zi, to, eo]
            },
            color: {
                selector: ".vjs-fg-color > select",
                id: "captions-foreground-color-%s",
                label: "Color",
                options: [Ji, Ui, Ki, Gi, zi, Qi, Yi, Xi]
            },
            edgeStyle: {
                selector: ".vjs-edge-style > select",
                id: "%s",
                label: "Text Edge Style",
                options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
            },
            fontFamily: {
                selector: ".vjs-font-family > select",
                id: "captions-font-family-%s",
                label: "Font Family",
                options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
            },
            fontPercent: {
                selector: ".vjs-font-percent > select",
                id: "captions-font-size-%s",
                label: "Font Size",
                options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
                default: 2,
                parser: function (t) {
                    return "1.00" === t ? null : Number(t)
                }
            },
            textOpacity: {
                selector: ".vjs-text-opacity > select",
                id: "captions-foreground-opacity-%s",
                label: "Transparency",
                options: [Zi, to]
            },
            windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
            windowOpacity: {
                selector: ".vjs-window-opacity > select",
                id: "captions-window-opacity-%s",
                label: "Transparency",
                options: [eo, to, Zi]
            }
        };
    no.windowColor.options = no.backgroundColor.options;
    var ro = function (t) {
        function r(n, i) {
            Re(this, r), i.temporary = !1;
            var o = He(this, t.call(this, n, i));
            return o.updateDisplay = pn(o, o.updateDisplay), o.fill(), o.hasBeenOpened_ = o.hasBeenFilled_ = !0, o.endDialog = v("p", {
                className: "vjs-control-text",
                textContent: o.localize("End of dialog window.")
            }), o.el().appendChild(o.endDialog), o.setDefaults(), void 0 === i.persistTextTrackSettings && (o.options_.persistTextTrackSettings = o.options_.playerOptions.persistTextTrackSettings), o.on(o.$(".vjs-done-button"), "click", function () {
                o.saveSettings(), o.close()
            }), o.on(o.$(".vjs-default-button"), "click", function () {
                o.setDefaults(), o.updateDisplay()
            }), e(no, function (t) {
                o.on(o.$(t.selector), "change", o.updateDisplay)
            }), o.options_.persistTextTrackSettings && o.restoreSettings(), o
        }

        return Be(r, t), r.prototype.dispose = function () {
            this.endDialog = null, t.prototype.dispose.call(this)
        }, r.prototype.createElSelect_ = function (t) {
            var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label", i = no[t],
                o = i.id.replace("%s", this.id_);
            return ["<" + r + ' id="' + o + '" class="' + ("label" === r ? "vjs-label" : "") + '">', this.localize(i.label), "</" + r + ">", '<select aria-labelledby="' + ("" !== n ? n + " " : "") + o + '">'].concat(i.options.map(function (t) {
                var r = o + "-" + t[1];
                return ['<option id="' + r + '" value="' + t[0] + '" ', 'aria-labelledby="' + ("" !== n ? n + " " : "") + o + " " + r + '">', e.localize(t[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }, r.prototype.createElFgColor_ = function () {
            var t = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
        }, r.prototype.createElBgColor_ = function () {
            var t = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
        }, r.prototype.createElWinColor_ = function () {
            var t = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
        }, r.prototype.createElColors_ = function () {
            return v("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }, r.prototype.createElFont_ = function () {
            return v("div", {
                className: 'vjs-track-settings-font">',
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }, r.prototype.createElControls_ = function () {
            var t = this.localize("restore all settings to the default values");
            return v("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }, r.prototype.content = function () {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }, r.prototype.label = function () {
            return this.localize("Caption Settings Dialog")
        }, r.prototype.description = function () {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }, r.prototype.buildCSSClass = function () {
            return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }, r.prototype.getValues = function () {
            var t = this;
            return n(no, function (e, n, r) {
                var i = ee(t.$(n.selector), n.parser);
                return void 0 !== i && (e[r] = i), e
            }, {})
        }, r.prototype.setValues = function (t) {
            var n = this;
            e(no, function (e, r) {
                ne(n.$(e.selector), t[r], e.parser)
            })
        }, r.prototype.setDefaults = function () {
            var t = this;
            e(no, function (e) {
                var n = e.hasOwnProperty("default") ? e.default : 0;
                t.$(e.selector).selectedIndex = n
            })
        }, r.prototype.restoreSettings = function () {
            var t = void 0;
            try {
                t = JSON.parse(le.localStorage.getItem("vjs-text-track-settings"))
            } catch (t) {
                Ge.warn(t)
            }
            t && this.setValues(t)
        }, r.prototype.saveSettings = function () {
            if (this.options_.persistTextTrackSettings) {
                var t = this.getValues();
                try {
                    Object.keys(t).length ? le.localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : le.localStorage.removeItem("vjs-text-track-settings")
                } catch (t) {
                    Ge.warn(t)
                }
            }
        }, r.prototype.updateDisplay = function () {
            var t = this.player_.getChild("textTrackDisplay");
            t && t.updateDisplay()
        }, r.prototype.conditionalBlur_ = function () {
            this.previouslyActiveEl_ = null, this.off(de, "keydown", this.handleKeyDown);
            var t = this.player_.controlBar, e = t && t.subsCapsButton, n = t && t.captionsButton;
            e ? e.focus() : n && n.focus()
        }, r
    }(Rn);
    kn.registerComponent("TextTrackSettings", ro);
    var io = $e(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
        oo = function (t) {
            function e(n, r) {
                Re(this, e);
                var i = He(this, t.call(this, n, r)), o = n.source, s = !1;
                if (o && (i.el_.currentSrc !== o.src || n.tag && 3 === n.tag.initNetworkState_) ? i.setSource(o) : i.handleLateInit_(i.el_), i.el_.hasChildNodes()) {
                    for (var a = i.el_.childNodes, l = a.length, c = []; l--;) {
                        var u = a[l];
                        "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), s || i.el_.hasAttribute("crossorigin") || !nr(u.src) || (s = !0)) : c.push(u))
                    }
                    for (var h = 0; h < c.length; h++) i.el_.removeChild(c[h])
                }
                return i.proxyNativeTracks_(), i.featuresNativeTextTracks && s && Ge.warn(Ye(io)), i.restoreMetadataTracksInIOSNativePlayer_(), (Me || me || xe) && !0 === n.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i
            }

            return Be(e, t), e.prototype.dispose = function () {
                e.disposeMediaElement(this.el_), this.options_ = null, t.prototype.dispose.call(this)
            }, e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
                var t = this.textTracks(), e = void 0, n = function () {
                    e = [];
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        "metadata" === r.kind && e.push({track: r, storedMode: r.mode})
                    }
                };
                n(), t.addEventListener("change", n), this.on("dispose", function () {
                    return t.removeEventListener("change", n)
                });
                var r = function n() {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
                    }
                    t.removeEventListener("change", n)
                };
                this.on("webkitbeginfullscreen", function () {
                    t.removeEventListener("change", n), t.removeEventListener("change", r), t.addEventListener("change", r)
                }), this.on("webkitendfullscreen", function () {
                    t.removeEventListener("change", n), t.addEventListener("change", n), t.removeEventListener("change", r)
                })
            }, e.prototype.proxyNativeTracks_ = function () {
                var t = this;
                Cr.names.forEach(function (e) {
                    var n = Cr[e], r = t.el()[n.getterName], i = t[n.getterName]();
                    if (t["featuresNative" + n.capitalName + "Tracks"] && r && r.addEventListener) {
                        var o = {
                            change: function (t) {
                                i.trigger({type: "change", target: i, currentTarget: i, srcElement: i})
                            }, addtrack: function (t) {
                                i.addTrack(t.track)
                            }, removetrack: function (t) {
                                i.removeTrack(t.track)
                            }
                        }, s = function () {
                            for (var t = [], e = 0; e < i.length; e++) {
                                for (var n = !1, o = 0; o < r.length; o++) if (r[o] === i[e]) {
                                    n = !0;
                                    break
                                }
                                n || t.push(i[e])
                            }
                            for (; t.length;) i.removeTrack(t.shift())
                        };
                        Object.keys(o).forEach(function (e) {
                            var n = o[e];
                            r.addEventListener(e, n), t.on("dispose", function (t) {
                                return r.removeEventListener(e, n)
                            })
                        }), t.on("loadstart", s), t.on("dispose", function (e) {
                            return t.off("loadstart", s)
                        })
                    }
                })
            }, e.prototype.createEl = function () {
                var t = this.options_.tag;
                if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                    if (t) {
                        var n = t.cloneNode(!0);
                        t.parentNode && t.parentNode.insertBefore(n, t), e.disposeMediaElement(t), t = n
                    } else {
                        t = de.createElement("video");
                        var i = this.options_.tag && C(this.options_.tag), o = tt({}, i);
                        Me && !0 === this.options_.nativeControlsForTouch || delete o.controls, w(t, r(o, {
                            id: this.options_.techId,
                            class: "vjs-tech"
                        }))
                    }
                    t.playerId = this.options_.playerId
                }
                void 0 !== this.options_.preload && x(t, "preload", this.options_.preload);
                for (var s = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < s.length; a++) {
                    var l = s[a], c = this.options_[l];
                    void 0 !== c && (c ? x(t, l, l) : E(t, l), t[l] = c)
                }
                return t
            }, e.prototype.handleLateInit_ = function (t) {
                if (0 !== t.networkState && 3 !== t.networkState) {
                    if (0 === t.readyState) {
                        var e = !1, n = function () {
                            e = !0
                        };
                        this.on("loadstart", n);
                        var r = function () {
                            e || this.trigger("loadstart")
                        };
                        return this.on("loadedmetadata", r), void this.ready(function () {
                            this.off("loadstart", n), this.off("loadedmetadata", r), e || this.trigger("loadstart")
                        })
                    }
                    var i = ["loadstart"];
                    i.push("loadedmetadata"), t.readyState >= 2 && i.push("loadeddata"), t.readyState >= 3 && i.push("canplay"), t.readyState >= 4 && i.push("canplaythrough"), this.ready(function () {
                        i.forEach(function (t) {
                            this.trigger(t)
                        }, this)
                    })
                }
            }, e.prototype.setCurrentTime = function (t) {
                try {
                    this.el_.currentTime = t
                } catch (t) {
                    Ge(t, "Video is not ready. (Video.js)")
                }
            }, e.prototype.duration = function () {
                var t = this;
                if (this.el_.duration === 1 / 0 && we && je && 0 === this.el_.currentTime) {
                    var e = function e() {
                        t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                    };
                    return this.on("timeupdate", e), NaN
                }
                return this.el_.duration || NaN
            }, e.prototype.width = function () {
                return this.el_.offsetWidth
            }, e.prototype.height = function () {
                return this.el_.offsetHeight
            }, e.prototype.proxyWebkitFullscreen_ = function () {
                var t = this;
                if ("webkitDisplayingFullscreen" in this.el_) {
                    var e = function () {
                        this.trigger("fullscreenchange", {isFullscreen: !1})
                    }, n = function () {
                        "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {isFullscreen: !0}))
                    };
                    this.on("webkitbeginfullscreen", n), this.on("dispose", function () {
                        t.off("webkitbeginfullscreen", n), t.off("webkitendfullscreen", e)
                    })
                }
            }, e.prototype.supportsFullScreen = function () {
                if ("function" == typeof this.el_.webkitEnterFullScreen) {
                    var t = le.navigator && le.navigator.userAgent || "";
                    if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                }
                return !1
            }, e.prototype.enterFullScreen = function () {
                var t = this.el_;
                t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                    t.pause(), t.webkitEnterFullScreen()
                }, 0)) : t.webkitEnterFullScreen()
            }, e.prototype.exitFullScreen = function () {
                this.el_.webkitExitFullScreen()
            }, e.prototype.src = function (t) {
                if (void 0 === t) return this.el_.src;
                this.setSrc(t)
            }, e.prototype.reset = function () {
                e.resetMediaElement(this.el_)
            }, e.prototype.currentSrc = function () {
                return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
            }, e.prototype.setControls = function (t) {
                this.el_.controls = !!t
            }, e.prototype.addTextTrack = function (e, n, r) {
                return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, n, r) : t.prototype.addTextTrack.call(this, e, n, r)
            }, e.prototype.createRemoteTextTrack = function (e) {
                if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
                var n = de.createElement("track");
                return e.kind && (n.kind = e.kind), e.label && (n.label = e.label), (e.language || e.srclang) && (n.srclang = e.language || e.srclang), e.default && (n.default = e.default), e.id && (n.id = e.id), e.src && (n.src = e.src), n
            }, e.prototype.addRemoteTextTrack = function (e, n) {
                var r = t.prototype.addRemoteTextTrack.call(this, e, n);
                return this.featuresNativeTextTracks && this.el().appendChild(r), r
            }, e.prototype.removeRemoteTextTrack = function (e) {
                if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var n = this.$$("track"), r = n.length; r--;) e !== n[r] && e !== n[r].track || this.el().removeChild(n[r])
            }, e.prototype.getVideoPlaybackQuality = function () {
                if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                var t = {};
                return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), le.performance && "function" == typeof le.performance.now ? t.creationTime = le.performance.now() : le.performance && le.performance.timing && "number" == typeof le.performance.timing.navigationStart && (t.creationTime = le.Date.now() - le.performance.timing.navigationStart), t
            }, e
        }(Hr);
    if (h()) {
        oo.TEST_VID = de.createElement("video");
        var so = de.createElement("track");
        so.kind = "captions", so.srclang = "en", so.label = "English", oo.TEST_VID.appendChild(so)
    }
    oo.isSupported = function () {
        try {
            oo.TEST_VID.volume = .5
        } catch (t) {
            return !1
        }
        return !(!oo.TEST_VID || !oo.TEST_VID.canPlayType)
    },
        oo.canPlayType = function (t) {
            return oo.TEST_VID.canPlayType(t)
        }, oo.canPlaySource = function (t, e) {
        return oo.canPlayType(t.type)
    }, oo.canControlVolume = function () {
        try {
            var t = oo.TEST_VID.volume;
            return oo.TEST_VID.volume = t / 2 + .1, t !== oo.TEST_VID.volume
        } catch (t) {
            return !1
        }
    }, oo.canControlPlaybackRate = function () {
        if (we && je && Ae < 58) return !1;
        try {
            var t = oo.TEST_VID.playbackRate;
            return oo.TEST_VID.playbackRate = t / 2 + .1, t !== oo.TEST_VID.playbackRate
        } catch (t) {
            return !1
        }
    }, oo.supportsNativeTextTracks = function () {
        return Pe
    }, oo.supportsNativeVideoTracks = function () {
        return !(!oo.TEST_VID || !oo.TEST_VID.videoTracks)
    }, oo.supportsNativeAudioTracks = function () {
        return !(!oo.TEST_VID || !oo.TEST_VID.audioTracks)
    }, oo.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], oo.prototype.featuresVolumeControl = oo.canControlVolume(), oo.prototype.featuresPlaybackRate = oo.canControlPlaybackRate(), oo.prototype.movingMediaElementInDOM = !_e, oo.prototype.featuresFullscreenResize = !0, oo.prototype.featuresProgressEvents = !0, oo.prototype.featuresTimeupdateEvents = !0, oo.prototype.featuresNativeTextTracks = oo.supportsNativeTextTracks(), oo.prototype.featuresNativeVideoTracks = oo.supportsNativeVideoTracks(), oo.prototype.featuresNativeAudioTracks = oo.supportsNativeAudioTracks();
    var ao = oo.TEST_VID && oo.TEST_VID.constructor.prototype.canPlayType,
        lo = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, co = /^video\/mp4/i;
    oo.patchCanPlayType = function () {
        Ce >= 4 && !Ee ? oo.TEST_VID.constructor.prototype.canPlayType = function (t) {
            return t && lo.test(t) ? "maybe" : ao.call(this, t)
        } : ke && (oo.TEST_VID.constructor.prototype.canPlayType = function (t) {
            return t && co.test(t) ? "maybe" : ao.call(this, t)
        })
    }, oo.unpatchCanPlayType = function () {
        var t = oo.TEST_VID.constructor.prototype.canPlayType;
        return oo.TEST_VID.constructor.prototype.canPlayType = ao, t
    }, oo.patchCanPlayType(), oo.disposeMediaElement = function (t) {
        if (t) {
            for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
            t.removeAttribute("src"), "function" == typeof t.load && function () {
                try {
                    t.load()
                } catch (t) {
                }
            }()
        }
    }, oo.resetMediaElement = function (t) {
        if (t) {
            for (var e = t.querySelectorAll("source"), n = e.length; n--;) t.removeChild(e[n]);
            t.removeAttribute("src"), "function" == typeof t.load && function () {
                try {
                    t.load()
                } catch (t) {
                }
            }()
        }
    }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (t) {
        oo.prototype[t] = function () {
            return this.el_[t] || this.el_.hasAttribute(t)
        }
    }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) {
        oo.prototype["set" + Q(t)] = function (e) {
            this.el_[t] = e, e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
        }
    }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (t) {
        oo.prototype[t] = function () {
            return this.el_[t]
        }
    }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (t) {
        oo.prototype["set" + Q(t)] = function (e) {
            this.el_[t] = e
        }
    }), ["pause", "load", "play"].forEach(function (t) {
        oo.prototype[t] = function () {
            return this.el_[t]()
        }
    }), Hr.withSourceHandlers(oo), oo.nativeSourceHandler = {}, oo.nativeSourceHandler.canPlayType = function (t) {
        try {
            return oo.TEST_VID.canPlayType(t)
        } catch (t) {
            return ""
        }
    }, oo.nativeSourceHandler.canHandleSource = function (t, e) {
        if (t.type) return oo.nativeSourceHandler.canPlayType(t.type);
        if (t.src) {
            var n = er(t.src);
            return oo.nativeSourceHandler.canPlayType("video/" + n)
        }
        return ""
    }, oo.nativeSourceHandler.handleSource = function (t, e, n) {
        e.setSrc(t.src)
    }, oo.nativeSourceHandler.dispose = function () {
    }, oo.registerSourceHandler(oo.nativeSourceHandler), Hr.registerTech("Html5", oo);
    var uo = $e(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See //github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See //github.com/videojs/video.js/issues/2617 for more info.\n      "]),
        ho = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "resize", "volumechange", "texttrackchange"],
        po = function (t) {
            function e(n, i, o) {
                if (Re(this, e), n.id = n.id || "vjs_video_" + R(), i = r(e.getTagSettings(n), i), i.initChildren = !1, i.createEl = !1, i.evented = !1, i.reportTouchActivity = !1, !i.language) if ("function" == typeof n.closest) {
                    var s = n.closest("[lang]");
                    s && s.getAttribute && (i.language = s.getAttribute("lang"))
                } else for (var a = n; a && 1 === a.nodeType;) {
                    if (C(a).hasOwnProperty("lang")) {
                        i.language = a.getAttribute("lang");
                        break
                    }
                    a = a.parentNode
                }
                var l = He(this, t.call(this, null, i, o));
                if (l.isReady_ = !1, l.hasStarted_ = !1, l.userActive_ = !1, !l.options_ || !l.options_.techOrder || !l.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                if (l.tag = n, l.tagAttributes = n && C(n), l.language(l.options_.language), i.languages) {
                    var c = {};
                    Object.getOwnPropertyNames(i.languages).forEach(function (t) {
                        c[t.toLowerCase()] = i.languages[t]
                    }), l.languages_ = c
                } else l.languages_ = e.prototype.options_.languages;
                l.cache_ = {}, l.poster_ = i.poster || "", l.controls_ = !!i.controls, l.cache_.lastVolume = 1, n.controls = !1, n.removeAttribute("controls"), l.scrubbing_ = !1, l.el_ = l.createEl(), K(l, {eventBusKey: "el_"});
                var u = tt(l.options_);
                if (i.plugins) {
                    var h = i.plugins;
                    Object.keys(h).forEach(function (t) {
                        if ("function" != typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
                        this[t](h[t])
                    }, l)
                }
                l.options_.playerOptions = u, l.middleware_ = [], l.initChildren(), l.isAudio("audio" === n.nodeName.toLowerCase()), l.controls() ? l.addClass("vjs-controls-enabled") : l.addClass("vjs-controls-disabled"), l.el_.setAttribute("role", "region"), l.isAudio() ? l.el_.setAttribute("aria-label", l.localize("Audio Player")) : l.el_.setAttribute("aria-label", l.localize("Video Player")), l.isAudio() && l.addClass("vjs-audio"), l.flexNotSupported_() && l.addClass("vjs-no-flex"), _e || l.addClass("vjs-workinghover"), e.players[l.id_] = l;
                var p = oe.split(".")[0];
                return l.addClass("vjs-v" + p), l.userActive(!0), l.reportUserActivity(), l.listenForUserActivity_(), l.on("fullscreenchange", l.handleFullscreenChange_), l.on("stageclick", l.handleStageClick_), l.changingSrc_ = !1, l.playWaitingForReady_ = !1, l.playOnLoadstart_ = null, l.forceAutoplayInChrome_(), l
            }

            return Be(e, t), e.prototype.dispose = function () {
                this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), t.prototype.dispose.call(this)
            }, e.prototype.createEl = function () {
                var e = this.tag, n = void 0,
                    r = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"),
                    i = "video-js" === this.tag.tagName.toLowerCase();
                r ? n = this.el_ = e.parentNode : i || (n = this.el_ = t.prototype.createEl.call(this, "div"));
                var o = C(e);
                if (i) {
                    for (n = this.el_ = e, e = this.tag = de.createElement("video"); n.children.length;) e.appendChild(n.firstChild);
                    m(n, "video-js") || b(n, "video-js"), n.appendChild(e), r = this.playerElIngest_ = n
                }
                if (e.setAttribute("tabindex", "-1"), e.removeAttribute("width"), e.removeAttribute("height"), Object.getOwnPropertyNames(o).forEach(function (t) {
                    "class" === t ? (n.className += " " + o[t], i && (e.className += " " + o[t])) : (n.setAttribute(t, o[t]), i && e.setAttribute(t, o[t]))
                }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = n.player = this, this.addClass("vjs-paused"), !0 !== le.VIDEOJS_NO_DYNAMIC_STYLE) {
                    this.styleEl_ = un("vjs-styles-dimensions");
                    var s = Je(".vjs-styles-defaults"), a = Je("head");
                    a.insertBefore(this.styleEl_, s ? s.nextSibling : a.firstChild)
                }
                this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                for (var l = e.getElementsByTagName("a"), c = 0; c < l.length; c++) {
                    var u = l.item(c);
                    b(u, "vjs-hidden"), u.setAttribute("hidden", "hidden")
                }
                return e.initNetworkState_ = e.networkState, e.parentNode && !r && e.parentNode.insertBefore(n, e), g(e, n), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = n, n
            }, e.prototype.width = function (t, e) {
                return this.dimension("width", t, e)
            }, e.prototype.height = function (t, e) {
                return this.dimension("height", t, e)
            }, e.prototype.dimension = function (t, e, n) {
                var r = t + "_";
                if (void 0 === e) return this[r] || 0;
                if ("" === e) return this[r] = void 0, void this.updateStyleEl_();
                var i = parseFloat(e);
                if (isNaN(i)) return void Ge.error('Improper value "' + e + '" supplied for for ' + t);
                this[r] = i, this.updateStyleEl_(), this.isReady_ && !n && this.trigger("playerresize")
            }, e.prototype.fluid = function (t) {
                if (void 0 === t) return !!this.fluid_;
                this.fluid_ = !!t, t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
            }, e.prototype.aspectRatio = function (t) {
                if (void 0 === t) return this.aspectRatio_;
                if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
            }, e.prototype.updateStyleEl_ = function () {
                if (!0 === le.VIDEOJS_NO_DYNAMIC_STYLE) {
                    var t = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                        e = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                        n = this.tech_ && this.tech_.el();
                    return void (n && (t >= 0 && (n.width = t), e >= 0 && (n.height = e)))
                }
                var r = void 0, i = void 0, o = void 0, s = void 0;
                o = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                var a = o.split(":"), l = a[1] / a[0];
                r = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, i = void 0 !== this.height_ ? this.height_ : r * l, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s), hn(this.styleEl_, "\n      ." + s + " {\n        width: " + r + "px;\n        height: " + i + "px;\n      }\n\n      ." + s + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
            }, e.prototype.loadTech_ = function (t, e) {
                var n = this;
                this.tech_ && this.unloadTech_();
                var i = Q(t), o = t.charAt(0).toLowerCase() + t.slice(1);
                "Html5" !== i && this.tag && (Hr.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = i, this.isReady_ = !1;
                var s = {
                    source: e,
                    nativeControlsForTouch: this.options_.nativeControlsForTouch,
                    playerId: this.id(),
                    techId: this.id() + "_" + i + "_api",
                    autoplay: this.options_.autoplay,
                    playsinline: this.options_.playsinline,
                    preload: this.options_.preload,
                    loop: this.options_.loop,
                    muted: this.options_.muted,
                    poster: this.poster(),
                    language: this.language(),
                    playerElIngest: this.playerElIngest_ || !1,
                    "vtt.js": this.options_["vtt.js"]
                };
                xr.names.forEach(function (t) {
                    var e = xr[t];
                    s[e.getterName] = n[e.privateName]
                }), r(s, this.options_[i]), r(s, this.options_[o]), r(s, this.options_[t.toLowerCase()]), this.tag && (s.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime);
                var a = Hr.getTech(t);
                if (!a) throw new Error("No Tech named '" + i + "' exists! '" + i + "' should be registered using videojs.registerTech()'");
                this.tech_ = new a(s), this.tech_.ready(pn(this, this.handleTechReady_), !0), Ln.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), ho.forEach(function (t) {
                    n.on(n.tech_, t, n["handleTech" + Q(t) + "_"])
                }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === i && this.tag || g(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
            }, e.prototype.unloadTech_ = function () {
                var t = this;
                xr.names.forEach(function (e) {
                    var n = xr[e];
                    t[n.privateName] = t[n.getterName]()
                }), this.textTracksJson_ = Ln.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
            }, e.prototype.tech = function (t) {
                return void 0 === t && Ge.warn(Ye(uo)), this.tech_
            }, e.prototype.addTechControlsListeners_ = function () {
                this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
            }, e.prototype.removeTechControlsListeners_ = function () {
                this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
            }, e.prototype.handleTechReady_ = function () {
                if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                    delete this.tag.poster
                } catch (t) {
                    Ge("deleting tag.poster throws in some browsers", t)
                }
            }, e.prototype.handleTechLoadStart_ = function () {
                this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
            }, e.prototype.hasStarted = function (t) {
                if (void 0 === t) return this.hasStarted_;
                t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
            }, e.prototype.handleTechPlay_ = function () {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
            }, e.prototype.handleTechWaiting_ = function () {
                var t = this;
                this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                    return t.removeClass("vjs-waiting")
                })
            }, e.prototype.handleTechCanPlay_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("canplay")
            }, e.prototype.handleTechCanPlayThrough_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
            }, e.prototype.handleTechPlaying_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("playing")
            }, e.prototype.handleTechSeeking_ = function () {
                this.addClass("vjs-seeking"), this.trigger("seeking")
            }, e.prototype.handleTechSeeked_ = function () {
                this.removeClass("vjs-seeking"), this.trigger("seeked")
            }, e.prototype.handleTechFirstPlay_ = function () {
                this.options_.starttime && (Ge.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
            }, e.prototype.handleTechPause_ = function () {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
            }, e.prototype.handleTechEnded_ = function () {
                this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
            }, e.prototype.handleTechDurationChange_ = function () {
                this.duration(this.techGet_("duration"))
            }, e.prototype.handleTechClick_ = function (t) {
                F(t) && this.controls_ && (this.paused() ? this.play() : this.pause())
            }, e.prototype.handleTechTap_ = function () {
                this.userActive(!this.userActive())
            }, e.prototype.handleTechTouchStart_ = function () {
                this.userWasActive = this.userActive()
            }, e.prototype.handleTechTouchMove_ = function () {
                this.userWasActive && this.reportUserActivity()
            }, e.prototype.handleTechTouchEnd_ = function (t) {
                t.preventDefault()
            }, e.prototype.handleFullscreenChange_ = function () {
                this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
            }, e.prototype.handleStageClick_ = function () {
                this.reportUserActivity()
            }, e.prototype.handleTechFullscreenChange_ = function (t, e) {
                e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
            }, e.prototype.handleTechError_ = function () {
                var t = this.tech_.error();
                this.error(t)
            }, e.prototype.handleTechTextData_ = function () {
                var t = null;
                arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
            }, e.prototype.getCache = function () {
                return this.cache_
            }, e.prototype.techCall_ = function (t, e) {
                this.ready(function () {
                    if (t in Vr) return Gt(this.middleware_, this.tech_, t, e);
                    try {
                        this.tech_ && this.tech_[t](e)
                    } catch (t) {
                        throw Ge(t), t
                    }
                }, !0)
            }, e.prototype.techGet_ = function (t) {
                if (this.tech_ && this.tech_.isReady_) {
                    if (t in qr) return Xt(this.middleware_, this.tech_, t);
                    try {
                        return this.tech_[t]()
                    } catch (e) {
                        if (void 0 === this.tech_[t]) throw Ge("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                        if ("TypeError" === e.name) throw Ge("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                        throw Ge(e), e
                    }
                }
            }, e.prototype.play = function () {
                var t = this;
                if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                    if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
                    this.playOnLoadstart_ = function () {
                        t.playOnLoadstart_ = null, ct(t.play())
                    }, this.one("loadstart", this.playOnLoadstart_)
                } else {
                    if (this.playWaitingForReady_) return;
                    this.playWaitingForReady_ = !0, this.ready(function () {
                        t.playWaitingForReady_ = !1, ct(t.play())
                    })
                }
            }, e.prototype.pause = function () {
                this.techCall_("pause")
            }, e.prototype.paused = function () {
                return !1 !== this.techGet_("paused")
            }, e.prototype.played = function () {
                return this.techGet_("played") || it(0, 0)
            }, e.prototype.scrubbing = function (t) {
                if (void 0 === t) return this.scrubbing_;
                this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
            }, e.prototype.currentTime = function (t) {
                return void 0 !== t ? (t < 0 && (t = 0), void this.techCall_("setCurrentTime", t)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
            }, e.prototype.duration = function (t) {
                if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                t = parseFloat(t), t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
            }, e.prototype.remainingTime = function () {
                return this.duration() - this.currentTime()
            }, e.prototype.remainingTimeDisplay = function () {
                return Math.floor(this.duration()) - Math.floor(this.currentTime())
            }, e.prototype.buffered = function () {
                var t = this.techGet_("buffered");
                return t && t.length || (t = it(0, 0)), t
            }, e.prototype.bufferedPercent = function () {
                return ot(this.buffered(), this.duration())
            }, e.prototype.bufferedEnd = function () {
                var t = this.buffered(), e = this.duration(), n = t.end(t.length - 1);
                return n > e && (n = e), n
            }, e.prototype.volume = function (t) {
                var e = void 0;
                return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void (e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
            }, e.prototype.muted = function (t) {
                return void 0 !== t ? void this.techCall_("setMuted", t) : this.techGet_("muted") || !1
            }, e.prototype.defaultMuted = function (t) {
                return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
            }, e.prototype.lastVolume_ = function (t) {
                return void 0 !== t && 0 !== t ? void (this.cache_.lastVolume = t) : this.cache_.lastVolume
            }, e.prototype.supportsFullScreen = function () {
                return this.techGet_("supportsFullScreen") || !1
            }, e.prototype.isFullscreen = function (t) {
                return void 0 !== t ? void (this.isFullscreen_ = !!t) : !!this.isFullscreen_
            }, e.prototype.requestFullscreen = function () {
                var t = xn;
                this.isFullscreen(!0), t.requestFullscreen ? (U(de, t.fullscreenchange, pn(this, function e(n) {
                    this.isFullscreen(de[t.fullscreenElement]), !1 === this.isFullscreen() && z(de, t.fullscreenchange, e), this.trigger("fullscreenchange")
                })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
            }, e.prototype.exitFullscreen = function () {
                var t = xn;
                this.isFullscreen(!1), t.requestFullscreen ? de[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
            }, e.prototype.enterFullWindow = function () {
                this.isFullWindow = !0, this.docOrigOverflow = de.documentElement.style.overflow, U(de, "keydown", pn(this, this.fullWindowOnEscKey)), de.documentElement.style.overflow = "hidden", b(de.body, "vjs-full-window"), this.trigger("enterFullWindow")
            }, e.prototype.fullWindowOnEscKey = function (t) {
                27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
            }, e.prototype.exitFullWindow = function () {
                this.isFullWindow = !1, z(de, "keydown", this.fullWindowOnEscKey), de.documentElement.style.overflow = this.docOrigOverflow, _(de.body, "vjs-full-window"), this.trigger("exitFullWindow")
            }, e.prototype.canPlayType = function (t) {
                for (var e = void 0, n = 0, r = this.options_.techOrder; n < r.length; n++) {
                    var i = r[n], o = Hr.getTech(i);
                    if (o || (o = kn.getComponent(i)), o) {
                        if (o.isSupported() && (e = o.canPlayType(t))) return e
                    } else Ge.error('The "' + i + '" tech is undefined. Skipped browser support check for that tech.')
                }
                return ""
            }, e.prototype.selectSource = function (t) {
                var e = this, n = this.options_.techOrder.map(function (t) {
                    return [t, Hr.getTech(t)]
                }).filter(function (t) {
                    var e = t[0], n = t[1];
                    return n ? n.isSupported() : (Ge.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                }), r = function (t, e, n) {
                    var r = void 0;
                    return t.some(function (t) {
                        return e.some(function (e) {
                            if (r = n(t, e)) return !0
                        })
                    }), r
                }, i = function (t, n) {
                    var r = t[0];
                    if (t[1].canPlaySource(n, e.options_[r.toLowerCase()])) return {source: n, tech: r}
                };
                return (this.options_.sourceOrder ? r(t, n, function (t) {
                    return function (e, n) {
                        return t(n, e)
                    }
                }(i)) : r(n, t, i)) || !1
            }, e.prototype.src = function (t) {
                var e = this;
                if (void 0 === t) return this.cache_.src || "";
                var n = Wr(t);
                if (!n.length) return void this.setTimeout(function () {
                    this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                }, 0);
                this.cache_.sources = n, this.changingSrc_ = !0, this.cache_.source = n[0], Ut(this, n[0], function (t, r) {
                    if (e.middleware_ = r, e.src_(t)) return n.length > 1 ? e.src(n.slice(1)) : (e.setTimeout(function () {
                        this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                    }, 0), void e.triggerReady());
                    e.changingSrc_ = !1, e.cache_.src = t.src, zt(r, e.tech_)
                })
            }, e.prototype.src_ = function (t) {
                var e = this.selectSource([t]);
                return !e || (Z(e.tech, this.techName_) ? (this.ready(function () {
                    this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load()
                }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(e.tech, e.source), !1))
            }, e.prototype.load = function () {
                this.techCall_("load")
            }, e.prototype.reset = function () {
                this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
            }, e.prototype.currentSources = function () {
                var t = this.currentSource(), e = [];
                return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
            }, e.prototype.currentSource = function () {
                return this.cache_.source || {}
            }, e.prototype.currentSrc = function () {
                return this.currentSource() && this.currentSource().src || ""
            }, e.prototype.currentType = function () {
                return this.currentSource() && this.currentSource().type || ""
            }, e.prototype.preload = function (t) {
                return void 0 !== t ? (this.techCall_("setPreload", t), void (this.options_.preload = t)) : this.techGet_("preload")
            }, e.prototype.autoplay = function (t) {
                return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, void this.ready(this.forceAutoplayInChrome_)) : this.techGet_("autoplay", t)
            }, e.prototype.forceAutoplayInChrome_ = function () {
                this.paused() && (this.autoplay() || this.options_.autoplay) && je && !we && this.play()
            }, e.prototype.playsinline = function (t) {
                return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
            }, e.prototype.loop = function (t) {
                return void 0 !== t ? (this.techCall_("setLoop", t), void (this.options_.loop = t)) : this.techGet_("loop")
            }, e.prototype.poster = function (t) {
                if (void 0 === t) return this.poster_;
                t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange")
            }, e.prototype.handleTechPosterChange_ = function () {
                !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
            }, e.prototype.controls = function (t) {
                if (void 0 === t) return !!this.controls_;
                t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
            }, e.prototype.usingNativeControls = function (t) {
                if (void 0 === t) return !!this.usingNativeControls_;
                t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
            }, e.prototype.error = function (t) {
                return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new st(t), this.addClass("vjs-error"), Ge.error("(CODE:" + this.error_.code + " " + st.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
            }, e.prototype.reportUserActivity = function (t) {
                this.userActivity_ = !0
            }, e.prototype.userActive = function (t) {
                if (void 0 === t) return this.userActive_;
                if ((t = !!t) !== this.userActive_) {
                    if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                    this.tech_ && this.tech_.one("mousemove", function (t) {
                        t.stopPropagation(), t.preventDefault()
                    }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                }
            }, e.prototype.listenForUserActivity_ = function () {
                var t = void 0, e = void 0, n = void 0, r = pn(this, this.reportUserActivity), i = function (t) {
                    t.screenX === e && t.screenY === n || (e = t.screenX, n = t.screenY, r())
                }, o = function () {
                    r(), this.clearInterval(t), t = this.setInterval(r, 250)
                }, s = function (e) {
                    r(), this.clearInterval(t)
                };
                this.on("mousedown", o), this.on("mousemove", i), this.on("mouseup", s), this.on("keydown", r), this.on("keyup", r);
                var a = void 0;
                this.setInterval(function () {
                    if (this.userActivity_) {
                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                        var t = this.options_.inactivityTimeout;
                        t <= 0 || (a = this.setTimeout(function () {
                            this.userActivity_ || this.userActive(!1)
                        }, t))
                    }
                }, 250)
            }, e.prototype.playbackRate = function (t) {
                return void 0 !== t ? void this.techCall_("setPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
            }, e.prototype.defaultPlaybackRate = function (t) {
                return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
            }, e.prototype.isAudio = function (t) {
                return void 0 !== t ? void (this.isAudio_ = !!t) : !!this.isAudio_
            }, e.prototype.addTextTrack = function (t, e, n) {
                if (this.tech_) return this.tech_.addTextTrack(t, e, n)
            }, e.prototype.addRemoteTextTrack = function (t, e) {
                if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
            }, e.prototype.removeRemoteTextTrack = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.track,
                    n = void 0 === e ? arguments[0] : e;
                if (this.tech_) return this.tech_.removeRemoteTextTrack(n)
            }, e.prototype.getVideoPlaybackQuality = function () {
                return this.techGet_("getVideoPlaybackQuality")
            }, e.prototype.videoWidth = function () {
                return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
            }, e.prototype.videoHeight = function () {
                return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
            }, e.prototype.language = function (t) {
                if (void 0 === t) return this.language_;
                this.language_ = String(t).toLowerCase()
            }, e.prototype.languages = function () {
                return tt(e.prototype.options_.languages, this.languages_)
            }, e.prototype.toJSON = function () {
                var t = tt(this.options_), e = t.tracks;
                t.tracks = [];
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r = tt(r), r.player = void 0, t.tracks[n] = r
                }
                return t
            }, e.prototype.createModal = function (t, e) {
                var n = this;
                e = e || {}, e.content = t || "";
                var r = new Rn(this, e);
                return this.addChild(r), r.on("dispose", function () {
                    n.removeChild(r)
                }), r.open(), r
            }, e.getTagSettings = function (t) {
                var e = {sources: [], tracks: []}, n = C(t), i = n["data-setup"];
                if (m(t, "vjs-fluid") && (n.fluid = !0), null !== i) {
                    var o = Nn(i || "{}"), s = o[0], a = o[1];
                    s && Ge.error(s), r(n, a)
                }
                if (r(e, n), t.hasChildNodes()) for (var l = t.childNodes, c = 0, u = l.length; c < u; c++) {
                    var h = l[c], p = h.nodeName.toLowerCase();
                    "source" === p ? e.sources.push(C(h)) : "track" === p && e.tracks.push(C(h))
                }
                return e
            },e.prototype.flexNotSupported_ = function () {
                var t = de.createElement("i");
                return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
            },e
        }(kn);
    xr.names.forEach(function (t) {
        var e = xr[t];
        po.prototype[e.getterName] = function () {
            return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
        }
    }), po.players = {};
    var fo = le.navigator;
    po.prototype.options_ = {
        techOrder: Hr.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
        language: fo && (fo.languages && fo.languages[0] || fo.userLanguage || fo.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media."
    }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (t) {
        po.prototype[t] = function () {
            return this.techGet_(t)
        }
    }), ho.forEach(function (t) {
        po.prototype["handleTech" + Q(t) + "_"] = function () {
            return this.trigger(t)
        }
    }), kn.registerComponent("Player", po);
    var vo = {}, yo = function (t) {
        return vo.hasOwnProperty(t)
    }, go = function (t) {
        return yo(t) ? vo[t] : void 0
    }, mo = function (t, e) {
        t.activePlugins_ = t.activePlugins_ || {}, t.activePlugins_[e] = !0
    }, bo = function (t, e, n) {
        var r = (n ? "before" : "") + "pluginsetup";
        t.trigger(r, e), t.trigger(r + ":" + e.name, e)
    }, _o = function (t, e) {
        var n = function () {
            bo(this, {name: t, plugin: e, instance: null}, !0);
            var n = e.apply(this, arguments);
            return mo(this, t), bo(this, {name: t, plugin: e, instance: n}), n
        };
        return Object.keys(e).forEach(function (t) {
            n[t] = e[t]
        }), n
    }, To = function (t, e) {
        return e.prototype.name = t, function () {
            bo(this, {name: t, plugin: e, instance: null}, !0);
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            var o = new (Function.prototype.bind.apply(e, [null].concat([this].concat(r))));
            return this[t] = function () {
                return o
            }, bo(this, o.getEventHash()), o
        }
    }, wo = function () {
        function t(e) {
            if (Re(this, t), this.constructor === t) throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = e, K(this), delete this.trigger, J(this, this.constructor.defaultState), mo(e, this.name), this.dispose = pn(this, this.dispose), e.on("dispose", this.dispose)
        }

        return t.prototype.version = function () {
            return this.constructor.VERSION
        }, t.prototype.getEventHash = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
        }, t.prototype.trigger = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return X(this.eventBusEl_, t, this.getEventHash(e))
        }, t.prototype.handleStateChanged = function (t) {
        }, t.prototype.dispose = function () {
            var t = this.name, e = this.player;
            this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e.activePlugins_[t] = !1, this.player = this.state = null, e[t] = To(t, vo[t])
        }, t.isBasic = function (e) {
            var n = "string" == typeof e ? go(e) : e;
            return "function" == typeof n && !t.prototype.isPrototypeOf(n.prototype)
        }, t.registerPlugin = function (e, n) {
            if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : Fe(e)) + ".");
            if (yo(e)) Ge.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!'); else if (po.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
            if ("function" != typeof n) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === n ? "undefined" : Fe(n)) + ".");
            return vo[e] = n, "plugin" !== e && (t.isBasic(n) ? po.prototype[e] = _o(e, n) : po.prototype[e] = To(e, n)), n
        }, t.deregisterPlugin = function (t) {
            if ("plugin" === t) throw new Error("Cannot de-register base plugin.");
            yo(t) && (delete vo[t], delete po.prototype[t])
        }, t.getPlugins = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(vo), e = void 0;
            return t.forEach(function (t) {
                var n = go(t);
                n && (e = e || {}, e[t] = n)
            }), e
        }, t.getPluginVersion = function (t) {
            var e = go(t);
            return e && e.VERSION || ""
        }, t
    }();
    wo.getPlugin = go, wo.BASE_PLUGIN_NAME = "plugin", wo.registerPlugin("plugin", wo), po.prototype.usingPlugin = function (t) {
        return !!this.activePlugins_ && !0 === this.activePlugins_[t]
    }, po.prototype.hasPlugin = function (t) {
        return !!yo(t)
    };
    var Co = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : Fe(e)));
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (t.super_ = e)
    }, ko = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function () {
            t.apply(this, arguments)
        }, r = {};
        "object" === (void 0 === e ? "undefined" : Fe(e)) ? (e.constructor !== Object.prototype.constructor && (n = e.constructor), r = e) : "function" == typeof e && (n = e), Co(n, t);
        for (var i in r) r.hasOwnProperty(i) && (n.prototype[i] = r[i]);
        return n
    };
    if ("undefined" == typeof HTMLVideoElement && h() && (de.createElement("video"), de.createElement("audio"), de.createElement("track"), de.createElement("video-js")), re.hooks_ = {}, re.hooks = function (t, e) {
        return re.hooks_[t] = re.hooks_[t] || [], e && (re.hooks_[t] = re.hooks_[t].concat(e)), re.hooks_[t]
    }, re.hook = function (t, e) {
        re.hooks(t, e)
    }, re.hookOnce = function (t, e) {
        re.hooks(t, [].concat(e).map(function (e) {
            return function n() {
                return re.removeHook(t, n), e.apply(void 0, arguments)
            }
        }))
    }, re.removeHook = function (t, e) {
        var n = re.hooks(t).indexOf(e);
        return !(n <= -1 || (re.hooks_[t] = re.hooks_[t].slice(), re.hooks_[t].splice(n, 1), 0))
    }, !0 !== le.VIDEOJS_NO_DYNAMIC_STYLE && h()) {
        var xo = Je(".vjs-styles-defaults");
        if (!xo) {
            xo = un("vjs-styles-defaults");
            var Eo = Je("head");
            Eo && Eo.insertBefore(xo, Eo.firstChild), hn(xo, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    return Y(1, re), re.VERSION = oe, re.options = po.prototype.options_, re.getPlayers = function () {
        return po.players
    }, re.players = po.players, re.getComponent = kn.getComponent, re.registerComponent = function (t, e) {
        Hr.isTech(e) && Ge.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), kn.registerComponent.call(kn, t, e)
    }, re.getTech = Hr.getTech, re.registerTech = Hr.registerTech, re.use = Wt, re.browser = Le, re.TOUCH_ENABLED = Me, re.extend = ko, re.mergeOptions = tt, re.bind = pn, re.registerPlugin = wo.registerPlugin, re.plugin = function (t, e) {
        return Ge.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), wo.registerPlugin(t, e)
    }, re.getPlugins = wo.getPlugins, re.getPlugin = wo.getPlugin, re.getPluginVersion = wo.getPluginVersion, re.addLanguage = function (t, e) {
        var n;
        return t = ("" + t).toLowerCase(), re.options.languages = tt(re.options.languages, (n = {}, n[t] = e, n)), re.options.languages[t]
    }, re.log = Ge, re.createTimeRange = re.createTimeRanges = it, re.formatTime = Zt, re.parseUrl = Zn, re.isCrossOrigin = nr, re.EventTarget = fn, re.on = U, re.one = G, re.off = z, re.trigger = X, re.xhr = fr, re.TextTrack = gr, re.AudioTrack = mr, re.VideoTrack = br, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (t) {
        re[t] = function () {
            return Ge.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), Ze[t].apply(null, arguments)
        }
    }), re.computedStyle = a, re.dom = Ze, re.url = rr, re
}), function (t, e) {
    void 0 === t.HTMLVideoElement && (e.createElement("video"), e.createElement("audio"), e.createElement("track")), function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.returnExports = e()
    }(this, function () {
        var e, n = Array, r = n.prototype, i = Object, o = i.prototype, s = Function.prototype, a = String,
            l = a.prototype, c = Number, u = c.prototype, h = r.slice, p = r.splice, d = r.push, f = r.unshift,
            v = r.concat, y = s.call, g = s.apply, m = Math.max, b = Math.min, _ = o.toString,
            T = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, w = Function.prototype.toString,
            C = function (t) {
                try {
                    return w.call(t), !0
                } catch (t) {
                    return !1
                }
            };
        e = function (t) {
            if ("function" != typeof t) return !1;
            if (T) return C(t);
            var e = _.call(t);
            return "[object Function]" === e || "[object GeneratorFunction]" === e
        };
        var k, x = RegExp.prototype.exec, E = function (t) {
            try {
                return x.call(t), !0
            } catch (t) {
                return !1
            }
        };
        k = function (t) {
            return "object" == typeof t && (T ? E(t) : "[object RegExp]" === _.call(t))
        };
        var S, j = String.prototype.valueOf, A = function (t) {
            try {
                return j.call(t), !0
            } catch (t) {
                return !1
            }
        };
        S = function (t) {
            return "string" == typeof t || "object" == typeof t && (T ? A(t) : "[object String]" === _.call(t))
        };
        var O = i.defineProperty && function () {
            try {
                var t = {};
                i.defineProperty(t, "x", {enumerable: !1, value: t});
                for (var e in t) return !1;
                return t.x === t
            } catch (t) {
                return !1
            }
        }(), D = function (t) {
            var e;
            return e = O ? function (t, e, n, r) {
                !r && e in t || i.defineProperty(t, e, {configurable: !0, enumerable: !1, writable: !0, value: n})
            } : function (t, e, n, r) {
                !r && e in t || (t[e] = n)
            }, function (n, r, i) {
                for (var o in r) t.call(r, o) && e(n, o, r[o], i)
            }
        }(o.hasOwnProperty), N = function (t) {
            var e = typeof t;
            return null === t || "object" !== e && "function" !== e
        }, P = c.isNaN || function (t) {
            return t !== t
        }, M = {
            ToInteger: function (t) {
                var e = +t;
                return P(e) ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
            }, ToPrimitive: function (t) {
                var n, r, i;
                if (N(t)) return t;
                if (r = t.valueOf, e(r) && (n = r.call(t), N(n))) return n;
                if (i = t.toString, e(i) && (n = i.call(t), N(n))) return n;
                throw new TypeError
            }, ToObject: function (t) {
                if (null == t) throw new TypeError("can't convert " + t + " to object");
                return i(t)
            }, ToUint32: function (t) {
                return t >>> 0
            }
        }, I = function () {
        };
        D(s, {
            bind: function (t) {
                var n = this;
                if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                for (var r, o = h.call(arguments, 1), s = function () {
                    if (this instanceof r) {
                        var e = n.apply(this, v.call(o, h.call(arguments)));
                        return i(e) === e ? e : this
                    }
                    return n.apply(t, v.call(o, h.call(arguments)))
                }, a = m(0, n.length - o.length), l = [], c = 0; a > c; c++) d.call(l, "$" + c);
                return r = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && (I.prototype = n.prototype, r.prototype = new I, I.prototype = null), r
            }
        });
        var L = y.bind(o.hasOwnProperty), F = y.bind(o.toString), R = y.bind(h), B = g.bind(h), H = y.bind(l.slice),
            $ = y.bind(l.split), q = y.bind(l.indexOf), V = y.bind(d), W = y.bind(o.propertyIsEnumerable),
            U = y.bind(r.sort), z = n.isArray || function (t) {
                return "[object Array]" === F(t)
            }, X = 1 !== [].unshift(0);
        D(r, {
            unshift: function () {
                return f.apply(this, arguments), this.length
            }
        }, X), D(n, {isArray: z});
        var G = i("a"), Y = "a" !== G[0] || !(0 in G), K = function (t) {
            var e = !0, n = !0, r = !1;
            if (t) try {
                t.call("foo", function (t, n, r) {
                    "object" != typeof r && (e = !1)
                }), t.call([1], function () {
                    "use strict";
                    n = "string" == typeof this
                }, "x")
            } catch (t) {
                r = !0
            }
            return !!t && !r && e && n
        };
        D(r, {
            forEach: function (t) {
                var n, r = M.ToObject(this), i = Y && S(this) ? $(this, "") : r, o = -1, s = M.ToUint32(i.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                for (; ++o < s;) o in i && (void 0 === n ? t(i[o], o, r) : t.call(n, i[o], o, r))
            }
        }, !K(r.forEach)), D(r, {
            map: function (t) {
                var r, i = M.ToObject(this), o = Y && S(this) ? $(this, "") : i, s = M.ToUint32(o.length), a = n(s);
                if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                for (var l = 0; s > l; l++) l in o && (a[l] = void 0 === r ? t(o[l], l, i) : t.call(r, o[l], l, i));
                return a
            }
        }, !K(r.map)), D(r, {
            filter: function (t) {
                var n, r, i = M.ToObject(this), o = Y && S(this) ? $(this, "") : i, s = M.ToUint32(o.length), a = [];
                if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                for (var l = 0; s > l; l++) l in o && (n = o[l], (void 0 === r ? t(n, l, i) : t.call(r, n, l, i)) && V(a, n));
                return a
            }
        }, !K(r.filter)), D(r, {
            every: function (t) {
                var n, r = M.ToObject(this), i = Y && S(this) ? $(this, "") : r, o = M.ToUint32(i.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                for (var s = 0; o > s; s++) if (s in i && !(void 0 === n ? t(i[s], s, r) : t.call(n, i[s], s, r))) return !1;
                return !0
            }
        }, !K(r.every)), D(r, {
            some: function (t) {
                var n, r = M.ToObject(this), i = Y && S(this) ? $(this, "") : r, o = M.ToUint32(i.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                for (var s = 0; o > s; s++) if (s in i && (void 0 === n ? t(i[s], s, r) : t.call(n, i[s], s, r))) return !0;
                return !1
            }
        }, !K(r.some));
        var J = !1;
        r.reduce && (J = "object" == typeof r.reduce.call("es5", function (t, e, n, r) {
            return r
        })), D(r, {
            reduce: function (t) {
                var n = M.ToObject(this), r = Y && S(this) ? $(this, "") : n, i = M.ToUint32(r.length);
                if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                if (0 === i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                var o, s = 0;
                if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                    if (s in r) {
                        o = r[s++];
                        break
                    }
                    if (++s >= i) throw new TypeError("reduce of empty array with no initial value")
                }
                for (; i > s; s++) s in r && (o = t(o, r[s], s, n));
                return o
            }
        }, !J);
        var Q = !1;
        r.reduceRight && (Q = "object" == typeof r.reduceRight.call("es5", function (t, e, n, r) {
            return r
        })), D(r, {
            reduceRight: function (t) {
                var n = M.ToObject(this), r = Y && S(this) ? $(this, "") : n, i = M.ToUint32(r.length);
                if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                if (0 === i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                var o, s = i - 1;
                if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                    if (s in r) {
                        o = r[s--];
                        break
                    }
                    if (--s < 0) throw new TypeError("reduceRight of empty array with no initial value")
                }
                if (0 > s) return o;
                do {
                    s in r && (o = t(o, r[s], s, n))
                } while (s--);
                return o
            }
        }, !Q);
        var Z = r.indexOf && -1 !== [0, 1].indexOf(1, 2);
        D(r, {
            indexOf: function (t) {
                var e = Y && S(this) ? $(this, "") : M.ToObject(this), n = M.ToUint32(e.length);
                if (0 === n) return -1;
                var r = 0;
                for (arguments.length > 1 && (r = M.ToInteger(arguments[1])), r = r >= 0 ? r : m(0, n + r); n > r; r++) if (r in e && e[r] === t) return r;
                return -1
            }
        }, Z);
        var tt = r.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
        D(r, {
            lastIndexOf: function (t) {
                var e = Y && S(this) ? $(this, "") : M.ToObject(this), n = M.ToUint32(e.length);
                if (0 === n) return -1;
                var r = n - 1;
                for (arguments.length > 1 && (r = b(r, M.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in e && t === e[r]) return r;
                return -1
            }
        }, tt);
        var et = function () {
            var t = [1, 2], e = t.splice();
            return 2 === t.length && z(e) && 0 === e.length
        }();
        D(r, {
            splice: function (t, e) {
                return 0 === arguments.length ? [] : p.apply(this, arguments)
            }
        }, !et);
        var nt = function () {
            var t = {};
            return r.splice.call(t, 0, 0, 1), 1 === t.length
        }();
        D(r, {
            splice: function (t, e) {
                if (0 === arguments.length) return [];
                var n = arguments;
                return this.length = m(M.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof e && (n = R(arguments), n.length < 2 ? V(n, this.length - t) : n[1] = M.ToInteger(e)), p.apply(this, n)
            }
        }, !nt);
        var rt = function () {
            var t = new n(1e5);
            return t[8] = "x", t.splice(1, 1), 7 === t.indexOf("x")
        }(), it = function () {
            var t = [];
            return t[256] = "a", t.splice(257, 0, "b"), "a" === t[256]
        }();
        D(r, {
            splice: function (t, e) {
                for (var n, r = M.ToObject(this), i = [], o = M.ToUint32(r.length), s = M.ToInteger(t), l = 0 > s ? m(o + s, 0) : b(s, o), c = b(m(M.ToInteger(e), 0), o - l), u = 0; c > u;) n = a(l + u), L(r, n) && (i[u] = r[n]), u += 1;
                var h, p = R(arguments, 2), d = p.length;
                if (c > d) {
                    for (u = l; o - c > u;) n = a(u + c), h = a(u + d), L(r, n) ? r[h] = r[n] : delete r[h], u += 1;
                    for (u = o; u > o - c + d;) delete r[u - 1], u -= 1
                } else if (d > c) for (u = o - c; u > l;) n = a(u + c - 1), h = a(u + d - 1), L(r, n) ? r[h] = r[n] : delete r[h], u -= 1;
                u = l;
                for (var f = 0; f < p.length; ++f) r[u] = p[f], u += 1;
                return r.length = o - c + d, i
            }
        }, !rt || !it);
        var ot, st = r.join;
        try {
            ot = "1,2,3" !== Array.prototype.join.call("123", ",")
        } catch (t) {
            ot = !0
        }
        ot && D(r, {
            join: function (t) {
                var e = void 0 === t ? "," : t;
                return st.call(S(this) ? $(this, "") : this, e)
            }
        }, ot);
        var at = "1,2" !== [1, 2].join(void 0);
        at && D(r, {
            join: function (t) {
                var e = void 0 === t ? "," : t;
                return st.call(this, e)
            }
        }, at);
        var lt = function (t) {
            for (var e = M.ToObject(this), n = M.ToUint32(e.length), r = 0; r < arguments.length;) e[n + r] = arguments[r], r += 1;
            return e.length = n + r, n + r
        }, ct = function () {
            var t = {};
            return 1 !== Array.prototype.push.call(t, void 0) || 1 !== t.length || void 0 !== t[0] || !L(t, 0)
        }();
        D(r, {
            push: function (t) {
                return z(this) ? d.apply(this, arguments) : lt.apply(this, arguments)
            }
        }, ct);
        var ut = function () {
            var t = [];
            return 1 !== t.push(void 0) || 1 !== t.length || void 0 !== t[0] || !L(t, 0)
        }();
        D(r, {push: lt}, ut), D(r, {
            slice: function (t, e) {
                var n = S(this) ? $(this, "") : this;
                return B(n, arguments)
            }
        }, Y);
        var ht = function () {
            try {
                return [1, 2].sort(null), [1, 2].sort({}), !0
            } catch (t) {
            }
            return !1
        }(), pt = function () {
            try {
                return [1, 2].sort(/a/), !1
            } catch (t) {
            }
            return !0
        }(), dt = function () {
            try {
                return [1, 2].sort(void 0), !0
            } catch (t) {
            }
            return !1
        }();
        D(r, {
            sort: function (t) {
                if (void 0 === t) return U(this);
                if (!e(t)) throw new TypeError("Array.prototype.sort callback must be a function");
                return U(this, t)
            }
        }, ht || !dt || !pt);
        var ft = !{toString: null}.propertyIsEnumerable("toString"), vt = function () {
            }.propertyIsEnumerable("prototype"), yt = !L("x", "0"), gt = function (t) {
                var e = t.constructor;
                return e && e.prototype === t
            }, mt = {
                $window: !0,
                $console: !0,
                $parent: !0,
                $self: !0,
                $frame: !0,
                $frames: !0,
                $frameElement: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $external: !0
            }, bt = function () {
                if (void 0 === t) return !1;
                for (var e in t) try {
                    !mt["$" + e] && L(t, e) && null !== t[e] && "object" == typeof t[e] && gt(t[e])
                } catch (t) {
                    return !0
                }
                return !1
            }(), _t = function (e) {
                if (void 0 === t || !bt) return gt(e);
                try {
                    return gt(e)
                } catch (t) {
                    return !1
                }
            },
            Tt = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            wt = Tt.length, Ct = function (t) {
                return "[object Arguments]" === F(t)
            }, kt = function (t) {
                return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !z(t) && e(t.callee)
            }, xt = Ct(arguments) ? Ct : kt;
        D(i, {
            keys: function (t) {
                var n = e(t), r = xt(t), i = null !== t && "object" == typeof t, o = i && S(t);
                if (!i && !n && !r) throw new TypeError("Object.keys called on a non-object");
                var s = [], l = vt && n;
                if (o && yt || r) for (var c = 0; c < t.length; ++c) V(s, a(c));
                if (!r) for (var u in t) l && "prototype" === u || !L(t, u) || V(s, a(u));
                if (ft) for (var h = _t(t), p = 0; wt > p; p++) {
                    var d = Tt[p];
                    h && "constructor" === d || !L(t, d) || V(s, d)
                }
                return s
            }
        });
        var Et = i.keys && function () {
            return 2 === i.keys(arguments).length
        }(1, 2), St = i.keys && function () {
            var t = i.keys(arguments);
            return 1 !== arguments.length || 1 !== t.length || 1 !== t[0]
        }(1), jt = i.keys;
        D(i, {
            keys: function (t) {
                return jt(xt(t) ? R(t) : t)
            }
        }, !Et || St);
        var At, Ot, Dt = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(), Nt = new Date(-0x55d318d56a724),
            Pt = new Date(14496624e5), Mt = "Mon, 01 Jan -45875 11:59:59 GMT" !== Nt.toUTCString();
        -720 > Nt.getTimezoneOffset() ? (At = "Tue Jan 02 -45875" !== Nt.toDateString(), Ot = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Pt.toString())) : (At = "Mon Jan 01 -45875" !== Nt.toDateString(), Ot = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Pt.toString()));
        var It = y.bind(Date.prototype.getFullYear), Lt = y.bind(Date.prototype.getMonth),
            Ft = y.bind(Date.prototype.getDate), Rt = y.bind(Date.prototype.getUTCFullYear),
            Bt = y.bind(Date.prototype.getUTCMonth), Ht = y.bind(Date.prototype.getUTCDate),
            $t = y.bind(Date.prototype.getUTCDay), qt = y.bind(Date.prototype.getUTCHours),
            Vt = y.bind(Date.prototype.getUTCMinutes), Wt = y.bind(Date.prototype.getUTCSeconds),
            Ut = y.bind(Date.prototype.getUTCMilliseconds), zt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
            Xt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            Gt = function (t, e) {
                return Ft(new Date(e, t, 0))
            };
        D(Date.prototype, {
            getFullYear: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = It(this);
                return 0 > t && Lt(this) > 11 ? t + 1 : t
            }, getMonth: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = It(this), e = Lt(this);
                return 0 > t && e > 11 ? 0 : e
            }, getDate: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = It(this), e = Lt(this), n = Ft(this);
                if (0 > t && e > 11) {
                    if (12 === e) return n;
                    return Gt(0, t + 1) - n + 1
                }
                return n
            }, getUTCFullYear: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = Rt(this);
                return 0 > t && Bt(this) > 11 ? t + 1 : t
            }, getUTCMonth: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = Rt(this), e = Bt(this);
                return 0 > t && e > 11 ? 0 : e
            }, getUTCDate: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = Rt(this), e = Bt(this), n = Ht(this);
                if (0 > t && e > 11) {
                    if (12 === e) return n;
                    return Gt(0, t + 1) - n + 1
                }
                return n
            }
        }, Dt), D(Date.prototype, {
            toUTCString: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = $t(this), e = Ht(this), n = Bt(this), r = Rt(this), i = qt(this), o = Vt(this), s = Wt(this);
                return zt[t] + ", " + (10 > e ? "0" + e : e) + " " + Xt[n] + " " + r + " " + (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > s ? "0" + s : s) + " GMT"
            }
        }, Dt || Mt), D(Date.prototype, {
            toDateString: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var t = this.getDay(), e = this.getDate(), n = this.getMonth(), r = this.getFullYear();
                return zt[t] + " " + Xt[n] + " " + (10 > e ? "0" + e : e) + " " + r
            }
        }, Dt || At), (Dt || Ot) && (Date.prototype.toString = function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = this.getDay(), e = this.getDate(), n = this.getMonth(), r = this.getFullYear(), i = this.getHours(),
                o = this.getMinutes(), s = this.getSeconds(), a = this.getTimezoneOffset(),
                l = Math.floor(Math.abs(a) / 60), c = Math.floor(Math.abs(a) % 60);
            return zt[t] + " " + Xt[n] + " " + (10 > e ? "0" + e : e) + " " + r + " " + (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > s ? "0" + s : s) + " GMT" + (a > 0 ? "-" : "+") + (10 > l ? "0" + l : l) + (10 > c ? "0" + c : c)
        }, O && i.defineProperty(Date.prototype, "toString", {configurable: !0, enumerable: !1, writable: !0}));
        var Yt = -621987552e5, Kt = "-000001",
            Jt = Date.prototype.toISOString && -1 === new Date(Yt).toISOString().indexOf(Kt),
            Qt = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString();
        D(Date.prototype, {
            toISOString: function () {
                if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                var t = Rt(this), e = Bt(this);
                t += Math.floor(e / 12), e = (e % 12 + 12) % 12;
                var n = [e + 1, Ht(this), qt(this), Vt(this), Wt(this)];
                t = (0 > t ? "-" : t > 9999 ? "+" : "") + H("00000" + Math.abs(t), t >= 0 && 9999 >= t ? -4 : -6);
                for (var r = 0; r < n.length; ++r) n[r] = H("00" + n[r], -2);
                return t + "-" + R(n, 0, 2).join("-") + "T" + R(n, 2).join(":") + "." + H("000" + Ut(this), -3) + "Z"
            }
        }, Jt || Qt), function () {
            try {
                return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(Yt).toJSON().indexOf(Kt) && Date.prototype.toJSON.call({
                    toISOString: function () {
                        return !0
                    }
                })
            } catch (t) {
                return !1
            }
        }() || (Date.prototype.toJSON = function (t) {
            var n = i(this), r = M.ToPrimitive(n);
            if ("number" == typeof r && !isFinite(r)) return null;
            var o = n.toISOString;
            if (!e(o)) throw new TypeError("toISOString property is not callable");
            return o.call(n)
        });
        var Zt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
            te = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
        if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || te || !Zt) {
            var ee = Math.pow(2, 31) - 1, ne = P(new Date(1970, 0, 1, 0, 0, 0, ee + 1).getTime());
            Date = function (t) {
                var e = function (n, r, i, o, s, l, c) {
                        var u, h = arguments.length;
                        if (this instanceof t) {
                            var p = l, d = c;
                            if (ne && h >= 7 && c > ee) {
                                var f = Math.floor(c / ee) * ee, v = Math.floor(f / 1e3);
                                p += v, d -= 1e3 * v
                            }
                            u = 1 === h && a(n) === n ? new t(e.parse(n)) : h >= 7 ? new t(n, r, i, o, s, p, d) : h >= 6 ? new t(n, r, i, o, s, p) : h >= 5 ? new t(n, r, i, o, s) : h >= 4 ? new t(n, r, i, o) : h >= 3 ? new t(n, r, i) : h >= 2 ? new t(n, r) : h >= 1 ? new t(n) : new t
                        } else u = t.apply(this, arguments);
                        return N(u) || D(u, {constructor: e}, !0), u
                    },
                    n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                    r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], i = function (t, e) {
                        var n = e > 1 ? 1 : 0;
                        return r[e] + Math.floor((t - 1969 + n) / 4) - Math.floor((t - 1901 + n) / 100) + Math.floor((t - 1601 + n) / 400) + 365 * (t - 1970)
                    }, o = function (e) {
                        var n = 0, r = e;
                        if (ne && r > ee) {
                            var i = Math.floor(r / ee) * ee, o = Math.floor(i / 1e3);
                            n += o, r -= 1e3 * o
                        }
                        return c(new t(1970, 0, 1, 0, 0, n, r))
                    };
                for (var s in t) L(t, s) && (e[s] = t[s]);
                return D(e, {
                    now: t.now,
                    UTC: t.UTC
                }, !0), e.prototype = t.prototype, D(e.prototype, {constructor: e}, !0), D(e, {
                    parse: function (e) {
                        var r = n.exec(e);
                        if (r) {
                            var s, a = c(r[1]), l = c(r[2] || 1) - 1, u = c(r[3] || 1) - 1, h = c(r[4] || 0),
                                p = c(r[5] || 0), d = c(r[6] || 0), f = Math.floor(1e3 * c(r[7] || 0)),
                                v = Boolean(r[4] && !r[8]), y = "-" === r[9] ? 1 : -1, g = c(r[10] || 0),
                                m = c(r[11] || 0);
                            return (p > 0 || d > 0 || f > 0 ? 24 : 25) > h && 60 > p && 60 > d && 1e3 > f && l > -1 && 12 > l && 24 > g && 60 > m && u > -1 && u < i(a, l + 1) - i(a, l) && (s = 60 * (24 * (i(a, l) + u) + h + g * y), s = 1e3 * (60 * (s + p + m * y) + d) + f, v && (s = o(s)), s >= -864e13 && 864e13 >= s) ? s : NaN
                        }
                        return t.parse.apply(this, arguments)
                    }
                }), e
            }(Date)
        }
        Date.now || (Date.now = function () {
            return (new Date).getTime()
        });
        var re = u.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
            ie = {
                base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function (t, e) {
                    for (var n = -1, r = e; ++n < ie.size;) r += t * ie.data[n], ie.data[n] = r % ie.base, r = Math.floor(r / ie.base)
                }, divide: function (t) {
                    for (var e = ie.size, n = 0; --e >= 0;) n += ie.data[e], ie.data[e] = Math.floor(n / t), n = n % t * ie.base
                }, numToString: function () {
                    for (var t = ie.size, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== ie.data[t]) {
                        var n = a(ie.data[t]);
                        "" === e ? e = n : e += H("0000000", 0, 7 - n.length) + n
                    }
                    return e
                }, pow: function t(e, n, r) {
                    return 0 === n ? r : n % 2 == 1 ? t(e, n - 1, r * e) : t(e * e, n / 2, r)
                }, log: function (t) {
                    for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                    for (; n >= 2;) e += 1, n /= 2;
                    return e
                }
            }, oe = function (t) {
                var e, n, r, i, o, s, l, u;
                if (e = c(t), 0 > (e = P(e) ? 0 : Math.floor(e)) || e > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (n = c(this), P(n)) return "NaN";
                if (-1e21 >= n || n >= 1e21) return a(n);
                if (r = "", 0 > n && (r = "-", n = -n), i = "0", n > 1e-21) if (o = ie.log(n * ie.pow(2, 69, 1)) - 69, s = 0 > o ? n * ie.pow(2, -o, 1) : n / ie.pow(2, o, 1), s *= 4503599627370496, (o = 52 - o) > 0) {
                    for (ie.multiply(0, s), l = e; l >= 7;) ie.multiply(1e7, 0), l -= 7;
                    for (ie.multiply(ie.pow(10, l, 1), 0), l = o - 1; l >= 23;) ie.divide(1 << 23), l -= 23;
                    ie.divide(1 << l), ie.multiply(1, 1), ie.divide(2), i = ie.numToString()
                } else ie.multiply(0, s), ie.multiply(1 << -o, 0), i = ie.numToString() + H("0.00000000000000000000", 2, 2 + e);
                return e > 0 ? (u = i.length, i = e >= u ? r + H("0.0000000000000000000", 0, e - u + 2) + i : r + H(i, 0, u - e) + "." + H(i, u - e)) : i = r + i, i
            };
        D(u, {toFixed: oe}, re);
        var se = function () {
            try {
                return "1" === 1..toPrecision(void 0)
            } catch (t) {
                return !0
            }
        }(), ae = u.toPrecision;
        D(u, {
            toPrecision: function (t) {
                return void 0 === t ? ae.call(this) : ae.call(this, t)
            }
        }, se), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function () {
            var t = void 0 === /()??/.exec("")[1], e = Math.pow(2, 32) - 1;
            l.split = function (n, r) {
                var i = String(this);
                if (void 0 === n && 0 === r) return [];
                if (!k(n)) return $(this, n, r);
                var o, s, a, l, c = [],
                    u = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (n.sticky ? "y" : ""),
                    h = 0, p = new RegExp(n.source, u + "g");
                t || (o = new RegExp("^" + p.source + "$(?!\\s)", u));
                var f = void 0 === r ? e : M.ToUint32(r);
                for (s = p.exec(i); s && !((a = s.index + s[0].length) > h && (V(c, H(i, h, s.index)), !t && s.length > 1 && s[0].replace(o, function () {
                    for (var t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (s[t] = void 0)
                }), s.length > 1 && s.index < i.length && d.apply(c, R(s, 1)), l = s[0].length, h = a, c.length >= f));) p.lastIndex === s.index && p.lastIndex++, s = p.exec(i);
                return h === i.length ? (l || !p.test("")) && V(c, "") : V(c, H(i, h)), c.length > f ? H(c, 0, f) : c
            }
        }() : "0".split(void 0, 0).length && (l.split = function (t, e) {
            return void 0 === t && 0 === e ? [] : $(this, t, e)
        });
        var le = l.replace;
        (function () {
            var t = [];
            return "x".replace(/x(.)?/g, function (e, n) {
                V(t, n)
            }), 1 === t.length && void 0 === t[0]
        })() || (l.replace = function (t, n) {
            var r = e(n), i = k(t) && /\)[*?]/.test(t.source);
            if (r && i) {
                var o = function (e) {
                    var r = arguments.length, i = t.lastIndex;
                    t.lastIndex = 0;
                    var o = t.exec(e) || [];
                    return t.lastIndex = i, V(o, arguments[r - 2], arguments[r - 1]), n.apply(this, o)
                };
                return le.call(this, t, o)
            }
            return le.call(this, t, n)
        });
        var ce = l.substr, ue = "".substr && "b" !== "0b".substr(-1);
        D(l, {
            substr: function (t, e) {
                var n = t;
                return 0 > t && (n = m(this.length + t, 0)), ce.call(this, n, e)
            }
        }, ue);
        var he = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff", pe = "​", de = "[" + he + "]",
            fe = new RegExp("^" + de + de + "*"), ve = new RegExp(de + de + "*$"),
            ye = l.trim && (he.trim() || !pe.trim());
        D(l, {
            trim: function () {
                if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
                return a(this).replace(fe, "").replace(ve, "")
            }
        }, ye);
        var ge = y.bind(String.prototype.trim), me = l.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
        D(l, {
            lastIndexOf: function (t) {
                if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
                for (var e = a(this), n = a(t), r = arguments.length > 1 ? c(arguments[1]) : NaN, i = P(r) ? 1 / 0 : M.ToInteger(r), o = b(m(i, 0), e.length), s = n.length, l = o + s; l > 0;) {
                    l = m(0, l - s);
                    var u = q(H(e, l, o + s), n);
                    if (-1 !== u) return l + u
                }
                return -1
            }
        }, me);
        var be = l.lastIndexOf;
        if (D(l, {
            lastIndexOf: function (t) {
                return be.apply(this, arguments)
            }
        }, 1 !== l.lastIndexOf.length), (8 !== parseInt(he + "08") || 22 !== parseInt(he + "0x16")) && (parseInt = function (t) {
            var e = /^[\-+]?0[xX]/;
            return function (n, r) {
                var i = ge(n), o = c(r) || (e.test(i) ? 16 : 10);
                return t(i, o)
            }
        }(parseInt)), 1 / parseFloat("-0") != -1 / 0 && (parseFloat = function (t) {
            return function (e) {
                var n = ge(e), r = t(n);
                return 0 === r && "-" === H(n, 0, 1) ? -0 : r
            }
        }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
            var _e = function () {
                if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
                var t = this.name;
                void 0 === t ? t = "Error" : "string" != typeof t && (t = a(t));
                var e = this.message;
                return void 0 === e ? e = "" : "string" != typeof e && (e = a(e)), t ? e ? t + ": " + e : t : e
            };
            Error.prototype.toString = _e
        }
        if (O) {
            var Te = function (t, e) {
                if (W(t, e)) {
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    n.enumerable = !1, Object.defineProperty(t, e, n)
                }
            };
            Te(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Te(Error.prototype, "name")
        }
        if ("/a/gim" !== String(/a/gim)) {
            var we = function () {
                var t = "/" + this.source + "/";
                return this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), t
            };
            RegExp.prototype.toString = we
        }
    }), function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.returnExports = e()
    }(this, function () {
        var t, n, r, i, o = Function.call, s = Object.prototype, a = o.bind(s.hasOwnProperty),
            l = o.bind(s.propertyIsEnumerable), c = o.bind(s.toString), u = a(s, "__defineGetter__");
        u && (t = o.bind(s.__defineGetter__), n = o.bind(s.__defineSetter__), r = o.bind(s.__lookupGetter__), i = o.bind(s.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function (t) {
            var e = t.__proto__;
            return e || null === e ? e : "[object Function]" === c(t.constructor) ? t.constructor.prototype : t instanceof Object ? s : null
        });
        var h = function (t) {
            try {
                return t.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(t, "sentinel").value
            } catch (t) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var p = h({});
            if (!(void 0 === e || h(e.createElement("div"))) || !p) var d = Object.getOwnPropertyDescriptor
        }
        if (!Object.getOwnPropertyDescriptor || d) {
            Object.getOwnPropertyDescriptor = function (t, e) {
                if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + t);
                if (d) try {
                    return d.call(Object, t, e)
                } catch (t) {
                }
                var n;
                if (!a(t, e)) return n;
                if (n = {enumerable: l(t, e), configurable: !0}, u) {
                    var o = t.__proto__, c = t !== s;
                    c && (t.__proto__ = s);
                    var h = r(t, e), p = i(t, e);
                    if (c && (t.__proto__ = o), h || p) return h && (n.get = h), p && (n.set = p), n
                }
                return n.value = t[e], n.writable = !0, n
            }
        }
        if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (t) {
            return Object.keys(t)
        }), !Object.create) {
            var f, v = !({__proto__: null} instanceof Object), y = function () {
                if (!e.domain) return !1;
                try {
                    return !!new ActiveXObject("htmlfile")
                } catch (t) {
                    return !1
                }
            }, g = function () {
                var t, e;
                return e = new ActiveXObject("htmlfile"), e.write("<script><\/script>"), e.close(), t = e.parentWindow.Object.prototype, e = null, t
            }, m = function () {
                var t, n = e.createElement("iframe"), r = e.body || e.documentElement;
                return n.style.display = "none", r.appendChild(n), n.src = "javascript:", t = n.contentWindow.Object.prototype, r.removeChild(n), n = null, t
            };
            f = v || void 0 === e ? function () {
                return {__proto__: null}
            } : function () {
                var t = y() ? g() : m();
                delete t.constructor, delete t.hasOwnProperty, delete t.propertyIsEnumerable, delete t.isPrototypeOf, delete t.toLocaleString, delete t.toString, delete t.valueOf;
                var e = function () {
                };
                return e.prototype = t, f = function () {
                    return new e
                }, new e
            }, Object.create = function (t, e) {
                var n, r = function () {
                };
                if (null === t) n = f(); else {
                    if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object prototype may only be an Object or null");
                    r.prototype = t, n = new r, n.__proto__ = t
                }
                return void 0 !== e && Object.defineProperties(n, e), n
            }
        }
        var b = function (t) {
            try {
                return Object.defineProperty(t, "sentinel", {}), "sentinel" in t
            } catch (t) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var _ = b({}), T = void 0 === e || b(e.createElement("div"));
            if (!_ || !T) var w = Object.defineProperty, C = Object.defineProperties
        }
        if (!Object.defineProperty || w) {
            Object.defineProperty = function (e, o, a) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.defineProperty called on non-object: " + e);
                if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError("Property description must be an object: " + a);
                if (w) try {
                    return w.call(Object, e, o, a)
                } catch (t) {
                }
                if ("value" in a) if (u && (r(e, o) || i(e, o))) {
                    var l = e.__proto__;
                    e.__proto__ = s, delete e[o], e[o] = a.value, e.__proto__ = l
                } else e[o] = a.value; else {
                    if (!u && ("get" in a || "set" in a)) throw new TypeError("getters & setters can not be defined on this javascript engine");
                    "get" in a && t(e, o, a.get), "set" in a && n(e, o, a.set)
                }
                return e
            }
        }
        (!Object.defineProperties || C) && (Object.defineProperties = function (t, e) {
            if (C) try {
                return C.call(Object, t, e)
            } catch (t) {
            }
            return Object.keys(e).forEach(function (n) {
                "__proto__" !== n && Object.defineProperty(t, n, e[n])
            }), t
        }), Object.seal || (Object.seal = function (t) {
            if (Object(t) !== t) throw new TypeError("Object.seal can only be called on Objects.");
            return t
        }), Object.freeze || (Object.freeze = function (t) {
            if (Object(t) !== t) throw new TypeError("Object.freeze can only be called on Objects.");
            return t
        });
        try {
            Object.freeze(function () {
            })
        } catch (t) {
            Object.freeze = function (t) {
                return function (e) {
                    return "function" == typeof e ? e : t(e)
                }
            }(Object.freeze)
        }
        Object.preventExtensions || (Object.preventExtensions = function (t) {
            if (Object(t) !== t) throw new TypeError("Object.preventExtensions can only be called on Objects.");
            return t
        }), Object.isSealed || (Object.isSealed = function (t) {
            if (Object(t) !== t) throw new TypeError("Object.isSealed can only be called on Objects.");
            return !1
        }), Object.isFrozen || (Object.isFrozen = function (t) {
            if (Object(t) !== t) throw new TypeError("Object.isFrozen can only be called on Objects.");
            return !1
        }), Object.isExtensible || (Object.isExtensible = function (t) {
            if (Object(t) !== t) throw new TypeError("Object.isExtensible can only be called on Objects.");
            for (var e = ""; a(t, e);) e += "?";
            t[e] = !0;
            var n = a(t, e);
            return delete t[e], n
        })
    })
}(window, document);