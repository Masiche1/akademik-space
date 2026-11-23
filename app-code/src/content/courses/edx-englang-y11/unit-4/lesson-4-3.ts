import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "el11-u4-lesson-4-3",
  code: "4-3",
  title: "Idiolect, Dialect and the Power of Context",
  goal: "I CAN analyse how personal, regional and social varieties of English shape meaning, and explain how context changes interpretation.",
  standards: ["4EA1 AO3", "4EA1 AO1", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Idiolect", definition: "An individual's personal way of speaking or writing, shaped by their unique background." },
    { term: "Dialect", definition: "A regional or social variety of a language with its own vocabulary, grammar and pronunciation." },
    { term: "Sociolect", definition: "The variety of language associated with a particular social group or class." },
    { term: "Accent", definition: "The way words are pronounced; distinct from dialect, which includes grammar and vocabulary." },
    { term: "Code-switching", definition: "Changing between varieties of language within a single conversation or text." },
    { term: "Context", definition: "The situation, audience and purpose surrounding a text, which determines how language should be interpreted." },
  ],
  concepts: [
    {
      id: "el11-u4-idiolect-dialect",
      title: "Idiolect, dialect and sociolect",
      skill: "Distinguish personal, regional and social varieties of English and analyse their effect in texts.",
      lesson: {
        sections: [
          {
            heading: "Three levels of variety",
            body: "**Idiolect** is personal: your catchphrases, pet words, habitual sentence patterns. **Dialect** is regional: 'bairn' in the North, 'bubbly' for sparkling water in Scotland, 'y'all' in the American South. **Sociolect** is social: professional jargon, class-based vocabulary, youth slang. Accent is only pronunciation — the audible part — while dialect includes grammar and vocabulary too.",
          },
          {
            heading: "Why variety matters in texts",
            body: "Writers use dialect and idiolect to create believable characters, signal identity and build authenticity. A character saying 'I weren't going nowhere' immediately suggests region, age and attitude without exposition. Sociolect signals class or profession: a doctor saying 'BP is elevated' vs 'your blood pressure's high'.",
          },
          {
            heading: "Code-switching",
            body: "Speakers often shift varieties within one conversation: formal with a teacher, slang with friends. Writers reproduce this through **code-switching** — sudden changes in register or dialect that reveal relationships and power dynamics. Notice when a character 'puts on' a formal voice and why.",
          },
        ],
        keyFormulas: [
          { name: "Idiolect", statement: "Individual's personal language habits — catchphrases, pet words, patterns." },
          { name: "Dialect vs accent", statement: "Dialect = vocabulary + grammar + pronunciation; accent = pronunciation only." },
          { name: "Sociolect", statement: "Language variety tied to social group, class or profession." },
        ],
        workedExample: {
          problem: "A character says: 'Anyroad, I weren't about to let her get away with it, me.' Analyse the dialect features.",
          solution: "'Anyroad' (anyway) and 'me' as object pronoun ('let her get away with it, me') are non-standard grammatical features typical of northern English dialects. 'Weren't' for 'wasn't' shows dialectal verb agreement. These features create a regional, working-class voice and suggest defiance ('weren't about to let her get away with it'). The dropped 'g' in pronunciation would add accent, but the written dialect already signals identity.",
        },
      },
      questions: [
        {
          id: "el11-u4-idiolect-dialect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an idiolect?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A regional variety of English"
                    },
                    {
                              "id": "b",
                              "text": "An individual's personal way of using language"
                    },
                    {
                              "id": "c",
                              "text": "The pronunciation of a group"
                    },
                    {
                              "id": "d",
                              "text": "Formal written English"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Idiolect",
                              "statement": "An individual's unique language habits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Idiolect is personal; dialect is regional; accent is pronunciation only.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** An individual's personal way of using language.",
          "commonErrors": [
                    "Confusing idiolect with dialect (a)."
          ]
},
        },
        {
          id: "el11-u4-idiolect-dialect-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain the difference between dialect and accent.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dialect vs accent",
                              "statement": "Dialect includes grammar/vocabulary; accent is pronunciation only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialect = regional variety including vocabulary, grammar and pronunciation.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Accent = only the way words are pronounced; two speakers can share an accent but not a dialect.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Dialect covers vocabulary, grammar and pronunciation; accent is pronunciation alone.",
          "commonErrors": [
                    "Using the terms interchangeably."
          ]
},
        },
        {
          id: "el11-u4-idiolect-dialect-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two friends meet",
          "author": "Written for Akademik Space",
          "source": "Original prose extract",
          "text": "'You alright, mate? Bit parched after that trek.'\n\nHe grinned. 'Can't complain. Where'd you get to, then?'\n\n'Straight down to the river, innit. Didn't fancy messing about.'\n\n'Fair enough. I'm starving — shall we get a chippy?'"
},
          stem: "Identify three dialect or sociolect features in this extract and explain what they suggest about the speakers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialect features",
                              "statement": "Colloquial vocabulary and grammar signal regional/social identity."
                    },
                    {
                              "kind": "skill",
                              "name": "Character analysis",
                              "statement": "Dialect builds character and relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'mate', 'chippy', 'innit' — colloquial British vocabulary suggesting informal, friendly relationship.",
                              "evidence": "shall we get a chippy?",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Bit parched', 'I'm starving' — informal intensification and dropped precision.",
                              "evidence": "Bit parched after that trek",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Didn't fancy messing about' — dialectal grammar ('messing about') and casual register; speakers appear relaxed, possibly younger or working-class.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The extract's colloquialisms ('mate', 'chippy', 'innit') and casual grammar create a relaxed, informal northern-British voice suggesting close friendship.",
          "commonErrors": [
                    "Identifying features without explaining what they reveal."
          ]
},
        },
        {
          id: "el11-u4-idiolect-dialect-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A writer describes a character's speech as 'carefully neutral, avoiding any regional features.' Evaluate why a writer might make this choice and what effect it could have.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Neutral idiolect",
                              "statement": "Avoiding dialect can universalise a character or signal control."
                    },
                    {
                              "kind": "skill",
                              "name": "Authorial choice",
                              "statement": "Explaining why writers make specific language decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neutral speech makes the character relatable to all readers — no regional barrier.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It can suggest the character is educated, professional or deliberately 'putting on' standard English.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It may signal that the writer wants focus on plot/ideas rather than regional identity.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Alternatively, neutrality can feel bland — dialect adds authenticity and voice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Conclusion: the choice is deliberate and shapes reader response.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Neutral speech universalises the character, signals education or deliberate formality, and focuses attention away from regional identity — though it may sacrifice vividness.",
          "commonErrors": [
                    "Assuming neutral is always better."
          ]
},
        },
        {
          id: "el11-u4-idiolect-dialect-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define code-switching.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how a writer might use code-switching to show a power relationship between two characters.",
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
                              "name": "Code-switching",
                              "statement": "Shifting between language varieties within a conversation."
                    },
                    {
                              "kind": "technique",
                              "name": "Power and register",
                              "statement": "Who switches and when reveals social hierarchy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Code-switching = changing between varieties (formal/informal, dialects) within one interaction.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "The dominant character may keep standard/formal register while the subordinate shifts to accommodate.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Asymmetric switching (one adapts, the other doesn't) signals unequal status.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "A character 'putting on' formal voice for authority, or dropping it for intimacy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example effect: reveals relationship dynamics without direct statement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Accurate definition of code-switching."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Partial or inaccurate definition."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Explains clearly how switching varieties can signal or negotiate power between speakers, with apt illustration."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Some awareness of the power relationship but explanation is thin or unsupported."
                    }
          ],
"finalAnswer": "(a) Code-switching is shifting between language varieties in one interaction. (b) Asymmetric switching — one character accommodating the other's register — reveals power and social distance.",
          "commonErrors": [
                    "Defining code-switching as just slang.",
                    "Not linking switching to power dynamics."
          ]
},
        },
        {
          id: "el11-u4-idiolect-dialect-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words analysing how a writer could use dialect and idiolect in a character portrait. Cover at least two specific techniques and explain their effect on the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialect in characterisation",
                              "statement": "Regional/social language features build identity and voice."
                    },
                    {
                              "kind": "skill",
                              "name": "Analytical writing",
                              "statement": "Explaining technique and effect coherently."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technique 1: dialect vocabulary/grammar to signal region and class.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Technique 2: idiolect habits (catchphrases, sentence patterns) for individuality.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Technique 3 (optional): code-switching to show relationships.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Explains effect: creates authenticity, distinguishes characters, builds empathy or distance.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Notes risks: stereotyping or reader exclusion if overdone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear organisation and coherent paragraphing.",
                              "marks": 3,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Dialect signals region/class, idiolect individualises, and code-switching reveals relationships — together creating believable, distinctive characters.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two or more techniques with clear effects and balanced evaluation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Techniques identified with some effect explanation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague discussion with few techniques."
                    }
          ],
          "commonErrors": [
                    "Listing dialect features without effect.",
                    "No mention of reader impact."
          ]
},
        },
      ],
    },
    {
      id: "el11-u4-context-meaning",
      title: "Context and interpretation",
      skill: "Explain how the situation, audience and purpose surrounding a text change how its language should be interpreted.",
      lesson: {
        sections: [
          {
            heading: "What context does",
            body: "The same sentence can mean different things in different contexts. 'I love it' in a review is praise; in a sarcastic text message it may mean the opposite. **Context** includes the immediate situation (who is speaking to whom, where), the wider circumstances (a war, a festival, a courtroom) and the purpose (to inform, persuade, deceive).",
          },
          {
            heading: "Recovering context from clues",
            body: "Even without background information, texts contain contextual clues: references to shared events ('after what happened last week'), specialised vocabulary (legal terms in a contract), register (formal vs casual) and conventions (a headline, a text message format). Good readers reconstruct context from these clues.",
          },
          {
            heading: "Ambiguity and multiple readings",
            body: "Context often does not fully determine meaning. Deliberate ambiguity lets writers suggest several interpretations at once — 'I could kill for a coffee' is hyperbole, not threat, in context. The best analyses acknowledge plausible alternative readings rather than forcing one meaning.",
          },
        ],
        keyFormulas: [
          { name: "Context triangle", statement: "Situation + audience + purpose = how language should be interpreted." },
          { name: "Context clues", statement: "Shared references, register, vocabulary and text conventions reveal context." },
          { name: "Ambiguity", statement: "Deliberate openness allowing multiple plausible interpretations." },
        ],
        workedExample: {
          problem: "A headline reads: 'Council praises 'courageous' decision.' Analyse how context affects interpretation.",
          solution: "The scare quotes around 'courageous' signal that the writer may doubt the word — possibly ironic. Without context (which decision? whose courage?), the headline is ambiguous. If the decision was controversial, the quotes suggest scepticism; if genuinely brave, they may just mark it as a quoted word. Context of the article's tone would resolve it. This shows how small punctuation choices interact with context.",
        },
      },
      questions: [
        {
          id: "el11-u4-context-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'context' include?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only the words on the page"
                    },
                    {
                              "id": "b",
                              "text": "The situation, audience and purpose surrounding the text"
                    },
                    {
                              "id": "c",
                              "text": "The writer's handwriting"
                    },
                    {
                              "id": "d",
                              "text": "The length of the text"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Context",
                              "statement": "Situation + audience + purpose around a text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Context is everything surrounding the text that shapes interpretation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The situation, audience and purpose surrounding the text.",
          "commonErrors": [
                    "Thinking context means only background knowledge (a)."
          ]
},
        },
        {
          id: "el11-u4-context-meaning-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how the same words 'I love it' could mean opposite things depending on context.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Context-dependent meaning",
                              "statement": "Interpretation depends on situation and tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In a genuine review, 'I love it' expresses praise.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "In a sarcastic text message or ironic review, the same words mean the opposite — context supplies the tone.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Literal praise in one context; sarcasm in another — meaning depends on situation and tone.",
          "commonErrors": [
                    "Assuming words have fixed meanings regardless of context."
          ]
},
        },
        {
          id: "el11-u4-context-meaning-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "A message without context",
          "author": "Written for Akademik Space",
          "source": "Text message",
          "text": "Don't be late. And bring the thing from before — you know the one."
},
          stem: "Explain how this message depends on shared context to be understood, and identify two contextual clues.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Contextual inference",
                              "statement": "Readers reconstruct missing information from shared knowledge."
                    },
                    {
                              "kind": "technique",
                              "name": "Deixis",
                              "statement": "'the thing' and 'the one' point to context not supplied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Don't be late' is incomplete — late for what? The event is not named.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'the thing from before — you know the one' relies entirely on shared memory; the referent is missing.",
                              "evidence": "the thing from before",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Clues: the informal register suggests a peer relationship; 'you know the one' assumes prior shared experience.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The message is only meaningful to someone who shares the writer's context — knowing the event and the 'thing'. Its informality and deixis signal an intimate relationship.",
          "commonErrors": [
                    "Saying the message is meaningless rather than context-dependent."
          ]
},
        },
        {
          id: "el11-u4-context-meaning-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two headlines for the same story",
          "author": "Written for Akademik Space",
          "source": "Newspaper headlines",
          "text": "HEADLINE A (tabloid): 'COUNCIL'S £2M BUNGLE!'\nHEADLINE B (broadsheet): 'Council approves new community centre after two-year review.'"
},
          stem: "Analyse how the two headlines present the same event differently and what this reveals about each paper's context, audience and purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Headline conventions",
                              "statement": "Word choice, tone and detail signal newspaper identity."
                    },
                    {
                              "kind": "skill",
                              "name": "Contextual analysis",
                              "statement": "Audience and purpose shape presentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Headline A uses emotive, accusatory lexis ('bungle') and a large sum to provoke outrage.",
                              "evidence": "COUNCIL'S 2M BUNGLE",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Headline B uses measured, factual phrasing ('approves', 'after two-year review') to inform calmly.",
                              "evidence": "approves new community centre",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Headline A targets a mass audience seeking drama; B targets readers wanting detail and balance.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Different purposes: A sells newspapers through sensation; B builds authority through restraint.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Synthesis: same event, opposite framings — context determines which 'truth' is foregrounded.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The tabloid headline sensationalises with emotive language for a mass audience; the broadsheet informs with measured detail for a different readership. Context shapes presentation.",
          "commonErrors": [
                    "Saying one is 'right' and the other 'wrong' rather than analysing framing."
          ]
},
        },
        {
          id: "el11-u4-context-meaning-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what is meant by 'deixis' and give one example.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how context changes the interpretation of the word 'fine' in these two sentences: 'The weather is fine.' / 'I'm fine, thanks.'",
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
                              "name": "Deixis",
                              "statement": "Words whose meaning depends on context ('this', 'here', 'that one')."
                    },
                    {
                              "kind": "skill",
                              "name": "Contextual interpretation",
                              "statement": "Same word, different meaning by situation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Deixis = words pointing to context (e.g. 'this', 'here', 'the one').",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Valid example given.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "'The weather is fine' — literal, neutral: weather is acceptable.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'I'm fine, thanks' — often a social formula masking true feelings; context of being asked after a setback changes meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The second is a stock response whose literal meaning is overridden by politeness convention.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Synthesis: 'fine' has a stable dictionary meaning but context supplies the pragmatic force.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Correct explanation of deixis with a valid example."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Partial explanation or missing/invalid example."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Analyses precisely how context shifts the interpretation of 'fine' in both sentences, with close reference to wording."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Notes a difference in meaning but analysis is superficial or only one sentence is addressed."
                    }
          ],
"finalAnswer": "(a) Deixis is context-dependent reference ('this', 'the one'). (b) 'Fine' is literal for weather but often a polite formula for people — context determines the real meaning.",
          "commonErrors": [
                    "Treating 'I'm fine' as always literal."
          ]
},
        },
        {
          id: "el11-u4-context-meaning-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on why context matters when interpreting texts. Use at least two examples to show how the same language can mean different things in different situations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Contextual understanding",
                              "statement": "Context shapes interpretation at every level."
                    },
                    {
                              "kind": "skill",
                              "name": "Exemplification",
                              "statement": "Concrete examples strengthen explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines context (situation, audience, purpose) clearly.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example 1: same phrase different meaning (sarcasm, politeness formulas).",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example 2: headlines/register showing how purpose shapes presentation.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Explains how readers use contextual clues (deixis, register, shared knowledge).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Acknowledges ambiguity and multiple readings.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Context — situation, audience and purpose — determines how language is interpreted; the same words can carry opposite meanings in different contexts.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Clear definition, two apt examples, coherent organisation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Definition and one example; some organisation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account with few examples."
                    }
          ],
          "commonErrors": [
                    "No concrete examples.",
                    "Confusing context with content."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u4-context-notes",
      title: "Idiolect, dialect and context — notes",
      summary: "Idiolect = personal, dialect = regional, sociolect = social. Context (situation + audience + purpose) shapes all interpretation.",
      sections: [
        { heading: "Variety checklist", body: "Idiolect: individual habits. Dialect: region (vocabulary + grammar + pronunciation). Accent: pronunciation only. Sociolect: social group." },
        { heading: "Context triangle", body: "Situation + audience + purpose = interpretation. Look for deixis, register and shared references." },
        { heading: "Exam tip", body: "When analysing character speech, name the dialect/sociolect feature, quote it, and explain what it reveals about identity or relationship." },
      ],
    },
  ],
};
