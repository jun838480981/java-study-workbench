import { useState } from "react";

// 站内 iframe 阅读器：能嵌的站点直接内嵌，禁嵌的降级为新窗口打开
// （cppreference/go.dev/Prisma/Docker/Spring/Baeldung 发送 X-Frame-Options，无法嵌入）
const BLOCKED_HOSTS = [
  "cppreference.com", "en.cppreference.com", "zh.cppreference.com",
  "go.dev", "pkg.go.dev",
  "prisma.io", "docs.docker.com", "spring.io", "baeldung.com",
];

export function canEmbed(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return !BLOCKED_HOSTS.some((b) => host === b || host.endsWith("." + b));
  } catch { return false; }
}

export default function ResReader({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  const embeddable = canEmbed(url);
  const [loading, setLoading] = useState(true);
  return (
    <div className="modal-mask" onClick={onClose}>
      <div className="modal res-reader-modal" onClick={(e) => e.stopPropagation()}>
        <div className="history-head">
          <h2>📖 {title}</h2>
          <div className="res-reader-actions">
            {!embeddable && (
              <button className="mini" onClick={() => window.open(url, "_blank", "noopener")}>
                ↗ 新窗口打开（该站禁止内嵌）
              </button>
            )}
            <button className="mini" onClick={() => window.open(url, "_blank", "noopener")}>↗ 新窗口</button>
            <span className="history-close" onClick={onClose}>✕</span>
          </div>
        </div>
        {embeddable ? (
          <div className="res-reader-frame-wrap">
            {loading && <div className="res-reader-loading">加载中…（部分站点较慢）</div>}
            <iframe
              src={url}
              className="res-reader-frame"
              title={title}
              onLoad={() => setLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="res-reader-blocked">
            <div className="res-reader-blocked-icon">🚧</div>
            <p><b>{new URL(url).hostname}</b> 禁止被其他网站内嵌（X-Frame-Options 保护）。</p>
            <p>点右上角「新窗口打开」阅读，读完回来继续学习～</p>
          </div>
        )}
      </div>
    </div>
  );
}
