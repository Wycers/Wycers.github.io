---
title: "[DSAA-Lab5]F. Longest Common Substring"
date: 2018-10-24 17:07:14
draft: false
tags: ["CS203A", "KMP", "SAM"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 F题题解

<!-- more -->

## Description
There is a well-known problem called LCS, which is longest common subsequence. But it’s hard for Hong to find the longest common substring of N different string.  Hong wants you to solve this question.

## Input
The first line will be an integer T (1≤T≤10), which is the number of test cases.  

For each test data:

The first line contains an integer N (1≤N≤1000) — the number of the sentences.

Each of the next N lines contains a string s, which consists only of lowercase letters (no space), the length of each string will be at least 1 and at most 200 characters.

## Output
For each case please print the lexicographically smallest longest common substring. If there is no such non-empty string, output the words “Hong” instead.

### Sample Input
```
1
3
aabbaabb
abbababb
bbbbbabb
```
### Sample Output
```
abb
```

## 思路

题意就是给出n个串，求这些串的字典序最小的最长公共子串。

朴素做法（正解）就是枚举子串，用kmp判断这个串是否在所有串中出现。

复杂度是 $O(TnL^3)$……？但是过了…… ~~为什么这次lab到处都是奇怪复杂度怒过~~


## Solution

### 朴素做法

感谢游游同学提供代码QwQ

``` java
...
static int[] kmpnext(String substr) {
    int[] next = new int[substr.length()];
    next[0] = 0;
    int j = 0;
    for (int i = 1; i < substr.length(); i++) {
        while (j > 0 && substr.charAt(j) != substr.charAt(i)) {
            j = next[j - 1];
        }
        if (substr.charAt(j) == substr.charAt(i)) {
            j++;
        }
        next[i] = j;
    }
    return next;
}

static boolean cheakkmp(String substr, String[] words, int[] tempnext) {
    for (int kd = 1; kd < words.length; kd++) {
        boolean flag = false;
        String word = words[kd];
        int j = 0;
        for (int i = 0; i < word.length(); i++) {
            while (j > 0 && word.charAt(i) != substr.charAt(j)) {
                j = tempnext[j - 1];
            }
            if (word.charAt(i) == substr.charAt(j)) {
                if (j == substr.length() - 1) {
                    flag = true;
                    break;
                } else {
                    j++;
                }
            }
        }
        if (flag == false) {
            return false;
        }
    }
    return true;
}

static class Task {

    public void solve(InputReader in, PrintWriter out) {
        while (in.hasNext()) {
            int cases = in.nextInt();
            for (int kd = 0; kd < cases; kd++) {
                int N = in.nextInt();
                String[] words = new String[N];
                int minlen = 201;
                for (int i = 0; i < N; i++) {
                    words[i] = in.next();
                    minlen = Math.min(minlen, words[i].length());
                }
                String[] keylist = new String[200];
                int keytag = -1;
                boolean flag = false;
                for (int sublen = minlen; sublen >= 1; sublen--) {
                    for (int j = 0; j <= words[0].length() - sublen; j++) {
                        String substr = words[0].substring(j, j + sublen);
                        int[] tempnext = kmpnext(substr);
                        if (cheakkmp(substr, words, tempnext) == true) {
                            keylist[++keytag] = substr;
                            flag = true;
                        }
                    }
                    if (flag == true) {
                        break;
                    }
                }
                if (flag == false) {
                    System.out.println("Hong");
                    continue;
                }
                String res = keylist[0];
                for (int i = 1; i <= keytag; i++) {
                    if (res.compareTo(keylist[i]) > 0) {
                        res = keylist[i];
                    }
                }
                System.out.println(res);
            }
        }
    }
}
...
```


### 后缀自动机

对第一个串建后缀自动机，剩下的串自动上跑完，对于每个节点，更新其为终点的LCS长度。

然后遍历每个节点，找到LCS长度及字典序最小的。

该做法的复杂度是 $O(TnL)$。

``` cpp
#include <cstdio>
#include <cstring>
#include <algorithm>
   
const int N = 4e2 + 10;
using namespace std;
   
int P[N], num[N], mv[N];
struct sam
{
    int p, q, np, nq;
    int cnt = 1, last = 1;
    int ch[N][26], mx[N], fa[N], chr[N];
    inline int new_node(int x)
    {
        mx[++cnt] = x;
        return cnt;
    }
    void extend(int x, int pos)
    {
        p = last;
        np = new_node(mx[p] + 1);
        chr[np] = pos;
        for (; p && !ch[p][x]; p = fa[p])
            ch[p][x] = np;
        if (!p)
            fa[np] = 1;
        else
        {
            q = ch[p][x];
            if (mx[q] == mx[p] + 1)
                fa[np] = q;
            else
            {
                nq = new_node(mx[p] + 1);
                chr[nq] = pos;
                memcpy(ch[nq], ch[q], sizeof ch[nq]);
                fa[nq] = fa[q], fa[q] = fa[np] = nq;
                for (; ch[p][x] == q; p = fa[p])
                    ch[p][x] = nq;
            }
        }
        last = np;
    }
    void build(char *str)
    {
        memset(mv, 0, sizeof mv);
        memset(ch, 0, sizeof ch);
        cnt = last = 1;
        for (int i = 0, len = strlen(str); i < len; ++i)
            extend(str[i] - 'a', i);
        for (int i = 1; i <= cnt; ++i)
            mv[mx[i]]++;
        for (int i = 1, len = strlen(str); i <= len; ++i)
            mv[i] += mv[i - 1];
        for (int i = 1; i <= cnt; ++i)
            P[mv[mx[i]]--] = i;
    }
    void solve(char *str)
    {
        for (int i = 0, p = 1, l = 0, len = strlen(str); i < len; ++i)
        {
            int x = str[i] - 'a';
            if (ch[p][x])
                l++, p = ch[p][x];
            else
            {
                for (; p && !ch[p][x]; p = fa[p]);
                if (!p)
                    l = 0, p = 1;
                else
                    l = mx[p] + 1, p = ch[p][x];
            }
            num[p] = max(num[p], l);
        }
        for (int i = cnt; i > 1; i--)
        {
            int x = P[i];
            mv[x] = min(mv[x], num[x]);
            if (fa[x] && num[x])
                num[fa[x]] = mx[fa[x]];
            num[x] = 0;
        }
    }
} sam;
   
char ori[210], str[210];
int n;
void solve()
{
    scanf("%d", &n);
    scanf("%s", ori);
    sam.build(ori);
    memset(mv, 0x3f, sizeof mv);
    while (--n)
    {
        scanf("%s", str);
        sam.solve(str);
    }
    int len = 0;
    for (int i = 2; i <= sam.cnt; ++i)
        if (mv[i] > len)
            len = mv[i];
    if (len == 0)
    {
        puts("Hong");
        return;
    }
    char ans[210] = "";
    for (int i = 2; i <= sam.cnt; ++i)
        if (mv[i] == len && (strlen(ans) == 0 || strncmp(ans, ori + sam.chr[i] - len + 1, len) > 0))
            strncpy(ans, ori + sam.chr[i] - len + 1, len);
    printf("%s\n", ans);
}
int main()
{
    int T; scanf("%d", &T);
    while (T--)
        solve();
    return 0;
}
```