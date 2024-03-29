"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  [611],
  {
    3275: function (e, t, a) {
      a.d(t, {
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
      function d(e, t, a, i, l, r) {
        return (0, s.wg)(), (0, s.iD)("div", n, c);
      }
      var u = { name: "SpinnerComponents" },
        o = a(89);
      const p = (0, o.Z)(u, [["render", d]]);
      var m = p;
    },
    3611: function (e, t, a) {
      a.r(t),
        a.d(t, {
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
              " Drawing "
            ),
            (0, s._)(
              "p",
              { class: "lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base" },
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit at deserunt porro consequuntur distinctio! Animi fugiat quisquam quas, fugit voluptate provident optio maxime nesciunt sunt nisi dolor numquam recusandae necessitatibus! "
            ),
          ],
          -1
        ),
        d = { class: "flex flex-wrap md:-m-2 -m-1" },
        u = { class: "flex flex-wrap w-full justify-center content-center" },
        o = { key: 0, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        p = { key: 1, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        m = { key: 2, class: "md:p-2 p-1 w-[400px] h-[400px]" },
        g = { key: 3, class: "md:p-2 p-1 w-[400px] h-[100px]" },
        x = ["src"],
        w = {
          class: "text-2xl font-medium text-gray-900 mt-6 mb-3 text-center",
        },
        f = { class: "text-center" },
        h = {
          data() {
            return { data: {}, loading: !1 };
          },
          methods: {
            async fetchData() {
              this.loading = !0;
              const e = await fetch("http://5.196.7.243:3000/api/drawing");
              (this.data = await e.json()), (this.loading = !1);
            },
          },
          mounted() {
            this.fetchData();
          },
        };
      var v = Object.assign(h, {
        __name: "DrawingView",
        setup(e) {
          return (e, t) => (
            (0, s.wg)(),
            (0, s.iD)("section", l, [
              (0, s._)("div", r, [
                c,
                (0, s._)("div", d, [
                  (0, s._)("div", u, [
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", o, [(0, s.Wm)(i.Z)]))
                      : (0, s.kq)("", !0),
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", p, [(0, s.Wm)(i.Z)]))
                      : (0, s.kq)("", !0),
                    e.loading
                      ? ((0, s.wg)(), (0, s.iD)("div", m, [(0, s.Wm)(i.Z)]))
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
                                x
                              ),
                              (0, s._)("h2", w, (0, n.zw)(e.name), 1),
                              (0, s._)("p", f, (0, n.zw)(e.desc), 1),
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
//# sourceMappingURL=611.0f4ee252.js.map
