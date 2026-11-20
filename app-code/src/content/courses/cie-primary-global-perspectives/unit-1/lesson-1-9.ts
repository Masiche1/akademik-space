import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cipg-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Reflecting on What You Did",
  goal: "I CAN think about what I learned or did and describe how I could do better next time.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: reflection", "Cambridge Primary Global Perspectives 0838 strand: Reflection"],
  stage: 3,
  vocabulary: [
    { term: "Reflect", definition: "To think carefully about something you did." },
    { term: "Learn", definition: "To gain knowledge or skill." },
    { term: "Improve", definition: "To make something better." },
    { term: "Mistake", definition: "Something done wrong." },
    { term: "Success", definition: "Something done well." },
    { term: "Next time", definition: "What you would do differently later." },
  ],
  concepts: [
    {
      id: "cipg-u1-s3-reflect",
      title: "Reflection",
      skill: "Review actions, identify learnings and improvements at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "What is reflection?",
            body: "Reflection means thinking back on what you did — what went well, what didn't, and what you learned. It's how you grow: 'I presented well but forgot to look at the audience.'",
          },
          {
            heading: "Improving",
            body: "Reflection leads to improvement. Ask: What worked? What didn't? What will I do next time? Honest reflection helps you get better at anything — sports, schoolwork, teamwork.",
          },
        ],
        keyFormulas: [
          { name: "Reflect", statement: "think back on what you did" },
          { name: "Improve", statement: "learn from experience for next time" },
        ],
        workedExample: {
          problem: "You gave a class presentation but spoke too quietly. Reflect and plan improvement.",
          solution: "What happened: audience couldn't hear. Next time: practise projecting voice, check volume before starting.",
        },
      },
      questions: [
        {
          id: "cipg-u1-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to reflect?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Think carefully about something you did"
                    },
                    {
                              "id": "b",
                              "text": "Forget what happened"
                    },
                    {
                              "id": "c",
                              "text": "Ignore mistakes"
                    },
                    {
                              "id": "d",
                              "text": "Blame others"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reflect",
                              "statement": "Think back on actions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reflection = reviewing your experience.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Think back on what you did"
},
        },
        {
          id: "cipg-u1-rf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two questions you could ask when reflecting on group work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reflection questions",
                              "statement": "What worked, what didn't."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. what went well / what didn't.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. what will I do next time.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. what worked + next time"
},
        },
        {
          id: "cipg-u1-rf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You lost a football match. Reflect: what might you do differently next time?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reflection",
                              "statement": "Learn from experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Honest assessment of what happened.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Specific improvement plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links reflection to future action.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Assessment + improvement plan"
},
        },
        {
          id: "cipg-u1-rf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reflect, improve, mistake, next time. (b) Why is reflection important? (c) Reflect on a recent success. (d) Reflect on a recent mistake. (e) What three questions guide reflection? (f) How does reflection help learning? (g) Why is honest reflection hard? (h) Design a reflection journal format.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Reflection",
                              "statement": "Review, learn, improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Turns experience into learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid success reflection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid mistake reflection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) What worked/what didn't/next time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Identifies patterns, builds skills.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Requires honesty about weaknesses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid journal format.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reflection, learning, improvement."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-rf-notes",
      title: "Reflection — notes",
      summary: "Reflect = think back on what you did. Ask what worked, what didn't, what next time.",
      sections: [
        { heading: "Key idea", body: "Reflection turns experience into improvement." },
        { heading: "Questions", body: "What went well? What didn't? What next time?" },
      ],
    },
  ],
};
