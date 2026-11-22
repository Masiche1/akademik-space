import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "esc10-u3-lesson-3-1",
  code: "3-1",
  title: "Forces, Motion and Energy",
  goal: "I CAN apply Newton's laws, calculate motion quantities and describe energy transfers.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Physics"],
  vocabulary: [
    { term: "Force", definition: "Push or pull measured in newtons (N)." },
    { term: "Speed", definition: "Distance travelled per unit time — m/s." },
    { term: "Acceleration", definition: "Rate of change of velocity — m/s²." },
    {
      term: "Kinetic energy",
      definition: "Energy of movement — increases with mass and speed squared.",
    },
  ],
  concepts: [
    {
      id: "esc10-u3-motion",
      title: "Motion and Newton's Laws",
      skill: "Calculate speed/acceleration and apply Newton's three laws.",
      lesson: {
        sections: [
          {
            heading: "Motion quantities",
            body: "**Speed** = distance ÷ time. **Velocity** = speed in direction. **Acceleration** = change in velocity ÷ time = (final − initial) ÷ time. Distance-time graph gradient = speed; velocity-time gradient = acceleration, area = distance.\n\n**Newton's laws**: 1st — object stays at rest/constant velocity unless unbalanced force. 2nd — F = ma. 3rd — every action has equal opposite reaction (forces on different objects).",
          },
          {
            heading: "Friction and energy",
            body: "**Friction** opposes motion — between surfaces, air resistance. Useful (walking, braking) and wasteful (heat, wear). **Weight** = mass × gravity (N); **mass** = kg (constant).\n\n**Energy stores**: kinetic (moving), gravitational potential (height), elastic, chemical, thermal. **Transfers**: work, heating, sound, light. Energy conserved — transforms between stores, never destroyed.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "speed = distance ÷ time." },
          {
            name: "Newton's 2nd",
            statement: "F = ma — force = mass × acceleration.",
          },
        ],
        workedExample: {
          problem: "Car accelerates 0→20 m/s in 5 s. Calculate acceleration.",
          solution: "(20 − 0) ÷ 5 = 4 m/s².",
        },
      },
      questions: [
        {
          id: "esc10-u3-motion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car travels 100 m in 20 s. Speed?",
          response: {
            type: "numeric",
            parts: [{ label: "Speed (m/s)", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "distance ÷ time." },
            ],
            steps: [{ reasoning: "100 ÷ 20 = 5.", marks: 2, markCode: "M" }],
            finalAnswer: "5 m/s",
            commonErrors: ["Inverted division."],
          },
        },
        {
          id: "esc10-u3-motion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State Newton's third law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's 3rd",
                statement: "Every action has equal and opposite reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Action-reaction pair stated.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Equal magnitude.", marks: 1, markCode: "AO1" },
              { reasoning: "Opposite direction.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "Every action has an equal and opposite reaction force.",
            commonErrors: ["Forces on same object view.", "Incomplete."],
          },
        },
        {
          id: "esc10-u3-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a crumple zone reduces injury in a car crash.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impact and force",
                statement:
                  "Increasing stopping time reduces force on occupants (F = ma).",
              },
            ],
            steps: [
              {
                reasoning: "Crumple zone extends stopping time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Longer time = smaller deceleration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Smaller force on passengers = less injury.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Links to F = ma or impulse.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Crumple zone lengthens impact time → reduces deceleration/force on occupants → less injury.",
            commonErrors: ["Weaker car view.", "No time-force link."],
          },
        },
        {
          id: "esc10-u3-motion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 1000 kg car accelerates at 2 m/s².",
          parts: [
            { label: "a", prompt: "Calculate the force required.", marks: 3 },
            {
              label: "b",
              prompt:
                "If mass doubles to 2000 kg at same force, find new acceleration.",
              marks: 3,
            },
            { label: "c", prompt: "Explain using F = ma.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "F = ma",
                statement: "Force = mass × acceleration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) F = 1000 × 2 = 2000 N.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct calculation.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) a = F/m = 2000/2000 = 1 m/s².",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Acceleration halves.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(c) Same F, double m → half a.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) 2000 N (b) 1 m/s² (c) inverse mass-acceleration",
            commonErrors: [
              "Wrong rearrangement.",
              "Direct proportion assumed.",
            ],
          },
        },
      ],
    },
    {
      id: "esc10-u3-energy",
      title: "Energy Transfers and Efficiency",
      skill: "Describe energy stores, transfers, efficiency and conservation.",
      lesson: {
        sections: [
          {
            heading: "Energy stores and transfers",
            body: "**Stores**: kinetic (moving), gravitational potential (height), elastic (stretched), chemical (fuel/food), thermal (temperature). **Transfers**: mechanical work, heating, sound, light, electricity. Energy never destroyed — transformed or dissipated as heat.\n\n**Efficiency** = useful output ÷ total input × 100%. No device is 100% — energy lost to heat/sound/friction. LED bulb ~90% efficient vs filament ~10%.",
          },
          {
            heading: "Energy calculations",
            body: "**Kinetic energy** = ½mv². **Gravitational PE** = mgh. **Power** = energy ÷ time (watts). **Work done** = force × distance.\n\nDuring falls, GPE → KE; during impact, KE → thermal/sound/deformation. Pendulum: GPE↔KE continuously, small losses to friction/air.",
          },
        ],
        keyFormulas: [
          { name: "KE", statement: "KE = ½mv² — mass × velocity squared." },
          { name: "GPE", statement: "GPE = mgh — mass × gravity × height." },
        ],
        workedExample: {
          problem: "A 2 kg ball at 10 m height (g=10). Calculate GPE.",
          solution: "2 × 10 × 10 = 200 J.",
        },
      },
      questions: [
        {
          id: "esc10-u3-energy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the SI unit of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pascal (Pa)" },
              { id: "b", text: "Newton (N)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Watt (W)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Joule",
                statement: "SI unit of energy.",
              },
            ],
            steps: [
              { reasoning: "Energy = joules.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Joule (J)",
            commonErrors: ["Confusing units."],
          },
        },
        {
          id: "esc10-u3-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A device uses 100 J input, produces 40 J useful output. Calculate efficiency.",
          response: {
            type: "numeric",
            parts: [{ label: "Efficiency (%)", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "useful output ÷ input × 100%.",
              },
            ],
            steps: [
              { reasoning: "40 ÷ 100 × 100 = 40%.", marks: 3, markCode: "M" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Forgot ×100.", "Inverted ratio."],
          },
        },
        {
          id: "esc10-u3-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why energy is never 'lost' despite inefficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement:
                  "Energy transforms to less useful forms (heat) — total conserved.",
              },
            ],
            steps: [
              {
                reasoning: "Transforms between stores.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Lost' = dissipated as heat/sound.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total energy constant.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Energy transforms to less useful forms (mainly heat) — never destroyed, total conserved.",
            commonErrors: ["Energy destroyed view.", "No dissipation."],
          },
        },
        {
          id: "esc10-u3-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 0.5 kg ball dropped from 20 m (g=10 N/kg).",
          parts: [
            { label: "a", prompt: "Calculate GPE at top.", marks: 3 },
            {
              label: "b",
              prompt: "Calculate KE just before impact.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Describe energy transfer on impact.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement: "GPE→KE during fall; conserved total.",
              },
            ],
            steps: [
              {
                reasoning: "(a) GPE = 0.5 × 10 × 20 = 100 J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct formula.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) KE = GPE = 100 J (conservation).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) All GPE → KE.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(c) KE → thermal/sound/deformation.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer: "(a) 100 J (b) 100 J (c) KE→heat/sound/deformation",
            commonErrors: ["KE > GPE view.", "Energy lost claim."],
          },
        },
      ],
    },
    {
      id: "esc10-u3-waves-electricity",
      title: "Waves, Sound and Electricity",
      skill: "Describe wave properties, sound and basic electric circuits.",
      lesson: {
        sections: [
          {
            heading: "Waves and sound",
            body: "**Waves** transfer energy without matter. **Transverse**: vibrations perpendicular (light, water ripples). **Longitudinal**: parallel (sound, ultrasound). Properties: wavelength, frequency (Hz), amplitude, speed.\n\n**Sound**: longitudinal, needs medium (no vacuum), pitch = frequency, loudness = amplitude. **Light**: transverse, travels ~300,000 km/s, reflects (angle in = angle out), refracts (bends between media), forms shadows.",
          },
          {
            heading: "Electricity basics",
            body: "**Circuit**: closed loop needed. **Series**: one path — same current, resistance adds. **Parallel**: multiple paths — same voltage, resistance decreases. **Ohm's law**: V = IR.\n\n**Safety**: fuse (melts on overload), circuit breaker, earth wire (fault protection), insulation. Mains ~230V AC — dangerous; RCDs for outdoor use.",
          },
        ],
        keyFormulas: [
          {
            name: "Wave properties",
            statement:
              "Frequency=pitch, amplitude=loudness/brightness, speed=wavelength×frequency.",
          },
          {
            name: "Ohm's law",
            statement: "V = IR — voltage = current × resistance.",
          },
        ],
        workedExample: {
          problem: "A 12V battery drives 0.5A through resistor. Find R.",
          solution: "R = V/I = 12/0.5 = 24 Ω.",
        },
      },
      questions: [
        {
          id: "esc10-u3-waves-electricity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What determines the pitch of a sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Wavelength only" },
              { id: "c", text: "Frequency" },
              { id: "d", text: "Amplitude" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pitch",
                statement:
                  "Pitch determined by frequency — high freq = high pitch.",
              },
            ],
            steps: [
              { reasoning: "Pitch = frequency.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Frequency",
            commonErrors: ["Amplitude confused — loudness."],
          },
        },
        {
          id: "esc10-u3-waves-electricity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 6V battery drives 0.25A through a resistor. Calculate resistance.",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance (Ω)", answer: 24 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "R = V/I." },
            ],
            steps: [
              { reasoning: "R = 6 ÷ 0.25 = 24 Ω.", marks: 3, markCode: "M" },
            ],
            finalAnswer: "24 Ω",
            commonErrors: ["Wrong rearrangement.", "Units wrong."],
          },
        },
        {
          id: "esc10-u3-waves-electricity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't sound travel through a vacuum but light can?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Medium requirement",
                statement:
                  "Sound = particle vibrations needs medium; light = electromagnetic waves needs none.",
              },
            ],
            steps: [
              {
                reasoning: "Sound requires particles to vibrate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Vacuum has no particles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Light is EM wave — travels through vacuum.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sound needs a medium for particle vibrations; light is electromagnetic radiation needing none.",
            commonErrors: [
              "Both can't travel view.",
              "No wave-type distinction.",
            ],
          },
        },
        {
          id: "esc10-u3-waves-electricity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two bulbs connect to a 6V battery.",
          parts: [
            {
              label: "a",
              prompt: "Describe series vs parallel connection differences.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "If one bulb blows in each circuit, predict what happens.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circuit analysis",
                statement: "Series=one path; parallel=independent paths.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Series: same current, one path.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Parallel: same voltage, multiple paths.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Series resistance adds; parallel decreases.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Series voltage shares; parallel equal.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Series: whole circuit breaks — both go out.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Parallel: other bulb unaffected.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) series vs parallel properties (b) series breaks all, parallel independent",
            commonErrors: ["Properties swapped.", "Blown bulb effect wrong."],
          },
        },
      ],
    },
  ],
};
