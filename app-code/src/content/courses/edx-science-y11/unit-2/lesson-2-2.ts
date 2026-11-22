import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "esc11-u2-lesson-2-2",
  code: "2-2",
  title: "Rates of Reaction",
  goal: "I CAN explain and calculate factors affecting reaction rates.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Chemistry (Y11)"],
  vocabulary: [
    {
      term: "Rate of reaction",
      definition: "Speed at which reactants are used up or products formed.",
    },
    {
      term: "Collision theory",
      definition:
        "Reactions occur when particles collide with sufficient energy (activation energy).",
    },
    {
      term: "Activation energy",
      definition: "Minimum energy needed for reaction to occur.",
    },
    {
      term: "Catalyst",
      definition:
        "Substance speeding reaction without being consumed — lowers activation energy.",
    },
  ],
  concepts: [
    {
      id: "esc11-u2-rates",
      title: "Factors Affecting Rate",
      skill:
        "Explain how concentration, temperature, surface area and catalysts affect rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Reactions need particles to **collide** with energy ≥ activation energy. More collisions = faster rate. **Frequency** of collisions depends on: concentration (more particles per volume), temperature (particles move faster → more frequent + more energetic collisions), surface area (smaller pieces = more exposed surface).\n\n**Catalysts** provide alternative pathway with lower activation energy — more collisions succeed. Enzymes are biological catalysts. Catalysts speed BOTH forward and reverse equally — don't change equilibrium position.",
          },
          {
            heading: "Measuring rate",
            body: "**Methods**: gas syringe (volume vs time — steepest = fastest), mass loss (carbonate + acid → CO₂ escapes), colour change (disappearing cross/timing), precipitation/cloudiness.\n\n**Rate calculations**: rate = change in quantity ÷ time. Graphs: steep gradient = fast; horizontal = finished. Arrhenius equation links temperature to rate (advanced). Practical factors: control variables — same mass, same concentration, same temperature.",
          },
        ],
        keyFormulas: [
          {
            name: "Rate",
            statement:
              "rate = quantity change ÷ time; collision theory explains factors.",
          },
          {
            name: "Catalyst",
            statement:
              "Lowers activation energy — speeds both directions equally.",
          },
        ],
        workedExample: {
          problem: "Why does powdered CaCO₃ react faster with acid than lumps?",
          solution:
            "Powder = larger surface area → more collisions per second → faster rate.",
        },
      },
      questions: [
        {
          id: "esc11-u2-rates-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a catalyst do to a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raises temperature" },
              { id: "b", text: "Lowers activation energy" },
              { id: "c", text: "Increases products" },
              { id: "d", text: "Is consumed in reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catalyst",
                statement: "Lowers activation energy — not consumed.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst lowers activation energy.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Lowers activation energy",
            commonErrors: ["Catalyst consumed view."],
          },
        },
        {
          id: "esc11-u2-rates-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing temperature speeds up a reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature & rate",
                statement:
                  "Higher T = faster particles = more frequent + more energetic collisions.",
              },
            ],
            steps: [
              {
                reasoning: "Particles move faster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More collisions per second.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More collisions exceed activation energy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Higher T → faster particles → more frequent collisions + more exceed activation energy → faster rate.",
            commonErrors: ["Only frequency cited.", "No energy link."],
          },
        },
        {
          id: "esc11-u2-rates-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an experiment to compare rates of two acids on magnesium ribbon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate experiment",
                statement: "Control variables; measure gas volume or time.",
              },
            ],
            steps: [
              {
                reasoning: "Same mass/length Mg ribbon each.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Same concentration + volume acid.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Measure H₂ volume via gas syringe OR time to finish.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Repeat for reliability; compare rates.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Control Mg mass, acid concentration/volume; measure gas volume vs time or time to completion; repeat.",
            commonErrors: ["No controls.", "Vague measurement."],
          },
        },
        {
          id: "esc11-u2-rates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mg + 2HCl → MgCl₂ + H₂. 0.24 g Mg reacts completely.",
          parts: [
            {
              label: "a",
              prompt: "Calculate moles of Mg (Ar Mg=24).",
              marks: 2,
            },
            { label: "b", prompt: "Predict moles of H₂ produced.", marks: 2 },
            {
              label: "c",
              prompt: "Explain how you'd measure the rate.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles",
                statement: "n = mass ÷ Mr; equation ratio 1:1 Mg:H₂.",
              },
            ],
            steps: [
              {
                reasoning: "(a) n = 0.24 ÷ 24 = 0.01 mol.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 0.01 mol H₂ (1:1 ratio).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) Gas syringe measures H₂ volume vs time.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "(c) Steepest gradient = fastest rate.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 0.01 mol (b) 0.01 mol (c) gas syringe, gradient = rate",
            commonErrors: ["Wrong ratio.", "No measurement method."],
          },
        },
      ],
    },
    {
      id: "esc11-u2-enzyme",
      title: "Enzymes as Biological Catalysts",
      skill:
        "Describe enzyme action, specificity and factors affecting activity.",
      lesson: {
        sections: [
          {
            heading: "Enzyme action",
            body: "**Enzymes**: protein catalysts — lower activation energy like chemical catalysts but highly specific. **Active site**: region where substrate binds — lock-and-key or induced-fit model. Enzyme-substrate complex → products released, enzyme unchanged/reusable.\n\n**Specificity**: each enzyme one substrate type — amylase→starch, lactase→lactose, catalase→H₂O₂. Shape determines function. **Naming**: -ase suffix (lipase, protease, DNA polymerase).",
          },
          {
            heading: "Factors affecting enzymes",
            body: "**Temperature**: rate increases to optimum (~37°C human) then denatures — shape changes permanently. **pH**: optimum varies — pepsin ~2 (stomach), trypsin ~8 (small intestine). Extreme pH denatures.\n\n**Substrate concentration**: rate rises then plateaus — all active sites occupied (saturation). **Inhibitors**: competitive (block active site), non-competitive (change shape). Industrial uses: pectinase juice, protease/lipase detergents, lactase lactose-free milk.",
          },
        ],
        keyFormulas: [
          {
            name: "Lock and key",
            statement:
              "Substrate fits active site like key in lock — specific shape match.",
          },
          {
            name: "Optimum",
            statement: "Rate max at optimum temp/pH; extremes denature enzyme.",
          },
        ],
        workedExample: {
          problem: "Why does enzyme activity stop at high temperature?",
          solution:
            "Heat breaks bonds holding shape → active site deforms → substrate can't bind → denatured permanently.",
        },
      },
      questions: [
        {
          id: "esc11-u2-enzyme-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'active site' of an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where products leave" },
              { id: "b", text: "Where substrate binds" },
              { id: "c", text: "A temperature sensor" },
              { id: "d", text: "The enzyme's nucleus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active site",
                statement: "Region where substrate binds — specific shape.",
              },
            ],
            steps: [
              {
                reasoning: "Active site binds substrate.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Where substrate binds",
            commonErrors: ["Any part assumed."],
          },
        },
        {
          id: "esc11-u2-enzyme-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does amylase not digest protein?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme specificity",
                statement: "Active site shape matches only specific substrate.",
              },
            ],
            steps: [
              {
                reasoning: "Active site shape specific to starch.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protein shape doesn't fit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No binding → no reaction.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Amylase active site only fits starch molecules — protein can't bind → no digestion.",
            commonErrors: ["Enzymes universal view.", "No shape link."],
          },
        },
        {
          id: "esc11-u2-enzyme-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why biological washing powders work at low temperatures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme detergents",
                statement:
                  "Enzymes work at low temps — save energy, gentle on fabrics.",
              },
            ],
            steps: [
              {
                reasoning: "Enzymes active at ~30-40°C.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No boiling needed — energy saving.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protease/lipase digest stains specifically.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gentler on fabrics than harsh chemicals.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Enzymes digest stains at low temps — saves energy, gentle on clothes, effective cleaning.",
            commonErrors: ["Only 'eco-friendly' view.", "No mechanism."],
          },
        },
        {
          id: "esc11-u2-enzyme-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Amylase breaks starch into maltose. Rate measured at different temperatures.",
          parts: [
            {
              label: "a",
              prompt: "Sketch/describe expected rate vs temperature graph.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the shape using enzyme theory.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme temp profile",
                statement:
                  "Rate rises to optimum ~37°C then drops to zero (denaturation).",
              },
            ],
            steps: [
              {
                reasoning: "(a) Rises steeply to optimum then falls sharply.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Zero beyond denaturation temperature.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Higher T → more collisions → faster rate.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Beyond optimum → bonds break → shape changes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Denatured = active site deformed → no substrate binding.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) rise-optimum-fall-to-zero (b) collisions speed then denaturation stops",
            commonErrors: ["Linear increase assumed.", "No denaturation."],
          },
        },
      ],
    },
  ],
};
