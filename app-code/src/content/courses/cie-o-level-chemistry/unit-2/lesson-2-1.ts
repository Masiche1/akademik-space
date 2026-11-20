import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "olchem-u2-lesson-2-1",
  code: "2-1",
  title: "Atomic Structure and the Periodic Table",
  goal: "I CAN describe atomic structure, electron arrangement and locate elements in the periodic table.",
  standards: ["5070 2.1", "5070 2.2"],
  vocabulary: [
    { term: "Atom", definition: "Smallest particle of an element; nucleus of protons + neutrons, orbiting electrons." },
    { term: "Atomic number", definition: "Number of protons; defines the element." },
    { term: "Mass number", definition: "Protons + neutrons." },
    { term: "Isotope", definition: "Same element, different neutrons → different mass numbers." },
    { term: "Electron arrangement", definition: "Distribution of electrons in shells, e.g. 2.8.1." },
    { term: "Group", definition: "Vertical column; same outer electrons → similar chemical properties." },
    { term: "Period", definition: "Horizontal row; same number of occupied shells." },
    { term: "Relative atomic mass (Ar)", definition: "Average mass of atoms compared to 1/12 of carbon-12." },
  ],
  concepts: [
    {
      id: "olchem-u2-atomic-structure",
      title: "Atoms, isotopes and electron arrangement",
      skill: "Describe subatomic particles, isotopes and electron shell arrangements.",
      lesson: {
        sections: [
          {
            heading: "Subatomic particles",
            body: "| Particle | Charge | Mass | Location |\n|---|---|---|---|\n| Proton | +1 | ~1 | nucleus |\n| Neutron | 0 | ~1 | nucleus |\n| Electron | −1 | ~1/1840 | shells |\n\nNeutral atom: protons = electrons. Mass number = protons + neutrons.",
          },
          {
            heading: "Electron arrangement",
            body: "Electrons fill shells in order: **2, 8, 8** (first shell max 2, second/third max 8). E.g. sodium (11) = 2.8.1. The **outer shell electrons** determine chemical behaviour.",
          },
          {
            heading: "Isotopes",
            body: "Same protons, different neutrons → same chemical properties, different physical properties (mass). E.g. carbon-12 and carbon-14. Chlorine's Ar ≈ 35.5 because it's a mix of isotopes.",
          },
        ],
        keyFormulas: [
          { name: "Mass number", statement: "$A = \\text{protons} + \\text{neutrons}$" },
        ],
        workedExample: {
          problem: "An atom has 17 protons and 20 neutrons. Give its mass number and electron arrangement.",
          solution: "A = 17 + 20 = 37. Electrons = 17 (neutral) → arrangement 2.8.7 (chlorine).",
        },
      },
      questions: [
        {
          id: "olchem-u2-atomic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle has a relative charge of −1?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Proton" }, { id: "b", text: "Neutron" }, { id: "c", text: "Electron" }, { id: "d", text: "Nucleus" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Subatomic particles", statement: "Electron −1, proton +1, neutron 0." }],
            steps: [{ reasoning: "Recall charges.", working: "e^- = -1", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Electron",
            commonErrors: ["Confusing proton (+1) with electron (−1)."],
          },
        },
        {
          id: "olchem-u2-atomic-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom has atomic number 12 and mass number 24. State the numbers of protons, neutrons and electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Nucleon numbers", statement: "Z = protons; A = protons + neutrons; electrons = protons (neutral)." }],
            steps: [
              { reasoning: "Protons = Z = 12.", working: "p = 12", marks: 1, markCode: "M" },
              { reasoning: "Neutrons = 24−12 = 12; electrons = 12.", working: "n = 12, e = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 protons, 12 neutrons, 12 electrons.",
            commonErrors: ["Using mass number for electrons — electrons = atomic number."],
          },
        },
        {
          id: "olchem-u2-atomic-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why isotopes have the same chemical properties but different physical properties.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Isotopes", statement: "Same protons/electrons → same chemistry; different neutrons → different mass." }],
            steps: [
              { reasoning: "Same atomic number → same electron arrangement.", marks: 1, markCode: "M" },
              { reasoning: "Same electrons → same chemical behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Different neutrons → different mass number.", marks: 1, markCode: "M" },
              { reasoning: "Conclude physical difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isotopes have the same protons and electrons (same chemistry), but different numbers of neutrons give different masses (different physical properties like density).",
            commonErrors: ["Saying 'same everything except name'."],
          },
        },
        {
          id: "olchem-u2-atomic-structure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the structure of an atom and the arrangement of electrons.",
          parts: [
            { label: "a", prompt: "Describe the nucleus and its particles.", marks: 3 },
            { label: "b", prompt: "Describe electron shells and their capacities.", marks: 3 },
            { label: "c", prompt: "Give the electron arrangement of calcium (Z = 20).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Atomic structure", statement: "Nucleus: protons+neutrons. Shells fill 2,8,8." }],
            steps: [
              { part: "a", reasoning: "Nucleus contains protons and neutrons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Electrons orbit in shells.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "First shell max 2.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second/third shells max 8.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "20 electrons → fill shells.", working: "2.8.8.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct arrangement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nucleus p+n, electrons in shells (b) 2,8,8 capacities (c) 2.8.8.2",
            commonErrors: ["In (c) writing 2.8.10 — third shell holds max 8 before fourth opens."],
          },
        },
      ],
    },
    {
      id: "olchem-u2-periodic-table",
      title: "The periodic table",
      skill: "Explain groups, periods and how position relates to electron arrangement and properties.",
      lesson: {
        sections: [
          {
            heading: "Groups and periods",
            body: "- **Group number** = number of outer-shell electrons (for Groups 1, 2, 13–18).\n- **Period number** = number of occupied electron shells.\n- Elements in the same group have similar chemical properties (same outer electrons).",
          },
          {
            heading: "Key groups",
            body: "| Group | Name | Outer e⁻ | Examples |\n|---|---|---|---|\n| 1 | Alkali metals | 1 | Li, Na, K |\n| 2 | Alkaline earth | 2 | Mg, Ca |\n| 17 | Halogens | 7 | F, Cl, Br |\n| 18 | Noble gases | 8 (full) | He, Ne, Ar |",
          },
          {
            heading: "Trends",
            body: "Down a group: atomic size increases, metallic character increases (alkali metals get more reactive). Across a period: metallic → non-metallic character increases.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An element is in Group 2, Period 3. How many outer electrons does it have and what's its electron arrangement?",
          solution: "Group 2 → 2 outer electrons. Period 3 → 3 shells → arrangement 2.8.2 (magnesium).",
        },
      },
      questions: [
        {
          id: "olchem-u2-periodic-table-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Elements in the same group have similar chemical properties because they have the same:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Number of shells" }, { id: "b", text: "Number of outer electrons" }, { id: "c", text: "Mass number" }, { id: "d", text: "Atomic radius" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Groups", statement: "Same outer electrons → similar chemistry." }],
            steps: [{ reasoning: "Recall rule.", working: "\\text{outer e}^-", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Number of outer electrons",
            commonErrors: ["Choosing shells — that's period, not group."],
          },
        },
        {
          id: "olchem-u2-periodic-table-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element has electron arrangement 2.8.7. State its group and period.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Group/period", statement: "Group = outer e⁻; period = number of shells." }],
            steps: [
              { reasoning: "7 outer electrons → Group 17.", working: "\\text{Group 17}", marks: 1, markCode: "M" },
              { reasoning: "3 shells → Period 3.", working: "\\text{Period 3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group 17, Period 3.",
            commonErrors: ["Swapping group and period."],
          },
        },
        {
          id: "olchem-u2-periodic-table-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why noble gases are unreactive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Noble gases", statement: "Full outer shell → stable → unreactive." }],
            steps: [
              { reasoning: "Group 18 → 8 outer electrons (full shell).", marks: 1, markCode: "M" },
              { reasoning: "Stable configuration needs no change.", marks: 1, markCode: "M" },
              { reasoning: "No tendency to gain/lose/share electrons.", marks: 1, markCode: "M" },
              { reasoning: "Conclude unreactive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Noble gases have full outer electron shells — a stable arrangement — so they have no tendency to gain, lose or share electrons and are unreactive.",
            commonErrors: ["Saying 'they have no electrons' — they have full shells."],
          },
        },
        {
          id: "olchem-u2-periodic-table-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how position in the periodic table relates to electron arrangement and properties.",
          parts: [
            { label: "a", prompt: "Explain what group number tells you.", marks: 2 },
            { label: "b", prompt: "Explain what period number tells you.", marks: 2 },
            { label: "c", prompt: "Describe the trend in metallic character down Group 1.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Periodic trends", statement: "Group = outer e⁻; period = shells; metallic character increases down groups." }],
            steps: [
              { part: "a", reasoning: "Group number = outer electrons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Same group → similar chemistry.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Period number = occupied shells.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Down group → more shells → outer e⁻ further from nucleus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less attraction → easier to lose e⁻.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reactivity increases down Group 1.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) group=outer e⁻→similar properties (b) period=shells (c) more shells→e⁻ lost easier→more reactive",
            commonErrors: ["In (c) saying reactivity decreases — it increases down Group 1."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u2-atomic-notes",
      title: "Atomic structure and periodic table — revision notes",
      summary: "Subatomic particles, isotopes, electron arrangement 2.8.x, groups/periods, noble gases.",
      sections: [
        {
          heading: "Key facts",
          body: "Proton +1, neutron 0, electron −1. A = p+n; Z = p = e⁻ (neutral). Shells fill 2,8,8. Group = outer e⁻, period = shells. Noble gases: full shell → unreactive. Down Group 1: more reactive.",
        },
        {
          heading: "Exam technique",
          body: "- Electron arrangement: fill 2 then 8 then 8 — calcium (20) = 2.8.8.2.\n- Link group/period to electron arrangement, not memorised facts.",
        },
      ],
    },
  ],
};
