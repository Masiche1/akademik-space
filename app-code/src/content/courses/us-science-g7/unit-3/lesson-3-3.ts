import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "s7-u3-lesson-3-3",
  code: "3-3",
  title: "Resources and Hazards",
  goal: "I CAN explain why natural resources are distributed unevenly, and analyze how natural hazards and human activities affect people and Earth's systems.",
  standards: ["MS-ESS3-1", "MS-ESS3-2", "MS-ESS3-3", "SEP: Analyzing and Interpreting Data", "SEP: Constructing Explanations and Designing Solutions"],
  vocabulary: [
    { term: "Natural resource", definition: "A material from Earth that people use, such as water, minerals, soil and fossil fuels." },
    { term: "Fossil fuel", definition: "A fuel such as coal, oil or natural gas formed from the remains of ancient organisms over millions of years." },
    { term: "Renewable resource", definition: "A resource that is replaced by natural processes within a human lifetime, such as sunlight or wind." },
    { term: "Natural hazard", definition: "A natural event, such as an earthquake, flood or hurricane, that can harm people and property." },
    { term: "Per-capita", definition: "Per person: a total amount divided by the number of people." },
    { term: "Forecast", definition: "A prediction of when and where an event is likely to occur, based on data and patterns." },
    { term: "Sustainability", definition: "Using resources in ways that meet present needs without harming the ability of future generations to meet theirs." },
  ],
  concepts: [
    {
      id: "s7-u3-resource-distribution",
      title: "Uneven distribution of natural resources",
      skill: "Explain how past and current geologic processes cause natural resources to be distributed unevenly, and analyze data about that distribution.",
      lesson: {
        sections: [
          {
            heading: "Why resources are in some places and not others",
            body: "Natural resources are not spread evenly over Earth because they form by specific geologic processes in specific places.\n\n- **Fossil fuels** formed from marine organisms and swamp plants buried in certain sedimentary basins over millions of years.\n- **Metal ores** such as copper and gold collect where magma, hot water or plate collisions concentrated the minerals.\n- **Fresh water** depends on climate, mountains and rivers, so it is plentiful in some regions and scarce in deserts.\n- **Fertile soil** forms from weathered rock and decayed organisms over thousands of years, and is best on flat plains and river valleys.",
          },
          {
            heading: "Effects on people",
            body: "Places with a large share of a valuable resource may become wealthy or contested, while others must trade for it. The distribution can also change with time: new technology, discovery and depletion change which resources can be used. Comparing a region's **share of a resource** with its **share of the population** shows how uneven the distribution is.\n\n$$\\text{share}=\\frac{\\text{part}}{\\text{whole}}\\times100\\%$$",
          },
        ],
        keyFormulas: [
          { name: "Share of a total", statement: "$\\text{share}=\\dfrac{\\text{part}}{\\text{whole}}\\times100\\%$" },
          { name: "Fossil fuels", statement: "Form over millions of years in specific basins, so they are nonrenewable" },
          { name: "Cause of uneven distribution", statement: "Past and current geologic processes" },
        ],
        workedExample: {
          problem: "A country has 12 million tons of a mineral. World reserves are 150 million tons. What percent of world reserves is in this country?",
          solution: "Share $=\\dfrac{12}{150}\\times100\\%=8\\%$.",
        },
      },
      questions: [
        {
          id: "s7-u3-resource-distribution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are fossil fuels found in some regions of the world but not in others?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They formed only in places where the Sun is strongest." },
              { id: "b", text: "They formed where specific geologic conditions existed over millions of years." },
              { id: "c", text: "They are carried to different regions by wind." },
              { id: "d", text: "They are made quickly wherever people drill." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Geologic origin of resources", statement: "Resources form by geologic processes in particular places over long periods." },
            ],
            steps: [
              { reasoning: "Fossil fuels formed from buried ancient organisms in specific basins over millions of years.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They formed where specific geologic conditions existed over millions of years.",
            commonErrors: ["Choosing (d); fossil fuels take millions of years to form and cannot be made quickly."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u3-resource-distribution-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "World reserves of a mineral total 80 million tons. One country holds 28 million tons.\n\nCalculate the percent of the world's reserves held by this country.",
          response: { type: "numeric", parts: [{ label: "Share", answer: 35, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Share", statement: "$\\text{share}=\\dfrac{\\text{part}}{\\text{whole}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the country's amount by the world total.", working: "\\frac{28}{80}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 100.", working: "\\frac{28}{80}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=35\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35\\%$",
            commonErrors: ["Dividing 80 by 28.", "Subtracting 80 - 28 = 52."],
            examinerNote: "M1 28 / 80. M1 x 100. A1 35 or 35%.",
          },
        },
        {
          id: "s7-u3-resource-distribution-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Copper ore is found in large amounts along the western edge of South America, near a plate boundary, but is rare in many flat, geologically quiet regions.\n\nConstruct an explanation for this uneven distribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Geologic origin of resources", statement: "Ores form where geologic processes concentrate minerals." },
              { kind: "principle", name: "Plate boundaries", statement: "Plate interactions create magma, heat and hot fluids that concentrate minerals." },
            ],
            steps: [
              { reasoning: "Claim: copper is concentrated where certain geologic processes occurred.", marks: 1, markCode: "B" },
              { reasoning: "Near plate boundaries, plate collisions produce magma and volcanic activity.", marks: 1, markCode: "B" },
              { reasoning: "Hot fluids from the magma dissolve metals and deposit them as concentrated ore in cracks and rocks.", marks: 1, markCode: "B" },
              { reasoning: "Quiet regions lack these processes, so copper stays spread thinly and is not concentrated enough to mine.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Plate interactions create magma and hot fluids that concentrate copper into ore; quiet regions lack these processes.",
            commonErrors: ["Saying that copper was brought there by people.", "Describing where copper is found without explaining why."],
            examinerNote: "Allow 'magma' or 'hot water' for hot fluids. Reasoning mark requires a contrast with other regions.",
          },
        },
        {
          id: "s7-u3-resource-distribution-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Region W has 480 billion barrels of oil reserves. World oil reserves total 1,600 billion barrels. Region W has a population of 400 million, and the world population is 8,000 million (8 billion).",
          parts: [
            { label: "a", prompt: "Calculate the percent of world oil reserves in Region W.", marks: 2 },
            { label: "b", prompt: "Calculate the percent of the world population living in Region W.", marks: 2 },
            { label: "c", prompt: "Explain why the oil is not distributed in proportion to population.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim that regions with little oil cannot have enough energy. Use evidence from the data and one other idea.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Share", statement: "$\\text{share}=\\dfrac{\\text{part}}{\\text{whole}}\\times100\\%$" },
              { kind: "principle", name: "Geologic origin of resources", statement: "Resources form by geologic processes in particular places, not where people live." },
              { kind: "definition", name: "Renewable resource", statement: "Renewable resources, such as sunlight and wind, are replaced by natural processes." },
            ],
            steps: [
              { part: "a", reasoning: "Divide and multiply by 100.", working: "\\frac{480}{1600}\\times100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=30\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide and multiply by 100.", working: "\\frac{400}{8000}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=5\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Oil formed from buried ancient marine organisms in specific sedimentary basins, over millions of years.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Where people live depends on other factors such as climate and water, so the two distributions are unrelated.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Evidence: Region W has 30% of the oil but only 5% of the people, so the other 95% of people share the remaining 70%, and oil can be traded.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Other idea: regions can use renewable resources such as sunlight and wind, which do not depend on oil deposits.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Judgment: the claim is not fully supported, because trade and other energy sources can supply regions with little oil.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $30\\%$ (b) $5\\%$ (c) Oil forms in specific basins by geologic processes, unrelated to where people live (d) Claim not supported: oil is traded and renewable energy is available.",
            commonErrors: ["In (b) dividing 8000 by 400.", "In (c) saying that people moved away from oil."],
            examinerNote: "(a) and (b) allow ecf for arithmetic slips if the method is correct. (d) Allow any valid other idea, such as conservation or new technology.",
          },
        },
      ],
    },
    {
      id: "s7-u3-hazards-human-impact",
      title: "Natural hazards and human impact",
      skill: "Describe how natural hazards are monitored and forecast, and use per-capita data to analyze how human activities change Earth's systems.",
      lesson: {
        sections: [
          {
            heading: "Natural hazards",
            body: "**Natural hazards** such as earthquakes, volcanic eruptions, tsunamis, hurricanes and floods can cause great harm. Some are linked to plate motion, and some to weather and water.\n\nScientists study the **patterns** of past events to make forecasts. Volcanoes and hurricanes can be forecast days or weeks ahead using data from satellites and sensors. Earthquakes can be mapped by risk, but cannot yet be predicted precisely. Forecasts help people prepare with warnings, evacuation plans and **engineering designs** such as earthquake-resistant buildings.",
          },
          {
            heading: "Human impact and per-capita use",
            body: "Human activities change Earth's land, water, air and living things. Clearing forests, burning fossil fuels, farming and building cities all change ecosystems. As the population grows and each person uses more resources, the total impact grows.\n\n**Per-capita** means per person.\n\n$$\\text{per-capita use}=\\frac{\\text{total use}}{\\text{population}}$$\n\nTotal use equals per-capita use times population. People can reduce harm by conserving, recycling, and using renewable resources.",
          },
        ],
        keyFormulas: [
          { name: "Per-capita use", statement: "$\\text{per-capita use}=\\dfrac{\\text{total use}}{\\text{population}}$" },
          { name: "Total use", statement: "$\\text{total use}=\\text{per-capita use}\\times\\text{population}$" },
          { name: "Percent change", statement: "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" },
        ],
        workedExample: {
          problem: "A city of 50,000 people uses 15,000,000 liters of water per day. Calculate the per-capita use.",
          solution: "Per-capita use $=\\dfrac{15{,}000{,}000}{50{,}000}=300\\text{ L per person per day}$.",
        },
      },
      questions: [
        {
          id: "s7-u3-hazards-human-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which natural hazard is caused most directly by the movement of tectonic plates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earthquake" },
              { id: "b", text: "Hurricane" },
              { id: "c", text: "Drought" },
              { id: "d", text: "Blizzard" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plate motion and hazards", statement: "Earthquakes occur when stress from moving plates is suddenly released along faults." },
            ],
            steps: [
              { reasoning: "Earthquakes are caused by plate motion; the others are caused by weather and climate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Earthquake",
            commonErrors: ["Choosing hurricane, which is driven by warm ocean water and the atmosphere."],
            examinerNote: "B1 for earthquake.",
          },
        },
        {
          id: "s7-u3-hazards-human-impact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A town of 30,000 people uses 7,500,000 liters of water in one day.\n\nCalculate the per-capita water use, in liters per person per day.",
          response: { type: "numeric", parts: [{ label: "Per-capita use", answer: 250, unit: "L/person/day" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Per-capita use", statement: "$\\text{per-capita use}=\\dfrac{\\text{total use}}{\\text{population}}$" },
            ],
            steps: [
              { reasoning: "Identify total use and population.", working: "\\text{total}=7{,}500{,}000\\text{ L},\\ \\text{population}=30{,}000", marks: 1, markCode: "M" },
              { reasoning: "Divide total use by population.", working: "\\frac{7{,}500{,}000}{30{,}000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "=250\\text{ L per person per day}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250\\text{ L per person per day}$",
            commonErrors: ["Multiplying total use by population.", "Dividing population by total use."],
            examinerNote: "M1 for identifying values. M1 for 7 500 000 / 30 000. A1 for 250.",
          },
        },
        {
          id: "s7-u3-hazards-human-impact-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A town has 20,000 people. Each person uses 250 liters of water per day. The population grows to 30,000 people, and per-capita use stays the same.\n\nCalculate the increase in the town's total daily water use, in liters.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 2500000, unit: "L" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total use", statement: "$\\text{total use}=\\text{per-capita use}\\times\\text{population}$" },
            ],
            steps: [
              { reasoning: "Find the total use at each population.", working: "20{,}000\\times250=5{,}000{,}000\\text{ L},\\quad 30{,}000\\times250=7{,}500{,}000\\text{ L}", marks: 1, markCode: "M" },
              { reasoning: "Subtract to find the change.", working: "7{,}500{,}000-5{,}000{,}000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=2{,}500{,}000\\text{ L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2{,}500{,}000\\text{ L}$",
            commonErrors: ["Giving 10,000 (the extra people) as the increase in water use without multiplying by 250.", "Using 20,000 and 30,000 as the totals."],
            examinerNote: "Allow 10 000 x 250 for the first two marks. M1 totals or change in population times 250. M1 subtraction (if totals used). A1 2 500 000.",
          },
        },
        {
          id: "s7-u3-hazards-human-impact-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A coastal city is studying its water use. In 1990 the city had 100,000 people, and each person used 150 liters of water per day. In 2020 the city had 160,000 people, and each person used 180 liters per day.",
          parts: [
            { label: "a", prompt: "Calculate the city's total daily water use in 1990 and in 2020, in liters.", marks: 2 },
            { label: "b", prompt: "Calculate the percent increase in total daily water use from 1990 to 2020. Round to the nearest whole percent.", marks: 2 },
            { label: "c", prompt: "Describe **two** ways increased water use by a city can harm ecosystems.", marks: 2 },
            { label: "d", prompt: "Evaluate one strategy the city could use to reduce its water use. Give an advantage and a limitation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total use", statement: "$\\text{total use}=\\text{per-capita use}\\times\\text{population}$" },
              { kind: "formula", name: "Percent change", statement: "$\\dfrac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$" },
              { kind: "principle", name: "Sustainability", statement: "Resources should be used so that future needs can still be met." },
            ],
            steps: [
              { part: "a", reasoning: "1990 total.", working: "100{,}000\\times150=15{,}000{,}000\\text{ L}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "2020 total.", working: "160{,}000\\times180=28{,}800{,}000\\text{ L}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find the change divided by the original amount.", working: "\\frac{28{,}800{,}000-15{,}000{,}000}{15{,}000{,}000}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=\\frac{13{,}800{,}000}{15{,}000{,}000}\\times100=92\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First valid harm, such as lowering river or groundwater levels so that habitats dry up.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Second valid harm, such as more wastewater and pollution entering streams or the ocean, harming organisms.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Strategy with an advantage, for example fixing leaks or fitting low-flow fixtures lowers per-capita use quickly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A limitation, for example it costs money or relies on people changing habits.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Judgment: the strategy helps but is likely insufficient alone while the population keeps growing.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $15{,}000{,}000\\text{ L}$ and $28{,}800{,}000\\text{ L}$ (b) $92\\%$ (c) Lower water levels harm habitats; wastewater pollution harms organisms (d) A strategy such as fixing leaks lowers use but costs money and may not offset population growth.",
            commonErrors: ["In (b) dividing by the new value (13.8 / 28.8 = 48%).", "In (a) adding the population and per-capita use."],
            examinerNote: "(b) Allow 92 or 92%. Allow ecf from (a). (c) and (d) allow any valid ideas.",
          },
        },
      ],
    },
  ],
};
