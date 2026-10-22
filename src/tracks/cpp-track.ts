// cpp-track.ts — C++ 勇者 30 天课程线（前端开发者视角）
// 纯数据文件，无依赖。

export const META = {
  id: 'cpp',
  name: 'C++ 勇者',
  icon: '🔵',
  tagline: '从 TS/JS 通往编译型世界：指针、内存、RAII、模板与 STL 的 30 天远征',
};

export type Lesson = {
  points: string[];
  code: string;
  analogy: string;
};
export type Task = {
  d: number;
  tag: string;
  t: string;
  desc: string;
  xp: number;
  lesson: Lesson;
  links: { name: string; url: string; type: 'doc' | 'tutorial' | 'tool' | 'repo' }[];
};
export type Exercise = {
  prompt: string;
  starter: string;
  answer: string;
  expected: string;
};
export type Quiz = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export const TASKS: Task[] = [
  {
    d: 1, tag: '入门', t: '编译型思维：从解释执行到二进制',
    desc: '安装 g++/clang 与 VS Code，写下第一个程序，理解"源码→编译→链接→可执行文件"与 JS 引擎即时解释的本质区别。',
    xp: 60,
    lesson: {
      points: [
        'JS/TS：写完直接跑（引擎解释/JIT）；C++：必须先编译成机器码，错误在编译期暴露——相当于把 TS 的类型检查变成"强制的、更狠的版本"',
        '编译四步：预处理(#include 复制粘贴) → 编译(生成汇编) → 汇编(生成 .o 目标文件) → 链接(合并 .o 与库成可执行文件)',
        '#include 不是 import！它把头文件内容原样粘贴进来，这是"重定义错误"的根源',
        'main 函数是入口，返回 int（0 表示成功）——没有 main 就链接失败，相当于 npm 包没有 entry',
        '用 g++ -std=c++20 -Wall main.cpp -o app 编译：-std 选标准，-Wall 开警告（等于把 ESLint 拉满）',
      ],
      code:
        '#include <iostream>\n\nint main() {\n    std::cout << \"Hello, Hero!\\n\";  // << 是流插入，类比 console.log\n    return 0;  // 退出码，echo $? 可见\n}\n// 编译：g++ -std=c++20 -Wall main.cpp -o hello && ./hello',
      analogy: 'TS 是"边跑边查"，C++ 是"出厂前全检"：编译器就是你的 lint+type-check 合体，警告都要当错误看。',
    },
    links: [
      { name: 'learncpp.com 第 0 章（强烈推荐的系统教程）', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-these-tutorials/', type: 'tutorial' },
      { name: 'cppreference 编译入门', url: 'https://en.cppreference.com/w/cpp/language', type: 'doc' },
      { name: 'Compiler Explorer（在线看编译产物汇编）', url: 'https://godbolt.org/', type: 'tool' },
    ],
  },
  {
    d: 2, tag: '基础', t: '变量与类型：static typing 的完全体',
    desc: '掌握基本类型(int/double/bool/char)、字面量、const、auto 类型推导，对比 TS 的 number/string/any 体系。',
    xp: 60,
    lesson: {
      points: [
        'C++ 类型是"内存大小+解释方式"：int 4 字节、double 8 字节；TS 的 number 统一了它们，C++ 必须自己选',
        '整数有溢出（signed 溢出是未定义行为 UB！），浮点有精度——没有 Number.MAX_SAFE_INTEGER 保护你',
        'const 是编译期常量承诺，constexpr 更进一步："必须能在编译期算出"，类比 as const 但强制执行',
        'auto 让编译器推导类型（类似 TS 的隐式推断），但规则更细：auto 会丢掉引用和顶层 const',
        '用 sizeof(T) 查字节数；std::string 才是字符串（别用 C 风格 char*）',
      ],
      code:
        '#include <iostream>\n#include <string>\n\nint main() {\n    int hp = 100;            // 4 字节整数\n    double atk = 23.5;       // 8 字节浮点\n    const int maxHp = 100;   // 编译期承诺不可改\n    constexpr int ver = 2;   // 强制编译期求值\n    auto level = 30;         // 推导为 int\n    std::string name = \"勇者\";\n    std::cout << sizeof(hp) << \" \" << name << \"\\n\";\n}',
      analogy: 'TS: let n: number → JS 里都是 double。C++ 把 number 拆成 int/long/float/double/size_t…，选错类型 = 内存与溢出问题。',
    },
    links: [
      { name: 'learncpp：变量、初始化与类型', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-objects-and-variables/', type: 'tutorial' },
      { name: 'cppreference：类型', url: 'https://en.cppreference.com/w/cpp/language/types', type: 'doc' },
      { name: 'C++ Core Guidelines：类型安全', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-numeric', type: 'doc' },
    ],
  },
  {
    d: 3, tag: '基础', t: '函数、重载与默认参数',
    desc: '函数声明/定义分离、按值/按引用传参、函数重载，理解为什么头文件要声明、源文件要定义。',
    xp: 60,
    lesson: {
      points: [
        '声明(签名)放头文件 .h/.hpp，定义(实现)放 .cpp——类似 .d.ts 与实现的分离',
        '按值传参会拷贝对象（大对象开销大），按引用传参 void f(const std::string& s) 零拷贝，类比传引用 vs structuredClone',
        '重载：同名不同参，编译期按参数类型静态分发（TS  overload 只是类型标注，C++ 是真的生成多个函数）',
        '默认参数和 TS 一样，但只能从右往左缺省',
        '函数模板先放一放（Day 12），今天先吃透引用传参',
      ],
      code:
        '#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name) {      // const 引用：只读、零拷贝\n    std::cout << \"Hi, \" << name << \"\\n\";\n}\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }  // 重载\nint heal(int hp, int amount = 10) { return hp + amount; }  // 默认参数\n\nint main() {\n    greet(\"勇者\");\n    std::cout << add(1, 2) << add(1.5, 2.5) << heal(80) << \"\\n\";\n}',
      analogy: '按值传参 = structuredClone(obj)，按 const 引用传参 = 传只读代理。C++ 默认是前者，所以要显式写 &。',
    },
    links: [
      { name: 'learncpp：函数与传参', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-functions/', type: 'tutorial' },
      { name: 'cppreference：函数重载', url: 'https://en.cppreference.com/w/cpp/language/overload_resolution', type: 'doc' },
    ],
  },
  {
    d: 4, tag: '核心概念', t: '指针 vs 引用：本周最重要的概念',
    desc: '理解取地址 &、解引用 *、指针算术，以及引用与指针的差异；用 JS 引用语义做映射。',
    xp: 80,
    lesson: {
      points: [
        '对象 = 内存中一段字节。&x 取地址，*p 解引用（顺着地址找到对象）',
        '引用 T& 是"对象的别名"，必须初始化、不能为空、不能改绑——类比 TS 里非空的对象引用',
        '指针 T* 是"存地址的变量"，可以为 nullptr、可以重新指向、可以做指针算术——类比可空的引用，且更底层',
        '空指针解引用 = 程序崩溃（段错误），编译器不拦你——没有 TypeError，只有 core dump',
        '现代 C++ 建议：能用引用就用引用；需要"可选/可重指"才用指针，且尽量用智能指针（Day 18-19）',
      ],
      code:
        '#include <iostream>\n\nvoid levelUp(int* hp) { *hp += 10; }   // 指针：可能为空，需解引用\nvoid levelUpRef(int& hp) { hp += 10; } // 引用：必绑对象，直接当原变量用\n\nint main() {\n    int hp = 100;\n    int* p = &hp;      // p 存 hp 的地址\n    int& r = hp;       // r 是 hp 的别名\n    levelUp(p);\n    levelUpRef(hp);\n    std::cout << hp << \" \" << *p << \" \" << r << \"\\n\";  // 120 120 120\n}',
      analogy: 'JS 的对象变量本身就是"引用"，你从没见过地址；C++ 让你亲手拿地址：指针 = 拿着门牌号，引用 = 给房间起了个昵称。',
    },
    links: [
      { name: 'learncpp：指针（重点章节）', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/', type: 'tutorial' },
      { name: 'learncpp：引用', url: 'https://www.learncpp.com/cpp-tutorial/references/', type: 'tutorial' },
      { name: 'cppreference：引用声明', url: 'https://en.cppreference.com/w/cpp/language/reference', type: 'doc' },
    ],
  },
  {
    d: 5, tag: '内存模型', t: '栈与堆：内存到底长什么样',
    desc: '理解栈帧、堆分配 new/delete、内存泄漏与悬空指针，画出程序内存布局图。',
    xp: 80,
    lesson: {
      points: [
        '栈：函数调用自动分配/回收，快但小（约几 MB），局部变量住这里——类比调用栈，出栈即回收',
        '堆：new 手动申请、delete 手动释放，大而慢，忘了 delete = 内存泄漏（JS 有 GC，C++ 没有！）',
        '悬空指针：delete 后继续用指针——JS 里对象没人引用就被 GC，C++ 里被你 delete 的内存还在那，踩了就炸',
        '内存布局：代码段(函数体) / 全局区(static) / 栈(局部变量) / 堆(new 出来的)',
        '数组退化为指针：int arr[5] 传参会丢长度信息，std::vector 才记得住（Day 15）',
      ],
      code:
        '#include <iostream>\n\nint main() {\n    int stackVar = 1;                 // 栈：函数结束自动回收\n    int* heapVar = new int(2);        // 堆：手动申请\n    int* arr = new int[3]{4, 5, 6};   // 堆数组\n\n    std::cout << *heapVar << \" \" << arr[1] << \"\\n\";\n    delete heapVar;      // 忘了 = 内存泄漏\n    delete[] arr;        // 数组用 delete[]\n    heapVar = nullptr;   // 好习惯：置空防悬空\n}',
      analogy: '栈 = 递归调用栈上的临时变量，自动弹出；堆 = 你手动 new 出来的对象，但没有 GC——你就是 JS 引擎的内存管理模块本人。',
    },
    links: [
      { name: 'learncpp：动态内存分配', url: 'https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/', type: 'tutorial' },
      { name: 'cppreference：new 表达式', url: 'https://en.cppreference.com/w/cpp/language/new', type: 'doc' },
      { name: 'Valgrind（内存泄漏检测工具）', url: 'https://valgrind.org/', type: 'tool' },
    ],
  },
  {
    d: 6, tag: '核心概念', t: 'RAII：C++ 最伟大的思想',
    desc: 'Resource Acquisition Is Initialization：用对象生命周期管理资源，理解析构函数如何替代 try/finally。',
    xp: 80,
    lesson: {
      points: [
        'RAII：资源（内存/文件/锁/连接）的获取放在构造函数，释放放在析构函数——对象出作用域析构自动执行',
        '这就是为什么 C++ 没有 finally：析构函数就是 finally，而且是自动的、异常安全的',
        'JS 里没有 RAII（有 GC 但没有确定性析构），所以需要手动 close/try-finally；C++ 作用域结束时保证调用 ~T()',
        'RAII 是智能指针、lock_guard、fstream 一切的基础——先理解它，后面全是它的应用',
        '规则：谁拥有谁释放；所有权(ownership)概念从今天开始贯穿全程',
      ],
      code:
        '#include <iostream>\n\nclass Guard {\npublic:\n    explicit Guard(std::string name) : name_(std::move(name)) {\n        std::cout << \"[\" << name_ << \"] 获得锁\\n\";\n    }\n    ~Guard() { std::cout << \"[\" << name_ << \"] 释放锁\\n\"; }  // 出作用域自动调用\nprivate:\n    std::string name_;\n};\n\nint main() {\n    {\n        Guard g(\"战斗\");   // 进入作用域：构造\n        std::cout << \"战斗中...\\n\";\n    }                    // 离开作用域：析构，绝不忘记\n    std::cout << \"安全返回城镇\\n\";\n}',
      analogy: 'JS: const conn = await open(); try {...} finally { await conn.close(); }。C++: { Conn c; ... } 析构自动 close，抛异常也不会漏。',
    },
    links: [
      { name: 'learncpp：析构函数', url: 'https://www.learncpp.com/cpp-tutorial/destructors/', type: 'tutorial' },
      { name: 'cppreference：RAII', url: 'https://en.cppreference.com/w/cpp/language/raii', type: 'doc' },
    ],
  },
  {
    d: 7, tag: 'OOP', t: '类与封装：struct 的完全体',
    desc: '定义类、访问控制、成员函数、构造函数初始化列表；对比 TS class 的差异。',
    xp: 80,
    lesson: {
      points: [
        'class 成员默认 private，struct 默认 public——其余完全一样（JS class 是糖，C++ class 是内存布局+访问控制的合集）',
        '成员函数定义在类内或类外(类名::函数)；this 是指针，用 this->member（JS 的 this 语义完全不同：没有动态绑定问题）',
        '构造函数用初始化列表 : hp_(hp) 初始化，比函数体内赋值更高效、const 成员必须用它',
        '没有 public/private/protected 之外的字段修饰如 readonly——用 const 成员表达',
        '方法默认按值返回；返回 const std::string& 之类要小心悬空（返回局部变量的引用 = 大忌）',
      ],
      code:
        '#include <iostream>\n#include <string>\n\nclass Hero {\npublic:\n    Hero(std::string name, int hp) : name_(std::move(name)), hp_(hp) {}  // 初始化列表\n\n    void takeDamage(int dmg) { hp_ -= dmg; }        // 修改状态\n    int hp() const { return hp_; }                  // const 方法：不修改 this\n    const std::string& name() const { return name_; }\n\nprivate:                                            // 默认 private\n    std::string name_;\n    int hp_;\n};\n\nint main() {\n    Hero h(\"勇者\", 100);\n    h.takeDamage(30);\n    std::cout << h.name() << \" HP: \" << h.hp() << \"\\n\";\n}',
      analogy: 'TS class 像一张对象形状的"契约"，运行期还是普通对象；C++ class 决定了内存怎么排、哪些成员能被外界摸到，编译期全部确定。',
    },
    links: [
      { name: 'learncpp：类（核心章节）', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-classes/', type: 'tutorial' },
      { name: 'cppreference：类', url: 'https://en.cppreference.com/w/cpp/language/classes', type: 'doc' },
    ],
  },
  {
    d: 8, tag: 'OOP', t: '拷贝、析构与三/五法则',
    desc: '拷贝构造、拷贝赋值、析构函数；Rule of Three/Five/Zero——深浅拷贝的 C++ 版。',
    xp: 80,
    lesson: {
      points: [
        '默认拷贝是"逐成员拷贝"（浅拷贝）：类里有裸指针时两个对象共享同一块堆内存 → 双重 delete 崩溃',
        'Rule of Three：需要自定义析构/拷贝构造/拷贝赋值之一，通常三个都要写（管理资源的类）',
        'Rule of Five（C++11+）：再加移动构造、移动赋值（Day 20）',
        'Rule of Zero：别自己管资源，用 std::vector/std::string/智能指针，让编译器生成的默认函数就正确——首选方案',
        '拷贝构造 T(const T& other)、拷贝赋值 T& operator=(const T& other)，签名要背下来',
      ],
      code:
        '#include <iostream>\n#include <cstring>\n\nclass Buffer {\npublic:\n    explicit Buffer(size_t n) : size_(n), data_(new int[n]{}) {}\n    ~Buffer() { delete[] data_; }                                   // 1. 析构\n    Buffer(const Buffer& o) : size_(o.size_), data_(new int[o.size_]) {  // 2. 拷贝构造：深拷贝\n        std::memcpy(data_, o.data_, size_ * sizeof(int));\n    }\n    Buffer& operator=(const Buffer& o) {                            // 3. 拷贝赋值\n        if (this != &o) { Buffer tmp(o); std::swap(size_, tmp.size_); std::swap(data_, tmp.data_); }\n        return *this;                                               // copy-and-swap 惯用法\n    }\n    int& operator[](size_t i) { return data_[i]; }\nprivate:\n    size_t size_;\n    int* data_;\n};',
      analogy: 'TS 对象赋值本身就是引用共享（浅），没有"拷贝构造"这回事；C++ 每次赋值/传参都可能真的在复制字节，你要决定浅还是深。',
    },
    links: [
      { name: 'learncpp：拷贝构造函数', url: 'https://www.learncpp.com/cpp-tutorial/copy-constructors/', type: 'tutorial' },
      { name: 'Rule of Three/Five/Zero', url: 'https://en.cppreference.com/w/cpp/language/rule_of_three', type: 'doc' },
    ],
  },
  {
    d: 9, tag: 'OOP', t: '运算符重载：让类型像内置类型',
    desc: '重载 +、==、<<、[] 等，理解 std::string 为什么能 s1 + s2。',
    xp: 70,
    lesson: {
      points: [
        '运算符本质是函数：a + b 就是 operator+(a, b)，重载只是给自定义类型定义这些函数',
        '成员运算符(a += b) vs 自由运算符(a + b)：能对称转换的（如 Vector + 标量）用自由函数',
        'operator<< 用于流输出，必须写成自由函数 friend ostream& operator<<(ostream&, const T&)',
        '不要重载 &&、||、,、&——它们失去短路语义，社区公认禁忌',
        'C++20 飞船运算符 <=>：一行搞定全部六种比较，类似实现 valueOf 后自动排序',
      ],
      code:
        '#include <iostream>\n\nclass Vec2 {\npublic:\n    Vec2(double x, double y) : x_(x), y_(y) {}\n    Vec2 operator+(const Vec2& o) const { return {x_ + o.x_, y_ + o.y_}; }\n    bool operator==(const Vec2& o) const { return x_ == o.x_ && y_ == o.y_; }\n    double& operator[](int i) { return i == 0 ? x_ : y_; }   // v[0], v[1]\n    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {\n        return os << \"(\" << v.x_ << \", \" << v.y_ << \")\";\n    }\nprivate:\n    double x_, y_;\n};\n\nint main() {\n    Vec2 a(1, 2), b(3, 4);\n    std::cout << a + b << \"\\n\";   // (4, 6)\n}',
      analogy: 'JS 里 a + b 走 valueOf/Symbol.toPrimitive 这种运行期魔法；C++ 运算符重载是编译期直接生成函数调用，无魔法但有规则。',
    },
    links: [
      { name: 'learncpp：运算符重载', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-operator-overloading/', type: 'tutorial' },
      { name: 'cppreference：运算符重载', url: 'https://en.cppreference.com/w/cpp/language/operators', type: 'doc' },
    ],
  },
  {
    d: 10, tag: 'OOP', t: '继承与多态：virtual 的世界',
    desc: 'public 继承、虚函数、override、抽象类与纯虚函数；对比 TS interface + extends。',
    xp: 80,
    lesson: {
      points: [
        'class Enemy : public Character —— public 继承是"is-a"关系；C++ 还有多重继承（前端没见过，先慎用）',
        'TS 方法重写是运行期天然动态的；C++ 默认是静态绑定！必须写 virtual 才有运行期多态',
        'override 关键字（C++11）让编译器帮你检查"确实重写了"，相当于 TS 的 implements 检查',
        '纯虚函数 virtual void attack() = 0; 使类成为抽象类（不能实例化）≈ 抽象基类/interface',
        '多态必须通过指针或引用使用：Enemy& e = ...; 或 Enemy* —— 按值装进容器会发生"对象切片"(Day 11)',
      ],
      code:
        '#include <iostream>\n#include <memory>\n\nclass Enemy {\npublic:\n    virtual ~Enemy() = default;            // 有虚函数的基类必须虚析构！\n    virtual void attack() const = 0;       // 纯虚：抽象类\n};\n\nclass Slime : public Enemy {\npublic:\n    void attack() const override { std::cout << \"史莱姆撞击！\\n\"; }\n};\nclass Dragon : public Enemy {\npublic:\n    void attack() const override { std::cout << \"龙息喷射！\\n\"; }\n};\n\nint main() {\n    std::unique_ptr<Enemy> e = std::make_unique<Dragon>();\n    e->attack();   // 运行期决定调用哪个 attack：多态\n}',
      analogy: 'TS 里 class implements interface 就自动多态；C++ 的 virtual 是你手动打开多态开关，忘了写 = 调用的永远是基类版本，还编译不报错。',
    },
    links: [
      { name: 'learncpp：虚函数与多态', url: 'https://www.learncpp.com/cpp-tutorial/virtual-functions/', type: 'tutorial' },
      { name: 'cppreference：虚函数', url: 'https://en.cppreference.com/w/cpp/language/virtual', type: 'doc' },
    ],
  },
  {
    d: 11, tag: 'OOP', t: '虚函数表与对象切片',
    desc: '理解 vtable 如何实现动态分发、为什么按值传递/存储会切掉派生部分、虚析构的必要性。',
    xp: 80,
    lesson: {
      points: [
        '每个有虚函数的类有一张 vtable（函数指针表）；每个对象头部藏一个 vptr 指向它——调用虚函数 = 查表二次跳转（JS 的方法查找也是类似的运行期机制）',
        '这就是 C++ 的"动态 dispatch 也要付成本"，而普通函数是编译期直接内联的零成本',
        '对象切片：Enemy e = Dragon{}; 按值赋给基类，Dragon 独有字段被切掉，虚函数也只表现基类行为',
        '基类析构必须 virtual：否则 delete 基类指针时派生类析构不被调用 → 资源泄漏（经典面试题）',
        '容器里装多态对象：std::vector<std::unique_ptr<Enemy>>，或 std::vector<std::reference_wrapper<Enemy>>',
      ],
      code:
        '#include <iostream>\n\nclass Base {\npublic:\n    virtual ~Base() = default;\n    virtual void who() const { std::cout << \"Base\\n\"; }\n};\nclass Derived : public Base {\npublic:\n    void who() const override { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Derived d;\n    Base sliced = d;      // 切片！只保留 Base 部分\n    sliced.who();         // Base（静态拷贝，vptr 也是 Base 的）\n\n    Base& ref = d;\n    ref.who();            // Derived（查 vtable）\n}',
      analogy: '按值装基类 = 把 {type:"dragon", fire:true} 浅拷贝成 {type:"base"}，字段直接丢；引用/指针 = 拿着原对象的引用，类型信息完整。',
    },
    links: [
      { name: 'learncpp：虚函数表', url: 'https://www.learncpp.com/cpp-tutorial/virtual-function-tables/', type: 'tutorial' },
      { name: 'cppreference：delete 与虚析构相关', url: 'https://en.cppreference.com/w/cpp/language/destructor', type: 'doc' },
    ],
  },
  {
    d: 12, tag: '泛型', t: '模板基础：C++ 版的泛型',
    desc: '函数模板与类模板，对比 TS generics：编译期实例化 vs 类型擦除。',
    xp: 80,
    lesson: {
      points: [
        'template <typename T> T max(T a, T b) —— 调用时编译器按实际类型"盖章生成"一个新函数（monomorphization，TS 泛型擦除后只有一个函数）',
        '所以模板代码必须放头文件（实例化时编译器要看到完整定义），链接错误的常见来源',
        '类模板 std::vector<int> 就是 template class 的产物；你也能写自己的 Box<T>',
        '模板没有"类型约束语法"，约束靠概念(concepts, C++20)或编译错误体现——TS 的 extends 约束在 C++20 前全靠报错文本几百行',
        '每个模板实例是不同类型：vector<int> 和 vector<double> 毫无关系，不能互换',
      ],
      code:
        '#include <iostream>\n#include <string>\n\ntemplate <typename T>\nT maxOf(const T& a, const T& b) { return a > b ? a : b; }\n\ntemplate <typename T>\nclass Box {\npublic:\n    explicit Box(T v) : v_(std::move(v)) {}\n    const T& get() const { return v_; }\nprivate:\n    T v_;\n};\n\nint main() {\n    std::cout << maxOf(3, 7) << \" \" << maxOf(std::string(\"剑\"), std::string(\"盾\")) << \"\\n\";\n    Box<int> b(42);\n    std::cout << b.get() << \"\\n\";\n}',
      analogy: 'TS 泛型 = 编辑器里的类型体操，运行后消失；C++ 模板 = 编译器帮你复制粘贴生成 N 份代码（代码膨胀是代价，性能是回报）。',
    },
    links: [
      { name: 'learncpp：函数模板', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-function-templates/', type: 'tutorial' },
      { name: 'cppreference：模板', url: 'https://en.cppreference.com/w/cpp/language/templates', type: 'doc' },
    ],
  },
  {
    d: 13, tag: '泛型', t: '模板进阶：concepts、特化与变参',
    desc: 'C++20 concepts 约束、模板特化、可变参数模板；看懂 STL 报错的能力。',
    xp: 90,
    lesson: {
      points: [
        'concepts 是"TS extends 约束"的正式版：template <std::integral T> —— 不满足直接报一行人话错误',
        '常用概念：std::integral, std::floating_point, std::same_as, std::convertible_to（<concepts> 头文件）',
        '模板特化：为特定类型提供不同实现（template<> struct hash<MyKey>），类似给某个泛型调用写定制版',
        '可变参数模板 template <typename... Args> 是参数个数也泛型化——STL 的 emplace/make_unique 全靠它',
        '实用主义：会读报错比会写高级模板重要；看到 "candidate function not viable" 先检查参数类型',
      ],
      code:
        '#include <iostream>\n#include <concepts>\n\ntemplate <typename T>\nconcept Addable = requires(T a, T b) {   // 类似 TS 的条件类型推断\n    { a + b } -> std::convertible_to<T>;\n};\n\ntemplate <Addable T>\nT sum(T a, T b) { return a + b; }\n\n// 为 const char* 特化\n// template <> int sum<int>(int, int) { ... } 形式略\n\nint main() {\n    std::cout << sum(1, 2) << \"\\n\";\n    // sum(std::string(\"a\"), std::string(\"b\"));  // OK：string 可相加\n}',
      analogy: 'C++20 前：泛型约束全靠编译报错像论文一样长；concepts 之后终于有了 TS 那种 "Type X does not satisfy the constraint" 的一行报错。',
    },
    links: [
      { name: 'cppreference：constraints 与 concepts', url: 'https://en.cppreference.com/w/cpp/language/constraints', type: 'doc' },
      { name: 'learncpp：模板特化', url: 'https://www.learncpp.com/cpp-tutorial/template-specialization/', type: 'tutorial' },
    ],
  },
  {
    d: 14, tag: 'STL', t: 'STL 容器总览：选对数据结构',
    desc: 'vector/list/deque/map/set/unordered_map 的选型心法，对应 JS 数组/Map/Set。',
    xp: 80,
    lesson: {
      points: [
        'std::vector ≈ JS Array（动态数组，绝大多数场景首选）；std::unordered_map ≈ JS Map（哈希表）；std::unordered_set ≈ Set',
        'std::map/std::set 是红黑树（有序，O(log n)），按 key 排序遍历——JS 没有，需要有序字典时用它',
        'std::list 是双向链表：日常几乎不用（缓存不友好），别按 JS/Java 习惯选它',
        '容器只装"值"：装类层次对象要装指针（unique_ptr），避免切片（Day 11）',
        '选型口诀：默认 vector；按键查且要有序 → map；只查快 → unordered_map；去重 → set/unordered_set',
      ],
      code:
        '#include <iostream>\n#include <vector>\n#include <map>\n#include <unordered_map>\n#include <set>\n#include <string>\n\nint main() {\n    std::vector<int> bag = {1, 2, 3};                    // JS: [1,2,3]\n    bag.push_back(4);\n\n    std::unordered_map<std::string, int> gold;           // JS: Map\n    gold[\"城镇\"] = 500;                                   // operator[] 不存在则插入 0\n\n    std::map<int, std::string> sorted{{3, \"c\"}, {1, \"a\"}};  // 按 key 升序\n    for (auto& [k, v] : sorted) std::cout << k << v << \" \";  // 1a 3c\n\n    std::set<int> uniq{3, 1, 3};                         // JS: Set，存 3,1\n}',
      analogy: '把 JS 的 Array/Map/Set 一一对应记牢，你已经会 70% 的 STL 选型；剩下的是"有序"和"连续内存"这两个 JS 没有的维度。',
    },
    links: [
      { name: 'cppreference：容器库', url: 'https://en.cppreference.com/w/cpp/container', type: 'doc' },
      { name: 'learncpp：容器总览', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-the-standard-library/', type: 'tutorial' },
    ],
  },
  {
    d: 15, tag: 'STL', t: 'vector 与 string 深入：连续内存的威力',
    desc: '扩容机制、reserve/resize、capacity、string 的常用操作；理解为什么 vector 是默认容器。',
    xp: 80,
    lesson: {
      points: [
        'vector 扩容 = 重新分配更大内存 + 搬迁所有元素（与 React 的 key 重建类似，开销大），reserve 一次预留可避免反复搬迁',
        'size() 是元素数，capacity() 是已分配容量；push_back 均摊 O(1)，中间插入 O(n)',
        '连续内存 = 缓存友好，遍历比链表快几个数量级——这是 Day 25 性能课的伏笔',
        'std::string 就是 vector<char> + 字符串工具：substr(类似 slice)、find(类似 indexOf)、+=、size()',
        '注意：push_back 可能使已有迭代器/引用失效（内存搬走了），搬迁后别再抓着旧地址不放',
      ],
      code:
        '#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    std::vector<int> v;\n    v.reserve(1000);                        // 预留，避免反复 realloc\n    for (int i = 0; i < 1000; ++i) v.push_back(i);\n    std::cout << \"size=\" << v.size() << \" cap=\" << v.capacity() << \"\\n\";\n\n    v.erase(v.begin() + 2);                 // 类似 splice(2,1)\n    v.insert(v.begin(), 0);                 // 头插 O(n)！\n\n    std::string s = \"Hello, Hero\";\n    std::cout << s.substr(7) << \" \" << s.find(\"Hero\") << \" \" << s.size() << \"\\n\";\n}',
      analogy: 'JS Array 看似随便 push，V8 内部也在做同样的扩容搬迁——C++ 只是把这个机制暴露给你手动优化。',
    },
    links: [
      { name: 'cppreference：vector', url: 'https://en.cppreference.com/w/cpp/container/vector', type: 'doc' },
      { name: 'cppreference：string', url: 'https://en.cppreference.com/w/cpp/string/basic_string', type: 'doc' },
    ],
  },
  {
    d: 16, tag: 'STL', t: '迭代器与算法：STL 的灵魂',
    desc: 'begin/end、输入/输出迭代器、sort/find/accumulate/transform 等常用算法；对比 JS 数组方法。',
    xp: 80,
    lesson: {
      points: [
        '迭代器是"泛化的指针"：begin() 指第一个元素，end() 指最后一个元素的下一个位置（左闭右开 [begin, end)）',
        '算法不依赖容器，只依赖迭代器区间：sort(v.begin(), v.end()) —— 与容器解耦的设计（相当于 JS 把方法抽成独立函数）',
        '常用算法：sort、find_if(类似 find)、count_if、accumulate(类似 reduce)、transform(类似 map)、remove_if',
        'erase-remove 惯用法：v.erase(std::remove_if(...), v.end()) 真正删除——C++20 用 std::erase_if(v, pred) 一步到位',
        'lambda 谓词：[](int x) { return x % 2 == 0; }，与 JS 箭头函数几乎一一对应（捕获列表 [] 是多出来的概念，Day 21 细讲）',
      ],
      code:
        '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\n\nint main() {\n    std::vector<int> v{5, 2, 8, 1, 9, 3};\n\n    std::sort(v.begin(), v.end());                       // JS: v.sort((a,b)=>a-b)\n    auto it = std::find(v.begin(), v.end(), 8);          // JS: indexOf\n    int sum = std::accumulate(v.begin(), v.end(), 0);    // JS: reduce((a,b)=>a+b, 0)\n\n    std::erase_if(v, [](int x) { return x % 2 != 0; });  // 只留偶数\n    for (int x : v) std::cout << x << \" \";               // range-for\n    std::cout << \"| sum=\" << sum << \"\\n\";\n}',
      analogy: 'JS: arr.map/filter/reduce 是数组上的方法；STL: 算法是独立函数 + 迭代器参数，任何容器都能用同一套 sort/filter。',
    },
    links: [
      { name: 'cppreference：算法库', url: 'https://en.cppreference.com/w/cpp/algorithm', type: 'doc' },
      { name: 'learncpp：迭代器与算法', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-iterators/', type: 'tutorial' },
    ],
  },
  {
    d: 17, tag: 'STL', t: 'map/set 深入与 string_view',
    desc: 'operator[] 的陷阱、insert_or_assign、结构化绑定遍历、C++17 string_view 免拷贝。',
    xp: 70,
    lesson: {
      points: [
        'map[key] 的坑：key 不存在时会"自动插入默认值"——查询也变写入；只查用 .find() 或 .contains()',
        '结构化绑定 for (auto& [key, value] : m) 与 JS 的 for (const [k, v] of m) 一模一样',
        '自定义类型做 key：需要提供 operator< （std::map）或 std::hash 特化（unordered_map）',
        'std::string_view 是"字符串的视图"（指针+长度）：substr 不再复制，类似零拷贝 slice；但它不拥有内存，别让被引用的字符串先死',
        'unordered_map 遍历顺序不确定——别依赖它，与 JS Map 的插入序不同',
      ],
      code:
        '#include <iostream>\n#include <map>\n#include <string>\n#include <string_view>\n\nint main() {\n    std::map<std::string, int> bag;\n    bag[\"药水\"] += 1;                          // 不存在则插入 0 再 +1，这里 OK\n    if (bag.contains(\"圣剑\")) { /* 查询别用 [] */ }\n    bag.insert_or_assign(\"药水\", 5);\n\n    for (const auto& [item, count] : bag)\n        std::cout << item << \" x\" << count << \"\\n\";\n\n    std::string log = \"2026-10-22,ERROR,crash\";\n    std::string_view level(log.data() + 11, 5);   // 零拷贝切出 \"ERROR\"\n    std::cout << level << \"\\n\";\n}',
      analogy: 'string_view 之于 string ≈ Buffer.subarray 之于 Buffer：只记指针和长度，零拷贝，但必须保证原缓冲活着。',
    },
    links: [
      { name: 'cppreference：map', url: 'https://en.cppreference.com/w/cpp/container/map', type: 'doc' },
      { name: 'cppreference：string_view', url: 'https://en.cppreference.com/w/cpp/string/basic_string_view', type: 'doc' },
    ],
  },
  {
    d: 18, tag: '现代C++', t: 'unique_ptr：独占所有权',
    desc: 'make_unique、所有权转移 std::move、为什么裸 new/delete 应该绝迹。',
    xp: 90,
    lesson: {
      points: [
        'std::unique_ptr<T> 是 RAII 的指针版：出作用域自动 delete——从此告别内存泄漏',
        '独占所有权：不可拷贝、只能 std::move 转移——所有权概念第一次落地（谁 move 走了，原指针变 nullptr）',
        '创建用 std::make_unique<T>(args...)（C++14）：异常安全 + 一行声明',
        '用法像指针：p.get()（借出不拥有）、*p、p->、if (p) 判空；函数签名用 T* 或 T& 表示"借用"',
        '规则：新代码 99% 场景 = vector/string + unique_ptr，禁止裸 new/delete（Core Guidelines 强制）',
      ],
      code:
        '#include <iostream>\n#include <memory>\n#include <vector>\n\nclass Quest {\npublic:\n    explicit Quest(std::string n) : name_(std::move(n)) { std::cout << \"接取 \" << name_ << \"\\n\"; }\n    ~Quest() { std::cout << \"完成/放弃 \" << name_ << \"\\n\"; }\n    void report() const { std::cout << \"进行中: \" << name_ << \"\\n\"; }\nprivate:\n    std::string name_;\n};\n\nvoid run(Quest* q) { q->report(); }          // 借用，不拥有\n\nint main() {\n    auto q = std::make_unique<Quest>(\"屠龙\");\n    run(q.get());                             // get() 出借\n    auto taken = std::move(q);                // 转移所有权，q 变空\n    if (!q) std::cout << \"q 已移交\\n\";\n}   // taken 出作用域自动析构',
      analogy: 'unique_ptr = "这个对象归我，我离开时负责销毁"；std::move = 把引用从我的变量转到你的变量，同时我的变量被清空——JS 里 GC 帮你做的事，这里显式化。',
    },
    links: [
      { name: 'learncpp：智能指针与 move', url: 'https://www.learncpp.com/cpp-tutorial/move-semantics/', type: 'tutorial' },
      { name: 'cppreference：unique_ptr', url: 'https://en.cppreference.com/w/cpp/memory/unique_ptr', type: 'doc' },
    ],
  },
  {
    d: 19, tag: '现代C++', t: 'shared_ptr 与 weak_ptr：共享所有权',
    desc: '引用计数、循环引用问题与 weak_ptr 破环；理解何时用 shared 何时用 unique。',
    xp: 90,
    lesson: {
      points: [
        'shared_ptr 用引用计数（类似 JS 的可达性 GC 但手动化）：最后一个 shared_ptr 析构时对象才销毁',
        'std::make_shared<T>() 一次分配对象+控制块，比 shared_ptr<T>(new T) 高效',
        '循环引用（A→B→A）计数永不归零 = 泄漏，正是 JS 引擎要解决的环引用问题——用 weak_ptr 打破环',
        'weak_ptr 观察但不增加计数：用 .lock() 尝试升级为 shared_ptr，失败说明对象已死（安全版弱引用）',
        '默认选 unique_ptr；确需共享才用 shared_ptr（它有原子计数开销）；父子/缓存关系用 weak_ptr',
      ],
      code:
        '#include <iostream>\n#include <memory>\n\nclass Party;\nclass Hero {\npublic:\n    ~Hero() { std::cout << \"Hero 离队\\n\"; }\n    std::weak_ptr<Party> party;              // weak 打破环！\n};\nclass Party {\npublic:\n    void join(std::shared_ptr<Hero> h) { hero_ = std::move(h); hero_->party = std::weak_ptr<Party>{}; }\n    std::shared_ptr<Hero> hero_;\n};\n\nint main() {\n    auto hero = std::make_shared<Hero>();\n    std::cout << hero.use_count() << \"\\n\";   // 1\n\n    std::shared_ptr<Hero> alias = hero;      // 计数 2\n    hero.reset();                            // 计数 1，对象还活着\n    if (std::shared_ptr<Hero> locked = alias) {\n        std::cout << \"还活着\\n\";\n    }\n}',
      analogy: 'shared_ptr ≈ 手动实现引用计数 GC；weak_ptr ≈ WeakRef。循环引用你天天在 JS 里踩不着，是因为引擎帮你处理了——C++ 要你自己用 weak_ptr 破环。',
    },
    links: [
      { name: 'cppreference：shared_ptr', url: 'https://en.cppreference.com/w/cpp/memory/shared_ptr', type: 'doc' },
      { name: 'cppreference：weak_ptr', url: 'https://en.cppreference.com/w/cpp/memory/weak_ptr', type: 'doc' },
    ],
  },
  {
    d: 20, tag: '现代C++', t: '移动语义与右值引用：零拷贝的关键',
    desc: '左值/右值、移动构造、std::move 的真相；理解 string/vector 返回为什么不再慢。',
    xp: 100,
    lesson: {
      points: [
        '左值有名字可取地址；右值是临时对象（字面量、函数返回值）—— TS 没有这个分层',
        'T(T&& other) 移动构造：把对方的资源"偷"过来（指针接管），对方置空——比深拷贝便宜几个数量级',
        'std::move 并不移动任何东西！它只是把表达式转换成右值引用（类型转换 cast），真正移动的是构造函数',
        '移动后对象处于"有效但未指定"状态：能析构、能赋新值，别再读它的内容',
        'RVO/NRVO：返回局部对象时编译器直接在返回位置构造，连移动都省了——所以"返回大对象"在现代 C++ 是便宜的',
      ],
      code:
        '#include <iostream>\n#include <string>\n#include <utility>\n\nclass Sword {\npublic:\n    explicit Sword(std::string n) : name_(std::move(n)) { std::cout << \"锻造 \" << name_ << \"\\n\"; }\n    Sword(Sword&& o) noexcept : name_(std::move(o.name_)) {   // 移动构造：偷资源\n        std::cout << \"-> 传剑（原剑已空）\\n\";\n    }\n    const std::string& name() const { return name_; }\nprivate:\n    std::string name_;\n};\n\nSword forge() { return Sword(\"王者之剑\"); }   // RVO：直接在外部构造\n\nint main() {\n    Sword s1(\"铁剑\");\n    Sword s2 = std::move(s1);    // 移动：s1 的名字被偷走\n    Sword s3 = forge();          // RVO，无拷贝无移动\n}',
      analogy: 'std::move = TS 里的类型断言 as，它只改"标签"；真正的搬家由移动构造函数完成。像把 Git 仓库的 ownership 转移：不是复制文件，是改 remote。',
    },
    links: [
      { name: 'learncpp：移动语义（全系列）', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-move-semantics/', type: 'tutorial' },
      { name: 'cppreference：std::move', url: 'https://en.cppreference.com/w/cpp/utility/move', type: 'doc' },
    ],
  },
  {
    d: 21, tag: '现代C++', t: 'lambda、捕获与完美转发',
    desc: 'lambda 捕获值/引用、泛型 lambda、mutable；std::forward 与转发引用一瞥。',
    xp: 90,
    lesson: {
      points: [
        '[捕获](参数) -> 返回类型 { 体 }；捕获是 C++ lambda 独有的：按值 [x] 拷贝一份，按引用 [&x] 绑定——JS 闭包永远是引用捕获',
        '[=] 全按值、[&] 全按引用（危险：悬空引用，异步回调慎用——和 React stale closure 是亲戚问题）',
        '泛型 lambda [](auto a, auto b) —— 一行写出的迷你模板；mutable 让按值捕获可修改',
        '回调习惯：参数用函数类型 std::function<void(int)>（有开销）或模板参数（零开销）',
        'std::forward + T&& 转发引用：包装函数时保留左右值属性——std::make_unique 就是这么转发的，今天能看懂即可',
      ],
      code:
        '#include <iostream>\n#include <functional>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    int buff = 5;\n    auto addBuff = [buff](int atk) { return atk + buff; };      // 按值拷贝\n    auto drain = [&buff](int dmg) { buff -= dmg; return buff; }; // 按引用，改外部\n    auto key = [](auto p) { return p.first; };                   // 泛型 lambda\n\n    std::vector<std::pair<std::string, int>> items{{\"剑\", 3}, {\"盾\", 1}};\n    std::sort(items.begin(), items.end(),\n              [](auto& a, auto& b) { return a.second < b.second; });\n\n    std::function<void(int)> log = [](int v) { std::cout << v << \"\\n\"; };\n    log(addBuff(100));\n}',
      analogy: 'JS 闭包只引用外部变量；C++ lambda 是个匿名类对象，捕获的变量是它的成员——按值捕获 = 拍快照，按引用捕获 = 拿着原变量地址（原变量死了就悬空）。',
    },
    links: [
      { name: 'cppreference：lambda', url: 'https://en.cppreference.com/w/cpp/language/lambda', type: 'doc' },
      { name: 'learncpp：lambda 捕获', url: 'https://www.learncpp.com/cpp-tutorial/lambda-captures/', type: 'tutorial' },
    ],
  },
  {
    d: 22, tag: '工程', t: '异常、错误处理与 noexcept',
    desc: 'try/catch/throw、栈展开、异常安全；以及错误码/optional/expected 的取舍。',
    xp: 80,
    lesson: {
      points: [
        'throw 抛出 → 沿调用栈向上找 catch，途中析构所有局部对象（栈展开）——RAII 保证不泄漏，这就是 Day 6 的回报',
        'catch (const std::exception& e) 按引用捕获；catch (...) 兜底——异常要按类型匹配，不是字符串',
        'noexcept 承诺"不抛"：移动构造标 noexcept 才能让 vector 扩容时选择移动而非拷贝（Day 20 的坑）',
        '现代风格：可预期的失败（查不到 key、文件不存在）用 std::optional / std::expected(C++23) 返回，异常留给真正的异常情况——类似 Rust 的 Result 心法',
        '很多游戏/嵌入式团队干脆禁用异常（-fno-exceptions），错误码 + optional 是通行替代——看团队约定',
      ],
      code:
        '#include <iostream>\n#include <optional>\n#include <stdexcept>\n#include <string>\n\nstd::optional<int> parseHp(const std::string& s) {\n    try { return std::stoi(s); }\n    catch (const std::invalid_argument&) { return std::nullopt; }  // 可预期失败：不用异常传播\n}\n\nvoid enterDungeon(int level) {\n    if (level < 10) throw std::runtime_error(\"等级不足\");   // 真异常：中断流程\n}\n\nint main() {\n    if (auto hp = parseHp(\"150\")) std::cout << *hp << \"\\n\";   // optional 用法，类比 JS 的 null 检查\n    try { enterDungeon(1); }\n    catch (const std::exception& e) { std::cout << \"Error: \" << e.what() << \"\\n\"; }\n}',
      analogy: 'optional<T> ≈ T | null；expected<T,E> ≈ Result<T,E>；异常 ≈ throw 但没有 async/await 的自动传播，全靠栈展开 + RAII 兜底。',
    },
    links: [
      { name: 'cppreference：异常处理', url: 'https://en.cppreference.com/w/cpp/language/exceptions', type: 'doc' },
      { name: 'cppreference：optional', url: 'https://en.cppreference.com/w/cpp/utility/optional', type: 'doc' },
    ],
  },
  {
    d: 23, tag: '并发', t: 'std::thread 并发入门',
    desc: '创建/join/detach 线程、数据竞争的产生；对比 JS 单线程事件循环。',
    xp: 100,
    lesson: {
      points: [
        'JS 是单线程事件循环（worker 也是独立隔离的）；C++ std::thread 是真正的并行，多个线程同时读写同一内存',
        'thread ctor 直接接受 lambda：std::thread t([]{...}); 必须 join() 或 detach()，否则析构时 std::terminate 崩溃',
        '数据竞争：两个线程同时写同一变量 = UB，且不会报错，只是偶发数据错乱——最难调的 bug 类型',
        '传参注意：thread 拷贝参数，std::ref(x) 才传引用；捕获局部变量按引用 + 线程生命周期错开 = 悬空引用',
        'join 是"等它结束"——类比 await，但它是真并行不是调度',
      ],
      code:
        '#include <iostream>\n#include <thread>\n#include <vector>\n\nint main() {\n    std::vector<std::thread> workers;\n    for (int i = 0; i < 4; ++i) {\n        workers.emplace_back([i] {\n            std::cout << \"worker \" << i << \" 在真并行地打怪\\n\";\n        });\n    }\n    for (auto& t : workers) t.join();   // 等全部结束，类似 Promise.all\n    std::cout << \"战斗结束\\n\";\n}',
      analogy: 'JS: 一条车道，靠事件循环轮询；C++: 四条车道真并行，所以需要红绿灯（mutex）和不可变数据（const）来避免相撞。',
    },
    links: [
      { name: 'cppreference：thread', url: 'https://en.cppreference.com/w/cpp/thread/thread', type: 'doc' },
      { name: 'learncpp：move 与并发基础', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-std-thread/', type: 'tutorial' },
    ],
  },
  {
    d: 24, tag: '并发', t: 'mutex、lock_guard 与 atomic',
    desc: '互斥量保护共享数据、lock_guard 的 RAII 用法、atomic 计数器；认识死锁。',
    xp: 100,
    lesson: {
      points: [
        'mutex.lock()/unlock() 手动加锁容易忘，必须用 std::lock_guard（RAII，Day 6 的实战版）或 std::scoped_lock',
        '共享数据 + mutex 应封装成一个类，锁跟着数据走——保护的是数据不是代码',
        'std::atomic<int> 无锁原子操作：计数器这种简单场景用它，比 mutex 便宜',
        '死锁：两个线程互相等对方的锁——固定加锁顺序，或 std::scoped_lock(m1, m2) 一次性拿两把锁',
        '数据竞争检测：g++ -fsanitize=thread 编译跑一遍（TSan），CI 里必开',
      ],
      code:
        '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <atomic>\n#include <vector>\n\nstd::mutex mtx;\nlong gold = 0;\nstd::atomic<int> hits{0};\n\nint main() {\n    std::vector<std::thread> ts;\n    for (int i = 0; i < 4; ++i) ts.emplace_back([] {\n        for (int j = 0; j < 10000; ++j) {\n            std::lock_guard<std::mutex> lock(mtx);  // RAII 上锁\n            gold += 1;\n            hits.fetch_add(1, std::memory_order_relaxed);  // 原子，无需锁\n        }\n    });\n    for (auto& t : ts) t.join();\n    std::cout << gold << \" \" << hits << \"\\n\";   // 40000 40000，不会少\n}',
      analogy: 'mutex = JS 里不存在的"代码段互斥"；lock_guard = try/finally 里 release 的自动版。JS 帮你避免了这些，C++ 让你亲手写红绿灯。',
    },
    links: [
      { name: 'cppreference：mutex 与锁', url: 'https://en.cppreference.com/w/cpp/thread/mutex', type: 'doc' },
      { name: 'cppreference：atomic', url: 'https://en.cppreference.com/w/cpp/atomic/atomic', type: 'doc' },
      { name: 'ThreadSanitizer', url: 'https://github.com/google/sanitizers', type: 'tool' },
    ],
  },
  {
    d: 25, tag: '性能', t: '缓存友好与零开销抽象',
    desc: '为什么 vector 比 list 快、branch predictor、测量优先；理解 C++ 的"零开销"哲学。',
    xp: 90,
    lesson: {
      points: [
        'CPU 访问内存按缓存行(64B)批量加载：连续内存遍历时预取命中，链表节点散落堆上 = 每跳一次一次缓存未命中',
        '所以 vector 快于 list 不是算法复杂度问题，是硬件问题——现代 C++ 性能优化第一课：数据布局',
        'C++ 哲学：零开销抽象——你不用到的特性不付成本；virtual/lambda/std::function 各自的开销要心里有数',
        '测量优先：用 perf / benchmark（Google Benchmark）说话，别猜',
        '编译器优化等级 -O2/-O3 会内联、向量化——Debug 和 Release 性能差 10 倍是常态，性能测试必须用 Release',
      ],
      code:
        '// 性能对比实验：连续 vs 跳跃访问\n#include <chrono>\n#include <iostream>\n#include <vector>\n\nusing Clock = std::chrono::steady_clock;\n\nint main() {\n    constexpr int N = 10\'000\'000;   // 单引号数字分隔符\n    std::vector<int> data(N, 1);\n\n    auto t0 = Clock::now();\n    long sum = 0;\n    for (int x : data) sum += x;     // 顺序：缓存全命中，飞快\n    auto t1 = Clock::now();\n\n    std::cout << \"sum=\" << sum << \" 耗时 \"\n              << std::chrono::duration_cast<std::chrono::milliseconds>(t1 - t0).count()\n              << \"ms（试试改成随机下标访问对比）\\n\";\n}',
      analogy: 'JS 引擎花 20 年优化的 hidden class / inline cache，就是为了让动态代码接近 C++ 的连续内存直读——C++ 里这些优化点直接由数据结构选择决定。',
    },
    links: [
      { name: 'Google Benchmark', url: 'https://github.com/google/benchmark', type: 'tool' },
      { name: 'C++ Core Guidelines：性能', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-performance', type: 'doc' },
      { name: 'perf profiling 教程', url: 'https://www.brendangregg.com/perf.html', type: 'tutorial' },
    ],
  },
  {
    d: 26, tag: '现代C++', t: '现代语法糖：结构化绑定、optional、ranges',
    desc: 'C++17/20/23 让 C++ 写起来更像现代语言：结构化绑定、if 初始化、ranges 管道。',
    xp: 80,
    lesson: {
      points: [
        'if (auto it = m.find(k); it != m.end()) {...} —— if 内声明 + 判断，作用域收紧（TS 没有，但很香）',
        '结构化绑定 auto [x, y] = point; 全函数可用，不只 for 循环',
        'std::ranges（C++20）：ranges::sort(v) 免写 begin/end，v | views::filter(pred) | views::transform(f) 管道式 = JS 的 filter/map 链',
        'std::variant + std::visit：类型安全 unions，类似可辨识联合 discriminated union',
        '观点：现代 C++（20/23）写起来已接近 TS 的舒适度，老教程的写法（裸指针、手写循环）可以淘汰了',
      ],
      code:
        '#include <iostream>\n#include <map>\n#include <ranges>\n#include <vector>\n#include <string>\n\nint main() {\n    std::map<std::string, int> bag{{\"药水\", 3}, {\"卷轴\", 1}, {\"矿石\", 9}};\n\n    if (auto it = bag.find(\"药水\"); it != bag.end()) {\n        std::cout << it->second << \"\\n\";\n    }\n\n    auto potions = bag\n        | std::views::filter([](auto& p) { return p.first.contains(\"药\"); })\n        | std::views::transform([](auto& p) { return p.first; });\n    for (const auto& name : potions) std::cout << name << \" \";\n    std::cout << \"\\n\";\n\n    auto [x, y] = std::pair{3, 4};   // 结构化绑定\n}',
      analogy: 'ranges 管道 = items.filter(...).map(...)，只是方向用 | 从左到右；variant = TS 的联合类型 + 穷尽检查。',
    },
    links: [
      { name: 'cppreference：ranges', url: 'https://en.cppreference.com/w/cpp/ranges', type: 'doc' },
      { name: 'C++23 速览', url: 'https://en.cppreference.com/w/cpp/23', type: 'doc' },
    ],
  },
  {
    d: 27, tag: '工程', t: 'CMake、包管理与工程化',
    desc: '用 CMake 组织多文件项目、引入第三方库（vcpkg/Conan）、配置测试与格式化。',
    xp: 80,
    lesson: {
      points: [
        'npm 有 package.json，C++ 有 CMakeLists.txt（构建系统）+ vcpkg/Conan（包管理）——生态碎片但已标准化很多',
        '最小 CMake：cmake_minimum_required → project → add_executable → target_link_libraries，然后 cmake -B build && cmake --build build',
        'target_link_libraries 给目标链接库；find_package 找系统/已安装的第三方库',
        '测试框架 Catch2 / GoogleTest；格式化 clang-format（对应 prettier）+ clang-tidy（对应 eslint）',
        '现代 CMake 指南：一切围绕 target 设置属性（include 路径、选项），不要全局变量式写法',
      ],
      code:
        '# CMakeLists.txt\ncmake_minimum_required(VERSION 3.20)\nproject(hero LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 20)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\nadd_executable(hero src/main.cpp src/hero.cpp)\ntarget_include_directories(hero PRIVATE include)\n\n# 引入第三方库（vcpkg 安装后）\n# find_package(fmt CONFIG REQUIRED)\n# target_link_libraries(hero PRIVATE fmt::fmt)\n\n# 命令：\n# cmake -B build -DCMAKE_BUILD_TYPE=Release\n# cmake --build build',
      analogy: 'CMake ≈ 拿着 package.json + tsconfig + vite 配置合体；vcpkg ≈ npm；clang-format/tidy ≈ prettier/eslint。装好这套，工程体验立刻现代化。',
    },
    links: [
      { name: 'Modern CMake（最好的入门书）', url: 'https://cliutils.gitlab.io/modern-cmake/', type: 'tutorial' },
      { name: 'vcpkg 包管理器', url: 'https://vcpkg.io/', type: 'tool' },
      { name: 'Catch2 测试框架', url: 'https://github.com/catchorg/Catch2', type: 'repo' },
    ],
  },
  {
    d: 28, tag: '项目', t: '小项目 I：JSON 解析器',
    desc: '手写迷你 JSON 解析器（递归下降），综合运用 variant、智能指针、string_view、错误处理。',
    xp: 120,
    lesson: {
      points: [
        '递归下降：json = object | array | string | number | true/false/null，每种一个函数，递归嵌套——把文法直接翻译成代码',
        '用 std::variant<Null, Bool, double, std::string, Array, Object> 表示 JSON 值——Day 26 的 variant 实战',
        '数组/对象用 vector<unique_ptr<Value>> 存储：观察 unique_ptr 如何在容器里管理多态对象',
        '解析失败抛 std::runtime_error 带行列号，或返回 expected——两种风格都体验',
        '完成后与真实库 nlohmann/json 的 API 对比，体会"好用的 C++ 库长什么样"',
      ],
      code:
        '// 骨架示意（完整版自己补齐）\n#include <memory>\n#include <string>\n#include <variant>\n#include <vector>\n\nstruct Value;\nusing Object = std::vector<std::pair<std::string, std::unique_ptr<Value>>>;\nusing Array = std::vector<std::unique_ptr<Value>>;\n\nstruct Value {\n    std::variant<std::nullptr_t, bool, double, std::string,\n                 Array, Object> data;\n};\n\nclass Parser {\npublic:\n    explicit Parser(std::string_view src) : src_(src) {}\n    std::unique_ptr<Value> parse() { return parseValue(); }\nprivate:\n    std::unique_ptr<Value> parseValue();     // 按首字符分发：{ [ \" 数字 t f n\n    std::unique_ptr<Value> parseObject();\n    std::unique_ptr<Value> parseArray();\n    std::string_view src_;\n    size_t pos_ = 0;\n};',
      analogy: '这相当于用 TS 手写一个 JSON.parse：思路一样，但你要亲自管理每个节点的内存（unique_ptr 托管），而不是靠 GC 兜底。',
    },
    links: [
      { name: 'nlohmann/json（对标成品）', url: 'https://github.com/nlohmann/json', type: 'repo' },
      { name: '递归下降解析入门', url: 'https://www.learncpp.com/cpp-tutorial/chapter-t-summary-and-quiz/', type: 'tutorial' },
    ],
  },
  {
    d: 29, tag: '项目', t: '小项目 II：线程池',
    desc: '实现固定大小线程池（queue + mutex + condition_variable），吃透并发的经典套路。',
    xp: 120,
    lesson: {
      points: [
        '线程池 = 工作队列（task queue）+ N 个 worker 线程循环取任务执行——Node.js 的 libuv 线程池原理相同',
        'std::queue 不是线程安全的：push 和 pop 都要锁；空队列时 worker 需要等待——condition_variable + predicate 循环',
        'std::condition_variable.wait(lock, pred)：等"队列非空"通知，类似 Promise 的挂起/唤醒，但更底层',
        '任务用 std::function<void()> 存队列（有类型擦除开销）；返回值版本要 std::future/packaged_task——进阶可做',
        '提交 std::move(task) 进队列；析构时设置停止标志 + notify_all + join 所有 worker',
      ],
      code:
        '// 核心骨架\n#include <condition_variable>\n#include <functional>\n#include <mutex>\n#include <queue>\n#include <thread>\n#include <vector>\n\nclass ThreadPool {\npublic:\n    explicit ThreadPool(size_t n) {\n        for (size_t i = 0; i < n; ++i)\n            workers_.emplace_back([this] {\n                for (;;) {\n                    std::unique_lock<std::mutex> lock(mtx_);\n                    cv_.wait(lock, [this] { return stop_ || !tasks_.empty(); });\n                    if (stop_ && tasks_.empty()) return;\n                    auto task = std::move(tasks_.front());\n                    tasks_.pop();\n                    lock.unlock();          // 执行任务时不要持锁！\n                    task();\n                }\n            });\n    }\n    void submit(std::function<void()> t) {\n        { std::lock_guard<std::mutex> lock(mtx_); tasks_.push(std::move(t)); }\n        cv_.notify_one();\n    }\n    std::vector<std::thread> workers_;\n    std::queue<std::function<void()>> tasks_;\n    std::mutex mtx_;\n    std::condition_variable cv_;\n    bool stop_ = false;\n};',
      analogy: '这就是 libuv / Node worker_threads 的内脏：一个锁保护的任务队列 + 睡在条件变量上的工人。写完它，你对"JS 是怎么做到非阻塞的"会有肌肉记忆级的理解。',
    },
    links: [
      { name: 'cppreference：condition_variable', url: 'https://en.cppreference.com/w/cpp/thread/condition_variable', type: 'doc' },
      { name: 'C++ Concurrency in Action（书，进阶）', url: 'https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition', type: 'doc' },
    ],
  },
  {
    d: 30, tag: '总结', t: '毕业：知识地图与下一步路线',
    desc: '回顾 30 天主线，整理 C++ 心智模型清单，规划后续方向（后端/游戏/嵌入式/开源）。',
    xp: 100,
    lesson: {
      points: [
        '心智模型清单：编译期 vs 运行期 / 所有权与 RAII / 栈与堆 / 值语义 vs 引用语义 / 零开销抽象——这五条是 C++ 的"第一性原理"',
        '前端 → C++ 最大迁移点：没有 GC（自己管所有权）、没有运行期类型自由（模板编译期决定）、真并行（需要锁）',
        '你已经拥有前端优势：类型系统直觉（TS→concepts/模板）、异步思维（事件循环→线程池）、组件化思维（RAII 类设计）',
        '下一步路线：读《Effective Modern C++》→ 做开源贡献（fmt/json/asio）→ 方向专精（游戏:Unreal/引擎；后端:asio/grpc；嵌入式:RTOS）',
        '保持练习：LeetCode 用 C++ 刷题是性价比最高的肌肉记忆训练',
      ],
      code:
        '// 30 天地图（按周回顾）\n// W1: 编译/类型/指针/内存/RAII       ← 世界的地基\n// W2: 类/拷贝/运算符/多态/vtable     ← OOP 的 C++ 版\n// W3: 模板/STL/智能指针/移动语义     ← 现代武库\n// W4: lambda/异常/并发/性能/工程化    ← 真实战场的模样\n// W5: 两个小项目                      ← 综合演出\n//\n// 用 Compiler Explorer 复习：把任何疑问代码丢进 godbolt.org 看编译器怎么说\n#include <iostream>\nint main() { std::cout << "毕业快乐，勇者！\\n"; }',
      analogy: '学 C++ 就像前端工程师第一次写汇编时代的引擎内部：Day 1 的"编译"到 Day 29 的"线程池"，你补齐的是从"用语言"到"懂机器"的那一层。',
    },
    links: [
      { name: 'Effective Modern C++（进阶书）', url: 'https://www.oreilly.com/library/view/effective-modern-c/9781491908419/', type: 'doc' },
      { name: 'Awesome C++（生态大全）', url: 'https://github.com/fffaraz/awesome-cpp', type: 'repo' },
      { name: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', type: 'doc' },
    ],
  },
];

export const EXERCISES: Record<number, Exercise> = {
  1: {
    prompt: '修改 Day1 的 Hello 程序：输出你的名字和当前年份（年份用 constexpr 常量），编译运行成功。',
    starter: '#include <iostream>\n\nint main() {\n    // TODO: 定义 constexpr int year = 2026;\n    // TODO: 输出 "你好, <你的名字>! 今年是 <year> 年"\n    return 0;\n}\n',
    answer:
      '#include <iostream>\n\nint main() {\n    constexpr int year = 2026;\n    std::cout << "你好, 勇者! 今年是 " << year << " 年\\n";\n    return 0;\n}\n',
    expected: '你好, 勇者! 今年是 2026 年',
  },
  2: {
    prompt: '写一个程序：定义 int hp=100、double crit=2.5、const int maxHp=100；hp 恢复 30 后输出三者，并用 sizeof 打印 int 和 double 的字节数。',
    starter: '#include <iostream>\n\nint main() {\n    // TODO\n}\n',
    answer:
      '#include <iostream>\n\nint main() {\n    int hp = 100;\n    double crit = 2.5;\n    const int maxHp = 100;\n    hp += 30;\n    std::cout << hp << " " << crit << " " << maxHp << "\\n";\n    std::cout << sizeof(int) << " " << sizeof(double) << "\\n";\n    return 0;\n}\n',
    expected: '130 2.5 100\\n4 8',
  },
  3: {
    prompt: '实现重载函数 damage(int) 与 damage(double)：int 版减血并返回剩余，double 版按比例削减后取整返回；再用 const 引用传一个 std::string 打印技能名。',
    starter: '#include <iostream>\n#include <string>\n\nint damage(int hp, int dmg) {\n    // TODO\n}\ndouble damage(int hp, double ratio) {\n    // TODO: hp *= (1 - ratio) 后转 int 返回\n}\n\nint main() {\n    // TODO: 调用两个重载并输出\n}\n',
    answer:
      '#include <iostream>\n#include <string>\n\nint damage(int hp, int dmg) { return hp - dmg; }\ndouble damage(int hp, double ratio) { return hp * (1 - ratio); }\n\nvoid castSkill(const std::string& name) { std::cout << "施放: " << name << "\\n"; }\n\nint main() {\n    std::cout << damage(100, 30) << "\\n";    // 70\n    std::cout << damage(100, 0.5) << "\\n";   // 50\n    castSkill("烈焰斩");\n    return 0;\n}\n',
    expected: '70\\n50\\n施放: 烈焰斩',
  },
  4: {
    prompt: '写两个函数 swapByPointer(int*, int*) 和 swapByReference(int&, int&)，在 main 中分别交换两个变量，验证两种方式都生效。',
    starter: '#include <iostream>\n\nvoid swapByPointer(int* a, int* b) {\n    // TODO\n}\nvoid swapByReference(int& a, int& b) {\n    // TODO\n}\n\nint main() {\n    int x = 1, y = 2;\n    // TODO: 分别调用并输出结果\n}\n',
    answer:
      '#include <iostream>\n\nvoid swapByPointer(int* a, int* b) {\n    int tmp = *a; *a = *b; *b = tmp;\n}\nvoid swapByReference(int& a, int& b) {\n    int tmp = a; a = b; b = tmp;\n}\n\nint main() {\n    int x = 1, y = 2;\n    swapByPointer(&x, &y);\n    std::cout << x << y << "\\n";  // 21\n    swapByReference(x, y);\n    std::cout << x << y << "\\n";  // 12\n    return 0;\n}\n',
    expected: '21\\n12',
  },
  5: {
    prompt: '在堆上 new 一个 int 和一个长度为 4 的 int 数组并初始化，输出后正确 delete / delete[]，并把指针置为 nullptr。',
    starter: '#include <iostream>\n\nint main() {\n    // TODO: new int(42)\n    // TODO: new int[4]{1,2,3,4}\n    // 输出后释放，记得 delete[] 与置空\n}\n',
    answer:
      '#include <iostream>\n\nint main() {\n    int* p = new int(42);\n    int* arr = new int[4]{1, 2, 3, 4};\n    std::cout << *p << " " << arr[2] << "\\n";\n    delete p;\n    delete[] arr;\n    p = nullptr;\n    arr = nullptr;\n    return 0;\n}\n',
    expected: '42 3',
  },
  6: {
    prompt: '写一个 RAII 的 Timer 类：构造时记录起点，析构时输出耗时（用 <chrono>）；在 main 的一个嵌套作用域里使用它。',
    starter: '#include <chrono>\n#include <iostream>\n\nclass Timer {\n    // TODO: 构造记录 start_，析构打印耗时\n};\n\nint main() {\n    {\n        Timer t;\n        // 假装做了一些工作\n    }  // TODO: 离开作用域应自动打印耗时\n}\n',
    answer:
      '#include <chrono>\n#include <iostream>\n\nclass Timer {\npublic:\n    Timer() : start_(std::chrono::steady_clock::now()) {}\n    ~Timer() {\n        auto ms = std::chrono::duration_cast<std::chrono::microseconds>(\n            std::chrono::steady_clock::now() - start_).count();\n        std::cout << "耗时 " << ms << " 微秒\\n";\n    }\nprivate:\n    std::chrono::steady_clock::time_point start_;\n};\n\nint main() {\n    { Timer t; for (volatile int i = 0; i < 100000; ++i) {} }\n    std::cout << "计时结束\\n";\n    return 0;\n}\n',
    expected: '耗时 <若干微秒> 微秒\\n计时结束',
  },
  7: {
    prompt: '定义 Hero 类：私有成员 name_（std::string）与 hp_（int），构造函数用初始化列表，const 方法 hp() 与 takeDamage(int)（血量不低于 0），在 main 中演示。',
    starter: '#include <iostream>\n#include <string>\n\nclass Hero {\n    // TODO\n};\n\nint main() {\n    // TODO\n}\n',
    answer:
      '#include <iostream>\n#include <string>\n\nclass Hero {\npublic:\n    Hero(std::string name, int hp) : name_(std::move(name)), hp_(hp) {}\n    void takeDamage(int dmg) { hp_ = (hp_ > dmg) ? hp_ - dmg : 0; }\n    int hp() const { return hp_; }\nprivate:\n    std::string name_;\n    int hp_;\n};\n\nint main() {\n    Hero h("勇者", 100);\n    h.takeDamage(120);\n    std::cout << h.hp() << "\\n";  // 0\n    return 0;\n}\n',
    expected: '0',
  },
  8: {
    prompt: '给 Day8 的 Buffer 类补齐拷贝构造与拷贝赋值（深拷贝），在 main 中验证：b2 = b1 之后修改 b1 不影响 b2。',
    starter: '#include <cstring>\n#include <iostream>\n\nclass Buffer {\npublic:\n    explicit Buffer(size_t n) : size_(n), data_(new int[n]{}) {}\n    ~Buffer() { delete[] data_; }\n    // TODO: 拷贝构造、拷贝赋值\n    int& operator[](size_t i) { return data_[i]; }\nprivate:\n    size_t size_;\n    int* data_;\n};\n',
    answer:
      '#include <cstring>\n#include <iostream>\n#include <utility>\n\nclass Buffer {\npublic:\n    explicit Buffer(size_t n) : size_(n), data_(new int[n]{}) {}\n    ~Buffer() { delete[] data_; }\n    Buffer(const Buffer& o) : size_(o.size_), data_(new int[o.size_]) {\n        std::memcpy(data_, o.data_, size_ * sizeof(int));\n    }\n    Buffer& operator=(const Buffer& o) {\n        if (this != &o) {\n            Buffer tmp(o);\n            std::swap(size_, tmp.size_);\n            std::swap(data_, tmp.data_);\n        }\n        return *this;\n    }\n    int& operator[](size_t i) { return data_[i]; }\nprivate:\n    size_t size_;\n    int* data_;\n};\n\nint main() {\n    Buffer b1(4);\n    b1[0] = 7;\n    Buffer b2(2);\n    b2 = b1;\n    b1[0] = 100;\n    std::cout << b2[0] << "\\n";  // 7，未被影响\n    return 0;\n}\n',
    expected: '7',
  },
  9: {
    prompt: '为 Vec2 类补充 operator+= （成员函数）与自由函数的 operator*（标量缩放，支持 2*v 形式），并重载 << 输出。',
    starter: '#include <iostream>\n\nclass Vec2 {\npublic:\n    Vec2(double x, double y) : x_(x), y_(y) {}\n    // TODO: +=, *, <<\nprivate:\n    double x_, y_;\n};\n\nint main() {\n    Vec2 v(1, 1);\n    // TODO: v += Vec2(2,3); 输出 (3,4)；再 2*v 输出 (6,8)\n}\n',
    answer:
      '#include <iostream>\n\nclass Vec2 {\npublic:\n    Vec2(double x, double y) : x_(x), y_(y) {}\n    Vec2& operator+=(const Vec2& o) { x_ += o.x_; y_ += o.y_; return *this; }\n    Vec2 operator*(double k) const { return {x_ * k, y_ * k}; }\n    friend Vec2 operator*(double k, const Vec2& v) { return v * k; }\n    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {\n        return os << "(" << v.x_ << ", " << v.y_ << ")";\n    }\nprivate:\n    double x_, y_;\n};\n\nint main() {\n    Vec2 v(1, 1);\n    v += Vec2(2, 3);\n    std::cout << v << "\\n";\n    std::cout << 2 * v << "\\n";\n    return 0;\n}\n',
    expected: '(3, 4)\\n(6, 8)',
  },
  10: {
    prompt: '定义抽象基类 Skill（纯虚 use() 与虚析构）及两个派生类，用 std::unique_ptr<Skill> 装入容器统一调用。',
    starter: '#include <iostream>\n#include <memory>\n#include <vector>\n\nclass Skill {\n    // TODO: 纯虚 use()，虚析构\n};\n\nint main() {\n    // TODO: vector<unique_ptr<Skill>>，遍历调用 use()\n}\n',
    answer:
      '#include <iostream>\n#include <memory>\n#include <vector>\n\nclass Skill {\npublic:\n    virtual ~Skill() = default;\n    virtual void use() const = 0;\n};\nclass Fireball : public Skill {\npublic:\n    void use() const override { std::cout << "火球术!\\n"; }\n};\nclass Heal : public Skill {\npublic:\n    void use() const override { std::cout << "治疗术!\\n"; }\n};\n\nint main() {\n    std::vector<std::unique_ptr<Skill>> skills;\n    skills.push_back(std::make_unique<Fireball>());\n    skills.push_back(std::make_unique<Heal>());\n    for (const auto& s : skills) s->use();\n    return 0;\n}\n',
    expected: '火球术!\\n治疗术!',
  },
};

export const QUIZZES: Record<number, Quiz[]> = {
  1: [
    { q: 'C++ 程序从源码到可执行文件经历的正确顺序是？', options: ['编译→预处理→汇编→链接', '预处理→编译→汇编→链接', '预处理→汇编→编译→链接', '链接→编译→预处理→汇编'], answer: 1, explain: '先 #include 预处理粘贴头文件，再编译成汇编，汇编成目标文件，最后链接合并成可执行文件。' },
    { q: '#include 与 JS 的 import 最本质的区别是？', options: ['#include 支持循环引用', '#include 是把头文件内容原样复制进来', '#include 在运行期加载模块', '没有区别'], answer: 1, explain: '#include 是预处理的"复制粘贴"，import 是语言级模块机制。这也是为什么头文件要加 include guard。' },
  ],
  2: [
    { q: 'signed int 溢出在 C++ 中会发生什么？', options: ['自动回绕到最小值', '抛出异常', '未定义行为（UB），编译器可做任何假设', '静默变成 double'], answer: 2, explain: '有符号整数溢出是 UB，不像 Java 那样保证回绕。这也是编译器能激进优化的原因之一。' },
    { q: 'constexpr int v = someRuntimeFn(); 会怎样？', options: ['正常编译', 'v 变成运行期求值', '编译错误（constexpr 要求编译期可求值）', '警告但通过'], answer: 2, explain: 'constexpr 变量必须用编译期可求值的表达式初始化，否则直接编译失败。' },
  ],
  3: [
    { q: 'void f(std::string s) 与 void f(const std::string& s) 的关键区别是？', options: ['没有区别', '前者按值拷贝字符串（可能昂贵），后者零拷贝只读', '后者可以修改字符串', '前者更安全'], answer: 1, explain: '按值传参会构造一个副本；const 引用是"只读别名"，大对象（string/vector）默认应传 const 引用。' },
    { q: 'C++ 的函数重载与 TS 的 overload 声明的区别？', options: ['完全一样', 'TS 重载只是类型标注，C++ 重载生成真正不同的函数并静态分发', 'C++ 重载在运行期分发', 'TS 重载生成多个函数'], answer: 1, explain: 'C++ 按参数类型在编译期选择具体实现；TS 的 overload 只是给一个函数写多个签名，JS 层面仍是一个函数。' },
  ],
  4: [
    { q: '引用（T&）与指针（T*）的关键差异是？', options: ['引用可以为空', '引用必须初始化且不能改绑，指针可以', '指针不能指向对象', '引用占更多内存'], answer: 1, explain: '引用是别名：必绑、非空、不可重绑；指针是存地址的变量：可空、可重指、可算术。' },
    { q: '解引用空指针会发生什么？', options: ['抛出 NullPointerException', '编译错误', '运行期崩溃（段错误），编译器不拦截', '返回默认值'], answer: 2, explain: 'C++ 没有 null 检查机制，解引用空指针是未定义行为，典型表现是段错误崩溃。' },
  ],
  5: [
    { q: '栈与堆的主要差异是？', options: ['堆更快', '栈自动分配回收、快但小；堆手动管理、大但慢', '栈在硬盘上', '没有差异'], answer: 1, explain: '栈随函数调用帧自动进出（几 MB 上限），堆由 new/delete 手动管理，忘了释放就泄漏。' },
    { q: 'delete 之后继续使用该指针，这叫？', options: ['双重释放', '悬空指针，未定义行为', '内存泄漏', '正常的'], answer: 1, explain: '悬空指针：内存已归还但指针还指着那里，读写都是 UB。泄漏则是忘了 delete。' },
  ],
  6: [
    { q: 'RAII 的核心思想是？', options: ['资源获取靠垃圾回收', '把资源生命周期绑定到对象生命周期：构造获取、析构释放', '所有资源放全局变量', '用 try/finally 管理资源'], answer: 1, explain: '对象出作用域析构必然执行，资源释放因此自动且异常安全——这是 C++ 没有 finally 的原因。' },
    { q: '函数中途抛异常，已构造的局部 RAII 对象会怎样？', options: ['资源泄漏', '保持不变', '栈展开时依次析构，资源自动释放', '编译错误'], answer: 2, explain: '栈展开会析构沿途局部对象，正是 RAII 保证异常安全的关键。' },
  ],
  7: [
    { q: 'class 与 struct 的区别是？', options: ['struct 不能有成员函数', '仅默认访问级别不同：class 默认 private，struct 默认 public', 'struct 不能继承', 'class 更快'], answer: 1, explain: '除了默认 private/public（以及默认继承方式），两者完全等价。' },
    { q: '为什么构造函数要用初始化列表 hp_(hp) 而不是函数体内赋值？', options: ['写法更短', '初始化列表直接构造成员，const 成员和引用成员只能用它，也避免先默认构造再赋值', '没有区别', '函数体内不能访问成员'], answer: 1, explain: '成员在进入函数体前已完成默认构造；初始化列表直接按目标值构造，且 const/引用成员只能在此初始化。' },
  ],
  8: [
    { q: '类含裸指针成员时，默认拷贝会发生什么？', options: ['深拷贝，安全', '浅拷贝：两个对象共享同一块内存，析构时双重 delete', '编译错误', '自动调用 GC'], answer: 1, explain: '默认逐成员拷贝只复制指针值，导致两个对象管理同一资源——所以需要 Rule of Three。' },
    { q: 'Rule of Zero 指的是？', options: ['不写任何类', '用 vector/string/智能指针等 RAII 成员，不手写析构/拷贝函数，让默认函数天然正确', '类不能有成员', '写零个构造函数'], answer: 1, explain: '成员本身是 RAII 类型时，编译器生成的默认拷贝/析构就是对的——这是现代 C++ 首选。' },
  ],
  9: [
    { q: '为什么 operator<< 通常写成自由函数而不是成员函数？', options: ['成员函数更快', '因为左操作数是 ostream（流对象），不是你的类型，无法给 ostream 加成员', '规定如此', '为了支持重载'], answer: 1, explain: 'a << b 的左参是 std::ostream，你无法修改标准库类，所以用 friend/自由函数。' },
    { q: '下面哪个运算符重载是社区公认禁忌？', options: ['operator+', 'operator==', 'operator&&（失去短路语义）', 'operator[]'], answer: 2, explain: '重载 &&/|| 会把短路求值变成函数调用，两个操作数都会被求值，违背直觉。' },
  ],
  10: [
    { q: '派生类重写基类方法，若基类方法没标 virtual，会怎样？', options: ['自动多态', '静态绑定：按指针/引用的静态类型调用基类版本', '编译错误', '运行期报错'], answer: 1, explain: 'C++ 默认静态绑定；没有 virtual 就没有运行期多态，且编译器不报错——经典坑。' },
    { q: '为什么有虚函数的基类析构函数要声明为 virtual？', options: ['提升性能', '否则通过基类指针 delete 派生类对象时，派生类析构不会被调用，造成资源泄漏', '语法要求', '避免切片'], answer: 1, explain: '虚析构保证 delete 基类指针时走正确的析构链，是管理类层次的必修项。' },
  ],
  11: [
    { q: '虚函数的动态分发机制依赖什么？', options: ['运行时类型反射', '对象内的 vptr 指向类的 vtable（函数指针表）', '编译器硬编码 switch', 'RTTI 表'], answer: 1, explain: '每个对象头部有 vptr，指向所属类的 vtable；虚调用 = 查表取函数指针再调用。' },
    { q: 'Base b = Derived{}; 这种按值赋给基类的现象叫？', options: ['向上转型', '对象切片：Derived 独有部分被切掉', '深拷贝', '多态'], answer: 1, explain: '按值只能装下 Base 大小的部分，派生字段丢失、vptr 归 Base——多态必须用引用/指针。' },
  ],
  12: [
    { q: '模板与 TS 泛型的本质区别？', options: ['没区别', '模板在编译期按类型实例化出多份代码（单态化），TS 泛型擦除为一份', '模板在运行期分发', 'TS 泛型生成多份代码'], answer: 1, explain: 'vector<int> 和 vector<double> 是编译期生成的两个完全独立的类型；TS 泛型运行期只是同一个函数。' },
    { q: '模板实现代码为什么要放头文件？', options: ['习惯问题', '实例化时编译器必须看到完整定义，否则链接错误', '编译更快', '模板不能放 .cpp'], answer: 1, explain: '编译器在调用点实例化模板，需要看到完整定义；放 .cpp 会导致未定义引用。' },
  ],
  13: [
    { q: 'C++20 concepts 的作用是？', options: ['运行期类型检查', '给模板参数加编译期约束，报错更友好', '替代虚函数', '自动推导返回类型'], answer: 1, explain: 'concepts 相当于 TS 泛型约束 extends 的正式版：不满足约束时报一行人话错误而不是几百行模板报错。' },
    { q: '模板特化是指？', options: ['模板编译失败', '为特定类型提供专门实现，如 template<> 的定制版本', '模板的运行期重载', '删除模板'], answer: 1, explain: '特化让你对某个具体类型走不同路径，例如为自定义 key 特化 std::hash。' },
  ],
  14: [
    { q: '日常开发中 STL 容器的默认首选是？', options: ['std::list', 'std::vector（连续内存，缓存友好）', 'std::deque', 'std::map'], answer: 1, explain: 'vector 是默认容器：连续内存、尾部增删 O(1)、遍历快。list 几乎只用于特定 splice 场景。' },
    { q: '需要按键查找且按 key 有序遍历，应选？', options: ['unordered_map', 'std::map（红黑树，有序 O(log n)）', 'vector', 'set'], answer: 1, explain: 'map 是有序关联容器（红黑树）；unordered_map 更快但不保证顺序。' },
  ],
  15: [
    { q: 'vector 扩容时会发生什么？', options: ['原地增长不搬数据', '分配更大的新内存并搬迁所有元素，旧迭代器/引用失效', '抛异常', '链到新内存块'], answer: 1, explain: '扩容 = realloc + 搬迁，因此 reserve 预留能避免反复搬迁；搬迁后旧地址全部失效。' },
    { q: 'vector 的 size() 与 capacity() 的区别？', options: ['同一个值', 'size 是元素个数，capacity 是已分配的容量（≥ size）', 'size 是容量', 'capacity 是元素上限'], answer: 1, explain: 'size 会随 push_back 增长，capacity 只在扩容时变大；reserve 直接调 capacity。' },
  ],
  16: [
    { q: 'STL 迭代器区间 [begin, end) 的 end 指向？', options: ['最后一个元素', '最后一个元素的下一个位置（哨兵）', '容器外随机地址', '第一个元素'], answer: 1, explain: '左闭右开区间，end 是"越界哨兵"，遍历循环 while (it != end) 才能优雅终止。' },
    { q: 'C++20 之前从 vector 中"真正删除"满足条件的元素，惯用法是？', options: ['remove_if 就够了', 'erase(remove_if(...), end())（erase-remove 惯用法）', 'delete 关键字', 'filter'], answer: 1, explain: 'remove_if 只是"搬移+返回新逻辑末尾"，真正的删除要配合 erase；C++20 可直接 std::erase_if。' },
  ],
  17: [
    { q: 'map[key] 在 key 不存在时的行为是？', options: ['抛异常', '自动插入默认值并返回引用（查询变写入！）', '返回 nullptr', '编译错误'], answer: 1, explain: 'operator[] 有副作用；只查存在性用 find/contains，避免无意插入。' },
    { q: 'string_view 的正确使用前提是？', options: ['无需任何前提', '被引用的底层字符串必须比视图活得久（小心悬空视图）', '必须手动 delete', '只能指向字面量'], answer: 1, explain: 'string_view 不拥有内存，只是指针+长度；原 string 销毁后视图悬空。' },
  ],
  18: [
    { q: 'unique_ptr 的核心特性是？', options: ['可拷贝共享', '独占所有权：不可拷贝，只能 std::move 转移，出作用域自动释放', '引用计数', '需要手动 delete'], answer: 1, explain: '独占+自动释放是它替代裸 new/delete 的根本；转移后原指针变空。' },
    { q: '函数参数想"借用"但不拥有 unique_ptr 管理的对象，应传？', options: ['unique_ptr<T> 按值（转移所有权）', 'T* 或 T&（裸指针/引用表示借用）', 'shared_ptr<T>', 'const unique_ptr<T>&'], answer: 1, explain: '签名用 T*/T& 表达"我只借用"；接收 unique_ptr 按值意味着接管所有权，语义完全不同。' },
  ],
  19: [
    { q: 'shared_ptr 循环引用导致的问题是？', options: ['编译错误', '引用计数永不归零，对象泄漏——需 weak_ptr 打破环', '线程死锁', '自动解决'], answer: 1, explain: 'A、B 互相持 shared_ptr 计数都是 1，谁也释放不了；把其中一边改成 weak_ptr 即可。' },
    { q: 'weak_ptr 的正确用法是？', options: ['直接 -> 访问对象', '先 .lock() 升级为 shared_ptr，失败说明对象已死', '手动 delete', '和 shared_ptr 一样'], answer: 1, explain: 'weak_ptr 不增加计数、不能直接访问；lock() 返回 shared_ptr 或空，是安全的弱引用。' },
  ],
  20: [
    { q: 'std::move(x) 实际做了什么？', options: ['立刻搬移 x 的内存', '只是把 x 转换成右值引用（一个 cast），真正的搬移由移动构造/赋值完成', '复制 x', '释放 x'], answer: 1, explain: 'std::move 不移动任何东西，它只是"贴上可移动的标签"；移动发生在接收方的移动构造函数里。' },
    { q: '返回局部大对象（如 vector）在现代 C++ 中性能如何？', options: ['必然深拷贝，很慢', '靠 RVO/NRVO 通常零拷贝，即使没有也走移动，代价极低', '会泄漏', '必须返回指针'], answer: 1, explain: '返回值优化直接在调用方构造对象；C++11 起还有移动兜底——"返回值必须用指针"是老古董观念。' },
  ],
  21: [
    { q: '[&] 按引用捕获 lambda 后，把 lambda 存起来异步执行，最可能的风险是？', options: ['性能下降', '被捕获的局部变量已析构，悬空引用（类似 JS 闭包但 JS 不会悬空）', '编译错误', 'lambda 被复制'], answer: 1, explain: 'JS 闭包会延长变量生命周期；C++ 按引用捕获不延长，原变量死了引用就悬空——异步回调默认按值捕获。' },
    { q: '与 JS 箭头函数最接近的 C++ 写法？', options: ['函数指针', 'lambda：[](args) { body }（泛型 lambda [](auto x) 更接近）', 'std::function 必须用', '仿函数类'], answer: 1, explain: 'lambda 是匿名可调用对象；[] 捕获列表是 C++ 独有的（决定拷贝还是引用外部变量）。' },
  ],
  22: [
    { q: '异常抛出后，控制流如何回到合适的 catch？', options: ['返回错误码', '栈展开：沿调用栈向上找匹配类型，途中析构局部对象', '全局跳转表', '重启程序'], answer: 1, explain: '栈展开逐层退出函数并析构局部对象（RAII 兜底），直到找到类型匹配的 catch。' },
    { q: '"文件不存在"这类可预期的失败，现代风格推荐？', options: ['抛异常', '返回 std::optional / std::expected，让调用方显式处理', 'assert', '静默返回默认值'], answer: 1, explain: '可预期的失败用值传递错误（optional/expected ≈ T|null / Result），异常留给真正的异常情况。' },
  ],
  23: [
    { q: 'std::thread 对象析构前若未 join() 或 detach()，会发生？', options: ['自动 join', 'std::terminate 直接终止程序', '线程泄漏但无害', '编译错误'], answer: 1, explain: '可 join 的 thread 析构时程序直接 terminate——每个线程路径都必须显式 join/detach。' },
    { q: 'C++ 多线程与 JS 并发模型的根本差异？', options: ['C++ 更慢', 'C++ 是真并行共享内存（需锁），JS 是单线程事件循环（worker 隔离）', 'JS 也能共享内存随便读写', '没有差异'], answer: 1, explain: 'JS 里你永远碰不到数据竞争；C++ 多线程默认共享内存，不加锁就有 race condition（UB）。' },
  ],
  24: [
    { q: '保护共享数据的首选锁用法？', options: ['手动 lock/unlock', 'std::lock_guard / scoped_lock（RAII 自动解锁）', 'atomic 包所有类型', '不加锁靠运气'], answer: 1, explain: '手动 unlock 在异常路径会漏；lock_guard 出作用域自动释放——又是 RAII。' },
    { q: '简单计数器在多线程下递增，最合适的方案？', options: ['普通 int += 1', 'std::atomic<int> 的 fetch_add（无锁原子）', '全局 mutex 才安全', 'volatile'], answer: 1, explain: '普通 int += 1 是读-改-写三步，会丢更新；atomic 提供硬件级原子操作；volatile 与线程安全无关。' },
  ],
  25: [
    { q: '遍历大数组时 vector 远快于 list 的根本原因？', options: ['vector 算法更优', '连续内存对 CPU 缓存友好（缓存行预取），list 节点散落导致缓存未命中', 'list 有锁', '编译器偏爱 vector'], answer: 1, explain: '硬件层面的差异：顺序访问命中缓存行，链表每次跳转可能一次内存访问——性能差可达数量级。' },
    { q: '关于 C++ 性能优化，正确的流程是？', options: ['凭直觉改代码', '用 Release 构建 + profiler（perf/Google Benchmark）测量后再优化', '多加线程', '全改指针'], answer: 1, explain: '测量优先：Debug 和 Release 差 10 倍，没数据的优化大多是白费。' },
  ],
  26: [
    { q: 'if (auto it = m.find(k); it != m.end()) {...} 这个 if-init 语法的好处是？', options: ['更快', '变量作用域限制在 if/else 内，防止泄漏到外部', '自动判空', '等价于 try/catch'], answer: 1, explain: 'C++17 的 if 初始化语句：it 只在 if/else 中可见，减少名字污染——TS 里没有对应物。' },
    { q: 'std::views::filter(...) | std::views::transform(...) 组合成的机制叫？', options: ['回调地狱', 'ranges 管道（惰性求值），类似 JS 的 filter/map 链', '模板特化', '流式 IO'], answer: 1, explain: 'C++20 ranges 用 | 从左到右组合视图，惰性逐元素求值——是 JS 数组链式调用的零分配版。' },
  ],
  27: [
    { q: 'C++ 生态里与 npm 对应的包管理器是？', options: ['CMake', 'vcpkg / Conan', 'make', 'clang-format'], answer: 1, explain: 'CMake 是构建系统（≈构建脚本+tsconfig），vcpkg/Conan 负责装第三方库（≈npm）。' },
    { q: '现代 CMake 的核心原则？', options: ['全局设置变量', '一切围绕 target 设置属性（include 路径、链接库、编译选项）', '手写编译命令', '只用 Makefile'], answer: 1, explain: 'target_link_libraries / target_include_directories 让依赖关系显式传播，替代老式的全局 include_directories。' },
  ],
  28: [
    { q: '递归下降解析 JSON 时，遇到 "{" 字符应该？', options: ['直接返回 null', '递归调用 parseObject，循环解析键值对直到 "}"', '跳过整行', '抛异常结束'], answer: 1, explain: '每个文法符号对应一个函数，嵌套结构递归调用——文法直接翻译成代码，这是解析器的通用模式。' },
    { q: 'JSON 值类型（null/bool/number/string/array/object）最适合用哪个 C++ 结构表达？', options: ['union', 'std::variant<...> + unique_ptr 存嵌套结构', '虚基类只能这样', 'void*'], answer: 1, explain: 'variant 是类型安全的可辨识联合；嵌套的 array/object 需要堆分配，用 unique_ptr 管理生命周期。' },
  ],
  29: [
    { q: '线程池中 worker 在队列为空时应该？', options: ['忙等循环', 'condition_variable.wait(lock, pred) 挂起，等任务提交时被 notify 唤醒', '退出线程', 'sleep(1)'], answer: 1, explain: 'cv.wait 带谓词的挂起/唤醒是标准套路：既不烧 CPU，也不会错过通知（谓词防虚假唤醒）。' },
    { q: 'worker 从队列取出任务后为什么先解锁再执行任务？', options: ['无所谓', '持锁执行会让其他 worker 排队等待，锁应只保护队列操作本身', '编译要求', '防止内存泄漏'], answer: 1, explain: '锁的粒度原则：只保护共享数据（队列），耗时任务在锁外执行，否则并发变串行。' },
  ],
  30: [
    { q: '前端开发者转 C++ 最需要重建的心智是？', options: ['语法差异', '没有 GC 的所有权思维：谁创建谁释放、RAII、值语义 vs 引用语义', '调试技巧', '编辑器配置'], answer: 1, explain: '所有权/生命周期是 C++ 的一切主线：RAII、智能指针、移动语义都是它的展开。' },
    { q: '30 天后性价比最高的继续练习方式？', options: ['只读书不动手', '用 C++ 刷 LeetCode + 把 godbolt 当 playground 看编译器行为', '背标准', '换一门语言'], answer: 1, explain: '刷题积累肌肉记忆，Compiler Explorer 让你直观看到抽象背后的机器码——两者都在动手中学习。' },
  ],
};

export const RESOURCES: Record<number, { name: string; url: string; type: 'doc' | 'tutorial' | 'tool' | 'repo' }[]> = {
  1: [
    { name: 'cppreference（C++ 标准参考，圣经级）', url: 'https://en.cppreference.com/w/', type: 'doc' },
    { name: 'learncpp.com（最好的免费系统教程）', url: 'https://www.learncpp.com/', type: 'tutorial' },
    { name: 'Compiler Explorer 在线编译器', url: 'https://godbolt.org/', type: 'tool' },
  ],
  2: [
    { name: 'cppreference：Fundamental types', url: 'https://en.cppreference.com/w/cpp/language/types', type: 'doc' },
    { name: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', type: 'doc' },
  ],
  3: [
    { name: 'cppreference：Functions', url: 'https://en.cppreference.com/w/cpp/language/functions', type: 'doc' },
    { name: 'learncpp：Pass by value/reference', url: 'https://www.learncpp.com/cpp-tutorial/pass-by-lvalue-reference/', type: 'tutorial' },
  ],
  4: [
    { name: 'learncpp：Pointers 全系列', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/', type: 'tutorial' },
    { name: 'cppreference：Reference declaration', url: 'https://en.cppreference.com/w/cpp/language/reference', type: 'doc' },
  ],
  5: [
    { name: 'Valgrind 内存检测', url: 'https://valgrind.org/', type: 'tool' },
    { name: 'AddressSanitizer 使用指南', url: 'https://github.com/google/sanitizers', type: 'tool' },
    { name: 'learncpp：Dynamic allocation', url: 'https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/', type: 'tutorial' },
  ],
  6: [
    { name: 'cppreference：RAII', url: 'https://en.cppreference.com/w/cpp/language/raii', type: 'doc' },
    { name: 'learncpp：Destructors', url: 'https://www.learncpp.com/cpp-tutorial/destructors/', type: 'tutorial' },
  ],
  7: [
    { name: 'cppreference：Classes', url: 'https://en.cppreference.com/w/cpp/language/classes', type: 'doc' },
    { name: 'learncpp：Classes 全系列', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-classes/', type: 'tutorial' },
  ],
  8: [
    { name: 'cppreference：Rule of Three/Five/Zero', url: 'https://en.cppreference.com/w/cpp/language/rule_of_three', type: 'doc' },
    { name: 'learncpp：Copy constructors', url: 'https://www.learncpp.com/cpp-tutorial/copy-constructors/', type: 'tutorial' },
  ],
  9: [
    { name: 'cppreference：Operator overloading', url: 'https://en.cppreference.com/w/cpp/language/operators', type: 'doc' },
    { name: 'learncpp：Operator overloading', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-operator-overloading/', type: 'tutorial' },
  ],
  10: [
    { name: 'learncpp：Virtual functions', url: 'https://www.learncpp.com/cpp-tutorial/virtual-functions/', type: 'tutorial' },
    { name: 'cppreference：Virtual', url: 'https://en.cppreference.com/w/cpp/language/virtual', type: 'doc' },
  ],
  11: [
    { name: 'learncpp：Virtual function tables', url: 'https://www.learncpp.com/cpp-tutorial/virtual-function-tables/', type: 'tutorial' },
    { name: 'cppreference：Object slicing 相关（delete/析构）', url: 'https://en.cppreference.com/w/cpp/language/destructor', type: 'doc' },
  ],
  12: [
    { name: 'cppreference：Templates', url: 'https://en.cppreference.com/w/cpp/language/templates', type: 'doc' },
    { name: 'learncpp：Function templates', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-function-templates/', type: 'tutorial' },
  ],
  13: [
    { name: 'cppreference：Constraints and concepts', url: 'https://en.cppreference.com/w/cpp/language/constraints', type: 'doc' },
    { name: 'learncpp：Template specialization', url: 'https://www.learncpp.com/cpp-tutorial/template-specialization/', type: 'tutorial' },
  ],
  14: [
    { name: 'cppreference：Containers library', url: 'https://en.cppreference.com/w/cpp/container', type: 'doc' },
    { name: 'learncpp：The standard library', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-the-standard-library/', type: 'tutorial' },
  ],
  15: [
    { name: 'cppreference：std::vector', url: 'https://en.cppreference.com/w/cpp/container/vector', type: 'doc' },
    { name: 'cppreference：std::string', url: 'https://en.cppreference.com/w/cpp/string/basic_string', type: 'doc' },
  ],
  16: [
    { name: 'cppreference：Algorithms library', url: 'https://en.cppreference.com/w/cpp/algorithm', type: 'doc' },
    { name: 'learncpp：Iterators', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-iterators/', type: 'tutorial' },
  ],
  17: [
    { name: 'cppreference：std::map', url: 'https://en.cppreference.com/w/cpp/container/map', type: 'doc' },
    { name: 'cppreference：std::string_view', url: 'https://en.cppreference.com/w/cpp/string/basic_string_view', type: 'doc' },
  ],
  18: [
    { name: 'cppreference：unique_ptr', url: 'https://en.cppreference.com/w/cpp/memory/unique_ptr', type: 'doc' },
    { name: 'learncpp：Move semantics（智能指针基础）', url: 'https://www.learncpp.com/cpp-tutorial/move-semantics/', type: 'tutorial' },
  ],
  19: [
    { name: 'cppreference：shared_ptr', url: 'https://en.cppreference.com/w/cpp/memory/shared_ptr', type: 'doc' },
    { name: 'cppreference：weak_ptr', url: 'https://en.cppreference.com/w/cpp/memory/weak_ptr', type: 'doc' },
  ],
  20: [
    { name: 'learncpp：Introduction to move semantics', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-move-semantics/', type: 'tutorial' },
    { name: 'cppreference：std::move', url: 'https://en.cppreference.com/w/cpp/utility/move', type: 'doc' },
  ],
  21: [
    { name: 'cppreference：Lambda expressions', url: 'https://en.cppreference.com/w/cpp/language/lambda', type: 'doc' },
    { name: 'learncpp：Lambda captures', url: 'https://www.learncpp.com/cpp-tutorial/lambda-captures/', type: 'tutorial' },
  ],
  22: [
    { name: 'cppreference：Exceptions', url: 'https://en.cppreference.com/w/cpp/language/exceptions', type: 'doc' },
    { name: 'cppreference：optional', url: 'https://en.cppreference.com/w/cpp/utility/optional', type: 'doc' },
  ],
  23: [
    { name: 'cppreference：std::thread', url: 'https://en.cppreference.com/w/cpp/thread/thread', type: 'doc' },
    { name: 'learncpp：std::thread 入门', url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-std-thread/', type: 'tutorial' },
  ],
  24: [
    { name: 'cppreference：Thread synchronization（mutex/atomic）', url: 'https://en.cppreference.com/w/cpp/thread.html', type: 'doc' },
    { name: 'ThreadSanitizer（数据竞争检测）', url: 'https://github.com/google/sanitizers', type: 'tool' },
  ],
  25: [
    { name: 'Google Benchmark', url: 'https://github.com/google/benchmark', type: 'tool' },
    { name: 'perf 性能分析教程', url: 'https://www.brendangregg.com/perf.html', type: 'tutorial' },
  ],
  26: [
    { name: 'cppreference：Ranges', url: 'https://en.cppreference.com/w/cpp/ranges', type: 'doc' },
    { name: 'cppreference：C++23 features', url: 'https://en.cppreference.com/w/cpp/23', type: 'doc' },
  ],
  27: [
    { name: 'Modern CMake 入门书', url: 'https://cliutils.gitlab.io/modern-cmake/', type: 'tutorial' },
    { name: 'vcpkg', url: 'https://vcpkg.io/', type: 'tool' },
    { name: 'Catch2 测试框架', url: 'https://github.com/catchorg/Catch2', type: 'repo' },
  ],
  28: [
    { name: 'nlohmann/json', url: 'https://github.com/nlohmann/json', type: 'repo' },
    { name: 'cppreference：variant', url: 'https://en.cppreference.com/w/cpp/utility/variant', type: 'doc' },
  ],
  29: [
    { name: 'cppreference：condition_variable', url: 'https://en.cppreference.com/w/cpp/thread/condition_variable', type: 'doc' },
    { name: 'C++ Concurrency in Action（书）', url: 'https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition', type: 'doc' },
  ],
  30: [
    { name: 'Awesome C++ 生态合集', url: 'https://github.com/fffaraz/awesome-cpp', type: 'repo' },
    { name: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', type: 'doc' },
    { name: 'Compiler Explorer（常备 playground）', url: 'https://godbolt.org/', type: 'tool' },
  ],
};
