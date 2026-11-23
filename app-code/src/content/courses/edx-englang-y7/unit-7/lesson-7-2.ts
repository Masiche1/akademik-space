import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "el7-u7-lesson-7-2",
  code: "7-2",
  title: "Punctuation for Precision and Effect",
  goal: "I CAN use apostrophes, quotation marks and brackets correctly and choose punctuation to shape tone and pace.",
  standards: ["Edexcel KS3 English Language — Grammar and Punctuation"],
  
  vocabulary: [
    { term: "Apostrophe of possession", definition: "Shows ownership: 'the girl's book', 'the girls' books'." },
    { term: "Apostrophe of omission", definition: "Replaces missing letters: 'don't', 'it's' = it is." },
    { term: "Direct speech", definition: "The exact words a speaker says, enclosed in quotation marks." },
    { term: "Parenthesis", definition: "Information in brackets or dashes that interrupts the main flow." },
    { term: "Fragment", definition: "An incomplete sentence used deliberately for effect." },
    { term: "Ellipsis", definition: "Three dots showing a pause, trailing off or unfinished thought." },
  ],
  concepts: [
    {
      id: "el7-u7-apostrophe",
      title: "Apostrophes, Quotation Marks and Brackets",
      skill: "Apply apostrophes, quotation marks and brackets accurately in writing.",
      lesson: {
        sections: [
          {
            heading: "Apostrophes done right",
            body: "Apostrophes show **possession** ('the dog's bowl'; plural owners: 'the dogs' bowls') or **omission** ('don't' = do not, 'it's' = it is). The possessive 'its' has NO apostrophe — 'The dog wagged its tail.' Watch plurals: 'girls'' vs 'girl's'.",
          },
          {
            heading: "Quotation marks and brackets",
            body: "**Direct speech** needs quotation marks and correct punctuation: 'She said, \"We leave at six.\"' Punctuation usually goes inside the closing quote in British English. **Brackets** (or dashes) hold extra information that interrupts: 'The film (released in 1999) was a hit.' Brackets lower the importance of what they contain; dashes give it more emphasis.",
          },
        ],
        keyFormulas: [
          { name: "Apostrophe uses", statement: "Possession or omission — never for plurals." },
          { name: "its vs it's", statement: "its = belonging to it; it's = it is." },
          { name: "Direct speech", statement: "Quotation marks around exact words; punctuation inside the closing quote." },
        ],
        workedExample: {
          problem: "Correct this: 'The childrens toys are in theyre room, its over their.'",
          solution: "'The children's toys are in their room; it's over there.' — apostrophe for possession (children's), 'their' for ownership, 'it's' = it is, 'there' for place.",
        },
      },
      questions: [
        {
          id: "el7-u7-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the apostrophe correctly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The dog wagged it's tail."
                    },
                    {
                              "id": "b",
                              "text": "The dog wagged its tail."
                    },
                    {
                              "id": "c",
                              "text": "The dog's wagged it's tail."
                    },
                    {
                              "id": "d",
                              "text": "Its' tail wagged the dog."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "its vs it's",
                              "statement": "Possessive 'its' has no apostrophe; 'it's' means 'it is'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The tail belongs to the dog, so the possessive 'its' is correct with no apostrophe.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Adding an apostrophe to a possessive pronoun."
          ]
},
        },
        {
          id: "el7-u7-ap-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct the errors: 'The childrens toys are in theyre room.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Apostrophe of possession",
                              "statement": "Possession uses an apostrophe; 'their' shows ownership with no apostrophe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'childrens' needs an apostrophe: 'children's' (plural noun ending in s still takes 's after the apostrophe for irregular plurals).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'theyre' should be 'their' — the possessive determiner with no apostrophe.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'The children's toys are in their room.'"
},
        },
        {
          id: "el7-u7-ap-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the three uses of the apostrophe and give one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Apostrophe uses",
                              "statement": "Possession, omission and (in contractions) joining words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Possession: 'the girl's book' or 'the girls' books'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Omission of letters: 'don't', 'can't', 'it's' (= it is).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "All examples are accurate and distinct in function.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Possession, omission/contraction — never for ordinary plurals.",
          "commonErrors": [
                    "Using an apostrophe for a plural ('apple's for sale')."
          ]
},
        },
        {
          id: "el7-u7-ap-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Fix the punctuation in each piece of direct speech.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'She said we leave at six.' (needs quotation marks)",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'Did you see it' she asked. (needs correct punctuation)",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Direct speech punctuation",
                              "statement": "Quotation marks around exact words; punctuation inside the closing quote; separate the reporting clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Add quotation marks and a comma: 'She said, \"We leave at six.\"'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Question mark inside quotes, comma before the reporting clause, capital after: '\"Did you see it?\" she asked.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 'She said, \"We leave at six.\"' (b) '\"Did you see it?\" she asked.'",
          "commonErrors": [
                    "Punctuation outside the quotation marks.",
                    "Missing comma before the reporting clause."
          ]
},
        },
        {
          id: "el7-u7-ap-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this informal speech as direct speech with correct punctuation: Tom told me that he would meet me at the library at four.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Convert it into a direct quotation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Explain why brackets might be used instead of commas in the sentence 'The film (released in 1999) was a hit.'",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Direct speech and brackets",
                              "statement": "Direct speech uses quotation marks and reporting clauses; brackets mark interrupting, lower-priority information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Direct version: 'Tom said, \"I will meet you at the library at four.\"'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reporting clause correctly punctuated; tense appropriately shifted.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Brackets signal that 'released in 1999' is extra information the reader can skip.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Brackets are less intrusive than commas and clearly set the detail apart.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Commas could also work, but brackets emphasise the interrupting, optional nature of the detail.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Correct quotation marks, punctuation and tense.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Quotation attempted with punctuation errors.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clear, accurate explanation of the bracket function.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (a) 'Tom said, \"I will meet you at the library at four.\"'",
          "commonErrors": [
                    "Keeping reported speech unchanged.",
                    "Saying brackets are only for stage directions."
          ]
},
        },
        {
          id: "el7-u7-ap-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'The old house — nobody had lived there for years — stood at the end of the lane. \"Don't go in,\" warned Priya. (Her voice shook slightly.) Priya knew something they didn't.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Analyse how the dashes and brackets in the extract shape the reader's response.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the final sentence using direct speech and explain how this changes the tension.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation and tone",
                              "statement": "Dashes dramatise interruptions; brackets quietly flag doubt; direct speech puts warning into a voice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The dashes around 'nobody had lived there for years' make the detail feel like a whispered aside — secretive and ominous.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The bracketed '(Her voice shook slightly.)' undercuts the warning with visible fear, adding unease.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Brackets mark the detail as incidental yet telling — the reader notices what the characters might miss.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Overall punctuation builds a hushed, uncertain atmosphere before the warning lands.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Direct version, e.g. 'Priya said, \"We can't go in — I know something you don't.\"'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains direct speech makes the warning immediate and personal, raising tension versus the reported version.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Insightful, accurate analysis of both punctuation devices and their combined effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Valid points on both devices.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One device discussed or effects vague.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Correct direct speech plus a precise comment on changed tension.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Correct speech with a general comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted rewrite, weak comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) 'Priya said, \"We can't go in — I know something you don't.\"' — direct speech makes the warning urgent and voiced.",
          "commonErrors": [
                    "Ignoring the brackets.",
                    "Rewrite that keeps reported speech."
          ]
},
        },
      ],
    },
    {
      id: "el7-u7-variety",
      title: "Sentence Variety and Punctuation for Effect",
      skill: "Choose punctuation deliberately to control pace, rhythm and tone.",
      lesson: {
        sections: [
          {
            heading: "Punctuation as rhythm",
            body: "Short sentences and full stops create **staccato** urgency ('She ran. She jumped. She landed.'). Longer sentences with commas and conjunctions slow the pace and build flow. A **fragment** ('Nothing.') hits harder than a complete sentence because it denies the reader resolution.",
          },
          {
            heading: "Punctuation as tone",
            body: "**Ellipsis** (...) trails off — uncertainty, hesitation, threat. **Dashes** interrupt — drama, afterthought, emphasis. **Colons** announce — authority, revelation. **Exclamation marks** spike emotion but lose power if overused. Match punctuation to the feeling you want: breathless, calm, ominous or comic.",
          },
        ],
        keyFormulas: [
          { name: "Staccato", statement: "Short sentences and full stops = urgency and impact." },
          { name: "Ellipsis", statement: "Trailing dots = hesitation, uncertainty or menace." },
          { name: "Dash", statement: "Interruption or dramatic emphasis." },
          { name: "Fragment", statement: "Incomplete sentence used deliberately for punch." },
        ],
        workedExample: {
          problem: "Make 'The exam was hard' feel anxious using punctuation only.",
          solution: "'The exam... was hard.' or 'The exam was hard — so hard.' Ellipsis adds dread; the dash adds emphasis.",
        },
      },
      questions: [
        {
          id: "el7-u7-vy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which version creates the most suspense using punctuation only?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "He opened the door."
                    },
                    {
                              "id": "b",
                              "text": "He opened the door..."
                    },
                    {
                              "id": "c",
                              "text": "He opened the door!"
                    },
                    {
                              "id": "d",
                              "text": "He opened the door, quietly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ellipsis for suspense",
                              "statement": "Trailing dots withhold completion, creating tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The ellipsis leaves the sentence unfinished, so the reader waits for what he saw — maximum suspense.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Choosing the exclamation mark, which signals excitement not suspense."
          ]
},
        },
        {
          id: "el7-u7-vy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how a semicolon changes the pace of 'She ran; she won' compared with 'She ran. She won.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Semicolon and pace",
                              "statement": "A semicolon links clauses into one flowing unit; a full stop cuts the rhythm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The semicolon joins the two clauses into a single flowing sentence, suggesting cause-and-effect continuity.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The full stop creates two separate beats, making 'She won' land as a punchline.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Semicolon = flowing link; full stop = separate emphatic beats."
},
        },
        {
          id: "el7-u7-vy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite 'The room was empty' as three short sentences to convey panic, and explain your punctuation choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Short sentences for panic",
                              "statement": "Fragments and full stops mimic rapid, panicked thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Produces three short sentences or fragments, e.g. 'Empty. No one there. Nothing.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Full stops (not commas) create hard stops matching panic's clipped rhythm.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Effect clearly linked to punctuation choice.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'Empty. No one there. Nothing.' — clipped beats convey panic.",
          "commonErrors": [
                    "Using commas, which would make it one run-on sentence."
          ]
},
        },
        {
          id: "el7-u7-vy-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the effect of each punctuation choice in the extract: 'The door creaked open — slowly. ...Nobody. Nobody at all.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) The em dash and 'slowly.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) The ellipsis and 'Nobody.' fragment.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation effects",
                              "statement": "Dashes delay, ellipses hesitate, fragments shock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The dash interrupts before 'slowly', stretching the moment; the full stop after one adverb freezes it.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The ellipsis trails into dread; 'Nobody.' as a fragment lands with stark finality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Dash+stop = agonising delay; ellipsis+fragment = creeping dread and shock.",
          "commonErrors": [
                    "Naming devices without explaining effect."
          ]
},
        },
        {
          id: "el7-u7-vy-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Take the flat sentence 'He was angry' and rewrite it three times using only punctuation (you may repeat or minimally adjust words) to show anger, fear and relief.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Anger version.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) Fear version.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "(c) Relief version, plus one sentence explaining the punctuation logic.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation for emotion",
                              "statement": "Exclamation spikes anger; ellipsis/dashes tremble with fear; a long exhale or full stop releases relief."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Anger uses exclamation/abrupt stops: 'He was angry!' or 'He was angry. Furious.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Fear uses ellipsis/dashes: 'He was... angry?' or 'He was angry — afraid.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Relief uses a settling full stop or ellipsis release: 'He was angry... then he wasn't.'",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Explains how punctuation maps to each emotion.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Accurate version earning full credit for this part.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Partial or no credit.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Accurate version earning full credit for this part.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Partial or no credit.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Accurate version plus explanation for this part.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Partial or no credit.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. Anger: 'He was angry!' Fear: 'He was... angry?' Relief: 'He was angry... then he wasn't.'",
          "commonErrors": [
                    "Changing the words rather than the punctuation.",
                    "Same punctuation for all three emotions."
          ]
},
        },
        {
          id: "el7-u7-vy-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'Rain. Thunder. Lightning. The power cut. Blackness. Then — a candle flame. Small. But enough.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Analyse how sentence length and punctuation create the storm's atmosphere.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the extract as one flowing sentence and explain how the mood changes.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhythm and atmosphere",
                              "statement": "Staccato fragments mimic chaos; a flowing sentence calms it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) One-word sentences ('Rain. Thunder. Lightning.') imitate the storm's rapid, indiscriminate strikes.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Blackness.' as a fragment delivers the sensory loss with shocking finality.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The dash before 'a candle flame' breaks the darkness like a sudden interruption of hope.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Small. But enough.' uses fragments to make the tiny light feel precious.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Flowing rewrite, e.g. 'As the rain fell and thunder crashed, the power cut plunged us into blackness until a small candle flame — but enough — appeared.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains that joining clauses into flow removes the staccato chaos, making the scene calmer or more narrative rather than visceral.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Detailed analysis linking fragments, punctuation and mood.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Some valid points on rhythm and effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Vague or partial.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Grammatical flowing rewrite plus precise mood comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Correct rewrite with general comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite attempted, weak comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) 'As rain fell and thunder crashed, the power cut left us in blackness until a small candle flame — but enough — appeared.'",
          "commonErrors": [
                    "Ignoring fragments.",
                    "Rewrite that keeps the choppy rhythm."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u7-punct-notes",
      title: "Punctuation for effect — notes",
      summary: "Apostrophes show possession or omission; quotation marks frame speech; brackets hold asides. Punctuation controls pace and tone.",
      sections: [
        { heading: "its vs it's", body: "its = belonging to it; it's = it is or it has." },
        { heading: "Rhythm rules", body: "Full stops = hard beats; commas = flow; semicolons = linked clauses; dashes = interruption; ellipses = trailing off." },
        { heading: "Check list", body: "Possessive pronouns never take apostrophes (yours, theirs, its, ours)." },
      ],
    },
  ],
};
