---
title: "[DSAA-Bonus]B. The kth smallest number"
date: 2018-10-30 00:31:35
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Bonus Lab B题题解

<!-- more -->

## Description
There are N integers A1...An.  Hong wants to know the kth smallest integer of them.

However, Hong is not good at maths.  He asks you to find the kth smallest integer.

## Input

The first line will be an integer T (1≤T≤5), which is the number of test cases.  

For each test data:

The first line contains two integer N and k(1≤k<N≤10^6).

The next line contains N integers Ai(1≤Ai≤10^9).

## Output
For each case, please print the kth smallest number of them.

### Sample Input
```
1
3 2
1 2 3
```
### Sample Output
```
2
```

## 思路

题意是给出n个数字和一个数字k。问这n个数字中第k小是多少。

java好像Array.sort完直接输出`a[k]`即可，但是c++ sort会被卡。

所以手写了快排，每次只要排第k个元素所在的区间即可。

## Solution

### Code
``` cpp
#include <cstdio>
#include <algorithm>
using namespace std;
const int N = 1e6 + 10;
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
int a[N];
int quickSort(int L, int R, int k)
{
    if (R <= L) 
        return a[L];
    int pivot = a[L], l = L + 1, r = R;
    while (l <= r)
    {
        while (l <= r && a[r] > pivot) 
            --r;
        while (l <= r && a[l] < pivot) 
            ++l;
        if (l >= r)
            break;
        swap(a[l++], a[r--]);
    }
    a[L] = a[r]; a[r] = pivot;
    if (k <= r - 1)
        return quickSort(L, r - 1, k); 
    else 
        return quickSort(l, R, k); 
}
void solve()
{
    int ans = 0, n = read(), k = read();
    for (int i = 1; i <= n; ++i)
        a[i] = read();
    random_shuffle(a + 1, a + n + 1);
    printf("%d\n", quickSort(1, n, k));
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}   
```