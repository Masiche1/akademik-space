import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cipg-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 5 — Deep Analysis of Global Issues",
  goal: "I CAN analyse a global issue from multiple angles — causes, effects, stakeholders and solutions.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 5: analysis",
    "Cambridge Primary Global Perspectives 0838 strand: Analysis",
  ],
  stage: 5,
  vocabulary: [
    {
      term: "Stakeholder",
      definition: "A person or group affected by or involved in an issue.",
    },
    { term: "Cause", definition: "What makes something happen." },
    { term: "Effect", definition: "What happens as a result." },
    { term: "Consequence", definition: "A result or outcome of an action." },
    {
      term: "Root cause",
      definition: "The deepest underlying reason for a problem.",
    },
    {
      term: "Multi-perspective",
      definition: "Looking at an issue from several angles.",
    },
  ],
  concepts: [
    {
      id: "cipg-u2-s5-analyse",
      title: "Deep issue analysis",
      skill:
        "Analyse causes, effects, stakeholders and solutions at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Multiple angles",
            body: "Deep analysis looks at an issue from many sides: What causes it? Who is affected (stakeholders)? What are the effects? What solutions exist? Climate change affects farmers, cities, animals — each sees it differently.",
          },
          {
            heading: "Root causes",
            body: "Surface causes (plastic in ocean) vs root causes (overproduction, poor waste management). Solutions that only treat symptoms fail; addressing root causes creates lasting change.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder", statement: "person/group affected by issue" },
          { name: "Root cause", statement: "deepest underlying reason" },
          {
            name: "Analysis",
            statement: "causes + effects + stakeholders + solutions",
          },
        ],
        workedExample: {
          problem:
            "Analyse 'food waste' — causes, effects, stakeholders, one solution.",
          solution:
            "Causes: overbuying, cosmetic standards. Effects: landfill, methane, hunger. Stakeholders: shoppers, farmers, charities. Solution: better portion planning + food donation.",
        },
      },
      questions: [
        {
          id: "cipg-u2-dan-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stakeholder?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of chart",
              },
              {
                id: "b",
                text: "A company share",
              },
              {
                id: "c",
                text: "A school subject",
              },
              {
                id: "d",
                text: "A person or group affected by an issue",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected party.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stakeholder = anyone impacted by/involved in issue.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Affected person/group",
          },
        },
        {
          id: "cipg-u2-dan-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four angles for analysing a global issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analysis angles",
                statement: "Causes, effects, stakeholders, solutions.",
              },
            ],
            steps: [
              {
                reasoning: "Causes and effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stakeholders and solutions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "causes+effects+stakeholders+solutions",
          },
        },
        {
          id: "cipg-u2-dan-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a cause and a root cause? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Causes",
                statement: "Surface vs underlying.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cause = immediate reason; root = deepest underlying.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. plastic in ocean (cause) vs overproduction/waste systems (root).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Root causes enable lasting solutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Immediate vs underlying reason",
          },
        },
        {
          id: "cipg-u2-dan-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define stakeholder, cause, effect, consequence, root cause, multi-perspective. (b) Analyse 'endangered animals': causes, effects, stakeholders. (c) Identify one root cause. (d) Who are the key stakeholders? (e) Why consider multiple perspectives? (f) Propose two solutions. (g) Why do surface solutions fail? (h) Design an analysis framework for any issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Issue analysis",
                statement: "Angles, causes, stakeholders.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid causes, effects, stakeholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid root cause identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid stakeholders: animals, humans, governments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Different views reveal complexity/solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Two plausible solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Symptoms return without root fix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Reusable analysis framework.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deep issue analysis: causes, effects, stakeholders, solutions.",
          },
        },
        {
          id: "cipg-u2-dan-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'cause'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A person affected by an issue",
              },
              {
                id: "b",
                text: "A possible solution",
              },
              {
                id: "c",
                text: "What happens as a result",
              },
              {
                id: "d",
                text: "What makes something happen",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cause",
                statement: "What makes something happen.",
              },
            ],
            steps: [
              {
                reasoning: "A cause is the reason something happens.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "What makes something happen",
          },
        },
        {
          id: "cipg-u2-dan-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "While analysing an issue, a student found 3 causes and 2 effects. (a) How many causes were found? (b) How many effects were found?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
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
                name: "Analysis",
                statement: "Identifying causes and effects.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 causes found.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 2 effects found.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "3 causes; 2 effects",
          },
        },
        {
          id: "cipg-u2-dan-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a stakeholder in 'plastic pollution'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Only plastic factories",
              },
              {
                id: "b",
                text: "Only scientists",
              },
              {
                id: "c",
                text: "Nothing is affected",
              },
              {
                id: "d",
                text: "Marine animals",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected person or group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marine animals are directly affected by plastic pollution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Marine animals",
          },
        },
        {
          id: "cipg-u2-dan-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A deep analysis of an issue found 5 causes and 7 effects. (a) How many causes were found? (b) How many more effects than causes were found?",
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
                name: "Analysis",
                statement: "Comparing causes and effects.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 5 causes.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 7 - 5 = 2 more effects.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "5 causes; 2 more effects",
          },
        },
        {
          id: "cipg-u2-dan-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'root cause'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The first thing you notice",
              },
              {
                id: "b",
                text: "A quick temporary fix",
              },
              {
                id: "c",
                text: "The deepest underlying reason for a problem",
              },
              {
                id: "d",
                text: "The loudest complaint",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Root cause",
                statement: "Deepest underlying reason.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The root cause is what drives the problem at its core.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Deepest underlying reason",
          },
        },
        {
          id: "cipg-u2-dan-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analysing 'food waste', a team identified 4 stakeholders, proposed 3 solutions and noted 6 effects. (a) How many stakeholders were identified? (b) How many solutions were proposed? (c) How many effects were noted?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 3,
              },
              {
                label: "c",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Issue analysis",
                statement: "Stakeholders, solutions, effects.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 stakeholders.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 solutions.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 effects.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "4, 3, 6",
          },
        },
        {
          id: "cipg-u2-dan-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do solutions that only treat symptoms usually fail?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They work better than root-cause solutions",
              },
              {
                id: "b",
                text: "They are always too expensive",
              },
              {
                id: "c",
                text: "They are too difficult to explain",
              },
              {
                id: "d",
                text: "The root cause remains and the problem returns",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Root causes",
                statement: "Symptom fixes do not last.",
              },
            ],
            steps: [
              {
                reasoning: "Without fixing the root cause, problems come back.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Problem returns without root fix",
          },
        },
        {
          id: "cipg-u2-dan-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A group analysed an issue and identified 8 surface causes. Only 1 of them was the true root cause. (a) How many surface causes were identified? (b) How many root causes were found? (c) How many surface causes were not the root cause?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 8,
              },
              {
                label: "b",
                answer: 1,
              },
              {
                label: "c",
                answer: 7,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Root causes",
                statement: "Distinguishing surface from root.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 8 surface causes.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 1 root cause.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 8 - 1 = 7 non-root causes.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "8, 1, 7",
          },
        },
        {
          id: "cipg-u2-dan-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'multi-perspective' analysis mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Avoiding difficult questions",
              },
              {
                id: "b",
                text: "Looking at an issue from several different angles",
              },
              {
                id: "c",
                text: "Only seeing one side of an issue",
              },
              {
                id: "d",
                text: "Using only one source",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multi-perspective",
                statement: "Several angles of analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multi-perspective means examining multiple viewpoints.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Several angles of analysis",
          },
        },
        {
          id: "cipg-u2-dan-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analysing 'school food waste': stakeholders are students, cooks, the canteen manager and parents. Causes found: 5. Effects found: 6. (a) How many stakeholder groups are there? (b) How many more effects than causes were found? (c) How many cause-and-effect points were found in total? (d) If 2 more stakeholders are added, how many stakeholder groups will there be?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 1,
              },
              {
                label: "c",
                answer: 11,
              },
              {
                label: "d",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Issue analysis",
                statement: "Stakeholders, causes, effects.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 stakeholder groups.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 6 - 5 = 1 more effect.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 5 + 6 = 11 points.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 4 + 2 = 6 stakeholder groups.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "4, 1, 11, 6",
          },
        },
        {
          id: "cipg-u2-dan-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a 'consequence'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A person who is affected",
              },
              {
                id: "b",
                text: "A cause of a problem",
              },
              {
                id: "c",
                text: "A result or outcome of an action",
              },
              {
                id: "d",
                text: "A type of solution",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consequence",
                statement: "Result of an action.",
              },
            ],
            steps: [
              {
                reasoning: "A consequence is what follows from something done.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Result of an action",
          },
        },
        {
          id: "cipg-u2-dan-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define stakeholder, cause, effect, consequence, root cause, multi-perspective. (b) Analyse 'endangered animals': give causes, effects and stakeholders. (c) Identify one root cause. (d) Who are the key stakeholders? (e) Why consider multiple perspectives? (f) Propose two solutions. (g) Why do surface-level solutions fail? (h) Design an analysis framework that could be used for any global issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Issue analysis",
                statement: "Angles, causes, stakeholders.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid causes, effects, stakeholders for endangered animals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid root cause identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid stakeholders: animals, humans, governments, organisations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Different views reveal complexity and possible solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Two plausible solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Symptoms return without addressing the root cause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Reusable analysis framework with all four angles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deep issue analysis: causes, effects, stakeholders, solutions.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-dan-notes",
      title: "Deep analysis — notes",
      summary:
        "Analyse causes, effects, stakeholders, root causes and solutions from multiple angles.",
      sections: [
        {
          heading: "Key idea",
          body: "Surface fixes fail; root causes need addressing.",
        },
        {
          heading: "Stakeholders",
          body: "Different groups experience issues differently.",
        },
      ],
    },
  ],
};
