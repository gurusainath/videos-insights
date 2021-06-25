export const CodeEditor = (props: any) => {
  if (typeof window !== "undefined") {
    // import editor
    const AceEditor = require("react-ace").default;

    // import languages and snippets
    const languages = [
      "javascript",
      "java",
      "python",
      "xml",
      "ruby",
      "sass",
      "markdown",
      "mysql",
      "json",
      "html",
      "handlebars",
      "golang",
      "csharp",
      "elixir",
      "typescript",
      "css",
      "c_cpp",
      "rust",
      "clojure",
      "sh",
      "tsx",
      "pascal",
    ];
    languages.forEach((lang) => {
      require(`ace-builds/src-noconflict/mode-${lang}`);
      require(`ace-builds/src-noconflict/snippets/${lang}`);
    });

    // import theme
    const themes = [
      "monokai",
      "github",
      "tomorrow",
      "kuroir",
      "twilight",
      "xcode",
      "textmate",
      "solarized_dark",
      "solarized_light",
      "terminal",
    ];
    themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

    // import ext language tools
    require(`ace-builds/src-noconflict/ext-language_tools`);

    return (
      <AceEditor
        placeholder="# Write code here"
        mode={props.language}
        theme={props.theme}
        name={props.name}
        fontSize={14}
        showPrintMargin={true}
        highlightActiveLine={true}
        onChange={props.onChange}
        // onLoad={this.onLoad}
        // onSelectionChange={this.onSelectionChange}
        // onCursorChange={this.onCursorChange}
        // onValidate={this.onValidate}
        height="520px"
        width="100%"
        value={props.value}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    );
  }
  return null;
};