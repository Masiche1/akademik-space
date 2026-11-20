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
              { id: "a", text: "Contracts and flattens" },
              { id: "b", text: "Relaxes and domes" },
              { id: "c", text: "Stays completely still" },
              { id: "d", text: "Moves upward only" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Hydrogen" },
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
