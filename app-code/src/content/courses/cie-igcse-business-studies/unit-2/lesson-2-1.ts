import type { Lesson } from "../../../types.ts";

export const lesson261: Lesson = {
  id: "cieibs-u2-lesson-2-1",
  code: "2-1",
  title: "External Influences on Business Activity",
  goal: "I CAN identify external influences: economic, social, technological, political, legal, environmental.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: external influences"],
  
  vocabulary: [
    { term: "External influence", definition: "Factor outside business affecting operations." },
    { term: "Economic environment", definition: "Economic conditions affecting business." },
    { term: "Social trends", definition: "Changing societal attitudes/behaviour." },
    { term: "Technological change", definition: "New technologies affecting business." },
    { term: "Political/legal", definition: "Government policies and laws." },
    { term: "Environmental factors", definition: "Natural/physical conditions affecting business." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s1-ext",
      title: "External influences",
      skill: "Identify and analyse external influences on business.",
      lesson: {
        sections: [
          {
            heading: "External influences",
            body: "Economic: inflation, interest rates, exchange rates, economic growth. Social: demographics, lifestyle changes, consumer attitudes. Technological: internet, automation, digitalisation. Political/legal: government policies, regulations, taxes. Environmental: climate change, resource availability.",
          },
          {
            heading: "Impact analysis",
            body: "Businesses must monitor external environment and adapt. Positive influences create opportunities; negative create threats. PESTLE analysis framework helps organise analysis.",
          },
        ],
        keyFormulas: [
          { name: "PESTLE", statement: "Political, Economic, Social, Technological, Legal, Environmental" },
        ],
        workedExample: {
          problem: "How does rising interest rates affect a small business?",
          solution: "Higher borrowing costs, reduced consumer spending, slower growth — negative economic influence requiring adaptation.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is PESTLE analysis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Framework for analysing external influences"
                    },
                    {
                              "id": "b",
                              "text": "A type of market research"
                    },
                    {
                              "id": "c",
                              "text": "A financial calculation"
                    },
                    {
                              "id": "d",
                              "text": "A marketing strategy"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PESTLE",
                              "statement": "External influence framework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PESTLE analyses political, economic, social, technological, legal, environmental factors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "External influence framework"
},
        },
        {
          id: "cieibs-u2-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PESTLE stand for?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PESTLE",
                              "statement": "Six external factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Political, Economic, Social, Technological, Legal, Environmental.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All six correctly identified.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Political, Economic, Social, Technological, Legal, Environmental"
},
        },
        {
          id: "cieibs-u2-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a technological influence on business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Technological influence",
                              "statement": "Tech impact on business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid example (e.g. internet, automation, AI).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains impact on business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear connection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Valid technological influence example"
},
        },
        {
          id: "cieibs-u2-ex-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define external influence, economic environment, social trends, technological change, political/legal, environmental factors, PESTLE. (b) What is PESTLE? (c) What is an external influence? (d) Give an economic influence example. (e) Give a social influence example. (f) Give a technological influence example. (g) Give a political/legal influence example. (h) Analyse how a small business can respond to external influences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "External influences",
                              "statement": "PESTLE analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Six-factor framework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Factor outside business affecting operations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid economic example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid social example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid technological example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid political/legal example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid response strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "External influences and PESTLE."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-ex-notes",
      title: "External influences — notes",
      summary: "PESTLE: Political, Economic, Social, Technological, Legal, Environmental. Businesses must adapt to external changes.",
      sections: [
        { heading: "Key idea", body: "External environment creates both opportunities and threats." },
        { heading: "PESTLE", body: "Framework for systematic external analysis." },
      ],
    },
  ],
};
