import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apwh-u3-lesson-3-3",
  code: "3-3",
  title: "Imperialism and Nationalism",
  goal: "I CAN explain 19th-century imperialism and the rise of nation-states.",
  standards: ["Period 6"],
  vocabulary: [
    { term: "Scramble for Africa", definition: "1884-1914 European colonization of Africa; Berlin Conference set rules." },
    { term: "Opium Wars", definition: "1839-42 and 1856-60 — Britain forced China to accept opium trade; weakened Qing dynasty." },
    { term: "Sepoy Mutiny", definition: "1857 Indian rebellion against British rule; ended East India Company rule." },
    { term: "Taiping Rebellion", definition: "1850-64 Chinese civil war/rebellion; ~20-30 million dead." },
    { term: "New Imperialism", definition: "1870-1914 wave of European colonial expansion driven by industrial competition." },
    { term: "Meiji Restoration", definition: "1868 Japan's modernization — rapid industrialization and military expansion." },
  ],
  concepts: [
    {
      id: "apwh-u3-imperialism-nationalism",
      title: "Imperialism and nation-building",
      skill: "Explain the motives and consequences of 19th-century imperialism.",
      lesson: {
        sections: [
          {
            heading: "Imperialist motives",
            body: "Economic (raw materials, markets), political (national prestige, strategic bases), social (Social Darwinism, 'civilizing mission'), technological (steamships, railways, quinine).",
          },
          {
            heading: "Colonized responses",
            body: "Resistance (Mau Mau, Sepoy Mutiny, Boxer Rebellion), reform movements (Meiji Japan), and eventual independence movements laid groundwork for decolonization.",
          },
        ],
        keyFormulas: [
          { name: "New Imperialism", statement: "1870-1914 European scramble for colonies" },
          { name: "Key events", statement: "Berlin Conference 1884 → Scramble for Africa → WWI 1914" },
        ],
        workedExample: {
          problem: "Why did Japan modernize successfully while China struggled?",
          solution: "Meiji Restoration (1868) deliberately adopted Western technology, institutions, and education while preserving independence; China resisted modernization until too late, suffering Opium Wars and Taiping Rebellion.",
        },
      },
      questions: [
        {
          id: "apwh-u3-imperialism-nationalism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Berlin Conference (1884-85) is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ended the slave trade"
                    },
                    {
                              "id": "b",
                              "text": "established rules for European colonization of Africa"
                    },
                    {
                              "id": "c",
                              "text": "created the League of Nations"
                    },
                    {
                              "id": "d",
                              "text": "ended World War I"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Berlin Conference",
                              "statement": "Rules for African colonization."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Berlin Conference established 'effective occupation' rules for European powers dividing Africa — accelerating the Scramble for Africa.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Rules for African partition",
          "commonErrors": [
                    "Thinking it ended colonialism — it accelerated it."
          ]
},
        },
        {
          id: "apwh-u3-imperialism-nationalism-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Meiji Restoration is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made Japan a European colony"
                    },
                    {
                              "id": "b",
                              "text": "modernized Japan rapidly while preserving independence"
                    },
                    {
                              "id": "c",
                              "text": "restored the samurai class"
                    },
                    {
                              "id": "d",
                              "text": "ended Japanese expansionism"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Meiji Restoration",
                              "statement": "Japan's deliberate modernization."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 1868 Meiji Restoration modernized Japan's economy, military, and education — transforming it into Asia's first industrial power while preserving independence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It showed colonized societies could modernize without colonization.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Rapid modernization preserving independence",
          "commonErrors": [
                    "Thinking Japan was colonized — it modernized voluntarily."
          ]
},
        },
        {
          id: "apwh-u3-imperialism-nationalism-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Scramble for Africa occurred 1884-1914. How many years is that? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1914 - 1884 = 30$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1914 - 1884 = 30$ years for the Scramble for Africa.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $30$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "30",
          "commonErrors": [
                    "Including endpoints incorrectly."
          ]
},
        },
        {
          id: "apwh-u3-imperialism-nationalism-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the economic, political, and ideological motives behind New Imperialism (1870-1914).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Imperialist motives",
                              "statement": "Economic + political + ideological drivers."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Connect multiple factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic: industrial nations needed raw materials (rubber, minerals, cotton) and markets for manufactured goods; colonies provided both plus investment outlets for surplus capital.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Political: national prestige and strategic competition — colonies demonstrated power; naval bases secured trade routes; 'effective occupation' required formal claims.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ideological: Social Darwinism justified domination ('civilizing mission'); missionaries sought converts; racism framed colonization as benevolent.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Economic needs + political competition + ideological justification drove imperialism",
          "commonErrors": [
                    "Listing only economic motives — political and ideological factors were equally important."
          ]
},
        },
        {
          id: "apwh-u3-imperialism-nationalism-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the long-term consequences of 19th-century imperialism for colonized peoples. Address at least two regions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Imperialism's legacy",
                              "statement": "Economic, political, and social consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Africa: arbitrary borders created artificial states; extractive economies (cash crops, mining) underdeveloped regions; colonial education and infrastructure had mixed legacies; independence movements emerged.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "India: British Raj created railways and administration but deindustrialized textile industry; famines (millions died); Indian nationalism grew, leading to independence 1947 but partition violence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "China: Opium Wars weakened Qing dynasty; 'century of humiliation'; but also stimulated reform movements (Self-Strengthening) and eventually communist revolution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Legacy: imperialism created modern borders, economies, and grievances — both the infrastructure and the exploitation persist in postcolonial states.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Imperialism created lasting inequality but also nationalist movements",
          "commonErrors": [
                    "One-sided — imperialism caused exploitation but also modernization and nationalism."
          ]
},
        },
      ],
    },
  ],
};
