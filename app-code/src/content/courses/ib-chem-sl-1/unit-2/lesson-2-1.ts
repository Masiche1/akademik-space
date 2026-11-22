import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "chemsl-u2-lesson-2-1",
  code: "2-1",
  title: "Subatomic Particles and Isotopes",
  goal: "I CAN describe the structure of atoms and ions, distinguish isotopes, and calculate relative atomic mass from isotopic abundances.",
  standards: ["Topic 2.1", "Topic 2.4", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Proton", definition: "A positively charged subatomic particle in the nucleus with relative mass $1$ and charge $+1$; its number defines the element." },
    { term: "Neutron", definition: "A neutral subatomic particle in the nucleus with relative mass $1$ and no charge; its number varies between isotopes." },
    { term: "Electron", definition: "A negatively charged subatomic particle orbiting the nucleus with negligible mass and charge $-1$; electrons occupy shells around the nucleus." },
    { term: "Atomic number", definition: "$Z$: the number of protons in the nucleus; equals the number of electrons in a neutral atom and identifies the element." },
    { term: "Mass number", definition: "$A$: the total number of protons and neutrons in the nucleus." },
    { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons, hence different mass numbers." },
  ],
  concepts: [
    {
      id: "chemsl-u2-atomic-structure",
      title: "Atomic structure and ions",
      skill: "Use atomic number $Z$ and mass number $A$ to find the numbers of protons, neutrons and electrons in atoms and ions.",
      lesson: {
        sections: [
          {
            heading: "The nuclear atom",
            body: "An atom consists of a dense nucleus containing protons (charge $+1$, relative mass $1$) and neutrons (charge $0$, relative mass $1$), surrounded by electrons (charge $-1$, negligible mass) arranged in shells. The atomic number $Z$ is the number of protons and is unique to each element. The mass number $A$ is the total of protons plus neutrons, so the number of neutrons is $A-Z$. In a neutral atom the number of electrons equals $Z$.",
          },
          {
            heading: "Ions",
            body: "An ion forms when an atom gains or loses electrons. A positive ion (cation) has fewer electrons than protons — metals typically lose electrons. A negative ion (anion) has more electrons than protons — non-metals typically gain electrons. The number of protons never changes, so the element is unchanged; only the electron count and the charge differ.",
          },
          {
            heading: "Isotopes",
            body: "Isotopes of an element have the same $Z$ but different numbers of neutrons, giving different $A$ values. Isotopes have identical chemical properties (same electron arrangement) but different physical properties such as density. Examples: carbon-12, carbon-13 and carbon-14; hydrogen-1, hydrogen-2 (deuterium) and hydrogen-3 (tritium).",
          },
        ],
        keyFormulas: [
          { name: "Number of neutrons", statement: "$N=A-Z$" },
          { name: "Neutral atom", statement: "$Z=\\text{protons}=\\text{electrons}$" },
          { name: "Ion charge", statement: "$\\text{charge}=\\text{protons}-\\text{electrons}$" },
        ],
        workedExample: {
          problem: "An ion has atomic number $Z=11$ and mass number $A=23$, and carries a charge of $+1$. State the numbers of protons, neutrons and electrons.",
          solution: "Protons $=Z=11$; neutrons $=A-Z=23-11=12$; electrons $=11-1=10$ (charge $+1$ means one electron fewer than protons). The ion is $\\mathrm{Na^+}$.",
        },
      },
      questions: [
        {
          id: "chemsl-u2-atomic-structure-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An atom of chlorine has $Z=17$ and $A=35$. How many neutrons does it contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17$" },
              { id: "b", text: "$52$" },
              { id: "c", text: "$18$" },
              { id: "d", text: "$35$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "$A=Z+N$, so $N=A-Z$." },
            ],
            steps: [
              { reasoning: "Subtract the atomic number from the mass number.", working: "N=35-17", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $18$ neutrons",
            commonErrors: ["Answering $35$ (using $A$ directly).", "Adding $Z+A$ to get $52$."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The oxide ion $\\mathrm{O^{2-}}$ has atomic number $Z=8$. How many electrons does it contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "Charge $=\\text{protons}-\\text{electrons}$, so a $2-$ ion has two more electrons than protons." },
            ],
            steps: [
              { reasoning: "A neutral O atom has 8 electrons; gaining two electrons gives the $2-$ charge.", working: "8+2=10", marks: 1, markCode: "M" },
              { reasoning: "State the electron count.", working: "10\\ \\mathrm{electrons}", marks: 1, markCode: "A" },
              { reasoning: "Confirm: charge $=8-10=-2$.", working: "8-10=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $10$ electrons",
            commonErrors: ["Subtracting to get 6 electrons (that would be $\\mathrm{O^{6+}}$).", "Ignoring the charge and answering 8."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An element X has two isotopes: $^{79}\\mathrm{X}$ (49.0% abundance) and $^{81}\\mathrm{X}$ (51.0% abundance). For each isotope, $Z=35$. Find (a) the number of neutrons in $^{79}\\mathrm{X}$, (b) the number of neutrons in $^{81}\\mathrm{X}$, (c) the number of protons in each isotope.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) neutrons in $^{79}\\mathrm{X}$", answer: 44 },
              { label: "(b) neutrons in $^{81}\\mathrm{X}$", answer: 46 },
              { label: "(c) protons in each isotope", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotopes", statement: "Same $Z$, different $A$; neutrons $=A-Z$." },
            ],
            steps: [
              { reasoning: "Neutrons in the lighter isotope: $79-35=44$.", working: "79-35=44", marks: 1, markCode: "M" },
              { reasoning: "Neutrons in the heavier isotope: $81-35=46$.", working: "81-35=46", marks: 1, markCode: "A" },
              { reasoning: "Protons equal $Z=35$ in both isotopes because they are the same element.", working: "Z=35", marks: 1, markCode: "R" },
              { reasoning: "State that protons are the same for both isotopes.", working: "35\\ \\mathrm{in\\ both}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $44$ (b) $46$ (c) $35$ protons in each isotope",
            commonErrors: ["Using different proton numbers for the two isotopes.", "Subtracting $Z$ from the abundance percentages."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Magnesium has three naturally occurring isotopes: $^{24}\\mathrm{Mg}$ (78.99%), $^{25}\\mathrm{Mg}$ (10.00%) and $^{26}\\mathrm{Mg}$ (11.01%). ($Z=12$)",
          parts: [
            { label: "a", prompt: "State the numbers of protons and neutrons in a neutral atom of $^{25}\\mathrm{Mg}$.", marks: 2 },
            { label: "b", prompt: "State the numbers of protons, neutrons and electrons in the ion $\\mathrm{Mg^{2+}}$ formed from $^{24}\\mathrm{Mg}$.", marks: 2 },
            { label: "c", prompt: "Explain why all three isotopes have identical chemical properties.", marks: 2 },
            { label: "d", prompt: "Predict one physical property that differs between the isotopes and justify your choice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotopes", statement: "Same $Z$ and electron arrangement; different neutron numbers." },
              { kind: "formula", name: "Ion formation", statement: "$\\mathrm{Mg^{2+}}$ has lost two electrons." },
            ],
            steps: [
              { part: "a", reasoning: "Protons equal $Z=12$; neutrons equal $A-Z=25-12=13$.", working: "p=12,\\ n=13", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both values.", working: "12\\ \\mathrm{protons},\\ 13\\ \\mathrm{neutrons}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Protons remain $12$ and neutrons $24-12=12$; the $2+$ charge means two electrons lost, leaving $10$ electrons.", working: "p=12,\\ n=12,\\ e=10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all three particle numbers.", working: "12,\\ 12,\\ 10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chemical properties depend on electron arrangement, which is identical because $Z$ is the same; the nucleus differs only in neutrons.", working: "\\text{same electron arrangement}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Neutrons do not participate in bonding, so reactivity is unchanged.", working: "\\text{neutrons do not affect chemistry}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Mass-dependent physical properties differ, e.g. density or rate of diffusion, because the isotopes have different masses.", working: "\\text{density/diffusion differ}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Accept any valid mass-dependent property with justification.", working: "\\text{heavier isotope diffuses slower}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 protons, 13 neutrons (b) 12 protons, 12 neutrons, 10 electrons (c) identical electron arrangements (d) density/diffusion differ because mass differs",
            commonErrors: ["In (b) keeping 12 electrons (ignoring the $2+$ charge).", "Claiming isotopes have different chemical properties."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A neutral atom of magnesium has $Z=12$ and $A=24$. How many neutrons does it contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$36$" },
              { id: "c", text: "$24$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "$A=Z+N$, so the number of neutrons is $N=A-Z$." },
            ],
            steps: [
              { reasoning: "Subtract the atomic number from the mass number.", working: "N=24-12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to get the neutron count.", working: "N=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $12$ neutrons",
            commonErrors: ["Answering $24$ (using $A$ directly).", "Adding $Z+A$ to get $36$."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which subatomic particle has a charge of $-1$ and a negligible mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proton" },
              { id: "b", text: "Neutron" },
              { id: "c", text: "Alpha particle" },
              { id: "d", text: "Electron" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subatomic particles", statement: "Protons $+1$, neutrons $0$, electrons $-1$ with negligible mass." },
            ],
            steps: [
              { reasoning: "Recall the charge and mass of each particle.", working: "e^-: -1,\\ \\text{negligible mass}", marks: 1, markCode: "M" },
              { reasoning: "Select the particle matching both criteria.", working: "\\text{electron}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Electron",
            commonErrors: ["Choosing the neutron (charge $0$, mass $1$).", "Choosing the alpha particle (charge $+2$, mass $4$)."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many electrons does a neutral calcium atom contain? (Ca: $Z=20$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$22$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$18$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutral atom", statement: "In a neutral atom the number of electrons equals the number of protons, $Z$." },
            ],
            steps: [
              { reasoning: "A neutral atom has equal numbers of protons and electrons.", working: "e^-=Z=20", marks: 1, markCode: "M" },
              { reasoning: "Select the matching value.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $20$ electrons",
            commonErrors: ["Answering $18$ (electrons of $\\mathrm{Ca^{2+}}$, not the neutral atom).", "Answering $40$ (the mass number)."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A neutral atom of fluorine has $Z=9$ and $A=19$. State the numbers of protons, neutrons and electrons it contains.",
          response: {
            type: "numeric",
            parts: [
              { label: "protons", answer: 9 },
              { label: "neutrons", answer: 10 },
              { label: "electrons", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Particle numbers", statement: "Protons $=Z$, neutrons $=A-Z$, electrons $=Z$ for a neutral atom." },
            ],
            steps: [
              { reasoning: "Protons equal the atomic number.", working: "p=Z=9", marks: 1, markCode: "M" },
              { reasoning: "Neutrons equal $A-Z$.", working: "n=19-9=10", marks: 1, markCode: "M" },
              { reasoning: "A neutral atom has the same number of electrons as protons.", working: "e^-=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 protons, 10 neutrons, 9 electrons",
            commonErrors: ["Giving 19 neutrons (using $A$).", "Forgetting the atom is neutral and changing the electron count."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Iron has atomic number $Z=26$ and its most abundant isotope is $^{56}\\mathrm{Fe}$. Determine (a) the number of protons in a neutral Fe atom, (b) the number of electrons in $\\mathrm{Fe^{2+}}$, and (c) the number of neutrons in $^{56}\\mathrm{Fe}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) protons", answer: 26 },
              { label: "(b) electrons in $\\mathrm{Fe^{2+}}$", answer: 24 },
              { label: "(c) neutrons in $^{56}\\mathrm{Fe}$", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "A $2+$ ion has two fewer electrons than protons." },
            ],
            steps: [
              { reasoning: "Protons equal $Z=26$.", working: "p=26", marks: 1, markCode: "M" },
              { reasoning: "A neutral Fe atom has 26 electrons; losing two gives $26-2=24$.", working: "e^-=26-2=24", marks: 1, markCode: "M" },
              { reasoning: "Neutrons equal $A-Z=56-26=30$.", working: "n=56-26=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 26 protons (b) 24 electrons (c) 30 neutrons",
            commonErrors: ["Keeping 26 electrons in $\\mathrm{Fe^{2+}}$.", "Calculating neutrons as $56-24$ instead of $56-26$."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The chloride ion $\\mathrm{Cl^-}$ has $Z=17$ and $A=35$. Determine (a) its number of protons, (b) its number of neutrons, and (c) its number of electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) protons", answer: 17 },
              { label: "(b) neutrons", answer: 18 },
              { label: "(c) electrons", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "Charge $=\\text{protons}-\\text{electrons}$; a $1-$ ion has one more electron than protons." },
            ],
            steps: [
              { reasoning: "Protons equal $Z=17$ and are unchanged by ion formation.", working: "p=17", marks: 1, markCode: "M" },
              { reasoning: "Neutrons equal $A-Z=35-17=18$.", working: "n=35-17=18", marks: 1, markCode: "M" },
              { reasoning: "A $1-$ ion has one more electron than protons: $17+1=18$.", working: "e^-=17+1=18", marks: 1, markCode: "M" },
              { reasoning: "Check the charge: $17-18=-1$, consistent with $\\mathrm{Cl^-}$.", working: "17-18=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 17 protons (b) 18 neutrons (c) 18 electrons",
            commonErrors: ["Subtracting an electron to get 16 (that would be $\\mathrm{Cl^{+}}$).", "Using $A-Z$ for electrons."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly describes isotopes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atoms with the same number of neutrons but different proton numbers" },
              { id: "b", text: "Ions of the same element with different charges" },
              { id: "c", text: "Atoms of the same element with the same number of protons but different numbers of neutrons" },
              { id: "d", text: "Atoms of different elements with the same mass number" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotope", statement: "Same $Z$, different neutron number, hence different $A$." },
            ],
            steps: [
              { reasoning: "Isotopes belong to one element, so $Z$ is fixed; variation is in neutrons and $A$.", working: "\\text{same } Z,\\ \\text{diff } N", marks: 1, markCode: "M" },
              { reasoning: "Select the statement matching this definition.", working: "\\text{choice (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Same protons, different neutrons",
            commonErrors: ["Confusing isotopes with ions (which differ in electrons).", "Thinking different mass numbers means different elements."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "How many electrons does the fluoride ion $\\mathrm{F^-}$ contain? (F: $Z=9$)",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "A $1-$ ion has one more electron than protons." },
            ],
            steps: [
              { reasoning: "A neutral F atom has 9 electrons; gaining one gives $9+1=10$.", working: "9+1=10", marks: 1, markCode: "M" },
              { reasoning: "State the electron count.", working: "10\\ \\mathrm{electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ electrons",
            commonErrors: ["Answering 8 (subtracting instead of adding).", "Answering 9 (ignoring the charge)."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A cation $\\mathrm{X^{3+}}$ contains 10 electrons and has mass number $A=27$. Determine (a) its atomic number $Z$, (b) its number of protons, and (c) its number of neutrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $Z$", answer: 13 },
              { label: "(b) protons", answer: 13 },
              { label: "(c) neutrons", answer: 14 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "Charge $=\\text{protons}-\\text{electrons}$, so protons $=\\text{electrons}+\\text{charge}$." },
            ],
            steps: [
              { reasoning: "The $3+$ charge means protons exceed electrons by 3: $Z=10+3=13$.", working: "Z=10+3=13", marks: 1, markCode: "M" },
              { reasoning: "Protons equal $Z$, so there are 13 protons (the element is aluminium).", working: "p=13", marks: 1, markCode: "A" },
              { reasoning: "Neutrons equal $A-Z=27-13=14$.", working: "n=27-13=14", marks: 1, markCode: "M" },
              { reasoning: "State the neutron count.", working: "14\\ \\mathrm{neutrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=13$ (b) 13 protons (c) 14 neutrons",
            commonErrors: ["Subtracting 3 from 10 electrons to get $Z=7$.", "Using the electron count for $A-Z$."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The mass number $A$ of an atom is defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of electrons in the atom" },
              { id: "b", text: "The total number of protons and neutrons in the nucleus" },
              { id: "c", text: "The number of protons in the nucleus" },
              { id: "d", text: "The sum of protons, neutrons and electrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "$A$ is the total nucleons (protons $+$ neutrons) in the nucleus; electrons have negligible mass." },
            ],
            steps: [
              { reasoning: "Recall that nucleons are protons and neutrons only.", working: "A=p+n", marks: 1, markCode: "M" },
              { reasoning: "Select the matching definition.", working: "\\text{protons}+\\text{neutrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The total number of protons and neutrons",
            commonErrors: ["Including electrons (choice d) — their mass is negligible.", "Confusing $A$ with $Z$."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Two isotopes of carbon, $^{12}\\mathrm{C}$ and $^{14}\\mathrm{C}$, occur in nature. Explain why they have identical chemical properties but different physical properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotopes", statement: "Same $Z$, different numbers of neutrons." },
              { kind: "principle", name: "Chemical vs physical properties", statement: "Chemical properties depend on electron arrangement; physical properties such as density depend on mass." },
            ],
            steps: [
              { reasoning: "Both isotopes have $Z=6$, so both have 6 protons and, when neutral, 6 electrons.", working: "Z=6\\ \\text{for both}", marks: 1, markCode: "M" },
              { reasoning: "Identical proton and electron numbers give identical electron arrangements in every shell.", working: "\\text{same electron configuration}", marks: 1, markCode: "R" },
              { reasoning: "Since bonding depends only on electrons, both isotopes form the same compounds and react identically.", working: "\\text{same chemistry}", marks: 1, markCode: "A" },
              { reasoning: "$^{14}\\mathrm{C}$ has two more neutrons than $^{12}\\mathrm{C}$, so its mass number and hence its mass are greater.", working: "A=14\\ \\text{vs}\\ 12", marks: 1, markCode: "M" },
              { reasoning: "Greater mass gives different physical properties such as density and rate of diffusion.", working: "\\text{density/diffusion differ}", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: same chemistry, different physics because only the neutron count (mass) differs.", working: "\\text{same } Z,\\ \\text{diff } A", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identical $Z$ means identical electron arrangements and therefore identical chemical properties; the different neutron counts give different masses, hence different physical properties such as density.",
            commonErrors: ["Claiming the extra neutrons change the electron arrangement.", "Saying isotopes have different chemical properties."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Hydrogen has three isotopes: $^{1}\\mathrm{H}$ (protium), $^{2}\\mathrm{H}$ (deuterium) and $^{3}\\mathrm{H}$ (tritium). For each isotope, state the number of neutrons in the nucleus.",
          response: {
            type: "numeric",
            parts: [
              { label: "neutrons in $^{1}\\mathrm{H}$", answer: 0 },
              { label: "neutrons in $^{2}\\mathrm{H}$", answer: 1 },
              { label: "neutrons in $^{3}\\mathrm{H}$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotopes of hydrogen", statement: "All have $Z=1$ (one proton); they differ in neutron number." },
            ],
            steps: [
              { reasoning: "Hydrogen has $Z=1$, so neutrons $=A-1$ for each isotope.", working: "n=A-1", marks: 1, markCode: "M" },
              { reasoning: "Apply to each mass number: $1-1=0$, $2-1=1$, $3-1=2$.", working: "0,\\ 1,\\ 2", marks: 1, markCode: "A" },
              { reasoning: "Confirm protium has a nucleus with no neutrons (just one proton).", working: "^{1}\\mathrm{H}:\\ \\text{proton only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$^{1}\\mathrm{H}$: 0, $^{2}\\mathrm{H}$: 1, $^{3}\\mathrm{H}$: 2 neutrons",
            commonErrors: ["Answering 1, 2, 3 (using $A$ as the neutron count).", "Thinking protium has one neutron."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q17",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "An ion has 18 electrons and carries a charge of $+2$. What is its atomic number $Z$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$16$" },
              { id: "d", text: "$22$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "Charge $=\\text{protons}-\\text{electrons}$, and $Z$ equals the proton count." },
            ],
            steps: [
              { reasoning: "A $+2$ charge means protons exceed electrons by 2: $Z=18+2=20$.", working: "Z=18+2=20", marks: 1, markCode: "M" },
              { reasoning: "Select the matching value.", working: "Z=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $Z=20$ (calcium)",
            commonErrors: ["Subtracting to get $Z=16$.", "Answering 18 (the electron count, not $Z$)."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q18",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Calcium has $Z=20$ and its most abundant isotope is $^{40}\\mathrm{Ca}$. (a) State the numbers of protons, neutrons and electrons in a neutral calcium atom. (b) State the number of electrons in $\\mathrm{Ca^{2+}}$. (c) Explain why $\\mathrm{Ca^{2+}}$ is more stable than $\\mathrm{Ca^+}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Particle numbers", statement: "Protons $=Z$, neutrons $=A-Z$, electrons $=Z$ for a neutral atom." },
              { kind: "principle", name: "Octet stability", statement: "Ions are most stable when the outer shell is complete." },
            ],
            steps: [
              { reasoning: "Protons equal $Z=20$.", working: "p=20", marks: 1, markCode: "M" },
              { reasoning: "Neutrons equal $A-Z=40-20=20$.", working: "n=40-20=20", marks: 1, markCode: "M" },
              { reasoning: "A neutral atom has 20 electrons.", working: "e^-=20", marks: 1, markCode: "A" },
              { reasoning: "$\\mathrm{Ca^{2+}}$ has lost two electrons, leaving $20-2=18$.", working: "e^-=18", marks: 1, markCode: "M" },
              { reasoning: "With 18 electrons, $\\mathrm{Ca^{2+}}$ has the argon configuration $2.8.8.8$ — a complete outer octet — whereas $\\mathrm{Ca^+}$ ($2.8.8.1$) still has an incomplete outer shell.", working: "\\mathrm{Ca^{2+}}=2.8.8.8", marks: 1, markCode: "R" },
              { reasoning: "The full-shell ion is energetically more stable, so $\\mathrm{Ca^{2+}}$ is the ion actually formed.", working: "\\text{octet stability}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 protons, 20 neutrons, 20 electrons (b) 18 electrons (c) $\\mathrm{Ca^{2+}}$ has a complete outer octet (argon configuration), $\\mathrm{Ca^+}$ does not",
            commonErrors: ["In (b) answering 20 or 19 electrons.", "In (c) claiming $\\mathrm{Ca^+}$ cannot exist rather than explaining stability."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Sulfur has $Z=16$ and occurs as the isotopes $^{32}\\mathrm{S}$ and $^{34}\\mathrm{S}$.",
          parts: [
            { label: "a", prompt: "State the numbers of protons and neutrons in a neutral atom of $^{32}\\mathrm{S}$.", marks: 2 },
            { label: "b", prompt: "State the numbers of protons, neutrons and electrons in the ion $\\mathrm{S^{2-}}$ formed from $^{32}\\mathrm{S}$.", marks: 2 },
            { label: "c", prompt: "Explain why $^{32}\\mathrm{S}$ and $^{34}\\mathrm{S}$ have identical chemical properties.", marks: 2 },
            { label: "d", prompt: "Predict which isotope diffuses more slowly through a small hole and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotopes", statement: "Same $Z$, different neutron number." },
              { kind: "principle", name: "Ion formation", statement: "$\\mathrm{S^{2-}}$ has gained two electrons." },
            ],
            steps: [
              { part: "a", reasoning: "Protons equal $Z=16$; neutrons equal $A-Z=32-16=16$.", working: "p=16,\\ n=16", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both values.", working: "16\\ \\mathrm{protons},\\ 16\\ \\mathrm{neutrons}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Protons stay 16 and neutrons stay 16; the $2-$ charge means two extra electrons, giving 18 electrons.", working: "p=16,\\ n=16,\\ e=18", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all three particle numbers.", working: "16,\\ 16,\\ 18", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both isotopes have $Z=16$ and hence identical electron arrangements; chemical properties depend only on electrons.", working: "\\text{same electron arrangement}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The extra two neutrons do not participate in bonding, so reactivity is unchanged.", working: "\\text{neutrons inert chemically}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$^{34}\\mathrm{S}$ is heavier, so at the same temperature its particles move more slowly and diffuse more slowly.", working: "^{34}\\mathrm{S}\\ \\text{diffuses slower}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Diffusion rate depends on mass (Graham's law), not on chemical identity.", working: "\\text{rate} \\propto 1/\\sqrt{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 16 protons, 16 neutrons (b) 16 protons, 16 neutrons, 18 electrons (c) identical electron arrangements (d) $^{34}\\mathrm{S}$ diffuses more slowly because it is heavier",
            commonErrors: ["In (b) keeping 16 electrons (ignoring the $2-$ charge).", "In (d) choosing the lighter isotope as slower."],
          },
        },
        {
          id: "chemsl-u2-atomic-structure-q20",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The charge on an ion is equal to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of protons minus the number of electrons" },
              { id: "b", text: "The number of protons in the nucleus" },
              { id: "c", text: "The mass number minus the atomic number" },
              { id: "d", text: "The number of electrons minus the number of protons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "Charge $=\\text{protons}-\\text{electrons}$." },
            ],
            steps: [
              { reasoning: "Protons are positive and electrons negative; the net charge is their difference.", working: "q=p-e", marks: 1, markCode: "M" },
              { reasoning: "Select the matching expression.", working: "\\text{protons}-\\text{electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Protons minus electrons",
            commonErrors: ["Reversing the subtraction (choice c) — that gives the charge of the opposite-sign ion.", "Using $A-Z$ (the neutron count)."],
          },
        },
      ],
    },
    {
      id: "chemsl-u2-relative-atomic-mass",
      title: "Relative atomic mass",
      skill: "Calculate $A_r$ as the abundance-weighted mean of the isotopic masses.",
      lesson: {
        sections: [
          {
            heading: "Why an average is needed",
            body: "Most elements occur naturally as a mixture of isotopes, so a sample contains atoms of several mass numbers. The relative atomic mass $A_r$ listed in the data booklet is the weighted average mass of the atoms in that natural mixture, relative to $^{12}\\mathrm{C}=12$ exactly. It is not the mass of any single isotope.",
          },
          {
            heading: "The weighted mean",
            body: "If an element has isotopes of mass numbers $A_1, A_2, \\dots$ with fractional abundances $f_1, f_2, \\dots$ (percentages divided by 100), then $A_r=\\sum f_i A_i$. Using percentages directly requires dividing the weighted sum by 100. For example chlorine: $0.75\\times35+0.25\\times37=35.5$.",
          },
          {
            heading: "Reading the question",
            body: "Exam questions may give isotope masses to one decimal place (e.g. $34.97$) rather than mass numbers, or give abundances that do not total exactly 100\\% due to rounding. Normalise abundances if they do not sum to 100\\%, and quote $A_r$ to the precision of the data (usually 1-2 decimal places).",
          },
        ],
        keyFormulas: [
          { name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ where $f_i$ is the fractional abundance" },
          { name: "Using percentages", statement: "$A_r=\\frac{\\sum \\%_i A_i}{100}$" },
          { name: "Normalisation", statement: "$f_i=\\frac{\\%_i}{\\sum \\%_i}$ if percentages do not total 100" },
        ],
        workedExample: {
          problem: "Boron has two isotopes: $^{10}\\mathrm{B}$ at $19.9\\%$ abundance and $^{11}\\mathrm{B}$ at $80.1\\%$. Calculate $A_r$ of boron.",
          solution: "$A_r=0.199\\times10+0.801\\times11=1.99+8.811=10.8\\ \\mathrm{g\\,mol^{-1}}$ (to 3 s.f.).",
        },
      },
      questions: [
        {
          id: "chemsl-u2-relative-atomic-mass-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Chlorine consists of $^{35}\\mathrm{Cl}$ (75\\%) and $^{37}\\mathrm{Cl}$ (25\\%). What is its relative atomic mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$35.5$" },
              { id: "b", text: "$36.5$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$35$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$" },
            ],
            steps: [
              { reasoning: "Weight each isotope mass by its fractional abundance.", working: "0.75(35)+0.25(37)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "26.25+9.25=35.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $35.5$",
            commonErrors: ["Averaging as $\\frac{35+37}{2}=36$ (unweighted mean).", "Answering $35$ (the lighter isotope only)."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An element has two isotopes: $^{63}\\mathrm{X}$ at $69.2\\%$ abundance and $^{65}\\mathrm{X}$ at $30.8\\%$. Calculate $A_r$ of X to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$A_r$", answer: 63.6, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$" },
            ],
            steps: [
              { reasoning: "Convert percentages to fractional abundances and weight the isotope masses.", working: "0.692(63)+0.308(65)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the weighted sum.", working: "43.596+20.02=63.616", marks: 1, markCode: "A" },
              { reasoning: "Round to 3 s.f.", working: "A_r=63.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r=63.6$",
            commonErrors: ["Using percentages without dividing by 100, giving $6361.6$.", "Taking the unweighted mean $64$."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Bromine has two isotopes, $^{79}\\mathrm{Br}$ and $^{81}\\mathrm{Br}$, with $A_r=79.9$. The abundance of $^{79}\\mathrm{Br}$ is $x\\%$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\frac{x(79)+(100-x)(81)}{100}$" },
            ],
            steps: [
              { reasoning: "Set up the weighted mean with unknown abundance $x$ for $^{79}\\mathrm{Br}$ and $(100-x)$ for $^{81}\\mathrm{Br}$.", working: "79.9=\\frac{79x+81(100-x)}{100}", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $79x+8100-81x=7990$.", working: "8100-2x=7990", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "2x=110\\Rightarrow x=55", marks: 1, markCode: "A" },
              { reasoning: "State the abundances.", working: "^{79}\\mathrm{Br}=55\\%,\\ ^{81}\\mathrm{Br}=45\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$^{79}\\mathrm{Br}$: $55\\%$; $^{81}\\mathrm{Br}$: $45\\%$",
            commonErrors: ["Setting up the equation with $x$ as the fraction rather than the percentage.", "Arithmetic slip in $81\\times100=8100$."],
            examinerNote: "Accept answer as percentages $55:45$.",
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A newly discovered element E has three isotopes with the following data:",
          parts: [
            { label: "a", prompt: "$^{40}\\mathrm{E}$: mass $39.96$, abundance $12.3\\%$; $^{42}\\mathrm{E}$: mass $41.96$, abundance $58.7\\%$; $^{44}\\mathrm{E}$: mass $43.96$, abundance $29.0\\%$. Write an expression for $A_r$ of E.", marks: 2 },
            { label: "b", prompt: "Calculate $A_r$ of E to 2 decimal places.", marks: 2 },
            { label: "c", prompt: "Explain why the isotopic masses used are slightly less than the mass numbers.", marks: 2 },
            { label: "d", prompt: "The abundances of a sample of E are found to be $10.0\\%$, $60.0\\%$ and $30.0\\%$. Evaluate whether $A_r$ would increase or decrease, and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ with fractional abundances." },
              { kind: "principle", name: "Mass defect", statement: "Atomic mass is slightly less than the mass number because of nuclear binding energy." },
            ],
            steps: [
              { part: "a", reasoning: "Weight each isotope mass by its fractional abundance.", working: "A_r=0.123(39.96)+0.587(41.96)+0.290(43.96)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expression correctly.", working: "\\text{three-term weighted sum}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate each term.", working: "4.915+24.63+12.75", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum and round.", working: "A_r=42.30\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nucleons in the nucleus are bound by strong nuclear force; the binding energy means the nucleus has less mass than the sum of free nucleons.", working: "\\text{binding energy / mass defect}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Electrons also contribute a tiny mass, but the dominant effect is nuclear binding energy.", working: "\\text{mass defect}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The heaviest isotope's share rises from $29.0\\%$ to $30.0\\%$ while the lightest falls from $12.3\\%$ to $10.0\\%$; since $A_r$ is a weighted mean, shifting weight to heavier isotopes increases it.", working: "\\text{weight shifts to heavier isotopes}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: $A_r$ increases.", working: "A_r\\ \\text{increases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A_r=0.123(39.96)+0.587(41.96)+0.290(43.96)$ (b) $42.30\\ \\mathrm{g\\,mol^{-1}}$ (c) mass defect from nuclear binding energy (d) $A_r$ increases because the abundance of the heaviest isotope rises",
            commonErrors: ["In (d) reasoning by absolute percentage change rather than which isotope gains weight.", "In (c) claiming the mass defect is due to electrons."],
            examinerNote: "Accept $42.3$ for (b).",
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An element X has isotopes $^{12}\\mathrm{X}$ (80\\%) and $^{14}\\mathrm{X}$ (20\\%). What is its relative atomic mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12.0$" },
              { id: "b", text: "$13.0$" },
              { id: "c", text: "$12.4$" },
              { id: "d", text: "$12.2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ with fractional abundances." },
            ],
            steps: [
              { reasoning: "Weight each isotope mass by its fractional abundance.", working: "0.80(12)+0.20(14)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the weighted sum.", working: "9.6+2.8=12.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $12.4$",
            commonErrors: ["Taking the unweighted mean $\\frac{12+14}{2}=13$.", "Answering $12$ (the lighter isotope only)."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q6",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Lithium occurs naturally as $^{6}\\mathrm{Li}$ ($7.5\\%$) and $^{7}\\mathrm{Li}$ ($92.5\\%$). Calculate $A_r$ of lithium.",
          response: { type: "numeric", parts: [{ label: "$A_r$", answer: 6.925, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$" },
            ],
            steps: [
              { reasoning: "Convert the percentages to fractional abundances and weight the isotope masses.", working: "0.075(6)+0.925(7)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each term.", working: "0.45+6.475", marks: 1, markCode: "M" },
              { reasoning: "Sum to obtain $A_r$.", working: "A_r=6.925", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r=6.925$",
            commonErrors: ["Using percentages without dividing by 100.", "Taking the unweighted mean $6.5$."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Magnesium has three isotopes: $^{24}\\mathrm{Mg}$ (78.0\\%), $^{25}\\mathrm{Mg}$ (12.0\\%) and $^{26}\\mathrm{Mg}$ (10.0\\%). Calculate $A_r$ of magnesium to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "$A_r$", answer: 24.32, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ over all naturally occurring isotopes." },
            ],
            steps: [
              { reasoning: "Set up the three-term weighted mean using fractional abundances.", working: "A_r=0.780(24)+0.120(25)+0.100(26)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each term.", working: "18.72+3.00+2.60", marks: 1, markCode: "M" },
              { reasoning: "Sum the terms.", working: "24.32", marks: 1, markCode: "A" },
              { reasoning: "Quote the final value to 2 d.p.", working: "A_r=24.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r=24.32$",
            commonErrors: ["Omitting one of the three isotopes.", "Dividing by 3 (unweighted mean)."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why is the relative atomic mass of most elements not a whole number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mass spectrometer has limited precision" },
              { id: "b", text: "The element occurs as a mixture of isotopes with different masses" },
              { id: "c", text: "Nuclei undergo radioactive decay" },
              { id: "d", text: "Atoms continuously gain and lose electrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isotopic mixture", statement: "$A_r$ is the abundance-weighted average over all naturally occurring isotopes." },
            ],
            steps: [
              { reasoning: "Identify that $A_r$ is a weighted mean of isotope masses.", working: "A_r=\\text{weighted mean}", marks: 1, markCode: "M" },
              { reasoning: "A weighted mean of different isotope masses is generally non-integral.", working: "\\text{non-integer result}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The element occurs as a mixture of isotopes with different masses",
            commonErrors: ["Attributing the decimal value to measurement error.", "Saying all atoms have fractional mass."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The relative atomic mass of chlorine is 35.5, yet no individual chlorine atom has a mass of 35.5. Explain this apparent contradiction and state what information $A_r$ provides about a natural sample of chlorine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isotopic mixture", statement: "$A_r$ is a weighted average over the isotopes present in a natural sample." },
              { kind: "definition", name: "Relative atomic mass scale", statement: "$A_r$ is measured relative to $^{12}\\mathrm{C}=12$ exactly." },
            ],
            steps: [
              { reasoning: "$A_r$ is not the mass of any single atom; it is a weighted mean over the isotopic mixture.", working: "A_r=\\text{weighted mean}", marks: 1, markCode: "M" },
              { reasoning: "Chlorine contains $^{35}\\mathrm{Cl}$ and $^{37}\\mathrm{Cl}$, so individual atoms have mass numbers 35 or 37 only.", working: "^{35}\\mathrm{Cl},\\ ^{37}\\mathrm{Cl}", marks: 1, markCode: "R" },
              { reasoning: "The value 35.5 lies between the two isotope masses because of their abundances (about 75\\% and 25\\%).", working: "0.75(35)+0.25(37)=35.5", marks: 1, markCode: "M" },
              { reasoning: "$A_r$ is measured on the scale where $^{12}\\mathrm{C}=12$, so it is a ratio rather than a literal single-atom mass.", working: "\\text{relative to }^{12}\\mathrm{C}", marks: 1, markCode: "R" },
              { reasoning: "Therefore $A_r$ tells us the average mass of atoms in a natural sample of chlorine, reflecting its isotopic composition.", working: "\\text{average over mixture}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: there is no contradiction — 35.5 describes the bulk sample, not any individual atom.", working: "\\text{no contradiction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r$ is the abundance-weighted mean of the isotopes $^{35}\\mathrm{Cl}$ and $^{37}\\mathrm{Cl}$ in a natural sample; it describes the mixture, not any single atom.",
            commonErrors: ["Claiming individual chlorine atoms have mass 35.5.", "Ignoring the role of isotopic abundances in producing the average."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The chlorine isotopes have isotopic masses $34.97$ and $36.97$ with natural abundances $75\\%$ and $25\\%$. What is $A_r$ of chlorine to 2 decimal places?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$35.97$" },
              { id: "b", text: "$36.47$" },
              { id: "c", text: "$35.47$" },
              { id: "d", text: "$35.50$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$" },
            ],
            steps: [
              { reasoning: "Weight the isotopic masses (not mass numbers) by fractional abundance.", working: "0.75(34.97)+0.25(36.97)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to 2 d.p.", working: "26.2275+9.2425=35.47", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $35.47$",
            commonErrors: ["Using mass numbers 35 and 37 to get 35.5.", "Taking the unweighted mean of the isotopic masses."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Copper has two isotopes: $^{63}\\mathrm{Cu}$ (mass $62.93$, abundance $69.2\\%$) and $^{65}\\mathrm{Cu}$ (mass $64.93$, abundance $30.8\\%$). Calculate $A_r$ of copper to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "$A_r$", answer: 63.55, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ using isotopic masses and fractional abundances." },
            ],
            steps: [
              { reasoning: "Set up the weighted mean with fractional abundances.", working: "A_r=0.692(62.93)+0.308(64.93)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each term.", working: "43.5476+19.9984", marks: 1, markCode: "M" },
              { reasoning: "Sum the terms.", working: "63.546", marks: 1, markCode: "A" },
              { reasoning: "Round to 2 d.p.", working: "A_r=63.55", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r=63.55$",
            commonErrors: ["Using mass numbers instead of isotopic masses.", "Forgetting that percentages must be converted to fractions."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An element has isotopes of mass numbers 10, 11 and 12 with abundances $30\\%$, $60\\%$ and $9\\%$ respectively. The percentages are rounded and do not total 100\\%. Normalise the abundances and calculate $A_r$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "$A_r$", answer: 10.79, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Normalisation", statement: "If abundances do not total 100\\%, divide each by the total before weighting." },
            ],
            steps: [
              { reasoning: "Find the total abundance: $30+60+9=99\\%$, so the fractional abundances are $\\%_i/99$.", working: "f_i=\\%_i/99", marks: 1, markCode: "M" },
              { reasoning: "Set up the weighted sum using percentages divided by the 99\\% total.", working: "A_r=\\frac{30(10)+60(11)+9(12)}{99}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the numerator and divide.", working: "\\frac{1068}{99}=10.7879", marks: 1, markCode: "A" },
              { reasoning: "Round to 2 d.p.", working: "A_r=10.79", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r=10.79$",
            commonErrors: ["Dividing by 100 instead of 99.", "Treating the abundances as fractions without normalising."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which expression correctly calculates $A_r$ for an element with isotopes $^{20}\\mathrm{X}$ ($90\\%$) and $^{22}\\mathrm{X}$ ($10\\%$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{20+22}{2}$" },
              { id: "b", text: "$0.90(20)+0.10(22)$" },
              { id: "c", text: "$20(0.90)+22$" },
              { id: "d", text: "$20+22(0.10)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ — every isotope mass must be multiplied by its own fractional abundance." },
            ],
            steps: [
              { reasoning: "Each isotope mass must be weighted by its fractional abundance: $0.90$ for $^{20}\\mathrm{X}$ and $0.10$ for $^{22}\\mathrm{X}$.", working: "0.90(20)+0.10(22)", marks: 1, markCode: "M" },
              { reasoning: "Identify the correct expression.", working: "\\text{choice (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.90(20)+0.10(22)$",
            commonErrors: ["Choosing (b): the unweighted mean ignores abundances.", "Choosing (c) or (d): only one isotope is weighted."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Element E has two isotopes: $^{79}\\mathrm{E}$ ($51\\%$) and $^{81}\\mathrm{E}$ ($49\\%$), with isotopic masses $78.92$ and $80.92$ respectively.",
          parts: [
            { label: "a", prompt: "Write an expression for $A_r$ of E using fractional abundances.", marks: 2 },
            { label: "b", prompt: "Calculate $A_r$ of E to 2 decimal places.", marks: 2 },
            { label: "c", prompt: "Explain why E behaves chemically as a single element despite containing two isotopes.", marks: 2 },
            { label: "d", prompt: "A different sample of E has abundances $55\\%$ and $45\\%$ for the two isotopes. Predict, with justification, whether its $A_r$ is higher or lower than in (b).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$" },
              { kind: "principle", name: "Isotopes and chemistry", statement: "Isotopes have identical electron arrangements, so an element behaves chemically as one substance." },
            ],
            steps: [
              { part: "a", reasoning: "Convert the percentages to fractional abundances and weight each isotopic mass.", working: "A_r=0.51(78.92)+0.49(80.92)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expression correctly.", working: "\\text{two-term weighted sum}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate each term.", working: "40.2492+39.6508", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum and round to 2 d.p.", working: "A_r=79.90", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both isotopes have the same number of protons and electrons, hence identical electron arrangements.", working: "\\text{same electron arrangement}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Chemical behaviour is determined by electrons, so the isotopes react identically; only physical properties such as mass differ.", working: "\\text{identical chemistry}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In the new sample the lighter isotope's share rises from $51\\%$ to $55\\%$ while the heavier falls from $49\\%$ to $45\\%$; shifting weight to the lighter isotope lowers the weighted mean.", working: "\\text{weight shifts to lighter isotope}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: $A_r$ decreases below 79.90.", working: "A_r\\ \\text{decreases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A_r=0.51(78.92)+0.49(80.92)$ (b) $79.90$ (c) isotopes share the same electron arrangement, so chemistry is identical (d) $A_r$ decreases because the lighter isotope becomes more abundant",
            commonErrors: ["In (d) claiming $A_r$ increases because the heavier isotope is 'more important'.", "Using mass numbers instead of isotopic masses in (b)."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Element Y has two isotopes $^{85}\\mathrm{Y}$ and $^{87}\\mathrm{Y}$. Its relative atomic mass is $A_r=85.6$. Find the percentage abundance of $^{85}\\mathrm{Y}$ in a natural sample.",
          response: { type: "numeric", parts: [{ label: "abundance of $^{85}\\mathrm{Y}$", answer: 70, tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\frac{x(85)+(100-x)(87)}{100}$" },
            ],
            steps: [
              { reasoning: "Set up the weighted mean with $x$ as the percentage of $^{85}\\mathrm{Y}$ and $(100-x)$ for $^{87}\\mathrm{Y}$.", working: "85.6=\\frac{85x+87(100-x)}{100}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the equation.", working: "8560=8700-2x", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x=70", marks: 1, markCode: "A" },
              { reasoning: "State the abundances.", working: "^{85}\\mathrm{Y}=70\\%,\\ ^{87}\\mathrm{Y}=30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$^{85}\\mathrm{Y}$: $70\\%$; $^{87}\\mathrm{Y}$: $30\\%$",
            commonErrors: ["Using $x$ as a fraction instead of a percentage.", "Arithmetic error when expanding $87(100-x)$."],
          },
        },
        {
          id: "chemsl-u2-relative-atomic-mass-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Element Q (similar to magnesium) has three isotopes with the following data:",
          parts: [
            { label: "a", prompt: "$^{24}\\mathrm{Q}$: mass $23.99$, abundance $78\\%$; $^{25}\\mathrm{Q}$: mass $24.99$, abundance $10\\%$; $^{26}\\mathrm{Q}$: mass $25.99$, abundance $12\\%$. Write an expression for $A_r$ of Q.", marks: 2 },
            { label: "b", prompt: "Calculate $A_r$ of Q to 2 decimal places.", marks: 3 },
            { label: "c", prompt: "State the units of $A_r$ and explain what the numerical value is relative to.", marks: 2 },
            { label: "d", prompt: "A student claims 'the most abundant isotope alone determines $A_r$'. Evaluate this claim.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r=\\sum f_i A_i$ over all isotopes." },
              { kind: "definition", name: "Relative atomic mass scale", statement: "$A_r$ is measured relative to $^{12}\\mathrm{C}=12$ exactly." },
            ],
            steps: [
              { part: "a", reasoning: "Weight each isotopic mass by its fractional abundance.", working: "A_r=0.78(23.99)+0.10(24.99)+0.12(25.99)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the three-term expression correctly.", working: "\\text{three-term weighted sum}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate each term.", working: "18.7122+2.499+3.1188", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum the terms.", working: "24.3300", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round to 2 d.p. and quote with units.", working: "A_r=24.33\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Units are $\\mathrm{g\\,mol^{-1}}$ (molar mass units); the value is relative to the $^{12}\\mathrm{C}$ standard where one atom of carbon-12 has mass exactly 12.", working: "\\text{relative to }^{12}\\mathrm{C}=12", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Because it is a ratio on a defined scale, $A_r$ is numerically equal to the molar mass in $\\mathrm{g\\,mol^{-1}}$.", working: "A_r \\equiv M \\text{ in g mol}^{-1}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The claim is false: $A_r$ depends on the abundances of ALL isotopes, not just the most abundant one.", working: "\\text{all isotopes contribute}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The less abundant isotopes still contribute proportionally to the weighted mean, so removing them would change $A_r$.", working: "\\text{weighted mean includes all}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: $A_r$ is determined by the complete isotopic mixture and its abundances.", working: "\\text{claim rejected}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A_r=0.78(23.99)+0.10(24.99)+0.12(25.99)$ (b) $24.33\\ \\mathrm{g\\,mol^{-1}}$ (c) $\\mathrm{g\\,mol^{-1}}$, relative to $^{12}\\mathrm{C}=12$ (d) false — all isotopes contribute to the weighted mean",
            commonErrors: ["In (d) agreeing that the dominant isotope alone sets $A_r$.", "In (c) claiming $A_r$ is measured in atomic mass units per atom."],
          },
        },
      ],
    },
  ],
};
