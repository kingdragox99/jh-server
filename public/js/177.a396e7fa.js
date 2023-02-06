"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  [177],
  {
    3275: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return m;
        },
      });
      var s = t(3396);
      const n = { class: "flex items-center justify-center space-x-2" },
        r = (0, s._)(
          "div",
          { class: "w-4 h-4 rounded-full animate-pulse dark:bg-gray-400" },
          null,
          -1
        ),
        i = (0, s._)(
          "div",
          { class: "w-4 h-4 rounded-full animate-pulse dark:bg-gray-500" },
          null,
          -1
        ),
        l = (0, s._)(
          "div",
          { class: "w-4 h-4 rounded-full animate-pulse dark:bg-gray-600" },
          null,
          -1
        ),
        o = [r, i, l];
      function u(e, a, t, r, i, l) {
        return (0, s.wg)(), (0, s.iD)("div", n, o);
      }
      var d = { name: "SpinnerComponents" },
        p = t(89);
      const c = (0, p.Z)(d, [["render", u]]);
      var m = c;
    },
    8177: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return y;
          },
        });
      var s = t(3396),
        n = t(7139),
        r = t(3275);
      const i = { class: "text-gray-600 body-font" },
        l = { class: "container px-5 py-24 mx-auto flex flex-wrap" },
        o = (0, s._)(
          "div",
          { class: "flex w-full mb-10 flex-wrap p-10" },
          [
            (0, s._)(
              "h1",
              {
                class:
                  "sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4",
              },
              " Engraving "
            ),
            (0, s._)(
              "p",
              { class: "lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base" },
              " L'héliogravure, un procédé d’impression qui transpose une photographie sur une plaque de cuivre et qui me permet d’obtenir une nouvelle image. Je choisis des photographies qui me sont très personnelles, prise lors de mes précédents voyages, que je choisis de recadrer pour obtenir une sorte de souvenir parcellaire qui désoriente la lecture de la photo, par sa dégradation. Le résultat deviendra alors intéressant, l’estampe est déformée, abîmée, et surtout dénaturée. Ma photographie, qui de base était très personnelle, devient alors accessible à beaucoup plus de personnes. Cette technique, par son rendu, me permet de désincarner une image personnelle pour obtenir une gamme de sentiment propre à chacun. Ce travail est aussi une grande série de plusieurs gravures que je compte poursuivre durant un long moment. "
            ),
          ],
          -1
        ),
        u = { class: "flex flex-wrap md:-m-2 -m-1" },
        d = { class: "flex flex-wrap w-full justify-center content-center" },
        p = { key: 0, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        c = { key: 1, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        m = { key: 2, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        g = { key: 3, class: "md:p-2 p-1 w-[400px] h-[100px]" },
        h = ["src"],
        x = {
          class: "text-2xl font-medium text-gray-900 mt-6 mb-3 text-center",
        },
        v = { class: "text-center" },
        f = {
          data() {
            return { data: {}, loading: !1 };
          },
          methods: {
            async fetchData() {
              this.loading = !0;
              const e = await fetch("http://5.196.7.243:3000/api/i/engraving");
              (this.data = await e.json()), (this.loading = !1);
            },
          },
          mounted() {
            this.fetchData();
          },
        };
      var w = Object.assign(f, {
        __name: "EngravingView",
        setup(e) {
          return (e, a) => (
            (0, s.wg)(),
            (0, s.iD)("section", i, [
              (0, s._)("div", l, [
                o,
                (0, s._)("div", u, [
                  (0, s._)("div", d, [
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", p, [(0, s.Wm)(r.Z)]))
                      : (0, s.kq)("", !0),
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", c, [(0, s.Wm)(r.Z)]))
                      : (0, s.kq)("", !0),
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", m, [(0, s.Wm)(r.Z)]))
                      : (0, s.kq)("", !0),
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", g))
                      : (0, s.kq)("", !0),
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        e.data,
                        (e) => (
                          (0, s.wg)(),
                          (0, s.iD)(
                            "div",
                            { key: e._id, class: "md:p-2 p-1" },
                            [
                              (0, s._)(
                                "img",
                                {
                                  class:
                                    "w-[400px] object-cover h-[400px] object-center block",
                                  src: e.img.data,
                                  alt: "gallery",
                                },
                                null,
                                8,
                                h
                              ),
                              (0, s._)("h2", x, (0, n.zw)(e.name), 1),
                              (0, s._)("p", v, (0, n.zw)(e.desc), 1),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ])
          );
        },
      });
      const b = w;
      var y = b;
    },
  },
]);
//# sourceMappingURL=177.a396e7fa.js.map
