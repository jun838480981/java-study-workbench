import { useEffect, useRef, useState } from "react";

interface Props {
  day: number;
  value: string;
  onChange: (v: string) => void;
}

export default function CodeEditor({ day, value, onChange }: Props) {
  const [lineCount, setLineCount] = useState(1);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState(true);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLineCount(value.split("\n").length);
  }, [value]);

  const handleChange = (v: string) => {
    onChange(v);
    setSaved(false);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      localStorage.setItem("javaStudyWorkbench.v3.ex." + day, v);
      setSaved(true);
    }, 800);
  };

  // Tab 缩进
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart, end = ta.selectionEnd;
      const next = value.slice(0, start) + "    " + value.slice(end);
      handleChange(next);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 4;
      });
    }
  };

  // 滚动同步行号
  const handleScroll = () => {
    if (gutterRef.current && taRef.current) {
      gutterRef.current.scrollTop = taRef.current.scrollTop;
    }
  };

  return (
    <div className="editor-wrap">
      <div className="editor-head">
        <span className="editor-dots"><i /><i /><i /></span>
        <span className="editor-title">Main.java · Day {day} 练习</span>
        <span className={"editor-save" + (saved ? " ok" : "")}>{saved ? "已保存 ✓" : "编辑中…"}</span>
      </div>
      <div className="editor-body">
        <div className="editor-gutter" ref={gutterRef}>
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i} className="gutter-line">{i + 1}</div>
          ))}
        </div>
        <textarea
          ref={taRef}
          className="editor-ta"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
