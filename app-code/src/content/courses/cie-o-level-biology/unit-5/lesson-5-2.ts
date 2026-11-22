import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olbio-u5-lesson-5-2",
  code: "5-2",
  title: "Gas Exchange",
  goal: "I CAN describe the breathing system, the structure of alveoli, and the differences between inspired and expired air.",
  standards: ["5090 5.2"],
  vocabulary: [
    { term: "Ventilation", definition: "Mechanical movement of air into and out of the lungs." },
    { term: "Inspiration", definition: "Breathing in — diaphragm contracts and flattens, ribs move up/out, volume increases." },
    { term: "Expiration", definition: "Breathing out — diaphragm relaxes and domes, ribs move down/in, volume decreases." },
    { term: "Alveolus", definition: "Tiny air sac where gas exchange occurs between air and blood." },
    { term: "Surfactant", definition: "Fluid reducing surface tension in alveoli, preventing collapse." },
    { term: "Tidal volume", definition: "Volume of air moved in and out in one normal breath." },
  ],
  concepts: [
    {
      id: "olbio-u5-breathing",
      title: "Ventilation",
      skill: "Describe the mechanism of inspiration and expiration and the role of the diaphragm and intercostal muscles.",
      lesson: {
        sections: [
          {
            heading: "Inspiration (breathing in)",
            body: "- **External intercostal muscles contract** → ribs move up and out.\n- **Diaphragm contracts and flattens** → moves down.\n- Thoracic volume **increases** → pressure **decreases** → air flows **in** down its gradient.",
          },
          {
            heading: "Expiration (breathing out)",
            body: "- Intercostal muscles **relax** → ribs move down and in.\n- Diaphragm **relaxes** → domes upward.\n- Thoracic volume **decreases** → pressure **increases** → air flows **out**.",
          },
          {
            heading: "Pressure principle",
            body: "Air moves from high to low pressure. Breathing actively changes thoracic volume, which changes pressure, which moves air.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What happens to pressure in the chest during inspiration?",
          solution: "Volume increases (diaphragm flattens, ribs up/out) so pressure decreases, drawing air in.",
        },
      },
      questions: [
        {
          id: "olbio-u5-breathing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During inspiration, the diaphragm:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relaxes and domes" },
              { id: "b", text: "Moves upward only" },
              { id: "c", text: "Stays completely still" },
              { id: "d", text: "Contracts and flattens" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inspiration", statement: "Diaphragm contracts/flattens; volume ↑, pressure ↓." },
            ],
            steps: [
              { reasoning: "Recall the movement.", working: "\\text{contracts, flattens}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Contracts and flattens",
            commonErrors: ["Choosing 'relaxes' — that's expiration."],
          },
        },
        {
          id: "olbio-u5-breathing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what happens to thoracic volume and pressure during inspiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inspiration mechanics", statement: "Volume increases → pressure decreases → air flows in." },
            ],
            steps: [
              { reasoning: "State volume change.", working: "\\text{volume increases}", marks: 1, markCode: "M" },
              { reasoning: "State pressure change and result.", working: "\\text{pressure decreases, air in}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thoracic volume increases (diaphragm/ribs move) so pressure decreases and air is drawn into the lungs.",
            commonErrors: ["Saying pressure increases — that would push air out."],
          },
        },
        {
          id: "olbio-u5-breathing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of the diaphragm in breathing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Diaphragm", statement: "Sheet of muscle; contracts→flattens (inspiration), relaxes→domes (expiration)." },
            ],
            steps: [
              { reasoning: "Describe inspiration action.", working: "\\text{contract/flatten}", marks: 1, markCode: "M" },
              { reasoning: "Describe expiration action.", working: "\\text{relax/dome}", marks: 1, markCode: "M" },
              { reasoning: "Link to volume/pressure change.", working: "\\text{volume} \\to \\text{pressure}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: drives ventilation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The diaphragm contracts and flattens to increase thoracic volume (inspiration) and relaxes/domestically to decrease it (expiration), changing pressure to move air.",
            commonErrors: ["Saying 'diaphragm pumps air' — it changes volume, air moves by pressure gradient."],
          },
        },
        {
          id: "olbio-u5-breathing-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates breathing using a spirometer or by counting breaths before and after exercise.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the change in breathing rate after exercise.", marks: 1 },
            { label: "c", prompt: "Explain why breathing rate increases after exercise.", marks: 4 },
            { label: "d", prompt: "Suggest one way to make the measurement more reliable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exercise and breathing", statement: "Exercise ↑ CO₂/lactic acid → need more O₂ → breathing rate ↑." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: exercise/rest. Dependent: breathing rate.", working: "\\text{exercise vs rate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rate increases.", working: "\\text{increases}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscles respire faster → need more O₂.", working: "\\text{more O}_2 \\text{ needed}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Produce more CO₂ which must be removed.", working: "\\text{CO}_2 \\text{ removal}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lactic acid/oxygen debt needs repayment.", working: "\\text{oxygen debt}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: rate rises to meet demand.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Repeat measurements and average.", working: "\\text{repeat/average}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State reliability improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) exercise/rest vs rate (b) increases (c) more O₂ needed, CO₂ removal, oxygen debt (d) repeat and average",
            commonErrors: ["In (c) only mentioning 'more energy' without linking to gas exchange."],
          },
        },
        {
          id: "olbio-u5-breathing-q5", difficulty: "foundation", totalMarks: 1,
          stem: "During inspiration, the external intercostal muscles:",
          response: { type: "mcq", choices: [ { id: "a", text: "Close the glottis" }, { id: "b", text: "Contract and move the ribs up and out" }, { id: "c", text: "Produce carbon dioxide" }, { id: "d", text: "Relax and move the ribs down" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Intercostal muscles", statement: "External intercostal muscles contract to move ribs up and out during inspiration." }], steps: [{ reasoning: "Recall muscle action.", working: "\\text{contract}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Contract and move the ribs up and out", commonErrors: ["Relaxation of intercostals is associated with expiration."] },
        },
        {
          id: "olbio-u5-breathing-q6", difficulty: "foundation", totalMarks: 1,
          stem: "What happens to pressure inside the thorax during inspiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "It increases" }, { id: "b", text: "It decreases" }, { id: "c", text: "It stays exactly constant" }, { id: "d", text: "It becomes zero" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Breathing pressure", statement: "Inspiration increases thoracic volume and decreases pressure so air flows in." }], steps: [{ reasoning: "Relate volume to pressure.", working: "V\\uparrow \\Rightarrow P\\downarrow", marks: 1, markCode: "B" }], finalAnswer: "**(a)** It decreases", commonErrors: ["Pressure does not increase during inspiration."] },
        },
        {
          id: "olbio-u5-breathing-q7", difficulty: "core", totalMarks: 1,
          stem: "During normal expiration, the diaphragm:",
          response: { type: "mcq", choices: [ { id: "a", text: "Stays flattened permanently" }, { id: "b", text: "Is removed surgically" }, { id: "c", text: "Contracts and flattens" }, { id: "d", text: "Relaxes and domes upward" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Expiration", statement: "During expiration the diaphragm relaxes and domes upward while the thoracic volume decreases." }], steps: [{ reasoning: "Recall expiratory position.", working: "\\text{relax/dom}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Relaxes and domes upward", commonErrors: ["Flattening is the inspiratory position."] },
        },
        {
          id: "olbio-u5-breathing-q8", difficulty: "core", totalMarks: 1,
          stem: "Air moves into the lungs because:",
          response: { type: "mcq", choices: [ { id: "a", text: "Carbon dioxide pushes oxygen out" }, { id: "b", text: "Air pressure outside is higher than inside the lungs" }, { id: "c", text: "The diaphragm creates a vacuum" }, { id: "d", text: "The lungs actively suck air in" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Pressure gradient breathing", statement: "Breathing changes thoracic pressure; air flows from higher to lower pressure." }], steps: [{ reasoning: "Apply pressure gradient principle.", working: "\\text{high} \\to \\text{low pressure}", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Air pressure outside is higher than inside the lungs", commonErrors: ["The lungs do not actively suck air."] },
        },
        {
          id: "olbio-u5-breathing-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which change increases thoracic volume during inspiration?",
          response: { type: "mcq", choices: [ { id: "a", text: "Diaphragm relaxes and ribs move down" }, { id: "b", text: "Ribs move inward only" }, { id: "c", text: "Abdominal muscles contract strongly" }, { id: "d", text: "Diaphragm contracts and ribs move up/out" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Thoracic volume", statement: "Diaphragm contraction and upward/outward rib movement increase thoracic volume." }], steps: [{ reasoning: "Identify volume-increasing movement.", working: "V_{\\text{thorax}}\\uparrow", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Diaphragm contracts and ribs move up/out", commonErrors: ["Downward/inward rib movement decreases volume."] },
        },
        {
          id: "olbio-u5-breathing-q10", difficulty: "foundation", totalMarks: 1,
          stem: "A person breathes 12 times per minute with a tidal volume of 500 cm3. How many breaths occur in 5 minutes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "breaths" }] },
          markscheme: { principles: [{ kind: "property", name: "Breathing rate", statement: "Breaths = rate per minute multiplied by minutes." }], steps: [{ reasoning: "Multiply rate by time.", working: "12 \\times 5 = 60 \\text{ breaths}", marks: 1, markCode: "M" }], finalAnswer: "60 breaths" },
        },
        {
          id: "olbio-u5-breathing-q11", difficulty: "core", totalMarks: 1,
          stem: "At rest a person takes 15 breaths per minute of 500 cm3 each. Calculate the volume of air breathed in one minute.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7500, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Minute ventilation", statement: "Minute ventilation is breathing rate times tidal volume." }], steps: [{ reasoning: "Multiply breaths per minute by tidal volume.", working: "15 \\times 500 = 7500 \\text{ cm}^3", marks: 1, markCode: "M" }], finalAnswer: "7500 cm3" },
        },
        {
          id: "olbio-u5-breathing-q12", difficulty: "core", totalMarks: 1,
          stem: "During exercise breathing rate rises from 12 to 24 breaths per minute with unchanged 500 cm3 tidal volume. Calculate the increase in air breathed per minute.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6000, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Exercise ventilation", statement: "Doubling breathing rate doubles minute ventilation when tidal volume is unchanged." }], steps: [{ reasoning: "Compare exercise and rest minute ventilation.", working: "24 \\times 500 - 12 \\times 500 = 6000 \\text{ cm}^3", marks: 1, markCode: "M" }], finalAnswer: "6000 cm3 increase" },
        },
        {
          id: "olbio-u5-breathing-q13", difficulty: "challenge", totalMarks: 1,
          stem: "A spirometer records tidal volume 0.5 dm3 and breathing rate 20 breaths per minute. What is minute ventilation in dm3 per minute?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "dm^3/min" }] },
          markscheme: { principles: [{ kind: "property", name: "Minute ventilation", statement: "Minute ventilation = tidal volume x breathing rate." }], steps: [{ reasoning: "Multiply tidal volume by breathing rate.", working: "0.5 \\times 20 = 10 \\text{ dm}^3/\\text{min}", marks: 1, markCode: "M" }], finalAnswer: "10 dm3/min" },
        },
        {
          id: "olbio-u5-breathing-q14", difficulty: "core", totalMarks: 1,
          stem: "If tidal volume is 400 cm3 and breathing rate increases from 10 to 25 breaths per minute, what is the new air volume per minute?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10000, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Minute ventilation", statement: "Multiply tidal volume by the new breathing rate." }], steps: [{ reasoning: "Multiply tidal volume by new rate.", working: "25 \\times 400 = 10000 \\text{ cm}^3", marks: 1, markCode: "M" }], finalAnswer: "10000 cm3" },
        },
        {
          id: "olbio-u5-breathing-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the diaphragm and intercostal muscles produce inspiration.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Mechanism of inspiration", statement: "Inspiration is driven by muscle contraction changing thoracic volume and pressure." }], steps: [{ reasoning: "External intercostal muscles contract, moving ribs up and out.", working: "\\text{ribs up/out}", marks: 1, markCode: "M" }, { reasoning: "The diaphragm contracts and flattens, moving downward.", working: "\\text{diaphragm flattens}", marks: 1, markCode: "M" }, { reasoning: "Thoracic volume increases and pressure decreases.", working: "V\\uparrow,P\\downarrow", marks: 1, markCode: "M" }, { reasoning: "Air flows into the lungs down the pressure gradient.", working: "\\text{air in}", marks: 1, markCode: "A" }], finalAnswer: "Muscle contraction increases thoracic volume, lowers pressure, and air is drawn into the lungs.", commonErrors: ["Saying muscles push air directly rather than changing pressure."] },
        },
        {
          id: "olbio-u5-breathing-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A student is asked to compare inspiration and expiration.",
          parts: [
            { label: "a", prompt: "State the position of the diaphragm and ribs during inspiration.", marks: 2 },
            { label: "b", prompt: "State the position of the diaphragm and ribs during expiration.", marks: 2 },
            { label: "c", prompt: "Explain the pressure change that moves air in and out.", marks: 3 },
            { label: "d", prompt: "Explain why breathing is described as a pressure-gradient process.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Ventilation mechanics", statement: "Inspiration and expiration are driven by muscle-controlled thoracic volume and pressure changes." }], steps: [
            { part: "a", reasoning: "Diaphragm contracts and flattens; ribs move up and out.", working: "\\text{contract/flatten}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "These movements increase thoracic volume.", working: "V\\uparrow", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Diaphragm relaxes and domes; ribs move down and in.", working: "\\text{relax/dome}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Thoracic volume decreases.", working: "V\\downarrow", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Inspiration lowers pressure so air flows in.", working: "P\\downarrow \\to \\text{air in}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Expiration raises pressure so air flows out.", working: "P\\uparrow \\to \\text{air out}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Muscle movement causes the pressure changes.", working: "\\text{volume} \\to \\text{pressure}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Air always moves from higher to lower pressure.", working: "\\text{high} \\to \\text{low}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Breathing changes thoracic pressure rather than pushing air directly.", working: "\\text{pressure gradient}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) diaphragm contracts/flattens, ribs up/out (b) diaphragm relaxes/domestically, ribs down/in (c) volume-pressure changes move air (d) air follows pressure gradient", commonErrors: ["Reversing inspiration and expiration muscle actions."] },
        },
      ],
    },
    {
      id: "olbio-u5-alveoli",
      title: "Alveoli and gas exchange",
      skill: "Describe alveolus adaptations for gas exchange and compare inspired and expired air.",
      lesson: {
        sections: [
          {
            heading: "Alveolus adaptations",
            body: "- **Thin wall** (one cell thick) → short diffusion distance.\n- **Huge surface area** (millions of alveoli).\n- **Rich blood supply** → maintains concentration gradient.\n- **Moist lining + surfactant** → gases dissolve; prevents collapse.\n- **Ventilation** → constantly renews air.",
          },
          {
            heading: "Gas exchange",
            body: "O₂ diffuses from alveolar air (high) into blood (low); CO₂ diffuses from blood (high) into alveolar air (low).",
          },
          {
            heading: "Inspired vs expired air",
            body: "| Gas | Inspired | Expired |\n|---|---|---|\n| O₂ | ~21% | ~16% |\n| CO₂ | ~0.04% | ~4% |\n| Nitrogen | ~79% | ~79% (unchanged) |\n| Water vapour | variable | saturated |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does expired air have less oxygen than inspired air?",
          solution: "Oxygen diffused from alveoli into blood during gas exchange; expired air contains residual alveolar air mixed with dead space air.",
        },
      },
      questions: [
        {
          id: "olbio-u5-alveoli-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas increases most in expired air compared to inspired air?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Expired air", statement: "CO₂ rises from ~0.04% to ~4%; O₂ falls." },
            ],
            steps: [
              { reasoning: "Recall the composition change.", working: "\\text{CO}_2 \\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide",
            commonErrors: ["Choosing nitrogen — it's roughly unchanged."],
          },
        },
        {
          id: "olbio-u5-alveoli-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two adaptations of alveoli for gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Alveolus adaptations", statement: "Thin wall, large surface area, rich blood supply, moist lining." },
            ],
            steps: [
              { reasoning: "Give two adaptations.", working: "\\text{thin wall, surface area}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thin (one-cell) walls for short diffusion distance and a huge surface area from millions of alveoli (also: rich blood supply, moist lining).",
            commonErrors: ["Saying 'alveoli are in the trachea' — they're at the end of the bronchioles."],
          },
        },
        {
          id: "olbio-u5-alveoli-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how gases are exchanged between the alveoli and the blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gas exchange", statement: "Diffusion down concentration gradients across thin alveolar wall." },
            ],
            steps: [
              { reasoning: "O₂ diffuses from air to blood.", working: "\\text{O}_2: \\text{air} \\to \\text{blood}", marks: 1, markCode: "M" },
              { reasoning: "CO₂ diffuses from blood to air.", working: "\\text{CO}_2: \\text{blood} \\to \\text{air}", marks: 1, markCode: "M" },
              { reasoning: "Gradient maintained by ventilation and blood flow.", working: "\\text{gradient maintained}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: passive diffusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O₂ diffuses from alveolar air into blood and CO₂ diffuses from blood into alveolar air, down concentration gradients across the thin alveolar wall; ventilation and blood flow maintain the gradients.",
            commonErrors: ["Saying 'active transport' — gas exchange is passive diffusion."],
          },
        },
        {
          id: "olbio-u5-alveoli-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare inspired and expired air and explain the differences.",
          parts: [
            { label: "a", prompt: "State the approximate percentages of O₂ and CO₂ in each.", marks: 3 },
            { label: "b", prompt: "Explain why O₂ is lower in expired air.", marks: 3 },
            { label: "c", prompt: "Explain why CO₂ is higher in expired air.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inspired vs expired", statement: "Inspired: ~21% O₂, ~0.04% CO₂. Expired: ~16% O₂, ~4% CO₂." },
            ],
            steps: [
              { part: "a", reasoning: "Inspired values.", working: "\\text{21\\% O}_2, 0.04\\% \\text{CO}_2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expired values.", working: "\\text{16\\% O}_2, 4\\% \\text{CO}_2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both sets.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "O₂ diffused into blood at alveoli.", working: "\\text{O}_2 \\to \\text{blood}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Taken up by haemoglobin/RBCs.", working: "\\text{haemoglobin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude: less O₂ in expired air.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CO₂ produced by respiration in tissues.", working: "\\text{CO}_2 \\text{ from tissues}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Diffuses from blood into alveoli.", working: "\\text{CO}_2 \\to \\text{alveoli}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: more CO₂ in expired air.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) inspired ~21% O₂/0.04% CO₂, expired ~16% O₂/4% CO₂ (b) O₂ absorbed by blood (c) CO₂ released by tissues",
            commonErrors: ["In (a) giving exact values — approximations are acceptable."],
          },
        },
        {
          id: "olbio-u5-alveoli-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which feature of alveoli most directly reduces diffusion distance?",
          response: { type: "mcq", choices: [ { id: "a", text: "They are filled with mucus" }, { id: "b", text: "They contain cilia" }, { id: "c", text: "Walls are one cell thick" }, { id: "d", text: "They are surrounded by cartilage" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Alveolus adaptations", statement: "Thin alveolar walls minimise diffusion distance for gases." }], steps: [{ reasoning: "Identify thin-wall advantage.", working: "\\text{one-cell wall}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Walls are one cell thick", commonErrors: ["Cilia and mucus are airway defences, not alveolar exchange features."] },
        },
        {
          id: "olbio-u5-alveoli-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Why are there millions of alveoli in each lung?",
          response: { type: "mcq", choices: [ { id: "a", text: "To store oxygen for emergencies" }, { id: "b", text: "To produce mucus" }, { id: "c", text: "To provide a very large surface area for gas exchange" }, { id: "d", text: "To filter blood cells" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Surface area", statement: "Millions of alveoli provide a large surface area for efficient gas exchange." }], steps: [{ reasoning: "Link number to surface area.", working: "\\text{large surface area}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** To provide a very large surface area for gas exchange", commonErrors: ["Alveoli do not store oxygen as a reserve."] },
        },
        {
          id: "olbio-u5-alveoli-q7", difficulty: "core", totalMarks: 1,
          stem: "During gas exchange at the alveolus, oxygen moves from:",
          response: { type: "mcq", choices: [ { id: "a", text: "Tissue fluid into air" }, { id: "b", text: "Blood into the bronchi" }, { id: "c", text: "Blood into alveolar air" }, { id: "d", text: "Alveolar air into the blood" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Direction of gas exchange", statement: "Oxygen diffuses from alveolar air into blood while carbon dioxide diffuses in the opposite direction." }], steps: [{ reasoning: "Apply concentration gradient.", working: "\\text{O}_2: \\text{air} \\to \\text{blood}", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Alveolar air into the blood", commonErrors: ["Oxygen direction is reversed in the wrong choices."] },
        },
        {
          id: "olbio-u5-alveoli-q8", difficulty: "core", totalMarks: 1,
          stem: "Which gas increases most in expired air compared with inspired air?",
          response: { type: "mcq", choices: [ { id: "a", text: "Carbon dioxide" }, { id: "b", text: "Argon" }, { id: "c", text: "Nitrogen" }, { id: "d", text: "Oxygen" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Expired air composition", statement: "Expired air has much more carbon dioxide and less oxygen than inspired air." }], steps: [{ reasoning: "Recall composition change.", working: "\\text{CO}_2 \\uparrow", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Carbon dioxide", commonErrors: ["Nitrogen percentage is roughly unchanged."] },
        },
        {
          id: "olbio-u5-alveoli-q9", difficulty: "challenge", totalMarks: 1,
          stem: "What is the role of surfactant in alveoli?",
          response: { type: "mcq", choices: [ { id: "a", text: "It carries oxygen in blood" }, { id: "b", text: "It reduces surface tension and helps prevent collapse" }, { id: "c", text: "It produces carbon dioxide" }, { id: "d", text: "It digests mucus" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Surfactant", statement: "Surfactant reduces surface tension, helping alveoli stay open and moist for gas exchange." }], steps: [{ reasoning: "Recall surfactant function.", working: "\\text{surfactant}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** It reduces surface tension and helps prevent collapse", commonErrors: ["Surfactant is not an oxygen carrier."] },
        },
        {
          id: "olbio-u5-alveoli-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Inspired air contains about 21% oxygen and expired air about 16%. What is the decrease in oxygen percentage?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "percentage points" }] },
          markscheme: { principles: [{ kind: "property", name: "Air composition change", statement: "Expired oxygen is about 5 percentage points lower than inspired oxygen." }], steps: [{ reasoning: "Subtract expired from inspired oxygen.", working: "21 - 16 = 5 \\text{ percentage points}", marks: 1, markCode: "M" }], finalAnswer: "5 percentage points" },
        },
        {
          id: "olbio-u5-alveoli-q11", difficulty: "core", totalMarks: 1,
          stem: "Inspired air contains about 0.04% carbon dioxide and expired air about 4%. Calculate the increase in carbon dioxide percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.96, unit: "percentage points" }] },
          markscheme: { principles: [{ kind: "property", name: "Air composition change", statement: "Expired carbon dioxide is about 3.96 percentage points higher than inspired air." }], steps: [{ reasoning: "Subtract inspired CO2 from expired CO2.", working: "4.00 - 0.04 = 3.96 \\text{ percentage points}", marks: 1, markCode: "M" }], finalAnswer: "3.96 percentage points" },
        },
        {
          id: "olbio-u5-alveoli-q12", difficulty: "foundation", totalMarks: 1,
          stem: "The wall of an alveolus is described as one cell thick. How many cells thick is the diffusion barrier?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1, unit: "cell" }] },
          markscheme: { principles: [{ kind: "property", name: "Diffusion distance", statement: "Thinner barriers reduce the distance gases must diffuse." }], steps: [{ reasoning: "Read the thickness from the description.", working: "1 \\text{ cell}", marks: 1, markCode: "B" }], finalAnswer: "1 cell" },
        },
        {
          id: "olbio-u5-alveoli-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Inspired air has 21% oxygen and expired air has 16%. What percentage decrease in oxygen content occurs from inspired to expired air?",
          response: { type: "numeric", parts: [{ label: "a", answer: 23.8, unit: "%" }] },
          markscheme: { principles: [{ kind: "property", name: "Percentage change", statement: "Percentage decrease = change / original value x 100." }], steps: [{ reasoning: "Calculate percentage decrease.", working: "(21 - 16) \\div 21 \\times 100 = 23.8\\%", marks: 1, markCode: "M" }], finalAnswer: "About 23.8% decrease" },
        },
        {
          id: "olbio-u5-alveoli-q14", difficulty: "core", totalMarks: 1,
          stem: "A model alveolus has surface area 70 m2. If disease reduces it by 20%, what surface area remains?",
          response: { type: "numeric", parts: [{ label: "a", answer: 56, unit: "m^2" }] },
          markscheme: { principles: [{ kind: "property", name: "Surface area change", statement: "A 20% reduction leaves 80% of the original surface area." }], steps: [{ reasoning: "Multiply original area by 0.80.", working: "70 \\times 0.80 = 56 \\text{ m}^2", marks: 1, markCode: "M" }], finalAnswer: "56 m2" },
        },
        {
          id: "olbio-u5-alveoli-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how oxygen and carbon dioxide are exchanged between alveolar air and blood.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Gas exchange by diffusion", statement: "Gas exchange occurs by passive diffusion maintained by ventilation and blood flow." }], steps: [{ reasoning: "Oxygen concentration is higher in alveolar air than in blood.", working: "\\text{O}_2 \\text{ gradient}", marks: 1, markCode: "M" }, { reasoning: "Oxygen diffuses from alveolar air into the blood.", working: "\\text{O}_2 \\to \\text{blood}", marks: 1, markCode: "M" }, { reasoning: "Carbon dioxide concentration is higher in blood than in alveolar air.", working: "\\text{CO}_2 \\text{ gradient}", marks: 1, markCode: "M" }, { reasoning: "Carbon dioxide diffuses from blood into alveolar air and is expired.", working: "\\text{CO}_2 \\to \\text{air}", marks: 1, markCode: "A" }], finalAnswer: "Gases diffuse down concentration gradients across thin alveolar walls: oxygen into blood and carbon dioxide into alveolar air.", commonErrors: ["Describing gas exchange as active transport."] },
        },
        {
          id: "olbio-u5-alveoli-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A student is asked to explain the adaptations of alveoli and the differences between inspired and expired air.",
          parts: [
            { label: "a", prompt: "List three adaptations of alveoli for gas exchange.", marks: 3 },
            { label: "b", prompt: "State the approximate oxygen and carbon dioxide percentages in inspired air.", marks: 2 },
            { label: "c", prompt: "State the approximate oxygen and carbon dioxide percentages in expired air.", marks: 2 },
            { label: "d", prompt: "Explain why oxygen is lower and carbon dioxide higher in expired air.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Alveoli and air composition", statement: "Alveolar adaptations support diffusion; gas exchange changes inspired air into expired air." }], steps: [
            { part: "a", reasoning: "Thin one-cell wall for short diffusion distance.", working: "\\text{thin wall}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Huge surface area from many alveoli.", working: "\\text{surface area}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Rich blood supply and moist lining with surfactant.", working: "\\text{blood supply/surfactant}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Inspired air: about 21% oxygen and 0.04% carbon dioxide.", working: "21\\%,0.04\\%", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Nitrogen is about 79% and water vapour variable.", working: "79\\% \\text{ N}_2", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Expired air: about 16% oxygen and 4% carbon dioxide.", working: "16\\%,4\\%", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Expired air is saturated with water vapour.", working: "\\text{saturated}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Oxygen diffuses into blood and carbon dioxide diffuses out of blood at alveoli.", working: "\\text{exchange}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Expired air therefore contains less oxygen and more carbon dioxide.", working: "\\text{composition change}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) thin wall, large surface area, blood supply/moisture (b) inspired 21% O2/0.04% CO2 (c) expired 16% O2/4% CO2 (d) gas exchange changes composition", commonErrors: ["Giving exact percentages instead of approximate values."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u5-gas-exchange-notes",
      title: "Gas exchange — revision notes",
      summary: "Ventilation mechanics, alveolus adaptations, and inspired vs expired air.",
      sections: [
        {
          heading: "Ventilation",
          body: "Inspiration: diaphragm + intercostals contract → volume ↑ → pressure ↓ → air in. Expiration: relax → volume ↓ → pressure ↑ → air out.",
        },
        {
          heading: "Alveoli and air",
          body: "Alveoli: thin wall, huge surface area, rich blood supply, moist/surfactant. Inspired ~21% O₂/0.04% CO₂; expired ~16% O₂/4% CO₂.",
        },
        {
          heading: "Exam technique",
          body: "- Link breathing to pressure change, not 'muscles pushing air'.\n- Gas exchange = diffusion down gradients; always mention gradient maintenance.\n- Breathing rate increases after exercise due to O₂ demand, CO₂ removal and oxygen debt.",
        },
      ],
    },
  ],
};
