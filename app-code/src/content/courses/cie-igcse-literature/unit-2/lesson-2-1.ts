import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieilit-u2-lesson-2-1",
  code: "2-1",
  title: "Comparing texts and writing essays",
  goal: "I CAN compare two texts effectively and structure a literature essay.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 2: Writing about literature",
  ],
  vocabulary: [
    {
      term: "Comparative essay",
      definition:
        "An essay analysing similarities and differences between two texts.",
    },
    {
      term: "Thesis",
      definition: "The central argument or claim your essay proves.",
    },
    {
      term: "PEE paragraph",
      definition:
        "Point + Evidence + Explanation — the basic analytical paragraph structure.",
    },
    {
      term: "Integrated comparison",
      definition:
        "Weaving both texts into each paragraph rather than treating them separately.",
    },
    {
      term: "Linking sentence",
      definition:
        "A sentence connecting analysis back to the essay's argument.",
    },
    {
      term: "Evaluation",
      definition: "Weighing interpretations to reach a supported judgement.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u2-compare",
      title: "Comparison and essay structure",
      skill:
        "Write comparative essays using integrated analysis and clear structure.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "Comparison is not 'Text A says X, Text B says Y' — it is integrated analysis: each paragraph should address BOTH texts on a shared theme or technique. Find meaningful points of similarity AND difference — how do both writers treat power, loss, identity? The best comparisons note not just what differs but WHY it differs.",
          },
          {
            heading: "Essay structure",
            body: "A strong essay has: a **thesis** (your argument — e.g. 'Both writers explore isolation but through contrasting methods'), **topic paragraphs** each with a clear point, **embedded evidence** (short quotes integrated into sentences), **analysis** (technique → effect → meaning), and a **conclusion** answering the question. Each paragraph should advance your argument.",
          },
          {
            heading: "The PEE method",
            body: "**Point**: state your analytical claim. **Evidence**: embed a short quote. **Explanation**: analyse how the writer's choices create meaning. Advanced essays add **Evaluation**: weigh alternative interpretations or significance. PEE prevents plot summary — the most common essay weakness.",
          },
        ],
        keyFormulas: [
          {
            name: "Integrated comparison",
            statement: "Each paragraph = both texts + shared point",
          },
          {
            name: "PEE chain",
            statement: "Point → Evidence → Explanation (→ Evaluation)",
          },
        ],
        workedExample: {
          problem:
            "Write a topic sentence comparing how two poems handle nature.",
          solution:
            "'While Poem A presents nature as a nurturing refuge, Poem B depicts it as indifferent and dangerous — both use imagery but to opposite effects.'",
        },
      },
      questions: [
        {
          id: "cieilit-u2-cmp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'integrated comparison' means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing about Text A fully, then Text B fully",
              },
              {
                id: "b",
                text: "Weaving both texts into each analytical point",
              },
              { id: "c", text: "Comparing only the plots" },
              { id: "d", text: "Listing similarities only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated comparison",
                statement: "Both texts addressed within each analytical point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integrated comparison weaves both texts into each paragraph on a shared theme — not separate treatment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Weaving both texts into each analytical point.",
            commonErrors: ["Writing two separate essays — one per text."],
          },
        },
        {
          id: "cieilit-u2-cmp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the PEE paragraph structure and why it prevents plot summary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE structure",
                statement:
                  "Point + Evidence + Explanation forces analysis over narration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point states an analytical claim; Evidence embeds a quote; Explanation analyses technique and effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Because each paragraph must explain HOW the quote creates meaning, it cannot just retell events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Plot summary lacks the Explanation step — PEE makes analysis compulsory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "PEE forces analysis — Point, Evidence, Explanation — making plot summary impossible without explanation.",
            commonErrors: [
              "Using PEE as Point-Evidence only, skipping Explanation.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good thesis statement for a comparative essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis construction",
                statement:
                  "A debatable argument linking both texts, not a description.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It states an argument — e.g. 'Both writers explore isolation but through contrasting methods' — not a summary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It must cover BOTH texts — a thesis about only one text fails the comparative task.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It should be specific and debatable — provable through textual evidence, not obvious.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A debatable argument covering both texts — e.g. 'Both explore X but through contrasting methods.'",
            commonErrors: [
              "Writing a thesis that is just a topic or plot description.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a paragraph plan for comparing how two poems present 'childhood'.",
          parts: [
            {
              label: "a",
              prompt: "Give a thesis for the comparison.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Plan three integrated paragraphs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay planning",
                statement:
                  "Thesis + integrated points = structured comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Both poems present childhood as a site of loss — Poem A through nostalgia, Poem B through disillusionment.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis links both texts and takes a position, not just a topic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: imagery of childhood in both poems — how each uses sensory detail.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: tone and voice — nostalgic vs critical attitudes toward childhood.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: structure/ending — how each resolves (or refuses to resolve) the theme.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph integrates both texts on a shared point — not separate treatment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis linking both poems' treatment of childhood. (b) Three integrated paragraphs: imagery, tone, structure.",
            commonErrors: [
              "Planning one paragraph per text instead of thematic comparison.",
            ],
          },
        },
      ],
    },
  ],
};
