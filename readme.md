# switch.js
这是一个用 TDD 开发的尝试。
最终的目的是构造一个函数 `match`，来模拟 switch expression：
```
const match = require('match');
const result = match(1)
    .case(x => x < 1, 'x < 1')
    .case(x => x > 1, 'x > 1')
    .default('x is 1!');
```