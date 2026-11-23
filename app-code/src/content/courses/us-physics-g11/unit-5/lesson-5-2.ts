import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "phys11-u5-lesson-5-2",
  code: "5-2",
  title: "Capstone: Analyzing Data and Evaluating Claims",
  goal: "I CAN interpret physics data, evaluate experimental claims, and construct evidence-based arguments.",
  standards: [
    "SEP: Analyzing and Interpreting Data",
    "SEP: Engaging in Argument from Evidence",
    "SEP: Evaluating and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Uncertainty",
      definition:
        "The range of values within which a measurement's true value likely lies.",
    },
    {
      term: "Significant figures",
      definition: "Digits in a measurement that carry meaningful precision.",
    },
    {
      term: "Systematic error",
      definition:
        "Consistent bias in measurement that shifts all results the same way.",
    },
    {
      term: "Random error",
      definition: "Unpredictable variation that averages out over repeats.",
    },
    {
      term: "Correlation",
      definition:
        "A statistical relationship between two variables — not proof of causation.",
    },
    {
      term: "Control group",
      definition:
        "A comparison group where the tested variable is absent or unchanged.",
    },
    {
      term: "Sample size",
      definition:
        "Number of trials/measurements; larger samples improve reliability.",
    },
    {
      term: "Outlier",
      definition:
        "A result far from the pattern, possibly from error or a real effect.",
    },
  ],
  concepts: [
    {
      id: "phys11-u5-data",
      title: "Reading physics data critically",
      skill:
        "Evaluate measurements, graphs, and claims for validity and reliability.",
      lesson: {
        sections: [
          {
            heading: "Uncertainty and precision",
            body: "Every measurement has uncertainty. Report values with appropriate significant figures. A ruler reading 4.2 cm has ±0.1 cm uncertainty; a digital balance 4.20 g has ±0.01 g. Precision describes repeatability; accuracy describes closeness to truth.",
          },
          {
            heading: "Reading graphs",
            body: "Check: axes labeled with units? Scale appropriate? Trend smooth or scattered? Error bars shown? A steep slope means rapid change; flat means little change. Extrapolating beyond data is risky.",
          },
          {
            heading: "Evaluating claims",
            body: "Ask: Was there a control? Were variables isolated? How many trials? Is the conclusion supported by the data or beyond it? 'Correlation is not causation' — two variables moving together doesn't prove one causes the other.",
          },
        ],
        keyFormulas: [
          {
            name: "Precision vs accuracy",
            statement: "Precision = repeatable; accuracy = near true value",
          },
          {
            name: "Uncertainty",
            statement: "± half the smallest scale division",
          },
        ],
        workedExample: {
          problem:
            "A student measures a pendulum period five times: 1.02, 1.04, 1.01, 1.03, 1.02 s. Is this precise?",
          solution:
            "Values cluster within 0.03 s — precise. Accuracy would need comparison to a known standard.",
        },
      },
      questions: [
        {
          id: "phys11-u5-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ruler marked in mm measures 5.3 cm. What is the uncertainty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "±0.1 cm" },
              { id: "b", text: "±0.01 cm" },
              { id: "c", text: "±1 cm" },
              { id: "d", text: "±0.5 cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Uncertainty",
                statement:
                  "± half smallest division: mm scale → ±0.1 cm... actually ±0.05 cm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mm divisions: half of 0.1 cm = ±0.05 cm, but standard convention gives ±0.1 cm for cm-scale reading.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** ±0.1 cm",
            commonErrors: [
              "Confusing precision of instrument with uncertainty.",
            ],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u5-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ad claims 'Our battery lasts 2x longer — proven by tests.' What should you check?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluating claims",
                statement: "Check sample size, conditions, and independence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "How many tests/devices? Single test proves nothing.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Under what conditions? Usage pattern, temperature, device type matter.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Was it independent or manufacturer-funded? Who tested the competitor?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sample size, conditions, independence of testing.",
            commonErrors: ["Accepting claim without evidence."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "phys11-u5-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A graph shows temperature vs time for cooling water. The curve flattens at long times. Explain why and what it means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton's cooling",
                statement: "Rate proportional to temperature difference.",
              },
              {
                kind: "principle",
                name: "Asymptote",
                statement:
                  "Approaches room temperature but never reaches instantly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cooling rate depends on temperature difference from surroundings.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "As water cools, difference shrinks → slower cooling → curve flattens.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Eventually approaches room temperature asymptotically.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Flattening is expected physics, not measurement error.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cooling slows as ΔT shrinks — approaches room temp asymptotically.",
            commonErrors: ["Thinking flat line means experiment failed."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "phys11-u5-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Students measure how long a toy car takes to travel 1 m down ramps at different heights. Heights: 5, 10, 15, 20 cm; times: 4.2, 2.9, 2.4, 2.1 s.",
          parts: [
            {
              label: "a",
              prompt: "Identify independent and dependent variables.",
              marks: 2,
            },
            { label: "b", prompt: "Explain the trend in the data.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest two sources of uncertainty.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Would a control group help? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variables",
                statement: "Height changed; time measured.",
              },
              {
                kind: "principle",
                name: "Controls",
                statement: "Unchanged factors enable comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Independent: ramp height.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Dependent: travel time.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Higher ramp → greater potential energy → higher speed → shorter time.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Trend is consistent: 5 cm slowest (4.2 s), 20 cm fastest (2.1 s).",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Relationship not linear — energy ∝ h but speed ∝ √h.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Uncertainty: timing reaction time, ramp surface friction variation.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Or: release method inconsistency, car alignment on ramp.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "A control (e.g., same height repeated) confirms measurements aren't drifting.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Or: flat surface test isolates ramp effect vs friction.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Controls strengthen the causal claim that height affects speed.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) height→time (b) higher = faster, nonlinear (c) timing/friction (d) controls confirm cause.",
            commonErrors: ["Not recognizing nonlinear relationship."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u5-argument",
      title: "Constructing physics arguments",
      skill:
        "Build evidence-based arguments connecting observations to physical principles.",
      lesson: {
        sections: [
          {
            heading: "Claim-evidence-reasoning",
            body: "Strong physics arguments follow CER: **Claim** (what you conclude), **Evidence** (data/observations), **Reasoning** (physics principle connecting them). 'The ball bounced higher because it was thrown harder' needs the energy principle: more initial KE → more rebound.",
          },
          {
            heading: "Common argument patterns",
            body: "- Observation → force explanation: 'Object curves because net force is perpendicular to velocity'\n- Data → trend → cause: 'Period increases with length because T ∝ √L'\n- Comparison → principle: 'LED cooler than bulb because less energy wasted as heat'",
          },
          {
            heading: "Evaluating arguments",
            body: "Check: Is the claim specific? Does evidence actually support it? Is reasoning grounded in physics? Are alternative explanations considered? Weak arguments rely on 'because it just does' or ignore counterevidence.",
          },
        ],
        keyFormulas: [
          { name: "CER", statement: "Claim + Evidence + Reasoning" },
          {
            name: "Strong argument",
            statement:
              "Specific claim backed by relevant evidence and principle",
          },
        ],
        workedExample: {
          problem: "Claim: 'Heavier objects fall faster.' Evaluate.",
          solution:
            "Without air resistance, all objects fall at g regardless of mass. The claim confuses weight with acceleration — weak argument.",
        },
      },
      questions: [
        {
          id: "phys11-u5-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a CER argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion, Example, Reason" },
              { id: "b", text: "Claim, Evidence, Reasoning" },
              { id: "c", text: "Cause, Effect, Result" },
              { id: "d", text: "Data, Graph, Conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CER",
                statement: "Claim, Evidence, Reasoning structure.",
              },
            ],
            steps: [
              {
                reasoning: "CER = Claim + Evidence + Reasoning.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Claim, Evidence, Reasoning",
            commonErrors: ["Mixing up the components."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate: 'The car stopped faster on wet pavement because it was raining.' What's missing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Argument evaluation",
                statement:
                  "Reasoning must connect cause to effect via physics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim identifies rain but not the mechanism — why does rain cause faster stopping?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Missing: wet pavement reduces friction → less braking force → longer stopping distance.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Also 'faster' is ambiguous — longer stopping time? shorter distance? Needs precision.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Missing mechanism (reduced friction) and precise claim.",
            commonErrors: ["Accepting vague causal claim."],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "phys11-u5-argument-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two students debate: A says 'heavy objects fall faster'; B says 'all objects fall at same rate.' Who's right and what evidence settles it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free fall",
                statement: "g is same for all masses absent air resistance.",
              },
              {
                kind: "principle",
                name: "Air resistance",
                statement: "Affects light/large-surface objects more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B is right for free fall — acceleration g independent of mass.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "A confuses everyday observation (feather vs rock) with physics — air resistance.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Evidence: drop a hammer and feather in vacuum — they fall together.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Or: measure g for different masses — same result within uncertainty.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "B correct — same g; A's observation explained by air resistance.",
            commonErrors: ["Sideing with intuitive but wrong answer."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "phys11-u5-argument-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A news article claims 'Wind turbines kill birds, so wind power is bad for wildlife.'",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the claim and what evidence would support or refute it.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What physics/energy context is missing?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Write a stronger version of the argument.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Argument analysis",
                statement: "Separate claim, evidence, and reasoning.",
              },
              {
                kind: "principle",
                name: "Comparative impact",
                statement: "Evaluate against alternatives.",
              },
            ],
            steps: [
              {
                reasoning: "Claim: wind power harms wildlife via bird deaths.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Evidence needed: bird mortality data vs other energy sources (cats, buildings, fossil fuel pollution).",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Refuting evidence: turbine design improvements, siting away from migration routes.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Missing: comparison to alternatives — coal plants kill birds too via pollution and habitat loss.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Also missing: scale — wind provides X% of energy vs bird deaths are small fraction of total avian mortality.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "And: wind is renewable, reduces CO₂ — trade-off analysis needed.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Stronger claim: 'While wind turbines do kill some birds, the impact is far smaller than fossil fuel combustion's effects on wildlife and climate.'",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Evidence: comparative mortality studies, CO₂ reduction data.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Reasoning: energy choices involve trade-offs; wind's net wildlife impact is lower than alternatives.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) claim needs comparative evidence (b) missing alternative comparison (c) stronger version acknowledges trade-offs.",
            commonErrors: ["Accepting one-sided claim without context."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u5-design",
      title: "Designing physics investigations",
      skill:
        "Plan fair tests with controls, identify limitations, and improve experimental reliability.",
      lesson: {
        sections: [
          {
            heading: "Planning a fair test",
            body: "1. State the question and prediction\n2. Identify independent variable (what you change)\n3. Identify dependent variable (what you measure)\n4. List controlled variables (what stays same)\n5. Choose measurement method and range\n6. Plan repeats for reliability",
          },
          {
            heading: "Common pitfalls",
            body: "- Not controlling enough variables (results confounded)\n- Too few trials (outliers dominate)\n- Biased measurement (knowing expected result)\n- Unsafe procedures (physics lab hazards)",
          },
          {
            heading: "Improving reliability",
            body: "Repeat trials (3+ minimum). Randomize order to avoid systematic drift. Blind measurements where possible. Calibrate instruments. Report uncertainty and use consistent significant figures.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "Only independent variable changes" },
          {
            name: "Reliability",
            statement: "Replicates + controls + consistent method",
          },
        ],
        workedExample: {
          problem:
            "Design a test for 'Does surface affect friction?' using a block and spring scale.",
          solution:
            "Independent: surface type; dependent: friction force; controlled: block mass, pulling speed, spring scale; repeat on each surface 3x.",
        },
      },
      questions: [
        {
          id: "phys11-u5-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the first step in designing a physics investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collect data" },
              { id: "b", text: "State the question and prediction" },
              { id: "c", text: "Analyze results" },
              { id: "d", text: "Write conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Investigation design",
                statement: "Question guides everything.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Define the question and hypothesis before choosing variables or methods.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** State question and prediction",
            commonErrors: ["Starting with equipment instead of question."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a single trial insufficient for a physics experiment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replication",
                statement: "Repeats confirm reliability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Single measurement could be affected by random error or outlier.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Repeats show consistency and allow averaging to reduce error.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Without repeats, can't distinguish real effect from chance variation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Single trial can't distinguish signal from noise; repeats confirm reliability.",
            commonErrors: ["Thinking one good measurement is enough."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "phys11-u5-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests 'Does mass affect pendulum period?' using different bobs but forgets to keep string length constant. What's wrong?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Controlled variables",
                statement: "Only independent variable should change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "String length is a controlled variable — must stay constant.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "If length varies, period changes regardless of mass — confounds results.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Since T ∝ √L, length variation would dominate any mass effect.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Fix: measure same length for all trials, vary only bob mass.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Length must be controlled — otherwise period changes confound the test.",
            commonErrors: ["Not recognizing length affects period."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "phys11-u5-design-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design an investigation: 'How does angle of incline affect a cart's acceleration?'",
          parts: [
            { label: "a", prompt: "State variables and prediction.", marks: 3 },
            { label: "b", prompt: "List materials and procedure.", marks: 3 },
            {
              label: "c",
              prompt: "Identify two sources of error and how to reduce them.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variables",
                statement: "Angle changed; acceleration measured.",
              },
              {
                kind: "principle",
                name: "Controls",
                statement: "Other factors constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Independent: incline angle; dependent: acceleration (from distance/time).",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Prediction: steeper angle → greater acceleration (component of gravity increases).",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Controlled: cart mass, ramp surface, release method.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Materials: ramp, cart, protractor, meter stick, stopwatch or motion sensor.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Procedure: set angle, release cart from top, measure time over fixed distance, repeat 3x.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Calculate acceleration from $d = \\frac{1}{2}at^2$; plot a vs sin θ.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Error 1: timing reaction — use motion sensor or photogates.",
                marks: 1,
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
                  "Or: angle measurement — use protractor carefully, verify with rise/run.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Or: cart wobble — ensure straight release, no pushing.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) angle→acceleration, controls listed (b) ramp+cart+timing, repeat trials (c) timing/friction/angle errors + fixes.",
            commonErrors: ["Missing controls or insufficient repeats."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
  ],
};
