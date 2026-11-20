import type { Lesson } from "../../../types.ts";

export const lesson352: Lesson = {
  id: "cieihis-u3-lesson-3-2",
  code: "3-2",
  title: "Historical Skills: Source Analysis",
  goal: "I CAN analyse historical sources for reliability, bias and usefulness.",
  standards: ["Cambridge IGCSE History 0470", "Paper 2: source analysis"],
  
  vocabulary: [
    { term: "Primary source", definition: "Source created at the time of events." },
    { term: "Secondary source", definition: "Source created after events." },
    { term: "Reliability", definition: "Trustworthiness/accuracy of source." },
    { term: "Bias", definition: "Prejudice affecting source perspective." },
    { term: "Usefulness", definition: "Value of source for answering question." },
    { term: "Corroboration", definition: "Cross-checking sources for accuracy." },
  ],
  concepts: [
    {
      id: "cieihis-u3-s2-source",
      title: "Source analysis",
      skill: "Analyse historical sources critically.",
      lesson: {
        sections: [
          {
            heading: "Source evaluation",
            body: "Who created it? When? Why? What's the purpose? Is it primary or secondary? What's the content? Who is the intended audience?",
          },
          {
            heading: "Reliability vs usefulness",
            body: "Reliable = accurate/trustworthy. Useful = relevant to question. A source can be reliable but not useful, or useful but biased/unreliable.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "created at the time" },
          { name: "Secondary", statement: "created after" },
          { name: "Reliability", statement: "trustworthiness" },
        ],
        workedExample: {
          problem: "A government report praising its own policies. How would you evaluate it?",
          solution: "Likely biased — government has interest in positive portrayal. Useful for understanding official perspective but not neutral facts.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-src-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Source created at the time of events"
                    },
                    {
                              "id": "b",
                              "text": "Source created after events"
                    },
                    {
                              "id": "c",
                              "text": "A type of map"
                    },
                    {
                              "id": "d",
                              "text": "A modern textbook"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary source",
                              "statement": "Contemporary source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = created at time of events.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Contemporary source"
},
        },
        {
          id: "cieihis-u3-src-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between reliability and usefulness?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reliability vs usefulness",
                              "statement": "Trust vs relevance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reliable = accurate/trustworthy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Useful = relevant to question.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Trust vs relevance"
},
        },
        {
          id: "cieihis-u3-src-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you evaluate a historical source?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source evaluation",
                              "statement": "Critical analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Who created it? When? Why?",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "What's the purpose? Audience?",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reliability, bias, usefulness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Who/when/why/purpose analysis"
},
        },
        {
          id: "cieihs-u3-src-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary source, secondary source, reliability, bias, usefulness, corroboration. (b) What is a primary source? (c) What is a secondary source? (d) What is reliability? (e) What is bias? (f) How do you evaluate sources? (g) What is corroboration? (h) Evaluate a government report praising its own policies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Source analysis",
                              "statement": "Critical evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Contemporary source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Post-event source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Trustworthiness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Prejudice affecting perspective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Who/when/why/purpose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cross-checking sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Biased but useful for official view.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Source analysis skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-src-notes",
      title: "Source analysis — notes",
      summary: "Primary=contemporary; secondary=later. Evaluate who/when/why/purpose. Reliability≠usefulness.",
      sections: [
        { heading: "Key idea", body: "Critical source analysis reveals perspective, bias and limitations." },
        { heading: "Corroboration", body: "Cross-check multiple sources to verify accuracy." },
      ],
    },
  ],
};
