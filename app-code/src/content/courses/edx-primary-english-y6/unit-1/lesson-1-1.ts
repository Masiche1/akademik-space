import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edpe6-u1-lesson-1-1",
  code: "1-1",
  title: "Spelling Strategies and Academic Vocabulary",
  goal: "I CAN spell complex academic words and use them precisely.",
  standards: ["Year 6 Spelling"],
  vocabulary: [
    {
      term: "Academic vocabulary",
      definition:
        "Formal words used in learning: analyse, evaluate, significant.",
    },
    { term: "Root word", definition: "The core part of a word." },
    { term: "Etymology", definition: "Word origin and history." },
    { term: "Morphology", definition: "The study of word structure." },
  ],
  concepts: [
    {
      id: "edpe6-u1-spelling",
      title: "Complex spelling strategies",
      skill: "Spell complex words using morphology and etymology.",
      lesson: {
        sections: [
          {
            heading: "Morphological analysis",
            body: "Break words into morphemes: **un** + **believ** + **able** = unbelievable; **re** + **organ** + **ise** = reorganise. Understanding structure aids spelling.",
          },
          {
            heading: "Etymological spelling",
            body: "Many spellings preserve origins: 'island' has silent s (from Latin insula), 'debt' has silent b (from Latin debitum). Some irregularities are historical.",
          },
        ],
        keyFormulas: [
          { name: "Morphemes", statement: "Smallest meaning units" },
          { name: "Roots", statement: "Core word parts" },
          { name: "Silent letters", statement: "Historical spelling" },
        ],
        workedExample: {
          problem: "Spell 'unbelievable' by breaking it down.",
          solution: "un- + believe + -able = unbelievable.",
        },
      },
      questions: [
        {
          id: "edpe6-u1-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a morpheme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Smallest unit of meaning" },
              { id: "b", text: "A paragraph" },
              { id: "c", text: "A sentence" },
              { id: "d", text: "A whole word" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Morpheme",
                statement: "Smallest meaning unit.",
              },
            ],
            steps: [
              {
                reasoning: "Morpheme = smallest unit.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Smallest unit of meaning",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u1-sp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Break down 'reorganise' into morphemes.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "reorg + anise" },
              { id: "b", text: "re + organ + ise" },
              { id: "c", text: "reo + ganise" },
              { id: "d", text: "re + organise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Morphology",
                statement: "re- + organ + -ise.",
              },
            ],
            steps: [
              { reasoning: "Prefix identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: re+organ+ise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** re + organ + ise",
            commonErrors: ["Wrong breakdown."],
          },
        },
        {
          id: "edpe6-u1-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does 'island' have a silent 's'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Etymology",
                statement: "Historical spelling from Latin 'insula'.",
              },
            ],
            steps: [
              {
                reasoning: "Historical reason given.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct explanation.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Silent s preserved from Latin 'insula'",
            commonErrors: ["No historical reason."],
          },
        },
        {
          id: "edpe6-u1-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the word 'unbelievable' morphologically and explain its meaning.",
          parts: [
            { label: "a", prompt: "Identify prefix", marks: 1 },
            { label: "b", prompt: "Identify root", marks: 1 },
            { label: "c", prompt: "Identify suffix", marks: 1 },
            { label: "d", prompt: "Explain meaning", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Morphological analysis",
                statement: "un- + believe + -able = not able to be believed.",
              },
            ],
            steps: [
              { part: "a", reasoning: "un- prefix.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "believe root.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "-able suffix.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Meaning explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "un- + believe + -able = not able to be believed",
            commonErrors: ["Incomplete analysis."],
          },
        },
      ],
    },
    {
      id: "edpe6-u1-academic",
      title: "Academic vocabulary",
      skill: "Use precise academic vocabulary in context.",
      lesson: {
        sections: [
          {
            heading: "Key academic words",
            body: "**Analyse** = examine in detail; **evaluate** = judge value; **significant** = important; **consequence** = result; **perspective** = viewpoint; **evidence** = proof; **methodology** = how you did it; **hypothesis** = prediction to test.",
          },
          {
            heading: "Using academic words",
            body: "Use them precisely: 'The evidence suggests...' not 'I think...'. Academic writing is formal, objective, precise. Avoid vague words like 'stuff', 'things', 'nice'.",
          },
        ],
        keyFormulas: [
          { name: "Analyse", statement: "Examine in detail" },
          { name: "Evaluate", statement: "Judge value" },
          { name: "Evidence", statement: "Proof/support" },
        ],
        workedExample: {
          problem:
            "Replace 'I think the experiment worked' with academic language.",
          solution: "'The evidence indicates the experiment was successful.'",
        },
      },
      questions: [
        {
          id: "edpe6-u1-av-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'analyse' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examine in detail" },
              { id: "b", text: "Summarise" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Ignore" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analyse",
                statement: "Examine in detail.",
              },
            ],
            steps: [
              {
                reasoning: "Analyse = detailed examination.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Examine in detail",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpe6-u1-av-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'evaluate' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judge value" },
              { id: "b", text: "Describe" },
              { id: "c", text: "Create" },
              { id: "d", text: "Copy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluate",
                statement: "Judge value.",
              },
            ],
            steps: [
              { reasoning: "Evaluate = judge.", marks: 1, markCode: "M" },
              { reasoning: "Answer: judge value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Judge value",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpe6-u1-av-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite academically: 'I think the experiment worked because I saw it happen.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Academic register",
                statement: "Objective, evidence-based language.",
              },
            ],
            steps: [
              { reasoning: "Objective tone used.", marks: 1, markCode: "A" },
              { reasoning: "Evidence referenced.", marks: 1, markCode: "A" },
              { reasoning: "Academic phrasing.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'The evidence indicates the experiment was successful.'",
            commonErrors: ["Still informal or vague."],
          },
        },
        {
          id: "edpe6-u1-av-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use 'significant', 'consequence', 'perspective', 'evidence' in sentences about a school policy change.",
          parts: [
            { label: "a", prompt: "significant", marks: 1 },
            { label: "b", prompt: "consequence", marks: 1 },
            { label: "c", prompt: "perspective", marks: 1 },
            { label: "d", prompt: "evidence", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Academic vocabulary",
                statement: "All words used correctly in context.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "significant used correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "consequence used correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "perspective used correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "evidence used correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'The significant change had consequences... From my perspective... The evidence suggests...'",
            commonErrors: ["Words used incorrectly."],
          },
        },
      ],
    },
  ],
};
