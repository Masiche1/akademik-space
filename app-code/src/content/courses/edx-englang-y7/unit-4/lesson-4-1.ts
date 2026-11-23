import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "el7-u4-lesson-4-1",
  code: "4-1",
  title: "Sentence Types and Clauses",
  goal: "I CAN identify and construct simple, compound and complex sentences using clauses correctly.",
  standards: ["Edexcel KS3 English Language — Grammar and punctuation", "Key Stage 3 writing: sentence structure"],
  
  vocabulary: [
    { term: "Clause", definition: "A group of words containing a subject and a verb." },
    { term: "Main clause", definition: "A clause that can stand alone as a complete sentence." },
    { term: "Subordinate clause", definition: "A clause that cannot stand alone; it depends on a main clause." },
    { term: "Simple sentence", definition: "One main clause only." },
    { term: "Compound sentence", definition: "Two or more main clauses joined by a coordinating conjunction or semicolon." },
    { term: "Complex sentence", definition: "A main clause plus one or more subordinate clauses." },
  ],
  concepts: [
    {
      id: "el7-u4-sent-types",
      title: "Sentence types",
      skill: "Distinguish simple, compound and complex sentences and identify clauses.",
      lesson: {
        sections: [
          {
            heading: "What makes a sentence",
            body: "Every sentence is built from **clauses** — groups of words with a subject and a verb. A **main clause** can stand alone ('The dog barked'). A **subordinate clause** cannot ('because the postman arrived') — it needs a main clause to complete its meaning.\n\n**The three sentence types**: a **simple sentence** has one main clause. A **compound sentence** joins two main clauses with a coordinating conjunction (and, but, or, so) or a semicolon. A **complex sentence** combines a main clause with one or more subordinate clauses, usually introduced by a subordinating conjunction (because, although, when, if, while, since).",
          },
          {
            heading: "Why sentence type matters",
            body: "Sentence type controls pace and emphasis. Short simple sentences feel punchy and urgent; compound sentences balance two ideas; complex sentences show cause, contrast and time relationships — they make writing more sophisticated and precise.\n\n**Quick test**: count the main clauses. One main clause plus a subordinate clause = complex. Two or more main clauses = compound (or compound-complex if subordinates are also present).",
          },
        ],
        keyFormulas: [
          { name: "Simple", statement: "One main clause." },
          { name: "Compound", statement: "Two or more main clauses + coordinating conjunction/semicolon." },
          { name: "Complex", statement: "Main clause + subordinate clause(s)." },
          { name: "Clause test", statement: "Subject + verb = clause; can it stand alone? = main clause." },
        ],
        workedExample: {
          problem: "Classify: 'Although it was raining, we decided to walk to school.'",
          solution: "Main clause: 'we decided to walk to school' (can stand alone). Subordinate clause: 'Although it was raining' (introduced by 'although', cannot stand alone). One main + one subordinate = complex sentence.",
        },
      },
      questions: [
        {
          id: "el7-u4-st-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is complex?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The cat slept and the dog barked."
                    },
                    {
                              "id": "b",
                              "text": "When the bell rang, everyone stood up."
                    },
                    {
                              "id": "c",
                              "text": "The bell rang loudly."
                    },
                    {
                              "id": "d",
                              "text": "The bell rang; everyone stood up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complex sentence",
                              "statement": "Main clause + subordinate clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only option B has a main clause plus a subordinate clause ('When the bell rang').",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 'When the bell rang, everyone stood up.'",
          "commonErrors": [
                    "Confusing compound (two main clauses) with complex."
          ]
},
        },
        {
          id: "el7-u4-st-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is the difference between a compound sentence and a complex sentence?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sentence types",
                              "statement": "Compound = main + main; complex = main + subordinate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compound joins two main clauses with a coordinating conjunction or semicolon.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Complex joins a main clause to a subordinate clause via a subordinating conjunction.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The key test is whether each clause can stand alone.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Compound = two main clauses; complex = one main clause plus a subordinate clause that cannot stand alone.",
          "commonErrors": [
                    "Saying complex just means 'longer'."
          ]
},
        },
        {
          id: "el7-u4-st-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify the sentence type and underline each clause's role: 'If you finish your work, you may leave early.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Clause analysis",
                              "statement": "Separate main and subordinate clauses, then classify."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subordinate clause: 'If you finish your work' — introduced by 'If', cannot stand alone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Main clause: 'you may leave early' — can stand alone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "One main + one subordinate = complex sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The subordinate clause states a condition on the main clause.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Complex sentence — subordinate 'If you finish your work' + main 'you may leave early'.",
          "commonErrors": [
                    "Calling the whole thing simple because it has one main clause."
          ]
},
        },
        {
          id: "el7-u4-st-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite the pair 'The game ended. We went home.' in two different ways: (a) as a compound sentence and (b) as a complex sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sentence combining",
                              "statement": "Compound needs coordinating conjunction; complex needs subordinating conjunction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compound version joins the two main clauses, e.g. 'The game ended and we went home.'",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Coordinating conjunction 'and' (or 'so', 'but') used correctly with comma optional at KS3.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Complex version subordinates one clause, e.g. 'When the game ended, we went home.' or 'We went home after the game ended.'",
                              "marks": 2,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. Compound: 'The game ended and we went home.' Complex: 'When the game ended, we went home.'",
          "commonErrors": [
                    "Using 'because' where no causal link exists.",
                    "Joining clauses with just a comma (comma splice)."
          ]
},
        },
        {
          id: "el7-u4-st-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Sentence work: (a) Name the sentence type of each: 'The sun rose.' / 'The sun rose and the birds sang.' / 'Although the sun rose, the birds stayed quiet.' (b) Combine 'She studied hard. She passed the test.' into one complex sentence.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify the three sentences.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Combine into one complex sentence.",
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
                              "name": "Sentence classification and combining",
                              "statement": "Count main clauses; subordinate with a conjunction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'The sun rose.' = simple (one main clause).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Second = compound (two main clauses joined by 'and').",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Third = complex ('Although...' subordinate + main clause).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Complex combination, e.g. 'Because she studied hard, she passed the test.' or 'She passed the test because she studied hard.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Subordinating conjunction correctly chosen and punctuation sensible.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All three sentences classified correctly.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two of three classified correctly.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Grammatical complex sentence with sensible conjunction and punctuation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted combination but clause relationship unclear or punctuation weak.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable combination.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Simple / compound / complex; e.g. 'Because she studied hard, she passed the test.'",
          "commonErrors": [
                    "Mislabeling the compound sentence.",
                    "Comma splice in part b."
          ]
},
        },
        {
          id: "el7-u4-st-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Extended sentence work.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the terms 'main clause' and 'subordinate clause'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Identify the type of each sentence: 'I like pizza.' / 'I like pizza, but my sister prefers pasta.' / 'I like pizza because it is quick to make.' / 'I like pizza, although my sister prefers pasta.'",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Combine these into one sentence of each type: 'The rain stopped. We went outside.'",
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
                              "name": "Sentence grammar mastery",
                              "statement": "Clauses, types, combining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main clause defined as a clause that can stand alone as a sentence.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Subordinate clause defined as dependent, cannot stand alone.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Four sentences classified: simple, compound, complex, complex.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "Compound and complex versions produced, e.g. 'The rain stopped and we went outside.' / 'When the rain stopped, we went outside.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "c"
                    },
                    {
                              "reasoning": "A simple-sentence version also offered or existing sentence accepted (simple already).",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Accurate definitions of both clause types.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One definition accurate or both partially accurate.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Definitions missing or inaccurate.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "All four sentences correctly classified.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Three of four correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two of four correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two correct.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Correct combinations with accurate punctuation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some combinations attempted with errors.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable combinations.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Compound: 'The rain stopped and we went outside.' Complex: 'When the rain stopped, we went outside.'",
          "commonErrors": [
                    "Treating 'although' sentence as compound.",
                    "Comma splices."
          ]
},
        },
      ],
    },
    {
      id: "el7-u4-subordinate",
      title: "Subordinate and relative clauses",
      skill: "Use subordinating conjunctions and relative clauses to add detail and show relationships.",
      lesson: {
        sections: [
          {
            heading: "Subordinating conjunctions",
            body: "Subordinating conjunctions introduce subordinate clauses and show the relationship between ideas:\n\n- **Time**: when, while, after, before, until\n- **Reason**: because, since, as, so that\n- **Contrast**: although, though, whereas, even though\n- **Condition**: if, unless, provided that\n\nA subordinate clause usually goes before the main clause with a comma ('Because it rained, we stayed in') or after it without one ('We stayed in because it rained') — though a comma is acceptable for clarity after a long clause.",
          },
          {
            heading: "Relative clauses",
            body: "A **relative clause** gives extra information about a noun and begins with a **relative pronoun**: who (people), which (things), that (people or things), whose (possession).\n\n- Defining (essential): 'The boy who won the race smiled.' No commas — the clause identifies which boy.\n- Non-defining (extra detail): 'My brother, who lives in Leeds, is visiting.' Commas — the clause adds information but the sentence works without it.\n\nRelative clauses are a powerful way to pack description into one sentence instead of writing several short ones.",
          },
        ],
        keyFormulas: [
          { name: "Subordinating conjunctions", statement: "when, while, because, although, if, unless, since, whereas" },
          { name: "Relative pronouns", statement: "who (person), which (thing), that (either), whose (possession)" },
          { name: "Comma rule", statement: "Non-defining relative clause = commas; defining = no commas." },
        ],
        workedExample: {
          problem: "Add a relative clause: 'The film was boring. We left early.'",
          solution: "Option 1 (relative): 'The film, which was boring, made us leave early.' Option 2 (subordinate): 'Because the film was boring, we left early.' Both turn two sentences into one precise sentence.",
        },
      },
      questions: [
        {
          id: "el7-u4-rel-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word is a subordinating conjunction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "and"
                    },
                    {
                              "id": "b",
                              "text": "but"
                    },
                    {
                              "id": "c",
                              "text": "because"
                    },
                    {
                              "id": "d",
                              "text": "or"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subordinating conjunction",
                              "statement": "Introduces a subordinate clause (because, although, when, if)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Because' introduces a subordinate clause showing reason; the others are coordinating.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** because",
          "commonErrors": [
                    "Confusing coordinating and subordinating conjunctions."
          ]
},
        },
        {
          id: "el7-u4-rel-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is a relative clause and which pronoun would you use for a person?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Relative clause",
                              "statement": "Clause giving extra information about a noun, starting with a relative pronoun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relative clause gives extra information about a noun.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It begins with a relative pronoun: who, which, that, whose.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Who' is used for people.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "A clause giving extra information about a noun; 'who' for a person.",
          "commonErrors": [
                    "Saying relative clause always needs commas."
          ]
},
        },
        {
          id: "el7-u4-rel-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite using a relative clause: 'The girl won the race. The girl is my sister.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Relative clause formation",
                              "statement": "Replace repeated noun with who/which/that."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify the shared noun 'the girl' and the extra information 'is my sister'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Combine: 'The girl who won the race is my sister.' or 'My sister, who won the race, is...'",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Correct relative pronoun 'who' used for a person.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'The girl who won the race is my sister.'",
          "commonErrors": [
                    "Keeping both sentences joined by 'and'.",
                    "Using 'which' for a person."
          ]
},
        },
        {
          id: "el7-u4-rel-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite these as one complex sentence each: (a) 'We were late. The bus had broken down.' (b) 'The museum was closed. We visited the park instead.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Subordination",
                              "statement": "Show reason/time/contrast with a subordinate clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Reason shown, e.g. 'Because the bus had broken down, we were late.'",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "(b) Contrast or consequence shown, e.g. 'When we found the museum closed, we visited the park instead.' or 'As the museum was closed, we visited the park instead.'",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Both use a genuine subordinating conjunction (because, as, when, since) rather than 'and'.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'Because the bus had broken down, we were late.' / 'Since the museum was closed, we visited the park instead.'",
          "commonErrors": [
                    "Using 'and' (still compound, not complex).",
                    "Dangling or illogical conjunction choice."
          ]
},
        },
        {
          id: "el7-u4-rel-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Punctuation of relative clauses: (a) Decide whether commas are needed: 'My teacher who studied in France is brilliant.' (b) Add commas to: 'London which is the capital of England is huge.' (c) Explain why the comma rule differs between defining and non-defining clauses.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Punctuate correctly.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Add commas.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the rule.",
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
                              "name": "Relative clause punctuation",
                              "statement": "Non-defining clause = commas; defining = none."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No commas — 'who studied in France' identifies which teacher (defining).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "Commas added around 'which is the capital of England'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Non-defining clause adds extra information; commas mark it as removable.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Defining clause identifies which noun — removing it changes meaning.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Correct punctuation decision.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Incorrect or missing punctuation.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Both commas correctly placed.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One comma placed.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No commas or wrong placement.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both sides of the defining/non-defining rule explained accurately.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation of one case.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No accurate explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "No commas for defining; commas for non-defining ('London, which is the capital of England, is huge.').",
          "commonErrors": [
                    "Commas in the defining clause.",
                    "Missing one comma in non-defining."
          ]
},
        },
        {
          id: "el7-u4-rel-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Extended clause work on the sentence pair: 'The storm destroyed the village. The storm had been forecast.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Combine the sentences using a relative clause.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Combine the sentences using a subordinating conjunction of your choice.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the difference in meaning/emphasis created by each version.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Rewrite: 'The boy ran quickly. The boy was late.' using two different relative or subordinate structures.",
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
                              "name": "Sentence restructuring",
                              "statement": "Relative clauses add detail; subordinate clauses show logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relative version, e.g. 'The storm that had been forecast destroyed the village.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Subordinate version, e.g. 'Because the storm had been forecast, it destroyed the village.' or 'The storm, which had been forecast, destroyed the village.' — accept genuine alternatives like 'The storm that had been forecast destroyed...' is part a; here require conjunction e.g. 'Although the storm had been forecast, it destroyed the village.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Conjunction accurately conveys relationship (although/because/when).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Effect explained: relative clause embeds detail inside the noun phrase; subordination foregrounds cause/contrast.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "Two distinct restructurings of 'The boy ran quickly. The boy was late.', e.g. 'The boy who was late ran quickly.' and 'Because he was late, the boy ran quickly.'",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Correct relative-clause combination with appropriate pronoun.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable combination.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Grammatical subordinate combination with accurate conjunction and punctuation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted combination with minor errors.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable combination.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear explanation of the emphasis/meaning difference.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation or inaccurate.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Two distinct, grammatical restructurings.",
                              "part": "d"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One correct restructuring.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable restructuring.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "e.g. 'The storm that had been forecast destroyed the village.' / 'Although the storm had been forecast, it destroyed the village.'",
          "commonErrors": [
                    "Relative pronoun for a thing ('who').",
                    "Commas around a defining relative clause."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u4-sentences-notes",
      title: "Sentences and clauses — notes",
      summary: "Simple = one main clause; compound = main + main; complex = main + subordinate. Relative clauses add detail with who/which/that.",
      sections: [
        { heading: "The clause test", body: "Subject + verb = clause. Can it stand alone? Main clause. Needs the main clause? Subordinate." },
        { heading: "Sentence types", body: "Simple: one main clause. Compound: two main clauses + and/but/or/so or semicolon. Complex: main + subordinate introduced by because, although, when, if." },
        { heading: "Relative clauses", body: "who = person, which = thing, that = either, whose = possession. Defining = no commas; non-defining = commas." },
        { heading: "Exam tip", body: "In sentence-analysis questions, always identify the main clause first — everything else hangs off it." },
      ],
    },
  ],
};
