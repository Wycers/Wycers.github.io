---
title: "[Leetcode]620. 有趣的电影"
date: 2018-10-27 14:23:55
draft: false
tags: ["LeetCode", "Mysql"]
author: "Wycer"
---
给定影片表，找出所有影片描述为非 boring (不无聊) 的并且 id 为奇数 的影片，结果请按等级 rating 排列。
<!-- more -->
## 思路

按条件写……

## Solution

### Code
``` sql
select * from cinema where description <> 'boring' and  MOD(id, 2) = 1 order by rating desc;
```