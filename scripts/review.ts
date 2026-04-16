/**
 * Claude API コードレビュー CLI
 *
 * 使い方:
 *   1. .env.local に ANTHROPIC_API_KEY を設定
 *   2. npm run review
 *
 * git diff HEAD（未コミット変更）の対象ファイルを Sonnet 4.5 にレビューさせ、
 * ターミナルに色付きで結果を表示する。常に exit 0。
 */
import { config as loadEnv } from "dotenv";
import { resolve } from "node:path";
import { collectChangedFiles } from "./lib/diff";
import { requestReview, MODEL_NAME } from "./lib/anthropic";
import { buildSystemPrompt, buildUserMessage } from "./lib/prompt";
import {
  renderHeader,
  renderFileResult,
  renderSummary,
  renderInfo,
  renderError,
  renderProgress,
  clearProgress,
  type FileResult,
} from "./lib/render";

const main = async (): Promise<void> => {
  const cwd = process.cwd();

  // .env.local から API キー読み込み
  loadEnv({ path: resolve(cwd, ".env.local"), quiet: true });
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    renderError(
      "ANTHROPIC_API_KEY が設定されていません。.env.local に追加してください。"
    );
    renderInfo("例: ANTHROPIC_API_KEY=sk-ant-...");
    return;
  }

  // git diff HEAD で変更されたファイルを取得
  const files = collectChangedFiles(cwd);

  if (files.length === 0) {
    renderInfo(
      "レビュー対象の変更がありません（git diff HEAD が空、または対象拡張子外）。"
    );
    return;
  }

  renderHeader(MODEL_NAME, files.length);

  const systemPrompt = buildSystemPrompt(cwd);
  const results: FileResult[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    renderProgress(i + 1, files.length, file.path);

    try {
      const userMessage = buildUserMessage(file);
      const findings = await requestReview(apiKey, systemPrompt, userMessage);
      results.push({ path: file.path, findings });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      results.push({
        path: file.path,
        findings: [
          {
            severity: "warning",
            category: "quality",
            line: null,
            message: `レビュー API でエラーが発生しました: ${message}`,
          },
        ],
      });
    }
  }

  clearProgress();

  for (const result of results) {
    renderFileResult(result);
  }

  renderSummary(results);
};

main().catch((err) => {
  const message = err instanceof Error ? err.message : String(err);
  renderError(`予期しないエラー: ${message}`);
  // 仕様: 常に exit 0
});
