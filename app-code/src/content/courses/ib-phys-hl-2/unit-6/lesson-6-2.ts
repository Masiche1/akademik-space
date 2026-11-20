import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "physhl-u6-lesson-6-2",
  code: "6-2",
  title: "Radioactive Decay and Applications",
  goal: "I CAN describe alpha, beta and gamma decay, apply the decay law $N = N_0 e^{-\\lambda t}$, calculate half-life and activity, and explain applications in dating, medicine and industry.",
  standards: ["Paper 1", "Paper 2", "AHL E3"],
  vocabulary: [
    {
      term: "Radioactive decay",
      definition:
        "The spontaneous transformation of an unstable nucleus into a more stable one, emitting radiation.",
    },
    {
      term: "Half-life ($t_{1/2}$)",
      definition:
        "The time for half the undecayed nuclei to decay; $t_{1/2} = \\ln 2 / \\lambda$ where $\\lambda$ is decay constant.",
    },
    {
      term: "Activity ($A$)",
      definition:
        "The rate of decay: $A = \\lambda N$ measured in becquerels (decays per second).",
    },
    {
      term: "Decay constant ($\\lambda$)",
      definition:
        "The probability of decay per unit time; $\\lambda = \\ln 2 / t_{1/2}$.",
    },
    {
      term: "Alpha decay",
      definition:
        "Emission of helium-4 nucleus ($^4_2\\alpha$): heavy nuclei reduce A by 4, Z by 2.",
    },
    {
      term: "Beta decay",
      definition:
        "$\\beta^-$: neutron → proton + electron ($^0_{-1}\\beta$); $\\beta^+$: proton → neutron + positron.",
    },
  ],
  concepts: [
    {
      id: "physhl-u6-decay-types",
      title: "Types of radioactive decay",
      skill:
        "Describe alpha, beta-minus, beta-plus and gamma decay, write decay equations, and identify decay type from mass/charge changes.",
      lesson: {
        sections: [
          {
            heading: "Alpha decay",
            body: "Heavy nuclei (A > ~200) emit an alpha particle — a helium-4 nucleus ($^4_2\\alpha$). Example: $^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^4_2\\alpha$. Mass number decreases by 4, atomic number by 2. Alpha particles are heavy, charged (+2) → strongly ionising but poorly penetrating (stopped by paper/skin).",
          },
          {
            heading: "Beta decay",
            body: "$\\beta^-$ decay: a neutron converts to a proton, emitting an electron ($^0_{-1}\\beta$) and antineutrino: $n \\to p + e^- + \\bar{\\nu}$. Mass number unchanged, Z increases by 1. $\\beta^+$ decay: proton → neutron + positron ($^0_{+1}\\beta^+$). Beta particles are lighter, singly charged → moderately penetrating (stopped by aluminium).",
          },
          {
            heading: "Gamma decay",
            body: "After alpha or beta decay, the nucleus may be left in an excited state. It emits gamma rays ($^0_0\\gamma$) — high-energy photons — to reach ground state. Gamma rays are uncharged, very penetrating (need lead/concrete). No change in A or Z. Often accompanies alpha/beta decay.",
          },
        ],
        keyFormulas: [
          {
            name: "Alpha",
            statement: "$^A_Z X \\to ^{A-4}_{Z-2}Y + ^4_2\\alpha$",
          },
          {
            name: "Beta-minus",
            statement: "$^A_Z X \\to ^A_{Z+1}Y + ^0_{-1}\\beta + \\bar{\\nu}$",
          },
          {
            name: "Beta-plus",
            statement: "$^A_Z X \\to ^A_{Z-1}Y + ^0_{+1}\\beta^+ + \\nu$",
          },
          {
            name: "Gamma",
            statement: "$^A_Z X^* \\to ^A_Z X + \\gamma$ — no change in A or Z",
          },
        ],
        workedExample: {
          problem:
            "Write the decay equation for $^{14}_6\\text{C}$ undergoing beta-minus decay.",
          solution:
            "$^{14}_6\\text{C} \\to ^{14}_7\\text{N} + ^0_{-1}\\beta + \\bar{\\nu}$. A stays 14, Z increases 6→7.",
        },
      },
      questions: [
        {
          id: "physhl-u6-dt-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In beta-minus decay, a neutron converts to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A proton + electron + antineutrino" },
              { id: "b", text: "A proton + positron" },
              { id: "c", text: "An alpha particle" },
              { id: "d", text: "A gamma photon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-minus",
                statement:
                  "$n \\to p + e^- + \\bar{\\nu}$ — neutron becomes proton.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Beta-minus: neutron → proton + electron + antineutrino.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Proton + electron + antineutrino",
            commonErrors: ["Choosing positron — that's beta-PLUS decay."],
          },
        },
        {
          id: "physhl-u6-dt-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Write the decay equation for $^{210}_{84}\\text{Po}$ undergoing alpha decay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alpha decay",
                statement: "$^A_Z X \\to ^{A-4}_{Z-2}Y + ^4_2\\alpha$",
              },
            ],
            steps: [
              {
                reasoning: "A decreases by 4: 210 → 206.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Z decreases by 2: 84 → 82 (lead).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$^{210}_{84}\\text{Po} \\to ^{206}_{82}\\text{Pb} + ^4_2\\alpha$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$^{210}_{84}\\text{Po} \\to ^{206}_{82}\\text{Pb} + ^4_2\\alpha$",
            commonErrors: [
              "Wrong A/Z change — alpha removes 4 mass units and 2 charge.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A radioactive nucleus undergoes beta-plus decay. Explain what happens to the proton number and neutron number, and identify the emitted particle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-plus",
                statement:
                  "Proton → neutron + positron; Z decreases by 1, A unchanged.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proton converts to neutron: Z decreases by 1, N increases by 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A unchanged (nucleon count conserved).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Emitted particle is positron ($^0_{+1}\\beta^+$) + neutrino.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Occurs in proton-rich nuclei to restore stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Z−1, N+1, A same; emits positron + neutrino.",
            commonErrors: [
              "Confusing with beta-minus — beta-plus converts p→n, not n→p.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Uranium-238 undergoes a decay series: $^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} \\to ^{234}_{91}\\text{Pa} \\to ^{234}_{92}\\text{U}$.",
          parts: [
            {
              label: "a",
              prompt: "Identify the decay type for each step.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Write the equations for each decay.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why the final nucleus is more stable.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decay series",
                statement:
                  "Each decay moves toward stability; A may stay same (beta) or drop by 4 (alpha).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Step 1: A 238→234, Z 92→90 → alpha decay.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Step 2: A same 234, Z 90→91 → beta-minus.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Step 3: A same 234, Z 91→92 → beta-minus.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^4_2\\alpha$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$^{234}_{90}\\text{Th} \\to ^{234}_{91}\\text{Pa} + ^0_{-1}\\beta + \\bar{\\nu}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$^{234}_{91}\\text{Pa} \\to ^{234}_{92}\\text{U} + ^0_{-1}\\beta + \\bar{\\nu}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Each step moves toward valley of stability — lower energy state.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Final U-234 still radioactive but more stable than initial U-238.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) α, β⁻, β⁻. (b) Equations as shown. (c) Moving toward stability.",
            commonErrors: ["Mislabelling step 2/3 — Z increases → beta-minus."],
          },
        },
        {
          id: "physhl-u6-dt-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In alpha decay, the daughter nucleus has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A$ reduced by 4 and $Z$ reduced by 2" },
              { id: "b", text: "$A$ unchanged and $Z$ increased by 1" },
              { id: "c", text: "$A$ reduced by 2 and $Z$ unchanged" },
              { id: "d", text: "$A$ and $Z$ both unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alpha decay",
                statement: "$^A_ZX\\to^{A-4}_{Z-2}Y+^4_2\\alpha$",
              },
            ],
            steps: [
              {
                reasoning:
                  "An alpha particle removes 4 nucleons and 2 protons from the nucleus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $A-4$, $Z-2$",
            commonErrors: [
              "Changing only $A$ — charge must also be conserved.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Beta-minus decay emits:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A positron and a neutrino" },
              { id: "b", text: "An electron and an antineutrino" },
              { id: "c", text: "A helium nucleus" },
              { id: "d", text: "Only a gamma photon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-minus emission",
                statement: "$n\\to p+e^-+\\bar{\\nu}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The emitted charged particle is an electron; an antineutrino accompanies it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Electron and antineutrino",
            commonErrors: [
              "Choosing a positron — that belongs to beta-plus decay.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A nucleus in an excited state emits a gamma photon. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A$ and $Z$ change" },
              { id: "b", text: "$A$ and $Z$ are unchanged" },
              { id: "c", text: "$Z$ decreases by 2" },
              { id: "d", text: "$A$ decreases by 4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gamma decay",
                statement:
                  "$^A_ZX^*\\to^A_ZX+\\gamma$ — only nuclear energy changes.",
              },
            ],
            steps: [
              {
                reasoning: "A photon carries energy but no charge or nucleons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $A$ and $Z$ unchanged",
            commonErrors: [
              "Treating gamma emission as a nucleon-changing decay.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In electron capture, the nucleus:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emits a positron" },
              {
                id: "b",
                text: "Absorbs an inner electron and emits a neutrino",
              },
              { id: "c", text: "Emits an alpha particle" },
              { id: "d", text: "Increases its mass number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electron capture",
                statement:
                  "An orbital electron is captured by a proton: $p+e^-\\to n+\\nu$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capture converts a proton into a neutron and emits a neutrino.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Absorbs an electron and emits a neutrino",
            commonErrors: [
              "Confusing electron capture with beta-plus emission of a positron.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$^{14}_{6}\\text{C}\\to^{14}_{7}\\text{N}+{}^0_{-1}\\beta+\\bar{\\nu}$ is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alpha decay" },
              { id: "b", text: "Beta-minus decay" },
              { id: "c", text: "Beta-plus decay" },
              { id: "d", text: "Gamma decay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decay identification",
                statement:
                  "Emission of $^0_{-1}\\beta$ with unchanged $A$ and increased $Z$ is beta-minus decay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The emitted particle is an electron and $Z$ rises from 6 to 7.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Beta-minus decay",
            commonErrors: [
              "Ignoring the charge change — $A$ staying constant does not mean beta-plus.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Polonium-210 undergoes alpha decay. What is the mass number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $A$", answer: 206, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alpha decay",
                statement: "Alpha emission reduces $A$ by 4.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the alpha particle's mass number.",
                working: "A_{\\text{daughter}}=210-4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "A_{\\text{daughter}}=206",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=206$",
            commonErrors: [
              "Subtracting 2 instead of 4 — the alpha particle has $A=4$.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Uranium-238 ($Z=92$) undergoes alpha decay. What is the atomic number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $Z$", answer: 90, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alpha decay",
                statement: "Alpha emission reduces $Z$ by 2.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the alpha particle's charge number.",
                working: "Z_{\\text{daughter}}=92-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "Z_{\\text{daughter}}=90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z=90$",
            commonErrors: ["Subtracting 4 from $Z$ — only $A$ decreases by 4."],
          },
        },
        {
          id: "physhl-u6-dt-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Cobalt-60 ($Z=27$) undergoes beta-minus decay. What is the atomic number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $Z$", answer: 28, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-minus decay",
                statement:
                  "A neutron becomes a proton, so $Z$ increases by 1 while $A$ is unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the change in proton number.",
                working: "Z_{\\text{daughter}}=Z+1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply it to cobalt.",
                working: "Z_{\\text{daughter}}=27+1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "Z_{\\text{daughter}}=28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z=28$",
            commonErrors: [
              "Thinking beta-minus lowers $Z$ — it raises the proton number.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Nitrogen-13 ($Z=7$) undergoes beta-plus decay. What is the atomic number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $Z$", answer: 6, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-plus decay",
                statement:
                  "A proton becomes a neutron, so $Z$ decreases by 1 while $A$ is unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the change in proton number.",
                working: "Z_{\\text{daughter}}=Z-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply it to nitrogen.",
                working: "Z_{\\text{daughter}}=7-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "Z_{\\text{daughter}}=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z=6$",
            commonErrors: [
              "Raising $Z$ — beta-plus converts proton to neutron.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A nucleus emits an alpha particle and the daughter has $A=206$. What was the parent mass number?",
          response: {
            type: "numeric",
            parts: [{ label: "Parent $A$", answer: 210, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Alpha decay",
                statement: "$A_{\\text{parent}}=A_{\\text{daughter}}+4$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add back the four nucleons carried by the alpha particle.",
                working: "A_{\\text{parent}}=206+4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the parent mass number.",
                working: "A_{\\text{parent}}=210",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "A_{\\text{parent}}=210",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=210$",
            commonErrors: [
              "Subtracting 4 from the daughter instead of adding it back.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An excited nuclear state lies $2.2\\text{ MeV}$ above the ground state. What is the energy of the emitted gamma photon?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Gamma energy / MeV",
                answer: 2.2,
                tolerance: 0.001,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gamma transition",
                statement:
                  "The photon energy equals the energy difference between nuclear levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy conservation requires the photon to carry the level spacing.",
                working: "E_\\gamma=2.2\\text{ MeV}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the energy.",
                working: "E_\\gamma=2.2\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_\\gamma=2.2$ MeV",
            commonErrors: [
              "Adding extra decay energy — gamma energy is only the level difference.",
            ],
          },
        },
        {
          id: "physhl-u6-dt-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Sodium-22 undergoes beta-plus decay. What is the mass number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $A$", answer: 22, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta decay",
                statement:
                  "Beta decay changes $Z$ but leaves the nucleon number $A$ unchanged.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No nucleons are created or destroyed in beta-plus decay.",
                working: "A_{\\text{daughter}}=22",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the mass number.",
                working: "A_{\\text{daughter}}=22",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=22$",
            commonErrors: [
              "Changing $A$ — only the proton/neutron composition changes.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u6-decay-law",
      title: "Decay law, half-life and activity",
      skill:
        "Apply $N = N_0 e^{-\\lambda t}$ and $A = \\lambda N$ to calculate remaining nuclei, activity and half-life, and solve dating problems.",
      lesson: {
        sections: [
          {
            heading: "The decay law",
            body: "Radioactive decay is random — each nucleus has a constant probability $\\lambda$ of decaying per unit time. The number of undecayed nuclei follows $N = N_0 e^{-\\lambda t}$ where $N_0$ is initial number and $\\lambda$ is decay constant. Activity $A = \\lambda N$ (decays per second, in becquerels). Half-life: $t_{1/2} = \\ln 2/\\lambda = 0.693/\\lambda$.",
          },
          {
            heading: "Calculating half-life",
            body: "After one half-life, $N = N_0/2$; after two, $N_0/4$; after n half-lives, $N = N_0/2^n$. For non-integer times use $N = N_0 e^{-\\lambda t}$. Activity also halves each half-life: $A = A_0/2^n$.",
          },
          {
            heading: "Applications",
            body: "**Carbon-14 dating**: living things have constant $^{14}$C; after death it decays with $t_{1/2} = 5730$ yr → measure remaining $^{14}$C to date organic materials up to ~50,000 yr. **Medical**: $^{99m}$Tc for imaging, $^{131}$I for thyroid treatment, radiotherapy. **Industrial**: thickness gauges, smoke detectors ($^{241}$Am), tracer techniques.",
          },
        ],
        keyFormulas: [
          { name: "Decay law", statement: "$N = N_0 e^{-\\lambda t}$" },
          { name: "Half-life", statement: "$t_{1/2} = \\ln 2/\\lambda$" },
          { name: "Activity", statement: "$A = \\lambda N$ — Bq" },
          { name: "After n half-lives", statement: "$N = N_0/2^n$" },
        ],
        workedExample: {
          problem:
            "A sample has initial activity 800 Bq and half-life 5.0 days. Calculate activity after 15 days.",
          solution: "15 days = 3 half-lives → $A = 800/2^3 = 800/8 = 100$ Bq.",
        },
      },
      questions: [
        {
          id: "physhl-u6-dl-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The half-life of a radioactive isotope is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time for half the nuclei to decay" },
              { id: "b", text: "Time for all nuclei to decay" },
              { id: "c", text: "Time for activity to double" },
              { id: "d", text: "Time for half the energy to release" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Half-life",
                statement:
                  "Time for half the undecayed nuclei to decay: $t_{1/2} = \\ln2/\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning: "Half-life = time for N to halve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Time for half to decay",
            commonErrors: [
              "Thinking it's time for ALL to decay — it's just half.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sample has initial activity 400 Bq and half-life 10 days. Calculate the activity after 30 days.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decay law",
                statement: "$A = A_0/2^n$ where n = number of half-lives.",
              },
            ],
            steps: [
              {
                reasoning: "30 days = 3 half-lives (30/10).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A = 400/2^3 = 400/8 = 50$ Bq.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$A = 50$ Bq.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 50$ Bq",
            commonErrors: [
              "Using linear decay — it's exponential (halving each half-life).",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how carbon-14 dating works and state its limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "C-14 dating",
                statement:
                  "Living things have constant C-14; after death it decays (t₁/₂=5730 yr) → measure remaining to date.",
              },
            ],
            steps: [
              {
                reasoning:
                  "While alive, C-14 is constantly replenished → constant level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After death, no replenishment → C-14 decays with known half-life.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Measure remaining C-14 → calculate age from decay law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: only works <~50,000 yr; requires organic material; assumes constant production rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "C-14 decays after death → measure remaining → date; limited to ~50k yr organic.",
            commonErrors: [
              "Thinking it works on rocks — needs organic material (carbon-based).",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A radioactive sample has initial activity 1000 Bq. After 20 days, activity is 125 Bq.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the number of half-lives elapsed.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate the half-life.", marks: 2 },
            {
              label: "c",
              prompt: "Calculate the decay constant $\\lambda$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Calculate the activity after 30 days.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decay law",
                statement:
                  "$A = A_0/2^n$; $t_{1/2} = \\ln2/\\lambda$; $N = N_0e^{-\\lambda t}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$1000 \\to 125 = 1000/8 = 1000/2^3$ → 3 half-lives.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "n = 3 half-lives.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "20 days / 3 = 6.67 days per half-life.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$t_{1/2} = 6.7$ days.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\lambda = \\ln2/t_{1/2} = 0.693/6.67 = 0.104$ day$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\lambda = 0.10$ day$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "30 days = 4.5 half-lives → $A = 1000/2^{4.5} = 1000/22.6 = 44$ Bq.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "$A = 44$ Bq.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) 3 half-lives. (b) 6.7 days. (c) 0.10/day. (d) 44 Bq.",
            commonErrors: [
              "Forgetting activity also decays exponentially — same half-life as nuclei.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The decay constant $\\lambda$ is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The time taken for half the nuclei to decay" },
              {
                id: "b",
                text: "The probability of decay per unit time for each nucleus",
              },
              { id: "c", text: "The total number of decays per second" },
              { id: "d", text: "The energy released per decay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decay constant",
                statement:
                  "$\\lambda$ is the constant probability of decay per nucleus per unit time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It describes an individual nucleus's decay probability rate, not a time or activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Probability of decay per unit time",
            commonErrors: [
              "Confusing $\\lambda$ with half-life — $t_{1/2}=\\ln2/\\lambda$.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "One becquerel (Bq) is equivalent to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One decay per second" },
              { id: "b", text: "One decay per minute" },
              { id: "c", text: "One nucleus remaining" },
              { id: "d", text: "One joule of decay energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Becquerel",
                statement:
                  "Activity is measured in decays per second: $1\\text{ Bq}=1\\text{ s}^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Activity counts decays per unit time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** One decay per second",
            commonErrors: [
              "Using curie or becquerel incorrectly — Bq is per second.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The activity $A$ of a sample is related to the number of undecayed nuclei $N$ by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A=\\lambda N$" },
              { id: "b", text: "$A=N/\\lambda$" },
              { id: "c", text: "$A=\\lambda/N$" },
              { id: "d", text: "$A=N_0-N$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Activity",
                statement: "$A=\\lambda N$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each undecayed nucleus contributes decay probability $\\lambda$, so total activity scales with $N$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $A=\\lambda N$",
            commonErrors: [
              "Inverting the relation — larger $N$ gives larger activity.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "After $n$ half-lives, the fraction of nuclei remaining is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n/2$" },
              { id: "b", text: "$1/(2n)$" },
              { id: "c", text: "$1/2^n$" },
              { id: "d", text: "$e^{-nt_{1/2}}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life decay",
                statement: "$N=N_0/2^n$ after $n$ half-lives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each half-life halves the remaining number, giving repeated factors of $1/2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $1/2^n$",
            commonErrors: [
              "Using linear decay — radioactive decay is exponential.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Carbon-14 dating is limited mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It works only on living organisms" },
              {
                id: "b",
                text: "Its half-life makes it unreliable beyond roughly 50 000 years",
              },
              { id: "c", text: "It requires a magnetic field" },
              { id: "d", text: "It can date rocks older than the Earth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "C-14 dating limit",
                statement:
                  "After many half-lives the remaining $^{14}$C is too small to measure reliably.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The method needs measurable $^{14}$C and works best for organic remains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Limited by its half-life",
            commonErrors: [
              "Thinking it dates minerals — carbon dating needs carbon-containing material.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sample initially contains $N_0=1.0\\times10^6$ undecayed nuclei. The decay constant is $\\lambda=0.10\\text{ day}^{-1}$ and $t=10$ days. Calculate the number remaining.",
          response: {
            type: "numeric",
            parts: [{ label: "N / nuclei", answer: 367900, tolerance: 500 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decay law",
                statement: "$N=N_0e^{-\\lambda t}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute the initial number, decay constant and time.",
                working: "N=1.0\\times10^6 e^{-(0.10)(10)}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the exponent.",
                working: "N=1.0\\times10^6 e^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the exponential factor.",
                working: "e^{-1}=0.368",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply and state the result.",
                working: "N=3.68\\times10^5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N=3.68\\times10^5$ nuclei",
            commonErrors: [
              "Using $e^{+\\lambda t}$ or forgetting to convert time units.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A radioactive isotope has decay constant $\\lambda=0.050\\text{ day}^{-1}$. Calculate its half-life.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Half-life / days",
                answer: 13.9,
                tolerance: 0.05,
                unit: "days",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$t_{1/2}=\\ln2/\\lambda$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use the relation between decay constant and half-life.",
                working: "t_{1/2}=0.693/0.050",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide.",
                working: "t_{1/2}=13.86",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State to suitable precision.",
                working: "t_{1/2}=13.9\\text{ days}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t_{1/2}=13.9$ days",
            commonErrors: [
              "Inverting the formula — larger $\\lambda$ means shorter half-life.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A sample has $N=5.0\\times10^4$ undecayed nuclei and $\\lambda=0.020\\text{ s}^{-1}$. Calculate its activity.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Activity / Bq",
                answer: 1000,
                tolerance: 1,
                unit: "Bq",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Activity",
                statement: "$A=\\lambda N$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the decay constant by the number of undecayed nuclei.",
                working: "A=0.020\\times5.0\\times10^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "A=1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the activity with units.",
                working: "A=1000\\text{ Bq}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=1000$ Bq",
            commonErrors: [
              "Using $N_0$ rather than the current undecayed number $N$.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "An isotope has half-life $t_{1/2}=8.0$ days. Calculate its decay constant in day$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Decay constant / day^{-1}",
                answer: 0.0866,
                tolerance: 0.001,
                unit: "day^{-1}",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decay constant",
                statement: "$\\lambda=\\ln2/t_{1/2}$",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange the half-life formula.",
                working: "\\lambda=0.693/8.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\lambda=0.0866",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Include the inverse-day unit.",
                working: "\\lambda=0.0866\\text{ day}^{-1}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda=0.0866\\text{ day}^{-1}$",
            commonErrors: ["Multiplying by half-life instead of dividing."],
          },
        },
        {
          id: "physhl-u6-dl-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sample starts with $2.4\\times10^6$ nuclei and has half-life 2 days. How many nuclei remain after 6 days?",
          response: {
            type: "numeric",
            parts: [{ label: "N / nuclei", answer: 300000, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life decay",
                statement: "$N=N_0/2^n$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Six days is three half-lives, so the number is divided by $2^3$.",
                working: "N=2.4\\times10^6/8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "N=3.0\\times10^5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N=3.0\\times10^5$ nuclei",
            commonErrors: [
              "Dividing by 6 rather than recognising 3 half-lives.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An organic sample contains one quarter of the carbon-14 activity expected in living material. Given $t_{1/2}=5730$ years, estimate its age.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Age / years",
                answer: 11460,
                tolerance: 20,
                unit: "years",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "C-14 dating",
                statement:
                  "Remaining fraction $1/4$ corresponds to two half-lives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A fraction of $1/4=(1/2)^2$ means two half-lives have passed.",
                working: "n=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the carbon-14 half-life.",
                working: "t=2\\times5730",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the age.",
                working: "t=11460\\text{ years}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the result as an estimate.",
                working: "t\\approx1.15\\times10^4\\text{ years}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t\\approx11460$ years",
            commonErrors: [
              "Using one half-life for a quarter remaining — it is two.",
            ],
          },
        },
        {
          id: "physhl-u6-dl-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A source has initial activity $640$ Bq and half-life $4.0$ days. Calculate its activity after $10$ days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Activity / Bq", answer: 113, tolerance: 1, unit: "Bq" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Activity decay",
                statement: "$A=A_0e^{-\\lambda t}$ or $A=A_0/2^{t/t_{1/2}}$",
              },
            ],
            steps: [
              {
                reasoning: "Find the number of half-lives elapsed.",
                working: "n=10/4=2.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply repeated halving.",
                working: "A=640/2^{2.5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the denominator.",
                working: "2^{2.5}=5.66",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the activity.",
                working: "A=113\\text{ Bq}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=113$ Bq",
            commonErrors: [
              "Rounding to two half-lives before evaluating — use the fractional exponent.",
            ],
          },
        },
      ],
    },
  ],
};
