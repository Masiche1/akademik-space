import type { Lesson } from "../../../types.ts";

export const lesson413: Lesson = {
  id: "cial-b-u4-lesson-4-3",
  code: "4-3",
  title: "Gas exchange and the alveoli",
  goal: "I CAN explain gas exchange in mammals and the adaptations of the alveoli.",
  standards: ["9700 Unit 10: gas exchange"],
  vocabulary: [
    {
      term: "Alveolus",
      definition: "Tiny air sac in lungs where gas exchange occurs.",
    },
    {
      term: "Gas exchange",
      definition:
        "Diffusion of O₂ into blood and CO₂ out across alveolar walls.",
    },
    {
      term: "Ventilation",
      definition: "Breathing — moving air into and out of lungs.",
    },
    { term: "Tidal volume", definition: "Volume of air moved in one breath." },
    {
      term: "Surfactant",
      definition:
        "Liquid reducing surface tension in alveoli, preventing collapse.",
    },
    {
      term: "Partial pressure",
      definition:
        "Pressure contributed by one gas in a mixture — drives diffusion.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u4-alveoli",
      title: "Alveoli and gas exchange",
      skill: "Describe alveolar structure and gas exchange mechanism.",
      lesson: {
        sections: [
          {
            heading: "Alveolar adaptations",
            body: "Alveoli are optimised for gas exchange: huge surface area (millions of tiny sacs), thin walls (one cell thick — short diffusion distance), moist lining (gases dissolve), rich capillary network, surfactant prevents collapse.",
          },
          {
            heading: "Gas exchange mechanism",
            body: "O₂ diffuses from alveoli (high partial pressure) into blood (low) across thin walls. CO₂ diffuses opposite direction. Partial pressure gradients drive diffusion — maintained by ventilation and circulation.",
          },
          {
            heading: "Ventilation",
            body: "Inspiration: diaphragm contracts + external intercostal muscles contract → volume increases, pressure decreases → air flows in. Expiration: muscles relax → volume decreases, pressure increases → air flows out.",
          },
        ],
        keyFormulas: [
          {
            name: "Gas exchange",
            statement:
              "Partial pressure gradient+thin walls+large SA=efficient diffusion.",
          },
        ],
        workedExample: {
          problem: "Why are alveolar walls only one cell thick?",
          solution:
            "Short diffusion distance — gases cross quickly via diffusion.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does gas exchange occur in mammals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the larynx" },
              { id: "b", text: "In the bronchi" },
              { id: "c", text: "In the trachea" },
              { id: "d", text: "In the alveoli" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveolus",
                statement: "Site of gas exchange in lungs.",
              },
            ],
            steps: [
              {
                reasoning: "Gas exchange at alveoli.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Alveoli",
            commonErrors: ["Confusing with bronchi/trachea (airways)."],
          },
        },
        {
          id: "cial-b-u4-al-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two adaptations of alveoli for gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveolar adaptations",
                statement:
                  "Large SA, thin walls, moist, capillary network, surfactant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two of large SA, thin walls, moist, capillaries, surfactant.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Large surface area, thin walls, moist lining, capillary network.",
            commonErrors: ["Naming features without function."],
          },
        },
        {
          id: "cial-b-u4-al-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how partial pressure gradients drive gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partial pressure",
                statement: "Gases diffuse from high to low partial pressure.",
              },
            ],
            steps: [
              {
                reasoning: "O₂ high in alveoli, low in blood → diffuses in.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CO₂ high in blood, low in alveoli → diffuses out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gradients maintained by ventilation/circulation.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gases diffuse down partial pressure gradients; maintained by breathing/circulation.",
            commonErrors: ["Saying gases move randomly."],
          },
        },
        {
          id: "cial-b-u4-al-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Gas exchange.",
          parts: [
            { label: "a", prompt: "Site of gas exchange?", marks: 1 },
            { label: "b", prompt: "Two alveolar adaptations?", marks: 2 },
            {
              label: "c",
              prompt: "How do partial pressures drive exchange?",
              marks: 3,
            },
            { label: "d", prompt: "Describe inspiration.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gas exchange",
                statement: "Alveoli+adaptations+pressure+ventilation.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Alveoli.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Any two adaptations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "O₂ high→low gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "CO₂ opposite direction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Maintained by ventilation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Diaphragm + intercostals contract.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Volume increases, pressure drops.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Air flows in.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) alveoli (b) SA+thin walls (c) pressure gradients (d) diaphragm contracts→air in",
          },
        },
        {
          id: "cial-b-u4-al-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure provides the main site of gas exchange in the mammalian lung?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trachea" },
              { id: "b", text: "Pharynx" },
              { id: "c", text: "Bronchus" },
              { id: "d", text: "Alveolus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveolus",
                statement: "Alveoli are tiny air sacs where gas exchange occurs.",
              },
            ],
            steps: [
              { reasoning: "Gas exchange occurs across alveolar walls.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alveolus",
            commonErrors: ["Choosing an airway rather than an air sac."],
          },
        },
        {
          id: "cial-b-u4-al-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which adaptation most directly increases the rate of diffusion across alveolar walls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A large nucleus in each cell" },
              { id: "b", text: "Absence of capillaries" },
              { id: "c", text: "Walls only one cell thick" },
              { id: "d", text: "Thick cartilage rings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffusion distance",
                statement: "Shorter diffusion distance increases diffusion rate.",
              },
            ],
            steps: [
              { reasoning: "One-cell-thick walls minimise diffusion distance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** One-cell-thick walls",
            commonErrors: ["Focusing only on surface area."],
          },
        },
        {
          id: "cial-b-u4-al-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which direction does oxygen diffuse during gas exchange at the alveolus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From alveoli into bronchi only" },
              { id: "b", text: "From blood into alveolar air" },
              { id: "c", text: "From alveolar air into the blood" },
              { id: "d", text: "From blood into tissue fluid only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas exchange",
                statement: "Oxygen diffuses down its partial pressure gradient into blood.",
              },
            ],
            steps: [
              { reasoning: "Alveolar oxygen partial pressure is higher than blood.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alveolar air to blood",
            commonErrors: ["Reversing oxygen and carbon dioxide movement."],
          },
        },
        {
          id: "cial-b-u4-al-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of surfactant in alveoli?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contracts the diaphragm" },
              { id: "b", text: "It digests mucus" },
              { id: "c", text: "It carries oxygen" },
              { id: "d", text: "It reduces surface tension and prevents alveolar collapse" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Surfactant",
                statement: "Surfactant lowers surface tension, keeping alveoli open.",
              },
            ],
            steps: [
              { reasoning: "Surfactant prevents collapse during breathing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Reduces surface tension",
            commonErrors: ["Saying surfactant transports gases."],
          },
        },
        {
          id: "cial-b-u4-al-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is a moist lining important in alveoli?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes walls thicker" },
              { id: "b", text: "Gases dissolve in the moisture before diffusing" },
              { id: "c", text: "It produces oxygen" },
              { id: "d", text: "It prevents all gas exchange" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moist lining",
                statement: "Moisture allows respiratory gases to dissolve for diffusion.",
              },
            ],
            steps: [
              { reasoning: "Gases must dissolve to diffuse across membranes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gases dissolve in moisture",
            commonErrors: ["Thinking moisture blocks diffusion."],
          },
        },
        {
          id: "cial-b-u4-al-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What maintains the partial pressure gradients for gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absence of capillaries" },
              { id: "b", text: "Surfactant alone" },
              { id: "c", text: "Cellulose walls" },
              { id: "d", text: "Ventilation and blood circulation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gradient maintenance",
                statement: "Breathing renews alveolar air and circulation removes blood gases.",
              },
            ],
            steps: [
              { reasoning: "Ventilation and perfusion maintain gradients.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ventilation and circulation",
            commonErrors: ["Thinking gradients are maintained automatically."],
          },
        },
        {
          id: "cial-b-u4-al-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A lung contains about $300$ million alveoli. Calculate the approximate total number in two lungs.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 600000000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alveolar number",
                statement: "Total alveoli $=$ alveoli per lung $\\times 2$.",
              },
            ],
            steps: [
              { reasoning: "Each lung has about 300 million alveoli.", marks: 1, markCode: "M" },
              { reasoning: "$300{,}000{,}000 \\times 2 = 600{,}000{,}000$ alveoli.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "600 million alveoli",
            commonErrors: ["Leaving the answer as one lung's number."],
          },
        },
        {
          id: "cial-b-u4-al-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many cell layers thick are the walls separating alveolar air from blood capillaries?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveolar wall",
                statement: "Alveolar walls are one cell thick to minimise diffusion distance.",
              },
            ],
            steps: [
              { reasoning: "The wall is described as one cell thick.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the answer is 1 layer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 cell layer",
            commonErrors: ["Answering two because two cell types are present."],
          },
        },
        {
          id: "cial-b-u4-al-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The two lungs together have an alveolar surface area of about $70\\ \\text{m}^2$. If one lung contributes $35\\ \\text{m}^2$, what is the other lung's contribution?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Surface area",
                statement: "Other lung area $=$ total area $-$ one lung area.",
              },
            ],
            steps: [
              { reasoning: "$70-35=35\\ \\text{m}^2$.", marks: 1, markCode: "M" },
              { reasoning: "The second lung also contributes $35\\ \\text{m}^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35\\ \\text{m}^2$",
            commonErrors: ["Assuming surface areas are unequal."],
          },
        },
        {
          id: "cial-b-u4-al-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The partial pressure of oxygen is $75\\ \\text{mmHg}$ in alveolar air and $40\\ \\text{mmHg}$ in pulmonary blood. Calculate the partial pressure difference driving oxygen into blood.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Partial pressure gradient",
                statement: "Gradient $=$ alveolar partial pressure $-$ blood partial pressure.",
              },
            ],
            steps: [
              { reasoning: "$75-40=35\\ \\text{mmHg}$.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen diffuses down a 35 mmHg gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35 mmHg",
            commonErrors: ["Subtracting in the wrong direction."],
          },
        },
        {
          id: "cial-b-u4-al-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Carbon dioxide partial pressure is $45\\ \\text{mmHg}$ in blood entering the lungs and $40\\ \\text{mmHg}$ in alveolar air. Calculate the partial pressure difference driving carbon dioxide out of blood.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Partial pressure gradient",
                statement: "Gradient $=$ blood partial pressure $-$ alveolar partial pressure for $CO_2$ diffusion out.",
              },
            ],
            steps: [
              { reasoning: "$45-40=5\\ \\text{mmHg}$.", marks: 1, markCode: "M" },
              { reasoning: "Carbon dioxide diffuses down a 5 mmHg gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 mmHg",
            commonErrors: ["Using oxygen values instead of carbon dioxide."],
          },
        },
        {
          id: "cial-b-u4-al-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the structure of alveoli is adapted for efficient gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alveolar adaptations",
                statement: "Large surface area, thin walls, moist lining, capillary network and surfactant optimise diffusion.",
              },
            ],
            steps: [
              { reasoning: "Millions of alveoli provide a very large surface area.", marks: 1, markCode: "M" },
              { reasoning: "One-cell-thick walls and capillaries give a short diffusion distance.", marks: 1, markCode: "M" },
              { reasoning: "Moist lining and surfactant maintain conditions for gas dissolution and prevent collapse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Large surface area, thin walls, moisture, capillaries and surfactant maximise diffusion.",
            commonErrors: ["Listing features without explaining diffusion."],
          },
        },
      ],
    },
    {
      id: "cial-b-u4-ventilation",
      title: "Ventilation and lung volumes",
      skill: "Describe breathing mechanics and lung volumes.",
      lesson: {
        sections: [
          {
            heading: "Inspiration and expiration",
            body: "Inspiration: diaphragm contracts (flattens), external intercostal muscles contract (ribs up/out) → thoracic volume increases → pressure decreases → air flows in. Expiration: muscles relax → volume decreases → pressure increases → air flows out. Forced expiration uses internal intercostals and abdominal muscles.",
          },
          {
            heading: "Lung volumes",
            body: "Tidal volume: air per normal breath (~500 cm³). Inspiratory reserve: extra inhaled. Expiratory reserve: extra exhaled. Vital capacity = tidal + inspiratory + expiratory reserves. Residual volume: air remaining after forced expiration.",
          },
          {
            heading: "Breathing control",
            body: "Medulla oblongata in brainstem controls breathing rate via CO₂ levels (not O₂ directly). Chemoreceptors detect CO₂/H⁺ in blood → signal diaphragm/intercostals to adjust rate.",
          },
        ],
        keyFormulas: [
          {
            name: "Ventilation",
            statement:
              "Inspiration=muscles contract+volume up+pressure down; control via CO₂.",
          },
        ],
        workedExample: {
          problem: "Why does breathing rate increase during exercise?",
          solution:
            "CO₂ levels rise → chemoreceptors detect → brain increases breathing rate to remove CO₂ and supply O₂.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-vl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is tidal volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total lung volume" },
              { id: "b", text: "Maximum lung capacity" },
              { id: "c", text: "Volume of air in one normal breath" },
              { id: "d", text: "Air remaining after exhalation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tidal volume",
                statement: "Air moved in one normal breath.",
              },
            ],
            steps: [
              {
                reasoning: "Tidal = normal breath volume.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Air per normal breath",
            commonErrors: ["Confusing with vital capacity."],
          },
        },
        {
          id: "cial-b-u4-vl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What triggers increased breathing rate during exercise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Breathing control",
                statement:
                  "CO₂ levels detected by chemoreceptors → rate increases.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ rises during exercise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Chemoreceptors detect → breathing rate increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rising CO₂ detected by chemoreceptors triggers faster breathing.",
            commonErrors: ["Saying it's oxygen levels."],
          },
        },
        {
          id: "cial-b-u4-vl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the mechanism of inspiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inspiration",
                statement: "Muscles contract→volume up→pressure down→air in.",
              },
            ],
            steps: [
              {
                reasoning: "Diaphragm contracts and flattens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "External intercostals contract→ribs up/out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thoracic volume increases→pressure drops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Air flows in down gradient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Muscles contract→volume up→pressure down→air in.",
            commonErrors: ["Saying air is 'sucked in'."],
          },
        },
        {
          id: "cial-b-u4-vl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ventilation.",
          parts: [
            { label: "a", prompt: "Tidal volume?", marks: 1 },
            {
              label: "b",
              prompt: "What triggers increased breathing?",
              marks: 2,
            },
            { label: "c", prompt: "Mechanism of inspiration?", marks: 3 },
            {
              label: "d",
              prompt: "Name two lung volumes besides tidal.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ventilation",
                statement: "Tidal+control+inspiration+volumes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Air per normal breath.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "CO₂ detected.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rate increases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Diaphragm+intercostals contract.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Volume up, pressure down.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Air flows in.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Any two of inspiratory reserve, expiratory reserve, vital capacity, residual.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Two named.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) normal breath (b) CO₂→rate up (c) contract→volume up→air in (d) inspiratory/expiratory reserve etc.",
          },
        },
        {
          id: "cial-b-u4-vl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which muscles contract during inspiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abdominal muscles only" },
              { id: "b", text: "Diaphragm and external intercostal muscles" },
              { id: "c", text: "Internal intercostal muscles only" },
              { id: "d", text: "Cardiac muscle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inspiration",
                statement: "Diaphragm and external intercostals contract to increase thoracic volume.",
              },
            ],
            steps: [
              { reasoning: "These muscles expand the thoracic cavity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Diaphragm and external intercostals",
            commonErrors: ["Naming muscles used in forced expiration."],
          },
        },
        {
          id: "cial-b-u4-vl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During inspiration, what happens to air pressure inside the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases, forcing air out" },
              { id: "b", text: "It decreases, so air flows in" },
              { id: "c", text: "It stays constant" },
              { id: "d", text: "It becomes zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure change",
                statement: "Increased volume lowers pressure, drawing air inward.",
              },
            ],
            steps: [
              { reasoning: "Pressure falls below atmospheric pressure during inspiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pressure decreases",
            commonErrors: ["Saying pressure rises during inspiration."],
          },
        },
        {
          id: "cial-b-u4-vl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What occurs during normal expiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "External intercostals lift ribs upward" },
              { id: "b", text: "Lung volume increases" },
              { id: "c", text: "Respiratory muscles relax and thoracic volume decreases" },
              { id: "d", text: "Diaphragm contracts forcefully" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expiration",
                statement: "Normal expiration is passive as muscles relax and volume falls.",
              },
            ],
            steps: [
              { reasoning: "Relaxation reduces thoracic volume and raises pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Muscles relax; volume decreases",
            commonErrors: ["Thinking expiration always requires muscle contraction."],
          },
        },
        {
          id: "cial-b-u4-vl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which muscles assist forced expiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skeletal muscles of the arm" },
              { id: "b", text: "Diaphragm only" },
              { id: "c", text: "External intercostal muscles" },
              { id: "d", text: "Internal intercostal and abdominal muscles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forced expiration",
                statement: "Internal intercostals and abdominal muscles actively reduce thoracic volume.",
              },
            ],
            steps: [
              { reasoning: "These muscles increase pressure to expel air forcefully.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Internal intercostals and abdominals",
            commonErrors: ["Naming inspiratory muscles."],
          },
        },
        {
          id: "cial-b-u4-vl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How is vital capacity calculated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Residual volume only" },
              { id: "b", text: "Tidal volume + residual volume" },
              { id: "c", text: "Inspiratory reserve only" },
              { id: "d", text: "Tidal volume + inspiratory reserve + expiratory reserve" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vital capacity",
                statement: "Vital capacity is the sum of tidal and reserve volumes.",
              },
            ],
            steps: [
              { reasoning: "Vital capacity excludes residual volume.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Tidal + inspiratory + expiratory reserves",
            commonErrors: ["Including residual volume."],
          },
        },
        {
          id: "cial-b-u4-vl-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What mainly controls the rate of breathing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lung colour" },
              { id: "b", text: "Blood oxygen level alone" },
              { id: "c", text: "Blood carbon dioxide level detected by chemoreceptors" },
              { id: "d", text: "Time of day" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Breathing control",
                statement: "Chemoreceptors respond mainly to $CO_2$/$H^+$ changes and adjust breathing rate.",
              },
            ],
            steps: [
              { reasoning: "$CO_2$ is the main stimulus for breathing rate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide level",
            commonErrors: ["Saying oxygen alone controls breathing."],
          },
        },
        {
          id: "cial-b-u4-vl-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tidal volume is $500\\ \\text{cm}^3$, inspiratory reserve volume is $1500\\ \\text{cm}^3$ and expiratory reserve volume is $1200\\ \\text{cm}^3$. Calculate vital capacity.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vital capacity",
                statement: "Vital capacity $=$ tidal volume $+$ inspiratory reserve $+$ expiratory reserve.",
              },
            ],
            steps: [
              { reasoning: "$500+1500+1200=3200\\ \\text{cm}^3$.", marks: 1, markCode: "M" },
              { reasoning: "Vital capacity is 3200 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3200 cm³",
            commonErrors: ["Including residual volume."],
          },
        },
        {
          id: "cial-b-u4-vl-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Vital capacity is $3200\\ \\text{cm}^3$ and residual volume is $1200\\ \\text{cm}^3$. Calculate total lung capacity.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4400 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total lung capacity",
                statement: "Total lung capacity $=$ vital capacity $+$ residual volume.",
              },
            ],
            steps: [
              { reasoning: "$3200+1200=4400\\ \\text{cm}^3$.", marks: 1, markCode: "M" },
              { reasoning: "Total lung capacity is 4400 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4400 cm³",
            commonErrors: ["Subtracting residual volume."],
          },
        },
        {
          id: "cial-b-u4-vl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "During exercise, tidal volume increases from $500\\ \\text{cm}^3$ to $800\\ \\text{cm}^3$. Calculate the increase in tidal volume.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume change",
                statement: "Increase $=$ exercise tidal volume $-$ resting tidal volume.",
              },
            ],
            steps: [
              { reasoning: "$800-500=300\\ \\text{cm}^3$.", marks: 1, markCode: "M" },
              { reasoning: "Tidal volume increases by 300 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 cm³",
            commonErrors: ["Adding volumes instead of subtracting."],
          },
        },
        {
          id: "cial-b-u4-vl-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A person breathes at 12 breaths min$^{-1}$ with a tidal volume of $0.5\\ \\text{dm}^3$. Calculate the ventilation rate in dm³ min$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ventilation rate",
                statement: "Ventilation rate $=$ breathing rate $\\times$ tidal volume.",
              },
            ],
            steps: [
              { reasoning: "$12 \\times 0.5 = 6$ dm³ min$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "The ventilation rate is 6 dm³ min$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 dm³ min$^{-1}$",
            commonErrors: ["Multiplying by residual volume."],
          },
        },
        {
          id: "cial-b-u4-vl-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tidal volume is $500\\ \\text{cm}^3$ and inspiratory reserve volume is $1500\\ \\text{cm}^3$. Calculate the maximum volume of air that can be inhaled in one breath.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maximum inhalation",
                statement: "Maximum inhaled volume $=$ tidal volume $+$ inspiratory reserve volume.",
              },
            ],
            steps: [
              { reasoning: "$500+1500=2000\\ \\text{cm}^3$.", marks: 1, markCode: "M" },
              { reasoning: "The maximum inhaled volume is 2000 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000 cm³",
            commonErrors: ["Including expiratory reserve volume."],
          },
        },
        {
          id: "cial-b-u4-vl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how carbon dioxide concentration in blood controls breathing rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Breathing control",
                statement: "Chemoreceptors detect $CO_2$/$H^+$ changes and signal the respiratory centres to alter breathing rate.",
              },
            ],
            steps: [
              { reasoning: "Rising $CO_2$ lowers blood pH and stimulates chemoreceptors.", marks: 1, markCode: "M" },
              { reasoning: "Signals go to the medulla to increase breathing rate and depth.", marks: 1, markCode: "M" },
              { reasoning: "Faster ventilation removes $CO_2$ and restores normal pH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CO_2$ stimulates chemoreceptors, increasing ventilation to remove carbon dioxide.",
            commonErrors: ["Saying oxygen directly controls breathing rate."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u4-gas-exchange-notes",
      title: "Gas exchange — revision notes",
      summary:
        "Alveoli adaptations, partial pressure gradients, ventilation mechanics.",
      sections: [
        {
          heading: "Alveoli",
          body: "Large SA, thin walls (1 cell), moist, capillary network, surfactant. O₂ diffuses in, CO₂ out — driven by partial pressure gradients.",
        },
        {
          heading: "Ventilation",
          body: "Inspiration: diaphragm+intercostals contract→volume up→pressure down→air in. Control via CO₂ chemoreceptors. Lung volumes: tidal, reserves, vital capacity.",
        },
        {
          heading: "Exam checklist",
          body: "Can you describe alveolar adaptations? Explain partial pressure? Describe inspiration? Name lung volumes?",
        },
      ],
    },
  ],
};
