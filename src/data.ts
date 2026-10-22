export interface Task {
  d: number;
  tag: string;
  t: string;
  desc: string;
  xp: number;
  lesson: {
    points: string[];
    code: string;
    analogy: string;
  };
  links: { name: string; url: string; type: "doc" | "tutorial" | "tool" | "repo" }[];
}

export interface Phase {
  name: string;
  from: number;
  to: number;
  items: string[];
}

export interface Quiz {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export interface Exercise {
  prompt: string;
  starter: string;
  answer: string;
  expected: string;
}

export interface Stats {
  doneTasks: number[];
  quizCorrect: number;
  quizWrong: number;
  perfectQuizzes: number;
  bossCleared: number[];
  currentStreak: number;
  maxStreak: number;
  level: number;
  notes: number;
}

export const LEVELS = [
  { lv: 1, title: "🌱 见习勇者", need: 0 },
  { lv: 2, title: "📖 语法学徒", need: 100 },
  { lv: 3, title: "☕ 咖啡骑士", need: 260 },
  { lv: 4, title: "🌿 Spring 侠客", need: 480 },
  { lv: 5, title: "🗡️ 接口剑士", need: 760 },
  { lv: 6, title: "🏰 项目建造师", need: 1100 },
  { lv: 7, title: "🔮 源码解读者", need: 1500 },
  { lv: 8, title: "👑 Java 大师", need: 2000 },
];

const LXF = (path: string) => `https://liaoxuefeng.com/books/java/${path}`;

export const TASKS: Task[] = [
  // ============ 阶段一：Java 快速入门（廖雪峰第1-2章）Day 1-8 ============
  { d: 1, tag: "快速入门", t: "Java 简介 + 安装 JDK", desc: "了解 Java 是什么、JDK/JRE/JVM 关系，装好 JDK 17 并验证 java -version。", xp: 20,
    lesson: { points: [
      "Java 三层结构：JDK（开发包）⊃ JRE（运行环境）⊃ JVM（虚拟机），开发装 JDK",
      "javac 把 .java 编译成 .class 字节码，字节码跑在 JVM 上——'一次编写，到处运行'",
      "Java 17 是 LTS 长期支持版，企业主流选择",
      "验证安装：终端 java -version 和 javac -version 都有输出即成功",
    ], code: "# 终端验证（装好后执行）\njava -version\n# openjdk version \"17.0.x\" 就对了\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
      analogy: "javac ≈ tsc（TS 编译器），JVM ≈ Node（运行时）。区别：TS 编译成 JS 到处能跑是因为有 Node，Java 编译成字节码到处能跑是因为每个平台都有 JVM。" },
    links: [
      { name: "廖雪峰：Java 简介", url: LXF("introduction/index.html"), type: "tutorial" },
      { name: "廖雪峰：安装 JDK", url: LXF("quick-start/dev-env/install-jdk/index.html"), type: "tutorial" },
      { name: "Adoptium 下载 JDK 17", url: "https://adoptium.net/temurin/releases/?version=17", type: "tool" },
    ] },
  { d: 2, tag: "快速入门", t: "第一个 Java 程序 + 使用 IDE", desc: "理解程序基本结构，IDEA 新建项目跑通 Hello World，认识 main 方法。", xp: 20,
    lesson: { points: [
      "类是 Java 最小单元：所有代码必须在 class 里（JS 可以裸写，Java 不行）",
      "main 方法是入口：public static void main(String[] args) 固定写法，先背下来",
      "文件名必须和 public 类名一致：Main.java 里是 public class Main",
      "IDEA：New Project → src 右键 New Java Class → 绿色三角运行",
    ], code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n        System.out.print(\"不换行打印\");\n    }\n}",
      analogy: "main ≈ npm start 的入口脚本。System.out.println ≈ console.log， println 是 print line（带换行）。" },
    links: [
      { name: "廖雪峰：第一个 Java 程序", url: LXF("quick-start/dev-env/first-program/index.html"), type: "tutorial" },
      { name: "廖雪峰：使用 IDE", url: LXF("quick-start/dev-env/ide/index.html"), type: "tutorial" },
    ] },
  { d: 3, tag: "快速入门", t: "变量和数据类型", desc: "8 种基本类型、var、常量 final，体会静态类型与 JS 的差异。", xp: 20,
    lesson: { points: [
      "基本类型 8 种：int(4字节)/long(8字节，尾缀L)/double/boolean/char 等，JS 只有一个 number",
      "必须先声明类型：int x = 10; 之后 x 永远只能装整数",
      "var（Java 10+）：编译器推断类型，推断完锁死——还是静态类型",
      "final 定义常量：final int MAX = 100; ≈ JS 的 const",
      "整数除法截断小数：1/2=0，浮点有精度问题（0.1+0.2≠0.3，和 JS 一样）",
    ], code: "int age = 25;\nlong big = 9_000_000_000L;   // L 后缀\ndouble price = 3.14;\nboolean ok = true;\nchar c = 'A';                 // 单引号！\nvar name = \"Tom\";             // 推断为 String\nfinal int MAX = 100;          // 常量\nSystem.out.println(1 / 2);        // 0\nSystem.out.println(1.0 / 2);      // 0.5",
      analogy: "Java = 出厂自带满级 TS。char 用单引号、String 用双引号，混了编译报错——比 TS 还严。" },
    links: [
      { name: "廖雪峰：变量和数据类型", url: LXF("quick-start/basic/var-type/index.html"), type: "tutorial" },
      { name: "廖雪峰：整数运算", url: LXF("quick-start/basic/integer/index.html"), type: "tutorial" },
    ] },
  { d: 4, tag: "快速入门", t: "浮点、布尔运算 + 字符和字符串", desc: "浮点精度、短路运算、String 不可变、引用类型 vs 基本类型。", xp: 20,
    lesson: { points: [
      "浮点数有误差：0.1+0.2≠0.3，精确计算用 BigDecimal",
      "&& || 是短路运算（和 JS 一样）：false && 后面不执行",
      "String 是引用类型，不可变：concat 返回新串",
      "基本类型 == 比值；引用类型 == 比地址，内容比 equals",
      "字符串连接用 +（编译器自动优化成 StringBuilder）",
    ], code: "String s = \"hello\";\ns.toUpperCase();          // 没用！返回新串被丢弃\nString t = s.toUpperCase(); // ✅ 接住返回值\nSystem.out.println(s);    // hello 不变\n\nSystem.out.println(0.1 + 0.2 == 0.3);  // false 经典\nSystem.out.println(\"a\" + 1 + 2);       // a12\nSystem.out.println('A' + 1);           // 66 char参与运算变int",
      analogy: "String 不可变 = JS 里对字符串调方法返回新串一模一样。'A'+1=66 这个坑 JS 也有（字符串拼接 vs 数字运算的边界）。" },
    links: [
      { name: "廖雪峰：浮点数运算", url: LXF("quick-start/basic/float/index.html"), type: "tutorial" },
      { name: "廖雪峰：布尔运算", url: LXF("quick-start/basic/boolean/index.html"), type: "tutorial" },
      { name: "廖雪峰：字符和字符串", url: LXF("quick-start/basic/string/index.html"), type: "tutorial" },
    ] },
  { d: 5, tag: "快速入门", t: "数组类型 + 数组操作", desc: "定长数组、遍历、排序、多维数组、命令行参数。", xp: 20,
    lesson: { points: [
      "数组定长：int[] a = new int[5]; 创建后长度不变，元素默认 0",
      "两种写法：int[] a = {1,2,3}（字面量）或 new int[5]（指定长度）",
      "越界抛 ArrayIndexOutOfBoundsException（不是 undefined）",
      "遍历：标准 for / for-each（for (int n : a)）≈ for...of",
      "工具类：Arrays.toString(a)、Arrays.sort(a)（打印数组别直接 println）",
    ], code: "import java.util.Arrays;\n\nint[] a = {5, 2, 8, 1};\nArrays.sort(a);                    // [1, 2, 5, 8]\nSystem.out.println(Arrays.toString(a));\nint sum = 0;\nfor (int n : a) sum += n;          // for-each\nint[][] grid = { {1,2}, {3,4} };   // 多维",
      analogy: "定长数组 ≈ JS 的 Float32Array（TypedArray）。想要 push/pop 的自由，用 Day 8 的 ArrayList。" },
    links: [
      { name: "廖雪峰：数组类型", url: LXF("quick-start/basic/array/index.html"), type: "tutorial" },
      { name: "廖雪峰：数组操作", url: LXF("quick-start/array-op/index.html"), type: "tutorial" },
    ] },
  { d: 6, tag: "快速入门", t: "流程控制：if/switch/循环", desc: "输入输出、if 判断、switch、for/while、break/continue，和 JS 高度相似。", xp: 20,
    lesson: { points: [
      "if/else、while、do-while、for 语法和 JS 几乎一样，快速过",
      "for-each：for (int x : arr) 只能遍历，不能改下标",
      "break 跳出循环，continue 跳过本次——语义同 JS",
      "switch 记得 break，Java 14+ 有箭头语法 → 更清爽",
      "Scanner 读控制台输入（≈ 前端的 prompt）",
    ], code: "import java.util.Scanner;\n\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();          // 读整数\n\nswitch (n) {\n    case 1 -> System.out.println(\"一\");   // 箭头语法不用 break\n    case 2 -> System.out.println(\"二\");\n    default -> System.out.println(\"其他\");\n}\nfor (int i = 0; i < 3; i++) {\n    if (i == 1) continue;\n    System.out.println(i);     // 0 2\n}",
      analogy: "这章你 15 分钟能扫完——所有控制流 JS 都有，唯一新面孔是 Scanner 和 switch 箭头语法。" },
    links: [
      { name: "廖雪峰：输入和输出", url: LXF("quick-start/flow/input-output/index.html"), type: "tutorial" },
      { name: "廖雪峰：if 判断", url: LXF("quick-start/flow/if/index.html"), type: "tutorial" },
      { name: "廖雪峰：for 循环", url: LXF("quick-start/flow/for/index.html"), type: "tutorial" },
    ] },
  { d: 7, tag: "⚔️ Boss 关", t: "BOSS 战：新手村试炼", desc: "Boss 测验（5 题）+ 综合练习：用变量/数组/循环/流程控制写'成绩统计器'。", xp: 50,
    lesson: { points: [
      "Boss 实战：int[] scores = {85, 92, 78, 60, 95}，求最高分/最低分/平均分",
      "进阶：统计各分数段人数（90+ / 80-89 / 70-79 / 不及格）",
      "要求全部用前 6 天的知识：数组 + 循环 + if",
      "在 OnlineGDB 运行，对照预期输出",
    ], code: "int[] scores = {85, 92, 78, 60, 95};\nint max = scores[0], min = scores[0], sum = 0;\nfor (int s : scores) {\n    if (s > max) max = s;\n    if (s < min) min = s;\n    sum += s;\n}\nSystem.out.println(\"平均: \" + (double) sum / scores.length);\n// 试试自己加分数段统计",
      analogy: "这是你 Java 生涯第一个完整程序。打完这关，'Java 程序基本结构'章节毕业。" },
    links: [
      { name: "OnlineGDB 在线编译器", url: "https://www.onlinegdb.com/online_java_compiler", type: "tool" },
    ] },
  // ============ 阶段二：面向对象编程（廖雪峰第3章）Day 8-16 ============
  { d: 8, tag: "面向对象", t: "面向对象基础：类/字段/方法", desc: "class、字段、方法、构造方法，Java 的 class 是 ES6 class 完全体。", xp: 20,
    lesson: { points: [
      "class = 字段（数据）+ 方法（行为），所有代码必须住在类里",
      "构造方法：与类同名、无返回类型；不写有默认无参构造，手写带参后默认的消失",
      "this.name = name 区分字段和参数",
      "方法重载 Overload：同名不同参数列表（如 print(int) 和 print(String)）",
      "new Student(\"Tom\") 创建对象，字段有默认值（0/null/false）",
    ], code: "class Student {\n    String name;\n    int age;\n\n    Student(String name, int age) {   // 构造方法\n        this.name = name;\n        this.age = age;\n    }\n    void introduce() {                // 方法\n        System.out.println(name + \", \" + age);\n    }\n}\nStudent s = new Student(\"Tom\", 20);\ns.introduce();",
      analogy: "ES6 class 的完全体：constructor 改名类名、private/public 真·访问控制、方法重载是 JS 没有的（JS 同名会覆盖）。" },
    links: [
      { name: "廖雪峰：面向对象基础", url: LXF("oop/basic/index.html"), type: "tutorial" },
      { name: "廖雪峰：构造方法", url: LXF("oop/basic/constructor/index.html"), type: "tutorial" },
      { name: "廖雪峰：方法重载", url: LXF("oop/basic/overload/index.html"), type: "tutorial" },
    ] },
  { d: 9, tag: "面向对象", t: "继承 / 多态 / 抽象类", desc: "extends、super、向上转型、动态绑定、abstract——Java 的灵魂。", xp: 20,
    lesson: { points: [
      "extends 单继承（一个爹），super 调父类方法/构造器",
      "多态：Animal a = new Dog(); 编译看左边，运行看右边（动态绑定）",
      "@Override 注解标记重写，写错方法名编译器会提醒",
      "抽象类 abstract：不能 new，可以有抽象方法（子类必须实现）",
      "重写规则：权限只能放大、异常只能更小",
    ], code: "abstract class Animal {\n    abstract void speak();            // 抽象方法无实现\n}\nclass Dog extends Animal {\n    @Override void speak() { System.out.println(\"汪\"); }\n}\nAnimal a = new Dog();\na.speak();                            // 汪 运行时看右边",
      analogy: "多态 ≈ React 里接口约定 props、不同组件各自实现——调用方不用改代码。抽象类 = 只能被继承的'半成品模板'。" },
    links: [
      { name: "廖雪峰：继承", url: LXF("oop/basic/inherit/index.html"), type: "tutorial" },
      { name: "廖雪峰：多态", url: LXF("oop/basic/polymorphic/index.html"), type: "tutorial" },
      { name: "廖雪峰：抽象类", url: LXF("1252599548343744/125594373900946),"), type: "tutorial" },
    ] },
  { d: 10, tag: "面向对象", t: "接口 interface + 静态字段 + 包", desc: "interface、default 方法、static、包与 import、作用域。", xp: 20,
    lesson: { points: [
      "接口 = 能力契约：抽象方法 + default 默认方法（Java 8+）+ 常量",
      "类 implements 多个接口（弥补单继承），接口之间可以 extends",
      "static：属于类不属于实例，所有对象共享一份（如计数器）",
      "包 package = 目录组织 ≈ 前端的文件夹分层，import 引入",
      "作用域：private（本类）→ default（同包）→ protected（子类）→ public",
    ], code: "interface Flyable {\n    void fly();\n    default void land() { System.out.println(\"降落\"); } // 默认实现\n}\nclass Bird implements Flyable {\n    public void fly() { System.out.println(\"飞\"); }\n}\nclass Counter {\n    static int count = 0;              // 全类共享\n    Counter() { count++; }\n}",
      analogy: "TS interface 编译即消失，Java interface 是真类型且能跑 default 方法。package+import ≈ ESM 的 import，静态字段 ≈ 模块级共享变量。" },
    links: [
      { name: "廖雪峰：接口", url: LXF("oop/basic/interface/index.html"), type: "tutorial" },
      { name: "廖雪峰：静态字段和静态方法", url: LXF("oop/basic/static/index.html"), type: "tutorial" },
      { name: "廖雪峰：包", url: LXF("oop/basic/package/index.html"), type: "tutorial" },
    ] },
  { d: 11, tag: "Java核心类", t: "字符串和编码 + StringBuilder", desc: "String 常量池、== vs equals、StringBuilder/StringJoiner、编码概念。", xp: 20,
    lesson: { points: [
      "字符串不可变：所有'修改'方法返回新串，原串不变",
      "常量池：字面量 \"ab\" == \"ab\" 为 true；new String(\"ab\") == \"ab\" 为 false",
      "内容比较永远用 equals()，忽略大小写用 equalsIgnoreCase()",
      "循环拼接用 StringBuilder（可变），append 链式调用",
      "StringJoiner 指定分隔符拼接 ≈ JS 的 array.join()",
    ], code: "String a = \"ab\";\nSystem.out.println(a == \"ab\");           // true 常量池\nSystem.out.println(new String(\"ab\") == \"ab\");  // false\nSystem.out.println(a.equals(\"ab\"));      // true\n\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 3; i++) sb.append(i).append(\",\");\nSystem.out.println(sb);                   // 0,1,2,",
      analogy: "equals vs == 是前端转 Java 第一大坑，方向和 JS 相反：JS 的 == 乱比值，Java 的 == 只比地址。口诀：字符串一律 equals。" },
    links: [
      { name: "廖雪峰：字符串和编码", url: LXF("oop/core/string-encoding/index.html"), type: "tutorial" },
      { name: "廖雪峰：StringBuilder", url: LXF("oop/core/stringbuilder/index.html"), type: "tutorial" },
    ] },
  { d: 12, tag: "Java核心类", t: "包装类型 + JavaBean + 枚举 + BigInteger/BigDecimal", desc: "自动装箱、JavaBean 规范、enum、精确计算。", xp: 20,
    lesson: { points: [
      "包装类：int→Integer，让基本类型参与泛型和集合；自动装箱/拆箱",
      "Integer 缓存 -128~127，这个范围内 == 是 true，超出是 false（超坑！）",
      "JavaBean：private 字段 + public getter/setter 命名规范",
      "枚举 enum：一组固定常量，类型安全（比 JS 常量字符串强）",
      "BigDecimal 精确计算（金融必用），比较用 compareTo 不用 equals",
    ], code: "Integer a = 127, b = 127;\nSystem.out.println(a == b);    // true 缓存\nInteger c = 128, d = 128;\nSystem.out.println(c == d);    // false！新对象\n\nenum Season { SPRING, SUMMER }\n\nBigDecimal p = new BigDecimal(\"0.1\");\nSystem.out.println(p.add(new BigDecimal(\"0.2\")));  // 0.3 精确",
      analogy: "enum ≈ TS 的联合类型字面量（type S = 'spring'）但更强。BigDecimal ≈ 前端处理金额时的 big.js。" },
    links: [
      { name: "廖雪峰：包装类型", url: LXF("oop/core/wrapper/index.html"), type: "tutorial" },
      { name: "廖雪峰：枚举类", url: LXF("oop/core/enum/index.html"), type: "tutorial" },
      { name: "廖雪峰：BigInteger 和 BigDecimal", url: LXF("oop/core/biginteger/index.html"), type: "tutorial" },
    ] },
  { d: 13, tag: "⚔️ Boss 关", t: "BOSS 战：面向对象之影", desc: "Boss 测验（5 题）+ 实战：设计一个完整的 BankAccount 类体系。", xp: 50,
    lesson: { points: [
      "Boss 实战：抽象类 Account（字段 owner/balance，方法 deposit/withdraw 抽象）",
      "SavingAccount 重写 withdraw（余额不足报错）、CreditAccount 支持透支",
      "接口 Freezeable（freeze 方法），用 Account 引用数组操作不同子类——多态实战",
      "静态字段统计开户总数",
    ], code: "abstract class Account {\n    static int total = 0;          // 开户数\n    String owner; double balance;\n    Account(String o) { owner = o; total++; }\n    abstract void withdraw(double amt);\n}\n// 你来实现 SavingAccount / CreditAccount / 主类测试",
      analogy: "这套题把 Day 8~12 全部串起来：抽象类、继承、多态、static。写完你会对'面向接口编程'有体感。" },
    links: [
      { name: "OnlineGDB 在线编译器", url: "https://www.onlinegdb.com/online_java_compiler", type: "tool" },
    ] },
  // ============ 阶段三：异常/集合/泛型（廖雪峰第4-5-7章）Day 14-20 ============
  { d: 14, tag: "异常处理", t: "异常处理：try/catch/finally", desc: "异常体系、受检异常、自定义异常、日志（Logging）概念。", xp: 25,
    lesson: { points: [
      "异常父类 Throwable：Error（系统级不管）和 Exception（要处理）",
      "受检异常（IOException）：编译器强制 catch 或 throws；非受检（RuntimeException）：不强制",
      "finally 必执行（释放资源）；现代写法 try-with-resources 自动关闭",
      "自定义异常：extends RuntimeException + 构造器传 message",
      "日志：开发用 SLF4J + Logback，别再 System.out.println 调试",
    ], code: "class BizException extends RuntimeException {\n    BizException(String msg) { super(msg); }\n}\n\ntry {\n    int r = Integer.parseInt(\"abc\");\n} catch (NumberFormatException e) {\n    System.out.println(\"捕获: \" + e.getMessage());\n} finally {\n    System.out.println(\"总会执行\");\n}",
      analogy: "受检异常 = 编译器强制你写 .catch() 的 Promise，逃不掉。自定义异常 ≈ 前端 class ApiError extends Error。" },
    links: [
      { name: "廖雪峰：Java 的异常", url: LXF("exception/index.html"), type: "tutorial" },
      { name: "廖雪峰：捕获异常", url: LXF("exception/try-catch/index.html"), type: "tutorial" },
    ] },
  { d: 15, tag: "泛型", t: "泛型：使用泛型 + 擦拭法", desc: "为什么需要泛型、泛型类/接口/方法、擦拭法原理。", xp: 25,
    lesson: { points: [
      "泛型 = 编译期类型检查：List<String> 装 int 直接编译报错——内置 TS",
      "泛型类：class Pair<T, K>；泛型方法：<T> T pick(T... list)",
      "擦拭法：泛型只存在编译期，运行时都是 Object（所以不能 new T()）",
      "extends 通配符限制上界：List<? extends Number> 只读不写",
    ], code: "class Pair<T, K> {\n    T first; K second;\n    Pair(T f, K s) { first = f; second = s; }\n}\n\nstatic <T> T firstOf(List<T> list) { return list.get(0); }\n\nList<String> names = new ArrayList<>();\nnames.add(\"a\");\n// names.add(123);  ← 编译报错！泛型的意义",
      analogy: "泛型 ≈ TS 泛型的运行时强执法。擦拭法解释了为什么 Java 不能 new T()——运行时根本不知道 T 是谁。" },
    links: [
      { name: "廖雪峰：什么是泛型", url: LXF("generics/what-is-generics/index.html"), type: "tutorial" },
      { name: "廖雪峰：使用泛型", url: LXF("generics/use-generics/index.html"), type: "tutorial" },
      { name: "廖雪峰：擦拭法", url: LXF("generics/type-erasure/index.html"), type: "tutorial" },
    ] },
  { d: 16, tag: "集合", t: "集合：List / Map / Set", desc: "集合框架总览、ArrayList、HashMap、HashSet 核心三件套。", xp: 25,
    lesson: { points: [
      "集合 = 可变长的对象容器，分两大派：Collection（单个装）和 Map（键值对）",
      "List：有序可重复（ArrayList 常用）；Set：不重复（HashSet）；Map：键值对（HashMap）",
      "遍历 List 用 for-each；Map 用 entrySet() 或 keySet()",
      "重点方法：list.add/get/size、map.put/get/containsKey、set.add/contains",
      "自定义对象放 Set/Map 的 key 要正确重写 equals 和 hashCode",
    ], code: "Map<String, Integer> score = new HashMap<>();\nscore.put(\"Java\", 90);\nscore.put(\"Vue\", 95);\nSystem.out.println(score.get(\"Java\"));     // 90\nfor (var entry : score.entrySet()) {\n    System.out.println(entry.getKey() + \"=\" + entry.getValue());\n}\nSet<String> tags = new HashSet<>();\ntags.add(\"java\"); tags.add(\"java\");\nSystem.out.println(tags.size());           // 1 去重",
      analogy: "ArrayList≈Array、HashMap≈Map、HashSet≈Set——JS 集合全家桶强类型版。entrySet 遍历 ≈ Object.entries()。" },
    links: [
      { name: "廖雪峰：Java 集合简介", url: LXF("collection/quick-start/index.html"), type: "tutorial" },
      { name: "廖雪峰：使用 List", url: LXF("collection/list/index.html"), type: "tutorial" },
      { name: "廖雪峰：使用 Map", url: LXF("collection/map/index.html"), type: "tutorial" },
    ] },
  { d: 17, tag: "集合", t: "集合进阶：Properties/Stack/Iterator/Collections 工具", desc: "Collections 工具类、Iterator 迭代器、Stack/Queue 使用场景。", xp: 25,
    lesson: { points: [
      "Collections 工具类：sort/shuffle/reverse 一把梭（注意是复数）",
      "Iterator 迭代器：统一遍历方式，遍历时删除元素必须用它（否则 ConcurrentModificationException）",
      "Stack 栈（LIFO）push/pop，Queue 队列（FIFO）offer/poll",
      "Properties：配置文件读写（key=value 文本），项目配置都用它",
    ], code: "List<Integer> list = new ArrayList<>(List.of(3, 1, 2));\nCollections.sort(list);           // [1,2,3]\nCollections.reverse(list);        // [3,2,1]\n\nIterator<Integer> it = list.iterator();\nwhile (it.hasNext()) {\n    Integer n = it.next();\n    if (n == 2) it.remove();      // 安全删除\n}",
      analogy: "Iterator 的'遍历时删除'规则 ≈ JS 里 forEach 不能 splice 数组的坑，Java 用迭代器正规解决。" },
    links: [
      { name: "廖雪峰：使用 Iterator", url: LXF("collection/iterator/index.html"), type: "tutorial" },
      { name: "廖雪峰：使用 Collections", url: LXF("collection/collections/index.html"), type: "tutorial" },
    ] },
  { d: 18, tag: "IO与日期", t: "IO：File/输入输出流 + Files 工具", desc: "File、字节流/字符流概念、Files 工具类简洁读写。", xp: 25,
    lesson: { points: [
      "File 对象 = 路径的抽象（不代表文件存在）",
      "字节流 InputStream/OutputStream（万能），字符流 Reader/Writer（文本专用）",
      "日常开发用 Files 工具类：一行读写整个文件",
      "序列化：对象 ↔ 字节（实现 Serializable），网络传输的基础",
    ], code: "import java.nio.file.*;\n\nPath p = Path.of(\"demo.txt\");\nFiles.writeString(p, \"你好 Java\");\nString content = Files.readString(p);\nSystem.out.println(content);\n// 异常处理：Files 方法抛受检异常，需 try/catch",
      analogy: "Files.readString ≈ Node 的 fs.readFileSync（UTF-8）。受检异常在这章真实出现：文件操作必须 try/catch。" },
    links: [
      { name: "廖雪峰：File 对象", url: LXF("io/file/index.html"), type: "tutorial" },
      { name: "廖雪峰：使用 Files", url: LXF("io/files/index.html"), type: "tutorial" },
    ] },
  { d: 19, tag: "IO与日期", t: "日期时间 LocalDateTime + 正则表达式", desc: "java.time 现代日期 API、格式化、正则基础。", xp: 25,
    lesson: { points: [
      "只用 java.time 包（LocalDateTime/DateTimeFormatter），Date 是老古董别用",
      "LocalDateTime.now() 当前时间，of(2026, 1, 1) 指定时间",
      "DateTimeFormatter 格式化/解析：yyyy-MM-dd HH:mm:ss",
      "正则和 JS 语法基本一致：matches() 全串匹配，Pattern/Matcher 更细控",
    ], code: "import java.time.*;\nimport java.time.format.*;\n\nLocalDateTime now = LocalDateTime.now();\nDateTimeFormatter f = DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm\");\nSystem.out.println(now.format(f));\n\nString phone = \"13812345678\";\nSystem.out.println(phone.matches(\"1\\\\d{10}\"));   // true",
      analogy: "java.time ≈ JS 的 dayjs/date-fns（不可变设计）。format 字母：yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒。" },
    links: [
      { name: "廖雪峰：LocalDateTime", url: LXF("datetime/local-datetime/index.html"), type: "tutorial" },
      { name: "廖雪峰：正则表达式", url: LXF("reg-exp/general/index.html"), type: "tutorial" },
    ] },
  { d: 20, tag: "⚔️ Boss 关", t: "BOSS 战：语言综合试炼", desc: "Boss 测验（5 题）+ 实战：命令行通讯录（集合 + 泛型 + IO + 异常综合）。", xp: 60,
    lesson: { points: [
      "Boss 实战：Contact 类（name/phone）+ List<Contact> 管理",
      "功能：添加（校验手机号正则，不合法抛自定义异常）、按名字查、遍历打印",
      "存盘：Files.writeString 序列化通讯录到 txt",
      "这是语言阶段终极检验：类/集合/泛型/异常/IO 全用上",
    ], code: "class Contact { String name; String phone; }\nclass BadPhoneException extends RuntimeException {\n    BadPhoneException(String m) { super(m); }\n}\n// 添加时：if (!phone.matches(\"1\\\\d{10}\")) throw new BadPhoneException(...);\n// 查询：contacts.stream().filter(...) 或 for 循环",
      analogy: "打赢这关，Java 语言篇毕业。你已经会'用 Java 写程序'了，接下来去学'用框架做工程'。" },
    links: [
      { name: "OnlineGDB 在线编译器", url: "https://www.onlinegdb.com/online_java_compiler", type: "tool" },
    ] },
  // ============ 阶段四：Maven + Spring Boot（廖雪峰第21章+官方）Day 21-30 ============
  { d: 21, tag: "Maven与IDE", t: "Maven 基础 + IDEA 进阶", desc: "pom.xml、依赖管理、生命周期、IDEA 配置 Maven。", xp: 25,
    lesson: { points: [
      "Maven = 依赖管理 + 构建工具 ≈ npm + 脚本",
      "pom.xml ≈ package.json：坐标 groupId:artifactId:version，dependencies 声明依赖",
      "常用命令：mvn clean（清产物）、compile、package（打 jar）、install（装到本地仓库）",
      "依赖范围 scope：compile（默认）/ test（只测试用）",
      "settings.xml 可换国内镜像（阿里云）加速下载",
    ], code: "<dependency>\n    <groupId>com.google.code.gson</groupId>\n    <artifactId>gson</artifactId>\n    <version>2.10.1</version>\n</dependency>\n\n# 命令行\ncd 项目目录 && mvn clean package",
      analogy: "坐标 ≈ npm 的 @scope/name@version；本地仓库 ~/.m2 ≈ node_modules 的全局缓存版。" },
    links: [
      { name: "廖雪峰：Maven 基础", url: LXF("maven/basic/index.html"), type: "tutorial" },
      { name: "Maven Central 搜依赖", url: "https://central.sonatype.com/", type: "tool" },
    ] },
  { d: 22, tag: "Spring Boot", t: "Spring Boot 入门：第一个 Web 应用", desc: "Spring Boot 是什么、启动流程、写第一个 Controller。", xp: 25,
    lesson: { points: [
      "Spring Boot = 约定优于配置的 Spring：内嵌 Tomcat，java -jar 直接跑",
      "start.spring.io 勾 Spring Web 生成骨架 ≈ npm create vite",
      "@SpringBootApplication 三合一：自动配置 + 组件扫描 + 启动类",
      "@RestController + @GetMapping(\"/hi\") = 你的第一个接口",
      "默认端口 8080，application.yml 改配置（server.port 等）",
    ], code: "@SpringBootApplication\npublic class App {\n    public static void main(String[] args) {\n        SpringApplication.run(App.class, args);\n    }\n}\n\n@RestController\nclass HiController {\n    @GetMapping(\"/hi\")\n    public String hi() { return \"hello spring\"; }\n}\n// 访问 http://localhost:8080/hi",
      analogy: "Spring Boot ≈ Java 界的 Next.js：约定优于配置、内嵌服务器、开箱即用。Controller ≈ Express 路由文件。" },
    links: [
      { name: "Spring 官方：构建 RESTful 服务指南", url: "https://spring.io/guides/gs/rest-service", type: "tutorial" },
      { name: "Spring Initializr", url: "https://start.spring.io/", type: "tool" },
    ] },
  { d: 23, tag: "Spring Boot", t: "REST 接口开发：参数/请求体/状态", desc: "@PathVariable/@RequestParam/@RequestBody、POST/PUT/DELETE 全动词。", xp: 25,
    lesson: { points: [
      "三兄弟分清楚：@PathVariable（路径 /users/{id}）、@RequestParam（查询 ?page=1）、@RequestBody（JSON 请求体）",
      "REST 动词：@GetMapping/@PostMapping/@PutMapping/@DeleteMapping",
      "返回对象自动转 JSON（Jackson 在干活）",
      "开发期用 Postman/curl 测试接口，别只用浏览器（浏览器只能 GET）",
    ], code: "@RestController\n@RequestMapping(\"/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")                    // GET /users/5\n    public User get(@PathVariable Long id) { ... }\n\n    @PostMapping                            // POST /users + JSON 体\n    public User create(@RequestBody UserDTO dto) { ... }\n\n    @GetMapping                             // GET /users?page=2\n    public List<User> list(@RequestParam(defaultValue = \"1\") int page) { ... }\n}",
      analogy: "req.params ≈ @PathVariable、req.query ≈ @RequestParam、req.body ≈ @RequestBody——Express 的三件套映射。" },
    links: [
      { name: "廖雪峰：Spring 开发（Web MVC）", url: LXF("spring/web/mvc/index.html"), type: "tutorial" },
      { name: "Baeldung：@PathVariable vs @RequestParam", url: "https://www.baeldung.com/spring-pathvariable-vs-requestparam", type: "tutorial" },
    ] },
  { d: 24, tag: "Spring Boot", t: "依赖注入 IoC + 分层架构", desc: "Bean、@Service/@Component、构造器注入、Controller→Service→Mapper 分层。", xp: 25,
    lesson: { points: [
      "IoC：对象交给 Spring 容器创建和管理，你要谁声明就行（别自己 new）",
      "@Component/@Service/@Repository/@Controller 本质相同，语义区分",
      "构造器注入是官方推荐（final 字段、可测试、依赖显式）",
      "三层架构：Controller（接待）→ Service（业务+事务）→ Mapper/DAO（数据）",
      "分层本质 = 变化隔离，前端对应：组件 → 组合式函数 → API 模块",
    ], code: "@Service\npublic class UserService {\n    public User findUser(Long id) { ... }\n}\n\n@RestController\npublic class UserController {\n    private final UserService userService;      // final！\n    public UserController(UserService userService) {  // 构造器注入\n        this.userService = userService;\n    }\n}",
      analogy: "IoC ≈ 前端 DI（Vue provide/inject、React Context）的全自动版。Service 层 = 你的组合式函数，Mapper 层 = API 模块。" },
    links: [
      { name: "Spring 官方：IoC 容器", url: "https://docs.spring.io/spring-framework/reference/core/beans.html", type: "doc" },
      { name: "Baeldung：构造器注入", url: "https://www.baeldung.com/constructor-injection-in-spring", type: "tutorial" },
    ] },
  { d: 25, tag: "Spring Boot", t: "数据库访问：JDBC → MyBatis-Plus", desc: "数据源配置、实体映射、BaseMapper 白得 CRUD。", xp: 25,
    lesson: { points: [
      "application.yml 配数据源：url/username/password/driver-class-name",
      "实体类：@TableName 表名、@TableId 主键、驼峰自动映射下划线列",
      "Mapper 继承 BaseMapper<T> 白得 insert/selectById/updateById/deleteById",
      "@TableLogic 逻辑删除：delete 自动变 UPDATE deleted=1",
      "字段用包装类型 Integer（能区分 null 和 0）",
    ], code: "spring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/blog\n    username: root\n    password: \${DB_PASS}      # 环境变量！\n\n@TableName(\"article\")\npublic class Article {\n    @TableId\n    private Long id;\n    private String title;\n    @TableLogic\n    private Integer deleted;\n}",
      analogy: "BaseMapper ≈ 封装到极致的 axios：常用操作全内置。密码走环境变量 ≈ 前端 .env 但更严格。" },
    links: [
      { name: "MyBatis-Plus 官方快速开始", url: "https://baomidou.com/guides/quick-start/", type: "doc" },
      { name: "廖雪峰：JDBC 基础（理解底层）", url: LXF("jdbc/basic/index.html"), type: "tutorial" },
    ] },
  { d: 26, tag: "Spring Boot", t: "分页/条件查询 + 统一返回 + 全局异常", desc: "分页插件、QueryWrapper、Result 统一结构、@RestControllerAdvice。", xp: 25,
    lesson: { points: [
      "分页：PaginationInnerInterceptor 插件 + Page<T>（pageNum, pageSize）",
      "LambdaQueryWrapper：like/eq/orderByDesc，第一个参数布尔控制条件是否生效",
      "统一返回 { code, msg, data }：业务成败看 code，HTTP 200 只代表请求通了",
      "@RestControllerAdvice + @ExceptionHandler 全局捕获异常转统一格式",
      "禁止内存分页（全查再截取）——数据量一大就是事故",
    ], code: "Page<Article> p = new Page<>(pageNum, pageSize);\nLambdaQueryWrapper<Article> w = new LambdaQueryWrapper<>();\nw.like(StringUtils.hasText(kw), Article::getTitle, kw)\n .orderByDesc(Article::getCreateTime);\nPage<Article> result = articleMapper.selectPage(p, w);\n\n@RestControllerAdvice\nclass GlobalHandler {\n    @ExceptionHandler(Exception.class)\n    public Result<?> handle(Exception e) { return Result.fail(e.getMessage()); }\n}",
      analogy: "这个 { code, msg, data } 你对接了无数次，今天开始是你定义它。全局异常 ≈ React ErrorBoundary 但在服务端。" },
    links: [
      { name: "MyBatis-Plus：分页插件", url: "https://baomidou.com/plugins/pagination/", type: "doc" },
      { name: "Baeldung：REST 全局异常处理", url: "https://www.baeldung.com/exception-handling-for-rest-with-spring", type: "tutorial" },
    ] },
  { d: 27, tag: "⚔️ Boss 关", t: "BOSS 战：框架巨兽 + Todo API", desc: "Boss 测验（5 题）+ 实战：完整 Todo API（CRUD + 分页 + 校验 + 统一返回）。", xp: 60,
    lesson: { points: [
      "Boss 实战清单：Todo 实体 + Mapper + Service + Controller 四件套",
      "接口：GET 列表（分页）/ GET /{id} 详情 / POST 新建 / PUT /{id} 更新 / DELETE /{id}",
      "@Valid 参数校验 + 全局异常处理 + 统一 Result 返回",
      "Postman 全部测通，截图留念——你的第一个完整后端 API",
    ], code: "@RestController\n@RequestMapping(\"/todos\")\npublic class TodoController {\n    // 5 个接口全部实现：\n    // GET    /todos?page=1&size=10   → Result<Page<Todo>>\n    // GET    /todos/{id}             → Result<Todo>\n    // POST   /todos + @Valid 请求体   → Result<Todo>\n    // PUT    /todos/{id}             → Result<Todo>\n    // DELETE /todos/{id}             → Result<?>\n}",
      analogy: "框架巨兽被打服的标志：Postman 里 5 个接口全绿。前后端分离的服务端，你已经能独立交付了。" },
    links: [
      { name: "Postman 下载", url: "https://www.postman.com/downloads/", type: "tool" },
    ] },
  // ============ 阶段五：项目实战 Day 28-33 ============
  { d: 28, tag: "项目实战", t: "项目设计：个人博客后端（ER 图）", desc: "需求梳理、表设计、实体关系（多对一/多对多/一对多）。", xp: 30,
    lesson: { points: [
      "实体：user、category、article、tag、article_tag（中间表）、comment",
      "关系：文章→分类多对一；文章↔标签多对多（中间表）；文章→评论一对多",
      "每表标配：id 主键、create_time、update_time、deleted 逻辑删除",
      "先画 ER 图再建表——表是地基，改地基 = 返工",
      "工具：draw.io 或 dbdiagram.io 画图",
    ], code: "user:      id, username, password(BCrypt哈希)\ncategory:  id, name\narticle:   id, title, content, category_id, user_id\ntag:       id, name\narticle_tag: article_id, tag_id     ← 多对多中间表\ncomment:   id, article_id, user_id, content",
      analogy: "设计组件前先想 props 流向 = 设计表前先想实体关系。阿里《Java 开发手册》的表设计规约值得通读。" },
    links: [
      { name: "dbdiagram.io（在线画 ER 图）", url: "https://dbdiagram.io/", type: "tool" },
      { name: "阿里巴巴 Java 开发手册", url: "https://github.com/alibaba/p3c", type: "repo" },
    ] },
  { d: 29, tag: "项目实战", t: "建表 + 实体 + 基础 CRUD", desc: "SQL 建表、生成实体/Mapper/Service/Controller 四件套。", xp: 30,
    lesson: { points: [
      "建表 SQL：BIGINT 主键自增、VARCHAR 限长、TINYINT 存布尔、DATETIME 时间",
      "每张表对应四件套：Entity → Mapper → Service → Controller",
      "逻辑删除 @TableLogic，字段用包装类型",
      "文章和分类的增删改查先跑通，联表下一步",
    ], code: "CREATE TABLE article (\n  id BIGINT PRIMARY KEY AUTO_INCREMENT,\n  title VARCHAR(200) NOT NULL,\n  content TEXT,\n  category_id BIGINT,\n  user_id BIGINT,\n  deleted TINYINT DEFAULT 0,\n  create_time DATETIME DEFAULT NOW(),\n  update_time DATETIME DEFAULT NOW() ON UPDATE NOW()\n);",
      analogy: "四件套复制上模块改名——你手动体会的这套'模板性'，就是若依代码生成器的原理（后面源码篇见）。" },
    links: [
      { name: "MySQL 8 官方手册：CREATE TABLE", url: "https://dev.mysql.com/doc/refman/8.0/en/create-table.html", type: "doc" },
    ] },
  { d: 30, tag: "项目实战", t: "JWT 登录 + 发文权限控制", desc: "BCrypt 密码、JWT 签发、拦截器、防越权。", xp: 30,
    lesson: { points: [
      "注册密码：BCrypt 加盐哈希存储，绝不明文",
      "登录：校验密码 → 签发 JWT（Header.Payload.Signature，Base64 不是加密）",
      "拦截器：统一验证 token，取 userId 存 ThreadLocal",
      "防越权：发文 userId 从 token 取（不收前端参数），删除/查询都带 user_id 条件",
      "JWT 过期返回 401，前端清 token 跳登录",
    ], code: "// 签发\nString token = Jwts.builder()\n    .claim(\"userId\", user.getId())\n    .setExpiration(new Date(System.currentTimeMillis() + 7 * 86400000L))\n    .signWith(key)\n    .compact();\n// 拦截器校验失败 → response.setStatus(401)",
      analogy: "你写过无数次的 axios 拦截器带 token，发牌人今天换成你。越权（IDOR）是 owasp 常客：只验登录不验归属 = 裸奔。" },
    links: [
      { name: "jwt.io 官方介绍（可视化拆解）", url: "https://jwt.io/introduction", type: "doc" },
      { name: "Baeldung：Spring Boot 拦截器", url: "https://www.baeldung.com/spring-mvc-handlerinterceptor", type: "tutorial" },
    ] },
  { d: 31, tag: "项目实战", t: "联表查询 + 多对多 + 文件上传", desc: "JOIN 聚合防 N+1、中间表、MultipartFile 上传。", xp: 30,
    lesson: { points: [
      "多对多 = 中间表（article_id + tag_id），查询用 JOIN + GROUP BY",
      "N+1 反模式：列表循环查关联（1+N 次 DB 往返），用聚合 JOIN 一次解决",
      "上传：@RequestParam MultipartFile，UUID 重命名，库里存 URL",
      "联表复杂时 MyBatis 写 XML SQL，简单场景继续用 Wrapper",
    ], code: "SELECT a.*, COUNT(at.tag_id) AS tag_count\nFROM article a\nLEFT JOIN article_tag at ON a.id = at.article_id\nGROUP BY a.id;\n\n// 上传\n@PostMapping(\"/upload\")\npublic Result<String> upload(@RequestParam(\"file\") MultipartFile file) {\n    String name = UUID.randomUUID() + \".\" + 后缀(file.getOriginalFilename());\n    file.transferTo(new File(dir, name));\n    return Result.ok(\"/files/\" + name);\n}",
      analogy: "N+1 ≈ 前端列表每项单独发请求的坑，合并批量是同一个道理，只是搬到了 SQL 层。" },
    links: [
      { name: "Spring 官方：文件上传指南", url: "https://spring.io/guides/gs/uploading-files", type: "tutorial" },
      { name: "Baeldung：N+1 问题", url: "https://www.baeldung.com/n-plus-1-queries", type: "tutorial" },
    ] },
  { d: 32, tag: "项目实战", t: "Vue 前端对接 + 联调", desc: "Vite proxy、axios 拦截器、页面三件套、全链路联调。", xp: 30,
    lesson: { points: [
      "vite.config.ts server.proxy：/api → localhost:8080，开发期免跨域",
      "axios 请求拦截器带 token，响应拦截器统一判 code、401 跳登录",
      "页面三件套：查询表单 + 表格 + 分页器",
      "主场作战：前端全是老本行，新鲜感在'原来当年抱怨的接口是这么写的'",
    ], code: "server: { proxy: { '/api': 'http://localhost:8080' } }\n\n// axios 响应拦截器\nif (res.code !== 0) {\n  if (res.code === 401) router.push('/login')\n  return Promise.reject(res.msg)\n}",
      analogy: "这一天你是真·全栈：接口不合意随手改后端，联调再也不是求人。左右手互搏的快感。" },
    links: [
      { name: "Vite：server.proxy 配置", url: "https://cn.vite.dev/config/server-options.html#server-proxy", type: "doc" },
      { name: "Axios 中文：拦截器", url: "https://www.axios-http.cn/docs/interceptors", type: "doc" },
    ] },
  { d: 33, tag: "⚔️ Boss 关", t: "BOSS 战：部署巨龙 + 公网上线", desc: "Boss 测验（5 题）+ 打包 jar、服务器部署、安全自检、公网访问。", xp: 60,
    lesson: { points: [
      "mvn clean package 打可执行 jar（内嵌 Tomcat）",
      "后台运行：nohup java -jar & / systemd / docker run -d（SSH 断了不能死）",
      "生产密码走环境变量，绝不进 git",
      "安全自检：3306 不对公网开、Actuator 加保护、默认密码全改",
      "进阶：Dockerfile 四行容器化",
    ], code: "mvn clean package\nnohup java -jar blog.jar --server.port=8080 &\n\n# Dockerfile\nFROM eclipse-temurin:17\nCOPY blog.jar /app.jar\nENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]",
      analogy: "部署巨龙三板斧：打包、后台、安全。打赢它，你拥有了'代码 → 公网服务'的完整闭环，这就是全栈底气。" },
    links: [
      { name: "Spring 官方：打包部署", url: "https://docs.spring.io/spring-boot/reference/packaging.html", type: "doc" },
      { name: "Spring 官方：Docker 化指南", url: "https://spring.io/guides/gs/spring-boot-docker", type: "tutorial" },
    ] },
  // ============ 阶段六：源码 + 进阶 Day 34-40 ============
  { d: 34, tag: "读源码", t: "Clone 若依 RuoYi-Vue 并跑起来", desc: "搭建若依、理解脚手架定位、登录流程初探。", xp: 35,
    lesson: { points: [
      "RuoYi-Vue：Vue + Element 前端，Spring Boot + Security + MyBatis 后端",
      "步骤：建库 ry-vue → 导入 sql/ 脚本 → 改 application-druid.yml → 启动 → 前端 npm run dev",
      "默认账号 admin / admin123（登录后第一件事改密码）",
      "到处点点，感受成熟后台的完整度：这将是接下来一周的'解剖对象'",
    ], code: "git clone https://gitee.com/y_project/RuoYi-Vue.git\n# 后端：RuoYiApplication 启动\n# 前端：ruoyi-ui 目录 npm install && npm run dev",
      analogy: "看别人装修好的全栈房子：你的博客项目是自建房，若依是精装样板房——对照着看差异最快。" },
    links: [
      { name: "若依官方文档", url: "https://doc.ruoyi.vip/ruoyi/", type: "doc" },
      { name: "RuoYi-Vue 源码", url: "https://gitee.com/y_project/RuoYi-Vue", type: "repo" },
    ] },
  { d: 35, tag: "读源码", t: "读登录链路 + 权限体系（RBAC）", desc: "从登录接口追调用链、五表权限模型、动态路由后端逻辑。", xp: 35,
    lesson: { points: [
      "追读路线：login.vue → SysLoginController → SysLoginService → Security 认证 → TokenService",
      "RBAC 五表：sys_user / sys_role / sys_menu / sys_user_role / sys_role_menu",
      "登录后 /getRouters 返回菜单树 → 前端动态生成路由",
      "IDEA 读码双板斧：Ctrl+B 跳定义、Ctrl+Alt+← 返回",
      "看不懂的类先看包名和类注释猜用途，别硬啃实现",
    ], code: "SysLoginController.login()\n  → SysLoginService.login()\n    → 验证码校验 → AuthenticationManager.authenticate()\n    → TokenService.createToken()   ← 和你 Day 30 写的对照",
      analogy: "你前端写过的 v-permission 指令，后端就是五张表 + 一个接口。一条链路贯通比读十篇教程扎实。" },
    links: [
      { name: "若依官方：后台手册", url: "https://doc.ruoyi.vip/ruoyi/document/houduan.html", type: "doc" },
      { name: "IDEA 官方调试指南", url: "https://www.jetbrains.com/help/idea/debugging-code.html", type: "doc" },
    ] },
  { d: 36, tag: "读源码", t: "读业务模块全链路 + 代码生成器", desc: "三线对照读法、模块模板性、代码生成器原理（模板引擎）。", xp: 35,
    lesson: { points: [
      "三线对照：F12 看真实请求 → 前端代码看怎么发 → 后端代码看怎么接",
      "所有模块同一模式：查询 DTO（条件+分页）→ TableDataInfo（total+rows）",
      "代码生成器：读表结构元数据 → 填充 Velocity 模板 → 输出前后端全套代码",
      "理解生成器 = 理解脚手架/低代码本质：约定 + 模板 + 元数据",
    ], code: "// Velocity 模板片段\npublic class ${className} {\n#foreach($column in $columns)\n    private ${column.javaType} ${column.javaField};\n#end\n}",
      analogy: "Day 29 你手动复制的四件套，生成器自动化了这件事。低代码不是魔法，是模板 + 元数据。" },
    links: [
      { name: "若依：代码生成说明", url: "https://doc.ruoyi.vip/ruoyi/document/houduan.html", type: "doc" },
      { name: "Velocity 用户指南", url: "https://velocity.apache.org/engine/devel/user-guide.html", type: "doc" },
    ] },
  { d: 37, tag: "读源码", t: "实战：给若依加一个公告模块", desc: "建表 → 代码生成 → 菜单挂载 → 角色授权 → 验证全流程。", xp: 35,
    lesson: { points: [
      "流程：建 notice 表 → 代码生成导入 → 下载代码放进项目 → 重启",
      "菜单挂载：菜单管理新建（组件路径对应 views）→ 角色管理分配 → 重新登录",
      "看不到页面排查：菜单配了？角色分了？组件路径对？缓存清了？",
      "检验成果：你手写的博客四件套经验在生成器流程里全部对应",
    ], code: "1. CREATE TABLE notice (id, title, content, status, create_time)\n2. 系统管理 → 代码生成 → 导入表 → 编辑配置 → 生成\n3. 代码放入项目对应目录 → 重启后端\n4. 菜单管理新建菜单 → 角色授权 → 重新登录",
      analogy: "照着乐高说明书拼新套装。'看得见'也是权限——RBAC 体系里菜单本身就是权限资源。" },
    links: [
      { name: "若依：新增模块指南", url: "https://doc.ruoyi.vip/ruoyi/document/houduan.html", type: "doc" },
    ] },
  { d: 38, tag: "进阶视野", t: "Redis 缓存 + 多线程初探", desc: "Redis 在项目中的定位、Cache Aside、线程与线程安全概念。", xp: 35,
    lesson: { points: [
      "Redis = 内存键值库：验证码、token、字典缓存等热点/临时数据",
      "Cache Aside：读先缓存后库，写更新库再删缓存，过期时间兜底",
      "多线程：线程共享堆内存 → 共享可变状态是万恶之源 → 需要同步",
      "先理解问题（竞态、可见性），再学工具（synchronized、并发容器）",
      "40 天只需建立概念框架，深入留给下一阶段",
    ], code: "// Redis 典型用法（若依）\nredisCache.setCacheObject(\"captcha:\" + uuid, code, 2, MINUTES);\nString saved = redisCache.getCacheObject(\"captcha:\" + uuid);\n\n// 多线程初探\nThread t = new Thread(() -> System.out.println(\"并行!\"));\nt.start();",
      analogy: "Redis ≈ 服务端共享的内存 Map + TTL。线程 ≈ Web Worker，但 Java 里它们共享内存所以有坑。" },
    links: [
      { name: "廖雪峰：多线程基础", url: LXF("threading/basic/index.html"), type: "tutorial" },
      { name: "Redis 官方文档", url: "https://redis.io/docs/latest/", type: "doc" },
    ] },
  { d: 39, tag: "进阶视野", t: "单元测试 JUnit + 写技术博客", desc: "JUnit 基础、测试思维、输出倒逼输入。", xp: 35,
    lesson: { points: [
      "JUnit 5：@Test 方法 + 断言 assertEquals/assertTrue",
      "测试 Service 层：mock Mapper 依赖，测业务逻辑不连真库",
      "写博客选题：'全栈博客项目从 0 到部署'——有完整闭环就有读者",
      "重点写踩坑：== vs equals、N+1、越权——细节决定含金量",
      "讲不清楚 = 没学懂（费曼学习法）",
    ], code: "@Test\nvoid testAdd() {\n    Calculator c = new Calculator();\n    assertEquals(3, c.add(1, 2));\n}\n\n@Test\nvoid testWithdrawInsufficient() {\n    assertThrows(BizException.class, () -> account.withdraw(99999));\n}",
      analogy: "assertEquals ≈ vitest 的 expect().toBe()。测试思维前端就有：组件测试 → 单测，只是换了断言库。" },
    links: [
      { name: "廖雪峰：编写 JUnit 测试", url: LXF("unit-test/junit-test/index.html"), type: "tutorial" },
      { name: "掘金（发博客的中文社区）", url: "https://juejin.cn/", type: "tutorial" },
    ] },
  { d: 40, tag: "👑 终章", t: "最终 BOSS：毕业试炼 + 下一步规划", desc: "毕业测验（6 题）+ 制定下一个 40 天方向。", xp: 100,
    lesson: { points: [
      "毕业检验：能独立完成'设计表 → 接口 → 前端联调 → 部署公网'全链路",
      "方向三选一：做透项目（推荐）/ 深入并发 / 学习微服务——深度 > 广度",
      "持续输出：项目 + 笔记 + 博客，闭环才留得住知识",
      "下一个 40 天：把博客做到作品集级（测试/文档/CI），或开新项目",
      "面试素材：你的踩坑笔记 + Boss 战记录就是'项目难点'的答案库",
    ], code: "// 毕业后推荐路线\n1. 博客项目作品集化（测试/文档/CI/README）\n2. 并发：线程池 → synchronized → JUC → ThreadLocal\n3. Docker Compose 一键环境\n4. 看源码：MyBatis → Spring（由简入繁）\n5. 面试前：JavaGuide 过一遍八股",
      analogy: "40 天前你连 JDK 都没装，今天你能独立交付全栈项目。毕业不是终点，是'知道怎么学'的起点。👑" },
    links: [
      { name: "JavaGuide（面试与进阶合集）", url: "https://github.com/Snailclimb/JavaGuide", type: "repo" },
      { name: "Dev.java 官方学习路径", url: "https://dev.java/learn/", type: "doc" },
    ] },
];

export const PHASES: Phase[] = [
  { name: "阶段一 · Java 快速入门", from: 1, to: 7, items: ["JDK 安装", "第一个程序", "变量与类型", "字符串与数组", "流程控制", "新手村 Boss"] },
  { name: "阶段二 · 面向对象编程", from: 8, to: 13, items: ["类与对象", "继承多态", "接口与包", "核心类", "枚举与 BigDecimal", "OOP Boss"] },
  { name: "阶段三 · 异常/泛型/集合/IO", from: 14, to: 20, items: ["异常处理", "泛型", "List/Map/Set", "集合工具", "IO 与日期", "语言 Boss"] },
  { name: "阶段四 · Maven 与 Spring Boot", from: 21, to: 27, items: ["Maven", "第一个 Web 应用", "REST 接口", "IoC 与分层", "数据库访问", "统一返回", "Todo API Boss"] },
  { name: "阶段五 · 项目实战", from: 28, to: 33, items: ["博客设计", "建表 CRUD", "JWT 鉴权", "联表上传", "前端联调", "部署 Boss"] },
  { name: "阶段六 · 源码与进阶", from: 34, to: 40, items: ["若依上手", "登录与权限", "代码生成器", "实战加模块", "Redis 与多线程", "单元测试", "毕业"] },
];

export const MILESTONES: { d: number; icon: string; label: string }[] = [
  { d: 1, icon: "🚀", label: "启程：环境搭好，Hello World 跑通" },
  { d: 7, icon: "🌱", label: "新手村毕业：第一个完整程序" },
  { d: 13, icon: "☕", label: "面向对象通关：类体系设计" },
  { d: 20, icon: "📦", label: "Java 语言毕业：通讯录综合实战" },
  { d: 27, icon: "🌐", label: "Spring Boot 通关：完整 Todo API" },
  { d: 33, icon: "🎓", label: "全栈项目部署公网" },
  { d: 40, icon: "👑", label: "毕业：源码读通，出师！" },
];

export const BADGES: { id: string; icon: string; name: string; desc: string; condition: (s: Stats) => boolean }[] = [
  { id: "first_day", icon: "🌱", name: "初次启程", desc: "完成第 1 天任务", condition: (s) => s.doneTasks.includes(1) },
  { id: "streak_3", icon: "🔥", name: "三日之约", desc: "连续打卡 3 天", condition: (s) => s.currentStreak >= 3 },
  { id: "streak_7", icon: "☄️", name: "七日炼心", desc: "累计连续打卡 7 天", condition: (s) => s.maxStreak >= 7 },
  { id: "perfect_1", icon: "💯", name: "完美通关", desc: "一次测验全对", condition: (s) => s.perfectQuizzes >= 1 },
  { id: "perfect_5", icon: "✨", name: "完美主义者", desc: "5 次测验全对", condition: (s) => s.perfectQuizzes >= 5 },
  { id: "boss_1", icon: "⚔️", name: "初斩强敌", desc: "击败第一个 Boss", condition: (s) => s.bossCleared.length >= 1 },
  { id: "boss_4", icon: "🐉", name: "屠龙勇士", desc: "击败 4 个 Boss", condition: (s) => s.bossCleared.length >= 4 },
  { id: "quiz_30", icon: "🎯", name: "百步穿杨", desc: "答对 30 道题", condition: (s) => s.quizCorrect >= 30 },
  { id: "quiz_60", icon: "🏹", name: "题海冲浪", desc: "答对 60 道题", condition: (s) => s.quizCorrect >= 60 },
  { id: "village", icon: "🌱", name: "新手村出村", desc: "通关阶段一", condition: (s) => Array.from({length:7},(_,i)=>i+1).every(d=>s.doneTasks.includes(d)) },
  { id: "oop", icon: "☕", name: "面向对象大师", desc: "通关阶段二", condition: (s) => Array.from({length:6},(_,i)=>i+8).every(d=>s.doneTasks.includes(d)) },
  { id: "lang", icon: "📦", name: "语言修行完成", desc: "通关阶段三", condition: (s) => Array.from({length:7},(_,i)=>i+14).every(d=>s.doneTasks.includes(d)) },
  { id: "spring", icon: "🌿", name: "Spring 侠客", desc: "通关阶段四", condition: (s) => Array.from({length:7},(_,i)=>i+21).every(d=>s.doneTasks.includes(d)) },
  { id: "fullstack", icon: "🏰", name: "全栈建造师", desc: "通关阶段五", condition: (s) => Array.from({length:6},(_,i)=>i+28).every(d=>s.doneTasks.includes(d)) },
  { id: "graduate", icon: "👑", name: "出师！Java 勇者", desc: "完成全部 40 天修行", condition: (s) => s.doneTasks.length >= 40 },
  { id: "note_10", icon: "📝", name: "坑王之王", desc: "记下 10 条踩坑笔记", condition: (s) => s.notes >= 10 },
  { id: "lv5", icon: "🗡️", name: "经验老到", desc: "等级达到 5 级", condition: (s) => s.level >= 5 },
];

// ============ 测验题库：QUIZZES[day] = Quiz[]（按重构课程出题）============
export const QUIZZES: Record<number, Quiz[]> = {
  1: [
    { q: "JDK、JRE、JVM 的关系是？", options: ["JDK ⊃ JRE ⊃ JVM", "JVM ⊃ JRE ⊃ JDK", "三者平级", "JRE ⊃ JDK ⊃ JVM"], answer: 0, explain: "JDK（开发包）包含 JRE（运行环境），JRE 包含 JVM（虚拟机）。开发要装最大的 JDK。" },
    { q: "javac 命令的作用是？", options: ["运行 Java 程序", "把 .java 编译成 .class 字节码", "打包 jar", "生成文档"], answer: 1, explain: "javac ≈ tsc，编译器；java 命令才是运行。" },
  ],
  2: [
    { q: "main 方法的标准签名是？", options: ["public void main()", "static void Main()", "public static void main(String[] args)", "def main()"], answer: 2, explain: "固定写法，JVM 从这里进入，类似 npm start。" },
    { q: "文件名和类名的关系？", options: ["随意", "public 类名必须和文件名一致", "必须小写", "必须大写"], answer: 1, explain: "Main.java 里必须是 public class Main，否则编译报错。" },
  ],
  3: [
    { q: "int x = 3.5; 会发生什么？", options: ["自动取整", "编译报错", "运行报错", "变成 double"], answer: 1, explain: "静态类型语言直接编译失败，比 JS 严格——这是特性不是 bug。" },
    { q: "1 / 2 在 Java 里结果是？", options: ["0.5", "0", "1", "报错"], answer: 1, explain: "整数除法截断小数。要 0.5 得写 1.0 / 2。" },
  ],
  4: [
    { q: "switch 适合什么场景？", options: ["布尔判断", "多值精确匹配", "循环", "异常处理"], answer: 1, explain: "switch 是多路分支，if 更适合范围/布尔判断。" },
    { q: "while 和 do-while 的区别？", options: ["没有区别", "do-while 至少执行一次", "while 至少执行一次", "do-while 不能 break"], answer: 1, explain: "do-while 先执行后判断，保底跑一次。" },
  ],
  5: [
    { q: "增强 for（for-each）适合？", options: ["需要下标时", "只遍历不修改时", "倒序时", "跳着遍历时"], answer: 1, explain: "for (int x : arr) 拿不到下标，纯遍历最方便。" },
    { q: "Arrays.sort(arr) 的作用是？", options: ["反转数组", "原地升序排序", "复制数组", "打印数组"], answer: 1, explain: "原地排序，打印数组要用 Arrays.toString(arr)。" },
  ],
  6: [
    { q: "方法重载（overload）是指？", options: ["覆盖父类方法", "同名方法参数不同", "方法名不同", "返回值不同"], answer: 1, explain: "同名不同参，调用时编译器按参数类型自动选择。" },
    { q: "二维数组 int[][] grid = new int[3][4] 有多少元素？", options: ["7", "12", "34", "3"], answer: 1, explain: "3 行 4 列 = 12 个，grid[0] 本身是个 int[4]。" },
  ],
  7: [
    { q: "可变参数 sum(int... nums) 内部 nums 是？", options: ["一个 int", "int 数组", "List", "Map"], answer: 1, explain: "本质就是数组，≈ JS 的 rest 参数 (...args)。" },
    { q: "递归必须有？", options: ["循环", "出口条件（边界）", "static", "try-catch"], answer: 1, explain: "没有出口就是无限递归，StackOverflowError 安排上。" },
  ],
  8: [
    { q: "String 是？", options: ["基本类型", "不可变对象", "可变对象", "数组"], answer: 1, explain: "String 不可变，改字符串是创建新对象——所以高频拼接要用 StringBuilder。" },
    { q: "字符串比较应该用？", options: ["==", "equals()", "=", "==="], answer: 1, explain: "== 比较引用地址，equals() 比较内容。JS 党的头号大坑！" },
  ],
  9: [
    { q: "高频循环拼接字符串应该用？", options: ["String +=", "StringBuilder.append", "数组", "concat"], answer: 1, explain: "String += 每次创建新对象，StringBuilder 是可变的，效率天差地别。" },
    { q: "String.format('%d 岁', 25) 输出？", options: ["%d 岁", "25 岁", "报错", "25%d"], answer: 1, explain: "%d 占位整数、%s 字符串，类似 JS 模板字符串的手动版。" },
  ],
  10: [
    { q: "Integer 是？", options: ["基本类型", "int 的包装类", "关键字", "运算符"], answer: 1, explain: "包装类让基本类型拥有对象能力，自动装箱/拆箱在中间翻译。" },
    { q: "Integer a=127,b=127; a==b 结果？", options: ["false", "true", "报错", "不确定"], answer: 1, explain: "缓存池 -128~127 内相同引用，所以 true；128 就变 false！比较包装类型永远用 equals。" },
  ],
  11: [
    { q: "第一周 Boss：类的构造方法作用是？", options: ["销毁对象", "初始化对象", "继承", "排序"], answer: 1, explain: "new 时自动调用，负责把字段初始化好。" },
    { q: "this.name = name 中的 this 指？", options: ["全局变量", "当前实例", "类本身", "父类"], answer: 1, explain: "区分字段和同名参数，≈ JS 构造函数里的 this。" },
    { q: "private int[] scores; 属于？", options: ["局部变量", "实例字段（封装）", "静态字段", "参数"], answer: 1, explain: "字段私有 + 公开方法 = 封装，不暴露内部状态。" },
    { q: "(double) sum / length 里的 (double) 是？", options: ["注释", "强制类型转换", "泛型", "断言"], answer: 1, explain: "不转的话整数除法会把平均分截断成 0。" },
    { q: "printReport() 里调用 getAverage() 时省略了 this，等价于？", options: ["this.getAverage()", "super.getAverage()", "报错", "静态调用"], answer: 0, explain: "方法内调用本类方法默认隐含 this。" },
  ],
  12: [
    { q: "class Dog extends Animal 表示？", options: ["Dog 实现接口", "Dog 继承 Animal", "Animal 继承 Dog", "组合关系"], answer: 1, explain: "extends 继承，子类自动拥有父类的非私有成员。" },
    { q: "Java 支持多重继承吗（一个类 extends 两个类）？", options: ["支持", "不支持", "看版本", "加 final 就行"], answer: 1, explain: "不支持，避免菱形问题；多重能力用 interface 实现。" },
  ],
  13: [
    { q: "Animal a = new Cat(); a.makeSound() 调用的是？", options: ["Animal 的", "Cat 的（多态）", "报错", "随机"], answer: 1, explain: "运行时看实际类型——多态，≈ JS 原型链方法查找。" },
    { q: "@Override 注解的作用是？", options: ["必须写", "让编译器检查确实是重写", "提升性能", "生成文档"], answer: 1, explain: "拼错方法名时编译器会报错，是免费的保险。" },
  ],
  14: [
    { q: "抽象类能直接 new 吗？", options: ["能", "不能", "加 static 能", "看情况"], answer: 1, explain: "抽象类是半成品图纸，只能被继承，由子类实现抽象方法。" },
    { q: "abstract double area(); 表示？", options: ["空方法", "抽象方法，子类必须实现", "静态方法", "final 方法"], answer: 1, explain: "只有签名没有实现，强制子类接盘。" },
  ],
  15: [
    { q: "接口里的方法默认是？", options: ["private", "public abstract", "static", "final"], answer: 1, explain: "接口是能力契约，方法默认公开且必须实现。" },
    { q: "一个类可以实现几个接口？", options: ["1 个", "多个", "0 个", "最多 2 个"], answer: 1, explain: "implements 多个接口绕开单继承限制，≈ JS 的混入 mixins。" },
  ],
  16: [
    { q: "static 字段属于？", options: ["每个实例一份", "类（全体共享一份）", "方法", "包"], answer: 1, explain: "静态字段全类共享，类似模块级变量。Counter.count 计数实例数就是经典用法。" },
    { q: "final int MAX = 10; MAX = 20; 会？", options: ["成功", "编译报错", "运行报错", "自动覆盖"], answer: 1, explain: "final = 不可重新赋值，≈ JS const。" },
  ],
  17: [
    { q: "String.split(',') 返回？", options: ["String", "String[]", "List", "Map"], answer: 1, explain: "按分隔符切成数组，≈ JS 的 split，几乎一样好用。" },
    { q: "Objects.equals(a, b) 相比 a.equals(b) 的好处？", options: ["更快", "a 为 null 也不报错", "能比较类型", "没区别"], answer: 1, explain: "null 安全，防 NullPointerException。" },
  ],
  18: [
    { q: "10 / 0（整数除零）会？", options: ["返回 0", "ArithmeticException", "返回 Infinity", "编译报错"], answer: 1, explain: "整数除零抛异常（浮点除零才是 Infinity）。try-catch 接住它。" },
    { q: "finally 块的特点是？", options: ["可能不执行", "无论是否异常都执行", "只异常时执行", "只成功时执行"], answer: 1, explain: "收尾代码（关资源）的归宿，类似 React 的 cleanup。" },
  ],
  19: [
    { q: "throw 和 throws 的区别？", options: ["一样", "throw 抛出异常对象 / throws 声明方法可能抛的异常", "throws 抛出对象", "都是关键字没区别"], answer: 1, explain: "throw 在方法体内动手，throws 在方法签名上打预告。" },
    { q: "自定义异常通常继承？", options: ["String", "Exception 或 RuntimeException", "Object", "Throwable 只能直接"], answer: 1, explain: "继承 Exception = 受检异常，强制调用方处理。" },
  ],
  20: [
    { q: "生产项目最常用的日志门面是？", options: ["System.out.println", "SLF4J + Logback", "System.err", "printStackTrace"], answer: 1, explain: "slf4j 是门面接口、Logback 是实现，可换实现不改代码。" },
    { q: "日志级别从低到高正确的排序是？", options: ["INFO < DEBUG < ERROR", "DEBUG < INFO < WARN < ERROR", "ERROR < WARN < INFO", "随机"], answer: 1, explain: "DEBUG 调试细节 → INFO 常规 → WARN 警告 → ERROR 出事了。" },
  ],
  21: [
    { q: "Boss：checked 异常和 unchecked 异常的区别？", options: ["没区别", "checked 强制 try-catch 或 throws 声明", "checked 更快", "unchecked 不能抛"], answer: 1, explain: "Exception 及其子类（非 RuntimeException）是受检的，编译器逼你处理。" },
    { q: "BankAccount.withdraw 余额不足时正确做法是？", options: ["打印错误继续", "抛出异常让调用方处理", "静默返回", "return -1"], answer: 1, explain: "异常是状态异常的标准表达，比返回魔法数字干净得多。" },
    { q: "IllegalArgumentException 属于？", options: ["checked", "unchecked（RuntimeException）", "Error", "Throwable 接口"], answer: 1, explain: "参数不合法是编程错误，运行时异常，不强制捕获。" },
    { q: "封装的核心思想是？", options: ["代码变长", "隐藏内部状态，只暴露方法", "多用 static", "少写注释"], answer: 1, explain: "字段 private + 方法校验，外部无法绕过规则直接改余额。" },
    { q: "finally 在有 return 的情况下？", options: ["不执行", "仍然执行", "报错", "看编译器"], answer: 1, explain: "finally 连 return 都拦不住，收尾保证执行。" },
  ],
  22: [
    { q: "List<String> 里写 List<int> 会？", options: ["可以", "编译报错（泛型要用包装类）", "自动转换", "运行报错"], answer: 1, explain: "泛型只能用引用类型，int 要写 Integer，装箱自动发生。" },
    { q: "泛型的好处是？", options: ["更快", "编译期类型安全 + 一套代码多种类型", "省内存", "能装任意东西"], answer: 1, explain: "List<String> 里塞不进 Integer，错误在编译期就暴露，≈ TS 泛型。" },
  ],
  23: [
    { q: "ArrayList 和数组的区别？", options: ["没区别", "ArrayList 动态扩容", "数组更快必然", "ArrayList 不能遍历"], answer: 1, explain: "数组长度固定，ArrayList 自动扩容，日常首选。" },
    { q: "List<String> list = new ArrayList<>(); 里 <> 的作用是？", options: ["装饰", "钻石操作符，类型推断", "泛型擦除", "必须写全类型"], answer: 1, explain: "编译器从左边推断右边类型，少打一半字。" },
  ],
  24: [
    { q: "Map 的 key 重复 put 会？", options: ["报错", "覆盖旧值", "存两个", "自动重命名"], answer: 1, explain: "一个 key 对应一个 value，再 put 就是更新。" },
    { q: "getOrDefault(key, 0) 的意义是？", options: ["报错", "key 不存在时返回默认值而不是 null", "删除 key", "排序"], answer: 1, explain: "省掉 if (map.containsKey) 的样板代码。" },
  ],
  25: [
    { q: "两个内容相同的对象 == 比较结果是？", options: ["true", "false（比较引用）", "报错", "看运气"], answer: 1, explain: "== 比地址，两个 new 出来的对象地址必然不同；比内容用重写过的 equals。" },
    { q: "重写 equals 时必须同时重写？", options: ["toString", "hashCode", "getClass", "clone"], answer: 1, explain: "否则 HashMap/HashSet 会出 bug：相等对象必须等哈希。" },
  ],
  26: [
    { q: "栈（Stack）的特性是？", options: ["先进先出", "后进先出", "随机存取", "按优先级"], answer: 1, explain: "LIFO，≈ 浏览器历史回退。Java 推荐 Deque 接口代替老 Stack 类。" },
    { q: "队列（Queue）的特性是？", options: ["先进先出", "后进先出", "只能看头", "不能空"], answer: 0, explain: "FIFO，≈ 消息队列排队处理。" },
  ],
  27: [
    { q: "Files.writeString(p, s) 的作用是？", options: ["读文件", "写文件", "删除文件", "复制文件"], answer: 1, explain: "Java 11+ 的一行式文件 API，告别 IO 流样板代码。" },
    { q: "Java 的 checked IO 异常意味着？", options: ["可以忽略", "必须 try-catch 或 throws 声明", "自动处理", "编译不检查"], answer: 1, explain: "IOException 是受检异常，文件可能不存在，编译器逼你想清楚。" },
  ],
  28: [
    { q: "处理日期时间推荐的 API 是？", options: ["Date", "Calendar", "java.time（LocalDate 等）", "SimpleDateFormat"], answer: 2, explain: "Java 8+ 的 java.time 不可变且线程安全，老的 Date 一堆坑。" },
    { q: "DateTimeFormatter.ofPattern('yyyy-MM-dd') 的作用是？", options: ["解析字符串", "定义格式化模板", "获取当前时间", "时区转换"], answer: 1, explain: "≈ dayjs 的 format('YYYY-MM-DD')，注意大小写规则不同！" },
  ],
  29: [
    { q: "金额计算应该用？", options: ["double", "float", "BigDecimal", "int"], answer: 2, explain: "double 有精度误差（0.1+0.2≠0.3），钱必须 BigDecimal，且用字符串构造。" },
    { q: "new BigDecimal(0.1) 和 new BigDecimal('0.1') 的区别？", options: ["没区别", "前者带着 double 的精度误差", "后者报错", "前者更快"], answer: 1, explain: "浮点构造继承误差，字符串构造精确——面试高频题。" },
  ],
  30: [
    { q: "Boss：Map<String, List<Integer>> 适合表达？", options: ["一维数组", "学生→多科成绩（一对多）", "单个数字", "排序结果"], answer: 1, explain: "集合嵌套是日常业务建模的基本功，JSON 里也长这样。" },
    { q: "遍历 Map 推荐的方式是？", options: ["for (entry : map.entrySet())", "下标循环", "while(true)", "不能遍历"], answer: 0, explain: "entrySet 一次拿到 key 和 value，效率也最好。" },
    { q: "List.of(90, 85) 创建的列表？", options: ["可增删", "不可变", "是 Map", "自动排序"], answer: 1, explain: "不可变列表，适合固定数据；要增删用 new ArrayList。" },
    { q: "整数求和 sum / scores.size() 要得到小数应该？", options: ["直接除", "先把 sum 强转 double", "乘 1.0 都行但强转更明确", "B 或 C"], answer: 3, explain: "整数除法截断，必须有一方是浮点。" },
    { q: "HashMap 遍历顺序是？", options: ["插入顺序", "无序", "排序", "倒序"], answer: 1, explain: "要插入序用 LinkedHashMap，要排序用 TreeMap。" },
  ],
  31: [
    { q: "Lambda 表达式 n -> n * 2 等价于？", options: ["匿名内部类实现函数式接口", "方法定义", "变量", "泛型"], answer: 0, explain: "≈ JS 的箭头函数，但 Java 的 Lambda 只能实现单方法接口。" },
    { q: "System.out::println 里的 :: 是？", options: ["作用域", "方法引用", "泛型", "断言"], answer: 1, explain: "方法引用是 Lambda 的简写，参数原样传给该方法。" },
  ],
  32: [
    { q: "stream().filter(n -> n > 10) 的作用是？", options: ["排序", "过滤保留满足条件的元素", "求和", "去重"], answer: 1, explain: "≈ JS 的 Array.filter，连名字都一样。" },
    { q: "Stream 的特点是？", options: ["立即执行", "惰性求值，终结操作才触发", "修改原集合", "只能用一次但每次都新建"], answer: 1, explain: "中间操作惰性，collect/forEach 这类终结操作才真正计算，≈ RxJS 管道。" },
  ],
  33: [
    { q: "启动线程的正确方式是？", options: ["直接调 run()", "调 start()", "new Thread 就自动跑", "main 里同步调用"], answer: 1, explain: "run() 只是普通方法调用，start() 才开新线程——经典面试题。" },
    { q: "t.join() 的作用是？", options: ["启动线程", "等待该线程结束再继续", "中断线程", "合并线程"], answer: 1, explain: "主线程在这里等子线程干完活，≈ Promise.all 的等待。" },
  ],
  34: [
    { q: "两个线程同时 counter++ 1000 次结果可能？", options: ["一定是 2000", "小于 2000（竞态条件）", "大于 2000", "报错"], answer: 1, explain: "++ 不是原子操作（读-改-写三步），互相覆盖就丢更新。" },
    { q: "AtomicInteger.incrementAndGet() 的特点是？", options: ["更快但危险", "原子操作，线程安全", "加锁实现", "自动重试"], answer: 1, explain: "硬件级 CAS 指令保证不可分割，轻量于 synchronized。" },
  ],
  35: [
    { q: "Maven 的 pom.xml 相当于前端的？", options: ["tsconfig.json", "package.json", "vite.config.ts", ".gitignore"], answer: 1, explain: "依赖管理 + 构建配置都在里面，central 仓库 ≈ npm registry。" },
    { q: "Maven 坐标 groupId:artifactId:version 的作用是？", options: ["装饰", "唯一定位一个依赖包", "加密", "排序"], answer: 1, explain: "≈ npm 的 @scope/name@version，从中央仓库精确定位。" },
  ],
  36: [
    { q: "HTTP 200 表示？", options: ["错误", "成功", "重定向", "未找到"], answer: 1, explain: "2xx 成功、3xx 重定向、4xx 客户端错、5xx 服务端错——前端老本行了。" },
    { q: "Spring MVC 的 @GetMapping('/users') 相当于 Express 的？", options: ["app.use()", "app.get('/users', ...)", "app.listen()", "res.send()"], answer: 1, explain: "注解声明式路由 vs 回调式路由，思路一致。" },
  ],
  37: [
    { q: "注解（@Override 等）本质是？", options: ["注释", "代码的元数据，可被框架读取处理", "关键字", "宏"], answer: 1, explain: "给机器看的注释，Spring 的 @Service/@Autowired 全靠它。" },
    { q: "@Retention(RetentionPolicy.RUNTIME) 表示注解？", options: ["只存源码", "运行时可被反射读取", "编译期丢弃", "自动执行"], answer: 1, explain: "想用反射读注解就必须 RUNTIME 级别。" },
  ],
  38: [
    { q: "JUnit 测试方法的特点是？", options: ["必须是 main", "用 @Test 注解标记，独立运行", "要手动调用", "只能测私有方法"], answer: 1, explain: "每个 @Test 方法独立跑、独立断言，≈ vitest 的 it()。" },
    { q: "单元测试应该测？", options: ["私有实现细节", "公开行为（给定输入→期望输出）", "只测 UI", "只测性能"], answer: 1, explain: "测行为不测实现，重构时测试才不会碎一地。" },
  ],
  39: [
    { q: "JDBC 的作用是？", options: ["连浏览器", "Java 连接数据库的标准接口", "编译 SQL", "渲染页面"], answer: 1, explain: "所有 ORM（MyBatis 等）底层都是 JDBC，≈ 前端的 fetch 是 axios 的底层。" },
    { q: "SQL 注入的防护方式是？", options: ["字符串拼接 SQL", "PreparedStatement 参数化查询", "过滤特殊字符", "加密 SQL"], answer: 1, explain: "参数化让输入永远当数据不当代码，拼接 = 裸奔。" },
  ],
  40: [
    { q: "毕业 Boss：借书系统 borrowBook 书已借出时应该？", options: ["静默成功", "抛异常说明状态冲突", "自动再买一本", "返回 null"], answer: 1, explain: "状态冲突用异常表达，调用方决定怎么提示用户。" },
    { q: "后端分层 Controller → Service → 对应前端？", options: ["页面 → 组合式函数/API 层", "CSS → HTML", "路由 → 组件", "没有对应"], answer: 0, explain: "Controller 接请求 ≈ 页面组件，Service 管业务 ≈ 组合式函数，职责分离一个道理。" },
    { q: "学完 40 天后下一步最推荐？", options: ["直接读 RuoYi 源码", "用 Spring Boot 做个小项目练手", "转行", "重学一遍"], answer: 1, explain: "做一个自己的小项目巩固，再读 RuoYi 源码看工业级写法。" },
    { q: "Java 后端的核心技术栈组合是？", options: ["Spring Boot + MyBatis-Plus + MySQL", "React + Redux", "Vue + Pinia", "Node + Express"], answer: 0, explain: "国内后端标配全家桶，你 40 天学的都串起来了。" },
    { q: "👑 恭喜来到最后一题：Java 大师的标志是？", options: ["背完所有 API", "会用框架并理解底层原理，持续学习", "写得快", "年薪百万"], answer: 1, explain: "工具会过时，理解底层 + 持续学习的能力才带你走到最后。毕业快乐！" },
  ],
};
