import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cieb-u7-lesson-7-2",
  code: "7-2",
  title: "Hormones and Plant Responses",
  goal: "I CAN describe the endocrine system, key hormones, and plant responses to stimuli (tropisms and auxin).",
  standards: ["0653 7.2", "0653 7.3"],
  vocabulary: [
    { term: "Hormone", definition: "Chemical messenger produced by endocrine glands, transported in blood." },
    { term: "Endocrine gland", definition: "Ductless gland that secretes hormones directly into blood." },
    { term: "Adrenaline", definition: "Hormone from adrenal glands; 'fight or flight' response." },
    { term: "Thyroxine", definition: "Hormone from thyroid; controls metabolic rate." },
    { term: "Tropism", definition: "Directional growth response of a plant to a stimulus." },
    { term: "Phototropism", definition: "Growth response to light — shoots grow toward light." },
    { term: "Gravitropism", definition: "Growth response to gravity — roots grow down, shoots up." },
    { term: "Auxin", definition: "Plant hormone promoting cell elongation; uneven distribution causes bending." },
  ],
  concepts: [
    {
      id: "cieb-u7-hormones",
      title: "Hormonal coordination",
      skill: "Describe the endocrine system and the roles of key hormones.",
      lesson: {
        sections: [
          {
            heading: "Endocrine system",
            body: "Hormones are chemical messengers secreted by **ductless glands** directly into the blood. They travel to **target organs** with specific receptors. Slower but longer-lasting than nervous impulses.",
          },
          {
            heading: "Key hormones",
            body: "| Hormone | Gland | Function |\n|---|---|---|\n| Insulin | pancreas | lowers blood glucose |\n| Glucagon | pancreas | raises blood glucose |\n| Adrenaline | adrenal | fight-or-flight response |\n| Thyroxine | thyroid | metabolic rate |\n| ADH | pituitary | water balance |\n| Oestrogen/testosterone | ovaries/testes | reproduction |",
          },
          {
            heading: "Adrenaline",
            body: "Released in stress/danger: increases heart rate, breathing rate, blood glucose — prepares body for action ('fight or flight').",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do hormones differ from nerve impulses?",
          solution: "Hormones travel in blood to target organs (slow, widespread, long-lasting); nerve impulses travel along neurons (fast, specific, short-lived).",
        },
      },
      questions: [
        {
          id: "cieb-u7-hormones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gland produces adrenaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenal gland" },
              { id: "b", text: "Pituitary" },
              { id: "c", text: "Pancreas" },
              { id: "d", text: "Thyroid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline", statement: "From adrenal glands; fight-or-flight." },
            ],
            steps: [
              { reasoning: "Match gland to hormone.", working: "\\text{adrenal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Adrenal gland",
            commonErrors: ["Choosing thyroid — that's thyroxine."],
          },
        },
        {
          id: "cieb-u7-hormones-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between hormonal and nervous coordination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Hormonal vs nervous", statement: "Hormones: blood-borne, slow, widespread, long-lasting. Nerves: neurons, fast, specific." },
            ],
            steps: [
              { reasoning: "Give two differences.", working: "\\text{speed, route, duration}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hormones travel in blood (slow, widespread, long-lasting); nerve impulses travel along neurons (fast, specific, short-lived).",
            commonErrors: ["Saying hormones are faster — they're slower but longer-lasting."],
          },
        },
        {
          id: "cieb-u7-hormones-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how adrenaline prepares the body for 'fight or flight'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline", statement: "Increases heart rate, breathing, blood glucose for quick energy." },
            ],
            steps: [
              { reasoning: "Increases heart rate → more O₂/glucose delivery.", working: "\\text{heart rate}", marks: 1, markCode: "M" },
              { reasoning: "Increases breathing rate → more O₂ intake.", working: "\\text{breathing}", marks: 1, markCode: "M" },
              { reasoning: "Raises blood glucose → more energy available.", working: "\\text{glucose}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: prepares for action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adrenaline increases heart rate, breathing rate and blood glucose, delivering more oxygen and energy to muscles for rapid action.",
            commonErrors: ["Saying it 'calms' the body — it's the opposite."],
          },
        },
        {
          id: "cieb-u7-hormones-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare nervous and hormonal coordination.",
          parts: [
            { label: "a", prompt: "State the route each uses to reach target cells.", marks: 2 },
            { label: "b", prompt: "Compare speed of response.", marks: 2 },
            { label: "c", prompt: "Compare duration of response.", marks: 2 },
            { label: "d", prompt: "Give one example of each system.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Coordination comparison", statement: "Nervous: neurons, fast, brief. Hormonal: blood, slow, long-lasting." },
            ],
            steps: [
              { part: "a", reasoning: "Nervous route: neurons/synapses.", working: "\\text{neurons}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hormonal route: bloodstream.", working: "\\text{blood}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nervous: fast.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hormonal: slow.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nervous: brief.", working: "\\text{brief}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hormonal: long-lasting.", working: "\\text{long-lasting}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Nervous example: reflex/withdrawal.", working: "\\text{reflex}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Hormonal example: insulin/adrenaline.", working: "\\text{insulin}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) neurons vs blood (b) fast vs slow (c) brief vs long-lasting (d) reflex vs insulin",
            commonErrors: ["In (d) giving same example for both — need one of each."],
          },
        },
        {
          id: "cieb-u7-hormones-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone is produced by the thyroid gland?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thyroxine" },
              { id: "b", text: "Progesterone" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Thyroxine", statement: "Produced by the thyroid gland; controls metabolic rate." },
            ],
            steps: [
              { reasoning: "Match gland to hormone.", working: "\\text{thyroid} \\to \\text{thyroxine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Thyroxine",
            commonErrors: ["Choosing insulin — that's produced by the pancreas."],
          },
        },
        {
          id: "cieb-u7-hormones-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'target organ' and explain how a hormone reaches it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Target organ", statement: "Organ with cells carrying specific receptors for a hormone." },
            ],
            steps: [
              { reasoning: "Define target organ.", working: "\\text{organ with receptors}", marks: 1, markCode: "M" },
              { reasoning: "Hormone travels in blood to it.", working: "\\text{bloodstream}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A target organ is an organ whose cells carry specific receptors for a hormone; the hormone travels to it in the bloodstream.",
            commonErrors: ["Saying hormones 'diffuse through tissue' — they travel in the blood."],
          },
        },
        {
          id: "cieb-u7-hormones-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Adrenaline increases a person's heart rate from 70 to 98 beats per minute. Calculate the percentage increase.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ increase} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{98 - 70}{70} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Dividing by the new value (98) instead of the original (70)."],
          },
        },
        {
          id: "cieb-u7-hormones-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hormones are transported around the body in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air" },
              { id: "b", text: "Blood" },
              { id: "c", text: "Nerve fibres" },
              { id: "d", text: "Lymph only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hormone transport", statement: "Endocrine glands secrete hormones directly into the blood." },
            ],
            steps: [
              { reasoning: "Recall the transport medium.", working: "\\text{blood}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Blood",
            commonErrors: ["Choosing nerve fibres — that's nervous transmission, not hormonal."],
          },
        },
        {
          id: "cieb-u7-hormones-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how insulin and glucagon work together to control blood glucose concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucose regulation", statement: "Insulin lowers glucose; glucagon raises it — negative feedback." },
            ],
            steps: [
              { reasoning: "Insulin released when glucose rises; lowers it.", working: "\\text{insulin lowers}", marks: 1, markCode: "M" },
              { reasoning: "Glucagon released when glucose falls; raises it.", working: "\\text{glucagon raises}", marks: 1, markCode: "M" },
              { reasoning: "Both act on liver/muscle cells via blood.", working: "\\text{target cells}", marks: 1, markCode: "M" },
              { reasoning: "Maintains steady blood glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insulin lowers blood glucose when it rises too high; glucagon raises it when it falls too low — together they keep blood glucose steady.",
            commonErrors: ["Saying both lower glucose — glucagon does the opposite."],
          },
        },
        {
          id: "cieb-u7-hormones-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student's blood glucose concentration rises from 5.0 mmol/L to 9.0 mmol/L after a meal. Calculate the increase in blood glucose.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "mmol/L" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Change", statement: "$\\text{increase} = \\text{final} - \\text{initial}$" },
            ],
            steps: [
              { reasoning: "Subtract the initial value from the final value.", working: "9.0 - 5.0", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", working: "4.0\\,\\text{mmol/L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.0 mmol/L",
            commonErrors: ["Dividing instead of subtracting, or giving the final value not the increase."],
          },
        },
        {
          id: "cieb-u7-hormones-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gland produces both insulin and glucagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pancreas" },
              { id: "b", text: "Thyroid" },
              { id: "c", text: "Pituitary" },
              { id: "d", text: "Adrenal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pancreas", statement: "Produces insulin and glucagon to control blood glucose." },
            ],
            steps: [
              { reasoning: "Match gland to hormone.", working: "\\text{pancreas}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pancreas",
            commonErrors: ["Choosing thyroid — that's thyroxine."],
          },
        },
        {
          id: "cieb-u7-hormones-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "During exercise a person's breathing rate increases from 15 to 24 breaths per minute. Calculate the increase in breathing rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9, unit: "breaths/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Change", statement: "$\\text{increase} = \\text{final} - \\text{initial}$" },
            ],
            steps: [
              { reasoning: "Subtract the initial value from the final value.", working: "24 - 15", marks: 1, markCode: "M" },
            ],
            finalAnswer: "9 breaths per minute",
            commonErrors: ["Giving the new rate (24) instead of the increase (9)."],
          },
        },
        {
          id: "cieb-u7-hormones-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of ADH (antidiuretic hormone) in controlling water balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH", statement: "From pituitary; increases water reabsorption in kidneys when body is dehydrated." },
            ],
            steps: [
              { reasoning: "ADH secreted by pituitary into blood.", working: "\\text{pituitary}", marks: 1, markCode: "M" },
              { reasoning: "Acts on kidney tubules to reabsorb more water.", working: "\\text{kidney reabsorption}", marks: 1, markCode: "M" },
              { reasoning: "Produces concentrated urine / less water loss.", working: "\\text{concentrated urine}", marks: 1, markCode: "M" },
              { reasoning: "Restores water balance when dehydrated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ADH from the pituitary increases reabsorption of water in the kidneys, producing concentrated urine and reducing water loss when the body is dehydrated.",
            commonErrors: ["Saying ADH 'makes you drink water' — it acts on the kidneys."],
          },
        },
        {
          id: "cieb-u7-hormones-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's resting heart rate is 60 beats per minute. During a stressful event adrenaline increases it by 30%. Calculate the new heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 78, unit: "beats/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\text{new} = \\text{old} \\times \\left(1 + \\dfrac{30}{100}\\right)$" },
            ],
            steps: [
              { reasoning: "Calculate 30% of 60 and add it.", working: "60 + 0.30 \\times 60 = 60 + 18", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", working: "78\\,\\text{beats/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "78 beats per minute",
            commonErrors: ["Calculating 30% of 60 as the answer itself (18) instead of adding it."],
          },
        },
        {
          id: "cieb-u7-hormones-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the speed and duration of a nervous response with a hormonal response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Response comparison", statement: "Nervous: fast, brief. Hormonal: slow to start, long-lasting." },
            ],
            steps: [
              { reasoning: "Nervous response is fast.", working: "\\text{nervous fast}", marks: 1, markCode: "M" },
              { reasoning: "Hormonal response is slower.", working: "\\text{hormonal slow}", marks: 1, markCode: "M" },
              { reasoning: "Nervous brief; hormonal long-lasting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nervous responses are fast but short-lived; hormonal responses are slower to begin but last longer because hormones persist in the blood.",
            commonErrors: ["Saying hormonal is 'faster' — it's slower but longer-lasting."],
          },
        },
        {
          id: "cieb-u7-hormones-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student experiences a sudden fright (e.g. a loud bang) and their heart rate increases.",
          parts: [
            { label: "a", prompt: "Name the hormone responsible for the increased heart rate.", marks: 2 },
            { label: "b", prompt: "State two other effects of this hormone on the body.", marks: 2 },
            { label: "c", prompt: "Explain how the hormone reaches its target organ.", marks: 2 },
            { label: "d", prompt: "Compare this hormonal response with a nervous response to the same stimulus.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline response", statement: "Adrenaline in blood → fast heart/breathing/glucose; slower but longer-lasting than nerves." },
            ],
            steps: [
              { part: "a", reasoning: "Adrenaline.", working: "\\text{adrenaline}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Released by adrenal glands.", working: "\\text{adrenal glands}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Increases breathing rate.", working: "\\text{breathing}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Raises blood glucose.", working: "\\text{glucose}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Secreted into bloodstream.", working: "\\text{bloodstream}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Travels to target organs with receptors.", working: "\\text{target organs}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Nervous: faster, specific, brief.", working: "\\text{nervous fast/brief}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Hormonal: slower, widespread, long-lasting.", working: "\\text{hormonal slow/long}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) adrenaline (b) increased breathing rate, raised blood glucose (c) travels in blood to target organs (d) nervous faster/brief; hormonal slower/long-lasting",
            commonErrors: ["In (d) saying one is 'better' — they work together; nerves are fast, hormones sustain."],
          },
        },
      ],
    },
    {
      id: "cieb-u7-plant-responses",
      title: "Plant responses",
      skill: "Describe tropisms and explain how auxin causes directional growth.",
      lesson: {
        sections: [
          {
            heading: "Tropisms",
            body: "Directional growth responses to stimuli:\n- **Phototropism**: shoots grow toward light (positive), roots away (negative).\n- **Gravitropism**: roots grow down (positive), shoots up (negative).\n- **Thigmotropism**: response to touch (e.g. tendrils coiling).",
          },
          {
            heading: "Auxin mechanism",
            body: "Auxin is produced in shoot tips and transported down. Uneven distribution causes **differential cell elongation**:\n- **Phototropism**: auxin accumulates on shaded side → more elongation there → shoot bends toward light.\n- **Gravitropism**: auxin accumulates on lower side → roots (sensitive) bend down, shoots bend up.",
          },
          {
            heading: "Why plants respond",
            body: "Plants can't move — they grow toward favourable conditions (light, water, gravity) and away from harmful ones.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a shoot bend toward a light source?",
          solution: "Auxin accumulates on the shaded side, causing more cell elongation there → the shoot bends toward the light.",
        },
      },
      questions: [
        {
          id: "cieb-u7-plant-responses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tropism describes growth toward light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thigmotropism" },
              { id: "b", text: "Phototropism" },
              { id: "c", text: "Gravitropism" },
              { id: "d", text: "Hydrotropism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phototropism", statement: "Growth response to light." },
            ],
            steps: [
              { reasoning: "Match stimulus to tropism.", working: "\\text{light} \\to \\text{phototropism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Phototropism",
            commonErrors: ["Choosing gravitropism — that's response to gravity."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'tropism' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tropism", statement: "Directional growth response to a stimulus." },
            ],
            steps: [
              { reasoning: "Define tropism.", working: "\\text{directional growth}", marks: 1, markCode: "M" },
              { reasoning: "Give example.", working: "\\text{phototropism/gravitropism}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A directional growth response of a plant to a stimulus — e.g. phototropism (growth toward light) or gravitropism (roots grow down).",
            commonErrors: ["Describing nastic movements (non-directional) — tropisms are directional."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how auxin causes a shoot to bend toward light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin phototropism", statement: "Auxin accumulates on shaded side → more elongation → bends toward light." },
            ],
            steps: [
              { reasoning: "Auxin produced in tip, transported down.", working: "\\text{auxin transport}", marks: 1, markCode: "M" },
              { reasoning: "Uneven distribution: more on shaded side.", working: "\\text{shaded side}", marks: 1, markCode: "M" },
              { reasoning: "More elongation on shaded side → bend toward light.", working: "\\text{differential elongation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light causes auxin to accumulate on the shaded side of the shoot; greater cell elongation on that side makes the shoot bend toward the light.",
            commonErrors: ["Saying 'auxin moves toward light' — it moves AWAY from light (accumulates on shaded side)."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates phototropism by growing seedlings with light from one side.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the result for shoots and roots.", marks: 3 },
            { label: "c", prompt: "Explain the role of auxin in producing the result.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Phototropism experiment", statement: "Light direction vs growth direction; auxin redistribution." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: light direction. Dependent: growth direction/bending.", working: "\\text{light vs growth}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shoots bend toward light (positive phototropism).", working: "\\text{shoots toward}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Roots bend away or unaffected (negative/none).", working: "\\text{roots away}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State predictions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Auxin accumulates on shaded side.", working: "\\text{auxin shaded}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More cell elongation on shaded side.", working: "\\text{more elongation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shoot bends toward light; roots respond differently to auxin.", working: "\\text{differential response}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light direction / growth direction (b) shoots toward light, roots away/unaffected (c) auxin on shaded side → differential elongation",
            commonErrors: ["In (b) predicting roots grow toward light — roots are negatively phototropic or insensitive."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tropism describes a root growing downward in response to gravity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phototropism" },
              { id: "b", text: "Positive thigmotropism" },
              { id: "c", text: "Negative phototropism" },
              { id: "d", text: "Positive gravitropism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gravitropism", statement: "Roots grow toward gravity (positive); shoots grow away (negative)." },
            ],
            steps: [
              { reasoning: "Match stimulus and direction.", working: "\\text{gravity, downward}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Positive gravitropism",
            commonErrors: ["Choosing phototropism — that's a response to light."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define gravitropism and state the direction of growth of roots and shoots in response to gravity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravitropism", statement: "Growth response to gravity; roots down, shoots up." },
            ],
            steps: [
              { reasoning: "Define gravitropism.", working: "\\text{response to gravity}", marks: 1, markCode: "M" },
              { reasoning: "Roots down, shoots up.", working: "\\text{roots down, shoots up}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravitropism is a directional growth response to gravity: roots grow downward (positive) and shoots grow upward (negative).",
            commonErrors: ["Saying shoots grow toward gravity — they grow away from it."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shoot bends through an angle of 30° over 6 hours when light is shone from one side. Calculate the average rate of bending in degrees per hour.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "°/hour" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{angle}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the angle by the time.", working: "\\frac{30}{6}", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", working: "5\\,^{\\circ}\\text{/hour}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5° per hour",
            commonErrors: ["Multiplying instead of dividing, or forgetting units."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Auxin is mainly produced in which part of a plant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shoot tip (growing regions)" },
              { id: "b", text: "The soil" },
              { id: "c", text: "The roots only" },
              { id: "d", text: "The flowers only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin", statement: "Plant hormone produced in shoot tips and transported down." },
            ],
            steps: [
              { reasoning: "Recall where auxin is made.", working: "\\text{shoot tip}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The shoot tip (growing regions)",
            commonErrors: ["Choosing roots — auxin is made in shoot tips and acts on roots."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how auxin causes a root to grow downward in response to gravity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin gravitropism", statement: "Auxin accumulates on lower side; roots are more sensitive so elongation is inhibited → bend down." },
            ],
            steps: [
              { reasoning: "Auxin accumulates on the lower side of the root.", working: "\\text{lower side}", marks: 1, markCode: "M" },
              { reasoning: "High auxin INHIBITS elongation in roots (unlike shoots).", working: "\\text{inhibits elongation}", marks: 1, markCode: "M" },
              { reasoning: "Upper side elongates more → root bends down.", working: "\\text{bends down}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: positive gravitropism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Auxin accumulates on the lower side of the root where it inhibits cell elongation; the upper side elongates more, so the root bends downward — positive gravitropism.",
            commonErrors: ["Saying high auxin 'speeds up' root growth — it inhibits it."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shoot and a root start growing from the same point in opposite directions. The shoot grows 5 mm per day and the root grows 2 mm per day. Calculate the distance between the shoot tip and root tip after 10 days.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth", statement: "$\\text{distance} = (\\text{rate}_{\\text{shoot}} + \\text{rate}_{\\text{root}}) \\times \\text{time}$" },
            ],
            steps: [
              { reasoning: "Add the two growth rates and multiply by time.", working: "(5 + 2) \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", working: "70\\,\\text{mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70 mm",
            commonErrors: ["Using only one growth rate, or forgetting they grow in opposite directions (so rates add)."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Thigmotropism is a growth response of a plant to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "Light" },
              { id: "c", text: "Touch or contact" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thigmotropism", statement: "Directional growth response to touch (e.g. tendrils coiling)." },
            ],
            steps: [
              { reasoning: "Match stimulus to tropism.", working: "\\text{touch}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Touch or contact",
            commonErrors: ["Choosing light — that's phototropism."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "During phototropism, auxin accumulates on which side of the shoot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The side facing the light" },
              { id: "b", text: "The shaded side" },
              { id: "c", text: "The bottom of the shoot only" },
              { id: "d", text: "It is evenly distributed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin phototropism", statement: "Auxin accumulates on the shaded side → more elongation → bends toward light." },
            ],
            steps: [
              { reasoning: "Recall auxin distribution.", working: "\\text{shaded side}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The shaded side",
            commonErrors: ["Choosing the lit side — auxin moves AWAY from light."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why shoots and roots respond differently to auxin when gravity acts on a plant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Differential auxin response", statement: "High auxin stimulates shoot elongation but inhibits root elongation → opposite bending." },
            ],
            steps: [
              { reasoning: "Auxin accumulates on lower side in both.", working: "\\text{lower side}", marks: 1, markCode: "M" },
              { reasoning: "In shoots, high auxin stimulates elongation → bend up.", working: "\\text{shoot: stimulates}", marks: 1, markCode: "M" },
              { reasoning: "In roots, high auxin inhibits elongation → bend down.", working: "\\text{root: inhibits}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: same hormone, opposite effects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Auxin accumulates on the lower side in both organs, but shoots are stimulated to elongate (bending up) while roots are inhibited (bending down) — the same hormone produces opposite responses.",
            commonErrors: ["Saying auxin 'doesn't affect roots' — it inhibits their elongation."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A seedling bends 20° toward a light source. When the shoot tip is covered with opaque foil, it bends only 10°. Calculate the percentage reduction in bending.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ reduction} = \\dfrac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{20 - 10}{20} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by 10 instead of the original 20."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe a simple experiment to test whether a shoot grows toward light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Phototropism experiment", statement: "Unilateral light vs dark control; measure bending; keep other variables constant." },
            ],
            steps: [
              { reasoning: "Independent variable: direction of light; dependent: growth direction/bending.", working: "\\text{light vs bending}", marks: 1, markCode: "M" },
              { reasoning: "Method: seedlings with light from one side + dark control.", working: "\\text{one-sided light}", marks: 1, markCode: "M" },
              { reasoning: "Prediction: shoots bend toward light; roots less affected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grow seedlings with light from one direction and others in darkness; keep other conditions constant. Predict that lit seedlings bend their shoots toward the light while control seedlings grow straight.",
            commonErrors: ["Not including a control (dark) group, or changing more than one variable."],
          },
        },
        {
          id: "cieb-u7-plant-responses-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates how a pea seedling responds to unilateral light by measuring the bending angle of shoots.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the results for shoots and roots.", marks: 3 },
            { label: "c", prompt: "Explain the role of auxin in producing these results.", marks: 2 },
            { label: "d", prompt: "State one improvement to make the experiment more reliable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Phototropism investigation", statement: "Light direction vs bending; auxin redistribution; control variables." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: light direction/presence.", working: "\\text{light direction}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent: bending angle/growth direction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shoot bends toward light.", working: "\\text{shoot toward}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Roots bend away or unaffected.", working: "\\text{roots away}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dark control grows straight.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Auxin accumulates on shaded side.", working: "\\text{auxin shaded}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More elongation there → bend toward light.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use several seedlings/repeats and average.", working: "\\text{repeats}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State an improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light direction / bending angle (b) shoots toward light, roots away, dark control straight (c) auxin on shaded side → differential elongation (d) repeats/averages",
            commonErrors: ["In (d) suggesting changing the light source type — that introduces a new variable."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u7-coordination-notes",
      title: "Coordination and response — revision notes",
      summary: "Hormones, endocrine glands, tropisms and auxin.",
      sections: [
        {
          heading: "Hormones",
          body: "Endocrine glands → blood → target organs. Adrenaline (fight-or-flight), thyroxine (metabolic rate), insulin/glucagon (glucose), ADH (water). Slow, widespread, long-lasting vs nervous fast/specific.",
        },
        {
          heading: "Plant responses",
          body: "Tropisms: phototropism (light), gravitropism (gravity), thigmotropism (touch). Auxin on shaded/lower side → more elongation → directional bending.",
        },
        {
          heading: "Exam technique",
          body: "- Hormone questions: name gland + hormone + target + effect.\n- Auxin: always mention 'shaded side' and 'differential elongation'.\n- Adrenaline: increases heart rate, breathing, blood glucose for action.",
        },
      ],
    },
  ],
};
