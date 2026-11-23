import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "el8-u9-lesson-9-2",
  code: "9-2",
  title: "Discussion and Debate",
  goal: "I CAN take part in discussions and debates by taking turns, building on others' ideas and arguing with reasons and counter-arguments.",
  standards: ["KS3 Spoken Language", "KS3 AO1", "KS3 AO2"],
  
  vocabulary: [
    { term: "Turn-taking", definition: "Sharing speaking time fairly so everyone can contribute." },
    { term: "Building on ideas", definition: "Extending or improving someone else's point rather than just repeating it." },
    { term: "Clarifying question", definition: "A question asked to check you have understood a speaker correctly." },
    { term: "Claim", definition: "The main argument a debater wants the audience to accept." },
    { term: "Counter-argument", definition: "The opposing view, raised and then answered." },
    { term: "Rebuttal", definition: "The response that argues against a counter-argument." },
  ],
  concepts: [
    {
      id: "el8-u9-discussion-skills",
      title: "Discussion skills",
      skill: "Contribute to discussions by taking turns, building on ideas, asking questions and summarising points.",
      lesson: {
        sections: [
          {
            heading: "Taking turns and listening",
            body: "A good discussion is a relay, not a race. Wait for a natural pause, then take your turn. While others speak, listen actively: note their points, watch their body language, and decide whether you agree, disagree or want to add something. Interrupting or talking over people ends discussion before it starts.",
          },
          {
            heading: "Building, questioning, summarising",
            body: "Strong contributors do more than state opinions. **Build** on others: 'I agree with Aisha, and I'd add that...'. **Question** to test ideas: 'What would happen if we tried that for a month?'. **Summarise** to keep everyone aligned: 'So far we've agreed on a trial and a survey.' If you disagree, disagree with the idea, not the person.",
          },
          {
            heading: "Ground rules",
            body: "Good discussions set rules first: one speaker at a time, no put-downs, everyone gets a turn, decisions need reasons. In a school council or group project, someone should chair — opening the topic, keeping time, and summing up at the end.",
          },
        ],
        keyFormulas: [
          { name: "Discussion moves", statement: "Build on, question, summarise, agree-with-extension." },
          { name: "Disagree well", statement: "Challenge the idea with reasons, not the person." },
          { name: "Chair's role", statement: "Open, keep to time, invite quiet voices, sum up." },
        ],
        workedExample: {
          problem: "In a discussion about school trips, a classmate says 'I think trips are a waste of money.' Write a reply that builds on the idea.",
          solution: "'I see your point about cost, and the coach hire is expensive. But I'd add that the museum trip links directly to our history topic — isn't that worth it? What if we compared costs per student for each trip and picked the best value?' This agrees partially, extends with a reason and asks a question to move forward.",
        },
      },
      questions: [
        {
          id: "el8-u9-discussion-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "School Council Meeting",
          "author": "Written for Akademik Space",
          "text": "Aisha: I think we should get more vegetarian options in the canteen.\nBen: I agree, but only if the meat options stay — my brother plays rugby and needs the protein.\nAisha: That's fair. What if we trial a 'Meat-Free Monday' first?\nMrs Cole: Good idea. Let's run it for half a term and survey students afterwards.\nBen: Can we add a feedback box by the till as well? Then we'll get real numbers.\nMrs Cole: Excellent. I'll put it on the agenda for next week."
},
          stem: "In the transcript, what does Aisha do when Ben raises a concern about protein?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "She ignores his point and repeats her own"
                    },
                    {
                              "id": "b",
                              "text": "She accepts it and proposes a compromise"
                    },
                    {
                              "id": "c",
                              "text": "She asks him to leave the meeting"
                    },
                    {
                              "id": "d",
                              "text": "She changes the subject to uniforms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Building on ideas",
                              "statement": "Accept valid points and find a compromise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aisha says 'That's fair' then offers a trial, which accepts Ben's concern and adjusts her proposal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** She accepts it and proposes a compromise.",
          "commonErrors": [
                    "Choosing 'ignores' because Aisha does not fully drop her idea; she adapts it instead."
          ]
},
        },
        {
          id: "el8-u9-discussion-skills-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "School Council Meeting",
          "author": "Written for Akademik Space",
          "text": "Aisha: I think we should get more vegetarian options in the canteen.\nBen: I agree, but only if the meat options stay — my brother plays rugby and needs the protein.\nAisha: That's fair. What if we trial a 'Meat-Free Monday' first?\nMrs Cole: Good idea. Let's run it for half a term and survey students afterwards.\nBen: Can we add a feedback box by the till as well? Then we'll get real numbers.\nMrs Cole: Excellent. I'll put it on the agenda for next week."
},
          stem: "Write one sentence Ben could use to build on Aisha's 'Meat-Free Monday' idea instead of just agreeing with it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Building on ideas",
                              "statement": "Extend a point with new reasoning or a suggestion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "References or accepts Aisha's trial idea rather than starting a new topic.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Adds something new: an extension, example or suggestion, e.g. adding a vegetarian option on other days too.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'Good compromise — and if the trial works, couldn't we add one vegetarian option on other days as well?'",
          "commonErrors": [
                    "Repeating 'I agree' with no addition.",
                    "Starting an unrelated point."
          ]
},
        },
        {
          id: "el8-u9-discussion-skills-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "School Council Meeting",
          "author": "Written for Akademik Space",
          "text": "Aisha: I think we should get more vegetarian options in the canteen.\nBen: I agree, but only if the meat options stay — my brother plays rugby and needs the protein.\nAisha: That's fair. What if we trial a 'Meat-Free Monday' first?\nMrs Cole: Good idea. Let's run it for half a term and survey students afterwards.\nBen: Can we add a feedback box by the till as well? Then we'll get real numbers.\nMrs Cole: Excellent. I'll put it on the agenda for next week."
},
          stem: "Identify two discussion skills shown in the transcript, with evidence for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion skills",
                              "statement": "Turn-taking, building, questioning, summarising."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Building on ideas: Aisha accepts Ben's concern and proposes a trial.",
                              "evidence": "What if we trial a 'Meat-Free Monday' first?",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Adding practical detail: Ben suggests a feedback box to gather evidence.",
                              "evidence": "a feedback box by the till",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Moving the discussion forward: Mrs Cole turns ideas into an action (trial, survey, agenda item).",
                              "evidence": "Let's run it for half a term and survey students",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Skills shown include building on ideas ('What if we trial...'), adding evidence-gathering ('feedback box'), and summarising/action ('I'll put it on the agenda').",
          "commonErrors": [
                    "Naming skills without quoting evidence.",
                    "Identifying only one skill twice."
          ]
},
        },
        {
          id: "el8-u9-discussion-skills-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "School Council Meeting",
          "author": "Written for Akademik Space",
          "text": "Aisha: I think we should get more vegetarian options in the canteen.\nBen: I agree, but only if the meat options stay — my brother plays rugby and needs the protein.\nAisha: That's fair. What if we trial a 'Meat-Free Monday' first?\nMrs Cole: Good idea. Let's run it for half a term and survey students afterwards.\nBen: Can we add a feedback box by the till as well? Then we'll get real numbers.\nMrs Cole: Excellent. I'll put it on the agenda for next week."
},
          stem: "Explain how the chair, Mrs Cole, keeps the discussion focused and moves it forward.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Chairing a discussion",
                              "statement": "Confirm ideas, add structure, assign actions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "She validates contributions quickly ('Good idea', 'Excellent'), keeping speakers confident and the tone positive.",
                              "evidence": "Good idea. Let's run it for half a term",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She converts suggestions into concrete plans with timescales and measures.",
                              "evidence": "run it for half a term and survey students afterwards",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She incorporates Ben's suggestion rather than ignoring it, showing she is listening.",
                              "evidence": "Can we add a feedback box",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "She closes with a clear next step, so the discussion ends in action not drift.",
                              "evidence": "I'll put it on the agenda for next week",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Mrs Cole affirms ideas, turns them into a timed trial with a survey, accepts Ben's addition, and ends with a definite next step on the agenda.",
          "commonErrors": [
                    "Saying she 'leads' without specific evidence.",
                    "Ignoring how she closes the discussion."
          ]
},
        },
        {
          id: "el8-u9-discussion-skills-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "School Council Meeting",
          "author": "Written for Akademik Space",
          "text": "Aisha: I think we should get more vegetarian options in the canteen.\nBen: I agree, but only if the meat options stay — my brother plays rugby and needs the protein.\nAisha: That's fair. What if we trial a 'Meat-Free Monday' first?\nMrs Cole: Good idea. Let's run it for half a term and survey students afterwards.\nBen: Can we add a feedback box by the till as well? Then we'll get real numbers.\nMrs Cole: Excellent. I'll put it on the agenda for next week."
},
          stem: "Analyse how effectively the school council discussion moves from problem to decision. Refer to the transcript.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion analysis",
                              "statement": "Track how a talk moves from proposal to action."
                    },
                    {
                              "kind": "technique",
                              "name": "Compromise",
                              "statement": "Trial periods and evidence reduce disagreement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A clear proposal opens the discussion, giving everyone a focus.",
                              "evidence": "more vegetarian options in the canteen",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A concern is raised respectfully with a reason, not dismissed.",
                              "evidence": "my brother plays rugby and needs the protein",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Aisha's compromise (a trial) resolves the disagreement without abandoning either view.",
                              "evidence": "What if we trial a 'Meat-Free Monday' first?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The chair adds measurement (survey, feedback box), turning opinion into evidence.",
                              "evidence": "Then we'll get real numbers",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The discussion ends with a named action and deadline, so nothing is left vague.",
                              "evidence": "I'll put it on the agenda for next week",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: the discussion is effective — it balances advocacy and objection, and converts both into a testable plan.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Analyses the whole arc with evidence and a clear judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Analyses most of the arc; judgement partly supported."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple comments; limited evidence."
                    }
          ],
          "finalAnswer": "Very effective: proposal → reasoned objection → compromise trial → evidence-gathering → scheduled action.",
          "commonErrors": [
                    "Retelling the transcript instead of analysing it.",
                    "No judgement on effectiveness."
          ]
},
        },
        {
          id: "el8-u9-discussion-skills-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "School Council Meeting",
          "author": "Written for Akademik Space",
          "text": "Aisha: I think we should get more vegetarian options in the canteen.\nBen: I agree, but only if the meat options stay — my brother plays rugby and needs the protein.\nAisha: That's fair. What if we trial a 'Meat-Free Monday' first?\nMrs Cole: Good idea. Let's run it for half a term and survey students afterwards.\nBen: Can we add a feedback box by the till as well? Then we'll get real numbers.\nMrs Cole: Excellent. I'll put it on the agenda for next week."
},
          stem: "Answer all parts of this question about discussion skills.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two ground rules that would help a discussion like this run well.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how turn-taking works in the transcript: who speaks when and why it is fair.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Plan your own contribution to a class discussion about homework. Write what you would say to open, build on another point, and summarise at the end.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Discussion ground rules",
                              "statement": "Turn-taking, respect, reasons, summing up."
                    },
                    {
                              "kind": "skill",
                              "name": "Contributing",
                              "statement": "Open, build, question, summarise."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "One speaker at a time / wait for a pause before taking a turn.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Disagree with ideas, not people; give reasons for views.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Aisha opens with a proposal, giving the topic a direction.",
                              "evidence": "I think we should get more vegetarian options",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ben responds directly to her point, so the turns build on each other.",
                              "evidence": "I agree, but only if the meat options stay",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mrs Cole enters to move the discussion from talk to decision.",
                              "evidence": "Let's run it for half a term",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each speaker gets a turn and no one dominates; the chair ensures everyone is heard.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Opens with a clear position or question on homework.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Builds on another's point with an extension or agreement-plus-addition.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses a question to test or deepen the discussion.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Summarises the emerging consensus accurately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Language is appropriate and sentences are accurate.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The three contributions form a coherent discussion arc.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "All three contributions present, relevant and well-phrased."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Most contributions present; some generic phrasing."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Partial or unclear contributions."
                    }
          ],
          "finalAnswer": "(a) One speaker at a time; disagree with ideas not people. (b) Turns build on each other and the chair converts talk to action. (c) A three-part contribution plan on homework.",
          "commonErrors": [
                    "Ground rules that are vague ('be nice').",
                    "A contribution plan with no summarising move."
          ],
          "examinerNote": "Part (c) is marked for effective spoken contribution (AO4)."
},
        },
      ],
    },
    {
      id: "el8-u9-debate-argument",
      title: "Debate: claims, reasons and counter-arguments",
      skill: "Structure an argument with a claim, reasons and evidence, and answer counter-arguments with rebuttals.",
      lesson: {
        sections: [
          {
            heading: "The anatomy of an argument",
            body: "Every debate speech has a **claim** (what you want people to believe), **reasons** (why it is true) and **evidence** (facts, examples, expert views). A strong claim is clear and arguable: 'School uniforms should be abolished' can be debated; 'Uniforms are nice' cannot. Give two or three reasons, not ten.",
          },
          {
            heading: "Counter-arguments and rebuttals",
            body: "Ignoring the other side weakens you; answering it strengthens you. Acknowledge the strongest counter-argument, then **rebut** it: 'Some say uniforms save money on clothes — but second-hand uniform sales already exist, so the saving is small.' You can concede a small point and still win the argument.",
          },
          {
            heading: "Debate structure and delivery",
            body: "Open with your claim, give reasons with evidence, handle the counter-argument, then restate your claim in a strong close. In a formal debate you speak for or against a motion; in class debate, listen for your opponent's best point and prepare a rebuttal.",
          },
        ],
        keyFormulas: [
          { name: "Argument formula", statement: "Claim → reasons → evidence → rebuttal → restated claim." },
          { name: "Strong claim", statement: "Clear, arguable, specific." },
          { name: "Rebuttal pattern", statement: "Acknowledge → answer → evidence." },
        ],
        workedExample: {
          problem: "Build an argument for the claim 'Homework should be optional.'",
          solution: "Claim: homework should be optional. Reason 1: it extends the school day into family time. Evidence: a survey of 200 students found most do homework after 9pm. Reason 2: quality over quantity — projects beat worksheets. Counter: 'But practice is needed for exams.' Rebuttal: 'Practice happens in lessons and revision sessions; homework adds little measurable gain.' Close: restate that choice respects students' time.",
        },
      },
      questions: [
        {
          id: "el8-u9-debate-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a counter-argument to the claim 'School trips should be free for all students'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'Trips make learning memorable.'"
                    },
                    {
                              "id": "b",
                              "text": "'Free trips would cost the school a lot of money.'"
                    },
                    {
                              "id": "c",
                              "text": "'I went on a great trip last year.'"
                    },
                    {
                              "id": "d",
                              "text": "'Trips should happen more often.'"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Counter-argument",
                              "statement": "The opposing view raised against a claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cost objection argues against free trips, making it a counter-argument; the others support or extend the claim.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The cost objection.",
          "commonErrors": [
                    "Choosing (a) or (d), which are reasons supporting the claim, not objections to it."
          ]
},
        },
        {
          id: "el8-u9-debate-argument-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Turn this bare claim into claim + reason + evidence: 'Phones should be banned in school.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Building arguments",
                              "statement": "Claim needs reasons and evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Keeps or sharpens the claim: phones should be banned/restricted in school.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Adds a reason and supporting evidence, e.g. distraction lowers concentration, citing a study or observation.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'Phones should be banned in lessons because they constantly distract — a 2023 study found students check them on average 76 times a day.'",
          "commonErrors": [
                    "Adding another claim instead of a reason.",
                    "Evidence that is just an opinion."
          ]
},
        },
        {
          id: "el8-u9-debate-argument-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Debate speech extract",
          "author": "Written for Akademik Space",
          "text": "I am here to argue that school should start later. My first reason is health: teenagers' body clocks shift during puberty, so a 9am start fights biology. The evidence is clear — the American Academy of Sleep Medicine recommends at least eight hours of sleep for teenagers, yet the average school night allows barely seven. My second reason is learning: a well-rested brain concentrates better, and schools in Finland, where lessons start at 10, regularly top international rankings. So when you hear 'but the timetable is fixed', remember that timetables were designed for adults, not adolescents."
},
          stem: "In this debate speech, identify the claim, one reason and one piece of evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Argument elements",
                              "statement": "Claim, reason, evidence are distinct parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Claim: 'school should start later'.",
                              "evidence": "I am here to argue that school should start later",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Reason: body clocks shift in puberty so early starts fight biology (or learning/concentration).",
                              "evidence": "teenagers' body clocks shift during puberty",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Evidence: the sleep academy recommendation and the Finland example.",
                              "evidence": "the American Academy of Sleep Medicine recommends",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Claim: later school start; reason: puberty shifts body clocks; evidence: sleep academy guideline and Finland's 10am start.",
          "commonErrors": [
                    "Confusing a reason with evidence.",
                    "Quoting without identifying the element."
          ]
},
        },
        {
          id: "el8-u9-debate-argument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "Debate speech extract",
          "author": "Written for Akademik Space",
          "text": "I am here to argue that school should start later. My first reason is health: teenagers' body clocks shift during puberty, so a 9am start fights biology. The evidence is clear — the American Academy of Sleep Medicine recommends at least eight hours of sleep for teenagers, yet the average school night allows barely seven. My second reason is learning: a well-rested brain concentrates better, and schools in Finland, where lessons start at 10, regularly top international rankings. So when you hear 'but the timetable is fixed', remember that timetables were designed for adults, not adolescents."
},
          stem: "Explain how a debater can use a counter-argument to strengthen their own case, using the phrase 'but the timetable is fixed' as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rebuttal",
                              "statement": "Answer objections with reasons and evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Naming the opponent's best point shows confidence and fairness, not weakness.",
                              "evidence": "when you hear 'but the timetable is fixed'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The speaker rebuts by challenging the assumption behind the objection: timetables were not designed for teenagers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The rebuttal reframes the objection as a solvable problem rather than a fixed barrier.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: listeners who held the objection are answered before they can raise it, strengthening the speaker's credibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Raising and rebutting the objection shows fairness; the speaker answers it by arguing timetables were designed for adults, turning a barrier into a fixable problem.",
          "commonErrors": [
                    "Saying counter-arguments 'confuse' the audience.",
                    "Not linking the rebuttal to the claim."
          ]
},
        },
        {
          id: "el8-u9-debate-argument-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Debate speech extract",
          "author": "Written for Akademik Space",
          "text": "I am here to argue that school should start later. My first reason is health: teenagers' body clocks shift during puberty, so a 9am start fights biology. The evidence is clear — the American Academy of Sleep Medicine recommends at least eight hours of sleep for teenagers, yet the average school night allows barely seven. My second reason is learning: a well-rested brain concentrates better, and schools in Finland, where lessons start at 10, regularly top international rankings. So when you hear 'but the timetable is fixed', remember that timetables were designed for adults, not adolescents."
},
          stem: "Analyse the structure of this debate speech. How does the speaker organise the argument and handle opposition?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Debate structure",
                              "statement": "Claim, reasons with evidence, rebuttal, restated claim."
                    },
                    {
                              "kind": "technique",
                              "name": "Evidence",
                              "statement": "Named authorities and real-world examples persuade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The claim is stated explicitly in the first sentence, giving listeners a clear target.",
                              "evidence": "I am here to argue that school should start later",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reasons are signposted ('My first reason', 'My second reason'), making the structure easy to follow.",
                              "evidence": "My first reason is health",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each reason carries evidence: a named medical body and a real country's example.",
                              "evidence": "schools in Finland, where lessons start at 10",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The counter-argument is anticipated and rebuffed in the close.",
                              "evidence": "timetables were designed for adults",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Signposting and parallel 'reason' phrases create a rhythm suited to spoken delivery.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: a well-organised argument that anticipates opposition rather than waiting for it.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Analyses claim, structure, evidence and rebuttal with a judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Covers most elements; partial evaluation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple comments; little evidence."
                    }
          ],
          "finalAnswer": "Well-structured: explicit claim, two signposted reasons each with evidence, and an anticipated rebuttal — organised for the ear.",
          "commonErrors": [
                    "Listing devices without explaining their persuasive effect.",
                    "Missing the rebuttal."
          ]
},
        },
        {
          id: "el8-u9-debate-argument-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Debate speech extract",
          "author": "Written for Akademik Space",
          "text": "I am here to argue that school should start later. My first reason is health: teenagers' body clocks shift during puberty, so a 9am start fights biology. The evidence is clear — the American Academy of Sleep Medicine recommends at least eight hours of sleep for teenagers, yet the average school night allows barely seven. My second reason is learning: a well-rested brain concentrates better, and schools in Finland, where lessons start at 10, regularly top international rankings. So when you hear 'but the timetable is fixed', remember that timetables were designed for adults, not adolescents."
},
          stem: "Answer all parts of this question about debating.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the claim and two reasons given in the speech.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the speaker uses evidence to support each reason.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a three-sentence rebuttal to the counter-argument 'Later starts mean students get home too late for clubs and jobs.'",
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
                              "name": "Argument elements",
                              "statement": "Claim, reasons, evidence, rebuttal."
                    },
                    {
                              "kind": "technique",
                              "name": "Rebuttal writing",
                              "statement": "Acknowledge, answer, support."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Claim: school should start later.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reasons: health/body clocks and learning/concentration.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Health reason is supported by the named sleep academy recommendation of eight hours versus barely seven.",
                              "evidence": "the American Academy of Sleep Medicine recommends at least eight hours",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Learning reason is supported by the Finland example of 10am starts and top rankings.",
                              "evidence": "schools in Finland, where lessons start at 10",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Acknowledges the concern fairly rather than dismissing it.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Answers it with a reason, e.g. clubs could shift later too or students gain an hour of evening.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Supports the answer with evidence or example.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ends by linking back to the claim or benefit.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentences are accurate, punctuated and suitable for speech.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Complete rebuttal: acknowledges, answers with reason and evidence, links to claim."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Answers the objection with some support; less developed."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple disagreement without real rebuttal."
                    }
          ],
          "finalAnswer": "(a) Claim: later starts; reasons: health and learning. (b) Sleep academy data and Finland's example. (c) A three-sentence rebuttal acknowledging then answering the objection.",
          "commonErrors": [
                    "Rebuttal that just repeats the claim.",
                    "No acknowledgement of the opposing point."
          ],
          "examinerNote": "Part (c) is marked for persuasive rebuttal technique (AO4)."
},
        },
      ],
    },
  ],

};
