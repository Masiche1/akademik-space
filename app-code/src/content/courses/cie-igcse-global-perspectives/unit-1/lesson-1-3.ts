import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ciegp-u1-lesson-1-3",
  code: "1-3",
  title: "Analysing Perspectives and Evidence",
  goal: "I CAN analyse multiple perspectives and evaluate evidence quality on global issues.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: analysis", "0457: perspectives"],
  
  vocabulary: [
    { term: "Perspective", definition: "Viewpoint shaped by experience/culture." },
    { term: "Stakeholder", definition: "Person/group affected by or affecting issue." },
    { term: "Evidence", definition: "Facts/data supporting claims." },
    { term: "Inference", definition: "Conclusion drawn from evidence." },
    { term: "Counter-argument", definition: "Reasoning against a position." },
    { term: "Assumption", definition: "Unstated belief underlying argument." },
  ],
  concepts: [
    {
      id: "ciegp-u1-s3-persp",
      title: "Perspectives and evidence analysis",
      skill: "Analyse viewpoints and evidence at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Multiple perspectives",
            body: "Every global issue affects stakeholders differently. Map who gains, who loses, who's excluded. Consider cultural, economic, political contexts shaping each viewpoint.",
          },
          {
            heading: "Evidence evaluation",
            body: "Check relevance (does it address the question?), sufficiency (enough evidence?), reliability (trustworthy source?). Distinguish fact from inference; identify assumptions underlying claims.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder map", statement: "who gains/loses/is excluded" },
          { name: "Evidence check", statement: "relevant + sufficient + reliable" },
        ],
        workedExample: {
          problem: "Analyse perspectives on 'should cities ban cars from centres?'",
          solution: "Supporters: cleaner air, safer streets. Opponents: accessibility, business impact. Evidence needed: air quality data, economic studies, resident surveys.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stakeholder?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person/group affected by an issue"
                    },
                    {
                              "id": "b",
                              "text": "A type of evidence"
                    },
                    {
                              "id": "c",
                              "text": "A research tool"
                    },
                    {
                              "id": "d",
                              "text": "A voting system"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stakeholder",
                              "statement": "Affected party."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stakeholders affected by/affect issues.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Affected person/group"
},
        },
        {
          id: "ciegp-u1-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between evidence and inference?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Evidence vs inference",
                              "statement": "Data vs conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence = facts/data; inference = conclusion drawn.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Distinguish to avoid treating opinion as fact.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data vs conclusion"
},
        },
        {
          id: "ciegp-u1-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify two perspectives on 'social media use by teenagers' with evidence for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Perspectives",
                              "statement": "Multiple viewpoints + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. Parents: safety concerns — cyberbullying stats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Teens: social connection — usage surveys.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both perspectives + evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Two perspectives with evidence"
},
        },
        {
          id: "ciegp-u1-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perspective, stakeholder, evidence, inference, counter-argument, assumption. (b) List 4 stakeholders in 'should schools ban phones?'. (c) Give one perspective + evidence for each. (d) What is an assumption? (e) Why consider counter-arguments? (f) How do you evaluate evidence quality? (g) Find the inference in: 'Pollution is rising, therefore health will worsen.' (h) Analyse both sides of 'universal basic income'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Analysis",
                              "statement": "Perspectives, evidence, inference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Four valid stakeholders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Perspective+evidence pairs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Unstated underlying belief.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Tests position strength.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Relevance, sufficiency, reliability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 'Health will worsen' is inference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced UBI analysis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Perspective and evidence analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-pe-notes",
      title: "Analysis — notes",
      summary: "Map stakeholder perspectives; distinguish evidence from inference; test assumptions.",
      sections: [
        { heading: "Key idea", body: "Strong analysis weighs multiple viewpoints fairly." },
        { heading: "Evidence", body: "Check relevance, sufficiency, reliability — not just quantity." },
      ],
    },
  ],
};
