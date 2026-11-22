import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "edps6-u2-lesson-2-2",
  code: "2-2",
  title: "Circulation and Breathing",
  goal: "I CAN describe the circulatory and respiratory systems in detail.",
  standards: ["Year 6 Science: Body systems"],
  vocabulary: [
    { term: "Heart", definition: "Muscular pump with four chambers." },
    { term: "Artery/vein/capillary", definition: "Vessels carrying blood." },
    { term: "Alveolus", definition: "Air sac for gas exchange." },
    { term: "Diaphragm", definition: "Muscle controlling breathing." },
  ],
  concepts: [
    {
      id: "edps6-u2-circulation",
      title: "The circulatory system",
      skill: "Describe the heart, blood vessels and circulation.",
      lesson: {
        sections: [
          {
            heading: "Heart and vessels",
            body: "Heart has **4 chambers** (2 atria, 2 ventricles). **Arteries** carry oxygenated blood away (except pulmonary); **veins** carry deoxygenated back (except pulmonary); **capillaries** exchange materials. **Double circulation**: pulmonary (heart→lungs→heart) + systemic (heart→body→heart).",
          },
          {
            heading: "Blood",
            body: "**Red cells** (haemoglobin carries O₂), **white cells** (immunity), **platelets** (clotting), **plasma** (transports). Blood pressure = force on artery walls; pulse = heartbeat.",
          },
        ],
        keyFormulas: [
          { name: "4 chambers", statement: "2 atria + 2 ventricles" },
          { name: "Arteries", statement: "Away from heart" },
          { name: "Veins", statement: "To heart" },
        ],
        workedExample: {
          problem: "Why are arteries thick-walled?",
          solution: "They carry high-pressure blood away from heart.",
        },
      },
      questions: [
        {
          id: "edps6-u2-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many chambers does the heart have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heart", statement: "4 chambers." },
            ],
            steps: [{ reasoning: "Recall number.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 4",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edps6-u2-ci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which vessels carry blood away from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Villi" },
              { id: "b", text: "Arteries" },
              { id: "c", text: "Veins" },
              { id: "d", text: "Capillaries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arteries",
                statement: "Away from heart.",
              },
            ],
            steps: [
              { reasoning: "Recall direction.", marks: 1, markCode: "M" },
              { reasoning: "Answer: arteries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Arteries",
            commonErrors: ["Wrong vessel."],
          },
        },
        {
          id: "edps6-u2-ci-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the path of blood through the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circulation",
                statement: "Heart→lungs→heart→body→heart.",
              },
            ],
            steps: [
              { reasoning: "Heart→lungs.", marks: 1, markCode: "A" },
              { reasoning: "Heart→body.", marks: 1, markCode: "A" },
              { reasoning: "Return path.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Heart → lungs (oxygenate) → heart → body (deliver O₂) → heart",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edps6-u2-ci-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why double circulation is more efficient than single.",
          parts: [
            { label: "a", prompt: "Single circulation", marks: 1 },
            { label: "b", prompt: "Double circulation", marks: 1 },
            { label: "c", prompt: "Efficiency", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Double circulation",
                statement: "Separate O₂/deO₂ = efficient.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Single described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Double described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Efficiency explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Separate pulmonary and systemic circuits keep oxygenated blood at full pressure for body tissues",
            commonErrors: ["No efficiency link."],
          },
        },
      ],
    },
    {
      id: "edps6-u2-breathing",
      title: "The respiratory system",
      skill: "Describe breathing mechanics and gas exchange.",
      lesson: {
        sections: [
          {
            heading: "Breathing system",
            body: "Air enters **nose/mouth** → **trachea** → **bronchi** → **lungs** → **alveoli** (gas exchange). **Diaphragm** + rib muscles control breathing. **Alveoli** have thin walls + huge surface area + blood capillaries for efficient O₂/CO₂ exchange.",
          },
          {
            heading: "Gas exchange",
            body: "Oxygen diffuses from alveoli (high) into blood (low); CO₂ diffuses out. Breathing rate increases with exercise to supply more O₂. **Smoking** damages cilia and alveoli → lung disease.",
          },
        ],
        keyFormulas: [
          { name: "Alveoli", statement: "Gas exchange site" },
          { name: "Diaphragm", statement: "Breathing muscle" },
          { name: "Diffusion", statement: "Gas high→low" },
        ],
        workedExample: {
          problem: "Why do alveoli have thin walls?",
          solution: "Short diffusion distance for fast gas exchange.",
        },
      },
      questions: [
        {
          id: "edps6-u2-br-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does gas exchange occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Larynx" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Alveoli" },
              { id: "d", text: "Trachea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveoli",
                statement: "Exchange site.",
              },
            ],
            steps: [{ reasoning: "Alveoli site.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Alveoli",
            commonErrors: ["Wrong structure."],
          },
        },
        {
          id: "edps6-u2-br-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What controls breathing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heart" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Diaphragm and rib muscles" },
              { id: "d", text: "Stomach" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Breathing",
                statement: "Diaphragm+muscles.",
              },
            ],
            steps: [
              { reasoning: "Recall control.", marks: 1, markCode: "M" },
              { reasoning: "Answer: diaphragm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Diaphragm and rib muscles",
            commonErrors: ["Wrong organ."],
          },
        },
        {
          id: "edps6-u2-br-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how oxygen gets from air into blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas exchange",
                statement: "Diffusion across alveoli.",
              },
            ],
            steps: [
              { reasoning: "Path described.", marks: 1, markCode: "A" },
              { reasoning: "Diffusion explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Air reaches alveoli → O₂ diffuses across thin walls into blood capillaries",
            commonErrors: ["No diffusion."],
          },
        },
        {
          id: "edps6-u2-br-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why smoking damages lungs.",
          parts: [
            { label: "a", prompt: "Smoke effect", marks: 1 },
            { label: "b", prompt: "Cilia damage", marks: 1 },
            { label: "c", prompt: "Alveoli damage", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Smoking",
                statement: "Damages cilia+alveoli → lung disease.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Smoke described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Cilia explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Alveoli explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Smoke paralyzes cilia (can't clear mucus) and damages alveoli walls, reducing gas exchange and causing disease",
            commonErrors: ["Incomplete damage."],
          },
        },
      ],
    },
  ],
};
