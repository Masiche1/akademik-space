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
        {
          id: "cieb-u2-enzyme-action-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Enzymes are made of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA only" },
              { id: "b", text: "Lipid" },
              { id: "c", text: "Protein" },
              { id: "d", text: "Carbohydrate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme composition", statement: "Enzymes are protein catalysts." },
            ],
            steps: [
              { reasoning: "Recall what enzymes are made of.", working: "\\text{protein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Protein",
            commonErrors: ["Choosing DNA — DNA codes for enzymes but enzymes themselves are proteins."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The substrate of an enzyme binds to its:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active site" },
              { id: "b", text: "Cell membrane" },
              { id: "c", text: "Ribosome" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active site", statement: "Region where substrate binds." },
            ],
            steps: [
              { reasoning: "Recall the binding site.", working: "\\text{active site}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Active site",
            commonErrors: ["Choosing nucleus — enzymes act in cytoplasm/organelles, not the nucleus."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An uncatalysed reaction requires an activation energy of 80 kJ/mol. The same reaction with an enzyme requires 40 kJ/mol. Calculate the percentage reduction in activation energy.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Activation energy", statement: "$\\frac{80 - 40}{80} \\times 100 = 50\\%$" },
            ],
            steps: [
              { reasoning: "Find the reduction as a percentage of the original.", working: "\\frac{40}{80} \\times 100 = 50", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by 40 instead of the original 80."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what happens to an enzyme after it has catalysed a reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme reuse", statement: "Enzyme is unchanged and can be reused." },
            ],
            steps: [
              { reasoning: "State the enzyme is unchanged.", working: "\\text{unchanged}", marks: 1, markCode: "M" },
              { reasoning: "State it can be reused.", working: "\\text{reusable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The enzyme is unchanged at the end of the reaction and can catalyse further reactions — it is reusable.",
            commonErrors: ["Saying the enzyme is used up or becomes a product."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an enzyme only catalyses one specific reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme specificity", statement: "Active site shape is complementary to one substrate." },
            ],
            steps: [
              { reasoning: "Active site has a complementary shape to its substrate.", working: "\\text{complementary shape}", marks: 1, markCode: "M" },
              { reasoning: "Only the matching substrate fits (induced fit tightens the fit).", working: "\\text{specific binding}", marks: 1, markCode: "M" },
              { reasoning: "Other molecules cannot bind effectively.", working: "\\text{no binding}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: one enzyme → one reaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The active site has a shape complementary to only its specific substrate; other molecules cannot bind, so each enzyme catalyses only one type of reaction.",
            commonErrors: ["Saying enzymes 'choose' substrates — it is shape complementarity."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the lock-and-key model, the substrate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Binds to any part of the enzyme" },
              { id: "b", text: "Changes the enzyme's shape completely" },
              { id: "c", text: "Fits the active site exactly like a key in a lock" },
              { id: "d", text: "Is destroyed by the enzyme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lock and key", statement: "Substrate fits active site exactly — rigid complementarity." },
            ],
            steps: [
              { reasoning: "Recall the model.", working: "\\text{exact fit}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fits the active site exactly like a key in a lock",
            commonErrors: ["Choosing (b) — that describes induced fit, not lock-and-key."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An enzyme-catalysed reaction produces 20 cm³ of gas in 40 s. Calculate the rate of reaction in cm³/s.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5, unit: "cm³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\frac{\\text{volume}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide volume by time.", working: "\\frac{20}{40} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "0.5 \\text{ cm}^3/\\text{s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 cm³/s",
            commonErrors: ["Multiplying instead of dividing volume by time."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which model of enzyme action is considered more accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random collision" },
              { id: "b", text: "Induced fit" },
              { id: "c", text: "Template theory" },
              { id: "d", text: "Lock and key" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Induced fit", statement: "Active site reshapes around substrate — the accepted modern model." },
            ],
            steps: [
              { reasoning: "Recall which model is current.", working: "\\text{induced fit}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Induced fit",
            commonErrors: ["Choosing lock-and-key — it is the older, simpler model."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two properties of enzymes that make them useful in living cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme properties", statement: "Specific, reusable, work at body temperature, not used up." },
            ],
            steps: [
              { reasoning: "Property 1: specific to substrate.", working: "\\text{specificity}", marks: 1, markCode: "M" },
              { reasoning: "Property 2: reusable/not used up.", working: "\\text{reusable}", marks: 1, markCode: "M" },
              { reasoning: "State both clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzymes are highly specific so only the correct reaction occurs, and they are not used up so a small amount can catalyse many reactions repeatedly.",
            commonErrors: ["Saying enzymes are 'used up' in the reaction."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An enzyme-catalysed reaction proceeds at a rate of 2 products per second. The same reaction without the enzyme proceeds at 0.002 products per second. Calculate how many times faster the enzyme makes the reaction.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate ratio", statement: "$\\frac{2}{0.002} = 1000$" },
            ],
            steps: [
              { reasoning: "Divide the two rates.", working: "2 \\div 0.002 = 1000", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "1000 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 times",
            commonErrors: ["Subtracting the rates instead of finding the ratio."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most enzyme names end in which suffix?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-ose" },
              { id: "b", text: "-ase" },
              { id: "c", text: "-ine" },
              { id: "d", text: "-ate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme naming", statement: "Enzyme names usually end in -ase (lactase, amylase)." },
            ],
            steps: [
              { reasoning: "Recall the suffix.", working: "-\\text{ase}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** -ase",
            commonErrors: ["Choosing -ose — that suffix is for sugars."],
          },
        },
        {
          id: "cieb-u2-enzyme-action-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why enzymes are described as 'biological catalysts'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Biological catalyst", statement: "Protein that speeds reactions, lowers activation energy, unchanged and specific." },
            ],
            steps: [
              { reasoning: "They are proteins that speed up reactions.", working: "\\text{speed up}", marks: 1, markCode: "M" },
              { reasoning: "They lower activation energy.", working: "\\text{lower } E_a", marks: 1, markCode: "M" },
              { reasoning: "They are unchanged/reusable.", working: "\\text{unchanged}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: biological catalysts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzymes are protein molecules produced by living cells that dramatically speed up biochemical reactions by lowering activation energy; they are specific to their substrate and remain unchanged, so they act as reusable biological catalysts.",
            commonErrors: ["Saying enzymes are 'used up' — catalysts are regenerated."],
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
              { id: "a", text: "It works faster forever" },
              { id: "b", text: "It denatures — active site loses shape" },
              { id: "c", text: "It becomes a substrate" },
              { id: "d", text: "Nothing changes" },
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
        {
          id: "cieb-u2-enzyme-factors-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The optimum temperature for most human enzymes is about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "37°C" },
              { id: "b", text: "100°C" },
              { id: "c", text: "0°C" },
              { id: "d", text: "Room temperature only, around 20°C" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Optimum temperature", statement: "Human enzymes work fastest near body temperature ~37°C." },
            ],
            steps: [
              { reasoning: "Recall the optimum.", working: "\\sim 37^\\circ\\text{C}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 37°C",
            commonErrors: ["Choosing 20°C — body temperature is the human optimum."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Denaturation of an enzyme means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The substrate binding more tightly" },
              { id: "b", text: "Permanent loss of the active site's shape" },
              { id: "c", text: "The enzyme being used up" },
              { id: "d", text: "Temporary slowing of the reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denaturation", statement: "Permanent deformation of active site at extreme temp/pH." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{shape lost}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Permanent loss of the active site's shape",
            commonErrors: ["Choosing (b) — slowing is reversible; denaturation is permanent."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "At low temperatures (but above freezing), enzyme activity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slowed but not denatured — reversible on warming" },
              { id: "b", text: "Faster than at optimum" },
              { id: "c", text: "Completely stopped forever" },
              { id: "d", text: "Permanently destroyed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Low temperature", statement: "Slows collisions; reversible — no denaturation." },
            ],
            steps: [
              { reasoning: "Recall the effect of cold.", working: "\\text{slow, reversible}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Slowed but not denatured — reversible on warming",
            commonErrors: ["Confusing cold with heat denaturation."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the optimum pH for amylase and for pepsin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Optimum pH", statement: "Amylase ~7 (neutral); pepsin ~2 (acidic, stomach)." },
            ],
            steps: [
              { reasoning: "Give amylase optimum.", working: "\\sim 7", marks: 1, markCode: "M" },
              { reasoning: "Give pepsin optimum.", working: "\\sim 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amylase ~pH 7 (neutral); pepsin ~pH 2 (acidic).",
            commonErrors: ["Reversing the two — pepsin works in the acidic stomach."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the rate of an enzyme-catalysed reaction rises to a peak and then falls as temperature increases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature effect", statement: "Rate rises to optimum via more collisions; falls after via denaturation." },
            ],
            steps: [
              { reasoning: "Up to optimum: molecules move faster, more collisions.", working: "\\text{more collisions}", marks: 1, markCode: "M" },
              { reasoning: "Peak = optimum temperature.", working: "\\text{optimum}", marks: 1, markCode: "M" },
              { reasoning: "Beyond optimum: bonds break → denaturation.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: rate falls to zero.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "As temperature rises towards the optimum, molecules move faster and collide more often so the rate increases; beyond the optimum the enzyme denatures, the active site loses its shape, and the rate falls sharply.",
            commonErrors: ["Saying the rate 'stops because molecules stop moving' — it is denaturation."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does enzyme activity increase as temperature rises towards the optimum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Molecules move faster and collide more often" },
              { id: "b", text: "The active site changes permanently" },
              { id: "c", text: "More substrate is produced" },
              { id: "d", text: "The enzyme becomes bigger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature & collisions", statement: "Higher temperature → faster molecular movement → more collisions." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{more collisions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Molecules move faster and collide more often",
            commonErrors: ["Choosing (d) — shape change at high temperature is denaturation, a bad thing."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reaction has a rate of 10 units/s at 20°C and 40 units/s at 37°C. Calculate how many times faster it is at 37°C.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate ratio", statement: "$\\frac{40}{10} = 4$" },
            ],
            steps: [
              { reasoning: "Divide the two rates.", working: "40 \\div 10 = 4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "4 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 times",
            commonErrors: ["Subtracting (30) instead of finding the ratio."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how pH affects enzyme activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "pH effect", statement: "Each enzyme has optimum pH; extremes denature via charge changes." },
            ],
            steps: [
              { reasoning: "Each enzyme has its own optimum pH.", working: "\\text{optimum pH}", marks: 1, markCode: "M" },
              { reasoning: "pH changes charges on amino acids in active site.", working: "\\text{charge changes}", marks: 1, markCode: "M" },
              { reasoning: "Active site shape lost → denaturation.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: rate peaks at optimum pH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each enzyme works fastest at its optimum pH; at extremes the charges on amino acids in the active site change, deforming it (denaturation) and stopping the reaction — giving a bell-shaped pH curve.",
            commonErrors: ["Saying all enzymes have the same optimum pH — it varies (amylase ~7, pepsin ~2)."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "When an enzyme reaction is saturated with substrate, increasing substrate concentration further:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Denatures the enzyme" },
              { id: "b", text: "Stops the reaction completely" },
              { id: "c", text: "Does not increase the rate — all active sites are occupied" },
              { id: "d", text: "Doubles the rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Saturation", statement: "All active sites occupied → rate limited by enzyme amount." },
            ],
            steps: [
              { reasoning: "Recall what saturation means.", working: "\\text{all sites full}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Does not increase the rate — all active sites are occupied",
            commonErrors: ["Thinking rate rises forever with substrate — it plateaus."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by 'enzyme saturation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Saturation", statement: "All active sites occupied at any instant; rate limited by enzyme amount." },
            ],
            steps: [
              { reasoning: "Define: all active sites occupied.", working: "\\text{all sites occupied}", marks: 1, markCode: "M" },
              { reasoning: "Consequence: extra substrate cannot raise rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Saturation occurs when every active site is occupied at any instant; adding more substrate cannot increase the rate because there are no free active sites — the rate is then limited by enzyme concentration.",
            commonErrors: ["Saying substrate 'fills up' the enzyme permanently — it is a dynamic equilibrium."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Amylase has an optimum pH of about 7 and pepsin about 2. Calculate the difference between their optimum pH values.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "pH" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH difference", statement: "$7 - 2 = 5$" },
            ],
            steps: [
              { reasoning: "Subtract the two optimum pH values.", working: "7 - 2 = 5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "5 \\text{ pH units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 pH units",
            commonErrors: ["Subtracting in the wrong order and giving −5."],
          },
        },
        {
          id: "cieb-u2-enzyme-factors-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An enzyme works at its optimum rate of 15 units/s. At pH 3 the rate falls to 3 units/s. Calculate the percentage decrease in rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\frac{15 - 3}{15} \\times 100 = 80\\%$" },
            ],
            steps: [
              { reasoning: "Find the decrease as a percentage of the optimum rate.", working: "\\frac{12}{15} \\times 100 = 80", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Dividing by 3 instead of the optimum 15."],
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
