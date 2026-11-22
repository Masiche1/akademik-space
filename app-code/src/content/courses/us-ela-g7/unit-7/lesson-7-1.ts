import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const SENTPASSAGE: TextExtract = {
  title: "Student Writing Sample",
  author: "Written for Akademik Space",
  text: "The storm came quickly. The wind blew hard. The trees bent. The power went out. We lit candles. We played cards. We talked. It was dark. It was cold. We were scared. But we were together.",
};

const SENTPASSAGE2: TextExtract = {
  title: "Improved Student Writing Sample",
  author: "Written for Akademik Space",
  text: "The storm came without warning, and the wind began to howl through the trees. Power lines snapped one by one, plunging the neighborhood into darkness. We lit candles and gathered in the living room, playing cards and telling stories until the storm finally passed.",
};

export const lesson71: Lesson = {
  id: "ela7-u7-lesson-7-1",
  code: "7-1",
  title: "Sentence Structure and Variety",
  goal: "I CAN combine and vary sentences to create rhythm and clarity in my writing.",
  standards: ["L.7.1a", "L.7.1b", "L.7.1c", "W.7.3c", "W.7.5"],
  vocabulary: [
    {
      term: "Sentence fragment",
      definition: "An incomplete sentence missing a subject or verb.",
    },
    {
      term: "Run-on sentence",
      definition:
        "Two or more complete sentences joined without proper punctuation.",
    },
    {
      term: "Compound sentence",
      definition:
        "Two independent clauses joined by a coordinating conjunction or semicolon.",
    },
    {
      term: "Complex sentence",
      definition: "One independent clause plus at least one dependent clause.",
    },
    {
      term: "Clause",
      definition:
        "A group of words with a subject and verb — independent stands alone, dependent cannot.",
    },
    {
      term: "Variety",
      definition:
        "Mixing sentence lengths and structures for rhythm and emphasis.",
    },
  ],
  concepts: [
    {
      id: "ela7-u7-structure",
      title: "Sentence types and combining",
      skill:
        "Identify and combine sentence types to fix fragments, run-ons, and improve flow.",
      lesson: {
        sections: [
          {
            heading: "Independent vs dependent clauses",
            body: "An **independent clause** has a subject and verb and can stand alone: 'The storm came.' A **dependent clause** has a subject and verb but cannot stand alone: 'When the storm came...' It needs an independent clause to complete it. Combining clauses creates compound and complex sentences.",
          },
          {
            heading: "Fixing fragments and run-ons",
            body: "**Fragments** are incomplete: 'Because the power went out.' Fix by adding an independent clause: 'Because the power went out, we lit candles.' **Run-ons** join sentences without punctuation: 'The wind blew hard the trees bent.' Fix with a period, comma+conjunction, or semicolon: 'The wind blew hard; the trees bent.'",
          },
        ],
        keyFormulas: [
          {
            name: "Independent clause",
            statement: "Subject + verb + complete thought — can stand alone.",
          },
          {
            name: "Dependent clause",
            statement:
              "Subject + verb + incomplete thought — needs an independent clause.",
          },
          {
            name: "Fixing fragments",
            statement: "Add an independent clause or attach to one.",
          },
          {
            name: "Fixing run-ons",
            statement:
              "Period, comma+conjunction, or semicolon between independent clauses.",
          },
        ],
        workedExample: {
          problem: "Fix the fragment 'Because the power went out.'",
          solution:
            "Add an independent clause: 'Because the power went out, we lit candles and played cards.' Or make it independent: 'The power went out.' The fragment becomes complete when it has both the dependent clause and a main clause.",
        },
      },
      questions: [
        {
          id: "ela7-u7-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SENTPASSAGE,
          stem: "Which sentence in the passage is a fragment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We talked." },
              { id: "b", text: "We played cards." },
              { id: "c", text: "The storm came quickly." },
              { id: "d", text: "It was dark." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fragment",
                statement: "Missing subject or complete thought.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'We talked' has subject and verb but no object or complete thought — it's a fragment in context.",
                evidence: "We talked.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. 'We talked' is a fragment — it lacks a complete thought.",
            commonErrors: [
              "Thinking all short sentences are fragments — 'We talked' is technically complete but feels incomplete in context.",
            ],
          },
        },
        {
          id: "ela7-u7-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SENTPASSAGE,
          stem: "Combine 'The wind blew hard.' and 'The trees bent.' into one compound sentence using a coordinating conjunction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Combining sentences",
                statement:
                  "Use coordinating conjunctions for compound sentences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choose a conjunction that shows relationship — 'and' for addition, 'but' for contrast.",
                evidence: "The wind blew hard. The trees bent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'The wind blew hard, and the trees bent.' or 'The wind blew so hard that the trees bent.'",
                evidence: "The wind blew hard",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The result shows cause and effect — wind caused trees to bend.",
                evidence: "The trees bent.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'The wind blew hard, and the trees bent.' — compound sentence with coordinating conjunction showing cause-effect.",
            commonErrors: [
              "Creating a comma splice: 'The wind blew hard, the trees bent' — needs conjunction or semicolon.",
            ],
          },
        },
        {
          id: "ela7-u7-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SENTPASSAGE,
          stem: "Rewrite the entire passage using varied sentence structures — combine short sentences, add one complex sentence, and improve flow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Mix simple, compound, and complex sentences.",
              },
              {
                kind: "skill",
                name: "Flow and rhythm",
                statement: "Vary length for emphasis and readability.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Combine related short sentences: 'The storm came quickly. The wind blew hard. The trees bent.' → 'The storm came quickly, and the wind blew so hard that the trees bent.'",
                evidence:
                  "The storm came quickly. The wind blew hard. The trees bent.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add a complex sentence: 'When the power went out, we lit candles.'",
                evidence: "The power went out. We lit candles.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Vary sentence length — keep some short for emphasis: 'It was dark. It was cold. We were scared.'",
                evidence: "It was dark. It was cold. We were scared.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Maintain meaning while improving flow — the revised version should read more smoothly.",
                evidence: "We played cards. We talked.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example revision: 'The storm came quickly, and the wind blew so hard that the trees bent. The power went out, so we lit candles. We played cards and talked in the dark. It was cold. We were scared. But we were together.' — varied structures improve flow.",
            commonErrors: [
              "Combining every sentence into one long run-on — variety means mixing lengths, not eliminating all short sentences.",
            ],
          },
        },
        {
          id: "ela7-u7-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SENTPASSAGE2,
          parts: [
            {
              label: "a",
              prompt:
                "Identify the sentence type in 'The power lines snapped one by one, plunging the neighborhood into darkness.'",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how this sentence structure creates effect.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence analysis",
                statement: "Structure creates meaning and effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It's a complex sentence — independent clause + participial phrase ('plunging...').",
                evidence: "plunging the neighborhood into darkness",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The participial phrase shows cause and effect — snapping lines caused darkness. It creates a flowing, cinematic feel.",
                evidence: "Power lines snapped one by one",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Complex sentence with participial phrase. (b) The phrase 'plunging the neighborhood into darkness' shows cause-effect and creates a flowing, cinematic effect.",
            commonErrors: [
              "Calling it compound — there's only one independent clause.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u7-structure2",
      title: "Variety and rhythm",
      skill:
        "Use sentence variety to create rhythm, emphasis, and engaging prose.",
      lesson: {
        sections: [
          {
            heading: "Why variety matters",
            body: "Monotonous writing — all sentences the same length and structure — puts readers to sleep. **Variety** creates rhythm: short sentences punch, long sentences flow, questions engage, fragments emphasize. 'The storm came quickly. The wind blew hard.' (staccato) vs. 'The storm came without warning, and the wind began to howl.' (flowing). Both work — for different effects.",
          },
          {
            heading: "Techniques for variety",
            body: "Mix: **simple** ('We lit candles'), **compound** ('We lit candles, and we played cards'), **complex** ('When the power went out, we lit candles'), and **compound-complex** ('When the power went out, we lit candles, and we played cards until dawn'). Start sentences differently — not every sentence needs 'The' or 'We'. Use fragments for emphasis: 'It was dark. Cold. Scary.'",
          },
        ],
        keyFormulas: [
          {
            name: "Variety creates rhythm",
            statement:
              "Short sentences punch; long sentences flow; fragments emphasize.",
          },
          {
            name: "Sentence starters",
            statement:
              "Vary how sentences begin — not every sentence needs 'The' or 'We'.",
          },
          {
            name: "Fragment as emphasis",
            statement:
              "'It was dark. Cold. Scary.' — fragments create rhythm and intensity.",
          },
        ],
        workedExample: {
          problem:
            "How would you add variety to 'We played cards. We talked. It was dark. It was cold.'?",
          solution:
            "Combine some: 'We played cards and talked in the darkness.' Keep some short for emphasis: 'It was cold.' Add a complex sentence: 'While the storm raged outside, we laughed inside.' The result has rhythm — some flowing, some punchy.",
        },
      },
      questions: [
        {
          id: "ela7-u7-structure2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SENTPASSAGE,
          stem: "What is the main problem with the original passage's sentence structure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "All sentences are the same short length and structure — monotonous",
              },
              { id: "b", text: "The sentences are too complex" },
              { id: "c", text: "The sentences are too long" },
              { id: "d", text: "The sentences don't make sense" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Monotony bores readers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every sentence is short, simple, and follows the same pattern — no variety or rhythm.",
                evidence: "The wind blew hard. The trees bent.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. All sentences are the same length and structure — monotonous.",
            commonErrors: [
              "Thinking short sentences are always bad — the issue is uniformity, not length.",
            ],
          },
        },
        {
          id: "ela7-u7-structure2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SENTPASSAGE2,
          stem: "Compare the rhythm of the original and revised passages. Which techniques create better flow?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhythm analysis",
                statement:
                  "Varied structures create better reading experience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The revised version combines related ideas, creating flowing sentences.",
                evidence:
                  "The storm came without warning, and the wind began to howl",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It uses participial phrases and subordinate clauses for variety.",
                evidence: "plunging the neighborhood into darkness",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The original's staccato rhythm ('We talked. It was dark.') is preserved in the revised version for emphasis at the end.",
                evidence: "We played cards and talked",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The revised version combines related ideas into flowing sentences while keeping some short sentences for emphasis — creating rhythm and better flow.",
            commonErrors: [
              "Saying 'longer is always better' — the revised version still uses short sentences strategically.",
            ],
          },
        },
        {
          id: "ela7-u7-structure2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SENTPASSAGE,
          stem: "Rewrite the passage to demonstrate sentence variety. Include at least one compound, one complex, and one compound-complex sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Demonstrate all sentence types.",
              },
              {
                kind: "skill",
                name: "Meaning preservation",
                statement: "Keep the same information while varying structure.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Compound sentence: 'The storm came quickly, and the wind blew hard.'",
                evidence: "The storm came quickly. The wind blew hard.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Complex sentence: 'When the power went out, we lit candles.'",
                evidence: "The power went out. We lit candles.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Compound-complex: 'While the storm raged outside, we played cards, and we talked until dawn.'",
                evidence: "We played cards. We talked.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Keep some short sentences for emphasis: 'It was dark. It was cold. We were scared.'",
                evidence: "It was dark. It was cold. We were scared.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The storm came quickly, and the wind blew so hard that the trees bent. When the power went out, we lit candles. While the storm raged outside, we played cards and talked until dawn. It was dark. It was cold. We were scared. But we were together.'",
            commonErrors: [
              "Making every sentence complex — variety means mixing types, not eliminating simple sentences.",
            ],
          },
        },
        {
          id: "ela7-u7-structure2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SENTPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Identify two techniques you could use to vary sentence structure.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Rewrite one sentence from the passage using one of those techniques.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variety techniques",
                statement: "Combine, vary length, use different starters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Combine related sentences; vary sentence length; start sentences differently.",
                evidence: "We played cards. We talked.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'We played cards and talked' — combines two sentences into one compound.",
                evidence: "We played cards. We talked.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Combine related sentences and vary length. (b) 'We played cards and talked' — combines two short sentences.",
            commonErrors: ["Listing techniques without demonstrating one."],
          },
        },
      ],
    },
  ],
};
