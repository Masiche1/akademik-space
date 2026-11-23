import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "el7-u9-lesson-9-1",
  code: "9-1",
  title: "Word Classes and Sentence Types",
  goal: "I CAN identify word classes and sentence types and explain their effects on meaning.",
  standards: ["Edexcel KS3 English Language — Grammar", "Edexcel KS3 English Language — Sentence structure"],
  
  vocabulary: [
    { term: "Noun", definition: "A word that names a person, place, thing or idea." },
    { term: "Verb", definition: "A word that shows an action or a state." },
    { term: "Adjective", definition: "A word that describes or modifies a noun." },
    { term: "Adverb", definition: "A word that modifies a verb, adjective or other adverb, often ending in -ly." },
    { term: "Conjunction", definition: "A joining word such as 'and', 'but' or 'although'." },
    { term: "Sentence type", definition: "Statement, question, command or exclamation — defined by purpose and punctuation." },
  ],
  concepts: [
    {
      id: "el7-u9-wc",
      title: "Word Classes",
      skill: "Identify the main word classes accurately and use them for effect.",
      lesson: {
        sections: [
          {
            heading: "The main word classes",
            body: "**Nouns** name people, places, things and ideas ('teacher', 'London', 'freedom'). **Verbs** show action or state ('run', 'is', 'became'). **Adjectives** describe nouns ('brave', 'three', 'golden'). **Adverbs** modify verbs, adjectives or other adverbs and often end in -ly ('quickly', 'very', 'well').\n\nChoosing the right class matters: 'a large dog' versus 'a dog that was large' changes rhythm and emphasis.",
          },
          {
            heading: "Function words",
            body: "**Prepositions** link nouns to context ('under the bridge', 'with care'). **Conjunctions** join words, phrases or clauses ('and', 'but', 'because'). **Determiners** introduce nouns ('the', 'a', 'my', 'this').\n\nSome words can change class: 'fast' is an adjective in 'a fast car' but an adverb in 'he ran fast'. Always check what the word is doing in the sentence, not just what it looks like.",
          },
        ],
        keyFormulas: [
          { name: "Noun", statement: "Names a person, place, thing or idea." },
          { name: "Verb", statement: "Shows action or state." },
          { name: "Adjective", statement: "Describes a noun." },
          { name: "Adverb", statement: "Modifies a verb, adjective or adverb; often ends in -ly." },
          { name: "Conjunction", statement: "Joins words, phrases or clauses." },
        ],
        workedExample: {
          problem: "Identify the word class of each word in: 'The exhausted runner quickly drank cold water.'",
          solution: "runner = noun (thing/person); exhausted = adjective (describes runner); quickly = adverb (modifies drank); cold = adjective (describes water); drank = verb (action).",
        },
      },
      questions: [
        {
          id: "el7-u9-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word class names a person, place, thing or idea?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Noun"
                    },
                    {
                              "id": "b",
                              "text": "Verb"
                    },
                    {
                              "id": "c",
                              "text": "Adjective"
                    },
                    {
                              "id": "d",
                              "text": "Adverb"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Noun",
                              "statement": "A noun names a person, place, thing or idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Noun is the naming word class.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Noun",
          "commonErrors": [
                    "Confusing noun with verb."
          ]
},
        },
        {
          id: "el7-u9-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the adjective and the adverb in this sentence: 'The ancient castle stood silently on the hill.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adjective and adverb",
                              "statement": "Adjective describes a noun; adverb modifies a verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Ancient' describes the noun 'castle' — adjective.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Silently' modifies the verb 'stood' — adverb.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Adjective: ancient; adverb: silently",
          "commonErrors": [
                    "Choosing 'castle' or 'hill' instead of 'ancient'."
          ]
},
        },
        {
          id: "el7-u9-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a noun and a verb, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Noun vs verb",
                              "statement": "Noun names; verb shows action or state."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Noun defined as a naming word.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Verb defined as an action/state word.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A valid example given for each class.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A noun names (e.g. 'castle'); a verb shows action or state (e.g. 'stood').",
          "commonErrors": [
                    "Examples that are the wrong class."
          ]
},
        },
        {
          id: "el7-u9-wc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "How do adjectives and adverbs change the effect of a sentence? Use an example in your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Word class effect",
                              "statement": "Adjectives add detail and judgement; adverbs control pace and manner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adjectives add detail, colour and judgement to nouns.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Adverbs modify the action — pace, manner, degree.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A relevant example is given and its effect explained.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Adjectives and adverbs add precision and control effect — e.g. 'The hungry dog barked loudly' is more vivid than 'The dog barked'.",
          "commonErrors": [
                    "Describing word classes without discussing effect."
          ]
},
        },
        {
          id: "el7-u9-wc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this plain sentence to make it more descriptive: 'The dog ran.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite the sentence adding at least one adjective and one adverb.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how your changes alter the effect of the sentence.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Descriptive rewriting",
                              "statement": "Add adjectives to nouns and adverbs to verbs for effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An adjective is added describing the dog.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "An adverb is added modifying 'ran'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "The adjective's effect on the image is explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "The adverb's effect on pace or manner is explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Overall improvement in detail or tone is explained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explanation links clearly to the rewritten sentence.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Accurate rewrite with both word classes added.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Rewrite missing or no creditable additions.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Secure explanation of both changes' effects.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Good explanation covering most effects.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation of effect.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'The scruffy dog ran quickly.' — 'scruffy' adds character; 'quickly' suggests urgency.",
          "commonErrors": [
                    "Adding words without explaining effect."
          ]
},
        },
        {
          id: "el7-u9-wc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyse and improve this sentence: 'The boy went to the shop and he bought some bread.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the word class of 'boy', 'went', 'shop' and 'bought'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the sentence as one complex sentence.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how your rewrite changes the sentence's effect.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sentence analysis and improvement",
                              "statement": "Name word classes, subordinate clauses, then evaluate effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Boy' and 'shop' are nouns.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Went' and 'bought' are verbs.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "All four word classes identified correctly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two clauses correctly combined into one sentence.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "A subordinate clause or conjunction creates a valid complex sentence.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The subordination's effect on flow or emphasis is explained.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Improved cohesion or precision is identified.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Explanation links clearly to the original and rewrite.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All word classes correctly identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial identification.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable identification.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Valid, accurate complex-sentence rewrite.",
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
                              "descriptor": "No creditable rewrite.",
                              "part": "b"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Secure, well-linked explanation of effect.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Good explanation of effect.",
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
          "finalAnswer": "e.g. a: noun, verb, noun, verb; b: 'The boy went to the shop and bought some bread' or 'When he reached the shop, the boy bought some bread.'",
          "commonErrors": [
                    "Comma splice instead of true subordination."
          ]
},
        },
      ],
    },
    {
      id: "el7-u9-sentype",
      title: "Sentence Types and Clauses",
      skill: "Identify sentence types and clause structures and use them deliberately.",
      lesson: {
        sections: [
          {
            heading: "The four sentence types",
            body: "A **statement** gives information and ends with a full stop ('The bus is late'). A **question** asks and ends with a question mark ('Is the bus late?'). A **command** (imperative) gives an instruction and usually starts with a verb ('Close the door'). An **exclamation** conveys strong feeling and ends with an exclamation mark ('What a goal!').\n\nThe same words can shift type with punctuation: 'You are leaving' is a statement; 'You are leaving?' is a surprised question.",
          },
          {
            heading: "Clauses: simple, compound, complex",
            body: "A **clause** contains a subject and a verb. A **simple sentence** has one clause ('The dog barked'). A **compound sentence** joins two equal clauses with a coordinating conjunction or semicolon ('The dog barked and the cat hid'). A **complex sentence** combines a main clause with a subordinate clause introduced by a subordinating conjunction ('Although the dog barked, the cat slept').\n\nVarying clause structure controls pace: short simple sentences feel urgent; complex sentences feel thoughtful and flowing.",
          },
        ],
        keyFormulas: [
          { name: "Clause", statement: "A group of words containing a subject and a verb." },
          { name: "Simple sentence", statement: "One independent clause." },
          { name: "Compound sentence", statement: "Two or more equal clauses joined." },
          { name: "Complex sentence", statement: "A main clause plus a subordinate clause." },
        ],
        workedExample: {
          problem: "Classify each sentence: 'Sit down.' / 'Did you sit down?' / 'You sat down.' / 'How quickly you sat down!'",
          solution: "'Sit down.' = command; 'Did you sit down?' = question; 'You sat down.' = statement; 'How quickly you sat down!' = exclamation.",
        },
      },
      questions: [
        {
          id: "el7-u9-sentype-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence type gives a command or instruction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Statement"
                    },
                    {
                              "id": "b",
                              "text": "Question"
                    },
                    {
                              "id": "c",
                              "text": "Imperative (command)"
                    },
                    {
                              "id": "d",
                              "text": "Exclamation"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Imperative",
                              "statement": "A command sentence giving an instruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Commands are called imperatives.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Imperative (command)",
          "commonErrors": [
                    "Choosing exclamation."
          ]
},
        },
        {
          id: "el7-u9-sentype-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Although it rained, we still went out', identify the subordinate clause and explain why it is subordinate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subordinate clause",
                              "statement": "A clause that cannot stand alone as a sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Although it rained' is the subordinate clause.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Although' makes it dependent on the main clause.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Subordinate clause: 'Although it rained' — it depends on 'we still went out'.",
          "commonErrors": [
                    "Identifying the whole sentence as subordinate."
          ]
},
        },
        {
          id: "el7-u9-sentype-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a simple and a compound sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Simple vs compound",
                              "statement": "One clause versus two or more equal clauses joined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simple sentence = one independent clause.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Compound sentence = two equal clauses joined by a conjunction or semicolon.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A valid example given for each type.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Simple: one clause ('The cat slept'). Compound: two equal clauses ('The cat slept and the dog barked').",
          "commonErrors": [
                    "Calling a complex sentence compound."
          ]
},
        },
        {
          id: "el7-u9-sentype-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write one example each of a statement, a question, a command and an exclamation about school dinners, punctuating each correctly.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Sentence types",
                              "statement": "Each type has a distinct purpose and ending punctuation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A valid statement with a full stop.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid question with a question mark.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid command (imperative) punctuated correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid exclamation with an exclamation mark.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "All four examples are on-topic and clearly distinct.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'The canteen serves pasta on Mondays.' / 'Do you like the pasta?' / 'Try the pasta today.' / 'The pasta was amazing!'",
          "commonErrors": [
                    "Wrong ending punctuation for the type."
          ]
},
        },
        {
          id: "el7-u9-sentype-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Work with this sentence: 'Wow what a goal'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Punctuate the sentence correctly.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify the sentence type it is.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Rewrite it as a question.",
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
                              "name": "Punctuation by type",
                              "statement": "Exclamations end with !; questions end with ?"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Wow, what a goal!' — comma after Wow and exclamation mark.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "It is an exclamation conveying strong feeling.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "A valid question version, e.g. 'Was that a goal?'",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Correct punctuation.",
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
                              "descriptor": "Correct type identified.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Wrong type.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Valid question rewrite.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Not a question.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "a: 'Wow, what a goal!' b: exclamation c: e.g. 'Was that a goal?'",
          "commonErrors": [
                    "Missing comma after 'Wow'."
          ]
},
        },
        {
          id: "el7-u9-sentype-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "End-of-term notice",
          "author": "Written for Akademik Space",
          "source": "Classroom noticeboard",
          "text": "School closes early on Friday. Bring your reading books tomorrow."
},
          stem: "Using the notice above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the sentence type of each sentence in the notice.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Combine the two sentences into one complex sentence.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how combining them changes the notice's effect.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sentence-type analysis",
                              "statement": "Classify by purpose; combine clauses for flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'School closes early on Friday' = statement.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Bring your reading books tomorrow' = command/imperative.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Both types correctly labelled.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two clauses combined into one grammatical sentence.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "A subordinating or coordinating link is used correctly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The change in rhythm or emphasis is explained.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Improved flow or cohesion is identified.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Explanation links clearly to the notice.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both sentence types correctly identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One type correct.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable identification.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Valid complex-sentence combination.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted combination with errors.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable combination.",
                              "part": "b"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Secure explanation of effect.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Good explanation.",
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
          "finalAnswer": "a: statement + command; b: e.g. 'Because school closes early on Friday, bring your reading books tomorrow.'",
          "commonErrors": [
                    "Treating the command as a statement."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u9-wordclasses-notes",
      title: "Word classes and sentence types — notes",
      summary: "Nouns name, verbs act, adjectives describe nouns, adverbs modify. Statements, questions, commands, exclamations; simple, compound, complex sentences.",
      sections: [
        { heading: "Key idea", body: "Word class is decided by function in the sentence, not by appearance — 'fast' can be adjective or adverb." },
        { heading: "Sentence structure", body: "Simple = one clause; compound = equal clauses joined; complex = main + subordinate clause." },
      ],
    },
  ],
};
