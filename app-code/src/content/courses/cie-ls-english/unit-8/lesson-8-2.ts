import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cile-u8-lesson-8-2",
  code: "8-2",
  title: "Punctuation for clarity and effect",
  goal: "I CAN use punctuation accurately to control meaning, pace and emphasis in writing.",
  standards: ["0861 Grammar: punctuation"],
  vocabulary: [
    { term: "Comma", definition: "Marks a pause or separates items — lists, clauses, direct address." },
    { term: "Colon", definition: "Introduces a list, explanation or quotation — 'as follows:'." },
    { term: "Semicolon", definition: "Joins two closely related independent clauses — stronger than a comma." },
    { term: "Apostrophe", definition: "Shows possession ('the dog's bone') or contraction ('don't')." },
    { term: "Dash", definition: "Indicates interruption, aside or dramatic pause — 'the answer — when it came — was surprising.'" },
    { term: "Ellipsis", definition: "Three dots indicating omission or trailing off — 'I don't know... maybe.'" },
  ],
  concepts: [
    {
      id: "cile-u8-punctuation-basics",
      title: "Core punctuation",
      skill: "Use commas, colons, semicolons and apostrophes correctly for clarity and meaning.",
      lesson: {
        sections: [
          {
            heading: "Commas",
            body: "- **Lists**: 'apples, oranges, and bananas'\n- **Clauses**: 'Because it rained, we stayed in.'\n- **Direct address**: 'Sam, please sit down.'\n- **Parenthetical**: 'The book, which was old, fell apart.'",
          },
          {
            heading: "Colons and semicolons",
            body: "- **Colon**: introduces — 'She bought three things: bread, milk, eggs.' or 'The result was clear: we had won.'\n- **Semicolon**: joins related independent clauses — 'The rain stopped; the sun came out.' Stronger than a comma, weaker than a full stop.",
          },
          {
            heading: "Apostrophes",
            body: "- **Possession**: 'the dog's bone' (singular), 'the dogs' bones' (plural).\n- **Contraction**: 'don't', 'it's' (= it is), 'they're' (= they are).\n- **Common error**: 'its' (possessive) vs 'it's' (contraction) — no apostrophe for possession.",
          },
        ],
        keyFormulas: [
          { name: "Punctuation functions", statement: "Comma = pause/separate. Colon = introduce. Semicolon = join related clauses. Apostrophe = possession/contraction." },
        ],
        workedExample: {
          problem: "Punctuate: 'She bought apples oranges and bananas.'",
          solution: "'She bought apples, oranges, and bananas.' — commas separate list items.",
        },
      },
      questions: [
        {
          id: "cile-u8-punct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark introduces a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comma" },
              { id: "b", text: "Colon" },
              { id: "c", text: "Semicolon" },
              { id: "d", text: "Apostrophe" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Colon", statement: "Introduces lists, explanations, quotations." },
            ],
            steps: [
              { reasoning: "Colon introduces what follows.", working: "\\text{colon}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Colon",
            commonErrors: ["Choosing comma — commas separate items but don't introduce the list."],
          },
        },
        {
          id: "cile-u8-punct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Punctuate correctly: 'The rain stopped the sun came out.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semicolon", statement: "Joins two closely related independent clauses." },
            ],
            steps: [
              { reasoning: "Two independent clauses — need stronger punctuation than comma.", working: "\\text{two clauses}", marks: 1, markCode: "AO2" },
              { reasoning: "'The rain stopped; the sun came out.' — semicolon joins them.", working: "\\text{semicolon}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'The rain stopped; the sun came out.'",
            commonErrors: ["Using comma splice — 'The rain stopped, the sun came out' is incorrect."],
          },
        },
        {
          id: "cile-u8-punct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct the apostrophe errors: 'The dogs bone is its favorite toy. Its' a big dog.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophes", statement: "Possession vs contraction: 'its' (possessive) vs 'it's' (it is)." },
            ],
            steps: [
              { reasoning: "Error 1: 'dogs' should be 'dog's' (singular possessive).", working: "\\text{dog's}", marks: 1, markCode: "AO2" },
              { reasoning: "Error 2: 'its' (possessive) correct; 'Its' at start is wrong.", working: "\\text{its}", marks: 1, markCode: "AO2" },
              { reasoning: "Error 3: 'Its' should be 'It's' (it is).", working: "\\text{it's}", marks: 1, markCode: "AO2" },
              { reasoning: "Corrected version provided.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'The dog's bone is its favourite toy. It's a big dog.'",
            commonErrors: ["Confusing 'its' and 'it's' — remember: 'it's' always means 'it is'."],
          },
        },
        {
          id: "cile-u8-punct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are punctuating a complex sentence for clarity.",
          parts: [
            { label: "a", prompt: "Write a sentence using a comma for a list.", marks: 1 },
            { label: "b", prompt: "Write a sentence using a colon to introduce an explanation.", marks: 2 },
            { label: "c", prompt: "Write a sentence using a semicolon to join two clauses.", marks: 2 },
            { label: "d", prompt: "Explain when to use a semicolon vs a full stop.", marks: 2 },
            { label: "e", prompt: "Write a sentence using an apostrophe correctly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Punctuation functions", statement: "Each mark has a specific function — use the right one for the relationship." },
            ],
            steps: [
              { part: "a", reasoning: "Comma list correct.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Colon introduces explanation correctly.", working: "\\text{colon}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Sentence is grammatically complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Semicolon joins independent clauses correctly.", working: "\\text{semicolon}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Both clauses are independent.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Semicolon = closely related; full stop = separate thoughts.", working: "\\text{related vs separate}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Explanation clear.", marks: 1, markCode: "AO3" },
              { part: "e", reasoning: "Apostrophe used correctly (possession or contraction).", working: "\\text{apostrophe}", marks: 1, markCode: "AO2" },
              { part: "e", reasoning: "Usage is correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) comma list (b) colon introduction (c) semicolon join (d) semicolon vs full stop explained (e) correct apostrophe",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct punctuation usage.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct semicolon.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear explanation.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct apostrophe.", part: "e" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "e" },
            ],
            commonErrors: ["In (d) saying 'semicolon is stronger' without explaining when each is appropriate."],
          },
        },
      ],
    },
    {
      id: "cile-u8-punctuation-style",
      title: "Punctuation for effect",
      skill: "Use punctuation deliberately — dashes, ellipses, exclamation marks — to control pace and emphasis.",
      lesson: {
        sections: [
          {
            heading: "Effect punctuation",
            body: "- **Dash**: interruption or aside — 'The answer — when it finally came — surprised everyone.'\n- **Ellipsis**: trailing off, hesitation, omission — 'I don't know... maybe later.'\n- **Exclamation**: strong emotion — use sparingly; overuse weakens impact.\n- **Question mark**: direct questions only — rhetorical questions still take '?'.",
          },
          {
            heading: "Pacing through punctuation",
            body: "- **Full stops**: decisive, final — 'She stopped.'\n- **Commas**: slight pause — 'She stopped, looked back.'\n- **Semicolons**: balanced pause — 'She stopped; the room was silent.'\n- **Dashes**: dramatic interruption — 'She stopped — then ran.'\n- **Ellipses**: uncertain, trailing — 'She stopped... and didn't move.'",
          },
          {
            heading: "Overuse warnings",
            body: "Exclamation marks and ellipses lose power when overused. One '!' in a paragraph is emphasis; five is noise. Same for '...' — use only for genuine trailing or omission.",
          },
        ],
        keyFormulas: [
          { name: "Punctuation = pace", statement: "Full stop (decisive) → comma (slight pause) → semicolon (balanced) → dash (interruption) → ellipsis (trailing)." },
        ],
        workedExample: {
          problem: "Make this dramatic: 'The door opened and a stranger walked in.'",
          solution: "'The door opened — and a stranger walked in.' — the dash creates a dramatic pause before the reveal.",
        },
      },
      questions: [
        {
          id: "cile-u8-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation creates a dramatic interruption or aside?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comma" },
              { id: "b", text: "Dash" },
              { id: "c", text: "Full stop" },
              { id: "d", text: "Colon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dash", statement: "Indicates interruption, aside or dramatic pause." },
            ],
            steps: [
              { reasoning: "Dash creates the strongest pause/interruption.", working: "\\text{dash}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Dash",
            commonErrors: ["Choosing comma — commas are lighter pauses."],
          },
        },
        {
          id: "cile-u8-style-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why overusing exclamation marks weakens writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Exclamation overuse", statement: "Emphasis requires contrast — if everything is emphatic, nothing is." },
            ],
            steps: [
              { reasoning: "Exclamation marks lose impact when used constantly — they become noise.", working: "\\text{diluted}", marks: 1, markCode: "AO2" },
              { reasoning: "Effective emphasis needs restraint — one '!' among full stops stands out.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Exclamation marks lose power through overuse — if everything is emphatic, nothing is. Effective emphasis requires restraint so that genuine emotion stands out.",
            commonErrors: ["Saying 'it is unprofessional' — the issue is rhetorical impact, not formality."],
          },
        },
        {
          id: "cile-u8-style-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this flat sentence with punctuation for dramatic effect: 'The results came in and we had won.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Punctuation for effect", statement: "Dashes, ellipses and strategic full stops control drama." },
            ],
            steps: [
              { reasoning: "Problem: flat delivery — no drama.", working: "\\text{flat}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: add pause before reveal — 'The results came in — and we had won.'", working: "\\text{dash}", marks: 1, markCode: "AO2" },
              { reasoning: "Alternative: ellipsis for suspense — 'The results came in... we had won.'", working: "\\text{ellipsis}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: dramatic impact.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'The results came in — and we had won.' or 'The results came in... we had won.' — dash or ellipsis creates suspense before the reveal.",
            commonErrors: ["Adding exclamation marks — punctuation for drama is about pauses, not volume."],
          },
        },
        {
          id: "cile-u8-style-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are punctuating a dramatic narrative passage.",
          parts: [
            { label: "a", prompt: "Write a sentence using a dash for interruption.", marks: 2 },
            { label: "b", prompt: "Write a sentence using an ellipsis for hesitation.", marks: 2 },
            { label: "c", prompt: "Write a sentence using a colon for revelation.", marks: 2 },
            { label: "d", prompt: "Explain how punctuation controls pace in your three sentences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Punctuation for effect", statement: "Each mark controls a different pause — interruption, hesitation, revelation." },
            ],
            steps: [
              { part: "a", reasoning: "Dash used correctly for interruption/aside.", working: "\\text{dash}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Sentence is grammatical.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Ellipsis used for hesitation/trailing.", working: "\\text{ellipsis}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Sentence is grammatical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Colon introduces revelation/explanation correctly.", working: "\\text{colon}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Sentence is grammatical.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Pace effects explained accurately.", working: "\\text{pace}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Links to dramatic effect.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) dash interruption (b) ellipsis hesitation (c) colon revelation (d) pace analysis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct dash usage.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct ellipsis.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct colon.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Pace convincingly analysed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) describing punctuation without linking to pace or effect."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u8-punctuation-notes",
      title: "Punctuation — revision notes",
      summary: "Core punctuation functions, effect punctuation, and pacing control.",
      sections: [
        {
          heading: "Core punctuation",
          body: "Comma = pause/separate. Colon = introduce. Semicolon = join related clauses. Apostrophe = possession/contraction ('its' vs 'it's').",
        },
        {
          heading: "Effect punctuation",
          body: "Dash = interruption. Ellipsis = trailing/hesitation. Exclamation = emotion (use sparingly). Full stop = decisive.",
        },
        {
          heading: "Pacing",
          body: "Full stop (decisive) → comma (slight pause) → semicolon (balanced) → dash (interruption) → ellipsis (trailing). Overuse dilutes impact.",
        },
      ],
    },
  ],
};
