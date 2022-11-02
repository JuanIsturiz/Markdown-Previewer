import "./App.css";
import { useState, useEffect } from "react";
//helper library for parsing plain text to markdown
import { marked } from "marked";
import Editor from "./Components/Editor/Editor";
import Preview from "./Components/Preview/Preview";

//plain text for the startup
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  //formated markdown state
  const [format, setFormat] = useState("");
  // show editor state
  const [editor, setEditor] = useState(true);
  // show preview state
  const [preview, setPreview] = useState(true);
  // expanded state
  const [expanded, setExpanded] = useState("");

  //effect that starts the textarea and the display with the placeholder
  useEffect(() => {
    document.getElementById("editor").value = placeholder;
    setFormat(marked.parse(placeholder));
  }, []);
  //effect that updates the display innerHTML
  useEffect(() => {
    document.getElementById("display").innerHTML = format;
  }, [format]);

  // function that updates the format state
  const handleChange = (e) => setFormat(marked.parse(e.target.value));

  // function that handles the resize of the editor and the display
  const handleSize = (e) => {
    const selected = e.target.id;
    if (selected === "editor-i") {
      if (e.target.className.includes("compress")) {
        setExpanded("");
        setPreview(true);
        return;
      }
      setEditor(true);
      setPreview(false);
      setExpanded("editor");
      return;
    }
    if (selected === "preview-i") {
      if (e.target.className.includes("compress")) {
        setExpanded("");
        setEditor(true);
        return;
      }
      setPreview(true);
      setEditor(false);
      setExpanded("preview");
      return;
    }
  };

  return (
    <div className="App">
      <Editor
        onChange={handleChange}
        editor={editor}
        onSize={handleSize}
        expanded={expanded}
      />
      <Preview preview={preview} onSize={handleSize} expanded={expanded} />
    </div>
  );
}

export default App;
