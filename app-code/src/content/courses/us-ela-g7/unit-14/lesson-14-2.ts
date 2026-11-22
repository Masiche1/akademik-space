import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const SPEECHPROMPT: TextExtract = {
  title: "Speaking Prompt: Defend Your Position",
  author: "Written for Akademik Space",
  text: "Prepare a 2-minute speech arguing whether students should have homework on weekends. Use evidence, acknowledge counterarguments, and speak clearly with appropriate volume and pace.",
};

export const lesson142: Lesson = {
  id: "ela7-u14-lesson-14-2",
  code: "14-2",
  title: "Speaking and Listening: Presentations and Discussion",
  goal: "I CAN prepare and deliver effective presentations and participate in academic discussions.",
  standards: ["SL.7.1", "SL.7.4", "SL.7.6"],
  vocabulary: [
    {
      term: "Presentation",
      definition: "Formal talk delivered to an audience.",
    },
    { term: "Thesis", definition: "Main argument of the speech." },
    {
      term: "Evidence",
      definition: "Facts/examples supporting your position.",
    },
    {
      term: "Counterargument",
      definition: "Opposing view you acknowledge and respond to.",
    },
    { term: "Pace", definition: "Speed of speaking — not too fast or slow." },
    { term: "Volume", definition: "Loudness — appropriate for audience size." },
  ],
  concepts: [
    {
      id: "ela7-u14-speech",
      title: "Preparing and delivering presentations",
      skill:
        "Structure speeches with thesis, evidence, and counterargument; deliver with appropriate delivery skills.",
      lesson: {
        sections: [
          {
            heading: "Speech structure",
            body: "A strong speech: **introduction** (hook + thesis), **body** (2-3 reasons with evidence), **counterargument** (acknowledge opposing view), **conclusion** (restatement + call to action). For 'Should students have weekend homework?' — thesis: 'Weekend homework should be limited because rest improves learning.' Reasons: sleep, family time, retention. Counterargument: 'Some say practice improves mastery' — respond with evidence.",
          },
          {
            heading: "Delivery skills",
            body: "**Volume**: loud enough for back row, not shouting. **Pace**: not too fast (rushed) or slow (boring) — pause for emphasis. **Eye contact**: connect with audience, don't stare at notes. **Body language**: stand straight, gesture naturally, don't fidget. **Voice variety**: vary pitch and tone to maintain interest.",
          },
        ],
        keyFormulas: [
          {
            name: "Speech structure",
            statement:
              "Intro (hook+thesis) → body (reasons+evidence) → counterargument → conclusion.",
          },
          {
            name: "Delivery checklist",
            statement:
              "Volume, pace, eye contact, body language, voice variety.",
          },
          {
            name: "Counterargument",
            statement: "Acknowledge opposing view, then respond with evidence.",
          },
        ],
        workedExample: {
          problem:
            "What's missing from: 'Students should have homework. It's important. Bye.'",
          solution:
            "No hook, no thesis development, no evidence, no counterargument, abrupt ending. Strong version: hook ('Imagine sleeping 8 hours every night'), thesis ('weekend homework should be limited'), reasons (sleep, family, retention), counterargument ('practice helps'), conclusion ('rest improves learning').",
        },
      },
      questions: [
        {
          id: "ela7-u14-speech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECHPROMPT,
          stem: "What should a speech include besides the main argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only personal opinions" },
              {
                id: "b",
                text: "Evidence, counterarguments, and clear delivery",
              },
              { id: "c", text: "Memorized script" },
              { id: "d", text: "A long introduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speech requirements",
                statement: "Evidence + counterargument + delivery.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prompt asks for evidence, counterarguments, and delivery skills — not just opinion.",
                evidence: "Use evidence, acknowledge counterarguments",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Evidence, counterarguments, and clear delivery.",
            commonErrors: [
              "Thinking speeches are just opinions — they need support and engagement.",
            ],
          },
        },
        {
          id: "ela7-u14-speech-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SPEECHPROMPT,
          stem: "Write a thesis statement for 'Should students have homework on weekends?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Clear, arguable position.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis should take a clear position with reasons.",
                evidence: "arguing whether students should have homework",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'Weekend homework should be limited because adequate sleep and family time improve learning and wellbeing.'",
                evidence: "Should students have homework on weekends?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Includes reasons (sleep, family time) that can be supported with evidence.",
                evidence: "Use evidence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Weekend homework should be limited because adequate sleep and family time improve learning and wellbeing.'",
            commonErrors: [
              "Vague thesis — 'Homework is good/bad' without reasons.",
            ],
          },
        },
        {
          id: "ela7-u14-speech-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SPEECHPROMPT,
          stem: "Write an outline for a 2-minute speech arguing your position. Include: hook, thesis, 2 reasons with evidence, counterargument response, and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Speech outlining",
                statement: "Structure for effective persuasion.",
              },
              {
                kind: "skill",
                name: "Counterargument",
                statement: "Acknowledge and respond to opposition.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Hook: 'Imagine getting 8 hours of sleep every night — your grades would improve.'",
                evidence: "Defend Your Position",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Thesis: 'Weekend homework should be limited because rest improves learning.'",
                evidence: "whether students should have homework on weekends",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reasons + evidence: 'Studies show teens need 8-10 hours sleep; homework causes stress.'",
                evidence: "Use evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument + conclusion: 'Some say practice helps mastery, but quality rest improves retention — limit weekend homework.'",
                evidence: "acknowledge counterarguments",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Hook (sleep improves grades) → Thesis (limit weekend homework for rest) → Reasons (sleep, family time) + evidence (CDC sleep recommendations) → Counterargument ('practice helps' → 'but rest improves retention') → Conclusion (rest improves learning).",
            commonErrors: [
              "Outline without counterargument — prompt requires acknowledging opposition.",
            ],
          },
        },
        {
          id: "ela7-u14-speech-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SPEECHPROMPT,
          parts: [
            {
              label: "a",
              prompt: "Name three delivery skills for effective speaking.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why eye contact matters.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery skills",
                statement: "Volume, pace, eye contact, body language.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Volume, pace, eye contact (or body language, voice variety).",
                evidence: "speak clearly with appropriate volume and pace",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Eye contact connects speaker to audience — shows confidence and engagement; staring at notes loses audience.",
                evidence: "speak clearly",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Volume, pace, eye contact. (b) Eye contact connects speaker to audience — shows confidence and engagement.",
            commonErrors: [
              "Listing skills without explaining why they matter.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u14-speech2",
      title: "Academic discussion skills",
      skill:
        "Participate in discussions by building on ideas, asking questions, and staying on topic.",
      lesson: {
        sections: [
          {
            heading: "Discussion moves",
            body: "Effective discussion: **build on others** ('I agree with Maria, and I'd add...'), **ask questions** ('Can you explain what you mean by...?'), **stay on topic** (don't derail), **respectfully disagree** ('I see it differently because...'). Don't just wait to speak — listen actively and respond to what's said.",
          },
          {
            heading: "Evidence in discussion",
            body: "Support claims with **text evidence** ('The story says...'), **examples** ('For instance...'), or **reasoning** ('That makes sense because...'). 'I think the character is selfish' → 'I think the character is selfish because he lies to his friend in chapter 3.' Evidence makes discussion substantive.",
          },
        ],
        keyFormulas: [
          {
            name: "Discussion moves",
            statement:
              "Build on ideas, ask questions, stay on topic, respectfully disagree.",
          },
          {
            name: "Evidence in discussion",
            statement:
              "Text evidence, examples, reasoning — not just opinions.",
          },
          {
            name: "Active listening",
            statement: "Respond to what's said, not what you planned to say.",
          },
        ],
        workedExample: {
          problem:
            "Improve: 'I think homework is bad. That's all I have to say.'",
          solution:
            "'I think homework is bad because it causes stress and takes family time. The CDC recommends 8-10 hours sleep for teens, but homework often cuts into that. What do you think about the sleep connection?' — adds evidence and invites response.",
        },
      },
      questions: [
        {
          id: "ela7-u14-speech2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECHPROMPT,
          stem: "What should you do when someone else is speaking in a discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interrupt with your point" },
              { id: "b", text: "Plan your response" },
              { id: "c", text: "Check your phone" },
              { id: "d", text: "Listen actively and respond to their ideas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active listening",
                statement: "Respond to what's said.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Active listening means hearing and responding to others' ideas, not just waiting to speak.",
                evidence: "participate in academic discussions",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Listen actively and respond to their ideas.",
            commonErrors: ["Choosing (a) — planning response isn't listening."],
          },
        },
        {
          id: "ela7-u14-speech2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SPEECHPROMPT,
          stem: "Rewrite 'I think homework is bad' with evidence and a question to continue discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence-based discussion",
                statement: "Support claims and invite response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add evidence: 'because it causes stress and takes family time.'",
                evidence: "I think homework is bad",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add supporting fact: 'CDC recommends 8-10 hours sleep for teens.'",
                evidence: "Use evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add question: 'What do you think about the sleep connection?' — invites response.",
                evidence: "acknowledge counterarguments",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'I think homework is bad because it causes stress and takes family time — the CDC recommends 8-10 hours sleep for teens. What do you think about the sleep connection?'",
            commonErrors: [
              "Adding opinion without evidence — 'I think' needs support.",
            ],
          },
        },
        {
          id: "ela7-u14-speech2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SPEECHPROMPT,
          stem: "Write a discussion response that: (1) builds on someone's idea, (2) adds evidence, and (3) asks a follow-up question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion moves",
                statement: "Build, evidence, question.",
              },
              {
                kind: "skill",
                name: "Collaborative discussion",
                statement: "Engage with others' ideas.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Build on idea: 'I agree with [name] that sleep matters — and I'd add that family time also reduces stress.'",
                evidence: "build on others' ideas",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add evidence: 'A 2022 study found students with less homework reported better sleep and mood.'",
                evidence: "Use evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ask follow-up: 'Do you think schools should set homework limits, or is that up to teachers?'",
                evidence: "posing and answering questions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The response engages, supports, and extends the discussion — not just stating opinion.",
                evidence: "participate in academic discussions",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'I agree with Maria that sleep matters — and I'd add that family time also reduces stress. A 2022 study found students with less homework reported better sleep and mood. Do you think schools should set homework limits, or is that up to teachers?'",
            commonErrors: [
              "Ignoring others' ideas — must build on, not just state own view.",
            ],
          },
        },
        {
          id: "ela7-u14-speech2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SPEECHPROMPT,
          parts: [
            {
              label: "a",
              prompt: "Name two ways to build on someone's idea in discussion.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why staying on topic matters.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion skills",
                statement: "Collaborative engagement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'I agree and I'd add...' or 'That connects to...' — acknowledge then extend.",
                evidence: "build on others' ideas",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Staying on topic keeps discussion focused and productive — tangents waste time and confuse the group.",
                evidence: "staying on topic",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'I agree and I'd add' or 'That connects to'. (b) Staying on topic keeps discussion focused and productive.",
            commonErrors: ["Listing moves without explaining purpose."],
          },
        },
      ],
    },
  ],
};
