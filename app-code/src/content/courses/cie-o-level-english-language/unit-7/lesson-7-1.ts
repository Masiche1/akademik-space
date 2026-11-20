import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cie-ol-el-lesson-7-1",
  code: "7-1",
  title: "Advanced comprehension strategies",
  goal: "I CAN analyse complex texts and answer sophisticated questions.",
  standards: ["1123 Reading: advanced"],
  vocabulary: [
    { term: "Implicit meaning", definition: "What is suggested but not stated." },
    { term: "Explicit meaning", definition: "What is stated directly." },
    { term: "Subtext", definition: "Underlying meaning beneath surface." },
    { term: "Nuance", definition: "Subtle difference in meaning." },
    { term: "Context", definition: "Surrounding information shaping meaning." },
    { term: "Inference chain", definition: "Multiple steps of reasoning from text." },
  ],
  concepts: [
    {
      id: "cie-ol-el-advanced-comp",
      title: "Advanced comprehension",
      skill: "Identify implicit meaning, subtext and nuanced ideas.",
      lesson: {
        sections: [
          {
            heading: "Explicit vs implicit",
            body: "Explicit: stated directly. Implicit: suggested through context, word choice, implications. Most exam questions test implicit understanding.",
          },
          {
            heading: "Subtext",
            body: "What characters/speakers mean vs what they say. Look for irony, sarcasm, understatement, double meanings.",
          },
          {
            heading: "Nuance",
            body: "Subtle shades of meaning — 'thin' vs 'slim' vs 'skinny'. Precise word choice reveals writer's attitude.",
          },
        ],
        keyFormulas: [
          { name: "Advanced comp", statement: "Explicit=stated; implicit=suggested; subtext=underlying meaning; nuance=subtle differences." },
        ],
        workedExample: {
          problem: "'He said he was fine.' — what does this suggest?",
          solution: "Implicit: 'said' + 'fine' together suggest he may not be fine — context and tone reveal subtext.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'implicit meaning'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Suggested but not stated" },
              { id: "b", text: "Stated directly" },
              { id: "c", text: "Literal meaning" },
              { id: "d", text: "Dictionary definition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Implicit", statement: "Suggested but not stated." },
            ],
            steps: [
              { reasoning: "Implicit = suggested.", working: "suggested", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Suggested but not stated",
            commonErrors: ["Choosing (b) — that's explicit."],
          },
        },
        {
          id: "cie-ol-el-ac-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'subtext'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "Underlying meaning beneath surface — what is meant vs said." },
            ],
            steps: [
              { reasoning: "Underlying meaning beneath surface.", working: "underlying", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Underlying meaning beneath surface — meant vs said.",
            commonErrors: ["Confusing with explicit — it's implied."],
          },
        },
        {
          id: "cie-ol-el-ac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to identify subtext in dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtext", statement: "Look for irony, sarcasm, understatement, context clues." },
            ],
            steps: [
              { reasoning: "Check for irony/sarcasm — saying opposite of meaning.", working: "irony", marks: 1, markCode: "AO2" },
              { reasoning: "Look for understatement or exaggeration.", working: "understatement", marks: 1, markCode: "AO2" },
              { reasoning: "Consider context — what is really being communicated?", working: "context", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Irony, sarcasm, understatement, context reveal subtext.",
            commonErrors: ["Taking dialogue literally — subtext is implied."],
          },
        },
        {
          id: "cie-ol-el-ac-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply advanced comprehension skills.",
          parts: [
            { label: "a", prompt: "Define implicit meaning.", marks: 1 },
            { label: "b", prompt: "Define subtext.", marks: 2 },
            { label: "c", prompt: "How to identify subtext?", marks: 3 },
            { label: "d", prompt: "What is nuance?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Advanced comp", statement: "Implicit, subtext, nuance." },
            ],
            steps: [
              { part: "a", reasoning: "Suggested but not stated.", working: "implicit", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Underlying meaning beneath surface — meant vs said.", working: "subtext", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Irony, sarcasm, understatement, context clues.", working: "identify", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple techniques.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Subtle differences in meaning — precise word choice.", working: "nuance", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Examples help.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) suggested (b) underlying meaning (c) irony/context (d) subtle differences",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Techniques clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Nuance explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Taking text literally — missing subtext."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-text-analysis",
      title: "Text structure and organisation",
      skill: "Analyse how texts are organised for effect.",
      lesson: {
        sections: [
          {
            heading: "Paragraph structure",
            body: "Topic sentence → supporting sentences → concluding sentence. Each paragraph develops one idea.",
          },
          {
            heading: "Text organisation",
            body: "Chronological, spatial, thematic, problem-solution, cause-effect. Organisation affects clarity and persuasion.",
          },
          {
            heading: "Cohesion",
            body: "How parts connect — pronouns, conjunctions, repeated keywords, transitional phrases. Creates flow.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Paragraph: topic→support→conclusion; organisation: chronological/spatial/thematic; cohesion connects." },
        ],
        workedExample: {
          problem: "How does text organisation affect meaning?",
          solution: "Chronological creates narrative flow; problem-solution creates persuasive structure; thematic groups related ideas.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ta-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'topic sentence'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main idea of paragraph" },
              { id: "b", text: "First sentence only" },
              { id: "c", text: "Last sentence" },
              { id: "d", text: "Question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "States main idea of paragraph." },
            ],
            steps: [
              { reasoning: "Topic sentence = main idea.", working: "main idea", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main idea of paragraph",
            commonErrors: ["Choosing (b) — not always first."],
          },
        },
        {
          id: "cie-ol-el-ta-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two text organisation types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Organisation", statement: "Chronological, spatial, thematic, problem-solution, cause-effect." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Chronological, spatial, thematic, problem-solution, cause-effect (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-ta-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is 'cohesion' in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion", statement: "How parts connect — pronouns, conjunctions, keywords, transitions." },
            ],
            steps: [
              { reasoning: "Pronouns and conjunctions link ideas.", working: "pronouns", marks: 1, markCode: "AO2" },
              { reasoning: "Repeated keywords create unity.", working: "keywords", marks: 1, markCode: "AO2" },
              { reasoning: "Transitional phrases guide reader.", working: "transitions", marks: 1, markCode: "AO2" },
              { reasoning: "Cohesion explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Pronouns, conjunctions, keywords, transitions connect parts.",
            commonErrors: ["Thinking cohesion is just grammar — it's about connection."],
          },
        },
        {
          id: "cie-ol-el-ta-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse text structure.",
          parts: [
            { label: "a", prompt: "Define topic sentence.", marks: 1 },
            { label: "b", prompt: "Name organisation types.", marks: 3 },
            { label: "c", prompt: "What is cohesion?", marks: 2 },
            { label: "d", prompt: "How organisation affects meaning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure", statement: "Topic sentences, organisation, cohesion." },
            ],
            steps: [
              { part: "a", reasoning: "States main idea of paragraph.", working: "topic", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Chronological, spatial, thematic, problem-solution, cause-effect.", working: "types", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "How parts connect — pronouns, conjunctions, keywords, transitions.", working: "cohesion", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Organisation affects clarity, flow, persuasive impact.", working: "effect", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) topic sentence (b) organisation types (c) cohesion=connection (d) affects clarity/flow",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple types.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring organisation — affects clarity."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-comparison",
      title: "Comparing texts",
      skill: "Compare and contrast different texts effectively.",
      lesson: {
        sections: [
          {
            heading: "Comparison points",
            body: "Purpose, audience, tone, language features, structure, techniques — compare across texts.",
          },
          {
            heading: "Similarities",
            body: "Identify shared features — same purpose, similar tone, comparable techniques.",
          },
          {
            heading: "Differences",
            body: "Identify contrasting features — different purpose, tone, language, approach.",
          },
        ],
        keyFormulas: [
          { name: "Comparison", statement: "Compare purpose/audience/tone/language/structure/techniques; identify similarities+differences." },
        ],
        workedExample: {
          problem: "Compare two newspaper articles on same event.",
          solution: "Check: same facts? Different emphasis? Different tone? Different sources? Different conclusions?",
        },
      },
      questions: [
        {
          id: "cie-ol-el-u7comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you compare when analysing texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Purpose, audience, tone" },
              { id: "b", text: "Only length" },
              { id: "c", text: "Only title" },
              { id: "d", text: "Only author" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison", statement: "Purpose, audience, tone, language, structure." },
            ],
            steps: [
              { reasoning: "Purpose, audience, tone.", working: "elements", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Purpose, audience, tone",
            commonErrors: ["Only surface features — need deeper analysis."],
          },
        },
        {
          id: "cie-ol-el-u7comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two comparison points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Points", statement: "Purpose, audience, tone, language, structure, techniques." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "points", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose, audience, tone, language, structure, techniques (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-u7comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to identify similarities between texts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Similarities", statement: "Shared purpose, tone, techniques, structure, language features." },
            ],
            steps: [
              { reasoning: "Check for shared purpose — both inform/persuade.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Compare tone — both formal/informal.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Compare techniques — both use statistics/rhetorical questions.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Similarities identified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shared purpose, tone, techniques, structure.",
            commonErrors: ["Only comparing content — need features."],
          },
        },
        {
          id: "cie-ol-el-u7comp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare and contrast texts.",
          parts: [
            { label: "a", prompt: "What to compare?", marks: 2 },
            { label: "b", prompt: "Name comparison points.", marks: 3 },
            { label: "c", prompt: "How to identify similarities?", marks: 2 },
            { label: "d", prompt: "How to identify differences?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison", statement: "Purpose, audience, tone, language, structure, techniques." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose, audience, tone, language, structure, techniques.", working: "compare", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Multiple elements.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Purpose, audience, tone, language, structure, techniques.", working: "points", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Shared purpose, tone, techniques, structure.", working: "similarities", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Different purpose, tone, language, approach, conclusions.", working: "differences", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) elements (b) comparison points (c) similarities (d) differences",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Multiple elements.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple points.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple differences.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Only noting similarities — need differences too."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-critical-reading",
      title: "Critical reading skills",
      skill: "Evaluate texts critically — bias, purpose, reliability.",
      lesson: {
        sections: [
          {
            heading: "Bias detection",
            body: "Look for: loaded language, selective facts, one-sided presentation, emotional appeals, missing counterarguments.",
          },
          {
            heading: "Purpose analysis",
            body: "Why was this written? To inform, persuade, entertain, sell? Who benefits? What is the agenda?",
          },
          {
            heading: "Reliability assessment",
            body: "Check sources, evidence quality, logical consistency, potential conflicts of interest.",
          },
        ],
        keyFormulas: [
          { name: "Critical reading", statement: "Bias: loaded language/selective facts; purpose: agenda; reliability: sources/evidence." },
        ],
        workedExample: {
          problem: "How to evaluate a news article?",
          solution: "Check: sources (balanced?), language (loaded?), omissions (what's missing?), purpose (inform or persuade?), evidence quality.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One-sided perspective" },
              { id: "b", text: "Complete truth" },
              { id: "c", text: "No opinion" },
              { id: "d", text: "Factual report" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bias", statement: "One-sided perspective favouring one view." },
            ],
            steps: [
              { reasoning: "Bias = one-sided.", working: "one-sided", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** One-sided perspective",
            commonErrors: ["Choosing (c) — all texts have perspective."],
          },
        },
        {
          id: "cie-ol-el-cr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two signs of bias.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Bias signs", statement: "Loaded language, selective facts, emotional appeals." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "signs", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Loaded language, selective facts, emotional appeals, one-sided (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-cr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to assess reliability of a text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reliability", statement: "Check sources, evidence quality, logical consistency, conflicts of interest." },
            ],
            steps: [
              { reasoning: "Check sources — are they credible?", working: "sources", marks: 1, markCode: "AO2" },
              { reasoning: "Check evidence quality — statistics, examples, logic.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Check logical consistency and conflicts of interest.", working: "consistency", marks: 1, markCode: "AO2" },
              { reasoning: "Assessment clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sources+evidence quality+logical consistency+conflicts of interest.",
            commonErrors: ["Accepting at face value — must evaluate."],
          },
        },
        {
          id: "cie-ol-el-cr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply critical reading skills.",
          parts: [
            { label: "a", prompt: "Define bias.", marks: 1 },
            { label: "b", prompt: "Name bias signs.", marks: 2 },
            { label: "c", prompt: "How to assess reliability?", marks: 3 },
            { label: "d", prompt: "How to analyse purpose?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical reading", statement: "Bias, reliability, purpose." },
            ],
            steps: [
              { part: "a", reasoning: "One-sided perspective favouring one view.", working: "bias", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Loaded language, selective facts, emotional appeals.", working: "signs", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Sources, evidence quality, logical consistency, conflicts.", working: "reliability", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Why written? Inform/persuade/entertain? Who benefits? Agenda?", working: "purpose", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple questions.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) one-sided (b) bias signs (c) reliability checks (d) purpose analysis",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple signs.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Checks clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Purpose questions.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Accepting text at face value — must be critical."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit7-notes",
      title: "Unit 7 — revision notes",
      summary: "Advanced comprehension, text structure, comparison, critical reading.",
      sections: [
        {
          heading: "Reading skills",
          body: "Advanced: implicit meaning, subtext, nuance. Structure: topic sentences, organisation, cohesion. Compare texts: purpose/audience/tone/language. Critical: bias, reliability, purpose.",
        },
      ],
    },
  ],
};
