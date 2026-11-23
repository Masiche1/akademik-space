import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "apah-u4-lesson-4-1",
  code: "4-1",
  title: "Postmodernism and Contemporary Art",
  goal: "I CAN analyze postmodern challenges to modernism and contemporary art practices.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Postmodernism", definition: "Challenge to modernist grand narratives — irony, appropriation, pluralism." },
    { term: "Appropriation", definition: "Using existing images/objects as art — Warhol's Campbell's Soup." },
    { term: "Installation art", definition: "Immersive environments — viewer becomes part of artwork." },
    { term: "Conceptual art", definition: "Idea as artwork — Sol LeWitt's instructions, Ono's performances." },
    { term: "Pop art", definition: "Celebrating/appropriating popular culture — Warhol, Lichtenstein." },
    { term: "Global contemporary", definition: "Art beyond Western canon — diverse traditions, decolonial perspectives." },
  ],
  concepts: [
    {
      id: "apah-u4-postmodernism-contemporary",
      title: "Postmodern and contemporary art",
      skill: "Analyze postmodernism's challenges and contemporary practices.",
      lesson: {
        sections: [
          {
            heading: "Postmodernism",
            body: "Challenged modernist ideals — irony, appropriation, pluralism, skepticism of 'originality'; blurred high/low culture; art questioned what counts as art.",
          },
          {
            heading: "Contemporary practices",
            body: "Installation (immersive), conceptual (idea as art), performance (live action), digital/media — expanded beyond traditional media.",
          },
        ],
        keyFormulas: [
          { name: "Postmodernism", statement: "Irony / Appropriation / Pluralism / Skepticism" },
          { name: "Contemporary practices", statement: "Installation / Conceptual / Performance / Digital / Global" },
          { name: "Key artists", statement: "Warhol / Basquiat / Hirst / Ai Weiwei / Kusama" },
        ],
        workedExample: {
          problem: "Analyze Warhol's Campbell's Soup Cans",
          solution: "Pop art — appropriated commercial imagery (soup cans) as fine art; questioned art's boundaries; mass production aesthetics; celebrity/culture commentary.",
        },
      },
      questions: [
        {
          id: "apah-u4-postmodernism-contemporary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pop art is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "abstract shapes"
                    },
                    {
                              "id": "b",
                              "text": "appropriating popular/commercial imagery"
                    },
                    {
                              "id": "c",
                              "text": "religious themes"
                    },
                    {
                              "id": "d",
                              "text": "realistic landscapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pop art",
                              "statement": "Popular culture appropriation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pop art appropriates popular/commercial imagery — Warhol's soup cans, Lichtenstein's comic panels; blurred high/low culture boundaries; questioned art's elitism.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Popular imagery appropriation",
          "commonErrors": [
                    "Confusing with other movements."
          ]
},
        },
        {
          id: "apah-u4-postmodernism-contemporary-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Postmodernism challenged modernism by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "embracing grand narratives"
                    },
                    {
                              "id": "b",
                              "text": "questioning universal truths and originality"
                    },
                    {
                              "id": "c",
                              "text": "rejecting all art"
                    },
                    {
                              "id": "d",
                              "text": "returning to realism"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Postmodernism",
                              "statement": "Skepticism of modernism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Postmodernism challenged modernist grand narratives — irony, appropriation, pluralism, skepticism of 'originality'; questioned universal truths and artistic purity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It didn't reject art — it questioned modernist assumptions about originality and progress.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Questioning universal truths + originality",
          "commonErrors": [
                    "Thinking it rejected art — it questioned assumptions."
          ]
},
        },
        {
          id: "apah-u4-postmodernism-contemporary-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If Warhol's 'Marilyn Diptych' created 1962 and Pop Art peaked ~1960s, how many years? Enter approximate number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Estimate",
                              "statement": "$1962 - 1960 = 2$ approx $0$ (at peak)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Marilyn Diptych' 1962 — right at Pop Art's peak (~1960s).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $0$-2 (approximately at peak).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Imprecise dating."
          ]
},
        },
        {
          id: "apah-u4-postmodernism-contemporary-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare modernism and postmodernism. What fundamental assumptions did each hold?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Modernism vs. postmodernism",
                              "statement": "Grand narratives vs. skepticism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Modernism: believed in progress, originality, universal truths — art should innovate, express authentic experience; grand narratives about art's purpose.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Postmodernism: skeptical of grand narratives — irony, appropriation, pluralism; questioned originality ('everything's been done'), blurred high/low culture; art as commentary not progress.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Relationship: postmodernism reacted to modernism — not rejection but critique; questioned modernist assumptions while still making art.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Modernism = progress/originality; Postmodernism = skepticism/pluralism",
          "commonErrors": [
                    "Seeing as simple opposition — it's critical dialogue."
          ]
},
        },
        {
          id: "apah-u4-postmodernism-contemporary-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how contemporary art expanded beyond Western traditions. What does 'global art' mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Global contemporary art",
                              "statement": "Beyond Western canon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traditional art history focused Western canon (Europe/US) — marginalized non-Western traditions; contemporary 'global art' includes African, Asian, Latin American, Indigenous perspectives.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Artists like Ai Weiwei (China), Kusama (Japan), Basquiat (African-American), Indigenous artists — bring diverse traditions, decolonial perspectives, local contexts to global stage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "'Global art' means: art transcending national boundaries, diverse traditions in dialogue, decolonizing art history, local contexts meeting global audiences — not homogenization but plurality.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: contemporary art is increasingly global — expanded beyond Western canon to include diverse traditions; reflects art world's decolonization and pluralism.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Global art expands beyond Western canon — plurality not homogenization",
          "commonErrors": [
                    "Assuming Western dominance continues — art world has globalized."
          ]
},
        },
      ],
    },
  ],
};
