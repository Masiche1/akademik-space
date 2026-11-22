import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const SLPROMPT: TextExtract = {
  title: "Discussion Scenario: School Start Times",
  author: "Written for Akademik Space",
  text: "Your class is discussing whether school should start later. Some students argue it improves sleep and grades; others argue it disrupts schedules and after-school activities. Prepare to discuss both sides and respond to classmates.",
};

const WEAKDISCUSSION: TextExtract = {
  title: "Student Discussion Transcript",
  author: "Written for Akademik Space",
  text: "Student A: 'Later start times are bad because it messes up my schedule.'\nStudent B: 'I disagree, because everyone knows sleep is important.'\nStudent A: 'Whatever, you wouldn't understand.'\nStudent B: 'Actually, I would, because my grades improved last year.'",
};

export const lesson41: Lesson = {
  id: "ela8-u4-lesson-4-1",
  code: "4-1",
  title: "Collaborative Discussion: Building on Ideas",
  goal: "I CAN engage in academic discussions by building on others' ideas, asking questions, and staying on topic.",
  standards: ["SL.8.1", "SL.8.1a", "SL.8.1b", "SL.8.1c", "SL.8.1d"],
  vocabulary: [
    {
      term: "Collaborative discussion",
      definition:
        "Group conversation where participants build on each other's ideas.",
    },
    {
      term: "Building on ideas",
      definition: "Extending or refining what someone else said.",
    },
    {
      term: "Counterpoint",
      definition: "An opposing view expressed respectfully.",
    },
    { term: "Evidence", definition: "Facts or examples supporting a claim." },
    {
      term: "Elaboration",
      definition: "Adding detail or explanation to make a point clearer.",
    },
    { term: "Consensus", definition: "General agreement among participants." },
  ],
  concepts: [
    {
      id: "ela8-u4-discuss",
      title: "Building on others' ideas",
      skill:
        "Engage in discussions by extending, questioning, and respectfully disagreeing with classmates.",
      lesson: {
        sections: [
          {
            heading: "Discussion moves",
            body: "Effective discussion requires more than stating opinions. **Build on**: 'I agree with [name], and I'd add...' **Question**: 'Can you explain what you mean by...?'. **Extend**: 'That connects to...' **Disagree respectfully**: 'I see it differently because...'. Avoid: 'Whatever' (dismissive), 'everyone knows' (unsupported), talking over others.",
          },
          {
            heading: "Staying on topic",
            body: "Academic discussions stay focused on the topic. If someone raises a related but different issue, acknowledge it: 'That's an interesting point about buses, but let's return to start times.' Digressions waste time and confuse the group's purpose. The goal is to explore the topic thoroughly, not cover everything.",
          },
        ],
        keyFormulas: [
          {
            name: "Discussion moves",
            statement: "Build, question, extend, respectfully disagree.",
          },
          {
            name: "Staying on topic",
            statement: "Acknowledge tangents, then redirect to focus.",
          },
          {
            name: "Respectful disagreement",
            statement: "'I see it differently because...' not 'You're wrong.'",
          },
        ],
        workedExample: {
          problem:
            "How would you improve Student A's 'Whatever, you wouldn't understand'?",
          solution:
            "Replace dismissal with engagement: 'I see your point about schedules, but could you explain how sleep affects your argument? I'd like to understand your reasoning better.' — respects the person while seeking clarification.",
        },
      },
      questions: [
        {
          id: "ela8-u4-discuss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SLPROMPT,
          stem: "What should you do when a classmate makes a point you disagree with?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Respectfully disagree with reasoning" },
              { id: "b", text: "Change the subject" },
              { id: "c", text: "Ignore them" },
              { id: "d", text: "Say 'you're wrong'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Respectful disagreement",
                statement: "Disagree with reasoning, not dismissal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Academic discussion requires respectful disagreement — 'I see it differently because...' not 'you're wrong'.",
                evidence: "discuss both sides and respond to classmates",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Respectfully disagree with reasoning.",
            commonErrors: [
              "Choosing (a) — 'you're wrong' shuts down discussion.",
            ],
          },
        },
        {
          id: "ela8-u4-discuss-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKDISCUSSION,
          stem: "Identify two problems in the discussion transcript and explain how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion critique",
                statement: "Spot ineffective discussion moves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem 1: 'Whatever, you wouldn't understand' — dismissive, shuts down discussion.",
                evidence: "Whatever, you wouldn't understand",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Problem 2: 'everyone knows sleep is important' — unsupported claim, no evidence.",
                evidence: "everyone knows sleep is important",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: ask questions, provide evidence, respect differing views.",
                evidence: "my grades improved last year",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Problems: dismissive language ('whatever') and unsupported claims ('everyone knows'). Fix with questions and evidence.",
            commonErrors: [
              "Identifying only one problem — both dismissal and lack of evidence are issues.",
            ],
          },
        },
        {
          id: "ela8-u4-discuss-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SLPROMPT,
          stem: "Write a discussion response that builds on a classmate's point, adds evidence, and asks a follow-up question.",
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
                name: "Collaborative engagement",
                statement: "Engage with others' ideas.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Build on idea: 'I agree with [name] that sleep matters — and I'd add that family time also reduces stress.'",
                evidence: "discuss both sides",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add evidence: 'A 2023 study found students with later start times scored higher on tests.'",
                evidence: "improves sleep and grades",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ask follow-up: 'Do you think schools should set start times, or should districts decide?'",
                evidence: "respond to classmates",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The response engages, supports, and extends — not just stating opinion.",
                evidence: "Prepare to discuss",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'I agree with Jamal that sleep matters — and I'd add that family time also reduces stress. A 2023 study found later start times improved test scores. Do you think schools should set start times, or should districts decide?'",
            commonErrors: [
              "Ignoring others' ideas — must build on, not just state own view.",
            ],
          },
        },
        {
          id: "ela8-u4-discuss-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKDISCUSSION,
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite 'Whatever, you wouldn't understand' respectfully.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why the original is ineffective.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respectful communication",
                statement: "Disagree without dismissing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'I see your point about schedules, but could you explain how that affects your argument?'",
                evidence: "Whatever, you wouldn't understand",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Original is dismissive — shuts down discussion and disrespects the classmate's perspective.",
                evidence: "you wouldn't understand",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'I see your point about schedules, but could you explain how that affects your argument?' (b) Original is dismissive — shuts down discussion.",
            commonErrors: [
              "Keeping 'whatever' — any dismissal undermines discussion.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u4-discuss2",
      title: "Staying on topic and asking questions",
      skill:
        "Keep discussions focused and use questions to deepen understanding.",
      lesson: {
        sections: [
          {
            heading: "Staying on topic",
            body: "When someone raises a tangent, acknowledge then redirect: 'That's interesting about bus schedules, but let's return to start times.' If YOU notice the discussion drifting, gently refocus: 'To stay on our topic of start times...' Topics have boundaries — exploring within them deeply is better than covering everything shallowly.",
          },
          {
            heading: "Effective questions",
            body: "Good questions deepen discussion: **clarifying** ('What do you mean by...'), **extending** ('How does that connect to...'), **challenging** ('What evidence supports...'), **synthesizing** ('So are we saying...?'). Bad questions: rhetorical ('Isn't it obvious?'), yes/no only ('Do you agree?'), or off-topic.",
          },
        ],
        keyFormulas: [
          {
            name: "Redirecting tangents",
            statement: "Acknowledge + refocus on topic.",
          },
          {
            name: "Question types",
            statement: "Clarifying, extending, challenging, synthesizing.",
          },
          {
            name: "Bad questions",
            statement: "Rhetorical, yes/no only, off-topic.",
          },
        ],
        workedExample: {
          problem:
            "How would you refocus a discussion that drifted to lunch menus?",
          solution:
            "'That's a great point about lunch menus, but let's return to our topic of school start times — we still need to discuss the sleep evidence.' — acknowledges contribution while redirecting focus.",
        },
      },
      questions: [
        {
          id: "ela8-u4-discuss2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SLPROMPT,
          stem: "What should you do when a discussion drifts off-topic?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Acknowledge the tangent and redirect to topic",
              },
              { id: "b", text: "Stop the discussion" },
              { id: "c", text: "Let it continue" },
              { id: "d", text: "Change the topic entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Staying on topic",
                statement: "Acknowledge + redirect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective discussions acknowledge tangents then refocus — 'That's interesting, but let's return to...'",
                evidence: "Prepare to discuss both sides",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Acknowledge tangent and redirect to topic.",
            commonErrors: ["Choosing (a) — tangents waste discussion time."],
          },
        },
        {
          id: "ela8-u4-discuss2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SLPROMPT,
          stem: "Write a question that extends the discussion about school start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Effective questions",
                statement: "Deepen discussion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Good question extends thinking: 'How does later start time affect after-school activities?'",
                evidence: "disrupts schedules and after-school activities",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Or challenges: 'What evidence shows sleep affects academic performance?'",
                evidence: "improves sleep and grades",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Questions should invite elaboration, not just yes/no answers.",
                evidence: "Prepare to discuss",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'How does later start time affect after-school activities and family schedules?' — extends discussion to practical implications.",
            commonErrors: [
              "Yes/no question — 'Do you agree?' doesn't deepen discussion.",
            ],
          },
        },
        {
          id: "ela8-u4-discuss2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SLPROMPT,
          stem: "Write a response that: acknowledges a tangent about bus schedules, redirects to start times, and asks an extending question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Redirecting",
                statement: "Acknowledge + refocus.",
              },
              {
                kind: "skill",
                name: "Extending questions",
                statement: "Deepen discussion.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Acknowledge tangent: 'That's a great point about bus schedules.'",
                evidence: "disrupts schedules",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Redirect: 'But let's return to our topic of school start times.'",
                evidence: "school should start later",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ask extending question: 'How does the sleep evidence connect to academic performance?'",
                evidence: "improves sleep and grades",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The response maintains focus while engaging with the tangent respectfully.",
                evidence: "discuss both sides",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'That's a great point about bus schedules, but let's return to our topic of school start times. How does the sleep evidence connect to academic performance?'",
            commonErrors: [
              "Ignoring the tangent entirely — acknowledge then redirect is better.",
            ],
          },
        },
        {
          id: "ela8-u4-discuss2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SLPROMPT,
          parts: [
            {
              label: "a",
              prompt: "Name two types of effective discussion questions.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why 'Do you agree?' is a weak question.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question quality",
                statement: "Some questions deepen, others don't.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Clarifying ('What do you mean by...?') and extending ('How does that connect to...?').",
                evidence: "asking questions",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Yes/no questions don't invite elaboration — 'Do you agree?' gets 'yes' or 'no' without reasoning.",
                evidence: "Do you agree?",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Clarifying and extending questions. (b) 'Do you agree?' only gets yes/no — doesn't invite reasoning or elaboration.",
            commonErrors: [
              "Listing question types without explaining their function.",
            ],
          },
        },
      ],
    },
  ],
};
