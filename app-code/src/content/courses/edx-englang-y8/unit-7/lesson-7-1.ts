import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "el8-u7-lesson-7-1",
  code: "7-1",
  title: "Word Classes and Sentence Structure",
  goal: "I CAN identify the main word classes, label parts of a sentence and combine sentences accurately.",
  standards: ["KS3 English Language", "KS3 Grammar and Punctuation"],
  
  vocabulary: [
    { term: "Noun", definition: "A word for a person, place, thing or idea." },
    { term: "Verb", definition: "A word that describes an action or a state of being." },
    { term: "Adjective", definition: "A word that describes a noun." },
    { term: "Adverb", definition: "A word that describes a verb, an adjective or another adverb, often ending in -ly." },
    { term: "Pronoun", definition: "A word that stands in for a noun, such as he, she, it or they." },
    { term: "Conjunction", definition: "A joining word such as and, but, because or although." },
    { term: "Clause", definition: "A group of words containing a subject and a verb." },
    { term: "Phrase", definition: "A group of words that does not contain both a subject and a verb." },
    { term: "Subject", definition: "The part of a sentence that performs the action or is described." },
    { term: "Predicate", definition: "The part of a sentence that tells what the subject does or is like." },
  ],
  concepts: [
    {
      id: "el8-u7-word-classes",
      title: "Word classes",
      skill: "Identify and use nouns, verbs, adjectives, adverbs, pronouns and other word classes.",
      lesson: {
        sections: [
          {
            heading: "The main word classes",
            body: "English words are sorted into **classes** by the job they do. The core classes are **nouns** (naming words), **verbs** (action or being words), **adjectives** (describing nouns), **adverbs** (describing verbs, adjectives or other adverbs) and **pronouns** (words that replace nouns). You will also meet **prepositions** (in, on, under), **conjunctions** (and, but, because) and **determiners** (the, a, this).",
          },
          {
            heading: "Spotting the class",
            body: "Ask what the word does in its sentence, not what it looks like. In 'She runs quickly', 'runs' is a verb and 'quickly' is an adverb because it describes how she runs. Some words can change class: 'fast' is an adjective in 'a fast car' but an adverb in 'he runs fast'. Always check the word's job in context.",
          },
          {
            heading: "Why word class matters",
            body: "Choosing the right class shapes meaning and tone. 'He gave a **kind** smile' uses an adjective; 'he smiled **kindly**' uses an adverb and sounds more formal. Errors happen when a word is used in the wrong class, such as 'She is more taller' or 'They went to the shops for buy milk'.",
          },
        ],
        keyFormulas: [
          { name: "Noun", statement: "Names a person, place, thing or idea." },
          { name: "Verb", statement: "Shows action or being." },
          { name: "Adjective", statement: "Describes a noun." },
          { name: "Adverb", statement: "Describes a verb, adjective or other adverb." },
          { name: "Pronoun", statement: "Replaces a noun: he, she, it, they, this." },
        ],
        workedExample: {
          problem: "Label the word class of each underlined word: 'The (1) clever (2) fox (3) moved (4) quietly through the (5) dark forest.'",
          solution: "(1) clever is an adjective describing fox. (2) fox is a noun. (3) moved is a verb showing action. (4) quietly is an adverb describing how it moved. (5) dark is an adjective describing forest; 'forest' itself is a noun.",
        },
      },
      questions: [
        {
          id: "el8-u7-word-classes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sentence 'The tired dog slept quietly', which word is an adverb?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tired"
                    },
                    {
                              "id": "b",
                              "text": "slept"
                    },
                    {
                              "id": "c",
                              "text": "quietly"
                    },
                    {
                              "id": "d",
                              "text": "dog"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adverb",
                              "statement": "A word that describes a verb, adjective or other adverb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Quietly' describes how the dog slept, so it is an adverb.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** quietly. 'Tired' is an adjective, 'slept' is a verb and 'dog' is a noun.",
          "commonErrors": [
                    "Choosing 'tired' because it ends in -ed, but word class depends on the job the word does."
          ]
},
        },
        {
          id: "el8-u7-word-classes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write down the word class of each word: (a) 'beautiful' in 'a beautiful garden'; (b) 'under' in 'the cat hid under the bed'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Word class",
                              "statement": "Words are classed by the job they do in a sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Beautiful' describes the noun 'garden', so it is an adjective.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Under' shows position and links the noun phrases, so it is a preposition.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) adjective; (b) preposition.",
          "commonErrors": [
                    "Calling 'under' an adverb because it can appear at the end of a sentence, but here it introduces a noun phrase so it is a preposition."
          ]
},
        },
        {
          id: "el8-u7-word-classes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the sentence 'The brave sailor crossed the stormy sea', identify one noun, one verb and one adjective.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Labelling word classes",
                              "statement": "Identify words by the job they perform."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A noun names a person, place or thing: 'sailor', 'sea' or 'stormy' is not one, so 'sailor' or 'sea' earns the mark.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The verb shows the action: 'crossed'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Adjectives describe nouns: 'brave' describes sailor and 'stormy' describes sea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Noun: sailor or sea. Verb: crossed. Adjective: brave or stormy.",
          "commonErrors": [
                    "Giving 'the' as a noun — it is a determiner, not a naming word."
          ]
},
        },
        {
          id: "el8-u7-word-classes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student wrote: 'She gave the present to him and I.' Explain the error and rewrite the sentence correctly. Then explain why the wrong version sounds wrong.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pronoun case",
                              "statement": "Pronouns change form depending on whether they are the subject or the object of a sentence."
                    },
                    {
                              "kind": "skill",
                              "name": "Editing",
                              "statement": "Check pronouns by testing them in a simple sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I' is a subject pronoun; after the preposition 'to' the object form 'me' is needed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Corrected sentence: 'She gave the present to him and me.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Him and me' are objects of 'to', so both take object form.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The error sounds wrong because 'to I' is impossible; a quick test is 'She gave the present to me', which works, so 'to him and me' must also work.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The sentence should read 'She gave the present to him and me.' 'I' is a subject pronoun and cannot be the object of 'to'; the test 'She gave the present to me' confirms 'me' is correct.",
          "commonErrors": [
                    "Correcting only 'I' to 'me' but leaving 'him', which is already correct.",
                    "Changing 'him' to 'he' as well — 'him' is correct as an object."
          ]
},
        },
        {
          id: "el8-u7-word-classes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between a phrase and a clause. Give two examples of each and explain how you can tell them apart.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Clause",
                              "statement": "A group of words containing a subject and a verb."
                    },
                    {
                              "kind": "definition",
                              "name": "Phrase",
                              "statement": "A group of words without both a subject and a verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A clause must contain a subject and a verb; a phrase lacks at least one of them.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example clause: 'The rain stopped.' contains subject 'the rain' and verb 'stopped'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Second example clause: 'She ran because she was late.' contains two clauses joined by 'because'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example phrase: 'under the old bridge' has no subject or verb.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Test: find the verb. If the group has a verb but no subject (or vice versa) it is a phrase; if it has both it is a clause.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear definition, two accurate examples of each and a reliable test for telling them apart."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Correct definitions and examples but limited explanation of the difference."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Partial definitions or examples that do not clearly show the difference."
                    }
          ],
          "finalAnswer": "A clause contains a subject and a verb ('The rain stopped'); a phrase does not ('under the old bridge'). Clauses can join to make complex sentences, while phrases add detail.",
          "commonErrors": [
                    "Calling any group of words a phrase, including ones with a subject and verb.",
                    "Giving examples that are whole sentences for both categories without checking for phrases."
          ]
},
        },
        {
          id: "el8-u7-word-classes-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about word classes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "In 'The excited children waited impatiently for the bus', label the word class of 'excited', 'children' and 'impatiently'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how choosing a different word class can change the tone of a sentence, using two examples.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Rewrite the sentence 'He gave a kind smile' using an adverb instead, then explain which version sounds more formal and why.",
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
                              "name": "Word class",
                              "statement": "Words are classed by the job they do in a sentence."
                    },
                    {
                              "kind": "technique",
                              "name": "Word class and tone",
                              "statement": "Changing a word's class changes how formal or vivid a sentence sounds."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'Excited' describes the noun 'children', so it is an adjective.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'Children' names people, so it is a noun.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'Impatiently' describes how they waited, so it is an adverb.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Point: class choice affects tone. 'She gave a kind smile' (adjective) is warm and simple.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'She smiled kindly' (adverb) sounds more detached and formal; 'he runs fast' versus 'he is a fast runner' shows similar shifts.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct rewrite using an adverb: 'He smiled kindly.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The adverb version sounds more formal because adverbs are common in formal description, while the adjective-noun pairing is more conversational.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "A precise explanation links the class change to the effect on the reader, not just naming the classes.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Accurate rewrite with a clear, developed explanation of the formal effect."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Correct rewrite with a simple explanation of tone."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Rewrite attempted but explanation is vague or the class change is unclear."
                    }
          ],
          "finalAnswer": "(a) excited = adjective; children = noun; impatiently = adverb. (b) Word class choice shifts tone: adjectives feel direct and warm, adverbs more formal. (c) 'He smiled kindly' is more formal because the adverb describes the manner of the action in a more written style.",
          "commonErrors": [
                    "In (a), labelling 'excited' as a verb because it looks like a past participle.",
                    "In (c), rewriting as 'He gave a kindly smile', which misuses the adverb as an adjective."
          ]
},
        },
      ],
    },
    {
      id: "el8-u7-sentence-structure",
      title: "Sentence structure",
      skill: "Identify subjects, verbs, phrases and clauses, and combine sentences accurately.",
      lesson: {
        sections: [
          {
            heading: "Subjects, verbs and predicates",
            body: "Every complete sentence needs a **subject** (who or what the sentence is about) and a **verb** (what happens). Everything after the verb is the **predicate**. In 'The cat chased the mouse', the subject is 'the cat' and the predicate is 'chased the mouse'. A group of words without a subject and verb, such as 'under the bed', is not a sentence.",
          },
          {
            heading: "Sentence types",
            body: "Sentences end in different ways: **statements** (.), **questions** (?), **commands** (.) and **exclamations** (!). Commands have an implied subject 'you'. Exclamations can end with a full stop or an exclamation mark; an exclamation mark is optional unless the sentence begins with 'what' or 'how'.",
          },
          {
            heading: "Joining sentences",
            body: "Short sentences can be joined with **coordinating conjunctions** (and, but, or, so) or subordinating conjunctions (because, although, when). Punctuation matters: a comma usually comes before 'and', 'but' and 'so' when joining two complete sentences, and always before 'although', 'because' and 'when'.",
          },
        ],
        keyFormulas: [
          { name: "Complete sentence", statement: "A subject plus a verb (and usually an object or complement)." },
          { name: "Coordinating conjunctions", statement: "FANBOYS: for, and, nor, but, or, yet, so." },
          { name: "Subordinating conjunctions", statement: "because, although, when, if, while, since — they make a clause dependent." },
        ],
        workedExample: {
          problem: "Join these sentences in two different ways: 'It was raining. We stayed inside.'",
          solution: "With a coordinating conjunction: 'It was raining, so we stayed inside.' With a subordinating conjunction: 'Because it was raining, we stayed inside.' Both are correct; the second changes the emphasis by making the reason the main clause's lead-in.",
        },
      },
      questions: [
        {
          id: "el8-u7-sentence-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a complete sentence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Running down the street."
                    },
                    {
                              "id": "b",
                              "text": "Because it was late."
                    },
                    {
                              "id": "c",
                              "text": "The sun rose slowly."
                    },
                    {
                              "id": "d",
                              "text": "Under the big tree."
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complete sentence",
                              "statement": "Needs a subject and a verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only 'The sun rose slowly' has both a subject ('the sun') and a verb ('rose').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** The sun rose slowly. The others are fragments lacking a subject or a verb.",
          "commonErrors": [
                    "Choosing 'Running down the street' — it has a verb form but no clear subject."
          ]
},
        },
        {
          id: "el8-u7-sentence-structure-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the sentence 'The old bridge was built in 1850', write down (a) the subject and (b) the verb.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subject and verb",
                              "statement": "The subject is what the sentence is about; the verb shows what it does or is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sentence is about 'the old bridge', so that is the subject.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The action/state is 'was built' — the verb (a verb phrase).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) The old bridge; (b) was built.",
          "commonErrors": [
                    "Giving 'in 1850' as the subject — it tells when, not who or what."
          ]
},
        },
        {
          id: "el8-u7-sentence-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join these pairs of sentences using a conjunction and correct punctuation: (a) 'I wanted to go out. It was raining.' (b) 'She studied hard. She passed the test.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Joining sentences",
                              "statement": "Use a suitable conjunction and punctuate the join correctly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A subordinating or contrasting conjunction fits: 'I wanted to go out, but it was raining.' or 'Although it was raining, I wanted to go out.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Punctuation is correct: comma before 'but', or comma after the fronted 'Although' clause.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Second pair joined accurately: 'She studied hard, so she passed the test.' (or 'and', 'because').",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) 'I wanted to go out, but it was raining.' (b) 'She studied hard, so she passed the test.' (Accept other accurate joins.)",
          "commonErrors": [
                    "Joining with a comma alone (a comma splice): 'I wanted to go out, it was raining.'",
                    "Missing the comma before 'but' or 'so'."
          ]
},
        },
        {
          id: "el8-u7-sentence-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A writer uses only very short sentences: 'The door creaked. He froze. Shadows moved. He ran.' Explain the effect of this style, then rewrite the sentences as one longer sentence that keeps some of the tension.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence length and pace",
                              "statement": "Short sentences create tension, urgency and a dramatic beat."
                    },
                    {
                              "kind": "skill",
                              "name": "Sentence combining",
                              "statement": "Clauses can be joined with conjunctions or punctuation while keeping meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: the staccato short sentences slow the reader down and make each action feel sudden and dramatic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The fragments mimic the character's panicked, split-second reactions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effective rewrite combines some sentences, e.g. 'The door creaked and he froze as shadows moved, then he ran.' or using a subordinator.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Comment acknowledges the trade-off: the longer sentence flows better but loses some of the original tension unless punctuation preserves it.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Short sentences create a tense, urgent rhythm that mirrors panic. A longer rewrite such as 'The door creaked; he froze as shadows moved, then ran' keeps the meaning but softens the dramatic beat.",
          "commonErrors": [
                    "Saying short sentences are 'bad' rather than commenting on their deliberate effect.",
                    "Rewriting as one sentence but losing the sequence of events."
          ]
},
        },
        {
          id: "el8-u7-sentence-structure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between simple, compound and complex sentences. Give one example of each and say how a writer might use each type.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sentence types",
                              "statement": "Simple = one clause; compound = two equal clauses joined; complex = main clause plus dependent clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simple sentence = one independent clause: 'The bell rang.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Compound = two independent clauses joined by a coordinating conjunction or semicolon: 'The bell rang, and everyone stood up.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Complex = independent clause plus dependent clause introduced by a subordinator: 'When the bell rang, everyone stood up.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Writers use simple sentences for impact, compound for balance and complex sentences to show cause, time or contrast.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The examples clearly show one clause, two equal clauses and a dependent clause respectively.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Accurate definitions, clear examples and a developed explanation of each type's effect."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Correct definitions and examples with limited comment on effect."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Vague definitions or examples that do not clearly distinguish the types."
                    }
          ],
          "finalAnswer": "Simple: one clause ('The bell rang'). Compound: two equal clauses joined ('The bell rang, and everyone stood up'). Complex: main plus dependent clause ('When the bell rang, everyone stood up').",
          "commonErrors": [
                    "Labelling a compound sentence as complex because it is long.",
                    "Using examples with no clear clause structure to show the difference."
          ]
},
        },
        {
          id: "el8-u7-sentence-structure-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about sentence structure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "In 'Because the bus was late, we missed the start of the film', identify the main clause and the subordinate clause.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how moving the subordinate clause to the end of the sentence changes the emphasis.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Rewrite these three sentences as one complex sentence and one compound sentence, then comment on the effect of each version: 'It rained. The match was cancelled. The players went home.'",
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
                              "name": "Clause types",
                              "statement": "A main clause can stand alone; a subordinate clause depends on it."
                    },
                    {
                              "kind": "technique",
                              "name": "Fronting and emphasis",
                              "statement": "Placing a clause first gives it prominence and sets the scene."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Main clause: 'we missed the start of the film' — it makes sense alone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Subordinate clause: 'Because the bus was late' — it cannot stand alone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fronted, the reason leads, so the reader meets the cause first and the result feels like a consequence.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "End-placed ('We missed the start of the film because the bus was late'), the result leads and the cause is added as an afterthought or explanation, changing the emphasis.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Accurate complex rewrite, e.g. 'Because it rained, the match was cancelled and the players went home.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Accurate compound rewrite, e.g. 'It rained, the match was cancelled, and the players went home.' or with a semicolon/conjunction pair.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Comment links structure to effect: the complex version foregrounds cause, the compound links events as equals.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Both rewrites accurate with a perceptive comment on emphasis."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Rewrites mostly accurate with a simple comment."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Rewrites attempted but inaccurate or unexplained."
                    }
          ],
          "finalAnswer": "(a) Main clause: 'we missed the start of the film'; subordinate: 'Because the bus was late'. (b) Fronting the reason gives it priority. (c) Complex: 'Because it rained, the match was cancelled and the players went home'; compound links the events as equals.",
          "commonErrors": [
                    "Calling the 'because' clause the main clause.",
                    "Rewriting as a run-on with commas only and no conjunctions."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u7-structure-notes",
      title: "Word classes and sentence structure — notes",
      summary: "Word classes are defined by job, not appearance. Every sentence needs a subject and a verb; clauses and phrases differ by whether they contain both.",
      sections: [
        { heading: "Key idea", body: "Always ask what a word does in its sentence before naming its class." },
        { heading: "Sentence check", body: "Find the verb, then the subject; if both exist you have a clause, not just a phrase." },
        { heading: "Joining", body: "Commas before coordinating conjunctions joining two clauses; commas after fronted subordinate clauses." },
      ],
    },
  ],
};
