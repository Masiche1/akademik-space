import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "apgov-u4-lesson-4-2",
  code: "4-2",
  title: "Contemporary Issues",
  goal: "I CAN analyze current political issues and their constitutional dimensions.",
  standards: ["Unit 6"],
  vocabulary: [
    { term: "Federalism debates", definition: "State vs. federal authority over healthcare, marijuana, immigration, education." },
    { term: "Executive power", definition: "War powers, emergency powers, signing statements, unitary executive theory." },
    { term: "Campaign finance", definition: "Citizens United (2010) — corporations can spend unlimited on independent expenditures." },
    { term: "Voting rights", definition: "Voter ID, gerrymandering, felon disenfranchisement, early voting access." },
    { term: "Immigration policy", definition: "Federal vs. state enforcement; DACA; border policy." },
    { term: "Judicial appointments", definition: "Lifetime tenure, politicization of confirmations, court-packing debates." },
  ],
  concepts: [
    {
      id: "apgov-u4-contemporary-issues",
      title: "Current controversies",
      skill: "Apply constitutional principles to contemporary issues.",
      lesson: {
        sections: [
          {
            heading: "Federalism battles",
            body: "States challenge federal authority: marijuana legalization vs. federal prohibition; Medicaid expansion opt-outs; sanctuary cities vs. federal immigration enforcement — courts resolve conflicts.",
          },
          {
            heading: "Executive power",
            body: "Presidents claim broad powers (war powers, emergency declarations, executive orders); Congress and courts push back — balance shifts with each administration.",
          },
        ],
        keyFormulas: [
          { name: "Citizens United", statement: "Corporations can spend unlimited on independent expenditures" },
          { name: "Federalism conflicts", statement: "Marijuana + Medicaid + immigration + education" },
        ],
        workedExample: {
          problem: "How does marijuana legalization illustrate federalism conflict?",
          solution: "States legalized marijuana while federal law (Controlled Substances Act) still prohibits it — creating legal conflict; DOJ largely doesn't enforce federal law in legal states, but tension persists.",
        },
      },
      questions: [
        {
          id: "apgov-u4-contemporary-issues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Citizens United v. FEC (2010) ruled that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "corporations can't spend on politics"
                    },
                    {
                              "id": "b",
                              "text": "corporations can spend unlimited on independent political expenditures"
                    },
                    {
                              "id": "c",
                              "text": "campaign contributions are illegal"
                    },
                    {
                              "id": "d",
                              "text": "super PACs are unconstitutional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Citizens United",
                              "statement": "Corporate political spending rights."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Citizens United held corporations have First Amendment rights to spend unlimited on independent expenditures — not direct contributions — reshaping campaign finance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Unlimited independent expenditures",
          "commonErrors": [
                    "Confusing independent expenditures with direct contributions."
          ]
},
        },
        {
          id: "apgov-u4-contemporary-issues-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The unitary executive theory argues ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the president should share power with Congress"
                    },
                    {
                              "id": "b",
                              "text": "executive power should be concentrated in the president"
                    },
                    {
                              "id": "c",
                              "text": "the Supreme Court should interpret the Constitution"
                    },
                    {
                              "id": "d",
                              "text": "federalism should be abolished"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Unitary executive",
                              "statement": "Concentrated presidential power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unitary executive theory holds Article II gives the president all executive power — arguing against independent agencies and congressional limits on presidential control.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's contested — critics say it enables presidential overreach.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Concentrated presidential power",
          "commonErrors": [
                    "Thinking it supports shared executive power."
          ]
},
        },
        {
          id: "apgov-u4-contemporary-issues-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Voter turnout in the 2020 presidential election was about 66.7% of eligible voters — the highest since 1900. If 239 million were eligible, approximately how many voted? Enter millions.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Voters (millions)",
                              "answer": 159
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$0.667 \\times 239 \\approx 159$ million."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$0.667 \\times 239 \\approx 159.4$ million voted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $159$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "159",
          "commonErrors": [
                    "Using wrong percentage or base."
          ]
},
        },
        {
          id: "apgov-u4-contemporary-issues-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how marijuana legalization demonstrates federalism conflict, citing specific legal tensions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Marijuana federalism",
                              "statement": "State vs. federal law conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Federal law: Controlled Substances Act (1970) classifies marijuana as Schedule I — no accepted medical use, high abuse potential.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "State law: 38+ states legalized medical or recreational marijuana — direct conflict with federal prohibition; states argue 10th Amendment and federalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resolution: DOJ largely doesn't enforce federal marijuana law in legal states ('Cole memo'); but federal prohibition technically remains — creating legal uncertainty.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "States legalized while federal law prohibits — unresolved conflict",
          "commonErrors": [
                    "Thinking legalization is settled — federal prohibition remains."
          ]
},
        },
        {
          id: "apgov-u4-contemporary-issues-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the debate over expanding the Supreme Court. What are the arguments for and against, and what are the risks?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Court-packing debate",
                              "statement": "Expanding vs. preserving the Court."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expansion arguments: Court is ideologically unrepresentative; justices serve lifetime terms creating generational imbalance; FDR's 1937 attempt failed but precedent exists; some argue add justices to restore balance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Against: Court's independence depends on insulation from politics; expansion invites tit-for-tat escalation destroying legitimacy; constitutional design assumed fixed nine justices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risks: politicizes judiciary permanently; could trigger constitutional crisis; undermines stare decisis and public confidence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: court expansion is constitutionally permissible (Congress sets size) but politically explosive — risks outweigh short-term gains for most observers.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Court expansion is possible but politically destabilizing",
          "commonErrors": [
                    "Treating it as clearly beneficial or harmful — the tradeoffs are genuine."
          ]
},
        },
      ],
    },
  ],
};
