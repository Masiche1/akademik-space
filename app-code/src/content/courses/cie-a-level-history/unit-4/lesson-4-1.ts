import type { Lesson } from "../../../types.ts";

export const lesson641: Lesson = {
  id: "ciealhis-u4-lesson-4-1",
  code: "4-1",
  title: "Extended Essay and Research Skills",
  goal: "I CAN conduct historical research and write extended responses.",
  standards: ["Cambridge A Level History 9489", "Paper 3: extended response"],
  
  vocabulary: [
    { term: "Research question", definition: "Question guiding investigation." },
    { term: "Historiography", definition: "Different historical interpretations." },
    { term: "Synthesis", definition: "Combining multiple sources/perspectives." },
    { term: "Evaluation", definition: "Judging quality of arguments." },
    { term: "Context", definition: "Historical background." },
    { term: "Nuance", definition: "Subtle complexity in analysis." },
  ],
  concepts: [
    {
      id: "ciealhis-u4-s1-res",
      title: "Research skills",
      skill: "Conduct research and write complex answers.",
      lesson: {
        sections: [
          {
            heading: "Research process",
            body: "Formulate question → gather sources → analyse evidence → construct argument → evaluate. Use primary and secondary sources. Consider historiography.",
          },
          {
            heading: "Extended responses",
            body: "Longer answers require: clear structure, multiple points, evidence integration, analysis depth, evaluation. Balance perspectives.",
          },
        ],
        keyFormulas: [
          { name: "Research", statement: "question→sources→argument" },
          { name: "Synthesis", statement: "combine perspectives" },
        ],
        workedExample: {
          problem: "Research question: 'Was decolonisation successful?' Plan approach.",
          solution: "Gather evidence on independence movements, post-colonial development, neocolonialism. Compare political success vs economic challenges. Synthesize perspectives.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a research question in history?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of source"
                    },
                    {
                              "id": "b",
                              "text": "A statistical method"
                    },
                    {
                              "id": "c",
                              "text": "Question guiding historical investigation"
                    },
                    {
                              "id": "d",
                              "text": "A map"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Research question",
                              "statement": "Investigation guide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research question = investigation guide.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Investigation guide"
},
        },
        {
          id: "ciealhis-u4-rs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is historiography?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Historiography",
                              "statement": "Interpretations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different historical interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Study of how history is written.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical interpretations"
},
        },
        {
          id: "ciealhis-u4-rs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is synthesis in historical writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combining multiple sources/perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Creates comprehensive analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows nuanced understanding.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Combining perspectives"
},
        },
        {
          id: "ciealhis-u4-rs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define research question, historiography, synthesis, evaluation, context, nuance. (b) What is research question? (c) What is historiography? (d) What is synthesis? (e) What is evaluation? (f) How conduct research? (g) What makes good extended response? (h) Plan research for 'Was Cold War inevitable?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research",
                              "statement": "Extended response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Investigation guide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Combining perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Judging quality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Question→sources→argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Structure, evidence, analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid research plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historical research skills."
},
        },
        {
          id: "ciealhis-u4-rs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of the historical research process?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Publish the findings"
                    },
                    {
                              "id": "b",
                              "text": "Write the conclusion"
                    },
                    {
                              "id": "c",
                              "text": "Choose an essay title at random"
                    },
                    {
                              "id": "d",
                              "text": "Formulate a research question"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research process",
                              "statement": "Question first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research begins by formulating a research question.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Formulate a research question"
},
        },
        {
          id: "ciealhis-u4-rs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The research process has five stages. How many stages come after formulating the research question?",
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
                              "kind": "technique",
                              "name": "Research process",
                              "statement": "Five stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Five stages total, so four stages follow formulating the question.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealhis-u4-rs-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two reasons why a historian should use both primary and secondary sources in research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sources",
                              "statement": "Primary + secondary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary sources provide direct evidence of events; secondary sources provide interpretation and context.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Using both allows cross-checking and a more balanced, nuanced argument.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Direct evidence plus interpretation enables cross-checking"
},
        },
        {
          id: "ciealhis-u4-rs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes synthesis in an extended historical response?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combining multiple sources and perspectives into a nuanced argument"
                    },
                    {
                              "id": "b",
                              "text": "Listing facts without analysis"
                    },
                    {
                              "id": "c",
                              "text": "Summarising one source in detail"
                    },
                    {
                              "id": "d",
                              "text": "Repeating a single viewpoint throughout"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combining perspectives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synthesis combines sources and perspectives into a nuanced argument.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Combining perspectives into a nuanced argument"
},
        },
        {
          id: "ciealhis-u4-rs-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many key elements does the lesson list for a good extended response?",
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
                              "kind": "technique",
                              "name": "Extended response",
                              "statement": "Six elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear structure, multiple points, evidence integration, analysis depth, evaluation and balanced perspectives make six elements.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6"
},
        },
        {
          id: "ciealhis-u4-rs-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the strengths and limitations of relying only on secondary sources for a historical enquiry.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Source reliance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: secondary sources synthesise specialist interpretations and provide historiographical context.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strength: efficient way to access established scholarship on complex topics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limitation: risk of inheriting the author's biases and interpretations without scrutiny.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Limitation: lack of direct engagement with primary evidence weakens independent judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Efficient access to scholarship, but risks bias and weakens independence"
},
        },
        {
          id: "ciealhis-u4-rs-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'context' mean in historical writing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A statistical table"
                    },
                    {
                              "id": "b",
                              "text": "The historical background to events"
                    },
                    {
                              "id": "c",
                              "text": "The essay conclusion"
                    },
                    {
                              "id": "d",
                              "text": "A quotation from a source"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Context",
                              "statement": "Historical background."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Context is the historical background that frames events.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** The historical background to events"
},
        },
        {
          id: "ciealhis-u4-rs-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the strongest research question for an extended essay?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To what extent did nuclear deterrence prevent direct superpower conflict between 1945 and 1991?"
                    },
                    {
                              "id": "b",
                              "text": "Tell me everything about the Cold War"
                    },
                    {
                              "id": "c",
                              "text": "Why was the Cold War a disaster?"
                    },
                    {
                              "id": "d",
                              "text": "Was the Cold War good or bad?"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research question",
                              "statement": "Focused and arguable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A strong research question is focused, arguable and capable of evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** To what extent did nuclear deterrence prevent direct conflict?"
},
        },
        {
          id: "ciealhis-u4-rs-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many broad types of sources should a historian use in research?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sources",
                              "statement": "Primary and secondary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Historians use primary and secondary sources — two broad types.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealhis-u4-rs-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of evaluation in historical writing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Copying sources word for word"
                    },
                    {
                              "id": "b",
                              "text": "Judging the quality and reliability of evidence and arguments"
                    },
                    {
                              "id": "c",
                              "text": "Adding more facts"
                    },
                    {
                              "id": "d",
                              "text": "Shortening the essay"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Evaluation",
                              "statement": "Judging quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluation judges the quality and reliability of evidence and arguments.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Judging the quality of evidence and arguments"
},
        },
        {
          id: "ciealhis-u4-rs-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When assessing whether decolonisation was successful, how many outcome dimensions — political and economic — should be compared?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Multiple dimensions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Political and economic outcomes are two dimensions that must both be assessed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealhis-u4-rs-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a research enquiry into 'To what extent was the Cold War inevitable?', covering the research question, source types and evaluation criteria.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research",
                              "statement": "Enquiry plan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Formulate a focused, arguable question about inevitability and extent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gather both primary and secondary sources covering different interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Analyse evidence on structural causes and contingent decisions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Evaluate the strength of each interpretation and reach a balanced judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Question, sources, analysis and evaluation plan"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-rs-notes",
      title: "Research — notes",
      summary: "Research: question→sources→argument. Synthesis combines perspectives.",
      sections: [
        { heading: "Key idea", body: "Good historical research balances evidence, analysis, evaluation." },
        { heading: "Nuance", body: "Avoid simplistic answers — acknowledge complexity." },
      ],
    },
  ],
};
