import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cilgp-u2-lesson-2-3",
  code: "2-3",
  title: "Solution Evaluation at Depth",
  goal: "I CAN evaluate complex solutions considering all stakeholders, costs and long-term effects.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Evaluation", "Cambridge Global Perspectives skills: evaluation"],
  stage: 9,
  vocabulary: [
    { term: "Stakeholder analysis", definition: "Mapping who is affected and how." },
    { term: "Unintended consequence", definition: "Unexpected negative/positive effect." },
    { term: "Opportunity cost", definition: "What you give up choosing one option." },
    { term: "Long-term impact", definition: "Effects over years/decades." },
    { term: "Risk assessment", definition: "Identifying and weighing potential harms." },
    { term: "Synergy", definition: "Combined solutions working better together." },
  ],
  concepts: [
    {
      id: "cilgp-u2-s3-deepeval",
      title: "Deep solution evaluation",
      skill: "Evaluate solutions with stakeholder, cost and long-term analysis at Stage 9.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive evaluation",
            body: "Map all stakeholders: who gains, who loses, who's excluded? Assess costs (financial, social, environmental) and benefits. Consider unintended consequences — solutions often create new problems.",
          },
          {
            heading: "Long-term thinking",
            body: "Short-term fixes may worsen long-term problems. Evaluate sustainability: will this still work in 20 years? Often, combined approaches (synergy) outperform single solutions.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder map", statement: "who gains/loses/is excluded" },
          { name: "Opportunity cost", statement: "best alternative forgone" },
        ],
        workedExample: {
          problem: "Evaluate 'carbon tax' for climate change — stakeholders, costs, long-term.",
          solution: "Gains: emission reduction, green investment. Loses: low-income households, fossil industries. Long-term: effective if revenue recycled to vulnerable groups.",
        },
      },
      questions: [
        {
          id: "cilgp-u2-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an unintended consequence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unexpected effect of a solution"
                    },
                    {
                              "id": "b",
                              "text": "A planned outcome"
                    },
                    {
                              "id": "c",
                              "text": "A type of cost"
                    },
                    {
                              "id": "d",
                              "text": "A voting result"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unintended consequence",
                              "statement": "Unexpected effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solutions can have unplanned effects.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unexpected effect"
},
        },
        {
          id: "cilgp-u2-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is stakeholder analysis and why do it before choosing a solution?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stakeholder analysis",
                              "statement": "Map affected parties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify who gains/loses/is excluded.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ensures equitable, informed choice.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Map affected parties for equity"
},
        },
        {
          id: "cilgp-u2-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a short-term solution worsen a long-term problem? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Long-term thinking",
                              "statement": "Short vs long term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. cheap plastic bans → black market alternatives worse.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Quick fixes ignore systemic causes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Long-term evaluation needed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Short-term fixes can backfire"
},
        },
        {
          id: "cilgp-u2-de-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define stakeholder analysis, unintended consequence, opportunity cost, long-term impact, risk assessment, synergy. (b) Map stakeholders for 'build more roads to reduce traffic'. (c) What unintended consequence might roads cause? (d) What is opportunity cost of choosing roads over public transport? (e) Evaluate long-term sustainability of road-building. (f) Give an example of solution synergy. (g) How does risk assessment work? (h) Design a combined solution to traffic congestion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Deep evaluation",
                              "statement": "Stakeholders, costs, long-term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid stakeholder map.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) e.g. more cars → more emissions/pollution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Lost opportunity for better transit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Induced demand — roads fill up again.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) e.g. roads+transit+pricing together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Identify+weigh potential harms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid combined solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Comprehensive solution evaluation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-de-notes",
      title: "Deep evaluation — notes",
      summary: "Map stakeholders, weigh costs/benefits, anticipate unintended consequences, think long-term.",
      sections: [
        { heading: "Key idea", body: "Solutions interact — evaluate combined approaches." },
        { heading: "Long-term", body: "Ask: will this still work in 20 years?" },
      ],
    },
  ],
};
