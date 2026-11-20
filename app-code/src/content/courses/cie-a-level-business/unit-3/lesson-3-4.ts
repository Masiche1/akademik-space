import type { Lesson } from "../../../types.ts";

export const lesson394: Lesson = {
  id: "ciealbus-u3-lesson-3-4",
  code: "3-4",
  title: "Business Decisions and Decision-Making",
  goal: "I CAN explain decision-making models and factors influencing business decisions.",
  standards: ["Cambridge A Level Business 9707", "Paper 3: decision-making"],
  
  vocabulary: [
    { term: "Decision-making", definition: "Process of choosing between alternatives." },
    { term: "Rational decision-making", definition: "Systematic analysis of options." },
    { term: "Bounded rationality", definition: "Limited information/cognitive capacity." },
    { term: "Risk", definition: "Uncertainty with known probabilities." },
    { term: "Uncertainty", definition: "Unknown probabilities/outcomes." },
    { term: "Decision tree", definition: "Visual representation of choices and outcomes." },
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
          problem: "A business must choose between two projects with different risks. How decide?",
          solution: "Evaluate expected value (probability × outcome), risk tolerance, strategic fit. Decision tree helps visualise options.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-dm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is rational decision-making?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Systematic analysis of options"
                    },
                    {
                              "id": "b",
                              "text": "Random choice"
                    },
                    {
                              "id": "c",
                              "text": "Gut feeling"
                    },
                    {
                              "id": "d",
                              "text": "Following rules blindly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rational",
                              "statement": "Systematic analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rational = systematic option analysis.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Systematic analysis"
},
        },
        {
          id: "ciealbus-u3-dm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between risk and uncertainty?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Risk vs uncertainty",
                              "statement": "Known vs unknown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Risk: known probabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uncertainty: unknown probabilities.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Known vs unknown"
},
        },
        {
          id: "ciealbus-u3-dm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is satisficing? Why do businesses satisfice?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Satisficing",
                              "statement": "Good enough."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Choosing good enough rather than optimal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limited info/time prevents full optimisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bounded rationality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Good enough choice"
},
        },
        {
          id: "ciealbus-u3-dm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decision-making, rational decision-making, bounded rationality, risk, uncertainty, decision tree. (b) What is rational decision-making? (c) What is bounded rationality? (d) What is satisficing? (e) What is a decision tree? (f) What is the difference between risk and uncertainty? (g) How do businesses make decisions? (h) Evaluate whether businesses should aim for optimal or satisfactory decisions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Decision-making",
                              "statement": "Models, factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Systematic analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Limited rationality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Good enough choice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Choices/outcomes map.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Known vs unknown probabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Analysis, judgment, experience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Decision-making models."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-dm-notes",
      title: "Decision-making — notes",
      summary: "Rational vs bounded rationality. Risk=known probabilities, uncertainty=unknown.",
      sections: [
        { heading: "Key idea", body: "Real-world decisions are constrained by information, time, cognitive limits." },
        { heading: "Tools", body: "Decision trees, expected value calculations aid complex choices." },
      ],
    },
  ],
};
