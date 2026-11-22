import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cipg-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 3 — Seeing Different Viewpoints",
  goal: "I CAN recognise that people see things differently and identify different perspectives.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 3: analysis",
    "Cambridge Primary Global Perspectives 0838 strand: Analysis",
  ],
  stage: 3,
  vocabulary: [
    {
      term: "Perspective",
      definition: "The way someone sees or thinks about something.",
    },
    {
      term: "Viewpoint",
      definition: "An opinion or way of looking at an issue.",
    },
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
          {
            name: "Perspective",
            statement: "how someone sees/thinks about something",
          },
          {
            name: "Consider",
            statement: "think about other viewpoints before judging",
          },
        ],
        workedExample: {
          problem:
            "Your friend loves vegetables; you hate them. How might you both see the same dinner differently?",
          solution:
            "Your friend sees tasty healthy food; you see boring vegetables. Same dinner, different perspectives based on tastes and experiences.",
        },
      },
      questions: [
        {
          id: "cipg-u1-vp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a perspective?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A math formula",
              },
              {
                id: "b",
                text: "The way someone sees or thinks about something",
              },
              {
                id: "c",
                text: "A game score",
              },
              {
                id: "d",
                text: "A type of camera",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perspective",
                statement: "Personal viewpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Perspective = individual way of seeing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Personal way of seeing",
          },
        },
        {
          id: "cipg-u1-vp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give an example where two people might disagree about the same thing.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Different viewpoints",
                statement: "Same thing, different views.",
              },
            ],
            steps: [
              {
                reasoning: "Valid example: homework (fun vs boring).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains different perspectives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. homework views differ",
          },
        },
        {
          id: "cipg-u1-vp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might someone's perspective differ from yours? Give two reasons.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective causes",
                statement: "Background and experience.",
              },
            ],
            steps: [
              {
                reasoning: "Different experiences/backgrounds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different cultures, ages, beliefs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shapes how they see things.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Experience/culture differences",
          },
        },
        {
          id: "cipg-u1-vp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perspective and viewpoint. (b) Give an example of two perspectives on school uniforms. (c) Why do people disagree? (d) What should you do when someone disagrees with you? (e) How does considering other views help? (f) Can two people both be partly right? (g) Describe a time perspectives differed. (h) Why is respect important in discussions?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perspectives",
                statement: "Different views, respect.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Both definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) For: equality; against: self-expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Different backgrounds/experiences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Listen to their reasons first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Understand complexity, find common ground.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Yes — perspectives can overlap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Personal example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Enables fair discussion and learning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perspectives, disagreement, respect, understanding.",
          },
        },
        {
          id: "cipg-u1-vp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'viewpoint'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A school subject",
              },
              {
                id: "b",
                text: "A fact everyone agrees on",
              },
              {
                id: "c",
                text: "A type of window",
              },
              {
                id: "d",
                text: "An opinion or way of looking at an issue",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Viewpoint",
                statement: "Opinion on an issue.",
              },
            ],
            steps: [
              {
                reasoning: "A viewpoint is how someone thinks about an issue.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Opinion on an issue",
          },
        },
        {
          id: "cipg-u1-vp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A class discussed a topic: 6 students agreed with the statement and 4 disagreed. (a) How many students agreed? (b) How many students disagreed?",
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
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Viewpoints",
                statement: "Counting opinions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 students agreed.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 students disagreed.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "6 agreed; 4 disagreed",
          },
        },
        {
          id: "cipg-u1-vp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which might cause two people to see the same thing differently?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Different experiences and backgrounds",
              },
              {
                id: "b",
                text: "Being in the same room",
              },
              {
                id: "c",
                text: "Both using their eyes",
              },
              {
                id: "d",
                text: "Looking at it at the same time",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective causes",
                statement: "Experience shapes views.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different backgrounds create different perspectives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Different experiences and backgrounds",
          },
        },
        {
          id: "cipg-u1-vp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a class vote for 'best pet', 5 students chose dogs and 3 chose cats. (a) How many chose dogs? (b) How many more students chose dogs than cats?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
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
                name: "Viewpoints",
                statement: "Comparing opinions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 5 chose dogs.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 - 3 = 2 more for dogs.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "5 dogs; 2 more",
          },
        },
        {
          id: "cipg-u1-vp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "When someone disagrees with you, what is the best first step?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Agree with them to end the talk",
              },
              {
                id: "b",
                text: "Stop listening",
              },
              {
                id: "c",
                text: "Listen to their reasons",
              },
              {
                id: "d",
                text: "Tell them they are wrong immediately",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respectful discussion",
                statement: "Listen before judging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hearing their reasons helps you understand their view.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Listen to their reasons",
          },
        },
        {
          id: "cipg-u1-vp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A survey asked 9 people about homework: 4 said it is fun and 5 said it is boring. (a) How many said it is fun? (b) How many said it is boring? (c) How many people were surveyed in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 5,
              },
              {
                label: "c",
                answer: 9,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Viewpoints",
                statement: "Counting different opinions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 said fun.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 said boring.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 4 + 5 = 9 surveyed.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "4, 5, 9",
          },
        },
        {
          id: "cipg-u1-vp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why can two people both be partly right about the same issue?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Only one person can ever be right",
              },
              {
                id: "b",
                text: "Opinions are never true",
              },
              {
                id: "c",
                text: "Being right depends on who is louder",
              },
              {
                id: "d",
                text: "They may each see a different true part of the issue",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perspectives",
                statement: "Different views can overlap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different perspectives can each contain some truth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Each may see a true part",
          },
        },
        {
          id: "cipg-u1-vp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class has 20 pupils. 12 prefer city holidays and 8 prefer beach holidays. (a) How many prefer city holidays? (b) How many prefer beach holidays? (c) How many more prefer city holidays than beach holidays?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
              },
              {
                label: "b",
                answer: 8,
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
                name: "Viewpoints",
                statement: "Comparing preference groups.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 12 prefer city holidays.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 8 prefer beach holidays.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 12 - 8 = 4 more prefer city.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "12, 8, 4",
          },
        },
        {
          id: "cipg-u1-vp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should you consider other viewpoints before judging an issue?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It helps you understand the issue better and decide fairly",
              },
              {
                id: "b",
                text: "It proves you are always right",
              },
              {
                id: "c",
                text: "It makes discussions shorter only",
              },
              {
                id: "d",
                text: "It means you must agree with everyone",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Considering views",
                statement: "Think before judging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Considering other views reveals complexity and fairness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Understand better, decide fairly",
          },
        },
        {
          id: "cipg-u1-vp-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A discussion about homework had 3 groups of students: 6 were for homework, 5 were against it and 4 were neutral. (a) How many were for homework? (b) How many were against it? (c) How many were neutral? (d) How many students took part in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 5,
              },
              {
                label: "c",
                answer: 4,
              },
              {
                label: "d",
                answer: 15,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Viewpoints",
                statement: "Counting opinion groups.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 for homework.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 against.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 4 neutral.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 6 + 5 + 4 = 15 students.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "6, 5, 4, 15",
          },
        },
        {
          id: "cipg-u1-vp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does respect look like in a discussion?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Refusing to hear other views",
              },
              {
                id: "b",
                text: "Shouting until others stop",
              },
              {
                id: "c",
                text: "Listening to others even when you disagree",
              },
              {
                id: "d",
                text: "Only speaking when you agree",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respect",
                statement: "Listen to different views.",
              },
            ],
            steps: [
              {
                reasoning: "Respect means taking others' viewpoints seriously.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Listening even when disagreeing",
          },
        },
        {
          id: "cipg-u1-vp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define perspective and viewpoint. (b) Give an example of two different perspectives on school dinners. (c) Why do people disagree about things? (d) What should you do first when someone disagrees with you? (e) How does considering other views help you? (f) Can two people both be partly right? Explain. (g) Describe a time when two people saw the same thing differently. (h) Why is respect important in discussions?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perspectives",
                statement: "Different views, respect.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Both definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Two valid perspectives e.g. healthy vs tasty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Different backgrounds, experiences and beliefs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Listen to their reasons first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Understands complexity and helps fair decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Yes — perspectives can overlap and each hold some truth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid personal example of differing views.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Enables fair discussion and shared learning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perspectives, disagreement, respect, understanding.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-vp-notes",
      title: "Perspectives — notes",
      summary:
        "People see things differently based on experience/background. Consider other views before judging.",
      sections: [
        {
          heading: "Key idea",
          body: "Disagreement often comes from different perspectives, not wrongness.",
        },
        { heading: "Respect", body: "Listen first, then share your view." },
      ],
    },
  ],
};
