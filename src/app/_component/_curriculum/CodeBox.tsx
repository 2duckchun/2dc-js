"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeBox({
  code,
  language = "javascript",
}: {
  code: string;
  language?: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="code">
      <pre className={`language-${language}`} tabIndex={1}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
