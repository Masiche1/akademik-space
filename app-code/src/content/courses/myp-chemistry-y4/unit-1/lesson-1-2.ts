import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypc4-u1-lesson-1-2",
  code: "1-2",
  title: "Atomic Structure and the Periodic Table",
  goal: "I CAN describe atomic structure, use atomic/mass numbers, draw electron arrangements, and describe periodic trends.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Nucleus", definition: "Centre of atom containing protons (positive) and neutrons (neutral); almost all mass." },
    { term: "Atomic number", definition: "Number of protons — identifies the element." },
    { term: "Mass number", definition: "Protons + neutrons in nucleus." },
    { term: "Isotope", definition: "Atoms of same element with different numbers of neutrons (same protons)." },
    { term: "Group", definition: "Vertical column; elements share outer electron count → similar chemical properties." },
    { term: "Period", definition: "Horizontal row; elements have same number of electron shells." },
  ],
  concepts: [
    {
      id: "mypc4-u1-atomic",
      title: "Atomic structure and isotopes",
      skill: "Calculate subatomic particle numbers and describe isotopes.",
      lesson: {
        sections: [
          {
            heading: "Inside the atom",
            body: "Nucleus: protons (+1) and neutrons (0, similar mass). Electrons (-1) orbit in shells. Atomic number = protons = electrons (neutral atom). Mass number = protons + neutrons.",
          },
          {
            heading: "Isotopes",
            body: "Same atomic number (same element) but different mass numbers (different neutrons). Example: carbon-12 and carbon-14 both have 6 protons but 6 vs 8 neutrons. Isotopes have same chemical properties (same electrons) but different physical properties/mass.",
          },
          {
            heading: "Relative atomic mass",
            body: "Weighted average of isotope masses accounting for natural abundance. Chlorine: 35Cl (75%) + 37Cl (25%) → Ar ≈ 35.5.",
          },
        ],
        keyFormulas: [
          { name: "Neutrons", statement: "mass number - atomic number" },
          { name: "Isotope", statement: "Same protons, different neutrons" },
          { name: "Ar", statement: "Weighted mean of isotope masses" },
        ],
        workedExample: {
          problem: "Sodium atom: atomic number 11, mass number 23. Find protons, neutrons, electrons.",
          solution: "Protons = 11, neutrons = 23-11 = 12, electrons = 11 (neutral).",
        },
      },
      questions: [
        {
          id: "mypc4-u1-atom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines the identity of an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of protons (atomic number)" },
              { id: "b", text: "Total mass" },
              { id: "c", text: "Number of neutrons" },
              { id: "d", text: "Number of electrons shells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic number", statement: "Protons define element identity." },
            ],
            steps: [
              { reasoning: "Atomic number (protons) is unique to each element.", working: "\\text{protons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Number of protons",
            commonErrors: ["Choosing neutrons — they vary in isotopes."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-atom-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom has atomic number 17 and mass number 35. How many protons, neutrons and electrons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18 protons, 17 neutrons, 17 electrons" },
              { id: "b", text: "17 protons, 18 neutrons, 18 electrons" },
              { id: "c", text: "17 protons, 18 neutrons, 17 electrons" },
              { id: "d", text: "35 protons, 17 neutrons, 35 electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subatomic calculation", statement: "p = atomic number; n = mass - atomic; e = p (neutral)." },
            ],
            steps: [
              { reasoning: "Protons = 17, neutrons = 35-17 = 18, electrons = 17.", working: "17,18,17", marks: 1, markCode: "M" },
              { reasoning: "State all three.", working: "\\text{p,n,e}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17p, 18n, 17e",
            commonErrors: ["Swapping protons and neutrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What are isotopes and why do they have the same chemical properties?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Isotopes are radioactive only" },
              { id: "b", text: "Different elements entirely" },
              { id: "c", text: "Same protons (same element) but different neutrons; chemical properties depend on electrons which are identical" },
              { id: "d", text: "They have different electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isotopes", statement: "Same element (protons) different neutrons; electrons same → same chemistry." },
            ],
            steps: [
              { reasoning: "Isotopes = same protons, different neutrons.", working: "\\text{isotopes}", marks: 1, markCode: "M" },
              { reasoning: "Same electron arrangement → same chemical behavior.", working: "\\text{same electrons}", marks: 1, markCode: "M" },
              { reasoning: "State the link.", working: "\\text{same chemistry}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same protons, different neutrons; electrons identical",
            commonErrors: ["Saying isotopes are different elements."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Chlorine has two isotopes: 35Cl (75% abundance) and 37Cl (25%).",
          parts: [
            { label: "a", prompt: "How many protons and neutrons in each isotope?", marks: 2 },
            { label: "b", prompt: "Calculate the relative atomic mass of chlorine.", marks: 3 },
            { label: "c", prompt: "Explain why isotopes have identical chemical properties.", marks: 2 },
            { label: "d", prompt: "Give one use of chlorine isotopes.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Isotopes and Ar", statement: "Ar = weighted average of isotope masses." },
            ],
            steps: [
              { part: "a", reasoning: "Both have 17 protons; 35Cl has 18 neutrons, 37Cl has 20.", working: "17p;18n,20n", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct particle counts.", working: "\\text{particles}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ar = (35×0.75) + (37×0.25) = 26.25 + 9.25.", working: "26.25+9.25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum = 35.5.", working: "35.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State answer.", working: "Ar=35.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Same protons → same electrons → same chemical behavior.", working: "\\text{same electrons}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Different mass doesn't affect chemistry.", working: "\\text{chemistry same}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "37Cl used as tracer in water pollution studies (or 36Cl dating).", working: "\\text{tracer}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 17p; 18n & 20n (b) 35.5 (c) same electrons (d) tracer",
            commonErrors: ["In (b), averaging without weighting."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-atom-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which subatomic particle has no electric charge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proton" },
              { id: "b", text: "Neutron" },
              { id: "c", text: "Electron" },
              { id: "d", text: "All particles are charged" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subatomic particles", statement: "Proton +1, electron −1, neutron 0." },
            ],
            steps: [
              { reasoning: "Neutron has zero charge.", working: "n^0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Neutron",
            commonErrors: ["Choosing proton — it is positive."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-atom-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The mass number of an atom equals...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of protons + electrons" },
              { id: "b", text: "Number of electrons + neutrons" },
              { id: "c", text: "Number of protons only" },
              { id: "d", text: "Number of protons + number of neutrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "Protons + neutrons in the nucleus." },
            ],
            steps: [
              { reasoning: "Nucleus contains protons and neutrons; electrons have negligible mass.", working: "p+n", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "A=p+n", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protons + neutrons",
            commonErrors: ["Including electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An atom has atomic number 8 and mass number 16. How many neutrons does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Neutrons", statement: "neutrons = mass number − atomic number." },
            ],
            steps: [
              { reasoning: "16 − 8 = 8 neutrons.", working: "16-8=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "8",
            commonErrors: ["Answering 16."],
            examinerNote: "B1 for 8.",
          },
        },
        {
          id: "mypc4-u1-atom-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Chlorine has atomic number 17. How many neutrons are in chlorine-35 and chlorine-37?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 18 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Isotope neutrons", statement: "n = mass number − atomic number." },
            ],
            steps: [
              { reasoning: "Cl-35: 35 − 17 = 18 neutrons.", working: "35-17=18", marks: 1, markCode: "M" },
              { reasoning: "Cl-37: 37 − 17 = 20 neutrons.", working: "37-17=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 and 20",
            commonErrors: ["Swapping the two answers."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two atoms are isotopes of the same element. They differ in their number of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrons in the outer shell" },
              { id: "b", text: "Protons" },
              { id: "c", text: "Neutrons" },
              { id: "d", text: "Chemical properties" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotope", statement: "Same protons, different neutrons." },
            ],
            steps: [
              { reasoning: "Isotopes have same atomic number but different mass numbers.", working: "\\text{same }Z", marks: 1, markCode: "M" },
              { reasoning: "Difference is neutron count.", working: "n", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neutrons",
            commonErrors: ["Choosing protons — that would make a different element."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Element X has atomic number 20 and mass number 40. How many protons, neutrons and electrons does a neutral atom of X have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 20 },
              { label: "c", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subatomic calculation", statement: "p = Z; n = A − Z; e = p for neutral atom." },
            ],
            steps: [
              { reasoning: "Protons = 20; neutrons = 40 − 20 = 20; electrons = 20.", working: "p=20,n=20,e=20", marks: 1, markCode: "M" },
              { reasoning: "All three values correct.", working: "\\text{all}", marks: 1, markCode: "M" },
              { reasoning: "State complete answer.", working: "\\text{20,20,20}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 protons, 20 neutrons, 20 electrons",
            commonErrors: ["Assuming neutrons must differ from protons."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The relative atomic mass of chlorine is 35.5, even though no chlorine atom has mass number 35.5. Why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All elements have decimal atomic masses" },
              { id: "b", text: "It is a weighted average of the masses of chlorine-35 and chlorine-37 in their natural abundances" },
              { id: "c", text: "It is an experimental error" },
              { id: "d", text: "Chlorine atoms constantly change mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Relative atomic mass", statement: "Weighted mean of isotope masses by natural abundance." },
            ],
            steps: [
              { reasoning: "Natural chlorine is a mixture of Cl-35 (75%) and Cl-37 (25%).", working: "\\text{isotopes}", marks: 1, markCode: "M" },
              { reasoning: "Weighted average gives ≈35.5.", working: "35\\times0.75+37\\times0.25", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "\\text{average}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weighted average of isotope masses",
            commonErrors: ["Saying individual atoms have fractional mass numbers."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Bromine has two isotopes: ⁷⁹Br (50.7% abundance) and ⁸¹Br (49.3%). Calculate its relative atomic mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80.0, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Relative atomic mass", statement: "Ar = Σ(isotope mass × abundance fraction)." },
            ],
            steps: [
              { reasoning: "Ar = (79 × 0.507) + (81 × 0.493).", working: "79\\times0.507+81\\times0.493", marks: 1, markCode: "M" },
              { reasoning: "= 40.05 + 39.93 = 79.99 ≈ 80.0.", working: "79.99", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "80.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80.0",
            commonErrors: ["Averaging 79 and 81 without weighting."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A neutral atom has 13 electrons. How many protons does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "26" },
              { id: "b", text: "12" },
              { id: "c", text: "13" },
              { id: "d", text: "14" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutral atom", statement: "Electrons = protons in a neutral atom." },
            ],
            steps: [
              { reasoning: "Neutral atom: protons = electrons = 13.", working: "p=e=13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "13",
            commonErrors: ["Answering with atomic mass."],
            examinerNote: "B1 for 13.",
          },
        },
        {
          id: "mypc4-u1-atom-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An ion has 17 protons, 18 electrons and mass number 35. What is its charge and how many neutrons does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -1 },
              { label: "b", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ions", statement: "Charge = protons − electrons; neutrons = A − Z." },
            ],
            steps: [
              { reasoning: "Charge = 17 − 18 = −1; neutrons = 35 − 17 = 18.", working: "17-18=-1;\\ 35-17=18", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "-1,18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Charge −1; 18 neutrons",
            commonErrors: ["Forgetting electrons exceed protons gives negative charge."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-atom-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Isotopes of an element.",
          parts: [
            { label: "a", prompt: "Define an isotope.", marks: 1 },
            { label: "b", prompt: "Compare the numbers of protons, neutrons and electrons in carbon-12 and carbon-14.", marks: 2 },
            { label: "c", prompt: "Explain why isotopes have identical chemical properties.", marks: 2 },
            { label: "d", prompt: "Give one use of a carbon isotope.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotope", statement: "Same protons, different neutrons; same chemistry, different mass." },
            ],
            steps: [
              { part: "a", reasoning: "Atoms of same element with different numbers of neutrons.", working: "\\text{isotope def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both have 6 protons and 6 electrons; C-12 has 6 neutrons, C-14 has 8.", working: "6p,6e;6n\\ \\&\\ 8n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comparison complete and correct.", working: "\\text{compare}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Same protons → same electron arrangement.", working: "\\text{same }e^{-}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Chemical behaviour depends on electrons → identical chemistry.", working: "\\text{same chem}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "C-14 used in radiocarbon dating (or as tracer).", working: "\\text{dating}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) same element diff neutrons (b) same p,e; 6 vs 8 n (c) same electrons (d) C-14 dating",
            commonErrors: ["In (b), saying electrons differ."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-atom-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sodium has atomic number 11 and mass number 23.",
          parts: [
            { label: "a", prompt: "Calculate the numbers of protons, neutrons and electrons in a neutral sodium atom.", marks: 3 },
            { label: "b", prompt: "State what an isotope of sodium would differ in.", marks: 2 },
            { label: "c", prompt: "A different element has two isotopes of mass 20 (90%) and 22 (10%). Calculate its relative atomic mass.", marks: 2 },
            { label: "d", prompt: "Explain why the two isotopes in (c) have the same chemical properties.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atomic structure", statement: "p=Z, n=A−Z, e=p; Ar = weighted isotope average." },
            ],
            steps: [
              { part: "a", reasoning: "Protons = 11; neutrons = 23−11 = 12; electrons = 11.", working: "11,12,11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete answer.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same protons (11), different neutrons → different mass number.", working: "\\text{diff n}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State clearly.", working: "\\text{isotope}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ar = (20×0.90)+(22×0.10) = 18.0+2.2.", working: "18.0+2.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ar = 20.2.", working: "20.2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Same number of protons and electrons → same chemical behaviour.", working: "\\text{same e}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 11p,12n,11e (b) different neutrons (c) 20.2 (d) same electrons",
            commonErrors: ["In (c), using simple average (21)."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypc4-u1-periodic",
      title: "The Periodic Table",
      skill: "Describe groups and periods, electron arrangement, and trends in reactivity.",
      lesson: {
        sections: [
          {
            heading: "Groups and periods",
            body: "**Groups** (columns 1-18): elements in same group have same number of outer electrons → similar chemical properties. **Periods** (rows): elements have same number of electron shells; period number = shell count. Group 1 = alkali metals, Group 7 = halogens, Group 0/18 = noble gases.",
          },
          {
            heading: "Electron arrangement",
            body: "Electrons fill shells: 1st shell max 2, 2nd/3rd max 8, 4th can hold more. Sodium (Z=11): 2,8,1. Chlorine (Z=17): 2,8,7. Group number (for main groups) = outer electrons.",
          },
          {
            heading: "Trends",
            body: "Across period: metallic → non-metallic character increases; reactivity varies. Down group 1: reactivity increases (easier to lose outer electron). Down group 7: reactivity decreases (harder to gain electron). Noble gases unreactive (full outer shell).",
          },
        ],
        keyFormulas: [
          { name: "Group", statement: "Same outer electrons → similar properties" },
          { name: "Period", statement: "Same shell number" },
          { name: "Shells", statement: "2, 8, 8, ... (first shell max 2)" },
        ],
        workedExample: {
          problem: "Draw electron arrangement for magnesium (Z=12) and state its group.",
          solution: "2,8,2 — 2 outer electrons → Group 2.",
        },
      },
      questions: [
        {
          id: "mypc4-u1-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Elements in the same group have similar chemical properties because they have the same number of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutrons" },
              { id: "b", text: "Electron shells" },
              { id: "c", text: "Outer (valence) electrons" },
              { id: "d", text: "Total electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group similarity", statement: "Outer electrons determine chemical behavior." },
            ],
            steps: [
              { reasoning: "Same outer electron count → same group → similar reactions.", working: "\\text{outer electrons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Outer electrons",
            commonErrors: ["Choosing total electrons — inner shells differ."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the electron arrangement of chlorine (atomic number 17)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8,8,1" },
              { id: "b", text: "2,8,8" },
              { id: "c", text: "2,7,8" },
              { id: "d", text: "2,8,7" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Electron arrangement", statement: "Fill shells: 2, then 8, then remaining." },
            ],
            steps: [
              { reasoning: "2 in first shell, 8 in second, 7 remaining in third = 2,8,7.", working: "2,8,7", marks: 1, markCode: "M" },
              { reasoning: "State arrangement.", working: "\\text{arrangement}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2,8,7",
            commonErrors: ["Writing 2,8,8 — that's argon."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do alkali metals (Group 1) become more reactive down the group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Outer electron is further from nucleus and shielded, so easier to lose" },
              { id: "b", text: "They are heavier" },
              { id: "c", text: "They have more protons" },
              { id: "d", text: "They gain electrons more easily" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group 1 trend", statement: "Outer electron easier to lose down group → more reactive." },
            ],
            steps: [
              { reasoning: "Down group, outer shell further from nucleus.", working: "\\text{distance}", marks: 1, markCode: "M" },
              { reasoning: "More inner shells shield → weaker attraction → easier to lose electron.", working: "\\text{shielding}", marks: 1, markCode: "M" },
              { reasoning: "State consequence.", working: "\\text{more reactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outer electron easier to lose",
            commonErrors: ["Saying they gain electrons — metals lose."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider lithium (Z=3), sodium (Z=11), potassium (Z=19).",
          parts: [
            { label: "a", prompt: "Write electron arrangements for all three.", marks: 3 },
            { label: "b", prompt: "State which group they belong to and why.", marks: 2 },
            { label: "c", prompt: "Predict reactivity order down the group.", marks: 2 },
            { label: "d", prompt: "Explain why potassium reacts more vigorously with water than lithium.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Group trends", statement: "Group 1: 1 outer electron; reactivity increases down." },
            ],
            steps: [
              { part: "a", reasoning: "Li:2,1; Na:2,8,1; K:2,8,8,1.", working: "2,1;2,8,1;2,8,8,1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{arrangements}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete and correct.", working: "\\text{all 3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Group 1 — all have 1 outer electron.", working: "\\text{Group 1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State reason.", working: "\\text{1 outer e}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reactivity: K > Na > Li (increases down group).", working: "K>Na>Li", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State order.", working: "\\text{order}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "K's outer electron further/shielded → lost more easily → faster reaction.", working: "\\text{easier loss}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Li 2,1; Na 2,8,1; K 2,8,8,1 (b) Group 1 (c) K>Na>Li (d) outer electron easier to lose",
            commonErrors: ["In (c), reversing the order."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For elements in the main groups, the group number tells you the number of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protons" },
              { id: "b", text: "Neutrons" },
              { id: "c", text: "Outer (valence) electrons" },
              { id: "d", text: "Electron shells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group number", statement: "Outer electron count determines group and chemical similarity." },
            ],
            steps: [
              { reasoning: "Same outer electrons → same group → similar properties.", working: "\\text{outer e}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Outer electrons",
            commonErrors: ["Confusing group with period."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-pt-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the electron arrangement of magnesium (atomic number 12)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8,2,2" },
              { id: "b", text: "2,8,8" },
              { id: "c", text: "2,2,8" },
              { id: "d", text: "2,8,2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Electron arrangement", statement: "Fill shells: 2, then 8, then remainder." },
            ],
            steps: [
              { reasoning: "2 in first shell, 8 in second, 2 remaining in third = 2,8,2.", working: "2,8,2", marks: 1, markCode: "M" },
              { reasoning: "State arrangement.", working: "\\text{2,8,2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2,8,2",
            commonErrors: ["Writing 2,8,8 — that's argon."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An element is in period 3 of the periodic table. How many electron shells does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Period", statement: "Period number = number of electron shells." },
            ],
            steps: [
              { reasoning: "Period 3 → 3 electron shells.", working: "\\text{3 shells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering group number instead."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypc4-u1-pt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Chlorine (atomic number 17) has electron arrangement 2,8,7. How many electrons does it have in total and in its outer shell?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 17 },
              { label: "b", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Electron counting", statement: "Total = sum of shells; outer = last number." },
            ],
            steps: [
              { reasoning: "Total = 2+8+7 = 17; outer shell = 7.", working: "2+8+7=17", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "17,7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17 total, 7 outer",
            commonErrors: ["Counting only the outer shell."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are the noble gases (Group 0/18) generally unreactive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are all gases at room temperature" },
              { id: "b", text: "They are too heavy to react" },
              { id: "c", text: "They have a full outer electron shell, so they do not need to gain or lose electrons" },
              { id: "d", text: "They have no electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Noble gases", statement: "Full outer shell = stable, no tendency to react." },
            ],
            steps: [
              { reasoning: "Noble gases have complete outer shells (2 or 8 electrons).", working: "\\text{full shell}", marks: 1, markCode: "M" },
              { reasoning: "No need to gain/lose electrons → unreactive.", working: "\\text{stable}", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "\\text{unreactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full outer electron shell",
            commonErrors: ["Saying they have no electrons."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element is in period 2 and group 14. How many electron shells does it have and how many outer electrons?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Period and group", statement: "Period = shell count; group = outer electron count (main groups)." },
            ],
            steps: [
              { reasoning: "Period 2 → 2 shells.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Group 14 → 4 outer electrons.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "2,4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 shells, 4 outer electrons",
            commonErrors: ["Using group 14 directly as 14 electrons."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does reactivity increase down Group 1 (alkali metals)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atoms get smaller down the group" },
              { id: "b", text: "Their outer shells become full" },
              { id: "c", text: "The outer electron is further from the nucleus and more shielded, so it is lost more easily" },
              { id: "d", text: "They gain electrons more easily" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group 1 trend", statement: "Easier loss of outer electron down group → more reactive." },
            ],
            steps: [
              { reasoning: "Down group, outer shell is further from nucleus with more shielding.", working: "\\text{distance+shield}", marks: 1, markCode: "M" },
              { reasoning: "Weaker attraction → electron lost more easily.", working: "\\text{easier loss}", marks: 1, markCode: "M" },
              { reasoning: "State consequence.", working: "\\text{more reactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outer electron easier to lose",
            commonErrors: ["Saying they gain electrons."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element has atomic number 12 and is in period 3. How many protons, outer electrons and electron shells does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 2 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Periodic position", statement: "Z=12 → arrangement 2,8,2; period 3 → 3 shells, 2 outer electrons." },
            ],
            steps: [
              { reasoning: "Protons = atomic number = 12.", working: "Z=12", marks: 1, markCode: "M" },
              { reasoning: "Arrangement 2,8,2 → 2 outer electrons; period 3 → 3 shells.", working: "2,8,2", marks: 1, markCode: "M" },
              { reasoning: "State all three answers.", working: "12,2,3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 protons, 2 outer electrons, 3 shells",
            commonErrors: ["Confusing period number with group."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of electrons in the first electron shell?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell capacity", statement: "First shell holds max 2 electrons; next shells hold 8." },
            ],
            steps: [
              { reasoning: "First shell maximum = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 8."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u1-pt-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element has electron arrangement 2,8,6. How many electrons are in its outer shell and which period is it in?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Arrangement reading", statement: "Outer electrons = last number; period = number of shells." },
            ],
            steps: [
              { reasoning: "Outer shell = 6; three shells listed → period 3.", working: "6,3", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "6\\text{ outer},3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 outer electrons, period 3",
            commonErrors: ["Counting all shells as outer."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-pt-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Groups and periods in the periodic table.",
          parts: [
            { label: "a", prompt: "Define what a group and a period each represent.", marks: 2 },
            { label: "b", prompt: "Write the electron arrangement of aluminium (Z = 13).", marks: 1 },
            { label: "c", prompt: "State the group and period of aluminium.", marks: 1 },
            { label: "d", prompt: "Predict which is more reactive: sodium or potassium, and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Periodic table", statement: "Groups = same outer electrons; periods = same shells." },
            ],
            steps: [
              { part: "a", reasoning: "Group = vertical column, same outer electron count; period = horizontal row, same shell count.", working: "\\text{group/period}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both definitions correct.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Aluminium: 2,8,3.", working: "2,8,3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Group 13 (3 outer electrons), period 3.", working: "G13,P3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Potassium more reactive — outer electron further/shielded, lost more easily.", working: "K>Na", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct order and reason.", working: "\\text{K more reactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) group=outer e, period=shells (b) 2,8,3 (c) G13 P3 (d) K > Na",
            commonErrors: ["In (c), giving group 3 instead of 13."],
            examinerNote: "M1 A1 for (a), A1 for (b),(c), M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-pt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider fluorine (Z=9), neon (Z=10) and sodium (Z=11).",
          parts: [
            { label: "a", prompt: "Write the electron arrangement of each element.", marks: 3 },
            { label: "b", prompt: "State the group of each element.", marks: 1 },
            { label: "c", prompt: "Explain why neon is unreactive but fluorine is reactive.", marks: 2 },
            { label: "d", prompt: "Predict the reactivity order of fluorine and sodium and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Periodic trends", statement: "Electron arrangement determines group and reactivity." },
            ],
            steps: [
              { part: "a", reasoning: "F: 2,7; Ne: 2,8; Na: 2,8,1.", working: "2,7;2,8;2,8,1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "F = Group 17 (7 outer); Ne = Group 18 (8 outer); Na = Group 1 (1 outer).", working: "17,18,1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ne has full outer shell (stable); F has 7 outer electrons, needs 1 more → reactive.", working: "\\text{full vs 7}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct explanation.", working: "\\text{reactivity}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Na more reactive than F — Na easily loses its 1 outer electron; F strongly attracts electrons.", working: "Na>F", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct order with reason.", working: "\\text{order+why}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) F 2,7; Ne 2,8; Na 2,8,1 (b) G17,G18,G1 (c) Ne full shell, F needs 1e (d) Na > F",
            commonErrors: ["In (d), comparing across groups without considering electron loss vs gain."],
            examinerNote: "M1 M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
      ],
    },
  ],
};
