import Anthropic from "@anthropic-ai/sdk";

export type Severity = "critical" | "warning" | "info";
export type Category = "quality" | "convention" | "security" | "a11y" | "performance";

export type ReviewFinding = {
  severity: Severity;
  category: Category;
  line: number | null;
  message: string;
};

const MODEL = "claude-sonnet-4-5-20250929";
const MAX_TOKENS = 4096;

let client: Anthropic | null = null;

const getClient = (apiKey: string): Anthropic => {
  if (!client) {
    client = new Anthropic({ apiKey });
  }
  return client;
};

/**
 * Claude API にレビューを依頼し、JSON 配列で結果を取得
 */
export const requestReview = async (
  apiKey: string,
  systemPrompt: string,
  userMessage: string
): Promise<ReviewFinding[]> => {
  const anthropic = getClient(apiKey);

  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    return [];
  }

  return parseFindings(textBlock.text);
};

/**
 * モデルの応答から JSON 配列を抽出してパース
 */
const parseFindings = (text: string): ReviewFinding[] => {
  // ```json ... ``` で囲まれている場合に対応
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const jsonText = fenceMatch ? fenceMatch[1] : text;

  // 最初に出てくる [ から最後の ] までを抽出
  const start = jsonText.indexOf("[");
  const end = jsonText.lastIndexOf("]");
  if (start === -1 || end === -1) return [];

  try {
    const parsed = JSON.parse(jsonText.slice(start, end + 1));
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidFinding);
  } catch {
    return [];
  }
};

const isValidFinding = (item: unknown): item is ReviewFinding => {
  if (typeof item !== "object" || item === null) return false;
  const f = item as Record<string, unknown>;
  return (
    typeof f.severity === "string" &&
    ["critical", "warning", "info"].includes(f.severity) &&
    typeof f.message === "string"
  );
};

export const MODEL_NAME = MODEL;
