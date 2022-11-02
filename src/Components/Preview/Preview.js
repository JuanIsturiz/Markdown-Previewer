import "./Preview.css";

const Preview = ({ preview, onSize, expanded }) => {
  return (
    <div
      className="display"
      id="display-container"
      style={{ display: preview ? "block" : "none" }}
    >
      <div className="subtitle">
        <p>Dunkelnn Preview</p>
        {!expanded && (
          <i className="fa fa-arrows-alt" onClick={onSize} id="preview-i"></i>
        )}
        {expanded && (
          <i className="fa fa-compress" onClick={onSize} id="preview-i"></i>
        )}
      </div>
      <div
        id="display"
        style={{ minHeight: expanded === "preview" ? "100vh" : "10rem" }}
      ></div>
    </div>
  );
};

export default Preview;
