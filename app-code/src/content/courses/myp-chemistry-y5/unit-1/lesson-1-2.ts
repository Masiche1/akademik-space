import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypc5-u1-lesson-1-2",
  code: "1-2",
  title: "Periodic Trends and Ions",
  goal: "I CAN explain trends in atomic radius, ionisation energy and electronegativity across and down the periodic table, and describe ion formation.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Atomic radius", definition: "Half the distance between nuclei of bonded atoms; decreases across period, increases down group." },
    { term: "Ionisation energy", definition: "Energy needed to remove one electron from a gaseous atom; first ionisation energy is the easiest electron." },
    { term: "Electronegativity", definition: "Ability of an atom to attract bonding electrons; highest for F, lowest for Cs/Fr." },
    { term: "Ion", definition: "Charged atom formed by losing electrons (cation, +) or gaining electrons (anion, −)." },
    { term: "Cation", definition: "Positive ion formed by electron loss; metals typically form cations." },
    { term: "Anion", definition: "Negative ion formed by electron gain; non-metals typically form anions." },
  ],
  concepts: [
    {
      id: "mypc5-u1-trends",
      title: "Periodic trends",
      skill: "Explain and predict trends in atomic radius, ionisation energy and electronegativity.",
      lesson: {
        sections: [
          {
            heading: "Atomic radius",
            body: "**Across a period** radius decreases: protons increase while electrons fill the same shells, so nuclear attraction strengthens. **Down a group** radius increases: each element adds a new electron shell, pushing outer electrons further from the nucleus.",
          },
          {
            heading: "Ionisation energy",
            body: "**First ionisation energy** = energy to remove one electron from a gaseous atom: M(g) → M⁺(g) + e⁻. It **increases across a period** (stronger nuclear charge) and **decreases down a group** (outer electron further away, more shielded). Group 1 metals have low ionisation energies — hence reactivity.",
          },
          {
            heading: "Electronegativity",
            body: "Electronegativity **increases across a period** and **decreases down a group**; fluorine is the most electronegative element. It predicts bond polarity: large differences (e.g. Na–Cl ≈ 2.2) give ionic character; small differences (e.g. C–H ≈ 0.4) give covalent character.",
          },
        ],
        keyFormulas: [
          { name: "Ionisation", statement: "M(g) -> M^+(g) + e^-; energy rises across period, falls down group" },
          { name: "Radius", statement: "Across period decreases; down group increases" },
          { name: "Electronegativity", statement: "F highest; increases across period, decreases down group" },
        ],
        workedExample: {
          problem: "Rank F, Cl and Br in order of increasing electronegativity.",
          solution: "Br < Cl < F — electronegativity decreases down group 17 as outer electrons are further from the nucleus.",
        },
      },
      questions: [
        {
          id: "mypc5-u1-trends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element has the highest electronegativity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorine" },
              { id: "b", text: "Sodium" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Fluorine" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electronegativity peak", statement: "Fluorine is the most electronegative element." },
            ],
            steps: [
              { reasoning: "EN increases across period 2 and F is top-right of p-block.", working: "\\text{F max}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Fluorine",
            commonErrors: ["Choosing oxygen — F is higher."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-trends-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does ionisation energy increase from sodium to chlorine across period 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atoms become less metallic" },
              { id: "b", text: "Atoms gain more shells" },
              { id: "c", text: "Electrons move further from the nucleus" },
              { id: "d", text: "Nuclear charge increases while electrons remain in the same shells, so electrons are held more tightly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation trend", statement: "Across a period: more protons, same shells → harder to remove e⁻." },
            ],
            steps: [
              { reasoning: "Proton number rises across period 3 (11 → 17).", working: "Z\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Same shell → electrons closer/stronger attraction → higher IE.", working: "IE\\uparrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increasing nuclear charge across the period",
            commonErrors: ["Saying atoms gain shells across a period."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why potassium has a lower first ionisation energy than calcium.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "K's outer electron is in the 4s subshell further from the nucleus with more shielding, so it is easier to remove" },
              { id: "b", text: "K has fewer protons" },
              { id: "c", text: "They have equal ionisation energies" },
              { id: "d", text: "Ca cannot form ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shielding", statement: "Outer electrons in higher shells are shielded → easier to remove." },
            ],
            steps: [
              { reasoning: "K outer electron is 4s¹, one shell further out than Ca's 4s² at similar distance but K has less nuclear pull on it effectively via shielding.", working: "4s", marks: 1, markCode: "M" },
              { reasoning: "More inner electrons shield K's valence electron → weaker attraction.", working: "\\text{shielding}", marks: 1, markCode: "M" },
              { reasoning: "Less energy needed → lower IE.", working: "IE_K<IE_{Ca}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "K's outer electron is more shielded and easier to remove",
            commonErrors: ["Confusing ionisation energy with atomic radius."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school wants to investigate why group 1 metals react increasingly vigorously down the group.",
          parts: [
            { label: "a", prompt: "Write the half-equation for the oxidation of sodium metal.", marks: 2 },
            { label: "b", prompt: "State the trend in first ionisation energy down group 1 and explain it in terms of atomic structure.", marks: 2 },
            { label: "c", prompt: "Design a fair test comparing lithium and sodium reacting with water: identify variables.", marks:2 },
            { label: "d", prompt: "Evaluate whether it is safe and ethical to test with the heaviest group 1 metal, francium.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Redox half-equation", statement: "Metal loses electrons: M -> M^+ + e^- for group 1." },
            ],
            steps: [
              { part: "a", reasoning: "Na(s) -> Na^+(aq) + e^-; sodium loses its one valence electron.", working: "Na\\to Na^+ + e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct states and charge balance.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "IE decreases down group 1: each element adds a shell, outer electron further and more shielded.", working: "IE\\downarrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Easier to lose e⁻ → more reactive metal down group.", working: "\\text{reactive}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Independent: metal identity; dependent: vigour/measure of reaction (e.g. time to dissolve, gas volume).", working: "\\text{variables}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Controlled: equal masses, same water volume/temperature, same apparatus.", working: "\\text{controlled}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Francium is extremely rare, radioactive and violently reactive — unsafe and impractical.", working: "\\text{radioactive}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusion: predict trend from lighter analogues instead.", working: "\\text{extrapolate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na→Na⁺+e⁻ (b) IE falls down group, e⁻ easier to remove (c) metal/rate + controls (d) too dangerous — extrapolate",
            commonErrors: ["In (c), comparing different masses of metal."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-trends-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these has the largest atomic radius: Li, Na or K?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Na" },
              { id: "b", text: "Li" },
              { id: "c", text: "K" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group radius trend", statement: "Radius increases down a group as shells are added." },
            ],
            steps: [
              { reasoning: "All are group 1; K is lowest → most shells → largest radius.", working: "K\\text{ largest}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** K",
            commonErrors: ["Choosing Li — it is smallest, not largest."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-trends-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Across a period from left to right, first ionisation energy generally...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases" },
              { id: "b", text: "Stays constant" },
              { id: "c", text: "Decreases" },
              { id: "d", text: "First increases then decreases randomly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation trend", statement: "IE increases across a period (nuclear charge rises, same shells)." },
            ],
            steps: [
              { reasoning: "Proton number increases across the period → stronger attraction → harder to remove e⁻.", working: "IE\\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increases",
            commonErrors: ["Reversing the trend with atomic radius."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-trends-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is fluorine the most electronegative element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is the lightest halogen" },
              { id: "b", text: "It is small with high nuclear charge, so bonding electrons are pulled very strongly" },
              { id: "c", text: "It has the most electron shells" },
              { id: "d", text: "It forms the most bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electronegativity peak", statement: "Small size + high Z_eff → strongest pull on bonding electrons." },
            ],
            steps: [
              { reasoning: "F is top-right of p-block: high nuclear charge, minimal shielding.", working: "Z_{eff}\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Tiny atomic radius → bonding pair held very close → maximum EN.", working: "r\\downarrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Small size and strong nuclear attraction",
            commonErrors: ["Attributing it to fluorine having the most electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using Pauling electronegativity values (Na = 0.9, Cl = 3.0, C = 2.5, H = 2.1), calculate the electronegativity differences.",
          response: {
            type: "numeric",
            parts: [
              { label: "Na–Cl difference", answer: 2.1 },
              { label: "C–H difference", answer: 0.4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "EN difference", statement: "ΔEN = difference in electronegativity values predicts bond polarity." },
            ],
            steps: [
              { reasoning: "Na–Cl: 3.0 − 0.9 = 2.1 → large difference → ionic character.", working: "3.0-0.9=2.1", marks: 1, markCode: "M" },
              { reasoning: "C–H: 2.5 − 2.1 = 0.4 → small difference → covalent character.", working: "2.5-2.1=0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.1 (ionic); 0.4 (covalent)",
            commonErrors: ["Subtracting in the wrong order and getting a negative value."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does chlorine have a higher first ionisation energy than sulphur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorine has fewer protons" },
              { id: "b", text: "Chlorine's outer electron is closer to a higher nuclear charge and its p-subshell is nearly full, making removal harder" },
              { id: "c", text: "Sulphur has no valence electrons" },
              { id: "d", text: "They have identical ionisation energies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation trend", statement: "Across a period IE rises; half-filled/full subshells add stability." },
            ],
            steps: [
              { reasoning: "Cl has more protons than S at the same shell → stronger attraction.", working: "Z_{Cl}>Z_S", marks: 1, markCode: "M" },
              { reasoning: "Cl's 3p⁵ configuration is closer to a stable octet → electron held more tightly.", working: "3p^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher nuclear charge and near-full shell",
            commonErrors: ["Ignoring the small dip at S due to half-filled 3p³ stability."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the second ionisation energy of sodium is much greater than the first ionisation energy.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second ionisation energies are always smaller" },
              { id: "b", text: "Na⁺ has more electrons than Na" },
              { id: "c", text: "The nucleus disappears after the first ionisation" },
              { id: "d", text: "After losing one electron Na⁺ has a full noble-gas shell; removing a second electron from this stable, tightly held configuration requires much more energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive IE", statement: "Each successive electron is harder to remove; noble-gas configurations are exceptionally stable." },
            ],
            steps: [
              { reasoning: "Na → Na⁺ + e⁻ leaves Na⁺ with configuration 2,8 (neon-like).", working: "Na^+\\text{ is }Ne\\text{-like}", marks: 1, markCode: "M" },
              { reasoning: "The remaining electrons are in a full shell with no shielding from same-shell electrons.", working: "\\text{full shell}", marks: 1, markCode: "M" },
              { reasoning: "Removing the next electron disrupts a stable octet → IE₂ ≫ IE₁.", working: "IE_2\\gg IE_1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Na⁺ has a stable full shell — second electron is much harder to remove",
            commonErrors: ["Saying the second electron is 'the same' as the first."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given atomic radii (pm): Na = 186, Mg = 160, Al = 143. Calculate the decrease in radius from Na to Mg and from Mg to Al, and the average decrease per step.",
          response: {
            type: "numeric",
            parts: [
              { label: "Na to Mg decrease", answer: 26, unit: "pm" },
              { label: "Mg to Al decrease", answer: 17, unit: "pm" },
              { label: "Average decrease per step", answer: 21.5, unit: "pm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Trend calculation", statement: "Subtract consecutive values; average = total change ÷ steps." },
            ],
            steps: [
              { reasoning: "Na→Mg: 186 − 160 = 26 pm.", working: "186-160=26", marks: 1, markCode: "M" },
              { reasoning: "Mg→Al: 160 − 143 = 17 pm.", working: "160-143=17", marks: 1, markCode: "M" },
              { reasoning: "Total 43 pm over 2 steps → 21.5 pm per step.", working: "43\\div2=21.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26 pm; 17 pm; 21.5 pm",
            commonErrors: ["Dividing by 3 steps instead of 2."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ion formed by gaining electrons is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An isotope" },
              { id: "b", text: "A cation" },
              { id: "c", text: "An anion" },
              { id: "d", text: "A noble gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anion", statement: "Negative ion formed by electron gain." },
            ],
            steps: [
              { reasoning: "Gaining e⁻ → negative charge → anion.", working: "\\text{anion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** An anion",
            commonErrors: ["Confusing with cation (electron loss)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-trends-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A chlorine atom (Z = 17) gains one electron to form Cl⁻. Determine the number of electrons in the ion and its charge.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons in Cl⁻", answer: 18, unit: "electrons" },
              { label: "Charge on Cl⁻", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion formation", statement: "Electron gain → negative ion; count = Z + gained." },
            ],
            steps: [
              { reasoning: "17 protons + 1 gained electron = 18 electrons total.", working: "17+1=18", marks: 1, markCode: "M" },
              { reasoning: "One extra electron → charge −1.", working: "-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 electrons; charge −1",
            commonErrors: ["Answering 17 electrons — forgetting the gained electron."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why electronegativity decreases down group 17 (F to I).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "EN group trend", statement: "EN decreases down a group as atomic size increases." },
            ],
            steps: [
              { reasoning: "Each element down group 17 adds an electron shell.", working: "n_{shells}\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Valence electrons are further from the nucleus with more shielding.", working: "r\\uparrow;\\text{shield}", marks: 1, markCode: "M" },
              { reasoning: "Weaker pull on bonding electrons → lower electronegativity (F highest, I lowest).", working: "EN\\downarrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Larger atoms, more shielding → weaker electron attraction",
            commonErrors: ["Saying nuclear charge decreases down the group — it increases but is shielded."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-trends-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare lithium (Li) and caesium (Cs), both group 1 metals.",
          parts: [
            { label: "a", prompt: "State which has the larger atomic radius and which has the lower first ionisation energy.", marks: 2 },
            { label: "b", prompt: "Predict which reacts more vigorously with water, and justify using the trend.", marks: 2 },
            { label: "c", prompt: "Explain the trend in terms of shells and shielding.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group trends", statement: "Down group 1: radius and reactivity increase; ionisation energy decreases." },
            ],
            steps: [
              { part: "a", reasoning: "Cs has larger radius (more shells) and lower first IE (outer electron easier to remove).", working: "r_{Cs}>r_{Li};IE_{Cs}<IE_{Li}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct comparisons stated.", working: "\\text{both correct}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cs reacts more vigorously — its valence electron is lost more easily (lower IE).", working: "Cs\\text{ faster}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Justified by group trend: reactivity increases down group 1.", working: "\\text{trend}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cs has more electron shells; valence electron further from nucleus.", working: "n_{shells}\\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Inner electrons shield the nuclear charge → weaker attraction → lower IE.", working: "\\text{shielding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cs larger, Cs lower IE (b) Cs more vigorous (c) more shells + shielding",
            commonErrors: ["In (c), ignoring shielding and citing only distance."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c).",
          },
        },
        {
          id: "mypc5-u1-trends-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "First ionisation energies (kJ/mol): Li = 520, Na = 496, K = 419. Calculate the difference between Li and Na, the difference between Na and K, and the average of the Na and K values.",
          response: {
            type: "numeric",
            parts: [
              { label: "Li − Na difference", answer: 24, unit: "kJ/mol" },
              { label: "Na − K difference", answer: 77, unit: "kJ/mol" },
              { label: "Average of Na and K", answer: 457.5, unit: "kJ/mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "IE data handling", statement: "Subtract consecutive values; average = sum ÷ count." },
            ],
            steps: [
              { reasoning: "Li−Na: 520 − 496 = 24 kJ/mol.", working: "520-496=24", marks: 1, markCode: "M" },
              { reasoning: "Na−K: 496 − 419 = 77 kJ/mol.", working: "496-419=77", marks: 1, markCode: "M" },
              { reasoning: "Mean: (496 + 419) ÷ 2 = 457.5 kJ/mol.", working: "915\\div2=457.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24; 77; 457.5 kJ/mol",
            commonErrors: ["Subtracting in the wrong order giving negative differences."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u1-ions",
      title: "Ions and electron transfer",
      skill: "Describe formation of cations and anions, electron configuration of ions, and ionic compound formulae.",
      lesson: {
        sections: [
          {
            heading: "Forming ions",
            body: "Metals **lose** electrons to form **cations** (positive): Na → Na⁺ + e⁻, Mg → Mg²⁺ + 2e⁻. Non-metals **gain** electrons to form **anions** (negative): Cl + e⁻ → Cl⁻, O + 2e⁻ → O²⁻. Ions adopt the nearest noble gas configuration (octet rule): Na⁺ is 2,8 like Ne; Cl⁻ is 2,8,8 like Ar.",
          },
          {
            heading: "Electron configuration of ions",
            body: "When forming cations, electrons are lost from the **outermost shell first**. Transition metal cations lose 4s electrons before 3d (Fe²⁺ is 3d⁶, not 4s²3d⁴). Anions gain electrons into the outermost p subshell until the shell is full.",
          },
          {
            heading: "Ionic formulae",
            body: "Ionic compounds are neutral: total positive charge = total negative charge. Formula from ion charges: Mg²⁺ + 2Cl⁻ → MgCl₂; Al³⁺ + 3O²⁻ → Al₂O₃ (swap and simplify charges). The formula shows the simplest whole-number ratio of ions.",
          },
        ],
        keyFormulas: [
          { name: "Cation", statement: "Metal loses e^- -> positive ion; e.g. Mg -> Mg^2+ + 2e^-" },
          { name: "Anion", statement: "Non-metal gains e^- -> negative ion; e.g. O + 2e^- -> O^2-" },
          { name: "Ionic formula", statement: "Charges balance: Mg^2+ + 2Cl^- -> MgCl_2" },
        ],
        workedExample: {
          problem: "Write the electron configuration of O²⁻ and explain why it forms.",
          solution: "O (Z=8): 1s²2s²2p⁴; gains 2 electrons → O²⁻ 1s²2s²2p⁶, same as neon (octet).",
        },
      },
      questions: [
        {
          id: "mypc5-u1-ions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What charge does a magnesium ion have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2−" },
              { id: "b", text: "2+" },
              { id: "c", text: "1+" },
              { id: "d", text: "1−" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mg ion", statement: "Mg loses 2 valence electrons → Mg²⁺." },
            ],
            steps: [
              { reasoning: "Mg (3s²) loses both outer electrons → charge +2.", working: "Mg^{2+}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2+",
            commonErrors: ["Writing 1+ — magnesium loses two electrons."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does chlorine gain an electron rather than lose one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gaining one electron completes its outer shell (octet), releasing energy; losing seven would be very difficult" },
              { id: "b", text: "Chlorine is a metal" },
              { id: "c", text: "Atoms never lose electrons" },
              { id: "d", text: "Chlorine has no protons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Octet rule", statement: "Atoms gain/lose electrons to achieve noble-gas configuration." },
            ],
            steps: [
              { reasoning: "Cl has 7 valence electrons; +1 gives a full shell.", working: "7+1=8", marks: 1, markCode: "M" },
              { reasoning: "Full shell is energetically favourable vs losing 7.", working: "\\text{octet}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gaining 1 e⁻ completes the octet",
            commonErrors: ["Saying chlorine loses electrons like a metal."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write the formula of aluminium oxide formed from Al³⁺ and O²⁻ ions.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AlO" },
              { id: "b", text: "Al₂O₃" },
              { id: "c", text: "Al₂O" },
              { id: "d", text: "AlO₃" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charge balance", statement: "Total cation charge = total anion charge in ionic compound." },
            ],
            steps: [
              { reasoning: "Need total +6 to balance 3 × O²⁻ = −6.", working: "2\\times3=6", marks: 1, markCode: "M" },
              { reasoning: "2 Al³⁺ give +6 → formula Al₂O₃.", working: "Al_2O_3", marks: 1, markCode: "M" },
              { reasoning: "Check neutrality: +6 and −6 balance.", working: "\\text{neutral}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Al₂O₃",
            commonErrors: ["Writing AlO₃ — aluminium is 3+, not 1+."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ionic compounds conduct electricity when molten or in solution but not as solids.",
          parts: [
            { label: "a", prompt: "Explain, in terms of ions, why solid sodium chloride does not conduct.", marks: 2 },
            { label: "b", prompt: "Explain why molten sodium chloride conducts electricity.", marks: 2 },
            { label: "c", prompt: "Write half-equations for what happens at each electrode during electrolysis of molten NaCl.", marks: 2 },
            { label: "d", prompt: "Evaluate why ionic compounds are used in road gritting and water softeners in terms of their solubility.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ionic conduction", statement: "Conduction requires mobile charged particles (ions or electrons)." },
            ],
            steps: [
              { part: "a", reasoning: "In solid NaCl, ions are fixed in a lattice — no mobile charges to carry current.", working: "\\text{fixed lattice}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclusion: cannot conduct.", working: "\\text{no conduction}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Molten NaCl: ions free to move and carry charge to electrodes.", working: "Na^+\\text{ and }Cl^-\\text{ mobile}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion: conducts.", working: "\\text{conducts}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cathode: Na^+ + e^- -> Na; anode: 2Cl^- -> Cl_2 + 2e^-.", working: "Na^++e^-\\to Na;\\ 2Cl^-\\to Cl_2+2e^-", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both half-equations correct with electron balance.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "NaCl dissolves in water lowering freezing point (gritting) and Ca²⁺/Mg²⁺ displacement softens water.", working: "\\text{freezing point}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Link solubility/ion exchange to uses.", working: "\\text{uses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ions fixed (b) ions mobile when molten (c) Na⁺+e⁻→Na, 2Cl⁻→Cl₂+2e⁻ (d) solubility enables gritting/softening",
            commonErrors: ["Saying electrons move through the solid ionic lattice."],
            examinerNote: "M1 A1 for (a),(b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-ions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the electron configuration of Na⁺ (sodium ion)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2,8,8" },
              { id: "b", text: "1s²2s²2p⁶3s¹ (2,8,1)" },
              { id: "c", text: "1s²2s²2p⁵" },
              { id: "d", text: "1s²2s²2p⁶ (2,8)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cation config", statement: "Na loses its 3s electron → same config as neon." },
            ],
            steps: [
              { reasoning: "Na (2,8,1) loses the outer electron → 2,8 = neon configuration.", working: "2,8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 1s²2s²2p⁶ (2,8)",
            commonErrors: ["Keeping the 3s electron — cations lose outer electrons first."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element typically forms a negative ion (anion)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnesium" },
              { id: "b", text: "Aluminium" },
              { id: "c", text: "Chlorine" },
              { id: "d", text: "Sodium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anion formers", statement: "Non-metals gain electrons → anions; metals lose → cations." },
            ],
            steps: [
              { reasoning: "Cl is a non-metal needing 1 electron for octet → Cl⁻.", working: "Cl^-", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Chlorine",
            commonErrors: ["Choosing a metal — metals form cations."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ions-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the ionic radius of Na⁺ smaller than that of the Na atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ions are always larger than atoms" },
              { id: "b", text: "Na⁺ has one fewer electron but the same nuclear charge, so remaining electrons are pulled closer" },
              { id: "c", text: "Na⁺ has an extra shell" },
              { id: "d", text: "Na⁺ has more protons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion size", statement: "Cations smaller than parent (lost e⁻, same Z); anions larger (gained e⁻)." },
            ],
            steps: [
              { reasoning: "Na loses a 3s electron but keeps 11 protons.", working: "Z=11\\text{ same}", marks: 1, markCode: "M" },
              { reasoning: "Same protons attracting fewer electrons → stronger pull per electron → smaller radius.", working: "r_{Na^+}<r_{Na}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fewer electrons, same nuclear charge → smaller",
            commonErrors: ["Claiming the ion gains a shell."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the ionic compound Al₂O₃: determine the charge on each aluminium ion and the number of oxide ions present.",
          response: {
            type: "numeric",
            parts: [
              { label: "Charge on each Al ion", answer: 3, unit: "+" },
              { label: "Number of O²⁻ ions in formula unit", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ion charges", statement: "Al loses 3 e⁻ → Al³⁺; O gains 2 e⁻ → O²⁻." },
            ],
            steps: [
              { reasoning: "Al (group 13) loses 3 valence electrons → charge +3.", working: "Al^{3+}", marks: 1, markCode: "M" },
              { reasoning: "Al₂O₃ contains 3 oxygen atoms → 3 O²⁻ ions.", working: "3\\times O^{2-}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "+3; 3 oxide ions",
            commonErrors: ["Writing Al⁺ or counting only 1 O ion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the oxide ion O²⁻ larger than the oxygen atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical in size" },
              { id: "b", text: "O²⁻ has more protons" },
              { id: "c", text: "Extra electrons increase electron-electron repulsion while nuclear charge stays the same" },
              { id: "d", text: "O²⁻ loses electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anion size", statement: "Gained electrons → more repulsion, same Z → larger ion." },
            ],
            steps: [
              { reasoning: "O gains 2 electrons → 10 electrons vs 8 protons.", working: "10e^-\\text{ vs }8p^+", marks: 1, markCode: "M" },
              { reasoning: "Greater electron-electron repulsion → outer shell expands → larger radius.", working: "r_{O^{2-}}>r_O", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Extra electrons repel each other → larger",
            commonErrors: ["Applying the cation rule (smaller) to anions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write the electron configuration of Fe²⁺ (Z = 26) and explain which electrons are lost first.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "[Ar] 3d⁶ — the 4s electrons are lost before the 3d electrons" },
              { id: "b", text: "[Ar] 4s²3d⁶ — no electrons are lost" },
              { id: "c", text: "1s²2s²2p⁶3s²3p⁶4s²3d⁴ — inner electrons are lost" },
              { id: "d", text: "[Ar] 4s²3d⁴ — the 3d electrons are lost first" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transition metal ions", statement: "Transition cations lose 4s electrons before 3d." },
            ],
            steps: [
              { reasoning: "Fe: [Ar] 4s²3d⁶; the 4s electrons are highest in energy.", working: "4s^2\\text{ first}", marks: 1, markCode: "M" },
              { reasoning: "Fe²⁺ loses both 4s electrons → [Ar] 3d⁶.", working: "[Ar]\\,3d^6", marks: 1, markCode: "M" },
              { reasoning: "4s is lost before 3d because it is further from the nucleus in transition metals.", working: "4s\\to3d", marks: 1, markCode: "A" },
            ],
            finalAnswer: "[Ar] 3d⁶ — 4s electrons lost first",
            commonErrors: ["Removing 3d electrons first — 4s goes first."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calcium phosphate has formula Ca₃(PO₄)₂. Determine: total negative charge of the phosphate groups, and the number of Ca²⁺ ions needed for neutrality.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total negative charge of 2 PO₄³⁻ groups", answer: -6 },
              { label: "Number of Ca²⁺ ions", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charge balance", statement: "Total positive = total negative charge in ionic compound." },
            ],
            steps: [
              { reasoning: "2 × PO₄³⁻ gives charge −6.", working: "2\\times(-3)=-6", marks: 1, markCode: "M" },
              { reasoning: "Need +6 → 3 × Ca²⁺ = +6.", working: "3\\times2=6", marks: 1, markCode: "M" },
              { reasoning: "Hence Ca₃(PO₄)₂ is neutral.", working: "\\text{neutral}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "−6; 3 Ca²⁺ ions",
            commonErrors: ["Using charge of PO₄ as −2 instead of −3."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the charge on a chloride ion (Cl⁻)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−1" },
              { id: "b", text: "0" },
              { id: "c", text: "+1" },
              { id: "d", text: "−2" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cl⁻", statement: "Cl gains 1 electron → charge −1." },
            ],
            steps: [
              { reasoning: "One extra electron → −1 charge.", working: "-1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** −1",
            commonErrors: ["Writing +1 — chloride is an anion."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-ions-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In forming MgO from magnesium and oxygen atoms: determine the electrons lost by 2 Mg atoms and the electrons gained by 1 O atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons lost by 2 Mg atoms", answer: 4, unit: "electrons" },
              { label: "Electrons gained by 1 O atom", answer: 2, unit: "electrons" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron transfer", statement: "Mg loses 2 e⁻ each; O gains 2 e⁻ → MgO." },
            ],
            steps: [
              { reasoning: "Each Mg → Mg²⁺ loses 2 e⁻; two Mg atoms lose 4 e⁻ total.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { reasoning: "O → O²⁻ gains 2 e⁻.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 lost; 2 gained",
            commonErrors: ["Giving 2 lost — forgetting there are 2 Mg atoms."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why ionic compounds have high melting points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionic lattice", statement: "Strong electrostatic attractions between ions throughout the giant lattice." },
            ],
            steps: [
              { reasoning: "Ionic compounds form giant lattices of oppositely charged ions.", working: "\\text{giant lattice}", marks: 1, markCode: "M" },
              { reasoning: "Every ion is attracted to many neighbours — strong electrostatic forces throughout.", working: "F\\propto\\frac{q_1q_2}{r^2}", marks: 1, markCode: "M" },
              { reasoning: "Melting requires overcoming these attractions throughout the whole lattice → high mp.", working: "mp\\uparrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong ionic attractions throughout giant lattice",
            commonErrors: ["Saying ionic bonds are 'weak'."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-ions-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student incorrectly writes the formula of potassium sulphate as KSO₄.",
          parts: [
            { label: "a", prompt: "Write the correct formula.", marks: 1 },
            { label: "b", prompt: "State the charge on the sulphate ion.", marks: 1 },
            { label: "c", prompt: "Explain why two potassium ions are needed.", marks: 2 },
            { label: "d", prompt: "Name one other compound containing the sulphate ion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Formula from charges", statement: "Balance total cation and anion charges; simplest ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Correct formula K₂SO₄.", working: "K_2SO_4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sulphate is SO₄²⁻ → charge −2.", working: "SO_4^{2-}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "K⁺ is +1; two K⁺ give +2 to balance SO₄²⁻'s −2.", working: "2\\times(+1)=-(-2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Charge neutrality requires the 2:1 ratio.", working: "\\text{neutral}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any valid sulphate e.g. CaSO₄, MgSO₄, Na₂SO₄, BaSO₄.", working: "CaSO_4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct name/identification of the example.", working: "\\text{calcium sulphate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) K₂SO₄ (b) −2 (c) 2 K⁺ balance SO₄²⁻ (d) e.g. CaSO₄",
            commonErrors: ["Writing K₂SO₄ as KSO₄ — ignoring the 2− charge."],
            examinerNote: "A1 for (a); M1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-ions-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare electron transfer: a sodium atom forms Na⁺ and a chlorine atom forms Cl⁻. Determine electrons transferred in each case and the total transferred in the reaction Na + Cl → NaCl.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons lost by Na", answer: 1, unit: "electron" },
              { label: "Electrons gained by Cl", answer: 1, unit: "electron" },
              { label: "Total electrons transferred", answer: 1, unit: "electron" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron transfer", statement: "One electron moves from Na to Cl; it is counted once." },
            ],
            steps: [
              { reasoning: "Na (2,8,1) loses 1 electron → Na⁺.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Cl (2,8,7) gains that same 1 electron → Cl⁻.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "The same electron is transferred once — total = 1, not 2.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1; 1; 1 electron transferred",
            commonErrors: ["Adding lost + gained = 2 — it is the same electron."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
