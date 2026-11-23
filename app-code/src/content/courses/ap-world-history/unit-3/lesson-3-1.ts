import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apwh-u3-lesson-3-1",
  code: "3-1",
  title: "The Atlantic System",
  goal: "I CAN explain how the Columbian Exchange, slave trade, and colonization created the Atlantic World.",
  standards: ["Period 4"],
  vocabulary: [
    { term: "Columbian Exchange", definition: "Transfer of plants, animals, diseases, and people between Americas and Afro-Eurasia after 1492." },
    { term: "Middle Passage", definition: "Forced transport of ~12.5 million Africans to the Americas; ~2 million died." },
    { term: "Sugar plantation", definition: "Labor-intensive Caribbean/South American agriculture driving African slave demand." },
    { term: "Mercantilism", definition: "Economic theory: colonies exist for mother country's benefit; gold/silver accumulation." },
    { term: "Encomienda/repartimiento", definition: "Spanish systems of forced Native American labor." },
    { term: "Columbian Exchange crops", definition: "Potatoes, maize, tomatoes to Old World; wheat, sugar, horses to New World." },
  ],
  concepts: [
    {
      id: "apwh-u3-atlantic-system",
      title: "Creating the Atlantic World",
      skill: "Explain the interconnected systems of colonization, slavery, and exchange.",
      lesson: {
        sections: [
          {
            heading: "Columbian Exchange",
            body: "1492 contact transferred crops (potato, maize → Old World; wheat, sugar → New), animals (horses, cattle), and diseases (smallpox killed ~90% of Native Americans).",
          },
          {
            heading: "Slave trade and plantations",
            body: "Sugar, tobacco, and cotton plantations demanded massive labor; African slave trade supplied ~12.5 million people; slavery became racialized and hereditary.",
          },
          {
            heading: "Colonial economies",
            body: "Mercantilism made colonies sources of raw materials and markets; triangular trade connected Europe, Africa, Americas.",
          },
        ],
        keyFormulas: [
          { name: "Atlantic system", statement: "Europe ⇄ Africa (slaves) ⇄ Americas (goods) ⇄ Europe" },
          { name: "Columbian Exchange", statement: "Old World → New: wheat, horses, smallpox | New → Old: potato, maize, tomato" },
        ],
        workedExample: {
          problem: "Why did African slavery replace Native American labor in the Americas?",
          solution: "Native Americans died from European diseases (~90% mortality) and resisted enslavement; Africans had immunity to Old World diseases, agricultural experience, and no local escape routes — making them the preferred labor force for plantations.",
        },
      },
      questions: [
        {
          id: "apwh-u3-atlantic-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Columbian Exchange refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "European exploration of the Americas"
                    },
                    {
                              "id": "b",
                              "text": "the transfer of plants, animals, diseases, and people between hemispheres after 1492"
                    },
                    {
                              "id": "c",
                              "text": "the slave trade across the Atlantic"
                    },
                    {
                              "id": "d",
                              "text": "the Columbian navigation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Columbian Exchange",
                              "statement": "Biological exchange between Old and New Worlds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Columbian Exchange transferred crops, animals, diseases, and populations between the Americas and Afro-Eurasia — fundamentally reshaping both.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Hemisphere biological exchange",
          "commonErrors": [
                    "Confusing with the slave trade — related but distinct."
          ]
},
        },
        {
          id: "apwh-u3-atlantic-system-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Smallpox devastated Native American populations primarily because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Natives lacked immunity to Old World diseases"
                    },
                    {
                              "id": "b",
                              "text": "Europeans deliberately infected them"
                    },
                    {
                              "id": "c",
                              "text": "smallpox was more virulent in the Americas"
                    },
                    {
                              "id": "d",
                              "text": "Natives had no medicine"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Disease and conquest",
                              "statement": "Lack of immunity → demographic catastrophe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Native Americans had no prior exposure to smallpox, measles, influenza — diseases that killed ~90% of indigenous populations, enabling conquest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This demographic collapse was the single largest factor in European conquest's success.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "No immunity to Old World diseases",
          "commonErrors": [
                    "Thinking it was deliberate biological warfare — it was accidental transmission."
          ]
},
        },
        {
          id: "apwh-u3-atlantic-system-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately 12.5 million Africans were transported to the Americas via the Middle Passage. If 10.7 million survived the voyage, what percentage died? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Death %",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$(12.5-10.7)/12.5 \\times 100 = 14.4\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$12.5 - 10.7 = 1.8$ million died; $1.8/12.5 \\times 100 \\approx 14.4\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $14$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "14",
          "commonErrors": [
                    "Using wrong base or counting total deaths including pre-transport."
          ]
},
        },
        {
          id: "apwh-u3-atlantic-system-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the sugar plantation system drove the African slave trade and reshaped Atlantic economies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Sugar and slavery",
                              "statement": "Labor-intensive crop → massive slave demand."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Connect crop economics to human trafficking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sugar was enormously profitable but required massive labor for planting, harvesting, processing — Native Americans died or resisted; indentured servants were insufficient.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "African slaves provided cheap, permanent, hereditary labor; ~12.5 million transported; plantation complex generated enormous profits for European merchants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This created the triangular trade and racialized slavery — foundations of Atlantic capitalism.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sugar plantations drove African slave trade and Atlantic capitalism",
          "commonErrors": [
                    "Ignoring the economic logic driving slavery."
          ]
},
        },
        {
          id: "apwh-u3-atlantic-system-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the long-term consequences of the Atlantic slave trade for Africa, the Americas, and Europe. Address at least two regions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Slave trade consequences",
                              "statement": "Demographic, economic, and social impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Africa: lost ~12.5 million people (mostly young adults); destabilized states (Kongo, Dahomey); some societies (Asante, Dahomey) became slave-trading powers — internal consequences varied.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Americas: created racialized slavery lasting 250+ years; underdeveloped regions dependent on single crops; Native American populations devastated by disease and displacement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Europe: enormous wealth from slave trade and plantation products financed industrialization; but also moral debates leading to abolition movements.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Legacy: racial hierarchies, underdevelopment, and persistent inequality trace to the Atlantic system's foundations.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Slave trade reshaped all three continents with lasting inequality",
          "commonErrors": [
                    "One-sided analysis — all regions experienced profound but different consequences."
          ]
},
        },
      ],
    },
  ],
};
