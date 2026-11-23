const fs = require("fs");
const path = require("path");
const ROOT = "src/content/courses/edx-englang-y11";

// Per-question level descriptors. "whole" = single-response question (6 marks);
// "a"/"b" = per-part descriptors for structured questions.
const MAP = {
  "el11-u4-register-audience-q5": {
    whole: [
      ["Level 3", "4-6", "Fluent, genuinely formal rewrite; both language changes explained precisely and linked to the head teacher's need for clear, professional information."],
      ["Level 2", "2-3", "Mostly formal rewrite with some explanation of changes; the link to audience is partial or one change is unexplained."],
      ["Level 1", "1", "Rewrite remains largely informal, or changes are listed without explanation or audience awareness."],
    ],
  },
  "el11-u4-formal-informal-features-q5": {
    a: [
      ["Level 2", "2-3", "Accurate formal rewrite with most informal features removed."],
      ["Level 1", "1", "Rewrite partially formal; informal contractions or slang remain."],
    ],
    b: [
      ["Level 2", "2-3", "Two specific changes identified, each with a clear reason linked to formality."],
      ["Level 1", "1", "Changes listed but reasons missing, vague or incorrect."],
    ],
  },
  "el11-u4-historical-change-q5": {
    a: [
      ["Level 2", "2-3", "Most modern equivalents accurate, including the '-est' ending pattern."],
      ["Level 1", "1", "Few equivalents correct or meanings confused."],
    ],
    b: [
      ["Level 2", "3-4", "Clearly explains the semantic-shift/'false friend' problem with apt examples."],
      ["Level 1", "1-2", "Identifies that the meaning has changed but explains it vaguely or inaccurately."],
    ],
  },
  "el11-u4-neologisms-shift-q5": {
    whole: [
      ["Level 3", "4-6", "Balances prescriptivist and descriptivist positions with reasoned evidence and reaches a nuanced judgement on language change."],
      ["Level 2", "2-3", "Presents both sides but with thin evidence or a judgement that only partly follows from the argument."],
      ["Level 1", "1", "One-sided response, or assertion without engagement with how English actually changes."],
    ],
  },
  "el11-u4-idiolect-dialect-q5": {
    a: [
      ["Level 2", "2", "Accurate definition of code-switching."],
      ["Level 1", "1", "Partial or inaccurate definition."],
    ],
    b: [
      ["Level 2", "3-4", "Explains clearly how switching varieties can signal or negotiate power between speakers, with apt illustration."],
      ["Level 1", "1-2", "Some awareness of the power relationship but explanation is thin or unsupported."],
    ],
  },
  "el11-u4-context-meaning-q5": {
    a: [
      ["Level 2", "2", "Correct explanation of deixis with a valid example."],
      ["Level 1", "1", "Partial explanation or missing/invalid example."],
    ],
    b: [
      ["Level 2", "3-4", "Analyses precisely how context shifts the interpretation of 'fine' in both sentences, with close reference to wording."],
      ["Level 1", "1-2", "Notes a difference in meaning but analysis is superficial or only one sentence is addressed."],
    ],
  },
  "el11-u5-loaded-language-q5": {
    a: [
      ["Level 2", "2-3", "Two genuinely different loaded versions that position the reader in clearly opposed ways."],
      ["Level 1", "1", "Versions are barely different or not recognisably loaded."],
    ],
    b: [
      ["Level 2", "2-3", "Explains the positioning effect of the specific word choices in both versions."],
      ["Level 1", "1", "Explanation is vague ('it sounds nicer') without analysing word choice."],
    ],
  },
  "el11-u5-persuasive-techniques-q5": {
    a: [
      ["Level 2", "2", "Correctly identifies the technique (tricolon/imperative slogan pattern)."],
      ["Level 1", "1", "Identifies a technique inaccurately or too vaguely."],
    ],
    b: [
      ["Level 2", "3-4", "Uses the same facts to build two genuinely opposed persuasive cases, with clear explanation of the framing."],
      ["Level 1", "1-2", "Attempts both sides but one is weak, or the framing explanation is missing."],
    ],
  },
  "el11-u5-representation-q5": {
    a: [
      ["Level 2", "2-3", "Sympathetic rewrite achieved through apt lexical and grammatical choices."],
      ["Level 1", "1", "Rewrite barely shifts the representation."],
    ],
    b: [
      ["Level 2", "2-3", "Antagonistic rewrite is clearly distinct and effectively hostile in framing."],
      ["Level 1", "1", "Rewrite is not convincingly antagonistic."],
    ],
  },
  "el11-u5-reading-representations-q5": {
    a: [
      ["Level 2", "2", "Identifies the dominant impression accurately."],
      ["Level 1", "1", "Vague or inaccurate impression."],
    ],
    b: [
      ["Level 2", "3-4", "Explains precisely how specific word choices create the impression, with close reference."],
      ["Level 1", "1-2", "Some link between language and impression but general or unsupported."],
    ],
  },
  "el11-u5-comparing-accounts-q5": {
    a: [
      ["Level 2", "2", "Two accurate neutral/analyical word choices identified from the business journal."],
      ["Level 1", "1", "One or no accurate choices."],
    ],
    b: [
      ["Level 2", "3-4", "Explains how the local paper's emotive language shapes the reader's response, with specific references."],
      ["Level 1", "1-2", "Notes emotional tone but without analysing specific word choices."],
    ],
  },
  "el11-u5-evaluating-sources-q5": {
    a: [
      ["Level 2", "2-3", "Three relevant, evaluative questions about source reliability."],
      ["Level 1", "1", "Fewer than three or questions that are not evaluative."],
    ],
    b: [
      ["Level 2", "2-3", "Explains clearly why unnamed 'studies' undermine credibility — unverifiable authority."],
      ["Level 1", "1", "Notes it is untrustworthy without explaining the verification problem."],
    ],
  },
  "el11-u6-punctuation-clarity-q5": {
    a: [
      ["Level 2", "2-3", "Sentence punctuated correctly, including the subordinate clause."],
      ["Level 1", "1", "Punctuation partially correct or ambiguous."],
    ],
    b: [
      ["Level 2", "2-3", "Explains the punctuation choices accurately, linking them to clarity."],
      ["Level 1", "1", "Names punctuation without explaining its function."],
    ],
  },
  "el11-u6-punctuation-effect-q5": {
    a: [
      ["Level 2", "2", "Correctly changes 'it's' to 'its'."],
      ["Level 1", "1", "Error not corrected."],
    ],
    b: [
      ["Level 2", "3-4", "Explains the its/it's distinction accurately and gives a reliable avoidance strategy."],
      ["Level 1", "1-2", "Identifies the error but explanation or strategy is weak."],
    ],
  },
  "el11-u6-sentence-types-q5": {
    a: [
      ["Level 2", "2-3", "Correctly identifies the fragment and explains the missing finite verb."],
      ["Level 1", "1", "Identification or explanation inaccurate."],
    ],
    b: [
      ["Level 2", "2-3", "Explains convincingly when deliberate fragments are effective in creative writing."],
      ["Level 1", "1", "Vague claim that fragments 'add emphasis' without conditions."],
    ],
  },
  "el11-u6-verb-tense-agreement-q5": {
    a: [
      ["Level 2", "2-3", "Correctly changes 'have' to 'has' (singular subject 'each')."],
      ["Level 1", "1", "Error not corrected."],
    ],
    b: [
      ["Level 2", "2-3", "Explains the proximity-vs-subject agreement rule accurately."],
      ["Level 1", "1", "Explanation vague or rule misapplied."],
    ],
  },
  "el11-u6-spelling-patterns-q5": {
    a: [
      ["Level 2", "2-3", "All three errors corrected accurately."],
      ["Level 1", "1", "One or more errors remain."],
    ],
    b: [
      ["Level 2", "2-3", "Explains the spelling rule/pattern behind at least two errors."],
      ["Level 1", "1", "Rules unexplained or incorrectly stated."],
    ],
  },
  "el11-u6-proofreading-q5": {
    a: [
      ["Level 2", "2-3", "Sensible prioritised proofreading strategy suited to five minutes."],
      ["Level 1", "1", "Unprioritised or impractical list."],
    ],
    b: [
      ["Level 2", "2-3", "Explains clearly why a personal error list targets likely mistakes better than general re-reading."],
      ["Level 1", "1", "Assertion without explanation of the mechanism."],
    ],
  },
  "el11-u8-media-purpose-q5": {
    whole: [
      ["Level 3", "4-6", "Evaluates the claim precisely — same story does not mean same purpose — with specific reference to how each headline frames the event."],
      ["Level 2", "2-3", "Challenges the claim but with limited analysis of purpose or framing."],
      ["Level 1", "1", "Agrees or disagrees without analysis."],
    ],
  },
  "el11-u8-persuasive-media-q5": {
    whole: [
      ["Level 3", "4-6", "Compares purpose, technique and structure in parallel, with specific evidence from both texts and a clear overall judgement."],
      ["Level 2", "2-3", "Some comparison of the two texts but uneven coverage of the required aspects."],
      ["Level 1", "1", "Describes the texts separately without comparing, or comparison is vague."],
    ],
  },
  "el11-u8-source-reliability-q5": {
    whole: [
      ["Level 3", "4-6", "Compares purpose, sourcing and framing systematically, reaching a justified reliability judgement."],
      ["Level 2", "2-3", "Identifies some reliability differences but comparison is partial or judgement unsupported."],
      ["Level 1", "1", "Asserts one source is better without comparative analysis."],
    ],
  },
  "el11-u8-misinformation-q5": {
    whole: [
      ["Level 3", "4-6", "Correction acknowledges the friend's concern, states sourced facts, names the red flags and offers a checkable alternative — correcting the claim, not the person."],
      ["Level 2", "2-3", "Corrects the factual claim but with a preachy tone, missing red flags, or no alternative source offered."],
      ["Level 1", "1", "Denies the claim without evidence or attacks the friend."],
    ],
  },
  "el11-u8-media-review-q5": {
    whole: [
      ["Level 3", "4-6", "Identifies three distinct persuasive failures with specific fixes — evidence, steelmanning, narrowing, tone."],
      ["Level 2", "2-3", "Identifies some failures with partial fixes; analysis of why they fail is thin."],
      ["Level 1", "1", "Lists surface problems ('it's boring') without persuasive analysis or fixes."],
    ],
  },
  "el11-u8-evaluative-argument-q5": {
    whole: [
      ["Level 3", "4-6", "Both cases stated strongly and fairly; explicit weighing ('more convincing because'); judgement sets up a qualified conclusion."],
      ["Level 2", "2-3", "Both sides present but weighing is implicit or one side is a strawman."],
      ["Level 1", "1", "One-sided paragraph or list of points without comparison or judgement."],
    ],
  },
};

function levelsText(bands, quoted, partKey) {
  const lines = bands.map(([level, marks, descriptor], i) => {
    const comma = i < bands.length - 1 ? "," : "";
    if (partKey) {
      return quoted
        ? `                    {\n                              "part": "${partKey}",\n                              "level": "${level}",\n                              "marks": "${marks}",\n                              "descriptor": "${descriptor}"\n                    }${comma}`
        : `            { part: "${partKey}", level: "${level}", marks: "${marks}", descriptor: "${descriptor}" }${comma}`;
    }
    return quoted
      ? `                    {\n                              "level": "${level}",\n                              "marks": "${marks}",\n                              "descriptor": "${descriptor}"\n                    }${comma}`
      : `            { level: "${level}", marks: "${marks}", descriptor: "${descriptor}" }${comma}`;
  });
  const key = quoted ? '"levels"' : "levels";
  return `${key}: [\n${lines.join("\n")}\n          ],\n`;
}

const files = [
  "unit-4/lesson-4-1.ts", "unit-4/lesson-4-2.ts", "unit-4/lesson-4-3.ts",
  "unit-5/lesson-5-1.ts", "unit-5/lesson-5-2.ts", "unit-5/lesson-5-3.ts",
  "unit-6/lesson-6-1.ts", "unit-6/lesson-6-2.ts", "unit-6/lesson-6-3.ts",
  "unit-8/lesson-8-1.ts", "unit-8/lesson-8-2.ts", "unit-8/lesson-8-3.ts",
];

let inserted = 0, missed = [];
for (const f of files) {
  const fp = path.join(ROOT, f);
  let src = fs.readFileSync(fp, "utf8");
  const quoted = src.includes('"finalAnswer"');
  // process each target id present in this file
  for (const [id, spec] of Object.entries(MAP)) {
    const idRe = new RegExp(`id: "${id}"`);
    const idIdx = src.search(idRe);
    if (idIdx === -1) continue;
    // find the finalAnswer line within the next ~120 lines
    const after = src.slice(idIdx);
    const faMatch = after.match(/["']?finalAnswer["']?\s*:/);
    if (!faMatch) { missed.push(id + " (no finalAnswer)"); continue; }
    const insertAt = idIdx + faMatch.index;
    // determine if parts question: look for '"label"' or 'parts:' between id and finalAnswer
    const block = src.slice(idIdx, insertAt);
    const hasParts = /parts\s*:|"parts"\s*:/.test(block);
    let text;
    if (hasParts) {
      const aBands = spec.a, bBands = spec.b;
      text = levelsText(aBands, quoted, "a") + "          " + levelsText(bBands, quoted, "b");
      // fix: need single levels array containing both parts' bands
      text = (quoted ? '"levels"' : "levels") + ": [\n" +
        [...aBands.map(b => ({ part: "a", ...Object.fromEntries([["level", b[0]], ["marks", b[1]], ["descriptor", b[2]]]) })),
         ...bBands.map(b => ({ part: "b", ...Object.fromEntries([["level", b[0]], ["marks", b[1]], ["descriptor", b[2]]]) }))]
          .map((o, i, arr) => {
            const comma = i < arr.length - 1 ? "," : "";
            return quoted
              ? `                    {\n                              "part": "${o.part}",\n                              "level": "${o.level}",\n                              "marks": "${o.marks}",\n                              "descriptor": "${o.descriptor}"\n                    }${comma}`
              : `            { part: "${o.part}", level: "${o.level}", marks: "${o.marks}", descriptor: "${o.descriptor}" }${comma}`;
          }).join("\n") +
        `\n          ],\n`;
    } else {
      text = levelsText(spec.whole, quoted);
    }
    // indentation of the finalAnswer line
    const lineStart = src.lastIndexOf("\n", insertAt) + 1;
    const indent = src.slice(lineStart, insertAt).match(/^\s*/)[0];
    const indented = text.split("\n").map((l, i) => (i === 0 ? indent + l : l)).join("\n");
    src = src.slice(0, insertAt) + indented + src.slice(insertAt);
    inserted++;
  }
  fs.writeFileSync(fp, src);
}
console.log("inserted:", inserted, "missed:", missed);
