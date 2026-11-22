import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eph11-u4-lesson-4-2",
  code: "4-2",
  title: "Investigating Electromagnetism",
  goal: "I CAN investigate magnetic fields, induction and transformers.",
  standards: ["Edexcel IGCSE Physics 4PH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Magnetic field",
      definition: "Region where magnetic force acts — field lines N to S.",
    },
    {
      term: "Electromagnetic induction",
      definition: "EMF induced when flux linkage changes.",
    },
    {
      term: "Transformer",
      definition: "Changes AC voltage via electromagnetic induction.",
    },
    {
      term: "Lenz's law",
      definition: "Induced current opposes the change causing it.",
    },
  ],
  concepts: [
    {
      id: "eph11-u4-magnetism",
      title: "Investigating Magnetic Fields",
      skill: "Map magnetic fields and investigate electromagnetic induction.",
      lesson: {
        sections: [
          {
            heading: "Field mapping",
            body: "**Bar magnet**: plotting compass moved around magnet — field lines emerge from N, enter S. **Current wire**: compass deflects — circular field, direction by right-hand grip rule. **Solenoid**: field inside uniform — like bar magnet.\n\n**Field strength**: compass needle deflection, iron filings pattern (qualitative), or Hall probe (quantitative — advanced). **Force on wire**: current-carrying wire in field experiences force — F = BIL.",
          },
          {
            heading: "Electromagnetic induction",
            body: "**Faraday's experiment**: move magnet into coil connected to galvanometer — deflection. Faster movement → bigger deflection. More turns → bigger deflection. **Lenz's law**: induced current opposes change — repels approaching magnet.\n\n**Transformer**: primary coil AC → changing flux → induces secondary EMF. Vp/Vs = Np/Ns (ideal). **Experiments**: vary turns ratio, measure output voltage, verify ratio.",
          },
        ],
        keyFormulas: [
          { name: "Transformer", statement: "Vp/Vs = Np/Ns." },
          {
            name: "Faraday's law",
            statement: "EMF ∝ rate of change of flux linkage.",
          },
        ],
        workedExample: {
          problem:
            "Transformer: 1000 primary turns, 100 secondary. Input 240V. Output?",
          solution: "Vs = 240×100/1000 = 24 V (step-down).",
        },
      },
      questions: [
        {
          id: "eph11-u4-magnetism-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What direction do magnetic field lines go outside a bar magnet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "N to S" },
              { id: "b", text: "S to N" },
              { id: "c", text: "Clockwise" },
              { id: "d", text: "Random" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Field lines",
                statement: "N to S outside magnet.",
              },
            ],
            steps: [
              { reasoning: "N to S outside.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** N to S",
            commonErrors: ["S to N confused."],
          },
        },
        {
          id: "eph11-u4-magnetism-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does moving a magnet into a coil induce a current?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EM induction",
                statement: "Changing flux linkage induces EMF (Faraday).",
              },
            ],
            steps: [
              {
                reasoning: "Magnet movement changes magnetic flux.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Changing flux induces EMF in coil.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "EMF drives current through galvanometer.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Moving magnet changes flux → induces EMF → current flows.",
            commonErrors: ["Static assumed.", "No flux link."],
          },
        },
        {
          id: "eph11-u4-magnetism-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A transformer has 500 primary turns, 50 secondary turns. Input 240V. Calculate output voltage.",
          response: {
            type: "numeric",
            parts: [{ label: "Vs (V)", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement: "Vs = Vp×Ns/Np.",
              },
            ],
            steps: [
              { reasoning: "Vs = 240×50/500 = 24 V.", marks: 4, markCode: "M" },
            ],
            finalAnswer: "24 V",
            commonErrors: ["Ratio inverted — step-up instead."],
          },
        },
        {
          id: "eph11-u4-magnetism-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating transformer turns ratio.",
          parts: [
            { label: "a", prompt: "Describe apparatus and setup.", marks: 3 },
            {
              label: "b",
              prompt: "Describe procedure and measurements.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How to verify transformer equation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer experiment",
                statement: "V ∝ N — verify Vp/Vs = Np/Ns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Transformer, AC supply, voltmeters on primary/secondary.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Variable turns or different tap points.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Measure Vp and Vs for different turn ratios.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Repeat, calculate ratios.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Plot Vp/Vs vs Np/Ns — should be straight line gradient 1.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) transformer+AC+voltmeters (b) vary turns measure V (c) plot ratios — gradient 1",
            commonErrors: ["DC used.", "No graph."],
          },
        },
      ],
    },
    {
      id: "eph11-u4-nuclear",
      title: "Nuclear Physics Practical Skills",
      skill:
        "Investigate radioactive decay, nuclear reactions and stellar properties.",
      lesson: {
        sections: [
          {
            heading: "Radioactivity practicals",
            body: "**Geiger counter**: measure count rate — background subtract, distance test (inverse square), shielding test (paper/alpha, thin metal/beta, thick lead/gamma). **Half-life**: safe simulation with dice — roll 6s removed each 'generation', count remaining.\n\n**Nuclear reactions**: fission (U-235 + neutron → smaller nuclei + neutrons + energy), fusion (H isotopes → He + energy). **Safety**: never handle sources directly, lead shielding, minimize time.",
          },
          {
            heading: "Astrophysics observations",
            body: "**Stellar properties**: apparent magnitude (brighter = lower number), absolute magnitude (intrinsic brightness), distance (parallax for nearby stars). **Hertzsprung-Russell diagram**: plot luminosity vs temperature — main sequence, giants, white dwarfs.\n\n**Experiments**: use star charts/planispheres, measure star positions, compare apparent vs absolute brightness. **Light pollution**: affects observations — darker sites better.",
          },
        ],
        keyFormulas: [
          {
            name: "Inverse square",
            statement: "Intensity ∝ 1/d² — radiation spreads out.",
          },
          { name: "Half-life", statement: "A = A₀(½)^(t/T½)." },
        ],
        workedExample: {
          problem: "Count rate 800 cpm at 10cm, 200 cpm at 20cm. Relationship?",
          solution: "Doubling distance → quarter count — inverse square law.",
        },
      },
      questions: [
        {
          id: "eph11-u4-nuclear-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What stops alpha radiation but not beta or gamma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Glass" },
              { id: "c", text: "Paper or skin" },
              { id: "d", text: "Thick lead" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radiation shielding",
                statement:
                  "Alpha stopped by paper/skin; beta needs thin metal; gamma needs thick lead.",
              },
            ],
            steps: [
              {
                reasoning: "Paper/skin stops alpha.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Paper or skin",
            commonErrors: ["Lead confused — that's gamma."],
          },
        },
        {
          id: "eph11-u4-nuclear-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does count rate decrease with distance from a radioactive source?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse square",
                statement:
                  "Radiation spreads over larger area — intensity ∝ 1/d².",
              },
            ],
            steps: [
              {
                reasoning: "Particles spread out with distance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same number over larger area = lower density.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Intensity ∝ 1/d² — doubling distance quarters it.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Inverse square law — radiation spreads over larger area.",
            commonErrors: ["Linear assumed.", "No spread link."],
          },
        },
        {
          id: "eph11-u4-nuclear-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Half-life simulation: 600 dice, remove 6s each round. How many 'generations' to get ~47 dice?",
          response: {
            type: "numeric",
            parts: [{ label: "Generations", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-life simulation",
                statement: "Each generation halves — like radioactive decay.",
              },
            ],
            steps: [
              {
                reasoning: "600→300→150→75→37.5 ≈ 47 after ~4 generations.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "~4 generations",
            commonErrors: ["Linear removal assumed."],
          },
        },
        {
          id: "eph11-u4-nuclear-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Comparing apparent magnitudes of two stars.",
          parts: [
            { label: "a", prompt: "What is apparent magnitude?", marks: 2 },
            {
              label: "b",
              prompt: "Star A magnitude 1, Star B magnitude 3. Which brighter?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Why might the fainter-looking star actually be more luminous?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stellar magnitude",
                statement:
                  "Lower magnitude = brighter; distance affects apparent brightness.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Apparent brightness as seen from Earth.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Star A (magnitude 1) brighter — lower = brighter.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Star B may be closer but intrinsically fainter.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Or Star A farther but more luminous.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) apparent brightness (b) Star A (c) distance affects apparent magnitude",
            commonErrors: ["Higher = brighter.", "No distance link."],
          },
        },
      ],
    },
  ],
};
