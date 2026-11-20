import type { Lesson } from "../../../types.ts";

export const lesson193: Lesson = {
  id: "olchem-u9-lesson-9-3",
  code: "9-3",
  title: "Air Pollution: Greenhouse Effect, Acid Rain and Ozone",
  goal: "I CAN explain the causes and effects of major air pollutants and their solutions.",
  standards: ["5070 9.3"],
  vocabulary: [
    { term: "Greenhouse effect", definition: "Atmosphere traps infrared radiation → warming." },
    { term: "Greenhouse gases", definition: "CO₂, methane, water vapour — absorb IR." },
    { term: "Global warming", definition: "Long-term temperature rise from enhanced greenhouse effect." },
    { term: "Acid rain", definition: "Rain with pH <5.5 from SO₂ and NOx dissolving." },
    { term: "Sulphur dioxide (SO₂)", definition: "From burning sulphur-containing fuels — causes acid rain." },
    { term: "Nitrogen oxides (NOx)", definition: "From high-temperature combustion — acid rain + smog." },
    { term: "Ozone depletion", definition: "CFCs destroy stratospheric ozone layer." },
    { term: "Smog", definition: "Fog + smoke + pollutants — respiratory problems." },
  ],
  concepts: [
    {
      id: "olchem-u9-greenhouse-acid",
      title: "Greenhouse effect and acid rain",
      skill: "Explain greenhouse mechanism and acid rain formation/effects.",
      lesson: {
        sections: [
          {
            heading: "Greenhouse effect",
            body: "Sunlight passes through atmosphere → warms Earth → Earth emits IR → greenhouse gases (CO₂, CH₄, H₂O) absorb IR → re-emit → warms atmosphere. Natural effect; enhanced by fossil fuels → global warming.",
          },
          {
            heading: "Acid rain formation",
            body: "SO₂ + NOx from burning fossil fuels → dissolve in water:\nSO₂ + H₂O → H₂SO₃; further oxidation → H₂SO₄\n2NO₂ + H₂O → HNO₃ + HNO₂\n\nEffects: pH<5.5, corrodes buildings/metal, acidifies lakes, damages forests/soil.",
          },
          {
            heading: "Solutions",
            body: "- Scrubbers remove SO₂ from flue gases\n- Catalytic converters reduce NOx\n- Low-sulphur fuels\n- Renewable energy reduces CO₂",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how burning coal causes acid rain.",
          solution: "Coal contains sulphur → SO₂ released → dissolves in atmospheric water → forms sulphuric acid → falls as acid rain.",
        },
      },
      questions: [
        {
          id: "olchem-u9-greenhouse-acid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is NOT a major greenhouse gas?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CO₂" }, { id: "b", text: "Methane" }, { id: "c", text: "Oxygen" }, { id: "d", text: "Water vapour" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Greenhouse gases", statement: "CO₂, CH₄, H₂O — not O₂." }],
            steps: [{ reasoning: "Recall.", working: "\\text{O}_2 \\text{ not GHG}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Oxygen",
            commonErrors: ["O₂ is essential but not a GHG."],
          },
        },
        {
          id: "olchem-u9-greenhouse-acid-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What pH defines acid rain?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Acid rain", statement: "pH < 5.5." }],
            steps: [
              { reasoning: "State threshold.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acid rain has pH below 5.5 (normal rain ~5.6).",
            commonErrors: ["Saying pH<7 — that's any acid, not 'acid rain' specifically."],
          },
        },
        {
          id: "olchem-u9-greenhouse-acid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the formation of acid rain from SO₂.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Acid rain", statement: "SO₂→H₂SO₃→H₂SO₄→rain." }],
            steps: [
              { reasoning: "SO₂ from burning sulphur fuels.", marks: 1, markCode: "M" },
              { reasoning: "Dissolves in water → H₂SO₃.", marks: 1, markCode: "M" },
              { reasoning: "Oxidises → H₂SO₄.", marks: 1, markCode: "M" },
              { reasoning: "Falls as acid rain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂ released from burning fossil fuels dissolves in atmospheric water forming sulphurous acid, which oxidises to sulphuric acid — falling as acid rain with pH < 5.5.",
            commonErrors: ["Skipping the oxidation step to H₂SO₄."],
          },
        },
        {
          id: "olchem-u9-greenhouse-acid-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the enhanced greenhouse effect and acid rain.",
          parts: [
            { label: "a", prompt: "Explain greenhouse mechanism.", marks: 4 },
            { label: "b", prompt: "Explain acid rain formation.", marks: 3 },
            { label: "c", prompt: "State one effect of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pollution", statement: "GHG traps IR; SO₂/NOx→acid rain." }],
            steps: [
              { part: "a", reasoning: "Sunlight warms Earth.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Earth emits IR.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "GHG absorbs/re-emits IR.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More GHG→more warming.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "SO₂/NOx released.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dissolve→acids.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fall as acid rain.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Global warming effect.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Corrosion/ecosystem damage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) IR trapped by GHG (b) SO₂/NOx→acids→rain (c) warming/corrosion",
            commonErrors: ["In (a) saying 'CO₂ reflects sunlight' — it absorbs IR."],
          },
        },
      ],
    },
    {
      id: "olchem-u9-ozone-smog",
      title: "Ozone depletion and smog",
      skill: "Explain ozone layer destruction and smog formation/solutions.",
      lesson: {
        sections: [
          {
            heading: "Ozone layer",
            body: "Stratospheric ozone (O₃) absorbs harmful UV radiation. CFCs (from aerosols, refrigerants) rise to stratosphere → UV breaks them → chlorine radicals destroy O₃.\n\nOzone hole over Antarctica → increased UV → skin cancer, crop damage.",
          },
          {
            heading: "Smog",
            body: "Fog + smoke + pollutants (NOx, SO₂, particulates) → respiratory problems. Photochemical smog: NOx + VOCs + sunlight → ozone at ground level (harmful).",
          },
          {
            heading: "Solutions",
            body: "- CFC phase-out (Montreal Protocol)\n- Catalytic converters reduce NOx/CO\n- Low-sulphur fuels\n- Congestion charging, public transport",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do CFCs destroy ozone?",
          solution: "UV breaks CFC → releases Cl radical → Cl + O₃ → ClO + O₂ → ClO + O → Cl + O₂; Cl regenerated → chain reaction destroying many O₃.",
        },
      },
      questions: [
        {
          id: "olchem-u9-ozone-smog-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What protects Earth from harmful UV radiation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CO₂ layer" }, { id: "b", text: "Ozone layer" }, { id: "c", text: "Clouds" }, { id: "d", text: "Nitrogen" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Ozone", statement: "Absorbs UV." }],
            steps: [{ reasoning: "Recall.", working: "\\text{O}_3", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Ozone layer",
            commonErrors: ["CO₂ traps heat not UV."],
          },
        },
        {
          id: "olchem-u9-ozone-smog-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes ozone depletion?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ozone depletion", statement: "CFCs release Cl radicals." }],
            steps: [
              { reasoning: "CFCs break down in UV.", marks: 1, markCode: "M" },
              { reasoning: "Cl destroys O₃ catalytically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CFCs release chlorine radicals in the stratosphere that catalytically destroy ozone molecules — one Cl atom can destroy thousands of O₃ molecules.",
            commonErrors: ["Saying 'CFCs react with ozone directly' — it's catalytic chain."],
          },
        },
        {
          id: "olchem-u9-ozone-smog-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how CFCs cause ozone depletion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ozone depletion", statement: "CFC→Cl→chain destruction of O₃." }],
            steps: [
              { reasoning: "UV breaks CFC → Cl radical.", marks: 1, markCode: "M" },
              { reasoning: "Cl + O₃ → ClO + O₂.", marks: 1, markCode: "M" },
              { reasoning: "Cl regenerated → chain continues.", marks: 1, markCode: "M" },
              { reasoning: "Ozone depleted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "UV radiation breaks down CFCs releasing chlorine radicals; each Cl atom reacts with O₃ forming ClO, then ClO reacts with O atoms regenerating Cl — a catalytic chain destroying many ozone molecules.",
            commonErrors: ["Not mentioning catalytic regeneration."],
          },
        },
        {
          id: "olchem-u9-ozone-smog-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe air pollution problems and solutions.",
          parts: [
            { label: "a", prompt: "Describe ozone depletion.", marks: 3 },
            { label: "b", prompt: "Describe smog formation.", marks: 3 },
            { label: "c", prompt: "State two solutions for air pollution.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Air pollution", statement: "CFCs→ozone hole; NOx/VOC→smog." }],
            steps: [
              { part: "a", reasoning: "CFCs→Cl radicals.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Destroy O₃ layer.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More UV reaches Earth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "NOx+VOCs+sunlight.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Form ground-level ozone/smog.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Respiratory problems.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Catalytic converters.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "CFC phase-out/low-sulphur.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CFC→Cl→O₃ destroyed (b) NOx+VOCs→smog (c) converters/CFC phase-out",
            commonErrors: ["In (c) solutions unrelated to pollution."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u9-pollution-notes",
      title: "Air pollution — revision notes",
      summary: "Greenhouse effect, acid rain, ozone depletion, smog, solutions.",
      sections: [
        {
          heading: "Key facts",
          body: "GHG (CO₂,CH₄,H₂O) trap IR→warming. SO₂+NOx→acids→pH<5.5 acid rain. CFCs→Cl→destroy O₃. Smog=NOx+VOCs+sunlight. Solutions: scrubbers, converters, renewables.",
        },
        {
          heading: "Exam technique",
          body: "- Acid rain pH<5.5.\n- Ozone: stratospheric good, ground-level bad.\n- Match pollutant to effect.",
        },
      ],
    },
  ],
};
