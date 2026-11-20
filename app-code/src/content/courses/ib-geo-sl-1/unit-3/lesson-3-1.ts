import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "geo-u3-lesson-3-1",
  code: "3-1",
  title: "Tectonic Hazards: Earthquakes and Volcanic Eruptions",
  goal: "I CAN describe tectonic hazard processes and evaluate prediction, monitoring and management strategies.",
  standards: ["Paper 1", "Paper 2", "Hazards"],
  vocabulary: [
    { term: "Tectonic hazard", definition: "A natural event at plate boundaries — earthquake or eruption — with potential to cause loss of life and damage." },
    { term: "Focus", definition: "The point within the Earth where an earthquake originates." },
    { term: "Epicentre", definition: "The point on Earth's surface directly above the earthquake focus." },
    { term: "Seismic waves", definition: "Energy waves (P, S, surface) released by earthquakes that cause shaking." },
    { term: "Pyroclastic flow", definition: "A fast-moving avalanche of hot ash, gas and rock fragments from a volcano." },
    { term: "Lahar", definition: "A destructive mudflow of volcanic ash and water down a volcano's slopes." },
  ],
  concepts: [
    {
      id: "geo-u3-earthquakes",
      title: "Earthquakes",
      skill: "Describe earthquake processes, measurement and the factors controlling their impact.",
      lesson: {
        sections: [
          {
            heading: "Cause and measurement",
            body: "Earthquakes release stored elastic energy where plates grind — at conservative, constructive and destructive boundaries. **Focus** depth and **magnitude** (Richter/Moment scale) determine energy; **seismic waves** (P, S, surface) cause shaking. Intensity is measured by felt effects (Modified Mercalli). Deep-focus quakes cause less surface damage; shallow ones are most destructive.",
          },
          {
            heading: "Impact factors",
            body: "Damage depends on **magnitude**, **depth**, **distance from epicentre**, **population density**, **building quality** and **time of day**. The 2010 Haiti earthquake (M7.0, shallow, dense informal housing) killed ~230,000, while the 2011 Tohoku quake (M9.0) killed far fewer despite greater energy — demonstrating vulnerability's role.",
          },
          {
            heading: "Prediction and management",
            body: "Earthquakes cannot be precisely predicted, but **monitoring** (seismometers, GPS strain), **early warning** (seconds of alert via P-wave detection) and **preparedness** (building codes, drills) reduce risk. Japan's strict codes and tsunami walls limit damage; Haiti's weak construction amplified catastrophe.",
          },
        ],
        keyFormulas: [
          { name: "Focus vs epicentre", statement: "Focus = underground origin; epicentre = surface point above" },
          { name: "Magnitude vs intensity", statement: "Magnitude = energy released (one value); intensity = local effects (varies)" },
          { name: "Risk factors", statement: "Magnitude × depth × density × building quality × vulnerability" },
        ],
        workedExample: {
          problem: "Explain why two earthquakes of similar magnitude can cause very different death tolls.",
          solution: "Death toll depends on vulnerability, not just magnitude: population density near the epicentre, building quality (informal housing collapses), time of day (night quakes trap sleepers), secondary hazards (tsunami, landslide) and emergency response capacity. Haiti 2010 vs Japan 2011 illustrates this starkly.",
        },
      },
      questions: [
        {
          id: "geo-u3-eqq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The epicentre of an earthquake is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The point underground where rupture begins" },
              { id: "b", text: "The point on the surface directly above the focus" },
              { id: "c", text: "The centre of the seismic wave path" },
              { id: "d", text: "The location of the nearest fault" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Epicentre", statement: "Surface point directly above the underground focus of an earthquake." },
            ],
            steps: [
              { reasoning: "Epicentre is the surface projection of the focus.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Surface point above the focus",
            commonErrors: ["Confusing epicentre (surface) with focus (underground)."],
          },
        },
        {
          id: "geo-u3-eqq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two factors that increase earthquake damage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Damage factors", statement: "Shallow focus, high magnitude, dense population, poor building quality, secondary hazards." },
            ],
            steps: [
              { reasoning: "Shallow focus concentrates shaking energy at the surface.", marks: 1, markCode: "M" },
              { reasoning: "High magnitude releases more energy; dense population increases exposure.", marks: 1, markCode: "M" },
              { reasoning: "Poor building quality and secondary hazards (tsunami, liquefaction) amplify losses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shallow depth, high magnitude, dense exposure, weak buildings, secondary hazards.",
            commonErrors: ["Listing only magnitude — depth and vulnerability matter equally."],
          },
        },
        {
          id: "geo-u3-eqq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between earthquake prediction and early warning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prediction vs warning", statement: "Prediction forecasts where/when a quake will occur; early warning detects initial P-waves seconds before damaging S-waves arrive." },
            ],
            steps: [
              { reasoning: "Prediction attempts to forecast location and timing — scientifically unreliable.", marks: 1, markCode: "M" },
              { reasoning: "Early warning detects the fast P-wave and alerts before slower S-waves arrive — seconds of lead time.", marks: 1, markCode: "M" },
              { reasoning: "Warning is feasible; prediction is not — a key distinction in hazard management.", marks: 1, markCode: "R" },
              { reasoning: "Japan and California operate warning systems; prediction remains impossible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prediction = forecasting (impossible); early warning = seconds of alert after rupture starts.",
            commonErrors: ["Treating early warning as prediction — it only gives seconds of notice."],
          },
        },
        {
          id: "geo-u3-eqq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the management of earthquake risk in a named country or region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its seismic hazard.", marks: 2 },
            { label: "b", prompt: "Explain two management or mitigation strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Earthquake management", statement: "Building codes, early warning, land-use planning and preparedness reduce risk; effectiveness depends on enforcement and resources." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Japan, California, Turkey) with plate boundary context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific seismic risk or past events identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: engineering (seismic codes, retrofitting) with detail.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: warning/preparedness (early warning, drills) with detail.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the region's hazard profile.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: reduced casualties, protected infrastructure.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cost, enforcement gaps, residual risk, informal housing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + hazard. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Claiming earthquakes can be predicted — they cannot."],
          },
        },
        {
          id: "geo-u3-eqq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The focus (hypocentre) of an earthquake is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The point on Earth's surface directly above the rupture" },
              { id: "b", text: "The point underground where the rupture begins" },
              { id: "c", text: "The centre of the seismic wave path" },
              { id: "d", text: "The nearest point on a plate boundary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Focus", statement: "The point within the Earth where an earthquake originates." },
            ],
            steps: [
              { reasoning: "The focus is the underground origin of the rupture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Underground point where rupture begins",
            commonErrors: ["Confusing focus with epicentre — focus is underground, epicentre is at the surface."],
          },
        },
        {
          id: "geo-u3-eqq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following about recent earthquakes: (a) the year of the Haiti earthquake; (b) its approximate magnitude; (c) the year of the Tohoku earthquake in Japan.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Haiti earthquake year", answer: 2010 },
              { label: "(b) Haiti earthquake magnitude", answer: 7, tolerance: 0.2 },
              { label: "(c) Tohoku earthquake year", answer: 2011 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Recent earthquakes", statement: "Haiti 2010 (M7.0, ~230,000 deaths) and Tohoku 2011 (M9.0) are key case studies." },
            ],
            steps: [
              { reasoning: "The Haiti earthquake struck in January 2010.", working: "2010", marks: 1, markCode: "A" },
              { reasoning: "The Haiti earthquake had a magnitude of about 7.0.", working: "M = 7.0", marks: 1, markCode: "A" },
              { reasoning: "The Tohoku earthquake struck Japan in March 2011.", working: "2011", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2010$ (b) $7.0$ (c) $2011$",
            commonErrors: ["Mixing up the years or magnitudes of the two events."],
          },
        },
        {
          id: "geo-u3-eqq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which type of seismic wave is recorded first at a seismograph after an earthquake?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surface waves" },
              { id: "b", text: "S-waves" },
              { id: "c", text: "P-waves" },
              { id: "d", text: "Love waves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Seismic wave speeds", statement: "P-waves are the fastest seismic waves and arrive first; surface waves arrive last but cause most damage." },
            ],
            steps: [
              { reasoning: "P-waves travel fastest through rock and are detected first.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** P-waves",
            commonErrors: ["Choosing surface waves — they are slowest but most destructive."],
          },
        },
        {
          id: "geo-u3-eqq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of main groups of seismic waves; (b) the maximum value on the Modified Mercalli intensity scale; (c) the year of the Tohoku earthquake.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Seismic wave groups", answer: 3 },
              { label: "(b) Mercalli maximum", answer: 12 },
              { label: "(c) Tohoku year", answer: 2011 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Seismic waves and intensity", statement: "P, S and surface waves are the three groups; Mercalli intensity runs I–XII." },
            ],
            steps: [
              { reasoning: "The three groups are P-waves, S-waves and surface waves.", working: "\\text{P, S, surface} = 3", marks: 1, markCode: "A" },
              { reasoning: "The Modified Mercalli scale runs from I to XII.", working: "XII = 12", marks: 1, markCode: "A" },
              { reasoning: "Tohoku struck Japan in 2011.", working: "2011", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $12$ (c) $2011$",
            commonErrors: ["Counting individual surface wave types (Love, Rayleigh) as separate groups."],
          },
        },
        {
          id: "geo-u3-eqq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Compared with a deep-focus earthquake of the same magnitude, a shallow-focus earthquake usually causes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "less surface damage because energy is absorbed" },
              { id: "b", text: "more surface damage because energy reaches the surface concentrated" },
              { id: "c", text: "no difference in surface damage" },
              { id: "d", text: "only tsunami damage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focus depth and damage", statement: "Shallow-focus quakes concentrate shaking energy near the surface and are most destructive." },
            ],
            steps: [
              { reasoning: "Shallow focus means less distance for seismic energy to dissipate before reaching the surface.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** More surface damage",
            commonErrors: ["Assuming magnitude alone determines damage — depth matters equally."],
          },
        },
        {
          id: "geo-u3-eqq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Give approximate figures: (a) the number of deaths caused by the 2010 Haiti earthquake; (b) the number of deaths caused by the 2011 Tohoku earthquake.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Haiti deaths", answer: 230000, tolerance: 30000 },
              { label: "(b) Tohoku deaths", answer: 20000, tolerance: 10000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Death toll comparison", statement: "Haiti ~230,000 deaths vs Tohoku ~20,000 despite Tohoku's far greater magnitude — a vulnerability contrast." },
            ],
            steps: [
              { reasoning: "The Haiti earthquake killed approximately 230,000 people.", working: "\\approx 230{,}000", marks: 1, markCode: "A" },
              { reasoning: "Tohoku caused roughly 20,000 deaths despite M9.0 magnitude.", working: "\\approx 20{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 230{,}000$ (b) $\\approx 20{,}000$",
            commonErrors: ["Reversing the figures — the smaller quake killed far more."],
          },
        },
        {
          id: "geo-u3-eqq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Earthquake early warning systems provide:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "days of advance notice before rupture" },
              { id: "b", text: "a few seconds of alert between fast P-waves and damaging S-waves" },
              { id: "c", text: "exact prediction of location and timing" },
              { id: "d", text: "no useful warning at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Earthquake early warning", statement: "Detection of initial P-waves alerts populations seconds before slower, damaging S-waves and surface waves arrive." },
            ],
            steps: [
              { reasoning: "P-waves travel faster than damaging waves, giving seconds of warning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A few seconds of alert",
            commonErrors: ["Confusing early warning with prediction — it gives seconds, not days."],
          },
        },
        {
          id: "geo-u3-eqq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Using typical classifications: (a) the approximate magnitude difference between the Tohoku (M9.0) and Haiti (M7.0) earthquakes; (b) the approximate depth in km usually classed as the upper limit of 'shallow focus'; (c) the approximate depth in km usually classed as 'deep focus'.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Magnitude difference", answer: 2, tolerance: 0.1 },
              { label: "(b) Shallow focus limit (km)", answer: 70, tolerance: 30 },
              { label: "(c) Deep focus depth (km)", answer: 300, tolerance: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Focus depth classes", statement: "Shallow focus is roughly under 70 km, intermediate to ~300 km and deep focus below that." },
            ],
            steps: [
              { reasoning: "Magnitude difference: $9.0 - 7.0 = 2$.", working: "9.0 - 7.0 = 2", marks: 1, markCode: "M" },
              { reasoning: "Shallow-focus earthquakes occur within roughly the upper 70 km of the crust.", working: "\\approx 70\\ \\text{km}", marks: 1, markCode: "A" },
              { reasoning: "Deep-focus earthquakes originate below about 300 km, near the base of the mantle transition zone.", working: "\\approx 300\\ \\text{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ (b) $\\approx 70$ km (c) $\\approx 300$ km",
            commonErrors: ["Giving absolute magnitudes instead of the difference in part (a)."],
          },
        },
        {
          id: "geo-u3-eqq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine earthquake monitoring and early warning as risk-reduction strategies.",
          parts: [
            { label: "a", prompt: "Describe two monitoring techniques used to study earthquakes.", marks: 2 },
            { label: "b", prompt: "Explain how early warning systems work.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these approaches in reducing earthquake losses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Seismic monitoring", statement: "Seismometers, GPS strain measurement and seismic networks detect earthquakes and their precursors." },
            ],
            steps: [
              { part: "a", reasoning: "Seismometers record seismic wave arrival times and magnitudes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "GPS/GNSS networks measure crustal strain accumulation along faults.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Networks detect the fast, low-amplitude P-wave first.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The system estimates epicentre and magnitude within seconds.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "An alert is issued before slower, damaging S- and surface waves arrive.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: seconds of warning allow trains to brake, surgery to pause and people to shelter.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: warning time is short, coverage is uneven and false alarms occur.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on overall value versus cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Seismometers + GPS strain. (b) P-wave detection → seconds of alert. (c) Effective but limited.",
            commonErrors: ["Claiming monitoring enables prediction of when and where quakes will occur."],
          },
        },
        {
          id: "geo-u3-eqq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the secondary hazards that can follow a major earthquake.",
          parts: [
            { label: "a", prompt: "Identify two secondary hazards triggered by earthquakes.", marks: 2 },
            { label: "b", prompt: "Explain the mechanisms of these secondary hazards.", marks: 3 },
            { label: "c", prompt: "Evaluate their contribution to total losses in a named earthquake event.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Secondary hazards", statement: "Earthquakes trigger tsunamis, landslides, liquefaction and fires that can exceed primary shaking losses." },
            ],
            steps: [
              { part: "a", reasoning: "Two hazards named, e.g. tsunami and liquefaction (or landslide/fire).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly identified as earthquake-triggered secondary hazards.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tsunami: seafloor displacement displaces water into a wave train.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Liquefaction: shaking turns saturated sediment liquid, collapsing foundations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanism linked to specific ground conditions or coastal setting.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Named event (e.g. Tohoku 2011, Haiti 2010, San Francisco 1906) with figures.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Assessment of whether secondary losses exceeded or were minor relative to shaking.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Tsunami + liquefaction/landslide. (b) Mechanisms explained. (c) Case-study evaluation.",
            commonErrors: ["Listing secondary hazards without explaining their mechanisms."],
          },
        },
        {
          id: "geo-u3-eqq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Two earthquakes of similar magnitude cause very different death tolls mainly because of differences in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the colour and composition of local rocks" },
              { id: "b", text: "vulnerability — population density, building quality and preparedness" },
              { id: "c", text: "the phase of the moon at the time" },
              { id: "d", text: "the number of seismometers in the region" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk and vulnerability", statement: "Risk = hazard × exposure × vulnerability; identical hazards produce different losses where vulnerability differs." },
            ],
            steps: [
              { reasoning: "Death toll is driven by vulnerability factors, not hazard energy alone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Vulnerability — density, building quality, preparedness",
            commonErrors: ["Attributing differences to magnitude — the premise states magnitudes are similar."],
          },
        },
        {
          id: "geo-u3-eqq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the approximate number of magnitude 7 or greater earthquakes worldwide each year; (b) the year of the Tohoku earthquake.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) M7+ quakes per year", answer: 18, tolerance: 8 },
              { label: "(b) Tohoku year", answer: 2011 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Earthquake frequency", statement: "Roughly 15–20 magnitude 7+ earthquakes occur globally each year." },
            ],
            steps: [
              { reasoning: "About 15–20 major earthquakes occur per year; 18 is an accepted estimate.", working: "\\approx 15\\text{--}20", marks: 1, markCode: "A" },
              { reasoning: "The Tohoku earthquake occurred in 2011.", working: "2011", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 18$ (b) $2011$",
            commonErrors: ["Confusing total earthquake numbers (hundreds of thousands) with major events."],
          },
        },
      ],
    },
    {
      id: "geo-u3-volcanoes",
      title: "Volcanic Eruptions",
      skill: "Describe volcanic processes, eruption types and volcanic hazards, and evaluate monitoring and management.",
      lesson: {
        sections: [
          {
            heading: "Volcano types and eruption styles",
            body: "Magma composition controls eruptions: **basaltic** magma (low silica, fluid) produces gentle shield volcanoes and lava flows (Hawaii); **andesitic/rhyolitic** magma (high silica, viscous) traps gas, producing explosive composite cones (Vesuvius, Mt St Helens) with pyroclastic flows and ash.",
          },
          {
            heading: "Volcanic hazards",
            body: "Primary hazards: **lava flows**, **pyroclastic flows** (fast, lethal), **lahars** (volcanic mudflows triggered by rain or melting ice), **ash fall** (disrupts aviation, buries land), volcanic gases. Secondary effects: climate cooling (e.g. Tambora 1815 'year without summer'), tsunamis from flank collapse.",
          },
          {
            heading: "Monitoring and benefits",
            body: "Volcanoes are among the most predictable hazards — **seismometers**, **gas monitoring**, ground deformation and satellite imagery give warning. Management includes exclusion zones, engineered barriers and evacuation (e.g. Mount Pinatubo 1991 saved thousands). Volcanoes also provide geothermal energy, fertile soils and minerals.",
          },
        ],
        keyFormulas: [
          { name: "Eruption style", statement: "Low silica → effusive; high silica → explosive" },
          { name: "Main hazards", statement: "Lava, pyroclastic flow, lahar, ash fall" },
          { name: "Predictability", statement: "Volcanoes give measurable precursors — more predictable than earthquakes" },
        ],
        workedExample: {
          problem: "Explain why composite volcanoes erupt explosively while shield volcanoes erupt gently.",
          solution: "Composite volcanoes have high-silica, viscous magma that traps volcanic gases; pressure builds until it explodes, producing pyroclastic flows and ash. Shield volcanoes have low-silica, fluid basaltic magma that lets gases escape easily, producing gentle lava flows.",
        },
      },
      questions: [
        {
          id: "geo-u3-vq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A lahar is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fast pyroclastic flow of hot gas" },
              { id: "b", text: "A mudflow of volcanic ash and water" },
              { id: "c", text: "A column of ash reaching the stratosphere" },
              { id: "d", text: "A lava flow from a shield volcano" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lahar", statement: "Destructive mudflow of volcanic ash, debris and water down a volcano's slopes." },
            ],
            steps: [
              { reasoning: "Lahars are volcanic mudflows, often triggered by rain or melting snow/ice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Volcanic mudflow",
            commonErrors: ["Confusing lahars with pyroclastic flows — one is mud, the other is hot gas/ash."],
          },
        },
        {
          id: "geo-u3-vq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two volcanic hazards and their impacts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Volcanic hazards", statement: "Lava flows, pyroclastic flows, lahars, ash fall, gases." },
            ],
            steps: [
              { reasoning: "Pyroclastic flows: fast hot avalanches that destroy everything in their path (Pompeii 79 CE).", marks: 1, markCode: "M" },
              { reasoning: "Lahars: mudflows bury settlements years after eruption when rain remobilises ash.", marks: 1, markCode: "M" },
              { reasoning: "Ash fall disrupts aviation, contaminates water and collapses roofs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pyroclastic flows, lahars, ash fall (or lava flows/gases) with impacts.",
            commonErrors: ["Listing hazards without explaining their specific impacts."],
          },
        },
        {
          id: "geo-u3-vq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why volcanic eruptions are more predictable than earthquakes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Volcano predictability", statement: "Magma movement produces measurable precursors (seismicity, deformation, gas) days to weeks before eruption." },
            ],
            steps: [
              { reasoning: "Magma ascent causes detectable earthquakes, ground swelling and gas changes.", marks: 1, markCode: "M" },
              { reasoning: "Monitoring networks track these precursors in near-real time.", marks: 1, markCode: "M" },
              { reasoning: "This allows evacuation before eruption — as at Pinatubo 1991.", marks: 1, markCode: "R" },
              { reasoning: "Earthquakes release energy suddenly with little useful warning — key contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Volcanoes show measurable precursors enabling warning; earthquakes strike without reliable warning.",
            commonErrors: ["Claiming all natural hazards are equally unpredictable."],
          },
        },
        {
          id: "geo-u3-vq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the hazards and management of a named volcanic eruption.",
          parts: [
            { label: "a", prompt: "Identify the named volcano/eruption and its type.", marks: 2 },
            { label: "b", prompt: "Explain the main hazards it produced.", marks: 3 },
            { label: "c", prompt: "Evaluate the management and response.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eruption case study", statement: "Eruption style determines hazard type; monitoring and evacuation determine casualties." },
            ],
            steps: [
              { part: "a", reasoning: "Named eruption (e.g. Pinatubo 1991, Vesuvius 79 CE, Eyjafjallajökull 2010).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct eruption type (explosive/effusive) identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hazard 1: pyroclastic flow/lahar/ash with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hazard 2: secondary hazard (climate, aviation, tsunamis).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hazards correctly linked to eruption style.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Management: monitoring, evacuation, exclusion zones.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: lives saved vs economic losses, residual risk.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named eruption + type. (b) Hazards with mechanisms. (c) Management evaluated.",
            commonErrors: ["Choosing a famous eruption without accurate hazard detail."],
          },
        },
        {
          id: "geo-u3-vq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A pyroclastic flow is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A slow-moving river of molten lava" },
              { id: "b", text: "A fast-moving avalanche of hot ash, gas and rock fragments" },
              { id: "c", text: "A mudflow of volcanic ash and water" },
              { id: "d", text: "A column of ash rising into the stratosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pyroclastic flow", statement: "A fast-moving avalanche of hot ash, gas and rock fragments that travels down volcanic slopes at high speed." },
            ],
            steps: [
              { reasoning: "Pyroclastic flows are hot, fast avalanches of fragmented volcanic material.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fast hot avalanche of ash, gas and rock",
            commonErrors: ["Confusing pyroclastic flows with lava flows — lava is molten rock, pyroclastic material is fragmented ash and gas."],
          },
        },
        {
          id: "geo-u3-vq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the years of these eruptions: (a) Mount Pinatubo, Philippines; (b) Vesuvius, which buried Pompeii; (c) Tambora, associated with the 'year without summer'.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Pinatubo year", answer: 1991 },
              { label: "(b) Vesuvius year", answer: 79 },
              { label: "(c) Tambora year", answer: 1815 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Key eruptions", statement: "Vesuvius 79 CE, Tambora 1815 and Pinatubo 1991 are standard IB case studies." },
            ],
            steps: [
              { reasoning: "Pinatubo erupted in June 1991.", working: "1991", marks: 1, markCode: "A" },
              { reasoning: "Vesuvius erupted in 79 CE, burying Pompeii and Herculaneum.", working: "79\\ \\text{CE}", marks: 1, markCode: "A" },
              { reasoning: "Tambora erupted in 1815, causing global cooling.", working: "1815", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1991$ (b) $79$ CE (c) $1815$",
            commonErrors: ["Confusing Tambora (1815) with Krakatoa (1883)."],
          },
        },
        {
          id: "geo-u3-vq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Explosive volcanic eruptions are most typical of volcanoes with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "low-silica basaltic magma that flows easily" },
              { id: "b", text: "high-silica viscous magma that traps volcanic gases" },
              { id: "c", text: "only water vapour and no magma" },
              { id: "d", text: "a completely solidified magma chamber" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magma composition and eruption style", statement: "High-silica magma is viscous and traps gas, building pressure until explosive eruption." },
            ],
            steps: [
              { reasoning: "Viscous high-silica magma traps gas; pressure release produces explosions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** High-silica viscous magma trapping gas",
            commonErrors: ["Associating explosivity with fluid basaltic magma — that produces gentle effusive eruptions."],
          },
        },
        {
          id: "geo-u3-vq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of primary volcanic hazards named in the lesson (lava flows, pyroclastic flows, lahars, ash fall); (b) the year of the Mount St Helens eruption; (c) the year of the Eyjafjallajökull eruption.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Primary hazards", answer: 4 },
              { label: "(b) St Helens year", answer: 1980 },
              { label: "(c) Eyjafjallajökull year", answer: 2010 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Volcanic hazards and eruptions", statement: "Primary hazards are lava flows, pyroclastic flows, lahars and ash fall; St Helens 1980 and Eyjafjallajökull 2010 are key examples." },
            ],
            steps: [
              { reasoning: "Four primary hazards are listed: lava, pyroclastic flows, lahars, ash fall.", working: "4", marks: 1, markCode: "A" },
              { reasoning: "Mount St Helens erupted in May 1980.", working: "1980", marks: 1, markCode: "A" },
              { reasoning: "Eyjafjallajökull erupted in 2010, disrupting European airspace.", working: "2010", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ (b) $1980$ (c) $2010$",
            commonErrors: ["Counting volcanic gases as a fifth primary hazard — they are usually treated separately."],
          },
        },
        {
          id: "geo-u3-vq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Lahars are most commonly triggered by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "direct contact with lava flows" },
              { id: "b", text: "rain or melting snow and ice remobilising volcanic ash and debris" },
              { id: "c", text: "earthquake shaking alone" },
              { id: "d", text: "ocean tides reaching the volcano" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lahar formation", statement: "Lahars form when water (rain, melted snow/ice) remobilises loose volcanic ash and debris on steep slopes." },
            ],
            steps: [
              { reasoning: "Water remobilises erupted material into fast mudflows down the volcano's slopes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rain or melting snow/ice remobilising ash",
            commonErrors: ["Thinking lahars only occur during the eruption — they can happen years later."],
          },
        },
        {
          id: "geo-u3-vq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the approximate VEI of the 1991 Pinatubo eruption; (b) the year of the Eyjafjallajökull eruption that disrupted European air travel.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Pinatubo VEI", answer: 6, tolerance: 1 },
              { label: "(b) Eyjafjallajökull year", answer: 2010 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Eruption scales and events", statement: "The Volcanic Explosivity Index (VEI) runs 0–8; Pinatubo 1991 was about VEI 6." },
            ],
            steps: [
              { reasoning: "Pinatubo's 1991 eruption is classed around VEI 6.", working: "VEI \\approx 6", marks: 1, markCode: "A" },
              { reasoning: "Eyjafjallajökull erupted in 2010.", working: "2010", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $VEI \\approx 6$ (b) $2010$",
            commonErrors: ["Confusing VEI with magnitude scales used for earthquakes."],
          },
        },
        {
          id: "geo-u3-vq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Volcanic eruptions are more predictable than earthquakes mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "volcanoes are physically smaller than fault zones" },
              { id: "b", text: "magma movement produces measurable precursors such as seismicity, ground deformation and gas changes" },
              { id: "c", text: "volcanoes erupt on regular schedules" },
              { id: "d", text: "satellites can predict all eruptions months ahead" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Volcano precursors", statement: "Magma ascent generates detectable earthquakes, deformation and gas emission changes days to weeks before eruption." },
            ],
            steps: [
              { reasoning: "Magma movement gives measurable warning signs that earthquake faults do not.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Measurable precursors from magma movement",
            commonErrors: ["Claiming volcanoes erupt on a schedule — they are predictable, not periodic."],
          },
        },
        {
          id: "geo-u3-vq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of volcano monitoring methods named in the lesson (seismometers, gas monitoring, ground deformation, satellite imagery); (b) the number of benefits of volcanoes listed (geothermal energy, fertile soils, minerals); (c) the year of the eruption associated with the 'year without summer'.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Monitoring methods", answer: 4 },
              { label: "(b) Benefits listed", answer: 3 },
              { label: "(c) Year without summer", answer: 1815 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Monitoring and benefits", statement: "Four monitoring methods and three benefits are identified; Tambora 1815 caused the 'year without summer'." },
            ],
            steps: [
              { reasoning: "Seismometers, gas monitoring, deformation and satellites give four methods.", working: "4", marks: 1, markCode: "A" },
              { reasoning: "Geothermal energy, fertile soils and minerals give three benefits.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Tambora's 1815 eruption caused global cooling — the 'year without summer'.", working: "1815", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ (b) $3$ (c) $1815$",
            commonErrors: ["Attributing the 'year without summer' to Krakatoa rather than Tambora."],
          },
        },
        {
          id: "geo-u3-vq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how volcanoes are monitored and how monitoring supports management decisions.",
          parts: [
            { label: "a", prompt: "Describe two monitoring techniques used at active volcanoes.", marks: 2 },
            { label: "b", prompt: "Explain what the precursors of an eruption indicate.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of monitoring in a named volcanic eruption.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Volcano monitoring", statement: "Seismicity, gas composition, ground deformation and thermal/satellite imagery track magma ascent and eruption likelihood." },
            ],
            steps: [
              { part: "a", reasoning: "Seismometers detect magma-driven earthquakes (volcano-tectonic events).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gas monitoring or ground-deformation (tilt/GPS/InSAR) measures magma movement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rising earthquake frequency and magma-type quakes signal ascent.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ground swelling and changing gas ratios indicate pressure and magma composition.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Escalating precursors allow alert levels to be raised before eruption.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Named eruption (e.g. Pinatubo 1991) with monitoring detail.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: warning time gained, evacuation success, residual uncertainty.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Seismic + gas/deformation monitoring. (b) Precursor escalation signals eruption. (c) Case-study evaluation.",
            commonErrors: ["Claiming volcanoes can be predicted as precisely as weather forecasts."],
          },
        },
        {
          id: "geo-u3-vq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the benefits and hazards of volcanic activity for people.",
          parts: [
            { label: "a", prompt: "Identify two benefits that volcanoes provide to people.", marks: 2 },
            { label: "b", prompt: "Explain two hazards produced by volcanic eruptions.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the benefits outweigh the hazards for a named region.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Volcanic benefits vs hazards", statement: "Volcanoes supply geothermal energy, fertile soils and minerals but produce lethal flows, lahars, ash and climate effects." },
            ],
            steps: [
              { part: "a", reasoning: "Two benefits named, e.g. geothermal energy and fertile volcanic soils.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Benefits explained (energy, agriculture, minerals/tourism).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hazard 1: pyroclastic flow or lahar with mechanism and impact.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hazard 2: ash fall or climate cooling with mechanism and impact.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hazards correctly described as direct or secondary effects.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Named region (e.g. Iceland, Java, Hawaii) with contextual evidence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighing benefits against hazard frequency and management capacity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two benefits. (b) Two hazards with mechanisms. (c) Regional judgement.",
            commonErrors: ["Listing benefits and hazards without any evaluative judgement."],
          },
        },
        {
          id: "geo-u3-vq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Composite volcanoes erupt explosively mainly because their magma is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "low in silica and flows like water" },
              { id: "b", text: "high in silica and viscous, trapping volcanic gases until pressure builds" },
              { id: "c", text: "composed entirely of water vapour" },
              { id: "d", text: "already completely solidified" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Viscosity–explosivity link", statement: "Viscous high-silica magma traps gases; pressure release produces explosive eruptions." },
            ],
            steps: [
              { reasoning: "Viscosity traps gas; pressure builds until the eruption becomes explosive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** High-silica viscous magma trapping gas",
            commonErrors: ["Reversing the relationship — fluid magma erupts gently."],
          },
        },
        {
          id: "geo-u3-vq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the year of the Vesuvius eruption that buried Pompeii; (b) the number of primary volcanic hazard types named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Vesuvius year", answer: 79 },
              { label: "(b) Primary hazard types", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Eruption dates and hazards", statement: "Vesuvius erupted in 79 CE; lava flows, pyroclastic flows, lahars and ash fall are the four primary hazards." },
            ],
            steps: [
              { reasoning: "Vesuvius erupted in 79 CE.", working: "79\\ \\text{CE}", marks: 1, markCode: "A" },
              { reasoning: "Four primary hazard types are named.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $79$ CE (b) $4$",
            commonErrors: ["Giving 79 without noting it is CE."],
          },
        },
      ],
    },
  ],
};
