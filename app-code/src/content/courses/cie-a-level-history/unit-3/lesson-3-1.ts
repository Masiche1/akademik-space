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
                              "text": "Source created after events"
                    },
                    {
                              "id": "b",
                              "text": "Source created at the time of events"
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
          "correctChoiceId": "b"
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
        {
          id: "ciealhis-u3-src-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A source written in 1960 describing events of 1914 is best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A contemporary document"
                    },
                    {
                              "id": "b",
                              "text": "An eyewitness account"
                    },
                    {
                              "id": "c",
                              "text": "A secondary source"
                    },
                    {
                              "id": "d",
                              "text": "A primary source"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Secondary",
                              "statement": "Later source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Created decades after the events, so it is secondary.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** A secondary source"
},
        },
        {
          id: "ciealhis-u3-src-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A memoir published in 1965 describes events of 1918. How many years separate its publication from the events it describes?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 47
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Time gap",
                              "statement": "Publication minus events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1965 - 1918 = 47 years.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "47"
},
        },
        {
          id: "ciealhis-u3-src-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reliability refers to a source's:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Age in years"
                    },
                    {
                              "id": "b",
                              "text": "Relevance to the question asked"
                    },
                    {
                              "id": "c",
                              "text": "Accuracy and trustworthiness"
                    },
                    {
                              "id": "d",
                              "text": "Length and detail"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reliability",
                              "statement": "Trustworthiness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reliability means the source is accurate and trustworthy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Accuracy and trustworthiness"
},
        },
        {
          id: "ciealhis-u3-src-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Corroboration involves:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ignoring conflicting evidence"
                    },
                    {
                              "id": "b",
                              "text": "Translating a source"
                    },
                    {
                              "id": "c",
                              "text": "Cross-checking sources against each other"
                    },
                    {
                              "id": "d",
                              "text": "Copying a source exactly"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Corroboration",
                              "statement": "Cross-checking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corroboration means cross-checking sources to verify accuracy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Cross-checking sources"
},
        },
        {
          id: "ciealhis-u3-src-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A government report written in 1945 describes wartime events of 1943. How many years after the events was it written?",
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
                              "kind": "fact",
                              "name": "Time gap",
                              "statement": "1945 vs 1943."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1945 - 1943 = 2 years.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealhis-u3-src-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A source can be reliable but not useful when it is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Accurate but does not address the question asked"
                    },
                    {
                              "id": "b",
                              "text": "Very old"
                    },
                    {
                              "id": "c",
                              "text": "A secondary source"
                    },
                    {
                              "id": "d",
                              "text": "Written by a biased author"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reliability vs usefulness",
                              "statement": "Trust vs relevance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Accuracy does not guarantee relevance to the question.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Accurate but off-topic"
},
        },
        {
          id: "ciealhis-u3-src-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The source-evaluation framework asks how many questions about a source's origin — who created it, when, why and for what purpose?",
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
                              "name": "Source evaluation",
                              "statement": "Origin questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Who, when, why and purpose — four origin questions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealhis-u3-src-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The intended audience of a source is important because it:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shapes the content, tone and omissions"
                    },
                    {
                              "id": "b",
                              "text": "Proves the source is reliable"
                    },
                    {
                              "id": "c",
                              "text": "Has no effect on the source"
                    },
                    {
                              "id": "d",
                              "text": "Determines the publication date"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Audience",
                              "statement": "Shapes content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Audience determines what is included, emphasised or omitted.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Shapes content, tone and omissions"
},
        },
        {
          id: "ciealhis-u3-src-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how a historian should evaluate a political speech as a source.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speech evaluation",
                              "statement": "Purpose + bias."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify speaker, occasion and intended audience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consider purpose: persuasion, propaganda or record.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Assess bias: speeches exaggerate and omit inconvenient facts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use cautiously; corroborate with other sources.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Consider speaker, purpose, audience and bias; corroborate"
},
        },
        {
          id: "ciealhis-u3-src-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes the reliability of primary versus secondary sources?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Primary sources are always more reliable"
                    },
                    {
                              "id": "b",
                              "text": "Neither type is automatically reliable; both require evaluation of purpose and bias"
                    },
                    {
                              "id": "c",
                              "text": "Primary sources need no evaluation"
                    },
                    {
                              "id": "d",
                              "text": "Secondary sources cannot be used in research"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Source types",
                              "statement": "Both need evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All sources have purpose, bias and limitations regardless of type.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Both require evaluation"
},
        },
        {
          id: "ciealhis-u3-src-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many broad types of sources — primary and secondary — should historians use?",
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
                              "reasoning": "Historians use two broad types: primary and secondary.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealhis-u3-src-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'a biased source is never useful to a historian.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bias",
                              "statement": "Does not equal useless."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bias distorts but does not eliminate evidential value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Biased sources reveal the perspective and motives of their creators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "For some questions — e.g. propaganda — bias is itself the evidence.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: biased sources are useful if evaluated critically.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bias limits but does not eliminate usefulness"
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
