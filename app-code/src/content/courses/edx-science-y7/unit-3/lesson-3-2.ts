import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "esc7-u3-lesson-3-2",
  code: "3-2",
  title: "Energy, Sound and Light",
  goal: "I CAN describe energy transfers, sound waves and light properties.",
  standards: ["Edexcel KS3 Science — Physics"],
  vocabulary: [
    {
      term: "Energy",
      definition:
        "The capacity to do work — measured in joules (J); exists as kinetic, potential, heat, light, sound.",
    },
    {
      term: "Wave",
      definition:
        "A disturbance transferring energy without transferring matter.",
    },
    {
      term: "Amplitude",
      definition:
        "Maximum displacement of a wave from equilibrium — determines loudness/brightness.",
    },
    {
      term: "Frequency",
      definition:
        "Number of complete waves per second — measured in hertz (Hz); determines pitch.",
    },
  ],
  concepts: [
    {
      id: "esc7-u3-energy",
      title: "Energy Transfers and Sound",
      skill: "Describe energy stores, transfers and how sound waves work.",
      lesson: {
        sections: [
          {
            heading: "Energy stores and transfers",
            body: "**Stores**: kinetic (moving objects), gravitational potential (height), elastic (stretched), chemical (fuel/food), thermal (temperature). **Transfers**: mechanical work, heating, sound, light, electricity. Energy is never destroyed — only transferred or dissipated as heat.\n\n**Efficiency**: no device is 100% efficient — energy lost to heat/sound/friction. A torch converts chemical→electrical→light+heat. Energy can't be created/destroyed (conservation).",
          },
          {
            heading: "Sound waves",
            body: "Sound = **longitudinal waves** — particle vibrations parallel to wave direction, needing a medium (can't travel in vacuum). **Pitch** = frequency (high freq = high pitch); **loudness** = amplitude (large amplitude = loud); **quality** = waveform shape.\n\n**Echoes/reflection**: sound bounces off surfaces — used in sonar, ultrasound scanning. **Doppler effect**: moving source changes perceived frequency — ambulance siren sounds higher approaching, lower receding.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy conservation",
            statement: "Energy transfers between stores; total stays constant.",
          },
          {
            name: "Sound properties",
            statement: "Pitch=frequency, loudness=amplitude, needs medium.",
          },
        ],
        workedExample: {
          problem: "A ball falls from height. Describe energy transfers.",
          solution:
            "Gravitational potential → kinetic (as it falls) → thermal/sound on impact.",
        },
      },
      questions: [
        {
          id: "esc7-u3-energy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the SI unit of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pascal (Pa)" },
              { id: "b", text: "Joule (J)" },
              { id: "c", text: "Watt (W)" },
              { id: "d", text: "Newton (N)" },
            ],
            correctChoiceId: "b",
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
              {
                reasoning: "Energy measured in joules.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Joule (J)",
            commonErrors: ["Confusing with power/force."],
          },
        },
        {
          id: "esc7-u3-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't sound travel through a vacuum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound needs medium",
                statement:
                  "Sound = particle vibrations — no particles in vacuum = no transmission.",
              },
            ],
            steps: [
              {
                reasoning: "Sound requires particles to vibrate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Vacuum has no particles.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "No medium = no sound.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Sound is particle vibrations — vacuum has no particles to transmit them.",
            commonErrors: ["Sound travels anywhere view.", "No medium link."],
          },
        },
        {
          id: "esc7-u3-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how energy is conserved even when devices seem 'lose' energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement:
                  "Energy transforms between stores — never destroyed, only dissipated as heat.",
              },
            ],
            steps: [
              {
                reasoning: "Energy transforms between stores.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Lost' energy becomes heat/sound/friction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total energy remains constant.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Energy isn't lost — it transforms to less useful forms (heat, sound); total stays constant.",
            commonErrors: ["Energy destroyed view.", "No dissipation concept."],
          },
        },
        {
          id: "esc7-u3-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 0.5 kg ball is dropped from 20 m. (g = 10 N/kg)",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate gravitational potential energy at top (GPE = mgh).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate kinetic energy just before impact.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain what happens to energy after impact.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GPE = mgh; KE conservation",
                statement: "GPE converts to KE during fall; conserved total.",
              },
            ],
            steps: [
              {
                reasoning: "(a) GPE = 0.5 × 10 × 20 = 100 J.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct formula/application.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) KE = GPE = 100 J (conservation).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) All GPE converted to KE.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) KE → thermal/sound/deformation on impact.",
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
      id: "esc7-u3-light",
      title: "Light and Seeing",
      skill:
        "Describe how light travels, reflects, refracts and enables vision.",
      lesson: {
        sections: [
          {
            heading: "Light properties",
            body: "Light travels in **straight lines** at ~300,000 km/s — fastest known speed. Travels through **transparent** materials (glass, air); absorbed/scattered by opaque. **Sources**: luminous objects emit light (sun, fire, LED); non-luminous reflect it (moon, books).\n\n**Shadows**: formed when light blocked — umbra (full shadow) and penumbra (partial). Shadow size depends on light source distance/size. **Eclipses**: Moon blocks sun (solar), Earth blocks moonlight (lunar).",
          },
          {
            heading: "Reflection and refraction",
            body: "**Reflection**: light bounces off surfaces — angle of incidence = angle of reflection (law of reflection). Smooth surfaces → specular reflection (mirrors); rough → diffuse (we see objects).\n\n**Refraction**: light bends passing between media of different densities — straw appears bent in water. **Dispersion**: refraction splits white light into colours (rainbow, prism). **Vision**: light enters eye → cornea/lens focus → retina → optic nerve → brain. We see objects because light reflects off them into our eyes.",
          },
        ],
        keyFormulas: [
          {
            name: "Light speed",
            statement: "~300,000 km/s in vacuum; straight lines.",
          },
          {
            name: "Law of reflection",
            statement: "Angle of incidence = angle of reflection.",
          },
        ],
        workedExample: {
          problem: "Why does a straw look bent in a glass of water?",
          solution:
            "Light refracts (bends) passing from water to air — different speeds cause the apparent bend.",
        },
      },
      questions: [
        {
          id: "esc7-u3-light-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does light travel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In curves" },
              { id: "b", text: "In spirals" },
              { id: "c", text: "It doesn't travel" },
              { id: "d", text: "In straight lines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light travels straight",
                statement: "Light propagates in straight lines.",
              },
            ],
            steps: [
              {
                reasoning: "Light = rectilinear propagation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** In straight lines",
            commonErrors: ["Curved path view."],
          },
        },
        {
          id: "esc7-u3-light-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the law of reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of reflection",
                statement:
                  "Angle of incidence = angle of reflection; incident, reflected ray and normal all in same plane.",
              },
            ],
            steps: [
              { reasoning: "Angles equal stated.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Normal plane mentioned or implied.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correctly stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "Angle of incidence = angle of reflection (measured from normal).",
            commonErrors: [
              "Angles to surface not normal.",
              "Incomplete statement.",
            ],
          },
        },
        {
          id: "esc7-u3-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why we can see non-luminous objects like books.",
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
                reasoning: "Objects reflect ambient light.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reflected light enters eyes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Brain interprets as object.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Light reflects off objects → enters eyes → brain interprets — we see reflected light, not emitted.",
            commonErrors: [
              "Objects emit light view.",
              "No reflection mechanism.",
            ],
          },
        },
        {
          id: "esc7-u3-light-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Light travels from air into water at an angle.",
          parts: [
            {
              label: "a",
              prompt: "Describe what happens to the light's direction.",
              marks: 2,
            },
            { label: "b", prompt: "Name this phenomenon.", marks: 2 },
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
                  "Light bends entering denser medium — speed changes cause bending.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Light bends toward normal entering water.",
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
                reasoning: "(c) Light slows in water, speeds in air.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Different speeds at interface = bending.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Eye traces light straight → apparent bend.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) bends toward normal (b) refraction (c) speed change at interface → apparent bend",
            commonErrors: ["Bends away view.", "No speed explanation."],
          },
        },
      ],
    },
  ],
};
