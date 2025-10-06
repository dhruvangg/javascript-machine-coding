const data = [
  { type: "file", name: "package.json" },
  { type: "file", name: "README.md" },
  {
    type: "folder",
    name: "demo",
    children: [
      { type: "file", name: "main.tsx" },
      { type: "file", name: "index.html" },
      { type: "file", name: "vite.config.js" },
      {
        type: "folder",
        name: "components",
        children: [
          { type: "file", name: "drop.module.css" },
          { type: "file", name: "code.tsx" },
          { type: "file", name: "preview.tsx" },
          { type: "file", name: "display.tsx" },
          { type: "file", name: "layout.tsx" },
        ],
      },
      { type: "file", name: "global.css" },
      { type: "file", name: "styles.d.ts" },
    ],
  },
  {
    type: "folder",
    name: "examples",
    children: [
      { type: "file", name: "read_as_csv.ts" },
      { type: "file", name: "read_as_text.ts" },
      { type: "file", name: "preact_example.tsx" },
      { type: "file", name: "read_as_json.ts" },
      { type: "file", name: "simple.ts" },
    ],
  },
  { type: "folder", name: "src", children: [] },
  { type: "file", name: "CHANGELOG.md" },
  { type: "file", name: "tsconfig.json" },
];

export const getData = (args?: { signal?: AbortSignal }) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(data), 1000);
    args?.signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    })
  })
}