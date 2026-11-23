import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m8-u7-lesson-7-2",
  code: "7-2",
  title: "Scatter Plots and Bivariate Data",
  goal: "I CAN create and interpret scatter plots, identify correlations, and draw lines of best fit.",
  standards: ["8.SP.A.1", "8.SP.A.2", "8.SP.A.3", "8.SP.A.4"],
  vocabulary: [
    {
      term: "Scatter plot",
      definition:
        "A graph showing relationship between two variables as points.",
    },
    {
      term: "Bivariate data",
      definition: "Data with two variables measured for each observation.",
    },
    {
      term: "Correlation",
      definition:
        "The relationship between two variables: positive, negative, or none.",
    },
    {
      term: "Line of best fit",
      definition: "A line that best represents the trend in scatter plot data.",
    },
    {
      term: "Outlier",
      definition: "A data point that doesn't follow the general pattern.",
    },
    {
      term: "Association",
      definition: "The relationship between two variables in a scatter plot.",
    },
  ],
  concepts: [
    {
      id: "m8-u7-scatter-plots",
      title: "Creating and interpreting scatter plots",
      skill:
        "Create scatter plots and identify patterns, correlations, and outliers.",
      lesson: {
        sections: [
          {
            heading: "Positive correlation",
            body: "When one variable increases, the other tends to increase. Example: study time vs test scores. Points slope upward from left to right.",
          },
          {
            heading: "Negative correlation",
            body: "When one variable increases, the other tends to decrease. Example: temperature vs heating bill. Points slope downward from left to right.",
          },
          {
            heading: "No correlation",
            body: "No clear pattern. Points are scattered randomly. Example: shoe size vs test scores (usually).",
          },
        ],
        keyFormulas: [
          { name: "Positive", statement: "Both variables increase together" },
          { name: "Negative", statement: "One increases, other decreases" },
          { name: "None", statement: "No clear pattern" },
        ],
        workedExample: {
          problem: "Interpret a scatter plot showing height vs weight.",
          solution: "Positive correlation: taller people tend to weigh more.",
        },
      },
      questions: [
        {
          id: "m8-u7-scatter-plots-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatter plot shows points sloping upward from left to right. What type of correlation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive" },
              { id: "b", text: "Negative" },
              { id: "c", text: "None" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive correlation",
                statement: "Both variables increase.",
              },
            ],
            steps: [
              {
                reasoning: "Upward slope = positive correlation.",
                evidence: "positive",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Positive",
            commonErrors: ["Confusing positive with negative."],
          },
        },
        {
          id: "m8-u7-scatter-plots-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which scenario likely shows negative correlation?",
          parts: [
            { label: "a", prompt: "Study time vs test scores", marks: 1 },
            { label: "b", prompt: "Temperature vs heating bill", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative correlation",
                statement: "One increases, other decreases.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Positive correlation (more study → higher scores).",
                evidence: "positive",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Negative correlation (warmer → lower heating bill).",
                evidence: "negative",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Positive (b) Negative",
            commonErrors: ["Not understanding correlation direction."],
          },
        },
        {
          id: "m8-u7-scatter-plots-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For each scenario, identify the correlation type.",
          parts: [
            { label: "a", prompt: "Hours of sleep vs energy level", marks: 1 },
            { label: "b", prompt: "Car age vs resale value", marks: 1 },
            { label: "c", prompt: "Shoe size vs test scores", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation types",
                statement: "Positive, negative, none.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Positive (more sleep → more energy).",
                evidence: "positive",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Negative (older car → lower value).",
                evidence: "negative",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "None (no logical relationship).",
                evidence: "none",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Positive (b) Negative (c) None",
            commonErrors: ["Finding correlation where none exists."],
          },
        },
        {
          id: "m8-u7-scatter-plots-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Identify correlation type for each scenario.",
          parts: [
            { label: "a", prompt: "Exercise time vs fitness level", marks: 2 },
            { label: "b", prompt: "Age vs maximum heart rate", marks: 2 },
            { label: "c", prompt: "Height vs shoe size", marks: 2 },
            {
              label: "d",
              prompt: "Coffee consumption vs test scores",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation types",
                statement: "Positive, negative, none.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Positive (more exercise → better fitness).",
                evidence: "positive",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Negative (older → lower max heart rate).",
                evidence: "negative",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Positive (taller → larger feet).",
                evidence: "positive",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Likely none or weak positive (no strong causal link).",
                evidence: "none/weak",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Positive (b) Negative (c) Positive (d) None/weak",
            commonErrors: ["Assuming correlation implies causation."],
          },
        },
      ],
    },
    {
      id: "m8-u7-lines-best-fit",
      title: "Lines of best fit",
      skill: "Draw and interpret lines of best fit for scatter plot data.",
      lesson: {
        sections: [
          {
            heading: "Drawing best fit line",
            body: "The line of best fit should pass through or near most points, with roughly equal numbers of points above and below. It represents the overall trend.",
          },
          {
            heading: "Interpreting slope and intercept",
            body: "Slope = rate of change in the relationship. Intercept = predicted value when x = 0. For study time vs scores: slope might be 5 (5 points per hour), intercept 60 (baseline score).",
          },
          {
            heading: "Using for predictions",
            body: "The line allows predictions: for x = 4 hours study, predicted score = 5(4) + 60 = 80. Predictions are estimates, not guarantees.",
          },
        ],
        keyFormulas: [
          { name: "Best fit", statement: "Represents overall trend" },
          { name: "Slope", statement: "Rate of change" },
          { name: "Prediction", statement: "Use equation to estimate" },
        ],
        workedExample: {
          problem: "A line of best fit is $y = 2x + 10$. Predict y when x = 5.",
          solution: "$y = 2(5) + 10 = 20$.",
        },
      },
      questions: [
        {
          id: "m8-u7-lines-best-fit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a line of best fit do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pass through all points" },
              { id: "b", text: "Pass through or near most points" },
              { id: "c", text: "Be horizontal" },
              { id: "d", text: "Connect first and last points" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Best fit",
                statement: "Represents trend.",
              },
            ],
            steps: [
              {
                reasoning: "Best fit passes through or near most points.",
                evidence: "most points",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Pass through or near most points",
            commonErrors: ["Thinking it must pass through all points."],
          },
        },
        {
          id: "m8-u7-lines-best-fit-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line of best fit is $y = 3x + 12$. What does the slope represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope",
                statement: "Rate of change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slope $3$ = y increases by 3 for each 1 increase in x.",
                evidence: "3",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Intercept $12$ = predicted y when x = 0.",
                evidence: "12",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Slope = rate of change; intercept = baseline value",
            commonErrors: ["Not interpreting slope correctly."],
          },
        },
        {
          id: "m8-u7-lines-best-fit-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use the line of best fit $y = 2x + 8$ to answer questions.",
          parts: [
            { label: "a", prompt: "Predict y when x = 4", marks: 1 },
            { label: "b", prompt: "What is the intercept?", marks: 1 },
            { label: "c", prompt: "What does slope represent?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Using best fit",
                statement: "Apply equation for predictions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$y = 2(4) + 8 = 16$.",
                evidence: "16",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Intercept = $8$.",
                evidence: "8",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Slope $2$ = y increases by 2 per unit x.",
                evidence: "2",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) $16$ (b) $8$ (c) Rate of change = $2$",
            commonErrors: ["In (a), arithmetic error."],
          },
        },
        {
          id: "m8-u7-lines-best-fit-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem using the line of best fit $y = 4x + 6$.",
          parts: [
            { label: "a", prompt: "Predict y when x = 5", marks: 2 },
            { label: "b", prompt: "What is the y-intercept?", marks: 2 },
            { label: "c", prompt: "What is the slope?", marks: 2 },
            { label: "d", prompt: "If x = 0, what is y?", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) y", answer: 26 },
              { label: "(b) Intercept", answer: 6 },
              { label: "(c) Slope", answer: 4 },
              { label: "(d) y", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Using best fit",
                statement: "Apply equation for predictions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$y = 4(5) + 6 = 26$.",
                working: "26",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Intercept = $6$.",
                working: "6",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Slope = $4$.",
                working: "4",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "$y = 4(0) + 6 = 6$.",
                working: "6",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $26$ (b) $6$ (c) $4$ (d) $6$",
            commonErrors: ["In (d), same as intercept."],
          },
        },
      ],
    },
    {
      id: "m8-u7-scatter-applications",
      title: "Scatter plot applications",
      skill:
        "Apply scatter plot analysis to real-world data and make predictions.",
      lesson: {
        sections: [
          {
            heading: "Real-world examples",
            body: "Scatter plots are used in science (height vs weight), economics (price vs demand), sports (practice time vs performance), and everyday life (hours studied vs grades).",
          },
          {
            heading: "Correlation vs causation",
            body: "Correlation does NOT imply causation. Ice cream sales and drowning deaths both increase in summer (correlation) but neither causes the other; temperature is the confounding variable.",
          },
          {
            heading: "Making predictions",
            body: "Use the line of best fit to predict values within the range of data (interpolation). Extrapolation (predicting outside range) is less reliable.",
          },
        ],
        keyFormulas: [
          {
            name: "Correlation ≠ causation",
            statement: "Relationship doesn't mean cause",
          },
          { name: "Interpolation", statement: "Predict within data range" },
          {
            name: "Extrapolation",
            statement: "Predict outside data range (risky)",
          },
        ],
        workedExample: {
          problem:
            "A scatter plot shows positive correlation between study time and grades. Does this prove studying causes higher grades?",
          solution:
            "No — correlation doesn't prove causation; other factors may be involved.",
        },
      },
      questions: [
        {
          id: "m8-u7-scatter-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Does correlation imply causation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes" },
              { id: "b", text: "No" },
              { id: "c", text: "Sometimes" },
              { id: "d", text: "Only for positive correlation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation vs causation",
                statement: "Relationship ≠ cause.",
              },
            ],
            steps: [
              {
                reasoning: "Correlation does not imply causation.",
                evidence: "no",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** No",
            commonErrors: ["Confusing correlation with causation."],
          },
        },
        {
          id: "m8-u7-scatter-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scatter plot shows positive correlation between ice cream sales and drowning deaths. What explains this?",
          parts: [
            { label: "a", prompt: "Ice cream causes drowning", marks: 1 },
            {
              label: "b",
              prompt: "Temperature is a confounding variable",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confounding variable",
                statement: "Hidden factor affecting both.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "No causal relationship.",
                evidence: "no",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Hot weather increases both ice cream sales and swimming (drowning risk).",
                evidence: "temperature",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) No (b) Temperature is confounding variable",
            commonErrors: ["Assuming correlation = causation."],
          },
        },
        {
          id: "m8-u7-scatter-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For each pair, determine if correlation is likely causal or not.",
          parts: [
            { label: "a", prompt: "Smoking and lung cancer", marks: 1 },
            { label: "b", prompt: "Shoe size and test scores", marks: 1 },
            { label: "c", prompt: "Exercise and fitness", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Causation",
                statement: "One variable causes the other.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Likely causal (established medical evidence).",
                evidence: "causal",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Not causal (no logical link).",
                evidence: "not causal",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Likely causal (exercise improves fitness).",
                evidence: "causal",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Causal (b) Not causal (c) Causal",
            commonErrors: ["Assuming all correlations are causal."],
          },
        },
        {
          id: "m8-u7-scatter-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each scenario.",
          parts: [
            {
              label: "a",
              prompt:
                "A study finds positive correlation between homework time and grades. Is this causal?",
              marks: 2,
            },
            { label: "b", prompt: "What is interpolation?", marks: 2 },
            { label: "c", prompt: "Why is extrapolation risky?", marks: 2 },
            {
              label: "d",
              prompt: "Give an example of a confounding variable.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation vs causation",
                statement: "Relationship ≠ cause.",
              },
              {
                kind: "definition",
                name: "Interpolation/Extrapolation",
                statement: "Predict within/outside range.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Possibly causal, but other factors (ability, motivation) may contribute.",
                evidence: "possibly",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Predicting values within the range of observed data.",
                evidence: "within range",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Predicting outside data range is unreliable; trend may not continue.",
                evidence: "unreliable",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Example: temperature affecting both ice cream sales and drowning.",
                evidence: "temperature",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Possibly causal (b) Predict within range (c) Trend may not continue (d) Temperature example",
            commonErrors: ["Assuming correlation proves causation."],
          },
        },
      ],
    },
  ],
};
