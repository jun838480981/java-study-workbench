/**
 * JavaScript 勇者 · 30 天课程线数据文件
 * 受众：会 React/TS 的前端开发者
 * 所有链接均为真实可访问 URL（MDN / Node 官方 / V8 官方 / 知名博客）
 */

export interface LessonLink { name: string; url: string }
export interface DayTask {
  d: number;
  tag: string;
  t: string;
  desc: string;
  xp: number;
  lesson: { points: string[]; code: string; analogy: string };
  links: LessonLink[];
}
export interface Exercise { prompt: string; starter: string; answer: string; expected: string }
export interface Quiz { q: string; options: string[]; answer: number; explain: string }
export interface Resource { name: string; url: string; type: string }

export const META = {
  id: 'js',
  name: 'JavaScript 勇者',
  icon: '🟨',
  tagline: '30 天从"会写 JS"到"看穿 JS"：事件循环、原型链、闭包、模块与性能的底层地图。',
} as const;

export const TASKS: DayTask[] = [
  // ---------------- 第一周：语言地基 ----------------
  {
    d: 1, tag: '地基', t: '作用域、提升与 TDZ：var/let/const 到底差在哪', xp: 100,
    desc: '搞清词法作用域、变量提升（hoisting）与 let/const 的暂时性死区，从此告别"为什么是 undefined"式玄学。',
    lesson: {
      points: [
        'JS 是静态（词法）作用域：函数在哪里"定义"决定了它能看到什么变量，而不是在哪里调用。',
        'var 的声明和初始化都会被提升到函数顶部（值为 undefined）；let/const 也会提升，但初始化前处于 TDZ（暂时性死区），访问会抛 ReferenceError。',
        'const 只锁"绑定"不锁"内容"：const obj = {}; obj.a = 1 合法，obj = {} 报错。要真正不可变需要 Object.freeze。',
        '函数声明整体提升（可先调用后声明）；函数表达式只提升变量名本身。',
        '现代规范视角：var 是历史包袱，默认用 const，需要重绑定时才用 let。'
      ],
      code: 'console.log(a); // undefined（var 提升并初始化）\n// console.log(b); // ReferenceError: Cannot access \'b\'（TDZ）\nvar a = 1;\nlet b = 2;\n\nfunction hoisted() { return \'已提升\'; }\nconsole.log(hoisted()); // 合法，函数声明整体提升\n\nconst arr = Object.freeze([1, 2]);\n// arr.push(3); // TypeError',
      analogy: '像 TS 的声明顺序敏感度：var 相当于编译器自动把声明前置成 `a?: undefined`，而 let/const 的 TDZ 就像 TS 的"used before being assigned"检查在运行时生效。'
    },
    links: [
      { name: 'MDN · 作用域与函数', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions' },
      { name: 'MDN · let（TDZ）', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let' },
      { name: '现代 JavaScript 教程 · 变量作用域与闭包', url: 'https://zh.javascript.info/closure' }
    ]
  },
  {
    d: 2, tag: '地基', t: '类型系统与隐式转换：==、+、ToPrimitive 的判决书', xp: 100,
    desc: 'typeof/null/NaN 陷阱、Object.is 与 ===、以及对象到原始值的转换顺序（Symbol.toPrimitive → valueOf → toString）。',
    lesson: {
      points: [
        'typeof null === \'object\' 是历史 bug；判断 null 用 === null，判断数组用 Array.isArray。',
        '=== 不做类型转换（但 NaN !== NaN，+0 === -0）；Object.is 用 SameValue 算法修复这两个边缘。',
        '对象转原始值顺序：Symbol.toPrimitive(hint) 优先，否则 valueOf → toString（hint 为 string 时反之）。',
        '[1,2] + [3] === "1,23"：数组 valueOf 返回自身，退化为 toString 拼接。',
        '工程建议：永远用 === 与 Object.is 处理 NaN，用 ?? 兜底（0 和 \'\' 是有效值时不能只用 ||）。'
      ],
      code: 'typeof null; // \'object\'（历史 bug）\nObject.is(NaN, NaN); // true\nObject.is(0, -0); // false\n\n[1, 2] + [3]; // \'1,23\'\nconst weird = {\n  [Symbol.toPrimitive](hint) { return hint === \'number\' ? 42 : \'hi\'; }\n};\nweird * 2; // 84\nweird + \'\'; // \'hi\'',
      analogy: '就像 React 里 `value ?? fallback` 与 `value || fallback` 的区别：0、\'\'、false 这些"合法 falsy 状态"只在 ToBoolean 视角才消失，业务上它们是真实数据。'
    },
    links: [
      { name: 'MDN · 数据类型与数据结构', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures' },
      { name: 'MDN · Symbol.toPrimitive', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive' },
      { name: 'MDN · Object.is', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is' }
    ]
  },
  {
    d: 3, tag: '地基', t: '原型链与 new：class 只是原型糖', xp: 120,
    desc: '从 [[Prototype]] 到 class 语法：constructor、super、instanceof、Object.create，看穿 React 之外的另一个对象世界。',
    lesson: {
      points: [
        '每个对象都有 [[Prototype]] 内部槽，属性查找沿原型链向上冒泡，直到 Object.prototype 或 null。',
        'new Foo() 做四件事：创建 {} → 接到 Foo.prototype → 调用 Foo 并绑定 this → 返回对象（若构造函数返回对象则覆盖）。',
        'instanceof 检查的是右侧函数的 prototype 是否出现在左侧的原型链上，与构造函数无关，改 prototype 会影响结果。',
        'class 是原型的语法糖：方法在.prototype 上且不可枚举，内部严格模式，没有提升。',
        'Object.create(proto) 是最直接的原型链构建方式，比修改 __proto__ 干净得多。'
      ],
      code: 'class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} 发声`; }\n}\nclass Dog extends Animal {\n  speak() { return `${super.speak()}：汪`; }\n}\n\nconst d = new Dog(\'旺财\');\nObject.getPrototypeOf(d) === Dog.prototype; // true\nObject.getPrototypeOf(Dog.prototype) === Animal.prototype; // true\nDog.prototype.speak === d.speak; // true（方法共享）\n// 等价的非 class 写法：\nconst cat = Object.create(Animal.prototype);',
      analogy: '原型链就是 JS 版的"属性 fallback 链"：像 React Context 沿组件树向上找 Provider，找不到就用默认值——只是链的终点是 Object.prototype 而不是 null。'
    },
    links: [
      { name: 'MDN · 继承与原型链', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain' },
      { name: 'MDN · class', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes' },
      { name: 'MDN · new 运算符', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new' }
    ]
  },
  {
    d: 4, tag: '地基', t: 'this 全解：call/apply/bind 与箭头函数', xp: 120,
    desc: 'this 由调用方式决定而非定义位置；默认/隐式/显式/new 四种绑定规则与优先级，箭头函数为何能"锁死" this。',
    lesson: {
      points: [
        '绑定优先级：new > 显式（call/apply/bind）> 隐式（obj.fn()）> 默认（独立调用，严格模式为 undefined）。',
        '箭头函数没有自己的 this/arguments，捕获定义处词法 this——所以在 React class 时代用箭头函数解决 handler 绑定。',
        'bind 返回硬绑定函数；call/apply 立即调用（call 逐个传参，apply 传数组）。',
        'DOM/Node 回调里 this 经常"丢"，常见修法：箭头函数、bind、或干脆改写成闭包变量。',
        'use strict 下独立调用的 this 是 undefined（不再指向 window），让错误更早暴露。'
      ],
      code: 'const counter = {\n  n: 0,\n  tick() { this.n++; return this.n; },\n  // 箭头函数捕获定义处 this（即外层 this）\n  arrow: null,\n};\ncounter.arrow = () => counter.tick();\n\ncounter.tick(); // 1，隐式绑定\ncounter.arrow(); // 2\nconst fn = counter.tick.bind(counter);\nfn(); // 3，硬绑定\n\nfunction loose() { return this; }\nloose(); // 严格模式：undefined；非严格：window/globalThis',
      analogy: '像 React 的 handleClick 绑定问题：箭头函数属性 = 定义时锁 this（useCallback 闭包），bind = 在 constructor 里预绑定——你早就用过 this 的全部知识了。'
    },
    links: [
      { name: 'MDN · this', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this' },
      { name: 'MDN · Function.prototype.bind', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind' }
    ]
  },
  {
    d: 5, tag: '地基', t: '闭包：内存、循环变量与真实泄漏场景', xp: 150,
    desc: '闭包是函数 + 它捕获的词法环境。理解它你就理解了 hooks 的闭包陷阱、事件监听器泄漏与节流防抖的实现。',
    lesson: {
      points: [
        '闭包 = 函数 + 其创建时的词法环境引用。内层函数即使外层已返回，仍持有被引用变量的生命周期。',
        '捕获的是"变量绑定"而非"值的快照"——React useEffect 里 stale closure 的根源正是把"快照错觉"当成了现实。',
        'var + 循环 + 异步回调的经典 bug：只有一个函数级绑定；用 let（每轮迭代新绑定）或 IIFE 修复。',
        '闭包泄漏：被闭包持有的 DOM 节点/大数组无法被 GC，配合 removeEventListener 或置 null 释放。',
        '节流、防抖、once、memoize 本质都是用闭包存私有状态——你天天在用闭包。'
      ],
      code: 'function makeCounter() {\n  let n = 0;          // 被闭包持有，外部无法直接访问\n  return () => ++n;\n}\nconst c = makeCounter();\nc(); c(); // 2\n\n// 经典循环 bug 与修复\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i));   // 3 3 3\n}\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j));   // 0 1 2\n}\n\nfunction memoize(fn) {\n  const cache = new Map();            // 闭包私有缓存\n  return (k) => cache.has(k) ? cache.get(k) : (cache.set(k, fn(k)), cache.get(k));\n}',
      analogy: 'useEffect 的 stale closure 和这里一模一样：React 每次渲染生成新词法环境，effect 捕获的是"那一次"的 props/state。清理函数 return () => clearInterval(timer) 就是在解除闭包对资源的持有。'
    },
    links: [
      { name: 'MDN · 闭包', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures' },
      { name: 'MDN · 内存管理', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management' }
    ]
  },
  {
    d: 6, tag: '地基', t: '执行上下文、调用栈与堆栈追踪', xp: 120,
    desc: '代码如何被执行：执行上下文、调用栈、栈帧，读懂 Error.stack 与 DevTools 的调用树。',
    lesson: {
      points: [
        '每个函数调用创建一个执行上下文（词法环境 + this + 变量环境），压入调用栈；栈溢出就是递归没有终止条件。',
        'JS 是单线程同步执行模型：同一时刻只有一个栈帧在跑，"异步"靠事件循环排队（明天展开）。',
        'Error.captureStackTrace（V8）与 Error.stackTraceLimit 可控制堆栈信息量，Sentry 类工具的基础。',
        '尾调用优化在规范中定义但浏览器几乎未实现（Safari 除外）——不要依赖递归改写省栈。',
        'DevTools Performance 面板的火焰图就是调用栈的时间轴采样。'
      ],
      code: 'function a() { b(); }\nfunction b() { throw new Error(\'boom\'); }\ntry { a(); } catch (e) {\n  console.log(e.stack);\n  // Error: boom\n  //   at b (...)\n  //   at a (...)   ← 调用栈自顶向下\n}\n\n// 递归爆栈\nfunction boom(n) { return n === 0 ? 0 : boom(n + 1); }\n// boom(1e7); // RangeError: Maximum call stack size exceeded',
      analogy: '调用栈就像 React 渲染树的同步"提交"阶段：一帧渲染里嵌套渲染子组件，栈帧进出就是 render 函数的调用与返回——这也是为什么渲染阶段不能做异步副作用。'
    },
    links: [
      { name: 'MDN · 堆栈追踪', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_the_Error_object' },
      { name: 'V8 · Error.captureStackTrace 相关', url: 'https://v8.dev/docs/stack-trace-api' }
    ]
  },
  {
    d: 7, tag: '异步', t: '事件循环：宏任务、微任务与渲染时机', xp: 200,
    desc: '单线程下的调度艺术：call stack → microtask → task → render 的完整循环，setTimeout 为何不精确。',
    lesson: {
      points: [
        '一次事件循环 tick：清空调用栈 → 执行全部微任务（Promise.then、queueMicrotask、MutationObserver）→ 取一个宏任务（setTimeout、I/O、事件）→（浏览器）可能渲染。',
        '微任务在渲染之前全部清空，所以 Promise 里疯狂追加微任务会饿死渲染（页面卡死但不报错）。',
        'setTimeout(fn, 0) 最少延迟约 1ms 且受"嵌套 5 层后最小 4ms"钳制；requestAnimationFrame 在渲染前、style/layout 计算前执行。',
        'JSV9000 这类可视化工具能把执行顺序看动画化，强烈建议手动推演一遍。'
      ],
      code: 'console.log(\'1\');\nsetTimeout(() => console.log(\'2\'), 0);\nPromise.resolve().then(() => {\n  console.log(\'3\');\n  Promise.resolve().then(() => console.log(\'4\')); // 微任务可以无限追加\n});\nqueueMicrotask(() => console.log(\'5\'));\nconsole.log(\'6\');\n// 输出：1 6 3 4 5 2\n// 同步 → 微任务清空(3,4,5) → 宏任务(2)',
      analogy: '微任务 vs 宏任务就像 React 的 useLayoutEffect vs useEffect：前者在本帧渲染前同步清掉，后者排到渲染后——事件循环的"渲染时机"就是你已经熟悉的 commit 时机。'
    },
    links: [
      { name: 'MDN · 事件循环', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop' },
      { name: 'Jake Archibald · Tasks, microtasks, queues and schedules', url: 'https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/' },
      { name: 'JSV9000 · 事件循环可视化', url: 'https://www.jsv9000.app/' }
    ]
  },
  {
    d: 8, tag: '异步', t: 'Promise 深挖：状态机、then 链与常见误用', xp: 180,
    desc: 'Promise 三态不可逆、then 的微任务调度、错误穿透、Promise.all/allSettled/race/any 的选型。',
    lesson: {
      points: [
        'Promise 只有 pending → fulfilled / rejected 三态，一旦落定不可逆；then 返回"新" Promise，这是链式调用的基础。',
        'then 的返回值决定链路：返回普通值 → resolve；返回 Promise → 展开；throw → reject。',
        '错误沿 then 链"穿透"直到被某个 catch/rejection handler 接住——finally 不改变结果。',
        '组合器选型：all 一损俱损（并发请求主选）、allSettled 全要结果、race 抢第一个落定（超时控制）、any 要第一个成功。',
        '反模式：在 async 函数里 return await 通常是冗余（但 try/catch 包裹时除外）；忘记 return 导致链断裂最常见。'
      ],
      code: 'Promise.resolve(1)\n  .then(v => v + 1)\n  .then(v => { throw new Error(v); })\n  .catch(e => e.message)      // 接住错误，链路恢复 fulfilled\n  .then(v => console.log(v)); // \'2\'\n\n// 超时控制\nconst withTimeout = (p, ms) => Promise.race([\n  p,\n  new Promise((_, rej) => setTimeout(() => rej(new Error(\'timeout\')), ms)),\n]);\n\n// 全部结果\nconst rs = await Promise.allSettled([fetchA(), fetchB()]);\nrs.filter(r => r.status === \'rejected\').map(r => r.reason);',
      analogy: 'then 链就是 Promise 版的 Redux 中间件管道：每一环接收上一环的值，返回新值或新 Promise，任何一环 throw 都会被下游 catch 兜底。'
    },
    links: [
      { name: 'MDN · Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise' },
      { name: 'MDN · 使用 Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises' }
    ]
  },
  {
    d: 9, tag: '异步', t: 'async/await 与异步演进史：从回调到 now', xp: 180,
    desc: '回调地狱 → Promise → async/await 的演进逻辑，await 的执行语义、并行 vs 串行、以及 try/catch 的取舍。',
    lesson: {
      points: [
        '演进逻辑：回调（控制反转、错误难处理）→ Promise（标准化错误通道、可组合）→ async/await（同步风格、可 try/catch、可调试单步）。',
        'await 暂停的是"函数"不是"线程"：它把后续代码包装成微任务，函数本身立即返回 Promise 给调用者。',
        '串行 await 两个独立请求是性能 bug：用 Promise.all 或先发起再用 await。',
        'for...of + await 是真正的串行（限流场景正确姿势）；forEach + await 是假的并发错误写法。',
        '顶层 await（ESM）让你在模块顶层直接等待，打包器/加载器会把它包装进隐式 async。'
      ],
      code: '// ❌ 串行：总耗时 = a + b\nconst a = await fetchA();\nconst b = await fetchB();\n\n// ✅ 并行：总耗时 = max(a, b)\nconst [a2, b2] = await Promise.all([fetchA(), fetchB()]);\n\n// ✅ 有序串行（限流/依赖前值）\nfor (const url of urls) {\n  const res = await fetch(url);\n  results.push(res);\n}\n// ❌ forEach 不等待\n// urls.forEach(async u => { await fetch(u); }); // 外层感知不到',
      analogy: 'async/await 之于 Promise，就像 JSX 之于 React.createElement：纯语法糖，编译后没有任何新能力，但可读性和调试体验质变。'
    },
    links: [
      { name: 'MDN · async/await', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function' },
      { name: 'MDN · Promise.all', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all' }
    ]
  },
  {
    d: 10, tag: '异步', t: '错误处理与调试：让异常成为系统的一部分', xp: 150,
    desc: 'Error 类型、自定义错误、全局兜底（unhandledrejection / window.onerror）、条件断点与 logpoint 工作流。',
    lesson: {
      points: [
        '用 instanceof 分发错误类型：自定义 class HttpError extends Error 是工程标配（注意 target ES5 下 instanceof 失效的坑，ES2015+ 无碍）。',
        '全站兜底：浏览器 window.addEventListener(\'unhandledrejection\'/\'error\')；Node process.on(\'uncaughtException\')（只能记录，不能恢复）。',
        'async 函数的错误要 await 才能被 try/catch 接住；把 Promise 存进变量再 await 会绕过 catch。',
        'DevTools 技巧：异常断点（Pause on exceptions）、条件断点、Logpoint（不打断的 console.log）。',
        '不要吞错误：空 catch 是事故根源；要么处理、要么包装上下文后重抛、要么上报。'
      ],
      code: 'class HttpError extends Error {\n  constructor(status, body) {\n    super(`HTTP ${status}`);\n    this.name = \'HttpError\';\n    this.status = status;\n  }\n}\ntry {\n  await api();\n} catch (e) {\n  if (e instanceof HttpError && e.status === 401) return relogin();\n  throw e; // 不认识的上抛\n}\n\nwindow.addEventListener(\'unhandledrejection\', e => {\n  report(e.reason); // 全局兜底上报\n});',
      analogy: '错误处理像 React 的 Error Boundary 分层：组件内 catch（局部降级）→ 页面级 Boundary（整页兜底）→ 全局 unhandledrejection（上报日志），粒度从细到粗。'
    },
    links: [
      { name: 'MDN · Error', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error' },
      { name: 'MDN · unhandledrejection 事件', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/unhandledrejection_event' }
    ]
  },
  // ---------------- 第二周：迭代、元编程与语言深度 ----------------
  {
    d: 11, tag: '语言深度', t: '迭代器与生成器：for...of 的底层协议', xp: 180,
    desc: 'Iterable/Iterator 协议、Symbol.iterator、生成器函数的惰性求值与协程式控制流。',
    lesson: {
      points: [
        '可迭代协议 = 对象有 Symbol.iterator 方法返回迭代器；迭代器协议 = 有 next() 返回 { value, done }。',
        'for...of、展开、解构、Array.from 全部走这个协议——给自定义类实现 Symbol.iterator 即可接入所有语法。',
        'function* 生成器：yield 暂停/恢复执行，是"可暂停的函数"，无限序列（斐波那契、分页游标）天然表达。',
        'yield* 委托子生成器；生成器返回的 iterator 也是 iterable（Symbol.iterator 返回自身）。',
        '生成器与 async/await 同源：await 就是基于"暂停点"的调度， redux-saga 用 yield 表达 effect 就是协程思想。'
      ],
      code: 'function* fib() {\n  let [a, b] = [0, 1];\n  while (true) { yield a; [a, b] = [b, a + b]; } // 无限惰性序列\n}\nconst it = fib();\nit.next().value; // 0\nit.next().value; // 1\nit.next().value; // 1\n\n// 让自定义类支持 for...of / [...obj]\nclass Shelf {\n  *[Symbol.iterator]() { yield* this.items ?? []; }\n}\n\n// 手动消费前 n 个\nfunction* take(it, n) { let i = 0; for (const v of it) { if (i++ >= n) return; yield v; } }',
      analogy: 'Symbol.iterator 就是 JS 版的"协议接口"（类似 TS 的 interface）：for...of 只认协议不认类型，实现协议的对象自动获得全部迭代语法。'
    },
    links: [
      { name: 'MDN · 迭代器与生成器', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators' },
      { name: 'MDN · function*', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*' }
    ]
  },
  {
    d: 12, tag: '语言深度', t: 'Proxy 与 Reflect：拦截一切操作', xp: 200,
    desc: 'Proxy 的 13 种 trap、Reflect 的镜像 API、Vue3 响应式与 immer 的实现原理。',
    lesson: {
      points: [
        'Proxy(target, handler) 拦截对 target 的底层操作：get/set/has/deleteProperty/apply/construct…',
        'Reflect 是"默认行为"的镜像 API：trap 里 return Reflect.get(target, key, receiver) 就是"先放行"，且参数签名与 trap 一一对应。',
        'Proxy 能拦截新增属性和 delete，所以 Vue3 用它替代 Vue2 的 Object.defineProperty，不需要再 $set。',
        'receiver 参数很重要：getter 里访问 this 应指向代理对象，否则嵌套依赖收集会漏。',
        '限制：Proxy 不能拦截 ===、typeof、Number() 等原始操作；无法"撤销"目标对象本身的操作只能 revoke。'
      ],
      code: 'function reactive(obj) {\n  return new Proxy(obj, {\n    get(t, key, receiver) {\n      track(t, key);                    // 依赖收集\n      const v = Reflect.get(t, key, receiver);\n      return typeof v === \'object\' && v ? reactive(v) : v; // 惰性深代理\n    },\n    set(t, key, val, receiver) {\n      Reflect.set(t, key, val, receiver);\n      trigger(t, key);                  // 派发更新\n      return true;\n    },\n  });\n}',
      analogy: 'Proxy trap 像 React 组件的拦截层（HOC/Context 分发）：get/set 前插逻辑（收集/触发），Reflect.* 就是调用 super 放行默认行为。Vue3 的响应式核心就是这十几行。'
    },
    links: [
      { name: 'MDN · Proxy', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy' },
      { name: 'MDN · Reflect', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect' }
    ]
  },
  {
    d: 13, tag: '语言深度', t: 'ES2015+ 语法深挖：解构、展开、默认参数的隐藏语义', xp: 130,
    desc: '不只"会用"：解构的模式匹配本质、展开运算符是浅拷贝、默认参数表达式惰性求值。',
    lesson: {
      points: [
        '解构是模式匹配：支持嵌套、数组跳位、剩余元素、重命名与默认值（{ a = 1, b: c } 同行成立）。',
        '展开/剩余运算符对"可迭代对象"操作：[...str] 是逐码点（surrogate pair 安全）；{...obj} 只拷贝可枚举自有属性。',
        '展开是浅拷贝：嵌套对象仍是同一引用—— immer 的"写时拷贝"就是在树路径上按需深拷贝。',
        '函数默认参数是表达式，惰性求值且能引用前面的参数：(a, b = a * 2) => …。',
        '参数按值传递，对象传"引用的值"——所以函数内重新赋值参数不影响外部，但修改属性影响。'
      ],
      code: 'const { data: { user: { name = \'anon\' } = {} } = {}, ...rest } = res;\n\nconst s = \'👍\';\n[...s].length;        // 1（码点安全）\ns.length;             // 2（UTF-16 单元）\n\nfunction options(timeout = 3000, retries = timeout / 300) { return { timeout, retries }; }\noptions(6000).retries; // 20\n\nconst nested = { a: { b: 1 } };\nconst copy = { ...nested };\ncopy.a === nested.a; // true，浅！',
      analogy: '浅拷贝就是你在 React/Redux 里学的"不可变更新要展开到被改的那一层"：{...state, list: [...state.list, item]}——同一条规则。'
    },
    links: [
      { name: 'MDN · 解构赋值', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' },
      { name: 'MDN · 展开语法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax' }
    ]
  },
  {
    d: 14, tag: '语言深度', t: '数组方法全谱系：可变性、返回值与性能', xp: 140,
    desc: 'map/filter/reduce/find/at/flat 的返回值心智模型、可变方法清单、十万级数据的性能差异。',
    lesson: {
      points: [
        '心智模型按返回值分三类：返回新数组（map/filter/concat/slice/flat）、返回其他值（find/some/every/reduce/indexOf）、原地修改（push/splice/sort/reverse/fill）。',
        'sort 默认按字符串比较！数字要 sort((a, b) => a - b)；sort/reverse 原地修改且现在会先拷贝再排（新规范）。',
        'reduce 是最通用的一环：groupBy、pipeline、treeToFlat 都能写，但团队代码里可读性优先。',
        '性能：for 循环 ≈ for...of > reduce > map/filter 链（每次链式调用都产生中间数组）；万级以内差异无感，大数据再优化。',
        'Array.prototype.at(-1)、Object.groupBy（ES2024）让旧惯用法升级。'
      ],
      code: 'const nums = [5, 12, 8, 130];\nnums.at(-1);                 // 130\n[3, 1, 10].sort();           // [1, 10, 3] 字符串序！\n[3, 1, 10].sort((a, b) => a - b); // [1, 3, 10]\n\n// 一次遍历完成 filter+map（避免中间数组）\nconst good = nums.reduce((acc, n) => {\n  if (n > 10) acc.push(n * 2);\n  return acc;\n}, []);\n\n// ES2024 分组\nObject.groupBy(nums, n => (n > 10 ? \'big\' : \'small\'));',
      analogy: '数组链式方法 = RxJS 的管道：每次 map/filter 是一个新 observable（新数组），中间数组就是"未退订的中间流"——热路径上合并成一趟 reduce。'
    },
    links: [
      { name: 'MDN · Array', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array' },
      { name: 'MDN · Object.groupBy', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy' }
    ]
  },
  {
    d: 15, tag: '语言深度', t: 'Map/Set/WeakMap/WeakRef：集合类型的正确选型', xp: 150,
    desc: '什么时候 Map 优于对象、Set 去重与 O(1) 查询、WeakMap 如何避免元数据泄漏。',
    lesson: {
      points: [
        '对象 vs Map：Map 键可以是任意值、有序、有 size、频繁增删性能更好；对象适合当"结构化记录"（JSON 友好）。',
        'Set/Map 的 has 是 O(1)（哈希）；用 includes/O(n) 查数组在热路径是反模式，数组转 Set 一次即可。',
        'WeakMap 键必须是对象且"弱引用"：不阻止 GC，是给外部对象挂私有/附加数据的正解（React 内部 fiber 缓存、事件元数据）。',
        'WeakRef + FinalizationRegistry 存在但慎用：GC 时机不确定，不能用于业务正确性逻辑，只做缓存类优化。',
        'Map 迭代顺序即插入顺序；Symbol 是防碰撞键；structuredClone 深拷贝对象图（可处理循环引用）。'
      ],
      code: 'const seen = new Set(arr);        // O(1) 查询\nseen.has(x);\n\nconst cache = new WeakMap();\nfunction getMeta(node) {\n  if (!cache.has(node)) cache.set(node, computeExpensive(node));\n  return cache.get(node);          // node 被 GC 时缓存自动消失\n}\n\nconst deep = structuredClone(data); // 深拷贝，支持循环引用\nconst uniq = [...new Set(list)];',
      analogy: 'WeakMap 就像 React 的 ref 存外部资源：挂在实例上但不参与渲染/生命周期，宿主销毁它跟着销毁——绝不因为"给 DOM 挂个标记"让整棵树无法回收。'
    },
    links: [
      { name: 'MDN · Map', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map' },
      { name: 'MDN · WeakMap', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap' },
      { name: 'MDN · structuredClone', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/structuredClone' }
    ]
  },
  {
    d: 16, tag: '语言深度', t: '函数式惯用法：纯函数、柯里化与组合', xp: 140,
    desc: '用 JS 表达函数式核心思想：引用透明、柯里化、compose/pipe，以及在 React 世界里的实际收益。',
    lesson: {
      points: [
        '纯函数：相同输入恒定输出、无副作用——可测试、可 memo（React.memo/useMemo 的前提）。',
        '柯里化 f(a)(b)(c)：固定参数生成特化函数，配合 Partial Application 写可复用的校验/请求构造器。',
        'compose(f, g)(x) = f(g(x))；pipe 从左到右——数组 reduce 一行实现。',
        '副作用要"推到边缘"：核心逻辑保持纯函数，IO 集中在入口（对齐 React：组件纯渲染，副作用进 effect/handler）。',
        '不要教条：JS 是多范式语言，可读性与团队一致性优先于范式纯度。'
      ],
      code: 'const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);\nconst curry = f =>\n  f.length === 0 ? f() : (...a) => a.length >= f.length ? f(...a) : curry(f.bind(null, ...a));\n\nconst trim = s => s.trim();\nconst upper = s => s.toUpperCase();\nconst normalize = pipe(trim, upper);\nnormalize(\'  hi \'); // \'HI\'\n\nconst fetchJSON = base => path => fetch(base + path).then(r => r.json());\nconst api = curry((base, path) => fetch(base + path));',
      analogy: 'pipe/compose 就是 RxJS pipe 或 Redux 中间件的起点：一个值流过一串纯函数变换。React 组件树本质也是 props 流过嵌套纯函数。'
    },
    links: [
      { name: 'MDN · Arrow functions', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions' },
      { name: 'Frimley · A gentle intro to functional JS', url: 'https://jrsinclair.com/javascript/2016/gentle-introduction-to-functional-javascript-intro/' }
    ]
  },
  {
    d: 17, tag: '模块化', t: '模块演进史：从 IIFE 到 ESM', xp: 160,
    desc: '命名空间 → CommonJS → AMD → UMD → ESM 的动机与取舍，以及 tree-shaking 为什么只对 ESM 有效。',
    lesson: {
      points: [
        'IIFE + 全局对象是最早的隔离方案；CommonJS（Node）用 require 同步加载，适合服务端不适合浏览器。',
        'AMD/RequireJS 异步加载解决浏览器问题，UMD 兼容两者——历史包袱，新代码不要再用。',
        'ESM 是语言级标准：静态结构（import 在编译期可解析），支持循环引用（ live binding）、异步加载、顶层 await。',
        '静态结构 → bundler 可以 tree-shaking：只保留被 import 的导出。CJS 的动态 require 让打包器无法确定依赖图。',
        'package.json 的 exports 字段控制入口与子路径；type: module 决定 .js 的解释方式；浏览器端注意 defer 语义与 CORS。'
      ],
      code: '// CJS：动态、同步、无 tree-shaking\nconst _ = require(\'lodash\');\nmodule.exports = { api };\n\n// ESM：静态、可摇树、live binding\nexport const api = 1;\nexport default main;\nimport _ from \'lodash-es\';\n\n// 循环引用也安全：binding 是活的\nimport { counter } from \'./a.js\';\nsetTimeout(() => console.log(counter), 0); // 拿到的是最终值',
      analogy: 'ESM 之于 CJS ≈ 静态分析之于动态运行时：像 TS 的类型可以在编译期算出 vs any 全靠运行时猜。静态依赖图就是 tree-shaking 的全部前提。'
    },
    links: [
      { name: 'MDN · JavaScript modules', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules' },
      { name: 'Node.js · ESM 文档', url: 'https://nodejs.org/api/esm.html' }
    ]
  },
  {
    d: 18, tag: '浏览器与平台', t: '事件模型与 DOM：捕获、冒泡、委托', xp: 130,
    desc: '三阶段事件流、stopPropagation vs preventDefault、事件委托与 passive listener。',
    lesson: {
      points: [
        '事件三阶段：捕获（window→target）→ 目标 → 冒泡；addEventListener 第三参 { capture: true } 改变监听阶段。',
        'stopPropagation 阻断传播但不阻止默认行为；preventDefault 只阻止默认行为（如链接跳转）；两者互不等价。',
        '事件委托：父容器统一监听 + e.target 判定，把 N 个监听器降为 1 个——列表/表格场景的标准做法。',
        'scroll/touchmove/wheel 要 { passive: true }：承诺不调 preventDefault，滚动不再等待 JS，掉帧救星。',
        'React 的合成事件在 17+ 挂到 root 上（不再是 document），原生事件与合成事件的 stopPropagation 交互要小心。'
      ],
      code: 'document.querySelector(\'#list\').addEventListener(\'click\', e => {\n  const item = (e.target as HTMLElement).closest(\'[data-id]\');\n  if (!item) return;\n  openDetail(item.dataset.id!);   // 委托：一个监听器管整个列表\n});\n\n// 大量滚动的场景\nwindow.addEventListener(\'scroll\', onScroll, { passive: true });',
      analogy: '事件委托像 React 把事件统一收敛到 root 的合成事件系统：不在每个节点上挂监听器，而是利用冒泡在顶层分发。'
    },
    links: [
      { name: 'MDN · 事件介绍', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events' },
      { name: 'MDN · passive 监听器', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener' }
    ]
  },
  {
    d: 19, tag: '浏览器与平台', t: 'JS 内存模型与 GC：从 V8 视角看泄漏', xp: 180,
    desc: '栈 vs 堆、可达性与分代 GC、Detached DOM 与定时器泄漏，用 Heap Snapshot 实战定位。',
    lesson: {
      points: [
        '基本类型在栈、对象在堆；JS 无手动 free，GC 用"可达性"判定：从根（全局、当前栈）出发不可达即可回收。',
        'V8 分代回收：新生代（Scavenge，快、频繁）+ 老生代（Mark-Compact）；长命对象晋升老生代。',
        '常见泄漏：被移除的 DOM 仍被 JS 变量/定时器/闭包持有（Detached DOM）、无清理的 setInterval、失控的事件监听、无限增长的 Map 缓存。',
        '排查工具：Chrome DevTools Memory 面板 Allocation timeline + Heap Snapshot（比较三次快照找增长对象），保留路径（Retainers）看是谁拽着不放。',
        'WeakMap/WeakRef 是"不阻止回收"的正解；AbortController 解绑一次性场景。'
      ],
      code: 'let cache: Map<string, BigThing> = new Map();   // ❌ 只进不出\nsetInterval(() => {\n  cache.set(Date.now() + \'\', new BigThing());\n}, 1000);\n\n// ✅ LRU + 上限 + 页面卸载清理\nconst lru = new Map();\nfunction remember(k: string, v: BigThing) {\n  lru.set(k, v);\n  if (lru.size > 500) lru.delete(lru.keys().next().value);\n}\nwindow.addEventListener(\'pagehide\', () => cache.clear());\n\nconst ac = new AbortController();\nfetch(url, { signal: ac.signal }); // ac.abort() 一键解绑',
      analogy: '可达性 GC 就是 React 的卸载模型：从 root 出发遍历 fiber 树，碰不到的组件整个子树销毁——任何"体外引用"都等于把组件偷偷挂到了一棵看不见的树上。'
    },
    links: [
      { name: 'MDN · 内存管理', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management' },
      { name: 'Chrome DevTools · Memory', url: 'https://developer.chrome.com/docs/devtools/memory-problems' }
    ]
  },
  {
    d: 20, tag: '性能', t: '性能工具链：Performance 面板、Lighthouse 与帧预算', xp: 160,
    desc: '读火焰图、量化帧预算（16.7ms）、long task 与 INP，建立"先测量后优化"的工作流。',
    lesson: {
      points: [
        '60fps = 每帧 16.7ms，现代高刷屏更紧；任何超过 50ms 的任务都是 Long Task，会拖累 INP（交互到下一帧绘制的指标）。',
        'Performance 面板看三件事：主线程火焰图（长任务在哪）、FPS/帧率轨、内存轨；黄色 script vs 紫色 layout 一眼分层。',
        '拆长任务手段：分批 + requestIdleCallback/setTimeout 让出主线程；scheduler.yield()（新 API）更优雅。',
        '优化顺序铁律：测量 → 定位 → 改 → 再测量。凭直觉优化经常是负收益。',
        'Lighthouse/WebPageTest 做 CI 化性能门禁，关注 LCP/CLS/INP 三大 Core Web Vitals。'
      ],
      code: '// 长任务观测\nnew PerformanceObserver(list => {\n  for (const e of list.getEntries()) {\n    console.log(\'long task\', e.duration);\n  }\n}).observe({ entryTypes: [\'longtask\'] });\n\n// 分批处理，让出主线程\nasync function processAll(items: Item[]) {\n  for (let i = 0; i < items.length; i += 100) {\n    process(items.slice(i, i + 100));\n    await new Promise(r => setTimeout(r, 0)); // 或 scheduler.yield()\n  }\n}',
      analogy: 'Profiler 之于性能 = React DevTools Profiler 之于渲染：先记录，找"最宽的火焰"（最长 commit / 最长 task），别猜。'
    },
    links: [
      { name: 'web.dev · INP', url: 'https://web.dev/articles/inp' },
      { name: 'MDN · Performance API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Performance' },
      { name: 'Chrome DevTools · Performance', url: 'https://developer.chrome.com/docs/devtools/performance' }
    ]
  },
  {
    d: 21, tag: '性能', t: 'V8 引擎内幕：隐藏类、内联缓存与去优化', xp: 200,
    desc: '为什么"形状一致的对象"更快：hidden classes、inline caching、JIT 的乐观假设与 deopt。',
    lesson: {
      points: [
        'V8（JIT）基于"乐观假设"优化代码：假设对象形状不变、类型不变——假设被打破就 deopt（去优化），性能断崖。',
        'Hidden Class（Map）：相同属性添加顺序的对象共享形状；乱序添加/动态 delete 会分裂形状。',
        'Inline Cache：函数访问 obj.x 的位置会被缓成"形状 + 偏移"，单态最快、多态变慢、超态退化。',
        '实践：字段声明顺序一致、避免 delete（置 null/undefined）、数字类型别混（int/double）、热函数参数类型稳定。',
        '数组：packed elements 最快，出现洞（稀疏）或类型混杂退化为字典模式。'
      ],
      code: '// ❌ 形状分裂\nconst a = { x: 1 };\nconst b = { y: 2 };       // 不同形状\nb.x = 1;                  // 又一种形状\n\n// ✅ 统一构造路径\nclass Point {\n  x = 0; y = 0;           // 声明全部字段，形状固定\n  constructor(x: number, y: number) { this.x = x; this.y = y; }\n}\n\nconst hot = (n: number) => n * 2; // 热函数，JIT 可单态优化',
      analogy: 'V8 的乐观优化像 React Compiler 的记忆化假设：假设输入不变就跳过重算，一旦被打破（mutable ref）就回退。写"形状稳定"的代码 = 给引擎留优化空间。'
    },
    links: [
      { name: 'V8 · 源码博客（Shapes/IC）', url: 'https://v8.dev/blog' },
      { name: 'V8 · Ignition/TurboFan 概览', url: 'https://v8.dev/docs' }
    ]
  },
  {
    d: 22, tag: '性能', t: '现代浏览器渲染管线与 JS 的位置', xp: 150,
    desc: 'JS 在"解析/编译/执行"中的成本、defer/async/module 的加载策略、requestAnimationFrame 与布局抖动。',
    lesson: {
      points: [
        '下载 JS → 解析（字节码）→ 执行；大 bundle 的成本不止网络，还有解析与主线程执行时间。',
        '<script defer>：下载不阻塞、DOMContentLoaded 前按序执行；async：下载完立即执行（顺序不保证）；type="module" 默认 defer。',
        '渲染管线：Style → Layout → Paint → Composite；改 width/top 触发整条链，transform/opacity 只走 Composite，动画首选。',
        '布局抖动（layout thrashing）：循环里交替读写布局属性强制同步 reflow——读写分离或用 FastDom 模式修复。',
        'requestAnimationFrame 对齐渲染帧做动画；requestIdleCallback 处理低优先级任务（有超时风险，要有 fallback）。'
      ],
      code: '// ❌ 读写交替 = N 次强制 reflow\nfor (const el of items) {\n  const h = el.offsetHeight;   // 读（使前面写失效）\n  el.style.height = h + 10 + \'px\'; // 写\n}\n// ✅ 先全部读，再全部写\nconst hs = items.map(el => el.offsetHeight);\nitems.forEach((el, i) => (el.style.height = hs[i] + 10 + \'px\'));\n\nrequestAnimationFrame(() => {\n  box.style.transform = \'translateX(100px)\'; // 只合成\n});',
      analogy: 'Layout vs Composite 之于 CSS，正如重渲染 vs 重挂载之于 React：都改"值"，代价差一个数量级，关键是避开触发整条重建链的属性。'
    },
    links: [
      { name: 'web.dev · 渲染性能', url: 'https://web.dev/articles/rendering-performance' },
      { name: 'MDN · script 元素（defer/async）', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script' }
    ]
  },
  {
    d: 23, tag: '语言深度', t: 'ES2023/ES2024 新武器库', xp: 140,
    desc: 'toSorted/toReversed/with、findLast、Array.fromAsync、Object.groupBy、Promise.withResolvers、正则 v 标志。',
    lesson: {
      points: [
        'ES2023 不可变数组方法：toSorted/toReversed/toSpliced/with——返回新数组不改原数组，React/不可变状态的救星。',
        'findLast/findLastIndex 从尾部查找；ES2024 Object.groupBy / Map.groupBy 一行分组。',
        'Promise.withResolvers() 替代"手写 let resolve/reject 提到外面"的丑陋模式。',
        'Array.fromAsync 异步迭代器转数组（await for...of 的打包器）。',
        '正则 v 标志（集合操作与字符类差集）与更清晰的 Unicode 处理；set 记号如 [[a-z]--aeiou]。'
      ],
      code: 'const arr = [3, 1, 2];\nconst sorted = arr.toSorted();      // 新数组，arr 不变\narr.with(0, 99);                    // [99,1,2]\n\nconst groups = Object.groupBy(users, u => u.city);\n\nconst { promise, resolve, reject } = Promise.withResolvers<string>();\nsetTimeout(() => resolve(\'done\'), 100);\n\nconst pages = await Array.fromAsync(cursor); // 异步迭代收集',
      analogy: 'toSorted/with 之于 sort/splice，正如 immer 返回新 state 之于 mutate：语义是"不可变更新"，写起来却不用展开嵌套。'
    },
    links: [
      { name: 'MDN · Array.prototype.toSorted', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted' },
      { name: 'MDN · Promise.withResolvers', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers' },
      { name: 'MDN · Array.fromAsync', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync' }
    ]
  },
  {
    d: 24, tag: '语言深度', t: '异步迭代器与 for await...of：流式处理', xp: 160,
    desc: 'Symbol.asyncIterator、异步生成器、ReadableStream 的消费模式，处理分页与 SSE 的正确姿势。',
    lesson: {
      points: [
        '异步迭代器：next() 返回 Promise<{ value, done }>；for await...of 逐个等待——分页拉取的标准写法。',
        '异步生成器 function* + async：yield 可以等待，把"多页请求"抽象成单个可迭代序列。',
        'fetch 的 response.body 是 ReadableStream，for await...of 直接消费 chunk，SSE/大文件/LLM 流式输出的基础。',
        '区别于 Promise.all：异步迭代是"背压友好"的逐项处理，内存占用恒定。',
        'TypeScript 3.6+ 对异步生成器有完整类型推断；target 需 ES2018+。'
      ],
      code: 'async function* paginate<T>(first: string): AsyncGenerator<T[]> {\n  let url = first;\n  while (url) {\n    const res = await fetch(url);\n    const data = await res.json();\n    yield data.items;\n    url = data.next;\n  }\n}\nfor await (const page of paginate(\'/api/list\')) {\n  render(page);   // 每页到达即处理，背压友好\n}\n\n// 流式读取响应体\nfor await (const chunk of (await fetch(url)).body!) {\n  decode(chunk);\n}',
      analogy: 'for await...of 之于 Promise.all，正如流式 LLM 输出之于"等全部生成"：一个是边到边处理（低延迟、恒定内存），一个是全量到手。'
    },
    links: [
      { name: 'MDN · for await...of', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of' },
      { name: 'MDN · 异步迭代器与生成器', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators' }
    ]
  },
  {
    d: 25, tag: 'TS 协同', t: 'JS 与 TS 的边界：类型体操之外的真实约束', xp: 140,
    desc: 'TS 类型在运行时不存在：类型收窄的真假、as 的边界、enum 的运行时代价、satisfies 与 zod 的互补。',
    lesson: {
      points: [
        'TS 编译后类型全部消失：运行时安全靠"值检查"，as 断言只是骗编译器，不产生任何运行时保护。',
        '真值收窄的坑：if (arr.length) 之类把 0/\'\' 当 false；用显式比较代替隐式布尔。',
        'enum 编译成对象（有运行时成本与怪癖），多数场景 const 对象 + as const 或 union type 更好。',
        'satisfies 让你"检查但不放宽"字面量类型；外部数据（API 响应）应配 zod/valibot 做运行时校验。',
        'unique symbol、 branded types 可以在纯 TS 层面模拟"运行时不可混淆"的约束。'
      ],
      code: 'type Role = \'admin\' | \'user\';\nconst ROLES = { admin: \'admin\', user: \'user\' } as const satisfies Record<string, Role>;\n\n// 外部数据必须运行时校验\nimport { z } from \'zod\';\nconst User = z.object({ id: z.number(), name: z.string() });\nconst user = User.parse(await res.json()); // 编译期 + 运行时双保险\n\n// branded type\ntype UserId = number & { __brand: \'UserId\' };',
      analogy: 'TS 类型像 React 的 propTypes 思想的编译期版：只在"编译时"骂你。真正来自网络的脏数据要 zod 这种"运行时 Error Boundary"。'
    },
    links: [
      { name: 'TypeScript 官方文档', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
      { name: 'Zod 文档', url: 'https://zod.dev/' }
    ]
  },
  {
    d: 26, tag: 'TS 协同', t: '工程化实战：ESLint 规则、死代码与打包体积', xp: 150,
    desc: '用工具守护 JS 质量：no-floating-promises、knip 死代码、source map、bundle 分析。',
    lesson: {
      points: [
        'TS-ESLint 的 no-floating-promises 能抓住"忘记 await 的异步调用"——团队必开。',
        'knip / depcheck 找未使用导出与依赖；combined with tree-shaking 才是真实体积。',
        'bundle 分析用 source-map-explorer / rollup-plugin-visualizer；体积异常常见元凶：重复依赖、误 import 整包（lodash → lodash-es 按需）。',
        'sideEffects: false 声明让打包器放心摇树；动态 import() 做路由级代码分割。',
        'source map 策略：生产隐藏但上传到 Sentry，出错能映射回源码。'
      ],
      code: '// 代码分割\nconst Editor = lazy(() => import(\'./heavy-editor\')); // 路由级分割\n\n// 按需引入\nimport { debounce } from \'lodash-es\';   // ✅ 可摇树\n// import _ from \'lodash\';              // ❌ 常把全包打进来\n\n// package.json\n// { "sideEffects": false }\n\nnew PerformanceObserver(() => {}).observe({ entryTypes: [\'resource\'] });',
      analogy: 'tree-shaking 依赖静态 ESM 就像 React Server Components 依赖静态可分析的组件边界：工具只能优化它能"看懂"的代码。'
    },
    links: [
      { name: 'typescript-eslint 规则', url: 'https://typescript-eslint.io/rules/' },
      { name: 'web.dev · 优化 JS 体积', url: 'https://web.dev/articles/optimize-javascript' }
    ]
  },
  {
    d: 27, tag: '并发与前沿', t: 'Web Worker 与 SharedArrayBuffer：真正的并行', xp: 170,
    desc: '单线程的逃生口：Worker 通信模型、Transferable 对象、SharedArrayBuffer 与 Atomics。',
    lesson: {
      points: [
        'Web Worker = 真正的独立线程 + 独立全局；不能碰 DOM；与主线程靠消息传递（结构化克隆，深拷贝成本）。',
        '大数据量传引用用 Transferable（ArrayBuffer 转移所有权，零拷贝但原线程失去访问）。',
        'SharedArrayBuffer + Atomics 实现真共享内存与跨线程同步（需 COOP/COEP 安全头）。',
        '适用场景：大 JSON 解析、图像处理、加密、diff 计算——凡 >50ms 的 CPU 密集任务都值得考虑移出主线程。',
        'Comlink 库把 Worker 包装成 RPC（proxy 化的消息通信），体验接近本地调用。'
      ],
      code: 'const worker = new Worker(new URL(\'./calc.worker.ts\', import.meta.url));\nworker.postMessage({ type: \'parse\', buf }, [buf]); // 转移所有权，零拷贝\nworker.onmessage = e => console.log(e.data);\n\n// worker 内\nself.onmessage = e => {\n  if (e.data.type === \'parse\') self.postMessage(parse(e.data.buf));\n};',
      analogy: 'Worker 通信像 Redux 单向数据流：状态不共享（消息传副本），主线程 dispatch、worker 返回结果——比加锁简单得多，这也是 JS 并发模型的哲学。'
    },
    links: [
      { name: 'MDN · Web Workers API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API' },
      { name: 'Comlink', url: 'https://github.com/GoogleChromeLabs/comlink' }
    ]
  },
  {
    d: 28, tag: '并发与前沿', t: 'WebAssembly 与 JS 的边界', xp: 150,
    desc: 'WASM 是什么、何时值得用、JS↔WASM 数据交换的成本模型，以及"不要为 5% 的场景过度设计"。',
    lesson: {
      points: [
        'WASM 是字节码目标：C/Rust/Go 编译到 wasm，在浏览器以接近原生速度跑；JS 负责胶水与 DOM（wasm 不直接访问 DOM）。',
        '成本模型：JS↔WASM 边界传数据要拷贝/序列化——频繁小调用会把性能优势吃光，适合"大输入、长计算"的任务。',
        '典型收益场景：图像/视频处理、密码学、游戏物理、esbuild/sql.js/ffmpeg.wasm 这类工具型移植。',
        '与 Worker 常配合：wasm 放 worker 里算，主线程保持丝滑。',
        '判断标准：先用 JS 做，Profiler 证明热点在纯计算且量级大，再考虑 wasm。'
      ],
      code: 'const wasm = await WebAssembly.instantiateStreaming(\n  fetch(\'/math.wasm\'),\n);\nconst { sum_range } = wasm.instance.exports;\n// 大计算一次调用，避免高频小调用穿越边界\nconst total = sum_range(0, 10_000_000) as number;\nconsole.log(total);',
      analogy: 'JS↔WASM 边界像客户端与服务端 API：每次调用都有序列化成本，所以"一次传大包"胜过"一万次传小包"——批处理思维。'
    },
    links: [
      { name: 'MDN · WebAssembly', url: 'https://developer.mozilla.org/zh-CN/docs/WebAssembly' },
      { name: 'V8 · WebAssembly 博客', url: 'https://v8.dev/blog' }
    ]
  },
  {
    d: 29, tag: '综合', t: '设计模式在 JS 中的地道写法', xp: 160,
    desc: '单例、观察者、发布订阅、策略、代理在 JS 的自然形态——很多语言模式在 JS 里是"语言特性"。',
    lesson: {
      points: [
        '模块单例：ESM 模块本身天然单例（缓存实例化），不要再手写 getInstance。',
        '观察者 = EventTarget/onChanges；发布订阅 = 自写 emitter（on/off/emit），Node EventEmitter 是参考实现。',
        '策略模式 = 对象字面量 + 键查找，替代长 if/switch（map 而不是 switch）。',
        '代理模式 = Proxy；装饰器 = 高阶函数包装（React HOC 的祖师爷）。',
        '节流/防抖是"行为模式"的经典：闭包存状态 + 定时器调度。'
      ],
      code: 'const strategies: Record<string, (x: number) => number> = {\n  double: x => x * 2,\n  square: x => x ** 2,\n};\nconst apply = (name: string, x: number) => strategies[name]?.(x) ?? x; // 策略表\n\nclass Emitter {\n  private map = new Map<string, Set<Fn>>();\n  on(ev: string, fn: Fn) { (this.map.get(ev) ?? this.map.set(ev, new Set()).get(ev)!).add(fn); return () => this.off(ev, fn); }\n  emit(ev: string, ...args: unknown[]) { this.map.get(ev)?.forEach(f => f(...args)); }\n  off(ev: string, fn: Fn) { this.map.get(ev)?.delete(fn); }\n}',
      analogy: '很多 GoF 模式在 JS 里退化为"语言特性"：单例 = 模块缓存，策略 = 对象字面量，观察者 = onX 事件——先看语言给什么，再决定要不要"设计"。'
    },
    links: [
      { name: 'MDN · EventTarget', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget' },
      { name: 'Node.js · EventEmitter', url: 'https://nodejs.org/api/events.html' }
    ]
  },
  {
    d: 30, tag: '综合', t: '终极试炼：手写核心库 + 知识体系收束', xp: 300,
    desc: '综合 30 天所学：手写 Promise.all 限流版、深拷贝、事件总线、简易响应式，并把知识点织成体系图。',
    lesson: {
      points: [
        '手写 Promise.all：计数器 + 索引保序 + 第一个 reject 立即 reject——同时考察闭包、异步、错误处理。',
        '手写深拷贝：递归 + WeakMap 处理循环引用 + 类型分派（Date/RegExp/Map/Set）——考察引用模型与集合。',
        '手写简易响应式：Proxy + 依赖桶（Map<target, Map<key, Set<effect>>>）+ 微任务批处理——Vue3 的最小核心。',
        '知识体系收束：执行模型（栈/堆/GC）→ 调度（事件循环）→ 语言机制（原型/闭包/代理）→ 工程化（模块/打包/工具）。',
        '持续学习地图：tc39 提案列表、V8 博客、web.dev——语言在演进，模型不变。'
      ],
      code: 'function promiseAll<T>(ps: Promise<T>[]): Promise<T[]> {\n  return new Promise((resolve, reject) => {\n    const out: T[] = [];\n    let done = 0;\n    ps.forEach((p, i) => {\n      Promise.resolve(p).then(v => {\n        out[i] = v;                       // 索引保序\n        if (++done === ps.length) resolve(out);\n      }, reject);                          // 任一失败即失败\n    });\n  });\n}\n\nfunction deepClone<T>(obj: T, seen = new WeakMap<object, unknown>()): T {\n  if (obj === null || typeof obj !== \'object\') return obj;\n  if (seen.has(obj as object)) return seen.get(obj as object) as T; // 循环引用\n  const copy: any = Array.isArray(obj) ? [] : {};\n  seen.set(obj as object, copy);\n  for (const [k, v] of Object.entries(obj)) copy[k] = deepClone(v, seen);\n  return copy;\n}',
      analogy: '30 天的地图就像 React 的分层：语言机制是 fiber 架构，事件循环是调度器，闭包是 hooks 的灵魂——理解了底层，框架的新花样只是不同形态。'
    },
    links: [
      { name: 'TC39 提案看板', url: 'https://github.com/tc39/proposals' },
      { name: 'MDN · JavaScript 教程总览', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' },
      { name: '现代 JavaScript 教程', url: 'https://zh.javascript.info/' }
    ]
  },
];

// ---------------- 练习：覆盖 Day 1 ~ 10 ----------------

export const EXERCISES: Record<number, Exercise> = {
  1: {
    prompt: '预测下面代码输出，并用 TDZ 解释原因：\nconsole.log(a); var a = 1; console.log(b); let b = 2;',
    starter: '// 在这里写下你的预测与解释\n',
    answer: 'var a 提升并初始化为 undefined，第一行输出 undefined；let b 提升但不初始化，处于暂时性死区，第二行抛 ReferenceError。完整输出：undefined，然后抛错。',
    expected: 'undefined / ReferenceError'
  },
  2: {
    prompt: '实现一个 polyfill：Object.is2(a, b)，行为与 Object.is 一致（NaN 为 true、±0 为 false），不使用 Object.is。',
    starter: 'function is2(a: unknown, b: unknown): boolean {\n  // TODO\n}\n',
    answer: 'function is2(a: unknown, b: unknown): boolean {\n  if (a === b) return a !== 0 || 1 / a === 1 / b; // 区分 +0/-0\n  return a !== a && b !== b; // NaN 情形\n}',
    expected: 'is2(NaN, NaN) === true；is2(0, -0) === false；is2(1, 1) === true'
  },
  3: {
    prompt: '不用 class，用 Object.create + 工厂函数实现 Dog 继承 Animal（speak 方法在原型上，只创建一次）。',
    starter: 'const animalProto = { speak() { return `${this.name} 发声`; } };\nfunction createAnimal(name: string) { /* TODO */ }\nfunction createDog(name: string) { /* TODO：继承并添加 breed */ }\n',
    answer: 'const animalProto = { speak() { return `${this.name} 发声`; } };\nfunction createAnimal(name: string) {\n  return Object.create(animalProto, { name: { value: name, writable: true } });\n}\nconst dogProto = Object.create(animalProto);\nfunction createDog(name: string, breed: string) {\n  const d = Object.create(dogProto);\n  d.name = name; d.breed = breed;\n  return d;\n}',
    expected: 'createDog(\'旺财\', \'柴犬\') 可调用 speak()，且原型链为 dog → dogProto → animalProto'
  },
  4: {
    prompt: '实现 objectCreate(obj)：模拟 new 的四步行为（创建对象、接原型、绑定 this 调用、按返回类型决定返回值）。',
    starter: 'function objectCreate<T>(ctor: new (...args: any[]) => T, ...args: any[]): T {\n  // TODO\n}\n',
    answer: 'function objectCreate<T>(ctor: new (...args: any[]) => T, ...args: any[]): T {\n  const obj = Object.create(ctor.prototype);\n  const ret = ctor.apply(obj, args);\n  return (ret !== null && (typeof ret === \'object\' || typeof ret === \'function\')) ? ret : obj;\n}',
    expected: 'objectCreate(Dog, \'旺财\') instanceof Dog === true'
  },
  5: {
    prompt: '实现 once(fn)：返回的函数只有第一次调用执行 fn，之后调用返回首次结果（用闭包，不修改 fn）。',
    starter: 'function once<T extends (...args: any[]) => any>(fn: T): T {\n  // TODO\n}\n',
    answer: 'function once<T extends (...args: any[]) => any>(fn: T): T {\n  let called = false, result: unknown;\n  return function (this: unknown, ...args: any[]) {\n    if (!called) { called = true; result = fn.apply(this, args); }\n    return result;\n  } as T;\n}',
    expected: '重复调用只执行一次底层函数，返回首次结果'
  },
  6: {
    prompt: '写一个 willOverflow(n)：判断给定递归深度是否可能溢出调用栈，并给出一个"每次调用至少占 1 栈帧"的估算模型。',
    starter: 'function willOverflow(depth: number): boolean {\n  // TODO：用一个探测函数实测最大安全深度\n}\n',
    answer: 'function probe(): number {\n  let depth = 0;\n  try { (function rec() { depth++; rec(); })(); } catch { /* 溢出即停 */ }\n  return depth;\n}\nfunction willOverflow(depth: number): boolean {\n  return depth > probe(); // 典型 V8 栈深约 1 万量级，与参数个数/闭包大小有关\n}',
    expected: '返回布尔值；probe() 在同一环境内结果稳定'
  },
  7: {
    prompt: '以下代码输出顺序是什么？写出你的推导过程（不运行）。\nsetTimeout(()=>console.log(\'A\'));\nPromise.resolve().then(()=>console.log(\'B\'));\nconsole.log(\'C\');\nPromise.resolve().then(()=>setTimeout(()=>console.log(\'D\')));',
    starter: '// 你的推导：\n',
    answer: '同步 C 先输出；微任务队列清空：B（内层把 D 的 setTimeout 注册为宏任务）；然后宏任务：A（先注册）；最后 D。输出：C B A D。',
    expected: 'C B A D'
  },
  8: {
    prompt: '实现 mapSeries(tasks: (() => Promise<T>)[])：按顺序执行（每个完成后再下一个），返回结果数组。',
    starter: 'async function mapSeries<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {\n  // TODO\n}\n',
    answer: 'async function mapSeries<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {\n  const out: T[] = [];\n  for (const task of tasks) out.push(await task());\n  return out;\n}',
    expected: '结果顺序与输入一致；总耗时 ≈ 各任务耗时之和'
  },
  9: {
    prompt: '把回调风格的 readConfig(cb) 改造为返回 Promise 的版本（Promise 构造器手动包装，不使用 promisify 工具）。',
    starter: 'function readConfig(cb: (err: Error | null, data?: string) => void) { /* ... */ }\nfunction readConfigAsync(): Promise<string> {\n  // TODO\n}\n',
    answer: 'function readConfigAsync(): Promise<string> {\n  return new Promise((resolve, reject) => {\n    readConfig((err, data) => err ? reject(err) : resolve(data!));\n  });\n}',
    expected: '成功 resolve(data)，失败 reject(err)'
  },
  10: {
    prompt: '实现 retry<T>(fn: () => Promise<T>, times: number)：失败自动重试至多 times 次，全部失败抛出最后一次错误。',
    starter: 'async function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {\n  // TODO\n}\n',
    answer: 'async function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {\n  let last: unknown;\n  for (let i = 0; i < times; i++) {\n    try { return await fn(); } catch (e) { last = e; }\n  }\n  throw last;\n}',
    expected: 'fn 共被调用至多 times 次；最终成功返回值或抛出最后一次错误'
  },
};

// ---------------- 每日测验（每天 ≥ 2 题）----------------

export const QUIZZES: Record<number, Quiz[]> = {
  1: [
    { q: 'typeof let 声明的变量在 TDZ 内访问会怎样？', options: ['返回 undefined', '返回 null', '抛 ReferenceError', '返回 NaN'], answer: 2, explain: 'let/const 提升但未初始化，TDZ 内访问抛 ReferenceError；var 则返回 undefined。' },
    { q: 'const arr = Object.freeze([1]) 后，以下哪个语句不会抛错？', options: ['arr.push(2)', 'arr[0] = 99', 'arr.length = 5', 'let x = arr[0]'], answer: 3, explain: 'freeze 只让修改操作抛错（严格模式）或静默失败（非严格），读取永远合法。' },
  ],
  2: [
    { q: 'Object.is(NaN, NaN) 的结果？', options: ['false', 'true', 'TypeError', 'undefined'], answer: 1, explain: 'Object.is 用 SameValue 算法，NaN === NaN 为 true；而 === 是 false。' },
    { q: '[1,2] + [3] 的结果？', options: ['[1,2,3]', '3', "\'1,23\'", 'NaN'], answer: 2, explain: '数组 valueOf 返回自身，走 toString：\'1,2\' + \'3\' = \'1,23\'。' },
  ],
  3: [
    { q: 'instanceof 的判定依据是？', options: ['constructor 属性', '右侧函数的 prototype 是否在左侧原型链上', '对象自身的 type 标记', 'Symbol.hasInstance 之外无法判定'], answer: 1, explain: 'instanceof 沿左侧原型链查找右侧的 prototype（Symbol.hasInstance 可自定义行为，但默认即此）。' },
    { q: 'class 声明会像函数声明一样整体提升吗？', options: ['会', '不会，进入 TDZ', '会但初始化为 undefined', '取决于严格模式'], answer: 1, explain: 'class 与 let 同类：提升绑定但不初始化，声明前访问抛 ReferenceError。' },
  ],
  4: [
    { q: 'this 绑定优先级最高的是？', options: ['隐式绑定 obj.fn()', '显式 bind', 'new 调用', '默认调用'], answer: 2, explain: '优先级：new > 显式（call/apply/bind）> 隐式 > 默认。' },
    { q: '箭头函数的 this 由什么决定？', options: ['调用者', 'new 调用', '定义处词法作用域', 'call 的第一个参数'], answer: 2, explain: '箭头函数无自身 this，捕获定义处的词法 this，call/bind 均无法改变。' },
  ],
  5: [
    { q: '闭包捕获的是？', options: ['变量的值快照', '变量的绑定（引用）', '整个全局作用域副本', '仅 const 变量'], answer: 1, explain: '捕获词法环境中的变量绑定本身，外部变化闭包可见——stale closure 误解的根源。' },
    { q: 'for (var i…) + setTimeout 的经典输出 3 3 3，正确的修复不包括？', options: ['改用 let', '用 IIFE 传参', 'setTimeout 第三参传 i', '改用 const'], answer: 3, explain: 'const 不能在循环体重复赋值（每轮声明可以但 `const i` in for-head 是合法的——但此处说法错误的是"改用 const"对 var 变量无效；let/IIFE/额外参数均可）。' },
  ],
  6: [
    { q: 'JS 函数调用发生时，最先发生的是？', options: ['创建微任务', '压入新的执行上下文到调用栈', '触发 GC', '注册宏任务'], answer: 1, explain: '每次调用创建执行上下文压栈，返回时弹栈；异步才涉及任务队列。' },
    { q: 'RangeError: Maximum call stack size exceeded 的常见原因是？', options: ['内存泄漏', '无限递归/无终止条件', 'Promise 未 catch', '事件循环阻塞'], answer: 1, explain: '调用栈深度超限，典型是递归缺少终止条件或栈帧过大。' },
  ],
  7: [
    { q: '微任务队列何时清空？', options: ['每次宏任务后逐个执行', '当前调用栈清空后、渲染前全部清空', '每帧一次', '渲染后'], answer: 1, explain: '同步代码结束 → 全部微任务清空 → 取一个宏任务 →（可能）渲染。' },
    { q: 'requestAnimationFrame 的回调执行时机是？', options: ['微任务阶段', '渲染前、样式计算前', '渲染后', '宏任务之后任意时刻'], answer: 1, explain: 'rAF 在下一帧渲染流程的早期（样式/布局计算前）执行，适合做视觉更新。' },
  ],
  8: [
    { q: 'then 链中 throw 之后，链路状态是？', options: ['链路断裂', '后续 catch 接住并恢复 fulfilled', 'Promise 变为 pending', '进程崩溃'], answer: 1, explain: '错误沿链穿透直到最近的 rejection handler，处理后的链恢复 fulfilled。' },
    { q: '需要"所有请求的结果，包括失败的"应使用？', options: ['Promise.all', 'Promise.race', 'Promise.allSettled', 'Promise.any'], answer: 2, explain: 'allSettled 永不 reject，返回每个的 status/value|reason；all 遇第一个失败即失败。' },
  ],
  9: [
    { q: '两个独立请求应如何并发？', options: ['连续两个 await', 'Promise.all([a(), b()])', 'for await 循环', '两个 try/catch'], answer: 1, explain: '连续 await 是串行（总耗时相加）；Promise.all 并发（总耗时取最大值）。' },
    { q: 'forEach 中使用 async 回调的实际行为是？', options: ['自动串行等待', 'forEach 会等待全部完成', 'forEach 不等待，外层无法感知完成', '直接报错'], answer: 2, explain: 'forEach 忽略返回的 Promise，异步回调"发后不管"；需要串行用 for...of + await。' },
  ],
  10: [
    { q: 'unhandledrejection 事件的作用是？', options: ['阻止程序崩溃', '捕获未被 catch 的 Promise 拒绝，用于兜底上报', '替代 try/catch', '同步错误的兜底'], answer: 1, explain: '它兜底"没有被任何 handler 处理的 rejection"，用于监控上报而非业务恢复。' },
    { q: '以下哪种 catch 是反模式？', options: ['catch 后按类型分发处理', 'catch 空块吞掉错误', 'catch 包装后重抛', 'catch 上报到监控'], answer: 1, explain: '空 catch 让错误无声消失，是事故溯源的头号敌人。' },
  ],
  11: [
    { q: 'for...of 能遍历普通对象 {} 吗？', options: ['能', '不能，除非实现 Symbol.iterator', '能但输出 undefined', '只在严格模式'], answer: 1, explain: '普通对象默认不可迭代；需要部署 Symbol.iterator 或用 Object.entries 转换。' },
    { q: '生成器函数第一次调用 it.next() 时，函数体执行到哪里？', options: ['整个函数跑完', '执行到第一个 yield 暂停', '什么都不执行', '只执行声明'], answer: 1, explain: 'next() 启动执行至最近的 yield 处暂停并返回其值；初始代码在首次 next 时才执行。' },
  ],
  12: [
    { q: 'Vue3 用 Proxy 替代 defineProperty 的关键收益是？', options: ['性能必然更快', '能拦截新增属性与 delete', '兼容 IE', '减少内存'], answer: 1, explain: 'defineProperty 只能劫持已知属性；Proxy 拦截整个对象操作层面，新增/删除无需特殊 API。' },
    { q: 'Proxy 的 get trap 中访问默认行为应调用？', options: ['Reflect.get(target, key, receiver)', 'target[key] 直接返回', 'Object.get', 'super.get'], answer: 0, explain: 'Reflect 方法与 trap 参数签名对应，且正确处理 receiver，是"放行默认行为"的规范写法。' },
  ],
  13: [
    { q: '[...{ a: 1 }] 的结果？', options: ['[{a:1}]', '[1]', 'TypeError', '[undefined]'], answer: 2, explain: '展开"可迭代"语义，普通对象不可迭代，抛 TypeError；{...obj} 才是对象展开。' },
    { q: '函数默认参数可以引用？', options: ['后面的参数', '前面的参数', '任何参数', '只能字面量'], answer: 1, explain: '默认参数按位置惰性求值，只能引用前面已声明的参数。' },
  ],
  14: [
    { q: '[3,1,10].sort() 的返回？', options: ['[1,3,10]', '[1,10,3]', '[10,3,1]', '原数组'], answer: 1, explain: '默认按字符串 Unicode 序比较：\'10\' < \'3\'，所以 10 排在 3 前。数字必须传比较器。' },
    { q: '以下哪个方法原地修改数组？', options: ['map', 'slice', 'splice', 'concat'], answer: 2, explain: 'splice 原地增删；map/slice/concat 都返回新数组。' },
  ],
  15: [
    { q: 'WeakMap 的键的要求？', options: ['任意值', '必须对象（或未注册 symbol）且为弱引用', '必须字符串', '必须数字'], answer: 1, explain: '键必须是可被 GC 的对象（或 registered symbol），WeakMap 不阻止其回收。' },
    { q: '判断元素是否存在的 O(1) 方案是？', options: ['arr.includes', 'arr.indexOf', 'new Set(arr).has', 'arr.find'], answer: 2, explain: 'Set 哈希查询 O(1)；includes/indexOf/find 都是 O(n) 线性扫描。' },
  ],
  16: [
    { q: 'pipe(...fns)(x) 的执行顺序是？', options: ['从右到左', '从左到右', '并行执行', '由 fns 长度决定'], answer: 1, explain: 'pipe 从左到右依次把上一步输出作为下一步输入；compose 相反。' },
    { q: '柯里化的核心收益是？', options: ['执行更快', '参数复用与函数特化', '减少内存', '自动错误处理'], answer: 1, explain: '柯里化把多参函数变成可逐步供给的函数链，便于生成特化版本。' },
  ],
  17: [
    { q: 'tree-shaking 的前提是？', options: ['使用 ESM 静态 import/export', '使用 CommonJS', '开启严格模式', '代码压缩'], answer: 0, explain: '只有静态可分析的模块结构，打包器才能确定哪些导出未被使用。' },
    { q: 'ESM 循环引用为何能工作？', options: ['加载器自动重排', '导出的是"活绑定"，引用最终值', '循环引用被禁止并报错', '因为延迟求值'], answer: 1, explain: 'ESM 导出绑定而非快照，模块求值完成后访问到的是最终值。' },
  ],
  18: [
    { q: 'preventDefault 与 stopPropagation 的关系是？', options: ['等价', '前者阻止默认行为，后者阻断传播', '前者阻断传播，后者阻止默认行为', '互斥不能同用'], answer: 1, explain: '两者独立：阻止跳转用 preventDefault，阻止冒泡到父级用 stopPropagation。' },
    { q: 'scroll 监听推荐配置？', options: ['{ once: true }', '{ capture: true }', '{ passive: true }', '{ signal }'], answer: 2, explain: 'passive 承诺不调用 preventDefault，浏览器可立即滚动，不再等 JS。' },
  ],
  19: [
    { q: 'JS 判定对象可回收的依据是？', options: ['引用计数为零', '从根出发不可达', '超过存活时间', '手动 delete'], answer: 1, explain: '现代引擎以可达性为准，循环引用只要整体不可达也能回收。' },
    { q: '以下哪项不是常见内存泄漏源？', options: ['未清理的 setInterval', '被闭包持有的 Detached DOM', 'WeakMap 的键对象', '无限增长的 Map 缓存'], answer: 2, explain: 'WeakMap 弱引用不阻止回收，恰恰是防泄漏工具；其余三项都是典型泄漏源。' },
  ],
  20: [
    { q: '60fps 对应的每帧预算约为？', options: ['33ms', '16.7ms', '50ms', '8ms'], answer: 1, explain: '1000ms / 60 ≈ 16.7ms，包含 JS 执行 + 样式 + 布局 + 绘制 + 合成全链路。' },
    { q: '超过多少毫秒的的任务被视为 Long Task？', options: ['16ms', '30ms', '50ms', '100ms'], answer: 2, explain: '规范定义 >50ms 为 Long Task，会显著影响交互响应（INP）。' },
  ],
  21: [
    { q: 'V8 中"形状相同的对象"共享的机制叫？', options: ['内联缓存', 'Hidden Class（Map）', '分代 GC', 'Deopt'], answer: 1, explain: '相同属性添加顺序的对象共享 hidden class，属性访问可走偏移量快速路径。' },
    { q: '以下哪种写法会破坏 hidden class 稳定性？', options: ['统一构造函数初始化字段', '运行时 delete obj.x', 'class 中声明所有字段', '相同顺序赋值'], answer: 1, explain: '动态删除属性会使形状退化；应置 null/undefined 或统一初始化。' },
  ],
  22: [
    { q: '<script type="module"> 的默认加载行为类似？', options: ['async', 'defer', 'blocking', 'preload'], answer: 1, explain: 'module 脚本默认 defer：不阻塞解析，按文档顺序在解析完成后执行。' },
    { q: '动画应优先修改哪些属性以避免重排？', options: ['width/height', 'top/left', 'transform/opacity', 'margin/padding'], answer: 2, explain: 'transform/opacity 只触发合成（Composite），绕过 Layout 与 Paint。' },
  ],
  23: [
    { q: 'arr.toSorted() 与 arr.sort() 的区别是？', options: ['无区别', 'toSorted 返回新数组不改原数组', 'toSorted 更快', 'toSorted 不支持比较器'], answer: 1, explain: 'toSorted/toReversed/toSpliced/with 是 ES2023 的不可变副本方法。' },
    { q: 'Promise.withResolvers() 解决的问题是？', options: ['Promise 竞态', '手动在外部获取 resolve/reject 的样板代码', 'Promise 泄漏', '超时控制'], answer: 1, explain: '一行拿到 { promise, resolve, reject }，替代手写 let 提升变量的旧模式。' },
  ],
  24: [
    { q: 'for await...of 适用于遍历？', options: ['普通对象', '同步数组', '异步可迭代对象', '仅字符串'], answer: 2, explain: '它等待每个 next() 返回的 Promise，遍历 AsyncGenerator/异步迭代器。' },
    { q: 'ReadableStream 的 for await...of 消费优势是？', options: ['更快解码', '背压友好、内存占用恒定', '自动重试', '并发读取'], answer: 1, explain: '逐 chunk 拉取处理，无需把整个响应缓存进内存。' },
  ],
  25: [
    { q: 'TS 的 as 断言在运行时的作用是？', options: ['做类型校验', '无任何作用，纯编译期', '抛出类型错误', '转换数据'], answer: 1, explain: '类型编译后全部消失，as 不产生运行时检查；外部数据需 zod 等运行时校验。' },
    { q: '与 enum 相比更推荐的替代方案？', options: ['namespace', 'const 对象 + as const + union type', 'any', 'class 静态成员'], answer: 1, explain: 'enum 有运行时对象生成与怪癖；as const + union 更轻且兼容 tree-shaking。' },
  ],
  26: [
    { q: 'typescript-eslint 的 no-floating-promises 防止？', options: ['循环依赖', '忘记 await/return 的 Promise 被静默丢弃', 'any 泛滥', '未使用变量'], answer: 1, explain: '悬浮 Promise 的错误不会被任何人接住，这条规则强制显式处理。' },
    { q: '声明 sideEffects: false 的作用是？', options: ['关闭严格模式', '告诉打包器未使用的模块导入可安全移除（提升摇树）', '禁用热更新', '开启 SSR'], answer: 1, explain: '配合 ESM 让 tree-shaking 更激进，防止"为副作用保留"的误判。' },
  ],
  27: [
    { q: 'Web Worker 与主线程共享内存的方式是？', options: ['全局变量', 'SharedArrayBuffer + Atomics', 'postMessage 深拷贝', 'DOM 节点'], answer: 1, explain: 'postMessage 是结构化克隆（拷贝）；真共享内存需 SharedArrayBuffer（且需 COOP/COEP）。' },
    { q: 'Worker 中不能访问的是？', options: ['fetch', 'DOM', 'setTimeout', 'IndexedDB'], answer: 1, explain: 'Worker 无 DOM/window，有自身的 globalThis（DedicatedWorkerGlobalScope），fetch/定时器可用。' },
  ],
  28: [
    { q: 'WASM 模块可以直接访问 DOM 吗？', options: ['可以', '不可以，需 JS 胶水层', '仅 Firefox 可以', '开启 flag 后可以'], answer: 1, explain: 'WASM 只操作线性内存与数值，DOM/Web API 通过 JS 互操作完成。' },
    { q: 'JS↔WASM 调用的性能建议是？', options: ['高频小调用', '减少边界穿越，一次传大数据', '尽量多用 Promise', '所有逻辑迁入 WASM'], answer: 1, explain: '边界有数据拷贝/转换成本，批处理式的大输入长计算才能兑现性能优势。' },
  ],
  29: [
    { q: 'ESM 模块为什么天然是单例？', options: ['引擎加锁', '模块实例被缓存，多次 import 得到同一实例', '因为严格模式', 'globalThis 唯一'], answer: 1, explain: '模块记录只求值一次，后续 import 共享同一命名空间对象。' },
    { q: '用对象字面量替代长 switch 属于哪种模式？', options: ['单例', '策略模式', '观察者', '装饰器'], answer: 1, explain: '键查找表即策略表：新增行为只加键值对，符合开闭原则。' },
  ],
  30: [
    { q: '手写 Promise.all 的关键细节不包括？', options: ['索引保序', '计数器判断完成数', '任一失败立即 reject', '限制并发数'], answer: 3, explain: '标准 all 不限并发；限制并发是 all 的"限流变体"，属于扩展实现。' },
    { q: '手写深拷贝处理循环引用的标准手段是？', options: ['JSON.stringify', 'WeakMap 记录已拷贝对象', '递归深度限制', 'structuredClone 替代'], answer: 1, explain: 'WeakMap 以原对象为键记录副本，遇到已见对象直接返回副本，打破循环。' },
  ],
};

// ---------------- 每日资源 ----------------

export const RESOURCES: Record<number, Resource[]> = {
  1: [
    { name: 'MDN · JavaScript 指南：语法与类型', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types', type: 'docs' },
    { name: '现代 JavaScript 教程 · 闭包/作用域', url: 'https://zh.javascript.info/closure', type: 'tutorial' },
  ],
  2: [
    { name: 'MDN · 相等性比较', url: 'https://developer.mozilla.org/zh-CN/docs/Web/Equality_comparisons_and_sameness', type: 'docs' },
    { name: 'MDN · typeof', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof', type: 'docs' },
  ],
  3: [
    { name: 'MDN · 继承与原型链', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain', type: 'docs' },
    { name: '现代 JavaScript 教程 · 原型继承', url: 'https://zh.javascript.info/prototype-inheritance', type: 'tutorial' },
  ],
  4: [
    { name: 'MDN · this 完整指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this', type: 'docs' },
    { name: '现代 JavaScript 教程 · 对象方法与 this', url: 'https://zh.javascript.info/object-methods', type: 'tutorial' },
  ],
  5: [
    { name: 'MDN · 闭包', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures', type: 'docs' },
    { name: 'MDN · 内存管理', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management', type: 'docs' },
  ],
  6: [
    { name: 'V8 · Stack Trace API', url: 'https://v8.dev/docs/stack-trace-api', type: 'docs' },
    { name: 'MDN · Error 对象', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error', type: 'docs' },
  ],
  7: [
    { name: 'Jake Archibald · Tasks, microtasks, queues and schedules', url: 'https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/', type: 'article' },
    { name: 'JSV9000 事件循环可视化', url: 'https://www.jsv9000.app/', type: 'tool' },
  ],
  8: [
    { name: 'MDN · 使用 Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises', type: 'docs' },
    { name: 'MDN · Promise 组合器一览', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise', type: 'docs' },
  ],
  9: [
    { name: 'MDN · async 与 await', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises', type: 'docs' },
    { name: 'MDN · for...of 与异步', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of', type: 'docs' },
  ],
  10: [
    { name: 'MDN · try...catch', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch', type: 'docs' },
    { name: 'Chrome DevTools · 调试技巧', url: 'https://developer.chrome.com/docs/devtools/javascript', type: 'tool' },
  ],
  11: [
    { name: 'MDN · 迭代协议', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols', type: 'docs' },
    { name: 'MDN · 生成器', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators', type: 'docs' },
  ],
  12: [
    { name: 'MDN · Proxy', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy', type: 'docs' },
    { name: 'Vue 官方 · 深入响应式系统', url: 'https://cn.vuejs.org/guide/extras/reactivity-in-depth.html', type: 'article' },
  ],
  13: [
    { name: 'MDN · 解构赋值', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment', type: 'docs' },
    { name: 'MDN · Spread 语法', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax', type: 'docs' },
  ],
  14: [
    { name: 'MDN · Array 方法总览', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array', type: 'docs' },
    { name: '2ality · Array method cheatsheet', url: 'https://2ality.com/2024/01/array-methods.html', type: 'article' },
  ],
  15: [
    { name: 'MDN · 键控集合（Map/Set/WeakMap）', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections', type: 'docs' },
    { name: 'MDN · WeakRef 与 FinalizationRegistry', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef', type: 'docs' },
  ],
  16: [
    { name: 'Reginald Braithwaite · Functional JS 系列', url: 'https://raganwald.com/', type: 'blog' },
    { name: 'MDN · reduce', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', type: 'docs' },
  ],
  17: [
    { name: 'MDN · JavaScript 模块', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules', type: 'docs' },
    { name: 'Node.js · ESM 官方文档', url: 'https://nodejs.org/api/esm.html', type: 'docs' },
  ],
  18: [
    { name: 'MDN · 事件参考', url: 'https://developer.mozilla.org/zh-CN/docs/Web/Events', type: 'docs' },
    { name: 'web.dev · 高性能滚动（passive）', url: 'https://web.dev/articles/passive-event-listeners', type: 'article' },
  ],
  19: [
    { name: 'Chrome DevTools · 内存问题', url: 'https://developer.chrome.com/docs/devtools/memory-problems', type: 'tool' },
    { name: 'MDN · 内存管理', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management', type: 'docs' },
  ],
  20: [
    { name: 'web.dev · Core Web Vitals', url: 'https://web.dev/articles/vitals', type: 'article' },
    { name: 'MDN · Performance API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Performance', type: 'docs' },
  ],
  21: [
    { name: 'V8 官方博客', url: 'https://v8.dev/blog', type: 'blog' },
    { name: 'V8 · 设计文档', url: 'https://v8.dev/docs', type: 'docs' },
  ],
  22: [
    { name: 'web.dev · 渲染性能', url: 'https://web.dev/articles/rendering-performance', type: 'article' },
    { name: 'MDN · script 的 defer/async', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script', type: 'docs' },
  ],
  23: [
    { name: 'MDN · toSorted', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted', type: 'docs' },
    { name: '2ality · ES2024 新特性', url: 'https://2ality.com/2024/05/ecmascript-2024.html', type: 'article' },
  ],
  24: [
    { name: 'MDN · 异步迭代协议', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols', type: 'docs' },
    { name: 'MDN · Streams API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API', type: 'docs' },
  ],
  25: [
    { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', type: 'docs' },
    { name: 'Zod · 运行时校验', url: 'https://zod.dev/', type: 'library' },
  ],
  26: [
    { name: 'typescript-eslint 规则集', url: 'https://typescript-eslint.io/rules/', type: 'docs' },
    { name: 'web.dev · 优化 JavaScript', url: 'https://web.dev/articles/optimize-javascript', type: 'article' },
  ],
  27: [
    { name: 'MDN · Web Workers API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API', type: 'docs' },
    { name: 'GoogleChromeLabs · Comlink', url: 'https://github.com/GoogleChromeLabs/comlink', type: 'library' },
  ],
  28: [
    { name: 'MDN · WebAssembly', url: 'https://developer.mozilla.org/zh-CN/docs/WebAssembly', type: 'docs' },
    { name: 'webassembly.org 官网', url: 'https://webassembly.org/', type: 'docs' },
  ],
  29: [
    { name: 'Node.js · events 模块', url: 'https://nodejs.org/api/events.html', type: 'docs' },
    { name: 'MDN · EventTarget', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget', type: 'docs' },
  ],
  30: [
    { name: 'TC39 提案进度看板', url: 'https://github.com/tc39/proposals', type: 'repo' },
    { name: '现代 JavaScript 教程（全册）', url: 'https://zh.javascript.info/', type: 'tutorial' },
  ],
};
