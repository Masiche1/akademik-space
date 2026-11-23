import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "satrw-u2-lesson-2-4",
  code: "2-4",
  title: "Analyzing Text Structure and Purpose",
  goal: "I CAN explain how an author's organizational choices serve their purpose.",
  standards: ["SAT RW 6.x"],
  vocabulary: [
    { term: "Organizational choice", definition: "How the author arranges information." },
    { term: "Effect of structure", definition: "What the arrangement accomplishes." },
    { term: "Flashback", definition: "Interrupting chronology to reach the past." },
    { term: "Foreshadowing", definition: "Hinting at later events." },
    { term: "Circular structure", definition: "Returning to the beginning at the end." },
    { term: "Purpose-structure link", definition: "Organization serves the author's goal." },
  ],
  concepts: [
    {
      id: "satrw-u2-structure-analysis",
      title: "Structure and purpose",
      skill: "Analyze how organizational choices serve authorial purpose.",
      lesson: {
        sections: [
          {
            heading: "Structure serves purpose",
            body: "Why did the author choose THIS organization? A problem-solution structure persuades by building toward resolution; chronological order creates suspense or inevitability; flashbacks reveal how past shapes present. The structure is an argument — it shapes how readers experience the information.",
          },
          {
            heading: "Non-linear structures",
            body: "Flashbacks, circular structures, in-medias-res beginnings all manipulate time to create effects — suspense, irony, inevitability. Analyzing WHY the author disrupted chronology reveals purpose: what does the non-linear order make readers notice or feel that linear order wouldn't?",
          },
        ],
        keyFormulas: [
          { name: "Structure = argument", statement: "Organization shapes experience, not just delivers info" },
          { name: "Non-linear effect", statement: "Disrupted time creates suspense/irony/inevitability" },
        ],
        workedExample: {
          problem: "A story begins with the ending, then rewinds to explain. Why?",
          solution: "In medias res creates immediate intrigue; the rewind (analepsis) makes readers re-interpret earlier scenes with knowledge of the outcome — structure creates dramatic irony across time; the organization IS the meaning.",
        },
      },
      questions: [
        {
          id: "satrw-u2-structure-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text structure refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "grammar"
                    },
                    {
                              "id": "b",
                              "text": "how information is organized"
                    },
                    {
                              "id": "c",
                              "text": "vocabulary"
                    },
                    {
                              "id": "d",
                              "text": "the topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Text structure",
                              "statement": "Organization of content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Text structure = how ideas are arranged — chronological, cause-effect, problem-solution — not just what they are.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Organization",
          "commonErrors": [
                    "Confusing with content."
          ]
},
        },
        {
          id: "satrw-u2-structure-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A flashback in a narrative ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is always confusing"
                    },
                    {
                              "id": "b",
                              "text": "interrupts chronology to reveal how past shapes present"
                    },
                    {
                              "id": "c",
                              "text": "is a mistake"
                    },
                    {
                              "id": "d",
                              "text": "only appears in poetry"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Flashback function",
                              "statement": "Past informs present."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flashbacks reveal how past events shape present understanding — the interruption itself is meaningful, showing what's relevant enough to interrupt for.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Reveals past's role",
          "commonErrors": [
                    "Treating flashback as mere technique."
          ]
},
        },
        {
          id: "satrw-u2-structure-analysis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why an author might choose non-linear structure over chronological order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Structural choice",
                              "statement": "Time manipulation for effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-linear structure creates effects linear can't: suspense (what happened?), irony (knowing outcome re-frames scenes), inevitability (circular return), or thematic emphasis (the past intrudes on present).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The choice reveals purpose — disrupting chronology signals that time/order itself is part of the meaning, not just a container for events.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: starting with the ending makes every earlier scene ironic — readers watch characters walk toward a known fate.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Non-linear creates suspense/irony/inevitability",
          "commonErrors": [
                    "Assuming chronological is always best."
          ]
},
        },
        {
          id: "satrw-u2-structure-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A passage about a scientific discovery is organized as: question → failed attempts → breakthrough → implications. What does this structure accomplish?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure-purpose analysis",
                              "statement": "What the order achieves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The structure mirrors the scientific method — question (hypothesis), failed attempts (experimentation), breakthrough (discovery), implications (significance); it makes the discovery feel earned and logical.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also builds suspense — the failed attempts create tension resolved by the breakthrough; readers experience the discovery's difficulty rather than just receiving the result.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Recognizing this structure helps answer 'why does the author include the failures?' — they're necessary to make the breakthrough meaningful.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Structure mirrors method — makes discovery feel earned",
          "commonErrors": [
                    "Seeing structure as arbitrary container."
          ]
},
        },
      ],
    },
  ],
};
