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
              { id: "b", text: "Thyroid" },
              { id: "c", text: "Pancreas" },
              { id: "d", text: "Pituitary" },
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
              { id: "a", text: "Phototropism" },
              { id: "b", text: "Gravitropism" },
              { id: "c", text: "Thigmotropism" },
              { id: "d", text: "Hydrotropism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phototropism", statement: "Growth response to light." },
            ],
            steps: [
              { reasoning: "Match stimulus to tropism.", working: "\\text{light} \\to \\text{phototropism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Phototropism",
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
