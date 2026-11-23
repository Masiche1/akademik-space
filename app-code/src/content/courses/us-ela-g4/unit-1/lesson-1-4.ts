import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ela4-u1-lesson-1-4",
  code: "1-4",
  title: "Comparing Stories",
  goal: "I CAN compare and contrast two stories on the same topic.",
  standards: ["RL.4.9"],
  vocabulary: [
    { term: "Compare", definition: "See how they're alike." },
    { term: "Contrast", definition: "See how they differ." },
    { term: "Topic", definition: "What it's about." },
    { term: "Similar", definition: "Alike." },
    { term: "Different", definition: "Not alike." },
    { term: "Venn diagram", definition: "Overlapping circles." },
    { term: "Both", definition: "Alike in both." },
    { term: "Theme", definition: "Central message." },
  ],
  concepts: [
    {
      id: "ela4-u1-compare-stories",
      title: "Comparing stories",
      skill: "Compare and contrast two stories on similar topics.",
      lesson: {
        sections: [
          {
            heading: "Alike and different",
            body: "**Compare** = how stories are **alike**; **contrast** = how they **differ**. Use a **Venn diagram**: middle for both, sides for each story.",
          },
          {
            heading: "Same topic",
            body: "Stories on the same **topic** (friendship, courage) can have very different **themes**, **characters**, and **outcomes**.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Alike + different = full comparison." },
        ],
        workedExample: {
          problem: "Compare two stories about friendship.",
          solution: "Both about friendship (alike); one shows making friends, other shows keeping friends (different).",
        },
      },
      questions: [
        {
          id: "ela4-u1-compare-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Compare' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "find differences"
                    },
                    {
                              "id": "b",
                              "text": "see how things are alike"
                    },
                    {
                              "id": "c",
                              "text": "count pages"
                    },
                    {
                              "id": "d",
                              "text": "read faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Compare = see how alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare = see how alike.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**see how things are alike**",
          "commonErrors": [
                    "Confuses compare/contrast."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'Venn diagram' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a timeline"
                    },
                    {
                              "id": "b",
                              "text": "overlapping similarities and differences"
                    },
                    {
                              "id": "c",
                              "text": "a list only"
                    },
                    {
                              "id": "d",
                              "text": "a chart"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Venn = overlaps for both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Venn = overlaps for both.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**overlapping similarities and differences**",
          "commonErrors": [
                    "Thinks it's a list."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare two stories. List one similarity and one difference, with evidence from each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Similarity + difference + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds similarity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finds difference.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Both about friendship (alike); Story A ends happily, Story B ends sadly (different).'**",
          "commonErrors": [
                    "Only one story.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Contrast' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "find similarities"
                    },
                    {
                              "id": "b",
                              "text": "see how things are different"
                    },
                    {
                              "id": "c",
                              "text": "count words"
                    },
                    {
                              "id": "d",
                              "text": "read aloud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Contrast = see how different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contrast = see how different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**see how things are different**",
          "commonErrors": [
                    "Confuses compare/contrast."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two stories on the same topic. Which had a stronger theme? Use details to support your choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Comparison + stronger theme + details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares stories.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues stronger theme with details.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Story B's theme clearer because character learns lesson explicitly; Story A implies it.'**",
          "commonErrors": [
                    "No comparison.",
                    "No support."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See how they differ."
                    },
                    {
                              "id": "b",
                              "text": "See how they're alike."
                    },
                    {
                              "id": "c",
                              "text": "What it's about."
                    },
                    {
                              "id": "d",
                              "text": "Alike."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means See how they're alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See how they're alike.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = See how they're alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's about."
                    },
                    {
                              "id": "b",
                              "text": "Alike."
                    },
                    {
                              "id": "c",
                              "text": "Not alike."
                    },
                    {
                              "id": "d",
                              "text": "See how they differ."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Contrast\" means See how they differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Contrast\" means See how they differ.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Contrast** = See how they differ.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-compare-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Alike."
                    },
                    {
                              "id": "b",
                              "text": "What it's about."
                    },
                    {
                              "id": "c",
                              "text": "Not alike."
                    },
                    {
                              "id": "d",
                              "text": "Overlapping circles."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
