---
title: "[DSAA-Lab7]C. AVL-tree"
date: 2018-12-07 19:26:50
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 7 C题题解

<!-- more -->

## Description

 Carol has a binary tree of n nodes. These nodes are numbered from 1 to n, she does not know if this tree is a AVL-tree or not. Then, she turns to you for help.

The AVL-tree should be:

The key of x is larger than all the keys in the left subtree of x, the key of x is smaller than all the keys in the right subtree of x. The height of the left subtree and right subtree of each node can not have a difference larger than 1. 

## Input

The first line will be an integer T, which is the number of the test cases(1 <= T <= 100). For each test case, the first line will be an integer n(1 <= n <= 10000). The second line will be integers, a1……an, ai means the key of the i-th node(1 <= ai <= 2*109). Then followed by n lines, each line will be two integers x and y, the i-th line means the left child of node i is x, the right child of node i is y. If node i has no left child, then x will be 0, if node i has no right child, then y will be 0.

## Output

For each test output Yes or No in one line.

### Sample Input
```
2
5
4 2 5 1 3
2 3
4 5
0 0
0 0
0 0
5 
4 2 5 1 4
2 3
4 5
0 0
0 0
0 0
```
### Sample Output
```
Yes
No
```

## 思路

给定一棵树，判断其是否是Avl树。

Avl树是满足任意节点左右深度差不超过1的二叉树。

## Solution

### Code
``` cpp
#include <cstdio>
#include <cstring>
#include <cmath>
#include <algorithm>
using namespace std;
const int N = 1e4 + 10;
struct node
{
    int l, r;
} tr[N];
int n, fa[N], val[N], dep[N], mn[N], mx[N];
void dfs(int now)
{
    dep[now] = 0;
    mn[now] = mx[now] = val[now];
    int l = tr[now].l, r = tr[now].r;
    if (l) 
    {
        dfs(l);
        mn[now] = min(mn[now], mn[l]);
        mx[now] = max(mx[now], mx[l]);
        dep[now] = max(dep[now], dep[l]);
    }
    if (r)
    {
        dfs(r);
        mn[now] = min(mn[now], mn[r]);
        mx[now] = max(mx[now], mx[r]);
        dep[now] = max(dep[now], dep[r]);
    }
    ++dep[now];
}
bool checkSearchTree(int now)
{
    int l = tr[now].l, r = tr[now].r;
    if (l == 0 && r == 0)
        return true;
    if (l && r)
    {
        if (mx[l] < val[now] && val[now] < mn[r])
            return checkSearchTree(l) && checkSearchTree(r);
        return false;
    }
    if (l && mx[l] < val[now])
        return checkSearchTree(l);
    if (r && val[now] < mn[r])
        return checkSearchTree(r);
    return false;
}
bool isAvl(int now)
{
    if (now == 0)
        return true;
    int l = tr[now].l, r = tr[now].r;
    if (isAvl(l) && isAvl(r) && abs(dep[l] - dep[r]) <= 1)
        return true;
    return false;
}
bool solve()
{
    scanf("%d", &n);
    for (int i = 1; i <= n; ++i)
        scanf("%d", val + i);
    memset(fa, 0, sizeof fa);
    for (int i = 1; i <= n; ++i)
    {
        scanf("%d%d", &tr[i].l, &tr[i].r);
        fa[tr[i].l] = i;
        fa[tr[i].r] = i;
    }
    int root = 1;
    while (fa[root])
        root = fa[root];
    memset(dep, 0, sizeof dep);
    dfs(root);
    if (checkSearchTree(root) == false)
        return false;
    return isAvl(root);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        puts(solve() ? "Yes" : "No");
    return 0;
}
```