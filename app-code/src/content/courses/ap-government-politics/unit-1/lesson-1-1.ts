import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apgov-u1-lesson-1-1",
  code: "1-1",
  title: "Constitutional Origins",
  goal: "I CAN explain the Constitutional Convention, ratification debates, and constitutional interpretation.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Articles of Confederation", definition: "1781 first constitution — weak central government, no taxing power." },
    { term: "Constitutional Convention", definition: "1787 Philadelphia meeting drafting the Constitution." },
    { term: "Federalists", definition: "Pro-Constitution advocates (Hamilton, Madison, Jay) favoring strong central government." },
    { term: "Anti-Federalists", definition: "Opponents fearing centralized power; demanded Bill of Rights." },
    { term: "Great Compromise", definition: "Bicameral legislature balancing large/small state interests (House by population, Senate equal)." },
    { term: "Federalist Papers", definition: "85 essays defending the Constitution's design." },
    { term: "Bill of Rights", definition: "First ten amendments ratified 1791 protecting individual liberties." },
  ],
  concepts: [
    {
      id: "apgov-u1-constitutional-origins",
      title: "From Articles to Constitution",
      skill: "Explain the Constitutional Convention and ratification debates.",
      lesson: {
        sections: [
          {
            heading: "Convention and compromises",
            body: "The 1787 Convention replaced the Articles with a stronger federal system; the Great Compromise created a bicameral legislature; the Three-Fifths Compromise counted enslaved people partially for representation.",
          },
          {
            heading: "Ratification debates",
            body: "Federalists (Hamilton, Madison, Jay) argued for ratification via the Federalist Papers; Anti-Federalists demanded a Bill of Rights — leading to the first ten amendments.",
          },
        ],
        keyFormulas: [
          { name: "Convention compromises", statement: "Great (bicameral) + Three-Fifths + Commerce/Slave Trade compromises" },
          { name: "Ratification", statement: "Federalists FOR vs. Anti-Federalists AGAINST + Bill of Rights promise" },
        ],
        workedExample: {
          problem: "Why did the framers create a bicameral legislature?",
          solution: "The Great Compromise balanced large states (population-based House) and small states (equal Senate) — necessary to get both groups to ratify the Constitution.",
        },
      },
      questions: [
        {
          id: "apgov-u1-constitutional-origins-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Great Compromise resolved the dispute over ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "slavery"
                    },
                    {
                              "id": "b",
                              "text": "representation in Congress between large and small states"
                    },
                    {
                              "id": "c",
                              "text": "the presidency"
                    },
                    {
                              "id": "d",
                              "text": "the Bill of Rights"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Great Compromise",
                              "statement": "Bicameral legislature balancing state interests."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Great Compromise created a House (by population) and Senate (equal representation) — satisfying both large and small states.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Representation dispute",
          "commonErrors": [
                    "Confusing with the Three-Fifths Compromise on slavery."
          ]
},
        },
        {
          id: "apgov-u1-constitutional-origins-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Federalist Papers were written primarily to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "oppose the Constitution"
                    },
                    {
                              "id": "b",
                              "text": "persuade states to ratify the Constitution"
                    },
                    {
                              "id": "c",
                              "text": "draft the Bill of Rights"
                    },
                    {
                              "id": "d",
                              "text": "criticize the Articles of Confederation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Federalist Papers",
                              "statement": "Essays defending the Constitution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hamilton, Madison, and Jay wrote 85 essays arguing the Constitution's design would prevent tyranny through separation of powers and checks and balances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They were published during ratification debates to sway public opinion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Persuade ratification",
          "commonErrors": [
                    "Thinking they opposed the Constitution — they were pro-ratification."
          ]
},
        },
        {
          id: "apgov-u1-constitutional-origins-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Constitution was written in 1787 and ratified in 1788. How many years separate these events? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1788 - 1787 = 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1788 - 1787 = 1$ year.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Including both years (2)."
          ]
},
        },
        {
          id: "apgov-u1-constitutional-origins-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Federalist and Anti-Federalist positions on the Constitution. What did each side fear or value?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Ratification debate",
                              "statement": "Two visions of federal power."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh competing constitutional visions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Federalists: feared anarchy under Articles; wanted strong central government for defense, commerce, credit; trusted separation of powers and checks to prevent tyranny.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Anti-Federalists: feared concentrated power; wanted states' rights, explicit protections for individual liberties; demanded Bill of Rights before ratification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resolution: Federalists promised a Bill of Rights — first ten amendments ratified 1791, satisfying Anti-Federalist concerns.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Federalists: strong union; Anti-Federalists: liberty protections",
          "commonErrors": [
                    "Treating one side as anti-government — both wanted effective government, differing on power distribution."
          ]
},
        },
        {
          id: "apgov-u1-constitutional-origins-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the Three-Fifths Compromise's role in creating the Constitution. What did it reveal about the framers' priorities?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Three-Fifths Compromise",
                              "statement": "Slavery's constitutional entrenchment."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Weigh compromise's significance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The compromise counted enslaved people as 3/5 of a person for representation and taxation — giving slave states political power disproportionate to their free population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It was necessary to get Southern states to ratify; without it, the Constitution might have failed — revealing that union trumped justice on slavery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The compromise embedded slavery in the constitutional framework — the 'original sin' that would require a civil war to resolve.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It also gave slaveholders incentive to increase enslaved populations for political power — a perverse democratic effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Three-Fifths Compromise entrenched slavery for political union",
          "commonErrors": [
                    "Treating it as a minor technicality — it fundamentally shaped representation and the slavery conflict."
          ]
},
        },
      ],
    },
  ],
};
