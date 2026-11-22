import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const EVALPROMPT: TextExtract = {
  title: "Evaluating Reasoning Scenario",
  author: "Written for Akademik Space",
  text: "In a class discussion about phone use in class, a student argues: 'Phones should be banned because my cousin's grades dropped when she got a phone.' Evaluate the strength of this reasoning and suggest how to improve it.",
};

const WEAKARGUMENT: TextExtract = {
  title: "Student Argument",
  author: "Written for Akademik Space",
  text: "Phones should be banned in class because they're distracting. Everyone knows phones are bad. My friend stopped using his phone and his grades improved. Also, schools should focus on learning, not technology.",
};

export const lesson43: Lesson = {
  id: "ela8-u4-lesson-4-3",
  code: "4-3",
  title: "Evaluating Reasoning and Discussion Roles",
  goal: "I CAN evaluate the strength of arguments and participate effectively in structured discussions.",
  standards: ["SL.8.3", "SL.8.6"],
  vocabulary: [
    {
      term: "Reasoning",
      definition: "The logic connecting evidence to a claim.",
    },
    { term: "Evidence", definition: "Facts or examples supporting a claim." },
    {
      term: "Fallacy",
      definition: "Flawed reasoning that weakens an argument.",
    },
    {
      term: "Hasty generalization",
      definition: "Drawing broad conclusions from limited evidence.",
    },
    {
      term: "Discussion role",
      definition:
        "Assigned function in group discussion — facilitator, note-taker, timekeeper.",
    },
    {
      term: "Counterclaim",
      definition: "Opposing argument that must be addressed.",
    },
  ],
  concepts: [
    {
      id: "ela8-u4-evaluate",
      title: "Evaluating reasoning strength",
      skill:
        "Assess whether evidence supports claims and identify reasoning fallacies.",
      lesson: {
        sections: [
          {
            heading: "Strong vs weak reasoning",
            body: "Strong reasoning connects **relevant evidence** to claims logically. 'Studies show phone distraction reduces test scores by 15%' → 'phones should be limited' — relevant evidence + logical connection. Weak reasoning uses irrelevant evidence or flawed logic: 'My cousin's grades dropped' — anecdote, not evidence; 'everyone knows' — unsupported claim.",
          },
          {
            heading: "Common fallacies",
            body: "**Hasty generalization**: 'My cousin's grades dropped' → 'phones are bad for everyone'. **Appeal to popularity**: 'Everyone knows phones are bad'. **False dilemma**: 'Either ban phones or students will fail'. **Ad hominem**: attacking the person, not the argument. Recognizing fallacies helps evaluate arguments critically.",
          },
        ],
        keyFormulas: [
          {
            name: "Strong reasoning",
            statement: "Relevant evidence + logical connection to claim.",
          },
          {
            name: "Weak reasoning",
            statement: "Irrelevant evidence, anecdotes, unsupported claims.",
          },
          {
            name: "Fallacy types",
            statement:
              "Hasty generalization, appeal to popularity, false dilemma, ad hominem.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'My cousin's grades dropped when she got a phone' weak reasoning?",
          solution:
            "It's a hasty generalization — one person's experience doesn't prove phones cause grade drops universally. Correlation isn't causation, and anecdote isn't evidence. Stronger: cite studies showing phone distraction correlates with lower test scores.",
        },
      },
      questions: [
        {
          id: "ela8-u4-evaluate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EVALPROMPT,
          stem: "What makes 'My cousin's grades dropped' weak reasoning?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It's anecdotal evidence — one case doesn't prove a general rule",
              },
              { id: "b", text: "It's too short" },
              { id: "c", text: "It's too emotional" },
              { id: "d", text: "It's about grades" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hasty generalization",
                statement: "One case ≠ general rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anecdotal evidence (one cousin's experience) can't support a universal claim about phones.",
                evidence: "my cousin's grades dropped",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Anecdotal evidence — one case doesn't prove a general rule.",
            commonErrors: [
              "Choosing (d) — emotion isn't the issue; evidence quality is.",
            ],
          },
        },
        {
          id: "ela8-u4-evaluate-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKARGUMENT,
          stem: "Identify two fallacies in the student argument and explain each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fallacy identification",
                statement: "Recognize flawed reasoning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fallacy 1: 'Everyone knows phones are bad' — appeal to popularity, unsupported claim.",
                evidence: "Everyone knows phones are bad",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fallacy 2: 'My friend stopped using his phone and grades improved' — anecdote, hasty generalization.",
                evidence: "My friend stopped using his phone",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both rely on unsupported claims rather than evidence.",
                evidence: "phones should be banned",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fallacies: appeal to popularity ('everyone knows') and hasty generalization (friend's anecdote).",
            commonErrors: ["Identifying only one fallacy — multiple exist."],
          },
        },
        {
          id: "ela8-u4-evaluate-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EVALPROMPT,
          stem: "Rewrite the weak argument using strong reasoning — replace anecdotes with evidence and remove fallacies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument strengthening",
                statement: "Replace weak evidence with strong.",
              },
              {
                kind: "skill",
                name: "Fallacy removal",
                statement: "Eliminate flawed reasoning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Replace 'my cousin' with research: 'A 2023 study found phone distraction reduces test scores by 15%.'",
                evidence: "my cousin's grades dropped",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Replace 'everyone knows' with evidence: 'Multiple studies show phones impair focus during class.'",
                evidence: "Everyone knows phones are bad",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Replace 'my friend' with data: 'Schools that ban phones report improved attention.'",
                evidence: "My friend stopped using his phone",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rewrite uses credible evidence and logical connections — no fallacies.",
                evidence: "Phones should be banned",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Phones should be limited in class because a 2023 study found phone distraction reduces test scores by 15%, and schools that restrict phones report improved attention. While some argue phones aid research, structured policies can balance benefits and drawbacks.'",
            commonErrors: [
              "Keeping some anecdotes — all evidence should be credible.",
            ],
          },
        },
        {
          id: "ela8-u4-evaluate-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKARGUMENT,
          parts: [
            {
              label: "a",
              prompt: "Name the fallacy in 'Everyone knows phones are bad.'",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Replace it with evidence-based reasoning.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fallacy correction",
                statement: "Replace unsupported claims with evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Appeal to popularity — 'everyone knows' suggests universal agreement without proof.",
                evidence: "Everyone knows phones are bad",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'Studies show phones reduce focus — a 2023 survey found 78% of teachers report distraction.'",
                evidence: "phones are bad",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Appeal to popularity. (b) 'Studies show phones reduce focus — 78% of teachers report distraction' — evidence-based.",
            commonErrors: [
              "Replacing with different unsupported claim — need actual evidence.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u4-evaluate2",
      title: "Discussion roles and participation",
      skill: "Understand and fulfill discussion roles effectively.",
      lesson: {
        sections: [
          {
            heading: "Discussion roles",
            body: "Structured discussions assign roles: **facilitator** (keeps group on topic, ensures everyone speaks), **note-taker** (records key points), **timekeeper** (monitors time), **summarizer** (recaps at end), **devil's advocate** (challenges assumptions). Roles ensure balanced participation and productive outcomes — not just dominant voices.",
          },
          {
            heading: "Effective participation",
            body: "Whether assigned a role or not, effective participants: **listen actively**, **build on ideas**, **ask questions**, **respectfully disagree**, **stay on topic**, **contribute evidence**. Don't dominate or stay silent — balance speaking and listening. Quality over quantity: one well-supported point beats five unsupported opinions.",
          },
        ],
        keyFormulas: [
          {
            name: "Discussion roles",
            statement:
              "Facilitator, note-taker, timekeeper, summarizer, devil's advocate.",
          },
          {
            name: "Role purpose",
            statement: "Ensure balanced participation and productive outcomes.",
          },
          {
            name: "Participation balance",
            statement: "Speak and listen; quality over quantity.",
          },
        ],
        workedExample: {
          problem: "What does a facilitator do in a discussion?",
          solution:
            "Keeps group on topic, ensures everyone participates, redirects tangents, and guides toward consensus or clear conclusions.",
        },
      },
      questions: [
        {
          id: "ela8-u4-evaluate2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EVALPROMPT,
          stem: "What is the role of a discussion facilitator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Argue one side" },
              { id: "b", text: "Keep group on topic and ensure participation" },
              { id: "c", text: "Watch the clock" },
              { id: "d", text: "Take notes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Facilitator role",
                statement: "Guide discussion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Facilitator keeps group on topic and ensures balanced participation.",
                evidence: "discussion roles",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Keep group on topic and ensure participation.",
            commonErrors: ["Choosing (a) — that's note-taker."],
          },
        },
        {
          id: "ela8-u4-evaluate2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EVALPROMPT,
          stem: "Name three discussion roles and explain what each does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Role identification",
                statement: "Different roles serve different functions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Facilitator: keeps group on topic, ensures participation.",
                evidence: "discussion roles",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Note-taker: records key points and decisions.",
                evidence: "structured discussions",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Timekeeper: monitors time and keeps discussion on schedule.",
                evidence: "Evaluate the strength",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Facilitator (keeps on topic), note-taker (records points), timekeeper (monitors time) — each serves different function.",
            commonErrors: ["Listing roles without explaining functions."],
          },
        },
        {
          id: "ela8-u4-evaluate2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EVALPROMPT,
          stem: "Write a response as a facilitator redirecting a discussion that has gone off-topic about phones to the original topic of classroom technology policies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Facilitation",
                statement: "Guide discussion effectively.",
              },
              {
                kind: "skill",
                name: "Redirecting",
                statement: "Acknowledge tangent + refocus.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Acknowledge tangent: 'That's interesting about specific phone models.'",
                evidence: "Evaluate the strength of this reasoning",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Redirect: 'But let's return to our topic of classroom technology policies.'",
                evidence: "discuss both sides",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Refocus with question: 'How do phone policies affect learning outcomes?'",
                evidence: "suggest how to improve it",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The facilitator maintains focus while respecting contributions.",
                evidence: "class discussion",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'That's interesting about specific phone models, but let's return to our topic of classroom technology policies. How do phone policies affect learning outcomes?' — acknowledges tangent, redirects, refocuses with question.",
            commonErrors: [
              "Ignoring the tangent — acknowledge then redirect is better.",
            ],
          },
        },
        {
          id: "ela8-u4-evaluate2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EVALPROMPT,
          parts: [
            {
              label: "a",
              prompt:
                "Name two ways to be an effective discussion participant (beyond assigned role).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why 'quality over quantity' matters in discussion.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Participation",
                statement: "Balance speaking and listening.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Build on ideas + ask questions (or listen actively + provide evidence).",
                evidence: "participate effectively",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "One well-supported point beats five unsupported opinions — depth matters more than volume.",
                evidence: "Evaluate the strength",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Build on ideas and ask questions. (b) One supported point beats five unsupported — depth matters.",
            commonErrors: ["Listing moves without explaining their value."],
          },
        },
      ],
    },
  ],
};
