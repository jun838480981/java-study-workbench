export type LinkType = "doc" | "tutorial" | "tool" | "repo";

export interface TrackLesson {
  points: string[];
  code: string;
  analogy: string;
}

export interface TrackTask {
  d: number;
  tag: string;
  t: string;
  desc: string;
  xp: number;
  lesson: TrackLesson;
  links: { name: string; url: string; type: LinkType }[];
}

export interface TrackExercise {
  prompt: string;
  starter: string;
  answer: string;
  expected: string;
}

export interface TrackQuiz {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export interface TrackResource {
  name: string;
  url: string;
  type: LinkType;
}

// 一个语言职业（track）的全部内容
export interface Track {
  id: string;
  name: string;      // 如 "Java 勇者"
  icon: string;      // emoji
  tagline: string;   // 职业一句话
  runner: string;    // 在线运行器名（练习自查用）
  runnerUrl: string; // 在线运行器链接
  tasks: TrackTask[];
  exercises: Record<number, TrackExercise>;
  quizzes: Record<number, TrackQuiz[]>;
  resources: Record<number, TrackResource[]>;
}

// 在线运行器注册表
export const RUNNERS: Record<string, { name: string; url: string }> = {
  java: { name: "OnlineGDB (Java)", url: "https://www.onlinegdb.com/" },
  js: { name: "浏览器控制台 / CodeSandbox", url: "https://codesandbox.io/" },
  cpp: { name: "OnlineGDB (C++)", url: "https://www.onlinegdb.com/online_c++_compiler" },
  go: { name: "Go Playground", url: "https://go.dev/play/" },
  nestjs: { name: "CodeSandbox (Node)", url: "https://codesandbox.io/" },
};
