import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apush-u1-lesson-1-2",
  code: "1-2",
  title: "The American Revolution",
  goal: "I CAN explain the causes and course of the Revolution and the debates over the new nation.",
  standards: ["Period 3"],
  vocabulary: [
    { term: "Stamp Act", definition: "1765 tax on printed materials — sparked colonial protest ('No taxation without representation')." },
    { term: "Boston Tea Party", definition: "1773 protest where colonists dumped British tea into Boston Harbor." },
    { term: "Declaration of Independence", definition: "1776 document asserting natural rights and listing grievances against the king." },
    { term: "Articles of Confederation", definition: "1781 first constitution — a weak national government with no power to tax." },
    { term: "Federalist Papers", definition: "Essays by Hamilton, Madison, and Jay arguing for ratification of the Constitution." },
    { term: "Bill of Rights", definition: "First ten amendments protecting individual liberties (1791)." },
  ],
  concepts: [
    {
      id: "apush-u1-american-revolution",
      title: "Causes and course of the Revolution",
      skill: "Trace the escalation from protests to war and independence.",
      lesson: {
        sections: [
          {
            heading: "Escalation",
            body: "Post-1763 British taxes (Stamp Act, Townshend Acts) and coercive measures (Boston Massacre, Intolerable Acts) pushed moderates toward resistance; the shot at Lexington (1775) began armed conflict.",
          },
          {
            heading: "Winning the war",
            body: "Washington's strategy avoided decisive defeat; the French alliance after Saratoga (1777) proved decisive; Yorktown (1781) ended major fighting.",
          },
        ],
        keyFormulas: [
          { name: "Protest slogan", statement: "'No taxation without representation'" },
          { name: "Turning points", statement: "Lexington 1775 → Saratoga 1777 → Yorktown 1781" },
        ],
        workedExample: {
          problem: "Why did Britain lose the Revolutionary War despite superior resources?",
          solution: "Distance made supply and reinforcement slow; colonial guerrilla tactics and local knowledge favored defenders; the French alliance brought troops, navy, and funds; British domestic opinion turned against the costly war.",
        },
      },
      questions: [
        {
          id: "apush-u1-american-revolution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Stamp Act of 1765 was significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "taxed sugar imports"
                    },
                    {
                              "id": "b",
                              "text": "taxed printed materials and provoked widespread colonial protest"
                    },
                    {
                              "id": "c",
                              "text": "closed Boston Harbor"
                    },
                    {
                              "id": "d",
                              "text": "banned colonial assemblies"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Imperial taxes",
                              "statement": "Parliament taxed colonies without representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Stamp Act taxed newspapers, legal documents, and licenses — the first direct internal tax, provoking boycotts and the slogan 'No taxation without representation.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Direct tax on printed materials",
          "commonErrors": [
                    "Confusing it with the Sugar Act (1764)."
          ]
},
        },
        {
          id: "apush-u1-american-revolution-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Articles of Confederation failed primarily because the national government ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "had no executive or judiciary"
                    },
                    {
                              "id": "b",
                              "text": "could not tax or regulate commerce"
                    },
                    {
                              "id": "c",
                              "text": "gave too much power to the president"
                    },
                    {
                              "id": "d",
                              "text": "prohibited slavery"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Articles of Confederation",
                              "statement": "A league of states with a weak central government."
                    },
                    {
                              "kind": "concept",
                              "name": "Weaknesses",
                              "statement": "No taxing power, no commerce regulation, unanimous amendment rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Under the Articles, Congress could not levy taxes or regulate interstate commerce, leaving the government unable to pay debts or enforce laws.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "States acted independently (e.g., separate trade policies), demonstrating the need for a stronger union.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Could not tax or regulate commerce",
          "commonErrors": [
                    "Citing a 'strong president' — there was no president under the Articles."
          ]
},
        },
        {
          id: "apush-u1-american-revolution-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Declaration of Independence was adopted on July 4, 1776. The Constitution was ratified in 1788. How many years separate these events? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1788 - 1776 = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1788 - 1776 = 12$ years.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $12$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "12",
          "commonErrors": [
                    "Miscounting inclusively (13)."
          ]
},
        },
        {
          id: "apush-u1-american-revolution-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the French alliance changed the outcome of the Revolutionary War, citing the significance of Saratoga and Yorktown.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "French alliance",
                              "statement": "France entered the war after Saratoga (1777)."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Link diplomatic shifts to military outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The American victory at Saratoga convinced France the colonists could win, prompting the 1778 alliance with troops, navy, and funding.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "French naval power trapped Cornwallis at Yorktown (1781), forcing surrender and effectively ending major combat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Without French money and sea power, Washington's outlast strategy might have failed; the alliance converted stalemate into victory.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "French alliance after Saratoga brought decisive naval and financial power",
          "commonErrors": [
                    "Treating the alliance as a minor factor rather than decisive."
          ]
},
        },
        {
          id: "apush-u1-american-revolution-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the extent to which the Constitution resolved the problems of the Articles of Confederation. Address at least two specific weaknesses and their constitutional remedies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Constitutional remedies",
                              "statement": "Specific fixes: taxing power, commerce clause, executive, amendment process."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical evaluation",
                              "statement": "Match problems to solutions and weigh remaining tensions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Taxation: Articles gave Congress no power to tax; Constitution Article I gives Congress power 'to lay and collect taxes' — resolving the revenue crisis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Commerce: Articles left trade to states; Constitution's Commerce Clause gives Congress power to regulate interstate trade, creating a national economic union.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Executive/judiciary: Articles had only a legislature; Constitution adds a president and federal courts, giving the government enforcement capacity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Remaining tensions: debates over slavery, federal vs. state power, and individual rights persisted — resolved only partially by the Bill of Rights and later amendments.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Constitution fixed Articles' weaknesses but left deep tensions (slavery, federalism)",
          "commonErrors": [
                    "Listing weaknesses without matching them to specific constitutional provisions."
          ]
},
        },
      ],
    },
  ],
};
