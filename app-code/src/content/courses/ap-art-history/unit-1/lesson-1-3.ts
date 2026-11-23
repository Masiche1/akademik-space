import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apah-u1-lesson-1-3",
  code: "1-3",
  title: "Roman Art",
  goal: "I CAN analyze Roman art's realism and imperial propaganda.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Veristic portraiture", definition: "Realistic, age-showing portraits — 'warts and all' realism." },
    { term: "Imperial propaganda", definition: "Art serving political power — emperors depicted as divine/virtuous." },
    { term: "Ara Pacis", definition: "Altar of Augustan Peace — relief showing imperial ideology." },
    { term: "Arch of Titus", definition: "Commemorative arch — imperial triumph and conquest." },
    { term: "Concrete construction", definition: "Roman innovation — enabled arches, domes, large structures." },
    { term: "Copying Greek", definition: "Romans adapted Greek art — 'Roman copies' actually Roman interpretations." },
  ],
  concepts: [
    {
      id: "apah-u1-roman-art",
      title: "Roman art and power",
      skill: "Analyze Roman art's realism and political function.",
      lesson: {
        sections: [
          {
            heading: "Realism vs. idealization",
            body: "Roman portraiture veristic — showed age, wrinkles, imperfections (contrast Greek idealization); but imperial portraits idealized emperors — propaganda served power.",
          },
          {
            heading: "Political art",
            body: "Ara Pacis (Augustan peace), Arch of Titus (conquest of Jerusalem), equestrian statues — art communicated imperial ideology and legitimacy.",
          },
        ],
        keyFormulas: [
          { name: "Roman portraiture", statement: "Veristic (realistic) for private, idealized for imperial" },
          { name: "Political art", statement: "Ara Pacis / Arch of Titus / Equestrian monuments" },
          { name: "Roman innovation", statement: "Concrete → arches, domes, large structures" },
        ],
        workedExample: {
          problem: "Why were Roman portraits 'veristic'?",
          solution: "Veristic (warts-and-all) portraits showed age and character — valued realism for private portraits; but emperors were idealized — propaganda showing divine/virtuous image regardless of actual appearance.",
        },
      },
      questions: [
        {
          id: "apah-u1-roman-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Veristic portraiture means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "idealized beauty"
                    },
                    {
                              "id": "b",
                              "text": "realistic, age-showing, 'warts and all'"
                    },
                    {
                              "id": "c",
                              "text": "abstract"
                    },
                    {
                              "id": "d",
                              "text": "profile only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Veristic portraiture",
                              "statement": "Realistic age-showing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Veristic portraiture depicts realistic features — wrinkles, age, imperfections; contrast Greek idealization; valued for private portraits showing character.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Realistic age-showing",
          "commonErrors": [
                    "Confusing with Greek idealization."
          ]
},
        },
        {
          id: "apah-u1-roman-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Roman imperial art primarily served ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "aesthetic pleasure"
                    },
                    {
                              "id": "b",
                              "text": "political propaganda and imperial legitimacy"
                    },
                    {
                              "id": "c",
                              "text": "religious devotion"
                    },
                    {
                              "id": "d",
                              "text": "entertainment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Roman political art",
                              "statement": "Art serves power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roman imperial art served political propaganda — Ara Pacis promoted Augustan peace, Arch of Titus commemorated conquest, equestrian statues showed imperial power — legitimizing rule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unlike Greek art-for-art's-sake, Roman art was often political tool.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Political propaganda",
          "commonErrors": [
                    "Ignoring political function."
          ]
},
        },
        {
          id: "apah-u1-roman-art-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Arch of Titus was built in 81 CE. If Roman Empire fell in 476 CE, how many years later? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 395
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$476 - 81 = 395$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$476 - 81 = 395$ years later.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $395$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "395",
          "commonErrors": [
                    "Date arithmetic errors."
          ]
},
        },
        {
          id: "apah-u1-roman-art-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Roman art differed from Greek art in purpose and style.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Roman vs. Greek",
                              "statement": "Function vs. aesthetics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Style: Roman portraiture veristic (realistic, age-showing) for private; Greek idealized (perfect beauty); Romans copied Greek but added realism — 'Roman copies' were Roman interpretations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Purpose: Roman art often political (imperial propaganda, commemorative monuments) vs. Greek art aesthetic/philosophical; Romans used art to legitimize power, Greeks for ideal beauty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Innovation: Roman concrete enabled arches/domes/large structures — practical engineering vs. Greek aesthetic focus; Romans were engineers as much as artists.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Roman = realistic + political; Greek = idealized + aesthetic",
          "commonErrors": [
                    "Equating the two — different purposes and styles."
          ]
},
        },
        {
          id: "apah-u1-roman-art-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Roman art reflects imperial ideology. What beliefs about power does it reveal?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Art as propaganda",
                              "statement": "Power made visible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ara Pacis: showed Augustan peace — propaganda that empire brought stability; reliefs depicted fertility, abundance, religious piety — idealized imperial image.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Arch of Titus: commemorated conquest of Jerusalem — spoils of temple shown; equestrian statues: emperor as divine hero; art legitimized conquest and imperial authority.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Beliefs revealed: empire as divinely ordained, emperor as god-like, conquest as virtuous, peace through strength — art propagated ideology making power seem natural and justified.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Roman art was political tool — reflected belief that imperial power was divinely sanctioned and conquest virtuous; art served state ideology.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Roman art propagated imperial ideology — power as divine",
          "commonErrors": [
                    "Treating as neutral decoration — it was political tool."
          ]
},
        },
      ],
    },
  ],
};
