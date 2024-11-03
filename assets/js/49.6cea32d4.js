(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{333:function(t,s,n){"use strict";n.r(s);var a=n(2),r=Object(a.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("p",[t._v("学习 kotlin 协程")]),s("h2",{attrs:{id:"介绍协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍协程","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍协程")]),s("p",[t._v("很长一段时间我都没有写博客了，主要是这段时间忙着毕业的事，一直无法专心于做某一件事，所以很多东西都耽搁了。今天聊一聊 Kotlin 的协程。")]),s("blockquote",[s("p",[t._v("协程，又称微线程，纤程。英文名 Coroutine。")])]),s("p",[t._v("上面一段是我摘自阮一峰老师的博客。我们知道最近几年协程这个概念很火，不少的语言都支持了协程，如 Python，go 等语言。当然由于很多语言历史局限性的存在，协程的使用并不友好，最好的当属 go 语言的协程，只需一个简单的"),s("code",[t._v("go")]),t._v("关键字就可以开启协程之旅了。")]),s("p",[t._v("今天就来说说 kotlin 的协程，kotlin 在 1.1 版本后引入了协程，目前还处于实验性阶段。但是仍然可以拿来尝尝鲜，前面提到 go 语言的协程非常容易使用，在 kotlin 里面协程的使用也是非常简单的，而且还更加丰富。")]),s("h2",{attrs:{id:"使用协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用协程","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用协程")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runBlocking "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    launch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("这段代码便可以在 Kotlin 中开启一个协程，与一般的主函数不同，由于协程的特殊性。Kotlin 中使用协程的函数必须在前面加上"),s("code",[t._v("suspend")]),t._v("关键字。suspend 代表着当前函数可以被"),s("code",[t._v("挂起")]),t._v("，从而将该函数的使用权交给调度器，调度器会在合适的时机去使用和调度该函数从而实现 cpu 资源的充分利用。")]),s("p",[t._v("为了更方便的使用协程，kotlin 的标准库为我们提供了"),s("code",[t._v("runBlocking")]),t._v("这个函数。")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runBlocking")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CoroutineContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EmptyCoroutineContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("suspend")]),t._v(" CoroutineScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" T\n")])]),s("p",[t._v("这个函数会默认的将"),s("code",[t._v("{}")]),t._v("内部的语句挂载到 suspend 函数中，方便我们使用协程。Kotlin 中提供了两个函数启动协程，分别是"),s("code",[t._v("launch")]),t._v("和"),s("code",[t._v("async")]),t._v(",这两个函数均可以启动协程，异同点我们将在后面叙述。")]),s("p",[t._v("launch 启动协程后，延时 1s，输出"),s("code",[t._v("World")]),t._v("。但是当真正运行这个函数时，我们其实得不到任何输出，原因很简单：")]),s("blockquote",[s("p",[t._v("由于协程的非阻塞性，开启一段协程并不会阻塞当前的线程。协程在执行的时候，主函数仍在向下执行，可是主函数下没有任何执行语句，主函数便会退出，协程此时虽然仍在执行，但主函数已退出，整个程序就退出了。所以"),s("code",[t._v("World")]),t._v("这个词还没来得及输出，程序就已经退出了。")])]),s("p",[t._v("可是我们必须得知道协程是否真正的在执行，所以我们必须阻塞一下主函数，或者说让主函数不会立马退出，让协程有时间的去输出。所以这样改进我们的代码：")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runBlocking "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" launch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, "')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("如果一些顺利，我们会得到下面的输出：")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Hello,\nWorld\n")])]),s("p",[t._v("当协程开启后，主程序与协程同时执行（这里的同时并不是指真真的同时，而是 CPU 调度速度快使我们感觉到二者在同时执行），但协程里面正在"),s("code",[t._v("delay")]),t._v("，时间为 1s,所以主程序先输出"),s("code",[t._v("Hello,")]),t._v(",然后主程序正在被"),s("code",[t._v("Thread.sleep(2000L)")]),t._v("所阻塞，时间为 2s，这时候只被阻塞一秒的协程便有机会输出了，所以控制台后面输出"),s("code",[t._v("World")]),t._v("，然后程序过一会儿便会自己退出。")]),s("p",[t._v("这里可以看出，协程是真正的非阻塞式，它不会阻塞主程序的向下执行，而且它绝对收主程序控制，主程序退出，它也会被立刻退出。当然"),s("code",[t._v("Thread.sleep(2000L)")]),t._v("这个函数并不地道，Kotlin 提供了一个更好用的"),s("code",[t._v("delay")]),t._v("函数给我们，方便我们进行协程的阻塞。所以，地道的程序如下所示：")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runBlocking "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" launch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, "')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("如果一切正常，你将会得到同样的输出。但是这样的程序真的就地道吗，我们指定了"),s("code",[t._v("delay")]),t._v("的时间，毫无疑问是不准确的，因此 Kotlin 为我们提供了一个更好的方法"),s("code",[t._v("join")]),t._v("。它会阻塞主程序，直到协程执行完毕，所以真正地道的写法是这样的：")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runBlocking "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" launch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, "')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("这样，当协程在执行的时候，主程序等待，当协程完成自己的任务后，主程序继续执行。")]),s("p",[t._v("当然协程最最最重要的特性——轻量。操作系统的进程是非常昂贵的，线程也是价值不菲的，但是协程真的是异常便宜，比如说：")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runBlocking "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" jobs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        launch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("我们开了多少了协程，没错 10 万个，但是计算机毫无感觉。可以想象，在高并发的情况下，协程带来了提升无疑是巨大的。")]),s("h2",{attrs:{id:"协程用于-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协程用于-io","aria-hidden":"true"}},[t._v("#")]),t._v(" 协程用于 io")]),s("p",[t._v("上面，我们很明显的感觉到了协程带来的优越性。但是更多的情况下，我们需要协程获取数据，比如说数据请求，而后得到该数据。"),s("code",[t._v("launch")]),t._v("开启的协程，并不能完成这一点，它只能"),s("code",[t._v("启动")]),t._v("协程，当然上面也提过 Kotlin 有两个函数可以开启协程。既然"),s("code",[t._v("lanuch")]),t._v("不能，那"),s("code",[t._v("async")]),t._v("是否可以了？答案是必须得，毕竟谁也不会没事搞两个函数。")]),s("p",[t._v("Kotlin 中的"),s("code",[t._v("async")]),t._v("这个函数受到了 C#影响，表明当前的函数的是个异步的函数，异步的函数必然会带有自己的"),s("code",[t._v("callback")]),t._v("。但是为了使用方便和优美，Kotlin 提供了"),s("code",[t._v("await")]),t._v("方法，当数据请求完毕时，协程会自动调用该方法，并且返回请求的数据。我们通过下面的例子来看一下：")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" runBlocking"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" elasticDto "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ElasticDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  ①\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" async "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        elasticDto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLastestByPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ②\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("also")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  ③\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    elasticDto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ④\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("①：创建一个数据请求的类——elasticDto。")]),s("p",[t._v("②：用"),s("code",[t._v("async")]),t._v("开启一个协程，并在该函数下调用 elasticDto 的"),s("code",[t._v("getLastestByPage")]),t._v("方法请求远端的数据，请求而来的数据会自动装入"),s("code",[t._v("job")]),t._v("里面。")]),s("p",[t._v("③：等待协程处理完毕，处理完毕后输出请求数据内容。")]),s("p",[t._v("④：关闭 elasticDto 客户端。")]),s("p",[t._v("与"),s("code",[t._v("lanuch")]),t._v("不同，"),s("code",[t._v("async")]),t._v("会返回一个"),s("code",[t._v("Deferred")]),t._v("对象，该对象拥有协程完成后的回调功能，并从中取得请求来的数据。并且"),s("code",[t._v("await")]),t._v("会如同前面的"),s("code",[t._v("join")]),t._v("函数一样，阻塞当前的主程序。")]),s("p",[t._v("当然 Kotlin 协程还实现了如 Go 语言一样的"),s("code",[t._v("CSP")]),t._v("模型，通过 Channel 来实现协程之间的通信，笔者会在下篇比较 Kotlin 和 Go 语言在该方面的异同点。Kotlin 协程实现了两种模式下通信方式，很大程度上既照顾了使用 callback 的方式，也拥抱了 CSP 模型。具体请参考官方的"),s("a",{attrs:{href:"https://github.com/Kotlin/kotlinx.coroutines/blob/master/coroutines-guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("指北")]),t._v("。")])])}],!1,null,null,null);s.default=r.exports}}]);