import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "pypsc-u1-lesson-1-3",
  code: "1-3",
  title: "The Human Body",
  goal: "I CAN name body parts and senses and explain how we keep our bodies healthy.",
  standards: [
    "PYP Science: Living things",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: How We Express Ourselves",
  ],
  vocabulary: [
    { term: "Sense", definition: "A way we take in information from the world: sight, hearing, smell, taste, touch." },
    { term: "Organ", definition: "A body part that does a special job, like the heart or lungs." },
    { term: "Skeleton", definition: "The frame of bones inside the body that gives shape and protects organs." },
    { term: "Muscle", definition: "Body tissue that contracts to make us move." },
    { term: "Heart", definition: "The organ that pumps blood around the body." },
    { term: "Lungs", definition: "The organs that take in oxygen when we breathe." },
  ],
  concepts: [
    {
      id: "pypsc-u1l3-c1-senses-body",
      title: "Senses and body parts",
      skill: "Name the five senses and identify what body parts do.",
      lesson: {
        sections: [
          {
            heading: "The five senses",
            body: "We experience the world through **five senses**. **Sight** uses our eyes to see light and colour. **Hearing** uses our ears to detect sound. **Smell** uses our nose to detect odours. **Taste** uses our tongue to detect sweet, salty, sour and bitter. **Touch** uses our skin to feel hot, cold, rough, smooth and pressure.",
          },
          {
            heading: "Inside the body",
            body: "Inside, our body has special **organs**: the **heart** pumps blood around the body; the **lungs** take in oxygen when we breathe; the **brain** controls thoughts and movements; the **stomach** digests food. The **skeleton** of bones gives the body shape and protects organs like the brain and heart. **Muscles** attached to bones make us move.",
          },
        ],
        keyFormulas: [
          { name: "Five senses", statement: "Sight (eyes), Hearing (ears), Smell (nose), Taste (tongue), Touch (skin)" },
          { name: "Key organs", statement: "Heart pumps blood; lungs breathe; brain controls; stomach digests" },
        ],
        workedExample: {
          problem: "You smell freshly baked bread. Which sense is working and which body part detects it?",
          solution: "Smell — detected by the nose. The nose sends signals to the brain telling us it is bread.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u1l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body part do we use for the sense of hearing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eyes" },
              { id: "b", text: "Nose" },
              { id: "c", text: "Ears" },
              { id: "d", text: "Tongue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Senses and organs", statement: "Each sense has a specific organ: hearing = ears." },
            ],
            steps: [
              { reasoning: "Hearing uses the ears.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ears",
            commonErrors: ["Choosing 'nose' — that is smell."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of the heart?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart function", statement: "The heart pumps blood around the body, carrying oxygen and nutrients." },
            ],
            steps: [
              { reasoning: "The heart pumps blood.", marks: 1, markCode: "M" },
              { reasoning: "This carries oxygen and nutrients to all body parts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It pumps blood around the body to deliver oxygen and nutrients.",
            commonErrors: ["Saying 'it makes blood' — it pumps blood, does not create it."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If a person holds ice in one hand and touches a warm mug with the other, which sense is working and how does the brain know which hand is which?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Touch sense", statement: "Skin detects temperature and pressure; signals go to the brain which identifies location." },
            ],
            steps: [
              { reasoning: "The sense is touch — skin detects cold and heat.", marks: 1, markCode: "M" },
              { reasoning: "Different skin areas send different signals to the brain.", marks: 1, markCode: "M" },
              { reasoning: "The brain knows which hand because each area sends its own message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Touch; the brain knows which hand because different skin areas send separate signals.",
            commonErrors: ["Saying 'the hand knows' — the brain interprets the signals from each area."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Match each body part to its job.",
          parts: [
            { label: "a", prompt: "Heart — what does it do?", marks: 1 },
            { label: "b", prompt: "Lungs — what do they do?", marks: 1 },
            { label: "c", prompt: "Brain — what does it do?", marks: 1 },
            { label: "d", prompt: "Skeleton — what does it do?", marks: 2 },
            { label: "e", prompt: "Tongue — what sense does it serve?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Body parts and functions", statement: "Each organ has a specific job essential for life." },
            ],
            steps: [
              { part: "a", reasoning: "Pumps blood around the body.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Takes in oxygen when we breathe.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Controls thoughts, movements and body functions.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gives the body shape and protects organs.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Made of bones; enables movement with muscles.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Taste — detects sweet, salty, sour, bitter.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "It is the organ for the sense of taste.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pumps blood (b) breathing/oxygen (c) controls body (d) shape+protection+movement (e) taste",
            commonErrors: ["In (d), saying skeleton 'makes blood' — bones make blood cells but mainly give shape/protection."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body part is used for the sense of taste?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eyes" },
              { id: "b", text: "Ears" },
              { id: "c", text: "Tongue" },
              { id: "d", text: "Skin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Senses and organs", statement: "Taste is detected by the tongue." },
            ],
            steps: [
              { reasoning: "The tongue detects sweet, salty, sour and bitter tastes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Tongue",
            commonErrors: ["Choosing skin — skin is for touch, not taste."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many senses do humans have: sight, hearing, smell, taste and touch?",
          response: {
            type: "numeric",
            parts: [{ label: "Senses", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Five senses", statement: "Humans have five senses: sight, hearing, smell, taste and touch." },
            ],
            steps: [
              { reasoning: "The five senses are sight, hearing, smell, taste and touch.", marks: 1, markCode: "M" },
              { reasoning: "There are five senses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting balance as a sixth sense — the lesson focuses on the five main senses."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what the lungs do when we breathe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lung function", statement: "The lungs take in oxygen from the air when we breathe." },
            ],
            steps: [
              { reasoning: "We breathe air into the lungs.", marks: 1, markCode: "M" },
              { reasoning: "The lungs take in oxygen that the body needs for energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The lungs take in oxygen from the air to supply the body.",
            commonErrors: ["Saying lungs make food — they supply oxygen for breathing."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ controls thoughts, feelings and movements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heart" },
              { id: "b", text: "Stomach" },
              { id: "c", text: "Brain" },
              { id: "d", text: "Lungs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Brain function", statement: "The brain controls thoughts, movements and body functions." },
            ],
            steps: [
              { reasoning: "The brain is the control organ.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Brain",
            commonErrors: ["Choosing heart — the heart pumps blood but does not control thoughts."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many body-part jobs are described here: the heart pumps blood, the lungs take in oxygen, and the stomach digests food?",
          response: {
            type: "numeric",
            parts: [{ label: "Jobs", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organ functions", statement: "Heart pumps blood, lungs take in oxygen and stomach digests food." },
            ],
            steps: [
              { reasoning: "The heart, lungs and stomach each have a described job.", marks: 1, markCode: "M" },
              { reasoning: "There are three jobs described.", marks: 1, markCode: "M" },
              { reasoning: "Each organ has a different essential job.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting organs instead of jobs — three jobs are described."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare the senses of sight and touch. How are they similar and different?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Sight and touch", statement: "Both are senses that send information to the brain but use different organs and detect different things." },
            ],
            steps: [
              { reasoning: "Both are senses that help us learn about the world.", marks: 1, markCode: "M" },
              { reasoning: "Sight uses the eyes to detect light and colour.", marks: 1, markCode: "M" },
              { reasoning: "Touch uses the skin to feel heat, cold, texture and pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both are senses; sight uses eyes for light/colour, touch uses skin for temperature/texture.",
            commonErrors: ["Saying touch only feels pain — touch also senses heat, cold, texture and pressure."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main job of the skeleton?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To digest food" },
              { id: "b", text: "To give the body shape and protect organs" },
              { id: "c", text: "To pump blood" },
              { id: "d", text: "To taste food" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Skeleton function", statement: "The skeleton gives the body shape and protects organs like the brain and heart." },
            ],
            steps: [
              { reasoning: "The skeleton supports the body and protects organs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To give the body shape and protect organs",
            commonErrors: ["Choosing digestion — that is the stomach's job."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many sense organs are listed here: eyes, ears, nose, tongue and skin?",
          response: {
            type: "numeric",
            parts: [{ label: "Organs", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sense organs", statement: "Eyes, ears, nose, tongue and skin serve the five senses." },
            ],
            steps: [
              { reasoning: "The listed organs are eyes, ears, nose, tongue and skin.", marks: 1, markCode: "M" },
              { reasoning: "There are five sense organs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting four by forgetting skin for touch."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how muscles and the skeleton work together to make the body move.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Movement", statement: "Muscles pull on bones; the skeleton gives the body structure for movement." },
            ],
            steps: [
              { reasoning: "Muscles are attached to bones and contract to pull them.", marks: 1, markCode: "M" },
              { reasoning: "The skeleton provides the frame and joints that allow movement.", marks: 1, markCode: "M" },
              { reasoning: "Together they let the body move in different ways.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscles pull on bones while the skeleton gives shape and support for movement.",
            commonErrors: ["Saying muscles move by themselves — they need bones to pull against."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which situation shows the sense of sight being used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hearing a bell ring" },
              { id: "b", text: "Smelling fresh bread" },
              { id: "c", text: "Seeing the colour of a leaf" },
              { id: "d", text: "Feeling a rough surface" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sight", statement: "Sight uses the eyes to detect light and colour." },
            ],
            steps: [
              { reasoning: "Seeing colour uses the eyes and light.", marks: 1, markCode: "M" },
              { reasoning: "The other options use hearing, smell or touch.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Seeing the colour of a leaf",
            commonErrors: ["Choosing hearing or smell — those use different senses."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many correct sense-organ pairs are listed: eyes-sight, ears-hearing, nose-smell, feet-taste?",
          response: {
            type: "numeric",
            parts: [{ label: "Correct pairs", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sense-organ pairs", statement: "Eyes, ears and nose match sight, hearing and smell; feet do not detect taste." },
            ],
            steps: [
              { reasoning: "Eyes-sight, ears-hearing and nose-smell are correct pairs.", marks: 1, markCode: "M" },
              { reasoning: "Feet-taste is incorrect because the tongue detects taste.", marks: 1, markCode: "M" },
              { reasoning: "Three pairs are correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting feet-taste — taste is detected by the tongue."],
          },
        },
        {
          id: "pypsc-q-u1l3c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What happens to the body if the lungs cannot take in enough oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The body gets less oxygen and cannot work properly" },
              { id: "b", text: "The body makes more food" },
              { id: "c", text: "The skeleton stops growing" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Oxygen need", statement: "The body needs oxygen from the lungs to work properly." },
            ],
            steps: [
              { reasoning: "Without enough oxygen the body cannot get the energy it needs.", marks: 1, markCode: "M" },
              { reasoning: "This can make a person feel weak or unwell.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The body gets less oxygen and cannot work properly",
            commonErrors: ["Choosing nothing changes — oxygen is essential for the body."],
          },
        },
      ],
    },
    {
      id: "pypsc-u1l3-c2-healthy-body",
      title: "Keeping the body healthy",
      skill: "Explain how diet, exercise, sleep and hygiene keep the body healthy.",
      lesson: {
        sections: [
          {
            heading: "Food, water and exercise",
            body: "The body needs **balanced food** — fruit, vegetables, protein, grains and dairy — to get energy and nutrients. **Water** keeps us hydrated. **Exercise** strengthens muscles and bones, keeps the heart healthy and helps us sleep. Too much junk food and too little exercise can cause illness and tiredness.",
          },
          {
            heading: "Sleep and hygiene",
            body: "**Sleep** lets the body rest, grow and repair — children need about $9$-$11$ hours. **Hygiene** prevents germs: washing hands before eating, brushing teeth, and bathing. Germs cause illness — covering coughs and sneezes stops them spreading. A healthy body fights illness better.",
          },
        ],
        keyFormulas: [
          { name: "Healthy habits", statement: "Balanced diet + water + exercise + sleep + hygiene" },
          { name: "Why hygiene", statement: "Germs cause illness; washing hands and teeth removes them" },
        ],
        workedExample: {
          problem: "Why should you wash your hands before eating?",
          solution: "Hands touch many surfaces covered in germs. Washing removes germs that could enter the body through food and cause illness.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u1l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which habit best helps keep the body healthy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eating only sweets" },
              { id: "b", text: "Washing hands before eating" },
              { id: "c", text: "Watching TV all day" },
              { id: "d", text: "Skipping sleep" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hygiene", statement: "Washing hands removes germs that cause illness." },
            ],
            steps: [
              { reasoning: "Hand washing is a healthy hygiene habit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Washing hands before eating",
            commonErrors: ["Choosing 'eating only sweets' — that harms health."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is exercise important for a healthy body? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exercise benefits", statement: "Exercise strengthens muscles/bones, keeps heart healthy, and helps sleep." },
            ],
            steps: [
              { reasoning: "Reason 1: strengthens muscles and bones / keeps heart healthy.", marks: 1, markCode: "M" },
              { reasoning: "Reason 2: gives energy, helps sleep, or prevents illness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: strengthens muscles/bones, healthy heart, energy, better sleep, illness prevention.",
            commonErrors: ["Saying 'exercise makes you taller' — it strengthens but does not grow bones longer after childhood."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A child refuses to eat vegetables and only eats chips and cake. Explain two ways this affects their body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nutrition", statement: "Vegetables provide vitamins and fibre needed for health; junk food lacks them." },
            ],
            steps: [
              { reasoning: "Effect 1: missing vitamins and nutrients needed for growth and immune function.", marks: 1, markCode: "M" },
              { reasoning: "Effect 2: too much fat/salt/sugar harms teeth, energy levels and can cause illness.", marks: 1, markCode: "M" },
              { reasoning: "The body cannot stay healthy on this diet alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Missing nutrients for growth/health and too much junk food harms teeth/energy — unhealthy diet.",
            commonErrors: ["Focusing only on weight — the main issue is missing nutrients."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class is making a 'Healthy Body' poster.",
          parts: [
            { label: "a", prompt: "List three healthy habits for the poster.", marks: 2 },
            { label: "b", prompt: "Explain why each habit helps the body.", marks: 2 },
            { label: "c", prompt: "Name one illness germs can cause and one way to prevent it.", marks: 2 },
            { label: "d", prompt: "Why is it important that children learn healthy habits early?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health education", statement: "Healthy habits learned young become lifelong habits." },
            ],
            steps: [
              { part: "a", reasoning: "Three habits, e.g. wash hands, eat vegetables, exercise.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All three are genuinely healthy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Explanations linking habit to benefit — hand washing stops germs, vegetables give nutrients, exercise strengthens body.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each habit has a correct reason.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "An illness (cold, flu, stomach bug) and prevention (hand washing, covering coughs, vaccines).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both illness and prevention correctly linked.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Early habits form lifelong health — children who learn healthy habits stay healthier.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 3 habits (b) correct reasons (c) illness+prevention (d) lifelong habits",
            commonErrors: ["In (b), listing habits without explaining why they help."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which habit best helps keep teeth healthy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brushing teeth regularly" },
              { id: "b", text: "Eating only sweets" },
              { id: "c", text: "Skipping brushing" },
              { id: "d", text: "Drinking only fizzy drinks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dental hygiene", statement: "Brushing teeth removes germs and food that can harm teeth." },
            ],
            steps: [
              { reasoning: "Brushing teeth is a healthy hygiene habit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Brushing teeth regularly",
            commonErrors: ["Choosing sweets — sugar harms teeth."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many food types are listed for a balanced diet: fruit, vegetables, protein, grains and dairy?",
          response: {
            type: "numeric",
            parts: [{ label: "Food types", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced diet", statement: "A balanced diet includes fruit, vegetables, protein, grains and dairy." },
            ],
            steps: [
              { reasoning: "The food types are fruit, vegetables, protein, grains and dairy.", marks: 1, markCode: "M" },
              { reasoning: "There are five types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting four by forgetting dairy."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is sleep important for a growing child?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sleep function", statement: "Sleep lets the body rest, grow and repair." },
            ],
            steps: [
              { reasoning: "Sleep gives the body time to rest and repair.", marks: 1, markCode: "M" },
              { reasoning: "It also supports growth and helps the child stay healthy and learn well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sleep lets the body rest, grow and repair, supporting health and learning.",
            commonErrors: ["Saying sleep is wasted time — it is essential for growth and repair."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes many illnesses that hygiene helps prevent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Germs" },
              { id: "b", text: "Exercise" },
              { id: "c", text: "Sleep" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Germs", statement: "Germs cause illness; hygiene removes or stops them spreading." },
            ],
            steps: [
              { reasoning: "Germs are the cause of many illnesses.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Germs",
            commonErrors: ["Choosing water — clean water helps health, but germs cause illness."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these are healthy habits: washing hands, skipping sleep, exercising and eating a balanced diet?",
          response: {
            type: "numeric",
            parts: [{ label: "Healthy habits", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Healthy habits", statement: "Washing hands, exercising and balanced diet are healthy; skipping sleep is not." },
            ],
            steps: [
              { reasoning: "Washing hands, exercising and balanced diet are healthy habits.", marks: 1, markCode: "M" },
              { reasoning: "Skipping sleep is unhealthy because the body needs rest.", marks: 1, markCode: "M" },
              { reasoning: "Three healthy habits are listed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting skipping sleep as healthy — sleep is a need."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how germs can spread and two ways hygiene helps stop them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Germ spread", statement: "Germs spread through hands, coughs, sneezes and shared objects." },
            ],
            steps: [
              { reasoning: "Germs spread when people touch shared surfaces or each other.", marks: 1, markCode: "M" },
              { reasoning: "Covering coughs and sneezes stops germs becoming airborne.", marks: 1, markCode: "M" },
              { reasoning: "Washing hands removes germs before they enter the body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Germs spread by touch and coughs; covering coughs and washing hands stops them.",
            commonErrors: ["Saying germs only spread by magic — they spread through contact and droplets."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a benefit of regular exercise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes muscles and bones stronger" },
              { id: "b", text: "It removes the need for food" },
              { id: "c", text: "It stops all germs instantly" },
              { id: "d", text: "It replaces sleep" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exercise benefit", statement: "Exercise strengthens muscles and bones and supports a healthy heart." },
            ],
            steps: [
              { reasoning: "Exercise builds strength and supports health.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It makes muscles and bones stronger",
            commonErrors: ["Choosing options that remove needs — exercise adds health but does not replace food or sleep."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many hygiene habits are listed: wash hands, brush teeth, bathe and cover coughs?",
          response: {
            type: "numeric",
            parts: [{ label: "Habits", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hygiene habits", statement: "Washing hands, brushing teeth, bathing and covering coughs are hygiene habits." },
            ],
            steps: [
              { reasoning: "All four listed actions are hygiene habits.", marks: 1, markCode: "M" },
              { reasoning: "There are four habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting three by forgetting covering coughs is hygiene."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Design a simple anti-germ routine for a school day. Include at least three hygiene actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Anti-germ routine", statement: "Good routines remove germs and stop them spreading." },
            ],
            steps: [
              { reasoning: "Wash hands before eating and after using shared objects.", marks: 1, markCode: "M" },
              { reasoning: "Cover coughs and sneezes and avoid touching face with dirty hands.", marks: 1, markCode: "M" },
              { reasoning: "Brush teeth and keep personal items clean.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any routine with hand washing, covering coughs and clean habits.",
            commonErrors: ["Listing only one action — a routine should include several hygiene steps."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which observation best supports the idea that diet affects health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A child who eats vegetables has more energy than one who eats only sweets" },
              { id: "b", text: "A child with sweets likes the taste" },
              { id: "c", text: "A child wearing red feels happy" },
              { id: "d", text: "A child who sleeps has dreams" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diet and health", statement: "Balanced food gives nutrients and energy; poor diet can reduce health." },
            ],
            steps: [
              { reasoning: "Comparing energy after different diets shows diet affects health.", marks: 1, markCode: "M" },
              { reasoning: "Liking taste or colour is not evidence about health.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A child who eats vegetables has more energy than one who eats only sweets",
            commonErrors: ["Choosing preference — health evidence comes from how the body functions."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these are NOT healthy habits: eating only sweets, watching TV all day, exercising and sleeping early?",
          response: {
            type: "numeric",
            parts: [{ label: "Unhealthy habits", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Healthy habits", statement: "Exercising and sleeping early are healthy; only sweets and all-day TV are not." },
            ],
            steps: [
              { reasoning: "Eating only sweets and watching TV all day are not healthy habits.", marks: 1, markCode: "M" },
              { reasoning: "Exercising and sleeping early are healthy habits.", marks: 1, markCode: "M" },
              { reasoning: "Two items are not healthy habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting exercising as unhealthy — exercise is healthy."],
          },
        },
        {
          id: "pypsc-q-u1l3c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is it important for children to learn healthy habits early?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Early habits can become lifelong habits that keep them healthy" },
              { id: "b", text: "Children do not need habits later" },
              { id: "c", text: "Healthy habits stop working after age five" },
              { id: "d", text: "It makes school shorter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Early habits", statement: "Healthy habits learned young can become lifelong habits." },
            ],
            steps: [
              { reasoning: "Early learning supports lifelong health.", marks: 1, markCode: "M" },
              { reasoning: "Habits do not expire; they continue to help if kept.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Early habits can become lifelong habits that keep them healthy",
            commonErrors: ["Choosing options that say habits stop mattering — healthy habits remain useful."],
          },
        },
      ],
    },
  ],
};
