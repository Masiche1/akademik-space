import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "esc11-u3-lesson-3-2",
  code: "3-2",
  title: "Light, Sound and Ultrasound",
  goal: "I CAN describe wave behaviour, sound properties and ultrasound applications.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Physics (Y11)"],
  vocabulary: [
    {
      term: "Ultrasound",
      definition: "Sound above 20,000 Hz — inaudible to humans.",
    },
    {
      term: "Resonance",
      definition: "Vibration at natural frequency — maximum amplitude.",
    },
    {
      term: "Echolocation",
      definition: "Using reflected ultrasound to locate objects.",
    },
    {
      term: "Doppler effect",
      definition: "Frequency change when source/observer moves.",
    },
  ],
  concepts: [
    {
      id: "esc11-u3-sound",
      title: "Sound Waves and Ultrasound",
      skill:
        "Describe sound properties, ultrasound uses and the Doppler effect.",
      lesson: {
        sections: [
          {
            heading: "Sound properties",
            body: "Sound = longitudinal wave — needs medium (no vacuum). **Pitch** = frequency (Hz); **loudness** = amplitude. Speed ~340 m/s in air (varies with medium/density). **Echoes** = reflected sound — sonar uses them underwater.\n\n**Resonance**: object vibrates at natural frequency → maximum amplitude (singing glass, bridge collapse — Tacoma Narrows). **Ultrasound** (>20 kHz): medical imaging (pregnancy scans — safe, non-ionising), lithotripsy (break kidney stones), cleaning delicate objects, flaw detection in metal, echolocation (bats, dolphins).",
          },
          {
            heading: "Doppler effect",
            body: "Source moving toward observer → waves compressed → higher frequency (higher pitch); moving away → stretched → lower frequency. Used in: speed cameras/radar guns (police), weather radar (Doppler detects rotation → tornadoes), astronomy (redshift — distant galaxies moving away → light shifted to red).\n\n**Light vs sound Doppler**: both show frequency shift but light shift reveals velocity — redshift/blueshift.",
          },
        ],
        keyFormulas: [
          {
            name: "Sound properties",
            statement: "Pitch=frequency, loudness=amplitude, needs medium.",
          },
          {
            name: "Doppler",
            statement: "Approaching → higher frequency; receding → lower.",
          },
        ],
        workedExample: {
          problem:
            "A bat emits ultrasound and hears echo after 0.02s. Distance to insect (v=340m/s)?",
          solution: "d = v×t/2 = 340×0.02/2 = 3.4 m.",
        },
      },
      questions: [
        {
          id: "esc11-u3-sound-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What determines the loudness of a sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Wavelength" },
              { id: "c", text: "Amplitude" },
              { id: "d", text: "Frequency" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Loudness",
                statement: "Loudness = amplitude.",
              },
            ],
            steps: [
              {
                reasoning: "Amplitude determines loudness.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Amplitude",
            commonErrors: ["Frequency confused — that's pitch."],
          },
        },
        {
          id: "esc11-u3-sound-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't sound travel through space?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Medium required",
                statement:
                  "Sound needs particles to vibrate — space is vacuum.",
              },
            ],
            steps: [
              {
                reasoning: "Sound = particle vibrations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Space has almost no particles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No medium → no sound transmission.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Sound needs a medium for particle vibrations; space is vacuum — nothing to carry the wave.",
            commonErrors: [
              "Light confused — light travels in space.",
              "No medium link.",
            ],
          },
        },
        {
          id: "esc11-u3-sound-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the Doppler effect and give one application.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler",
                statement:
                  "Moving source → frequency shift; approaching=up, receding=down.",
              },
            ],
            steps: [
              {
                reasoning: "Frequency changes with relative motion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Approaching → higher pitch; receding → lower.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Application: radar speed guns/astronomy redshift.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent description.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Moving source compresses/stretches waves → frequency shift; used in speed measurement/astronomy.",
            commonErrors: ["Only pitch change described.", "No application."],
          },
        },
        {
          id: "esc11-u3-sound-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ultrasound is used for prenatal scans.",
          parts: [
            {
              label: "a",
              prompt: "Why is ultrasound used instead of X-rays?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How does ultrasound imaging work?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Name two other ultrasound applications.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ultrasound",
                statement:
                  "Non-ionising, safe for fetus; echoes create images.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Ultrasound non-ionising — no radiation damage.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) X-rays ionising — harmful to developing fetus.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Pulses sent into body → reflect off tissues.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Echoes detected → computer builds image.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Different densities → different echo patterns.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Lithotripsy, cleaning, flaw detection, echolocation.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) non-ionising/safe (b) echoes→image (c) lithotripsy/cleaning/detection",
            commonErrors: ["X-rays safer view.", "No echo mechanism."],
          },
        },
      ],
    },
    {
      id: "esc11-u3-light",
      title: "Light and Optics",
      skill: "Describe reflection, refraction, lenses and light phenomena.",
      lesson: {
        sections: [
          {
            heading: "Reflection and refraction",
            body: "**Reflection**: angle of incidence = angle of reflection (from normal). Specular (smooth) vs diffuse (rough). **Refraction**: bending at media boundary — toward normal entering denser medium, away exiting. Caused by speed change.\n\n**Total internal reflection**: light going dense→less dense at angle > critical angle → all reflected. Applications: optical fibres (endoscopes, internet), diamond sparkle, mirage. **Dispersion**: white light splits into spectrum (prism, rainbow) — different wavelengths bend differently.",
          },
          {
            heading: "Lenses and images",
            body: "**Convex (converging)**: thick middle — focuses parallel rays to focal point; forms real/inverted or virtual/upright images depending on object distance. **Concave (diverging)**: thin middle — spreads rays; always virtual/upright/magnified.\n\n**Uses**: camera (convex forms real inverted image on sensor), magnifying glass (convex close object → virtual magnified), eye (cornea+lens focus on retina), spectacles (correct long/short sight). **Light phenomena**: diffraction (spreading through gaps), interference (waves add/cancel — Young's double slit proves wave nature), polarization (filtering wave direction).",
          },
        ],
        keyFormulas: [
          {
            name: "Refraction",
            statement: "Bends at boundary — toward normal entering denser.",
          },
          {
            name: "Critical angle",
            statement: "Dense→less dense; beyond → total internal reflection.",
          },
        ],
        workedExample: {
          problem: "Why do optical fibres work?",
          solution:
            "Light hits core-cladding boundary at >critical angle → total internal reflection → travels far with little loss.",
        },
      },
      questions: [
        {
          id: "esc11-u3-light-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes light to bend when entering water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorption" },
              { id: "b", text: "Refraction" },
              { id: "c", text: "Reflection" },
              { id: "d", text: "Diffraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refraction",
                statement: "Bending at media boundary due to speed change.",
              },
            ],
            steps: [
              {
                reasoning: "Refraction causes bending.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Refraction",
            commonErrors: ["Reflection confused."],
          },
        },
        {
          id: "esc11-u3-light-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain total internal reflection and name an application.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TIR",
                statement:
                  "Dense→less dense at >critical angle → all light reflected.",
              },
            ],
            steps: [
              {
                reasoning: "Light goes dense to less dense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Angle exceeds critical angle → all reflected.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Application: optical fibres, diamonds, mirages.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Light at >critical angle in denser medium totally reflects — used in fibres/diamonds.",
            commonErrors: ["Partial reflection assumed.", "No application."],
          },
        },
        {
          id: "esc11-u3-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare convex and concave lenses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lenses",
                statement: "Convex converges; concave diverges.",
              },
            ],
            steps: [
              {
                reasoning: "Convex: thick middle, converging.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Concave: thin middle, diverging.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Convex forms real/inverted or virtual/upright.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Concave always virtual/upright/magnified.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Convex converges (camera, magnifier); concave diverges (always virtual upright image).",
            commonErrors: ["Effects swapped.", "No image type."],
          },
        },
        {
          id: "esc11-u3-light-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "White light passes through a prism and splits into colours.",
          parts: [
            { label: "a", prompt: "Name the phenomenon.", marks: 2 },
            {
              label: "b",
              prompt: "Explain why different colours bend differently.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Describe two real-world examples.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dispersion",
                statement:
                  "Different wavelengths refract differently → spectrum.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Dispersion.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Different wavelengths → different refraction angles.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Violet bends most; red least.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Two examples: rainbow, prism spectrum, CDs.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
              {
                reasoning: "(c) Valid real-world instances.",
                marks: 1,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) dispersion (b) wavelength-dependent refraction (c) rainbow/prism/CD",
            commonErrors: ["Reflection assumed.", "No wavelength link."],
          },
        },
      ],
    },
  ],
};
