import type { Lesson } from "../../../types.ts";

export const lesson214: Lesson = {
  id: "cips-u2-lesson-2-14",
  code: "2-14",
  title: "Stage 6 — Energy: Sources and Uses",
  goal: "I CAN identify energy sources and describe how energy is used.",
  standards: ["Cambridge Primary Science 0097 Stage 6: energy",
  "Cambridge Primary Science 0097 framework substrands: 6Pf"],
  stage: 6,
  vocabulary: [
    { term: "Energy", definition: "Ability to do work or cause change." },
    { term: "Renewable energy", definition: "Energy that won't run out: solar, wind, hydro." },
    { term: "Non-renewable energy", definition: "Energy that will run out: coal, oil, gas." },
    { term: "Energy transfer", definition: "Energy changing from one form to another." },
    { term: "Efficiency", definition: "How much useful energy you get vs wasted." },
  ],
  concepts: [
    {
      id: "cips-u2-s14-energy",
      title: "Energy sources and uses",
      skill: "Identify energy sources, classify renewable/non-renewable and describe transfers at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Energy sources",
            body: "We get energy from many sources: sunlight (solar), wind, water (hydro), fossil fuels (coal, oil, gas) and nuclear. Renewable sources replace themselves naturally — sun, wind, water. Non-renewables take millions of years to form and will run out — coal, oil, gas. Burning fossil fuels also pollutes.",
          },
          {
            heading: "Energy uses and transfers",
            body: "Energy appears as movement (kinetic), heat, light, sound and stored (chemical in food/batteries). Devices transfer energy: a torch converts chemical energy (battery) to light and heat; a kettle converts electrical to heat. Some energy is always wasted as heat — no device is 100% efficient.",
          },
        ],
        keyFormulas: [
          { name: "Energy sources", statement: "renewable: solar/wind/hydro; non-renewable: coal/oil/gas" },
          { name: "Transfers", statement: "chemical→light+heat; electrical→movement/heat/light" },
        ],
        workedExample: {
          problem: "A wind turbine generates electricity. Trace the energy transfers.",
          solution: "Wind (movement) → turbine blades turn → generator → electrical energy → homes.",
        },
      },
      questions: [
        {
          id: "cips-u2-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Coal" }, { id: "b", text: "Oil" }, { id: "c", text: "Wind" }, { id: "d", text: "Natural gas" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Renewable", statement: "Replaces itself naturally." }],
            steps: [{ reasoning: "Wind is renewable; fossil fuels are not.", marks: 1, markCode: "A" }],
            finalAnswer: "Wind",
          },
        },
        {
          id: "cips-u2-en-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What energy transfer happens in a torch?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy transfer", statement: "Chemical → light + heat." }],
            steps: [
              { reasoning: "Battery chemical energy → light and heat.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chemical energy to light and heat",
          },
        },
        {
          id: "cips-u2-en-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is burning coal bad for the environment?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fossil fuel pollution", statement: "Burning releases pollutants." }],
            steps: [
              { reasoning: "Coal is non-renewable — will run out.", marks: 1, markCode: "M" },
              { reasoning: "Burning releases smoke/pollutants causing air pollution.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains both issues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-renewable and produces air pollution",
          },
        },
        {
          id: "cips-u2-en-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Compare solar and coal power for a town. For each: (a) energy source type, (b) one advantage, (c) one disadvantage. Then recommend which is better for the future and justify. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluating energy sources", statement: "Compare renewable vs non-renewable." }],
            steps: [
              { reasoning: "(a) Solar = renewable; coal = non-renewable.", marks: 1, markCode: "M" },
              { reasoning: "(b) Solar advantage: clean, won't run out.", marks: 1, markCode: "M" },
              { reasoning: "(c) Solar disadvantage: needs sunny days; expensive setup.", marks: 1, markCode: "M" },
              { reasoning: "Coal advantage: reliable, works anytime.", marks: 1, markCode: "M" },
              { reasoning: "Coal disadvantage: pollutes, finite supply.", marks: 1, markCode: "M" },
              { reasoning: "Recommendation justified by evidence.", marks: 1, markCode: "M" },
              { reasoning: "Both sides fairly compared.", marks: 1, markCode: "M" },
              { reasoning: "Clear conclusion reached.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solar better long-term: clean + renewable despite higher initial cost",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-en-notes",
      title: "Energy — notes",
      summary: "Renewable = sun/wind/water; non-renewable = coal/oil/gas; transfers lose heat.",
      sections: [
        { heading: "Sources", body: "Fossil fuels pollute + finite; renewables clean but weather-dependent." },
        { heading: "Transfers", body: "Chemical→light/heat/movement; some energy always wasted." },
      ],
    },
  ],
};
