import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apwh-u1-lesson-1-1",
  code: "1-1",
  title: "Early Humans and River Civilizations",
  goal: "I CAN explain how early humans developed agriculture and the first civilizations arose.",
  standards: ["Period 1"],
  vocabulary: [
    { term: "Neolithic Revolution", definition: "c. 10,000 BCE shift from hunting-gathering to agriculture — enabled cities and specialization." },
    { term: "Civilization", definition: "Complex society with cities, government, writing, social hierarchy, and monumental architecture." },
    { term: "Mesopotamia", definition: "'Land between rivers' (Tigris/Euphrates) — Sumerians developed writing (cuneiform) and cities like Ur." },
    { term: "Egypt", definition: "Nile Valley civilization unified under pharaohs; hieroglyphics, pyramids, centralized bureaucracy." },
    { term: "Indus Valley", definition: "Highly planned cities (Harappa, Mohenjo-Daro) with sophisticated drainage; undeciphered script." },
    { term: "Shang Dynasty", definition: "China's first archaeologically confirmed dynasty (c. 1600-1046 BCE); oracle bones, bronze." },
    { term: "Zhou Dynasty", definition: "Mandate of Heaven concept; feudal decentralized rule lasting ~800 years." },
  ],
  concepts: [
    {
      id: "apwh-u1-early-humans-civilizations",
      title: "From foraging to civilization",
      skill: "Explain how agriculture enabled complex societies.",
      lesson: {
        sections: [
          {
            heading: "Agricultural revolution",
            body: "The Neolithic shift to farming (~10,000 BCE) produced food surpluses, population growth, and specialization — the foundation of cities, states, and inequality.",
          },
          {
            heading: "River valley civilizations",
            body: "Mesopotamia, Egypt, Indus, and China all arose near rivers enabling irrigation agriculture; each developed writing, social hierarchies, and centralized rule — but with different political structures.",
          },
        ],
        keyFormulas: [
          { name: "Civilization markers", statement: "Cities + writing + bureaucracy + monumental architecture + social hierarchy" },
          { name: "Early states", statement: "Mesopotamia (city-states) / Egypt (unified) / Indus (planned cities) / China (dynastic)" },
        ],
        workedExample: {
          problem: "Why did civilizations arise along rivers rather than elsewhere?",
          solution: "Rivers provided reliable water for irrigation, fertile soil from annual flooding, transportation for trade, and food surpluses — all prerequisites for dense populations and urban specialization.",
        },
      },
      questions: [
        {
          id: "apwh-u1-early-humans-civilizations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Neolithic Revolution refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the invention of the wheel"
                    },
                    {
                              "id": "b",
                              "text": "the shift from hunting-gathering to agriculture"
                    },
                    {
                              "id": "c",
                              "text": "the first writing systems"
                    },
                    {
                              "id": "d",
                              "text": "the rise of the first empires"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neolithic Revolution",
                              "statement": "Agricultural transition c. 10,000 BCE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Neolithic Revolution was the transition from foraging to farming — enabling surpluses, cities, and specialization.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Shift to agriculture",
          "commonErrors": [
                    "Confusing with the Bronze Age or urban revolution."
          ]
},
        },
        {
          id: "apwh-u1-early-humans-civilizations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feature most distinguishes a 'civilization' from a simple agricultural village?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "farming"
                    },
                    {
                              "id": "b",
                              "text": "cities, writing, and social hierarchy"
                    },
                    {
                              "id": "c",
                              "text": "religion"
                    },
                    {
                              "id": "d",
                              "text": "trade"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Civilization",
                              "statement": "Cities + government + writing + hierarchy + monuments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Civilization requires the full package: cities, centralized government, writing systems, social stratification, and monumental architecture — not just farming.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Many agricultural societies never achieved civilization, showing farming is necessary but not sufficient.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Cities, writing, social hierarchy",
          "commonErrors": [
                    "Listing only one marker — civilization needs multiple features together."
          ]
},
        },
        {
          id: "apwh-u1-early-humans-civilizations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Shang dynasty lasted roughly 1600-1046 BCE. How many years is that span? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 554
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1600 - 1046 = 554$ years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1600 - 1046 = 554$ years.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $554$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "554",
          "commonErrors": [
                    "Including both endpoints incorrectly or arithmetic errors."
          ]
},
        },
        {
          id: "apwh-u1-early-humans-civilizations-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the political structures of Egypt and Mesopotamia. Why did Egypt develop a more unified state?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "River valley states",
                              "statement": "Egypt unified vs. Mesopotamian city-states."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh geographic and political factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Egypt: Nile flooded predictably, enabling centralized control; pharaohs held divine authority; unified early under Narmer/ Menes (~3100 BCE).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Mesopotamia: Tigris/Euphrates flooded unpredictably; competing city-states (Ur, Uruk, Babylon) fought for dominance; Sumerian city-states remained separate until brief unification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Geography drove politics: predictable Nile → centralized theocracy; unpredictable rivers → competitive city-states and law codes (Hammurabi).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Predictable Nile enabled Egyptian unity; unpredictable rivers kept Mesopotamia divided",
          "commonErrors": [
                    "Ignoring the geographic determinism argument."
          ]
},
        },
        {
          id: "apwh-u1-early-humans-civilizations-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the extent to which early civilizations were 'cradles' of later developments or isolated experiments. Use evidence from writing, law, and trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Civilizational continuity vs. isolation",
                              "statement": "Did later societies build on early models?"
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Weigh evidence of continuity and independence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Continuity case: writing (cuneiform → alphabet), law codes (Hammurabi → later codes), monumental architecture, bureaucracy — patterns repeated across civilizations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Isolation case: each civilization developed independently — writing invented ~4 times (Mesopotamia, Egypt, China, Mesoamerica); no evidence of direct transmission between Old and New World.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Synthesis: early civilizations were 'cradles' in the sense of convergent evolution — similar solutions to similar problems, not direct copying.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Trade networks (Indus-Mesopotamia seals) show limited early exchange, but major technologies spread slowly before 600 CE.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Convergent evolution — similar solutions, independent invention",
          "commonErrors": [
                    "Claiming complete independence or complete diffusion — both overstate the evidence."
          ]
},
        },
      ],
    },
  ],
};
