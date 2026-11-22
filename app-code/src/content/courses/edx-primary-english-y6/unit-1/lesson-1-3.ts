import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edpe6-u1-lesson-1-3",
  code: "1-3",
  title: "Figurative Language and Rhetorical Devices",
  goal: "I CAN identify and analyse figurative language and rhetorical devices.",
  standards: ["Year 6 Reading and Vocabulary"],
  vocabulary: [
    { term: "Metaphor", definition: "Direct comparison: 'Time is a thief'." },
    {
      term: "Personification",
      definition: "Human qualities to non-human: 'The wind whispered'.",
    },
    {
      term: "Hyperbole",
      definition: "Exaggeration: 'I've told you a million times'.",
    },
    { term: "Allusion", definition: "Reference to something well-known." },
  ],
  concepts: [
    {
      id: "edpe6-u1-figurative",
      title: "Figurative devices",
      skill: "Identify metaphors, personification, hyperbole and allusions.",
      lesson: {
        sections: [
          {
            heading: "Advanced devices",
            body: "**Hyperbole**: deliberate exaggeration for effect. **Allusion**: reference to another text/person/event ('Achilles' heel'). **Oxymoron**: contradictory terms ('deafening silence'). **Juxtaposition**: placing contrasting things together.",
          },
          {
            heading: "Analysing effect",
            body: "Ask: why did the writer choose this device? What does it add? How does it shape meaning and feeling? 'Time is a thief' makes time seem malicious and unstoppable.",
          },
        ],
        keyFormulas: [
          { name: "Hyperbole", statement: "Exaggeration" },
          { name: "Allusion", statement: "Reference to known thing" },
          { name: "Oxymoron", statement: "Contradictory terms" },
        ],
        workedExample: {
          problem: "Identify the device in 'The classroom was a zoo.'",
          solution: "Metaphor — classroom compared directly to chaotic zoo.",
        },
      },
      questions: [
        {
          id: "edpe6-u1-fg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is hyperbole?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A gentle comparison" },
              { id: "b", text: "A sound word" },
              { id: "c", text: "A rhyme" },
              { id: "d", text: "Deliberate exaggeration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hyperbole",
                statement: "Exaggeration.",
              },
            ],
            steps: [
              {
                reasoning: "Hyperbole = exaggeration.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Deliberate exaggeration",
            commonErrors: ["Wrong device."],
          },
        },
        {
          id: "edpe6-u1-fg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What device is 'Time is a thief'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphor",
                statement: "Direct comparison without like/as.",
              },
            ],
            steps: [
              {
                reasoning: "Direct comparison = metaphor.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: metaphor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Metaphor",
            commonErrors: ["Confusing with simile."],
          },
        },
        {
          id: "edpe6-u1-fg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is an oxymoron? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxymoron",
                statement:
                  "Contradictory terms; e.g. 'deafening silence', 'bittersweet'.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
              { reasoning: "Example valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contradictory terms; e.g. 'deafening silence'",
            commonErrors: ["Vague or wrong example."],
          },
        },
        {
          id: "edpe6-u1-fg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse 'The old man was a mountain of strength' — identify device and explain effect.",
          parts: [
            { label: "a", prompt: "Identify device", marks: 1 },
            { label: "b", prompt: "Literal meaning", marks: 1 },
            { label: "c", prompt: "Figurative meaning", marks: 1 },
            { label: "d", prompt: "Effect on reader", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metaphor analysis",
                statement: "Mountain = strong, stable, imposing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Metaphor identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Old man literally.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Very strong/stable.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Impressive/respectful effect.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Metaphor; old man; very strong/stable; impressive effect",
            commonErrors: ["Literal only or no effect."],
          },
        },
      ],
    },
    {
      id: "edpe6-u1-allusion",
      title: "Allusion and intertextuality",
      skill:
        "Recognise and analyse allusions to other texts and cultural references.",
      lesson: {
        sections: [
          {
            heading: "What is allusion?",
            body: "An allusion references something well-known without explaining it: 'Achilles' heel' = fatal weakness; 'a Herculean task' = extremely difficult; 'the lion's den' = dangerous place.",
          },
          {
            heading: "Intertextuality",
            body: "Texts reference other texts: a story might allude to a fairy tale or myth. Recognising these adds layers of meaning and shows the writer's knowledge.",
          },
        ],
        keyFormulas: [
          { name: "Allusion", statement: "Reference to known thing" },
          { name: "Intertextuality", statement: "Text references text" },
          { name: "Cultural reference", statement: "Shared knowledge assumed" },
        ],
        workedExample: {
          problem: "What does 'a Herculean task' mean?",
          solution:
            "An extremely difficult task (reference to Hercules' labours).",
        },
      },
      questions: [
        {
          id: "edpe6-u1-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an allusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rhyme" },
              { id: "b", text: "A reference to something well-known" },
              { id: "c", text: "A metaphor" },
              { id: "d", text: "A direct quote" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allusion",
                statement: "Reference to known thing.",
              },
            ],
            steps: [
              { reasoning: "Allusion = reference.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A reference to something well-known",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u1-al-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'Achilles' heel' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A foot problem" },
              { id: "b", text: "A fast runner" },
              { id: "c", text: "Greek food" },
              { id: "d", text: "A fatal weakness" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allusion",
                statement: "Achilles' heel = fatal weakness.",
              },
            ],
            steps: [
              {
                reasoning: "Myth reference understood.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: fatal weakness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A fatal weakness",
            commonErrors: ["Literal meaning."],
          },
        },
        {
          id: "edpe6-u1-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'a Herculean task' means and where it comes from.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allusion",
                statement:
                  "Extremely difficult; reference to Hercules' labours.",
              },
            ],
            steps: [
              { reasoning: "Meaning explained.", marks: 1, markCode: "M" },
              { reasoning: "Origin identified.", marks: 1, markCode: "A" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Extremely difficult task; from Hercules' mythological labours",
            commonErrors: ["No origin or wrong meaning."],
          },
        },
        {
          id: "edpe6-u1-al-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how allusion enriches a text that mentions 'a modern-day Sisyphean task'.",
          parts: [
            { label: "a", prompt: "What does Sisyphean mean?", marks: 1 },
            { label: "b", prompt: "What is the allusion to?", marks: 1 },
            { label: "c", prompt: "What does it add to meaning?", marks: 1 },
            {
              label: "d",
              prompt: "Why use allusion vs plain language?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allusion analysis",
                statement:
                  "Endless/futile; Sisyphus myth; adds depth; concise evocation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Endless/futile.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sisyphus myth.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Depth added.", marks: 1, markCode: "R" },
              {
                part: "d",
                reasoning: "Concise richness.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Endless/futile; Sisyphus; adds depth; concise rich reference",
            commonErrors: ["No analysis or wrong meaning."],
          },
        },
      ],
    },
  ],
};
