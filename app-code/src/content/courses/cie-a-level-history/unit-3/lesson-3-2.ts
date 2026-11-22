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
                              "text": "A type of source"
                    },
                    {
                              "id": "b",
                              "text": "Study of how history is written"
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
          "correctChoiceId": "b"
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
        {
          id: "ciealhis-u3-hist-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which school of history focuses on class struggle?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Marxist history"
                    },
                    {
                              "id": "b",
                              "text": "Feminist history"
                    },
                    {
                              "id": "c",
                              "text": "Postmodern history"
                    },
                    {
                              "id": "d",
                              "text": "Traditional political history"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marxist history",
                              "statement": "Class struggle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marxist history emphasises class struggle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Marxist history"
},
        },
        {
          id: "ciealhis-u3-hist-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many schools of history does the lesson's notes section list — traditional, social, revisionist, postmodern, Marxist and feminist?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Schools",
                              "statement": "Six listed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traditional, social, revisionist, postmodern, Marxist, feminist — six schools.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6"
},
        },
        {
          id: "ciealhis-u3-hist-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Revisionism refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Copying old texts exactly"
                    },
                    {
                              "id": "b",
                              "text": "Reinterpreting established historical views"
                    },
                    {
                              "id": "c",
                              "text": "Writing without using sources"
                    },
                    {
                              "id": "d",
                              "text": "Ignoring all evidence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Revisionism",
                              "statement": "Reinterpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revisionism challenges and reinterprets orthodox views.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Reinterpreting established views"
},
        },
        {
          id: "ciealhis-u3-hist-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes 'social history'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Focus only on economic statistics"
                    },
                    {
                              "id": "b",
                              "text": "Focus on kings, battles and treaties"
                    },
                    {
                              "id": "c",
                              "text": "Focus on ordinary people, class and gender"
                    },
                    {
                              "id": "d",
                              "text": "Focus on royal biographies"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social history",
                              "statement": "Ordinary people."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Social history emphasises ordinary people, class and gender.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Ordinary people, class and gender"
},
        },
        {
          id: "ciealhis-u3-hist-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The worked example on World War I causes lists how many interpretations — German war aims, systemic failure, alliance systems and nationalism?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "WWI causes",
                              "statement": "Four listed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "German war aims, systemic failure, alliance systems, nationalism — four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealhis-u3-hist-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Postmodernist historians are best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposed to using sources"
                    },
                    {
                              "id": "b",
                              "text": "Interested only in economics"
                    },
                    {
                              "id": "c",
                              "text": "Sceptical of objective historical truth"
                    },
                    {
                              "id": "d",
                              "text": "Focused on political leaders"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Postmodernism",
                              "statement": "Scepticism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Postmodernists question whether objective history is possible.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Sceptical of objective truth"
},
        },
        {
          id: "ciealhis-u3-hist-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A historian's reinterpretation published in 1985 re-examines events of 1914. How many years after the events was it published?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 71
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Time gap",
                              "statement": "1985 vs 1914."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1985 - 1914 = 71 years.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "71"
},
        },
        {
          id: "ciealhis-u3-hist-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Feminist history focuses on:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Military campaigns"
                    },
                    {
                              "id": "b",
                              "text": "Economic statistics only"
                    },
                    {
                              "id": "c",
                              "text": "Gender perspectives"
                    },
                    {
                              "id": "d",
                              "text": "Royal biographies"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Feminist history",
                              "statement": "Gender perspective."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feminist history emphasises gender perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Gender perspectives"
},
        },
        {
          id: "ciealhis-u3-hist-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how Marxist and feminist historians might interpret the same historical event differently.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Schools",
                              "statement": "Different lenses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marxist: focus on class interests, economics, power structures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Feminist: focus on gender roles, women's experience, patriarchy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Same evidence can support different interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows history is interpretation shaped by perspective.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Different lenses produce different interpretations"
},
        },
        {
          id: "ciealhis-u3-hist-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes 'objectivity' in history?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Historians should ignore their values"
                    },
                    {
                              "id": "b",
                              "text": "Only primary sources are objective"
                    },
                    {
                              "id": "c",
                              "text": "Objectivity is easy to achieve"
                    },
                    {
                              "id": "d",
                              "text": "Full objectivity is impossible because selection and interpretation are unavoidable"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Objectivity",
                              "statement": "Limited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Historians inevitably select and interpret evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** Full objectivity impossible"
},
        },
        {
          id: "ciealhis-u3-hist-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The lesson gives how many factors for why historians disagree — different evidence/perspectives, different values/methodologies, and history being interpretation?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Disagreement",
                              "statement": "Three factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence, values and interpretation — three factors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealhis-u3-hist-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that revisionist historians 'distort' history.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Revisionism",
                              "statement": "Debated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Critics: revisionists challenge established views, sometimes without sufficient evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Defenders: revisionism corrects biases and incorporates new evidence — e.g. social and feminist history.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: new sources and methods continually revise orthodox narratives.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Weighs both perspectives.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Judgement: revisionism advances understanding when evidence-based.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Revisionism distorts only when unsupported; evidence-based revision improves history"
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
