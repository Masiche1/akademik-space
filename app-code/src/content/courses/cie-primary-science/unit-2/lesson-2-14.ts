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
            { id: "a", text: "Natural gas" },
            { id: "b", text: "Coal" },
            { id: "c", text: "Oil" },
            { id: "d", text: "Wind" },
          ], dorrectChoiceId: "c" },
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
        {
          id: "cips-u2-en-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy source will run out?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Coal" },
            { id: "b", text: "Sunlight" },
            { id: "c", text: "Wind" },
            { id: "d", text: "Water power" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Non-renewable", statement: "Coal is finite." }],
            steps: [{ reasoning: "Coal is non-renewable — will run out.", marks: 1, markCode: "A" }],
            finalAnswer: "Coal",
          },
        },
        {
          id: "cips-u2-en-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy is the ability to do what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Work or cause change" },
            { id: "b", text: "Only move" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "Sleep" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy", statement: "Ability to do work or cause change." }],
            steps: [{ reasoning: "Energy is the ability to do work or cause change.", marks: 1, markCode: "A" }],
            finalAnswer: "Work or cause change",
          },
        },
        {
          id: "cips-u2-en-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many types of energy are listed: kinetic (movement), heat, light, sound, chemical?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "types" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy forms", statement: "Movement, heat, light, sound, chemical." }],
            steps: [{ reasoning: "There are 5 types listed.", marks: 1, markCode: "M" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u2-en-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device uses 100 units of input energy but only 60 units do useful work. How much energy is wasted?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "units" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Efficiency", statement: "Wasted = input − useful." }],
            steps: [
              { reasoning: "$100 - 60 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "40 units wasted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "cips-u2-en-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What energy transfer happens in a kettle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Heat to movement" },
            { id: "b", text: "Chemical to light" },
            { id: "c", text: "Electrical to heat" },
            { id: "d", text: "Light to sound" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy transfer", statement: "Kettle: electrical → heat." }],
            steps: [{ reasoning: "A kettle converts electrical energy to heat.", marks: 1, markCode: "A" }],
            finalAnswer: "Electrical to heat",
          },
        },
        {
          id: "cips-u2-en-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two renewable energy sources and two non-renewable ones.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy sources", statement: "Renewable vs non-renewable." }],
            steps: [
              { reasoning: "Two renewables (e.g. solar, wind).", marks: 1, markCode: "M" },
              { reasoning: "Two non-renewables (e.g. coal, oil).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. solar/wind; coal/oil",
          },
        },
        {
          id: "cips-u2-en-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace the energy transfers in a wind turbine generating electricity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy transfers", statement: "Wind → movement → electrical." }],
            steps: [
              { reasoning: "Wind (movement energy) pushes turbine blades.", marks: 1, markCode: "M" },
              { reasoning: "Blades turn a generator.", marks: 1, markCode: "M" },
              { reasoning: "Generator produces electrical energy for homes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wind → blades turn → generator → electricity",
          },
        },
        {
          id: "cips-u2-en-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is NOT a form of energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Movement" },
            { id: "b", text: "Light" },
            { id: "c", text: "Heat" },
            { id: "d", text: "Colour" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy forms", statement: "Heat, light, sound, movement, chemical." }],
            steps: [{ reasoning: "Colour is not an energy form.", marks: 1, markCode: "A" }],
            finalAnswer: "Colour",
          },
        },
        {
          id: "cips-u2-en-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 4 devices tested, 3 are 100% efficient and 1 wastes energy. How many devices waste some energy?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1, unit: "device" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Efficiency", statement: "No device is 100% efficient." }],
            steps: [
              { reasoning: "1 device is not 100% efficient.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cips-u2-en-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why no device is 100% efficient.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Efficiency", statement: "Some energy always wasted as heat." }],
            steps: [
              { reasoning: "Devices transfer energy to do their job.", marks: 1, markCode: "M" },
              { reasoning: "Some energy is always lost, usually as heat.", marks: 1, markCode: "M" },
              { reasoning: "So useful output is always less than input.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Some energy always wasted — mostly as heat",
          },
        },
        {
          id: "cips-u2-en-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What energy does a battery store?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sound" },
            { id: "b", text: "Movement" },
            { id: "c", text: "Chemical" },
            { id: "d", text: "Light" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chemical energy", statement: "Stored in batteries and food." }],
            steps: [{ reasoning: "Batteries store chemical energy.", marks: 1, markCode: "A" }],
            finalAnswer: "Chemical",
          },
        },
        {
          id: "cips-u2-en-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define energy. (b) Name four forms of energy. (c) Classify: solar, coal, wind, oil as renewable or non-renewable. (d) Why is burning coal bad? (e) What transfer happens in a torch? (f) What transfer happens in a kettle? (g) Trace energy in a wind turbine. (h) Why is no device 100% efficient?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy sources and uses", statement: "Integrated Stage 6 energy answer." }],
            steps: [
              { reasoning: "(a) Ability to do work or cause change.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. heat, light, sound, movement, chemical.", marks: 1, markCode: "M" },
              { reasoning: "(c) Renewable: solar, wind; non-renewable: coal, oil.", marks: 1, markCode: "M" },
              { reasoning: "(d) Pollutes air and will run out.", marks: 1, markCode: "M" },
              { reasoning: "(e) Chemical → light + heat.", marks: 1, markCode: "M" },
              { reasoning: "(f) Electrical → heat.", marks: 1, markCode: "M" },
              { reasoning: "(g) Wind → blades → generator → electricity.", marks: 1, markCode: "M" },
              { reasoning: "(h) Some energy always lost, usually as heat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy def, forms, classification, coal issues, torch/kettle transfers, wind turbine, efficiency.",
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
