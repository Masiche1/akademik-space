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
                              "text": "Point, Evidence, Explanation, Link"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A map skill"
                    },
                    {
                              "id": "d",
                              "text": "A statistical method"
                    }
          ],
          "correctChoiceId": "a"
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
