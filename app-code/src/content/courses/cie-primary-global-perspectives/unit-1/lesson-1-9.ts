import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cipg-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Reflecting on What You Did",
  goal: "I CAN think about what I learned or did and describe how I could do better next time.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 3: reflection",
    "Cambridge Primary Global Perspectives 0838 strand: Reflection",
  ],
  stage: 3,
  vocabulary: [
    {
      term: "Reflect",
      definition: "To think carefully about something you did.",
    },
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
      skill:
        "Review actions, identify learnings and improvements at Stage 3 level.",
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
          problem:
            "You gave a class presentation but spoke too quietly. Reflect and plan improvement.",
          solution:
            "What happened: audience couldn't hear. Next time: practise projecting voice, check volume before starting.",
        },
      },
      questions: [
        {
          id: "cipg-u1-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to reflect?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Think carefully about something you did",
              },
              {
                id: "b",
                text: "Ignore mistakes",
              },
              {
                id: "c",
                text: "Forget what happened",
              },
              {
                id: "d",
                text: "Blame others",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflect",
                statement: "Think back on actions.",
              },
            ],
            steps: [
              {
                reasoning: "Reflection = reviewing your experience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Think back on what you did",
          },
        },
        {
          id: "cipg-u1-rf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two questions you could ask when reflecting on group work.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection questions",
                statement: "What worked, what didn't.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. what went well / what didn't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. what will I do next time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. what worked + next time",
          },
        },
        {
          id: "cipg-u1-rf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You lost a football match. Reflect: what might you do differently next time?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Learn from experience.",
              },
            ],
            steps: [
              {
                reasoning: "Honest assessment of what happened.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specific improvement plan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links reflection to future action.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Assessment + improvement plan",
          },
        },
        {
          id: "cipg-u1-rf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reflect, improve, mistake, next time. (b) Why is reflection important? (c) Reflect on a recent success. (d) Reflect on a recent mistake. (e) What three questions guide reflection? (f) How does reflection help learning? (g) Why is honest reflection hard? (h) Design a reflection journal format.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection",
                statement: "Review, learn, improve.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Turns experience into learning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid success reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid mistake reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) What worked/what didn't/next time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Identifies patterns, builds skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Requires honesty about weaknesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid journal format.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reflection, learning, improvement.",
          },
        },
        {
          id: "cipg-u1-rf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'mistake'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of homework",
              },
              {
                id: "b",
                text: "Something done very well",
              },
              {
                id: "c",
                text: "A lucky guess",
              },
              {
                id: "d",
                text: "Something done wrong",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mistake",
                statement: "Something done wrong.",
              },
            ],
            steps: [
              {
                reasoning: "A mistake is an error in what you did.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Something done wrong",
          },
        },
        {
          id: "cipg-u1-rf-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student reflected on their day: 2 things went well and 3 things could be improved. (a) How many things went well? (b) How many things could be improved?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
              {
                label: "b",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Noting successes and improvements.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2 things went well.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 things to improve.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "2 well; 3 to improve",
          },
        },
        {
          id: "cipg-u1-rf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question best helps with reflection?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Was it fun?",
              },
              {
                id: "b",
                text: "What will I do next time?",
              },
              {
                id: "c",
                text: "When does it end?",
              },
              {
                id: "d",
                text: "Who is to blame?",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection questions",
                statement: "Focus on improvement.",
              },
            ],
            steps: [
              {
                reasoning: "'Next time' questions drive improvement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "What will I do next time?",
          },
        },
        {
          id: "cipg-u1-rf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In his reflection, Tom wrote about 4 successes and 2 mistakes. (a) How many successes did he write about? (b) How many more successes than mistakes did he write about?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Counting successes and mistakes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 successes.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 - 2 = 2 more successes.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "4 successes; 2 more",
          },
        },
        {
          id: "cipg-u1-rf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does reflection help you improve?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It replaces practice",
              },
              {
                id: "b",
                text: "It lets you forget what happened",
              },
              {
                id: "c",
                text: "It turns experience into learning for next time",
              },
              {
                id: "d",
                text: "It proves mistakes do not matter",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection",
                statement: "Experience becomes learning.",
              },
            ],
            steps: [
              {
                reasoning: "Reviewing what happened guides future improvement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Turns experience into learning",
          },
        },
        {
          id: "cipg-u1-rf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class did 6 projects. After each project, students noted 1 success and 1 thing to improve. (a) How many successes were noted in total? (b) How many improvements were noted in total? (c) How many reflection notes were written in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 6,
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
                name: "Reflection",
                statement: "Counting reflection notes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 projects x 1 success = 6.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 6 projects x 1 improvement = 6.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 + 6 = 12 notes.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "6, 6, 12",
          },
        },
        {
          id: "cipg-u1-rf-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'honest reflection' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing the longest possible answer",
              },
              {
                id: "b",
                text: "Only writing about successes",
              },
              {
                id: "c",
                text: "Admitting what went wrong as well as what went well",
              },
              {
                id: "d",
                text: "Blaming others for mistakes",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Honest reflection",
                statement: "Truthful review of actions.",
              },
            ],
            steps: [
              {
                reasoning: "Honesty means facing both wins and mistakes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Admitting wins and mistakes",
          },
        },
        {
          id: "cipg-u1-rf-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A reflection journal has 10 entries: 7 are about mistakes and 3 are about successes. (a) How many entries are about mistakes? (b) How many are about successes? (c) How many more entries are about mistakes than successes?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 7,
              },
              {
                label: "b",
                answer: 3,
              },
              {
                label: "c",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Counting journal entries.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 7 mistake entries.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 success entries.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 7 - 3 = 4 more mistake entries.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "7, 3, 4",
          },
        },
        {
          id: "cipg-u1-rf-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "After giving a poor presentation, what is the best place to start reflecting?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Never presenting again",
              },
              {
                id: "b",
                text: "Blaming the audience",
              },
              {
                id: "c",
                text: "Pretending it went perfectly",
              },
              {
                id: "d",
                text: "Thinking honestly about what went wrong",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Honest review first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Honest assessment of what happened guides improvement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Honest review of what went wrong",
          },
        },
        {
          id: "cipg-u1-rf-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A team reflected on their project: 3 members said what worked, 3 said what did not work and 2 said what they would do next time. (a) How many said what worked? (b) How many said what did not work? (c) How many said what they would do next time? (d) How many reflections were given in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 3,
              },
              {
                label: "c",
                answer: 2,
              },
              {
                label: "d",
                answer: 8,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Counting team reflections.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 said what worked.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 said what did not work.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 2 said next steps.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 3 + 3 + 2 = 8 reflections.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "3, 3, 2, 8",
          },
        },
        {
          id: "cipg-u1-rf-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'next time' mean in reflection?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A future school year",
              },
              {
                id: "b",
                text: "A different subject",
              },
              {
                id: "c",
                text: "The next person to speak",
              },
              {
                id: "d",
                text: "What you would do differently later",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Next time",
                statement: "Future improvement plan.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Next time' describes how you will act differently.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "What you would do differently",
          },
        },
        {
          id: "cipg-u1-rf-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define reflect, improve, mistake, next time. (b) Why is reflection important? (c) Reflect on a recent success of yours. (d) Reflect on a recent mistake you made. (e) What three questions guide good reflection? (f) How does reflection help your learning? (g) Why can honest reflection be difficult? (h) Design a simple reflection journal format.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection",
                statement: "Review, learn, improve.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Turns experience into learning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid success reflection with what worked.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid mistake reflection with improvement plan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) What worked? What did not? What next time?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Identifies patterns and builds skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Requires honesty about weaknesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Valid journal format with the three key questions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reflection, learning, improvement.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-rf-notes",
      title: "Reflection — notes",
      summary:
        "Reflect = think back on what you did. Ask what worked, what didn't, what next time.",
      sections: [
        {
          heading: "Key idea",
          body: "Reflection turns experience into improvement.",
        },
        {
          heading: "Questions",
          body: "What went well? What didn't? What next time?",
        },
      ],
    },
  ],
};
