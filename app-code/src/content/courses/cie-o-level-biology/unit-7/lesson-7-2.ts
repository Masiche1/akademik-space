import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "olbio-u7-lesson-7-2",
  code: "7-2",
  title: "Hormones and Plant Responses",
  goal: "I CAN describe the endocrine system, key hormones, and plant responses to stimuli (tropisms and auxin).",
  standards: ["5090 7.2", "5090 7.3"],
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
      id: "olbio-u7-hormones",
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
          id: "olbio-u7-hormones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gland produces adrenaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenal gland" },
              { id: "b", text: "Thyroid" },
              { id: "c", text: "Pituitary" },
              { id: "d", text: "Pancreas" },
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
          id: "olbio-u7-hormones-q2",
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
          id: "olbio-u7-hormones-q3",
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
          id: "olbio-u7-hormones-q4",
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
          id: "olbio-u7-hormones-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Glucagon" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin", statement: "Lowers blood glucose concentration." },
            ],
            steps: [
              { reasoning: "Match the hormone to its effect on glucose.", working: "\\text{insulin} \\downarrow \\text{glucose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Insulin",
            commonErrors: ["Choosing glucagon — it raises blood glucose."],
          },
        },
        {
          id: "olbio-u7-hormones-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the gland that secretes thyroxine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thyroxine", statement: "Secreted by the thyroid gland and controls metabolic rate." },
            ],
            steps: [
              { reasoning: "Name the gland.", working: "\\text{thyroid}", marks: 1, markCode: "M" },
              { reasoning: "State the hormone clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thyroxine is secreted by the thyroid gland.",
            commonErrors: ["Answering 'thyroid hormone' without naming the gland or hormone correctly."],
          },
        },
        {
          id: "olbio-u7-hormones-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes an endocrine gland?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no ducts and secretes hormones into the blood" },
              { id: "b", text: "It only produces digestive enzymes" },
              { id: "c", text: "It always secretes through a tube" },
              { id: "d", text: "It stores urine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endocrine gland", statement: "Ductless gland secreting hormones directly into the bloodstream." },
            ],
            steps: [
              { reasoning: "Recall the defining feature of endocrine glands.", working: "\\text{ductless} \\to \\text{blood}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It has no ducts and secretes hormones into the blood",
            commonErrors: ["Choosing exocrine description — endocrine glands are ductless."],
          },
        },
        {
          id: "olbio-u7-hormones-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State one effect of adrenaline on the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline", statement: "Increases heart rate, breathing rate or blood glucose for action." },
            ],
            steps: [
              { reasoning: "Give one valid effect.", working: "\\text{heart/breathing/glucose}", marks: 1, markCode: "M" },
              { reasoning: "State it clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adrenaline increases heart rate (or breathing rate or blood glucose) to prepare the body for action.",
            commonErrors: ["Saying adrenaline lowers heart rate — it raises it."],
          },
        },
        {
          id: "olbio-u7-hormones-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why hormones act only on target organs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Target organs", statement: "Only cells with complementary receptors respond to a hormone." },
            ],
            steps: [
              { reasoning: "Hormones travel throughout the blood.", working: "\\text{bloodstream}", marks: 1, markCode: "M" },
              { reasoning: "Target cells possess specific receptors.", working: "\\text{receptors}", marks: 1, markCode: "M" },
              { reasoning: "Only receptor-bearing cells respond.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hormones are carried in the blood, but only target organs with specific receptors respond to them.",
            commonErrors: ["Saying hormones only reach one organ — they circulate but only target cells respond."],
          },
        },
        {
          id: "olbio-u7-hormones-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the speed and duration of nervous and hormonal responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Nervous vs hormonal", statement: "Nervous responses are fast and brief; hormonal responses are slower and longer-lasting." },
            ],
            steps: [
              { reasoning: "Nervous impulses travel rapidly along neurons.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { reasoning: "Hormones travel in blood and act more slowly.", working: "\\text{slow}", marks: 1, markCode: "M" },
              { reasoning: "Nervous responses are usually short-lived.", working: "\\text{brief}", marks: 1, markCode: "M" },
              { reasoning: "Hormonal effects may persist longer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nervous responses are faster and shorter-lasting, whereas hormonal responses are slower but can last longer.",
            commonErrors: ["Claiming hormones are faster because they travel in blood — blood transport is slower than nerve conduction."],
          },
        },
        {
          id: "olbio-u7-hormones-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone is produced by the pancreas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "ADH" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pancreas", statement: "Produces insulin and glucagon." },
            ],
            steps: [
              { reasoning: "Match the gland to a hormone it secretes.", working: "\\text{pancreas} \\to \\text{insulin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Insulin",
            commonErrors: ["Choosing ADH — that is produced by the pituitary gland."],
          },
        },
        {
          id: "olbio-u7-hormones-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of glucagon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucagon", statement: "Raises blood glucose concentration." },
            ],
            steps: [
              { reasoning: "Give its effect on blood glucose.", working: "\\text{raises glucose}", marks: 1, markCode: "M" },
              { reasoning: "State the function clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucagon raises blood glucose concentration.",
            commonErrors: ["Confusing it with insulin, which lowers blood glucose."],
          },
        },
        {
          id: "olbio-u7-hormones-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the endocrine system coordinates a response to danger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline coordination", statement: "Adrenal glands release adrenaline into blood, affecting several organs." },
            ],
            steps: [
              { reasoning: "Danger stimulates the adrenal glands.", working: "\\text{adrenal glands}", marks: 1, markCode: "M" },
              { reasoning: "Adrenaline enters the bloodstream and reaches target organs.", working: "\\text{blood}", marks: 1, markCode: "M" },
              { reasoning: "It increases heart rate, breathing and glucose for action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The adrenal glands secrete adrenaline into the blood, which reaches target organs and increases heart rate, breathing rate and blood glucose to prepare for action.",
            commonErrors: ["Describing adrenaline as travelling through nerves — it travels in blood."],
          },
        },
        {
          id: "olbio-u7-hormones-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the hormone that controls the body's metabolic rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thyroxine", statement: "Controls metabolic rate." },
            ],
            steps: [
              { reasoning: "Recall the thyroid hormone.", working: "\\text{thyroxine}", marks: 1, markCode: "M" },
              { reasoning: "State the hormone name.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thyroxine controls the body's metabolic rate.",
            commonErrors: ["Naming insulin — it controls blood glucose, not metabolic rate."],
          },
        },
        {
          id: "olbio-u7-hormones-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the difference between a hormone and a nerve impulse as a means of coordination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Hormone vs impulse", statement: "Hormones travel in blood to target organs; nerve impulses travel along neurons." },
            ],
            steps: [
              { reasoning: "State the route for hormonal coordination.", working: "\\text{blood}", marks: 1, markCode: "M" },
              { reasoning: "State the route for nervous coordination.", working: "\\text{neurons}", marks: 1, markCode: "M" },
              { reasoning: "Compare speed: nerves are faster.", marks: 1, markCode: "M" },
              { reasoning: "Compare duration: hormones can be longer-lasting.", marks: 1, markCode: "M" },
              { reasoning: "Conclude with a clear difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hormones travel in the blood to target organs and produce slower but longer-lasting effects, whereas nerve impulses travel rapidly along neurons for fast, short-lived responses.",
            commonErrors: ["Saying hormones are electrical signals — they are chemical messengers."],
          },
        },
        {
          id: "olbio-u7-hormones-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student investigates how adrenaline affects heart rate.",
          parts: [
            { label: "a", prompt: "Name the gland that releases adrenaline.", marks: 1 },
            { label: "b", prompt: "State the route adrenaline takes to reach the heart.", marks: 2 },
            { label: "c", prompt: "Explain the effect on the heart and why it is useful.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adrenaline pathway", statement: "Adrenal glands → blood → heart; increases heart rate for action." },
            ],
            steps: [
              { part: "a", reasoning: "Name the adrenal glands.", working: "\\text{adrenal}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Adrenaline enters the bloodstream.", working: "\\text{blood}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It is carried to the heart target tissue.", working: "\\text{heart}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heart rate increases.", working: "\\text{heart rate} \\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This delivers more oxygen and glucose to muscles.", working: "\\text{oxygen/glucose}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Useful for fight-or-flight response.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) adrenal glands (b) into blood then to heart (c) increased heart rate supplies more oxygen/glucose for action",
            commonErrors: ["Saying adrenaline travels along nerves to the heart."],
          },
        },
      ],
    },
    {
      id: "olbio-u7-plant-responses",
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
          id: "olbio-u7-plant-responses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tropism describes growth toward light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravitropism" },
              { id: "b", text: "Phototropism" },
              { id: "c", text: "Hydrotropism" },
              { id: "d", text: "Thigmotropism" },
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
          id: "olbio-u7-plant-responses-q2",
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
          id: "olbio-u7-plant-responses-q3",
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
          id: "olbio-u7-plant-responses-q4",
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
          id: "olbio-u7-plant-responses-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tropism describes growth in response to gravity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thigmotropism" },
              { id: "b", text: "Hydrotropism" },
              { id: "c", text: "Phototropism" },
              { id: "d", text: "Gravitropism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravitropism", statement: "Growth response to gravity." },
            ],
            steps: [
              { reasoning: "Match stimulus to tropism.", working: "\\text{gravity} \\to \\text{gravitropism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Gravitropism",
            commonErrors: ["Choosing phototropism — that's the response to light."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'auxin'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Auxin", statement: "Plant hormone promoting cell elongation; uneven distribution causes bending." },
            ],
            steps: [
              { reasoning: "State it is a plant hormone.", working: "\\text{plant hormone}", marks: 1, markCode: "M" },
              { reasoning: "State its role in cell elongation.", working: "\\text{cell elongation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Auxin is a plant hormone produced mainly in shoot tips that promotes cell elongation; uneven distribution causes directional bending.",
            commonErrors: ["Describing it as a nutrient or pigment — it is a growth hormone."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "During positive phototropism, auxin accumulates on which side of the shoot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shaded side" },
              { id: "b", text: "It stays evenly distributed throughout the shoot" },
              { id: "c", text: "The side nearer the light" },
              { id: "d", text: "The underside of the root" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin phototropism", statement: "Auxin accumulates on the shaded side, causing more elongation there." },
            ],
            steps: [
              { reasoning: "Recall where auxin collects in unilateral light.", working: "\\text{shaded side}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The shaded side",
            commonErrors: ["Saying the lit side — auxin moves away from the light source."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an experiment, 60 seedlings are grown with light from one side. 45 bend toward the light. Calculate the percentage that bend toward the light and the number that do not.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "%" },
              { label: "b", answer: 15, unit: "seedlings" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole x 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage bending toward light.", working: "45/60 = 0.75", marks: 1, markCode: "M" },
              { reasoning: "Calculate the number not bending.", working: "60 - 45 = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 75%; (b) 15 seedlings",
            commonErrors: ["Using 45/15 for the percentage instead of 45/60."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how auxin causes a root to grow downward in response to gravity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin gravitropism", statement: "Auxin accumulates on the lower side; roots respond by bending downward." },
            ],
            steps: [
              { reasoning: "Gravity causes auxin to accumulate on the lower side of the root.", working: "\\text{auxin lower side}", marks: 1, markCode: "M" },
              { reasoning: "Roots are more sensitive to auxin than shoots.", working: "\\text{sensitive roots}", marks: 1, markCode: "M" },
              { reasoning: "High auxin inhibits elongation on the lower side while the upper side elongates more.", working: "\\text{differential elongation}", marks: 1, markCode: "M" },
              { reasoning: "The root curves downward — positive gravitropism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravity makes auxin accumulate on the lower side of the root; because roots are more sensitive to auxin, elongation is inhibited there while the upper side elongates more, so the root bends downward.",
            commonErrors: ["Claiming auxin always promotes elongation equally — in roots high auxin inhibits elongation."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Thigmotropism is the growth response of a plant to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water in the soil" },
              { id: "b", text: "Light" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Gravity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thigmotropism", statement: "Directional growth response to touch, e.g. tendrils coiling." },
            ],
            steps: [
              { reasoning: "Match the stimulus to the tropism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Touch",
            commonErrors: ["Choosing gravity — that is gravitropism."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A control group of seedlings shows 30% bending toward unilateral light. When auxin is applied evenly across shoot tips, 55% bend toward the light. Calculate the percentage-point increase in bending.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage-point change", statement: "Change = final percentage - initial percentage." },
            ],
            steps: [
              { reasoning: "Subtract the initial percentage from the final percentage.", working: "55 - 30 = 25", marks: 1, markCode: "M" },
              { reasoning: "State the increase with correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 percentage points",
            commonErrors: ["Calculating a relative percentage increase instead of percentage-point change."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare phototropism and gravitropism in terms of the stimulus and the direction of growth of shoots and roots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Phototropism vs gravitropism", statement: "Different stimuli and different response directions in shoots and roots." },
            ],
            steps: [
              { reasoning: "State the stimulus for each tropism.", working: "\\text{light vs gravity}", marks: 1, markCode: "M" },
              { reasoning: "Shoots: toward light, away from gravity.", working: "\\text{shoots}", marks: 1, markCode: "M" },
              { reasoning: "Roots: away from light or insensitive, toward gravity.", working: "\\text{roots}", marks: 1, markCode: "M" },
              { reasoning: "Both are directional growth responses driven by auxin redistribution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phototropism is a response to light — shoots grow toward it and roots away; gravitropism is a response to gravity — shoots grow up and roots down; both involve uneven auxin distribution.",
            commonErrors: ["Saying both stimuli produce the same response — shoots and roots respond oppositely to auxin."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do plants respond to stimuli by directional growth rather than by moving?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their cells cannot divide" },
              { id: "b", text: "They lack the energy to move" },
              { id: "c", text: "Movement would damage their roots" },
              { id: "d", text: "They are anchored in place and cannot move" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant responses", statement: "Plants are fixed; growth toward favourable conditions replaces locomotion." },
            ],
            steps: [
              { reasoning: "Recall why tropisms evolved in plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** They are anchored in place and cannot move",
            commonErrors: ["Choosing 'cells cannot divide' — growth itself requires cell division and elongation."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student marks 80 seedlings and finds that after 5 days 64 have roots pointing downward. Calculate the percentage showing positive gravitropism.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole x 100." },
            ],
            steps: [
              { reasoning: "Divide the number showing gravitropism by the total and multiply by 100.", working: "64/80 = 0.80", marks: 1, markCode: "M" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Using 64/16 or forgetting to multiply by 100."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student investigates gravitropism by growing seedlings horizontally in the dark.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the responses of the shoot and the root.", marks: 2 },
            { label: "c", prompt: "Explain how auxin produces these responses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Gravitropism experiment", statement: "Gravity direction vs growth direction; auxin accumulates on lower side." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: orientation to gravity. Dependent: direction of growth/bending.", working: "\\text{orientation vs growth}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both variables.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shoot grows upward (negative gravitropism).", working: "\\text{shoot up}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Root grows downward (positive gravitropism).", working: "\\text{root down}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Auxin accumulates on the lower side of each organ.", working: "\\text{auxin lower}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Differential elongation bends shoot up and root down.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) orientation to gravity / direction of growth (b) shoot up, root down (c) auxin on lower side → differential elongation",
            commonErrors: ["In (c) saying auxin moves to the upper side — it accumulates on the lower side."],
          },
        },
        {
          id: "olbio-u7-plant-responses-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about auxin is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Auxin only ever affects roots" },
              { id: "b", text: "Auxin is produced evenly and never redistributes" },
              { id: "c", text: "Uneven auxin distribution causes differential cell elongation, bending the plant" },
              { id: "d", text: "Auxin accumulates on the lit side of a shoot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Auxin mechanism", statement: "Uneven auxin → differential elongation → directional bending in shoots and roots." },
            ],
            steps: [
              { reasoning: "Identify the correct description of auxin action.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Uneven auxin distribution causes differential cell elongation, bending the plant",
            commonErrors: ["Saying auxin accumulates on the lit side — it accumulates on the shaded/lower side."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u7-coordination-notes",
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
