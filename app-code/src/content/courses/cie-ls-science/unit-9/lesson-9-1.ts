import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cils-u9-lesson-9-1",
  code: "9-1",
  title: "Science foundations review",
  goal: "I CAN review working scientifically, cells, classification and basic biology.",
  standards: ["0893 Science: foundations"],
  vocabulary: [
    { term: "Hypothesis", definition: "Testable prediction based on observation." },
    { term: "Control variable", definition: "Variable kept constant to ensure fair test." },
    { term: "Prokaryote", definition: "Cell without nucleus — bacteria." },
    { term: "Eukaryote", definition: "Cell with nucleus — plants, animals, fungi." },
    { term: "Binomial nomenclature", definition: "Two-part scientific name — genus + species." },
    { term: "Homeostasis", definition: "Maintaining stable internal conditions." },
  ],
  concepts: [
    {
      id: "cils-u9-foundations",
      title: "Working scientifically",
      skill: "Review scientific method, variables, measurement and data analysis.",
      lesson: {
        sections: [
          {
            heading: "Scientific method",
            body: "Observation → question → hypothesis → experiment → data → analysis → conclusion. Repeat for reliability.",
          },
          {
            heading: "Variables",
            body: "Independent (what you change), dependent (what you measure), controlled (what you keep same).",
          },
          {
            heading: "Measurement",
            body: "Use appropriate instruments, SI units, estimate uncertainties, repeat readings for accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Method", statement: "Hypothesis→experiment→data→analysis→conclusion; control variables." },
        ],
        workedExample: {
          problem: "How to test if temperature affects reaction rate?",
          solution: "Change temperature (independent), measure rate (dependent), control concentration/volume/catalyst.",
        },
      },
      questions: [
        {
          id: "cils-u9-foun-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theory" },
              { id: "b", text: "Testable prediction" },
              { id: "c", text: "Opinion" },
              { id: "d", text: "Fact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypothesis", statement: "Testable prediction." },
            ],
            steps: [
              { reasoning: "Hypothesis = testable prediction.", working: "prediction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Testable prediction",
            commonErrors: ["Choosing (c) — theory is established, hypothesis is testable."],
          },
        },
        {
          id: "cils-u9-foun-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three types of variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Variables", statement: "Independent, dependent, controlled." },
            ],
            steps: [
              { reasoning: "Three types.", working: "variables", marks: 1, markCode: "M" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent, dependent, controlled.",
            commonErrors: ["Missing controlled."],
          },
        },
        {
          id: "cils-u9-foun-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test for plant growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair test", statement: "Control variables, repeat, measure dependent variable." },
            ],
            steps: [
              { reasoning: "Change one variable (e.g. light) — independent.", working: "independent", marks: 1, markCode: "M" },
              { reasoning: "Measure growth (height/biomass) — dependent.", working: "dependent", marks: 1, markCode: "M" },
              { reasoning: "Control: water, soil, temperature, plant type.", working: "controls", marks: 1, markCode: "M" },
              { reasoning: "Design clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change light, measure growth, control water/soil/temp/plant type.",
            commonErrors: ["Changing multiple variables — unfair."],
          },
        },
        {
          id: "cils-u9-foun-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review scientific method.",
          parts: [
            { label: "a", prompt: "Describe scientific method steps.", marks: 3 },
            { label: "b", prompt: "Define variables.", marks: 2 },
            { label: "c", prompt: "How to ensure reliability?", marks: 2 },
            { label: "d", prompt: "How to ensure validity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific method", statement: "Hypothesis→experiment→data→analysis→conclusion; variables; reliability/validity." },
            ],
            steps: [
              { part: "a", reasoning: "Observation→question→hypothesis→experiment→data→analysis→conclusion.", working: "steps", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent (change), dependent (measure), controlled (keep same).", working: "variables", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Repeat trials, consistent results, control variables.", working: "reliability", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Test what intended, appropriate method, accurate measurements.", working: "validity", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) method steps (b) variables (c) repeat/control (d) appropriate method",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Steps correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Reliability vs validity confusion — repeat vs appropriate method."],
          },
        },
        {
          id: "cils-u9-foun-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment testing the effect of temperature on reaction rate, which is the dependent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate of reaction" },
              { id: "b", text: "Volume of acid" },
              { id: "c", text: "Concentration of catalyst" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependent variable", statement: "The variable that is measured." },
            ],
            steps: [
              { reasoning: "Rate is what is measured; temperature is changed.", working: "measured", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rate of reaction",
            commonErrors: ["Choosing (a) — temperature is the independent variable."],
          },
        },
        {
          id: "cils-u9-foun-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student records lengths (cm): $4.1$, $4.3$, $4.2$, $4.4$, $4.0$. Calculate the mean length.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4.2, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mean", statement: "Mean = sum of values $\\div$ number of values." },
            ],
            steps: [
              { reasoning: "Sum the five readings then divide by 5.", working: "(4.1+4.3+4.2+4.4+4.0)/5", marks: 1, markCode: "M" },
              { reasoning: "21.0 divided by 5 gives the mean.", working: "4.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.2$ cm",
            commonErrors: ["Adding without dividing by the number of readings."],
          },
        },
        {
          id: "cils-u9-foun-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Suggest two ways to make a measurement more reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reliability", statement: "Repeat readings, use precise equipment, control variables." },
            ],
            steps: [
              { reasoning: "Any two valid methods.", working: "repeats/equipment", marks: 1, markCode: "M" },
              { reasoning: "Two correct suggestions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeat readings and average; use more precise equipment; control variables.",
            commonErrors: ["Only one suggestion given."],
          },
        },
        {
          id: "cils-u9-foun-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement describes a controlled variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is deliberately changed" },
              { id: "b", text: "It is kept constant" },
              { id: "c", text: "It changes randomly" },
              { id: "d", text: "It is measured at the end" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Controlled variable", statement: "Kept constant for a fair test." },
            ],
            steps: [
              { reasoning: "Controlled = kept the same.", working: "constant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It is kept constant",
            commonErrors: ["Confusing with independent variable."],
          },
        },
        {
          id: "cils-u9-foun-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $0.045$ kg to grams.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "SI units", statement: "$1$ kg $= 1000$ g." },
            ],
            steps: [
              { reasoning: "Multiply by 1000.", working: "0.045 \\times 1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$ g",
            commonErrors: ["Multiplying by 100 instead of 1000."],
          },
        },
        {
          id: "cils-u9-foun-q10",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan an investigation to test whether exercise affects heart rate.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "List three variables to control.", marks: 2 },
            { label: "c", prompt: "Describe how you would collect reliable data.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair test", statement: "Identify variables, control others, repeat measurements." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: amount/type of exercise; dependent: heart rate.", working: "IV/DV", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any three: same person, rest time, measuring method, temperature.", working: "controls", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Three valid controls.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Measure pulse at intervals, repeat trials, average results.", working: "data", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reliable method described.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) exercise→heart rate (b) person/rest/method (c) repeated pulse measurements averaged",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Variables correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three controls.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reliable method.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Changing more than one variable — unfair test."],
          },
        },
        {
          id: "cils-u9-foun-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An experiment shows no difference between the test and control groups. What is the best conclusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The experiment was a success" },
              { id: "b", text: "All data must be discarded" },
              { id: "c", text: "The results do not support the hypothesis in this test" },
              { id: "d", text: "The hypothesis is proved wrong forever" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusions", statement: "Conclusions must match the data collected." },
            ],
            steps: [
              { reasoning: "No difference means hypothesis not supported by this test.", working: "match data", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The results do not support the hypothesis in this test",
            commonErrors: ["Claiming the hypothesis is 'disproved' — only this test's data."],
          },
        },
        {
          id: "cils-u9-foun-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels $240$ km in $3$ hours. Calculate its average speed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "km/h" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$speed = \\frac{distance}{time}$." },
            ],
            steps: [
              { reasoning: "Use speed = distance $\\div$ time.", working: "240/3", marks: 1, markCode: "M" },
              { reasoning: "Correct value with unit.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$ km/h",
            commonErrors: ["Dividing time by distance instead."],
          },
        },
        {
          id: "cils-u9-foun-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why repeating a measurement gives a more reliable result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reliability", statement: "Repeats average out random errors and anomalies." },
            ],
            steps: [
              { reasoning: "Individual readings vary due to random error.", working: "random error", marks: 1, markCode: "M" },
              { reasoning: "Mean of repeats is closer to true value.", working: "mean", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeats average out random errors so the mean is closer to the true value.",
            commonErrors: ["Saying repeats make results identical — they check consistency."],
          },
        },
        {
          id: "cils-u9-foun-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which change most improves the validity of an experiment testing photosynthesis rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating the experiment more times" },
              { id: "b", text: "Measuring the actual rate of photosynthesis accurately" },
              { id: "c", text: "Writing results more neatly" },
              { id: "d", text: "Using a bigger plant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Validity", statement: "The test measures what it is intended to measure." },
            ],
            steps: [
              { reasoning: "Validity = measuring the intended variable accurately.", working: "intended", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Measuring the actual rate of photosynthesis accurately",
            commonErrors: ["Choosing (a) — repeats improve reliability, not validity."],
          },
        },
        {
          id: "cils-u9-foun-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A thermometer has an uncertainty of $\\pm 1$ °C. A student reads $25$ °C. Calculate the percentage uncertainty.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Percentage uncertainty", statement: "$\\frac{uncertainty}{reading} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{1}{25} \\times 100$.", working: "1/25 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\%$",
            commonErrors: ["Using $\\pm 2$ °C or forgetting to multiply by 100."],
          },
        },
        {
          id: "cils-u9-foun-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Review the scientific method.",
          parts: [
            { label: "a", prompt: "List the steps from observation to conclusion.", marks: 3 },
            { label: "b", prompt: "Define the three types of variables.", marks: 2 },
            { label: "c", prompt: "Explain how to ensure reliability.", marks: 2 },
            { label: "d", prompt: "Explain how to ensure validity.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific method", statement: "Observation→question→hypothesis→experiment→data→analysis→conclusion; variables; reliability/validity." },
            ],
            steps: [
              { part: "a", reasoning: "Observation→question→hypothesis→experiment→data→analysis→conclusion.", working: "steps", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate order.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete sequence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent (change), dependent (measure), controlled (keep same).", working: "variables", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Repeat trials, control variables, average results.", working: "reliability", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct methods.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Measure the intended variable accurately with an appropriate method.", working: "validity", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) method steps (b) variables (c) repeat/control/average (d) measure intended variable",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Sequence correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Reliability vs validity confusion — repeat vs appropriate method."],
          },
        },
      ],
    },
    {
      id: "cils-u9-biology",
      title: "Biology review: cells to ecosystems",
      skill: "Review cell biology, plant/animal systems and ecology.",
      lesson: {
        sections: [
          {
            heading: "Cell biology",
            body: "Prokaryote (no nucleus) vs eukaryote (nucleus). Organelles: nucleus, mitochondria, ribosomes, cell membrane. Specialisation → tissues → organs → systems.",
          },
          {
            heading: "Plant systems",
            body: "Photosynthesis, transport (xylem/phloem), reproduction, tropisms. Leaf structure optimised for light/gas exchange.",
          },
          {
            heading: "Animal systems",
            body: "Digestion, circulation, respiration, nervous, hormonal, reproduction. Homeostasis maintains internal balance.",
          },
        ],
        keyFormulas: [
          { name: "Biology", statement: "Cells→tissues→organs→systems; photosynthesis; homeostasis; ecosystems." },
        ],
        workedExample: {
          problem: "How do cells become specialised?",
          solution: "Gene expression differs — same DNA, different proteins → different cell types/functions.",
        },
      },
      questions: [
        {
          id: "cils-u9-bio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell type has a nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prokaryote" },
              { id: "b", text: "Virus" },
              { id: "c", text: "Both" },
              { id: "d", text: "Eukaryote" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eukaryote", statement: "Has nucleus — plants, animals, fungi." },
            ],
            steps: [
              { reasoning: "Eukaryote = nucleus.", working: "eukaryote", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Eukaryote",
            commonErrors: ["Choosing (d) — prokaryotes lack nucleus."],
          },
        },
        {
          id: "cils-u9-bio-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is homeostasis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Maintaining stable internal conditions." },
            ],
            steps: [
              { reasoning: "Stable internal environment despite changes.", working: "stable", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maintaining stable internal conditions — temperature, glucose, water.",
            commonErrors: ["Saying 'growing' — that's development, not homeostasis."],
          },
        },
        {
          id: "cils-u9-bio-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain cell specialisation with example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specialisation", statement: "Same DNA, different gene expression → different cell types." },
            ],
            steps: [
              { reasoning: "All cells have same DNA but express different genes.", working: "genes", marks: 1, markCode: "M" },
              { reasoning: "Red blood cells: no nucleus, haemoglobin for O₂ transport.", working: "RBC", marks: 1, markCode: "M" },
              { reasoning: "Nerve cells: long fibres for signal transmission.", working: "neurons", marks: 1, markCode: "M" },
              { reasoning: "Specialisation explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same DNA, different genes expressed → specialised cells (RBC, neurons).",
            commonErrors: ["Saying 'different DNA' — same DNA, different expression."],
          },
        },
        {
          id: "cils-u9-bio-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review biology topics.",
          parts: [
            { label: "a", prompt: "Describe cell structure.", marks: 3 },
            { label: "b", prompt: "Explain photosynthesis.", marks: 2 },
            { label: "c", prompt: "Describe human body systems.", marks: 3 },
            { label: "d", prompt: "Explain homeostasis.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Biology review", statement: "Cells, photosynthesis, body systems, homeostasis." },
            ],
            steps: [
              { part: "a", reasoning: "Nucleus, mitochondria, ribosomes, membrane — eukaryotic structure.", working: "structure", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂+water→glucose+oxygen using light; chloroplasts; limiting factors.", working: "photosynthesis", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Digestive, circulatory, respiratory, nervous, hormonal, reproductive.", working: "systems", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiple correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Stable internal conditions via negative feedback.", working: "homeostasis", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) cell structure (b) photosynthesis (c) body systems (d) homeostasis",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Structure correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple systems.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Cell specialisation ≠ different DNA."],
          },
        },
        {
          id: "cils-u9-bio-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle releases energy from glucose during respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosome" },
              { id: "b", text: "Cell wall" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitochondria", statement: "Site of aerobic respiration — releases energy." },
            ],
            steps: [
              { reasoning: "Mitochondria release energy from glucose.", working: "mitochondria", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Mitochondrion",
            commonErrors: ["Choosing (a) — nucleus stores DNA."],
          },
        },
        {
          id: "cils-u9-bio-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student measures resting heart rates (beats per minute): $72$, $78$, $75$. Calculate the mean heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "bpm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mean", statement: "Mean = sum $\\div$ number of values." },
            ],
            steps: [
              { reasoning: "Add the three readings and divide by 3.", working: "(72+78+75)/3", marks: 1, markCode: "M" },
              { reasoning: "225 divided by 3.", working: "75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75$ bpm",
            commonErrors: ["Forgetting to divide by the number of readings."],
          },
        },
        {
          id: "cils-u9-bio-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how the digestive, circulatory and respiratory systems work together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "System integration", statement: "Digestion absorbs nutrients, circulatory transports them, respiratory supplies oxygen." },
            ],
            steps: [
              { reasoning: "Digestion breaks food down and absorbs nutrients into blood.", working: "digestion", marks: 1, markCode: "M" },
              { reasoning: "Circulation transports nutrients and oxygen; respiration supplies O₂ for respiration.", working: "circulation/respiration", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Digestion absorbs nutrients; circulation transports them and oxygen; respiration supplies oxygen.",
            commonErrors: ["Describing systems separately without linking them."],
          },
        },
        {
          id: "cils-u9-bio-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does xylem tissue transport in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Water and minerals" },
              { id: "d", text: "Food sugars" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Xylem", statement: "Transports water and dissolved minerals from roots upward." },
            ],
            steps: [
              { reasoning: "Xylem = water/minerals upward.", working: "xylem", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water and minerals",
            commonErrors: ["Confusing xylem with phloem (sugars)."],
          },
        },
        {
          id: "cils-u9-bio-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a food chain, producers capture $1000$ kJ of energy. Assume $10\\%$ is transferred at each level. Calculate the energy available to the fox (secondary consumer).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transfer", statement: "About $10\\%$ of energy passes to the next trophic level." },
            ],
            steps: [
              { reasoning: "First transfer: $1000 \\times 0.10 = 100$ kJ to herbivores.", working: "1000 \\times 0.10", marks: 1, markCode: "M" },
              { reasoning: "Second transfer: $100 \\times 0.10 = 10$ kJ to secondary consumers.", working: "100 \\times 0.10", marks: 1, markCode: "M" },
              { reasoning: "Fox receives $10$ kJ.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ kJ",
            commonErrors: ["Applying only one transfer or using $100\\%$."],
          },
        },
        {
          id: "cils-u9-bio-q10",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a leaf is adapted for photosynthesis.",
          parts: [
            { label: "a", prompt: "Describe the role of chlorophyll and chloroplasts.", marks: 2 },
            { label: "b", prompt: "Explain how the leaf structure allows gas exchange.", marks: 2 },
            { label: "c", prompt: "Explain how the leaf structure maximises light absorption.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Leaf adaptations", statement: "Chlorophyll absorbs light; stomata allow gas exchange; broad flat shape maximises light capture." },
            ],
            steps: [
              { part: "a", reasoning: "Chlorophyll in chloroplasts absorbs light energy for photosynthesis.", working: "chlorophyll", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct role stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stomata open to let $CO_2$ in and $O_2$ out; thin layer short diffusion distance.", working: "stomata", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gas exchange explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Broad, flat surface area maximises light absorption; thin allows light penetration.", working: "surface", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adaptation linked to function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chlorophyll absorbs light (b) stomata for gas exchange (c) broad flat shape for light",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Listing features without explaining the advantage."],
          },
        },
        {
          id: "cils-u9-bio-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which process releases oxygen into the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digestion" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Decomposition" },
              { id: "d", text: "Respiration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Produces glucose and releases oxygen." },
            ],
            steps: [
              { reasoning: "Photosynthesis releases $O_2$ as a product.", working: "photosynthesis", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Photosynthesis",
            commonErrors: ["Confusing with respiration which uses oxygen."],
          },
        },
        {
          id: "cils-u9-bio-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats at $70$ beats per minute. Calculate how many beats occur in one hour.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4200, unit: "beats" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Total = rate $\\times$ time." },
            ],
            steps: [
              { reasoning: "Multiply beats per minute by 60 minutes.", working: "70 \\times 60", marks: 1, markCode: "M" },
              { reasoning: "Correct total.", working: "4200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4200$ beats",
            commonErrors: ["Dividing instead of multiplying, or forgetting 60 minutes per hour."],
          },
        },
        {
          id: "cils-u9-bio-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how negative feedback maintains body temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Homeostasis", statement: "Negative feedback counters changes to keep conditions stable." },
            ],
            steps: [
              { reasoning: "If too hot, sweating and vasodilation increase heat loss.", working: "cooling", marks: 1, markCode: "M" },
              { reasoning: "If too cold, shivering and vasoconstriction reduce heat loss.", working: "warming", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feedback mechanisms (sweating, shivering, blood flow) counter temperature changes.",
            commonErrors: ["Saying 'positive feedback' or describing growth instead."],
          },
        },
        {
          id: "cils-u9-bio-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is an abiotic factor in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rabbit" },
              { id: "b", text: "A fungus" },
              { id: "c", text: "A grasshopper" },
              { id: "d", text: "Temperature" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Abiotic factor", statement: "Non-living component such as temperature, light or water." },
            ],
            steps: [
              { reasoning: "Abiotic = non-living; temperature qualifies.", working: "abiotic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Temperature",
            commonErrors: ["Choosing a living organism — those are biotic."],
          },
        },
        {
          id: "cils-u9-bio-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A population of $200$ rabbits decreases to $180$ after a disease outbreak. Calculate the percentage decrease.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Percentage change", statement: "$\\frac{change}{original} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Change = $200 - 180 = 20$; use $\\frac{20}{200} \\times 100$.", working: "20/200 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$",
            commonErrors: ["Using 180 as the denominator instead of 200."],
          },
        },
        {
          id: "cils-u9-bio-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review biology topics.",
          parts: [
            { label: "a", prompt: "Describe cell structure and organisation.", marks: 3 },
            { label: "b", prompt: "Explain photosynthesis.", marks: 2 },
            { label: "c", prompt: "Describe two animal body systems and how they interact.", marks: 2 },
            { label: "d", prompt: "Explain homeostasis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Biology review", statement: "Cells→tissues→organs→systems; photosynthesis; homeostasis." },
            ],
            steps: [
              { part: "a", reasoning: "Cells contain nucleus, mitochondria, ribosomes; cells→tissues→organs→systems.", working: "organisation", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate details.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$CO_2$ + water $\\rightarrow$ glucose + oxygen using light in chloroplasts.", working: "photosynthesis", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct equation and location.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "e.g. digestive absorbs nutrients, circulatory transports them; respiratory supplies oxygen.", working: "systems", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Interaction explained.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Maintaining stable internal conditions via negative feedback.", working: "homeostasis", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cells/organelles/organisation (b) photosynthesis equation (c) interacting systems (d) stable internal conditions",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Structure correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Interaction explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Cell specialisation ≠ different DNA."],
          },
        },
      ],
    },
    {
      id: "cils-u9-physics",
      title: "Physics review: forces to waves",
      skill: "Review forces, energy, electricity and waves.",
      lesson: {
        sections: [
          {
            heading: "Forces",
            body: "F=ma; weight=mg; pressure=F/A; moment=Fd; density=m/V. Balanced=equilibrium; unbalanced=acceleration.",
          },
          {
            heading: "Energy and electricity",
            body: "Energy conservation; efficiency; V=IR; P=VI; E=Pt. Heat transfer: conduction/convection/radiation.",
          },
          {
            heading: "Waves",
            body: "Sound: longitudinal, needs medium. Light: transverse, EM spectrum. Frequency=pitch; amplitude=loudness.",
          },
        ],
        keyFormulas: [
          { name: "Physics", statement: "F=ma; V=IR; P=VI; energy conservation; wave properties." },
        ],
        workedExample: {
          problem: "Calculate power: 12V, 2A.",
          solution: "P = VI = 12 × 2 = 24 W.",
        },
      },
      questions: [
        {
          id: "cils-u9-phys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V = I ÷ R" },
              { id: "b", text: "I = V + R" },
              { id: "c", text: "R = V × I" },
              { id: "d", text: "V = I × R" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "V = IR." },
            ],
            steps: [
              { reasoning: "V = IR.", working: "IR", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** V = I × R",
            commonErrors: ["Inverting — V=IR."],
          },
        },
        {
          id: "cils-u9-phys-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is energy conservation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservation", statement: "Energy can't be created/destroyed — only transferred." },
            ],
            steps: [
              { reasoning: "Energy transforms between forms, total constant.", working: "conserved", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy can't be created/destroyed — only transferred between forms.",
            commonErrors: ["Saying 'lost as heat' — still conserved, just wasted."],
          },
        },
        {
          id: "cils-u9-phys-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare sound and light waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Waves", statement: "Sound: longitudinal, needs medium; light: transverse, EM, vacuum OK." },
            ],
            steps: [
              { reasoning: "Sound: longitudinal, needs medium, slower.", working: "sound", marks: 1, markCode: "M" },
              { reasoning: "Light: transverse, EM spectrum, vacuum.", working: "light", marks: 1, markCode: "M" },
              { reasoning: "Both transfer energy without matter.", working: "common", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound: longitudinal, needs medium; light: transverse, EM, vacuum OK.",
            commonErrors: ["Both need medium — light doesn't."],
          },
        },
        {
          id: "cils-u9-phys-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review physics topics.",
          parts: [
            { label: "a", prompt: "Describe forces and motion.", marks: 3 },
            { label: "b", prompt: "Explain energy transfer.", marks: 2 },
            { label: "c", prompt: "Describe electricity basics.", marks: 2 },
            { label: "d", prompt: "Explain wave properties.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Physics review", statement: "Forces, energy, electricity, waves." },
            ],
            steps: [
              { part: "a", reasoning: "F=ma, weight=mg, pressure=F/A; balanced/unbalanced forces.", working: "forces", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy transforms but conserved; efficiency measures useful fraction.", working: "energy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "V=IR, P=VI, circuits, series/parallel.", working: "electricity", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sound/light properties; frequency, amplitude, wavelength.", working: "waves", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) forces/motion (b) energy conservation (c) V=IR/P=VI (d) wave properties",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Forces correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Energy 'used up' — it transforms to other forms."],
          },
        },
        {
          id: "cils-u9-phys-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force of $6$ N acts on a mass of $2$ kg, producing an acceleration of $3$ m/s². Which equation is being demonstrated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$p = F/A$" },
              { id: "b", text: "$V = IR$" },
              { id: "c", text: "$W = mg$" },
              { id: "d", text: "$F = ma$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's second law", statement: "$F = ma$." },
            ],
            steps: [
              { reasoning: "Force, mass and acceleration relate via $F = ma$ ($6 = 2 \\times 3$).", working: "F=ma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $F = ma$",
            commonErrors: ["Choosing (c) — pressure uses area, not acceleration."],
          },
        },
        {
          id: "cils-u9-phys-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circuit has a voltage of $6$ V and a current of $0.5$ A. Calculate the power supplied.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "W" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = VI$." },
            ],
            steps: [
              { reasoning: "Use $P = VI = 6 \\times 0.5$.", working: "6 \\times 0.5", marks: 1, markCode: "M" },
              { reasoning: "Correct power with unit.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ W",
            commonErrors: ["Using $P = I^2R$ without finding R first — $P = VI$ is direct."],
          },
        },
        {
          id: "cils-u9-phys-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by the efficiency of an energy transfer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Efficiency", statement: "Useful output energy $\\div$ total input energy $\\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Ratio of useful energy out to total energy in.", working: "useful/input", marks: 1, markCode: "M" },
              { reasoning: "Expressed as a percentage; wasted energy lowers it.", working: "percentage", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Efficiency = useful output energy $\\div$ total input energy $\\times 100\\%$.",
            commonErrors: ["Forgetting to multiply by 100 or using output alone."],
          },
        },
        {
          id: "cils-u9-phys-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which wave property determines the pitch of a sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Wavelength" },
              { id: "d", text: "Frequency" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pitch", statement: "Determined by frequency — higher frequency, higher pitch." },
            ],
            steps: [
              { reasoning: "Pitch $\\leftrightarrow$ frequency; loudness $\\leftrightarrow$ amplitude.", working: "frequency", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Frequency",
            commonErrors: ["Confusing pitch with loudness (amplitude)."],
          },
        },
        {
          id: "cils-u9-phys-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A force of $10$ N moves an object through $5$ m. Calculate the work done.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Work", statement: "$W = Fd$ (work = force $\\times$ distance)." },
            ],
            steps: [
              { reasoning: "Use $W = Fd = 10 \\times 5$.", working: "10 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "Correct work with unit.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ J",
            commonErrors: ["Using weight or pressure formula instead."],
          },
        },
        {
          id: "cils-u9-phys-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A $2$ kg object is dropped from rest. Analyse the energy changes.",
          parts: [
            { label: "a", prompt: "Calculate its weight ($g = 10$ N/kg).", marks: 2 },
            { label: "b", prompt: "State the energy transformation as it falls.", marks: 2 },
            { label: "c", prompt: "Explain why the total energy stays constant.", marks: 2 },
            { label: "d", prompt: "Describe what happens to the energy on landing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy transfer", statement: "$W = mg$; gravitational PE $\\rightarrow$ kinetic $\\rightarrow$ heat/sound; total conserved." },
            ],
            steps: [
              { part: "a", reasoning: "$W = mg = 2 \\times 10 = 20$ N.", working: "2 \\times 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct weight.", working: "20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gravitational potential energy transforms to kinetic energy.", working: "GPE\\rightarrow KE", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct transformation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy is conserved — only transferred between forms, none created or destroyed.", working: "conserved", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Principle stated.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Kinetic energy transfers to heat, sound and deformation on impact.", working: "impact", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Forms identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ N (b) GPE$\\rightarrow$KE (c) conserved, only transferred (d) heat/sound/deformation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Saying energy is 'used up' — it is transferred."],
          },
        },
        {
          id: "cils-u9-phys-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a series circuit with two identical bulbs, which quantity is the same through both bulbs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Power" },
              { id: "b", text: "Resistance of the circuit" },
              { id: "c", text: "Current" },
              { id: "d", text: "Voltage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Series circuit", statement: "Current is the same at every point; voltage divides." },
            ],
            steps: [
              { reasoning: "In series, charge flow (current) is identical everywhere.", working: "current", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Current",
            commonErrors: ["Choosing (a) — voltage splits across components in series."],
          },
        },
        {
          id: "cils-u9-phys-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A machine transfers $200$ J of energy and produces $60$ J of useful output. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$efficiency = \\frac{useful}{total} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{60}{200} \\times 100$.", working: "60/200 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct efficiency.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Inverting the ratio or omitting $\\times 100$."],
          },
        },
        {
          id: "cils-u9-phys-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare conduction, convection and radiation as methods of heat transfer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Heat transfer", statement: "Conduction: particle collisions in solids; convection: fluid movement; radiation: EM waves, needs no medium." },
            ],
            steps: [
              { reasoning: "Conduction through solids by particle vibration; convection in fluids by circulating currents.", working: "conduction/convection", marks: 1, markCode: "M" },
              { reasoning: "Radiation via infrared waves — works through vacuum, no medium needed.", working: "radiation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conduction (solids), convection (fluids), radiation (EM waves, vacuum OK).",
            commonErrors: ["Saying radiation needs a medium — it does not."],
          },
        },
        {
          id: "cils-u9-phys-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a contact force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "Magnetism" },
              { id: "c", text: "Electrostatic attraction" },
              { id: "d", text: "Friction" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contact force", statement: "Requires physical contact, e.g. friction, normal, tension." },
            ],
            steps: [
              { reasoning: "Friction acts only when surfaces touch.", working: "friction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Friction",
            commonErrors: ["Choosing gravity — it acts at a distance."],
          },
        },
        {
          id: "cils-u9-phys-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block has a mass of $54$ g and a volume of $20$ cm³. Calculate its density.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.7, unit: "g/cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho = \\frac{m}{V}$." },
            ],
            steps: [
              { reasoning: "Use $\\rho = \\frac{54}{20}$.", working: "54/20", marks: 1, markCode: "M" },
              { reasoning: "Correct density with unit.", working: "2.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.7$ g/cm³",
            commonErrors: ["Dividing volume by mass instead of mass by volume."],
          },
        },
        {
          id: "cils-u9-phys-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review physics topics.",
          parts: [
            { label: "a", prompt: "Describe forces and motion.", marks: 3 },
            { label: "b", prompt: "Explain energy transfer and conservation.", marks: 2 },
            { label: "c", prompt: "Describe electricity basics.", marks: 2 },
            { label: "d", prompt: "Explain wave properties.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Physics review", statement: "Forces, energy, electricity, waves." },
            ],
            steps: [
              { part: "a", reasoning: "$F = ma$, weight $= mg$, pressure $= F/A$; balanced vs unbalanced forces.", working: "forces", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equations correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy transforms but total is conserved; efficiency = useful $\\div$ input.", working: "energy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$V = IR$, $P = VI$, $E = Pt$; series/parallel circuits.", working: "electricity", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sound longitudinal needs medium; light transverse EM; frequency=pitch, amplitude=loudness.", working: "waves", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) forces/equations (b) conservation/efficiency (c) V=IR/P=VI (d) wave properties",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Forces correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Energy 'used up' — it transforms to other forms."],
          },
        },
      ],
    },
    {
      id: "cils-u9-chemistry",
      title: "Chemistry review: matter to reactions",
      skill: "Review states of matter, chemical reactions and acids/bases.",
      lesson: {
        sections: [
          {
            heading: "Matter",
            body: "States: solid/liquid/gas. Particle theory: energy determines arrangement. Phase changes: melting, evaporation, condensation.",
          },
          {
            heading: "Reactions",
            body: "Chemical change: new substance formed. Word equations: reactants→products. Mass conserved — atoms rearrange.",
          },
          {
            heading: "Acids and bases",
            body: "pH<7 acid, >7 alkali, =7 neutral. Indicators: litmus, universal. Neutralisation: acid+alkali→salt+water.",
          },
        ],
        keyFormulas: [
          { name: "Chemistry", statement: "States/particle theory; reactions=reactants→products; pH scale; neutralisation." },
        ],
        workedExample: {
          problem: "Write word equation for neutralisation.",
          solution: "hydrochloric acid + sodium hydroxide → sodium chloride + water.",
        },
      },
      questions: [
        {
          id: "cils-u9-chem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving" },
              { id: "b", text: "Boiling" },
              { id: "c", text: "Melting" },
              { id: "d", text: "Formation of new substance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical reaction", statement: "New substance formed." },
            ],
            steps: [
              { reasoning: "Chemical change = new substance.", working: "new substance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Formation of new substance",
            commonErrors: ["Choosing (c) — boiling is physical change."],
          },
        },
        {
          id: "cils-u9-chem-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is neutralisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "Acid + alkali → salt + water." },
            ],
            steps: [
              { reasoning: "Acid+alkali→salt+water.", working: "reaction", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acid + alkali → salt + water.",
            commonErrors: ["Saying 'mixing' — it's chemical reaction."],
          },
        },
        {
          id: "cils-u9-chem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain particle theory of states of matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Particle theory", statement: "Solid: fixed positions; liquid: slide; gas: free movement." },
            ],
            steps: [
              { reasoning: "Solid: particles tightly packed, vibrate in place.", working: "solid", marks: 1, markCode: "M" },
              { reasoning: "Liquid: close but slide past each other.", working: "liquid", marks: 1, markCode: "M" },
              { reasoning: "Gas: far apart, move freely.", working: "gas", marks: 1, markCode: "M" },
              { reasoning: "Theory explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solid=fixed; liquid=slide; gas=free — particle arrangement determines state.",
            commonErrors: ["Same description for all — different arrangements."],
          },
        },
        {
          id: "cils-u9-chem-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review chemistry topics.",
          parts: [
            { label: "a", prompt: "Describe states of matter.", marks: 2 },
            { label: "b", prompt: "Explain chemical reactions.", marks: 3 },
            { label: "c", prompt: "Describe acids and alkalis.", marks: 2 },
            { label: "d", prompt: "Explain neutralisation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Chemistry review", statement: "States, reactions, acids/bases, neutralisation." },
            ],
            steps: [
              { part: "a", reasoning: "Solid/liquid/gas; particle arrangements differ.", working: "states", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New substance formed; reactants→products; mass conserved.", working: "reactions", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Acid pH<7 sour; alkali pH>7 bitter/soapy.", working: "acids/bases", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Acid+alkali→salt+water; indicators show pH.", working: "neutralisation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) states (b) reactions/mass conserved (c) pH<7/>7 (d) salt+water",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Reactions correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Neutralisation = salt+water, not just mixing."],
          },
        },
        {
          id: "cils-u9-chem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution with pH $8$ is best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An alkali" },
              { id: "b", text: "A weak acid" },
              { id: "c", text: "Neutral" },
              { id: "d", text: "A strong acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "pH $<7$ acid, $>7$ alkali, $=7$ neutral." },
            ],
            steps: [
              { reasoning: "$8 > 7$ so the solution is alkaline.", working: "pH>7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An alkali",
            commonErrors: ["Thinking any pH above 7 is 'weak' — alkalinity is the correct term."],
          },
        },
        {
          id: "cils-u9-chem-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a reaction, $12$ g of reactant A and $8$ g of reactant B combine completely. Calculate the mass of products formed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants equals total mass of products." },
            ],
            steps: [
              { reasoning: "Mass is conserved — add reactant masses.", working: "12 + 8", marks: 1, markCode: "M" },
              { reasoning: "Correct product mass.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ g",
            commonErrors: ["Subtracting masses instead of adding."],
          },
        },
        {
          id: "cils-u9-chem-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "List three signs that a chemical reaction has occurred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "New substance formed — signs: colour change, gas, precipitate, temperature change." },
            ],
            steps: [
              { reasoning: "Any three valid signs.", working: "signs", marks: 1, markCode: "M" },
              { reasoning: "Three correct signs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Colour change, gas given off, precipitate formed, temperature change (any three).",
            commonErrors: ["Listing physical changes like melting as signs."],
          },
        },
        {
          id: "cils-u9-chem-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a physical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting ice" },
              { id: "b", text: "Burning paper" },
              { id: "c", text: "Souring milk" },
              { id: "d", text: "Rusting iron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical change", statement: "State or appearance changes but no new substance forms." },
            ],
            steps: [
              { reasoning: "Melting is a state change — no new substance.", working: "melting", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Melting ice",
            commonErrors: ["Choosing burning — that forms new substances."],
          },
        },
        {
          id: "cils-u9-chem-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A solution contains $25$ g of salt dissolved in $0.5$ dm³ of water. Calculate the concentration in g/dm³.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "g/dm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "$concentration = \\frac{mass}{volume}$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{25}{0.5}$.", working: "25/0.5", marks: 1, markCode: "M" },
              { reasoning: "Correct concentration with unit.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ g/dm³",
            commonErrors: ["Dividing volume by mass or misplacing the decimal."],
          },
        },
        {
          id: "cils-u9-chem-q10",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Describe acids, alkalis and neutralisation.",
          parts: [
            { label: "a", prompt: "State the pH ranges for acids, alkalis and neutral solutions.", marks: 2 },
            { label: "b", prompt: "Name two indicators and their colours in acid and alkali.", marks: 2 },
            { label: "c", prompt: "Write the word equation for neutralisation and name the products.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Acids/bases", statement: "pH scale; indicators; acid + alkali $\\rightarrow$ salt + water." },
            ],
            steps: [
              { part: "a", reasoning: "Acid pH $<7$, alkali pH $>7$, neutral pH $=7$.", working: "pH", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Litmus: red in acid, blue in alkali; universal indicator: red/orange $\\rightarrow$ green $\\rightarrow$ purple.", working: "indicators", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Colours correct for at least one indicator.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "hydrochloric acid + sodium hydroxide $\\rightarrow$ sodium chloride + water.", working: "equation", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Salt and water correctly named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $<7$/$>7$/$=7$ (b) litmus red/blue (c) acid+alkali$\\rightarrow$salt+water",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Neutralisation = salt+water, not just mixing."],
          },
        },
        {
          id: "cils-u9-chem-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Universal indicator turns green in a solution. What is the pH of the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pH $5$" },
              { id: "b", text: "pH $7$" },
              { id: "c", text: "pH $2$" },
              { id: "d", text: "pH $12$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Universal indicator", statement: "Green indicates neutral, pH $7$." },
            ],
            steps: [
              { reasoning: "Green $=$ neutral $=$ pH $7$.", working: "green=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** pH $7$",
            commonErrors: ["Thinking green means alkaline — it is neutral."],
          },
        },
        {
          id: "cils-u9-chem-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "$10$ g of ice melts completely into water. What is the mass of the water formed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Mass is unchanged in a physical change." },
            ],
            steps: [
              { reasoning: "Melting is physical — mass stays $10$ g.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ g",
            commonErrors: ["Thinking water weighs less than ice — mass is conserved."],
          },
        },
        {
          id: "cils-u9-chem-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what happens to particles during evaporation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Particle theory", statement: "Heating gives particles energy to escape the liquid surface as gas." },
            ],
            steps: [
              { reasoning: "Particles gain energy and move faster.", working: "energy", marks: 1, markCode: "M" },
              { reasoning: "Fast-moving particles escape the surface — liquid becomes gas.", working: "escape", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Particles gain energy and escape the liquid surface as gas.",
            commonErrors: ["Saying particles 'turn into' gas — the same particles change state."],
          },
        },
        {
          id: "cils-u9-chem-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which gas is produced when an acid reacts with a carbonate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Nitrogen" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Acid + carbonate", statement: "Produces carbon dioxide gas." },
            ],
            steps: [
              { reasoning: "Acid + carbonate $\\rightarrow$ salt + water + $CO_2$.", working: "CO2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon dioxide",
            commonErrors: ["Choosing hydrogen — that comes from acid + metal."],
          },
        },
        {
          id: "cils-u9-chem-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A $40$ g sample of solution contains $4$ g of dissolved acid. Calculate the percentage concentration of the acid.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Percentage", statement: "$\\frac{part}{whole} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{4}{40} \\times 100$.", working: "4/40 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$",
            commonErrors: ["Using the acid mass alone or forgetting $\\times 100$."],
          },
        },
        {
          id: "cils-u9-chem-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Review chemistry topics.",
          parts: [
            { label: "a", prompt: "Describe the three states of matter using particle theory.", marks: 3 },
            { label: "b", prompt: "Explain what makes a change chemical.", marks: 2 },
            { label: "c", prompt: "Describe the pH scale.", marks: 1 },
            { label: "d", prompt: "Explain neutralisation with an example word equation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Chemistry review", statement: "States/particle theory; chemical change; pH; neutralisation." },
            ],
            steps: [
              { part: "a", reasoning: "Solid: fixed vibrating particles; liquid: slide past each other; gas: free fast movement.", working: "states", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Arrangements correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear comparison.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New substance formed; atoms rearranged; mass conserved.", working: "change", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct criteria.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "pH $0$–$14$; $<7$ acid, $>7$ alkali, $=7$ neutral.", working: "pH", marks: 1, markCode: "M" },
              { part: "d", reasoning: "acid + alkali $\\rightarrow$ salt + water, e.g. HCl + NaOH $\\rightarrow$ NaCl + $H_2O$.", working: "neutralisation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Products and example correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) particle arrangements (b) new substance/mass conserved (c) $<7$/$>7$/$=7$ (d) salt+water",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "States correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Neutralisation = salt+water, not just mixing."],
          },
        },
      ],
    },
    {
      id: "cils-u9-capstone",
      title: "Science capstone: exam preparation",
      skill: "Apply all science knowledge to exam-style questions and practical assessment.",
      lesson: {
        sections: [
          {
            heading: "Exam strategy",
            body: "Read carefully, show working, use scientific terms, explain mechanisms, check units. For practicals: control variables, repeat, analyse.",
          },
          {
            heading: "Key equations",
            body: "speed=d/t; a=(v-u)/t; F=ma; W=mg; p=F/A; M=Fd; ρ=m/V; V=IR; P=VI; E=Pt.",
          },
          {
            heading: "Time management",
            body: "Answer easier questions first, mark difficult ones, review at end. Don't spend too long on one question.",
          },
        ],
        keyFormulas: [
          { name: "Exam prep", statement: "All equations + scientific method + time management." },
        ],
        workedExample: {
          problem: "How to approach 'explain' questions?",
          solution: "Scientific terms + mechanism + cause-effect link + specific details.",
        },
      },
      questions: [
        {
          id: "cils-u9-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first in an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all questions" },
              { id: "b", text: "Skip reading" },
              { id: "c", text: "Guess everything" },
              { id: "d", text: "Start hardest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam strategy", statement: "Read questions first." },
            ],
            steps: [
              { reasoning: "Read all questions first — plan time.", working: "read", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Read all questions",
            commonErrors: ["Starting hardest — wastes time."],
          },
        },
        {
          id: "cils-u9-cap-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Read carefully, show working, check units." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "techniques", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Read carefully, show working, check units, use scientific terms, explain mechanisms.",
            commonErrors: ["Only one technique — need multiple."],
          },
        },
        {
          id: "cils-u9-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to answer 'explain' questions effectively?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Explain technique", statement: "Scientific terms + mechanism + cause-effect + specifics." },
            ],
            steps: [
              { reasoning: "Use correct scientific terminology.", working: "terms", marks: 1, markCode: "M" },
              { reasoning: "Explain mechanism — how/why it happens.", working: "mechanism", marks: 1, markCode: "M" },
              { reasoning: "Link cause to effect clearly.", working: "link", marks: 1, markCode: "M" },
              { reasoning: "Be specific — avoid vague answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scientific terms + mechanism + cause-effect + specifics.",
            commonErrors: ["Just stating facts — need explanation."],
          },
        },
        {
          id: "cils-u9-cap-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for science exam.",
          parts: [
            { label: "a", prompt: "List key equations to remember.", marks: 3 },
            { label: "b", prompt: "Describe exam strategy.", marks: 2 },
            { label: "c", prompt: "How to handle difficult questions?", marks: 2 },
            { label: "d", prompt: "What to do in last 5 minutes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Equations + strategy + time management." },
            ],
            steps: [
              { part: "a", reasoning: "speed=d/t, a=(v-u)/t, F=ma, W=mg, p=F/A, M=Fd, ρ=m/V, V=IR, P=VI, E=Pt.", working: "equations", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Six+ correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read questions, answer easy first, show working, check units.", working: "strategy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mark it, move on, return later with fresh eyes.", working: "difficult", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Review answers, check units, ensure all questions attempted.", working: "final", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) key equations (b) read/answer/show work (c) mark and return (d) review/check",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Six+ equations.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Spending too long on hard questions — mark and move on."],
          },
        },
        {
          id: "cils-u9-cap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watt" },
              { id: "b", text: "Joule" },
              { id: "c", text: "Newton" },
              { id: "d", text: "Pascal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "SI units", statement: "Force is measured in newtons (N)." },
            ],
            steps: [
              { reasoning: "Newton is the unit of force.", working: "N", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Newton",
            commonErrors: ["Choosing joule — that is energy/work."],
          },
        },
        {
          id: "cils-u9-cap-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object travels $100$ m in $20$ s at constant speed. Calculate the speed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$speed = \\frac{distance}{time}$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{100}{20}$.", working: "100/20", marks: 1, markCode: "M" },
              { reasoning: "Correct speed with unit.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m/s",
            commonErrors: ["Reversing distance and time."],
          },
        },
        {
          id: "cils-u9-cap-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why you should show your working in calculation questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam technique", statement: "Working earns method marks even if the final answer is wrong." },
            ],
            steps: [
              { reasoning: "Mark schemes award M marks for correct method.", working: "method marks", marks: 1, markCode: "M" },
              { reasoning: "Working also lets examiners follow your reasoning.", working: "reasoning", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Working earns method marks and shows your reasoning.",
            commonErrors: ["Only giving the final answer — loses method marks."],
          },
        },
        {
          id: "cils-u9-cap-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equation gives electrical power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P = IR$" },
              { id: "b", text: "$E = mc^2$" },
              { id: "c", text: "$F = ma$" },
              { id: "d", text: "$P = VI$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Electrical power", statement: "$P = VI$ (also $P = I^2R$, $P = V^2/R$)." },
            ],
            steps: [
              { reasoning: "Power = voltage $\\times$ current.", working: "VI", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $P = VI$",
            commonErrors: ["Choosing (b) — $IR$ is voltage (Ohm's law rearranged)."],
          },
        },
        {
          id: "cils-u9-cap-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the weight of a $2$ kg mass on Earth ($g = 10$ N/kg).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$." },
            ],
            steps: [
              { reasoning: "Use $W = mg = 2 \\times 10$.", working: "2 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Correct weight with unit.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ N",
            commonErrors: ["Using mass in kg without multiplying by $g$."],
          },
        },
        {
          id: "cils-u9-cap-q10",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "You are asked: 'Explain how the leaf structure is adapted for photosynthesis.' Describe your approach.",
          parts: [
            { label: "a", prompt: "Identify the command word and what it demands.", marks: 2 },
            { label: "b", prompt: "List the adaptations you would include.", marks: 2 },
            { label: "c", prompt: "Explain how to link each feature to its function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Explain technique", statement: "Command word + features + feature-to-function links." },
            ],
            steps: [
              { part: "a", reasoning: "'Explain' requires mechanism — how/why, not just a list.", working: "command", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Requirement identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Chlorophyll/chloroplasts, stomata, broad flat shape, thin layers.", working: "features", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple adaptations listed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each feature linked: chlorophyll absorbs light, stomata allow gas exchange, shape maximises light capture.", working: "links", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Links made explicit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) explain=mechanism (b) adaptations listed (c) feature→function links",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Features listed.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Links clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
            ],
            commonErrors: ["Just stating facts — 'explain' needs the mechanism."],
          },
        },
        {
          id: "cils-u9-cap-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should you always check the units in a calculation answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the answer longer" },
              { id: "b", text: "Only teachers check units" },
              { id: "c", text: "To ensure the answer is in the required unit and of sensible size" },
              { id: "d", text: "Units do not matter in science" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Units", statement: "Answers must carry correct units; unit checks catch errors." },
            ],
            steps: [
              { reasoning: "Units confirm magnitude and catch conversion/calculation errors.", working: "check", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To ensure the answer is in the required unit and of sensible size",
            commonErrors: ["Treating units as optional — they carry meaning."],
          },
        },
        {
          id: "cils-u9-cap-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car accelerates from $10$ m/s to $20$ m/s in $5$ s. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a = \\frac{v - u}{t}$." },
            ],
            steps: [
              { reasoning: "Use $a = \\frac{20 - 10}{5}$.", working: "(20-10)/5", marks: 1, markCode: "M" },
              { reasoning: "Correct acceleration with unit.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ m/s²",
            commonErrors: ["Using $v + u$ or dividing by the wrong time."],
          },
        },
        {
          id: "cils-u9-cap-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how to use a markscheme when revising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Markscheme use", statement: "Shows exactly which points earn marks." },
            ],
            steps: [
              { reasoning: "Read the markscheme after attempting a question.", working: "attempt first", marks: 1, markCode: "M" },
              { reasoning: "Identify missing points and the required wording/level of detail.", working: "gaps", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Attempt questions, then compare answers to markscheme to find missing mark points.",
            commonErrors: ["Reading markschemes before attempting — no active recall."],
          },
        },
        {
          id: "cils-u9-cap-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You are stuck on a difficult question with 5 minutes left on that section. What is the best strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mark it, move on, and return if time permits" },
              { id: "b", text: "Copy a friend's answer" },
              { id: "c", text: "Leave it blank with no attempt" },
              { id: "d", text: "Spend all remaining time on it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time management", statement: "Partial answers earn marks; never leave blanks." },
            ],
            steps: [
              { reasoning: "Move on to secure other marks, return later — attempt earns partial credit.", working: "move on", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mark it, move on, and return if time permits",
            commonErrors: ["Fixating on one question — costs marks elsewhere."],
          },
        },
        {
          id: "cils-u9-cap-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A force of $60$ N acts over an area of $3$ m². Calculate the pressure.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$." },
            ],
            steps: [
              { reasoning: "Use $p = \\frac{60}{3}$.", working: "60/3", marks: 1, markCode: "M" },
              { reasoning: "Correct pressure with unit.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ Pa",
            commonErrors: ["Multiplying force by area instead of dividing."],
          },
        },
        {
          id: "cils-u9-cap-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare a revision plan for the final science exam.",
          parts: [
            { label: "a", prompt: "List the topic areas to review.", marks: 3 },
            { label: "b", prompt: "Name the key equations to memorise.", marks: 2 },
            { label: "c", prompt: "Describe exam-day strategy.", marks: 2 },
            { label: "d", prompt: "Explain how to answer 'explain' and 'evaluate' questions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Coverage + equations + strategy + command words." },
            ],
            steps: [
              { part: "a", reasoning: "Foundations, biology, physics, chemistry, earth science, ecosystems, integrated problems.", working: "topics", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive coverage.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All areas listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$speed = d/t$, $a = (v-u)/t$, $F = ma$, $W = mg$, $p = F/A$, $\\rho = m/V$, $V = IR$, $P = VI$, $E = Pt$.", working: "equations", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Five+ correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read questions, answer easy first, show working, check units, review at end.", working: "strategy", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete strategy.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Explain = mechanism; evaluate = strengths/weaknesses + improvements.", working: "commands", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both distinguished.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) all topics (b) key equations (c) read/plan/review (d) explain=mechanism, evaluate=critical",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "All topics.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Equations listed.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Strategy correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Cramming without understanding — apply knowledge instead."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u9-review-notes",
      title: "Science review — revision notes",
      summary: "All topics recap: foundations, biology, physics, chemistry, exam skills.",
      sections: [
        {
          heading: "Complete syllabus recap",
          body: "Working scientifically → cells → plants → human body → materials → energy → forces → electricity → Earth → ecosystems → integrated → exam skills.",
        },
        {
          heading: "Key equations",
          body: "speed=d/t; a=(v-u)/t; F=ma; W=mg; p=F/A; M=Fd; ρ=m/V; V=IR; P=VI; E=Pt; pH scale; word equations.",
        },
      ],
    },
  ],
};
