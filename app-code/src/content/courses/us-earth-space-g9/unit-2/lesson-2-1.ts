import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ess9-u2-lesson-2-1",
  code: "2-1",
  title: "Earth's Interior and Plate Tectonics",
  goal: "I CAN use seismic wave evidence to describe Earth's layers, and use plate boundaries, mantle convection and seafloor ages to explain landforms and plate motion.",
  standards: ["HS-ESS2-3", "HS-ESS1-5", "HS-ESS2-1", "SEP: Analyzing and Interpreting Data", "CCC: Stability and Change"],
  vocabulary: [
    { term: "P wave", definition: "A primary seismic wave: a compressional wave that travels through solids and liquids and arrives first." },
    { term: "S wave", definition: "A secondary seismic wave: a shear wave that travels only through solids and arrives after P waves." },
    { term: "Discontinuity", definition: "A boundary inside Earth where seismic wave speed or direction changes sharply, such as the Moho." },
    { term: "Mantle convection", definition: "Slow circulation of solid mantle rock driven by heat from Earth's interior." },
    { term: "Divergent boundary", definition: "A plate boundary where plates move apart and new crust forms, as at a mid-ocean ridge." },
    { term: "Subduction", definition: "The sinking of a denser oceanic plate beneath another plate into the mantle." },
    { term: "Seafloor spreading", definition: "The formation of new oceanic crust at a ridge as plates move apart." },
  ],
  concepts: [
    {
      id: "ess9-u2-earth-layers-seismic",
      title: "Earth's layers and seismic wave evidence",
      skill: "Use P wave and S wave behavior to infer the structure and state of Earth's layers.",
      lesson: {
        sections: [
          {
            heading: "Layers of Earth",
            body: "Earth is layered by composition and by physical state. From the surface inward: the thin **crust** (about 5-70 km thick), the solid but slowly flowing **mantle** (to a depth of about 2,900 km), the liquid **outer core** (2,900-5,100 km depth) and the solid **inner core** (5,100-6,371 km depth). The outer and inner core are mostly iron and nickel. Nobody has drilled deeper than about 12 km, so almost everything we know about the interior comes from indirect evidence.",
          },
          {
            heading: "Seismic waves as evidence",
            body: "Earthquakes send waves through the whole planet. **P waves** are compressional and travel through solids and liquids. **S waves** are shear waves and **cannot travel through liquids**. Wave speed depends on the density and stiffness of the material, and waves bend (refract) or reflect where the material changes.\n\n- Sudden changes in wave speed show boundaries (discontinuities) such as the Moho between crust and mantle.\n- S waves are not detected on the far side of Earth, which shows that the outer core is liquid.\n- P waves bend sharply at the core-mantle boundary, leaving a **shadow zone** about 104 to 140 degrees from the earthquake where no direct P waves arrive.\n\nBecause P waves are faster than S waves, the **time lag** between their arrivals at a station gives the distance to the earthquake. Using distance $d = vt$ for each wave, with $v_P > v_S$, the lag is $\\Delta t = \\frac{d}{v_S} - \\frac{d}{v_P}$.",
          },
        ],
        keyFormulas: [
          { name: "Distance from wave speed", statement: "$d = vt$" },
          { name: "S-P time lag", statement: "$\\Delta t = \\dfrac{d}{v_S} - \\dfrac{d}{v_P}$" },
          { name: "Key evidence", statement: "S waves do not pass through the outer core, so it is liquid" },
        ],
        workedExample: {
          problem: "A seismic station is 720 km from an earthquake. P waves travel at 8.0 km/s and S waves at 4.0 km/s. How long after the P wave does the S wave arrive?",
          solution: "P wave time: $t_P = \\frac{720}{8.0} = 90\\text{ s}$. S wave time: $t_S = \\frac{720}{4.0} = 180\\text{ s}$. The lag is $180 - 90 = 90\\text{ s}$. Check with the shortcut $\\frac{d}{8}$: $\\frac{720}{8} = 90\\text{ s}$.",
        },
      },
      questions: [
        {
          id: "ess9-u2-earth-layers-seismic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which observation is the best evidence that Earth's outer core is liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P waves travel faster than S waves." },
              { id: "b", text: "S waves from an earthquake are not detected on the opposite side of Earth." },
              { id: "c", text: "Earthquakes occur mostly near plate boundaries." },
              { id: "d", text: "Volcanoes erupt molten rock at the surface." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "S waves and liquids", statement: "S waves are shear waves and cannot travel through a liquid, so a region that stops S waves must be liquid." },
            ],
            steps: [
              { reasoning: "S waves stop at the outer core, so the core must be liquid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** S waves are not detected on the opposite side of Earth.",
            commonErrors: ["Choosing (d): lava comes from magma in the crust and upper mantle, not from the core.", "Choosing (a): P being faster than S does not reveal any physical state."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u2-earth-layers-seismic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A seismic station is 480 km from an earthquake. P waves travel through the crust at an average speed of 8.0 km/s.\n\nCalculate the time taken by the P wave to reach the station.",
          response: { type: "numeric", parts: [{ label: "P wave travel time", answer: 60, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed equation", statement: "$t = \\dfrac{d}{v}$" },
            ],
            steps: [
              { reasoning: "Rearrange $d = vt$ and substitute.", working: "t = \\frac{d}{v} = \\frac{480}{8.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "t = 60\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\text{ s}$",
            commonErrors: ["Multiplying distance by speed (3840).", "Dividing speed by distance (0.017)."],
            examinerNote: "M1 for 480 / 8.0. A1 for 60 s. Allow 1 minute.",
          },
        },
        {
          id: "ess9-u2-earth-layers-seismic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An earthquake is recorded at a station. The S wave arrives 75 s after the P wave. The P wave speed is 8.0 km/s and the S wave speed is 4.0 km/s.\n\nCalculate the distance from the station to the earthquake.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 600, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed equation", statement: "$d = vt$, so $t = \\dfrac{d}{v}$ for each wave" },
              { kind: "principle", name: "S-P method", statement: "The difference in arrival times of two waves traveling the same path equals the difference in their travel times." },
            ],
            steps: [
              { reasoning: "Write the lag as the difference of the two travel times.", working: "\\frac{d}{4.0} - \\frac{d}{8.0} = 75", marks: 1, markCode: "M" },
              { reasoning: "Combine the fractions.", working: "\\frac{2d - d}{8.0} = \\frac{d}{8.0} = 75", marks: 1, markCode: "M" },
              { reasoning: "Solve for $d$.", working: "d = 75 \\times 8.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "d = 600\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$600\\text{ km}$",
            commonErrors: ["Treating 75 s as the travel time of the S wave alone, giving 300 km.", "Adding the two travel times instead of subtracting."],
            examinerNote: "M1 difference of travel times. M1 combining. M1 rearranging. A1 600 km. Allow ecf for a slip in combining fractions.",
          },
        },
        {
          id: "ess9-u2-earth-layers-seismic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Geologists use seismic waves to study Earth's core. The core-mantle boundary is at a depth of 2,900 km and the boundary between the outer core and inner core is at a depth of 5,100 km.",
          parts: [
            { label: "a", prompt: "State which layer of Earth is liquid.", marks: 1 },
            { label: "b", prompt: "Calculate the thickness of the outer core in kilometers.", marks: 2 },
            { label: "c", prompt: "A P wave crosses the outer core directly at an average speed of 8.0 km/s. Calculate the time it takes to cross this thickness.", marks: 2 },
            { label: "d", prompt: "Explain how S wave data show that the outer core is liquid.", marks: 2 },
            { label: "e", prompt: "Explain why a shadow zone with no direct P waves forms on the far side of Earth.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed equation", statement: "$t = \\dfrac{d}{v}$" },
              { kind: "principle", name: "S waves and liquids", statement: "S waves cannot propagate through a liquid." },
              { kind: "principle", name: "Refraction", statement: "A wave bends when its speed changes as it crosses a boundary between materials." },
            ],
            steps: [
              { part: "a", reasoning: "The outer core is the liquid layer.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the depths of the two boundaries.", working: "5100 - 2900", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with units.", working: "2200\\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide thickness by speed.", working: "t = \\frac{2200}{8.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with units.", working: "t = 275\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "S waves from an earthquake are not detected on the opposite side of Earth (they stop at the core).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "S waves cannot travel through liquids, so the region that blocks them must be liquid.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "P waves slow down and refract (bend) sharply when entering the outer core from the mantle.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The bending sends waves away from a band about 104 to 140 degrees from the earthquake, so no direct P waves arrive there.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Outer core (b) 2,200 km (c) 275 s (d) S waves are absent beyond the core and cannot pass through liquid (e) P waves refract at the core-mantle boundary, leaving a shadow zone",
            commonErrors: ["In (b) adding the depths (8,000 km).", "In (e) saying P waves are absorbed or stopped by the core; they pass through but are bent."],
            examinerNote: "(a) Reject 'core' alone. (c) Allow ecf from (b). (d) Allow 'S waves are blocked / shadow zone for S waves' oe. (e) Allow 'change of speed causes refraction'.",
          },
        },
      ],
    },
    {
      id: "ess9-u2-plate-boundaries-convection",
      title: "Plate boundaries, mantle convection and seafloor ages",
      skill: "Explain landforms and plate motion using boundary types, mantle convection and seafloor age data.",
      lesson: {
        sections: [
          {
            heading: "Plates, boundaries and landforms",
            body: "Earth's rigid outer shell (the **lithosphere**) is broken into plates that float on the slowly flowing asthenosphere. Plates interact at three kinds of boundary:\n\n- **Divergent:** plates move apart; magma rises and forms new crust (mid-ocean ridges, rift valleys).\n- **Convergent:** plates collide. A dense oceanic plate **subducts**, forming trenches and volcanic arcs. Two continental plates crumple into mountain ranges such as the Himalayas.\n- **Transform:** plates slide past each other, producing strong earthquakes (San Andreas Fault).",
          },
          {
            heading: "Convection and seafloor age",
            body: "Heat from radioactive decay and Earth's formation drives **mantle convection**. Hot rock rises, cools, becomes denser and sinks, and the plates ride on and are pulled by this motion (especially by the sinking slab at subduction zones).\n\nThe age of the seafloor is strong evidence. Rock is youngest at the ridge axis and gets older symmetrically with distance on both sides. The oldest ocean crust is only about 180 million years old because old crust is destroyed by subduction, while continental rocks reach about 4 billion years. Plate speed is found from:\n\n$$\\text{rate} = \\frac{\\text{distance from ridge}}{\\text{age of crust}}$$\n\nUseful conversion: $1\\text{ km} = 10^5\\text{ cm}$ and $1\\text{ million years} = 10^6\\text{ years}$, so $1\\text{ km per million years} = 0.1\\text{ cm/yr}$.",
          },
        ],
        keyFormulas: [
          { name: "Spreading rate", statement: "$\\text{rate} = \\dfrac{\\text{distance}}{\\text{age}}$" },
          { name: "Unit conversion", statement: "$1\\text{ km/Myr} = 0.1\\text{ cm/yr}$" },
          { name: "Boundaries", statement: "Divergent: apart. Convergent: together. Transform: sliding past" },
        ],
        workedExample: {
          problem: "Basalt 150 km from a mid-ocean ridge is dated at 7.5 million years old. Find the spreading rate in cm/yr.",
          solution: "Rate $= \\frac{150\\text{ km}}{7.5\\text{ Myr}} = 20\\text{ km/Myr}$. Convert: $20 \\times 0.1 = 2.0\\text{ cm/yr}$. Check: $150\\text{ km} = 1.5\\times10^7\\text{ cm}$ and $7.5\\times10^6\\text{ yr}$ gives $2.0\\text{ cm/yr}$.",
        },
      },
      questions: [
        {
          id: "ess9-u2-plate-boundaries-convection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mid-ocean ridge forms at which type of plate boundary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convergent boundary" },
              { id: "b", text: "Transform boundary" },
              { id: "c", text: "Divergent boundary" },
              { id: "d", text: "A hot spot, not a plate boundary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Divergent boundary", statement: "Plates move apart and new crust forms from rising magma." },
            ],
            steps: [
              { reasoning: "At a ridge the plates move apart and new oceanic crust forms.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Divergent boundary",
            commonErrors: ["Choosing (a): convergent boundaries make trenches, not ridges.", "Choosing (d): hot spots exist, but ridges are plate boundaries."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ess9-u2-plate-boundaries-convection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Basalt on the seafloor 60 km from a mid-ocean ridge is dated at 3.0 million years old.\n\nCalculate the average spreading rate in cm/yr.",
          response: { type: "numeric", parts: [{ label: "Spreading rate", answer: 2, unit: "cm/yr", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Convert the distance to centimeters and the age to years.", working: "60\\text{ km} = 6.0\\times10^{6}\\text{ cm},\\quad 3.0\\text{ Myr} = 3.0\\times10^{6}\\text{ yr}", marks: 1, markCode: "M" },
              { reasoning: "Divide distance by time.", working: "\\frac{6.0\\times10^{6}}{3.0\\times10^{6}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "2.0\\text{ cm/yr}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0\\text{ cm/yr}$",
            commonErrors: ["Forgetting that 1 km = 100,000 cm, giving 20 or 0.02.", "Dividing time by distance."],
            examinerNote: "M1 unit conversion. M1 division. A1 2.0. Allow 20 km/Myr with correct conversion for M2 only if converted to cm/yr for A1.",
          },
        },
        {
          id: "ess9-u2-plate-boundaries-convection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The Atlantic Ocean floor is spreading apart at a total rate of 2.5 cm/yr at a particular latitude. Assume the rate stayed constant.\n\nCalculate how much wider the ocean basin gets in 80 million years. Give your answer in kilometers.",
          response: { type: "numeric", parts: [{ label: "Increase in width", answer: 2000, unit: "km", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$\\text{distance} = \\text{rate}\\times\\text{time}$" },
              { kind: "principle", name: "Conversion", statement: "$1\\text{ km} = 10^5\\text{ cm}$" },
            ],
            steps: [
              { reasoning: "Convert the time to years.", working: "80\\text{ Myr} = 8.0\\times10^{7}\\text{ yr}", marks: 1, markCode: "M" },
              { reasoning: "Multiply rate by time.", working: "2.5 \\times 8.0\\times10^{7} = 2.0\\times10^{8}\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Divide by $10^5$ to convert to kilometers.", working: "\\frac{2.0\\times10^{8}}{10^{5}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "2000\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2000\\text{ km}$",
            commonErrors: ["Not converting centimeters to kilometers (2.0 x 10^8).", "Converting by 10^3 instead of 10^5."],
            examinerNote: "M1 for 8.0 x 10^7 years. M1 for 2.0 x 10^8 cm. M1 conversion to km. A1 2000 km.",
          },
        },
        {
          id: "ess9-u2-plate-boundaries-convection-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Scientists dated seafloor basalt along a line crossing a mid-ocean ridge. The table below shows data for the west side of the ridge.\n\n| Distance from ridge axis | Age of basalt |\n| --- | --- |\n| 0 km | 0 Myr |\n| 100 km | 5.0 Myr |\n| 250 km | 12.5 Myr |\n\nAssume the spreading rate has been constant.",
          parts: [
            { label: "a", prompt: "Describe how the age of the basalt changes with distance from the ridge, and what you would expect on the east side.", marks: 1 },
            { label: "b", prompt: "Calculate the spreading rate in cm/yr using the 100 km data point.", marks: 2 },
            { label: "c", prompt: "Predict the age of basalt 400 km from the ridge.", marks: 2 },
            { label: "d", prompt: "The oldest ocean crust is about 180 million years old, but some continental rock is about 4 billion years old. Explain this difference.", marks: 2 },
            { label: "e", prompt: "Explain how mantle convection helps to move the plates.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Spreading rate", statement: "$\\text{rate} = \\dfrac{\\text{distance}}{\\text{age}}$" },
              { kind: "principle", name: "Subduction recycles crust", statement: "Dense oceanic lithosphere sinks into the mantle at subduction zones, so old ocean floor is destroyed." },
            ],
            steps: [
              { part: "a", reasoning: "Age increases with distance from the ridge, and the east side shows the same pattern, mirroring the west side (symmetrical).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Convert and divide: 100 km is $1.0\\times10^7$ cm and 5.0 Myr is $5.0\\times10^6$ yr.", working: "\\frac{1.0\\times10^{7}}{5.0\\times10^{6}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with units.", working: "2.0\\text{ cm/yr}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The rate is 20 km/Myr, so divide distance by rate.", working: "\\frac{400}{20}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with units.", working: "20\\text{ Myr}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Oceanic crust is dense and is destroyed by subduction back into the mantle, so it is always relatively young.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Continental crust is less dense, so it does not subduct and can survive for billions of years.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Hot mantle rock rises at ridges and cooler dense rock sinks at subduction zones, forming convection currents.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Plates are carried by the flowing mantle and pulled by sinking slabs, so they move across the surface.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Older away from the ridge; symmetric on the east side (b) 2.0 cm/yr (c) 20 Myr (d) Oceanic crust subducts and is recycled; continental crust is less dense and survives (e) Convection currents and slab pull move the plates",
            commonErrors: ["In (b) not converting units (giving 20).", "In (c) forgetting to divide by the rate in km per million years.", "In (d) saying old ocean crust is eroded away by waves."],
            examinerNote: "(b) Allow 20 km/Myr for M1 only. (c) Allow ecf from (b). (d) Allow 'continental crust is buoyant' oe.",
          },
        },
      ],
    },
  ],
};
