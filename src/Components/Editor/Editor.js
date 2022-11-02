import "./Editor.css";

const Editor = ({ onChange, editor, onSize, expanded }) => {
  return (
    <div className="editor" style={{ display: editor ? "block" : "none" }}>
      <div className="subtitle">
        <p>Dunkelnn Editor</p>
        {!expanded && (
          <i className="fa fa-arrows-alt" onClick={onSize} id="editor-i"></i>
        )}
        {expanded && (
          <i className="fa fa-compress" onClick={onSize} id="editor-i"></i>
        )}
      </div>
      <textarea
        id="editor"
        onChange={onChange}
        style={{ minHeight: expanded === "editor" ? "100vh" : "11rem" }}
      ></textarea>
    </div>
  );
};

export default Editor;
