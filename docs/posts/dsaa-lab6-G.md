---
title: "[DSAA-Lab6]G. Hong set"
date: 2018-12-07 19:17:40
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 G题题解

<!-- more -->

## Description
Hong has a tree, whose vertices are conveniently labeled by 1, 2, ..., n. Each node has a weight wi.

A set with m nodes v1, v2, ..., vm is a Hong Set if:

- The rest of his tree induced by this set is connected.

- After we sort these nodes in set by their weights in ascending order, we get u1, u2, ..., um, (that is, wui < wui+1 for i from 1 to m-1). For any node x in the path from ui to ui+1(excluding ui and ui+1), should satisfy wx < wui.

Your task is to find the maximum size of Hong Set in a given tree.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains two integers N (1≤N≤200000) — the number of the nodes.

The second line contains N integers w1…wn (1<=wi<=10^9).

Each of the next N - 1 lines contain two integers a and b, which means there is an edge between node a and b.

## Output
For each case please print the maximum size of Hong Set.

### Sample Input
```
1
7
3 30 350 100 200 300 400
1 2
2 3
3 4
4 5
5 6
6 7
```
### Sample Output
```
5
```

## 思路

## Solution

### Code
``` cpp
#include <cstdio>
#include <cstring>
#include <algorithm>
#pragma comment(linker,"/STACK:1024000000,1024000000")
using namespace std;
const int N = 2e5 + 10;
struct Edge
{
    int to, next;
} edge[N];
int head[N], cnt = 0;
int w[N], ct[N];
void insert(int u, int v)
{
    edge[++cnt] = (Edge){v, head[u]};
    head[u] = cnt;
}
int dfs(int now)
{
    if (ct[now])
        return ct[now];
    ct[now] = 1;
    for (int i = head[now]; i; i = edge[i].next)
        ct[now] += dfs(edge[i].to);
    return ct[now];
}
void solve()
{
    memset(head, 0, sizeof head); cnt = 0;
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; ++i)    
        scanf("%d", w + i);
    for (int i = 1; i < n; ++i)
    {
        int u, v;
        scanf("%d%d", &u, &v);
        if (w[u] == w[v])
            continue;
        if (w[u] > w[v])
            insert(v, u);
        else 
            insert(u, v);
    }

    memset(ct, 0, sizeof ct);
    int ans = 1;
    for (int i = 1; i <= n; ++i)
        ans = max(ans, dfs(i));
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