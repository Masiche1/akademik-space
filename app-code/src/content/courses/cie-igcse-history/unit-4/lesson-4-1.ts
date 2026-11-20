import type { Lesson } from "../../../types.ts";

export const lesson361: Lesson = {
  id: "cieihis-u4-lesson-4-1",
  code: "4-1",
  title: "Historical Skills: Essay Writing and Structured Answers",
  goal: "I CAN write structured historical essays with clear arguments.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: essay skills"],
  
  vocabulary: [
    { term: "Essay", definition: "Structured written argument on historical topic." },
    { term: "Introduction", definition: "Opening paragraph stating argument." },
    { term: "Body paragraphs", definition: "Supporting points with evidence." },
    { term: "Conclusion", definition: "Summary answering the question." },
    { term: "Thesis", definition: "Main argument of essay." },
    { term: "Evidence", definition: "Facts supporting argument." },
  ],
  concepts: [
    {
      id: "cieihis-u4-s1-essay",
      title: "Essay writing",
      skill: "Write structured historical essays.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Introduction: state thesis/argument. Body: each paragraph = one point + evidence + analysis. Conclusion: restate argument, answer question. PEEL structure: Point, Evidence, Explanation, Link.",
          },
          {
            heading: "Good essays",
            body: "Answer the question directly. Use specific evidence. Analyse not just describe. Consider multiple perspectives. Evaluate significance. Clear logical structure.",
          },
        ],
        keyFormulas: [
          { name: "PEEL", statement: "Point, Evidence, Explanation, Link" },
          { name: "Structure", statement: "intro→body→conclusion" },
        ],
        workedExample: {
          problem: "Write essay plan for 'Was the Cold War inevitable?'",
          solution: "Intro: thesis — partly inevitable. Body 1: ideological differences. Body 2: power vacuum. Body 3: could have been managed. Conclusion: structural factors made likely but not certain.",
        },
      },
      questions: [
        {
          id: "cieihis-u4-es-q1",
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
                              "statement": "Essay paragraph structure."
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
          id: "cieihs-u4-es-q2",
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
                              "statement": "Intro/body/conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction, body paragraphs, conclusion.",
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
          id: "cieihs-u4-es-q3",
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
                              "statement": "Good essay features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers question directly, uses evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Analyses not just describes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear structure, considers perspectives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Direct answer, evidence, analysis"
},
        },
        {
          id: "cieihs-u4-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define essay, introduction, body paragraphs, conclusion, thesis, evidence. (b) What is PEEL? (c) What are essay parts? (d) What makes good essay? (e) How do you write introduction? (f) How do you write conclusion? (g) What is thesis? (h) Write essay plan for 'Was the Cold War inevitable?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Essay writing",
                              "statement": "Structure, skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Point, Evidence, Explanation, Link.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Intro, body, conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Answer, evidence, analysis, structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) State thesis/argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Restate argument, answer question.",
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
      id: "cieihis-u4-es-notes",
      title: "Essay writing — notes",
      summary: "PEEL=Point, Evidence, Explanation, Link. Structure: intro→body→conclusion. Answer question directly.",
      sections: [
        { heading: "Key idea", body: "Good essays have clear thesis, evidence-based arguments, logical structure." },
        { heading: "Analysis", body: "Go beyond description — explain significance, evaluate perspectives." },
      ],
    },
  ],
};
