import { useEffect, useState } from "react";
import { TASKS, PHASES, MILESTONES, QUIZZES, BADGES, LEVELS } from "./data";
import { EXERCISES } from "./exercises";
import { RESOURCES, RESOURCE_TYPE_LABEL } from "./resources";
import { LXF_CONTENT } from "./lxfContent";
import LxfReader from "./LxfReader";
import type { Quiz } from "./data";
import CodeEditor from "./CodeEditor";

// 历史关卡回看弹窗
export function HistoryModal({ day, onClose }: { day: number; onClose: () => void }) {
  const task = TASKS.find((t) => t.d === day);
  const quiz = QUIZZES[day] ?? [];
  const ex = EXERCISES[day];
  const savedCode = localStorage.getItem("javaStudyWorkbench.v3.ex." + day) ?? ex?.starter ?? "";
  const [tab, setTab] = useState<"lesson" | "exercise" | "quiz" | "res">("lesson");
  if (!task) return null;

  return (
    <div className="modal-mask" onClick={onClose}>
      <div className="modal history-modal" onClick={(e) => e.stopPropagation()}>
        <div className="history-head">
          <h2>📚 Day {day} 回顾 <span className="small">{task.tag}</span></h2>
          <span className="history-close" onClick={onClose}>✕</span>
        </div>
        <div className="history-tabs">
          <button className={tab === "lesson" ? "active" : ""} onClick={() => setTab("lesson")}>📖 课程</button>
          {ex && <button className={tab === "exercise" ? "active" : ""} onClick={() => setTab("exercise")}>⌨️ 练习</button>}
          <button className={tab === "quiz" ? "active" : ""} onClick={() => setTab("quiz")}>🎯 测验 {quiz.length} 题</button>
          {RESOURCES[day] && <button className={tab === "res" ? "active" : ""} onClick={() => setTab("res")}>🔗 资料</button>}
        </div>
        <div className="history-body">
          {tab === "lesson" && task.lesson && (
            <>
              <div className="lesson-points">
                {task.lesson.points.map((p, i) => (
                  <div className="lesson-point" key={i}><span className="lp-num">{i + 1}</span><span>{p}</span></div>
                ))}
              </div>
              <div className="lesson-code-label">代码示例</div>
              <pre className="lesson-code"><code>{task.lesson.code}</code></pre>
              <div className="lesson-analogy">
                <span className="la-icon">🧠</span>
                <div><b>前端类比</b><p>{task.lesson.analogy}</p></div>
              </div>
            </>
          )}
          {tab === "exercise" && ex && (
            <>
              <div className="ex-prompt">{ex.prompt}</div>
              <div className="lesson-code-label">你当时写的代码（自动保存的）</div>
              <pre className="lesson-code"><code>{savedCode}</code></pre>
              <div className="lesson-code-label">参考答案</div>
              <pre className="lesson-code"><code>{ex.answer}</code></pre>
              <div className="lesson-code-label">预期输出</div>
              <pre className="lesson-code expected"><code>{ex.expected}</code></pre>
            </>
          )}
          {tab === "res" && RESOURCES[day] && (
            <div className="res-links">
              {RESOURCES[day].map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="res-link">
                  <span className={"res-type t-" + r.type}>{RESOURCE_TYPE_LABEL[r.type]}</span>
                  {r.name} ↗
                </a>
              ))}
            </div>
          )}
          {tab === "quiz" && (
            <div className="history-quiz-list">
              {quiz.map((q, i) => (
                <details key={i} className="hq-item">
                  <summary>{i + 1}. {q.q}</summary>
                  <div className="hq-opts">
                    {q.options.map((o: string, j: number) => (
                      <div key={j} className={"hq-opt" + (j === q.answer ? " right" : "")}>
                        {String.fromCharCode(65 + j)}. {o}{j === q.answer ? " ✓" : ""}
                      </div>
                    ))}
                  </div>
                  <div className="explain"><p>{q.explain}</p></div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface Note {
  id: string;
  text: string;
  date: string;
}

interface AppState {
  currentDay: number;
  doneTasks: number[];
  notes: Note[];
  startDate: string;
  xp: number;
  quizCorrect: number;
  quizWrong: number;
  perfectQuizzes: number;
  bossCleared: number[];
  maxStreak: number;
  wrongBook: [number, number][]; // 错题记录 [day, quizIndex]
  lastDoneDate: string; // 用于计算连续打卡
  doneDates?: Record<string, number>; // 热力图：日期字符串 -> 当天完成数
  pomodoros?: number; // 番茄钟完成数
  dailyChallenge?: { date: string; type: "quiz" | "perfect" | "ex" | "note"; done: boolean };
  theme?: "dark" | "light";
}

const KEY = "javaStudyWorkbench.v3";

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* 数据坏了就重开 */ }
  return {
    currentDay: 1, doneTasks: [], notes: [], startDate: new Date().toDateString(),
    xp: 0, quizCorrect: 0, quizWrong: 0, perfectQuizzes: 0, bossCleared: [],
    maxStreak: 0, wrongBook: [], lastDoneDate: "",
  };
}

const fmtDate = () => new Date().toLocaleDateString("zh-CN");
const taskOf = (d: number) => TASKS.find((t) => t.d === d);
const todayStr = () => new Date().toDateString();

function levelOf(xp: number) {
  let cur = LEVELS[0], next = null as typeof LEVELS[number] | null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].need) { cur = LEVELS[i]; next = LEVELS[i + 1] ?? null; }
  }
  return { cur, next };
}

interface Toast { icon: string; title: string; desc: string }

// 错题重练弹窗：答对自动从错题本移除并给 XP
function RetakeModal({ quiz, day, qi, onClose, onPass }: { quiz: Quiz; day: number; qi: number; onClose: () => void; onPass: () => void }) {
  const [pick, setPick] = useState<number | null>(null);
  const ok = pick === quiz.answer;
  return (
    <div className="modal-mask" onClick={onClose}>
      <div className="modal retake-modal" onClick={(e) => e.stopPropagation()}>
        <h2>📕 错题重练 <span className="small">Day {day}</span></h2>
        <div className="quiz-q">{quiz.q}</div>
        <div className="quiz-opts">
          {quiz.options.map((opt: string, i: number) => {
            const isRight = pick !== null && i === quiz.answer;
            const isWrongPick = pick === i && i !== quiz.answer;
            return (
              <div key={i}
                className={"quiz-opt" + (isRight ? " right" : "") + (isWrongPick ? " wrong" : "")}
                onClick={() => { if (pick === null) { setPick(i); if (i === quiz.answer) onPass(); } }}>
                {String.fromCharCode(65 + i)}. {opt}
              </div>
            );
          })}
        </div>
        {pick !== null && (
          <div className={"retake-result " + (ok ? "good" : "bad")}>
            {ok ? "🎉 答对了！这道题从错题本移除，+5 XP" : "😅 又错了…再看看解析，稍后再来"}
            <div className="hq-explain">💡 {quiz.explain}</div>
            <button className="primary" onClick={onClose}>知道了</button>
          </div>
        )}
        {pick === null && <button onClick={onClose}>先不练了</button>}
      </div>
    </div>
  );
}

export default function App() {
  const [state, setState] = useState<AppState>(load);
  const [showTomorrow, setShowTomorrow] = useState(false);
  const [noteInput, setNoteInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [timerLeft, setTimerLeft] = useState(25 * 60);
  const [timerRun, setTimerRun] = useState(false);
  // 测验状态机
  const [quizDay, setQuizDay] = useState<number | null>(null);
  const [quizIdx, setQuizIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [quizCorrectInRun, setQuizCorrectInRun] = useState(0);
  const [quizResult, setQuizResult] = useState<null | { correct: number; total: number; xpGained: number }>(null);
  const [levelUp, setLevelUp] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  // 历史回顾
  const [historyDay, setHistoryDay] = useState<number | null>(null);
  // 资料库搜索
  const [resSearch, setResSearch] = useState("");
  // 学习阶段：当前关卡是否已学习
  const [learnedToday, setLearnedToday] = useState(() => {
    const saved = localStorage.getItem(KEY + ".learned." + new Date().toDateString() + ".d" + load().currentDay);
    return saved === "1";
  });
  // 代码练习
  const [code, setCode] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [exDone, setExDone] = useState<Record<number, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem(KEY + ".exDone") || "{}"); } catch { return {}; }
  });
  // 新功能状态
  const [noteSearch, setNoteSearch] = useState("");
  const [retake, setRetake] = useState<null | { day: number; qi: number }>(null); // 错题重练
  const [pomodoroMin, setPomodoroMin] = useState(25);

  // 切换天时加载该天练习代码
  useEffect(() => {
    const saved = localStorage.getItem("javaStudyWorkbench.v3.ex." + state.currentDay);
    setCode(saved ?? EXERCISES[state.currentDay]?.starter ?? "");
    setShowAnswer(false);
  }, [state.currentDay]);

  const prevLevelRef = useState({ lv: 1 })[0];

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
    const { cur } = levelOf(state.xp);
    if (cur.lv > prevLevelRef.lv) {
      prevLevelRef.lv = cur.lv;
      setLevelUp(`${cur.title}`);
    }
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!timerRun) return;
    const id = setInterval(() => {
      setTimerLeft((s) => {
        if (s <= 1) {
          setTimerRun(false);
          update((st) => ({ ...st, pomodoros: (st.pomodoros || 0) + 1, xp: st.xp + 3 }));
          pushToast({ icon: "🍅", title: "番茄钟完成！", desc: "专注 +1，奖励 +3 XP，休息一下吧" });
          return pomodoroMin * 60;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timerRun, pomodoroMin]);

  // 标签页标题倒计时
  useEffect(() => {
    document.title = timerRun ? `⏳ ${timerStr} · 工作台` : "工作台";
  }, [timerRun, timerLeft]);

  const pushToast = (t: Toast) => {
    setToasts((ts) => [...ts, t]);
    setTimeout(() => setToasts((ts) => ts.filter((x) => x !== t)), 3500);
  };

  const update = (fn: (s: AppState) => AppState) => setState((s) => fn({ ...s }));

  const { cur: level, next: nextLevel } = levelOf(state.xp);
  const levelPct = nextLevel
    ? Math.min(100, Math.round(((state.xp - level.need) / (nextLevel.need - level.need)) * 100))
    : 100;

  const currentStreak = (() => {
    // 连续打卡：从今天往前数，只要有完成记录的日子连续
    const days = new Set(state.doneTasks.map((d) => {
      // 用完成时记录的 lastDoneDate 链近似：直接按任务日连续计算
      return d;
    }));
    let s = 0;
    for (let d = state.currentDay - 1; d >= 1; d--) { if (days.has(d)) s++; else break; }
    return s;
  })();

  const earnedBadges = BADGES.filter((b) => b.condition({
    doneTasks: state.doneTasks, quizCorrect: state.quizCorrect, quizWrong: state.quizWrong,
    perfectQuizzes: state.perfectQuizzes, bossCleared: state.bossCleared,
    currentStreak, maxStreak: state.maxStreak, level: level.lv, notes: state.notes.length,
  }));

  const statsSnapshot = () => ({
    doneTasks: state.doneTasks, quizCorrect: state.quizCorrect, quizWrong: state.quizWrong,
    perfectQuizzes: state.perfectQuizzes, bossCleared: state.bossCleared,
    currentStreak, maxStreak: state.maxStreak, level: level.lv, notes: state.notes.length,
  });

  // ---- 测验流程 ----
  // ---- 学习阶段 ----
  const markLearned = () => {
    localStorage.setItem(KEY + ".learned." + new Date().toDateString() + ".d" + state.currentDay, "1");
    setLearnedToday(true);
    update((s) => ({ ...s, xp: s.xp + 5 }));
    pushToast({ icon: "📖", title: "学习完成！", desc: "获得 +5 学识 XP，练习和测验已解锁" });
  };

  const markExDone = () => {
    const next = { ...exDone, [state.currentDay]: true };
    setExDone(next);
    localStorage.setItem(KEY + ".exDone", JSON.stringify(next));
    if (!exDone[state.currentDay]) {
      update((s) => ({ ...s, xp: s.xp + 10 }));
      pushToast({ icon: "⌨️", title: "练习完成！", desc: "获得 +10 实战 XP" });
      if (todayChallenge.type === "ex" && !todayChallenge.done) completeChallenge("ex");
    }
  };

  const startQuiz = () => {
    if (!learnedToday) return;
    setQuizCorrectInRun(0);
    setQuizDay(state.currentDay); setQuizIdx(0); setPicked(null); setQuizResult(null);
  };

  const submitAnswer = (opt: number) => {
    if (picked !== null) return;
    setPicked(opt);
    const quizzes = QUIZZES[quizDay!];
    const ok = opt === quizzes[quizIdx].answer;
    if (ok) setQuizCorrectInRun((c) => c + 1);
    update((s) => ({
      ...s,
      quizCorrect: s.quizCorrect + (ok ? 1 : 0),
      quizWrong: s.quizWrong + (ok ? 0 : 1),
      wrongBook: ok ? s.wrongBook : [...s.wrongBook, [quizDay!, quizIdx]],
    }));
  };

  const nextQuestion = () => {
    const quizzes = QUIZZES[quizDay!];
    if (quizIdx + 1 < quizzes.length) { setQuizIdx(quizIdx + 1); setPicked(null); return; }
    // 测验结束
    const correct = quizCorrectInRun; // 本次测验答对数
    const total = quizzes.length;
    const dayXp = taskOf(quizDay!)?.xp ?? 20;
    const bonus = correct === total ? Math.round(dayXp * 0.5) : 0;
    const gained = Math.round(dayXp * (0.6 + 0.4 * (correct / total))) + bonus;
    const wasBoss = (taskOf(quizDay!)?.tag ?? "").includes("Boss") || quizDay === 40;

    update((s) => ({
      ...s,
      xp: s.xp + gained,
      doneTasks: s.doneTasks.includes(quizDay!) ? s.doneTasks : [...s.doneTasks, quizDay!],
      perfectQuizzes: s.perfectQuizzes + (correct === total ? 1 : 0),
      bossCleared: wasBoss && !s.bossCleared.includes(quizDay!) ? [...s.bossCleared, quizDay!] : s.bossCleared,
      lastDoneDate: todayStr(),
      doneDates: { ...(s.doneDates || {}), [todayStr()]: (s.doneDates?.[todayStr()] || 0) + 1 },
    }));
    setQuizResult({ correct, total, xpGained: gained });
    if (correct === total) pushToast({ icon: "💯", title: "完美通关！", desc: `额外奖励 +${bonus} XP` });
    // 每日挑战触发
    if (todayChallenge.type === "quiz" && !todayChallenge.done) completeChallenge("quiz");
    if (todayChallenge.type === "perfect" && correct === total && !todayChallenge.done) completeChallenge("perfect");
  };

  const goNextDay = () => {
    setQuizResult(null); setQuizDay(null);
    update((s) => ({ ...s, currentDay: s.currentDay + 1 }));
    setShowTomorrow(false);
  };

  const addNote = () => {
    const text = noteInput.trim();
    if (!text) return;
    update((s) => ({ ...s, notes: [...s.notes, { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), text, date: fmtDate() }] }));
    setNoteInput("");
    if (todayChallenge.type === "note" && !todayChallenge.done) completeChallenge("note");
  };

  const saveEdit = () => {
    const text = editText.trim();
    if (!text || !editingId) return;
    update((s) => ({ ...s, notes: s.notes.map((n) => (n.id === editingId ? { ...n, text } : n)) }));
    setEditingId(null);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `java-study-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importData = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (typeof data.currentDay === "number" && Array.isArray(data.doneTasks)) {
          setState({ ...load(), ...data });
          alert("✅ 备份已恢复");
        } else alert("文件格式不对哦");
      } catch { alert("文件解析失败"); }
    };
    reader.readAsText(file);
  };

  const today = taskOf(state.currentDay);
  const tomorrow = taskOf(state.currentDay + 1);
  const todayDone = state.doneTasks.includes(state.currentDay);
  const isBossDay = today ? (today.tag.includes("Boss") || today.tag.includes("终章")) : false;
  const quizzes = quizDay ? QUIZZES[quizDay] : null;
  const dayCount = Math.max(1, Math.floor((Date.now() - new Date(state.startDate).getTime()) / 86400000) + 1);
  const timerStr = `${String(Math.floor(timerLeft / 60)).padStart(2, "0")}:${String(timerLeft % 60).padStart(2, "0")}`;

  // ---- 每日挑战 ----
  const challengeTypes = [
    { type: "quiz", icon: "🎯", desc: "完成 1 次通关测验", xp: 5 },
    { type: "perfect", icon: "💯", desc: "拿到 1 次完美通关", xp: 8 },
    { type: "ex", icon: "⌨️", desc: "完成 1 道代码练习", xp: 5 },
    { type: "note", icon: "🗒️", desc: "记 1 条踩坑笔记", xp: 3 },
  ] as const;
  // 每天按日期固定轮换一个挑战
  const todayChallenge = (() => {
    const d = new Date();
    const dateKey = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const idx = (d.getFullYear() + d.getMonth() + d.getDate()) % challengeTypes.length;
    const def = challengeTypes[idx];
    const saved = state.dailyChallenge;
    const done = saved && saved.date === dateKey && saved.type === def.type ? saved.done : false;
    return { ...def, dateKey, done };
  })();

  const completeChallenge = (type: typeof challengeTypes[number]["type"]) => {
    const def = challengeTypes.find((c) => c.type === type)!;
    if (todayChallenge.done) return;
    update((s) => ({
      ...s,
      xp: s.xp + def.xp,
      dailyChallenge: { date: todayChallenge.dateKey, type, done: true },
    }));
    pushToast({ icon: def.icon, title: "每日挑战完成！", desc: `「${def.desc}」+${def.xp} XP` });
  };

  // ---- 热力图数据：最近 12 周 ----
  const heatmap = (() => {
    const doneDates = state.doneDates || {};
    const weeks: { date: Date; count: number }[][] = [];
    const today = new Date();
    const start = new Date(today);
    start.setDate(start.getDate() - 83); // 12 周
    // 对齐到周一
    const dow = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - dow);
    for (let w = 0; w < 12; w++) {
      const col: { date: Date; count: number }[] = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + w * 7 + i);
        const key = d.toDateString();
        col.push({ date: d, count: doneDates[key] || 0 });
      }
      weeks.push(col);
    }
    return weeks;
  })();

  // ---- 预计毕业日 ----
  const graduation = (() => {
    const remaining = 40 - state.doneTasks.length;
    if (remaining <= 0) return "已毕业 🎓";
    const pace = dayCount / Math.max(1, state.doneTasks.length); // 每关天数
    const daysLeft = Math.round(remaining * pace);
    const eta = new Date(Date.now() + daysLeft * 86400000);
    return `按当前节奏 · 预计 ${eta.toLocaleDateString("zh-CN", { month: "long", day: "numeric" })} 毕业（还剩 ${daysLeft} 天）`;
  })();

  return (
    <div className="wrap">
      {/* 顶部：称号 + 经验条 */}
      <header>
        <h1><span className="bean">☕</span> 工作台 <span className="sub-tag">前端转 Java · 40 天通关之旅</span></h1>
        <div className="level-bar-wrap">
          <div className="level-info">
            <span className="level-title">Lv.{level.lv} {level.title}</span>
            <span className="xp-num">{state.xp} XP{nextLevel ? ` · 距下一级还差 ${nextLevel.need - state.xp}` : " · 已满级！"}</span>
          </div>
          <div className="xp-bar"><span style={{ width: levelPct + "%" }} /></div>
        </div>
      </header>

      <section className="stats">
        <div className="stat"><div className="num">{currentStreak}</div><div className="label">连续打卡 🔥</div></div>
        <div className="stat"><div className="num">{state.quizCorrect}</div><div className="label">答对题目 🎯</div></div>
        <div className="stat"><div className="num">{state.bossCleared.length}</div><div className="label">Boss 已击败 ⚔️</div></div>
        <div className="stat"><div className="num">{earnedBadges.length}/{BADGES.length}</div><div className="label">成就徽章 🏆</div></div>
      </section>

      {/* 每日挑战条 */}
      <div className={"challenge-bar" + (todayChallenge.done ? " done" : "")}>
        <span className="ch-icon">{todayChallenge.icon}</span>
        <div className="ch-body">
          <b>今日挑战</b>
          <span>{todayChallenge.desc}</span>
        </div>
        {todayChallenge.done ? (
          <span className="ch-done">✅ 已完成</span>
        ) : (
          <span className="ch-xp">+{todayChallenge.xp} XP</span>
        )}
      </div>

      {/* 打卡热力图 */}
      <div className="card heatmap-card">
        <h2>🗓️ 修行热力图 <span className="small">{graduation}</span></h2>
        <div className="heatmap">
          {heatmap.map((col, wi) => (
            <div className="hm-col" key={wi}>
              {col.map((cell, di) => (
                <div
                  key={di}
                  className={"hm-cell" + (cell.count ? " lv" + Math.min(4, cell.count) : "")}
                  title={`${cell.date.toLocaleDateString("zh-CN")} · 完成 ${cell.count} 项`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="hm-legend">少 <span className="hm-cell" /><span className="hm-cell lv1" /><span className="hm-cell lv2" /><span className="hm-cell lv3" /><span className="hm-cell lv4" /> 多</div>
      </div>

      <div className="grid">
        <div className="col">
          <div className="card">
            <h2>{isBossDay ? "👹 今日 BOSS 战" : "📅 今日关卡"} <span className="small">Day {state.currentDay} · {fmtDate()}</span></h2>
            {today ? (
              <div className={"task" + (todayDone ? " done" : "")}>
                <div className={isBossDay ? "boss-avatar" : "task-avatar"}>{isBossDay ? "👹" : "🗡️"}</div>
                <div>
                  <div className="t-title">
                    <span className={"t-tag" + (isBossDay ? " boss-tag" : "")}>{today.tag}</span>{today.t}
                    <span className="xp-tag">+{today.xp} XP</span>
                  </div>
                  <div className="t-desc">{today.desc}</div>
                </div>
              </div>
            ) : (
              <div className="empty">🎉 40 天修行圆满！Java 大师，去征服新大陆吧！</div>
            )}
            <div className="btn-row">
              {!learnedToday && today && (
                <button className="primary" onClick={() => document.getElementById("lesson-panel")?.scrollIntoView({ behavior: "smooth" })}>
                  📖 开始学习
                </button>
              )}
              {learnedToday && !todayDone && today && (
                <button className="primary" onClick={startQuiz}>
                  {isBossDay ? "⚔️ 挑战 BOSS" : "🎯 开始今日测验"}
                </button>
              )}
              {todayDone && (
                <button className="primary" onClick={goNextDay}>➡️ 进入 Day {state.currentDay + 1}</button>
              )}
              <button onClick={() => setShowTomorrow((v) => !v)}>👀 预习明天</button>
            </div>
            {learnedToday && !todayDone && (
              <div className="cleared-tip">📖 已学习 · 测验已解锁，去证明你的理解吧！</div>
            )}
            {!learnedToday && !todayDone && (
              <div className="cleared-tip" style={{ color: "var(--muted)" }}>🔒 先学习今日课程（下方），完成后再挑战测验</div>
            )}
            {showTomorrow && tomorrow && (
              <div className="tomorrow">
                <div className="t-title">明天 Day {tomorrow.d}：<span className="t-tag">{tomorrow.tag}</span>{tomorrow.t}</div>
                <div className="t-desc">{tomorrow.desc}</div>
              </div>
            )}
          </div>

          {/* 学习课程面板 */}
          {today && !todayDone && today.lesson && (
            <div className="card lesson-card" id="lesson-panel">
              <h2>📖 今日课程 <span className="small">{isBossDay ? "Boss 关也要先修课！" : "学完才解锁测验"}</span></h2>
              <div className="lesson-points">
                {today.lesson.points.map((p, i) => (
                  <div className="lesson-point" key={i}>
                    <span className="lp-num">{i + 1}</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="lesson-code-label">代码示例</div>
              <pre className="lesson-code"><code>{today.lesson.code}</code></pre>
              <div className="lesson-analogy">
                <span className="la-icon">🧠</span>
                <div><b>前端类比</b><p>{today.lesson.analogy}</p></div>
              </div>
              {RESOURCES[state.currentDay] && (
                <div className="lesson-res">
                  <div className="lesson-code-label">🔗 配套资料（点击跳转详细学习）</div>
                  <div className="res-links">
                    {RESOURCES[state.currentDay].map((r) => (
                      <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="res-link">
                        <span className={"res-type t-" + r.type}>{RESOURCE_TYPE_LABEL[r.type]}</span>
                        {r.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {/* 站内教程全文 */}
              {LXF_CONTENT[state.currentDay] && (
                <LxfReader day={state.currentDay} />
              )}
              <div className="btn-row">
                {!learnedToday ? (
                  <button className="primary" onClick={markLearned}>✅ 我学完了，解锁测验（+5 XP）</button>
                ) : (
                  <span className="learned-flag">✅ 今日课程已完成 · 测验已解锁</span>
                )}
              </div>
            </div>
          )}

          {/* 代码练习面板 */}
          {today && !todayDone && learnedToday && EXERCISES[state.currentDay] && (
            <div className="card ex-card" id="ex-panel">
              <h2>⌨️ 代码练习 <span className="small">{exDone[state.currentDay] ? "已完成 ✓" : "手敲完成 +10 XP"}</span></h2>
              <div className="ex-prompt">{EXERCISES[state.currentDay].prompt}</div>
              <CodeEditor day={state.currentDay} value={code} onChange={setCode} />
              <div className="btn-row">
                <button
                  className="primary"
                  onClick={() => {
                    localStorage.setItem("javaStudyWorkbench.v3.ex." + state.currentDay, code);
                    const w = window.open(
                      "https://www.onlinegdb.com/online_java_compiler",
                      "_blank", "noopener");
                    if (w) pushToast({ icon: "🚀", title: "已打开在线编译器", desc: "粘贴你的代码进去运行" });
                  }}
                >▶ 复制去在线运行（新窗口）</button>
                <button onClick={() => { navigator.clipboard?.writeText(code); pushToast({ icon: "📋", title: "已复制代码", desc: "去编译器 Ctrl+V" }); }}>📋 复制代码</button>
                <button onClick={() => setShowAnswer((v) => !v)}>{showAnswer ? "🙈 收起答案" : "💡 看参考答案"}</button>
                {!exDone[state.currentDay] && (
                  <button className="primary" onClick={markExDone}>✅ 我写完并验证过了（+10 XP）</button>
                )}
              </div>
              {showAnswer && (
                <div className="ex-answer">
                  <div className="lesson-code-label">参考答案（先自己写再看！)</div>
                  <pre className="lesson-code"><code>{EXERCISES[state.currentDay].answer}</code></pre>
                  <div className="lesson-code-label">预期输出</div>
                  <pre className="lesson-code expected"><code>{EXERCISES[state.currentDay].expected}</code></pre>
                </div>
              )}
              <div className="ex-tip">💡 站内编辑器负责"手感"：行号、Tab 缩进、自动保存。真机运行点上面的按钮跳 OnlineGDB，粘贴运行对照预期输出。</div>
            </div>
          )}

          {quizDay && quizzes && !quizResult && (
            <div className="card quiz-card">
              <h2>🎯 通关测验 <span className="small">Day {quizDay} · 第 {quizIdx + 1}/{quizzes.length} 题</span></h2>
              <div className="quiz-q">{quizzes[quizIdx].q}</div>
              <div className="quiz-opts">
                {quizzes[quizIdx].options.map((opt: string, i: number) => {
                  const isRight = picked !== null && i === quizzes[quizIdx].answer;
                  const isWrongPick = picked === i && i !== quizzes[quizIdx].answer;
                  return (
                    <button
                      key={i}
                      className={"quiz-opt" + (isRight ? " right" : "") + (isWrongPick ? " wrong" : "")}
                      onClick={() => submitAnswer(i)}
                    >
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  );
                })}
              </div>
              {picked !== null && (
                <div className={"explain" + (picked === quizzes[quizIdx].answer ? "" : " explain-wrong")}>
                  <b>{picked === quizzes[quizIdx].answer ? "✅ 答对了！" : "❌ 答错了，正确答案：" + String.fromCharCode(65 + quizzes[quizIdx].answer)}</b>
                  <p>{quizzes[quizIdx].explain}</p>
                  <button className="primary" onClick={nextQuestion}>
                    {quizIdx + 1 < quizzes.length ? "下一题 ➡️" : "查看战果 🏁"}
                  </button>
                </div>
              )}
            </div>
          )}

          {quizResult && (
            <div className="card quiz-card result-card">
              <div className="result-icon">{quizResult.correct === quizResult.total ? "🏆" : quizResult.correct >= quizResult.total / 2 ? "🎉" : "💪"}</div>
              <h2 style={{ justifyContent: "center" }}>战果揭晓</h2>
              <div className="result-line">答对 <b className="coffee">{quizResult.correct}</b> / {quizResult.total} 题</div>
              <div className="result-line">获得 <b className="coffee">+{quizResult.xpGained} XP</b>{quizResult.correct === quizResult.total && "（含完美通关奖励 ⭐）"}</div>
              <div className="result-line">关卡 Day {quizDay} 已通关 {taskOf(quizDay!)?.tag.includes("Boss") || quizDay === 40 ? "· 👹 BOSS 已被击败！" : ""}</div>
              <div className="btn-row center">
                <button className="primary" onClick={goNextDay}>➡️ 进入 Day {state.currentDay + 1}</button>
              </div>
            </div>
          )}

          <div className="card">
            <h2>📓 踩坑笔记 <span className="small">{state.notes.length} 条</span></h2>
            <div className="note-input">
              <input
                value={noteInput} onChange={(e) => setNoteInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNote()}
                placeholder="记下今天踩的坑，比如：== 和 equals 的区别…" maxLength={120}
              />
              <button className="primary" onClick={addNote}>记一笔</button>
            </div>
            {state.notes.length === 0 ? (
              <div className="empty">还没有笔记，踩到坑就记一笔 📝（10 条解锁成就）</div>
            ) : (
              [...state.notes].reverse().map((n) => (
                <div className="note" key={n.id}>
                  {editingId === n.id ? (
                    <>
                      <input className="note-edit" value={editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && saveEdit()} autoFocus />
                      <button className="mini" onClick={saveEdit}>存</button>
                    </>
                  ) : (
                    <>
                      <span className="note-text">{n.text}</span>
                      <span className="date">{n.date}</span>
                      <span className="del" onClick={() => { setEditingId(n.id); setEditText(n.text); }}>✎</span>
                      <span className="del" onClick={() => update((s) => ({ ...s, notes: s.notes.filter((x) => x.id !== n.id) }))}>✕</span>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col">
          <div className="card">
            <h2>🗺️ 修行地图</h2>
            {PHASES.map((p, i) => {
              const total = p.to - p.from + 1;
              const done = TASKS.filter((t) => t.d >= p.from && t.d <= p.to && state.doneTasks.includes(t.d)).length;
              const pct = Math.round((done / total) * 100);
              return (
                <details className="phase" key={i} open={i === 0}>
                  <summary>
                    <span className="phase-name">{p.name}</span>
                    <span className="bar"><span style={{ width: pct + "%" }} /></span>
                    <span className="pct">{done}/{total}</span>
                  </summary>
                  <div className="phase-body">
                    {TASKS.filter((t) => t.d >= p.from && t.d <= p.to).map((t) => {
                      const cleared = state.doneTasks.includes(t.d);
                      const isCur = t.d === state.currentDay;
                      const canReview = cleared || t.d < state.currentDay;
                      return (
                        <div
                          key={t.d}
                          className={"map-node" + (cleared ? " cleared" : "") + (isCur ? " current" : "") + (canReview ? " reviewable" : "")}
                          onClick={() => canReview && setHistoryDay(t.d)}
                          title={canReview ? "点击回顾这一关的课程、练习和测验" : ""}
                        >
                          <span className="node-icon">{cleared ? "✅" : (t.tag.includes("Boss") || t.tag.includes("终章")) ? "👹" : "🗡️"}</span>
                          <span className="node-text">Day {t.d} {t.t}</span>
                          {canReview && <span className="node-review">📖</span>}
                        </div>
                      );
                    })}
                  </div>
                </details>
              );
            })}
          </div>

          <div className="card">
            <h2>🏆 成就徽章</h2>
            <div className="badges-grid">
              {BADGES.map((b) => {
                const got = earnedBadges.some((e) => e.id === b.id);
                return (
                  <div className={"badge" + (got ? " got" : "")} key={b.id} title={b.desc}>
                    <div className="badge-icon">{got ? b.icon : "🔒"}</div>
                    <div className="badge-name">{b.name}</div>
                    <div className="badge-desc">{b.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {state.wrongBook.length > 0 && (
            <div className="card">
              <h2>📕 错题本 <span className="small">{state.wrongBook.length} 题 · 点题重练</span></h2>
              {[...state.wrongBook].reverse().slice(0, 8).map(([d, qi], i) => {
                const quiz = QUIZZES[d]?.[qi];
                return quiz ? (
                  <div className="note wrong-note" key={i} onClick={() => setRetake({ day: d, qi })} title="点击重练此题">
                    <span className="note-text">Day {d} · {quiz.q}</span>
                    <span className="wn-go">重练 ↻</span>
                  </div>
                ) : null;
              })}
              <div className="empty">温故知新：答错的题都是你升级的路标 🧭</div>
            </div>
          )}

          <div className="card">
            <h2>📚 资料库 <span className="small">官方文档 · 优质教程</span></h2>
            <div className="note-input">
              <input
                className="lib-search"
                value={resSearch} onChange={(e) => setResSearch(e.target.value)}
                placeholder="搜索资料名，如：JWT、若依、MyBatis…"
              />
            </div>
            <div className="lib-list">
              {(() => {
                const kw = resSearch.trim().toLowerCase();
                const entries = Object.entries(RESOURCES).map(([d, rs]) => [Number(d), rs] as [number, typeof RESOURCES[number]]);
                const filtered = kw
                  ? entries.filter(([, rs]) => rs.some((r) => r.name.toLowerCase().includes(kw)))
                  : entries.filter(([d]) => d <= state.currentDay + 1); // 未搜索时只显示已解锁+明天
                if (filtered.length === 0) return <div className="empty">没有匹配的资料，换个关键词试试</div>;
                return filtered.map(([d, rs]) => (
                  <details key={d} className="lib-day" open={!!kw || d === state.currentDay}>
                    <summary>
                      Day {d} {state.doneTasks.includes(d) ? "✅" : d === state.currentDay ? "📍" : "🔒"}
                      <span className="lib-day-title">{taskOf(d)?.t.slice(0, 16)}</span>
                    </summary>
                    <div className="res-links" style={{ padding: "4px 10px 10px" }}>
                      {rs.map((r) => (
                        <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="res-link">
                          <span className={"res-type t-" + r.type}>{RESOURCE_TYPE_LABEL[r.type]}</span>
                          {r.name} ↗
                        </a>
                      ))}
                    </div>
                  </details>
                ));
              })()}
            </div>
            <div className="ex-tip">🔒 未解锁的关卡资料：搜索关键词可强制查看，或随进度自然解锁</div>
          </div>

          <div className="card">
            <h2>📊 学习数据</h2>
            <div className="stat-grid">
              <div className="sg-item"><b>{state.doneTasks.length}</b><span>已通关</span></div>
              <div className="sg-item"><b>{Object.keys(exDone).length}</b><span>练过代码</span></div>
              <div className="sg-item"><b>{state.quizCorrect}/{state.quizCorrect + state.quizWrong}</b><span>答题正确率</span></div>
              <div className="sg-item"><b>{state.perfectQuizzes}</b><span>完美通关</span></div>
            </div>
            {state.quizCorrect + state.quizWrong > 0 && (
              <div className="acc-bar">
                <span style={{ width: Math.round(state.quizCorrect / (state.quizCorrect + state.quizWrong) * 100) + "%" }} />
              </div>
            )}
          </div>

          <div className="card">
            <h2>⏱️ 专注番茄钟 <span className="small">已完成 {state.pomodoros || 0} 个 🍅</span></h2>
            <div className="timer-num">{timerStr}</div>
            <div className="pomo-presets">
              {[15, 25, 45].map((m) => (
                <button key={m} className={"pomo-btn" + (pomodoroMin === m ? " active" : "")}
                  onClick={() => { setPomodoroMin(m); setTimerLeft(m * 60); setTimerRun(false); }}>
                  {m} 分钟
                </button>
              ))}
            </div>
            <div className="btn-row center">
              <button className="primary" onClick={() => setTimerRun((v) => !v)}>{timerRun ? "⏸ 暂停" : "▶ 开始"}</button>
              <button onClick={() => { setTimerRun(false); setTimerLeft(pomodoroMin * 60); }}>↺ 重置</button>
            </div>
            <div className="ex-tip">完成一个番茄钟 +3 XP，倒计时时标签页标题也会实时显示 ⏳</div>
          </div>

          <div className="card">
            <h2>💾 数据备份</h2>
            <div className="btn-row">
              <button onClick={exportData}>导出备份</button>
              <label className="file-btn">
                导入备份
                <input type="file" accept=".json" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && importData(e.target.files[0])} />
              </label>
            </div>
            <div className="ex-tip">进度存在本机浏览器 · 换电脑前记得导出</div>
          </div>
        </div>
      </div>

      {/* 历史回顾弹窗 */}
      {historyDay !== null && <HistoryModal day={historyDay} onClose={() => setHistoryDay(null)} />}

      {/* 错题重练弹窗 */}
      {retake && (() => {
        const quiz = QUIZZES[retake.day]?.[retake.qi];
        if (!quiz) return null;
        return (
          <RetakeModal
            quiz={quiz} day={retake.day} qi={retake.qi}
            onClose={() => setRetake(null)}
            onPass={() => update((s) => ({
              ...s,
              xp: s.xp + 5,
              wrongBook: s.wrongBook.filter(([d, q]) => !(d === retake.day && q === retake.qi)) as [number, number][],
            }))}
          />
        );
      })()}

      {/* 升级弹窗 */}
      {levelUp && (
        <div className="modal-mask" onClick={() => setLevelUp(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="levelup-icon">🎊</div>
            <h2>等级提升！</h2>
            <div className="levelup-title">{levelUp}</div>
            <p className="levelup-desc">修为精进，离 Java 大师又近一步！</p>
            <button className="primary" onClick={() => setLevelUp(null)}>继续修行 ⚔️</button>
          </div>
        </div>
      )}

      {/* Toast */}
      <div className="toasts">
        {toasts.map((t, i) => (
          <div className="toast" key={i}>
            <span className="toast-icon">{t.icon}</span>
            <div><b>{t.title}</b><div className="toast-desc">{t.desc}</div></div>
          </div>
        ))}
      </div>

      <footer>40 天任务 × 80+ 通关测验 × 15 枚成就徽章 · 完成测验才算通关，进度自动存</footer>
    </div>
  );
}
