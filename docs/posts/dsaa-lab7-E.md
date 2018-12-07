---
title: "[DSAA-Lab7]E. Bubble sort"
date: 2018-12-07 19:30:54
draft: false
tags: ["CS203A", "堆"]
author: "Wycer"
---

数据结构与算法分析A Lab 7 E题题解

<!-- more -->

## Description
Ella has a sequence of n integers. After she learns the 'Bubble sort'(in ascending order), she wants to apply it. There is a question asking what the sequence is like after K times 'Bubble operation'. One 'Bubble operation' is like this:

> for(int i = 1; i < n; ++i) { if(a[i] > a[i + 1]) swap(a[i], a[i + 1]); }

The sequence starts from 1, and its length is n. 

## Input
The first line will be an integer T, which is the number of the test cases(1 <= T <= 10). For each test case, the first line will be two integers n and K(1 <= K <= n <= 200000). The second line will be n integers, a1……an(1 <= ai <= 109), representing the original sequence. It queries what the sequence is like after K times 'Bubble sort' from the original sequence.

## Output
For each query, print the sequence in one line, do not print extra space in the end of one line.

### Sample Input
```
1
5 1
5 4 3 2 1
```
### Sample Output
```
4 3 2 1 5
```

## 思路

题意就是求对有n个数的数列进行k次冒泡过程后的结果是什么。

可知对于一个长度为k的滑窗内最小的一定会到达第一个。所以滑一遍。。

## Solution

### Code
``` cpp
#include <cstdio>
#include <algorithm>
using namespace std;
const int N = 2e5 + 10;
int a[N], h[N], top;
void add(int x)
{
    h[++top] = x;
    int pos = top;
    if (pos == 1)
        return;
    while (pos != 1)
    {
        if ( h[pos >> 1] > h[pos])
            swap(h[pos], h[pos >> 1]);
        else
            break;
        pos >>= 1;
    }
}
void del()
{
    swap(h[1], h[top]);
    --top;
    int pos = 1;
    while ((pos << 1) <= top)
    {
        int t = pos;
        if (h[t] > h[pos << 1])
            t = pos << 1;
        if ((pos << 1 | 1) <= top && h[t] > h[pos << 1 | 1])
            t = pos << 1 | 1;
        if (t == pos)
            break;
        swap(h[t], h[pos]);
        pos = t;
    }
} 
void solve()
{
    int n, k;
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; ++i)
        scanf("%d", a + i);
    for (int i = 1, len = min(n, k + 1); i <= len; ++i)
        add(a[i]);
    for (int i = 2; i + k <= n; ++i)
    {
        printf("%d ", h[1]); del();
        add(a[i + k]);
    }
    while (top)
    {
        printf("%d ", h[1]);
        del();
    }
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