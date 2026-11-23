import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "el10-u6-lesson-6-1",
  code: "6-1",
  title: "Comparing Writers' Methods",
  goal: "I CAN compare how two writers use language, imagery, structure and form to achieve their purposes.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Comparison", definition: "Identifying similarities and differences between two texts." },
    { term: "Comparative connective", definition: "A linking word or phrase showing comparison, such as 'whereas', 'similarly', 'in contrast'." },
    { term: "Register", definition: "The level of formality a writer chooses." },
    { term: "Tone", definition: "The writer's attitude towards the subject." },
    { term: "Structure", definition: "How a text is organised: openings, paragraphs and endings." },
    { term: "Integrated comparison", definition: "Weaving points about both texts together in one paragraph rather than treating them separately." },
  ],
  concepts: [
    {
      id: "el10-u6-language-imagery",
      title: "Comparing language and imagery across texts",
      skill: "Compare how two writers use word choice, imagery and tone.",
      lesson: {
        sections: [
          {
            heading: "How to compare language",
            body: "Comparison is not two separate analyses placed side by side. **Integrated comparison** weaves both texts into each point: 'Whereas the critic calls the coffee 'expertly roasted', the blogger simply calls it 'the best coffee I have had'.' Use **comparative connectives** — 'whereas', 'similarly', 'in contrast', 'both' — to make the relationship explicit.",
          },
          {
            heading: "Comparing tone and register",
            body: "The formal review uses measured, evaluative language ('competent', 'partially justifies') and a balanced tone. The blog uses enthusiastic, informal language ('WOW', 'honestly?', '10/10'). Comparing register shows how each writer positions themselves: the critic as expert judge, the blogger as fellow enthusiast.",
          },
          {
            heading: "Comparing imagery",
            body: "Look for the images each writer creates. The critic's 'prime position' and 'premium' suggest value and status; the blogger's 'WOW' and 'would queue again' create excitement and appetite. Different imagery serves different purposes: evaluation versus persuasion.",
          },
        ],
        keyFormulas: [
          { name: "Integrated comparison", statement: "Weave both texts into each point using 'whereas', 'similarly', 'both'." },
          { name: "Comparative connective", statement: "Words like 'whereas', 'in contrast', 'similarly' signal the relationship." },
          { name: "Register comparison", statement: "Formal evaluative language vs informal enthusiastic language." },
        ],
        workedExample: {
          problem: "Compare how the two reviewers describe the coffee.",
          solution: "Both reviewers praise the coffee, but differently. The critic uses precise, evaluative language — 'single-origin beans, expertly roasted' — which conveys expertise and judgement. The blogger uses enthusiastic, personal language — 'genuinely the best coffee I have had outside London' — which conveys excitement and personal experience. The critic evaluates objectively; the blogger recommends subjectively.",
        },
      },
      questions: [
        {
          id: "el10-u6-language-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which review uses the more formal register?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The newspaper review"
                    },
                    {
                              "id": "b",
                              "text": "The blog post"
                    },
                    {
                              "id": "c",
                              "text": "Both equally"
                    },
                    {
                              "id": "d",
                              "text": "Neither"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Register",
                              "statement": "The level of formality in writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic uses measured evaluative language; the blogger uses informal enthusiasm.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** The newspaper review.",
          "commonErrors": [
                    "Choosing the blog because it is longer or more enthusiastic."
          ]
},
        },
        {
          id: "el10-u6-language-imagery-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify one difference in word choice between the two reviews and explain its effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Word choice",
                              "statement": "Different vocabulary creates different tones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic says 'competent' and 'partially justifies'; the blogger says 'WOW' and '10/10'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The critic's words are measured and evaluative; the blogger's are enthusiastic and emphatic.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The critic's measured 'competent' vs the blogger's emphatic '10/10' shows evaluation vs enthusiasm.",
          "commonErrors": [
                    "Quoting words without explaining their tonal effect."
          ]
},
        },
        {
          id: "el10-u6-language-imagery-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare how each reviewer presents the café's service.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Comparative analysis",
                              "statement": "Weaving both texts into one point shows comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic notes 'inconsistent' service with 'long waits at peak times' — a measured criticism.",
                              "evidence": "the service is inconsistent, with long waits",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger admits 'you might wait a bit at lunch' but dismisses it with 'honestly? Worth it'.",
                              "evidence": "you might wait a bit at lunch",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both acknowledge the wait, but the critic weighs it against quality while the blogger waves it away.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Both mention waits; the critic criticises inconsistency while the blogger excuses it as worth it.",
          "commonErrors": [
                    "Analysing each review separately without comparing."
          ]
},
        },
        {
          id: "el10-u6-language-imagery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how the difference in register between the two reviews shapes the reader's response.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register and persuasion",
                              "statement": "Formality signals expertise; informality signals enthusiasm."
                    },
                    {
                              "kind": "context",
                              "name": "Audience",
                              "statement": "Different registers suit different readers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic's formal register ('prime position', 'premium', 'competent') positions them as an expert judge.",
                              "evidence": "a competent establishment that fails to distinguish itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This invites readers to trust the evaluation as objective and informed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger's informal register ('WOW', 'OK so', '10/10') positions them as a fellow enthusiast.",
                              "evidence": "I was NOT expecting much but WOW",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This invites readers to share the excitement rather than defer to expertise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The register difference means the same café is presented as 'competent' by one and '10/10' by the other.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Formal register signals expert judgement; informal register signals shared enthusiasm — shaping trust vs excitement in readers.",
          "commonErrors": [
                    "Describing registers without linking to reader response."
          ]
},
        },
        {
          id: "el10-u6-language-imagery-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the evaluative language in the two reviews and explain how each writer tries to persuade the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluative language",
                              "statement": "Judgement words persuade readers to agree."
                    },
                    {
                              "kind": "skill",
                              "name": "Persuasion",
                              "statement": "Different writers persuade through different language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic uses measured judgements: 'excellent', 'competent', 'fails to distinguish itself'.",
                              "evidence": "fails to distinguish itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "These balanced judgements persuade through apparent objectivity and expertise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger uses emphatic superlatives: 'genuinely the best', 'WOW', '10/10 would queue again'.",
                              "evidence": "10/10 would queue again",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "These enthusiastic judgements persuade through excitement and personal endorsement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The critic persuades by seeming fair; the blogger persuades by seeming genuine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both aim to convince, but through opposite strategies: restraint vs enthusiasm.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The critic persuades through measured, objective judgements; the blogger through emphatic, personal enthusiasm — restraint vs excitement.",
          "commonErrors": [
                    "Listing evaluative words without comparing persuasion strategies."
          ]
},
        },
        {
          id: "el10-u6-language-imagery-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Read the two reviews and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two differences in register between the reviews.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare how each reviewer describes the coffee.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Analyse how each writer's language positions them differently for the reader.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate which review is more convincing and why.",
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
                              "name": "Register",
                              "statement": "Formality level positions the writer relative to the reader."
                    },
                    {
                              "kind": "context",
                              "name": "Audience",
                              "statement": "Critic vs blogger audiences expect different styles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The critic uses formal evaluative vocabulary ('prime position', 'premium').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The blogger uses informal enthusiasm ('WOW', 'OK so', '10/10').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The critic: 'single-origin beans, expertly roasted' — precise, expert judgement.",
                              "evidence": "single-origin beans, expertly roasted",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The blogger: 'genuinely the best coffee I have had outside London' — personal, enthusiastic.",
                              "evidence": "genuinely the best coffee",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both praise, but the critic evaluates while the blogger recommends.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The critic positions as expert: measured judgements invite trust.",
                              "evidence": "a competent establishment",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The blogger positions as peer: enthusiasm invites shared excitement.",
                              "evidence": "would queue again",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The critic's restraint suggests fairness; the blogger's enthusiasm suggests genuine passion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The critic is more convincing for a reader seeking reliable judgement; the blogger for one seeking recommendations.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Effectiveness depends on audience: objectivity persuades skeptics, enthusiasm persuades enthusiasts.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Formal vs informal register. (b) Both praise coffee; critic evaluates, blogger recommends. (c) Critic = expert, blogger = enthusiast. (d) The critic convinces skeptics; the blogger convinces enthusiasts.",
          "commonErrors": [
                    "Analysing reviews separately without comparing.",
                    "Judging one as simply better without considering audience."
          ]
},
        },
      ],
    },
    {
      id: "el10-u6-structure-form",
      title: "Comparing structure and form across texts",
      skill: "Compare how two texts are organised and shaped by their form.",
      lesson: {
        sections: [
          {
            heading: "Structure in reviews",
            body: "Both reviews follow a loose pattern: **introduction** (position/first impression), **points** (coffee, service, price), **verdict** (overall judgement). But they differ: the critic's structure is balanced — praise, criticism, partial justification, measured conclusion. The blogger's is enthusiastic throughout, ending on a personal recommendation ('10/10 would queue again').",
          },
          {
            heading: "Form shapes meaning",
            body: "The critic's newspaper column has paragraphs that each develop one evaluative point. The blog's shorter paragraphs and exclamations create breathless excitement. Form is not just layout — it guides how the reader receives the message.",
          },
          {
            heading: "Openings and endings",
            body: "The critic opens with location and first impression ('prime position... somewhat sterile'). The blogger opens with anticipation ('I was NOT expecting much but WOW'). The critic ends with a measured verdict; the blogger ends with a personal pledge ('would queue again'). Different endings serve different purposes: judgement vs recommendation.",
          },
        ],
        keyFormulas: [
          { name: "Review structure", statement: "Introduction, evaluative points, verdict or recommendation." },
          { name: "Balanced vs enthusiastic", statement: "Critic weighs pros and cons; blogger celebrates." },
          { name: "Ending function", statement: "Verdict judges; recommendation urges action." },
        ],
        workedExample: {
          problem: "Compare the structure of the two reviews.",
          solution: "Both follow introduction-points-verdict, but differently. The critic opens with location and a balanced first impression, devotes paragraphs to coffee, service and price, and ends with a measured verdict ('competent... fails to distinguish itself'). The blogger opens with personal anticipation, gives brief enthusiastic points, and ends with a personal pledge ('10/10 would queue again'). The critic's structure supports judgement; the blogger's supports recommendation.",
        },
      },
      questions: [
        {
          id: "el10-u6-structure-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the shared structural pattern of both reviews?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Introduction, evaluative points, verdict"
                    },
                    {
                              "id": "b",
                              "text": "Question, answer, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "Chronological narrative"
                    },
                    {
                              "id": "d",
                              "text": "Problem, solution, evaluation"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Review structure",
                              "statement": "Reviews typically introduce, evaluate points, then give a verdict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both open with an impression, discuss coffee/service/price, and end with a judgement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Introduction, evaluative points, verdict.",
          "commonErrors": [
                    "Missing the shared pattern by focusing only on differences."
          ]
},
        },
        {
          id: "el10-u6-structure-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify one structural difference between the two reviews.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Structure",
                              "statement": "Organisation shapes how the message is received."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic balances praise and criticism in each paragraph; the blogger is enthusiastic throughout.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The critic ends with a measured verdict; the blogger ends with a personal recommendation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The critic balances points; the blogger celebrates throughout and ends with a recommendation.",
          "commonErrors": [
                    "Describing content rather than structure."
          ]
},
        },
        {
          id: "el10-u6-structure-form-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the openings of the two reviews and explain how each prepares the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Openings",
                              "statement": "First impressions frame the reader's expectations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic opens with location and a measured first impression: 'prime position... somewhat sterile'.",
                              "evidence": "prime position on the waterfront",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This frames the review as balanced evaluation from the start.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger opens with personal anticipation: 'I was NOT expecting much but WOW'.",
                              "evidence": "I was NOT expecting much but WOW",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The critic's measured opening frames judgement; the blogger's enthusiastic opening frames excitement.",
          "commonErrors": [
                    "Quoting openings without explaining their framing effect."
          ]
},
        },
        {
          id: "el10-u6-structure-form-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how the different endings of the two reviews serve their different purposes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Endings",
                              "statement": "The final lines deliver the text's purpose."
                    },
                    {
                              "kind": "context",
                              "name": "Purpose",
                              "statement": "A verdict judges; a recommendation urges action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic ends with a measured verdict: 'a competent establishment that fails to distinguish itself'.",
                              "evidence": "fails to distinguish itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This delivers judgement — neither praise nor condemnation, a balanced assessment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger ends with a personal pledge: '10/10 would queue again'.",
                              "evidence": "10/10 would queue again",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This delivers recommendation — an endorsement that urges the reader to visit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The endings show how structure serves purpose: the critic judges, the blogger recommends.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The critic's verdict judges; the blogger's pledge recommends — endings serve different purposes.",
          "commonErrors": [
                    "Describing endings without linking to purpose."
          ]
},
        },
        {
          id: "el10-u6-structure-form-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the paragraph structure of the two reviews and explain how form affects the reading experience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Form and structure",
                              "statement": "Layout and organisation guide the reader."
                    },
                    {
                              "kind": "skill",
                              "name": "Reading experience",
                              "statement": "Different forms create different effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic uses full, developed paragraphs, each exploring one evaluative point in depth.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This creates a measured, considered reading experience suited to newspaper readers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blogger uses shorter paragraphs and exclamations ('WOW', 'honestly?'), creating breathless excitement.",
                              "evidence": "but honestly? Worth it",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This mimics enthusiastic speech and suits a casual blog audience.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Form thus reinforces content: the critic's form is evaluative, the blogger's is enthusiastic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The same subject is experienced differently because of how each text is shaped.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The critic's developed paragraphs create measured judgement; the blogger's short, exclamatory paragraphs create breathless excitement — form reinforces purpose.",
          "commonErrors": [
                    "Describing form without linking to reading experience."
          ]
},
        },
        {
          id: "el10-u6-structure-form-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Read the two reviews and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the shared structural pattern of both reviews.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare the openings of the two reviews.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the endings serve different purposes.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate how structure supports each writer's purpose.",
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
                              "name": "Structure and form",
                              "statement": "Organisation shapes how purpose is delivered."
                    },
                    {
                              "kind": "context",
                              "name": "Purpose",
                              "statement": "Verdict vs recommendation require different structures."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Both follow introduction, evaluative points (coffee, service, price), verdict.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The shared pattern is the review convention.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Critic opens with location and measured first impression.",
                              "evidence": "prime position on the waterfront",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Blogger opens with personal anticipation and surprise.",
                              "evidence": "I was NOT expecting much but WOW",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The critic frames judgement; the blogger frames excitement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Critic ends with measured verdict: 'competent... fails to distinguish itself'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "This delivers balanced judgement appropriate to a critic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Blogger ends with personal pledge: '10/10 would queue again'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The critic's balanced structure supports objective evaluation; the blogger's enthusiastic structure supports recommendation.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Each structure effectively serves its writer's purpose and audience.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Introduction-points-verdict. (b) Critic = measured location; blogger = personal surprise. (c) Critic judges; blogger recommends. (d) Each structure serves its purpose effectively.",
          "commonErrors": [
                    "Describing structure without linking to purpose.",
                    "Treating the shared pattern as the only point."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u6-compare-methods-notes",
      title: "Comparing writers' methods — notes",
      summary: "Integrated comparison weaves both texts into each point using 'whereas', 'similarly', 'both'; compare language, register, imagery and structure.",
      sections: [
        { heading: "Key idea", body: "Comparison means analysing the relationship between texts, not two separate descriptions." },
        { heading: "Language", body: "Compare word choice, register, tone and imagery using comparative connectives." },
        { heading: "Structure", body: "Compare openings, paragraph development and endings; form serves purpose." },
      ],
    },
  ],
};
