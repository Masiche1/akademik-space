import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "esc11-u3-lesson-3-1",
  code: "3-1",
  title: "Electricity: Power and Domestic Circuits",
  goal: "I CAN calculate electrical power/energy and explain domestic circuit design.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Physics (Y11)"],
  vocabulary: [
    { term: "Power", definition: "Rate of energy transfer — P = VI (watts)." },
    {
      term: "Kilowatt-hour",
      definition: "Unit of electrical energy — 1 kWh = 1000 W × 1 hour.",
    },
    {
      term: "Fuse rating",
      definition: "Current at which fuse melts — protects wiring.",
    },
    {
      term: "Live/neutral/earth",
      definition: "Mains wires: live (230V), neutral (return), earth (safety).",
    },
  ],
  concepts: [
    {
      id: "esc11-u3-power",
      title: "Electrical Power and Energy",
      skill: "Calculate power, energy consumption and appliance costs.",
      lesson: {
        sections: [
          {
            heading: "Power calculations",
            body: "**Power** P = VI (watts = volts × amps). Also P = I²R and P = V²/R (Ohm's law rearranged). **Energy** = P × t (joules = watts × seconds). **Kilowatt-hour** = kW × hours — electricity billed in kWh (1 kWh = 3.6×10⁶ J).\n\n**Cost** = kWh used × price per kWh. Example: 2 kW heater × 3 h = 6 kWh; at £0.30/kWh = £1.80. **Efficiency** = useful output ÷ total input × 100% — LED vs filament bulbs, motors.",
          },
          {
            heading: "Domestic circuits",
            body: "**Mains supply**: live wire carries 230V AC, neutral returns, earth = safety. **Fuse/circuit breaker**: cuts power on overload (fuse melts, breaker trips). **Earth wire**: connects metal case to ground — fault current flows to earth, trips breaker.\n\n**Parallel sockets**: each appliance gets full 230V independently. **Wiring colours** (UK): brown=live, blue=neutral, green/yellow=earth. **Safety**: RCD trips on earth leakage; don't overload sockets; check cable insulation.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "P = VI; also P = I²R = V²/R." },
          { name: "Energy", statement: "E = P × t; 1 kWh = 3.6×10⁶ J." },
        ],
        workedExample: {
          problem: "A 100W bulb runs 5 hours. Energy in kWh?",
          solution: "100W = 0.1kW × 5h = 0.5 kWh.",
        },
      },
      questions: [
        {
          id: "esc11-u3-power-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the formula for electrical power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P = V + I" },
              { id: "b", text: "P = IR" },
              { id: "c", text: "P = VI" },
              { id: "d", text: "P = V ÷ I" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "P = VI." },
            ],
            steps: [{ reasoning: "P = VI.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** P = VI",
            commonErrors: ["Ohm's law confused."],
          },
        },
        {
          id: "esc11-u3-power-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 230V appliance draws 2A. Calculate power.",
          response: {
            type: "numeric",
            parts: [{ label: "Power (W)", answer: 460 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power",
                statement: "P = VI = 230 × 2 = 460 W.",
              },
            ],
            steps: [{ reasoning: "460 W.", marks: 3, markCode: "M" }],
            finalAnswer: "460 W",
            commonErrors: ["Wrong formula.", "Units wrong."],
          },
        },
        {
          id: "esc11-u3-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why appliances are connected in parallel in homes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel sockets",
                statement: "Each appliance gets full voltage independently.",
              },
            ],
            steps: [
              {
                reasoning: "Full 230V across each appliance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Independent — one off doesn't affect others.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Series would share voltage — appliances wouldn't work.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Parallel gives full voltage to each appliance independently — series would share voltage and break them.",
            commonErrors: ["Series assumed.", "No voltage link."],
          },
        },
        {
          id: "esc11-u3-power-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An electric kettle (2.2kW) boils water for 3 minutes daily.",
          parts: [
            {
              label: "a",
              prompt: "Calculate energy used per day in kWh.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate monthly cost at £0.30/kWh (30 days).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest two ways to reduce cost.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy & cost",
                statement: "kWh = kW × h; cost = kWh × price.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2.2kW × (3/60)h = 0.11 kWh/day.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct conversion minutes→hours.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Monthly = 0.11 × 30 = 3.3 kWh × £0.30 = £0.99.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "(c) Two valid suggestions: boil less, efficient appliance, off-peak.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning: "(c) Reasonable cost-saving measures.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 0.11 kWh (b) £0.99 (c) boil only needed amount/use efficient model",
            commonErrors: ["Minutes not converted.", "No cost calculation."],
          },
        },
      ],
    },
    {
      id: "esc11-u3-magnetism",
      title: "Magnetism and Electromagnetism",
      skill:
        "Describe magnetic fields, electromagnets and electromagnetic induction.",
      lesson: {
        sections: [
          {
            heading: "Magnets and fields",
            body: "**Magnets**: north and south poles — like repel, unlike attract. **Magnetic field**: region around magnet — field lines go N→S externally; closer lines = stronger field. Earth is a magnet — compass needle aligns N-S.\n\n**Electromagnets**: current through wire → magnetic field. Solenoid (coil) + iron core = strong electromagnet — strength increases with more turns, more current, iron core. Used in: cranes (lift scrap metal), relays, doorbells, MRI scanners, maglev trains.",
          },
          {
            heading: "Electromagnetic induction",
            body: "**Faraday's law**: changing magnetic field near conductor → induces voltage (EMF). Need: relative motion between magnet and coil OR changing current. **AC generator**: rotating coil in magnetic field → alternating current — power stations use this. **Transformer**: changes voltage via electromagnetic induction — step-up (power transmission, less current loss) and step-down (safe domestic use).\n\n**DC motor**: current in magnetic field → force on wire → rotation (split-ring commutator reverses current each half-turn). Applications: fans, drills, electric vehicles.",
          },
        ],
        keyFormulas: [
          {
            name: "Electromagnet strength",
            statement: "More turns, more current, iron core = stronger field.",
          },
          {
            name: "Induction",
            statement: "Changing magnetic field → induced voltage (Faraday).",
          },
        ],
        workedExample: {
          problem: "Why do power lines use high voltage?",
          solution:
            "High V → low current → less energy lost as heat in cables (P = I²R).",
        },
      },
      questions: [
        {
          id: "esc11-u3-magnetism-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when like magnetic poles are brought together?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cancel" },
              { id: "b", text: "They repel" },
              { id: "c", text: "They attract" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Magnetic poles",
                statement: "Like repel, unlike attract.",
              },
            ],
            steps: [
              { reasoning: "Like poles repel.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** They repel",
            commonErrors: ["Attract assumed."],
          },
        },
        {
          id: "esc11-u3-magnetism-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three ways to increase electromagnet strength.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electromagnet",
                statement:
                  "Turns ↑, current ↑, iron core all strengthen field.",
              },
            ],
            steps: [
              { reasoning: "More coil turns.", marks: 1, markCode: "AO1" },
              { reasoning: "Higher current.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Iron core inside coil.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "More turns, more current, iron core — any two/three of these.",
            commonErrors: ["Only one factor.", "Thicker wire only."],
          },
        },
        {
          id: "esc11-u3-magnetism-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a transformer changes voltage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer",
                statement:
                  "Electromagnetic induction between primary/secondary coils.",
              },
            ],
            steps: [
              {
                reasoning: "AC in primary coil → changing field.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Field induces voltage in secondary coil.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Turns ratio determines voltage ratio.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Step-up: more secondary turns → higher V.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Changing current in primary induces voltage in secondary — turns ratio sets voltage change.",
            commonErrors: ["DC assumed.", "No induction link."],
          },
        },
        {
          id: "esc11-u3-magnetism-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A step-up transformer has 200 primary turns, 8000 secondary turns. Input 230V.",
          parts: [
            { label: "a", prompt: "Calculate output voltage.", marks: 3 },
            {
              label: "b",
              prompt: "Explain why high voltage is used for transmission.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Name one safety feature of transformers.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer ratio",
                statement: "V_out/V_in = N_out/N_in.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Ratio = 8000/200 = 40.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) V_out = 230 × 40 = 9200 V.",
                marks: 2,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) High V → low current → less I²R heat loss.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) More efficient transmission over long distances.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Insulated casing/fuse/thermal cutoff.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 9200V (b) high V→low I→less heat loss (c) insulation/fuse/overheat protection",
            commonErrors: ["Ratio inverted.", "No efficiency link."],
          },
        },
      ],
    },
    {
      id: "esc11-u3-nuclear",
      title: "Nuclear Physics and Space",
      skill: "Describe fission, fusion, radiation uses and basic astronomy.",
      lesson: {
        sections: [
          {
            heading: "Nuclear fission and fusion",
            body: "**Fission**: heavy nucleus (U-235) splits when hit by neutron → lighter nuclei + more neutrons + huge energy. Chain reaction if enough neutrons hit other nuclei — controlled in reactors (control rods absorb neutrons), uncontrolled in bombs.\n\n**Fusion**: light nuclei combine → heavier + energy — powers stars, needs extreme temp/pressure (hydrogen → helium in Sun). **Uses**: nuclear power stations (fission → heat → steam → turbines), nuclear weapons, medical isotopes, smoke detectors.\n\n**Radiation safety**: shielding (lead/concrete), distance (inverse square law), limited exposure time. Ionising radiation damages DNA → cancer/mutation.",
          },
          {
            heading: "Astronomy basics",
            body: "**Solar system**: Sun (star — fusion reactor) + 8 planets (Mercury→Neptune) + moons/asteroids/comets. Terrestrial (rocky — Mercury, Venus, Earth, Mars) vs gas giants (Jupiter, Saturn, Uranus, Neptune).\n\n**Orbits**: planets orbit Sun in ellipses — gravity provides centripetal force. **Seasons**: axial tilt (23.5°) → varying sunlight angles. **Moon phases**: sunlight on Moon seen from Earth changes — new→crescent→full→gibbous cycle ~29.5 days. **Eclipses**: solar (Moon blocks Sun), lunar (Earth shadows Moon). **Telescopes**: refracting (lenses) vs reflecting (mirrors) — see distant objects.",
          },
        ],
        keyFormulas: [
          {
            name: "Fission vs fusion",
            statement:
              "Fission: heavy splits (reactors); fusion: light combines (stars).",
          },
          {
            name: "Gravity & orbits",
            statement: "Gravity = centripetal force keeping planets in orbit.",
          },
        ],
        workedExample: {
          problem: "Why does the Moon have phases?",
          solution:
            "We see different portions of sunlit half as Moon orbits Earth.",
        },
      },
      questions: [
        {
          id: "esc11-u3-nuclear-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What powers the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity alone" },
              { id: "b", text: "Chemical reactions" },
              { id: "c", text: "Fission" },
              { id: "d", text: "Fusion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solar energy",
                statement: "Fusion — hydrogen nuclei combine to helium.",
              },
            ],
            steps: [
              {
                reasoning: "Sun powered by fusion.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Fusion",
            commonErrors: ["Fission confused — that's reactors."],
          },
        },
        {
          id: "esc11-u3-nuclear-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the role of control rods in a nuclear reactor?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control rods",
                statement: "Absorb neutrons — control fission rate.",
              },
            ],
            steps: [
              { reasoning: "Absorb neutrons.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Slow/stop chain reaction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Raised = less absorption = more power.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Absorb neutrons to control fission rate — raised for more power, lowered for safety.",
            commonErrors: ["Coolant confused.", "No neutron link."],
          },
        },
        {
          id: "esc11-u3-nuclear-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fusion is hard to achieve on Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fusion conditions",
                statement:
                  "Needs extreme temperature/pressure to overcome repulsion.",
              },
            ],
            steps: [
              {
                reasoning: "Nuclei positively charged — repel.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Need huge energy to force them together.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sun's gravity provides conditions naturally.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Earth can't replicate those conditions yet.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Positive nuclei repel — need extreme temp/pressure (like Sun's core) to fuse; can't sustain on Earth yet.",
            commonErrors: [
              "Easy process assumed.",
              "No repulsion explanation.",
            ],
          },
        },
        {
          id: "esc11-u3-nuclear-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Moon orbits Earth; Earth orbits the Sun.",
          parts: [
            {
              label: "a",
              prompt: "What force keeps planets in orbit?",
              marks: 2,
            },
            { label: "b", prompt: "Explain why we see Moon phases.", marks: 3 },
            {
              label: "c",
              prompt:
                "Describe the difference between solar and lunar eclipses.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbits & eclipses",
                statement:
                  "Gravity = centripetal; phases = sunlight angle; eclipses = alignment.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Gravitational attraction to Sun.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Moon reflects sunlight — we see lit portion.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Angle changes as Moon orbits → phases.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Full moon = fully lit face toward Earth.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Solar: Moon blocks Sun (Moon between).",
                marks: 1,
                markCode: "AO1",
                part: "c",
              },
              {
                reasoning: "(c) Lunar: Earth shadows Moon (Earth between).",
                marks: 1,
                markCode: "AO1",
                part: "c",
              },
              {
                reasoning:
                  "(c) Different alignments produce different shadows.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) gravity (b) sunlight angle changes (c) solar=Moon blocks Sun, lunar=Earth shadows Moon",
            commonErrors: ["Phases = Earth's shadow.", "Eclipses confused."],
          },
        },
      ],
    },
  ],
};
