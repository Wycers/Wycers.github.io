---
title: "初探Dart - 基本类型"
date: 2018-12-12 16:13:26
draft: false
tags: ["Dart"]
author: "Wycer"
---

Google 最近发布了其通用App框架 flutter，而flutter则是用dart进行编程。所以想要进军flutter编程，dart是不可绕过的坎。

<!-- more -->
# 基本类型

Dart语言在一定意义上是强类型语言，实践中应该尽量进行实际的类型声明而不是使用`var`。
## 数字类型

整数和小数都是数字类型，他们支持很多相同的方法和运算符。

``` dart
2 + 2;     // 4
2.2 + 2;   // 4.2
2.2 + 2.2; // 4.4
```

## 字符串类型

和大部分语言一样，Dart的字符串也是不可变的。通俗地说，字符串的操作会产生新的字符串而不是修改现有的字符串。

``` dart
var str1 = "foo";
var str2 = str1;
str1.hashCode == str2.hashCode; // true
``` 

### 模板插值

在字符串中使用$表明这是一个插值。

``` dart
var sth = "foo";
"$sth, bar";   // "foo, bar"
```

或者


``` dart
var sth = "foo";
"${sth}, bar"; // "foo, bar"
```

## 布尔类型

在dart中，布尔类型的值只能为`true`和`false`。在Dart中，不会将`null`和`""`视为`false`。
``` dart

var name, greeting;
greeting = name ? "$name" : "Hello";            // "Hello"

name = "Bob";
greeting = name ? "$name" : "Hello";            // "Hello"

greeting = (name != null) ? "$name" : "Hello";  // "Bob"
```

## HashMap

与js类似：
``` dart
var prices = {
    'apple': 1,
    'pear': 2
};
prices['apple']; // 1
```

## List

声明与py类似。
``` dart
var fruits = ['apple', 'pear', 'peach', 'banana']
fruits[0]; // "apple"
fruits.length; // 2

fruits.setRange(1, 2, ['cherry', 'melon']); 
// fruits = ['apple', 'cherry', 'melon', 'banana']

fruits.removeRange(1, 2); 
// fruits = ['apple', 'banana']

fruits.addAll(['cherry', 'melon']); 
// fruits = ['apple', 'banana', 'cherry', 'melon']
```


一些内建的迭代方法：
``` dart
fruits.some((fruit) => fruit.startsWith('c'));   // true
fruits.every((fruit) => fruit.startsWith('c'));  // false
fruits.filter((fruit) => fruit.startsWith('c')); // ['cherry']
```

## Collection
### Set
``` dart
var fruitsSet = new Set.fron(fruits);

fruitsSet.add('cherry'); 
// ['apple', 'banana', 'cherry', 'melon']
fruitsSet.add('berry');
// ['apple', 'banana', 'cherry', 'melon', 'berry']


### Queue
``` dart
var fruitsQueue = new Queue.from(fruits);
fruitsQueue.addFirst('berry');
// ['berry', 'apple', 'banana', 'cherry', 'melon']
fruitsQueue.removeFirst();
// ['apple', 'banana', 'cherry', 'melon']
fruitsQueue.removeLast();
// ['apple', 'banana', 'cherry']
```

## Date
``` dart
var date = new Date.fromString('2018-12-13 14:43:12')
// 2018-12-13 14:43:12.000

var now = new Date.now();
// ……

var tmp = new Date(2018, 12, 12, 14, 43, 12, 0);
// 2018-12-13 14:43:12.000
```

日期操作相当好用
``` dart
var diff = date.diff(tmp);
diff.inDays; // 1

date.add(new Duration(days: 1)); 
// 2018-12-14 14:43:12.000
```