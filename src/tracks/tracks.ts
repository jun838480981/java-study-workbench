import type { Track } from "../track";
import { TASKS, PHASES, MILESTONES, QUIZZES, BADGES, LEVELS } from "../data";
import { EXERCISES } from "../exercises";
import { RESOURCES } from "../resources";

// Java 勇者（原有内容适配为 Track 格式）
const javaTrack: Track = {
  id: "java",
  name: "Java 勇者",
  icon: "☕",
  tagline: "前端转后端经典路线：Spring Boot 全栈通关",
  runner: "OnlineGDB (Java)",
  runnerUrl: "https://www.onlinegdb.com/online_java_compiler",
  tasks: TASKS,
  exercises: EXERCISES,
  quizzes: QUIZZES,
  resources: RESOURCES,
};

import { META as goMeta, TASKS as goTasks, EXERCISES as goEx, QUIZZES as goQuiz, RESOURCES as goRes } from "./go-track";
const goTrack: Track = {
  id: "go",
  name: "Go 勇者",
  icon: "🐹",
  tagline: goMeta.tagline,
  runner: "Go Playground",
  runnerUrl: "https://go.dev/play/",
  tasks: goTasks as Track["tasks"],
  exercises: goEx as Track["exercises"],
  quizzes: goQuiz as Track["quizzes"],
  resources: goRes as Track["resources"],
};

import { META as nestMeta, TASKS as nestTasks, EXERCISES as nestEx, QUIZZES as nestQuiz, RESOURCES as nestRes } from "./nestjs-track";
const nestTrack: Track = {
  id: "nestjs",
  name: "NestJS 勇者",
  icon: "🦁",
  tagline: nestMeta.tagline,
  runner: "CodeSandbox (Node)",
  runnerUrl: "https://codesandbox.io/",
  tasks: nestTasks as Track["tasks"],
  exercises: nestEx as Track["exercises"],
  quizzes: nestQuiz as Track["quizzes"],
  resources: nestRes as Track["resources"],
};

import { META as jsMeta, TASKS as jsTasks, EXERCISES as jsEx, QUIZZES as jsQuiz, RESOURCES as jsRes } from "./js-track";
const jsTrack: Track = {
  id: "js",
  name: "JavaScript 勇者",
  icon: "🟨",
  tagline: jsMeta.tagline,
  runner: "浏览器控制台 / CodeSandbox",
  runnerUrl: "https://codesandbox.io/",
  tasks: jsTasks as Track["tasks"],
  exercises: jsEx as Track["exercises"],
  quizzes: jsQuiz as Track["quizzes"],
  resources: jsRes as Track["resources"],
};

import { META as cppMeta, TASKS as cppTasks, EXERCISES as cppEx, QUIZZES as cppQuiz, RESOURCES as cppRes } from "./cpp-track";
const cppTrack: Track = {
  id: "cpp",
  name: "C++ 勇者",
  icon: "🔵",
  tagline: cppMeta.tagline,
  runner: "OnlineGDB (C++)",
  runnerUrl: "https://www.onlinegdb.com/online_c++_compiler",
  tasks: cppTasks as Track["tasks"],
  exercises: cppEx as Track["exercises"],
  quizzes: cppQuiz as Track["quizzes"],
  resources: cppRes as Track["resources"],
};

export { PHASES, MILESTONES, BADGES, LEVELS };
export const TRACKS: Track[] = [javaTrack, jsTrack, cppTrack, goTrack, nestTrack];
export const DEFAULT_TRACK = "java";
