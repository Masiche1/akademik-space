import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "physhl-u6-lesson-6-3",
  code: "6-3",
  title: "Nuclear Fission and Fusion",
  goal: "I CAN explain nuclear fission and fusion reactions, calculate energy released using mass defect, compare fission reactors and fusion, and discuss applications and challenges.",
  standards: ["Paper 1", "Paper 2", "AHL E3"],
  vocabulary: [
    {
      term: "Nuclear fission",
      definition:
        "The splitting of a heavy nucleus (e.g. U-235) into lighter fragments when struck by a neutron — releases ~200 MeV.",
    },
    {
      term: "Nuclear fusion",
      definition:
        "The joining of light nuclei (e.g. hydrogen isotopes) to form a heavier nucleus — powers the Sun; releases energy.",
    },
    {
      term: "Chain reaction",
      definition:
        "Each fission produces neutrons that trigger more fissions — controlled in reactors, runaway in bombs.",
    },
    {
      term: "Fission products",
      definition:
        "The lighter nuclei produced by fission (e.g. Ba, Kr from U-235) plus 2-3 neutrons.",
    },
    {
      term: "Critical mass",
      definition:
        "Minimum mass of fissile material needed for a self-sustaining chain reaction.",
    },
    {
      term: "Plasma",
      definition:
        "A hot ionised gas where nuclei have enough energy to overcome Coulomb repulsion and fuse.",
    },
  ],
  concepts: [
    {
      id: "physhl-u6-fission",
      title: "Nuclear fission",
      skill:
        "Describe the fission process, write fission equations, explain chain reactions, and describe nuclear reactor operation.",
      lesson: {
        sections: [
          {
            heading: "The fission process",
            body: "When a neutron strikes a fissile nucleus like $^{235}_{92}\\text{U}$, it becomes unstable and splits into two lighter fragments (e.g. barium and krypton) plus 2-3 neutrons and ~200 MeV of energy. Example: $^{235}_{92}\\text{U} + ^1_0\\text{n} \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3^1_0\\text{n} + \\text{energy}$. The fragments are neutron-rich and radioactive.",
          },
          {
            heading: "Chain reactions",
            body: "Each fission releases 2-3 neutrons → these can trigger more fissions → exponential growth. For a controlled chain reaction, exactly ONE neutron per fission must cause another fission (critical). Control rods absorb neutrons to regulate this. Without control → supercritical → explosion.",
          },
          {
            heading: "Nuclear reactors",
            body: "In a fission reactor: fuel rods contain enriched uranium; control rods (cadmium/boron) regulate neutron flux; moderator (water/graphite) slows neutrons to thermal energies for efficient fission; coolant removes heat → steam → turbine → electricity. The heat comes from kinetic energy of fission fragments, not from radiation.",
          },
        ],
        keyFormulas: [
          {
            name: "Fission",
            statement:
              "$^{235}_{92}\\text{U} + ^1_0\\text{n} \\to \\text{fragments} + \\text{neutrons} + \\sim200\\text{ MeV}$",
          },
          {
            name: "Critical",
            statement: "Exactly 1 neutron per fission causes another fission.",
          },
          {
            name: "Energy source",
            statement: "Kinetic energy of fission fragments → heat.",
          },
        ],
        workedExample: {
          problem:
            "Write a possible fission equation for U-235 with neutron, producing Ba-141 and Kr-92.",
          solution:
            "$^{235}_{92}\\text{U} + ^1_0\\text{n} \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3^1_0\\text{n}$. Check: A: 236 = 141+92+3 ✓; Z: 92 = 56+36 ✓.",
        },
      },
      questions: [
        {
          id: "physhl-u6-fi-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Nuclear fission is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Splitting of a heavy nucleus into lighter fragments",
              },
              { id: "b", text: "Joining of light nuclei" },
              { id: "c", text: "Emission of alpha particles" },
              { id: "d", text: "Absorption of neutrons only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fission",
                statement:
                  "Heavy nucleus splits into lighter fragments + neutrons + energy.",
              },
            ],
            steps: [
              {
                reasoning: "Fission = splitting heavy nucleus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Splitting heavy nucleus",
            commonErrors: [
              "Confusing with fusion — fission splits, fusion joins.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a chain reaction occurs in nuclear fission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chain reaction",
                statement:
                  "Each fission releases 2-3 neutrons → trigger more fissions → exponential growth.",
              },
            ],
            steps: [
              {
                reasoning: "Each fission produces 2-3 neutrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These neutrons can strike other U-235 nuclei → more fissions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Cycle repeats → exponential increase in fission rate (if uncontrolled).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fission neutrons trigger more fissions → exponential chain reaction.",
            commonErrors: [
              "Thinking it's a single event — it's self-sustaining.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the role of control rods in a nuclear reactor.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control rods",
                statement: "Absorb neutrons → regulate chain reaction rate.",
              },
            ],
            steps: [
              {
                reasoning: "Control rods (Cd, B, Hf) absorb neutrons strongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inserted → fewer neutrons → slower reaction; withdrawn → faster.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Maintains critical state: exactly 1 neutron per fission causes another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prevents runaway (supercritical) or shutdown (subcritical).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control rods absorb neutrons to maintain critical chain reaction.",
            commonErrors: [
              "Thinking they stop reaction completely — they regulate it.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A nuclear reactor uses enriched uranium-235 fuel.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the fission equation for U-235 + n → Ba-141 + Kr-92.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the role of the moderator.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how the reactor produces electricity.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactor operation",
                statement:
                  "Fission → heat → steam → turbine → generator → electricity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$^{235}_{92}\\text{U} + ^1_0\\text{n} \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3^1_0\\text{n}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check conservation: A: 236 = 233+3 ✓; Z: 92 = 92 ✓.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Moderator (water/graphite) slows fast neutrons to thermal energies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Thermal neutrons more likely to cause fission in U-235.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Fission fragments' kinetic energy → heat in fuel rods.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Heat → coolant → steam generator → steam spins turbine.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Turbine → generator → electrical energy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Control rods + coolant keep reaction stable and safe.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Equation as shown. (b) Slows neutrons. (c) Heat→steam→turbine→generator.",
            commonErrors: [
              "Thinking radiation directly generates electricity — it's heat from fission fragments.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The main role of the moderator in a thermal fission reactor is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorb all neutrons" },
              { id: "b", text: "Slow neutrons to thermal energies" },
              { id: "c", text: "Cool the reactor core directly" },
              { id: "d", text: "Enrich the uranium fuel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moderator",
                statement:
                  "Slowing neutrons increases the probability of inducing fission in U-235.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A moderator reduces neutron kinetic energy through collisions without absorbing them permanently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Slow neutrons to thermal energies",
            commonErrors: [
              "Confusing moderator with control rods — rods absorb neutrons.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Critical mass is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The smallest mass that can undergo alpha decay",
              },
              {
                id: "b",
                text: "The minimum mass of fissile material needed for a self-sustaining chain reaction",
              },
              { id: "c", text: "The maximum safe reactor fuel mass" },
              { id: "d", text: "The mass of one fission fragment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical mass",
                statement:
                  "Enough fissile material must be present so emitted neutrons are likely to cause further fissions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Below critical mass too many neutrons escape and the chain reaction dies out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Minimum mass for a self-sustaining chain reaction",
            commonErrors: [
              "Thinking critical mass is a chemical property — it depends on geometry and enrichment.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Control rods in a reactor are usually made from materials such as cadmium or boron because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emit neutrons" },
              { id: "b", text: "Absorb neutrons strongly" },
              { id: "c", text: "Increase the fuel temperature" },
              { id: "d", text: "Reflect neutrons back into the core" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control rods",
                statement:
                  "Strong neutron absorbers regulate the fission rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inserting rods removes neutrons from the chain reaction; withdrawing them restores neutrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Absorb neutrons strongly",
            commonErrors: [
              "Thinking control rods generate energy — they regulate neutron number.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Most of the heat produced in a fission reactor comes from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma rays leaving the core" },
              { id: "b", text: "Kinetic energy of fission fragments" },
              { id: "c", text: "Chemical reactions in the coolant" },
              { id: "d", text: "The moderator slowing neutrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactor energy transfer",
                statement:
                  "Fission fragments carry kinetic energy that becomes thermal energy in the fuel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The released energy appears mainly as kinetic energy of the fragments, which then heats the core.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Kinetic energy of fission fragments",
            commonErrors: [
              "Thinking electricity is generated directly by fission radiation.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A reactor is critical when, on average:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Each fission causes fewer than one further fission",
              },
              {
                id: "b",
                text: "Each fission causes exactly one further fission",
              },
              { id: "c", text: "Each fission causes three further fissions" },
              { id: "d", text: "No neutrons are emitted" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criticality",
                statement:
                  "Critical means the chain reaction is self-sustaining but not growing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exactly one neutron per fission must induce another fission for a steady rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Exactly one further fission per fission",
            commonErrors: [
              "Confusing critical with supercritical — critical is steady, not accelerating.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In $^{235}_{92}\\text{U}+{}^1_0\\text{n}\\to^{141}_{56}\\text{Ba}+^{92}_{36}\\text{Kr}+x{}^1_0\\text{n}$, find $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 3, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of nucleon number",
                statement: "Total $A$ must be conserved in a nuclear reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Write the mass-number balance.",
                working: "236=141+92+x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for the neutron coefficient.",
                working: "x=236-233",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "x=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=3$",
            commonErrors: [
              "Balancing charge instead of mass number — use $A$ for neutron count.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Uranium-235 captures a neutron and fissions into barium-141, an unknown fragment, and two neutrons. Find the mass number of the unknown fragment.",
          response: {
            type: "numeric",
            parts: [{ label: "Fragment $A$", answer: 93, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of nucleon number",
                statement: "$A_{\\text{initial}}=A_{\\text{products}}$",
              },
            ],
            steps: [
              {
                reasoning: "The initial mass number is $235+1=236$.",
                working: "A_{\\text{initial}}=236",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the known products.",
                working: "A_{\\text{frag}}=236-141-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the subtraction.",
                working: "A_{\\text{frag}}=93",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the fragment mass number.",
                working: "A_{\\text{frag}}=93",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=93$",
            commonErrors: [
              "Forgetting the incident neutron contributes to the initial mass number.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "One U-235 fission releases about $200\\text{ MeV}$. Convert this energy to joules. ($1\\text{ eV}=1.6\\times10^{-19}\\text{ J}$.)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Energy / J",
                answer: 3.2e-11,
                tolerance: 1e-12,
                unit: "J",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electronvolt conversion",
                statement:
                  "$1\\text{ MeV}=10^6(1.6\\times10^{-19})=1.6\\times10^{-13}\\text{ J}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert MeV to joules using the electronvolt definition.",
                working: "E=200\\times1.6\\times10^{-13}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "E=3.2\\times10^{-11}\\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "E=3.2\\times10^{-11}\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E=3.2\\times10^{-11}$ J",
            commonErrors: [
              "Using $1.6\\times10^{-19}$ without the $10^6$ MeV factor.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A reactor performs $1.0\\times10^{15}$ fissions per second, each releasing $3.2\\times10^{-11}$ J. Calculate the thermal power produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Power / W", answer: 32000, tolerance: 100, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power",
                statement:
                  "$P=\\text{energy per event}\\times\\text{event rate}$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply energy per fission by the fission rate.",
                working: "P=(3.2\\times10^{-11})(1.0\\times10^{15})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine the powers of ten.",
                working: "10^{-11}\\times10^{15}=10^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the coefficient.",
                working: "3.2\\times10^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the power.",
                working: "P=3.2\\times10^4\\text{ W}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P=3.2\\times10^4$ W",
            commonErrors: [
              "Using total energy instead of power — multiply by fissions per second.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Each U-235 fission releases $3.2\\times10^{-11}$ J. Calculate how many fissions are needed to release $1.0$ J.",
          response: {
            type: "numeric",
            parts: [{ label: "Fissions", answer: 3.125e10, tolerance: 1e8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Fission count",
                statement:
                  "$N_{\\text{fissions}}=E_{\\text{total}}/E_{\\text{fission}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide the required energy by the energy released per fission.",
                working: "N=\\frac{1.0}{3.2\\times10^{-11}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Handle the power of ten.",
                working: "N=\\frac{1}{3.2}\\times10^{11}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the coefficient.",
                working: "N=0.3125\\times10^{11}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the number of fissions.",
                working: "N=3.125\\times10^{10}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$N=3.125\\times10^{10}$ fissions",
            commonErrors: [
              "Multiplying by energy per fission instead of dividing.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a steady critical reactor, the effective multiplication factor is approximately:",
          response: {
            type: "numeric",
            parts: [{ label: "$k$", answer: 1, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiplication factor",
                statement:
                  "Critical means each generation produces the same number of fissions, so $k=1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A self-sustaining but non-growing chain reaction has one successful neutron per fission.",
                working: "k=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the value.",
                working: "k=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k=1$",
            commonErrors: [
              "Using $k=0$ for shutdown or $k>1$ for steady operation.",
            ],
          },
        },
        {
          id: "physhl-u6-fi-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A fission releases $3.2\\times10^{-11}$ J. Calculate the mass equivalent converted by $E=mc^2$, using $c=3.0\\times10^8\\text{ m/s}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Mass equivalent / kg",
                answer: 3.56e-28,
                tolerance: 1e-29,
                unit: "kg",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass-energy equivalence",
                statement: "$m=E/c^2$",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange the mass-energy relation.",
                working: "m=E/c^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the energy and speed of light.",
                working: "m=\\frac{3.2\\times10^{-11}}{(3.0\\times10^8)^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the denominator.",
                working: "c^2=9.0\\times10^{16}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide and state the result.",
                working: "m=3.56\\times10^{-28}\\text{ kg}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m=3.56\\times10^{-28}$ kg",
            commonErrors: ["Using $E=mc$ instead of $E=mc^2$."],
          },
        },
      ],
    },
    {
      id: "physhl-u6-fusion",
      title: "Nuclear fusion",
      skill:
        "Describe fusion reactions, explain conditions needed (high T, density), compare fusion to fission, and discuss challenges for energy production.",
      lesson: {
        sections: [
          {
            heading: "The fusion process",
            body: "Light nuclei fuse to form heavier nuclei, releasing energy because products have higher binding energy per nucleon. In stars: $4^1_1\\text{H} \\to ^4_2\\text{He} + 2^0_{+1}\\beta^+ + 2\\nu + \\sim26.7\\text{ MeV}$. Also deuterium-tritium: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n} + 17.6\\text{ MeV}$.",
          },
          {
            heading: "Conditions for fusion",
            body: "Nuclei are positively charged → repel each other (Coulomb barrier). Fusion requires: (1) very high temperature (~10⁸ K) to give nuclei enough kinetic energy to overcome repulsion, (2) high density to increase collision probability, (3) confinement (magnetic or inertial) to keep plasma together long enough. This is achieved in stars naturally and in tokamaks experimentally.",
          },
          {
            heading: "Fusion vs fission",
            body: "**Fusion advantages**: abundant fuel (hydrogen from water), no long-lived radioactive waste, no chain reaction risk, more energy per reaction. **Challenges**: requires extreme conditions not yet sustained for net energy gain (ITER aims to demonstrate this). Stars achieve it via gravity; Earth needs magnetic confinement or inertial compression.",
          },
        ],
        keyFormulas: [
          {
            name: "Fusion",
            statement:
              "$^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n} + 17.6\\text{ MeV}$",
          },
          {
            name: "Coulomb barrier",
            statement: "Positive charges repel — need high T to overcome.",
          },
          {
            name: "Plasma",
            statement: "Ionised gas at ~10⁸ K confined by magnetic fields.",
          },
        ],
        workedExample: {
          problem:
            "Explain why fusion requires such high temperatures compared to fission.",
          solution:
            "Fission is triggered by neutron (neutral, no Coulomb barrier). Fusion requires two positively charged nuclei to get close enough for strong force — must overcome electrostatic repulsion → need high kinetic energy → high temperature.",
        },
      },
      questions: [
        {
          id: "physhl-u6-fu-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Nuclear fusion is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Joining of light nuclei to form heavier nucleus",
              },
              { id: "b", text: "Splitting of heavy nucleus" },
              { id: "c", text: "Emission of gamma rays" },
              { id: "d", text: "Beta decay" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fusion",
                statement:
                  "Light nuclei join → heavier + energy; powers stars.",
              },
            ],
            steps: [
              {
                reasoning: "Fusion = joining light nuclei.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Joining light nuclei",
            commonErrors: [
              "Confusing with fission — fusion joins, fission splits.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why fusion requires extremely high temperatures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coulomb barrier",
                statement:
                  "Positive nuclei repel — need high kinetic energy to overcome.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nuclei are positively charged → electrostatic repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High temperature → high kinetic energy → nuclei can approach closely.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "At ~10⁸ K, nuclei overcome Coulomb barrier → strong force takes over → fusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High T gives nuclei energy to overcome Coulomb repulsion → fusion.",
            commonErrors: [
              "Thinking it's about 'melting' — it's about kinetic energy vs repulsion.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare nuclear fission and fusion in terms of fuel, waste, and energy released.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fission vs fusion",
                statement:
                  "Fission: heavy fuel, radioactive waste, ~200 MeV. Fusion: light fuel, minimal waste, ~17-27 MeV.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fission: U-235/Pu-239 fuel (rare); fusion: hydrogen isotopes (abundant).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fission produces long-lived radioactive waste; fusion produces short-lived or no waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fission ~200 MeV per event; fusion ~17-27 MeV but per nucleon similar.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Fusion is safer (no chain reaction) but technically harder.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fission: rare fuel, long waste, proven. Fusion: abundant fuel, clean, harder.",
            commonErrors: [
              "Thinking fusion produces more energy per reaction — it's per nucleon that's comparable.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The Sun produces energy through the proton-proton chain.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the overall fusion reaction for hydrogen → helium.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how the Sun's gravity enables fusion.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Discuss two challenges in achieving controlled fusion on Earth.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stellar fusion",
                statement:
                  "Gravity compresses core → high T and density → fusion → energy balances gravity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$4^1_1\\text{H} \\to ^4_2\\text{He} + 2^0_{+1}\\beta^+ + 2\\nu + \\gamma$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Check: A: 4=4 ✓; Z: 4=2+2 ✓ (positrons reduce Z).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Gravity compresses core → extremely high temperature (~15 million K).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "High T → nuclei have enough KE to overcome Coulomb barrier.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "High density → frequent collisions → sustained fusion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Challenge 1: Achieving and sustaining ~10⁸ K plasma.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Challenge 2: Confining plasma (magnetic/inertial) long enough for net energy gain.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Materials must withstand neutron bombardment and heat.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 4H→He+2β⁺+2ν+γ. (b) Gravity→high T/density. (c) Plasma confinement + materials.",
            commonErrors: [
              "Thinking fusion is 'easy' — it requires extreme conditions not yet achieved sustainably.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Fusion reactions typically use fuel consisting of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heavy nuclei such as uranium" },
              { id: "b", text: "Light nuclei or hydrogen isotopes" },
              { id: "c", text: "Only alpha particles" },
              { id: "d", text: "Neutrons and electrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fusion fuel",
                statement:
                  "Light nuclei such as hydrogen isotopes have low $E_b/A$ and can move toward the binding-energy peak.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fusion joins light nuclei; uranium is a fission fuel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Light nuclei or hydrogen isotopes",
            commonErrors: [
              "Choosing uranium — that is split in fission, not fused.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The very high temperature needed for fusion mainly allows nuclei to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionise surrounding atoms" },
              {
                id: "b",
                text: "Overcome their mutual electrostatic repulsion",
              },
              { id: "c", text: "Increase their mass number" },
              { id: "d", text: "Emit gamma rays continuously" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coulomb barrier",
                statement:
                  "Positively charged nuclei repel; high kinetic energy lets them approach closely enough for the strong force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Temperature raises nuclear kinetic energy so the Coulomb repulsion can be overcome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Overcome electrostatic repulsion",
            commonErrors: [
              "Thinking temperature changes nuclear charges — it changes kinetic energy.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In $^2_1\\text{H}+^3_1\\text{H}\\to^4_2\\text{He}+^1_0\\text{n}$, the released energy is about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$200\\text{ MeV}$" },
              { id: "b", text: "$17.6\\text{ MeV}$" },
              { id: "c", text: "$0.5\\text{ MeV}$" },
              { id: "d", text: "$931\\text{ MeV}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "D-T fusion",
                statement:
                  "Deuterium-tritium fusion releases approximately $17.6\\text{ MeV}$ per reaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The products are helium-4 and a neutron with about $17.6\\text{ MeV}$ released.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $17.6\\text{ MeV}$",
            commonErrors: ["Using the much larger U-235 fission energy."],
          },
        },
        {
          id: "physhl-u6-fu-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Magnetic confinement in a tokamak is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cool the fuel to room temperature" },
              {
                id: "b",
                text: "Keep the hot plasma together long enough for fusion",
              },
              { id: "c", text: "Convert neutrons into protons" },
              { id: "d", text: "Replace the need for high temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plasma confinement",
                statement:
                  "Charged plasma particles are confined by magnetic fields while fusion conditions are maintained.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Confinement increases collision time without a material wall melting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Keep hot plasma confined",
            commonErrors: [
              "Thinking confinement replaces heating — both high T and confinement are required.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with fission, a major advantage of fusion fuel is that it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rare and difficult to extract" },
              {
                id: "b",
                text: "Abundant and produces little long-lived radioactive waste",
              },
              {
                id: "c",
                text: "Already a proven baseload technology worldwide",
              },
              { id: "d", text: "Capable of a runaway chain reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Fusion advantages",
                statement:
                  "Hydrogen isotopes are abundant; fusion has no long-lived actinide waste and no fission-style chain reaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fusion fuel is plentiful and its waste profile is much cleaner than fission products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Abundant fuel and little long-lived waste",
            commonErrors: [
              "Claiming controlled fusion is already commercial — it remains experimental.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In $^2_1\\text{H}+^3_1\\text{H}\\to^4_2\\text{He}+x{}^1_0\\text{n}$, find $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 1, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of nucleon number",
                statement: "Total $A$ must equal total $A$ on both sides.",
              },
            ],
            steps: [
              {
                reasoning: "Balance the mass numbers.",
                working: "2+3=4+x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $x$.",
                working: "x=5-4=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=1$",
            commonErrors: [
              "Balancing charge first — mass number gives the neutron coefficient.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In the overall proton-proton reaction $4{}^1_1\\text{H}\\to^4_2\\text{He}+2{}^0_{+1}\\beta^++2\\nu+\\gamma$, how many positrons are emitted?",
          response: {
            type: "numeric",
            parts: [{ label: "Positrons", answer: 2, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Charge conservation",
                statement:
                  "Four initial protons have charge $+4$; helium has $+2$, so two positrons are required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Four hydrogen nuclei have total charge $+4$; helium-4 has charge $+2$.",
                working: "Q_{\\text{initial}}=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The remaining charge must be carried by two positrons.",
                working: "Q_{\\text{products}}=2+2(1)=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the number of positrons.",
                working: "2\\beta^+",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 positrons",
            commonErrors: [
              "Ignoring the coefficient 2 already shown in the overall equation.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A D-T fusion reaction releases $17.6\\text{ MeV}$. Convert this to joules. ($1\\text{ eV}=1.6\\times10^{-19}\\text{ J}$.)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Energy / J",
                answer: 2.82e-12,
                tolerance: 1e-13,
                unit: "J",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electronvolt conversion",
                statement: "$1\\text{ MeV}=1.6\\times10^{-13}\\text{ J}$",
              },
            ],
            steps: [
              {
                reasoning: "Use the MeV-to-joule conversion.",
                working: "E=17.6\\times1.6\\times10^{-13}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "E=2.816\\times10^{-12}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Round to three significant figures.",
                working: "E=2.82\\times10^{-12}\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E=2.82\\times10^{-12}$ J",
            commonErrors: [
              "Forgetting the $10^6$ factor when converting MeV to eV.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "The mass defect in a fusion reaction is $0.018\\text{ u}$. Given $1\\text{ u}=931.5\\text{ MeV}\\,c^{-2}$, calculate the energy released in MeV.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Energy / MeV",
                answer: 16.8,
                tolerance: 0.05,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass-energy equivalence",
                statement:
                  "$E=\\Delta m c^2$; $1\\text{ u}=931.5\\text{ MeV}\\,c^{-2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the mass defect by the atomic mass unit energy equivalent.",
                working: "E=0.018\\times931.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "E=16.767",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State to appropriate precision.",
                working: "E=16.8\\text{ MeV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E=16.8$ MeV",
            commonErrors: [
              "Using $931.5$ as joules — it is already an energy-equivalent mass unit.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A fusion experiment completes $5.0\\times10^{19}$ reactions, each releasing $2.8\\times10^{-12}$ J. Calculate the total energy released.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy / J", answer: 1.4e8, tolerance: 5e6, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total energy",
                statement:
                  "$E=E_{\\text{reaction}}\\times N_{\\text{reactions}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply energy per reaction by the number of reactions.",
                working: "E=(2.8\\times10^{-12})(5.0\\times10^{19})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine the powers of ten.",
                working: "10^{-12}\\times10^{19}=10^7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the coefficient.",
                working: "E=14\\times10^7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the total energy.",
                working: "E=1.4\\times10^8\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E=1.4\\times10^8$ J",
            commonErrors: [
              "Adding energies instead of multiplying by the reaction count.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A fusion device produces $1.0\\times10^{20}$ reactions per second, each releasing $2.8\\times10^{-12}$ J. Calculate the fusion power.",
          response: {
            type: "numeric",
            parts: [
              { label: "Power / W", answer: 2.8e8, tolerance: 1e7, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power",
                statement:
                  "$P=E_{\\text{reaction}}\\times\\text{reaction rate}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply energy per reaction by reactions per second.",
                working: "P=(2.8\\times10^{-12})(1.0\\times10^{20})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine the powers of ten.",
                working: "P=2.8\\times10^8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check that the unit is joules per second.",
                working: "P=2.8\\times10^8\\text{ J s}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the power.",
                working: "P=2.8\\times10^8\\text{ W}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P=2.8\\times10^8$ W",
            commonErrors: [
              "Reporting total energy instead of power — use the per-second reaction rate.",
            ],
          },
        },
        {
          id: "physhl-u6-fu-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A D-T fusion releases $17.6\\text{ MeV}$ and involves 5 nucleons in total. Calculate the approximate energy released per nucleon.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Energy per nucleon / MeV",
                answer: 3.52,
                tolerance: 0.01,
                unit: "MeV",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy per nucleon",
                statement: "$E/A=17.6/5$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide the reaction energy by the total nucleon count.",
                working: "E/A=17.6/5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "E/A=3.52\\text{ MeV}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "E/A=3.52\\text{ MeV per nucleon}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E/A=3.52$ MeV per nucleon",
            commonErrors: [
              "Using only the helium mass number — count all five initial nucleons.",
            ],
          },
        },
      ],
    },
  ],
};
