import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apgov-u1-lesson-1-3",
  code: "1-3",
  title: "Civil Liberties and the Bill of Rights",
  goal: "I CAN explain key amendments and how courts interpret them.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "First Amendment", definition: "Freedom of religion, speech, press, assembly, petition." },
    { term: "Fourth Amendment", definition: "Protection against unreasonable searches and seizures; requires warrants." },
    { term: "Eighth Amendment", definition: "Prohibits cruel and unusual punishment; excessive bail and fines." },
    { term: "Fourteenth Amendment", definition: "Due process and equal protection clauses — basis for incorporating Bill of Rights against states." },
    { term: "Incorporation doctrine", definition: "Application of Bill of Rights to states via 14th Amendment." },
    { term: "Strict scrutiny", definition: "Highest judicial standard — laws must be narrowly tailored to compelling interest." },
  ],
  concepts: [
    {
      id: "apgov-u1-civil-liberties",
      title: "Liberties and their limits",
      skill: "Explain civil liberties, incorporation, and judicial interpretation.",
      lesson: {
        sections: [
          {
            heading: "Bill of Rights",
            body: "First ten amendments protect individual liberties — speech, religion, due process, search/seizure limits; originally applied only to federal government.",
          },
          {
            heading: "Incorporation",
            body: "The 14th Amendment's due process clause incorporated most Bill of Rights protections against state governments via Gitlow (1925) and subsequent cases.",
          },
        ],
        keyFormulas: [
          { name: "Key amendments", statement: "1st (speech/religion) / 4th (search/seizure) / 8th (punishment) / 14th (due process/equal protection)" },
          { name: "Scrutiny levels", statement: "Strict (compelling interest) / Intermediate (important interest) / Rational basis (legitimate interest)" },
        ],
        workedExample: {
          problem: "How did the 14th Amendment incorporate the Bill of Rights against states?",
          solution: "The due process clause ('nor shall any state deprive any person of life, liberty, or property without due process of law') allowed the Supreme Court to apply Bill of Rights protections to state governments — beginning with Gitlow v. New York (1925, speech) and gradually incorporating most rights.",
        },
      },
      questions: [
        {
          id: "apgov-u1-civil-liberties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The First Amendment protects all EXCEPT ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "freedom of speech"
                    },
                    {
                              "id": "b",
                              "text": "freedom of religion"
                    },
                    {
                              "id": "c",
                              "text": "right to bear arms"
                    },
                    {
                              "id": "d",
                              "text": "freedom of the press"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "First Amendment",
                              "statement": "Religion, speech, press, assembly, petition — NOT arms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The First Amendment protects religion, speech, press, assembly, and petition; the right to bear arms is the Second Amendment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Right to bear arms (2nd Am.)",
          "commonErrors": [
                    "Confusing First and Second Amendments."
          ]
},
        },
        {
          id: "apgov-u1-civil-liberties-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The incorporation doctrine applies ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bill of Rights protections to state governments"
                    },
                    {
                              "id": "b",
                              "text": "state laws to federal courts"
                    },
                    {
                              "id": "c",
                              "text": "the Constitution to corporations"
                    },
                    {
                              "id": "d",
                              "text": "federal powers to states"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Incorporation",
                              "statement": "Bill of Rights applied to states via 14th Amendment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Incorporation uses the 14th Amendment's due process clause to apply Bill of Rights protections against state and local governments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It began with Gitlow v. New York (1925) for speech and gradually incorporated most rights.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Bill of Rights to states",
          "commonErrors": [
                    "Thinking incorporation means merging levels of government."
          ]
},
        },
        {
          id: "apgov-u1-civil-liberties-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Bill of Rights contains how many amendments? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Amendments",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "First ten amendments = Bill of Rights."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Bill of Rights consists of the first ten amendments to the Constitution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Confusing with total amendments (27)."
          ]
},
        },
        {
          id: "apgov-u1-civil-liberties-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between the Fourteenth Amendment's due process and equal protection clauses, with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "14th Amendment clauses",
                              "statement": "Procedural fairness vs. equality."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Distinguish clauses with examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Due process: government must follow fair procedures before depriving life, liberty, or property — e.g., criminal defendants get notice, hearing, counsel (Gideon v. Wainwright).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Equal protection: government must treat similarly situated people equally — e.g., Brown v. Board struck down racial segregation; heightened scrutiny for suspect classifications.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Together they provide both procedural fairness and substantive equality — foundations of civil rights law.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Due process = fair procedures; equal protection = equal treatment",
          "commonErrors": [
                    "Conflating the clauses — they protect different rights."
          ]
},
        },
        {
          id: "apgov-u1-civil-liberties-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the tension between civil liberties and national security. How have courts balanced free speech, privacy, and security?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Liberties vs. security",
                              "statement": "Post-9/11 and historical precedents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Free speech: protected even for offensive views (Skokie case); but 'clear and present danger' (Schenck) and incitement (Brandenburg) allow limits; post-9/11 surveillance raised privacy concerns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Privacy: Griswold (contraception), Roe (abortion) established privacy rights from 'penumbras' — but Dobbs (2022) overturned Roe, showing liberties' fragility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Security: Patriot Act expanded surveillance; Gitmo detentions challenged habeas corpus; courts balance individual rights against 'compelling government interest.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: courts use strict scrutiny for fundamental rights but allow exceptions for imminent danger — the balance shifts with perceived threats.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Courts balance liberties and security through scrutiny standards, shifting with threats",
          "commonErrors": [
                    "Treating liberties as absolute — courts always balance against compelling interests."
          ]
},
        },
      ],
    },
  ],
};
