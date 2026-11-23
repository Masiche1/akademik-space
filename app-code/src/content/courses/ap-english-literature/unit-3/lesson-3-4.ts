import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "apelit-u3-lesson-3-4",
  code: "3-4",
  title: "Essay Quality and Sophistication",
  goal: "I CAN produce essays demonstrating nuance and analytical depth.",
  standards: ["AP Lit 20.x"],
  vocabulary: [
    { term: "Sophistication", definition: "Nuanced claims, complex syntax, awareness of ambiguity." },
    { term: "Nuanced thesis", definition: "A claim acknowledging complexity while taking a position." },
    { term: "Complex syntax", definition: "Varied sentence structures demonstrating control." },
    { term: "Subtle analysis", definition: "Finding significance in small details." },
    { term: "Awareness of ambiguity", definition: "Acknowledging multiple valid readings." },
    { term: "Rhetorical control", definition: "Precise, purposeful prose." },
  ],
  concepts: [
    {
      id: "apelit-u3-essay-quality",
      title: "Essay quality",
      skill: "Demonstrate sophistication through nuance, complexity, and control.",
      lesson: {
        sections: [
          {
            heading: "What sophistication means",
            body: "The top score band rewards **nuance** (acknowledging complexity), **complexity** (sophisticated syntax and ideas), and **control** (precise, purposeful prose). It's not about fancy words — it's about demonstrating you've wrestled with the text's difficulties and can articulate a position that acknowledges them.",
          },
          {
            heading: "Beyond the obvious",
            body: "Sophisticated essays find significance in details others miss — a single word choice, a structural anomaly, an ambiguity the text refuses to resolve. They also avoid the trap of stating the obvious: 'the character is sad' is observation; 'the character's grief manifests as anger toward the living, revealing how loss distorts relationships' is analysis.",
          },
        ],
        keyFormulas: [
          { name: "Sophistication", statement: "Nuance + complexity + control + subtlety" },
          { name: "Depth test", statement: "Does this say something the text doesn't state outright?" },
        ],
        workedExample: {
          problem: "Improve: 'The author uses a metaphor to show the character is trapped.'",
          solution: "Sophisticated version: 'The extended metaphor of the house-as-prison doesn't merely describe confinement — its recurrence at moments of choice suggests the character has internalized the trap, making escape psychologically rather than physically impossible.' Specific device, deeper claim, acknowledgment of complexity.",
        },
      },
      questions: [
        {
          id: "apelit-u3-essay-quality-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sophistication' in AP Lit essays refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "using big words"
                    },
                    {
                              "id": "b",
                              "text": "nuanced claims, complex ideas, and precise control"
                    },
                    {
                              "id": "c",
                              "text": "writing long essays"
                    },
                    {
                              "id": "d",
                              "text": "quoting more"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sophistication",
                              "statement": "Nuance + complexity + control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sophistication means demonstrating you've wrestled with complexity — nuanced claims, sophisticated ideas, precise prose — not vocabulary display.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Nuance and control",
          "commonErrors": [
                    "Confusing sophistication with vocabulary."
          ]
},
        },
        {
          id: "apelit-u3-essay-quality-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The difference between observation and analysis is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "length"
                    },
                    {
                              "id": "b",
                              "text": "analysis explains significance; observation just notes presence"
                    },
                    {
                              "id": "c",
                              "text": "quoting"
                    },
                    {
                              "id": "d",
                              "text": "vocabulary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Analysis vs observation",
                              "statement": "Significance vs presence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observation notes what IS ('the character is sad'); analysis explains what it MEANS and HOW it works ('her grief manifests as anger, revealing how loss distorts relationships').",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Significance vs presence",
          "commonErrors": [
                    "Thinking longer = more analytical."
          ]
},
        },
        {
          id: "apelit-u3-essay-quality-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'acknowledging ambiguity' demonstrates sophistication rather than weakness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Nuanced argument",
                              "statement": "Complexity as strength."
                    },
                    {
                              "kind": "skill",
                              "name": "Sophisticated claim",
                              "statement": "Both/and thinking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acknowledging ambiguity shows you've wrestled with the text's genuine complexities — it demonstrates interpretive maturity; the strongest theses take positions while acknowledging what complicates them ('while X suggests Y, the text ultimately implies Z, though W remains unresolved').",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It's not weakness but honesty — pretending a complex text has simple meanings reveals shallow reading; acknowledging difficulty reveals depth.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The form: 'although/while/however' constructions that hold contradiction — syntactic sophistication mirroring interpretive sophistication.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Ambiguity acknowledgment = interpretive maturity",
          "commonErrors": [
                    "Confusing nuance with indecision."
          ]
},
        },
        {
          id: "apelit-u3-essay-quality-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Improve this sentence to demonstrate sophistication: 'The author uses imagery.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Precision and depth",
                              "statement": "Specific + significant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weak: vague, just names a category. Strong: 'The recurring images of entrapment — barred windows, locked doors, circling birds — construct the house as a character in its own right, suggesting that the family's confinement is architectural rather than merely circumstantial.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The improvement names WHICH images, WHAT they construct (house as character), and the arguable claim (confinement is architectural/psychological) — moving from observation to interpretation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sophistication test: does the sentence make a claim someone could contest? If yes, it's analytical.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Name specific images, construct meaning, make arguable claim",
          "commonErrors": [
                    "Adding words without adding meaning."
          ]
},
        },
      ],
    },
  ],
};
