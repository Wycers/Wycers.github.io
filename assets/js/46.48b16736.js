(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{330:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("Your friend from Manhattan is visiting you in Amsterdam. Because she can only stay for a short while, she wants to see as many tourist attractions in Amsterdam in as little time as possible. To do that, she needs to be able to figure out how long it takes her to walk from one landmark to another. In her hometown, that is easy: to walk from point m = (mx,my) to point n = (nx,ny) in Manhattan you need to walk a distance |nx − mx|+|ny − my|, since Manhattan looks like a rectangular grid of city blocks. However, Amsterdam is not well approximated by a rectangular grid. Therefore, you have taken it upon yourself to figure out the shortest distances between attractions in Amsterdam. With its canals, Amsterdam looks much more like a half-disc, with streets radiating at regular angles from the center, and with canals running the arc of the circle at equally spaced intervals. A street corner is given by the intersection of a circular canal and a street which radiates from the city center.")]),s("p",[t._v("Depending on how accurately you want to model the street plan of Amsterdam, you can split the city into more or fewer half rings, and into more or fewer segments. Also, to avoid conversion problems, you want your program to work with any unit, given as the radius of the half circle. Can you help your friend by writing a program which computes the distance between any two street corners in Amsterdam, for a particular approximation?")]),t._m(1),s("p",[t._v("The input consists of")]),t._m(2),t._m(3),s("p",[t._v("Output a single line containing a single floating point number, the least distance needed to travel from point a to point b following only the streets in the model. The result should have an absolute or relative error of at most 10^{−6}.")]),t._m(4),s("p",[t._v("Input 1")]),t._m(5),s("p",[t._v("Output 1")]),t._m(6),s("p",[t._v("Input 2")]),t._m(7),s("p",[t._v("Output 2")]),t._m(8),s("p",[t._v("Input 3")]),t._m(9),s("p",[t._v("Output 3")]),t._m(10),t._m(11),t._m(12),s("p",[t._v("问一个\b扇形坐标系中两点的最短曼哈顿距离。")]),t._m(13),s("p",[t._v("假设两点"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("A")]),s("mo",[t._v("(")]),s("msub",[s("mi",[t._v("x")]),s("mn",[t._v("1")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("1")])],1),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A(x_1, y_1)")])],1)],1)],1),t._m(14)]),t._v(", "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("B")]),s("mo",[t._v("(")]),s("msub",[s("mi",[t._v("x")]),s("mn",[t._v("2")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("2")])],1),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("B(x_2, y_2)")])],1)],1)],1),t._m(15)]),t._v("，其中"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("1")])],1),s("mo",[t._v("≤")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("2")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y_1 \\leq y_2")])],1)],1)],1),t._m(16)]),t._v("（点A更靠近原点）。 其之间的曼哈顿距离有两种。")]),s("ol",[s("li",[t._v("\bA -> 原点 -> B，这种情况下曼哈顿距离为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v("(")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("1")])],1),s("mo",[t._v("+")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("2")])],1),s("mo",[t._v(")")]),s("mo",[t._v("∗")]),s("mi",[t._v("r")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(y_1 + y_2) * r")])],1)],1)],1),t._m(17)]),t._v("。")]),s("li",[t._v("A -> B的半径上 -> B， 这种情况下曼哈顿距离为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v("(")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("2")])],1),s("mo",[t._v("−")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("1")])],1),s("mo",[t._v(")")]),s("mo",[t._v("∗")]),s("mi",[t._v("r")]),s("mo",[t._v("+")]),s("mfrac",[s("mrow",[s("mi",[t._v("π")])],1),s("mrow",[s("mi",[t._v("m")])],1)],1),s("mo",[t._v("∗")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("msub",[s("mi",[t._v("x")]),s("mn",[t._v("1")])],1),s("mo",[t._v("−")]),s("msub",[s("mi",[t._v("x")]),s("mn",[t._v("2")])],1),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mo",[t._v("∗")]),s("mi",[t._v("r")]),s("mo",[t._v("∗")]),s("msub",[s("mi",[t._v("y")]),s("mn",[t._v("1")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(y_2 - y_1) * r + \\frac{\\pi}{m} * |x_1 - x_2| * r * y_1")])],1)],1)],1),t._m(18)]),t._v("")])]),s("p",[t._v("二者选一小即可。")]),t._m(19),t._m(20)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"abstract-picture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract-picture","aria-hidden":"true"}},[this._v("#")]),this._v(" Abstract Picture")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"input"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input","aria-hidden":"true"}},[this._v("#")]),this._v(" Input")])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("One line with two integers M,N and a floating point number R.\n"),t("ul",[t("li",[this._v("1 ≤ M ≤ 100 is the number of segments (or ‘pie slices’) the model of the city is split into.")]),t("li",[this._v("1 ≤ N ≤ 100 is the number of half rings the model of the city is split into.")]),t("li",[this._v("1 ≤ R ≤ 1000 is the radius of the city.")])])]),t("li",[this._v("One line with four integers, ax,ay,bx,by, with 0 ≤ ax,bx ≤ M, and 0 ≤ ay,by ≤ N, the\ncoordinates of two corners in the model of Amsterdam.")])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[this._v("#")]),this._v(" Output")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this._self._c;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("6 5 2.0\n1 3 4 2 \n")])])},function(){var t=this._self._c;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("1.65663706143592\n")])])},function(){var t=this._self._c;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("9 7 3.0\n1 5 9 5\n")])])},function(){var t=this._self._c;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("4.28571428571429\n")])])},function(){var t=this._self._c;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("10 10 1.0\n2 0 6 0\n")])])},function(){var t=this._self._c;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("0\n")])])},function(){var t=this._self._c;return t("h1",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution","aria-hidden":"true"}},[this._v("#")]),this._v(" Solution")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"题意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题意","aria-hidden":"true"}},[this._v("#")]),this._v(" 题意")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 思路")])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.63597em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.8304100000000001em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mrel"},[t._v("≤")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord reset-textstyle textstyle uncramped"},[s("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{staticClass:"mfrac"},[s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.345em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("m")])])])]),s("span",{staticStyle:{top:"-0.22999999999999998em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{staticStyle:{top:"-0.394em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord scriptstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathrm"},[t._v("∣")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("2")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),s("span",{staticClass:"mord mathrm"},[t._v("∣")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[this._v("#")]),this._v(" Code")])},function(){var t=this,s=t._self._c;return s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstdio>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cmath>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<algorithm>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" pi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("acos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scanf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%lf%lf%lf%lf%lf%lf%lf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" R "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" ans1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" pi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" ans2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%.6f\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ans2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);s.default=n.exports}}]);