import { useState } from "react";
import { LXF_CONTENT } from "./lxfContent";

// 轻量 markdown 渲染：标题/代码块/粗体/行内代码/列表/段落
function renderMd(md: string) {
  const blocks: JSX.Element[] = [];
  const lines = md.split("\n");
  let i = 0, key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++;
      blocks.push(<pre key={key++} className="lxf-code"><code>{code.join("\n")}</code></pre>);
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h4 key={key++}>{line.slice(4)}</h4>);
    } else if (line.startsWith("## ")) {
      blocks.push(<h3 key={key++}>{line.slice(3)}</h3>);
    } else if (line.startsWith("# ")) {
      blocks.push(<h3 key={key++} className="lxf-title">{line.slice(2)}</h3>);
    } else if (/^[-*] /.test(line)) {
      blocks.push(<div key={key++} className="lxf-li">• {inline(line.slice(2))}</div>);
    } else if (line.trim() === "") {
      // 空行
    } else {
      blocks.push(<p key={key++}>{inline(line)}</p>);
    }
    i++;
  }
  return blocks;
}

// 行内格式：**粗体**、`代码`、[链接](url)
function inline(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0, m: RegExpExecArray | null, k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) parts.push(<b key={k++}>{tok.slice(2, -2)}</b>);
    else if (tok.startsWith("`")) parts.push(<code key={k++} className="lxf-inline-code">{tok.slice(1, -1)}</code>);
    else {
      const lm = tok.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (lm) parts.push(<a key={k++} href={lm[2]} target="_blank" rel="noopener noreferrer">{lm[1]} ↗</a>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function LxfReader({ day }: { day: number }) {
  const chapters = LXF_CONTENT[day] || [];
  const [idx, setIdx] = useState(0);
  if (!chapters.length) return null;
  const cur = chapters[Math.min(idx, chapters.length - 1)];

  // 默认全展开：教程正文直接进课程流，进门即学
  return (
    <div className="lxf-reader open">
      <div className="lxf-head">📖 教程原文（廖雪峰 Java 教程 · 站内阅读{chapters.length > 1 ? ` · ${chapters.length} 个章节` : ""}）</div>
      {chapters.length > 1 && (
        <div className="lxf-tabs">
          {chapters.map((c, i) => (
            <button key={i} className={"lxf-tab" + (i === idx ? " active" : "")} onClick={() => setIdx(i)}>
              {c.t}
            </button>
          ))}
        </div>
      )}
      <div className="lxf-content inline">{renderMd(cur.md)}</div>
      <div className="lxf-footer">
        原文：<a href={cur.u} target="_blank" rel="noopener noreferrer">{cur.u} ↗</a>
        <span className="lxf-credit"> · 廖雪峰的官方网站 · 版权归原作者所有</span>
      </div>
    </div>
  );
}
