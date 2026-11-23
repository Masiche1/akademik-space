import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "apelit-u2-lesson-2-4",
  code: "2-4",
  title: "How Texts Position Readers",
  goal: "I CAN analyze how texts shape audience response and interpretation.",
  standards: ["AP Lit 16.x"],
  vocabulary: [
    { term: "Reader positioning", definition: "How a text guides what readers notice, feel, and conclude." },
    { term: "Free indirect discourse", definition: "Blending narrator's voice with character's thoughts." },
    { term: "Unreliable narration", definition: "Narrator whose account distorts truth." },
    { term: "Audience awareness", definition: "How texts acknowledge their readers." },
    { term: "Implied reader", definition: "The audience the text seems designed for." },
    { term: "Readerly vs writerly", definition: "Texts that guide vs texts that invite active reading." },
  ],
  concepts: [
    {
      id: "apelit-u2-reader-positioning",
      title: "Reader positioning",
      skill: "Analyze how texts shape what readers notice and conclude.",
      lesson: {
        sections: [
          {
            heading: "Texts position readers",
            body: "Every text guides response — through point of view, tone, what it reveals and conceals, what it asks readers to infer. **Free indirect discourse** blends narrator and character voice, making readers inhabit consciousness; **unreliable narration** makes readers detective; **direct address** creates intimacy or challenge.",
          },
          {
            heading: "Readerly vs writerly",
            body: "Some texts guide readers firmly (readerly — clear meanings, guided interpretation); others invite active construction (writerly — gaps, ambiguity, multiple paths). The most sophisticated texts do both — guide toward certain insights while leaving room for discovery.",
          },
        ],
        keyFormulas: [
          { name: "Positioning", statement: "POV + tone + gaps → reader response" },
          { name: "Readerly/writerly", statement: "Guided interpretation vs invited construction" },
        ],
        workedExample: {
          problem: "A novel uses free indirect discourse — 'She supposed it was kindness. Or pity.' Analyze the effect.",
          solution: "Free indirect discourse blends narrator and character — the hedging ('supposed', 'or') shows the character's uncertainty while the narrator's proximity creates intimacy; readers inhabit her self-doubt rather than observing it.",
        },
      },
      questions: [
        {
          id: "apelit-u2-reader-positioning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Free indirect discourse ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is direct quotation"
                    },
                    {
                              "id": "b",
                              "text": "blends narrator and character voice, creating intimate access to thought"
                    },
                    {
                              "id": "c",
                              "text": "is always unreliable"
                    },
                    {
                              "id": "d",
                              "text": "is third-person limited"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Free indirect discourse",
                              "statement": "Narrator-character voice blend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Free indirect discourse merges narrator and character — readers access thoughts with narrator's polish but character's immediacy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Voice blend",
          "commonErrors": [
                    "Confusing with stream of consciousness."
          ]
},
        },
        {
          id: "apelit-u2-reader-positioning-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'writerly' text ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is badly written"
                    },
                    {
                              "id": "b",
                              "text": "invites readers to actively construct meaning through gaps and ambiguity"
                    },
                    {
                              "id": "c",
                              "text": "has no narrator"
                    },
                    {
                              "id": "d",
                              "text": "is always poetry"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Writerly text",
                              "statement": "Reader as co-creator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writerly texts leave gaps and ambiguities that readers must fill — meaning is co-created rather than delivered; contrast with readerly texts that guide firmly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Invites active reading",
          "commonErrors": [
                    "Confusing writerly with poorly written."
          ]
},
        },
        {
          id: "apelit-u2-reader-positioning-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an unreliable narrator positions readers differently than a reliable one.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Narrative positioning",
                              "statement": "Trust vs suspicion."
                    },
                    {
                              "kind": "skill",
                              "name": "Reader-effect analysis",
                              "statement": "How trust shapes response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A reliable narrator guides readers toward trust — we accept their account and focus on events; an unreliable one makes readers detectives — we question, verify, and read between lines, creating skepticism or sympathy depending on why they're unreliable.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The positioning differs fundamentally: reliable narration positions readers as recipients; unreliable positions them as investigators — different cognitive work, different emotional responses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong analysis connects the narrator's reliability to the text's theme — why SHOULD we trust or distrust this voice?",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Unreliable narration makes readers investigators, not recipients",
          "commonErrors": [
                    "Treating reliability as a binary label without analyzing its effect."
          ]
},
        },
        {
          id: "apelit-u2-reader-positioning-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a text can simultaneously guide readers and leave them freedom — the readerly-writerly balance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Reader positioning spectrum",
                              "statement": "Guided vs open interpretation."
                    },
                    {
                              "kind": "skill",
                              "name": "Nuanced analysis",
                              "statement": "Both/and thinking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sophisticated texts guide through structure and emphasis — certain details are highlighted, patterns reinforced — while leaving genuine gaps in interpretation; they lead readers to certain insights without dictating all conclusions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: a text might clearly establish a character's guilt (guiding) while leaving ambiguous whether their motive was love or ambition (open) — guidance on facts, freedom on judgment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This balance mirrors real reading — we bring our own experiences while being shaped by the text's cues.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Guide facts, leave judgment — sophisticated texts balance both",
          "commonErrors": [
                    "Seeing reader positioning as either/or rather than both/and."
          ]
},
        },
      ],
    },
  ],
};
