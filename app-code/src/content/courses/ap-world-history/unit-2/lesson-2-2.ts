import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apwh-u2-lesson-2-2",
  code: "2-2",
  title: "Mongols and Trans-Saharan Trade",
  goal: "I CAN explain Mongol Empire's impact and the gold-salt trade's role in African-Islamic exchange.",
  standards: ["Period 3"],
  vocabulary: [
    { term: "Genghis Khan", definition: "United Mongol tribes (1206); founded empire spanning Eurasia." },
    { term: "Pax Mongolica", definition: "Mongol-enforced peace enabling safe trade across Eurasia — revived Silk Road." },
    { term: "Yuan Dynasty", definition: "Kublai Khan's China dynasty (1271-1368); Marco Polo visited." },
    { term: "Mansa Musa", definition: "West African emperor whose hajj (1324) displayed enormous wealth, putting Mali on European maps." },
    { term: "Trans-Saharan trade", definition: "Gold-salt exchange linking West Africa to Mediterranean; spread Islam and wealth." },
    { term: "Swahili Coast", definition: "East African trading cities (Kilwa, Mombasa) connecting Africa to Indian Ocean trade." },
  ],
  concepts: [
    {
      id: "apwh-u2-mongols-trans-saharan",
      title: "Mongol networks and African trade",
      skill: "Explain how Mongols and trade networks connected Afro-Eurasia.",
      lesson: {
        sections: [
          {
            heading: "Mongol impact",
            body: "Genghis Khan's conquests (1206-1227) created history's largest contiguous empire; Pax Mongolica enabled safe travel, revived Silk Road, spread technologies and diseases (Black Death).",
          },
          {
            heading: "African trade",
            body: "Trans-Saharan gold-salt trade enriched West African empires (Ghana, Mali, Songhai); Mansa Musa's hajj showcased Mali's wealth; Swahili cities linked East Africa to Indian Ocean commerce.",
          },
        ],
        keyFormulas: [
          { name: "Mongol timeline", statement: "Genghis Khan 1206 → Pax Mongolica peak ~1250-1350 → Yuan falls 1368" },
          { name: "African trade", statement: "Gold (south) ⇄ Salt (north) across Sahara; Swahili ⇄ Indian Ocean" },
        ],
        workedExample: {
          problem: "How did Pax Mongolica affect the Black Death's spread?",
          solution: "Mongol peace enabled safe travel along Silk Road — trade routes that had been dangerous became safe, allowing plague-infected rats/fleas to travel from Central Asia to Crimea and then to Europe via Genoese ships (1347).",
        },
      },
      questions: [
        {
          id: "apwh-u2-mongols-trans-saharan-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pax Mongolica refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a Mongol religious text"
                    },
                    {
                              "id": "b",
                              "text": "the period of Mongol-enforced peace enabling safe Eurasian travel"
                    },
                    {
                              "id": "c",
                              "text": "Kublai Khan's dynasty"
                    },
                    {
                              "id": "d",
                              "text": "the fall of Baghdad"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pax Mongolica",
                              "statement": "Mongol peace enabling trade and travel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pax Mongolica (c. 1250-1350) was the relatively peaceful period under Mongol rule that made Silk Road travel safe — reviving trade and cultural exchange.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Mongol-enforced peace",
          "commonErrors": [
                    "Confusing with Pax Romana — different empire, similar concept."
          ]
},
        },
        {
          id: "apwh-u2-mongols-trans-saharan-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mansa Musa's hajj (1324) is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "conquered Mecca"
                    },
                    {
                              "id": "b",
                              "text": "displayed Mali's wealth and put West Africa on European maps"
                    },
                    {
                              "id": "c",
                              "text": "converted Mali to Christianity"
                    },
                    {
                              "id": "d",
                              "text": "founded the Songhai Empire"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Mansa Musa's hajj",
                              "statement": "Lavish pilgrimage showcasing Mali's gold wealth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mansa Musa's pilgrimage to Mecca with thousands of followers and vast gold gifts caused gold prices to crash in Cairo — European maps began showing Mali as a wealthy Christian-adjacent kingdom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It demonstrated West Africa's wealth and Islamic connections to the wider world.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Showcased Mali's wealth to the world",
          "commonErrors": [
                    "Thinking it was a military campaign — it was a religious pilgrimage."
          ]
},
        },
        {
          id: "apwh-u2-mongols-trans-saharan-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Mongol Empire at its peak covered about 24 million square kilometers. If the Roman Empire was about 5 million sq km, how many times larger was the Mongol Empire? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Times",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ratio",
                              "statement": "$24/5 \\approx 4.8 \\approx 5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$24 / 5 = 4.8$ — roughly 5 times larger than Rome at its peak.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Using wrong empire sizes."
          ]
},
        },
        {
          id: "apwh-u2-mongols-trans-saharan-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Mongol Empire both unified and devastated Eurasia. Cite specific impacts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Mongol dual legacy",
                              "statement": "Connectivity and destruction."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Weigh positive and negative impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unification: Pax Mongolica revived Silk Road trade; Marco Polo traveled safely; technologies (printing, gunpowder, compass) spread westward; first sustained Eurasian exchange since Rome.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Devastation: conquests killed millions (Baghdad 1258); destruction of cities and irrigation systems; but some regions (China under Yuan) prospered.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Black Death: Mongol-facilitated trade routes transmitted plague from Central Asia to Europe (1347) — killing ~25-50 million, reshaping demographics.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Mongols connected Eurasia but at devastating human cost",
          "commonErrors": [
                    "One-sided view — Mongols both connected and destroyed."
          ]
},
        },
        {
          id: "apwh-u2-mongols-trans-saharan-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the role of trade networks in connecting Afro-Eurasia during 600-1450. Compare Trans-Saharan, Indian Ocean, and Silk Road networks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Trade networks",
                              "statement": "Three major Afro-Eurasian exchange systems."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh different network characteristics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trans-Saharan: gold-salt trade linked West Africa to Mediterranean; spread Islam to West Africa; overland routes limited by Sahara crossing difficulty.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Indian Ocean: maritime trade linked East Africa (Swahili), Arabia, India, Southeast Asia, China; monsoon winds enabled reliable voyaging; spread Islam and goods widely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Silk Road: overland Eurasian network; under Mongols reached peak connectivity; transmitted religions, technologies, and diseases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Synthesis: all three networks interconnected — goods, religions, and diseases moved between them; together they created the first Afro-Eurasian 'world system' before 1450.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Three networks interconnected Afro-Eurasia, spreading goods, religions, diseases",
          "commonErrors": [
                    "Treating networks as isolated — they interconnected and reinforced each other."
          ]
},
        },
      ],
    },
  ],
};
