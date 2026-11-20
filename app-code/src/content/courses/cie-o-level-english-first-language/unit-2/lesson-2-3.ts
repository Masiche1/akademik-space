import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "cie-ol-fl-lesson-2-3",
  code: "2-3",
  title: "Poetry response and essay writing",
  goal: "I CAN write structured responses comparing and analysing poems.",
  standards: ["1119 Reading: poetry response"],
  vocabulary: [
    { term: "Comparative analysis", definition: "Analysing similarities/differences between poems." },
    { term: "Theme", definition: "Central idea explored in poem." },
    { term: "Context", definition: "Historical/social background." },
    { term: "Personal response", definition: "Individual interpretation supported by evidence." },
    { term: "Evaluation", definition: "Assessing effectiveness of poem." },
    { term: "Integrated quotation", definition: "Quote woven into analysis." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-comparative-poetry",
      title: "Comparative poetry analysis",
      skill: "Compare poems effectively — similarities and differences.",
      lesson: {
        sections: [
          {
            heading: "Comparison structure",
            body: "Point-by-point: analyse aspect in Poem A, then same aspect in Poem B, then compare. Or thematic: group by theme, compare treatments.",
          },
          {
            heading: "What to compare",
            body: "Themes, tone, imagery, structure, context, technique, effect on reader. Don't just describe each separately.",
          },
          {
            heading: "Linking words",
            body: "Use comparative language: 'similarly', 'in contrast', 'whereas', 'both', 'unlike'. Shows analytical thinking.",
          },
        ],
        keyFormulas: [
          { name: "Comparative analysis", statement: "Same aspect→Poem A→Poem B→compare. Link with comparative language." },
        ],
        workedExample: {
          problem: "Compare how two poems treat loss.",
          solution: "Theme: both address loss. Poem A: bitter tone, harsh imagery. Poem B: acceptance, gentle imagery. Contrast in treatment.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'comparative analysis'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing similarities/differences" },
              { id: "b", text: "Describing one poem" },
              { id: "c", text: "Summarising plot" },
              { id: "d", text: "Listing techniques" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comparative analysis", statement: "Analysing similarities and differences between texts." },
            ],
            steps: [
              { reasoning: "Comparative = similarities+differences.", working: "compare", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Comparing similarities/differences",
            commonErrors: ["Choosing (b) — that's single analysis."],
          },
        },
        {
          id: "cie-ol-fl-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you compare between poems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison aspects", statement: "Themes, tone, imagery, structure, context, technique." },
            ],
            steps: [
              { reasoning: "Any two valid aspects.", working: "aspects", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Themes, tone, imagery, structure, context, technique (any two).",
            commonErrors: ["Comparing only surface features."],
          },
        },
        {
          id: "cie-ol-fl-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to structure a comparative essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative structure", statement: "Point-by-point or thematic — always link poems." },
            ],
            steps: [
              { reasoning: "Choose point-by-point or thematic structure.", working: "structure", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse same aspect in both poems.", working: "aspect", marks: 1, markCode: "AO2" },
              { reasoning: "Always compare — don't just describe separately.", working: "compare", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Point-by-point/thematic+same aspect both poems+always compare.",
            commonErrors: ["Two separate descriptions — no comparison."],
          },
        },
        {
          id: "cie-ol-fl-cp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Comparative analysis.",
          parts: [
            { label: "a", prompt: "Define comparative analysis.", marks: 1 },
            { label: "b", prompt: "What to compare?", marks: 2 },
            { label: "c", prompt: "Essay structure?", marks: 3 },
            { label: "d", prompt: "Linking language?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison", statement: "Definition, aspects, structure, linking language." },
            ],
            steps: [
              { part: "a", reasoning: "Similarities and differences.", working: "comparative", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Themes, tone, imagery, structure, context.", working: "aspects", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Two+ valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Point-by-point/thematic+same aspect+always compare.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Similarly, whereas, both, unlike, in contrast.", working: "linking", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) similarities/differences (b) themes/tone/imagery (c) point-by-point+compare (d) similarly/whereas/both",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two aspects.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Language listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Describing poems separately without comparing."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-poetry-context",
      title: "Context and poetry",
      skill: "Consider historical and social context in poetry.",
      lesson: {
        sections: [
          {
            heading: "Historical context",
            body: "When was poem written? Wars, movements, political climate shape themes and attitudes.",
          },
          {
            heading: "Social context",
            body: "Values, class, gender roles of era — reflected in speaker's perspective and subject matter.",
          },
          {
            heading: "Using context",
            body: "Context adds depth but don't force it — support interpretation with textual evidence. Context should illuminate, not replace analysis.",
          },
        ],
        keyFormulas: [
          { name: "Context", statement: "Historical+social context adds depth; support with textual evidence." },
        ],
        workedExample: {
          problem: "WWI poem uses 'futility' language — why?",
          solution: "Historical context: war's pointless destruction shaped speaker's attitude — context explains tone.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ctx2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'historical context' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time period when written" },
              { id: "b", text: "Poem's length" },
              { id: "c", text: "Rhyme scheme" },
              { id: "d", text: "Speaker's age" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Historical context", statement: "Time period when poem was written." },
            ],
            steps: [
              { reasoning: "Historical = time period.", working: "time", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Time period when written",
            commonErrors: ["Choosing (d) — that's speaker, not context."],
          },
        },
        {
          id: "cie-ol-fl-ctx2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does context affect poem interpretation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Context effect", statement: "Explains attitudes/themes; shouldn't replace textual analysis." },
            ],
            steps: [
              { reasoning: "Context explains attitudes.", working: "explains", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Context explains attitudes/themes; support with textual evidence.",
            commonErrors: ["Forcing context without evidence."],
          },
        },
        {
          id: "cie-ol-fl-ctx2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why shouldn't context replace textual analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context vs analysis", statement: "Poem stands alone; context illuminates but evidence comes from text." },
            ],
            steps: [
              { reasoning: "Poem's meaning exists independent of context.", working: "independent", marks: 1, markCode: "AO2" },
              { reasoning: "Context should illuminate, not substitute.", working: "illuminate", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence must come from poem itself.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Poem stands alone; context illuminates; evidence from text.",
            commonErrors: ["Writing about context without analysing poem."],
          },
        },
        {
          id: "cie-ol-fl-ctx2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Context in poetry.",
          parts: [
            { label: "a", prompt: "Define historical context.", marks: 1 },
            { label: "b", prompt: "How context affects interpretation?", marks: 2 },
            { label: "c", prompt: "Why not replace analysis?", marks: 3 },
            { label: "d", prompt: "How to use context?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context", statement: "Definition, effects, limitations, usage." },
            ],
            steps: [
              { part: "a", reasoning: "Time period when written.", working: "historical", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Explains attitudes; support with evidence.", working: "effect", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Poem independent; context illuminates; evidence from text.", working: "limitation", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Use to explain attitudes; always link back to textual evidence.", working: "usage", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear link.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) time period (b) explains attitudes (c) illuminates not replaces (d) link to evidence",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Limitation clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Usage clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Context without textual analysis."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-poetry-evaluation",
      title: "Evaluating poems",
      skill: "Assess effectiveness of poetic techniques and overall quality.",
      lesson: {
        sections: [
          {
            heading: "Effectiveness criteria",
            body: "Does poem achieve its purpose? Are techniques effective? Does imagery resonate? Is structure purposeful?",
          },
          {
            heading: "Strengths and weaknesses",
            body: "Strengths: powerful imagery, innovative structure, emotional impact. Weaknesses: clichéd language, unclear meaning, forced rhyme.",
          },
          {
            heading: "Balanced judgement",
            body: "Weigh strengths against weaknesses — form overall opinion supported by evidence.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "Strengths+weaknesses+evidence=balanced judgement." },
        ],
        workedExample: {
          problem: "Evaluate a poem with strong imagery but forced rhyme.",
          solution: "Strength: vivid imagery creates emotional impact. Weakness: forced rhyme distracts. Overall: imagery compensates for technical weakness.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a poem effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Powerful imagery and purpose" },
              { id: "b", text: "Long length" },
              { id: "c", text: "Complex words" },
              { id: "d", text: "Perfect rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Effectiveness", statement: "Achieves purpose through effective techniques." },
            ],
            steps: [
              { reasoning: "Imagery+purpose=effective.", working: "imagery", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Powerful imagery and purpose",
            commonErrors: ["Choosing (d) — rhyme alone doesn't make effective."],
          },
        },
        {
          id: "cie-ol-fl-pe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two weaknesses in poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Weaknesses", statement: "Clichéd language, unclear meaning, forced rhyme." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Clichéd language, unclear meaning, forced rhyme, weak imagery (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-fl-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to write a balanced evaluation of a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced evaluation", statement: "Strengths+weaknesses+evidence=judgement." },
            ],
            steps: [
              { reasoning: "Identify strengths with examples.", working: "strengths", marks: 1, markCode: "AO2" },
              { reasoning: "Identify weaknesses with examples.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Weigh both for overall judgement.", working: "judgement", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strengths+weaknesses+evidence=balanced judgement.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "cie-ol-fl-pe-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Poetry evaluation.",
          parts: [
            { label: "a", prompt: "What makes poem effective?", marks: 1 },
            { label: "b", prompt: "Name weaknesses.", marks: 2 },
            { label: "c", prompt: "How to write balanced evaluation?", marks: 3 },
            { label: "d", prompt: "What evidence to use?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Effectiveness, weaknesses, balance, evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Powerful imagery, purpose, effective techniques.", working: "effective", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Clichéd language, unclear meaning, forced rhyme.", working: "weaknesses", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Two+ valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Strengths+weaknesses+evidence=judgement.", working: "balance", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Quote lines, reference techniques, explain impact.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) imagery+purpose (b) clichés/unclear/forced (c) strengths+weaknesses (d) quote+techniques+impact",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two weaknesses.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Balance clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Evidence clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Evaluation without evidence."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-poetry-notes-3",
      title: "Poetry response — revision notes",
      summary: "Comparison, context, evaluation.",
      sections: [
        {
          heading: "Poetry response",
          body: "Comparative: same aspect→both poems→compare. Context: illuminates not replaces. Evaluation: strengths+weaknesses+evidence.",
        },
      ],
    },
  ],
};
