import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "el11-u6-lesson-6-1",
  code: "6-1",
  title: "Punctuation for Clarity and Effect",
  goal: "I CAN use punctuation accurately for clarity and deploy it deliberately for effect in my own writing.",
  standards: ["4EA1 AO4", "4EA1 AO5", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Clause", definition: "A group of words containing a subject and verb; may be main or subordinate." },
    { term: "Comma splice", definition: "Joining two independent clauses with only a comma — a punctuation error." },
    { term: "Semicolon", definition: "A punctuation mark joining two closely related independent clauses or separating items in a complex list." },
    { term: "Dash", definition: "A mark used for interruption, emphasis or an aside — more dramatic than brackets." },
    { term: "Apostrophe", definition: "Marks possession ('the girl's bag') or contraction ('don't')." },
    { term: "Ellipsis", definition: "Three dots (...) indicating omission, hesitation or trailing off." },
  ],
  concepts: [
    {
      id: "el11-u6-punctuation-clarity",
      title: "Punctuation for clarity",
      skill: "Use commas, semicolons, dashes and colons accurately to make sentences clear and well-structured.",
      lesson: {
        sections: [
          {
            heading: "The main tools",
            body: "**Commas** separate clauses, items in lists and parenthetical asides. **Semicolons** join two closely related independent clauses or separate complex list items containing commas. **Colons** introduce explanations, lists or quotations. **Dashes** set off dramatic asides or interruptions. Each has a precise job — using the wrong one creates confusion.",
          },
          {
            heading: "Avoiding the comma splice",
            body: "A **comma splice** joins two complete sentences with only a comma: 'I like coffee, she likes tea.' This is an error. Fix it with a full stop, a semicolon, a conjunction ('and', 'but') or a colon if the second part explains the first. The semicolon is the most elegant solution when the clauses are closely related.",
          },
          {
            heading: "Choosing for effect",
            body: "Beyond correctness, punctuation creates rhythm. Short sentences with full stops feel abrupt and punchy. Semicolons create a measured, balanced pace. Dashes create drama and suddenness. Colons build anticipation. In creative writing, punctuation is a tool for controlling the reader's breathing and attention.",
          },
        ],
        keyFormulas: [
          { name: "Comma splice fix", statement: "Independent clause + comma + independent clause = error; use full stop, semicolon, conjunction or colon." },
          { name: "Semicolon use", statement: "Joins related independent clauses or separates complex list items." },
          { name: "Colon use", statement: "Introduces an explanation, list or quotation." },
        ],
        workedExample: {
          problem: "Fix the comma splice: 'The meeting ran late, we missed the bus.'",
          solution: "Three correct options: (1) Full stop: 'The meeting ran late. We missed the bus.' (2) Semicolon: 'The meeting ran late; we missed the bus.' (3) Conjunction: 'The meeting ran late, so we missed the bus.' The semicolon is best if you want to show the clauses are closely connected consequences.",
        },
      },
      questions: [
        {
          id: "el11-u6-punctuation-clarity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'comma splice'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using too many commas"
                    },
                    {
                              "id": "b",
                              "text": "Joining two complete sentences with only a comma"
                    },
                    {
                              "id": "c",
                              "text": "A comma in the wrong place"
                    },
                    {
                              "id": "d",
                              "text": "A missing comma"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comma splice",
                              "statement": "Two independent clauses joined by comma alone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comma splice = comma joining two complete sentences — a punctuation error.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** Joining two complete sentences with only a comma.",
          "commonErrors": [
                    "Thinking any comma misuse is a splice (a, c)."
          ]
},
        },
        {
          id: "el11-u6-punctuation-clarity-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the punctuation error in: 'She finished her work, then she went home.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Punctuation correction",
                              "statement": "Recognising comma splices and fixing them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies comma splice: two independent clauses joined by comma alone.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Suggests fix: semicolon, conjunction ('and then') or full stop.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Comma splice — needs semicolon, conjunction or full stop between the clauses.",
          "commonErrors": [
                    "Saying there's no error."
          ]
},
        },
        {
          id: "el11-u6-punctuation-clarity-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when to use a semicolon rather than a comma or full stop, giving an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Semicolon",
                              "statement": "Joins closely related independent clauses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains semicolon joins two independent clauses that are closely related in meaning.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Distinguishes from comma (too weak, creates splice) and full stop (too strong, separates too much).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Valid example: 'The rain stopped; the sun came out.'",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Semicolons join related independent clauses; stronger than comma, weaker than full stop. E.g. 'The rain stopped; the sun came out.'",
          "commonErrors": [
                    "Using semicolon before a dependent clause."
          ]
},
        },
        {
          id: "el11-u6-punctuation-clarity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite this sentence using a colon and a semicolon to improve its structure: 'She bought three things apples oranges and bread.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Colon and semicolon use",
                              "statement": "Structuring lists and clauses precisely."
                    },
                    {
                              "kind": "skill",
                              "name": "Punctuation craft",
                              "statement": "Choosing marks for clarity and rhythm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses colon to introduce the list: 'She bought three things: ...'",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Uses commas or semicolons appropriately within list — commas for simple items, semicolons if items contain commas.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Correct version, e.g. 'She bought three things: apples, oranges and bread.'",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains choice: colon signals the list is coming; commas separate simple items.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'She bought three things: apples, oranges and bread.' — colon introduces the list, commas separate items.",
          "commonErrors": [
                    "Using semicolon between simple list items unnecessarily.",
                    "Missing colon before list."
          ]
},
        },
        {
          id: "el11-u6-punctuation-clarity-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Punctuate this sentence correctly: 'the meeting which was supposed to end at three oclock ran until five'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the punctuation choices you made.",
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
                              "name": "Punctuation application",
                              "statement": "Applying rules accurately."
                    },
                    {
                              "kind": "technique",
                              "name": "Clause punctuation",
                              "statement": "Commas for subordinate clauses and apostrophe for 'o'clock'."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct version, e.g. 'The meeting, which was supposed to end at three o'clock, ran until five.'",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Commas set off the non-defining relative clause 'which was supposed to end at three o'clock'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Apostrophe in 'o'clock' marks omission of 'of the clock'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Capital letter and full stop complete the sentence.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Sentence punctuated correctly, including the subordinate clause."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Punctuation partially correct or ambiguous."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains the punctuation choices accurately, linking them to clarity."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Names punctuation without explaining its function."
                    }
          ],
"finalAnswer": "'The meeting, which was supposed to end at three o'clock, ran until five.' — commas for the clause, apostrophe for contraction.",
          "commonErrors": [
                    "Missing commas around the relative clause.",
                    "Missing apostrophe in 'o'clock'."
          ]
},
        },
        {
          id: "el11-u6-punctuation-clarity-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words explaining how punctuation controls meaning and effect in writing. Cover at least three punctuation marks and explain how each can change the reader's response.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation effect",
                              "statement": "Marks control rhythm, emphasis and meaning."
                    },
                    {
                              "kind": "skill",
                              "name": "Explanatory writing",
                              "statement": "Clear account with examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers at least three marks (comma, semicolon, dash, colon, full stop).",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Each mark's effect on rhythm/meaning explained.",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Examples given for at least two marks.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Punctuation controls clarity and effect: commas for pauses, semicolons for balance, dashes for drama, colons for anticipation, full stops for impact.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Three marks explained with examples and effect."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Two marks explained, some examples."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague or one mark only."
                    }
          ],
          "commonErrors": [
                    "Listing marks without explaining effect."
          ]
},
        },
      ],
    },
    {
      id: "el11-u6-punctuation-effect",
      title: "Punctuation for effect in creative writing",
      skill: "Use apostrophes, quotation marks, ellipses and expressive punctuation deliberately to create effects in writing.",
      lesson: {
        sections: [
          {
            heading: "Apostrophes and quotation marks",
            body: "**Apostrophes** show possession ('the dog's bone') or contraction ('it's', 'don't'). Common error: 'its' (possessive) vs 'it's' (it is). **Quotation marks** enclose speech or quoted text; single quotes inside double quotes for nested quotes. In creative writing, punctuation around dialogue controls pace and clarity.",
          },
          {
            heading: "Ellipsis, dash and exclamation",
            body: "**Ellipsis** (...) shows trailing off, hesitation, or omitted text — 'I thought... maybe...'. **Dash** creates interruption or sudden emphasis — 'The door opened — and there it was.' **Exclamation mark** conveys strong emotion or emphasis — use sparingly for impact; overuse weakens effect. **Question mark** in dialogue signals genuine or rhetorical questioning.",
          },
          {
            heading: "Punctuation as voice",
            body: "In creative writing, punctuation is part of voice. A character who uses ellipses constantly sounds hesitant; one who uses exclamation marks sounds excitable; one who uses semicolons sounds formal. Punctuation choices characterise speakers as much as their words do.",
          },
        ],
        keyFormulas: [
          { name: "its vs it's", statement: "'Its' = possessive; 'it's' = it is/it has." },
          { name: "Ellipsis effect", statement: "Trailing dots create hesitation, uncertainty or trailing off." },
          { name: "Dash effect", statement: "Dash creates interruption, emphasis or sudden reveal." },
        ],
        workedExample: {
          problem: "Rewrite for effect: 'She was happy. She was also scared.' using punctuation to create a more dramatic version.",
          solution: "'She was happy — and then, without warning, scared.' The dash creates sudden interruption; the comma and 'without warning' build suspense; removing the second 'she was' tightens the rhythm. Punctuation and structure combine to create tension that the original flat sentences lack.",
        },
      },
      questions: [
        {
          id: "el11-u6-punctuation-effect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct: 'its' or 'it's' for 'The dog wagged ___ tail.'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's"
                    },
                    {
                              "id": "b",
                              "text": "its"
                    },
                    {
                              "id": "c",
                              "text": "its'"
                    },
                    {
                              "id": "d",
                              "text": "it is"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "its vs it's",
                              "statement": "'Its' is possessive; 'it's' = it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Possessive needs 'its' (no apostrophe); 'it's' would mean 'it is wagged tail' — wrong.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** its.",
          "commonErrors": [
                    "Adding apostrophe to possessive pronoun (a)."
          ]
},
        },
        {
          id: "el11-u6-punctuation-effect-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What effect does an ellipsis (...) create in writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ellipsis",
                              "statement": "Indicates trailing off, hesitation or omission."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines ellipsis as three dots showing trailing off or pause.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Effect: creates hesitation, uncertainty, or suggests unspoken thoughts.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Ellipsis creates trailing off, hesitation or unspoken implication — e.g. 'I thought... maybe...'.",
          "commonErrors": [
                    "Thinking it only shows omitted text in quotations."
          ]
},
        },
        {
          id: "el11-u6-punctuation-effect-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "A dramatic moment",
          "author": "Written for Akademik Space",
          "source": "Creative writing model",
          "text": "She reached for the letter. Her hands wouldn't stop shaking. The seal was already broken — someone had been here before her."
},
          stem: "Analyse how the dash in 'broken — someone' affects the reader's experience of this moment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dash effect",
                              "statement": "Creates sudden interruption or revelation."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect analysis",
                              "statement": "Explaining punctuation's impact on reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The dash replaces a full stop or comma, creating a sudden break in rhythm.",
                              "evidence": "broken — someone had been here",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "It mimics the character's shock — the realisation hits as suddenly as the dash appears.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: accelerates the reveal, making 'someone had been here' feel like a jolt rather than a separate sentence.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The dash creates a sudden break that mirrors the character's shock, accelerating the reveal of the broken seal and making the discovery feel immediate.",
          "commonErrors": [
                    "Identifying the dash without explaining its rhythmic/emotional effect."
          ]
},
        },
        {
          id: "el11-u6-punctuation-effect-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite this flat sentence for dramatic effect using punctuation: 'He was angry. He opened the door.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation for drama",
                              "statement": "Dash, ellipsis, short sentences create tension."
                    },
                    {
                              "kind": "skill",
                              "name": "Creative rewriting",
                              "statement": "Using punctuation to control pace and mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dramatic rewrite, e.g. 'He was angry — then he opened the door.' or 'Angry. He opened the door.'",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains dash creates sudden connection/transition between emotion and action.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Or explains fragment 'Angry.' creates abrupt emphasis.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Links punctuation choice to tension/momentum.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "E.g. 'He was angry — then he opened the door.' The dash links emotion to action with sudden force; or fragment 'Angry.' for punch.",
          "commonErrors": [
                    "Adding punctuation without explaining effect."
          ]
},
        },
        {
          id: "el11-u6-punctuation-effect-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct the apostrophe error: 'The dog wagged it's tail.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the error occurs and how to avoid it.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Apostrophe rules",
                              "statement": "Possessive pronouns never take apostrophes."
                    },
                    {
                              "kind": "skill",
                              "name": "Error prevention",
                              "statement": "Understanding the its/it's confusion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct: 'The dog wagged its tail.' (remove apostrophe)",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Error occurs because 'its' looks like it needs an apostrophe like other possessives ('dog's').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "But 'its' is a possessive pronoun like 'his'/'hers' — no apostrophe.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'It's' always means 'it is' or 'it has' — test by expanding.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Proofreading tip: read aloud and expand contractions mentally.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Correctly changes 'it's' to 'its'."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Error not corrected."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Explains the its/it's distinction accurately and gives a reliable avoidance strategy."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Identifies the error but explanation or strategy is weak."
                    }
          ],
"finalAnswer": "(a) 'its' — no apostrophe for possessive. (b) 'Its' is a possessive pronoun like 'his'; 'it's' = 'it is'. Test by expanding.",
          "commonErrors": [
                    "Still using apostrophe in possessive."
          ]
},
        },
        {
          id: "el11-u6-punctuation-effect-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on how punctuation creates voice and character in creative writing. Use at least two examples of punctuation choices and explain their effect on characterisation or mood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation as voice",
                              "statement": "Marks characterise speakers and create mood."
                    },
                    {
                              "kind": "skill",
                              "name": "Analytical writing",
                              "statement": "Examples + effects + organisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two or more punctuation choices identified with examples.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Each choice's effect on character/mood explained.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Connects to voice/characterisation.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Punctuation is part of voice: ellipses suggest hesitation, dashes suggest drama, exclamation marks suggest excitement — shaping character and mood.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two choices well explained with character/mood effects."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Choices present, partial effects."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague or one example."
                    }
          ],
          "commonErrors": [
                    "Listing marks without character/mood effect."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u6-punctuation-notes",
      title: "Punctuation — notes",
      summary: "Commas for clarity, semicolons for balance, dashes for drama, ellipses for hesitation. its vs it's is the most common error.",
      sections: [
        { heading: "Clarity marks", body: "Comma (pause), semicolon (related clauses), colon (introduces), dash (interruption)." },
        { heading: "Effect marks", body: "Ellipsis = hesitation; dash = sudden; exclamation = strong emotion (use sparingly)." },
        { heading: "Common error", body: "its (possessive) vs it's (it is) — test by expanding." },
      ],
    },
  ],
};
