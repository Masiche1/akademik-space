import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "pypsc-u2-lesson-2-1",
  code: "2-1",
  title: "Properties of Materials",
  goal: "I CAN sort materials by their properties and describe how materials change.",
  standards: [
    "PYP Science: Materials",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Material", definition: "What something is made of — wood, plastic, metal, glass, fabric." },
    { term: "Property", definition: "A quality of a material: hard/soft, rough/smooth, absorbent/repellent." },
    { term: "Hard", definition: "Does not bend or scratch easily — like stone or metal." },
    { term: "Soft", definition: "Bends or squashes easily — like fabric, sponge or rubber." },
    { term: "Absorbent", definition: "Soaks up liquid — like a sponge or paper towel." },
    { term: "Waterproof", definition: "Does not let water through — like plastic or rubber." },
  ],
  concepts: [
    {
      id: "pypsc-u2l1-c1-sorting-materials",
      title: "Sorting materials by properties",
      skill: "Identify and sort materials by properties like hardness, texture and absorbency.",
      lesson: {
        sections: [
          {
            heading: "Testing properties",
            body: "Materials have **properties** we can test. Is it **hard** (does not scratch easily) or **soft** (bends easily)? Is it **rough** or **smooth** to touch? Does it **absorb** water (like a sponge) or is it **waterproof** (like plastic)? We can also test if it is **transparent** (see-through like glass) or **opaque** (blocks light like wood). Scientists sort materials by testing these properties.",
          },
          {
            heading: "Why properties matter",
            body: "We choose materials for jobs based on their properties. An umbrella must be **waterproof**. A towel must be **absorbent**. A frying pan handle must be **heatproof**. A window must be **transparent**. Matching the right material to the job makes products work well and stay safe.",
          },
        ],
        keyFormulas: [
          { name: "Material properties", statement: "Hard/soft, rough/smooth, absorbent/waterproof, transparent/opaque" },
          { name: "Match material to job", statement: "Umbrella=waterproof, towel=absorbent, window=transparent" },
        ],
        workedExample: {
          problem: "Why is a raincoat made of plastic and not paper?",
          solution: "Plastic is waterproof — it keeps rain out. Paper would absorb water and fall apart.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u2l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is BEST for making a raincoat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fabric" },
              { id: "b", text: "Paper" },
              { id: "c", text: "Plastic" },
              { id: "d", text: "Wood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Waterproof", statement: "Raincoats need waterproof material; plastic is waterproof." },
            ],
            steps: [
              { reasoning: "Plastic is waterproof — paper absorbs water, fabric soaks, wood rots.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Plastic",
            commonErrors: ["Choosing 'fabric' — ordinary fabric absorbs water unless specially treated."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sponge and a plastic sheet are both tested with water. Describe what happens to each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Absorbent vs waterproof", statement: "Sponge absorbs water; plastic sheet is waterproof." },
            ],
            steps: [
              { reasoning: "The sponge soaks up the water — it is absorbent.", marks: 1, markCode: "M" },
              { reasoning: "The plastic sheet lets water sit on top or run off — it is waterproof.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sponge absorbs water; plastic sheet is waterproof.",
            commonErrors: ["Saying both 'get wet' — getting wet is not the same as absorbing water."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You have four mystery materials: a metal spoon, a wooden ruler, a rubber band and a glass marble. Sort them into 'hard' and 'soft' groups and explain how you tested.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Hardness test", statement: "Hard materials do not scratch or bend easily; soft ones do." },
            ],
            steps: [
              { reasoning: "Hard: metal spoon, wooden ruler, glass marble — they do not bend easily.", marks: 1, markCode: "M" },
              { reasoning: "Soft: rubber band — it stretches and bends easily.", marks: 1, markCode: "M" },
              { reasoning: "Test: try to scratch or bend each — hard ones resist, soft ones yield.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hard: spoon, ruler, marble. Soft: rubber band. Tested by trying to bend/scratch.",
            commonErrors: ["Putting wood in 'soft' — wood is hard even though it can break; it does not bend like rubber."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A school wants to make new products. Match each material to its job and explain why.",
          parts: [
            { label: "a", prompt: "Window glass — what property does it need?", marks: 1 },
            { label: "b", prompt: "School bag — what property does it need?", marks: 1 },
            { label: "c", prompt: "Drinking bottle — what property does it need?", marks: 1 },
            { label: "d", prompt: "Pencil case — what property does it need?", marks: 1 },
            { label: "e", prompt: "Explain the rule: 'the right material for the job'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Material selection", statement: "Choose materials whose properties match the product's needs." },
            ],
            steps: [
              { part: "a", reasoning: "Transparent — so you can see through it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strong/durable — to carry heavy books.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Waterproof and safe — to hold drinks.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Hard and light — to protect pencils.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Products fail if material properties do not match the job.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "E.g. a paper umbrella would soak through — waterproof needed.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Matching property to purpose makes products work well and safely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) transparent (b) strong (c) waterproof/safe (d) hard/light (e) match properties to purpose",
            commonErrors: ["Choosing materials by looks only — properties matter more than appearance."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is best for an umbrella that must keep rain out?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paper" },
              { id: "b", text: "Cotton fabric" },
              { id: "c", text: "A sponge" },
              { id: "d", text: "Waterproof plastic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Waterproof", statement: "Umbrellas need waterproof material so rain cannot pass through." },
            ],
            steps: [
              { reasoning: "Waterproof plastic keeps rain out.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Waterproof plastic",
            commonErrors: ["Choosing fabric — ordinary fabric absorbs water unless treated."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many material properties are listed: hard, soft, rough, smooth, absorbent, waterproof, transparent and opaque?",
          response: {
            type: "numeric",
            parts: [{ label: "Properties", answer: 8, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Material properties", statement: "Properties include hardness, texture, absorbency, waterproofing and transparency." },
            ],
            steps: [
              { reasoning: "The listed properties are hard, soft, rough, smooth, absorbent, waterproof, transparent and opaque.", marks: 1, markCode: "M" },
              { reasoning: "There are eight properties.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
            commonErrors: ["Counting pairs instead of properties — there are eight individual properties."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a towel made from absorbent fabric rather than waterproof plastic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Absorbent", statement: "A towel must soak up water, so absorbent material is needed." },
            ],
            steps: [
              { reasoning: "A towel's job is to dry skin or surfaces by soaking up water.", marks: 1, markCode: "M" },
              { reasoning: "Absorbent fabric soaks water; waterproof plastic would let water stay on top.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The towel needs absorbent material to soak up water for drying.",
            commonErrors: ["Choosing waterproof material — waterproof material would not dry anything."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property must window glass have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soft" },
              { id: "b", text: "Rough" },
              { id: "c", text: "Transparent" },
              { id: "d", text: "Absorbent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transparent", statement: "Window glass must let light through so we can see outside." },
            ],
            steps: [
              { reasoning: "Transparent material lets light pass through.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Transparent",
            commonErrors: ["Choosing opaque or rough — those would block light."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these materials are waterproof: plastic sheet, rubber, paper and sponge?",
          response: {
            type: "numeric",
            parts: [{ label: "Waterproof materials", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Waterproof materials", statement: "Plastic and rubber resist water; paper and sponge absorb it." },
            ],
            steps: [
              { reasoning: "Plastic sheet and rubber are waterproof.", marks: 1, markCode: "M" },
              { reasoning: "Paper and sponge absorb water, so they are not waterproof.", marks: 1, markCode: "M" },
              { reasoning: "Two materials are waterproof.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting paper — paper absorbs water and is not waterproof."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How can you test if a surface is rough or smooth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listen to it" },
              { id: "b", text: "Touch it carefully" },
              { id: "c", text: "Smell it" },
              { id: "d", text: "Taste it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Texture test", statement: "Rough and smooth are texture properties tested by touch." },
            ],
            steps: [
              { reasoning: "Touch is the sense used to test texture.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Touch it carefully",
            commonErrors: ["Choosing taste or smell — texture is felt, not tasted."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many opposite property pairs are listed: hard/soft, rough/smooth, absorbent/waterproof and transparent/opaque?",
          response: {
            type: "numeric",
            parts: [{ label: "Pairs", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Property pairs", statement: "The four pairs compare opposite material properties." },
            ],
            steps: [
              { reasoning: "Hard/soft, rough/smooth, absorbent/waterproof and transparent/opaque are listed.", marks: 1, markCode: "M" },
              { reasoning: "There are four pairs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting eight properties instead of four pairs."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Choose a material for a frying-pan handle and explain the properties it needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Material selection", statement: "A pan handle must stay cool and safe near heat." },
            ],
            steps: [
              { reasoning: "The handle should be heatproof so it does not burn hands.", marks: 1, markCode: "M" },
              { reasoning: "It should also be strong enough not to break and easy to grip.", marks: 1, markCode: "M" },
              { reasoning: "A material such as wood or heatproof plastic matches the job.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose heatproof, strong material such as wood or heatproof plastic.",
            commonErrors: ["Choosing metal — metal can get very hot and burn."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which material property is most important for a school bag that carries heavy books?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transparent" },
              { id: "b", text: "Very soft" },
              { id: "c", text: "Absorbent" },
              { id: "d", text: "Strong and durable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Durability", statement: "A school bag needs strong, durable material to carry heavy loads." },
            ],
            steps: [
              { reasoning: "Strength and durability match the heavy-book job.", marks: 1, markCode: "M" },
              { reasoning: "Transparency and softness do not protect the contents.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Strong and durable",
            commonErrors: ["Choosing soft — soft material would tear under heavy books."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many correct product-property matches are listed: umbrella-waterproof, towel-absorbent, window-transparent and frying handle-heatproof?",
          response: {
            type: "numeric",
            parts: [{ label: "Matches", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Product matching", statement: "Each product needs a material property that suits its job." },
            ],
            steps: [
              { reasoning: "Umbrella, towel, window and frying handle each have a correct property match.", marks: 1, markCode: "M" },
              { reasoning: "There are four correct matches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Missing heatproof for the handle — it is a correct match."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these are transparent: glass window, wooden door, clear plastic bottle and brick wall?",
          response: {
            type: "numeric",
            parts: [{ label: "Transparent items", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transparent", statement: "Transparent materials let light through; opaque materials block it." },
            ],
            steps: [
              { reasoning: "Glass window and clear plastic bottle are transparent.", marks: 1, markCode: "M" },
              { reasoning: "Wooden door and brick wall are opaque.", marks: 1, markCode: "M" },
              { reasoning: "Two items are transparent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting all clear-looking objects — clear plastic and glass are transparent, wood and brick are not."],
          },
        },
        {
          id: "pypsc-q-u2l1c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why would a paper umbrella be a poor choice for rainy weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paper cannot open" },
              { id: "b", text: "Paper is too heavy to hold" },
              { id: "c", text: "Paper absorbs water and falls apart" },
              { id: "d", text: "Paper is too colourful" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Absorbent vs waterproof", statement: "Paper absorbs water, so it is wrong for a rain umbrella." },
            ],
            steps: [
              { reasoning: "Paper soaks up rain and weakens.", marks: 1, markCode: "M" },
              { reasoning: "An umbrella needs waterproof material instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Paper absorbs water and falls apart",
            commonErrors: ["Choosing colour — appearance does not matter as much as waterproofing."],
          },
        },
      ],
    },
    {
      id: "pypsc-u2l1-c2-changing-materials",
      title: "Changing materials",
      skill: "Describe how materials change state — melting, freezing, dissolving, burning.",
      lesson: {
        sections: [
          {
            heading: "Changing state",
            body: "Materials change when we heat or cool them. **Melting**: solid → liquid (ice → water). **Freezing**: liquid → solid (water → ice). **Evaporating**: liquid → gas (water → steam). **Condensing**: gas → liquid (steam → water droplets). These changes can often be **reversed** — melted ice freezes back into ice.",
          },
          {
            heading: "Dissolving and irreversible changes",
            body: "**Dissolving**: a solid mixes into a liquid and seems to disappear — salt in water. The salt is still there; you can get it back by **evaporating** the water. Some changes cannot be undone: **burning** paper turns it to ash; **rusting** iron turns it brown and weak. These are **irreversible** changes — the material is different forever.",
          },
        ],
        keyFormulas: [
          { name: "State changes", statement: "Melt (solid→liquid), Freeze (liquid→solid), Evaporate (liquid→gas), Condense (gas→liquid)" },
          { name: "Reversible vs not", statement: "Melting/freezing/dissolving can reverse; burning/rusting cannot" },
        ],
        workedExample: {
          problem: "Is burning a piece of paper reversible?",
          solution: "No — burning turns paper into ash and smoke; you cannot turn it back into paper. It is an irreversible change.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u2l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when ice is heated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It evaporates immediately" },
              { id: "b", text: "It melts" },
              { id: "c", text: "It freezes" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Melting", statement: "Heating a solid turns it into a liquid — ice melts to water." },
            ],
            steps: [
              { reasoning: "Heat melts ice into water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It melts",
            commonErrors: ["Choosing 'evaporates' — that needs much more heat; ice first melts."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Salt is stirred into water and seems to disappear. Has the salt been destroyed? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dissolving", statement: "Dissolving mixes a solid into a liquid; the solid is still present." },
            ],
            steps: [
              { reasoning: "No — the salt has dissolved, not been destroyed.", marks: 1, markCode: "M" },
              { reasoning: "It is mixed through the water and can be recovered by evaporating the water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — it dissolved; the salt is still in the water and can be recovered.",
            commonErrors: ["Saying the salt 'disappeared' — it is dissolved, still present."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these changes is NOT reversible: melting chocolate, freezing water, or burning paper? Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reversible changes", statement: "Melting/freezing can be undone; burning cannot." },
            ],
            steps: [
              { reasoning: "Melting chocolate and freezing water can be reversed by cooling/heating.", marks: 1, markCode: "M" },
              { reasoning: "Burning paper turns it to ash — it cannot be turned back into paper.", marks: 1, markCode: "M" },
              { reasoning: "Burning is irreversible; the material is permanently changed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Burning paper — it produces ash and cannot be reversed.",
            commonErrors: ["Saying melting is irreversible — melted chocolate can be cooled back to solid."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class investigates material changes with ice, water, salt and paper.",
          parts: [
            { label: "a", prompt: "What happens when ice is left in a warm room? Name the change.", marks: 1 },
            { label: "b", prompt: "What happens when water is put in a freezer? Name the change.", marks: 1 },
            { label: "c", prompt: "Salt is added to water and stirred. What is this called and can it be reversed?", marks: 2 },
            { label: "d", prompt: "Paper is burned. Is this reversible? What is produced?", marks: 1 },
            { label: "e", prompt: "Sort the four changes into 'reversible' and 'irreversible'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Material changes", statement: "State changes and dissolving are reversible; burning and rusting are not." },
            ],
            steps: [
              { part: "a", reasoning: "It melts — solid to liquid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It freezes — liquid to solid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dissolving — salt mixes into water.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Yes, reversible by evaporating the water to recover the salt.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Not reversible — produces ash and smoke.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Reversible: melting, freezing, dissolving.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Irreversible: burning (and rusting).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) melts (b) freezes (c) dissolving, reversible (d) irreversible, ash/smoke (e) rev: melt/freeze/dissolve; irrev: burn",
            commonErrors: ["In (e), putting dissolving in irreversible — it can be undone."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is melting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas turning into a liquid" },
              { id: "b", text: "Solid turning into a liquid" },
              { id: "c", text: "Liquid turning into a solid" },
              { id: "d", text: "Liquid turning into a gas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Melting", statement: "Melting changes a solid into a liquid." },
            ],
            steps: [
              { reasoning: "Melting is solid to liquid, such as ice to water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Solid turning into a liquid",
            commonErrors: ["Choosing evaporation — that is liquid to gas."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many state changes are named: melting, freezing, evaporating and condensing?",
          response: {
            type: "numeric",
            parts: [{ label: "Changes", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "State changes", statement: "Melting, freezing, evaporating and condensing are state changes." },
            ],
            steps: [
              { reasoning: "The four changes are melting, freezing, evaporating and condensing.", marks: 1, markCode: "M" },
              { reasoning: "There are four changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three by forgetting condensing."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Salt is stirred into water and seems to disappear. Explain whether this change is reversible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dissolving", statement: "Dissolving mixes a solid into a liquid and can often be reversed." },
            ],
            steps: [
              { reasoning: "The salt is still present, just mixed through the water.", marks: 1, markCode: "M" },
              { reasoning: "Evaporating the water can recover the salt, so it is reversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — the salt dissolved and can be recovered by evaporating the water.",
            commonErrors: ["Saying the salt is destroyed — it is still there dissolved."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when paper is burned?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It freezes" },
              { id: "b", text: "It dissolves" },
              { id: "c", text: "It turns into ash and cannot be undone" },
              { id: "d", text: "It melts into water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Burning", statement: "Burning is an irreversible change that turns paper into ash and smoke." },
            ],
            steps: [
              { reasoning: "Burning produces ash and smoke and cannot be reversed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It turns into ash and cannot be undone",
            commonErrors: ["Choosing melting — burning is not just a state change."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these changes are reversible: melting chocolate, freezing water, burning paper and dissolving salt?",
          response: {
            type: "numeric",
            parts: [{ label: "Reversible changes", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reversible changes", statement: "Melting, freezing and dissolving can be reversed; burning cannot." },
            ],
            steps: [
              { reasoning: "Melting chocolate, freezing water and dissolving salt are reversible.", marks: 1, markCode: "M" },
              { reasoning: "Burning paper is irreversible because it makes ash.", marks: 1, markCode: "M" },
              { reasoning: "Three changes are reversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting burning as reversible — ash cannot become paper again."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is evaporation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas turning into a liquid" },
              { id: "b", text: "Liquid turning into a solid" },
              { id: "c", text: "Solid turning into a liquid" },
              { id: "d", text: "Liquid turning into a gas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaporation", statement: "Evaporation changes a liquid into a gas, such as water to steam." },
            ],
            steps: [
              { reasoning: "Evaporation is liquid to gas.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Liquid turning into a gas",
            commonErrors: ["Choosing condensing — that is gas to liquid."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many state changes can water show: melting, freezing, evaporating and condensing?",
          response: {
            type: "numeric",
            parts: [{ label: "Changes", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water states", statement: "Water can melt, freeze, evaporate and condense." },
            ],
            steps: [
              { reasoning: "Water shows all four state changes.", marks: 1, markCode: "M" },
              { reasoning: "There are four changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only melting and freezing — evaporation and condensation also occur."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare dissolving salt in water with burning paper. How are the changes different?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Reversible vs irreversible", statement: "Dissolving can be reversed; burning changes the material permanently." },
            ],
            steps: [
              { reasoning: "Dissolving mixes salt into water but the salt can be recovered.", marks: 1, markCode: "M" },
              { reasoning: "Burning turns paper into ash and smoke, which cannot be undone.", marks: 1, markCode: "M" },
              { reasoning: "Dissolving is reversible; burning is irreversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dissolving is reversible; burning is irreversible and produces ash.",
            commonErrors: ["Saying both are the same — one can be undone and one cannot."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which result best shows that dissolving salt is reversible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The salt turns into ash" },
              { id: "b", text: "The water freezes solid" },
              { id: "c", text: "The salt tastes sweet" },
              { id: "d", text: "The water evaporates and salt crystals are left behind" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Reversing dissolving", statement: "Evaporating the water recovers the dissolved solid." },
            ],
            steps: [
              { reasoning: "Getting salt back proves the change can be reversed.", marks: 1, markCode: "M" },
              { reasoning: "Ash or freezing does not show recovery of the salt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The water evaporates and salt crystals are left behind",
            commonErrors: ["Choosing ash — that describes burning, not dissolving."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many irreversible changes are listed: burning paper and rusting iron?",
          response: {
            type: "numeric",
            parts: [{ label: "Irreversible changes", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irreversible changes", statement: "Burning and rusting permanently change materials." },
            ],
            steps: [
              { reasoning: "Burning paper and rusting iron are both irreversible.", marks: 1, markCode: "M" },
              { reasoning: "There are two irreversible changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting melting — melting is reversible."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these changes are irreversible: melting ice, burning paper, freezing water and rusting iron?",
          response: {
            type: "numeric",
            parts: [{ label: "Irreversible changes", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reversible vs irreversible", statement: "Melting and freezing reverse; burning and rusting do not." },
            ],
            steps: [
              { reasoning: "Burning paper and rusting iron are irreversible.", marks: 1, markCode: "M" },
              { reasoning: "Melting ice and freezing water are reversible.", marks: 1, markCode: "M" },
              { reasoning: "Two changes are irreversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting melting as irreversible — it can be frozen again."],
          },
        },
        {
          id: "pypsc-q-u2l1c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Ice, water and steam are all the same substance. What changes when water becomes steam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "The water is destroyed" },
              { id: "c", text: "The substance changes into a different material" },
              { id: "d", text: "The state changes from liquid to gas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "State change", statement: "Heating water changes its state from liquid to gas; the substance stays water." },
            ],
            steps: [
              { reasoning: "Water becomes steam in gas form.", marks: 1, markCode: "M" },
              { reasoning: "It is still water, only the state changed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The state changes from liquid to gas",
            commonErrors: ["Saying it becomes a new substance — it is still water in gas form."],
          },
        },
      ],
    },
  ],
};
