---
title: "[DSAA-Lab6]F. Game"
date: 2018-11-19 10:59:06
draft: false
tags: ["CS203A", "树", "博弈论"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 F题题解

<!-- more -->

## Description
Hong likes game very much. He wants to play a game with you.

There is a tree with N nodes. Node 1 is the root. Each node is colored black or white.

Each turn, the player should choose a black node and change it to white. After that, he can choose its any number of the proper ancestors and change their color. The one who cannot find a black node at the tree in his turn, he lose the game.

Hong is good at the game, so he let you take the first turn. Hong will always find the optimal solution. He wants to know if you can win the game.

## Input
The first line will be an integer T (1≤T≤100), which is the number of test cases.

For each test data:

The first line contains one integer N (1≤N≤10000) — the number of the nodes.

The second line contains N integers w1…wn {0, 1}, wi = 1 means node i is black. Otherwise node i is white.

Each of the next N - 1 lines contain two integers a and b, which means there is an edge between node a and b.

## Output
For each teat case, if you can win, print “YES”; Otherwise, print “NO”.

### Sample Input
```
1
2
1 0
1 2
```
### Sample Output
```
YES
```

## 思路

题意就是给出一棵树，一开始所有节点都是黑色。A和B轮流选择一个黑点把它变成白色，并把它的任意祖先的颜色反转。无法操作者输。

## Solution

### Code

``` cpp
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 1e5 + 10;
struct Edge
{
    int to, next;
} edge[N];
int head[N], cnt = 0;
void insert(int u, int v)
{
    edge[++cnt] = (Edge){v, head[u]};
    head[u] = cnt;
}
int c[N], ct[N], dep;
void dfs(int now, int fa, int k)
{
    if (c[now] == 1)
        ++ct[k];
    if (k > dep)
        dep = k;
    for (int i = head[now]; i; i = edge[i].next)
    {
        int v = edge[i].to;
        if (v == fa)
            continue;
        dfs(v, now, k + 1);
    }
}
void solve()
{
    memset(head, 0, sizeof head); cnt = 0;
    memset(ct, 0, sizeof ct); dep = 0;
    int n; 
    scanf("%d", &n);
    for (int i = 1; i <= n; ++i)
        scanf("%d", c + i);
    for (int i = 1; i < n; ++i)
    {
        int u, v;
        scanf("%d%d", &u, &v);
        insert(u, v);
        insert(v, u);
    }
    dfs(1, 0, 1);
    bool ans = false;
    for (int i = 1; i <= dep; ++i)
        if (ct[i] & 1)
            ans = true;
    puts(ans ? "YES" : "NO");
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```