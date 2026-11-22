import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eph11-u3-lesson-3-1",
  code: "3-1",
  title: "Atomic Structure, Radioactive Decay and Half-life",
  goal: "I CAN describe atomic structure and isotopes, compare alpha, beta and gamma radiation, balance nuclear equations and use half-life.",
  standards: ["4PH1 7.1", "4PH1 7.4", "4PH1 7.7", "4PH1 7.9", "4PH1 7.11"],
  vocabulary: [
    { term: "Isotopes", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons, so the same atomic number but different mass numbers." },
    { term: "Ionising radiation", definition: "Radiation that can remove electrons from atoms, producing ions. Alpha, beta and gamma radiation are all ionising." },
    { term: "Background radiation", definition: "Low-level radiation that is always present, from rocks (such as radon gas), cosmic rays, food and medical sources." },
    { term: "Activity", definition: "The number of nuclei of a radioactive source that decay each second, measured in becquerel ($\\text{Bq}$)." },
    { term: "Half-life", definition: "The time taken for the activity of a source (or the number of undecayed nuclei) to fall to half of its starting value." },
    { term: "Alpha particle", definition: "A helium nucleus, $^{4}_{2}\\alpha$, made of 2 protons and 2 neutrons." },
    { term: "Beta particle", definition: "A fast-moving electron, $^{0}_{-1}\\beta$, emitted from the nucleus when a neutron changes into a proton." },
  ],
  concepts: [
    {
      id: "eph11-u3-atomic-structure-radiation",
      title: "Atomic structure, isotopes and alpha, beta, gamma",
      skill: "Use atomic and mass numbers, define isotopes, and compare the nature, penetration and ionising power of alpha, beta and gamma radiation.",
      lesson: {
        sections: [
          {
            heading: "The structure of the atom",
            body: "An atom has a tiny, dense, positively charged **nucleus** containing **protons** and **neutrons**, surrounded by **electrons**.\n\n| Particle | Relative mass | Relative charge |\n| --- | --- | --- |\n| proton | 1 | $+1$ |\n| neutron | 1 | $0$ |\n| electron | about $\\frac{1}{1840}$ | $-1$ |\n\nThe **atomic number** $Z$ is the number of protons. The **mass number** $A$ is the number of protons plus neutrons. A neutral atom has equal numbers of protons and electrons. The number of neutrons is $A - Z$.\n\n**Isotopes** have the same $Z$ but different $A$. For example $^{12}_{6}\\text{C}$ and $^{14}_{6}\\text{C}$ both have 6 protons, but have 6 and 8 neutrons. Some isotopes have unstable nuclei, which emit radiation to become more stable. This is **radioactive decay**, and it is random and spontaneous.",
          },
          {
            heading: "Alpha, beta and gamma radiation",
            body: "| Radiation | What it is | Stopped by | Ionising power |\n| --- | --- | --- | --- |\n| alpha ($\\alpha$) | 2 protons + 2 neutrons (helium nucleus), charge $+2$ | paper, or a few centimetres of air | strongest |\n| beta ($\\beta$) | fast electron from the nucleus, charge $-1$ | a few millimetres of aluminium | medium |\n| gamma ($\\gamma$) | electromagnetic wave from the nucleus, no charge | thick lead or several metres of concrete (reduced, never completely stopped) | weakest |\n\nThe more strongly a radiation ionises, the less far it penetrates, because it loses its energy in fewer collisions. All three are detected with a **Geiger-Muller (GM) tube** and counter, which measures the **count rate** (counts per minute or second).\n\n**Background radiation** must be measured first with the source removed and subtracted from every reading to give the **corrected count rate**.",
          },
        ],
        keyFormulas: [
          { name: "Neutron number", statement: "$\\text{neutrons} = A - Z$" },
          { name: "Isotopes", statement: "same $Z$, different $A$" },
          { name: "Corrected count rate", statement: "$\\text{corrected} = \\text{measured} - \\text{background}$" },
        ],
        workedExample: {
          problem: "State the numbers of protons, neutrons and electrons in a neutral atom of $^{14}_{6}\\text{C}$.",
          solution: "Protons = atomic number = **6**. Neutrons = $A - Z = 14 - 6 = $ **8**. A neutral atom has as many electrons as protons, so **6** electrons.",
        },
      },
      questions: [
        {
          id: "eph11-u3-atomic-structure-radiation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of radiation is the most strongly ionising but the least penetrating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alpha" },
              { id: "b", text: "They are all equally ionising" },
              { id: "c", text: "Gamma" },
              { id: "d", text: "Beta" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ionising power", statement: "Alpha is the most ionising and the least penetrating; gamma is the least ionising and the most penetrating." },
            ],
            steps: [
              { reasoning: "Alpha particles are large and doubly charged, so they ionise strongly and lose their energy in a few centimetres of air.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alpha",
            commonErrors: ["Choosing gamma because it has the most energy; it penetrates most but ionises least."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "eph11-u3-atomic-structure-radiation-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "A neutral atom of uranium-235 is written $^{235}_{92}\\text{U}$. Give the number of protons, neutrons and electrons in the atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "Protons", answer: 92 },
              { label: "Neutrons", answer: 143 },
              { label: "Electrons", answer: 92 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic and mass number", statement: "Atomic number $Z$ = number of protons. Mass number $A$ = protons + neutrons." },
              { kind: "property", name: "Neutral atom", statement: "A neutral atom has equal numbers of protons and electrons." },
            ],
            steps: [
              { reasoning: "The number of protons is the atomic number, the lower number.", working: "92", marks: 1, markCode: "B" },
              { reasoning: "Neutrons are the mass number minus the atomic number.", working: "235 - 92", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "143", marks: 1, markCode: "A" },
              { reasoning: "The atom is neutral, so the electrons balance the protons.", working: "92", marks: 1, markCode: "B" },
            ],
            finalAnswer: "92 protons, 143 neutrons, 92 electrons",
            commonErrors: ["Giving 235 neutrons (using the mass number).", "Giving 143 electrons by confusing neutrons and electrons."],
            examinerNote: "Allow ecf for the electron mark only if equal to the protons stated.",
          },
        },
        {
          id: "eph11-u3-atomic-structure-radiation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare alpha, beta and gamma radiation in terms of what stops each of them and how strongly each ionises.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Penetration", statement: "Alpha is stopped by paper, beta by a few millimetres of aluminium, gamma is reduced by thick lead or concrete." },
              { kind: "property", name: "Ionisation", statement: "Ionising power decreases from alpha to beta to gamma." },
            ],
            steps: [
              { reasoning: "Alpha is stopped by paper (or a few centimetres of air).", marks: 1, markCode: "B" },
              { reasoning: "Beta is stopped by a few millimetres of aluminium (or thin metal).", marks: 1, markCode: "B" },
              { reasoning: "Gamma is only reduced by thick lead or concrete.", marks: 1, markCode: "B" },
              { reasoning: "Alpha is the most ionising, beta is intermediate and gamma is the least ionising.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Alpha: paper, most ionising. Beta: thin aluminium, medium. Gamma: thick lead or concrete, least ionising.",
            commonErrors: ["Saying that gamma is 'stopped' by lead; it is only reduced in intensity.", "Reversing the order of ionising power."],
            examinerNote: "Allow 'a few cm of air' for alpha. Reject 'thin lead' for gamma.",
          },
        },
        {
          id: "eph11-u3-atomic-structure-radiation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student places a radioactive source at a fixed distance from a Geiger-Muller (GM) tube. The background count rate is $20$ counts per minute. The student measures the count rate with different absorbers between the source and the tube.\n\n| Absorber | Count rate (counts per minute) |\n| --- | --- |\n| none | 860 |\n| sheet of paper | 858 |\n| $3\\text{ mm}$ of aluminium | 140 |\n| $5\\text{ cm}$ of lead | 24 |",
          parts: [
            { label: "a", prompt: "Name the instrument that is used with the GM tube to display the count rate.", marks: 1 },
            { label: "b", prompt: "Calculate the corrected count rate with no absorber.", marks: 2 },
            { label: "c", prompt: "Use the results to state which types of radiation the source emits. Explain your answer.", marks: 3 },
            { label: "d", prompt: "Calculate the percentage of the corrected count rate removed by the $3\\text{ mm}$ of aluminium. Give your answer to 2 significant figures.", marks: 2 },
            { label: "e", prompt: "State one safety precaution when handling the source.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Corrected count rate", statement: "$\\text{corrected} = \\text{measured} - \\text{background}$" },
              { kind: "property", name: "Penetration", statement: "Alpha is stopped by paper, beta by thin aluminium, gamma is reduced only by thick lead." },
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{change}}{\\text{original}} \\times 100$" },
            ],
            steps: [
              { part: "a", reasoning: "The tube is connected to a counter (a ratemeter or scaler).", working: "\\text{counter / ratemeter}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the background count rate.", working: "860 - 20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "840\\text{ counts per minute}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Paper makes almost no difference (860 to 858), so there is no alpha emitted.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Aluminium cuts the count rate sharply (860 to 140), so the source emits beta.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The count rate stays well above background with aluminium, and only thick lead brings it near background, so gamma is also emitted.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "With aluminium the corrected rate is $140 - 20 = 120$, so $840 - 120 = 720$ is removed. Express this as a percentage of 840.", working: "\\frac{720}{840} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and round to 2 significant figures.", working: "85.7\\% \\approx 86\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "For example: handle the source with tongs, keep it pointing away from the body, or store it in a lead-lined box when not in use.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) counter or ratemeter (b) $840$ counts per minute (c) beta and gamma, no alpha (d) $86\\%$ (e) use tongs, or store in a lead-lined box",
            commonErrors: ["Forgetting to subtract the background in (d) and getting $\\frac{720}{860}$.", "Concluding that the source emits alpha because the count rate falls with the lead."],
            examinerNote: "In (c) all three marks need a reason linked to the data. In (d) allow ecf from (b).",
          },
        },
      ],
    },
    {
      id: "eph11-u3-nuclear-equations-half-life",
      title: "Nuclear equations and half-life",
      skill: "Complete balanced nuclear equations for alpha and beta decay and calculate remaining activity using half-life.",
      lesson: {
        sections: [
          {
            heading: "Balancing nuclear equations",
            body: "In a nuclear equation the total **mass number** and the total **atomic number** must each be the same on both sides.\n\n**Alpha decay** emits $^{4}_{2}\\alpha$. The mass number falls by 4 and the atomic number falls by 2:\n\n$^{226}_{88}\\text{Ra} \\rightarrow ^{222}_{86}\\text{Rn} + ^{4}_{2}\\alpha$\n\n**Beta decay** emits $^{0}_{-1}\\beta$ (a neutron becomes a proton). The mass number is unchanged and the atomic number rises by 1:\n\n$^{14}_{6}\\text{C} \\rightarrow ^{14}_{7}\\text{N} + ^{0}_{-1}\\beta$\n\n**Gamma emission** changes neither the mass number nor the atomic number; the nucleus just loses energy.",
          },
          {
            heading: "Half-life",
            body: "Decay is random: we cannot say when one nucleus will decay, but for a large number of nuclei the **half-life** is fixed. It is the time for the activity (or the number of undecayed nuclei) to fall to half.\n\nAfter each half-life the activity halves: $A_0 \\rightarrow \\frac{A_0}{2} \\rightarrow \\frac{A_0}{4} \\rightarrow \\frac{A_0}{8}$.\n\nTo calculate: work out how many half-lives $n$ have passed ($n = \\frac{\\text{time}}{\\text{half-life}}$), then halve the activity $n$ times, so the final activity is $\\frac{A_0}{2^n}$.\n\nThe half-life is read from a decay curve by finding the time for the value to fall to half. It cannot be changed by heating, pressure or chemical reactions, because decay depends only on the nucleus.",
          },
        ],
        keyFormulas: [
          { name: "Alpha decay", statement: "$^{A}_{Z}\\text{X} \\rightarrow ^{A-4}_{Z-2}\\text{Y} + ^{4}_{2}\\alpha$" },
          { name: "Beta decay", statement: "$^{A}_{Z}\\text{X} \\rightarrow ^{A}_{Z+1}\\text{Y} + ^{0}_{-1}\\beta$" },
          { name: "Activity after $n$ half-lives", statement: "$A = \\frac{A_0}{2^n}$, where $n = \\frac{\\text{time}}{\\text{half-life}}$" },
        ],
        workedExample: {
          problem: "A source has an activity of $640\\text{ Bq}$ and a half-life of 3 days. Calculate its activity after 9 days.",
          solution: "Number of half-lives $= \\frac{9}{3} = 3$. Activity: $640 \\rightarrow 320 \\rightarrow 160 \\rightarrow 80$. So the activity is **80 Bq**. Check: $\\frac{640}{2^3} = \\frac{640}{8} = 80$.",
        },
      },
      questions: [
        {
          id: "eph11-u3-nuclear-equations-half-life-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A nucleus emits an alpha particle. How do the mass number and atomic number of the nucleus change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass number decreases by 4 and atomic number decreases by 2" },
              { id: "b", text: "Mass number decreases by 2 and atomic number decreases by 4" },
              { id: "c", text: "Mass number decreases by 4 and atomic number decreases by 4" },
              { id: "d", text: "Mass number is unchanged and atomic number increases by 1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Balancing nuclear equations", statement: "Alpha emission removes $^{4}_{2}\\alpha$, so $A$ falls by 4 and $Z$ falls by 2." },
            ],
            steps: [
              { reasoning: "An alpha particle has mass number 4 and atomic number 2, so the nucleus loses 4 from $A$ and 2 from $Z$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (c), which describes beta decay.", "Choosing (a) by losing 4 from both numbers."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u3-nuclear-equations-half-life-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Carbon-14 decays by beta emission: $^{14}_{6}\\text{C} \\rightarrow ^{A}_{Z}\\text{N} + ^{0}_{-1}\\beta$. Give the values of $A$ and $Z$ for the nitrogen nucleus.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number A", answer: 14 },
              { label: "Atomic number Z", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Balancing nuclear equations", statement: "Total mass number and total atomic number are the same on both sides." },
            ],
            steps: [
              { reasoning: "The beta particle has mass number 0, so $A + 0 = 14$.", working: "A = 14", marks: 1, markCode: "B" },
              { reasoning: "Atomic numbers must balance: $Z + (-1) = 6$.", working: "Z = 6 + 1 = 7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$A = 14$, $Z = 7$. The equation is $^{14}_{6}\\text{C} \\rightarrow ^{14}_{7}\\text{N} + ^{0}_{-1}\\beta$.",
            commonErrors: ["Giving $Z = 5$ by subtracting 1 instead of adding it.", "Giving $A = 13$ or $A = 10$ as if an alpha particle had been emitted."],
            examinerNote: "B1 for each correct value.",
          },
        },
        {
          id: "eph11-u3-nuclear-equations-half-life-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A radioactive source has a half-life of 6 hours. Its activity is $480\\text{ Bq}$ at the start. Calculate its activity after 24 hours.",
          response: {
            type: "numeric",
            parts: [{ label: "Activity after 24 hours", answer: 30, unit: "Bq" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "The activity halves in each half-life." },
              { kind: "formula", name: "Activity after n half-lives", statement: "$A = \\frac{A_0}{2^n}$" },
            ],
            steps: [
              { reasoning: "Find the number of half-lives in 24 hours.", working: "n = \\frac{24}{6} = 4", marks: 1, markCode: "M" },
              { reasoning: "Halve the activity four times.", working: "480 \\rightarrow 240 \\rightarrow 120 \\rightarrow 60 \\rightarrow 30", marks: 1, markCode: "M" },
              { reasoning: "State the final activity with its unit.", working: "30\\text{ Bq}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\text{ Bq}$",
            commonErrors: ["Dividing 480 by 4 instead of by $2^4 = 16$, giving $120\\text{ Bq}$.", "Halving only once or twice."],
            examinerNote: "A1 cao 30. Allow ecf for the final mark from a wrong number of half-lives.",
          },
        },
        {
          id: "eph11-u3-nuclear-equations-half-life-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "A student measures the corrected count rate from a radioactive sample over time.\n\n| Time (minutes) | Count rate (counts per minute) |\n| --- | --- |\n| 0 | 800 |\n| 20 | 400 |\n| 40 | 200 |\n| 60 | 100 |",
          parts: [
            { label: "a", prompt: "State what is meant by the half-life of a radioactive source.", marks: 2 },
            { label: "b", prompt: "Determine the half-life of the sample.", marks: 2 },
            { label: "c", prompt: "Calculate the count rate that you expect at 100 minutes.", marks: 3 },
            { label: "d", prompt: "Radon-222 decays by alpha emission to an isotope of polonium: $^{222}_{86}\\text{Rn} \\rightarrow ^{A}_{Z}\\text{Po} + ^{4}_{2}\\alpha$. Give the values of $A$ and $Z$.", marks: 2 },
            { label: "e", prompt: "A student heats the sample, hoping to make it decay faster. Explain why this does not change the half-life.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "The time taken for the activity (or the number of undecayed nuclei) to halve." },
              { kind: "formula", name: "Activity after n half-lives", statement: "$A = \\frac{A_0}{2^n}$" },
              { kind: "law", name: "Balancing nuclear equations", statement: "Mass number and atomic number are conserved." },
              { kind: "principle", name: "Random decay", statement: "Radioactive decay is random and spontaneous and is not affected by temperature or chemical state." },
            ],
            steps: [
              { part: "a", reasoning: "It is the time taken.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "For the activity (count rate) of the source, or the number of undecayed nuclei, to fall to half its value.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the time for the count rate to fall from 800 to 400 (half).", working: "20 - 0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the half-life with its unit. The same value comes from 400 to 200 and 200 to 100.", working: "20\\text{ minutes}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Number of half-lives in 100 minutes.", working: "n = \\frac{100}{20} = 5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide the starting count rate by $2^5 = 32$.", working: "\\frac{800}{32}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "25\\text{ counts per minute}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Mass number: $222 = A + 4$.", working: "A = 218", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Atomic number: $86 = Z + 2$.", working: "Z = 84", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Radioactive decay is random and spontaneous.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It depends only on the nucleus, so temperature (or any chemical or physical change) has no effect on the half-life.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) time for activity to halve (b) $20\\text{ minutes}$ (c) $25$ counts per minute (d) $A = 218$, $Z = 84$ (e) decay is random and spontaneous, depending only on the nucleus",
            commonErrors: ["Giving 40 minutes by using 800 to 200.", "Calculating $800 - 5 \\times 400$ or dividing by 5 in (c).", "Giving $A = 226$ or $Z = 88$ by adding the alpha particle instead of subtracting it."],
            examinerNote: "In (c) allow ecf from the half-life in (b). Reject 'half of the atoms' without 'undecayed' or 'activity'.",
          },
        },
      ],
    },
  ],
};
