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
              { id: "a", text: "Artery" },
              { id: "b", text: "Vein" },
              { id: "c", text: "Capillary" },
              { id: "d", text: "Venule" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Artery",
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
              { id: "a", text: "Haemoglobin in erythrocytes" },
              { id: "b", text: "Plasma" },
              { id: "c", text: "Platelets" },
              { id: "d", text: "Leukocytes" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Haemoglobin in erythrocytes",
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
