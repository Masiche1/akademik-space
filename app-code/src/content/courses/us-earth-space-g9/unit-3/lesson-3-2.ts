import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ess9-u3-lesson-3-2",
  code: "3-2",
  title: "Natural Hazards and Sustainability",
  goal: "I CAN analyze risk from earthquakes, volcanoes and floods, use magnitude scales and probability, and calculate and interpret ecological footprints to evaluate sustainability.",
  standards: ["HS-ESS3-1", "HS-ESS3-3", "HS-ESS3-4", "SEP: Using Mathematics and Computational Thinking", "CCC: Stability and Change"],
  vocabulary: [
    { term: "Natural hazard", definition: "A natural event, such as an earthquake, eruption or flood, that can harm people and property." },
    { term: "Risk", definition: "The chance of harm from a hazard, which depends on how likely the hazard is, how many people and buildings are exposed, and how well prepared they are." },
    { term: "Magnitude", definition: "A measure of the size of an earthquake based on the energy released. Each whole-number increase is a tenfold increase in the recorded ground motion." },
    { term: "Mitigation", definition: "Actions taken to reduce the damage caused by a hazard, such as building codes, warning systems and land-use planning." },
    { term: "Ecological footprint", definition: "The area of productive land and water needed to supply the resources a person or population uses and to absorb its waste." },
    { term: "Biocapacity", definition: "The ability of ecosystems to produce useful biological materials and absorb waste, measured in global hectares." },
    { term: "Sustainability", definition: "Using resources in a way that meets present needs without reducing the ability of future generations to meet theirs." },
  ],
  concepts: [
    {
      id: "ess9-u3-natural-hazards",
      title: "Earthquakes, volcanoes and floods: risk and mitigation",
      skill: "Use magnitude scales and probability to describe hazards, and evaluate ways to reduce risk.",
      lesson: {
        sections: [
          {
            heading: "Where hazards occur and why risk varies",
            body: "Earthquakes and volcanoes are concentrated along plate boundaries, such as the Pacific \"Ring of Fire\". Floods occur along rivers and coasts after heavy rain, snowmelt or storm surge.\n\nThe **risk** from a hazard depends on more than the hazard itself:\n\n- how likely and how strong it is;\n- how many people and how much property are **exposed**;\n- how **vulnerable** buildings and communities are, for example building quality and soil type;\n- how well people are warned and prepared.\n\nTwo earthquakes of the same magnitude can cause very different damage for these reasons.",
          },
          {
            heading: "Magnitude scales",
            body: "Earthquake size is reported on the **moment magnitude scale**, which replaced the Richter scale for large earthquakes. It is logarithmic.\n\n- Each increase of 1 in magnitude means the recorded ground motion (amplitude) is **10 times** larger.\n- Each increase of 1 means about **32 times** more energy is released.\n\nSo the ground-motion ratio for a difference of $\\Delta M$ is $10^{\\Delta M}$ and the energy ratio is about $32^{\\Delta M}$.",
          },
          {
            heading: "Probability and mitigation",
            body: "A \"100-year flood\" is a flood with a 1% (0.01) chance of happening in any one year. It does not mean one flood each century. The chance of **no** such flood in $n$ years is $0.99^n$, so the chance of **at least one** is $1-0.99^n$.\n\nMitigation reduces harm. Examples: building codes and flexible foundations for earthquakes; monitoring, evacuation plans and hazard maps for volcanoes; levees, floodplain zoning and retaining wetlands for floods.",
          },
        ],
        keyFormulas: [
          { name: "Ground-motion ratio", statement: "$10^{\\Delta M}$ for a magnitude difference $\\Delta M$" },
          { name: "Energy ratio", statement: "About $32^{\\Delta M}$ for a magnitude difference $\\Delta M$" },
          { name: "At least one event in n years", statement: "$1-(1-p)^n$ where $p$ is the annual probability" },
        ],
        workedExample: {
          problem: "How many times larger is the ground motion of a magnitude 8 earthquake than a magnitude 6 earthquake?",
          solution: "The difference is $\\Delta M=8-6=2$. The ground-motion ratio is $10^{2}=100$, so the magnitude 8 earthquake produces ground motion 100 times larger.",
        },
      },
      questions: [
        {
          id: "ess9-u3-natural-hazards-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An earthquake has magnitude 6.0. Another earthquake has magnitude 7.0.\n\nHow does the recorded ground motion of the second earthquake compare with the first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100 times larger" },
              { id: "b", text: "10 times larger" },
              { id: "c", text: "About 1.2 times larger" },
              { id: "d", text: "Exactly 2 times larger" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Logarithmic scale", statement: "Each whole-number increase in magnitude is a tenfold increase in recorded ground motion." },
            ],
            steps: [
              { reasoning: "The difference is 1 magnitude unit, so ground motion is $10^1=10$ times larger.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 10 times larger",
            commonErrors: ["Treating the scale as linear (7 is not 7/6 of 6).", "Choosing 100 by confusing a difference of 1 with a difference of 2."],
            examinerNote: "B1 for 10 times.",
          },
        },
        {
          id: "ess9-u3-natural-hazards-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Earthquake A has magnitude 5.0 and earthquake B has magnitude 7.0.\n\nCalculate how many times larger the recorded ground motion of earthquake B is than that of earthquake A.",
          response: { type: "numeric", parts: [{ label: "Ratio of ground motion", answer: 100 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ground-motion ratio", statement: "ratio $=10^{\\Delta M}$" },
            ],
            steps: [
              { reasoning: "Find the magnitude difference and use it as the power of 10.", working: "\\Delta M=7.0-5.0=2,\\quad 10^{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "10^{2}=100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ times",
            commonErrors: ["Dividing 7 by 5 to get 1.4.", "Calculating $10\\times2=20$."],
            examinerNote: "M1 for $10^2$ (oe). A1 for 100.",
          },
        },
        {
          id: "ess9-u3-natural-hazards-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two cities were each hit by an earthquake of magnitude 6.8. City 1 had a few injuries and little damage. City 2 had thousands of deaths and many collapsed buildings.\n\nSuggest **two** reasons for the difference and explain how mitigation could have reduced the damage in City 2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk factors", statement: "Damage depends on exposure, vulnerability, local geology and preparedness, not magnitude alone." },
              { kind: "definition", name: "Mitigation", statement: "Mitigation is action taken in advance to reduce the harm from a hazard." },
            ],
            steps: [
              { reasoning: "A first valid reason, for example building construction (codes, reinforced structures) differed.", marks: 1, markCode: "B" },
              { reasoning: "A second valid reason, for example population density, depth and distance of the earthquake, soft soil that amplifies shaking, or time of day.", marks: 1, markCode: "B" },
              { reasoning: "A mitigation measure, for example enforcing and updating building codes or retrofitting old buildings.", marks: 1, markCode: "B" },
              { reasoning: "Explain how it reduces damage: structures flex instead of collapsing, so fewer people are trapped or killed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Differences in building quality and in exposure or local geology (for example soft soil or population density) explain the damage. Enforcing strong building codes and retrofitting would keep buildings standing and so cut deaths and injuries.",
            commonErrors: ["Saying the magnitude must have been different.", "Naming a mitigation measure without explaining its effect."],
            examinerNote: "B1 each for two valid reasons. B1 for a mitigation measure (allow early warning, drills, planning). R1 for a link to reduced harm. Reject 'luck' and 'one city was richer' without a physical link."
          },
        },
        {
          id: "ess9-u3-natural-hazards-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A town lies on a river floodplain. Records show that a flood of a certain height has a 1% chance of occurring in any given year (a \"100-year flood\").",
          parts: [
            { label: "a", prompt: "Calculate the probability that the town has **no** flood of this height in a single year.", marks: 1 },
            { label: "b", prompt: "Calculate the probability of no flood of this height in 30 years. Give your answer to 2 decimal places.", marks: 2 },
            { label: "c", prompt: "Hence calculate the probability of at least one flood of this height in 30 years, as a percentage to the nearest whole number.", marks: 2 },
            { label: "d", prompt: "Explain why the town's council should not interpret \"100-year flood\" as \"one flood every 100 years\".", marks: 1 },
            { label: "e", prompt: "Describe **two** ways the town could reduce flood risk.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement rule", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
              { kind: "formula", name: "Independent years", statement: "$P(\\text{none in } n \\text{ years})=(1-p)^n$" },
              { kind: "definition", name: "Mitigation", statement: "Actions that reduce harm from a hazard, such as zoning or levees." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the annual flood probability from 1.", working: "1-0.01=0.99", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Raise to the power of 30 because each year is independent.", working: "0.99^{30}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 2 decimal places.", working: "0.99^{30}\\approx0.74", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract from 1.", working: "1-0.7397\\approx0.26", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to a percentage.", working: "26\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It is a probability, not a schedule: a 1% chance applies each year, so two such floods can happen in consecutive years or none in 100 years.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "One valid measure, such as levees or flood walls, or restricting building on the floodplain (zoning).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A second different measure, such as restoring wetlands, flood warning and evacuation plans, or raising buildings.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.99$ (b) $0.74$ (c) $26\\%$ (d) The 1% chance applies every year, so floods can cluster or not occur for a century (e) Any two of: levees, floodplain zoning, wetland restoration, warning systems, raised buildings.",
            commonErrors: ["In (b) multiplying $0.99\\times30$.", "In (c) calculating $1\\%\\times30=30\\%$, which ignores that the years are not simply additive."],
            examinerNote: "(b) Allow 0.7397 or 0.74 for A1. (c) Allow ecf from (b); allow 26% from 0.74 (1 - 0.74 = 0.26). (e) Accept any two valid, different measures."
          },
        },
      ],
    },
    {
      id: "ess9-u3-sustainability-footprint",
      title: "Sustainability, population and ecological footprints",
      skill: "Calculate and interpret ecological footprints and evaluate how population and resource use affect biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Human population, resource use and biodiversity",
            body: "Human population growth and rising consumption increase demand for food, water, energy and land. Converting forests, wetlands and grasslands to farms, cities and mines reduces habitat. Habitat loss is a leading cause of declining **biodiversity**, the variety of living things in an ecosystem.\n\nImpact depends on both the number of people and the resources each person uses, so a small population with high consumption can have a large impact.",
          },
          {
            heading: "Ecological footprint and biocapacity",
            body: "An **ecological footprint** is the area of land and water, in **global hectares (gha)**, needed to supply a person's resources and absorb their waste. **Biocapacity** is the area of productive land and water available.\n\n- Total footprint $=$ footprint per person $\\times$ population.\n- Total biocapacity $=$ biocapacity per person $\\times$ population.\n- If footprint is larger than biocapacity there is an **ecological deficit**, supported by imports or by using up natural capital.\n- Number of Earths needed $=\\dfrac{\\text{footprint per person}}{\\text{global biocapacity per person}}$.",
          },
          {
            heading: "Designing sustainable solutions",
            body: "Solutions are judged against criteria such as effect on footprint, cost, fairness and how well they protect biodiversity. Examples: renewable energy, efficient buildings, less food waste, protected habitat corridors, sustainable farming and recycling. Because the problem has many causes, the best solutions usually combine several actions.",
          },
        ],
        keyFormulas: [
          { name: "Total footprint", statement: "footprint per person $\\times$ population" },
          { name: "Earths needed", statement: "$\\dfrac{\\text{footprint per person}}{\\text{global biocapacity per person}}$" },
          { name: "Ecological deficit", statement: "footprint $-$ biocapacity (positive means deficit)" },
        ],
        workedExample: {
          problem: "A country has 20 million people, each with a footprint of 4.0 gha. Its biocapacity is 2.5 gha per person. Find the country's total footprint, its total biocapacity and its ecological deficit.",
          solution: "Total footprint $=4.0\\times20=80$ million gha. Total biocapacity $=2.5\\times20=50$ million gha. Deficit $=80-50=30$ million gha. The country is using more than its own ecosystems provide.",
        },
      },
      questions: [
        {
          id: "ess9-u3-sustainability-footprint-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a person's ecological footprint measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The size of the person's home" },
              { id: "b", text: "The number of trees the person plants" },
              { id: "c", text: "The mass of waste the person produces each year" },
              { id: "d", text: "The area of productive land and water needed to supply the person's resources and absorb their waste" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecological footprint", statement: "The area of productive land and water needed to supply resources and absorb waste." },
            ],
            steps: [
              { reasoning: "The footprint is expressed as an area (global hectares) of land and water, not a mass of waste.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The area of productive land and water needed to supply the person's resources and absorb their waste",
            commonErrors: ["Choosing (a) because waste is part of the footprint, but it is measured as an area, not a mass."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u3-sustainability-footprint-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The average person in a country has an ecological footprint of 4.8 gha. The global biocapacity is 1.6 gha per person.\n\nCalculate how many Earths would be needed if everyone lived like the average person in this country.",
          response: { type: "numeric", parts: [{ label: "Earths needed", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Earths needed", statement: "$\\dfrac{\\text{footprint per person}}{\\text{global biocapacity per person}}$" },
            ],
            steps: [
              { reasoning: "Divide the footprint per person by the global biocapacity per person.", working: "\\frac{4.8}{1.6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ Earths",
            commonErrors: ["Dividing 1.6 by 4.8 to get 0.33.", "Subtracting to get 3.2."],
            examinerNote: "M1 for 4.8 / 1.6 (oe). A1 for 3.",
          },
        },
        {
          id: "ess9-u3-sustainability-footprint-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A region's population is growing and many people are moving from villages to cities. Farmland and forest at the edge of the cities are being converted to housing.\n\nConstruct an explanation of how this could reduce biodiversity, and propose **one** design solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat loss", statement: "Converting natural land to human use destroys and fragments habitat, reducing population sizes and species diversity." },
              { kind: "principle", name: "Design criteria", statement: "A solution should reduce impact while meeting human needs within cost and other constraints." },
            ],
            steps: [
              { reasoning: "Claim: more people and new housing remove or fragment habitat.", marks: 1, markCode: "B" },
              { reasoning: "Evidence/reasoning: with less habitat there is less food and shelter, so populations of species shrink or disappear, and fragments isolate populations.", marks: 1, markCode: "R" },
              { reasoning: "A valid design solution, for example compact high-density housing, protected green corridors, or reusing already developed land.", marks: 1, markCode: "B" },
              { reasoning: "Explain how it reduces the impact or meets a criterion (for example it keeps the habitat connected, or uses less land per person).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Housing replaces and fragments habitat, so species lose food and shelter and their populations decline. Compact housing on previously developed land and protected corridors would meet housing needs with less land loss and keep habitats connected.",
            commonErrors: ["Describing pollution only without linking to habitat loss.", "Proposing a solution (such as 'stop population growth') without a way it could be carried out."],
            examinerNote: "B1 for habitat removal/fragmentation. R1 for consequence for species. B1 valid solution. R1 for how it helps. Allow other well-reasoned solutions."
          },
        },
        {
          id: "ess9-u3-sustainability-footprint-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A country has a population of 50 million. The average ecological footprint is 3.2 gha per person and the country's biocapacity is 2.0 gha per person.",
          parts: [
            { label: "a", prompt: "Calculate the country's total ecological footprint in millions of global hectares.", marks: 2 },
            { label: "b", prompt: "Calculate the country's total biocapacity in millions of global hectares.", marks: 1 },
            { label: "c", prompt: "Calculate the country's ecological deficit in millions of global hectares.", marks: 1 },
            { label: "d", prompt: "Explain **two** ways a country can maintain a deficit, and why this may not be sustainable.", marks: 3 },
            { label: "e", prompt: "Suggest **two** actions that would reduce the country's footprint.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total footprint", statement: "footprint per person $\\times$ population" },
              { kind: "definition", name: "Ecological deficit", statement: "Footprint minus biocapacity, when footprint is larger." },
              { kind: "definition", name: "Sustainability", statement: "Meeting present needs without reducing the ability of future generations to meet theirs." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply footprint per person by population.", working: "3.2\\times50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "160\\text{ million gha}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply biocapacity per person by population.", working: "2.0\\times50=100\\text{ million gha}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract biocapacity from footprint.", working: "160-100=60\\text{ million gha}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "One way: importing resources (food, fuel, timber) produced in other countries.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Another way: using up natural capital, for example overfishing, cutting forests faster than they regrow, or emitting more carbon than ecosystems absorb.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is not sustainable because stocks run out and the damage reduces future supply, or other countries may be unable or unwilling to keep supplying.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "One valid action, for example shifting to renewable energy or reducing food waste.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A second different action, for example public transit, efficient buildings or recycling.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $160$ million gha (b) $100$ million gha (c) $60$ million gha (d) By importing resources and by depleting natural capital; both are unsustainable because stocks and supply fail in the long term (e) Any two valid actions, such as renewable energy and reducing food waste.",
            commonErrors: ["In (a) using 2.0 instead of 3.2.", "In (c) giving 1.2 (the per-person deficit) without the total, or subtracting in the wrong order."],
            examinerNote: "(a) M1 for 3.2 x 50. (c) Allow ecf from (a) and (b). Allow 1.2 gha per person only with 'per person' stated, as a partial insight but not for the required total. (d) Accept any two valid, different mechanisms. (e) Accept any two valid, different actions."
          },
        },
      ],
    },
  ],
};
