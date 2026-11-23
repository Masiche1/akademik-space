import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "el7-u4-lesson-4-2",
  code: "4-2",
  title: "Punctuation and Grammar Accuracy",
  goal: "I CAN punctuate sentences accurately and correct common errors in agreement, pronouns and tense.",
  standards: ["Edexcel KS3 English Language — Grammar and punctuation", "Key Stage 3 writing: accuracy"],
  
  vocabulary: [
    { term: "Semicolon", definition: "Punctuation joining two closely related main clauses." },
    { term: "Colon", definition: "Punctuation introducing a list, explanation or quotation." },
    { term: "Apostrophe", definition: "Mark showing possession (the dog's bone) or contraction (don't)." },
    { term: "Subject-verb agreement", definition: "The verb must match the subject in number (singular/plural)." },
    { term: "Tense consistency", definition: "Keeping the same time frame throughout a piece of writing." },
    { term: "Comma splice", definition: "Joining two main clauses with only a comma — an error." },
  ],
  concepts: [
    {
      id: "el7-u4-punctuation",
      title: "Punctuation accuracy",
      skill: "Use commas, semicolons, colons, dashes and apostrophes correctly.",
      lesson: {
        sections: [
          {
            heading: "Commas, semicolons and colons",
            body: "**Commas** separate items in a list, mark pauses, and set off extra information. **Never join two main clauses with only a comma** (a comma splice) — use a full stop, semicolon or conjunction.\n\nA **semicolon** joins two closely related main clauses that could each be a sentence: 'The rain stopped; we went outside.' A **colon** introduces a list or explanation after a complete clause: 'She bought three things: bread, milk and eggs.'",
          },
          {
            heading: "Dashes, apostrophes and brackets",
            body: "**Dashes** (— or spaced hyphens) add emphasis or interrupt: 'The answer — surprisingly — was yes.' Don't overuse them.\n\n**Apostrophes** show possession ('the girl's bag', 'the girls' bags' for plural) or contraction ('it's' = it is, 'don't'). Trap: 'its' (belonging to it) has NO apostrophe; 'it's' always means 'it is'.",
          },
        ],
        keyFormulas: [
          { name: "Semicolon use", statement: "Joins two related main clauses." },
          { name: "Colon use", statement: "Introduces a list or explanation." },
          { name: "Apostrophe test", statement: "It's = it is; its = belonging to it." },
        ],
        workedExample: {
          problem: "Punctuate: 'the teams played well however they lost the match'",
          solution: "'The teams played well; however, they lost the match.' Semicolon joins two related main clauses; comma after the introductory 'however'.",
        },
      },
      questions: [
        {
          id: "el7-u4-ps-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is punctuated correctly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Its raining, so the match is off."
                    },
                    {
                              "id": "b",
                              "text": "It's raining so the match is off."
                    },
                    {
                              "id": "c",
                              "text": "Its raining; so the match is off."
                    },
                    {
                              "id": "d",
                              "text": "It's raining; so, the match is off."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Apostrophe and comma rules",
                              "statement": "It's = it is; no comma splice between main clauses without conjunction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'It's' (it is) is correct; 'its' is the possessive. 'so' is a coordinating conjunction — no semicolon needed.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** It's raining so the match is off.",
          "commonErrors": [
                    "Using 'its' for 'it is'."
          ]
},
        },
        {
          id: "el7-u4-ps-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "When should you use a semicolon instead of a full stop?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Semicolon",
                              "statement": "Joins two closely related main clauses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Semicolon joins two main clauses that could each stand alone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The clauses should be closely related in meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A full stop is used when the clauses are less closely linked.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A semicolon joins two closely related main clauses that could each be separate sentences.",
          "commonErrors": [
                    "Using a semicolon before a list (use a colon)."
          ]
},
        },
        {
          id: "el7-u4-ps-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Punctuate: 'she bought apples oranges and bread' and 'my brother who lives in Spain is visiting next week' — explain your comma choices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Comma functions",
                              "statement": "Lists and non-defining clauses need commas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "List punctuated: 'apples, oranges and bread'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Commas around 'who lives in Spain' (non-defining relative clause).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Explanation: commas separate list items.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explanation: commas mark removable extra information.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'She bought apples, oranges and bread.' / 'My brother, who lives in Spain, is visiting next week.'",
          "commonErrors": [
                    "Missing comma before 'and' is acceptable at KS3 — main error is missing list commas or missing clause commas."
          ]
},
        },
        {
          id: "el7-u4-ps-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Correct the punctuation errors: (a) 'The dog ran fast however it couldn't catch the ball.' (b) 'The ingredients are: flour sugar eggs and butter.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Semicolon and colon",
                              "statement": "Semicolon joins clauses; colon introduces a list after a complete clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two main clauses joined by 'however' need a semicolon or full stop: 'The dog ran fast; however, it couldn't catch the ball.'",
                              "marks": 3,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "(b) Colon correctly placed before the list — no error, or check 'The ingredients are' is a complete clause making the colon valid.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Comma after introductory 'however' included.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'The dog ran fast; however, it couldn't catch the ball.' / 'The ingredients are: flour, sugar, eggs and butter.' (add commas in list)",
          "commonErrors": [
                    "Comma splice: 'The dog ran fast, however, ...'."
          ]
},
        },
        {
          id: "el7-u4-ps-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Punctuation editing: correct the sentence 'the childrens toys was in the garden and its raining' — there are four errors to find.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct the apostrophe/possession errors.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Correct the verb agreement error.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Punctuate the corrected sentence.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading",
                              "statement": "Spot apostrophes, agreement and clause punctuation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'childrens' → 'children's' (possession) and 'its' → 'it's' (it is).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'was' → 'were' to agree with plural 'toys'... actually subject is 'toys were in the garden' or re-read: 'the children's toys were in the garden'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Two main clauses joined need punctuation: 'The children's toys were in the garden, and it's raining' or split with full stop.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Both apostrophe errors corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One apostrophe error corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Neither corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'were' correctly agreed.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Verb left incorrect.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Sentence correctly punctuated with conjunction or split.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Still a comma splice or run-on.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "'The children's toys were in the garden, and it's raining.'",
          "commonErrors": [
                    "'childrens'' without apostrophe.",
                    "'its' for 'it's'."
          ]
},
        },
        {
          id: "el7-u4-ps-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Punctuation mastery on the paragraph: 'my friend sam who lives next door has a dog called rex rex is very friendly however he barks at strangers its a shame really'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Insert commas for the non-defining relative clause.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Punctuate 'however he barks' correctly.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Correct 'its' and add a capital letter for 'rex' where needed.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Write the fully punctuated paragraph.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Integrated punctuation",
                              "statement": "Commas, semicolons/colons, apostrophes, capitals, full stops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Commas around 'who lives next door' (non-defining).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Semicolon or full stop before 'however' plus comma after: '; however,' or '. However,'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "'its a shame' → 'it's a shame'; 'rex' capitalised as a proper noun each time.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "c"
                    },
                    {
                              "reasoning": "Full paragraph: 'My friend Sam, who lives next door, has a dog called Rex. Rex is very friendly; however, he barks at strangers. It's a shame, really.'",
                              "marks": 4,
                              "markCode": "AO5",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Both commas correctly placed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Commas missing or misplaced.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Correct semicolon/full stop and comma after however.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Comma splice or missing punctuation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'it's' corrected and 'Rex' capitalised throughout.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors remain.",
                              "part": "c"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Fully accurate punctuation, capitals and sentence boundaries.",
                              "part": "d"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Mostly accurate with one or two minor slips.",
                              "part": "d"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Several errors remain.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Punctuation largely incorrect.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "'My friend Sam, who lives next door, has a dog called Rex. Rex is very friendly; however, he barks at strangers. It's a shame, really.'",
          "commonErrors": [
                    "Comma splice before 'however'.",
                    "'its' instead of 'it's'.",
                    "Lowercase proper noun 'rex'."
          ]
},
        },
      ],
    },
    {
      id: "el7-u4-agreement",
      title: "Agreement, pronouns and tense",
      skill: "Keep verbs, pronouns and tenses consistent and correct common grammar errors.",
      lesson: {
        sections: [
          {
            heading: "Subject-verb agreement",
            body: "The verb must agree with its subject in number:\n\n- Singular subject + singular verb: 'The dog barks.'\n- Plural subject + plural verb: 'The dogs bark.'\n- Tricky cases: 'Each of the boys was late' (each = singular); 'The team are arguing' (British English often allows plural for collective nouns); words like 'everyone', 'nobody', 'somebody' are singular: 'Everyone is here.'\n\nWatch out for phrases between subject and verb: 'The box of chocolates was empty' — the subject is 'box' (singular), not 'chocolates'.",
          },
          {
            heading: "Pronouns and tense consistency",
            body: "**Pronouns** must match their antecedent in number and person: 'Each student must bring his or her book' or better, 'Students must bring their books' (avoid gendered singular 'his' where possible).\n\n**Tense consistency**: keep the same time frame unless you deliberately shift it. 'Yesterday I walk to school and I see a fox' should be 'Yesterday I walked to school and I saw a fox.' Deliberate shifts are fine for effect: 'I am walking down the lane when suddenly I saw...'",
          },
        ],
        keyFormulas: [
          { name: "Agreement", statement: "Singular subject → singular verb; plural → plural." },
          { name: "Indefinite pronouns", statement: "Everyone, nobody, somebody, each → singular verb." },
          { name: "Tense consistency", statement: "One time frame per passage unless deliberately shifted." },
        ],
        workedExample: {
          problem: "Correct: 'Each of the players were given a medal.'",
          solution: "'Each of the players was given a medal.' The real subject is 'each' (singular); 'of the players' is just a phrase.",
        },
      },
      questions: [
        {
          id: "el7-u4-ag-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence has correct subject-verb agreement?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The dogs barks at strangers."
                    },
                    {
                              "id": "b",
                              "text": "The dog bark at strangers."
                    },
                    {
                              "id": "c",
                              "text": "The dogs bark at strangers."
                    },
                    {
                              "id": "d",
                              "text": "The dog and the cat barks."
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subject-verb agreement",
                              "statement": "Plural subject 'dogs' needs plural verb 'bark'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Dogs' is plural → 'bark'; 'dog and cat' (compound subject) also needs 'bark'.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** The dogs bark at strangers.",
          "commonErrors": [
                    "Agreeing with the nearest noun instead of the subject."
          ]
},
        },
        {
          id: "el7-u4-ag-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Is 'everyone' singular or plural? Give the correct verb: 'Everyone ___ invited.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Indefinite pronouns",
                              "statement": "Everyone, nobody, somebody are singular."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Everyone' is an indefinite pronoun treated as singular.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Correct verb: 'is' → 'Everyone is invited.'",
                              "marks": 2,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Singular — 'Everyone is invited.'",
          "commonErrors": [
                    "Using 'are' because 'everyone' feels plural."
          ]
},
        },
        {
          id: "el7-u4-ag-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct the errors: 'Each of the girls were happy. They're bags was on the floor.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Agreement correction",
                              "statement": "Singular 'each' → 'was'; 'bags' plural → 'were'; 'They're' = they are, so bags 'were'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Each' is singular → 'was'.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'They're bags' should be 'Their bags' (possessive, not 'they are').",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'Bags was' → 'bags were' (plural).",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'Each of the girls was happy. Their bags were on the floor.'",
          "commonErrors": [
                    "Missing the they're/their confusion."
          ]
},
        },
        {
          id: "el7-u4-ag-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Fix the tense inconsistency: 'Yesterday I walk to school and I see a fox. It is the best day ever.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tense consistency",
                              "statement": "Keep past tense for past-time narration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Yesterday' signals past tense throughout.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'walk' → 'walked', 'see' → 'saw', 'is' → 'was'.",
                              "marks": 3,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'the best day ever' keeps superlative — no change needed there.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'Yesterday I walked to school and I saw a fox. It was the best day ever.'",
          "commonErrors": [
                    "Changing only the first verb.",
                    "Overcorrecting 'ever' or 'best'."
          ]
},
        },
        {
          id: "el7-u4-ag-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Choose the correct pronoun and verb: 'Neither of the answers ___ correct, but both of them ___ worth considering.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct form of 'to be' for 'neither'.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Correct form of 'to be' for 'both'.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why 'neither' and 'both' take different verbs.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pronoun number",
                              "statement": "Neither = singular; both = plural."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Neither' is singular → 'is'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Both' is plural → 'are'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Neither refers to one of two (singular); both refers to two (plural).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'is' correctly chosen.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "'are' or other error.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'are' correctly chosen.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "'is' or other error.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Accurate number explanation for both.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No or inaccurate explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "'Neither of the answers is correct, but both of them are worth considering.'",
          "commonErrors": [
                    "Treating 'neither' as plural because it implies two."
          ]
},
        },
        {
          id: "el7-u4-ag-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Proofreading challenge: 'The team was celebrating they're victory when the referee blew they're whistle. Each of the players were confused.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct the pronoun errors.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Correct the agreement error.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the they're/their/there rule.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Rewrite the corrected sentences.",
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
                              "name": "Proofreading mastery",
                              "statement": "Homophone pronouns, agreement, sentence rewriting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'they're victory' → 'their victory'; 'they're whistle' → 'their whistle'.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Each ... were' → 'was' (each = singular).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "They're = they are; their = belonging to them; there = place.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "Corrected text produced accurately.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both 'their' corrections made.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One correction made.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Neither corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "'was' correctly agreed.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "'were' retained.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "All three homophones distinguished accurately.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Inaccurate or missing.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Fully corrected, fluent rewrite.",
                              "part": "d"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite with residual errors.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable rewrite.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "'The team was celebrating their victory when the referee blew their whistle. Each of the players was confused.'",
          "commonErrors": [
                    "Confusing they're/their/there.",
                    "Plural verb after 'each'."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u4-accuracy-notes",
      title: "Punctuation and grammar accuracy — notes",
      summary: "Semicolons join related clauses; colons introduce lists. Check agreement, pronouns and tense when proofreading.",
      sections: [
        { heading: "Punctuation quick guide", body: "Comma: lists, pauses, extra info. Semicolon: two related main clauses. Colon: list/explanation. Apostrophe: possession or contraction." },
        { heading: "Tricky apostrophes", body: "it's = it is; its = possession. they're = they are; their = possession; there = place." },
        { heading: "Agreement traps", body: "Each, everyone, neither = singular. Watch phrases between subject and verb: 'The box of chocolates was...'" },
        { heading: "Tense consistency", body: "One time frame per passage; deliberate shifts only for effect." },
      ],
    },
  ],
};
