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
              { id: "a", text: "Seed germination" },
              { id: "b", text: "Transfer of pollen to stigma" },
              { id: "c", text: "Leaf fall" },
              { id: "d", text: "Fruit ripening" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cils-u3-rep-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of the anther?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To protect seeds" },
              { id: "b", text: "To produce pollen" },
              { id: "c", text: "To absorb water" },
              { id: "d", text: "To receive pollen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Anther", statement: "The anther produces pollen grains." }],
            steps: [{ reasoning: "Anther is part of the stamen and makes pollen.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** To produce pollen",
          },
        },
        {
          id: "cils-u3-rep-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A flower has sepals, petals, stamens and carpels. Enter the number of flower parts listed.",
          response: { type: "numeric", parts: [{ label: "Parts", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Flower parts", statement: "Four main parts are listed." }],
            steps: [{ reasoning: "Four parts are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u3-rep-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the sequence from pollen landing on the stigma to fertilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fertilisation", statement: "Pollen grows a tube to the ovule where gametes fuse." }],
            steps: [
              { reasoning: "A pollen tube grows down the style toward the ovule.", marks: 1, markCode: "M" },
              { reasoning: "The male gamete fuses with the female gamete in fertilisation.", marks: 1, markCode: "A" }],
            finalAnswer: "Pollen tube grows to ovule, then gametes fuse to form a zygote.",
          },
        },
        {
          id: "cils-u3-rep-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the ovary develop into after fertilisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollen" },
              { id: "b", text: "Fruit" },
              { id: "c", text: "Leaf" },
              { id: "d", text: "Root" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fruit formation", statement: "The ovary develops into fruit." }],
            steps: [{ reasoning: "Ovary wall becomes fruit wall and protects seeds.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Fruit",
          },
        },
        {
          id: "cils-u3-rep-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Seeds are dispersed by wind, water and animals. Enter the number of dispersal methods listed.",
          response: { type: "numeric", parts: [{ label: "Methods", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Dispersal", statement: "Three common dispersal methods are listed." }],
            steps: [{ reasoning: "Wind, water and animals make three.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u3-rep-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a seed needs oxygen to germinate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germination", statement: "Germination requires water, oxygen and suitable temperature." }],
            steps: [
              { reasoning: "The embryo respire to release energy for growth.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen is needed for aerobic respiration.", marks: 1, markCode: "M" },
              { reasoning: "Without oxygen, energy release is limited and germination may fail.", marks: 1, markCode: "A" }],
            finalAnswer: "Oxygen supports respiration, releasing energy needed for the seedling to grow.",
          },
        },
        {
          id: "cils-u3-rep-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of the stigma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To store water" },
              { id: "b", text: "To produce pollen" },
              { id: "c", text: "To receive pollen" },
              { id: "d", text: "To attract insects only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stigma", statement: "The stigma is sticky and receives pollen." }],
            steps: [{ reasoning: "Stigma is the receptive part of the carpel.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** To receive pollen",
          },
        },
        {
          id: "cils-u3-rep-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a 28-day menstrual-like plant flowering cycle, ovulation-like pollen release occurs near day 14. Enter the approximate day.",
          response: { type: "numeric", parts: [{ label: "Day", answer: 14, unit: "day" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Flowering cycle", statement: "Mid-cycle is about day 14 in a 28-day cycle." }],
            steps: [{ reasoning: "Half of 28 is 14.", marks: 1, markCode: "A" }],
            finalAnswer: "$14$ day",
          },
        },
        {
          id: "cils-u3-rep-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a benefit of cross-pollination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stops seed formation" },
              { id: "b", text: "It guarantees identical offspring" },
              { id: "c", text: "It removes all pollen" },
              { id: "d", text: "It can increase genetic variation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Cross-pollination", statement: "Cross-pollination mixes genetic material between plants." }],
            steps: [{ reasoning: "Mixing pollen from different plants increases variation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** It can increase genetic variation",
          },
        },
        {
          id: "cils-u3-rep-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A plant produces 120 seeds and 30 are dispersed by wind. Enter the percentage dispersed by wind.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage", statement: "Percentage = part divided by whole × 100." }],
            steps: [{ reasoning: "$(30\\div 120)\\times 100 = 25\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$25\\%$",
          },
        },
        {
          id: "cils-u3-rep-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the ovule and ovary develop after fertilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Seed and fruit", statement: "Ovule becomes seed; ovary becomes fruit." }],
            steps: [
              { reasoning: "The fertilised ovule develops into a seed.", marks: 1, markCode: "M" },
              { reasoning: "The ovary wall develops into the fruit.", marks: 1, markCode: "M" },
              { reasoning: "The fruit protects and may help disperse seeds.", marks: 1, markCode: "A" }],
            finalAnswer: "Ovule becomes seed; ovary becomes fruit protecting seeds.",
          },
        },
        {
          id: "cils-u3-rep-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What grows down the style to reach the ovule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stoma" },
              { id: "b", text: "Pollen tube" },
              { id: "c", text: "Xylem vessel" },
              { id: "d", text: "Root hair" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Pollen tube", statement: "The pollen tube carries male gametes to the ovule." }],
            steps: [{ reasoning: "Pollen tube grows through the style.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Pollen tube",
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
              { id: "a", text: "Response to gravity" },
              { id: "b", text: "Response to touch" },
              { id: "c", text: "Growth away from light" },
              { id: "d", text: "Growth towards light" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cils-u3-trop-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is geotropism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Response to sound" },
              { id: "b", text: "Growth response to light" },
              { id: "c", text: "Growth response to gravity" },
              { id: "d", text: "Response to touch" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Geotropism", statement: "Geotropism is a directional growth response to gravity." }],
            steps: [{ reasoning: "Geo refers to gravity or earth direction.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Growth response to gravity",
          },
        },
        {
          id: "cils-u3-trop-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lesson lists phototropism, geotropism and thigmotropism. Enter the number of tropism types.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Tropisms", statement: "Three main tropisms are listed." }],
            steps: [{ reasoning: "Three tropisms are named.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u3-trop-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what thigmotropism is and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Thigmotropism", statement: "Directional growth response to touch." }],
            steps: [
              { reasoning: "Thigmotropism is growth in response to touch.", marks: 1, markCode: "M" },
              { reasoning: "Tendrils curling around a support is an example.", marks: 1, markCode: "A" }],
            finalAnswer: "Thigmotropism is growth response to touch, e.g. tendrils curling around support.",
          },
        },
        {
          id: "cils-u3-trop-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During phototropism, where does auxin accumulate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On the illuminated side" },
              { id: "b", text: "Only in roots" },
              { id: "c", text: "In the flowers" },
              { id: "d", text: "On the shaded side" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Auxin", statement: "Auxin accumulates on the shaded side of a shoot." }],
            steps: [{ reasoning: "Shaded-side cells elongate more, causing bending.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** On the shaded side",
          },
        },
        {
          id: "cils-u3-trop-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shoot bends 30° towards light in 2 hours. Enter the average angle turned per hour.",
          response: { type: "numeric", parts: [{ label: "Angle/hour", answer: 15, unit: "°/h" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rate", statement: "Rate = angle divided by time." }],
            steps: [{ reasoning: "$30\\div 2 = 15$ degrees per hour.", marks: 1, markCode: "A" }],
            finalAnswer: "$15$ °/h",
          },
        },
        {
          id: "cils-u3-trop-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why shoots grow upwards and roots grow downwards.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Geotropism", statement: "Shoots show negative geotropism; roots show positive geotropism." }],
            steps: [
              { reasoning: "Gravity is detected by the plant.", marks: 1, markCode: "M" },
              { reasoning: "Auxin redistribution causes differential growth.", marks: 1, markCode: "M" },
              { reasoning: "Shoots grow against gravity and roots grow with gravity.", marks: 1, markCode: "A" }],
            finalAnswer: "Gravity responses and auxin redistribution make shoots grow up and roots grow down.",
          },
        },
        {
          id: "cils-u3-trop-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tropism is shown when a climbing plant's tendril touches a support?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phototropism" },
              { id: "b", text: "Hydrotropism only" },
              { id: "c", text: "Thigmotropism" },
              { id: "d", text: "Geotropism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Thigmotropism", statement: "Thigmotropism is response to touch." }],
            steps: [{ reasoning: "Touch on the tendril causes curling.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Thigmotropism",
          },
        },
        {
          id: "cils-u3-trop-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tropism experiment compares shoots grown in light from one side and in uniform light. Enter the number of light conditions.",
          response: { type: "numeric", parts: [{ label: "Conditions", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Experimental design", statement: "Two light conditions are compared." }],
            steps: [{ reasoning: "One-sided light and uniform light make two conditions.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u3-trop-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response is negative geotropism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaf falling in autumn" },
              { id: "b", text: "Flower opening at dawn" },
              { id: "c", text: "Root growing downwards with gravity" },
              { id: "d", text: "Shoot growing upwards away from gravity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative geotropism", statement: "Negative geotropism is growth away from gravity." }],
            steps: [{ reasoning: "Shoots grow upward, away from gravitational pull.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Shoot growing upwards away from gravity",
          },
        },
        {
          id: "cils-u3-trop-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Auxin concentration is 8 units on the shaded side and 2 units on the lit side. Enter the difference.",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 6, unit: "units" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Auxin", statement: "Difference = shaded concentration minus lit concentration." }],
            steps: [{ reasoning: "$8-2 = 6$ units.", marks: 1, markCode: "A" }],
            finalAnswer: "6 units",
          },
        },
        {
          id: "cils-u3-trop-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design a simple experiment to test phototropism in seedlings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Phototropism experiment", statement: "Grow seedlings with one-sided light and measure bending." }],
            steps: [
              { reasoning: "Grow identical seedlings in darkness or uniform conditions first.", marks: 1, markCode: "M" },
              { reasoning: "Expose them to light from one direction only.", marks: 1, markCode: "M" },
              { reasoning: "Measure the direction and angle of shoot bending over time.", marks: 1, markCode: "A" }],
            finalAnswer: "Use one-sided light on identical seedlings and measure bending towards the light.",
          },
        },
        {
          id: "cils-u3-trop-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tropism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A flower colour change" },
              { id: "b", text: "A rapid muscle movement" },
              { id: "c", text: "A directional growth response to a stimulus" },
              { id: "d", text: "A type of seed dispersal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Tropism", statement: "Tropisms are directional growth responses." }],
            steps: [{ reasoning: "Plants grow directionally in response to stimuli.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** A directional growth response to a stimulus",
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
