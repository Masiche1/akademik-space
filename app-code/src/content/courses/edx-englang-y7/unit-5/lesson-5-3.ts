import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "el7-u5-lesson-5-3",
  code: "5-3",
  title: "Word Choice: Precision, Connotation and Register",
  goal: "I CAN choose precise words, understand connotation and match vocabulary to audience and purpose.",
  standards: ["Edexcel KS3 English Language — Spelling and vocabulary", "Key Stage 3 writing: style and audience"],
  
  vocabulary: [
    { term: "Connotation", definition: "The feelings and associations a word carries beyond its dictionary meaning." },
    { term: "Denotation", definition: "The literal dictionary meaning of a word." },
    { term: "Collocation", definition: "Words that naturally go together (heavy rain, strong coffee)." },
    { term: "Register", definition: "Level of formality in vocabulary — formal, neutral, informal." },
    { term: "Cliché", definition: "An overused phrase that has lost impact through repetition." },
  ],
  concepts: [
    {
      id: "el7-u5-precision",
      title: "Precision and connotation",
      skill: "Choose precise words and understand the emotional colour words carry.",
      lesson: {
        sections: [
          {
            heading: "Precision vs vagueness",
            body: "Precise words sharpen meaning: 'The dog barked' vs 'The enormous Alsatian bellowed'.\n\nReplace vague words:\n- stuff → belongings, equipment, materials\n- things → objects, items, issues\n- nice → pleasant, delightful, charming\n- got → obtained, received, acquired\n- a lot of → numerous, considerable, many\n\nPrecision isn't always long words — 'big' is less precise than 'enormous' or 'spacious' depending on context.",
          },
          {
            heading: "Connotation",
            body: "**Denotation** is what a word literally means; **connotation** is what it suggests. 'Slim' and 'skinny' both mean 'thin' but connot differently — slim is positive, skinny negative.\n\n**Examples**:\n- house / home / residence / dwelling — same denotation, different connotation\n- child / kid / youngster / offspring\n- ask / demand / request / interrogate\n\nWriters choose words for their emotional charge — 'frugal' sounds positive, 'stingy' negative, though both mean careful with money.",
          },
        ],
        keyFormulas: [
          { name: "Denotation", statement: "Literal dictionary meaning." },
          { name: "Connotation", statement: "Emotional associations beyond literal meaning." },
          { name: "Precision", statement: "Specific word over vague general word." },
        ],
        workedExample: {
          problem: "Choose between 'The man walked' and 'The elderly man shuffled' — what does each connotation add?",
          solution: "'Walked' is neutral — no speed or manner. 'Elderly' adds age connotation (vulnerable?), 'shuffled' suggests slowness/weakness. The second version creates sympathy and paints a physical picture.",
        },
      },
      questions: [
        {
          id: "el7-u5-prec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between denotation and connotation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Denotation = spelling, connotation = pronunciation"
                    },
                    {
                              "id": "b",
                              "text": "Denotation = literal meaning, connotation = emotional associations"
                    },
                    {
                              "id": "c",
                              "text": "They mean the same thing"
                    },
                    {
                              "id": "d",
                              "text": "Denotation = long words, connotation = short words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Denotation vs connotation",
                              "statement": "Literal meaning vs emotional associations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Denotation = dictionary meaning; connotation = feelings/associations.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Denotation = literal meaning, connotation = emotional associations",
          "commonErrors": [
                    "Swapping the terms."
          ]
},
        },
        {
          id: "el7-u5-prec-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give a more precise alternative for 'nice' in: 'The food was nice.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Precise vocabulary",
                              "statement": "Replace vague adjectives with specific ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Precise alternative chosen: delicious, scrumptious, flavoursome, hearty...",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Word fits the context (food).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'The food was delicious.'",
          "commonErrors": [
                    "Choosing another vague word like 'good'."
          ]
},
        },
        {
          id: "el7-u5-prec-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the connotation of 'slim' vs 'skinny'. Why might a writer choose one over the other?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Connotation in word choice",
                              "statement": "Same denotation, different emotional charge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both mean 'thin' (same denotation).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Slim' connotes positive/attractive; 'skinny' connotes negative/unhealthy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Writer chooses based on desired effect on reader.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: advert uses 'slim'; health article might use 'skinny' critically.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'Slim' = positive/thin; 'skinny' = negative/thin — choice shapes reader's judgement.",
          "commonErrors": [
                    "Saying they mean different things literally."
          ]
},
        },
        {
          id: "el7-u5-prec-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite with precise, connotation-rich vocabulary: 'The man was big and he got the thing from the place.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Precision and connotation",
                              "statement": "Specific words create vivid, controlled meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'man' → specific (giant, athlete, elderly man...).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'big' → precise adjective with connotation (enormous, burly, towering).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'thing' and 'place' replaced with specific noun + verb (package from the depot, sculpture from the gallery).",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Connotation considered (e.g. 'towering' suggests power/menace).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'The towering giant collected the crate from the depot.'",
          "commonErrors": [
                    "Precision without connotation awareness."
          ]
},
        },
        {
          id: "el7-u5-prec-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Word choice analysis: 'The police officer confiscated the stolen goods' vs 'The policeman took the stolen stuff.' What does each version suggest about the writer's attitude?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare vocabulary register of both sentences.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what each word choice suggests.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Register and attitude",
                              "statement": "Formal vocabulary signals official/legal context; informal signals casual."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First sentence formal: officer, confiscated, goods.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Second informal: policeman, took, stuff.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Formal version suggests official/legal/news report attitude.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Confiscated' implies legal authority; 'took' is neutral/plain.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "'Stuff' is vague and casual, reducing the seriousness.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both registers identified with examples.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One register identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No register analysis.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Word-level connotations explained for both.",
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
                              "descriptor": "No explanation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Formal version = official/legal tone; informal = casual, less serious.",
          "commonErrors": [
                    "Describing meaning only, not register."
          ]
},
        },
        {
          id: "el7-u5-prec-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write two versions of the same sentence with different attitudes: a character discovering they've won a competition.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Version 1: excited, informal tone.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Version 2: calm, formal tone.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "List three vocabulary choices that create each tone.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how word choice alone changes the reader's reaction.",
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
                              "name": "Tone through word choice",
                              "statement": "Vocabulary register and connotation control attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Excited informal version with colloquial, energetic words.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Calm formal version with measured, precise vocabulary.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Three vocabulary choices listed per tone (e.g. 'awesome', 'can't believe', 'yes!' vs 'pleased', 'grateful', 'fortunate').",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "Explanation: word choice signals emotion and formality without stating it.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clearly excited informal version.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially informal.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Tone unclear.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clearly calm formal version.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially formal.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Tone unclear.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Vocabulary choices identified for both.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Choices missing.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear explanation of tone effect.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "e.g. Excited: 'I can't believe it — I actually won!' Calm: 'I am pleased to have been selected as the winner.'",
          "commonErrors": [
                    "Same vocabulary in both versions."
          ]
},
        },
      ],
    },
    {
      id: "el7-u5-collocation",
      title: "Collocations, clichés and precise usage",
      skill: "Use natural word partnerships, avoid clichés and choose words that fit context exactly.",
      lesson: {
        sections: [
          {
            heading: "Collocations",
            body: "**Collocations** are words that naturally go together — you 'make a decision' not 'do a decision'; 'heavy rain' not 'strong rain' (for rain).\n\nCommon KS3 collocations:\n- make/do: make a mistake, do homework\n- heavy/strong: heavy rain, strong coffee\n- fast/quick: fast car, quick decision\n- big/great: big problem, great success\n\nWrong collocations sound 'off' to native speakers even when grammatically correct.",
          },
          {
            heading: "Clichés and precision",
            body: "**Clichés** are overused phrases: 'at the end of the day', 'think outside the box', 'it was a dark and stormy night'. They weaken writing by being unoriginal.\n\nReplace with fresh, precise phrasing:\n- 'It was raining cats and dogs' → 'The rain hammered on the roof'\n- 'At the end of the day' → 'Ultimately' or cut it entirely\n\n**Precision** also means choosing the word that fits the exact context — 'said' is precise for neutral speech; 'whispered', 'shouted', 'muttered' add manner. Don't reach for thesaurus words that don't quite fit ('He ejaculated the answer' — technically means 'exclaimed' but sounds ridiculous).",
          },
        ],
        keyFormulas: [
          { name: "Collocation", statement: "Natural word partnership: make a decision, heavy rain." },
          { name: "Cliché", statement: "Overused phrase with lost impact — replace with fresh wording." },
          { name: "Precision", statement: "Exact word for exact context, not thesaurus-forcing." },
        ],
        workedExample: {
          problem: "Improve: 'At the end of the day, it was raining cats and dogs so we decided to stay in.'",
          solution: "'Ultimately, the rain was so heavy we stayed in.' — cliché removed, precise 'heavy' collocation used.",
        },
      },
      questions: [
        {
          id: "el7-u5-col-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a collocation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two words that rhyme"
                    },
                    {
                              "id": "b",
                              "text": "Words that naturally go together"
                    },
                    {
                              "id": "c",
                              "text": "Long words"
                    },
                    {
                              "id": "d",
                              "text": "Words with the same meaning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Collocation",
                              "statement": "Natural word pairing: heavy rain, make a decision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collocation = words that naturally co-occur in a language.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Words that naturally go together",
          "commonErrors": [
                    "Confusing with synonymy."
          ]
},
        },
        {
          id: "el7-u5-col-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Which is the correct collocation: 'make a decision' or 'do a decision'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Collocation",
                              "statement": "English fixes certain pairings idiomatically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Make a decision' is correct.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Do' pairs with tasks/actions (do homework); 'make' with creations/decisions.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'Make a decision'.",
          "commonErrors": [
                    "Choosing by logic rather than usage."
          ]
},
        },
        {
          id: "el7-u5-col-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify the cliché and rewrite it freshly: 'At the end of the day, it was raining cats and dogs.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cliché replacement",
                              "statement": "Fresh phrasing restores impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both phrases are clichés; at minimum 'raining cats and dogs' identified.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fresh replacement for rain, e.g. 'the rain hammered on the windows'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Fresh handling of 'at the end of the day' — replace or cut.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "New version grammatical and vivid.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'Ultimately, the rain hammered on the windows.'",
          "commonErrors": [
                    "Keeping the cliché and adding words around it."
          ]
},
        },
        {
          id: "el7-u5-col-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Why is 'He ejaculated the answer' technically correct but bad writing? What does this teach about thesaurus use?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Thesaurus caution",
                              "statement": "Synonyms must fit context and register."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Ejaculate' technically means 'exclaim suddenly' but is strongly associated with a sexual meaning.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Context determines which synonym is appropriate — the dictionary meaning isn't enough.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lesson: check connotation and register, not just denotation.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Correct denotation but disastrous connotation — thesaurus words must fit context and audience.",
          "commonErrors": [
                    "Saying it's simply wrong."
          ]
},
        },
        {
          id: "el7-u5-col-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Collocation correction: fix the wrong collocations in 'We did a party and had strong rain, but the fast decision paid off.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct each collocation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the rule for make/do and adjective-noun pairings.",
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
                              "name": "Collocation rules",
                              "statement": "Fixed pairings learned through exposure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'did a party' → 'had a party' or 'threw a party'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'strong rain' → 'heavy rain'.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'fast decision' → 'quick decision' (or 'swift decision').",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Make/do explained: make = create/produce (make dinner, make a decision); do = perform tasks (do homework, do exercise).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "Adjective-noun pairings are idiomatic — learn them as chunks.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All three collocations corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both rules explained accurately.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One rule explained.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "'We had a party and there was heavy rain, but the quick decision paid off.'",
          "commonErrors": [
                    "'do a party' — parties are 'had/thrown'."
          ]
},
        },
        {
          id: "el7-u5-col-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Improve this clichéd, vague paragraph: 'At the end of the day, the thing was a big deal and we had a lot of stuff to do.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Replace both clichés with fresh phrasing.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Replace the vague words with precise alternatives.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the improved version.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how your changes affect clarity and impact.",
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
                              "name": "Cliché removal and precision",
                              "statement": "Fresh phrasing + precise words = vivid writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both clichés replaced ('at the end of the day' → 'ultimately/in the end'; 'big deal' → specific importance).",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'thing' and 'stuff' replaced with specific nouns.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Improved sentence grammatical and coherent.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Explanation: clichés flatten, precision sharpens.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Both clichés replaced effectively.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One replaced.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Neither replaced.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Vague words replaced with precise alternatives.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial replacement.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Vague words remain.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Coherent improved version.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Incoherent or unchanged.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear explanation of improvement.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "e.g. 'Ultimately, the proposal was crucial, and we had numerous tasks to complete.'",
          "commonErrors": [
                    "Replacing cliché with another cliché."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u5-wordchoice-notes",
      title: "Word choice — notes",
      summary: "Precision beats vagueness; connotation carries emotion; collocations are fixed pairings; clichés weaken writing.",
      sections: [
        { heading: "Denotation vs connotation", body: "Denotation = literal meaning. Connotation = emotional colour. 'Slim' positive, 'skinny' negative — same meaning, different effect." },
        { heading: "Collocations", body: "make a decision, do homework, heavy rain, quick decision. Learn them as chunks, not single words." },
        { heading: "Clichés to avoid", body: "at the end of the day, think outside the box, raining cats and dogs, big deal." },
        { heading: "Thesaurus caution", body: "Check connotation — 'ejaculate' technically means 'exclaim' but sounds wrong in most contexts." },
      ],
    },
  ],
};
