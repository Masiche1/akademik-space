import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "el10-u10-lesson-10-2",
  code: "10-2",
  title: "Narrative Voice, Dialogue and Pacing",
  goal: "I CAN use dialogue, distinct character voices and sentence control to pace a narrative.",
  standards: ["4EA1 Paper 2 Section B", "4EA1 AO4", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Dialogue", definition: "Written speech between characters; reveals character and advances plot." },
    { term: "Subtext", definition: "What a character means beneath what they literally say." },
    { term: "Character voice", definition: "The distinct way each character speaks — word choice, rhythm, register." },
    { term: "Pacing", definition: "The speed at which a narrative unfolds, controlled by sentence and paragraph length." },
    { term: "Sentence fragment", definition: "A sentence missing a main verb or subject, used deliberately for impact." },
    { term: "Climax", definition: "The point of highest tension in a narrative." },
  ],
  concepts: [
    {
      id: "el10-u10-dialogue-voice",
      title: "Dialogue and character voice",
      skill: "Write dialogue that reveals character through distinct voices, subtext and accurate speech punctuation.",
      lesson: {
        sections: [
          {
            heading: "Dialogue reveals character",
            body: "Dialogue should never be filler. Every line must reveal character, advance the plot or both. A nervous character speaks in short, hedged sentences; a confident one in longer, declarative ones. **Subtext** — what is meant beneath what is said — is where depth lives: ‘Fine. Whatever you want.’ says far more than its literal meaning.",
          },
          {
            heading: "Distinct voices",
            body: "Give each character a recognisable voice: different sentence lengths, vocabulary level, habits (‘like’, ‘you know’, formal vs slang) and what they avoid saying. Test it: cover the names — could you still tell who is speaking? If every character sounds the same, the dialogue is failing. Voices should also reflect relationships: a teenager and a grandparent do not share a register.",
          },
          {
            heading: "Punctuating speech",
            body: "AO5 accuracy matters in dialogue: inverted commas (or speech marks), commas inside the punctuation, new paragraphs for each speaker, and correct punctuation of the reporting clause. ‘I’m fine,’ she said, not looking up. — the comma lives inside the quote, the reporting clause follows lowercase. Errors here are among the most visible in the exam.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue", statement: "Written speech that reveals character and advances plot; never filler." },
          { name: "Subtext", statement: "What a character means beneath what they literally say." },
          { name: "Character voice", statement: "Each speaker’s distinct diction, rhythm and register." },
          { name: "Speech punctuation", statement: "Quotes, internal commas, new paragraph per speaker, lowercase reporting clause." },
        ],
        workedExample: {
          problem: "Write two lines of dialogue where a character is angry without saying ‘angry’ or any synonym.",
          solution: "‘You had ONE job.’ / ‘Don’t. Just don’t.’ — the capital letter, the clipped second line and the unfinished first sentence all convey rage without naming it; the punctuation does the work.",
        },
      },
      questions: [
        {
          id: "el10-u10-dialvoice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of dialogue in narrative writing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To fill space between action scenes."
                    },
                    {
                              "id": "b",
                              "text": "To reveal character and advance the plot."
                    },
                    {
                              "id": "c",
                              "text": "To show off different accents."
                    },
                    {
                              "id": "d",
                              "text": "To slow the pace of the story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Function of dialogue",
                              "statement": "Dialogue earns its place by revealing character or moving the plot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialogue that does neither is padding; its two legitimate jobs are characterisation and plot.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** To reveal character and advance the plot.",
          "commonErrors": [
                    "Choosing (d): dialogue can speed or slow pace, but that is an effect, not its purpose."
          ]
},
        },
        {
          id: "el10-u10-dialvoice-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two lines of dialogue in which a character is angry without using the word ‘angry’ or any synonym.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Implied emotion in dialogue",
                              "statement": "Anger is shown through clipped phrasing, punctuation and subtext."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The anger is conveyed through word choice, rhythm or punctuation rather than named.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Speech punctuation is accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘You had ONE job.’ / ‘Don’t. Just don’t.’ — caps, fragments and a trailing-off line imply fury.",
          "commonErrors": [
                    "Using ‘furious’ or ‘mad’ — still naming the emotion.",
                    "Flat statements with no emotional signal."
          ]
},
        },
        {
          id: "el10-u10-dialvoice-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short exchange of four to six lines between two characters who disagree about something. Make their voices distinct through word choice and rhythm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Distinct voices",
                              "statement": "Each speaker needs recognisable diction and rhythm."
                    },
                    {
                              "kind": "technique",
                              "name": "Subtext",
                              "statement": "Disagreement lands harder when the real issue sits beneath the surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A clear disagreement or conflict is established.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The two voices are distinguishable by word choice or rhythm.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Subtext adds depth — characters may avoid saying the real issue.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Speech punctuation and paragraphing are accurate throughout.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "A 4-6 line exchange where, e.g., one character speaks in clipped sentences and the other in long defensive ones, disagreeing about something small that stands for something larger.",
          "commonErrors": [
                    "Both characters sounding identical.",
                    "Characters stating their feelings outright, killing subtext."
          ]
},
        },
        {
          id: "el10-u10-dialvoice-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a passage of five to seven sentences that introduces a character through dialogue and action.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Characterisation through dialogue",
                              "statement": "Speech plus action together build a character faster than description."
                    },
                    {
                              "kind": "skill",
                              "name": "Integrated craft",
                              "statement": "Dialogue and narration must work together seamlessly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The dialogue reveals at least one clear trait of the character.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Action or gesture complements and reinforces what is said.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The character’s voice is consistent and convincing.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Subtext or nuance is present — not everything is stated.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Punctuation, spelling and grammar are accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "A 5-7 sentence passage where dialogue and action jointly reveal character — e.g. a character who claims not to care while their hands do the opposite.",
          "commonErrors": [
                    "Dialogue that could belong to anyone — no distinctive voice.",
                    "Action and speech contradicting each other accidentally rather than for effect."
          ]
},
        },
        {
          id: "el10-u10-dialvoice-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short dialogue scene between two characters.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Plan: give each character a distinct voice — describe how each speaks and why.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the first two lines of dialogue.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Write the rest of the exchange.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Voice planning",
                              "statement": "Distinct voices are easier to sustain when planned first."
                    },
                    {
                              "kind": "technique",
                              "name": "Dialogue accuracy",
                              "statement": "Speech punctuation is an AO5 priority."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Each character is given a distinct voice trait.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The trait is justified by the character’s nature or relationship.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The opening lines are in-voice and punctuated accurately.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "The lines establish the relationship or tension.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Subtext or tension develops through the exchange.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Voices remain distinct and consistent.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Speech punctuation is accurate throughout.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, effective use of the required technique with some developed detail; mostly accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Limited or partial attempt; technique present but underdeveloped or inaccurate."
                    }
          ],
          "finalAnswer": "A planned and punctuated dialogue scene with two recognisably different voices and developing tension or subtext.",
          "commonErrors": [
                    "Voices converging to the same register halfway through.",
                    "Speech punctuation errors throughout."
          ]
},
        },
        {
          id: "el10-u10-dialvoice-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write a scene of about 100-120 words built around a conversation between two characters.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Character notes: what does each character want, and how does each speak?",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the dialogue exchange itself.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the complete scene, including narration around the dialogue.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Scene construction",
                              "statement": "Dialogue, narration and subtext must be orchestrated for effect."
                    },
                    {
                              "kind": "skill",
                              "name": "Integrated accuracy",
                              "statement": "Top-band scenes combine craft and AO5 control."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Each character’s want or motive is clear.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each character’s voice is distinct and justified.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The relationship between them is understood.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The exchange has a clear dramatic purpose.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Voices remain distinct throughout.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Speech punctuation is accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Narration frames and complements the dialogue.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Subtext adds depth beneath the surface talk.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Action or gesture reinforces what is said.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Tension or change occurs within the scene.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentence variety and precise vocabulary are controlled.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The scene is coherent and largely error-free.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Effective writing with several well-chosen techniques; mostly controlled and accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited writing; few techniques and frequent errors."
                    }
          ],
          "finalAnswer": "A ~100-120 word scene: clear motives, two distinct voices, accurate speech punctuation, narration that complements rather than competes with dialogue, subtext, and a controlled, error-light finish.",
          "commonErrors": [
                    "Dialogue floating without narration or purpose.",
                    "Identical voices and missing subtext cap the mark."
          ]
},
        },
      ],
    },
    {
      id: "el10-u10-pacing-sentences",
      title: "Pacing and sentence control",
      skill: "Control narrative pace through sentence length, fragments, paragraphing and climax placement.",
      lesson: {
        sections: [
          {
            heading: "Sentence length is pace",
            body: "Short sentences hit fast; long sentences flow slow. In tense moments, writers strip sentences to fragments — ‘Footsteps.’ — and in reflective moments they let clauses accumulate. The reader’s breathing literally follows the sentence rhythm. Analyse your own drafts: does the pace match the emotion of the moment?",
          },
          {
            heading: "Fragments, questions and repetition",
            body: "Deliberate **fragments** (‘No going back now.’) create urgency and voice. **Rhetorical questions** pull the reader inside a character’s panic. **Anaphora** — repeating a sentence opening — builds momentum: ‘It took the washing. It took the lid. It took everything.’ Used sparingly, these devices turn prose into rhythm.",
          },
          {
            heading: "Paragraphing and climax",
            body: "Paragraph breaks are pauses — a one-line paragraph is a held breath before impact. Place the **climax** where the paragraphing is sparsest and the sentences shortest: maximum compression at maximum tension. Then release — longer sentences in the aftermath let the reader breathe. Pace is structure, not just style.",
          },
        ],
        keyFormulas: [
          { name: "Pacing", statement: "Narrative speed controlled by sentence length, fragments and paragraph breaks." },
          { name: "Sentence fragment", statement: "A deliberately incomplete sentence used for impact or voice." },
          { name: "Anaphora", statement: "Repeating the opening of successive sentences to build momentum." },
          { name: "Climax", statement: "The point of highest tension, best served by compressed sentences and sparse paragraphing." },
        ],
        workedExample: {
          problem: "Rewrite this flat sentence to increase pace: ‘She walked slowly down the long dark corridor and could hear something following her.’",
          solution: "She walked down the corridor. Something followed. — splitting the sentence and fragmenting the second half turns a report into a jolt.",
        },
      },
      questions: [
        {
          id: "el10-u10-pacing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What effect do very short sentences have in a tense scene?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They slow the reader down."
                    },
                    {
                              "id": "b",
                              "text": "They create speed, impact and urgency."
                    },
                    {
                              "id": "c",
                              "text": "They confuse the reader."
                    },
                    {
                              "id": "d",
                              "text": "They reduce the tension."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence length and pace",
                              "statement": "Short sentences accelerate pace and heighten impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short sentences strike quickly and give moments weight — the opposite of slowing or confusing.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** They create speed, impact and urgency.",
          "commonErrors": [
                    "Thinking short sentences are ‘lazy’ rather than deliberate."
          ]
},
        },
        {
          id: "el10-u10-pacing-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this sentence as two shorter sentences to increase pace: ‘She walked slowly down the long dark corridor and could hear something following her.’",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence splitting",
                              "statement": "Breaking a long sentence creates beats and urgency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sentence is split into two shorter sentences, ideally ending on a fragment or short punch.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The rewrite is accurate and punctuated correctly.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘She walked down the corridor. Something followed.’ or ‘She walked. Something followed.’",
          "commonErrors": [
                    "Splitting without changing the effect — two equally long sentences.",
                    "Losing the meaning of the original."
          ]
},
        },
        {
          id: "el10-u10-pacing-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a tense moment in three or four sentences using varied sentence lengths.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Varied sentence length",
                              "statement": "Alternating long and short sentences creates rhythm and tension."
                    },
                    {
                              "kind": "skill",
                              "name": "Controlled prose",
                              "statement": "Variety must still be accurate and coherent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sentence lengths genuinely vary — not four identical structures.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The variation builds or releases tension appropriately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "At least one very short sentence or fragment provides impact.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The writing is accurate and coherent.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "A 3-4 sentence tense moment with clear length variation — e.g. a long breathless sentence followed by a two-word detonation.",
          "commonErrors": [
                    "All sentences the same length — no pace control.",
                    "Fragments used randomly rather than for impact."
          ]
},
        },
        {
          id: "el10-u10-pacing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the opening of a chase scene in three or four sentences that gradually increases pace.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Gradual acceleration",
                              "statement": "Pace should build sentence by sentence toward the chase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening starts relatively calm before accelerating.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sentence length visibly decreases as tension rises.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sensory detail conveys motion and urgency.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The final sentence or fragment lands with maximum impact.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Language is accurate throughout.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "An opening that moves from a longer establishing sentence to shorter, faster beats ending on a punch — e.g. distant engine, nearer, then ‘Go.’",
          "commonErrors": [
                    "Starting at full speed — no build means no acceleration.",
                    "No variation in sentence length."
          ]
},
        },
        {
          id: "el10-u10-pacing-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a chase scene of about 80-100 words.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Plan the pace: which moments will be slow, fast and climactic?",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the build-up (the first half).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Write the climax and ending.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pace planning",
                              "statement": "Deliberate variation across the scene prevents monotony."
                    },
                    {
                              "kind": "technique",
                              "name": "Climactic compression",
                              "statement": "The climax earns its impact through compressed sentences and paragraph breaks."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Slow, fast and climactic moments are identified in the plan.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The plan links pace to the scene’s emotional shape.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The build-up uses longer sentences and accumulating detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The half ends on a turn or acceleration.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The climax uses the shortest sentences and sparsest paragraphing.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The ending releases pace — longer sentences or a reflective close.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Language is accurate and coherent throughout.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, effective use of the required technique with some developed detail; mostly accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Limited or partial attempt; technique present but underdeveloped or inaccurate."
                    }
          ],
          "finalAnswer": "A planned ~80-100 word chase: slower build, accelerating middle, compressed climax, released ending — with varied sentence lengths throughout.",
          "commonErrors": [
                    "Uniform pace — no contrast between build and climax.",
                    "Climax written in long sentences, deflating the peak."
          ]
},
        },
        {
          id: "el10-u10-pacing-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write a suspenseful scene of about 120 words.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Plan: your sentence-length pattern, paragraph breaks and climax point.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the opening that establishes unease.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the complete scene.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pace architecture",
                              "statement": "Sentence pattern, paragraphing and climax placement form one design."
                    },
                    {
                              "kind": "technique",
                              "name": "Suspense through form",
                              "statement": "Unease is built as much by structure as by content."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A sentence-length pattern is planned (e.g. long-short-long).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Paragraph breaks are placed for dramatic pauses.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "A clear climax point is identified.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The opening establishes unease through detail or voice.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The opening uses controlled, varied sentences.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "The opening hints at disturbance without revealing it.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pace visibly builds toward the climax.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The climax is compressed and impactful.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Paragraph breaks create effective pauses.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The ending releases or withholds tension deliberately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentence variety and precise vocabulary are sustained.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The scene is coherent and largely error-free.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Effective writing with several well-chosen techniques; mostly controlled and accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited writing; few techniques and frequent errors."
                    }
          ],
          "finalAnswer": "A ~120-word suspenseful scene demonstrating planned sentence-length variation, dramatic paragraph breaks, a compressed climax and a deliberate ending — coherent and mostly accurate.",
          "commonErrors": [
                    "No planned pace — tension arrives randomly.",
                    "Overlong climax sentences that dissipate impact."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u10-l12-notes",
      title: "Dialogue and pacing — notes",
      summary: "Dialogue reveals character through distinct voices and subtext; sentence length and paragraphing control narrative pace.",
      sections: [
        { heading: "Key idea", body: "Every line of dialogue must reveal character or advance plot; cover the names test — if voices are identical, rewrite." },
        { heading: "Exam technique", body: "Match pace to emotion: build with longer sentences, strike with fragments at the climax, then release. Plan the breaks before writing." },
      ],
    },
  ],
};
