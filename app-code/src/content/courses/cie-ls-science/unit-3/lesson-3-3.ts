import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cils-u3-lesson-3-3",
  code: "3-3",
  title: "Plant reproduction and growth",
  goal: "I CAN describe pollination, fertilisation and seed dispersal in flowering plants.",
  standards: ["0893 Biology: plant reproduction"],
  vocabulary: [
    { term: "Pollination", definition: "Transfer of pollen from anther to stigma." },
    { term: "Fertilisation", definition: "Fusion of male and female gametes forming a zygote." },
    { term: "Seed dispersal", definition: "Spread of seeds away from parent plant." },
    { term: "Germination", definition: "Seed sprouting into a seedling — needs water, oxygen, warmth." },
    { term: "Anther", definition: "Part of stamen producing pollen." },
    { term: "Stigma", definition: "Sticky tip of carpel that receives pollen." },
  ],
  concepts: [
    {
      id: "cils-u3-reproduction",
      title: "Flowering plant reproduction",
      skill: "Describe pollination, fertilisation, seed/fruit formation and dispersal.",
      lesson: {
        sections: [
          {
            heading: "Flower parts",
            body: "- **Stamen**: anther (pollen) + filament\n- **Carpel**: stigma (receives pollen), style, ovary (ovules)\n- **Petals**: attract pollinators",
          },
          {
            heading: "Pollination → fertilisation",
            body: "Pollen lands on stigma → grows down style → fuses with ovule → zygote forms → seed develops → ovary becomes fruit.",
          },
          {
            heading: "Dispersal and germination",
            body: "Seeds dispersed by wind, water, animals. Germination needs water (activates enzymes), oxygen, suitable temperature.",
          },
        ],
        keyFormulas: [
          { name: "Reproduction", statement: "Pollination → fertilisation → seed + fruit → dispersal → germination." },
        ],
        workedExample: {
          problem: "Trace what happens after pollen reaches the stigma.",
          solution: "Pollen tube grows down style → male gamete fuses with ovule → zygote → seed; ovary → fruit.",
        },
      },
      questions: [
        {
          id: "cils-u3-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pollination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transfer of pollen to stigma" },
              { id: "b", text: "Seed germination" },
              { id: "c", text: "Fruit ripening" },
              { id: "d", text: "Leaf fall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pollination", statement: "Pollen transfer anther → stigma." },
            ],
            steps: [
              { reasoning: "Pollination = pollen moving to stigma.", working: "pollen→stigma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Transfer of pollen to stigma",
            commonErrors: ["Choosing (b) — germination is seed sprouting, different stage."],
          },
        },
        {
          id: "cils-u3-rep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What conditions does a seed need to germinate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Germination", statement: "Water, oxygen, suitable temperature." },
            ],
            steps: [
              { reasoning: "Water activates enzymes; oxygen for respiration; warmth for reactions.", working: "water+O₂+warm", marks: 1, markCode: "M" },
              { reasoning: "All three needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water, oxygen and a suitable (warm) temperature.",
            commonErrors: ["Saying 'light' — germination needs warmth, not necessarily light."],
          },
        },
        {
          id: "cils-u3-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how seeds are dispersed by wind, giving an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dispersal", statement: "Light seeds with wings/parachutes carried by wind — e.g. dandelion." },
            ],
            steps: [
              { reasoning: "Seeds adapted: light, winged or hairy to catch wind.", working: "adapted", marks: 1, markCode: "M" },
              { reasoning: "Example: dandelion 'parachute' or sycamore 'helicopter' wings.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Dispersal reduces competition near parent.", working: "competition", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light winged/parachute seeds carried by wind (dandelion); spreads seeds away from parent.",
            commonErrors: ["Saying 'seeds fly' — need adaptation explanation."],
          },
        },
        {
          id: "cils-u3-rep-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace the life cycle of a flowering plant.",
          parts: [
            { label: "a", prompt: "Describe pollination and fertilisation.", marks: 3 },
            { label: "b", prompt: "Explain seed and fruit formation.", marks: 2 },
            { label: "c", prompt: "Describe germination conditions.", marks: 2 },
            { label: "d", prompt: "Explain why dispersal matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Life cycle", statement: "Pollination→fertilisation→seed/fruit→dispersal→germination→adult." },
            ],
            steps: [
              { part: "a", reasoning: "Pollen→stigma; pollen tube→ovule; gametes fuse→zygote.", working: "process", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Steps accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ovule→seed; ovary→fruit (protects seeds).", working: "seed+fruit", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Water, oxygen, warmth — enzymes activated.", working: "conditions", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reduces competition, colonises new areas, avoids overcrowding.", working: "why", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pollen→stigma→tube→zygote (b) ovule→seed, ovary→fruit (c) water/O₂/warmth (d) reduces competition, spreads species",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Process accurate.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Confusing pollination with fertilisation — pollination is pollen transfer."],
          },
        },
      ],
    },
    {
      id: "cils-u3-tropisms",
      title: "Tropisms and plant responses",
      skill: "Describe how plants respond to stimuli — phototropism, geotropism, thigmotropism.",
      lesson: {
        sections: [
          {
            heading: "What are tropisms?",
            body: "Directional growth responses to stimuli:\n- **Phototropism**: growth towards light\n- **Geotropism**: roots down, shoots up (gravity)\n- **Thigmotropism**: response to touch (tendrils curling)",
          },
          {
            heading: "How they work",
            body: "Auxin hormone redistributes — more auxin on shaded side → cells elongate more → bend towards light.",
          },
          {
            heading: "Why it matters",
            body: "Phototropism maximises light for photosynthesis; geotropism anchors roots and grows shoots to light; thigmotropism helps climbing plants.",
          },
        ],
        keyFormulas: [
          { name: "Tropisms", statement: "Directional growth: phototropism (light), geotropism (gravity), thigmotropism (touch)." },
        ],
        workedExample: {
          problem: "Why do shoots grow upwards and roots downwards?",
          solution: "Geotropism — auxin redistributes; shoots grow against gravity (negative geotropism), roots with it (positive).",
        },
      },
      questions: [
        {
          id: "cils-u3-trop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is phototropism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth towards light" },
              { id: "b", text: "Growth away from light" },
              { id: "c", text: "Response to gravity" },
              { id: "d", text: "Response to touch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phototropism", statement: "Growth towards light source." },
            ],
            steps: [
              { reasoning: "Photo = light; tropism = directional growth.", working: "towards light", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Growth towards light",
            commonErrors: ["Choosing (b) — that's negative phototropism (rare)."],
          },
        },
        {
          id: "cils-u3-trop-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of tropism and their stimuli.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tropisms", statement: "Phototropism=light; geotropism=gravity; thigmotropism=touch." },
            ],
            steps: [
              { reasoning: "Any two with correct stimuli.", working: "pairs", marks: 1, markCode: "M" },
              { reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phototropism (light), geotropism (gravity), thigmotropism (touch) — any two",
            commonErrors: ["Mixing up stimuli — phototropism is light, not gravity."],
          },
        },
        {
          id: "cils-u3-trop-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how auxin causes a plant shoot to bend towards light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Auxin mechanism", statement: "Auxin accumulates on shaded side → more elongation → bend towards light." },
            ],
            steps: [
              { reasoning: "Light hits one side; auxin moves to shaded side.", working: "auxin moves", marks: 1, markCode: "M" },
              { reasoning: "More auxin = more cell elongation on shaded side.", working: "elongation", marks: 1, markCode: "M" },
              { reasoning: "Shaded side grows faster → bends towards light.", working: "bend", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Auxin accumulates on shaded side → faster growth there → shoots bend towards light.",
            commonErrors: ["Saying 'cells reach for light' — it's differential growth, not reaching."],
          },
        },
        {
          id: "cils-u3-trop-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design experiments for tropisms.",
          parts: [
            { label: "a", prompt: "How to test phototropism?", marks: 3 },
            { label: "b", prompt: "How to test geotropism?", marks: 3 },
            { label: "c", prompt: "What control would you use?", marks: 1 },
            { label: "d", prompt: "Predict results for each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tropism experiments", statement: "Control light direction/gravity; measure growth direction." },
            ],
            steps: [
              { part: "a", reasoning: "Grow seedlings with light from one side only; observe bending.", working: "one-sided light", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Measure bend angle over time.", working: "measure", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Grow seeds in dark at different orientations; observe root/shoot direction.", working: "orientations", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gravity response measured.", working: "gravity", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method valid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Control: uniform light or same orientation without stimulus.", working: "control", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Photo: bend towards light; geo: roots down, shoots up regardless of orientation.", working: "predictions", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) one-sided light, measure bend (b) varied orientations, dark (c) uniform conditions (d) towards light; roots down shoots up",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Design good.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Design good.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Control stated.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Predictions correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Not controlling other stimuli — light affects geotropism tests."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u3-reproduction-notes",
      title: "Plant reproduction — revision notes",
      summary: "Pollination→fertilisation→seed/fruit→dispersal→germination; tropisms.",
      sections: [
        {
          heading: "Reproduction",
          body: "Pollen→stigma→ovule fusion→zygote→seed; ovary→fruit. Germination needs water, O₂, warmth. Dispersal by wind/water/animals.",
        },
        {
          heading: "Tropisms",
          body: "Directional growth: phototropism (light), geotropism (gravity), thigmotropism (touch). Auxin redistribution causes bending.",
        },
      ],
    },
  ],
};
