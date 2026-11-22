import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ebi11-u1-lesson-1-2",
  code: "1-2",
  title: "Hormones, Blood Glucose and Temperature Control",
  goal: "I CAN describe the sources and effects of key hormones and explain how the body controls blood glucose concentration and body temperature by negative feedback.",
  standards: ["4BI1 2.86", "4BI1 2.93", "4BI1 2.94", "4BI1 2.95B"],
  vocabulary: [
    { term: "Hormone", definition: "A chemical messenger produced by an endocrine gland and carried in the blood to target organs, where it alters their activity." },
    { term: "Endocrine gland", definition: "A gland that secretes hormones directly into the bloodstream, for example the pancreas, adrenal glands, ovaries and testes." },
    { term: "Negative feedback", definition: "A control mechanism in which a change in a condition triggers a response that reverses the change and returns the condition to its normal level." },
    { term: "Glycogen", definition: "An insoluble carbohydrate made from glucose, stored in the liver and muscles." },
    { term: "Vasodilation", definition: "Widening of the arterioles supplying the skin capillaries, so more blood flows near the surface and more heat is lost." },
    { term: "Vasoconstriction", definition: "Narrowing of the arterioles supplying the skin capillaries, so less blood flows near the surface and less heat is lost." },
    { term: "Diabetes", definition: "A condition in which the blood glucose concentration cannot be controlled properly because insulin is not produced in sufficient amounts or the body does not respond to it." },
  ],
  concepts: [
    {
      id: "ebi11-u1-hormones-endocrine-system",
      title: "Hormones and the endocrine system",
      skill: "State the sources and effects of adrenaline, insulin, testosterone, oestrogen, progesterone and other hormones, and compare hormonal with nervous control.",
      lesson: {
        sections: [
          {
            heading: "Hormones and endocrine glands",
            body: "**Hormones** are chemical messengers made by **endocrine glands**. They are secreted into the blood, carried around the body and affect only their **target organs**, which have the correct receptors.\n\n| Hormone | Source | Main effects |\n| --- | --- | --- |\n| Adrenaline | Adrenal glands (above the kidneys) | Prepares the body for 'fight or flight' |\n| Insulin | Pancreas | Lowers blood glucose concentration |\n| Testosterone | Testes | Sperm production; male secondary sexual characteristics |\n| Oestrogen | Ovaries | Female secondary sexual characteristics; repair of the uterus lining |\n| Progesterone | Ovaries | Maintains the uterus lining |\n| FSH and LH | Pituitary gland | Control the ovaries and the menstrual cycle |\n| ADH | Pituitary gland | Increases water reabsorption in the kidney |\n\nThe pituitary gland, at the base of the brain, is sometimes called the 'master gland' because its hormones control other glands.",
          },
          {
            heading: "Adrenaline and comparing the two systems",
            body: "In a frightening or exciting situation the adrenal glands release **adrenaline**. Its effects are:\n\n- the **heart rate** increases and the heart beats more strongly\n- more blood flows to the muscles, and breathing rate increases\n- the **liver** converts glycogen to glucose, raising blood glucose concentration\n- the **pupils dilate**\n\nTogether these supply the muscles with more glucose and oxygen for respiration so the body can run or fight.\n\nThe nervous and hormonal systems differ:\n\n| | Nervous | Hormonal |\n| --- | --- | --- |\n| Signal | Electrical impulses (and neurotransmitters) | Chemicals (hormones) in the blood |\n| Speed | Very fast | Slower |\n| Duration | Short-lived | Longer-lasting |\n| Target | Specific muscles or glands | Can affect many target organs |",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
          { name: "Cardiac output", statement: "$\\text{cardiac output} = \\text{heart rate} \\times \\text{stroke volume}$" },
          { name: "Hormone", statement: "A chemical messenger secreted by a gland into the blood that acts on target organs" },
        ],
        workedExample: {
          problem: "After a fright, a person's heart rate rises from $75$ to $105$ beats per minute (bpm). Calculate the percentage increase.",
          solution: "Change $= 105 - 75 = 30$ bpm. Percentage increase $= \\frac{30}{75} \\times 100 = 40\\%$.",
        },
      },
      questions: [
        {
          id: "ebi11-u1-hormones-endocrine-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gland secretes adrenaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenal gland" },
              { id: "b", text: "Ovary" },
              { id: "c", text: "Pancreas" },
              { id: "d", text: "Pituitary gland" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adrenaline", statement: "Adrenaline is a hormone secreted by the adrenal glands, which sit above the kidneys." },
            ],
            steps: [
              { reasoning: "The adrenal glands release adrenaline. The pancreas makes insulin and the pituitary makes ADH, FSH and LH.", working: "\\text{adrenal gland}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Adrenal gland",
            commonErrors: ["Choosing the pituitary because it is called the 'master gland'.", "Choosing the pancreas, which secretes insulin."],
            examinerNote: "B1 for adrenal gland.",
          },
        },
        {
          id: "ebi11-u1-hormones-endocrine-system-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "When a student is startled, adrenaline raises her heart rate from $72$ beats per minute to $108$ beats per minute. Calculate the percentage increase in her heart rate.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 50, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the change and divide by the original (resting) value.", working: "\\frac{108 - 72}{72} \\times 100 = \\frac{36}{72} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Dividing by the new value: $\\frac{36}{108} \\times 100 = 33\\%$.", "Giving the change, 36, as the answer."],
            examinerNote: "M1 for $36 \\div 72$ (oe). A1 for 50. Reject 33.",
          },
        },
        {
          id: "ebi11-u1-hormones-endocrine-system-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The volume of blood pumped out of the heart each minute is the cardiac output, calculated as heart rate $\\times$ stroke volume (the volume pumped per beat). At rest a man has a heart rate of $72$ beats per minute and a stroke volume of $70\\text{ cm}^3$. After adrenaline is released, his heart rate is $108$ beats per minute and his stroke volume is $80\\text{ cm}^3$. Calculate the increase in cardiac output. Give your answer in $\\text{cm}^3$ per minute.",
          response: { type: "numeric", parts: [{ label: "Increase in cardiac output", answer: 3600, unit: "cm³ per minute" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cardiac output", statement: "$\\text{cardiac output} = \\text{heart rate} \\times \\text{stroke volume}$" },
            ],
            steps: [
              { reasoning: "Calculate the cardiac output at rest and after adrenaline.", working: "72 \\times 70 = 5040\\text{ cm}^3/\\text{min},\\quad 108 \\times 80 = 8640\\text{ cm}^3/\\text{min}", marks: 1, markCode: "M" },
              { reasoning: "Subtract to find the increase.", working: "8640 - 5040", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "3600\\text{ cm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3600\\text{ cm}^3$ per minute",
            commonErrors: ["Giving the new cardiac output, 8640, rather than the increase.", "Multiplying the increase in heart rate (36) by the increase in stroke volume (10)."],
            examinerNote: "M1 for either correct cardiac output. M1 for subtraction, allow ecf. A1 cao. Allow 3.6 dm$^3$ per minute.",
          },
        },
        {
          id: "ebi11-u1-hormones-endocrine-system-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is about to take part in a race. As she waits at the start line, her adrenal glands release adrenaline. Her resting heart rate is $60$ beats per minute and it rises to $96$ beats per minute at the start line.",
          parts: [
            { label: "a", prompt: "Name the structure that carries adrenaline from the adrenal glands to its target organs.", marks: 1 },
            { label: "b", prompt: "Describe two effects of adrenaline on the body that would help the student in the race.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage increase in her heart rate.", marks: 2 },
            { label: "d", prompt: "Compare the way the nervous system and hormones transmit information.", marks: 2 },
            { label: "e", prompt: "The effects of adrenaline last for several minutes, but the withdrawal reflex of a hand from a hot object lasts less than a second. Explain this difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hormone", statement: "A hormone is a chemical messenger carried in the blood that acts on target organs." },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Hormones are transported in the blood.", working: "\\text{blood (plasma)}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any two from: heart rate increases; breathing rate increases; more blood to muscles; liver releases glucose (glycogen converted to glucose); pupils dilate.", marks: 2, markCode: "B" },
              { part: "c", reasoning: "Divide the increase by the resting heart rate.", working: "\\frac{96 - 60}{60} \\times 100 = \\frac{36}{60} \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "60\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Nervous system uses electrical impulses along neurones; hormones are chemicals carried in the blood.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Nervous transmission is faster, and acts on specific targets; hormonal action is slower and can affect many organs.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Adrenaline stays in the blood and is only slowly broken down or removed, so its effects continue.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Nervous impulses are short-lived and stop as soon as the stimulus stops, and neurotransmitter is quickly removed from the synapse.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Blood (b) e.g. heart rate increases and the liver releases glucose (c) $60\\%$ (d) electrical vs chemical; fast vs slower, specific vs widespread (e) hormones remain in the blood and are broken down slowly; nerve impulses are short-lived",
            commonErrors: ["Dividing by 96 to give 37.5%.", "Saying that adrenaline is carried in the nerves.", "Describing effects of insulin instead of adrenaline."],
            examinerNote: "In (b) reject 'gives energy' without detail. Allow 'increases blood glucose' for a mark. In (d) a comparison must refer to both systems for each mark. In (e) allow 'hormones travel in the blood which takes longer to clear' oe.",
          },
        },
      ],
    },
    {
      id: "ebi11-u1-blood-glucose-thermoregulation",
      title: "Blood glucose control and thermoregulation",
      skill: "Explain how insulin and negative feedback control blood glucose, and how the skin and brain regulate body temperature.",
      lesson: {
        sections: [
          {
            heading: "Controlling blood glucose",
            body: "The normal blood glucose concentration is kept within narrow limits. After a meal, glucose is absorbed and the concentration rises. The **pancreas** detects this and secretes **insulin** into the blood. Insulin:\n\n- causes the **liver** (and muscles) to convert glucose into the storage carbohydrate **glycogen**\n- causes body cells to take up more glucose from the blood\n\nSo the blood glucose concentration falls back to normal. This is **negative feedback**: a change is detected and a response reverses it. When glucose is low, glycogen in the liver is converted back to glucose and released.\n\nIn **diabetes** blood glucose control fails. In **type 1 diabetes** the pancreas does not make enough insulin, so glucose stays high after meals. It is treated with **insulin injections** (insulin is a protein, so it would be digested if swallowed) and by controlling the carbohydrate in the diet. In **type 2 diabetes** the body cells stop responding properly to insulin, and it is managed by a careful diet and regular exercise.",
          },
          {
            heading: "Controlling body temperature",
            body: "The core body temperature is kept near $37^\\circ\\text{C}$, the temperature at which enzymes work best. Temperature receptors in the **brain (hypothalamus)** monitor the blood temperature, and receptors in the **skin** monitor the surroundings.\n\n**When too hot:**\n\n- **sweat glands** release more sweat; as it **evaporates** it transfers energy from the skin, cooling it\n- **vasodilation**: the arterioles supplying the skin capillaries widen, more blood flows near the surface and more heat is lost by radiation\n\n**When too cold:**\n\n- **vasoconstriction**: the arterioles narrow, less blood flows near the surface and less heat is lost\n- sweating stops, and **shivering** (rapid muscle contractions) releases heat from respiration\n\nNote that capillaries and blood vessels do not move up or down. It is the arterioles that widen or narrow.",
          },
        ],
        keyFormulas: [
          { name: "Insulin", statement: "Blood glucose too high $\\rightarrow$ pancreas secretes insulin $\\rightarrow$ liver converts glucose to glycogen, cells take up glucose $\\rightarrow$ glucose falls" },
          { name: "Rate of change", statement: "$\\text{rate} = \\frac{\\text{change in concentration}}{\\text{time}}$" },
          { name: "Too hot", statement: "Sweating increases, vasodilation" },
          { name: "Too cold", statement: "Vasoconstriction, shivering, sweating stops" },
        ],
        workedExample: {
          problem: "After a meal, the blood glucose concentration is $160\\text{ mg per }100\\text{ cm}^3$. Forty minutes later it has fallen to $100\\text{ mg per }100\\text{ cm}^3$. Calculate the mean rate of fall.",
          solution: "Fall $= 160 - 100 = 60$. Rate $= \\frac{60}{40} = 1.5\\text{ mg per }100\\text{ cm}^3$ per minute.",
        },
      },
      questions: [
        {
          id: "ebi11-u1-blood-glucose-thermoregulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change helps to cool the body when the core temperature rises above normal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shivering" },
              { id: "b", text: "Skin capillaries moving closer to the surface" },
              { id: "c", text: "Vasodilation of the arterioles in the skin" },
              { id: "d", text: "Vasoconstriction of the arterioles in the skin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vasodilation", statement: "Widening of skin arterioles increases blood flow near the surface so more heat is lost by radiation." },
            ],
            steps: [
              { reasoning: "Vasodilation lets more blood flow to the skin surface, so more heat is lost. Vasoconstriction and shivering conserve or generate heat.", working: "\\text{vasodilation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Vasodilation of the arterioles in the skin",
            commonErrors: ["Choosing (d): capillaries do not move; the blood flow changes.", "Choosing (a), which reduces blood flow to the skin to keep heat in."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ebi11-u1-blood-glucose-thermoregulation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A woman's blood glucose concentration is $150\\text{ mg per }100\\text{ cm}^3$ one hour after a meal. By 40 minutes later it has fallen to $100\\text{ mg per }100\\text{ cm}^3$. Calculate the mean rate at which her blood glucose concentration fell. Give your answer in mg per $100\\text{ cm}^3$ per minute.",
          response: { type: "numeric", parts: [{ label: "Mean rate of fall", answer: 1.25, tolerance: 0.01, unit: "mg per 100 cm³ per minute" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate} = \\frac{\\text{change}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Find the fall in concentration and divide by the time in minutes.", working: "\\frac{150 - 100}{40} = \\frac{50}{40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1.25\\text{ mg per }100\\text{ cm}^3\\text{ per min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.25\\text{ mg per }100\\text{ cm}^3$ per minute",
            commonErrors: ["Using 60 minutes instead of 40.", "Dividing 40 by 50 to get 0.8."],
            examinerNote: "M1 for $50 \\div 40$. A1 for 1.25. Allow 1.3 only with 1.25 seen.",
          },
        },
        {
          id: "ebi11-u1-blood-glucose-thermoregulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A runner's core temperature rises on a hot day. Explain how the skin helps to reduce her core temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A rise in temperature is detected and responses are triggered that reduce it, restoring $37^\\circ\\text{C}$." },
            ],
            steps: [
              { reasoning: "Sweat glands release more sweat onto the skin surface.", marks: 1, markCode: "B" },
              { reasoning: "Evaporation of the sweat transfers energy from the skin, cooling it.", marks: 1, markCode: "B" },
              { reasoning: "Vasodilation: the arterioles supplying the skin capillaries widen.", marks: 1, markCode: "B" },
              { reasoning: "More blood flows near the surface of the skin, so more heat is lost to the surroundings by radiation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More sweat evaporates and removes heat; arterioles in the skin dilate so more blood flows near the surface and more heat is radiated.",
            commonErrors: ["Saying the capillaries or blood vessels move closer to the skin surface.", "Saying that sweating itself cools the skin (it is the evaporation that does this).", "Referring to hairs lying flat as a main cooling mechanism."],
            examinerNote: "Reject 'blood vessels move'. Allow 'blood vessels dilate' only if arterioles or 'vessels supplying the skin' are implied. Ignore 'pores open'.",
          },
        },
        {
          id: "ebi11-u1-blood-glucose-thermoregulation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A person with type 1 diabetes eats a meal containing carbohydrate. Her blood glucose concentration is $90\\text{ mg per }100\\text{ cm}^3$ before the meal and rises to $240\\text{ mg per }100\\text{ cm}^3$ two hours afterwards because she has not yet injected insulin. After she injects insulin it falls back to $90\\text{ mg per }100\\text{ cm}^3$.",
          parts: [
            { label: "a", prompt: "Name the organ that normally produces insulin.", marks: 1 },
            { label: "b", prompt: "Explain how insulin lowers the blood glucose concentration.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage increase in blood glucose concentration before the insulin injection. Give your answer to the nearest whole number.", marks: 2 },
            { label: "d", prompt: "Explain why this person has to inject insulin rather than swallowing it in a tablet.", marks: 2 },
            { label: "e", prompt: "Describe how negative feedback keeps the blood glucose concentration of a person without diabetes within narrow limits.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A change is detected and a response is triggered that returns the condition to its normal level." },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Insulin is produced by the pancreas.", working: "\\text{pancreas}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Insulin causes the liver to convert glucose into glycogen (for storage).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It causes body cells (such as muscle) to take up more glucose from the blood.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Find the increase and divide by the original concentration.", working: "\\frac{240 - 90}{90} \\times 100 = \\frac{150}{90} \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round.", working: "166.67\\ldots \\approx 167\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Insulin is a protein.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "If swallowed it would be digested by protease enzymes in the stomach and small intestine, so it would not reach the blood intact.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "When blood glucose rises, the pancreas detects it and releases insulin, which lowers the glucose concentration.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "When blood glucose falls too low, insulin release decreases (and glycogen is converted back to glucose), so the concentration rises again towards normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Pancreas (b) liver converts glucose to glycogen; cells take up glucose (c) $167\\%$ (d) insulin is a protein and would be digested (e) a rise is detected, insulin is released and lowers glucose; a fall reverses the response",
            commonErrors: ["Dividing by 240 to give 63%.", "Saying insulin converts glycogen to glucose (that raises blood glucose).", "Saying insulin is 'destroyed by stomach acid' without reference to digestion of a protein."],
            examinerNote: "In (c) allow 166.7 or 167. Reject 63. In (d) allow 'broken down by enzymes' for the second mark if protein is given. In (e) allow ecf for describing only a rise or a fall if both marks are not earned.",
          },
        },
      ],
    },
  ],
};
