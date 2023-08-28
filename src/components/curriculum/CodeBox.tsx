'use client';

import { useEffect } from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

export default function CodeBox({
  code,
  language = 'javascript',
}: {
  code: string;
  language?: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='code'>
      <pre className={`language-${language}`} tabIndex={1}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
