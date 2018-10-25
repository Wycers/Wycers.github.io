---
title: "[DSAA-Lab5]G. Typer"
date: 2018-10-24 17:31:44
draft: false
tags: ["CS203A", "AC自动机", "FSA"]
author: "Wycer"
---

数据结构与算法分析A Lab 5 G题题解

<!-- more -->

## Description
Given n words, Hong wants to input one of these. He wants to input (at the end) as few characters (without backspace) as possible, to make at least one of the n words appears (as a suffix) in the text.

Given an operation sequence, Hong wants to know the answer after every operation.

An operation might input a character or delete the last character.

## Input
The first line contains one integer n.

In the following n lines, each line contains a word.

The last line contains the operation sequence.

'-' means backspace and will delete the last character he typed.

He may backspace when there are no characters left, and nothing will happen.

1 <= n <= 4

The total length of n words <= 100000

The length of the operation sequence <= 100000

The words and the sequence only contain lower case letter.

## Output
You should output L +1 integers, where L is the length of the operation sequence.

The i-th(index from 0) is the minimum characters to achieve the goal, after the first i operations.

### Sample Input
```
2
a
bab
baa-
```
### Sample Output
```
1
1
0
0
0
```



## 思路

题意是先给出n个目标串，再给出一个打字机的按键序列，序列中的普通字母表示把这个字母输入文本，"-"表示退格，对空文本退格无事发生。在开始及每次按一个键后询问至少要再按多少个键才能让某个目标串成为当前文本的后缀。



## Solution

把n个目标串插入AC自动机，在这n个串的最后那个字符所在的节点打上标记。

将目前的文本在AC自动机上跑后的节点的fail指向标记点或者该节点就是标记点那么说明当前已经有串为文本的后缀，不需要敲任何键。否则最近的标记点与当前节点的距离就是最少按键次数。

所以可以在建完AC自动机后从fail指向标记点的节点和标记点出发灌水，处理出所有节点到这两种节点的最短路。

然后将文本在AC自动机上跑的时候就可以$O(1)$查询答案。

### AC自动机
``` cpp
#include <cstdio>
#include <algorithm>
#include <cstring>
#include <queue>
typedef long long ll;
using namespace std;
const int N = 1e5 + 10;
struct AC_Automation {
    int nx[N][26], fail[N], top, root, flag[N];
    int newnode()
    {
        for (int i = 0; i < 26; ++i)
            nx[top][i] = -1;
        flag[top] = false;
        return top++;
    }
    void clear()
    {
        top = 0;
        root = newnode();
        memset(fail, 0, sizeof fail);
        memset(flag, 0, sizeof flag);
    }
    void insert(char *str)
    {
        int p = root;
        for (int i = 0, len = strlen(str); i < len; ++i)
        {
            int ch = str[i] - 'a';
            if (nx[p][ch] == -1)
                nx[p][ch] = newnode();
            p = nx[p][ch];
        }
        flag[p] = true;
    }
    queue<int> q;
    void getfail()
    {
        while (!q.empty())
            q.pop();
        fail[root] = root;
        for (int i = 0; i < 26; ++i)
        {
            if (nx[root][i] == -1)
            {
                nx[root][i] = root;
                continue;
            }
            fail[nx[root][i]] = root;
            q.push(nx[root][i]);
        }
        while (!q.empty())
        {
            int now = q.front(); q.pop();
            if (flag[fail[now]] == true)
                flag[now] = true;
            for (int i = 0; i < 26; ++i)
            {
                if (nx[now][i] == -1)
                {
                    nx[now][i] = nx[fail[now]][i];
                    continue;
                }
                fail[nx[now][i]] = nx[fail[now]][i];
                q.push(nx[now][i]);
            }
        }
    }
} AC;

queue<int> q;
int ans[N];
struct Edge
{
    int to, next;
} edge[26 * N];
int head[26 * N], cnt = 0;
void insert(int u, int v)
{
    edge[++cnt] = (Edge){v, head[u]};
    head[u] = cnt;
}
void spfa()
{
    memset(ans, 0, sizeof ans);
    while (!q.empty())
        q.pop();
    for (int i = 0; i < AC.top; ++i)
        if (AC.flag[i] || AC.flag[AC.fail[i]])
        {
            ans[i] = 1;
            q.push(i);
        }
    for (int i = 0; i < AC.top; ++i)
        for (int j = 0; j < 26; ++j)
            if (AC.nx[i][j] != -1)
                insert(AC.nx[i][j], i);
    
    while (!q.empty())
    {
        int now = q.front(); q.pop();
        for (int i = head[now]; i; i = edge[i].next)
        {
            int v = edge[i].to;
            if (ans[v])
                continue;
            ans[v] = ans[now] + 1;
            q.push(v);
        }
    }
}

char str[N];
int n, st[N];
int main()
{
    scanf("%d", &n);

    AC.clear();
    while (n--) 
    {
        scanf("%s", str);
        AC.insert(str);
    }
    AC.getfail();
    spfa();
    
    scanf("%s", str);
    int now = 0;
    memset(st, 0, sizeof st);
    printf("%d\n", ans[st[now]] - 1);
    for (int i = 0, len = strlen(str); i < len; ++i)
    {
        if (str[i] == '-') 
            now = max(now - 1, 0);
        else
        {
            int k = AC.nx[st[now]][str[i] - 'a'];
            if (k == -1)
                k = AC.root;
            st[++now] = k;
        }

        printf("%d\n", ans[st[now]] - 1);
    }
    return 0;
}
```

### 有限状态自动机

很开心 对着错误一堆的课件一点点理解 学会了FSA（吧）。

这题用FSA的码量远低于kmp和AC自动机啊……

对所有目标串构建一个FSA，然后将键盘输入的文本在所有FSA上做匹配。

因为串中的字符从左到右有序成为FSA的节点，所以从编号为i的节点到末尾节点的最短距离为该串长度与i的差。

跳转的时候记录一下该节点是由哪个节点跳转过来的，在退格的时候跳回去就好了。（应该有更优秀的退格处理方法，但我有点菜qwq）

``` cpp
#include <cstdio>
#include <algorithm>
#include <cstring>
#include <queue>
typedef long long ll;
using namespace std;
const int N = 1e5 + 10;
struct FSA {
    int nx[N][26], from[N], now, len, last = 0, top;
    void build(char *str)
    {
        from[0] = 0;
        memset(nx, 0, sizeof nx);
        len = strlen(str); now = 0;
        for (int i = 0; i < len; ++i)
        {
            int ch = str[i] - 'a';
            for (int c = 0; c < 26; ++c)
                nx[i][c] = ch == c ? i + 1 : nx[last][c];
            if (i != 0)
                last = nx[last][ch];
        }
        for (int c = 0; c < 26; ++c)
            nx[len][c] = nx[last][c];
    }
    void walk(int ch)
    {
        from[++top] = now;
        now = nx[now][ch];
    }
    int getans()
    {
        return len - now;
    }
    void goback()
    {
        if (top)
            now = from[top--];
        else
            now = 0;
    }
} fsa[4];
int n, ans[N];
char str[N];
int getans()
{
    int res = 0x3f3f3f3f;
    for (int i = 0; i < n; ++i)
        res = min(res, fsa[i].getans());
    return res;
}
void work(int ch)
{
    for (int i = 0; i < n; ++i)
        fsa[i].walk(ch);
}
void goback()
{
    for (int i = 0; i < n; ++i)
        fsa[i].goback();
}
int main()
{
    scanf("%d", &n);

    for (int i = 0; i < n; ++i)
    {
        scanf("%s", str);
        fsa[i].build(str);
    }
    printf("%d\n", getans());
    scanf("%s", str);
    for (int i = 0, len = strlen(str); i < len; ++i)
    {
        if (str[i] == '-') 
            goback();
        else
            work(str[i] - 'a');
        printf("%d\n", getans());
    }
    return 0;
}
```