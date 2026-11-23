import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edps6-u4-lesson-4-1",
  code: "4-1",
  title: "Advanced Investigation Planning",
  goal: "I CAN plan complex investigations with multiple variables and controls.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Independent variable",
      definition: "The variable you deliberately change.",
    },
    { term: "Dependent variable", definition: "The variable you measure." },
    {
      term: "Controlled variable",
      definition: "Variables kept the same for fairness.",
    },
    {
      term: "Reliability",
      definition: "Consistency of results when repeated.",
    },
  ],
  concepts: [
    {
      id: "edps6-u4-variables",
      title: "Complex variable control",
      skill: "Identify and control variables in complex investigations.",
      lesson: {
        sections: [
          {
            heading: "Advanced variable analysis",
            body: "Complex investigations may involve multiple potential variables. Identify the IV (what you change), DV (what you measure), and ALL CVs (what must stay the same). Some CVs are hidden — e.g. testing plant growth, temperature and humidity affect results too. List everything that could affect the outcome.",
          },
          {
            heading: "Reliability and validity",
            body: "Reliability = consistent results when repeated. Validity = measuring what you intend to measure. An investigation can be reliable but not valid (consistent but measuring the wrong thing). Repeat tests 3+ times, use precise tools, and ensure your method actually tests your question.",
          },
        ],
        keyFormulas: [
          {
            name: "Fair test",
            statement: "Change IV only; measure DV; control all CVs",
          },
        ],
        workedExample: {
          problem:
            "Identify variables: 'Does the type of liquid affect how fast it freezes?'",
          solution:
            "IV = liquid type; DV = freezing time; CVs = volume, starting temperature, container, freezer setting.",
        },
      },
      questions: [
        {
          id: "edps6-u4-vq1",
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
          id: "edps6-u4-vq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between reliability and validity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              {
                id: "b",
                text: "Reliability=consistency, validity=measuring what you intend",
              },
              { id: "c", text: "Validity=consistency" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Reliability vs validity",
                statement: "Consistency vs measuring correctly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reliability=repeatable, validity=correct measurement.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Consistency vs measuring correctly",
            commonErrors: ["Confusing terms."],
          },
        },
        {
          id: "edps6-u4-vq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List IV, DV and three CVs for 'Does the type of battery affect how long a torch lasts?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Variables", statement: "IV + DV + CVs." },
            ],
            steps: [
              {
                reasoning: "IV = battery type; DV = torch time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CVs = same torch, same bulb, starting charge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "IV=battery, DV=time, CVs=torch/bulb",
            commonErrors: ["Missing CVs."],
          },
        },
        {
          id: "edps6-u4-vq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests 'Does fertiliser help plants grow?' outdoors where weather varies daily. Explain why results may be unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Controlled variables",
                statement: "Hidden CVs affect results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weather (temperature, rain, light) is uncontrolled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different conditions each day affect growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can't isolate fertiliser effect.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Weather is uncontrolled CV",
            commonErrors: ["Not identifying hidden CVs."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-design",
      title: "Designing Robust Investigations",
      skill: "Design investigations that produce reliable, valid results.",
      lesson: {
        sections: [
          {
            heading: "Complete investigation design",
            body: "A robust investigation includes: clear question, testable hypothesis, identified variables, equipment list, detailed method, data table, repeats (3+), and evaluation plan. Write it before starting — it keeps you organised and ensures fair testing.",
          },
          {
            heading: "Ensuring validity",
            body: "Validity means your test actually measures what you intend. Check: Does your method really test the question? Are you measuring the right thing? Could other factors affect results? A valid investigation controls variables AND measures the correct outcome.",
          },
        ],
        keyFormulas: [
          {
            name: "Investigation design",
            statement:
              "Question + hypothesis + variables + method + data + repeats",
          },
        ],
        workedExample: {
          problem:
            "Design a valid test for 'Does the type of surface affect how far a ball rolls?'",
          solution:
            "IV=surface type, DV=distance, CVs=same ball/force/angle. Measure distance with ruler, repeat 3x, average.",
        },
      },
      questions: [
        {
          id: "edps6-u4-dq1",
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
          id: "edps6-u4-dq2",
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
          id: "edps6-u4-dq3",
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
              {
                reasoning: "CVs = water, soil, temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hypothesis + variables",
            commonErrors: ["No reasoning."],
          },
        },
        {
          id: "edps6-u4-dq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a robust investigation for 'Which material is the best electrical conductor?' Include all plan elements and explain how you ensure validity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Investigation design",
                statement: "Complete valid plan.",
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
                  "Variables: material=IV, current=DV, same length/voltage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method + repeats + validity explanation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete valid investigation plan",
            commonErrors: ["Missing validity."],
          },
        },
      ],
    },
    {
      id: "edps6-u4-data",
      title: "Data Analysis and Interpretation",
      skill: "Analyse complex data and draw reliable conclusions.",
      lesson: {
        sections: [
          {
            heading: "Advanced data analysis",
            body: "Record results in detailed tables with units. Repeat 3+ times and calculate averages. Identify anomalies and explain possible causes. Look for trends, patterns and relationships. Consider whether results support your hypothesis — and be honest if they don't.",
          },
          {
            heading: "Statistical thinking",
            body: "Mean = average of all results. Range = highest minus lowest. More repeats = more reliable averages. If results vary widely, note the uncertainty. Compare averages to find differences — but check if differences are meaningful or just random variation.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum of results ÷ number of results" },
        ],
        workedExample: {
          problem: "Calculate mean of 8, 10, 9, 11, 7. What does it tell you?",
          solution:
            "Mean = 45÷5 = 9. The typical value is 9, with range 4 (7-11).",
        },
      },
      questions: [
        {
          id: "edps6-u4-daq1",
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
          id: "edps6-u4-daq2",
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
          id: "edps6-u4-daq3",
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
          id: "edps6-u4-daq4",
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
      id: "edps6-u4-eval",
      title: "Conclusions and Evaluation",
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
          id: "edps6-u4-eq1",
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
          id: "edps6-u4-eq2",
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
          id: "edps6-u4-eq3",
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
          id: "edps6-u4-eq4",
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
      id: "edps6-u4-method",
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
          id: "edps6-u4-mq1",
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
          id: "edps6-u4-mq2",
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
          id: "edps6-u4-mq3",
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
          id: "edps6-u4-mq4",
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
      id: "edps6-u4-apply",
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
          id: "edps6-u4-rq1",
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
          id: "edps6-u4-rq2",
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
          id: "edps6-u4-rq3",
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
          id: "edps6-u4-rq4",
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
      id: "edps6-u4-consolidation",
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
          id: "edps6-u4-cn-q1",
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
          id: "edps6-u4-cn-q2",
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
          id: "edps6-u4-cn-q3",
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
          id: "edps6-u4-cn-q4",
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
