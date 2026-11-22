import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cieb-u5-lesson-5-2",
  code: "5-2",
  title: "Gas Exchange",
  goal: "I CAN describe the breathing system, the structure of alveoli, and the differences between inspired and expired air.",
  standards: ["0653 5.2"],
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
      id: "cieb-u5-breathing",
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
          id: "cieb-u5-breathing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During inspiration, the diaphragm:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays completely still" },
              { id: "b", text: "Moves upward only" },
              { id: "c", text: "Relaxes and domes" },
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
            finalAnswer: "**(d)** Contracts and flattens",
            commonErrors: ["Choosing 'relaxes' — that's expiration."],
          },
        },
        {
          id: "cieb-u5-breathing-q2",
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
          id: "cieb-u5-breathing-q3",
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
          id: "cieb-u5-breathing-q4",
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
          id: "cieb-u5-breathing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During a normal (passive) expiration, the diaphragm:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays contracted" },
              { id: "b", text: "Relaxes and domes upward" },
              { id: "c", text: "Contracts and flattens" },
              { id: "d", text: "Moves downward" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Expiration", statement: "Diaphragm relaxes and domes; volume decreases, pressure increases, air flows out." },
            ],
            steps: [
              { reasoning: "Recall the movement.", working: "\\text{relax, dome}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Relaxes and domes upward",
            commonErrors: ["Choosing 'contracts' — that's inspiration."],
          },
        },
        {
          id: "cieb-u5-breathing-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person has a tidal volume of 500 cm³ and breathes 15 times per minute. Calculate the ventilation rate (volume of air moved per minute).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7500, unit: "cm³/min" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ventilation rate", statement: "Ventilation rate = tidal volume × breathing rate." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "500 \\times 15", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 7500 \\text{ cm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7500 cm³/min",
            commonErrors: ["Using only one breath volume or forgetting to multiply by rate."],
          },
        },
        {
          id: "cieb-u5-breathing-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what happens to the ribs and diaphragm during expiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Expiration mechanics", statement: "Ribs move down/in; diaphragm relaxes and domes; volume decreases." },
            ],
            steps: [
              { reasoning: "State rib movement.", working: "\\text{ribs down/in}", marks: 1, markCode: "M" },
              { reasoning: "State diaphragm movement.", working: "\\text{diaphragm relaxes and domes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The ribs move down and in while the diaphragm relaxes and domes upward, decreasing thoracic volume.",
            commonErrors: ["Writing 'domestically' — the correct word is 'domes upward'."],
          },
        },
        {
          id: "cieb-u5-breathing-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Air moves into the lungs during inspiration because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pressure inside the lungs increases" },
              { id: "b", text: "Thoracic volume increases so the pressure decreases" },
              { id: "c", text: "Thoracic volume decreases" },
              { id: "d", text: "The diaphragm relaxes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pressure principle", statement: "Air moves from high to low pressure; increasing volume lowers pressure, drawing air in." },
            ],
            steps: [
              { reasoning: "Recall the gradient.", working: "\\text{volume} \\uparrow \\to \\text{pressure} \\downarrow \\to \\text{air in}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Thoracic volume increases so the pressure decreases",
            commonErrors: ["Choosing 'pressure increases' — that would push air out."],
          },
        },
        {
          id: "cieb-u5-breathing-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person has a tidal volume of 600 cm³ and a breathing rate of 12 breaths per minute. Calculate the ventilation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7200, unit: "cm³/min" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ventilation rate", statement: "Ventilation rate = tidal volume × breathing rate." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "600 \\times 12", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 7200 \\text{ cm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7200 cm³/min",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cieb-u5-breathing-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the sequence of events during inspiration, from muscle contraction to air entering the lungs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inspiration sequence", statement: "Intercostals + diaphragm contract → volume increases → pressure decreases → air flows in." },
            ],
            steps: [
              { reasoning: "External intercostal muscles contract and diaphragm contracts/flattens.", working: "\\text{muscles contract}", marks: 1, markCode: "M" },
              { reasoning: "Thoracic volume increases.", working: "\\text{volume} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Pressure inside decreases below atmospheric.", working: "\\text{pressure} \\downarrow", marks: 1, markCode: "M" },
              { reasoning: "Air flows in down the pressure gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The external intercostal muscles contract (ribs up/out) and the diaphragm contracts and flattens, increasing thoracic volume; pressure falls below atmospheric pressure so air is drawn into the lungs.",
            commonErrors: ["Saying muscles 'push air in' — air moves by pressure gradient, not muscular pushing."],
          },
        },
        {
          id: "cieb-u5-breathing-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which muscles contract to help raise the ribs during inspiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Smooth muscle of the bronchi" },
              { id: "b", text: "Heart muscle" },
              { id: "c", text: "External intercostal muscles" },
              { id: "d", text: "Abdominal muscles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Intercostal muscles", statement: "External intercostals contract to raise ribs during inspiration." },
            ],
            steps: [
              { reasoning: "Recall the muscles.", working: "\\text{external intercostals}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** External intercostal muscles",
            commonErrors: ["Choosing abdominal muscles — they assist forced expiration, not inspiration."],
          },
        },
        {
          id: "cieb-u5-breathing-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why inspiration is an active process but normal expiration at rest is passive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Active vs passive breathing", statement: "Inspiration needs muscle contraction; expiration at rest uses elastic recoil." },
            ],
            steps: [
              { reasoning: "Inspiration requires contraction of intercostal muscles and diaphragm.", working: "\\text{muscle contraction}", marks: 1, markCode: "M" },
              { reasoning: "Contraction needs ATP/energy → active.", marks: 1, markCode: "M" },
              { reasoning: "At rest, expiration occurs when muscles relax and elastic tissues recoil.", working: "\\text{elastic recoil}", marks: 1, markCode: "M" },
              { reasoning: "No muscle contraction needed → passive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inspiration is active because it requires the intercostal muscles and diaphragm to contract, using energy; normal expiration at rest is passive because the muscles simply relax and the elastic recoil of the thoracic tissues pushes air out.",
            commonErrors: ["Saying expiration always needs muscle contraction — at rest it is passive."],
          },
        },
        {
          id: "cieb-u5-breathing-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During inspiration, the pressure inside the thorax:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases" },
              { id: "b", text: "Stays exactly the same" },
              { id: "c", text: "Becomes zero" },
              { id: "d", text: "Decreases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inspiration pressure", statement: "Volume increase → pressure decrease during inspiration." },
            ],
            steps: [
              { reasoning: "Recall the change.", working: "\\text{pressure} \\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Decreases",
            commonErrors: ["Choosing 'increases' — that describes expiration."],
          },
        },
        {
          id: "cieb-u5-breathing-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A patient breathes 20 times per minute with a tidal volume of 400 cm³. Calculate the ventilation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8000, unit: "cm³/min" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ventilation rate", statement: "Ventilation rate = tidal volume × breathing rate." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "400 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 8000 \\text{ cm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8000 cm³/min",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cieb-u5-breathing-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates breathing by counting breaths per minute at rest and immediately after exercise.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict how breathing rate will change after exercise.", marks: 1 },
            { label: "c", prompt: "Explain, using gas exchange, why breathing rate changes after exercise.", marks: 4 },
            { label: "d", prompt: "Suggest one improvement to the method for reliability.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exercise and ventilation", statement: "Exercise increases O₂ demand and CO₂ production → ventilation rate rises." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: rest vs exercise. Dependent: breathing rate.", working: "\\text{exercise vs rate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rate increases.", working: "\\text{increases}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscles need more O₂ for aerobic respiration.", working: "\\text{O}_2 \\text{ demand}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More CO₂ produced must be removed.", working: "\\text{CO}_2 \\text{ removal}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lactic acid/oxygen debt needs oxygen for clearance.", working: "\\text{oxygen debt}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Repeat several times and average, or standardise exercise.", working: "\\text{repeat/average}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rest vs exercise, breathing rate (b) increases (c) more O₂ needed, CO₂ removal, oxygen debt repaid (d) repeat and average",
            commonErrors: ["In (b) predicting no change — exercise clearly raises ventilation."],
          },
        },
        {
          id: "cieb-u5-breathing-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "After exercise, a person's breathing rate rises to 30 breaths per minute and tidal volume increases to 600 cm³. Calculate the ventilation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18000, unit: "cm³/min" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ventilation rate", statement: "Ventilation rate = tidal volume × breathing rate." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "600 \\times 30", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 18000 \\text{ cm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18000 cm³/min",
            commonErrors: ["Using the resting values instead of the post-exercise values given."],
          },
        },
      ],
    },
    {
      id: "cieb-u5-alveoli",
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
          id: "cieb-u5-alveoli-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas increases most in expired air compared to inspired air?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Expired air", statement: "CO₂ rises from ~0.04% to ~4%; O₂ falls." },
            ],
            steps: [
              { reasoning: "Recall the composition change.", working: "\\text{CO}_2 \\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide",
            commonErrors: ["Choosing nitrogen — it's roughly unchanged."],
          },
        },
        {
          id: "cieb-u5-alveoli-q2",
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
          id: "cieb-u5-alveoli-q3",
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
          id: "cieb-u5-alveoli-q4",
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
          id: "cieb-u5-alveoli-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature of the alveoli provides a very large surface area for gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thick walls" },
              { id: "b", text: "A small number of large sacs" },
              { id: "c", text: "Millions of tiny air sacs" },
              { id: "d", text: "Rigid structure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Alveolar surface area", statement: "Millions of alveoli give a huge total surface area." },
            ],
            steps: [
              { reasoning: "Recall the adaptation.", working: "\\text{many small sacs} \\to \\text{large area}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Millions of tiny air sacs",
            commonErrors: ["Choosing thick walls — walls are one cell thick."],
          },
        },
        {
          id: "cieb-u5-alveoli-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Inspired air contains about 21% O₂ and expired air about 16% O₂. Calculate the percentage-point decrease in oxygen.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inspired vs expired O₂", statement: "O₂ falls from ~21% to ~16%, a decrease of ~5 percentage points." },
            ],
            steps: [
              { reasoning: "Subtract expired from inspired.", working: "21 - 16", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 percentage points",
            commonErrors: ["Dividing instead of subtracting — this is a difference, not a ratio."],
          },
        },
        {
          id: "cieb-u5-alveoli-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the role of surfactant in the alveoli.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Surfactant", statement: "Surfactant reduces surface tension and prevents alveolar collapse." },
            ],
            steps: [
              { reasoning: "State the function.", working: "\\text{reduces surface tension}", marks: 1, markCode: "M" },
              { reasoning: "Complete: prevents collapse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Surfactant reduces the surface tension of the alveolar fluid, preventing the alveoli from collapsing and helping gases dissolve.",
            commonErrors: ["Saying surfactant 'digests mucus' — it is a surface-tension reducer."],
          },
        },
        {
          id: "cieb-u5-alveoli-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During gas exchange in the alveoli, oxygen diffuses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From alveolar air into the blood" },
              { id: "b", text: "From expired air into the nose" },
              { id: "c", text: "From blood into the alveolar air" },
              { id: "d", text: "From blood directly into tissues" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "O₂ diffusion", statement: "O₂ diffuses from alveolar air (high) into blood (low)." },
            ],
            steps: [
              { reasoning: "Recall the direction.", working: "\\text{air} \\to \\text{blood}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** From alveolar air into the blood",
            commonErrors: ["Reversing the direction — that would describe CO₂."],
          },
        },
        {
          id: "cieb-u5-alveoli-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Inspired air contains about 0.04% CO₂ and expired air about 4% CO₂. Calculate how many times greater the CO₂ percentage is in expired air.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Expired CO₂", statement: "CO₂ rises from ~0.04% to ~4%, about 100 times greater." },
            ],
            steps: [
              { reasoning: "Divide expired by inspired.", working: "\\frac{4}{0.04}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 times greater",
            commonErrors: ["Subtracting the percentages instead of finding the ratio."],
          },
        },
        {
          id: "cieb-u5-alveoli-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of the alveoli is adapted for efficient gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Alveolar adaptations", statement: "Thin wall, large surface area, rich blood supply, moist lining, ventilation maintain diffusion gradients." },
            ],
            steps: [
              { reasoning: "Thin (one-cell) walls give a short diffusion distance.", working: "\\text{thin wall}", marks: 1, markCode: "M" },
              { reasoning: "Millions of alveoli give a large surface area.", working: "\\text{large surface}", marks: 1, markCode: "M" },
              { reasoning: "Rich blood supply and ventilation maintain concentration gradients.", working: "\\text{gradient maintained}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: fast diffusion of O₂ and CO₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alveoli have thin one-cell walls (short diffusion distance), a huge surface area from millions of sacs, a rich blood supply and constant ventilation, all of which maintain steep concentration gradients so gases diffuse rapidly.",
            commonErrors: ["Listing adaptations without linking them to diffusion rate."],
          },
        },
        {
          id: "cieb-u5-alveoli-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The percentage of nitrogen is about the same in inspired and expired air because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen dissolves completely in blood" },
              { id: "b", text: "Nitrogen is produced in the lungs" },
              { id: "c", text: "Nitrogen is not used in respiration or exchanged" },
              { id: "d", text: "It is a measurement error" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen in air", statement: "N₂ (~79%) is inert in gas exchange and passes through unchanged." },
            ],
            steps: [
              { reasoning: "Recall the reason.", working: "\\text{N}_2 \\text{ not exchanged}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Nitrogen is not used in respiration or exchanged",
            commonErrors: ["Thinking nitrogen is absorbed by blood — it is essentially inert here."],
          },
        },
        {
          id: "cieb-u5-alveoli-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why expired air is saturated with water vapour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water vapour in air", statement: "Air is warmed and humidified as it passes through the airways." },
            ],
            steps: [
              { reasoning: "Air is warmed to body temperature in the airways.", working: "\\text{air warmed}", marks: 1, markCode: "M" },
              { reasoning: "Moist lining of airways evaporates water into the air.", working: "\\text{moist lining}", marks: 1, markCode: "M" },
              { reasoning: "Expired air leaves saturated with water vapour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "As air passes through the warm, moist airways it is heated to body temperature and picks up water vapour from the moist lining, so expired air is saturated with water vapour.",
            commonErrors: ["Saying water vapour is 'exhaled from the blood' — it evaporates from the airway lining."],
          },
        },
        {
          id: "cieb-u5-alveoli-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is taken up from the alveoli into the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Water vapour only" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gas uptake", statement: "O₂ diffuses from alveoli into blood; CO₂ diffuses out." },
            ],
            steps: [
              { reasoning: "Recall which gas enters blood.", working: "\\text{O}_2 \\to \\text{blood}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Choosing carbon dioxide — that moves from blood into alveoli."],
          },
        },
        {
          id: "cieb-u5-alveoli-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "The anatomical dead space is about 150 cm³. If the tidal volume is 500 cm³, what percentage of each breath reaches the alveoli?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dead space", statement: "Air reaching alveoli = tidal volume − dead space." },
            ],
            steps: [
              { reasoning: "Subtract dead space then find percentage.", working: "\\frac{500 - 150}{500} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70%",
            commonErrors: ["Forgetting to convert to a percentage or subtracting in the wrong order."],
          },
        },
        {
          id: "cieb-u5-alveoli-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates inspired and expired air using limewater and by measuring gas percentages.",
          parts: [
            { label: "a", prompt: "Describe how limewater is used to test for carbon dioxide.", marks: 3 },
            { label: "b", prompt: "State the approximate percentages of O₂ and CO₂ in inspired and expired air.", marks: 3 },
            { label: "c", prompt: "Explain why the results differ between inspired and expired air.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Limewater test", statement: "CO₂ turns limewater milky; more CO₂ → faster/more milkiness." },
              { kind: "property", name: "Air composition", statement: "Inspired ~21% O₂/0.04% CO₂; expired ~16% O₂/4% CO₂." },
            ],
            steps: [
              { part: "a", reasoning: "Bubble expired air through limewater.", working: "\\text{bubble air}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "CO₂ reacts → limewater turns milky.", working: "\\text{milky}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More CO₂ → stronger/faster result.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Inspired values.", working: "21\\% \\text{O}_2, 0.04\\% \\text{CO}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expired values.", working: "16\\% \\text{O}_2, 4\\% \\text{CO}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both sets.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "O₂ absorbed into blood; CO₂ released from tissues.", working: "\\text{gas exchange}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Diffusion across alveolar wall causes the changes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bubble air through limewater — CO₂ turns it milky (b) inspired ~21% O₂/0.04% CO₂, expired ~16% O₂/4% CO₂ (c) O₂ absorbed, CO₂ released by gas exchange",
            commonErrors: ["In (a) saying limewater 'absorbs oxygen' — it detects CO₂."],
          },
        },
        {
          id: "cieb-u5-alveoli-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expired air contains about 16% O₂. A person exhales 400 cm³ of air per breath. Calculate the volume of oxygen in one expired breath.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 64, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage composition", statement: "Volume of gas = percentage × total volume." },
            ],
            steps: [
              { reasoning: "Apply the percentage.", working: "0.16 \\times 400", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 64 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "64 cm³",
            commonErrors: ["Using 21% (inspired value) instead of 16% (expired value)."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u5-gas-exchange-notes",
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
