import type { Lesson } from "../../../types.ts";

export const lesson631: Lesson = {
  id: "ciealhis-u3-lesson-3-1",
  code: "3-1",
  title: "Historical Source Analysis",
  goal: "I CAN evaluate historical sources for reliability, bias and usefulness.",
  standards: ["Cambridge A Level History 9489", "Paper 3: source analysis"],
  
  vocabulary: [
    { term: "Primary source", definition: "Source created at the time of events." },
    { term: "Secondary source", definition: "Source created after events." },
    { term: "Reliability", definition: "Trustworthiness/accuracy." },
    { term: "Bias", definition: "Prejudice affecting perspective." },
    { term: "Usefulness", definition: "Value for answering question." },
    { term: "Corroboration", definition: "Cross-checking sources." },
  ],
  concepts: [
    {
      id: "ciealhis-u3-s1-source",
      title: "Source analysis",
      skill: "Evaluate historical sources critically.",
      lesson: {
        sections: [
          {
            heading: "Source evaluation",
            body: "Who created it? When? Why? Purpose? Primary or secondary? Content? Intended audience?",
          },
          {
            heading: "Reliability vs usefulness",
            body: "Reliable = accurate/trustworthy. Useful = relevant to question. A source can be reliable but not useful, or useful but biased.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "contemporary" },
          { name: "Secondary", statement: "later" },
          { name: "Reliability", statement: "trustworthiness" },
        ],
        workedExample: {
          problem: "A government report praising its own policies. How evaluate?",
          solution: "Likely biased — government has interest in positive portrayal. Useful for official perspective but not neutral facts.",
        },
      },
      questions: [
        {
          id: "ciealhis-u3-src-q1",
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
                              "name": "Primary",
                              "statement": "Contemporary."
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
          id: "ciealhis-u3-src-q2",
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
          id: "ciealhis-u3-src-q3",
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
          "finalAnswer": "Who/when/why/purpose"
},
        },
        {
          id: "ciealhis-u3-src-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary source, secondary source, reliability, bias, usefulness, corroboration. (b) What is primary? (c) What is secondary? (d) What is reliability? (e) What is bias? (f) How evaluate sources? (g) What is corroboration? (h) Evaluate a government report praising its own policies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Source analysis",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Contemporary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Later source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Trustworthiness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Prejudice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Who/when/why/purpose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cross-checking.",
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
      id: "ciealhis-u3-src-notes",
      title: "Source analysis — notes",
      summary: "Primary=contemporary; secondary=later. Evaluate who/when/why/purpose.",
      sections: [
        { heading: "Key idea", body: "Critical source analysis reveals perspective, bias and limitations." },
        { heading: "Corroboration", body: "Cross-check multiple sources to verify accuracy." },
      ],
    },
  ],
};
