import type { Lesson } from "../../../types.ts";

export const lesson404: Lesson = {
  id: "ciealbus-u4-lesson-4-4",
  code: "4-4",
  title: "Global Business Strategy and Evaluation",
  goal: "I CAN evaluate global business strategies and their implications.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: global strategy"],
  
  vocabulary: [
    { term: "Global strategy", definition: "Standardised approach across markets." },
    { term: "Multi-domestic strategy", definition: "Adapted approach per market." },
    { term: "Transnational strategy", definition: "Balance global efficiency and local responsiveness." },
    { term: "Economies of scale", definition: "Cost advantages from size." },
    { term: "Cultural distance", definition: "Differences between home and host cultures." },
    { term: "Political risk", definition: "Risk from government actions/political instability." },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s4-gbs",
      title: "Global business strategy",
      skill: "Evaluate international strategy choices.",
      lesson: {
        sections: [
          {
            heading: "Strategy spectrum",
            body: "Global: standardised everywhere — economies of scale but ignores local needs. Multi-domestic: fully adapted — responsive but loses scale. Transnational: balance both — complex but flexible.",
          },
          {
            heading: "Entry and risk",
            body: "Entry modes: exporting→licensing→franchising→joint venture→wholly-owned. Risks: political, currency, cultural, operational.",
          },
        ],
        keyFormulas: [
          { name: "Global", statement: "standardised" },
          { name: "Multi-domestic", statement: "adapted" },
          { name: "Transnational", statement: "balanced" },
        ],
        workedExample: {
          problem: "A fast-food chain wants to enter India. Which strategy?",
          solution: "Multi-domestic or transnational — adapt menu to local tastes (vegetarian options), respect cultural norms, balance with global brand consistency.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-gs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a global strategy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Standardised approach across markets"
                    },
                    {
                              "id": "b",
                              "text": "Adapted per market"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A trade barrier"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Global strategy",
                              "statement": "Standardised."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Global = standardised across markets.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Standardised approach"
},
        },
        {
          id: "ciealbus-u4-gs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multi-domestic strategy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Multi-domestic",
                              "statement": "Adapted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adapted approach per market.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Responsive to local needs but loses scale.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Adapted per market"
},
        },
        {
          id: "ciealbus-u4-gs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare global and multi-domestic strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Strategy comparison",
                              "statement": "Global vs multi-domestic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Global: standardised, economies of scale.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multi-domestic: adapted, local responsiveness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade-off between efficiency and responsiveness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Global vs multi-domestic"
},
        },
        {
          id: "ciealbus-u4-gs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define global strategy, multi-domestic strategy, transnational strategy, economies of scale, cultural distance, political risk. (b) What is global strategy? (c) What is multi-domestic? (d) What is transnational? (e) What are entry modes? (f) What is cultural distance? (g) What is political risk? (h) Evaluate which strategy suits a company entering emerging markets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Global strategy",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Standardised.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Adapted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Balanced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Exporting→licensing→JV→wholly-owned.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Cultural differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Government/political instability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Context-dependent evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Global business strategy."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-gs-notes",
      title: "Global strategy — notes",
      summary: "Global=standardised, multi-domestic=adapted, transnational=balanced. Entry modes and risks vary.",
      sections: [
        { heading: "Key idea", body: "Strategy depends on market similarity, resources, risk tolerance." },
        { heading: "Entry modes", body: "Exporting→licensing→franchising→JV→wholly-owned — increasing commitment/risk." },
      ],
    },
  ],
};
