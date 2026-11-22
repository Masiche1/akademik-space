import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edialbio-u2-lesson-2-3",
  code: "2-3",
  title: "Transport in Plants and Animals",
  goal: "I CAN describe transport systems in plants and animals and compare their structures and functions.",
  standards: ["IB2 Transport", "Plant and animal transport"],
  vocabulary: [
    { term: "Xylem / phloem", definition: "Vascular tissue carrying water/minerals / organic nutrients." },
    { term: "Transpiration", definition: "Evaporation of water from leaves pulling water up xylem." },
    { term: "Cohesion-tension", definition: "Water molecules' cohesion + adhesion enabling capillary rise." },
    { term: "Double circulation", definition: "Pulmonary and systemic circuits in mammals." },
  ],
  concepts: [
    {
      id: "edialbio-u2-plants",
      title: "Transport in plants",
      skill: "Explain transpiration pull, xylem and phloem structure, and translocation.",
      lesson: {
        sections: [
          {
            heading: "Xylem and water transport",
            body: "Xylem vessels are dead, lignin-reinforced tubes forming continuous columns. Water absorbed by root hairs travels up by transpiration pull: evaporation from stomata → tension → cohesion between water molecules (H-bonds) and adhesion to walls → capillary column rises. Factors increasing rate: light, wind, low humidity, high temperature.",
          },
          {
            heading: "Phloem and translocation",
            body: "Phloem = sieve tube elements + companion cells. Translocation moves sucrose/amino acids from sources (leaves) to sinks (roots, fruits) by mass flow — pressure flow hypothesis: loading at source raises osmotic pressure → water enters → hydrostatic pressure pushes sap to sink.",
          },
          {
            heading: "Adaptations",
            body: "Root hairs increase absorption SA; endodermis (Casparian strip) forces water through symplast/apoplast control; stomata regulate gas exchange and water loss; leaf vein networks minimise diffusion distance.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Transpiration pull = cohesion + adhesion + evaporation" },
        ],
        workedExample: {
          problem: "Why does wilting occur on a hot windy day?",
          solution: "Transpiration rate exceeds water uptake; loss of turgor pressure causes cells to lose rigidity → plant wilts.",
        },
      },
      questions: [
        {
          id: "edialbio-plant-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue transports water and mineral ions upward in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem" },
              { id: "b", text: "Cortex" },
              { id: "c", text: "Xylem" },
              { id: "d", text: "Epidermis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Xylem", statement: "Transports water and minerals upward." }],
            steps: [{ reasoning: "Xylem vessels form continuous dead tubes.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Xylem",
          },
        },
        {
          id: "edialbio-plant-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define transpiration and state one factor that increases its rate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transpiration", statement: "Evaporation of water from aerial parts." }],
            steps: [
              { reasoning: "Transpiration: loss of water vapour mainly through stomata.", marks: 1, markCode: "A" },
              { reasoning: "Creates tension pulling water up xylem.", marks: 1, markCode: "A" },
              { reasoning: "Factors: high temperature, low humidity, wind, light (any one).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water loss from leaves; rate ↑ by heat/wind/dry air",
            commonErrors: ["Confusing transpiration with translocation."],
          },
        },
        {
          id: "edialbio-plant-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the cohesion-tension theory of water transport in xylem.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cohesion-tension", statement: "Evaporation pulls continuous water column." }],
            steps: [
              { reasoning: "Water evaporates from mesophyll cells into air spaces → leaves via stomata.", marks: 1, markCode: "M" },
              { reasoning: "Evaporation creates tension (negative pressure) in xylem sap.", marks: 1, markCode: "M" },
              { reasoning: "Cohesion (H-bonds between water molecules) transmits pull; adhesion to xylem walls prevents break.", marks: 1, markCode: "A" },
              { reasoning: "Continuous column of water rises from roots to leaves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transpiration pull via cohesion + adhesion",
            commonErrors: ["Saying root pressure alone drives ascent."],
          },
        },
        {
          id: "edialbio-plant-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare the transport of water and organic nutrients in plants.",
          parts: [
            { label: "a", prompt: "Identify tissue and direction of transport for each.", marks: 3 },
            { label: "b", prompt: "Explain the mechanism for each.", marks: 4 },
            { label: "c", prompt: "Compare the substances transported.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Xylem vs phloem", statement: "Unidirectional water vs bidirectional nutrients." }],
            steps: [
              { part: "a", reasoning: "Water/minerals: xylem, roots → leaves.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Organic nutrients: phloem, sources (leaves) → sinks (roots/fruits).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Xylem dead vessels; phloem living sieve tubes + companion cells.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Xylem: transpiration pull (cohesion-tension), passive, driven by evaporation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Xylem also aided by root pressure.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Phloem: pressure flow — active loading at source raises osmotic pressure → mass flow to sink.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Phloem transport requires energy (ATP).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Xylem: water + dissolved mineral ions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Phloem: sucrose, amino acids, other organic molecules.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude comparison.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Xylem: water up by transpiration pull; phloem: nutrients by pressure flow",
            commonErrors: ["Saying phloem transports water upward."],
          },
        },
      ],
    },
    {
      id: "edialbio-u2-animals",
      title: "Transport in animals",
      skill: "Describe the mammalian circulatory system and heart function.",
      lesson: {
        sections: [
          {
            heading: "Double circulation",
            body: "Systemic circuit: heart → body → heart. Pulmonary circuit: heart → lungs → heart. Complete separation of oxygenated and deoxygenated blood enables high metabolic rates. Heart: 4 chambers — right atrium/ventricle, left atrium/ventricle; valves prevent backflow.",
          },
          {
            heading: "Cardiac cycle",
            body: "Atrial systole (atria contract, fill ventricles) → ventricular systole (ventricles contract, blood ejected through semilunar valves) → diastole (all relax, ventricles refill). AV valves close during ventricular systole (lub); semilunar close during diastole (dub).",
          },
          {
            heading: "Vessels",
            body: "Arteries: thick muscular walls, carry blood away under high pressure. Capillaries: one-cell walls for exchange. Veins: thin walls, valves prevent backflow, blood under low pressure. Blood: RBCs (O₂), WBCs (immunity), platelets (clotting), plasma (transport).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do arteries have thicker walls than veins?",
          solution: "Arteries carry blood at high pressure directly from the heart; thick muscular/elastic walls withstand and regulate pressure. Veins carry blood at low pressure after capillaries.",
        },
      },
      questions: [
        {
          id: "edialbio-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber pumps blood to the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Left atrium" },
              { id: "b", text: "Left ventricle" },
              { id: "c", text: "Right ventricle" },
              { id: "d", text: "Right atrium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Heart", statement: "RV → pulmonary artery → lungs." }],
            steps: [{ reasoning: "Pulmonary circuit starts at right ventricle.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Right ventricle",
          },
        },
        {
          id: "edialbio-circ-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the function of the atrioventricular (AV) valves.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Valves", statement: "Prevent backflow of blood." }],
            steps: [
              { reasoning: "AV valves (tricuspid, bicuspid) sit between atria and ventricles.", marks: 1, markCode: "A" },
              { reasoning: "Open during ventricular filling; close when ventricles contract.", marks: 1, markCode: "M" },
              { reasoning: "Prevent blood flowing back into atria → maintain forward flow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prevent backflow into atria during ventricular systole",
            commonErrors: ["Saying valves pump blood."],
          },
        },
        {
          id: "edialbio-circ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the left ventricle wall is thicker than the right.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cardiac muscle", statement: "Wall thickness ∝ pressure required." }],
            steps: [
              { reasoning: "Left ventricle pumps blood to whole body — must generate higher pressure.", marks: 1, markCode: "M" },
              { reasoning: "Right ventricle only pumps to lungs (low-pressure circuit).", marks: 1, markCode: "M" },
              { reasoning: "More cardiac muscle → stronger contraction → higher blood pressure.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "LV pumps to whole body → needs thicker wall",
            commonErrors: ["Saying LV has more blood."],
          },
        },
        {
          id: "edialbio-circ-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the cardiac cycle.",
          parts: [
            { label: "a", prompt: "Atrial systole.", marks: 3 },
            { label: "b", prompt: "Ventricular systole.", marks: 4 },
            { label: "c", prompt: "Diastole and valve action.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cardiac cycle", statement: "Systole/diastole sequence." }],
            steps: [
              { part: "a", reasoning: "Atria contract (atrial systole) pushing blood through open AV valves into ventricles.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ventricles fill; AV valves open, semilunar closed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete filling.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "AV valves close (first heart sound 'lub').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ventricles contract (ventricular systole) → pressure rises.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Semilunar valves open → blood ejected into arteries.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Blood flows to lungs (RV) and body (LV).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ventricles relax (diastole); semilunar valves close ('dub').", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ventricles refill as atria fill.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cycle repeats.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Atrial systole → ventricular systole → diastole",
            commonErrors: ["Valves opening direction wrong."],
          },
        },
      ],
    },
  ],
};
