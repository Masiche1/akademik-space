import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apelit-u1-lesson-1-1",
  code: "1-1",
  title: "Close Reading and Literary Elements",
  goal: "I CAN perform close reading and identify how literary elements build meaning.",
  standards: ["AP Lit 1.x"],
  vocabulary: [
    { term: "Close reading", definition: "Slow, detailed analysis of a text's language, structure, and patterns." },
    { term: "Setting", definition: "Time and place — often symbolic of mood or theme." },
    { term: "Point of view", definition: "Who narrates and what they can know — first, third limited, omniscient." },
    { term: "Tone", definition: "The author's attitude toward subject and audience." },
    { term: "Imagery", definition: "Language appealing to the senses." },
    { term: "Symbol", definition: "A concrete detail standing for an abstract idea." },
  ],
  concepts: [
    {
      id: "apelit-u1-close-reading",
      title: "Close reading and literary elements",
      skill: "Analyze how setting, point of view, tone, and imagery create meaning.",
      lesson: {
        sections: [
          {
            heading: "Close reading",
            body: "Close reading means slowing down: notice patterns of diction, recurring images, shifts in tone, and structural choices (where a paragraph breaks, what a chapter ends on). Meaning lives in these details, not in plot summary.",
          },
          {
            heading: "The big four elements",
            body: "**Setting** grounds the story — a stormy night can externalize inner turmoil. **Point of view** controls what readers can know: a first-person unreliable narrator hides what an omniscient one would reveal. **Tone** is the writer's attitude, distinct from mood (the reader's feeling). **Imagery** makes abstract ideas concrete through sensory detail.",
          },
        ],
        keyFormulas: [
          { name: "Element analysis", statement: "Identify element → quote the detail → explain its effect on meaning" },
          { name: "Tone vs mood", statement: "Tone = author's attitude; mood = reader's feeling" },
        ],
        workedExample: {
          problem: "A narrator describes a decaying mansion as 'its windows like blind eyes.' Identify the element and effect.",
          solution: "This is imagery — specifically a simile comparing windows to blind eyes. It suggests the house cannot see or perceive, foreshadowing themes of ignorance or willful blindness, and creates a sinister tone.",
        },
      },
      questions: [
        {
          id: "apelit-u1-close-reading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The difference between tone and mood is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "none — they are synonyms"
                    },
                    {
                              "id": "b",
                              "text": "tone is the author's attitude; mood is the reader's feeling"
                    },
                    {
                              "id": "c",
                              "text": "tone is the plot; mood is the setting"
                    },
                    {
                              "id": "d",
                              "text": "tone is dialogue; mood is narration"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tone vs mood",
                              "statement": "Author's attitude vs reader's response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tone belongs to the writer; mood belongs to the reader.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Tone = author's attitude; mood = reader's feeling",
          "commonErrors": [
                    "Treating them as interchangeable."
          ]
},
        },
        {
          id: "apelit-u1-close-reading-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A first-person narrator who lies to readers demonstrates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "omniscient point of view"
                    },
                    {
                              "id": "b",
                              "text": "unreliable narration"
                    },
                    {
                              "id": "c",
                              "text": "objective point of view"
                    },
                    {
                              "id": "d",
                              "text": "third-person limited"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Unreliable narrator",
                              "statement": "The narrator's account cannot be fully trusted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An unreliable narrator distorts or conceals truth, forcing readers to read between the lines — a major source of literary tension.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Unreliable narration",
          "commonErrors": [
                    "Assuming all first-person narrators are trustworthy."
          ]
},
        },
        {
          id: "apelit-u1-close-reading-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analyze this line for its literary effect: 'The garden had gone to seed — roses choked by weeds, paths swallowed by grass.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery and personification",
                              "statement": "Concrete decay imagery suggests neglect."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect analysis",
                              "statement": "Link language to theme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The imagery of choking weeds and swallowed paths personifies the garden as neglected and overrun.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It suggests themes of abandonment, lost beauty, or time's destructive power — the garden mirrors something (a relationship, a life) gone untended.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Decay imagery suggests neglect and mirrors larger themes of loss",
          "commonErrors": [
                    "Describing the image without connecting it to meaning."
          ]
},
        },
        {
          id: "apelit-u1-close-reading-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a writer's choice of setting can function as more than backdrop. Give a specific example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Setting as symbol",
                              "statement": "Place can externalize theme."
                    },
                    {
                              "kind": "skill",
                              "name": "Argument with example",
                              "statement": "Make a claim and support it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Setting can externalize internal states or societal conditions — a character trapped in a small town mirrors a trapped life; a storm can echo emotional chaos.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Specific example: in a story set during an epidemic, the quarantined household literally enacts the characters' emotional isolation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strongest answers argue that setting IS meaning, not decoration.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Setting can externalize theme and mirror characters' inner or social conditions",
          "commonErrors": [
                    "Treating setting as mere scenery."
          ]
},
        },
      ],
    },
  ],
};
