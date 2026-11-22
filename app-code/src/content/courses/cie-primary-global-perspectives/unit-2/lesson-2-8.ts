import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cipg-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 5 — Evaluating Solutions to Global Problems",
  goal: "I CAN evaluate proposed solutions to global issues for feasibility, impact and fairness.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 5: evaluation",
    "Cambridge Primary Global Perspectives 0838 strand: Evaluation",
  ],
  stage: 5,
  vocabulary: [
    { term: "Feasible", definition: "Possible to actually do." },
    { term: "Sustainable", definition: "Can continue long-term without harm." },
    { term: "Trade-off", definition: "Giving up one thing to get another." },
    {
      term: "Unintended consequence",
      definition: "An unexpected result of a solution.",
    },
    {
      term: "Cost-benefit",
      definition: "Weighing what a solution costs vs gains.",
    },
    { term: "Equity", definition: "Fairness — does everyone benefit equally?" },
  ],
  concepts: [
    {
      id: "cipg-u2-s5-eval",
      title: "Evaluating solutions",
      skill:
        "Assess solutions for feasibility, impact, fairness at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Good solutions",
            body: "Evaluate solutions on: Is it feasible (can we actually do it)? Is it sustainable (long-term)? Is it fair (does everyone benefit)? What are the trade-offs and unintended consequences?",
          },
          {
            heading: "Trade-offs",
            body: "Every solution has costs: banning cars reduces pollution but limits travel; organic food is healthier but expensive. Good evaluation weighs costs vs benefits honestly.",
          },
        ],
        keyFormulas: [
          { name: "Feasible", statement: "can actually be done" },
          { name: "Trade-off", statement: "cost given for benefit" },
          { name: "Equity", statement: "fairness across all affected" },
        ],
        workedExample: {
          problem:
            "Evaluate 'ban all plastic bags' as a solution to plastic pollution.",
          solution:
            "Pros: reduces waste. Cons: cost to alternatives, affects small businesses, may shift problem. Feasible if alternatives exist; needs phased rollout.",
        },
      },
      questions: [
        {
          id: "cipg-u2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a solution feasible?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Everyone agrees",
              },
              {
                id: "b",
                text: "It can actually be done with available resources",
              },
              {
                id: "c",
                text: "It's free",
              },
              {
                id: "d",
                text: "It sounds exciting",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasible",
                statement: "Practical to implement.",
              },
            ],
            steps: [
              {
                reasoning: "Feasible = realistically achievable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Can actually be done",
          },
        },
        {
          id: "cipg-u2-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a trade-off? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Cost for benefit.",
              },
            ],
            steps: [
              {
                reasoning: "Giving up one thing to gain another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. cycling saves money but takes longer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cost for benefit; e.g. cycling",
          },
        },
        {
          id: "cipg-u2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'plant more trees to fight climate change' — one benefit, one limitation, one unintended consequence.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solution evaluation",
                statement: "Pros, cons, unintended.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: absorbs CO₂, cools areas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitation: takes time, needs land/water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unintended: wrong species could harm ecosystems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Benefit+limitation+unintended",
          },
        },
        {
          id: "cipg-u2-ev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define feasible, sustainable, trade-off, unintended consequence, cost-benefit, equity. (b) Evaluate 'ban homework' for student wellbeing. (c) What is a trade-off here? (d) Who might be disadvantaged? (e) What unintended consequence could arise? (f) Is it feasible? (g) Compare two solutions to plastic pollution. (h) Design an evaluation framework for any solution.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solution evaluation",
                statement: "Feasibility, trade-offs, equity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Balanced evaluation of homework ban.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Wellbeing vs learning/revision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Students needing practice, parents wanting structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Less practice, parent frustration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Politically difficult but possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Two solutions compared fairly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Reusable evaluation framework.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evaluating solutions: feasibility, trade-offs, equity.",
          },
        },
        {
          id: "cipg-u2-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'equity'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "How cheap a solution is",
              },
              {
                id: "b",
                text: "Fairness — does everyone benefit equally?",
              },
              {
                id: "c",
                text: "How popular a solution is",
              },
              {
                id: "d",
                text: "How fast a solution works",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equity",
                statement: "Fairness across all affected.",
              },
            ],
            steps: [
              {
                reasoning: "Equity means benefits and costs are shared fairly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fairness for all affected",
          },
        },
        {
          id: "cipg-u2-ev-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A team evaluated 3 solutions. Solution A scored 4 out of 5 and Solution B scored 3 out of 5. (a) What did Solution A score? (b) What did Solution B score?",
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
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Scoring solutions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Solution A scored 4.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Solution B scored 3.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "4; 3",
          },
        },
        {
          id: "cipg-u2-ev-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'unintended consequence'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A planned benefit",
              },
              {
                id: "b",
                text: "A type of cost-benefit score",
              },
              {
                id: "c",
                text: "The main goal of a solution",
              },
              {
                id: "d",
                text: "An unexpected result of a solution",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unintended consequence",
                statement: "Unexpected side effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unintended consequences are surprises caused by the solution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unexpected side effect",
          },
        },
        {
          id: "cipg-u2-ev-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solution costs $20 to install and saves $50 over one year. (a) How much does it cost? (b) How much does it save?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 20,
                unit: "$",
              },
              {
                label: "b",
                answer: 50,
                unit: "$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost-benefit",
                statement: "Costs versus gains.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Costs $20.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Saves $50.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "$20; $50",
          },
        },
        {
          id: "cipg-u2-ev-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'trade-off'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of solution scoring",
              },
              {
                id: "b",
                text: "Getting everything for free",
              },
              {
                id: "c",
                text: "Giving up one thing to get another",
              },
              {
                id: "d",
                text: "A surprise side effect",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Cost given for benefit.",
              },
            ],
            steps: [
              {
                reasoning: "Every benefit usually costs something else.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cost given for benefit",
          },
        },
        {
          id: "cipg-u2-ev-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solution was scored on three criteria: feasibility 4, sustainability 3 and fairness 5. (a) What was the feasibility score? (b) What was the sustainability score? (c) What was the fairness score?",
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
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Scoring criteria.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Feasibility = 4.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Sustainability = 3.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) Fairness = 5.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "4, 3, 5",
          },
        },
        {
          id: "cipg-u2-ev-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'cost-benefit analysis' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ignoring all the benefits",
              },
              {
                id: "b",
                text: "Choosing the cheapest option always",
              },
              {
                id: "c",
                text: "Counting only the costs",
              },
              {
                id: "d",
                text: "Weighing what a solution costs against what it gains",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cost-benefit",
                statement: "Costs versus gains.",
              },
            ],
            steps: [
              {
                reasoning: "Cost-benefit weighs both sides honestly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Costs versus gains",
          },
        },
        {
          id: "cipg-u2-ev-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solution X has a benefit score of 8 and a cost score of 2. Solution Y has a benefit score of 5 and a cost score of 5. (a) What is X's benefit score? (b) What is Y's benefit score? (c) By how much does X's benefit exceed Y's?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 8,
              },
              {
                label: "b",
                answer: 5,
              },
              {
                label: "c",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost-benefit",
                statement: "Comparing solution scores.",
              },
            ],
            steps: [
              {
                reasoning: "(a) X benefit = 8.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Y benefit = 5.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 8 - 5 = 3 more benefit.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "8, 5, 3",
          },
        },
        {
          id: "cipg-u2-ev-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which solution is most sustainable?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "One that uses all available resources at once",
              },
              {
                id: "b",
                text: "One that only helps one person",
              },
              {
                id: "c",
                text: "One that can continue long-term without causing harm",
              },
              {
                id: "d",
                text: "One that works for just one week",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable",
                statement: "Long-term without harm.",
              },
            ],
            steps: [
              {
                reasoning: "Sustainability means lasting, harmless change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Lasts long-term without harm",
          },
        },
        {
          id: "cipg-u2-ev-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A solution is evaluated on 4 criteria: feasible, sustainable, fair and affordable. The scores are 5, 4, 3 and 4. (a) What is the total score? (b) What is the highest criterion score? (c) What is the lowest criterion score? (d) How many criteria are used?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 16,
              },
              {
                label: "b",
                answer: 5,
              },
              {
                label: "c",
                answer: 3,
              },
              {
                label: "d",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Scoring across criteria.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 5 + 4 + 3 + 4 = 16 total.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Highest = 5.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) Lowest = 3.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 4 criteria.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "16, 5, 3, 4",
          },
        },
        {
          id: "cipg-u2-ev-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it important to look for unintended consequences of a solution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It removes the need for benefits",
              },
              {
                id: "b",
                text: "Good solutions can create unexpected problems elsewhere",
              },
              {
                id: "c",
                text: "It makes the evaluation longer only",
              },
              {
                id: "d",
                text: "It proves all solutions are bad",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Check for side effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unexpected problems can undo a solution's benefits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unexpected problems can arise",
          },
        },
        {
          id: "cipg-u2-ev-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define feasible, sustainable, trade-off, unintended consequence, cost-benefit, equity. (b) Evaluate 'ban homework' for student wellbeing. (c) What is the main trade-off? (d) Who might be disadvantaged? (e) What unintended consequence could arise? (f) Is it feasible? (g) Compare two solutions to plastic pollution fairly. (h) Design an evaluation framework usable for any proposed solution.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solution evaluation",
                statement: "Feasibility, trade-offs, equity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Balanced evaluation of homework ban.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Wellbeing versus learning and revision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Students needing practice; parents wanting structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Less practice; parent frustration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Politically difficult but possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Two solutions compared fairly across criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Reusable evaluation framework with all criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evaluating solutions: feasibility, trade-offs, equity.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-ev-notes",
      title: "Evaluating solutions — notes",
      summary:
        "Check feasibility, sustainability, equity. Weigh trade-offs and unintended consequences.",
      sections: [
        {
          heading: "Key idea",
          body: "Good solutions balance benefits and costs across all stakeholders.",
        },
        {
          heading: "Watch",
          body: "Unintended consequences can undo good intentions.",
        },
      ],
    },
  ],
};
