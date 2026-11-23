import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "el7-u9-lesson-9-2",
  code: "9-2",
  title: "Punctuation and Sentence Variety",
  goal: "I CAN punctuate accurately and vary sentence structure for effect.",
  standards: ["Edexcel KS3 English Language — Punctuation", "Edexcel KS3 English Language — Sentence structure"],
  
  vocabulary: [
    { term: "Comma", definition: "Marks a pause, separates clauses or items in a list." },
    { term: "Colon", definition: "Introduces a list or an explanation that expands on what precedes it." },
    { term: "Semicolon", definition: "Joins two closely related independent clauses or separates complex list items." },
    { term: "Apostrophe", definition: "Shows possession or contraction." },
    { term: "Connective", definition: "A word or phrase that links ideas, e.g. 'however', 'because'." },
    { term: "Sentence variety", definition: "Mixing sentence lengths and structures for effect." },
  ],
  concepts: [
    {
      id: "el7-u9-punct",
      title: "Punctuation Marks and Their Functions",
      skill: "Use commas, colons, semicolons, apostrophes and quotation marks accurately.",
      lesson: {
        sections: [
          {
            heading: "Pauses and joins",
            body: "The **comma** marks a short pause and separates list items or clauses ('I bought apples, pears and grapes'). The **colon** introduces a list or expands an idea ('She packed three things: a map, a torch and water'). The **semicolon** joins two closely related complete sentences without a conjunction ('The rain stopped; we went outside').\n\nA common error is the comma splice — joining two sentences with only a comma ('It rained, we stayed in'). Fix it with a full stop, semicolon or conjunction.",
          },
          {
            heading: "Apostrophes and quotation marks",
            body: "The **apostrophe** shows possession ('the teacher's bag', 'the dogs' bowls') or contraction ('don't', 'it's' = it is). Plural nouns never take apostrophes for plural alone — 'the 1990s' not 'the 1990's' (unless showing possession).\n\n**Quotation marks** enclose direct speech or quoted words ('She said, \"Meet me at six\"'). Inverted commas may be single or double; be consistent.",
          },
        ],
        keyFormulas: [
          { name: "Comma", statement: "Pause; separates list items and clauses." },
          { name: "Colon", statement: "Introduces a list or explanation." },
          { name: "Semicolon", statement: "Joins related independent clauses." },
          { name: "Apostrophe", statement: "Shows possession or contraction." },
        ],
        workedExample: {
          problem: "Punctuate: 'the teachers bag was lost it contained her books'",
          solution: "The teacher's bag was lost; it contained her books. (Apostrophe for possession; semicolon joins two related clauses.)",
        },
      },
      questions: [
        {
          id: "el7-u9-punct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark separates items in a list?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Full stop"
                    },
                    {
                              "id": "b",
                              "text": "Comma"
                    },
                    {
                              "id": "c",
                              "text": "Apostrophe"
                    },
                    {
                              "id": "d",
                              "text": "Exclamation mark"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "List punctuation",
                              "statement": "Commas separate items in a list."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comma is the list-separating mark.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Comma",
          "commonErrors": [
                    "Choosing semicolon."
          ]
},
        },
        {
          id: "el7-u9-punct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a colon and a semicolon?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Colon vs semicolon",
                              "statement": "Colon introduces; semicolon joins equal clauses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Colon introduces a list or explanation.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Semicolon joins two related complete sentences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "A colon introduces what follows; a semicolon joins two equal clauses.",
          "commonErrors": [
                    "Reversing the two functions."
          ]
},
        },
        {
          id: "el7-u9-punct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two different uses of the apostrophe, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Apostrophe uses",
                              "statement": "Possession and contraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Possession use explained with example (e.g. 'the girl's hat').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Contraction use explained with example (e.g. 'don't').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both uses clearly distinguished.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Apostrophe shows possession ('the girl's hat') or contraction ('don't' = do not).",
          "commonErrors": [
                    "Using apostrophe for ordinary plurals."
          ]
},
        },
        {
          id: "el7-u9-punct-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Punctuate this sentence correctly: 'the teachers bag was lost it contained her books'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Accurate punctuation",
                              "statement": "Capital letter, apostrophe, and a joining mark between clauses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sentence begins with a capital letter.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Apostrophe added for possession: 'teacher's'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Two clauses joined correctly with a semicolon (or full stop + new sentence).",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The teacher's bag was lost; it contained her books.",
          "commonErrors": [
                    "Comma splice between the two clauses."
          ]
},
        },
        {
          id: "el7-u9-punct-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Correct the punctuation in this sentence: 'its a shame that we cant go to the park on saturday'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the sentence with all punctuation corrected.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two of your corrections.",
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
                              "name": "Apostrophe and capitalisation",
                              "statement": "'It's' = it is; 'can't' needs an apostrophe; days of the week are capitalised."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Its' corrected to 'It's' (it is).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'cant' corrected to 'can't'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Capital 'Saturday' and a full stop added.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two corrections explained accurately.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explanations reference the rule behind the mark.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All punctuation corrected accurately.",
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
                              "descriptor": "No creditable corrections.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Two corrections explained with reasons.",
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
                              "descriptor": "No creditable explanation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "It's a shame that we can't go to the park on Saturday.",
          "commonErrors": [
                    "Confusing 'its' and 'it's'."
          ]
},
        },
        {
          id: "el7-u9-punct-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Rewrite this text with full, correct punctuation: 'the new cafe opened last week its owner maria serves cakes and coffee customers love the place but the queue is long'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Insert all necessary punctuation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two of your punctuation choices.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Rewrite one long sentence as two shorter sentences.",
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
                              "name": "Full punctuation",
                              "statement": "Capital letters, commas, full stops, apostrophes or semicolons as needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct capital letters and full stops divide the sentences.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Commas or semicolons used to separate clauses correctly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "All sentences fully and accurately punctuated.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two punctuation choices explained accurately.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explanations reference the function of each mark.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "One sentence split into two grammatical sentences.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "Both resulting sentences are correctly punctuated.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Fully accurate punctuation throughout.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Most punctuation correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Major punctuation errors remain.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Two choices explained with clear reasoning.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Two choices explained briefly.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One choice explained.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Valid split into two correct sentences.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted split with errors.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable split.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'The new cafe opened last week. Its owner, Maria, serves cakes and coffee. Customers love the place, but the queue is long.'",
          "commonErrors": [
                    "Missing commas around 'Maria' or 'but' clause."
          ]
},
        },
      ],
    },
    {
      id: "el7-u9-variety",
      title: "Sentence Variety and Cohesion",
      skill: "Vary sentence length and structure and link ideas with connectives.",
      lesson: {
        sections: [
          {
            heading: "Why vary sentences?",
            body: "A paragraph of identical sentences bores the reader. **Short sentences** create pace and emphasis ('He stopped. He listened.'). **Longer sentences** carry complex ideas and allow nuance. Alternating lengths mirrors natural speech rhythm.\n\nThe same content can feel different by structure alone: 'She ran. She won.' feels punchy; 'Although exhausted, she ran and won.' feels dramatic.",
          },
          {
            heading: "Connectives and cohesion",
            body: "**Connectives** link ideas across sentences: adding ('also', 'furthermore'), contrasting ('however', 'although'), cause ('because', 'therefore'), time ('meanwhile', 'afterwards'). They stop writing feeling like a list of unconnected statements.\n\n**Cohesion** is the glue of a paragraph — pronouns referring back ('it', 'this'), repeated key words, and connectives all help each sentence lead naturally to the next.",
          },
        ],
        keyFormulas: [
          { name: "Connective types", statement: "Adding, contrasting, causal, temporal." },
          { name: "Cohesion", statement: "Links — pronouns, repetition, connectives — that bind sentences." },
          { name: "Variety", statement: "Mix short and long sentences for rhythm and emphasis." },
        ],
        workedExample: {
          problem: "Combine these sentences using a connective: 'It rained all day. We stayed inside.'",
          solution: "'Because it rained all day, we stayed inside.' (Causal connective creates a complex sentence.)",
        },
      },
      questions: [
        {
          id: "el7-u9-variety-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is a compound sentence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The cat slept."
                    },
                    {
                              "id": "b",
                              "text": "The cat slept and the dog barked."
                    },
                    {
                              "id": "c",
                              "text": "Running quickly."
                    },
                    {
                              "id": "d",
                              "text": "Because it rained."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compound sentence",
                              "statement": "Two or more equal clauses joined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only (b) has two independent clauses joined by 'and'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The cat slept and the dog barked.",
          "commonErrors": [
                    "Choosing a fragment like 'Running quickly'."
          ]
},
        },
        {
          id: "el7-u9-variety-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a connective and why is it useful in writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Connective",
                              "statement": "A word or phrase linking ideas between clauses or sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connective defined as a linking word/phrase.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It creates cohesion and shows logical relationships.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A connective links ideas (e.g. 'however', 'because'), creating cohesion and showing relationships.",
          "commonErrors": [
                    "Confusing connectives with punctuation."
          ]
},
        },
        {
          id: "el7-u9-variety-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how varying sentence length affects the pace and tone of a piece of writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence rhythm",
                              "statement": "Short sentences speed up and emphasise; long sentences slow and develop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short sentences create pace and emphasis.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Long sentences develop complex ideas and slow pace.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Variety prevents monotony and suits tone.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Short sentences speed up and emphasise; long sentences develop ideas slowly. Variety sustains interest.",
          "commonErrors": [
                    "No link between length and effect."
          ]
},
        },
        {
          id: "el7-u9-variety-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Combine these three sentences into one varied sentence: 'The bell rang. The students rushed out. They were late for lunch.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sentence combining",
                              "statement": "Subordinate one clause to create a complex sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All three ideas preserved in one sentence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A subordinating conjunction or relative clause used.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sentence is grammatically correct.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Resulting sentence has a varied structure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Choice of structure suits the sequence of events.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'When the bell rang, the students rushed out, late for lunch.'",
          "commonErrors": [
                    "Comma splices joining all three clauses."
          ]
},
        },
        {
          id: "el7-u9-variety-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Improve the cohesion of this paragraph by adding connectives: 'I like football. My sister likes netball. We both enjoy sport. We watch matches together.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite the paragraph adding at least two suitable connectives.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the connectives improve the paragraph's flow.",
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
                              "name": "Cohesion",
                              "statement": "Connectives show relationships between ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At least two appropriate connectives added correctly.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Connectives show contrast between siblings' sports.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Connectives show similarity or addition of shared interest.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Sentences now link logically rather than listing.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Improved flow explained clearly.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Two suitable connectives added correctly.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No or unsuitable connectives.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Clear explanation of improved flow.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Good explanation of flow.",
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
                              "descriptor": "No creditable explanation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'I like football, although my sister likes netball. However, we both enjoy sport and watch matches together.'",
          "commonErrors": [
                    "Connectives that contradict the meaning."
          ]
},
        },
        {
          id: "el7-u9-variety-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The storm",
          "author": "Written for Akademik Space",
          "text": "The wind rose. The windows rattled. The power went out. We lit candles."
},
          stem: "Using the extract above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite the first two sentences as one complex sentence.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Add two connectives to improve the passage's cohesion.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how sentence variety affects the reader's experience.",
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
                              "name": "Sentence variety",
                              "statement": "Combine clauses; add connectives; evaluate rhythm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two clauses combined into one grammatical complex sentence.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Subordinating or relative link used correctly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two appropriate connectives added in sensible places.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Connectives reflect the sequence or cause of events.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Effect of variety on pace or tension explained.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Contrast between original and revised effect noted.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Valid complex-sentence rewrite.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted combination with errors.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable rewrite.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Two well-placed connectives improving cohesion.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Connectives added with minor issues.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One connective or poor placement.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable connectives.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clear explanation of variety's effect.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. a: 'As the wind rose, the windows rattled.'; b: 'Meanwhile, the power went out, so we lit candles.'",
          "commonErrors": [
                    "Connectives that break the sequence of events."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u9-punctuation-notes",
      title: "Punctuation and sentence variety — notes",
      summary: "Commas pause, colons introduce, semicolons join equal clauses; apostrophes show possession/contraction. Vary sentence length and use connectives for cohesion.",
      sections: [
        { heading: "Key idea", body: "Punctuation controls meaning — 'Let's eat, Grandma' versus 'Let's eat Grandma'." },
        { heading: "Variety", body: "Short sentences punch; long sentences flow. Connectives glue ideas together." },
      ],
    },
  ],
};
