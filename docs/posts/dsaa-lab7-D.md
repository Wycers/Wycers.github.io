---
title: "[DSAA-Lab7]D. K-th"
date: 2018-12-07 19:28:32
draft: false
tags: ["CS203A", "堆"]
author: "Wycer"
---

数据结构与算法分析A Lab 7 D题题解

<!-- more -->

## Description
David has numbers, and he wants to know the K-th biggest  number among them.

## Input
The first line will be an integer T, which is the number of the test cases(1 <= T <= 12). For each test case, the first line will be two integers n and K(1 <= n <= 5*105, K <= 5000 or K >= 0.99n). The second line will be n integers, a1……an(1 <= ai <= 109). 

## Output
For each test output the K-th biggest element in one line.

### Sample Input
```
1
10 1
1 2 3 4 5 6 7 8 9 10
```
### Sample Output
```
10
```

## 思路

题意就是给出 $n$ 个数，求其中第 $k$ 大。

## Solution

维护一个大小为k的堆即可。。

这里的做法是观察到 k 要么很大要么很小，在k小的时候维护大根堆，在k大的时候维护小根堆。。

### Code
``` cpp
#include <cstdio>
#include <algorithm>
#include <cstring>
using namespace std;
const int N = 5e5 + 10;
int h[N], top;
bool XD = true;
bool cmp(const int &a, const int &b)
{
    return XD ? a > b : a < b;
}
void fix(int pos)
{
    while ((pos << 1) <= top)
    {
        int t = pos;
        if (cmp(h[pos << 1], h[t]))
            t = pos << 1;
        if ((pos << 1 | 1) <= top && cmp(h[pos << 1 | 1], h[t]))
            t = pos << 1 | 1;
        if (t == pos)
            break;
        swap(h[t], h[pos]);
        pos = t;
    }
}
void del()
{
    swap(h[1], h[top]);
    --top;
    fix(1);
} 
void solve()
{
    int k;
    scanf("%d%d", &top, &k);
    if (top < 2 * k)
    {
        XD = false;
        k = top - k + 1;
    }
    else 
        XD = true;
    memset(h, 0, sizeof h);
    for (int i = 1; i <= top; ++i)
        scanf("%d", h + i);
    for (int i = top / 2 + 1; i >= 1; --i)
        fix(i);
    --k;
    while (k--)
        del();
    printf("%d\n", h[1]);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```