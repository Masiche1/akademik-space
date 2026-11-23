import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apwh-u1-lesson-1-2",
  code: "1-2",
  title: "Classical Empires",
  goal: "I CAN compare the rise and fall of Han China, Rome, Gupta India, and Han China.",
  standards: ["Period 2"],
  vocabulary: [
    { term: "Han Dynasty", definition: "206 BCE-220 CE — golden age of Chinese civilization: Silk Road, Confucianism, paper, civil service." },
    { term: "Roman Empire", definition: "27 BCE-476 CE — Mediterranean superpower; law, engineering, Latin; divided then Western fall." },
    { term: "Gupta Empire", definition: "c. 320-550 CE — 'Golden Age' of India: decimal system, concept of zero, Aryabhata astronomy." },
    { term: "Silk Road", definition: "Trade network linking China to Mediterranean — spread goods, religions, technologies." },
    { term: "Confucianism", definition: "Chinese philosophy emphasizing hierarchy, filial piety, and civil service merit." },
    { term: "Pax Romana", definition: "200-year Roman peace enabling trade and urban growth." },
  ],
  concepts: [
    {
      id: "apwh-u1-classical-empires",
      title: "Classical empires compared",
      skill: "Compare the achievements and decline of classical empires.",
      lesson: {
        sections: [
          {
            heading: "Classical achievements",
            body: "Han China: Silk Road, paper, civil service, Confucian state. Rome: law, roads, aqueducts, Latin. Gupta India: mathematics (zero, decimals), astronomy, medicine.",
          },
          {
            heading: "Decline patterns",
            body: "All classical empires faced similar pressures: overextension, economic strain, political corruption, external invasions — though timing and specifics differed.",
          },
        ],
        keyFormulas: [
          { name: "Classical empires", statement: "Han China (206 BCE-220 CE) / Rome (27 BCE-476 CE) / Gupta (320-550 CE) / Han? / Persian (550 BCE-651 CE)" },
          { name: "Silk Road", statement: "Chang'an → Samarkand → Baghdad → Constantinople → Rome" },
        ],
        workedExample: {
          problem: "Why did the Silk Road matter beyond trade?",
          solution: "It transmitted Buddhism from India to China, spread technologies (paper, gunpowder later), transmitted diseases (plague), and created the first sustained trans-Eurasian exchange network.",
        },
      },
      questions: [
        {
          id: "apwh-u1-classical-empires-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Gupta Empire is known as India's 'Golden Age' primarily for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "building the Taj Mahal"
                    },
                    {
                              "id": "b",
                              "text": "advances in mathematics including zero and decimals"
                    },
                    {
                              "id": "c",
                              "text": "conquering Southeast Asia"
                    },
                    {
                              "id": "d",
                              "text": "spreading Islam"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Gupta achievements",
                              "statement": "Mathematics and science flourished."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gupta mathematicians developed the decimal system, concept of zero, and Aryabhata's astronomical calculations — foundational for later mathematics.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Mathematical advances",
          "commonErrors": [
                    "Confusing with the later Mughal Empire (Taj Mahal)."
          ]
},
        },
        {
          id: "apwh-u1-classical-empires-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Han Dynasty's civil service system was significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "was based on hereditary nobility"
                    },
                    {
                              "id": "b",
                              "text": "selected officials through examinations based on Confucian learning"
                    },
                    {
                              "id": "c",
                              "text": "was abolished by the Mongols"
                    },
                    {
                              "id": "d",
                              "text": "only served the emperor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Civil service exams",
                              "statement": "Merit-based selection via Confucian classics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Han exams tested knowledge of Confucian texts, creating a meritocratic bureaucracy that lasted ~2000 years and influenced later systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It reduced aristocratic monopoly on office and created a scholar-gentry class.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Merit-based Confucian examinations",
          "commonErrors": [
                    "Thinking it was hereditary — exams broke aristocratic control."
          ]
},
        },
        {
          id: "apwh-u1-classical-empires-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Roman Empire reached its greatest extent around 117 CE under Trajan, covering about 5 million square kilometers. If the Mediterranean Sea is about 2.5 million sq km, how many times larger was the empire? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Times",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ratio",
                              "statement": "$5/2.5 = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5 / 2.5 = 2$ — the empire was twice the Mediterranean's area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Using wrong comparison or units."
          ]
},
        },
        {
          id: "apwh-u1-classical-empires-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the causes of decline for Han China and Rome. What similarities and differences emerge?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Imperial decline",
                              "statement": "Common pressures, different specifics."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh shared and distinct factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similarities: overextension strained resources; political corruption and succession crises; economic inequality; external invasions (Xiongnu/Huns) exploited weakness.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Differences: Han fell to peasant rebellions (Yellow Turbans) and warlordism then Xiongnu; Rome fell to Germanic invasions after economic crisis and civil wars — Western Rome collapsed 476 CE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both show empires' vulnerability when military, economic, and political systems strain simultaneously — a pattern recurring throughout history.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Similar overextension pressures; different specific triggers",
          "commonErrors": [
                    "Listing causes without comparing across empires."
          ]
},
        },
        {
          id: "apwh-u1-classical-empires-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the Silk Road's role in spreading religions and technologies. To what extent did it create a 'connected' ancient world?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Silk Road networks",
                              "statement": "Exchange of goods, ideas, religions, diseases."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Weigh the network's significance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Religions: Buddhism spread from India to China (1st c. CE); Nestorian Christianity and Islam reached China; Manichaeism spread along routes — the Silk Road was a vector for faith.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Technologies: paper (China → Islamic world → Europe), gunpowder (later), silk, porcelain, glass — goods moved both directions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Diseases: plague traveled along routes — the Justinian and later Black Deaths had Silk Road transmission components.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Limits: exchange was slow and uneven — transmission took centuries; many regions remained isolated; 'connection' was partial, not universal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Silk Road spread religions/technologies but unevenly and slowly",
          "commonErrors": [
                    "Treating it as instant globalization — exchange took centuries and was uneven."
          ]
},
        },
      ],
    },
  ],
};
