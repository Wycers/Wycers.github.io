---
title: "[Leetcode]763. 划分字母区间"
date: 2018-10-27 14:35:57
draft: false
tags: ["LeetCode", "模拟"]
author: "Wycer"
---
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
<!-- more -->
## 思路

先记录每一个字母最后出现的位置，从前向后扫记录目前所扫到的所有字母出现的最后位置，与当前下标比较，如果当前下标比之前所出现的字母的最后位置相等，说明该段满足题意可以划分。

## Solution

### Code
``` cpp
class Solution
{
  public:
    int pos[26];
    vector<int> partitionLabels(string str)
    {
        vector<int> ans;
        while (!ans.empty())
            ans.pop_back();
        for (int i = 0, len = str.length(); i < len; ++i)
            pos[str[i] - 'a'] = i;
        int l = 0, r = 0;
        for (int i = 0, len = str.length(); i < len; ++i)
        {
            r = max(r, pos[str[i] - 'a']);
            if (i == r)
            {
                ans.push_back(r - l + 1);
                l = r + 1;
            }
        }
        return ans;
    }
};
```