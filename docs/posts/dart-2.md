---
title: "初探Dart - 基本类型"
date: 2018-12-12 16:13:26
draft: false
tags: ["Dart"]
author: "Wycer"
---

Google 最近发布了其通用App框架 flutter，而flutter则是用dart进行编程。所以想要进军flutter编程，dart是不可绕过的坎。

<!-- more -->
# 函数式编程

Dart中的函数声明与js中的十分相似。

``` dart
fib(i) {
    if (i < 2) return i;
    return fib(i - 2) + fib(i - 1);
}
```

但它不需要`function`关键字。

## 匿名函数
``` dart
(i) {
    if (i < 2) return i;
    return fib(i - 2) + fib(i - 1);
}
```

``` dart
var list = [1, 5, 8, 10];
list.foreach((i) { print("$i"); })
```

## 一阶函数
一个偏函数应用的例子
``` dart
add(x, y, z) {
    return x + y + z;
}

makeAdder2(fn, arg1) {
    return (y, z) {
        return fn(arg1, y, z);
    };
}

var add10 = makeAdder2(add, 10);

add10(1, 2); // 12
```

## 可选参数
像下面这样，把可选参数放在方括号中
``` dart
f(a, { b1: 'who', b2, b3, b4}) {
    // ...
}
```
b1指定了默认值`who`。

调用的时候可以像下面这样指定参数
``` dart
f('foo', b6: 'bar', b3: 'qwq');
```