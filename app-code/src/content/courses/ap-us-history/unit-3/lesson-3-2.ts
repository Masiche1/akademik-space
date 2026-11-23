import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apush-u3-lesson-3-2",
  code: "3-2",
  title: "Great Depression and New Deal",
  goal: "I CAN explain the Depression's causes and the New Deal's expansion of federal power.",
  standards: ["Period 7"],
  vocabulary: [
    { term: "Black Tuesday", definition: "October 29, 1929 stock market crash — triggered the Depression." },
    { term: "New Deal", definition: "FDR's 1933-1939 programs expanding federal intervention in the economy." },
    { term: "FDIC", definition: "Federal Deposit Insurance Corporation — insured bank deposits to prevent bank runs." },
    { term: "WPA", definition: "Works Progress Administration — employed millions on public projects." },
    { term: "Social Security", definition: "1935 program providing pensions for elderly and unemployment insurance." },
    { term: "Court-packing plan", definition: "FDR's failed 1937 attempt to add justices after the Court struck down New Deal laws." },
  ],
  concepts: [
    {
      id: "apush-u3-great-depression-new-deal",
      title: "Causes and New Deal response",
      skill: "Explain the Depression's causes and evaluate the New Deal.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "Overproduction, stock speculation, weak banking regulation, and the gold standard combined; the 1929 crash triggered bank failures, unemployment (~25%), and deflation.",
          },
          {
            heading: "New Deal",
            body: "FDR's first 100 days (bank holiday, FDIC, CCC, AAA, TVA) stabilized the economy; later programs (WPA, Social Security, Wagner Act) created the modern welfare state and empowered labor.",
          },
        ],
        keyFormulas: [
          { name: "New Deal timeline", statement: "First 100 days 1933 → Second New Deal 1935-36 → court-packing fight 1937" },
          { name: "Key agencies", statement: "FDIC, CCC, WPA, TVA, SEC, SSA" },
        ],
        workedExample: {
          problem: "Why did the New Deal expand federal power so dramatically?",
          solution: "The Depression's scale overwhelmed state and local resources; FDR's 'brain trust' created federal programs for relief, recovery, and reform — establishing precedent for federal economic management.",
        },
      },
      questions: [
        {
          id: "apush-u3-great-depression-new-deal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Black Tuesday (October 29, 1929) refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the start of WWI"
                    },
                    {
                              "id": "b",
                              "text": "the stock market crash that triggered the Great Depression"
                    },
                    {
                              "id": "c",
                              "text": "FDR's inauguration"
                    },
                    {
                              "id": "d",
                              "text": "the Dust Bowl"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Black Tuesday",
                              "statement": "Stock market collapse marking Depression's start."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The October 1929 crash wiped out billions in paper wealth, triggering bank failures and the Great Depression.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1929 stock market crash",
          "commonErrors": [
                    "Confusing with the 1933 banking crisis."
          ]
},
        },
        {
          id: "apush-u3-great-depression-new-deal-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The FDIC was created to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "provide jobs for the unemployed"
                    },
                    {
                              "id": "b",
                              "text": "insure bank deposits to prevent bank runs"
                    },
                    {
                              "id": "c",
                              "text": "regulate the stock market"
                    },
                    {
                              "id": "d",
                              "text": "pay farmers for surplus crops"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FDIC",
                              "statement": "Insures deposits; restored public confidence in banks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The FDIC insured individual deposits up to $2,500, ending the panic of bank runs that had destroyed thousands of banks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It restored confidence in the banking system and still operates today.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Insure bank deposits",
          "commonErrors": [
                    "Confusing with SEC (stock regulation)."
          ]
},
        },
        {
          id: "apush-u3-great-depression-new-deal-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Unemployment peaked at about 25% during the Depression. If the labor force was 50 million, approximately how many workers were unemployed at peak? Enter the number (millions).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Unemployed (millions)",
                              "answer": 12.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage of labor force",
                              "statement": "$25\\% \\times 50 = 12.5$ million."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$0.25 \\times 50 = 12.5$ million workers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $12.5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "12.5",
          "commonErrors": [
                    "Using 100% or wrong base."
          ]
},
        },
        {
          id: "apush-u3-great-depression-new-deal-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the New Deal's effectiveness: did it end the Depression? Distinguish between relief, recovery, and reform goals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "New Deal assessment",
                              "statement": "Mixed success across relief/recovery/reform."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical evaluation",
                              "statement": "Weigh outcomes against goals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relief: succeeded — WPA employed 8.5 million, CCC employed 3 million young men, direct aid (FERA) fed millions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Recovery: partially — GDP recovered but unemployment stayed high until WWII defense spending; the Depression's structural causes persisted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reform: succeeded — banking regulation, Social Security, Wagner Act (labor rights), SEC — lasting structural changes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: the New Deal saved capitalism by humanizing it but did not end the Depression — WWII did.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "New Deal relieved and reformed but WWII ended the Depression",
          "commonErrors": [
                    "Claiming the New Deal ended the Depression — unemployment remained high until 1941."
          ]
},
        },
        {
          id: "apush-u3-great-depression-new-deal-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the long-term significance of the New Deal for the modern American state. How did it change the federal government's role?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "New Deal legacy",
                              "statement": "Permanent expansion of federal economic role."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Trace policy precedents to modern governance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct precedent: federal responsibility for economic stability — every subsequent recession response (from Eisenhower to Obama) invoked New Deal-style intervention.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Institutional legacy: Social Security, FDIC, SEC, and labor protections became permanent features; the 'welfare state' framework dates to the New Deal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Political realignment: the New Deal coalition (urban workers, immigrants, Southern whites, African Americans) dominated politics until the 1960s-70s, realigning party loyalty.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Limits: New Deal largely excluded agricultural and domestic workers (mostly African American and immigrant women) from Social Security — a racial/gender gap persisted.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "New Deal permanently expanded federal role and realigned parties, with racial gaps",
          "commonErrors": [
                    "Treating the New Deal as temporary or ignoring its exclusions."
          ]
},
        },
      ],
    },
  ],
};
