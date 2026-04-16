import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import type { ChangedFile } from "./diff";

const loadProjectContext = (cwd: string): string => {
  const claudeMdPath = resolve(cwd, "CLAUDE.md");
  if (!existsSync(claudeMdPath)) return "";
  return readFileSync(claudeMdPath, "utf-8");
};

export const buildSystemPrompt = (cwd: string): string => {
  const projectContext = loadProjectContext(cwd);

  return `あなたはシニアフロントエンドエンジニアとして、プルリクエスト前のコードレビューを行います。
バランス感覚を持ち、本当に修正価値のある指摘のみを行い、些末な指摘は控えてください。

# レビュー観点（優先順）

1. **コード品質**: 命名、構造、複雑度、DRY、不要コード、型安全性、React/Next.js のベストプラクティス
2. **プロジェクト規約遵守**: 後述するプロジェクトコンテキスト（CLAUDE.md）に従う。デザインシステム（カラー、フォント、ユーティリティクラス）の整合性
3. **セキュリティ・アクセシビリティ**: XSS、危険な innerHTML、a11y 属性、キーボード操作、prefers-reduced-motion
4. **パフォーマンス**: 不要な再レンダリング、画像最適化、CSS の負荷、バンドルサイズ

# 出力形式（厳守）

JSON 配列のみを出力してください。前後の説明文・コードフェンスは不要です。各要素は以下のフィールドを持ちます。

\`\`\`json
[
  {
    "severity": "critical" | "warning" | "info",
    "category": "quality" | "convention" | "security" | "a11y" | "performance",
    "line": <該当行番号 or null>,
    "message": "<日本語で簡潔な指摘内容と修正方針>"
  }
]
\`\`\`

- severity の基準:
  - **critical**: バグ、セキュリティリスク、致命的な不具合
  - **warning**: 規約違反、保守性低下、明確な改善余地
  - **info**: 提案、好みの範囲、検討価値ありの代替案
- 指摘がない場合は空配列 \`[]\` を返してください
- 1ファイルあたり最大 8 件まで。本当に重要なものから順に
- 同じ問題の重複指摘は避ける

# プロジェクトコンテキスト

${projectContext || "（CLAUDE.md なし）"}
`;
};

export const buildUserMessage = (file: ChangedFile): string => {
  const fullContentSection = file.fullContent
    ? `\n\n## ファイル全体（コンテキスト用）\n\n\`\`\`\n${file.fullContent}\n\`\`\`\n`
    : "\n\n（ファイルは削除されています）";

  return `# レビュー対象: ${file.path}

## 差分（git diff HEAD）

\`\`\`diff
${file.diff}
\`\`\`
${fullContentSection}

上記の差分をレビューし、JSON 配列のみを出力してください。`;
};
