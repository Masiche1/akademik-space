import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cipg-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 1 — Looking Closer: Observing and Comparing",
  goal: "I CAN observe things closely and compare them to spot differences and similarities.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 1: analysis",
    "Cambridge Primary Global Perspectives 0838 strand: Analysis",
  ],
  stage: 1,
  vocabulary: [
    { term: "Observe", definition: "To look at something carefully." },
    {
      term: "Compare",
      definition:
        "To look at two things and see how they are alike or different.",
    },
    { term: "Similar", definition: "Alike in some way." },
    { term: "Different", definition: "Not alike." },
    {
      term: "Detail",
      definition: "Small things you notice when looking closely.",
    },
    {
      term: "Feature",
      definition: "A particular part or quality of something.",
    },
  ],
  concepts: [
    {
      id: "cipg-u1-s1-observe",
      title: "Observing and comparing",
      skill: "Notice details and compare objects at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Observing closely",
            body: "Observing means looking carefully — noticing colours, shapes, sizes, patterns. 'The leaf has pointed edges and green veins.' Close observation helps you understand things better.",
          },
          {
            heading: "Comparing",
            body: "Comparing means finding similarities and differences: 'Both are animals, but the cat has fur and the fish has scales.' Comparing helps you sort, choose and explain.",
          },
        ],
        keyFormulas: [
          { name: "Observe", statement: "look carefully, notice details" },
          { name: "Compare", statement: "find similarities and differences" },
        ],
        workedExample: {
          problem: "Compare a pencil and a pen in two ways.",
          solution:
            "Similar: both write on paper. Different: pencil uses lead you can rub out; pen uses ink that is permanent.",
        },
      },
      questions: [
        {
          id: "cipg-u1-ob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to observe?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ignore details",
              },
              {
                id: "b",
                text: "Guess quickly",
              },
              {
                id: "c",
                text: "Close your eyes",
              },
              {
                id: "d",
                text: "Look at something carefully",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Observe",
                statement: "Careful looking.",
              },
            ],
            steps: [
              {
                reasoning: "Observing = noticing details carefully.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Look carefully",
          },
        },
        {
          id: "cipg-u1-ob-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one similarity and one difference between an apple and an orange.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning: "Similar: both round fruits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different: colour/taste/peel.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. both fruits; different colour",
          },
        },
        {
          id: "cipg-u1-ob-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Look at your shoe. Describe two details you notice. Then explain why observing closely helps.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation",
                statement: "Details and benefits.",
              },
            ],
            steps: [
              {
                reasoning: "Two valid details (colour, laces, material).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Observing = noticing small features.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps understand and describe things.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Details noted; helps understanding",
          },
        },
        {
          id: "cipg-u1-ob-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define observe, compare, similar, different. (b) Compare day and night in two ways. (c) Compare two animals you know. (d) Why is noticing details important? (e) What is a feature? (f) How does comparing help you choose? (g) Observe a leaf — describe three details. (h) Design a 'spot the difference' game idea.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Observation",
                statement: "Details, comparisons.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Day=light/active; night=dark/sleep.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid animal comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Details reveal how things work/differ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Part/quality of something.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Compare options to pick best.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Three leaf details: shape, veins, edge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid game idea.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Observation, comparison skills, details.",
          },
        },
        {
          id: "cipg-u1-ob-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'detail'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The biggest part of something",
              },
              {
                id: "b",
                text: "A guess you have not checked",
              },
              {
                id: "c",
                text: "A small thing you notice when looking closely",
              },
              {
                id: "d",
                text: "A story about something",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Detail",
                statement: "Small noticed feature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A detail is a small thing noticed on close observation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A small thing noticed closely",
          },
        },
        {
          id: "cipg-u1-ob-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Priya compared a cup and a mug. She wrote down 4 similarities and 3 differences. (a) How many comparison points did she write in total? (b) How many more similarities than differences did she write?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 7,
              },
              {
                label: "b",
                answer: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Count similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 + 3 = 7 comparison points.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 - 3 = 1 more similarity.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "7 points; 1 more similarity",
          },
        },
        {
          id: "cipg-u1-ob-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a similarity between day and night?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Both are parts of a 24-hour day",
              },
              {
                id: "b",
                text: "Both are dark",
              },
              {
                id: "c",
                text: "Both have the sun out",
              },
              {
                id: "d",
                text: "Both are for sleeping",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Similarities",
                statement: "Ways things are alike.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Day and night are both parts of the same daily cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Both parts of a 24-hour day",
          },
        },
        {
          id: "cipg-u1-ob-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A class observed 5 leaves. For each leaf they recorded 3 details. (a) How many details were recorded in total? (b) If 2 leaves each had 1 extra detail, how many details would there be in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 15,
              },
              {
                label: "b",
                answer: 17,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation",
                statement: "Counting recorded details.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 5 leaves x 3 details = 15.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 15 + 2 extra = 17.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "15 details; 17 with extras",
          },
        },
        {
          id: "cipg-u1-ob-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best example of close observation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "I like leaves",
              },
              {
                id: "b",
                text: "The leaf is nice",
              },
              {
                id: "c",
                text: "The leaf is green with pointed edges and visible veins",
              },
              {
                id: "d",
                text: "Leaves grow on trees",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation",
                statement: "Specific details, not vague comments.",
              },
            ],
            steps: [
              {
                reasoning: "Close observation names specific features.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific features named",
          },
        },
        {
          id: "cipg-u1-ob-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Students compared 4 pairs of foods. For each pair they found 2 similarities and 1 difference. (a) How many similarities did they find in total? (b) How many differences did they find in total? (c) How many comparison points in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 8,
              },
              {
                label: "b",
                answer: 4,
              },
              {
                label: "c",
                answer: 12,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Counting similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 pairs x 2 similarities = 8.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 pairs x 1 difference = 4.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 8 + 4 = 12 comparison points.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "8 similarities, 4 differences, 12 points",
          },
        },
        {
          id: "cipg-u1-ob-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which option shows BOTH a similarity and a difference between a cat and a dog?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cats like milk and dogs like bones",
              },
              {
                id: "b",
                text: "Both are animals",
              },
              {
                id: "c",
                text: "Both are animals with fur; a cat says meow and a dog says woof",
              },
              {
                id: "d",
                text: "A cat is small and a dog is big",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Similarity plus difference together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only option a gives one likeness and one difference.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Both alike and different",
          },
        },
        {
          id: "cipg-u1-ob-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Story A has 12 pages and 5 characters. Story B has 8 pages and 7 characters. (a) How many pages do both stories have together? (b) How many more characters does Story B have? (c) How many characters do both stories have together?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 20,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 12,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Comparing quantities.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 12 + 8 = 20 pages.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 7 - 5 = 2 more characters.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 5 + 7 = 12 characters.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "20 pages; 2 more; 12 characters",
          },
        },
        {
          id: "cipg-u1-ob-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student says 'If I look at something quickly, I have observed it.' Which is the best response?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Yes, looking once is enough",
              },
              {
                id: "b",
                text: "Observing means looking carefully and noticing details",
              },
              {
                id: "c",
                text: "No, you must look for a whole hour",
              },
              {
                id: "d",
                text: "Only teachers can observe things",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Observe",
                statement: "Careful noticing of details.",
              },
            ],
            steps: [
              {
                reasoning: "True observation needs careful, detailed looking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Careful, detailed looking",
          },
        },
        {
          id: "cipg-u1-ob-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For a 'spot the difference' game, Mia made 2 pictures with 6 differences between them. She also labelled 4 similarities. (a) How many differences are there? (b) How many similarities are labelled? (c) How many labelled points in total? (d) If she adds 3 more differences, how many differences will there be?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 4,
              },
              {
                label: "c",
                answer: 10,
              },
              {
                label: "d",
                answer: 9,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation",
                statement: "Counting differences and similarities.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 differences given.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 similarities given.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 + 4 = 10 labelled points.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 6 + 3 = 9 differences.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "6, 4, 10, 9",
          },
        },
        {
          id: "cipg-u1-ob-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is comparing useful when choosing between two options?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is faster than thinking",
              },
              {
                id: "b",
                text: "It removes the need to choose",
              },
              {
                id: "c",
                text: "It shows how the options are alike and different so you can pick the best",
              },
              {
                id: "d",
                text: "It makes the options exactly the same",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Helps decision-making.",
              },
            ],
            steps: [
              {
                reasoning: "Comparing reveals which option suits best.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shows likenesses and differences to choose",
          },
        },
        {
          id: "cipg-u1-ob-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define observe, similar, different. (b) List three details you might notice on a rock. (c) Compare rain and snow in two ways. (d) Why might two people notice different details on the same object? (e) What is a feature of a bird? (f) How does comparing help when choosing a gift? (g) Describe the features of your favourite toy in two sentences. (h) Invent a 'find the odd one out' game with five objects.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Observation and comparison",
                statement: "Details, similarities, differences, features.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All three definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Three valid rock details: colour, texture, shape, weight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid comparison: both are water falling; rain is liquid, snow is frozen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Different people notice different things based on experience and interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid bird feature: wings, beak, feathers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Comparing helps match the gift to the person's likes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Two sentences naming real features of the toy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Valid game with five objects and one clear odd feature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Observation, comparison, features, creative application.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-ob-notes",
      title: "Observing — notes",
      summary:
        "Observe = notice details. Compare = similarities + differences. Close looking reveals more.",
      sections: [
        {
          heading: "Key idea",
          body: "Good observation = naming specific details, not just 'it's nice'.",
        },
        {
          heading: "Comparing",
          body: "Say both how things are alike AND different.",
        },
      ],
    },
  ],
};
