import type { Lesson } from "../../../types.ts";

export const lesson632: Lesson = {
  id: "ciealhis-u3-lesson-3-2",
  code: "3-2",
  title: "Historical Interpretation and Historiography",
  goal: "I CAN evaluate different historical interpretations and historiography.",
  standards: ["Cambridge A Level History 9489", "Paper 3: interpretation"],
  
  vocabulary: [
    { term: "Interpretation", definition: "Historical viewpoint/analysis." },
    { term: "Historiography", definition: "Study of how history is written." },
    { term: "Revisionism", definition: "Reinterpretation of established history." },
    { term: "Postmodernism", definition: "Scepticism about objective history." },
    { term: "Marxist history", definition: "Class struggle focus." },
    { term: "Feminist history", definition: "Gender perspective focus." },
  ],
  concepts: [
    {
      id: "ciealhis-u3-s2-hist",
      title: "Historiography",
      skill: "Evaluate historical interpretations.",
      lesson: {
        sections: [
          {
            heading: "Interpretations",
            body: "Different historians interpret events differently based on evidence, perspective, values. History is interpretation, not just facts.",
          },
          {
            heading: "Historiographical schools",
            body: "Traditional/political: leaders, events. Social: ordinary people, class, gender. Revisionist: challenges orthodox views. Postmodern: sceptical of objective truth.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "viewpoint" },
          { name: "Historiography", statement: "history writing" },
          { name: "Revisionism", statement: "reinterpretation" },
        ],
        workedExample: {
          problem: "Why do historians disagree about causes of World War I?",
          solution: "Different interpretations: German war aims, systemic failure, alliance systems, nationalism. Evidence supports multiple explanations.",
        },
      },
      questions: [
        {
          id: "ciealhis-u3-hist-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historiography?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Study of how history is written"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A map"
                    },
                    {
                              "id": "d",
                              "text": "A textbook"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Historiography",
                              "statement": "History writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Historiography = study of historical writing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "History writing study"
},
        },
        {
          id: "ciealhis-u3-hist-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an interpretation in history?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interpretation",
                              "statement": "Viewpoint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Historical viewpoint/analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different historians interpret differently.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical viewpoint"
},
        },
        {
          id: "ciealhis-u3-hist-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do historians disagree?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Disagreement",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different evidence/perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different values/methodologies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "History is interpretation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Evidence, perspective, values"
},
        },
        {
          id: "ciealhis-u3-hist-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define interpretation, historiography, revisionism, postmodernism, Marxist history, feminist history. (b) What is historiography? (c) What is interpretation? (d) Why do historians disagree? (e) What is revisionism? (f) What is postmodernism? (g) What is Marxist history? (h) Evaluate whether history can be objective.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Historiography",
                              "statement": "Interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) History writing study.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Historical viewpoint.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Evidence, perspective, values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Reinterpretation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Scepticism about truth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Class struggle focus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Objective impossible but evidence-based.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historiography analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u3-hist-notes",
      title: "Historiography — notes",
      summary: "History=interpretation not just facts. Historians disagree on evidence/perspective.",
      sections: [
        { heading: "Key idea", body: "Different schools of history emphasise different factors." },
        { heading: "Schools", body: "Traditional, social, revisionist, postmodern, Marxist, feminist." },
      ],
    },
  ],
};
