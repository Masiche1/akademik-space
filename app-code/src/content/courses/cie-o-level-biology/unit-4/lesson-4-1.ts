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
              { id: "a", text: "Aorta" },
              { id: "b", text: "Pulmonary artery" },
              { id: "c", text: "Vena cava" },
              { id: "d", text: "Pulmonary vein" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulmonary circuit", statement: "Pulmonary artery: heart → lungs (deoxygenated); pulmonary vein: lungs → heart (oxygenated)." },
            ],
            steps: [
              { reasoning: "Recall the exception: artery carries deoxygenated blood to lungs.", working: "\\text{pulmonary artery}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pulmonary artery",
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
        {
          id: "olbio-u4-heart-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber of the heart receives blood returning from the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right ventricle" },
              { id: "b", text: "Right atrium" },
              { id: "c", text: "Left atrium" },
              { id: "d", text: "Left ventricle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart chambers", statement: "Pulmonary vein → left atrium; vena cava → right atrium." },
            ],
            steps: [
              { reasoning: "Recall which vessel enters which atrium.", working: "\\text{PV} \\to \\text{LA}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Left atrium",
            commonErrors: ["Choosing right atrium — that receives blood from the vena cava."],
          },
        },
        {
          id: "olbio-u4-heart-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of the septum in the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It prevents infection of the heart muscle" },
              { id: "b", text: "It separates the oxygenated and deoxygenated sides of the heart" },
              { id: "c", text: "It pumps blood into the arteries" },
              { id: "d", text: "It stores blood between beats" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Septum", statement: "Separates left (oxygenated) and right (deoxygenated) sides." },
            ],
            steps: [
              { reasoning: "Recall the septum's role.", working: "\\text{separates sides}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It separates the oxygenated and deoxygenated sides of the heart",
            commonErrors: ["Saying it pumps blood — the ventricles do that."],
          },
        },
        {
          id: "olbio-u4-heart-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Blood leaving the left ventricle first enters which vessel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vena cava" },
              { id: "b", text: "Pulmonary vein" },
              { id: "c", text: "Aorta" },
              { id: "d", text: "Pulmonary artery" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Systemic circuit", statement: "Left ventricle → aorta → body." },
            ],
            steps: [
              { reasoning: "Match ventricle to exit vessel.", working: "\\text{LV} \\to \\text{aorta}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Aorta",
            commonErrors: ["Choosing pulmonary artery — that exits the RIGHT ventricle."],
          },
        },
        {
          id: "olbio-u4-heart-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which vessel carries oxygenated blood towards the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vena cava" },
              { id: "b", text: "Aorta" },
              { id: "c", text: "Pulmonary artery" },
              { id: "d", text: "Pulmonary vein" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulmonary vein", statement: "Carries oxygenated blood from lungs to heart — a vein carrying oxygenated blood." },
            ],
            steps: [
              { reasoning: "Recall the pulmonary circuit exception.", working: "\\text{lungs} \\to \\text{PV} \\to \\text{heart}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Pulmonary vein",
            commonErrors: ["Choosing vena cava — it carries deoxygenated blood from the body."],
          },
        },
        {
          id: "olbio-u4-heart-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between the left and right sides of the heart.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Left vs right heart", statement: "Left: oxygenated blood, thicker wall. Right: deoxygenated blood, thinner wall." },
            ],
            steps: [
              { reasoning: "Give one structural difference.", working: "\\text{wall thickness}", marks: 1, markCode: "M" },
              { reasoning: "Give one blood-content difference.", working: "\\text{O}_2 \\text{ content}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Left ventricle wall is thicker; left side carries oxygenated blood while right side carries deoxygenated blood.",
            commonErrors: ["Repeating the same point twice — need one structural and one functional difference."],
          },
        },
        {
          id: "olbio-u4-heart-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the path of blood through the pulmonary circuit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulmonary circuit", statement: "Right heart → pulmonary artery → lungs → pulmonary vein → left atrium." },
            ],
            steps: [
              { reasoning: "Right side to lungs.", working: "\\text{RA} \\to \\text{RV} \\to \\text{PA} \\to \\text{lungs}", marks: 1, markCode: "M" },
              { reasoning: "Lungs back to left heart.", working: "\\text{lungs} \\to \\text{PV} \\to \\text{LA}", marks: 1, markCode: "M" },
              { reasoning: "Complete ordered description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right atrium → right ventricle → pulmonary artery → lungs (blood oxygenated) → pulmonary vein → left atrium.",
            commonErrors: ["Forgetting the pulmonary vein returns to the LEFT atrium, not right."],
          },
        },
        {
          id: "olbio-u4-heart-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why keeping oxygenated and deoxygenated blood separate is an advantage to the mammal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Separation of blood", statement: "Tissues always receive fully oxygenated blood at high pressure." },
            ],
            steps: [
              { reasoning: "State the separation (septum).", working: "\\text{septum}", marks: 1, markCode: "M" },
              { reasoning: "Tissues receive only oxygenated blood.", working: "\\text{oxygenated only}", marks: 1, markCode: "M" },
              { reasoning: "Delivery is efficient/at high pressure.", working: "\\text{high pressure}", marks: 1, markCode: "M" },
              { reasoning: "Conclude with benefit (efficient O₂ supply).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The septum keeps the two blood supplies apart, so body tissues always receive fully oxygenated blood delivered at high pressure — an efficient oxygen supply.",
            commonErrors: ["Only describing the anatomy without linking to the advantage."],
          },
        },
        {
          id: "olbio-u4-heart-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the atria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Atria", statement: "Upper chambers that receive blood returning to the heart." },
            ],
            steps: [
              { reasoning: "Receive blood.", working: "\\text{receive blood}", marks: 1, markCode: "M" },
              { reasoning: "Pass it to ventricles.", working: "\\text{to ventricles}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The atria are upper chambers that receive blood returning to the heart and pass it into the ventricles.",
            commonErrors: ["Saying atria pump blood out of the heart — that's the ventricles' job."],
          },
        },
        {
          id: "olbio-u4-heart-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a heartbeat, which structure contracts to pump blood out of the right ventricle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right atrium wall" },
              { id: "b", text: "Septum only" },
              { id: "c", text: "Right ventricle wall" },
              { id: "d", text: "Pulmonary vein wall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ventricles", statement: "Ventricles contract to pump blood out of the heart." },
            ],
            steps: [
              { reasoning: "Ventricle pumps blood out.", working: "\\text{ventricle contracts}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Right ventricle wall",
            commonErrors: ["Choosing atrium — atria receive blood, they don't pump it out."],
          },
        },
        {
          id: "olbio-u4-heart-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A red blood cell leaves the aorta. What does it do next?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enters the pulmonary artery" },
              { id: "b", text: "Goes straight back to the right atrium" },
              { id: "c", text: "Stops moving until the next heartbeat" },
              { id: "d", text: "Travels through arteries to body tissues and capillaries" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Systemic circuit", statement: "Aorta → arteries → capillaries → veins → vena cava → right atrium." },
            ],
            steps: [
              { reasoning: "Trace the systemic path.", working: "\\text{aorta} \\to \\text{body} \\to \\text{capillaries}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Travels through arteries to body tissues and capillaries",
            commonErrors: ["Forgetting it must reach tissues via capillaries before returning."],
          },
        },
        {
          id: "olbio-u4-heart-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to compare the two sides of the heart.",
          parts: [
            { label: "a", prompt: "State the type of blood on each side.", marks: 2 },
            { label: "b", prompt: "Explain why the left ventricle wall is thicker.", marks: 3 },
            { label: "c", prompt: "Describe the route blood takes through the systemic circuit.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart sides", statement: "Right: deoxygenated → lungs. Left: oxygenated → body; thicker wall for higher pressure." },
            ],
            steps: [
              { part: "a", reasoning: "Right side deoxygenated.", working: "\\text{right = deoxygenated}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Left side oxygenated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Left pumps to whole body (long circuit).", working: "\\text{whole body}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Needs higher pressure → more muscle.", working: "\\text{higher pressure}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "LV → aorta → arteries → capillaries.", working: "\\text{LV} \\to \\text{aorta} \\to \\text{tissues}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Capillaries → veins → vena cava → RA.", working: "\\text{capillaries} \\to \\text{VC} \\to \\text{RA}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ordered sequence correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Include exchange at tissues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) right deoxygenated, left oxygenated (b) thicker to pump to whole body at high pressure (c) LV→aorta→arteries→capillaries→veins→VC→RA",
            commonErrors: ["In (c) missing the return via vena cava to right atrium."],
          },
        },
        {
          id: "olbio-u4-heart-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of the mammalian heart supports its function as a pump.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart structure-function", statement: "4 chambers, valves, thick ventricular walls, septum — all support efficient pumping." },
            ],
            steps: [
              { reasoning: "Valves ensure one-way flow.", working: "\\text{valves}", marks: 1, markCode: "M" },
              { reasoning: "Thick muscular walls generate pressure.", working: "\\text{muscular walls}", marks: 1, markCode: "M" },
              { reasoning: "Chambers/septum separate the two circuits.", working: "\\text{4 chambers}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: structure matches pumping function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valves prevent backflow, thick muscular ventricular walls generate the pressure needed to circulate blood, and the four-chambered septum separates the pulmonary and systemic circuits — together supporting efficient pumping.",
            commonErrors: ["Listing features without linking each to a pumping function."],
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
              { id: "a", text: "White blood cells" },
              { id: "b", text: "Plasma only" },
              { id: "c", text: "Platelets" },
              { id: "d", text: "Red blood cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RBC", statement: "Haemoglobin carries O₂." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{RBC/haemoglobin} \\to \\text{O}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Red blood cells",
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
        {
          id: "olbio-u4-blood-vessels-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component is a cell fragment involved in clotting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Platelets" },
              { id: "b", text: "White blood cells" },
              { id: "c", text: "Red blood cells" },
              { id: "d", text: "Plasma proteins only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Platelets", statement: "Cell fragments that initiate clotting." },
            ],
            steps: [
              { reasoning: "Recall the clotting component.", working: "\\text{platelets}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Platelets",
            commonErrors: ["Choosing white blood cells — they defend against pathogens, not clotting."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which liquid component of blood transports dissolved substances such as glucose and urea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fibrin" },
              { id: "b", text: "Haemoglobin" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plasma", statement: "Straw-coloured liquid transporting dissolved substances." },
            ],
            steps: [
              { reasoning: "Match component to role.", working: "\\text{plasma} \\to \\text{transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Plasma",
            commonErrors: ["Choosing haemoglobin — that carries oxygen inside red blood cells."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature is found in veins but NOT in arteries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High blood pressure" },
              { id: "b", text: "Small lumen" },
              { id: "c", text: "Valves" },
              { id: "d", text: "Thick muscular walls" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vein features", statement: "Veins have valves; arteries have thick walls, small lumen, high pressure." },
            ],
            steps: [
              { reasoning: "Compare vessel features.", working: "\\text{vein} = \\text{valves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Valves",
            commonErrors: ["Saying veins have high pressure — pressure is low in veins."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are capillary walls described as 'one cell thick'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To minimise the diffusion distance for exchange of substances" },
              { id: "b", text: "To stop blood flowing too quickly" },
              { id: "c", text: "To prevent the entry of white blood cells" },
              { id: "d", text: "To make them strong enough to withstand high pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Capillary wall", statement: "One cell thick → short diffusion distance." },
            ],
            steps: [
              { reasoning: "Link thin wall to exchange.", working: "\\text{short \\ diffusive \\ distance}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To minimise the diffusion distance for exchange of substances",
            commonErrors: ["Saying it's for strength — capillaries are exchange vessels, not pressure vessels."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two functions of white blood cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "White blood cells", statement: "Defence against pathogens: phagocytes engulf, lymphocytes produce antibodies." },
            ],
            steps: [
              { reasoning: "Give one defence function.", working: "\\text{phagocytosis/antibodies}", marks: 1, markCode: "M" },
              { reasoning: "Give a second valid function/type.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "White blood cells defend against pathogens — phagocytes engulf pathogens and lymphocytes produce antibodies (any two valid functions).",
            commonErrors: ["Saying they carry oxygen — that's red blood cells."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the structure of a red blood cell and explain how it suits its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Red blood cell", statement: "Biconcave, no nucleus, packed with haemoglobin → large O₂-carrying capacity." },
            ],
            steps: [
              { reasoning: "Describe structure.", working: "\\text{biconcave, no nucleus}", marks: 1, markCode: "M" },
              { reasoning: "Link to O₂ transport.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Red blood cells are biconcave discs with no nucleus, packed with haemoglobin — the biconcave shape gives a large surface area for oxygen uptake and the lack of nucleus leaves more room for haemoglobin.",
            commonErrors: ["Only describing shape without linking to oxygen transport."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the blood pressure in arteries, capillaries and veins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood pressure", statement: "Arteries high (near heart pumping), capillaries low, veins lowest (far from heart, valves assist)." },
            ],
            steps: [
              { reasoning: "Arteries highest pressure.", working: "\\text{arteries high}", marks: 1, markCode: "M" },
              { reasoning: "Capillaries and veins low.", working: "\\text{capillaries/veins low}", marks: 1, markCode: "M" },
              { reasoning: "Order correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pressure is highest in arteries (blood just pumped by heart), drops in capillaries, and is lowest in veins.",
            commonErrors: ["Saying veins have high pressure — they are low-pressure vessels."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how substances are exchanged between blood and tissues at capillaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Capillary exchange", statement: "Thin walls + slow flow + large area → diffusion down concentration gradients." },
            ],
            steps: [
              { reasoning: "One-cell wall → short diffusion distance.", working: "\\text{short distance}", marks: 1, markCode: "M" },
              { reasoning: "Millions of capillaries → large surface area.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Slow blood flow allows time for exchange.", working: "\\text{slow flow}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: efficient diffusion of O₂/CO₂/glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capillaries have walls only one cell thick, a huge total surface area and slow blood flow, so gases (O₂, CO₂) and dissolved substances (glucose) diffuse efficiently between blood and tissue fluid down their concentration gradients.",
            commonErrors: ["Describing active transport — exchange at capillaries is by diffusion."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood vessel carries blood away from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lymph vessel" },
              { id: "b", text: "Capillary" },
              { id: "c", text: "Artery" },
              { id: "d", text: "Vein" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Artery", statement: "Carries blood away from the heart." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{artery = away}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Artery",
            commonErrors: ["Choosing vein — veins carry blood TO the heart."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which substance in blood is converted to fibrin during clotting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Albumin" },
              { id: "c", text: "Fibrinogen" },
              { id: "d", text: "Haemoglobin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Clotting", statement: "Fibrinogen (plasma protein) → fibrin threads during clotting." },
            ],
            steps: [
              { reasoning: "Recall the clotting protein.", working: "\\text{fibrinogen} \\to \\text{fibrin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Fibrinogen",
            commonErrors: ["Confusing fibrinogen (the plasma protein) with fibrin (the product)."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to compare the three types of blood vessel.",
          parts: [
            { label: "a", prompt: "State one structural difference between arteries and veins.", marks: 2 },
            { label: "b", prompt: "State the direction of blood flow in each vessel type.", marks: 3 },
            { label: "c", prompt: "Explain why veins contain valves.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Vessel comparison", statement: "Artery: thick wall/away; vein: thin wall/valves/to heart; capillary: one-cell/exchange." },
            ],
            steps: [
              { part: "a", reasoning: "Arteries have thick muscular walls.", working: "\\text{thick wall}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Veins have thin walls + valves.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Artery direction.", working: "\\text{away from heart}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vein direction.", working: "\\text{to heart}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Capillary direction/position.", working: "\\text{between artery and vein}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Low pressure in veins.", working: "\\text{low pressure}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valves prevent backflow.", working: "\\text{prevent backflow}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Muscle contraction helps return blood.", working: "\\text{muscle pump}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: valves maintain one-way flow to heart.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) arteries thick-walled vs veins thin-walled with valves (b) artery away, vein to heart, capillary between (c) valves prevent backflow in low-pressure veins, aided by muscle contraction",
            commonErrors: ["In (c) forgetting that low pressure is WHY valves are needed."],
          },
        },
        {
          id: "olbio-u4-blood-vessels-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the roles of the four components of blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood components", statement: "RBC: O₂ transport; WBC: defence; platelets: clotting; plasma: transport of dissolved substances." },
            ],
            steps: [
              { reasoning: "RBC and WBC roles.", working: "\\text{RBC = O}_2, \\text{WBC = defence}", marks: 1, markCode: "M" },
              { reasoning: "Platelet role.", working: "\\text{platelets = clotting}", marks: 1, markCode: "M" },
              { reasoning: "Plasma role.", working: "\\text{plasma = transport}", marks: 1, markCode: "M" },
              { reasoning: "All four covered.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Red blood cells carry oxygen (haemoglobin), white blood cells defend against pathogens, platelets cause clotting, and plasma transports dissolved substances such as glucose, CO₂, urea and hormones.",
            commonErrors: ["Omitting plasma or confusing platelets with white cells."],
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
