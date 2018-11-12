---
title: "[DSAA-Lab6]C. Heap"
date: 2018-11-12 11:46:44
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 C题题解

<!-- more -->

## Description

There is a set with size n initially, and there are q operations, each operation will be one of the following cases:

Add x: add x to this set.

Delete: delete the minimum element of the set.

Query: print the minimum element of the set.

## Input

The first line will be an integer T, which is the number of test cases. (1 <= T <= 10).

For each test case, the first line will be an integer n (1 <= n <= 10^5), then the second line will be n integers ai (1<=ai<=10^9), they make up the initial set. The third line will be an integer q (1 <= q <= 10^5), it means the number of operations. Then followed by q lines, each line will be one of the following cases:

1 x: Add x (1<=x<=10^9).

2: Delete.

3: Query.

## Output

For each “Query”, print the minimum element of the set in a line.

### Sample Input
```
1
2
2 3
2
1 2
3
```
### Sample Output
```
2
```

## 思路

实现一个堆。

## Solution

### Code
``` cpp
#include <cstdio>
#include <algorithm>
using namespace std;
const int N = 1e5 + 10;
int h[N], top;
void fix(int pos)
{
    if (pos == 1)
        return;
    while (pos != 1)
    {
        if (h[pos] < h[pos >> 1])
            swap(h[pos], h[pos >> 1]);
        else
            break;
        pos >>= 1;
    }
}
void add(int x)
{
    h[++top] = x;
    fix(top);
}
void del()
{
    swap(h[1], h[top]);
    --top;
    int pos = 1;
    while ((pos << 1) <= top)
    {
        int t = pos;
        if (h[t] > h[pos << 1])
            t = pos << 1;
        if ((pos << 1 | 1) <= top && h[t] > h[pos << 1 | 1])
            t = pos << 1 | 1;
        if (t == pos)
            break;
        swap(h[t], h[pos]);
        pos = t;
    }
} 
void solve()
{
    scanf("%d", &top);
    for (int i = 1; i <= top; ++i)
    {
        scanf("%d", h + i);
        fix(i);
    }
    int q, opt, x; scanf("%d", &q);
    while (q--)
    {
        scanf("%d", &opt);
        if (opt == 1)
        {
            scanf("%d", &x);
            add(x);
        }
        else if (opt == 2)
            del();
        else 
            printf("%d\n", h[1]);
    }
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```