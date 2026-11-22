import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const INFPROMPT: TextExtract = {
  title: "Writing Prompt: Explain How a Skill Works",
  author: "Written for Akademik Space",
  text: "Write an informative/explanatory essay that explains how something works. You might explain how a bicycle brake works, how a seed becomes a tree, how the water cycle operates, or how your favorite sport is played.\n\nOrganize your explanation clearly: define your topic, break it into steps or parts, and use examples to make abstract ideas concrete. Use precise vocabulary and explain technical terms.",
};

const WEAKEXPL: TextExtract = {
  title: "Student Draft: How a Bicycle Brake Works",
  author: "Written for Akademik Space",
  text: "A bicycle brake works by stopping the wheel. When you squeeze the brake lever, it pulls a cable that makes the brake pads squeeze the wheel. This creates friction which slows the wheel down. The brake is important for safety. There are two types of brakes: rim brakes and disc brakes. Rim brakes squeeze the wheel itself while disc brakes squeeze a disc attached to the wheel. Both use friction to stop. You should always check your brakes before riding.",
};

export const lesson62: Lesson = {
  id: "ela7-u6-lesson-6-2",
  code: "6-2",
  title: "Informative and Explanatory Writing",
  goal: "I CAN write an informative essay that explains a topic clearly using organization, precise vocabulary, and examples.",
  standards: [
    "W.7.2",
    "W.7.2a",
    "W.7.2b",
    "W.7.2c",
    "W.7.2d",
    "W.7.2e",
    "W.7.2f",
  ],
  vocabulary: [
    {
      term: "Informative writing",
      definition: "Writing that teaches the reader about a topic.",
    },
    {
      term: "Explanatory writing",
      definition: "Writing that explains how or why something happens.",
    },
    {
      term: "Definition",
      definition: "Explaining what a term or concept means in your own words.",
    },
    {
      term: "Classification",
      definition: "Organizing information into categories or types.",
    },
    {
      term: "Sequential order",
      definition: "Arranging steps in the order they happen.",
    },
    {
      term: "Compare and contrast",
      definition: "Showing similarities and differences between things.",
    },
  ],
  concepts: [
    {
      id: "ela7-u6-explain",
      title: "Organizing an explanation",
      skill:
        "Structure an informative essay with definition, organization, and clear explanation of parts.",
      lesson: {
        sections: [
          {
            heading: "Structure for explanation",
            body: "An explanatory essay needs a clear structure: **introduction** (define the topic and preview what you'll explain), **body** (explain parts/steps in logical order — sequential for processes, classification for types), **conclusion** (summarize the key points). The reader should be able to follow your explanation without prior knowledge.",
          },
          {
            heading: "Precision and examples",
            body: "Use **precise vocabulary** — 'friction' not ' rubbing'; 'calcium carbonate' not 'hard stuff'. Define technical terms the first time you use them. Use **examples** to make abstract ideas concrete: 'When you squeeze the brake lever, it pulls a cable...' is clearer than 'the brake works by applying force.'",
          },
        ],
        keyFormulas: [
          {
            name: "Explanatory structure",
            statement:
              "Define → organize into parts/steps → explain each → conclude.",
          },
          {
            name: "Order matters",
            statement:
              "Processes use sequential order; types use classification; comparisons use compare/contrast.",
          },
          {
            name: "Precision + examples",
            statement:
              "Technical terms defined + concrete examples = clear explanation.",
          },
        ],
        workedExample: {
          problem:
            "What organizational flaw does the bicycle brake draft have?",
          solution:
            "It mixes sequential and classification without clear structure — it describes how brakes work, then suddenly lists two types, then mentions safety. A stronger version would either explain the mechanism step-by-step (sequential) OR classify brake types (comparison), not both at once. The reader loses the thread.",
        },
      },
      questions: [
        {
          id: "ela7-u6-explain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFPROMPT,
          stem: "What is the main purpose of informative/explanatory writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To describe a personal experience" },
              { id: "b", text: "To argue for a position" },
              { id: "c", text: "To teach or explain a topic clearly" },
              { id: "d", text: "To entertain the reader" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informative writing",
                statement: "Teaching/explaining purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The prompt asks to 'explain how' — the purpose is to teach the reader, not argue or entertain.",
                evidence: "explains how something works",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Informative writing teaches and explains.",
            commonErrors: ["Confusing explanatory with argumentative writing."],
          },
        },
        {
          id: "ela7-u6-explain-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKEXPL,
          stem: "Identify the organizational problem in the bicycle brake draft and explain how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Organization",
                statement: "Choose one clear structure for your explanation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem: the draft mixes two structures — sequential (how brakes work) and classification (two types) — without clear transitions.",
                evidence:
                  "There are two types of brakes: rim brakes and disc brakes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix option 1: organize sequentially — explain the mechanism step-by-step, mentioning types only as examples.",
                evidence: "When you squeeze the brake lever, it pulls a cable",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix option 2: organize by classification — explain rim brakes fully, then disc brakes, comparing similarities and differences.",
                evidence:
                  "Rim brakes squeeze the wheel itself while disc brakes squeeze a disc",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The draft mixes sequential and classification structures. Fix by choosing one: either explain the mechanism step-by-step, or classify and compare brake types — not both.",
            commonErrors: [
              "Saying the draft is 'too short' — the issue is structural confusion, not length.",
            ],
          },
        },
        {
          id: "ela7-u6-explain-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFPROMPT,
          stem: "Write an outline for an explanatory essay about 'how a seed becomes a tree.' Include your introduction, three body paragraph topics in order, and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay outlining",
                statement: "Plan structure before writing.",
              },
              {
                kind: "skill",
                name: "Sequential organization",
                statement: "Processes need steps in order.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Introduction: define what a seed is and preview the growth process.",
                evidence: "define your topic",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body paragraph 1: germination — seed absorbs water, seed coat breaks, root emerges.",
                evidence: "break it into steps or parts",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body paragraph 2: seedling growth — shoot emerges, leaves develop, photosynthesis begins.",
                evidence: "Organize your explanation clearly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body paragraph 3: maturation — tree grows, flowers/fruits, becomes independent plant.",
                evidence: "use examples to make abstract ideas concrete",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Intro (define seed, preview growth) → P1 germination (water, coat breaks, root) → P2 seedling (shoot, leaves, photosynthesis) → P3 maturation (growth, flowers, independence) → Conclusion (summarize stages).",
            commonErrors: [
              "Listing topics without sequential order — germination must come before growth.",
              "Including opinion or argument — this is explanatory, not persuasive.",
            ],
          },
        },
        {
          id: "ela7-u6-explain-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKEXPL,
          parts: [
            {
              label: "a",
              prompt: "Identify one vague or imprecise phrase in the draft.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Rewrite it with precise vocabulary.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precision",
                statement: "Technical writing uses exact terms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Vague phrase: 'stopping the wheel' or 'creates friction which slows the wheel down.'",
                evidence: "This creates friction which slows the wheel down",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Precise rewrite: 'The brake pads press against the wheel rim, creating friction that converts kinetic energy into heat, gradually reducing the wheel's rotational speed.'",
                evidence:
                  "it pulls a cable that makes the brake pads squeeze the wheel",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Creates friction which slows the wheel down' is vague. (b) 'Brake pads press against the rim, converting kinetic energy to heat and reducing rotational speed' — precise and explanatory.",
            commonErrors: [
              "Choosing 'important for safety' as vague — it's true but not explanatory of mechanism.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u6-explain2",
      title: "Comparison and process explanation",
      skill:
        "Use compare/contrast and sequential structures to explain complex topics clearly.",
      lesson: {
        sections: [
          {
            heading: "Compare and contrast structure",
            body: "When explaining types or categories, use **compare and contrast**: identify similarities first, then differences. 'Both rim and disc brakes use friction, but rim brakes squeeze the wheel while disc brakes squeeze a separate disc.' This structure helps readers see what's shared and what's different — clearer than describing each separately.",
          },
          {
            heading: "Sequential explanation",
            body: "For processes, use **sequential order** with transition words: 'first,' 'then,' 'next,' 'finally.' Each step should build on the previous one. 'First, the seed absorbs water. Then the seed coat splits. Next, the root emerges...' This makes the explanation easy to follow and remember.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare/contrast",
            statement:
              "Similarities first, then differences — or point-by-point comparison.",
          },
          {
            name: "Sequential transitions",
            statement:
              "First, then, next, finally — signal the order of steps.",
          },
          {
            name: "One idea per paragraph",
            statement: "Each paragraph explains one part or step clearly.",
          },
        ],
        workedExample: {
          problem:
            "How would you explain the difference between evaporation and condensation using compare/contrast?",
          solution:
            "Both are water cycle processes involving water changing state. Evaporation is when liquid water becomes vapor (requires heat); condensation is when vapor becomes liquid (releases heat). Evaporation happens at the surface; condensation happens in the air. The key difference: evaporation absorbs energy, condensation releases it.",
        },
      },
      questions: [
        {
          id: "ela7-u6-explain2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INFPROMPT,
          stem: "Which organizational pattern best fits explaining 'how a bicycle brake works'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cause and effect" },
              { id: "b", text: "Chronological order" },
              { id: "c", text: "Sequential order (steps in process)" },
              { id: "d", text: "Problem and solution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sequential order",
                statement: "Steps in process order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A brake mechanism is a process — sequential order explains each step in the order it happens.",
                evidence: "how something works",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Processes need sequential order.",
            commonErrors: [
              "Choosing (a) — chronological is for history/events, not mechanisms.",
            ],
          },
        },
        {
          id: "ela7-u6-explain2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKEXPL,
          stem: "Rewrite the draft's description of rim vs disc brakes using a clear compare/contrast structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compare/contrast",
                statement: "Similarities first, then differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Similarity first: 'Both rim and disc brakes use friction to slow the wheel.'",
                evidence: "Both use friction to stop",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Difference: 'Rim brakes squeeze the wheel rim directly; disc brakes squeeze a separate rotor attached to the wheel.'",
                evidence:
                  "Rim brakes squeeze the wheel itself while disc brakes squeeze a disc",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Result: 'Both achieve the same goal — slowing the wheel — through different mechanisms.'",
                evidence: "attached to the wheel",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Both rim and disc brakes use friction to slow the wheel. Rim brakes squeeze the wheel rim directly, while disc brakes squeeze a separate rotor. Both achieve the same goal through different mechanisms.'",
            commonErrors: [
              "Describing each type separately without comparing — loses the contrast structure.",
            ],
          },
        },
        {
          id: "ela7-u6-explain2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INFPROMPT,
          stem: "Explain how you would use transitions to write a sequential explanation of 'how a school day works.' Include at least four transition words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transitions",
                statement: "Signal sequence and relationships between steps.",
              },
              {
                kind: "skill",
                name: "Process explanation",
                statement: "Each step builds on the previous.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Opening transition: 'First, students arrive at school and check in.'",
                evidence: "break it into steps or parts",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sequence transitions: 'Next, morning classes begin'; 'After lunch, students have electives.'",
                evidence: "Organize your explanation clearly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion transition: 'Finally, students go home and prepare for the next day.'",
                evidence: "use examples to make abstract ideas concrete",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Additional: 'Meanwhile' for parallel activities, 'As a result' for consequences.",
                evidence: "Use precise vocabulary",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example sequence: 'First, students arrive... Next, morning classes begin... After lunch, students have electives... Meanwhile, teachers prepare... Finally, students go home.' Transitions signal the order and relationships between steps.",
            commonErrors: [
              "Using transitions that don't match the logic — 'however' implies contrast, not sequence.",
            ],
          },
        },
        {
          id: "ela7-u6-explain2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INFPROMPT,
          parts: [
            {
              label: "a",
              prompt:
                "Choose one topic from the prompt and name its organizational pattern.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain why that pattern fits the topic.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pattern selection",
                statement: "Match structure to topic type.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'How the water cycle operates' — sequential/cyclic pattern.",
                evidence: "how the water cycle operates",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The water cycle is a process with stages (evaporation → condensation → precipitation → collection) that repeat — sequential order with cyclical return fits perfectly.",
                evidence: "how a seed becomes a tree",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'How the water cycle operates' — sequential/cyclic. (b) It's a process with repeating stages; sequential order shows each stage in sequence, and the cycle returns to the start.",
            commonErrors: [
              "Choosing a pattern that doesn't fit — e.g., chronological for a mechanism.",
            ],
          },
        },
      ],
    },
  ],
};
