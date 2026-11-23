import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edps3-u4-lesson-4-3",
  code: "4-3",
  title: "Safety and Scientific Method",
  goal: "I CAN work safely and follow the full scientific method.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Hazard", definition: "Something that could cause harm." },
    {
      term: "Risk assessment",
      definition: "Checking for dangers before starting.",
    },
    { term: "Hypothesis", definition: "A testable prediction." },
    { term: "Control", definition: "Keeping variables the same." },
  ],
  concepts: [
    {
      id: "edps3-u4-safety",
      title: "Risk assessment and safety",
      skill: "Identify hazards and follow safety procedures.",
      lesson: {
        sections: [
          {
            heading: "Risk assessment",
            body: "Before any investigation, assess risks: What could go wrong? Hot surfaces, sharp tools, chemicals, electrical equipment, heavy objects. Identify hazards, decide how to reduce risk (goggles, gloves, supervision), and always have an adult nearby for risky activities.",
          },
          {
            heading: "Safety procedures",
            body: "Follow safety rules: never taste or smell unknown substances, wear eye protection, handle hot objects with care, clean up spills immediately, report accidents. Safety isn't optional — it's part of good science.",
          },
        ],
        keyFormulas: [
          {
            name: "Safety",
            statement: "Assess risks + follow rules + protect yourself",
          },
        ],
        workedExample: {
          problem:
            "What safety precautions for testing which material insulates best with hot water?",
          solution:
            "Adult supervision, gloves, careful pouring, don't touch hot containers, clean spills.",
        },
      },
      questions: [
        {
          id: "edps3-u4-sf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'risk assessment'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of test" },
              { id: "b", text: "Checking for dangers before starting" },
              { id: "c", text: "A measurement" },
              { id: "d", text: "A conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Risk assessment",
                statement: "Check dangers first.",
              },
            ],
            steps: [
              {
                reasoning: "Risk assessment = identify hazards.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Checking dangers",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps3-u4-sf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which safety rule applies when using a Bunsen burner?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Look directly at the flame" },
              { id: "b", text: "Tie back hair and wear goggles" },
              { id: "c", text: "Touch the flame to test" },
              { id: "d", text: "Leave it unattended" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Safety",
                statement: "Protect hair and eyes.",
              },
            ],
            steps: [
              {
                reasoning: "Flames need hair tied and eye protection.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tie hair + goggles",
            commonErrors: ["Unsafe behaviour."],
          },
        },
        {
          id: "edps3-u4-sf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three hazards for an investigation using ice and hot water, and how to reduce each risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Risk assessment",
                statement: "Hazards + controls.",
              },
            ],
            steps: [
              {
                reasoning: "Hot water — use gloves, adult supervision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ice — cold burns, handle carefully.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Spills — clean immediately, non-slip surface.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three hazards with controls",
            commonErrors: ["No controls."],
          },
        },
        {
          id: "edps3-u4-sf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is safety part of good science, not just a rule? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Safety culture",
                statement: "Safe = reliable science.",
              },
            ],
            steps: [
              {
                reasoning: "Injuries prevent investigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Safety ensures valid, repeatable results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Good scientists protect themselves and others.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Safety enables reliable science",
            commonErrors: ["Safety as separate from science."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-method",
      title: "The Scientific Method",
      skill: "Follow all steps of the scientific method.",
      lesson: {
        sections: [
          {
            heading: "Steps of enquiry",
            body: "1. Question — what are you investigating? 2. Prediction/hypothesis — what do you think will happen? 3. Plan — variables, equipment, method. 4. Test — carry out carefully. 5. Record — data as you go. 6. Analyse — find patterns. 7. Conclude — answer with evidence. 8. Evaluate — was it fair? Improve.",
          },
          {
            heading: "Hypothesis vs prediction",
            body: "A hypothesis is a testable prediction: 'I think the heavier object will fall faster because...' It's not just a guess — it explains WHY. Your hypothesis guides what you measure and what results would support or refute it.",
          },
        ],
        keyFormulas: [
          {
            name: "Scientific method",
            statement:
              "Question → hypothesis → plan → test → record → analyse → conclude → evaluate",
          },
        ],
        workedExample: {
          problem: "Order these: record results, ask question, conclude, test.",
          solution: "Ask question → test → record results → conclude.",
        },
      },
      questions: [
        {
          id: "edps3-u4-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in the scientific method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Test" },
              { id: "b", text: "Question" },
              { id: "c", text: "Conclude" },
              { id: "d", text: "Record" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Question first.",
              },
            ],
            steps: [
              {
                reasoning: "Everything starts with a question.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Question",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u4-sm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of test" },
              { id: "b", text: "A testable prediction with reasoning" },
              { id: "c", text: "A measurement" },
              { id: "d", text: "A conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Testable prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis = reasoned prediction.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Testable prediction",
            commonErrors: ["Confusing with conclusion."],
          },
        },
        {
          id: "edps3-u4-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put in order: (a) Record results, (b) Ask question, (c) Evaluate, (d) Test, (e) Conclude.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Correct order.",
              },
            ],
            steps: [
              { reasoning: "Question first.", marks: 1, markCode: "M" },
              {
                reasoning: "Test → record → conclude → evaluate.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "b→d→a→e→c",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u4-sm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important to write a hypothesis BEFORE testing? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hypothesis",
                statement: "Guides investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis guides what to measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows comparison of prediction vs result.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tests understanding, not just procedure.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Guides + allows comparison",
            commonErrors: ["No clear reason."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-consolidation",
      title: "Science Skills Consolidation",
      skill: "Apply all enquiry skills together in a complete investigation.",
      lesson: {
        sections: [
          {
            heading: "Putting it all together",
            body: "A complete investigation uses all skills: ask a testable question, form a hypothesis, plan a fair test, control variables, choose equipment, record data accurately, analyse for patterns, draw an evidence-based conclusion, and evaluate the investigation. Each step builds on the last.",
          },
          {
            heading: "Reviewing your skills",
            body: "Check your understanding: Can you identify variables? Can you spot unfair tests? Can you choose the right display? Can you write a conclusion with evidence? Can you evaluate fairly? These skills work across all science topics.",
          },
        ],
        keyFormulas: [
          {
            name: "Complete investigation",
            statement: "All enquiry skills together",
          },
        ],
        workedExample: {
          problem:
            "Plan a complete investigation: 'Does salt affect how fast ice melts?'",
          solution:
            "Question + hypothesis + variables (salt amount changes, melting time measured) + method + data table + conclusion + evaluation.",
        },
      },
      questions: [
        {
          id: "edps3-u4-cn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the LAST step of the scientific method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question" },
              { id: "b", text: "Test" },
              { id: "c", text: "Evaluate" },
              { id: "d", text: "Record" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Evaluate last.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation comes after conclusion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Evaluate",
            commonErrors: ["Wrong step."],
          },
        },
        {
          id: "edps3-u4-cn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which skill is needed BEFORE conducting a test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing conclusions" },
              { id: "b", text: "Planning and controlling variables" },
              { id: "c", text: "Evaluating" },
              { id: "d", text: "Recording" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Plan first.",
              },
            ],
            steps: [
              {
                reasoning: "Planning precedes testing.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Planning variables",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u4-cn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the steps of a complete investigation in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "All steps.",
              },
            ],
            steps: [
              { reasoning: "Question + hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Plan + test + record.", marks: 1, markCode: "M" },
              {
                reasoning: "Analyse + conclude + evaluate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "All 8 steps in order",
            commonErrors: ["Missing steps."],
          },
        },
        {
          id: "edps3-u4-cn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a complete investigation plan for 'Does the type of liquid affect how fast it freezes?' Include question, hypothesis, variables, method, and conclusion criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Complete plan",
                statement: "All elements.",
              },
            ],
            steps: [
              {
                reasoning: "Question + hypothesis stated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Variables identified and controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method + conclusion criteria clear.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete investigation plan",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
  ],
};
