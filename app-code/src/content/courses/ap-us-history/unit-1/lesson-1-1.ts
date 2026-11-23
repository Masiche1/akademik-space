import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apush-u1-lesson-1-1",
  code: "1-1",
  title: "Colonial Societies",
  goal: "I CAN compare the economies and societies of the English colonies.",
  standards: ["Period 1"],
  vocabulary: [
    { term: "House of Burgesses", definition: "Virginia's elected assembly (1619) — an early example of colonial self-government." },
    { term: "Triangular trade", definition: "The Atlantic trade network linking Europe, Africa, and the Americas, including the slave trade." },
    { term: "Middle Passage", definition: "The brutal transatlantic voyage endured by enslaved Africans." },
    { term: "Headright system", definition: "Virginia land grants to settlers who paid their own passage — fueled tobacco expansion." },
    { term: "Encomienda", definition: "Spanish system granting colonists control of Native labor." },
    { term: "Puritan migration", definition: "The 1630s influx of religious dissenters who shaped New England society." },
  ],
  concepts: [
    {
      id: "apush-u1-colonial-societies",
      title: "Colonial economies and societies",
      skill: "Compare regional colonial economies and social structures.",
      lesson: {
        sections: [
          {
            heading: "Regional economies",
            body: "New England focused on subsistence farming, fishing, shipbuilding, and trade; the Chesapeake on tobacco with indentured servitude then enslaved labor; the Middle Colonies on grain ('breadbasket'); the South on plantation agriculture.",
          },
          {
            heading: "Colonial self-government",
            body: "Colonial assemblies (e.g., Virginia's House of Burgesses) controlled taxation and local law — a precedent for revolutionary demands for representation.",
          },
        ],
        keyFormulas: [
          { name: "Triangular trade", statement: "Europe ⇄ Africa ⇄ Americas ⇄ Europe" },
          { name: "Colony types", statement: "New England (trade) / Chesapeake (tobacco) / Middle (grain) / South (plantation)" },
        ],
        workedExample: {
          problem: "Why did the Chesapeake develop a slave-based plantation economy while New England did not?",
          solution: "Tobacco's labor intensity and cash-crop profits made enslaved labor economically attractive in the Chesapeake's warm climate. New England's subsistence economy and shorter growing season offered less incentive, and its smaller farms relied on family labor.",
        },
      },
      questions: [
        {
          id: "apush-u1-colonial-societies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which colonial region was known as the 'breadbasket' for its grain exports?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "New England"
                    },
                    {
                              "id": "b",
                              "text": "Chesapeake"
                    },
                    {
                              "id": "c",
                              "text": "Middle Colonies"
                    },
                    {
                              "id": "d",
                              "text": "Deep South"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Regional economies",
                              "statement": "Middle Colonies exported wheat and grain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Middle Colonies (New York, Pennsylvania, New Jersey) had fertile soil and exported grain.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Middle Colonies",
          "commonErrors": [
                    "Confusing New England's trade economy with the Middle Colonies' agriculture."
          ]
},
        },
        {
          id: "apush-u1-colonial-societies-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The House of Burgesses is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "was the first English parliament"
                    },
                    {
                              "id": "b",
                              "text": "showed colonists could govern themselves through elected assemblies"
                    },
                    {
                              "id": "c",
                              "text": "ended the slave trade"
                    },
                    {
                              "id": "d",
                              "text": "created the triangular trade"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Self-government",
                              "statement": "Elected colonial assemblies practiced representative government."
                    },
                    {
                              "kind": "concept",
                              "name": "Legacy",
                              "statement": "Colonial assemblies set precedents for American democracy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elected assemblies like the House of Burgesses (1619) gave colonists experience with representative self-rule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This tradition of local governance later informed revolutionary arguments about representation and rights.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Colonial self-government precedent",
          "commonErrors": [
                    "Treating it as a national legislature rather than a colonial assembly."
          ]
},
        },
        {
          id: "apush-u1-colonial-societies-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 1700, about 300,000 enslaved Africans had been transported to British North America. By 1770, roughly 500,000 Africans and African Americans lived in the colonies. Enter the approximate percentage increase (enter 67 for 67%).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Increase %",
                              "answer": 67
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percent change",
                              "statement": "$\\frac{500-300}{300} \\times 100 \\approx 67\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increase = $500{,}000 - 300{,}000 = 200{,}000$; $200/300 \\times 100 \\approx 66.7\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $67\\%$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "67",
          "commonErrors": [
                    "Dividing by 500 instead of 300 (gives 40%)."
          ]
},
        },
        {
          id: "apush-u1-colonial-societies-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the triangular trade connected the economies of Europe, Africa, and the Americas, and describe the human cost of one leg of that trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Triangular trade",
                              "statement": "A three-part Atlantic exchange network."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Connect trade routes to human consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "European manufactured goods went to Africa; enslaved Africans were transported to the Americas (Middle Passage); colonial products like sugar, tobacco, and rum returned to Europe.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The Middle Passage killed millions through disease, malnutrition, and abuse — the trade's human cost was the enslavement and deaths of approximately 2 million Africans in British ships alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The system enriched European and colonial merchants while devastating African societies and creating racially-based slavery in America.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Trade connected Atlantic economies; Middle Passage cost millions of lives",
          "commonErrors": [
                    "Describing only the trade of goods without the human cost."
          ]
},
        },
        {
          id: "apush-u1-colonial-societies-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the extent to which the American colonies developed self-governing institutions before 1763. Use evidence from at least two colonies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Self-government",
                              "statement": "Colonial assemblies and town meetings practiced self-rule."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical argumentation",
                              "statement": "Weigh evidence for a thesis about colonial autonomy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis: colonies developed significant self-governing traditions — New England town meetings allowed direct male participation; Virginia's House of Burgesses (1619) was an elected assembly that controlled taxes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counterevidence: governors were appointed by the crown and could veto assembly acts; voting was limited to white male property owners — self-government was partial, not democratic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conclusion: by 1763 colonists were accustomed to managing local affairs, making British attempts to impose new taxes after 1763 feel like a violation of established rights.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Synthesis: colonial self-government was real but limited — a middle ground that explains both colonial prosperity and the later revolutionary conflict.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Colonies had real but limited self-government, setting up later conflicts",
          "commonErrors": [
                    "Ignoring the limits on colonial self-rule (appointed governors, property qualifications)."
          ]
},
        },
      ],
    },
  ],
};
