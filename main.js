import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

mermaid.initialize({
    startOnLoad: true,
    theme: "base",
    themeVariables: {
        primaryColor: "#e8edf5",
        primaryTextColor: "#1a1a2e",
        primaryBorderColor: "#7b8ab8",
        lineColor: "#7b8ab8",
        secondaryColor: "#f0f4e8",
        tertiaryColor: "#fdf2f8",
        fontSize: "24px",
        fontFamily: "Inter, system-ui, sans-serif",
    },
    flowchart: { curve: "basis", padding: 16, useMaxWidth: false },
    er: { fontSize: 20 },
});
