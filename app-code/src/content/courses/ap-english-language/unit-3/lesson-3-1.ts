import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apel-u3-lesson-3-1",
  code: "3-1",
  title: "Developing Voice and Style",
  goal: "I CAN use rhetorical questions, irony, and stylistic variation effectively.",
  standards: ["AP Lang 6.x"],
  vocabulary: [
    { term: "Voice", definition: "The distinctive personality of the writer conveyed through style choices." },
    { term: "Rhetorical question", definition: "Question asked for effect, not answer — engages reader." },
    { term: "Irony", definition: "Saying one thing to mean another — creates distance and critique." },
    { term: "Understatement", definition: "Deliberately saying less than reality — dry humor or irony." },
    { term: "Stylistic variation", definition: "Mixing sentence lengths and structures for rhythm and emphasis." },
    { term: "Emphasis techniques", definition: "Repetition, antithesis, tricolon, climax — devices that heighten impact." },
  ],
  concepts: [
    {
      id: "apel-u3-voice-style",
      title: "Voice and style",
      skill: "Use stylistic devices purposefully to create effect.",
      lesson: {
        sections: [
          {
            heading: "Voice through choices",
            body: "Voice emerges from consistent choices: sentence length patterns, vocabulary level, humor, formality, perspective. Analysis of voice asks HOW the writer's personality comes through — not just naming it 'witty' or 'formal'.",
          },
          {
            heading: "Powerful stylistic moves",
            body: "**Rhetorical questions** pull readers into the argument. **Irony** creates productive distance — saying 'What a relief' about disaster. **Understatement** ('a minor setback' after catastrophe) can be devastating. **Tricolon** (three-part structure) and **climax** (arranging items in increasing importance) build momentum.",
          },
        ],
        keyFormulas: [
          { name: "Voice", statement: "Consistent pattern of stylistic choices" },
          { name: "Effect devices", statement: "Question → engagement; irony → critique; understatement → dry emphasis" },
        ],
        workedExample: {
          problem: "Revise flat: 'The policy failed badly.' Add voice.",
          solution: "Options: understatement — 'The policy encountered difficulties.' Irony — 'The policy worked exactly as planned.' Rhetorical — 'Who could have predicted such a triumph?' Each creates different voice and effect.",
        },
      },
      questions: [
        {
          id: "apel-u3-voice-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understatement involves ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "exaggerating for effect"
                    },
                    {
                              "id": "b",
                              "text": "deliberately minimizing for ironic effect"
                    },
                    {
                              "id": "c",
                              "text": "direct literal statement"
                    },
                    {
                              "id": "d",
                              "text": "formal vocabulary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Understatement",
                              "statement": "Saying less than is true — often ironic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calling a disaster 'a bit inconvenient' minimizes deliberately for effect.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing understatement with hyperbole."
          ]
},
        },
        {
          id: "apel-u3-voice-style-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rhetorical question differs from a regular question because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "expects no answer — it's for effect"
                    },
                    {
                              "id": "b",
                              "text": "is always sarcastic"
                    },
                    {
                              "id": "c",
                              "text": "uses different grammar"
                    },
                    {
                              "id": "d",
                              "text": "must be answered"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rhetorical question",
                              "statement": "Asked for effect, not information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhetorical questions engage the reader's imagination rather than seeking an answer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a)",
          "commonErrors": [
                    "Thinking rhetorical questions are just questions with question marks."
          ]
},
        },
        {
          id: "apel-u3-voice-style-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a writer creates 'voice' through stylistic choices, giving two specific examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Voice",
                              "statement": "Personality through consistent choices."
                    },
                    {
                              "kind": "skill",
                              "name": "Example-driven analysis",
                              "statement": "Show, don't just define."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Voice = the recognizable personality emerging from patterns: e.g., short punchy sentences create urgency; elevated vocabulary creates formality; first-person anecdotes create intimacy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Two distinct examples show HOW choices produce effect — e.g., 'The clipped syntax (\"We tried. We failed. We tried again.\") conveys grim determination.'",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Voice emerges from consistent stylistic patterns creating recognizable personality",
          "commonErrors": [
                    "Defining voice without showing how choices create it."
          ]
},
        },
        {
          id: "apel-u3-voice-style-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Analyze this sentence's voice: 'Oh, splendid. Another meeting about meetings.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Irony",
                              "statement": "Saying 'splendid' means the opposite."
                    },
                    {
                              "kind": "skill",
                              "name": "Voice analysis",
                              "statement": "Diction + punctuation + context reveal attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Splendid' is ironic — clearly meaning the opposite of splendid; the exclamation and period create sarcasm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The repetition of 'meeting' with the dismissive tone conveys weary cynicism — voice of someone fatigued by bureaucracy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Punctuation (period after exclamation-style opener) sharpens the deadpan effect.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Ironic 'splendid' + deadpan punctuation = cynical, weary voice",
          "commonErrors": [
                    "Reading 'splendid' literally or missing the irony."
          ]
},
        },
      ],
    },
  ],
};
