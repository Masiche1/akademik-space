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
              { id: "a", text: "In the alveoli" },
              { id: "b", text: "In the bronchi" },
              { id: "c", text: "In the trachea" },
              { id: "d", text: "In the larynx" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Volume of air in one normal breath" },
              { id: "b", text: "Maximum lung capacity" },
              { id: "c", text: "Air remaining after exhalation" },
              { id: "d", text: "Total lung volume" },
            ],
            correctChoiceId: "a",
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
