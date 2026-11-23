import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "apah-u4-lesson-4-2",
  code: "4-2",
  title: "Non-Western Art Traditions",
  goal: "I CAN analyze art traditions outside the Western canon.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "African art", definition: "Masks, sculptures, textiles — often ceremonial, emphasizing abstraction and spiritual power." },
    { term: "Asian art", definition: "Chinese ink painting, Japanese prints, Indian sculpture — diverse traditions spanning millennia." },
    { term: "Islamic art", definition: "Calligraphy, geometric patterns, aniconism — avoiding figural representation." },
    { term: "Pre-Columbian art", definition: "Mesoamerican (Maya, Aztec), Andean — pyramids, codices, textiles." },
    { term: "Oceanic art", definition: "Polynesian, Melanesian — ancestral figures, ceremonial objects." },
    { term: "Indigenous art", definition: "Native American, Aboriginal Australian — connected to land, storytelling, ceremony." },
  ],
  concepts: [
    {
      id: "apah-u4-non-western-traditions",
      title: "Art beyond the Western canon",
      skill: "Analyze diverse global art traditions and their contexts.",
      lesson: {
        sections: [
          {
            heading: "African art",
            body: "Masks (Dan, Yoruba), sculptures (Baule, Dogon), textiles — often ceremonial/ancestral, emphasizing abstraction, spiritual power; 'primitive' label reflects colonial bias.",
          },
          {
            heading: "Asian traditions",
            body: "Chinese ink painting (landscape, calligraphy), Japanese ukiyo-e prints, Indian temple sculpture — millennia of diverse traditions; often spiritual/philosophical.",
          },
          {
            heading: "Islamic art",
            body: "Calligraphy (highest form), geometric patterns, arabesque — aniconism (avoiding figural representation) in religious contexts.",
          },
        ],
        keyFormulas: [
          { name: "African art", statement: "Masks / Sculpture / Textiles — ceremonial, abstract, spiritual" },
          { name: "Asian art", statement: "Ink painting / Prints / Sculpture — diverse millennia" },
          { name: "Islamic art", statement: "Calligraphy / Geometry / Aniconism" },
        ],
        workedExample: {
          problem: "Why is Islamic art often non-figural?",
          solution: "Aniconism — Islamic religious art avoids figural representation to prevent idolatry; emphasizes calligraphy (divine word), geometric patterns (infinite divine order), arabesque (natural forms abstracted).",
        },
      },
      questions: [
        {
          id: "apah-u4-non-western-traditions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Islamic religious art often avoids figural representation because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lack of skill"
                    },
                    {
                              "id": "b",
                              "text": "aniconism — preventing idolatry"
                    },
                    {
                              "id": "c",
                              "text": "religious prohibition on all art"
                    },
                    {
                              "id": "d",
                              "text": "cultural preference"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aniconism",
                              "statement": "Avoiding figural representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Islamic religious art practices aniconism — avoiding figural representation to prevent idolatry; emphasizes calligraphy, geometric patterns, arabesque instead.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Aniconism prevents idolatry",
          "commonErrors": [
                    "Thinking it's skill limitation — it's theological."
          ]
},
        },
        {
          id: "apah-u4-non-western-traditions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'primitive' label applied to African art reflects ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "accurate description"
                    },
                    {
                              "id": "b",
                              "text": "colonial bias and Eurocentric art history"
                    },
                    {
                              "id": "c",
                              "text": "African inferiority"
                    },
                    {
                              "id": "d",
                              "text": "lack of sophistication"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Colonial bias",
                              "statement": "Eurocentric art history."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Primitive' label reflects colonial bias — Eurocentric art history ranked African art as 'primitive' vs. 'civilized' Western art; actually African art has sophisticated conventions, spiritual depth, technical mastery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Label reveals more about Western biases than African art quality.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Colonial bias",
          "commonErrors": [
                    "Accepting label uncritically — it reflects bias."
          ]
},
        },
        {
          id: "apah-u4-non-western-traditions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Chinese ink painting tradition spans ~2000 years. If it began ~500 BCE, how many years to present? Enter approximate number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 2500
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Estimate",
                              "statement": "$2024 - (-500) = 2524$ approx $2500$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chinese ink painting spans ~2,500 years — one of world's longest continuous art traditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2500$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2500",
          "commonErrors": [
                    "Date arithmetic errors."
          ]
},
        },
        {
          id: "apah-u4-non-western-traditions-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare African and Islamic art traditions. How do their purposes and forms differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "African vs. Islamic",
                              "statement": "Different traditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "African art: often figural — masks, ancestral sculptures, ceremonial objects; emphasizes abstraction within figuration; serves community/ancestral/spiritual functions; masks used in rituals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Islamic art: often non-figural — calligraphy, geometric patterns, arabesque; avoids human figures in religious contexts; serves spiritual/aesthetic functions; patterns represent divine order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: African often figural (ancestral/community), Islamic often non-figural (divine abstraction); both serve spiritual purposes but different theological frameworks.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "African often figural; Islamic often non-figural — different purposes",
          "commonErrors": [
                    "Generalizing non-Western art — traditions are diverse."
          ]
},
        },
        {
          id: "apah-u4-non-western-traditions-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how 'primitive' labels reveal bias in art history. What does it mean to 'decolonize' art history?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Decolonizing art history",
                              "statement": "Challenging Eurocentrism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Primitive' label: European art history ranked cultures — 'civilized' (European) vs. 'primitive' (non-Western); reflects colonial power, not artistic quality; African art actually sophisticated (complex conventions, spiritual depth).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Decolonizing art history: include marginalized traditions, challenge Eurocentric standards, recognize diverse aesthetic systems, contextualize within own cultures not Western frameworks — expand canon beyond Europe/US.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Examples: African masks now recognized as major art (influenced Picasso); Islamic calligraphy valued as fine art; Indigenous art gaining museum recognition — shifting from 'primitive' to 'masterpiece.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: 'primitive' labels reveal colonial bias — decolonizing art history means recognizing equal artistic sophistication across cultures; expands understanding beyond Eurocentric canon.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Decolonizing = recognizing equal sophistication across cultures",
          "commonErrors": [
                    "Accepting Eurocentric rankings — they reflect bias not quality."
          ]
},
        },
      ],
    },
  ],
};
