---
title: "[DSAA-Lab5]D. A Skr Song"
date: 2018-10-24 16:30:59
draft: false
tags: ["CS203A", "KMP"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 D题题解

<!-- more -->

## Description
Hong has learned something about music. He finds that punchline is very important. If a substring appears 3 times at the beginning, the middle, and the end of a lyric, the substring is a punchline. But it’s hard for Hong to find a punchline. He wants you to help him to find the longest punchline in a song.

## Input
The first line will be an integer T (1≤T≤100), which is the number of test cases.

For each test data:

The first line contains an integer n (1≤n≤10^5) — the length of the string s.

The second line contains string s of length n, which consists only of lowercase letters, which is the lyric.

## Output
For each case, please print the length of the longest punchline.

### Sample Input
```
2
6
ababab
7
abababa
```
### Sample Output
```
2
1
```

## 思路

题意就是出一个串A，找出一个最长子串，满足该子串是串的前缀、后缀，并且在中间出现过，同时要求这个子串的三次出现位置不能重叠。

首先注意到这个子串的长度最多只有$|A| / 3$。

朴素做法从大到小枚举前缀长度，判断是否后缀，是否在中间出现过……

这个复杂度是不对的……但是可过……


## Solution

### 大暴力：
``` cpp
#include <cstdio>
#include <cstring>
#include <cmath>
#include <iostream>
using namespace std;
const int N = 2e5 + 10;
int len, nx[N];
char str[N];
bool judge(int x)
{
    int g = len - x;
    if (strncmp(str, str + g, x) != 0)
        return false;
    g -= x;
    for (int i = x; i <= g; ++i)
        if (strncmp(str, str + i, x) == 0)
            return true;
    return false;
}
void solve()
{
    scanf("%d", &len);
    scanf("%s", str);
    for (int ans = len / 3; ans >= 1; --ans)
        if (judge(ans))
        {
            printf("%d\n", ans);
            return;
        }
    puts("0");
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```


### KMP:
``` cpp
#include <cstdio>
#include <cstring>
#include <iostream>
using namespace std;
const int N = 1e5 + 10;
int len, nx[N];
char str[N];
bool judge(int x)
{
    int g = len - x;
    if (memcmp(str, str + g, x) != 0)
        return false;
    int i = x, j = 0;
    while (i < g)
    {
        if (j == -1 || str[i] == str[j])
        {
            ++i; ++j;
            if (j == x)
                return true;
        }
        else
            j = nx[j];
    }
    return false;
}
void getnext()
{
    nx[0] = -1;
    for (int i = 0, j = -1; i < len; )
    {
        if (j == -1 || str[i] == str[j])
            nx[++i] = ++j;
        else
            j = nx[j];
    } 
}
void solve()
{
    scanf("%d", &len);
    scanf("%s", str);
    getnext();
    for (int ans = min(len / 3, nx[len - 1] + 1); ans >= 1; --ans)
        if (judge(ans))
        {
            printf("%d\n", ans);
            return;
        }
    puts("0");
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```