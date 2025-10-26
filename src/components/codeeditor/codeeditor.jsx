import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";

export const CodeEditor = ({ code, onChange, language = "html" }) => {
  // Define qual linguagem será usada dinamicamente:
  const getLanguageExtension = () => {
    switch (language) {
      case "javascript":
      case "js":
        return javascript();
      case "css":
        return css();
      default:
        return html(); // padrão HTML
    }
  };

  return (
    <CodeMirror
      value={code}
      height="400px"
      extensions={[getLanguageExtension()]}
      theme={oneDark}
      onChange={(value) => onChange(value)}
    />
  );
};
