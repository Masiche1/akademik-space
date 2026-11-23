import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edps1-u4-lesson-4-2",
  code: "4-2",
  title: "Fair Testing",
  goal: "I CAN plan a fair test by changing one thing at a time.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Fair test",
      definition: "Only one thing changes so results are fair.",
    },
    { term: "Variable", definition: "Something that can change." },
    {
      term: "Prediction",
      definition: "What you think will happen before testing.",
    },
    { term: "Result", definition: "What actually happened." },
  ],
  concepts: [
    {
      id: "edps1-u4-fair",
      title: "Planning a fair test",
      skill: "Identify what to change and what to keep the same.",
      lesson: {
        sections: [
          {
            heading: "One thing at a time",
            body: "A fair test changes only ONE thing (the variable) and keeps everything else the same. If you test which paper towel absorbs most water, change only the towel type — same size, same amount of water, same container. If two things change, you can't tell which caused the result.",
          },
          {
            heading: "Prediction first",
            body: "Before testing, make a prediction: 'I think the cotton towel will absorb the most because...' Then test and compare results to your prediction. Being wrong is okay — it teaches you something.",
          },
        ],
        keyFormulas: [
          {
            name: "Fair test",
            statement: "Change 1 thing, keep rest the same",
          },
        ],
        workedExample: {
          problem: "Test: which ball bounces highest — tennis or football?",
          solution:
            "Change: ball type. Keep same: drop height, surface, how dropped.",
        },
      },
      questions: [
        {
          id: "edps1-u4-fa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a test 'fair'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing many things" },
              { id: "b", text: "Changing only one thing" },
              { id: "c", text: "Guessing the answer" },
              { id: "d", text: "Testing quickly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fair test",
                statement: "One variable.",
              },
            ],
            steps: [
              {
                reasoning: "Fair = controlled, one change.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** One thing changes",
            commonErrors: ["Uncontrolled test."],
          },
        },
        {
          id: "edps1-u4-fa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "You test which ramp makes a car go faster. What should you keep the same?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ramp angle" },
              { id: "b", text: "The car, surface and how you release it" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "The speed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Controlled variables",
                statement: "Keep same.",
              },
            ],
            steps: [
              {
                reasoning: "Only ramp angle changes; everything else same.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Car, surface, release",
            commonErrors: ["Changing too much."],
          },
        },
        {
          id: "edps1-u4-fa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Design a fair test: which material keeps an ice cube frozen longest — plastic, foil or cloth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fair test design",
                statement: "One variable.",
              },
            ],
            steps: [
              {
                reasoning: "Variable: material type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same: ice cube size, starting temp, room temp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measure: time until melted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Material changes; size/temp same; time melting",
            commonErrors: ["Uncontrolled variables."],
          },
        },
        {
          id: "edps1-u4-fa-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it unfair to test 'which plant grows taller' if one gets sunlight and the other doesn't? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unfair test",
                statement: "Two variables changed.",
              },
            ],
            steps: [
              {
                reasoning: "Two things changed: plant type AND sunlight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can't tell which caused height difference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fix: give both same light, change only plant.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two variables = can't isolate cause",
            commonErrors: ["Not identifying both changes."],
          },
        },
      ],
    },
    {
      id: "edps1-u4-predict",
      title: "Predictions and Conclusions",
      skill: "Make predictions and draw simple conclusions from results.",
      lesson: {
        sections: [
          {
            heading: "Predictions",
            body: "A prediction is what you think will happen BEFORE you test. 'I predict the heavier ball will roll further because...' Give a reason for your prediction. Predictions can be right or wrong — both teach you something about the world.",
          },
          {
            heading: "Conclusions",
            body: "A conclusion answers your question using your results: 'The cotton towel absorbed the most water (50 ml), so it is the best absorber.' Link your conclusion back to your prediction: 'My prediction was correct/incorrect because...'",
          },
        ],
        keyFormulas: [
          {
            name: "Conclusion",
            statement: "Answer + link to results + link to prediction",
          },
        ],
        workedExample: {
          problem:
            "You predicted red would win but blue won 8-3. What's your conclusion?",
          solution:
            "Blue was the better team today — my prediction was wrong, but the results show blue won.",
        },
      },
      questions: [
        {
          id: "edps1-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a prediction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The result after testing" },
              { id: "b", text: "What you think will happen before testing" },
              { id: "c", text: "A measurement" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prediction",
                statement: "Before testing.",
              },
            ],
            steps: [
              {
                reasoning: "Prediction = guess before test.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Before testing",
            commonErrors: ["Confusing with result."],
          },
        },
        {
          id: "edps1-u4-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a good prediction include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just a guess" },
              { id: "b", text: "A guess with a reason" },
              { id: "c", text: "The answer" },
              { id: "d", text: "A measurement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prediction",
                statement: "Guess + reason.",
              },
            ],
            steps: [
              {
                reasoning: "Good predictions explain why.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Guess with reason",
            commonErrors: ["No reason."],
          },
        },
        {
          id: "edps1-u4-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your results: plastic kept ice longest, foil middle, cloth shortest. Write a conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + results.",
              },
            ],
            steps: [
              {
                reasoning: "States which material won.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "References results (time melted).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answers the original question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Plastic keeps ice longest",
            commonErrors: ["No data reference."],
          },
        },
        {
          id: "edps1-u4-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You predicted foil would win but plastic did. Is your test a failure? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Wrong predictions",
                statement: "Learning from results.",
              },
            ],
            steps: [
              {
                reasoning: "No — wrong predictions still teach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Results give real information about materials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Science learns from all results, not just 'correct' predictions.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Not a failure — results still teach",
            commonErrors: ["Thinking wrong = bad."],
          },
        },
      ],
    },
  ],
};
