import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "chem10-u5-lesson-5-3",
  code: "5-3",
  title: "Capstone: Laboratory Safety and Scientific Practice",
  goal: "I CAN apply chemical safety protocols, identify hazards, and evaluate experimental design for reliability.",
  standards: ["HS-PS1-3", "SEP: Planning and Carrying Out Investigations", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Hazard", definition: "A potential source of harm — chemical, physical, or biological." },
    { term: "SDS", definition: "Safety Data Sheet — standardized document with hazard info and handling procedures." },
    { term: "Corrosive", definition: "Substance that destroys living tissue or materials on contact." },
    { term: "Flammable", definition: "Substance that ignites easily at normal temperatures." },
    { term: "PPE", definition: "Personal Protective Equipment — goggles, gloves, lab coat." },
    { term: "Fume hood", definition: "Ventilated enclosure for handling volatile or hazardous chemicals." },
    { term: "Control variable", definition: "Factor kept constant to isolate the tested variable." },
    { term: "Replication", definition: "Repeating trials to verify results are reliable." },
  ],
  concepts: [
    {
      id: "chem10-u5-safety",
      title: "Chemical hazards and PPE",
      skill: "Identify chemical hazards and apply appropriate safety measures.",
      lesson: {
        sections: [
          {
            heading: "Hazard categories",
            body: "- **Flammable**: ignites easily (ethanol, acetone)\n- **Corrosive**: burns tissue (acids, bases)\n- **Toxic**: poisons if ingested/inhaled\n- **Oxidizer**: fuels combustion (peroxides, nitrates)\n- **Irritant**: inflames eyes/skin\n\nCheck the **SDS** (Safety Data Sheet) for handling instructions.",
          },
          {
            heading: "PPE and procedures",
            body: "- **Goggles**: eye protection (always, not just safety glasses)\n- **Gloves**: chemical protection (check compatibility)\n- **Lab coat**: body protection\n- **Fume hood**: volatile/toxic chemicals\n- **Never**: eat, drink, smell directly, or pipette by mouth",
          },
          {
            heading: "Emergency response",
            body: "Know the location of: eyewash station, safety shower, fire extinguisher, spill kit. Report all accidents immediately — even minor ones.",
          },
        ],
        keyFormulas: [
          { name: "PPE", statement: "Goggles + gloves + lab coat = minimum protection" },
          { name: "SDS", statement: "Read before handling any chemical" },
        ],
        workedExample: {
          problem: "You need to handle concentrated HCl. What PPE and equipment do you need?",
          solution: "Goggles, gloves, lab coat; work in fume hood or well-ventilated area; know eyewash location; add acid to water slowly.",
        },
      },
      questions: [
        {
          id: "chem10-u5-safety-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does SDS stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Standard Danger Sheet" },
              { id: "b", text: "Safety Data Sheet" },
              { id: "c", text: "Safe Disposal System" },
              { id: "d", text: "Chemical Safety Document" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "SDS", statement: "Safety Data Sheet with hazard info." }],
            steps: [{ reasoning: "SDS = Safety Data Sheet.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Safety Data Sheet",
            commonErrors: ["Guessing from memory."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u5-safety-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why must you add acid to water slowly, not water to acid?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Dilution safety", statement: "Diluting concentrated acid releases heat." }],
            steps: [
              { reasoning: "Mixing acid and water releases heat (exothermic).", marks: 1, markCode: "B" },
              { reasoning: "Adding water to concentrated acid can cause violent boiling and splashing.", marks: 1, markCode: "R" },
              { reasoning: "Adding acid to water lets the water absorb heat safely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heat of dilution; acid→water is safer.",
            commonErrors: ["Thinking it's just a rule without understanding why."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "chem10-u5-safety-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the hazard and appropriate PPE for each: (a) concentrated ammonia, (b) ethanol, (c) sodium hydroxide pellets, (d) mercury thermometer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Hazard identification", statement: "Match hazard type to protection." }],
            steps: [
              { reasoning: "(a) Ammonia: toxic/irritant vapor — fume hood, goggles, gloves.", marks: 1, markCode: "B" },
              { reasoning: "(b) Ethanol: flammable — no flames, goggles, gloves.", marks: 1, markCode: "B" },
              { reasoning: "(c) NaOH: corrosive — goggles, gloves, avoid skin contact.", marks: 1, markCode: "B" },
              { reasoning: "(d) Mercury: toxic vapor if broken — handle carefully, never touch, know spill cleanup.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ammonia→fume hood; ethanol→no flames; NaOH→corrosive PPE; mercury→toxic, careful handling.",
            commonErrors: ["Using same PPE for all without considering specific hazards."],
            examinerNote: "B3, A1.",
          },
        },
        {
          id: "chem10-u5-safety-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A lab group is testing reaction rates of different acids on magnesium ribbon.",
          parts: [
            { label: "a", prompt: "List three safety hazards and precautions.", marks: 3 },
            { label: "b", prompt: "Identify the independent, dependent and two controlled variables.", marks: 4 },
            { label: "c", prompt: "Explain why replicating trials matters for reliability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Safety", statement: "Acids are corrosive; hydrogen gas is flammable." },
              { kind: "principle", name: "Experimental design", statement: "Isolate variables for valid comparison." },
            ],
            steps: [
              { reasoning: "Hazard 1: corrosive acids — goggles, gloves.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Hazard 2: hydrogen gas produced — flammable, no flames.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Hazard 3: glassware breakage — handle carefully, know spill procedures.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Independent: acid type/concentration.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Dependent: reaction rate (gas volume/time).", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Controlled: temperature, Mg mass, acid volume.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Replication guards against outliers and confirms the rate difference is real, not chance.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Single trials can be affected by measurement error or inconsistent conditions.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Multiple trials give reliable average and show consistency.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) corrosive/flammable/breakage (b) acid→rate, controls listed (c) replication confirms reliability.",
            commonErrors: ["Ignoring hydrogen gas flammability."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u5-experimental",
      title: "Experimental design and reliability",
      skill: "Evaluate experimental design for controls, variables and reliability.",
      lesson: {
        sections: [
          {
            heading: "Fair testing",
            body: "A fair test changes only the independent variable. All other factors must be controlled: same temperature, same quantities, same timing, same equipment. If controlled variables vary, results are confounded.",
          },
          {
            heading: "Sample size and replication",
            body: "Larger samples reduce the effect of outliers. Replicates confirm results aren't flukes. A single measurement of a single trial is anecdote, not evidence.",
          },
          {
            heading: "Sources of error",
            body: "- **Systematic**: consistent bias (uncalibrated balance, contaminated glassware)\n- **Random**: unpredictable variation (measurement reading, timing)\n- **Human**: parallax, inconsistent technique\n\nSystematic errors can't be averaged out — they must be identified and corrected.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "Only independent variable changes; rest controlled." },
          { name: "Systematic error", statement: "Consistent bias that can't be averaged out." },
        ],
        workedExample: {
          problem: "A student tests reaction rate vs temperature but uses different acid volumes each trial. What's wrong?",
          solution: "Acid volume is a controlled variable that wasn't controlled — rate differences could be due to volume, not temperature.",
        },
      },
      questions: [
        {
          id: "chem10-u5-experimental-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a controlled variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The variable being tested" },
              { id: "b", text: "A factor kept constant to isolate the test" },
              { id: "c", text: "The measured result" },
              { id: "d", text: "The experiment's conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Controlled variable", statement: "Kept constant to isolate effect." }],
            steps: [{ reasoning: "Controlled variables are held constant so only the independent variable affects results.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Factor kept constant",
            commonErrors: ["Confusing with independent variable."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u5-experimental-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What's the difference between systematic and random error?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Systematic", statement: "Consistent bias — same direction every time." },
              { kind: "principle", name: "Random", statement: "Unpredictable variation — averages out." },
            ],
            steps: [
              { reasoning: "Systematic: consistent bias (e.g., uncalibrated balance always reads high).", marks: 1, markCode: "B" },
              { reasoning: "Random: unpredictable (e.g., parallax reading varies each time).", marks: 1, markCode: "B" },
              { reasoning: "Random errors average out with replicates; systematic errors don't — they shift all results.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Systematic = consistent bias; random = unpredictable variation.",
            commonErrors: ["Thinking all errors average out."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "chem10-u5-experimental-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two students measure the same reaction rate. Student A gets 45, 47, 46 mL/s; Student B gets 45, 38, 52 mL/s. Who is more precise and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Precision", statement: "Consistent measurements cluster together." }],
            steps: [
              { reasoning: "Student A's values (45-47) cluster tightly — more precise.", marks: 1, markCode: "B" },
              { reasoning: "Student B's values (38-52) spread widely — less precise.", marks: 1, markCode: "R" },
              { reasoning: "A's consistency suggests better technique or equipment.", marks: 1, markCode: "R" },
              { reasoning: "B's variation suggests measurement error, inconsistent timing, or equipment issues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A is more precise — tighter clustering.",
            commonErrors: ["Choosing based on which value is 'correct'."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "chem10-u5-experimental-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Evaluate this experiment: 'Test if salt affects how fast ice melts. Put ice cubes in water at room temperature, add salt to one cup, time melting.'",
          parts: [
            { label: "a", prompt: "Identify the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "List two controlled variables that should be specified.", marks: 3 },
            { label: "c", prompt: "Suggest two improvements for reliability.", marks: 3 },
            { label: "d", prompt: "Explain what would make the results invalid.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variables", statement: "Identify what's changed vs measured." },
              { kind: "principle", name: "Validity", statement: "Uncontrolled variables invalidate results." },
            ],
            steps: [
              { reasoning: "Independent: presence/amount of salt.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Dependent: melting time.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Controlled 1: ice cube size must be identical across trials.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Controlled 2: water volume, temperature, and timing method must be constant.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Improvement 1: use multiple ice cubes per condition and average.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Improvement 2: blind timing or automated measurement to reduce bias.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Improvement 3: repeat trials on different days.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Invalid if: different ice sizes, different water temps, or different salt amounts used.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Also invalid if only one trial — could be chance.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) salt→melting time (b) ice size, water temp, volume (c) replicates, blind timing (d) uncontrolled variables.",
            commonErrors: ["Missing controlled variables or replication."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
