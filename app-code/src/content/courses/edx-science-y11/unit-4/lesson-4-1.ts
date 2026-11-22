import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "esc11-u4-lesson-4-1",
  code: "4-1",
  title: "Advanced Investigation Design",
  goal: "I CAN design rigorous investigations with appropriate methods and controls.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Investigative Skills (Y11)"],
  vocabulary: [
    { term: "Placebo/control group", definition: "Untreated comparison — isolates treatment effect." },
    { term: "Blinding", definition: "Hiding treatment from participants/observers — reduces bias." },
    { term: "Standardisation", definition: "Identical conditions across trials — ensures comparability." },
    { term: "Pilot study", definition: "Small-scale trial to refine method before full investigation." },
  ],
  concepts: [
    {
      id: "esc11-u4-design",
      title: "Rigorous Experimental Design",
      skill: "Design controlled experiments with blinding, controls and pilot studies.",
      lesson: {
        sections: [
          { heading: "Control groups and blinding", body: "**Control group**: untreated/comparison sample — isolates the effect of the variable. **Placebo**: inactive substitute — tests psychological effects (drug trials). **Blinding**: single-blind (participant doesn't know treatment) or double-blind (neither participant nor observer) — reduces expectation bias.\n\n**Standardisation**: identical conditions — same time of day, temperature, instructions, equipment. **Pilot study**: small test run — identifies problems, refines ranges, estimates timing before committing resources." },
          { heading: "Sampling and ethics", body: "**Random sampling**: every member of population has equal chance — avoids bias. **Stratified**: sample proportionally from subgroups. **Sample size**: larger = more representative; too small = unreliable.\n\n**Ethics**: informed consent (participants know risks), right to withdraw, confidentiality, no harm. **Human trials**: declare conflicts, peer review. **Animal studies**: 3Rs — Replacement (alternatives), Reduction (fewer animals), Refinement (minimise suffering)." },
        ],
        keyFormulas: [
          { name: "Control group", statement: "Untreated comparison — isolates variable effect." },
          { name: "Blinding", statement: "Hides treatment — reduces bias in results." },
        ],
        workedExample: { problem: "Testing a new fertiliser on plant growth. Design the controls.", solution: "Control group: no fertiliser; same species/soil/light; random placement; measure height weekly." },
      },
      questions: [
        {
          id: "esc11-u4-design-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is the purpose of a control group?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To speed up the experiment" },
            { id: "b", text: "To test multiple variables" },
            { id: "c", text: "To increase sample size" },
            { id: "d", text: "To compare against treated group" }
], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Control group", statement: "Untreated comparison — isolates treatment effect." }],
            steps: [{ reasoning: "Control = untreated comparison.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(d)** Compare against treated", commonErrors: ["Speed assumed."] },
        },
        {
          id: "esc11-u4-design-q2", difficulty: "core", totalMarks: 3,
          stem: "Explain why double-blinding is used in drug trials.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Double-blinding", statement: "Neither participant nor observer knows treatment — prevents bias." }],
            steps: [
              { reasoning: "Participant bias: expectation of effect.", marks: 1, markCode: "AO2" },
              { reasoning: "Observer bias: interpreting results favorably.", marks: 1, markCode: "AO2" },
              { reasoning: "Both hidden → objective results.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Neither participant nor observer knows treatment — prevents expectation and interpretation bias.", commonErrors: ["Only participant mentioned.", "No bias mechanism."] },
        },
        {
          id: "esc11-u4-design-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A student tests fertiliser on 10 plants but puts all fertilised plants near the window. Critique this.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Confounding variables", statement: "Light exposure differs — can't isolate fertiliser effect." }],
            steps: [
              { reasoning: "Window plants get more light.", marks: 1, markCode: "AO2" },
              { reasoning: "Light affects growth — confounds fertiliser.", marks: 1, markCode: "AO2" },
              { reasoning: "Randomise placement across light conditions.", marks: 1, markCode: "AO3" },
              { reasoning: "Or rotate positions periodically.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Light confounds fertiliser — randomise plant positions or rotate to equalise light exposure.", commonErrors: ["No flaw identified.", "Vague fix."] },
        },
        {
          id: "esc11-u4-design-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Design an investigation: does a new drug reduce blood pressure?",
          parts: [
            { label: "a", prompt: "State the control group and why.", marks: 3 },
            { label: "b", prompt: "Describe blinding procedures.", marks: 3 },
            { label: "c", prompt: "Identify two ethical requirements.", marks: 2 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Drug trial design", statement: "Control + blinding + ethics = valid trial." }],
            steps: [
              { reasoning: "(a) Control: placebo or standard treatment — isolates drug effect.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Same conditions, random assignment.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(b) Double-blind: neither patient nor researcher knows treatment.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Placebo identical appearance.", marks: 1, markCode: "AO2", part: "b" },
              { reasoning: "(c) Informed consent + right to withdraw.", marks: 2, markCode: "AO4", part: "c" }],
            finalAnswer: "(a) placebo control, randomised (b) double-blind identical pills (c) consent, withdrawal right", commonErrors: ["No blinding.", "Missing ethics."] },
        },
      ],
    },
    {
      id: "esc11-u4-analysis",
      title: "Statistical Analysis of Results",
      skill: "Apply statistical tests and interpret data critically.",
      lesson: {
        sections: [
          { heading: "Descriptive statistics", body: "**Mean, median, mode**: central tendency. **Range, standard deviation, interquartile range**: spread. **Standard deviation**: average distance from mean — small SD = consistent data.\n\n**Correlation vs causation**: correlation shows relationship but doesn't prove cause — confounding variables possible. **Outliers**: extreme values — investigate before discarding. **Sample representativeness**: does sample reflect population?" },
          { heading: "Presenting conclusions", body: "**Graphs**: appropriate choice (line/bar/scatter), labelled axes with units, error bars for uncertainty, line of best fit through points (not forced). **Tables**: clear headings, units, consistent decimal places.\n\n**Conclusion structure**: state finding → link to hypothesis → explain mechanism → acknowledge limitations → suggest further work. **Evaluation**: strengths (controls, repeats, range) and weaknesses (sample size, uncontrolled factors, systematic errors)." },
        ],
        keyFormulas: [
          { name: "Standard deviation", statement: "Average distance from mean — measures spread." },
          { name: "Correlation", statement: "Relationship ≠ causation — check confounding variables." },
        ],
        workedExample: { problem: "Two datasets: mean 10±0.5 vs mean 10±3. Which is more reliable?", solution: "First — smaller spread (SD) means more consistent, reliable measurements." },
      },
      questions: [
        {
          id: "esc11-u4-analysis-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What does a small standard deviation indicate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Small spread" },
            { id: "b", text: "More anomalies" },
            { id: "c", text: "Large spread" },
            { id: "d", text: "High mean" }
], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Standard deviation", statement: "Small SD = data clustered tightly around mean." }],
            steps: [{ reasoning: "Small SD = small spread.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(a)** Small spread", commonErrors: ["Large spread confused."] },
        },
        {
          id: "esc11-u4-analysis-q2", difficulty: "core", totalMarks: 3,
          stem: "Why can't correlation prove causation?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correlation vs causation", statement: "Third variable may cause both — need controlled experiment." }],
            steps: [
              { reasoning: "Third variable may link both.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g., ice cream sales and drowning both rise in summer.", marks: 1, markCode: "AO2" },
              { reasoning: "Need controlled experiment to establish cause.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Third variable may cause both — only controlled experiment isolates the causal relationship.", commonErrors: ["Correlation always proves.", "No example."] },
        },
        {
          id: "esc11-u4-analysis-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Two experiments: 10 readings each, SD = 0.5 vs SD = 2.0. Which is more reliable and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reliability", statement: "Lower SD = more consistent = more reliable." }],
            steps: [
              { reasoning: "SD 0.5 dataset more consistent.", marks: 1, markCode: "AO2" },
              { reasoning: "SD 2.0 has more scatter — less reliable.", marks: 1, markCode: "AO2" },
              { reasoning: "Consistency indicates precision.", marks: 1, markCode: "AO2" },
              { reasoning: "Mean alone doesn't indicate reliability.", marks: 1, markCode: "AO3" }],
            finalAnswer: "SD 0.5 more reliable — tighter clustering means more precise, consistent measurements.", commonErrors: ["Higher SD better.", "Mean compared instead."] },
        },
        {
          id: "esc11-u4-analysis-q4", difficulty: "challenge", totalMarks: 8,
          stem: "A study finds students who drink coffee score higher on tests. Evaluate whether coffee improves grades.",
          parts: [
            { label: "a", prompt: "Identify the correlation and possible confounders.", marks: 4 },
            { label: "b", prompt: "Suggest a controlled experiment to test causation.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correlation study", statement: "Observational ≠ causal — confounders possible." }],
            steps: [
              { reasoning: "(a) Positive correlation: coffee drinkers score higher.", marks: 1, markCode: "AO2", part: "a" },
              { reasoning: "(a) Confounders: socio-economic status, study habits, sleep.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Coffee drinkers may differ in other ways.", marks: 1, markCode: "AO3", part: "a" },
              { reasoning: "(b) Randomised controlled trial: coffee vs placebo groups.", marks: 2, markCode: "AO3", part: "b" },
              { reasoning: "(b) Same conditions, measure test scores, control confounders.", marks: 2, markCode: "AO3", part: "b" }],
            finalAnswer: "(a) correlation, confounders possible (b) RCT with placebo/control group", commonErrors: ["Causation assumed.", "No experiment design."] },
        },
      ],
    },
  ],
};
