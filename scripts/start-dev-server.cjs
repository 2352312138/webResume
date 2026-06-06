const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");
const out = fs.openSync(path.join(root, "dev-server.log"), "a");
const err = fs.openSync(path.join(root, "dev-server.err"), "a");
const child = spawn(process.execPath, [viteBin, "--host", "127.0.0.1", "--port", "5177"], {
  cwd: root,
  detached: true,
  stdio: ["ignore", out, err],
  windowsHide: true,
});

child.unref();
console.log("Vite dev server starting at http://127.0.0.1:5177/");
