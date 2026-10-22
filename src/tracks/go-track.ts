// go-track.ts —— Go 勇者 30 天课程线数据文件
// 受众：会 React/TS 的前端开发者，零基础学 Go
// 纯数据文件，无副作用

export const META = {
  id: 'go',
  name: 'Go 勇者',
  icon: '🐹',
  tagline: '30 天从 TS 前端到 Go 后端：用你熟悉的前端思维啃下 Gopher 之路',
} as const;

export interface Lesson {
  /** 4-5 个知识点 */
  points: string[];
  /** 示例代码（Go） */
  code: string;
  /** 前端类比 */
  analogy: string;
}

export interface Link {
  name: string;
  url: string;
  type: 'doc' | 'video' | 'tool' | 'article' | 'playground';
}

export interface Task {
  d: number;
  tag: string;
  t: string;
  desc: string;
  xp: number;
  lesson: Lesson;
  links: Link[];
}

export const TASKS: Task[] = [
  {
    d: 1,
    tag: '工具链',
    t: '环境搭建与 Hello World',
    desc: '安装 Go、初始化 go.mod，写出第一个 main.go 并用 go run / go build 运行。',
    xp: 30,
    lesson: {
      points: [
        'go.mod 相当于 package.json：记录模块名和依赖版本，go get ≈ npm install。',
        '程序入口固定为 main 包里的 main() 函数，等价于前端的 index.tsx。',
        'go run main.go = 临时编译并执行；go build 产出单个二进制，部署时没有 node_modules。',
        'gofmt / go vet 内置，相当于 ESLint + Prettier 官方开箱即用，且格式化风格全国统一。',
        '多文件同属一个 package，导出标识符首字母大写即可（没有 export 关键字）。',
      ],
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Gopher!")
}`,
      analogy:
        'go.mod ≈ package.json，go.sum ≈ package-lock.json，$GOPATH 时代的 PATH 遗留问题不用管。编译成单二进制 ≈ 你把整个 node 生态打包成一个可执行文件。',
    },
    links: [
      { name: 'Download and install - go.dev', url: 'https://go.dev/doc/install', type: 'doc' },
      { name: 'Go Playground 在线运行', url: 'https://go.dev/play/', type: 'playground' },
      { name: 'Effective Go 入门', url: 'https://go.dev/doc/effective_go', type: 'doc' },
    ],
  },
  {
    d: 2,
    tag: '基础语法',
    t: '变量、常量与基本类型',
    desc: 'var/:=/const、零值系统、iota 枚举，理解 Go 的类型默认零值。',
    xp: 30,
    lesson: {
      points: [
        'a := 1 短声明只能在函数内用，等价于 let a = 1（但类型固定不可再赋别的类型）。',
        'Go 没有未初始化的 undefined：int 零值是 0，string 是 ""，bool 是 false，指针是 nil。',
        '声明未使用的局部变量和未使用的 import 都会编译报错——编译器强制你写干净代码。',
        'const 一组常量配合 iota 可以做枚举，类似 TS 的 enum 但底层只是常量。',
        'float 统一推荐 float64；整型和 JS 不同没有 Number 的双精度模糊问题。',
      ],
      code: `package main

import "fmt"

type Role int

const (
    Admin Role = iota // 0
    Editor            // 1
    Viewer            // 2
)

func main() {
    var count int      // 0
    name := "gopher"   // 短声明
    const version = "1.22"
    fmt.Println(count, name, version, Editor)
}`,
      analogy:
        ':= 像 let + 类型推断；零值像你给每个 useState 都写了默认值；iota 枚举 ≈ TS 的 const enum，但没有运行时对象。',
    },
    links: [
      { name: 'Tour of Go: Basics', url: 'https://go.dev/tour/basics/1', type: 'doc' },
      { name: 'Go by Example: Variables', url: 'https://gobyexample.com/variables', type: 'article' },
    ],
  },
  {
    d: 3,
    tag: '基础语法',
    t: '控制流：if / for / switch',
    desc: 'Go 只有一种 for 循环；if 和 switch 可以带初始化语句。',
    xp: 30,
    lesson: {
      points: [
        '没有 while，for i := 0; i < n; i++ / for cond / for {} 三种形态全覆盖。',
        '遍历用 for i, v := range xs，同时拿到下标和值，像 Array.prototype.forEach 但能 break/continue。',
        'if err != nil { ... } 是 Go 最高频的模式，先写好这个肌肉记忆。',
        'if v := f(); v > 0 { } —— 条件前可带一条初始化语句，作用域限定在 if 块内。',
        'switch 默认每 case 自动 break，要穿透写 fallthrough；case 可以是表达式甚至无 switch 变量（switch { case x > 0: ... }）。',
      ],
      code: `package main

import "fmt"

func main() {
    xs := []string{"a", "b", "c"}
    for i, v := range xs {
        fmt.Println(i, v)
    }

    if n := len(xs); n > 2 {
        fmt.Println("够长了:", n)
    }

    switch {
    case n > 5:
        fmt.Println("很多")
    default:
        fmt.Println("一般")
    }
}`,
      analogy:
        'for...range ≈ for...of + entries() 合体；if 带初始化像把 const 临时变量放进 JSX 的 IIFE 里用完即弃。',
    },
    links: [
      { name: 'Go by Example: For', url: 'https://gobyexample.com/for', type: 'article' },
      { name: 'Go by Example: Switch', url: 'https://gobyexample.com/switch', type: 'article' },
    ],
  },
  {
    d: 4,
    tag: '静态类型',
    t: '类型系统与复合类型',
    desc: '强静态类型、数组与切片的区别、map 基本用法、类型别名 vs 定义类型。',
    xp: 35,
    lesson: {
      points: [
        'Go 是结构性弱一点的 nominal typing：type Meters float64 定义了新类型，不会自动和 float64 混用。',
        '数组 [3]int 长度是类型的一部分，实际极少用；日常用切片 []int（类似动态数组）。',
        'map[string]int 声明后必须 make 初始化才能写（nil map 只读不崩）。',
        '不存在隐式类型转换：int + float64 编译报错，必须显式 float64(i)。',
        '泛型（Go 1.18+）：func Map[T, U any](xs []T, f func(T) U) []U，类似 TS 的泛型函数。',
      ],
      code: `package main

import "fmt"

func main() {
    var m map[string]int = make(map[string]int)
    m["views"] = 42

    scores := []int{90, 85, 70}
    total := 0
    for _, s := range scores {
        total += s
    }
    fmt.Println(m["views"], total/len(scores))
}`,
      analogy:
        'map ≈ Record<string, number> 的运行时真身；切片 ≈ Array，数组 ≈ 元组 tuple（固定长度还参与类型）。泛型约束 any ≈ unknown 的宽松版。',
    },
    links: [
      { name: 'Go by Example: Slices', url: 'https://gobyexample.com/slices', type: 'article' },
      { name: 'Go by Example: Maps', url: 'https://gobyexample.com/maps', type: 'article' },
      { name: 'Go 泛型教程', url: 'https://go.dev/blog/intro-generics', type: 'article' },
    ],
  },
  {
    d: 5,
    tag: '静态类型',
    t: '指针、值语义与引用语义',
    desc: 'Go 有指针但没有指针运算；理解方法该用值接收者还是指针接收者的前置知识。',
    xp: 35,
    lesson: {
      points: [
        '&x 取地址，*p 解引用；没有 -> 也没有指针算术，比 C 安全得多。',
        'Go 函数传参全部是值拷贝：传结构体会复制整个结构体，和 JS 传引用完全不同！',
        '想让函数修改外部数据就传指针 *T，类似你在 React 里 setState 替换而不是 mutate。',
        'slice/map/channel 底层是含指针的结构，传值拷贝但仍共享底层数据——表现得像 JS 引用。',
        'new(T) 返回 *T 零值指针，&T{} 更常用。',
      ],
      code: `package main

import "fmt"

func bump(p *int) {
    *p++
}

func main() {
    n := 1
    bump(&n)
    fmt.Println(n) // 2

    s := []int{1, 2}
    m := map[string]int{"a": 1}
    mutate(s, m)   // 共享底层，会被改
    fmt.Println(s, m)
}

func mutate(s []int, m map[string]int) {
    s[0] = 99
    m["b"] = 2
}`,
      analogy:
        '基本类型传值 ≈ JS 的 number/string 拷贝；slice/map 共享底层 ≈ JS 对象数组传引用。指针 ≈ 拿到 MutableRef 而不是快照。',
    },
    links: [
      { name: 'Go by Example: Pointers', url: 'https://gobyexample.com/pointers', type: 'article' },
      { name: 'Tour of Go: Pointers', url: 'https://go.dev/tour/moretypes/1', type: 'doc' },
    ],
  },
  {
    d: 6,
    tag: '函数',
    t: '函数与多返回值',
    desc: '多返回值、命名返回值、可变参数、函数是一等公民。',
    xp: 35,
    lesson: {
      points: [
        'func div(a, b int) (int, error) —— 结果+错误双返回是 Go 的核心惯用法，没有异常语法。',
        '命名返回值 (sum, avg int) 相当于提前声明变量，直接 return 会返回当前值（文档化用途，别滥用）。',
        'defer 注册的调用在函数返回前执行（LIFO），最常用于解锁/关文件，像 finally 但更灵活。',
        '参数可变 func sum(nums ...int) int，内部 nums 是切片，对应 TS 的 rest 参数。',
        '函数是值，可以存变量、传参、当返回值；闭包行为和你熟悉的一样。',
      ],
      code: `package main

import (
    "errors"
    "fmt"
)

func div(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("除数不能为 0")
    }
    return a / b, nil
}

func main() {
    defer fmt.Println("最后执行（defer）")
    q, err := div(10, 2)
    if err != nil {
        fmt.Println("出错了:", err)
        return
    }
    fmt.Println(q)
}`,
      analogy:
        '多返回值 ≈ 返回 { value, error } 对象但解构免写；defer ≈ useEffect 的 cleanup，作用域是函数而不是组件；...int ≈ (...nums: number[])。',
    },
    links: [
      { name: 'Go by Example: Multiple Return Values', url: 'https://gobyexample.com/multiple-return-values', type: 'article' },
      { name: 'Go by Example: Defer', url: 'https://gobyexample.com/defer', type: 'article' },
    ],
  },
  {
    d: 7,
    tag: '切片',
    t: '切片进阶：append、扩容与共享底层数组',
    desc: 'len/cap、append 返回新切片、copy、切片表达式引发的经典 bug。',
    xp: 40,
    lesson: {
      points: [
        '切片 = {指针, len, cap} 三元组；cap 是底层数组容量，append 超过 cap 会换新数组。',
        'append 可能返回新切片，必须 s = append(s, x) 接住返回值，不能忽略。',
        'xs[1:3] 共享底层数组！对子切片写会影响原切片——前端里 Array.prototype.slice 会拷贝，这里不会。',
        '要独立拷贝用 copy(dst, src) 或 append([]T(nil), src...)。',
        'make([]int, 0, 100) 预分配容量，避免反复扩容——热路径优化常识。',
      ],
      code: `package main

import "fmt"

func main() {
    s := make([]int, 0, 4)
    s = append(s, 1, 2, 3)
    fmt.Println(len(s), cap(s))

    sub := s[0:2]      // 共享底层数组
    sub[0] = 99
    fmt.Println(s[0])  // 99 被影响了！

    cp := append([]int(nil), s...) // 深拷贝一层
    cp[0] = 0
    fmt.Println(s[0])  // 仍是 99
}`,
      analogy:
        'slice ≈ 一个带 length/capacity 的 TypedArray 视图；s[0:2] 更像 Buffer.subarray（共享内存）而不是 slice()（拷贝）。',
    },
    links: [
      { name: 'Go Slices: usage and internals', url: 'https://go.dev/blog/slices-intro', type: 'article' },
      { name: 'Go by Example: Range', url: 'https://gobyexample.com/range', type: 'article' },
    ],
  },
  {
    d: 8,
    tag: '映射',
    t: 'map 深入：遍历顺序、存在性检查与删除',
    desc: 'comma-ok 惯用法、map 不是并发安全、set 的模拟。',
    xp: 40,
    lesson: {
      points: [
        'v, ok := m[key] —— ok 表示 key 是否存在，零值歧义全靠它解决。',
        'map 遍历顺序是随机化的（故意的，防止依赖顺序），要有序就先收集 key 再 sort。',
        'map 本身无并发保护，多 goroutine 读写会直接 panic；并发场景用 sync.Map 或加锁。',
        'delete(m, key) 删除；把值设为零值 ≠ 删除。',
        '模拟 Set：map[string]struct{}（struct{} 零字节），惯用法。',
      ],
      code: `package main

import "fmt"

func main() {
    tags := map[string]struct{}{"react": {}, "go": {}}

    if _, ok := tags["go"]; ok {
        fmt.Println("有 go 标签")
    }
    delete(tags, "react")

    keys := make([]string, 0, len(tags))
    for k := range tags {
        keys = append(keys, k)
    }
    fmt.Println(keys)
}`,
      analogy:
        'comma-ok ≈ TS 里区分 undefined 和不存在的 key（in 操作符）；map[string]struct{} ≈ new Set()；range map 乱序 ≈ Object.keys 在 Go 被官方洗牌。',
    },
    links: [
      { name: 'Go by Example: Maps（含 comma-ok）', url: 'https://gobyexample.com/maps', type: 'article' },
      { name: 'Go maps in action', url: 'https://go.dev/blog/maps', type: 'article' },
    ],
  },
  {
    d: 9,
    tag: '结构体',
    t: '结构体：Go 的“对象”',
    desc: '定义、字面量、嵌入（组合优于继承）、JSON tag。',
    xp: 40,
    lesson: {
      points: [
        'struct 是字段的集合，没有 class；行为挂在方法上（明天讲）。',
        '字面量必须带字段名 User{Name: "a"}，不写字段名的是"位置初始化"，lint 会骂。',
        '嵌入 type Base struct{} 后 User{Base} 直接"继承"字段和方法——这是组合，没有 super 关键字。',
        'json tag `json:"userName"` 控制序列化字段名，类比 TS 的 @Serialize 装饰器或 key 映射。',
        '结构体比较：字段全部可比较才可用 ==；含 slice/map 的结构体不能 ==。',
      ],
      code: `package main

import (
    "encoding/json"
    "fmt"
)

type Base struct {
    ID        int
    CreatedAt string
}

type Post struct {
    Base
    Title string \`json:"title"\`
    Views int    \`json:"views,omitempty"\`
}

func main() {
    p := Post{Base: Base{ID: 1, CreatedAt: "today"}, Title: "hi"}
    fmt.Println(p.ID) // 直接访问嵌入字段
    b, _ := json.Marshal(p)
    fmt.Println(string(b))
}`,
      analogy:
        'struct ≈ interface + 实现合一的 TS 类型；嵌入 ≈ mixin 组合而非 extends；json tag ≈ zod schema 的字段映射/omit。',
    },
    links: [
      { name: 'Go by Example: Structs', url: 'https://gobyexample.com/structs', type: 'article' },
      { name: 'Go by Example: JSON', url: 'https://gobyexample.com/json', type: 'article' },
    ],
  },
  {
    d: 10,
    tag: '方法',
    t: '方法与接收者',
    desc: '值接收者 vs 指针接收者、构造函数惯例 NewXxx、方法即语法糖。',
    xp: 40,
    lesson: {
      points: [
        'func (u User) Rename() 是值接收者（拷贝副本），func (u *User) Rename() 是指针接收者（可改原值）。',
        '规则：需要修改接收者、或结构体大、或已有一个指针接收者方法 → 全部用指针接收者，保持一致。',
        'Go 没有 constructor，惯例是 func NewUser(name string) *User 工厂函数。',
        '方法就是语法糖：u.Rename() ≈ Rename(&u)，方法值/方法表达式偶尔有用。',
        '同包内不能对非本地类型定义方法——要扩展别人的类型只能组合或写函数。',
      ],
      code: `package main

import "fmt"

type Counter struct {
    n int
}

func NewCounter() *Counter { return &Counter{} }

func (c *Counter) Inc() { c.n++ }
func (c Counter) Value() int { return c.n }

func main() {
    c := NewCounter()
    c.Inc()
    c.Inc()
    fmt.Println(c.Value()) // 2
}`,
      analogy:
        '值/指针接收者 ≈ useState 快照 vs useRef 持有可变对象；NewXxx ≈ 工厂函数 createXxx()，因为 Go 没有 new 关键字风格。',
    },
    links: [
      { name: 'Go by Example: Methods', url: 'https://gobyexample.com/methods', type: 'article' },
      { name: 'Tour of Go: Methods', url: 'https://go.dev/tour/methods/1', type: 'doc' },
    ],
  },
  {
    d: 11,
    tag: '接口',
    t: '接口：隐式实现的鸭子类型',
    desc: '小接口哲学、io.Reader/Writer、nil 接口陷阱。',
    xp: 45,
    lesson: {
      points: [
        '实现接口不需要 implements 声明——只要方法集匹配就自动满足，TypeScript 的结构化类型的运行时版。',
        '接口越小越好：io.Reader 只有 Read 一个方法；std 接口大量组合（io.ReadWriteCloser）。',
        'fmt.Stringer 接口（String() string）≈ JS 的 toString / Symbol.toStringTag。',
        '经典陷阱：接口变量 == nil 需要类型和值都为 nil；把 *T(nil) 装进接口后接口不等于 nil。',
        '类型断言 v, ok := i.(T)；switch i.(type) 做类型分支，类似 ts 的 narrow 但发生在运行时。',
      ],
      code: `package main

import (
    "fmt"
    "strings"
)

type Greeter interface {
    Greet() string
}

type Dev struct{ Name string }

func (d Dev) Greet() string { return "hi " + d.Name }

func say(g Greeter) { fmt.Println(g.Greet()) }

func main() {
    say(Dev{Name: "gopher"})
    // strings.Reader 也满足 io.Reader —— 隐式实现
    var r = strings.NewReader("abc")
    buf := make([]byte, 2)
    n, _ := r.Read(buf)
    fmt.Println(n, string(buf))
}`,
      analogy:
        '隐式接口 ≈ TS structural typing 直接落地到运行时，不用写 implements；io.Reader ≈ 一个只有 read() 方法的最小接口契约，整个标准库围绕它组合。',
    },
    links: [
      { name: 'Go by Example: Interfaces', url: 'https://gobyexample.com/interfaces', type: 'article' },
      { name: 'The Laws of Reflection（接口底层）', url: 'https://go.dev/blog/laws-of-reflection', type: 'article' },
    ],
  },
  {
    d: 12,
    tag: '接口',
    t: '组合与依赖注入',
    desc: '接口做抽象层、组合接口、mock 测试的思路。',
    xp: 45,
    lesson: {
      points: [
        '接受接口，返回具体类型（Accept interfaces, return structs）——前端里就是组件 props 用 interface。',
        '接口组合：type ReadWriter interface { io.Reader; io.Writer }，像 TS 的交叉类型。',
        '函数里依赖接口而不是具体实现，测试时注入 fake —— 手写 DI，不需要装饰器容器。',
        '空接口 any 能装一切（Go 1.18 后 interface{} 别名 any），等价于 unknown，尽量少用。',
        '标准库大量"先定义接口再组合"：http.Handler、sort.Interface（现在多被 slices 包替代）。',
      ],
      code: `package main

import "fmt"

type Store interface {
    Get(key string) (string, bool)
}

type memStore map[string]string

func (m memStore) Get(k string) (string, bool) {
    v, ok := m[k]
    return v, ok
}

func serve(s Store, key string) {
    if v, ok := s.Get(key); ok {
        fmt.Println("found:", v)
    } else {
        fmt.Println("miss")
    }
}

func main() {
    serve(memStore{"a": "1"}, "a")
    serve(memStore{}, "a") // 测试时的 fake 实现
}`,
      analogy:
        'accept interfaces ≈ React 组件只依赖 props 类型而非实现；DI ≈ 你在测试里 mock fetch 传 fake 客户端，Go 版就是传 fake struct。',
    },
    links: [
      { name: 'Go Code Review: 接口设计建议', url: 'https://go.dev/wiki/CodeReviewComments#interfaces', type: 'doc' },
      { name: 'Go by Example: Struct Embedding', url: 'https://gobyexample.com/struct-embedding', type: 'article' },
    ],
  },
  {
    d: 13,
    tag: '错误处理',
    t: 'error 接口、errors.Is/As 与 wrap',
    desc: 'errors.New/fmt.Errorf、%w 包装、哨兵错误与自定义错误类型。',
    xp: 45,
    lesson: {
      points: [
        'error 是一个只有一个 Error() string 方法的接口，错误就是值，没有 try/catch。',
        'fmt.Errorf("load user %d: %w", id, err) 用 %w 包装错误保留链，类似给 Error 加 cause。',
        'errors.Is(err, ErrNotFound) 判断链上是否有哨兵错误；errors.As 提取自定义错误类型。',
        '哨兵错误：var ErrNotFound = errors.New("not found")，≈ 常量错误码，但可 ==/Is 比较。',
        'panic 只用于程序不可继续的 bug，不要当异常用；recover 只在 defer 里有效。',
      ],
      code: `package main

import (
    "errors"
    "fmt"
)

var ErrNotFound = errors.New("not found")

func findUser(id int) (string, error) {
    if id != 1 {
        return "", fmt.Errorf("query user %d: %w", id, ErrNotFound)
    }
    return "gopher", nil
}

func main() {
    _, err := findUser(2)
    if errors.Is(err, ErrNotFound) {
        fmt.Println("是未找到错误:", err)
    }
}`,
      analogy:
        'error 是值 ≈ 你在 TS 里返回 Result<T, E> 而不是 throw；%w 包装 ≈ new Error(msg, { cause: err })；errors.Is ≈ if (e.code === NOT_FOUND)。',
    },
    links: [
      { name: 'Go Blog: Error handling and Go', url: 'https://go.dev/blog/errors-are-values', type: 'article' },
      { name: 'Go by Example: Errors', url: 'https://gobyexample.com/errors', type: 'article' },
    ],
  },
  {
    d: 14,
    tag: '并发',
    t: 'goroutine 与 WaitGroup',
    desc: 'go 关键字启动协程、sync.WaitGroup 等待、协程泄漏意识。',
    xp: 50,
    lesson: {
      points: [
        'go f() 启动 goroutine，极轻量（KB 级栈），开 10 万个都行——比 Web Worker 便宜几个数量级。',
        'main 返回时所有 goroutine 直接被杀，所以需要 WaitGroup/通道同步。',
        'wg.Add(1) 计数，goroutine 里 defer wg.Done()，wg.Wait() 阻塞到 0。',
        'for 循环变量 Go 1.22 前是复用的，闭包捕获要小心（1.22+ 每次迭代新变量）。',
        '无同步地并发写共享变量 = data race，用 go run -race 检测。',
      ],
      code: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            fmt.Println("worker", n)
        }(i)
    }
    wg.Wait()
    fmt.Println("全部完成")
}`,
      analogy:
        'goroutine ≈ 极廉价的 worker thread；WaitGroup ≈ Promise.all 的手动计数版：Add=创建 promise，Done=resolve，Wait=await all。',
    },
    links: [
      { name: 'Go by Example: Goroutines', url: 'https://gobyexample.com/goroutines', type: 'article' },
      { name: 'Go by Example: WaitGroups', url: 'https://gobyexample.com/waitgroups', type: 'article' },
    ],
  },
  {
    d: 15,
    tag: '并发',
    t: 'channel：goroutine 之间的管道',
    desc: '无缓冲/有缓冲 channel、发送接收、关闭与 range、只读只写方向。',
    xp: 50,
    lesson: {
      points: [
        'ch := make(chan int)：无缓冲=同步交接（发送方阻塞到有人收）；make(chan int, 5) 有缓冲队列。',
        'ch <- v 发送，v := <-ch 接收；向 nil channel 发送/接收永久阻塞，close(ch) 后接收返回零值。',
        'v, ok := <-ch 的 ok=false 表示 channel 已关闭且排空——用它判断结束。',
        'for v := range ch 循环接收直到关闭，像消费一个异步迭代器。',
        '参数方向约束：func produce(ch chan<- int) 只能发，func consume(ch <-chan int) 只能收，编译期防止误用。',
      ],
      code: `package main

import "fmt"

func produce(ch chan<- int) {
    for i := 1; i <= 3; i++ {
        ch <- i
    }
    close(ch)
}

func main() {
    ch := make(chan int)
    go produce(ch)
    for v := range ch { // 消费到 close
        fmt.Println(v)
    }
}`,
      analogy:
        'channel ≈ 一个自带背压的 Stream/Subject：无缓冲像同步 handoff，有缓冲像 buffer(5) 的队列；close+range ≈ async iterator 的 done。',
    },
    links: [
      { name: 'Go by Example: Channels', url: 'https://gobyexample.com/channels', type: 'article' },
      { name: 'Share Memory By Communicating', url: 'https://go.dev/blog/codelab-share', type: 'article' },
    ],
  },
  {
    d: 16,
    tag: '并发',
    t: 'select 与并发模式',
    desc: 'select 多路复用、超时、worker pool、pipeline、扇入扇出。',
    xp: 50,
    lesson: {
      points: [
        'select 同时等待多个 channel，谁就绪走谁；都阻塞时走 default（非阻塞尝试）。',
        '超时模式：select + time.After(2*time.Second)，≈ Promise.race([task, timeout])。',
        'worker pool：固定数量 goroutine 从 jobs channel 取任务写入 results channel。',
        'done channel 或 context 用于通知退出，防止 goroutine 泄漏。',
        'pipeline：生成者 -> 处理 -> 消费者 各自独立 goroutine 用 channel 串联。',
      ],
      code: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    go func() {
        time.Sleep(time.Second)
        ch <- "慢结果"
    }()

    select {
    case v := <-ch:
        fmt.Println(v)
    case <-time.After(2 * time.Second):
        fmt.Println("超时了")
    }
}`,
      analogy:
        'select ≈ Promise.race 的常驻多路版 + case 语法；time.After 超时 ≈ AbortController+race；worker pool ≈ p-limit 并发限流。',
    },
    links: [
      { name: 'Go by Example: Select', url: 'https://gobyexample.com/select', type: 'article' },
      { name: 'Go Concurrency Patterns (Pike)', url: 'https://go.dev/talks/2012/concurrency.slide', type: 'article' },
    ],
  },
  {
    d: 17,
    tag: 'sync',
    t: 'sync 包：Mutex、Once、atomic',
    desc: '共享内存的锁保护、sync.Once 单例、race detector。',
    xp: 50,
    lesson: {
      points: [
        'Go 哲学："不要通过共享内存来通信，而要通过通信来共享内存"——channel 优先，锁兜底。',
        'var mu sync.Mutex；mu.Lock() / defer mu.Unlock() 保护临界区；RWMutex 读多写少时用。',
        'sync.Once.Do(f) 全局只执行一次，≈ 模块级单例初始化。',
        'sync.WaitGroup、sync.Map、atomic.AddInt64 都是并发原语；简单计数用 atomic 更快。',
        'go test -race / go run -race 是查数据 race 的标配工具，CI 里必开。',
      ],
      code: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var (
        mu    sync.Mutex
        count int
        wg    sync.WaitGroup
    )
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mu.Lock()
            count++
            mu.Unlock()
        }()
    }
    wg.Wait()
    fmt.Println(count) // 一定是 100
}`,
      analogy:
        'Mutex ≈ 你给 shared state 加的锁；sync.Once ≈ 单例惰性初始化（库里 getStore() 只建一次）；-race ≈ 给 JS 的 SharedArrayBuffer 开线程检查。',
    },
    links: [
      { name: 'Go by Example: Mutexes', url: 'https://gobyexample.com/mutexes', type: 'article' },
      { name: 'Introducing the Go Race Detector', url: 'https://go.dev/blog/race-detector', type: 'article' },
    ],
  },
  {
    d: 18,
    tag: 'context',
    t: 'context：取消、超时与请求作用域',
    desc: 'Context 传递取消信号、WithTimeout/WithCancel、ctx 作为第一参数。',
    xp: 50,
    lesson: {
      points: [
        'context.Context 永远是函数第一个参数，命名 ctx，贯穿整条调用链。',
        'ctx.Done() 返回一个 channel，取消或超时时关闭——配合 select 使用。',
        'context.WithTimeout(parent, 3*time.Second) ≈ 给下游请求加 AbortSignal.timeout。',
        'ctx.Err() 在取消后返回 context.DeadlineExceeded / Canceled。',
        'WithValue 可以塞请求级数据（trace id），但只建议放元数据不放业务参数。',
      ],
      code: `package main

import (
    "context"
    "fmt"
    "time"
)

func slowWork(ctx context.Context) error {
    select {
    case <-time.After(5 * time.Second):
        return nil
    case <-ctx.Done():
        return ctx.Err()
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), time.Second)
    defer cancel()
    if err := slowWork(ctx); err != nil {
        fmt.Println("中断:", err) // context deadline exceeded
    }
}`,
      analogy:
        'ctx ≈ AbortSignal + 请求作用域 store 合体；WithTimeout ≈ AbortSignal.timeout(3000)；ctx.Done() ≈ signal 的 abort 事件。',
    },
    links: [
      { name: 'Go Blog: Context and structs', url: 'https://go.dev/blog/context', type: 'article' },
      { name: 'Go by Example: Context', url: 'https://gobyexample.com/context', type: 'article' },
    ],
  },
  {
    d: 19,
    tag: '标准库',
    t: 'net/http 服务端：Handler 与中间件',
    desc: 'http.HandlerFunc、ServeMux 路由（1.22 新语法）、中间件即函数组合。',
    xp: 55,
    lesson: {
      points: [
        '任何 func(w http.ResponseWriter, r *http.Request) 都能当 handler——一个接口两个参数。',
        'http.HandleFunc("GET /api/users/{id}", h)：Go 1.22+ 内置方法匹配和路径参数，r.PathValue("id")。',
        '中间件 = func(next http.Handler) http.Handler，返回包了 next 的 Handler，洋葱模型和 Express/Koa 一样。',
        'http.ListenAndServe(":8080", mux) 一行起服务；生产用 http.Server{ReadTimeout: ...} 配置版。',
        'json.NewDecoder(r.Body).Decode(&v) 读请求体，json.NewEncoder(w).Encode(v) 写响应。',
      ],
      code: `package main

import (
    "encoding/json"
    "log"
    "net/http"
)

func logging(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Println(r.Method, r.URL.Path)
        next.ServeHTTP(w, r)
    })
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /api/hello/{name}", func(w http.ResponseWriter, r *http.Request) {
        json.NewEncoder(w).Encode(map[string]string{
            "hi": r.PathValue("name"),
        })
    })
    log.Fatal(http.ListenAndServe(":8080", logging(mux)))
}`,
      analogy:
        'ServeMux ≈ Express 的 app.get("/api/:id")；中间件签名 func(next Handler) Handler ≈ Koa 的 compose 洋葱；Encode/Decode ≈ res.json() / body-parser。',
    },
    links: [
      { name: 'Go by Example: HTTP Servers', url: 'https://gobyexample.com/http-servers', type: 'article' },
      { name: 'Go 1.22 ServeMux 新路由', url: 'https://go.dev/blog/routing-enhancements', type: 'article' },
    ],
  },
  {
    d: 20,
    tag: '标准库',
    t: 'net/http 客户端 + time/strings/strconv',
    desc: 'http.Get 与 http.Client 超时、time 包、常用字符串/数字转换。',
    xp: 55,
    lesson: {
      points: [
        'http.Get 一把梭很方便，但生产必须用自定义 http.Client{Timeout: 5*time.Second}——默认无超时会挂死。',
        '请求带 context：http.NewRequestWithContext(ctx, ...)，取消链路直通传输层。',
        'time.Now()、time.Since(t)、t.Format("2006-01-02")（参考时间记忆法）。',
        'strconv.Atoi / Itoa、strings.Fields/Split/Join/Builder——零碎工具一应俱全。',
        '响应体必须 resp.Body.Close()，惯例 defer；io.ReadAll 读全量。',
      ],
      code: `package main

import (
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Get("https://httpbin.org/get")
    if err != nil {
        fmt.Println("请求失败:", err)
        return
    }
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    fmt.Println(resp.StatusCode, len(b))
}`,
      analogy:
        'http.Client ≈ fetch 封装好的 axios 实例（带 timeout）；defer resp.Body.Close() ≈ AbortController 清理；time.Format 参考时间 2006-01-02 是 Go 著名冷知识。',
    },
    links: [
      { name: 'Go by Example: HTTP Clients', url: 'https://gobyexample.com/http-clients', type: 'article' },
      { name: '标准库文档 net/http', url: 'https://pkg.go.dev/net/http', type: 'doc' },
    ],
  },
  {
    d: 21,
    tag: '小项目',
    t: '实战：待办事项 REST API（上）',
    desc: '综合运用：struct + map 存储 + 路由 + JSON 校验，写出完整 CRUD。',
    xp: 60,
    lesson: {
      points: [
        '项目结构：main.go + store.go + handlers.go，同 package 但职责分离。',
        '接口 TodoStore 抽象存储，先用内存 map 实现，之后可换数据库而 handler 不变。',
        '请求体解码 + 字段校验，错误统一写 http.Error(w, msg, http.StatusBadRequest)。',
        '路径参数 r.PathValue("id") 转 int 后查存储，404/400 分别返回。',
        '记住所有响应写 Content-Type: application/json（用 w.Header().Set）。',
      ],
      code: `package main

import (
    "encoding/json"
    "net/http"
    "sync"
)

type Todo struct {
    ID    int    \`json:"id"\`
    Title string \`json:"title"\`
    Done  bool   \`json:"done"\`
}

type TodoStore struct {
    mu     sync.Mutex
    nextID int
    items  map[int]Todo
}

func NewTodoStore() *TodoStore {
    return &TodoStore{nextID: 1, items: map[int]Todo{}}
}

func (s *TodoStore) Add(t Todo) Todo {
    s.mu.Lock()
    defer s.mu.Unlock()
    t.ID = s.nextID
    s.nextID++
    s.items[t.ID] = t
    return t
}

func (s *TodoStore) Get(id int) (Todo, bool) {
    s.mu.Lock()
    defer s.mu.Unlock()
    t, ok := s.items[id]
    return t, ok
}

func writeJSON(w http.ResponseWriter, v any) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(v)
}

func main() {
    store := NewTodoStore()
    mux := http.NewServeMux()
    mux.HandleFunc("POST /api/todos", func(w http.ResponseWriter, r *http.Request) {
        var t Todo
        if err := json.NewDecoder(r.Body).Decode(&t); err != nil || t.Title == "" {
            http.Error(w, "bad request", http.StatusBadRequest)
            return
        }
        writeJSON(w, store.Add(t))
    })
    http.ListenAndServe(":8080", mux)
}`,
      analogy:
        'TodoStore ≈ 你在 React 练习项目里的内存 mock 数据层；接口抽象 ≈ 以后换 Prisma 时 handler 不动的分层思想。',
    },
    links: [
      { name: 'Learn Go with Tests（HTTP 章节）', url: 'https://quii.gitbook.io/learn-go-with-tests/', type: 'doc' },
      { name: 'pkg.go.dev net/http', url: 'https://pkg.go.dev/net/http', type: 'doc' },
    ],
  },
  {
    d: 22,
    tag: '小项目',
    t: '实战：待办事项 REST API（下）',
    desc: '补全 PUT/DELETE、context 超时、优雅关停（graceful shutdown）。',
    xp: 60,
    lesson: {
      points: [
        '完整 CRUD：GET 列表/详情、POST 创建、PUT 更新、DELETE 删除，路由各自注册。',
        'http.Server{Addr, Handler, ReadTimeout...} 结构化配置 + server.ListenAndServe()。',
        'signal.NotifyContext(ctx, os.Interrupt) 监听 Ctrl+C，触发 server.Shutdown(ctx) 优雅关停。',
        'Shutdown 会等活跃请求处理完，相当于给线上滚动发布一个缓冲期。',
        '整个 main 的骨架：config -> store -> mux -> server -> signal -> shutdown。',
      ],
      code: `package main

import (
    "context"
    "log"
    "net/http"
    "os/signal"
    "syscall"
    "time"
)

func main() {
    store := NewTodoStore()
    mux := http.NewServeMux()
    registerRoutes(mux, store) // Day 21 的 handlers

    srv := &http.Server{
        Addr:    ":8080",
        Handler: mux,
        ReadTimeout: 5 * time.Second,
    }

    ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
    defer stop()

    go func() {
        if err := srv.ListenAndServe(); err != http.ErrServerClosed {
            log.Fatal(err)
        }
    }()

    <-ctx.Done() // 等 Ctrl+C
    shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    srv.Shutdown(shutdownCtx)
    log.Println("已优雅关停")
}`,
      analogy:
        'graceful shutdown ≈ PM2/Docker 的 SIGTERM 处理，让在途请求跑完再退；signal.NotifyContext ≈ process.on("SIGTERM") 的 context 化封装。',
    },
    links: [
      { name: 'Graceful shutdown 示例', url: 'https://pkg.go.dev/net/http#example-Server.Shutdown', type: 'doc' },
      { name: 'Learn Go with Tests: Context', url: 'https://quii.gitbook.io/learn-go-with-tests/context-aware-reader', type: 'doc' },
    ],
  },
  {
    d: 23,
    tag: '测试',
    t: '测试：testing 包与表驱动测试',
    desc: 'go test、t.Run 子测试、表驱动是 Go 测试的灵魂。',
    xp: 55,
    lesson: {
      points: [
        '测试文件以 _test.go 结尾，函数签名 func TestXxx(t *testing.T)。',
        '表驱动测试：定义 []struct{name, input, want} 切片，循环 t.Run(name, ...) —— 一个函数测所有 case。',
        't.Errorf / t.Fatalf 报告失败（Fatalf 立即终止当前子测试）。',
        'go test ./... 跑全部包，-v 详细输出，-race 检测竞争。',
        '测试内使用 t.Helper() 标记辅助函数、t.Cleanup 注册清理，≈ beforeEach/afterEach。',
      ],
      code: `package math

import "testing"

func Add(a, b int) int { return a + b }

func TestAdd(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"正数", 1, 2, 3},
        {"负数", -1, -2, -3},
        {"零", 0, 0, 0},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := Add(tt.a, tt.b); got != tt.want {
                t.Errorf("Add(%d,%d) = %d, want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}`,
      analogy:
        '表驱动 ≈ describe/it 的参数化测试（Jest 的 test.each）；t.Run 子测试 ≈ it 嵌套；_test.go 与源码同包 ≈ 测试文件就在 src 旁边。',
    },
    links: [
      { name: 'Go by Example: Testing', url: 'https://gobyexample.com/testing', type: 'article' },
      { name: 'Learn Go with Tests', url: 'https://quii.gitbook.io/learn-go-with-tests/', type: 'doc' },
    ],
  },
  {
    d: 24,
    tag: '测试',
    t: 'httptest 与基准测试',
    desc: 'httptest.NewServer/Recorder 测 HTTP handler，Benchmark 基准。',
    xp: 55,
    lesson: {
      points: [
        'httptest.NewRecorder() 假装 ResponseWriter，直接调 handler 断言响应，不用真开端口。',
        'httptest.NewServer(h) 起真服务器测 client 逻辑，测完 s.Close()。',
        'BenchmarkXxx(b *testing.B)，go test -bench=. 运行；b.ResetTimer() 排除准备工作。',
        '模糊测试 FuzzXxx（Go 1.18+）自动生成输入找崩溃，前端生态少见的利器。',
        '覆盖率：go test -cover，HTML 报告 go tool cover -html。',
      ],
      code: `package main

import (
    "net/http"
    "net/http/httptest"
    "testing"
)

func TestHello(t *testing.T) {
    req := httptest.NewRequest("GET", "/api/hello/gopher", nil)
    rec := httptest.NewRecorder()

    handler := http.HandlerFunc(helloHandler) // 你的 handler
    handler(rec, req)

    if rec.Code != http.StatusOK {
        t.Fatalf("status = %d", rec.Code)
    }
}

func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        _ = Add(1, 2)
    }
}`,
      analogy:
        'httptest.NewRecorder ≈ supertest 的假 res；NewServer ≈ msw/mock server 起真端口；Benchmark ≈ 你在浏览器里跑 performance.now() 循环测微基准。',
    },
    links: [
      { name: 'pkg.go.dev net/http/httptest', url: 'https://pkg.go.dev/net/http/httptest', type: 'doc' },
      { name: 'Go by Example: Testing', url: 'https://gobyexample.com/testing', type: 'article' },
    ],
  },
  {
    d: 25,
    tag: '工程化',
    t: '模块管理与依赖',
    desc: 'go.mod 细节、语义化版本、多包项目结构。',
    xp: 45,
    lesson: {
      points: [
        'go mod init github.com/you/project —— 模块路径就是包的 import 前缀。',
        'go get pkg@v1.2.3 精确版本、go get -u ./... 升级；最小版本选择（MVS）不需要 lock 文件博弈。',
        '多包项目：internal/ 目录下的包外部无法 import，天然的私有边界。',
        '包名惯例：短小写单词（http、json），目录名=包名，避免 util/common 这种垃圾抽屉。',
        'go mod tidy 清理未用依赖，≈ depcheck 自动删 node_modules 引用。',
      ],
      code: `// 项目结构示例：
// myapp/
// ├── go.mod            (module github.com/you/myapp)
// ├── main.go           (package main)
// ├── internal/
// │   └── store/
// │       └── store.go  (package store, 仅本项目可用)
// └── go.sum

import "github.com/you/myapp/internal/store"

var s = store.New()`,
      analogy:
        'go.mod ≈ package.json；go.sum ≈ lock 文件；internal/ ≈ 私有 package（npm 的 @scope 内部约定）；包名小写单数 ≈ 你把文件夹当命名空间。',
    },
    links: [
      { name: 'Go Modules Reference', url: 'https://go.dev/ref/mod', type: 'doc' },
      { name: 'Standard Project Layout（社区惯例）', url: 'https://github.com/golang-standards/project-layout', type: 'doc' },
    ],
  },
  {
    d: 26,
    tag: '工程化',
    t: '工具链全家桶',
    desc: 'gofmt/vet、静态检查、golangci-lint、pprof 性能分析。',
    xp: 45,
    lesson: {
      points: [
        'gofmt -w . 统一格式化，goimports 自动管理 import 顺序（IDE 保存即触发）。',
        'go vet 内置静态检查；golangci-lint 是社区 lint 聚合器 ≈ ESLint 生态的总和。',
        'go test -bench + pprof：CPU/内存火焰图，pprof 是内置的性能分析器。',
        'go build -ldflags="-X main.version=1.2" 编译期注入版本号。',
        '交叉编译一行搞定：GOOS=linux GOARCH=arm64 go build，前端要配 docker 才能做到的事。',
      ],
      code: `# 常用工具链命令
gofmt -w .
goimports -w .
go vet ./...
go test -race -cover ./...
golangci-lint run
GOOS=linux GOARCH=amd64 go build -o app
go tool pprof cpu.prof`,
      analogy:
        'gofmt ≈ prettier 官方唯一风格；vet+golangci-lint ≈ eslint 全家桶；pprof ≈ Chrome DevTools Performance 面板的命令行版；交叉编译 ≈ 一个环境变量替代整套 CI docker 构建。',
    },
    links: [
      { name: 'golangci-lint', url: 'https://golangci-lint.run/', type: 'tool' },
      { name: 'pprof 文档', url: 'https://pkg.go.dev/runtime/pprof', type: 'doc' },
    ],
  },
  {
    d: 27,
    tag: '部署',
    t: '部署：单二进制、交叉编译与 Docker',
    desc: '静态编译、容器极小化（distroless/scratch）、环境变量配置。',
    xp: 55,
    lesson: {
      points: [
        'Go 编译为静态二进制（CGO_ENABLED=0），扔进 FROM scratch 容器镜像只有几 MB——没有 node_modules、没有运行时安装。',
        '配置用环境变量：os.Getenv("PORT")，配合 12-factor app 惯例。',
        'go:embed 把静态文件编译进二进制：//go:embed dist 嵌入前端打包产物直接同进程服务。',
        '健康检查接口 /healthz 是容器编排标配，返回 200 即可。',
        '部署形态：裸二进制 + systemd、容器、或 serverless（冷启动极快）。',
      ],
      code: `// main.go
package main

import (
    "embed"
    "net/http"
    "os"
)

//go:embed dist
var distFS embed.FS

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
    http.Handle("/", http.FileServer(http.FS(distFS)))
    http.ListenAndServe(":"+port, nil)
}`,
      analogy:
        '单二进制 ≈ 打包好的 .exe；embed ≈ 把打包后的 dist/ 塞进 bundle；scratch 镜像 ≈ 比 alpine node 镜像小一个数量级，冷启动毫无负担。',
    },
    links: [
      { name: 'go:embed 文档', url: 'https://pkg.go.dev/embed', type: 'doc' },
      { name: 'Deploying Go servers', url: 'https://go.dev/doc/deploying.html', type: 'doc' },
    ],
  },
  {
    d: 28,
    tag: '进阶',
    t: '泛型与代码复用',
    desc: '泛型函数/类型、约束接口、和 TS 泛型的异同。',
    xp: 50,
    lesson: {
      points: [
        'func Map[T, U any](xs []T, f func(T) U) []U —— 语法和 TS 泛型像，但无 default、无条件类型。',
        '约束：type Number interface { ~int | ~float64 } 联合约束，~ 表示"包括底层类型"。',
        'slices/maps/cmp 标准库已提供通用工具（slices.Contains/Sort/Map 风格）。',
        '泛型不是银弹：官方建议普通代码用接口，集合类/工具函数才用泛型。',
        'Go 没有 extends 泛型继承，约束只能约束方法集和类型集。',
      ],
      code: `package main

import (
    "fmt"
    "slices"
)

type Number interface {
    ~int | ~float64
}

func Sum[T Number](xs []T) T {
    var s T
    for _, x := range xs {
        s += x
    }
    return s
}

func main() {
    fmt.Println(Sum([]int{1, 2, 3}))      // 6
    fmt.Println(Sum([]float64{1.5, 2.5})) // 4
    fmt.Println(slices.Contains([]string{"go", "ts"}, "go"))
}`,
      analogy:
        '泛型 ≈ TS 泛型的运行时版，联合约束 ≈ T extends number | string；slices.Contains ≈ arr.includes；没有 conditional types 和 infer，简单很多。',
    },
    links: [
      { name: 'An Introduction To Generics', url: 'https://go.dev/blog/intro-generics', type: 'article' },
      { name: 'slices 包文档', url: 'https://pkg.go.dev/slices', type: 'doc' },
    ],
  },
  {
    d: 29,
    tag: '进阶',
    t: '反射、unsafe 与 Go 的边界',
    desc: '何时用 reflect（JSON 库内部）、性能代价、以及绝大多数时候你不需要它。',
    xp: 50,
    lesson: {
      points: [
        'reflect.TypeOf/ValueOf 在运行时检查类型，encoding/json 就是用它实现无侵入序列化。',
        '反射慢 10-100 倍且丢失编译期检查，业务代码慎用——热路径用代码生成或手写。',
        'struct tag `json:"name"` 本质是反射读取的字符串元数据 ≈ TS 装饰器元数据。',
        'unsafe 包能绕过类型系统（指针转换），只有极少数底层库用。',
        '实战建议：先想接口设计，再想泛型，最后才考虑反射。',
      ],
      code: `package main

import (
    "fmt"
    "reflect"
)

type User struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age,omitempty"\`
}

func main() {
    u := User{Name: "gopher"}
    t := reflect.TypeOf(u)
    for i := 0; i < t.NumField(); i++ {
        f := t.Field(i)
        fmt.Println(f.Name, f.Tag.Get("json"))
    }
}`,
      analogy:
        'reflect ≈ JS 的 Proxy/Object.entries 元编程能力但静态语言版；struct tag ≈ 元数据装饰器；unsafe ≈ as any + ArrayBuffer 越界操作的极端版。',
    },
    links: [
      { name: 'The Laws of Reflection', url: 'https://go.dev/blog/laws-of-reflection', type: 'article' },
      { name: 'pkg.go.dev reflect', url: 'https://pkg.go.dev/reflect', type: 'doc' },
    ],
  },
  {
    d: 30,
    tag: '毕业',
    t: '毕业项目：带测试的并发爬虫服务',
    desc: '综合全部所学：并发抓取 + context 超时 + 接口抽象 + 测试 + 交叉编译部署。',
    xp: 100,
    lesson: {
      points: [
        '需求：给一组 URL，worker pool 并发抓取，限流+超时，汇总标题输出 JSON。',
        '架构：Fetcher 接口（便于 mock 测试）-> 并发调度（channel+WaitGroup）-> http 服务暴露结果。',
        '必须覆盖：context 整体超时、每请求独立超时、错误收集而非中断。',
        '交付清单：go test -race 全绿、golangci-lint 通过、GOOS=linux 交叉编译产物、README。',
        '之后路线：数据库（database/sql 或 GORM）、gRPC、或直接读 std 源码进阶。',
      ],
      code: `package main

import (
    "context"
    "fmt"
    "sync"
    "time"
)

type Fetcher interface {
    Title(ctx context.Context, url string) (string, error)
}

func Crawl(ctx context.Context, f Fetcher, urls []string, workers int) []string {
    jobs := make(chan string)
    titles := make(chan string, len(urls))
    var wg sync.WaitGroup

    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for u := range jobs {
                t, err := f.Title(ctx, u)
                if err == nil {
                    titles <- t
                }
            }
        }()
    }

    for _, u := range urls {
        jobs <- u
    }
    close(jobs)
    wg.Wait()
    close(titles)

    out := make([]string, 0, len(urls))
    for t := range titles {
        out = append(out, t)
    }
    return out
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    // f := NewHTTPFetcher(3 * time.Second)
    // fmt.Println(Crawl(ctx, f, []string{"https://go.dev"}, 4))
    fmt.Println("毕业快乐，勇者！")
}`,
      analogy:
        '这就是你 30 天学会的宇宙：Fetcher 接口 = 依赖注入，channel 调度 = 数据流，context = AbortSignal，测试 mock = supertest，交叉编译 = 部署自由。',
    },
    links: [
      { name: 'Awesome Go 资源大全', url: 'https://awesome-go.com/', type: 'doc' },
      { name: 'Go Wiki: Further reading', url: 'https://go.dev/wiki/', type: 'doc' },
    ],
  },
];

/** Day1~10 每日练习 */
export interface Exercise {
  prompt: string;
  starter: string;
  answer: string;
  expected: string;
}

export const EXERCISES: Record<number, Exercise> = {
  1: {
    prompt: '用短声明创建变量 name 和 age 并打印一行 "gopher: 18"。',
    starter: `package main

import "fmt"

func main() {
    // 在这里写你的代码
}`,
    answer: `package main

import "fmt"

func main() {
    name := "gopher"
    age := 18
    fmt.Println(name+":", age)
}`,
    expected: 'gopher: 18',
  },
  2: {
    prompt: '定义常量组 Week，用 iota 让 Mon=1 到 Sun=7，打印 Sat。',
    starter: `package main

import "fmt"

// 定义 Week 常量组

func main() {
    fmt.Println(/* 你的答案 */)
}`,
    answer: `package main

import "fmt"

type Week int

const (
    Mon Week = iota + 1
    Tue
    Wed
    Thu
    Fri
    Sat
    Sun
)

func main() {
    fmt.Println(Sat) // 6
}`,
    expected: '6',
  },
  3: {
    prompt: '用 for...range 统计切片 [3, 1, 4, 1, 5] 中的最大值并打印。',
    starter: `package main

import "fmt"

func main() {
    nums := []int{3, 1, 4, 1, 5}
    // 求最大值
}`,
    answer: `package main

import "fmt"

func main() {
    nums := []int{3, 1, 4, 1, 5}
    max := nums[0]
    for _, n := range nums {
        if n > max {
            max = n
        }
    }
    fmt.Println(max)
}`,
    expected: '5',
  },
  4: {
    prompt: '创建 map[string]int 统计 "aabb" 中每个字符出现次数，打印结果。',
    starter: `package main

import "fmt"

func main() {
    s := "aabb"
    // 统计并打印
}`,
    answer: `package main

import "fmt"

func main() {
    s := "aabb"
    count := map[rune]int{}
    for _, c := range s {
        count[c]++
    }
    fmt.Println(count) // map[97:2 98:2]
}`,
    expected: 'map[97:2 98:2]',
  },
  5: {
    prompt: '写函数 swap(a, b *int)，通过指针交换两个变量的值。',
    starter: `package main

import "fmt"

func swap(a, b *int) {
    // 你的代码
}

func main() {
    x, y := 1, 2
    swap(&x, &y)
    fmt.Println(x, y)
}`,
    answer: `package main

import "fmt"

func swap(a, b *int) {
    *a, *b = *b, *a
}

func main() {
    x, y := 1, 2
    swap(&x, &y)
    fmt.Println(x, y)
}`,
    expected: '2 1',
  },
  6: {
    prompt: '写函数 div(a, b int) (int, error)，b 为 0 时返回错误，main 中正确处理。',
    starter: `package main

import "fmt"

// 定义 div 并在 main 中调用处理错误

func main() {
    // 调用 div(10, 0) 和 div(10, 2)
}`,
    answer: `package main

import (
    "errors"
    "fmt"
)

func div(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    if _, err := div(10, 0); err != nil {
        fmt.Println("err:", err)
    }
    q, _ := div(10, 2)
    fmt.Println("q:", q)
}`,
    expected: 'err: division by zero\\nq: 5',
  },
  7: {
    prompt: '切片 s := []int{1,2,3,4,5}：取 s[1:3] 修改第一个元素，打印 s，验证共享底层。',
    starter: `package main

import "fmt"

func main() {
    s := []int{1, 2, 3, 4, 5}
    // 取子切片并修改
}`,
    answer: `package main

import "fmt"

func main() {
    s := []int{1, 2, 3, 4, 5}
    sub := s[1:3]
    sub[0] = 99
    fmt.Println(s) // [1 99 3 4 5]
}`,
    expected: '[1 99 3 4 5]',
  },
  8: {
    prompt: '用 map[string]struct{} 实现去重函数 unique(xs []string) []string（保持首次出现顺序）。',
    starter: `package main

import "fmt"

func unique(xs []string) []string {
    // 你的代码
    return nil
}

func main() {
    fmt.Println(unique([]string{"a", "b", "a", "c"}))
}`,
    answer: `package main

import "fmt"

func unique(xs []string) []string {
    seen := map[string]struct{}{}
    out := []string{}
    for _, x := range xs {
        if _, ok := seen[x]; !ok {
            seen[x] = struct{}{}
            out = append(out, x)
        }
    }
    return out
}

func main() {
    fmt.Println(unique([]string{"a", "b", "a", "c"}))
}`,
    expected: '[a b c]',
  },
  9: {
    prompt: '定义 User struct{Name string; Age int}，加 json tag，序列化后打印。',
    starter: `package main

import "fmt"

// 定义 User 并序列化

func main() {
}`,
    answer: `package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age,omitempty"\`
}

func main() {
    b, _ := json.Marshal(User{Name: "gopher", Age: 18})
    fmt.Println(string(b))
}`,
    expected: '{"name":"gopher","age":18}',
  },
  10: {
    prompt: '给 Counter 加指针接收者方法 Add(n int) 和值接收者方法 Get() int，演示两者区别。',
    starter: `package main

import "fmt"

type Counter struct{ n int }

// 添加 Add 和 Get 方法

func main() {
    c := Counter{}
    // 调用后打印
}`,
    answer: `package main

import "fmt"

type Counter struct{ n int }

func (c *Counter) Add(n int) { c.n += n }
func (c Counter) Get() int   { return c.n }

func main() {
    c := Counter{}
    c.Add(3)
    c.Add(4)
    fmt.Println(c.Get()) // 7

    v := c
    v.Add(100)           // 值接收者拷贝副本，Go 自动取地址调用所以 c 会变
    fmt.Println(c.Get(), v.Get())
}`,
    expected: '7\\n107 107',
  },
};

/** 每日测验，每天 ≥2 题 */
export interface QuizItem {
  q: string;
  options: [string, string, string, string];
  /** 正确选项下标 */
  answer: 0 | 1 | 2 | 3;
  explain: string;
}

export const QUIZZES: Record<number, QuizItem[]> = {
  1: [
    {
      q: 'go.mod 文件的作用最接近前端的哪个文件？',
      options: ['tsconfig.json', 'package.json', 'vite.config.ts', '.eslintrc'],
      answer: 1,
      explain: 'go.mod 声明模块名与依赖版本，go get 相当于 npm install；go.sum 才对应 package-lock.json。',
    },
    {
      q: '以下哪个命令会生成可直接部署的二进制文件？',
      options: ['go run main.go', 'go build', 'go vet', 'gofmt'],
      answer: 1,
      explain: 'go run 是临时编译运行；go build 产出静态二进制，部署无需任何运行时依赖。',
    },
  ],
  2: [
    {
      q: 'var s string 声明后未赋值，s 的值是？',
      options: ['undefined', 'nil', '""（空字符串）', '编译错误'],
      answer: 2,
      explain: 'Go 没有未初始化值，string 零值是空串；undefined 这个概念在 Go 中不存在。',
    },
    {
      q: '以下哪段代码能通过编译？',
      options: [
        'x := 1; x = "a"',
        'const a = 1; a = 2',
        'x := 1; y := x + 1.5',
        'var x int = 1; x = 2',
      ],
      answer: 3,
      explain: 'Go 类型固定：给 int 赋字符串、给常量重赋值、int+float64 混算都报错；只有同类型重赋值合法。',
    },
  ],
  3: [
    {
      q: 'Go 中实现"while (true)"无限循环应写？',
      options: ['while true { }', 'loop { }', 'for { }', 'repeat { }'],
      answer: 2,
      explain: 'Go 只有 for 一种循环关键字，for {} 即无限循环。',
    },
    {
      q: 'if v := f(); v > 0 { } 中 v 的作用域是？',
      options: ['整个函数', '仅 if 块（含 else）', '整个文件', '与 f 相同'],
      answer: 1,
      explain: 'if 的初始化语句变量作用域限定在 if/else 块内，用完即弃，避免污染外层。',
    },
  ],
  4: [
    {
      q: 'var m map[string]int 声明后直接 m["a"]=1 会怎样？',
      options: ['正常写入', 'panic', '静默失败', '编译错误'],
      answer: 1,
      explain: 'nil map 可读不可写，写入会 panic；必须先 make 或用字面量初始化。',
    },
    {
      q: '数组和切片的核心区别是？',
      options: [
        '数组可变长度，切片固定',
        '数组长度是类型一部分且固定，切片是动态视图',
        '切片存指针所以更慢且不能比较',
        '没有区别，只是写法不同',
      ],
      answer: 1,
      explain: '[3]int 是完整类型（含长度），日常用 []T 切片：底层指向数组、带 len/cap、可 append。',
    },
  ],
  5: [
    {
      q: 'func modify(s []int) { s[0]=99 } 传入切片后，外部切片会变吗？',
      options: ['会，因为切片共享底层数组', '不会，Go 全是值传递', '只有指针才变', '取决于 cap'],
      answer: 0,
      explain: '传参是值拷贝，但拷贝的是切片头（指针/len/cap），底层数组共享，所以元素修改可见。',
    },
    {
      q: '&x 和 *p 分别是？',
      options: ['解引用和取地址', '取地址和解引用', '都是取地址', '都是解引用'],
      answer: 1,
      explain: '&x 取地址产生 *T 指针，*p 解引用读写指向的值。Go 指针没有算术运算。',
    },
  ],
  6: [
    {
      q: 'Go 中最惯用的错误处理方式是？',
      options: ['try/catch', '抛出异常', '多返回值返回 error', 'panic 全部'],
      answer: 2,
      explain: '返回值 + error 检查是核心惯例；panic 只用于不可恢复 bug，不是异常机制。',
    },
    {
      q: 'defer 注册的函数执行时机是？',
      options: ['注册后立即执行', '当前 goroutine 结束时', '所在函数 return 前（LIFO）', 'GC 时'],
      answer: 2,
      explain: 'defer 在函数返回前按后进先出执行，常用于 Unlock/Close，像作用域级 finally。',
    },
  ],
  7: [
    {
      q: 'append 追加超出 cap 时会发生什么？',
      options: ['panic', '原地扩展底层数组', '分配更大新数组并返回新切片', '静默丢失元素'],
      answer: 2,
      explain: '扩容会分配新数组，append 返回指向新数组的切片——所以必须接住返回值。',
    },
    {
      q: '如何获得一个不与原切片共享底层的拷贝？',
      options: ['src[0:len(src)]', 'append([]int(nil), src...)', 'copy 自身', ':= 赋值'],
      answer: 1,
      explain: '切片表达式和赋值都共享底层；append 到新 nil 切片或显式 copy 才是独立拷贝。',
    },
  ],
  8: [
    {
      q: 'for k := range m 两次遍历的顺序？',
      options: ['插入顺序', '字母序', '随机化（故意的）', '哈希值序'],
      answer: 2,
      explain: 'Go 官方故意随机化 map 遍历顺序，防止代码依赖实现细节；要有序须先排序 key。',
    },
    {
      q: 'v, ok := m[key] 中 ok 的含义是？',
      options: ['value 是否为零值', 'key 是否存在', 'map 是否为 nil', '写入是否成功'],
      answer: 1,
      explain: 'comma-ok 区分"值是零值"和"key 不存在"，类似 JS 的 in 操作符。',
    },
  ],
  9: [
    {
      q: 'Go 中实现"继承"的推荐方式是？',
      options: ['extends 关键字', 'struct 嵌入（组合）', 'prototype 链', '复制粘贴'],
      answer: 1,
      explain: '嵌入提供字段/方法的组合提升，没有继承层次和 super，官方哲学是组合优于继承。',
    },
    {
      q: 'json tag \`json:"userName"\` 的作用是？',
      options: [
        '运行时改名变量',
        '控制序列化/反序列化时 JSON 字段名',
        '生成数据库索引',
        '给 IDE 看的注释',
      ],
      answer: 1,
      explain: 'tag 是反射读取的元数据，控制 JSON 字段映射、omitempty 省略零值等。',
    },
  ],
  10: [
    {
      q: '什么时候必须用指针接收者？',
      options: [
        '方法需要修改接收者的字段',
        '永远必须用',
        '只有小结构体用',
        '接口实现必须用',
      ],
      answer: 0,
      explain: '值接收者拿到的是副本，修改不影响原值；要改原值就必须指针接收者。',
    },
    {
      q: 'Go 中创建"构造函数"的惯例是？',
      options: ['new 关键字重载', 'NewXxx() 工厂函数', 'constructor 方法', 'init() 里写'],
      answer: 1,
      explain: '没有 class 构造器语法，惯例导出 NewXxx 工厂函数返回 *T，内部可做默认值和校验。',
    },
  ],
  11: [
    {
      q: 'Go 接口的实现方式是？',
      options: ['implements 声明', '方法集自动匹配（隐式）', '继承接口类', '注册表注册'],
      answer: 1,
      explain: '只要实现了接口的方法集就自动满足，无需声明——结构化类型的运行时体现。',
    },
    {
      q: '把一个值为 nil 的 *T 指针赋给接口变量后，接口 == nil 吗？',
      options: ['等于 nil', '不等于 nil', 'panic', '视 T 而定'],
      answer: 1,
      explain: '接口 = (类型, 值) 二元组；装入了 *T 类型后类型信息非空，接口不为 nil。这是经典陷阱。',
    },
  ],
  12: [
    {
      q: '社区建议的接口设计原则是？',
      options: ['大而全接口', '接受接口，返回具体类型', '一切用 any', '接口越多越好'],
      answer: 1,
      explain: '小接口易于组合与 mock；函数参数依赖接口、返回具体 struct，保持调用方简单。',
    },
    {
      q: 'any 类型等价于 TS 的？',
      options: ['never', 'unknown（宽松使用）', 'void', 'object'],
      answer: 1,
      explain: 'any 是 interface{} 的别名，能装任何值但放弃类型检查，语义上接近 unknown，应尽量少用。',
    },
  ],
  13: [
    {
      q: 'fmt.Errorf 的 %w 动词作用是？',
      options: ['格式化字符串', '包装底层错误保留错误链', '输出宽度', '转成 warning'],
      answer: 1,
      explain: '%w 包装原错误，之后可用 errors.Is/As 沿链查找，相当于 JS Error 的 cause。',
    },
    {
      q: 'errors.Is(err, ErrNotFound) 与 err == ErrNotFound 的区别是？',
      options: [
        '完全等价',
        'Is 会解包错误链逐层比较，== 只比较顶层',
        '== 更快且推荐',
        'Is 只能用于自定义错误',
      ],
      answer: 1,
      explain: '错误被 %w 包装后顶层不再等于哨兵值，Is 沿链 unwrap 比较，因此判错误一律用 errors.Is。',
    },
  ],
  14: [
    {
      q: 'main 函数返回后，还没跑完的 goroutine 会？',
      options: ['等待完成', '被直接终止', '报错', '成为僵尸进程'],
      answer: 1,
      explain: 'main 退出即进程退出，所有 goroutine 直接被杀；所以需要 WaitGroup/channel 做同步。',
    },
    {
      q: 'sync.WaitGroup 的正确使用顺序是？',
      options: [
        'Wait 后 Add，goroutine 里 Done',
        'Add 后启动 goroutine，goroutine 内 defer Done，主线程 Wait',
        '只 Wait 不 Add',
        'Done 后 Add',
      ],
      answer: 1,
      explain: 'Add 必须在 go 之前调用（避免竞态），goroutine 内 defer Done，Wait 阻塞到计数归零。',
    },
  ],
  15: [
    {
      q: '向无缓冲 channel 发送数据时，如果没有接收者会？',
      options: ['立即返回 false', '阻塞直到有接收者', 'panic', '数据丢失'],
      answer: 1,
      explain: '无缓冲 channel 是同步交接：发送方阻塞到接收方就绪，天然形成同步点。',
    },
    {
      q: 'for v := range ch 循环何时结束？',
      options: ['channel 缓冲空了', '接收到一个 nil', 'channel 被 close 且数据排空', '永不结束'],
      answer: 2,
      explain: 'close 后先排空剩余值，然后循环结束（等价于 v, ok 中 ok=false）。',
    },
  ],
  16: [
    {
      q: 'select 中所有 case 都未就绪且有 default 分支时，会？',
      options: ['阻塞等待', '执行 default', '随机等待', 'panic'],
      answer: 1,
      explain: 'default 使 select 变成非阻塞尝试，立即走 default，常用于轮询或避免卡死。',
    },
    {
      q: '实现"最多等 2 秒"的惯用法是？',
      options: [
        'time.Sleep(2s) 后检查',
        'select + time.After(2*time.Second)',
        'channel 容量设为 2',
        'goroutine 计数',
      ],
      answer: 1,
      explain: 'select { case v := <-ch: ...; case <-time.After(2s): 超时 } ≈ Promise.race 超时模式。',
    },
  ],
  17: [
    {
      q: '100 个 goroutine 并发 count++ 且无锁，结果会？',
      options: ['一定正确', '不确定，存在数据竞争', '编译报错', '自动加锁'],
      answer: 1,
      explain: '并发读写共享变量是 data race，结果不确定；用 Mutex 或 atomic，且 go run -race 能检测。',
    },
    {
      q: 'sync.Once.Do(f) 的保证是？',
      options: ['每 goroutine 执行一次', '整个程序生命周期只执行一次', '每秒一次', '失败了会重试'],
      answer: 1,
      explain: 'Once 提供全局单次初始化语义（即使并发调用），常用于单例/连接池懒加载。',
    },
  ],
  18: [
    {
      q: 'context.Context 作为参数的惯例位置是？',
      options: ['最后一个参数', '第一个参数，命名 ctx', '全局变量', '结构体字段'],
      answer: 1,
      explain: 'ctx 永远是第一个参数并贯穿调用链，官方约定，静态检查也会提示。',
    },
    {
      q: 'context.WithTimeout 超时后，ctx.Done() 会？',
      options: ['发送 true', '关闭该 channel', 'panic', '无变化'],
      answer: 1,
      explain: '取消/超时时关闭 Done channel，使所有 select <-ctx.Done() 的等待方同时被唤醒。',
    },
  ],
  19: [
    {
      q: 'Go 1.22 的 mux.HandleFunc("GET /api/u/{id}", h) 中取路径参数的方式是？',
      options: ['r.URL.Query().Get("id")', 'r.PathValue("id")', 'r.FormValue("id")', 'r.Header.Get("id")'],
      answer: 1,
      explain: '1.22 新增路径参数语法，r.PathValue("id") 取值；Query() 只取 ?a=b 查询参数。',
    },
    {
      q: 'HTTP 中间件在 Go 里的惯用形态是？',
      options: [
        'class Middleware',
        'func(next http.Handler) http.Handler',
        '全局拦截器注解',
        '修饰器语法糖',
      ],
      answer: 1,
      explain: '中间件是包装 Handler 的函数，内部处理前置/后置逻辑后调用 next.ServeHTTP，可自由组合。',
    },
  ],
  20: [
    {
      q: '生产环境使用 http.Get 的主要问题是？',
      options: [
        '不支持 HTTPS',
        '默认 Client 无超时，可能永久挂起',
        '不能带 header',
        '性能太差',
      ],
      answer: 1,
      explain: 'http.Get 用 DefaultClient，零超时；必须自定义 http.Client{Timeout: ...}。',
    },
    {
      q: 't.Format("2006-01-02") 这个奇怪写法的原因是？',
      options: [
        'Go 的 bug',
        '参考时间记忆法：1月2日下午3时4分5秒2006年，按数字顺序',
        '仿照 Unix date',
        '历史遗留的 C 惯例',
      ],
      answer: 1,
      explain: 'Go 用固定参考时间 01/02 03:04:05PM 2006 (-0700) 的数字含义表达 layout，是著名冷知识。',
    },
  ],
  21: [
    {
      q: '并发安全的内存存储 struct 应该组合哪个字段？',
      options: ['sync.Once', 'sync.Mutex', 'context.Context', 'chan bool'],
      answer: 1,
      explain: 'map 并发读写会 panic，读写都需持锁；内存 CRUD 存储标配 embed 一个 sync.Mutex。',
    },
    {
      q: '解码请求体 JSON 的惯用写法是？',
      options: [
        'json.Unmarshal([]byte(r.Body), &v)',
        'json.NewDecoder(r.Body).Decode(&v)',
        'r.Body.JSON(&v)',
        'parse(r.Body)',
      ],
      answer: 1,
      explain: 'Decoder 直接流式读 Body 并 Decode 到 &v；Unmarshal 需要先 io.ReadAll，多一步且占内存。',
    },
  ],
  22: [
    {
      q: '优雅关停（graceful shutdown）的核心动作是？',
      options: [
        '立刻 os.Exit(0)',
        '监听信号后调用 server.Shutdown(ctx) 等在途请求完成',
        '重启进程',
        '丢弃所有连接',
      ],
      answer: 1,
      explain: 'signal.NotifyContext 捕获 SIGTERM/SIGINT，Shutdown 让活跃请求处理完再退出，发布不丢请求。',
    },
    {
      q: 'srv.ListenAndServe() 通常放在 goroutine 里运行，因为？',
      options: [
        '它性能更好',
        '它是阻塞调用，主线程要腾出来等信号',
        'Go 强制要求',
        '避免端口冲突',
      ],
      answer: 1,
      explain: 'ListenAndServe 阻塞到出错，放 goroutine 让主 goroutine 阻塞在 <-ctx.Done() 等待退出信号。',
    },
  ],
  23: [
    {
      q: 'Go 的测试函数必须满足？',
      options: [
        '在 main 包中，名字任意',
        '文件以 _test.go 结尾，函数签名 TestXxx(t *testing.T)',
        '继承 TestCase 类',
        '使用 it() 全局函数',
      ],
      answer: 1,
      explain: '_test.go + Test 开头 + *testing.T 参数是 go test 的识别规则，无需测试框架。',
    },
    {
      q: '表驱动测试的核心好处是？',
      options: [
        '运行更快',
        '新增用例只需加一行数据，逻辑复用',
        '自动生成覆盖率',
        '可以并行跑所有包',
      ],
      answer: 1,
      explain: '用例即数据切片，t.Run 子测试逐条执行并独立报告，等价于 test.each 且更结构化。',
    },
  ],
  24: [
    {
      q: '不启动真实端口就能测 HTTP handler 的工具是？',
      options: ['httptest.NewRecorder', 'net.Listen', 'curl', 'mockhttp 包'],
      answer: 0,
      explain: 'NewRecorder 提供假的 ResponseWriter，直接调用 handler 后断言 Code/Body，快且稳定。',
    },
    {
      q: 'BenchmarkXxx 中 b.N 的含义是？',
      options: ['CPU 核数', '框架自动调整的迭代次数', '固定 1000 次', '并发数'],
      answer: 1,
      explain: 'testing 框架动态调整 b.N 直到采样足够，你的代码循环 b.N 次，报告 ns/op。',
    },
  ],
  25: [
    {
      q: 'internal/ 目录下包的特殊性是？',
      options: [
        '编译更快',
        '只能被其父模块内的代码 import，外部不可见',
        '自动内联优化',
        '必须含 main 包',
      ],
      answer: 1,
      explain: 'internal 是编译器强制的私有边界，比 npm 的 @scope/内部 约定更硬。',
    },
    {
      q: 'go mod tidy 的作用是？',
      options: ['升级所有依赖', '增删依赖使 go.mod 与代码实际 import 一致', '生成文档', '格式化 go.mod'],
      answer: 1,
      explain: 'tidy 添加缺失、移除未用的依赖并刷新 go.sum，相当于依赖的死代码清除。',
    },
  ],
  26: [
    {
      q: '交叉编译 linux/arm64 二进制的命令是？',
      options: [
        'go build --target linux/arm64',
        'GOOS=linux GOARCH=arm64 go build',
        'go deploy --arch arm64',
        '需要安装 docker',
      ],
      answer: 1,
      explain: '两个环境变量即可，无第三方工具——这是 Go 相对 Node 构建链的巨大优势。',
    },
    {
      q: 'pprof 的用途是？',
      options: ['包管理', 'CPU/内存性能剖析', '格式化代码', '生成 mock'],
      answer: 1,
      explain: 'pprof 采集 CPU/heap profile 并生成火焰图，≈ 命令行版 DevTools Performance。',
    },
  ],
  27: [
    {
      q: '把前端打包产物嵌进 Go 二进制应使用？',
      options: ['//go:embed 指令', 'fs.readFile', 'webpack 插件', 'http.FS 远程加载'],
      answer: 0,
      explain: 'go:embed 在编译期把文件/目录嵌入二进制，运行时用 http.FS 直接服务，单文件交付。',
    },
    {
      q: 'FROM scratch 镜像能跑 Go 二进制的前提是？',
      options: [
        '安装 golang 镜像层',
        'CGO_ENABLED=0 静态编译',
        '容器内联网',
        '复制 /etc/passwd',
      ],
      answer: 1,
      explain: '静态编译（禁用 cgo）后二进制不依赖 libc，scratch 空镜像即可运行，镜像仅几 MB。',
    },
  ],
  28: [
    {
      q: '泛型约束 type Number interface { ~int | ~float64 } 中 ~ 的含义是？',
      options: ['取反', '匹配底层类型相同的所有类型', '指针类型', '可空类型'],
      answer: 1,
      explain: '~int 表示"底层类型为 int 的所有类型"（如 type Age int 也满足），比裸 int 更宽松。',
    },
    {
      q: 'Go 泛型与 TS 泛型的重要差异是？',
      options: [
        'Go 支持条件类型和 infer',
        'Go 无条件类型/默认类型参数，约束仅限方法集与类型集',
        'TS 泛型在运行时擦除，Go 不会',
        'Go 泛型只能用于 struct',
      ],
      answer: 1,
      explain: 'Go 泛型刻意保持简单：无 conditional types、无 default、无变型标注，复用靠接口组合。',
    },
  ],
  29: [
    {
      q: 'encoding/json 能序列化任意 struct 靠的是？',
      options: ['代码生成', 'reflect 反射读取类型与 tag', 'unsafe 内存布局', '编译器内建'],
      answer: 1,
      explain: 'json 包用 reflect 在运行时遍历字段和 tag，这正是反射在标准库中的典型应用。',
    },
    {
      q: '业务热路径代码应优先避免什么？',
      options: ['接口', '泛型', 'reflect 反射', 'goroutine'],
      answer: 2,
      explain: '反射比直接调用慢一个数量级且丢失编译期检查；热路径用手写代码或代码生成。',
    },
  ],
  30: [
    {
      q: '并发爬虫中给每个请求加独立超时的正确组合是？',
      options: [
        'time.Sleep 检查',
        'ctx 派生 WithTimeout + http.NewRequestWithContext',
        'channel 容量',
        'WaitGroup 计数',
      ],
      answer: 1,
      explain: '总 ctx 控制全局，派生 WithTimeout 控制单请求，context 直通 http 传输层实现取消。',
    },
    {
      q: '爬虫项目里 Fetcher 设计成接口的最大收益是？',
      options: [
        '运行更快',
        '测试时可注入 fake 抓取器，不依赖网络',
        '支持反射',
        '减少代码行数',
      ],
      answer: 1,
      explain: '接口抽象使 Crawl 逻辑可用 httptest/mock 测试，网络故障不进 CI——这就是"接受接口"哲学的落地。',
    },
  ],
};

/** Day → 推荐资源 */
export const RESOURCES: Record<number, { name: string; url: string; type: 'doc' | 'video' | 'tool' | 'article' | 'playground' }[]> = {
  1: [
    { name: 'A Tour of Go（官方交互教程）', url: 'https://go.dev/tour/', type: 'doc' },
    { name: 'Go Playground', url: 'https://go.dev/play/', type: 'playground' },
    { name: 'Learn Go in Y Minutes', url: 'https://learnxinyminutes.com/docs/go/', type: 'article' },
  ],
  2: [
    { name: 'Go by Example', url: 'https://gobyexample.com/', type: 'article' },
    { name: 'Tour of Go: Basic types', url: 'https://go.dev/tour/basics/11', type: 'doc' },
  ],
  3: [
    { name: 'Go by Example: Loops', url: 'https://gobyexample.com/for', type: 'article' },
    { name: 'Tour of Go: Flow control', url: 'https://go.dev/tour/flowcontrol/1', type: 'doc' },
  ],
  4: [
    { name: 'Go Slices: usage and internals', url: 'https://go.dev/blog/slices-intro', type: 'article' },
    { name: 'Go Maps in Action', url: 'https://go.dev/blog/maps', type: 'article' },
  ],
  5: [
    { name: 'Go by Example: Pointers', url: 'https://gobyexample.com/pointers', type: 'article' },
    { name: 'Dave Cheney: 指针 vs 值', url: 'https://dave.cheney.net/2017/08/09/optimize-go-interface-values', type: 'article' },
  ],
  6: [
    { name: 'Go by Example: Functions', url: 'https://gobyexample.com/functions', type: 'article' },
    { name: 'Defer, Panic, and Recover', url: 'https://go.dev/blog/defer-panic-and-recover', type: 'article' },
  ],
  7: [
    { name: 'Go Slices Internals（必读）', url: 'https://go.dev/blog/slices-intro', type: 'article' },
    { name: 'Go by Example: Slices', url: 'https://gobyexample.com/slices', type: 'article' },
  ],
  8: [
    { name: 'Go maps in action', url: 'https://go.dev/blog/maps', type: 'article' },
    { name: 'Go by Example: Maps', url: 'https://gobyexample.com/maps', type: 'article' },
  ],
  9: [
    { name: 'Go by Example: Structs', url: 'https://gobyexample.com/structs', type: 'article' },
    { name: 'Go by Example: JSON', url: 'https://gobyexample.com/json', type: 'article' },
  ],
  10: [
    { name: 'Tour of Go: Methods and interfaces', url: 'https://go.dev/tour/methods/1', type: 'doc' },
    { name: 'Go by Example: Methods', url: 'https://gobyexample.com/methods', type: 'article' },
  ],
  11: [
    { name: 'Go by Example: Interfaces', url: 'https://gobyexample.com/interfaces', type: 'article' },
    { name: 'Sort Godoc: io.Reader 生态', url: 'https://pkg.go.dev/io#Reader', type: 'doc' },
  ],
  12: [
    { name: 'CodeReviewComments: Interfaces', url: 'https://go.dev/wiki/CodeReviewComments', type: 'doc' },
    { name: 'Go by Example: Struct Embedding', url: 'https://gobyexample.com/struct-embedding', type: 'article' },
  ],
  13: [
    { name: 'Error handling and Go', url: 'https://go.dev/blog/errors-are-values', type: 'article' },
    { name: 'Working with Errors in Go 1.13', url: 'https://go.dev/blog/go1.13-errors', type: 'article' },
  ],
  14: [
    { name: 'Go Concurrency Patterns: Pipelines', url: 'https://go.dev/blog/pipelines', type: 'article' },
    { name: 'Go by Example: Goroutines', url: 'https://gobyexample.com/goroutines', type: 'article' },
  ],
  15: [
    { name: 'Go by Example: Channels', url: 'https://gobyexample.com/channels', type: 'article' },
    { name: 'Share Memory By Communicating', url: 'https://go.dev/blog/codelab-share', type: 'article' },
  ],
  16: [
    { name: 'Go Concurrency Patterns (Rob Pike)', url: 'https://go.dev/talks/2012/concurrency.slide', type: 'article' },
    { name: 'Go by Example: Select', url: 'https://gobyexample.com/select', type: 'article' },
  ],
  17: [
    { name: 'Go by Example: Mutexes', url: 'https://gobyexample.com/mutexes', type: 'article' },
    { name: 'Race Detector', url: 'https://go.dev/blog/race-detector', type: 'article' },
  ],
  18: [
    { name: 'Go Concurrency Patterns: Context', url: 'https://go.dev/blog/context', type: 'article' },
    { name: 'Go by Example: Context', url: 'https://gobyexample.com/context', type: 'article' },
  ],
  19: [
    { name: 'Routing Enhancements for Go 1.22', url: 'https://go.dev/blog/routing-enhancements', type: 'article' },
    { name: 'Go by Example: HTTP Servers', url: 'https://gobyexample.com/http-servers', type: 'article' },
  ],
  20: [
    { name: 'pkg.go.dev net/http', url: 'https://pkg.go.dev/net/http', type: 'doc' },
    { name: 'Go by Example: HTTP Clients', url: 'https://gobyexample.com/http-clients', type: 'article' },
  ],
  21: [
    { name: 'Learn Go with Tests: HTTP server', url: 'https://quii.gitbook.io/learn-go-with-tests/build-an-application/http-server', type: 'doc' },
    { name: 'JSON and Go', url: 'https://go.dev/blog/json', type: 'article' },
  ],
  22: [
    { name: 'Server.Shutdown 示例', url: 'https://pkg.go.dev/net/http#Server.Shutdown', type: 'doc' },
    { name: 'os/signal 文档', url: 'https://pkg.go.dev/os/signal', type: 'doc' },
  ],
  23: [
    { name: 'Learn Go with Tests（TDD 学 Go 神书）', url: 'https://quii.gitbook.io/learn-go-with-tests/', type: 'doc' },
    { name: 'go test 命令文档', url: 'https://pkg.go.dev/cmd/go#hdr-Test_packages', type: 'doc' },
  ],
  24: [
    { name: 'pkg.go.dev httptest', url: 'https://pkg.go.dev/net/http/httptest', type: 'doc' },
    { name: 'Go by Example: Testing and Benchmarking', url: 'https://gobyexample.com/testing', type: 'article' },
  ],
  25: [
    { name: 'Go Modules Reference', url: 'https://go.dev/ref/mod', type: 'doc' },
    { name: 'Tutorial: Create a Go module', url: 'https://go.dev/doc/tutorial/create-module', type: 'doc' },
  ],
  26: [
    { name: 'golangci-lint 官网', url: 'https://golangci-lint.run/', type: 'tool' },
    { name: 'Go Tools 文档', url: 'https://go.dev/doc/tools', type: 'doc' },
  ],
  27: [
    { name: 'pkg.go.dev embed', url: 'https://pkg.go.dev/embed', type: 'doc' },
    { name: 'Building Docker images for Go', url: 'https://docs.docker.com/language/golang/build-images/', type: 'doc' },
  ],
  28: [
    { name: 'An Introduction To Generics', url: 'https://go.dev/blog/intro-generics', type: 'article' },
    { name: 'When To Use Generics', url: 'https://go.dev/blog/when-generics', type: 'article' },
  ],
  29: [
    { name: 'The Laws of Reflection', url: 'https://go.dev/blog/laws-of-reflection', type: 'article' },
    { name: 'pkg.go.dev reflect', url: 'https://pkg.go.dev/reflect', type: 'doc' },
  ],
  30: [
    { name: 'Awesome Go', url: 'https://awesome-go.com/', type: 'doc' },
    { name: 'Go Developer Roadmap', url: 'https://roadmap.sh/golang', type: 'doc' },
    { name: 'Go Project Layout', url: 'https://github.com/golang-standards/project-layout', type: 'doc' },
  ],
};
