import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "s7-u5-lesson-5-2",
  code: "5-2",
  title: "Circulatory and Respiratory Systems",
  goal: "I CAN describe how the heart, blood vessels and blood transport materials, and how the lungs and diaphragm exchange gases.",
  standards: [
    "MS-LS1-3",
    "MS-LS1-7",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Circulatory system",
      definition:
        "The system of the heart, blood vessels and blood that transports materials around the body.",
    },
    {
      term: "Artery",
      definition: "A blood vessel that carries blood away from the heart.",
    },
    {
      term: "Vein",
      definition: "A blood vessel that carries blood toward the heart.",
    },
    {
      term: "Capillary",
      definition:
        "A tiny blood vessel where exchange of materials with body cells occurs.",
    },
    {
      term: "Hemoglobin",
      definition: "The protein in red blood cells that binds oxygen.",
    },
    {
      term: "Respiratory system",
      definition:
        "The lungs and airways that take in oxygen and remove carbon dioxide.",
    },
    {
      term: "Diaphragm",
      definition:
        "The muscle below the lungs that contracts and relaxes to drive breathing.",
    },
  ],
  concepts: [
    {
      id: "s7-u5-heart-blood",
      title: "The heart and blood vessels",
      skill:
        "Describe the structure of the heart, the path of blood through it, and the roles of arteries, veins and capillaries.",
      lesson: {
        sections: [
          {
            heading: "The four-chambered heart",
            body: "The human heart has four chambers: two **atria** (upper) and two **ventricles** (lower).\n\n- The **right side** pumps oxygen-poor blood to the lungs.\n- The **left side** pumps oxygen-rich blood to the body.\n- **Valves** between chambers prevent backflow.\n\nThe wall of the left ventricle is thicker because it must pump blood to the whole body, not just the lungs.",
          },
          {
            heading: "Blood vessels",
            body: "- **Arteries** carry blood away from the heart; they have thick muscular walls to withstand high pressure.\n- **Veins** carry blood toward the heart; they have valves to prevent backflow.\n- **Capillaries** are microscopic vessels where blood exchanges oxygen, nutrients and wastes with body cells. They are so thin that red blood cells pass through one at a time.",
          },
        ],
        keyFormulas: [
          {
            name: "Heart chambers",
            statement: "Right side → lungs; left side → body.",
          },
          {
            name: "Arteries vs veins",
            statement:
              "Arteries carry blood away; veins carry blood toward the heart.",
          },
          {
            name: "Capillaries",
            statement: "Site of exchange between blood and body cells.",
          },
        ],
        workedExample: {
          problem:
            "Trace the path of blood from the right ventricle to the body.",
          solution:
            "Right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body.",
        },
      },
      questions: [
        {
          id: "s7-u5-heart-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber pumps blood to the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right atrium" },
              { id: "b", text: "Right ventricle" },
              { id: "c", text: "Left ventricle" },
              { id: "d", text: "Left atrium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heart chambers",
                statement:
                  "Left ventricle pumps oxygen-rich blood to the body.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The left ventricle has the thickest wall and pumps blood through the aorta to the body.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Left ventricle.",
            commonErrors: [
              "Choosing (b): the right ventricle pumps to the lungs, not the body.",
            ],
          },
        },
        {
          id: "s7-u5-heart-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the difference between arteries and veins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Artery",
                statement:
                  "Carries blood away from the heart; thick muscular walls.",
              },
              {
                kind: "definition",
                name: "Vein",
                statement: "Carries blood toward the heart; has valves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arteries carry blood away from the heart; veins carry blood toward the heart.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Arteries have thick muscular walls to handle high pressure; veins have thinner walls.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Veins have valves to prevent backflow; arteries do not need valves (except at the heart).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Arteries: away from heart, thick walls, high pressure. Veins: toward heart, valves prevent backflow.",
            commonErrors: ["Saying veins have thicker walls than arteries."],
          },
        },
        {
          id: "s7-u5-heart-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why capillaries are essential for the circulatory system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capillary",
                statement:
                  "Tiny vessel where exchange between blood and cells occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capillaries are extremely thin-walled, allowing diffusion of materials.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Oxygen and nutrients diffuse from blood into body cells.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Carbon dioxide and wastes diffuse from cells into blood.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without capillaries, blood could not deliver materials to cells or remove wastes.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Capillaries are the site of exchange — oxygen/nutrients leave blood, CO2/wastes enter blood.",
            commonErrors: [
              "Saying capillaries carry blood to organs; they are exchange vessels.",
            ],
          },
        },
        {
          id: "s7-u5-heart-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace the complete path of a red blood cell carrying oxygen from the lungs back to the lungs.",
          parts: [
            {
              label: "a",
              prompt:
                "List the structures in order from pulmonary vein to pulmonary artery.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "At which point does the blood change from oxygen-rich to oxygen-poor?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Why does the left ventricle wall need to be thicker than the right?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Double circulation",
                statement: "Blood goes to lungs and body in separate circuits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Pulmonary vein → left atrium → left ventricle → aorta → body capillaries → vena cava → right atrium → right ventricle → pulmonary artery.",
                marks: 4,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Oxygen is released to body cells at capillaries; blood returns oxygen-poor via veins.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Left ventricle pumps to the whole body (farther, more resistance); right only to lungs.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Pulmonary vein → LA → LV → aorta → body → vena cava → RA → RV → pulmonary artery (b) At body capillaries (c) Left pumps farther with more resistance.",
            commonErrors: ["Skipping the atria or confusing the order."],
          },
        },
      ],
    },
    {
      id: "s7-u5-blood",
      title: "Blood composition and transport",
      skill:
        "Describe the components of blood and their functions in transport.",
      lesson: {
        sections: [
          {
            heading: "Components of blood",
            body: "Blood is a fluid connective tissue with four main components:\n\n- **Plasma** (about 55%): the liquid part, mostly water, carrying dissolved nutrients, hormones and wastes.\n- **Red blood cells** (erythrocytes): contain hemoglobin to carry oxygen; no nucleus.\n- **White blood cells** (leukocytes): fight infection; have a nucleus.\n- **Platelets** (thrombocytes): cell fragments that help blood clot.",
          },
          {
            heading: "What blood transports",
            body: "Blood carries oxygen from lungs to cells, carbon dioxide from cells to lungs, nutrients from digestion to cells, hormones from glands to targets, and wastes to kidneys and lungs. It also distributes heat and helps maintain body temperature.",
          },
        ],
        keyFormulas: [
          {
            name: "Blood components",
            statement: "Plasma, red blood cells, white blood cells, platelets.",
          },
          {
            name: "Hemoglobin",
            statement: "Protein in red blood cells that binds oxygen.",
          },
          {
            name: "Plasma",
            statement: "Liquid part carrying dissolved materials.",
          },
        ],
        workedExample: {
          problem: "Which blood component fights infection?",
          solution:
            "White blood cells (leukocytes) engulf pathogens and produce antibodies.",
        },
      },
      questions: [
        {
          id: "s7-u5-blood-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which component of blood carries oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasma" },
              { id: "b", text: "White blood cells" },
              { id: "c", text: "Red blood cells" },
              { id: "d", text: "Platelets" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Red blood cells",
                statement: "Contain hemoglobin that binds oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Red blood cells contain hemoglobin, which binds oxygen in the lungs and releases it to cells.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Red blood cells.",
            commonErrors: [
              "Choosing (a): plasma carries dissolved materials but not oxygen bound to cells.",
            ],
          },
        },
        {
          id: "s7-u5-blood-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match each blood component to its function.",
          parts: [
            { label: "a", prompt: "Plasma", marks: 1 },
            { label: "b", prompt: "Platelets", marks: 1 },
            { label: "c", prompt: "White blood cells", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blood components",
                statement: "Each has a specific transport or protective role.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Plasma carries dissolved nutrients, hormones and wastes.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Platelets help blood clot to stop bleeding.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "White blood cells fight infection.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Transport dissolved materials (b) Clotting (c) Fight infection.",
            commonErrors: ["Confusing platelets with red blood cells."],
          },
        },
        {
          id: "s7-u5-blood-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a cut finger stops bleeding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Clotting",
                statement: "Platelets and fibrin form a clot to seal wounds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When a vessel is cut, platelets gather at the site.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Platelets release chemicals that trigger clotting factors in plasma.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Fibrin threads form a mesh that traps blood cells, sealing the wound.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The clot prevents excessive blood loss and infection.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Platelets trigger clotting; fibrin mesh traps cells and seals the wound.",
            commonErrors: [
              "Saying red blood cells clot; platelets and plasma proteins do.",
            ],
          },
        },
        {
          id: "s7-u5-blood-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person has a low red blood cell count.",
          parts: [
            {
              label: "a",
              prompt: "Predict two effects on the body.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why these effects occur.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Which other blood component might compensate? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anemia",
                statement: "Low red blood cell count reduces oxygen transport.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fatigue and shortness of breath (or dizziness).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Fewer red blood cells means less hemoglobin and less oxygen delivered to cells.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Cells cannot respire efficiently, producing less energy.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "The body compensates by increasing heart rate to move more blood.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Plasma volume may increase to maintain blood pressure, but cannot replace oxygen capacity.",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Fatigue, shortness of breath (b) Less oxygen delivered; cells produce less energy (c) Plasma cannot replace oxygen-carrying capacity.",
            commonErrors: ["Saying white blood cells can carry oxygen."],
          },
        },
      ],
    },
    {
      id: "s7-u5-respiration",
      title: "Respiratory system and gas exchange",
      skill:
        "Describe the path of air, the role of the diaphragm, and how gases are exchanged in the alveoli.",
      lesson: {
        sections: [
          {
            heading: "Path of air",
            body: "Air enters through the **nose or mouth**, passes through the **trachea** (windpipe), which branches into two **bronchi** leading to each lung. Inside the lungs, bronchi branch into smaller **bronchioles** ending in tiny air sacs called **alveoli**. The trachea is kept open by C-shaped cartilage rings.",
          },
          {
            heading: "Breathing mechanics",
            body: "Breathing is driven by the **diaphragm** and rib muscles.\n\n- **Inhalation**: diaphragm contracts and flattens; rib muscles lift the ribs; chest volume increases; air pressure drops; air rushes in.\n- **Exhalation**: diaphragm relaxes and domes up; chest volume decreases; air pressure rises; air is pushed out.\n\nWe inhale about 20,000 times a day, moving roughly 10,000 liters of air.",
          },
          {
            heading: "Gas exchange in alveoli",
            body: "Each lung contains millions of alveoli surrounded by capillaries. Oxygen diffuses from alveolar air into blood; carbon dioxide diffuses from blood into alveolar air. The alveoli provide a huge surface area (about the size of a tennis court) for efficient exchange. A thin layer of mucus and surfactant keeps alveoli moist and prevents collapse.",
          },
        ],
        keyFormulas: [
          {
            name: "Path of air",
            statement:
              "Nose/mouth → trachea → bronchi → bronchioles → alveoli.",
          },
          {
            name: "Inhalation",
            statement: "Diaphragm contracts, chest expands, air flows in.",
          },
          {
            name: "Gas exchange",
            statement: "O2 diffuses into blood; CO2 diffuses out, at alveoli.",
          },
        ],
        workedExample: {
          problem: "Why do alveoli have thin walls?",
          solution:
            "Thin walls allow gases to diffuse quickly between air and blood, maximizing exchange efficiency.",
        },
      },
      questions: [
        {
          id: "s7-u5-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does gas exchange occur in the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trachea" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Alveoli" },
              { id: "d", text: "Larynx" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveoli",
                statement: "Tiny air sacs where gas exchange occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alveoli are surrounded by capillaries; gases diffuse across their thin walls.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Alveoli.",
            commonErrors: [
              "Choosing (b): bronchi are airways, not exchange sites.",
            ],
          },
        },
        {
          id: "s7-u5-respiration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens to the diaphragm during inhalation and exhalation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diaphragm",
                statement:
                  "Muscle that contracts and relaxes to drive breathing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inhalation: diaphragm contracts and flattens, increasing chest volume.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Exhalation: diaphragm relaxes and domes upward, decreasing chest volume.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Volume changes create pressure differences that move air in and out.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Inhalation: diaphragm contracts/flattens. Exhalation: relaxes/domes up.",
            commonErrors: ["Reversing the two actions."],
          },
        },
        {
          id: "s7-u5-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why smoking damages the respiratory system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Alveoli function",
                statement:
                  "Thin walls allow gas exchange; damage reduces efficiency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Smoke paralyzes cilia that normally sweep mucus and debris from airways.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Tar and chemicals damage alveolar walls, reducing surface area for gas exchange.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Reduced exchange means less oxygen reaches blood and cells.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Chronic damage leads to emphysema, COPD and lung cancer.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Smoking damages cilia and alveoli, reducing gas exchange and causing disease.",
            commonErrors: [
              "Saying smoking only affects the trachea; damage is throughout the lungs.",
            ],
          },
        },
        {
          id: "s7-u5-respiration-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "During exercise, breathing rate and depth increase.",
          parts: [
            {
              label: "a",
              prompt: "Explain why more oxygen is needed during exercise.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe two changes in breathing that increase oxygen intake.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain how the circulatory system responds to deliver the extra oxygen.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Why does breathing rate stay elevated briefly after exercise stops?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cellular respiration",
                statement: "Cells use oxygen to release energy from glucose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Muscle cells respire faster during exercise, needing more oxygen and producing more CO2.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Rate increases (more breaths per minute) and depth increases (more air per breath).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Heart rate increases to pump oxygen-rich blood faster to muscles.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Oxygen debt: cells have used more O2 than supplied; extra breathing repays the debt and removes CO2.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) More respiration needs more O2 (b) Rate and depth increase (c) Heart rate increases (d) Repay oxygen debt, remove CO2.",
            commonErrors: [
              "Saying breathing stops immediately when exercise stops.",
            ],
          },
        },
      ],
    },
  ],
};
