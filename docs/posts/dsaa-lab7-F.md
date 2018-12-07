---
title: "[DSAA-Lab6]F. Balanced Binary Tree"
date: 2018-12-07 19:35:24
draft: false
tags: ["CS203A", "平衡树"]
author: "Wycer"
---

数据结构与算法分析A Lab 7 F题题解

<!-- more -->

## Description
 In a company, there are thousands of employees, your work is to check the information about the salary. There is a minimum salary(it is the same for everyone), whenever someone’s salary is less than this minimum salary, he(or she) will leave the company. There are n operations, and each operation is one of the following cases:

Insert x: a fresh man joins the company, whose salary is x.

Add x: increase everyone’s salary by x.

Subtract x: reduce everyone’s salary by x.

Query x: print the k-th maximum salary in this company.

 

At first, the company has 0 employees. 

## Input
 The first line will be an integer T, which is the number of test cases. (1 <= T <= 10). For each test case, the first line will be two integers n(1 <= n <= 105) and m(1 <= m <= 106), n is the number of operations, m is the minimum salary. Then followed by n lines, each line will be one of the following cases:

I x: Insert x.

A x: Add x.

S x: Subtract x.

Q x: Query x. 
## Output
For each “Query”, print the k-th maximum salary in this company, if the number of employees is less than k, print “-1”. At last, print the number of employees who has leave the company. We guarantee that no one will come back to the company after he(or she) leaves.

### Sample Input
```
1
9 10
I 60
I 70
S 50
Q 2
I 30
S 15
A 5
Q 1
Q 2
```
### Sample Output
```
10
20
-1
2
```

## 思路

原题郁闷的出纳员。。

我觉得刚学就能做出来的同学真的tql

## Solution

### Code

``` cpp
#include <iostream>
#include <cstring>
#include <cstdlib>
#include <cstdio>
#include <ctime>
#include <algorithm>
const int N = 1e5 + 10;
using namespace std;
inline int read()
{
    int x = 0, f = 1;
    char ch = getchar();
    while (ch < '0' || ch > '9')
    {
        if (ch == '-')
            f = -1;
        ch = getchar();
    }
    while (ch >= '0' && ch <= '9')
    {
        x = x * 10 + ch - '0';
        ch = getchar();
    }
    return x * f;
}
struct tree
{
    int l, r, val, rnd, sz;
} tr[N];
int n, mn, Delta, leave, root = 0;
struct Treap
{
    int cnt;
    Treap() { cnt = 0; }
    void update(int k)
    {
        tr[k].sz = tr[tr[k].l].sz + tr[tr[k].r].sz + 1;
    }
    void Rturn(int &k)
    {
        int t = tr[k].l;
        tr[k].l = tr[t].r;
        tr[t].r = k;
        update(k);
        update(t);
        k = t;
    }
    void Lturn(int &k)
    {
        int t = tr[k].r;
        tr[k].r = tr[t].l;
        tr[t].l = k;
        update(k);
        update(t);
        k = t;
    }
    void Ins(int &k, int x)
    {
        if (k == 0)
        {
            cnt++;
            k = cnt;
            tr[k].rnd = rand();
            tr[k].val = x;
            tr[k].l = tr[k].r = 0;
            tr[k].sz = 1;
            return;
        }
        tr[k].sz++;
        if (x < tr[k].val)
        {
            Ins(tr[k].l, x);
            if (tr[tr[k].l].rnd < tr[k].rnd)
                Rturn(k);
        }
        else
        {
            Ins(tr[k].r, x);
            if (tr[tr[k].r].rnd < tr[k].rnd)
                Lturn(k);
        }
    }
    int Del(int &k, int x)
    {
        int t;
        if (k == 0)
            return 0;
        if (tr[k].val < x)
        {
            t = tr[tr[k].l].sz + 1;
            k = tr[k].r;
            return t + Del(k, x);
        }
        else
        {
            t = Del(tr[k].l, x);
            tr[k].sz -= t;
            return t;
        }
    }
    int Find(int k, int x)
    {
        if (tr[tr[k].l].sz + 1 == x)
            return tr[k].val + Delta;
        else if (tr[tr[k].l].sz + 1 < x)
            return Find(tr[k].r, x - tr[tr[k].l].sz - 1);
        else
            return Find(tr[k].l, x);
    }
} Tr;
void solve()
{   
    n = read(), mn = read();
    // Tr.cnt = 0;
    memset(tr, 0, sizeof tr);
    char opt[10];
    int x;
    root = Tr.cnt = Delta = leave = 0;
    while (n--)
    {
        scanf("%s", opt);
        x = read();
        if (opt[0] == 'I')
            if (x >= mn)
                Tr.Ins(root, x - Delta);
        if (opt[0] == 'A')
            Delta += x;
        if (opt[0] == 'S')
        {
            Delta -= x;
            leave += Tr.Del(root, mn - Delta);
        }
        if (opt[0] == 'Q')
        {
            if (x > tr[root].sz)
                printf("-1");
            else
                printf("%d", Tr.Find(root, tr[root].sz - x + 1));
            printf("\n");
        }
    }
    printf("%d\n", leave);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```