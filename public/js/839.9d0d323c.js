"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  [839],
  {
    3275: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return m;
        },
      });
      var s = a(3396);
      const n = { class: "flex items-center justify-center space-x-2" },
        i = (0, s._)(
          "div",
          { class: "w-4 h-4 rounded-full animate-pulse dark:bg-gray-400" },
          null,
          -1
        ),
        l = (0, s._)(
          "div",
          { class: "w-4 h-4 rounded-full animate-pulse dark:bg-gray-500" },
          null,
          -1
        ),
        r = (0, s._)(
          "div",
          { class: "w-4 h-4 rounded-full animate-pulse dark:bg-gray-600" },
          null,
          -1
        ),
        c = [i, l, r];
      function o(t, e, a, i, l, r) {
        return (0, s.wg)(), (0, s.iD)("div", n, c);
      }
      var d = { name: "SpinnerComponents" },
        u = a(89);
      const p = (0, u.Z)(d, [["render", o]]);
      var m = p;
    },
    6839: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return k;
          },
        });
      var s = a(3396),
        n = a(7139),
        i = a(3275);
      const l = { class: "text-gray-600 body-font" },
        r = { class: "container px-5 py-24 mx-auto flex flex-wrap" },
        c = (0, s._)(
          "div",
          { class: "flex w-full mb-10 flex-wrap p-10" },
          [
            (0, s._)(
              "h1",
              {
                class:
                  "sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4",
              },
              " Photography "
            ),
            (0, s._)(
              "p",
              { class: "lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base" },
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit at deserunt porro consequuntur distinctio! Animi fugiat quisquam quas, fugit voluptate provident optio maxime nesciunt sunt nisi dolor numquam recusandae necessitatibus! "
            ),
          ],
          -1
        ),
        o = { class: "flex flex-wrap md:-m-2 -m-1" },
        d = { class: "flex flex-wrap w-full justify-center content-center" },
        u = { key: 0, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        p = { key: 1, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        m = { key: 2, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        g = { key: 3, class: "md:p-2 p-1 w-[400px] h-[100px]" },
        x = ["src"],
        f = {
          class: "text-2xl font-medium text-gray-900 mt-6 mb-3 text-center",
        },
        w = { class: "text-center" },
        h = {
          data() {
            return { data: {}, loading: !1 };
          },
          methods: {
            async fetchData() {
              this.loading = !0;
              const t = await fetch("http://localhost:3000/api/photography");
              (this.data = await t.json()), (this.loading = !1);
            },
          },
          mounted() {
            this.fetchData();
          },
        };
      var v = Object.assign(h, {
        __name: "PhotographyView",
        setup(t) {
          return (t, e) => (
            (0, s.wg)(),
            (0, s.iD)("section", l, [
              (0, s._)("div", r, [
                c,
                (0, s._)("div", o, [
                  (0, s._)("div", d, [
                    t.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", u, [(0, s.Wm)(i.Z)]))
                      : (0, s.kq)("", !0),
                    t.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", p, [(0, s.Wm)(i.Z)]))
                      : (0, s.kq)("", !0),
                    t.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", m, [(0, s.Wm)(i.Z)]))
                      : (0, s.kq)("", !0),
                    t.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", g))
                      : (0, s.kq)("", !0),
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        t.data,
                        (t) => (
                          (0, s.wg)(),
                          (0, s.iD)(
                            "div",
                            { key: t._id, class: "md:p-2 p-1" },
                            [
                              (0, s._)(
                                "img",
                                {
                                  class:
                                    "w-[400px] object-cover h-[400px] object-center block",
                                  src: t.img.data,
                                  alt: "gallery",
                                },
                                null,
                                8,
                                x
                              ),
                              (0, s._)("h2", f, (0, n.zw)(t.name), 1),
                              (0, s._)("p", w, (0, n.zw)(t.desc), 1),
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
      const y = v;
      var k = y;
    },
  },
]);
//# sourceMappingURL=839.9d0d323c.js.map
