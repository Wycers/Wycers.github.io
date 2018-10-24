---
title: "[DSAA-Lab5]A. SkrSkr!"
date: 2018-10-24 15:16:49
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 A题题解

<!-- more -->

## Description
Hong likes the Rap of China. He has tried to write some lyrics. However, he didn’t know how to judge a lyric. He thought that the more rhymes the better. The score of a lyric is equal to the length of the longest continued rhyming sentences. 
Two sentences are rhyming when the last letters of them are equal.  Hong wants to know the score of the given lyrics.

## Input

The first line will be an integer T (1≤T≤100), which is the number of test cases.  

For each test data:

The first line contains an integer N (1≤N≤10^4) — the number of the sentences.

Each of the next N lines contains a string s, which consists only of lowercase letters (no space). The length of each string doesn’t exceed 100.

## Output
For each case please, print the length of the longest continued rhyming sentences.

### Sample Input
```
1
5
nikanzhegemian
tayouchangyoukuan
jiuxiangzhegewan
tayoudayouyuan
skrskr
```
### Sample Output
```
4
```

## 思路

题意是给出n个串，问其中最长有多少个连续的串的后缀为同样的子串。

考虑到更长的后缀可以包含更短的后缀，所以如果A串和B串后缀为同样的子串，它们的最短的后缀（也就是最后一个字符）也一定相同。反过来，只要它们最短的后缀相同，就可以说它们有着同样的子串为后缀。

那么把n个串的最后一个字符拎出来，找其中最长段的长度即可。

比如样例的串改成nnnnr，最长段就是4。


## Solution

### Code
``` cpp
#include <cstdio>
#include <algorithm>
#include <cstring>
using namespace std;
char str[110], ch[10010]; 
int n;
void solve()
{
    scanf("%d", &n);
    for (int i = 1; i <= n; ++i)
    {
        scanf("%s", str);
        ch[i] = str[strlen(str) - 1];
    }
    int ans = 0, pre = 1;
    for (int i = 1; i <= n; ++i)
    {
        if (i < n && ch[pre] == ch[i + 1])
            continue;
        ans = max(ans, i - pre + 1);
        pre = i + 1;
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