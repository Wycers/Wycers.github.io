---
title: "[DSAA-Lab7]A. Complete binary tree"
date: 2018-12-07 19:20:49
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 7 A题题解

<!-- more -->

## Description
Alice has a binary tree of n nodes. These nodes are numbered from 1 to n, she does not know if this tree is a complete binary tree or not. She turns to you for help. We guarantee that the input is a binary tree.

## Input

The first line will be an integer T, which is the number of the test cases(1 <= T <= 14). For each test case, the first line will be an integer n (1<=n<=150000). Then followed by n  lines, each line will be two integers x and y, the i-th line means the left child of node i is x, the right child of node i is y. If node i has no left child, then x will be 0, if node i has no right child, then y will be 0.

## Output

For each test output Yes or No in one line.

### Sample Input
```
1
5
2 3 
4 0
5 0
0 0
0 0
```
### Sample Output
```
No
```

## 思路

题意是给出一棵树，问其是否是完全二叉树。

注意点1不一定是根。


## Solution

### 队列
``` cpp
#include <cstdio>
#include <cstring>
#include <queue>
using namespace std;
const int N = 150010;
struct node
{
    int l, r;
} tr[N];
int fa[N];
queue<int> q;
bool solve()
{
    int n;
    scanf("%d", &n);
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

    while (!q.empty())
        q.pop();
    q.push(root);

    bool flag = false;
    while (!q.empty())
    {
        int x = q.front(); 
        if (x == 0)
            flag = true;
        else
        {
            if (flag)
                return false;
            q.push(tr[x].l);
            q.push(tr[x].r);
        }
        q.pop();
    }
    return true;
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        puts(solve() ? "Yes" : "No");
    return 0;
}
```

### 递归

来自郝老师

``` cpp
#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;
const int maxn = 150005;
int n, f, s, son[maxn][2], sum[maxn], vis[maxn];
bool complete, flag;
int dfs_mx(int p, int deep)
{
    if (p == 0)
        return 0;
    sum[deep]++;
    return max(max(dfs_mx(son[p][0], deep + 1), dfs_mx(son[p][1], deep + 1)), deep);
}
void dfs(int p, int deep, int mxd)
{
    if (deep >= mxd)
        return;
    if (deep == mxd - 1)
        if (complete)
        {
            if (son[p][0])
                if (son[p][1])
                    return;
                else
                    complete = false;
            else
                if (son[p][1])
                    flag = false;
                else
                    complete = false;
        }
        else
            if (son[p][0] + son[p][1])
                flag = false;
    if (flag == false)
        return;
    dfs(son[p][0], deep + 1, mxd);
    dfs(son[p][1], deep + 1, mxd);
}
int main(void)
{
    int T;
    scanf("%d", &T);
    while (T--)
    {
        flag = true;
        complete = true;
        scanf("%d", &n);
        memset(sum, 0, sizeof sum);
        memset(vis, 0, sizeof vis);
    
        for (int i = 1; i <= n; i++)
        {
            son[i][0] = son[i][1] = 0;
        }
        for (int i = 1; i <= n; i++)
        {
            scanf("%d%d", &son[i][0], &son[i][1]);
            vis[son[i][0]] = 1;
            vis[son[i][1]] = 1;
        }
        bool istree = false;
        for (int i = 1; i <= n; i++)
            if (vis[i] == 0)
            {
                if (istree)
                    flag = false;
                istree = true;
                int mxd = dfs_mx(i, 0);
                for (int j = 0; j < mxd; j++)
                    if (sum[j] != (1 << j))
                    {
                        flag = false;
                        break;
                    }
                if (flag)
                    dfs(i, 0, mxd);
            }
        if (flag)
            printf("Yes\n");
        else
            printf("No\n");
    }
    return 0;
}
```

### 正解

利用二叉树标号的规律

``` cpp
#include <cstdio>
#include <cstring>
using namespace std;
const int N = 150010;
struct node
{
    int l, r;
} tr[N];
int n, fa[N];
bool flag = true;
void dfs(int now, int k)
{
    if (now == 0)
        return;
    if (flag == false)
        return;
    if (k > n)
        flag = false;
    dfs(tr[now].l, k << 1);
    dfs(tr[now].r, k << 1 | 1);
}
void solve()
{
    scanf("%d", &n);
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
    flag = true;
    dfs(root, 1);
    puts(flag ? "Yes" : "No");
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```