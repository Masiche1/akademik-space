import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "el11-u5-lesson-5-2",
  code: "5-2",
  title: "Representation: How Texts Present People and Places",
  goal: "I CAN analyse how texts represent individuals, groups and places, and identify stereotyping and selective presentation.",
  standards: ["4EA1 AO2", "4EA1 AO3", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Representation", definition: "The way a text presents a person, group or place — never neutral, always a constructed version." },
    { term: "Stereotype", definition: "A simplified, fixed image of a group that reduces individuals to assumed traits." },
    { term: "Selection", definition: "The choice of which details to include — a key tool of representation." },
    { term: "Omission", definition: "What a text leaves out; often as telling as what it includes." },
    { term: "Sympathetic portrayal", definition: "Representation designed to make the subject appealing or deserving of empathy." },
    { term: "Antagonistic portrayal", definition: "Representation designed to make the subject threatening or blameworthy." },
  ],
  concepts: [
    {
      id: "el11-u5-representation",
      title: "How texts represent people and places",
      skill: "Analyse the techniques writers use to construct representations of people, groups and settings.",
      lesson: {
        sections: [
          {
            heading: "Representation is construction",
            body: "No text shows 'reality' — it shows a **constructed** version. A writer chooses which details to include (**selection**) and which to leave out (**omission**). A politician can be represented as 'a tireless campaigner' or 'a desperate has-been' depending entirely on word choice. The same person, two different representations.",
          },
          {
            heading: "Techniques of representation",
            body: "Writers represent through: **lexis** ('angel' vs 'fiend'), **imagery** (a leader photographed/shown as 'lion-like' or 'weasel-like'), **narrative framing** (whose story gets told, who gets blamed), **juxtaposition** (placing two images side by side for contrast) and **silence** (never mentioning a counter-argument).",
          },
          {
            heading: "Stereotyping",
            body: "A **stereotype** reduces a group to fixed traits: 'all teenagers are lazy', 'all lawyers are dishonest'. Stereotypes feel 'true' because they're familiar, but they erase individual difference. Writers use them for instant characterisation — and readers should question whether the text challenges or reinforces them.",
          },
        ],
        keyFormulas: [
          { name: "Representation", statement: "A constructed version of reality shaped by selection and omission." },
          { name: "Selection/omission", statement: "What is included and excluded creates the representation." },
          { name: "Stereotype", statement: "Fixed, simplified image of a group replacing individual complexity." },
        ],
        workedExample: {
          problem: "A travel article describes a city as 'a riot of colour, where every street tells a story.' A news report describes it as 'an overcrowded metropolis struggling with infrastructure.' How do these represent the same place differently?",
          solution: "The travel article selects positive sensory details (colour, storytelling) and omits problems — representing the city as vibrant and welcoming. The news report selects infrastructure and crowding and omits culture — representing it as a problem to be managed. Neither is 'false'; both are selective constructions serving different purposes (attracting tourists vs reporting problems).",
        },
      },
      questions: [
        {
          id: "el11-u5-representation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'representation' in the context of text analysis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A picture in a magazine"
                    },
                    {
                              "id": "b",
                              "text": "The constructed version of a person, group or place presented by a text"
                    },
                    {
                              "id": "c",
                              "text": "A list of facts"
                    },
                    {
                              "id": "d",
                              "text": "The writer's opinion only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Representation",
                              "statement": "A constructed version of reality in a text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Representation is how texts present subjects — always constructed, never neutral.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** The constructed version of a person, group or place presented by a text.",
          "commonErrors": [
                    "Thinking representation means only visual images (a)."
          ]
},
        },
        {
          id: "el11-u5-representation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what is meant by 'selection and omission' in representation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Selection and omission",
                              "statement": "Inclusion/exclusion of details shapes representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Selection = choosing which details to include.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Omission = leaving out details — often as significant as inclusion for shaping the reader's view.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Selection includes chosen details; omission excludes others — together they construct the representation.",
          "commonErrors": [
                    "Only mentioning selection, not omission."
          ]
},
        },
        {
          id: "el11-u5-representation-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two descriptions of a teacher",
          "author": "Written for Akademik Space",
          "source": "Pupil testimonial vs staff newsletter",
          "text": "STUDENT REVIEW: 'Ms Khan is the only teacher who actually listens. She stays late every day and remembers your name.'\nSTAFF NEWSLETTER: 'Ms Khan's innovative pedagogy has been recognised with a regional teaching award.'"
},
          stem: "Explain how each text represents Ms Khan differently and what each chooses to include or omit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Selection/omission",
                              "statement": "Different details create different representations."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "Identifying what each version foregrounds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Student review selects personal qualities: 'listens', 'stays late', 'remembers your name' — human, caring representation.",
                              "evidence": "stays late every day and remembers your name",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Newsletter selects professional achievement: 'innovative pedagogy', 'regional teaching award' — institutional, accomplished representation.",
                              "evidence": "innovative pedagogy has been recognised",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each omits the other's focus: review omits formal recognition; newsletter omits personal warmth.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The student represents Ms Khan as personally caring; the newsletter represents her as professionally accomplished. Each selects details serving its purpose and omits the other dimension.",
          "commonErrors": [
                    "Saying both are 'true' without analysing the construction."
          ]
},
        },
        {
          id: "el11-u5-representation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how stereotyping works in texts and why it can be problematic, using a specific example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stereotype",
                              "statement": "Fixed, simplified image of a group."
                    },
                    {
                              "kind": "skill",
                              "name": "Critical analysis",
                              "statement": "Evaluating representation's social effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stereotypes reduce groups to fixed traits, erasing individual complexity.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example given: 'all teenagers are lazy' or 'all bankers are greedy'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Problem 1: feels 'true' through familiarity, so readers accept it uncritically.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Problem 2: reinforces prejudice and can influence real-world attitudes.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Texts can challenge stereotypes too — good analysis notes which the text does.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Stereotyping fixes groups to simplified traits, feels familiar enough to accept uncritically, and can reinforce real prejudice — though texts can also challenge stereotypes.",
          "commonErrors": [
                    "Defining without evaluating."
          ]
},
        },
        {
          id: "el11-u5-representation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite this neutral sentence to represent the subject SYMPATHETICALLY: 'The politician missed the deadline.'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite it to represent the subject ANTAGONISTICALLY.",
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
                              "name": "Loaded representation",
                              "statement": "Lexical choices create sympathy or antagonism."
                    },
                    {
                              "kind": "skill",
                              "name": "Framing",
                              "statement": "Same fact, different constructed image."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sympathetic version, e.g. 'The dedicated politician was thwarted by an impossible deadline.'",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Antagonistic version, e.g. 'The incompetent politician carelessly missed the deadline.'",
                              "marks": 3,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Sympathetic rewrite achieved through apt lexical and grammatical choices."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rewrite barely shifts the representation."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Antagonistic rewrite is clearly distinct and effectively hostile in framing."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rewrite is not convincingly antagonistic."
                    }
          ],
"finalAnswer": "(a) E.g. 'thwarted by circumstances' — sympathetic. (b) E.g. 'carelessly failed' — antagonistic. Same fact, opposite representations.",
          "commonErrors": [
                    "Both versions similarly neutral or similarly loaded.",
                    "Changing facts rather than framing."
          ]
},
        },
        {
          id: "el11-u5-representation-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words explaining how texts construct representations of people or places. Use at least two techniques (selection, loaded language, juxtaposition, omission) and evaluate the effect on the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Representation techniques",
                              "statement": "Selection, loaded lexis, framing, omission."
                    },
                    {
                              "kind": "skill",
                              "name": "Analytical writing",
                              "statement": "Technique + effect + evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains representation as construction.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Technique 1 explained with effect.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Technique 2 explained with effect.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evaluates effect on reader (sympathy, prejudice, belief).",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Texts construct representations through selection, loaded language, framing and omission, shaping reader sympathy or antagonism — never neutral.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two techniques well explained and evaluated."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Techniques present, partial evaluation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account."
                    }
          ],
          "commonErrors": [
                    "No techniques named.",
                    "No reader effect."
          ]
},
        },
      ],
    },
    {
      id: "el11-u5-reading-representations",
      title: "Analysing representations in texts",
      skill: "Analyse how specific texts represent their subjects and evaluate whether the representation is fair, biased or stereotypical.",
      lesson: {
        sections: [
          {
            heading: "A reading routine for representation",
            body: "When analysing representation: (1) identify the subject — person, group, place; (2) note the **dominant impression** — what feeling does the text create?; (3) find the **techniques** — which words, images, details create that impression?; (4) check the **omissions** — what isn't mentioned?; (5) judge — is this representation fair, biased or stereotypical, and why?",
          },
          {
            heading: "Evaluating fairness",
            body: "A 'fair' representation acknowledges complexity — it shows a subject with strengths and weaknesses, or presents multiple perspectives. A 'biased' one consistently favours one side. A 'stereotypical' one reduces to fixed traits. Most real texts sit between — analyse where on this spectrum the text falls and why.",
          },
          {
            heading: "Writing about representation",
            body: "Structure your analysis: overview of the representation → evidence of techniques → effect on reader → judgement of fairness. Quote specific words and explain their connotations. Avoid simply saying 'the writer is biased' — show HOW the bias is constructed through language.",
          },
        ],
        keyFormulas: [
          { name: "Reading routine", statement: "Subject → dominant impression → techniques → omissions → judgement." },
          { name: "Spectrum", statement: "Fair (complex) ↔ biased (one-sided) ↔ stereotypical (reductive)." },
          { name: "Evidence rule", statement: "Always quote the specific word/image that creates the representation." },
        ],
        workedExample: {
          problem: "A charity leaflet says: 'Every day, vulnerable children go hungry while politicians dine on taxpayers' money.' Analyse the representation of children and politicians.",
          solution: "Children are represented as 'vulnerable' and 'hungry' — passive victims deserving sympathy. Politicians are represented as dining on 'taxpayers' money' — corrupt elites. The juxtaposition creates a stark moral contrast. Techniques: loaded adjectives ('vulnerable'), emotive imagery ('go hungry'), guilt-inducing detail ('dine on taxpayers' money'). The representation is highly biased — it selects only details supporting the charity's agenda and omits any complexity.",
        },
      },
      questions: [
        {
          id: "el11-u5-reading-representations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST step in analysing how a text represents its subject?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count the adjectives"
                    },
                    {
                              "id": "b",
                              "text": "Identify who or what is being represented"
                    },
                    {
                              "id": "c",
                              "text": "Write the conclusion"
                    },
                    {
                              "id": "d",
                              "text": "Check the spelling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Analytical routine",
                              "statement": "Identify subject before analysing techniques."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "You must know WHAT is being represented before HOW.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** Identify who or what is being represented.",
          "commonErrors": [
                    "Jumping to techniques before identifying the subject."
          ]
},
        },
        {
          id: "el11-u5-reading-representations-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'dominant impression' means in representation analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dominant impression",
                              "statement": "The overall feeling a text creates about its subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines dominant impression as the cumulative emotional effect.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "E.g. a politician might be represented with a 'sympathetic' or 'antagonistic' dominant impression.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Dominant impression = the overall feeling (sympathetic, hostile, neutral) the text creates about its subject.",
          "commonErrors": [
                    "Confusing with first impression or plot summary."
          ]
},
        },
        {
          id: "el11-u5-reading-representations-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "A local newspaper article",
          "author": "Written for Akademik Space",
          "source": "Local news",
          "text": "The new recycling centre opened on Monday to praise from residents. 'It's transformed the area,' said one mother, who had 'given up hope' of easy recycling. However, some shopkeepers complained about increased traffic and the loss of a popular car park."
},
          stem: "Analyse how this article represents the recycling centre, noting both positive and negative representations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Balanced representation",
                              "statement": "Text can show multiple perspectives."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence-based analysis",
                              "statement": "Quote specific details for each representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive: 'opened to praise', 'transformed the area', 'given up hope' — creates sympathetic, successful representation.",
                              "evidence": "It's transformed the area",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Negative: 'complained', 'loss of a popular car park' — introduces criticism and cost.",
                              "evidence": "some shopkeepers complained about increased traffic",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The 'however' signals balanced representation — both benefits and drawbacks acknowledged.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The article represents the centre positively overall (transformation, praise) but includes shopkeeper complaints — a relatively balanced, fair representation.",
          "commonErrors": [
                    "Only noting positive or only negative."
          ]
},
        },
        {
          id: "el11-u5-reading-representations-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two film reviews of the same movie",
          "author": "Written for Akademik Space",
          "source": "Comparative reviews",
          "text": "REVIEW A: 'A masterpiece of modern cinema — visually stunning, emotionally devastating, a triumph of storytelling.'\nREVIEW B: 'An overlong, self-indulgent mess that mistakes noise for meaning.'"
},
          stem: "Analyse how each review represents the film and evaluate which is more fair.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loaded evaluation",
                              "statement": "Adjectives and nouns create positive or negative representation."
                    },
                    {
                              "kind": "skill",
                              "name": "Fairness judgement",
                              "statement": "Evaluating balance and evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Review A represents film as 'masterpiece', 'stunning', 'devastating', 'triumph' — exclusively positive superlatives.",
                              "evidence": "A masterpiece of modern cinema",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Review B represents it as 'overlong', 'self-indulgent mess', 'noise for meaning' — exclusively negative.",
                              "evidence": "An overlong, self-indulgent mess",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Neither shows complexity — both are one-sided, though A is more effusive.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "B's 'mistakes noise for meaning' offers a specific criticism (style over substance) — slightly more analytical.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement: both are biased; neither is 'fair' as they omit any balanced assessment.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Both reviews are one-sided representations — A purely celebratory, B purely hostile. Neither acknowledges complexity, so both are biased rather than fair.",
          "commonErrors": [
                    "Declaring one 'fair' without evidence of balance."
          ]
},
        },
        {
          id: "el11-u5-reading-representations-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the dominant impression created by 'The village was a forgotten backwater, its streets muddy and its people suspicious of strangers.'",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the writer's word choices create this impression.",
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
                              "name": "Atmospheric lexis",
                              "statement": "Words create mood and judgement."
                    },
                    {
                              "kind": "skill",
                              "name": "Close analysis",
                              "statement": "Linking specific words to impression."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Negative/hostile dominant impression — village as isolated, unattractive, untrusting.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Forgotten backwater' — pejorative, suggests decline and insignificance.",
                              "evidence": "forgotten backwater",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'muddy' streets — sensory detail reinforcing neglect.",
                              "evidence": "streets muddy",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'suspicious of strangers' — negative characterisation of inhabitants.",
                              "evidence": "suspicious of strangers",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Overall: the writer selects only negative details to create an unfavourable representation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Identifies the dominant impression accurately."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Vague or inaccurate impression."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Explains precisely how specific word choices create the impression, with close reference."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Some link between language and impression but general or unsupported."
                    }
          ],
"finalAnswer": "(a) Negative/hostile impression. (b) 'Forgotten backwater', 'muddy', 'suspicious' all select negative details to represent the village as isolated and unwelcoming.",
          "commonErrors": [
                    "Identifying impression without quoting evidence."
          ]
},
        },
        {
          id: "el11-u5-reading-representations-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words analysing how a text represents its subject. Identify the techniques used, explain their effect on the reader, and evaluate whether the representation is fair, biased or stereotypical.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Representation techniques",
                              "statement": "Selection, loaded lexis, framing."
                    },
                    {
                              "kind": "skill",
                              "name": "Analytical judgement",
                              "statement": "Technique + effect + fairness evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies subject and dominant impression.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Two or more techniques with quoted evidence.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains effect on reader.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Evaluates fairness/bias/stereotype with justification.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Texts construct representations through selection and loaded language; analysis should identify techniques, explain effects, and judge whether the representation is fair or biased.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Subject identified, techniques evidenced, effect and fairness evaluated."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Techniques present, partial evaluation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague or unsupported."
                    }
          ],
          "commonErrors": [
                    "No quoted evidence.",
                    "No fairness judgement."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u5-representation-notes",
      title: "Representation — notes",
      summary: "Texts construct versions of reality through selection and omission. Analyse techniques, effects, and judge fairness.",
      sections: [
        { heading: "Key idea", body: "Representation is never neutral — every text selects and omits details to create an impression." },
        { heading: "Spectrum", body: "Fair (complex, balanced) ↔ biased (one-sided) ↔ stereotypical (reductive)." },
        { heading: "Exam tip", body: "Subject → impression → techniques (quoted) → omissions → judgement of fairness." },
      ],
    },
  ],
};
