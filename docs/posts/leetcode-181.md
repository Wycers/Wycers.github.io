---
title: "[Leetcode]181. 超过经理收入的员工"
date: 2018-10-27 14:16:16
draft: false
tags: ["LeetCode", "Mysql"]
author: "Wycer"
---
给定有id，名字，薪水，其经理id的员工表，输出其中薪水比其经理薪水高的员工名字。
<!-- more -->
## 思路

用内联条件查询符合条件的记录，输出记录的名字。

## Solution

### Code
``` sql
SELECT e1.`Name` AS Employee FROM employee e1 inner JOIN employee e2
ON e1.ManagerId = e2.Id AND e1.Salary > e2.Salary;
```