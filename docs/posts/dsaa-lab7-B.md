---
title: "[DSAA-Lab7]B. Judgement"
date: 2018-12-07 19:23:51
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 7 B题题解

<!-- more -->

## Description
Please judge whether given tree can be a binary search tree or not.

## Input

 The first line will be an integer T, which is the number of test cases. (1 <= T <= 10). For each test case, the first line will be an integer n(1 <= n <= 105). The second line will be n integers, a1……an(1 <= ai <= 109), ai represents the value of the i-th node, then followed by n - 1 lines, each line will be two integers x and y, x is the father of y. y can be any position child of x. 


## Output

 For each test, print the number of the test cases first, then print YES when the tree is a binary search tree, else print NO.

We guarantee that (1 <= x, y <= n) and input is a tree. 

### Sample Input
```
2
4
1 2 3 4
3 1
3 4
3 2
3
1 2 3
2 1 
2 3
```
### Sample Output
```
Case #1: NO
Case #2: YES
```

## 思路

题意是给出一棵树，判断这棵树是否是二叉搜索树

## Solution

首先判掉多叉树

然后判断是否满足左子树的取值区间 小于 当前 小于右子树的取值区间

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
int n, fa[N], val[N], num[N], mn[N], mx[N];
void dfs(int now)
{
    mn[now] = mx[now] = val[now];
    for (int i = head[now]; i; i = edge[i].next)
    {
        int v = edge[i].to;
        dfs(v);
        mn[now] = min(mn[now], mn[v]);
        mx[now] = max(mx[now], mx[v]); 
    }
}
bool checkSearchTree(int now)
{
    if (num[now] > 2)
        return false;
    if (num[now] == 0)
        return true;
    int x = 0, y = 0;
    for (int i = head[now]; i; i = edge[i].next)
    {
        if (x)
            y = edge[i].to;
        else
            x = edge[i].to;
    }
    if (num[now] == 1)
    {
        if (mx[x] < val[now])
            return checkSearchTree(x);
        if (val[now] < mn[x])
            return checkSearchTree(x);
        return false;
    }
    if (mx[x] < val[now] && val[now] < mn[y])
        return checkSearchTree(x) && checkSearchTree(y);
    if (mx[y] < val[now] && val[now] < mn[x])
        return checkSearchTree(x) && checkSearchTree(y);
    return false;
}
bool solve()
{
    scanf("%d", &n);
    for (int i = 1, x; i <= n; ++i)
        scanf("%d", val + i);
    memset(fa, 0, sizeof fa);
    memset(head, 0, sizeof head);
    memset(num, 0, sizeof num);
    cnt = 0;
    for (int i = 1, f, s; i < n; ++i)
    {
        scanf("%d%d", &f, &s);
        insert(f, s);
        fa[s] = f;
        ++num[f];
    }
    int root = 1;
    while (fa[root])
        root = fa[root];
    dfs(root);
    return checkSearchTree(root);
}
int main()
{
    int T; scanf("%d", &T);
    for (int i = 1; i <= T; ++i)
        printf("Case #%d: %s\n", i, solve() ? "YES" : "NO");
    return 0;
}
```