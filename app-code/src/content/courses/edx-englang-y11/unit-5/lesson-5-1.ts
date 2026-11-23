import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "el11-u5-lesson-5-1",
  code: "5-1",
  title: "Bias and Loaded Language in Media Texts",
  goal: "I CAN identify biased and loaded language in texts and explain how writers position readers through word choice.",
  standards: ["4EA1 AO2", "4EA1 AO3", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Bias", definition: "A writer's tendency to present one side of an issue favourably, often through selective or emotive language." },
    { term: "Loaded language", definition: "Words chosen for their emotional associations rather than neutral description." },
    { term: "Pejorative", definition: "A word with negative connotations, e.g. 'regime' vs 'government'." },
    { term: "Euphemism", definition: "A mild or indirect word used to soften an unpleasant reality, e.g. 'collateral damage'." },
    { term: "Spin", definition: "Presenting information in a way that favours a particular interpretation." },
    { term: "One-sided reporting", definition: "Covering an issue from a single viewpoint while omitting or minimising others." },
  ],
  concepts: [
    {
      id: "el11-u5-loaded-language",
      title: "Loaded language and emotive writing",
      skill: "Spot loaded, pejorative and euphemistic language and explain its persuasive effect on readers.",
      lesson: {
        sections: [
          {
            heading: "How loaded language works",
            body: "Every word carries **connotations** — emotional associations beyond its dictionary meaning. A writer creates bias by choosing words with strong connotations: 'regime' (negative) instead of 'government' (neutral), 'thugs' instead of 'protesters', 'freedom fighter' instead of 'insurgent'. The facts may be identical; the emotional colouring is not.",
          },
          {
            heading: "Pejoratives and euphemisms",
            body: "A **pejorative** loads a word negatively to attack a person or group. A **euphemism** does the opposite — it softens an unpleasant idea: 'downsizing' for 'sacking', 'collateral damage' for 'civilian deaths', 'passed away' for 'died'. Euphemism can be polite or can deliberately obscure a harsh reality.",
          },
          {
            heading: "Spotting bias in a sentence",
            body: "Ask: is this word neutral or loaded? What does it make the reader feel? Then check what is omitted — bias often lives in what a text does NOT say. 'The minister made the announcement' is neutral; 'The minister grandstandingly announced' adds judgement through a loaded adverb.",
          },
        ],
        keyFormulas: [
          { name: "Loaded language", statement: "Word choice carrying emotional connotations that steer the reader's response." },
          { name: "Pejorative", statement: "Negative-loaded word used to disparage: 'thug', 'extremist', 'so-called'." },
          { name: "Euphemism", statement: "Softening word that may obscure reality: 'downsizing', 'collateral damage'." },
        ],
        workedExample: {
          problem: "Compare: 'The crowd cheered as the troops withdrew.' vs 'The mob jeered as the soldiers fled.' Which is more loaded and why?",
          solution: "Both describe the same scene but with opposite connotations. 'Crowd' is neutral-positive; 'mob' suggests disorder and threat. 'Cheered' is positive; 'jeered' is hostile. 'Troops' is neutral-military; 'soldiers' humanises them. 'Withdrew' is neutral; 'fled' suggests cowardice. The second sentence loads every noun and verb to make the soldiers look weak and the crowd hostile — a classic biased presentation.",
        },
      },
      questions: [
        {
          id: "el11-u5-loaded-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a PEJORATIVE term for a government?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "administration"
                    },
                    {
                              "id": "b",
                              "text": "regime"
                    },
                    {
                              "id": "c",
                              "text": "cabinet"
                    },
                    {
                              "id": "d",
                              "text": "leadership"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pejorative",
                              "statement": "A word with negative connotations used to disparage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Regime' carries hostile connotations; the others are relatively neutral.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** regime.",
          "commonErrors": [
                    "Choosing a formal but neutral term (a, c)."
          ]
},
        },
        {
          id: "el11-u5-loaded-language-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'loaded language' and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Loaded language",
                              "statement": "Word choice carrying emotional associations beyond literal meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines loaded language as emotionally coloured word choice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Valid example, e.g. 'thug' for protester or 'downsizing' for sacking.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Loaded language = words chosen for emotional effect; e.g. 'so-called expert'.",
          "commonErrors": [
                    "Confusing loaded language with formal/informal register."
          ]
},
        },
        {
          id: "el11-u5-loaded-language-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two reports on the same protest",
          "author": "Written for Akademik Space",
          "source": "Comparative news extracts",
          "text": "EXTRACT A: 'A large, peaceful demonstration gathered in the city centre to voice concerns about the new development.'\nEXTRACT B: 'A mob of activists descended on the city centre to disrupt the new development.'"
},
          stem: "Identify the loaded words in Extract B and explain the effect of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loaded lexis",
                              "statement": "Word choice steers emotional response."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": " contrasting neutral and loaded presentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Mob' replaces 'demonstration' — suggests disorder, violence, loss of control.",
                              "evidence": "A mob of activists",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Descended on' suggests invasion/aggression; 'disrupt' suggests harm rather than 'voice concerns'.",
                              "evidence": "descended on the city centre",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall effect: identical event framed as threatening rather than legitimate expression of concern.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "'Mob', 'descended' and 'disrupt' load the extract negatively, turning a peaceful demonstration into a threatening mob action.",
          "commonErrors": [
                    "Identifying words without explaining their connotations."
          ]
},
        },
        {
          id: "el11-u5-loaded-language-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how euphemism can be both polite and manipulative, using 'downsizing' and 'collateral damage' as examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Euphemism",
                              "statement": "A mild term softening an unpleasant reality."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative analysis",
                              "statement": "Weighing politeness against obfuscation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Euphemism replaces harsh words with mild ones to reduce discomfort.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Downsizing' politely reframes job losses — polite but also hides scale and impact.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "'Collateral damage' clinicalises civilian deaths in warfare — bureaucratic distance obscures human cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Polite use: 'passed away' softens grief; manipulative use: 'enhanced interrogation' for torture.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement: the effect depends on whether the euphemism serves the audience or hides the truth from them.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Euphemisms soften unpleasant realities — sometimes politely ('passed away'), sometimes manipulatively ('collateral damage') when they obscure the true scale of harm.",
          "commonErrors": [
                    "Only defining euphemism without evaluating."
          ]
},
        },
        {
          id: "el11-u5-loaded-language-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite 'The company sacked 200 workers' in two different loaded versions — one sympathetic to workers, one to the company.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how your word choices position the reader differently.",
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
                              "name": "Loaded rewriting",
                              "statement": "Synonym choice steers sympathy."
                    },
                    {
                              "kind": "skill",
                              "name": "Persuasive writing",
                              "statement": "Positioning readers through lexis."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Worker-sympathetic version, e.g. 'The company ruthlessly dumped 200 workers'.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Company-sympathetic version, e.g. 'The company streamlined its workforce, making 200 roles redundant'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Ruthlessly dumped' triggers anger at the company; 'streamlined/redundant' sounds corporate and inevitable.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Same facts, opposite emotional framing — demonstrating how loaded language creates bias.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Two genuinely different loaded versions that position the reader in clearly opposed ways."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Versions are barely different or not recognisably loaded."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains the positioning effect of the specific word choices in both versions."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Explanation is vague ('it sounds nicer') without analysing word choice."
                    }
          ],
"finalAnswer": "(a) E.g. 'ruthlessly dumped 200 workers' vs 'streamlined workforce with 200 redundancies'. (b) The first provokes sympathy for workers; the second distances and justifies the company.",
          "commonErrors": [
                    "Both versions equally loaded or equally neutral.",
                    "Not explaining the effect."
          ]
},
        },
        {
          id: "el11-u5-loaded-language-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words analysing how loaded language creates bias in a text. Use at least two examples of loaded words or phrases and explain their effect on the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loaded language",
                              "statement": "Emotional connotations steer reader response."
                    },
                    {
                              "kind": "skill",
                              "name": "Analytical writing",
                              "statement": "Coherent explanation with evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines loaded language/bias clearly.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example 1 with connotation explained.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example 2 with connotation explained.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains cumulative effect on reader's judgement.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Loaded language uses emotionally coloured words to steer readers toward a particular judgement, often by appealing to fear, sympathy or outrage.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Clear definition, two apt examples, effect well explained."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Examples present but effect partially explained."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account with few examples."
                    }
          ],
          "commonErrors": [
                    "Listing words without connotations.",
                    "No mention of reader effect."
          ]
},
        },
      ],
    },
    {
      id: "el11-u5-persuasive-techniques",
      title: "Persuasive techniques in media writing",
      skill: "Identify and analyse the rhetorical techniques writers use to persuade readers in journalism and opinion pieces.",
      lesson: {
        sections: [
          {
            heading: "The persuasion toolkit",
            body: "Writers persuade through: **rhetorical questions** ('Do we really want this?'), **rule of three** ('stronger, faster, smarter'), **direct address** ('you know what happens next'), **appeal to authority** ('experts agree'), **appeal to emotion** (fear, anger, hope) and **repetition** for emphasis. Each technique bypasses logic and works on feeling.",
          },
          {
            heading: "Statistics and authority",
            body: "Numbers and expert opinions make claims feel objective. '9 out of 10 dentists recommend' borrows credibility. Watch for: statistics without context ('crime rose 200%' from 1 to 3 incidents), unnamed 'experts', and cherry-picked studies. The technique is sound; the selection is biased.",
          },
          {
            heading: "Reading persuasion critically",
            body: "To analyse persuasion: name the technique, quote it, explain what emotion or reaction it targets, then evaluate whether it substitutes for evidence. A persuasive writer often tells you how to feel; a balanced writer shows you the facts and lets you decide.",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical question", statement: "A question asked for effect, not answer — guides reader to desired conclusion." },
          { name: "Rule of three", statement: "Grouping ideas in threes for memorability and rhythm." },
          { name: "Appeal to authority", statement: "Citing experts or statistics to borrow credibility." },
        ],
        workedExample: {
          problem: "Analyse: 'Do we really want another delay? The council says 'soon', but soon never comes. You deserve better — and so do our children.'",
          solution: "The rhetorical question 'Do we really want another delay?' positions the reader to answer 'no'. 'Soon never comes' uses repetition and cynicism to undermine the council. 'You deserve better' uses direct address and appeal to emotion (injustice). 'And so do our children' adds a rule-of-three-like extension to guilt-trip parents. Every technique targets feeling rather than presenting evidence — classic persuasive journalism.",
        },
      },
      questions: [
        {
          id: "el11-u5-persuasive-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a rhetorical question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A question the writer expects an answer to"
                    },
                    {
                              "id": "b",
                              "text": "A question asked for effect, guiding the reader to a conclusion"
                    },
                    {
                              "id": "c",
                              "text": "A question in a speech only"
                    },
                    {
                              "id": "d",
                              "text": "A question with no words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rhetorical question",
                              "statement": "Asked for effect, not answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The writer does not want an answer; the question implies the desired response.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** A question asked for effect, guiding the reader to a conclusion.",
          "commonErrors": [
                    "Thinking it requires a real answer (a)."
          ]
},
        },
        {
          id: "el11-u5-persuasive-techniques-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two persuasive techniques writers use in journalism or opinion pieces.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Persuasive techniques",
                              "statement": "Rhetorical devices that steer reader response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two valid techniques: rhetorical question, rule of three, direct address, appeal to authority/emotion, repetition.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Second valid technique.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "E.g. rhetorical questions and appeal to authority (or rule of three, direct address, repetition).",
          "commonErrors": [
                    "Listing techniques without naming them precisely."
          ]
},
        },
        {
          id: "el11-u5-persuasive-techniques-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "An opinion column opening",
          "author": "Written for Akademik Space",
          "source": "Newspaper column",
          "text": "'They promise change. They promise hope. They promise everything — except the one thing that matters: your future. Think about it. When did a politician last tell you the truth?'"
},
          stem: "Identify two persuasive techniques in this extract and explain their effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rule of three and rhetorical question",
                              "statement": "Repetition and questioning steer emotional response."
                    },
                    {
                              "kind": "skill",
                              "name": "Persuasion analysis",
                              "statement": "Explaining technique and target emotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rule of three: 'promise change... promise hope... promise everything' — rhythmic repetition builds momentum and cynicism.",
                              "evidence": "They promise change. They promise hope.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rhetorical question: 'When did a politician last tell you the truth?' — direct address forces reader to agree implicitly.",
                              "evidence": "When did a politician last tell you the truth?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: both target distrust and anger, positioning the reader against politicians before evidence is offered.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The rule of three creates rhythmic cynicism; the rhetorical question uses direct address to make readers complicit in the writer's distrust of politicians.",
          "commonErrors": [
                    "Naming techniques without explaining effect."
          ]
},
        },
        {
          id: "el11-u5-persuasive-techniques-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A campaign leaflet",
          "author": "Written for Akademik Space",
          "source": "Political leaflet",
          "text": "'Independent surveys show 78% of residents support the new cycle lanes. Experts agree: safer streets mean healthier communities. Don't let this opportunity slip away. Your street. Your choice. Your future.'"
},
          stem: "Analyse how this leaflet uses authority, statistics and direct address to persuade, and evaluate whether these techniques substitute for evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Appeal to authority",
                              "statement": "Citing surveys and experts borrows credibility."
                    },
                    {
                              "kind": "skill",
                              "name": "Critical evaluation",
                              "statement": "Distinguishing technique from evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Independent surveys show 78%' uses statistics for apparent objectivity — but the survey's independence is unverifiable.",
                              "evidence": "Independent surveys show 78%",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Experts agree' invokes unnamed authority — no sources given, no dissent acknowledged.",
                              "evidence": "Experts agree",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rule of three + direct address: 'Your street. Your choice. Your future.' — personalises stakes and pressures action.",
                              "evidence": "Your street. Your choice. Your future.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Don't let this opportunity slip away' creates urgency/FOMO.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement: techniques create impression of evidence without providing verifiable proof — classic persuasive substitution.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The leaflet borrows credibility through unverifiable statistics and unnamed experts, then personalises with direct address and urgency — technique substituting for evidence.",
          "commonErrors": [
                    "Accepting statistics at face value.",
                    "Not evaluating whether evidence is real."
          ]
},
        },
        {
          id: "el11-u5-persuasive-techniques-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the persuasive technique in 'Your street. Your choice. Your future.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how a writer could use the SAME facts to persuade FOR and AGAINST a policy, using different techniques.",
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
                              "name": "Rule of three",
                              "statement": "Tricolon for rhythm and memorability."
                    },
                    {
                              "kind": "skill",
                              "name": "Framing",
                              "statement": "Same facts, different persuasive packaging."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rule of three (tricolon) with direct address.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "FOR version: positive statistics, expert quotes, aspirational language.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "AGAINST version: same numbers framed as costs/risks, emotive anecdotes, fear appeals.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Explains that technique selection reveals the writer's stance, not the facts' neutrality.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example given of at least one specific technique difference.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Correctly identifies the technique (tricolon/imperative slogan pattern)."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Identifies a technique inaccurately or too vaguely."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Uses the same facts to build two genuinely opposed persuasive cases, with clear explanation of the framing."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Attempts both sides but one is weak, or the framing explanation is missing."
                    }
          ],
"finalAnswer": "(a) Rule of three with direct address. (b) Same statistics can be framed positively (aspiration, authority) or negatively (cost, fear) — technique reveals bias.",
          "commonErrors": [
                    "Only describing one side.",
                    "No specific technique named."
          ]
},
        },
        {
          id: "el11-u5-persuasive-techniques-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words analysing how a writer uses persuasive techniques to influence readers. Name at least three techniques, explain what each does, and evaluate whether they strengthen or weaken the argument.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Persuasive devices",
                              "statement": "Rhetorical tools that steer emotion and judgement."
                    },
                    {
                              "kind": "skill",
                              "name": "Critical analysis",
                              "statement": "Evaluating technique vs evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three or more techniques identified and named.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each technique's effect explained.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evaluation: do techniques persuade or manipulate?",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Persuasive techniques (rhetorical questions, rule of three, appeals to authority/emotion, direct address) steer readers through feeling rather than evidence; their effectiveness depends on whether they supplement or substitute for proof.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Three techniques well explained and evaluated."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Techniques identified with partial evaluation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Few techniques, little evaluation."
                    }
          ],
          "commonErrors": [
                    "Listing without effect.",
                    "No evaluation of effectiveness."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u5-bias-notes",
      title: "Bias and persuasion — notes",
      summary: "Loaded language, pejoratives, euphemisms and rhetorical techniques all steer readers emotionally. Bias lives in word choice AND omission.",
      sections: [
        { heading: "Key terms", body: "Bias, loaded language, pejorative, euphemism, spin, one-sided reporting." },
        { heading: "Techniques", body: "Rhetorical questions, rule of three, direct address, appeal to authority, statistics without context." },
        { heading: "Exam tip", body: "Name the technique, quote it, explain the emotion it targets, then evaluate whether evidence supports it." },
      ],
    },
  ],
};
