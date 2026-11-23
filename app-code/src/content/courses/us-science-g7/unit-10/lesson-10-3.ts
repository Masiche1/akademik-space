import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "s7-u10-lesson-10-3",
  code: "10-3",
  title: "Scientific Investigation and Data Analysis",
  goal: "I CAN design investigations, analyze data, construct explanations, and communicate scientific findings.",
  standards: [
    "SEP: Asking Questions",
    "SEP: Planning and Carrying Out Investigations",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Investigation",
      definition: "A systematic study to answer a scientific question.",
    },
    {
      term: "Hypothesis",
      definition:
        "A testable prediction based on observations and prior knowledge.",
    },
    {
      term: "Variable",
      definition: "A factor that can change in an experiment.",
    },
    {
      term: "Independent variable",
      definition: "The variable deliberately changed by the investigator.",
    },
    {
      term: "Dependent variable",
      definition: "The variable measured in response to changes.",
    },
    {
      term: "Control",
      definition: "A group or condition used for comparison.",
    },
    {
      term: "Data",
      definition: "Information collected during an investigation.",
    },
  ],
  concepts: [
    {
      id: "s7-u10-investigation-design",
      title: "Designing investigations",
      skill: "Design fair tests with variables, controls and procedures.",
      lesson: {
        sections: [
          {
            heading: "Steps of investigation",
            body: "A scientific investigation follows these steps:\n\n1. **Ask a question**: What do you want to find out?\n2. **Research**: What is already known?\n3. **Hypothesis**: Make a testable prediction.\n4. **Design experiment**: Plan variables, controls and procedure.\n5. **Conduct experiment**: Collect data carefully.\n6. **Analyze data**: Look for patterns.\n7. **Draw conclusions**: Does data support hypothesis?\n8. **Communicate**: Share findings.",
          },
          {
            heading: "Variables and controls",
            body: "- **Independent variable**: what you change (e.g., amount of fertilizer).\n- **Dependent variable**: what you measure (e.g., plant height).\n- **Controlled variables**: kept the same (e.g., light, water, soil type).\n- **Control group**: baseline for comparison (e.g., plants with no fertilizer).\n\nA **fair test** changes only the independent variable while keeping others constant.",
          },
        ],
        keyFormulas: [
          {
            name: "Investigation steps",
            statement:
              "Question → research → hypothesis → design → experiment → analyze → conclude → communicate.",
          },
          { name: "Independent variable", statement: "Deliberately changed." },
          { name: "Dependent variable", statement: "Measured response." },
          {
            name: "Fair test",
            statement: "Only independent variable changes; others controlled.",
          },
        ],
        workedExample: {
          problem: "Test how light affects plant growth.",
          solution:
            "Independent variable: light amount. Dependent: plant height. Controlled: water, soil, temperature. Control: plants in normal light.",
        },
      },
      questions: [
        {
          id: "s7-u10-invest-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A proven fact" },
              { id: "b", text: "A testable prediction" },
              { id: "c", text: "A type of data" },
              { id: "d", text: "A research paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Testable prediction based on observations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A hypothesis is a testable prediction, not a proven fact.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A testable prediction.",
            commonErrors: ["Thinking hypothesis = fact."],
          },
        },
        {
          id: "s7-u10-invest-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between independent and dependent variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variables",
                statement: "Independent = changed; dependent = measured.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Independent variable: deliberately changed by investigator.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Dependent variable: measured in response to the change.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Example: fertilizer amount (independent) → plant height (dependent).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Independent = changed; dependent = measured response.",
            commonErrors: ["Confusing the two variables."],
          },
        },
        {
          id: "s7-u10-invest-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is a control group important in an experiment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Control group",
                statement:
                  "Baseline for comparison; isolates the effect of independent variable.",
              },
            ],
            steps: [
              {
                reasoning: "Control group doesn't receive the treatment.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "It provides a baseline to compare results against.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This isolates the effect of the independent variable.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without a control, you can't tell if results are due to the variable or other factors.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Control provides baseline; isolates effect of independent variable.",
            commonErrors: ["Saying control group receives treatment."],
          },
        },
        {
          id: "s7-u10-invest-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an investigation to test whether salt affects the boiling point of water.",
          parts: [
            { label: "a", prompt: "What is your hypothesis?", marks: 2 },
            {
              label: "b",
              prompt: "What is the independent variable?",
              marks: 2,
            },
            { label: "c", prompt: "What is the dependent variable?", marks: 2 },
            {
              label: "d",
              prompt: "What variables will you control?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Investigation design",
                statement: "Hypothesis, variables, controls.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Adding salt will raise the boiling point of water.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Amount of salt added (or presence/absence of salt).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Boiling point temperature (measured with thermometer).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Amount of water, heating rate, same pot, same thermometer, same starting temperature.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Salt raises boiling point (b) Salt amount (c) Boiling temperature (d) Water amount, heating, equipment.",
            commonErrors: ["Not controlling other variables."],
          },
        },
      ],
    },
    {
      id: "s7-u10-data-analysis",
      title: "Data Analysis and Interpretation",
      skill:
        "Analyze experimental data, identify patterns, and draw conclusions.",
      lesson: {
        sections: [
          {
            heading: "Types of data",
            body: "Data can be:\n\n- **Quantitative**: numerical (measurements, counts).\n- **Qualitative**: descriptive (colors, observations).\n\nData is often presented in **tables**, **graphs** (bar, line, scatter) and **diagrams**.",
          },
          {
            heading: "Analyzing data",
            body: "To analyze data:\n\n- Look for **patterns** and **trends**.\n- Calculate **averages** (mean, median, mode).\n- Compare **groups** and **conditions**.\n- Identify **outliers** (unusual values).\n- Determine if results are **reliable** (repeatable).",
          },
        ],
        keyFormulas: [
          {
            name: "Quantitative vs qualitative",
            statement: "Numerical vs descriptive.",
          },
          { name: "Data presentation", statement: "Tables, graphs, diagrams." },
          {
            name: "Analysis steps",
            statement:
              "Patterns → averages → comparisons → outliers → reliability.",
          },
        ],
        workedExample: {
          problem:
            "Plant heights with different fertilizers: 10, 12, 15, 18, 20 cm.",
          solution:
            "Mean = 15 cm. Heights increase with more fertilizer — positive correlation. All values are within reasonable range.",
        },
      },
      questions: [
        {
          id: "s7-u10-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is quantitative data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Descriptive observations" },
              { id: "b", text: "Numerical measurements" },
              { id: "c", text: "Opinions" },
              { id: "d", text: "Predictions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative data",
                statement: "Numerical measurements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quantitative data is numerical (measurements, counts).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Numerical measurements.",
            commonErrors: ["Choosing (a): that's qualitative."],
          },
        },
        {
          id: "s7-u10-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are three ways to present data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data presentation",
                statement: "Tables, graphs, diagrams.",
              },
            ],
            steps: [
              {
                reasoning: "Tables: organized rows and columns.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Graphs: bar, line, scatter plots show trends.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Diagrams: drawings or images showing observations.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Tables, graphs, diagrams.",
            commonErrors: ["Listing only one method."],
          },
        },
        {
          id: "s7-u10-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures plant growth: 10, 12, 11, 25, 13 cm. How should they analyze this data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Data analysis",
                statement:
                  "Identify outliers, calculate averages, look for patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify the outlier: 25 cm is much higher than others.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Calculate mean without outlier: (10+12+11+13)/4 = 11.5 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investigate why the outlier occurred (error, different conditions).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Report both with and without outlier; discuss reliability.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Identify 25 as outlier; mean ~11.5 cm without it; investigate cause.",
            commonErrors: ["Including outlier without comment."],
          },
        },
        {
          id: "s7-u10-data-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An experiment tests three fertilizers on bean plants.",
          parts: [
            {
              label: "a",
              prompt:
                "Heights (cm): Fertilizer A: 15, 16, 14. B: 20, 22, 21. C: 10, 11, 9.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the mean height for each fertilizer.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Which fertilizer produced the tallest plants?",
              marks: 2,
            },
            { label: "d", prompt: "What conclusion can you draw?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Data analysis",
                statement: "Calculate means, compare groups, draw conclusions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Data shows B > A > C in height.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "A: 15 cm, B: 21 cm, C: 10 cm.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Fertilizer B produced tallest plants (mean 21 cm).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Fertilizer B is most effective for bean growth among those tested.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) B>A>C (b) A=15, B=21, C=10 (c) B (d) B most effective.",
            commonErrors: ["Not calculating means correctly."],
          },
        },
      ],
    },
    {
      id: "s7-u10-communication",
      title: "Communicating Scientific Findings",
      skill:
        "Communicate scientific findings clearly using evidence, reasoning and appropriate formats.",
      lesson: {
        sections: [
          {
            heading: "Scientific communication",
            body: "Scientists communicate findings through:\n\n- **Lab reports**: question, hypothesis, methods, data, conclusions.\n- **Presentations**: oral or visual summaries.\n- **Scientific papers**: detailed written reports for experts.\n- **Posters and models**: visual displays.\n\nEffective communication requires clear organization, accurate data presentation, and evidence-based conclusions.",
          },
          {
            heading: "Elements of good communication",
            body: "- **Clear question**: what was investigated.\n- **Accurate methods**: how data was collected.\n- **Honest data**: all results reported, including outliers.\n- **Evidence-based conclusions**: conclusions supported by data.\n- **Acknowledgment of limitations**: what the study couldn't determine.",
          },
        ],
        keyFormulas: [
          {
            name: "Communication formats",
            statement: "Lab reports, presentations, papers, posters.",
          },
          {
            name: "Good communication",
            statement:
              "Clear question, accurate methods, honest data, evidence-based conclusions.",
          },
          {
            name: "Limitation",
            statement: "What the study couldn't determine.",
          },
        ],
        workedExample: {
          problem:
            "How should you report an experiment where results were unexpected?",
          solution:
            "Report all data honestly, discuss possible explanations, acknowledge limitations, and suggest further research.",
        },
      },
      questions: [
        {
          id: "s7-u10-comm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of scientific communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To hide results" },
              { id: "b", text: "To share findings with others" },
              { id: "c", text: "To avoid peer review" },
              { id: "d", text: "To make science secret" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Scientific communication",
                statement: "Share findings with the scientific community.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Scientific communication shares findings so others can learn, verify and build on them.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** To share findings with others.",
            commonErrors: ["Thinking science is secret."],
          },
        },
        {
          id: "s7-u10-comm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What elements should a good lab report include?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lab report",
                statement: "Question, hypothesis, methods, data, conclusions.",
              },
            ],
            steps: [
              {
                reasoning: "Question and hypothesis.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Methods and materials used.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Data, analysis and conclusions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Question, hypothesis, methods, data, conclusions.",
            commonErrors: ["Missing methods or conclusions."],
          },
        },
        {
          id: "s7-u10-comm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important to report all data, including outliers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Honest reporting",
                statement: "All data reported for transparency and accuracy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Outliers may reveal errors or unexpected phenomena.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Hiding outliers misrepresents results.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Others need all data to verify and build on findings.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Honest reporting maintains scientific integrity.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Outliers may be meaningful; hiding them is dishonest and misleading.",
            commonErrors: ["Saying outliers should be deleted."],
          },
        },
        {
          id: "s7-u10-comm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a conclusion for an experiment testing whether plants grow better with fertilizer.",
          parts: [
            { label: "a", prompt: "What was the hypothesis?", marks: 2 },
            { label: "b", prompt: "What did the data show?", marks: 2 },
            {
              label: "c",
              prompt: "Does the data support the hypothesis?",
              marks: 2,
            },
            { label: "d", prompt: "What are the limitations?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Scientific conclusion",
                statement: "Evidence-based, acknowledges limitations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Fertilized plants will grow taller than unfertilized.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Fertilized plants averaged X cm; controls averaged Y cm (data dependent).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Yes/no — data supports or doesn't support hypothesis.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Short duration, one plant type, specific conditions — may not generalize.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Hypothesis (b) Data summary (c) Supported/not (d) Limitations acknowledged.",
            commonErrors: ["Conclusion not supported by data."],
          },
        },
      ],
    },
  ],
};
