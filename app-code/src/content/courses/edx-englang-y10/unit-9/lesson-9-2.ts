import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "el10-u9-lesson-9-2",
  code: "9-2",
  title: "Narrative Voice and Tone",
  goal: "I CAN analyse narrative voice, perspective and tone, including how tone shifts across a text.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 Paper 2 Section A", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Narrative voice", definition: "The distinctive personality and style through which a story is told." },
    { term: "First-person narration", definition: "The narrator is a character in the story, speaking as ‘I’." },
    { term: "Third-person limited", definition: "An outside narrator who sees events through one character’s perceptions." },
    { term: "Unreliable narrator", definition: "A narrator whose judgement or honesty the reader is led to question." },
    { term: "Tone", definition: "The writer’s or narrator’s attitude towards the subject, conveyed through word choice." },
    { term: "Tone shift", definition: "A deliberate change in attitude or mood at a structural turning point." },
  ],
  concepts: [
    {
      id: "el10-u9-voice-perspective",
      title: "Narrative voice and perspective",
      skill: "Analyse how first-person voice, word choice and naivety shape character and reader response.",
      lesson: {
        sections: [
          {
            heading: "What voice reveals",
            body: "**Narrative voice** is the personality of the telling. A child narrator, like the boy in ‘A Matter of Principle’, uses simple logic (‘I have standards’), misreads adult emotion, and is funny without meaning to be. Voice is built from **diction** (word choice), register and what the narrator notices — a jealous child notices the dress cost ‘more than our car’.",
          },
          {
            heading: "Perspective and reliability",
            body: "**First-person** narration limits us to what ‘I’ knows and feels — intimate but potentially **unreliable**. The boy insists he is not sulking while his actions (the kept pebble) suggest otherwise. Ask: what does the narrator fail to see? What do their words reveal that they don’t intend? The gap between what a narrator says and what the text shows is often where meaning lives.",
          },
          {
            heading: "Free indirect style and irony",
            body: "Writers often blend a character’s voice with the narrator’s commentary, creating **irony** — the boy’s solemn ‘It is a matter of principle, really’ is funny because we see through him. Detecting irony means noticing when the tone doesn’t match the situation. The gap between surface statement and implied meaning is a favourite examination target.",
          },
        ],
        keyFormulas: [
          { name: "Narrative voice", statement: "The personality of the telling, built from word choice, register and what the narrator notices." },
          { name: "Unreliable narrator", statement: "A narrator whose account the reader is led to question; meaning hides in the gaps." },
          { name: "Irony", statement: "A gap between what is said and what is meant; often created by a naive or pompous voice." },
        ],
        workedExample: {
          problem: "How does the first-person voice in ‘A Matter of Principle’ create humour while revealing the narrator’s true feelings?",
          solution: "The boy adopts a mock-formal register — ‘It is a matter of principle, really’ — and judges adults for crying, which is funny because his own standards are childish. Yet the voice betrays him: he notices the dress cost, keeps the childhood pebble ‘next to my hands’, and ends with the quiet admission ‘Still.’ The humour and the hidden sadness come from the same voice — we laugh at him while sympathising, which is exactly what a skilled first-person narrator achieves.",
        },
      },
      questions: [
        {
          id: "el10-u9-voice-persp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "A Matter of Principle",
          "author": "Written for Akademik Space",
          "source": "First-person narrative extract",
          "text": "I want it recorded that I did not cry at my sister’s wedding. It is a matter of principle, really. Parents and grandparents cry; I am only twelve, and I have standards. I stood at the back of the church with my hands in my pockets and watched her walk down the aisle in a dress that cost more than our car.\n\nTom kissed her at the altar and I decided, right there, that I would never be kissed at an altar or wear a white dress or stand at the back of anything ever again. Adults make a terrible fuss about these things. They weep and hug and say ‘so proud’, as if pride were a substance you could catch.\n\nMy father caught my eye across the congregation and smiled in the apologetic way he smiles when I sulk. I looked away. There is no point explaining to a grown-up that I am not sulking. You might as well explain the tide to the sea.\n\nStill. I did keep the blue pebble she gave me when we were six, and I have it in my pocket now, next to my hands."
},
          stem: "Which narrative perspective does the extract use, and how can you tell?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Third-person omniscient — the narrator knows everyone’s thoughts."
                    },
                    {
                              "id": "b",
                              "text": "First-person — the narrator speaks as ‘I’ and is a character in the events."
                    },
                    {
                              "id": "c",
                              "text": "Second-person — the narrator addresses the reader as ‘you’."
                    },
                    {
                              "id": "d",
                              "text": "Epistolary — the extract is a letter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "First-person narration",
                              "statement": "The narrator is a participant speaking as ‘I’; limited to their knowledge and feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phrases like ‘I did not cry’ and ‘my sister’s wedding’ show a character narrating their own experience.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** First-person: the boy narrates as ‘I’ and is present at the wedding.",
          "commonErrors": [
                    "Choosing (a): we only know what the boy knows; his father’s thoughts are inferred, not stated."
          ]
},
        },
        {
          id: "el10-u9-voice-persp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "A Matter of Principle",
          "author": "Written for Akademik Space",
          "source": "First-person narrative extract",
          "text": "I want it recorded that I did not cry at my sister’s wedding. It is a matter of principle, really. Parents and grandparents cry; I am only twelve, and I have standards. I stood at the back of the church with my hands in my pockets and watched her walk down the aisle in a dress that cost more than our car.\n\nTom kissed her at the altar and I decided, right there, that I would never be kissed at an altar or wear a white dress or stand at the back of anything ever again. Adults make a terrible fuss about these things. They weep and hug and say ‘so proud’, as if pride were a substance you could catch.\n\nMy father caught my eye across the congregation and smiled in the apologetic way he smiles when I sulk. I looked away. There is no point explaining to a grown-up that I am not sulking. You might as well explain the tide to the sea.\n\nStill. I did keep the blue pebble she gave me when we were six, and I have it in my pocket now, next to my hands."
},
          stem: "Give two details that show the narrator is a child.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence for character",
                              "statement": "Support every point about character with a precise detail from the text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "He states his age directly.",
                              "evidence": "I am only twelve",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "He still treasures a childhood keepsake and stands with ‘hands in my pockets’ — childlike body language.",
                              "evidence": "the blue pebble she gave me when we were six",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "He is twelve; he keeps a pebble from childhood; he stands with his hands in his pockets.",
          "commonErrors": [
                    "Inferring he is ‘upset’ without quoting a detail that proves his age."
          ]
},
        },
        {
          id: "el10-u9-voice-persp-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "A Matter of Principle",
          "author": "Written for Akademik Space",
          "source": "First-person narrative extract",
          "text": "I want it recorded that I did not cry at my sister’s wedding. It is a matter of principle, really. Parents and grandparents cry; I am only twelve, and I have standards. I stood at the back of the church with my hands in my pockets and watched her walk down the aisle in a dress that cost more than our car.\n\nTom kissed her at the altar and I decided, right there, that I would never be kissed at an altar or wear a white dress or stand at the back of anything ever again. Adults make a terrible fuss about these things. They weep and hug and say ‘so proud’, as if pride were a substance you could catch.\n\nMy father caught my eye across the congregation and smiled in the apologetic way he smiles when I sulk. I looked away. There is no point explaining to a grown-up that I am not sulking. You might as well explain the tide to the sea.\n\nStill. I did keep the blue pebble she gave me when we were six, and I have it in my pocket now, next to my hands."
},
          stem: "Explain how the narrator’s voice creates humour in the extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mock-formal register",
                              "statement": "A child borrowing adult solemnity for trivial things creates comic gap."
                    },
                    {
                              "kind": "technique",
                              "name": "Hyperbole and bathos",
                              "statement": "Exaggeration followed by an anticlimax produces humour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The mock-formal ‘It is a matter of principle, really’ treats a childish sulk as a legal case.",
                              "evidence": "It is a matter of principle, really",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The hyperbole that the dress ‘cost more than our car’ is a child’s measure of adult expense.",
                              "evidence": "a dress that cost more than our car",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The absurd comparison — explaining ‘the tide to the sea’ — mocks adult incomprehension of childish logic.",
                              "evidence": "explain the tide to the sea",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The bathos of the ending — a grand declaration followed by a pebble in a pocket — deflates the pose and lands the humour gently.",
                              "evidence": "I have it in my pocket now, next to my hands",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Humour comes from the gap between the boy’s solemn adult register and his childish concerns: mock-legal language, hyperbolic comparisons, an absurd simile, and a deflating pebble ending.",
          "commonErrors": [
                    "Saying ‘it is funny’ without identifying the specific voice technique."
          ]
},
        },
        {
          id: "el10-u9-voice-persp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A Matter of Principle",
          "author": "Written for Akademik Space",
          "source": "First-person narrative extract",
          "text": "I want it recorded that I did not cry at my sister’s wedding. It is a matter of principle, really. Parents and grandparents cry; I am only twelve, and I have standards. I stood at the back of the church with my hands in my pockets and watched her walk down the aisle in a dress that cost more than our car.\n\nTom kissed her at the altar and I decided, right there, that I would never be kissed at an altar or wear a white dress or stand at the back of anything ever again. Adults make a terrible fuss about these things. They weep and hug and say ‘so proud’, as if pride were a substance you could catch.\n\nMy father caught my eye across the congregation and smiled in the apologetic way he smiles when I sulk. I looked away. There is no point explaining to a grown-up that I am not sulking. You might as well explain the tide to the sea.\n\nStill. I did keep the blue pebble she gave me when we were six, and I have it in my pocket now, next to my hands."
},
          stem: "Analyse how the writer presents the narrator’s feelings towards his sister’s wedding — are they simply jealousy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Surface versus implied meaning",
                              "statement": "What a narrator claims and what their details reveal can differ; the gap is meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "On the surface he resents the fuss: adults ‘make a terrible fuss’ and he refuses to cry.",
                              "evidence": "Adults make a terrible fuss about these things",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But ‘I would never… stand at the back of anything ever again’ hints at fear of being left behind as she grows up.",
                              "evidence": "stand at the back of anything ever again",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "His insistence that he is ‘not sulking’ is undercut by his own behaviour — looking away, keeping the pebble.",
                              "evidence": "There is no point explaining to a grown-up that I am not sulking",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The father’s ‘apologetic’ smile shows adults recognise the sulk he denies — dramatic irony deepens the pathos.",
                              "evidence": "smiled in the apologetic way he smiles when I sulk",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final ‘Still.’ admits what the whole voice has denied: he is moved. Feelings are layered, not simple jealousy.",
                              "evidence": "Still. I did keep the blue pebble",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Not simply jealousy: the surface resentment masks fear of being left behind and quiet grief at his sister growing up. The voice denies emotion while every detail — the pebble, the sulk, the final ‘Still.’ — betrays it.",
          "commonErrors": [
                    "Accepting the narrator’s claim at face value.",
                    "Calling it ‘jealousy’ without analysing the layers beneath."
          ]
},
        },
        {
          id: "el10-u9-voice-persp-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "A Matter of Principle",
          "author": "Written for Akademik Space",
          "source": "First-person narrative extract",
          "text": "I want it recorded that I did not cry at my sister’s wedding. It is a matter of principle, really. Parents and grandparents cry; I am only twelve, and I have standards. I stood at the back of the church with my hands in my pockets and watched her walk down the aisle in a dress that cost more than our car.\n\nTom kissed her at the altar and I decided, right there, that I would never be kissed at an altar or wear a white dress or stand at the back of anything ever again. Adults make a terrible fuss about these things. They weep and hug and say ‘so proud’, as if pride were a substance you could catch.\n\nMy father caught my eye across the congregation and smiled in the apologetic way he smiles when I sulk. I looked away. There is no point explaining to a grown-up that I am not sulking. You might as well explain the tide to the sea.\n\nStill. I did keep the blue pebble she gave me when we were six, and I have it in my pocket now, next to my hands."
},
          stem: "Read ‘A Matter of Principle’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What does the narrator keep in his pocket, and what might it symbolise?",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the comparison ‘explain the tide to the sea’.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how the first-person voice shapes the reader’s response to the narrator’s feelings.",
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
                              "name": "Symbolic object",
                              "statement": "A small kept object can carry emotional meaning the narrator will not state."
                    },
                    {
                              "kind": "skill",
                              "name": "Voice and reader response",
                              "statement": "Judge how narrative voice controls sympathy, humour and judgement."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "He keeps the blue pebble his sister gave him when they were six.",
                              "evidence": "the blue pebble she gave me when we were six",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "It symbolises their childhood bond — the relationship he fears losing as she marries and grows up.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The simile is absurd — the tide cannot be explained to the sea — which mocks the futility of explaining childish feelings to adults.",
                              "evidence": "explain the tide to the sea",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It flatters the reader’s superior understanding while keeping the boy’s voice endearingly wrong-headed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The naive voice makes us laugh at him, which lowers our guard before the pathos of the ending.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Because we see through his denial, we sympathise more than if an adult narrator described his sulking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The voice’s gaps — claim versus detail — invite the reader to interpret, deepening engagement.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, relevant analysis with some well-chosen references to the text; points are developed but not always fully synthesised."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple or partial comment on the feature; limited development or few relevant references."
                    }
          ],
          "finalAnswer": "(a) The blue pebble from childhood; it symbolises the sisterly bond he fears losing. (b) The absurd simile mocks the futility of explaining childish feelings to adults and flatters the reader. (c) The voice disarms us with humour, then earns sympathy through its gaps between claim and detail — highly effective.",
          "commonErrors": [
                    "In (a) stating what the pebble is without interpreting its symbolism.",
                    "In (b) describing the simile literally instead of its comic function."
          ]
},
        },
        {
          id: "el10-u9-voice-persp-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "A Matter of Principle",
          "author": "Written for Akademik Space",
          "source": "First-person narrative extract",
          "text": "I want it recorded that I did not cry at my sister’s wedding. It is a matter of principle, really. Parents and grandparents cry; I am only twelve, and I have standards. I stood at the back of the church with my hands in my pockets and watched her walk down the aisle in a dress that cost more than our car.\n\nTom kissed her at the altar and I decided, right there, that I would never be kissed at an altar or wear a white dress or stand at the back of anything ever again. Adults make a terrible fuss about these things. They weep and hug and say ‘so proud’, as if pride were a substance you could catch.\n\nMy father caught my eye across the congregation and smiled in the apologetic way he smiles when I sulk. I looked away. There is no point explaining to a grown-up that I am not sulking. You might as well explain the tide to the sea.\n\nStill. I did keep the blue pebble she gave me when we were six, and I have it in my pocket now, next to my hands."
},
          stem: "Read ‘A Matter of Principle’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three details that show how adults react to the wedding versus how the boy reacts.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the writer contrasts the child’s perspective with the adults’ emotions.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the voice creates a convincing child narrator.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Juxtaposed perspectives",
                              "statement": "Placing child logic beside adult emotion heightens both."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluating voice",
                              "statement": "Judge whether diction, naivety and gaps make the narrator believable."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Adults weep and hug and say ‘so proud’ — openly emotional.",
                              "evidence": "They weep and hug and say ‘so proud’",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The father smiles apologetically, showing adult awareness of the boy’s sulk.",
                              "evidence": "smiled in the apologetic way he smiles when I sulk",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The boy refuses to cry, claims standards, and keeps his feelings secret.",
                              "evidence": "I did not cry at my sister’s wedding",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Adults express feeling openly; the child expresses it through denial — the contrast defines both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The father’s knowing smile shows adults see through the boy, creating gentle dramatic irony.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The boy measures the wedding in childish units — cost, position at the back — against adult sentiment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The voice is convincing because the diction is authentically childish — ‘standards’, ‘terrible fuss’.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Misreading adult emotion (‘not sulking’) is exactly how a twelve-year-old would think.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Physical childlikeness — hands in pockets, keeping a pebble — grounds the voice in a body.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The gaps between claim and detail create the pathos without breaking the child’s limited understanding.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The bathos structure — solemn claim, childish grievance, quiet admission — mirrors a child’s emotional logic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall judgement: the voice is highly convincing and effective.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, well-argued evaluation sustained across the whole text; judgements are precise and supported by well-chosen references."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation with some developed points and appropriate references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation; descriptive or partly relevant comments."
                    }
          ],
          "finalAnswer": "(a) Adults weep, hug and say ‘so proud’; the father smiles knowingly; the boy denies crying and keeps his feelings hidden. (b) Open adult emotion contrasts with the child’s denial, and the father’s smile creates dramatic irony. (c) The voice convinces through childish diction, misread emotions, physical detail and claim-versus-revelation gaps — a highly effective child narrator.",
          "commonErrors": [
                    "In (a) listing reactions without tying them to the contrast.",
                    "In (c) praising the voice without specific evidence of how it convinces."
          ]
},
        },
      ],
    },
    {
      id: "el10-u9-tone-shifts",
      title: "Tone and shifts in tone",
      skill: "Identify a writer’s tone and analyse how and why it shifts at turning points.",
      lesson: {
        sections: [
          {
            heading: "Identifying tone",
            body: "**Tone** is the writer’s attitude towards the subject — wonder, fear, tenderness, anger, irony. It lives in word choice and imagery, not in labels. In ‘The Storm’, the opening is almost playful: the sky is ‘only interesting’, clouds turn ‘slow as milk in tea’. Tone is often mixed — beauty and menace coexist before the wind arrives.",
          },
          {
            heading: "Shifts and turning points",
            body: "Tone shifts are usually signalled by structural markers: ‘At first… Then…’, a paragraph break, a change in sentence length. The shift from wonder to fear in ‘The Storm’ happens at ‘Then the wind arrived. It did not arrive so much as declare itself.’ Ask: what causes the shift (the wind), how is it marked (short sentence, personification), and what does it do to the reader?",
          },
          {
            heading: "Resolving tone",
            body: "The strongest extracts resolve their tone — fear gives way to relief or reflection. In ‘The Storm’, the ending moves to gratitude: ‘I have never been so glad of a puddle.’ The bathos of the puddle after a life-threatening storm is deliberate; it shows the narrator’s relief through a small, concrete image rather than a statement. Track the full arc: how does the ending reframe the earlier tension?",
          },
        ],
        keyFormulas: [
          { name: "Tone", statement: "The writer’s attitude towards the subject, conveyed through word choice and imagery." },
          { name: "Tone shift", statement: "A deliberate change in attitude, usually marked by structural cues such as ‘then’, a paragraph break or a change in pace." },
          { name: "Bathos", statement: "An anticlimax from the elevated to the mundane; often used to release tension or show relief." },
        ],
        workedExample: {
          problem: "Trace the tone shifts in ‘The Storm’ and explain what causes each.",
          solution: "The tone opens in calm wonder — ‘only interesting’, ‘slow as milk in tea’ — as the children watch the clouds. It shifts to fear when ‘the wind arrived’, marked by the short declarative sentence and the wind’s personified ‘declaration’; the calmest thought of dying shows terror disguised as calm. It resolves into relief and gratitude — ‘never been so glad of a puddle’ — once the storm passes, with the mundane puddle releasing the tension through bathos.",
        },
      },
      questions: [
        {
          id: "el10-u9-tone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "How does the writer’s tone change across the extract?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From anger to calm throughout."
                    },
                    {
                              "id": "b",
                              "text": "From wonder and interest, to fear, to relief and gratitude."
                    },
                    {
                              "id": "c",
                              "text": "It stays fearful from beginning to end."
                    },
                    {
                              "id": "d",
                              "text": "From boredom to excitement."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone arc",
                              "statement": "Tone often moves through stages — here interest, fear, relief — each tied to a turning point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening is curious and aesthetic, the middle is terror, the ending is gratitude — a three-stage arc.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Wonder/interest → fear → relief and gratitude.",
          "commonErrors": [
                    "Choosing (c): the ending is explicitly relieved, not fearful."
          ]
},
        },
        {
          id: "el10-u9-tone-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Identify two moments where the tone shifts, naming the words or structures that signal each shift.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Signalling tone shifts",
                              "statement": "Shifts are marked by connectives, paragraph breaks and changes in pace or imagery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The first shift is marked by ‘Then the wind arrived’ — the connective ‘Then’ plus a short paragraph announces the turn to fear.",
                              "evidence": "Then the wind arrived",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The second shift is marked by the final paragraph’s images of rain, rainbow and the ‘glad’ puddle, releasing the fear into relief.",
                              "evidence": "I have never been so glad of a puddle",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Interest → fear is signalled by ‘Then the wind arrived’; fear → relief by the final images and ‘never been so glad of a puddle’.",
          "commonErrors": [
                    "Naming the shift without identifying the signalling words or structure."
          ]
},
        },
        {
          id: "el10-u9-tone-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Explain how the writer conveys fear without ever stating ‘I was afraid’.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Implied emotion",
                              "statement": "Writers show fear through paradox, sensory detail and behaviour rather than naming it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The paradox of thinking ‘quite calmly’ about dying shows fear so extreme it produces numbness.",
                              "evidence": "thinking, quite calmly, that we were going to die",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "‘The calmest thought I have ever had’ reinforces that the fear is expressed through its opposite.",
                              "evidence": "It was the calmest thought I have ever had",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The wind ‘declar[ing] itself’ gives the storm agency and menace, making it feel like a predator.",
                              "evidence": "It did not arrive so much as declare itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Losing the sound of their own voices — unable to tell shouting from whispering — conveys helplessness and sensory overwhelm.",
                              "evidence": "we could no longer tell whether we were shouting or whispering",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Fear is implied through paradox (calm thoughts of dying), personified menace (‘declare itself’) and sensory helplessness (losing their voices) — never stated outright.",
          "commonErrors": [
                    "Quoting ‘afraid’-adjacent words that do not exist in the text.",
                    "Listing techniques without explaining how each conveys fear."
          ]
},
        },
        {
          id: "el10-u9-tone-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Analyse how the final paragraph resolves the tension built up earlier in the extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Resolution through bathos",
                              "statement": "Releasing tension with a small, mundane image proves relief more powerfully than a statement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The storm passes ‘as quickly as it came’, mirroring its sudden arrival and restoring equilibrium.",
                              "evidence": "The storm passed as quickly as it came",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The transformed landscape — silver rain, trees ‘pointing in every direction’ — shows nature’s violence settling into strange beauty.",
                              "evidence": "the trees pointing in every direction at once",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The rainbow ‘that belonged… to nobody’ suggests shared, almost communal relief.",
                              "evidence": "a rainbow that belonged, I think, to nobody",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The football rescued from the ditch quietly restores the boys’ ordinary world and their bond.",
                              "evidence": "My brother picked up my football",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The bathos of ‘glad of a puddle’ releases the accumulated tension and confirms the fear has passed.",
                              "evidence": "I have never been so glad of a puddle",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Resolution comes through mirrored speed, a beautified aftermath, shared symbolism (the rainbow), restored childhood (the football) and bathos (the puddle) — the tension dissolves into gratitude rather than a stated conclusion.",
          "commonErrors": [
                    "Saying the ending is ‘happy’ without analysing how the images do the work."
          ]
},
        },
        {
          id: "el10-u9-tone-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Read ‘The Storm’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two details describing the sky before the storm arrives.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the simile comparing the birds to stones.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the writer manages the shift from fear back to calm.",
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
                              "name": "Pathetic imagery",
                              "statement": "Ominous beauty before a storm creates dramatic irony — the reader senses danger the children do not."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluating transitions",
                              "statement": "Judge whether the tone shift is earned, marked and proportionate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The clouds turn ‘slow as milk in tea’, from white to the colour of a bruise.",
                              "evidence": "slow as milk in tea, from white to the colour of a bruise",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The light goes green at the edges while the birds drop like stones.",
                              "evidence": "the light going green at the edges",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The simile makes the birds’ fall abrupt and fatalistic, foreshadowing the storm’s violence.",
                              "evidence": "the birds dropping out of the sky like stones",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It injects unease into the beautiful scene — the calm is already poisoned by hints of death.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The shift is well-marked: the paragraph break and ‘Then the wind arrived’ announce the turn.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The return to calm is earned — the storm’s violence is established first, so relief feels real.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The bathos ending manages it memorably, though some may find the puddle anticlimax slightly too neat.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, relevant analysis with some well-chosen references to the text; points are developed but not always fully synthesised."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple or partial comment on the feature; limited development or few relevant references."
                    }
          ],
          "finalAnswer": "(a) Clouds turning ‘slow as milk in tea’ to bruise-colour; green-edged light; birds falling like stones. (b) The simile makes the fall fatalistic and foreshadows violence inside the beauty. (c) The shift is clearly signalled and proportionate; the bathos ending is effective though slightly neat.",
          "commonErrors": [
                    "In (b) describing the simile without its foreshadowing effect.",
                    "In (c) giving an unargued yes/no verdict."
          ]
},
        },
        {
          id: "el10-u9-tone-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Read ‘The Storm’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three chronological details showing how the storm develops.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the writer uses sound imagery in the storm paragraph.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the overall effect of the tone shifts on the reader.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound imagery",
                              "statement": "Describing what the storm does to sound conveys power through the senses."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluating tone",
                              "statement": "Judge how the arc of attitudes shapes the reader’s emotional experience."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "First the sky changes colour while the children watch.",
                              "evidence": "the clouds began to turn",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Then the wind ‘declare[s] itself’ and strips the street.",
                              "evidence": "It took the washing off our neighbour’s line",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Finally the storm passes, leaving silver rain and scattered trees.",
                              "evidence": "leaving the lane silver with rain",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The storm ‘took the sound of our own voices’ — noise becomes an instrument of erasure.",
                              "evidence": "it took the sound of our own voices",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The inability to tell shouting from whispering makes the reader feel the sensory chaos.",
                              "evidence": "whether we were shouting or whispering",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Earlier birds ‘screaming past the glass’ prefigures this loss of sound — the storm silences everything.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The curious opening lulls the reader, so the turn to fear hits harder — the shifts are engineered.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The paradox of calm terror keeps the reader inside the narrator’s stunned state.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The relief ending releases tension through bathos, giving an emotionally complete arc.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The tone shifts mirror the storm’s own curve — build, peak, pass — unifying form and feeling.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Because shifts are signalled clearly, the reader always knows where they stand emotionally.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall judgement: the tone shifts are highly effective in structuring the reader’s fear and relief.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, well-argued evaluation sustained across the whole text; judgements are precise and supported by well-chosen references."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation with some developed points and appropriate references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation; descriptive or partly relevant comments."
                    }
          ],
          "finalAnswer": "(a) Clouds darken while they watch; the wind strips the street; the storm passes leaving silver rain. (b) The storm erases their voices, making shouting indistinguishable from whispering — chaos felt through sound. (c) The lulling opening, stunned terror and bathos relief form a complete emotional arc that mirrors the storm itself — the tone shifts are the extract’s engine.",
          "commonErrors": [
                    "In (b) listing sounds without analysing the effect of losing them.",
                    "In (c) describing tone changes without judging their effect on the reader."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u9-l12-notes",
      title: "Narrative voice and tone — notes",
      summary: "Voice is built from diction and naivety; tone shifts are signalled structurally and resolve the text’s emotional arc.",
      sections: [
        { heading: "Key idea", body: "Analyse the gap between what a narrator claims and what their details reveal — irony and pathos live there." },
        { heading: "Exam technique", body: "For tone questions, name the attitude, find the structural signal of any shift, and judge whether the resolution earns its effect." },
      ],
    },
  ],
};
