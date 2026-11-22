const fs = require("fs");

const FILES = [
  "src/content/courses/cie-a-level-biology/unit-6/lesson-6-1.ts",
  "src/content/courses/cie-a-level-biology/unit-6/lesson-6-2.ts",
  "src/content/courses/cie-a-level-biology/unit-6/lesson-6-3.ts",
  "src/content/courses/cie-a-level-biology/unit-7/lesson-7-3.ts",
  "src/content/courses/cie-a-level-biology/unit-8/lesson-8-1.ts",
  "src/content/courses/cie-a-level-biology/unit-8/lesson-8-2.ts",
  "src/content/courses/cie-a-level-biology/unit-8/lesson-8-3.ts",
  "src/content/courses/cie-a-level-biology/unit-9/lesson-9-2.ts",
  "src/content/courses/cie-a-level-biology/unit-9/lesson-9-3.ts",
];

const HELPERS = `const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\\b[abcd]\\s+and\\s+[abcd]\\b/i;
const mcqSeed = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;
  let a = mcqSeed(seed);
  const rnd = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = texts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;
};

`;

for (const f of FILES) {
  let s = fs.readFileSync(f, "utf8");
  if (s.includes("mcqOrder")) { console.log("already patched", f); continue; }

  // 1. insert helpers before mcqQ
  const anchor = "const mcqQ = (q: {";
  if (!s.includes(anchor)) { console.log("NO ANCHOR", f); continue; }
  s = s.replace(anchor, HELPERS + anchor);

  // 2. convert expression body to block body with shuffled choices
  const sig = "  e?: string;\n}): Question => ({";
  if (!s.includes(sig)) { console.log("NO SIG", f); continue; }
  s = s.replace(sig, "  e?: string;\n}): Question => {\n  const __o = mcqOrder(q.c, q.id);\n  const __c = __o ? __o.map((i) => q.c[i]) : q.c;\n  const __a = __o ? __o.indexOf(q.a) : q.a;\n  return {");

  // 3. use shuffled arrays in response
  s = s.replace("choices: q.c.map((text, index) => ({", "choices: __c.map((text, index) => ({");
  s = s.replace("correctChoiceId: String.fromCharCode(97 + q.a),", "correctChoiceId: String.fromCharCode(97 + __a),");

  // 4. close block body: `});\n\nconst numQ` -> `  };\n};\n\nconst numQ`
  const tail = "    ...(q.e ? { commonErrors: [q.e] } : {}),\n  },\n});\n\nconst numQ";
  if (!s.includes(tail)) { console.log("NO TAIL", f); continue; }
  s = s.replace(tail, "    ...(q.e ? { commonErrors: [q.e] } : {}),\n  },\n  };\n};\n\nconst numQ");

  fs.writeFileSync(f, s);
  console.log("patched", f);
}
