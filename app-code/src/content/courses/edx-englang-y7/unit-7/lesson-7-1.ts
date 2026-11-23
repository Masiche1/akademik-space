import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "el7-u7-lesson-7-1",
  code: "7-1",
  title: "Clauses and Sentence Structures",
  goal: "I CAN identify clause types and combine them into simple, compound, complex and compound-complex sentences.",
  standards: ["Edexcel KS3 English Language — Grammar and Punctuation"],
  
  vocabulary: [
    { term: "Clause", definition: "A group of words containing a subject and a verb; can be main or subordinate." },
    { term: "Main clause", definition: "A clause that can stand alone as a complete sentence." },
    { term: "Subordinate clause", definition: "A clause that depends on a main clause and cannot stand alone." },
    { term: "Simple sentence", definition: "One main clause only." },
    { term: "Compound sentence", definition: "Two or more main clauses joined by a conjunction or semicolon." },
    { term: "Complex sentence", definition: "A main clause plus one or more subordinate clauses." },
  ],
  concepts: [
    {
      id: "el7-u7-clauses",
      title: "Clauses and Sentence Types",
      skill: "Identify clause types and choose sentence structures for clarity and effect.",
      lesson: {
        sections: [
          {
            heading: "Main and subordinate clauses",
            body: "Every clause has a **subject** and a **verb**. A **main clause** makes sense alone ('We left early'). A **subordinate clause** needs the main clause to make sense ('because the traffic was bad'). Subordinate clauses often begin with subordinating conjunctions such as *because, although, when, if, since* or with relative pronouns such as *who, which, that*.",
          },
          {
            heading: "The four sentence structures",
            body: "**Simple**: one main clause. **Compound**: two main clauses joined by *and, but, or, so* or a semicolon. **Complex**: a main clause plus a subordinate clause. **Compound-complex**: at least two main clauses and at least one subordinate clause. Varying structures controls pace and emphasis — a complex sentence can make one idea feel dependent on another.",
          },
        ],
        keyFormulas: [
          { name: "Simple", statement: "1 main clause" },
          { name: "Compound", statement: "2+ main clauses joined by a conjunction or semicolon" },
          { name: "Complex", statement: "1 main clause + 1+ subordinate clauses" },
          { name: "Compound-complex", statement: "2+ main clauses + 1+ subordinate clause" },
        ],
        workedExample: {
          problem: "Classify: 'Although the rain stopped, we stayed inside because the pitch was flooded.'",
          solution: "Subordinate 'Although the rain stopped' + main 'we stayed inside' + subordinate 'because the pitch was flooded' = complex sentence with two subordinate clauses.",
        },
      },
      questions: [
        {
          id: "el7-u7-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a complex sentence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The dog barked and the cat ran away."
                    },
                    {
                              "id": "b",
                              "text": "Although it was raining, we went outside."
                    },
                    {
                              "id": "c",
                              "text": "We went outside."
                    },
                    {
                              "id": "d",
                              "text": "We went outside; it was raining."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complex sentence",
                              "statement": "A main clause plus one or more subordinate clauses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only 'Although it was raining, we went outside.' contains a subordinate clause ('Although it was raining') attached to a main clause.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Confusing a compound sentence (two main clauses) with a complex one."
          ]
},
        },
        {
          id: "el7-u7-cl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the sentence 'The cake, which my aunt baked, was delicious', identify the main clause and the subordinate clause.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Main vs subordinate clause",
                              "statement": "A main clause can stand alone; a subordinate clause cannot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main clause is 'The cake was delicious' — it can stand alone as a sentence.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Subordinate clause is 'which my aunt baked' — it depends on the main clause for meaning.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Main: 'The cake was delicious'. Subordinate: 'which my aunt baked'."
},
        },
        {
          id: "el7-u7-cl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Combine these two sentences into one complex sentence using 'although': 'It was late. We kept playing.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Building complex sentences",
                              "statement": "Add a subordinating conjunction to make one clause dependent on the other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Although' makes one idea dependent — e.g. 'Although it was late, we kept playing.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Resulting sentence is grammatical with correct punctuation.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "The meaning of both original sentences is preserved.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'Although it was late, we kept playing.'",
          "commonErrors": [
                    "Producing a comma splice or run-on instead of a subordinate clause."
          ]
},
        },
        {
          id: "el7-u7-cl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each sentence as simple, compound or complex.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'The match ended; we went home.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'Because she had revised, she felt confident.'",
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
                              "name": "Sentence structures",
                              "statement": "Simple = 1 main clause; compound = 2+ main clauses; complex = main + subordinate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two independent clauses joined by a semicolon = compound.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'Because she had revised' is a subordinate clause attached to a main clause = complex.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Compound. (b) Complex."
},
        },
        {
          id: "el7-u7-cl-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "This paragraph is monotonous: 'The storm came. The lights went out. We lit candles. We told stories.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Identify two weaknesses in the sentence structures used.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the paragraph using at least one compound and one complex sentence, keeping the same events.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence variety",
                              "statement": "Mixing simple, compound and complex structures creates rhythm and emphasis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four sentences are simple — no variety.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Short equal-length sentences create a flat, list-like rhythm.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) No subordinating links show how events relate in time or cause.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Rewrite uses a compound sentence correctly (e.g. 'The storm came and the lights went out').",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Rewrite uses a complex sentence correctly (e.g. 'While we told stories, the candles flickered').",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) All original events retained; punctuation and grammar accurate.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Accurate, specific points about structural weaknesses.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial — identifies only one weakness or describes it vaguely.",
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
                              "descriptor": "Correct compound and complex sentences preserving all events.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One new structure used correctly, or minor errors.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'When the storm came, the lights went out, so we lit candles and told stories until dawn.'",
          "commonErrors": [
                    "Labelling sentences wrongly.",
                    "Losing events when rewriting."
          ]
},
        },
        {
          id: "el7-u7-cl-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'When the door opened, nobody moved. Mara stood in the doorway, her coat still dripping, and she did not speak.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Identify the sentence structures in both sentences and explain the effect of the complex structure in the first sentence.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the second sentence as two simple sentences and comment on what is lost.",
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
                              "name": "Structure and effect",
                              "statement": "Subordination controls emphasis and pace; simple sentences can add weight or bluntness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sentence 1 is complex: 'When the door opened' is subordinate to 'nobody moved'.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The time clause delays the main clause, building suspense before the reaction.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Sentence 2 is compound ('Mara stood... and she did not speak') with a parenthetical detail.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The 'and she did not speak' tail extends the silence, adding tension.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Two grammatical simple sentences produced, e.g. 'Mara stood in the doorway. Her coat was still dripping.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Comment identifies loss: the joined clauses and withheld 'she did not speak' created a held-breath effect.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Both structures identified accurately with perceptive comments on effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Structures identified with some comment on effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial identification or vague effect.",
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
                              "descriptor": "Accurate rewrite plus a precise comment on what is lost.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rewrite accurate with a general comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite attempted but comment missing or inaccurate.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) 'Mara stood in the doorway. Her coat was still dripping.' — splitting the clauses removes the slow, withheld delivery that makes the silence tense.",
          "commonErrors": [
                    "Calling a compound sentence complex.",
                    "Describing effect without linking it to structure."
          ]
},
        },
      ],
    },
    {
      id: "el7-u7-punct",
      title: "Commas, Semicolons, Colons and Dashes",
      skill: "Use commas, semicolons, colons and dashes accurately and deliberately.",
      lesson: {
        sections: [
          {
            heading: "Comma rules",
            body: "Commas separate items in a **list** ('pens, pencils and rulers'), set off **parenthetical information** ('My brother, who lives in Leeds, is visiting'), and mark a pause between clauses. Never use a comma to join two main clauses with no conjunction — that is a comma splice.",
          },
          {
            heading: "Semicolons, colons and dashes",
            body: "A **semicolon** joins two closely related main clauses ('The rain stopped; the match resumed'). A **colon** introduces a list or explanation after a complete clause ('She packed three things: a tent, a stove and a map'). A **dash** interrupts or adds emphasis — dramatic or casual depending on context.",
          },
        ],
        keyFormulas: [
          { name: "Comma", statement: "Lists, parenthetical information, clause boundaries — never a comma splice." },
          { name: "Semicolon", statement: "Joins two closely related independent clauses." },
          { name: "Colon", statement: "Introduces a list or explanation after a complete clause." },
          { name: "Dash", statement: "Marks interruption, insertion or emphasis." },
        ],
        workedExample: {
          problem: "Punctuate: 'I like tea I don't like coffee.'",
          solution: "These are two main clauses with no conjunction. Use a semicolon (or add 'but'): 'I like tea; I don't like coffee.' or 'I like tea, but I don't like coffee.'",
        },
      },
      questions: [
        {
          id: "el7-u7-pn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which version punctuates this correctly? 'My brother who lives in Leeds is visiting.'",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "My brother who lives in Leeds is visiting."
                    },
                    {
                              "id": "b",
                              "text": "My brother, who lives in Leeds, is visiting."
                    },
                    {
                              "id": "c",
                              "text": "My brother who, lives in Leeds, is visiting."
                    },
                    {
                              "id": "d",
                              "text": "My brother, who lives in Leeds is visiting."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Parenthetical commas",
                              "statement": "Commas set off extra, non-essential information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Who lives in Leeds' is extra information, so it needs a comma before and after it.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Using only one comma or none at all."
          ]
},
        },
        {
          id: "el7-u7-pn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Add the missing punctuation: 'The shop sells bread milk cheese and eggs.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "List commas",
                              "statement": "Commas separate items in a list."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insert commas between list items: 'bread, milk, cheese and eggs'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Final sentence is grammatical and unambiguous.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'The shop sells bread, milk, cheese and eggs.'"
},
        },
        {
          id: "el7-u7-pn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a semicolon and a colon, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Semicolon vs colon",
                              "statement": "Semicolon joins two related clauses; colon introduces a list or explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Semicolon: joins two closely related independent clauses, e.g. 'The rain stopped; we went out.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Colon: introduces a list or explanation after a complete clause, e.g. 'She packed three things: a tent, a stove and a map.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Both examples are accurate and clearly different in function.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Semicolon joins related clauses; colon introduces a list or explanation.",
          "commonErrors": [
                    "Using a colon to join two sentences."
          ]
},
        },
        {
          id: "el7-u7-pn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Fix the punctuation in each sentence.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'I like tea, I don't like coffee.' (comma splice)",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'She packed three things a tent, a stove and a map.'",
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
                              "name": "Comma splice and colon use",
                              "statement": "Never join two main clauses with only a comma; use a semicolon or conjunction. Use a colon to introduce a list."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Replace the comma with a semicolon or add a conjunction: 'I like tea; I don't like coffee.' / 'I like tea, but I don't like coffee.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Insert a colon after 'things' to introduce the list.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 'I like tea; I don't like coffee.' (b) 'She packed three things: a tent, a stove and a map.'",
          "commonErrors": [
                    "Leaving the comma splice unchanged.",
                    "Using a comma instead of a colon before the list."
          ]
},
        },
        {
          id: "el7-u7-pn-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the same sentence three ways, changing only the punctuation to change the effect: 'She opened the letter.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) One version that builds suspense.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) One version that suggests the letter is unimportant or dismissed.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation for effect",
                              "statement": "Punctuation controls pace, emphasis and tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Suspense version uses ellipsis or a dash, e.g. 'She opened the letter...' or 'She opened the letter — and stopped.'",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The punctuation genuinely delays or withholds, creating tension.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Dismissive version might use brackets or a casual dash, e.g. 'She opened the letter (eventually).' or 'She opened the letter - hardly.'",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The punctuation choice matches the intended tone.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Sentence remains grammatical.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Effective, grammatical punctuation change clearly building suspense.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted change with weak or unclear effect.",
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
                              "descriptor": "Effective punctuation conveying dismissal while staying grammatical.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted but tone unclear or ungrammatical.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (a) 'She opened the letter...' (b) 'She opened the letter — eventually.'",
          "commonErrors": [
                    "Changing words instead of punctuation only.",
                    "Punctuation that does not match the intended tone."
          ]
},
        },
        {
          id: "el7-u7-pn-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'He ran — fast as he could — but the door was already closing. She shouted. Nothing. Then the door shut.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Analyse how the punctuation in the first sentence creates pace and emphasis.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the last two sentences as one sentence using a semicolon or colon, and explain how this changes the mood.",
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
                              "name": "Punctuation and pace",
                              "statement": "Dashes, full stops and fragments control rhythm; joining clauses slows the delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The dashes set off 'fast as he could', physically interrupting the sentence like the runner's effort.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The short main clause 'He ran' followed by the insertion mimics breathless urgency.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The abrupt full stop in 'She shouted.' halts the rhythm like a cut.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Nothing.' as a fragment delivers the failure with brutal economy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Joined version, e.g. 'Then the door shut; it was over.' or 'The result was clear: the door shut.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains that joining removes the staccato blow-by-blow delivery, softening or summarising the defeat.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Detailed, accurate analysis linking punctuation to pace and mood.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Some valid points on effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Vague or mostly descriptive.",
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
                              "descriptor": "Grammatical rewrite with a precise comment on the change of mood.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rewrite correct with a general comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite attempted but comment missing or wrong.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) 'Then the door shut; it was over.' — the semicolon links the events smoothly, losing the punchy finality of the fragments.",
          "commonErrors": [
                    "Describing punctuation without effect.",
                    "Rewriting that changes the events rather than the punctuation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u7-clauses-notes",
      title: "Clauses and sentence structures — notes",
      summary: "Main clauses stand alone; subordinate clauses depend. Simple, compound, complex and compound-complex structures control pace and emphasis.",
      sections: [
        { heading: "Key idea", body: "Identify the verb in each clause first, then ask: can this clause stand alone?" },
        { heading: "Subordinating signals", body: "because, although, when, if, since, while, who, which, that." },
        { heading: "Punctuation at a glance", body: "Comma = list, parenthesis, clause boundary. Semicolon = two related main clauses. Colon = introduces list/explanation. Dash = interruption or emphasis." },
      ],
    },
  ],
};
