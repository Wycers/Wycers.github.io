---
title: "[DSAA-Bonus]C. The kth smallest number"
date: 2018-10-30 00:33:58
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Bonus Lab B题题解

<!-- more -->

## Description
Hong wants you to sort a given array.  Hong is good at sorting, so he wants to make it more difficult.

Each time, you can only choose two adjacent elements and swap them.
Hong wants to know how many swaps do you need at least to make the array in ascending order.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains one integer N (1≤N≤10^5) — the number of the integers.

The next line contains N integers Ai(1≤Ai≤10^9).

## Output
For each case, please print the least swap you need to make the array in ascending order.

### Sample Input
```
1
4
4 1 2 3
```
### Sample Output
```
3
```

## 思路

题意就是给出n个数字，问至少要多少次交换才能使其有序。交换只能交换相邻元素。

即为逆序对个数。逆序对即满足 $a_i > a_j (i < j)$ 的整数对 $(i, j)$ 的个数。

求逆序对个数的常用方法有树状数组、归并排序。

## Solution

### 归并排序

对于左右两半有序区间 $(l, mid)$ 和 $(mid + 1, r)$，若 $i < j$ 且 $a_i > a_j (i < j)$，那么 $a_j$ 这个元素能与前面 $mid - i + 1$ 个元素产生逆序对。

``` cpp
#include <cstdio>
#include <algorithm>
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
int n, a[N], tmp[N];
long long ans = 0;
const int sz = sizeof(a[0]);
void merge(int l, int m, int r)
{
    int i = l, j = m + 1, now = l;
    while (i <= m && j <= r)
        if (a[i] <= a[j])
            tmp[now++] = a[i++];
        else
        {
            tmp[now++] = a[j++];
            ans += m - i + 1;
        }
    memcpy(tmp + now, a + i, (m - i + 1) * sz);
    memcpy(tmp + now, a + j, (r - j + 1) * sz);
    memcpy(a + l, tmp + l, (r - l + 1) * sz);
}
void msort(int l, int r)
{
    if (l >= r)
        return;
    int mid = (l + r) >> 1;
    msort(l, mid);
    msort(mid + 1, r);
    merge(l, mid, r);
}


void solve()
{
    int n = read();
    for (int i = 1; i <= n; ++i)
        a[i] = read();
    ans = 0;
    msort(1, n);
    printf("%lld\n", ans);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}   
```