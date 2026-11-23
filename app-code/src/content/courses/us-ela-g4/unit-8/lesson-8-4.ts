import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "ela4-u8-lesson-8-4",
  code: "8-4",
  title: "Research Skills",
  goal: "I CAN gather information from multiple sources.",
  standards: ["W.4.7", "W.4.8"],
  vocabulary: [
    { term: "Research", definition: "Find information." },
    { term: "Source", definition: "Where info comes from." },
    { term: "Reliable", definition: "Trustworthy." },
    { term: "Multiple sources", definition: "Several references." },
    { term: "Note", definition: "Write down key facts." },
    { term: "Organize", definition: "Arrange info." },
    { term: "Verify", definition: "Check accuracy." },
    { term: "Cite", definition: "Give credit." },
  ],
  concepts: [
    {
      id: "ela4-u8-research-skills",
      title: "Research skills",
      skill: "Gather information from reliable sources and organize it.",
      lesson: {
        sections: [
          {
            heading: "Find good sources",
            body: "**Research** means finding information from **reliable sources** — books, encyclopedias, educational websites. Use **multiple sources** to **verify** facts.",
          },
          {
            heading: "Organize",
            body: "Take **notes** on key facts, **organize** them by topic, and **cite** your sources so readers know where information came from.",
          },
        ],
        keyFormulas: [
          { name: "Research", statement: "Reliable sources + notes + organize + cite = good research." },
        ],
        workedExample: {
          problem: "Research 'dolphins'. What sources would you use?",
          solution: "Encyclopedia, science book, educational website like National Geographic; take notes on habitat, diet, behavior; cite each.",
        },
      },
      questions: [
        {
          id: "ela4-u8-research-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'reliable source' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any website"
                    },
                    {
                              "id": "b",
                              "text": "a trustworthy reference"
                    },
                    {
                              "id": "c",
                              "text": "a guess"
                    },
                    {
                              "id": "d",
                              "text": "a rumor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Reliable = trustworthy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reliable = trustworthy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a trustworthy reference**",
          "commonErrors": [
                    "Thinks any source works."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Multiple sources' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one source"
                    },
                    {
                              "id": "b",
                              "text": "several references"
                    },
                    {
                              "id": "c",
                              "text": "no sources"
                    },
                    {
                              "id": "d",
                              "text": "only books"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Multiple = several."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple = several.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**several references**",
          "commonErrors": [
                    "Uses only one."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose a topic. List three reliable sources you would use and explain why each is trustworthy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research",
                              "statement": "Three sources + trustworthiness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists three sources.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains trustworthiness.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Encyclopedia (expert-reviewed), science book (author credentials), educational site (.edu domain).'**",
          "commonErrors": [
                    "Unreliable sources.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Citing' sources means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "copying"
                    },
                    {
                              "id": "b",
                              "text": "giving credit where info came from"
                    },
                    {
                              "id": "c",
                              "text": "ignoring"
                    },
                    {
                              "id": "d",
                              "text": "memorizing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Cite = give credit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cite = give credit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**giving credit where info came from**",
          "commonErrors": [
                    "Thinks it's copying."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Research a topic using two sources. How do you verify the information is accurate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research",
                              "statement": "Two sources + verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses two sources.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains verification.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Check both sources agree; look for expert authors; compare with known facts.'**",
          "commonErrors": [
                    "One source only.",
                    "No verification."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Research\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "b",
                              "text": "Find information."
                    },
                    {
                              "id": "c",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "d",
                              "text": "Several references."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Research\" means Find information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Research\" means Find information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Research** = Find information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "b",
                              "text": "Several references."
                    },
                    {
                              "id": "c",
                              "text": "Write down key facts."
                    },
                    {
                              "id": "d",
                              "text": "Where info comes from."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Source\" means Where info comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where info comes from.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Source** = Where info comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-research-skills-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reliable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Several references."
                    },
                    {
                              "id": "b",
                              "text": "Trustworthy."
                    },
                    {
                              "id": "c",
                              "text": "Write down key facts."
                    },
                    {
                              "id": "d",
                              "text": "Arrange info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reliable\" means Trustworthy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reliable\" means Trustworthy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reliable** = Trustworthy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
