---
title: "[DSAA-Lab5]D. A Skr Song"
date: 2018-11-19 10:35:42
draft: false
tags: ["CS203A", "树"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 D题题解

<!-- more -->

## Description
Write a program to print the longest distance between two nodes of the given tree.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains two integers N (1≤N≤10^5) — the number of the nodes.

Each of the next N - 1 lines contain two integers a and b, which means there is an edge between node a and b.

## Output
For each case, please print the longest distance between two nodes of the given tree.

### Sample Input
```
1
8
1 4
1 3
4 2
2 7
3 5
3 6
6 8
```
### Sample Output
```
6
```

## 思路

题意就是给出一棵树，求树上最远两点的距离。（也就是求树的直径）

从随意一点走到最远点，再从这个最远点走到另一个最远点。这两次最远点的距离就是树的直径。


## Solution

### 大暴力：
``` cpp
#include <cstdio>
#include <cstring>
using namespace std;
const int N = 1e5 + 10;
struct Edge
{
    int to, next;
} edge[N];
int head[N], cnt;
void insert(int u, int v)
{
    edge[++cnt] = { v, head[u]};
    head[u] = cnt;
}
int n, d, tag;
void dfs(int now, int fa, int dis)
{
    if (dis > d)
    {
        tag = now;
        d = dis;
    }
    for (int i = head[now]; i; i = edge[i].next)
    {
        int v = edge[i].to;
        if (fa == v)
            continue;
        dfs(v, now, dis + 1);
    }
}
void solve()
{
    memset(head, 0, sizeof head);
    cnt = 0;

    scanf("%d", &n);
    for (int i = 1; i < n; ++i)
    {
        int u, v;
        scanf("%d%d", &u, &v);
        insert(u, v);
        insert(v, u);
    }
    d = 0; tag = 1;
    dfs(1, 0, 0);
    d = 0;
    dfs(tag, 0, 0);
    printf("%d\n", d);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```