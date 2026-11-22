import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ech10-u4-lesson-4-3",
  code: "4-3",
  title: "Investigating Electrolysis and Reactions",
  goal: "I CAN investigate electrolysis and observe chemical reactions safely.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Electrolysis",
      definition:
        "Using electricity to drive non-spontaneous chemical reactions.",
    },
    {
      term: "Electrode",
      definition:
        "Conductor where current enters/leaves — anode (+), cathode (−).",
    },
    {
      term: "Electrolyte",
      definition: "Ionic solution conducting electricity.",
    },
    {
      term: "Displacement",
      definition:
        "More reactive element displaces less reactive from compound.",
    },
  ],
  concepts: [
    {
      id: "ech10-u4-electrolysis",
      title: "Electrolysis Experiments",
      skill: "Investigate electrolysis of solutions and observe products.",
      lesson: {
        sections: [
          {
            heading: "Electrolysis setup",
            body: "**Apparatus**: DC power supply, two electrodes (graphite for inert), electrolyte (CuSO₄, NaCl, KI), beaker, wires. **Observations**: gas bubbles at electrodes, colour changes, deposits.\n\n**CuSO₄ electrolysis**: anode (+) → O₂ bubbles; cathode (−) → Cu deposits (pink/brown coating). **NaCl (brine)**: anode → Cl₂ gas (bleach smell); cathode → H₂ bubbles + NaOH formed. **KI**: anode → brown I₂; cathode → H₂.",
          },
          {
            heading: "Variables and safety",
            body: "**Variables**: electrolyte type/concentration, electrode material, voltage, time. **Controls**: same electrodes, same voltage, same time. **Safety**: chlorine gas toxic — ventilate; hydrogen flammable — no flames; electrical safety — check wires, don't touch electrodes.\n\n**Data**: measure gas volume vs time, electrode mass change, colour intensity. Compare different electrolytes.",
          },
        ],
        keyFormulas: [
          {
            name: "Electrolysis",
            statement: "Anode = oxidation; cathode = reduction.",
          },
          {
            name: "CuSO₄ products",
            statement: "Anode: O₂; cathode: Cu deposit.",
          },
        ],
        workedExample: {
          problem: "Electrolysing CuSO₄ — what forms at each electrode?",
          solution: "Anode: O₂ gas; cathode: Cu metal deposits.",
        },
      },
      questions: [
        {
          id: "ech10-u4-electrolysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the electrolyte in electrolysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The beaker" },
              { id: "b", text: "The ionic solution" },
              { id: "c", text: "The power supply" },
              { id: "d", text: "The electrode" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electrolyte",
                statement: "Ionic solution that conducts electricity.",
              },
            ],
            steps: [
              {
                reasoning: "Electrolyte = ionic solution.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Ionic solution",
            commonErrors: ["Electrode confused."],
          },
        },
        {
          id: "ech10-u4-electrolysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What forms at the cathode during CuSO₄ electrolysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CuSO₄ electrolysis",
                statement: "Cathode: Cu²⁺ reduced → Cu metal deposits.",
              },
            ],
            steps: [
              {
                reasoning: "Cu²⁺ ions move to cathode.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gain electrons → reduced to Cu.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Copper metal coats cathode.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Copper metal deposits on cathode — Cu²⁺ reduced.",
            commonErrors: ["Oxygen assumed.", "Wrong electrode."],
          },
        },
        {
          id: "ech10-u4-electrolysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is fume cupboard/ventilation needed for NaCl electrolysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrolysis safety",
                statement: "Cl₂ gas toxic — ventilation essential.",
              },
            ],
            steps: [
              {
                reasoning: "Chlorine gas produced at anode.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cl₂ is toxic — harmful to breathe.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ventilation disperses gas safely.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Hydrogen also flammable — no flames.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Toxic Cl₂ gas + flammable H₂ — ventilation and no flames essential.",
            commonErrors: ["No gas hazard.", "Missing H₂."],
          },
        },
        {
          id: "ech10-u4-electrolysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Comparing electrolysis of CuSO₄ vs NaCl solutions.",
          parts: [
            {
              label: "a",
              prompt: "Describe expected products at each electrode for both.",
              marks: 4,
            },
            { label: "b", prompt: "Explain why products differ.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrolysis products",
                statement: "Different ions present → different products.",
              },
            ],
            steps: [
              {
                reasoning: "(a) CuSO₄: anode O₂, cathode Cu.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) NaCl: anode Cl₂, cathode H₂+NaOH.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Different ions: Cu²⁺/SO₄²⁻ vs Na⁺/Cl⁻.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Most easily discharged ion wins at each electrode.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) CuSO₄:O₂/Cu; NaCl:Cl₂/H₂ (b) different ions discharged",
            commonErrors: [
              "Same products assumed.",
              "No discharge explanation.",
            ],
          },
        },
      ],
    },
    {
      id: "ech10-u4-displacement",
      title: "Displacement and Reaction Observations",
      skill: "Investigate displacement reactions and observe products.",
      lesson: {
        sections: [
          {
            heading: "Displacement reactions",
            body: "**Principle**: more reactive metal displaces less reactive from its compound. **Examples**: Mg + CuSO₄ → MgSO₄ + Cu (magnesium displaces copper — copper coats magnesium); Zn + CuSO₄ → ZnSO₄ + Cu; Fe + CuSO₄ → FeSO₄ + Cu.\n\n**Observations**: colour change (blue → colourless as Cu²⁺ removed), metal deposit (brown/pink copper), temperature rise (exothermic), gas if acid involved. **Reactivity series** determines which displacements occur.",
          },
          {
            heading: "Investigation methods",
            body: "**Method**: add metal strip to metal salt solution, observe over time. **Controls**: same solution volume/concentration, same strip size, same time, same temperature. **Data**: time for visible change, mass change of strip, solution colour change.\n\n**Safety**: metal salt solutions irritant — gloves, eye protection; dispose properly. Compare multiple metals in same solution.",
          },
        ],
        keyFormulas: [
          {
            name: "Displacement",
            statement:
              "More reactive metal displaces less reactive from compound.",
          },
          {
            name: "Observations",
            statement: "Colour change + deposit + temp rise = displacement.",
          },
        ],
        workedExample: {
          problem:
            "Mg strip in CuSO₄ turns brown and solution fades. What happened?",
          solution:
            "Mg displaced Cu — brown Cu deposit on Mg, blue Cu²⁺ removed from solution.",
        },
      },
      questions: [
        {
          id: "ech10-u4-displacement-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when magnesium is added to copper sulfate solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper deposits on magnesium" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Magnesium dissolves" },
              { id: "d", text: "Gas produced" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Displacement",
                statement: "Mg more reactive → displaces Cu from CuSO₄.",
              },
            ],
            steps: [
              { reasoning: "Cu deposits on Mg.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Copper deposits",
            commonErrors: ["No reaction assumed."],
          },
        },
        {
          id: "ech10-u4-displacement-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What colour change occurs when CuSO₄ solution is displaced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CuSO₄ displacement",
                statement: "Blue → colourless as Cu²⁺ removed.",
              },
            ],
            steps: [
              { reasoning: "CuSO₄ is blue.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Cu²⁺ displaced → removed from solution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Solution becomes colourless/pale.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Blue → colourless as Cu²⁺ displaced and removed.",
            commonErrors: ["Colour change wrong.", "No mechanism."],
          },
        },
        {
          id: "ech10-u4-displacement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does zinc react with CuSO₄ but copper doesn't react with ZnSO₄?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity series",
                statement: "Zn > Cu — more reactive displaces less.",
              },
            ],
            steps: [
              {
                reasoning: "Zn above Cu in reactivity series.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Zn displaces Cu from CuSO₄.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cu below Zn — can't displace it.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reactivity determines displacement direction.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Zn more reactive → displaces Cu; Cu less reactive → can't displace Zn.",
            commonErrors: ["Both react assumed.", "No reactivity link."],
          },
        },
        {
          id: "ech10-u4-displacement-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating relative reactivity of Mg, Zn, Cu using CuSO₄.",
          parts: [
            { label: "a", prompt: "Describe method.", marks: 3 },
            { label: "b", prompt: "State expected observations.", marks: 3 },
            { label: "c", prompt: "Rank metals by reactivity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity investigation",
                statement:
                  "Metal + CuSO₄ — displacement shows reactivity order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Add each metal strip to same CuSO₄ solution; observe.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning:
                  "(a) Controls: same solution volume, strip size, time.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Mg/Zn: Cu deposits, blue fades. Cu: no change.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) More reactive = faster deposit.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Mg > Zn > Cu.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) metal strips in CuSO₄ (b) Cu deposit+fade for Mg/Zn (c) Mg>Zn>Cu",
            commonErrors: ["Wrong method.", "No ranking."],
          },
        },
      ],
    },
  ],
};
