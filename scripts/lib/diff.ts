import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export type ChangedFile = {
  path: string;
  diff: string;
  fullContent: string | null;
};

const TARGET_EXTENSIONS = [".ts", ".tsx", ".css", ".json", ".mjs", ".js"];

const isTargetFile = (path: string): boolean =>
  TARGET_EXTENSIONS.some((ext) => path.endsWith(ext));

/**
 * git diff HEAD で変更されたファイル一覧を取得
 */
const getChangedFilePaths = (): string[] => {
  const output = execSync("git diff HEAD --name-only", {
    encoding: "utf-8",
  });
  return output
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
};

/**
 * 指定ファイルの diff だけを取得
 */
const getFileDiff = (path: string): string => {
  return execSync(`git diff HEAD -- "${path}"`, {
    encoding: "utf-8",
    maxBuffer: 10 * 1024 * 1024,
  });
};

/**
 * git diff HEAD で変更された対象ファイルを ChangedFile[] として返す
 */
export const collectChangedFiles = (cwd: string): ChangedFile[] => {
  const allPaths = getChangedFilePaths();
  const targetPaths = allPaths.filter(isTargetFile);

  return targetPaths.map((path) => {
    const absPath = resolve(cwd, path);
    const fullContent = existsSync(absPath)
      ? readFileSync(absPath, "utf-8")
      : null; // 削除されたファイル
    return {
      path,
      diff: getFileDiff(path),
      fullContent,
    };
  });
};
