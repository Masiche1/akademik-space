import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "el8-u7-lesson-7-2",
  code: "7-2",
  title: "Punctuation and Sentence Accuracy",
  goal: "I CAN use commas, apostrophes, colons and semi-colons accurately and edit writing for common errors.",
  standards: ["KS3 English Language", "KS3 Grammar and Punctuation"],
  
  vocabulary: [
    { term: "Full stop", definition: "Ends a statement or command; used for abbreviations." },
    { term: "Comma", definition: "Separates items in a list, clauses and extra information." },
    { term: "Apostrophe", definition: "Shows possession or contraction; never makes a plural." },
    { term: "Colon", definition: "Introduces a list, an explanation or a quotation after a complete sentence." },
    { term: "Semi-colon", definition: "Joins two closely related complete sentences, or separates complex list items." },
    { term: "Bracket", definition: "Holds extra information that interrupts the main sentence." },
    { term: "Speech marks", definition: "Quotation marks showing direct speech." },
    { term: "Homophone", definition: "Words that sound the same but differ in spelling and meaning, such as their and there." },
    { term: "Contraction", definition: "Two words shortened with an apostrophe, such as don't or it's." },
    { term: "Proofreading", definition: "Checking writing carefully for errors before it is finished." },
  ],
  concepts: [
    {
      id: "el8-u7-punctuation-marks",
      title: "Punctuation marks and their jobs",
      skill: "Choose the correct punctuation mark for lists, clauses, possession and direct speech.",
      lesson: {
        sections: [
          {
            heading: "Commas, colons and semi-colons",
            body: "A **comma** separates items in a list ('pens, pencils and rubbers'), sits after an opening clause ('After the bell, we left'), and sets off extra information. A **colon** introduces a list or explanation after a complete sentence: 'We packed three things: a tent, a stove and a map.' A **semi-colon** joins two complete sentences that are closely linked: 'The rain stopped; we went outside.'",
          },
          {
            heading: "Apostrophes",
            body: "Apostrophes do two jobs only. For **contraction**, they replace missing letters: 'do not' becomes 'don't', 'it is' becomes 'it's'. For **possession**, they show ownership: 'the girl's bag', 'the boys' coats' (plural ending in s takes the apostrophe after the s). Apostrophes never make words plural — write 'the 1990s', not 'the 1990's'.",
          },
          {
            heading: "Speech marks",
            body: "**Direct speech** is the exact words someone says, set off with speech marks. The spoken words begin with a capital letter and end with a comma, full stop, question mark or exclamation mark inside the closing mark: 'Come here,' she said. Punctuation for the speaker's tag sits outside unless it is part of the quote.",
          },
        ],
        keyFormulas: [
          { name: "Apostrophe of contraction", statement: "Replaces missing letters: don't, can't, it's (= it is)." },
          { name: "Apostrophe of possession", statement: "Shows ownership: the girl's hat; plural in s: the girls' hats." },
          { name: "Colon", statement: "Introduces a list or explanation after a complete sentence." },
          { name: "Semi-colon", statement: "Joins two complete, closely related sentences." },
        ],
        workedExample: {
          problem: "Punctuate: she said the three winners were tom amara and dev",
          solution: "She said, 'The three winners were Tom, Amara and Dev.' Speech marks enclose the exact words, a comma follows 'said', the spoken words start with a capital, the list uses commas, and the full stop sits inside the closing speech mark.",
        },
      },
      questions: [
        {
          id: "el8-u7-punctuation-marks-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark should end this sentence? 'Where did you put my keys'",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A full stop"
                    },
                    {
                              "id": "b",
                              "text": "A comma"
                    },
                    {
                              "id": "c",
                              "text": "A question mark"
                    },
                    {
                              "id": "d",
                              "text": "An exclamation mark"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "End punctuation",
                              "statement": "Questions end with a question mark."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sentence asks a question, so it needs a question mark.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** A question mark: 'Where did you put my keys?'",
          "commonErrors": [
                    "Using a full stop because the sentence 'sounds finished'."
          ]
},
        },
        {
          id: "el8-u7-punctuation-marks-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Insert apostrophes where needed: (a) 'The girls bikes were left outside.' (b) 'You shouldnt have done that.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Apostrophe use",
                              "statement": "Apostrophes show possession or contraction only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Girls' is plural and shows ownership of the bikes, so the apostrophe goes after the s: 'girls'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Shouldnt' is a contraction of 'should not', so the apostrophe replaces the missing 'o': 'shouldn't'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) The girls' bikes were left outside. (b) You shouldn't have done that.",
          "commonErrors": [
                    "Writing 'girl's' for a plural owner — plural possession is 'girls'.",
                    "Writing 'should'nt' with the apostrophe in the wrong place."
          ]
},
        },
        {
          id: "el8-u7-punctuation-marks-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why each sentence needs a comma, and insert one: (a) 'After the match we went for food.' (b) 'My brother who lives in Leeds is visiting.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Comma use",
                              "statement": "Commas mark openings and set off extra information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'After the match' is an opening clause, so a comma separates it from the main clause: 'After the match, we went for food.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "(b) 'who lives in Leeds' is extra information about the brother; commas set it off: 'My brother, who lives in Leeds, is visiting.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The explanation links each comma to the job it does rather than just inserting marks.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) After the match, we went for food. (b) My brother, who lives in Leeds, is visiting.",
          "commonErrors": [
                    "Putting a comma after 'match' in (a) but not explaining it marks the opening clause.",
                    "Using one comma instead of a pair around the extra information in (b)."
          ]
},
        },
        {
          id: "el8-u7-punctuation-marks-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite this as punctuated direct speech: priya shouted watch out for the car",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Direct speech punctuation",
                              "statement": "Speech marks enclose the exact words; the speaker's tag is separated by a comma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The exact words are 'Watch out for the car' and need speech marks.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Shouted' is the reporting verb, so a comma separates it from the quote: 'Priya shouted, ...'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The spoken words begin with a capital letter because they start the quotation.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The full stop or exclamation mark goes inside the closing speech mark: 'Priya shouted, \"Watch out for the car.\"' (an exclamation mark is also acceptable).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Priya shouted, 'Watch out for the car!' (or a full stop inside the marks.)",
          "commonErrors": [
                    "Placing the full stop outside the closing speech mark.",
                    "Lowercasing 'watch' — quoted speech starts with a capital."
          ]
},
        },
        {
          id: "el8-u7-punctuation-marks-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between a colon and a semi-colon, and write one correct example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Colon",
                              "statement": "Introduces a list or explanation after a complete sentence."
                    },
                    {
                              "kind": "convention",
                              "name": "Semi-colon",
                              "statement": "Joins two complete, closely related sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A colon comes after a complete sentence and introduces what follows — a list or an explanation.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A semi-colon joins two complete sentences that are closely linked in meaning.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Correct colon example, e.g. 'I need three things: a pen, paper and a ruler.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Correct semi-colon example, e.g. 'The bell rang; the classroom emptied.'",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, accurate distinction with well-chosen examples."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Mostly correct distinction with one weak example."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Marks confused or examples incorrect."
                    }
          ],
          "finalAnswer": "A colon introduces a list or explanation after a complete sentence ('We packed: a tent, a stove and a map'); a semi-colon joins two related complete sentences ('The rain stopped; we went out').",
          "commonErrors": [
                    "Using a colon where a semi-colon is needed and vice versa.",
                    "Using a colon after an incomplete sentence."
          ]
},
        },
        {
          id: "el8-u7-punctuation-marks-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about punctuation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Punctuate this sentence correctly, including speech marks: amara asked can i sit here",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the two different jobs of the apostrophe and give one example of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Punctuate the following paragraph fully and explain the job of each mark you add: 'we needed three things for the trip a torch a map and warm coats the shop was closing so we hurried'",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Speech marks",
                              "statement": "Direct speech is enclosed in quotation marks with correct internal punctuation."
                    },
                    {
                              "kind": "convention",
                              "name": "Apostrophe jobs",
                              "statement": "Contraction replaces letters; possession shows ownership."
                    },
                    {
                              "kind": "convention",
                              "name": "List and clause punctuation",
                              "statement": "Commas separate lists; a colon introduces a list; a comma joins clauses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct version: Amara asked, 'Can I sit here?'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Comma after the reporting verb 'asked'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Speech marks around the quote, capital 'Can', question mark inside the closing mark.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Contraction: the apostrophe replaces missing letters, e.g. 'don't' for 'do not'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Possession: the apostrophe shows ownership, e.g. 'the girl's coat' or 'the girls' coats'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The two jobs are clearly distinguished with accurate examples.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct punctuation: 'We needed three things for the trip: a torch, a map and warm coats. The shop was closing, so we hurried.'",
                              "marks": 3,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Colon introduces the list after a complete sentence; commas separate list items; comma before 'so' joins the two clauses; full stops end each sentence.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Explanation of marks is accurate and covers at least three different marks.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Fully accurate punctuation with a clear explanation of each mark's job."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Mostly accurate punctuation with partial explanation."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Several punctuation errors or no explanation."
                    }
          ],
          "finalAnswer": "(a) Amara asked, 'Can I sit here?' (b) Contraction replaces letters ('don't'); possession shows ownership ('the girl's coat'). (c) 'We needed three things for the trip: a torch, a map and warm coats. The shop was closing, so we hurried.'",
          "commonErrors": [
                    "In (a), putting the question mark outside the speech marks.",
                    "In (c), using a comma instead of a colon before the list, or forgetting the comma before 'so'."
          ]
},
        },
      ],
    },
    {
      id: "el8-u7-editing-accuracy",
      title: "Editing for accuracy",
      skill: "Proofread writing, correct homophones and common errors, and explain a checking strategy.",
      lesson: {
        sections: [
          {
            heading: "Homophones and common errors",
            body: "**Homophones** sound alike but differ in meaning and spelling: their/there/they're, its/it's, your/you're, to/too/two, wear/where. The fix is to test each word: 'their' shows possession, 'there' shows place, 'they're' means 'they are'. 'Its' shows possession; 'it's' means 'it is'.",
          },
          {
            heading: "Proofreading strategy",
            body: "Read your work **aloud** — your ear catches errors your eye skips. Check one thing at a time: first spelling, then punctuation, then grammar. Read backwards sentence by sentence to slow down. Leave a gap between writing and checking if you can, so errors are easier to spot.",
          },
          {
            heading: "Agreement and tense",
            body: "Verbs must agree with their subject: 'The team are' versus 'The team is' depends on whether you treat the group as individuals or one unit — be consistent. Keep tenses consistent unless you are deliberately shifting time.",
          },
        ],
        keyFormulas: [
          { name: "their / there / they're", statement: "Possession / place / they are." },
          { name: "its / it's", statement: "Possession / it is." },
          { name: "your / you're", statement: "Possession / you are." },
          { name: "Proofreading order", statement: "Content, then spelling, then punctuation, then grammar." },
        ],
        workedExample: {
          problem: "Correct this sentence: 'Their going to put theyre coats over their.'",
          solution: "'They're going to put their coats over there.' Check each homophone: 'they're' = they are; 'their' = possession (the coats belong to them); 'there' = place.",
        },
      },
      questions: [
        {
          id: "el8-u7-editing-accuracy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct? '___ going to be late for the train.'",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Your"
                    },
                    {
                              "id": "b",
                              "text": "You're"
                    },
                    {
                              "id": "c",
                              "text": "Yore"
                    },
                    {
                              "id": "d",
                              "text": "Youre"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophones",
                              "statement": "your = possession; you're = you are."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sentence means 'you are going', so the contraction 'you're' is needed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** You're. 'Your' would mean something belonging to you, which makes no sense here.",
          "commonErrors": [
                    "Choosing 'your' because it is more common in writing."
          ]
},
        },
        {
          id: "el8-u7-editing-accuracy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct the two errors in this sentence: 'The boy dont know where he putted his bag.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Editing",
                              "statement": "Correct errors in grammar and verb form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Dont' needs an apostrophe for the contraction of 'do not': 'doesn't' or 'don't' — here 'doesn't' agrees with 'the boy'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Putted' is not a word; the past tense of 'put' is 'put': 'put his bag'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'The boy doesn't know where he put his bag.' (Accept 'don't' if read as plural, but 'doesn't' is the intended singular.)",
          "commonErrors": [
                    "Fixing only one error.",
                    "Writing 'putted' as 'putted' unchanged or 'putted' to 'putted' — the correction is simply 'put'."
          ]
},
        },
        {
          id: "el8-u7-editing-accuracy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the correct word in each sentence and explain your choice: (a) 'The dog wagged ___ tail.' (b) '___ the best team in the league.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "its / it's",
                              "statement": "its = possession; it's = it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The tail belongs to the dog, so the possessive 'its' is correct: 'The dog wagged its tail.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "(b) The sentence means 'it is the best team', so the contraction 'it's' is correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The explanations show the test: expand 'it's' to 'it is' — if it does not fit, use 'its'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) its — possession. (b) it's — it is.",
          "commonErrors": [
                    "Writing 'it's tail' because apostrophes 'look right' for possession — remember it's only ever means 'it is'."
          ]
},
        },
        {
          id: "el8-u7-editing-accuracy-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Proofread and correct this paragraph: 'me and sam went to there house on saturday. they was very happy to see us. we brung are own games and we playd untill it was dark.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading",
                              "statement": "Check spelling, grammar and punctuation systematically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct pronoun order and form: 'Sam and I went to their house on Saturday.' ('me and sam' is informal ordering; 'there' should be 'their' for possession; 'saturday' needs a capital).",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Verb agreement: 'they was' should be 'they were'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Verb forms: 'brung' should be 'brought'; 'playd' should be 'played'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'are own games' should be 'our own games'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'Sam and I went to their house on Saturday. They were very happy to see us. We brought our own games and we played until it was dark.'",
          "commonErrors": [
                    "Leaving 'me and Sam' unchanged — in careful writing the speaker is named last: 'Sam and I'.",
                    "Missing 'are' → 'our' or 'playd' → 'played'."
          ]
},
        },
        {
          id: "el8-u7-editing-accuracy-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain a proofreading strategy you could use before submitting a piece of writing, and give a reason why each step helps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading strategy",
                              "statement": "Systematic checking beats a single quick read."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A valid strategy: read aloud to catch errors the eye skips.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reason: the ear detects awkward grammar and missing words that silent reading overlooks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid strategy: check one error type at a time (spelling, then punctuation, then grammar).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reason: focusing on one category prevents attention from being spread too thin.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid strategy: leave time between writing and checking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reason: fresh eyes see mistakes that familiarity hides.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Two or more strategies, each with a clear reason."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "One or two strategies with partial reasons."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Strategies listed without explanation or inaccurate advice."
                    }
          ],
          "finalAnswer": "Read aloud to catch what the eye misses; check one error type at a time to stay focused; leave a gap before checking so fresh eyes spot mistakes.",
          "commonErrors": [
                    "Saying 'read it again' without explaining what changes or why it helps."
          ]
},
        },
        {
          id: "el8-u7-editing-accuracy-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about editing for accuracy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct this sentence: 'Its to late to go they're now.'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the difference between 'their', 'there' and 'they're' with one example of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Edit this paragraph for errors and list the corrections you made: 'we was going to the park but it rained so we stayed home. me and jo decided to bake a cake instead. it turn out really well and every1 loved it.'",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homophones",
                              "statement": "their = possession; there = place; they're = they are."
                    },
                    {
                              "kind": "skill",
                              "name": "Editing",
                              "statement": "Identify and correct errors systematically."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Corrected: 'It's too late to go; they're leaving now.' or 'It's too late to go, they're leaving now.'",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'Its' → 'It's' (it is); 'to' → 'too' (excessively); 'theyre' → 'they're' (they are).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Their' shows possession: 'their house'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'There' shows place or existence: 'over there' / 'there is a park'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'They're' means 'they are': 'they're coming'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Edited text: 'We were going to the park but it rained so we stayed home. Jo and I decided to bake a cake instead. It turned out really well and everyone loved it.'",
                              "marks": 3,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Corrections listed accurately: 'was' → 'were' (agreement with 'we'), 'me and jo' → 'Jo and I', 'turn' → 'turned', 'every1' → 'everyone'.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "All four error types are identified and the edited version reads fluently.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "All errors corrected with an accurate list of changes."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Most errors corrected with a partial list."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Few corrections made or changes not identified."
                    }
          ],
          "finalAnswer": "(a) 'It's too late to go; they're leaving now.' (b) their = possession, there = place, they're = they are. (c) 'We were going to the park but it rained so we stayed home. Jo and I decided to bake a cake instead. It turned out really well and everyone loved it.'",
          "commonErrors": [
                    "In (a), correcting 'to' but missing 'its' or 'theyre'.",
                    "In (c), changing 'me and jo' to 'Jo and me' — the subject form 'I' is needed."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u7-punctuation-notes",
      title: "Punctuation and accuracy — notes",
      summary: "Commas mark openings and extra information; apostrophes show possession or contraction only; colons introduce, semi-colons join.",
      sections: [
        { heading: "Apostrophes", body: "Two jobs only: contraction (don't) and possession (the girl's). Never for plurals." },
        { heading: "Homophones", body: "Test by expanding: it's = it is, you're = you are, they're = they are." },
        { heading: "Proofreading", body: "Read aloud, check one error type at a time, and leave a gap before reviewing." },
      ],
    },
  ],
};
