/**
 * Safe scientific-calculator evaluator (no eval). Recursive-descent parser.
 *
 * Grammar:
 *   expr    := term (("+" | "-") term)*
 *   term    := unary (("*" | "/") unary | <implicit> unary)*
 *   unary   := ("-" | "+") unary | power
 *   power   := postfix ("^" unary)?        right-associative, so -2^2 = -4
 *   postfix := primary "!"*
 *   primary := number | constant | func "(" expr ")" | "(" expr ")" | "√" unary
 */

export type AngleMode = "deg" | "rad";

type Token =
  | { kind: "num"; value: number }
  | { kind: "id"; value: string }
  | { kind: "op"; value: string };

const FUNCTIONS = ["sin", "cos", "tan", "asin", "acos", "atan", "sqrt", "cbrt", "ln", "log", "abs", "exp"] as const;
type FnName = (typeof FUNCTIONS)[number];

function isFn(name: string): name is FnName {
  return (FUNCTIONS as readonly string[]).includes(name);
}

function tokenize(input: string): Token[] {
  const src = input
    .replace(/\u00d7/g, "*")
    .replace(/\u00f7/g, "/")
    .replace(/\u2212/g, "-")
    .replace(/\u03c0/g, "pi")
    .replace(/\*\*/g, "^");
  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i] ?? "";
    if (/\s/.test(ch)) { i++; continue; }
    const num = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(src.slice(i));
    if (num) {
      tokens.push({ kind: "num", value: Number(num[0]) });
      i += num[0].length;
      continue;
    }
    const id = /^[a-z]+/i.exec(src.slice(i));
    if (id) {
      tokens.push({ kind: "id", value: id[0].toLowerCase() });
      i += id[0].length;
      continue;
    }
    if ("+-*/^()!\u221a".includes(ch)) {
      tokens.push({ kind: "op", value: ch });
      i++;
      continue;
    }
    throw new Error(`Unexpected "${ch}"`);
  }
  return tokens;
}

function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0 || n > 170) throw new Error("Factorial needs a whole number 0-170");
  let r = 1;
  for (let k = 2; k <= n; k++) r *= k;
  return r;
}

export function evaluate(input: string, mode: AngleMode = "deg", ans = 0): number {
  const tokens = tokenize(input);
  if (tokens.length === 0) throw new Error("Enter an expression");
  let pos = 0;
  const toRad = (x: number) => (mode === "deg" ? (x * Math.PI) / 180 : x);
  const fromRad = (x: number) => (mode === "deg" ? (x * 180) / Math.PI : x);

  const peek = () => tokens[pos];
  const isOp = (v: string) => {
    const t = peek();
    return t?.kind === "op" && t.value === v;
  };
  const expect = (v: string) => {
    if (!isOp(v)) throw new Error(`Expected "${v}"`);
    pos++;
  };

  const applyFn = (name: FnName, x: number): number => {
    switch (name) {
      case "sin": return Math.sin(toRad(x));
      case "cos": return Math.cos(toRad(x));
      case "tan": return Math.tan(toRad(x));
      case "asin": return fromRad(Math.asin(x));
      case "acos": return fromRad(Math.acos(x));
      case "atan": return fromRad(Math.atan(x));
      case "sqrt": return Math.sqrt(x);
      case "cbrt": return Math.cbrt(x);
      case "ln": return Math.log(x);
      case "log": return Math.log10(x);
      case "abs": return Math.abs(x);
      case "exp": return Math.exp(x);
    }
  };

  function primary(): number {
    const t = peek();
    if (!t) throw new Error("Incomplete expression");
    if (t.kind === "num") { pos++; return t.value; }
    if (t.kind === "id") {
      pos++;
      if (t.value === "pi") return Math.PI;
      if (t.value === "e") return Math.E;
      if (t.value === "ans") return ans;
      if (isFn(t.value)) {
        expect("(");
        const x = expr();
        expect(")");
        return applyFn(t.value, x);
      }
      throw new Error(`Unknown name "${t.value}"`);
    }
    if (t.value === "(") {
      pos++;
      const x = expr();
      expect(")");
      return x;
    }
    if (t.value === "\u221a") { pos++; return Math.sqrt(unary()); }
    throw new Error(`Unexpected "${t.value}"`);
  }

  function postfix(): number {
    let x = primary();
    while (isOp("!")) { pos++; x = factorial(x); }
    return x;
  }

  function power(): number {
    const base = postfix();
    if (isOp("^")) { pos++; return base ** unary(); }
    return base;
  }

  function unary(): number {
    if (isOp("-")) { pos++; return -unary(); }
    if (isOp("+")) { pos++; return unary(); }
    return power();
  }

  function startsFactor(): boolean {
    const t = peek();
    return !!t && (t.kind !== "op" || t.value === "(" || t.value === "\u221a");
  }

  function term(): number {
    let x = unary();
    for (;;) {
      if (isOp("*")) { pos++; x *= unary(); }
      else if (isOp("/")) { pos++; x /= unary(); }
      else if (startsFactor()) x *= unary(); // implicit multiplication: 2pi, 3(4), (2)(3)
      else return x;
    }
  }

  function expr(): number {
    let x = term();
    for (;;) {
      if (isOp("+")) { pos++; x += term(); }
      else if (isOp("-")) { pos++; x -= term(); }
      else return x;
    }
  }

  const result = expr();
  if (pos < tokens.length) throw new Error("Unexpected input at end");
  if (!Number.isFinite(result)) throw new Error("Undefined result");
  return result;
}

/** Format for display: up to 10 significant digits, trimming float noise like 0.1+0.2. */
export function formatResult(x: number): string {
  if (Math.abs(x) < 1e-12) return "0";
  const s = Number(x.toPrecision(10));
  return Math.abs(s) >= 1e10 || Math.abs(s) < 1e-6 ? s.toExponential(6) : String(s);
}
