import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edps4-u4-lesson-4-1",
  code: "4-1",
  title: "Planning Investigations",
  goal: "I CAN plan investigations with independent, dependent and controlled variables.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Independent variable",
      definition: "The variable you deliberately change.",
    },
    {
      term: "Dependent variable",
      definition: "The variable you measure or observe.",
    },
    {
      term: "Controlled variables",
      definition: "Variables kept the same for fairness.",
    },
    {
      term: "Fair test",
      definition: "A test where only the independent variable changes.",
    },
  ],
  concepts: [
    {
      id: "edps4-u4-variables",
      title: "Identifying variables",
      skill: "Identify and classify variables in an investigation.",
      lesson: {
        sections: [
          {
            heading: "Three types of variables",
            body: "Independent variable (IV): what you change — e.g. type of material. Dependent variable (DV): what you measure — e.g. temperature change. Controlled variables (CVs): everything kept the same — e.g. volume of water, starting temperature, timing. Identifying all three is essential for a fair test.",
          },
          {
            heading: "Real examples",
            body: "Investigating 'Does light affect plant growth?': IV = amount of light; DV = plant height; CVs = water amount, soil type, pot size, temperature. If CVs aren't controlled, results are unreliable.",
          },
        ],
        keyFormulas: [
          {
            name: "Fair test",
            statement: "Change IV only; measure DV; keep CVs same",
          },
        ],
        workedExample: {
          problem:
            "Identify variables: 'Does the type of ramp affect how far a car rolls?'",
          solution:
            "IV = ramp type/surface; DV = distance rolled; CVs = car, release height, ramp length.",
        },
      },
      questions: [
        {
          id: "edps4-u4-vq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a fair test, which variable do you deliberately change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependent" },
              { id: "b", text: "Independent" },
              { id: "c", text: "Controlled" },
              { id: "d", text: "All of them" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent variable",
                statement: "What you change.",
              },
            ],
            steps: [
              {
                reasoning: "IV is deliberately changed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Independent",
            commonErrors: ["Confusing variable types."],
          },
        },
        {
          id: "edps4-u4-vq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Does salt dissolve faster in warm or cold water?', what is measured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salt amount" },
              { id: "b", text: "Water temperature" },
              { id: "c", text: "Dissolving time" },
              { id: "d", text: "Water volume" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dependent variable",
                statement: "What you measure.",
              },
            ],
            steps: [
              {
                reasoning: "Measure outcome: time to dissolve.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Dissolving time",
            commonErrors: ["Confusing IV and DV."],
          },
        },
        {
          id: "edps4-u4-vq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the independent, dependent and two controlled variables for 'Does the size of a paper plane affect how far it flies?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Variables", statement: "IV + DV + CVs." },
            ],
            steps: [
              {
                reasoning: "IV = plane size; DV = distance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CVs = paper type, throw force, wind.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "IV=size, DV=distance, CVs=paper/throw",
            commonErrors: ["Missing CVs."],
          },
        },
        {
          id: "edps4-u4-vq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests 'Does fertiliser help plants grow?' but gives different amounts of water to each plant. Explain why the results are unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Controlled variables",
                statement: "Uncontrolled = unreliable.",
              },
            ],
            steps: [
              {
                reasoning: "Water is a CV that wasn't controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Water also affects growth — can't isolate fertiliser effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two variables changed = unfair test.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Water confounds the test",
            commonErrors: ["Not explaining confounding."],
          },
        },
      ],
    },
    {
      id: "edps4-u4-design",
      title: "Designing Fair Tests",
      skill: "Design complete investigation plans with predictions.",
      lesson: {
        sections: [
          {
            heading: "Complete investigation plans",
            body: "A good plan includes: question, hypothesis (prediction with reasoning), variables (IV, DV, CVs), equipment list, step-by-step method, data table, repeats. Write it before starting — it keeps you organised and fair.",
          },
          {
            heading: "Predictions and hypotheses",
            body: "A hypothesis is a testable prediction with reasoning: 'I think the metal spoon will feel hottest because metals conduct heat well.' Predictions guide what you measure and let you compare expectations to results.",
          },
        ],
        keyFormulas: [
          {
            name: "Investigation plan",
            statement:
              "Question + hypothesis + variables + method + data table",
          },
        ],
        workedExample: {
          problem:
            "Write a hypothesis for 'Does surface affect how far a ball rolls?'",
          solution:
            "'I think the ball will roll furthest on smooth surfaces because there's less friction.'",
        },
      },
      questions: [
        {
          id: "edps4-u4-dq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you write BEFORE conducting an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The conclusion" },
              { id: "b", text: "A plan with variables and method" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "The results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Planning", statement: "Plan first." },
            ],
            steps: [
              { reasoning: "Plan before testing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Plan first",
            commonErrors: ["Skipping planning."],
          },
        },
        {
          id: "edps4-u4-dq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A measurement" },
              { id: "b", text: "A testable prediction with reasoning" },
              { id: "c", text: "A conclusion" },
              { id: "d", text: "Equipment list" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Reasoned prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis = testable prediction.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Testable prediction",
            commonErrors: ["Confusing with conclusion."],
          },
        },
        {
          id: "edps4-u4-dq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a hypothesis and list variables for 'Does the amount of sunlight affect plant growth?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hypothesis + variables",
                statement: "Prediction + IV/DV/CVs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hypothesis: more sunlight → more growth (because plants need light).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "IV = sunlight amount; DV = plant height.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CVs = water, soil, pot size.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hypothesis + variables identified",
            commonErrors: ["No reasoning in hypothesis."],
          },
        },
        {
          id: "edps4-u4-dq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test for 'Which material is the best thermal insulator?' Include all plan elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Investigation design",
                statement: "Complete plan.",
              },
            ],
            steps: [
              {
                reasoning: "Question + hypothesis stated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Variables: material=IV, temp change=DV, same volume/timing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method, data table, repeats included.",
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
    {
      id: "edps4-u4-data",
      title: "Data Collection and Analysis",
      skill: "Collect, organise and analyse scientific data.",
      lesson: {
        sections: [
          {
            heading: "Accurate data collection",
            body: "Record results immediately in a table with clear headings and units. Repeat each test at least 3 times and calculate averages. Watch for anomalies — results that don't fit the pattern — and note possible causes. Accuracy matters: measure carefully, use appropriate tools.",
          },
          {
            heading: "Analysing patterns",
            body: "Look for trends: as IV increases, does DV increase or decrease? Compare categories: which is highest/lowest? Identify anomalies and explain them. Patterns in data answer your question — use them in conclusions.",
          },
        ],
        keyFormulas: [
          {
            name: "Data analysis",
            statement: "Record + repeat + average + find patterns",
          },
        ],
        workedExample: {
          problem:
            "Results: fabric A=8°C drop, B=15°C, C=22°C. Which insulates best?",
          solution:
            "Fabric A — smallest temperature drop means best insulation.",
        },
      },
      questions: [
        {
          id: "edps4-u4-daq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why repeat each test multiple times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To waste time" },
              { id: "b", text: "To check reliability and average results" },
              { id: "c", text: "No reason" },
              { id: "d", text: "To confuse" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Repeats",
                statement: "Reliability + average.",
              },
            ],
            steps: [
              {
                reasoning: "Repeats improve reliability.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reliability",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps4-u4-daq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an anomaly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A normal result" },
              { id: "b", text: "A result that doesn't fit the pattern" },
              { id: "c", text: "The average" },
              { id: "d", text: "The question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "Odd result." },
            ],
            steps: [
              {
                reasoning: "Anomaly = doesn't fit pattern.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Doesn't fit",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps4-u4-daq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: ramp angle 10°→5cm, 20°→15cm, 30°→35cm. Describe the pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pattern analysis",
                statement: "Trend identified.",
              },
            ],
            steps: [
              {
                reasoning: "Steeper ramp = further roll.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Positive relationship.", marks: 1, markCode: "M" },
              { reasoning: "Clear trend stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steeper = further",
            commonErrors: ["No trend."],
          },
        },
        {
          id: "edps4-u4-daq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Results: 12, 13, 11, 48, 12, 13. Identify the anomaly and suggest two possible causes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Anomaly analysis",
                statement: "Identify + explain.",
              },
            ],
            steps: [
              {
                reasoning: "48 is the anomaly — others ~11-13.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible causes: measurement error, different conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anomalies noted and explained.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "48 is anomaly; error or conditions",
            commonErrors: ["Ignoring anomaly."],
          },
        },
      ],
    },
    {
      id: "edps4-u4-eval",
      title: "Conclusions and Evaluation",
      skill: "Draw evidence-based conclusions and evaluate investigations.",
      lesson: {
        sections: [
          {
            heading: "Writing conclusions",
            body: "A strong conclusion: answers the question directly, cites specific data as evidence, links to your hypothesis, and acknowledges limitations. 'The fabric insulator kept ice coldest longest (60min vs 45, 30), so it's the best insulator — matching my prediction.' If results were unexpected, explain honestly.",
          },
          {
            heading: "Evaluating investigations",
            body: "Evaluate: Was it fair? Variables controlled? Measurements accurate? Repeats done? What could be improved? 'More repeats would improve reliability; a digital timer would be more precise; testing in different conditions would check robustness.'",
          },
        ],
        keyFormulas: [
          {
            name: "Conclusion",
            statement: "Answer + evidence + hypothesis link + limitations",
          },
        ],
        workedExample: {
          problem:
            "Write a conclusion: 'Which material conducts heat best?' Results: metal 2min, wood 8min, plastic 10min.",
          solution:
            "Metal is the best conductor — it heated fastest (2min vs 8, 10), supporting my prediction.",
        },
      },
      questions: [
        {
          id: "edps4-u4-eq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a conclusion include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only opinion" },
              { id: "b", text: "Answer + evidence" },
              { id: "c", text: "The question" },
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
          id: "edps4-u4-eq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluating' an investigation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating it" },
              { id: "b", text: "Judging its quality and fairness" },
              { id: "c", text: "Writing it" },
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
          id: "edps4-u4-eq3",
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
              {
                reasoning: "Steeper ramp = further distance.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cites numbers.", marks: 1, markCode: "M" },
              {
                reasoning: "Explains why (gravity/friction).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Steeper = further",
            commonErrors: ["No data."],
          },
        },
        {
          id: "edps4-u4-eq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Suggest two improvements to an investigation and explain how each makes results more reliable.",
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
                reasoning: "Repeat tests — confirms consistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use precise tools — reduces error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons linked to reliability.",
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
      id: "edps4-u4-apply",
      title: "Applying Science Skills",
      skill: "Apply enquiry skills across all science topics.",
      lesson: {
        sections: [
          {
            heading: "Science skills everywhere",
            body: "Enquiry skills work across all science topics: living things, materials, physical processes, Earth and space. Whether testing which material is strongest, which liquid freezes fastest, or which circuit works best, the same skills apply — question, predict, plan, test, record, analyse, conclude, evaluate.",
          },
          {
            heading: "Real-world applications",
            body: "Scientists, engineers, doctors, farmers and cooks all use enquiry skills. Understanding how to investigate properly helps you evaluate claims, solve problems and make informed decisions — from 'Does this supplement work?' to 'Which phone has the best battery?'",
          },
        ],
        keyFormulas: [
          {
            name: "Enquiry skills",
            statement: "Apply across all science topics",
          },
        ],
        workedExample: {
          problem:
            "How would you investigate 'Does the type of battery affect how long a torch lasts?'",
          solution:
            "IV=battery type, DV=torch time, CVs=same torch, same bulb, same starting charge.",
        },
      },
      questions: [
        {
          id: "edps4-u4-aq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which skill applies to ALL science investigations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only measuring" },
              { id: "b", text: "Fair testing and variables" },
              { id: "c", text: "Only recording" },
              { id: "d", text: "Only concluding" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Enquiry skills",
                statement: "Universal.",
              },
            ],
            steps: [
              {
                reasoning: "Fair testing applies everywhere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fair testing",
            commonErrors: ["Topic-specific thinking."],
          },
        },
        {
          id: "edps4-u4-aq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who uses scientific enquiry skills?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only scientists" },
              { id: "b", text: "Many professionals" },
              { id: "c", text: "Only teachers" },
              { id: "d", text: "Nobody" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Enquiry skills",
                statement: "Widely used.",
              },
            ],
            steps: [
              {
                reasoning: "Many careers use enquiry.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Many professionals",
            commonErrors: ["Only scientists."],
          },
        },
        {
          id: "edps4-u4-aq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How are enquiry skills useful in everyday life? Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Everyday enquiry",
                statement: "Real-world use.",
              },
            ],
            steps: [
              {
                reasoning: "Example: choosing products — compare data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: fixing problems — test solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enquiry skills transfer broadly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two everyday examples",
            commonErrors: ["Only one example."],
          },
        },
        {
          id: "edps4-u4-aq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an investigation to test 'Does the type of liquid affect how fast it freezes?' Include all variables and method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Complete investigation",
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
                reasoning:
                  "Variables: liquid type=IV, freeze time=DV, same volume/temp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method + data table + conclusion criteria.",
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
