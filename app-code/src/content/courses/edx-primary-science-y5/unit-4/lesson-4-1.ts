import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edps5-u4-lesson-4-1",
  code: "4-1",
  title: "Planning Scientific Investigations",
  goal: "I CAN plan investigations with clear variables and fair tests.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Independent variable", definition: "The variable you change." },
    { term: "Dependent variable", definition: "The variable you measure." },
    { term: "Controlled variable", definition: "Variables kept the same." },
    { term: "Hypothesis", definition: "A testable prediction with reasoning." },
  ],
  concepts: [
    {
      id: "edps5-u4-variables",
      title: "Identifying variables",
      skill: "Identify IV, DV and CVs in investigations.",
      lesson: {
        sections: [
          {
            heading: "Three types of variables",
            body: "Independent variable (IV): what you change — e.g. type of material. Dependent variable (DV): what you measure — e.g. temperature change. Controlled variables (CVs): everything kept the same — e.g. volume, starting temperature, timing. Identifying all three is essential for a fair test.",
          },
          {
            heading: "Real examples",
            body: "'Does light affect plant growth?': IV = light amount; DV = plant height; CVs = water, soil, pot size, temperature. Uncontrolled CVs make results unreliable — you can't tell if light or water caused the difference.",
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
            "IV = ramp surface; DV = distance; CVs = car, release height, ramp length.",
        },
      },
      questions: [
        {
          id: "edps5-u4-vq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a fair test, which variable do you deliberately change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependent" },
              { id: "b", text: "Independent" },
              { id: "c", text: "Controlled" },
              { id: "d", text: "All" },
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
            commonErrors: ["Confusing types."],
          },
        },
        {
          id: "edps5-u4-vq2",
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
            commonErrors: ["Confusing IV/DV."],
          },
        },
        {
          id: "edps5-u4-vq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List IV, DV and two CVs for 'Does the size of a paper plane affect how far it flies?'",
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
          id: "edps5-u4-vq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests 'Does fertiliser help plants grow?' but gives different water amounts. Explain why results are unreliable.",
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
                reasoning: "Water is a CV not controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Water also affects growth — can't isolate fertiliser.",
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
      id: "edps5-u4-design",
      title: "Designing Fair Tests",
      skill: "Design complete investigation plans with predictions.",
      lesson: {
        sections: [
          {
            heading: "Complete investigation plans",
            body: "A good plan includes: question, hypothesis, variables (IV, DV, CVs), equipment list, step-by-step method, data table, repeats. Write it before starting — it keeps you organised and fair.",
          },
          {
            heading: "Predictions and hypotheses",
            body: "A hypothesis is a testable prediction with reasoning: 'I think the metal spoon will feel hottest because metals conduct heat well.' Predictions guide what you measure and let you compare expectations to results.",
          },
        ],
        keyFormulas: [
          {
            name: "Investigation plan",
            statement: "Question + hypothesis + variables + method + data",
          },
        ],
        workedExample: {
          problem:
            "Write a hypothesis for 'Does surface affect how far a ball rolls?'",
          solution:
            "'I think the ball rolls furthest on smooth surfaces because there's less friction.'",
        },
      },
      questions: [
        {
          id: "edps5-u4-dq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you write BEFORE conducting an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion" },
              { id: "b", text: "A plan with variables and method" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Results" },
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
          id: "edps5-u4-dq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measurement" },
              { id: "b", text: "Testable prediction with reasoning" },
              { id: "c", text: "Conclusion" },
              { id: "d", text: "Equipment" },
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
          id: "edps5-u4-dq3",
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
                reasoning: "Hypothesis: more sunlight → more growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "IV = sunlight; DV = height.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "CVs = water, soil, pot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hypothesis + variables",
            commonErrors: ["No reasoning."],
          },
        },
        {
          id: "edps5-u4-dq4",
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
                reasoning: "Variables: material=IV, temp change=DV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method, data table, repeats.",
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
      id: "edps5-u4-data",
      title: "Data Collection and Analysis",
      skill: "Collect, organise and analyse scientific data.",
      lesson: {
        sections: [
          {
            heading: "Accurate data collection",
            body: "Record results immediately in a table with clear headings and units. Repeat each test at least 3 times and calculate averages. Watch for anomalies — results that don't fit — and note possible causes. Accuracy matters: measure carefully, use appropriate tools.",
          },
          {
            heading: "Analysing patterns",
            body: "Look for trends: as IV increases, does DV increase or decrease? Compare categories: which is highest/lowest? Identify anomalies and explain them. Patterns answer your question — use them in conclusions.",
          },
        ],
        keyFormulas: [
          {
            name: "Data analysis",
            statement: "Record + repeat + average + patterns",
          },
        ],
        workedExample: {
          problem:
            "Results: fabric A=8°C drop, B=15°C, C=22°C. Which insulates best?",
          solution: "Fabric A — smallest drop = best insulation.",
        },
      },
      questions: [
        {
          id: "edps5-u4-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why repeat each test multiple times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waste time" },
              { id: "b", text: "Check reliability and average" },
              { id: "c", text: "No reason" },
              { id: "d", text: "Confuse" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Repeats", statement: "Reliability." },
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
          id: "edps5-u4-da-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an anomaly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Normal result" },
              { id: "b", text: "Result that doesn't fit the pattern" },
              { id: "c", text: "Average" },
              { id: "d", text: "Question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "Odd result." },
            ],
            steps: [
              { reasoning: "Anomaly = doesn't fit.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Doesn't fit",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps5-u4-da-q3",
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
          id: "edps5-u4-da-q4",
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
                reasoning: "Possible causes: measurement error, conditions.",
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
      id: "edps5-u4-eval",
      title: "Conclusions and Evaluation",
      skill: "Draw evidence-based conclusions and evaluate investigations.",
      lesson: {
        sections: [
          {
            heading: "Writing conclusions",
            body: "A strong conclusion answers the question directly, cites specific data, links to your hypothesis, and acknowledges limitations. If results were unexpected, explain honestly — 'The results didn't match my prediction because...' Good scientists report what they found, not what they hoped.",
          },
          {
            heading: "Evaluating quality",
            body: "Evaluate: Was it fair? Variables controlled? Measurements accurate? Repeats done? What could be improved? Strong evaluations identify strengths AND weaknesses with specific improvements: 'More repeats would improve reliability; a digital timer would be more precise.'",
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
            "Write a conclusion: 'Which material conducts heat best?' Metal 2min, wood 8min, plastic 10min.",
          solution:
            "Metal is best — heated fastest (2min vs 8, 10), matching prediction.",
        },
      },
      questions: [
        {
          id: "edps5-u4-e-q1",
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
          id: "edps5-u4-e-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluating' an investigation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating" },
              { id: "b", text: "Judging quality" },
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
          id: "edps5-u4-e-q3",
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
          id: "edps5-u4-e-q4",
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
      id: "edps5-u4-method",
      title: "Safety and Scientific Method",
      skill: "Follow safety procedures and the full scientific method.",
      lesson: {
        sections: [
          {
            heading: "Safety in investigations",
            body: "Assess risks before starting: identify hazards, plan controls, follow safety rules. Hot objects need gloves, chemicals need ventilation, electrical equipment needs care. Always have adult supervision for risky activities. Safety is part of good science.",
          },
          {
            heading: "The scientific method",
            body: "Question → hypothesis → plan → test → record → analyse → conclude → evaluate. Each step builds on the last. Skipping steps weakens your investigation. The method ensures reliable, valid results.",
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
          id: "edps5-u4-m-q1",
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
          id: "edps5-u4-m-q2",
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
          id: "edps5-u4-m-q3",
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
          id: "edps5-u4-m-q4",
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
      id: "edps5-u4-apply",
      title: "Science in the Real World",
      skill: "Apply enquiry skills to real-world problems.",
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
          id: "edps5-u4-r-q1",
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
          id: "edps5-u4-r-q2",
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
          id: "edps5-u4-r-q3",
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
          id: "edps5-u4-r-q4",
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
  ],
};
