import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olbio-u2-lesson-2-2",
  code: "2-2",
  title: "Enzymes",
  goal: "I CAN explain enzyme action, the lock-and-key and induced-fit models, and describe how temperature and pH affect enzyme activity.",
  standards: ["5090 2.4"],
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
      id: "olbio-u2-enzyme-action",
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
          id: "olbio-u2-enzyme-action-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of the active site?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enzyme's DNA" },
              { id: "b", text: "Where the enzyme is destroyed" },
              { id: "c", text: "Where the substrate binds" },
              { id: "d", text: "Where products are stored" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active site", statement: "Binding site for the substrate." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{substrate binding}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Where the substrate binds",
            commonErrors: ["Confusing active site with active transport."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q2",
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
          id: "olbio-u2-enzyme-action-q3",
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
          id: "olbio-u2-enzyme-action-q4",
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
        {
          id: "olbio-u2-enzyme-action-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Enzymes are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbohydrates" },
              { id: "b", text: "Vitamins" },
              { id: "c", text: "Protein catalysts" },
              { id: "d", text: "Lipids" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enzyme", statement: "Protein catalyst that speeds up reactions without being used up." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{protein catalyst}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Protein catalysts",
            commonErrors: ["Choosing vitamin — vitamins are not catalysts for metabolism in this sense."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The active site of an enzyme is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The part that gives the enzyme its colour" },
              { id: "b", text: "Where the enzyme is made" },
              { id: "c", text: "Where the substrate binds" },
              { id: "d", text: "Where products are stored" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active site", statement: "Region where the substrate binds and the reaction occurs." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{substrate binds}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Where the substrate binds",
            commonErrors: ["Confusing with active transport proteins."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the induced-fit model of enzyme action, what happens to the active site when the substrate binds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It changes shape slightly to fit the substrate more tightly" },
              { id: "b", text: "It becomes the substrate" },
              { id: "c", text: "It stays exactly the same shape" },
              { id: "d", text: "It is destroyed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Induced fit", statement: "Active site reshapes slightly around the substrate for a tighter fit." },
            ],
            steps: [
              { reasoning: "Recall the model.", working: "\\text{shape change}", marks: 1, markCode: "M" },
              { reasoning: "State the tighter fit.", working: "\\text{tighter fit}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It changes shape slightly to fit the substrate more tightly",
            commonErrors: ["Choosing 'stays the same' — that describes lock-and-key."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reaction mixture contains 5000 substrate molecules and 50 enzyme molecules. Calculate how many substrate molecules there are per enzyme molecule.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Substrate:enzyme ratio", statement: "Ratio = substrate molecules / enzyme molecules." },
            ],
            steps: [
              { reasoning: "Divide substrate count by enzyme count.", working: "\\frac{5000}{50} = 100", marks: 1, markCode: "M" },
              { reasoning: "State the ratio.", working: "100 \\text{ per enzyme}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 substrate molecules per enzyme",
            commonErrors: ["Dividing in the wrong direction — substrate per enzyme, not enzyme per substrate."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An enzyme's maximum reaction rate is 60 units per minute. At 15°C the measured rate is 15 units per minute and at 30°C it is 45 units per minute. (a) Calculate the rate at 15°C as a percentage of the maximum. (b) Calculate the rate at 30°C as a percentage of the maximum.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25, unit: "%" },
              { label: "b", answer: 75, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of maximum", statement: "Percentage = measured rate / maximum rate x 100." },
            ],
            steps: [
              { reasoning: "15°C: 15/60 x 100 = 25%.", working: "\\frac{15}{60} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "30°C: 45/60 x 100 = 75%.", working: "\\frac{45}{60} \\times 100 = 75\\%", marks: 1, markCode: "M" },
              { reasoning: "State both percentages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25%; (b) 75%",
            commonErrors: ["Dividing maximum by measured — percentage of maximum means measured/maximum."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reaction has an activation energy of 80 kJ mol$^{-1}$ without an enzyme and 40 kJ mol$^{-1}$ with the enzyme. Calculate the percentage reduction in activation energy.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme action", statement: "Enzymes lower activation energy so more collisions can react." },
            ],
            steps: [
              { reasoning: "Reduction = 80 - 40 = 40 kJ mol$^{-1}$; percentage = 40/80 x 100.", working: "\\frac{40}{80} \\times 100 = 50\\%", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50% reduction",
            commonErrors: ["Giving the difference (40) instead of the percentage reduction."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The enzyme lactase acts on which substrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipid" },
              { id: "b", text: "Starch" },
              { id: "c", text: "Lactose" },
              { id: "d", text: "Protein" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme naming", statement: "Enzyme names end in -ase and indicate the substrate — lactase acts on lactose." },
            ],
            steps: [
              { reasoning: "Match the name to the substrate.", working: "\\text{lactase} \\to \\text{lactose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Lactose",
            commonErrors: ["Choosing starch — that would be amylase."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'substrate'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Substrate", statement: "The molecule an enzyme acts upon." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{molecule acted on}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The molecule that an enzyme acts upon and binds to in its active site.",
            commonErrors: ["Confusing substrate with product — product is what is formed."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an enzyme only works on one type of substrate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme specificity", statement: "Active site shape is complementary to one substrate only." },
            ],
            steps: [
              { reasoning: "Active site has a specific shape.", working: "\\text{specific shape}", marks: 1, markCode: "M" },
              { reasoning: "Complementary to its substrate.", working: "\\text{complementary}", marks: 1, markCode: "M" },
              { reasoning: "Other molecules cannot fit/bind.", working: "\\text{cannot bind}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: one enzyme–one substrate (lock and key / induced fit).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The active site has a complementary shape to only one substrate; other molecules cannot bind, so each enzyme is specific to its substrate.",
            commonErrors: ["Saying 'enzymes are too small' — specificity is about shape."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a property of enzymes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are proteins" },
              { id: "b", text: "They are specific to a substrate" },
              { id: "c", text: "They act as catalysts" },
              { id: "d", text: "They are used up in the reaction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme properties", statement: "Enzymes are protein catalysts, specific and reusable." },
            ],
            steps: [
              { reasoning: "Identify the false statement.", working: "\\text{reusable}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** They are used up in the reaction",
            commonErrors: ["Thinking enzymes are consumed — they are regenerated unchanged."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the lock-and-key and induced-fit models of enzyme action.",
          parts: [
            { label: "a", prompt: "Describe the lock-and-key model.", marks: 2 },
            { label: "b", prompt: "Describe the induced-fit model and state which is the accepted modern model.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Enzyme models", statement: "Lock-and-key: exact fit. Induced fit: active site reshapes; the accepted model." },
            ],
            steps: [
              { part: "a", reasoning: "Substrate fits active site exactly like a key in a lock.", working: "\\text{exact fit}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complementary shapes required.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Active site changes shape slightly around substrate.", working: "\\text{shape change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gives tighter fit and better catalysis.", working: "\\text{tighter}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Induced fit is the accepted model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) substrate fits active site exactly (b) active site reshapes for tighter fit; induced fit is the accepted model",
            commonErrors: ["Saying lock-and-key is the modern model — induced fit replaced it."],
          },
        },
        {
          id: "olbio-u2-enzyme-action-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how enzymes act as efficient biological catalysts.",
          parts: [
            { label: "a", prompt: "Explain how enzymes lower activation energy.", marks: 3 },
            { label: "b", prompt: "Explain why enzymes do not need to be replaced.", marks: 2 },
            { label: "c", prompt: "Explain the advantage of enzyme specificity for metabolism.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme catalysis", statement: "Lower Ea → more successful collisions; enzyme unchanged and reusable; specificity allows controlled reactions." },
            ],
            steps: [
              { part: "a", reasoning: "Enzyme binds substrate in active site.", working: "\\text{binding}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stabilises transition state / alternative pathway.", working: "\\text{transition state}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower Ea → more collisions have enough energy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Enzyme is unchanged after reaction.", working: "\\text{unchanged}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Can be reused many times.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only the correct substrate binds — controlled reactions.", working: "\\text{controlled}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Prevents unwanted side reactions.", working: "\\text{no side reactions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Allows sequential metabolic pathways.", working: "\\text{pathways}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation of efficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lowers activation energy → more successful collisions (b) enzyme unchanged, reusable (c) specificity gives controlled, efficient metabolism",
            commonErrors: ["Saying enzymes are 'used up' — they are catalysts and are regenerated."],
          },
        },
      ],
    },
    {
      id: "olbio-u2-enzyme-factors",
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
          id: "olbio-u2-enzyme-factors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to an enzyme at very high temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It becomes a substrate" },
              { id: "b", text: "It denatures — active site loses shape" },
              { id: "c", text: "Nothing changes" },
              { id: "d", text: "It works faster forever" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Denaturation", statement: "High temp/pH deforms active site permanently." },
            ],
            steps: [
              { reasoning: "Recall the effect.", working: "\\text{denaturation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It denatures",
            commonErrors: ["Saying activity stops but enzyme can recover — heat denaturation is irreversible."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q2",
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
          id: "olbio-u2-enzyme-factors-q3",
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
          id: "olbio-u2-enzyme-factors-q4",
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
        {
          id: "olbio-u2-enzyme-factors-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The optimum temperature for most human enzymes is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20^\\circ$C" },
              { id: "b", text: "$37^\\circ$C" },
              { id: "c", text: "$100^\\circ$C" },
              { id: "d", text: "$0^\\circ$C" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Optimum temperature", statement: "Human enzymes work fastest at body temperature ~37°C." },
            ],
            steps: [
              { reasoning: "Recall body temperature.", working: "37^\\circ\\text{C}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $37^\\circ$C",
            commonErrors: ["Choosing 100°C — that would denature the enzyme."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Denaturation of an enzyme is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A permanent change in shape that destroys the active site" },
              { id: "b", text: "A temporary slowing of the reaction" },
              { id: "c", text: "The release of products" },
              { id: "d", text: "The binding of substrate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denaturation", statement: "Permanent loss of enzyme shape/active site at extreme pH or temperature." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{permanent shape loss}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A permanent change in shape that destroys the active site",
            commonErrors: ["Calling it temporary — denaturation is permanent."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pepsin, a protease in the stomach, has an optimum pH of about 2. What does this tell you about its environment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It works best at pH 7" },
              { id: "b", text: "pH does not affect it" },
              { id: "c", text: "It works best in alkaline conditions" },
              { id: "d", text: "It works best in acidic conditions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH optimum", statement: "Each enzyme has an optimum pH; pepsin ~2 suits the acidic stomach." },
            ],
            steps: [
              { reasoning: "Interpret pH 2 on the scale.", working: "\\text{pH} < 7 = \\text{acid}", marks: 1, markCode: "M" },
              { reasoning: "Match to stomach conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It works best in acidic conditions",
            commonErrors: ["Thinking all enzymes prefer pH 7 — optima vary."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An enzyme's rate at its optimum temperature is 80 units per minute. At a lower temperature the rate is 20 units per minute. Calculate the rate at the lower temperature as a percentage of the optimum rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of optimum", statement: "Percentage = rate / optimum rate x 100." },
            ],
            steps: [
              { reasoning: "Divide and multiply by 100.", working: "\\frac{20}{80} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Amylase has an optimum pH of about 7 and pepsin about 2. (a) Calculate the difference between their optimum pH values. (b) Calculate the pH midway between the two optima.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "pH units" },
              { label: "b", answer: 4.5, unit: "pH units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH optima", statement: "Amylase ~pH 7 (neutral), pepsin ~pH 2 (acidic)." },
            ],
            steps: [
              { reasoning: "Difference: 7 - 2 = 5.", working: "7 - 2 = 5", marks: 1, markCode: "M" },
              { reasoning: "Midpoint: (7 + 2)/2 = 4.5.", working: "\\frac{7+2}{2} = 4.5", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "5 \\text{ and } 4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 pH units; (b) pH 4.5",
            commonErrors: ["In (b) adding without dividing by 2."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "An enzyme's maximum rate is 50 units per minute. At a pH far from its optimum, the rate falls to 20% of maximum. Calculate the rate at that pH.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "units min^{-1}" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate at percentage", statement: "Rate = maximum rate x percentage / 100." },
            ],
            steps: [
              { reasoning: "Calculate 20% of 50.", working: "0.20 \\times 50 = 10", marks: 1, markCode: "M" },
              { reasoning: "State the rate with units.", working: "10 \\text{ units min}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 units min$^{-1}$",
            commonErrors: ["Multiplying by 20 instead of 0.20 — percentage must be a fraction."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does the rate of an enzyme reaction plateau at high substrate concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enzyme denatures" },
              { id: "b", text: "The substrate runs out" },
              { id: "c", text: "Products stop being released" },
              { id: "d", text: "All active sites are occupied — the enzyme is saturated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Saturation", statement: "At high substrate all active sites are occupied; rate limited by enzyme amount." },
            ],
            steps: [
              { reasoning: "Recall the plateau explanation.", working: "\\text{saturation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** All active sites are occupied — the enzyme is saturated",
            commonErrors: ["Saying substrate runs out — substrate is in excess at the plateau."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'optimum' in relation to enzyme activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Optimum", statement: "The pH/temperature at which an enzyme works fastest." },
            ],
            steps: [
              { reasoning: "Give the core idea: fastest rate.", working: "\\text{fastest}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The conditions (pH or temperature) at which an enzyme works at its maximum rate.",
            commonErrors: ["Saying 'where it denatures' — optimum is where it works best, not worst."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the rate of an enzyme reaction falls when temperature rises above the optimum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature denaturation", statement: "Above optimum, heat breaks bonds maintaining protein shape → active site deforms." },
            ],
            steps: [
              { reasoning: "Below optimum, more heat = faster collisions.", working: "\\text{faster collisions}", marks: 1, markCode: "M" },
              { reasoning: "Above optimum, bonds in the protein break.", working: "\\text{bonds break}", marks: 1, markCode: "M" },
              { reasoning: "Active site loses its shape (denaturation).", working: "\\text{active site lost}", marks: 1, markCode: "M" },
              { reasoning: "Substrate can no longer bind → rate falls to zero.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Above the optimum, increased vibration breaks the bonds maintaining the enzyme's 3D shape; the active site deforms permanently (denaturation) so substrate cannot bind and the rate falls.",
            commonErrors: ["Saying 'enzyme slows down' — it is denatured permanently."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the effect of low (but not freezing) temperature on enzyme activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate slows but the enzyme is not denatured" },
              { id: "b", text: "No effect at all" },
              { id: "c", text: "Rate increases" },
              { id: "d", text: "The enzyme denatures permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Low temperature", statement: "Slows collisions → lower rate, but reversible on warming; no denaturation." },
            ],
            steps: [
              { reasoning: "Recall the effect.", working: "\\text{slow, reversible}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Rate slows but the enzyme is not denatured",
            commonErrors: ["Saying it denatures — low temperature does not break bonds."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how pH affects enzyme activity.",
          parts: [
            { label: "a", prompt: "Explain why each enzyme has a different optimum pH.", marks: 2 },
            { label: "b", prompt: "Explain what happens at pH extremes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "pH effect", statement: "Optimum pH matches the enzyme's environment; extremes alter charges → denaturation." },
            ],
            steps: [
              { part: "a", reasoning: "Active site shape depends on pH-sensitive charges.", working: "\\text{charges}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each enzyme evolved for its environment (e.g. pepsin in stomach).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Extreme pH changes charges on amino acids.", working: "\\text{charge change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Active site shape is lost → denaturation.", working: "\\text{denature}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rate falls to zero; sometimes reversible if pH restored quickly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) optimum pH matches enzyme's environment and charge-sensitive active site (b) extremes change amino acid charges → denaturation",
            commonErrors: ["Saying pH 'kills' the enzyme like heat — pH denaturation can sometimes be reversed."],
          },
        },
        {
          id: "olbio-u2-enzyme-factors-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of temperature on amylase activity by measuring how long starch takes to disappear using iodine tests.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how enzyme activity is measured in this experiment.", marks: 2 },
            { label: "c", prompt: "Predict and explain the shape of a graph of rate against temperature.", marks: 3 },
            { label: "d", prompt: "Suggest one control variable and explain why it must be controlled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Enzyme temperature experiment", statement: "Vary temperature; time for starch disappearance = inverse of rate; bell-shaped curve." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: temperature.", working: "\\text{temperature}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent: time for starch to disappear / rate of digestion.", working: "\\text{time/rate}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Test with iodine periodically until it stays brown.", working: "\\text{iodine tests}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shorter time = higher activity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate rises to optimum ~37°C then falls.", working: "\\text{rise then fall}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rise: faster collisions; fall: denaturation.", working: "\\text{collisions/denaturation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shape is bell-like (or asymmetric peak).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control: pH (or substrate concentration).", working: "\\text{pH}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Keeps conditions constant so only temperature varies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temperature / time or rate (b) iodine tests until brown (c) rises to ~37°C then falls as enzyme denatures (d) e.g. pH kept constant",
            commonErrors: ["In (c) expecting rate to keep rising — denaturation causes the fall."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u2-enzymes-notes",
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
