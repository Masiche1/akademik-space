import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "pypsc-u1-lesson-1-1",
  code: "1-1",
  title: "What Living Things Need",
  goal: "I CAN explain what plants, animals and humans need to stay alive and grow.",
  standards: [
    "PYP Science: Living things",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: Sharing the Planet",
  ],
  vocabulary: [
    { term: "Living thing", definition: "Anything that is alive — plants, animals and people." },
    { term: "Needs", definition: "Things a living thing must have to survive: food, water, air and shelter." },
    { term: "Photosynthesis", definition: "How plants make their own food using sunlight, water and air." },
    { term: "Shelter", definition: "A safe place to live that protects from weather and danger." },
    { term: "Grow", definition: "To get bigger and develop — living things grow, non-living things do not." },
    { term: "Non-living", definition: "Something that is not alive, like a rock, a toy or water." },
  ],
  concepts: [
    {
      id: "pypsc-u1l1-c1-needs-of-living",
      title: "Needs of plants and animals",
      skill: "Identify what plants and animals need to live and grow.",
      lesson: {
        sections: [
          {
            heading: "What all living things need",
            body: "All living things need **food**, **water**, **air** and **shelter**. Animals get food by eating plants or other animals. Plants make their own food through **photosynthesis** — they use sunlight, water and carbon dioxide from the air to make food and release oxygen. Without these needs, living things cannot survive.",
          },
          {
            heading: "Plants vs animals",
            body: "Plants need sunlight, water, air (carbon dioxide) and nutrients from soil. Animals need food (plants or other animals), water, air and shelter. A plant in a dark cupboard will not grow well — it needs light. A dog without water will become very ill — water is essential for all living things.",
          },
        ],
        keyFormulas: [
          { name: "Needs of all living things", statement: "Food + Water + Air + Shelter" },
          { name: "Photosynthesis", statement: "Sunlight + water + carbon dioxide → food + oxygen" },
        ],
        workedExample: {
          problem: "A potted plant on a windowsill is wilting. What might it need?",
          solution: "Check its needs: water (most likely — wilting often means thirsty), sunlight (is it getting enough?), and soil nutrients. Water it and move it to a brighter spot if needed.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u1l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a need of all living things?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air" },
              { id: "b", text: "Toys" },
              { id: "c", text: "Water" },
              { id: "d", text: "Food" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Needs of living things", statement: "Food, water, air and shelter are essential; toys are not." },
            ],
            steps: [
              { reasoning: "Toys are not needed for survival — food, water, air and shelter are.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Toys",
            commonErrors: ["Choosing 'shelter' — shelter is a real need; toys are not."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant is kept in a dark cupboard for a week. Predict what will happen and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plant needs", statement: "Plants need sunlight for photosynthesis to make food." },
            ],
            steps: [
              { reasoning: "The plant will probably grow poorly, turn yellow or wilt.", marks: 1, markCode: "M" },
              { reasoning: "Without sunlight it cannot photosynthesise and make food.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It will grow poorly or wilt — no sunlight means no photosynthesis.",
            commonErrors: ["Saying the plant will 'die immediately' — it weakens gradually without light."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two identical plants get the same water and soil. Plant A is on a sunny windowsill; Plant B is in a dark cupboard. After two weeks, A is green and tall, B is yellow and small. Explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photosynthesis and light", statement: "Light is needed for photosynthesis; the only difference between the plants is light." },
            ],
            steps: [
              { reasoning: "The only difference between the plants is light — A gets sunlight, B does not.", marks: 1, markCode: "M" },
              { reasoning: "Plant A can photosynthesise and make food, so it grows green and tall.", marks: 1, markCode: "M" },
              { reasoning: "Plant B cannot make enough food without light, so it turns yellow and stays small.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plant A had sunlight for photosynthesis; Plant B lacked light so could not make food and grew poorly.",
            commonErrors: ["Blaming water or soil — both plants got the same; light was the only difference."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class wants to find out what a bean plant needs to grow well.",
          parts: [
            { label: "a", prompt: "List the four basic needs all living things share.", marks: 2 },
            { label: "b", prompt: "Name two extra things a plant needs that an animal does not.", marks: 2 },
            { label: "c", prompt: "Design a simple fair test: what would you change and what would you keep the same?", marks: 2 },
            { label: "d", prompt: "Predict what happens to a plant with no water for a week and explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plant vs animal needs", statement: "All need food/water/air/shelter; plants also need sunlight and soil nutrients." },
            ],
            steps: [
              { part: "a", reasoning: "Food, water, air, shelter.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All four listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sunlight and soil/nutrients (carbon dioxide from air also counts).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two plant-specific needs given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Change one thing, e.g. water for one plant and not the other.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Keep everything else the same — same light, soil, pot size — so the test is fair.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It will wilt and may die — water is essential for all living things.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) food/water/air/shelter (b) sunlight, soil nutrients (c) change one variable, keep rest same (d) wilts/dies without water",
            commonErrors: ["In (c), changing several things at once — the test must be fair."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which need is especially important for a plant but not for an animal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food" },
              { id: "b", text: "Air" },
              { id: "c", text: "Sunlight" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant needs", statement: "Plants need sunlight for photosynthesis; animals do not." },
            ],
            steps: [
              { reasoning: "Sunlight is a plant-specific need for making food.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sunlight",
            commonErrors: ["Choosing food — animals need food too, but plants make their own."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many basic needs do all living things share? Count food, water, air and shelter.",
          response: {
            type: "numeric",
            parts: [{ label: "Needs", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Universal needs", statement: "All living things need food, water, air and shelter." },
            ],
            steps: [
              { reasoning: "The four shared needs are food, water, air and shelter.", marks: 1, markCode: "M" },
              { reasoning: "Counting them gives four needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three needs by forgetting shelter."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bean seed is given water and warmth but kept in a dark box. Predict what will happen and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Light for plants", statement: "Plants need light to photosynthesise and make food." },
            ],
            steps: [
              { reasoning: "The seed may sprout but the seedling will grow weakly or fail to thrive.", marks: 1, markCode: "M" },
              { reasoning: "Without light it cannot make enough food through photosynthesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It will grow poorly — water and warmth help, but missing light stops food-making.",
            commonErrors: ["Saying nothing will happen — water and warmth still allow some growth."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which habitat provides the best match for a fish?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A windy mountain" },
              { id: "b", text: "A sandy beach" },
              { id: "c", text: "A dry desert" },
              { id: "d", text: "A pond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fish habitat", statement: "Fish need water for breathing and living." },
            ],
            steps: [
              { reasoning: "A pond provides water, food and shelter for a fish.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A pond",
            commonErrors: ["Choosing desert or mountain — they lack the water a fish needs."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A seed needs water, warmth and light to germinate. How many germination conditions are listed?",
          response: {
            type: "numeric",
            parts: [{ label: "Conditions", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Germination", statement: "Seeds need water, warmth and light to start growing." },
            ],
            steps: [
              { reasoning: "The listed conditions are water, warmth and light.", marks: 1, markCode: "M" },
              { reasoning: "There are three conditions in the list.", marks: 1, markCode: "M" },
              { reasoning: "The count is three.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting soil as a fourth condition — soil is not needed for germination."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare the needs of a plant and an animal. What do they share and what differs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Plant and animal needs", statement: "Both need water, air and shelter; plants also need light and soil nutrients, while animals eat other living things." },
            ],
            steps: [
              { reasoning: "They share water, air and shelter as basic living needs.", marks: 1, markCode: "M" },
              { reasoning: "Plants need sunlight and soil nutrients to make food.", marks: 1, markCode: "M" },
              { reasoning: "Animals need food from plants or other animals and often move to find it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shared: water, air, shelter. Plant extras: light and soil nutrients. Animal extra: food from living things.",
            commonErrors: ["Saying plants do not need air — they take in carbon dioxide for photosynthesis."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does photosynthesis produce for a plant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food and oxygen" },
              { id: "b", text: "Soil only" },
              { id: "c", text: "Oxygen only" },
              { id: "d", text: "Carbon dioxide only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Plants use sunlight, water and carbon dioxide to make food and release oxygen." },
            ],
            steps: [
              { reasoning: "Photosynthesis makes food and releases oxygen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Food and oxygen",
            commonErrors: ["Choosing oxygen only — the plant also makes food for itself."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many of these are basic needs for all living things: food, water, air, shelter, toys?",
          response: {
            type: "numeric",
            parts: [{ label: "Needs", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Basic needs", statement: "Food, water, air and shelter are needs; toys are not." },
            ],
            steps: [
              { reasoning: "Food, water, air and shelter are needs; toys are not.", marks: 1, markCode: "M" },
              { reasoning: "Four items are basic needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting toys as a need — toys are wants, not needs."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student says all living things need exactly the same things. Is this fully correct? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shared and specific needs", statement: "All living things share basic needs, but plants and animals have extra needs too." },
            ],
            steps: [
              { reasoning: "It is partly correct: food, water, air and shelter are shared needs.", marks: 1, markCode: "M" },
              { reasoning: "Plants also need sunlight and soil nutrients to make food.", marks: 1, markCode: "M" },
              { reasoning: "Animals need food from other living things, so their food sources differ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Partly — all share basic needs, but plants and animals have extra needs that differ.",
            commonErrors: ["Answering only yes or no without explaining the extra needs."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two identical seedlings get the same water and soil. One is in sunlight and one is in shade. Which result best supports the idea that plants need light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shaded seedling grows taller" },
              { id: "b", text: "Both seedlings stay the same size" },
              { id: "c", text: "The sunny seedling grows taller and greener" },
              { id: "d", text: "Both seedlings die immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Fair test evidence", statement: "When only light differs, the better-growing plant shows light is needed." },
            ],
            steps: [
              { reasoning: "Water and soil are the same, so light is the only difference.", marks: 1, markCode: "M" },
              { reasoning: "The sunny seedling growing better supports the need for light.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The sunny seedling grows taller and greener",
            commonErrors: ["Choosing same size — that would suggest light does not matter."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Besides food, water, air and shelter, how many extra needs does a plant have here: sunlight, soil nutrients and carbon dioxide?",
          response: {
            type: "numeric",
            parts: [{ label: "Extra needs", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant extras", statement: "Plants need sunlight, soil nutrients and carbon dioxide for photosynthesis." },
            ],
            steps: [
              { reasoning: "The extra plant needs are sunlight, soil nutrients and carbon dioxide.", marks: 1, markCode: "M" },
              { reasoning: "There are three extra needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting food as an extra — plants make food through photosynthesis."],
          },
        },
        {
          id: "pypsc-q-u1l1c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plant A gets sunlight and grows green; Plant B is kept dark and turns yellow. Both get the same water and soil. Which conclusion is best supported?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water causes plants to turn yellow" },
              { id: "b", text: "Light is needed for healthy plant growth" },
              { id: "c", text: "Plants do not need water" },
              { id: "d", text: "Soil causes plants to grow green" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence for light need", statement: "Because only light differs, the healthy plant shows light is essential." },
            ],
            steps: [
              { reasoning: "Water and soil are identical, so they cannot explain the difference.", marks: 1, markCode: "M" },
              { reasoning: "The plant with light grew better, so light is needed for healthy growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Light is needed for healthy plant growth",
            commonErrors: ["Blaming water or soil even though both plants received the same amount."],
          },
        },
      ],
    },
    {
      id: "pypsc-u1l1-c2-humans-needs",
      title: "What humans need",
      skill: "Explain the needs of humans and how we meet them.",
      lesson: {
        sections: [
          {
            heading: "Human needs",
            body: "Humans are living things, so we need the same basics: **food** for energy, **water** to stay hydrated, **air** to breathe, and **shelter** for safety. But humans also need **love and care**, **education** and **exercise** to grow healthy and happy. We get food from farms, animals and shops; water from taps and bottles; air by breathing; shelter from homes.",
          },
          {
            heading: "Keeping healthy",
            body: "To meet our needs we must **eat a balanced diet** (fruit, vegetables, protein, grains), **drink water**, **exercise** and **sleep**. Good hygiene — washing hands and teeth — keeps germs away. A healthy human grows, learns and has energy for school and play.",
          },
        ],
        keyFormulas: [
          { name: "Human needs", statement: "Food + Water + Air + Shelter + Love + Exercise + Sleep" },
          { name: "Healthy habits", statement: "Balanced food, water, exercise, sleep, hygiene" },
        ],
        workedExample: {
          problem: "Why do doctors say children should drink water instead of only fizzy drinks?",
          solution: "Water is essential for the body's needs — it hydrates, helps digestion and keeps energy up. Fizzy drinks have sugar and little water value.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u1l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a need that humans share with ALL living things?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "A mobile phone" },
              { id: "c", text: "Television" },
              { id: "d", text: "A bicycle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Universal needs", statement: "Food, water, air and shelter are needed by all living things." },
            ],
            steps: [
              { reasoning: "Water is a basic need for survival; phones, bikes and TVs are wants, not needs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water",
            commonErrors: ["Choosing 'food' would also work — but among options only water is listed."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two healthy habits that help humans meet their needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Healthy habits", statement: "Good habits — eating well, drinking water, exercising, sleeping, hygiene — meet human needs." },
            ],
            steps: [
              { reasoning: "One habit, e.g. eating a balanced diet or drinking water.", marks: 1, markCode: "M" },
              { reasoning: "Second habit, e.g. exercising, sleeping enough, or washing hands.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: balanced diet, water, exercise, sleep, hygiene.",
            commonErrors: ["Listing 'wants' like toys or games — the question asks about needs."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A child eats only sweets and fizzy drinks for a week. Explain two problems this causes for meeting the body's needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced diet", statement: "The body needs nutrients from varied foods; sugar alone cannot provide them." },
            ],
            steps: [
              { reasoning: "Problem 1: sweets and fizzy drinks lack vitamins, protein and fibre needed for growth and energy.", marks: 1, markCode: "M" },
              { reasoning: "Problem 2: too much sugar harms teeth and can cause energy crashes; little water means dehydration.", marks: 1, markCode: "M" },
              { reasoning: "The body cannot meet its needs properly on this diet alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Missing nutrients for growth/energy and too much sugar harms teeth/energy — body needs are not met.",
            commonErrors: ["Saying 'the child will get fat' only — the issue is missing nutrients, not just weight."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A family wants to stay healthy all year.",
          parts: [
            { label: "a", prompt: "List three basic needs every family member shares.", marks: 2 },
            { label: "b", prompt: "Name two foods that help meet the 'food' need well.", marks: 1 },
            { label: "c", prompt: "Suggest two activities that help meet the 'exercise' need.", marks: 2 },
            { label: "d", prompt: "Explain why sleep is a need, not just a want.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human needs", statement: "Humans need food, water, air, shelter plus exercise, sleep and care." },
            ],
            steps: [
              { part: "a", reasoning: "Food, water, air (or shelter).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Three listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Healthy foods, e.g. fruit, vegetables, protein, grains.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two activities, e.g. playing sport, walking, riding a bike.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both are real exercise activities.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sleep lets the body rest, grow and repair — without it we cannot stay healthy.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It is essential like food and water, so it is a need.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) food/water/air/shelter (b) fruit/veg/protein (c) sport/walking/bike (d) body repairs and grows during sleep",
            commonErrors: ["In (d), saying sleep is 'nice to have' — it is essential for health."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a want rather than a need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Shelter" },
              { id: "c", text: "A mobile phone" },
              { id: "d", text: "Food" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Needs and wants", statement: "Needs are essential for survival; wants are nice to have." },
            ],
            steps: [
              { reasoning: "A mobile phone is not needed to survive; food, water and shelter are.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A mobile phone",
            commonErrors: ["Choosing food — food is a basic need, not a want."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Children need about 9 to 11 hours of sleep. What is the minimum number of hours?",
          response: {
            type: "numeric",
            parts: [{ label: "Minimum hours", answer: 9, tolerance: 0, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Sleep needs", statement: "Children need about 9 to 11 hours of sleep." },
            ],
            steps: [
              { reasoning: "The recommended range is 9 to 11 hours.", marks: 1, markCode: "M" },
              { reasoning: "The minimum is 9 hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 hours",
            commonErrors: ["Choosing 11 hours — that is the maximum, not the minimum."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why humans need a balanced diet rather than only one type of food.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced diet", statement: "Different foods provide different nutrients needed for growth and energy." },
            ],
            steps: [
              { reasoning: "One food type cannot provide all the nutrients the body needs.", marks: 1, markCode: "M" },
              { reasoning: "A balanced diet gives energy, vitamins, protein and fibre for healthy growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A balanced diet supplies the different nutrients needed for energy, growth and health.",
            commonErrors: ["Saying one food is enough — different foods provide different nutrients."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which food is a good source of energy for the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water only" },
              { id: "b", text: "A toy" },
              { id: "c", text: "A rock" },
              { id: "d", text: "Rice or bread" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Energy foods", statement: "Grains such as rice and bread give the body energy." },
            ],
            steps: [
              { reasoning: "Rice and bread are grain foods that provide energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rice or bread",
            commonErrors: ["Choosing water — water is essential but does not give food energy."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many healthy habits are named in this list: balanced diet, drinking water, exercise, sleep and hygiene?",
          response: {
            type: "numeric",
            parts: [{ label: "Habits", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Healthy habits", statement: "Healthy habits include balanced diet, water, exercise, sleep and hygiene." },
            ],
            steps: [
              { reasoning: "All five listed items are healthy habits.", marks: 1, markCode: "M" },
              { reasoning: "There are five habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Leaving out hygiene — it is a healthy habit too."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A child skips breakfast and eats only sweets at lunch. Explain two ways this affects the body's needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nutrition effects", statement: "Skipping meals and eating only sweets denies the body needed nutrients and energy." },
            ],
            steps: [
              { reasoning: "The body misses nutrients needed for growth, learning and energy.", marks: 1, markCode: "M" },
              { reasoning: "Too much sugar harms teeth and can cause energy crashes.", marks: 1, markCode: "M" },
              { reasoning: "The food need is not met properly, so the child may feel tired or unwell.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Missing nutrients and too much sugar — the body's food need is not met properly.",
            commonErrors: ["Focusing only on feeling hungry — the bigger issue is missing nutrients."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should people cover their mouth when they cough or sneeze?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To stop germs spreading to others" },
              { id: "b", text: "To make a loud noise" },
              { id: "c", text: "To breathe faster" },
              { id: "d", text: "To taste food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stopping germs", statement: "Covering coughs and sneezes stops germs spreading and helps prevent illness." },
            ],
            steps: [
              { reasoning: "Covering stops germs from spreading to other people.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To stop germs spreading to others",
            commonErrors: ["Thinking it is just polite — it also protects health."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many healthy habits are listed here: eat vegetables, drink water, exercise and brush teeth?",
          response: {
            type: "numeric",
            parts: [{ label: "Habits", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Healthy habits", statement: "Eating vegetables, drinking water, exercising and brushing teeth are healthy habits." },
            ],
            steps: [
              { reasoning: "Each listed action is a healthy habit.", marks: 1, markCode: "M" },
              { reasoning: "There are four habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three by forgetting brushing teeth is hygiene."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plan one healthy day for a child. Include food, water, exercise, sleep and hygiene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Healthy routine", statement: "A healthy day includes balanced meals, water, exercise, enough sleep and good hygiene." },
            ],
            steps: [
              { reasoning: "Balanced meals and water are included for food and hydration.", marks: 1, markCode: "M" },
              { reasoning: "Exercise and enough sleep are included for a strong, rested body.", marks: 1, markCode: "M" },
              { reasoning: "Hygiene such as hand washing and tooth brushing is included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any plan covering balanced food, water, exercise, sleep and hygiene.",
            commonErrors: ["Listing only food — a healthy day needs all five habits."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which result best shows that hand washing helps prevent illness?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Washing makes hands bigger" },
              { id: "b", text: "The soap makes hands dry" },
              { id: "c", text: "Fewer germs on hands and fewer illnesses spread" },
              { id: "d", text: "Hands smell nice after washing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hygiene evidence", statement: "Hand washing removes germs, reducing the spread of illness." },
            ],
            steps: [
              { reasoning: "The key evidence is fewer germs and less illness spreading.", marks: 1, markCode: "M" },
              { reasoning: "Smelling nice or drying hands does not prove germs are removed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fewer germs on hands and fewer illnesses spread",
            commonErrors: ["Choosing a nice smell — smell is not evidence of germ removal."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these are healthy habits: washing hands, eating sweets, exercising, sleeping early and watching TV all day?",
          response: {
            type: "numeric",
            parts: [{ label: "Healthy habits", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Healthy habits", statement: "Washing hands, exercising and sleeping early are healthy; sweets and all-day TV are not." },
            ],
            steps: [
              { reasoning: "Washing hands, exercising and sleeping early are healthy habits.", marks: 1, markCode: "M" },
              { reasoning: "Eating sweets and watching TV all day are not healthy habits.", marks: 1, markCode: "M" },
              { reasoning: "Three healthy habits are listed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting sweets as healthy — occasional treats are fine but not a healthy habit."],
          },
        },
        {
          id: "pypsc-q-u1l1c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which statement best explains why exercise helps the body stay healthy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the body need no food" },
              { id: "b", text: "It stops all germs" },
              { id: "c", text: "It removes the need for sleep" },
              { id: "d", text: "It strengthens muscles and bones and keeps the heart healthy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exercise benefits", statement: "Exercise strengthens muscles and bones and supports a healthy heart." },
            ],
            steps: [
              { reasoning: "Exercise builds strength and supports heart health.", marks: 1, markCode: "M" },
              { reasoning: "The body still needs food, sleep and hygiene; exercise adds to health.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It strengthens muscles and bones and keeps the heart healthy",
            commonErrors: ["Choosing options that remove needs — the body still needs food, water, sleep and hygiene."],
          },
        },
      ],
    },
  ],
};
