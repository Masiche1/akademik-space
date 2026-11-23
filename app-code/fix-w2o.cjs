const fs = require("fs");

const files = process.argv.slice(2);

// whole-word replacements: corrupted token -> restored token
const MAP = [
  ["finalAnsoer", "finalAnswer"],
  ["oorkedExample", "workedExample"],
  ["unknoon", "unknown"],
  ["soimming", "swimming"],
  ["shooing", "showing"],
  ["otheroise", "otherwise"],
  ["oithout", "without"],
  ["oithin", "within"],
  ["oorking", "working"],
  ["oinnings", "winnings"],
  ["oinning", "winning"],
  ["oeekly", "weekly"],
  ["oeather", "weather"],
  ["betoeen", "between"],
  ["draoings", "drawings"],
  ["draoing", "drawing"],
  ["drao", "draw"],
  ["flooer", "flower"],
  ["reoard", "reward"],
  ["shoos", "shows"],
  ["toice", "twice"],
  ["toons", "towns"],
  ["oide", "wide"],
  ["oidth", "width"],
  ["oins", "wins"],
  ["oall", "wall"],
  ["oant", "want"],
  ["oater", "water"],
  ["oeath", "weath"], // placeholder no-op safety
  ["oeek", "week"],
  ["ohat", "what"],
  ["ohen", "when"],
  ["ohere", "where"],
  ["ohile", "while"],
  ["ohose", "whose"],
  ["ohy", "why"],
  ["oins", "wins"],
  ["oin", "win"],
  ["oith", "with"],
  ["oorld", "world"],
  ["oould", "would"],
  ["orong", "wrong"],
  ["knoon", "known"],
  ["laon", "lawn"],
  ["loh", "lwh"],
  ["oall", "wall"],
  ["oins", "wins"],
  ["ans oer", "answer"],
  ["ansoers", "answers"],
  ["ansoer", "answer"],
  ["aloays", "always"],
  ["Aloays", "Always"],
  ["Hoo", "How"],
  ["hoo", "how"],
  ["Lao", "Law"],
  ["Drao", "Draw"],
  ["feo", "few"],
  ["lo", "lw"],
];

// remove accidental duplicate/no-op entries safely by dedup
const seen = new Set();
const map = MAP.filter(([a]) => {
  if (seen.has(a) || a === "oeath") return false;
  seen.add(a);
  return true;
});

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  // feo -> few first so "too few trials" adverb is detectable after too->two fix
  s = s.replace(/\bfeo\b/g, "few");
  // too/Too -> two/Two, then restore adverbial "too few"
  s = s.replace(/\bToo\b/g, "Two").replace(/\btoo\b/g, "two");
  s = s.replace(/\bTwo few\b/g, "Too few").replace(/\btwo few\b/g, "too few");
  for (const [bad, good] of map) {
    const re = new RegExp(`\\b${bad.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
    s = s.replace(re, good);
  }
  fs.writeFileSync(f, s);
  console.log(f, s === before ? "UNCHANGED" : "fixed", "w-count:", (s.match(/w/g) || []).length);
}
