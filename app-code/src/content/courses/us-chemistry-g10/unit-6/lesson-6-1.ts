import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "chem10-u6-lesson-6-1",
  code: "6-1",
  title: "Electron Configuration and the Periodic Table",
  goal: "I CAN write electron configurations, relate electron arrangement to group and period, and explain periodic trends in atomic properties.",
  standards: [
    "HS-PS1-1",
    "SEP: Using Mathematics and Computational Thinking",
    "CCC: Patterns",
  ],
  vocabulary: [
    {
      term: "Electron configuration",
      definition: "The arrangement of electrons in atomic orbitals.",
    },
    {
      term: "Aufbau principle",
      definition: "Electrons fill lowest-energy orbitals first.",
    },
    {
      term: "Pauli exclusion principle",
      definition:
        "No two electrons in an atom can have identical quantum numbers.",
    },
    {
      term: "Hund's rule",
      definition: "Electrons occupy degenerate orbitals singly before pairing.",
    },
    {
      term: "Valence electrons",
      definition: "Electrons in the outermost shell.",
    },
    {
      term: "Shielding",
      definition:
        "Inner electrons reduce nuclear attraction on outer electrons.",
    },
    {
      term: "Effective nuclear charge",
      definition: "Net positive charge felt by valence electrons.",
    },
  ],
  concepts: [
    {
      id: "chem10-u6-electron-config",
      title: "Writing electron configurations",
      skill:
        "Apply the Aufbau principle, Pauli exclusion, and Hund's rule to write configurations.",
      lesson: {
        sections: [
          {
            heading: "Orbital filling order",
            body: "Orbitals fill in order of increasing energy: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p.\n\n- **Aufbau**: fill lowest energy first.\n- **Pauli**: max 2 electrons per orbital, opposite spins.\n- **Hund's**: one electron per orbital before pairing.",
          },
          {
            heading: "Examples",
            body: "- Nitrogen (Z=7): 1s²2s²2p³ — three unpaired p electrons.\n- Oxygen (Z=8): 1s²2s²2p⁴ — one pair, two unpaired.\n- Iron (Z=26): [Ar]4s²3d⁶ — note 4s fills before 3d.",
          },
        ],
        keyFormulas: [
          {
            name: "Orbital order",
            statement: "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p",
          },
          {
            name: "Max electrons",
            statement: "s=2, p=6, d=10, f=14 per subshell",
          },
        ],
        workedExample: {
          problem: "Write the electron configuration for sulfur (Z=16).",
          solution: "1s² 2s² 2p⁶ 3s² 3p⁴ = [Ne] 3s² 3p⁴.",
        },
      },
      questions: [
        {
          id: "chem10-u6-econfig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Hund's rule state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrons fill lowest energy first" },
              {
                id: "b",
                text: "Electrons occupy degenerate orbitals singly before pairing",
              },
              { id: "c", text: "No two electrons share quantum numbers" },
              { id: "d", text: "Max 2 electrons per orbital" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hund's rule",
                statement: "Singly occupy before pairing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hund's rule = unpaired electrons first in degenerate orbitals.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Singly occupy before pairing",
            commonErrors: ["Confusing with Pauli or Aufbau."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-econfig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the electron configuration for chlorine (Z=17) and state its number of unpaired electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Configuration",
                statement: "1s²2s²2p⁶3s²3p⁵",
              },
              {
                kind: "principle",
                name: "Hund's rule",
                statement: "Unpaired electrons in p orbitals.",
              },
            ],
            steps: [
              {
                reasoning: "17 electrons: 1s²2s²2p⁶3s²3p⁵.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3p⁵ = two paired, one unpaired.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "1 unpaired electron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1s²2s²2p⁶3s²3p⁵; 1 unpaired electron.",
            commonErrors: ["Wrong electron count."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u6-econfig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 4s fills before 3d, but 4s electrons are removed first in transition metals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbital energy",
                statement: "4s lower energy than 3d during filling.",
              },
              {
                kind: "principle",
                name: "Ionization",
                statement: "Once 3d fills, 4s becomes higher energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "During neutral atom filling, 4s has lower energy than 3d.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "After 3d electrons occupy, 4s electrons are farther from nucleus and shielded.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Removing 4s first minimizes energy cost.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: Fe is [Ar]4s²3d⁶ but Fe²⁺ is [Ar]3d⁶.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "4s fills first (lower energy); 4s removed first (higher energy after 3d fills).",
            commonErrors: ["Not explaining the energy reversal."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u6-econfig-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Elements: Na (Z=11), Mg (Z=12), Al (Z=13), Si (Z=14).",
          parts: [
            {
              label: "a",
              prompt: "Write electron configurations for each.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many valence electrons does each have?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Predict the group number for each.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Which is most reactive metal? Justify.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Configuration",
                statement: "Write from Z.",
              },
              {
                kind: "principle",
                name: "Valence electrons",
                statement: "Outermost shell electrons = group number.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na: [Ne]3s¹; Mg: [Ne]3s²; Al: [Ne]3s²3p¹; Si: [Ne]3s²3p².",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Valence: Na=1, Mg=2, Al=3, Si=4.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Groups: Na=1, Mg=2, Al=13, Si=14.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Na most reactive — easiest to lose 1 electron to achieve noble gas config.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) Configs (b) 1,2,3,4 (c) 1,2,13,14 (d) Na.",
            commonErrors: ["Counting all electrons as valence."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u6-periodic-trends",
      title: "Periodic trends",
      skill:
        "Explain and predict trends in atomic radius, ionization energy, and electronegativity.",
      lesson: {
        sections: [
          {
            heading: "Atomic radius",
            body: "- **Across a period**: decreases — nuclear charge increases, same shell → stronger pull.\n- **Down a group**: increases — more electron shells → larger atom.",
          },
          {
            heading: "Ionization energy",
            body: "Energy to remove an electron.\n- **Across**: increases — harder to remove with higher nuclear charge.\n- **Down**: decreases — outer electron farther, more shielded.",
          },
          {
            heading: "Electronegativity",
            body: "Ability to attract bonding electrons.\n- **Across**: increases toward F.\n- **Down**: decreases — larger atoms hold electrons less tightly.",
          },
        ],
        keyFormulas: [
          { name: "Atomic radius", statement: "↓ across, ↑ down" },
          { name: "Ionization energy", statement: "↑ across, ↓ down" },
          {
            name: "Electronegativity",
            statement: "↑ across, ↓ down; max at F",
          },
        ],
        workedExample: {
          problem: "Rank Na, Mg, Al by atomic radius.",
          solution: "Na > Mg > Al — radius decreases across period 3.",
        },
      },
      questions: [
        {
          id: "chem10-u6-trends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to atomic radius going down a group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases" },
              { id: "b", text: "Increases" },
              { id: "c", text: "Stays the same" },
              { id: "d", text: "Depends on the element" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Atomic radius",
                statement: "Increases down a group.",
              },
            ],
            steps: [
              {
                reasoning: "More shells going down → larger radius.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Increases",
            commonErrors: ["Applying across-period trend."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-trends-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why ionization energy increases across a period.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuclear charge",
                statement: "Z increases across period.",
              },
              {
                kind: "principle",
                name: "Shielding",
                statement: "Same shell → similar shielding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protons increase across period → stronger nuclear attraction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Electrons in same shell → similar shielding.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Net effect: harder to remove electron → higher IE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Increasing nuclear charge with similar shielding → higher IE.",
            commonErrors: ["Not mentioning shielding."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u6-trends-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rank F, Cl, Br by electronegativity and explain the trend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Electronegativity",
                statement: "Decreases down a group.",
              },
              {
                kind: "principle",
                name: "Atomic size",
                statement: "Larger atoms hold electrons less tightly.",
              },
            ],
            steps: [
              { reasoning: "F > Cl > Br.", marks: 1, markCode: "M" },
              {
                reasoning: "F smallest → strongest pull on bonding electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Down group: more shells → larger → weaker pull.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "F is most electronegative element.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "F > Cl > Br; decreases down group due to size.",
            commonErrors: ["Reversing the trend."],
            examinerNote: "M1, R2, A1.",
          },
        },
        {
          id: "chem10-u6-trends-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare Na and Cl (both period 3).",
          parts: [
            { label: "a", prompt: "Atomic radius comparison?", marks: 2 },
            { label: "b", prompt: "Ionization energy comparison?", marks: 2 },
            { label: "c", prompt: "Electronegativity comparison?", marks: 2 },
            {
              label: "d",
              prompt: "Explain why Na loses electrons and Cl gains them.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Trends",
                statement: "Na left, Cl right of period 3.",
              },
              {
                kind: "principle",
                name: "Octet rule",
                statement: "Atoms seek noble gas configuration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na larger than Cl — Na has lower effective nuclear charge.",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Cl has higher IE — harder to remove electron.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Cl more electronegative — attracts electrons strongly.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Na: 3 valence e⁻ → loses 1 → Na⁺ (noble gas config).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Cl: 7 valence e⁻ → gains 1 → Cl⁻ (noble gas config).",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Both achieve stability → ionic bond.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) Na>Cl (b) Cl>Na (c) Cl>Na (d) Na loses, Cl gains → ionic.",
            commonErrors: ["Reversing trends."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u6-isotopes",
      title: "Isotopes and atomic mass",
      skill: "Calculate average atomic mass from isotope abundances.",
      lesson: {
        sections: [
          {
            heading: "Isotopes",
            body: "**Isotopes**: same element, different neutrons → different mass numbers. Same chemical properties (same electrons), different physical properties (mass).\n\nExample: Carbon-12 (6n), Carbon-13 (7n), Carbon-14 (8n, radioactive).",
          },
          {
            heading: "Average atomic mass",
            body: "$$(\text{mass}_1 \times \text{abundance}_1) + (\text{mass}_2 \times \text{abundance}_2)$$\n\nAbundances as decimals or percentages (divide % by 100). Weighted average of all isotopes.",
          },
        ],
        keyFormulas: [
          {
            name: "Average atomic mass",
            statement: "$\\sum(\\text{mass} \\times \\text{abundance})$",
          },
          { name: "Isotope", statement: "Same protons, different neutrons" },
        ],
        workedExample: {
          problem:
            "Boron has ¹⁰B (19.9%, 10.01 amu) and ¹¹B (80.1%, 11.01 amu). Average mass?",
          solution:
            "$(10.01 \\times 0.199) + (11.01 \\times 0.801) = 1.99 + 8.82 = 10.81$ amu.",
        },
      },
      questions: [
        {
          id: "chem10-u6-isotopes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What defines isotopes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same neutrons, different protons" },
              { id: "b", text: "Same protons, different neutrons" },
              { id: "c", text: "Different elements" },
              { id: "d", text: "Different electrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isotope",
                statement: "Same protons, different neutrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isotopes vary in neutron count → different mass numbers.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Same protons, different neutrons",
            commonErrors: ["Confusing with ions."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-isotopes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Chlorine has ³⁵Cl (75.8%, 34.97 amu) and ³⁷Cl (24.2%, 36.97 amu). Calculate average atomic mass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weighted average",
                statement: "$\\sum(m \\times a)$",
              },
            ],
            steps: [
              {
                reasoning: "Convert % to decimals: 0.758 and 0.242.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$(34.97 \\times 0.758) + (36.97 \\times 0.242) = 26.51 + 8.95 = 35.46$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 35.46 amu.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35.46 amu.",
            commonErrors: ["Using percentages directly."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u6-isotopes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do isotopes have the same chemical properties but different physical properties?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemistry",
                statement: "Chemical properties depend on electrons.",
              },
              {
                kind: "principle",
                name: "Physics",
                statement: "Physical properties depend on mass.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isotopes have same protons → same electron configuration.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Same electrons → same chemical behavior.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Different neutrons → different mass → different physical properties (density, diffusion rate).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Example: D₂O (heavy water) has higher boiling point than H₂O.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Same electrons = same chemistry; different mass = different physics.",
            commonErrors: ["Not linking to electrons vs mass."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u6-isotopes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An element has three isotopes: A (mass 10, abundance 20%), B (mass 11, abundance 60%), C (mass 12, abundance 20%).",
          parts: [
            { label: "a", prompt: "Calculate average atomic mass.", marks: 4 },
            {
              label: "b",
              prompt: "If sample has 100 atoms, how many of each isotope?",
              marks: 3,
            },
            { label: "c", prompt: "Which isotope is most abundant?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weighted average",
                statement: "$\\sum(m \\times a)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$10 \\times 0.20 + 11 \\times 0.60 + 12 \\times 0.20$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$= 2.0 + 6.6 + 2.4 = 11.0$ amu.",
                marks: 2,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "A: 20 atoms; B: 60 atoms; C: 20 atoms.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Isotope B (60%).",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 11.0 amu (b) 20, 60, 20 (c) B.",
            commonErrors: ["Not converting % to decimals."],
            examinerNote: "4+3+1 = 8.",
          },
        },
      ],
    },
  ],
};
