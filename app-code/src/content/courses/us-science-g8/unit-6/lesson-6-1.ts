import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "s8-u6-lesson-6-1",
  code: "6-1",
  title: "Kinetic and Potential Energy",
  goal: "I CAN distinguish between kinetic and potential energy, calculate energy values, and describe energy transformations.",
  standards: [
    "MS-PS3-1",
    "MS-PS3-2",
    "MS-PS3-3",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Kinetic energy",
      definition: "Energy of motion; depends on mass and speed.",
    },
    {
      term: "Potential energy",
      definition: "Stored energy due to position or configuration.",
    },
    {
      term: "Gravitational potential energy",
      definition: "Energy stored due to height above Earth's surface.",
    },
    {
      term: "Elastic potential energy",
      definition: "Energy stored in stretched or compressed objects.",
    },
    {
      term: "Energy transformation",
      definition: "Change from one form of energy to another.",
    },
    {
      term: "Mechanical energy",
      definition: "Sum of kinetic and potential energy.",
    },
    {
      term: "Conservation of energy",
      definition: "Energy cannot be created or destroyed, only transformed.",
    },
  ],
  concepts: [
    {
      id: "s8-u6-kinetic-potential",
      title: "Kinetic and potential energy",
      skill:
        "Calculate kinetic and potential energy and describe their relationship.",
      lesson: {
        sections: [
          {
            heading: "Kinetic energy",
            body: "**Kinetic energy** ($KE$) is the energy of motion. It depends on mass and speed:\n\n$$KE = \\frac{1}{2}mv^2$$\n\n- More mass → more kinetic energy\n- Higher speed → much more kinetic energy (proportional to $v^2$)\n- Units: Joules (J)",
          },
          {
            heading: "Potential energy",
            body: "**Gravitational potential energy** ($PE$) is stored energy due to height:\n\n$$PE = mgh$$\n\nwhere $m$ = mass, $g = 9.8$ m/s², $h$ = height.\n\n- Higher object → more potential energy\n- More mass → more potential energy\n- Units: Joules (J)\n\n**Elastic potential energy** is stored in stretched/compressed objects (rubber bands, springs).",
          },
        ],
        keyFormulas: [
          { name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
          { name: "Gravitational PE", statement: "$PE = mgh$" },
          { name: "Mechanical energy", statement: "$ME = KE + PE$" },
        ],
        workedExample: {
          problem:
            "A 2 kg ball is at rest at 10 m height. Calculate its potential energy.",
          solution: "$PE = mgh = 2 \\times 9.8 \\times 10 = 196$ J.",
        },
      },
      questions: [
        {
          id: "s8-u6-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for kinetic energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$KE = mv$" },
              { id: "b", text: "$KE = \\frac{1}{2}mv^2$" },
              { id: "c", text: "$KE = mgh$" },
              { id: "d", text: "$KE = Fd$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic energy",
                statement: "$KE = \\frac{1}{2}mv^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Kinetic energy = one-half mass times velocity squared.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $KE = \\frac{1}{2}mv^2$.",
            commonErrors: ["Choosing (c): that's potential energy."],
          },
        },
        {
          id: "s8-u6-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 5 kg object is lifted to 4 m height. Calculate its potential energy ($g = 9.8$ m/s²).",
          response: {
            type: "numeric",
            parts: [{ label: "PE", answer: 196, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gravitational PE",
                statement: "$PE = mgh$",
              },
            ],
            steps: [
              {
                reasoning: "$PE = 5 \\times 9.8 \\times 4$.",
                working: "196",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 196 J.",
                working: "196",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: mass × gravity × height = J.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "196 J",
            commonErrors: ["Forgetting to multiply by g."],
          },
        },
        {
          id: "s8-u6-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is dropped from rest at 10 m. What is its kinetic energy just before hitting the ground?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "PE converts to KE during fall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initial PE = $mgh = m \\times 9.8 \\times 10 = 98m$ J (where m = mass).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At bottom, PE = 0; all PE converted to KE.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "KE just before impact = initial PE = $98m$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For 1 kg ball: KE = 98 J.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$KE = 98m$ J (98 J for 1 kg ball).",
            commonErrors: ["Not using conservation of energy."],
          },
        },
        {
          id: "s8-u6-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A roller coaster car (500 kg) is at the top of a 50 m hill moving at 10 m/s.",
          parts: [
            {
              label: "a",
              prompt: "Calculate its potential energy ($g = 9.8$).",
              marks: 2,
            },
            { label: "b", prompt: "Calculate its kinetic energy.", marks: 2 },
            {
              label: "c",
              prompt: "Calculate its total mechanical energy.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If it reaches ground level, what's its kinetic energy? (ignore friction)",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy equations",
                statement:
                  "$PE = mgh$; $KE = \\frac{1}{2}mv^2$; $ME = PE + KE$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$PE = 500 \\times 9.8 \\times 50 = 245,000$ J.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$KE = \\frac{1}{2} \\times 500 \\times 10^2 = 25,000$ J.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$ME = 245,000 + 25,000 = 270,000$ J.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "At ground: PE = 0; KE = ME = 270,000 J.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 245,000 J (b) 25,000 J (c) 270,000 J (d) 270,000 J.",
            commonErrors: ["Forgetting initial kinetic energy."],
          },
        },
      ],
    },
    {
      id: "s8-u6-energy-transformations",
      title: "Energy Transformations",
      skill: "Describe how energy transforms between forms in various systems.",
      lesson: {
        sections: [
          {
            heading: "Energy transformations",
            body: "Energy constantly transforms between forms:\n\n- **Photosynthesis**: light → chemical energy (glucose).\n- **Cellular respiration**: chemical → kinetic + heat.\n- **Combustion**: chemical → heat + light.\n- **Generator**: mechanical → electrical.\n- **Battery**: chemical → electrical → light/sound.",
          },
          {
            heading: "Energy conservation",
            body: "The **law of conservation of energy** states energy cannot be created or destroyed, only transformed. However, some energy is always lost as **heat** (unusable form). This is why perpetual motion machines are impossible.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy transformations",
            statement:
              "Light → chemical → kinetic + heat; mechanical ↔ electrical.",
          },
          {
            name: "Conservation of energy",
            statement: "Energy transforms but total remains constant.",
          },
          {
            name: "Heat loss",
            statement: "Some energy always lost as unusable heat.",
          },
        ],
        workedExample: {
          problem: "Trace energy transformations in a flashlight.",
          solution:
            "Chemical energy in battery → electrical energy → light + heat energy.",
        },
      },
      questions: [
        {
          id: "s8-u6-transform-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What energy transformation occurs in photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical → light" },
              { id: "b", text: "Light → chemical" },
              { id: "c", text: "Kinetic → potential" },
              { id: "d", text: "Heat → electrical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photosynthesis",
                statement: "Light energy → chemical energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosynthesis converts light energy into chemical energy stored in glucose.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Light → chemical.",
            commonErrors: ["Reversing the transformation."],
          },
        },
        {
          id: "s8-u6-transform-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the energy transformations in a hydroelectric dam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hydroelectric",
                statement:
                  "Gravitational PE → kinetic → mechanical → electrical.",
              },
            ],
            steps: [
              {
                reasoning: "Water at height has gravitational PE.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Falling water gains kinetic energy, turns turbine (mechanical).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Generator converts mechanical to electrical energy.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "PE → KE → mechanical → electrical.",
            commonErrors: ["Missing a transformation step."],
          },
        },
        {
          id: "s8-u6-transform-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't a machine create energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conservation of energy",
                statement: "Energy transforms but isn't created/destroyed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy cannot be created or destroyed (conservation law).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Machines only transform energy from one form to another.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Some energy is always lost as heat, so output < input.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This is why perpetual motion is impossible.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Energy transforms but isn't created; heat losses prevent 100% efficiency.",
            commonErrors: ["Saying machines create energy."],
          },
        },
        {
          id: "s8-u6-transform-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace energy transformations in a car.",
          parts: [
            {
              label: "a",
              prompt: "What energy is stored in gasoline?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does the engine transform this energy?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What energy does the car have when moving?",
              marks: 2,
            },
            { label: "d", prompt: "What energy is lost?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy transformations",
                statement: "Chemical → thermal → mechanical → kinetic + heat.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Chemical energy stored in gasoline molecules.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Combustion converts chemical to thermal energy, which pushes pistons (mechanical).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Kinetic energy of motion; also potential if going uphill.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Heat from engine, friction, air resistance — lost as unusable heat.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Chemical (b) Chemical→thermal→mechanical (c) Kinetic (d) Heat losses.",
            commonErrors: ["Saying all energy becomes motion."],
          },
        },
      ],
    },
    {
      id: "s8-u6-energy-systems",
      title: "Energy Systems and Applications",
      skill:
        "Analyze energy systems in real-world contexts and evaluate energy efficiency.",
      lesson: {
        sections: [
          {
            heading: "Energy systems",
            body: "Energy systems convert and transfer energy:\n\n- **Power plants**: fossil fuels, nuclear, solar, wind, hydro → electricity.\n- **Transportation**: gasoline/diesel/electric → kinetic energy.\n- **Buildings**: heating/cooling systems → thermal energy.\n- **Food systems**: solar → chemical (photosynthesis) → chemical (food) → kinetic (movement).",
          },
          {
            heading: "Energy efficiency",
            body: "**Energy efficiency** is the ratio of useful energy output to total energy input. Higher efficiency = less waste.\n\n- LED bulbs: ~90% efficient (vs incandescent ~10%).\n- Electric vehicles: ~90% efficient vs gasoline ~20%.\n- Improving efficiency reduces energy use and environmental impact.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy systems",
            statement:
              "Power plants, transportation, buildings, food — convert energy.",
          },
          {
            name: "Energy efficiency",
            statement: "Useful output ÷ total input; higher = less waste.",
          },
          {
            name: "Efficiency comparison",
            statement: "LED ~90% vs incandescent ~10%; EV ~90% vs gas ~20%.",
          },
        ],
        workedExample: {
          problem:
            "Why are electric vehicles more efficient than gasoline cars?",
          solution:
            "EVs convert ~90% of electrical energy to motion; gasoline cars convert only ~20% of chemical energy.",
        },
      },
      questions: [
        {
          id: "s8-u6-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is energy efficiency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total energy used" },
              { id: "b", text: "Useful output ÷ total input" },
              { id: "c", text: "Energy created" },
              { id: "d", text: "Speed of energy transfer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy efficiency",
                statement: "Useful output ÷ total input.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Efficiency = useful energy output / total energy input.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Useful output ÷ total input.",
            commonErrors: ["Thinking efficiency = total energy."],
          },
        },
        {
          id: "s8-u6-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are LED bulbs more efficient than incandescent bulbs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lighting efficiency",
                statement: "LED converts more electrical energy to light.",
              },
            ],
            steps: [
              {
                reasoning: "LEDs convert ~90% of energy to light.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Incandescent bulbs convert ~90% to heat, only ~10% to light.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Less heat loss = higher efficiency.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "LEDs convert more to light, less to heat → higher efficiency.",
            commonErrors: ["Saying LEDs use less energy for same light."],
          },
        },
        {
          id: "s8-u6-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare fossil fuel and renewable energy systems in terms of efficiency and sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy comparison",
                statement:
                  "Fossil = high emissions; renewable = sustainable but variable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fossil fuels: high efficiency in conversion but finite and polluting.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Renewables: sustainable but lower capacity factor (weather-dependent).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Fossil fuels release CO2 and pollutants; renewables don't.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Optimal systems combine both for reliability and sustainability.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fossil = efficient but polluting/finite; renewable = sustainable but variable.",
            commonErrors: ["Saying one is always better."],
          },
        },
        {
          id: "s8-u6-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A power plant produces 1000 J of electricity from 2000 J of fuel energy.",
          parts: [
            { label: "a", prompt: "What is the efficiency?", marks: 2 },
            { label: "b", prompt: "How much energy is lost?", marks: 2 },
            { label: "c", prompt: "Where does lost energy go?", marks: 2 },
            {
              label: "d",
              prompt: "How could efficiency be improved?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement:
                  "$\\eta = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\eta = 1000/2000 = 0.5 = 50\\%$.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2000 - 1000 = 1000$ J lost.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Lost as heat (exhaust, cooling systems).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Better insulation, combined heat and power, more efficient turbines.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 50% (b) 1000 J (c) Heat (d) Insulation, CHP, better turbines.",
            commonErrors: ["Calculating efficiency incorrectly."],
          },
        },
      ],
    },
  ],
};
