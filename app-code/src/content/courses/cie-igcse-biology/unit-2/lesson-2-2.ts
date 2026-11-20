import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieb-u2-lesson-2-2",
  code: "2-2",
  title: "Enzymes",
  goal: "I CAN explain enzyme action, the lock-and-key and induced-fit models, and describe how temperature and pH affect enzyme activity.",
  standards: ["0653 2.4"],
  vocabulary: [
    { term: "Enzyme", definition: "Biological catalyst made of protein that speeds up reactions without being used up." },
    { term: "Active site", definition: "Region of the enzyme where the substrate binds." },
    { term: "Substrate", definition: "The molecule an enzyme acts upon." },
    { term: "Enzyme–substrate complex", definition: "Temporary structure formed when substrate binds to the active site." },
    { term: "Denaturation", definition: "Permanent change in enzyme shape at extreme pH/temperature, destroying the active site." },
    { term: "Optimum", definition: "Conditions (pH/temperature) at which an enzyme works fastest." },
    { term: "Lock and key", definition: "Model where substrate fits the active site exactly like a key in a lock." },
    { term: "Induced fit", definition: "Model where the active site changes shape slightly to fit the substrate." },
  ],
  concepts: [
    {
      id: "cieb-u2-enzyme-action",
      title: "How enzymes work",
      skill: "Explain enzyme catalysis and describe the lock-and-key and induced-fit models.",
      lesson: {
        sections: [
          {
            heading: "Catalysis",
            body: "Enzymes are protein catalysts — they lower the activation energy needed for a reaction, so more collisions have enough energy. They are unchanged at the end and are specific to their substrate.",
          },
          {
            heading: "Models",
            body: "- **Lock and key**: substrate fits the active site exactly (complementary shape).\n- **Induced fit**: active site reshapes slightly around the substrate for a tighter fit — the modern accepted model.",
          },
          {
            heading: "Naming enzymes",
            body: "Enzyme names usually end in **-ase** and describe the substrate: lactase → lactose, amylase → starch.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does an enzyme only work on one type of substrate?",
          solution: "The active site has a complementary shape to its specific substrate; other molecules cannot bind.",
        },
      },
      questions: [
        {
          id: "cieb-u2-enzyme-action-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of the active site?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where the substrate binds" },
              { id: "b", text: "Where the enzyme is destroyed" },
              { id: "c", text: "The enzyme's DNA" },
              { id: "d", text: "Where products are stored" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active site", statement: "Binding site for the substrate." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{substrate binding}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Where the substrate binds",
            commonErrors: ["Confusing active site with active transport."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two properties of enzymes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme properties", statement: "Protein catalysts; specific; unchanged/reusable." },
            ],
            steps: [
              { reasoning: "Give two valid properties.", working: "\\text{catalyst, specific, reusable}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They are protein catalysts, are specific to their substrate, and are not used up (reusable).",
            commonErrors: ["Saying enzymes are used up during the reaction."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an enzyme catalyses a reaction using the induced-fit model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Induced fit", statement: "Active site changes shape to fit substrate tightly." },
            ],
            steps: [
              { reasoning: "Substrate enters active site.", working: "\\text{binding}", marks: 1, markCode: "M" },
              { reasoning: "Active site reshapes around substrate.", working: "\\text{shape change}", marks: 1, markCode: "M" },
              { reasoning: "Reaction occurs; products released.", working: "\\text{products released}", marks: 1, markCode: "M" },
              { reasoning: "Enzyme unchanged for reuse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The substrate binds to the active site, which reshapes to fit it; the reaction proceeds and products are released, leaving the enzyme unchanged.",
            commonErrors: ["Describing lock-and-key when asked for induced fit."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of pH on amylase activity using starch and iodine.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how you would measure enzyme activity in this experiment.", marks: 2 },
            { label: "c", prompt: "Explain why temperature should be kept constant.", marks: 2 },
            { label: "d", prompt: "Predict the shape of a graph of rate of reaction against pH.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Enzyme experiment", statement: "Vary pH; measure time for starch to disappear (iodine stays brown)." },
              { kind: "property", name: "pH effect", statement: "Bell-shaped curve: optimum near neutral; denaturation at extremes." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: pH. Dependent: rate/time for starch digestion.", working: "\\text{pH vs rate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Test iodine periodically; time until it stays brown.", working: "\\text{iodine tests}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shorter time = higher activity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Temperature affects rate independently of pH.", working: "\\text{confounding variable}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Keeping it constant isolates pH effect.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Bell-shaped curve rising to optimum.", working: "\\text{rise to optimum}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Falling steeply at extreme pH (denaturation).", working: "\\text{fall at extremes}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Name optimum pH (~7 for amylase).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pH / rate or time (b) iodine tests until brown (c) confounding variable (d) bell curve, optimum ~pH 7",
            commonErrors: ["In (b) measuring product formed — starch disappearing is the standard method."],
          },
        },
      ],
    },
    {
      id: "cieb-u2-enzyme-factors",
      title: "Factors affecting enzyme activity",
      skill: "Explain the effects of temperature and pH on enzyme activity and describe denaturation.",
      lesson: {
        sections: [
          {
            heading: "Temperature",
            body: "- Rate increases up to the optimum (~37°C in humans) as molecules move faster and collide more.\n- Beyond optimum, bonds in the protein break → **denaturation** → active site deforms permanently → rate drops to zero.\n- Low temperature: slow but reversible (not denatured).",
          },
          {
            heading: "pH",
            body: "Each enzyme has an optimum pH (amylase ~7, pepsin ~2). Extreme pH changes the charges on amino acids → active site shape lost → denaturation. Unlike temperature, pH denaturation can sometimes be reversed if pH restored quickly.",
          },
          {
            heading: "Other factors",
            body: "Substrate concentration (rate rises then plateaus at saturation — all active sites occupied), enzyme concentration.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does boiling an enzyme stop its activity permanently?",
          solution: "Heat breaks the bonds holding the protein's 3D shape; the active site is deformed and cannot bind substrate — denaturation is irreversible.",
        },
      },
      questions: [
        {
          id: "cieb-u2-enzyme-factors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to an enzyme at very high temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It denatures — active site loses shape" },
              { id: "b", text: "It works faster forever" },
              { id: "c", text: "It becomes a substrate" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Denaturation", statement: "High temp/pH deforms active site permanently." },
            ],
            steps: [
              { reasoning: "Recall the effect.", working: "\\text{denaturation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It denatures",
            commonErrors: ["Saying activity stops but enzyme can recover — heat denaturation is irreversible."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the optimum temperature for human enzymes and explain why rate falls above it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature effect", statement: "Optimum ~37°C; above → denaturation." },
            ],
            steps: [
              { reasoning: "State optimum.", working: "\\sim 37^\\circ\\text{C}", marks: 1, markCode: "M" },
              { reasoning: "Explain denaturation above optimum.", working: "\\text{active site deforms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "~37°C; above this, increased vibration breaks bonds in the protein so the active site loses its shape (denaturation).",
            commonErrors: ["Saying 'enzyme dies' — enzymes are not alive."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between the effect of low temperature and high temperature on enzyme activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Temp comparison", statement: "Low temp: slower collisions, reversible. High temp: denaturation, irreversible." },
            ],
            steps: [
              { reasoning: "Low temp effect: fewer collisions, lower rate.", working: "\\text{slow, reversible}", marks: 1, markCode: "M" },
              { reasoning: "High temp effect: bonds break → denaturation.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { reasoning: "Compare reversibility.", working: "\\text{low reversible, high not}", marks: 1, markCode: "M" },
              { reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low temperature only slows collisions (reversible on warming); high temperature denatures the enzyme permanently by breaking the bonds maintaining its shape.",
            commonErrors: ["Saying both denature."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The rate of an enzyme reaction is measured at different substrate concentrations.",
          parts: [
            { label: "a", prompt: "Describe and explain the shape of the graph of rate against substrate concentration.", marks: 4 },
            { label: "b", prompt: "Explain what is meant by 'enzyme saturation'.", marks: 2 },
            { label: "c", prompt: "State two ways to increase the rate at saturation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Saturation", statement: "All active sites occupied → rate limited by enzyme amount." },
            ],
            steps: [
              { part: "a", reasoning: "Rate rises linearly at low substrate (more collisions).", working: "\\text{linear rise}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Plateau at high substrate (all sites occupied).", working: "\\text{plateau}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explain rise: more substrate → more enzyme–substrate complexes.", working: "\\text{more complexes}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explain plateau: saturation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Define: all active sites occupied at any instant.", working: "\\text{all sites full}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Further substrate can't increase rate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Increase enzyme concentration.", working: "\\text{more enzyme}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or increase temperature (up to optimum).", working: "\\text{temperature}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State two clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) linear rise then plateau at saturation (b) all active sites occupied (c) more enzyme / higher temperature",
            commonErrors: ["In (a) drawing a curve that keeps rising — it plateaus."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u2-enzymes-notes",
      title: "Enzymes — revision notes",
      summary: "Enzyme action, induced fit, and effects of temperature and pH.",
      sections: [
        {
          heading: "Key ideas",
          body: "Enzymes = protein catalysts, specific to substrate via complementary active site. Induced fit: site reshapes around substrate. Enzyme unchanged after reaction.",
        },
        {
          heading: "Factors",
          body: "Temperature: faster to optimum (~37°C), then denaturation. pH: optimum varies (amylase ~7, pepsin ~2); extremes denature. Substrate: rate plateaus at saturation.",
        },
        {
          heading: "Exam technique",
          body: "- 'Denaturation' = permanent loss of active-site shape; always link to shape.\n- Low temperature slows but does NOT denature; only extreme heat/pH does.\n- For experiments: state variables, controls, and describe the measurement method.",
        },
      ],
    },
  ],
};
