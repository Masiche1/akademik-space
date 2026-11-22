import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eph11-u2-lesson-2-3",
  code: "2-3",
  title: "Electricity Generation and Energy Resources",
  goal: "I CAN describe how electricity is generated from different energy resources and evaluate them for reliability, cost and environmental impact.",
  standards: ["4PH1 1.9", "4PH1 1.10", "4PH1 1.11", "4PH1 1.12", "4PH1 1.13"],
  vocabulary: [
    { term: "Renewable resource", definition: "An energy resource that is replaced as fast as it is used, or will not run out, such as wind, solar, hydroelectric, tidal, geothermal and biofuels." },
    { term: "Non-renewable resource", definition: "An energy resource that is used faster than it forms and will eventually run out, such as coal, oil, natural gas and nuclear fuel." },
    { term: "Fossil fuel", definition: "Coal, oil or natural gas, formed over millions of years from dead plants and animals. Burning them releases carbon dioxide." },
    { term: "Turbine", definition: "A set of blades that is turned by steam, water or wind and drives a generator." },
    { term: "Reliable", definition: "An energy resource is reliable if it can supply electricity whenever it is needed, whatever the weather or time of day." },
    { term: "Payback time", definition: "The time taken for the savings (or income) from an installation to equal its initial cost." },
    { term: "Efficiency", definition: "The fraction of the total energy input that is transferred to a useful form: $\\frac{\\text{useful output}}{\\text{total input}}$." },
  ],
  concepts: [
    {
      id: "eph11-u2-electricity-generation",
      title: "Generating electricity",
      skill: "Describe the energy transfers in power stations and in renewable generators, and calculate power and efficiency.",
      lesson: {
        sections: [
          {
            heading: "Thermal power stations",
            body: "In a **fossil fuel** power station the energy transfers are:\n\n$$\\text{chemical (fuel)} \\rightarrow \\text{thermal (steam)} \\rightarrow \\text{kinetic (turbine)} \\rightarrow \\text{electrical (generator)}$$\n\nThe fuel is burned to heat water into high-pressure steam. The steam turns a turbine, which drives a generator. **Nuclear power stations** work the same way, but the thermal energy comes from nuclear fission of uranium or plutonium, not burning, so no carbon dioxide is released. **Biofuels** are burned in the same way. In **geothermal** stations, hot rocks heat water into steam.",
          },
          {
            heading: "Renewable generators",
            body: "- **Wind**: the kinetic energy of moving air turns turbine blades connected to a generator.\n- **Hydroelectric**: water stored at a height has gravitational potential energy; it flows down through turbines. Some schemes pump water back up when demand is low.\n- **Tidal**: the rise and fall of the tide turns turbines in a barrage or underwater.\n- **Waves**: the motion of waves drives generators.\n- **Solar cells** transfer light energy directly to electrical energy with no turbine or generator. **Solar heating** panels heat water directly.",
          },
          {
            heading: "Power and efficiency",
            body: "The gravitational potential energy of water falling a height $h$ is $E = mgh$, so the power from water flowing at a mass per second is $P = \\frac{mgh}{t}$.\n\nNo power station is $100\\%$ efficient. Waste energy is transferred as heat to the surroundings.\n\n$$\\text{efficiency} = \\frac{\\text{useful power output}}{\\text{total power input}} \\times 100\\%$$\n\nA typical fossil fuel power station has an efficiency of about $35\\%$ to $45\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
          { name: "Gravitational potential energy", statement: "$\\Delta E = mg\\Delta h$" },
          { name: "Power", statement: "$P = \\frac{E}{t}$" },
        ],
        workedExample: {
          problem: "A power station receives $600\\text{ MW}$ of thermal power from its fuel and produces $240\\text{ MW}$ of electrical power. Calculate its efficiency.",
          solution: "$\\text{efficiency} = \\frac{240}{600} \\times 100\\% = 40\\%$. The remaining $360\\text{ MW}$ is wasted as heat.",
        },
      },
      questions: [
        {
          id: "eph11-u2-electricity-generation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy resource does **not** use a turbine and generator to produce electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind" },
              { id: "b", text: "Solar cells" },
              { id: "c", text: "Nuclear" },
              { id: "d", text: "Hydroelectric" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solar cells", statement: "Solar cells transfer light energy directly into electrical energy." },
            ],
            steps: [
              { reasoning: "Wind and hydroelectric turn turbines directly. Nuclear heats steam that turns a turbine. Solar cells convert light to electricity directly, with no moving parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Solar cells",
            commonErrors: ["Choosing (d), thinking nuclear power produces electricity directly from the reaction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u2-electricity-generation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A coal-fired power station burns coal that supplies $500\\text{ MW}$ of thermal power. Its electrical output is $180\\text{ MW}$. Calculate the efficiency of the power station as a percentage, and the power wasted.",
          response: {
            type: "numeric",
            parts: [
              { label: "Efficiency (%)", answer: 36, unit: "%" },
              { label: "Wasted power (MW)", answer: 320, unit: "MW" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
              { kind: "law", name: "Conservation of energy", statement: "Total input power = useful output power + wasted power." },
            ],
            steps: [
              { reasoning: "Divide the useful output by the input and multiply by 100.", working: "\\frac{180}{500} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "36\\%", marks: 1, markCode: "A" },
              { reasoning: "Wasted power is input minus useful output.", working: "500 - 180 = 320\\text{ MW}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Efficiency $36\\%$; wasted power $320\\text{ MW}$",
            commonErrors: ["Dividing input by output, giving 278%.", "Giving the wasted power as $180\\text{ MW}$."],
            examinerNote: "Allow 0.36 for efficiency if stated as a fraction. Allow ecf for the wasted power from a wrong subtraction only if it is based on the correct values.",
          },
        },
        {
          id: "eph11-u2-electricity-generation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a hydroelectric power station, $2000\\text{ kg}$ of water falls through a height of $50\\text{ m}$ every second. The gravitational field strength is $10\\text{ N/kg}$. The station is $80\\%$ efficient. Calculate the electrical power output in megawatts.",
          response: {
            type: "numeric",
            parts: [{ label: "Electrical power (MW)", answer: 0.8, tolerance: 0.001, unit: "MW" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gravitational potential energy", statement: "$\\Delta E = mg\\Delta h$" },
              { kind: "formula", name: "Efficiency", statement: "$\\text{useful output} = \\text{efficiency} \\times \\text{total input}$" },
            ],
            steps: [
              { reasoning: "Energy released each second by the falling water.", working: "E = mgh = 2000 \\times 10 \\times 50", marks: 1, markCode: "M" },
              { reasoning: "This is $1\\,000\\,000\\text{ J}$ per second, so the input power is $1.0\\text{ MW}$.", working: "P_{in} = 1\\,000\\,000\\text{ W}", marks: 1, markCode: "A" },
              { reasoning: "Multiply by the efficiency.", working: "0.80 \\times 1\\,000\\,000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in megawatts.", working: "800\\,000\\text{ W} = 0.80\\text{ MW}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.80\\text{ MW}$",
            commonErrors: ["Forgetting to multiply by the efficiency, giving $1.0\\text{ MW}$.", "Converting to megawatts incorrectly, giving $800\\text{ MW}$."],
            examinerNote: "Accept 800 000 W or 800 kW as a correct equivalent for the final A mark if the answer box is in MW and the unit is given.",
          },
        },
        {
          id: "eph11-u2-electricity-generation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A wind farm has several turbines. Each turbine has blades of length $40\\text{ m}$ and generates a mean power of $2.0\\text{ MW}$. The wind farm supplies electricity to the National Grid.",
          parts: [
            { label: "a", prompt: "Describe the energy transfers in a wind turbine.", marks: 2 },
            { label: "b", prompt: "A wind farm has 25 turbines. Calculate the total electrical energy in megawatt hours produced in 24 hours at the mean power.", marks: 3 },
            { label: "c", prompt: "State the number of these turbines needed to supply a total power of $50\\text{ MW}$.", marks: 1 },
            { label: "d", prompt: "Explain why a wind farm cannot be relied on to supply a constant power.", marks: 1 },
            { label: "e", prompt: "Explain one environmental advantage of wind power over burning coal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = Pt$" },
              { kind: "principle", name: "Renewable resource", statement: "Wind is replaced continuously and produces no carbon dioxide when generating." },
            ],
            steps: [
              { part: "a", reasoning: "Kinetic energy of the wind is transferred to kinetic energy of the turbine blades.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The generator then transfers this to electrical energy.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Total power of the wind farm.", working: "25 \\times 2.0 = 50\\text{ MW}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply by the time in hours.", working: "E = Pt = 50 \\times 24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "1200\\text{ MWh}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The farm already produces $50\\text{ MW}$, so 25 turbines supply the same power as the station.", working: "\\frac{50}{2.0} = 25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The output depends on the wind speed, which varies; when there is no wind there is no output.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Wind turbines do not burn fuel, so they release no carbon dioxide while operating.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So they do not add to global warming (or produce acid rain gases).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) kinetic of wind to kinetic of blades to electrical (b) $1200\\text{ MWh}$ (c) 25 turbines (d) depends on wind speed (e) no carbon dioxide, so no contribution to global warming",
            commonErrors: ["Saying wind turbines are completely free of environmental problems; they affect the landscape and wildlife.", "Using $E = P \\div t$ in (b)."],
            examinerNote: "In (b) allow $4.32 \\times 10^{12}\\text{ J}$ (since 1 MWh = 3.6 GJ). Allow ecf in (c) only from a wrong (b) if clearly based on the same power. Do not award (e) for 'it is renewable' alone.",
          },
        },
      ],
    },
    {
      id: "eph11-u2-evaluating-energy-resources",
      title: "Evaluating energy resources",
      skill: "Compare energy resources for reliability, cost and environmental impact, and calculate payback time and running costs.",
      lesson: {
        sections: [
          {
            heading: "Criteria for comparing resources",
            body: "When evaluating an energy resource, compare:\n\n- **Reliability**: can it supply power whenever needed? Fossil fuels, nuclear, geothermal and hydroelectric (with stored water) are reliable. Wind and solar depend on weather and time of day. Tidal is predictable but not constant.\n- **Cost**: set-up cost (building) and running cost (fuel, maintenance). Wind, solar and tidal have high set-up costs and very low running costs. Nuclear has a high set-up and decommissioning cost.\n- **Environmental impact**: carbon dioxide and other emissions, habitat loss, visual or noise pollution and waste.\n- **Resource lifetime**: renewable resources do not run out.",
          },
          {
            heading: "Typical advantages and disadvantages",
            body: "| Resource | Advantage | Disadvantage |\n| --- | --- | --- |\n| Fossil fuels | Reliable, can respond quickly to demand | Release $\\text{CO}_2$ (global warming) and $\\text{SO}_2$ (acid rain); will run out |\n| Nuclear | No $\\text{CO}_2$ in operation; very large energy from little fuel | Radioactive waste lasts for thousands of years; risk of accidents; costly to decommission |\n| Wind | Renewable, no emissions, low running cost | Unreliable; visual and noise pollution; harms birds |\n| Solar | Renewable, no emissions, useful in remote places | Unreliable (no power at night); high set-up cost per kW |\n| Hydroelectric | Renewable, reliable, can store energy | Floods valleys, destroys habitats; high set-up cost |\n| Tidal | Renewable, predictable | Harms estuary habitats; high set-up cost |",
          },
          {
            heading: "Costs and payback",
            body: "The **energy used** by a device is $E = Pt$. With $P$ in kilowatts and $t$ in hours the energy is in kilowatt hours (kWh), and:\n\n$$\\text{cost} = \\text{energy in kWh} \\times \\text{price per kWh}$$\n\n$$\\text{payback time} = \\frac{\\text{initial cost}}{\\text{saving per year}}$$\n\nA short payback time shows that an investment, such as solar panels, is more economical. Remember that comparing costs is only part of the evaluation: a conclusion must also weigh reliability and environmental impact.",
          },
        ],
        keyFormulas: [
          { name: "Energy transferred", statement: "$E = Pt$" },
          { name: "Cost of energy", statement: "$\\text{cost} = \\text{kWh} \\times \\text{price per kWh}$" },
          { name: "Payback time", statement: "$\\frac{\\text{initial cost}}{\\text{saving per year}}$" },
        ],
        workedExample: {
          problem: "A $3.0\\text{ kW}$ electric heater runs for 4 hours. Electricity costs $20\\text{p}$ per kWh. Calculate the cost.",
          solution: "Energy $= 3.0 \\times 4 = 12\\text{ kWh}$. Cost $= 12 \\times 20 = 240\\text{p} = \\text{£}2.40$.",
        },
      },
      questions: [
        {
          id: "eph11-u2-evaluating-energy-resources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a disadvantage of burning fossil fuels to generate electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are renewable." },
              { id: "b", text: "They produce long-lived radioactive waste." },
              { id: "c", text: "They cannot supply power on demand." },
              { id: "d", text: "They release carbon dioxide, which contributes to global warming." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fossil fuels", statement: "Fossil fuels are non-renewable and release carbon dioxide when burned." },
            ],
            steps: [
              { reasoning: "Burning fossil fuels releases $\\text{CO}_2$, a greenhouse gas. They are reliable and non-renewable, and radioactive waste is from nuclear power.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** They release carbon dioxide, which contributes to global warming.",
            commonErrors: ["Choosing (a); fossil fuel stations can respond quickly to demand.", "Choosing (d), mixing up fossil fuels with nuclear fuel."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u2-evaluating-energy-resources-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A heater of power $2.5\\text{ kW}$ is used for 6 hours. Electricity costs $24\\text{p}$ per kWh. Calculate the total cost in pounds.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost (£)", answer: 3.6, tolerance: 0.01, unit: "£" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = Pt$, with $P$ in kW and $t$ in h giving kWh." },
              { kind: "formula", name: "Cost", statement: "$\\text{cost} = \\text{energy in kWh} \\times \\text{price per kWh}$" },
            ],
            steps: [
              { reasoning: "Find the energy used in kilowatt hours.", working: "E = Pt = 2.5 \\times 6 = 15\\text{ kWh}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the price per kWh.", working: "15 \\times 24 = 360\\text{p}", marks: 1, markCode: "M" },
              { reasoning: "Convert pence to pounds.", working: "\\text{£}3.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£3.60",
            commonErrors: ["Not converting pence to pounds, giving 360.", "Using power in watts so that the energy is $15\\,000$ kWh."],
            examinerNote: "Allow 360p. If using joules, allow the correct conversion at 1 kWh = 3.6 MJ.",
          },
        },
        {
          id: "eph11-u2-evaluating-energy-resources-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A household installs solar panels at a cost of £4200. The panels generate $3000\\text{ kWh}$ of electricity each year, which saves £0.15 per kWh. Calculate the payback time in years. Give your answer to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [{ label: "Payback time (years)", answer: 9.3, tolerance: 0.05, unit: "years" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Payback time", statement: "$\\text{payback time} = \\frac{\\text{initial cost}}{\\text{saving per year}}$" },
            ],
            steps: [
              { reasoning: "Find the annual saving.", working: "3000 \\times 0.15 = \\text{£}450", marks: 1, markCode: "M" },
              { reasoning: "Divide the initial cost by the annual saving.", working: "\\frac{4200}{450}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 1 decimal place.", working: "9.33\\ldots \\approx 9.3\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9.3\\text{ years}$",
            commonErrors: ["Dividing the saving by the cost, giving 0.107.", "Using $\\text{£}0.15$ as 15 pounds per kWh."],
            examinerNote: "A1 for 9.3. Allow 9.33 or 9 years 4 months.",
          },
        },
        {
          id: "eph11-u2-evaluating-energy-resources-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country needs to replace an old coal-fired power station. Two options are considered.\n\n- Option A: a gas-fired power station, cost £400 million, reliable, releases carbon dioxide.\n- Option B: an offshore wind farm, cost £900 million, produces power only when the wind blows, releases no carbon dioxide in operation.\n\nThe wind farm has an annual running cost of £10 million. It generates electricity worth £150 million each year at the market price.",
          parts: [
            { label: "a", prompt: "State why a gas-fired power station is described as non-renewable.", marks: 1 },
            { label: "b", prompt: "Calculate the net income each year from the wind farm.", marks: 2 },
            { label: "c", prompt: "Calculate how many years it would take the wind farm to pay back its cost. Give your answer to the nearest whole year.", marks: 2 },
            { label: "d", prompt: "Evaluate the two options and recommend one, making reference to cost, reliability and the environment.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-renewable", statement: "A non-renewable resource is used faster than it forms and will eventually run out." },
              { kind: "formula", name: "Payback time", statement: "$\\text{payback time} = \\frac{\\text{initial cost}}{\\text{net saving or income per year}}$" },
              { kind: "principle", name: "Evaluation", statement: "A recommendation should weigh advantages and disadvantages across several criteria and reach a justified conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Natural gas will run out because it forms over millions of years but is used much faster.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Net income is the value of electricity minus the running costs.", working: "150 - 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\text{£}140\\text{ million}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the cost by the net annual income.", working: "\\frac{900}{140} = 6.43\\ldots", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round to the nearest whole year.", working: "6\\text{ years}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cost: the wind farm costs more to build (£900 million against £400 million) but pays back in about 6 years and has no fuel costs.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reliability: gas supplies power on demand, but the wind farm is variable and may need a back-up or energy storage.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Environment: the gas station releases carbon dioxide; the wind farm does not in operation, though it may affect wildlife and seascape.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A clear recommendation is made.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The recommendation is justified by the points above, for example wind as it avoids emissions and pays back, supported by other reliable sources.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) it will run out (b) £140 million per year (c) 6 years (d) justified recommendation weighing cost, reliability and environment",
            commonErrors: ["Ignoring the running cost in (b), giving £150 million.", "Giving a recommendation with no justification.", "Rounding 6.43 up to 7 years."],
            examinerNote: "In (d) either recommendation is acceptable if justified; award the R mark only when the choice follows from the points made. In (c) allow ecf from (b); allow 6.4 as a working value.",
          },
        },
      ],
    },
  ],
};
