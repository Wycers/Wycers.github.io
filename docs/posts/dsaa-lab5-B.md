---
title: "[DSAA-Lab5]B. Matching Problem"
date: 2018-10-24 16:10:13
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 B题题解

<!-- more -->

## Description
Hong haves two strings s and t. The length of the string s equals n, the length of the string t equals m. The string s consists of lowercase letters and at most one wildcard character '*', while the string t consists only of lowercase letters.

The wildcard character '*' in the string s (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. If it is possible to replace a wildcard character '*' in s to obtain a string t, then the string t matches the pattern s.

If the given string t matches the given string s, print "YES", otherwise print "NO".

## Input

The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains two integers n and m (1≤n, m≤2⋅10^5) — the length of the string s and the length of the string t, respectively.

The second line contains string s of length n, which consists of lowercase letters and at most one wildcard character '*'.

The third line contains string t of length m, which consists only of lowercase letters.

## Output
For each test cases, print "YES" (without quotes), if you can obtain the string t from the string s. Otherwise print "NO" (without quotes).

### Sample Input
```
1
7 10
aba*aba
abazzzzaba
```
### Sample Output
```
YES
```

## 思路

题意是给出A串和B串，A串中的最多出现一个*，*号可以匹配任意字符任意次，问A串和B串能否匹配。

原题是 [Cf #504 A题](http://codeforces.com/contest/1023/problem/A)

emmmm……按照题意模拟就行……详见代码吧。


## Solution

### Code
``` cpp
#include <cstdio>
#include <cstring>
const int N = 2e5 + 10;
int lena, lenb;
char a[N], b[N];
bool solve()
{
    scanf("%d%d%s%s", &lena, &lenb, a, b);
    if (lena - lenb > 1)
        return false;
    int p = -1;
    for (int i = 0; i < lena; ++i)
    {
        if (a[i] == '*')
        {
            p = i;
            break;
        }
        if (a[i] != b[i])
            return false;
    }
    if (p == -1)
        return lena == lenb;
    for (int i = 1; i <= lena && lena - i != p; ++i)
        if (a[lena - i] != b[lenb - i])
            return false;
    return true;
}

int main()
{
    int T; scanf("%d", &T);
    while (T--)
        puts(solve() ? "YES" : "NO");
    return 0;
}
```