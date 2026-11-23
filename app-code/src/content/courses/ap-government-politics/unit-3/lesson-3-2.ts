import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apgov-u3-lesson-3-2",
  code: "3-2",
  title: "Bureaucracy and the Courts",
  goal: "I CAN explain the federal bureaucracy's role and judicial review.",
  standards: ["Unit 5"],
  vocabulary: [
    { term: "Federal bureaucracy", definition: "Executive agencies implementing laws — departments, independent agencies, government corporations." },
    { term: "Civil service", definition: "Merit-based federal employment system (Pendleton Act 1883)." },
    { term: "Independent agencies", definition: "Agencies outside cabinet departments (EPA, FCC, SEC) with regulatory power." },
    { term: "Judicial review", definition: "Power of courts to declare laws/actions unconstitutional (Marbury v. Madison)." },
    { term: "Stare decisis", definition: "Doctrine of following precedent — stability in law." },
    { term: "Amicus curiae", definition: "Friend of the court briefs submitted by interested parties." },
  ],
  concepts: [
    {
      id: "apgov-u3-bureaucracy-courts",
      title: "The administrative state and judiciary",
      skill: "Explain bureaucratic implementation and judicial review.",
      lesson: {
        sections: [
          {
            heading: "Bureaucracy",
            body: "Federal agencies (EPA, FDA, SEC) implement laws through rulemaking and enforcement; civil service ensures merit-based employment; bureaucratic discretion affects policy outcomes.",
          },
          {
            heading: "Courts",
            body: "Federal courts interpret laws and review constitutionality; Supreme Court has final authority via judicial review; stare decisis provides stability but can entrench error (Dred Scott overruled by Brown).",
          },
        ],
        keyFormulas: [
          { name: "Bureaucracy", statement: "Departments (cabinet) / Independent agencies / Government corporations" },
          { name: "Judicial review", statement: "Marbury 1803 → courts check legislative/executive actions" },
        ],
        workedExample: {
          problem: "How does judicial review check other branches?",
          solution: "Courts can strike down unconstitutional laws (legislative check) and executive actions (executive check) — established in Marbury v. Madison (1803), making judiciary co-equal.",
        },
      },
      questions: [
        {
          id: "apgov-u3-bureaucracy-courts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Independent agencies differ from cabinet departments because they ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are part of the military"
                    },
                    {
                              "id": "b",
                              "text": "operate outside cabinet structure with regulatory independence"
                    },
                    {
                              "id": "c",
                              "text": "only advise Congress"
                    },
                    {
                              "id": "d",
                              "text": "are elected"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Independent agencies",
                              "statement": "Regulatory bodies outside cabinet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Independent agencies (EPA, FCC, SEC) have regulatory power outside cabinet departments — designed for expertise and insulation from political pressure.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Outside cabinet structure",
          "commonErrors": [
                    "Confusing with cabinet departments (State, Defense)."
          ]
},
        },
        {
          id: "apgov-u3-bureaucracy-courts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Marbury v. Madison (1803) established ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the right to bear arms"
                    },
                    {
                              "id": "b",
                              "text": "judicial review — courts can strike down unconstitutional laws"
                    },
                    {
                              "id": "c",
                              "text": "federal supremacy"
                    },
                    {
                              "id": "d",
                              "text": "the electoral college"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Judicial review",
                              "statement": "Courts invalidate unconstitutional actions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marshall's ruling established judicial review — courts can declare laws and executive actions unconstitutional, making the judiciary a check on other branches.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It made the judiciary co-equal despite having 'neither force nor will.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Judicial review",
          "commonErrors": [
                    "Confusing with McCulloch (federal supremacy)."
          ]
},
        },
        {
          id: "apgov-u3-bureaucracy-courts-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Pendleton Act of 1883 established ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the income tax"
                    },
                    {
                              "id": "b",
                              "text": "merit-based civil service"
                    },
                    {
                              "id": "c",
                              "text": "the Federal Reserve"
                    },
                    {
                              "id": "d",
                              "text": "women's suffrage"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Pendleton Act",
                              "statement": "Merit-based federal employment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Pendleton Act created the modern civil service — merit-based hiring replacing patronage (spoils system).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It reformed federal hiring to reduce corruption.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Merit-based civil service",
          "commonErrors": [
                    "Confusing with other 1880s reforms."
          ]
},
        },
        {
          id: "apgov-u3-bureaucracy-courts-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the bureaucracy implements laws and why bureaucratic discretion matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Bureaucratic implementation",
                              "statement": "Agencies translate laws into action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Congress passes vague laws; agencies (EPA, FDA) create detailed rules through notice-and-comment rulemaking; they enforce through inspections, permits, penalties.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Bureaucratic discretion — rulemaking choices, enforcement priorities — significantly affects policy outcomes; 'street-level bureaucrats' (police, teachers) make daily decisions shaping citizen experience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accountability: agencies are checked by courts (rule challenges), Congress (oversight, budget), and the president (appointments) — but control is diffuse.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Bureaucracy implements laws through rulemaking; discretion shapes policy",
          "commonErrors": [
                    "Thinking bureaucracy just 'follows orders' — discretion is inherent."
          ]
},
        },
        {
          id: "apgov-u3-bureaucracy-courts-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the Supreme Court's role as 'countermajoritarian' institution. Does judicial review threaten democracy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Countermajoritarian difficulty",
                              "statement": "Unelected judges checking elected branches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Concern: nine unelected justices can overturn laws supported by elected majorities — 'countermajoritarian difficulty'; lifetime appointments insulate them from accountability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justifications: courts protect minority rights against majority tyranny (Brown, civil liberties); constitutional interpretation requires expertise and independence; framers intended checks on temporary majorities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accountability mechanisms: appointments (political process), impeachment (rare), constitutional amendments (difficult) — all slow and infrequent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: judicial review is inherently anti-democratic in the short term but protects democracy's foundations — the tension is structural, not solvable.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Judicial review is countermajoritarian but protects democratic foundations",
          "commonErrors": [
                    "Simple pro/con verdict — the tension is inherent to constitutional design."
          ]
},
        },
      ],
    },
  ],
};
