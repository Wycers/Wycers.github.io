---
title: Go 语言学习（1）——标准库 fmt
date: 2018-04-29 12:15:53
tags: [golang,标准库]
---

了解 go 语言的 fmt 标准库

<!-- more -->

## 前言

最近一直在学习 Go 语言，想通过以博客连载的形式来记录加深影响。好了闲话不多说，进入今天的正题。

Go 语言的标准库强大而优美，不仅继承了 C 语言特点也很好的吸收了其他语言的精华。标准库 fmt(format)让 Go 语言的标准输出更为方便和优雅。

## 正文

首先，Go 语言第一课，也是任何语言的第一课——Hello World!

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello World")
}
```

在上面的代码可以清楚的看到，Go 语言输出 HelloWorld 需要用到标准库 fmt.Println(),即 print+line,意味输出一行。

当然在大多数情况，由于输出的复杂性，单单依靠 Println()远远不够，这里 Go 语言另外的输出语句 Printf()便可以解决绝大多数问题，也是用的最常见的输出语句。Printf()=print+format，即按照一定格式输出。

```go
fmt.Printf("%s\n", "Hello World")
```

这里我们可以用 Printf()实现与 Println()同样的功能。查看 Go 的源码我们知道无论是 Printf()还是 Println()都是调用 Go 语言 fmt 中另外的一个函数 Fprintf()。

```go
func Printf(format string, a ...interface{}) (n int, err error) {
	return Fprintf(os.Stdout, format, a...)
}
```

上面即为 Go 语言源码中对 Printf()的实现，Printf()将接收到 string 传递给了 Fprintf(),由 Fprintf()向标准输出流 Stdout 输出字符串。对于它，在 Go 源码的注释中可以看到下面一句话。

**// Fprintf formats according to a format specifier and writes to w.**

Fprintf()根据格式说明来将字符串拼接格式化并写到 w 中，这里的 w 指 io.Writer，即为 IO 流的书写者。因为 Go 语言的接口的特性，只要实现了 Writer 接口便可以调用 Fprintf()。也就是说 Fprintf()是 Go 语言用于输入、出的标准函数，而 Printf()，Println()只是 Go 语言实单纯对 Stdout,也就是系统标准输出的实现。不仅如此，Go 语言的错误输出 Errorf()也是使用 Fprintf()来实现的。

```go
// Errorf formats according to a format specifier and returns the string
// as a value that satisfies error.
func Errorf(format string, a ...interface{}) error {
	return errors.New(Sprintf(format, a...))
}
```

Fprintf()还可以用于标准网络输出，当然由于 Fprintf()涉及 Go 语言其他的标准库，笔者会在后面介绍。

在 Go 语言 fmt 库里面还有另外一个成员 Sprintf(),它依旧会输入格式化字符串，但它并不输出而是把得到的字符串返回给用户自己。

```go
// Sprintf formats according to a format specifier and returns the resulting string.
func Sprintf(format string, a ...interface{}) string {
	p := newPrinter()
	p.doPrintf(format, a)
	s := string(p.buf)
	p.free()
	return s
}
```

上面是 Go 语言对于它实现的源码，如果某些读者不理解，便可跳过，只需明白它会返回你所需要的格式的字符串。有了它，我们可以实现一些有趣的事情，如我们可以把输出的东西变为红色。

```go
func Red(message string) string {
	return fmt.Sprintf("\x1b[31m%s\x1b[0m", message)
}
```

上段代码中，Red()函数接受输入的字符串并将其变为红色返回（这里的红色，指的是在 terminal 中输出红色的字），

![](https://user-gold-cdn.xitu.io/2018/1/19/1610c774d0117b25?w=280&h=76&f=jpeg&s=10603)

当然还可以输出黄色

```go
func Yellow(message string) string {
	return fmt.Sprintf("\x1b[33m%s\x1b[0m", message)
}
```

如果感兴趣，读者可以自己查阅一下让自己的输出更为优（zhuang）雅（bi）。

好了，关于 fmt 中常见的几个函数今天边介绍到这里，饿死了（笑）。

