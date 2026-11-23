import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "s8-u4-lesson-4-2",
  code: "4-2",
  title: "Capstone: Physics Investigation and Data Analysis",
  goal: "I CAN design physics experiments, analyze data, and evaluate claims using quantitative evidence.",
  standards: [
    "SEP: Planning and Carrying Out Investigations",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Engaging in Argument from Evidence",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Measurement uncertainty",
      definition:
        "The range of values within which the true value likely lies.",
    },
    {
      term: "Significant figures",
      definition: "Digits that carry meaningful precision in a measurement.",
    },
    {
      term: "Systematic error",
      definition: "Consistent bias that shifts all measurements the same way.",
    },
    {
      term: "Random error",
      definition: "Unpredictable variation that averages out over repeats.",
    },
    {
      term: "Control group",
      definition:
        "A comparison where the tested variable is absent or unchanged.",
    },
    {
      term: "Independent variable",
      definition: "The factor deliberately changed in an experiment.",
    },
    {
      term: "Dependent variable",
      definition: "The factor measured as a result.",
    },
    {
      term: "Controlled variable",
      definition: "A factor kept constant for a fair test.",
    },
  ],
  concepts: [
    {
      id: "s8-u4-investigation",
      title: "Physics experiment design",
      skill:
        "Design fair tests with proper controls, variables, and measurement precision.",
      lesson: {
        sections: [
          {
            heading: "Variables in physics",
            body: "Independent: what you change (mass, height, angle). Dependent: what you measure (speed, force, time). Controlled: what stays same (surface, temperature, equipment). Physics experiments need precise measurement and controlled conditions.",
          },
          {
            heading: "Measurement precision",
            body: "Use appropriate instruments (ruler for cm, micrometer for mm, balance for mass). Record uncertainty. Repeat measurements and average. Calibrate instruments. Parallax errors occur when reading scales at an angle.",
          },
          {
            heading: "Physics lab safety",
            body: "Safety glasses always. Secure equipment. Know emergency procedures. Electrical safety for circuits. Don't look at bright lights or lasers. Report spills and breaks immediately.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "Only independent variable changes" },
          {
            name: "Precision",
            statement: "Consistent measurements cluster together",
          },
        ],
        workedExample: {
          problem:
            "Design a test for 'Does mass affect acceleration down a ramp?'",
          solution:
            "Independent: cart mass; dependent: acceleration (from time/distance); controlled: ramp angle, surface, release method; repeat 3x with each mass.",
        },
      },
      questions: [
        {
          id: "s8-u4-investigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the dependent variable in a physics experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What you change" },
              { id: "b", text: "What you measure" },
              { id: "c", text: "What stays constant" },
              { id: "d", text: "The hypothesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent variable",
                statement: "Measured result.",
              },
            ],
            steps: [
              {
                reasoning: "Dependent variable is what's measured as a result.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** What you measure",
            commonErrors: ["Confusing with independent variable."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-investigation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is parallax error a problem in physics measurements?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallax",
                statement: "Reading position changes with viewing angle.",
              },
              {
                kind: "principle",
                name: "Measurement error",
                statement: "Systematic error affects all readings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reading a scale from different angles gives different values.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Causes systematic error — consistently too high or too low.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Fix: read at eye level, use pointer to avoid parallax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Viewing angle changes reading → systematic error → fix by eye-level reading.",
            commonErrors: ["Not recognizing as systematic error."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s8-u4-investigation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Students measure pendulum period but each uses a different string length. Why is this a problem and how to fix it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Controlled variables",
                statement: "Only independent variable should change.",
              },
              {
                kind: "principle",
                name: "Confounding",
                statement: "Different lengths confound results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "String length affects period — it's a controlled variable that varied.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Period differences could be due to length, not the tested variable.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Fix: measure same length for all trials.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Also control: bob mass, release angle, timing method.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Length must be constant — otherwise period changes confound results.",
            commonErrors: ["Not recognizing length affects period."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s8-u4-investigation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design an investigation: 'How does ramp angle affect a cart's acceleration?'",
          parts: [
            {
              label: "a",
              prompt: "State hypothesis and identify variables.",
              marks: 3,
            },
            { label: "b", prompt: "List materials and procedure.", marks: 3 },
            {
              label: "c",
              prompt: "Identify two sources of error and how to minimize them.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experimental design",
                statement: "Isolate variables for valid test.",
              },
              {
                kind: "principle",
                name: "Error analysis",
                statement: "Identify and minimize measurement errors.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis: steeper angle → greater acceleration.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Independent: ramp angle; dependent: acceleration (from distance/time).",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Controlled: cart mass, surface, release method, distance measured.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Materials: ramp, cart, protractor, meter stick, stopwatch or photogates.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Procedure: set angle, release cart from rest, measure time over fixed distance, calculate $a = 2d/t^2$.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "Repeat for 3-4 different angles, 3 trials each.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Error 1: timing reaction — use photogates or motion sensor.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Error 2: friction variation — keep surface clean, same cart.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Or: angle measurement — verify with protractor and rise/run calculation.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) angle→acceleration hypothesis (b) ramp+cart+timing (c) timing/friction/angle errors + fixes.",
            commonErrors: ["Missing controls or insufficient replicates."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "s8-u4-data",
      title: "Analyzing physics data",
      skill:
        "Process measurements, identify patterns, and evaluate evidence quality.",
      lesson: {
        sections: [
          {
            heading: "Data processing",
            body: "Calculate averages for replicates. Report uncertainty. Look for trends and outliers. Graph data to visualize relationships. Check if results match theoretical predictions.",
          },
          {
            heading: "Evidence quality",
            body: "Strong: precise measurements, controlled variables, consistent results, replicable. Weak: large uncertainty, uncontrolled variables, inconsistent results, single trial. Always consider limitations.",
          },
          {
            heading: "Physics vs everyday claims",
            body: "Apply physics principles to evaluate claims: 'This device saves energy' — check efficiency claims; 'This material is stronger' — stronger how? at what cost? Physics provides quantitative tools for evaluation.",
          },
        ],
        keyFormulas: [
          { name: "Average", statement: "Sum of values / number of values" },
          { name: "Uncertainty", statement: "± half smallest scale division" },
        ],
        workedExample: {
          problem:
            "Pendulum periods: 1.02, 1.04, 1.01, 1.03, 1.02 s. Calculate mean and assess precision.",
          solution:
            "Mean = $5.12/5 = 1.024$ s; range $0.03$ s — precise measurements.",
        },
      },
      questions: [
        {
          id: "s8-u4-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you report with every physics measurement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just the number" },
              { id: "b", text: "Number and units" },
              { id: "c", text: "Number, units, and uncertainty" },
              { id: "d", text: "Just units" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Measurement reporting",
                statement:
                  "Value + units + uncertainty = complete measurement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complete measurements include value, units, and uncertainty estimate.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Number, units, uncertainty",
            commonErrors: ["Omitting units or uncertainty."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "s8-u4-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Five measurements: 10.1, 10.3, 10.2, 10.4, 10.2 cm. Calculate mean and identify if any are outliers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mean",
                statement: "Average of measurements.",
              },
              {
                kind: "principle",
                name: "Outlier",
                statement: "Value far from cluster.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mean = $(10.1+10.3+10.2+10.4+10.2)/5 = 51.2/5 = 10.24$ cm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All values within 0.3 cm of mean — no outliers.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Data is consistent — precise measurements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mean = 10.24 cm; no outliers; consistent data.",
            commonErrors: ["Arithmetic errors; not checking for outliers."],
            examinerNote: "M1, B1, A1.",
          },
        },
        {
          id: "s8-u4-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures speed of a cart five times: 1.8, 1.9, 2.1, 1.8, 1.7 m/s. Another gets: 2.0, 2.5, 1.5, 2.8, 1.2 m/s. Who is more precise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Precision",
                statement: "Consistent measurements cluster together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Student A: range 1.7-2.1 (spread 0.4) — tight cluster.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Student B: range 1.2-2.8 (spread 1.6) — wide spread.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "A is more precise — smaller spread.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "B's variation suggests measurement error or inconsistent technique.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Student A — tighter clustering = more precise.",
            commonErrors: ["Choosing based on which is 'correct'."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s8-u4-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Students measure how ramp height affects a cart's speed at the bottom.",
          parts: [
            {
              label: "a",
              prompt: "What variables should be controlled?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many trials per height? Why?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What data table would you create?",
              marks: 2,
            },
            { label: "d", prompt: "How would you analyze results?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Controlled variables",
                statement: "Only height should change.",
              },
              {
                kind: "principle",
                name: "Reliability",
                statement: "Replicates ensure consistency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Control: cart mass, ramp surface, release method, measurement distance.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Independent: ramp height; dependent: speed at bottom.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "3+ trials per height — reduces random error, confirms consistency.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Single trial could be outlier; replicates show true pattern.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Table: columns = ramp height, trial number, time, calculated speed; rows = each trial.",
                marks: 2,
                markCode: "B",
                part: "c",
              },
              {
                reasoning: "Calculate average speed for each height.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning:
                  "Graph speed vs height — expect positive correlation (higher = faster).",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Check if relationship matches $v = \\sqrt{2gh}$ prediction.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) mass/surface/method/distance (b) 3+ trials for reliability (c) height/trial/time/speed table (d) average+graph+compare to theory.",
            commonErrors: ["Missing controls or insufficient replicates."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "s8-u4-evaluation",
      title: "Evaluating physics claims",
      skill:
        "Critically assess claims about physics phenomena and technologies using evidence.",
      lesson: {
        sections: [
          {
            heading: "Evaluating claims",
            body: "Ask: What physics principle applies? Is there quantitative evidence? Are measurements precise? Is there a control? Could alternative explanations exist? Does the claim violate conservation laws?",
          },
          {
            heading: "Common claim types",
            body: "- 'This device saves energy' → check efficiency vs alternatives\n- 'This material is stronger' → stronger how? at what cost?\n- 'This is safe' → safe under what conditions?\n- 'This is clean' → clean for whom? at what lifecycle stage?",
          },
          {
            heading: "Physics skepticism",
            body: "Conservation of energy forbids free energy. Perpetual motion violates physics. 'Miracle' devices usually hide energy inputs or measurement errors. Extraordinary claims need extraordinary evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy conservation",
            statement: "No free energy — outputs ≤ inputs",
          },
          {
            name: "Evidence",
            statement: "Quantitative data > qualitative claims",
          },
        ],
        workedExample: {
          problem:
            "Evaluate: 'This magnetic motor generates electricity without input.'",
          solution:
            "Violates energy conservation — magnets don't create energy. Any output must come from hidden input or measurement error.",
        },
      },
      questions: [
        {
          id: "s8-u4-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What principle makes 'free energy' devices impossible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton's first law" },
              { id: "b", text: "Conservation of energy" },
              { id: "c", text: "Ohm's law" },
              { id: "d", text: "Boyle's law" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Energy can't be created from nothing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy conservation forbids creating energy — all devices need input.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Conservation of energy",
            commonErrors: ["Not recognizing fundamental violation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ad claims 'This insulation reduces heating bills by 50%.' What should you ask?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Claim evaluation",
                statement: "Check baseline, conditions, verification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "50% compared to what? Uninsulated? Different climate? Different usage?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Under what conditions? Winter only? Specific insulation type?",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Independent verification or just manufacturer claim?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Baseline, conditions, independent verification.",
            commonErrors: ["Accepting percentage without context."],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "s8-u4-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 'zero-point energy' device claims to output more power than it consumes. What physics principle does it violate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Output can't exceed input.",
              },
              {
                kind: "principle",
                name: "Thermodynamics",
                statement: "No net work from equilibrium state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Violates energy conservation — output > input impossible.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Zero-point energy is real quantum phenomenon but can't be extracted as usable power.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Thermodynamics: no cyclic process produces net work from single heat reservoir.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Any apparent output must come from hidden input or measurement error.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Violates energy conservation/thermodynamics — no free energy.",
            commonErrors: ["Being fooled by quantum jargon."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s8-u4-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Evaluate the claim: 'LED bulbs are 100% efficient and produce no heat.'",
          parts: [
            {
              label: "a",
              prompt: "What's true and what's misleading?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the physics of LED efficiency.",
              marks: 3,
            },
            { label: "c", prompt: "Write a more accurate claim.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency",
                statement: "LED ~90% efficient vs incandescent ~5%.",
              },
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "No device is 100% efficient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "True: LEDs are much more efficient than incandescent bulbs.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Misleading: '100% efficient' and 'no heat' are false — some energy always lost as heat.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "LEDs still produce some heat — just much less than incandescent.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "LEDs convert ~90% of electrical energy to light vs incandescent ~5%.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Incandescent wastes most energy as infrared heat; LED emits minimal heat.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Remaining ~10% still lost as heat — no device achieves 100%.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Accurate: 'LEDs are ~90% efficient, producing mostly light with minimal heat — far more efficient than incandescent bulbs.'",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Evidence: efficiency measurements comparing LED vs incandescent.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Reasoning: acknowledge efficiency while noting it's not perfect.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) efficient true; '100%/no heat' false (b) ~90% vs ~5%, still some heat (c) accurate claim acknowledges ~90%.",
            commonErrors: ["Accepting marketing exaggeration."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
  ],
};
