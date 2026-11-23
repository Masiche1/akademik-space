import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apah-u2-lesson-2-1",
  code: "2-1",
  title: "Medieval Art",
  goal: "I CAN analyze medieval art's religious function and stylistic conventions.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Illuminated manuscript", definition: "Decorated handwritten book — religious texts with elaborate illustrations." },
    { term: "Gothic cathedrals", definition: "Medieval architecture — pointed arches, stained glass, verticality reaching heaven." },
    { term: "Hierarchical scale", definition: "Medieval convention — size indicates spiritual importance." },
    { term: "Gold background", definition: "Medieval convention — gold represents divine light/heaven." },
    { term: "Iconoclasm", definition: "Destruction of religious images — theological debate over images." },
    { term: "Romanesque vs. Gothic", definition: "Romanesque = rounded arches, thick walls; Gothic = pointed arches, light, verticality." },
  ],
  concepts: [
    {
      id: "apah-u2-medieval-art",
      title: "Medieval art and faith",
      skill: "Analyze medieval art's religious purpose and conventions.",
      lesson: {
        sections: [
          {
            heading: "Religious function",
            body: "Medieval art served Christianity — cathedrals as 'books in stone,' illuminated manuscripts for prayer, art instructing illiterate faithful; most art was religious.",
          },
          {
            heading: "Stylistic conventions",
            body: "Gold backgrounds (divine light), hierarchical scale (spiritual importance), frontal poses (directness to viewer), lack of naturalism (spiritual over physical).",
          },
        ],
        keyFormulas: [
          { name: "Medieval conventions", statement: "Gold background / Hierarchical scale / Frontal poses / Spiritual over physical" },
          { name: "Architecture", statement: "Romanesque (rounded) → Gothic (pointed arches, verticality)" },
          { name: "Art purpose", statement: "Religious instruction + spiritual experience" },
        ],
        workedExample: {
          problem: "Why gold backgrounds in medieval art?",
          solution: "Gold represented divine light/heaven — figures against gold appeared to exist in spiritual realm not physical space; gold's luminosity symbolized God's glory.",
        },
      },
      questions: [
        {
          id: "apah-u2-medieval-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gold backgrounds in medieval art represented ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wealth"
                    },
                    {
                              "id": "b",
                              "text": "divine light and heaven"
                    },
                    {
                              "id": "c",
                              "text": "royal patronage"
                    },
                    {
                              "id": "d",
                              "text": "artistic skill"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Medieval conventions",
                              "statement": "Gold = divine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gold backgrounds represented divine light and heaven — figures against gold appeared to exist in spiritual realm, not physical space; gold symbolized God's glory.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Divine light/heaven",
          "commonErrors": [
                    "Thinking it's decorative — it was theological."
          ]
},
        },
        {
          id: "apah-u2-medieval-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Gothic cathedrals differ from Romanesque by having ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rounded arches"
                    },
                    {
                              "id": "b",
                              "text": "pointed arches, stained glass, verticality"
                    },
                    {
                              "id": "c",
                              "text": "thick walls"
                    },
                    {
                              "id": "d",
                              "text": "flat ceilings"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gothic architecture",
                              "statement": "Pointed arches + light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gothic cathedrals have pointed arches, stained glass windows, vertical emphasis — light and height reaching toward heaven; Romanesque had rounded arches, thick walls, dim interiors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gothic innovations enabled larger windows and more light — spiritual experience through architecture.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pointed arches + light",
          "commonErrors": [
                    "Confusing with Romanesque."
          ]
},
        },
        {
          id: "apah-u2-medieval-art-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If medieval art period spans 500-1400 CE, how many years? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 900
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$1400 - 500 = 900$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1400 - 500 = 900$ years.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $900$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "900",
          "commonErrors": [
                    "Date arithmetic errors."
          ]
},
        },
        {
          id: "apah-u2-medieval-art-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how medieval art conventions served religious purposes. Why wasn't naturalism valued?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Medieval art",
                              "statement": "Spiritual over physical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gold backgrounds: divine light/heaven — figures in spiritual realm; hierarchical scale: size = spiritual importance; frontal poses: direct communication with viewer/God — conventions served theology.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Naturalism wasn't valued because art's purpose was spiritual instruction not physical representation — depicting 'truth' (ideal/spiritual) mattered more than 'appearance' (naturalistic).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Illuminated manuscripts, cathedral sculpture, stained glass all served to instruct illiterate faithful and create spiritual experience — function over form.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Conventions served theology — spiritual over physical",
          "commonErrors": [
                    "Applying modern aesthetic standards — medieval had different purpose."
          ]
},
        },
        {
          id: "apah-u2-medieval-art-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the iconoclasm controversy. What does it reveal about medieval attitudes toward images?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Iconoclasm",
                              "statement": "Images and divinity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iconoclasm = destruction of religious images — debate whether images were idolatry or aids to devotion; Byzantine Iconoclasm (8th-9th c.) saw mass destruction of icons.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Reveals medieval tension: images could inspire devotion OR become objects of worship themselves (idolatry); theological question about image's relationship to divine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resolution: images as 'windows to heaven' acceptable, but not objects of worship — distinction between veneration (dulia) and worship (latria); art allowed if serving devotion not replacing it.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: iconoclasm reveals medieval art's precarious status — powerful enough to inspire devotion or idolatry; attitudes toward images reflected deeper theological debates about divinity and representation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Iconoclasm reveals tension between devotion and idolatry",
          "commonErrors": [
                    "Simplifying as mere vandalism — it was theological debate."
          ]
},
        },
      ],
    },
  ],
};
