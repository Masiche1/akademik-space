import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "geo-u2-lesson-2-1",
  code: "2-1",
  title: "River Processes and Landforms",
  goal: "I CAN explain fluvial erosion, transportation and deposition and relate them to characteristic river landforms.",
  standards: ["Paper 1", "Paper 2", "Rivers"],
  vocabulary: [
    { term: "Hydraulic action", definition: "Erosion by the force of water itself, compressing air into cracks." },
    { term: "Abrasion (corrasion)", definition: "Erosion by sediment grinding against the river bed and banks." },
    { term: "Attrition", definition: "Reduction of transported particles' size through mutual collision." },
    { term: "Solution (corrosion)", definition: "Dissolution of soluble rock (e.g. limestone) by river water." },
    { term: "Traction", definition: "Transport of large particles rolling along the river bed." },
    { term: "Load", definition: "All material carried by a river — dissolved, suspended and bed load." },
  ],
  concepts: [
    {
      id: "geo-u2-fluvial-processes",
      title: "Fluvial erosion and transport",
      skill: "Describe the four processes of fluvial erosion and the mechanisms of sediment transport in rivers.",
      lesson: {
        sections: [
          {
            heading: "Erosion processes",
            body: "Rivers erode through **hydraulic action** (force of water), **abrasion** (sediment grinding bed and banks), **attrition** (particles wearing each other down) and **solution** (chemical dissolution of limestone). Erosion is most effective where velocity and load are high — typically in upland and middle courses.",
          },
          {
            heading: "Transportation",
            body: "Rivers transport **load** in four modes: **solution** (dissolved minerals), **suspension** (fine particles carried within the flow), **saltation** (small particles bouncing along the bed) and **traction** (large material rolling). Competence and capacity rise with discharge and velocity.",
          },
          {
            heading: "Controls on erosion and transport",
            body: "Discharge, velocity, gradient and bed material control process rates. Steep, fast upland reaches erode vertically; lowland reaches transport and deposit. Human alterations — dams, abstraction, straightening — change sediment budgets and erosion patterns downstream.",
          },
        ],
        keyFormulas: [
          { name: "Erosion processes", statement: "Hydraulic action, abrasion, attrition, solution" },
          { name: "Transport modes", statement: "Solution, suspension, saltation, traction" },
          { name: "Competence", statement: "Maximum particle size a river can transport" },
        ],
        workedExample: {
          problem: "Distinguish competence from capacity in a river.",
          solution: "Competence is the largest particle size the river can move — controlled mainly by velocity. Capacity is the total volume/mass of load carried — controlled by discharge. A fast, deep river has high competence and capacity; a slow, shallow one has low values of both.",
        },
      },
      questions: [
        {
          id: "geo-u2-fpq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In which transport mode do particles roll along the river bed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Traction" },
              { id: "b", text: "Saltation" },
              { id: "c", text: "Solution" },
              { id: "d", text: "Suspension" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Traction", statement: "Large particles rolled or slid along the river bed by the current." },
            ],
            steps: [
              { reasoning: "Traction describes bed-load rolling of the largest particles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Traction",
            commonErrors: ["Confusing saltation (bouncing) with traction (rolling)."],
          },
        },
        {
          id: "geo-u2-fpq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two processes of fluvial erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Fluvial erosion", statement: "Hydraulic action, abrasion, attrition, solution — effective where velocity and load are high." },
            ],
            steps: [
              { reasoning: "Hydraulic action: water force compresses air into cracks, prising rock apart.", marks: 1, markCode: "M" },
              { reasoning: "Abrasion: sediment in the flow grinds and wears the bed and banks.", marks: 1, markCode: "M" },
              { reasoning: "Attrition or solution as alternative: particles collide/round, or soluble rock dissolves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of hydraulic action, abrasion, attrition, solution with mechanisms.",
            commonErrors: ["Naming erosion types without describing the mechanism."],
          },
        },
        {
          id: "geo-u2-fpq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how discharge affects a river's capacity and competence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Discharge controls", statement: "Higher discharge raises velocity, allowing transport of larger and greater volumes of load." },
            ],
            steps: [
              { reasoning: "Higher discharge increases velocity and hydraulic power.", marks: 1, markCode: "M" },
              { reasoning: "Greater velocity raises competence — larger particles can be moved.", marks: 1, markCode: "M" },
              { reasoning: "Greater discharge raises capacity — more total load can be carried.", marks: 1, markCode: "M" },
              { reasoning: "During floods, both peak and sediment transfer is maximised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High discharge raises velocity, increasing both competence (size) and capacity (volume) of load.",
            commonErrors: ["Confusing competence (size) with capacity (volume)."],
          },
        },
        {
          id: "geo-u2-fpq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the relationship between fluvial processes and landform development in a river's course.",
          parts: [
            { label: "a", prompt: "Identify the processes dominant in the upper course.", marks: 2 },
            { label: "b", prompt: "Explain how these processes create characteristic upper-course landforms.", marks: 3 },
            { label: "c", prompt: "Evaluate the transition to lower-course processes and landforms.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Course-landform link", statement: "High gradient → vertical erosion (V-shaped valleys, waterfalls); low gradient → lateral erosion and deposition (meanders, floodplains)." },
            ],
            steps: [
              { part: "a", reasoning: "Upper course: vertical erosion dominant — hydraulic action and abrasion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solution in limestone areas adds chemical erosion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "V-shaped valleys form as downcutting outpaces widening.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Waterfalls and gorges form where resistant rock overlies softer strata.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interlocking spurs result from tributary erosion on alternating banks.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Lower course: reduced gradient shifts erosion lateral and transport/deposition dominate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Meanders, oxbow lakes, floodplains and deltas form by lateral erosion and deposition.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on the gradient-process-landform relationship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Vertical erosion upper course. (b) V-valleys, waterfalls, spurs. (c) Lateral erosion/deposition lower course.",
            commonErrors: ["Treating erosion as uniform along the whole river."],
          },
        },
        {
          id: "geo-u2-fpq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process of fluvial erosion is chemical rather than mechanical?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attrition" },
              { id: "b", text: "Solution" },
              { id: "c", text: "Hydraulic action" },
              { id: "d", text: "Abrasion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solution", statement: "Chemical erosion in which river water dissolves soluble rock such as limestone." },
            ],
            steps: [
              { reasoning: "Solution dissolves soluble minerals — it is chemical, unlike the mechanical processes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Solution",
            commonErrors: ["Confusing solution (erosion) with solution (a mode of transport)."],
          },
        },
        {
          id: "geo-u2-fpq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Saltation describes sediment being transported by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving within the water" },
              { id: "b", text: "Bouncing along the river bed" },
              { id: "c", text: "Rolling along the river bed" },
              { id: "d", text: "Moving within the flow" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Saltation", statement: "Small particles bouncing along the river bed under intermittent contact with the flow." },
            ],
            steps: [
              { reasoning: "Saltation is the bouncing motion of small bed-load particles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Bouncing along the river bed",
            commonErrors: ["Confusing saltation (bouncing) with suspension (within the flow)."],
          },
        },
        {
          id: "geo-u2-fpq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A river's competence is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total mass of load the river carries" },
              { id: "b", text: "The cross-sectional area of the channel" },
              { id: "c", text: "The largest particle size the river can transport" },
              { id: "d", text: "The speed of the current" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Competence", statement: "The maximum particle size a river can transport, controlled mainly by velocity." },
            ],
            steps: [
              { reasoning: "Competence relates to particle size; capacity relates to total load volume.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Largest transportable particle size",
            commonErrors: ["Confusing competence (size) with capacity (volume)."],
          },
        },
        {
          id: "geo-u2-fpq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Which change would most directly increase a river's sediment load?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tidal incursion at the river mouth" },
              { id: "b", text: "Construction of a reservoir upstream" },
              { id: "c", text: "Removal of bank-side vegetation" },
              { id: "d", text: "A rise in water temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Sediment supply", statement: "Vegetation stabilises banks and intercepts sediment; its removal increases erosion and load." },
            ],
            steps: [
              { reasoning: "Removing vegetation exposes banks to erosion, adding sediment to the channel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Removal of bank-side vegetation",
            commonErrors: ["Choosing a reservoir, which traps sediment and reduces load."],
          },
        },
        {
          id: "geo-u2-fpq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A large dam traps most of the sediment arriving from upstream. Downstream of the dam the river is likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carry clearer water with greater erosive power on the bed and banks" },
              { id: "b", text: "Deposit sediment across its whole bed" },
              { id: "c", text: "Reduce its discharge to zero" },
              { id: "d", text: "Form a delta immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sediment starvation", statement: "When dams trap sediment, clear water downstream can erode the bed and banks — 'hungry water'." },
            ],
            steps: [
              { reasoning: "The dam traps sediment, so downstream flow carries little load.", marks: 1, markCode: "M" },
              { reasoning: "Clear water is more erosive and can attack the bed and banks directly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Clearer, more erosive water downstream",
            commonErrors: ["Assuming the dam increases deposition downstream — it starves the channel of sediment."],
          },
        },
        {
          id: "geo-u2-fpq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A river channel is $18$ m wide with a mean depth of $2.5$ m. The mean velocity is $1.6$ m/s. Calculate the discharge.",
          response: {
            type: "numeric",
            parts: [{ label: "Discharge", answer: 72, unit: "m³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discharge equation", statement: "$Q = A \\times v$, where $A$ is cross-sectional area and $v$ is velocity." },
            ],
            steps: [
              { reasoning: "Cross-sectional area equals width times mean depth.", working: "A = 18 \\times 2.5 = 45", marks: 1, markCode: "M" },
              { reasoning: "Discharge equals area times velocity.", working: "Q = 45 \\times 1.6 = 72", marks: 1, markCode: "M" },
              { reasoning: "State the discharge with units.", working: "Q = 72\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 72$ m³/s",
            commonErrors: ["Forgetting to convert width and depth into an area before applying velocity."],
          },
        },
        {
          id: "geo-u2-fpq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A channel $12$ m wide has a mean depth of $1.5$ m and a mean velocity of $0.8$ m/s. Calculate the discharge.",
          response: {
            type: "numeric",
            parts: [{ label: "Discharge", answer: 14.4, unit: "m³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discharge equation", statement: "$Q = w \\times d \\times v$ for a rectangular channel." },
            ],
            steps: [
              { reasoning: "Compute the cross-sectional area first.", working: "A = 12 \\times 1.5 = 18", marks: 1, markCode: "M" },
              { reasoning: "Multiply area by velocity.", working: "Q = 18 \\times 0.8 = 14.4", marks: 1, markCode: "M" },
              { reasoning: "State the final discharge.", working: "Q = 14.4\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 14.4$ m³/s",
            commonErrors: ["Multiplying only two of the three dimensions."],
          },
        },
        {
          id: "geo-u2-fpq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A river channel is $30$ m wide with a mean depth of $3$ m, and the mean velocity is $1.4$ m/s.",
          parts: [
            { label: "a", prompt: "Calculate the cross-sectional area of the channel.", marks: 2 },
            { label: "b", prompt: "Calculate the discharge.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cross-sectional area", answer: 90, unit: "m²" },
              { label: "(b) Discharge", answer: 126, unit: "m³/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discharge equation", statement: "$Q = A \\times v$ with $A = w \\times d$ for a rectangular channel." },
            ],
            steps: [
              { part: "a", reasoning: "Area equals width times mean depth.", working: "A = 30 \\times 3 = 90", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the area with units.", working: "A = 90\\,\\mathrm{m^2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Discharge equals area times velocity.", working: "Q = 90 \\times 1.4 = 126", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the discharge with units.", working: "Q = 126\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90$ m² (b) $126$ m³/s",
            commonErrors: ["Using the wrong units when combining metres and metres per second."],
          },
        },
        {
          id: "geo-u2-fpq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A river has a cross-sectional area of $60$ m². The mean velocity rises from $0.9$ m/s to $1.8$ m/s during a storm.",
          parts: [
            { label: "a", prompt: "Calculate the discharge before the storm.", marks: 2 },
            { label: "b", prompt: "Calculate the discharge during the storm.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Discharge before the storm", answer: 54, unit: "m³/s" },
              { label: "(b) Discharge during the storm", answer: 108, unit: "m³/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discharge equation", statement: "$Q = A \\times v$; doubling velocity doubles discharge at constant area." },
            ],
            steps: [
              { part: "a", reasoning: "Discharge is area times velocity.", working: "Q = 60 \\times 0.9 = 54", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the pre-storm discharge.", working: "Q = 54\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Repeat with the storm velocity.", working: "Q = 60 \\times 1.8 = 108", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the storm discharge.", working: "Q = 108\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $54$ m³/s (b) $108$ m³/s",
            commonErrors: ["Forgetting that area stays constant while velocity changes."],
          },
        },
        {
          id: "geo-u2-fpq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "After wetland restoration, a catchment's peak discharge fell from $320$ m³/s to $224$ m³/s.",
          parts: [
            { label: "a", prompt: "Calculate the reduction in peak discharge, in m³/s.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage reduction in peak discharge.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Reduction in peak discharge", answer: 96, unit: "m³/s" },
              { label: "(b) Percentage reduction", answer: 30, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage change", statement: "Percentage reduction $= \\dfrac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the new peak from the original.", working: "320 - 224 = 96", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the reduction.", working: "\\Delta Q = 96\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the reduction by the original peak and multiply by 100.", working: "\\frac{96}{320} \\times 100 = 30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the percentage.", working: "30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $96$ m³/s (b) $30\\%$",
            commonErrors: ["Dividing by the new value instead of the original when finding the percentage."],
          },
        },
        {
          id: "geo-u2-fpq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A river drops $45$ m over a distance of $3$ km. Calculate the channel gradient as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: 1.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Channel gradient", statement: "Gradient $= \\dfrac{\\text{vertical drop}}{\\text{horizontal distance}} \\times 100$ for a percentage." },
            ],
            steps: [
              { reasoning: "Convert the horizontal distance to metres.", working: "3\\,\\mathrm{km} = 3000\\,\\mathrm{m}", marks: 1, markCode: "M" },
              { reasoning: "Divide drop by distance.", working: "\\frac{45}{3000} = 0.015", marks: 1, markCode: "M" },
              { reasoning: "Express as a percentage.", working: "0.015 \\times 100 = 1.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient $= 1.5\\%$",
            commonErrors: ["Dividing metres by kilometres without converting units."],
          },
        },
        {
          id: "geo-u2-fpq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In one day a river transports $850$ tonnes of suspended load and $150$ tonnes of bed load.",
          parts: [
            { label: "a", prompt: "Calculate the total daily load, in tonnes.", marks: 2 },
            { label: "b", prompt: "Calculate the bed load as a percentage of the total load.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total daily load", answer: 1000, unit: "tonnes" },
              { label: "(b) Bed load share", answer: 15, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Load", statement: "All material carried by a river: dissolved, suspended and bed load combined." },
            ],
            steps: [
              { part: "a", reasoning: "Total load is the sum of suspended and bed load.", working: "850 + 150 = 1000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the total.", working: "1000\\,\\mathrm{tonnes}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide bed load by total load and multiply by 100.", working: "\\frac{150}{1000} \\times 100 = 15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the percentage.", working: "15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1000$ tonnes (b) $15\\%$",
            commonErrors: ["Including only the suspended load and ignoring bed load."],
          },
        },
      ],
    },
    {
      id: "geo-u2-river-landforms",
      title: "River landforms",
      skill: "Explain the formation of waterfalls, meanders, oxbow lakes and floodplains as products of fluvial processes.",
      lesson: {
        sections: [
          {
            heading: "Upper course landforms",
            body: "Steep gradients and fast flow produce **V-shaped valleys** (downcutting), **waterfalls** (hard rock over soft, undercutting creates plunge pools) and **interlocking spurs** (alternating tributary erosion). Rapids form where resistant bands cross the channel.",
          },
          {
            heading: "Middle and lower course landforms",
            body: "As gradient falls, lateral erosion dominates: **meanders** form by helicoidal flow eroding outer banks and depositing point bars on inner banks. Cutoffs create **oxbow lakes**. Low velocity drops load, building **floodplains** and levees; at the mouth, deposition forms **deltas**.",
          },
          {
            heading: "Floodplains and deltas",
            body: "Floodplains are built by overbank deposition of silt — fertile but flood-prone. **Deltas** form where rivers meet standing water: bird's-foot (Mississippi), cuspate (Nile) and arcuate shapes reflect wave vs river energy. Human settlement concentrates on floodplains despite flood risk.",
          },
        ],
        keyFormulas: [
          { name: "Meander formation", statement: "Helicoidal flow: erosion outer bank, deposition inner bank" },
          { name: "Oxbow lake", statement: "Meander cutoff leaves abandoned crescent channel" },
          { name: "Delta types", statement: "Bird's-foot, cuspate, arcuate — depend on river vs wave energy" },
        ],
        workedExample: {
          problem: "Explain how a meander develops into an oxbow lake.",
          solution: "Helicoidal flow erodes the outer bank and deposits on the inner bank, increasing bend curvature. Eventually the neck is narrow; during a flood the river cuts through, abandoning the meander loop. Deposition seals the ends, leaving a crescent-shaped oxbow lake.",
        },
      },
      questions: [
        {
          id: "geo-u2-lq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An oxbow lake forms when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A delta progrades into the sea" },
              { id: "b", text: "A waterfall erodes its plunge pool" },
              { id: "c", text: "A glacier gouges a trough" },
              { id: "d", text: "A meander is cut off from the main channel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxbow lake", statement: "Abandoned meander loop isolated when the river cuts through the neck." },
            ],
            steps: [
              { reasoning: "Oxbow lakes are abandoned meanders sealed off by deposition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A meander cut off from the channel",
            commonErrors: ["Confusing oxbow lakes with kettle lakes or plunge pools."],
          },
        },
        {
          id: "geo-u2-lq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two upper-course river landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Upper-course landforms", statement: "V-shaped valleys, waterfalls, gorges, interlocking spurs, rapids — products of vertical erosion." },
            ],
            steps: [
              { reasoning: "V-shaped valleys: downcutting erosion steepens valley sides.", marks: 1, markCode: "M" },
              { reasoning: "Waterfalls: resistant cap rock over softer rock; undercutting forms plunge pools.", marks: 1, markCode: "M" },
              { reasoning: "Interlocking spurs: alternating tributary erosion creates a zigzag valley profile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "V-shaped valleys, waterfalls/gorges, interlocking spurs.",
            commonErrors: ["Describing lower-course landforms like meanders for the upper course."],
          },
        },
        {
          id: "geo-u2-lq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how deltas form and why their shape varies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Delta formation", statement: "Sediment deposition where river meets standing water; shape reflects river discharge vs wave/tide energy." },
            ],
            steps: [
              { reasoning: "River velocity and competence fall at the mouth; sediment is deposited.", marks: 1, markCode: "M" },
              { reasoning: "Distributaries branch across the deposit, building the delta seaward.", marks: 1, markCode: "M" },
              { reasoning: "Wave-dominated coasts produce cuspate deltas; river-dominated produce bird's-foot; tides produce arcuate.", marks: 1, markCode: "R" },
              { reasoning: "Examples: Mississippi (bird's-foot), Nile (cuspate), Ganges-Brahmaputra (arcuate).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deposition at river mouths; shape varies with river vs wave/tide energy balance.",
            commonErrors: ["Saying all deltas have the same shape — energy balance matters."],
          },
        },
        {
          id: "geo-u2-lq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the formation of a named river landform sequence from source to mouth.",
          parts: [
            { label: "a", prompt: "Identify the named river and its course profile.", marks: 2 },
            { label: "b", prompt: "Explain the landforms formed in the upper and middle courses.", marks: 3 },
            { label: "c", prompt: "Evaluate the lower-course landforms and their human significance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Long-profile landforms", statement: "Gradient decline drives a sequence: vertical erosion landforms → meanders → floodplain/delta." },
            ],
            steps: [
              { part: "a", reasoning: "Named river (e.g. River Tees, Nile) with profile from upland to lowland.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate description of gradient changes along course.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Upper course: V-valley/waterfall with erosion mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Middle course: meanders/terraces with lateral erosion explanation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Processes correctly linked to landforms.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Lower course: floodplain/delta deposition explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Human significance: settlement, agriculture, flood risk.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced evaluation of benefits vs risks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named river + profile. (b) Upper/middle landforms. (c) Lower landforms + human significance.",
            commonErrors: ["Ignoring the gradient-driven sequence of landforms."],
          },
        },
        {
          id: "geo-u2-lq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A delta forms where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A volcano erupts at the coast" },
              { id: "b", text: "Waves cut into a headland" },
              { id: "c", text: "A river meets the sea or a lake and deposits sediment" },
              { id: "d", text: "A glacier melts at its snout" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Delta", statement: "A depositional landform built where a river enters standing water and loses velocity." },
            ],
            steps: [
              { reasoning: "Deltas are river-mouth deposits formed by falling velocity and competence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** River meets standing water",
            commonErrors: ["Confusing deltas with estuaries or spits."],
          },
        },
        {
          id: "geo-u2-lq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A waterfall most commonly develops where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hard rock overlies softer rock" },
              { id: "b", text: "Two rivers join together" },
              { id: "c", text: "Soft rock overlies hard rock" },
              { id: "d", text: "Flat land meets rising hills" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Waterfall formation", statement: "Resistant cap rock protects softer strata below, which are eroded faster, creating a step." },
            ],
            steps: [
              { reasoning: "A resistant layer over softer rock creates the step; undercutting forms the plunge pool.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hard rock over softer rock",
            commonErrors: ["Reversing the rock sequence — hard rock must be on top."],
          },
        },
        {
          id: "geo-u2-lq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a meander bend, deposition occurs mainly on the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Outer bank" },
              { id: "b", text: "Floodplain margin" },
              { id: "c", text: "Inner bank" },
              { id: "d", text: "Channel bed only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Helicoidal flow", statement: "In a bend, surface flow swings to the outer bank (erosion) while bottom flow returns to the inner bank (deposition)." },
            ],
            steps: [
              { reasoning: "Point bars of deposition form on the inner, slower bank of a meander.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Inner bank",
            commonErrors: ["Reversing erosion (outer) and deposition (inner)."],
          },
        },
        {
          id: "geo-u2-lq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Oxbow lakes are characteristic landforms of which part of a river's course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The source region only" },
              { id: "b", text: "The middle and lower courses" },
              { id: "c", text: "The upper course" },
              { id: "d", text: "The river mouth only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Oxbow lakes", statement: "Abandoned meander loops left on floodplains in the middle and lower courses." },
            ],
            steps: [
              { reasoning: "Meanders — and hence oxbows — develop where gradient falls and lateral erosion dominates.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Middle and lower courses",
            commonErrors: ["Placing oxbows in the steep upper course where vertical erosion dominates."],
          },
        },
        {
          id: "geo-u2-lq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "As a delta grows seaward, the main channel often splits into distributaries because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind erosion carves new channels" },
              { id: "b", text: "Deposition raises the bed and reduces channel confinement, so flow divides" },
              { id: "c", text: "Tides deepen the main channel preferentially" },
              { id: "d", text: "Sea level falls and exposes the delta plain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Delta distributaries", statement: "Sediment deposition aggrades the delta surface, forcing the flow to split into branching channels." },
            ],
            steps: [
              { reasoning: "Deposition builds up the delta surface and reduces the capacity of a single channel.", marks: 1, markCode: "M" },
              { reasoning: "The flow therefore divides into multiple distributaries that prograde across the delta.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deposition reduces confinement and splits the flow",
            commonErrors: ["Attributing distributaries to erosion rather than deposition."],
          },
        },
        {
          id: "geo-u2-lq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A river valley falls $80$ m over a horizontal distance of $5$ km. Calculate the valley gradient as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: 1.6, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "Gradient $= \\dfrac{\\text{vertical fall}}{\\text{horizontal distance}} \\times 100$ for a percentage." },
            ],
            steps: [
              { reasoning: "Convert kilometres to metres.", working: "5\\,\\mathrm{km} = 5000\\,\\mathrm{m}", marks: 1, markCode: "M" },
              { reasoning: "Divide fall by distance.", working: "\\frac{80}{5000} = 0.016", marks: 1, markCode: "M" },
              { reasoning: "Express as a percentage.", working: "0.016 \\times 100 = 1.6\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient $= 1.6\\%$",
            commonErrors: ["Mixing metres and kilometres without converting."],
          },
        },
        {
          id: "geo-u2-lq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A floodplain measures $12$ km long by $0.8$ km wide. Calculate its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 9.6, unit: "km²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "$A = \\text{length} \\times \\text{width}$." },
            ],
            steps: [
              { reasoning: "Multiply the two dimensions, both already in kilometres.", working: "A = 12 \\times 0.8 = 9.6", marks: 1, markCode: "M" },
              { reasoning: "Check the units are km².", working: "\\mathrm{km} \\times \\mathrm{km} = \\mathrm{km^2}", marks: 1, markCode: "M" },
              { reasoning: "State the area.", working: "A = 9.6\\,\\mathrm{km^2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 9.6$ km²",
            commonErrors: ["Forgetting that multiplying two km values gives km²."],
          },
        },
        {
          id: "geo-u2-lq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Near its mouth a river deposits $380$ tonnes per day of suspended load and $20$ tonnes per day of bed load.",
          parts: [
            { label: "a", prompt: "Calculate the total daily load, in tonnes.", marks: 2 },
            { label: "b", prompt: "Calculate the bed load as a percentage of the total load.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total daily load", answer: 400, unit: "tonnes" },
              { label: "(b) Bed load share", answer: 5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Load", statement: "All material transported by a river: dissolved, suspended and bed load." },
            ],
            steps: [
              { part: "a", reasoning: "Add the suspended and bed loads.", working: "380 + 20 = 400", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the total.", working: "400\\,\\mathrm{tonnes\\,day^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide bed load by total load and multiply by 100.", working: "\\frac{20}{400} \\times 100 = 5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the percentage.", working: "5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $400$ tonnes/day (b) $5\\%$",
            commonErrors: ["Comparing bed load to suspended load instead of total load."],
          },
        },
        {
          id: "geo-u2-lq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The neck of a meander narrows from $40$ m to $20$ m before the river cuts through. Calculate the percentage reduction in neck width.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage reduction", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage change $= \\dfrac{\\text{change}}{\\text{original}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Find the reduction in width.", working: "40 - 20 = 20\\,\\mathrm{m}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the original width and multiply by 100.", working: "\\frac{20}{40} \\times 100 = 50", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Dividing by the final width instead of the original."],
          },
        },
        {
          id: "geo-u2-lq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A waterfall retreats upstream at a rate of $2$ m per year.",
          parts: [
            { label: "a", prompt: "Calculate how far it will have retreated after 25 years.", marks: 2 },
            { label: "b", prompt: "Calculate the retreat in one decade.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Retreat after 25 years", answer: 50, unit: "m" },
              { label: "(b) Retreat in one decade", answer: 20, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate equation", statement: "Distance $=$ rate $\\times$ time; one decade equals 10 years." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply rate by time.", working: "2 \\times 25 = 50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the distance.", working: "50\\,\\mathrm{m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply rate by 10 years.", working: "2 \\times 10 = 20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", working: "20\\,\\mathrm{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $50$ m (b) $20$ m",
            commonErrors: ["Using 100 years for a decade instead of 10."],
          },
        },
        {
          id: "geo-u2-lq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A levee is $4.5$ m high and the design flood peak is $3.8$ m above channel bed. Calculate the freeboard (height of levee above flood level).",
          response: {
            type: "numeric",
            parts: [{ label: "Freeboard", answer: 0.7, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Freeboard", statement: "The vertical margin between flood level and the top of a defence structure." },
            ],
            steps: [
              { reasoning: "Freeboard is the difference between levee height and flood level.", working: "4.5 - 3.8 = 0.7", marks: 1, markCode: "M" },
              { reasoning: "Check the subtraction direction.", working: "\\text{levee} - \\text{flood} = 0.7\\,\\mathrm{m}", marks: 1, markCode: "M" },
              { reasoning: "State the freeboard.", working: "0.7\\,\\mathrm{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Freeboard $= 0.7$ m",
            commonErrors: ["Subtracting in the wrong order and reporting a negative freeboard."],
          },
        },
        {
          id: "geo-u2-lq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A delta's area grew from $500$ km² to $650$ km² over $30$ years.",
          parts: [
            { label: "a", prompt: "Calculate the absolute growth in area, in km².", marks: 2 },
            { label: "b", prompt: "Calculate the percentage growth in area.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Absolute growth", answer: 150, unit: "km²" },
              { label: "(b) Percentage growth", answer: 30, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage growth $= \\dfrac{\\text{growth}}{\\text{original}} \\times 100$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the original area from the new area.", working: "650 - 500 = 150", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the growth.", working: "150\\,\\mathrm{km^2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the growth by the original area.", working: "\\frac{150}{500} = 0.30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert the decimal to a percentage.", working: "0.30 \\times 100 = 30\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Comment that the delta grew by 30% of its original size.", working: "30\\%\\ \\text{of original}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $150$ km² (b) $30\\%$",
            commonErrors: ["Dividing by the new area instead of the original."],
          },
        },
      ],
    },
  ],
};
