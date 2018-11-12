---
title: "[DSAA-Lab6]B. Preinpost"
date: 2018-11-12 11:45:08
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 B题题解

<!-- more -->

## Description
Write a program to print the pre order, in order and post order traversal of the given binary tree.

## Input

The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains one integer N (1≤N≤10^4) — the number of the nodes.

Each of the next N - 1 lines contain two integers a and b, which means node a is the father of node b (1≤a, b≤N). If a node has two sons, the son appeared earlier is the left son and another is the right son. If a node only has one son, the son is the left son.
## Output

For each test cases, print three lines: the pre order, in order and post order traversal of the given binary tree.

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
1 4 2 7 3 5 6 8
7 2 4 1 5 3 8 6
7 2 4 5 8 6 3 1
```

## 思路

题意是给出一棵树，输出这棵树的前序中序后序。

## Solution

### Code
``` cpp
#include <cstdio>
#include <cstring>
using namespace std;
const int N = 1e4 + 10;
struct Treenode
{
    Treenode *left, *right;
    int val;
    Treenode () 
    {
        left = right = NULL;
    }
} tr[N];
void pre(Treenode *now)
{
    if (now == NULL)
        return;
    printf("%d ", now->val);
    pre(now->left);
    pre(now->right);
}
void mid(Treenode *now)
{
    if (now == NULL)
        return;
    mid(now->left);
    printf("%d ", now->val);
    mid(now->right);
}
void post(Treenode *now)
{
    if (now == NULL)
        return;
    post(now->left);
    post(now->right);
    printf("%d ", now->val);
}
void solve()
{
    int n; 
    memset(tr, 0, sizeof tr);
    scanf("%d", &n);
    for (int i = 1; i <= n; ++i)
        tr[i].val = i;
    for (int i = 1; i < n; ++i)
    {
        int x, y;
        scanf("%d%d", &x, &y);
        if (tr[x].left == NULL)
            tr[x].left = tr + y;
        else 
            tr[x].right = tr + y;
    }
    pre(tr + 1);
    puts("");
    mid(tr + 1);
    puts("");
    post(tr + 1);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```