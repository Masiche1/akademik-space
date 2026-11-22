const fs = require("fs");

const FILES = [
  "src/content/courses/cie-a-level-biology/unit-7/lesson-7-3.ts",
  "src/content/courses/cie-a-level-biology/unit-8/lesson-8-1.ts",
  "src/content/courses/cie-a-level-biology/unit-8/lesson-8-2.ts",
  "src/content/courses/cie-a-level-biology/unit-8/lesson-8-3.ts",
];

const HELPERS = `const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\\b[abcd]\\s+and\\s+[abcd]\\b/i;\r
const mcqSeed = (s: string): number => {\r
  let h = 2166136261;\r
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }\r
  return h >>> 0;\r
};\r
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {\r
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;\r
  let a = mcqSeed(seed);\r
  const rnd = () => {\r
    a |= 0; a = (a + 0x6D2B79F5) | 0;\r
    let t = Math.imul(a ^ (a >>> 15), 1 | a);\r
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;\r
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;\r
  };\r
  const order = texts.map((_, i) => i);\r
  for (let i = order.length - 1; i > 0; i--) {\r
    const j = Math.floor(rnd() * (i + 1));\r
    [order[i], order[j]] = [order[j], order[i]];\r
  }\r
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;\r
};\r
\r
`;

for (const f of FILES) {
  let s = fs.readFileSync(f, "utf8");
  if (s.includes("mcqOrder")) { console.log("already patched", f); continue; }
  const anchor = "const mcqQ = (q: {";
  if (!s.includes(anchor)) { console.log("NO ANCHOR", f); continue; }
  s = s.replace(anchor, HELPERS + anchor);

  const sig = "  e?: string;\r\n}): Question => ({";
  if (!s.includes(sig)) { console.log("NO SIG", f); continue; }
  s = s.replace(sig, "  e?: string;\r\n}): Question => {\r\n  const __o = mcqOrder(q.c, q.id);\r\n  const __c = __o ? __o.map((i) => q.c[i]) : q.c;\r\n  const __a = __o ? __o.indexOf(q.a) : q.a;\r\n  return {");

  s = s.replace("choices: q.c.map((text, index) => ({", "choices: __c.map((text, index) => ({");
  s = s.replace("correctChoiceId: String.fromCharCode(97 + q.a),", "correctChoiceId: String.fromCharCode(97 + __a),");

  const tail = "    ...(q.e ? { commonErrors: [q.e] } : {}),\r\n  },\r\n});\r\n\r\nconst numQ";
  if (!s.includes(tail)) { console.log("NO TAIL", f); continue; }
  s = s.replace(tail, "    ...(q.e ? { commonErrors: [q.e] } : {}),\r\n  },\r\n  };\r\n};\r\n\r\nconst numQ");

  fs.writeFileSync(f, s);
  console.log("patched", f);
}
