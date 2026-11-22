import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "esc8-u1-lesson-1-3",
  code: "1-3",
  title: "Ecosystems",
  goal: "I CAN use food chains and food webs to describe how energy is transferred, and explain how organisms are adapted to their environment and depend on each other.",
  standards: ["KS3 Biology", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Ecosystem", definition: "All the living organisms in an area together with the non-living parts of their environment, interacting with each other." },
    { term: "Producer", definition: "An organism, usually a green plant or alga, that makes its own food by photosynthesis." },
    { term: "Consumer", definition: "An organism that gets its energy by eating other organisms." },
    { term: "Food web", definition: "A diagram of several food chains in an ecosystem that are linked together." },
    { term: "Adaptation", definition: "A feature of an organism that helps it to survive in its environment." },
    { term: "Predator", definition: "An animal that hunts and eats other animals." },
    { term: "Interdependence", definition: "The way organisms in a community depend on each other for food, pollination, shelter and other needs." },
  ],
  concepts: [
    {
      id: "esc8-u1-food-chains-energy",
      title: "Food chains, food webs and energy transfer",
      skill: "Interpret food chains and food webs, predict the effect of changes, and calculate and explain energy transfer between trophic levels.",
      lesson: {
        sections: [
          {
            heading: "Food chains and food webs",
            body: "A **food chain** shows what eats what. The arrows show the direction of energy transfer, so they point from the organism that is eaten to the organism that eats it.\n\n$$\\text{grass}\\rightarrow\\text{rabbit}\\rightarrow\\text{fox}$$\n\nThe **producer** (grass) makes food by photosynthesis. Rabbits are **primary consumers** (herbivores) and foxes are **secondary consumers** (carnivores). A **food web** links many food chains together. Removing one organism can affect many others. If a predator is removed, the numbers of its prey may rise; if the prey is removed, the predator may starve or switch to another food.",
          },
          {
            heading: "Energy transfer between trophic levels",
            body: "Only a small proportion of the energy at one level is passed to the next. Typically about 10% is transferred. The rest is:\n\n- released as heat in **respiration** (used for movement, keeping warm and other life processes);\n- lost in **waste** such as faeces and urine;\n- contained in parts that are **not eaten**, such as bones, roots or fur.\n\nThis is why food chains rarely have more than four or five organisms: too little energy is left to support another level.\n\n$$\\text{percentage transferred}=\\frac{\\text{energy passed to next level}}{\\text{energy at the previous level}}\\times100$$",
          },
        ],
        keyFormulas: [
          { name: "Energy transfer", statement: "$\\text{percentage transferred}=\\dfrac{\\text{energy passed on}}{\\text{energy available}}\\times100$" },
          { name: "Arrows in a food chain", statement: "Point from the organism that is eaten to the organism that eats it (direction of energy transfer)" },
          { name: "Why energy is lost", statement: "Respiration (heat), waste, and parts not eaten" },
        ],
        workedExample: {
          problem: "A field of grass contains 40 000 kJ of energy per year. Grasshoppers eating the grass gain 4 000 kJ. Calculate the percentage of energy transferred from the grass to the grasshoppers.",
          solution: "Percentage transferred $=\\dfrac{4000}{40000}\\times100=10\\%$.",
        },
      },
      questions: [
        {
          id: "esc8-u1-food-chains-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the food chain $\\text{lettuce}\\rightarrow\\text{snail}\\rightarrow\\text{thrush}$, which organism is the producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun" },
              { id: "b", text: "Thrush" },
              { id: "c", text: "Lettuce" },
              { id: "d", text: "Snail" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "A producer makes its own food by photosynthesis, so it is the first organism in a food chain." },
            ],
            steps: [
              { reasoning: "Lettuce is a green plant that makes food by photosynthesis. The Sun is the source of energy but is not an organism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Lettuce",
            commonErrors: ["Choosing the Sun because it is the source of energy.", "Choosing the last organism in the chain."],
            examinerNote: "B1 for lettuce.",
          },
        },
        {
          id: "esc8-u1-food-chains-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A meadow contains 25 000 kJ of energy in its grass. Rabbits eating the grass gain 2 500 kJ of this energy.\n\nCalculate the percentage of energy transferred from the grass to the rabbits.",
          response: { type: "numeric", parts: [{ label: "Percentage transferred", answer: 10, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage transferred", statement: "$\\dfrac{\\text{energy passed on}}{\\text{energy available}}\\times100$" },
            ],
            steps: [
              { reasoning: "Divide the energy gained by the rabbits by the energy in the grass and multiply by 100.", working: "\\frac{2500}{25000}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "10\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$",
            commonErrors: ["Dividing 25 000 by 2 500 to give 10 without a percentage, or by 100 instead of multiplying.", "Giving 90% by calculating the energy lost."],
            examinerNote: "M1 for 2500 / 25000 $\\times$ 100 (oe). A1 for 10. Allow 10%.",
          },
        },
        {
          id: "esc8-u1-food-chains-energy-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A lake ecosystem has 12 000 kJ of energy in its producers. 15% of this energy is passed to the primary consumers. 10% of the energy in the primary consumers is passed to the secondary consumers.\n\nCalculate the energy, in kJ, in the secondary consumers.",
          response: { type: "numeric", parts: [{ label: "Energy in secondary consumers", answer: 180, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of a quantity", statement: "energy passed on $=\\dfrac{\\text{percentage}}{100}\\times\\text{energy available}$" },
            ],
            steps: [
              { reasoning: "Find 15% of the energy in the producers.", working: "12000\\times0.15=1800\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Find 10% of the energy in the primary consumers.", working: "1800\\times0.10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "180\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$180\\text{ kJ}$",
            commonErrors: ["Taking 10% of 12 000 (1200) and then 15% of this.", "Adding the percentages (25%) and taking this from 12 000."],
            examinerNote: "M1 for 1800 seen. M1 for 10% of their 1800 (ecf). A1 for 180 with unit kJ.",
          },
        },
        {
          id: "esc8-u1-food-chains-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In a grassland food web:\n\n- grass is eaten by rabbits and by mice;\n- rabbits are eaten by foxes;\n- mice are eaten by foxes and by owls.\n\nThe grass contains 20 000 kJ of energy. Assume 10% of the energy is transferred at each stage.",
          parts: [
            { label: "a", prompt: "Name the producer in this food web.", marks: 1 },
            { label: "b", prompt: "Write a food chain of three organisms that includes an owl.", marks: 1 },
            { label: "c", prompt: "A disease kills most of the rabbits. Predict what happens to the number of mice and explain your answer.", marks: 2 },
            { label: "d", prompt: "Calculate the energy, in kJ, that reaches the owls in the chain grass $\\rightarrow$ mice $\\rightarrow$ owls.", marks: 2 },
            { label: "e", prompt: "Explain why not all of the energy in the grass is passed on to the mice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food chain arrows", statement: "Arrows point in the direction of energy transfer, from the organism eaten to the organism that eats it." },
              { kind: "formula", name: "Energy transfer", statement: "About 10% of the energy is passed on at each stage." },
              { kind: "principle", name: "Energy loss", statement: "Energy is lost through respiration (heat), waste and parts that are not eaten." },
            ],
            steps: [
              { part: "a", reasoning: "Grass is the only organism that makes its own food.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Arrows point from the grass to the mouse, and from the mouse to the owl.", working: "\\text{grass}\\rightarrow\\text{mouse}\\rightarrow\\text{owl}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Foxes lose their rabbit prey, so they eat more mice. The number of mice decreases.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Explanation: with few rabbits left to eat, the foxes depend more on mice as a food source, so more mice are eaten.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "10% of the grass energy reaches the mice, then 10% of that reaches the owls.", working: "20000\\times0.10=2000\\text{ kJ},\\quad 2000\\times0.10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "200\\text{ kJ}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Some energy is released as heat in the grass's respiration, so it is not stored for the mice.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Some parts of the grass, such as the roots, are not eaten by mice.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Some of what the mice eat is not digested and is lost in faeces (egestion), or the mice use energy in their own respiration (movement, keeping warm).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Grass (b) grass $\\rightarrow$ mouse $\\rightarrow$ owl (c) Mice decrease because foxes eat more mice (d) 200 kJ (e) Energy lost by respiration, parts not eaten, and waste.",
            commonErrors: ["Drawing arrows from predator to prey.", "In (c) saying the mice increase because there is less competition for grass without considering the foxes.", "In (e) saying energy is 'used up' or 'destroyed'."],
            examinerNote: "(b) The chain must include an owl, so grass $\\rightarrow$ mouse $\\rightarrow$ fox is not acceptable. (c) Accept an increase in mice only if supported by a valid argument about reduced competition for grass. (d) M1 for 2000 seen. (e) Allow any three from: respiration / heat; not eaten (roots, bones); faeces / waste; movement.",
          },
        },
      ],
    },
    {
      id: "esc8-u1-adaptation-interdependence",
      title: "Adaptation and interdependence",
      skill: "Explain how organisms are adapted to their habitats and how populations depend on each other.",
      lesson: {
        sections: [
          {
            heading: "Adaptation",
            body: "An **adaptation** is a feature that helps an organism survive in its habitat. Adaptations may be structural, behavioural or functional.\n\n- **Polar bear**: thick fur and a layer of fat (blubber) reduce heat loss; white fur gives camouflage in snow.\n- **Camel**: stores fat in its hump and can tolerate water loss; wide feet stop it sinking into sand.\n- **Cactus**: thick stem stores water; spines reduce water loss and protect against animals; shallow, wide-spreading roots absorb rain quickly.\n\nWhen you explain an adaptation, always link the feature to how it helps survival.",
          },
          {
            heading: "Interdependence",
            body: "Organisms in an ecosystem depend on each other. Examples:\n\n- Animals depend on plants for food and shelter.\n- Many plants depend on insects for **pollination** and on animals for seed dispersal.\n- **Predator and prey** populations change together. When prey numbers rise, predators have more food, so predator numbers rise a little later. More predators eat more prey, so prey numbers fall, and then predator numbers fall as food runs short. The cycle repeats.\n\nIf one species is removed, other species that depend on it may decline.",
          },
        ],
        keyFormulas: [
          { name: "Adaptation", statement: "A feature that helps an organism survive in its environment" },
          { name: "Predator-prey cycle", statement: "Predator numbers rise and fall slightly after prey numbers" },
          { name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original value}}\\times100$" },
        ],
        workedExample: {
          problem: "A population of 500 mice falls to 400 mice after owls move into the area. Calculate the percentage decrease and suggest why the number fell.",
          solution: "Decrease $=500-400=100$. Percentage decrease $=\\dfrac{100}{500}\\times100=20\\%$. Owls are predators of mice, so more mice were eaten.",
        },
      },
      questions: [
        {
          id: "esc8-u1-adaptation-interdependence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A change that an individual makes during its life to cope with the weather" },
              { id: "b", text: "The place where an organism lives" },
              { id: "c", text: "A feature that helps an organism survive in its environment" },
              { id: "d", text: "A group of organisms of the same species living in one area" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "A feature of an organism that helps it to survive in its environment." },
            ],
            steps: [
              { reasoning: "Adaptations are features that give an organism a better chance of surviving and reproducing in its habitat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A feature that helps an organism survive in its environment",
            commonErrors: ["Choosing (c), which describes a population.", "Choosing (d), which describes a habitat."],
            examinerNote: "B1 for the correct definition.",
          },
        },
        {
          id: "esc8-u1-adaptation-interdependence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A polar bear lives in the Arctic, where it is very cold and the ground is covered in snow.\n\nDescribe **two** adaptations of a polar bear that help it to survive there.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and survival", statement: "An adaptation must be linked to how it helps the organism survive." },
            ],
            steps: [
              { reasoning: "One mark for each adaptation with its benefit.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Any two from: thick fur / layer of blubber to reduce heat loss; white fur for camouflage so it can sneak up on prey; large paws to spread weight on ice or to swim; small ears to reduce heat loss.",
            commonErrors: ["Giving a feature with no benefit, such as 'it has white fur'.", "Saying the bear 'chooses' to adapt or 'gets used to' the cold."],
            examinerNote: "B1 for each correct adaptation linked to survival. Allow 'keeps warm' for 'reduces heat loss'. Reject 'to stay warm' as the only point if no feature is named.",
          },
        },
        {
          id: "esc8-u1-adaptation-interdependence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a woodland, the number of foxes (predators) and the number of rabbits (prey) change over time. The number of rabbits increases, and a short time later the number of foxes increases.\n\nExplain why the number of foxes increases after the number of rabbits increases, and why the number of rabbits then falls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Predator-prey relationship", statement: "Predator numbers follow prey numbers, because prey is the predators' food supply." },
            ],
            steps: [
              { reasoning: "More rabbits means more food for the foxes.", marks: 1, markCode: "B" },
              { reasoning: "So more foxes survive and reproduce, and their number increases.", marks: 1, markCode: "B" },
              { reasoning: "More foxes eat more rabbits, so the number of rabbits falls.", marks: 1, markCode: "B" },
              { reasoning: "The cycle repeats because fewer rabbits means less food for the foxes, so the fox population then falls.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More rabbits means more food, so foxes increase; more foxes eat more rabbits, so rabbits fall; with less food, foxes then fall and the cycle repeats.",
            commonErrors: ["Saying the foxes 'increase because they eat rabbits' without mentioning more food available.", "Saying rabbits fall because they run out of grass without referring to the foxes."],
            examinerNote: "B1 for more food / prey available. B1 for more foxes survive or breed. B1 for more predation. R1 for the cycle repeating or fox numbers falling due to lack of food. Allow 'competition for food' for the fourth mark.",
          },
        },
        {
          id: "esc8-u1-adaptation-interdependence-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A scientist counts the populations of snowshoe hares (prey) and lynx (predators) in a forest over five years. The numbers are in thousands.\n\n- Year 1: hares 40, lynx 4\n- Year 2: hares 80, lynx 6\n- Year 3: hares 60, lynx 10\n- Year 4: hares 20, lynx 8\n- Year 5: hares 30, lynx 3",
          parts: [
            { label: "a", prompt: "Calculate the mean number of hares, in thousands, over the five years.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage decrease in the number of hares between Year 3 and Year 4. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Explain why the number of lynx increased between Year 2 and Year 3.", marks: 2 },
            { label: "d", prompt: "Explain why the number of hares decreased between Year 3 and Year 4.", marks: 2 },
            { label: "e", prompt: "Snowshoe hares have brown fur in summer and white fur in winter. Explain how this adaptation helps them to survive.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of values}}{\\text{number of values}}$" },
              { kind: "formula", name: "Percentage change", statement: "$\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
              { kind: "principle", name: "Predator-prey relationship", statement: "Predator numbers depend on the availability of prey; prey numbers fall when predation is high." },
            ],
            steps: [
              { part: "a", reasoning: "Add the five values and divide by 5.", working: "\\frac{40+80+60+20+30}{5}=\\frac{230}{5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "46\\text{ thousand}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Decrease divided by the original (Year 3) value, multiplied by 100.", working: "\\frac{60-20}{60}\\times100=\\frac{40}{60}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 3 significant figures.", working: "66.7\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The hare population was high in Year 2 (80 thousand), so there was plenty of food for the lynx.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "More lynx survived and reproduced, so the lynx population increased.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The lynx population was at its highest (10 thousand) so many more hares were eaten (predation).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "More hares were killed than were born, so the hare population decreased.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "In winter white fur matches the snow, giving camouflage.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Lynx cannot see the hares easily, so fewer are caught and eaten (and brown fur does the same in summer).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 46 thousand (b) 66.7% (c) More hares gave more food, so more lynx survived and bred (d) Many lynx ate many hares (e) White fur is camouflage in snow so hares are harder to see and are eaten less.",
            commonErrors: ["Dividing by 20 (the final value) instead of by the original value in (b), giving 200%.", "Dividing the sum by 4 instead of 5 in (a).", "In (d) explaining that hares ran out of food without evidence."],
            examinerNote: "(a) Allow 46 000 if units are clear. (b) Allow ecf for use of an incorrect decrease. A1 for 66.7 (three significant figures as asked). (e) Allow 'brown fur camouflages them in summer' for the first mark.",
          },
        },
      ],
    },
  ],
};
