import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cils-u4-lesson-4-1",
  code: "4-1",
  title: "The digestive system",
  goal: "I CAN describe the digestive system and explain how food is digested and absorbed.",
  standards: ["0893 Biology: human body systems"],
  vocabulary: [
    { term: "Digestion", definition: "Breaking down food into small absorbable molecules." },
    { term: "Enzyme", definition: "Protein that speeds up chemical reactions — e.g. amylase." },
    { term: "Oesophagus", definition: "Tube carrying food from mouth to stomach." },
    { term: "Stomach", definition: "Muscular organ mixing food with acid and enzymes." },
    { term: "Small intestine", definition: "Main site of digestion and absorption." },
    { term: "Villi", definition: "Finger-like projections in small intestine — increase absorption." },
  ],
  concepts: [
    {
      id: "cils-u4-digestive",
      title: "Digestive system",
      skill: "Trace food through the digestive system and explain digestion and absorption.",
      lesson: {
        sections: [
          {
            heading: "The journey",
            body: "Mouth → oesophagus → stomach → small intestine → large intestine → rectum.\n\n- **Mouth**: mechanical + amylase starts starch digestion\n- **Stomach**: acid + pepsin digest proteins\n- **Small intestine**: bile + pancreatic enzymes complete digestion; villi absorb\n- **Large intestine**: water absorbed; faeces formed",
          },
          {
            heading: "Enzymes",
            body: "- **Amylase**: starch → maltose\n- **Protease**: protein → amino acids\n- **Lipase**: fat → fatty acids + glycerol",
          },
          {
            heading: "Absorption",
            body: "Villi in small intestine have huge surface area — absorb digested food into blood. Water absorbed in large intestine.",
          },
        ],
        keyFormulas: [
          { name: "Digestion", statement: "Mouth→stomach→small intestine; enzymes break food; villi absorb." },
        ],
        workedExample: {
          problem: "Why does the small intestine have villi?",
          solution: "Villi massively increase surface area for absorbing digested nutrients into blood.",
        },
      },
      questions: [
        {
          id: "cils-u4-dig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is most food digested and absorbed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small intestine" },
              { id: "b", text: "Stomach" },
              { id: "c", text: "Mouth" },
              { id: "d", text: "Large intestine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Small intestine", statement: "Main digestion + absorption site." },
            ],
            steps: [
              { reasoning: "Small intestine has enzymes, bile, and villi for absorption.", working: "small intestine", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Small intestine",
            commonErrors: ["Choosing (b) — stomach digests but doesn't absorb much."],
          },
        },
        {
          id: "cils-u4-dig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of bile in digestion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bile", statement: "Emulsifies fats — breaks large droplets into small for lipase." },
            ],
            steps: [
              { reasoning: "Bile emulsifies fat — increases surface area for lipase.", working: "emulsifies", marks: 1, markCode: "M" },
              { reasoning: "Not an enzyme — mechanical action on fats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile emulsifies fats into small droplets for efficient lipase digestion.",
            commonErrors: ["Saying bile 'digests' fat — it emulsifies, lipase digests."],
          },
        },
        {
          id: "cils-u4-dig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how food moves from mouth to stomach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Peristalsis", statement: "Wave-like muscle contractions push food along oesophagus." },
            ],
            steps: [
              { reasoning: "Swallowing moves food to oesophagus.", working: "swallow", marks: 1, markCode: "M" },
              { reasoning: "Peristalsis — rhythmic muscle contractions push bolus down.", working: "peristalsis", marks: 1, markCode: "M" },
              { reasoning: "Works against gravity — can eat upside down.", working: "gravity", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Peristalsis — wave-like muscle contractions push food down oesophagus.",
            commonErrors: ["Saying 'gravity pulls it' — peristalsis is active muscle action."],
          },
        },
        {
          id: "cils-u4-dig-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace a piece of bread through digestion.",
          parts: [
            { label: "a", prompt: "What happens in the mouth?", marks: 2 },
            { label: "b", prompt: "What happens in the stomach?", marks: 3 },
            { label: "c", prompt: "What happens in the small intestine?", marks: 2 },
            { label: "d", prompt: "What happens to undigested material?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Digestion trace", statement: "Starch→maltose→glucose; protein→amino acids; absorbed at villi." },
            ],
            steps: [
              { part: "a", reasoning: "Chewing (mechanical); salivary amylase starts starch→maltose.", working: "amylase", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HCl kills bacteria; pepsin digests protein; churning mixes.", working: "acid+pepsin", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Functions correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bile emulsifies; pancreatic amylase completes starch→glucose; villi absorb.", working: "complete digestion", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Water absorbed in large intestine; waste → faeces → rectum.", working: "water+faeces", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chew + amylase (b) acid + pepsin (c) bile + enzymes + villi absorb (d) water absorbed, faeces formed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Forgetting bile in small intestine — needed for fats."],
          },
        },
      ],
    },
    {
      id: "cils-u4-circulatory",
      title: "The circulatory system",
      skill: "Describe the heart, blood vessels and how blood circulates.",
      lesson: {
        sections: [
          {
            heading: "Heart structure",
            body: "Four chambers: right atrium, right ventricle, left atrium, left ventricle. Left ventricle wall thicker — pumps to whole body.",
          },
          {
            heading: "Double circulation",
            body: "Pulmonary circuit: heart→lungs→heart (oxygenation). Systemic circuit: heart→body→heart (deliver O₂).",
          },
          {
            heading: "Blood vessels",
            body: "- **Arteries**: away from heart, thick walls, high pressure\n- **Veins**: to heart, valves prevent backflow\n- **Capillaries**: tiny, exchange nutrients/waste",
          },
        ],
        keyFormulas: [
          { name: "Circulation", statement: "Heart pumps blood: pulmonary (lungs) + systemic (body) circuits." },
        ],
        workedExample: {
          problem: "Why is the left ventricle wall thicker?",
          solution: "It pumps blood to the entire body — needs more force than right ventricle (lungs only).",
        },
      },
      questions: [
        {
          id: "cils-u4-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries blood AWAY from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artery" },
              { id: "b", text: "Vein" },
              { id: "c", text: "Capillary" },
              { id: "d", text: "Ventricle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Artery", statement: "Carries blood away from heart." },
            ],
            steps: [
              { reasoning: "Arteries = away; veins = towards.", working: "artery", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Artery",
            commonErrors: ["Choosing (b) — veins return blood TO heart."],
          },
        },
        {
          id: "cils-u4-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do veins have valves?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vein valves", statement: "Prevent backflow — blood flows one direction to heart." },
            ],
            steps: [
              { reasoning: "Low pressure in veins — valves stop backward flow.", working: "backflow", marks: 1, markCode: "M" },
              { reasoning: "Ensures blood returns to heart efficiently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valves prevent backflow — ensure one-way flow back to heart.",
            commonErrors: ["Saying 'for pressure' — veins are low pressure; valves help gravity."],
          },
        },
        {
          id: "cils-u4-circ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain double circulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Double circulation", statement: "Pulmonary (heart-lungs-heart) + systemic (heart-body-heart)." },
            ],
            steps: [
              { reasoning: "Pulmonary: right side pumps deoxygenated blood to lungs for oxygenation.", working: "pulmonary", marks: 1, markCode: "M" },
              { reasoning: "Systemic: left side pumps oxygenated blood to body tissues.", working: "systemic", marks: 1, markCode: "M" },
              { reasoning: "Two separate circuits = efficient oxygen delivery.", working: "efficient", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two circuits: pulmonary (to lungs for O₂) and systemic (to body) — separate oxygenation and delivery.",
            commonErrors: ["One circuit — heart has two sides for two purposes."],
          },
        },
        {
          id: "cils-u4-circ-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace blood through the heart and body.",
          parts: [
            { label: "a", prompt: "Describe the pulmonary circuit.", marks: 3 },
            { label: "b", prompt: "Describe the systemic circuit.", marks: 3 },
            { label: "c", prompt: "Why is oxygenated blood kept separate?", marks: 2 },
            { label: "d", prompt: "What happens if valves fail?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circulation", statement: "Pulmonary oxygenates; systemic delivers; separation maintains efficiency." },
            ],
            steps: [
              { part: "a", reasoning: "Right atrium→right ventricle→pulmonary artery→lungs→pulmonary vein→left atrium.", working: "pulmonary path", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Path correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Left atrium→left ventricle→aorta→body→vena cava→right atrium.", working: "systemic path", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Path correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Separation prevents mixing — maintains oxygen gradient for efficient delivery.", working: "separation", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Backflow — inefficient circulation, heart murmur.", working: "backflow", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) right→lungs→left (b) left→body→right (c) prevents mixing (d) backflow/murmur",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Path correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Path correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (a) using artery for return — pulmonary VEIN returns to heart."],
          },
        },
      ],
    },
    {
      id: "cils-u4-respiratory",
      title: "The respiratory system",
      skill: "Describe gas exchange in lungs and the role of alveoli.",
      lesson: {
        sections: [
          {
            heading: "Breathing mechanism",
            body: "Inhale: diaphragm contracts + ribcage expands → air in. Exhale: diaphragm relaxes → air out. Passive/active process.",
          },
          {
            heading: "Gas exchange",
            body: "Alveoli = tiny air sacs with thin walls + capillaries. O₂ diffuses into blood; CO₂ diffuses out — down concentration gradients.",
          },
          {
            heading: "Adaptations",
            body: "Alveoli: huge surface area, thin walls (1 cell), moist lining, rich blood supply — maximise diffusion rate.",
          },
        ],
        keyFormulas: [
          { name: "Gas exchange", statement: "Diffusion across alveoli — O₂ in, CO₂ out down gradients." },
        ],
        workedExample: {
          problem: "Why are alveoli so small and numerous?",
          solution: "Maximises surface area for gas exchange — thin walls + blood supply enable rapid diffusion.",
        },
      },
      questions: [
        {
          id: "cils-u4-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does gas exchange occur in the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alveoli" },
              { id: "b", text: "Trachea" },
              { id: "c", text: "Bronchi" },
              { id: "d", text: "Larynx" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alveoli", statement: "Air sacs where gas exchange happens." },
            ],
            steps: [
              { reasoning: "Alveoli are the site of O₂/CO₂ exchange.", working: "alveoli", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alveoli",
            commonErrors: ["Choosing (c) — bronchi just conduct air."],
          },
        },
        {
          id: "cils-u4-resp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to the diaphragm during inhalation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inhalation", statement: "Diaphragm contracts and flattens → chest volume increases." },
            ],
            steps: [
              { reasoning: "Diaphragm contracts/flattens — increases thoracic volume.", working: "contracts", marks: 1, markCode: "M" },
              { reasoning: "Lower pressure → air rushes in.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diaphragm contracts and flattens, increasing chest volume so air enters.",
            commonErrors: ["Saying 'diaphragm relaxes' — that's exhalation."],
          },
        },
        {
          id: "cils-u4-resp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how oxygen moves from air to blood in the lungs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diffusion", statement: "O₂ diffuses down concentration gradient across thin alveolar wall." },
            ],
            steps: [
              { reasoning: "O₂ concentration higher in alveoli than blood — gradient exists.", working: "gradient", marks: 1, markCode: "M" },
              { reasoning: "Thin alveolar wall (1 cell) = short diffusion distance.", working: "thin wall", marks: 1, markCode: "M" },
              { reasoning: "O₂ dissolves in moist lining, diffuses into capillary blood.", working: "into blood", marks: 1, markCode: "M" },
              { reasoning: "Mechanism clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O₂ diffuses down gradient through thin alveolar wall into capillary blood.",
            commonErrors: ["Saying 'pumped' — it's passive diffusion."],
          },
        },
        {
          id: "cils-u4-resp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare inspired and expired air.",
          parts: [
            { label: "a", prompt: "State two differences in composition.", marks: 2 },
            { label: "b", prompt: "Explain why expired air has these differences.", marks: 3 },
            { label: "c", prompt: "Describe how breathing rate changes during exercise.", marks: 2 },
            { label: "d", prompt: "Why does exercise increase breathing rate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gas exchange", statement: "Expired air: less O₂, more CO₂, more water vapour — from cellular respiration." },
            ],
            steps: [
              { part: "a", reasoning: "Less O₂, more CO₂ (and more water vapour).", working: "differences", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cells respire: use O₂, produce CO₂; gas exchange replaces it.", working: "respiration", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate and depth increase — faster, deeper breaths.", working: "faster", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Muscles need more O₂ for respiration to release energy; more CO₂ must be removed.", working: "O₂ demand", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) less O₂, more CO₂ (b) cellular respiration (c) faster/deeper (d) more O₂ needed, CO₂ removed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Differences correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Saying expired air has no oxygen — just less than inspired."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u4-digestive-notes",
      title: "Digestive and circulatory systems — revision notes",
      summary: "Digestion journey, enzymes, bile, heart, circulation, breathing.",
      sections: [
        {
          heading: "Digestion",
          body: "Mouth→stomach→small intestine→large intestine. Amylase/protease/lipase; bile emulsifies fat; villi absorb. Peristalsis moves food.",
        },
        {
          heading: "Circulation & breathing",
          body: "Heart: 4 chambers, double circulation (pulmonary+systemic). Arteries out, veins in, capillaries exchange. Alveoli: gas exchange by diffusion; diaphragm contracts to inhale.",
        },
      ],
    },
  ],
};
