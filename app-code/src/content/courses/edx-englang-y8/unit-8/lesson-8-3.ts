import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "el8-u8-lesson-8-3",
  code: "8-3",
  title: "Presentations and Argument",
  goal: "I CAN structure a presentation and build an argument with reasons, evidence and counter-arguments.",
  standards: ["KS3 English Language", "KS3 Spoken Language and Audience"],
  
  vocabulary: [
    { term: "Presentation", definition: "A structured spoken delivery to an audience, often with visual aids." },
    { term: "Visual aid", definition: "An image, slide or object that supports the spoken message." },
    { term: "Introduction", definition: "The opening section that hooks the audience and states the purpose." },
    { term: "Signposting", definition: "Phrases that guide the audience through the structure, such as 'first', 'next', 'finally'." },
    { term: "Conclusion", definition: "The closing section that summarises and reinforces the main message." },
    { term: "Argument", definition: "A reasoned case for a point of view, supported by reasons and evidence." },
    { term: "Counter-argument", definition: "The opposing view that a writer or speaker must address." },
    { term: "Rebuttal", definition: "A response that challenges or answers a counter-argument." },
    { term: "Evidence", definition: "Facts, examples or quotations that support a claim." },
  ],
  concepts: [
    {
      id: "el8-u8-structuring-a-presentation",
      title: "Structuring a presentation",
      skill: "Plan and deliver a presentation with a clear introduction, signposted body and conclusion.",
      lesson: {
        sections: [
          {
            heading: "The three parts",
            body: "Every presentation needs an **introduction** (hook the audience, state your purpose), a **body** (main points in a logical order) and a **conclusion** (summarise and end strongly). The introduction might be a question, a surprising fact or a brief story — something that earns attention in the first ten seconds.",
          },
          {
            heading: "Signposting and visual aids",
            body: "**Signposting** guides the audience: 'First... next... finally...' tells listeners where they are. **Visual aids** (slides, images, objects) should support the words, not replace them — a slide with six bullet points of text is worse than one striking image. Keep slides simple and look at the audience, not the screen.",
          },
          {
            heading: "Timing and practice",
            body: "Know your time limit and rehearse to it. A common mistake is spending too long on the introduction and rushing the ending. Practise standing up, with the visual aids, and ideally in front of someone. Time yourself; if you are over, cut a point rather than speaking faster. End on your strongest point or a clear call to remember.",
          },
        ],
        keyFormulas: [
          { name: "Introduction", statement: "Hook + purpose — earns attention in the first seconds." },
          { name: "Signposting", statement: "Guides the audience: first, next, finally." },
          { name: "Conclusion", statement: "Summarise main points and end strongly." },
          { name: "Visual aid rule", statement: "Supports the words; simple beats text-heavy." },
        ],
        workedExample: {
          problem: "A student presents on 'Why we should recycle more'. Plan the structure.",
          solution: "Introduction: a striking statistic ('We produce enough waste to fill this hall every week'). Body: three signposted points — the environmental cost, the economic benefit, what students can do. Conclusion: restate the statistic, end with a call to action: 'Start with your lunch wrapper tomorrow.'",
        },
      },
      questions: [
        {
          id: "el8-u8-structuring-a-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a presentation's introduction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To give every detail of the topic"
                    },
                    {
                              "id": "b",
                              "text": "To hook the audience and state the purpose"
                    },
                    {
                              "id": "c",
                              "text": "To answer all the audience's questions"
                    },
                    {
                              "id": "d",
                              "text": "To read out the notes word for word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Introduction",
                              "statement": "Hooks the audience and states the purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The introduction earns attention quickly and tells the audience what the presentation is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** To hook the audience and state the purpose.",
          "commonErrors": [
                    "Thinking the introduction should cover the whole topic — detail belongs in the body."
          ]
},
        },
        {
          id: "el8-u8-structuring-a-presentation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of 'signposting' phrases a presenter could use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Signposting",
                              "statement": "Phrases that guide the audience through the structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Example: 'First, let's look at the problem.' or 'Moving on to my second point...'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: 'Finally, here's what we can do about it.' or 'To sum up...'",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "'First... next... finally...' or 'Let's move on to...' — any phrases that mark the structure.",
          "commonErrors": [
                    "Using content words rather than structural signposts, e.g. 'The problem is...'"
          ]
},
        },
        {
          id: "el8-u8-structuring-a-presentation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two rules for using visual aids effectively in a presentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Visual aids",
                              "statement": "Aids support the spoken message; simplicity wins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rule 1: keep slides simple — one idea or image per slide, few words; the speaker provides the detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Rule 2: look at the audience, not the screen; the aid is there to support you, not replace you.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both rules explained with reference to audience effect.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Keep slides simple with minimal text, and look at the audience rather than reading from the screen.",
          "commonErrors": [
                    "Saying 'use slides' without explaining how they should be designed or used."
          ]
},
        },
        {
          id: "el8-u8-structuring-a-presentation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A presenter spends eight of their ten minutes on the introduction and rushes the conclusion in thirty seconds. Explain two problems this causes and how to fix the timing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Timing",
                              "statement": "Presentation time should be balanced across all parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem 1: an overlong introduction delays the main content and loses audience patience before the substance begins.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Problem 2: a rushed conclusion means the main message is not reinforced and the presentation ends weakly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fix: rehearse with a timer; allocate roughly a tenth to the introduction, most to the body, and a tenth to the conclusion; cut a point if over time.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Overlong introductions bore the audience and rushed conclusions weaken the message; rehearse with a timer and allocate time across all three parts.",
          "commonErrors": [
                    "Saying 'speak faster' as the fix — better to cut content."
          ]
},
        },
        {
          id: "el8-u8-structuring-a-presentation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between an effective and an ineffective introduction to a presentation. Give an example of each for a talk on 'The History of Football'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Hook and purpose",
                              "statement": "A good introduction earns attention quickly and states the purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective introduction hooks attention fast — e.g. 'In 1863, a schoolboy invented a game that would one day be watched by billions.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It states the purpose clearly — 'Today I'll show how football went from a school game to a global sport.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ineffective example: 'Hi, my name is Sam and I'm going to talk about football today' — no hook, vague purpose.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast: effective hooks create curiosity and orientate the audience; ineffective wastes the crucial first seconds.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear contrast with accurate examples for both."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "One example or weak contrast."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Vague or no examples."
                    }
          ],
          "finalAnswer": "Effective: hooks with a striking fact and states purpose. Ineffective: flat self-introduction with no hook. Example: 'In 1863 a schoolboy invented a game watched by billions' vs 'Hi, I'll talk about football.'",
          "commonErrors": [
                    "Confusing a long detailed introduction with an effective one — hook first, detail later."
          ]
},
        },
        {
          id: "el8-u8-structuring-a-presentation-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about structuring a presentation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name and explain the three parts of a presentation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write an introduction and a conclusion for a presentation on 'How to prepare for exams'.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain three techniques for keeping an audience engaged during the body of a presentation.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Presentation structure",
                              "statement": "Introduction hooks and orients; body delivers points; conclusion reinforces."
                    },
                    {
                              "kind": "technique",
                              "name": "Audience engagement",
                              "statement": "Variety in voice, visuals, questions and movement keeps attention."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Introduction: hooks the audience and states the purpose.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Body: main points in a logical, signposted order.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Conclusion: summarises the main message and ends strongly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Introduction example: 'Failing an exam isn't the end — it's information. Today I'll show you a system that works.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Conclusion example: 'Start tonight with one revision timetable; small steps beat panic every time.' — summarises and ends with a call to action.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Technique 1: vary pace, volume and pitch to avoid monotone.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Technique 2: ask the audience a question or use a brief activity to involve them.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Technique 3: use simple visual aids or movement to punctuate key points.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each technique is linked to why it holds attention.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Three distinct techniques with clear engagement reasons."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Techniques listed with limited explanation."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Vague or generic advice."
                    }
          ],
          "finalAnswer": "(a) Introduction, body, conclusion. (b) Hooking intro and call-to-action conclusion as above. (c) Vocal variety, audience questions, visual aids/movement.",
          "commonErrors": [
                    "In (b), writing a conclusion that introduces new information instead of summarising.",
                    "In (c), listing techniques without explaining the engagement effect."
          ]
},
        },
      ],
    },
    {
      id: "el8-u8-argument-and-persuasion",
      title: "Argument and persuasion",
      skill: "Build an argument with a clear claim, reasons, evidence and a response to counter-arguments.",
      lesson: {
        sections: [
          {
            heading: "The structure of an argument",
            body: "A strong argument has a clear **claim** (your point of view), **reasons** (why the claim is true) and **evidence** (facts, examples, quotations that support the reasons). 'We should ban phones in class' is a claim; 'they distract from learning' is a reason; 'studies show phones reduce attention' is evidence.",
          },
          {
            heading: "Counter-arguments and rebuttals",
            body: "Every argument has an **opposing view** — the **counter-argument**. Addressing it strengthens your position rather than weakening it. A **rebuttal** challenges the counter-argument with reason or evidence: 'Some say phones help in emergencies, but schools already have phones for that, and emergencies are rare compared to daily distraction.' Ignoring the other side makes an argument look one-sided and unconvincing.",
          },
          {
            heading: "Persuasive language",
            body: "Persuasive writing uses techniques like rhetorical questions ('Do we really want...?'), emotive language ('innocent animals suffer'), rule of three ('faster, safer, smarter') and direct address ('We must act now'). Use them honestly — exaggerated or false claims undermine the argument when the audience notices.",
          },
        ],
        keyFormulas: [
          { name: "Claim", statement: "The point of view being argued." },
          { name: "Reason", statement: "Why the claim is true." },
          { name: "Evidence", statement: "Facts, examples or quotations supporting a reason." },
          { name: "Counter-argument", statement: "The opposing view that must be addressed." },
          { name: "Rebuttal", statement: "A response that challenges the counter-argument." },
        ],
        workedExample: {
          problem: "Build an argument for 'School should start later in the morning'.",
          solution: "Claim: school should start later. Reason 1: teenagers' body clocks make early starts ineffective — evidence: sleep research shows adolescents need more sleep. Reason 2: later starts improve attendance and concentration — evidence: schools that trialled it report better results. Counter-argument: later starts clash with parents' work — rebuttal: bus timetables and after-school clubs could adjust, and the gains outweigh the inconvenience.",
        },
      },
      questions: [
        {
          id: "el8-u8-argument-and-persuasion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'claim' in an argument?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A fact that cannot be disputed"
                    },
                    {
                              "id": "b",
                              "text": "The point of view being argued"
                    },
                    {
                              "id": "c",
                              "text": "The opposing view"
                    },
                    {
                              "id": "d",
                              "text": "A piece of evidence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Claim",
                              "statement": "The point of view being argued."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The claim is what the argument is trying to prove; reasons and evidence support it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The point of view being argued.",
          "commonErrors": [
                    "Confusing claim with evidence — evidence supports the claim."
          ]
},
        },
        {
          id: "el8-u8-argument-and-persuasion-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For the claim 'We should have a school garden', give one reason and one piece of evidence that could support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reason and evidence",
                              "statement": "Reasons explain why; evidence supports with facts or examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason: 'It would teach students where food comes from and encourage healthy eating.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Evidence: 'Schools with gardens report pupils eating more vegetables' or 'students could sell surplus produce to fund trips.'",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Reason: teaches where food comes from / healthy eating. Evidence: schools with gardens report better eating habits, or produce could be sold.",
          "commonErrors": [
                    "Giving another claim instead of a reason, e.g. 'It would be good.'"
          ]
},
        },
        {
          id: "el8-u8-argument-and-persuasion-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why addressing a counter-argument makes an argument stronger, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Counter-argument",
                              "statement": "Addressing the opposition shows the argument has been tested."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: ignoring the other side makes an argument look one-sided; the audience may raise it themselves.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Addressing it shows the writer has considered both sides and still stands by the claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: arguing for later school start while admitting 'some say it clashes with parents' work' and rebutting it strengthens credibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Addressing counter-arguments shows the position has been tested and makes the writer more credible; e.g. admitting a scheduling concern then rebutting it.",
          "commonErrors": [
                    "Saying counter-arguments 'weaken' the argument — they strengthen it when handled well."
          ]
},
        },
        {
          id: "el8-u8-argument-and-persuasion-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student argues: 'We should ban homework because it's boring.' Identify two weaknesses in this argument and improve it with a reason and evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument quality",
                              "statement": "A strong argument needs a clear claim, reasons and evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weakness 1: 'boring' is a weak, subjective reason — it doesn't address whether homework is useful.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Weakness 2: no evidence — the claim is just asserted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improvement: 'Homework should be reduced, not banned, because excessive homework causes stress — a survey of Year 10 students found most spend over two hours a night.'",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Weaknesses: 'boring' is subjective and there's no evidence. Improved: 'Homework should be reduced, not banned, because excessive amounts cause stress — surveys show students spend over two hours a night.'",
          "commonErrors": [
                    "Identifying only one weakness.",
                    "Improving with another unsupported claim rather than reason + evidence."
          ]
},
        },
        {
          id: "el8-u8-argument-and-persuasion-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between a reason and evidence in an argument, and give one example of each for the claim 'The school should have more bike racks'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reason",
                              "statement": "Why the claim is true."
                    },
                    {
                              "kind": "definition",
                              "name": "Evidence",
                              "statement": "Facts, examples or quotations supporting a reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason explains the logic: 'More racks would encourage cycling to school.'",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Evidence supports with a fact or example: 'Last year, twenty students said they would cycle if secure racks existed.'",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The distinction: a reason says why it should be true; evidence shows it is or could be true.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear distinction with accurate examples of each."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Distinction partly clear or one example weak."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Terms confused or no examples."
                    }
          ],
          "finalAnswer": "Reason: 'More racks would encourage cycling.' Evidence: 'Twenty students said they would cycle if secure racks existed.'",
          "commonErrors": [
                    "Giving evidence as a reason or vice versa — 'because it's good' is neither."
          ]
},
        },
        {
          id: "el8-u8-argument-and-persuasion-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about argument and persuasion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define 'claim', 'reason', 'evidence' and 'counter-argument'.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "For the claim 'Students should be able to choose their own uniform', give one reason and one piece of evidence.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write a paragraph arguing for your claim that includes a counter-argument and a rebuttal.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Argument terms",
                              "statement": "Claim, reason, evidence and counter-argument are the building blocks."
                    },
                    {
                              "kind": "technique",
                              "name": "Rebuttal",
                              "statement": "Addressing the opposing view strengthens the argument."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Claim: point of view; reason: why it's true; evidence: facts/examples supporting; counter-argument: the opposing view.",
                              "marks": 4,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reason: 'Choice would let students express individuality and feel more comfortable.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evidence: 'Schools with optional uniform items report higher self-esteem scores' or a student survey result.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Clear claim stated early in the paragraph.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Counter-argument acknowledged fairly, e.g. 'Some say uniform creates equality.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rebuttal challenges it, e.g. 'But equality of appearance matters less than confidence and comfort.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Paragraph is coherent, uses a reason and evidence, and ends reinforcing the claim.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Coherent paragraph with claim, reason, evidence, counter-argument and rebuttal."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Argument present but missing one element or underdeveloped."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Assertion without structure."
                    }
          ],
          "finalAnswer": "(a) Four accurate definitions. (b) Reason and evidence as above. (c) A structured paragraph acknowledging and rebutting the counter-argument.",
          "commonErrors": [
                    "In (c), stating the counter-argument then ignoring it rather than rebutting it.",
                    "In (b), giving an opinion as evidence ('it's nicer')."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u8-presenting-notes",
      title: "Presentations and argument — notes",
      summary: "Structure: introduction, signposted body, conclusion. Argument: claim + reasons + evidence + counter-argument + rebuttal.",
      sections: [
        { heading: "Presentation", body: "Hook in ten seconds; signpost with first/next/finally; keep visuals simple; rehearse to time." },
        { heading: "Argument", body: "Claim needs reasons; reasons need evidence; always address the opposing view with a rebuttal." },
        { heading: "Persuasion", body: "Rhetorical questions, rule of three and emotive language persuade — but only when honest." },
      ],
    },
  ],
};
