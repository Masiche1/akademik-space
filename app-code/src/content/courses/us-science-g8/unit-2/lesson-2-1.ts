import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "s8-u2-lesson-2-1",
  code: "2-1",
  title: "Wave Properties",
  goal: "I CAN describe a wave using amplitude, wavelength and frequency, calculate wave speed with $v = f\\lambda$, and explain how mechanical waves such as sound travel through matter.",
  standards: ["MS-PS4-1", "MS-PS4-2", "SEP: Using Mathematics and Computational Thinking", "SEP: Developing and Using Models"],
  vocabulary: [
    { term: "Amplitude", definition: "The maximum displacement of a wave from its rest position. A larger amplitude means the wave carries more energy." },
    { term: "Wavelength", definition: "The distance from one point on a wave to the same point on the next wave, such as crest to crest. Symbol $\\lambda$." },
    { term: "Frequency", definition: "The number of complete waves that pass a point each second, measured in hertz (Hz)." },
    { term: "Mechanical wave", definition: "A wave that needs a medium (matter) to travel through, such as sound or water waves." },
    { term: "Medium", definition: "The material that a mechanical wave travels through." },
    { term: "Pitch", definition: "How high or low a sound seems. A higher frequency gives a higher pitch." },
  ],
  concepts: [
    {
      id: "s8-u2-wave-properties",
      title: "Amplitude, wavelength, frequency and wave speed",
      skill: "Describe wave properties and calculate wave speed using $v = f\\lambda$.",
      lesson: {
        sections: [
          {
            heading: "Describing a wave",
            body: "A wave is a disturbance that transfers **energy** from place to place without moving matter along with it. A floating cork on a water wave bobs up and down but stays in about the same place.\n\n- **Amplitude** is the greatest distance the medium moves from its rest position. A bigger amplitude means more energy.\n- **Wavelength** ($\\lambda$) is the distance between two crests (or two troughs) in a row. It is measured in meters.\n- **Frequency** ($f$) is the number of complete waves passing a point each second. It is measured in hertz (Hz). $1\\text{ Hz}$ is one wave per second.\n\nThe height of a wave from trough to crest is **twice** the amplitude.",
          },
          {
            heading: "Wave speed",
            body: "Wave speed is how far a wave crest travels each second. It depends on the frequency and the wavelength:\n\n$$v = f\\lambda$$\n\nwhere $v$ is in $\\text{m/s}$, $f$ is in $\\text{Hz}$ and $\\lambda$ is in $\\text{m}$. In one medium the speed is fixed, so if the frequency goes up the wavelength must go down.\n\nTo find frequency use $f = \\dfrac{v}{\\lambda}$. To find wavelength use $\\lambda = \\dfrac{v}{f}$. Always check that your units match before substituting.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$" },
          { name: "Frequency", statement: "$f = \\dfrac{v}{\\lambda}$ (in Hz)" },
          { name: "Wavelength", statement: "$\\lambda = \\dfrac{v}{f}$ (in m)" },
        ],
        workedExample: {
          problem: "A wave on a lake has a wavelength of $2.0\\text{ m}$ and a frequency of $0.5\\text{ Hz}$. Calculate its speed.",
          solution: "Use $v = f\\lambda$. Substitute: $v = 0.5 \\times 2.0 = 1.0\\text{ m/s}$. The wave moves $1.0\\text{ m}$ every second.",
        },
      },
      questions: [
        {
          id: "s8-u2-wave-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the **wavelength** of a wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The maximum distance the medium moves from its rest position" },
              { id: "b", text: "The number of waves that pass a point each second" },
              { id: "c", text: "The distance a wave travels each second" },
              { id: "d", text: "The distance from one crest to the next crest" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Wavelength", statement: "Wavelength is the distance between the same point on two neighboring waves, such as crest to crest." },
            ],
            steps: [
              { reasoning: "Wavelength is a length measured along the direction of travel, from one crest to the next.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The distance from one crest to the next crest",
            commonErrors: ["Choosing (a), which is frequency.", "Choosing (c), which is amplitude.", "Choosing (d), which describes wave speed."],
            examinerNote: "B1 for crest to crest distance.",
          },
        },
        {
          id: "s8-u2-wave-properties-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave on a rope has a frequency of $5\\text{ Hz}$ and a wavelength of $3\\text{ m}$.\n\nCalculate the speed of the wave.",
          response: { type: "numeric", parts: [{ label: "Wave speed", answer: 15, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave speed", statement: "$v = f\\lambda$" },
            ],
            steps: [
              { reasoning: "Substitute frequency and wavelength into the wave speed equation.", working: "v = f\\lambda = 5 \\times 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "v = 15\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\text{ m/s}$",
            commonErrors: ["Dividing frequency by wavelength to get 1.67.", "Adding the two numbers."],
            examinerNote: "M1 for 5 x 3. A1 for 15 with the unit m/s.",
          },
        },
        {
          id: "s8-u2-wave-properties-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Water waves travel across a pool at a speed of $2.4\\text{ m/s}$. The distance between neighboring crests is $0.6\\text{ m}$.\n\nCalculate the frequency of the waves.",
          response: { type: "numeric", parts: [{ label: "Frequency", answer: 4, unit: "Hz" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave speed", statement: "$v = f\\lambda$, so $f = \\dfrac{v}{\\lambda}$" },
              { kind: "definition", name: "Wavelength", statement: "The distance between neighboring crests is one wavelength." },
            ],
            steps: [
              { reasoning: "The crest-to-crest distance is the wavelength. Rearrange $v = f\\lambda$ to make frequency the subject.", working: "f = \\frac{v}{\\lambda}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "f = \\frac{2.4}{0.6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "f = 4\\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\text{ Hz}$",
            commonErrors: ["Multiplying 2.4 by 0.6 to get 1.44.", "Dividing wavelength by speed, giving 0.25."],
            examinerNote: "M1 for rearrangement. M1 for 2.4 / 0.6. A1 for 4 Hz. Full marks for the correct answer with the unit.",
          },
        },
        {
          id: "s8-u2-wave-properties-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student shakes one end of a long rope up and down. She counts 8 complete waves passing a marker in 4 seconds. The distance between neighboring crests on the rope is $1.5\\text{ m}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the waves.", marks: 2 },
            { label: "b", prompt: "Calculate the speed of the waves on the rope.", marks: 2 },
            { label: "c", prompt: "The student now shakes the rope at $4\\text{ Hz}$. The wave speed on the rope does not change. Calculate the new wavelength.", marks: 2 },
            { label: "d", prompt: "A ribbon is tied to the middle of the rope. Describe how the ribbon moves as the waves pass, and explain what this shows about what a wave transfers.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frequency", statement: "Frequency is the number of waves per second: $f = \\dfrac{\\text{number of waves}}{\\text{time}}$." },
              { kind: "formula", name: "Wave speed", statement: "$v = f\\lambda$" },
              { kind: "principle", name: "Waves transfer energy", statement: "A wave transfers energy from place to place without transferring matter." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the number of waves by the time taken.", working: "f = \\frac{8}{4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "f = 2\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute the frequency from (a) and the wavelength.", working: "v = f\\lambda = 2 \\times 1.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "v = 3\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rearrange for wavelength and substitute, using the speed from (b).", working: "\\lambda = \\frac{v}{f} = \\frac{3}{4}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "\\lambda = 0.75\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The ribbon moves up and down (side to side) about a fixed position and does not travel along the rope.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So the wave transfers energy along the rope, not matter.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $2\\text{ Hz}$ (b) $3\\text{ m/s}$ (c) $0.75\\text{ m}$ (d) The ribbon moves up and down on the spot; waves transfer energy, not matter.",
            commonErrors: ["In (a) dividing time by number of waves, giving 0.5.", "In (c) keeping the wavelength at 1.5 m; a higher frequency at the same speed means a shorter wavelength.", "In (d) saying the ribbon is carried along the rope."],
            examinerNote: "(b) Allow ecf from (a). (c) Allow ecf from (b). (d) Allow 'the ribbon stays in the same place overall' oe.",
          },
        },
      ],
    },
    {
      id: "s8-u2-mechanical-waves-sound",
      title: "Mechanical waves and sound",
      skill: "Explain how sound travels through different media and relate pitch and loudness to wave properties.",
      lesson: {
        sections: [
          {
            heading: "Mechanical waves need a medium",
            body: "A **mechanical wave** is passed from particle to particle in a **medium**. Sound is a mechanical wave. When an object vibrates, it pushes on nearby particles, which push on the particles next to them. This creates regions where the particles are squeezed together (compressions) and regions where they are spread out (rarefactions). The particles vibrate back and forth in the direction the wave travels, so sound is a **longitudinal** wave.\n\nBecause sound needs particles, it **cannot travel through a vacuum** such as outer space.",
          },
          {
            heading: "Speed of sound in different materials",
            body: "Sound is usually fastest in solids, slower in liquids and slowest in gases, because particles in a solid are closer together and pass the vibration on more quickly. In air at room temperature sound travels at about $343\\text{ m/s}$.\n\nThe time for a sound to travel is $t = \\dfrac{d}{v}$, and the distance is $d = vt$.",
          },
          {
            heading: "Pitch and loudness",
            body: "- **Pitch** depends on frequency. A higher frequency makes a higher pitch.\n- **Loudness** depends on amplitude. A larger amplitude carries more energy and sounds louder.\n\nPitch and loudness are separate: you can play a loud low note or a quiet high note. Humans hear frequencies from about $20\\text{ Hz}$ to $20{,}000\\text{ Hz}$.",
          },
        ],
        keyFormulas: [
          { name: "Distance traveled", statement: "$d = vt$" },
          { name: "Pitch", statement: "Higher frequency means higher pitch" },
          { name: "Loudness", statement: "Larger amplitude means louder sound" },
        ],
        workedExample: {
          problem: "A hiker shouts toward a cliff and hears the echo $3.0\\text{ s}$ later. Sound travels at $340\\text{ m/s}$ in air. How far away is the cliff?",
          solution: "In $3.0\\text{ s}$ the sound travels to the cliff and back: $d = vt = 340 \\times 3.0 = 1020\\text{ m}$. This is the round trip, so the cliff is $1020 \\div 2 = 510\\text{ m}$ away.",
        },
      },
      questions: [
        {
          id: "s8-u2-mechanical-waves-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound **cannot** travel through which of these?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Steel" },
              { id: "b", text: "Air" },
              { id: "c", text: "Water" },
              { id: "d", text: "A vacuum" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mechanical waves need a medium", statement: "Sound is passed from particle to particle, so it needs matter to travel through." },
            ],
            steps: [
              { reasoning: "A vacuum contains no particles, so there is nothing to pass the vibration along.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A vacuum",
            commonErrors: ["Thinking sound cannot travel through solids such as steel; it travels fastest in solids."],
            examinerNote: "B1 for vacuum.",
          },
        },
        {
          id: "s8-u2-mechanical-waves-sound-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A flash of lightning is seen. The thunder is heard $4\\text{ s}$ later. Sound travels at $340\\text{ m/s}$ in air. Ignore the time light takes to travel.\n\nCalculate the distance from the observer to the lightning.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 1360, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d = vt$" },
            ],
            steps: [
              { reasoning: "Multiply the speed of sound by the time.", working: "d = vt = 340 \\times 4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "d = 1360\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1360\\text{ m}$",
            commonErrors: ["Dividing 340 by 4 to get 85.", "Halving the answer as if it were an echo; the sound travels one way only."],
            examinerNote: "M1 for 340 x 4. A1 for 1360 m. Allow 1.36 km.",
          },
        },
        {
          id: "s8-u2-mechanical-waves-sound-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A speaker plays two notes. Note Y has a higher frequency and a larger amplitude than note X. Both travel through the same air.\n\nDescribe how note Y sounds different from note X, and explain how the wavelength of Y compares with X.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pitch and frequency", statement: "Higher frequency gives a higher pitch." },
              { kind: "principle", name: "Loudness and amplitude", statement: "Larger amplitude gives a louder sound." },
              { kind: "formula", name: "Wave speed", statement: "$v = f\\lambda$; in one medium $v$ is constant, so higher $f$ means shorter $\\lambda$." },
            ],
            steps: [
              { reasoning: "Higher frequency means Y has a higher pitch.", marks: 1, markCode: "B" },
              { reasoning: "Larger amplitude means Y is louder.", marks: 1, markCode: "B" },
              { reasoning: "The speed in the same air is the same, so with a higher frequency the wavelength of Y is shorter.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Y has a higher pitch and is louder; its wavelength is shorter because the speed in air is constant.",
            commonErrors: ["Saying higher frequency makes a louder sound.", "Saying larger amplitude changes the pitch.", "Saying the wavelength is longer."],
            examinerNote: "B1 higher pitch. B1 louder. R1 shorter wavelength linked to constant speed (v = f x wavelength) oe.",
          },
        },
        {
          id: "s8-u2-mechanical-waves-sound-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The table gives the speed of sound in three materials.\n\n| Material | Speed of sound (m/s) |\n|---|---|\n| Air | 343 |\n| Water | 1480 |\n| Steel | 5960 |",
          parts: [
            { label: "a", prompt: "Identify the material in which sound travels fastest.", marks: 1 },
            { label: "b", prompt: "A sound pulse travels $2980\\text{ m}$ along a steel rail. Calculate the time it takes.", marks: 2 },
            { label: "c", prompt: "A note of frequency $686\\text{ Hz}$ travels through air. Calculate its wavelength.", marks: 2 },
            { label: "d", prompt: "Explain, using particles, why sound travels faster in steel than in air.", marks: 2 },
            { label: "e", prompt: "An astronaut outside a spacecraft sees an object explode nearby but hears nothing. Explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$t = \\dfrac{d}{v}$" },
              { kind: "formula", name: "Wave speed", statement: "$\\lambda = \\dfrac{v}{f}$" },
              { kind: "principle", name: "Mechanical waves need a medium", statement: "Sound travels by particles passing on vibrations, so it cannot travel through a vacuum." },
            ],
            steps: [
              { part: "a", reasoning: "Steel has the highest speed in the table, $5960\\text{ m/s}$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rearrange speed equation and substitute.", working: "t = \\frac{d}{v} = \\frac{2980}{5960}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "t = 0.5\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the speed in air from the table.", working: "\\lambda = \\frac{v}{f} = \\frac{343}{686}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "\\lambda = 0.5\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The particles in steel are much closer together than in air.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So each particle passes the vibration to its neighbor more quickly.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Space is a vacuum with (almost) no particles.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Sound needs a medium to pass vibrations along, so it cannot travel; light does not need a medium so the astronaut can see it.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Steel (b) $0.5\\text{ s}$ (c) $0.5\\text{ m}$ (d) Closer particles pass vibrations on faster (e) Space is a vacuum, so sound cannot travel.",
            commonErrors: ["In (b) multiplying distance by speed.", "In (d) saying particles in solids vibrate faster because they are hotter.", "In (e) saying the explosion makes no sound."],
            examinerNote: "(b) Allow ecf for a misread speed. (c) Must use the air value. (d) Allow 'particles are packed more tightly' oe.",
          },
        },
      ],
    },
  ],
};
