import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edps4-u4-lesson-4-2",
  code: "4-2",
  title: "Presenting and Interpreting Data",
  goal: "I CAN choose, create and interpret appropriate data displays.",
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
    { term: "Average", definition: "The mean of repeated measurements." },
  ],
  concepts: [
    {
      id: "edps4-u4-displays",
      title: "Choosing data displays",
      skill: "Select and create appropriate charts and graphs.",
      lesson: {
        sections: [
          {
            heading: "Matching display to data",
            body: "Bar charts compare categories (which material is strongest). Line graphs show change over time (temperature vs dissolving). Scatter graphs show relationships between two variables. Tables give exact values. Always label axes with units and give the chart a title.",
          },
          {
            heading: "Accuracy in displays",
            body: "Graph scales must be even and start at zero where appropriate. A misleading graph might have a broken axis or uneven spacing that exaggerates differences. Check that your display tells the story honestly.",
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
            "Which display for 'How does temperature change as ice melts over 10 minutes'?",
          solution: "Line graph — shows change over time.",
        },
      },
      questions: [
        {
          id: "edps4-u4-disp-q1",
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
          id: "edps4-u4-disp-q2",
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
          id: "edps4-u4-disp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the best display for 'Which fruit is most popular?' and justify your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Display choice",
                statement: "Comparison → bar chart.",
              },
            ],
            steps: [
              {
                reasoning: "Bar chart shows comparison clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or pictogram for simple counts.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Justified choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bar chart for comparison",
            commonErrors: ["Wrong display."],
          },
        },
        {
          id: "edps4-u4-disp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might a line graph be misleading if the x-axis isn't evenly spaced? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Graph integrity",
                statement: "Scale affects perception.",
              },
            ],
            steps: [
              {
                reasoning: "Uneven spacing distorts trends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exaggerates or minimises changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Honest graphs need fair scales.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Uneven axis distorts data",
            commonErrors: ["Not explaining distortion."],
          },
        },
      ],
    },
    {
      id: "edps4-u4-interp",
      title: "Interpreting Scientific Data",
      skill: "Extract meaning and patterns from scientific results.",
      lesson: {
        sections: [
          {
            heading: "Finding patterns",
            body: "Look for trends (as X increases, Y increases/decreases), comparisons (which is highest/lowest), and anomalies (results that don't fit). Patterns answer your question — describe them clearly: 'As ramp angle increased, distance increased' is more useful than 'it went up'.",
          },
          {
            heading: "Reliability and accuracy",
            body: "Reliability = consistent results when repeated. Accuracy = how close to the true value. More repeats improve reliability. Precise tools improve accuracy. Averages reduce the effect of anomalies. Both matter for trustworthy conclusions.",
          },
        ],
        keyFormulas: [
          { name: "Pattern", statement: "Trend + comparison + anomalies" },
        ],
        workedExample: {
          problem:
            "Interpret: temperature 20°C→60s, 40°C→45s, 60°C→30s. What pattern?",
          solution:
            "Higher temperature = faster dissolving — negative relationship.",
        },
      },
      questions: [
        {
          id: "edps4-u4-iq1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'reliability' in an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Consistent results when repeated" },
              { id: "c", text: "Accuracy" },
              { id: "d", text: "Cost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability",
                statement: "Consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability = consistent results.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Consistent results",
            commonErrors: ["Confusing with accuracy."],
          },
        },
        {
          id: "edps4-u4-iq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between reliability and accuracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              {
                id: "b",
                text: "Reliability=consistency, accuracy=correctness",
              },
              { id: "c", text: "Accuracy=consistency" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Reliability vs accuracy",
                statement: "Consistency vs correctness.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability=repeatable, accuracy=correct.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Consistency vs correctness",
            commonErrors: ["Confusing terms."],
          },
        },
        {
          id: "edps4-u4-iq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: light 2hrs→3cm, 4hrs→5cm, 6hrs→8cm. Describe the trend and what it means.",
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
                reasoning: "More light = more growth.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Positive relationship.", marks: 1, markCode: "M" },
              { reasoning: "Light promotes growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More light → more growth",
            commonErrors: ["No trend."],
          },
        },
        {
          id: "edps4-u4-iq4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three measurements give 9.8, 10.2, 9.9. Calculate the average and explain why averaging helps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Averages",
                statement: "Mean reduces error.",
              },
            ],
            steps: [
              {
                reasoning: "Average = (9.8+10.2+9.9)/3 = 9.97 ≈ 10.0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Averaging reduces effect of anomalies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More reliable estimate of true value.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "10.0; reduces error",
            commonErrors: ["Wrong average."],
          },
        },
      ],
    },
    {
      id: "edps4-u4-conclusion",
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
            "Write a conclusion: 'Which insulator keeps drinks coldest?' Fabric 60min, foam 90min, plastic 30min.",
          solution:
            "Foam is the best insulator — kept drink coldest longest (90min vs 60, 30), matching prediction.",
        },
      },
      questions: [
        {
          id: "edps4-u4-cq1",
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
          id: "edps4-u4-cq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluating' an investigation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating it" },
              { id: "b", text: "Judging its quality" },
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
          id: "edps4-u4-cq3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a conclusion for: 'Does surface type affect ball bounce?' Carpet 20cm, tile 45cm, grass 15cm.",
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
              { reasoning: "Tile bounces highest.", marks: 1, markCode: "M" },
              { reasoning: "Cites numbers.", marks: 1, markCode: "M" },
              {
                reasoning: "Explains why (hard vs soft).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tile bounces highest",
            commonErrors: ["No data."],
          },
        },
        {
          id: "edps4-u4-cq4",
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
      id: "edps4-u4-method",
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
            body: "Question → hypothesis → plan → test → record → analyse → conclude → evaluate. Each step builds on the last. Skipping steps (e.g. no hypothesis, no evaluation) weakens your investigation. The method ensures reliable, valid results.",
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
          id: "edps4-u4-mq1",
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
          id: "edps4-u4-mq2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'hazard'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tool" },
              { id: "b", text: "Something that could cause harm" },
              { id: "c", text: "A variable" },
              { id: "d", text: "A result" },
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
          id: "edps4-u4-mq3",
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
          id: "edps4-u4-mq4",
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
                reasoning: "Identifies strengths and weaknesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suggests improvements for future tests.",
                marks: 1,
                markCode: "M",
              },
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
      id: "edps4-u4-realworld",
      title: "Science in the Real World",
      skill: "Apply enquiry skills to real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Everyday science",
            body: "Enquiry skills apply everywhere: cooking (why does bread rise?), sport (why do balls bounce?), medicine (testing treatments), weather forecasting, engineering. The same skills — question, predict, test, measure, analyse — work in all these contexts.",
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
          id: "edps4-u4-rq1",
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
          id: "edps4-u4-rq2",
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
          id: "edps4-u4-rq3",
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
          id: "edps4-u4-rq4",
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
