import type { Lesson } from "../../../types.ts";

export const lesson353: Lesson = {
  id: "cieihis-u3-lesson-3-3",
  code: "3-3",
  title: "Historical Skills: Interpretation and Enquiry",
  goal: "I CAN construct historical arguments and evaluate interpretations.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: interpretation"],
  
  vocabulary: [
    { term: "Historical enquiry", definition: "Investigation of historical questions." },
    { term: "Interpretation", definition: "Historical viewpoint/analysis." },
    { term: "Argument", definition: "Reasoned position supported by evidence." },
    { term: "Evidence", definition: "Facts supporting argument." },
    { term: "Historiography", definition: "Study of how history is written." },
    { term: "Significance", definition: "Historical importance of events/figures." },
  ],
  concepts: [
    {
      id: "cieihis-u3-s3-interp",
      title: "Interpretation and enquiry",
      skill: "Construct and evaluate historical arguments.",
      lesson: {
        sections: [
          {
            heading: "Historical enquiry",
            body: "Formulate questions, gather evidence, analyse sources, construct arguments, evaluate interpretations. History is interpretation, not just facts.",
          },
          {
            heading: "Argument construction",
            body: "Thesis statement → evidence → analysis → conclusion. Consider multiple perspectives. Acknowledge limitations. Evaluate significance.",
          },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→evidence→argument" },
          { name: "Interpretation", statement: "historical viewpoint" },
        ],
        workedExample: {
          problem: "Was the Cold War inevitable? Construct an argument.",
          solution: "Thesis: partly inevitable due to ideological differences. Evidence: post-WWII power vacuum, incompatible systems. Counter: could have been managed differently. Conclusion: structural factors made conflict likely but not certain.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical enquiry?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Investigation of historical questions"
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
                              "name": "Enquiry",
                              "statement": "Historical investigation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enquiry = investigating historical questions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical investigation"
},
        },
        {
          id: "cieihis-u3-in-q2",
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
                              "statement": "Historical viewpoint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Historical viewpoint/analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different historians interpret events differently.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical viewpoint"
},
        },
        {
          id: "cieihis-u3-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you construct a historical argument?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument construction",
                              "statement": "Evidence-based reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis statement → evidence → analysis → conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consider multiple perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acknowledge limitations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Thesis→evidence→conclusion"
},
        },
        {
          id: "cieihs-u3-in-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define historical enquiry, interpretation, argument, evidence, historiography, significance. (b) What is historical enquiry? (c) What is interpretation? (d) How construct argument? (e) What is historiography? (f) What is significance? (g) Why do historians disagree? (h) Construct an argument: 'The Cold War was inevitable.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Interpretation",
                              "statement": "Argument, enquiry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Historical investigation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Historical viewpoint.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Thesis→evidence→conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Study of historical writing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Historical importance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Different evidence/perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid argument with evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historical interpretation skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-in-notes",
      title: "Interpretation — notes",
      summary: "History=interpretation not just facts. Enquiry: question→evidence→argument. Historians disagree.",
      sections: [
        { heading: "Key idea", body: "Good historical arguments consider evidence, perspectives, limitations." },
        { heading: "Significance", body: "Evaluate historical importance — impact, scale, lasting effects." },
      ],
    },
  ],
};
