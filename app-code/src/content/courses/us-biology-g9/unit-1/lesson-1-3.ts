import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "bio9-u1-lesson-1-3",
  code: "1-3",
  title: "Homeostasis and Organization",
  goal: "I CAN explain how negative and positive feedback maintain or change conditions in the body, and describe how cells, tissues, organs and organ systems work together.",
  standards: ["HS-LS1-3", "HS-LS1-2", "CCC: Stability and Change", "SEP: Developing and Using Models"],
  vocabulary: [
    { term: "Homeostasis", definition: "The maintenance of a relatively stable internal environment despite changes outside the body." },
    { term: "Negative feedback", definition: "A response that reduces a change and returns a variable to its set point." },
    { term: "Positive feedback", definition: "A response that amplifies a change, moving the variable further from its starting value until an event is completed." },
    { term: "Receptor", definition: "A cell or structure that detects a stimulus, such as a change in temperature or glucose level." },
    { term: "Tissue", definition: "A group of similar cells that work together to carry out a specific function." },
    { term: "Organ system", definition: "A group of organs that work together to perform a major body function." },
  ],
  concepts: [
    {
      id: "bio9-u1-feedback",
      title: "Feedback mechanisms",
      skill: "Distinguish negative and positive feedback and explain temperature and blood glucose control.",
      lesson: {
        sections: [
          {
            heading: "Feedback loops",
            body: "A feedback loop has a **stimulus**, a **receptor** that detects it, a **control center** (such as the brain or pancreas) that compares the value with the set point, and an **effector** that produces a response.\n\n- **Negative feedback** reverses the change. It keeps conditions stable, so most homeostatic systems use it.\n- **Positive feedback** amplifies the change. It is rare, for example the contractions of childbirth (oxytocin) and blood clotting, and it ends when the event is complete.",
          },
          {
            heading: "Body temperature and blood glucose",
            body: "**Temperature:** The brain (hypothalamus) detects a change from about $37^\\circ\\text{C}$. If too hot, sweating and vasodilation (widening of skin blood vessels) lose heat. If too cold, shivering and vasoconstriction conserve and produce heat.\n\n**Blood glucose:** After a meal, rising glucose causes the pancreas to release **insulin**, which causes cells and the liver to take up glucose and store it as glycogen, so blood glucose falls. When glucose falls, the pancreas releases **glucagon**, which causes the liver to break down glycogen and release glucose. In type 1 diabetes, the body makes too little insulin, so glucose stays high.",
          },
        ],
        keyFormulas: [
          { name: "Feedback loop", statement: "Stimulus, receptor, control center, effector, response" },
          { name: "Insulin", statement: "Lowers blood glucose (glucose to glycogen)" },
          { name: "Glucagon", statement: "Raises blood glucose (glycogen to glucose)" },
        ],
        workedExample: {
          problem: "Blood glucose is 140 mg/dL after a meal. The normal set point is 90 mg/dL. By what percent is it above the set point?",
          solution: "Difference: $140-90=50$. Percent: $\\dfrac{50}{90}\\times100=55.6\\%$ above the set point. Insulin release will start negative feedback to lower it.",
        },
      },
      questions: [
        {
          id: "bio9-u1-feedback-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone is released by the pancreas when blood glucose is too high?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucagon" },
              { id: "b", text: "Insulin" },
              { id: "c", text: "Oxytocin" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Glucose control", statement: "Insulin lowers blood glucose; glucagon raises it." }],
            steps: [{ reasoning: "High glucose triggers insulin, so cells take up glucose.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Insulin",
            commonErrors: ["Choosing glucagon, which acts when glucose is low."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u1-feedback-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's blood glucose is 126 mg/dL. The set point is 90 mg/dL.\n\nCalculate by what percent the blood glucose is above the set point.",
          response: { type: "numeric", parts: [{ label: "Percent above", answer: 40, unit: "%", tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Percent difference", statement: "$\\dfrac{\\text{measured}-\\text{set point}}{\\text{set point}}\\times100$" }],
            steps: [
              { reasoning: "Subtract and divide by the set point.", working: "\\frac{126-90}{90}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\frac{36}{90}\\times100=40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
            commonErrors: ["Dividing by 126, giving 28.6%.", "Giving 36 (the difference) as the percent."],
            examinerNote: "M1 for (126 - 90)/90. A1 for 40.",
          },
        },
        {
          id: "bio9-u1-feedback-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "On a hot day, a runner's core temperature starts to rise above $37^\\circ\\text{C}$.\n\nExplain how negative feedback returns the runner's temperature to normal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A response reverses the original change to return to the set point." },
              { kind: "property", name: "Heat loss", statement: "Sweat evaporation removes heat; vasodilation increases heat loss from skin." },
            ],
            steps: [
              { reasoning: "Temperature receptors detect the rise and send signals to the hypothalamus (control center).", marks: 1, markCode: "B" },
              { reasoning: "Sweat glands release more sweat, and evaporation removes heat from the skin.", marks: 1, markCode: "B" },
              { reasoning: "Skin blood vessels dilate (vasodilation) so more heat is lost by radiation.", marks: 1, markCode: "B" },
              { reasoning: "Temperature falls back to the set point, which switches the responses off (the change is reversed).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Receptors detect the rise; the hypothalamus triggers sweating and vasodilation; heat loss lowers the temperature, which reduces the stimulus and turns the response off.",
            commonErrors: ["Saying the blood vessels move closer to the skin.", "Saying sweating itself cools the body, ignoring evaporation."],
            examinerNote: "Allow 'brain' for hypothalamus. Reject 'blood vessels move' but allow 'widen'.",
          },
        },
        {
          id: "bio9-u1-feedback-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person eats a meal rich in carbohydrates. Their blood glucose concentration rises from 90 mg/dL to 150 mg/dL, then returns to 90 mg/dL after two hours.",
          parts: [
            { label: "a", prompt: "Name the organ that detects the rise and releases a hormone in response.", marks: 1 },
            { label: "b", prompt: "Calculate the percent increase in blood glucose after the meal.", marks: 2 },
            { label: "c", prompt: "Explain how the hormone from (a) brings the glucose back to normal.", marks: 3 },
            { label: "d", prompt: "Explain why this is negative feedback, and give one example of positive feedback in the body.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Glucose control", statement: "Insulin causes uptake of glucose and storage as glycogen." },
              { kind: "formula", name: "Percent increase", statement: "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100$" },
              { kind: "definition", name: "Negative feedback", statement: "The response reverses the original change." },
            ],
            steps: [
              { part: "a", reasoning: "The pancreas.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find increase relative to the starting value.", working: "\\frac{150-90}{90}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=66.7\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The pancreas releases insulin into the blood.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Insulin causes liver and muscle cells to take up glucose and convert it to glycogen.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So blood glucose falls back to the set point.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The response (lowering glucose) reverses the original change (rise), returning to the set point.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Example of positive feedback: oxytocin and contractions in childbirth, or blood clotting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Pancreas (b) $66.7\\%$ (c) Insulin is released; cells take up glucose and store it as glycogen; glucose falls (d) The response reverses the change; e.g. childbirth contractions.",
            commonErrors: ["Naming the liver or kidney in (a).", "In (b) dividing by 150, giving 40%.", "Confusing insulin and glucagon."],
            examinerNote: "(b) Allow 67 or 66.67. (d) Allow other valid positive feedback examples such as fruit ripening (ethylene) in plants.",
          },
        },
      ],
    },
    {
      id: "bio9-u1-organization",
      title: "Hierarchical organization of organisms",
      skill: "Describe the levels of organization and how organ systems interact.",
      lesson: {
        sections: [
          {
            heading: "From cells to organisms",
            body: "Multicellular organisms are organized in levels:\n\n**cell, tissue, organ, organ system, organism**\n\n- Cells specialize through differentiation, so they have shapes suited to their functions (for example, muscle cells with many mitochondria).\n- A **tissue** is a group of similar cells, such as muscle tissue.\n- An **organ** is made of several tissues. The stomach contains muscle, epithelial, glandular and nervous tissue.\n- An **organ system** is a group of organs working together, such as the digestive system.",
          },
          {
            heading: "Systems working together",
            body: "Organ systems interact. The digestive system breaks food into nutrients, the circulatory system carries them to cells, and the respiratory system supplies oxygen for respiration. The nervous and endocrine systems coordinate everything, and the excretory system removes wastes.\n\nIf one system fails, others are affected. For example, if the heart cannot pump well, tissues receive less oxygen and glucose. This interdependence is why the whole organism's homeostasis depends on all levels working together.",
          },
        ],
        keyFormulas: [
          { name: "Levels of organization", statement: "Cell, tissue, organ, organ system, organism" },
          { name: "Tissue", statement: "Group of similar cells with a common function" },
          { name: "Organ", statement: "Group of different tissues working together" },
        ],
        workedExample: {
          problem: "Classify the following levels from smallest to largest: heart, cardiac muscle cell, circulatory system, cardiac muscle tissue.",
          solution: "Cardiac muscle cell (cell), cardiac muscle tissue (tissue), heart (organ), circulatory system (organ system).",
        },
      },
      questions: [
        {
          id: "bio9-u1-organization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which list shows the levels of organization in order from smallest to largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organ, tissue, cell, organ system" },
              { id: "b", text: "Cell, organ, tissue, organ system" },
              { id: "c", text: "Tissue, cell, organ, organ system" },
              { id: "d", text: "Cell, tissue, organ, organ system" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Levels of organization", statement: "Cells form tissues, tissues form organs, organs form organ systems." }],
            steps: [{ reasoning: "Each level is built from the one below.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Cell, tissue, organ, organ system",
            commonErrors: ["Putting organ before tissue."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "bio9-u1-organization-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The small intestine is an organ that contains muscle tissue, epithelial tissue and nervous tissue.\n\nExplain why the small intestine is classified as an organ and not as a tissue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Organ", statement: "An organ is made of several different tissues that work together for a function." }],
            steps: [
              { reasoning: "It is made of more than one type of tissue.", marks: 1, markCode: "B" },
              { reasoning: "The tissues work together for a specific function, such as digestion and absorption.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It contains several different tissues that work together to perform a function (digestion and absorption).",
            commonErrors: ["Saying it is an organ because it is large.", "Saying a tissue has only one cell."],
            examinerNote: "B1 several/different tissues. B1 working together for a function.",
          },
        },
        {
          id: "bio9-u1-organization-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "During exercise, muscle cells need more oxygen and glucose, and they produce more carbon dioxide.\n\nDescribe how the respiratory and circulatory systems work together to meet these needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interdependence of systems", statement: "Organ systems depend on each other to deliver materials and remove wastes." },
            ],
            steps: [
              { reasoning: "Breathing rate increases, so more oxygen enters the lungs and more carbon dioxide is exhaled.", marks: 1, markCode: "B" },
              { reasoning: "Oxygen diffuses from the alveoli into the blood.", marks: 1, markCode: "B" },
              { reasoning: "The heart pumps faster, so blood carries oxygen and glucose to muscle cells more quickly.", marks: 1, markCode: "B" },
              { reasoning: "Blood carries carbon dioxide from the muscles to the lungs for removal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Faster breathing brings in more oxygen, which diffuses into the blood; a faster heart rate delivers oxygen and glucose to muscles and carries carbon dioxide back to the lungs.",
            commonErrors: ["Saying the lungs pump blood.", "Saying red blood cells carry carbon dioxide only."],
            examinerNote: "Allow 'blood vessels' for circulatory. Ignore details of the nervous system unless linked.",
          },
        },
        {
          id: "bio9-u1-organization-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student studies the stomach. It is an organ with an inner lining of epithelial tissue that secretes acid and enzymes, a layer of smooth muscle tissue, and nervous tissue.",
          parts: [
            { label: "a", prompt: "State the function of the muscle tissue in the stomach.", marks: 1 },
            { label: "b", prompt: "Name the organ system that contains the stomach.", marks: 1 },
            { label: "c", prompt: "A 20 g sample of stomach lining contains 0.5 g of mucus. Calculate the percent of the sample that is mucus.", marks: 2 },
            { label: "d", prompt: "Explain how the digestive system depends on the circulatory system.", marks: 2 },
            { label: "e", prompt: "Explain how the failure of one organ system can affect the whole organism.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organ", statement: "An organ is made of several tissues working together." },
              { kind: "formula", name: "Percent", statement: "$\\dfrac{\\text{part}}{\\text{whole}}\\times100$" },
              { kind: "principle", name: "Interdependence", statement: "Organ systems depend on each other for materials." },
            ],
            steps: [
              { part: "a", reasoning: "Muscle contracts to churn and mix food with acid and enzymes.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The digestive system.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the mucus mass by the sample mass.", working: "\\frac{0.5}{20}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=2.5\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Nutrients absorbed in the digestive system enter the blood.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The circulatory system transports them to all body cells, which need them for respiration and growth.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Other systems rely on the failed system's function (for example oxygen or nutrient supply).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Cells receive too little of a needed material or cannot remove waste, so homeostasis fails and cells or tissues are damaged.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Churns and mixes food (b) Digestive system (c) $2.5\\%$ (d) Nutrients enter the blood and are carried to cells (e) Other systems depend on it, so cells lack materials and homeostasis is lost.",
            commonErrors: ["In (c) giving 40 by dividing 20 by 0.5.", "In (b) naming the circulatory system."],
            examinerNote: "(e) Allow any valid example, for example heart failure reducing oxygen delivery. Allow 'peristalsis' for churning.",
          },
        },
      ],
    },
  ],
};
