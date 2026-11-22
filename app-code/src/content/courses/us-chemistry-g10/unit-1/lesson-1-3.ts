import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "chem10-u1-lesson-1-3",
  code: "1-3",
  title: "Nuclear Chemistry",
  goal: "I CAN balance nuclear equations for alpha, beta and gamma decay, compare fission and fusion, and use half-life to calculate how much of a radioactive sample remains.",
  standards: ["HS-PS1-8", "SEP: Developing and Using Models", "CCC: Energy and Matter"],
  vocabulary: [
    { term: "Radioactive decay", definition: "The spontaneous change of an unstable nucleus into a more stable one, releasing radiation." },
    { term: "Alpha particle", definition: "A helium-4 nucleus, ${}^{4}_{2}\\text{He}$, emitted in alpha decay." },
    { term: "Beta particle", definition: "A high-speed electron, ${}^{0}_{-1}e$, emitted when a neutron changes into a proton." },
    { term: "Gamma ray", definition: "High-energy electromagnetic radiation with no mass or charge, often emitted after alpha or beta decay." },
    { term: "Nuclear fission", definition: "The splitting of a large nucleus into smaller nuclei, releasing energy and neutrons." },
    { term: "Nuclear fusion", definition: "The joining of small nuclei to form a larger nucleus, releasing energy." },
    { term: "Half-life", definition: "The time it takes for half of the nuclei in a radioactive sample to decay." },
  ],
  concepts: [
    {
      id: "chem10-u1-nuclear-decay",
      title: "Alpha, beta and gamma decay and nuclear equations",
      skill: "Identify types of radiation and balance nuclear equations by conserving mass number and atomic number.",
      lesson: {
        sections: [
          {
            heading: "Types of radioactive decay",
            body: "Nuclei with too many protons, or with an unsuitable neutron-to-proton ratio, are unstable and decay.\n\n- **Alpha decay** emits ${}^{4}_{2}\\text{He}$. The nucleus loses 2 protons and 2 neutrons: mass number falls by 4, atomic number by 2.\n- **Beta decay** (beta-minus) emits an electron ${}^{0}_{-1}e$ as a neutron becomes a proton: mass number is unchanged, atomic number rises by 1.\n- **Gamma emission** releases energy only (${}^{0}_{0}\\gamma$): no change in $A$ or $Z$.\n\nAlpha particles are stopped by paper or skin but are very harmful if the source is swallowed. Beta particles pass through paper but are stopped by thin aluminum. Gamma rays are the most penetrating and need thick lead or concrete.",
          },
          {
            heading: "Balancing nuclear equations",
            body: "In every nuclear equation, **total mass number** and **total atomic number** must be equal on both sides.\n\nExample: uranium-238 undergoes alpha decay.\n\n$${}^{238}_{92}\\text{U} \\rightarrow {}^{234}_{90}\\text{Th} + {}^{4}_{2}\\text{He}$$\n\nCheck: $238 = 234 + 4$ and $92 = 90 + 2$. To find an unknown product, subtract: the missing mass number is the parent $A$ minus all known $A$ values, and likewise for $Z$. The element symbol comes from the atomic number $Z$.",
          },
        ],
        keyFormulas: [
          { name: "Alpha decay", statement: "$A \\rightarrow A - 4$, $Z \\rightarrow Z - 2$" },
          { name: "Beta decay", statement: "$A \\rightarrow A$, $Z \\rightarrow Z + 1$" },
          { name: "Conservation", statement: "sum of $A$ and sum of $Z$ equal on both sides" },
        ],
        workedExample: {
          problem: "Carbon-14 undergoes beta decay. Write the balanced nuclear equation.",
          solution: "Carbon has $Z = 6$. Beta decay keeps $A = 14$ and raises $Z$ to 7, which is nitrogen. ${}^{14}_{6}\\text{C} \\rightarrow {}^{14}_{7}\\text{N} + {}^{0}_{-1}e$. Check: $14 = 14 + 0$ and $6 = 7 + (-1)$.",
        },
      },
      questions: [
        {
          id: "chem10-u1-nuclear-decay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Radium-226 (${}^{226}_{88}\\text{Ra}$) undergoes alpha decay. Which nuclide is formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "${}^{226}_{89}\\text{Ac}$" },
              { id: "b", text: "${}^{222}_{88}\\text{Ra}$" },
              { id: "c", text: "${}^{222}_{86}\\text{Rn}$" },
              { id: "d", text: "${}^{230}_{90}\\text{Th}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Alpha decay", statement: "Alpha emission lowers $A$ by 4 and $Z$ by 2." },
            ],
            steps: [
              { reasoning: "Subtract 4 from the mass number and 2 from the atomic number; $Z = 86$ is radon.", working: "226 - 4 = 222,\\quad 88 - 2 = 86", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** ${}^{222}_{86}\\text{Rn}$",
            commonErrors: ["Choosing (b), which is the product of beta decay.", "Choosing (c), adding instead of subtracting.", "Choosing (d), which changes only the mass number."],
            examinerNote: "B1 for radon-222.",
          },
        },
        {
          id: "chem10-u1-nuclear-decay-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Cobalt-60 (${}^{60}_{27}\\text{Co}$) decays by beta emission. Write the balanced nuclear equation. The element with atomic number 28 is nickel (Ni).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Beta decay", statement: "Beta emission leaves $A$ unchanged and raises $Z$ by 1." },
              { kind: "law", name: "Conservation", statement: "Mass number and atomic number are conserved." },
            ],
            steps: [
              { reasoning: "The product has the same mass number, 60, and atomic number 28 (nickel).", marks: 1, markCode: "B" },
              { reasoning: "The beta particle is written ${}^{0}_{-1}e$.", marks: 1, markCode: "B" },
              { reasoning: "Write the full equation and check: $60 = 60 + 0$ and $27 = 28 + (-1)$.", working: "{}^{60}_{27}\\text{Co} \\rightarrow {}^{60}_{28}\\text{Ni} + {}^{0}_{-1}e", marks: 1, markCode: "A" },
            ],
            finalAnswer: "${}^{60}_{27}\\text{Co} \\rightarrow {}^{60}_{28}\\text{Ni} + {}^{0}_{-1}e$",
            commonErrors: ["Writing ${}^{60}_{26}\\text{Fe}$ by lowering the atomic number.", "Leaving out the beta particle so the charge is unbalanced."],
            examinerNote: "B1 Ni-60 with correct numbers. B1 beta particle with $A = 0$, $Z = -1$. A1 balanced equation. Allow $\\beta^-$ for the electron.",
          },
        },
        {
          id: "chem10-u1-nuclear-decay-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A thorium-232 nucleus (${}^{232}_{90}\\text{Th}$) undergoes one alpha decay followed by two beta decays.\n\nFind the mass number and atomic number of the final nuclide.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number of final nuclide", answer: 228 },
              { label: "Atomic number of final nuclide", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Alpha decay", statement: "$A$ falls by 4 and $Z$ by 2." },
              { kind: "law", name: "Beta decay", statement: "$A$ is unchanged and $Z$ rises by 1." },
            ],
            steps: [
              { reasoning: "After alpha decay: $232 - 4 = 228$ and $90 - 2 = 88$ (radium-228).", working: "{}^{232}_{90}\\text{Th} \\rightarrow {}^{228}_{88}\\text{Ra} + {}^{4}_{2}\\text{He}", marks: 1, markCode: "M" },
              { reasoning: "Each beta decay raises $Z$ by 1 with no change in $A$; two beta decays raise $Z$ by 2.", working: "88 + 2 = 90", marks: 1, markCode: "M" },
              { reasoning: "The mass number stays at 228.", working: "A = 228", marks: 1, markCode: "A" },
              { reasoning: "The final nuclide is thorium-228 (an isotope of the starting element).", working: "{}^{228}_{90}\\text{Th}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass number 228, atomic number 90 (${}^{228}_{90}\\text{Th}$)",
            commonErrors: ["Subtracting 4 for every decay.", "Lowering $Z$ for beta decay."],
            examinerNote: "M1 alpha step. M1 beta steps applied twice. A1 for 228. A1 for 90.",
          },
        },
        {
          id: "chem10-u1-nuclear-decay-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Polonium-210 is an alpha emitter. It is formed from bismuth-210 (${}^{210}_{83}\\text{Bi}$) by beta decay, and it decays to a stable isotope of lead (atomic number 82).",
          parts: [
            { label: "a", prompt: "Write the nuclear equation for the beta decay of ${}^{210}_{83}\\text{Bi}$ to polonium-210.", marks: 2 },
            { label: "b", prompt: "Write the nuclear equation for the alpha decay of polonium-210 and state the mass number of the lead isotope formed.", marks: 3 },
            { label: "c", prompt: "Compare the penetrating power of alpha, beta and gamma radiation, naming a material that stops each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation", statement: "Mass number and atomic number are conserved in nuclear reactions." },
              { kind: "property", name: "Penetrating power", statement: "Gamma > beta > alpha in penetrating power." },
            ],
            steps: [
              { part: "a", reasoning: "Beta decay raises $Z$ from 83 to 84 (polonium) with $A$ unchanged.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Write the equation with the beta particle.", working: "{}^{210}_{83}\\text{Bi} \\rightarrow {}^{210}_{84}\\text{Po} + {}^{0}_{-1}e", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alpha decay: $A$ drops by 4 ($210 - 4 = 206$) and $Z$ by 2 ($84 - 2 = 82$, lead).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the balanced equation.", working: "{}^{210}_{84}\\text{Po} \\rightarrow {}^{206}_{82}\\text{Pb} + {}^{4}_{2}\\text{He}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The lead isotope has mass number 206.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alpha is least penetrating and is stopped by paper or skin.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Beta is more penetrating and is stopped by a few millimeters of aluminum.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Gamma is the most penetrating and needs thick lead or concrete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) ${}^{210}_{83}\\text{Bi} \\rightarrow {}^{210}_{84}\\text{Po} + {}^{0}_{-1}e$ (b) ${}^{210}_{84}\\text{Po} \\rightarrow {}^{206}_{82}\\text{Pb} + {}^{4}_{2}\\text{He}$; mass number 206 (c) alpha: paper; beta: aluminum; gamma: lead or thick concrete.",
            commonErrors: ["In (a) writing the atomic number of Po as 82.", "In (c) saying gamma is stopped by paper."],
            examinerNote: "(b) The third mark is for 206; allow if shown in the equation. (c) Allow 'a few cm of lead' or 'concrete' for gamma; allow 'skin' for alpha.",
          },
        },
      ],
    },
    {
      id: "chem10-u1-fission-fusion-half-life",
      title: "Fission, fusion, half-life and applications",
      skill: "Compare fission and fusion, and calculate the amount of a radioactive isotope remaining after a given time.",
      lesson: {
        sections: [
          {
            heading: "Fission and fusion",
            body: "In **fission**, a heavy nucleus (such as uranium-235) absorbs a neutron and splits into two smaller nuclei plus extra neutrons and a large amount of energy:\n\n$${}^{235}_{92}\\text{U} + {}^{1}_{0}n \\rightarrow {}^{141}_{56}\\text{Ba} + {}^{92}_{36}\\text{Kr} + 3\\,{}^{1}_{0}n$$\n\nThe released neutrons can split more nuclei, a **chain reaction**. Reactors control it with control rods that absorb neutrons; bombs do not. In **fusion**, light nuclei such as hydrogen isotopes join to form helium, as in the Sun, at temperatures of millions of degrees. Fusion releases more energy per gram than fission and makes little long-lived waste, but is hard to sustain on Earth. The tiny loss of mass becomes energy ($E = mc^2$).",
          },
          {
            heading: "Half-life",
            body: "A radioactive sample decays at a predictable rate. The **half-life** is the time for half of the nuclei to decay. After $n$ half-lives:\n\n$$\\text{amount remaining}=\\text{initial amount}\\times\\left(\\tfrac{1}{2}\\right)^{n},\\qquad n=\\frac{\\text{elapsed time}}{\\text{half-life}}$$\n\nFor example, iodine-131 (half-life 8.0 days) used in thyroid treatment: 16 days is 2 half-lives, so $\\frac14$ remains. Applications depend on half-life: carbon-14 (5730 years) dates organic remains; technetium-99m (6.0 hours) is a medical tracer that must decay quickly; cobalt-60 sterilizes food and equipment; smoke detectors use americium-241.",
          },
        ],
        keyFormulas: [
          { name: "Half-lives elapsed", statement: "$n=\\dfrac{\\text{time}}{t_{1/2}}$" },
          { name: "Amount remaining", statement: "$N=N_0\\left(\\tfrac{1}{2}\\right)^{n}$" },
          { name: "Mass-energy", statement: "$E=mc^2$" },
        ],
        workedExample: {
          problem: "A 64.0 g sample of a radioactive isotope has a half-life of 3.0 hours. Calculate the mass remaining after 12.0 hours.",
          solution: "Half-lives: $n=\\frac{12.0}{3.0}=4$. Mass remaining: $64.0\\times\\left(\\frac12\\right)^4=64.0\\times\\frac1{16}=4.0\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "chem10-u1-fission-fusion-half-life-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes nuclear fusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two atoms share electrons to form a bond." },
              { id: "b", text: "An unstable nucleus emits an electron." },
              { id: "c", text: "Two light nuclei combine to form a heavier nucleus." },
              { id: "d", text: "A heavy nucleus splits into two smaller nuclei." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fusion", statement: "Fusion is the joining of light nuclei to form a heavier nucleus, releasing energy." },
            ],
            steps: [
              { reasoning: "Fusion means joining nuclei, as in hydrogen forming helium in the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Two light nuclei combine to form a heavier nucleus.",
            commonErrors: ["Choosing (a), which describes fission.", "Choosing (c), which describes beta decay."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u1-fission-fusion-half-life-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Iodine-131 has a half-life of 8.0 days. A hospital receives a sample containing 80.0 mg of iodine-131.\n\nCalculate the mass of iodine-131 remaining after 24.0 days.",
          response: { type: "numeric", parts: [{ label: "Mass remaining", answer: 10, tolerance: 0.05, unit: "mg" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Half-lives elapsed", statement: "$n=\\dfrac{\\text{time}}{t_{1/2}}$" },
              { kind: "formula", name: "Amount remaining", statement: "$N=N_0\\left(\\tfrac12\\right)^{n}$" },
            ],
            steps: [
              { reasoning: "Find the number of half-lives.", working: "n=\\frac{24.0}{8.0}=3", marks: 1, markCode: "M" },
              { reasoning: "Halve the mass three times: 80.0, 40.0, 20.0, 10.0.", working: "80.0\\times\\left(\\tfrac12\\right)^3=80.0\\times\\tfrac18", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=10.0\\text{ mg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10.0\\text{ mg}$",
            commonErrors: ["Dividing 80.0 by 3 instead of halving three times.", "Using 24.0 days as one half-life."],
            examinerNote: "M1 for 3 half-lives. M1 for halving three times / multiplying by 1/8. A1 for 10.0 mg.",
          },
        },
        {
          id: "chem10-u1-fission-fusion-half-life-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Technetium-99m is a medical tracer with a half-life of 6.0 hours. A dose contains 160 mg of the isotope.\n\nCalculate how long it takes for the amount to fall to 5.0 mg.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 30, tolerance: 0.1, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount remaining", statement: "$N=N_0\\left(\\tfrac12\\right)^{n}$" },
            ],
            steps: [
              { reasoning: "Find the ratio $\\frac{160}{5.0}=32=2^5$, so $n=5$ half-lives (160, 80, 40, 20, 10, 5).", working: "\\left(\\tfrac12\\right)^n=\\frac{5.0}{160}=\\frac1{32}\\Rightarrow n=5", marks: 2, markCode: "M" },
              { reasoning: "Multiply by the half-life.", working: "5\\times6.0=30\\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\text{ hours}$",
            commonErrors: ["Stopping after 4 half-lives (10 mg).", "Dividing 160 by 5.0 and treating 32 as the number of half-lives."],
            examinerNote: "M2 for finding 5 half-lives (M1 for 1/32 or 32). A1 for 30 hours. Award full marks for the correct answer only if method is shown, otherwise allow B3.",
          },
        },
        {
          id: "chem10-u1-fission-fusion-half-life-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a nuclear reactor, uranium-235 absorbs a neutron and undergoes fission:\n\n$${}^{235}_{92}\\text{U} + {}^{1}_{0}n \\rightarrow {}^{141}_{56}\\text{Ba} + {}^{92}_{36}\\text{Kr} + x\\,{}^{1}_{0}n$$\n\nThe waste contains strontium-90, which has a half-life of 28.8 years.",
          parts: [
            { label: "a", prompt: "Calculate the value of $x$, the number of neutrons released.", marks: 2 },
            { label: "b", prompt: "Explain how the products of this reaction can cause a chain reaction, and how a reactor controls it.", marks: 2 },
            { label: "c", prompt: "State two differences between nuclear fission and nuclear fusion.", marks: 2 },
            { label: "d", prompt: "Calculate the percentage of the strontium-90 that remains after 86.4 years.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation", statement: "Mass number is conserved in a nuclear equation." },
              { kind: "formula", name: "Amount remaining", statement: "$N=N_0\\left(\\tfrac12\\right)^{n}$" },
              { kind: "definition", name: "Chain reaction", statement: "Neutrons released by one fission trigger further fissions." },
            ],
            steps: [
              { part: "a", reasoning: "Balance mass numbers: left $235 + 1 = 236$; right $141 + 92 + x = 233 + x$.", working: "236 = 233 + x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve (atomic numbers check: $92 = 56 + 36$).", working: "x = 3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The released neutrons strike other uranium-235 nuclei, causing further fissions that release more neutrons.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Control rods absorb neutrons to limit the reaction rate.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Fission splits a heavy nucleus; fusion joins light nuclei.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any second difference: fusion needs extremely high temperatures; fission produces long-lived radioactive waste; fusion releases more energy per gram.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Number of half-lives.", working: "n=\\frac{86.4}{28.8}=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Fraction remaining is one eighth.", working: "\\left(\\tfrac12\\right)^3=\\tfrac18=12.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x = 3$ (b) Released neutrons cause more fissions; control rods absorb neutrons (c) Fission splits heavy nuclei, fusion joins light nuclei; fusion needs far higher temperatures (d) $12.5\\%$",
            commonErrors: ["In (a) forgetting the neutron on the left, giving $x = 2$.", "In (d) giving 33% by dividing by 3."],
            examinerNote: "(a) Allow ecf for 2 only if the left side is stated as 235. (c) Any two valid differences; do not accept two statements about the same property. (d) Allow 1/8 or 0.125.",
          },
        },
      ],
    },
  ],
};
