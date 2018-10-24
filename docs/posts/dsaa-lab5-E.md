---
title: "[DSAA-Lab5]E. Presuffix"
date: 2018-10-24 17:07:14
draft: false
tags: ["CS203A", "KMP"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 E题题解

<!-- more -->

## Description
A prefix of a string S is S0,i, similarly, a suffix of a string S is Si,|s|-1. Hong has two strings S and T, finds the longest prefix of S that is a suffix of T.

## Input
The first line will be an integer T (1≤T≤50), which is the number of test cases.  

For each test data:

The first line contains two integers n and m (1≤n, m≤10^5) — the length of the string S and the length of the string T, respectively.

The second line contains string s of length n, which consists only of lowercase letters.

The third line contains string t of length m, which consists only of lowercase letters.

## Output
For each case, please print the length of the longest prefix of S that is a suffix of T, followed by the prefix.

### Sample Input
```
1
3 5
abc
bcbab
```
### Sample Output
```
2 ab
```

## 思路

题意就是给出两个串A和B，求A的最长前缀满足该前缀是B的后缀。

考虑next数组的意义——最长的前缀与后缀匹配的长度，那么可以考虑把A串和B串拼在一起。

这样A串的前缀和B串的后缀就出现在了同一个串中，然后再求一个next数组。

但是next[len]并不是答案，因为如果在A的后缀和B的前缀有重叠的话有可能造成这个next[len]大于$|A|$ 和 $|B|$。

比如A = B = "aaa"，拼在一起后的next[6]的值为5。

所以在遇到这种情况的时候要让当前匹配位适配一次（往前跳一次next）直到匹配位都在A和B的长度范围内。


## Solution

### 拼串：
``` cpp
#include <cstdio>
#include <cstring>
#include <iostream>
using namespace std;
const int N = 1e6 + 10;
string a, b, c;
int n, m, nx[N];
void getnext()
{
    nx[0] = -1;
    for (int i = 0, j = -1, len = c.length(); i < len; )
    {
        if (j == -1 || c[i] == c[j])
            nx[++i] = ++j;
        else
            j = nx[j];
    }
}

void kmp()
{
    int res = nx[c.length()];
    while (res > n || res > m)
        res = nx[res];
    printf("%d", res);
    if (res)
        printf(" ");
    for (int i = 0; i < res; ++i)
        printf("%c", a[i]);
    puts("");
}

int main()
{
    int T; scanf("%d", &T);
    while (T--)
    {
        cin >> n >> m;
        cin >> a >> b;
        c = a + b;
        getnext();
        kmp();
    }
    return 0;
}
```

### 不拼串：
``` cpp
#include <cstdio>
#include <cstring>
#include <iostream>
using namespace std;
const int N = 5e5 + 10;
string a, b;
int n, m, nx[N];
void getnext()
{
    nx[0] = -1;
    for (int i = 0, j = -1; i < n; )
    {
        if (j == -1 || a[i] == a[j])
            nx[++i] = ++j;
        else
            j = nx[j];
    }
}

void kmp()
{
    int res = 0;
    for (int i = 0; i < m; )
    {
        if (res == -1 || b[i] == a[res])
            ++i, ++res;
        else
            res = nx[res];
    }
    printf("%d", res);
    if (res)
        printf(" ");
    for (int i = 0; i < res; ++i)
        printf("%c", a[i]);
    puts("");
}

int main()
{
    int T; scanf("%d", &T);
    while (T--)
    {
        cin >> n >> m;
        cin >> a >> b;
        getnext();
        kmp();
    }
    return 0;
}
```