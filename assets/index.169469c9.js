import { j as t, a as l, r as i, b as h, R as y, c as x } from "./vendor.ff5fefbe.js";
const N = function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
    new MutationObserver(e => {
        for (const s of e)
            if (s.type === "childList")
                for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c)
    }).observe(document, { childList: !0, subtree: !0 });

    function r(e) { const s = {}; return e.integrity && (s.integrity = e.integrity), e.referrerpolicy && (s.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? s.credentials = "include" : e.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s }

    function n(e) {
        if (e.ep) return;
        e.ep = !0;
        const s = r(e);
        fetch(e.href, s)
    }
};
N();
const v = ({ posts: a, loading: o }) => o ? t("h2", { children: "Loading..." }) : t("div", { className: "grid-container gap-4 grid-flow-col ", children: a.map(r => l("div", { className: "max-w-sm rounded overflow-hidden shadow-lg bg_change", children: [t("img", { className: "w-full", src: r.picture, alt: r.name }), l("div", { className: "px-6 py-4", children: [t("a", { className: "font-bold text-xl mb-2 link", href: r.link, target: "_blank", children: r.name }), t("p", { className: "color_description text-base", children: r.name }), a && a.date ? t("span", { className: "inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700", children: new Date(a.date) }) : ""] })] }, r.name)) }),
    P = ({ postsPerPage: a, totalPosts: o, paginate: r }) => { const n = []; for (let e = 1; e <= Math.ceil(o / a); e++) n.push(e); return t("nav", { children: t("ul", { className: "pagination", children: n.map(e => t("li", { className: "page-item", children: t("a", { onClick: () => r(e), href: "#", className: "page-link", children: e }) }, e)) }) }) };
var b = "/Udemy_FreeCourses/assets/logo.ecc203fb.svg";
const w = () => {
    const [a, o] = i.exports.useState([]), [r, n] = i.exports.useState(!1), [e, s] = i.exports.useState(1), [c] = i.exports.useState(9);
    i.exports.useEffect(() => {
        (async() => {
            n(!0);
            const g = await h.get("https://nodeserverwithcatcrypto.herokuapp.com/udemy");
            o(g.data), n(!1)
        })()
    }, []);
    const d = e * c,
        m = d - c,
        f = a.slice(m, d),
        p = u => s(u);
    return l("div", { className: "App-header", children: [t("img", { src: b, className: "App-logo", alt: "logo" }), l("div", { className: "container mt-3", children: [t("h1", { className: "mb-3 h1", children: " Free Courses" }), t(v, { posts: f, loading: r })] }), t(P, { postsPerPage: c, totalPosts: a.length, paginate: p, className: "pagination" })] })
};
y.render(t(x.StrictMode, { children: t(w, {}) }), document.getElementById("root"));