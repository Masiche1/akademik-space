import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "geo-u2-lesson-2-3",
  code: "2-3",
  title: "Drainage Basin Management and Flood Control",
  goal: "I CAN explain flood causes and evaluate hard and soft engineering strategies for flood control and sustainable basin management.",
  standards: ["Paper 1", "Paper 2", "Rivers"],
  vocabulary: [
    { term: "Flood", definition: "The inundation of normally dry land when river discharge exceeds channel capacity." },
    { term: "Hydrograph", definition: "A graph showing river discharge against time, revealing storm response." },
    { term: "Lag time", definition: "The delay between peak rainfall and peak discharge on a hydrograph." },
    { term: "Hard engineering", definition: "Structural flood control: dams, levees, channelisation, floodwalls." },
    { term: "Soft engineering", definition: "Natural flood management: floodplain restoration, wetlands, afforestation." },
    { term: "Floodplain zoning", definition: "Land-use planning that restricts development in flood-prone areas." },
  ],
  concepts: [
    {
      id: "geo-u2-flood-causes",
      title: "Flood causes and hydrographs",
      skill: "Explain the natural and human causes of flooding and interpret storm hydrographs.",
      lesson: {
        sections: [
          {
            heading: "Causes of flooding",
            body: "Floods result from **prolonged or intense rainfall**, **snowmelt**, or **storm surges** exceeding channel capacity. Basin characteristics control response: impermeable urban surfaces and deforestation shorten **lag time** and raise peak discharge; forests, wetlands and reservoirs delay and reduce it.",
          },
          {
            heading: "Storm hydrographs",
            body: "A **storm hydrograph** plots discharge against time. Key features: **rising limb**, **peak discharge**, **lag time** and **recession limb**. Urbanisation and deforestation produce steep rising limbs and short lag times (flash floods); vegetation and storage produce gentle curves.",
          },
          {
            heading: "Flood risk and vulnerability",
            body: "Risk = hazard × exposure × vulnerability. Floodplains concentrate settlement because of fertile soils and flat land. Vulnerability rises with poverty, poor housing, lack of warning systems and land-use pressure — explaining why similar floods kill more in LICs than HICs.",
          },
        ],
        keyFormulas: [
          { name: "Lag time", statement: "Peak rain → peak discharge delay; shorter in urban/deforested basins" },
          { name: "Flash flood", statement: "Rapid rise from impermeable surfaces, steep catchment, intense rain" },
          { name: "Risk equation", statement: "Flood risk = hazard × exposure × vulnerability" },
        ],
        workedExample: {
          problem: "Explain why urbanisation increases flood risk.",
          solution: "Replacing vegetation and soil with impermeable roads and buildings reduces infiltration, so more rainfall becomes surface runoff. Drains concentrate flow into channels quickly, shortening lag time and raising peak discharge — producing flash floods even from moderate storms.",
        },
      },
      questions: [
        {
          id: "geo-u2-faq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Lag time on a storm hydrograph is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of water in the river" },
              { id: "b", text: "The time rivers take to reach the sea" },
              { id: "c", text: "The total duration of the storm" },
              { id: "d", text: "The delay between peak rainfall and peak discharge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lag time", statement: "Delay between peak rainfall intensity and peak river discharge." },
            ],
            steps: [
              { reasoning: "Lag time measures the delay between rain peak and flow peak.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Rain peak to discharge peak delay",
            commonErrors: ["Confusing lag time with storm duration or total runoff volume."],
          },
        },
        {
          id: "geo-u2-faq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two natural causes of river flooding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Flood causes", statement: "Intense/prolonged rain, snowmelt, storm surges; basin characteristics amplify response." },
            ],
            steps: [
              { reasoning: "Intense or prolonged rainfall exceeding infiltration capacity → surface runoff.", marks: 1, markCode: "M" },
              { reasoning: "Snowmelt adds rapid runoff when combined with rain or warm spells.", marks: 1, markCode: "M" },
              { reasoning: "Storm surges drive sea water up estuaries, preventing river drainage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heavy/prolonged rain, snowmelt, storm surge — amplified by basin conditions.",
            commonErrors: ["Listing only human causes like deforestation as 'natural'."],
          },
        },
        {
          id: "geo-u2-faq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how deforestation affects a storm hydrograph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deforestation effect", statement: "Loss of interception and infiltration shortens lag time and raises peak discharge." },
            ],
            steps: [
              { reasoning: "Tree canopy intercepts rain; removal increases rain reaching ground directly.", marks: 1, markCode: "M" },
              { reasoning: "Roots and litter promote infiltration; removal increases surface runoff.", marks: 1, markCode: "M" },
              { reasoning: "Result: steeper rising limb, higher peak, shorter lag time → flash flood risk.", marks: 1, markCode: "R" },
              { reasoning: "Reforestation reverses these effects by restoring storage and infiltration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deforestation reduces interception/infiltration → shorter lag, higher peak discharge.",
            commonErrors: ["Saying deforestation increases rainfall — it changes runoff, not precipitation."],
          },
        },
        {
          id: "geo-u2-faq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors affecting flood risk in a named drainage basin.",
          parts: [
            { label: "a", prompt: "Identify the named basin and its flood hazard.", marks: 2 },
            { label: "b", prompt: "Explain two physical and one human factor raising flood risk.", marks: 3 },
            { label: "c", prompt: "Evaluate the vulnerability of people living there.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flood risk factors", statement: "Risk combines physical hazard (rainfall, topography) with human exposure and vulnerability." },
            ],
            steps: [
              { part: "a", reasoning: "Named basin (e.g. Mississippi, Ganges, Rhine) with real flood history.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific flood event or risk characteristic identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical factor: intense rain, snowmelt or storm surge mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Physical factor 2: topography, impermeable soils or reduced storage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Human factor: urbanisation, deforestation or floodplain development.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vulnerability: poverty, housing quality, warning access, land tenure.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs exposure and coping capacity of residents.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on overall flood risk level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named basin + hazard. (b) Two physical + one human factor. (c) Vulnerability evaluated.",
            commonErrors: ["Confusing hazard (physical event) with risk (hazard × exposure × vulnerability)."],
          },
        },
        {
          id: "geo-u2-faq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On a storm hydrograph, peak discharge is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The average flow in the channel" },
              { id: "b", text: "The total storm rainfall" },
              { id: "c", text: "The time of first rainfall" },
              { id: "d", text: "The highest flow recorded during the event" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peak discharge", statement: "The maximum river flow reached during a storm event." },
            ],
            steps: [
              { reasoning: "Peak discharge is the highest point on the hydrograph's discharge curve.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Highest flow during the event",
            commonErrors: ["Confusing peak discharge with total rainfall volume."],
          },
        },
        {
          id: "geo-u2-faq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The recession limb of a storm hydrograph shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infiltration into the soil" },
              { id: "b", text: "Rising discharge after the storm begins" },
              { id: "c", text: "Discharge falling after the peak" },
              { id: "d", text: "Rainfall intensity increasing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recession limb", statement: "The falling limb of the hydrograph after peak discharge as the basin drains." },
            ],
            steps: [
              { reasoning: "After the peak, discharge falls as stored water drains away — the recession limb.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Discharge falling after the peak",
            commonErrors: ["Confusing the recession limb with the rising limb."],
          },
        },
        {
          id: "geo-u2-faq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Urbanisation of a catchment typically causes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduced surface runoff" },
              { id: "b", text: "A shorter lag time and a higher peak discharge" },
              { id: "c", text: "A longer lag time" },
              { id: "d", text: "Increased infiltration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Urbanisation effect", statement: "Impermeable surfaces reduce infiltration and speed runoff, shortening lag time and raising peak discharge." },
            ],
            steps: [
              { reasoning: "Impermeable urban surfaces convert rain to rapid surface runoff.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shorter lag time, higher peak",
            commonErrors: ["Thinking urbanisation slows the flood response — it speeds it up."],
          },
        },
        {
          id: "geo-u2-faq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Flood risk is best expressed as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population × area × time" },
              { id: "b", text: "Rainfall × wind × temperature" },
              { id: "c", text: "Rainfall intensity only" },
              { id: "d", text: "Hazard × exposure × vulnerability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Flood risk equation", statement: "Flood risk $=$ hazard $\\times$ exposure $\\times$ vulnerability." },
            ],
            steps: [
              { reasoning: "Risk combines the physical hazard with human exposure and vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Hazard × exposure × vulnerability",
            commonErrors: ["Reducing risk to rainfall alone — vulnerability matters."],
          },
        },
        {
          id: "geo-u2-faq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Floods of similar magnitude often kill more people in low-income countries because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their rivers are always steeper" },
              { id: "b", text: "Vulnerability is higher — poorer housing, less warning and weaker emergency response" },
              { id: "c", text: "They have no rivers to flood" },
              { id: "d", text: "Their rainfall is always heavier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vulnerability", statement: "Higher vulnerability — poor housing, low income, weak warning — raises flood impacts for the same hazard." },
            ],
            steps: [
              { reasoning: "The hazard may be similar, but exposure and vulnerability differ between countries.", marks: 1, markCode: "M" },
              { reasoning: "Poorer housing, crowded floodplains and weaker warning systems raise casualties.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Higher vulnerability",
            commonErrors: ["Assuming the physical hazard itself is always greater in LICs."],
          },
        },
        {
          id: "geo-u2-faq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A storm delivers $45$ mm of rainfall and $15$ mm infiltrates into the soil. Calculate the surface runoff.",
          response: {
            type: "numeric",
            parts: [{ label: "Runoff", answer: 30, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Runoff", statement: "Runoff $=$ rainfall $-$ infiltration (ignoring other losses)." },
            ],
            steps: [
              { reasoning: "Subtract infiltration from total rainfall.", working: "45 - 15 = 30", marks: 1, markCode: "M" },
              { reasoning: "Check the units remain millimetres of water.", working: "\\mathrm{mm} - \\mathrm{mm} = \\mathrm{mm}", marks: 1, markCode: "M" },
              { reasoning: "State the runoff.", working: "30\\,\\mathrm{mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Runoff $= 30$ mm",
            commonErrors: ["Adding infiltration instead of subtracting it."],
          },
        },
        {
          id: "geo-u2-faq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "On a storm hydrograph, peak rainfall occurs at hour $2$ and peak discharge at hour $6$. Calculate the lag time.",
          response: {
            type: "numeric",
            parts: [{ label: "Lag time", answer: 4, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lag time", statement: "The delay between peak rainfall and peak discharge." },
            ],
            steps: [
              { reasoning: "Lag time is the difference between the two peak times.", working: "6 - 2 = 4", marks: 1, markCode: "M" },
              { reasoning: "Check the direction of subtraction.", working: "t_{Q} - t_{P} = 4\\,\\mathrm{hr}", marks: 1, markCode: "M" },
              { reasoning: "State the lag time.", working: "4\\,\\mathrm{hr}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lag time $= 4$ hours",
            commonErrors: ["Subtracting in the wrong order or adding the times."],
          },
        },
        {
          id: "geo-u2-faq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "After deforestation, a basin's peak discharge rose from $180$ m³/s to $250$ m³/s.",
          parts: [
            { label: "a", prompt: "Calculate the increase in peak discharge, in m³/s.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage increase in peak discharge.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Increase in peak discharge", answer: 70, unit: "m³/s" },
              { label: "(b) Percentage increase", answer: 38.9, unit: "%", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase $= \\dfrac{\\text{increase}}{\\text{original}} \\times 100$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the original peak from the new peak.", working: "250 - 180 = 70", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the increase.", working: "70\\,\\mathrm{m^3\\,s^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the increase by the original peak and multiply by 100.", working: "\\frac{70}{180} \\times 100 \\approx 38.9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the percentage.", working: "38.9\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $70$ m³/s (b) $38.9\\%$",
            commonErrors: ["Dividing by the new peak rather than the original."],
          },
        },
        {
          id: "geo-u2-faq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Following a land-use change, a basin's lag time rose from $5$ hours to $12$ hours. Calculate the increase in lag time.",
          response: {
            type: "numeric",
            parts: [{ label: "Increase in lag time", answer: 7, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lag time", statement: "The delay between peak rainfall and peak discharge; shorter lag means a flashier response." },
            ],
            steps: [
              { reasoning: "Subtract the original lag time from the new lag time.", working: "12 - 5 = 7", marks: 1, markCode: "M" },
              { reasoning: "The increase is the difference between the new and original lag times.", working: "\\Delta t = 12 - 5 = 7\\,\\mathrm{hr}", marks: 1, markCode: "M" },
              { reasoning: "State the increase.", working: "7\\,\\mathrm{hr}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ hours",
            commonErrors: ["Substituting the wrong pair of values or reporting the original lag time instead of the change."],
          },
        },
        {
          id: "geo-u2-faq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A drainage basin covers $500$ km². A storm delivers $80$ mm of rain, and the basin's runoff coefficient is $0.6$.",
          parts: [
            { label: "a", prompt: "Calculate the effective runoff depth, in mm.", marks: 2 },
            { label: "b", prompt: "Calculate the total runoff volume, in m³.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Effective runoff depth", answer: 48, unit: "mm" },
              { label: "(b) Runoff volume", answer: 24000000, unit: "m³" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Runoff volume", statement: "Runoff depth $=$ rainfall $\\times$ runoff coefficient; volume $=$ depth $\\times$ area." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply rainfall by the runoff coefficient.", working: "80 \\times 0.6 = 48", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the runoff depth.", working: "48\\,\\mathrm{mm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert area to m² and depth to m, then multiply.", working: "500\\,\\mathrm{km^2} = 5 \\times 10^8\\,\\mathrm{m^2};\\ V = 5 \\times 10^8 \\times 0.048 = 2.4 \\times 10^7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the volume.", working: "24\\,000\\,000\\,\\mathrm{m^3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $48$ mm (b) $24\\,000\\,000$ m³",
            commonErrors: ["Forgetting to convert km² to m² and mm to m."],
          },
        },
        {
          id: "geo-u2-faq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Two flood events in the same basin peaked at $300$ m³/s and $150$ m³/s. Express the second peak as a percentage of the first.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage $= \\dfrac{\\text{part}}{\\text{whole}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Divide the smaller peak by the larger peak.", working: "\\frac{150}{300} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage.", working: "0.5 \\times 100 = 50", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Reporting the ratio 0.5 without converting to a percentage."],
          },
        },
        {
          id: "geo-u2-faq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "During a flood event, river level begins rising at hour $3$ and peaks at hour $9$. A town of $40\\,000$ people must evacuate at a rate of $8\\,000$ people per hour.",
          parts: [
            { label: "a", prompt: "Calculate the available warning time, in hours.", marks: 2 },
            { label: "b", prompt: "Calculate how many hours the town needs to complete evacuation.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Available warning time", answer: 6, unit: "hours" },
              { label: "(b) Hours needed for evacuation", answer: 5, unit: "hours" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate and time", statement: "Time $= \\dfrac{\\text{quantity}}{\\text{rate}}$; warning time is the difference between rise and peak." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the start of the rise from the peak time.", working: "9 - 3 = 6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the warning time.", working: "6\\,\\mathrm{hr}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide population by evacuation rate.", working: "\\frac{40\\,000}{8\\,000} = 5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the time needed.", working: "5\\,\\mathrm{hr}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compare: 5 hours needed fits within the 6-hour warning window.", working: "5 < 6\\ \\Rightarrow \\text{evacuation feasible}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6$ hours (b) $5$ hours",
            commonErrors: ["Using the peak hour alone without subtracting the start of the rise."],
          },
        },
      ],
    },
    {
      id: "geo-u2-flood-management",
      title: "Flood control and basin management",
      skill: "Evaluate hard engineering, soft engineering and catchment management strategies for flood control.",
      lesson: {
        sections: [
          {
            heading: "Hard engineering",
            body: "Structural measures resist floodwater: **dams** store and regulate discharge; **levees** and **floodwalls** confine channels; **channelisation** straightens and deepens rivers to speed flow. Examples include the Mississippi levees and the Thames Barrier (tide defence). Effective but expensive, and can increase flood risk downstream or cause levee failure catastrophes.",
          },
          {
            heading: "Soft engineering and natural flood management",
            body: "Soft approaches work with natural processes: **floodplain restoration** (reconnecting rivers to floodplains), **wetland creation**, **afforestation** (increases interception), **river restoration** (re-meandering) and **floodplain zoning** (restricting development). Cheaper long-term and improve biodiversity, but need more land and are less predictable.",
          },
          {
            heading: "Integrated basin management",
            body: "The most effective strategies combine upstream catchment measures (storage, infiltration) with downstream defences and land-use planning. **Flood forecasting and warning** save lives. Managed retreat — deliberately allowing flooding of low-value land — is an emerging sustainable option in some deltas.",
          },
        ],
        keyFormulas: [
          { name: "Hard engineering", statement: "Dams, levees, channelisation — resist floodwater structurally" },
          { name: "Soft engineering", statement: "Floodplain restoration, wetlands, afforestation — work with processes" },
          { name: "NFM", statement: "Natural Flood Management — upstream catchment measures" },
        ],
        workedExample: {
          problem: "Compare hard and soft engineering for flood control.",
          solution: "Hard engineering (levees, dams) gives predictable protection and protects property but is costly, damages ecosystems and can shift flood risk downstream. Soft engineering (floodplain reconnection, wetlands) is cheaper, improves habitat and stores water naturally but requires land and offers less certainty for dense urban areas.",
        },
      },
      questions: [
        {
          id: "geo-u2-fmq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is an example of soft engineering flood control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constructing a floodwall" },
              { id: "b", text: "Building a concrete levee" },
              { id: "c", text: "Channelising a river" },
              { id: "d", text: "Restoring a floodplain wetland" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Soft engineering", statement: "Floodplain restoration, wetlands, afforestation — natural process-based measures." },
            ],
            steps: [
              { reasoning: "Wetland restoration is soft engineering; levees, channelisation and floodwalls are hard.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Floodplain wetland restoration",
            commonErrors: ["Confusing soft with hard engineering — structures are hard, natural measures are soft."],
          },
        },
        {
          id: "geo-u2-fmq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two hard engineering methods of flood control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Hard engineering", statement: "Dams, levees, floodwalls, channelisation — structural resistance to floodwater." },
            ],
            steps: [
              { reasoning: "Dams store floodwater and release it gradually, reducing downstream peaks.", marks: 1, markCode: "M" },
              { reasoning: "Levees/floodwalls confine the channel, preventing overbank flooding.", marks: 1, markCode: "M" },
              { reasoning: "Channelisation straightens and deepens the channel to increase capacity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dams, levees/floodwalls, channelisation.",
            commonErrors: ["Describing soft measures like wetlands as hard engineering."],
          },
        },
        {
          id: "geo-u2-fmq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a combination of hard and soft engineering is often used for flood management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integrated flood management", statement: "Hard defences protect assets; soft measures reduce upstream flood generation — complementarity maximises protection." },
            ],
            steps: [
              { reasoning: "Hard engineering protects high-value urban areas where land for soft measures is scarce.", marks: 1, markCode: "M" },
              { reasoning: "Soft engineering upstream reduces peak discharge reaching defences.", marks: 1, markCode: "M" },
              { reasoning: "Together they reduce flood volume AND protect property — more robust than either alone.", marks: 1, markCode: "R" },
              { reasoning: "Also spreads cost and reduces environmental damage of relying solely on structures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hard defences protect assets; soft measures reduce flood peaks — combined they are more effective.",
            commonErrors: ["Arguing one approach is always superior — they address different parts of the problem."],
          },
        },
        {
          id: "geo-u2-fmq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the effectiveness of flood management strategies for a named river or city.",
          parts: [
            { label: "a", prompt: "Identify the named location and its flood problem.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate their effectiveness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flood strategy evaluation", statement: "Effectiveness judged on protection level, cost, environmental impact and social equity." },
            ],
            steps: [
              { part: "a", reasoning: "Named place (e.g. Thames, Mississippi, Dhaka) with real flood history.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific flood events or risk described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: hard (levee, dam, barrier) with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: soft or forecasting/zoning with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the location's specific flood problem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: protection level, cost-effectiveness or life-saving.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cost, ecosystem damage, false security or residual risk.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named place + problem. (b) Two strategies. (c) Effectiveness weighed.",
            commonErrors: ["Generic strategy description without place-specific evidence."],
          },
        },
        {
          id: "geo-u2-fmq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Natural Flood Management includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Restoring floodplains and planting upstream woodland" },
              { id: "b", text: "Building concrete levees" },
              { id: "c", text: "Channelising rivers" },
              { id: "d", text: "Constructing floodwalls" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Natural Flood Management", statement: "Working with natural processes — floodplain reconnection, wetlands, afforestation — to reduce flood peaks." },
            ],
            steps: [
              { reasoning: "NFM uses natural measures upstream; levees, channelisation and floodwalls are hard engineering.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Floodplain restoration and woodland planting",
            commonErrors: ["Listing structural measures as soft or natural engineering."],
          },
        },
        {
          id: "geo-u2-fmq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Floodplain zoning aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed up river flow" },
              { id: "b", text: "Raise levee heights" },
              { id: "c", text: "Deepen river channels" },
              { id: "d", text: "Restrict development in flood-prone areas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Floodplain zoning", statement: "Land-use planning that limits building in areas at risk of flooding." },
            ],
            steps: [
              { reasoning: "Zoning keeps people and assets out of flood-prone zones, reducing exposure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Restrict development in flood-prone areas",
            commonErrors: ["Confusing zoning (planning) with engineering structures."],
          },
        },
        {
          id: "geo-u2-fmq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Dams control river flooding mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing floodwater and releasing it gradually" },
              { id: "b", text: "Eroding the channel bed" },
              { id: "c", text: "Blocking tidal surges only" },
              { id: "d", text: "Increasing rainfall upstream" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Dams", statement: "Reservoirs store peak flows and regulate release, reducing downstream discharge peaks." },
            ],
            steps: [
              { reasoning: "Storage behind the dam attenuates the flood peak downstream.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Storing and gradually releasing floodwater",
            commonErrors: ["Thinking dams increase downstream flood risk in all cases — they can also starve sediment."],
          },
        },
        {
          id: "geo-u2-fmq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Channelisation involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building wetlands on the floodplain" },
              { id: "b", text: "Straightening and deepening the river channel" },
              { id: "c", text: "Re-meandering a straightened river" },
              { id: "d", text: "Planting trees along the banks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Channelisation", statement: "Hard engineering that straightens, deepens and smooths a channel to increase its capacity and flow speed." },
            ],
            steps: [
              { reasoning: "Channelisation is structural modification of the channel itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Straightening and deepening the channel",
            commonErrors: ["Confusing channelisation (hard) with river restoration/re-meandering (soft)."],
          },
        },
        {
          id: "geo-u2-fmq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Managed retreat is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abandoning all flood defences" },
              { id: "b", text: "Ignoring flood risk in planning" },
              { id: "c", text: "Moving the river to a new course" },
              { id: "d", text: "Deliberately allowing flooding of low-value land to protect more valuable areas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Managed retreat", statement: "A sustainable strategy that sacrifices low-value land to floodwater to protect higher-value areas." },
            ],
            steps: [
              { reasoning: "Managed retreat is a planned, selective surrender of land, not abandonment of all defences.", marks: 1, markCode: "M" },
              { reasoning: "It protects high-value assets while allowing natural flood storage elsewhere.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Deliberate flooding of low-value land",
            commonErrors: ["Equating managed retreat with doing nothing."],
          },
        },
        {
          id: "geo-u2-fmq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A levee scheme costs $2.4$ million to protect $8$ km of river. Calculate the cost per kilometre.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per km", answer: 300000, unit: "$/km" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit cost", statement: "Cost per unit length $= \\dfrac{\\text{total cost}}{\\text{length}}$." },
            ],
            steps: [
              { reasoning: "Divide total cost by protected length.", working: "\\frac{2.4 \\times 10^6}{8} = 3 \\times 10^5", marks: 1, markCode: "M" },
              { reasoning: "Check the units: dollars per kilometre.", working: "\\$\\,\\mathrm{km^{-1}}", marks: 1, markCode: "M" },
              { reasoning: "State the cost.", working: "300\\,000\\,\\$/\\mathrm{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300\\,000$ per km",
            commonErrors: ["Dividing length by cost instead of cost by length."],
          },
        },
        {
          id: "geo-u2-fmq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Newly created wetlands store $15\\,000$ m³ of floodwater. A flood event produces a volume of $45\\,000$ m³. Calculate the percentage of floodwater stored by the wetlands.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage stored", answer: 33.33, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage $= \\dfrac{\\text{stored volume}}{\\text{flood volume}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Divide stored volume by flood volume.", working: "\\frac{15\\,000}{45\\,000} = 0.3333", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage.", working: "0.3333 \\times 100 = 33.33", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "33.33\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$33.3\\%$ (approximately)",
            commonErrors: ["Reporting the fraction 0.33 instead of a percentage."],
          },
        },
        {
          id: "geo-u2-fmq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A dam has a storage capacity of $120$ million m³. A flood delivers $180$ million m³ of water over three days.",
          parts: [
            { label: "a", prompt: "Calculate the volume that cannot be stored, in m³.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage of the flood volume that can be stored.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume that cannot be stored", answer: 60000000, unit: "m³" },
              { label: "(b) Percentage of flood stored", answer: 66.7, unit: "%", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Storage capacity", statement: "Unstored volume $=$ flood volume $-$ capacity; stored percentage $= \\dfrac{\\text{capacity}}{\\text{flood}} \\times 100$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract capacity from flood volume.", working: "180 - 120 = 60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the unstored volume in m³.", working: "60 \\times 10^6 = 60\\,000\\,000\\,\\mathrm{m^3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide capacity by flood volume and multiply by 100.", working: "\\frac{120}{180} \\times 100 = 66.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the percentage.", working: "66.7\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $60\\,000\\,000$ m³ (b) $66.7\\%$",
            commonErrors: ["Dividing flood volume by capacity rather than capacity by flood volume."],
          },
        },
        {
          id: "geo-u2-fmq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Afforestation increases interception so that runoff falls by $25\\%$. Runoff before planting was $400$ mm per year. Calculate the reduction in runoff.",
          response: {
            type: "numeric",
            parts: [{ label: "Reduction in runoff", answer: 100, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Reduction $=$ percentage $\\times$ original value." },
            ],
            steps: [
              { reasoning: "Take 25% of the original runoff.", working: "0.25 \\times 400 = 100", marks: 1, markCode: "M" },
              { reasoning: "Check the units remain millimetres.", working: "\\mathrm{mm}", marks: 1, markCode: "M" },
              { reasoning: "State the reduction.", working: "100\\,\\mathrm{mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ mm",
            commonErrors: ["Reporting the new runoff (300 mm) instead of the reduction."],
          },
        },
        {
          id: "geo-u2-fmq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A floodwall costing $5$ million protects $200$ homes.",
          parts: [
            { label: "a", prompt: "Calculate the cost per protected home, in dollars.", marks: 2 },
            { label: "b", prompt: "Calculate how many homes are protected per $1$ million spent.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost per home", answer: 25000, unit: "$/home" },
              { label: "(b) Homes protected per $1 million", answer: 40, unit: "homes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit cost and rate", statement: "Cost per home $= \\dfrac{\\text{total cost}}{\\text{homes}}$; homes per million $= \\dfrac{\\text{homes}}{\\text{millions}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide total cost by number of homes.", working: "\\frac{5 \\times 10^6}{200} = 25\\,000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the cost per home.", working: "25\\,000\\,\\$", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide homes by millions of dollars spent.", working: "\\frac{200}{5} = 40", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the number of homes.", working: "40\\,\\mathrm{homes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $25\\,000$ per home (b) $40$ homes per $1$ million",
            commonErrors: ["Reversing cost and quantity when computing the unit rate."],
          },
        },
        {
          id: "geo-u2-fmq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A flood-warning system reduced deaths in a city from $120$ to $30$ during a major flood. Calculate the percentage reduction in deaths.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage reduction", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage reduction $= \\dfrac{\\text{reduction}}{\\text{original}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Find the reduction in deaths.", working: "120 - 30 = 90", marks: 1, markCode: "M" },
              { reasoning: "Divide by the original figure and multiply by 100.", working: "\\frac{90}{120} \\times 100 = 75", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: ["Dividing by the new figure (30) instead of the original (120)."],
          },
        },
        {
          id: "geo-u2-fmq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A flood scheme costing $12$ million protects $600$ homes. Avoided flood damage is estimated at $2$ million per year.",
          parts: [
            { label: "a", prompt: "Calculate the cost per protected home, in dollars.", marks: 2 },
            { label: "b", prompt: "Calculate the payback period in years.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost per home", answer: 20000, unit: "$/home" },
              { label: "(b) Payback period", answer: 6, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cost and payback", statement: "Cost per home $= \\dfrac{\\text{total cost}}{\\text{homes}}$; payback $= \\dfrac{\\text{cost}}{\\text{annual benefit}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide total cost by number of homes.", working: "\\frac{12 \\times 10^6}{600} = 20\\,000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the cost per home.", working: "20\\,000\\,\\$", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide total cost by annual avoided damage.", working: "\\frac{12}{2} = 6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the payback period.", working: "6\\,\\mathrm{yr}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate: a 6-year payback is short for flood infrastructure, favouring the scheme.", working: "6\\,\\mathrm{yr}\\ \\text{payback}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $20\\,000$ per home (b) $6$ years",
            commonErrors: ["Dividing annual benefit by total cost instead of cost by benefit."],
          },
        },
      ],
    },
  ],
};
