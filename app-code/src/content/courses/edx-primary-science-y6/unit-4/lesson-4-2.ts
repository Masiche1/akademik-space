import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edps6-u4-lesson-4-2",
  code: "4-2",
  title: "Data Presentation and Interpretation",
  goal: "I CAN choose, create and critically interpret data displays.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Bar chart", definition: "Bars comparing categories." },
    {
      term: "Line graph",
      definition: "Points connected showing change over time.",
    },
    {
      term: "Scatter graph",
      definition: "Shows relationship between two variables.",
    },
    { term: "Mean", definition: "The average of results." },
  ],
  concepts: [
    {
      id: "edps6-u4-displays",
      title: "Advanced data displays",
      skill: "Select and create appropriate displays for complex data.",
      lesson: {
        sections: [
          {
            heading: "Choosing displays",
            body: "Bar charts compare categories. Line graphs show change over time. Scatter graphs show relationships between two variables — essential for correlation analysis. Tables give exact values. Dual-axis charts compare different units. Choose based on what story the data tells.",
          },
          {
            heading: "Critical interpretation",
            body: "Check graph integrity: Are scales even? Does the axis start at zero? Could the display mislead? A graph with a broken axis exaggerates differences. Correlation doesn't prove causation — two things may both relate to a third factor.",
          },
        ],
        keyFormulas: [
          {
            name: "Display choice",
            statement: "Bar=compare, Line=time, Scatter=relationship",
          },
        ],
        workedExample: {
          problem:
            "Which display for 'Does temperature affect dissolving time?' with data for 5 temperatures?",
          solution:
            "Scatter graph or line graph — shows relationship between temperature and time.",
        },
      },
      questions: [
        {
          id: "edps6-u4-disp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which display shows change over time best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bar chart" },
              { id: "b", text: "Line graph" },
              { id: "c", text: "Pictogram" },
              { id: "d", text: "Table" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data display",
                statement: "Line = time.",
              },
            ],
            steps: [
              {
                reasoning: "Line graphs show trends over time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Line graph",
            commonErrors: ["Wrong display."],
          },
        },
        {
          id: "edps6-u4-disp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What must every graph include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a title" },
              { id: "b", text: "Title, axis labels and units" },
              { id: "c", text: "Colours" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Graph labelling",
                statement: "Complete labels.",
              },
            ],
            steps: [
              {
                reasoning: "Labels make graphs understandable.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Title + labels + units",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edps6-u4-disp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the best display for 'Does temperature affect dissolving time?' and justify your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Display choice",
                statement: "Scatter/line for relationship.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Scatter graph shows relationship between two variables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or line graph if time-ordered.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Justified choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scatter or line graph",
            commonErrors: ["Wrong display."],
          },
        },
        {
          id: "edps6-u4-disp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is correlation not the same as causation? Explain with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Correlation vs causation",
                statement: "Association ≠ cause.",
              },
            ],
            steps: [
              {
                reasoning: "Correlation = variables move together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Causation = one causes the other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: ice cream sales and drowning both relate to temperature.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Correlation ≠ causation; third factor",
            commonErrors: ["Confusing terms."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-interp",
      title: "Statistical Analysis",
      skill: "Calculate and interpret statistical measures.",
      lesson: {
        sections: [
          {
            heading: "Statistical measures",
            body: "Mean = average (sum ÷ count). Range = highest - lowest. Mode = most frequent. Median = middle value when ordered. These measures summarise data — mean shows typical value, range shows spread. More repeats = more reliable statistics.",
          },
          {
            heading: "Interpreting results",
            body: "Compare means to find differences — but check ranges: if ranges overlap, differences may not be meaningful. A material with mean 5.2 (range 0.4) is more consistent than one with mean 5.8 (range 3.2). Consider both typical value AND reliability.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum ÷ count" },
          { name: "Range", statement: "Highest - lowest" },
        ],
        workedExample: {
          problem: "Calculate mean and range of 8, 10, 9, 11, 7.",
          solution: "Mean = 45÷5 = 9. Range = 11-7 = 4.",
        },
      },
      questions: [
        {
          id: "edps6-u4-iq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of 4, 6, 8?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "18" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Sum ÷ count." },
            ],
            steps: [{ reasoning: "(4+6+8)/3 = 6.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 6",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edps6-u4-iq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the range of 5, 12, 8, 15, 10?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "10" },
              { id: "c", text: "15" },
              { id: "d", text: "50" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range", statement: "Max - min." },
            ],
            steps: [{ reasoning: "15 - 5 = 10.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 10",
            commonErrors: ["Wrong range."],
          },
        },
        {
          id: "edps6-u4-iq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: 9.8, 10.2, 9.9, 10.1, 10.0. Calculate mean and range.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Statistics", statement: "Mean + range." },
            ],
            steps: [
              { reasoning: "Mean = 50/5 = 10.0.", marks: 1, markCode: "M" },
              {
                reasoning: "Range = 10.2 - 9.8 = 0.4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both calculated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mean=10.0, range=0.4",
            commonErrors: ["Wrong calculations."],
          },
        },
        {
          id: "edps6-u4-iq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two materials: A mean=5.2cm range=0.4, B mean=5.8cm range=3.2. Which is better and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data comparison",
                statement: "Mean + reliability.",
              },
            ],
            steps: [
              {
                reasoning: "B has higher mean (5.8 vs 5.2).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B has larger range = less reliable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consider both mean and reliability.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "B higher but less reliable — depends on context",
            commonErrors: ["Only looking at mean."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-conclusion",
      title: "Conclusions and Critical Evaluation",
      skill:
        "Draw evidence-based conclusions and critically evaluate investigations.",
      lesson: {
        sections: [
          {
            heading: "Evidence-based conclusions",
            body: "A strong conclusion answers the question directly, cites specific data (means, ranges, trends), links to your hypothesis, and acknowledges limitations. If results were unexpected, explain honestly — good scientists report what they found, not what they hoped.",
          },
          {
            heading: "Critical evaluation",
            body: "Evaluate: Was it fair? Variables controlled? Measurements accurate? Repeats sufficient? What could be improved? Strong evaluations identify strengths AND weaknesses with specific improvements. Consider validity — did you actually test what you intended?",
          },
        ],
        keyFormulas: [
          {
            name: "Conclusion",
            statement: "Answer + evidence + hypothesis + limitations",
          },
        ],
        workedExample: {
          problem:
            "Write a conclusion: 'Which insulator keeps drinks coldest?' Fabric 60min, foam 90min, plastic 30min.",
          solution:
            "Foam is best — kept coldest longest (90min vs 60, 30), matching prediction.",
        },
      },
      questions: [
        {
          id: "edps6-u4-ceq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a conclusion include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only opinion" },
              { id: "b", text: "Answer + evidence" },
              { id: "c", text: "Question" },
              { id: "d", text: "Equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusion = answer + data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Answer + evidence",
            commonErrors: ["Opinion only."],
          },
        },
        {
          id: "edps6-u4-ceq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluating' an investigation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating" },
              { id: "b", text: "Judging quality and validity" },
              { id: "c", text: "Writing" },
              { id: "d", text: "Presenting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Judge quality.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluate = assess quality.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Judge quality",
            commonErrors: ["Confusing with conclusion."],
          },
        },
        {
          id: "edps6-u4-ceq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a conclusion for: 'Does ramp angle affect distance?' Results: 10°→5cm, 20°→15cm, 30°→35cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + data.",
              },
            ],
            steps: [
              { reasoning: "Steeper ramp = further.", marks: 1, markCode: "M" },
              { reasoning: "Cites numbers.", marks: 1, markCode: "M" },
              { reasoning: "Explains why.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steeper = further",
            commonErrors: ["No data."],
          },
        },
        {
          id: "edps6-u4-ceq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Suggest two improvements to an investigation and explain how each makes results more reliable AND valid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Improvements + reasons.",
              },
            ],
            steps: [
              {
                reasoning: "Repeat tests — consistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use precise tools — less error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons linked to reliability/validity.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two improvements with reasons",
            commonErrors: ["No reasons."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-safety",
      title: "Safety and Scientific Method",
      skill: "Follow safety procedures and the complete scientific method.",
      lesson: {
        sections: [
          {
            heading: "Safety in advanced investigations",
            body: "Assess risks before starting: identify hazards, plan controls, follow safety rules. Complex investigations may involve electricity, chemicals, heat or sharp objects — extra precautions needed. Always have adult supervision for risky activities. Safety is part of good science.",
          },
          {
            heading: "The scientific method",
            body: "Question → hypothesis → plan → test → record → analyse → conclude → evaluate. Each step builds on the last. Skipping steps weakens your investigation. The method ensures reliable, valid results — and prepares you for secondary school science.",
          },
        ],
        keyFormulas: [
          {
            name: "Scientific method",
            statement: "8 steps from question to evaluation",
          },
        ],
        workedExample: {
          problem: "List the 8 steps of the scientific method.",
          solution:
            "Question, hypothesis, plan, test, record, analyse, conclude, evaluate.",
        },
      },
      questions: [
        {
          id: "edps6-u4-met-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do BEFORE starting an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start immediately" },
              { id: "b", text: "Assess risks and plan" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Conclude" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Safety", statement: "Plan first." },
            ],
            steps: [
              {
                reasoning: "Risk assessment before testing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Assess risks",
            commonErrors: ["Skipping planning."],
          },
        },
        {
          id: "edps6-u4-met-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'hazard'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tool" },
              { id: "b", text: "Something that could cause harm" },
              { id: "c", text: "Variable" },
              { id: "d", text: "Result" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hazard",
                statement: "Potential harm.",
              },
            ],
            steps: [
              {
                reasoning: "Hazard = could cause harm.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Could cause harm",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps6-u4-met-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the 8 steps of the scientific method in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "All 8 steps.",
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
          id: "edps6-u4-met-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important to evaluate an investigation? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Improves science.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies strengths/weaknesses.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Suggests improvements.", marks: 1, markCode: "M" },
              {
                reasoning: "Builds scientific understanding.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Improves future investigations",
            commonErrors: ["No clear reason."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-realworld",
      title: "Science in the Real World",
      skill: "Apply enquiry skills to real-world problems and careers.",
      lesson: {
        sections: [
          {
            heading: "Everyday science",
            body: "Enquiry skills apply everywhere: cooking (why does bread rise?), sport (why do balls bounce?), medicine (testing treatments), weather forecasting, engineering. The same skills — question, predict, test, measure, analyse — work in all contexts.",
          },
          {
            heading: "Science careers",
            body: "Doctors, engineers, farmers, chefs, sports scientists, forensic scientists, weather forecasters — all use scientific enquiry. Understanding how to investigate properly opens many career paths and helps you evaluate claims critically.",
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
          id: "edps6-u4-rw-q1",
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
          id: "edps6-u4-rw-q2",
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
          id: "edps6-u4-rw-q3",
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
          id: "edps6-u4-rw-q4",
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
      id: "edps6-u4-review",
      title: "Science Skills Consolidation",
      skill: "Apply all enquiry skills in a complete, robust investigation.",
      lesson: {
        sections: [
          {
            heading: "Putting it all together",
            body: "A complete investigation uses all skills: question, hypothesis, plan variables, control CVs, choose equipment, record data, analyse patterns, conclude with evidence, evaluate quality. Each step builds on the last — skipping steps weakens your science.",
          },
          {
            heading: "Preparing for secondary science",
            body: "These enquiry skills prepare you for secondary school science where investigations become more complex. You'll encounter more variables, more precise measurements, and more critical evaluation. Mastering these skills now gives you a strong foundation.",
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
            "Plan a complete investigation: 'Does the type of material affect how much weight it can hold?'",
          solution:
            "Question + hypothesis + variables (material changes, weight measured) + method + data table + repeats + conclusion + evaluation.",
        },
      },
      questions: [
        {
          id: "edps6-u4-fin-q1",
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
          id: "edps6-u4-fin-q2",
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
          id: "edps6-u4-fin-q3",
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
          id: "edps6-u4-fin-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a complete, robust investigation for 'Does the type of liquid affect how fast it freezes?' Include all variables, method, repeats and evaluation criteria.",
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
