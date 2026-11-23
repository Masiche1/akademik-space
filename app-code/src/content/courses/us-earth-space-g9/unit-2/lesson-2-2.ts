import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ess9-u2-lesson-2-2",
  code: "2-2",
  title: "Water and Feedbacks",
  goal: "I CAN explain how the properties of water shape Earth materials and surface processes, and analyze positive and negative feedback loops such as ice-albedo in Earth's systems.",
  standards: [
    "HS-ESS2-5",
    "HS-ESS2-2",
    "SEP: Using Mathematics and Computational Thinking",
    "CCC: Stability and Change",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "Specific heat capacity",
      definition:
        "The energy needed to raise the temperature of 1 gram of a substance by 1 degree Celsius.",
    },
    {
      term: "Polarity",
      definition:
        "An uneven charge distribution in a molecule; water is polar, which lets it dissolve many substances.",
    },
    {
      term: "Frost wedging",
      definition:
        "Mechanical weathering in which water freezes in rock cracks and expands, widening them.",
    },
    {
      term: "Albedo",
      definition:
        "The fraction of incoming sunlight that a surface reflects, from 0 (absorbs all) to 1 (reflects all).",
    },
    {
      term: "Positive feedback",
      definition:
        "A feedback loop in which a change causes further change in the same direction, amplifying the original change.",
    },
    {
      term: "Negative feedback",
      definition:
        "A feedback loop in which a change triggers a response that opposes it, stabilizing the system.",
    },
  ],
  concepts: [
    {
      id: "ess9-u2-water-properties-processes",
      title: "Properties of water and surface processes",
      skill:
        "Use the properties of water to explain weathering, erosion and heat moderation, including calculations with specific heat.",
      lesson: {
        sections: [
          {
            heading: "Why water is unusual",
            body: "Water molecules are **polar**, so they attract each other and attract ions and other polar molecules. This gives water several properties important to Earth's systems:\n\n- **Solvent:** water dissolves minerals and carries ions to streams and oceans (chemical weathering, caves, ocean salinity).\n- **High specific heat:** $c = 4.18\\text{ J/(g}\\cdot{}^\\circ\\text{C)}$, much higher than rock. Oceans absorb and release large amounts of energy with small temperature changes, moderating coastal climates.\n- **Ice is less dense than liquid water:** about $0.917\\text{ g/cm}^3$ versus $1.00\\text{ g/cm}^3$. Water expands by roughly 9% when it freezes.",
          },
          {
            heading: "Effects on Earth materials",
            body: "Because water expands as it freezes, water in rock cracks pushes the cracks wider (**frost wedging**), breaking rock into fragments. Flowing water, glaciers and waves then **erode** and transport these fragments, and deposit them as sediment. Dissolved acids (carbonic acid from $\\text{CO}_2$) weather limestone chemically.\n\nThe energy needed to change the temperature of a sample is:\n\n$$q = mc\\Delta T$$\n\nwhere $q$ is energy in joules, $m$ is mass in grams, $c$ is specific heat and $\\Delta T$ is the temperature change in $^\\circ\\text{C}$.",
          },
        ],
        keyFormulas: [
          { name: "Heat energy", statement: "$q = mc\\Delta T$" },
          {
            name: "Specific heat of water",
            statement: "$c = 4.18\\text{ J/(g}\\cdot{}^\\circ\\text{C)}$",
          },
          {
            name: "Density",
            statement:
              "$\\rho = \\dfrac{m}{V}$; ice $0.917\\text{ g/cm}^3$, liquid water $1.00\\text{ g/cm}^3$",
          },
        ],
        workedExample: {
          problem:
            "How much energy raises the temperature of 500 g of ocean water by $10^\\circ\\text{C}$?",
          solution:
            "Use $q = mc\\Delta T = 500 \\times 4.18 \\times 10 = 20{,}900\\text{ J}$. The same energy would raise 500 g of granite ($c = 0.79$) by $\\frac{20900}{500\\times0.79} \\approx 53^\\circ\\text{C}$, showing why land heats and cools faster than water.",
        },
      },
      questions: [
        {
          id: "ess9-u2-water-properties-processes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property of water explains why frost wedging breaks rock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules are non-polar." },
              { id: "b", text: "Water has a high specific heat." },
              { id: "c", text: "Water expands when it freezes." },
              { id: "d", text: "Water is a good solvent for minerals." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Expansion on freezing",
                statement:
                  "Water expands by about 9% as it freezes, because ice has a lower density than liquid water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ice takes up more volume than the liquid, so it exerts force that widens cracks.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Water expands when it freezes.",
            commonErrors: [
              "Choosing (c): dissolving causes chemical weathering, not frost wedging.",
              "Choosing (d): water is polar, not non-polar.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u2-water-properties-processes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sample of 250 g of seawater warms from $15^\\circ\\text{C}$ to $21^\\circ\\text{C}$. The specific heat of seawater is $4.0\\text{ J/(g}\\cdot{}^\\circ\\text{C)}$.\n\nCalculate the energy absorbed by the water.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy absorbed", answer: 6000, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Heat equation",
                statement: "$q = mc\\Delta T$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find the temperature change and substitute into $q = mc\\Delta T$.",
                working: "q = 250 \\times 4.0 \\times (21 - 15)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with units.",
                working: "q = 250 \\times 4.0 \\times 6 = 6000\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6000\\text{ J}$",
            commonErrors: [
              "Using 21 instead of the temperature change of 6.",
              "Forgetting the mass.",
            ],
            examinerNote:
              "M1 for correct substitution including change of 6. A1 for 6000 J. Allow 6 kJ.",
          },
        },
        {
          id: "ess9-u2-water-properties-processes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A beach receives 1000 J of energy that is absorbed equally by 100 g of seawater and 100 g of dry sand. The specific heat of seawater is $4.18\\text{ J/(g}\\cdot{}^\\circ\\text{C)}$ and of dry sand is $0.79\\text{ J/(g}\\cdot{}^\\circ\\text{C)}$.\n\nCalculate how many degrees Celsius warmer the sand becomes than the water. Give your answer to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Difference in temperature change",
                answer: 10.3,
                unit: "degrees Celsius",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Heat equation",
                statement: "$\\Delta T = \\dfrac{q}{mc}$",
              },
            ],
            steps: [
              {
                reasoning: "Temperature rise of the water.",
                working:
                  "\\Delta T_w = \\frac{1000}{100\\times4.18} = 2.39^\\circ\\text{C}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Temperature rise of the sand.",
                working:
                  "\\Delta T_s = \\frac{1000}{100\\times0.79} = 12.66^\\circ\\text{C}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the two changes.",
                working: "12.66 - 2.39",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate to 1 decimal place.",
                working: "\\approx 10.3^\\circ\\text{C}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10.3^\\circ\\text{C}$ warmer",
            commonErrors: [
              "Using temperatures in the wrong ratio (multiplying instead of dividing by $mc$).",
              "Giving only the sand's temperature rise (12.7).",
            ],
            examinerNote:
              "M1 water rise 2.39 (allow 2.4). M1 sand rise 12.66. M1 subtraction. A1 10.3. Allow 10.2 to 10.3 from rounded intermediate values.",
          },
        },
        {
          id: "ess9-u2-water-properties-processes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Water collects in a crack in a granite cliff in a mountain region where temperatures fall below $0^\\circ\\text{C}$ at night. The crack holds 200 cm$^3$ of liquid water (density $1.00\\text{ g/cm}^3$). Ice has a density of $0.917\\text{ g/cm}^3$.",
          parts: [
            {
              label: "a",
              prompt: "State why ice floats on liquid water.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Calculate the volume of ice formed when all of the 200 cm$^3$ of water freezes. Give your answer to 1 decimal place.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the percent increase in volume. Give your answer to 1 decimal place.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain how repeated freezing and thawing eventually breaks the cliff apart.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Explain why a town beside a large ocean has milder winters than a town at the same latitude far inland.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Density",
                statement:
                  "$\\rho = \\dfrac{m}{V}$, so $V = \\dfrac{m}{\\rho}$",
              },
              {
                kind: "property",
                name: "High specific heat of water",
                statement:
                  "Water absorbs or releases a lot of energy for a small temperature change.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ice is less dense than liquid water.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Mass is conserved: 200 g of water gives 200 g of ice. Divide by the density of ice.",
                working: "V = \\frac{200}{0.917}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate with units.",
                working: "V \\approx 218.1\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Find the increase and divide by the original volume.",
                working: "\\frac{218.1 - 200}{200}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\approx 9.1\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The water expands as it freezes, pushing on the crack walls and widening the crack.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "When it thaws, more water enters the wider crack; repeating cycles widen the crack until pieces break off.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "The ocean has a high specific heat, so it releases a large amount of energy as it cools slowly.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning:
                  "This energy warms the air over the coast, whereas inland land cools faster because rock and soil have a lower specific heat.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Ice is less dense than liquid water (b) 218.1 cm$^3$ (c) 9.1% (d) Expansion on freezing widens cracks over repeated cycles (e) The ocean's high specific heat releases energy slowly and moderates winter temperatures",
            commonErrors: [
              "In (b) multiplying 200 by 0.917 (183.4 cm$^3$), which would mean ice shrinks.",
              "In (c) dividing by 218.1 instead of the original 200 (giving 8.3%).",
            ],
            examinerNote:
              "(b) Allow 218. (c) Allow 9.0 or 9.1 oe; ecf from (b). (e) Allow 'water heats and cools slowly' oe.",
          },
        },
      ],
    },
    {
      id: "ess9-u2-earth-feedback-loops",
      title: "Feedback loops in Earth's systems",
      skill:
        "Classify feedbacks as positive or negative and quantify the ice-albedo feedback with absorbed solar energy.",
      lesson: {
        sections: [
          {
            heading: "Positive and negative feedback",
            body: "A **feedback loop** is a cycle in which a change in one part of a system causes changes that return to affect the original part. A **positive feedback** amplifies a change; a **negative feedback** reduces it and stabilizes the system.\n\n- **Ice-albedo (positive):** warming melts ice, exposing darker ocean or land that absorbs more sunlight, which causes more warming and more melting.\n- **Vegetation (negative):** more atmospheric $\\text{CO}_2$ can boost plant growth, so plants remove more $\\text{CO}_2$ from the air.\n- **Water vapor (positive):** warmer air holds more water vapor, a greenhouse gas, causing more warming.\n- **Low clouds (often negative):** low clouds reflect sunlight, cooling the surface.",
          },
          {
            heading: "Quantifying albedo",
            body: "**Albedo** $\\alpha$ is the fraction of sunlight reflected. For incoming solar energy $S$ per square meter, the absorbed energy is:\n\n$$S_{\\text{abs}} = S(1 - \\alpha)$$\n\nFresh snow has $\\alpha \\approx 0.8$, forests about $0.15$ and open ocean about $0.06$. The average solar energy reaching a square meter of Earth's surface area is about $340\\text{ W/m}^2$. For a mixed surface, the mean albedo is the area-weighted average of each surface's albedo.",
          },
        ],
        keyFormulas: [
          {
            name: "Absorbed energy",
            statement: "$S_{\\text{abs}} = S(1 - \\alpha)$",
          },
          {
            name: "Mean albedo",
            statement:
              "$\\alpha = f_1\\alpha_1 + f_2\\alpha_2$ (fractions $f$ of area)",
          },
          {
            name: "Feedback types",
            statement: "Positive amplifies a change; negative opposes it",
          },
        ],
        workedExample: {
          problem:
            "A region receives $340\\text{ W/m}^2$. Compare the energy absorbed by snow ($\\alpha = 0.80$) and forest ($\\alpha = 0.15$).",
          solution:
            "Snow: $340 \\times (1 - 0.80) = 340 \\times 0.20 = 68\\text{ W/m}^2$. Forest: $340 \\times 0.85 = 289\\text{ W/m}^2$. The forest absorbs $289 - 68 = 221\\text{ W/m}^2$ more, so replacing snow with forest warms the surface.",
        },
      },
      questions: [
        {
          id: "ess9-u2-earth-feedback-loops-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Warming melts Arctic sea ice, exposing dark ocean water that absorbs more sunlight and causes more warming. What kind of feedback is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not a feedback, because the cause is human" },
              {
                id: "b",
                text: "Negative feedback, because the ice disappears",
              },
              {
                id: "c",
                text: "Negative feedback, because the ocean cools the air",
              },
              {
                id: "d",
                text: "Positive feedback, because the change is amplified",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive feedback",
                statement:
                  "A feedback that amplifies the original change; positive does not mean good.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The initial warming leads to changes that cause still more warming, so it is amplified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(d)** Positive feedback, because the change is amplified",
            commonErrors: [
              "Choosing (a) or (d): a negative feedback reduces the original change.",
              "Thinking positive means beneficial.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u2-earth-feedback-loops-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sunlight reaches a patch of open ocean at $340\\text{ W/m}^2$. The ocean has an albedo of 0.06.\n\nCalculate the solar energy absorbed per square meter. Give your answer to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Absorbed energy",
                answer: 319.6,
                unit: "W/m^2",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Absorbed solar energy",
                statement: "$S_{\\text{abs}} = S(1 - \\alpha)$",
              },
            ],
            steps: [
              {
                reasoning: "The absorbed fraction is $1 - \\alpha$.",
                working: "S_{\\text{abs}} = 340 \\times (1 - 0.06)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with units.",
                working: "340 \\times 0.94 = 319.6\\text{ W/m}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$319.6\\text{ W/m}^2$",
            commonErrors: [
              "Multiplying by the albedo (20.4), which is the reflected energy.",
              "Using $1 + \\alpha$.",
            ],
            examinerNote: "M1 for 340 x 0.94. A1 for 319.6.",
          },
        },
        {
          id: "ess9-u2-earth-feedback-loops-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An Arctic region receives $340\\text{ W/m}^2$. At first, 40% of its area is ice ($\\alpha = 0.80$) and 60% is open ocean ($\\alpha = 0.06$). After warming, only 20% is ice and 80% is open ocean.\n\nCalculate the increase in absorbed solar energy per square meter. Give your answer to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Increase in absorbed energy",
                answer: 50.3,
                unit: "W/m^2",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean albedo",
                statement: "$\\alpha = f_1\\alpha_1 + f_2\\alpha_2$",
              },
              {
                kind: "formula",
                name: "Absorbed solar energy",
                statement: "$S_{\\text{abs}} = S(1 - \\alpha)$",
              },
            ],
            steps: [
              {
                reasoning: "Mean albedo before and after.",
                working:
                  "\\alpha_1 = 0.4(0.80) + 0.6(0.06) = 0.356,\\quad \\alpha_2 = 0.2(0.80)+0.8(0.06) = 0.208",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Absorbed energy before.",
                working: "340(1 - 0.356) = 218.96\\text{ W/m}^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Absorbed energy after.",
                working: "340(1 - 0.208) = 269.28\\text{ W/m}^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract.",
                working: "269.28 - 218.96 \\approx 50.3\\text{ W/m}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$50.3\\text{ W/m}^2$",
            commonErrors: [
              "Averaging the two albedos without weighting by area.",
              "Using the albedo instead of $1 - \\alpha$.",
            ],
            examinerNote:
              "M1 both mean albedos. M1 218.96. M1 269.28. A1 50.3. Allow ecf.",
          },
        },
        {
          id: "ess9-u2-earth-feedback-loops-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Scientists study the ice-albedo feedback in the Arctic. Average incoming sunlight is $340\\text{ W/m}^2$, snow-covered ice has an albedo of 0.80 and open ocean has an albedo of 0.06.",
          parts: [
            { label: "a", prompt: "Define positive feedback.", marks: 1 },
            {
              label: "b",
              prompt:
                "Calculate the solar energy absorbed per square meter by snow-covered ice.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate how many times more energy per square meter is absorbed by open ocean than by snow-covered ice. Give your answer to 1 decimal place.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Use your answers to explain how the ice-albedo feedback amplifies Arctic warming.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "More atmospheric carbon dioxide can increase plant growth, which removes carbon dioxide. Explain why this is a negative feedback.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Absorbed solar energy",
                statement: "$S_{\\text{abs}} = S(1 - \\alpha)$",
              },
              {
                kind: "definition",
                name: "Feedback",
                statement:
                  "Positive feedback amplifies a change; negative feedback opposes it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A positive feedback is a loop in which a change causes further change in the same direction, amplifying the original change.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Substitute into the absorbed energy formula.",
                working: "340 \\times (1 - 0.80)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate with units.",
                working: "68\\text{ W/m}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Ocean absorbs $340 \\times 0.94 = 319.6\\text{ W/m}^2$; divide by the ice value.",
                working: "\\frac{319.6}{68}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\approx 4.7",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Warming melts ice and replaces it with ocean that absorbs about 4.7 times more energy.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "The extra energy causes more warming and more melting, so the original warming is amplified (positive feedback).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "Higher CO2 leads to more plant growth, which removes more CO2 from the atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning:
                  "This reduces the original increase in CO2 (opposes the change), so it is a negative feedback.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) A change causes further change in the same direction (b) 68 W/m$^2$ (c) 4.7 times (d) Melting replaces reflective ice with absorbing ocean, causing more warming (e) The response opposes the original rise in CO2",
            commonErrors: [
              "In (c) comparing albedos (0.80 / 0.06 = 13.3) instead of absorbed energies.",
              "Confusing positive with 'good' and negative with 'bad'.",
            ],
            examinerNote:
              "(c) Allow 4.7 (4.70). Ecf from (b). (e) Allow 'stabilizes the system' oe.",
          },
        },
      ],
    },
  ],
};
