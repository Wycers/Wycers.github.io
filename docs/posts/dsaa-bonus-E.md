---
title: "[DSAA-Bonus]E: A hard kth smallest number"
date: 2018-11-09 11:28:10
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Bonus Lab E题题解

<!-- more -->

## Description
Hong finds that the kth smallest number problem is too easy.  He comes up with a harder problem.

Given N integers A1...An.  Let Bk = |Ai - Aj|(1<=i<j<=N), we can get C(n, 2) Bk. Hong wants to know the median of these defferences.

If C(n, 2) is even, the median is defined as the (C(n, 2) / 2)th smallest number.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains one integer N(1≤N≤10^5).

The next line contains N integers Ai(1≤Ai≤10^9).

## Output
For each case, please print the median.

### Sample Input
```
1
4
1 2 3 4
```
### Sample Output
```
1
```

## 思路

题意就是给出n个数字，在这 $n$ 个任取两个数字作差取绝对值，能产生 $C(n, 2)$ 个绝对值。问这些绝对值的中位数是多少。

## Solution

求出所有绝对值然后排序找中位数显然是不现实的。

按照lab2的思路，可以通过二分查找这个中位数的值，然后验证它是否是中位数。

同时既然任意两个数字是任取的，不考虑顺序，我们可以先将整个数组排序。

在数组有序之后，验证中位数是否为 $m$ 相当于验证满足 $(i, j), i < j$ 使得 $a_j - a_i <= m$ 的数对数量是否只有一半。这个可以用队列 $O(n)$ 求。(lab4 C)。

``` cpp
#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
using namespace std;
const int N = 1e5 + 10;
inline int read()
{
    int x = 0, f = 1; char ch = getchar();
    while (ch < '0' || '9' < ch)
    {
        if (ch == '-')
            f = -1;
        ch = getchar();
    }
    while ('0' <= ch && ch <= '9')
    {
        x = x * 10 + ch - 48;
        ch = getchar();
    }
    return x * f;
}

int n, a[N];
int find(int l, int r, int x)
{
    int res = l;
    while (l <= r)
    {
        int mid = (l + r) >> 1;
        if (a[mid] >= x)
        {
            res = mid;
            r = mid - 1;
        }
        else 
            l = mid + 1;
    }
    return res;
}
long long count(int d)
{
    long long res = 0;
    for (int i = 1, j = 1; i <= n; ++i)
    {
        while (a[i] - a[j] > d)
            ++j;
        res += i - j;
    }
    return res;
}
void solve()
{
    n = read();
    for (int i = 1; i <= n; ++i)
        a[i] = read();
    sort(a + 1, a + n + 1);
    long long c = 1ll * n * (n - 1) / 2;
    if (c & 1)
        c = (c + 1) >> 1;
    else
        c = c >> 1;
    int l = 0, r = a[n] - a[1], ans = 0;
    while (l <= r)
    {
        int mid = (l + r) >> 1;
        if (count(mid) >= c)
        {
            r = mid - 1;
            ans = mid;
        }
        else
            l = mid + 1;
    }
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