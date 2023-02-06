"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  [103],
  {
    3275: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = a(3396);
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
        u = [r, i, l];
      function d(e, t, a, r, i, l) {
        return (0, s.wg)(), (0, s.iD)("div", n, u);
      }
      var o = { name: "SpinnerComponents" },
        c = a(89);
      const p = (0, c.Z)(o, [["render", d]]);
      var m = p;
    },
    6103: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var s = a(3396),
        n = a(7139),
        r = a(3275);
      const i = { class: "text-gray-600 body-font" },
        l = { class: "container px-5 py-24 mx-auto flex flex-wrap" },
        u = (0, s._)(
          "div",
          { class: "flex w-full mb-10 flex-wrap p-10" },
          [
            (0, s._)(
              "h1",
              {
                class:
                  "sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4",
              },
              " Painting "
            ),
            (0, s._)(
              "p",
              { class: "lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base" },
              " Une des choses les plus importantes dans mon travail, est d’atteindre la limite entre la figuration et l’abstraction. Être entre ces deux bords exprime ce que je veux partager – un souvenir personnel désincarné. Lorsque je travaille, je suis constamment en train de prendre du recul sur ce que je fais pour ne pas essayer de tomber dans l’un ou dans l’autre. Je reproduis la perspective de l’image qui m’intéresse, les grands axes et la profondeur de champ donneront tout ce côté « figuratif ». Mon travail doit rester dans une sorte d’équilibre entre les deux pour que cela me touche. Ça doit amener a beaucoup de questions, est-ce un paysage ? Sont-ce des taches ? Qu’est-ce qui est représenté finalement ? Ainsi, le spectateur réfléchit à ce genre de questions, qui permettent de se perdre dans le tableau. Souvent touché par ses émotions ou bien par son côté premier degré qui fera surface. Je ne peins pas forcément de message clair. Je peins quelque chose qui m’est propre, propre à ma vie, que ça date de plusieurs années ou tout simplement d’hier. Je montre des lieux que j’ai vus, des moments que j’ai vécus. Je peins cela de façon à exprimer un vague souvenir qu’il me reste, et cela me permet de forcer ma mémoire jusqu’à ses limites. Voir jusqu’où je pourrai me remémorer, à quel moindre détail je peux faire référence, et de rentrer dans une autre dimension de mon travail. "
            ),
          ],
          -1
        ),
        d = { class: "flex flex-wrap md:-m-2 -m-1" },
        o = { class: "flex flex-wrap w-full justify-center content-center" },
        c = { key: 0, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        p = { key: 1, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        m = { key: 2, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        g = { key: 3, class: "md:p-2 p-1 w-[400px] h-[100px]" },
        f = ["src"],
        x = {
          class: "text-2xl font-medium text-gray-900 mt-6 mb-3 text-center",
        },
        v = { class: "text-center" },
        h = {
          data() {
            return { data: {}, loading: !1 };
          },
          methods: {
            async fetchData() {
              this.loading = !0;
              const e = await fetch("http://5.196.7.243:3000/api/i/painting");
              (this.data = await e.json()), (this.loading = !1);
            },
          },
          mounted() {
            this.fetchData();
          },
        };
      var w = Object.assign(h, {
        __name: "PaintingView",
        setup(e) {
          return (e, t) => (
            (0, s.wg)(),
            (0, s.iD)("section", i, [
              (0, s._)("div", l, [
                u,
                (0, s._)("div", d, [
                  (0, s._)("div", o, [
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", c, [(0, s.Wm)(r.Z)]))
                      : (0, s.kq)("", !0),
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", p, [(0, s.Wm)(r.Z)]))
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
                                f
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
      const q = w;
      var b = q;
    },
  },
]);
//# sourceMappingURL=103.df4318ef.js.map
