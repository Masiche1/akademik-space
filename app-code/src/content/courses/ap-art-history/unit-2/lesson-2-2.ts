import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apah-u2-lesson-2-2",
  code: "2-2",
  title: "Renaissance Art",
  goal: "I CAN analyze Renaissance art's humanism and technical innovations.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Renaissance", definition: "Revival of classical ideals — humanism, naturalism, perspective." },
    { term: "Linear perspective", definition: "Mathematical system creating depth — vanishing point, converging lines." },
    { term: "Chiaroscuro", definition: "Contrast of light and dark — modeling form, dramatic effect." },
    { term: "Humanism", definition: "Focus on human potential, classical learning, individual achievement." },
    { term: "Sfumato", definition: "Soft blending of tones — Leonardo's technique (Mona Lisa)." },
    { term: "Fresco", definition: "Painting on wet plaster — Michelangelo's Sistine Chapel." },
  ],
  concepts: [
    {
      id: "apah-u2-renaissance-art",
      title: "Renaissance art and humanism",
      skill: "Analyze Renaissance art's technical innovations and humanist values.",
      lesson: {
        sections: [
          {
            heading: "Technical innovations",
            body: "Linear perspective (depth), chiaroscuro (light/dark modeling), sfumato (soft blending), anatomy study (dissection) — scientific approach to representation.",
          },
          {
            heading: "Humanist values",
            body: "Focus on human potential, individual achievement, classical ideals — art celebrated humanity rather than just divinity; patrons included wealthy merchants/courtiers.",
          },
        ],
        keyFormulas: [
          { name: "Linear perspective", statement: "Vanishing point + converging lines = depth" },
          { name: "Chiaroscuro", statement: "Light/dark contrast models form" },
          { name: "Key artists", statement: "Leonardo / Michelangelo / Raphael / Donatello" },
        ],
        workedExample: {
          problem: "Analyze Mona Lisa's sfumato",
          solution: "Sfumato (smoky effect) — Leonardo's technique of soft blending tones without hard edges; creates mysterious, lifelike quality; reflects Renaissance interest in subtle human expression.",
        },
      },
      questions: [
        {
          id: "apah-u2-renaissance-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Linear perspective creates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flat images"
                    },
                    {
                              "id": "b",
                              "text": "illusion of depth through converging lines"
                    },
                    {
                              "id": "c",
                              "text": "abstract patterns"
                    },
                    {
                              "id": "d",
                              "text": "color harmony"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Linear perspective",
                              "statement": "Mathematical depth illusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear perspective uses converging lines to vanishing point — creates mathematical illusion of depth; revolutionary technique making paintings appear three-dimensional.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Illusion of depth",
          "commonErrors": [
                    "Confusing with other techniques."
          ]
},
        },
        {
          id: "apah-u2-renaissance-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Renaissance humanism emphasized ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divine supremacy"
                    },
                    {
                              "id": "b",
                              "text": "human potential, individual achievement, classical learning"
                    },
                    {
                              "id": "c",
                              "text": "medieval religion"
                    },
                    {
                              "id": "d",
                              "text": "abstract art"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Renaissance humanism",
                              "statement": "Human-centered values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Renaissance humanism emphasized human potential, individual achievement, classical learning — art celebrated humanity alongside divinity; shift from medieval God-focus to human potential.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Patrons included merchants/courtiers — secular art flourished alongside religious.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Human potential + classical learning",
          "commonErrors": [
                    "Confusing with medieval theocentrism."
          ]
},
        },
        {
          id: "apah-u2-renaissance-art-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Leonardo da Vinci lived 1452-1519. How many years? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 67
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$1519 - 1452 = 67$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1519 - 1452 = 67$ years.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $67$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "67",
          "commonErrors": [
                    "Date arithmetic errors."
          ]
},
        },
        {
          id: "apah-u2-renaissance-art-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare medieval and Renaissance art in purpose and technique. What changed?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Medieval vs. Renaissance",
                              "statement": "Faith vs. humanism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose: Medieval art served religion — instructions for illiterate, spiritual experience; Renaissance served both religion AND humanist celebration — portraits, mythology, secular subjects.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Technique: Medieval used conventions (gold backgrounds, hierarchical scale, flat space); Renaissance used innovations (perspective, chiaroscuro, anatomy study) — scientific naturalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Worldview shift: medieval = God-centered, spiritual over physical; Renaissance = human-centered, naturalism + classical revival — art reflected changing values.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Medieval religious/conventional → Renaissance humanist/naturalistic",
          "commonErrors": [
                    "Seeing as mere style change — reflects worldview shift."
          ]
},
        },
        {
          id: "apah-u2-renaissance-art-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Renaissance art reflects changing attitudes toward humanity. What does it reveal about the era?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Art as cultural evidence",
                              "statement": "Humanism made visible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Humanist focus: portraits of individuals (not just saints), secular subjects (mythology, everyday life), celebration of human achievement — art no longer exclusively religious.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Technical innovations: perspective, anatomy study, chiaroscuro — scientific approach to representing human body; art became intellectual pursuit requiring study, not just craft.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Patronage shift: wealthy merchants/courtiers commissioned art — art served secular power and prestige, not just Church; reflects rise of urban merchant class.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Renaissance art reveals humanist worldview — humanity valued alongside divinity; art reflects era's intellectual curiosity, individualism, and classical revival.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Renaissance art reveals humanist shift — humanity valued",
          "commonErrors": [
                    "Treating as mere aesthetic change — reflects cultural transformation."
          ]
},
        },
      ],
    },
  ],
};
