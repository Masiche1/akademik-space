import type { Lesson } from "../../../types.ts";

export const lesson412: Lesson = {
  id: "cial-b-u4-lesson-4-2",
  code: "4-2",
  title: "Mammalian circulatory system",
  goal: "I CAN describe the mammalian circulatory system, blood components and the cardiac cycle.",
  standards: ["9700 Unit 9: transport in mammals"],
  vocabulary: [
    {
      term: "Double circulation",
      definition:
        "Two circuits: pulmonary (heart→lungs→heart) and systemic (heart→body→heart).",
    },
    {
      term: "Artery",
      definition:
        "Blood vessel carrying blood away from heart; thick muscular walls.",
    },
    {
      term: "Vein",
      definition:
        "Blood vessel carrying blood to heart; valves prevent backflow.",
    },
    {
      term: "Capillary",
      definition: "Thin-walled vessel for exchange between blood and tissues.",
    },
    {
      term: "Erythrocyte",
      definition: "Red blood cell — haemoglobin carries oxygen.",
    },
    { term: "Leukocyte", definition: "White blood cell — immune defence." },
  ],
  concepts: [
    {
      id: "cial-b-u4-circulation",
      title: "Circulatory system structure",
      skill: "Describe blood vessels, heart structure and double circulation.",
      lesson: {
        sections: [
          {
            heading: "Blood vessels",
            body: "Arteries: thick muscular walls, carry blood away from heart under high pressure. Veins: thinner walls, valves prevent backflow, carry blood to heart. Capillaries: single-cell walls, site of exchange.",
          },
          {
            heading: "The heart",
            body: "Four chambers: right atrium, right ventricle, left atrium, left ventricle. Left ventricle has thickest wall (pumps to whole body). Septum separates oxygenated (left) from deoxygenated (right) blood.",
          },
          {
            heading: "Double circulation",
            body: "Pulmonary circuit: right ventricle→pulmonary artery→lungs→pulmonary vein→left atrium. Systemic circuit: left ventricle→aorta→body→vena cava→right atrium. Ensures oxygenated and deoxygenated blood never mix.",
          },
        ],
        keyFormulas: [
          {
            name: "Circulation",
            statement:
              "Arteries out, veins in, capillaries exchange; double circuit.",
          },
        ],
        workedExample: {
          problem: "Why does the left ventricle have the thickest wall?",
          solution:
            "It pumps blood to the entire body — needs more force than right ventricle (lungs only).",
        },
      },
      questions: [
        {
          id: "cial-b-u4-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries blood away from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Venule" },
              { id: "b", text: "Capillary" },
              { id: "c", text: "Artery" },
              { id: "d", text: "Vein" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Artery",
                statement: "Carries blood away from heart.",
              },
            ],
            steps: [
              {
                reasoning: "Artery = away from heart.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Artery",
            commonErrors: ["Confusing artery/vein direction."],
          },
        },
        {
          id: "cial-b-u4-ci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the four chambers of the heart.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heart chambers",
                statement: "Right/left atrium and ventricle.",
              },
            ],
            steps: [
              { reasoning: "Any two named.", marks: 1, markCode: "M" },
              { reasoning: "All four correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Right atrium, right ventricle, left atrium, left ventricle.",
            commonErrors: ["Missing atrium/ventricle distinction."],
          },
        },
        {
          id: "cial-b-u4-ci-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what 'double circulation' means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double circulation",
                statement:
                  "Pulmonary + systemic circuits; oxygenated/deoxygenated never mix.",
              },
            ],
            steps: [
              {
                reasoning: "Pulmonary circuit: heart→lungs→heart.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Systemic circuit: heart→body→heart.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Two separate circuits.", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two circuits: pulmonary (lungs) and systemic (body).",
            commonErrors: ["Saying it's a single loop."],
          },
        },
        {
          id: "cial-b-u4-ci-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Circulatory system.",
          parts: [
            { label: "a", prompt: "Artery vs vein?", marks: 2 },
            { label: "b", prompt: "Four heart chambers?", marks: 2 },
            { label: "c", prompt: "Double circulation?", marks: 3 },
            {
              label: "d",
              prompt: "Why is left ventricle wall thickest?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circulation",
                statement: "Vessels+chambers+double circuit+ventricle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Artery=away, vein=to heart.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Thick walls vs valves.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "RA, RV, LA, LV.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Pulmonary circuit named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Systemic circuit named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Two circuits explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Pumps to whole body.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Needs more force.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) artery/vein (b) 4 chambers (c) pulmonary+systemic (d) pumps to body",
          },
        },
        {
          id: "cial-b-u4-ci-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature of capillaries makes them the site of exchange between blood and tissues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have thick muscular walls" },
              { id: "b", text: "Their walls are one cell thick" },
              { id: "c", text: "They are the widest vessels" },
              { id: "d", text: "They contain valves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capillary", statement: "Thin-walled vessel for exchange with tissues." },
            ],
            steps: [
              { reasoning: "One-cell-thick walls give a short diffusion distance for exchange.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Walls one cell thick",
            commonErrors: ["Describing artery walls."],
          },
        },
        {
          id: "cial-b-u4-ci-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do veins contain valves?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vein valves", statement: "Prevent backflow of blood as it returns to the heart." },
            ],
            steps: [
              { reasoning: "Blood in veins flows against gravity and at low pressure.", marks: 1, markCode: "M" },
              { reasoning: "Valves close to stop backflow, keeping blood moving toward the heart.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valves prevent backflow of blood returning to the heart.",
            commonErrors: ["Saying valves regulate blood pressure."],
          },
        },
        {
          id: "cial-b-u4-ci-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the pulmonary artery carry, and why is this unusual?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pulmonary artery", statement: "Carries deoxygenated blood from right ventricle to lungs." },
            ],
            steps: [
              { reasoning: "It carries deoxygenated blood from the right ventricle to the lungs.", marks: 1, markCode: "M" },
              { reasoning: "This is unusual because arteries normally carry oxygenated blood away from the heart.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deoxygenated blood to the lungs — an exception to the artery rule.",
            commonErrors: ["Saying it carries oxygenated blood."],
          },
        },
        {
          id: "cial-b-u4-ci-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries oxygenated blood back to the heart from the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aorta" },
              { id: "b", text: "Pulmonary vein" },
              { id: "c", text: "Vena cava" },
              { id: "d", text: "Pulmonary artery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pulmonary vein", statement: "Carries oxygenated blood lungs→left atrium." },
            ],
            steps: [
              { reasoning: "Pulmonary vein returns oxygenated blood to the left atrium.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pulmonary vein",
            commonErrors: ["Confusing pulmonary artery and vein."],
          },
        },
        {
          id: "cial-b-u4-ci-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the advantage of double circulation in mammals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double circulation", statement: "Separate pulmonary and systemic circuits keep oxygenated and deoxygenated blood apart." },
            ],
            steps: [
              { reasoning: "Pulmonary circuit sends deoxygenated blood to lungs only.", marks: 1, markCode: "M" },
              { reasoning: "Systemic circuit sends oxygenated blood to the whole body.", marks: 1, markCode: "M" },
              { reasoning: "Oxygenated and deoxygenated blood never mix in the heart.", marks: 1, markCode: "M" },
              { reasoning: "Tissues receive fully oxygenated blood at high pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two circuits keep oxygenated/deoxygenated blood separate, supplying tissues with oxygen-rich blood.",
            commonErrors: ["Describing it as a single loop."],
          },
        },
        {
          id: "cial-b-u4-ci-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Blood returning from the body via the vena cava first enters which chamber of the heart?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart flow", statement: "Vena cava→right atrium→right ventricle→pulmonary artery." },
            ],
            steps: [
              { reasoning: "Vena cava empties into the right atrium.", marks: 1, markCode: "M" },
              { reasoning: "Blood then passes to the right ventricle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right atrium.",
            commonErrors: ["Saying left atrium or ventricle."],
          },
        },
        {
          id: "cial-b-u4-ci-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Trace the path of blood through the pulmonary circuit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pulmonary circuit", statement: "Right ventricle→pulmonary artery→lungs→pulmonary vein→left atrium." },
            ],
            steps: [
              { reasoning: "Deoxygenated blood leaves the right ventricle via the pulmonary artery.", marks: 1, markCode: "M" },
              { reasoning: "Blood passes through lung capillaries where gas exchange occurs.", marks: 1, markCode: "M" },
              { reasoning: "Oxygenated blood returns via the pulmonary vein.", marks: 1, markCode: "M" },
              { reasoning: "It enters the left atrium to begin the systemic circuit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right ventricle→pulmonary artery→lungs→pulmonary vein→left atrium.",
            commonErrors: ["Reversing artery and vein, or ending at the ventricle."],
          },
        },
        {
          id: "cial-b-u4-ci-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the wall of the left ventricle much thicker than that of the right ventricle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ventricle walls", statement: "Left ventricle pumps to whole body; needs more muscle force." },
            ],
            steps: [
              { reasoning: "Left ventricle must generate higher pressure to push blood through the systemic circuit.", marks: 1, markCode: "M" },
              { reasoning: "Thicker myocardium provides the extra force; right ventricle only pumps to lungs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thicker wall generates the higher pressure needed to pump blood around the whole body.",
            commonErrors: ["Saying both ventricles pump equally far."],
          },
        },
        {
          id: "cial-b-u4-ci-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare arteries and veins in terms of wall structure, pressure and valves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Artery vs vein", statement: "Arteries: thick muscular walls, high pressure, no valves. Veins: thinner walls, low pressure, valves present." },
            ],
            steps: [
              { reasoning: "Arteries have thick muscular/elastic walls to withstand high pressure.", marks: 1, markCode: "M" },
              { reasoning: "Veins have thinner walls with less muscle.", marks: 1, markCode: "M" },
              { reasoning: "Veins contain valves to prevent backflow; arteries do not.", marks: 1, markCode: "M" },
              { reasoning: "Pressure is high in arteries, low in veins.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arteries = thick walls, high pressure, no valves; veins = thin walls, low pressure, valves.",
            commonErrors: ["Saying veins have thicker walls than arteries."],
          },
        },
        {
          id: "cial-b-u4-ci-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of the septum in the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stores blood between beats" },
              { id: "b", text: "It pumps blood into the aorta" },
              { id: "c", text: "It separates oxygenated and deoxygenated blood" },
              { id: "d", text: "It controls heart rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Septum", statement: "Wall separating left and right sides of the heart." },
            ],
            steps: [
              { reasoning: "The septum keeps oxygenated (left) and deoxygenated (right) blood apart.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Separates oxygenated and deoxygenated blood",
            commonErrors: ["Thinking the septum is a valve."],
          },
        },
        {
          id: "cial-b-u4-ci-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Circulatory system.",
          parts: [
            { label: "a", prompt: "Name the three types of blood vessel.", marks: 1 },
            { label: "b", prompt: "Describe the function of capillaries.", marks: 2 },
            { label: "c", prompt: "Trace the pulmonary circuit.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circulation", statement: "Vessels+capillary function+pulmonary circuit." },
            ],
            steps: [
              { part: "a", reasoning: "Arteries, veins and capillaries.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Site of exchange between blood and tissues.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Thin walls → short diffusion distance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Right ventricle→pulmonary artery→lungs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gas exchange in lung capillaries.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pulmonary vein→left atrium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) artery/vein/capillary (b) exchange site (c) RV→lungs→LA",
          },
        },
        {
          id: "cial-b-u4-ci-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The heart and circulation.",
          parts: [
            { label: "a", prompt: "Name the four chambers.", marks: 1 },
            { label: "b", prompt: "Explain what double circulation means.", marks: 3 },
            { label: "c", prompt: "Why does the left ventricle have the thickest wall?", marks: 2 },
            { label: "d", prompt: "Compare artery and vein structure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart", statement: "Chambers+circuit+ventricle+vessel comparison." },
            ],
            steps: [
              { part: "a", reasoning: "Right/left atrium and ventricle.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pulmonary circuit heart→lungs→heart.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Systemic circuit heart→body→heart.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two separate circuits; blood never mixes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pumps blood to entire body.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Needs more force → thicker myocardium.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Arteries thick walls/high pressure.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Veins thin walls/low pressure/valves.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both points contrasted correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 chambers (b) pulmonary+systemic (c) pumps to body (d) thick/thin walls",
          },
        },
      ],
    },
    {
      id: "cial-b-u4-blood",
      title: "Blood components and the cardiac cycle",
      skill: "Describe blood components and the cardiac cycle.",
      lesson: {
        sections: [
          {
            heading: "Blood components",
            body: "Plasma: liquid matrix (water, proteins, nutrients, wastes). Erythrocytes: no nucleus, haemoglobin carries O₂/CO₂. Leukocytes: immune defence (phagocytes, lymphocytes). Platelets: clotting. Haematocrit = RBC proportion.",
          },
          {
            heading: "Cardiac cycle",
            body: "Diastole: atria and ventricles relax, blood fills. Atrial systole: atria contract, filling ventricles. Ventricular systole: ventricles contract, pumping blood out. Valves prevent backflow — 'lub-dub' sounds.",
          },
          {
            heading: "Blood pressure",
            body: "Systolic pressure (ventricular contraction) / diastolic (relaxation). Measured in mmHg. High pressure = hypertension; low = hypotension. Controlled by heart rate, vessel diameter, blood volume.",
          },
        ],
        keyFormulas: [
          {
            name: "Blood",
            statement:
              "Plasma+RBC+WBC+platelets; cardiac cycle=diastole→atrial systole→ventricular systole.",
          },
        ],
        workedExample: {
          problem: "What is the function of haemoglobin?",
          solution:
            "Binds oxygen in lungs (high O₂) and releases it in tissues (low O₂) — reversible binding.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-bc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component carries oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Platelets" },
              { id: "b", text: "Leukocytes" },
              { id: "c", text: "Haemoglobin in erythrocytes" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haemoglobin",
                statement: "Iron-containing protein in RBCs carrying O₂.",
              },
            ],
            steps: [
              { reasoning: "Haemoglobin in RBCs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Haemoglobin in erythrocytes",
            commonErrors: [
              "Confusing with plasma (transports dissolved O₂ only).",
            ],
          },
        },
        {
          id: "cial-b-u4-bc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the three stages of the cardiac cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cardiac cycle",
                statement: "Diastole → atrial systole → ventricular systole.",
              },
            ],
            steps: [
              { reasoning: "Any two named.", marks: 1, markCode: "M" },
              { reasoning: "All three correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diastole, atrial systole, ventricular systole.",
            commonErrors: ["Missing diastole."],
          },
        },
        {
          id: "cial-b-u4-bc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how haemoglobin transports oxygen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haemoglobin",
                statement:
                  "Binds O₂ in lungs (high O₂), releases in tissues (low O₂).",
              },
            ],
            steps: [
              {
                reasoning: "Haemoglobin has iron-containing heme groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Binds O₂ in lungs (high partial pressure).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Releases O₂ in tissues (low partial pressure).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reversible binding explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Haemoglobin binds O₂ in lungs, releases in tissues — reversible.",
            commonErrors: ["Saying it consumes oxygen."],
          },
        },
        {
          id: "cial-b-u4-bc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Blood and cardiac cycle.",
          parts: [
            { label: "a", prompt: "Oxygen carrier?", marks: 1 },
            { label: "b", prompt: "Three stages of cardiac cycle?", marks: 2 },
            {
              label: "c",
              prompt: "How does haemoglobin transport O₂?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Name two functions of leukocytes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blood",
                statement: "Components+cycle+haemoglobin+leukocytes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Haemoglobin in RBCs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Diastole, atrial systole, ventricular systole.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Heme groups bind O₂.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Lungs→tissues gradient.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Reversible.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Phagocytes named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Function described (engulf pathogens).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Lymphocytes or second function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) haemoglobin (b) 3 stages (c) bind/release gradient (d) phagocytes/lymphocytes",
          },
        },
        {
          id: "cial-b-u4-bc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of platelets in blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digesting pathogens" },
              { id: "b", text: "Carrying oxygen" },
              { id: "c", text: "Clotting after injury" },
              { id: "d", text: "Transporting hormones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Platelets", statement: "Cell fragments involved in blood clotting." },
            ],
            steps: [
              { reasoning: "Platelets aggregate at wounds to form blood clots.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Clotting after injury",
            commonErrors: ["Confusing platelets with white cells."],
          },
        },
        {
          id: "cial-b-u4-bc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is plasma and what does it contain?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plasma", statement: "Liquid matrix of blood containing water, proteins, nutrients and wastes." },
            ],
            steps: [
              { reasoning: "Plasma is the pale-yellow liquid component of blood.", marks: 1, markCode: "M" },
              { reasoning: "It carries dissolved nutrients, gases, hormones and wastes such as urea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Liquid blood matrix carrying dissolved substances.",
            commonErrors: ["Saying plasma is a cell."],
          },
        },
        {
          id: "cial-b-u4-bc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is systole?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filling of the ventricles" },
              { id: "b", text: "Closure of the valves" },
              { id: "c", text: "Relaxation of the heart chambers" },
              { id: "d", text: "Contraction of the heart chambers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Systole", statement: "Phase when heart chambers contract." },
            ],
            steps: [
              { reasoning: "Systole = contraction phase of the cardiac cycle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Contraction of the heart chambers",
            commonErrors: ["Confusing systole with diastole."],
          },
        },
        {
          id: "cial-b-u4-bc-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the 'lub-dub' sounds of the heart are produced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart sounds", statement: "Valve closure produces lub-dub sounds." },
            ],
            steps: [
              { reasoning: "'Lub' is produced when the atrioventricular valves close at the start of ventricular systole.", marks: 1, markCode: "M" },
              { reasoning: "'Dub' is produced when the semilunar valves close at the end of ventricular systole.", marks: 1, markCode: "M" },
              { reasoning: "Both sounds result from sudden valve closure creating pressure changes.", marks: 1, markCode: "M" },
              { reasoning: "Sequence correctly linked to cardiac cycle stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valve closure: AV valves → 'lub'; semilunar valves → 'dub'.",
            commonErrors: ["Saying the sounds come from muscle contraction."],
          },
        },
        {
          id: "cial-b-u4-bc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do mature red blood cells (erythrocytes) have no nucleus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Erythrocyte", statement: "Enucleate RBCs maximise haemoglobin content for O₂ transport." },
            ],
            steps: [
              { reasoning: "Losing the nucleus leaves more space inside the cell.", marks: 1, markCode: "M" },
              { reasoning: "More room allows a higher concentration of haemoglobin for oxygen carriage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No nucleus → more space for haemoglobin → better oxygen transport.",
            commonErrors: ["Saying they cannot reproduce, so they die."],
          },
        },
        {
          id: "cial-b-u4-bc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the haematocrit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of white blood cells per litre" },
              { id: "b", text: "The proportion of blood volume made up of red blood cells" },
              { id: "c", text: "The time blood takes to clot" },
              { id: "d", text: "The oxygen-carrying capacity of plasma" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Haematocrit", statement: "Percentage/volume fraction of RBCs in blood." },
            ],
            steps: [
              { reasoning: "Haematocrit measures the RBC fraction of total blood volume.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Proportion of blood volume that is red cells",
            commonErrors: ["Thinking it measures white cell count."],
          },
        },
        {
          id: "cial-b-u4-bc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens during ventricular systole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ventricular systole", statement: "Ventricles contract → AV valves close → semilunar valves open → blood pumped out." },
            ],
            steps: [
              { reasoning: "Ventricular muscle contracts, raising pressure.", marks: 1, markCode: "M" },
              { reasoning: "AV valves close ('lub') and semilunar valves open.", marks: 1, markCode: "M" },
              { reasoning: "Blood is forced into the aorta and pulmonary artery.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ventricles contract → blood pumped into arteries; AV valves close.",
            commonErrors: ["Saying blood flows into the atria."],
          },
        },
        {
          id: "cial-b-u4-bc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between systolic and diastolic blood pressure and explain why both are recorded.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blood pressure", statement: "Systolic = peak during ventricular contraction; diastolic = lowest during relaxation." },
            ],
            steps: [
              { reasoning: "Systolic pressure is the maximum pressure during ventricular systole.", marks: 1, markCode: "M" },
              { reasoning: "Diastolic pressure is the minimum when ventricles relax.", marks: 1, markCode: "M" },
              { reasoning: "Both are needed to assess the full pressure cycle in arteries.", marks: 1, markCode: "M" },
              { reasoning: "Elevated values in either indicate hypertension risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Systolic = contraction peak; diastolic = relaxation minimum; both indicate cardiovascular health.",
            commonErrors: ["Swapping the two definitions."],
          },
        },
        {
          id: "cial-b-u4-bc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the biconcave shape of red blood cells aids gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Erythrocyte shape", statement: "Biconcave discs maximise surface area and flexibility." },
            ],
            steps: [
              { reasoning: "Biconcave shape gives a large surface area relative to volume.", marks: 1, markCode: "M" },
              { reasoning: "Large SA speeds up O₂/CO₂ diffusion across the membrane.", marks: 1, markCode: "M" },
              { reasoning: "The shape is flexible, allowing cells to squeeze through narrow capillaries.", marks: 1, markCode: "M" },
              { reasoning: "Thin membrane plus large SA makes gas exchange efficient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Biconcave shape → large surface area, short diffusion distance, capillary flexibility.",
            commonErrors: ["Describing the shape without linking to function."],
          },
        },
        {
          id: "cial-b-u4-bc-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of leukocyte types are mainly responsible for immune defence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monocytes and erythrocytes" },
              { id: "b", text: "Erythrocytes and platelets" },
              { id: "c", text: "Phagocytes and lymphocytes" },
              { id: "d", text: "Plasma and serum" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Leukocytes", statement: "White blood cells — phagocytes engulf pathogens; lymphocytes produce antibodies." },
            ],
            steps: [
              { reasoning: "Phagocytes and lymphocytes are the main white cell types for immunity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Phagocytes and lymphocytes",
            commonErrors: ["Including erythrocytes, which carry oxygen."],
          },
        },
        {
          id: "cial-b-u4-bc-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Blood components and cardiac cycle.",
          parts: [
            { label: "a", prompt: "Name the four main blood components.", marks: 2 },
            { label: "b", prompt: "State the function of haemoglobin.", marks: 1 },
            { label: "c", prompt: "Describe the three stages of the cardiac cycle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blood", statement: "Components+haemoglobin+cardiac cycle." },
            ],
            steps: [
              { part: "a", reasoning: "Plasma, erythrocytes, leukocytes, platelets.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four named.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reversible O₂ transport.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Diastole then atrial systole.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ventricular systole pumps blood out.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct sequence stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) plasma/RBC/WBC/platelets (b) O₂ carrier (c) diastole→atrial→ventricular systole",
          },
        },
        {
          id: "cial-b-u4-bc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Blood pressure and the cardiac cycle.",
          parts: [
            { label: "a", prompt: "Define systolic and diastolic pressure.", marks: 2 },
            { label: "b", prompt: "Describe what happens during diastole.", marks: 2 },
            { label: "c", prompt: "Explain how valves ensure one-way blood flow.", marks: 3 },
            { label: "d", prompt: "State two functions of plasma.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cardiovascular", statement: "Pressure+diastole+valves+plasma." },
            ],
            steps: [
              { part: "a", reasoning: "Systolic = peak during contraction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diastolic = minimum during relaxation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Chambers relax; blood flows in from veins/atria.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ventricles fill before systole.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "AV valves close when ventricles contract.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Semilunar valves close when ventricles relax.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Prevents backflow in both phases.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any two of transport nutrients/gases/hormones/wastes, clotting factors.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two functions stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) systolic/diastolic (b) filling/relaxation (c) one-way valves (d) transport roles",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u4-mammalian-notes",
      title: "Mammalian circulation — revision notes",
      summary:
        "Blood vessels, heart chambers, double circulation, blood components, cardiac cycle.",
      sections: [
        {
          heading: "Structure",
          body: "Arteries out, veins in (valves), capillaries exchange. Heart: 4 chambers; left ventricle thickest. Double circulation: pulmonary + systemic.",
        },
        {
          heading: "Blood and cycle",
          body: "Plasma, RBCs (haemoglobin), WBCs (immune), platelets (clotting). Cardiac cycle: diastole→atrial systole→ventricular systole.",
        },
        {
          heading: "Exam checklist",
          body: "Can you trace blood flow? Name vessels? Describe cardiac cycle? Explain haemoglobin?",
        },
      ],
    },
  ],
};
