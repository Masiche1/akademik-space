import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apelit-u2-lesson-2-2",
  code: "2-2",
  title: "Narrative Technique and Structure",
  goal: "I CAN analyze narrative structure, pacing, and point-of-view effects.",
  standards: ["AP Lit 14.x"],
  vocabulary: [
    { term: "Narrative structure", definition: "How events are ordered and paced." },
    { term: "In medias res", definition: "Beginning in the middle of action." },
    { term: "Frame narrative", definition: "A story within a story." },
    { term: "Pacing", definition: "The rhythm of events — fast/slow, tense/calm." },
    { term: "Focalization", definition: "Whose perspective filters the narrative." },
    { term: "Unreliable vs reliable", definition: "Whether the narrator's account can be trusted." },
  ],
  concepts: [
    {
      id: "apelit-u2-narrative-technique",
      title: "Narrative technique",
      skill: "Analyze how structure and perspective shape meaning.",
      lesson: {
        sections: [
          {
            heading: "Structure as argument",
            body: "Narrative order is meaning-making: **in medias res** drops readers into action, creating immediacy and mystery; **frame narratives** distance events through a teller; **flashbacks** complicate chronology and reveal how past shapes present. The order events are told IS an interpretation.",
          },
          {
            heading: "Point of view as filter",
            body: "**Focalization** — whose eyes we see through — determines what we know and how we judge. A limited narrator creates suspense through ignorance; an unreliable one creates irony through distortion. POV isn't just 'who tells' — it's 'what can be known'.",
          },
        ],
        keyFormulas: [
          { name: "Structure effect", statement: "Order of events → reader experience → meaning" },
          { name: "POV filter", statement: "Who narrates → what's knowable → what's hidden" },
        ],
        workedExample: {
          problem: "A novel begins with a character's death, then rewinds to explain it. What effect?",
          solution: "In medias res creates immediate tension and mystery; the rewind (analepsis/flashback structure) makes readers re-interpret the death scene with knowledge of its causes — structure creates dramatic irony across time.",
        },
      },
      questions: [
        {
          id: "apelit-u2-narrative-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In medias res means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a story within a story"
                    },
                    {
                              "id": "b",
                              "text": "beginning in the middle of the action"
                    },
                    {
                              "id": "c",
                              "text": "a flashback"
                    },
                    {
                              "id": "d",
                              "text": "an unreliable narrator"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "In medias res",
                              "statement": "Into the middle of things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In medias res drops readers into ongoing action — immediacy and mystery replace chronological buildup.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Middle of action",
          "commonErrors": [
                    "Confusing with flashback."
          ]
},
        },
        {
          id: "apelit-u2-narrative-technique-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A frame narrative ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is always unreliable"
                    },
                    {
                              "id": "b",
                              "text": "nests one story inside another, often creating distance or commentary"
                    },
                    {
                              "id": "c",
                              "text": "is chronological"
                    },
                    {
                              "id": "d",
                              "text": "has no narrator"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Frame narrative",
                              "statement": "Story within story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A frame narrative encloses a story within a telling — creating layers of perspective and often commentary on storytelling itself.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Story within story",
          "commonErrors": [
                    "Assuming frame = unreliable always."
          ]
},
        },
        {
          id: "apelit-u2-narrative-technique-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how point of view controls what readers can know — and why that matters for meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Focalization",
                              "statement": "Perspective as knowledge filter."
                    },
                    {
                              "kind": "skill",
                              "name": "POV analysis",
                              "statement": "What can/can't be known."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point of view determines access — a limited narrator hides information creating suspense; an omniscient one reveals all creating dramatic irony; a first-person one filters through personal bias.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "What readers CAN'T know shapes interpretation — gaps in knowledge make readers active interpreters; what they CAN know shapes judgment — reliability determines trust.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "POV isn't neutral — it's the text's epistemological stance.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "POV controls knowledge access and shapes interpretation",
          "commonErrors": [
                    "Treating POV as just 'who speaks'."
          ]
},
        },
        {
          id: "apelit-u2-narrative-technique-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how narrative structure can be an argument — not just a container for events.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Structure as meaning",
                              "statement": "Order = interpretation."
                    },
                    {
                              "kind": "skill",
                              "name": "Form-content synthesis",
                              "statement": "Structure argues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Narrative order is interpretation: telling events backward makes readers judge the ending before the causes; starting in medias res privileges action over context; a circular structure enacts fate — the form argues that events are inevitable or that perspective reshapes truth.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Structure can also enact theme — a story told in fragments mirrors a fractured psyche; chronological order might suggest order emerging from chaos.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strongest analyses treat structure as a meaning-carrier equal to language.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Structure is interpretation — order of telling shapes meaning",
          "commonErrors": [
                    "Describing structure without analyzing its argument."
          ]
},
        },
      ],
    },
  ],
};
