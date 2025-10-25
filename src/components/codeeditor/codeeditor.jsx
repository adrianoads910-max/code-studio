import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

export const CodeEditor = ({ code, onChange }) => {
  return (
    <CodeMirror
      value={code}
      height="400px"
      extensions={[html()]}
      theme={oneDark}
      onChange={(value) => onChange(value)}
    />
  );
};
