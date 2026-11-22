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
              { id: "a", text: "Stated directly" },
              { id: "b", text: "Suggested but not stated" },
              { id: "c", text: "Literal meaning" },
              { id: "d", text: "Dictionary definition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Implicit", statement: "Suggested but not stated." },
            ],
            steps: [
              { reasoning: "Implicit = suggested.", working: "suggested", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Suggested but not stated",
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
    {
      id: "cie-ol-el-ac-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is implicit meaning?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "In a footnote" },
          { id: "b", text: "Written in bold" },
          { id: "c", text: "Stated clearly" },
          { id: "d", text: "Suggested but not stated directly" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Implicit", statement: "Suggested but not stated." },
        ],
        steps: [
          { reasoning: "Implicit = suggested, not stated.", working: "implicit", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Suggested but not stated directly",
        commonErrors: ["Confusing with explicit."],
      },
    },
    {
      id: "cie-ol-el-ac-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is subtext?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The author's name" },
          { id: "b", text: "Underlying meaning beneath the surface" },
          { id: "c", text: "The title" },
          { id: "d", text: "The main plot" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Subtext", statement: "Underlying meaning beneath surface." },
        ],
        steps: [
          { reasoning: "Subtext = underlying meaning.", working: "subtext", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Underlying meaning beneath the surface",
        commonErrors: ["Confusing with explicit text."],
      },
    },
    {
      id: "cie-ol-el-ac-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Which is an example of subtext?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Irony or sarcasm" },
          { id: "b", text: "Direct statement" },
          { id: "c", text: "A list" },
          { id: "d", text: "Statistics" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Subtext", statement: "Irony, sarcasm, understatement." },
        ],
        steps: [
          { reasoning: "Irony/sarcasm are subtext.", working: "irony", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Irony or sarcasm",
        commonErrors: ["Missing subtle meaning."],
      },
    },
    {
      id: "cie-ol-el-ac-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What does 'nuance' refer to in text analysis?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Obvious facts" },
          { id: "b", text: "The main idea" },
          { id: "c", text: "Subtle differences in meaning" },
          { id: "d", text: "The title" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Nuance", statement: "Subtle differences in meaning." },
        ],
        steps: [
          { reasoning: "Nuance = subtle differences.", working: "nuance", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Subtle differences in meaning",
        commonErrors: ["Missing subtle distinctions."],
      },
    },
    {
      id: "cie-ol-el-ac-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is explicit meaning?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Implied" },
          { id: "b", text: "Unclear" },
          { id: "c", text: "Stated directly and clearly" },
          { id: "d", text: "Hidden" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Explicit", statement: "Stated directly." },
        ],
        steps: [
          { reasoning: "Explicit = stated directly.", working: "explicit", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Stated directly and clearly",
        commonErrors: ["Confusing with implicit."],
      },
    },
    {
      id: "cie-ol-el-ac-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A passage has 6 explicit statements and 4 implicit meanings. How many total meaning types are present?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Meaning", statement: "Explicit and implicit." },
        ],
        steps: [
          { reasoning: "Two types: explicit and implicit.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Counting statements instead of types."],
      },
    },
    {
      id: "cie-ol-el-ac-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A text has 3 layers of meaning: explicit, implicit, subtext. An analyst identifies only 1 layer. How many layers are missed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Layers", statement: "Explicit, implicit, subtext." },
        ],
        steps: [
          { reasoning: "3 layers; 1 identified.", working: "3 - 1 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Missing implicit and subtext."],
      },
    },
    {
      id: "cie-ol-el-ac-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A passage uses 5 figurative devices. An analyst identifies 3. How many devices are unidentified?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Devices", statement: "Identify all devices." },
        ],
        steps: [
          { reasoning: "5 devices; 3 identified.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two devices unidentified.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Missing subtle devices."],
      },
    },
    {
      id: "cie-ol-el-ac-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A reading task requires analysis of 4 text features. An analyst covers 3. How many features are unanalyzed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Analysis", statement: "Cover all required features." },
        ],
        steps: [
          { reasoning: "4 features; 3 covered.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One feature unanalyzed.", working: "1", marks: 2, markCode: "AO3" },
          { reasoning: "Incomplete analysis loses marks.", working: "marks", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "1",
        commonErrors: ["Incomplete analysis."],
      },
    },
    {
      id: "cie-ol-el-ac-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the difference between explicit and implicit meaning.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Explicit vs implicit", statement: "Stated vs suggested." },
        ],
        steps: [
          { reasoning: "Explicit: stated directly and clearly.", working: "explicit", marks: 1, markCode: "AO2" },
          { reasoning: "Implicit: suggested but not stated.", working: "implicit", marks: 1, markCode: "AO2" },
          { reasoning: "Clear distinction made.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Explicit=stated; implicit=suggested.",
        commonErrors: ["Confusing the two."],
      },
    },
    {
      id: "cie-ol-el-ac-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to identify subtext in a text.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Subtext", statement: "Irony, sarcasm, understatement, context." },
        ],
        steps: [
          { reasoning: "Look for irony, sarcasm, understatement.", working: "irony", marks: 1, markCode: "AO2" },
          { reasoning: "Consider context and speaker intent.", working: "context", marks: 1, markCode: "AO2" },
          { reasoning: "Ask what is meant vs what is said.", working: "meant", marks: 1, markCode: "AO2" },
          { reasoning: "Clear method explained.", working: "method", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Look for irony/sarcasm/understatement; consider context.",
        commonErrors: ["Missing subtle meaning."],
      },
    },
    {
      id: "cie-ol-el-ac-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about advanced comprehension.",
      parts: [
        { label: "a", prompt: "Define explicit meaning.", marks: 2 },
        { label: "b", prompt: "Define implicit meaning.", marks: 2 },
        { label: "c", prompt: "What is subtext?", marks: 2 },
        { label: "d", prompt: "What is nuance?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Advanced comp", statement: "Explicit, implicit, subtext, nuance." },
        ],
        steps: [
          { part: "a", reasoning: "Stated directly and clearly.", working: "explicit", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Suggested but not stated.", working: "implicit", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Underlying meaning beneath surface.", working: "subtext", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Subtle differences in meaning.", working: "nuance", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) stated (b) suggested (c) underlying (d) subtle differences",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Confusing explicit and implicit."],
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
              { id: "a", text: "First sentence only" },
              { id: "b", text: "Main idea of paragraph" },
              { id: "c", text: "Last sentence" },
              { id: "d", text: "Question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "States main idea of paragraph." },
            ],
            steps: [
              { reasoning: "Topic sentence = main idea.", working: "main idea", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Main idea of paragraph",
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
    {
      id: "cie-ol-el-ta-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a topic sentence?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Ends the paragraph" },
          { id: "b", text: "Is optional" },
          { id: "c", text: "States the main idea of a paragraph" },
          { id: "d", text: "Is always first" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Topic sentence", statement: "States main idea of paragraph." },
        ],
        steps: [
          { reasoning: "Topic sentence = main idea.", working: "topic", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** States the main idea of a paragraph",
        commonErrors: ["Confusing with supporting sentence."],
      },
    },
    {
      id: "cie-ol-el-ta-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is chronological organisation?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Organised by space" },
          { id: "b", text: "Organised by time order" },
          { id: "c", text: "Organised by theme" },
          { id: "d", text: "Random order" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Organisation", statement: "Chronological, spatial, thematic." },
        ],
        steps: [
          { reasoning: "Chronological = time order.", working: "chronological", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Organised by time order",
        commonErrors: ["Confusing with other organisations."],
      },
    },
    {
      id: "cie-ol-el-ta-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is cohesion in a text?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The font" },
          { id: "b", text: "The length" },
          { id: "c", text: "The title" },
          { id: "d", text: "How parts connect — pronouns, conjunctions, transitions" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Cohesion", statement: "Pronouns, conjunctions, keywords, transitions." },
        ],
        steps: [
          { reasoning: "Cohesion = how parts connect.", working: "cohesion", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** How parts connect — pronouns, conjunctions, transitions",
        commonErrors: ["Missing connections between parts."],
      },
    },
    {
      id: "cie-ol-el-ta-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is an example of thematic organisation?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Random order" },
          { id: "b", text: "Time order" },
          { id: "c", text: "Grouping by topic or idea" },
          { id: "d", text: "Space order" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Organisation", statement: "Thematic = by topic/idea." },
        ],
        steps: [
          { reasoning: "Thematic = grouped by topic.", working: "thematic", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Grouping by topic or idea",
        commonErrors: ["Confusing with chronological."],
      },
    },
    {
      id: "cie-ol-el-ta-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the typical structure of a paragraph?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only examples" },
          { id: "b", text: "Random sentences" },
          { id: "c", text: "Only one sentence" },
          { id: "d", text: "Topic sentence → support → conclusion" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Paragraph", statement: "Topic→support→conclusion." },
        ],
        steps: [
          { reasoning: "Paragraph = topic→support→conclusion.", working: "paragraph", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Topic sentence → support → conclusion",
        commonErrors: ["Random organisation."],
      },
    },
    {
      id: "cie-ol-el-ta-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A text has 8 paragraphs. An analyst analyses only 5. How many paragraphs are unanalyzed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 3 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Analysis", statement: "Analyse all paragraphs." },
        ],
        steps: [
          { reasoning: "8 - 5 = 3 unanalyzed.", working: "8 - 5 = 3", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "3",
        commonErrors: ["Incomplete analysis."],
      },
    },
    {
      id: "cie-ol-el-ta-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A text uses 4 organisation types. An analyst identifies only 2. How many types are unidentified?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Organisation", statement: "Chronological, spatial, thematic, problem-solution." },
        ],
        steps: [
          { reasoning: "4 types; 2 identified.", working: "4 - 2 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Missing organisation types."],
      },
    },
    {
      id: "cie-ol-el-ta-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A paragraph has 5 sentences. A topic sentence is missing. How many sentences serve as support/conclusion?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Paragraph", statement: "Topic→support→conclusion." },
        ],
        steps: [
          { reasoning: "All 5 sentences are support/conclusion.", working: "5", marks: 1, markCode: "AO2" },
          { reasoning: "Five non-topic sentences.", working: "5", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "5",
        commonErrors: ["Not realising topic sentence is separate."],
      },
    },
    {
      id: "cie-ol-el-ta-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A text analysis task requires 4 elements: structure, organisation, cohesion, language. An analyst covers 3. How many elements are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Analysis", statement: "Cover all required elements." },
        ],
        steps: [
          { reasoning: "4 elements; 3 covered.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One element missing.", working: "1", marks: 2, markCode: "AO3" },
          { reasoning: "Incomplete analysis loses marks.", working: "marks", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "1",
        commonErrors: ["Incomplete analysis."],
      },
    },
    {
      id: "cie-ol-el-ta-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the typical structure of a paragraph.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Paragraph", statement: "Topic→support→conclusion." },
        ],
        steps: [
          { reasoning: "Topic sentence states main idea.", working: "topic", marks: 1, markCode: "AO2" },
          { reasoning: "Supporting sentences provide evidence/details.", working: "support", marks: 1, markCode: "AO2" },
          { reasoning: "Concluding sentence wraps up.", working: "conclusion", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Topic sentence→support→conclusion.",
        commonErrors: ["Missing topic sentence."],
      },
    },
    {
      id: "cie-ol-el-ta-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain the difference between chronological and thematic organisation.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Organisation", statement: "Chronological=time; thematic=topic." },
        ],
        steps: [
          { reasoning: "Chronological: organised by time order.", working: "chronological", marks: 1, markCode: "AO2" },
          { reasoning: "Thematic: organised by topic or idea.", working: "thematic", marks: 1, markCode: "AO2" },
          { reasoning: "Chronological suits narratives; thematic suits essays.", working: "suits", marks: 1, markCode: "AO2" },
          { reasoning: "Clear distinction made.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Chronological=time order; thematic=topic grouping.",
        commonErrors: ["Confusing the two."],
      },
    },
    {
      id: "cie-ol-el-ta-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about text structure.",
      parts: [
        { label: "a", prompt: "What is a topic sentence?", marks: 2 },
        { label: "b", prompt: "Name two organisation types.", marks: 2 },
        { label: "c", prompt: "What is cohesion?", marks: 2 },
        { label: "d", prompt: "What is paragraph structure?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Structure", statement: "Topic, organisation, cohesion, paragraph." },
        ],
        steps: [
          { part: "a", reasoning: "States main idea of paragraph.", working: "topic", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Chronological, spatial, thematic, problem-solution.", working: "organisation", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid types.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "How parts connect — pronouns, conjunctions.", working: "cohesion", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Topic→support→conclusion.", working: "paragraph", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Correct structure.", working: "correct", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) main idea (b) chronological/thematic (c) connections (d) topic→support→conclusion",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two types.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Missing topic sentence."],
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
              { id: "a", text: "Only author" },
              { id: "b", text: "Only title" },
              { id: "c", text: "Purpose, audience, tone" },
              { id: "d", text: "Only length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison", statement: "Purpose, audience, tone, language, structure." },
            ],
            steps: [
              { reasoning: "Purpose, audience, tone.", working: "elements", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Purpose, audience, tone",
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
    {
      id: "cie-ol-el-u7comp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you compare when analysing two texts?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only title" },
          { id: "b", text: "Purpose, audience, tone, language, structure" },
          { id: "c", text: "Only author" },
          { id: "d", text: "Only length" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Comparison", statement: "Purpose, audience, tone, language, structure." },
        ],
        steps: [
          { reasoning: "Compare multiple features.", working: "features", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Purpose, audience, tone, language, structure",
        commonErrors: ["Comparing only one aspect."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What are similarities in text comparison?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only differences" },
          { id: "b", text: "Only length" },
          { id: "c", text: "Shared purpose, tone, techniques, structure" },
          { id: "d", text: "Only title" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Similarities", statement: "Shared purpose, tone, techniques." },
        ],
        steps: [
          { reasoning: "Similarities = shared features.", working: "similarities", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Shared purpose, tone, techniques, structure",
        commonErrors: ["Finding only differences."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What are differences in text comparison?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only length" },
          { id: "b", text: "Only similarities" },
          { id: "c", text: "Only title" },
          { id: "d", text: "Distinct purpose, audience, tone, language, structure" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Differences", statement: "Distinct features." },
        ],
        steps: [
          { reasoning: "Differences = distinct features.", working: "differences", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** Distinct purpose, audience, tone, language, structure",
        commonErrors: ["Finding only similarities."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Why compare texts?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "To find which is longer" },
          { id: "b", text: "It is pointless" },
          { id: "c", text: "To understand similarities, differences, and effects" },
          { id: "d", text: "To choose one" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Purpose", statement: "Understand similarities and differences." },
        ],
        steps: [
          { reasoning: "Comparison reveals similarities/differences.", working: "purpose", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** To understand similarities, differences, and effects",
        commonErrors: ["Comparing only length."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you identify in both texts before comparing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only author" },
          { id: "b", text: "Only length" },
          { id: "c", text: "Purpose, audience, tone, language, structure" },
          { id: "d", text: "Only title" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Features", statement: "Identify key features first." },
        ],
        steps: [
          { reasoning: "Identify features before comparing.", working: "features", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Purpose, audience, tone, language, structure",
        commonErrors: ["Comparing without identifying features."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Two texts are compared. A student identifies 4 comparison points. If 3 are covered, how many points remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Points", statement: "Cover all comparison points." },
        ],
        steps: [
          { reasoning: "4 - 3 = 1 point remaining.", working: "4 - 3 = 1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Incomplete comparison."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A comparison task requires analysis of 6 features. A student covers 4. How many features are unanalyzed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Features", statement: "Cover all required features." },
        ],
        steps: [
          { reasoning: "6 - 4 = 2 unanalyzed.", working: "6 - 4 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Incomplete analysis."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Two texts each have 5 paragraphs. A student analyses only 3 paragraphs per text. How many paragraphs total are unanalyzed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 4 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Analysis", statement: "Analyse all paragraphs." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 per text; 2 x 2 = 4 total.", working: "(5 - 3) x 2 = 4", marks: 1, markCode: "AO3" },
          { reasoning: "Four paragraphs unanalyzed total.", working: "4", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "4",
        commonErrors: ["Not multiplying by two texts."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A comparison essay must be between 400 and 450 words. A draft is 440 words, and the student adds a 20-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "440 + 20 = 460 words after introduction.", working: "440 + 20 = 460", marks: 1, markCode: "AO3" },
          { reasoning: "460 - 450 = 10 words over.", working: "460 - 450 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain what features to compare when analysing two texts.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Comparison", statement: "Purpose, audience, tone, language, structure." },
        ],
        steps: [
          { reasoning: "Compare purpose and audience.", working: "purpose", marks: 1, markCode: "AO2" },
          { reasoning: "Compare tone and language.", working: "tone", marks: 1, markCode: "AO2" },
          { reasoning: "Compare structure and techniques.", working: "structure", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Purpose, audience, tone, language, structure, techniques.",
        commonErrors: ["Comparing only one aspect."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to identify similarities and differences between two texts.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Comparison", statement: "Identify shared and distinct features." },
        ],
        steps: [
          { reasoning: "Identify shared features — similarities.", working: "similarities", marks: 1, markCode: "AO2" },
          { reasoning: "Identify distinct features — differences.", working: "differences", marks: 1, markCode: "AO2" },
          { reasoning: "Compare purpose, tone, language, structure.", working: "compare", marks: 1, markCode: "AO2" },
          { reasoning: "Clear method explained.", working: "method", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Identify shared features (similarities) and distinct features (differences).",
        commonErrors: ["Finding only one type."],
      },
    },
    {
      id: "cie-ol-el-u7comp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about comparing texts.",
      parts: [
        { label: "a", prompt: "What features to compare?", marks: 2 },
        { label: "b", prompt: "What are similarities?", marks: 2 },
        { label: "c", prompt: "What are differences?", marks: 2 },
        { label: "d", prompt: "Why compare texts?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Comparison", statement: "Features, similarities, differences, purpose." },
        ],
        steps: [
          { part: "a", reasoning: "Purpose, audience, tone, language, structure.", working: "features", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Multiple features.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Shared purpose, tone, techniques.", working: "similarities", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Distinct purpose, audience, tone.", working: "differences", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Understand similarities, differences, effects.", working: "purpose", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) multiple features (b) shared features (c) distinct features (d) understand differences",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Multiple features.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Comparing only length."],
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
              { id: "b", text: "No opinion" },
              { id: "c", text: "Factual report" },
              { id: "d", text: "Complete truth" },
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
    {
      id: "cie-ol-el-cr-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is bias in a text?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Neutral tone" },
          { id: "b", text: "Balanced view" },
          { id: "c", text: "Objective facts" },
          { id: "d", text: "One-sided perspective favouring one view" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Bias", statement: "One-sided perspective." },
        ],
        steps: [
          { reasoning: "Bias = one-sided view.", working: "bias", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** One-sided perspective favouring one view",
        commonErrors: ["Confusing bias with balance."],
      },
    },
    {
      id: "cie-ol-el-cr-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is a sign of bias?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Neutral facts" },
          { id: "b", text: "Loaded language" },
          { id: "c", text: "Multiple sources" },
          { id: "d", text: "Balanced view" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Bias signs", statement: "Loaded language, selective facts, emotional appeals." },
        ],
        steps: [
          { reasoning: "Loaded language signals bias.", working: "loaded", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Loaded language",
        commonErrors: ["Missing bias indicators."],
      },
    },
    {
      id: "cie-ol-el-cr-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What should you check to assess reliability?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only length" },
          { id: "b", text: "Only author" },
          { id: "c", text: "Sources, evidence quality, logical consistency" },
          { id: "d", text: "Only title" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Reliability", statement: "Sources, evidence, consistency, conflicts." },
        ],
        steps: [
          { reasoning: "Check sources and evidence.", working: "sources", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** Sources, evidence quality, logical consistency",
        commonErrors: ["Accepting unverified claims."],
      },
    },
    {
      id: "cie-ol-el-cr-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is the purpose of critical reading?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Copy text" },
          { id: "b", text: "Evaluate texts — bias, purpose, reliability" },
          { id: "c", text: "Memorise text" },
          { id: "d", text: "Ignore meaning" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Critical reading", statement: "Evaluate bias, purpose, reliability." },
        ],
        steps: [
          { reasoning: "Critical reading = evaluation.", working: "evaluate", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** Evaluate texts — bias, purpose, reliability",
        commonErrors: ["Passive reading only."],
      },
    },
    {
      id: "cie-ol-el-cr-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does 'purpose analysis' involve?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Finding title" },
          { id: "b", text: "Identifying why the text was written" },
          { id: "c", text: "Checking spelling" },
          { id: "d", text: "Counting words" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Purpose", statement: "Why the text was written." },
        ],
        steps: [
          { reasoning: "Purpose = why written.", working: "purpose", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Identifying why the text was written",
        commonErrors: ["Missing writer's agenda."],
      },
    },
    {
      id: "cie-ol-el-cr-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A text has 5 sources cited. An evaluator checks only 3. How many sources remain unchecked?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Reliability", statement: "Check all sources." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 sources unchecked.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Incomplete source checking."],
      },
    },
    {
      id: "cie-ol-el-cr-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A text uses 6 biased phrases. An analyst identifies 4. How many biased phrases are missed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Bias", statement: "Identify all biased language." },
        ],
        steps: [
          { reasoning: "6 - 4 = 2 missed.", working: "6 - 4 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Missing subtle bias."],
      },
    },
    {
      id: "cie-ol-el-cr-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A critical reading task requires analysis of 4 aspects: bias, purpose, reliability, evidence. An analyst covers 3. How many aspects are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Critical reading", statement: "Cover all aspects." },
        ],
        steps: [
          { reasoning: "4 aspects; 3 covered.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One aspect missing.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Incomplete evaluation."],
      },
    },
    {
      id: "cie-ol-el-cr-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A reading essay must be between 300 and 350 words. A draft is 340 words, and the student adds a 15-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "340 + 15 = 355 words after introduction.", working: "340 + 15 = 355", marks: 1, markCode: "AO3" },
          { reasoning: "355 - 350 = 5 words over.", working: "355 - 350 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words.", working: "5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-cr-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how to detect bias in a text.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Bias", statement: "Loaded language, selective facts, emotional appeals." },
        ],
        steps: [
          { reasoning: "Look for loaded/emotional language.", working: "loaded", marks: 1, markCode: "AO2" },
          { reasoning: "Check for selective facts — one side only.", working: "selective", marks: 1, markCode: "AO2" },
          { reasoning: "Identify emotional appeals vs evidence.", working: "emotional", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Loaded language, selective facts, emotional appeals.",
        commonErrors: ["Missing subtle bias."],
      },
    },
    {
      id: "cie-ol-el-cr-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to assess the reliability of a text.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Reliability", statement: "Sources, evidence, consistency, conflicts." },
        ],
        steps: [
          { reasoning: "Check sources — credible and verifiable.", working: "sources", marks: 1, markCode: "AO2" },
          { reasoning: "Evaluate evidence quality — sufficient and relevant.", working: "evidence", marks: 1, markCode: "AO2" },
          { reasoning: "Check logical consistency and conflicts of interest.", working: "consistency", marks: 1, markCode: "AO2" },
          { reasoning: "Clear assessment method.", working: "method", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Check sources, evidence, consistency, conflicts of interest.",
        commonErrors: ["Accepting unverified claims."],
      },
    },
    {
      id: "cie-ol-el-cr-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about critical reading.",
      parts: [
        { label: "a", prompt: "What is bias?", marks: 2 },
        { label: "b", prompt: "Name two bias signs.", marks: 2 },
        { label: "c", prompt: "What is reliability?", marks: 2 },
        { label: "d", prompt: "How to assess purpose?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Critical reading", statement: "Bias, reliability, purpose." },
        ],
        steps: [
          { part: "a", reasoning: "One-sided perspective.", working: "bias", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Loaded language, selective facts, emotional appeals.", working: "signs", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid signs.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Trustworthiness — sources, evidence, consistency.", working: "reliability", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Identify why text was written — agenda.", working: "purpose", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) one-sided (b) loaded/selective (c) trustworthy (d) identify agenda",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two signs.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Missing bias indicators."],
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
