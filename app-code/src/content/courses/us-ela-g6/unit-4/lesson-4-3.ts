import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ela6-u4-lesson-4-3",
  code: "4-3",
  title: "Integrating Sources",
  goal: "I CAN integrate information from multiple sources.",
  standards: ["RI.6.7"],
  vocabulary: [
    { term: "Source", definition: "Where info comes from." },
    { term: "Integrate", definition: "Combine." },
    { term: "Multiple", definition: "More than one." },
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Synthesize", definition: "Combine ideas." },
    { term: "Cite", definition: "Reference source." },
    { term: "Reliable", definition: "Trustworthy." },
  ],
  concepts: [
    {
      id: "ela6-u4-integrating-sources",
      title: "Integrating sources",
      skill: "Integrate information from multiple sources to develop a comprehensive understanding.",
      lesson: {
        sections: [
          {
            heading: "Multiple sources",
            body: "**Integrating** means combining information from different sources to get a fuller picture.",
          },
          {
            heading: "Synthesis",
            body: "**Synthesize** = combine ideas from multiple sources into a new understanding. Note similarities and differences.",
          },
        ],
        keyFormulas: [
          { name: "Integrate", statement: "Combine multiple sources -> comprehensive understanding." },
        ],
        workedExample: {
          problem: "Source A says exercise helps the heart. Source B says exercise improves mood. Source C says exercise strengthens muscles. Integrate these.",
          solution: "**Exercise benefits heart health, mental health, and physical strength — comprehensive health benefits.**",
        },
      },
      questions: [
        {
          id: "ela6-u4-integrating-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Integrate' information means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "copy one source"
                    },
                    {
                              "id": "b",
                              "text": "combine multiple sources"
                    },
                    {
                              "id": "c",
                              "text": "ignore sources"
                    },
                    {
                              "id": "d",
                              "text": "pick one source"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Combine sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine sources.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "combine multiple sources",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u4-integrating-sources-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When integrating sources, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "use only one"
                    },
                    {
                              "id": "b",
                              "text": "compare and combine information"
                    },
                    {
                              "id": "c",
                              "text": "pick the longest"
                    },
                    {
                              "id": "d",
                              "text": "ignore differences"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Compare and combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare and combine.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "compare and combine information",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u4-integrating-sources-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Source A: 'Solar power is clean energy.' Source B: 'Solar power is becoming cheaper.' Source C: 'Solar power reduces carbon emissions.' Integrate these into one statement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrating",
                              "statement": "Solar power benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integrates sources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Solar power is a clean, increasingly affordable energy source that reduces carbon emissions.**",
          "commonErrors": [
                    "Cannot integrate.",
                    "Only one source."
          ]
},
        },
        {
          id: "ela6-u4-integrating-sources-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Synthesize' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "copy"
                    },
                    {
                              "id": "b",
                              "text": "combine ideas into new understanding"
                    },
                    {
                              "id": "c",
                              "text": "summarize one source"
                    },
                    {
                              "id": "d",
                              "text": "ignore sources"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Combine into new understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine into new understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "combine ideas into new understanding",
          "commonErrors": [
                    "Confuses with summarize."
          ]
},
        },
        {
          id: "ela6-u4-integrating-sources-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Integrate information from two sources and explain how they complement or contrast each other.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrating",
                              "statement": "Integration + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integrates sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains relation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Source A emphasizes benefits; Source B emphasizes challenges; Together they give balanced view.'**",
          "commonErrors": [
                    "Cannot integrate.",
                    "No relation explained."
          ]
},
        },
        {
          id: "ela6-u4-integrating-sources-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "c",
                              "text": "More than one."
                    },
                    {
                              "id": "d",
                              "text": "Find similarities."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "ela6-u4-integrating-sources-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More than one."
                    },
                    {
                              "id": "b",
                              "text": "Find similarities."
                    },
                    {
                              "id": "c",
                              "text": "Find differences."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-integrating-sources-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiple\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find similarities."
                    },
                    {
                              "id": "b",
                              "text": "More than one."
                    },
                    {
                              "id": "c",
                              "text": "Find differences."
                    },
                    {
                              "id": "d",
                              "text": "Combine ideas."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Multiple\" means More than one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiple\" means More than one.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Multiple** = More than one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
