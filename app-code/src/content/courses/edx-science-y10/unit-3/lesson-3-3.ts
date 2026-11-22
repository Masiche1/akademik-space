import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "esc10-u3-lesson-3-3",
  code: "3-3",
  title: "Radioactivity, Pressure and Moments",
  goal: "I CAN describe radioactivity, pressure calculations and moments in lever systems.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Physics"],
  vocabulary: [
    {
      term: "Radioactivity",
      definition:
        "Unstable nuclei emitting alpha, beta or gamma radiation spontaneously.",
    },
    {
      term: "Half-life",
      definition: "Time for half the radioactive nuclei in a sample to decay.",
    },
    {
      term: "Pressure",
      definition: "Force per unit area — measured in pascals (Pa = N/m²).",
    },
    {
      term: "Moment",
      definition:
        "Turning effect of a force — force × perpendicular distance (Nm).",
    },
  ],
  concepts: [
    {
      id: "esc10-u3-radioactivity",
      title: "Radioactivity",
      skill: "Describe radioactive decay types, half-life and uses/risks.",
      lesson: {
        sections: [
          {
            heading: "Types of radiation",
            body: "**Alpha (α)**: helium nucleus — 2p+2n, +2 charge, heavy, stopped by paper/skin, strongly ionising. **Beta (β)**: fast electron, −1 charge, stopped by thin metal, moderate ionising. **Gamma (γ)**: EM wave, no charge/mass, needs thick lead/concrete, least ionising but most penetrating.\n\n**Decay**: unstable nucleus → more stable + radiation. Alpha decay: mass −4, atomic −2. Beta decay: neutron → proton + electron (atomic +1). Gamma: energy release only, no particle change.",
          },
          {
            heading: "Half-life and applications",
            body: "**Half-life**: time for activity to halve — constant per isotope (C-14 ~5700 yr, U-235 ~700 Myr). Activity measured in becquerels (decays/sec).\n\n**Uses**: carbon dating (C-14), medical tracers/therapy (Tc-99m, Co-60), smoke detectors (Am-241), industrial thickness gauges. **Risks**: ionising radiation damages cells → cancer/mutation; shielding (lead, concrete), distance, limited exposure time. Nuclear fission powers reactors; fusion powers stars.",
          },
        ],
        keyFormulas: [
          {
            name: "Radiation types",
            statement:
              "α=heavy/stopped by paper; β=electron/metal; γ=EM/needs lead.",
          },
          {
            name: "Half-life",
            statement: "Time for activity to halve — constant per isotope.",
          },
        ],
        workedExample: {
          problem:
            "A sample has activity 800 Bq. After 2 half-lives, what's the activity?",
          solution: "800 → 400 → 200 Bq.",
        },
      },
      questions: [
        {
          id: "esc10-u3-radioactivity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which radiation is most penetrating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beta" },
              { id: "b", text: "Gamma" },
              { id: "c", text: "All equal" },
              { id: "d", text: "Alpha" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Penetration",
                statement: "Gamma most penetrating; alpha least.",
              },
            ],
            steps: [
              {
                reasoning: "Gamma most penetrating.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Gamma",
            commonErrors: ["Alpha most penetrating view."],
          },
        },
        {
          id: "esc10-u3-radioactivity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define half-life and calculate: 400 nuclei → how many after 3 half-lives?",
          response: {
            type: "numeric",
            parts: [{ label: "Nuclei remaining", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Half-life",
                statement: "Time for half to decay; 400→200→100→50.",
              },
            ],
            steps: [
              {
                reasoning: "Each half-life halves count.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "400 ÷ 2³ = 50.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "50 nuclei",
            commonErrors: ["Linear decay assumed.", "Wrong exponent."],
          },
        },
        {
          id: "esc10-u3-radioactivity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is gamma radiation used in cancer radiotherapy despite its dangers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radiotherapy",
                statement:
                  "Gamma penetrates to tumour; dose controlled to kill cancer cells.",
              },
            ],
            steps: [
              {
                reasoning: "Gamma penetrates deep tissue.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reaches tumour without surgery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dose controlled — kills cancer cells preferentially.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Risk-benefit weighed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Gamma penetrates to tumours; controlled doses destroy cancer cells — benefits outweigh risks with precautions.",
            commonErrors: [
              "Gamma too dangerous view only.",
              "No penetration link.",
            ],
          },
        },
        {
          id: "esc10-u3-radioactivity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A radioactive source decays from 1000 Bq.",
          parts: [
            {
              label: "a",
              prompt: "After 2 half-lives, find activity.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why activity halves each half-life.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest two safety precautions for handling it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-life decay",
                statement:
                  "Random decay → constant fractional rate per half-life.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 1000 → 500 → 250 Bq.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Each nucleus has fixed decay probability.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Half the remaining decays each period.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Random individual, predictable bulk.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Two precautions: lead shielding, tongs/distance, limited time.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning: "(c) Valid safety measures.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 250 Bq (b) random decay, constant fraction (c) shielding/tongs/time limit",
            commonErrors: ["Linear decay.", "No random explanation."],
          },
        },
      ],
    },
    {
      id: "esc10-u3-pressure-moments",
      title: "Pressure and Moments",
      skill: "Calculate pressure, density and moments in lever systems.",
      lesson: {
        sections: [
          {
            heading: "Pressure and density",
            body: "**Pressure** = force ÷ area (Pa = N/m²). Same force over smaller area = higher pressure — sharp knives cut better, snowshoes spread weight. **Pressure in fluids**: increases with depth (P = ρgh); acts equally in all directions.\n\n**Density** = mass ÷ volume (kg/m³). Floatation: object floats if density < fluid. Upthrust = weight of displaced fluid (Archimedes).",
          },
          {
            heading: "Moments and levers",
            body: "**Moment** = force × perpendicular distance from pivot (Nm). **Principle of moments**: sum of clockwise = sum of anticlockwise for balance.\n\n**Levers**: effort × effort arm = load × load arm. First-class (fulcrum between, e.g. seesaw), second-class (load between, e.g. wheelbarrow — mechanical advantage), third-class (effort between, e.g. tweezers — speed/precision advantage). Gears and pulleys change force/direction.",
          },
        ],
        keyFormulas: [
          { name: "Pressure", statement: "P = F/A — force per unit area." },
          {
            name: "Moment",
            statement: "Moment = F × d; balance: clockwise = anticlockwise.",
          },
        ],
        workedExample: {
          problem: "10 N force at 0.5 m from pivot. Calculate moment.",
          solution: "10 × 0.5 = 5 Nm.",
        },
      },
      questions: [
        {
          id: "esc10-u3-pressure-moments-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the formula for pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force ÷ area" },
              { id: "b", text: "Mass ÷ volume" },
              { id: "c", text: "Force × area" },
              { id: "d", text: "Force × distance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "P = F/A." },
            ],
            steps: [
              {
                reasoning: "Pressure = force ÷ area.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Force ÷ area",
            commonErrors: ["Inverted formula."],
          },
        },
        {
          id: "esc10-u3-pressure-moments-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 50 N force acts on 0.2 m². Calculate pressure.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure (Pa)", answer: 250 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pressure",
                statement: "P = F/A = 50/0.2 = 250 Pa.",
              },
            ],
            steps: [
              { reasoning: "50 ÷ 0.2 = 250 Pa.", marks: 3, markCode: "M" },
            ],
            finalAnswer: "250 Pa",
            commonErrors: ["Wrong units.", "Inverted division."],
          },
        },
        {
          id: "esc10-u3-pressure-moments-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do sharp knives cut better than blunt ones?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure and area",
                statement: "Smaller area = higher pressure for same force.",
              },
            ],
            steps: [
              {
                reasoning: "Sharp edge = small contact area.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same force → higher pressure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher pressure cuts material more easily.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sharp edge concentrates force on tiny area → high pressure → cuts easily.",
            commonErrors: [
              "Sharper = stronger view.",
              "No area-pressure link.",
            ],
          },
        },
        {
          id: "esc10-u3-pressure-moments-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A seesaw: 30 kg child sits 2 m from pivot; 60 kg adult sits on other side.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the moment of the child (g=10).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Find where the adult must sit for balance.",
              marks: 3,
            },
            { label: "c", prompt: "State the principle used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moments",
                statement:
                  "Moment = F × d; balance when clockwise = anticlockwise.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Weight = 30 × 10 = 300 N.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Moment = 300 × 2 = 600 Nm.",
                marks: 2,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Adult weight = 600 N; 600 Nm needed.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) d = 600 ÷ 600 = 1 m.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(c) Principle of moments.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer: "(a) 600 Nm (b) 1 m from pivot (c) moments balance",
            commonErrors: ["Mass not weight.", "Wrong side distance."],
          },
        },
      ],
    },
  ],
};
