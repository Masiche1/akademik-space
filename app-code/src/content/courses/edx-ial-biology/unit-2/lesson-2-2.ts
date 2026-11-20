import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edialbio-u2-lesson-2-2",
  code: "2-2",
  title: "Gas Exchange",
  goal: "I CAN explain the mechanism and adaptations for gas exchange in humans and other organisms.",
  standards: ["IB2 Transport", "Gas exchange"],
  vocabulary: [
    { term: "Alveolus", definition: "Tiny air sac in lungs where gas exchange occurs by diffusion." },
    { term: "Ventilation", definition: "Breathing movements that move air into and out of lungs." },
    { term: "Surfactant", definition: "Substance reducing surface tension in alveoli, preventing collapse." },
    { term: "Partial pressure", definition: "Pressure exerted by one gas in a mixture; drives diffusion gradients." },
  ],
  concepts: [
    {
      id: "edialbio-u2-human-gas",
      title: "Gas exchange in humans",
      skill: "Describe ventilation, gas exchange at alveoli, and transport of oxygen and carbon dioxide.",
      lesson: {
        sections: [
          {
            heading: "Ventilation",
            body: "Inspiration: diaphragm contracts and flattens, external intercostal muscles contract → thoracic volume increases → pressure drops → air rushes in. Expiration: muscles relax, diaphragm domes, volume decreases → air pushed out. Vital capacity ~4.5 dm³; tidal volume ~0.5 dm³ at rest.",
          },
          {
            heading: "Alveoli and diffusion",
            body: "Alveoli adaptations: thin (one-cell wall) for short diffusion distance; huge surface area (~70 m²); moist lining dissolves gases; rich capillary network maintains gradients; surfactant prevents collapse. O₂ diffuses into blood (high pO₂ alveoli → low pO₂ blood); CO₂ diffuses out.",
          },
          {
            heading: "Transport in blood",
            body: "Oxygen binds haemoglobin in red blood cells forming oxyhaemoglobin (cooperative, sigmoid curve). CO₂ transported mainly as hydrogen carbonate ions (HCO₃⁻) in plasma; small amounts dissolved or on haemoglobin. Bohr effect: high CO₂/low pH lowers O₂ affinity.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Hb + 4O₂ ⇌ HbO₂" },
          { name: "Key formula", statement: "CO₂ + H₂O ⇌ H⁺ + HCO₃⁻" },
        ],
        workedExample: {
          problem: "Why is the alveolus wall only one cell thick?",
          solution: "To minimise the diffusion distance for O₂ and CO₂, increasing the rate of gas exchange by Fick's law (rate ∝ surface area / thickness).",
        },
      },
      questions: [
        {
          id: "edialbio-gas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas diffuses from blood into alveoli?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Water vapour only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gas exchange", statement: "O₂ in, CO₂ out down partial pressure gradients." }],
            steps: [{ reasoning: "CO₂ produced by respiration diffuses into alveoli.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Carbon dioxide",
          },
        },
        {
          id: "edialbio-gas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of the diaphragm during inspiration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ventilation", statement: "Diaphragm contracts → volume up → pressure down → air in." }],
            steps: [
              { reasoning: "External intercostal muscles contract, raising ribs.", marks: 1, markCode: "M" },
              { reasoning: "Diaphragm contracts and flattens → thoracic volume increases.", marks: 1, markCode: "M" },
              { reasoning: "Pressure drops below atmospheric → air flows in.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diaphragm contracts → volume ↑ → pressure ↓ → air in",
            commonErrors: ["Saying diaphragm relaxes during inspiration."],
          },
        },
        {
          id: "edialbio-gas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how haemoglobin's structure is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Haemoglobin", statement: "Four haem groups bind O₂ cooperatively." }],
            steps: [
              { reasoning: "Contains four haem groups, each binding one O₂ molecule.", marks: 1, markCode: "M" },
              { reasoning: "Cooperative binding — binding one O₂ makes further binding easier (sigmoid curve).", marks: 1, markCode: "M" },
              { reasoning: "Loads O₂ in lungs (high pO₂), unloads in tissues (low pO₂).", marks: 1, markCode: "A" },
              { reasoning: "Bohr effect shifts curve right in metabolising tissues → efficient unloading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 haem groups; cooperative binding; Bohr effect",
            commonErrors: ["Saying haemoglobin dissolves O₂ physically."],
          },
        },
        {
          id: "edialbio-gas-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the adaptations of the alveoli for efficient gas exchange.",
          parts: [
            { label: "a", prompt: "Surface area and diffusion distance.", marks: 4 },
            { label: "b", prompt: "Maintenance of diffusion gradients.", marks: 3 },
            { label: "c", prompt: "Other adaptations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alveoli", statement: "Fick's law: rate ∝ area/thickness." }],
            steps: [
              { part: "a", reasoning: "Huge total surface area (~70 m²) from ~300 million alveoli.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Wall one cell thick → short diffusion path for gases.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Linked to Fick's law.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Moist lining dissolves gases for diffusion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dense capillary network removes O₂ and delivers CO₂ → maintains steep gradients.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ventilation continually refreshes alveolar air.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Partial pressure differences drive diffusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Surfactant reduces surface tension → prevents collapse.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Elastic fibres allow recoil during expiration.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion: maximised rate of gas exchange.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Large SA, thin walls, capillaries, surfactant",
            commonErrors: ["Missing surfactant or capillary role."],
          },
        },
      ],
    },
    {
      id: "edialbio-u2-other-gas",
      title: "Gas exchange in other organisms",
      skill: "Compare gas exchange surfaces across fish, insects and plants.",
      lesson: {
        sections: [
          {
            heading: "Fish gills",
            body: "Countercurrent flow: water and blood flow in opposite directions → maintains steep partial pressure gradient along whole gill → very efficient (~80% O₂ extracted). Gill filaments and lamellae provide large surface area.",
          },
          {
            heading: "Insect tracheae",
            body: "Air enters via spiracles → tracheae → tracheoles directly to cells. No blood transport needed; gas exchange by diffusion/tracheal fluid. Thin tracheole walls, large surface area; active ventilation in larger insects.",
          },
          {
            heading: "Plants",
            body: "Gas exchange through stomata in leaves; spongy mesophyll with air spaces; thin-walled cells; photosynthesis consumes CO₂ and releases O₂ while respiration does the reverse — net exchange depends on light.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Countercurrent exchange maximises gradient" },
        ],
        workedExample: {
          problem: "Why is countercurrent flow more efficient than cocurrent flow in gills?",
          solution: "Blood meets fresh oxygenated water throughout its path, so the partial pressure gradient is maintained along the whole exchange surface instead of equilibrating early.",
        },
      },
      questions: [
        {
          id: "edialbio-fish-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the advantage of countercurrent flow in fish gills?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires no water flow" },
              { id: "b", text: "It maintains a steep diffusion gradient" },
              { id: "c", text: "It reduces gill surface area" },
              { id: "d", text: "It works without blood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Countercurrent", statement: "Opposite flows maintain gradient." }],
            steps: [{ reasoning: "Oxygenated water meets blood throughout → efficient extraction.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Maintains steep gradient",
          },
        },
        {
          id: "edialbio-fish-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how insects transport gases to their cells.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tracheal system", statement: "Direct air delivery to cells." }],
            steps: [
              { reasoning: "Air enters through spiracles and travels along tracheae.", marks: 1, markCode: "M" },
              { reasoning: "Tracheoles branch to individual cells — no blood transport.", marks: 1, markCode: "M" },
              { reasoning: "Gas exchange by diffusion across thin tracheole walls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spiracles → tracheae → tracheoles → diffusion to cells",
            commonErrors: ["Saying insects use lungs or gills."],
          },
        },
        {
          id: "edialbio-fish-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why leaves have a large internal air space system.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Leaf air spaces", statement: "Maximise gas diffusion surface." }],
            steps: [
              { reasoning: "Spongy mesophyll air spaces provide large surface area for gas exchange.", marks: 1, markCode: "M" },
              { reasoning: "Thin-walled mesophyll cells shorten diffusion distance to chloroplasts/stomata.", marks: 1, markCode: "M" },
              { reasoning: "CO₂ diffuses from air spaces into cells for photosynthesis; O₂ diffuses out.", marks: 1, markCode: "A" },
              { reasoning: "Conclude efficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Air spaces maximise surface area for diffusion",
            commonErrors: ["Confusing with xylem transport."],
          },
        },
        {
          id: "edialbio-fish-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare the gas exchange surfaces of fish gills and mammalian lungs.",
          parts: [
            { label: "a", prompt: "Describe the structure of each.", marks: 4 },
            { label: "b", prompt: "Compare efficiency of gas exchange.", marks: 3 },
            { label: "c", prompt: "Give one similarity in principle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gills vs lungs", statement: "Both maximise SA, minimise distance." }],
            steps: [
              { part: "a", reasoning: "Gills: filaments with lamellae; countercurrent blood/water flow.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lungs: alveoli with capillaries; ventilation renews air.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both have thin exchange surfaces.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State both structures.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gills more efficient (~80% O₂ extracted) due to countercurrent gradient.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lungs extract ~25% O₂ but support terrestrial air breathing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Conclude comparison.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both rely on diffusion across thin, moist surfaces.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both maintain concentration gradients via flow.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both have large surface areas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both thin/moist/large SA; gills use countercurrent",
            commonErrors: ["Saying lungs are more efficient than gills."],
          },
        },
      ],
    },
  ],
};
