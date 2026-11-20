import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edps2-u1-lesson-1-2",
  code: "1-2",
  title: "The Human Body",
  goal: "I CAN describe body parts and how the body works.",
  standards: ["Year 2 Science: Humans"],
  vocabulary: [
    { term: "Skeleton", definition: "The framework of bones that supports the body." },
    { term: "Muscle", definition: "Tissue that pulls bones to make movement." },
    { term: "Digestive system", definition: "Organs that break down food." },
    { term: "Teeth", definition: "Hard parts in mouth for chewing food." },
  ],
  concepts: [
    {
      id: "edps2-u1-body",
      title: "Bones, muscles and movement",
      skill: "Understand how skeleton and muscles work together.",
      lesson: {
        sections: [
          { heading: "Skeleton and muscles", body: "The **skeleton** is made of bones — it supports the body and protects organs. **Muscles** attach to bones and pull them to make movement. Muscles only pull, never push — they work in pairs." },
          { heading: "Keeping bones healthy", body: "Bones need calcium (from milk, cheese, green vegetables) and exercise. Weight-bearing exercise (running, jumping) makes bones stronger." },
        ],
        keyFormulas: [
          { name: "Skeleton", statement: "Bones support and protect" },
          { name: "Muscles", statement: "Pull bones to move" },
          { name: "Calcium", statement: "Keeps bones strong" },
        ],
        workedExample: {
          problem: "How do muscles help us move?",
          solution: "Muscles contract (squeeze) and pull on bones, making them move at joints.",
        },
      },
      questions: [
        {
          id: "edps2-u1-bo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "What does the skeleton do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Digests food" }, { id: "b", text: "Supports and protects the body" }, { id: "c", text: "Makes blood" }, { id: "d", text: "Sees light" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Skeleton", statement: "Supports/protects." }], steps: [{ reasoning: "Skeleton function.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Supports and protects the body", commonErrors: ["Wrong function."] },
        },
        {
          id: "edps2-u1-bo-q2", difficulty: "core", totalMarks: 2,
          stem: "How do muscles move bones?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They push bones" }, { id: "b", text: "They pull bones" }, { id: "c", text: "They melt bones" }, { id: "d", text: "They grow bones" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Muscles", statement: "Pull bones." }], steps: [
            { reasoning: "Muscles pull.", marks: 1, markCode: "M" },
            { reasoning: "Answer: pull bones.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** They pull bones", commonErrors: ["Wrong mechanism."] },
        },
        {
          id: "edps2-u1-bo-q3", difficulty: "core", totalMarks: 3,
          stem: "Name two foods that help keep bones strong.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Bone health", statement: "Milk, cheese, green vegetables (calcium)." }], steps: [
            { reasoning: "Food 1.", marks: 1, markCode: "A" },
            { reasoning: "Food 2.", marks: 1, markCode: "A" },
            { reasoning: "Both valid.", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. 'Milk; cheese'", commonErrors: ["Invalid or only one."] },
        },
        {
          id: "edps2-u1-bo-q4", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how muscles work in pairs to bend and straighten your arm.",
          parts: [
            { label: "a", prompt: "What muscles do", marks: 1 },
            { label: "b", prompt: "Bending", marks: 1 },
            { label: "c", prompt: "Straightening", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Muscle pairs", statement: "One contracts to bend, other to straighten." }], steps: [
            { part: "a", reasoning: "Pull bones.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bicep contracts.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Tricep contracts.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
          ], finalAnswer: "One muscle contracts to pull bone (bend), the other contracts to pull back (straighten)", commonErrors: ["No pair concept."] },
        },
      ],
    },
    {
      id: "edps2-u1-digest",
      title: "Digestion and teeth",
      skill: "Understand how food is digested and the role of teeth.",
      lesson: {
        sections: [
          { heading: "Teeth types", body: "**Incisors** (front): cut food. **Canines** (pointy): tear food. **Premolars/molars** (back): grind and crush food. We have 20 baby teeth, then 32 adult teeth." },
          { heading: "Digestion", body: "Food journey: **mouth** (chew with teeth, saliva starts breaking down) → **oesophagus** (tube to stomach) → **stomach** (churns with acid) → **small intestine** (nutrients absorbed) → waste out. Teeth must be cleaned to stay healthy." },
        ],
        keyFormulas: [
          { name: "Incisors/canines", statement: "Cut / tear" },
          { name: "Molars", statement: "Grind and crush" },
          { name: "Digestion", statement: "Break food into nutrients" },
        ],
        workedExample: {
          problem: "Which teeth grind food?",
          solution: "Molars (back teeth) — they have flat surfaces for grinding.",
        },
      },
      questions: [
        {
          id: "edps2-u1-dg-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which teeth are at the front and cut food?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Molars" }, { id: "b", text: "Incisors" }, { id: "c", text: "Canines" }, { id: "d", text: "Wisdom teeth" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Incisors", statement: "Front teeth, cut." }], steps: [{ reasoning: "Incisors cut.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Incisors", commonErrors: ["Wrong teeth."] },
        },
        {
          id: "edps2-u1-dg-q2", difficulty: "core", totalMarks: 2,
          stem: "What happens to food in the stomach?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It's absorbed" }, { id: "b", text: "It's churned with acid" }, { id: "c", text: "It's stored forever" }, { id: "d", text: "It's chewed" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Digestion", statement: "Stomach churns food." }], steps: [
            { reasoning: "Identify process.", marks: 1, markCode: "M" },
            { reasoning: "Answer: churned with acid.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** It's churned with acid", commonErrors: ["Wrong stage."] },
        },
        {
          id: "edps2-u1-dg-q3", difficulty: "core", totalMarks: 3,
          stem: "Why do we need to clean our teeth?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Dental health", statement: "Removes food/plaques, prevents decay." }], steps: [
            { reasoning: "Reason identified.", marks: 1, markCode: "M" },
            { reasoning: "Explained.", marks: 1, markCode: "A" },
            { reasoning: "Clear.", marks: 1, markCode: "A" },
          ], finalAnswer: "To remove food and plaque, preventing tooth decay and cavities", commonErrors: ["Vague or wrong."] },
        },
        {
          id: "edps2-u1-dg-q4", difficulty: "challenge", totalMarks: 4,
          stem: "Order the digestive journey: stomach, mouth, small intestine, oesophagus.",
          parts: [
            { label: "a", prompt: "First", marks: 1 },
            { label: "b", prompt: "Second", marks: 1 },
            { label: "c", prompt: "Third", marks: 1 },
            { label: "d", prompt: "Fourth", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Digestion order", statement: "mouth → oesophagus → stomach → small intestine." }], steps: [
            { part: "a", reasoning: "Mouth first.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Oesophagus second.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Stomach third.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Small intestine fourth.", marks: 1, markCode: "A" },
          ], finalAnswer: "mouth → oesophagus → stomach → small intestine", commonErrors: ["Wrong order."] },
        },
      ],
    },
    {
      id: "edps2-u1-senses",
      title: "The five senses",
      skill: "Describe how each sense works and stays safe.",
      lesson: {
        sections: [
          { heading: "Sense organs", body: "**Eyes** (sight): detect light. **Ears** (hearing): detect sound vibrations. **Nose** (smell): detect chemicals in air. **Tongue** (taste): detect sweet, salty, sour, bitter. **Skin** (touch): detect pressure, temperature, texture." },
          { heading: "Keeping senses safe", body: "Don't stare at the sun (eyes). Don't listen to loud music for long (ears). Wash hands before touching face. Skin protects us — keep it clean and covered in sun." },
        ],
        keyFormulas: [
          { name: "Sight/hearing", statement: "Eyes / ears" },
          { name: "Smell/taste/touch", statement: "Nose / tongue / skin" },
          { name: "Safety", statement: "Protect sense organs" },
        ],
        workedExample: {
          problem: "Why shouldn't we stare at the sun?",
          solution: "Bright light can damage the eyes — the retina is very sensitive.",
        },
      },
      questions: [
        {
          id: "edps2-u1-se-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which sense organ detects taste?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nose" }, { id: "b", text: "Tongue" }, { id: "c", text: "Skin" }, { id: "d", text: "Ears" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Taste", statement: "Tongue." }], steps: [{ reasoning: "Tongue tastes.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Tongue", commonErrors: ["Wrong organ."] },
        },
        {
          id: "edps2-u1-se-q2", difficulty: "core", totalMarks: 2,
          stem: "What can the skin sense?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only colour" }, { id: "b", text: "Touch, temperature, texture" }, { id: "c", text: "Only pain" }, { id: "d", text: "Sound" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Touch", statement: "Pressure, temperature, texture." }], steps: [
            { reasoning: "Identify skin senses.", marks: 1, markCode: "M" },
            { reasoning: "Answer: touch/temp/texture.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** Touch, temperature, texture", commonErrors: ["Incomplete."] },
        },
        {
          id: "edps2-u1-se-q3", difficulty: "core", totalMarks: 3,
          stem: "Why shouldn't we listen to very loud music for long?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hearing safety", statement: "Loud sound can damage ears." }], steps: [
            { reasoning: "Risk identified.", marks: 1, markCode: "M" },
            { reasoning: "Explained.", marks: 1, markCode: "A" },
            { reasoning: "Clear.", marks: 1, markCode: "A" },
          ], finalAnswer: "Loud sounds can damage the delicate parts of the ear, causing hearing loss", commonErrors: ["Vague or wrong."] },
        },
        {
          id: "edps2-u1-se-q4", difficulty: "challenge", totalMarks: 4,
          stem: "Match each sense organ to what it detects: eyes, nose, skin.",
          parts: [
            { label: "a", prompt: "Eyes", marks: 1 },
            { label: "b", prompt: "Nose", marks: 1 },
            { label: "c", prompt: "Skin", marks: 1 },
            { label: "d", prompt: "Why protect them?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Senses", statement: "eyes=light; nose=chemicals; skin=pressure/temp." }], steps: [
            { part: "a", reasoning: "Light.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Smells.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Touch/temp.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Protection reason.", marks: 1, markCode: "R" },
          ], finalAnswer: "eyes=light, nose=smells, skin=touch/temp; protect from damage", commonErrors: ["Mismatched or no reason."] },
        },
      ],
    },
  ],
};
