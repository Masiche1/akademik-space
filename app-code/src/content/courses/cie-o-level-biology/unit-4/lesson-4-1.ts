import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olbio-u4-lesson-4-1",
  code: "4-1",
  title: "The Circulatory System",
  goal: "I CAN describe the mammalian circulatory system: heart structure, double circulation, blood vessels and blood components.",
  standards: ["5090 4.1", "5090 4.2"],
  vocabulary: [
    { term: "Double circulation", definition: "Blood passes through the heart twice per complete circuit: pulmonary then systemic." },
    { term: "Atrium", definition: "Upper chamber of the heart that receives blood." },
    { term: "Ventricle", definition: "Lower chamber that pumps blood out; left wall thicker." },
    { term: "Valve", definition: "Prevents backflow of blood in the heart and veins." },
    { term: "Artery", definition: "Vessel carrying blood away from the heart; thick muscular wall." },
    { term: "Capillary", definition: "Tiny vessel for exchange between blood and tissues; one-cell wall." },
    { term: "Vein", definition: "Vessel carrying blood to the heart; has valves." },
    { term: "Haemoglobin", definition: "Iron-containing protein in red blood cells that carries oxygen." },
  ],
  concepts: [
    {
      id: "olbio-u4-heart",
      title: "Heart and circulation",
      skill: "Describe heart structure, trace blood flow, and explain double circulation.",
      lesson: {
        sections: [
          {
            heading: "Heart structure",
            body: "- **4 chambers**: right atrium, right ventricle, left atrium, left ventricle.\n- **Valves** between atria/ventricles and at artery exits prevent backflow.\n- **Septum** separates left (oxygenated) and right (deoxygenated) sides.\n- Left ventricle wall is thicker — must pump to whole body.",
          },
          {
            heading: "Double circulation",
            body: "1. Right atrium → right ventricle → **pulmonary artery** → lungs (O₂ loaded)\n2. Lungs → **pulmonary vein** → left atrium → left ventricle\n3. **Aorta** → body tissues (O₂ delivered)\n4. Body → **vena cava** → right atrium",
          },
          {
            heading: "Why double?",
            body: "Separates oxygenated and deoxygenated blood so tissues always receive fully oxygenated blood at high pressure — efficient supply.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Trace a red blood cell from the vena cava to the aorta.",
          solution: "Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta.",
        },
      },
      questions: [
        {
          id: "olbio-u4-heart-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries deoxygenated blood from the heart to the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pulmonary artery" },
              { id: "b", text: "Pulmonary vein" },
              { id: "c", text: "Aorta" },
              { id: "d", text: "Vena cava" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulmonary circuit", statement: "Pulmonary artery: heart → lungs (deoxygenated); pulmonary vein: lungs → heart (oxygenated)." },
            ],
            steps: [
              { reasoning: "Recall the exception: artery carries deoxygenated blood to lungs.", working: "\\text{pulmonary artery}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pulmonary artery",
            commonErrors: ["Choosing pulmonary vein — that carries oxygenated blood TO the heart."],
          },
        },
        {
          id: "olbio-u4-heart-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two adaptations of the left ventricle wall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Left ventricle", statement: "Thicker/more muscular wall — pumps blood to whole body." },
            ],
            steps: [
              { reasoning: "Give adaptations.", working: "\\text{thicker wall}", marks: 1, markCode: "M" },
              { reasoning: "Link to function (body-wide pressure).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thicker, more muscular wall to generate higher pressure for pumping blood around the whole body.",
            commonErrors: ["Saying 'more chambers' — it's about wall thickness."],
          },
        },
        {
          id: "olbio-u4-heart-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the circulatory system is described as 'double circulation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Double circulation", statement: "Pulmonary circuit + systemic circuit; blood passes through heart twice." },
            ],
            steps: [
              { reasoning: "Describe pulmonary circuit.", working: "\\text{heart} \\to \\text{lungs} \\to \\text{heart}", marks: 1, markCode: "M" },
              { reasoning: "Describe systemic circuit.", working: "\\text{heart} \\to \\text{body} \\to \\text{heart}", marks: 1, markCode: "M" },
              { reasoning: "State blood passes heart twice per lap.", marks: 1, markCode: "M" },
              { reasoning: "Conclude with benefit (oxygenated blood maintained).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blood travels through the heart twice per complete circuit — once to the lungs (pulmonary) and once to the body (systemic) — keeping oxygenated and deoxygenated blood separate.",
            commonErrors: ["Describing only one circuit."],
          },
        },
        {
          id: "olbio-u4-heart-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to explain the path of blood through the heart and major vessels.",
          parts: [
            { label: "a", prompt: "List the sequence of structures from vena cava to aorta.", marks: 4 },
            { label: "b", prompt: "Explain the role of valves in the heart.", marks: 2 },
            { label: "c", prompt: "Explain why the pulmonary artery is an exception to the 'arteries carry oxygenated blood' rule.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Circulation path", statement: "VC → RA → RV → PA → lungs → PV → LA → LV → aorta." },
              { kind: "property", name: "Valves", statement: "Prevent backflow, maintain one-way flow." },
            ],
            steps: [
              { part: "a", reasoning: "Give sequence up to lungs.", working: "\\text{VC} \\to \\text{RA} \\to \\text{RV} \\to \\text{PA}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Give sequence after lungs.", working: "\\text{lungs} \\to \\text{PV} \\to \\text{LA} \\to \\text{LV}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Finish with aorta.", working: "\\text{aorta}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete sequence in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Prevent backflow of blood.", working: "\\text{one-way}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Maintain efficient forward flow.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Artery defined by direction (away from heart), not oxygen content.", working: "\\text{away from heart}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It carries deoxygenated blood to lungs for oxygenation.", working: "\\text{to lungs}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: name refers to direction, not contents.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) VC→RA→RV→PA→lungs→PV→LA→LV→aorta (b) prevent backflow (c) artery = away from heart; carries deoxygenated blood to lungs",
            commonErrors: ["In (c) saying 'the rule is wrong' — it's a naming convention, not an error."],
          },
        },
      ],
    },
    {
      id: "olbio-u4-blood-vessels",
      title: "Blood vessels and blood",
      skill: "Compare arteries, capillaries and veins; describe blood components and their functions.",
      lesson: {
        sections: [
          {
            heading: "Vessel comparison",
            body: "| Feature | Artery | Capillary | Vein |\n|---|---|---|---|\n| Direction | away from heart | between arteries/veins | to heart |\n| Wall | thick, muscular | one cell thick | thin |\n| Lumen | small | tiny | large |\n| Valves | no | no | yes |\n| Pressure | high | low | low |",
          },
          {
            heading: "Blood components",
            body: "- **Red blood cells**: biconcave, no nucleus, haemoglobin → O₂ transport.\n- **White blood cells**: nucleated; defend against pathogens (phagocytes engulf, lymphocytes make antibodies).\n- **Platelets**: cell fragments → clotting.\n- **Plasma**: straw-coloured liquid; transports dissolved substances (glucose, CO₂, urea, hormones).",
          },
          {
            heading: "Exchange at capillaries",
            body: "Thin walls + slow flow allow diffusion of O₂/CO₂/glucose between blood and tissue fluid.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do capillaries have walls only one cell thick?",
          solution: "To minimise diffusion distance for rapid exchange of gases and nutrients between blood and tissues.",
        },
      },
      questions: [
        {
          id: "olbio-u4-blood-vessels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component carries oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red blood cells" },
              { id: "b", text: "White blood cells" },
              { id: "c", text: "Platelets" },
              { id: "d", text: "Plasma only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RBC", statement: "Haemoglobin carries O₂." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{RBC/haemoglobin} \\to \\text{O}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red blood cells",
            commonErrors: ["Choosing plasma — plasma transports dissolved CO₂ but O₂ is carried by haemoglobin."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two structural features of arteries that suit their function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Artery structure", statement: "Thick muscular wall; small lumen; no valves (high pressure)." },
            ],
            steps: [
              { reasoning: "Give two features.", working: "\\text{thick wall, small lumen}", marks: 1, markCode: "M" },
              { reasoning: "Link to function (withstand high pressure).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thick muscular wall and small lumen — withstand and maintain high pressure from the heart.",
            commonErrors: ["Listing vein features (valves, large lumen)."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how blood composition differs between an artery and a vein.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Arterial vs venous blood", statement: "Arteries (except pulmonary): oxygenated, bright red; veins: deoxygenated, dark red (except pulmonary)." },
            ],
            steps: [
              { reasoning: "Oxygen content difference.", working: "\\text{O}_2 \\text{ content}", marks: 1, markCode: "M" },
              { reasoning: "CO₂ content difference.", working: "\\text{CO}_2 \\text{ content}", marks: 1, markCode: "M" },
              { reasoning: "Mention exceptions (pulmonary vessels).", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arteries carry oxygenated blood (except pulmonary artery) and veins carry deoxygenated blood (except pulmonary vein); venous blood has more CO₂.",
            commonErrors: ["Ignoring the pulmonary exceptions."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the structure and function of arteries, capillaries and veins.",
          parts: [
            { label: "a", prompt: "Give one structural feature of each vessel.", marks: 3 },
            { label: "b", prompt: "Give one functional feature of each vessel.", marks: 3 },
            { label: "c", prompt: "Explain how capillary structure enables exchange.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Vessel comparison", statement: "Artery: thick wall/high pressure; capillary: one-cell wall/exchange; vein: thin wall/valves/low pressure." },
            ],
            steps: [
              { part: "a", reasoning: "Artery feature.", working: "\\text{thick muscular wall}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Capillary feature.", working: "\\text{one cell thick}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vein feature.", working: "\\text{valves/thin wall}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Artery function: transport away at high pressure.", working: "\\text{away, high pressure}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Capillary function: exchange surface.", working: "\\text{exchange}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vein function: return blood, valves prevent backflow.", working: "\\text{return, valves}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One-cell wall → short diffusion distance.", working: "\\text{short distance}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Large surface area + slow flow → efficient exchange.", working: "\\text{area + slow flow}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) artery thick wall / capillary one-cell / vein valves (b) artery high-pressure transport / capillary exchange / vein return (c) thin wall + slow flow → efficient diffusion",
            commonErrors: ["In (c) forgetting slow blood flow as a factor."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u4-circulatory-notes",
      title: "Circulatory system — revision notes",
      summary: "Heart structure, double circulation, blood vessels and blood components.",
      sections: [
        {
          heading: "Heart",
          body: "4 chambers; valves prevent backflow; septum separates sides; left ventricle thicker. Path: VC→RA→RV→PA→lungs→PV→LA→LV→aorta→body→VC.",
        },
        {
          heading: "Vessels and blood",
          body: "Artery: thick wall, high pressure. Capillary: one-cell wall for exchange. Vein: thin wall + valves. Blood: RBC (O₂), WBC (defence), platelets (clotting), plasma (transport).",
        },
        {
          heading: "Exam technique",
          body: "- Pulmonary artery/vein are the exceptions to oxygenated/deoxygenated rules — know them.\n- Artery = away from heart (not 'oxygenated'); vein = to heart.",
        },
      ],
    },
  ],
};
