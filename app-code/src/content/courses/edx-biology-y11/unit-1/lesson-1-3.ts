import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ebi11-u1-lesson-1-3",
  code: "1-3",
  title: "Plant Responses and Homeostasis",
  goal: "I CAN explain how auxin controls phototropism and gravitropism in plants, and apply the idea of homeostasis and negative feedback to the control of water, glucose and temperature.",
  standards: ["4BI1 2.84", "4BI1 2.85", "4BI1 2.86", "4BI1 2.93", "4BI1 2.94", "4BI1 2.95B"],
  vocabulary: [
    { term: "Tropism", definition: "A directional growth response of part of a plant to a stimulus such as light or gravity." },
    { term: "Phototropism", definition: "Growth of a plant part in response to the direction of light. Shoots are positively phototropic (grow towards light)." },
    { term: "Gravitropism (geotropism)", definition: "Growth of a plant part in response to gravity. Roots are positively gravitropic (grow down) and shoots are negatively gravitropic (grow up)." },
    { term: "Auxin", definition: "A plant growth hormone made in the shoot tip that controls cell elongation and so the direction of growth." },
    { term: "Homeostasis", definition: "The maintenance of a constant internal environment, despite changes inside or outside the body." },
    { term: "Negative feedback", definition: "A control system in which a change is detected and a response is triggered that reverses it, returning the condition to its set level." },
    { term: "ADH", definition: "Antidiuretic hormone, released by the pituitary gland, which makes the kidney reabsorb more water and so produce less urine." },
  ],
  concepts: [
    {
      id: "ebi11-u1-plant-tropisms-auxin",
      title: "Plant tropisms and auxin",
      skill: "Describe phototropism and gravitropism, explain the role of auxin in bending, and interpret tropism experiments.",
      lesson: {
        sections: [
          {
            heading: "Tropisms",
            body: "Plants respond to their environment by changing the direction of their growth. A growth response to a directional stimulus is a **tropism**.\n\n- **Phototropism** is the response to light. Shoots grow **towards** the light (positive phototropism). This helps leaves absorb more light for photosynthesis.\n- **Gravitropism (geotropism)** is the response to gravity. **Roots** grow **downwards**, in the direction of gravity (positive gravitropism), which anchors the plant and reaches water and mineral ions. **Shoots** grow **upwards**, against gravity (negative gravitropism), which lifts the leaves towards the light.\n\nPlants do not have a nervous system. Their responses are controlled by hormones called **growth substances**, the main one being **auxin**.",
          },
          {
            heading: "How auxin causes bending",
            body: "Auxin is made in the **tip** of the shoot and diffuses down the stem. It makes cells **elongate** (grow longer) in the region behind the tip.\n\n**Phototropism in a shoot.** When light shines from one side, auxin moves to the **shaded side** of the shoot. The cells on the shaded side receive more auxin, so they **elongate more** than the cells on the lit side. The shoot therefore bends **towards the light**.\n\n**Gravitropism.** When a shoot is placed on its side, auxin collects on the **lower side**. In a shoot, more auxin makes the lower cells elongate more, so the shoot bends **upwards**. In a root, the higher auxin concentration on the lower side **inhibits** elongation, so the upper side grows faster and the root bends **downwards**.\n\nExperiments show the role of the tip: if the tip is **removed** or covered with an opaque cap, the shoot does not bend towards light. If a **transparent** cap is used, or the base is covered, it still bends, because the tip detects the light.",
          },
        ],
        keyFormulas: [
          { name: "Phototropism of a shoot", statement: "Light from one side $\\rightarrow$ auxin moves to the shaded side $\\rightarrow$ shaded cells elongate more $\\rightarrow$ shoot bends towards the light" },
          { name: "Gravitropism", statement: "Shoots: negative (grow up); roots: positive (grow down)" },
          { name: "Percentage increase", statement: "$\\text{percentage increase} = \\frac{\\text{increase in length}}{\\text{original length}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A shoot grows from $40\\text{ mm}$ to $52\\text{ mm}$ in two days. Calculate the percentage increase in length.",
          solution: "Increase $= 52 - 40 = 12\\text{ mm}$. Percentage increase $= \\frac{12}{40} \\times 100 = 30\\%$.",
        },
      },
      questions: [
        {
          id: "ebi11-u1-plant-tropisms-auxin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A seedling is placed on its side in the dark. Its root grows downwards. What is the name of this response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative phototropism" },
              { id: "b", text: "Positive phototropism" },
              { id: "c", text: "Positive gravitropism" },
              { id: "d", text: "Negative gravitropism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravitropism", statement: "Growth in response to gravity. Growth in the direction of gravity (downwards) is positive gravitropism." },
            ],
            steps: [
              { reasoning: "The stimulus is gravity (the seedling is in the dark, so light is not involved), and the root grows towards it.", working: "\\text{positive gravitropism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Positive gravitropism",
            commonErrors: ["Choosing a phototropism option although there is no light stimulus.", "Choosing negative gravitropism, which is the response of shoots (growing upwards)."],
            examinerNote: "B1 for positive gravitropism. Allow positive geotropism.",
          },
        },
        {
          id: "ebi11-u1-plant-tropisms-auxin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shoot is $25\\text{ mm}$ long at the start of an investigation. After light shines on it from one side for 24 hours, it is $31\\text{ mm}$ long. Calculate the percentage increase in the length of the shoot.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 24, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\text{percentage increase} = \\frac{\\text{increase}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the increase and divide by the original length.", working: "\\frac{31 - 25}{25} \\times 100 = \\frac{6}{25} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "24\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\%$",
            commonErrors: ["Dividing by the final length: $\\frac{6}{31} \\times 100 = 19\\%$.", "Giving 6 mm as the answer."],
            examinerNote: "M1 for $6 \\div 25$. A1 for 24. Reject 19.",
          },
        },
        {
          id: "ebi11-u1-plant-tropisms-auxin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A seedling is lit from the right only. Explain why the shoot bends towards the light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Auxin and elongation", statement: "Auxin makes shoot cells elongate. Unequal distribution of auxin gives unequal growth and so bending." },
            ],
            steps: [
              { reasoning: "Auxin is produced in the tip of the shoot.", marks: 1, markCode: "B" },
              { reasoning: "Auxin moves (diffuses) to the shaded side, away from the light.", marks: 1, markCode: "B" },
              { reasoning: "Cells on the shaded side elongate more than cells on the lit side.", marks: 1, markCode: "B" },
              { reasoning: "The unequal growth makes the shoot bend towards the light, so more light reaches the leaves for photosynthesis.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Auxin made in the tip moves to the shaded side, cells there elongate more, so the shoot bends towards the light.",
            commonErrors: ["Saying that auxin moves to the lit side.", "Saying that auxin makes cells divide rather than elongate.", "Saying the shoot 'wants' the light."],
            examinerNote: "Reject 'auxin is a nerve signal'. Allow 'grow faster' or 'grow longer' for elongate. Allow 'bends towards the light' for the final mark with a reason or consequence.",
          },
        },
        {
          id: "ebi11-u1-plant-tropisms-auxin-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates phototropism using four identical oat seedlings, each lit from the right only. The student measures the angle through which each shoot bends towards the light after 24 hours.\n\n- Seedling A: left intact\n- Seedling B: tip removed\n- Seedling C: tip covered with an opaque foil cap\n- Seedling D: base covered with foil, tip uncovered\n\nShoot A was tested three times, giving angles of $38^\\circ$, $42^\\circ$ and $40^\\circ$. Seedling B bent through $0^\\circ$, seedling C through $0^\\circ$ and seedling D through $39^\\circ$.",
          parts: [
            { label: "a", prompt: "Name the response of the shoot to light.", marks: 1 },
            { label: "b", prompt: "Calculate the mean angle of bending of seedling A.", marks: 2 },
            { label: "c", prompt: "Explain the results for seedlings B, C and D.", marks: 3 },
            { label: "d", prompt: "State two variables that the student should control.", marks: 2 },
            { label: "e", prompt: "Suggest why the shoot of seedling A would grow upwards, not sideways, if it was placed on its side in the dark.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Auxin from the tip", statement: "The tip detects light and produces auxin, which controls elongation of cells below it." },
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Growth towards light is positive phototropism.", working: "\\text{phototropism}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the three angles and divide by three.", working: "\\frac{38 + 42 + 40}{3} = \\frac{120}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "40^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "B and C do not bend because the tip is missing or covered: the tip detects the light and produces auxin.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "D bends because the tip is uncovered and can detect the light.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Auxin moves from the tip to the shaded side and makes those cells elongate more, causing bending.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any two from: light intensity; distance from the light source; age or species or initial height of seedlings; temperature; time left in the light; water supply.", marks: 2, markCode: "B" },
              { part: "e", reasoning: "Gravity makes auxin accumulate on the lower side, where it makes cells elongate more, so the shoot bends upwards (negative gravitropism).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Phototropism (b) $40^\\circ$ (c) tip detects light and produces auxin; removed or covered tip means no bending; D bends (d) e.g. light intensity and age of seedlings (e) auxin collects on the lower side and makes cells there elongate more",
            commonErrors: ["Saying that D does not bend because the base is covered.", "Saying that the foil blocks the roots.", "Giving the independent variable (position of foil) as a control variable."],
            examinerNote: "In (d) reject 'the type of foil' and 'the position of the foil'. In (e) allow 'auxin on the lower side' with elongation.",
          },
        },
      ],
    },
    {
      id: "ebi11-u1-homeostasis-summary",
      title: "Homeostasis summary",
      skill: "Apply negative feedback to the control of water, blood glucose and temperature, and analyse data about homeostasis.",
      lesson: {
        sections: [
          {
            heading: "Homeostasis and negative feedback",
            body: "**Homeostasis** is the maintenance of a constant internal environment. Cells work properly only if conditions such as temperature, water content and glucose concentration stay within narrow limits. Every homeostatic system uses **negative feedback**:\n\n1. a **receptor** detects a change away from the normal level\n2. a **coordination centre** (brain, pancreas or pituitary gland) processes the information\n3. an **effector** produces a response that **reverses the change**\n\nThe condition returns to normal, and the response switches off.\n\n| Condition | Detected by | Hormone / pathway | Response |\n| --- | --- | --- | --- |\n| Blood glucose | Pancreas | Insulin | Liver stores glucose as glycogen; cells take up glucose |\n| Body temperature | Brain and skin receptors | Nervous | Sweating, vasodilation or vasoconstriction, shivering |\n| Water content of blood | Brain | ADH from the pituitary | Kidney reabsorbs more or less water |",
          },
          {
            heading: "Water balance and ADH",
            body: "If you sweat a lot or drink too little, the water content of the blood falls. The brain detects this and the **pituitary gland** releases more **ADH** into the blood. ADH makes the walls of the **collecting ducts** in the kidney more **permeable** to water, so more water is **reabsorbed** into the blood. A **small volume of concentrated urine** is produced.\n\nIf you drink a lot of water, the blood water content rises, less ADH is released, the collecting ducts are less permeable, less water is reabsorbed and a **large volume of dilute urine** is produced. The water content of the blood returns to normal.\n\nWhen answering summary questions, always say what the **stimulus** is, what **detects** it, what the **effector** does and how the **change is reversed**.",
          },
        ],
        keyFormulas: [
          { name: "Negative feedback", statement: "Change detected $\\rightarrow$ response $\\rightarrow$ change reversed $\\rightarrow$ normal level restored" },
          { name: "Dehydration", statement: "Less water in blood $\\rightarrow$ more ADH $\\rightarrow$ more water reabsorbed $\\rightarrow$ small volume of concentrated urine" },
          { name: "Percentage decrease", statement: "$\\text{percentage decrease} = \\frac{\\text{decrease}}{\\text{original value}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A person's urine volume falls from $120\\text{ cm}^3$ to $30\\text{ cm}^3$ in an hour after exercise. Calculate the percentage decrease.",
          solution: "Decrease $= 120 - 30 = 90\\text{ cm}^3$. Percentage decrease $= \\frac{90}{120} \\times 100 = 75\\%$.",
        },
      },
      questions: [
        {
          id: "ebi11-u1-homeostasis-summary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fast, automatic response to a stimulus" },
              { id: "b", text: "The release of hormones into the blood" },
              { id: "c", text: "Keeping a constant internal environment despite changes inside or outside the body" },
              { id: "d", text: "The growth of a plant towards light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "The maintenance of a constant internal environment." },
            ],
            steps: [
              { reasoning: "Homeostasis is about keeping internal conditions such as temperature, water and glucose steady. A reflex is a fast automatic response, and plant growth to light is phototropism.", working: "\\text{(a)}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Choosing (b), which describes a reflex.", "Choosing (d), because hormones are used in homeostasis, but this is not its definition."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ebi11-u1-homeostasis-summary-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a hot day, a man loses a lot of water in sweat. His urine output falls from $1.6\\text{ dm}^3$ per day to $0.4\\text{ dm}^3$ per day. Calculate the percentage decrease in his daily urine output.",
          response: { type: "numeric", parts: [{ label: "Percentage decrease", answer: 75, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage decrease} = \\frac{\\text{decrease}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the decrease and divide by the original value.", working: "\\frac{1.6 - 0.4}{1.6} \\times 100 = \\frac{1.2}{1.6} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: ["Dividing by the final value: $\\frac{1.2}{0.4} \\times 100 = 300\\%$.", "Giving 1.2 as the answer."],
            examinerNote: "M1 for $1.2 \\div 1.6$. A1 for 75. Reject 300.",
          },
        },
        {
          id: "ebi11-u1-homeostasis-summary-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student does not drink for several hours. Explain how ADH helps to restore the water content of her blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A fall in the water content of the blood causes a response that raises it back to normal." },
            ],
            steps: [
              { reasoning: "The brain detects that the water content of the blood is too low and the pituitary gland releases more ADH into the blood.", marks: 1, markCode: "B" },
              { reasoning: "ADH makes the collecting ducts of the kidney more permeable to water.", marks: 1, markCode: "B" },
              { reasoning: "More water is reabsorbed into the blood, so a small volume of concentrated urine is produced.", marks: 1, markCode: "B" },
              { reasoning: "The water content of the blood rises back to normal and ADH release falls: negative feedback.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More ADH is released from the pituitary; the collecting ducts become more permeable; more water is reabsorbed and concentrated urine is made; blood water content returns to normal.",
            commonErrors: ["Saying that ADH is made by the kidney.", "Saying that ADH makes the kidney produce more urine.", "Saying that the kidney 'makes' water."],
            examinerNote: "Allow 'hypothalamus' for the part of the brain. Allow 'tubule' for collecting duct. Reject 'kidney becomes more permeable' without a reference to the collecting duct or tubule walls.",
          },
        },
        {
          id: "ebi11-u1-homeostasis-summary-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A cyclist rides hard for 20 minutes on a hot day and then rests. The table shows her core body temperature.\n\n| Time (min) | 0 | 10 | 20 | 30 |\n| --- | --- | --- | --- | --- |\n| Core temperature ($^\\circ\\text{C}$) | 37.0 | 38.0 | 38.6 | 37.8 |",
          parts: [
            { label: "a", prompt: "Calculate the mean rate of increase of her core temperature between 0 and 20 minutes. Give your answer in $^\\circ\\text{C}$ per minute.", marks: 2 },
            { label: "b", prompt: "Explain why her body temperature rises during exercise.", marks: 2 },
            { label: "c", prompt: "Describe two ways her body loses more heat as her temperature rises.", marks: 2 },
            { label: "d", prompt: "Explain why it is important that core body temperature does not rise much above $37^\\circ\\text{C}$.", marks: 2 },
            { label: "e", prompt: "State the name of the type of control mechanism that returns her temperature towards normal.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate} = \\frac{\\text{change}}{\\text{time}}$" },
              { kind: "principle", name: "Negative feedback", statement: "A change from the set point triggers a response that reverses it." },
            ],
            steps: [
              { part: "a", reasoning: "Find the temperature rise between 0 and 20 minutes and divide by 20 minutes.", working: "\\frac{38.6 - 37.0}{20} = \\frac{1.6}{20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.08\\,^\\circ\\text{C per min}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Muscles respire faster during exercise.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Respiration releases energy, and some of this is released as heat, which warms the body.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Increased sweating: evaporation of sweat removes heat from the skin.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Vasodilation: arterioles to the skin capillaries widen, so more blood flows near the surface and more heat is radiated.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Enzymes have an optimum temperature (about $37^\\circ\\text{C}$).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At higher temperatures enzymes may denature, so metabolic reactions slow or stop.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A rise is detected and a response reverses it.", working: "\\text{negative feedback}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.08\\,^\\circ\\text{C}$ per min (b) more respiration in muscles releases heat (c) sweating and vasodilation (d) enzymes denature above their optimum (e) negative feedback",
            commonErrors: ["Dividing by 30 minutes instead of 20.", "Saying vasodilation means that vessels move closer to the skin.", "Saying enzymes are 'killed' rather than denatured."],
            examinerNote: "In (a) allow 0.08 or 8 × 10$^{-2}$. Reject 0.053 (using 30 minutes). In (b) reject 'exercise produces heat' without reference to respiration. In (c) allow shivering stops or hairs lie flat only as a supporting idea, not for credit.",
          },
        },
      ],
    },
  ],
};
