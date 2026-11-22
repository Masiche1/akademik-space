import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypc5-u1-lesson-1-1",
  code: "1-1",
  title: "Electron Configuration and Shells",
  goal: "I CAN write electron configurations, describe shell and subshell occupancy, and link configuration to group and period.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Electron configuration", definition: "Arrangement of electrons in shells/subshells; e.g. Na 2,8,1 or 1s²2s²2p⁶3s¹." },
    { term: "Shell", definition: "Energy level around nucleus; shells hold up to 2n² electrons (n = shell number)." },
    { term: "Subshell", definition: "Subdivision of a shell: s (2 e⁻), p (6 e⁻), d (10 e⁻); named 1s, 2p, 3d etc." },
    { term: "Valence electrons", definition: "Electrons in the outermost shell; determine chemical reactivity." },
    { term: "Orbital", definition: "Region where an electron is most likely found; holds maximum 2 electrons." },
    { term: "Group", definition: "Vertical column; elements share the same number of valence electrons." },
  ],
  concepts: [
    {
      id: "mypc5-u1-config",
      title: "Electron shells and configuration",
      skill: "Write electron configurations using shell notation and subshell notation, and explain shell capacity.",
      lesson: {
        sections: [
          {
            heading: "Shells and capacity",
            body: "Electrons occupy energy levels (shells) around the nucleus. Capacity of shell n is **2n²**: shell 1 holds 2, shell 2 holds 8, shell 3 holds 18 (but fills to 8 before shell 4 begins in early elements). Inner shells fill first because they are lower in energy.",
          },
          {
            heading: "Subshell notation",
            body: "Subshells fill in order **1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p** (the aufbau order). s holds 2 electrons, p holds 6, d holds 10. Chlorine (Z=17): 1s²2s²2p⁶3s²3p⁵. Sodium (Z=11): 1s²2s²2p⁶3s¹.",
          },
          {
            heading: "Reading configurations",
            body: "The highest occupied shell gives the **period**; the number of valence electrons gives the **group** for main-group elements. E.g. magnesium 1s²2s²2p⁶3s² is in period 3, group 2. Noble gases have full outer shells: helium 1s², neon 1s²2s²2p⁶.",
          },
        ],
        keyFormulas: [
          { name: "Shell capacity", statement: "Shell n holds maximum 2n^2 electrons" },
          { name: "Subshell order", statement: "1s 2s 2p 3s 3p 4s 3d 4p (aufbau order)" },
          { name: "Period/group", statement: "Period = highest shell; group = valence electrons" },
        ],
        workedExample: {
          problem: "Write the electron configuration of calcium (Z = 20) using subshell notation.",
          solution: "1s²2s²2p⁶3s²3p⁶4s² — twenty electrons filled in aufbau order, ending in 4s².",
        },
      },
      questions: [
        {
          id: "mypc5-u1-config-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of electrons in shell 2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18" },
              { id: "b", text: "2" },
              { id: "c", text: "8" },
              { id: "d", text: "32" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell capacity", statement: "Shell n holds 2n² electrons; n=2 → 8." },
            ],
            steps: [
              { reasoning: "2n² for n=2 gives 2×4 = 8 electrons.", working: "2\\times2^2=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 8",
            commonErrors: ["Using n² instead of 2n², giving 4."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-config-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the electron configuration of sodium (Z = 11)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1s²2s²2p⁶3s¹" },
              { id: "b", text: "2,8,2" },
              { id: "c", text: "1s²2s²2p⁶3s²3p¹" },
              { id: "d", text: "1s²2s²2p⁵3s²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aufbau order", statement: "Subshells fill 1s,2s,2p,3s,3p in order up to 11 electrons." },
            ],
            steps: [
              { reasoning: "Count 11 electrons: 2+2+6 fills 1s²2s²2p⁶.", working: "1s^2\\,2s^2\\,2p^6", marks: 1, markCode: "M" },
              { reasoning: "Remaining 1 electron enters 3s → 3s¹.", working: "3s^1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1s²2s²2p⁶3s¹ (shell notation 2,8,1)",
            commonErrors: ["Putting the 11th electron in 3p instead of 3s."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An atom has configuration 1s²2s²2p⁶3s²3p⁴. State its period, group and number of valence electrons.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Period 3, group 6, 4 valence electrons" },
              { id: "b", text: "Period 4, group 16, 6 valence electrons" },
              { id: "c", text: "Period 3, group 16, 6 valence electrons" },
              { id: "d", text: "Period 3, group 8, 2 valence electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Configuration reading", statement: "Highest shell = period; outer electrons = group/valence." },
            ],
            steps: [
              { reasoning: "Highest occupied shell is n=3 → period 3.", working: "\\text{period }3", marks: 1, markCode: "M" },
              { reasoning: "3s²3p⁴ → 6 outer electrons → group 16 (16 valence e⁻ total incl. s).", working: "6\\text{ valence}", marks: 1, markCode: "M" },
              { reasoning: "Group = 16 for 6 valence electrons (8-6 = 2 from end).", working: "\\text{group }16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period 3, group 16, 6 valence electrons",
            commonErrors: ["Reading group as 6 instead of 16 for main-group elements."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates the flame colours of metal salts.",
          parts: [
            { label: "a", prompt: "Identify the independent and dependent variables in this investigation.", marks: 2 },
            { label: "b", prompt: "Write the electron configuration of potassium (Z = 19) in shell notation.", marks: 2 },
            { label: "c", prompt: "Explain why potassium's single valence electron makes it highly reactive.", marks: 2 },
            { label: "d", prompt: "Describe how the flame test result would be used in real life, e.g. in fireworks or forensic analysis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Variables", statement: "Independent = what is changed; dependent = what is measured; others controlled." },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: identity/type of metal salt; dependent: flame colour observed.", working: "\\text{IV salt, DV colour}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controlled: amount of salt, flame temperature, observation conditions.", working: "\\text{controlled}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "K (Z=19): 1s²2s²2p⁶3s²3p⁶4s¹ → shells 2,8,8,1.", working: "2,8,8,1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct shell notation.", working: "4s^1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One valence electron is easily lost → K⁺ forms; strong reducing agent.", working: "K\\to K^+ + e^-", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State reactivity consequence.", working: "\\text{reactive}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Flame colours identify metals: fireworks give coloured light; forensics identifies elements in evidence.", working: "\\text{fireworks}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Link to real-life application.", working: "\\text{application}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) salt type / flame colour (b) 2,8,8,1 (c) loses 1 e⁻ easily (d) fireworks, forensics",
            commonErrors: ["In (c), saying potassium gains electrons."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-config-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of electrons that can occupy shell 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "18" },
              { id: "c", text: "32" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell capacity", statement: "Shell n holds maximum 2n² electrons; n=3 → 18." },
            ],
            steps: [
              { reasoning: "2n² for n=3 gives 2×9 = 18 electrons.", working: "2\\times3^2=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 18",
            commonErrors: ["Using 8 because shell 2 holds 8."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-config-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to the aufbau order, which subshell fills immediately after 3p?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4p" },
              { id: "b", text: "5s" },
              { id: "c", text: "3d" },
              { id: "d", text: "4s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aufbau order", statement: "1s 2s 2p 3s 3p 4s 3d 4p — 4s fills before 3d." },
            ],
            steps: [
              { reasoning: "After 3p comes 4s in the aufbau sequence.", working: "3p\\to4s", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 4s",
            commonErrors: ["Choosing 3d — 4s fills before 3d."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-config-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the electron configuration of magnesium (Z = 12)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1s²2s²2p⁵3s³" },
              { id: "b", text: "1s²2s²2p⁶3s²" },
              { id: "c", text: "1s²2s²2p⁶3s¹3p¹" },
              { id: "d", text: "2,8,2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aufbau order", statement: "Subshells fill 1s,2s,2p,3s in order up to 12 electrons." },
            ],
            steps: [
              { reasoning: "Count 12 electrons: 2+2+6 fills 1s²2s²2p⁶.", working: "1s^2\\,2s^2\\,2p^6", marks: 1, markCode: "M" },
              { reasoning: "Remaining 2 electrons enter 3s → 3s².", working: "3s^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1s²2s²2p⁶3s² (shell notation 2,8,2)",
            commonErrors: ["Spreading the last two electrons into 3p instead of pairing in 3s."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the following values for electron configuration.",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum electrons in shell 4", answer: 32, unit: "electrons" },
              { label: "Valence electrons in a chlorine atom", answer: 7, unit: "electrons" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Shell capacity", statement: "Shell n holds 2n² electrons." },
            ],
            steps: [
              { reasoning: "Shell 4 capacity = 2×16 = 32.", working: "2\\times4^2=32", marks: 1, markCode: "M" },
              { reasoning: "Cl is 1s²2s²2p⁶3s²3p⁵ → 7 outer electrons.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32 electrons; 7 valence electrons",
            commonErrors: ["Counting all 17 electrons of chlorine as valence."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do electrons fill the inner shells before the outer shells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inner shells are larger" },
              { id: "b", text: "Electrons prefer to be near the nucleus" },
              { id: "c", text: "Inner shells are lower in energy, so electrons occupy them first" },
              { id: "d", text: "Outer shells cannot hold electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy levels", statement: "Lower-energy states fill first (aufbau principle)." },
            ],
            steps: [
              { reasoning: "Shells/subshells are energy levels; lowest energy fills first.", working: "E_{inner}<E_{outer}", marks: 1, markCode: "M" },
              { reasoning: "This gives the observed aufbau filling order.", working: "\\text{aufbau}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inner shells are lower in energy",
            commonErrors: ["Saying electrons fill randomly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element has the configuration 1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p³. State its period, group and number of valence electrons.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Period 4, group 13, 3 valence electrons" },
              { id: "b", text: "Period 4, group 5, 3 valence electrons" },
              { id: "c", text: "Period 3, group 15, 5 valence electrons" },
              { id: "d", text: "Period 4, group 15, 5 valence electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Configuration reading", statement: "Highest shell = period; outer s+p electrons = valence count." },
            ],
            steps: [
              { reasoning: "Highest occupied shell is n=4 → period 4.", working: "\\text{period }4", marks: 1, markCode: "M" },
              { reasoning: "4s²4p³ → 2+3 = 5 valence electrons.", working: "5\\text{ valence}", marks: 1, markCode: "M" },
              { reasoning: "5 valence electrons → group 15.", working: "\\text{group }15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period 4, group 15, 5 valence electrons (arsenic)",
            commonErrors: ["Counting 3d electrons as valence — they are inner for period 4 elements."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element is written in shell notation as 2,8,7. Determine its total number of electrons, period and group.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total electrons", answer: 17, unit: "electrons" },
              { label: "Period number", answer: 3 },
              { label: "Group number", answer: 17 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shell notation", statement: "Numbers give electrons per shell; count = atomic number." },
            ],
            steps: [
              { reasoning: "Total = 2+8+7 = 17 electrons.", working: "2+8+7=17", marks: 1, markCode: "M" },
              { reasoning: "Three shells occupied → period 3.", working: "\\text{period }3", marks: 1, markCode: "M" },
              { reasoning: "7 outer electrons → group 17.", working: "\\text{group }17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17 electrons; period 3; group 17 (chlorine)",
            commonErrors: ["Giving group 7 instead of 17 for main-group element."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct electron configuration of neon (Z = 10)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2,8,1" },
              { id: "b", text: "1s²2s²2p⁵" },
              { id: "c", text: "1s²2s²2p⁶3s¹" },
              { id: "d", text: "1s²2s²2p⁶" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Noble gas config", statement: "Neon fills 1s²2s²2p⁶ — a full outer shell." },
            ],
            steps: [
              { reasoning: "10 electrons fill 1s²2s²2p⁶ completely.", working: "1s^2\\,2s^2\\,2p^6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 1s²2s²2p⁶",
            commonErrors: ["Adding a 3s electron — neon's outer shell is already full."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-config-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calcium (Z = 20) has configuration 1s²2s²2p⁶3s²3p⁶4s². Determine the number of electrons in its outermost and penultimate shells.",
          response: {
            type: "numeric",
            parts: [
              { label: "Outermost shell electrons", answer: 2, unit: "electrons" },
              { label: "Penultimate shell electrons", answer: 8, unit: "electrons" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell occupancy", statement: "Outermost = 4s² only (n=4 subshells beyond 4s are empty for Ca)." },
            ],
            steps: [
              { reasoning: "Outermost occupied shell is n=4 → only 4s² → 2 electrons.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Penultimate shell n=3 → 3s²3p⁶ → 8 electrons.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 outer; 8 penultimate",
            commonErrors: ["Counting 3d electrons — Ca has no 3d electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why electrons occupy shells in order of increasing energy rather than filling shell 1 completely first.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy ordering", statement: "Subshell energies increase with n and l; lowest available state fills first." },
            ],
            steps: [
              { reasoning: "Shells and subshells are discrete energy levels around the nucleus.", working: "\\text{energy levels}", marks: 1, markCode: "M" },
              { reasoning: "Electrons occupy the lowest available energy state first (aufbau principle).", working: "E\\uparrow\\text{ fills later}", marks: 1, markCode: "M" },
              { reasoning: "This produces the observed filling order 1s→2s→2p→3s… rather than shell-by-shell filling.", working: "\\text{aufbau order}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subshells have increasing energies; electrons fill lowest first",
            commonErrors: ["Claiming shell 1 'fills' before subshells are considered."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-config-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An unknown element has electron configuration 1s²2s²2p⁶3s²3p⁵.",
          parts: [
            { label: "a", prompt: "State the total number of electrons in the atom.", marks: 1 },
            { label: "b", prompt: "Identify the element.", marks: 1 },
            { label: "c", prompt: "Write its configuration in shell notation.", marks: 2 },
            { label: "d", prompt: "Explain why this element is placed in group 17.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Configuration analysis", statement: "Total electrons = atomic number; outer electrons determine group." },
            ],
            steps: [
              { part: "a", reasoning: "Sum superscripts: 2+2+6+2+5 = 17 electrons.", working: "17", marks: 1, markCode: "M" },
              { part: "b", reasoning: "17 electrons → atomic number 17 → chlorine.", working: "\\text{Cl}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Shell 1: 1s² → 2; shell 2: 2s²2p⁶ → 8; shell 3: 3s²3p⁵ → 7.", working: "2,8,7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct shell notation 2,8,7.", working: "2,8,7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Outer shell (n=3) holds 7 electrons; for a p-block element group = 10 + valence count = 17.", working: "10+7=17", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Halogens are group 17 — one electron short of a full shell.", working: "\\text{group }17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 17 (b) chlorine (c) 2,8,7 (d) 7 outer electrons → group 17",
            commonErrors: ["In (d), saying group = 7 instead of 17."],
            examinerNote: "M1 for (a); A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-config-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the maximum number of electrons that can occupy the first three shells combined, and each shell individually.",
          response: {
            type: "numeric",
            parts: [
              { label: "Shells 1 and 2 combined", answer: 10, unit: "electrons" },
              { label: "Shell 3 alone", answer: 18, unit: "electrons" },
              { label: "Shell 4 alone", answer: 32, unit: "electrons" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Shell capacity", statement: "Shell n capacity = 2n²." },
            ],
            steps: [
              { reasoning: "Shell 1 = 2, shell 2 = 8 → combined 10.", working: "2+8=10", marks: 1, markCode: "M" },
              { reasoning: "Shell 3 = 2×9 = 18.", working: "2\\times3^2=18", marks: 1, markCode: "M" },
              { reasoning: "Shell 4 = 2×16 = 32.", working: "2\\times4^2=32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10; 18; 32",
            commonErrors: ["Using n² instead of 2n² for shell 4, giving 16."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u1-ptable",
      title: "Periodic table organisation",
      skill: "Explain how atomic structure determines position in the periodic table.",
      lesson: {
        sections: [
          {
            heading: "Rows, columns and blocks",
            body: "**Periods** are horizontal rows; period number = highest occupied shell. **Groups** are vertical columns; group number relates to valence electrons (groups 1, 2, 13-18 for main group). Blocks: s-block (groups 1-2), p-block (13-18), d-block (transition metals, groups 3-12), f-block (lanthanides/actinides).",
          },
          {
            heading: "Metals, non-metals, metalloids",
            body: "Metals dominate the left and centre; non-metals on the right (except H). **Metalloids** (B, Si, Ge, As, Sb, Te) lie along the diagonal staircase and show intermediate properties — semiconductors such as silicon are vital in electronics.",
          },
          {
            heading: "Why position matters",
            body: "Elements in the same group have similar chemical properties because they have the same number of valence electrons. Moving down a group adds shells, so outer electrons are further from the nucleus — this drives trends in atomic radius and reactivity (e.g. group 1 metals become more reactive down the group).",
          },
        ],
        keyFormulas: [
          { name: "Period", statement: "Horizontal row; = highest occupied shell number" },
          { name: "Group", statement: "Vertical column; = valence electron count" },
          { name: "Blocks", statement: "s (1-2), p (13-18), d (3-12), f (inner transition)" },
        ],
        workedExample: {
          problem: "Bromine is in period 4. Which group and how many electron shells does it have?",
          solution: "Bromine (Z=35): 1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁵ → 4 shells (period 4) and 7 valence electrons → group 17.",
        },
      },
      questions: [
        {
          id: "mypc5-u1-ptable-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Elements in the same group of the periodic table have similar properties because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have the same mass number" },
              { id: "b", text: "They have the same number of valence electrons" },
              { id: "c", text: "They are all metals" },
              { id: "d", text: "They have the same number of shells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group similarity", statement: "Same valence electrons → similar chemical behaviour." },
            ],
            steps: [
              { reasoning: "Valence electrons determine bonding and reactivity.", working: "\\text{valence}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Same valence electrons",
            commonErrors: ["Saying same number of shells — that is a period."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ptable-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement about silicon is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot conduct electricity at all" },
              { id: "b", text: "It is an alkali metal" },
              { id: "c", text: "It is a metalloid used as a semiconductor in electronics" },
              { id: "d", text: "It is a noble gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metalloid", statement: "Element with intermediate metal/non-metal properties, e.g. Si." },
            ],
            steps: [
              { reasoning: "Si lies on the metalloid staircase.", working: "\\text{metalloid}", marks: 1, markCode: "M" },
              { reasoning: "Semiconductor property → chips and solar cells.", working: "\\text{semiconductor}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metalloid semiconductor",
            commonErrors: ["Classifying silicon as a metal or non-metal."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why sodium (period 3) has a larger atomic radius than magnesium (period 3) in the same period.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium has more shells" },
              { id: "b", text: "Magnesium is a non-metal" },
              { id: "c", text: "They have identical radii" },
              { id: "d", text: "Across a period, nuclear charge increases but electron shells stay the same, so electrons are pulled in more strongly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Periodic radius", statement: "Radius decreases across a period as nuclear charge rises." },
            ],
            steps: [
              { reasoning: "Same shell → same distance scale across period.", working: "\\text{same shell}", marks: 1, markCode: "M" },
              { reasoning: "Proton number increases → stronger attraction on same electrons.", working: "Z\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Na therefore larger than Mg.", working: "r_{Na}>r_{Mg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher nuclear charge in Mg pulls electrons closer",
            commonErrors: ["Claiming more shells across a period."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A class designs an experiment to test how element position affects reactivity with water.",
          parts: [
            { label: "a", prompt: "State a suitable hypothesis linking group number to reactivity with water.", marks: 2 },
            { label: "b", prompt: "Identify the independent variable, dependent variable and two controlled variables.", marks: 3 },
            { label: "c", prompt: "Explain why the experiment must be conducted with safety precautions for group 1 metals.", marks: 1 },
            { label: "d", prompt: "Suggest one real-world use of alkali metals that depends on their high reactivity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hypothesis", statement: "Testable prediction linking group to observed reactivity." },
            ],
            steps: [
              { part: "a", reasoning: "Hypothesis: reactivity with water increases down group 1 (Li→Cs).", working: "\\text{reactivity}\\uparrow", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear testable statement with direction.", working: "\\text{testable}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent: identity/position of metal (group or period).", working: "\\text{metal identity}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dependent: rate/observations of reaction with water.", working: "\\text{reaction rate}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Controlled: water volume/temperature, metal mass, observation time.", working: "\\text{controlled}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Group 1 metals react violently with water releasing H₂ which ignites — explosion/fire risk.", working: "H_2\\text{ ignites}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use: sodium/potassium in batteries (e.g. Na-ion cells) or as reducing agents; high reactivity exploited.", working: "\\text{batteries}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Link reactivity to application.", working: "\\text{application}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reactivity increases down group 1 (b) metal/rate + controls (c) H₂ explosion risk (d) batteries",
            commonErrors: ["In (a), hypothesis without a predicted direction."],
            examinerNote: "M1 A1 for (a); M1 M1 A1 for (b); A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-ptable-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The period number of an element equals...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of valence electrons" },
              { id: "b", text: "The highest occupied electron shell" },
              { id: "c", text: "The number of electron shells minus one" },
              { id: "d", text: "The total number of protons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period", statement: "Period number = highest occupied shell number." },
            ],
            steps: [
              { reasoning: "Period reflects the outermost shell containing electrons.", working: "\\text{period}=n_{max}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Highest occupied shell",
            commonErrors: ["Confusing period with group (valence electrons)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ptable-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element is a metalloid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sulphur" },
              { id: "b", text: "Silver" },
              { id: "c", text: "Sodium" },
              { id: "d", text: "Silicon" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metalloid", statement: "Elements along the staircase (B, Si, Ge, As, Sb, Te) with intermediate properties." },
            ],
            steps: [
              { reasoning: "Si sits on the metalloid diagonal between metals and non-metals.", working: "\\text{Si metalloid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Silicon",
            commonErrors: ["Classifying silicon as a non-metal because it is not lustrous."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ptable-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which block of the periodic table contains the group 1 and group 2 elements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "s-block" },
              { id: "b", text: "d-block" },
              { id: "c", text: "f-block" },
              { id: "d", text: "p-block" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blocks", statement: "s-block = groups 1-2; p-block = 13-18; d-block = 3-12." },
            ],
            steps: [
              { reasoning: "Groups 1-2 are the s-block.", working: "\\text{s-block}", marks: 1, markCode: "M" },
              { reasoning: "Their outermost electrons occupy s subshells.", working: "ns^{1,2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "s-block",
            commonErrors: ["Confusing s-block with p-block location on the table."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element is in period 4 and group 2. Determine the number of electron shells and the number of valence electrons it has.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electron shells", answer: 4 },
              { label: "Valence electrons", answer: 2, unit: "electrons" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-structure link", statement: "Period = shells occupied; group 2 → 2 valence electrons." },
            ],
            steps: [
              { reasoning: "Period 4 → highest shell n=4 → 4 shells (for main-group elements).", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Group 2 → 2 valence electrons (ns²).", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 shells; 2 valence electrons (calcium)",
            commonErrors: ["Counting 4 valence electrons for group 2."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are most metals found on the left side of the periodic table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have few valence electrons and low ionisation energies, so they easily lose electrons to form cations" },
              { id: "b", text: "They are the smallest atoms" },
              { id: "c", text: "They gain electrons easily" },
              { id: "d", text: "They have the most electron shells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic character", statement: "Few valence electrons + low IE → electron loss → metallic behaviour." },
            ],
            steps: [
              { reasoning: "Left-side elements have 1-3 valence electrons.", working: "1-3\\text{ valence}", marks: 1, markCode: "M" },
              { reasoning: "Low ionisation energy → readily form cations → metallic properties.", working: "IE\\downarrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Few valence electrons, easily lost",
            commonErrors: ["Saying metals gain electrons like non-metals."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Arrange lithium, sodium and potassium in order of increasing atomic radius.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "K < Na < Li" },
              { id: "b", text: "Li < Na < K" },
              { id: "c", text: "Li = Na = K" },
              { id: "d", text: "Na < Li < K" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group radius trend", statement: "Radius increases down a group as shells are added." },
            ],
            steps: [
              { reasoning: "All three are group 1 — radius increases down the group.", working: "\\text{down group}", marks: 1, markCode: "M" },
              { reasoning: "Each lower element has one more electron shell.", working: "n_{shells}\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Order: Li (2 shells) < Na (3) < K (4).", working: "Li<Na<K", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Li < Na < K",
            commonErrors: ["Reversing the trend — thinking nuclear charge dominates."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element in group 1 has 3 electron shells. Determine its period, group and number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "Period", answer: 3 },
              { label: "Valence electrons", answer: 1, unit: "electron" },
              { label: "Group", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-structure link", statement: "3 shells → period 3; group 1 → 1 valence electron." },
            ],
            steps: [
              { reasoning: "Three shells → period 3.", working: "\\text{period }3", marks: 1, markCode: "M" },
              { reasoning: "Group 1 → ns¹ → 1 valence electron.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Period 3 group 1 = sodium.", working: "\\text{Na}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period 3, group 1, 1 valence electron (sodium)",
            commonErrors: ["Answering group 3 for period 3."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The f-block elements are also called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metalloids" },
              { id: "b", text: "Halogens and noble gases" },
              { id: "c", text: "Alkali and alkaline earth metals" },
              { id: "d", text: "Lanthanides and actinides" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "f-block", statement: "Inner transition metals: lanthanides (4f) and actinides (5f)." },
            ],
            steps: [
              { reasoning: "f-block = lanthanides and actinides.", working: "\\text{f-block}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Lanthanides and actinides",
            commonErrors: ["Confusing f-block with d-block transition metals."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ptable-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Determine: (a) the number of valence electrons in a group 2 element; (b) the number of electron shells in a period 5 element.",
          response: {
            type: "numeric",
            parts: [
              { label: "Valence electrons in group 2 element", answer: 2, unit: "electrons" },
              { label: "Electron shells in period 5 element", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-structure link", statement: "Group = valence count; period = shell count." },
            ],
            steps: [
              { reasoning: "Group 2 → ns² → 2 valence electrons.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Period 5 → highest shell n=5 → 5 shells.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 valence electrons; 5 shells",
            commonErrors: ["Swapping the answers — group gives electrons, period gives shells."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why atomic radius increases down a group of the periodic table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group radius trend", statement: "Each element down a group adds a new electron shell." },
            ],
            steps: [
              { reasoning: "Moving down a group, each element has one more electron shell than the one above.", working: "n_{shells}\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "The outer electrons are therefore further from the nucleus.", working: "r\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Increased shielding by inner electrons reduces effective nuclear pull → larger radius.", working: "\\text{shielding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New shells push outer electrons further out; shielding weakens attraction",
            commonErrors: ["Citing increasing nuclear charge alone — shielding and distance dominate."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ptable-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An unknown element is in group 17, period 3.",
          parts: [
            { label: "a", prompt: "Name the element.", marks: 1 },
            { label: "b", prompt: "State its number of valence electrons.", marks: 1 },
            { label: "c", prompt: "Predict the formula of the compound it forms with sodium.", marks: 1 },
            { label: "d", prompt: "Explain, using electron configuration, why this compound is ionic.", marks: 2 },
            { label: "e", prompt: "State whether its electronegativity is higher or lower than fluorine's, and why.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Position prediction", statement: "Group/period identify the element and its bonding behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Group 17, period 3 → chlorine.", working: "\\text{Cl}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Group 17 → 7 valence electrons.", working: "7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cl⁻ + Na⁺ → NaCl (1:1 charge balance).", working: "NaCl", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Na (2,8,1) loses 1 electron; Cl (2,8,7) gains 1 electron → Na⁺ and Cl⁻.", working: "Na\\to Na^+;Cl\\to Cl^-", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete electron transfer between metal and non-metal → ionic bonding.", working: "\\text{ionic}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Lower — Cl is larger and its outer electrons are further from the nucleus than F's.", working: "EN_{Cl}<EN_F", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chlorine (b) 7 (c) NaCl (d) electron transfer Na→Cl (e) lower than F",
            commonErrors: ["In (e), saying Cl is more electronegative because it is heavier."],
            examinerNote: "A1 for (a); M1 for (b); M1 for (c); M1 A1 for (d); A1 for (e).",
          },
        },
        {
          id: "mypc5-u1-ptable-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element has 3 electron shells and 4 valence electrons. Determine its period, group and proton number.",
          response: {
            type: "numeric",
            parts: [
              { label: "Period", answer: 3 },
              { label: "Group", answer: 14 },
              { label: "Proton number", answer: 14 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-structure link", statement: "3 shells → period 3; 4 valence e⁻ → group 14 (p-block)." },
            ],
            steps: [
              { reasoning: "Three shells → period 3.", working: "\\text{period }3", marks: 1, markCode: "M" },
              { reasoning: "4 valence electrons in p-block → group 14.", working: "\\text{group }14", marks: 1, markCode: "M" },
              { reasoning: "Period 3 group 14 = silicon, Z = 14.", working: "Z=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period 3, group 14, Z = 14 (silicon)",
            commonErrors: ["Answering group 4 instead of 14 — main-group p-block groups are 10 + valence count."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
