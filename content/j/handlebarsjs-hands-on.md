---
title: handlebarsjs hands-on
date: 2016-01-03
layout: Post
author:
  - JD
tag:
  - learn
  - experience
  - handlebarsjs
category:
  - stuff
---

## writing custom helper

```javascript
Handlebars.registerHelper('helper-name', function(args){
    // processing code
});
```

### then call that helper

```handlebars
{{helper-name args}}
```

## conditional

```handlebars
{{#if condition}}
  // contents
{{/if}}
```
