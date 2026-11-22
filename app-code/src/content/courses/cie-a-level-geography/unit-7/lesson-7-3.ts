import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ciealegeo-u7-lesson-7-3",
  code: "7-3",
  title: "Fieldwork Techniques and Practical Skills",
  goal: "I CAN plan and conduct fieldwork, use equipment and analyse field data.",
  standards: ["Cambridge A Level Geography 9696", "Unit 7: fieldwork skills"],
  vocabulary: [
    {
      term: "Fieldwork",
      definition: "Data collection in real-world settings.",
    },
    { term: "Transect", definition: "Line along which data is collected." },
    {
      term: "Sampling strategy",
      definition: "Systematic selection of study points.",
    },
    { term: "GPS", definition: "Global Positioning System for location." },
    {
      term: "Abney level",
      definition: "Handheld instrument for slope measurement.",
    },
    { term: "Quadrat", definition: "Frame for sampling vegetation/soil." },
  ],
  concepts: [
    {
      id: "ciealegeo-u7l3-c1-planning",
      title: "Fieldwork planning and equipment",
      skill: "Plan fieldwork investigations and use appropriate equipment.",
      lesson: {
        sections: [
          {
            heading: "Fieldwork planning",
            body: "**Risk assessment**: identify hazards, mitigation. **Permissions**: access to sites. **Equipment**: check functionality, spare batteries. **Timing**: weather, tides, traffic patterns. **Sampling design**: systematic (transects, grids) vs random — choose for representativeness.",
          },
          {
            heading: "Equipment and measurement",
            body: "**GPS**: location, elevation, tracking. **Abney level**: slope angles (clinometer). **Quadrat**: vegetation/soil sampling. **Soil kit**: texture, pH, moisture. **Flow meter**: river discharge. **Camera**: photographic evidence. **Compass**: direction/orientation.",
          },
        ],
        keyFormulas: [
          { name: "Transect", statement: "Systematic line sampling" },
          { name: "Quadrat", statement: "Fixed-area sampling" },
          { name: "Risk assessment", statement: "Hazard identification" },
        ],
        workedExample: {
          problem:
            "Investigate how footfall changes with distance from a supermarket.",
          solution:
            "Plan: transect from store outward, count pedestrians every 50m at peak time; GPS each point; risk assessment (traffic); repeat 3 days for reliability.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u7l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'transect' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A line along which data is collected" },
              { id: "b", text: "A map" },
              { id: "c", text: "A graph" },
              { id: "d", text: "A random sample" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transect",
                statement: "Line sampling.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Line sampling",
            commonErrors: ["Random."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'quadrat' used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quadrat",
                statement: "Area sampling.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fixed-area frame for sampling vegetation (species, cover) or soil — placed systematically or randomly for representative data.",
            commonErrors: ["GPS confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'risk assessment' is essential in fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Risk assessment",
                statement: "Safety first.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identify hazards (traffic, water, weather, strangers) and mitigation before fieldwork — prevents accidents, ensures legal compliance, protects participants.",
            commonErrors: ["Optional."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare systematic vs random sampling in fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Sampling",
                statement: "Systematic vs random.",
              },
            ],
            steps: [
              { reasoning: "Systematic defined.", marks: 1, markCode: "M" },
              { reasoning: "Random defined.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Systematic: regular intervals (transects, grids) — good for gradients/lines. Random: avoids bias but may cluster — good for uniform areas; often combined.",
            commonErrors: ["Same method."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the reliability of fieldwork data collection methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reliability",
                statement: "Repeatability.",
              },
            ],
            steps: [
              { reasoning: "Factors.", marks: 1, markCode: "M" },
              { reasoning: "Improvements.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weather, timing, observer bias, sample size affect reliability — improve via repeats, standardised methods, larger samples, consistent timing; acknowledge limitations.",
            commonErrors: ["Perfect data."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'Abney level' used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abney level",
                statement: "Slope measurement.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Handheld clinometer for measuring slope angles — used in geomorphology fieldwork to relate slope to processes (erosion, deposition).",
            commonErrors: ["GPS confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GPS in fieldwork provides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Location and elevation data" },
              { id: "b", text: "Soil samples" },
              { id: "c", text: "Population counts" },
              { id: "d", text: "Weather forecasts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "GPS", statement: "Location." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Location",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons for repeating fieldwork measurements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Repetition", statement: "Reliability." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. improves reliability (averages out anomalies) and allows comparison over time (weather, day-of-week effects) — also tests consistency.",
            commonErrors: ["Waste of time."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'weather' affect fieldwork data collection?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weather impact",
                statement: "Conditions change.",
              },
            ],
            steps: [
              { reasoning: "Effects.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Mitigation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rain affects footfall, river levels, visibility; wind affects measurements; extreme weather unsafe — record conditions, repeat on similar days, acknowledge in analysis.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'remote sensing' vs 'fieldwork' for geographical data collection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data methods",
                statement: "Remote vs field.",
              },
            ],
            steps: [
              { reasoning: "Remote strengths.", marks: 1, markCode: "M" },
              { reasoning: "Fieldwork strengths.", marks: 1, markCode: "M" },
              { reasoning: "Complementarity.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Remote sensing: wide coverage, frequent, safe — but coarse resolution, can't capture ground detail. Fieldwork: detailed, ground-truthed — but limited coverage, time-consuming; best combined.",
            commonErrors: ["One replaces other."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'Abney level' is used to measure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "River discharge" },
              { id: "b", text: "Wind speed" },
              { id: "c", text: "Slope angle" },
              { id: "d", text: "Soil pH" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abney level",
                statement: "Slope.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Slope angle",
            commonErrors: ["Other instrument confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'permissions' are needed before fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permissions",
                statement: "Access + ethics.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Access to private land, schools or protected sites requires consent — ensures legal compliance, safety, and ethical treatment of people/property; without permission fieldwork may be invalid or unlawful.",
            commonErrors: ["Optional step."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equipment is most appropriate for measuring soil pH?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abney level" },
              { id: "b", text: "Flow meter" },
              { id: "c", text: "Compass" },
              { id: "d", text: "Soil testing kit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equipment choice",
                statement: "Match measure.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Soil testing kit",
            commonErrors: ["Wrong instrument."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'timing' is important when collecting pedestrian footfall data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timing",
                statement: "Conditions vary.",
              },
            ],
            steps: [
              { reasoning: "Variation sources.", marks: 1, markCode: "M" },
              { reasoning: "Comparability need.", marks: 1, markCode: "M" },
              { reasoning: "Practical control.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Footfall varies by time of day, day of week and weather — inconsistent timing makes counts incomparable; standardise counting periods (e.g. same hour, multiple days) and record conditions to ensure reliable results.",
            commonErrors: ["Any time is fine."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the advantages of combining GPS with systematic sampling in fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GPS + sampling",
                statement: "Location + pattern.",
              },
            ],
            steps: [
              { reasoning: "GPS benefits.", marks: 1, markCode: "M" },
              { reasoning: "Sampling benefits.", marks: 1, markCode: "M" },
              { reasoning: "Combined value.", marks: 1, markCode: "A" },
              { reasoning: "Limitations.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GPS gives accurate locations enabling mapping and repeat visits; systematic sampling gives regular coverage along transects — together they produce spatially referenced, comparable data; but equipment cost, signal issues and planning time remain constraints.",
            commonErrors: ["Either/or assumed."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c1-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'flow meter' is used to measure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind direction" },
              { id: "b", text: "Soil moisture only" },
              { id: "c", text: "River discharge" },
              { id: "d", text: "Slope angle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flow meter",
                statement: "Discharge.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** River discharge",
            commonErrors: ["Other instrument confused."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u7l3-c2-analysis",
      title: "Field data analysis and presentation",
      skill: "Analyse fieldwork data, present results and draw conclusions.",
      lesson: {
        sections: [
          {
            heading: "Data analysis",
            body: "**Tabulation**: organise raw data clearly. **Graphs**: scatter (correlation), line (change over time), bar (comparison). **Statistics**: mean, median, standard deviation, correlation coefficient. **Maps**: distribution, spatial patterns, interpolation.",
          },
          {
            heading: "Presentation and conclusions",
            body: "**Fieldwork report**: aim, method, results, analysis, conclusion, evaluation. **Visuals**: clear labels, titles, legends, units. **Conclusions**: relate findings to hypothesis — supported/partially/not supported. **Evaluation**: reliability, validity, limitations, improvements.",
          },
        ],
        keyFormulas: [
          { name: "Scatter graph", statement: "Correlation between variables" },
          { name: "Correlation coefficient", statement: "-1 to +1" },
          {
            name: "Fieldwork report",
            statement: "Aim→method→results→conclusion→evaluation",
          },
        ],
        workedExample: {
          problem:
            "Analyse footfall data collected at 10 distances from supermarket.",
          solution:
            "Plot scatter graph (distance vs footfall) → negative correlation → calculate r → describe trend → conclude hypothesis supported → evaluate sampling/weather limitations.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u7l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatter graph is used to show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparison of categories" },
              { id: "b", text: "Relationship between two variables" },
              { id: "c", text: "Change over time" },
              { id: "d", text: "Distribution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Scatter", statement: "Two variables." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Two variables",
            commonErrors: ["Line graph."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a correlation coefficient of +0.9 indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation",
                statement: "Strong positive.",
              },
            ],
            steps: [
              { reasoning: "Interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Range.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strong positive correlation — as one variable increases, the other increases almost proportionally (range -1 to +1).",
            commonErrors: ["Negative."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the importance of 'evaluation' in fieldwork reports.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Reliability check.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Aspects.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Assess reliability/validity — weather effects, sample size, timing bias; acknowledge limitations and suggest improvements — shows critical thinking.",
            commonErrors: ["Skip it."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the structure of a fieldwork report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Report structure",
                statement: "Standard sections.",
              },
            ],
            steps: [
              { reasoning: "Sections listed.", marks: 1, markCode: "M" },
              { reasoning: "Each described.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "Aim/hypothesis → methodology (equipment, sampling) → results (tables, graphs) → analysis (patterns, correlations) → conclusion (hypothesis tested) → evaluation (limitations).",
            commonErrors: ["Missing sections."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate how fieldwork data should be presented for maximum clarity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data presentation",
                statement: "Clarity + accuracy.",
              },
            ],
            steps: [
              { reasoning: "Visual standards.", marks: 1, markCode: "M" },
              { reasoning: "Statistical tools.", marks: 1, markCode: "M" },
              { reasoning: "Common errors.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Clear labels, titles, units, appropriate graph types; avoid truncated axes, 3D effects, excessive categories; statistics support but don't replace visual clarity.",
            commonErrors: ["Any format."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'interpolation' on a map?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interpolation",
                statement: "Estimating between points.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Estimating values between known data points — e.g. isopleth maps showing continuous distribution (temperature, rainfall) from point data.",
            commonErrors: ["Extrapolation."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A line graph is best for showing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change over time" },
              { id: "b", text: "Distribution" },
              { id: "c", text: "Correlation" },
              { id: "d", text: "Comparison of categories" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Line graph", statement: "Time series." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Change over time",
            commonErrors: ["Scatter."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why 'conclusions' must relate to the hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conclusion",
                statement: "Test hypothesis.",
              },
            ],
            steps: [
              { reasoning: "Reason one.", marks: 1, markCode: "M" },
              { reasoning: "Reason two.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Enquiry is hypothesis-driven — conclusion must state whether data supports/rejects it; e.g. 'footfall decreases with distance — hypothesis supported' vs unsupported.",
            commonErrors: ["Any conclusion."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'standard deviation' be useful in fieldwork analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Std dev",
                statement: "Data spread.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Measures spread around mean — high SD = inconsistent data (unreliable); low SD = consistent (reliable) — e.g. footfall counts varying widely suggests timing bias.",
            commonErrors: ["Mean confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the difference between 'primary' and 'secondary' data presentation in fieldwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data presentation",
                statement: "Source matters.",
              },
            ],
            steps: [
              { reasoning: "Primary presentation.", marks: 1, markCode: "M" },
              { reasoning: "Secondary presentation.", marks: 1, markCode: "M" },
              { reasoning: "Integration.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primary data: collected, raw, needs processing, full control; secondary: existing, pre-processed, may need adaptation — best fieldwork combines both, acknowledging sources.",
            commonErrors: ["Same handling."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'median' of a data set is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The middle value when data is ordered" },
              { id: "b", text: "The sum divided by the count" },
              { id: "c", text: "The most frequent value" },
              { id: "d", text: "The largest value" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Median",
                statement: "Middle value.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Middle value",
            commonErrors: ["Mean confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a 'line graph' differs from a 'scatter graph'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Graph types",
                statement: "Time vs relationship.",
              },
            ],
            steps: [
              { reasoning: "Line graph use.", marks: 1, markCode: "M" },
              { reasoning: "Scatter graph use.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Line graph shows change over time with a continuous axis (e.g. discharge over 24h); scatter graph plots paired values to reveal correlation between two variables (e.g. distance vs footfall).",
            commonErrors: ["Same purpose assumed."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A correlation coefficient of -0.8 indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A perfect positive correlation" },
              { id: "b", text: "No relationship" },
              { id: "c", text: "A strong negative correlation" },
              { id: "d", text: "A weak positive correlation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation",
                statement: "-1 to +1.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Strong negative correlation",
            commonErrors: ["Sign misread."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what a 'valid' conclusion in a fieldwork report should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conclusion",
                statement: "Answers the question.",
              },
            ],
            steps: [
              { reasoning: "Hypothesis link.", marks: 1, markCode: "M" },
              { reasoning: "Evidence reference.", marks: 1, markCode: "M" },
              { reasoning: "Nuance.", marks: 1, markCode: "M" },
              { reasoning: "Limitation noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "State whether data supports the hypothesis (supported/partially/not), refer to specific results (e.g. correlation value, trend), acknowledge anomalies or partial support, and note confidence given limitations.",
            commonErrors: ["Restate method only."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of GIS in presenting fieldwork data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GIS",
                statement: "Spatial analysis.",
              },
            ],
            steps: [
              { reasoning: "GIS strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Fieldwork link.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GIS layers field data onto maps revealing spatial patterns (e.g. footfall vs distance, land use) and enables analysis like buffers/interpolation; but requires data input, skills and can over-simplify local detail — powerful complement to, not replacement for, fieldwork.",
            commonErrors: ["GIS replaces fieldwork."],
          },
        },
        {
          id: "ciealegeo-q-u7l3c2-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'bar chart' is best used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show distribution" },
              { id: "b", text: "Show continuous change over time" },
              { id: "c", text: "Compare categories" },
              { id: "d", text: "Reveal correlation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Bar chart",
                statement: "Categories.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Compare categories",
            commonErrors: ["Line graph confused."],
          },
        },
      ],
    },
  ],
};
