import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eph11-u3-lesson-3-2",
  code: "3-2",
  title: "Uses and Dangers of Radiation, Fission and Fusion",
  goal: "I CAN explain the uses and dangers of radiation, describe nuclear fission and fusion, and distinguish contamination from irradiation.",
  standards: ["4PH1 7.5", "4PH1 7.6", "4PH1 7.8", "4PH1 7.10", "4PH1 7.12"],
  vocabulary: [
    { term: "Tracer", definition: "A small amount of a radioactive isotope put into a system so that its path can be followed with a detector, for example in the body or in a pipe." },
    { term: "Nuclear fission", definition: "The splitting of a large, unstable nucleus into two smaller nuclei, releasing neutrons and energy." },
    { term: "Chain reaction", definition: "A reaction in which neutrons released by one fission cause further fissions, which release more neutrons, and so on." },
    { term: "Nuclear fusion", definition: "The joining of two small nuclei to form a larger nucleus, releasing energy." },
    { term: "Contamination", definition: "Unwanted radioactive material getting onto or into an object or person." },
    { term: "Irradiation", definition: "Exposure of an object or person to radiation from a source outside it. The object does not become radioactive." },
    { term: "Control rod", definition: "A rod, often made of boron, that absorbs neutrons in a reactor to control the rate of fission." },
  ],
  concepts: [
    {
      id: "eph11-u3-uses-dangers-fission-fusion",
      title: "Uses, dangers, fission and fusion",
      skill: "Choose a suitable radioisotope for a use, describe the dangers of radiation, and compare nuclear fission and fusion.",
      lesson: {
        sections: [
          {
            heading: "Uses and dangers of radiation",
            body: "The type of radiation and the half-life are chosen to suit the job.\n\n- **Smoke alarms**: americium-241 emits alpha. Smoke absorbs the alpha particles, so the current falls and the alarm sounds. Long half-life, so it works for years.\n- **Thickness monitoring** of paper or foil: beta passes through, and more is absorbed if the material is thicker.\n- **Medical tracers**: gamma emitters with a short half-life (hours) are injected and traced outside the body, then decay away quickly.\n- **Sterilising** medical equipment and food with gamma rays, which kill bacteria.\n- **Radiotherapy**: a beam of gamma rays is aimed at a tumour to kill cancer cells.\n\nIonising radiation damages cells and DNA, which can cause **mutations, cancer** or cell death. Precautions: handle sources with tongs, store them in lead-lined boxes, limit exposure time, increase distance and use shielding.",
          },
          {
            heading: "Fission and fusion",
            body: "**Nuclear fission**: a slow-moving neutron hits a uranium-235 or plutonium-239 nucleus, which splits into two smaller nuclei, releasing 2 or 3 neutrons and energy:\n\n$^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\rightarrow ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3\\,^{1}_{0}\\text{n}$\n\nThe released neutrons cause further fissions: a **chain reaction**. In a reactor, **control rods** absorb neutrons to keep the rate steady, and a **moderator** slows neutrons down.\n\n**Nuclear fusion**: two small nuclei join to make a larger one, releasing energy:\n\n$^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\rightarrow ^{4}_{2}\\text{He} + ^{1}_{0}\\text{n}$\n\nFusion powers stars. It needs extremely high temperatures (millions of degrees) and pressure so nuclei have enough energy to overcome their electrostatic repulsion. This makes it very hard to achieve on Earth.",
          },
        ],
        keyFormulas: [
          { name: "Fission", statement: "large nucleus + neutron $\\rightarrow$ two smaller nuclei + neutrons + energy" },
          { name: "Fusion", statement: "two small nuclei $\\rightarrow$ one larger nucleus + energy" },
          { name: "Conservation in nuclear equations", statement: "total $A$ and total $Z$ equal on both sides" },
        ],
        workedExample: {
          problem: "Show that $^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\rightarrow ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3\\,^{1}_{0}\\text{n}$ balances.",
          solution: "Mass numbers: left $235 + 1 = 236$; right $141 + 92 + 3 \\times 1 = 236$. Atomic numbers: left $92 + 0 = 92$; right $56 + 36 + 0 = 92$. Both totals match, so the equation balances.",
        },
      },
      questions: [
        {
          id: "eph11-u3-uses-dangers-fission-fusion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process joins two small nuclei to make a larger nucleus and releases energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear fission" },
              { id: "b", text: "Nuclear fusion" },
              { id: "c", text: "Alpha decay" },
              { id: "d", text: "Beta decay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nuclear fusion", statement: "Fusion is the joining of two small nuclei into a larger nucleus, releasing energy." },
            ],
            steps: [
              { reasoning: "Fission splits a large nucleus; fusion joins small nuclei.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nuclear fusion",
            commonErrors: ["Choosing fission because both release energy."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u3-uses-dangers-fission-fusion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A hospital needs a radioactive tracer to be injected into a patient to image an organ from outside the body. State the type of radiation and the half-life that are most suitable, and give a reason for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Choosing a tracer", statement: "A tracer must be able to leave the body to be detected, and must decay quickly to limit the dose." },
            ],
            steps: [
              { reasoning: "Gamma radiation is the most suitable.", marks: 1, markCode: "B" },
              { reasoning: "Because it passes out of the body and can be detected outside (alpha and beta would be absorbed).", marks: 1, markCode: "B" },
              { reasoning: "A short half-life (hours), so the activity falls quickly and the patient receives a low total dose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Gamma, because it is penetrating enough to be detected outside the body; a short half-life so the dose is low.",
            commonErrors: ["Choosing alpha because it is most ionising; it cannot leave the body.", "Choosing a long half-life so that the tracer 'lasts'."],
            examinerNote: "The reason marks depend on the correct choice. Reject 'gamma is the weakest radiation'.",
          },
        },
        {
          id: "eph11-u3-uses-dangers-fission-fusion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A hospital receives a gamma-emitting tracer with an activity of $240\\text{ MBq}$. The half-life is 6 hours. Calculate the activity 18 hours later.",
          response: {
            type: "numeric",
            parts: [{ label: "Activity after 18 hours", answer: 30, unit: "MBq" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Activity after n half-lives", statement: "$A = \\frac{A_0}{2^n}$, where $n = \\frac{\\text{time}}{\\text{half-life}}$" },
            ],
            steps: [
              { reasoning: "Find the number of half-lives.", working: "n = \\frac{18}{6} = 3", marks: 1, markCode: "M" },
              { reasoning: "Divide by $2^3 = 8$ (or halve three times).", working: "\\frac{240}{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "30\\text{ MBq}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\text{ MBq}$",
            commonErrors: ["Dividing by 3 to give $80\\text{ MBq}$.", "Halving only once to give $120\\text{ MBq}$."],
            examinerNote: "A1 cao 30. Allow ecf for the final mark from a wrong number of half-lives.",
          },
        },
        {
          id: "eph11-u3-uses-dangers-fission-fusion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A smoke alarm contains americium-241, $^{241}_{95}\\text{Am}$, an alpha emitter with a half-life of 432 years. In a nuclear power station, uranium-235 undergoes fission.",
          parts: [
            { label: "a", prompt: "Complete the decay equation: $^{241}_{95}\\text{Am} \\rightarrow ^{A}_{Z}\\text{Np} + ^{4}_{2}\\alpha$. Give $A$ and $Z$.", marks: 2 },
            { label: "b", prompt: "Explain why americium-241 is a suitable source for a smoke alarm. Refer to the type of radiation and the half-life.", marks: 2 },
            { label: "c", prompt: "A fission reaction is $^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\rightarrow ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + x\\,^{1}_{0}\\text{n}$. Calculate $x$.", marks: 2 },
            { label: "d", prompt: "Explain how a chain reaction occurs, and how control rods control it.", marks: 2 },
            { label: "e", prompt: "State one reason why nuclear fusion is difficult to achieve on Earth.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Balancing nuclear equations", statement: "Total mass number and atomic number are conserved." },
              { kind: "principle", name: "Chain reaction", statement: "Neutrons released in fission cause further fission. Control rods absorb neutrons." },
              { kind: "property", name: "Choosing a source", statement: "Alpha is absorbed by smoke; a long half-life keeps the activity almost constant." },
            ],
            steps: [
              { part: "a", reasoning: "Mass number: $241 = A + 4$.", working: "A = 237", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Atomic number: $95 = Z + 2$.", working: "Z = 93", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Alpha particles are absorbed by smoke particles, so the detector current changes and the alarm sounds. Alpha is also stopped by paper, so it is safe inside the casing.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A long half-life means the activity stays almost constant, so the alarm works for many years.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Mass numbers balance: $235 + 1 = 141 + 92 + x$.", working: "236 = 233 + x", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve (atomic numbers already balance: $92 = 56 + 36$).", working: "x = 3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Neutrons released by one fission hit other uranium nuclei and cause them to split, releasing more neutrons.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Control rods absorb neutrons, so fewer cause fission and the rate is kept steady.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It needs extremely high temperature and pressure (millions of degrees) so that nuclei overcome their repulsion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $A = 237$, $Z = 93$ (b) alpha absorbed by smoke; long half-life (c) $x = 3$ (d) neutrons cause further fission; control rods absorb neutrons (e) very high temperature and pressure needed",
            commonErrors: ["Giving $A = 245$ by adding the alpha particle.", "Giving $x = 2$ by forgetting the starting neutron.", "Saying that control rods slow neutrons down; that is the moderator."],
            examinerNote: "In (b) allow 'alpha is strongly ionising' for the first mark. Allow ecf in (c) from a wrong sum.",
          },
        },
      ],
    },
    {
      id: "eph11-u3-contamination-irradiation",
      title: "Contamination and irradiation",
      skill: "Distinguish between contamination and irradiation and judge the relative danger of different sources inside and outside the body.",
      lesson: {
        sections: [
          {
            heading: "Irradiation and contamination",
            body: "**Irradiation** is exposure to radiation from a source **outside** the body or object. When the source is removed or the person moves away, the exposure stops, and the person does **not** become radioactive. Radiotherapy and X-rays are irradiation.\n\n**Contamination** is when radioactive material gets **onto or into** the body, for example by breathing in dust, swallowing it or through a cut. The material stays there and keeps emitting radiation until it decays or is removed, so the exposure continues.\n\nExposure is reduced by shielding, limiting time, and keeping a larger distance from the source.",
          },
          {
            heading: "Which radiation is most dangerous?",
            body: "The danger depends on where the source is.\n\n- **Outside the body**: alpha cannot penetrate dead skin, so it is the least dangerous. Beta and especially gamma can reach internal organs.\n- **Inside the body** (contamination): alpha is the **most dangerous**, because it is strongly ionising and all its energy is absorbed by nearby living cells. Gamma mostly passes straight out, so it deposits less energy.\n\nA source with a **long half-life** stays active for a long time, which is a problem for waste. A **short half-life** source is intense at first but soon decays away, which is good for medical tracers. Radioactive waste is stored in shielded containers, often buried deep underground.",
          },
        ],
        keyFormulas: [
          { name: "Irradiation", statement: "exposure to a source outside the body; the person does not become radioactive" },
          { name: "Contamination", statement: "radioactive material on or in the body; exposure continues" },
          { name: "Activity after $n$ half-lives", statement: "$A = \\frac{A_0}{2^n}$" },
        ],
        workedExample: {
          problem: "Explain why an alpha source is more dangerous swallowed than held in the hand.",
          solution: "Held in the hand, the alpha particles are absorbed by the dead outer layer of skin and cannot reach living cells. Swallowed, the source is in direct contact with living tissue. Alpha is strongly ionising and deposits all its energy in a few cells, damaging DNA and risking cancer.",
        },
      },
      questions: [
        {
          id: "eph11-u3-contamination-irradiation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A patient has a tumour treated by a beam of gamma rays from a machine outside the body. What is this an example of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contamination" },
              { id: "b", text: "Irradiation" },
              { id: "c", text: "Nuclear fission" },
              { id: "d", text: "Background radiation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irradiation", statement: "Exposure to radiation from a source outside the body." },
            ],
            steps: [
              { reasoning: "The source is outside the patient, so the patient is irradiated but does not become radioactive.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Irradiation",
            commonErrors: ["Choosing contamination because the patient is exposed to radiation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u3-contamination-irradiation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between contamination and irradiation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contamination and irradiation", statement: "Contamination: radioactive material on or in an object. Irradiation: exposure to radiation from an outside source." },
            ],
            steps: [
              { reasoning: "Contamination is radioactive material getting onto or into a person or object.", marks: 1, markCode: "B" },
              { reasoning: "Irradiation is exposure to radiation from an external source, which does not make the object radioactive.", marks: 1, markCode: "B" },
              { reasoning: "Contamination continues until the material decays or is removed; irradiation stops when the source is removed or shielded.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Contamination: radioactive material on or in the body, so exposure continues. Irradiation: external source; exposure stops when it is removed.",
            commonErrors: ["Saying that irradiated objects become radioactive."],
            examinerNote: "Do not award marks for describing the uses of radiation.",
          },
        },
        {
          id: "eph11-u3-contamination-irradiation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A technician accidentally swallows a small amount of an alpha-emitting source. A colleague works with a gamma source in a lead-lined room. Explain which person is at greater risk from the radiation emitted by the source, and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Danger inside the body", statement: "Inside the body, alpha is the most dangerous because it is strongly ionising and is absorbed by nearby cells." },
              { kind: "principle", name: "Danger outside the body", statement: "Outside the body, shielding and distance reduce exposure." },
            ],
            steps: [
              { reasoning: "The technician is at greater risk.", marks: 1, markCode: "R" },
              { reasoning: "The source is inside the body (contamination), so exposure continues until it decays or is removed.", marks: 1, markCode: "B" },
              { reasoning: "Alpha is strongly ionising and all its energy is absorbed by living cells next to it.", marks: 1, markCode: "B" },
              { reasoning: "The colleague is irradiated from outside and the lead-lined room reduces exposure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The technician, because the alpha source is inside the body, is strongly ionising and keeps irradiating nearby cells.",
            commonErrors: ["Claiming gamma is more dangerous because it is more penetrating, ignoring that the alpha source is inside the body.", "Saying alpha is harmless because paper stops it."],
            examinerNote: "The R mark needs the correct conclusion supported by a reason.",
          },
        },
        {
          id: "eph11-u3-contamination-irradiation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A patient with an overactive thyroid swallows a drink containing iodine-131, which collects in the thyroid gland. Iodine-131 emits beta and gamma radiation and has a half-life of 8 days. The initial activity in the patient is $640\\text{ MBq}$.",
          parts: [
            { label: "a", prompt: "State whether the patient is irradiated or contaminated, and give a reason.", marks: 2 },
            { label: "b", prompt: "Calculate the activity after 32 days.", marks: 3 },
            { label: "c", prompt: "Explain why a source with a half-life of 8 days is more suitable than one with a half-life of 8 years.", marks: 2 },
            { label: "d", prompt: "Suggest why the patient is told to stay away from other people for several days.", marks: 2 },
            { label: "e", prompt: "State one reason why iodine-131 is not suitable as a source in a smoke alarm.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contamination", statement: "Radioactive material inside the body means exposure continues until it decays or is removed." },
              { kind: "formula", name: "Activity after n half-lives", statement: "$A = \\frac{A_0}{2^n}$" },
              { kind: "property", name: "Choosing half-life", statement: "A short half-life limits the total dose; a long half-life stays active for a long time." },
            ],
            steps: [
              { part: "a", reasoning: "The patient is contaminated.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The radioactive material is inside the body, so the exposure continues until it decays or is removed.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Number of half-lives.", working: "n = \\frac{32}{8} = 4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $2^4 = 16$.", working: "\\frac{640}{16}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "40\\text{ MBq}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With 8 days the activity falls quickly, so the total dose to the patient is small.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "With 8 years the iodine would stay active in the body for years, which would keep damaging cells.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The patient is still emitting gamma radiation (which can penetrate the body).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Other people would be irradiated, so distance protects them from the exposure.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It emits beta and gamma, which are less ionising and more penetrating, and the half-life is too short, so the alarm would soon stop working.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) contaminated, source inside the body (b) $40\\text{ MBq}$ (c) short half-life gives a lower total dose (d) gamma radiation irradiates other people (e) short half-life, and it does not emit alpha",
            commonErrors: ["Saying that a long half-life means the radiation is more intense; a long half-life means a lower activity per nucleus.", "Using 4 half-lives but dividing by 4 instead of 16."],
            examinerNote: "In (e) accept either the short half-life or the emission of beta and gamma. Allow ecf in (b) from a wrong number of half-lives.",
          },
        },
      ],
    },
  ],
};
