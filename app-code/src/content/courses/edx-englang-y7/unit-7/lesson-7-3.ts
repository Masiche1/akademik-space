import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "el7-u7-lesson-7-3",
  code: "7-3",
  title: "Word Classes and Sentence Functions",
  goal: "I CAN identify word classes, sentence functions and key grammar terms in any text.",
  standards: ["Edexcel KS3 English Language — Grammar"],
  
  vocabulary: [
    { term: "Noun", definition: "Naming word — person, place, thing or idea." },
    { term: "Verb", definition: "Action or state word — what happens or what is." },
    { term: "Adjective", definition: "Describes a noun — answers 'what kind?'" },
    { term: "Adverb", definition: "Describes a verb, adjective or other adverb — often ends in -ly." },
    { term: "Subject and predicate", definition: "Who/what the sentence is about vs what is said about them." },
    { term: "Sentence function", definition: "Statement, question, command or exclamation." },
  ],
  concepts: [
    {
      id: "el7-u7-classes",
      title: "Word Classes",
      skill: "Identify nouns, verbs, adjectives and adverbs and explain their functions.",
      lesson: {
        sections: [
          {
            heading: "The four core classes",
            body: "**Nouns** name (cat, London, freedom). **Verbs** show action or state (run, is, seems). **Adjectives** describe nouns (red, happy, three). **Adverbs** modify verbs, adjectives or other adverbs (quickly, very, well). Some words change class by position: 'the fast car' (adjective) vs 'he drives fast' (adverb).",
          },
          {
            heading: "Why classes matter",
            body: "Writers choose classes deliberately: adjectives build imagery ('a crimson sky'), adverbs can weaken ('ran quickly' vs 'sprinted'). Analysing classes reveals tone — 'the figure moved' (noun) is colder than 'she walked' (verb). Swap a noun for a verb and the sentence gains action.",
          },
        ],
        keyFormulas: [
          { name: "Noun", statement: "Names a person, place, thing or idea." },
          { name: "Verb", statement: "Shows action or state." },
          { name: "Adjective", statement: "Describes a noun." },
          { name: "Adverb", statement: "Modifies a verb, adjective or adverb." },
        ],
        workedExample: {
          problem: "Classify the underlined words in 'The quick fox jumped eagerly.'",
          solution: "The (determiner), quick (adjective), fox (noun), jumped (verb), eagerly (adverb).",
        },
      },
      questions: [
        {
          id: "el7-u7-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What word class is 'quickly' in 'She ran quickly'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adjective"
                    },
                    {
                              "id": "b",
                              "text": "Adverb"
                    },
                    {
                              "id": "c",
                              "text": "Verb"
                    },
                    {
                              "id": "d",
                              "text": "Noun"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adverb",
                              "statement": "Modifies a verb — 'quickly' tells how she ran."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Quickly' modifies the verb 'ran', so it is an adverb.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "b",
          "commonErrors": [
                    "Confusing -ly adverbs with adjectives."
          ]
},
        },
        {
          id: "el7-u7-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the noun and the verb in: 'The old lighthouse guided the ships.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Noun and verb",
                              "statement": "Noun names; verb shows action or state."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Noun: 'lighthouse' (also 'ships').",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Verb: 'guided'.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Noun: lighthouse/ships; verb: guided."
},
        },
        {
          id: "el7-u7-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these words into noun, verb, adjective and adverb: 'brightly', 'song', 'sings', 'melodic'. Then state what an adjective does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Word classes",
                              "statement": "Noun names, verb acts, adjective describes a noun, adverb modifies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Noun: 'song'; verb: 'sings'; adjective: 'melodic'; adverb: 'brightly'.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Adjective: describes or qualifies a noun — answers 'what kind?'",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "song=noun, sings=verb, melodic=adjective, brightly=adverb. Adjectives describe nouns."
},
        },
        {
          id: "el7-u7-wc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State the function of each underlined word in: 'The exhausted climbers finally reached the summit.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'exhausted'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'finally'",
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
                              "name": "Word class functions",
                              "statement": "Adjectives describe nouns; adverbs modify verbs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'exhausted' is an adjective describing the noun 'climbers'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'finally' is an adverb modifying the verb 'reached' — it tells when/how.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Adjective describing 'climbers'. (b) Adverb modifying 'reached'."
},
        },
        {
          id: "el7-u7-wc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite 'The children played happily in the garden' twice: once turning 'happily' into an adjective, once turning 'garden' into a verb. Comment on the effect of each change.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Adverb → adjective version.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) Noun → verb version plus comment.",
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
                              "name": "Changing word classes",
                              "statement": "Class changes shift emphasis: adjectives paint states, verbs inject action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) e.g. 'The happy children played in the garden' — 'happily' becomes adjective 'happy' describing 'children'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Effect: the mood moves onto the children themselves rather than the manner of playing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Grammar remains accurate.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. 'The children gardened happily' or 'The children played, gardening happily' — noun 'garden' becomes verb 'gardened'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Effect: nominalisation becomes action — the setting turns into something the children do.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Sentence stays grammatical and meaningful.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Correct rewrite with a perceptive effect comment.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite correct but comment weak or missing.",
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
                              "descriptor": "Correct rewrite with a perceptive effect comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Rewrite correct but comment weak or missing.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (a) 'The happy children played in the garden.' (b) 'The children gardened happily.' — action replaces setting.",
          "commonErrors": [
                    "Changing class without adjusting grammar.",
                    "Describing effect without linking it to the class change."
          ]
},
        },
        {
          id: "el7-u7-wc-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract: 'The wind screamed through the empty streets. Nobody answered the door. Only the cat watched, silent and still.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Analyse how the writer's choice of verbs and adjectives creates the mood.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the last sentence replacing 'watched' with a stronger verb and 'silent' with a stronger adjective, then explain the shift.",
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
                              "name": "Word class choices",
                              "statement": "Verbs carry action and mood; adjectives pin down qualities; both can be intensified or softened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'Screamed' (verb) gives the wind a voice of menace rather than a neutral 'blew'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Empty' (adjective) stresses abandonment — there is no-one to answer.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Silent and still' (adjectives) freeze the cat, making its watchfulness eerie.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Together the classes create a hushed, threatening stillness.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Stronger pair, e.g. 'Only the cat stared, motionless and watchful.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains the shift: 'stared' is more fixed and threatening than 'watched'; 'watchful' implies intent.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Detailed, accurate analysis of verb and adjective effects.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Some valid class-based points.",
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
                              "descriptor": "Stronger word choices with precise explanation of shift.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Choices made with a general comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Attempted but choices not clearly stronger.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) 'Only the cat stared, motionless and watchful.'",
          "commonErrors": [
                    "Identifying classes without discussing effect.",
                    "'Stronger' words that are not actually stronger."
          ]
},
        },
      ],
    },
    {
      id: "el7-u7-function",
      title: "Sentence Functions and Grammar Terms",
      skill: "Identify sentence functions, subjects, predicates and clause types in context.",
      lesson: {
        sections: [
          {
            heading: "Four sentence functions",
            body: "**Statements** tell ('It is raining'). **Questions** ask ('Is it raining?'). **Commands/imperatives** order ('Close the door'). **Exclamations** express strong feeling ('What a goal!'). Function is often signalled by punctuation and word order — fronting a verb makes a question ('Is it...'), fronting 'what' makes an exclamation.",
          },
          {
            heading: "Subject, predicate, clause, phrase",
            body: "The **subject** is who/what the sentence is about; the **predicate** says what happens to it. A **clause** has a subject and verb; a **phrase** has no verb ('in the garden', 'very slowly'). Grammar metalanguage lets you describe precisely: 'fronted adverbial', 'relative clause', 'expanded noun phrase'.",
          },
        ],
        keyFormulas: [
          { name: "Statement", statement: "Tells something; usually ends with a full stop." },
          { name: "Question", statement: "Asks something; ends with a question mark." },
          { name: "Command", statement: "Gives an order; imperative verb first, often no subject." },
          { name: "Exclamation", statement: "Expresses strong feeling; ends with an exclamation mark." },
          { name: "Clause vs phrase", statement: "Clause = subject + verb; phrase = no verb." },
        ],
        workedExample: {
          problem: "Identify the function and subject of 'Please pass the salt.'",
          solution: "Function: command (imperative). Subject: implied 'you' — imperatives often omit the subject.",
        },
      },
      questions: [
        {
          id: "el7-u7-sf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of 'Please close the door'?",
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
                              "text": "Command"
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
                              "name": "Sentence function",
                              "statement": "Imperatives give orders and usually start with the verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Close' is an imperative verb giving an order, so the function is a command.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "c",
          "commonErrors": [
                    "Calling it a statement because it ends with a full stop."
          ]
},
        },
        {
          id: "el7-u7-sf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the subject and predicate in: 'The old bridge spanned the river.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subject and predicate",
                              "statement": "Subject = who/what; predicate = what is said about them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subject: 'The old bridge' (who/what the sentence is about).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Predicate: 'spanned the river' (what the subject does).",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Subject: 'The old bridge'; predicate: 'spanned the river'."
},
        },
        {
          id: "el7-u7-sf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define clause and phrase, and give one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Clause vs phrase",
                              "statement": "A clause contains a subject and verb; a phrase does not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clause: group of words with a subject and verb, e.g. 'She ran home.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Phrase: group of words without a verb, e.g. 'in the garden' or 'very slowly'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Examples are accurate.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Clause = subject + verb; phrase = no verb."
},
        },
        {
          id: "el7-u7-sf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each sentence by function: statement, question, command or exclamation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'What a fantastic goal!'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(b) 'Have you finished your homework?'",
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
                              "name": "Sentence functions",
                              "statement": "Four functions: statement, question, command, exclamation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exclamation — expresses strong feeling, ends with '!'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Question — asks for information, auxiliary 'have' fronted, ends with '?'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Exclamation. (b) Question."
},
        },
        {
          id: "el7-u7-sf-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Convert each statement into a question, then explain what changes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) 'You are coming to the party.'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "(b) 'She has finished the book.' plus one sentence on the grammatical change.",
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
                              "name": "Statement to question",
                              "statement": "Front the auxiliary verb or use do-support; change punctuation to '?'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'Are you coming to the party?' — 'are' fronted, punctuation changed.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Meaning preserved, tone becomes interrogative.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'Has she finished the book?' — auxiliary 'has' fronted.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains fronting the auxiliary (or do-support) plus the question mark signals the function change.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Correct conversion with accurate explanation.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Conversion attempted, explanation weak.",
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
                              "descriptor": "Correct conversion plus clear grammatical explanation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Conversion correct, explanation missing.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 'Are you coming to the party?' (b) 'Has she finished the book?'",
          "commonErrors": [
                    "Keeping statement word order and just adding '?'."
          ]
},
        },
        {
          id: "el7-u7-sf-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the formal letter opening: 'Dear Sir or Madam, I am writing to complain about the service I received on 12 May. The order arrived damaged, and nobody responded to my emails.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "(a) Identify the function of each sentence and explain how they serve the letter's purpose.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "(b) Rewrite the second sentence as a command and a question, commenting on why statements suit this genre.",
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
                              "name": "Function and genre",
                              "statement": "Formal letters rely on statements for politeness and clarity; questions/commands can sound abrupt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sentence 1 ('I am writing to complain...') is a statement stating purpose formally.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Sentence 2 ('The order arrived damaged...') is a statement of fact building the case.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Statements convey objective complaint without aggression — appropriate for formal register.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Declarative structure signals professionalism and gives the writer control of tone.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Command: 'Respond to my complaint.' Question: 'Why has nobody responded to my emails?'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explains that statements keep the letter formal and impersonal, whereas commands/questions would sound confrontational.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Both functions identified with linked explanation of genre effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Functions identified with some explanation.",
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
                              "descriptor": "No creditable response.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Both rewrites correct plus precise genre comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Rewrites correct with general comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One rewrite or weak comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable response.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. (b) Command 'Respond to my complaint.' / Question 'Why has nobody responded?' — both would sound abrupt in a formal letter.",
          "commonErrors": [
                    "Identifying function without linking to purpose.",
                    "Rewrites that are ungrammatical."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u7-grammar-notes",
      title: "Word classes and sentence functions — notes",
      summary: "Nouns name, verbs act, adjectives describe nouns, adverbs modify. Sentences function as statements, questions, commands or exclamations.",
      sections: [
        { heading: "Quick test", body: "Ask: does it name (noun), act (verb), describe a noun (adjective) or modify (adverb)?" },
        { heading: "Clause vs phrase", body: "Clause has a verb; phrase does not." },
        { heading: "Function signals", body: "Full stop = statement; '?' = question; imperative verb = command; '!' = exclamation." },
      ],
    },
  ],
};
