import type { Lesson } from "../../../types.ts";

export const lesson633: Lesson = {
  id: "ciealhis-u3-lesson-3-3",
  code: "3-3",
  title: "Essay Writing and Structured Answers",
  goal: "I CAN write structured historical essays with clear arguments.",
  standards: ["Cambridge A Level History 9489", "Paper 3: essay skills"],
  
  vocabulary: [
    { term: "Essay", definition: "Structured written argument." },
    { term: "Introduction", definition: "Opening stating argument." },
    { term: "Body paragraphs", definition: "Supporting points with evidence." },
    { term: "Conclusion", definition: "Summary answering question." },
    { term: "Thesis", definition: "Main argument." },
    { term: "Evidence", definition: "Facts supporting argument." },
  ],
  concepts: [
    {
      id: "ciealhis-u3-s3-essay",
      title: "Essay writing",
      skill: "Write structured historical essays.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Introduction: thesis/argument. Body: each paragraph = point + evidence + analysis. Conclusion: answer question. PEEL: Point, Evidence, Explanation, Link.",
          },
          {
            heading: "Good essays",
            body: "Answer question directly. Use specific evidence. Analyse not just describe. Consider multiple perspectives. Evaluate significance.",
          },
        ],
        keyFormulas: [
          { name: "PEEL", statement: "Point, Evidence, Explanation, Link" },
          { name: "Structure", statement: "intro→body→conclusion" },
        ],
        workedExample: {
          problem: "Write essay plan for 'Was the Cold War inevitable?'",
          solution: "Intro: partly inevitable due to ideology. Body: ideological differences, power vacuum, could have been managed. Conclusion: structural factors made likely but not certain.",
        },
      },
      questions: [
        {
          id: "ciealhis-u3-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is PEEL structure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A map skill"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "Point, Evidence, Explanation, Link"
                    },
                    {
                              "id": "d",
                              "text": "A statistical method"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PEEL",
                              "statement": "Essay structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PEEL = Point, Evidence, Explanation, Link.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Point, Evidence, Explanation, Link"
},
        },
        {
          id: "ciealhis-u3-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the parts of a historical essay?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Essay structure",
                              "statement": "Parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction, body, conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each serves specific purpose.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Intro, body, conclusion"
},
        },
        {
          id: "ciealhis-u3-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good historical essay?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Essay quality",
                              "statement": "Features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers question, uses evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Analyses not just describes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear structure, multiple perspectives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Answer, evidence, analysis"
},
        },
        {
          id: "ciealhis-u3-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define essay, introduction, body paragraphs, conclusion, thesis, evidence. (b) What is PEEL? (c) What are essay parts? (d) What makes good essay? (e) How write introduction? (f) How write conclusion? (g) What is thesis? (h) Write essay plan for 'Was Cold War inevitable?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Essay writing",
                              "statement": "Skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) PEEL structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Intro, body, conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Answer, evidence, analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) State thesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Restate argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Main argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid essay plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Essay writing skills."
},
        },
        {
          id: "ciealhis-u3-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the PEEL paragraph structure, 'Link' means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Writing a longer essay"
                    },
                    {
                              "id": "b",
                              "text": "Connecting the point back to the question or thesis"
                    },
                    {
                              "id": "c",
                              "text": "Adding a bibliography"
                    },
                    {
                              "id": "d",
                              "text": "Quoting a source word for word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PEEL",
                              "statement": "Point, Evidence, Explanation, Link."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Link connects the paragraph back to the question or thesis.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Connects back to the question"
},
        },
        {
          id: "ciealhis-u3-es-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many elements does the PEEL paragraph structure have?",
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
                              "kind": "definition",
                              "name": "PEEL",
                              "statement": "Four elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point, Evidence, Explanation, Link — four elements.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealhis-u3-es-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thesis statement is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The essay's conclusion"
                    },
                    {
                              "id": "b",
                              "text": "The main argument of an essay"
                    },
                    {
                              "id": "c",
                              "text": "A type of historical source"
                    },
                    {
                              "id": "d",
                              "text": "A quotation from evidence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thesis",
                              "statement": "Main argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The thesis is the essay's central argument.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** The main argument"
},
        },
        {
          id: "ciealhis-u3-es-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to write an essay conclusion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Introduce brand new evidence"
                    },
                    {
                              "id": "b",
                              "text": "Restate the argument and answer the question directly"
                    },
                    {
                              "id": "c",
                              "text": "Repeat the introduction word for word"
                    },
                    {
                              "id": "d",
                              "text": "List all the sources used"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Conclusion",
                              "statement": "Answer the question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A conclusion restates the argument and answers the question.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Restate argument, answer question"
},
        },
        {
          id: "ciealhis-u3-es-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The lesson lists how many features of a good essay — answering the question, using evidence, analysing, considering multiple perspectives and evaluating significance?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Essay quality",
                              "statement": "Five features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answer, evidence, analysis, perspectives, evaluation — five features.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "ciealhis-u3-es-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A body paragraph that only describes events without explaining their significance is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Descriptive rather than analytical — limited marks"
                    },
                    {
                              "id": "b",
                              "text": "Always high-scoring"
                    },
                    {
                              "id": "c",
                              "text": "Required by examiners"
                    },
                    {
                              "id": "d",
                              "text": "A perfect paragraph"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Analysis",
                              "statement": "Beyond description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Examiners reward analysis of significance, not just description.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Descriptive, limited marks"
},
        },
        {
          id: "ciealhis-u3-es-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main parts does the lesson identify for essay structure — introduction, body and conclusion?",
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
                              "kind": "definition",
                              "name": "Structure",
                              "statement": "Three parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction, body, conclusion — three parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealhis-u3-es-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The introduction of a historical essay should primarily:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Include a bibliography"
                    },
                    {
                              "id": "b",
                              "text": "State the thesis or argument"
                    },
                    {
                              "id": "c",
                              "text": "List all the evidence"
                    },
                    {
                              "id": "d",
                              "text": "Give the conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Introduction",
                              "statement": "State thesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The introduction states the thesis and previews the argument.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** State the thesis"
},
        },
        {
          id: "ciealhis-u3-es-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how to write an effective body paragraph using the PEEL structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "PEEL",
                              "statement": "Paragraph structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: make a clear analytical claim linked to the question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: support with specific facts or quotations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explanation: analyse why the evidence supports the point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Link: connect back to the thesis or question.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Point, evidence, explanation, link"
},
        },
        {
          id: "ciealhis-u3-es-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which approach best demonstrates 'analysis' rather than description in a history essay?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Explaining why an event was significant and its consequences"
                    },
                    {
                              "id": "b",
                              "text": "Listing dates of events"
                    },
                    {
                              "id": "c",
                              "text": "Summarising a textbook"
                    },
                    {
                              "id": "d",
                              "text": "Quoting a long passage"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Analysis",
                              "statement": "Significance + consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analysis explains significance and consequences; description only recounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** Explaining significance"
},
        },
        {
          id: "ciealhis-u3-es-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student allocates equal time to the introduction, body and conclusion of a 30-minute essay. How many minutes should each section receive?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Time management",
                              "statement": "Equal thirds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30 / 3 = 10 minutes per section.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "ciealhis-u3-es-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that 'there is only one correct way to write a history essay.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Essay writing",
                              "statement": "Debated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Against: structure, evidence and analysis can be achieved many ways.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "For: examiners reward clear conventions — thesis, PEEL, evaluation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: strong essays vary widely in style yet share core features.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Weighs both perspectives.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Judgement: conventions guide but do not dictate; quality lies in argument and evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "No single correct way; conventions guide but argument quality matters most"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u3-es-notes",
      title: "Essay writing — notes",
      summary: "PEEL=Point, Evidence, Explanation, Link. Structure: intro→body→conclusion.",
      sections: [
        { heading: "Key idea", body: "Good essays have clear thesis, evidence-based arguments, logical structure." },
        { heading: "Analysis", body: "Go beyond description — explain significance, evaluate perspectives." },
      ],
    },
  ],
};
