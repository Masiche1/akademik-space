import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "appsych-u1-lesson-1-3",
  code: "1-3",
  title: "Learning and Memory",
  goal: "I CAN explain classical/operant conditioning and memory systems.",
  standards: ["Unit 5"],
  vocabulary: [
    { term: "Classical conditioning", definition: "Learning association between neutral stimulus and unconditioned stimulus (Pavlov's dogs)." },
    { term: "Operant conditioning", definition: "Learning through consequences — reinforcement increases, punishment decreases behavior." },
    { term: "Positive reinforcement", definition: "Adding desirable stimulus to increase behavior." },
    { term: "Negative reinforcement", definition: "Removing aversive stimulus to increase behavior." },
    { term: "Encoding", definition: "Process of getting information into memory (automatic vs. effortful)." },
    { term: "Retrieval", definition: "Process of getting information out of memory (recognition vs. recall)." },
  ],
  concepts: [
    {
      id: "appsych-u1-learning-memory",
      title: "How we learn and remember",
      skill: "Distinguish conditioning types and memory processes.",
      lesson: {
        sections: [
          {
            heading: "Conditioning",
            body: "Classical: neutral stimulus + unconditioned stimulus → conditioned response (Pavlov). Operant: behavior + consequence → reinforcement/punishment (Skinner's box).",
          },
          {
            heading: "Memory",
            body: "Encoding → storage → retrieval; sensory memory (~seconds), short-term (~20 sec, 7±2 items), long-term (unlimited); encoding specificity and retrieval cues affect recall.",
          },
        ],
        keyFormulas: [
          { name: "Classical conditioning", statement: "Neutral stimulus + UCS → CS → CR" },
          { name: "Operant conditioning", statement: "Behavior → consequence → reinforcement (increase) / punishment (decrease)" },
        ],
        workedExample: {
          problem: "How does operant conditioning differ from classical?",
          solution: "Classical: involuntary association between stimuli (Pavlov's bell-salivation). Operant: voluntary behavior shaped by consequences (Skinner's lever-pressing for food). Classical = respondent; operant = operant.",
        },
      },
      questions: [
        {
          id: "appsych-u1-learning-memory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pavlov's dogs demonstrated ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "operant conditioning"
                    },
                    {
                              "id": "b",
                              "text": "classical conditioning"
                    },
                    {
                              "id": "c",
                              "text": "observational learning"
                    },
                    {
                              "id": "d",
                              "text": "latent learning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Pavlov's dogs",
                              "statement": "Classical conditioning paradigm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pavlov's dogs salivated at a bell (conditioned stimulus) after pairing it with food (unconditioned stimulus) — demonstrating classical conditioning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Classical conditioning",
          "commonErrors": [
                    "Confusing with Skinner's operant conditioning."
          ]
},
        },
        {
          id: "appsych-u1-learning-memory-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Negative reinforcement is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "punishment that decreases behavior"
                    },
                    {
                              "id": "b",
                              "text": "removing an aversive stimulus to increase behavior"
                    },
                    {
                              "id": "c",
                              "text": "adding a reward"
                    },
                    {
                              "id": "d",
                              "text": "ignoring behavior"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative reinforcement",
                              "statement": "Remove aversive → increase behavior."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative reinforcement removes an unpleasant stimulus to increase a behavior — e.g., taking aspirin removes headache (increases pill-taking).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's not punishment (which decreases behavior) — 'negative' refers to removing, not bad.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Removing aversive stimulus",
          "commonErrors": [
                    "Confusing with punishment — negative reinforcement INCREASES behavior."
          ]
},
        },
        {
          id: "appsych-u1-learning-memory-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Short-term memory capacity is about 7±2 items. If someone can remember 9 digits, is that within the upper range? Enter 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Within range?",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare",
                              "statement": "Upper limit = $7+2=9$ — 9 is within range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7 + 2 = 9$ items maximum; 9 digits is at the upper bound — within range.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1$ (yes).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Thinking 9 exceeds capacity — it's exactly at limit."
          ]
},
        },
        {
          id: "appsych-u1-learning-memory-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the three stages of memory (encoding, storage, retrieval) and how each can fail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Memory stages",
                              "statement": "Encoding → storage → retrieval."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Encoding: getting info in — fails via shallow processing (rote repetition without meaning); elaborative encoding (connecting to existing knowledge) improves retention.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Storage: maintaining info — sensory (~seconds), short-term (~20 sec), long-term (potentially permanent); decay and interference cause forgetting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Retrieval: getting info out — recognition (multiple choice) is easier than recall (essay); retrieval cues and context-dependent memory affect success.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Memory fails at each stage: shallow encoding, decay/interference, weak cues",
          "commonErrors": [
                    "Treating memory as single stage — it's a process with distinct failure points."
          ]
},
        },
        {
          id: "appsych-u1-learning-memory-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether memory is like a video recorder or a constructive process. What evidence supports reconstruction?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Memory accuracy",
                              "statement": "Recording vs. reconstruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recording view: memory stores exact copies — supported by high accuracy in some contexts (flashbulb memories feel vivid).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Reconstruction evidence: Loftus's misinformation effect — leading questions alter memories; eyewitness testimony is unreliable; false memories can be implanted (lost-in-the-mall study).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Schema theory: memory organizes info into schemas — we remember what 'fits' and distort what doesn't; Bartlett's 'War of the Ghosts' showed cultural reconstruction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verdict: memory is reconstructive — we rebuild experiences using schemas and current knowledge, making memory inherently fallible despite feeling accurate.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Memory is reconstructive, not a perfect recording",
          "commonErrors": [
                    "Accepting memory as infallible — reconstruction errors are well-documented."
          ]
},
        },
      ],
    },
  ],
};
