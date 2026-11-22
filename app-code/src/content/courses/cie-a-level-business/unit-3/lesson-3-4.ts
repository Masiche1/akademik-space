import type { Lesson } from "../../../types.ts";

export const lesson394: Lesson = {
  id: "ciealbus-u3-lesson-3-4",
  code: "3-4",
  title: "Business Decisions and Decision-Making",
  goal: "I CAN explain decision-making models and factors influencing business decisions.",
  standards: ["Cambridge A Level Business 9707", "Paper 3: decision-making"],

  vocabulary: [
    {
      term: "Decision-making",
      definition: "Process of choosing between alternatives.",
    },
    {
      term: "Rational decision-making",
      definition: "Systematic analysis of options.",
    },
    {
      term: "Bounded rationality",
      definition: "Limited information/cognitive capacity.",
    },
    { term: "Risk", definition: "Uncertainty with known probabilities." },
    { term: "Uncertainty", definition: "Unknown probabilities/outcomes." },
    {
      term: "Decision tree",
      definition: "Visual representation of choices and outcomes.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u3-s4-dec",
      title: "Decision-making",
      skill: "Analyse decision-making processes.",
      lesson: {
        sections: [
          {
            heading: "Decision models",
            body: "Rational: identify problem, gather info, evaluate options, choose best. Bounded rationality: limited info/time means satisficing (good enough) not optimising.",
          },
          {
            heading: "Risk and uncertainty",
            body: "Risk: known probabilities — can calculate expected value. Uncertainty: unknown probabilities — judgment required. Decision trees map choices/outcomes.",
          },
        ],
        keyFormulas: [
          { name: "Rational", statement: "systematic analysis" },
          { name: "Satisficing", statement: "good enough choice" },
          { name: "Decision tree", statement: "choices/outcomes map" },
        ],
        workedExample: {
          problem:
            "A business must choose between two projects with different risks. How decide?",
          solution:
            "Evaluate expected value (probability × outcome), risk tolerance, strategic fit. Decision tree helps visualise options.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-dm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is rational decision-making?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Random choice",
              },
              {
                id: "b",
                text: "Systematic analysis of options",
              },
              {
                id: "c",
                text: "Gut feeling",
              },
              {
                id: "d",
                text: "Following rules blindly",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rational",
                statement: "Systematic analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Rational = systematic option analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Systematic analysis",
          },
        },
        {
          id: "ciealbus-u3-dm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between risk and uncertainty?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Risk vs uncertainty",
                statement: "Known vs unknown.",
              },
            ],
            steps: [
              {
                reasoning: "Risk: known probabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Uncertainty: unknown probabilities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Known vs unknown",
          },
        },
        {
          id: "ciealbus-u3-dm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is satisficing? Why do businesses satisfice?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satisficing",
                statement: "Good enough.",
              },
            ],
            steps: [
              {
                reasoning: "Choosing good enough rather than optimal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limited info/time prevents full optimisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bounded rationality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Good enough choice",
          },
        },
        {
          id: "ciealbus-u3-dm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decision-making, rational decision-making, bounded rationality, risk, uncertainty, decision tree. (b) What is rational decision-making? (c) What is bounded rationality? (d) What is satisficing? (e) What is a decision tree? (f) What is the difference between risk and uncertainty? (g) How do businesses make decisions? (h) Evaluate whether businesses should aim for optimal or satisfactory decisions.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Decision-making",
                statement: "Models, factors.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Systematic analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Limited rationality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Good enough choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Choices/outcomes map.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Known vs unknown probabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Analysis, judgment, experience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decision-making models.",
          },
        },
        {
          id: "ciealbus-u3-dm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Satisficing in decision-making means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "making decisions randomly",
              },
              {
                id: "b",
                text: "always choosing the optimal option",
              },
              {
                id: "c",
                text: "choosing the first option that is good enough",
              },
              {
                id: "d",
                text: "avoiding any decision",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satisficing",
                statement: "Good enough choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Satisficing means accepting a satisfactory option rather than searching exhaustively for the best one.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** choosing the first option that is good enough",
          },
        },
        {
          id: "ciealbus-u3-dm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A project has a 60% chance of a $100,000 profit and a 40% chance of a $20,000 loss. (a) Calculate the expected value of the profitable outcome. (b) Calculate the expected value of the loss outcome.",
          parts: [
            {
              label: "a",
              prompt: "Expected value of profit outcome",
              marks: 1,
            },
            { label: "b", prompt: "Expected value of loss outcome", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60000, unit: "$" },
              { label: "b", answer: -8000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expected value",
                statement: "EV = probability × outcome.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "EV of profit = 0.60 × 100000 = 60000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "EV of loss = 0.40 × (-20000) = -8000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $60000; b = -$8000",
          },
        },
        {
          id: "ciealbus-u3-dm-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a decision tree, and what is it used for?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decision tree",
                statement: "Choices/outcomes map.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A decision tree is a diagram showing the sequence of choices, chance events and resulting outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It helps managers compare options by mapping possible results and probabilities before deciding.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Diagram of choices, probabilities and outcomes",
          },
        },
        {
          id: "ciealbus-u3-dm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bounded rationality suggests that managers typically:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "ignore all data",
              },
              {
                id: "b",
                text: "choose a satisfactory option due to limited information and time",
              },
              {
                id: "c",
                text: "always find the optimal solution",
              },
              {
                id: "d",
                text: "delegate every decision",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bounded rationality",
                statement: "Limited information and cognitive capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Managers lack the time, information and mental capacity to evaluate every option, so they satisfice rather than optimise.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** choose a satisfactory option due to limited information and time",
          },
        },
        {
          id: "ciealbus-u3-dm-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Option X offers a certain profit of $50,000. Option Y offers a 50% chance of $120,000 and a 50% chance of $10,000. (a) Calculate the expected value of Option Y. (b) Calculate how much Y's expected value exceeds X's. (c) State which option a risk-neutral decision-maker would choose, answering 1 for Y and 0 for X.",
          parts: [
            { label: "a", prompt: "Expected value of Y", marks: 1 },
            { label: "b", prompt: "Y minus X expected value", marks: 1 },
            { label: "c", prompt: "Chosen option (1 = Y, 0 = X)", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 65000, unit: "$" },
              { label: "b", answer: 15000, unit: "$" },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expected value decisions",
                statement: "Risk-neutral chooses highest expected value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "EV of Y = 0.5 × 120000 + 0.5 × 10000 = 60000 + 5000 = 65000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Difference = 65000 - 50000 = 15000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Y has the higher expected value, so a risk-neutral manager chooses Y — answer 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $65000; b = $15000; c = 1",
          },
        },
        {
          id: "ciealbus-u3-dm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why real business decisions often involve uncertainty rather than risk.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Uncertainty",
                statement: "Unknown probabilities and outcomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many business decisions involve new markets, technologies or competitors whose outcomes cannot be assigned probabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The future is influenced by unpredictable events — political changes, consumer trends, rival actions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Under uncertainty managers must rely on judgement, experience and scenarios rather than expected-value calculation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unknown probabilities force judgement over calculation",
          },
        },
        {
          id: "ciealbus-u3-dm-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A manager accepts the first supplier whose proposal meets minimum standards rather than evaluating all bids. This behaviour is called:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "optimising",
              },
              {
                id: "b",
                text: "satisficing",
              },
              {
                id: "c",
                text: "maximising",
              },
              {
                id: "d",
                text: "forecasting",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satisficing",
                statement: "Accepting a good-enough option.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stopping at the first acceptable option rather than searching for the best is the essence of satisficing under bounded rationality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** satisficing",
          },
        },
        {
          id: "ciealbus-u3-dm-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A project has a 30% chance of a $200,000 profit and a 70% chance of a $40,000 profit, with certain costs of $20,000. (a) Calculate the expected gross profit before costs. (b) Calculate the expected net profit after costs. (c) A certain alternative offers a net profit of $65,000. State whether the project has the higher expected value, answering 1 for yes and 0 for no.",
          parts: [
            { label: "a", prompt: "Expected gross profit", marks: 1 },
            { label: "b", prompt: "Expected net profit", marks: 1 },
            {
              label: "c",
              prompt: "Is project EV higher? (1 = yes, 0 = no)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 88000, unit: "$" },
              { label: "b", answer: 68000, unit: "$" },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expected value",
                statement: "EV = Σ probability × outcome.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "EV gross = 0.3 × 200000 + 0.7 × 40000 = 60000 + 28000 = 88000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "EV net = 88000 - 20000 = 68000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "68000 > 65000, so the project has the higher expected value — answer 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "However, a risk-averse manager might still prefer the certain $65,000 given the project's wide outcome range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $88000; b = $68000; c = 1",
          },
        },
        {
          id: "ciealbus-u3-dm-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A decision is taken where the possible outcomes are known but their probabilities are not. This is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "risk",
              },
              {
                id: "b",
                text: "uncertainty",
              },
              {
                id: "c",
                text: "certainty",
              },
              {
                id: "d",
                text: "bounded rationality",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Uncertainty",
                statement: "Unknown probabilities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Risk involves known probabilities; uncertainty is when probabilities cannot be estimated — that is why it is the correct description here.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** uncertainty",
          },
        },
        {
          id: "ciealbus-u3-dm-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Option P offers a 70% chance of an $80,000 profit and a 30% chance of a $20,000 loss. (a) Calculate the expected value of Option P. (b) Calculate the worst-case outcome of Option P.",
          parts: [
            { label: "a", prompt: "Expected value", marks: 1 },
            { label: "b", prompt: "Worst-case outcome", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50000, unit: "$" },
              { label: "b", answer: -20000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expected value and risk",
                statement: "EV = Σ probability × outcome.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "EV = 0.7 × 80000 + 0.3 × (-20000) = 56000 - 6000 = 50000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Worst case = the loss outcome of -$20,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $50000; b = -$20000",
          },
        },
        {
          id: "ciealbus-u3-dm-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A risk-averse manager faces two projects with the same expected value. Which is the manager most likely to choose?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "the project with the highest possible profit",
              },
              {
                id: "b",
                text: "the project with the widest range of outcomes",
              },
              {
                id: "c",
                text: "a random choice between them",
              },
              {
                id: "d",
                text: "the project with the more predictable outcomes",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Risk aversion",
                statement: "Risk-averse prefer lower variance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With equal expected values, a risk-averse manager prefers the option with less uncertainty — more predictable outcomes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** the project with the more predictable outcomes",
          },
        },
        {
          id: "ciealbus-u3-dm-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain how a decision tree could help a business decide whether to enter a new overseas market. (b) Distinguish between risk and uncertainty in this context. (c) Explain why the firm might satisfice rather than find the optimal entry strategy. (d) Evaluate whether a quantitative or qualitative approach is more appropriate for this decision.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Strategic decision-making",
                statement: "Decision trees map choices and outcomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) A decision tree maps entry options, probabilities of outcomes such as demand success or failure, and the resulting payoffs for comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Risk: known probabilities, e.g. historical market data allowing expected-value calculation; uncertainty: unknowable outcomes like political change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Limited information, time and managerial capacity mean the firm cannot evaluate every option, so it accepts a satisfactory strategy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Quantitative tools suit measurable risks; qualitative judgement is needed for uncertain, strategic factors — a hybrid is usually best.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: combine expected-value analysis where probabilities exist with judgement for uncertainty.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Use decision trees for known risks, judgement for uncertainty",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-dm-notes",
      title: "Decision-making — notes",
      summary:
        "Rational vs bounded rationality. Risk=known probabilities, uncertainty=unknown.",
      sections: [
        {
          heading: "Key idea",
          body: "Real-world decisions are constrained by information, time, cognitive limits.",
        },
        {
          heading: "Tools",
          body: "Decision trees, expected value calculations aid complex choices.",
        },
      ],
    },
  ],
};
