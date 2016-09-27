---
title: 'JS takeaway - Remove adjacent duplicated characters'
date: 2016-05-11
layout: Post
author:
  - JD
tag:
  - learn
  - javascript
  - js
  - js-takeaway
  - string
  - regex
category:
  - stuff
---

A simple replace regular expression to remove adjacent duplicated characters from a given string in Javascript

```javascript
string.replace(/(.)(?=\1)/g, '');
```

For example

```javascript
var string = 'aaaaaaaaaabccccccccccccccccccccdedfgh    ijjjjjjjjjjkkkkkkll';
var processed = string.replace(/(.)(?=\1)/g, '');

// processed is now 'abcdedfgh ijkl'
```

Explanation:
 - (.) : match one single character and capture it to `group 1`
 - (?=\1) : positive look ahead, to match the results of `group 1` above, and not including the `group 1` in the results
 - /g : interate through the whole string
