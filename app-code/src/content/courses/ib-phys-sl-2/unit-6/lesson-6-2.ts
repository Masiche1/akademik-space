import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "physsl-u6-lesson-6-2",
  code: "6-2",
  title: "Radioactive Decay and Half-Life",
  goal: "I CAN write nuclear decay equations, distinguish alpha, beta and gamma radiation, and use the half-life to calculate remaining nuclei and activity.",
  standards: ["Topic 8.3", "Topic 8.4", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Radioactive decay", definition: "The spontaneous transformation of an unstable nucleus into a more stable one, accompanied by the emission of radiation." },
    { term: "Alpha decay", definition: "Emission of an alpha particle $\\left({}^{4}_{2}\\alpha\\right)$ — a helium nucleus — reducing the mass number by 4 and the proton number by 2." },
    { term: "Beta-minus decay", definition: "Emission of an electron $\\left({}^{0}_{-1}\\beta\\right)$ when a neutron converts to a proton; nucleon number unchanged, proton number increases by 1." },
    { term: "Gamma radiation", definition: "High-energy electromagnetic radiation emitted when a nucleus de-excites; it carries no charge or mass." },
    { term: "Half-life ($T_{1/2}$)", definition: "The time taken for half of the undecayed nuclei in a sample to decay; constant for each nuclide." },
    { term: "Activity ($A$)", definition: "The rate of decay of a sample, $A = \\lambda N$ (decays per second, becquerels), where $\\lambda = \\ln 2 / T_{1/2}$ is the decay constant." },
  ],
  concepts: [
    {
      id: "physsl-u6-decay",
      title: "Nuclear decay and radiation",
      skill: "Write balanced nuclear equations for alpha, beta and gamma decay and compare the properties of the three radiations.",
      lesson: {
        sections: [
          {
            heading: "Types of radioactive decay",
            body: "In **alpha decay** an unstable nucleus emits an alpha particle $\\left({}^{4}_{2}\\mathrm{He}\\right)$, producing a daughter with mass number $A - 4$ and proton number $Z - 2$. In **beta-minus decay** a neutron converts into a proton, emitting an electron $\\left({}^{0}_{-1}\\mathrm{e}\\right)$ and an antineutrino; the mass number is unchanged and the proton number increases by 1. **Gamma radiation** is emitted alongside alpha or beta decay when the daughter nucleus is left in an excited state; it carries energy but no charge or mass.",
          },
          {
            heading: "Conservation laws in nuclear equations",
            body: "Every nuclear equation must conserve the **mass (nucleon) number $A$** and the **charge (proton) number $Z$** — the total on each side must be equal. For example, $^{226}_{88}\\mathrm{Ra} \\to {}^{222}_{86}\\mathrm{Rn} + {}^{4}_{2}\\alpha$ conserves $A$: $226 = 222 + 4$ and $Z$: $88 = 86 + 2$.",
          },
          {
            heading: "Properties of alpha, beta and gamma",
            body: "Alpha particles are doubly charged and massive: strongly ionising but stopped by paper or skin. Beta particles are fast electrons: moderately ionising, stopped by a few mm of aluminium. Gamma rays are uncharged photons: weakly ionising but very penetrating, needing thick lead or concrete. The three radiations are distinguished experimentally by their absorption in electric and magnetic fields.",
          },
        ],
        keyFormulas: [
          { name: "Alpha decay", statement: "{}^{A}_{Z}X \\to {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\alpha" },
          { name: "Beta-minus decay", statement: "{}^{A}_{Z}X \\to {}^{A}_{Z+1}Y + {}^{0}_{-1}\\beta + \\bar{\\nu}" },
          { name: "Conservation", statement: "A and Z are conserved in every nuclear equation" },
        ],
        workedExample: {
          problem: "Radium-226 ($^{226}_{88}$Ra) decays by alpha emission. Write the nuclear equation for the decay.",
          solution: "Alpha decay reduces $A$ by 4 and $Z$ by 2: daughter is $^{222}_{86}$Rn. Equation: $^{226}_{88}\\mathrm{Ra} \\to {}^{222}_{86}\\mathrm{Rn} + {}^{4}_{2}\\alpha$.",
        },
      },
      questions: [
        {
          id: "physsl-u6-decay-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What happens to the mass number and proton number of a nucleus in alpha decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass number unchanged; proton number increases by 1" },
              { id: "b", text: "Mass number decreases by 4; proton number decreases by 2" },
              { id: "c", text: "Both unchanged" },
              { id: "d", text: "Mass number decreases by 2; proton number decreases by 4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alpha decay", statement: "An alpha particle is {}^{4}_{2}\\alpha; the daughter has A - 4 and Z - 2." },
            ],
            steps: [
              { reasoning: "Removing ${}^{4}_{2}\\alpha$ reduces the mass number by 4 and the proton number by 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** mass number decreases by 4; proton number decreases by 2",
            commonErrors: ["Swapping the changes in $A$ and $Z$."],
          },
        },
        {
          id: "physsl-u6-decay-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which particle is emitted in beta-minus decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An electron ${}^{0}_{-1}\\beta$" },
              { id: "b", text: "A helium nucleus ${}^{4}_{2}\\alpha$" },
              { id: "c", text: "A photon $\\gamma$" },
              { id: "d", text: "A proton ${}^{1}_{1}\\mathrm{p}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beta-minus decay", statement: "A neutron converts to a proton, emitting an electron {}^{0}_{-1}\\beta (and an antineutrino)." },
            ],
            steps: [
              { reasoning: "Beta-minus decay emits an electron; the charge is conserved because a neutron becomes a proton.", marks: 1, markCode: "M" },
              { reasoning: "Correct particle identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** an electron ${}^{0}_{-1}\\beta$",
            commonErrors: ["Confusing beta-minus with alpha decay."],
          },
        },
        {
          id: "physsl-u6-decay-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Carbon-14 ($^{14}_{6}$C) is a radioactive isotope that undergoes beta-minus decay.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Daughter $^{10}_{4}$Be; mass number decreases by 4, proton number decreases by 2" },
              { id: "b", text: "Daughter $^{14}_{6}$C; no change" },
              { id: "c", text: "Daughter $^{14}_{7}$N; mass number unchanged, proton number increases by 1" },
              { id: "d", text: "Daughter $^{14}_{5}$B; proton number decreases by 1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of A and Z", statement: "Mass number and proton number are conserved in nuclear equations." },
              { kind: "definition", name: "Beta-minus decay", statement: "{}^{0}_{-1}\\beta emitted; Z \\to Z + 1, A unchanged." },
            ],
            steps: [
              { reasoning: "Beta-minus keeps $A = 14$ and raises $Z$ from 6 to 7.", working: "^{14}_{6}\\mathrm{C} \\to {}^{14}_{7}\\mathrm{N} + {}^{0}_{-1}\\beta", marks: 1, markCode: "M" },
              { reasoning: "Check conservation: $A$: $14 = 14 + 0$; $Z$: $6 = 7 + (-1)$.", working: "A \\text{ and } Z \\text{ conserved} \\checkmark", marks: 1, markCode: "A" },
              { reasoning: "The daughter is nitrogen-14.", working: "{}^{14}_{7}\\mathrm{N}", marks: 1, markCode: "A" },
              { reasoning: "Option (a) matches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** daughter $^{14}_{7}$N; mass number unchanged, proton number increases by 1",
            commonErrors: ["Decreasing the proton number instead of increasing it.", "Changing the mass number in beta decay."],
          },
        },
        {
          id: "physsl-u6-decay-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Radium-226 ($^{226}_{88}$Ra) is an alpha emitter that decays to radon-222 ($^{222}_{86}$Rn).",
          parts: [
            { label: "a", prompt: "Write the nuclear equation for this alpha decay.", marks: 2 },
            { label: "b", prompt: "State the two conservation laws that must be satisfied in the equation and verify them.", marks: 2 },
            { label: "c", prompt: "Explain why gamma radiation is often emitted at the same time as the alpha particle.", marks: 2 },
            { label: "d", prompt: "State one reason why alpha radiation is much less penetrating than gamma radiation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of A and Z", statement: "Nucleon number and proton number are conserved in nuclear reactions." },
              { kind: "definition", name: "Alpha decay", statement: "{}^{4}_{2}\\alpha emitted; A \\to A-4, Z \\to Z-2." },
              { kind: "definition", name: "Gamma emission", statement: "Gamma photons carry away the energy when a nucleus de-excites from an excited state." },
            ],
            steps: [
              { part: "a", reasoning: "Write the decay with the alpha particle.", working: "^{226}_{88}\\mathrm{Ra} \\to {}^{222}_{86}\\mathrm{Rn} + {}^{4}_{2}\\alpha", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct nuclides and particle with balanced equation.", working: "\\text{balanced equation}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State conservation of mass number and proton (charge) number.", working: "A \\text{ and } Z \\text{ conserved}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify: $226 = 222 + 4$ and $88 = 86 + 2$.", working: "226 = 222+4,\\ 88 = 86+2 \\checkmark", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The daughter nucleus may be formed in an excited state; it de-excites by emitting gamma photons.", working: "\\text{excited state} \\to \\gamma", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gamma emission releases the excess nuclear energy without changing $A$ or $Z$.", working: "\\Delta E = hf", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Alpha particles are massive and doubly charged, so they interact strongly with matter and lose energy rapidly.", working: "\\text{strong ionisation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They are stopped by paper or a few cm of air, whereas uncharged gamma photons interact only weakly.", working: "\\text{stopped by paper/skin}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $^{226}_{88}\\mathrm{Ra} \\to {}^{222}_{86}\\mathrm{Rn} + {}^{4}_{2}\\alpha$ (b) mass number and proton number conserved: $226 = 222+4$, $88 = 86+2$ (c) the daughter nucleus may be excited and de-excites by emitting gamma photons (d) alpha particles are heavily ionising and lose energy quickly, so they are stopped by paper or skin",
            commonErrors: ["Writing the alpha particle as ${}^{4}_{2}\\mathrm{He}$ without recognising it as the emitted particle.", "Claiming gamma changes the nucleon or proton number."],
          },
        },
        {
          id: "physsl-u6-decay-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which type of radiation is stopped by a sheet of paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All three equally" },
              { id: "b", text: "Gamma radiation" },
              { id: "c", text: "Alpha radiation" },
              { id: "d", text: "Beta radiation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Penetration", statement: "Alpha particles are massive and doubly charged, so they ionise strongly and are stopped by paper or skin." },
            ],
            steps: [
              { reasoning: "Alpha radiation has the lowest penetration; beta needs a few mm of aluminium and gamma needs thick lead or concrete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** alpha radiation",
            commonErrors: ["Thinking gamma is the least penetrating because it is 'radiation'."],
          },
        },
        {
          id: "physsl-u6-decay-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In beta-minus decay of a nucleus, what happens to the mass number $A$ and the proton number $Z$ of the nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A$ decreases by 4; $Z$ decreases by 2" },
              { id: "b", text: "$A$ unchanged; $Z$ decreases by 1" },
              { id: "c", text: "$A$ unchanged; $Z$ increases by 1" },
              { id: "d", text: "$A$ increases by 1; $Z$ unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beta-minus decay", statement: "A neutron converts to a proton, emitting ${}^{0}_{-1}\\beta$; $A$ is unchanged and $Z \\to Z + 1$." },
            ],
            steps: [
              { reasoning: "The emitted electron has mass number 0, so the total mass number is conserved.", marks: 1, markCode: "M" },
              { reasoning: "Charge conservation: $Z_{\\text{daughter}} = Z + 1$ because a neutron (charge 0) becomes a proton (charge +1).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $A$ unchanged; $Z$ increases by 1",
            commonErrors: ["Confusing beta-minus with beta-plus decay."],
          },
        },
        {
          id: "physsl-u6-decay-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Uranium-238 ($^{238}_{92}$U) undergoes alpha decay.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number of the daughter nucleus", answer: 234 },
              { label: "Proton number of the daughter nucleus", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alpha decay", statement: "${}^{4}_{2}\\alpha$ emitted; daughter has $A - 4$ and $Z - 2$." },
            ],
            steps: [
              { reasoning: "Mass number decreases by 4.", working: "A = 238 - 4", marks: 1, markCode: "M" },
              { reasoning: "Daughter mass number.", working: "A = 234", marks: 1, markCode: "A" },
              { reasoning: "Proton number decreases by 2.", working: "Z = 92 - 2", marks: 1, markCode: "M" },
              { reasoning: "Daughter proton number.", working: "Z = 90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Daughter: ${}^{234}_{90}$Th (mass number 234, proton number 90)",
            commonErrors: ["Subtracting 2 from the mass number and 4 from the proton number."],
          },
        },
        {
          id: "physsl-u6-decay-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An alpha particle is emitted in radioactive decay.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number of an alpha particle", answer: 4 },
              { label: "Proton (charge) number of an alpha particle", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alpha particle", statement: "An alpha particle is a helium nucleus ${}^{4}_{2}\\alpha$: mass number 4, proton number 2." },
            ],
            steps: [
              { reasoning: "The alpha particle contains 2 protons and 2 neutrons.", working: "A = 4,\\ Z = 2", marks: 1, markCode: "M" },
              { reasoning: "Both values follow from the helium-nucleus composition.", working: "{}^{4}_{2}\\mathrm{He}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass number 4; proton number 2",
            commonErrors: ["Writing ${}^{2}_{4}\\alpha$ by swapping the superscript and subscript."],
          },
        },
        {
          id: "physsl-u6-decay-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Carbon-14 ($^{14}_{6}$C) undergoes beta-minus decay to form nitrogen-14.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number of the daughter nucleus", answer: 14 },
              { label: "Proton number of the daughter nucleus", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beta-minus decay", statement: "${}^{0}_{-1}\\beta$ emitted; $A$ unchanged, $Z \\to Z + 1$." },
              { kind: "law", name: "Conservation", statement: "Mass and charge (proton) number are conserved in nuclear equations." },
            ],
            steps: [
              { reasoning: "The beta particle has mass number 0, so $A$ is unchanged.", working: "A = 14", marks: 1, markCode: "M" },
              { reasoning: "Charge conservation raises $Z$ by 1: $6 = Z - 1$, so $Z = 7$.", working: "Z = 6 + 1 = 7", marks: 1, markCode: "M" },
              { reasoning: "The daughter is ${}^{14}_{7}$N, matching the stated product.", working: "{}^{14}_{7}\\mathrm{N} \\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass number 14; proton number 7",
            commonErrors: ["Decreasing the proton number instead of increasing it in beta-minus decay."],
          },
        },
        {
          id: "physsl-u6-decay-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A nucleus ${}^{210}_{83}$Bi first undergoes beta-minus decay and the daughter then undergoes alpha decay.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number after the beta-minus decay", answer: 210 },
              { label: "Proton number after the beta-minus decay", answer: 84 },
              { label: "Mass number after the alpha decay", answer: 206 },
              { label: "Proton number after the alpha decay", answer: 82 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beta-minus decay", statement: "${}^{0}_{-1}\\beta$ emitted; $A$ unchanged, $Z \\to Z + 1$." },
              { kind: "definition", name: "Alpha decay", statement: "${}^{4}_{2}\\alpha$ emitted; $A \\to A - 4$, $Z \\to Z - 2$." },
            ],
            steps: [
              { reasoning: "Beta-minus decay: $A$ unchanged, $Z$ increases by 1.", working: "A = 210,\\ Z = 83 + 1 = 84", marks: 1, markCode: "M" },
              { reasoning: "After beta-minus decay.", working: "{}^{210}_{84}\\mathrm{Po}", marks: 1, markCode: "A" },
              { reasoning: "Alpha decay on the daughter: $A$ decreases by 4, $Z$ decreases by 2.", working: "A = 210 - 4 = 206,\\ Z = 84 - 2 = 82", marks: 1, markCode: "M" },
              { reasoning: "After alpha decay.", working: "{}^{206}_{82}\\mathrm{Pb}", marks: 1, markCode: "A" },
              { reasoning: "Conservation check at each step.", working: "A \\text{ and } Z \\text{ conserved at every stage} \\checkmark", marks: 1, markCode: "R" },
            ],
            finalAnswer: "After beta-minus: $A = 210$, $Z = 84$; after alpha: $A = 206$, $Z = 82$",
            commonErrors: ["Applying the alpha-decay changes before the beta decay.", "Changing the mass number in the beta-minus step."],
          },
        },
        {
          id: "physsl-u6-decay-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about gamma radiation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It consists of helium nuclei" },
              { id: "b", text: "It is stopped by a sheet of paper" },
              { id: "c", text: "It changes the proton number of the nucleus when emitted" },
              { id: "d", text: "It is the most penetrating of the three radiations and carries no charge or mass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamma radiation", statement: "Gamma rays are high-energy photons: uncharged, massless, weakly ionising and very penetrating." },
            ],
            steps: [
              { reasoning: "Gamma radiation is electromagnetic, so it has no charge or mass and penetrates deeply.", marks: 1, markCode: "M" },
              { reasoning: "Emission of gamma does not change $A$ or $Z$; it only removes excitation energy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** it is the most penetrating of the three radiations and carries no charge or mass",
            commonErrors: ["Confusing gamma rays with alpha or beta particles."],
          },
        },
        {
          id: "physsl-u6-decay-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why is gamma radiation often emitted at the same time as an alpha or beta particle during radioactive decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma rays are needed to conserve charge" },
              { id: "b", text: "The daughter nucleus is often formed in an excited state and de-excites by emitting a gamma photon" },
              { id: "c", text: "Gamma emission converts the alpha particle into a beta particle" },
              { id: "d", text: "Gamma rays carry away the alpha particle's mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuclear de-excitation", statement: "A nucleus formed in an excited state releases the excess energy as a gamma photon without changing $A$ or $Z$." },
            ],
            steps: [
              { reasoning: "After alpha or beta decay the daughter nucleus may be left in an excited state.", marks: 1, markCode: "M" },
              { reasoning: "It de-excites to the ground state by emitting a gamma photon of energy $\\Delta E = hf$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** the daughter nucleus is often formed in an excited state and de-excites by emitting a gamma photon",
            commonErrors: ["Thinking gamma emission is a separate type of decay that changes the nucleus."],
          },
        },
        {
          id: "physsl-u6-decay-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Uranium-238 ($^{238}_{92}$U) undergoes two successive alpha decays followed by one beta-minus decay.",
          response: {
            type: "numeric",
            parts: [
              { label: "Final mass number", answer: 230 },
              { label: "Final proton number", answer: 89 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alpha decay", statement: "${}^{4}_{2}\\alpha$ emitted; each alpha decay gives $A \\to A - 4$, $Z \\to Z - 2$." },
              { kind: "definition", name: "Beta-minus decay", statement: "${}^{0}_{-1}\\beta$ emitted; $A$ unchanged, $Z \\to Z + 1$." },
            ],
            steps: [
              { reasoning: "Two alpha decays reduce $A$ by 8 and $Z$ by 4.", working: "A = 238 - 8 = 230,\\ Z = 92 - 4 = 88", marks: 1, markCode: "M" },
              { reasoning: "Intermediate values after the two alpha decays.", working: "{}^{230}_{88}\\mathrm{Ra}", marks: 1, markCode: "A" },
              { reasoning: "Beta-minus decay then leaves $A$ unchanged and raises $Z$ by 1.", working: "Z = 88 + 1 = 89,\\ A = 230", marks: 1, markCode: "M" },
              { reasoning: "Final values.", working: "{}^{230}_{89}\\mathrm{Ac}", marks: 1, markCode: "A" },
              { reasoning: "Conservation of $A$ and $Z$ verified at each step.", working: "A \\text{ and } Z \\text{ conserved} \\checkmark", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Final mass number 230; final proton number 89",
            commonErrors: ["Applying the beta decay before the alpha decays.", "Forgetting the beta-minus decay increases $Z$ by 1."],
          },
        },
        {
          id: "physsl-u6-decay-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Carbon-14 is ${}^{14}_{6}$C and the nitrogen it decays into is ${}^{14}_{7}$N.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of neutrons in carbon-14", answer: 8 },
              { label: "Number of neutrons in nitrogen-14", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nucleon composition", statement: "A nucleus has $A$ nucleons: $Z$ protons and $N = A - Z$ neutrons." },
            ],
            steps: [
              { reasoning: "Neutrons in ${}^{14}_{6}$C: $N = A - Z$.", working: "N = 14 - 6 = 8", marks: 1, markCode: "M" },
              { reasoning: "Neutrons in ${}^{14}_{7}$N.", working: "N = 14 - 7 = 7", marks: 1, markCode: "M" },
              { reasoning: "One neutron has converted to a proton in beta-minus decay.", working: "8 \\to 7 \\text{ neutrons},\\ 6 \\to 7 \\text{ protons}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Carbon-14 has 8 neutrons; nitrogen-14 has 7 neutrons",
            commonErrors: ["Reporting the proton number instead of the neutron number."],
          },
        },
        {
          id: "physsl-u6-decay-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Carbon-14 ($^{14}_{6}$C) is used in radiocarbon dating.",
          parts: [
            { label: "a", prompt: "Write the nuclear equation for the beta-minus decay of carbon-14.", marks: 2 },
            { label: "b", prompt: "State how the mass number and proton number change in this decay.", marks: 2 },
            { label: "c", prompt: "Explain why gamma radiation may also be emitted in this decay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beta-minus decay", statement: "${}^{0}_{-1}\\beta$ emitted; $A$ unchanged, $Z \\to Z + 1$." },
              { kind: "principle", name: "Nuclear de-excitation", statement: "An excited daughter nucleus emits gamma photons to reach the ground state." },
            ],
            steps: [
              { part: "a", reasoning: "Write the decay with the beta particle and an antineutrino.", working: "^{14}_{6}\\mathrm{C} \\to {}^{14}_{7}\\mathrm{N} + {}^{0}_{-1}\\beta + \\bar{\\nu}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct daughter nuclide with a balanced equation.", working: "A: 14 = 14 + 0,\\ Z: 6 = 7 - 1 \\checkmark", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mass number is unchanged; proton number increases by 1.", working: "A: 14 \\to 14,\\ Z: 6 \\to 7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This reflects a neutron converting into a proton inside the nucleus.", working: "n \\to p + e^{-} + \\bar{\\nu}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The daughter nucleus ${}^{14}_{7}$N may be formed in an excited state.", working: "\\text{excited daughter}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It releases the excess energy by emitting a gamma photon; this does not change $A$ or $Z$.", working: "\\Delta E = hf,\\ \\Delta A = \\Delta Z = 0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $^{14}_{6}\\mathrm{C} \\to {}^{14}_{7}\\mathrm{N} + {}^{0}_{-1}\\beta + \\bar{\\nu}$ (b) $A$ unchanged at 14, $Z$ increases from 6 to 7 (c) the daughter nucleus may be excited and de-excites by emitting a gamma photon",
            commonErrors: ["Writing the daughter as ${}^{10}_{4}\\mathrm{Be}$ (that is alpha decay).", "Claiming gamma emission changes the nucleon number."],
          },
        },
        {
          id: "physsl-u6-decay-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Uranium-238 ($^{238}_{92}$U) is the start of a radioactive decay series. Its first alpha decay produces thorium-234 ($^{234}_{90}$Th), which then undergoes beta-minus decay.",
          parts: [
            { label: "a", prompt: "Write the nuclear equation for the alpha decay of uranium-238.", marks: 2 },
            { label: "b", prompt: "Write the nuclear equation for the beta-minus decay of thorium-234.", marks: 2 },
            { label: "c", prompt: "State the two conservation laws used in these equations and verify them for the beta-minus decay.", marks: 2 },
            { label: "d", prompt: "Compare the penetrating power and ionising ability of alpha and beta radiation.", marks: 2 },
            { label: "e", prompt: "Explain why the emission of gamma radiation does not alter the mass number or proton number of the nucleus.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of A and Z", statement: "Mass (nucleon) number and proton (charge) number are conserved in nuclear equations." },
              { kind: "definition", name: "Alpha decay", statement: "${}^{4}_{2}\\alpha$ emitted; $A \\to A - 4$, $Z \\to Z - 2$." },
              { kind: "definition", name: "Beta-minus decay", statement: "${}^{0}_{-1}\\beta$ emitted; $A$ unchanged, $Z \\to Z + 1$." },
              { kind: "property", name: "Radiation properties", statement: "Alpha: strongly ionising, stopped by paper. Beta: moderately ionising, stopped by a few mm of aluminium. Gamma: weakly ionising, very penetrating." },
            ],
            steps: [
              { part: "a", reasoning: "Alpha decay emits ${}^{4}_{2}\\alpha$.", working: "^{238}_{92}\\mathrm{U} \\to {}^{234}_{90}\\mathrm{Th} + {}^{4}_{2}\\alpha", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct nuclides with a balanced equation.", working: "A: 238 = 234 + 4,\\ Z: 92 = 90 + 2 \\checkmark", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Beta-minus decay emits an electron; $Z$ increases by 1.", working: "^{234}_{90}\\mathrm{Th} \\to {}^{234}_{91}\\mathrm{Pa} + {}^{0}_{-1}\\beta + \\bar{\\nu}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct daughter nuclide with a balanced equation.", working: "A: 234 = 234 + 0,\\ Z: 90 = 91 - 1 \\checkmark", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State conservation of mass number and proton number.", working: "A \\text{ and } Z \\text{ conserved}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify for the beta decay: $A$: $234 = 234 + 0$; $Z$: $90 = 91 + (-1)$.", working: "234 = 234,\\ 90 = 91 - 1 \\checkmark", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Alpha is much more strongly ionising but less penetrating; beta is moderately ionising and more penetrating.", working: "\\alpha: \\text{strong ionisation, stopped by paper};\\ \\beta: \\text{moderate, stopped by mm Al}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Alpha's large mass and charge cause rapid energy loss; beta's small mass and single charge allow deeper penetration.", working: "\\text{ionisation} \\propto \\text{charge and mass}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A gamma photon carries energy but has no mass or charge, so it does not change the numbers of protons or neutrons.", working: "\\gamma: A = 0,\\ Z = 0", marks: 1, markCode: "M" },
              { part: "e", reasoning: "It only removes excitation energy from the nucleus, taking it to a lower energy state.", working: "\\Delta E = hf,\\ \\Delta A = \\Delta Z = 0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $^{238}_{92}\\mathrm{U} \\to {}^{234}_{90}\\mathrm{Th} + {}^{4}_{2}\\alpha$ (b) $^{234}_{90}\\mathrm{Th} \\to {}^{234}_{91}\\mathrm{Pa} + {}^{0}_{-1}\\beta + \\bar{\\nu}$ (c) mass number and proton number conserved: $234 = 234 + 0$, $90 = 91 - 1$ (d) alpha is strongly ionising but stopped by paper; beta is less ionising and penetrates further (e) gamma is a photon with $A = Z = 0$, so it only carries away energy",
            commonErrors: ["Writing the beta daughter as ${}^{234}_{89}$Ac instead of ${}^{234}_{91}$Pa.", "Claiming gamma changes the nucleon number."],
          },
        },
      ],
    },
    {
      id: "physsl-u6-half-life",
      title: "Half-life and activity",
      skill: "Use $N = N_0(1/2)^{t/T_{1/2}}$ and $A = \\lambda N$ to calculate remaining nuclei, fractions decayed and activity.",
      lesson: {
        sections: [
          {
            heading: "Exponential decay and half-life",
            body: "Radioactive decay is **random** but follows a definite statistical law: in each half-life $T_{1/2}$ half of the undecayed nuclei decay. After $n$ half-lives the number remaining is $N = N_0 \\times (1/2)^n$ where $n = t/T_{1/2}$. The decay is exponential — a constant fraction decays per unit time — so the half-life is the same whether measured at the start or after billions of decays.",
          },
          {
            heading: "Decay constant and activity",
            body: "The **decay constant** $\\lambda$ is the probability of decay per unit time per nucleus, related to the half-life by $\\lambda = \\ln 2/T_{1/2}$. The **activity** $A = \\lambda N$ is the number of decays per second, measured in becquerels (Bq = s$^{-1}$). Activity decreases exponentially as the sample decays.",
          },
          {
            heading: "Applications",
            body: "Half-life is used in radiometric dating (e.g. carbon-14 dating of archaeological samples), in medicine (diagnostic tracers and radiotherapy), and in monitoring nuclear waste. A short half-life means high initial activity that falls quickly; a long half-life means low, persistent activity.",
          },
        ],
        keyFormulas: [
          { name: "Remaining nuclei", statement: "N = N_0 (1/2)^{t/T_{1/2}}" },
          { name: "Decay constant", statement: "\\lambda = \\ln 2 / T_{1/2} \\approx 0.693/T_{1/2}" },
          { name: "Activity", statement: "A = \\lambda N" },
        ],
        workedExample: {
          problem: "A sample initially contains $8.0 \\times 10^4$ undecayed nuclei of a nuclide with half-life $5.0$ days. How many remain after $15$ days?",
          solution: "$15$ days $= 3$ half-lives. $N = 8.0 \\times 10^4 \\times (1/2)^3 = 8.0 \\times 10^4/8 = 1.0 \\times 10^4$ nuclei.",
        },
      },
      questions: [
        {
          id: "physsl-u6-half-life-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is meant by the half-life of a radioactive nuclide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The time for all the nuclei to decay" },
              { id: "b", text: "The time for the sample to become stable" },
              { id: "c", text: "The time for half of the undecayed nuclei to decay" },
              { id: "d", text: "The time for the activity to halve" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "The time for half of the undecayed nuclei in a sample to decay." },
            ],
            steps: [
              { reasoning: "Half-life is defined as the time for half the undecayed nuclei to decay.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the time for half of the undecayed nuclei to decay",
            commonErrors: ["Confusing half-life with the mean lifetime or the time for complete decay."],
          },
        },
        {
          id: "physsl-u6-half-life-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A radioactive sample has a half-life of $10$ days. What fraction of the original undecayed nuclei remain after $30$ days?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1/2$" },
              { id: "b", text: "$1/4$" },
              { id: "c", text: "$3/10$" },
              { id: "d", text: "$1/8$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining fraction", statement: "N/N_0 = (1/2)^{t/T_{1/2}}" },
            ],
            steps: [
              { reasoning: "Number of half-lives elapsed.", working: "n = \\frac{30}{10} = 3", marks: 1, markCode: "M" },
              { reasoning: "Fraction remaining is $(1/2)^3$.", working: "\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1/8$",
            commonErrors: ["Using $t/T_{1/2} = 30/10 = 3$ as the fraction directly."],
          },
        },
        {
          id: "physsl-u6-half-life-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sample initially contains $1.2 \\times 10^{6}$ undecayed nuclei of a nuclide with half-life $4.0$ h.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.0 \\times 10^{5}$ nuclei remain after $8$ h" },
              { id: "b", text: "$3.0 \\times 10^{5}$ nuclei remain after $12$ h" },
              { id: "c", text: "$1.5 \\times 10^{5}$ nuclei remain after $12$ h" },
              { id: "d", text: "$6.0 \\times 10^{5}$ nuclei remain after $12$ h" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining nuclei", statement: "N = N_0 (1/2)^{t/T_{1/2}}" },
            ],
            steps: [
              { reasoning: "Number of half-lives in $12$ h.", working: "n = \\frac{12}{4.0} = 3", marks: 1, markCode: "M" },
              { reasoning: "Apply the decay law.", working: "N = 1.2 \\times 10^{6} \\times \\left(\\frac{1}{2}\\right)^3 = 1.2 \\times 10^{6}/8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N = 1.5 \\times 10^{5} \\text{ nuclei}", marks: 1, markCode: "A" },
              { reasoning: "Option (b) gives $1.5 \\times 10^5$ nuclei after $12$ h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1.5 \\times 10^{5}$ nuclei remain after $12$ h",
            commonErrors: ["Halving once instead of three times.", "Using $12/4.0 = 3$ as the number of nuclei remaining."],
          },
        },
        {
          id: "physsl-u6-half-life-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A radioactive sample initially contains $6.4 \\times 10^{4}$ undecayed nuclei with a half-life of $8.0$ days.",
          parts: [
            { label: "a", prompt: "Calculate the number of undecayed nuclei remaining after $24$ days.", marks: 2 },
            { label: "b", prompt: "Calculate the fraction of the original nuclei that have decayed after $16$ days.", marks: 2 },
            { label: "c", prompt: "Calculate the decay constant $\\lambda$.", marks: 2 },
            { label: "d", prompt: "Calculate the activity of the sample after $24$ days.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining nuclei", statement: "N = N_0 (1/2)^{t/T_{1/2}}" },
              { kind: "formula", name: "Decay constant", statement: "\\lambda = \\ln 2/T_{1/2} \\approx 0.693/T_{1/2}" },
              { kind: "formula", name: "Activity", statement: "A = \\lambda N" },
            ],
            steps: [
              { part: "a", reasoning: "$24$ days is 3 half-lives; apply the decay law.", working: "N = 6.4 \\times 10^{4} \\times \\left(\\frac{1}{2}\\right)^3 = 6.4 \\times 10^{4}/8 = 8.0 \\times 10^{3}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "After $16$ days (2 half-lives) the fraction remaining is $(1/2)^2 = 1/4$.", working: "\\frac{N}{N_0} = \\frac{1}{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fraction decayed is $1 - 1/4$.", working: "1 - \\frac{1}{4} = \\frac{3}{4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply $\\lambda = \\ln 2/T_{1/2}$.", working: "\\lambda = \\frac{0.693}{8.0} = 0.0866 \\text{ day}^{-1}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Convert $\\lambda$ to s$^{-1}$: $\\lambda = 0.693/(8.0 \\times 86400) = 1.00 \\times 10^{-6}$ s$^{-1}$, then apply $A = \\lambda N$ with $N = 8.0 \\times 10^3$.", working: "A = 1.00 \\times 10^{-6} \\times 8.0 \\times 10^{3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "A = 8.0 \\times 10^{-3} \\text{ Bq}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $N = 8.0 \\times 10^{3}$ nuclei (b) $3/4$ decayed (c) $\\lambda = 0.0866$ day$^{-1}$ ($1.00 \\times 10^{-6}$ s$^{-1}$) (d) $A \\approx 8.0 \\times 10^{-3}$ Bq",
            commonErrors: ["Using the initial $N_0$ instead of the remaining $N$ in the activity calculation.", "Forgetting to convert $\\lambda$ to s$^{-1}$ when giving activity in Bq."],
            examinerNote: "Part (d) accepts the activity in s$^{-1}$; if students work in days they may quote $A \\approx 693$ decays per day — award the mark if the method is correct.",
          },
        },
        {
          id: "physsl-u6-half-life-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the unit of activity of a radioactive sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watt (W)" },
              { id: "b", text: "Joule (J)" },
              { id: "c", text: "Becquerel (Bq), equal to one decay per second" },
              { id: "d", text: "Metre (m)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activity", statement: "Activity $A = \\lambda N$ is the number of decays per second, measured in becquerels (Bq = s$^{-1}$)." },
            ],
            steps: [
              { reasoning: "Activity is a rate of decay, so its SI unit is decays per second, the becquerel.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** becquerel (Bq), equal to one decay per second",
            commonErrors: ["Confusing activity with energy or power."],
          },
        },
        {
          id: "physsl-u6-half-life-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A radioactive sample has a half-life of $8.0$ days. What fraction of the original undecayed nuclei remain after $16$ days?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1/4$" },
              { id: "b", text: "$1/2$" },
              { id: "c", text: "$1/8$" },
              { id: "d", text: "$1/16$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining fraction", statement: "N/N_0 = (1/2)^{t/T_{1/2}}" },
            ],
            steps: [
              { reasoning: "Number of half-lives elapsed.", working: "n = \\frac{16}{8.0} = 2", marks: 1, markCode: "M" },
              { reasoning: "Fraction remaining is $(1/2)^2$.", working: "\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1/4$",
            commonErrors: ["Halving only once instead of twice."],
          },
        },
        {
          id: "physsl-u6-half-life-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Radiocarbon dating uses carbon-14, which has a half-life of $5730$ years. A sample of wood contains $1/8$ of the carbon-14 expected in living wood. Estimate the age of the wood.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of half-lives elapsed", answer: 3 },
              { label: "Age of the wood", answer: 17190, tolerance: 50, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining fraction", statement: "N/N_0 = (1/2)^{t/T_{1/2}}" },
            ],
            steps: [
              { reasoning: "$1/8 = (1/2)^3$, so 3 half-lives have elapsed.", working: "\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} \\Rightarrow n = 3", marks: 1, markCode: "M" },
              { reasoning: "Half-lives elapsed value.", working: "n = 3", marks: 1, markCode: "A" },
              { reasoning: "Age is $n$ times the half-life.", working: "t = 3 \\times 5730", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "t = 1.72 \\times 10^{4} \\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 half-lives; age $\\approx 17\\,190$ years",
            commonErrors: ["Taking $1/8$ of the half-life instead of finding the number of half-lives.", "Using 5600 years (the often-quoted approximate half-life) instead of 5730."],
          },
        },
        {
          id: "physsl-u6-half-life-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A sample initially contains $4.8 \\times 10^{4}$ undecayed nuclei of a nuclide with half-life $3.0$ h.",
          response: {
            type: "numeric",
            parts: [
              { label: "Half-lives elapsed after 9.0 h", answer: 3 },
              { label: "Undecayed nuclei remaining after 9.0 h", answer: 6000, unit: "nuclei" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining nuclei", statement: "N = N_0 (1/2)^{t/T_{1/2}}" },
            ],
            steps: [
              { reasoning: "Number of half-lives in 9.0 h.", working: "n = \\frac{9.0}{3.0} = 3", marks: 1, markCode: "M" },
              { reasoning: "Apply the decay law: divide by $2^3$.", working: "N = 4.8 \\times 10^{4} \\times \\left(\\frac{1}{2}\\right)^3 = \\frac{4.8 \\times 10^{4}}{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N = 6.0 \\times 10^{3} \\text{ nuclei}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 half-lives; $6.0 \\times 10^{3}$ undecayed nuclei remain",
            commonErrors: ["Dividing by 3 instead of by $2^3$."],
          },
        },
        {
          id: "physsl-u6-half-life-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A radioactive nuclide has a half-life of $10$ s and a sample contains $2.0 \\times 10^{4}$ undecayed nuclei.",
          response: {
            type: "numeric",
            parts: [
              { label: "Decay constant", answer: 0.0693, tolerance: 0.0005, unit: "s^{-1}" },
              { label: "Activity of the sample", answer: 1386, tolerance: 10, unit: "Bq" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Decay constant", statement: "\\lambda = \\ln 2/T_{1/2} \\approx 0.693/T_{1/2}" },
              { kind: "formula", name: "Activity", statement: "A = \\lambda N" },
            ],
            steps: [
              { reasoning: "Decay constant from the half-life.", working: "\\lambda = \\frac{0.693}{10} = 0.0693 \\text{ s}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Decay constant value.", working: "\\lambda = 0.0693 \\text{ s}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "Activity is $\\lambda N$.", working: "A = 0.0693 \\times 2.0 \\times 10^{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A = 1.39 \\times 10^{3} \\text{ Bq}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 0.0693$ s$^{-1}$; $A = 1.39 \\times 10^{3}$ Bq",
            commonErrors: ["Using $T_{1/2}$ directly as $\\lambda$ instead of $\\ln 2/T_{1/2}$.", "Forgetting that $N$ must be the current number of undecayed nuclei."],
          },
        },
        {
          id: "physsl-u6-half-life-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The activity of a radioactive sample falls from $800$ Bq to $200$ Bq in $12$ days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of half-lives elapsed", answer: 2 },
              { label: "Half-life of the nuclide", answer: 6.0, tolerance: 0.01, unit: "days" },
              { label: "Fraction of the original activity remaining", answer: 0.25, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity follows decay law", statement: "Since $A = \\lambda N$ and $N$ falls exponentially, activity falls by the same factor $(1/2)^n$ per half-life." },
            ],
            steps: [
              { reasoning: "$200/800 = 1/4 = (1/2)^2$, so two half-lives elapsed.", working: "\\frac{200}{800} = \\frac{1}{4} \\Rightarrow n = 2", marks: 1, markCode: "M" },
              { reasoning: "Half-lives elapsed.", working: "n = 2", marks: 1, markCode: "A" },
              { reasoning: "Half-life is the elapsed time divided by the number of half-lives.", working: "T_{1/2} = \\frac{12}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "T_{1/2} = 6.0 \\text{ days}", marks: 1, markCode: "A" },
              { reasoning: "Fraction remaining is $(1/2)^2$.", working: "\\frac{200}{800} = 0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 half-lives; $T_{1/2} = 6.0$ days; fraction remaining $= 0.25$",
            commonErrors: ["Assuming activity falls linearly with time.", "Dividing the time by the activity ratio instead of the number of half-lives."],
          },
        },
        {
          id: "physsl-u6-half-life-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why does the half-life of a radioactive nuclide remain the same throughout the decay of a sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the sample is kept at constant temperature" },
              { id: "b", text: "Because activity does not change with time" },
              { id: "c", text: "Because every nucleus has the same lifetime" },
              { id: "d", text: "Because a constant fraction of the remaining nuclei decays per unit time" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exponential decay", statement: "Decay is random but statistical: a constant fraction of undecayed nuclei decays per unit time, so $T_{1/2}$ is constant." },
            ],
            steps: [
              { reasoning: "Each nucleus has a fixed probability of decay per unit time $\\lambda$; the fraction decaying is constant.", marks: 1, markCode: "M" },
              { reasoning: "Individual lifetimes vary randomly, but the statistical half-life is a property of the nuclide.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** because a constant fraction of the remaining nuclei decays per unit time",
            commonErrors: ["Thinking all nuclei decay after exactly one half-life."],
          },
        },
        {
          id: "physsl-u6-half-life-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The activity of a radioactive source falls to $1/16$ of its initial value. How many half-lives have elapsed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "4" },
              { id: "c", text: "16" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining fraction", statement: "N/N_0 = (1/2)^n" },
            ],
            steps: [
              { reasoning: "Solve $(1/2)^n = 1/16$.", working: "\\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4", marks: 1, markCode: "M" },
              { reasoning: "So $n = 4$ half-lives.", working: "n = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Reading $1/16$ as the number of half-lives instead of $(1/2)^n$."],
          },
        },
        {
          id: "physsl-u6-half-life-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A radioactive source has an initial activity of $1.0 \\times 10^{6}$ Bq and a half-life of $8.0$ days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Half-lives elapsed after 24 days", answer: 3 },
              { label: "Activity after 24 days", answer: 125000, tolerance: 500, unit: "Bq" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Activity decay", statement: "A = A_0 (1/2)^{t/T_{1/2}} since A = \\lambda N" },
            ],
            steps: [
              { reasoning: "Number of half-lives in 24 days.", working: "n = \\frac{24}{8.0} = 3", marks: 1, markCode: "M" },
              { reasoning: "Half-lives elapsed value.", working: "n = 3", marks: 1, markCode: "A" },
              { reasoning: "Activity falls by the same factor as the number of undecayed nuclei.", working: "A = 1.0 \\times 10^{6} \\times \\left(\\frac{1}{2}\\right)^3 = \\frac{10^{6}}{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A = 1.25 \\times 10^{5} \\text{ Bq}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 half-lives; $A = 1.25 \\times 10^{5}$ Bq",
            commonErrors: ["Using the initial activity as if it stayed constant.", "Dividing by 3 instead of by $2^3$."],
          },
        },
        {
          id: "physsl-u6-half-life-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A nuclide has a half-life of $2.0$ days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Decay constant in day$^{-1}$", answer: 0.347, tolerance: 0.001, unit: "day^{-1}" },
              { label: "Decay constant in s$^{-1}$", answer: 4.01e-6, tolerance: 5e-8, unit: "s^{-1}" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Decay constant", statement: "\\lambda = \\ln 2/T_{1/2} \\approx 0.693/T_{1/2}" },
            ],
            steps: [
              { reasoning: "Apply $\\lambda = \\ln 2/T_{1/2}$ in days.", working: "\\lambda = \\frac{0.693}{2.0} = 0.347 \\text{ day}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Decay constant in day$^{-1}$.", working: "\\lambda = 0.347 \\text{ day}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "Convert to s$^{-1}$ by dividing by the number of seconds in a day.", working: "\\lambda = \\frac{0.347}{86400}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\lambda = 4.01 \\times 10^{-6} \\text{ s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 0.347$ day$^{-1}$ $= 4.01 \\times 10^{-6}$ s$^{-1}$",
            commonErrors: ["Multiplying by 86400 instead of dividing when converting day$^{-1}$ to s$^{-1}$.", "Using $T_{1/2}$ as the decay constant."],
          },
        },
        {
          id: "physsl-u6-half-life-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "An archaeological sample of wood contains only $1/16$ of the carbon-14 found in living wood. The half-life of carbon-14 is $5730$ years.",
          parts: [
            { label: "a", prompt: "State what is meant by the half-life of a radioactive nuclide.", marks: 1 },
            { label: "b", prompt: "Calculate the number of half-lives that have elapsed.", marks: 2 },
            { label: "c", prompt: "Calculate the age of the sample.", marks: 2 },
            { label: "d", prompt: "State one limitation of radiocarbon dating.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "The time for half of the undecayed nuclei in a sample to decay." },
              { kind: "formula", name: "Remaining fraction", statement: "N/N_0 = (1/2)^{t/T_{1/2}}" },
            ],
            steps: [
              { part: "a", reasoning: "Half-life is the time for half of the undecayed nuclei to decay.", working: "T_{1/2}: N \\to N/2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Recognise $1/16 = (1/2)^4$.", working: "\\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So 4 half-lives have elapsed.", working: "n = 4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Age is $n$ times the half-life.", working: "t = 4 \\times 5730", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "t = 2.29 \\times 10^{4} \\text{ years}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any one of: unreliable beyond ~$50\\,000$ years; requires organic material; assumes constant initial C-14 ratio / no contamination.", working: "\\text{e.g. only works for organic samples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) time for half the undecayed nuclei to decay (b) 4 half-lives (c) $\\approx 22\\,900$ years (d) e.g. only usable for organic materials and unreliable for very old samples",
            commonErrors: ["Taking $1/16$ as the age directly.", "Using 5730 years per half-life incorrectly as a linear rate."],
          },
        },
        {
          id: "physsl-u6-half-life-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A sample initially contains $2.4 \\times 10^{7}$ undecayed nuclei of a nuclide with half-life $6.0$ h.",
          parts: [
            { label: "a", prompt: "Calculate the number of undecayed nuclei remaining after $18$ h.", marks: 2 },
            { label: "b", prompt: "Calculate the fraction of the original nuclei that have decayed after $12$ h.", marks: 2 },
            { label: "c", prompt: "Calculate the decay constant $\\lambda$ in s$^{-1}$.", marks: 2 },
            { label: "d", prompt: "Calculate the activity of the sample after $18$ h.", marks: 2 },
            { label: "e", prompt: "State one medical or industrial use of a radioactive nuclide with a short half-life.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining nuclei", statement: "N = N_0 (1/2)^{t/T_{1/2}}" },
              { kind: "formula", name: "Decay constant", statement: "\\lambda = \\ln 2/T_{1/2}" },
              { kind: "formula", name: "Activity", statement: "A = \\lambda N" },
            ],
            steps: [
              { part: "a", reasoning: "$18$ h is 3 half-lives; apply the decay law.", working: "N = 2.4 \\times 10^{7} \\times \\left(\\frac{1}{2}\\right)^3 = \\frac{2.4 \\times 10^{7}}{8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "N = 3.0 \\times 10^{6} \\text{ nuclei}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "After $12$ h (2 half-lives) the fraction remaining is $(1/2)^2 = 1/4$.", working: "\\frac{N}{N_0} = \\frac{1}{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fraction decayed is $1 - 1/4$.", working: "1 - \\frac{1}{4} = \\frac{3}{4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply $\\lambda = \\ln 2/T_{1/2}$ with $T_{1/2} = 6.0$ h $= 21600$ s.", working: "\\lambda = \\frac{0.693}{21600}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\lambda = 3.2 \\times 10^{-5} \\text{ s}^{-1}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply $A = \\lambda N$ with the remaining $N = 3.0 \\times 10^{6}$.", working: "A = 3.2 \\times 10^{-5} \\times 3.0 \\times 10^{6}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "A = 96 \\text{ Bq}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any one of: medical tracers (e.g. technetium-99m); radiotherapy sources; industrial gauges; smoke detectors.", working: "\\text{e.g. medical imaging tracer}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $N = 3.0 \\times 10^{6}$ nuclei (b) $3/4$ decayed (c) $\\lambda = 3.2 \\times 10^{-5}$ s$^{-1}$ (d) $A \\approx 96$ Bq (e) e.g. a short-lived tracer in medical diagnosis",
            commonErrors: ["Using $N_0$ instead of the remaining $N$ in the activity calculation.", "Forgetting to convert the half-life to seconds for $\\lambda$ in s$^{-1}$."],
            examinerNote: "Accept $A$ in the range $90$–$100$ Bq for rounding of $\\lambda$.",
          },
        },
      ],
    },
  ],
};
