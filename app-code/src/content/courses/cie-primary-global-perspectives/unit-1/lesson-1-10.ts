import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "cipg-u1-lesson-1-10",
  code: "1-10",
  title: "Stage 3 — Presenting Your Findings",
  goal: "I CAN present research findings clearly using words and visuals.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
  stage: 3,
  vocabulary: [
    { term: "Present", definition: "To show and explain your findings to an audience." },
    { term: "Visual", definition: "A picture, chart or diagram that helps explain." },
    { term: "Structure", definition: "An organised way of presenting — beginning, middle, end." },
    { term: "Audience", definition: "The people listening to your presentation." },
    { term: "Key point", definition: "The most important thing to say." },
    { term: "Summary", definition: "A short version of the main points." },
  ],
  concepts: [
    {
      id: "cipg-u1-s3-present",
      title: "Presenting findings",
      skill: "Organise and deliver a clear presentation at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Structuring a presentation",
            body: "Good presentations have structure: introduction (what you researched), main points (your findings), conclusion (what you learned). Keep it organised so the audience can follow.",
          },
          {
            heading: "Using visuals",
            body: "Pictures, charts and diagrams help audiences understand. Choose visuals that match your points — a chart for data, a diagram for processes. Practise speaking clearly and looking at your audience.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "intro → main points → conclusion" },
          { name: "Visual", statement: "picture/chart that supports your point" },
        ],
        workedExample: {
          problem: "You researched recycling. Plan a 3-part presentation structure.",
          solution: "Intro: why recycling matters. Main: types of recycling + how it works (with chart). Conclusion: what we can do.",
        },
      },
      questions: [
        {
          id: "cipg-u1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a presentation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Showing and explaining findings to an audience"
                    },
                    {
                              "id": "b",
                              "text": "A type of game"
                    },
                    {
                              "id": "c",
                              "text": "A computer program"
                    },
                    {
                              "id": "d",
                              "text": "A book"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Present",
                              "statement": "Show findings to audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Presentation = organised sharing to listeners.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Show findings to audience"
},
        },
        {
          id: "cipg-u1-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three parts of a good presentation structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Structure",
                              "statement": "Intro, main, conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction, main points, conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "In correct order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Intro → main → conclusion"
},
        },
        {
          id: "cipg-u1-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use visuals in a presentation? Give an example of a visual for a topic about water.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visuals",
                              "statement": "Support understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Visuals make points clearer/easier to remember.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. water cycle diagram or chart of usage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Matches visual to content.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Clarity; e.g. cycle diagram"
},
        },
        {
          id: "cipg-u1-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define present, visual, structure, audience, key point, summary. (b) Plan a presentation structure for 'Our local environment'. (c) Why organise before presenting? (d) What makes a good visual? (e) How do you engage your audience? (f) What if you forget something? (g) How is a summary different from main points? (h) Rehearse: describe your delivery plan.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Presenting",
                              "statement": "Structure, visuals, delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid 3-part structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Audience follows; you stay organised.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Clear, relevant, simple.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Eye contact, questions, enthusiasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Pause, continue, don't apologise excessively.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Summary=short version; main=details.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid delivery plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Presentation structure, visuals, delivery."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-pr-notes",
      title: "Presenting — notes",
      summary: "Structure: intro → main → conclusion. Use clear visuals; engage audience; practise delivery.",
      sections: [
        { heading: "Key idea", body: "Organisation makes findings easy to understand." },
        { heading: "Visuals", body: "Match images/charts to your points." },
      ],
    },
  ],
};
