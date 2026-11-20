import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cipg-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 3 — Seeing Different Viewpoints",
  goal: "I CAN recognise that people see things differently and identify different perspectives.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
  stage: 3,
  vocabulary: [
    { term: "Perspective", definition: "The way someone sees or thinks about something." },
    { term: "Viewpoint", definition: "An opinion or way of looking at an issue." },
    { term: "Different", definition: "Not the same — varied." },
    { term: "Agree", definition: "To have the same opinion." },
    { term: "Disagree", definition: "To have a different opinion." },
    { term: "Consider", definition: "To think about carefully." },
  ],
  concepts: [
    {
      id: "cipg-u1-s3-persp",
      title: "Different perspectives",
      skill: "Identify and respect different viewpoints at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Different ways of seeing",
            body: "People see the same thing differently — a rainy day might be 'fun puddles' to one person and 'no football' to another. Your background, experiences and feelings shape your perspective.",
          },
          {
            heading: "Respecting viewpoints",
            body: "Just because someone disagrees doesn't mean they're wrong. Consider their reasons before judging. Looking at issues from different perspectives helps you understand the world better and make fairer decisions.",
          },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "how someone sees/thinks about something" },
          { name: "Consider", statement: "think about other viewpoints before judging" },
        ],
        workedExample: {
          problem: "Your friend loves vegetables; you hate them. How might you both see the same dinner differently?",
          solution: "Your friend sees tasty healthy food; you see boring vegetables. Same dinner, different perspectives based on tastes and experiences.",
        },
      },
      questions: [
        {
          id: "cipg-u1-vp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a perspective?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The way someone sees or thinks about something"
                    },
                    {
                              "id": "b",
                              "text": "A type of camera"
                    },
                    {
                              "id": "c",
                              "text": "A math formula"
                    },
                    {
                              "id": "d",
                              "text": "A game score"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perspective",
                              "statement": "Personal viewpoint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perspective = individual way of seeing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Personal way of seeing"
},
        },
        {
          id: "cipg-u1-vp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give an example where two people might disagree about the same thing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Different viewpoints",
                              "statement": "Same thing, different views."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid example: homework (fun vs boring).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains different perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. homework views differ"
},
        },
        {
          id: "cipg-u1-vp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might someone's perspective differ from yours? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Perspective causes",
                              "statement": "Background and experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different experiences/backgrounds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different cultures, ages, beliefs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shapes how they see things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Experience/culture differences"
},
        },
        {
          id: "cipg-u1-vp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perspective and viewpoint. (b) Give an example of two perspectives on school uniforms. (c) Why do people disagree? (d) What should you do when someone disagrees with you? (e) How does considering other views help? (f) Can two people both be partly right? (g) Describe a time perspectives differed. (h) Why is respect important in discussions?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Perspectives",
                              "statement": "Different views, respect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Both definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) For: equality; against: self-expression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Different backgrounds/experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Listen to their reasons first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Understand complexity, find common ground.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Yes — perspectives can overlap.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Personal example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Enables fair discussion and learning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Perspectives, disagreement, respect, understanding."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-vp-notes",
      title: "Perspectives — notes",
      summary: "People see things differently based on experience/background. Consider other views before judging.",
      sections: [
        { heading: "Key idea", body: "Disagreement often comes from different perspectives, not wrongness." },
        { heading: "Respect", body: "Listen first, then share your view." },
      ],
    },
  ],
};
