import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "bio9-u4-lesson-4-3",
  code: "4-3",
  title: "Ecosystems and Human Impact",
  goal: "I CAN analyze population growth curves, carrying capacity and biodiversity, and evaluate human impacts on ecosystems and solutions to reduce them.",
  standards: ["HS-LS2-1", "HS-LS2-2", "HS-LS2-6", "HS-LS2-7", "HS-LS4-6", "SEP: Analyzing and Interpreting Data", "SEP: Constructing Explanations and Designing Solutions"],
  vocabulary: [
    { term: "Carrying capacity", definition: "The maximum population size of a species that an environment can support over time with the available resources." },
    { term: "Limiting factor", definition: "A resource or condition, such as food, water, space or disease, that restricts the size of a population." },
    { term: "Exponential growth", definition: "Growth in which a population increases by a constant percentage each time period, producing a J-shaped curve." },
    { term: "Logistic growth", definition: "Growth that starts quickly and then levels off near the carrying capacity, producing an S-shaped curve." },
    { term: "Biodiversity", definition: "The variety of life in an ecosystem, including the number of species, genetic variation within species and variety of ecosystems." },
    { term: "Habitat fragmentation", definition: "The breaking of a large habitat into smaller, isolated patches by roads, farms or cities." },
    { term: "Invasive species", definition: "A non-native species that spreads rapidly and harms the native ecosystem." },
  ],
  concepts: [
    {
      id: "bio9-u4-populations-biodiversity",
      title: "Carrying capacity, growth curves and biodiversity",
      skill: "Interpret population growth curves, explain carrying capacity and compare biodiversity using data.",
      lesson: {
        sections: [
          {
            heading: "Population growth curves",
            body: "A population grows when births plus immigration exceed deaths plus emigration.\n\n- **Exponential growth** (J-shaped curve): with unlimited food and space, the population grows by a constant percentage each period, so it speeds up. This does not last long.\n- **Logistic growth** (S-shaped curve): growth is fast at first, then slows as resources become scarce, and the population levels off near the **carrying capacity** ($K$).\n\nThe carrying capacity is not fixed. It rises if food increases and falls with drought, disease or habitat loss. Populations can overshoot $K$ for a short time and then crash.",
          },
          {
            heading: "Limiting factors",
            body: "**Density-dependent** factors become stronger as the population gets denser: competition for food, predation, parasites and disease. **Density-independent** factors affect a population regardless of its size: fires, floods, severe weather and pollution events.\n\nPopulation growth rate for a period is $\\dfrac{\\text{change in population}}{\\text{time}}$, and percent growth is $\\dfrac{\\text{change}}{\\text{starting population}}\\times100$.",
          },
          {
            heading: "Biodiversity",
            body: "**Biodiversity** includes **species richness** (the number of different species), the relative abundance of each, and genetic diversity. High biodiversity makes ecosystems more **resilient**: if one species declines, others can fill its role, and diverse populations are more likely to include individuals able to survive a disturbance such as disease or climate change.\n\nSimpson's diversity index compares sites: $D=1-\\dfrac{\\sum n(n-1)}{N(N-1)}$, where $n$ is the number of individuals of each species and $N$ is the total number. A value closer to 1 means higher diversity.",
          },
        ],
        keyFormulas: [
          { name: "Percent growth", statement: "$\\dfrac{\\text{change in population}}{\\text{starting population}}\\times100$" },
          { name: "Logistic growth", statement: "Population levels off at the carrying capacity $K$ (S-shaped curve)" },
          { name: "Simpson's index", statement: "$D=1-\\dfrac{\\sum n(n-1)}{N(N-1)}$" },
        ],
        workedExample: {
          problem: "A deer population is 400 in year 1 and 460 in year 2. Calculate the percent growth, and predict what will happen if the carrying capacity is 600.",
          solution: "Change $=460-400=60$. Percent growth $=\\dfrac{60}{400}\\times100=15\\%$. As the population nears 600, food competition and disease increase, so growth slows and the population levels off near 600 in a logistic (S-shaped) pattern.",
        },
      },
      questions: [
        {
          id: "bio9-u4-populations-biodiversity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A population graph rises steeply, then levels off at a roughly constant number. What does the flat part of the curve represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extinction of the population" },
              { id: "b", text: "A decrease in the number of limiting factors" },
              { id: "c", text: "Exponential growth" },
              { id: "d", text: "The carrying capacity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrying capacity", statement: "The maximum population an environment can support over time." },
            ],
            steps: [
              { reasoning: "A leveling off shows births and deaths balance because resources limit further growth.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The carrying capacity",
            commonErrors: ["Choosing exponential growth, which keeps rising.", "Choosing (d): limiting factors become stronger near the plateau."],
            examinerNote: "B1 carrying capacity.",
          },
        },
        {
          id: "bio9-u4-populations-biodiversity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population of 250 rabbits grows to 310 rabbits in one year. The carrying capacity of the meadow is 400.\n\nCalculate the percent growth of the rabbit population to the nearest whole percent, and state what you predict about the growth rate as the population approaches 400.",
          response: {
            type: "numeric",
            parts: [{ label: "Percent growth", answer: 24, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent growth", statement: "$\\dfrac{\\text{change in population}}{\\text{starting population}}\\times100$" },
              { kind: "principle", name: "Logistic growth", statement: "Growth slows as the population approaches carrying capacity." },
            ],
            steps: [
              { reasoning: "Change in population is 310 - 250 = 60; divide by the starting population.", working: "\\frac{60}{250}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "24\\%", marks: 1, markCode: "A" },
              { reasoning: "The growth rate will slow and the population levels off near 400 as food and space become limiting.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "24%. Growth will slow and level off near 400 (logistic).",
            commonErrors: ["Dividing by 310 instead of 250, giving 19%.", "Predicting continued exponential growth."],
            examinerNote: "M1 60 / 250. A1 24. R1 growth slows / levels off near carrying capacity because of limiting resources. The prediction need not be typed into the answer box.",
          },
        },
        {
          id: "bio9-u4-populations-biodiversity-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two meadows each contain 20 plants. Meadow A has 10 plants of each of 2 species. Meadow B has 5 plants of each of 4 species.\n\nUse Simpson's index $D=1-\\dfrac{\\sum n(n-1)}{N(N-1)}$ to calculate $D$ for each meadow. Give each answer to 2 decimal places, then state which meadow has the higher biodiversity.",
          response: {
            type: "numeric",
            parts: [
              { label: "D for meadow A", answer: 0.53, tolerance: 0.005 },
              { label: "D for meadow B", answer: 0.79, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simpson's index", statement: "$D=1-\\dfrac{\\sum n(n-1)}{N(N-1)}$" },
            ],
            steps: [
              { reasoning: "Meadow A: two species with $n=10$. $\\sum n(n-1)=2\\times90=180$ and $N(N-1)=20\\times19=380$.", working: "D_A=1-\\frac{180}{380}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "D_A=1-0.4737=0.53", marks: 1, markCode: "A" },
              { reasoning: "Meadow B: four species with $n=5$. $\\sum n(n-1)=4\\times20=80$.", working: "D_B=1-\\frac{80}{380}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "D_B=1-0.2105=0.79", marks: 1, markCode: "A" },
              { reasoning: "Meadow B has the higher value, so higher biodiversity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$D_A=0.53$, $D_B=0.79$; meadow B has the higher biodiversity.",
            commonErrors: ["Using $n^2$ instead of $n(n-1)$.", "Forgetting to subtract from 1, giving the reverse ranking."],
            examinerNote: "Allow ecf.",
          },
        },
        {
          id: "bio9-u4-populations-biodiversity-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bacterial culture is grown in a flask. The population doubles every hour. At 0 hours there are 500 cells. After 6 hours the culture reaches the limit of its food supply at about 32 000 cells and the number stops increasing.",
          parts: [
            { label: "a", prompt: "Calculate the number of cells after 3 hours.", marks: 2 },
            { label: "b", prompt: "Name the type of growth during the first hours and describe the shape of the graph.", marks: 2 },
            { label: "c", prompt: "Explain why growth stops at about 32 000 cells.", marks: 2 },
            { label: "d", prompt: "State the term for the maximum population the flask can support. Suggest how the value would change if the volume of food was doubled.", marks: 2 },
            { label: "e", prompt: "Give one example of a density-independent factor that could reduce a wild population.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exponential growth", statement: "A constant percentage increase per period gives a J-shaped curve." },
              { kind: "definition", name: "Carrying capacity", statement: "The maximum population an environment can support." },
            ],
            steps: [
              { part: "a", reasoning: "Doubling 3 times multiplies by $2^3=8$.", working: "500\\times2^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "4000", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exponential growth.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The graph is a J-shaped curve that gets steeper over time.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Food (a limiting resource) runs out, so cells cannot all get nutrients.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Death rate rises to equal the birth rate (waste may also build up), so the population levels off.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Carrying capacity.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It would increase, because more food supports more cells.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Any one of: fire, flood, drought, severe storm, volcanic eruption, pollution event.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4000 (b) Exponential, J-shaped (c) Food runs out; deaths equal births (d) Carrying capacity; increases (e) e.g. fire or flood.",
            commonErrors: ["In (a) multiplying 500 by 3, giving 1500.", "In (e) naming disease or competition, which are density-dependent."],
            examinerNote: "(a) M1 500 x 2^3 or 500 x 8. (c) Allow 'limiting factor' with a named resource. (e) Reject predation, disease and competition.",
          },
        },
      ],
    },
    {
      id: "bio9-u4-human-impact",
      title: "Human impacts on biodiversity and solutions",
      skill: "Evaluate human impacts on biodiversity and design and compare solutions using criteria and trade-offs.",
      lesson: {
        sections: [
          {
            heading: "Human impacts",
            body: "Human activities change ecosystems and are the main drivers of current biodiversity loss. Major causes include:\n\n- **Habitat loss and fragmentation**: clearing forests for farms, roads and cities removes habitat or splits it into small patches, isolating populations and reducing gene flow.\n- **Invasive species**: non-native species can outcompete or prey on natives that have no defenses.\n- **Overharvesting**: hunting or fishing faster than populations can reproduce.\n- **Pollution**: fertilizer runoff causes algal blooms and low oxygen (eutrophication); toxins can build up in food chains (biomagnification).\n- **Climate change**: warming shifts ranges and timing, and ocean absorption of carbon dioxide causes acidification.\n\nLosing a species can affect others through food webs, and lower genetic diversity makes a population less able to adapt.",
          },
          {
            heading: "Designing and evaluating solutions",
            body: "To design a solution, define the problem, set **criteria** (what the solution must achieve, such as cost, effectiveness, fairness) and **constraints** (limits such as budget, time, laws). Then compare options and consider **trade-offs**.\n\nExamples:\n- **Wildlife corridors** (bridges or tunnels) reconnect fragments and restore gene flow, but cost money and need land.\n- **Protected areas and sustainable harvest quotas** let populations recover but may limit local livelihoods.\n- **Reducing fertilizer use or planting buffer strips** cuts runoff but can reduce crop yield or require farmer incentives.\n- **Captive breeding and seed banks** protect species and genetic diversity, but do not restore wild habitat.\n\nA good solution is tested, monitored with data and adjusted.",
          },
          {
            heading: "Scoring options with a decision matrix",
            body: "A decision matrix scores each option against each criterion (for example 1 to 5), weights the criteria by importance, and adds the weighted scores. For example, with weights effectiveness $\\times3$ and cost $\\times2$, an option scoring 4 for effectiveness and 2 for cost has a total of $4\\times3+2\\times2=16$. Always justify scores with evidence and discuss limits of the scoring.",
          },
        ],
        keyFormulas: [
          { name: "Impacts", statement: "Habitat loss, invasive species, overharvesting, pollution, climate change" },
          { name: "Decision matrix", statement: "Total $=\\sum(\\text{score}\\times\\text{weight})$" },
          { name: "Design criteria", statement: "Criteria say what a solution must achieve; constraints are limits such as cost and time" },
        ],
        workedExample: {
          problem: "A road splits a forest and a salamander population is isolated in each part. Suggest a solution and a trade-off.",
          solution: "Build tunnels under the road (a wildlife corridor) so salamanders can cross and gene flow resumes, maintaining genetic diversity. The trade-off is the construction cost and the need to monitor the tunnels to confirm they are being used.",
        },
      },
      questions: [
        {
          id: "bio9-u4-human-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which human activity reduces biodiversity by dividing a large habitat into small isolated patches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creating a wildlife corridor" },
              { id: "b", text: "Building a road through a forest" },
              { id: "c", text: "Planting native trees along a river" },
              { id: "d", text: "Setting fishing quotas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat fragmentation", statement: "Large habitats are broken into small isolated patches." },
            ],
            steps: [
              { reasoning: "Roads cut across habitats, isolating populations. The other options help conserve species.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Building a road through a forest",
            commonErrors: ["Choosing (c); corridors reconnect habitats."],
            examinerNote: "B1 for road building.",
          },
        },
        {
          id: "bio9-u4-human-impact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fertilizer runs off a farm into a lake. Algae grow rapidly, then die and decompose, and fish in the lake die.\n\nExplain how the fertilizer led to the death of the fish.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eutrophication", statement: "Excess nutrients cause algal blooms; decomposition uses up dissolved oxygen." },
            ],
            steps: [
              { reasoning: "Nutrients from the fertilizer cause rapid algal growth (an algal bloom).", marks: 1, markCode: "B" },
              { reasoning: "When the algae die, decomposers (bacteria) multiply and use oxygen in aerobic respiration.", marks: 1, markCode: "B" },
              { reasoning: "The dissolved oxygen level falls too low, so the fish suffocate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Nutrients cause an algal bloom; decomposers use up oxygen when the algae die; the fish lack oxygen and die.",
            commonErrors: ["Saying the fertilizer poisoned the fish directly.", "Saying the algae used up all the oxygen while alive (they photosynthesize in daylight)."],
            examinerNote: "B1 algal growth from nutrients. B1 decomposition / respiration of decomposers. R1 low oxygen leading to death. Allow 'eutrophication' with explanation.",
          },
        },
        {
          id: "bio9-u4-human-impact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A town compares two plans to protect an endangered frog. Plan 1 builds a wetland reserve: effectiveness 4, cost 2, speed 2. Plan 2 sets up captive breeding: effectiveness 3, cost 4, speed 5. Scores run from 1 (poor) to 5 (excellent). The town weights effectiveness $\\times3$, cost $\\times2$ and speed $\\times1$.\n\nCalculate the weighted total for each plan and state which plan scores higher.",
          response: {
            type: "numeric",
            parts: [
              { label: "Plan 1 total", answer: 18 },
              { label: "Plan 2 total", answer: 22 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Decision matrix", statement: "Total $=\\sum(\\text{score}\\times\\text{weight})$" },
            ],
            steps: [
              { reasoning: "Plan 1: multiply each score by its weight and add.", working: "4\\times3+2\\times2+2\\times1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12+4+2=18", marks: 1, markCode: "A" },
              { reasoning: "Plan 2.", working: "3\\times3+4\\times2+5\\times1=9+8+5=22", marks: 1, markCode: "A" },
              { reasoning: "Plan 2 scores higher. However, captive breeding does not restore wild habitat, so the town should consider the limits of the scoring.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Plan 1 = 18, Plan 2 = 22; Plan 2 scores higher.",
            commonErrors: ["Adding scores without weights (8 and 12).", "Applying the weights to the wrong criteria."],
            examinerNote: "M1 correct method for either plan. A1 18. A1 22. R1 Plan 2 higher, with a sensible comment on limits.",
          },
        },
        {
          id: "bio9-u4-human-impact-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A highway cuts through a forest and divides a population of 80 black bears into two groups of 50 and 30. Researchers find that after 20 years the smaller group has lower genetic variation and more inherited health problems. Hunting has also reduced the combined population to 60 bears.",
          parts: [
            { label: "a", prompt: "Calculate the percent decrease in the total number of bears.", marks: 2 },
            { label: "b", prompt: "Explain why the smaller group has lower genetic variation.", marks: 2 },
            { label: "c", prompt: "Design a solution to improve the bears' survival. Identify one criterion and one constraint.", marks: 3 },
            { label: "d", prompt: "Evaluate one trade-off of your solution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent decrease", statement: "$\\dfrac{\\text{old}-\\text{new}}{\\text{old}}\\times100$" },
              { kind: "principle", name: "Gene flow and drift", statement: "Isolation prevents gene flow, and drift is stronger in small populations." },
            ],
            steps: [
              { part: "a", reasoning: "Change = 80 - 60 = 20; divide by the original.", working: "\\frac{80-60}{80}\\times100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "25\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In a small group, genetic drift removes alleles by chance.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "With no gene flow from the other group, lost alleles are not replaced and relatives breed together.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A suitable solution, for example wildlife overpasses or tunnels that reconnect the groups, plus limits on hunting.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A criterion, for example increase gene flow or raise the population above a target number.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A constraint, for example budget, land use or laws.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A trade-off, for example overpasses are expensive to build.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A judgment supported by evidence, for example the benefit of restored gene flow and healthier bears may outweigh the cost, and the use of the structure should be monitored.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 25% (b) Drift in a small group and no gene flow (c) Overpass or tunnels plus hunting limits; criterion and constraint stated (d) Cost versus restored gene flow, monitored with data.",
            commonErrors: ["In (a) dividing by 60 instead of 80, giving 33%.", "In (b) saying the bears lost alleles because they did not need them."],
            examinerNote: "(a) Allow ecf. (c) and (d) Accept any reasonable, justified solution that addresses fragmentation or hunting.",
          },
        },
      ],
    },
  ],
};
