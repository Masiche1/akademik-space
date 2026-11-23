import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apwh-u3-lesson-3-2",
  code: "3-2",
  title: "Revolutions: Atlantic and Industrial",
  goal: "I CAN compare the American, French, Haitian, and Industrial Revolutions.",
  standards: ["Period 5"],
  vocabulary: [
    { term: "American Revolution", definition: "1776 independence from Britain; inspired by Enlightenment ideas." },
    { term: "French Revolution", definition: "1789 overthrow of monarchy; 'Liberty, Equality, Fraternity'; Napoleonic aftermath." },
    { term: "Haitian Revolution", definition: "1791-1804 only successful slave revolution; created first Black republic." },
    { term: "Industrial Revolution", definition: "c. 1760-1840 shift to factory production; steam power, urbanization." },
    { term: "Enlightenment", definition: "18th-century intellectual movement emphasizing reason, rights, and progress." },
    { term: "Nationalism", definition: "Belief in nation-state as primary political unit — reshaped 19th-century Europe." },
  ],
  concepts: [
    {
      id: "apwh-u3-revolutions",
      title: "Revolutions compared",
      skill: "Compare the causes and outcomes of Atlantic and Industrial revolutions.",
      lesson: {
        sections: [
          {
            heading: "Atlantic revolutions",
            body: "American (1776): colonial tax resistance → independence. French (1789): fiscal crisis → republicanism → Napoleon. Haitian (1791): slave rebellion → first Black republic — the only successful slave revolution.",
          },
          {
            heading: "Industrial Revolution",
            body: "Steam engine, factory system, and mass production transformed economies; urbanization and new social classes emerged; spread from Britain globally by 1900.",
          },
        ],
        keyFormulas: [
          { name: "Revolution timeline", statement: "American 1776 → French 1789 → Haitian 1791 → Industrial c. 1760-1840" },
          { name: "Enlightenment ideas", statement: "Natural rights / popular sovereignty / separation of powers / social contract" },
        ],
        workedExample: {
          problem: "Why was the Haitian Revolution unique among Atlantic revolutions?",
          solution: "It was the only successful slave revolution — Toussaint Louverture and Dessalines defeated French, British, and Spanish forces to create the first independent Black republic (1804), inspiring abolition worldwide.",
        },
      },
      questions: [
        {
          id: "apwh-u3-revolutions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Haitian Revolution is unique because it was ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the first American revolution"
                    },
                    {
                              "id": "b",
                              "text": "the only successful slave revolution creating a Black republic"
                    },
                    {
                              "id": "c",
                              "text": "led by Napoleon"
                    },
                    {
                              "id": "d",
                              "text": "the bloodiest revolution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Haitian Revolution",
                              "statement": "Only successful slave revolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Haitian Revolution (1791-1804) was the only successful slave revolt in history — creating the first independent Black republic and inspiring global abolition.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Only successful slave revolution",
          "commonErrors": [
                    "Confusing with the French Revolution which it inspired/defeated."
          ]
},
        },
        {
          id: "apwh-u3-revolutions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The French Revolution began in 1789 primarily because of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "foreign invasion"
                    },
                    {
                              "id": "b",
                              "text": "fiscal crisis and inequality under the Old Regime"
                    },
                    {
                              "id": "c",
                              "text": "religious reform"
                    },
                    {
                              "id": "d",
                              "text": "industrialization"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "French Revolution causes",
                              "statement": "Debt crisis + social inequality + Enlightenment ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "France's debt (from wars and luxury), bread prices, and inequality between Three Estates triggered revolution; Enlightenment ideas provided ideological fuel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The storming of the Bastille (July 14, 1789) marked the revolution's start.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fiscal crisis and social inequality",
          "commonErrors": [
                    "Attributing to foreign invasion — that came later (1792)."
          ]
},
        },
        {
          id: "apwh-u3-revolutions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Industrial Revolution began in Britain c. 1760 and spread globally by c. 1900. How many years is that span? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 340
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1900 - 1760 = 340$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1900 - 1760 = 340$ years for global spread.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $340$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "340",
          "commonErrors": [
                    "Using wrong endpoints."
          ]
},
        },
        {
          id: "apwh-u3-revolutions-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the American and French Revolutions: causes, ideals, and outcomes. Why did one succeed while the other descended into violence?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Atlantic revolutions",
                              "statement": "Similar ideals, different paths."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh different revolutionary trajectories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Causes: American — colonial tax resistance; French — fiscal crisis, inequality, Enlightenment. Both drew on natural rights and popular sovereignty.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Outcomes: American — stable republic, Bill of Rights, but slavery persisted; French — radical phases (Reign of Terror), Napoleon's authoritarian empire, but exported revolutionary ideals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Difference: American revolution was relatively orderly (elite-led, limited war aims); French faced economic collapse, foreign invasion, and internal counterrevolution — requiring more radical measures.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "American: orderly independence; French: radical upheaval with Napoleon aftermath",
          "commonErrors": [
                    "Treating them as identical — different contexts produced different outcomes."
          ]
},
        },
        {
          id: "apwh-u3-revolutions-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the Industrial Revolution's global impact. How did it transform economies, societies, and eventually global power relations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Industrialization's impact",
                              "statement": "Economic, social, and geopolitical transformation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic: factory system, mass production, steam power transformed productivity; GDP per capita grew exponentially; new social classes (industrial bourgeoisie, proletariat) emerged.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Social: urbanization (London, Manchester grew 10x); child labor; new working-class movements (Marxism, unions); women's labor changed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Global: Britain industrialized first → naval/military advantage → colonized much of Africa/Asia; industrial gap between North and South created lasting inequality.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Legacy: industrialization created modern consumer society but also environmental degradation, inequality, and the North-South divide that persists today.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Industrialization transformed everything but created lasting global inequality",
          "commonErrors": [
                    "Ignoring the North-South divide and environmental costs."
          ]
},
        },
      ],
    },
  ],
};
