import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "el8-u9-lesson-9-1",
  code: "9-1",
  title: "Speaking Effectively",
  goal: "I CAN structure a talk with a hook, signposted points and a strong close, and use tone and body language to hold an audience.",
  standards: ["KS3 Spoken Language", "KS3 AO2", "KS3 AO4"],
  
  vocabulary: [
    { term: "Hook", definition: "An opening device that grabs attention, such as a question, statistic or bold statement." },
    { term: "Signposting", definition: "Phrases that tell the audience where the talk is going, such as 'First...' or 'Moving on to...'" },
    { term: "Pace", definition: "The speed of delivery; slowing down signals importance, speeding up builds energy." },
    { term: "Pause", definition: "A deliberate silence that lets a point land or builds anticipation." },
    { term: "Register", definition: "The level of formality in language, chosen to suit the audience." },
    { term: "Call to action", definition: "A closing that tells the audience what to think or do next." },
  ],
  concepts: [
    {
      id: "el8-u9-structuring-a-talk",
      title: "Structuring a presentation",
      skill: "Structure a spoken text with an engaging opening, clear signposts and a memorable close.",
      lesson: {
        sections: [
          {
            heading: "Openings that hook",
            body: "A talk needs a first thirty seconds that earn attention. Strong hooks include a bold statement, a surprising statistic, a question the audience must answer, or a short anecdote. State the purpose early so the audience knows why they are listening. Avoid opening with 'Hi, today I will talk about...' unless you quickly follow it with a hook.",
          },
          {
            heading: "Signposted main points",
            body: "Give the audience one idea at a time. Signpost each new point with phrases like 'First', 'Another reason', 'But here is the problem' and 'Finally'. Support each point with an example, a fact or a story so it lands. If a talk has three points, the audience can hold them; ten points is a list, not a talk.",
          },
          {
            heading: "Closings that land",
            body: "Do not trail off. Restate your main message in fresh words, answer the question you opened with, and finish with a call to action or a memorable final image. A strong close is short: one or two sentences, delivered slowly.",
          },
        ],
        keyFormulas: [
          { name: "Hook types", statement: "Bold statement, statistic, question, anecdote, image." },
          { name: "Signposts", statement: "'First', 'Next', 'The key point is', 'Finally'." },
          { name: "Close formula", statement: "Restate + answer + call to action." },
        ],
        workedExample: {
          problem: "Plan a two-minute talk: 'Should school days start later?'",
          solution: "Hook: 'Right now, thousands of you are running on four hours of sleep.' Purpose: argue for later starts. Point 1 (signpost 'First'): sleep and health, with one statistic. Point 2 ('Next'): learning and concentration, with a classroom example. Counter ('But'): timetable problems, answered with 'two schools already trialled it'. Close: 'So next time your alarm screams at 7am, ask why we insist on it.'",
        },
      },
      questions: [
        {
          id: "el8-u9-structuring-a-talk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Talk extract: Why School Should Start Later",
          "author": "Written for Akademik Space",
          "text": "Every morning at 7.15, alarm clocks across the country shriek and teenagers drag themselves out of bed. I want to talk about one simple change: starting school later. It sounds small, but it would change millions of lives. First, consider sleep. Teenagers need around nine hours of sleep a night, yet most get far less. Next, think about learning. A tired brain cannot concentrate; lessons feel longer and harder when students are exhausted. But is it practical? Buses, clubs and after-school jobs all rely on the current timetable. Yes, change is disruptive. However, several countries already start school later, and their students are healthier and do better in exams. So I am not asking you to agree with me today. I am asking you to think about a question we have avoided for too long: why do we insist that teenagers learn when their bodies are least able to?"
},
          stem: "In the talk extract, which technique does the speaker use in the opening line 'alarm clocks across the country shriek'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A statistic"
                    },
                    {
                              "id": "b",
                              "text": "A rhetorical question"
                    },
                    {
                              "id": "c",
                              "text": "Personification"
                    },
                    {
                              "id": "d",
                              "text": "An anecdote"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Giving human qualities or actions to objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clocks cannot really shriek; the writer gives them a human sound to make the image vivid.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(c)** Personification.",
          "commonErrors": [
                    "Choosing a statistic because the time 7.15 is mentioned; the question asks about 'shriek'."
          ]
},
        },
        {
          id: "el8-u9-structuring-a-talk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this weak opening so it hooks the audience and states the purpose: 'Hi. Today I will talk about school lunches.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Strong openings",
                              "statement": "Hook first, then purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Replaces the flat greeting with a hook such as a question, statistic or bold statement about school lunches.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "States the purpose of the talk clearly after the hook.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'Some of you queued twenty minutes for a cold burger yesterday. Today I want to argue that our lunch menu is letting you down — and I have three fixes.'",
          "commonErrors": [
                    "Keeping 'Hi everyone' as the first line.",
                    "A hook that is off-topic for school lunches."
          ]
},
        },
        {
          id: "el8-u9-structuring-a-talk-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Talk extract: Why School Should Start Later",
          "author": "Written for Akademik Space",
          "text": "Every morning at 7.15, alarm clocks across the country shriek and teenagers drag themselves out of bed. I want to talk about one simple change: starting school later. It sounds small, but it would change millions of lives. First, consider sleep. Teenagers need around nine hours of sleep a night, yet most get far less. Next, think about learning. A tired brain cannot concentrate; lessons feel longer and harder when students are exhausted. But is it practical? Buses, clubs and after-school jobs all rely on the current timetable. Yes, change is disruptive. However, several countries already start school later, and their students are healthier and do better in exams. So I am not asking you to agree with me today. I am asking you to think about a question we have avoided for too long: why do we insist that teenagers learn when their bodies are least able to?"
},
          stem: "Find two examples of signposting in the talk extract and explain how each helps the audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Signposting",
                              "statement": "Phrases that orient the listener through the talk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies 'First, consider sleep' as a signpost introducing point one.",
                              "evidence": "First, consider sleep",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Identifies 'Next, think about learning' or 'But is it practical?' as a second signpost.",
                              "evidence": "Next, think about learning",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Explains that signposts let listeners track the structure and prepare for each new point.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'First, consider sleep' and 'Next, think about learning' signpost the two main points; 'But is it practical?' signals a counter-argument, helping the audience follow the talk's shape.",
          "commonErrors": [
                    "Quoting the lines without explaining their function.",
                    "Calling every sentence a signpost."
          ]
},
        },
        {
          id: "el8-u9-structuring-a-talk-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "Talk extract: Why School Should Start Later",
          "author": "Written for Akademik Space",
          "text": "Every morning at 7.15, alarm clocks across the country shriek and teenagers drag themselves out of bed. I want to talk about one simple change: starting school later. It sounds small, but it would change millions of lives. First, consider sleep. Teenagers need around nine hours of sleep a night, yet most get far less. Next, think about learning. A tired brain cannot concentrate; lessons feel longer and harder when students are exhausted. But is it practical? Buses, clubs and after-school jobs all rely on the current timetable. Yes, change is disruptive. However, several countries already start school later, and their students are healthier and do better in exams. So I am not asking you to agree with me today. I am asking you to think about a question we have avoided for too long: why do we insist that teenagers learn when their bodies are least able to?"
},
          stem: "Explain how the speaker structures the talk from opening to close, using evidence from the extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Talk structure",
                              "statement": "Hook, purpose, points, counter-argument, close."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opening hooks with an image of alarm clocks and states the purpose: starting school later.",
                              "evidence": "alarm clocks across the country shriek",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Two signposted points follow: sleep and learning.",
                              "evidence": "First, consider sleep",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A counter-argument ('But is it practical?') is raised and answered with evidence from other countries.",
                              "evidence": "several countries already start school later",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The close avoids a flat summary, restating the challenge as a question about why we accept the status quo.",
                              "evidence": "why do we insist that teenagers learn",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The talk moves hook → purpose → two signposted points → counter-argument answered → a challenging final question, a clear arc that keeps listeners oriented.",
          "commonErrors": [
                    "Listing points without commenting on structure.",
                    "Ignoring the counter-argument section."
          ]
},
        },
        {
          id: "el8-u9-structuring-a-talk-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Talk extract: Why School Should Start Later",
          "author": "Written for Akademik Space",
          "text": "Every morning at 7.15, alarm clocks across the country shriek and teenagers drag themselves out of bed. I want to talk about one simple change: starting school later. It sounds small, but it would change millions of lives. First, consider sleep. Teenagers need around nine hours of sleep a night, yet most get far less. Next, think about learning. A tired brain cannot concentrate; lessons feel longer and harder when students are exhausted. But is it practical? Buses, clubs and after-school jobs all rely on the current timetable. Yes, change is disruptive. However, several countries already start school later, and their students are healthier and do better in exams. So I am not asking you to agree with me today. I am asking you to think about a question we have avoided for too long: why do we insist that teenagers learn when their bodies are least able to?"
},
          stem: "Analyse how effectively the speaker structures the talk. Evaluate the opening, the main points and the ending.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Structural evaluation",
                              "statement": "Judge how well each part of a talk does its job."
                    },
                    {
                              "kind": "convention",
                              "name": "Spoken structure",
                              "statement": "Opening, signposted points, counter-argument, close."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening is effective: personification and the shared image of the 7.15 alarm create instant recognition.",
                              "evidence": "alarm clocks across the country shriek",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The purpose is stated early and simply, so listeners know the direction.",
                              "evidence": "starting school later",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The main points are few, signposted and each is supported by a reason.",
                              "evidence": "First, consider sleep",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Addressing the counter-argument strengthens credibility rather than ignoring it.",
                              "evidence": "But is it practical?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The ending returns to a question, leaving the audience thinking rather than just agreeing.",
                              "evidence": "why do we insist",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall judgement: the structure is coherent and audience-aware; the only weakness is that the statistics are vague.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Evaluates all three parts with evidence and reaches a supported judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some evaluation with relevant evidence; judgement partly supported."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple comments; little evaluation or evidence."
                    }
          ],
          "finalAnswer": "Effective overall: a vivid hook, clear purpose, two well-signposted points, a counter-argument answered with evidence, and a thought-provoking close; minor weakness is vague statistics.",
          "commonErrors": [
                    "Describing the structure without evaluating it.",
                    "No overall judgement."
          ]
},
        },
        {
          id: "el8-u9-structuring-a-talk-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Talk extract: Why School Should Start Later",
          "author": "Written for Akademik Space",
          "text": "Every morning at 7.15, alarm clocks across the country shriek and teenagers drag themselves out of bed. I want to talk about one simple change: starting school later. It sounds small, but it would change millions of lives. First, consider sleep. Teenagers need around nine hours of sleep a night, yet most get far less. Next, think about learning. A tired brain cannot concentrate; lessons feel longer and harder when students are exhausted. But is it practical? Buses, clubs and after-school jobs all rely on the current timetable. Yes, change is disruptive. However, several countries already start school later, and their students are healthier and do better in exams. So I am not asking you to agree with me today. I am asking you to think about a question we have avoided for too long: why do we insist that teenagers learn when their bodies are least able to?"
},
          stem: "Answer all parts of this question about the talk extract.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the audience the speaker most likely has in mind and the purpose of the talk.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the speaker uses the counter-argument 'But is it practical?' to strengthen the talk.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Plan a three-minute talk on a topic of your choice. Give the hook, three signposted points and the close.",
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
                              "name": "Audience and purpose",
                              "statement": "Match structure and register to who is listening and why."
                    },
                    {
                              "kind": "technique",
                              "name": "Counter-argument",
                              "statement": "Raising and answering objections builds trust."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Audience is students/parents or a school community concerned about school life.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Purpose is to persuade listeners that later school starts would benefit teenagers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The speaker voices the obvious objection honestly instead of ignoring it.",
                              "evidence": "Buses, clubs and after-school jobs all rely on the current timetable",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Conceding the difficulty ('Yes, change is disruptive') makes the speaker seem fair-minded.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The rebuttal uses evidence: other countries already do it and students do better.",
                              "evidence": "their students are healthier and do better in exams",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Overall effect: the counter-argument turns a weakness into a strength and pre-empts listeners' doubts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "A strong hook appropriate to the topic is given.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Three main points are stated with signposts.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each point has support (example, fact or story).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "A counter-argument or anticipated doubt is addressed.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The close restates the message and ends with a call to action or memorable line.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The plan is coherent and suited to a three-minute spoken delivery.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Complete plan with strong hook, signposted points, support and an effective close."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Plan has most elements; hook or close less effective."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Partial plan; missing structure or signposts."
                    }
          ],
          "finalAnswer": "(a) Students/parents; to persuade them later starts would help teenagers. (b) The counter-argument is conceded honestly, then answered with evidence, which builds trust. (c) Any coherent three-part plan with hook, signposts and close earns marks.",
          "commonErrors": [
                    "Describing the counter-argument without analysing its effect.",
                    "A plan with points but no hook or close."
          ],
          "examinerNote": "Part (c) is marked for effective spoken structure (AO4)."
},
        },
      ],
    },
    {
      id: "el8-u9-tone-voice-audience",
      title: "Tone, voice and audience awareness",
      skill: "Control pace, pitch, volume and body language, and adapt register to the audience.",
      lesson: {
        sections: [
          {
            heading: "The vocal toolbox",
            body: "Speakers have four controls: **pace**, **pitch**, **volume** and **pause**. Slow down for important points and speed up for energy; raise pitch for questions and enthusiasm, lower it for seriousness; project volume so the back row hears you; use pauses before key words so they land. A monotone voice loses an audience faster than weak content.",
          },
          {
            heading: "Body language",
            body: "Stand facing the audience, feet shoulder-width apart. Use purposeful gestures — open palms for honesty, a pointed finger sparingly for emphasis. Make eye contact with different parts of the room rather than staring at one person or your notes. Do not fidget, pace or hide behind the lectern.",
          },
          {
            heading: "Adapting to the audience",
            body: "**Register** is how formal your language is. Friends get slang and contractions; governors get full sentences and precise vocabulary. Watch the audience: confused faces mean slow down or explain again; glazed faces mean change your approach. The same message can be delivered in many ways — choose the one that fits.",
          },
        ],
        keyFormulas: [
          { name: "Vocal controls", statement: "Pace, pitch, volume, pause." },
          { name: "Register scale", statement: "Informal (friends) → neutral (class) → formal (governors, interviews)." },
          { name: "Eye contact rule", statement: "Sweep the whole room; hold each area for a few seconds." },
        ],
        workedExample: {
          problem: "Deliver the message 'We need more litter bins' to (a) Year 7 form and (b) the school governors.",
          solution: "To Year 7: fast pace, friendly tone, 'Look, every break there's crisps packets everywhere — can we get more bins?' To governors: measured pace, formal register, 'The current provision of litter bins is inadequate; I propose a trial of six additional units near the dining hall.'",
        },
      },
      questions: [
        {
          id: "el8-u9-tone-voice-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The same message, two ways",
          "author": "Written for Akademik Space",
          "text": "To younger students: 'Right, listen up! Phones in lessons are a total nightmare, yeah? Every time someone buzzes it's like a wasp in your ear. So here's my plan: we vote next week. Bins by the door, pockets in class, simple. Deal?'\n\nTo governors: 'Good afternoon. I am proposing a phased trial of a phone-free policy across Key Stage 3, beginning in September. Evidence from three comparable schools shows a measurable improvement in lesson engagement. I would welcome the chance to present the data.'"
},
          stem: "Which version is most appropriate when speaking to the school governors?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'Phones are a nightmare, yeah?'"
                    },
                    {
                              "id": "b",
                              "text": "'Right, listen up!'"
                    },
                    {
                              "id": "c",
                              "text": "'I am proposing a phased trial of a phone-free policy'"
                    },
                    {
                              "id": "d",
                              "text": "'Simple. Deal?'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Register",
                              "statement": "Formal settings need formal language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Governors are an official audience, so precise, formal phrasing is appropriate; slang belongs with younger students.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** The formal proposal.",
          "commonErrors": [
                    "Choosing the friendly version because it is clearer; clarity does not make it appropriate."
          ]
},
        },
        {
          id: "el8-u9-tone-voice-audience-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this informal sentence for a formal audience: 'You guys have got to sort this out, it's doing my head in.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Register shift",
                              "statement": "Replace slang and contractions with precise, formal wording."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Removes slang and colloquial phrases such as 'you guys', 'sort this out' and 'doing my head in'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Uses formal alternatives, for example 'I would like to raise the issue of...' with accurate grammar.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'I would like to raise the issue of the current arrangements, which are causing considerable frustration.'",
          "commonErrors": [
                    "Keeping contractions such as 'it's'.",
                    "Being vague: 'This is a problem and needs fixing.'"
          ]
},
        },
        {
          id: "el8-u9-tone-voice-audience-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The same message, two ways",
          "author": "Written for Akademik Space",
          "text": "To younger students: 'Right, listen up! Phones in lessons are a total nightmare, yeah? Every time someone buzzes it's like a wasp in your ear. So here's my plan: we vote next week. Bins by the door, pockets in class, simple. Deal?'\n\nTo governors: 'Good afternoon. I am proposing a phased trial of a phone-free policy across Key Stage 3, beginning in September. Evidence from three comparable schools shows a measurable improvement in lesson engagement. I would welcome the chance to present the data.'"
},
          stem: "Compare the tone of the two versions in the extract. How does each adapt its language to its audience?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone and register",
                              "statement": "Word choice signals the intended audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The younger-student version uses slang, contractions and rhetorical questions, creating an informal, friendly tone.",
                              "evidence": "it's like a wasp in your ear",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The governors' version uses formal vocabulary, full sentences and evidence, creating a professional, persuasive tone.",
                              "evidence": "I am proposing a phased trial",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both deliver the same message but calibrate language, length of sentences and directness to fit the audience.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The first is casual and direct with slang and questions; the second is formal, measured and evidence-based — each matched to its audience.",
          "commonErrors": [
                    "Describing only one version.",
                    "Saying the first is 'better' rather than 'more appropriate for its audience'."
          ]
},
        },
        {
          id: "el8-u9-tone-voice-audience-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The same message, two ways",
          "author": "Written for Akademik Space",
          "text": "To younger students: 'Right, listen up! Phones in lessons are a total nightmare, yeah? Every time someone buzzes it's like a wasp in your ear. So here's my plan: we vote next week. Bins by the door, pockets in class, simple. Deal?'\n\nTo governors: 'Good afternoon. I am proposing a phased trial of a phone-free policy across Key Stage 3, beginning in September. Evidence from three comparable schools shows a measurable improvement in lesson engagement. I would welcome the chance to present the data.'"
},
          stem: "Explain how pace, pause and volume could be used effectively in the governors' version of the phone-free proposal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocal delivery",
                              "statement": "Pace, pause and volume shape meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A measured, even pace suits the formal register; slowing on 'phased trial' emphasises the careful plan.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "A pause after 'Good afternoon' lets the room settle and signals confidence.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear, projected volume ensures governors at the back hear every word without shouting.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "A pause before 'I would welcome the chance to present the data' gives the closing offer weight.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Measured pace with deliberate slowing on key phrases, a settling pause after the greeting, projected but not loud volume, and a pause before the closing offer.",
          "commonErrors": [
                    "Suggesting a fast, energetic delivery that would clash with the formal tone.",
                    "Ignoring the audience setting."
          ]
},
        },
        {
          id: "el8-u9-tone-voice-audience-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student is giving a five-minute presentation to the whole school. Analyse how body language and vocal delivery could make or break the presentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body language",
                              "statement": "Posture, gesture and eye contact communicate confidence."
                    },
                    {
                              "kind": "skill",
                              "name": "Vocal delivery",
                              "statement": "Pace, pitch, volume and pause carry meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eye contact across the room makes listeners feel included; staring at notes or one spot loses them.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Purposeful gestures reinforce points; fidgeting or hands in pockets undermines credibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Standing upright and facing the audience projects confidence and openness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Vocal variety — slower for key points, louder for emphasis, pauses for effect — keeps attention over five minutes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A flat monotone or mumbling suggests the speaker does not believe the message.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: delivery should match and reinforce the message; mismatch between nervous body language and confident words confuses the audience.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Analyses body language and voice with specific, linked effects and a judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Covers both areas with some specific detail; effects partly explained."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "General comments; little analysis."
                    }
          ],
          "finalAnswer": "Effective delivery requires open posture, purposeful gestures, swept eye contact and varied pace/pitch/volume; nervous or flat delivery undercuts even strong content.",
          "commonErrors": [
                    "Listing tips without explaining their effect.",
                    "Covering only voice or only body language."
          ]
},
        },
        {
          id: "el8-u9-tone-voice-audience-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The same message, two ways",
          "author": "Written for Akademik Space",
          "text": "To younger students: 'Right, listen up! Phones in lessons are a total nightmare, yeah? Every time someone buzzes it's like a wasp in your ear. So here's my plan: we vote next week. Bins by the door, pockets in class, simple. Deal?'\n\nTo governors: 'Good afternoon. I am proposing a phased trial of a phone-free policy across Key Stage 3, beginning in September. Evidence from three comparable schools shows a measurable improvement in lesson engagement. I would welcome the chance to present the data.'"
},
          stem: "Answer all parts of this question about tone, voice and audience.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two features of the younger-students' version that mark it as informal register.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the governors' version uses language to sound credible and persuasive.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write delivery notes for a speaker giving the governors' version: pace, pause, volume, gesture and eye contact.",
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
                              "name": "Register features",
                              "statement": "Slang, contractions and questions signal informality."
                    },
                    {
                              "kind": "skill",
                              "name": "Delivery planning",
                              "statement": "Match vocal and physical choices to the message."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Uses slang and colloquialisms such as 'listen up', 'nightmare' and 'Deal?'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Uses contractions and direct address ('yeah?') creating a casual, peer-to-peer tone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Formal vocabulary and full sentences ('I am proposing a phased trial') signal professionalism.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evidence is cited ('three comparable schools', 'measurable improvement') to support the proposal.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The polite offer 'I would welcome the chance to present the data' invites collaboration rather than demanding action.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Overall effect: measured, respectful and evidence-led, appropriate for an official audience.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pace: measured and even, slowing on 'phased trial' and 'measurable improvement'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pauses: after the greeting and before the closing offer to let points land.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Volume: clear projection to the back of the room without shouting.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gesture: open palms when citing evidence; minimal, controlled gestures overall.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Eye contact: sweep the room, holding each section of governors for a few seconds.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Notes are consistent with a formal, persuasive delivery.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Complete, audience-appropriate delivery notes covering all five elements."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Notes cover most elements with some detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Partial notes; elements missing or generic."
                    }
          ],
          "finalAnswer": "(a) Slang/colloquialisms and contractions with direct address. (b) Formal register, cited evidence and a polite collaborative close. (c) Delivery notes matching a formal, measured, evidence-led talk.",
          "commonErrors": [
                    "Quoting informal features without naming them.",
                    "Delivery notes that suit a casual speech, not governors."
          ],
          "examinerNote": "Part (c) is marked for appropriate delivery choices (AO4)."
},
        },
      ],
    },
  ],

};
