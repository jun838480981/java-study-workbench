// 每日配套资料：廖雪峰教程真实章节链接（2026-10 抓取自官网目录）+ 官方文档
export interface Resource {
  name: string;
  url: string;
  type: "doc" | "tutorial" | "tool" | "repo";
}

const B = "https://liaoxuefeng.com/books/java";

export const RESOURCES: Record<number, Resource[]> = {
  1: [
    { name: "📖 廖雪峰：Java 简介", url: `${B}/introduction/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：Java 快速入门", url: `${B}/quick-start/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：安装 JDK", url: `${B}/quick-start/dev-env/install-jdk/index.html`, type: "tutorial" },
  ],
  2: [
    { name: "📖 廖雪峰：第一个 Java 程序", url: `${B}/quick-start/dev-env/first-program/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：变量和数据类型", url: `${B}/quick-start/basic/var-type/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：整数运算", url: `${B}/quick-start/basic/integer/index.html`, type: "tutorial" },
  ],
  3: [
    { name: "📖 廖雪峰：浮点数运算", url: `${B}/quick-start/basic/float/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：布尔运算", url: `${B}/quick-start/basic/boolean/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：字符和字符串", url: `${B}/quick-start/basic/string/index.html`, type: "tutorial" },
  ],
  4: [
    { name: "📖 廖雪峰：输入和输出", url: `${B}/quick-start/flow/input-output/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：if 判断 / switch", url: `${B}/quick-start/flow/if/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：while / do-while 循环", url: `${B}/quick-start/flow/while/index.html`, type: "tutorial" },
  ],
  5: [
    { name: "📖 廖雪峰：for 循环 / break-continue", url: `${B}/quick-start/flow/for/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：遍历数组", url: `${B}/quick-start/array-op/loop/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：数组排序", url: `${B}/quick-start/array-op/sort/index.html`, type: "tutorial" },
  ],
  6: [
    { name: "📖 廖雪峰：多维数组", url: `${B}/quick-start/array-op/multi-dim/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：方法（oop/basic/method）", url: `${B}/oop/basic/method/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：方法重载", url: `${B}/oop/basic/overload/index.html`, type: "tutorial" },
  ],
  7: [
    { name: "📖 廖雪峰：可变参数", url: `${B}/oop/basic/method/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：作用域 / classpath 和 jar", url: `${B}/oop/basic/scope/index.html`, type: "tutorial" },
  ],
  8: [
    { name: "📖 廖雪峰：字符串和编码", url: `${B}/oop/core/string-encoding/index.html`, type: "tutorial" },
  ],
  9: [
    { name: "📖 廖雪峰：StringBuilder", url: `${B}/oop/core/stringbuilder/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：StringJoiner", url: `${B}/oop/core/stringjoiner/index.html`, type: "tutorial" },
  ],
  10: [
    { name: "📖 廖雪峰：包装类型", url: `${B}/oop/core/wrapper/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：JavaBean / 枚举", url: `${B}/oop/core/javabean/index.html`, type: "tutorial" },
  ],
  11: [
    { name: "📖 廖雪峰：Java 核心类目录", url: `${B}/oop/core/index.html`, type: "tutorial" },
    { name: "🔧 OnlineGDB 在线运行", url: "https://www.onlinegdb.com/", type: "tool" },
  ],
  12: [
    { name: "📖 廖雪峰：面向对象基础", url: `${B}/oop/basic/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：构造方法", url: `${B}/oop/basic/constructor/index.html`, type: "tutorial" },
  ],
  13: [
    { name: "📖 廖雪峰：继承", url: `${B}/oop/basic/inherit/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：多态", url: `${B}/oop/basic/polymorphic/index.html`, type: "tutorial" },
  ],
  14: [
    { name: "📖 廖雪峰：抽象类", url: `${B}/oop/basic/abstract-class/index.html`, type: "tutorial" },
  ],
  15: [
    { name: "📖 廖雪峰：接口", url: `${B}/oop/basic/interface/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：静态字段和静态方法", url: `${B}/oop/basic/static/index.html`, type: "tutorial" },
  ],
  16: [
    { name: "📖 廖雪峰：包", url: `${B}/oop/basic/package/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：内部类", url: `${B}/oop/basic/inner-class/index.html`, type: "tutorial" },
  ],
  17: [
    { name: "📖 廖雪峰：Java 核心类", url: `${B}/oop/core/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：BigInteger", url: `${B}/oop/core/biginteger/index.html`, type: "tutorial" },
  ],
  18: [
    { name: "📖 廖雪峰：异常处理", url: `${B}/exception/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：捕获异常", url: `${B}/exception/try-catch/index.html`, type: "tutorial" },
  ],
  19: [
    { name: "📖 廖雪峰：抛出异常", url: `${B}/exception/throw/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：自定义异常", url: `${B}/exception/custom-exception/index.html`, type: "tutorial" },
  ],
  20: [
    { name: "📖 廖雪峰：使用 JDK Logging", url: `${B}/exception/jdk-logging/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 SLF4J 和 Logback", url: `${B}/exception/slf4j-logback/index.html`, type: "tutorial" },
  ],
  21: [
    { name: "📖 廖雪峰：断言", url: `${B}/exception/assert/index.html`, type: "tutorial" },
    { name: "🔧 OnlineGDB 在线运行", url: "https://www.onlinegdb.com/", type: "tool" },
  ],
  22: [
    { name: "📖 廖雪峰：什么是泛型", url: `${B}/generics/what-is-generics/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用泛型", url: `${B}/generics/use-generics/index.html`, type: "tutorial" },
  ],
  23: [
    { name: "📖 廖雪峰：Java 集合简介", url: `${B}/collection/quick-start/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 List", url: `${B}/collection/list/index.html`, type: "tutorial" },
  ],
  24: [
    { name: "📖 廖雪峰：使用 Map", url: `${B}/collection/map/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 Properties", url: `${B}/collection/properties/index.html`, type: "tutorial" },
  ],
  25: [
    { name: "📖 廖雪峰：编写 equals 方法", url: `${B}/collection/equals/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：编写 hashCode 方法", url: `${B}/collection/hashcode/index.html`, type: "tutorial" },
  ],
  26: [
    { name: "📖 廖雪峰：使用 Stack", url: `${B}/collection/stack/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 Deque / Queue", url: `${B}/collection/deque/index.html`, type: "tutorial" },
  ],
  27: [
    { name: "📖 廖雪峰：使用 Files", url: `${B}/io/files/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：IO 目录", url: `${B}/io/index.html`, type: "tutorial" },
  ],
  28: [
    { name: "📖 廖雪峰：LocalDateTime", url: `${B}/datetime/local-datetime/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：DateTimeFormatter", url: `${B}/datetime/datetime-formatter/index.html`, type: "tutorial" },
  ],
  29: [
    { name: "📖 廖雪峰：BigDecimal", url: `${B}/oop/core/bigdecimal/index.html`, type: "tutorial" },
  ],
  30: [
    { name: "📖 廖雪峰：集合目录", url: `${B}/collection/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 Set / Iterator", url: `${B}/collection/set/index.html`, type: "tutorial" },
    { name: "🔧 OnlineGDB 在线运行", url: "https://www.onlinegdb.com/", type: "tool" },
  ],
  31: [
    { name: "📖 廖雪峰：Lambda 基础", url: `${B}/functional/basic/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：方法引用", url: `${B}/functional/method-ref/index.html`, type: "tutorial" },
  ],
  32: [
    { name: "📖 廖雪峰：使用 Stream", url: `${B}/functional/stream/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：map / filter / reduce", url: `${B}/functional/stream/map/index.html`, type: "tutorial" },
  ],
  33: [
    { name: "📖 廖雪峰：多线程基础", url: `${B}/threading/basic/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：创建新线程", url: `${B}/threading/new-thread/index.html`, type: "tutorial" },
  ],
  34: [
    { name: "📖 廖雪峰：线程同步", url: `${B}/threading/synchronize/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 Atomic", url: `${B}/threading/synchronize/atomic/index.html`, type: "tutorial" },
  ],
  35: [
    { name: "📖 廖雪峰：Maven 介绍", url: `${B}/maven/basic/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：依赖管理", url: `${B}/maven/dependency/index.html`, type: "tutorial" },
  ],
  36: [
    { name: "📖 廖雪峰：Web 基础", url: `${B}/web/basic/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：HTTP 编程", url: `${B}/network/http/index.html`, type: "tutorial" },
  ],
  37: [
    { name: "📖 廖雪峰：注解", url: `${B}/annotation/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：反射", url: `${B}/reflection/index.html`, type: "tutorial" },
  ],
  38: [
    { name: "📖 廖雪峰：编写 JUnit 测试", url: `${B}/unit-test/junit-test/index.html`, type: "tutorial" },
    { name: "📖 JUnit 官方文档", url: "https://junit.org/junit5/", type: "doc" },
  ],
  39: [
    { name: "📖 廖雪峰：JDBC 简介", url: `${B}/jdbc/basic/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：JDBC 查询", url: `${B}/jdbc/query/index.html`, type: "tutorial" },
    { name: "📖 MyBatis-Plus 中文文档", url: "https://baomidou.com/", type: "doc" },
  ],
  40: [
    { name: "📖 廖雪峰：Spring Boot 第一个应用", url: `${B}/springboot/first-webapp/index.html`, type: "tutorial" },
    { name: "📖 廖雪峰：使用 REST", url: `${B}/spring/web/rest/index.html`, type: "tutorial" },
    { name: "🚀 RuoYi-Vue 源码（毕业下一步）", url: "https://github.com/yangzongzhuan/RuoYi-Vue", type: "repo" },
    { name: "🔧 OnlineGDB 在线运行", url: "https://www.onlinegdb.com/", type: "tool" },
  ],
};

export const RESOURCE_TYPE_LABEL: Record<Resource["type"], string> = {
  doc: "官方文档",
  tutorial: "教程",
  tool: "工具",
  repo: "源码",
};
