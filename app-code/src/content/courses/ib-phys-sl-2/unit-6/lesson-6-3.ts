import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "physsl-u6-lesson-6-3",
  code: "6-3",
  title: "Fission, Fusion and Astrophysics",
  goal: "I CAN describe nuclear fission and fusion and their energy release, and apply redshift, luminosity and brightness to astrophysics problems.",
  standards: ["Topic 8.5", "Topic 9.1", "Topic 9.2", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Nuclear fission", definition: "The splitting of a heavy nucleus into lighter fragments, releasing energy and usually neutrons; a chain reaction occurs when neutrons cause further fissions." },
    { term: "Nuclear fusion", definition: "The joining of light nuclei to form a heavier nucleus, releasing energy; it requires extremely high temperatures to overcome electrostatic repulsion." },
    { term: "Moderator and control rods", definition: "A moderator slows neutrons so they can cause further fission; control rods absorb neutrons to regulate the chain reaction in a reactor." },
    { term: "Redshift", definition: "The shift of spectral lines to longer wavelengths ($z = \\Delta\\lambda/\\lambda$) for receding sources, caused by the Doppler effect or cosmic expansion." },
    { term: "Luminosity ($L$)", definition: "The total power radiated by a star, related to its apparent brightness $b$ at distance $d$ by $b = L/(4\\pi d^2)$." },
    { term: "Hertzsprung–Russell diagram", definition: "A plot of stellar luminosity (or absolute magnitude) against surface temperature used to classify stars and trace stellar evolution." },
  ],
  concepts: [
    {
      id: "physsl-u6-fission-fusion",
      title: "Nuclear fission and fusion",
      skill: "Describe fission chain reactions and reactor control, and explain why fusion releases energy and requires high temperatures.",
      lesson: {
        sections: [
          {
            heading: "Nuclear fission",
            body: "In **fission**, a heavy nucleus such as uranium-235 absorbs a neutron and splits into two lighter fragments plus two or three neutrons, releasing about $200$ MeV of energy. If the emitted neutrons cause further fissions a **chain reaction** develops. In a reactor a **moderator** (e.g. water or graphite) slows the neutrons so they can induce further fissions efficiently, while **control rods** absorb neutrons to keep the reaction steady. The energy released heats water to produce steam that drives turbines.",
          },
          {
            heading: "Mass defect and energy release",
            body: "The energy released in both fission and fusion comes from the **mass defect**: the total mass of the products is slightly less than the mass of the reactants, and the missing mass appears as energy $E = \\Delta mc^2$. Fission of heavy nuclei and fusion of light nuclei both move the products towards the peak of the binding-energy-per-nucleon curve near iron-56, so both release energy. Fusion of light nuclei releases more energy per nucleon than fission of heavy nuclei.",
          },
          {
            heading: "Nuclear fusion",
            body: "**Fusion** joins light nuclei (e.g. hydrogen isotopes) into heavier ones, as in the Sun. The positively charged nuclei repel each other electrostatically, so fusion requires temperatures of millions of kelvin to give the nuclei enough kinetic energy to overcome this repulsion — this is why controlled fusion on Earth remains difficult. Fusion produces no long-lived radioactive waste and uses abundant light elements such as hydrogen.",
          },
        ],
        keyFormulas: [
          { name: "Mass–energy equivalence", statement: "E = \\Delta m c^2" },
          { name: "Energy per fission", statement: "\\approx 200 \\text{ MeV} = 3.2 \\times 10^{-11} \\text{ J}" },
          { name: "Number of fissions", statement: "N = E_{\\text{total}}/E_{\\text{per fission}}" },
        ],
        workedExample: {
          problem: "Each fission of a uranium-235 nucleus releases about $200$ MeV. Calculate the energy released per fission in joules, and the number of fissions needed to release $1.0$ J.",
          solution: "Energy per fission $= 200 \\times 10^6 \\times 1.6 \\times 10^{-19} = 3.2 \\times 10^{-11}$ J. Number of fissions $= 1.0/3.2 \\times 10^{-11} = 3.1 \\times 10^{10}$.",
        },
      },
      questions: [
        {
          id: "physsl-u6-fission-fusion-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is nuclear fission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The joining of two light nuclei" },
              { id: "b", text: "The splitting of a heavy nucleus into lighter fragments" },
              { id: "c", text: "The emission of an alpha particle" },
              { id: "d", text: "The capture of an electron by a nucleus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nuclear fission", statement: "A heavy nucleus splits into lighter fragments after absorbing a neutron, releasing energy and neutrons." },
            ],
            steps: [
              { reasoning: "Fission is the splitting of a heavy nucleus; fusion is the joining of light nuclei.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the splitting of a heavy nucleus into lighter fragments",
            commonErrors: ["Confusing fission with fusion."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Each fission of a uranium-235 nucleus releases approximately $200$ MeV. The nucleus contains $235$ nucleons. Approximately how much energy is released per nucleon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.85$ MeV per nucleon" },
              { id: "b", text: "$200$ MeV per nucleon" },
              { id: "c", text: "$0.47$ MeV per nucleon" },
              { id: "d", text: "$47000$ MeV per nucleon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy per nucleon", statement: "E_{\\text{per nucleon}} = E_{\\text{total}}/A" },
            ],
            steps: [
              { reasoning: "Divide the total energy by the number of nucleons.", working: "\\frac{200}{235}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 0.851 \\approx 0.85 \\text{ MeV per nucleon}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.85$ MeV per nucleon",
            commonErrors: ["Multiplying instead of dividing by the nucleon number."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In the Sun, hydrogen nuclei fuse to form helium. The mass of the products is slightly less than the mass of the reactants.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is released because mass is converted to energy, $E = \\Delta mc^2$" },
              { id: "b", text: "Energy is absorbed because mass is created" },
              { id: "c", text: "No energy is released in fusion" },
              { id: "d", text: "Energy is released because the products have greater mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Mass–energy equivalence", statement: "E = \\Delta mc^2; the mass defect appears as released energy." },
            ],
            steps: [
              { reasoning: "The products have less mass than the reactants; the missing mass is converted to energy.", working: "\\Delta m > 0 \\Rightarrow E = \\Delta mc^2", marks: 1, markCode: "M" },
              { reasoning: "Fusion releases energy because the products are more tightly bound (closer to the binding-energy peak).", working: "\\text{greater binding energy per nucleon}", marks: 1, markCode: "M" },
              { reasoning: "Option (a) states the correct reason.", marks: 1, markCode: "A" },
              { reasoning: "Energy is released, not absorbed, and mass decreases rather than increases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** energy is released because mass is converted to energy, $E = \\Delta mc^2$",
            commonErrors: ["Thinking fusion requires energy input rather than releasing it.", "Confusing mass defect with mass increase."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a nuclear fission reactor, each fission of a uranium-235 nucleus releases about $200$ MeV of energy.",
          parts: [
            { label: "a", prompt: "Convert $200$ MeV into joules. (Take $1$ eV $= 1.6 \\times 10^{-19}$ J.)", marks: 2 },
            { label: "b", prompt: "Calculate the number of fissions needed to release $1.0$ J of energy.", marks: 2 },
            { label: "c", prompt: "State the role of the moderator in a fission reactor.", marks: 2 },
            { label: "d", prompt: "Explain why nuclear fusion requires extremely high temperatures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy conversion", statement: "1 eV = 1.6 \\times 10^{-19} J" },
              { kind: "definition", name: "Moderator", statement: "Slows neutrons to thermal energies so they can cause further fission." },
              { kind: "principle", name: "Fusion conditions", statement: "Nuclei must overcome electrostatic repulsion; high temperature gives them enough kinetic energy." },
            ],
            steps: [
              { part: "a", reasoning: "Convert MeV to joules: $200 \\times 10^6$ eV times $1.6 \\times 10^{-19}$ J per eV.", working: "E = 200 \\times 10^6 \\times 1.6 \\times 10^{-19}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "E = 3.2 \\times 10^{-11} \\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide total energy by energy per fission.", working: "N = \\frac{1.0}{3.2 \\times 10^{-11}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "N = 3.1 \\times 10^{10} \\text{ fissions}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The moderator slows the fast neutrons released in fission.", working: "\\text{slow neutrons}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Slow (thermal) neutrons are much more likely to be captured by U-235 and cause further fission, sustaining the chain reaction.", working: "\\text{increase fission probability}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Nuclei are positively charged and repel each other electrostatically.", working: "\\text{Coulomb repulsion}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only at very high temperatures do nuclei have enough kinetic energy to get close enough for the strong nuclear force to bind them.", working: "\\text{high } T \\Rightarrow \\text{high KE}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $E = 3.2 \\times 10^{-11}$ J (b) $N = 3.1 \\times 10^{10}$ fissions (c) slows neutrons so they can induce further fission (d) nuclei must overcome electrostatic repulsion, requiring very high kinetic energies",
            commonErrors: ["Forgetting to convert MeV to eV before multiplying by the eV-to-joule factor.", "Saying the moderator absorbs neutrons (that is the role of control rods)."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the role of the control rods in a nuclear fission reactor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They absorb neutrons to regulate the rate of the chain reaction" },
              { id: "b", text: "They slow down fast neutrons" },
              { id: "c", text: "They reflect neutrons back into the core" },
              { id: "d", text: "They cool the reactor core directly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Control rods", statement: "Control rods absorb neutrons to keep the chain reaction steady; the moderator slows neutrons." },
            ],
            steps: [
              { reasoning: "Control rods (e.g. boron or cadmium) capture neutrons, controlling how many are available to cause further fissions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** they absorb neutrons to regulate the rate of the chain reaction",
            commonErrors: ["Confusing control rods with the moderator."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why is a moderator used in a thermal fission reactor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It slows the fast neutrons released in fission so they can cause further fissions efficiently" },
              { id: "b", text: "It absorbs all the neutrons to stop the reaction" },
              { id: "c", text: "It increases the temperature of the core" },
              { id: "d", text: "It converts uranium-238 into uranium-235" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moderation", statement: "Slow (thermal) neutrons have a much higher probability of inducing fission in U-235 than fast neutrons." },
            ],
            steps: [
              { reasoning: "Fission produces fast neutrons that are less likely to cause further fission.", marks: 1, markCode: "M" },
              { reasoning: "The moderator (water or graphite) slows them to thermal energies, sustaining the chain reaction.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** it slows the fast neutrons released in fission so they can cause further fissions efficiently",
            commonErrors: ["Saying the moderator absorbs neutrons — that is the role of control rods."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Each fission of a uranium-235 nucleus releases approximately $200$ MeV of energy. ($1$ eV $= 1.6 \\times 10^{-19}$ J)",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy released per fission", answer: 3.2e-11, tolerance: 1e-13, unit: "J" },
              { label: "Number of fissions needed to release $1.0$ J", answer: 3.1e10, tolerance: 1e8, unit: "fissions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy conversion", statement: "1 eV = 1.6 \\times 10^{-19} J" },
              { kind: "formula", name: "Number of fissions", statement: "N = E_{\\text{total}}/E_{\\text{per fission}}" },
            ],
            steps: [
              { reasoning: "Convert $200$ MeV to joules.", working: "E = 200 \\times 10^{6} \\times 1.6 \\times 10^{-19}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 3.2 \\times 10^{-11} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Divide the total energy by the energy per fission.", working: "N = \\frac{1.0}{3.2 \\times 10^{-11}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N = 3.1 \\times 10^{10} \\text{ fissions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 3.2 \\times 10^{-11}$ J per fission; $N = 3.1 \\times 10^{10}$ fissions for $1.0$ J",
            commonErrors: ["Forgetting that $200$ MeV $= 200 \\times 10^{6}$ eV before converting.", "Dividing energy per fission by total energy instead of the reverse."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Each fission of a uranium-235 nucleus releases about $200$ MeV and the nucleus contains $235$ nucleons.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy released per nucleon", answer: 0.85, tolerance: 0.01, unit: "MeV" },
              { label: "Energy released per fission", answer: 3.2e-11, tolerance: 1e-13, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy per nucleon", statement: "E_{\\text{per nucleon}} = E_{\\text{total}}/A" },
              { kind: "formula", name: "Energy conversion", statement: "1 eV = 1.6 \\times 10^{-19} J" },
            ],
            steps: [
              { reasoning: "Divide the total energy by the nucleon number.", working: "\\frac{200}{235}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 0.851 \\approx 0.85 \\text{ MeV per nucleon}", marks: 1, markCode: "A" },
              { reasoning: "Convert $200$ MeV to joules.", working: "200 \\times 10^{6} \\times 1.6 \\times 10^{-19} = 3.2 \\times 10^{-11} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 3.2 \\times 10^{-11} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.85$ MeV per nucleon; $3.2 \\times 10^{-11}$ J per fission",
            commonErrors: ["Multiplying $200$ MeV by $235$ instead of dividing."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a fission reactor each fission of a uranium-235 nucleus releases $3.2 \\times 10^{-11}$ J. (Molar mass of U-235 $= 235$ g mol$^{-1}$, Avogadro constant $N_A = 6.02 \\times 10^{23}$ mol$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of U-235 nuclei in $1.0$ g", answer: 2.56e21, tolerance: 1e19, unit: "nuclei" },
              { label: "Energy released if all of them undergo fission", answer: 8.2e10, tolerance: 5e8, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Number of nuclei", statement: "N = (m/M) \\times N_A" },
              { kind: "formula", name: "Total energy", statement: "E_{\\text{total}} = N \\times E_{\\text{per fission}}" },
            ],
            steps: [
              { reasoning: "Moles of U-235 in $1.0$ g.", working: "n = \\frac{1.0 \\times 10^{-3}}{235} = 4.26 \\times 10^{-6} \\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Number of nuclei.", working: "N = 4.26 \\times 10^{-6} \\times 6.02 \\times 10^{23} = 2.56 \\times 10^{21}", marks: 1, markCode: "A" },
              { reasoning: "Total energy is nuclei times energy per fission.", working: "E = 2.56 \\times 10^{21} \\times 3.2 \\times 10^{-11}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 8.2 \\times 10^{10} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N = 2.56 \\times 10^{21}$ nuclei; $E = 8.2 \\times 10^{10}$ J",
            commonErrors: ["Using $1.0$ g as $1.0$ kg or forgetting to convert grams to kilograms in the molar mass.", "Multiplying by $235$ instead of dividing by it."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "In a fusion reaction the products have a mass defect of $\\Delta m = 2.0 \\times 10^{-29}$ kg. ($c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy released per fusion", answer: 1.8e-12, tolerance: 1e-14, unit: "J" },
              { label: "Number of fusion reactions needed to release $1.0$ J", answer: 5.6e11, tolerance: 1e9, unit: "reactions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Mass–energy equivalence", statement: "E = \\Delta m c^2" },
            ],
            steps: [
              { reasoning: "Energy released is the mass defect times $c^2$.", working: "E = \\Delta m c^2 = 2.0 \\times 10^{-29} \\times (3.0 \\times 10^{8})^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 1.8 \\times 10^{-12} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Number of reactions is total energy divided by energy per reaction.", working: "N = \\frac{1.0}{1.8 \\times 10^{-12}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N = 5.6 \\times 10^{11} \\text{ reactions}", marks: 1, markCode: "A" },
              { reasoning: "The missing mass appears as energy because the products are more tightly bound.", working: "\\Delta m \\to E = \\Delta m c^2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$E = 1.8 \\times 10^{-12}$ J per fusion; $N = 5.6 \\times 10^{11}$ reactions for $1.0$ J",
            commonErrors: ["Using $E = \\Delta m c$ instead of $\\Delta m c^2$.", "Forgetting to square the speed of light."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is a nuclear chain reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutrons released in one fission cause further fissions, sustaining the reaction" },
              { id: "b", text: "Nuclei collide with each other at high speed" },
              { id: "c", text: "Protons are emitted to balance charge" },
              { id: "d", text: "Gamma rays knock neutrons out of nuclei" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chain reaction", statement: "Each fission releases neutrons that can induce further fissions; if the rate is controlled a sustained reaction results." },
            ],
            steps: [
              { reasoning: "A chain reaction requires the neutrons produced in each fission to cause on average at least one further fission.", marks: 1, markCode: "M" },
              { reasoning: "This gives a self-sustaining series of fissions releasing energy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** neutrons released in one fission cause further fissions, sustaining the reaction",
            commonErrors: ["Thinking a chain reaction is a chemical reaction."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why does nuclear fusion require temperatures of millions of kelvin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The positively charged nuclei must have enough kinetic energy to overcome their electrostatic repulsion" },
              { id: "b", text: "The strong nuclear force only operates at high temperature" },
              { id: "c", text: "Fusion can only occur in plasmas of electrons" },
              { id: "d", text: "The mass defect only appears at high temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fusion conditions", statement: "Nuclei repel each other electrostatically (Coulomb repulsion); only at very high temperature do they approach closely enough for the strong nuclear force to bind them." },
            ],
            steps: [
              { reasoning: "Like charges repel, so two nuclei cannot approach each other closely at ordinary temperatures.", marks: 1, markCode: "M" },
              { reasoning: "High temperature gives the nuclei enough kinetic energy to overcome this repulsion and fuse.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** the positively charged nuclei must have enough kinetic energy to overcome their electrostatic repulsion",
            commonErrors: ["Thinking the strong nuclear force attracts nuclei from far away."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A nuclear reactor must release energy at a rate of $1.0 \\times 10^{9}$ J s$^{-1}$, and each fission releases $3.2 \\times 10^{-11}$ J.",
          response: {
            type: "numeric",
            parts: [
              { label: "Fissions per second required", answer: 3.1e19, tolerance: 1e17, unit: "s^{-1}" },
              { label: "Total fissions in one hour", answer: 1.1e23, tolerance: 1e21, unit: "fissions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fission rate", statement: "Rate = power / energy per fission" },
            ],
            steps: [
              { reasoning: "Fissions per second is power divided by energy per fission.", working: "\\frac{1.0 \\times 10^{9}}{3.2 \\times 10^{-11}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 3.1 \\times 10^{19} \\text{ fissions s}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "Multiply the rate by the number of seconds in an hour.", working: "3.1 \\times 10^{19} \\times 3600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 1.1 \\times 10^{23} \\text{ fissions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.1 \\times 10^{19}$ fissions per second; $1.1 \\times 10^{23}$ fissions per hour",
            commonErrors: ["Dividing energy per fission by power instead of the reverse."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A particular fusion reaction releases $17.6$ MeV and involves 5 nucleons in total. Fission of a uranium-235 nucleus releases about $200$ MeV over 235 nucleons.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy released per nucleon in this fusion reaction", answer: 3.5, tolerance: 0.05, unit: "MeV" },
              { label: "Ratio of fusion energy per nucleon to fission energy per nucleon", answer: 4.1, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy per nucleon", statement: "E_{\\text{per nucleon}} = E_{\\text{total}}/A" },
            ],
            steps: [
              { reasoning: "Fusion energy per nucleon.", working: "\\frac{17.6}{5} = 3.52 \\text{ MeV per nucleon}", marks: 1, markCode: "M" },
              { reasoning: "Fusion value.", working: "\\approx 3.5 \\text{ MeV per nucleon}", marks: 1, markCode: "A" },
              { reasoning: "Fission energy per nucleon is $200/235 = 0.85$ MeV; form the ratio.", working: "\\frac{3.52}{0.851} = 4.1", marks: 1, markCode: "M" },
              { reasoning: "Ratio value.", working: "\\approx 4.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.5$ MeV per nucleon; about $4.1$ times the fission value",
            commonErrors: ["Comparing total energies ($17.6$ vs $200$ MeV) instead of energy per nucleon."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A thermal fission reactor uses uranium-235 as fuel.",
          parts: [
            { label: "a", prompt: "Describe what happens in a fission chain reaction.", marks: 2 },
            { label: "b", prompt: "State the role of the moderator in the reactor.", marks: 2 },
            { label: "c", prompt: "State the role of the control rods in the reactor.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chain reaction", statement: "Each fission releases neutrons that induce further fissions." },
              { kind: "definition", name: "Moderator", statement: "Slows fast neutrons to thermal energies so they can cause further fission." },
              { kind: "definition", name: "Control rods", statement: "Absorb neutrons to regulate the reaction rate." },
            ],
            steps: [
              { part: "a", reasoning: "A U-235 nucleus absorbs a neutron and splits into two lighter fragments plus two or three neutrons.", working: "n + {}^{235}\\mathrm{U} \\to \\text{fragments} + 2\\text{–}3n + E", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The released neutrons cause further fissions, sustaining the chain reaction.", working: "\\text{neutrons} \\to \\text{more fissions}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The moderator slows the fast neutrons released in fission.", working: "\\text{slow neutrons}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Slow (thermal) neutrons are much more likely to be captured by U-235 and cause further fission.", working: "\\text{increase fission probability}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Control rods absorb neutrons.", working: "\\text{absorb } n", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This keeps the number of neutrons — and hence the rate of the chain reaction — steady.", working: "\\text{regulate reaction rate}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) each fission releases neutrons that cause further fissions, sustaining the chain reaction (b) slows fast neutrons so they can induce further fission efficiently (c) absorbs neutrons to keep the reaction rate steady",
            commonErrors: ["Saying control rods slow neutrons (that is the moderator).", "Omitting that fission releases neutrons as well as energy."],
          },
        },
        {
          id: "physsl-u6-fission-fusion-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Both nuclear fission of heavy nuclei and nuclear fusion of light nuclei release energy.",
          parts: [
            { label: "a", prompt: "Explain how the mass defect accounts for the energy released in these reactions.", marks: 2 },
            { label: "b", prompt: "Explain, using the binding-energy-per-nucleon curve, why both fission and fusion release energy.", marks: 2 },
            { label: "c", prompt: "Explain why fusion requires extremely high temperatures.", marks: 2 },
            { label: "d", prompt: "Calculate the energy released for a mass defect of $2.0 \\times 10^{-29}$ kg. ($c = 3.0 \\times 10^{8}$ m s$^{-1}$)", marks: 2 },
            { label: "e", prompt: "State two advantages of fusion over fission as an energy source.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Mass–energy equivalence", statement: "E = \\Delta mc^2" },
              { kind: "principle", name: "Binding energy", statement: "Reactions that move products towards the binding-energy peak near iron-56 release energy." },
              { kind: "principle", name: "Fusion conditions", statement: "Nuclei must overcome Coulomb repulsion; high temperature supplies the kinetic energy." },
            ],
            steps: [
              { part: "a", reasoning: "The total mass of the products is slightly less than the mass of the reactants.", working: "m_{\\text{products}} < m_{\\text{reactants}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The missing mass is converted to energy according to $E = \\Delta mc^2$.", working: "E = \\Delta mc^2", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The binding-energy-per-nucleon curve peaks near iron-56.", working: "\\text{peak near Fe-56}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fission of heavy nuclei and fusion of light nuclei both move products towards this peak, so both release energy.", working: "\\text{towards the peak} \\Rightarrow E \\text{ released}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Nuclei are positively charged and repel each other electrostatically.", working: "\\text{Coulomb repulsion}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Only at very high temperatures do nuclei have enough kinetic energy to approach closely enough for the strong nuclear force to bind them.", working: "\\text{high } T \\Rightarrow \\text{high KE}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Apply $E = \\Delta mc^2$.", working: "E = 2.0 \\times 10^{-29} \\times (3.0 \\times 10^{8})^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "E = 1.8 \\times 10^{-12} \\text{ J}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any two of: abundant light fuel (hydrogen); no long-lived radioactive waste; no risk of meltdown/chain reaction; more energy per nucleon.", working: "\\text{e.g. clean fuel, abundant reactants}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) products have less mass than reactants; the mass defect becomes energy via $E = \\Delta mc^2$ (b) both move products towards the binding-energy peak near iron-56 (c) nuclei must overcome Coulomb repulsion, needing very high kinetic energies (d) $E = 1.8 \\times 10^{-12}$ J (e) e.g. abundant fuel and no long-lived radioactive waste",
            commonErrors: ["Saying fusion absorbs energy rather than releasing it.", "Claiming the strong nuclear force attracts nuclei from large distances."],
          },
        },
      ],
    },
    {
      id: "physsl-u6-space",
      title: "Astrophysics: light, redshift and stellar evolution",
      skill: "Use redshift $z = \\Delta\\lambda/\\lambda$, the inverse-square law $b = L/(4\\pi d^2)$ and the HR diagram to describe stars and the expanding universe.",
      lesson: {
        sections: [
          {
            heading: "Luminosity, brightness and distance",
            body: "A star's **luminosity** $L$ is its total radiated power. Its **apparent brightness** $b$ (power per unit area received at Earth) follows the inverse-square law: $b = L/(4\\pi d^2)$, where $d$ is the distance to the star. Measuring $b$ and knowing $L$ (or vice versa) gives the distance — the basis of cosmic distance measurements.",
          },
          {
            heading: "Redshift and the expanding universe",
            body: "Spectral lines from distant galaxies are shifted to longer wavelengths — **redshift** — because the galaxies are moving away from us (Doppler effect) and space itself is expanding. The redshift is $z = \\Delta\\lambda/\\lambda = (\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}})/\\lambda_{\\text{emit}}$. Larger redshift means greater recession velocity and greater distance. Hubble's law relates recession velocity to distance, evidence for the Big Bang.",
          },
          {
            heading: "Stellar evolution and the HR diagram",
            body: "The **Hertzsprung–Russell diagram** plots luminosity against surface temperature. Most stars lie on the **main sequence**, where luminosity is powered by hydrogen fusion. Low-mass stars evolve into red giants then white dwarfs; massive stars end in supernovae, leaving neutron stars or black holes. Heavy elements are forged in stars and scattered by supernovae — we are made of stardust.",
          },
        ],
        keyFormulas: [
          { name: "Inverse-square law", statement: "b = L/(4\\pi d^2)" },
          { name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda" },
          { name: "Luminosity from brightness", statement: "L = 4\\pi d^2 b" },
        ],
        workedExample: {
          problem: "The Sun has apparent brightness $1400$ W m$^{-2}$ at Earth, where its distance is $1.5 \\times 10^{11}$ m. Calculate the Sun's luminosity.",
          solution: "$L = 4\\pi d^2 b = 4\\pi \\times (1.5 \\times 10^{11})^2 \\times 1400 = 4\\pi \\times 2.25 \\times 10^{22} \\times 1400 \\approx 4.0 \\times 10^{26}$ W.",
        },
      },
      questions: [
        {
          id: "physsl-u6-space-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What does a redshift of a galaxy's spectral lines indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The galaxy is moving towards us" },
              { id: "b", text: "The galaxy is moving away from us" },
              { id: "c", text: "The galaxy is hotter than the Sun" },
              { id: "d", text: "The galaxy contains no hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Redshift", statement: "Spectral lines shifted to longer wavelengths indicate a receding source (Doppler effect)." },
            ],
            steps: [
              { reasoning: "Redshift means the observed wavelengths are longer than emitted, which occurs for a receding source.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the galaxy is moving away from us",
            commonErrors: ["Confusing redshift (receding) with blueshift (approaching)."],
          },
        },
        {
          id: "physsl-u6-space-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A star has luminosity $1.0 \\times 10^{26}$ W. At a distance of $1.0 \\times 10^{17}$ m its apparent brightness is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8.0 \\times 10^{-10}$ W m$^{-2}$" },
              { id: "b", text: "$3.2 \\times 10^{-9}$ W m$^{-2}$" },
              { id: "c", text: "$8.0 \\times 10^{-9}$ W m$^{-2}$" },
              { id: "d", text: "$1.3 \\times 10^{-8}$ W m$^{-2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2)" },
            ],
            steps: [
              { reasoning: "Apply $b = L/(4\\pi d^2)$.", working: "b = \\frac{1.0 \\times 10^{26}}{4\\pi \\times (1.0 \\times 10^{17})^2} = \\frac{10^{26}}{4\\pi \\times 10^{34}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "b = \\frac{10^{26}}{1.2566 \\times 10^{35}} = 7.96 \\times 10^{-10} \\approx 8.0 \\times 10^{-10} \\text{ W m}^{-2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8.0 \\times 10^{-10}$ W m$^{-2}$",
            commonErrors: ["Using $b = L/(2\\pi d^2)$ or forgetting the factor of 4.", "Squaring the distance incorrectly."],
          },
        },
        {
          id: "physsl-u6-space-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A spectral line emitted by a distant galaxy at wavelength $500$ nm is observed on Earth at $550$ nm.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Redshift $z = 0.10$; galaxy is approaching" },
              { id: "b", text: "Redshift $z = 0.10$; galaxy is receding" },
              { id: "c", text: "Redshift $z = 0.50$; galaxy is receding" },
              { id: "d", text: "Redshift $z = 9.0$; galaxy is approaching" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}}" },
            ],
            steps: [
              { reasoning: "Shift in wavelength.", working: "\\Delta\\lambda = 550 - 500 = 50 \\text{ nm}", marks: 1, markCode: "M" },
              { reasoning: "Compute redshift.", working: "z = \\frac{50}{500} = 0.10", marks: 1, markCode: "A" },
              { reasoning: "Observed wavelength longer than emitted means the source is receding.", working: "\\lambda_{\\text{obs}} > \\lambda_{\\text{emit}} \\Rightarrow \\text{receding}", marks: 1, markCode: "R" },
              { reasoning: "Option (b) is consistent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** redshift $z = 0.10$; galaxy is receding",
            commonErrors: ["Using the observed wavelength as the denominator instead of the emitted one.", "Thinking longer wavelengths mean approaching."],
          },
        },
        {
          id: "physsl-u6-space-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A galaxy shows the hydrogen Balmer line normally at $656$ nm shifted to $700$ nm. Separately, the Sun has apparent brightness $1400$ W m$^{-2}$ at Earth and is $1.5 \\times 10^{11}$ m away.",
          parts: [
            { label: "a", prompt: "Calculate the redshift $z$ of the galaxy.", marks: 2 },
            { label: "b", prompt: "State what the redshift tells us about the galaxy's motion.", marks: 2 },
            { label: "c", prompt: "Calculate the luminosity of the Sun.", marks: 2 },
            { label: "d", prompt: "State two pieces of evidence that support the Big Bang model of the universe.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda" },
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2)" },
            ],
            steps: [
              { part: "a", reasoning: "Apply $z = \\Delta\\lambda/\\lambda_{\\text{emit}}$.", working: "z = \\frac{700 - 656}{656} = \\frac{44}{656}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "z = 0.067", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Positive redshift means the observed wavelength is longer than emitted.", working: "\\lambda_{\\text{obs}} > \\lambda_{\\text{emit}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This is the Doppler shift for a receding source; the galaxy is moving away from us.", working: "\\text{receding}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Rearrange $b = L/(4\\pi d^2)$ for $L$ and substitute.", working: "L = 4\\pi d^2 b = 4\\pi \\times (1.5 \\times 10^{11})^2 \\times 1400", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "L = 4\\pi \\times 2.25 \\times 10^{22} \\times 1400 \\approx 4.0 \\times 10^{26} \\text{ W}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any two of: cosmic microwave background radiation; redshift of distant galaxies (expansion); primordial abundance of light elements; large-scale structure.", working: "\\text{CMB; galaxy redshifts}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $z = 0.067$ (b) the galaxy is receding from us (c) $L \\approx 4.0 \\times 10^{26}$ W (d) e.g. the cosmic microwave background and the redshift of distant galaxies",
            commonErrors: ["Using the observed wavelength $700$ nm as the denominator in $z$.", "Using $L = 2\\pi d^2 b$ or forgetting the factor of 4 in the inverse-square law."],
            examinerNote: "Accept $z = 0.067$ or $0.07$; accept solar luminosity in the range $3.9$–$4.0 \\times 10^{26}$ W.",
          },
        },
        {
          id: "physsl-u6-space-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the luminosity of a star?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total power radiated by the star per unit time" },
              { id: "b", text: "The brightness of the star as seen from Earth" },
              { id: "c", text: "The distance to the star" },
              { id: "d", text: "The temperature of the star's surface" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Luminosity", statement: "Luminosity $L$ is the total power radiated by a star; apparent brightness $b$ is the power per unit area received at Earth." },
            ],
            steps: [
              { reasoning: "Luminosity is an intrinsic property of the star (total emitted power), whereas brightness depends on distance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** the total power radiated by the star per unit time",
            commonErrors: ["Confusing luminosity with apparent brightness."],
          },
        },
        {
          id: "physsl-u6-space-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two identical stars are observed. Star B is twice as far away as star A. How does the apparent brightness of star B compare with that of star A?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One quarter as bright" },
              { id: "b", text: "One half as bright" },
              { id: "c", text: "Twice as bright" },
              { id: "d", text: "Four times as bright" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2); brightness falls as the inverse square of distance." },
            ],
            steps: [
              { reasoning: "Identical stars have the same $L$, so brightness depends only on $d$.", marks: 1, markCode: "M" },
              { reasoning: "Doubling $d$ divides brightness by $2^2 = 4$.", working: "\\frac{b_B}{b_A} = \\left(\\frac{d_A}{d_B}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** one quarter as bright",
            commonErrors: ["Thinking brightness halves when distance doubles."],
          },
        },
        {
          id: "physsl-u6-space-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A star-like object has luminosity $4.0 \\times 10^{26}$ W and is observed at a distance of $2.0 \\times 10^{11}$ m.",
          response: {
            type: "numeric",
            parts: [
              { label: "Apparent brightness", answer: 796, tolerance: 5, unit: "W m^{-2}" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2)" },
            ],
            steps: [
              { reasoning: "Apply the inverse-square law.", working: "b = \\frac{L}{4\\pi d^2} = \\frac{4.0 \\times 10^{26}}{4\\pi \\times (2.0 \\times 10^{11})^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the denominator.", working: "4\\pi \\times 4.0 \\times 10^{22} = 5.03 \\times 10^{23}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the brightness.", working: "b = \\frac{4.0 \\times 10^{26}}{5.03 \\times 10^{23}} = 7.96 \\times 10^{2} \\text{ W m}^{-2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b \\approx 8.0 \\times 10^{2}$ W m$^{-2}$ (796 W m$^{-2}$)",
            commonErrors: ["Using $2\\pi d^2$ or forgetting the factor of 4.", "Failing to square the distance."],
          },
        },
        {
          id: "physsl-u6-space-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A spectral line emitted at $500$ nm is observed at $510$ nm.",
          response: {
            type: "numeric",
            parts: [
              { label: "Redshift $z$", answer: 0.02, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}}" },
            ],
            steps: [
              { reasoning: "Shift in wavelength.", working: "\\Delta\\lambda = 510 - 500 = 10 \\text{ nm}", marks: 1, markCode: "M" },
              { reasoning: "Redshift is the fractional shift relative to the emitted wavelength.", working: "z = \\frac{10}{500} = 0.02", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z = 0.02$",
            commonErrors: ["Using the observed wavelength $510$ nm as the denominator."],
          },
        },
        {
          id: "physsl-u6-space-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A hydrogen spectral line normally at $656$ nm is observed from a distant galaxy at $700$ nm.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength shift", answer: 44, tolerance: 0.5, unit: "nm" },
              { label: "Redshift $z$", answer: 0.067, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}}" },
            ],
            steps: [
              { reasoning: "Shift in wavelength.", working: "\\Delta\\lambda = 700 - 656 = 44 \\text{ nm}", marks: 1, markCode: "M" },
              { reasoning: "Wavelength shift value.", working: "\\Delta\\lambda = 44 \\text{ nm}", marks: 1, markCode: "A" },
              { reasoning: "Redshift relative to the emitted wavelength.", working: "z = \\frac{44}{656}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "z = 0.067", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta\\lambda = 44$ nm; $z = 0.067$",
            commonErrors: ["Dividing by the observed wavelength $700$ nm instead of the emitted $656$ nm."],
          },
        },
        {
          id: "physsl-u6-space-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A star has luminosity $1.0 \\times 10^{27}$ W and its apparent brightness measured at Earth is $1.0 \\times 10^{-9}$ W m$^{-2}$. (1 light-year $= 9.46 \\times 10^{15}$ m)",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance to the star", answer: 2.8e17, tolerance: 1e16, unit: "m" },
              { label: "Distance to the star", answer: 30, tolerance: 2, unit: "light-years" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2) \\Rightarrow d = \\sqrt{L/(4\\pi b)}" },
            ],
            steps: [
              { reasoning: "Rearrange for distance: $d = \\sqrt{L/(4\\pi b)}$.", working: "d = \\sqrt{\\frac{L}{4\\pi b}}", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "d = \\sqrt{\\frac{1.0 \\times 10^{27}}{4\\pi \\times 1.0 \\times 10^{-9}}} = \\sqrt{7.96 \\times 10^{34}} = 2.82 \\times 10^{17} \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Convert metres to light-years.", working: "d = \\frac{2.82 \\times 10^{17}}{9.46 \\times 10^{15}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d \\approx 30 \\text{ light-years}", marks: 1, markCode: "A" },
              { reasoning: "The inverse-square law links intrinsic luminosity to observed brightness, enabling distance measurement.", working: "b \\propto 1/d^2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$d = 2.8 \\times 10^{17}$ m $\\approx 30$ light-years",
            commonErrors: ["Forgetting the square root when rearranging $b = L/(4\\pi d^2)$.", "Using $2\\pi$ instead of $4\\pi$."],
          },
        },
        {
          id: "physsl-u6-space-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "On a Hertzsprung–Russell diagram, what powers the stars that lie on the main sequence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear fusion of hydrogen in the core" },
              { id: "b", text: "Gravitational contraction only" },
              { id: "c", text: "Radioactive decay of heavy elements" },
              { id: "d", text: "Reflection of light from nearby stars" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Main sequence", statement: "Main-sequence stars fuse hydrogen into helium in their cores; the HR diagram plots luminosity against surface temperature." },
            ],
            steps: [
              { reasoning: "Most stars, including the Sun, lie on the main sequence where hydrogen fusion provides the energy.", marks: 1, markCode: "M" },
              { reasoning: "This fusion maintains a balance between gravitational collapse and radiation pressure.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** nuclear fusion of hydrogen in the core",
            commonErrors: ["Thinking main-sequence stars are powered by fission."],
          },
        },
        {
          id: "physsl-u6-space-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A galaxy shows a spectral line emitted at $400$ nm observed at $600$ nm. What is the redshift, and what does it indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$z = 0.5$; the galaxy is receding from us" },
              { id: "b", text: "$z = 0.5$; the galaxy is approaching us" },
              { id: "c", text: "$z = 2.0$; the galaxy is receding from us" },
              { id: "d", text: "$z = 0.33$; the galaxy is approaching us" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}}" },
            ],
            steps: [
              { reasoning: "Compute the redshift: $\\Delta\\lambda = 200$ nm over $\\lambda_{\\text{emit}} = 400$ nm.", working: "z = \\frac{600 - 400}{400} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Observed wavelength longer than emitted means the source is receding (Doppler/expansion).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $z = 0.5$; the galaxy is receding from us",
            commonErrors: ["Dividing by the observed wavelength $600$ nm to get $z = 0.33$."],
          },
        },
        {
          id: "physsl-u6-space-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A spectral line emitted at $500$ nm from a distant galaxy is observed on Earth at $600$ nm.",
          response: {
            type: "numeric",
            parts: [
              { label: "Redshift $z$", answer: 0.2, tolerance: 0.001 },
              { label: "Wavelength shift", answer: 100, tolerance: 1, unit: "nm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}} = (\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}})/\\lambda_{\\text{emit}}" },
            ],
            steps: [
              { reasoning: "Wavelength shift.", working: "\\Delta\\lambda = 600 - 500 = 100 \\text{ nm}", marks: 1, markCode: "M" },
              { reasoning: "Redshift relative to emitted wavelength.", working: "z = \\frac{100}{500} = 0.20", marks: 1, markCode: "M" },
              { reasoning: "Redshift value.", working: "z = 0.20", marks: 1, markCode: "A" },
              { reasoning: "Wavelength shift value.", working: "\\Delta\\lambda = 100 \\text{ nm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z = 0.20$; wavelength shift $= 100$ nm",
            commonErrors: ["Using the observed wavelength as the denominator in $z$."],
          },
        },
        {
          id: "physsl-u6-space-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A star similar to the Sun has luminosity $4.0 \\times 10^{26}$ W and is observed at a distance of $3.0 \\times 10^{11}$ m.",
          response: {
            type: "numeric",
            parts: [
              { label: "Apparent brightness", answer: 354, tolerance: 3, unit: "W m^{-2}" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2)" },
            ],
            steps: [
              { reasoning: "Apply the inverse-square law.", working: "b = \\frac{4.0 \\times 10^{26}}{4\\pi \\times (3.0 \\times 10^{11})^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the denominator.", working: "4\\pi \\times 9.0 \\times 10^{22} = 1.13 \\times 10^{24}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the brightness.", working: "b = \\frac{4.0 \\times 10^{26}}{1.13 \\times 10^{24}} = 3.5 \\times 10^{2} \\text{ W m}^{-2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b \\approx 3.5 \\times 10^{2}$ W m$^{-2}$",
            commonErrors: ["Forgetting to square the distance or the factor of 4 in $4\\pi d^2$."],
          },
        },
        {
          id: "physsl-u6-space-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "The light from distant galaxies is shifted to longer wavelengths — this is called redshift.",
          parts: [
            { label: "a", prompt: "State the formula for redshift $z$ in terms of wavelength.", marks: 2 },
            { label: "b", prompt: "State what a positive redshift indicates about the motion of the source.", marks: 1 },
            { label: "c", prompt: "Explain how redshift provides evidence for the expansion of the universe.", marks: 2 },
            { label: "d", prompt: "State Hubble's law relating recession velocity to distance.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}}" },
              { kind: "law", name: "Hubble's law", statement: "v = Hd — recession velocity is proportional to distance." },
            ],
            steps: [
              { part: "a", reasoning: "Redshift is the fractional change in wavelength.", working: "z = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{emit}}}{\\lambda_{\\text{emit}}} = \\frac{\\Delta\\lambda}{\\lambda}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A positive redshift means the observed wavelength is longer than emitted, so the source is receding.", working: "\\lambda_{\\text{obs}} > \\lambda_{\\text{emit}} \\Rightarrow \\text{receding}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "More distant galaxies show larger redshifts, implying greater recession velocities.", working: "z \\uparrow \\text{ with distance}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This systematic expansion of space supports the Big Bang model.", working: "\\text{expanding universe}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Hubble's law: velocity proportional to distance.", working: "v = Hd", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $z = \\Delta\\lambda/\\lambda_{\\text{emit}}$ (b) the source is moving away from us (c) more distant galaxies have larger redshifts and greater recession velocities, indicating expansion (d) $v = Hd$",
            commonErrors: ["Using the observed wavelength as the denominator.", "Confusing redshift with blueshift."],
          },
        },
        {
          id: "physsl-u6-space-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "The Balmer line of hydrogen normally at $656$ nm is observed from a distant galaxy at $700$ nm. The Sun has apparent brightness $1400$ W m$^{-2}$ at Earth and is $1.5 \\times 10^{11}$ m away.",
          parts: [
            { label: "a", prompt: "Calculate the redshift $z$ of the galaxy.", marks: 2 },
            { label: "b", prompt: "State what the redshift tells us about the galaxy's motion.", marks: 2 },
            { label: "c", prompt: "Calculate the luminosity of the Sun.", marks: 2 },
            { label: "d", prompt: "On a Hertzsprung–Russell diagram, what does the main sequence represent?", marks: 2 },
            { label: "e", prompt: "State the likely final fate of a very massive star.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Redshift", statement: "z = \\Delta\\lambda/\\lambda_{\\text{emit}}" },
              { kind: "formula", name: "Inverse-square law", statement: "b = L/(4\\pi d^2) \\Rightarrow L = 4\\pi d^2 b" },
              { kind: "context", name: "HR diagram", statement: "Main sequence: stars fusing hydrogen in their cores." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $z = \\Delta\\lambda/\\lambda_{\\text{emit}}$.", working: "z = \\frac{700 - 656}{656} = \\frac{44}{656}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "z = 0.067", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Positive redshift means the observed wavelength is longer than emitted.", working: "\\lambda_{\\text{obs}} > \\lambda_{\\text{emit}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This is the Doppler shift for a receding source; the galaxy is moving away from us.", working: "\\text{receding}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Rearrange $b = L/(4\\pi d^2)$ and substitute.", working: "L = 4\\pi d^2 b = 4\\pi \\times (1.5 \\times 10^{11})^2 \\times 1400", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "L \\approx 4.0 \\times 10^{26} \\text{ W}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The main sequence represents stars in the stable hydrogen-burning phase of their lives.", working: "\\text{hydrogen fusion in core}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Most stars, including the Sun, lie on the main sequence.", working: "\\text{most stars on main sequence}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A very massive star ends its life in a supernova, leaving a neutron star or black hole.", working: "\\text{supernova} \\to \\text{neutron star / black hole}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $z = 0.067$ (b) the galaxy is receding from us (c) $L \\approx 4.0 \\times 10^{26}$ W (d) stars fusing hydrogen in their cores (e) a supernova leaving a neutron star or black hole",
            commonErrors: ["Using the observed wavelength as the denominator in $z$.", "Forgetting the factor of 4 in the inverse-square law."],
            examinerNote: "Accept $z = 0.067$ or $0.07$; accept solar luminosity in the range $3.9$–$4.0 \\times 10^{26}$ W.",
          },
        },
      ],
    },
  ],
};
