import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "s8-u6-lesson-6-2",
  code: "6-2",
  title: "Waves and Sound",
  goal: "I CAN describe wave properties, explain how sound waves work, and calculate wave speed, frequency and wavelength.",
  standards: [
    "MS-PS4-1",
    "MS-PS4-2",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Wave",
      definition:
        "A disturbance that transfers energy without transferring matter.",
    },
    {
      term: "Frequency",
      definition: "Number of waves passing a point per second; measured in Hz.",
    },
    {
      term: "Wavelength",
      definition: "Distance between two consecutive crests or troughs.",
    },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium." },
    {
      term: "Wave speed",
      definition: "How fast the wave travels: $v = f\\lambda$.",
    },
    {
      term: "Sound wave",
      definition: "A longitudinal wave produced by vibrating objects.",
    },
    {
      term: "Electromagnetic wave",
      definition: "A transverse wave that can travel through vacuum.",
    },
  ],
  concepts: [
    {
      id: "s8-u6-wave-properties",
      title: "Wave properties",
      skill:
        "Calculate wave speed, frequency and wavelength and describe wave characteristics.",
      lesson: {
        sections: [
          {
            heading: "Wave equation",
            body: "The fundamental wave equation:\n\n$$v = f\\lambda$$\n\nwhere $v$ = wave speed, $f$ = frequency, $\\lambda$ = wavelength.\n\n- **Frequency** ($f$): waves per second (Hz). Higher frequency = more waves.\n- **Wavelength** ($\\lambda$): distance per wave (m). Longer wavelength = stretched waves.\n- **Amplitude**: height of wave; determines energy.",
          },
          {
            heading: "Types of waves",
            body: "- **Transverse waves**: particles move perpendicular to wave direction (e.g., light, rope waves).\n- **Longitudinal waves**: particles move parallel to wave direction (e.g., sound, compressions).",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          { name: "Frequency", statement: "Waves per second (Hz)." },
          { name: "Wavelength", statement: "Distance between crests (m)." },
          {
            name: "Amplitude",
            statement: "Maximum displacement; determines energy.",
          },
        ],
        workedExample: {
          problem:
            "A wave has frequency 5 Hz and wavelength 2 m. Calculate wave speed.",
          solution: "$v = f\\lambda = 5 \\times 2 = 10$ m/s.",
        },
      },
      questions: [
        {
          id: "s8-u6-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the wave equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = f + \\lambda$" },
              { id: "b", text: "$v = f\\lambda$" },
              { id: "c", text: "$v = f/\\lambda$" },
              { id: "d", text: "$v = \\lambda/f$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "$v = f\\lambda$",
              },
            ],
            steps: [
              {
                reasoning: "Wave speed = frequency × wavelength.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $v = f\\lambda$.",
            commonErrors: ["Using wrong operation."],
          },
        },
        {
          id: "s8-u6-waves-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A wave has frequency 10 Hz and wavelength 0.5 m. Calculate wave speed.",
          response: {
            type: "numeric",
            parts: [{ label: "Wave speed", answer: 5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "$v = f\\lambda$",
              },
            ],
            steps: [
              {
                reasoning: "$v = 10 \\times 0.5$.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 5 m/s.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check units: Hz × m = m/s.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "5 m/s",
            commonErrors: ["Unit conversion errors."],
          },
        },
        {
          id: "s8-u6-waves-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "If wave speed stays constant and frequency doubles, what happens to wavelength?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement:
                  "$v = f\\lambda$; if $v$ constant, $f \\propto 1/\\lambda$",
              },
            ],
            steps: [
              {
                reasoning: "$v = f\\lambda$ → $\\lambda = v/f$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If $v$ constant and $f$ doubles, $\\lambda$ halves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frequency and wavelength are inversely proportional.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: 10 Hz, 2 m → 20 Hz, 1 m (same speed).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Wavelength halves — inverse relationship.",
            commonErrors: ["Saying wavelength doubles."],
          },
        },
        {
          id: "s8-u6-waves-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sound travels at 340 m/s in air. A tuning fork produces 440 Hz.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength.", marks: 3 },
            {
              label: "b",
              prompt:
                "If frequency doubles to 880 Hz, what's the new wavelength?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Does wave speed change? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "$v = f\\lambda$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\lambda = v/f = 340/440 \\approx 0.77$ m.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\lambda = 340/880 \\approx 0.39$ m (halved).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "No — wave speed depends on medium (air), not frequency.",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) ~0.77 m (b) ~0.39 m (c) No, speed depends on medium.",
            commonErrors: ["Thinking speed changes with frequency."],
          },
        },
      ],
    },
    {
      id: "s8-u6-sound-waves",
      title: "Sound Waves",
      skill: "Explain how sound is produced, transmitted, and perceived.",
      lesson: {
        sections: [
          {
            heading: "Production and transmission",
            body: "Sound is produced by **vibrating objects**. These vibrations create **compressions** (high pressure) and **rarefactions** (low pressure) in the medium (air, water, solids).\n\n- Sound needs a **medium** to travel — it cannot travel through vacuum.\n- Sound travels fastest in solids, slower in liquids, slowest in gases.",
          },
          {
            heading: "Properties of sound",
            body: "- **Pitch**: determined by frequency (high frequency = high pitch).\n- **Loudness**: determined by amplitude (larger amplitude = louder).\n- **Speed**: depends on medium properties (temperature, density).\n- **Echo**: sound reflecting off surfaces.",
          },
        ],
        keyFormulas: [
          {
            name: "Sound production",
            statement:
              "Vibrating objects create compressions and rarefactions.",
          },
          {
            name: "Medium required",
            statement: "Sound needs medium; cannot travel through vacuum.",
          },
          {
            name: "Pitch vs loudness",
            statement: "Pitch = frequency; loudness = amplitude.",
          },
        ],
        workedExample: {
          problem: "Why can't you hear sound in space?",
          solution:
            "Space is a vacuum — no medium for sound waves to travel through.",
        },
      },
      questions: [
        {
          id: "s8-u6-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What produces sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Vibrating objects" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Magnetism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sound production",
                statement: "Vibrating objects produce sound.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sound is produced by vibrating objects creating pressure waves.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Vibrating objects.",
            commonErrors: ["Choosing (a): light doesn't produce sound."],
          },
        },
        {
          id: "s8-u6-sound-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't sound travel through a vacuum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sound medium",
                statement: "Sound needs particles to vibrate.",
              },
            ],
            steps: [
              {
                reasoning: "Sound waves are mechanical — they need a medium.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "In vacuum, no particles to compress and rarefy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore, sound cannot travel through vacuum.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "No medium particles to vibrate — sound needs a medium.",
            commonErrors: ["Saying sound travels through vacuum."],
          },
        },
        {
          id: "s8-u6-sound-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between pitch and loudness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sound properties",
                statement: "Pitch = frequency; loudness = amplitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pitch is determined by frequency — higher frequency = higher pitch.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Loudness is determined by amplitude — larger amplitude = louder.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "A high-pitched sound can be quiet or loud.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Frequency and amplitude are independent properties.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Pitch = frequency; loudness = amplitude.",
            commonErrors: ["Confusing pitch with loudness."],
          },
        },
        {
          id: "s8-u6-sound-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student measures echo time to find distance to a wall.",
          parts: [
            {
              label: "a",
              prompt:
                "If echo returns in 0.5 s and sound speed is 340 m/s, how far is the wall?",
              marks: 3,
            },
            { label: "b", prompt: "Why must we divide by 2?", marks: 2 },
            {
              label: "c",
              prompt: "What assumption is made about sound speed?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Echo ranging",
                statement: "$d = \\frac{v \\times t}{2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$d = (340 \\times 0.5)/2 = 85$ m.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Sound travels to wall and back — total distance is 2× the distance to wall.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Assumes sound speed is constant (340 m/s) and no wind/temperature effects.",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 85 m (b) Round trip = 2× distance (c) Constant speed assumption.",
            commonErrors: ["Forgetting to divide by 2."],
          },
        },
      ],
    },
    {
      id: "s8-u6-electromagnetic",
      title: "Electromagnetic Waves",
      skill:
        "Describe the electromagnetic spectrum and how different types of EM waves are used.",
      lesson: {
        sections: [
          {
            heading: "Electromagnetic spectrum",
            body: "Electromagnetic waves are transverse waves that can travel through vacuum at the speed of light ($c = 3 \\times 10^8$ m/s).\n\nThe spectrum from low to high frequency:\n\n- **Radio waves**: communication, broadcasting.\n- **Microwaves**: cooking, satellite communication.\n- **Infrared**: heat, remote controls, thermal imaging.\n- **Visible light**: vision, photography.\n- **Ultraviolet**: causes sunburn, used in sterilization.\n- **X-rays**: medical imaging.\n- **Gamma rays**: highest energy, used in cancer treatment.",
          },
          {
            heading: "Properties",
            body: "- All EM waves travel at same speed in vacuum.\n- Higher frequency = higher energy = shorter wavelength.\n- Lower frequency = lower energy = longer wavelength.\n- EM waves don't need a medium — they can travel through space.",
          },
        ],
        keyFormulas: [
          {
            name: "EM spectrum",
            statement:
              "Radio → microwave → infrared → visible → UV → X-ray → gamma.",
          },
          {
            name: "Speed of light",
            statement: "$c = 3 \\times 10^8$ m/s in vacuum.",
          },
          {
            name: "Frequency-energy",
            statement: "Higher frequency = higher energy = shorter wavelength.",
          },
        ],
        workedExample: {
          problem: "Which has higher energy: red light or blue light?",
          solution: "Blue light — higher frequency = higher energy.",
        },
      },
      questions: [
        {
          id: "s8-u6-em-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which EM wave has the highest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "Visible light" },
              { id: "c", text: "X-rays" },
              { id: "d", text: "Microwaves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM spectrum",
                statement: "X-rays have higher frequency than visible light.",
              },
            ],
            steps: [
              {
                reasoning:
                  "X-rays have higher frequency than visible light; gamma rays are highest.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** X-rays.",
            commonErrors: ["Choosing (a): radio has lowest frequency."],
          },
        },
        {
          id: "s8-u6-em-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three uses of different EM waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM wave uses",
                statement:
                  "Radio = communication; microwaves = cooking; X-rays = medical.",
              },
            ],
            steps: [
              {
                reasoning: "Radio waves: radio/TV communication.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Microwaves: cooking, satellite communication.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "X-rays: medical imaging; gamma rays: cancer treatment.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Radio = communication; microwaves = cooking; X-rays = medical.",
            commonErrors: ["Listing only one use."],
          },
        },
        {
          id: "s8-u6-em-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why EM waves can travel through space but sound cannot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM vs sound",
                statement:
                  "EM = transverse, no medium needed; sound = longitudinal, needs medium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "EM waves are electromagnetic fields that self-propagate.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "They don't need particles to vibrate.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Sound waves are mechanical — they need particles to compress and rarefy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Space is vacuum — no particles for sound, but EM waves travel freely.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "EM waves are self-propagating fields; sound needs particle medium.",
            commonErrors: ["Saying all waves need medium."],
          },
        },
        {
          id: "s8-u6-em-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare visible light and radio waves.",
          parts: [
            { label: "a", prompt: "Which has higher frequency?", marks: 2 },
            { label: "b", prompt: "Which has higher energy?", marks: 2 },
            { label: "c", prompt: "Which has longer wavelength?", marks: 2 },
            { label: "d", prompt: "Which can you see?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM spectrum",
                statement:
                  "Visible = higher frequency/energy, shorter wavelength than radio.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Visible light has higher frequency than radio waves.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Visible light has higher energy (higher frequency = higher energy).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Radio waves have longer wavelength.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Only visible light is visible to human eyes.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) Visible (b) Visible (c) Radio (d) Visible only.",
            commonErrors: ["Reversing frequency and wavelength relationship."],
          },
        },
      ],
    },
  ],
};
