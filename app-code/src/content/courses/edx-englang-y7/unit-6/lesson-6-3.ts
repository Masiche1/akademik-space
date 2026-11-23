import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "el7-u6-lesson-6-3",
  code: "6-3",
  title: "Comparing and Evaluating Texts",
  goal: "I CAN compare poems and evaluate interpretations of literary texts with evidence.",
  standards: ["Edexcel KS3 English Language — Reading: comparing texts", "Key Stage 3 reading: critical evaluation"],
  
  vocabulary: [
    { term: "Comparison", definition: "Identifying similarities and differences between texts." },
    { term: "Contrast", definition: "Highlighting differences between texts or ideas." },
    { term: "Interpretation", definition: "A personal reading of what a text means." },
    { term: "Evaluation", definition: "Judging the quality or effectiveness of a text or interpretation." },
    { term: "Evidence-based argument", definition: "A claim supported by quotations or textual details." },
  ],
  concepts: [
    {
      id: "el7-u6-comparing",
      title: "Comparing poems",
      skill: "Compare how different poems treat the same theme using comparative analysis.",
      lesson: {
        sections: [
          {
            heading: "How to compare",
            body: "Comparison isn't just listing features of each poem — it's analysing **how they differ in effect**.\n\nUse a **compare-contrast structure**:\n- **Similarities**: both use nature imagery, both have a volta\n- **Differences**: Poem A uses free verse (chaotic mood), Poem B uses sonnet form (ordered, formal mood)\n- **Effect**: the form difference mirrors the emotional difference — chaos vs control\n\nAlways link differences to meaning: 'While Poem A... Poem B...' shows you're comparing, not just describing.",
          },
          {
            heading: "Comparative analysis formula",
            body: "**Point about both**: 'Both poems explore loss.'\n**Difference**: 'Poem A uses...' vs 'Poem B uses...'\n**Effect**: 'This creates...' vs 'This creates...'\n\n**Example**: Both poems describe rain. Poem A: 'rain lashed the windows' (aggressive). Poem B: 'rain whispered on the roof' (gentle). Same subject, opposite connotation — the writers' attitudes differ completely.",
          },
        ],
        keyFormulas: [
          { name: "Compare-contrast", statement: "Both... but... while... — link differences to effect." },
          { name: "Comparative point", statement: "Similarity + difference + effect = real comparison." },
        ],
        workedExample: {
          problem: "Compare: 'Rain hammered the roof' vs 'Rain kissed the window'.",
          solution: "Both describe rain on a house. 'Hammered' = aggressive, violent (violence connotation). 'Kissed' = gentle, affectionate (tenderness). Same phenomenon, opposite emotional framing — one suggests threat, the other comfort.",
        },
      },
      questions: [
        {
          id: "el7-u6-cp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'comparing texts' mean in analysis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Listing features of each text separately"
                    },
                    {
                              "id": "b",
                              "text": "Identifying similarities and differences in effect"
                    },
                    {
                              "id": "c",
                              "text": "Choosing the better text"
                    },
                    {
                              "id": "d",
                              "text": "Summarising both texts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comparison",
                              "statement": "Similarities + differences + effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Real comparison links features to differing effects, not just lists.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Identifying similarities and differences in effect",
          "commonErrors": [
                    "Writing two separate descriptions."
          ]
},
        },
        {
          id: "el7-u6-cp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Compare the connotation of 'hammered' vs 'kissed' in: 'Rain hammered the roof' vs 'Rain kissed the window.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Connotation comparison",
                              "statement": "Same subject, different emotional framing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Hammered' = violent, aggressive — rain as attack.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Kissed' = gentle, affectionate — rain as tender.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Same rain, opposite attitudes — writers' perspectives differ.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Hammered = violent/threatening; kissed = gentle/tender — opposite attitudes to rain.",
          "commonErrors": [
                    "Saying both just describe rain."
          ]
},
        },
        {
          id: "el7-u6-cp-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "Rain A",
          "author": "Written for Akademik Space",
          "text": "Rain hammered the roof\nlike fists on a door.\nWe counted every drop\nas the storm roared."
},
          stem: "How does Poem A's form (short lines, harsh sounds) reinforce its aggressive tone?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Form-tone relationship",
                              "statement": "Structure mirrors meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short lines = clipped, urgent — mimics hammering.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "'hammered', 'fists', 'roared' = aggressive vocabulary and harsh consonants.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Form and content unite: the poem itself feels violent.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: reader experiences the storm's aggression physically.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Short clipped lines and harsh sounds physically enact the rain's aggression — form mirrors content.",
          "commonErrors": [
                    "Describing form without linking to tone."
          ]
},
        },
        {
          id: "el7-u6-cp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Rain B",
          "author": "Written for Akademik Space",
          "text": "Rain whispered on the windowpane,\na soft insistence, almost a prayer.\nWe watched the world dissolve\ninto silver threads of care."
},
          stem: "Compare this poem to 'Rain A' (which used 'hammered', 'fists', 'roared'). How do the writers' attitudes to rain differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Comparative analysis",
                              "statement": "Same subject, different connotation = different attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poem B uses gentle imagery: 'whispered', 'soft insistence', 'prayer'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poem A used violent imagery: 'hammered', 'fists', 'roared'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Attitude difference: B sees rain as comforting/spiritual; A sees it as threatening.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'Silver threads of care' vs 'storm roared' — tenderness vs violence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both describe rain but create opposite moods.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Poem A = rain as violence/threat; Poem B = rain as comfort/spirituality — opposite attitudes through connotation.",
          "commonErrors": [
                    "Comparing length or rhyme only."
          ]
},
        },
        {
          id: "el7-u6-cp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Rain B",
          "author": "Written for Akademik Space",
          "text": "Rain whispered on the windowpane,\na soft insistence, almost a prayer.\nWe watched the world dissolve\ninto silver threads of care."
},
          stem: "Write a comparative paragraph on how Poem A and Poem B treat the subject of rain differently.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one similarity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two differences in technique or tone.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain what the differences reveal about each writer's attitude.",
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
                              "name": "Comparative writing",
                              "statement": "Similarity + difference + attitude = comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similarity: both describe rain and use personification/metaphor.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Differences: A = harsh sounds/short lines/violence; B = soft sounds/flowing lines/tenderness.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Attitudes: A = fear/threat; B = comfort/spiritual peace.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Similarity identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No similarity.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Two differences identified.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Attitudes explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No attitude analysis.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Both personify rain; A = violent/threatening, B = gentle/spiritual — opposite attitudes.",
          "commonErrors": [
                    "Listing features without comparing."
          ]
},
        },
        {
          id: "el7-u6-cp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Rain B",
          "author": "Written for Akademik Space",
          "text": "Rain whispered on the windowpane,\na soft insistence, almost a prayer.\nWe watched the world dissolve\ninto silver threads of care."
},
          stem: "Write a full comparative analysis of 'Rain A' and 'Rain B'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify one similarity in technique.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse two differences in language and form.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how the differences create different reader responses.",
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
                              "name": "Full comparison",
                              "statement": "Similarity + differences + reader effect = complete comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similarity: both personify rain, both use sensory imagery.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Difference 1: A uses violent verbs/sounds ('hammered', 'roared'); B uses gentle ('whispered', 'soft').",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Difference 2: A = short clipped lines; B = flowing longer lines.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Reader response: A creates tension/fear; B creates calm/comfort — opposite effects from same subject.",
                              "marks": 3,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Similarity accurately identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial similarity.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No similarity.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Two differences analysed with evidence.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "One difference analysed.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Minimal differences.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No differences.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Reader responses compared and evaluated.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial evaluation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No evaluation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Both personify rain; A violent/short lines = fear, B gentle/flowing = comfort — same subject, opposite effects.",
          "commonErrors": [
                    "Describing poems separately instead of comparing."
          ]
},
        },
      ],
    },
    {
      id: "el7-u6-evaluating",
      title: "Evaluating interpretations",
      skill: "Evaluate a critical interpretation of a text using evidence and reasoning.",
      lesson: {
        sections: [
          {
            heading: "What is evaluation?",
            body: "Evaluation means **judging** — is this interpretation convincing? Does the evidence support the claim?\n\nAn evaluation isn't just 'I agree' or 'I disagree'. It weighs:\n- **Strength of evidence**: are quotations relevant and sufficient?\n- **Logical reasoning**: does the interpretation follow from the text?\n- **Alternative readings**: could the text mean something else?\n- **Overall judgement**: is the interpretation mostly right, partly right, or wrong?",
          },
          {
            heading: "Evaluation structure",
            body: "**Point**: 'This interpretation suggests...'\n**Evidence**: 'The line \"...\" supports this because...'\n**Judgement**: 'This is convincing/not convincing because...'\n\n**Example**: Claim: 'The poem is about death.' Evidence: 'fading, fading down' suggests decline. Judgement: Partly convincing — the imagery supports loss, but it could also be about change or the passage of time. The interpretation is plausible but not definitive.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "Judge interpretation by evidence strength and reasoning." },
          { name: "Evidence-based judgement", statement: "Quote + reasoning + verdict." },
        ],
        workedExample: {
          problem: "Interpretation: 'The poem is mainly about loneliness.' Evaluate.",
          solution: "Partially convincing — 'whispered', 'soft insistence' create isolation, but 'threads of care' suggests connection. The poem balances loneliness and comfort; 'mainly about loneliness' overstates one aspect.",
        },
      },
      questions: [
        {
          id: "el7-u6-ev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluating an interpretation' mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Agreeing with it"
                    },
                    {
                              "id": "b",
                              "text": "Judging whether it's convincing based on evidence"
                    },
                    {
                              "id": "c",
                              "text": "Summarising the text"
                    },
                    {
                              "id": "d",
                              "text": "Writing your own poem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Evaluation",
                              "statement": "Judging interpretation by evidence and reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluation = weighing evidence and reasoning, not just agreeing/disagreeing.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Judging whether it's convincing based on evidence",
          "commonErrors": [
                    "Confusing evaluation with summary."
          ]
},
        },
        {
          id: "el7-u6-ev-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What should you consider when evaluating an interpretation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation criteria",
                              "statement": "Evidence, reasoning, alternatives, judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength of evidence — are quotes relevant?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Logical reasoning — does it follow?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Alternative readings — could it mean something else?",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Evidence strength, logical reasoning, alternative readings, overall judgement.",
          "commonErrors": [
                    "Only saying 'I agree/disagree'."
          ]
},
        },
        {
          id: "el7-u6-ev-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "A critic says: 'This poem is mainly about death.' Evaluate this interpretation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Critical evaluation",
                              "statement": "Weigh evidence for and against."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence for: 'fading, fading down', 'sleep', 'blanket brown' suggest decline/death.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evidence against: 'memory', 'whispers', 'breeze' suggest gentle transition, not death.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Judgement: 'death' is too strong — poem suggests change/seasonal cycle, not mortality.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Verdict: partially convincing but overstated.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Partially convincing — imagery supports decline, but 'memory' and 'whispers' suggest gentle change, not death.",
          "commonErrors": [
                    "Accepting or rejecting without evidence."
          ]
},
        },
        {
          id: "el7-u6-ev-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "Evaluate this interpretation: 'The poem is about the poet's grief at losing a loved one.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluation with evidence",
                              "statement": "Test interpretation against textual evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Some support: 'memory', 'fading' could suggest loss.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But: poem focuses on nature/seasons, no human loss mentioned.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Garden sleeps', 'summer's voice' = natural cycle, not personal grief.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Judgement: interpretation imposes personal grief not supported by text — poem is about seasonal change, not bereavement.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Not convincing — the poem describes natural seasonal change; no evidence of personal grief or a lost loved one.",
          "commonErrors": [
                    "Finding vague support and accepting the claim."
          ]
},
        },
        {
          id: "el7-u6-ev-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "Evaluate two interpretations: (a) 'The poem is about autumn' (b) 'The poem is about the passage of time.' Which is stronger and why?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Evaluate interpretation (a).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate interpretation (b).",
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
                              "name": "Comparative evaluation",
                              "statement": "Weigh which interpretation fits evidence better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'About autumn' — accurate but superficial; describes subject not meaning.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Doesn't capture the emotional/philosophical depth.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'Passage of time' — deeper; 'memory', 'fading', 'sleep' all suggest time's passage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Stronger: captures theme beyond literal subject.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Interpretation (a) evaluated with evidence.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial evaluation.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No evaluation.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Interpretation (b) evaluated with evidence.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial evaluation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No evaluation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(b) is stronger — 'passage of time' captures the poem's deeper theme; 'about autumn' is literal but shallow.",
          "commonErrors": [
                    "Choosing the simpler interpretation."
          ]
},
        },
        {
          id: "el7-u6-ev-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "Write a full evaluation of this interpretation: 'The poem celebrates the beauty of autumn while acknowledging its sadness.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find evidence supporting 'beauty'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find evidence supporting 'sadness'.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give your overall judgement on the interpretation.",
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
                              "name": "Balanced evaluation",
                              "statement": "Evidence for both sides + judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beauty evidence: 'whispers', 'silver', 'blanket brown', 'memory' — gentle, aesthetic imagery.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sadness evidence: 'fading, fading down', 'sleep', 'goodbye' implied by seasonal end.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Judgement: interpretation is convincing — poem balances aesthetic appreciation with melancholy.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    },
                    {
                              "reasoning": "Nuance: 'celebrates' might be too strong; poem is more contemplative than celebratory.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Beauty evidence found with quotes.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial evidence.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No evidence.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Sadness evidence found with quotes.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial evidence.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No evidence.",
                              "part": "b"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Balanced judgement with nuance.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Judgement given, less nuance.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Simple agree/disagree.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No judgement.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Convincing — 'whispers'/'silver' support beauty; 'fading'/'sleep' support sadness; poem balances both, though 'celebrates' slightly overstates.",
          "commonErrors": [
                    "One-sided evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u6-comparison-notes",
      title: "Comparing and evaluating texts — notes",
      summary: "Compare = similarity + difference + effect. Evaluate = weigh evidence, reasoning and alternatives before judging.",
      sections: [
        { heading: "Comparison formula", body: "Both... but... while... Link every difference to its effect on meaning or mood." },
        { heading: "Evaluation steps", body: "1. State the claim 2. Find supporting evidence 3. Find counter-evidence 4. Judge: convincing/partly/not convincing." },
        { heading: "Strong vs weak interpretations", body: "Strong: 'passage of time' (theme). Weak: 'about autumn' (subject only). Depth beats literalness." },
        { heading: "Key phrase", body: "'Partially convincing because...' shows balanced evaluation." },
      ],
    },
  ],
};
