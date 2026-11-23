import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apelit-u1-lesson-1-3",
  code: "1-3",
  title: "Analyzing Prose Fiction",
  goal: "I CAN analyze characterization, conflict, and narrative structure in prose.",
  standards: ["AP Lit 3.x"],
  vocabulary: [
    { term: "Characterization", definition: "How a writer reveals character — direct statement, action, speech, or thought." },
    { term: "Conflict", definition: "Struggle — character vs self, others, society, or nature." },
    { term: "Foreshadowing", definition: "Hints of later events." },
    { term: "Flashback", definition: "An interruption of chronological order reaching into the past." },
    { term: "Irony", definition: "Gap between expectation and reality — dramatic, situational, verbal." },
    { term: "Denouement", definition: "The resolution after the climax." },
  ],
  concepts: [
    {
      id: "apelit-u1-prose-analysis",
      title: "Prose analysis",
      skill: "Analyze characterization, conflict, and structure in fiction.",
      lesson: {
        sections: [
          {
            heading: "Characterization methods",
            body: "Writers reveal character through **direct** description ('she was stubborn'), **action** (what they do under pressure), **speech** (word choice reveals values), and **thought** (interiority). The richest characters are revealed through action under pressure, not description.",
          },
          {
            heading: "Conflict and structure",
            body: "Conflict drives plot: **character vs. self** is internal, **vs. others** is interpersonal, **vs. society/nature** is external. Structure matters — chronological order, flashbacks, and foreshadowing all shape how readers experience time and meaning.",
          },
        ],
        keyFormulas: [
          { name: "Characterization", statement: "Method (action/speech/thought) → what it reveals" },
          { name: "Conflict types", statement: "Self / others / society / nature" },
        ],
        workedExample: {
          problem: "A character 'smiled politely while counting exits.' What does this action reveal?",
          solution: "The contrast between polite smile and exit-counting reveals guardedness, anxiety, or planning to flee — action contradicting surface politeness exposes inner state more powerfully than description.",
        },
      },
      questions: [
        {
          id: "apelit-u1-prose-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Character revealed through what they do is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "direct characterization"
                    },
                    {
                              "id": "b",
                              "text": "indirect characterization"
                    },
                    {
                              "id": "c",
                              "text": "exposition"
                    },
                    {
                              "id": "d",
                              "text": "foreshadowing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Indirect characterization",
                              "statement": "Character shown through action, speech, thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Action-based revelation is indirect — the reader infers rather than being told.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Indirect characterization",
          "commonErrors": [
                    "Confusing direct and indirect."
          ]
},
        },
        {
          id: "apelit-u1-prose-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story told backward from its ending to its beginning uses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flashback"
                    },
                    {
                              "id": "b",
                              "text": "in medias res reversed — reverse chronology"
                    },
                    {
                              "id": "c",
                              "text": "foreshadowing"
                    },
                    {
                              "id": "d",
                              "text": "frame narrative"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Reverse chronology",
                              "statement": "Events presented in backward order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Presenting events backward is reverse chronology — a structural choice that makes readers re-interpret earlier scenes with knowledge of the ending.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Reverse chronology",
          "commonErrors": [
                    "Calling every non-linear structure a flashback."
          ]
},
        },
        {
          id: "apelit-u1-prose-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analyze how this action characterizes: 'He apologized to the wall before hanging up the phone.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Action as characterization",
                              "statement": "Behavior reveals inner state."
                    },
                    {
                              "kind": "skill",
                              "name": "Inference analysis",
                              "statement": "Read beneath surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Apologizing to a wall reveals shame, guilt, or fear of judgment — the apology is directed at an absent judge, showing he anticipates blame.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The specificity (a wall, not a person) makes the shame more acute — he cannot even face another human.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The wall-apology reveals shame and anticipated blame",
          "commonErrors": [
                    "Describing the action literally without inferring character."
          ]
},
        },
        {
          id: "apelit-u1-prose-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how conflict 'character vs. society' differs from 'character vs. self' in what each reveals about a character.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Conflict types",
                              "statement": "External vs internal struggle."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "What each conflict exposes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vs. society exposes the character's values against an external system — rebellion, conformity, or compromise reveal worldview; vs. self exposes internal division — guilt, desire, moral choice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "External conflict reveals how the character acts in the world; internal conflict reveals who they are inside — the most revealing fiction often pits both against each other.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong answers give a concrete example of each.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Society conflict reveals values in action; self conflict reveals inner division",
          "commonErrors": [
                    "Listing conflict types without analyzing what each reveals."
          ]
},
        },
      ],
    },
  ],
};
