import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "esc10-u4-lesson-4-2",
  code: "4-2",
  title: "Data Handling and Analysis",
  goal: "I CAN process, present and analyse experimental data.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Investigative Skills"],
  vocabulary: [
    { term: "Anomaly", definition: "Result that doesn't fit the pattern — investigate before discarding." },
    { term: "Mean/median/range", definition: "Measures of central tendency and spread for repeated readings." },
    { term: "Uncertainty", definition: "Possible error in measurement — half the smallest division." },
    { term: "Line of best fit", definition: "Trend line through data points — show anomalies, don't force through origin unless justified." },
  ],
  concepts: [
    {
      id: "esc10-u4-data",
      title: "Processing and Presenting Data",
      skill: "Calculate means, identify anomalies and choose appropriate graphs.",
      lesson: {
        sections: [
          { heading: "Averages and spread", body: "**Mean** = sum ÷ count (uses all data, affected by anomalies). **Median** = middle value when ordered (resistant to anomalies). **Mode** = most frequent. **Range** = max − min (spread indicator).\n\n**Uncertainty**: for repeated readings, uncertainty = half the range (max−min)/2 — report as mean ± uncertainty. For single readings, uncertainty = half smallest division. Graph error bars show uncertainty." },
          { heading: "Graphing", body: "**Line graphs**: continuous variables (time, temperature) — plot points, draw best-fit (smooth or straight). **Bar charts**: discrete categories — labelled bars, no connecting lines. **Scatter**: correlation — line of best fit shows trend.\n\n**Axes**: label with quantity + unit; sensible scales (not starting at 0 for line graphs showing change); equal intervals. **Anomalies**: circle them, don't include in line of best fit — but explain or repeat rather than silently discard." },
        ],
        keyFormulas: [
          { name: "Mean ± uncertainty", statement: "Mean of repeats ± half range." },
          { name: "Graph choice", statement: "Line = continuous; bar = categories; scatter = correlation." },
        ],
        workedExample: { problem: "Readings: 10.1, 10.3, 9.8, 10.2 s. Find mean and uncertainty.", solution: "Mean = 10.1 s; range = 0.5, uncertainty = ±0.25 s." },
      },
      questions: [
        {
          id: "esc10-u4-data-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Readings: 5.0, 5.2, 4.8, 5.1, 5.3. Calculate the mean.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 5.08 }] },
          markscheme: { principles: [{ kind: "formula", name: "Mean", statement: "Sum ÷ count = 25.4 ÷ 5 = 5.08." }],
            steps: [{ reasoning: "Sum = 25.4, mean = 5.08.", marks: 2, markCode: "M" }],
            finalAnswer: "5.08", commonErrors: ["Wrong count.", "Rounding error."] },
        },
        {
          id: "esc10-u4-data-q2", difficulty: "core", totalMarks: 3,
          stem: "When should you use a bar chart instead of a line graph?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Graph choice", statement: "Bar = discrete categories; line = continuous variables." }],
            steps: [
              { reasoning: "Categories aren't continuous.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g., comparing metal types, blood groups.", marks: 1, markCode: "AO2" },
              { reasoning: "No meaningful line joining categories.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Bar charts for discrete categories (metal type, blood group); line graphs for continuous data (time, temperature).", commonErrors: ["Either graph always.", "No example."] },
        },
        {
          id: "esc10-u4-data-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A result is 15% higher than all others. Should you discard it? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Anomalies", statement: "Investigate before discarding — repeat if possible." }],
            steps: [
              { reasoning: "Don't discard without investigation.", marks: 1, markCode: "AO3" },
              { reasoning: "Check for error in method/recording.", marks: 1, markCode: "AO3" },
              { reasoning: "Repeat measurement to confirm.", marks: 1, markCode: "AO3" },
              { reasoning: "Only exclude if error identified; otherwise keep with comment.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Investigate cause first; repeat if possible — discard only if procedural error confirmed, otherwise note as anomaly.", commonErrors: ["Automatic discard.", "No investigation step."] },
        },
        {
          id: "esc10-u4-data-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Temperature vs rate data: (20°C, 2), (30°C, 4), (40°C, 8), (50°C, 15), (60°C, 30).",
          parts: [
            { label: "a", prompt: "Describe the trend.", marks: 2 },
            { label: "b", prompt: "Suggest why rate increases non-linearly.", marks: 3 },
            { label: "c", prompt: "Predict rate at 70°C and justify.", marks: 3 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trend analysis", statement: "Rate rises faster than linear — collision theory explanation." }],
            steps: [
              { reasoning: "(a) Rate increases with temperature.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(a) Increase accelerates — curve steepens.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Higher T → faster particles → more collisions.", marks: 1, markCode: "AO2", part: "b" },
              { reasoning: "(b) More collisions exceed activation energy.", marks: 1, markCode: "AO2", part: "b" },
              { reasoning: "(b) Exponential-like increase — more than double per 10°C.", marks: 1, markCode: "AO3", part: "b" },
              { reasoning: "(c) ~50-60+ — continued steep rise (or enzyme denaturation caveat).", marks: 2, markCode: "AO3", part: "c" },
              { reasoning: "(c) Reasoned extrapolation.", marks: 1, markCode: "AO3", part: "c" }],
            finalAnswer: "(a) increasing, accelerating (b) collision frequency+energy (c) ~50+, justified extrapolation", commonErrors: ["Linear assumed.", "No mechanism."] },
        },
      ],
    },
    {
      id: "esc10-u4-evaluation",
      title: "Evaluation and Sources of Error",
      skill: "Identify errors, evaluate methods and suggest improvements.",
      lesson: {
        sections: [
          { heading: "Types of error", body: "**Random**: scatter around true value — reduced by repeats/averaging. **Systematic**: consistent offset — calibration issues, zero errors, parallax. **Gross**: obvious mistakes — misreading, spills.\n\n**Sources**: instrument resolution (ruler ±1mm), human reaction time, parallax (reading scale at angle), environmental (temperature drift, air currents), contamination (dirty apparatus). **Reliability**: repeats give similar results; **validity**: measures what it claims to." },
          { heading: "Evaluating and improving", body: "**Strengths**: controlled variables, appropriate apparatus, repeats, range of values. **Weaknesses**: limited range, single measurements, uncontrolled factors, timing errors.\n\n**Improvements**: more repeats, wider variable range, better instruments (data logger vs manual), insulation, blind/standardised procedures, larger sample size. **Conclusion**: answer the original question — does data support hypothesis? Link trend to scientific theory." },
        ],
        keyFormulas: [
          { name: "Error types", statement: "Random=averaged out; systematic=calibration; gross=mistakes." },
          { name: "Reliability vs validity", statement: "Reliability=consistent; validity=measures intended quantity." },
        ],
        workedExample: { problem: "Burette readings always 0.5 cm³ too high. What error?", solution: "Systematic — calibration/zero error; consistent offset, not random scatter." },
      },
      questions: [
        {
          id: "esc10-u4-evaluation-q1", difficulty: "foundation", totalMarks: 2,
          stem: "All readings are consistently 2 mm too high. What type of error?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gross" },
            { id: "b", text: "Random" },
            { id: "c", text: "Systematic" },
            { id: "d", text: "No error" }
], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Systematic error", statement: "Consistent offset — calibration/zero issues." }],
            steps: [{ reasoning: "Consistent offset = systematic.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Systematic", commonErrors: ["Random assumed — random scatters."] },
        },
        {
          id: "esc10-u4-evaluation-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two ways to improve reliability of an experiment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reliability", statement: "Repeats, standardised procedure, controlled variables." }],
            steps: [
              { reasoning: "Repeat measurements and average.", marks: 1, markCode: "AO3" },
              { reasoning: "Standardise procedure/timing.", marks: 1, markCode: "AO3" },
              { reasoning: "Control variables tightly.", marks: 1, markCode: "AO3" }],
            finalAnswer: "More repeats, standardised method, tighter variable control.", commonErrors: ["Only one way.", "Vague 'be careful'."] },
        },
        {
          id: "esc10-u4-evaluation-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate this method: measuring enzyme rate at only 3 temperatures with single readings.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Evaluation", statement: "Limited range + no repeats = weak reliability." }],
            steps: [
              { reasoning: "Only 3 points — insufficient to show trend.", marks: 1, markCode: "AO3" },
              { reasoning: "Single readings — no check on anomalies.", marks: 1, markCode: "AO3" },
              { reasoning: "Suggest more temperatures + repeats.", marks: 1, markCode: "AO3" },
              { reasoning: "Overall: valid idea, weak execution.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Weak: too few points, no repeats — add more temperatures and repeat each measurement.", commonErrors: ["All positive view.", "No specific improvements."] },
        },
        {
          id: "esc10-u4-evaluation-q4", difficulty: "challenge", totalMarks: 8,
          stem: "An experiment on photosynthesis vs light intensity used a lamp at fixed distance but moving the plant.",
          parts: [
            { label: "a", prompt: "Identify the flaw in this method.", marks: 3 },
            { label: "b", prompt: "Suggest two improvements.", marks: 3 },
            { label: "c", prompt: "Explain why the variable wasn't properly controlled.", marks: 2 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Variable control", statement: "Moving plant changes light intensity AND distance/angle — confounded." }],
            steps: [
              { reasoning: "(a) Moving plant changes distance = light intensity changes unintentionally? OR lamp fixed but plant moved = confounded variables.", marks: 2, markCode: "AO3", part: "a" },
              { reasoning: "(a) Distance and position both affect light received.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Two improvements: fixed plant position + vary lamp distance; or use ND filters.", marks: 2, markCode: "AO3", part: "b" },
              { reasoning: "(b) Or: keep distance constant, vary bulb power.", marks: 1, markCode: "AO3", part: "b" },
              { reasoning: "(c) Independent variable (light intensity) wasn't isolated — distance/angle also varied.", marks: 2, markCode: "AO2", part: "c" }],
            finalAnswer: "(a) moving plant confounds distance/angle with intensity (b) fix plant, vary lamp distance (c) variable not isolated", commonErrors: ["No flaw found.", "Vague improvements."] },
        },
      ],
    },
  ],
};
