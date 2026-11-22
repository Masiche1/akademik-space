import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "physhl-u6-lesson-6-1",
  code: "6-1",
  title: "Mass Defect and Nuclear Binding Energy",
  goal: "I CAN calculate mass defect and binding energy for nuclei, explain why nuclei are bound, and relate binding energy per nucleon to nuclear stability.",
  standards: ["Paper 1", "Paper 2", "AHL E3"],
  vocabulary: [
    {
      term: "Mass defect ($\\Delta m$)",
      definition:
        "The difference between the sum of individual nucleon masses and the actual nuclear mass: $\\Delta m = Zm_p + Nm_n - M_{nucleus}$.",
    },
    {
      term: "Binding energy",
      definition:
        "The energy released when a nucleus forms from nucleons: $E_b = \\Delta m c^2$ — the energy needed to separate the nucleus completely.",
    },
    {
      term: "Binding energy per nucleon",
      definition:
        "$E_b/A$ — average energy per nucleon; peaks at iron-56 (~8.8 MeV), indicating maximum stability.",
    },
    {
      term: "Nucleon",
      definition: "A collective term for protons and neutrons in the nucleus.",
    },
    {
      term: "Mass-energy equivalence",
      definition:
        "$E = mc^2$ — mass can be converted to energy and vice versa; applies to nuclear processes.",
    },
    {
      term: "Curve of binding energy",
      definition:
        "Graph of $E_b/A$ vs mass number — peaks at Fe, decreases for heavier nuclei; explains fission and fusion.",
    },
  ],
  concepts: [
    {
      id: "physhl-u6-mass-defect",
      title: "Mass defect and binding energy",
      skill:
        "Calculate mass defect and binding energy using $E = \\Delta m c^2$, explain nuclear stability, and interpret binding energy per nucleon.",
      lesson: {
        sections: [
          {
            heading: "Mass defect",
            body: "A nucleus is always LIGHTER than the sum of its individual nucleons. The difference is the **mass defect**: $\\Delta m = Zm_p + Nm_n - M_{nucleus}$. For example, helium-4 nucleus: 2 protons + 2 neutrons have more mass than the He nucleus. This 'missing' mass was released as energy when the nucleus formed — $E = \\Delta m c^2$.",
          },
          {
            heading: "Binding energy",
            body: "The **binding energy** is the energy needed to separate a nucleus completely into its nucleons — equal to the energy released when it formed. $E_b = \\Delta m c^2$. Typical values: a few MeV per nucleon. The binding energy per nucleon ($E_b/A$) is a measure of stability — higher means more stable.",
          },
          {
            heading: "Binding energy curve",
            body: "Plotting $E_b/A$ vs mass number $A$ gives a curve peaking at iron-56 (~8.8 MeV/nucleon). Light nuclei (A < 56) can release energy by FUSION (combining to form heavier, more stable nuclei). Heavy nuclei (A > 56) can release energy by FISSION (splitting into lighter, more stable fragments). This curve explains why stars fuse hydrogen and nuclear reactors fission uranium.",
          },
        ],
        keyFormulas: [
          {
            name: "Mass defect",
            statement: "$\\Delta m = Zm_p + Nm_n - M_{nucleus}$",
          },
          { name: "Binding energy", statement: "$E_b = \\Delta m c^2$" },
          {
            name: "Binding energy per nucleon",
            statement: "$E_b/A$ — peaks at Fe-56 (~8.8 MeV)",
          },
        ],
        workedExample: {
          problem:
            "The mass of a helium-4 nucleus is 4.0015 u. Mass of proton = 1.0073 u, neutron = 1.0087 u. Calculate the mass defect.",
          solution:
            "Sum of nucleons: $2(1.0073) + 2(1.0087) = 4.032$ u. $\\Delta m = 4.032 - 4.0015 = 0.0305$ u $= 5.06\\times10^{-30}$ kg.",
        },
      },
      questions: [
        {
          id: "physhl-u6-md-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The mass defect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass of protons only" },
              { id: "b", text: "Sum of nucleon masses minus nuclear mass" },
              { id: "c", text: "Nuclear mass minus sum of nucleons" },
              { id: "d", text: "Mass of neutrons only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass defect",
                statement:
                  "$\\Delta m = Zm_p + Nm_n - M_{nucleus}$ — always positive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nucleus is lighter than sum of parts — difference is mass defect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Sum of nucleons − nuclear mass",
            commonErrors: [
              "Reversing — mass defect is always positive (nucleus lighter).",
            ],
          },
        },
        {
          id: "physhl-u6-md-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a nucleus is more stable than its separate nucleons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binding energy",
                statement:
                  "Nucleons bound by strong nuclear force → lower energy state → more stable.",
              },
            ],
            steps: [
              {
                reasoning: "Strong nuclear force binds nucleons together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bound nucleus has lower mass-energy than separate nucleons ($\\Delta m > 0$).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Lower energy = more stable → would need energy input to separate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong force binds nucleons → lower energy → more stable.",
            commonErrors: [
              "Thinking nucleons repel — strong nuclear force attracts at short range.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The mass defect of a nucleus is $3.0\\times10^{-2}$ u. Calculate the binding energy ($1\\text{ u} = 1.66\\times10^{-27}$ kg, $c = 3.0\\times10^8$ m/s).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Binding energy",
                statement: "$E_b = \\Delta m c^2$",
              },
            ],
            steps: [
              {
                reasoning: "Convert mass defect to kg.",
                working:
                  "\\Delta m = 3.0\\times10^{-2} \\times 1.66\\times10^{-27} = 4.98\\times10^{-29} \\text{ kg}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply $E = \\Delta m c^2$.",
                working:
                  "E_b = 4.98\\times10^{-29} \\times (3.0\\times10^8)^2 = 4.48\\times10^{-12} \\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E_b = 4.5\\times10^{-12}$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "In MeV: $4.48\\times10^{-12}/1.6\\times10^{-13} = 28$ MeV.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_b = 4.5\\times10^{-12}$ J = 28 MeV",
            commonErrors: [
              "Forgetting to convert u to kg before applying $c^2$.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The binding energy per nucleon curve peaks at iron-56.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what binding energy per nucleon tells us about stability.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why iron-56 is the most stable nucleus.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why both fusion (light nuclei) and fission (heavy nuclei) release energy.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binding energy curve",
                statement:
                  "Peak at Fe = maximum stability; fusion/fission move toward peak → release energy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$E_b/A$ = average binding energy per nucleon — higher = more stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Peak = most stable nucleus.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Fe-56 has maximum $E_b/A$ (~8.8 MeV) → most stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any process moving away from Fe decreases stability → releases energy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Fusion: light nuclei combine → heavier → moves toward Fe → higher $E_b/A$ → energy released.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Fission: heavy nucleus splits → lighter fragments → moves toward Fe → higher $E_b/A$ → energy released.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Both processes move nuclei toward maximum stability at Fe.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Mass difference → $E = \\Delta mc^2$ released as energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Higher = more stable. (b) Fe-56 peaks the curve. (c) Both move toward Fe → release energy.",
            commonErrors: [
              "Thinking only heavy nuclei release energy — light nuclei release via fusion too.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q5",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A lithium-7 nucleus ($Z=3$, $A=7$) has mass $7.0144$ u. The masses of a proton and a neutron are $1.0073$ u and $1.0087$ u. Given $1\\text{ u} = 931.5\\text{ MeV}\\,c^{-2}$, calculate the binding energy of the nucleus in MeV.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Binding energy / MeV",
                answer: 39.4,
                tolerance: 0.05,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Binding energy",
                statement:
                  "$E_b = \\Delta m c^2$ with $1\\text{ u} = 931.5\\text{ MeV}\\,c^{-2}$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the masses of 3 protons and 4 neutrons.",
                working: "3(1.0073)+4(1.0087)=7.0567\\text{ u}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass defect is the difference.",
                working: "\\Delta m=7.0567-7.0144=0.0423\\text{ u}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Convert mass defect to energy using the atomic mass unit equivalence.",
                working: "E_b=0.0423\\times931.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "E_b=39.4\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_b=39.4$ MeV",
            commonErrors: [
              "Using A=7 protons+neutrons incorrectly — lithium-7 has 3 protons and 4 neutrons.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Binding energy per nucleon is found by dividing the total binding energy by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The atomic number $Z$" },
              { id: "b", text: "The number of protons only" },
              { id: "c", text: "The mass number $A$" },
              { id: "d", text: "The number of neutrons only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binding energy per nucleon",
                statement:
                  "$E_b/A$ — total binding energy divided by mass number.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Per nucleon means per proton or neutron — total count is $A=Z+N$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Mass number $A$",
            commonErrors: [
              "Dividing by Z only — neutrons count as nucleons too.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of these nuclei has the greatest binding energy per nucleon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helium-4 ($A=4$)" },
              { id: "b", text: "Iron-56 ($A=56$)" },
              { id: "c", text: "Deuterium ($A=2$)" },
              { id: "d", text: "Uranium-238 ($A=238$)" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binding energy curve",
                statement: "$E_b/A$ peaks at iron-56 (~8.8 MeV per nucleon).",
              },
            ],
            steps: [
              {
                reasoning:
                  "The binding energy per nucleon curve has its maximum near $A=56$ at iron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Iron-56",
            commonErrors: [
              "Choosing uranium — heavy nuclei have lower $E_b/A$ despite large total binding energy.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "An oxygen-16 nucleus ($Z=8$, $N=8$) has mass $15.995$ u. Calculate its binding energy in MeV. (Mass of proton $=1.0073$ u, neutron $=1.0087$ u, $1\\text{ u}=931.5\\text{ MeV}\\,c^{-2}$.)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Binding energy / MeV",
                answer: 123.9,
                tolerance: 0.1,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass defect and binding energy",
                statement:
                  "$\\Delta m = Zm_p + Nm_n - M_{nucleus}$; $E_b = \\Delta m c^2$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the masses of 8 protons and 8 neutrons.",
                working: "8(1.0073)+8(1.0087)=16.128\\text{ u}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass defect.",
                working: "\\Delta m=16.128-15.995=0.133\\text{ u}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Convert to energy.",
                working: "E_b=0.133\\times931.5=123.9\\text{ MeV}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value.",
                working: "E_b=124\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_b=124$ MeV",
            commonErrors: [
              "Rounding 15.995 too early — keep full precision until the final step.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A nucleus has a binding energy of $4.48\\times10^{-11}$ J. Express this in MeV. ($1\\text{ eV}=1.6\\times10^{-19}$ J.)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Binding energy / MeV",
                answer: 280,
                tolerance: 1,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electronvolt",
                statement:
                  "$1\\text{ MeV}=10^6\\times1.6\\times10^{-19}=1.6\\times10^{-13}$ J",
              },
            ],
            steps: [
              {
                reasoning: "Convert joules to electronvolts.",
                working:
                  "E=\\frac{4.48\\times10^{-11}}{1.6\\times10^{-19}}=2.80\\times10^{8}\\text{ eV}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to MeV.",
                working: "E=\\frac{2.80\\times10^{8}}{10^6}=280\\text{ MeV}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value.",
                working: "E_b=280\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_b=280$ MeV",
            commonErrors: [
              "Dividing by $10^6$ before converting J to eV — convert units in the right order.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A free neutron is unstable and decays spontaneously, but a neutron inside a stable nucleus does not. The best explanation is that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The nucleus shields the neutron from all forces",
              },
              {
                id: "b",
                text: "The strong nuclear force binds the neutron to the nucleus, lowering its energy",
              },
              { id: "c", text: "Neutrons cannot decay at all" },
              { id: "d", text: "Binding energy makes neutrons heavier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuclear binding",
                statement:
                  "Nucleons in a nucleus occupy a lower energy state than free nucleons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bound nucleons have lower energy (positive binding energy) — decay products would need even lower energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Strong force lowers the neutron's energy inside the nucleus",
            commonErrors: [
              "Thinking binding energy adds mass — it corresponds to missing mass ($\\Delta m>0$).",
            ],
          },
        },
        {
          id: "physhl-u6-md-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain, with reference to the binding energy per nucleon curve, why energy is released when two light nuclei fuse together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binding energy curve",
                statement:
                  "For $A<56$, $E_b/A$ rises steeply with $A$ — heavier products are more stable per nucleon.",
              },
            ],
            steps: [
              {
                reasoning: "Light nuclei have low binding energy per nucleon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fusion produces a heavier nucleus closer to the peak of the curve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The product has higher $E_b/A$ — more stable per nucleon.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The 'missing' binding energy appears as kinetic energy of products.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Equivalently, mass of products is less than mass of reactants; $E=\\Delta mc^2$ is released.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fusion moves nuclei toward the Fe peak → higher $E_b/A$ → mass-energy released.",
            commonErrors: [
              "Saying energy comes from 'breaking' nuclei — fusion builds a more tightly bound nucleus.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 7,
          stem: "Nucleus X has mass number $A=200$ and binding energy per nucleon $7.6$ MeV. Nucleus Y has mass number $A=100$ and binding energy per nucleon $8.6$ MeV.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the total binding energy of nucleus X.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the total binding energy of two Y nuclei together.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why energy is released if X splits into two nuclei like Y.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total binding energy",
                statement: "$E_b = (E_b/A)\\times A$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Total binding energy is per-nucleon value times A.",
                working: "E_b=7.6\\times200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "E_b=1520\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Two Y nuclei: $2\\times100\\times8.6$.",
                working: "E_b=2\\times860=1720\\text{ MeV}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the value.",
                working: "E_b=1720\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Each Y has higher $E_b/A$ than X — products are more tightly bound per nucleon.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Total binding energy of products (1720 MeV) exceeds that of X (1520 MeV) by 200 MeV.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The extra binding energy is released as kinetic energy / gamma via $E=\\Delta mc^2$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) 1520 MeV (b) 1720 MeV (c) products more bound → 200 MeV released.",
            commonErrors: [
              "Comparing per-nucleon values only — total energy depends on both $E_b/A$ and A.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The mass defect of a nucleus is $0.020$ u. Express this in units of $10^{-29}$ kg. ($1\\text{ u}=1.66\\times10^{-27}$ kg.)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Mass defect / 10^{-29} kg",
                answer: 3.32,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass defect",
                statement: "$\\Delta m = Zm_p + Nm_n - M_{nucleus}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert atomic mass units to kilograms.",
                working:
                  "\\Delta m=0.020\\times1.66\\times10^{-27}=3.32\\times10^{-29}\\text{ kg}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Express in units of $10^{-29}$ kg.",
                working: "\\Delta m=3.32\\times10^{-29}\\text{ kg}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta m=3.32$ in units of $10^{-29}$ kg",
            commonErrors: [
              "Forgetting that 0.020 u already includes the small coefficient — do not round prematurely.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A helium-4 nucleus has mass $4.0015$ u. Calculate its binding energy in MeV. (Mass of proton $=1.0073$ u, neutron $=1.0087$ u, $1\\text{ u}=931.5\\text{ MeV}\\,c^{-2}$.)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Binding energy / MeV",
                answer: 28.4,
                tolerance: 0.05,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Binding energy",
                statement: "$E_b=\\Delta m c^2$; $\\Delta m=Zm_p+Nm_n-M$",
              },
            ],
            steps: [
              {
                reasoning: "Sum the masses of 2 protons and 2 neutrons.",
                working: "2(1.0073)+2(1.0087)=4.0320\\text{ u}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass defect.",
                working: "\\Delta m=4.0320-4.0015=0.0305\\text{ u}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Convert to energy.",
                working: "E_b=0.0305\\times931.5=28.4\\text{ MeV}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value.",
                working: "E_b=28.4\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_b=28.4$ MeV",
            commonErrors: [
              "Using the mass of a helium ATOM (includes 2 electrons) instead of the nucleus.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "For a nucleus with a small mass number ($A<56$), energy can be released by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fusion with another light nucleus" },
              { id: "b", text: "Alpha decay only" },
              { id: "c", text: "Fission into two heavy fragments" },
              { id: "d", text: "No process can release energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binding energy curve",
                statement:
                  "Light of the Fe peak, $E_b/A$ increases with $A$ — fusion moves toward the peak.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Below the peak, combining nuclei raises $E_b/A$ → energy released.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Fusion",
            commonErrors: [
              "Applying fission logic to light nuclei — fission is for $A>56$.",
            ],
          },
        },
        {
          id: "physhl-u6-md-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two nuclei have the same mass number $A$. Nucleus P has a larger total binding energy than nucleus Q. It follows that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P must have more neutrons" },
              { id: "b", text: "P has a lower binding energy per nucleon" },
              {
                id: "c",
                text: "P has a higher binding energy per nucleon and is more stable",
              },
              { id: "d", text: "They are equally stable" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binding energy per nucleon",
                statement:
                  "$E_b/A$ — with equal $A$, larger $E_b$ means larger $E_b/A$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Same $A$ → same denominator → larger $E_b$ gives larger $E_b/A$ → more stable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Higher $E_b/A$, more stable",
            commonErrors: [
              "Confusing total binding energy with per-nucleon value — they differ when A differs.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u6-nuclear-stability",
      title: "Nuclear stability and the strong force",
      skill:
        "Explain the role of the strong nuclear force, the neutron-proton balance, and why certain nuclei are unstable.",
      lesson: {
        sections: [
          {
            heading: "The strong nuclear force",
            body: "The **strong nuclear force** binds nucleons together — it's attractive at short range (~1 fm) and much stronger than electromagnetic repulsion between protons. It acts between ALL nucleons (proton-proton, proton-neutron, neutron-neutron). Without it, proton repulsion would tear nuclei apart. It's responsible for nuclear binding.",
          },
          {
            heading: "Neutron-proton balance",
            body: "Stable nuclei need roughly equal numbers of protons and neutrons for light elements, but MORE neutrons for heavy elements. Neutrons provide 'nuclear glue' without adding repulsion. Too many neutrons → neutron-rich unstable (beta-minus decay); too few → proton-rich unstable (beta-plus or electron capture).",
          },
          {
            heading: "Unstable nuclei",
            body: "Nuclei far from the stability valley are radioactive: neutron-rich → $\\beta^-$ decay (neutron → proton + electron); proton-rich → $\\beta^+$ decay or electron capture; very heavy → alpha decay. The binding energy curve and N/Z ratio determine stability. Magic numbers (2, 8, 20, 28, 50, 82, 126) give extra stability.",
          },
        ],
        keyFormulas: [
          {
            name: "Strong force",
            statement: "Attractive at ~1 fm range; binds all nucleons.",
          },
          {
            name: "N/Z ratio",
            statement: "~1 for light, >1 for heavy stable nuclei.",
          },
          {
            name: "Decay types",
            statement:
              "$\\beta^-$ (n→p), $\\beta^+$ (p→n), $\\alpha$ (heavy), EC.",
          },
        ],
        workedExample: {
          problem:
            "Why do heavy stable nuclei need more neutrons than protons?",
          solution:
            "More protons → more electrostatic repulsion. Extra neutrons provide strong-force attraction without adding charge repulsion → needed to hold heavy nuclei together.",
        },
      },
      questions: [
        {
          id: "physhl-u6-ns-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The strong nuclear force acts between:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only neutrons" },
              { id: "b", text: "All nucleons (protons and neutrons)" },
              { id: "c", text: "Electrons and protons" },
              { id: "d", text: "Only protons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong force",
                statement: "Acts between all nucleons — p-p, p-n, n-n.",
              },
            ],
            steps: [
              {
                reasoning: "Strong force binds ALL nucleons together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** All nucleons",
            commonErrors: [
              "Choosing protons only — neutrons also feel strong force.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why heavy stable nuclei have more neutrons than protons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "N/Z ratio",
                statement:
                  "Extra neutrons provide strong-force attraction without electromagnetic repulsion.",
              },
            ],
            steps: [
              {
                reasoning: "Many protons → strong electrostatic repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Neutrons add strong-force attraction without adding charge.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "More neutrons needed to overcome proton repulsion in heavy nuclei.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Neutrons provide 'glue' without repulsion — needed for heavy nuclei.",
            commonErrors: [
              "Thinking neutrons repel — they're neutral but feel strong force.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a nucleus with too many neutrons undergoes beta-minus decay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta decay",
                statement:
                  "Neutron-rich → neutron converts to proton + electron ($\\beta^-$) to restore stability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Too many neutrons → nucleus is neutron-rich and unstable.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "$\\beta^-$ decay: neutron → proton + electron + antineutrino.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Converts neutron to proton → restores N/Z balance → more stable.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Energy released because product nucleus is more stable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\beta^-$ decay converts n→p, restoring stability.",
            commonErrors: [
              "Thinking it 'destroys' neutrons — they convert to protons.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the nuclei: helium-4 (2p, 2n), carbon-12 (6p, 6n), iron-56 (26p, 30n), uranium-238 (92p, 146n).",
          parts: [
            {
              label: "a",
              prompt: "State the N/Z ratio for each nucleus.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the trend in N/Z ratio with increasing mass number.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Predict which nucleus is most likely to undergo alpha decay and explain why.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "N/Z trend",
                statement:
                  "N/Z increases with A to compensate for growing proton repulsion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "He: 1.0; C: 1.0; Fe: 1.15; U: 1.59.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All four ratios correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Light nuclei: N/Z ≈ 1 (equal p and n).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Heavy nuclei: N/Z > 1 — extra neutrons needed for stability.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "More protons → more repulsion → need more neutrons to bind.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Uranium-238 — very heavy, far from stability peak.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Alpha decay reduces size and increases stability.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Heaviest nuclei decay by alpha emission.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 1.0, 1.0, 1.15, 1.59. (b) N/Z increases with A. (c) U-238 — alpha decay.",
            commonErrors: [
              "Thinking all nuclei have N/Z=1 — heavy nuclei need more neutrons.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The strong nuclear force is most accurately described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An electromagnetic attraction between electrons and protons",
              },
              { id: "b", text: "A repulsive force between protons only" },
              { id: "c", text: "A long-range gravitational force" },
              {
                id: "d",
                text: "An attractive force between nucleons at very short range",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong nuclear force",
                statement:
                  "Attractive between all nucleons at distances of about $1\\text{ fm}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The strong force binds protons and neutrons at nuclear distances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Attractive between nucleons at short range",
            commonErrors: [
              "Confusing it with the electromagnetic force, which is long range and acts on charge.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For stable heavy nuclei, the neutron-to-proton ratio is generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greater than 1" },
              { id: "b", text: "Less than 1" },
              { id: "c", text: "Approximately equal to 1" },
              { id: "d", text: "Zero" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "N/Z ratio",
                statement:
                  "Heavy stable nuclei need $N>Z$ to offset proton repulsion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Extra neutrons add strong-force attraction without electromagnetic repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Greater than 1",
            commonErrors: [
              "Applying the light-nucleus ratio $N\\approx Z$ to heavy nuclei.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A proton-rich nucleus is most likely to undergo:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beta-plus decay or electron capture" },
              { id: "b", text: "Alpha decay only" },
              { id: "c", text: "Beta-minus decay" },
              { id: "d", text: "Gamma emission only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proton-rich decay",
                statement:
                  "Reducing $Z$ by converting a proton to a neutron increases stability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Beta-plus decay and electron capture both convert a proton into a neutron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Beta-plus decay or electron capture",
            commonErrors: [
              "Choosing beta-minus — that increases $Z$ and is for neutron-rich nuclei.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Lead-208 has $Z=82$ and $A=208$. Calculate its neutron-to-proton ratio.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "N/Z ratio",
                answer: 1.54,
                tolerance: 0.01,
                unit: "ratio",
              },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutron number", statement: "$N=A-Z$" },
            ],
            steps: [
              {
                reasoning: "Find the neutron number first.",
                working: "N=208-82=126",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the proton number.",
                working: "N/Z=126/82=1.54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N/Z=1.54$",
            commonErrors: ["Using $A$ instead of $Z$ as the denominator."],
          },
        },
        {
          id: "physhl-u6-ns-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A nucleus contains 50 protons and 70 neutrons. What is its mass number $A$?",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass number $A$", answer: 120, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "$A=Z+N$" },
            ],
            steps: [
              {
                reasoning: "The mass number is the total nucleon number.",
                working: "A=Z+N=50+70",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the sum.",
                working: "A=120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=120$",
            commonErrors: [
              "Reporting only the neutron number instead of $Z+N$.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A stable nucleus has $N/Z=1.5$ and atomic number $Z=60$. Calculate its neutron number $N$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Neutron number $N$", answer: 90, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "N/Z ratio",
                statement: "$N/Z$ is the neutron-to-proton ratio.",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange the ratio to find $N$.",
                working: "N=1.5Z",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the proton number.",
                working: "N=1.5\\times60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "N=90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N=90$",
            commonErrors: ["Dividing $Z$ by 1.5 instead of multiplying."],
          },
        },
        {
          id: "physhl-u6-ns-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Uranium-238 has $Z=92$ and $A=238$. How many neutrons does it contain?",
          response: {
            type: "numeric",
            parts: [
              { label: "Neutron number $N$", answer: 146, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutron number", statement: "$N=A-Z$" },
            ],
            steps: [
              {
                reasoning: "Subtract the proton number from the mass number.",
                working: "N=238-92",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "N=146",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N=146$",
            commonErrors: [
              "Using 238 as the neutron number without subtracting protons.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Carbon-14 ($Z=6$) undergoes beta-minus decay. What is the atomic number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $Z$", answer: 7, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-minus decay",
                statement:
                  "$n\\to p+e^-+\\bar{\\nu}$, so $Z$ increases by 1 and $A$ is unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Beta-minus decay converts a neutron into a proton.",
                working: "Z_{\\text{daughter}}=Z+1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the proton number of carbon.",
                working: "Z_{\\text{daughter}}=6+1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "Z_{\\text{daughter}}=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z=7$",
            commonErrors: [
              "Keeping $Z=6$ — beta-minus increases the proton number.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Sodium-22 ($Z=11$) undergoes beta-plus decay. What is the atomic number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $Z$", answer: 10, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beta-plus decay",
                statement:
                  "$p\\to n+e^++\\nu$, so $Z$ decreases by 1 and $A$ is unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Beta-plus decay converts a proton into a neutron.",
                working: "Z_{\\text{daughter}}=Z-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the sodium proton number.",
                working: "Z_{\\text{daughter}}=11-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "Z_{\\text{daughter}}=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z=10$",
            commonErrors: [
              "Increasing $Z$ — beta-plus reduces the proton number.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Beryllium-7 ($Z=4$) undergoes electron capture. What is the atomic number of the daughter nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "Daughter $Z$", answer: 3, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electron capture",
                statement:
                  "A proton absorbs an inner electron and becomes a neutron, so $Z$ decreases by 1.",
              },
            ],
            steps: [
              {
                reasoning: "Electron capture converts a proton into a neutron.",
                working: "Z_{\\text{daughter}}=Z-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the beryllium proton number.",
                working: "Z_{\\text{daughter}}=4-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "Z_{\\text{daughter}}=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z=3$",
            commonErrors: [
              "Emitting a positron — electron capture absorbs an electron instead.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best explains why extra neutrons help stabilise a heavy nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They increase the electrostatic repulsion" },
              { id: "b", text: "They always make alpha decay impossible" },
              { id: "c", text: "They reduce the mass number" },
              {
                id: "d",
                text: "They add strong-force attraction without adding charge",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Neutron stabilisation",
                statement:
                  "Neutrons experience the strong force but carry no electric charge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Additional neutrons increase strong-force binding while leaving proton repulsion unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Strong-force attraction without added charge",
            commonErrors: [
              "Thinking neutrons increase repulsion — they are electrically neutral.",
            ],
          },
        },
        {
          id: "physhl-u6-ns-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which nucleus is expected to be especially stable because it has a 'magic number' of nucleons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A nucleus with 21 protons" },
              { id: "b", text: "A nucleus with 19 protons" },
              { id: "c", text: "A nucleus with 22 protons" },
              { id: "d", text: "A nucleus with 20 protons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magic numbers",
                statement:
                  "Closed nuclear shells occur at nucleon numbers such as 2, 8, 20, 28, 50, 82 and 126.",
              },
            ],
            steps: [
              {
                reasoning:
                  "20 is a magic number, so a nucleus with 20 protons can have extra stability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 20 protons",
            commonErrors: [
              "Selecting a nearby non-magic number — shell closure matters.",
            ],
          },
        },
      ],
    },
  ],
};
