import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "apelit-u1-lesson-1-6",
  code: "1-6",
  title: "Themes, Symbols, and Patterns",
  goal: "I CAN trace recurring patterns and connect symbols to themes.",
  standards: ["AP Lit 6.x"],
  vocabulary: [
    { term: "Theme", definition: "The text's central insight about life — never a single word like 'love'." },
    { term: "Motif", definition: "A recurring element (image, action, phrase) that develops meaning." },
    { term: "Symbol", definition: "A concrete detail representing an abstract idea — context determines meaning." },
    { term: "Pattern", definition: "Repetition with variation — where meaning accumulates." },
    { term: "Ambiguity", definition: "Deliberate openness to multiple interpretations." },
    { term: "Universal theme", definition: "A theme resonating across texts and cultures." },
  ],
  concepts: [
    {
      id: "apelit-u1-themes-symbols",
      title: "Themes and symbols",
      skill: "Trace motifs and connect symbols to themes with evidence.",
      lesson: {
        sections: [
          {
            heading: "From symbol to theme",
            body: "A **symbol** is a concrete detail carrying abstract meaning — but meaning comes from context and pattern, not a fixed dictionary. A dove might mean peace in one text, irony in another. Track how the symbol recurs and how its associations shift.",
          },
          {
            heading: "Motifs build themes",
            body: "A **motif** is a recurring element — an image, gesture, or phrase — whose repetitions accumulate meaning. A theme emerges when motifs cluster around a pattern of significance. 'Love' isn't a theme; 'love as both salvation and destruction' might be.",
          },
        ],
        keyFormulas: [
          { name: "Symbol reading", statement: "Track recurrence → note context shifts → connect to theme" },
          { name: "Theme test", statement: "Can you state it as a claim about life, not a topic?" },
        ],
        workedExample: {
          problem: "A story repeats images of caged birds before each character's moment of confinement. What theme emerges?",
          solution: "The recurring bird imagery is a motif building toward the theme of entrapment — characters are figuratively caged by circumstance, choice, or society, and the birds' fate mirrors their own.",
        },
      },
      questions: [
        {
          id: "apelit-u1-themes-symbols-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recurring element that develops meaning across a text is a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "symbol"
                    },
                    {
                              "id": "b",
                              "text": "motif"
                    },
                    {
                              "id": "c",
                              "text": "theme"
                    },
                    {
                              "id": "d",
                              "text": "metaphor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Motif",
                              "statement": "Recurring element accumulating meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Motifs recur and develop; symbols are single details carrying meaning — motifs are the pattern, symbols the instances.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Motif",
          "commonErrors": [
                    "Confusing motif with symbol."
          ]
},
        },
        {
          id: "apelit-u1-themes-symbols-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The novel is about love' is a weak theme statement because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "love isn't a theme"
                    },
                    {
                              "id": "b",
                              "text": "it names a topic, not a claim about life"
                    },
                    {
                              "id": "c",
                              "text": "it's too short"
                    },
                    {
                              "id": "d",
                              "text": "themes can't be stated"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Theme vs topic",
                              "statement": "Theme = arguable insight; topic = subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A theme makes a claim — 'love requires sacrifice' or 'love can destroy as well as redeem' — while 'love' is just the subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Topic, not claim",
          "commonErrors": [
                    "Accepting single-word theme statements."
          ]
},
        },
        {
          id: "apelit-u1-themes-symbols-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the same symbol can mean different things in different texts — or even within one text.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Contextual symbolism",
                              "statement": "Meaning comes from pattern and context."
                    },
                    {
                              "kind": "skill",
                              "name": "Nuanced analysis",
                              "statement": "Avoid fixed interpretations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Symbol meaning emerges from context — a river might mean freedom in one scene and danger in another; patterns of recurrence and variation determine the associations.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Within a text, a symbol's meaning can shift or darken as the story progresses — early appearances may be innocent, later ones ironic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong answers treat symbols as dynamic, not fixed codes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Symbol meaning is contextual and can shift across occurrences",
          "commonErrors": [
                    "Treating symbols as having one fixed meaning."
          ]
},
        },
        {
          id: "apelit-u1-themes-symbols-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student argues 'the theme is death.' Improve this into a defensible theme statement and explain why the improvement matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme formulation",
                              "statement": "Turn topic into arguable claim."
                    },
                    {
                              "kind": "context",
                              "name": "Defensible thesis",
                              "statement": "A theme should be arguable, not obvious."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Death' is a topic; a theme claims something ABOUT death — e.g., 'the story suggests that death, confronted honestly, can be a form of freedom' or 'characters who avoid mortality become less alive than those who accept it.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The improvement matters because a claim can be supported and contested with evidence; a topic cannot — 'the theme is death' invites the response 'so what?'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong themes are specific enough to be argued yet broad enough to resonate.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Transform 'death' into a claim about what death means in this text",
          "commonErrors": [
                    "Confusing topic with theme."
          ]
},
        },
      ],
    },
  ],
};
