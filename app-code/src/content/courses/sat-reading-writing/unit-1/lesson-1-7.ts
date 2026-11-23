import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "satrw-u1-lesson-1-7",
  code: "1-7",
  title: "Author's Purpose and Tone",
  goal: "I CAN analyze why an author writes and how tone reveals attitude.",
  standards: ["SAT RW 5.x"],
  vocabulary: [
    { term: "Author's purpose", definition: "Why the text exists — inform, persuade, entertain, explain." },
    { term: "Tone", definition: "Attitude toward subject — formal, casual, ironic, urgent." },
    { term: "Point of view", definition: "First/second/third person perspective." },
    { term: "Bias", definition: "Slant toward a position." },
    { term: "Rhetorical choices", definition: "Devices revealing purpose." },
    { term: "Audience awareness", definition: "How text is shaped for readers." },
  ],
  concepts: [
    {
      id: "satrw-u1-author-purpose",
      title: "Author's purpose and tone",
      skill: "Analyze authorial intent and tonal attitude.",
      lesson: {
        sections: [
          {
            heading: "Purpose detection",
            body: "Ask: what is the author TRYING to do? Inform (neutral facts), persuade (argument + evidence), explain (clarify complexity), or entertain (engage/emotion). Purpose shapes everything — persuasive texts use rhetoric and evidence; informative texts prioritize clarity; explanatory texts anticipate confusion.",
          },
          {
            heading: "Tone analysis",
            body: "Tone is the author's ATTITUDE — detect through word choice, sentence structure, and what they emphasize. 'The policy FAILED spectacularly' (critical), 'the policy had challenges' (measured), 'the policy achieved notable results' (positive) — same facts, different tones. SAT questions ask 'the tone is best described as...' — look for emotional coloring in word choice.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "Inform / persuade / explain / entertain" },
          { name: "Tone", statement: "Word choice + emphasis → attitude toward subject" },
        ],
        workedExample: {
          problem: "Compare: 'The experiment yielded results' vs 'The experiment was a triumph' vs 'The experiment failed miserably.' Same event, three tones.",
          solution: "Neutral (informative), celebratory (positive/persuasive), critical (negative/evaluative) — word choice carries the attitude; 'yielded', 'triumph', 'failed miserably' signal different purposes and tones for the same content.",
        },
      },
      questions: [
        {
          id: "satrw-u1-author-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An author's purpose is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the topic"
                    },
                    {
                              "id": "b",
                              "text": "what they're trying to accomplish"
                    },
                    {
                              "id": "c",
                              "text": "their biography"
                    },
                    {
                              "id": "d",
                              "text": "the genre"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Purpose",
                              "statement": "Intent behind text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose = what the author wants to DO — inform, persuade, explain — not just what the text is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Intent",
          "commonErrors": [
                    "Confusing purpose with topic."
          ]
},
        },
        {
          id: "satrw-u1-author-purpose-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The policy failed miserably' signals a tone of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "neutral"
                    },
                    {
                              "id": "b",
                              "text": "critical/negative"
                    },
                    {
                              "id": "c",
                              "text": "hopeful"
                    },
                    {
                              "id": "d",
                              "text": "uncertain"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Tone through word choice",
                              "statement": "'Failed miserably' = judgment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Failed miserably' is strongly negative — evaluative language signals critical tone toward the subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Critical/negative",
          "commonErrors": [
                    "Missing the evaluative language."
          ]
},
        },
        {
          id: "satrw-u1-author-purpose-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how word choice reveals tone, using 'challenging' vs 'disastrous' for the same event.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Connotation",
                              "statement": "Words carry attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Challenging' is measured — acknowledges difficulty without judgment; 'disastrous' is catastrophizing — assigns blame and magnitude; the word choice IS the tone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Same event, different words = different attitudes — connotation carries emotional/evaluative weight beyond denotation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT tone questions test connotation — 'challenging' vs 'nightmarish' vs 'instructive' all describe difficulty but with different attitudes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Word choice carries attitude — connotation = tone",
          "commonErrors": [
                    "Thinking tone is separate from word choice."
          ]
},
        },
        {
          id: "satrw-u1-author-purpose-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A passage argues FOR a policy but uses only positive examples and ignores counterarguments. What does this reveal about purpose and possible bias?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Purpose-bias analysis",
                              "statement": "One-sided evidence signals persuasion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The one-sided evidence reveals PERSUASIVE purpose — the author is arguing, not neutrally informing; ignoring counterarguments suggests either bias or rhetorical strategy (pre-empting objections by omission).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Possible bias: the author may genuinely believe the policy is good and selected supporting evidence; or they may be advocating for a stakeholder — either way, the text is persuasion, not neutral exposition.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Recognizing persuasive intent helps evaluate claims — a persuasive text's evidence should be weighed against its purpose.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "One-sided evidence = persuasive purpose, possible bias",
          "commonErrors": [
                    "Treating persuasive text as neutral information."
          ]
},
        },
      ],
    },
  ],
};
