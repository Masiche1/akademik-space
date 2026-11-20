import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cipg-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 1 — Looking Closer: Observing and Comparing",
  goal: "I CAN observe things closely and compare them to spot differences and similarities.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
  stage: 1,
  vocabulary: [
    { term: "Observe", definition: "To look at something carefully." },
    { term: "Compare", definition: "To look at two things and see how they are alike or different." },
    { term: "Similar", definition: "Alike in some way." },
    { term: "Different", definition: "Not alike." },
    { term: "Detail", definition: "Small things you notice when looking closely." },
    { term: "Feature", definition: "A particular part or quality of something." },
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
          solution: "Similar: both write on paper. Different: pencil uses lead you can rub out; pen uses ink that is permanent.",
        },
      },
      questions: [
        {
          id: "cipg-u1-ob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to observe?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Look at something carefully"
                    },
                    {
                              "id": "b",
                              "text": "Guess quickly"
                    },
                    {
                              "id": "c",
                              "text": "Ignore details"
                    },
                    {
                              "id": "d",
                              "text": "Close your eyes"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Observe",
                              "statement": "Careful looking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observing = noticing details carefully.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Look carefully"
},
        },
        {
          id: "cipg-u1-ob-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one similarity and one difference between an apple and an orange.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing",
                              "statement": "Similarities and differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similar: both round fruits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different: colour/taste/peel.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. both fruits; different colour"
},
        },
        {
          id: "cipg-u1-ob-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Look at your shoe. Describe two details you notice. Then explain why observing closely helps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observation",
                              "statement": "Details and benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid details (colour, laces, material).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Observing = noticing small features.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Helps understand and describe things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Details noted; helps understanding"
},
        },
        {
          id: "cipg-u1-ob-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define observe, compare, similar, different. (b) Compare day and night in two ways. (c) Compare two animals you know. (d) Why is noticing details important? (e) What is a feature? (f) How does comparing help you choose? (g) Observe a leaf — describe three details. (h) Design a 'spot the difference' game idea.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Observation",
                              "statement": "Details, comparisons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Day=light/active; night=dark/sleep.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid animal comparison.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Details reveal how things work/differ.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Part/quality of something.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Compare options to pick best.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Three leaf details: shape, veins, edge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid game idea.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Observation, comparison skills, details."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-ob-notes",
      title: "Observing — notes",
      summary: "Observe = notice details. Compare = similarities + differences. Close looking reveals more.",
      sections: [
        { heading: "Key idea", body: "Good observation = naming specific details, not just 'it's nice'." },
        { heading: "Comparing", body: "Say both how things are alike AND different." },
      ],
    },
  ],
};
