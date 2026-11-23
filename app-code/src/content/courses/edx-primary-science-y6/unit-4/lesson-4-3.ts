import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edps6-u4-lesson-4-3",
  code: "4-3",
  title: "Evaluating Science in Context",
  goal: "I CAN critically evaluate scientific claims and apply enquiry skills broadly.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Evidence", definition: "Data that supports a claim." },
    {
      term: "Bias",
      definition: "Unfair influence on results or interpretation.",
    },
    { term: "Peer review", definition: "Checking work by other scientists." },
    {
      term: "Critical thinking",
      definition: "Evaluating claims based on evidence.",
    },
  ],
  concepts: [
    {
      id: "edps6-u4-evaluate",
      title: "Evaluating scientific claims",
      skill: "Critically assess scientific claims and evidence.",
      lesson: {
        sections: [
          {
            heading: "Critical evaluation of claims",
            body: "When evaluating scientific claims: What evidence supports it? Who conducted the research? Was it fair and unbiased? Are there limitations? Is it peer-reviewed? 'This supplement makes you smarter' needs evidence — check if tests were fair, who funded them, and if results were replicated.",
          },
          {
            heading: "Bias and limitations",
            body: "Bias can come from researchers, funding sources, or publication bias (only positive results published). Every study has limitations — sample size, duration, generalisability. Good scientists acknowledge these and suggest improvements.",
          },
        ],
        keyFormulas: [
          {
            name: "Critical evaluation",
            statement: "Evidence + bias + limitations + peer review",
          },
        ],
        workedExample: {
          problem:
            "Evaluate: 'This plant food makes plants grow 50% faster' — advertised on a product.",
          solution:
            "Check for independent research, fair testing, who funded the study, and if results were replicated.",
        },
      },
      questions: [
        {
          id: "edps6-u4-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you check when evaluating a scientific claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the price" },
              { id: "b", text: "Evidence and who conducted it" },
              { id: "c", text: "Only the packaging" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Critical evaluation",
                statement: "Check evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence and source matter.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Evidence and source",
            commonErrors: ["Believing everything."],
          },
        },
        {
          id: "edps6-u4-ec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'bias' in scientific research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of data" },
              {
                id: "b",
                text: "Unfair influence on results or interpretation",
              },
              { id: "c", text: "A measurement" },
              { id: "d", text: "A conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Unfair influence.",
              },
            ],
            steps: [
              {
                reasoning: "Bias = unfair influence.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Unfair influence",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps6-u4-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a study funded by a company selling a product be less reliable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bias",
                statement: "Funding affects objectivity.",
              },
            ],
            steps: [
              {
                reasoning: "Company has interest in positive results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May design test unfairly or report selectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need independent verification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Funding bias possible",
            commonErrors: ["Not explaining bias."],
          },
        },
        {
          id: "edps6-u4-ec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is 'peer review' and why does it matter for scientific claims?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer review",
                statement: "Quality check.",
              },
            ],
            steps: [
              {
                reasoning: "Other scientists check the work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Catches errors and ensures quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes claims more trustworthy.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Quality check by experts",
            commonErrors: ["Not explaining purpose."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-context",
      title: "Science in Context",
      skill: "Apply enquiry skills to real-world problems and careers.",
      lesson: {
        sections: [
          {
            heading: "Everyday science",
            body: "Enquiry skills apply everywhere: cooking (why does bread rise?), sport (why do balls bounce?), medicine (testing treatments), weather forecasting, engineering. The same skills — question, predict, test, measure, analyse — work in all contexts.",
          },
          {
            heading: "Science careers",
            body: "Doctors, engineers, farmers, chefs, sports scientists, forensic scientists, weather forecasters, data scientists — all use scientific enquiry. Understanding how to investigate properly opens many career paths and helps you evaluate claims critically.",
          },
        ],
        keyFormulas: [
          {
            name: "Real-world science",
            statement: "Enquiry skills apply everywhere",
          },
        ],
        workedExample: {
          problem: "How is baking bread a scientific investigation?",
          solution:
            "Testing variables (yeast, temperature, time) and measuring outcomes (rise, texture).",
        },
      },
      questions: [
        {
          id: "edps6-u4-rc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an everyday example of scientific enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in labs" },
              { id: "b", text: "Cooking and testing recipes" },
              { id: "c", text: "Only in textbooks" },
              { id: "d", text: "Only in space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Everyday science",
                statement: "Science is everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Cooking involves testing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Cooking",
            commonErrors: ["Only lab thinking."],
          },
        },
        {
          id: "edps6-u4-rc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which career uses scientific enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only scientists" },
              { id: "b", text: "Doctors, engineers, chefs" },
              { id: "c", text: "Only teachers" },
              { id: "d", text: "Only writers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Science careers",
                statement: "Many fields.",
              },
            ],
            steps: [
              {
                reasoning: "Many careers use enquiry.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Many careers",
            commonErrors: ["Only scientists."],
          },
        },
        {
          id: "edps6-u4-rc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is weather forecasting an example of scientific enquiry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Real-world enquiry",
                statement: "Data + prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Collects data (temperature, pressure).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyses patterns to predict.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Uses scientific method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data + prediction",
            commonErrors: ["No enquiry link."],
          },
        },
        {
          id: "edps6-u4-rc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how scientific enquiry skills help in everyday problem-solving. Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Enquiry skills",
                statement: "Question + test + analyse.",
              },
            ],
            steps: [
              {
                reasoning: "Example: fixing a bike — test solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: choosing products — compare data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enquiry skills apply broadly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two everyday examples",
            commonErrors: ["Only one example."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-final",
      title: "Final Skills Consolidation",
      skill: "Demonstrate mastery of all enquiry skills.",
      lesson: {
        sections: [
          {
            heading: "Mastering enquiry skills",
            body: "You've learned to: ask testable questions, form hypotheses, plan fair tests, control variables, collect accurate data, analyse patterns, present findings, draw conclusions, evaluate quality, and apply skills to real-world problems. These skills prepare you for secondary science and beyond.",
          },
          {
            heading: "Looking forward",
            body: "Secondary school science will build on these foundations with more complex topics — chemistry, physics, biology at a deeper level. Your enquiry skills will be essential for understanding new concepts and conducting more sophisticated investigations.",
          },
        ],
        keyFormulas: [
          {
            name: "Mastery",
            statement: "All enquiry skills applied confidently",
          },
        ],
        workedExample: {
          problem:
            "Design a complete investigation: 'Does the type of liquid affect how fast it freezes?'",
          solution:
            "Question + hypothesis + variables + method + data + repeats + conclusion + evaluation — all skills applied.",
        },
      },
      questions: [
        {
          id: "edps6-u4-fq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST step of an investigation?",
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
          id: "edps6-u4-fq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which skill comes LAST in an investigation?",
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
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Evaluate",
            commonErrors: ["Wrong step."],
          },
        },
        {
          id: "edps6-u4-fq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the 8 steps of the scientific method in order.",
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
            finalAnswer: "8 steps in order",
            commonErrors: ["Missing steps."],
          },
        },
        {
          id: "edps6-u4-fq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a complete, robust investigation for 'Does the type of material affect how much weight it can hold?' Include all variables, method, repeats and evaluation criteria.",
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
                reasoning: "Method + repeats + evaluation.",
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
