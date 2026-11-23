import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "el10-u6-lesson-6-2",
  code: "6-2",
  title: "Evaluating Texts and Writers' Intentions",
  goal: "I CAN infer writers' purposes and audiences and evaluate how effectively texts achieve their aims.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3", "4EA1 AO4"],
  
  vocabulary: [
    { term: "Purpose", definition: "What the writer wants to achieve: inform, persuade, entertain or argue." },
    { term: "Audience", definition: "The intended readers; their expectations shape the writing." },
    { term: "Persuasive device", definition: "A technique used to convince: rhetorical questions, emotive language, evidence." },
    { term: "Bias", definition: "A writer's favoured position that colours their presentation." },
    { term: "Effectiveness", definition: "How well a text achieves its purpose for its audience." },
    { term: "Judgement", definition: "An evaluative conclusion supported by evidence from the text." },
  ],
  concepts: [
    {
      id: "el10-u6-purpose-audience",
      title: "Inferring purpose and audience across texts",
      skill: "Infer why writers write and who they write for by analysing language and conventions.",
      lesson: {
        sections: [
          {
            heading: "Inferring purpose",
            body: "Purpose is revealed by language choices. The parent's letter uses formal, respectful language ('I urge the governors to reconsider') — its purpose is to **persuade** the school to keep uniforms. The student's letter uses informal, emotional language ('honestly I am gutted', 'so boring and expensive') — its purpose is also to persuade, but through personal appeal rather than formal argument.",
          },
          {
            heading: "Inferring audience",
            body: "Audience is revealed by what the writer assumes. The parent addresses 'the governors' with formal conventions — assuming an adult, authoritative reader. The student addresses 'the headteacher' casually ('Hi!') — assuming a reader who will respond to informality, or perhaps not noticing the register mismatch.",
          },
          {
            heading: "Comparing intentions",
            body: "Both writers want the same outcome (keep or change uniform policy) but with opposite positions. Comparing their methods shows how purpose and audience shape every choice: formal argument vs informal appeal.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "What the writer wants to achieve — infer from language and conventions." },
          { name: "Audience", statement: "The intended reader — infer from assumed knowledge and register." },
          { name: "Persuasive devices", statement: "Rhetorical questions, emotive language, evidence, direct address." },
        ],
        workedExample: {
          problem: "Compare the purposes and audiences of the two letters about school uniform.",
          solution: "Both aim to influence the uniform decision, but differently. The parent writes formally to 'the governors', using respectful address and structured argument — persuading through reason and authority. The student writes informally ('Hi!'), using emotion and personal complaint — persuading through relatability. The parent's audience is authority figures; the student's is the same headteacher but addressed as if to a peer.",
        },
      },
      questions: [
        {
          id: "el10-u6-purpose-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of the parent's letter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To complain about school meals"
                    },
                    {
                              "id": "b",
                              "text": "To persuade the school to keep school uniform"
                    },
                    {
                              "id": "c",
                              "text": "To apply for a teaching job"
                    },
                    {
                              "id": "d",
                              "text": "To describe school life"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Purpose",
                              "statement": "What the writer wants to achieve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The parent argues uniforms 'serve an important purpose' and urges governors to 'reconsider'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** To persuade the school to keep uniform.",
          "commonErrors": [
                    "Missing the persuasive intent behind the formal argument."
          ]
},
        },
        {
          id: "el10-u6-purpose-audience-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify two features of the student's letter that reveal its informal register.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register",
                              "statement": "Informal features signal casual address."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Casual greeting 'Hi!' and sign-off '— Year 10' instead of formal conventions.",
                              "evidence": "Hi! Just saw the uniform news",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Emotional, colloquial language: 'gutted', 'so boring and expensive', 'fingers crossed'.",
                              "evidence": "honestly I am gutted",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'Hi!' greeting and emotional colloquialisms reveal the informal register.",
          "commonErrors": [
                    "Listing features without linking to register."
          ]
},
        },
        {
          id: "el10-u6-purpose-audience-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the persuasive methods used in the two letters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Persuasive devices",
                              "statement": "Different writers convince through different methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The parent uses formal argument: lists reasons (equality, bullying, dress codes) and addresses 'governors'.",
                              "evidence": "they promote equality, reduce bullying",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The student uses emotional appeal and rhetorical question: 'Can we please just have a dress code instead?'",
                              "evidence": "Can we please just have a dress code instead?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The parent persuades through logic and authority; the student through personal feeling and relatability.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The parent argues logically to authority; the student appeals emotionally through personal complaint.",
          "commonErrors": [
                    "Describing methods separately without comparing effectiveness."
          ]
},
        },
        {
          id: "el10-u6-purpose-audience-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how each writer's assumed audience shapes their language choices in the letters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Audience assumption",
                              "statement": "Writers choose language based on who they think will read it."
                    },
                    {
                              "kind": "technique",
                              "name": "Address",
                              "statement": "Formal vs informal address signals assumed relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The parent assumes an adult, authoritative audience: 'Dear Headteacher', 'governors', 'Yours sincerely'.",
                              "evidence": "I urge the governors to reconsider",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This formal address commands respect and suits decision-makers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The student assumes a casual or peer audience: 'Hi!', '— Year 10', no formal sign-off.",
                              "evidence": "— Year 10",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This informal address may charm or may undermine credibility depending on the reader.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both address the headteacher, but the parent treats them as authority while the student treats them as approachable.",
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
          "finalAnswer": "The parent assumes authority figures needing formal respect; the student assumes an approachable reader — shaping every language choice.",
          "commonErrors": [
                    "Identifying audience without linking to language choices."
          ]
},
        },
        {
          id: "el10-u6-purpose-audience-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Both letters aim to influence the uniform decision. Compare how effectively each achieves its purpose through language and structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Purpose achievement",
                              "statement": "Effectiveness depends on matching methods to audience."
                    },
                    {
                              "kind": "technique",
                              "name": "Argument vs appeal",
                              "statement": "Reason and emotion persuade different readers differently."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The parent builds a structured argument: states position, gives three reasons, urges action — effective for decision-makers.",
                              "evidence": "I urge the governors to reconsider",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The student's emotional appeal ('gutted', 'boring and expensive') is relatable but less substantiated.",
                              "evidence": "honestly I am gutted",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The parent's formal register matches the governors' expectations; the student's casual register risks seeming disrespectful.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "However, the student's personal voice may resonate with teachers who value student opinion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall the parent is more likely to persuade authority; the student may persuade hearts but not minds.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effectiveness depends on whether the audience responds to logic or emotion.",
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
          "finalAnswer": "The parent's structured argument better suits authority; the student's emotional appeal is relatable but less substantiated — effectiveness depends on audience.",
          "commonErrors": [
                    "Declaring one letter simply better without considering audience."
          ]
},
        },
        {
          id: "el10-u6-purpose-audience-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Read the two letters and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the purpose of each letter.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify the intended audience of each letter.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Compare the persuasive methods used in each letter.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate which letter is more likely to achieve its purpose.",
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
                              "name": "Purpose and audience",
                              "statement": "Both shape every language choice."
                    },
                    {
                              "kind": "technique",
                              "name": "Persuasion",
                              "statement": "Reason and emotion convince differently."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Parent: persuade school to keep uniform.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Student: persuade school to replace uniform with dress code.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Parent: governors/headteacher — authority figures.",
                              "evidence": "Dear Headteacher",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Student: headteacher addressed casually — possibly teachers or peers.",
                              "evidence": "— Year 10",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Parent: formal argument with three reasons (equality, bullying, dress codes).",
                              "evidence": "they promote equality, reduce bullying",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Student: emotional appeal and rhetorical question.",
                              "evidence": "Can we please just have a dress code instead?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Parent persuades through logic; student through feeling.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Parent more likely to persuade authority through respectful, reasoned argument.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Student's emotion may resonate but risks seeming disrespectful.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Effectiveness depends on audience values: logic vs emotion.",
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
                              "marks": "1-2",
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
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Parent: keep uniform; student: replace with dress code. (b) Both address headteacher/governors but with different assumed relationships. (c) Parent argues logically; student appeals emotionally. (d) Parent more likely to persuade authority.",
          "commonErrors": [
                    "Confusing purpose with topic.",
                    "Ignoring how audience shapes method."
          ]
},
        },
      ],
    },
    {
      id: "el10-u6-evaluating",
      title: "Evaluating effectiveness and making judgements",
      skill: "Judge how well texts achieve their purposes and support judgements with evidence.",
      lesson: {
        sections: [
          {
            heading: "What makes a text effective?",
            body: "Effectiveness means achieving the purpose **for the audience**. A formal review succeeds if it informs and judges fairly; a blog succeeds if it recommends enthusiastically. Evaluate by asking: does the language suit the audience? Does the structure deliver the purpose? Is the evidence convincing?",
          },
          {
            heading: "Supporting judgements",
            body: "Never just say 'this is better'. **Judge, then justify**: 'The critic's review is more convincing because the balanced structure and precise vocabulary suggest objectivity, whereas the blogger's enthusiasm, while engaging, may seem biased.' Link every judgement to specific evidence.",
          },
          {
            heading: "Bias and balance",
            body: "All texts have a position. The critic's 'fails to distinguish itself' reveals a judgement; the blogger's '10/10' reveals enthusiasm. Recognising bias does not make a text ineffective — it makes it positioned. The best evaluation acknowledges both effectiveness and partiality.",
          },
        ],
        keyFormulas: [
          { name: "Effectiveness", statement: "Achieving purpose for the intended audience." },
          { name: "Judgement + evidence", statement: "Every evaluative claim needs textual support." },
          { name: "Bias", statement: "A writer's favoured position that colours presentation." },
        ],
        workedExample: {
          problem: "Evaluate which review of the café is more effective and justify your judgement.",
          solution: "The critic's review is more effective for a reader seeking reliable judgement: the balanced structure (praise, criticism, partial justification) and precise evaluative language ('competent', 'partially justifies') suggest objectivity. The blogger's review is more effective for a reader seeking a recommendation: the enthusiasm ('10/10 would queue again') is persuasive for those wanting a verdict. Effectiveness depends on audience — the critic informs, the blogger recommends.",
        },
      },
      questions: [
        {
          id: "el10-u6-evaluating-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'effectiveness' mean when evaluating a text?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whether the text is long enough"
                    },
                    {
                              "id": "b",
                              "text": "Whether the text achieves its purpose for its audience"
                    },
                    {
                              "id": "c",
                              "text": "Whether the text uses complex words"
                    },
                    {
                              "id": "d",
                              "text": "Whether the text has no errors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Effectiveness",
                              "statement": "Achieving purpose for the intended audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effectiveness is about purpose and audience, not length or complexity.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** Achieving purpose for the audience.",
          "commonErrors": [
                    "Confusing effectiveness with length or sophistication."
          ]
},
        },
        {
          id: "el10-u6-evaluating-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a judgement like 'this review is good' is insufficient in an exam answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence-based judgement",
                              "statement": "Claims need textual support to earn marks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Good' is vague and unsupported; it does not show understanding of the text's methods.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "A strong answer judges AND justifies: 'convincing because the balanced structure suggests objectivity'.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Unsupported judgements earn little; link every claim to specific evidence.",
          "commonErrors": [
                    "Giving opinions without evidence."
          ]
},
        },
        {
          id: "el10-u6-evaluating-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify a bias in the blogger's review and explain how it affects the evaluation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bias",
                              "statement": "A writer's favoured position that colours presentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The blogger's '10/10 would queue again' reveals strong enthusiasm — a positive bias.",
                              "evidence": "10/10 would queue again",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The bias makes the review less objective but more persuasive for recommendation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "An effective evaluation acknowledges this bias rather than ignoring it.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The blogger's enthusiasm is biased but effective for recommendation; acknowledge it in evaluation.",
          "commonErrors": [
                    "Calling bias a flaw without considering its persuasive function."
          ]
},
        },
        {
          id: "el10-u6-evaluating-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how the critic's balanced structure makes the review more convincing than a one-sided account would be.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Balance and credibility",
                              "statement": "Acknowledging drawbacks builds trust."
                    },
                    {
                              "kind": "context",
                              "name": "Critic's role",
                              "statement": "Reviewers are expected to judge fairly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The critic admits flaws: 'service is inconsistent', 'prices are above average'.",
                              "evidence": "the service is inconsistent",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Admitting negatives makes the praise ('coffee is excellent') seem more credible.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The structure weighs pros and cons: 'though the quality of the food partially justifies the premium'.",
                              "evidence": "partially justifies the premium",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This balance positions the critic as fair, which persuades readers to trust the verdict.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A one-sided account would seem promotional rather than evaluative.",
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
          "finalAnswer": "The critic's balanced structure — acknowledging flaws — builds credibility and makes the praise convincing.",
          "commonErrors": [
                    "Describing balance without linking to credibility."
          ]
},
        },
        {
          id: "el10-u6-evaluating-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the effectiveness of the student's letter compared to the parent's letter, considering both audience and purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge effectiveness against purpose and audience."
                    },
                    {
                              "kind": "context",
                              "name": "Register and credibility",
                              "statement": "Informal address can charm or undermine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The student's informal register ('Hi!', 'gutted') is relatable but may seem disrespectful to governors.",
                              "evidence": "honestly I am gutted",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The parent's formal argument matches the audience's expectations and commands respect.",
                              "evidence": "I urge the governors to reconsider",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The student's emotional appeal may resonate with those who value student voice.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "However, lack of structured reasons weakens the student's case compared to the parent's three-point argument.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The parent is more likely to persuade decision-makers; the student may persuade sympathisers.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Effectiveness depends on whether the audience responds to authority or emotion.",
                              "marks": 1,
                              "markCode": "AO4"
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
          "finalAnswer": "The parent's formal argument better suits authority; the student's emotion may charm but is less substantiated — audience determines effectiveness.",
          "commonErrors": [
                    "Judging effectiveness without reference to audience."
          ]
},
        },
        {
          id: "el10-u6-evaluating-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Read the two letters and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify one strength of each letter's approach.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify one weakness of each letter's approach.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Compare how effectively each letter persuades its audience.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Make an overall judgement on which letter is more effective, with justification.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge effectiveness against purpose and audience."
                    },
                    {
                              "kind": "context",
                              "name": "Persuasion",
                              "statement": "Reason and emotion persuade differently."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Parent's strength: structured, reasoned argument with formal authority.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Student's strength: relatable emotional appeal and personal voice.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Parent's weakness: formal tone may feel distant or preachy.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Student's weakness: informal register may seem disrespectful; lacks structured reasons.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The parent persuades through logic suited to governors.",
                              "evidence": "they promote equality, reduce bullying",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The student persuades through emotion suited to sympathetic readers.",
                              "evidence": "Can we please just have a dress code instead?",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The parent's method is more likely to change policy; the student's may change hearts.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Overall judgement: the parent is more effective for the actual audience (authority).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Justification: formal register, structured reasons and respectful address match governors' expectations.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "The student's approach, while engaging, risks undermining credibility.",
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
                              "marks": "1-2",
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
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Parent: reasoned authority; student: relatable emotion. (b) Parent: distant; student: disrespectful risk. (c) Parent persuades logic; student persuades feeling. (d) Parent more effective for authority audience.",
          "commonErrors": [
                    "Judging without evidence.",
                    "Ignoring audience in the evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u6-evaluate-notes",
      title: "Evaluating texts — notes",
      summary: "Judge effectiveness against purpose and audience; support every judgement with evidence; recognise bias as positioning.",
      sections: [
        { heading: "Key idea", body: "Effectiveness = achieving purpose for the audience, not just being 'good'." },
        { heading: "Purpose and audience", body: "Infer from language and conventions: formal argument vs emotional appeal." },
        { heading: "Judgement", body: "Always judge AND justify with specific evidence; acknowledge bias." },
      ],
    },
  ],
};
