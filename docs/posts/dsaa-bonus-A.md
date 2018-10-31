---
title: "[DSAA-Bonus]A. The good number"
date: 2018-10-30 00:31:14
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Bonus Lab A题题解

<!-- more -->

## Description
There are N integers A1...An.  Hong wants to know the maximum integer of them.

However, Hong is not good at maths.  He asks you to find the maximum integer.

## Input

The first line will be an integer T (1≤T≤100), which is the number of test cases.  

For each test data:

The first line contains one integer N (1≤N≤10^4) — the number of the integers.

The next line contains N integers Ai(1≤Ai≤10^9).

## Output
For each case please, print the maximum integer of them.

### Sample Input
```
1
2
1 2
```
### Sample Output
```
2
```

## 思路

题意是给出n个数字，问其中最大者。

扫一遍即可。


## Solution

### Code
``` cpp
#include <cstdio>
inline int read()
{
    int x = 0, f = 1; char ch = getchar();
    while (ch < '0' || '9' < ch)
    {
        if (ch == '-')
            f = -1;
        ch = getchar();
    }
    while ('0' <= ch && ch <= '9')
    {
        x = x * 10 + ch - 48;
        ch = getchar();
    }
    return x * f;
}
void solve()
{
    int ans = 0, n = read();
    for (int i = 0, x; i < n; ++i)
        if ((x = read()) > ans)
            ans = x;
    printf("%d\n", ans);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}   
```