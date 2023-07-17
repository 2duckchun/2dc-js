"use client"
import { useEffect } from 'react'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

export default function CodeBox({code, language}: {
    code: string,
    language: string
}) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    return (
        <div className='code'>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    )
}