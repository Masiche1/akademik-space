import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cieb-u4-lesson-4-1",
  code: "4-1",
  title: "The Circulatory System",
  goal: "I CAN describe the mammalian circulatory system: heart structure, double circulation, blood vessels and blood components.",
  standards: ["0653 4.1", "0653 4.2"],
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
      id: "cieb-u4-heart",
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
          id: "cieb-u4-heart-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries deoxygenated blood from the heart to the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aorta" },
              { id: "b", text: "Pulmonary vein" },
              { id: "c", text: "Pulmonary artery" },
              { id: "d", text: "Vena cava" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u4-heart-q2",
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
          id: "cieb-u4-heart-q3",
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
          id: "cieb-u4-heart-q4",
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
          id: "cieb-u4-heart-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber of the heart receives oxygenated blood from the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Left atrium" },
              { id: "b", text: "Left ventricle" },
              { id: "c", text: "Right ventricle" },
              { id: "d", text: "Right atrium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart chambers", statement: "Pulmonary vein → left atrium." },
            ],
            steps: [
              { reasoning: "Trace the pulmonary return.", working: "\\text{lungs} \\to \\text{PV} \\to \\text{left atrium}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Left atrium",
            commonErrors: ["Choosing right atrium — that receives deoxygenated blood from the vena cava."],
          },
        },
        {
          id: "cieb-u4-heart-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries oxygenated blood from the heart to the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pulmonary vein" },
              { id: "b", text: "Pulmonary artery" },
              { id: "c", text: "Aorta" },
              { id: "d", text: "Vena cava" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Systemic circuit", statement: "Left ventricle → aorta → body." },
            ],
            steps: [
              { reasoning: "Match vessel to route.", working: "\\text{aorta} \\to \\text{body}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Aorta",
            commonErrors: ["Choosing pulmonary artery — that goes to the lungs, not the body."],
          },
        },
        {
          id: "cieb-u4-heart-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main function of heart valves is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase blood pressure" },
              { id: "b", text: "Prevent the backflow of blood" },
              { id: "c", text: "Filter the blood" },
              { id: "d", text: "Produce red blood cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart valves", statement: "Ensure one-way flow of blood." },
            ],
            steps: [
              { reasoning: "Recall the valve function.", working: "\\text{prevent backflow}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Prevent the backflow of blood",
            commonErrors: ["Choosing 'increase pressure' — valves maintain direction, not pressure."],
          },
        },
        {
          id: "cieb-u4-heart-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats at 70 beats per minute. Calculate how many beats occur in 30 seconds.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35, unit: "beats" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate scaling", statement: "$70 \\times \\frac{30}{60} = 35$" },
            ],
            steps: [
              { reasoning: "Scale rate to half a minute.", working: "70 \\times 0.5", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "35\\,\\text{beats}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35 beats",
            commonErrors: ["Multiplying 70 × 30 (forgetting to convert to minutes)."],
          },
        },
        {
          id: "cieb-u4-heart-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A heart beats at 60 beats per minute. Calculate the total number of beats in 2 hours.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7200, unit: "beats" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total beats", statement: "$60 \\times 60 \\times 2 = 7200$" },
            ],
            steps: [
              { reasoning: "Convert hours to minutes and multiply.", working: "60 \\times 120", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "7200\\,\\text{beats}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7200 beats",
            commonErrors: ["Forgetting to convert 2 hours into minutes."],
          },
        },
        {
          id: "cieb-u4-heart-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many chambers does the mammalian heart have?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "chambers" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heart structure", statement: "Two atria + two ventricles = 4 chambers." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "2 \\text{ atria} + 2 \\text{ ventricles} = 4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 2 — forgetting both atria and ventricles."],
          },
        },
        {
          id: "cieb-u4-heart-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A person's resting heart rate is 60 beats per minute. During exercise it rises to 150 beats per minute. Calculate the increase in heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "beats/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate change", statement: "$150 - 60 = 90$" },
            ],
            steps: [
              { reasoning: "Subtract resting from exercise rate.", working: "150 - 60", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "90\\,\\text{beats/min}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 beats/min",
            commonErrors: ["Computing the ratio instead of the difference."],
          },
        },
        {
          id: "cieb-u4-heart-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the septum in the heart.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Septum", statement: "Separates oxygenated (left) and deoxygenated (right) blood." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{separates sides}", marks: 1, markCode: "M" },
              { reasoning: "Complete with the benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The septum separates the oxygenated blood on the left from the deoxygenated blood on the right, keeping the two streams apart.",
            commonErrors: ["Saying it 'pumps blood' — that is the ventricles' role."],
          },
        },
        {
          id: "cieb-u4-heart-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Blood pressure is highest in the aorta immediately after leaving the heart because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Valves increase the pressure" },
              { id: "b", text: "The aorta is the narrowest vessel" },
              { id: "c", text: "The lungs push blood into it" },
              { id: "d", text: "The left ventricle pumps blood directly into it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood pressure", statement: "Highest at artery exit from heart; falls along circulation." },
            ],
            steps: [
              { reasoning: "Link pressure to ventricle pump.", working: "\\text{LV} \\to \\text{aorta}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The left ventricle pumps blood directly into it",
            commonErrors: ["Saying 'the aorta is narrow' — pressure is highest where the ventricle ejects blood."],
          },
        },
        {
          id: "cieb-u4-heart-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which vessel returns deoxygenated blood from the body to the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vena cava" },
              { id: "b", text: "Pulmonary artery" },
              { id: "c", text: "Pulmonary vein" },
              { id: "d", text: "Aorta" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Systemic return", statement: "Body → vena cava → right atrium." },
            ],
            steps: [
              { reasoning: "Match vessel to route.", working: "\\text{body} \\to \\text{VC} \\to \\text{heart}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vena cava",
            commonErrors: ["Choosing aorta — that carries blood AWAY from the heart."],
          },
        },
        {
          id: "cieb-u4-heart-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The pulmonary vein carries:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygenated blood to the heart" },
              { id: "b", text: "Deoxygenated blood to the lungs" },
              { id: "c", text: "Deoxygenated blood to the heart" },
              { id: "d", text: "Oxygenated blood to the body" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulmonary vein", statement: "Exception: vein carrying oxygenated blood to the heart." },
            ],
            steps: [
              { reasoning: "Recall the exception.", working: "\\text{O}_2\\text{-rich} \\to \\text{heart}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygenated blood to the heart",
            commonErrors: ["Thinking all veins carry deoxygenated blood — pulmonary vein is the exception."],
          },
        },
        {
          id: "cieb-u4-heart-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Trace the path of a red blood cell from the left ventricle back to the right atrium, and explain what happens to it in the capillaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Systemic circuit", statement: "LV → aorta → body capillaries → vena cava → RA." },
            ],
            steps: [
              { reasoning: "Left ventricle → aorta → body tissues.", working: "\\text{LV} \\to \\text{aorta}", marks: 1, markCode: "M" },
              { reasoning: "In capillaries O₂ is delivered and CO₂ collected.", working: "\\text{O}_2 \\leftrightarrow \\text{CO}_2", marks: 1, markCode: "M" },
              { reasoning: "Blood returns via vena cava to right atrium.", working: "\\text{VC} \\to \\text{RA}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: blood returns deoxygenated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Left ventricle → aorta → body capillaries (O₂ delivered, CO₂ collected) → vena cava → right atrium; the cell returns deoxygenated.",
            commonErrors: ["Stopping at the aorta — must trace through capillaries to the vena cava."],
          },
        },
      ],
    },
    {
      id: "cieb-u4-blood-vessels",
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
          id: "cieb-u4-blood-vessels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component carries oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasma only" },
              { id: "b", text: "White blood cells" },
              { id: "c", text: "Red blood cells" },
              { id: "d", text: "Platelets" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u4-blood-vessels-q2",
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
          id: "cieb-u4-blood-vessels-q3",
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
          id: "cieb-u4-blood-vessels-q4",
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
          id: "cieb-u4-blood-vessels-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood vessels contain valves to prevent backflow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Veins" },
              { id: "b", text: "Capillaries" },
              { id: "c", text: "Arteries" },
              { id: "d", text: "Xylem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vein valves", statement: "Veins have valves; arteries and capillaries do not." },
            ],
            steps: [
              { reasoning: "Recall vessel features.", working: "\\text{vein valves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Veins",
            commonErrors: ["Choosing arteries — high pressure means they need no valves."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component has no nucleus and is adapted for carrying oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Platelet" },
              { id: "b", text: "White blood cell" },
              { id: "c", text: "Red blood cell" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RBC structure", statement: "Biconcave, no nucleus, packed with haemoglobin." },
            ],
            steps: [
              { reasoning: "Match component to feature.", working: "\\text{RBC}: \\text{no nucleus}, \\text{haemoglobin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red blood cell",
            commonErrors: ["Choosing white blood cell — those have nuclei and defend, not carry O₂."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main function of platelets is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transport hormones" },
              { id: "b", text: "Carry oxygen" },
              { id: "c", text: "Help blood to clot" },
              { id: "d", text: "Fight infection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Platelets", statement: "Cell fragments involved in clotting." },
            ],
            steps: [
              { reasoning: "Recall platelet function.", working: "\\text{clotting}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Help blood to clot",
            commonErrors: ["Choosing WBC function — defence is white cells' role."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Blood contains 5 million red blood cells per mm³. Calculate how many red blood cells are in 2 mm³ of blood.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10000000, unit: "cells" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell count", statement: "$5 \\times 10^6 \\times 2 = 10^7$" },
            ],
            steps: [
              { reasoning: "Multiply concentration by volume.", working: "5 \\times 10^6 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "10^7\\,\\text{cells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10,000,000 cells (10⁷)",
            commonErrors: ["Writing 10 million as 10⁶ or adding instead of multiplying."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 2 mm³ sample of blood contains 9 million red blood cells. Calculate the concentration of red blood cells per mm³.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4500000, unit: "cells/mm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "$\\text{concentration} = \\dfrac{\\text{count}}{\\text{volume}}$" },
            ],
            steps: [
              { reasoning: "Divide count by volume.", working: "\\frac{9 \\times 10^6}{2}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "4.5 \\times 10^6\\,\\text{cells/mm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4,500,000 cells/mm³ (4.5 × 10⁶)",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main types of blood component are there (red cells, white cells, platelets, plasma)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "components" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood components", statement: "RBCs, WBCs, platelets, plasma." },
            ],
            steps: [
              { reasoning: "Count the components.", working: "4\\,\\text{components}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 by forgetting plasma."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Blood pressure in an artery is 120 mmHg and in a capillary is 20 mmHg. Calculate the difference in pressure between them.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "mmHg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure drop", statement: "$120 - 20 = 100\\,\\text{mmHg}$" },
            ],
            steps: [
              { reasoning: "Subtract capillary pressure from artery.", working: "120 - 20", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "100\\,\\text{mmHg}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 mmHg",
            commonErrors: ["Subtracting in the wrong order (giving -100)."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of blood plasma.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plasma", statement: "Straw-coloured liquid transporting dissolved substances." },
            ],
            steps: [
              { reasoning: "Give two functions.", working: "\\text{transport glucose/CO}_2/\\text{urea/hormones}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plasma transports dissolved substances such as glucose, carbon dioxide, urea and hormones around the body.",
            commonErrors: ["Saying plasma 'carries oxygen' — O₂ is carried by haemoglobin in red cells."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Capillary walls are only one cell thick mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prevent blood clotting" },
              { id: "b", text: "Increase blood pressure" },
              { id: "c", text: "Minimise the diffusion distance for exchange of substances" },
              { id: "d", text: "Make the vessel stronger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Capillary structure", statement: "Thin wall → short diffusion path for exchange." },
            ],
            steps: [
              { reasoning: "Link thin wall to exchange.", working: "\\text{thin} \\to \\text{short diffusion distance}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Minimise the diffusion distance for exchange of substances",
            commonErrors: ["Saying 'for strength' — thin walls are weak but optimised for exchange."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which blood vessel has the largest lumen and lowest blood pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artery" },
              { id: "b", text: "Vein" },
              { id: "c", text: "Capillary" },
              { id: "d", text: "Aorta" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vein structure", statement: "Thin wall, large lumen, low pressure, valves." },
            ],
            steps: [
              { reasoning: "Match features to vessel.", working: "\\text{large lumen + low pressure} \\to \\text{vein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vein",
            commonErrors: ["Choosing artery — arteries have small lumen and high pressure."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "White blood cells function mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transport hormones" },
              { id: "b", text: "Defend the body against pathogens" },
              { id: "c", text: "Clot the blood" },
              { id: "d", text: "Carry oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "White blood cells", statement: "Defence against pathogens (phagocytes, lymphocytes)." },
            ],
            steps: [
              { reasoning: "Recall WBC function.", working: "\\text{defence}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Defend the body against pathogens",
            commonErrors: ["Choosing 'carry oxygen' — that is red blood cells."],
          },
        },
        {
          id: "cieb-u4-blood-vessels-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of capillaries enables efficient exchange of substances between blood and tissues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Capillary exchange", statement: "One-cell wall + large area + slow flow → rapid diffusion." },
            ],
            steps: [
              { reasoning: "Walls are one cell thick → short diffusion distance.", working: "\\text{one cell thick}", marks: 1, markCode: "M" },
              { reasoning: "Huge total surface area and slow blood flow.", working: "\\text{area + slow flow}", marks: 1, markCode: "M" },
              { reasoning: "O₂, CO₂, glucose diffuse between blood and tissue fluid.", working: "\\text{diffusion}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: efficient exchange.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capillaries have walls only one cell thick (short diffusion distance), a huge combined surface area, and slow blood flow, so oxygen, carbon dioxide and nutrients diffuse quickly between blood and tissues.",
            commonErrors: ["Describing artery/vein structure instead of capillary."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u4-circulatory-notes",
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
