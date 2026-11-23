import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ela4-u4-lesson-4-1",
  code: "4-1",
  title: "Main Idea of Informational Text",
  goal: "I CAN identify the main idea and supporting details.",
  standards: ["RI.4.2"],
  vocabulary: [
    { term: "Main idea", definition: "Big idea of text." },
    { term: "Topic", definition: "What it's about." },
    { term: "Detail", definition: "Small fact." },
    { term: "Supporting", definition: "Helps main idea." },
    { term: "Central", definition: "Most important." },
    { term: "Paragraph", definition: "Section of text." },
    { term: "Summarize", definition: "Short version." },
    { term: "Evidence", definition: "Supporting detail." },
  ],
  concepts: [
    {
      id: "ela4-u4-main-idea",
      title: "Main idea of informational text",
      skill: "Identify the main idea and supporting details in informational texts.",
      lesson: {
        sections: [
          {
            heading: "Big idea",
            body: "The **main idea** is what the whole text is about — the **biggest point**. **Details** support it. Ask: 'What is this whole text mostly about?'",
          },
          {
            heading: "Topic vs main idea",
            body: "**Topic** = subject ('volcanoes'); **main idea** = the point about it ('volcanoes can be dangerous and helpful').",
          },
        ],
        keyFormulas: [
          { name: "Main idea", statement: "Topic + point about topic = main idea." },
        ],
        workedExample: {
          problem: "Text about bees: 'Bees make honey, pollinate flowers, and live in hives.' Main idea?",
          solution: "**Bees are important pollinators** — that's the big idea; honey/hives are details.",
        },
      },
      questions: [
        {
          id: "ela4-u4-main-idea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'main idea' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one detail"
                    },
                    {
                              "id": "b",
                              "text": "the biggest point of the whole text"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "a word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Main idea = biggest point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main idea = biggest point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the biggest point of the whole text**",
          "commonErrors": [
                    "Confuses with detail."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Topic' vs 'main idea': topic is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the point"
                    },
                    {
                              "id": "b",
                              "text": "the subject"
                    },
                    {
                              "id": "c",
                              "text": "a detail"
                    },
                    {
                              "id": "d",
                              "text": "a summary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Topic = subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Topic = subject.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the subject**",
          "commonErrors": [
                    "Confuses topic/main idea."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read an informational text. State the main idea in one sentence and cite two supporting details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Main idea + two details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States main idea.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cites two details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Main idea: bees help plants; details: pollinate flowers, make honey.'**",
          "commonErrors": [
                    "Detail as main idea.",
                    "No details."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Supporting details' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the main idea"
                    },
                    {
                              "id": "b",
                              "text": "facts that back up the main idea"
                    },
                    {
                              "id": "c",
                              "text": "opinions"
                    },
                    {
                              "id": "d",
                              "text": "titles"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Details support main idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Details support main idea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**facts that back up the main idea**",
          "commonErrors": [
                    "Confuses with main idea."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the main ideas of two informational texts on the same topic. Which is more focused? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Main idea",
                              "statement": "Two main ideas + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States both main ideas.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues which is focused.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Text A: 'Bees pollinate' (focused); Text B: 'Insects are cool' (too broad).'**",
          "commonErrors": [
                    "One main idea only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's about."
                    },
                    {
                              "id": "b",
                              "text": "Big idea of text."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "Helps main idea."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means Big idea of text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means Big idea of text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = Big idea of text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Helps main idea."
                    },
                    {
                              "id": "c",
                              "text": "Most important."
                    },
                    {
                              "id": "d",
                              "text": "What it's about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-main-idea-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Helps main idea."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Most important."
                    },
                    {
                              "id": "d",
                              "text": "Section of text."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means Small fact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means Small fact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = Small fact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
