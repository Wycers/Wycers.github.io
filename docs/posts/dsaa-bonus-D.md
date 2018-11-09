---
title: "[DSAA-Bonus]D: Only one choice?"
date: 2018-11-09 11:23:35
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Bonus Lab D题题解

<!-- more -->

## Description
Hong wants to sort a given permutation by swapping two adjacent elements.  It's easy for Hong to do that with minimum operations.

Hong find that for some permutation, the solution is unique.  Hong thinks that these permutation is good.

However, Hong is not good at maths.  He asks you to judge whether the solution for the given permutation is unqiue.

Solution means the sequence of elements we choose in each operation.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains one integer N (1≤N≤10^5) — the number of the integers.

The next line contains N integers, a permutation of 1,2,...,N.

## Output
For each case, if there is a unique solution for this case, output one character 'Y'. Otherwise, output 'N'.

### Sample Input
```
3
1
1
3
3 2 1
4
3 1 2 4
```
### Sample Output
```
Y
N
Y
```

## 思路

题意就是给出n个数字，问是否只有一种交换次数最少且能使其有序的交换方法。交换只能交换相邻元素。

## Solution

### 归并排序

结论是逆序对数量小于n的时候才能保证这种交换方法唯一。

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
    while (i <= m)
        tmp[now++] = a[i++];
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
    puts(ans < n ? "Y" : "N");
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```