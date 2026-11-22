import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ess9-u1-lesson-1-3",
  code: "1-3",
  title: "Earth's History",
  goal: "I CAN use half-life and radiometric dating to calculate the age of materials, and use evidence from ancient Earth rocks, meteorites and lunar samples to explain when and how Earth formed.",
  standards: ["HS-ESS1-5", "HS-ESS1-6", "SEP: Using Mathematics and Computational Thinking", "SEP: Engaging in Argument from Evidence", "CCC: Stability and Change"],
  vocabulary: [
    { term: "Radioactive decay", definition: "The random process in which an unstable nucleus changes into a different nucleus by emitting radiation." },
    { term: "Half-life", definition: "The time it takes for half of the radioactive parent atoms in a sample to decay." },
    { term: "Parent and daughter isotopes", definition: "The unstable isotope that decays (parent) and the stable isotope it becomes (daughter)." },
    { term: "Radiometric dating", definition: "Finding the age of a material from the ratio of parent to daughter isotopes and the half-life." },
    { term: "Zircon", definition: "A durable mineral that traps uranium when it forms but excludes lead, making it excellent for dating." },
    { term: "Meteorite", definition: "A rocky or metallic object from space that has landed on a planet or moon." },
    { term: "Plate tectonics", definition: "The movement of Earth's plates, which recycles crust and destroys most old rocks." },
  ],
  concepts: [
    {
      id: "ess9-u1-radiometric-dating",
      title: "Radiometric dating and half-life calculations",
      skill: "Use half-life and the ratio of parent to daughter isotopes to calculate the age of a sample.",
      lesson: {
        sections: [
          {
            heading: "Half-life",
            body: "Unstable (radioactive) nuclei decay at random, but a large sample decays at a steady, predictable rate. The **half-life** is the time for half of the parent atoms to decay. It is not changed by temperature, pressure or chemical reactions.\n\nAfter $n$ half-lives, the fraction of the parent isotope remaining is\n\n$$\\text{fraction remaining}=\\left(\\frac{1}{2}\\right)^n$$\n\nSo after 1, 2, 3 and 4 half-lives, $\\frac12$, $\\frac14$, $\\frac18$ and $\\frac1{16}$ remain. The age of a sample is\n\n$$\\text{age}=n\\times t_{1/2}$$",
          },
          {
            heading: "Dating rocks and fossils",
            body: "When a mineral forms, it traps parent atoms. Over time they decay into daughter atoms. Measuring the **parent : daughter ratio** shows how many half-lives have passed.\n\n- If parent : daughter is $1:1$, half the parent has decayed: **1 half-life**.\n- If parent : daughter is $1:3$, one quarter remains: **2 half-lives**.\n- If parent : daughter is $1:7$, one eighth remains: **3 half-lives**.\n\nDifferent isotopes suit different ages. **Carbon-14** ($t_{1/2}=5730$ years) dates organic material up to about 50 000 years old. **Uranium-238** ($t_{1/2}=4.47$ billion years) dates rocks millions to billions of years old. **Potassium-40** ($t_{1/2}=1.25$ billion years) decays to argon-40. The method assumes the sample has stayed a closed system and started with no daughter atoms.",
          },
        ],
        keyFormulas: [
          { name: "Fraction remaining", statement: "$\\left(\\dfrac12\\right)^n$ after $n$ half-lives" },
          { name: "Age", statement: "$\\text{age}=n\\times t_{1/2}$" },
          { name: "Parent : daughter", statement: "$1:1$ means 1 half-life, $1:3$ means 2, $1:7$ means 3" },
        ],
        workedExample: {
          problem: "A rock contains 6.25% of its original potassium-40 ($t_{1/2}=1.25$ billion years). Calculate its age.",
          solution: "Find $n$ with $\\left(\\frac12\\right)^n=0.0625$. Since $\\frac1{16}=0.0625$, $n=4$. Age $=4\\times1.25=5.0$ billion years.",
        },
      },
      questions: [
        {
          id: "ess9-u1-radiometric-dating-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What fraction of a radioactive isotope remains after **two** half-lives?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One eighth" },
              { id: "b", text: "One quarter" },
              { id: "c", text: "One half" },
              { id: "d", text: "None, because it has all decayed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "After each half-life, half of the remaining parent atoms decay." },
            ],
            steps: [
              { reasoning: "After one half-life, half remains; after the second, half of that remains: $\\frac12\\times\\frac12=\\frac14$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One quarter",
            commonErrors: ["Thinking two half-lives remove everything.", "Choosing one half because only one halving is applied."],
            examinerNote: "B1 for one quarter / 25%.",
          },
        },
        {
          id: "ess9-u1-radiometric-dating-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A piece of ancient wood contains only $\\frac18$ of the carbon-14 found in living wood. The half-life of carbon-14 is 5730 years.\n\nCalculate the age of the wood in years.",
          response: { type: "numeric", parts: [{ label: "Age", answer: 17190, tolerance: 1, unit: "years" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Age from half-lives", statement: "$\\text{age}=n\\times t_{1/2}$, where $\\left(\\frac12\\right)^n$ is the fraction remaining." },
            ],
            steps: [
              { reasoning: "$\\frac18=\\left(\\frac12\\right)^3$, so 3 half-lives have passed.", working: "\\left(\\frac12\\right)^n=\\frac18\\Rightarrow n=3", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the half-life.", working: "\\text{age}=3\\times5730=17\\,190\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17\\,190\\text{ years}$",
            commonErrors: ["Using $n=8$ or $n=4$.", "Dividing 5730 by 8."],
            examinerNote: "M1 for 3 half-lives. A1 for 17 190 (allow 17 200 and $1.7\\times10^{4}$). The numeric tolerance is tight, so give the full value.",
          },
        },
        {
          id: "ess9-u1-radiometric-dating-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A mineral originally contained $80\\,\\mu\\text{g}$ of uranium-235. It now contains $5\\,\\mu\\text{g}$. The half-life of uranium-235 is $0.704$ billion years.\n\nCalculate the age of the mineral in billions of years. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Age", answer: 2.82, tolerance: 0.01, unit: "billion years" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Age from half-lives", statement: "$\\text{age}=n\\times t_{1/2}$." },
            ],
            steps: [
              { reasoning: "Halve repeatedly from 80 to 5 and count the half-lives.", working: "80\\to40\\to20\\to10\\to5:\\ n=4", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the half-life.", working: "\\text{age}=4\\times0.704", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\text{age}=2.816\\approx2.82\\text{ billion years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.82$ billion years",
            commonErrors: ["Using 3 or 5 half-lives.", "Dividing the half-life by the number of half-lives."],
            examinerNote: "M1 for 4 half-lives (or $80/5=16=2^4$). M1 for $4\\times0.704$. A1 for 2.82.",
          },
        },
        {
          id: "ess9-u1-radiometric-dating-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A volcanic rock contains potassium-40 and its decay product argon-40 (half-life of potassium-40: $1.25$ billion years). Analysis shows $1$ atom of potassium-40 for every $7$ atoms of argon-40. Assume that all of the argon-40 came from the decay of potassium-40.",
          parts: [
            { label: "a", prompt: "Define the term **half-life**.", marks: 1 },
            { label: "b", prompt: "Calculate the fraction of the original potassium-40 that remains.", marks: 2 },
            { label: "c", prompt: "Calculate the age of the rock in billions of years.", marks: 2 },
            { label: "d", prompt: "Explain why carbon-14 dating is unsuitable for a rock of this age.", marks: 2 },
            { label: "e", prompt: "State **two** assumptions made in this dating method.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "The time for half of the parent atoms in a sample to decay." },
              { kind: "formula", name: "Age from half-lives", statement: "$\\text{age}=n\\times t_{1/2}$." },
              { kind: "principle", name: "Choice of isotope", statement: "The half-life of the isotope must be comparable to the age of the sample." },
            ],
            steps: [
              { part: "a", reasoning: "The time taken for half of the radioactive parent atoms in a sample to decay.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Parent atoms remaining as a fraction of the total original atoms (parent plus daughter): 1 out of 1 + 7.", working: "\\frac{1}{1+7}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=\\frac18", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac18=\\left(\\frac12\\right)^3$, so 3 half-lives have passed; multiply by the half-life.", working: "3\\times1.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\text{age}=3.75\\text{ billion years}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The half-life of carbon-14 is only 5730 years, so after billions of years no measurable carbon-14 would remain.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Also, carbon-14 is found in once-living material, not in volcanic rock.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The rock formed with no argon-40 (no daughter atoms) at the start.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The rock has been a closed system, so no potassium or argon has entered or escaped since it formed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Time for half the parent atoms to decay (b) $\\frac18$ (c) $3.75$ billion years (d) Carbon-14 has a half-life of 5730 years so none would remain; also it is only in organic material (e) No argon at the start; closed system.",
            commonErrors: ["In (b) using 1/7 as the fraction remaining instead of 1/8.", "In (c) using 2 half-lives because of the ratio 1:7 being mistaken for 1:3."],
            examinerNote: "(b) M1 for dividing by the total 8 atoms. (c) Allow ecf from (b). (d) Allow 'carbon-14 is only useful up to about 50 000 years'. (e) Allow 'no daughter atoms to begin with' oe.",
          },
        },
      ],
    },
    {
      id: "ess9-u1-earth-formation-evidence",
      title: "Evidence for the formation of Earth",
      skill: "Use ancient Earth materials, meteorites and lunar rocks to construct an argument for the age and early history of Earth.",
      lesson: {
        sections: [
          {
            heading: "Why Earth's oldest rocks are not the age of Earth",
            body: "Earth is about **4.54 billion years old**, but the oldest rocks that formed on Earth's surface are younger. The **Acasta Gneiss** in Canada is about **4.0 billion years old**. Tiny **zircon** crystals from Jack Hills, Australia, are up to **4.4 billion years old**, and they are the oldest Earth materials known.\n\nEarth keeps few old rocks because **plate tectonics** recycles crust into the mantle, and weathering and erosion destroy rocks at the surface. So the rock record on Earth only gives a minimum age.",
          },
          {
            heading: "Meteorites and the Moon",
            body: "Meteorites are pieces of asteroids left over from the formation of the solar system, and many are unchanged since then. Uranium-lead dating of meteorites gives ages of about **4.57 billion years**. This is the best estimate of when the solar system's solid material formed.\n\nThe Moon has no plate tectonics or liquid water, so its rocks stay preserved. Apollo samples from the lunar highlands are about **4.4 to 4.5 billion years old**, and the dark lunar maria are about 3.1 to 3.9 billion years old. Together with Earth's zircons, these samples fit a single timeline: the solar system formed about 4.57 billion years ago, Earth formed soon after, and the Moon formed from debris of a giant impact early in Earth's history.",
          },
        ],
        keyFormulas: [
          { name: "Age of Earth", statement: "About 4.54 billion years" },
          { name: "Age of the solar system", statement: "About 4.57 billion years, from meteorites" },
          { name: "Oldest Earth materials", statement: "Zircon crystals about 4.4 billion years; Acasta Gneiss about 4.0 billion years" },
        ],
        workedExample: {
          problem: "The Acasta Gneiss is 4.0 billion years old and Earth is 4.54 billion years old. How much of Earth's history is missing from the oldest rocks, as a percentage of Earth's age? Give your answer to 2 significant figures.",
          solution: "Missing time $=4.54-4.0=0.54$ billion years. Percentage $=\\dfrac{0.54}{4.54}\\times100=11.9\\%\\approx12\\%$.",
        },
      },
      questions: [
        {
          id: "ess9-u1-earth-formation-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are the oldest rocks found on Earth younger than Earth itself?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth formed after its oldest rocks did" },
              { id: "b", text: "The Moon formed the early rocks and sent them to Earth" },
              { id: "c", text: "Plate tectonics, weathering and erosion have destroyed or recycled the earliest rocks" },
              { id: "d", text: "Radioactive decay makes rocks look older than they are" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rock recycling", statement: "Plate tectonics and erosion constantly recycle and destroy Earth's crust." },
            ],
            steps: [
              { reasoning: "Early crust has been recycled into the mantle or eroded away, so only younger rocks and a few old fragments survive.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Plate tectonics, weathering and erosion have destroyed or recycled the earliest rocks",
            commonErrors: ["Thinking Earth's oldest rock must equal Earth's age.", "Thinking decay rates change with time."],
            examinerNote: "B1 for recycling / destruction of early crust.",
          },
        },
        {
          id: "ess9-u1-earth-formation-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Earth formed $4.54$ billion years ago. The oldest known zircon crystals from Earth formed $4.40$ billion years ago.\n\nCalculate how many million years after Earth formed the oldest zircon crystals formed.",
          response: { type: "numeric", parts: [{ label: "Time difference", answer: 140, tolerance: 1, unit: "million years" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time differences", statement: "Time between events = older age minus younger age." },
            ],
            steps: [
              { reasoning: "Subtract the age of the zircons from the age of Earth.", working: "4.54-4.40=0.14\\text{ billion years}", marks: 1, markCode: "M" },
              { reasoning: "Convert to millions of years ($1\\text{ billion}=1000\\text{ million}$).", working: "0.14\\times1000=140\\text{ million years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$140$ million years",
            commonErrors: ["Adding the two ages.", "Giving 0.14 without converting to million years."],
            examinerNote: "M1 for 4.54 - 4.40. A1 for 140 million years. Allow $1.4\\times10^{8}$ years.",
          },
        },
        {
          id: "ess9-u1-earth-formation-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student says: 'The oldest rock on Earth is 4.0 billion years old, so that must be the age of Earth.'\n\nUse evidence to evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimum age", statement: "Surviving rocks give only a minimum age for Earth." },
              { kind: "principle", name: "Meteorite ages", statement: "Meteorites preserve the age of the solar system, about 4.57 billion years." },
            ],
            steps: [
              { reasoning: "Claim: the claim is incorrect; the oldest rock only gives a minimum age.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: zircon crystals are 4.4 billion years old, older than the oldest rock.", marks: 1, markCode: "B" },
              { reasoning: "Evidence: meteorites and the lunar highlands date to about 4.4 to 4.57 billion years.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: plate tectonics and erosion destroyed Earth's earliest rocks, while meteorites and the Moon were geologically inactive and preserve earlier history, so Earth is about 4.54 billion years old.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is incorrect: older zircons (4.4 billion years), meteorites (4.57 billion years) and lunar rocks show that Earth is about 4.54 billion years old; Earth's earliest rocks were recycled.",
            commonErrors: ["Agreeing with the claim.", "Giving evidence without reasoning for why Earth's rocks are missing."],
            examinerNote: "R1 for rejecting the claim. B1 for zircons. B1 for meteorites or lunar rock. R1 for plate tectonics / erosion destroying the early rocks. Allow 4.5 billion years.",
          },
        },
        {
          id: "ess9-u1-earth-formation-evidence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A meteorite sample contains one atom of uranium-238 for every one atom of lead-206, which is its decay product. The half-life of uranium-238 is $4.47$ billion years. The accepted age of the solar system is $4.57$ billion years.",
          parts: [
            { label: "a", prompt: "Explain why scientists date meteorites to find the age of the solar system rather than only using Earth rocks.", marks: 2 },
            { label: "b", prompt: "Calculate the age of the meteorite from the data above, in billions of years.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage difference between your answer to (b) and the accepted age, as a percentage of the accepted age. Give your answer to 2 significant figures.", marks: 2 },
            { label: "d", prompt: "Apollo astronauts brought back lunar highland rocks that are about 4.4 billion years old. Explain why lunar rocks are valuable evidence for the early history of Earth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Age from half-lives", statement: "A parent : daughter ratio of $1:1$ means one half-life has passed." },
              { kind: "formula", name: "Percentage difference", statement: "$\\dfrac{|\\text{measured}-\\text{accepted}|}{\\text{accepted}}\\times100$" },
              { kind: "principle", name: "Preserved rocks", statement: "Bodies without plate tectonics or an active water cycle preserve ancient rocks." },
            ],
            steps: [
              { part: "a", reasoning: "Earth's early rocks have been recycled by plate tectonics and eroded, so they are younger than Earth.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Meteorites formed with the solar system and have stayed unchanged, so they preserve its original age.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Equal numbers of parent and daughter atoms means half has decayed: one half-life.", working: "n=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply by the half-life.", working: "\\text{age}=1\\times4.47=4.47\\text{ billion years}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the difference as a fraction of the accepted age.", working: "\\frac{4.57-4.47}{4.57}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 2 significant figures.", working: "=2.2\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The Moon has no plate tectonics, liquid water or thick atmosphere, so its rocks are rarely destroyed or recycled.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The 4.4 billion year age fits close to the age of meteorites and Earth's oldest zircons, so it is consistent with a solar system and an Earth formed about 4.5 billion years ago.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Lunar rocks suggest that the Moon formed early, supporting the idea of a giant impact on the young Earth.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Earth's early rocks were recycled; meteorites preserve the solar system's age (b) $4.47$ billion years (c) $2.2\\%$ (d) Lunar rocks are preserved and agree with meteorites and zircons, showing that Earth and the Moon formed about 4.5 billion years ago.",
            commonErrors: ["In (b) using 2 half-lives because there are two kinds of atoms.", "In (c) dividing by 4.47 instead of by the accepted age."],
            examinerNote: "(b) Allow 4.5. (c) Allow ecf from (b); 2.19 rounds to 2.2. (d) Allow reference to the giant impact origin of the Moon. Ignore references to the Moon being made of Earth rock unless linked to the giant impact.",
          },
        },
      ],
    },
  ],
};
