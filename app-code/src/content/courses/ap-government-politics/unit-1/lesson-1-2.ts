import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apgov-u1-lesson-1-2",
  code: "1-2",
  title: "Federalism and Separation of Powers",
  goal: "I CAN explain the constitutional division of power and its evolution.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Federalism", definition: "Division of power between national and state governments." },
    { term: "Separation of powers", definition: "Constitutional division among legislative, executive, judicial branches." },
    { term: "Checks and balances", definition: "Each branch can limit the others (veto, override, judicial review, impeachment)." },
    { term: "Enumerated powers", definition: "Powers specifically granted to Congress in Article I." },
    { term: "Elastic clause", definition: "Article I, Section 8, Clause 18 — 'necessary and proper' power to make laws carrying out enumerated powers." },
    { term: "Supremacy Clause", definition: "Article VI — federal law is supreme over state law when constitutionally authorized." },
  ],
  concepts: [
    {
      id: "apgov-u1-federalism-separation",
      title: "Dividing power",
      skill: "Explain federalism, separation of powers, and their evolution.",
      lesson: {
        sections: [
          {
            heading: "Constitutional design",
            body: "Federalism divides power between national and state governments; separation of powers divides among branches; checks and balances let each limit the others.",
          },
          {
            heading: "Evolution",
            body: "McCulloch v. Maryland (1819) expanded federal power via elastic clause; New Deal expanded federal authority; contemporary federalism debates concern Medicaid, marijuana, immigration.",
          },
        ],
        keyFormulas: [
          { name: "Powers", statement: "Enumerated (Congress) / Reserved (states, 10th Am.) / Concurrent (both)" },
          { name: "Checks", statement: "Veto/override (Leg-Exec) / judicial review (Judiciary) / impeachment (Legislature)" },
        ],
        workedExample: {
          problem: "How does the elastic clause expand federal power?",
          solution: "The 'necessary and proper' clause lets Congress make laws 'for carrying into Execution' its enumerated powers — interpreted broadly in McCulloch v. Maryland (1819) to uphold the national bank, establishing implied powers.",
        },
      },
      questions: [
        {
          id: "apgov-u1-federalism-separation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The elastic clause (Article I, Section 8, Clause 18) gives Congress power to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "abolish the states"
                    },
                    {
                              "id": "b",
                              "text": "make laws 'necessary and proper' for carrying out enumerated powers"
                    },
                    {
                              "id": "c",
                              "text": "override the president"
                    },
                    {
                              "id": "d",
                              "text": "impeach judges"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Elastic clause",
                              "statement": "'Necessary and proper' implied powers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The elastic clause lets Congress pass laws necessary to execute its enumerated powers — the basis for implied powers like the national bank.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Necessary and proper powers",
          "commonErrors": [
                    "Thinking it gives unlimited power — it's limited to executing enumerated powers."
          ]
},
        },
        {
          id: "apgov-u1-federalism-separation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "McCulloch v. Maryland (1819) is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "upheld slavery"
                    },
                    {
                              "id": "b",
                              "text": "established federal supremacy and implied powers"
                    },
                    {
                              "id": "c",
                              "text": "created the income tax"
                    },
                    {
                              "id": "d",
                              "text": "ended the Bank of the US"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "McCulloch v. Maryland",
                              "statement": "Federal supremacy + implied powers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marshall's ruling upheld the national bank under the elastic clause and declared federal law supreme over state law — expanding federal power.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It established both implied powers and federal supremacy doctrine.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Federal supremacy and implied powers",
          "commonErrors": [
                    "Confusing with Marbury (judicial review)."
          ]
},
        },
        {
          id: "apgov-u1-federalism-separation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Tenth Amendment reserves powers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the federal government only"
                    },
                    {
                              "id": "b",
                              "text": "the states or the people"
                    },
                    {
                              "id": "c",
                              "text": "the president"
                    },
                    {
                              "id": "d",
                              "text": "the Supreme Court"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tenth Amendment",
                              "statement": "Powers not delegated are reserved to states/people."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Tenth Amendment reserves to states or the people all powers not delegated to the federal government or prohibited to states.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's the constitutional basis for state authority and federalism.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "States or the people",
          "commonErrors": [
                    "Thinking it gives states unlimited power — federal supremacy still applies."
          ]
},
        },
        {
          id: "apgov-u1-federalism-separation-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how checks and balances prevent any single branch from dominating. Provide an example for each branch.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Checks and balances",
                              "statement": "Mutual limitation of branches."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Match checks to branches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Executive checks: president can veto legislation, appoint judges, command military; but Congress can override veto (2/3), reject appointments, impeach.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Legislative checks: Congress makes laws, controls purse strings, confirms appointments, ratifies treaties; but president can veto, Supreme Court can strike laws.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Judicial checks: Supreme Court can declare laws/actions unconstitutional (judicial review); but judges are appointed by president and confirmed by Senate — subject to political influence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Each branch can check the others through specific mechanisms",
          "commonErrors": [
                    "Listing powers without showing how they check each other."
          ]
},
        },
        {
          id: "apgov-u1-federalism-separation-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether federalism effectively balances national and state power, or whether one dominates. Use contemporary examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Federalism's balance",
                              "statement": "Contemporary power struggles."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Weigh effectiveness of the system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "National dominance examples: McCulloch expanded federal power; New Deal programs; federal supremacy in areas like immigration, defense, currency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State dominance examples: education, marriage, criminal law primarily state-controlled; Medicaid expansion let states opt out; marijuana legalization state-led despite federal prohibition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced areas: elections (state-run, federal framework); environmental regulation (federal standards, state implementation).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: federalism creates productive tension — neither dominates absolutely; power shifts based on issue and era.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Federalism creates tension but neither level dominates absolutely",
          "commonErrors": [
                    "Claiming one level always dominates — power varies by issue."
          ]
},
        },
      ],
    },
  ],
};
