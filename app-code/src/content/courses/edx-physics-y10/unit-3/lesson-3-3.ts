import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eph10-u3-lesson-3-3",
  code: "3-3",
  title: "Sound Waves and Oscilloscope Traces",
  goal: "I CAN describe how sound travels, calculate distances using echoes, and read frequency, period and amplitude from an oscilloscope trace.",
  standards: ["4PH1 4.11", "4PH1 4.12", "4PH1 4.13", "4PH1 4.14", "4PH1 4.15"],
  vocabulary: [
    { term: "Compression", definition: "A region in a sound wave where the particles are pushed closer together, so the pressure is higher." },
    { term: "Rarefaction", definition: "A region in a sound wave where the particles are spread further apart, so the pressure is lower." },
    { term: "Echo", definition: "A sound heard after it has been reflected from a surface." },
    { term: "Ultrasound", definition: "Sound with a frequency above $20\\,000\\text{ Hz}$, higher than the human hearing range." },
    { term: "Period, $T$", definition: "The time taken for one complete wave to pass a point. $T = \\frac{1}{f}$, measured in seconds." },
    { term: "Oscilloscope", definition: "An instrument that displays the voltage from a microphone or signal source against time as a trace on a screen." },
    { term: "Timebase", definition: "The setting on an oscilloscope that gives the time represented by each horizontal division." },
  ],
  concepts: [
    {
      id: "eph10-u3-sound-echoes",
      title: "Sound waves and echoes",
      skill: "Describe sound as a longitudinal wave, state the hearing range, and calculate distances from echoes using $\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$.",
      lesson: {
        sections: [
          {
            heading: "How sound travels",
            body: "Sound is a **longitudinal** wave made by vibrating objects. The vibrations pass from particle to particle as alternating **compressions** and **rarefactions**, so sound needs a **medium** and cannot travel through a vacuum.\n\nSound travels fastest in solids, slower in liquids and slowest in gases because particles are closer together in solids and pass vibrations on more quickly. In air at room temperature, the speed of sound is about $330\\text{ m/s}$ (use $340\\text{ m/s}$ only if told).\n\n- **Pitch** depends on frequency: higher frequency, higher pitch.\n- **Loudness** depends on amplitude: larger amplitude, louder sound.",
          },
          {
            heading: "Hearing range and ultrasound",
            body: "A healthy young person can hear frequencies from about $20\\text{ Hz}$ to $20\\,000\\text{ Hz}$. Sound above $20\\,000\\text{ Hz}$ is **ultrasound**. Uses include scanning an unborn baby, cleaning delicate objects, and detecting cracks in metal. Ultrasound is partially reflected at boundaries between different materials, and the time taken for the echo to return shows how deep the boundary is.",
          },
          {
            heading: "Echoes and distance",
            body: "An echo is sound reflected from a surface. The sound travels to the surface **and back**, so the distance travelled is **twice** the distance to the surface:\n\n$$\\text{speed} = \\frac{\\text{distance}}{\\text{time}} \\quad\\Rightarrow\\quad 2d = vt$$\n\nSonar uses the same idea to find the depth of the sea or the position of a shoal of fish. Remember to use the speed of sound in the medium involved: about $1500\\text{ m/s}$ in sea water.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$v = \\frac{d}{t}$" },
          { name: "Echo distance", statement: "$d = \\frac{vt}{2}$" },
          { name: "Hearing range", statement: "about $20\\text{ Hz}$ to $20\\,000\\text{ Hz}$" },
        ],
        workedExample: {
          problem: "A person shouts and hears an echo from a cliff $1.2\\text{ s}$ later. The speed of sound is $330\\text{ m/s}$. How far away is the cliff?",
          solution: "Total distance $= vt = 330 \\times 1.2 = 396\\text{ m}$. This is there and back, so the cliff is $\\frac{396}{2} = 198\\text{ m}$ away.",
        },
      },
      questions: [
        {
          id: "eph10-u3-sound-echoes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about sound is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound travels as a transverse wave through a vacuum." },
              { id: "b", text: "Sound travels faster in air than in steel." },
              { id: "c", text: "Sound is a longitudinal wave and needs a medium to travel through." },
              { id: "d", text: "Sound travels at $3.0 \\times 10^8\\text{ m/s}$." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sound waves", statement: "Sound is a longitudinal wave that needs a medium; it travels fastest in solids." },
            ],
            steps: [
              { reasoning: "Sound is longitudinal and cannot pass through a vacuum. It is faster in steel than in air, and about $330\\text{ m/s}$ in air, not the speed of light.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Choosing (d), confusing sound with light.", "Thinking that sound is faster in air because air is 'lighter'."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u3-sound-echoes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A boat sends a pulse of sound down to the sea bed. The echo returns after $0.40\\text{ s}$. The speed of sound in sea water is $1500\\text{ m/s}$. Calculate the depth of the sea.",
          response: {
            type: "numeric",
            parts: [{ label: "Depth", answer: 300, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$v = \\frac{d}{t}$, so distance $= vt$" },
              { kind: "principle", name: "Echo", statement: "The pulse travels to the sea bed and back, so the depth is half the total distance." },
            ],
            steps: [
              { reasoning: "Find the total distance travelled by the pulse.", working: "d = vt = 1500 \\times 0.40 = 600\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Halve it, because the pulse goes down and back.", working: "\\text{depth} = \\frac{600}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "\\text{depth} = 300\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300\\text{ m}$",
            commonErrors: ["Forgetting to halve, giving $600\\text{ m}$."],
            examinerNote: "Award 2 marks for 600 m only. Allow ecf.",
          },
        },
        {
          id: "eph10-u3-sound-echoes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student stands $85\\text{ m}$ from a large wall and claps once. The speed of sound in air is $340\\text{ m/s}$. Calculate the time between the clap and the echo, and state how this time would change if the student stood twice as far from the wall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$t = \\frac{d}{v}$ where $d$ is the total distance travelled." },
            ],
            steps: [
              { reasoning: "The sound travels to the wall and back, so the total distance is $2 \\times 85$.", working: "d = 170\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $t = \\frac{d}{v}$.", working: "t = \\frac{170}{340}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "t = 0.50\\text{ s}", marks: 1, markCode: "A" },
              { reasoning: "The total distance doubles at the same speed, so the time doubles (to $1.0\\text{ s}$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$0.50\\text{ s}$; the time doubles to $1.0\\text{ s}$",
            commonErrors: ["Using $85\\text{ m}$ as the total distance, giving $0.25\\text{ s}$."],
            examinerNote: "Allow ecf for the final mark from a wrong time.",
          },
        },
        {
          id: "eph10-u3-sound-echoes-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student measures the speed of sound in air. She stands $100\\text{ m}$ from a tall wall, claps, and starts a stopwatch when she claps. She stops it when she hears the echo. She repeats the measurement five times. Times (s): 0.58, 0.60, 0.59, 0.80, 0.61.",
          parts: [
            { label: "a", prompt: "Identify the anomalous result.", marks: 1 },
            { label: "b", prompt: "Calculate the mean time, ignoring the anomalous result.", marks: 2 },
            { label: "c", prompt: "Calculate the speed of sound from the mean time. Give your answer to 2 significant figures.", marks: 3 },
            { label: "d", prompt: "Suggest why the student repeated the measurement.", marks: 1 },
            { label: "e", prompt: "Suggest two reasons why the value from this method is not very accurate, and one improvement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean $= \\frac{\\text{sum of values}}{\\text{number of values}}$" },
              { kind: "formula", name: "Speed", statement: "$v = \\frac{d}{t}$ with $d$ the total distance there and back" },
            ],
            steps: [
              { part: "a", reasoning: "$0.80\\text{ s}$ is far from the other four values.", working: "0.80\\text{ s}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the four values and divide by 4.", working: "\\frac{0.58 + 0.60 + 0.59 + 0.61}{4} = \\frac{2.38}{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.595\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The sound travels to the wall and back, so the total distance is $200\\text{ m}$.", working: "d = 2 \\times 100 = 200\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute.", working: "v = \\frac{200}{0.595}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 2 s.f.: $336.1$ rounds to $340$.", working: "v = 340\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Repeating allows an anomalous result to be spotted and a mean to be found, which improves reliability.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Reaction time in starting and stopping the stopwatch is a large fraction of the short time measured.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Another reason: the echo is hard to judge precisely, or the clap lasts a short but finite time.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Improvement: stand further from the wall to give a longer time, or use a microphone and electronic timer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.80\\text{ s}$ (b) $0.595\\text{ s}$ (c) $340\\text{ m/s}$ (d) to identify anomalies and calculate a mean (e) human reaction time, difficulty judging the echo; use a longer distance or electronic timing",
            commonErrors: ["Using $100\\text{ m}$ rather than $200\\text{ m}$ as the distance.", "Including 0.80 s in the mean, giving 0.636 s."],
            examinerNote: "In (c) 336 or 340 accepted; allow ecf from (b). In (e) allow any two sensible sources of error.",
          },
        },
      ],
    },
    {
      id: "eph10-u3-oscilloscope",
      title: "Oscilloscope traces, frequency and period",
      skill: "Read amplitude and period from an oscilloscope trace and calculate frequency using $f = \\frac{1}{T}$.",
      lesson: {
        sections: [
          {
            heading: "Reading a trace",
            body: "A microphone connected to an **oscilloscope** shows the sound wave as a trace: the vertical axis shows **voltage** (which matches the amplitude of the sound) and the horizontal axis shows **time**.\n\n- **Amplitude**: the height of a peak above the centre line. Louder sound gives a taller trace.\n- **Period**, $T$: the time for one complete wave, found from the horizontal distance between two adjacent peaks multiplied by the **timebase**.\n- A higher-pitched note gives more waves across the screen, so a shorter period.",
          },
          {
            heading: "Period and frequency",
            body: "Frequency and period are linked by\n\n$$f = \\frac{1}{T} \\qquad T = \\frac{1}{f}$$\n\nwith $f$ in $\\text{Hz}$ and $T$ in seconds. A timebase of $2\\text{ ms/div}$ means each horizontal division is $2\\text{ ms} = 0.002\\text{ s}$. If one wave spans $4$ divisions, then $T = 4 \\times 2 = 8\\text{ ms} = 0.008\\text{ s}$ and $f = \\frac{1}{0.008} = 125\\text{ Hz}$.",
          },
          {
            heading: "Comparing traces",
            body: "When comparing two notes on the same settings:\n\n- same frequency but taller trace: **louder**, same pitch\n- same amplitude but more waves on screen: **higher pitch**, same loudness\n\nA tuning fork gives a smooth regular trace with a single frequency. A musical instrument gives a more complex trace containing several frequencies.",
          },
        ],
        keyFormulas: [
          { name: "Frequency", statement: "$f = \\frac{1}{T}$" },
          { name: "Period", statement: "$T = \\frac{1}{f}$" },
          { name: "Period from the screen", statement: "$T = \\text{divisions per wave} \\times \\text{timebase}$" },
        ],
        workedExample: {
          problem: "A trace shows one complete wave over $5.0$ divisions. The timebase is $0.50\\text{ ms/div}$. Calculate the frequency.",
          solution: "$T = 5.0 \\times 0.50 = 2.5\\text{ ms} = 0.0025\\text{ s}$. $f = \\frac{1}{T} = \\frac{1}{0.0025} = 400\\text{ Hz}$.",
        },
      },
      questions: [
        {
          id: "eph10-u3-oscilloscope-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sound is made louder without changing its pitch. How does the oscilloscope trace change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The amplitude increases and the number of waves on the screen stays the same." },
              { id: "b", text: "The amplitude stays the same and more waves appear on the screen." },
              { id: "c", text: "The amplitude decreases and fewer waves appear on the screen." },
              { id: "d", text: "The amplitude increases and more waves appear on the screen." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Loudness and pitch", statement: "Loudness depends on amplitude; pitch depends on frequency." },
            ],
            steps: [
              { reasoning: "A louder sound has a larger amplitude. The pitch (frequency) is unchanged, so the number of waves across the screen is unchanged.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Thinking that louder sounds have a higher frequency."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "eph10-u3-oscilloscope-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An oscilloscope trace of a note shows one complete wave across $4.0$ divisions. The timebase is $0.25\\text{ ms/div}$. Calculate the frequency of the note.",
          response: {
            type: "numeric",
            parts: [{ label: "Frequency", answer: 1000, unit: "Hz" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "$f = \\frac{1}{T}$" },
            ],
            steps: [
              { reasoning: "Find the period using the timebase.", working: "T = 4.0 \\times 0.25\\text{ ms} = 1.0\\text{ ms} = 0.0010\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $f = \\frac{1}{T}$.", working: "f = \\frac{1}{0.0010}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f = 1000\\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1000\\text{ Hz}$",
            commonErrors: ["Using $T$ in milliseconds, giving $1\\text{ Hz}$.", "Using the number of divisions alone as the period."],
            examinerNote: "Allow 1 kHz. Award 2 marks for $1\\text{ Hz}$ from an unconverted period (ecf).",
          },
        },
        {
          id: "eph10-u3-oscilloscope-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A tuning fork has a frequency of $256\\text{ Hz}$. It is connected to an oscilloscope with a timebase of $1.0\\text{ ms/div}$. Calculate the period of the wave in milliseconds, to 2 significant figures, and the number of divisions across which one complete wave is displayed.",
          response: {
            type: "numeric",
            parts: [
              { label: "Period (ms)", answer: 3.9, tolerance: 0.05, unit: "ms" },
              { label: "Divisions per wave", answer: 3.9, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period", statement: "$T = \\frac{1}{f}$" },
            ],
            steps: [
              { reasoning: "Substitute the frequency.", working: "T = \\frac{1}{256}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in seconds and convert to milliseconds.", working: "T = 0.003906\\text{ s} = 3.9\\text{ ms}", marks: 1, markCode: "A" },
              { reasoning: "Divide the period by the time per division.", working: "\\text{divisions} = \\frac{3.9}{1.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3.9\\text{ divisions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T = 3.9\\text{ ms}$; $3.9$ divisions per wave",
            commonErrors: ["Giving the period as 0.0039 ms.", "Using $T = f$ ."],
            examinerNote: "Allow 3.91. Allow ecf for the divisions from the period given.",
          },
        },
        {
          id: "eph10-u3-oscilloscope-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two musical notes, X and Y, are played into the same microphone connected to an oscilloscope with a timebase of $2.0\\text{ ms/div}$. Note X shows one complete wave across $5.0$ divisions with a peak height of $2.0$ divisions. Note Y shows one complete wave across $2.5$ divisions with a peak height of $1.0$ division.",
          parts: [
            { label: "a", prompt: "Calculate the period of note X in seconds.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of note X.", marks: 2 },
            { label: "c", prompt: "Calculate the frequency of note Y.", marks: 2 },
            { label: "d", prompt: "Compare the pitch and the loudness of notes X and Y.", marks: 3 },
            { label: "e", prompt: "State whether note Y is within the normal hearing range. Give a reason.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period from timebase", statement: "$T = \\text{divisions per wave} \\times \\text{timebase}$" },
              { kind: "formula", name: "Frequency", statement: "$f = \\frac{1}{T}$" },
              { kind: "property", name: "Loudness and pitch", statement: "Louder sound: greater amplitude. Higher pitch: higher frequency." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply divisions by the timebase.", working: "T = 5.0 \\times 2.0\\text{ ms} = 10\\text{ ms}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert to seconds.", working: "T = 0.010\\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into $f = \\frac{1}{T}$.", working: "f = \\frac{1}{0.010}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "f = 100\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Period of Y is $2.5 \\times 2.0 = 5.0\\text{ ms} = 0.0050\\text{ s}$, so $f = \\frac{1}{0.0050}$.", working: "f = \\frac{1}{0.0050}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "f = 200\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Y has twice the frequency of X (200 Hz against 100 Hz), so Y has the higher pitch.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "X has twice the amplitude of Y (2.0 divisions against 1.0).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So X is the louder note.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Yes: 200 Hz lies between 20 Hz and 20 000 Hz.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.010\\text{ s}$ (b) $100\\text{ Hz}$ (c) $200\\text{ Hz}$ (d) Y has higher pitch, X is louder (e) yes, $200\\text{ Hz}$ is within $20$ to $20\\,000\\text{ Hz}$",
            commonErrors: ["Not converting milliseconds to seconds, giving 0.1 Hz.", "Saying that Y is louder because it has more waves."],
            examinerNote: "In (d) both comparisons must refer to the numerical or relative values. Allow ecf from (b) and (c) in (d).",
          },
        },
      ],
    },
  ],
};
