import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ela5-u1-lesson-1-1",
  code: "1-1",
  title: "Quoting Accurately",
  goal: "I CAN quote accurately from a text to support my answer.",
  standards: ["RL.5.1"],
  vocabulary: [
    { term: "Quote", definition: "Exact words from text." },
    { term: "Accurate", definition: "Correct and exact." },
    { term: "Evidence", definition: "Detail supporting answer." },
    { term: "Reference", definition: "Point to text." },
    { term: "Cite", definition: "Name where it says it." },
    { term: "Paragraph", definition: "Section of text." },
    { term: "Page", definition: "Where to find it." },
    { term: "Support", definition: "Back up answer.]" },
  ],
  concepts: [
    {
      id: "ela5-u1-quoting-accurately",
      title: "Quoting accurately",
      skill: "Quote exactly from the text to support your answers.",
      lesson: {
        sections: [
          {
            heading: "Exact words",
            body: "A **quote** uses the **exact words** from the text. Copy them carefully — don't change any words.",
          },
          {
            heading: "Why quote",
            body: "Quoting gives **evidence** for your answer. It shows you actually read the text, not just guessed.",
          },
        ],
        keyFormulas: [
          { name: "Quote", statement: "Exact words + where it came from = strong evidence." },
        ],
        workedExample: {
          problem: "Find a quote that shows the character was brave.",
          solution: "Look for words like 'she ran into the dark cave without hesitation' — that's evidence of bravery.",
        },
      },
      questions: [
        {
          id: "ela5-u1-quoting-accurately-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'accurate quote' uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your own words"
                    },
                    {
                              "id": "b",
                              "text": "the exact words from the text"
                    },
                    {
                              "id": "c",
                              "text": "a summary"
                    },
                    {
                              "id": "d",
                              "text": "a guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Exact words from text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exact words from text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the exact words from the text",
          "commonErrors": [
                    "Paraphrases instead."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you quote from the text?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "to make it longer"
                    },
                    {
                              "id": "b",
                              "text": "to provide evidence for your answer"
                    },
                    {
                              "id": "c",
                              "text": "to confuse the reader"
                    },
                    {
                              "id": "d",
                              "text": "it's optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Evidence for answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence for answer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "to provide evidence for your answer",
          "commonErrors": [
                    "Thinks quotes aren't important."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a short passage. Find one quote that supports the idea that the character is kind.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Quoting",
                              "statement": "Finds relevant quote."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds quote.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'She shared her lunch with the new student' — shows kindness.**",
          "commonErrors": [
                    "No quote.",
                    "Wrong evidence."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When quoting, you should also...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "change some words"
                    },
                    {
                              "id": "b",
                              "text": "tell where it came from"
                    },
                    {
                              "id": "c",
                              "text": "make it shorter only"
                    },
                    {
                              "id": "d",
                              "text": "add your own words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Tell where it came from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tell where it came from.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "tell where it came from",
          "commonErrors": [
                    "Doesn't cite source."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Quote a passage that shows the character's feeling. Explain why this quote supports your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Quoting",
                              "statement": "Quote + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds quote.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains connection.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Her hands trembled as she opened the letter' — shows nervousness/fear.**",
          "commonErrors": [
                    "No quote.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quote\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Correct and exact."
                    },
                    {
                              "id": "b",
                              "text": "Exact words from text."
                    },
                    {
                              "id": "c",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "d",
                              "text": "Point to text."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Quote\" means Exact words from text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quote\" means Exact words from text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Quote** = Exact words from text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Accurate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "b",
                              "text": "Point to text."
                    },
                    {
                              "id": "c",
                              "text": "Name where it says it."
                    },
                    {
                              "id": "d",
                              "text": "Correct and exact."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Accurate\" means Correct and exact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Accurate\" means Correct and exact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Accurate** = Correct and exact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-quoting-accurately-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evidence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Point to text."
                    },
                    {
                              "id": "b",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "c",
                              "text": "Name where it says it."
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
                              "statement": "\"Evidence\" means Detail supporting answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evidence\" means Detail supporting answer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Evidence** = Detail supporting answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
