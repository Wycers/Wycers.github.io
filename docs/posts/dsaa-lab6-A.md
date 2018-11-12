---
title: "[DSAA-Lab6]A. Leaves"
date: 2018-11-12 11:43:23
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 A题题解

<!-- more -->

## Description
Write a program to print all the leaves of the given tree, numbered from 1 to N.  The root of the tree is node 1.

## Input

The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains one integer N (2≤N≤10^4) — the number of the nodes.

Each of the next N - 1 lines contain two integers a and b, which means there is an edge between node a and b (1≤a, b≤N).

## Output

For each case please, print all the leaves of the given tree, in ascending order.

For the tree has multiple leaf nodes, there is a blank between two leaf nodes, and ‘\n’ at the end of each line.

### Sample Input
1
4
1 2
2 3
3 4
```
### Sample Output
```
4
```

## 思路

题意是给出一棵树，问其所有的叶子的编号。

注意点1一定算根不算叶子。


## Solution

其实只要判断度就好了，这个有点麻烦……

### Code
``` cpp
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <vector>
using namespace std;
const int N = 1e4 + 10;
int n;
struct Edge
{
    int to, next;
} edge[N << 1];
int head[N], cnt = 0;
void insert(int u, int v)
{
    edge[++cnt] = (Edge){v, head[u]};
    head[u] = cnt;
}
vector<int> ans;
void dfs(int now, int fa)
{
    bool flag = true;
    for (int i = head[now]; i; i = edge[i].next)
    {
        int v = edge[i].to;
        if (v == fa)
            continue;
        dfs(v, now);
        flag = false;
    }
    if (flag && now != 1)
        ans.push_back(now);
}
void solve()
{
    memset(head, 0, sizeof head); cnt = 0;
    ans.clear();
    scanf("%d", &n);
    for (int i = 1; i < n; ++i)
    {
        int x, y;
        scanf("%d%d", &x, &y);
        insert(x, y);
        insert(y, x);
    }
    dfs(1, 0);
    sort(ans.begin(), ans.end());
    for (int i = 0, len = ans.size(); i < len; ++i)
        printf("%d ", ans[i]);
    puts("");
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```