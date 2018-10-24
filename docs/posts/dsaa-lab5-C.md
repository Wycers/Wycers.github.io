---
title: "[DSAA-Lab5]C. Kate Make Program"
date: 2018-10-24 16:18:09
draft: false
tags: ["CS203A"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 C题题解

<!-- more -->

## Description
Give you a text S and a pattern P. You should print how many times P appears in S.

## Input
The first line will be an integer T, which is the number of test cases. (1 <= T <= 10)

For each test case, the first line will be an integer n, which is the length of the text string.

Then a line contains a text string S. |S| <= 1000000

The third line will be an integer m, which is the length of the pattern string.

Then a line contains a pattern string P. |P| <= |S|

S and will only contain lower case English letters.

## Output
Print a number in a single line for each test case, which means how many times P appears in S.

### Sample Input
```
2
15
chenljnbwowowoo
2
wo
14
touristrealgod
7
tourist
```
### Sample Output
```
3
1
```

## 思路

题意就是给出A串和B串，问B串在A串中出现了多少次。

无包装kmp果题，先对B串求next数组然后在A串上匹配就行。

<!-- 关于kmp的一些理解，可以看我的另一篇post。 -->



## Solution

### Code
``` cpp
#include <cstdio>
#include <cstring>

const int N = 1e6 + 10;
int n, m, nx[N];
char str[N], buf[N];

void getnext()
{
    nx[0] = -1;
    for (int i = 0, j = -1; i < m; )
    {
        if (j == -1 || str[i] == str[j])
            nx[++i] = ++j;
        else
            j = nx[j];
    } 
}

void kmp()
{
    int i = 0, j = 0, ans = 0;
    while (i < n)
    {
        if (j == -1 || buf[i] == str[j])
        {
            ++i; ++j;
            if (j == m)
            {
                ++ans;
                j = nx[j];
            }
        }
        else
            j = nx[j];
    }
    printf("%d\n", ans);
}

int main()
{
    int T; scanf("%d", &T);
    while (T--)
    {
        scanf("%d", &n); scanf("%s", buf);
        scanf("%d", &m); scanf("%s", str);
        getnext();
        kmp();
    }
    return 0;
}
```