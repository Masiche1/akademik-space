import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ech10-u4-lesson-4-1",
  code: "4-1",
  title: "Titration Technique",
  goal: "I CAN perform accurate titrations and calculate concentrations.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Titration",
      definition: "Accurate volumetric analysis — find unknown concentration.",
    },
    {
      term: "Burette",
      definition:
        "Graduated tube delivering precise volumes — read to 0.05 cm³.",
    },
    {
      term: "Concordant titres",
      definition: "Titres within 0.1 cm³ of each other.",
    },
    {
      term: "Endpoint",
      definition: "Point where reaction complete — indicator colour change.",
    },
  ],
  concepts: [
    {
      id: "ech10-u4-titration",
      title: "Performing Titrations",
      skill: "Carry out titrations accurately and process results.",
      lesson: {
        sections: [
          {
            heading: "Apparatus and technique",
            body: "**Apparatus**: burette (unknown acid/alkali), pipette + filler (known volume of other), conical flask, white tile (see colour change), indicator (phenolphthalein/methyl orange).\n\n**Steps**: rinse burette with solution → fill above zero → remove funnel → note initial reading (eye level, bottom of meniscus) → pipette known volume into flask + indicator → add burette solution while swirling → near endpoint add dropwise → record final reading. **Concordant titres** within 0.1 cm³ — average them.",
          },
          {
            heading: "Calculations",
            body: "**Moles** = concentration × volume (dm³). At endpoint: moles acid = moles base (1:1). Calculate unknown concentration = moles ÷ volume.\n\n**Errors**: air bubbles in burette tip, parallax (read at angle), overshooting endpoint, unwashed apparatus (contamination), wrong indicator (endpoint ≠ neutralisation point for some).",
          },
        ],
        keyFormulas: [
          {
            name: "Titration calculation",
            statement: "n = c × V; endpoint moles equal for 1:1.",
          },
          {
            name: "Concordance",
            statement: "Titres within 0.1 cm³ — average them.",
          },
        ],
        workedExample: {
          problem:
            "25.0 cm³ NaOH needs 20.0 cm³ of 0.100 mol/dm³ HCl. Find NaOH concentration.",
          solution:
            "n(HCl) = 0.100 × 0.020 = 0.002 mol; n(NaOH) = 0.002; c = 0.002/0.025 = 0.080 mol/dm³.",
        },
      },
      questions: [
        {
          id: "ech10-u4-titration-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where should the burette be read?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From above" },
              { id: "b", text: "From below" },
              { id: "c", text: "Any angle" },
              { id: "d", text: "At eye level" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Meniscus reading",
                statement: "Read at eye level — bottom of meniscus.",
              },
            ],
            steps: [
              { reasoning: "Eye level reading.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** At eye level",
            commonErrors: ["Parallax error."],
          },
        },
        {
          id: "ech10-u4-titration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are concordant titres?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Concordant titres",
                statement: "Within 0.1 cm³ — reliable, average them.",
              },
            ],
            steps: [
              {
                reasoning: "Titres within 0.1 cm³.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows technique is consistent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Average concordant titres for calculation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Titres within 0.1 cm³ of each other — average for reliable result.",
            commonErrors: ["Any close values.", "No averaging."],
          },
        },
        {
          id: "ech10-u4-titration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's titres are 24.8, 25.0, 25.2, 28.5 cm³. How should they be processed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anomalous titre",
                statement:
                  "28.5 is anomalous — investigate, exclude if error confirmed.",
              },
            ],
            steps: [
              {
                reasoning: "28.5 differs by >0.2 — anomaly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Check for procedural error (air bubble, overshoot).",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Average concordant 24.8-25.2 ≈ 25.0 cm³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Note anomaly in evaluation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Exclude/investigate 28.5; average concordant ≈25.0 cm³; note in evaluation.",
            commonErrors: ["Average all four.", "No anomaly check."],
          },
        },
        {
          id: "ech10-u4-titration-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "25.0 cm³ of NaOH (unknown conc) neutralises 20.0 cm³ of 0.100 mol/dm³ HCl (1:1).",
          parts: [
            { label: "a", prompt: "Calculate moles of HCl.", marks: 2 },
            { label: "b", prompt: "Find NaOH concentration.", marks: 4 },
            {
              label: "c",
              prompt: "State why phenolphthalein is suitable.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration calc",
                statement: "n = c×V; endpoint moles equal.",
              },
            ],
            steps: [
              {
                reasoning: "(a) n = 0.100 × 0.020 = 0.002 mol.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) n(NaOH) = 0.002 mol (1:1).",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) c = 0.002 ÷ 0.025 = 0.080 mol/dm³.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(b) Correct units.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "(c) Colourless in acid → pink in excess alkali — clear endpoint.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 0.002 mol (b) 0.080 mol/dm³ (c) colourless→pink clear endpoint",
            commonErrors: ["cm³ not converted.", "Wrong ratio."],
          },
        },
      ],
    },
    {
      id: "ech10-u4-qualitative",
      title: "Qualitative Analysis",
      skill: "Identify ions and compounds using systematic tests.",
      lesson: {
        sections: [
          {
            heading: "Cation tests",
            body: "**Flame tests**: Li=crimson, Na=yellow, K=lilac, Ca=brick-red, Cu=blue-green. Clean wire + concentrated HCl each time.\n\n**Precipitation**: add NaOH — Fe²⁺ green→brown, Fe³⁺ brown, Cu²⁺ blue, Ca²⁺ white (insoluble in excess). Add NH₃ — Cu²⁺ deep blue solution, Fe³⁺ brown precipitate.",
          },
          {
            heading: "Anion tests",
            body: "**Halides**: AgNO₃ — Cl⁻ white (soluble in NH₃), Br⁻ cream (partial in NH₃), I⁻ yellow (insoluble in NH₃). **Sulfate**: BaCl₂ → white BaSO₄ (insoluble in acid). **Carbonate**: dilute acid → effervescence (CO₂ turns limewater milky). **Nitrate**: NaOH + Al foil + heat → ammonia (turns damp red litmus blue).",
          },
        ],
        keyFormulas: [
          {
            name: "Flame colours",
            statement:
              "Li=crimson, Na=yellow, K=lilac, Ca=brick-red, Cu=blue-green.",
          },
          {
            name: "Precipitation colours",
            statement: "Cl⁻=white, Br⁻=cream, I⁻=yellow; Cu(OH)₂=blue.",
          },
        ],
        workedExample: {
          problem: "Solution + AgNO₃ → cream precipitate. What halide?",
          solution: "Bromide — cream AgBr.",
        },
      },
      questions: [
        {
          id: "ech10-u4-qualitative-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What colour flame does potassium produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow" },
              { id: "b", text: "Brick-red" },
              { id: "c", text: "Crimson" },
              { id: "d", text: "Lilac" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Flame test",
                statement: "K = lilac flame.",
              },
            ],
            steps: [
              { reasoning: "Potassium = lilac.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Lilac",
            commonErrors: ["Sodium confused — yellow."],
          },
        },
        {
          id: "ech10-u4-qualitative-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solution forms a white precipitate with AgNO₃ that dissolves in dilute ammonia. What ion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Halide tests",
                statement:
                  "Cl⁻ → white AgCl soluble in NH₃; Br⁻ cream; I⁻ yellow insoluble.",
              },
            ],
            steps: [
              { reasoning: "White ppt = AgCl.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Ammonia soluble confirms chloride.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Ion = chloride.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Chloride ions (Cl⁻)",
            commonErrors: ["Bromide confused — cream.", "Sulfate confused."],
          },
        },
        {
          id: "ech10-u4-qualitative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why must the wire be cleaned with concentrated HCl between flame tests?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flame test technique",
                statement:
                  "Residual ions contaminate next test — clean wire essential.",
              },
            ],
            steps: [
              {
                reasoning: "Previous sample remains on wire.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Contaminates next flame colour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "HCl dissolves/removes residual ions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clean wire = accurate results.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Residual ions contaminate — HCl removes them for accurate colour.",
            commonErrors: ["No contamination link.", "Water assumed."],
          },
        },
        {
          id: "ech10-u4-qualitative-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Identify an unknown solution containing one cation and one anion.",
          parts: [
            {
              label: "a",
              prompt: "Describe tests for cation identification.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe tests for anion identification.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Give expected observations for CuCl₂.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Qualitative analysis",
                statement:
                  "Systematic testing — flame/precipitation for cations, specific reagents for anions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Flame test + NaOH/NH₃ precipitation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Cu²⁺ → blue precipitate with NaOH.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) AgNO₃ for halides, BaCl₂ for sulfate, acid for carbonate.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Systematic approach.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Blue-green flame + blue ppt + white AgCl.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) flame+NaOH (b) AgNO₃/BaCl₂/acid (c) Cu²⁺ blue flame/ppt, Cl⁻ white AgCl",
            commonErrors: ["Random tests.", "No systematic approach."],
          },
        },
      ],
    },
  ],
};
