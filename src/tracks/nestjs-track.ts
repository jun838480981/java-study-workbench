// ============================================================
// nestjs-track.ts —— 「NestJS 勇者」30 天课程线数据文件
// 受众：会 Node/Express + React 的前端转后端（节奏偏快）
// 纯数据文件，无运行时逻辑
// ============================================================

export interface Lesson {
  /** 核心知识点 4~5 条 */
  points: string[];
  /** 示例代码（TS，可粘贴运行于 Nest 项目） */
  code: string;
  /** 类比：尽量映射到 Express / React 经验 */
  analogy: string;
}

export interface TaskLink {
  name: string;
  url: string;
  type: 'docs' | 'video' | 'blog' | 'tool';
}

export interface Task {
  /** 天数 1~30 */
  d: number;
  /** 主题标签 */
  tag: string;
  /** 标题 */
  t: string;
  /** 描述 */
  desc: string;
  /** 经验值 */
  xp: number;
  lesson: Lesson;
  links: TaskLink[];
}

export interface Exercise {
  prompt: string;
  starter: string;
  answer: string;
  expected: string;
}

export interface Quiz {
  q: string;
  options: [string, string, string, string];
  /** options 下标 */
  answer: number;
  explain: string;
}

export interface DayResource {
  name: string;
  url: string;
  type: 'docs' | 'video' | 'blog' | 'tool';
}

export const META = {
  id: 'nestjs',
  name: 'NestJS 勇者',
  icon: '🦁',
  tagline: '给 Express 老手的 30 天 NestJS 进阶线：从 IoC 原理到 Docker 部署，用企业级架构重写你熟悉的 CRUD 世界。',
} as const;

export const TASKS: Task[] = [
  {
    d: 1, tag: '入门', t: '环境搭建与第一个 Controller', xp: 100,
    desc: '用 Nest CLI 起项目，对比 Express 的 app.get 写出第一个 @Controller，理解“控制器类”取代“路由回调”的转变。',
    lesson: {
      points: [
        'npm i -g @nestjs/cli && nest new app 一键生成：模块、controller、service、测试齐全，相当于 express-generator 的强化版。',
        'Controller 用 @Controller("cats") 声明路由前缀，方法用 @Get()/@Post() 装饰，等价于 app.get("/cats", handler)。',
        '路由方法参数不是 (req,res) 而是 @Param/@Query/@Body/@Req 装饰的独立参数，类型安全由 TS 保证。',
        '方法直接 return 数据，Nest 自动序列化为 JSON，不需要 res.json()；Nest 自己接管了响应流。',
        '启动入口 main.ts 里 NestFactory.create(AppModule) 代替 express() + app.listen()。',
      ],
      code: `// cats.controller.ts —— 对比 Express: router.get('/cats', (req,res)=>res.json(...))
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  private cats = ['Tom'];

  @Get()
  findAll(): string[] {
    return this.cats; // 直接 return，Nest 负责 JSON 序列化
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id, name: this.cats[Number(id)] ?? null };
  }

  @Post()
  create(@Body('name') name: string) {
    this.cats.push(name);
    return { created: name };
  }
}`,
      analogy: '把 Controller 想成 React 组件：路由（JSX 位置）由装饰器声明，参数（props）逐个注入，而不是从一个大 req 对象里手动取。',
    },
    links: [
      { name: 'NestJS 中文文档 · 控制器', url: 'https://docs.nestjs.cn/10/controllers', type: 'docs' },
      { name: 'Nest CLI 文档', url: 'https://docs.nestjs.com/cli/overview', type: 'docs' },
    ],
  },
  {
    d: 2, tag: '核心原理', t: 'IoC 容器与依赖注入', xp: 120,
    desc: '理解 Nest 的灵魂：控制反转。搞清楚 Provider、token、容器如何 new 出你的 Service 并自动注入。',
    lesson: {
      points: [
        '没有 DI 时：new CatsService() 写死在 Controller 里，换实现、测试 mock 都要改源码——耦合。',
        'DI：Controller 构造函数声明 constructor(private catsService: CatsService)，容器在实例化时自动传入。',
        '@Injectable() 标记的类进入容器成为 Provider；@Module({ providers: [...] }) 把它们注册进 IoC 容器（类似一个全局的 service locator + 工厂）。',
        '默认 token 就是类本身：@Inject(CatsService) 等价于按类引用查找；也可用字符串 token 注入普通值。',
        'DI 最大的红利是测试：测试时传 new CatsServiceMock() 即可，不用改业务代码。',
      ],
      code: `@Injectable()
export class CatsService {
  findAll() { return ['Tom']; }
}

@Controller('cats')
export class CatsController {
  // 容器看到构造参数类型，反射出 CatsService 并注入（需 emitDecoratorMetadata）
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() { return this.catsService.findAll(); }
}

// 模块里注册
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}`,
      analogy: '像 React 的 Context + useEffect 依赖数组：组件不自己 new 依赖，而是“声明需要什么”，上层负责供给。DI 容器就是全局 Provider。',
    },
    links: [
      { name: 'NestJS 中文文档 · Providers', url: 'https://docs.nestjs.cn/10/providers', type: 'docs' },
      { name: 'NestJS 官方 · Dependency Injection', url: 'https://docs.nestjs.com/fundamentals/dependency-injection', type: 'docs' },
    ],
  },
  {
    d: 3, tag: '核心原理', t: '装饰器原理：Nest 的魔法从哪来', xp: 120,
    desc: '拆开装饰器这层“语法糖”：它只是高阶函数 + Reflect Metadata。理解后，@Controller/@Injectable 全部祛魅。',
    lesson: {
      points: [
        '装饰器 = 接收类/方法/参数并返回或修改它的函数，tsconfig 必须 experimentalDecorators + emitDecoratorMetadata。',
        '类装饰器拿到 constructor，可以往类上塞元数据：Reflect.defineMetadata("path", "cats", cls)。',
        'Nest 启动时用 Reflect.getMetadata 扫描所有元数据，才知道每个 Controller 挂了哪些路由、每个参数取 req 的哪部分。',
        'emitDecoratorMetadata 会自动写入参数的设计类型（design:type），这就是 @Injectable 按类型注入能工作的原因。',
        '自己写一个装饰器试试：10 行代码做一个 @Auth() 或 @Roles()，是后面 RBAC 的地基。',
      ],
      code: `// 手写一个迷你路由装饰器，理解 Nest 的机制
const ROUTES = Symbol('routes');
function Get(path: string): MethodDecorator {
  return (target, key) => {
    const routes = Reflect.getMetadata(ROUTES, target) ?? [];
    routes.push({ method: 'GET', path, handler: key });
    Reflect.defineMetadata(ROUTES, routes, target);
  };
}

class MiniController {
  @Get('/hello')
  hello() { return 'hi'; }
}

// 启动时反向扫描：Reflect.getMetadata(ROUTES, MiniController.prototype)
// 就能得到 [{ method:'GET', path:'/hello', handler:'hello' }] —— 这正是 Nest 注册路由的方式`,
      analogy: 'React 高阶组件（HOC）和装饰器是亲戚：withAuth(Component) 包一层加能力；装饰器只是把 HOC 写成 @Auth class 这种更顺眼的语法。',
    },
    links: [
      { name: 'TypeScript 官方 · Decorators', url: 'https://www.typescriptlang.org/docs/handbook/decorators.html', type: 'docs' },
      { name: 'NestJS 中文文档 · 自定义装饰器', url: 'https://docs.nestjs.cn/10/custom-decorators', type: 'docs' },
    ],
  },
  {
    d: 4, tag: '架构', t: '模块系统：Nest 的组件树', xp: 110,
    desc: 'Feature Module、共享模块、全局模块。理解 AppModule 是根，模块像 React 组件一样组合。',
    lesson: {
      points: [
        '每个 @Module() 声明四块：imports（引入其他模块）、controllers、providers、exports（对外提供的 Provider）。',
        'Provider 默认模块私有：A 模块的 Service 想被 B 用，必须在 A 的 exports 里列出，B 再 imports A。',
        '@Global() 模块（如配置）import 一次全局可用，但别滥用——显式依赖更可测。',
        '组织惯例：一个业务域一个模块（UserModule/OrderModule），AppModule 只负责 import 它们，类似 React 的 App.tsx 组装页面。',
        'forRoot()/forChild() 模式（如 TypeOrmModule.forRoot）是静态工厂，返回“配置化后的动态模块”。',
      ],
      code: `@Module({
  imports: [TypeOrmModule.forFeature([Cat])], // 动态模块：带配置的工厂
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 其他模块 import CatsModule 后可注入 CatsService
})
export class CatsModule {}

@Module({ imports: [CatsModule] })
export class ZooModule {} // 这里能注入 CatsService`,
      analogy: '模块 = React 的“组件 + props 边界”：imports 是父传子，exports 是子暴露的 props 接口；没有 export 就像没写进 return 的内部变量。',
    },
    links: [
      { name: 'NestJS 中文文档 · 模块', url: 'https://docs.nestjs.cn/10/modules', type: 'docs' },
    ],
  },
  {
    d: 5, tag: 'HTTP', t: 'Controller 进阶：路由、状态码、请求对象', xp: 100,
    desc: '子路由、@HttpCode、@Header、All 通配路由、访问原生 req/res——把 Express 的路由本领全部平移过来。',
    lesson: {
      points: [
        '装饰器路径可叠加：@Controller("users") + @Get(":id/posts") => /users/1/posts。',
        '@Post() @HttpCode(204) 修改默认 201 状态码；@Header("Cache-Control", "no-store") 设响应头。',
        '@All() 匹配所有方法；@Req()/@Res() 可拿原生对象，但注入 @Res 后 Nest 不再自动序列化，要手动 res.json()。',
        '参数装饰器全家桶：@Param/@Query/@Body/@Headers/@Ip/@Session，比从 req 上挖属性更类型安全。',
        '异步方法直接 async/await 或返回 Observable，Nest 都能处理。',
      ],
      code: `@Controller('users')
export class UsersController {
  @Get(':id/posts/:postId')
  getPost(
    @Param('id') id: string,
    @Param('postId') postId: string,
    @Query('lang') lang = 'zh',
  ) {
    return { userId: id, postId, lang };
  }

  @Post()
  @HttpCode(204)
  @Header('X-Powered-By', 'nest')
  create(@Body() dto: CreateUserDto) {
    return; // 204 No Content
  }
}`,
      analogy: '装饰器参数之于 req，就像 React 解构 props 之于 this.props：显式声明用到的部分，签名即文档。',
    },
    links: [
      { name: 'NestJS 中文文档 · 控制器', url: 'https://docs.nestjs.cn/10/controllers', type: 'docs' },
    ],
  },
  {
    d: 6, tag: '架构', t: 'Provider 深入：自定义 Provider 与作用域', xp: 130,
    desc: 'useValue/useClass/useFactory 三种注入方式、异步工厂、请求级作用域（Scope.REQUEST）。',
    lesson: {
      points: [
        'useValue：注入常量/配置对象，token 可为类或字符串 Symbol。',
        'useClass：接口多实现切换，测试时用这个替换为 Mock。',
        'useFactory：依赖其他 Provider 的工厂函数，支持 async（如建数据库连接），依赖用 inject: [Token] 声明。',
        '默认 Singleton 作用域——所有请求共享实例，所以别在 Service 实例属性里存 per-request 数据！',
        'Scope.REQUEST 每请求新建实例（有性能代价，且会向依赖链传染）；Scope.TRANSIENT 每次注入都新建。',
      ],
      code: `@Module({
  providers: [
    { provide: 'CONFIG', useValue: { port: 3000 } },            // 常量
    { provide: 'Storage', useClass: S3Storage },                 // 可替换实现
    {                                                            // 异步工厂
      provide: 'DB_POOL',
      useFactory: async (config) => createPool(config),
      inject: ['CONFIG'],
    },
  ],
})
export class CoreModule {}

// 注入字符串 token 必须显式 @Inject
constructor(@Inject('DB_POOL') private pool: Pool) {}`,
      analogy: 'useClass 切换实现 ≈ React 里通过 context 传组件实现（受控注入 UI 库）；Singleton 作用域 ≈ 模块级单例 module.exports，要警惕共享可变状态。',
    },
    links: [
      { name: 'NestJS 中文文档 · 注入作用域', url: 'https://docs.nestjs.cn/10/fundamentals/injection-scopes', type: 'docs' },
    ],
  },
  {
    d: 7, tag: '数据校验', t: 'DTO + class-validator + ValidationPipe', xp: 120,
    desc: '声明式校验请求体：告别手写 if (!body.name)。这是 Nest 对 Express 开发者体验提升最大的一环。',
    lesson: {
      points: [
        'DTO 是普通 class（必须 class，不能是 interface，运行时才拿得到元数据），字段上挂 @IsString() 等装饰器。',
        'main.ts 里全局开启 ValidationPipe({ whitelist: true, transform: true })：多余字段剔除、payload 自动转成 DTO 实例。',
        'transform: true 让 @Param("id") 配合 @ParseIntPipe 直接得到 number，省去手写 Number()。',
        '校验失败自动抛 400 BadRequestException，message 里带具体哪个字段错了。',
        '类比 React：DTO 装饰器就是 zod / formik 的 schema，但声明在类字段上，与 TS 类型天然同步。',
      ],
      code: `import { IsString, IsInt, IsEmail, Min } from 'class-validator';

export class CreateUserDto {
  @IsString() name: string;
  @IsEmail() email: string;
  @IsInt() @Min(0) age: number;
}

// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

// controller
@Post()
create(@Body() dto: CreateUserDto) {
  return this.usersService.create(dto); // dto 已通过校验、字段已过滤
}`,
      analogy: '等于把 Express 里 30 行的手写校验 if 换成了 zod schema，而且 schema 本身就是 TS 类型。',
    },
    links: [
      { name: 'NestJS 中文文档 · ValidationPipe 技术', url: 'https://docs.nestjs.cn/10/techniques/validation', type: 'docs' },
      { name: 'class-validator 文档', url: 'https://github.com/typestack/class-validator', type: 'docs' },
    ],
  },
  {
    d: 8, tag: '错误处理', t: '异常过滤器：统一错误响应', xp: 120,
    desc: 'HttpException 家族 + @Catch 全局过滤器，把 Express 的错误中间件升级为强类型、可定制响应结构的异常层。',
    lesson: {
      points: [
        '业务代码 throw new NotFoundException("cat not found")，Nest 自动转 404 JSON，无需 try/catch 传递。',
        '内置异常都带状态码：BadRequestException(400)、UnauthorizedException(401)、ForbiddenException(403)…',
        '自定义响应结构用 @Catch() 装饰类实现 ExceptionFilter，@UseFilters(全局) 注册。',
        '过滤器能拿到 host.switchToHttp().getResponse()，可完全接管响应体格式（如 { code, message, data }）。',
        '未知异常统一 500 且生产环境隐藏细节——把 Express 的 error middleware 的 if/else 分支全部收进一个类。',
      ],
      code: `@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    res.status(status).json({
      code: status,
      message: exception instanceof HttpException
        ? exception.message : 'Internal Server Error',
    });
  }
}

// main.ts: app.useGlobalFilters(new AllExceptionsFilter());`,
      analogy: 'Express 里 app.use((err,req,res,next)=>{...}) 的地狱分支，在这里变成一个带类型的 catch-all，错误处理也有了 DI。',
    },
    links: [
      { name: 'NestJS 中文文档 · 异常过滤器', url: 'https://docs.nestjs.cn/10/exception-filters', type: 'docs' },
    ],
  },
  {
    d: 9, tag: '中间件', t: '中间件：熟悉的 Express 味道', xp: 100,
    desc: 'Nest 中间件就是你写过的 Express 中间件，只是注册到模块上，还能依赖注入。',
    lesson: {
      points: [
        '类中间件实现 NestMiddleware，@Injectable() 修饰，可以注入 Service——Express 中间件做不到（只能闭包传参）。',
        '在 Module 的 configure() 里 apply(...).forRoutes("cats") 按路由挂载，比 app.use 全局喷洒更精准。',
        '函数式中间件也支持：(req,res,next)=>{...}，与 Express 完全一致。',
        '中间件、守卫、拦截器、管道、过滤器的执行顺序要背下来：Middleware → Guard → Interceptor(前) → Pipe → Handler → Interceptor(后) → ExceptionFilter。',
        '第三方 Express 中间件（如 helmet、morgan）直接 app.use() 兼容——底层就是 Express（默认适配器）。',
      ],
      code: `@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(req.method + ' ' + req.originalUrl);
    next(); // 和 Express 一模一样
  }
}

@Module({ controllers: [CatsController] })
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}`,
      analogy: '这是 30 天里最像 Express 的一天：next()、req/res 全都认识，区别只是注册写在了模块的 configure 里。',
    },
    links: [
      { name: 'NestJS 中文文档 · 中间件', url: 'https://docs.nestjs.cn/10/middleware', type: 'docs' },
    ],
  },
  {
    d: 10, tag: '横切关注点', t: '拦截器：AOP 式的请求包装', xp: 120,
    desc: '用 RxJS 的 map/tap 在响应前后做统一处理：响应包裹、日志、耗时统计、缓存。',
    lesson: {
      points: [
        '拦截器 = 可注入的类实现 NestInterceptor，围绕 handler 前后执行，相当于“中间件但能改返回值”。',
        '核心是 next.handle() 返回 Observable<Response>，用 RxJS 操作符加工：map 改响应体、tap 做副作用（日志）。',
        '经典用法：TransformInterceptor 把所有响应包成 { code:0, data, ts }——配合 Day8 过滤器形成统一协议。',
        'TimingInterceptor 用 tap + 计时打日志，取代 Express 里手写的耗时中间件。',
        '拦截器绑定方式多样：@UseInterceptors() 方法级 / controller 级 / APP_INTERCEPTOR 全局 token。',
      ],
      code: `@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({ code: 0, data, ts: Date.now() })),
    );
  }
}

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler) {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => console.log('耗时', Date.now() - start, 'ms')),
    );
  }
}

@UseInterceptors(TimingInterceptor, TransformInterceptor)
@Controller('cats') {}`,
      analogy: '像 React 的 ErrorBoundary + HOC 组合：不侵入组件（handler）内部，就在外层包一层统一加工 props（响应）。RxJS 的 pipe 就是这个包装语法。',
    },
    links: [
      { name: 'NestJS 中文文档 · 拦截器', url: 'https://docs.nestjs.cn/10/interceptors', type: 'docs' },
    ],
  },
  {
    d: 11, tag: '管道', t: '管道与自定义装饰器', xp: 120,
    desc: '内置 ParseIntPipe/ParseUUIDPipe、自写 ValidationPipe 思路，再结合参数装饰器打造 @CurrentUser()。',
    lesson: {
      points: [
        '管道在 handler 前对参数做转换（transform）或校验（返回异常即拦截），@Pipe() 绑定在参数/方法/全局。',
        '内置开箱即用：@Query("page", ParseIntPipe)、@Param("id", ParseUUIDPipe)，配合 Day7 的 transform 直接得到正确类型。',
        '自定义管道实现 PipeTransform，transform(value, metadata) 返回处理后的值——比如把逗号分隔串转数组。',
        '自定义参数装饰器：createParamDecorator((data, ctx) => ...)，几行实现 @CurrentUser()。',
        '装饰器 + 管道 + 反射组合是 Nest 的“框架扩展 API”，RBAC 的 @Roles() 也是这套东西。',
      ],
      code: `export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().user,
);

// 用法：JWT 守卫验证后 user 挂在 req 上
@Get('me')
me(@CurrentUser() user: User) {
  return user;
}

// 自定义管道
@Injectable()
export class ParseArrayPipe implements PipeTransform {
  transform(value: string, meta: ArgumentMetadata): string[] {
    if (!value) throw new BadRequestException('param required');
    return value.split(',');
  }
}
// @Query('ids', ParseArrayPipe) ids: string[]`,
      analogy: '管道 ≈ Express 里 req.params 处理的链式中间件，但绑定在具体参数上；@CurrentUser() ≈ React 里 useUser() hook——一行声明取上下文。',
    },
    links: [
      { name: 'NestJS 中文文档 · 管道', url: 'https://docs.nestjs.cn/10/pipes', type: 'docs' },
    ],
  },
  {
    d: 12, tag: '认证', t: 'JWT 认证与 Guard', xp: 140,
    desc: '用 @nestjs/jwt + Passport 实现登录签发 token、JwtGuard 保护路由——Nest 接入认证的标准姿势。',
    lesson: {
      points: [
        '守卫（Guard）实现 CanActivate，返回 true 放行 / false 抛 403，在中间件之后、管道之前执行，专职鉴权。',
        '流程：POST /auth/login 校验账号 → jwtService.sign(payload) 发 token；受保护路由被 JwtAuthGuard 拦截解析 Bearer token。',
        'Passport 策略（passport-jwt）负责“怎么验”，Guard 负责“拦不拦”，Nest 官方组合两者。',
        '@SetMetadata + 自定义 @Public() 装饰器可让个别路由跳过全局 JWT 守卫（配合 Reflector 读元数据）。',
        'Access Token 短期有效，Refresh Token 换新——之后 Day13 的 RBAC 在 payload 里加 role。',
      ],
      code: `@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} // 基于 passport-jwt 策略

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET') });
  }
  async validate(payload: { sub: number; role: string }) {
    return payload; // 结果挂到 req.user
  }
}

@Controller('profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  @Get() me(@CurrentUser() user) { return user; }
}`,
      analogy: 'Guard ≈ React Router 的 <RequireAuth> 包装组件：路由渲染前判断“让不让进”，验证逻辑（Strategy）与守卫（跳转）分层，概念一模一样。',
    },
    links: [
      { name: 'NestJS 中文文档 · 守卫', url: 'https://docs.nestjs.cn/10/guards', type: 'docs' },
      { name: 'NestJS 中文文档 · 认证', url: 'https://docs.nestjs.cn/10/security/authentication', type: 'docs' },
    ],
  },
  {
    d: 13, tag: '认证', t: 'RBAC：基于角色的权限控制', xp: 130,
    desc: '@Roles("admin") + RolesGuard，用 Reflector 读路由元数据实现声明式权限，这是 Nest 元数据机制的实战巅峰。',
    lesson: {
      points: [
        '@SetMetadata("roles", ["admin"]) 或封装成 @Roles(...) 参数装饰器，把权限要求写在路由上。',
        'RolesGuard 用 Reflector.getAllAndOverride 读取 handler/class 上的 roles 元数据，和 req.user.role 比对。',
        'Guard 全局注册（APP_GUARD token）+ @Public() 白名单，是生产项目的主流组合。',
        '角色硬编码够用，复杂场景升级 Casl 库（ability-based），装饰器换 @CheckAbilities()，思路不变。',
        '声明式权限的收益：路由文件一扫就知道谁能访问，无需在 handler 里散落 if (user.role !== ...)。',
      ],
      code: `export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>('roles', [
      ctx.getHandler(), ctx.getClass(),
    ]);
    if (!required) return true;
    const { user } = ctx.switchToHttp().getRequest();
    return required.includes(user.role); // 不满足则自动 403
  }
}

@Roles('admin')
@Delete(':id')
remove(@Param('id') id: string) { return this.usersService.remove(id); }`,
      analogy: '@Roles 之于接口，就像 aria-hidden / disabled 之于按钮：能力约束写在声明处，运行时由统一守卫强制执行，不用每处手写检查。',
    },
    links: [
      { name: 'NestJS 中文文档 · 授权', url: 'https://docs.nestjs.cn/10/security/authorization', type: 'docs' },
      { name: 'Casl 集成文档', url: 'https://docs.nestjs.cn/10/security/authorization', type: 'docs' },
    ],
  },
  {
    d: 14, tag: '数据库', t: 'TypeORM 集成与实体建模', xp: 140,
    desc: '连接 PostgreSQL/MySQL，定义 Entity，用 Repository 模式替代 SQL 拼接，理解 Nest 里的数据层。',
    lesson: {
      points: [
        'TypeOrmModule.forRoot({ type, host, entities, synchronize }) 连库；生产环境务必关闭 synchronize，用迁移管理表结构。',
        '@Entity() 类 = 一张表；@Column() / @PrimaryGeneratedColumn() / @OneToMany() 声明字段与关系。',
        'forFeature([Cat]) 注册 Repository，Service 里 @InjectRepository(Cat) 注入——数据访问也有 DI。',
        'Repository 内置 findAll(findOne/save/delete)，复杂查询用 QueryBuilder，参数化天然防 SQL 注入。',
        '与 Express + mysql2 的裸写对比：不用自己管连接池封装和手写 CRUD SQL，但代价是 ORM 心智负担。',
      ],
      code: `@Entity()
export class Cat {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column({ default: 0 }) age: number;
  @CreateDateColumn() createdAt: Date;
}

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private repo: Repository<Cat>,
  ) {}
  findAll() { return this.repo.find(); }
  create(dto: CreateCatDto) { return this.repo.save(this.repo.create(dto)); }
  async findOne(id: number) {
    const cat = await this.repo.findOneBy({ id });
    if (!cat) throw new NotFoundException('Cat not found'); // 404 就地抛
    return cat;
  }
}`,
      analogy: 'Entity ≈ React 组件的 props 类型 + Prisma model 的合体；Repository ≈ 现成的 useFetch 封装，常用操作开箱即用。',
    },
    links: [
      { name: 'NestJS 中文文档 · TypeORM 集成', url: 'https://docs.nestjs.cn/10/techniques/database', type: 'docs' },
    ],
  },
  {
    d: 15, tag: '数据库', t: 'Prisma：类型安全的现代替代', xp: 120,
    desc: 'Prisma schema 生成 TS 类型 + PrismaService 注入，对比 TypeORM 的取舍——很多新项目已从 TypeORM 迁到 Prisma。',
    lesson: {
      points: [
        'schema.prisma 声明模型，npx prisma generate 生成带完整类型的 client——查询结果自动推断，比 TypeORM 的类型体验好一档。',
        'PrismaService 继承 PrismaClient 并实现 OnModuleInit 里 $connect()，包一层就能被 Nest 容器管理。',
        'prisma migrate dev 生成迁移文件并应用；无 synchronize 陷阱，schema 即唯一事实来源。',
        'prisma.user.findMany({ where, include: { posts: true } }) 一条链完成关联查询，QueryBuilder 基本不需要。',
        '取舍：Prisma 迁走了“手写 Entity 双份定义”的心智，但动态复杂 SQL 灵活性略低于 QueryBuilder。',
      ],
      code: `// schema.prisma
// model Cat { id Int @id @default(autoincrement())
//   name String  age Int @default(0)  createdAt DateTime @default(now()) }

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() { await this.$connect(); }
}

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}
  findAll() { return this.prisma.cat.findMany(); }
  create(data: CreateCatDto) { return this.prisma.cat.create({ data }); }
}`,
      analogy: 'schema.prisma 之于数据库，就像 TS 类型文件之于前端项目：一处声明，处处自动补全，改字段即编译报错。',
    },
    links: [
      { name: 'NestJS 官方 · Prisma 集成', url: 'https://docs.nestjs.com/recipes/prisma', type: 'docs' },
      { name: 'Prisma 官方文档', url: 'https://www.prisma.io/docs', type: 'docs' },
    ],
  },
  {
    d: 16, tag: '配置', t: '配置管理与环境变量', xp: 100,
    desc: '@nestjs/config 读取 .env，ConfigModule 全局化、类型安全校验（Joi/zod），告别 process.env 散落各处。',
    lesson: {
      points: [
        'ConfigModule.forRoot({ isGlobal: true }) 加载 .env，任意处注入 ConfigService 读取 configService.get("JWT_SECRET")。',
        '配置文件模式：写一个 configuration.ts 返回嵌套对象，configService.get("db.port") 更结构化。',
        '环境切换 NODE_ENV=development/production 加载不同 .env 文件；.env 务必进 .gitignore。',
        '用 Joi（或 zod）做 env 校验：启动时缺变量直接报错，而不是上线后才炸。',
        '类 React：.env ≈ Vite 的 import.meta.env，ConfigService ≈ 统一的 env.ts 访问层，注入让依赖显式化。',
      ],
      code: `// configuration.ts
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db: { host: process.env.DB_HOST },
  jwt: { secret: process.env.JWT_SECRET },
});

// app.module.ts
ConfigModule.forRoot({
  isGlobal: true,
  load: [configuration],
  validationSchema: Joi.object({ PORT: Joi.number(), JWT_SECRET: Joi.string().required() }),
});

// 注入使用
constructor(private config: ConfigService) {}
const port = this.config.get<number>('port');`,
      analogy: '等价于前端把 import.meta.env 收口到一个 env.ts 里并跑一遍 zod 校验——启动即校验，坏配置活不过 build。',
    },
    links: [
      { name: 'NestJS 中文文档 · 配置', url: 'https://docs.nestjs.cn/10/techniques/configuration', type: 'docs' },
    ],
  },
  {
    d: 17, tag: '文档', t: 'Swagger 自动生成 API 文档', xp: 100,
    desc: '接入 @nestjs/swagger，用 @ApiProperty 装饰 DTO，代码即文档——前端同事再也不来问你接口格式。',
    lesson: {
      points: [
        'SwaggerModule.loadPluginMetadata / DocumentBuilder：build 标题版本 → createDocument → SwaggerModule.setup("docs")。',
        'DTO 字段加 @ApiProperty({ example }) 自动生成 schema；配合 ValidationPipe 的 whitelist，文档与校验同源。',
        '@ApiTags("cats") 给 controller 分组；@ApiOperation({ summary }) 描述接口；@ApiResponse({ status: 404 }) 声明错误。',
        'CLI 插件（@nestjs/swagger plugin）可在 tsconfig 配 plugins 后自动推断文档，免写装饰器。',
        '访问 /docs 即得交互式 Swagger UI，可导出 OpenAPI JSON 给前端生成类型（openapi-typescript）。',
      ],
      code: `// main.ts
const config = new DocumentBuilder()
  .setTitle('Cats API').setVersion('1.0').addBearerAuth().build();
const doc = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, doc);

// dto
export class CreateCatDto {
  @ApiProperty({ example: 'Tom' })
  @IsString() name: string;
}`,
      analogy: '等于前端 Storybook 的后端版：真实代码自动产出可交互的接口文档，类型变了文档跟着变，不存在“文档过期”。',
    },
    links: [
      { name: 'NestJS 中文文档 · OpenAPI(Swagger)', url: 'https://docs.nestjs.cn/10/openapi/introduction', type: 'docs' },
    ],
  },
  {
    d: 18, tag: '日志', t: '日志与可观测性', xp: 110,
    desc: '内置 Logger、请求日志拦截器、接入 pino 结构化日志，让生产环境的问题可追溯。',
    lesson: {
      points: [
        'Nest 自带 Logger：new Logger(ClassName.name)，logger.log/warn/error，带时间戳与上下文。',
        '自定义 LoggerService 可以替换全局实现：app.useLogger(new MyLogger())，例如接 ELK/云日志。',
        '生产推荐 nestjs-pino：JSON 结构化日志 + 请求日志自动记录（含耗时、状态码），性能远好于 console。',
        '日志分级 debug/info/warn/error，通过 LOG_LEVEL 环境变量控制输出，开发细、生产精。',
        '结构化日志的核心：一行 JSON 一条事件，字段可检索——console.log 文本串在排查时是灾难。',
      ],
      code: `// main.ts —— pino 接入
app.useLogger(app.get(Logger)); // nestjs-pino
// app.module.ts
LoggerModule.forRoot({
  pinoHttp: {
    level: process.env.LOG_LEVEL ?? 'info',
    transport: process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty' } : undefined, // 本地美化，生产纯 JSON
  },
});

// 业务里
@Injectable()
export class CatsService {
  private logger = new Logger(CatsService.name);
  create(dto: CreateCatDto) {
    this.logger.log({ msg: 'cat created', name: dto.name });
    return { id: 1 };
  }
}`,
      analogy: 'console.log 之于结构化日志 ≈ alert 之于 Sentry：临时可用，长期排查必须可检索、可聚合。',
    },
    links: [
      { name: 'NestJS 中文文档 · Logger', url: 'https://docs.nestjs.cn/10/techniques/logger', type: 'docs' },
      { name: 'nestjs-pino', url: 'https://github.com/iamolegga/nestjs-pino', type: 'tool' },
    ],
  },
  {
    d: 19, tag: '缓存', t: '性能：缓存与压缩', xp: 120,
    desc: 'CacheModule（或 Redis）给热点接口加缓存、cache-manager 基础、响应压缩与 @CacheTTL 调优。',
    lesson: {
      points: [
        'CacheModule.register() 内存缓存 + @UseInterceptors(CacheInterceptor) + @CacheTTL(60)：GET 响应自动缓存 60 秒。',
        '需要主动控制时注入 CACHE_MANAGER：cacheManager.get/set/del，适合“写时失效”模式（更新数据后 del 缓存）。',
        '生产用 Redis：CacheModule.registerAsync({ useFactory: () => ({ store: redisStore, ... }) })，多实例共享缓存。',
        'app.use(compression()) 开 gzip 响应压缩，一行白赚传输量；静态资源交给 CDN。',
        '缓存原则：只缓存幂等 GET、写操作后主动失效、考虑缓存击穿时给 key 加随机 TTL。',
      ],
      code: `@Module({ imports: [CacheModule.register({ ttl: 60 })] })
export class CatsModule {}

@Controller('cats')
@UseInterceptors(CacheInterceptor) // 自动缓存所有 GET 响应
export class CatsController {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  @Get('expensive')
  @CacheTTL(300)
  expensive() { return heavyCompute(); }

  @Post()
  async create(@Body() dto: CreateCatDto) {
    await this.cache.del('cats_all'); // 写后失效
    return { ok: true };
  }
}`,
      analogy: '和 React Query 的 staleTime 缓存概念一致：TTL 内直接返回旧数据，mutation 成功后 invalidate 缓存键。',
    },
    links: [
      { name: 'NestJS 中文文档 · Caching', url: 'https://docs.nestjs.cn/10/techniques/caching', type: 'docs' },
    ],
  },
  {
    d: 20, tag: '架构', t: 'CQRS 概览：读写分离思想', xp: 130,
    desc: '了解 @nestjs/cqrs：Command 负责写、Query 负责读、Event 解耦副作用。先懂思想，不必急着用。',
    lesson: {
      points: [
        'CQRS = Command Query Responsibility Segregation：写操作走 CommandBus，读操作走 QueryBus，各自独立建模。',
        'Handler 是 @CommandHandler(CreateCatCommand) 类，业务逻辑从 Service 的“上帝方法”拆成一个个独立小类。',
        'EventBus 发布事件（如 CatCreatedEvent），多个 @EventsHandler 各自响应（发邮件、写审计）——写路径与副作用解耦。',
        '适用场景：写读比例悬殊、业务复杂到单 Service 膨胀；简单 CRUD 上 CQRS 是过度设计，别为了架构而架构。',
        '与 Express 对比：Express 没有这层抽象，事件解耦要自己搭 EventEmitter——Nest 给了现成的、带 DI 的实现。',
      ],
      code: `export class CreateCatCommand { constructor(public readonly name: string) {} }

@CommandHandler(CreateCatCommand)
export class CreateCatHandler implements ICommandHandler<CreateCatCommand> {
  constructor(private repo: CatsRepository, private bus: EventBus) {}
  async execute(cmd: CreateCatCommand) {
    const cat = await this.repo.save(cmd.name);
    this.bus.publish(new CatCreatedEvent(cat.id)); // 副作用交给事件
    return cat;
  }
}

// controller
@Post()
create(@Body('name') name: string) {
  return this.commandBus.execute(new CreateCatCommand(name));
}`,
      analogy: '像前端从“一个大 reducer”拆成 Redux Toolkit 的独立 slice：每个 action 一个 reducer，事件广播让订阅者各自处理，写路径不再膨胀。',
    },
    links: [
      { name: 'NestJS 中文文档 · CQRS', url: 'https://docs.nestjs.cn/10/recipes/cqrs', type: 'docs' },
    ],
  },
  {
    d: 21, tag: '测试', t: '单元测试：Jest + DI 的红利', xp: 130,
    desc: 'Test.createTestingModule 替换依赖为 mock，Service/Controller 单元测试快如闪电。',
    lesson: {
      points: [
        'nest new 生成的 .spec.ts 就是 Jest 单测；npm run test 全量、test:watch 增量、test:cov 覆盖率。',
        '核心 API：Test.createTestingModule({ controllers, providers: [{ provide: CatsService, useValue: mock }] }).compile()。',
        '依赖注入让 mock 成为一等公民：useValue 直接换成 stub 对象，无需 monkey-patch require。',
        '用 jest.fn() 记录调用断言：expect(spy).toHaveBeenCalledWith(dto)。',
        '测试要覆盖的行为：正常路径、边界（空列表）、抛异常路径（NotFound），命中即足够，别追覆盖率数字。',
      ],
      code: `describe('CatsController', () => {
  let controller: CatsController;
  const serviceMock = { findAll: jest.fn().mockResolvedValue(['Tom']) };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [{ provide: CatsService, useValue: serviceMock }],
    }).compile();
    controller = moduleRef.get(CatsController);
  });

  it('返回所有猫', async () => {
    expect(await controller.findAll()).toEqual(['Tom']);
    expect(serviceMock.findAll).toHaveBeenCalled();
  });
});`,
      analogy: '等于把 React Testing Library 的“注入 mock props”搬到了后端：依赖都是注入的，测试时给假的就行，无网络无数据库。',
    },
    links: [
      { name: 'NestJS 中文文档 · 单元测试', url: 'https://docs.nestjs.cn/10/fundamentals/testing', type: 'docs' },
    ],
  },
  {
    d: 22, tag: '测试', t: 'E2E 测试：真实的 HTTP 请求', xp: 120,
    desc: 'supertest 对编译好的 app 发真实请求，验证整条路由 + 管道 + 过滤器链路。',
    lesson: {
      points: [
        'E2E 测试文件在 test/ 目录：createTestingModule 编译整个 AppModule，app.init() 后用 request(app.getHttpServer()) 发请求。',
        '断言完整行为：expect(res.status).toBe(201) + expect(res.body).toMatchObject({...})。',
        'E2E 需要隔离环境：独立测试数据库（或 testcontainers 起容器），beforeAll 建表 / afterAll 清理。',
        '推荐测“黄金路径 + 一两个错误路径”的完整链路，跑在 CI 里，比堆单元测试更能防回归。',
        'jest-e2e.json 配置区分单测与 E2E，npm run test:e2e 运行。',
      ],
      code: `describe('Cats (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // 与生产一致
    await app.init();
  });

  it('POST /cats 创建并回读', async () => {
    const res = await request(app.getHttpServer())
      .post('/cats').send({ name: 'Tom', age: 3 });
    expect(res.status).toBe(201);
    const got = await request(app.getHttpServer()).get('/cats');
    expect(got.body).toContainEqual(expect.objectContaining({ name: 'Tom' }));
  });

  it('校验失败返回 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/cats').send({ name: 123 });
    expect(res.status).toBe(400);
  });
});`,
      analogy: '就是前端 Playwright/Cypress 的后端版：不开 UI，直接对 HTTP 边界做“用户视角”断言。',
    },
    links: [
      { name: 'NestJS 中文文档 · E2E 测试', url: 'https://docs.nestjs.cn/10/fundamentals/testing', type: 'docs' },
      { name: 'supertest', url: 'https://github.com/ladjs/supertest', type: 'tool' },
    ],
  },
  {
    d: 23, tag: '性能', t: '性能：N+1、连接池与负载', xp: 130,
    desc: '排查 ORM 的 N+1 查询、启用连接池、理解 Node 单进程瓶颈与 PM2 多进程。',
    lesson: {
      points: [
        'N+1 是最大杀手：循环里逐条查询。用 relations/join 预加载（TypeORM）或 include（Prisma）一次取回。',
        '连接池是标配：TypeORM 连接自带池，Prisma 用 connection_limit 参数；池太小吞吐上不去，太大压垮数据库。',
        'Node 是单进程：PM2 cluster 模式按 CPU 核数起多进程，或用容器多副本 + 负载均衡。',
        '接口慢先量化：pino 请求日志耗时 → APM（如 OpenTelemetry）定位到具体 SQL，别凭感觉优化。',
        '大列表必须分页（skip/take + count），排序字段建索引——这在任何框架里都成立。',
      ],
      code: `// 反例：N+1
const cats = await repo.find();
for (const c of cats) c.owner = await ownerRepo.findOneBy({ id: c.ownerId });

// 正解：一次 join
const cats = await repo.find({ relations: { owner: true } });

// Prisma 等价
const cats = await prisma.cat.findMany({ include: { owner: true } });

// 分页
@Get()
async page(@Query('page', ParseIntPipe) page = 1,
           @Query('size', ParseIntPipe) size = 20) {
  const [items, total] = await this.repo.findAndCount({
    skip: (page - 1) * size, take: size,
    relations: { owner: true },
  });
  return { items, total, page, size };
}`,
      analogy: 'N+1 之于 ORM ≈ React 里 map 里逐个 setState 触发多次重渲染：不合并批处理，渲染（查询）次数爆炸。',
    },
    links: [
      { name: 'TypeORM 性能与连接池', url: 'https://orkhan.gitbook.io/typeorm/docs/connection', type: 'docs' },
    ],
  },
  {
    d: 24, tag: '部署', t: 'Docker 容器化', xp: 130,
    desc: '写多阶段构建的 Dockerfile：builder 装依赖编译，runner 只带 dist + 生产依赖，镜像从 1GB 瘦到 200MB。',
    lesson: {
      points: [
        '多阶段构建：FROM node:20 AS builder 装全部依赖并 nest build；FROM node:20 AS runner 只拷 dist、node_modules(生产) 与 package.json。',
        'runner 阶段 npm ci --omit=dev，并建非 root 用户运行（USER node），安全基线。',
        '.dockerignore 排除 node_modules/dist/.git，避免缓存与体积爆炸。',
        '配置全走环境变量（Day16 的 ConfigService）：容器无 .env 文件，docker run -e 或 compose env_file 注入。',
        'docker-compose 编排 app + postgres + redis，depends_on + healthcheck 处理启动顺序。',
      ],
      code: `# ---- builder ----
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runner ----
FROM node:20 AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && chown -R node:node /app
COPY --from=builder --chown=node:node /app/dist ./dist
USER node
CMD ["node", "dist/main.js"]`,
      analogy: '等价于前端 build 产物只部署 dist：builder 里的源码、devDeps 都不进最终镜像，产物最小化。',
    },
    links: [
      { name: 'NestJS 中文文档 · Docker', url: 'https://docs.nestjs.cn/10/deployment', type: 'docs' },
    ],
  },
  {
    d: 25, tag: '部署', t: 'CI/CD 与生产检查清单', xp: 120,
    desc: 'GitHub Actions 跑测试 → 构建镜像 → 部署；过一遍上线前的 Nest 项目检查清单。',
    lesson: {
      points: [
        'CI 流水线：npm ci → lint → test → test:e2e → docker build → push registry → 部署（ssh/k8s/云平台）。',
        '生产清单：synchronize:false + 迁移、全局 ValidationPipe、异常过滤器、helmet、CORS 白名单、rate-limit。',
        '优雅停机：SIGTERM 时 app.close() + 数据库连接收尾（enableShutdownHooks），容器滚动更新不掉请求。',
        '健康检查：@nestjs/terminus 暴露 /health（含 DB ping），供负载均衡探活。',
        '环境隔离：staging 与 production 同一套镜像不同 env，配置注入不进代码——12-factor 原则。',
      ],
      code: `// main.ts 生产加固
app.use(helmet());
app.enableCors({ origin: ['https://app.example.com'] });
app.enableShutdownHooks(); // SIGTERM -> app.close()

// 健康检查
@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}
  @Get()
  @HealthCheck()
  check() { return this.health.check([() => this.db.pingCheck('database')]); }
}`,
      analogy: 'CI 流水线就像前端的 Vercel 自动部署，但多了测试门禁：测试不过连构建都不该发生。',
    },
    links: [
      { name: 'NestJS 中文文档 · 健康检查(terminus)', url: 'https://docs.nestjs.cn/10/recipes/terminus', type: 'docs' },
      { name: 'NestJS 官方 · Deployment', url: 'https://docs.nestjs.com/deployment', type: 'docs' },
    ],
  },
  {
    d: 26, tag: '进阶', t: '动态模块与 Nest 源码阅读', xp: 140,
    desc: '手写一个 forRoot 风格的动态模块，顺带读懂 Nest 源码里 Container/Scanner 如何组装一切。',
    lesson: {
      points: [
        'DynamicModule = { module, providers, exports } 的对象：静态方法 ConfigModule.forRoot(opts) 返回它，把调用时配置带进元数据。',
        '经典范式：forRoot 全局注册连接，forFeature 按需注册各业务实体/仓库，两条套路撑起 TypeORM/Prisma 的模块 API。',
        '源码入口：packages/core 包的 NestContainer + metadata-scanner——启动就是“收集元数据 → 建实例图 → 实例化”三步。',
        '读懂源码后你能：写自己的集成库、排查循环依赖（forwardRef）与注入顺序问题。',
        'AsyncProvider（useFactory async）是动态模块的常见搭档：连接数据库后才能注入的 provider 都靠它。',
      ],
      code: `@Module({})
export class MySdkModule {
  static forRoot(opts: { apiKey: string }): DynamicModule {
    return {
      module: MySdkModule,
      providers: [
        { provide: 'SDK_OPTS', useValue: opts },
        { provide: SdkClient, useFactory: (o) => new SdkClient(o), inject: ['SDK_OPTS'] },
      ],
      exports: [SdkClient],
    };
  }
}

// 使用
@Module({ imports: [MySdkModule.forRoot({ apiKey: 'xxx' })] })
export class AppModule {}`,
      analogy: 'forRoot ≈ 前端组件库的 <ThemeProvider theme={...}>：一次配置全局注入，forFeature 则是各处 useTheme() 按需取用。',
    },
    links: [
      { name: 'NestJS 中文文档 · 动态模块', url: 'https://docs.nestjs.cn/10/fundamentals/dynamic-modules', type: 'docs' },
    ],
  },
  {
    d: 27, tag: '进阶', t: 'WebSocket 与实时通信', xp: 120,
    desc: '@nestjs/websockets + socket.io 网关：@SubscribeMessage 处理消息，与 HTTP 共享同一套 DI 与守卫。',
    lesson: {
      points: [
        'WebSocketGateway({ cors }) 声明网关类，@SubscribeMessage("events") 处理客户端 emit，返回值即回执（ack）。',
        'handleConnection/handleDisconnect 生命周期钩子管理在线状态；@ConnectedSocket/@MessageBody 取参数。',
        '网关也是 Provider：可注入 Service、可用 Guard 鉴权（WS 握手时校验 token，需要自定义 adapter）。',
        '服务端主动推送：server.emit(...) 或 WsExceptionFilter 处理 WS 错误，机制与 HTTP 层一一对应。',
        '横切组件（Guard/Pipe/Interceptor）在 WS 层同样适用——学一套概念吃下两种协议。',
      ],
      code: `@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(private chatService: ChatService) {}

  handleConnection(client: Socket) {
    this.server.emit('online', this.server.engine.clientsCount);
  }

  @SubscribeMessage('chat')
  async onChat(@MessageBody() dto: ChatDto, @ConnectedSocket() client: Socket) {
    const saved = await this.chatService.save(dto);
    this.server.emit('chat', saved); // 广播
    return saved; // ack 给发送者
  }
}`,
      analogy: 'Gateway ≈ 组件里的事件订阅：@SubscribeMessage 像 onEvent，server.emit 像 emit 出去的事件总线，只是跑在服务端。',
    },
    links: [
      { name: 'NestJS 中文文档 · WebSocket 网关', url: 'https://docs.nestjs.cn/10/websockets/gateways', type: 'docs' },
    ],
  },
  {
    d: 28, tag: '进阶', t: '任务调度、队列与微服务概览', xp: 120,
    desc: '@nestjs/schedule 定时任务、BullMQ 队列削峰、@nestjs/microservices 传输器——后端三板斧补完。',
    lesson: {
      points: [
        '@nestjs/schedule：@Cron("0 0 * * *") 定时、@Interval/@Timeout 固定间隔，注册在 providers 即可。',
        'BullMQ（基于 Redis）处理耗时任务：@Processor("email") 消费者 + Queue.add 投递，请求秒回、任务后台跑。',
        '队列解决的本质问题：HTTP 请求不该等 30 秒的导出/发信；重试、限流、优先级都是队列送的。',
        '@nestjs/microservices：@MessagePattern 换个传输器（TCP/Redis/Kafka）就是微服务，业务代码几乎不动。',
        '选型直觉：单机够用就别上微服务；先队列后拆分，逐步演进。',
      ],
      code: `@Injectable()
export class TasksService {
  @Cron('0 3 * * *') // 每天凌晨3点
  cleanup() { console.log('清理过期数据'); }
}

@Processor('email')
export class EmailProcessor extends WorkerHost {
  async process(job: Job<{ to: string }>) {
    await sendMail(job.data.to);
  }
}

@Injectable()
export class MailService {
  constructor(@InjectQueue('email') private queue: Queue) {}
  async send(to: string) { await this.queue.add('send', { to }); }
}`,
      analogy: '队列之于后端 ≈ requestIdleCallback / 消息通知之于前端 UI：耗时的活儿不阻塞主请求，后台慢慢消化。',
    },
    links: [
      { name: 'NestJS 中文文档 · 任务调度', url: 'https://docs.nestjs.cn/10/techniques/task-scheduling', type: 'docs' },
      { name: 'NestJS 中文文档 · 队列', url: 'https://docs.nestjs.cn/10/techniques/queues', type: 'docs' },
    ],
  },
  {
    d: 29, tag: '综合', t: '毕业项目：完整 Blog API', xp: 200,
    desc: '整合 28 天所学：模块化 Blog API——JWT + RBAC、CRUD + 分页、校验、Swagger、日志、缓存、E2E 测试。',
    lesson: {
      points: [
        '架构骨架：AppModule / AuthModule(JWT+RolesGuard) / UsersModule / PostsModule / PrismaModule + 全局 Pipe/Filter/Interceptor。',
        '功能清单：注册登录、角色管理（admin 能删任意文章）、文章 CRUD + 分页搜索、评论归属校验、/health 探活。',
        '质量底线：DTO 校验全覆盖、单测覆盖 Service、E2E 覆盖登录与 CRUD 主链路、统一响应与错误结构。',
        '文档：Swagger 全接口可见、示例值齐全——把它当简历上的作品集链接。',
        '做完这个项目，你已具备“Nest 后端工程师”的完整拼图，可自信应对从 0 到 1 的服务搭建。',
      ],
      code: `// app.module.ts —— 毕业项目全景
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
    PrismaModule, AuthModule, UsersModule, PostsModule,
    BullModule.registerQueue({ name: 'email' }),
    ScheduleModule.forRoot(),
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}`,
      analogy: '这一步就像把你拆过的 React 组件拼回完整页面：每一块你都独立写过，现在考验的是组装与集成能力。',
    },
    links: [
      { name: 'NestJS 官方示例仓库 nest/nest-sample', url: 'https://github.com/nestjs/nest/tree/master/sample', type: 'blog' },
    ],
  },
  {
    d: 30, tag: '综合', t: '复盘与后续路线', xp: 100,
    desc: '30 天知识图谱复盘：三层架构、元数据编程、生命周期全览；给出 NestJS 之后的进阶方向。',
    lesson: {
      points: [
        '知识主线回顾：IoC/装饰器(Day2-3) → 模块与组件(Day4-6) → 请求管线(Day7-11) → 安全(Day12-13) → 数据(Day14-15) → 质量与部署(Day21-25) → 进阶(Day26-29)。',
        '请求生命周期再背一遍：Middleware → Guard → Interceptor(前) → Pipe → Handler → Interceptor(后) → Filter——面试高频。',
        '进阶方向：GraphQL (@nestjs/graphql)、gRPC 微服务、OpenTelemetry 全链路追踪、Kubernetes 部署、Serverless 适配。',
        '能力自检：能否 30 分钟从零起一个带鉴权+DB+Swagger 的服务？能，则出师。',
        '持续学习：Nest 官方 samples 仓库 + awesome-nestjs 列表，源码是最好的老师。',
      ],
      code: `// 请求生命周期速查（面试背这个）
// 1. Middleware      日志/CORS 等横切前置
// 2. Guards          鉴权（JWT/RBAC）
// 3. Interceptors(前)  拦截/包装
// 4. Pipes           参数校验与转换
// 5. Handler         业务逻辑
// 6. Interceptors(后)  响应包装(RxJS map)
// 7. ExceptionFilter 异常兜底
// 8. 响应序列化 -> 客户端`,
      analogy: '像学完 React 后的“心智模型复检”：Fiber 的调度顺序你未必天天用，但面试和排查问题时它决定你的上限。',
    },
    links: [
      { name: 'NestJS 官方 samples', url: 'https://github.com/nestjs/nest/tree/master/sample', type: 'blog' },
      { name: 'awesome-nestjs', url: 'https://github.com/nestjs/awesome-nestjs', type: 'blog' },
      { name: 'NestJS 中文文档', url: 'https://docs.nestjs.cn/10/', type: 'docs' },
    ],
  },
];

export const EXERCISES: Record<number, Exercise> = {
  1: {
    prompt: '写一个 BooksController：GET /books 返回数组，POST /books 添加一本。要求用装饰器声明路由，不写任何 app.get()。',
    starter: `@Controller('books')
export class BooksController {
  private books: string[] = [];

  // TODO: 补全两个路由方法
}`,
    answer: `@Controller('books')
export class BooksController {
  private books: string[] = [];

  @Get()
  findAll(): string[] {
    return this.books;
  }

  @Post()
  create(@Body('title') title: string) {
    this.books.push(title);
    return { created: title };
  }
}`,
    expected: 'GET /books 返回 []；POST {"title":"三体"} 后 GET 返回 ["三体"]。',
  },
  2: {
    prompt: '让 BooksController 注入 BooksService：Service 提供 findAll/create，Controller 不自己存数据。补全构造函数与模块注册。',
    starter: `@Injectable()
export class BooksService {
  private books: string[] = [];
  findAll() { return this.books; }
  create(title: string) { this.books.push(title); }
}

@Controller('books')
export class BooksController {
  // TODO: 注入 BooksService 并实现路由
}`,
    answer: `@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() { return this.booksService.findAll(); }

  @Post()
  create(@Body('title') title: string) {
    this.booksService.create(title);
    return { created: title };
  }
}

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}`,
    expected: 'app 启动后两个接口行为与 Day1 一致，但数据逻辑全部在 Service 中，构造函数无 new。',
  },
  3: {
    prompt: '手写一个 @Version("v1") 类装饰器，把版本号写进类的元数据，并提供 getVersion(cls) 函数读取。',
    starter: `function Version(v: string) {
  // TODO: 用 Reflect.defineMetadata 存元数据
}

function getVersion(cls: Function): string {
  // TODO: Reflect.getMetadata 读取
}`,
    answer: `import 'reflect-metadata';

const VERSION_KEY = 'route:version';

function Version(v: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(VERSION_KEY, v, target);
  };
}

function getVersion(cls: Function): string {
  return Reflect.getMetadata(VERSION_KEY, cls) ?? 'v0';
}

@Version('v1')
class BooksController {}
console.log(getVersion(BooksController)); // 'v1'`,
    expected: "控制台输出 'v1'。",
  },
  4: {
    prompt: '建立 CatsModule 与 DogsModule，CatsModule 导出 CatsService，DogsModule imports 后注入使用（如打印“狗也想撸猫”）。',
    starter: `// TODO: 补全两个模块，使 DogsService 能注入 CatsService`,
    answer: `@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}

@Module({
  imports: [CatsModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}

@Injectable()
export class DogsService {
  constructor(private catsService: CatsService) {} // 来自 CatsModule
  meow() { return this.catsService.findAll(); }
}`,
    expected: 'DogsModule 中能成功注入 CatsService；若 CatsModule 不 exports 则启动报错（可验证）。',
  },
  5: {
    prompt: '实现 GET /users/:uid/orders/:oid?verbose=1，返回 { uid, oid, verbose }，并让 POST /users 返回 204。',
    starter: `@Controller('users')
export class UsersController {
  // TODO: 补全路由
}`,
    answer: `@Controller('users')
export class UsersController {
  @Get(':uid/orders/:oid')
  getOrder(
    @Param('uid') uid: string,
    @Param('oid') oid: string,
    @Query('verbose') verbose?: string,
  ) {
    return { uid, oid, verbose: verbose === '1' };
  }

  @Post()
  @HttpCode(204)
  create() {
    return;
  }
}`,
    expected: 'GET /users/7/orders/3?verbose=1 → {"uid":"7","oid":"3","verbose":true}；POST /users → 204。',
  },
  6: {
    prompt: '注册一个字符串 token 的 Provider："START_TIME"（useValue 为 Date.now()），并在 Controller 里注入打印服务已运行秒数。',
    starter: `@Module({
  providers: [
    // TODO: 提供 START_TIME
  ],
})
export class AppModule {}`,
    answer: `// app.module.ts
providers: [
  { provide: 'START_TIME', useValue: Date.now() },
],

// controller
@Controller('meta')
export class MetaController {
  constructor(@Inject('START_TIME') private start: number) {}

  @Get('uptime')
  uptime() {
    return { seconds: Math.floor((Date.now() - this.start) / 1000) };
  }
}`,
    expected: 'GET /meta/uptime 返回递增的秒数，同一实例共享同一 START_TIME。',
  },
  7: {
    prompt: '给 CreateBookDto 加校验：title 必填字符串、year 是 1900-2100 的整数，开启全局 ValidationPipe 并过滤多余字段。',
    starter: `export class CreateBookDto {
  title: string;
  year: number;
}`,
    answer: `import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(1900)
  @Max(2100)
  year: number;
}

// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));`,
    expected: 'POST 传 {"title":"三体","year":2050,"hack":1} 时 hack 被剔除；year=1850 返回 400 并提示 year 校验失败。',
  },
  8: {
    prompt: '写 HttpExceptionFilter：捕获所有异常，响应体统一为 { code, path, message }，并注册为全局过滤器。',
    starter: `@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  // TODO: 实现 catch
}`,
    answer: `@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    const status = exception instanceof HttpException
      ? exception.getStatus() : 500;
    res.status(status).json({
      code: status,
      path: req.url,
      message: exception instanceof HttpException
        ? exception.message : 'Internal Server Error',
    });
  }
}

// main.ts
app.useGlobalFilters(new HttpExceptionFilter());`,
    expected: '任意路由抛 NotFoundException("nope") 后，响应为 {"code":404,"path":"/xx","message":"nope"}。',
  },
  9: {
    prompt: '写一个函数式中间件，给所有 /api 路由的响应头加 X-Request-Id（随机 id），绑定到 ApiModule。',
    starter: `export function requestId(req: Request, res: Response, next: NextFunction) {
  // TODO
}`,
    answer: `import { randomUUID } from 'crypto';

export function requestId(req: Request, res: Response, next: NextFunction) {
  res.setHeader('X-Request-Id', randomUUID());
  next();
}

@Module({
  controllers: [ApiController],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(requestId).forRoutes('api');
  }
}`,
    expected: 'curl -i /api/anything 能看到 X-Request-Id 响应头，每次不同。',
  },
  10: {
    prompt: '写 LoggingInterceptor：打印每个请求的方法、路径、耗时，并把响应数据原样透传（不改变结构）。',
    starter: `@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  // TODO
}`,
    answer: `@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger = new Logger('HTTP');
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const req = ctx.switchToHttp().getRequest();
    const start = Date.now();
    return next.handle().pipe(
      tap((data) => this.logger.log(
        req.method + ' ' + req.url + ' ' + (Date.now() - start) + 'ms')),
    );
  }
}

// main.ts
app.useGlobalInterceptors(new LoggingInterceptor());`,
    expected: '每个请求在控制台输出形如 "[HTTP] GET /cats 12ms" 的日志，响应体不受影响。',
  },
};

export const QUIZZES: Record<number, Quiz[]> = {
  1: [
    { q: 'Nest Controller 方法中，如何接收 POST 请求体？', options: ['函数第一个参数默认是 req，用 req.body', '用 @Body() 装饰器修饰一个参数', '必须继承 BaseBody 类', '只能通过 res.on("data") 读取'], answer: 1, explain: 'Nest 用参数装饰器声明式取值，@Body() 直接得到解析后的 JSON，类型由 DTO 保证。' },
    { q: '与 Express 相比，Nest 中返回 JSON 的方式是？', options: ['必须 res.json(data)', '必须 return new Response(data)', '方法直接 return 数据即可', '需要调用 next(data)'], answer: 2, explain: 'Nest 接管响应流，handler 直接 return，框架负责序列化；一旦注入 @Res 才需手动响应。' },
  ],
  2: [
    { q: 'Nest 中 @Injectable() 的作用是？', options: ['让类变成单例页面组件', '标记类为 Provider，可被 IoC 容器管理并注入', '注册一个 HTTP 中间件', '开启 TypeScript 严格模式'], answer: 1, explain: '@Injectable 是进入 DI 容器的标记，配合模块的 providers 注册后即可在构造函数中注入。' },
    { q: '依赖注入对单元测试最大的好处是？', options: ['让测试跑得更快因为不用网络', '可以直接在测试中传入 mock 实现替换真实依赖', '自动生成测试用例', '测试代码不需要类型'], answer: 1, explain: 'DI 让依赖可替换：providers: [{ provide: X, useValue: mockX }] 即可，无需改业务代码。' },
  ],
  3: [
    { q: 'Nest 依赖装饰器能按“类型”自动注入，靠的是 tsconfig 的哪个选项？', options: ['strict: true', 'emitDecoratorMetadata', 'esModuleInterop', 'resolveJsonModule'], answer: 1, explain: 'emitDecoratorMetadata 会写入 design:type 元数据，Nest 据此反射出构造参数类型完成注入。' },
    { q: '装饰器本质上是？', options: ['一种新的类语法，编译器内置魔法', '接收目标并修改/记录它的普通函数', '只能在 React 中使用的 HOC', 'Node 原生模块'], answer: 1, explain: '装饰器就是函数：类装饰器拿到 constructor，方法装饰器拿到原型与属性名，配合 Reflect Metadata 做记录。' },
  ],
  4: [
    { q: 'B 模块想注入 A 模块的 CatsService，必须满足？', options: ['CatsService 加 @Global()', 'A 模块 exports: [CatsService] 且 B 模块 imports: [AModule]', '把 CatsService 放到 AppModule', '用 require 直接引入'], answer: 1, explain: 'Provider 默认模块私有，exports + imports 是显式的模块间依赖通道。' },
    { q: 'TypeOrmModule.forRoot({...}) 这种模式叫？', options: ['混入模式', '动态模块：静态方法返回带配置的 DynamicModule', '单例工厂', '装饰器链'], answer: 1, explain: 'forRoot 返回 DynamicModule，把调用参数转成 providers 元数据，是 Nest 生态的标准扩展模式。' },
  ],
  5: [
    { q: '在方法里注入了 @Res() res 后，最需要注意什么？', options: ['响应会自动更快', 'Nest 不再自动序列化返回值，必须手动 res.json()/send()，否则请求挂起', '必须返回 Observable', '管道会失效'], answer: 1, explain: '注入原生 res 即接管响应，return 的值会被忽略；不主动响应会一直 pending。' },
    { q: '@Controller("users") 内 @Get(":id/posts") 匹配的路径是？', options: ['/id/posts', '/users/:id/posts', '/posts/:id', '/users:id/posts'], answer: 1, explain: '控制器前缀与方法路径拼接，冒号占位是 Nest 的动态路由参数（与 Express 同源）。' },
  ],
  6: [
    { q: 'useFactory 的异步工厂适合什么场景？', options: ['让接口响应更快', '需要先 await 连接/初始化再产出实例的 Provider（如数据库连接池）', '替代拦截器', '延迟编译 TypeScript'], answer: 1, explain: 'useFactory 支持 async，容器会等待 Promise resolve 后再注入，是连接类资源的标准做法。' },
    { q: 'Nest Provider 默认作用域是？', options: ['每个请求新建实例', '单例：应用内共享一个实例', '每次注入新建', '每秒重建'], answer: 1, explain: '默认 Singleton，因此 Service 的实例属性会被所有请求共享，不要存 per-request 状态。' },
  ],
  7: [
    { q: 'ValidationPipe 要生效，DTO 必须是？', options: ['interface', 'type alias', 'class（装饰器是运行时元数据）', 'enum'], answer: 2, explain: 'class-validator 的装饰器写在类字段上，interface 编译后消失，运行时无校验信息。' },
    { q: 'ValidationPipe({ whitelist: true }) 的效果是？', options: ['只允许登录用户访问', '剔除 DTO 中未声明的多余字段', '给响应加白名单头', '开启 CORS'], answer: 1, explain: 'whitelist 按 DTO 定义过滤 payload，防止恶意塞字段；配合 forbidNonWhitelisted 可直接报 400。' },
  ],
  8: [
    { q: 'throw new NotFoundException("x") 会发生什么？', options: ['进程崩溃', 'Nest 自动转成 404 响应，body 为 { statusCode:404, message:"x" }', '返回 500', '被 try/catch 吞掉'], answer: 1, explain: '内置 HttpException 家族由框架兜底转 HTTP 响应，业务代码无需层层 try/catch。' },
    { q: '自定义异常过滤器 @Catch() 不带参数意味着？', options: ['只捕获 HttpException', '捕获所有类型异常', '不生效', '只捕获异步异常'], answer: 1, explain: '@Catch() 空参 = 捕获一切未处理异常；@Catch(HttpException) 则只捕获指定类型。' },
  ],
  9: [
    { q: '请求进来后，正确的执行顺序是？', options: ['Guard → Middleware → Pipe → Handler', 'Middleware → Guard → Interceptor → Pipe → Handler', 'Pipe → Handler → Guard', 'Handler → Guard → Pipe'], answer: 1, explain: '顺序：中间件 → 守卫 → 拦截器(前) → 管道 → handler，面试高频，也是排查顺序问题的依据。' },
    { q: '第三方 Express 中间件（如 helmet）在 Nest 中如何用？', options: ['必须改写成类', '直接 app.use(helmet())，底层默认就是 Express 适配器', '注册进 providers', '不兼容，需要 fastify'], answer: 1, explain: 'Nest 默认跑在 Express 上，main.ts 里 app.use() 与 Express 写法完全一致。' },
  ],
  10: [
    { q: '拦截器 next.handle() 返回的是？', options: ['Promise', 'Response 对象', 'Observable（RxJS 流），可用 map/tap 加工响应', '回调函数'], answer: 2, explain: '拦截器基于 RxJS：pipe 里 map 改响应体、tap 做副作用，是 AOP 式包装的核心。' },
    { q: '想把所有响应统一包成 { code, data }，最佳位置是？', options: ['每个 handler 手写包装', '异常过滤器', '全局拦截器 map 数据', '中间件改 res.write'], answer: 2, explain: '拦截器能看到并加工 handler 的返回值，一次注册全局生效，是最优雅的响应包装层。' },
  ],
  11: [
    { q: '@Query("page", ParseIntPipe) 的效果是？', options: ['page 保持字符串但校验格式', 'page 被转为 number，非法值抛 400', 'page 变成数组', 'page 自动有默认值 1'], answer: 1, explain: '内置管道先校验再转换类型，省去手写 Number() 与 isNaN 判断。' },
    { q: '实现 @CurrentUser() 的正确 API 是？', options: ['@Inject("user")', 'createParamDecorator((data, ctx) => ctx.switchToHttp().getRequest().user)', '继承 ParamDecorator 类', '在 req 上用 Proxy'], answer: 1, explain: 'createParamDecorator 是自定义参数装饰器的官方 API，几行代码实现上下文取值。' },
  ],
  12: [
    { q: 'Nest Guard 的 canActivate 返回 false 时，框架会？', options: ['重试一次', '抛 ForbiddenException（403）并中断请求', '跳过该路由继续下一个', '返回 200 空体'], answer: 1, explain: '守卫在管道之前运行，返回 false 即 403，鉴权失败不会进入 handler。' },
    { q: 'passport-jwt 的 validate() 方法返回值会？', options: ['直接返回给前端', '被挂到 req.user，供后续 handler 与装饰器使用', '写入数据库', '作为响应头'], answer: 1, explain: '策略校验 token 后，validate 的返回值成为 req.user，@CurrentUser() 就是从这取的。' },
  ],
  13: [
    { q: 'RolesGuard 如何知道路由要求哪些角色？', options: ['读 JWT payload', '用 Reflector 读取 @SetMetadata/@Roles 写入的元数据', '查数据库权限表', '请求头 X-Roles'], answer: 1, explain: '装饰器声明 + Reflector 读取是 Nest 声明式权限的核心机制。' },
    { q: '全局注册 JWT Guard 后，想让某个路由公开访问，惯用做法是？', options: ['删掉全局 Guard', '自定义 @Public() 装饰器 + Guard 内用 Reflector 跳过', '路由加 ?public=1', '在 main.ts 排除路径'], answer: 1, explain: '元数据白名单（@Public()）是官方推荐模式，默认安全、显式豁免。' },
  ],
  14: [
    { q: 'TypeORM 的 synchronize: true 在生产环境的正确处理是？', options: ['保持开启省事', '关闭，改用迁移（migration）管理表结构', '改成 synchronize: "auto"', '每个请求同步一次'], answer: 1, explain: 'synchronize 按实体自动改表，生产有丢数据风险；迁移文件才是可控可回滚的表结构管理。' },
    { q: 'Service 中注入 Repository 用的是？', options: ['@InjectRepository(Cat) + 模块 forFeature([Cat])', 'new Repository(Cat)', '@Repository() 装饰实体类', '全局变量'], answer: 0, explain: 'forFeature 在当前模块注册对应 Repository Provider，@InjectRepository 注入。' },
  ],
  15: [
    { q: '与 TypeORM 相比，Prisma 最大的优势是？', options: ['不用写 SQL', 'schema 生成完整 TS 类型，查询结果自动推断', '自动做缓存', '不需要连接字符串'], answer: 1, explain: 'prisma generate 产出的 client 类型完备，findMany 的返回值类型自动推断，DX 明显更好。' },
    { q: 'Nest 中 PrismaService 通常如何接入生命周期？', options: ['不管连接', '继承 PrismaClient，在 onModuleInit 里 $connect()', '在 main.ts 手动 connect', '每个请求连接一次'], answer: 1, explain: '实现 OnModuleInit 让容器在启动时连接，Service 正常注入 PrismaService 即可。' },
  ],
  16: [
    { q: '用 Joi 校验环境变量的收益是？', options: ['加快启动速度', '启动时缺配置立即报错，而不是运行到某个接口才炸', '加密 .env', '自动部署'], answer: 1, explain: 'fail fast：配置不合法连服务都起不来，把配置错误拦截在部署环节。' },
    { q: '读取配置的正确姿势是？', options: ['各处直接 process.env.X', '注入 ConfigService 并 config.get("db.port")', '用全局 JSON 文件 require', 'window.__ENV__'], answer: 1, explain: 'ConfigService 集中管理 + 嵌套配置 + 可 mock，是依赖显式化的做法。' },
  ],
  17: [
    { q: 'Swagger 文档中 DTO 的字段 schema 来自？', options: ['手写 YAML 文件', '@ApiProperty 装饰器（或 CLI 插件自动推断）', '数据库表结构', 'TypeScript 接口自动导出'], answer: 1, explain: '装饰器在运行时生成 OpenAPI schema，代码即文档。' },
    { q: 'Swagger 对前端团队的额外价值是？', options: ['能直接部署前端', '导出 OpenAPI JSON 用 openapi-typescript 生成接口类型与请求代码', '自动修 bug', '替代接口联调'], answer: 1, explain: 'OpenAPI 产物可驱动前端类型生成，接口变更编译期可见。' },
  ],
  18: [
    { q: '生产环境推荐的结构化日志格式是？', options: ['console.log 拼字符串', '每行一个 JSON 对象，字段可检索', '纯文本分段', 'HTML'], answer: 1, explain: 'JSON 行日志能进 ELK/Loki 做聚合检索，字符串日志无法按字段过滤。' },
    { q: 'nestjs-pino 相比内置 Logger 的核心优势是？', options: ['彩色输出', '高性能 JSON 日志 + 自动记录每个请求（含耗时状态码）', '支持中文', '不用安装依赖'], answer: 1, explain: 'pino 是 Node 生态最快的 logger 之一，且 pino-http 自动捕获请求级日志。' },
  ],
  19: [
    { q: '@UseInterceptors(CacheInterceptor) 默认只缓存哪些请求？', options: ['所有请求', 'GET 请求', 'POST 请求', '带 Authorization 的请求'], answer: 1, explain: '缓存拦截器只对幂等的 GET 生效，写操作必须穿透到业务层。' },
    { q: '更新数据后缓存里还有旧值，标准处理是？', options: ['重启服务', '写操作成功后主动 cacheManager.del 对应 key（写后失效）', '缩短 TTL 到 1 秒', '加随机前缀'], answer: 1, explain: 'cache-aside 模式：读缓存、写库后删缓存，下次读重建，一致性最好维护。' },
  ],
  20: [
    { q: 'CQRS 中 Command 与 Query 的分工是？', options: ['Command 读、Query 写', 'Command 写、Query 读', '都处理读写', 'Command 处理 HTTP、Query 处理 WS'], answer: 1, explain: 'C=写路径（含业务与副作用），Q=读路径，各自建模互不拖累。' },
    { q: '以下哪种场景最适合上 CQRS？', options: ['简单 CRUD 后台', '业务复杂、写读比悬殊、需要事件驱动副作用解耦的系统', '纯静态页面', '只有一个接口的服务'], answer: 1, explain: 'CQRS 有架构成本，简单 CRUD 上它属于过度设计。' },
  ],
  21: [
    { q: '单元测试中替换 Service 依赖为 mock 的写法是？', options: ['jest.mock 文件路径', 'providers: [{ provide: CatsService, useValue: mock }]', '改环境变量', '继承原类'], answer: 1, explain: 'DI 容器天然支持替换实现，useValue 即可注入 stub，无需 monkey-patch。' },
    { q: 'moduleRef.get(CatsController) 的作用是？', options: ['删除控制器', '从测试容器中取出被实例化的对象用于断言', '注册路由', '读取环境变量'], answer: 1, explain: 'compile() 后容器就绪，get() 取出真实装配好的实例，直接调用方法断言。' },
  ],
  22: [
    { q: 'E2E 测试向应用发 HTTP 请求用的是？', options: ['axios 直接打 localhost:3000', 'supertest 对 app.getHttpServer() 发请求', 'fetch 硬编码端口', 'curl 脚本'], answer: 1, explain: 'supertest 不占真实端口，直接对编译后的 Nest 应用发内存级请求，稳定快速。' },
    { q: 'E2E 测试与单元测试最大的区别是？', options: ['更快', '覆盖完整请求链路（路由+管道+守卫+过滤器），需要隔离的数据库环境', '不用写断言', '只能在 CI 跑'], answer: 1, explain: 'E2E 验证的是“集成后的行为”，环境要独立，跑得慢但防回归能力强。' },
  ],
  23: [
    { q: 'ORM 的 N+1 问题指？', options: ['数据库连接超过 N 个', '查出 N 行后又对每行各发一次关联查询，共 1+N 次', '每秒 N+1 个请求', '索引失效'], answer: 1, explain: '解法是 join/relations/include 一次取回；N+1 是接口慢的第一大原因。' },
    { q: 'Node 服务压测 CPU 打满时，最直接的扩容方式是？', options: ['加内存', 'PM2 cluster / 多副本按核数横向开进程', '换数据库', '压缩响应'], answer: 1, explain: 'Node 单进程吃不满多核，cluster 模式或多容器副本是标准扩容路径。' },
  ],
  24: [
    { q: 'Docker 多阶段构建里，runner 阶段为何要 npm ci --omit=dev？', options: ['安装更快', '最终镜像只带生产依赖，体积与攻击面都更小', 'devDependencies 会报错', '为了缓存'], answer: 1, explain: 'builder 编译完产物后，运行时只需要 dist + 生产依赖，这是镜像瘦身关键。' },
    { q: '容器中运行 Node 进程的安全基线是？', options: ['用 root 更稳', '创建非 root 用户（USER node）运行', '关闭所有日志', '开放所有端口'], answer: 1, explain: '最小权限原则：镜像内降权运行是容器安全的基本要求。' },
  ],
  25: [
    { q: 'enableShutdownHooks() 的作用是？', options: ['允许强制杀进程', '监听 SIGTERM，让 app.close() 与连接优雅收尾，滚动更新不掉请求', '自动重启', '开启调试'], answer: 1, explain: '容器编排发 SIGTERM 后，优雅停机处理完在途请求再退出。' },
    { q: '@nestjs/terminus 的用途是？', options: ['终止服务', '暴露 /health 健康检查端点（可含 DB/RAM 探针）供 LB/K8s 探活', '管理超时', '限流'], answer: 1, explain: '健康检查是编排系统路由流量的依据，DB 挂了应摘除实例。' },
  ],
  26: [
    { q: 'ConfigModule.forRoot(opts) 返回的是？', options: ['ConfigService 实例', '一个 DynamicModule 对象，携带 opts 转成的 providers', 'Promise', '装饰器'], answer: 1, explain: '静态方法 + 返回 DynamicModule = 动态模块模式，把调用时配置带进容器。' },
    { q: 'Nest 启动的三步本质是？', options: ['安装依赖→编译→运行', '扫描元数据→构建依赖实例图→按序实例化 Provider', '读 .env→建表→监听端口', '加载 Swagger→连接 DB→启动'], answer: 1, explain: '理解这三步就能看懂循环依赖、注入顺序等疑难杂症的根源。' },
  ],
  27: [
    { q: 'WS 网关里 @SubscribeMessage("chat") 处理的是？', options: ['HTTP POST /chat', '客户端 socket.emit("chat", ...) 发来的消息', '定时消息', '数据库变更'], answer: 1, explain: '网关的事件名对应客户端 emit 的事件名，返回值作为 ack 回给发送者。' },
    { q: 'Nest 的 Guard/Pipe/Interceptor 在 WebSocket 层？', options: ['不可用', '同样适用，一套横切概念覆盖 HTTP 与 WS', '只能用中间件', '需要改写成 Express 中间件'], answer: 1, explain: 'ExecutionContext 可区分 http/ws，横切组件复用是 Nest 统一抽象的价值。' },
  ],
  28: [
    { q: '耗时任务（生成报表、发邮件）的正确姿势是？', options: ['在 HTTP handler 里同步 await 完成', '投递到 BullMQ 队列，@Processor 后台消费，请求秒回', '用 setTimeout', '开新线程'], answer: 1, explain: '队列削峰 + 重试 + 可观测，是异步任务的标准解。' },
    { q: '@Cron("0 3 * * *") 表示？', options: ['每 3 分钟', '每天凌晨 3 点', '每月 3 号', '每周三'], answer: 1, explain: '标准 cron 表达式：分 时 日 月 周，此处 0 分 3 时即每天 03:00。' },
  ],
  29: [
    { q: '全局注册 Guard 的顺序（限流→JWT→RBAC）里，RBAC 放最后的原因是？', options: ['无所谓顺序', 'RBAC 依赖 JWT 验证后的 req.user，必须在其后', '性能原因', '官方规定'], answer: 1, explain: '角色判断需要已验证的身份，Guards 按注册顺序执行，依赖谁就排在谁后面。' },
    { q: '毕业项目里统一响应 { code, data } 与统一错误结构分别在__实现？', options: ['每个 handler / 每个 catch', '全局拦截器(map) / 全局异常过滤器', '中间件 / 管道', 'DTO / Entity'], answer: 1, explain: '成功包装在拦截器、失败兜底在过滤器，两层合起来就是完整协议。' },
  ],
  30: [
    { q: '请求生命周期中，管道（Pipe）发生在？', options: ['守卫之前', '守卫之后、handler 之前', 'handler 之后', '过滤器之后'], answer: 1, explain: '顺序：Middleware → Guard → Interceptor(前) → Pipe → Handler → Interceptor(后) → Filter。' },
    { q: '学完 30 天后，最推荐的持续学习资源是？', options: ['只看博客转载', 'Nest 官方 samples 仓库与 awesome-nestjs，源码即文档', '停止学习', '只刷面试题'], answer: 1, explain: '官方 sample 覆盖所有集成场景，配源码阅读是进阶最快路径。' },
  ],
};

export const RESOURCES: Record<number, DayResource[]> = {
  1: [
    { name: 'NestJS 中文文档', url: 'https://docs.nestjs.cn/10/', type: 'docs' },
    { name: 'NestJS 官方文档', url: 'https://docs.nestjs.com/', type: 'docs' },
    { name: 'Nest CLI', url: 'https://docs.nestjs.com/cli/overview', type: 'tool' },
  ],
  2: [
    { name: 'Providers（中文）', url: 'https://docs.nestjs.cn/10/providers', type: 'docs' },
    { name: 'Dependency Injection（官方）', url: 'https://docs.nestjs.com/fundamentals/dependency-injection', type: 'docs' },
  ],
  3: [
    { name: 'TypeScript Decorators', url: 'https://www.typescriptlang.org/docs/handbook/decorators.html', type: 'docs' },
    { name: '自定义装饰器（中文）', url: 'https://docs.nestjs.cn/10/custom-decorators', type: 'docs' },
  ],
  4: [
    { name: '模块（中文）', url: 'https://docs.nestjs.cn/10/modules', type: 'docs' },
    { name: 'Dynamic Modules（官方）', url: 'https://docs.nestjs.com/fundamentals/dynamic-modules', type: 'docs' },
  ],
  5: [
    { name: '控制器（中文）', url: 'https://docs.nestjs.cn/10/controllers', type: 'docs' },
  ],
  6: [
    { name: '注入作用域（中文）', url: 'https://docs.nestjs.cn/10/fundamentals/injection-scopes', type: 'docs' },
    { name: 'Custom Providers（官方）', url: 'https://docs.nestjs.com/fundamentals/custom-providers', type: 'docs' },
  ],
  7: [
    { name: 'ValidationPipe（中文）', url: 'https://docs.nestjs.cn/10/techniques/validation', type: 'docs' },
    { name: 'class-validator', url: 'https://github.com/typestack/class-validator', type: 'tool' },
    { name: 'class-transformer', url: 'https://github.com/typestack/class-transformer', type: 'tool' },
  ],
  8: [
    { name: '异常过滤器（中文）', url: 'https://docs.nestjs.cn/10/exception-filters', type: 'docs' },
  ],
  9: [
    { name: '中间件（中文）', url: 'https://docs.nestjs.cn/10/middleware', type: 'docs' },
  ],
  10: [
    { name: '拦截器（中文）', url: 'https://docs.nestjs.cn/10/interceptors', type: 'docs' },
    { name: 'RxJS operators', url: 'https://rxjs.dev/guide/operators', type: 'docs' },
  ],
  11: [
    { name: '管道（中文）', url: 'https://docs.nestjs.cn/10/pipes', type: 'docs' },
  ],
  12: [
    { name: '认证（中文）', url: 'https://docs.nestjs.cn/10/security/authentication', type: 'docs' },
    { name: '守卫（中文）', url: 'https://docs.nestjs.cn/10/guards', type: 'docs' },
    { name: 'passport-jwt', url: 'https://github.com/mikenicholson/passport-jwt', type: 'tool' },
  ],
  13: [
    { name: '授权（中文）', url: 'https://docs.nestjs.cn/10/security/authorization', type: 'docs' },
    { name: 'Casl + NestJS 集成', url: 'https://docs.nestjs.com/security/authorization#integrating-casl', type: 'docs' },
  ],
  14: [
    { name: 'TypeORM 集成（中文）', url: 'https://docs.nestjs.cn/10/techniques/database', type: 'docs' },
    { name: 'TypeORM 文档', url: 'https://orkhan.gitbook.io/typeorm/', type: 'docs' },
  ],
  15: [
    { name: 'NestJS Prisma Recipe', url: 'https://docs.nestjs.com/recipes/prisma', type: 'docs' },
    { name: 'Prisma 官方文档', url: 'https://www.prisma.io/docs', type: 'docs' },
  ],
  16: [
    { name: '配置管理（中文）', url: 'https://docs.nestjs.cn/10/techniques/configuration', type: 'docs' },
    { name: 'Joi 校验', url: 'https://joi.dev/api/', type: 'tool' },
  ],
  17: [
    { name: 'OpenAPI / Swagger（中文）', url: 'https://docs.nestjs.cn/10/openapi/introduction', type: 'docs' },
  ],
  18: [
    { name: 'Logger（中文）', url: 'https://docs.nestjs.cn/10/techniques/logger', type: 'docs' },
    { name: 'nestjs-pino', url: 'https://github.com/iamolegga/nestjs-pino', type: 'tool' },
  ],
  19: [
    { name: 'Caching（中文）', url: 'https://docs.nestjs.cn/10/techniques/caching', type: 'docs' },
    { name: 'cache-manager', url: 'https://github.com/jaredwray/cacheable', type: 'tool' },
  ],
  20: [
    { name: 'CQRS（中文）', url: 'https://docs.nestjs.cn/10/recipes/cqrs', type: 'docs' },
  ],
  21: [
    { name: '单元测试（中文）', url: 'https://docs.nestjs.cn/10/fundamentals/testing', type: 'docs' },
    { name: 'Jest 文档', url: 'https://jestjs.io/docs/getting-started', type: 'docs' },
  ],
  22: [
    { name: 'E2E 测试（中文）', url: 'https://docs.nestjs.cn/10/fundamentals/testing#end-to-end-testing', type: 'docs' },
    { name: 'supertest', url: 'https://github.com/ladjs/supertest', type: 'tool' },
  ],
  23: [
    { name: 'TypeORM 连接池', url: 'https://orkhan.gitbook.io/typeorm/docs/connection', type: 'docs' },
    { name: 'PM2 Cluster', url: 'https://pm2.keymetrics.io/docs/usage/cluster-mode/', type: 'docs' },
  ],
  24: [
    { name: 'NestJS Deployment（官方）', url: 'https://docs.nestjs.com/deployment', type: 'docs' },
    { name: 'Docker 多阶段构建', url: 'https://docs.docker.com/build/building/multi-stage/', type: 'docs' },
  ],
  25: [
    { name: 'Terminus 健康检查（中文）', url: 'https://docs.nestjs.cn/10/recipes/terminus', type: 'docs' },
    { name: 'helmet', url: 'https://github.com/helmetjs/helmet', type: 'tool' },
    { name: 'The Twelve-Factor App', url: 'https://12factor.net/zh_cn/', type: 'blog' },
  ],
  26: [
    { name: '动态模块（中文）', url: 'https://docs.nestjs.cn/10/fundamentals/dynamic-modules', type: 'docs' },
  ],
  27: [
    { name: 'WebSocket 网关（中文）', url: 'https://docs.nestjs.cn/10/websockets/gateways', type: 'docs' },
  ],
  28: [
    { name: '任务调度（中文）', url: 'https://docs.nestjs.cn/10/techniques/task-scheduling', type: 'docs' },
    { name: '队列（中文）', url: 'https://docs.nestjs.cn/10/techniques/queues', type: 'docs' },
    { name: '微服务（中文）', url: 'https://docs.nestjs.cn/10/microservices/basics', type: 'docs' },
  ],
  29: [
    { name: 'NestJS 官方 samples', url: 'https://github.com/nestjs/nest/tree/master/sample', type: 'blog' },
    { name: 'Throttler 限流（中文）', url: 'https://docs.nestjs.cn/10/security/rate-limiting', type: 'docs' },
  ],
  30: [
    { name: 'NestJS 中文文档', url: 'https://docs.nestjs.cn/10/', type: 'docs' },
    { name: 'awesome-nestjs', url: 'https://github.com/nestjs/awesome-nestjs', type: 'blog' },
    { name: 'NestJS Courses（官方付费课）', url: 'https://courses.nestjs.com/', type: 'video' },
  ],
};

