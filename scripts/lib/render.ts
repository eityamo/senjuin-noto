import type { ReviewFinding, Severity } from "./anthropic";

// ANSI escape codes
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";

const FG = {
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
  white: "\x1b[97m",
};

const SEVERITY_STYLE: Record<
  Severity,
  { color: string; icon: string; label: string }
> = {
  critical: { color: FG.red, icon: "⛔", label: "CRITICAL" },
  warning: { color: FG.yellow, icon: "⚠️ ", label: "WARNING " },
  info: { color: FG.blue, icon: "💡", label: "INFO    " },
};

const SEPARATOR = "━".repeat(60);

export type FileResult = {
  path: string;
  findings: ReviewFinding[];
};

export const renderHeader = (model: string, fileCount: number): void => {
  console.log("");
  console.log(FG.cyan + SEPARATOR + RESET);
  console.log(`${BOLD}🔍 Code Review${RESET} ${DIM}(${model})${RESET}`);
  console.log(`   Reviewing ${BOLD}${fileCount}${RESET} files (git diff HEAD)`);
  console.log(FG.cyan + SEPARATOR + RESET);
  console.log("");
};

export const renderFileResult = (result: FileResult): void => {
  console.log(`${BOLD}📄 ${result.path}${RESET}`);
  if (result.findings.length === 0) {
    console.log(`   ${FG.gray}指摘なし${RESET}\n`);
    return;
  }

  // 重要度順にソート
  const order: Record<Severity, number> = { critical: 0, warning: 1, info: 2 };
  const sorted = [...result.findings].sort(
    (a, b) => order[a.severity] - order[b.severity]
  );

  for (const f of sorted) {
    const style = SEVERITY_STYLE[f.severity];
    const linePart = f.line !== null ? `L${f.line}` : "  -";
    console.log(
      `  ${style.color}${style.icon} ${style.label}${RESET} ` +
        `${DIM}[${f.category}]${RESET} ${FG.gray}${linePart}${RESET}: ${f.message}`
    );
  }
  console.log("");
};

export const renderSummary = (results: FileResult[]): void => {
  const counts: Record<Severity, number> = {
    critical: 0,
    warning: 0,
    info: 0,
  };
  for (const r of results) {
    for (const f of r.findings) {
      counts[f.severity]++;
    }
  }

  console.log(FG.cyan + SEPARATOR + RESET);
  const summary = [
    `${SEVERITY_STYLE.critical.color}${counts.critical} critical${RESET}`,
    `${SEVERITY_STYLE.warning.color}${counts.warning} warning${RESET}`,
    `${SEVERITY_STYLE.info.color}${counts.info} info${RESET}`,
  ].join(` ${DIM}·${RESET} `);
  console.log(`${BOLD}Summary:${RESET} ${summary}`);
  console.log(FG.cyan + SEPARATOR + RESET);
  console.log("");
};

export const renderInfo = (message: string): void => {
  console.log(`${FG.cyan}ℹ${RESET}  ${message}`);
};

export const renderError = (message: string): void => {
  console.log(`${FG.red}✖${RESET}  ${message}`);
};

export const renderProgress = (current: number, total: number, path: string): void => {
  process.stdout.write(
    `${DIM}[${current}/${total}] reviewing ${path}...${RESET}\r`
  );
};

export const clearProgress = (): void => {
  process.stdout.write("\x1b[2K\r");
};
