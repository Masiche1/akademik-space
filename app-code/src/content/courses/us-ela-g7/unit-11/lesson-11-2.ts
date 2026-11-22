import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const SPELLDRILL: TextExtract = {
  title: "Spelling and Word Study",
  author: "Written for Akademik Space",
  text: "The necessary separation of the two brothers caused their mother great concern. The committee's decision was definitely an embarrassment. They received the message and immediately began to accommodate the changes.",
};

const COMPARETEXTS: TextExtract = {
  title: "Comparing Two Texts About School Lunch",
  author: "Written for Akademik Space",
  text: "Text A: 'School lunches should be regulated because students need nutrition to learn. Studies show that students who eat balanced meals perform better academically and have better attendance.'\n\nText B: 'School lunch regulations limit student choice and increase costs. Many students prefer the current menu options, and schools should focus resources on academic programs instead of food restrictions.'",
};

export const lesson112: Lesson = {
  id: "ela7-u11-lesson-11-2",
  code: "11-2",
  title: "Spelling Patterns and Comparing Texts",
  goal: "I CAN apply spelling patterns and compare how two texts address the same topic differently.",
  standards: ["L.7.6", "RL.7.7", "RI.7.9"],
  vocabulary: [
    {
      term: "Root word",
      definition: "The base part of a word — 'port' in 'transport'.",
    },
    {
      term: "Prefix",
      definition: "Added to the beginning — 'un-' in 'unhappy'.",
    },
    {
      term: "Suffix",
      definition: "Added to the end — '-tion' in 'education'.",
    },
    {
      term: "Homophone",
      definition:
        "Words that sound alike but differ in meaning/spelling — 'their/there'.",
    },
    { term: "Compare", definition: "Identify similarities between texts." },
    { term: "Contrast", definition: "Identify differences between texts." },
  ],
  concepts: [
    {
      id: "ela7-u11-spelling",
      title: "Spelling patterns and word study",
      skill:
        "Use roots, prefixes, suffixes, and patterns to spell accurately and expand vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Roots, prefixes, suffixes",
            body: "Break words into parts: **port** (carry) + **trans** (across) + **port** (carry) = transport. **un** (not) + **happy** = unhappy. **educ** (teach) + **ation** (noun) = education. Knowing roots helps spell AND understand meaning — 'spect' means 'look', so 'inspect' = look into, 'respect' = look back at.",
          },
          {
            heading: "Spelling patterns",
            body: "Common patterns: **-tion/-sion** (education, decision), **-able/-ible** (comfortable, possible), **doubling consonants** (running, stopped), **silent letters** (knife, doubt, island), **ie/ei** (believe, receive — 'i before e except after c'). These patterns help spell longer words correctly.",
          },
        ],
        keyFormulas: [
          {
            name: "Word parts",
            statement: "Root + prefix + suffix = meaning + spelling.",
          },
          {
            name: "Pattern families",
            statement: "-tion, -able, doubling, silent letters, ie/ei.",
          },
          {
            name: "Root meaning",
            statement: "Knowing roots helps both spelling and vocabulary.",
          },
        ],
        workedExample: {
          problem: "Spell 'necessary' using word parts and patterns.",
          solution:
            "'Necessary' = ne + cess + ary. The 'cess' root means 'go/yield'. Pattern: double 's' before '-ary'. Common error: 'neccessary' (extra c) or 'necesary' (missing s).",
        },
      },
      questions: [
        {
          id: "ela7-u11-spelling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPELLDRILL,
          stem: "What is the root word in 'necessary'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nec" },
              { id: "b", text: "Ary" },
              { id: "c", text: "Cess" },
              { id: "d", text: "Sary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Root word",
                statement: "Base part carrying core meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Cess' is the root meaning 'go/yield' — 'necessary' = ne + cess + ary.",
                evidence: "The necessary separation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. 'Cess' is the root.",
            commonErrors: ["Choosing 'sary' — that's a suffix, not the root."],
          },
        },
        {
          id: "ela7-u11-spelling-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SPELLDRILL,
          stem: "Correct the spelling in 'seperation' and explain the pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spelling correction",
                statement: "Apply word patterns.",
              },
            ],
            steps: [
              {
                reasoning: "Correct: 'separation' — 'a' not 'e' after 'p'.",
                evidence: "separation of the two brothers",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pattern: -ation suffix; 'separate' + 'ion' = 'separation' (drop 'e').",
                evidence: "seperation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Common error: 'seperate' is a verb; 'separation' is the noun with 'a'.",
                evidence: "separation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Separation' — from 'separate' + '-ion', dropping 'e'. Common error 'seperate' is the verb form.",
            commonErrors: [
              "Keeping 'seperate' — that's the verb, not the noun.",
            ],
          },
        },
        {
          id: "ela7-u11-spelling-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SPELLDRILL,
          stem: "Correct all spelling errors in the passage and explain the pattern for each correction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive spelling",
                statement: "Apply patterns to all errors.",
              },
              {
                kind: "skill",
                name: "Pattern recognition",
                statement: "Understand WHY words are spelled correctly.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning: "'separation' — -ation suffix, 'a' not 'e'.",
                evidence: "seperation",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "'necessary' — double 's', '-ary' suffix.",
                evidence: "necessary",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'committee's' — double 'm', double 't', possessive apostrophe.",
                evidence: "committee's decision",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'definitely' — 'i' not 'a' after 'fin'; 'embarrassment' — double 'r', double 's'.",
                evidence: "definately an embarassment",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Corrections: separation, necessary, committee's, definitely, embarrassment — patterns include -ation suffix, doubling consonants, and suffix rules.",
            commonErrors: [
              "Correcting spelling without understanding the pattern — memorization vs. understanding.",
            ],
          },
        },
        {
          id: "ela7-u11-spelling-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SPELLDRILL,
          parts: [
            {
              label: "a",
              prompt:
                "Break 'accommodate' into syllables and identify the spelling challenge.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why it's commonly misspelled.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spelling analysis",
                statement: "Understand spelling challenges.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "ac-com-mo-date — challenge is double 'c' and double 'm'.",
                evidence: "accommodate the changes",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Commonly misspelled 'accomodate' (one c) or 'accommodate' (one m) — the doubling is unusual.",
                evidence: "accommodate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) ac-com-mo-date; challenge is double 'c' and 'm'. (b) Unusual doubling causes errors — 'accomodate' or 'accommodate' misspelled.",
            commonErrors: [
              "Saying it's 'hard' without identifying the doubling pattern.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u11-spelling2",
      title: "Comparing texts",
      skill:
        "Compare how two texts address the same topic with different perspectives.",
      lesson: {
        sections: [
          {
            heading: "Compare and contrast",
            body: "**Compare** = similarities; **contrast** = differences. Both texts discuss school lunch, but Text A argues for regulation (nutrition → learning) while Text B argues against (choice, cost, priorities). Comparing reveals how the same topic can have opposite conclusions based on different values and evidence.",
          },
          {
            heading: "Purpose and audience",
            body: "Each text has a **purpose** (inform, persuade, entertain) and **audience** (who it's for). Text A targets health-conscious parents/educators; Text B targets budget-conscious administrators. Recognizing purpose helps understand why texts differ — they're not just different facts, they're different arguments.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare",
            statement: "Find similarities — same topic, different angles.",
          },
          {
            name: "Contrast",
            statement: "Find differences — different claims, evidence, values.",
          },
          {
            name: "Purpose + audience",
            statement: "Texts differ because they serve different goals.",
          },
        ],
        workedExample: {
          problem: "How do Text A and Text B differ on school lunch?",
          solution:
            "Text A argues FOR regulation (nutrition → learning); Text B argues AGAINST (choice, cost, priorities). Same topic, opposite conclusions — different values and evidence.",
        },
      },
      questions: [
        {
          id: "ela7-u11-spelling2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPARETEXTS,
          stem: "What do both texts have in common?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They both discuss school lunch and its effects",
              },
              { id: "b", text: "They both argue for school lunch regulation" },
              { id: "c", text: "They both cite the same studies" },
              { id: "d", text: "They both have the same author" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compare",
                statement: "Find similarities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both discuss school lunch — that's the similarity. They differ on whether to regulate.",
                evidence:
                  "School lunches should be regulated" +
                  "School lunch regulations limit",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Both discuss school lunch and its effects — that's the similarity.",
            commonErrors: ["Choosing (a) — only Text A argues for regulation."],
          },
        },
        {
          id: "ela7-u11-spelling2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPARETEXTS,
          stem: "Identify one similarity and one difference between the two texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compare and contrast",
                statement: "Identify similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Similarity: both discuss school lunch as a topic affecting students.",
                evidence:
                  "School lunches should be regulated" +
                  "School lunch regulations",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference: Text A argues FOR regulation (nutrition → learning); Text B argues AGAINST (choice, cost).",
                evidence: "students need nutrition to learn",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The difference reveals different values — health vs autonomy/cost.",
                evidence: "better attendance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Similarity: both discuss school lunch. Difference: Text A supports regulation (health/learning); Text B opposes it (choice/cost).",
            commonErrors: [
              "Saying they 'disagree' without specifying how — need concrete differences.",
            ],
          },
        },
        {
          id: "ela7-u11-spelling2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMPARETEXTS,
          stem: "Analyze how each text's purpose and evidence differ. Which is more persuasive and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose analysis",
                statement: "Texts serve different goals.",
              },
              {
                kind: "skill",
                name: "Persuasion evaluation",
                statement: "Evidence quality determines persuasiveness.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Text A's purpose: persuade for regulation — cites studies showing nutrition affects learning.",
                evidence:
                  "Studies show that students who eat balanced meals perform better",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Text B's purpose: persuade against regulation — argues choice and cost but cites no evidence.",
                evidence: "Many students prefer the current menu options",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Text A uses evidence ('studies show'); Text B uses assertions ('many students prefer').",
                evidence:
                  "perform better academically and have better attendance",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Text A is more persuasive — evidence-based claims are stronger than unsupported assertions.",
                evidence: "increase costs",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Text A is more persuasive — it cites studies showing nutrition affects learning; Text B makes assertions about choice and cost without evidence. Evidence-based arguments are stronger.",
            commonErrors: [
              "Choosing Text B because 'choice matters' — good values need evidence too.",
            ],
          },
        },
        {
          id: "ela7-u11-spelling2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPARETEXTS,
          parts: [
            {
              label: "a",
              prompt: "State each text's main claim in one sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify which text uses stronger evidence and why.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim identification",
                statement: "Each text has a main argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Text A: 'Schools should regulate lunch for nutrition/learning'; Text B: 'Schools shouldn't regulate — choice/cost'.",
                evidence:
                  "School lunches should be regulated" +
                  "regulations limit student choice",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Text A — cites 'studies show' with specific findings; Text B makes assertions without sources.",
                evidence: "Studies show that students who eat balanced meals",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Text A: regulate for nutrition; Text B: don't regulate for choice/cost. (b) Text A — cites studies; Text B uses unsupported assertions.",
            commonErrors: [
              "Saying both are equally persuasive — evidence quality differs.",
            ],
          },
        },
      ],
    },
  ],
};
