import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ess9-u3-lesson-3-3",
  code: "3-3",
  title: "Climate Change",
  goal: "I CAN use evidence and the greenhouse effect to explain recent climate change, interpret climate data, and evaluate models, forecasts, mitigation and adaptation.",
  standards: ["HS-ESS3-5", "HS-ESS3-6", "SEP: Analyzing and Interpreting Data", "SEP: Developing and Using Models", "CCC: Systems and System Models"],
  vocabulary: [
    { term: "Greenhouse effect", definition: "The warming of Earth's surface because gases such as water vapor, carbon dioxide and methane absorb outgoing infrared radiation and radiate part of it back down." },
    { term: "Greenhouse gas", definition: "A gas in the atmosphere that absorbs and emits infrared radiation, including carbon dioxide, methane, nitrous oxide and water vapor." },
    { term: "Temperature anomaly", definition: "The difference between a temperature and the average over a chosen reference period." },
    { term: "Proxy", definition: "A natural record, such as an ice core, tree ring or coral, that preserves evidence of past climate." },
    { term: "Climate model", definition: "A computer simulation that uses physical equations to represent Earth's systems and project how climate responds to changes." },
    { term: "Mitigation", definition: "Actions that reduce greenhouse gas emissions or remove carbon dioxide from the atmosphere." },
    { term: "Adaptation", definition: "Adjustments that reduce harm from climate change that is already happening or expected." },
  ],
  concepts: [
    {
      id: "ess9-u3-climate-evidence",
      title: "Evidence for climate change and the greenhouse effect",
      skill: "Explain the greenhouse effect and interpret climate data on temperature and carbon dioxide.",
      lesson: {
        sections: [
          {
            heading: "The greenhouse effect",
            body: "Earth absorbs sunlight, warms, and radiates energy to space as **infrared** radiation. Greenhouse gases absorb part of this infrared and re-emit it in all directions, including back toward the surface. This natural **greenhouse effect** keeps Earth's average surface temperature near $15\\,^{\\circ}\\text{C}$ instead of about $-18\\,^{\\circ}\\text{C}$.\n\nBurning fossil fuels, clearing forests and some farming add greenhouse gases. More greenhouse gas means more outgoing infrared is trapped, so the surface warms until outgoing energy again balances incoming energy.",
          },
          {
            heading: "Lines of evidence",
            body: "Several independent kinds of evidence agree that Earth has warmed since the late 1800s.\n\n- **Thermometers** on land and ocean show a rise in global average temperature of roughly $1\\,^{\\circ}\\text{C}$ or more since 1880.\n- **Ice cores** trapped air bubbles show carbon dioxide stayed between about 180 and 300 ppm for hundreds of thousands of years and is now above 400 ppm.\n- **Sea level** has risen from ocean warming (thermal expansion) and melting land ice.\n- **Glaciers and Arctic sea ice** have been shrinking.\n- **Isotope signatures** of carbon in the air show that much of the added carbon dioxide comes from fossil fuels.\n\nNatural factors such as the Sun's output and volcanoes do not explain the recent warming pattern.",
          },
          {
            heading: "Reading climate data",
            body: "Climate is the long-term pattern of weather, often averaged over 30 years, so one cold year does not disprove warming. When reading a graph, describe the overall **trend**, compare **rates of change** (change divided by time) and separate year-to-year variation from the long-term trend. Percent change is $\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Rate of change", statement: "$\\dfrac{\\text{change in value}}{\\text{change in time}}$" },
          { name: "Percent change", statement: "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" },
          { name: "Greenhouse effect", statement: "Greenhouse gases absorb outgoing infrared and re-emit some back to the surface, warming it." },
        ],
        workedExample: {
          problem: "Carbon dioxide in the atmosphere rose from about 280 ppm before the Industrial Revolution to about 420 ppm today. Calculate the percent increase.",
          solution: "Percent increase $=\\dfrac{420-280}{280}\\times100=\\dfrac{140}{280}\\times100=50\\%$.",
        },
      },
      questions: [
        {
          id: "ess9-u3-climate-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes how greenhouse gases warm Earth's surface?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They reflect all incoming sunlight back to space." },
              { id: "b", text: "They make the Sun produce more energy." },
              { id: "c", text: "They absorb outgoing infrared radiation and re-emit part of it back toward the surface." },
              { id: "d", text: "They create heat by chemical reactions in the upper atmosphere." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Greenhouse effect", statement: "Greenhouse gases absorb infrared radiation from Earth and re-emit it in all directions, including down to the surface." },
            ],
            steps: [
              { reasoning: "The warming mechanism is absorption and re-emission of infrared radiation, which slows the loss of energy to space.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They absorb outgoing infrared radiation and re-emit part of it back toward the surface.",
            commonErrors: ["Confusing the greenhouse effect with reflection of sunlight, which cools Earth.", "Thinking greenhouse gases change the Sun's output."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ess9-u3-climate-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Ice core data show that atmospheric carbon dioxide was 280 ppm in 1750. In 2020 it was 413 ppm.\n\nCalculate the percent increase in carbon dioxide from 1750 to 2020. Give your answer to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Percent increase", answer: 48, unit: "%", tolerance: 0.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent change", statement: "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Find the change and divide by the original value.", working: "\\frac{413-280}{280}\\times100=\\frac{133}{280}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round.", working: "47.5\\%\\approx48\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48\\%$",
            commonErrors: ["Dividing by the new value (413) to get 32%.", "Giving the change, 133 ppm, as the percentage."],
            examinerNote: "M1 for 133 / 280 (oe). A1 for 48 (accept 47.5)."
          },
        },
        {
          id: "ess9-u3-climate-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A commentator says: \"The winter was very cold this year, so global warming is not happening.\"\n\nUse evidence and reasoning to evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weather and climate", statement: "Weather is short-term and local; climate is the long-term average, usually over 30 years or more." },
              { kind: "principle", name: "Multiple lines of evidence", statement: "Conclusions about climate rest on long-term records from many independent sources." },
            ],
            steps: [
              { reasoning: "Claim: the statement is not valid evidence against warming.", marks: 1, markCode: "R" },
              { reasoning: "One cold season or region is weather, which varies naturally; climate is a long-term average.", marks: 1, markCode: "B" },
              { reasoning: "Evidence that long-term trends show warming: global average temperature records, retreating glaciers, rising sea level, or ice core carbon dioxide.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: a global warming trend still has cold days and years, because natural variation is superimposed on the trend; the global average, not one place, is the correct measure.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is weak: a single cold winter in one place is weather, not climate. Global long-term records (temperature, glaciers, sea level) show warming, and natural variability produces cold periods inside a warming trend.",
            commonErrors: ["Accepting local weather as evidence about global climate.", "Dismissing the claim without citing any long-term evidence."],
            examinerNote: "R1 for rejecting the claim. B1 weather vs climate. B1 for a named long-term evidence source. R1 for linking variability to the trend (allow global vs local scale)."
          },
        },
        {
          id: "ess9-u3-climate-evidence-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The table gives simplified, rounded data for global average temperature anomaly (compared with the 1951-1980 average) and atmospheric carbon dioxide.\n\n| Year | Carbon dioxide (ppm) | Temperature anomaly ($^{\\circ}\\text{C}$) |\n| --- | --- | --- |\n| 1980 | 339 | 0.30 |\n| 2000 | 370 | 0.40 |\n| 2020 | 413 | 1.00 |",
          parts: [
            { label: "a", prompt: "Calculate the average rate of increase of carbon dioxide from 1980 to 2000, in ppm per year.", marks: 2 },
            { label: "b", prompt: "Calculate the average rate of increase of carbon dioxide from 2000 to 2020, in ppm per year, to 1 decimal place.", marks: 2 },
            { label: "c", prompt: "Describe the pattern shown by the carbon dioxide data and the temperature data.", marks: 2 },
            { label: "d", prompt: "A student concludes that the data prove carbon dioxide caused all the temperature rise. Evaluate this conclusion and state what other evidence supports the link.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate}=\\dfrac{\\text{change in value}}{\\text{change in time}}$" },
              { kind: "principle", name: "Correlation and causation", statement: "A correlation alone does not prove causation; a mechanism and multiple lines of evidence are needed." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in carbon dioxide by the number of years.", working: "\\frac{370-339}{20}=\\frac{31}{20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "1.55\\text{ ppm/year}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the change by 20 years.", working: "\\frac{413-370}{20}=\\frac{43}{20}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 1 decimal place.", working: "2.15\\approx2.2\\text{ ppm/year}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Carbon dioxide rose throughout, and the rate of rise increased between the two periods.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The temperature anomaly also rose, and by more in the later period (0.1 then 0.6 degrees Celsius).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The conclusion is too strong: correlation alone does not prove causation, and three data points are limited.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Natural factors and other greenhouse gases also influence temperature, so \"all\" is not supported.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Supporting evidence: the physics of infrared absorption by carbon dioxide, measured by laboratory experiments.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Further evidence: carbon isotope signatures showing fossil-fuel origin, or the pattern of warming at night and in the lower atmosphere with cooling in the stratosphere, or models that match observations only when human emissions are included.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $1.55\\text{ ppm/year}$ (b) $2.2\\text{ ppm/year}$ (c) Both rose, faster in the later period (d) Correlation is not proof and 'all' overstates it; the physics of infrared absorption, isotopes and model comparisons provide further support for the link.",
            commonErrors: ["In (a) and (b) dividing by the starting value rather than by the time.", "In (d) accepting that correlation proves causation."],
            examinerNote: "(a) Allow 1.6 for A1 only if 1.55 is seen. (b) Allow 2.15 or 2.2. (c) Allow any correct description of increasing trend and acceleration. (d) Accept other independent evidence lines such as sea level or ice cores."
          },
        },
      ],
    },
    {
      id: "ess9-u3-climate-models-solutions",
      title: "Modeling future climate, mitigation and adaptation",
      skill: "Evaluate climate model projections and compare mitigation and adaptation strategies.",
      lesson: {
        sections: [
          {
            heading: "How climate models work",
            body: "Climate models divide the atmosphere, oceans, land and ice into a grid and apply physical laws (conservation of energy, motion of fluids, radiation) to calculate how the system changes over time. Scientists test models by running them over the past and comparing the output with observations (a process called **hindcasting**).\n\nProjections are not single predictions. Scientists run many **scenarios** with different future emissions and report a range, because the future depends on human choices and because of **uncertainty** in the model, such as cloud behavior and feedbacks.",
          },
          {
            heading: "Emissions budgets",
            body: "Because carbon dioxide stays in the atmosphere for a long time, warming depends strongly on the **total** amount emitted. Cumulative emissions are the area under an emissions-versus-time graph.\n\n- Constant emissions: total $=$ rate $\\times$ time.\n- Emissions falling in a straight line to zero: total $=\\dfrac{1}{2}\\times\\text{starting rate}\\times\\text{time}$.\n\nThis helps compare scenarios and shows that earlier cuts reduce the total more.",
          },
          {
            heading: "Mitigation and adaptation",
            body: "**Mitigation** addresses causes: renewable energy, energy efficiency, electrified transport, protecting forests, reducing methane, and carbon capture. **Adaptation** addresses effects: sea walls, drought-resistant crops, heat action plans, improved water storage and relocating from high-risk coasts.\n\nBoth are needed because some change is already locked in. Solutions are evaluated against criteria such as cost, effectiveness, reliability, fairness and side effects, and the cost-benefit ideas from earlier lessons apply.",
          },
        ],
        keyFormulas: [
          { name: "Constant emissions", statement: "total $=$ annual emissions $\\times$ years" },
          { name: "Linear decline to zero", statement: "total $=\\dfrac{1}{2}\\times$ starting annual emissions $\\times$ years" },
          { name: "Linear projection", statement: "future value $=$ current value $+$ rate $\\times$ time" },
        ],
        workedExample: {
          problem: "Global emissions are 40 billion tonnes of carbon dioxide per year. Find the total emitted over 20 years if emissions (a) stay constant, and (b) fall in a straight line to zero over the 20 years.",
          solution: "(a) $40\\times20=800$ billion tonnes. (b) The total is the area of a triangle: $\\tfrac12\\times40\\times20=400$ billion tonnes. Cutting emissions steadily halves the total in this example.",
        },
      },
      questions: [
        {
          id: "ess9-u3-climate-models-solutions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of climate **adaptation** rather than mitigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planting forests to absorb carbon dioxide" },
              { id: "b", text: "Improving the energy efficiency of appliances" },
              { id: "c", text: "Building a sea wall to protect a coastal city from rising seas" },
              { id: "d", text: "Building solar and wind power plants" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "Adjustments that reduce harm from climate change effects." },
              { kind: "definition", name: "Mitigation", statement: "Actions that reduce greenhouse gas emissions or remove carbon dioxide." },
            ],
            steps: [
              { reasoning: "A sea wall limits damage from sea-level rise but does not change greenhouse gas levels, so it is adaptation. The others cut or remove emissions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Building a sea wall to protect a coastal city from rising seas",
            commonErrors: ["Choosing forests, which remove carbon dioxide and are mitigation."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ess9-u3-climate-models-solutions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A model projects that, under one scenario, global average temperature will rise at a steady rate of $0.2\\,^{\\circ}\\text{C}$ per decade. The anomaly today is $1.2\\,^{\\circ}\\text{C}$.\n\nUse a linear projection to calculate the anomaly after 5 decades.",
          response: { type: "numeric", parts: [{ label: "Anomaly after 5 decades", answer: 2.2, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear projection", statement: "future value = current value + rate $\\times$ time" },
            ],
            steps: [
              { reasoning: "Find the rise over 5 decades.", working: "0.2\\times5=1.0\\,^{\\circ}\\text{C}", marks: 1, markCode: "M" },
              { reasoning: "Add to the current anomaly.", working: "1.2+1.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "2.2\\,^{\\circ}\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.2\\,^{\\circ}\\text{C}$",
            commonErrors: ["Giving the rise (1.0) rather than the new anomaly.", "Using 5 years instead of 5 decades."],
            examinerNote: "M1 for 0.2 x 5. M1 for adding 1.2. A1 for 2.2. Allow 1.0 for M1 only."
          },
        },
        {
          id: "ess9-u3-climate-models-solutions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Different climate model runs give a range of projected warming for the year 2100, even when they use the same emissions scenario.\n\nExplain **two** reasons for the range, and explain why a range is more useful to decision makers than a single number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Uncertainty in models", statement: "Models simplify a complex system, and processes such as clouds and feedbacks are represented with approximations." },
              { kind: "principle", name: "Scenarios", statement: "Projections depend on future human choices as well as on science." },
            ],
            steps: [
              { reasoning: "Reason one: models represent small-scale processes such as clouds or aerosols in different ways because they are approximated.", marks: 1, markCode: "B" },
              { reasoning: "Reason two: uncertainty in the strength of feedbacks (for example ice-albedo or carbon cycle feedbacks) or the natural variability of climate.", marks: 1, markCode: "B" },
              { reasoning: "A range shows how likely and how severe outcomes might be, so planners can prepare for low and high cases.", marks: 1, markCode: "R" },
              { reasoning: "A single number would hide the uncertainty and could give false confidence; the range supports risk-based decisions.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Models approximate small-scale processes and feedbacks differently, and natural variability adds spread. A range communicates uncertainty and lets planners prepare for both low and high outcomes instead of relying on a single number.",
            commonErrors: ["Saying that a range means models are useless.", "Confusing uncertainty in the science with uncertainty about which emissions scenario is followed."],
            examinerNote: "B1 each for two different valid reasons. R1 for use in planning. R1 for the problem with a single value."
          },
        },
        {
          id: "ess9-u3-climate-models-solutions-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Annual global emissions are currently 40 billion tonnes of carbon dioxide. Two scenarios are compared over the next 30 years.\n\nScenario A: emissions stay constant at 40 billion tonnes per year.\nScenario B: emissions fall in a straight line from 40 billion tonnes per year to zero over 30 years.",
          parts: [
            { label: "a", prompt: "Calculate the total emissions over 30 years under Scenario A, in billion tonnes.", marks: 2 },
            { label: "b", prompt: "Calculate the total emissions over 30 years under Scenario B, in billion tonnes.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage by which Scenario B reduces total emissions compared with Scenario A.", marks: 2 },
            { label: "d", prompt: "Explain why Scenario B would still not stop the climate from changing immediately.", marks: 1 },
            { label: "e", prompt: "Compare mitigation and adaptation, giving one example of each and one reason both are needed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cumulative emissions", statement: "Constant: rate $\\times$ time. Linear decline to zero: $\\tfrac12\\times$ starting rate $\\times$ time." },
              { kind: "definition", name: "Mitigation and adaptation", statement: "Mitigation reduces causes; adaptation reduces harm from effects." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply constant emissions by the time.", working: "40\\times30", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "1200\\text{ billion tonnes}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The total is the area of a triangle: half of base times height.", working: "\\tfrac12\\times40\\times30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "600\\text{ billion tonnes}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the reduction and divide by Scenario A.", working: "\\frac{1200-600}{1200}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "50\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Carbon dioxide already emitted stays in the atmosphere for a long time (and emissions continue during the decline), so concentrations and warming persist or keep rising for decades.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A valid example of mitigation (for example expanding renewable energy) and of adaptation (for example sea walls or drought-resistant crops).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A clear difference: mitigation targets the causes (emissions), adaptation targets the effects.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A reason both are needed: some climate change is already unavoidable because of past emissions, while mitigation limits how large the changes become.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1200$ billion tonnes (b) $600$ billion tonnes (c) $50\\%$ (d) Past emissions persist in the atmosphere (e) Mitigation cuts emissions (such as renewables); adaptation reduces harm (such as sea walls); both are needed because some change is already locked in.",
            commonErrors: ["In (b) using 40 x 30 again (treating the decline as no change).", "In (c) dividing by 600 instead of 1200 to get 100%."],
            examinerNote: "(b) Allow M1 for the average emissions 20 x 30. (c) Allow ecf from (a) and (b). (e) Accept other valid examples."
          },
        },
      ],
    },
  ],
};
