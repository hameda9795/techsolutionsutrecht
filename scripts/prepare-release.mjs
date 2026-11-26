import { cpSync, copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const name = `release-${new Date().toISOString().replace(/[:.]/g, "-")}`;
const stage = path.join(root, ".cache", name);
if (!existsSync(path.join(root, ".vercel", "project.json"))) throw new Error("Link this workspace to its existing Vercel project first.");
mkdirSync(stage, { recursive: true });
for (const dir of ["src", "public", "content"]) cpSync(path.join(root, dir), path.join(stage, dir), { recursive: true });
for (const file of ["package.json", "package-lock.json", "next.config.js", "next-env.d.ts", "postcss.config.js", "tailwind.config.ts", "tsconfig.json", ".eslintrc.json"]) copyFileSync(path.join(root, file), path.join(stage, file));
mkdirSync(path.join(stage, ".vercel"));
copyFileSync(path.join(root, ".vercel", "project.json"), path.join(stage, ".vercel", "project.json"));
const manifest = [];
function inspect(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { inspect(file); continue; }
    if (/\.env|credential|token|\.log$/i.test(entry.name)) throw new Error(`Unexpected private file in release bundle: ${path.relative(stage, file)}`);
    manifest.push({ path: path.relative(stage, file).replaceAll("\\", "/"), sha256: createHash("sha256").update(readFileSync(file)).digest("hex") });
  }
}
inspect(stage);
writeFileSync(path.join(root, ".cache", name + "-manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Prepared ${manifest.length} source, content, asset and config files: ${stage}`);
console.log("Deploy this directory as a preview, verify it, then deploy with production settings before promoting the domain.");
