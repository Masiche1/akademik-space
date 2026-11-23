import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apgov-u3-lesson-3-1",
  code: "3-1",
  title: "Congress and the Presidency",
  goal: "I CAN explain legislative and executive powers and their conflicts.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Enumerated powers", definition: "Specific powers granted to Congress and president in the Constitution." },
    { term: "Implied powers", definition: "Powers derived from elastic clause — e.g., national bank." },
    { term: "Veto", definition: "President's power to reject legislation; overridden by 2/3 of both houses." },
    { term: "Pocket veto", definition: "Unsigned bill dies when Congress adjourns — no override possible." },
    { term: "Filibuster", definition: "Senate procedure allowing extended debate to delay votes; cloture requires 60 votes." },
    { term: "Executive order", definition: "Presidential directive with force of law — subject to judicial review." },
  ],
  concepts: [
    {
      id: "apgov-u3-congress-presidency",
      title: "Legislative and executive powers",
      skill: "Compare congressional and presidential powers and conflicts.",
      lesson: {
        sections: [
          {
            heading: "Congressional powers",
            body: "Make laws, declare war, control spending, confirm appointments, ratify treaties, impeach — the 'power of the purse' makes it dominant in budgeting.",
          },
          {
            heading: "Presidential powers",
            body: "Execute laws, command military, appoint judges/officials, veto legislation, issue executive orders, conduct foreign policy — but constrained by Congress and courts.",
          },
        ],
        keyFormulas: [
          { name: "Congress powers", statement: "Lawmaking + war declaration + appropriations + confirmation + impeachment" },
          { name: "President powers", statement: "Execution + commander-in-chief + appointments + veto + executive orders" },
        ],
        workedExample: {
          problem: "Why is Congress considered the 'first branch'?",
          solution: "Article I gives Congress enumerated powers including lawmaking and appropriations; the president can only execute laws Congress passes — making Congress the primary policymaker.",
        },
      },
      questions: [
        {
          id: "apgov-u3-congress-presidency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The power of the purse refers to Congress's authority to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "print money"
                    },
                    {
                              "id": "b",
                              "text": "control government spending"
                    },
                    {
                              "id": "c",
                              "text": "impeach the president"
                    },
                    {
                              "id": "d",
                              "text": "declare war"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Power of the purse",
                              "statement": "Congress controls appropriations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Congress's power of the purse — control over appropriations — is its most potent tool, forcing the president to negotiate for funding.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Control spending",
          "commonErrors": [
                    "Confusing with monetary policy (Federal Reserve)."
          ]
},
        },
        {
          id: "apgov-u3-congress-presidency-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pocket veto occurs when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "president signs a bill privately"
                    },
                    {
                              "id": "b",
                              "text": "president takes no action and Congress adjourns, killing the bill"
                    },
                    {
                              "id": "c",
                              "text": "Congress overrides a veto"
                    },
                    {
                              "id": "d",
                              "text": "Supreme Court strikes a law"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pocket veto",
                              "statement": "Unsigned bill dies on adjournment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If the president doesn't sign or veto a bill and Congress adjourns, it dies — a pocket veto that cannot be overridden.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's a powerful tool used strategically at session's end.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Bill dies on adjournment",
          "commonErrors": [
                    "Confusing with regular veto (returned to Congress)."
          ]
},
        },
        {
          id: "apgov-u3-congress-presidency-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Overriding a presidential veto requires what fraction of each house? Enter the numerator (e.g., 2 for 2/3).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Numerator",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Constitutional requirement",
                              "statement": "Two-thirds of each house."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Article I requires two-thirds of each house to override a veto.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2$ (two-thirds).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Thinking simple majority suffices."
          ]
},
        },
        {
          id: "apgov-u3-congress-presidency-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare presidential and congressional foreign policy powers. Which branch leads and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Foreign policy powers",
                              "statement": "Executive vs. legislative roles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "President leads: commander-in-chief, negotiates treaties, recognizes nations, conducts diplomacy — constitutional 'chief diplomat' role.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Congress checks: declares war, ratifies treaties (2/3 Senate), controls funding, can impeach — 'power of the purse' limits military action.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "In practice: president initiates but Congress funds; War Powers Resolution (1973) requires congressional approval for >60-day deployments; tension persists.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "President initiates, Congress checks via funding and war powers",
          "commonErrors": [
                    "Thinking one branch has exclusive control — powers are shared and contested."
          ]
},
        },
        {
          id: "apgov-u3-congress-presidency-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the filibuster's role in the Senate. Does it protect minority rights or obstruct democracy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Filibuster debate",
                              "statement": "Minority protection vs. gridlock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protection view: Senate's design (equal state representation, longer terms) intentionally slows change; filibuster forces compromise and protects minority interests from majority tyranny.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Obstruction view: 60-vote cloture requirement enables minority to block most legislation; 'routine' filibusters paralyze governance; most democracies lack such supermajority requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reform efforts: 'nuclear option' (2013, 2017) eliminated filibusters for lower-court and Supreme Court nominees but kept them for legislation — partial reform.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: filibuster protects minority rights but at cost of gridlock — its justification depends on whether one values deliberation or efficiency more.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Filibuster protects minorities but causes gridlock — contested reform",
          "commonErrors": [
                    "One-sided — the filibuster has both protective and obstructive effects."
          ]
},
        },
      ],
    },
  ],
};
