import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "myps2-u3-lesson-3-1",
  code: "3-1",
  title: "Sound and Light",
  goal: "I CAN explain how sound travels and what frequency and amplitude mean, calculate distances using the speed of sound, and describe reflection, refraction, the visible spectrum and colour filters.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Key concept: Relationships",
    "Related concept: Energy",
  ],
  vocabulary: [
    { term: "Vibration", definition: "A rapid back-and-forth movement. Sound is produced by vibrating objects." },
    { term: "Frequency", definition: "The number of vibrations (waves) each second, measured in hertz ($\\text{Hz}$). A higher frequency gives a higher pitch." },
    { term: "Amplitude", definition: "The maximum displacement of a vibration from its rest position. A larger amplitude gives a louder sound." },
    { term: "Echo", definition: "A reflection of sound from a hard surface, heard after a short delay." },
    { term: "Normal", definition: "A line drawn at right angles to a surface where a ray of light meets it. Angles are measured from the normal." },
    { term: "Refraction", definition: "The change in direction of light when it passes from one transparent material into another, caused by a change in speed." },
    { term: "Dispersion", definition: "The splitting of white light into the colours of the spectrum, for example by a prism." },
  ],
  concepts: [
    {
      id: "myps2-u3-sound-waves",
      title: "Sound waves, pitch and echoes",
      skill: "Explain how sound travels, link frequency and amplitude to pitch and loudness, and use speed = distance / time with echoes.",
      lesson: {
        sections: [
          {
            heading: "Sound is a vibration",
            body: "Sound is made when an object **vibrates**. The vibrations pass from particle to particle as a wave, so sound needs a **medium** (a solid, liquid or gas) to travel through. It cannot travel through a **vacuum** because there are no particles to pass the vibration on.\n\nSound travels fastest in solids, slower in liquids and slowest in gases, because the particles in a solid are closest together. In air at room temperature the speed of sound is about $340\\ \\text{m/s}$. In sea water it is about $1500\\ \\text{m/s}$.",
          },
          {
            heading: "Pitch and loudness",
            body: "Two features of a sound wave matter most:\n\n- **Frequency** is the number of vibrations per second, in hertz ($\\text{Hz}$). A higher frequency gives a **higher pitch**.\n- **Amplitude** is the size of the vibration. A larger amplitude gives a **louder** sound.\n\nOn an oscilloscope trace, a wave with taller peaks has a larger amplitude, and a wave with more complete waves across the same time has a higher frequency. Humans hear frequencies from about $20\\ \\text{Hz}$ to $20\\,000\\ \\text{Hz}$.",
          },
          {
            heading: "Speed of sound and echoes",
            body: "$$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$$\n\nAn **echo** is sound that reflects from a hard surface. The sound travels to the surface and back, so the distance it travels is **twice** the distance to the surface. Sonar uses echoes of sound in water to find the depth of the sea.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$, so $\\text{distance} = \\text{speed} \\times \\text{time}$" },
          { name: "Echo", statement: "Distance to the surface $= \\dfrac{\\text{speed} \\times \\text{time}}{2}$" },
          { name: "Speed of sound", statement: "About $340\\ \\text{m/s}$ in air and $1500\\ \\text{m/s}$ in sea water" },
        ],
        workedExample: {
          problem: "A hiker shouts towards a cliff and hears the echo $1.5\\ \\text{s}$ later. The speed of sound in air is $340\\ \\text{m/s}$. How far away is the cliff?",
          solution: "Total distance travelled by the sound $= 340 \\times 1.5 = 510\\ \\text{m}$. This is there and back, so the cliff is $510 \\div 2 = 255\\ \\text{m}$ away.",
        },
      },
      questions: [
        {
          id: "myps2-u3-sound-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about sound is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound cannot travel through a vacuum because there are no particles to vibrate." },
              { id: "b", text: "Sound travels through a vacuum more slowly than through air." },
              { id: "c", text: "Sound travels faster in air than in a solid." },
              { id: "d", text: "A louder sound has a higher frequency." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sound needs a medium", statement: "Sound is a vibration passed from particle to particle, so it cannot travel through a vacuum." },
            ],
            steps: [
              { reasoning: "A vacuum contains no particles, so there is nothing to pass the vibrations on. Sound is also faster in solids than in air, and loudness depends on amplitude, not frequency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sound cannot travel through a vacuum because there are no particles to vibrate.",
            commonErrors: ["Thinking sound travels slowly through a vacuum rather than not at all.", "Confusing loudness (amplitude) with pitch (frequency).", "Thinking sound is fastest in gases."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps2-u3-sound-waves-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student stands in front of a large wall and claps once. She hears the echo $0.40\\ \\text{s}$ later. The speed of sound in air is $340\\ \\text{m/s}$.\n\nCalculate the distance from the student to the wall.",
          response: { type: "numeric", parts: [{ label: "Distance to the wall", answer: 68, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
              { kind: "principle", name: "Echo path", statement: "The sound travels to the wall and back, so the distance to the wall is half of the total distance travelled." },
            ],
            steps: [
              { reasoning: "Find the total distance travelled by the sound, there and back.", working: "340 \\times 0.40 = 136\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2 because the sound travelled to the wall and back.", working: "136 \\div 2 = 68\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$68\\ \\text{m}$",
            commonErrors: ["Forgetting to halve the distance and giving 136 m.", "Dividing 340 by 0.40."],
            examinerNote: "M1 for 340 x 0.40 (oe). A1 for 68 m. Award M1 A0 for 136 m.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two sound waves, A and B, are displayed on an oscilloscope using the same time scale. Wave B has taller peaks than wave A and has twice as many complete waves across the screen.\n\nDescribe how the sound of B differs from the sound of A, and explain your answer in terms of the wave.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amplitude and loudness", statement: "A larger amplitude means a louder sound." },
              { kind: "definition", name: "Frequency and pitch", statement: "A higher frequency means a higher pitch." },
            ],
            steps: [
              { reasoning: "B has taller peaks, so a larger amplitude, so B is louder than A.", marks: 1, markCode: "B" },
              { reasoning: "B has twice as many waves in the same time, so its frequency is twice as high as A.", marks: 1, markCode: "B" },
              { reasoning: "A higher frequency gives a higher pitch, so B sounds higher in pitch than A.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "B is louder (larger amplitude) and has a higher pitch (twice the frequency) than A.",
            commonErrors: ["Saying taller peaks mean a higher pitch.", "Saying more waves mean a louder sound."],
            examinerNote: "B1 louder because larger amplitude. B1 frequency doubled (oe). R1 higher pitch because higher frequency. Reject 'faster sound' for frequency.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A research ship uses sonar to measure the depth of the sea. A pulse of sound is sent straight down and the echo from the sea floor is detected $0.80\\ \\text{s}$ later. The speed of sound in sea water is $1500\\ \\text{m/s}$.",
          parts: [
            { label: "a", prompt: "Explain why astronauts in space cannot hear the engines of a spacecraft flying close to them.", marks: 2 },
            { label: "b", prompt: "Calculate the depth of the sea.", marks: 3 },
            { label: "c", prompt: "A student wants to measure the speed of sound in air using an echo from a wall. Describe a method that gives a reliable result.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sound needs a medium", statement: "Sound is passed on by vibrating particles, so it cannot travel through a vacuum." },
              { kind: "formula", name: "Speed", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
              { kind: "skill", name: "Reliability", statement: "Repeating measurements and calculating a mean makes a result more reliable." },
            ],
            steps: [
              { part: "a", reasoning: "Space is (almost) a vacuum, so there are no particles between the spacecraft.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Sound is a vibration passed from particle to particle, so with no particles the sound cannot travel.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Total distance travelled by the pulse, down and back up.", working: "1500 \\times 0.80 = 1200\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The sea floor is half of this distance away.", working: "1200 \\div 2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "600\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Measure a long distance from the student to the wall with a tape measure or trundle wheel (about 50 m or more, so the time is long enough to measure).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Make a loud clap and use a stopwatch to time from the clap to the echo. Speed $= \\dfrac{2 \\times \\text{distance}}{\\text{time}}$.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Repeat several times and calculate a mean time to reduce the effect of reaction-time errors.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) No particles in a vacuum, so no vibrations can be passed on (b) $600\\ \\text{m}$ (c) Measure the distance with a tape, time clap to echo, use speed = 2d / t, repeat and take a mean.",
            commonErrors: ["Giving 1200 m as the depth (forgetting to halve).", "In (c) using the distance to the wall instead of twice the distance.", "Only timing once."],
            examinerNote: "(a) Allow 'space is a vacuum'. (b) Award M1 M1 A0 for 1200 / 2 without the unit; allow ecf for A1. (c) Allow 'use a data logger / two microphones' instead of a stopwatch. Reject 'use a faster stopwatch'.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property of a sound wave determines the PITCH of the sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed of the wave" },
              { id: "b", text: "Frequency" },
              { id: "c", text: "Wavelength only" },
              { id: "d", text: "Amplitude" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Frequency and pitch", statement: "Frequency is the number of vibrations per second (Hz); a higher frequency gives a higher pitch." },
            ],
            steps: [
              { reasoning: "Pitch depends on frequency, not amplitude; amplitude controls loudness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Frequency",
            commonErrors: ["Choosing amplitude, which controls loudness."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-sound-waves-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property of a sound wave determines how LOUD the sound is?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The medium it travels through" },
              { id: "b", text: "Frequency" },
              { id: "c", text: "The wavelength" },
              { id: "d", text: "Amplitude" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Amplitude and loudness", statement: "Amplitude is the size of the vibration; a larger amplitude gives a louder sound." },
            ],
            steps: [
              { reasoning: "Loudness is linked to amplitude; pitch is linked to frequency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Amplitude",
            commonErrors: ["Confusing loudness with pitch."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-sound-waves-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Through which medium does sound travel FASTEST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A vacuum" },
              { id: "b", text: "A steel rail (a solid)" },
              { id: "c", text: "Air (a gas)" },
              { id: "d", text: "Sea water (a liquid)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Speed of sound", statement: "Sound travels fastest in solids, slower in liquids and slowest in gases; it cannot travel through a vacuum." },
            ],
            steps: [
              { reasoning: "Particles in a solid are closest together, so vibrations pass on fastest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A steel rail (a solid)",
            commonErrors: ["Choosing air because we hear sound in air most often."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-sound-waves-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The speed of sound in air is about $340\\ \\text{m/s}$. A sound wave travels for 3.0 seconds.\n\nCalculate the distance travelled.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 1020, tolerance: 0, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
            ],
            steps: [
              { reasoning: "Multiply speed by time.", working: "340 \\times 3.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 1020\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1020 m",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 for 340 x 3 oe. A1 for 1020 m.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A thunder clap is heard 2.5 seconds after the lightning flash. Using a speed of sound of $340\\ \\text{m/s}$, calculate how far away the lightning struck.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 850, tolerance: 0, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
            ],
            steps: [
              { reasoning: "Multiply speed by time.", working: "340 \\times 2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 850\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "850 m",
            commonErrors: ["Forgetting to convert units or using the wrong speed."],
            examinerNote: "M1 for 340 x 2.5 oe. A1 for 850 m.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sound travels 680 m in 2.0 s through air.\n\nCalculate the speed of the sound.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 340, tolerance: 0, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide distance by time.", working: "\\frac{680}{2.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 340\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "340 m/s",
            commonErrors: ["Multiplying distance by time."],
            examinerNote: "M1 for 680/2 oe. A1 for 340 m/s.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student stands facing a wall and claps. The echo returns after 2.0 s. The speed of sound in air is $340\\ \\text{m/s}$.\n\nCalculate the distance from the student to the wall.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total distance travelled", answer: 680, tolerance: 0, unit: "m" },
              { label: "Distance to wall", answer: 340, tolerance: 0, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$; echo distance is twice the distance to the wall." },
            ],
            steps: [
              { reasoning: "Total distance = speed x time (there and back).", working: "340 \\times 2.0 = 680\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "The sound travels to the wall and back, so halve the total.", working: "680 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 340\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "340 m",
            commonErrors: ["Giving 680 m (forgetting the echo travels twice the distance).", "Giving 170 m by dividing by 4."],
            examinerNote: "M1 for 680. M1 for /2. A1 for 340 m.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two sounds are shown on an oscilloscope. Sound X has small-amplitude waves with many complete waves across the screen. Sound Y has large-amplitude waves with few complete waves.\n\nDescribe how the pitch and loudness of X compare with Y, explaining your answer in terms of the wave features.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amplitude and loudness", statement: "Larger amplitude = louder sound." },
              { kind: "definition", name: "Frequency and pitch", statement: "Higher frequency = higher pitch; more waves in the same time = higher frequency." },
            ],
            steps: [
              { reasoning: "X has smaller amplitude than Y, so X is quieter (less loud).", marks: 1, markCode: "B" },
              { reasoning: "Y has larger amplitude, so Y is louder.", marks: 1, markCode: "B" },
              { reasoning: "X has more complete waves in the same time, so its frequency is higher.", marks: 1, markCode: "B" },
              { reasoning: "Higher frequency gives higher pitch, so X sounds higher in pitch than Y.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "X is quieter and higher in pitch than Y: smaller amplitude = quieter, more waves = higher frequency = higher pitch.",
            commonErrors: ["Saying more waves means louder.", "Saying taller waves mean higher pitch."],
            examinerNote: "B1 quiet/loud comparison. B1 frequency comparison. R1 pitch link. Allow oe.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fishing boat uses sonar. A sound pulse is sent down to the seabed and the echo returns after 0.60 s. The speed of sound in sea water is $1500\\ \\text{m/s}$.\n\nCalculate the depth of the sea below the boat.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed and echo", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$; the echo travels down and back, so halve the total." },
            ],
            steps: [
              { reasoning: "Total distance travelled = $1500 \\times 0.60 = 900$ m.", working: "1500 \\times 0.60", marks: 1, markCode: "M" },
              { reasoning: "The pulse goes down and back up, so the depth is half the total.", working: "900 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 450\\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Sonar works because sound travels through water (a medium) and reflects off the seabed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "450 m",
            commonErrors: ["Giving 900 m (forgetting to halve).", "Using 340 m/s (the speed in air)."],
            examinerNote: "M1 for 900. M1 for /2. A1 for 450 m. R1 for medium/echo explanation.",
          },
        },
        {
          id: "myps2-u3-sound-waves-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a bell jar experiment, an electric bell is rung inside a jar and the air is gradually pumped out. What happens to the sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "It changes pitch but stays the same volume" },
              { id: "c", text: "It gets louder" },
              { id: "d", text: "It fades and disappears as the air is removed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sound needs a medium", statement: "As air is removed there are fewer particles to carry the vibration, so the sound fades." },
            ],
            steps: [
              { reasoning: "With less air (a poorer medium) the sound gets quieter and finally stops in a vacuum.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It fades and disappears as the air is removed",
            commonErrors: ["Thinking sound travels through vacuum more slowly rather than not at all."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-sound-waves-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Humans can hear frequencies from about 20 Hz to 20 000 Hz. Which sound would a human NOT be able to hear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A deep drum at 50 Hz" },
              { id: "b", text: "A bat call at 50 000 Hz" },
              { id: "c", text: "A singing voice at 500 Hz" },
              { id: "d", text: "A whistle at 1000 Hz" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hearing range", statement: "Humans hear roughly 20 Hz to 20 000 Hz; frequencies above this are ultrasound." },
            ],
            steps: [
              { reasoning: "50 000 Hz is above the human limit of about 20 000 Hz, so it is ultrasound and cannot be heard.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A bat call at 50 000 Hz",
            commonErrors: ["Choosing the lowest frequency; 50 Hz is still within hearing range."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-sound-waves-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student measures echoes from a wall at different distances. The speed of sound is taken as $340\\ \\text{m/s}$.\n\n| Distance to wall (m) | Time for echo (s) |\n| --- | --- |\n| 20 | 0.12 |\n| 40 | 0.24 |\n| 60 | 0.35 |\n| 80 | 0.47 |",
          parts: [
            { label: "a", prompt: "Explain why the time for the echo is not simply distance divided by speed.", marks: 2 },
            { label: "b", prompt: "Use the first row of data to calculate the speed of sound. Show your working.", marks: 3 },
            { label: "c", prompt: "Calculate the expected time for an echo from a wall 100 m away.", marks: 2 },
            { label: "d", prompt: "Suggest one source of error in this method and one way to reduce it.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed and echo", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$; echo distance = 2 x distance to wall." },
            ],
            steps: [
              { part: "a", reasoning: "The sound travels to the wall AND back, so the total distance is twice the distance to the wall.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Therefore time = (2 x distance) / speed, not distance / speed.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Total distance = $2 \\times 20 = 40$ m.", working: "2 \\times 20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Speed = total distance / time.", working: "\\frac{40}{0.12}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate (about 333 m/s, close to 340).", working: "\\approx 333\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total distance = $2 \\times 100 = 200$ m; time = distance / speed.", working: "\\frac{200}{340}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\approx 0.59\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any valid error + improvement: human reaction time in starting/stopping the stopwatch -> repeat and average; echo hard to hear -> louder clap / closer wall; temperature changes speed -> measure quickly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Echo travels there and back (b) ~333 m/s (c) ~0.59 s (d) Reaction time / repeat and average (or other valid pair).",
            commonErrors: ["In (b) using 20 m instead of 40 m.", "In (c) forgetting to double the distance."],
            examinerNote: "(b) Allow 340 m/s if method correct. (c) Accept 0.59 s or 0.6 s. (d) Both error and improvement needed for the mark.",
          },
        },
      ],
    },
    {
      id: "myps2-u3-light-behaviour",
      title: "Reflection, refraction and colour",
      skill: "Apply the law of reflection, describe refraction and dispersion, and explain what colour filters do.",
      lesson: {
        sections: [
          {
            heading: "Reflection",
            body: "Light travels in **straight lines** called rays. When a ray hits a smooth surface such as a mirror, it is **reflected**. Angles are measured from the **normal**, a line at $90^\\circ$ to the surface.\n\n$$\\text{angle of incidence} = \\text{angle of reflection}$$\n\nThe incident ray, the reflected ray and the normal are all in the same flat plane. A rough surface reflects rays in many directions (diffuse reflection), so you do not see a clear image.",
          },
          {
            heading: "Refraction and the spectrum",
            body: "Light travels more slowly in glass or water than in air. When a ray enters a denser material at an angle, it changes direction. This is **refraction**.\n\n- Air into glass: the ray bends **towards** the normal.\n- Glass into air: the ray bends **away from** the normal.\n- A ray along the normal (angle $0^\\circ$) is not bent.\n\nWhite light is a mixture of colours. A prism refracts each colour by a different amount, so white light is split into the **visible spectrum**: red, orange, yellow, green, blue, indigo, violet. Red bends least and violet bends most. This splitting is called **dispersion**.",
          },
          {
            heading: "Colour filters and coloured objects",
            body: "A **colour filter** transmits its own colour and absorbs the others. A red filter lets only red light through. Two filters of different primary colours placed together (for example red then green) let almost no light through.\n\nAn object has the colour of the light it **reflects**. A red book reflects red light and absorbs other colours. In green light, which has no red in it, a red book reflects almost nothing and looks black.",
          },
        ],
        keyFormulas: [
          { name: "Law of reflection", statement: "angle of incidence $=$ angle of reflection (both measured from the normal)" },
          { name: "Refraction", statement: "Into a denser material: bends towards the normal. Out of it: bends away from the normal." },
          { name: "Visible spectrum", statement: "Red, orange, yellow, green, blue, indigo, violet (red bends least, violet bends most)" },
        ],
        workedExample: {
          problem: "A ray of light hits a plane mirror. The angle between the ray and the mirror surface is $30^\\circ$. Find the angle of incidence and the angle of reflection.",
          solution: "Angles are measured from the normal, which is at $90^\\circ$ to the mirror. Angle of incidence $= 90^\\circ - 30^\\circ = 60^\\circ$. By the law of reflection, the angle of reflection is also $60^\\circ$.",
        },
      },
      questions: [
        {
          id: "myps2-u3-light-behaviour-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ray of light hits a plane mirror with an angle of incidence of $40^\\circ$.\n\nWhat is the angle of reflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50^\\circ$" },
              { id: "b", text: "$40^\\circ$" },
              { id: "c", text: "$80^\\circ$" },
              { id: "d", text: "$140^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "The angle of incidence equals the angle of reflection." },
            ],
            steps: [
              { reasoning: "By the law of reflection, the angle of reflection equals the angle of incidence, $40^\\circ$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $40^\\circ$",
            commonErrors: ["Choosing 50 degrees, the angle between the ray and the mirror surface.", "Choosing 80 degrees, the angle between the incident and reflected rays.", "Choosing 140 degrees from subtracting from 180."],
            examinerNote: "B1 for 40 degrees.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ray of light hits a plane mirror. The ray makes an angle of $25^\\circ$ with the surface of the mirror.\n\nCalculate the angle of reflection, measured from the normal.",
          response: { type: "numeric", parts: [{ label: "Angle of reflection", answer: 65, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "The angle of incidence equals the angle of reflection, both measured from the normal." },
              { kind: "property", name: "Normal", statement: "The normal is at $90^\\circ$ to the mirror surface." },
            ],
            steps: [
              { reasoning: "The angle of incidence is measured from the normal, which is $90^\\circ$ to the surface.", working: "90 - 25 = 65^\\circ", marks: 1, markCode: "M" },
              { reasoning: "The angle of reflection equals the angle of incidence.", working: "65^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$",
            commonErrors: ["Giving 25 degrees by measuring from the mirror surface.", "Giving 130 degrees, the angle between the two rays."],
            examinerNote: "M1 for 90 - 25 (oe). A1 for 65 degrees.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ray of light in air hits a rectangular glass block at an angle of incidence of $45^\\circ$ and passes into the glass.\n\nDescribe what happens to the direction of the ray as it enters the glass, and explain why. State what would happen if the ray hit the block along the normal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Refraction", statement: "Refraction is the change in direction of light when its speed changes on passing between materials." },
            ],
            steps: [
              { reasoning: "The ray bends towards the normal as it enters the glass.", marks: 1, markCode: "B" },
              { reasoning: "Light travels more slowly in glass than in air, and this change of speed causes the change in direction.", marks: 1, markCode: "R" },
              { reasoning: "Along the normal (angle of incidence $0^\\circ$) the ray would slow down but not change direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The ray bends towards the normal because light slows down in glass; along the normal it goes straight through without bending.",
            commonErrors: ["Saying the ray bends away from the normal.", "Saying light speeds up in glass.", "Saying light stops when it hits the normal."],
            examinerNote: "B1 towards the normal. R1 slower in glass (oe). B1 no change in direction along the normal. Reject 'bends because glass is solid'.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student shines a narrow beam of white light through a glass prism onto a white screen and sees a band of colours. She then places filters in the beam and looks at a red book.",
          parts: [
            { label: "a", prompt: "Describe what happens to the white light as it passes through the prism, and explain why the colours separate.", marks: 3 },
            { label: "b", prompt: "A red filter is placed in the beam of white light before the prism. State what the student sees on the screen and explain why.", marks: 2 },
            { label: "c", prompt: "The red book appears red in white light but black in pure green light. Explain both observations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dispersion", statement: "White light is split into the colours of the spectrum because each colour is refracted by a different amount." },
              { kind: "principle", name: "Filters", statement: "A coloured filter transmits light of its own colour and absorbs the other colours." },
              { kind: "principle", name: "Colour of objects", statement: "An object appears the colour of the light it reflects; it absorbs other colours." },
            ],
            steps: [
              { part: "a", reasoning: "The white light is split into a spectrum of colours (red, orange, yellow, green, blue, indigo, violet).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Red is refracted least and violet is refracted most.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each colour travels at a slightly different speed in glass, so each is refracted by a different amount and the colours spread out.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Only red light is seen on the screen (a single red band or spot).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The red filter transmits red light and absorbs the other colours, so only red reaches the prism.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "In white light, which contains all colours, the book reflects red light and absorbs the other colours, so it looks red.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Green light contains no red light, so there is nothing for the book to reflect.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The green light is absorbed, so almost no light reaches the eye and the book looks black.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Dispersion into a spectrum; colours are refracted by different amounts (b) Only red appears; the filter absorbs the other colours (c) The book reflects only red; in green light there is no red to reflect, so it looks black.",
            commonErrors: ["Saying the prism adds colour to white light.", "Saying the red filter turns all light red.", "Saying the book reflects green light and so looks green."],
            examinerNote: "(a) Allow 'violet bends the most'. (b) Allow 'a red spot / band only'. (c) Allow 'the book absorbs green' for the third mark.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When measuring angles of incidence and reflection, they are measured from what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mirror surface" },
              { id: "b", text: "The reflected ray" },
              { id: "c", text: "The normal" },
              { id: "d", text: "The centre of the mirror" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Normal", statement: "Angles of incidence and reflection are measured from the normal, the line at 90° to the surface." },
            ],
            steps: [
              { reasoning: "Both angles are measured from the normal, not from the mirror surface.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The normal",
            commonErrors: ["Measuring from the mirror surface instead of the normal."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ray of light passes from air into glass at an angle. What happens to its direction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It bends towards the normal" },
              { id: "b", text: "It bends away from the normal" },
              { id: "c", text: "It reflects back into the air" },
              { id: "d", text: "It does not bend at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Refraction", statement: "Light slows in a denser material; entering glass or water it bends towards the normal." },
            ],
            steps: [
              { reasoning: "Entering a denser material (air to glass) the ray bends towards the normal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It bends towards the normal",
            commonErrors: ["Reversing the rule and choosing 'away from the normal'."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "White light passes through a red filter and then a green filter. What reaches the screen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow light" },
              { id: "b", text: "Almost no light" },
              { id: "c", text: "Red light" },
              { id: "d", text: "Green light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filters", statement: "A filter transmits only its own colour; red then green lets almost no light through." },
            ],
            steps: [
              { reasoning: "The red filter lets only red through; the green filter absorbs red, so almost nothing reaches the screen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Almost no light",
            commonErrors: ["Thinking the colours combine to make yellow."],
            examinerNote: "B1 for choice (d).",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A ray of light hits a plane mirror with an angle of incidence of $30^\\circ$.\n\nCalculate the angle of reflection.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle of reflection", answer: 30, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of incidence = angle of reflection." },
            ],
            steps: [
              { reasoning: "By the law of reflection the angles are equal.", working: "30^\\circ", marks: 1, markCode: "B" },
              { reasoning: "State the answer with the unit.", working: "30^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30^\\circ$",
            commonErrors: ["Subtracting from 90 to give 60."],
            examinerNote: "B1 for 30. A1 for unit °.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ray of light strikes a mirror so that the angle between the ray and the mirror surface is $25^\\circ$.\n\nCalculate the angle of incidence.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle of incidence", answer: 65, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Normal", statement: "Angles are measured from the normal at 90° to the surface." },
            ],
            steps: [
              { reasoning: "The normal is at $90^\\circ$ to the mirror; subtract the surface angle.", working: "90 - 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 65^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$",
            commonErrors: ["Giving 25° (the angle to the surface, not the normal).", "Giving 115°."],
            examinerNote: "M1 for 90-25 oe. A1 for 65°.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A ray hits a mirror with an angle of incidence of $40^\\circ$.\n\nCalculate the angle between the incident ray and the reflected ray.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle between rays", answer: 80, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of reflection = angle of incidence = 40°; the angle between the rays is twice the incidence angle." },
            ],
            steps: [
              { reasoning: "Reflection = 40° from the normal on the other side; the angle between incident and reflected rays is $40 + 40$.", working: "2 \\times 40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 80^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80^\\circ$",
            commonErrors: ["Giving 40° (only one angle).", "Giving 100° (subtracting from 180 wrongly)."],
            examinerNote: "M1 for 2x40 oe. A1 for 80°.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ray of light hits a mirror with an angle of incidence of $55^\\circ$.\n\nCalculate the angle between the reflected ray and the mirror surface.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle to surface", answer: 35, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of reflection", statement: "Angle of reflection = angle of incidence, measured from the normal." },
              { kind: "convention", name: "Normal", statement: "Angles to the surface = 90° minus angles to the normal." },
            ],
            steps: [
              { reasoning: "Angle of reflection = angle of incidence = $55^\\circ$ from the normal.", working: "55^\\circ", marks: 1, markCode: "B" },
              { reasoning: "Angle to the surface = $90 - 55$.", working: "90 - 55", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 35^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35^\\circ$",
            commonErrors: ["Giving 55° (the angle to the normal, not the surface).", "Giving 125°."],
            examinerNote: "B1 for 55° reflection. M1 for 90-55. A1 for 35°.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A red book looks red in white light but looks black when illuminated only by green light. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Colour of objects", statement: "An object has the colour of the light it reflects; it absorbs other colours." },
            ],
            steps: [
              { reasoning: "In white light, which contains all colours, the book reflects red light and absorbs the other colours, so it looks red.", marks: 1, markCode: "B" },
              { reasoning: "Green light contains no red component.", marks: 1, markCode: "B" },
              { reasoning: "There is no red light for the book to reflect, so the green light is absorbed instead.", marks: 1, markCode: "B" },
              { reasoning: "Almost no light reaches the eye from the book, so it looks black.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The book reflects only red light. In green light there is no red to reflect, so the green is absorbed and the book looks black.",
            commonErrors: ["Saying the book reflects green light."],
            examinerNote: "B1 reflects red in white light. B1 no red in green. B1 absorbs green. R1 looks black / no light reaches eye. Allow oe.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A prism splits white light into a spectrum. Explain what happens to the light inside the prism, naming the process and describing which colours bend most and least.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dispersion", statement: "White light is split into the spectrum because each colour is refracted by a different amount." },
            ],
            steps: [
              { reasoning: "White light is refracted as it enters the glass of the prism.", marks: 1, markCode: "B" },
              { reasoning: "Each colour travels at a slightly different speed in glass, so each is bent by a different amount; this splitting is dispersion.", marks: 1, markCode: "B" },
              { reasoning: "Red light is refracted (bends) the least and violet the most.", marks: 1, markCode: "B" },
              { reasoning: "Because the colours spread out, the observer sees the spectrum: red, orange, yellow, green, blue, indigo, violet.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Dispersion: each colour refracts by a different amount because it travels at a different speed in glass; red bends least, violet most.",
            commonErrors: ["Saying the prism 'adds' colour to white light."],
            examinerNote: "B1 refraction. B1 dispersion/different amounts. B1 red least violet most. R1 spectrum seen. Allow oe.",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why can you see the page of a book clearly but not your reflection clearly in a rough wall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The page is brighter than the wall" },
              { id: "b", text: "The rough surface reflects light in many directions (diffuse reflection)" },
              { id: "c", text: "The wall absorbs all light" },
              { id: "d", text: "Light cannot reflect from walls" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Diffuse reflection", statement: "A rough surface scatters reflected rays in many directions, so no clear image is seen." },
            ],
            steps: [
              { reasoning: "A smooth surface (mirror) reflects rays in one direction giving a clear image; a rough surface scatters them diffusely.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The rough surface reflects light in many directions (diffuse reflection)",
            commonErrors: ["Thinking rough surfaces do not reflect at all."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the visible spectrum produced by a prism, which colour is refracted (bent) the MOST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Green" },
              { id: "b", text: "Yellow" },
              { id: "c", text: "Red" },
              { id: "d", text: "Violet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Visible spectrum", statement: "Red bends least and violet bends most in a prism." },
            ],
            steps: [
              { reasoning: "Violet light is slowed the most in glass, so it is refracted the most.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Violet",
            commonErrors: ["Choosing red, which bends least."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-light-behaviour-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates reflection using a ray box, a plane mirror and a protractor. She measures the angle between the incident ray and the mirror surface (not the normal) for several rays.\n\n| Angle to mirror surface ($^\\circ$) | Angle between incident and reflected rays ($^\\circ$) |\n| --- | --- |\n| 20 | 140 |\n| 40 | 100 |\n| 60 | 80 |",
          parts: [
            { label: "a", prompt: "Explain why measuring from the mirror surface is incorrect for angles of incidence.", marks: 2 },
            { label: "b", prompt: "For the first row, calculate the angle of incidence and the angle of reflection.", marks: 2 },
            { label: "c", prompt: "Check whether the data obey the law of reflection for the second row.", marks: 2 },
            { label: "d", prompt: "Suggest one improvement to the method to make the results more reliable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Normal", statement: "Angles are measured from the normal at 90° to the surface, not from the surface itself." },
              { kind: "law", name: "Law of reflection", statement: "Angle of incidence = angle of reflection." },
            ],
            steps: [
              { part: "a", reasoning: "The law of reflection defines angles from the normal, which is at 90° to the mirror.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Angles measured from the surface are complementary (90° minus the true angle), so they do not obey the law directly.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Angle of incidence = $90 - 20 = 70^\\circ$.", working: "90 - 20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Angle of reflection = angle of incidence = $70^\\circ$.", working: "= 70^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For row 2: incidence = $90 - 40 = 50^\\circ$; reflection should = 50°.", working: "90 - 40 = 50^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The angle between the rays = $50 + 50 = 100^\\circ$, which matches the data, so the law is obeyed.", working: "50 + 50 = 100^\\circ", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Repeat each measurement several times and calculate a mean.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Use a sharper ray / ensure the mirror is flat and the protractor reads carefully / draw the normal accurately.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Angles must be from the normal (b) incidence 70°, reflection 70° (c) incidence 50°, between-rays 100° matches data (d) Repeat and average / accurate normal.",
            commonErrors: ["In (b) giving 20° as incidence.", "In (c) not converting from surface to normal."],
            examinerNote: "(b) M1 for 90-20. A1 for 70°. (c) ecf allowed. (d) Any valid reliability improvement.",
          },
        },
      ],
    },
  ],
};
