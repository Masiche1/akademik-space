import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "apelit-u1-lesson-1-9",
  code: "1-9",
  title: "Analyzing Drama",
  goal: "I CAN analyze dramatic elements — dialogue, staging, conflict — in plays.",
  standards: ["AP Lit 9.x"],
  vocabulary: [
    { term: "Drama", definition: "Literature written for performance." },
    { term: "Stage directions", definition: "Instructions for performance — set, movement, tone." },
    { term: "Soliloquy", definition: "A character speaking alone, revealing inner thoughts." },
    { term: "Aside", definition: "A remark heard by audience but not other characters." },
    { term: "Dramatic irony", definition: "Audience knows what characters don't." },
    { term: "Tragic flaw", definition: "The character trait causing their downfall." },
  ],
  concepts: [
    {
      id: "apelit-u1-drama-analysis",
      title: "Drama analysis",
      skill: "Analyze dialogue, staging, and dramatic techniques in plays.",
      lesson: {
        sections: [
          {
            heading: "Drama is performance",
            body: "Plays are written to be performed — analyze **stage directions** (they're part of the text), **dialogue** (what's said AND what's avoided), and **dramatic techniques** (soliloquy, aside, irony). A character's pauses and movements are as meaningful as their words.",
          },
          {
            heading: "Key dramatic tools",
            body: "A **soliloquy** gives direct access to thoughts; an **aside** creates complicity with the audience; **dramatic irony** makes audiences watch characters stumble toward truths they can't see. These techniques position the audience — analyze how they shape response.",
          },
        ],
        keyFormulas: [
          { name: "Drama analysis", statement: "Dialogue + staging + technique → audience effect" },
          { name: "Irony types", statement: "Dramatic (audience knows), verbal (says opposite), situational (outcome differs)" },
        ],
        workedExample: {
          problem: "In a play, a character delivers a long soliloquy about their plan, then exits. What's the dramatic function?",
          solution: "The soliloquy gives the audience privileged knowledge — dramatic irony is created as we watch other characters unknowingly walk into the trap. It also reveals the character's motivation directly, which dialogue alone might conceal.",
        },
      },
      questions: [
        {
          id: "apelit-u1-drama-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A soliloquy is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dialogue between two characters"
                    },
                    {
                              "id": "b",
                              "text": "a character speaking alone, revealing inner thoughts"
                    },
                    {
                              "id": "c",
                              "text": "stage directions"
                    },
                    {
                              "id": "d",
                              "text": "an aside"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Soliloquy",
                              "statement": "Alone on stage, speaking thoughts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soliloquy = alone + thoughts aloud — direct access to interiority that dialogue conceals.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Alone revealing thoughts",
          "commonErrors": [
                    "Confusing soliloquy with monologue."
          ]
},
        },
        {
          id: "apelit-u1-drama-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dramatic irony occurs when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a character says the opposite of what they mean"
                    },
                    {
                              "id": "b",
                              "text": "the audience knows something characters don't"
                    },
                    {
                              "id": "c",
                              "text": "the outcome differs from expectation"
                    },
                    {
                              "id": "d",
                              "text": "two characters misunderstand each other"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dramatic irony",
                              "statement": "Audience knowledge exceeds character knowledge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dramatic irony specifically means the AUDIENCE knows what characters don't — creating tension as we watch them proceed in ignorance.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Audience knows more than characters",
          "commonErrors": [
                    "Confusing dramatic with verbal irony."
          ]
},
        },
        {
          id: "apelit-u1-drama-analysis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyze the effect of an aside in a play — why might a playwright use one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Aside",
                              "statement": "Audience-only remark creates complicity."
                    },
                    {
                              "kind": "skill",
                              "name": "Dramatic analysis",
                              "statement": "Audience positioning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An aside is heard by the audience but not other characters — it creates complicity (we share a secret) and can reveal true feelings that dialogue conceals.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It can also create dramatic irony — while characters believe one thing, the aside reveals another — positioning the audience as knowing judges.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The effect: audience superiority, sympathy, or skepticism depending on what the aside reveals.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Aside creates audience complicity and reveals hidden truth",
          "commonErrors": [
                    "Treating aside as just another line of dialogue."
          ]
},
        },
        {
          id: "apelit-u1-drama-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how stage directions function as part of a play's meaning — not just logistics.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Staging as text",
                              "statement": "Directions are authored choices."
                    },
                    {
                              "kind": "skill",
                              "name": "Performance analysis",
                              "statement": "Read directions as interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stage directions are the playwright's instructions — 'she crosses downstage' or 'he speaks to the wall' are interpretive choices that reveal character, power, or mood; they're part of the text's meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A pause, a gesture, a prop — these authored details shape performance and audience perception; ignoring them misses half the play.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong analyses treat staging as deliberate meaning-making, like a novelist's description.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Stage directions are authored meaning — analyze them like prose description",
          "commonErrors": [
                    "Skipping stage directions as 'not literature'."
          ]
},
        },
      ],
    },
  ],
};
