---
title: "[DSAA-Lab6]E. BuyBuyBuy"
date: 2018-11-19 10:38:29
draft: false
tags: ["CS203A", "堆"]
author: "Wycer"
---

数据结构与算法分析A Lab 6 E题题解

<!-- more -->

## Description
Hong came to Qinghuangdao for CCPC Camp this summer. After the camp, Hong decides to buy his friends some gifts.

The capacity of Hong's pocket is so small that it can only contain M gifts. Considering the diversity of his gifts, Hong would not buy two of the same kind. And some typical gift should be chosen to represent the features of Qinghuangdao.

Hong will walk down from north to south and visit N shops one by one along the shopping street. There is ONLY ONE type of gift sold in each shop. However, he has such a poor memory that he can't remember how many shops sell gift K. So, he will write a number L on this gift he bought in his pocket, to indicate how many shops where sell gift K. In Hong's opinion, the smaller the number L is, the better the gift.

When Hong stops in a shop which sells gift K, the following three situations he might come across.

1. If there is not gift K in his pocket and still some place for it, He will buy without hesitation. Before putting it into the pocket, he will write down the number `1' on the gift to indicate that he has once seen one shop selling it.

2. If there is gift K in his pocket, he will just replace the number L with L + 1, indicating L + 1 shops sell gift K.

3. If there is not gift K in his pocket and the pocket is full, he would like to regard no shops selling gift K (because he cannot remember whether he has met gift K), so he will have to discard one gift in his pocket to release a place for the gift K. But which gift should be discarded? According to the follow rule:

He chooses the gift that has the biggest number L on it. If several gifts have the same biggest number L, he will discard the one which has been putted into the pocket at the earliest time. After discarding the gift, he will put gift K into his pocket and write number `1' on gift K.

Now, your task is to write a program to record the number of these gifts which have been discarded by Hong.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.

For each test data:

The first line has two positive integers M and N (M<=50000, N<=100000) where M (the capacity of pocket) shows how many gifts it can take, and N is the number of shops in the street. The second line has N positive integers Ki (Ki < 2^20, i = 1, 2, ..., N) indicating the type of gift sold in the i-th shop.

## Output
For each test case you should output one integer, the number of discarded gifts as indicated in the sample output.

### Sample Input
```
6
3 5
1 2 3 2 4
2 4
1 2 2 1
2 6
1 2 2 1 1024 1
2 10
1 2 3 2 4 2 3 6 7 8
2 1
1048575
6 16
10 1 2 3 4 5 6 1 2 3 6 5 4 10 1 6
```
### Sample Output
```
1
0
2
7
0
3
```

## 思路

题意就是Hong有一个袋子，有一排商品编号从1~(1<<20)。

Hong一开始袋子是空的，他会依次走过这些商品，当他走到某一个商品前，如果：

1. 袋子没有相同编号的商品且包未满，他会直接把这个商品带走，并在这个商品上标记1。
2. 袋子里有相同编号的商品，他会直接把袋子里的这个商品的标记+1。
3. 袋子没有相同编号的商品且包满了，他会扔掉标记最大且购买时间最早的商品。

## Solution

### Code
``` cpp
#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 1e5 + 10;
int cnt[1 << 20], enter[1 << 10], leave[1 << 20];
struct data
{
    int type, cnt, ti;
} h[N];
bool operator < (const data &a, const data &b) {
    if (a.cnt == b.cnt)
        return a.ti > b.ti;
    return a.cnt < b.cnt;
}
int n, m, top, g;
void fix(int pos)
{
    if (pos == 1)
        return;
    while (pos != 1)
    {
        if (h[pos >> 1] < h[pos])
            swap(h[pos], h[pos >> 1]);
        else
            break;
        pos >>= 1;
    }
}
void add(int x)
{
    h[++top] = (data){x, ++cnt[x], enter[x]};
    fix(top);
}
void del()
{
    swap(h[1], h[top]);
    --top;
    int pos = 1;
    while ((pos << 1) <= top)
    {
        int t = pos;
        if (h[t] < h[pos << 1])
            t = pos << 1;
        if ((pos << 1 | 1) <= top && h[t] < h[pos << 1 | 1])
            t = pos << 1 | 1;
        if (t == pos)
            break;
        swap(h[t], h[pos]);
        pos = t;
    }
} 
void solve()
{
    scanf("%d%d", &m, &n);
    top = 0; g = 0;
    int x, ans = 0;
    memset(cnt, 0, sizeof cnt);
    memset(enter, 0, sizeof enter);
    memset(leave, 0, sizeof leave);
    for (int i = 1; i <= n; ++i)
    {
        scanf("%d", &x);
        while (leave[h[1].type] > h[1].ti)
            del();
        if (cnt[x] == 0 && g == m)
        {
            ++ans;
            cnt[h[1].type] = 0; 
            --g; 
            leave[h[1].type] = i;
            del();
        }
        if (cnt[x] == 0)
        {
            enter[x] = i;
            ++g;
        }
        add(x);
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