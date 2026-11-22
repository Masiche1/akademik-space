import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "esc10-u3-lesson-3-2",
  code: "3-2",
  title: "Light and Electricity",
  goal: "I CAN describe light behaviour, electromagnetic waves and electric circuits in detail.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Physics"],
  vocabulary: [
    {
      term: "Reflection",
      definition:
        "Light bouncing off a surface — angle of incidence = angle of reflection.",
    },
    {
      term: "Refraction",
      definition:
        "Light bending when passing between media of different densities.",
    },
    {
      term: "Electromagnetic spectrum",
      definition:
        "Range of EM waves — radio, microwave, infrared, visible, UV, X-ray, gamma.",
    },
    {
      term: "Series circuit",
      definition: "Single path — same current everywhere, voltage shared.",
    },
  ],
  concepts: [
    {
      id: "esc10-u3-light",
      title: "Light and the Electromagnetic Spectrum",
      skill: "Describe reflection, refraction and EM wave properties and uses.",
      lesson: {
        sections: [
          {
            heading: "Light behaviour",
            body: "Light travels in straight lines at ~300,000 km/s. **Reflection**: angle of incidence = angle of reflection (from normal); smooth = specular, rough = diffuse. **Refraction**: bends entering different-density medium — toward normal going into denser, away coming out; explains bent straw in water. **Dispersion**: white light splits into colours (prism, rainbow).\n\n**Shadows**: umbra (full) and penumbra (partial) — size depends on source distance. **Vision**: light reflects off objects → enters eye → lens focuses → retina → brain.",
          },
          {
            heading: "Electromagnetic spectrum",
            body: "All EM waves travel at light speed in vacuum; differ only in **wavelength/frequency**. Order (long→short λ): radio, microwave, infrared, visible (red→violet), ultraviolet, X-ray, gamma. Higher frequency = more energy.\n\n**Uses**: radio/TV, microwaves (cooking/comms), infrared (remote controls, thermal imaging), visible (vision), UV (sterilisation, causes sunburn), X-rays (medical imaging), gamma (sterilisation, cancer treatment). All are transverse waves needing no medium.",
          },
        ],
        keyFormulas: [
          {
            name: "Law of reflection",
            statement:
              "Angle of incidence = angle of reflection (from normal).",
          },
          {
            name: "EM spectrum",
            statement:
              "Radio→microwave→IR→visible→UV→X-ray→gamma; freq increases.",
          },
        ],
        workedExample: {
          problem: "Why does a straw look bent in water?",
          solution:
            "Light refracts (bends) passing air→water; different speeds cause apparent displacement.",
        },
      },
      questions: [
        {
          id: "esc10-u3-light-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the law of reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of reflection",
                statement: "Angle of incidence = angle of reflection.",
              },
            ],
            steps: [
              { reasoning: "Angles equal stated.", marks: 1, markCode: "AO1" },
              { reasoning: "Measured from normal.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "Angle of incidence = angle of reflection, measured from the normal.",
            commonErrors: ["Angles to surface.", "Incomplete."],
          },
        },
        {
          id: "esc10-u3-light-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Arrange in order of increasing frequency: radio, visible, gamma, ultraviolet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "EM spectrum order",
                statement:
                  "Radio < microwave < IR < visible < UV < X-ray < gamma (frequency).",
              },
            ],
            steps: [
              { reasoning: "Correct order given.", marks: 2, markCode: "AO1" },
              {
                reasoning: "Frequency increases left to right.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Radio → visible → ultraviolet → gamma",
            commonErrors: ["Order wrong.", "Wavelength vs frequency confused."],
          },
        },
        {
          id: "esc10-u3-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why we see non-luminous objects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vision",
                statement:
                  "Light reflects off objects into eyes — we see reflected light.",
              },
            ],
            steps: [
              {
                reasoning: "Ambient light hits object.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Light reflects/diffuses to eye.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Brain interprets image.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Light reflects off objects → enters eyes → brain interprets — we see reflected, not emitted, light.",
            commonErrors: ["Objects emit light view.", "No reflection."],
          },
        },
        {
          id: "esc10-u3-light-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Light passes from air into glass at an angle.",
          parts: [
            { label: "a", prompt: "Describe the direction change.", marks: 2 },
            { label: "b", prompt: "Name the phenomenon.", marks: 2 },
            {
              label: "c",
              prompt: "Explain why the straw looks bent.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refraction",
                statement:
                  "Light bends at media boundary — speed change causes bending.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Bends toward normal entering glass.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Refraction.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Light slows in glass/water.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Speed change at interface = bend.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Eye traces straight line → apparent bend.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) toward normal (b) refraction (c) speed change → apparent bend",
            commonErrors: ["Bends away view.", "No speed explanation."],
          },
        },
      ],
    },
    {
      id: "esc10-u3-electricity",
      title: "Electric Circuits and Safety",
      skill:
        "Analyse series/parallel circuits, calculate power and apply safety measures.",
      lesson: {
        sections: [
          {
            heading: "Circuit analysis",
            body: "**Series**: single path — same current everywhere, voltage shared between components, resistance adds (R_total = R₁ + R₂ + ...). **Parallel**: multiple paths — same voltage across each, current splits, total resistance less than smallest.\n\n**Ohm's law**: V = IR. **Power** = VI (watts); energy = power × time (kWh billed). Ammeter in series, voltmeter in parallel.",
          },
          {
            heading: "Electrical safety",
            body: "**Hazards**: shock (current through body), fires (overheating), burns. **Protection**: fuse (melts on overload), circuit breaker (trips), earth wire (diverts fault current), insulation, RCD (trips on earth fault).\n\n**Mains**: ~230V AC UK. Never overload sockets, keep electrics dry, check cables for damage. Double-insulated appliances don't need earth wire. Higher voltage = more dangerous — even small currents can kill.",
          },
        ],
        keyFormulas: [
          {
            name: "Series vs parallel",
            statement:
              "Series: same I, V shared, R adds. Parallel: same V, I splits, R decreases.",
          },
          { name: "Power", statement: "P = VI; energy = P × t." },
        ],
        workedExample: {
          problem:
            "Two 10Ω resistors in series vs parallel across 12V. Compare total resistance.",
          solution: "Series: 20Ω; parallel: 5Ω.",
        },
      },
      questions: [
        {
          id: "esc10-u3-electricity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How is an ammeter connected in a circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In series" },
              { id: "b", text: "Directly to battery only" },
              { id: "c", text: "In parallel" },
              { id: "d", text: "Either way" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Ammeter",
                statement: "In series — measures current through circuit.",
              },
            ],
            steps: [
              { reasoning: "Ammeter in series.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** In series",
            commonErrors: ["Parallel confused with voltmeter."],
          },
        },
        {
          id: "esc10-u3-electricity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two 10Ω resistors in series across 12V. Calculate total resistance and current.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total R (Ω)", answer: 20 },
              { label: "Current (A)", answer: 0.6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series resistance + Ohm's law",
                statement: "R_total = sum; I = V/R.",
              },
            ],
            steps: [
              { reasoning: "R = 10 + 10 = 20 Ω.", marks: 1, markCode: "M" },
              { reasoning: "I = 12 ÷ 20 = 0.6 A.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "20 Ω, 0.6 A",
            commonErrors: ["Parallel formula used.", "Current miscalculated."],
          },
        },
        {
          id: "esc10-u3-electricity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the earth wire important for appliance safety?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Earth wire",
                statement:
                  "Diverts fault current to ground — prevents user becoming path.",
              },
            ],
            steps: [
              {
                reasoning: "Provides low-resistance path to earth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fault current flows through wire not person.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fuse/breaker trips — circuit cut.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Earth wire diverts fault current safely — user doesn't become conductor; fuse then cuts power.",
            commonErrors: ["Only 'it's there' view.", "No fault mechanism."],
          },
        },
        {
          id: "esc10-u3-electricity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 2kW heater and 3kW kettle both plug into one socket via extension lead.",
          parts: [
            { label: "a", prompt: "Calculate total power draw.", marks: 2 },
            { label: "b", prompt: "Explain the fire risk.", marks: 3 },
            { label: "c", prompt: "Suggest two safety measures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Overload",
                statement: "Combined load exceeds rating → overheating → fire.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Total = 5 kW.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Exceeds typical 13A/~3kW socket rating.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Excessive current → wires overheat.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Fire risk from insulation damage.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) Two valid measures.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning:
                  "(c) e.g. separate sockets, check rating, don't overload.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 5kW (b) overload→overheating→fire (c) separate sockets/check rating",
            commonErrors: ["No rating context.", "No fire mechanism."],
          },
        },
      ],
    },
  ],
};
