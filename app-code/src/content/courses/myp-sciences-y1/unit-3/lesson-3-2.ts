import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "myps1-u3-lesson-3-2",
  code: "3-2",
  title: "Energy",
  goal: "I CAN describe energy stores and transfers, use conservation of energy and efficiency, and evaluate renewable and non-renewable energy resources.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Criterion D: Reflecting on the impacts of science",
    "Key concept: Change",
    "Related concept: Energy",
    "Global context: Globalization and sustainability",
  ],
  vocabulary: [
    { term: "Energy store", definition: "A way of describing where energy is held, for example kinetic, gravitational potential, elastic potential, chemical, thermal or nuclear." },
    { term: "Energy transfer", definition: "The movement of energy from one store to another, or from one object to another." },
    { term: "Conservation of energy", definition: "Energy cannot be created or destroyed, only transferred from one store to another." },
    { term: "Efficiency", definition: "The fraction or percentage of the total energy input that is transferred usefully." },
    { term: "Wasted energy", definition: "Energy transferred to stores that are not useful, usually the thermal store of the surroundings." },
    { term: "Renewable resource", definition: "An energy resource that is replaced as fast as it is used, such as wind, solar, hydroelectric or geothermal." },
    { term: "Non-renewable resource", definition: "An energy resource that will run out because it is used faster than it forms, such as coal, oil, natural gas and nuclear fuel." },
  ],
  concepts: [
    {
      id: "myps1-u3-energy-transfers-efficiency",
      title: "Energy stores, transfers and efficiency",
      skill: "Describe energy transfers, apply conservation of energy and calculate efficiency.",
      lesson: {
        sections: [
          {
            heading: "Energy stores and transfers",
            body: "Energy is measured in **joules** ($\\text{J}$). It is held in stores, such as:\n\n- **Kinetic** (moving objects)\n- **Gravitational potential** (objects raised above the ground)\n- **Elastic potential** (stretched or squashed springs)\n- **Chemical** (food, fuels, batteries)\n- **Thermal** (hot objects)\n- **Nuclear** (the nuclei of atoms)\n\nEnergy is transferred between stores, for example by moving forces, electric current, heating, or light and sound waves. A falling ball transfers energy from the gravitational potential store to the kinetic store. A toaster transfers energy by electricity from the mains to the thermal store of the bread.",
          },
          {
            heading: "Conservation of energy",
            body: "Energy is never created or destroyed. The **total energy** before a change equals the total energy after it. Some energy is usually transferred to the thermal store of the surroundings, for example by friction or air resistance. It spreads out and is hard to use again, so we call it **wasted**.\n\nExample for a light bulb described in words: electrical energy in $\\to$ light energy (useful) + thermal energy (wasted).",
          },
          {
            heading: "Efficiency",
            body: "Efficiency compares the useful energy output with the total energy input.\n\n$$\\text{efficiency}=\\frac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$$\n\nEfficiency cannot be more than $100\\%$, because energy is conserved. A higher efficiency means less energy is wasted. Wasted energy $=$ total input $-$ useful output.",
          },
        ],
        keyFormulas: [
          { name: "Conservation of energy", statement: "Total energy input $=$ useful output $+$ wasted output" },
          { name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
          { name: "Unit", statement: "Energy is measured in joules ($\\text{J}$)" },
        ],
        workedExample: {
          problem: "A motor takes in $200\\ \\text{J}$ of electrical energy and transfers $150\\ \\text{J}$ usefully to the kinetic store of a lift. Calculate the efficiency and the wasted energy.",
          solution: "Efficiency $=\\dfrac{150}{200}\\times100=75\\%$. Wasted energy $=200-150=50\\ \\text{J}$, transferred to the thermal store of the surroundings.",
        },
      },
      questions: [
        {
          id: "myps1-u3-energy-transfers-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A skier slides down a hill. Which energy transfer happens as the skier speeds up?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical store to elastic potential store" },
              { id: "b", text: "Gravitational potential store to kinetic store" },
              { id: "c", text: "Kinetic store to gravitational potential store" },
              { id: "d", text: "Thermal store to nuclear store" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy is transferred between stores and is not created or destroyed." },
            ],
            steps: [
              { reasoning: "As the skier goes lower, the gravitational potential store decreases and the kinetic store increases because the skier speeds up.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gravitational potential store to kinetic store",
            commonErrors: ["Reversing the direction of the transfer.", "Thinking that the skier gains energy from nowhere when speeding up."],
            examinerNote: "B1 for gravitational potential to kinetic.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A kettle takes in $2000\\ \\text{J}$ of electrical energy. It transfers $1700\\ \\text{J}$ usefully to the thermal store of the water.\n\nCalculate the efficiency of the kettle as a percentage.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 85, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the useful output by the total input and multiply by 100.", working: "\\frac{1700}{2000}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "85\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$85\\%$",
            commonErrors: ["Dividing input by output to get more than 100%.", "Using the wasted energy (300 J) instead of the useful energy."],
            examinerNote: "M1 for 1700 / 2000 (x 100). A1 for 85 (%). Allow 0.85 for A1 if no percentage is requested, but the stem asks for a percentage.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says: \"My new electric heater is 120% efficient because it gives out more heat than the electrical energy it takes in.\"\n\nExplain why the student must be wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy cannot be created, so useful output can never be greater than total input." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Energy cannot be created or destroyed, only transferred.", marks: 1, markCode: "B" },
              { reasoning: "So the useful energy output cannot be greater than the total energy input.", marks: 1, markCode: "B" },
              { reasoning: "Efficiency is useful output divided by total input, so it cannot be more than 100%. The student's measurement or calculation must contain an error (for example, extra heat from the surroundings was included).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Energy is conserved, so useful output cannot exceed the input; efficiency is at most 100%, so the claim is impossible.",
            commonErrors: ["Saying that more heat is produced because heaters 'create' warmth.", "Thinking efficiency can be above 100% if a device is very good."],
            examinerNote: "B1 for energy cannot be created (oe). B1 for output cannot be greater than input. R1 for efficiency maximum 100% / error in measurement.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A filament lamp takes in $60\\ \\text{J}$ of electrical energy each second. Of this, $6\\ \\text{J}$ is transferred as light and the rest is transferred to the thermal store of the surroundings. An LED lamp takes in $8\\ \\text{J}$ each second and gives out the same $6\\ \\text{J}$ of light.",
          parts: [
            { label: "a", prompt: "Calculate the energy wasted each second by the filament lamp.", marks: 1 },
            { label: "b", prompt: "Calculate the efficiency of the filament lamp as a percentage.", marks: 2 },
            { label: "c", prompt: "Calculate the efficiency of the LED lamp as a percentage.", marks: 2 },
            { label: "d", prompt: "A school replaces 200 filament lamps with LED lamps. Evaluate this decision, giving one benefit and one possible drawback.", marks: 3 },
            { label: "e", prompt: "State what happens to the wasted energy in the end.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Total input $=$ useful output $+$ wasted output." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Wasted energy is the input minus the useful output.", working: "60 - 6 = 54\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide useful output by total input and multiply by 100.", working: "\\frac{6}{60}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "10\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the LED input of 8 J.", working: "\\frac{6}{8}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: the LED lamps waste far less energy (75% against 10% efficient), so electricity use and running costs fall for the same light.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Drawback: LED lamps cost more to buy at first, or manufacturing the new lamps has an environmental cost and old lamps become waste.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Conclusion: replacing is worthwhile overall because the energy savings over the lifetime of the lamps outweigh the initial cost (or an equivalent justified judgement).", marks: 1, markCode: "R" },
              { part: "e", reasoning: "It spreads out into the thermal store of the surroundings (the air), where it is hard to use again.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $54\\ \\text{J}$ (b) $10\\%$ (c) $75\\%$ (d) LED saves energy and cost; higher initial cost; overall worthwhile (e) Transferred to the thermal store of the surroundings.",
            commonErrors: ["Using 8 J for the filament lamp calculation.", "Saying the wasted energy is destroyed.", "Judging only on the purchase price."],
            examinerNote: "(a) Allow 54 without unit for A1 only if J is given in the stem. (d) Award R1 for any reasoned overall judgement that uses the data. (e) Allow 'heats the surroundings' oe. Reject 'lost' or 'used up' without reference to heating.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy store holds energy in a stretched spring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical" },
              { id: "b", text: "Kinetic" },
              { id: "c", text: "Elastic potential" },
              { id: "d", text: "Gravitational potential" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy stores", statement: "Elastic potential energy is held in stretched or squashed springs." },
            ],
            steps: [
              { reasoning: "A stretched or squashed spring holds elastic potential energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Elastic potential",
            commonErrors: ["Choosing kinetic, which is for moving objects."],
            examinerNote: "B1 for elastic potential.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy store holds energy in food and in batteries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical" },
              { id: "b", text: "Thermal" },
              { id: "c", text: "Nuclear" },
              { id: "d", text: "Gravitational potential" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy stores", statement: "Chemical energy is held in food, fuels and batteries." },
            ],
            steps: [
              { reasoning: "Food and batteries store chemical energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Chemical",
            commonErrors: ["Choosing thermal, which is for hot objects."],
            examinerNote: "B1 for chemical.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ball rolls down a hill and speeds up. Describe the energy transfer that happens, naming the stores involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy is transferred between stores and is not created or destroyed." },
            ],
            steps: [
              { reasoning: "The ball loses gravitational potential energy as it falls (it is lower).", marks: 1, markCode: "B" },
              { reasoning: "It gains kinetic energy as it speeds up; the transfer is from the gravitational potential store to the kinetic store.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Energy transfers from the gravitational potential store to the kinetic store as the ball falls and speeds up.",
            commonErrors: ["Saying energy is 'used up'.", "Naming only one store."],
            examinerNote: "B1 for losing GPE. R1 for gaining KE / naming both stores.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "When a toaster heats bread, where does most of the 'wasted' energy go?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wasted energy", statement: "Wasted energy is usually transferred to the thermal store of the surroundings, where it spreads out and is hard to use again." },
            ],
            steps: [
              { reasoning: "The wasted energy heats the air and the toaster body around it.", marks: 1, markCode: "B" },
              { reasoning: "So most wasted energy ends up in the thermal store of the surroundings.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Most wasted energy is transferred to the thermal store of the surroundings (heats the air).",
            commonErrors: ["Saying the wasted energy is destroyed or disappears."],
            examinerNote: "B1 for heating surroundings. R1 for thermal store oe.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about conservation of energy is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy can be destroyed by friction" },
              { id: "b", text: "Energy is transferred between stores; it is never created or destroyed" },
              { id: "c", text: "Energy only exists as heat" },
              { id: "d", text: "Energy can be created by machines" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy is never created or destroyed; the total energy before equals the total after." },
            ],
            steps: [
              { reasoning: "Energy is conserved: it can only be transferred between stores, never created or destroyed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Energy is transferred between stores; it is never created or destroyed",
            commonErrors: ["Thinking friction destroys energy; it transfers it to the thermal store."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A device is $40\\%$ efficient and takes in $500\\ \\text{J}$ of energy.\n\nCalculate the useful energy output.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$125\\ \\text{J}$" },
              { id: "b", text: "$200\\ \\text{J}$" },
              { id: "c", text: "$300\\ \\text{J}$" },
              { id: "d", text: "$40\\ \\text{J}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Useful output = efficiency fraction x input: $0.40\\times500=200\\ \\text{J}$.", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $200\\ \\text{J}$",
            commonErrors: ["Taking 40% of 100 instead of 500.", "Dividing 500 by 40."],
            examinerNote: "M1 for 0.4 x 500. A1 for 200 J.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A heater takes in $500\\ \\text{J}$ of electrical energy and transfers $300\\ \\text{J}$ usefully to the thermal store of the water.\n\nCalculate the efficiency of the heater as a percentage.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Divide useful output by total input and multiply by 100.", working: "\\frac{300}{500}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\%$",
            commonErrors: ["Dividing 500 by 300.", "Forgetting to multiply by 100."],
            examinerNote: "M1 for 300/500 x 100. A1 for 60%.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A motor takes in $800\\ \\text{J}$ of electrical energy and transfers $200\\ \\text{J}$ usefully to kinetic energy.\n\nCalculate the efficiency of the motor as a percentage.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Divide useful output by total input and multiply by 100.", working: "\\frac{200}{800}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing 800 by 200 to get 400%.", "Using the wasted energy instead of the useful output."],
            examinerNote: "M1 for 200/800 x 100. A1 for 25%.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A device takes in $500\\ \\text{J}$ of energy. Only $125\\ \\text{J}$ is transferred usefully; the rest is wasted.\n\nCalculate (i) the wasted energy, (ii) the efficiency as a percentage, and (iii) the wasted energy if the input were doubled to $1000\\ \\text{J}$ with the same efficiency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wasted energy", answer: 375, unit: "J" },
              { label: "Efficiency", answer: 25, unit: "%" },
              { label: "Wasted energy with doubled input", answer: 750, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Total input $=$ useful output $+$ wasted output." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Wasted energy = input - useful output.", working: "500-125=375\\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Efficiency = useful output / input x 100.", working: "\\frac{125}{500}\\times100=25\\%", marks: 1, markCode: "M" },
              { reasoning: "At 25% efficiency, useful output is $0.25\\times1000=250\\ \\text{J}$, so wasted is $1000-250$.", working: "1000-250=750\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$375\\ \\text{J}$, $25\\%$, $750\\ \\text{J}$",
            commonErrors: ["Using the useful output as wasted energy.", "Doubling only the useful output and forgetting the wasted part also doubles."],
            examinerNote: "M1 for each method. A1 for 750 J.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A filament lamp takes in $90\\ \\text{J}$ each second and gives out $9\\ \\text{J}$ of light. An LED lamp gives out the same $9\\ \\text{J}$ of light but takes in only $12\\ \\text{J}$ each second.",
          response: {
            type: "numeric",
            parts: [
              { label: "Efficiency of the filament lamp", answer: 10, unit: "%" },
              { label: "Energy wasted by the filament lamp each second", answer: 81, unit: "J" },
              { label: "Efficiency of the LED lamp", answer: 75, unit: "%" },
              { label: "Energy wasted by the LED lamp each second", answer: 3, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
              { kind: "law", name: "Conservation of energy", statement: "Wasted energy = total input - useful output." },
            ],
            steps: [
              { reasoning: "Filament efficiency: $9/90 \\times 100$.", working: "10\\%", marks: 1, markCode: "M" },
              { reasoning: "Filament wasted: $90-9$.", working: "81\\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "LED efficiency: $9/12 \\times 100$.", working: "75\\%", marks: 1, markCode: "M" },
              { reasoning: "LED wasted: $12-9$.", working: "3\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$, $81\\ \\text{J}$, $75\\%$, $3\\ \\text{J}$",
            commonErrors: ["Using 90 J for the LED calculations.", "Dividing input by output."],
            examinerNote: "M1 for each correct method. A1 for 3 J.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student switches on a torch and it produces light.",
          parts: [
            { label: "a", prompt: "Name the energy store in the torch's batteries.", marks: 1 },
            { label: "b", prompt: "Describe the first energy transfer when the torch is switched on.", marks: 1 },
            { label: "c", prompt: "Name the two energy stores the energy is transferred into inside the torch.", marks: 1 },
            { label: "d", prompt: "Explain why a torch is not 100% efficient.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy is transferred between stores; some is usually wasted to the thermal store of the surroundings." },
            ],
            steps: [
              { part: "a", reasoning: "Chemical energy store.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Chemical energy is transferred to electrical energy by the battery.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Light energy (useful) and thermal energy (wasted).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Some energy is wasted as heat because not all the electrical energy becomes light.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Chemical (b) Chemical → electrical (c) Light and thermal (d) Some energy is wasted as heat.",
            commonErrors: ["In (b) skipping the chemical to electrical step.", "In (d) saying the torch 'uses up' energy."],
            examinerNote: "(c) Accept 'light + thermal/heat'. (d) Allow 'wasted energy heats the torch/surroundings' oe.",
          },
        },
        {
          id: "myps1-u3-energy-transfers-efficiency-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hydroelectric power station stores water in a reservoir high above a valley. When electricity is needed, water flows down through pipes, turning a turbine connected to a generator. The water has gravitational potential energy at the top.",
          parts: [
            { label: "a", prompt: "Name the energy store of the water at the top of the reservoir.", marks: 1 },
            { label: "b", prompt: "Describe the energy transfer as the water flows down the pipes.", marks: 2 },
            { label: "c", prompt: "Name the energy store that the generator transfers energy into as electricity.", marks: 1 },
            { label: "d", prompt: "The station takes in $2000\\ \\text{J}$ of gravitational potential energy and generates $800\\ \\text{J}$ of electrical energy. Calculate its efficiency.", marks: 2 },
            { label: "e", prompt: "Explain where the remaining $1200\\ \\text{J}$ goes and why the station cannot be 100% efficient.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Total energy input $=$ useful output $+$ wasted output." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Gravitational potential energy store.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Gravitational potential energy is transferred to kinetic energy as the water speeds up falling.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The moving water then transfers energy to the turbine and generator, which produce electrical energy.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The electrical energy is transferred to devices / carried by current — accept 'electrical energy store' or 'the energy is transferred by electricity'.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Divide useful output by input and multiply by 100.", working: "\\frac{800}{2000}\\times100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "40\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The remaining $1200\\ \\text{J}$ is wasted, mainly as heat (and sound) in the turbine, pipes and surroundings.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Energy is conserved, so useful output can never equal the whole input; some is always lost to the thermal store of the surroundings.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Friction and turbulence in the water and machinery cause these losses, so efficiency is below 100%.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Gravitational potential (b) GPE → kinetic → electrical via turbine/generator (c) Electrical energy (d) $40\\%$ (e) Wasted as heat/sound due to friction; conservation of energy means some is always lost.",
            commonErrors: ["In (b) saying energy is 'created' by the turbine.", "In (e) saying the missing energy is destroyed."],
            examinerNote: "(c) Accept 'electrical energy' as the store/output. (d) Allow ecf. (e) Award B1 for heat/sound, R1 for conservation / always losses, R1 for friction link.",
          },
        },
      ],
    },
    {
      id: "myps1-u3-energy-resources",
      title: "Energy resources",
      skill: "Compare renewable and non-renewable energy resources and evaluate their advantages and environmental impacts.",
      lesson: {
        sections: [
          {
            heading: "Renewable and non-renewable resources",
            body: "**Non-renewable** resources will eventually run out: coal, oil, natural gas and nuclear fuel (uranium). Burning the **fossil fuels** (coal, oil and gas) releases carbon dioxide, which adds to the enhanced greenhouse effect and climate change. Coal and oil can also release gases that cause acid rain.\n\n**Renewable** resources are replaced as fast as they are used: wind, solar, hydroelectric (water behind dams), tidal, geothermal and biomass. They do not run out and release little or no carbon dioxide when generating electricity.",
          },
          {
            heading: "Advantages and disadvantages",
            body: "- **Wind**: no fuel needed and no carbon dioxide during use, but depends on the wind, and can spoil views and affect birds.\n- **Solar**: no pollution during use, works well in sunny places, but only produces electricity in daylight and the panels are costly to make.\n- **Hydroelectric**: reliable and can be switched on quickly, but flooding a valley destroys habitats and can displace people.\n- **Fossil fuels**: reliable and cheap to turn into electricity on demand, but release carbon dioxide and will run out.\n- **Nuclear**: no carbon dioxide during use and a lot of energy from a small amount of fuel, but it produces radioactive waste that must be stored safely for a long time.",
          },
          {
            heading: "Evaluating resources",
            body: "To evaluate, weigh up the advantages and disadvantages for a specific place. Consider reliability, cost, the effect on the environment, the effect on people and whether the supply will last. A balanced answer uses a mix of resources: renewables for low emissions, and a reliable supply (such as hydroelectric, nuclear or stored energy) for when the wind or sun is not available. Different countries make different choices because of their geography and wealth, which links to fairness and sustainability across the world.",
          },
        ],
        keyFormulas: [
          { name: "Non-renewable", statement: "Coal, oil, natural gas, nuclear fuel" },
          { name: "Renewable", statement: "Wind, solar, hydroelectric, tidal, geothermal, biomass" },
          { name: "Fossil fuel burning", statement: "Releases $\\text{CO}_2$, which contributes to climate change" },
        ],
        workedExample: {
          problem: "A small island with steady strong winds and a lot of sunshine needs a new power source. Suggest and justify one resource.",
          solution: "Wind power is a good choice. It is renewable, so it will not run out, and it needs no fuel to be imported to the island. It releases no carbon dioxide while generating. The island's steady winds make it reliable. A drawback is that there will be calm days, so it should be combined with solar panels or storage.",
        },
      },
      questions: [
        {
          id: "myps1-u3-energy-resources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these energy resources is **renewable**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uranium" },
              { id: "b", text: "Coal" },
              { id: "c", text: "Tidal power" },
              { id: "d", text: "Natural gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable resource", statement: "A renewable resource is replaced as fast as it is used, so it does not run out." },
            ],
            steps: [
              { reasoning: "Tides happen every day because of the Moon's gravity, so the resource is always replaced. Gas, coal and uranium will run out.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Tidal power",
            commonErrors: ["Choosing uranium because nuclear power releases no carbon dioxide; it is still a finite fuel.", "Confusing 'low pollution' with 'renewable'."],
            examinerNote: "B1 for tidal power.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Burning coal in a power station releases carbon dioxide.\n\nState **two** problems with using coal as an energy resource.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fossil fuels", statement: "Fossil fuels are non-renewable and release carbon dioxide when burned." },
            ],
            steps: [
              { reasoning: "One mark for each valid problem.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Any two from: it is non-renewable / will run out; burning releases carbon dioxide (adds to climate change); burning can release gases that cause acid rain; mining damages the environment.",
            commonErrors: ["Saying that coal is expensive without evidence.", "Saying that burning coal uses up the oxygen in the atmosphere."],
            examinerNote: "B1 for each. Allow 'global warming' for climate change. Ignore 'it makes smoke' on its own.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country wants to build a hydroelectric power station by building a dam across a river valley.\n\nEvaluate this plan. Give **two** advantages and **two** disadvantages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydroelectric power", statement: "Falling water turns turbines connected to generators. The resource is renewable but the dam changes the environment." },
            ],
            steps: [
              { reasoning: "Advantages: renewable (water is replaced by rain); no carbon dioxide produced while generating; can be switched on quickly to meet demand; low running costs. Any two, one mark each.", marks: 2, markCode: "B" },
              { reasoning: "Disadvantages: flooding the valley destroys habitats; people may have to move from their homes; the dam is expensive to build; supply drops in a drought. Any two, one mark each.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Advantages: renewable, no carbon dioxide in use, quick to start. Disadvantages: habitat loss, people displaced, high build cost, depends on rainfall.",
            commonErrors: ["Saying it 'does not affect the environment' because it is renewable.", "Giving the same point twice in different words."],
            examinerNote: "B1 for each valid advantage or disadvantage, maximum 2 for each. Reject 'cheap to build'. Allow 'it can store energy by holding water' oe.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A coastal town currently gets all of its electricity from a coal power station. The council is considering replacing it with either wind turbines on the nearby hills or a gas power station. Data from the council:\n\n- Coal station: reliable, produces a large amount of carbon dioxide, coal is imported.\n- Gas station: reliable, produces about half as much carbon dioxide as coal, gas is imported.\n- Wind farm: produces no carbon dioxide while operating, but only generates when the wind blows. The hills have steady winds on about 70% of days.",
          parts: [
            { label: "a", prompt: "State why coal and gas are described as non-renewable.", marks: 1 },
            { label: "b", prompt: "Explain why burning fossil fuels may lead to climate change.", marks: 2 },
            { label: "c", prompt: "A wind turbine takes in $1000\\ \\text{J}$ of kinetic energy from the wind and transfers $400\\ \\text{J}$ to electrical energy. Calculate its efficiency as a percentage.", marks: 2 },
            { label: "d", prompt: "Evaluate the three options and recommend one for the town. Use the data in your answer.", marks: 4 },
            { label: "e", prompt: "Suggest how the town could provide electricity on days when there is not enough wind.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-renewable", statement: "A non-renewable resource is used faster than it forms, so it will run out." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
              { kind: "principle", name: "Evaluating", statement: "Weigh advantages against disadvantages using evidence, then reach a justified decision." },
            ],
            steps: [
              { part: "a", reasoning: "They took millions of years to form and are being used much faster than they are replaced, so they will run out.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Burning fossil fuels releases carbon dioxide into the atmosphere.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Carbon dioxide traps more thermal energy in the atmosphere (enhanced greenhouse effect), so the Earth's average temperature rises.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide useful output by input and multiply by 100.", working: "\\frac{400}{1000}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "40\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coal: reliable but worst for carbon dioxide emissions, so it should be replaced.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Gas: reliable and cuts carbon dioxide by about half, but it is still non-renewable, so it only delays the problem.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Wind: no carbon dioxide and renewable, with winds on about 70% of days, but unreliable on the other 30%.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A justified recommendation that uses the evidence, for example wind with gas or storage as back-up, or gas as a short-term step.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Use a back-up supply such as a gas station, batteries or stored water, or import electricity from other regions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Used faster than they form, so they run out (b) Burning releases $\\text{CO}_2$, which traps thermal energy and warms the planet (c) $40\\%$ (d) Weighed options; recommend wind with back-up (e) Back-up supply or storage.",
            commonErrors: ["Choosing wind because it is 'free' and ignoring the days without wind.", "Calculating 1000 / 400 for the efficiency.", "Saying carbon dioxide 'makes holes in the ozone layer'."],
            examinerNote: "(b) Accept 'greenhouse effect' for the second mark. (d) Accept any recommendation that is supported with the given data; award R1 only if the choice is justified and links to the data. (e) Allow any sensible idea such as a mix of resources.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these energy resources is **renewable**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coal" },
              { id: "b", text: "Wind" },
              { id: "c", text: "Oil" },
              { id: "d", text: "Natural gas" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable resource", statement: "A renewable resource is replaced as fast as it is used, so it does not run out." },
            ],
            steps: [
              { reasoning: "Wind is replaced naturally and does not run out; coal, gas and oil are fossil fuels and non-renewable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Wind",
            commonErrors: ["Choosing natural gas, which is non-renewable."],
            examinerNote: "B1 for wind (accept solar, hydroelectric, tidal, geothermal, biomass).",
          },
        },
        {
          id: "myps1-u3-energy-resources-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these energy resources is **non-renewable**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geothermal" },
              { id: "b", text: "Solar" },
              { id: "c", text: "Tidal" },
              { id: "d", text: "Coal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-renewable", statement: "A non-renewable resource is used faster than it forms, so it will run out; fossil fuels and nuclear fuel are non-renewable." },
            ],
            steps: [
              { reasoning: "Coal is a fossil fuel and non-renewable; solar, tidal and geothermal are renewable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Coal",
            commonErrors: ["Choosing solar or tidal, which are renewable."],
            examinerNote: "B1 for coal (accept oil, natural gas, nuclear fuel).",
          },
        },
        {
          id: "myps1-u3-energy-resources-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why burning fossil fuels may lead to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fossil fuels", statement: "Burning fossil fuels releases carbon dioxide, which contributes to the enhanced greenhouse effect." },
            ],
            steps: [
              { reasoning: "Burning coal, oil and gas releases carbon dioxide into the atmosphere.", marks: 1, markCode: "B" },
              { reasoning: "The extra carbon dioxide traps more thermal energy (enhanced greenhouse effect), so the Earth's average temperature rises.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Burning fossil fuels releases $\\text{CO}_2$, which traps more heat in the atmosphere and warms the climate.",
            commonErrors: ["Saying carbon dioxide 'makes holes in the ozone layer'.", "Saying it directly heats the air."],
            examinerNote: "B1 for CO2 released. B1 for greenhouse effect / warming oe.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give **two** advantages of generating electricity from wind.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wind power", statement: "Wind is renewable and produces no carbon dioxide during use; no fuel is needed." },
            ],
            steps: [
              { reasoning: "Any one advantage: no carbon dioxide is produced during use; wind is renewable and does not run out; no fuel cost.", marks: 1, markCode: "B" },
              { reasoning: "A second different advantage, for example no fuel needs to be transported or it can be built on open land.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Any two of: no $\\text{CO}_2$ during use; renewable; no fuel needed/cost; works where wind is steady.",
            commonErrors: ["Listing disadvantages as advantages.", "Repeating 'it is clean' twice without a second point."],
            examinerNote: "B1 for each distinct valid advantage.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a disadvantage of building a hydroelectric power station?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces radioactive waste" },
              { id: "b", text: "It only works when the sun is shining" },
              { id: "c", text: "Flooding the valley destroys habitats and can displace people" },
              { id: "d", text: "It produces carbon dioxide while generating" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydroelectric power", statement: "The dam floods a valley, destroying habitats and possibly displacing people." },
            ],
            steps: [
              { reasoning: "Building the dam floods the valley, destroying habitats and possibly forcing people to move.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Flooding the valley destroys habitats and can displace people",
            commonErrors: ["Choosing 'produces CO2' — hydroelectric produces little or none during use."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u3-energy-resources-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solar panels are installed on a school roof. Give **two** disadvantages of using solar power for electricity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solar power", statement: "Solar only produces electricity in daylight and the panels are costly to make; output depends on the weather." },
            ],
            steps: [
              { reasoning: "Any one disadvantage: only produces electricity in daylight / depends on sunny weather; panels are expensive to manufacture.", marks: 1, markCode: "B" },
              { reasoning: "A second different disadvantage, for example output is low on cloudy days or panels need a large area / cleaning.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Any two of: only works in daylight; depends on weather; costly panels; needs a large area.",
            commonErrors: ["Saying solar produces carbon dioxide during use."],
            examinerNote: "B1 for each distinct valid disadvantage.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A coal power station produces $800\\ \\text{kg}$ of carbon dioxide per day. A gas power station producing the same amount of electricity produces half as much carbon dioxide.\n\nCalculate the mass of carbon dioxide produced by the gas station per day.",
          response: { type: "numeric", parts: [{ label: "Carbon dioxide per day", answer: 400, unit: "kg" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fossil fuels", statement: "Gas produces about half as much carbon dioxide as coal for the same energy." },
            ],
            steps: [
              { reasoning: "Find half of 800 kg.", working: "800 \\div 2 = 400\\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "State the answer with the unit.", working: "400\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$400\\ \\text{kg}$",
            commonErrors: ["Adding 400 to get 1200.", "Forgetting the unit."],
            examinerNote: "M1 for 800/2. A1 for 400 kg.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wind turbine takes in $2000\\ \\text{J}$ of kinetic energy from the wind each second and transfers $800\\ \\text{J}$ to electrical energy.\n\nCalculate the efficiency of the turbine as a percentage.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Divide useful output by total input and multiply by 100.", working: "\\frac{800}{2000}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
            commonErrors: ["Dividing 2000 by 800.", "Forgetting to multiply by 100."],
            examinerNote: "M1 for 800/2000 x 100. A1 for 40%.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two wind turbines are compared. Turbine A takes in $3000\\ \\text{J}$ of kinetic energy and generates $600\\ \\text{J}$ of electrical energy. Turbine B takes in $2000\\ \\text{J}$ and generates $700\\ \\text{J}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Efficiency of turbine A", answer: 20, unit: "%" },
              { label: "Efficiency of turbine B", answer: 35, unit: "%" },
              { label: "Difference in efficiency", answer: 15, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Turbine A: $600/3000 \\times 100$.", working: "20\\%", marks: 1, markCode: "M" },
              { reasoning: "Turbine B: $700/2000 \\times 100$.", working: "35\\%", marks: 1, markCode: "M" },
              { reasoning: "Subtract A's efficiency from B's.", working: "35-20=15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\%$, $35\\%$, $15\\%$",
            commonErrors: ["Comparing the raw outputs (700 > 600) without efficiency.", "Dividing the wrong way round."],
            examinerNote: "M1 for each efficiency. A1 for 15%.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A town's electricity currently produces $2000\\ \\text{kg}$ of carbon dioxide per day from coal. The council plans to get $60\\%$ of its electricity from gas instead, keeping $40\\%$ from coal. Gas produces half as much carbon dioxide as coal for the same amount of electricity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon dioxide from the gas portion (60% of supply)", answer: 600, unit: "kg" },
              { label: "Carbon dioxide from the coal portion (40% of supply)", answer: 800, unit: "kg" },
              { label: "Total carbon dioxide per day with the new mix", answer: 1400, unit: "kg" },
              { label: "Reduction in carbon dioxide per day", answer: 600, unit: "kg" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fossil fuels", statement: "Gas produces about half as much carbon dioxide as coal for the same energy." },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original}}\\times100$" },
            ],
            steps: [
              { reasoning: "Gas portion: 60% of the coal-equivalent emissions at half rate: $0.6 \\times 2000 \\times 0.5$.", working: "600\\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Coal portion: 40% of the original emissions.", working: "0.4 \\times 2000=800\\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Add the two parts.", working: "600+800=1400\\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the new total from the original 2000 kg.", working: "2000-1400=600\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$600\\ \\text{kg}$, $800\\ \\text{kg}$, $1400\\ \\text{kg}$, $600\\ \\text{kg}$",
            commonErrors: ["Assuming gas produces zero carbon dioxide.", "Applying the 60/40 split to the wrong quantities."],
            examinerNote: "M1 for each correct method. A1 for 600 kg reduction. Allow ecf.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A region wants to replace its coal power station with wind turbines.",
          parts: [
            { label: "a", prompt: "Give **two** advantages of wind power over coal.", marks: 2 },
            { label: "b", prompt: "Give **two** disadvantages of wind power compared with coal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating", statement: "Weigh advantages against disadvantages using evidence, then reach a justified decision." },
            ],
            steps: [
              { part: "a", reasoning: "Any two valid advantages: no carbon dioxide during use; renewable so it does not run out; no fuel cost or fuel transport.", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Any two valid disadvantages: only generates when the wind blows (unreliable); can spoil views / affect birds; needs storage or back-up for calm days.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) No $\\text{CO}_2$ during use; renewable; no fuel needed (b) Depends on wind; affects views/birds; needs back-up supply.",
            commonErrors: ["Listing the same point twice.", "Giving disadvantages of coal as disadvantages of wind."],
            examinerNote: "B1 for each distinct valid advantage/disadvantage, maximum 2 per part.",
          },
        },
        {
          id: "myps1-u3-energy-resources-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A small island village currently uses a diesel generator for all its electricity. Diesel is imported by ship and produces carbon dioxide. The village is considering three options: solar panels, a small hydroelectric scheme using a local river, or keeping the diesel generator but using it less by adding solar panels.",
          parts: [
            { label: "a", prompt: "State why diesel is described as non-renewable.", marks: 1 },
            { label: "b", prompt: "Explain one environmental problem caused by burning diesel.", marks: 1 },
            { label: "c", prompt: "Give **two** advantages and **two** disadvantages of solar power for this village.", marks: 4 },
            { label: "d", prompt: "Give **one** advantage and **one** disadvantage of the hydroelectric option.", marks: 2 },
            { label: "e", prompt: "Recommend an option for the village and justify your choice using the advantages and disadvantages.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-renewable", statement: "A non-renewable resource is used faster than it forms, so it will run out." },
              { kind: "principle", name: "Evaluating", statement: "Weigh advantages against disadvantages using evidence, then reach a justified decision." },
            ],
            steps: [
              { part: "a", reasoning: "Diesel is a fossil fuel that took millions of years to form and is used faster than it is replaced, so it will run out.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Burning diesel releases carbon dioxide, contributing to climate change (or it produces harmful pollutants).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Advantage of solar: renewable and produces no carbon dioxide during use.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Advantage of solar: panels can be installed on existing buildings / no fuel transport needed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Disadvantage of solar: only produces electricity in daylight / depends on weather.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Disadvantage of solar: panels are costly to manufacture and need a large area or storage for night.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Advantage of hydro: reliable and can be switched on quickly / renewable.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Disadvantage of hydro: building the dam floods land, destroys habitats and may displace people.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A justified recommendation, for example solar plus a small diesel back-up, because it cuts carbon dioxide and fuel imports while covering nights with diesel.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Fossil fuel used faster than it forms (b) Releases $\\text{CO}_2$ → climate change (c) Solar: renewable/no CO2, cheap to run; but daylight only, costly panels (d) Hydro: reliable/renewable; but floods habitat (e) e.g. solar + diesel back-up for justified reasons.",
            commonErrors: ["In (c) giving only advantages or only disadvantages.", "In (e) recommending without reasons."],
            examinerNote: "(c) B1 for each valid advantage/disadvantage, max 2 each. (e) Accept any reasonable option justified with the given data.",
          },
        },
      ],
    },
  ],
};
