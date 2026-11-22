import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "s8-u3-lesson-3-3",
  code: "3-3",
  title: "Earth in Space",
  goal: "I CAN use models of the Earth-Sun-Moon system to explain phases, eclipses and seasons, and explain how gravity, scale and the geologic time scale describe the solar system and Earth's history.",
  standards: ["MS-ESS1-1", "MS-ESS1-2", "MS-ESS1-3", "MS-ESS1-4", "SEP: Developing and Using Models", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Axis tilt", definition: "The angle of about 23.5 degrees between Earth's rotation axis and a line perpendicular to its orbit around the Sun." },
    { term: "Lunar phase", definition: "The shape of the lit part of the Moon that we see from Earth, caused by the Moon's position in its orbit." },
    { term: "Solar eclipse", definition: "An event in which the Moon passes between the Sun and Earth and blocks sunlight from part of Earth." },
    { term: "Orbit", definition: "The curved path of one object around another, held by gravity." },
    { term: "Galaxy", definition: "A huge system of stars, gas, dust and dark matter held together by gravity." },
    { term: "Geologic time scale", definition: "A chart that divides Earth's 4.6 billion year history into eons, eras and periods using rock and fossil evidence." },
    { term: "Light-year", definition: "The distance light travels in one year, about 9.46 trillion kilometers." },
  ],
  concepts: [
    {
      id: "s8-u3-sun-earth-moon",
      title: "The Earth-Sun-Moon system",
      skill: "Use a model of the Earth-Sun-Moon system to explain moon phases, eclipses and seasons.",
      lesson: {
        sections: [
          {
            heading: "Moon phases and eclipses",
            body: "The Moon does not make its own light. It reflects sunlight, and half of it is always lit. As the Moon orbits Earth, which takes about **29.5 days** to go through all its phases, we see different amounts of the lit half. At **new moon** the lit side faces away from Earth. At **full moon** the whole lit side faces Earth.\n\nA **solar eclipse** happens at new moon, when the Moon is exactly between the Sun and Earth. A **lunar eclipse** happens at full moon, when Earth is exactly between the Sun and Moon and Earth's shadow falls on the Moon. Eclipses do not happen every month because the Moon's orbit is tilted about $5^\\circ$ compared with Earth's orbit, so the three bodies rarely line up exactly.",
          },
          {
            heading: "Seasons",
            body: "Seasons are caused by Earth's **axis tilt** of about $23.5^\\circ$, not by distance from the Sun. The axis always points in the same direction in space while Earth orbits the Sun once in about 365 days.\n\nWhen the Northern Hemisphere is tilted toward the Sun, sunlight hits it more directly and days are longer. That hemisphere has summer, and the Southern Hemisphere has winter at the same time. Six months later the situation reverses. Earth is actually closest to the Sun in early January, in the middle of Northern Hemisphere winter.",
          },
        ],
        keyFormulas: [
          { name: "Solar eclipse", statement: "Moon between Sun and Earth, at new moon" },
          { name: "Lunar eclipse", statement: "Earth between Sun and Moon, at full moon" },
          { name: "Seasons", statement: "Caused by Earth's axis tilt of about 23.5 degrees, not by distance" },
        ],
        workedExample: {
          problem: "A full moon occurs on March 1. About when is the next new moon?",
          solution: "A full cycle takes about 29.5 days, so full moon to new moon is half a cycle: $29.5 \\div 2 \\approx 14.75$ days. The next new moon is about 15 days later, around March 16.",
        },
      },
      questions: [
        {
          id: "s8-u3-sun-earth-moon-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes the seasons on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun getting hotter and cooler during the year" },
              { id: "b", text: "Earth's shadow falling on the Moon" },
              { id: "c", text: "The tilt of Earth's axis as it orbits the Sun" },
              { id: "d", text: "Earth's changing distance from the Sun" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cause of seasons", statement: "Earth's axis tilt changes how directly sunlight strikes each hemisphere during the year." },
            ],
            steps: [
              { reasoning: "The tilt of the axis means each hemisphere points toward the Sun at different times of the year.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The tilt of Earth's axis as it orbits the Sun",
            commonErrors: ["Choosing (a): Earth is closest to the Sun in early January, during Northern Hemisphere winter.", "Choosing (c): this describes a lunar eclipse."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u3-sun-earth-moon-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Earth orbits the Sun in 365 days, a full circle of $360^\\circ$.\n\nCalculate the angle Earth moves around its orbit each day. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle per day", answer: 0.99, tolerance: 0.01, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "angle per day = total angle $\\div$ number of days" },
            ],
            steps: [
              { reasoning: "Divide the full circle by the number of days in one orbit.", working: "\\frac{360}{365}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 2 significant figures.", working: "0.986\\ldots\\approx0.99^\\circ\\text{ per day}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About $0.99^\\circ$ per day (roughly $1^\\circ$ each day)",
            commonErrors: ["Dividing 365 by 360, giving 1.01.", "Using 24 hours instead of 365 days."],
            examinerNote: "M1 for 360 / 365. A1 for 0.99. Allow 1 degree as an approximation only if 360/365 is shown.",
          },
        },
        {
          id: "s8-u3-sun-earth-moon-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims: \"It is hotter in summer because Earth is closer to the Sun.\"\n\nEarth is closest to the Sun (147.1 million km) in early January and farthest (152.1 million km) in early July. In the Northern Hemisphere, July is warmer than January.\n\nUse the data to evaluate the student's claim with a claim, evidence and reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cause of seasons", statement: "Seasons result from Earth's axis tilt, which changes the directness of sunlight and day length." },
            ],
            steps: [
              { reasoning: "Claim: the student's claim is not supported.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: Earth is farthest from the Sun in July (152.1 million km) yet July is warm in the Northern Hemisphere; it is closest in January (147.1 million km) when it is cold.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: seasons are caused by Earth's axis tilt of about 23.5 degrees, so in July the Northern Hemisphere points toward the Sun.", marks: 1, markCode: "R" },
              { reasoning: "Sunlight is more direct and days are longer in summer, so more energy is received per area, and the Southern Hemisphere has winter at the same time.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The claim is wrong: Earth is farthest from the Sun in July, yet it is summer in the north. Tilt causes seasons through more direct sunlight and longer days.",
            commonErrors: ["Agreeing with the claim based on everyday experience of heat sources.", "Saying the tilt moves Earth closer to the Sun."],
            examinerNote: "R1 claim rejected. B1 uses both distances and months. R1 tilt. B1 direct sunlight / day length / opposite hemispheres. Allow 'Southern Hemisphere has winter in December although Earth is closest to the Sun'.",
          },
        },
        {
          id: "s8-u3-sun-earth-moon-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student uses a lamp (the Sun), a foam ball (the Moon) and her head (Earth) to model moon phases. She holds the ball at arm's length and turns slowly in a circle. Half of the ball is always lit by the lamp.",
          parts: [
            { label: "a", prompt: "State which phase of the Moon is seen when the Moon is between the Sun and Earth.", marks: 1 },
            { label: "b", prompt: "The Moon takes about 29.5 days to complete its cycle of phases. Calculate the approximate time from new moon to the next full moon.", marks: 2 },
            { label: "c", prompt: "Explain why a solar eclipse does not happen at every new moon.", marks: 3 },
            { label: "d", prompt: "Explain why, during a lunar eclipse, the Moon may appear dark red rather than disappearing completely. Use ideas about Earth's atmosphere.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon phases", statement: "Half the Moon is always lit; the phase depends on how much of the lit half faces Earth." },
              { kind: "principle", name: "Eclipses", statement: "A solar eclipse needs Sun, Moon and Earth in a straight line with the Moon in the middle." },
            ],
            steps: [
              { part: "a", reasoning: "When the Moon is between the Sun and Earth, the lit side faces away from Earth.", working: "\\text{new moon}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "New moon to full moon is half a full cycle.", working: "\\frac{29.5}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "14.75\\approx15\\text{ days}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The Moon's orbit is tilted about 5 degrees compared with Earth's orbit around the Sun.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Most months the new moon passes above or below the line between the Sun and Earth, so its shadow misses Earth.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "An eclipse happens only when the three bodies are exactly in line, which is rare.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Earth's atmosphere bends (refracts) some sunlight around the edges of Earth into its shadow.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Blue light is scattered out, and red light passes through more easily.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The red light that reaches the Moon is reflected back, so the Moon looks dark red.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) New moon (b) About 14.75 days (about 15 days) (c) The Moon's orbit is tilted, so the three bodies are rarely in a straight line (d) Earth's atmosphere bends red light into the shadow, which lights the Moon dimly.",
            commonErrors: ["In (a) answering full moon.", "In (c) saying Earth's shadow blocks the Sun at new moon.", "In (b) using 29.5 days."],
            examinerNote: "(a) New moon; reject crescent. (b) Allow 14-15 days. (c) Allow 'Moon's orbit is on a different plane'. (d) Allow 'atmosphere refracts / scatters sunlight onto the Moon'.",
          },
        },
      ],
    },
    {
      id: "s8-u3-gravity-scale-time",
      title: "Gravity, scale and the geologic time scale",
      skill: "Explain the role of gravity in orbits, compare scales of solar system objects, and interpret the geologic time scale.",
      lesson: {
        sections: [
          {
            heading: "Gravity and scale",
            body: "**Gravity** is an attractive force between all objects with mass. It grows with the masses of the objects and gets weaker as the distance between them increases. If the distance doubles, the force becomes one quarter as large.\n\nThe Sun contains about 99.8% of the mass in the solar system, so its gravity holds the planets in orbit. Gravity also holds moons around planets, and holds billions of stars together in a **galaxy**. Our galaxy is the Milky Way, and the solar system is one small part of it.\n\nThe solar system has huge differences in scale. The Sun is about 109 times wider than Earth. Light from the Sun takes about 8.3 minutes to reach Earth, but light from the next nearest star takes more than 4 years.",
          },
          {
            heading: "The geologic time scale",
            body: "Earth is about **4.6 billion years** old. Scientists divide this time into eons, eras and periods using changes in rock layers and fossils. Dating rocks and fossils with radioactive decay gives ages in years.\n\nMost of Earth's history is very long ago. Single-celled life appeared early, but animals with hard shells appeared only about 540 million years ago. Dinosaurs went extinct about 66 million years ago. Modern humans appeared only about 300,000 years ago, a tiny fraction of the total.\n\nA scale model helps show this. If 1 meter stands for 100 million years, Earth's history is a 46 meter line.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Force increases with greater mass and decreases with greater distance" },
          { name: "Distance doubled", statement: "Gravitational force becomes $\\frac{1}{4}$ of the original" },
          { name: "Age of Earth", statement: "About 4.6 billion years" },
        ],
        workedExample: {
          problem: "On a scale where 1 meter equals 100 million years, how far from the start of the 46 meter line did the dinosaurs go extinct (66 million years ago)?",
          solution: "The dinosaurs went extinct 66 million years before today, which is $66 \\div 100 = 0.66$ m from the end of the line. From the start (4.6 billion years ago) it is $46 - 0.66 = 45.34$ m.",
        },
      },
      questions: [
        {
          id: "s8-u3-gravity-scale-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force keeps the planets in orbit around the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air resistance" },
              { id: "b", text: "Magnetism" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Friction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity", statement: "Gravity is an attractive force between objects with mass; the Sun's gravity holds the planets in orbit." },
            ],
            steps: [
              { reasoning: "The Sun's gravitational pull keeps the planets in curved paths.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gravity",
            commonErrors: ["Choosing (a): the Sun's magnetic force is not what holds the planets in orbit.", "Choosing (d): space is nearly a vacuum."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "s8-u3-gravity-scale-time-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The Sun is about $1.5\\times10^{8}$ km from Earth. Light travels at $3.0\\times10^{5}$ km/s.\n\nCalculate how many minutes light takes to travel from the Sun to Earth. Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Travel time", answer: 8.3, tolerance: 0.05, unit: "minutes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}}$" },
            ],
            steps: [
              { reasoning: "Divide distance by speed to get time in seconds.", working: "t=\\frac{1.5\\times10^{8}}{3.0\\times10^{5}}=500\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Convert seconds to minutes by dividing by 60.", working: "\\frac{500}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 1 decimal place.", working: "8.33\\ldots\\approx8.3\\text{ minutes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.3$ minutes",
            commonErrors: ["Multiplying distance by speed.", "Leaving the answer as 500 without converting to minutes."],
            examinerNote: "M1 distance / speed. M1 / 60. A1 8.3. Allow 500 s as the first step. Allow ecf.",
          },
        },
        {
          id: "s8-u3-gravity-scale-time-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A teacher makes a scale model of Earth's history in which **1 meter represents 100 million years**.\n\nModern humans have existed for about 300 000 years. Calculate the length that represents the history of modern humans on this model. Give your answer in millimeters.",
          response: { type: "numeric", parts: [{ label: "Length", answer: 3, unit: "mm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scale", statement: "model length = real time $\\div$ time per meter" },
            ],
            steps: [
              { reasoning: "Divide the real time by the time that each meter represents.", working: "\\frac{300\\,000}{100\\,000\\,000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in meters.", working: "0.003\\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Convert meters to millimeters by multiplying by 1000.", working: "0.003\\times1000=3\\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ mm",
            commonErrors: ["Giving 0.003 without converting to millimeters.", "Dividing by 1000 instead of multiplying when converting to millimeters."],
            examinerNote: "M1 300000 / 100000000 (oe). A1 0.003 m. A1 3 mm. Award full marks for 3.",
          },
        },
        {
          id: "s8-u3-gravity-scale-time-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Sun has a diameter of about 1 400 000 km and Earth has a diameter of about 12 800 km. The Sun holds about 99.8% of the mass of the solar system.",
          parts: [
            { label: "a", prompt: "State **two** factors that affect the strength of the gravitational force between two objects.", marks: 2 },
            { label: "b", prompt: "The gravitational force between Earth and the Moon is $F$. State the force if the distance between them were doubled and the masses stayed the same.", marks: 2 },
            { label: "c", prompt: "Calculate how many Earth diameters would fit across the Sun. Give your answer to the nearest whole number.", marks: 2 },
            { label: "d", prompt: "Explain why the planets orbit the Sun rather than the Sun orbiting a planet, and why they do not fly off into space.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity", statement: "Gravitational force increases with mass and decreases as distance increases; doubling the distance gives one quarter of the force." },
              { kind: "formula", name: "Ratio", statement: "number of Earths = Sun diameter $\\div$ Earth diameter" },
            ],
            steps: [
              { part: "a", reasoning: "The masses of the objects.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The distance between the objects.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Doubling the distance makes the force weaker by a factor of $2^2$.", working: "F\\times\\frac{1}{2^2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The new force is one quarter of the original.", working: "\\frac{F}{4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the Sun's diameter by Earth's diameter.", working: "\\frac{1\\,400\\,000}{12\\,800}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round (109.375).", working: "\\approx109", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The Sun has about 99.8% of the solar system's mass, so it has by far the strongest gravity.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Its gravity pulls the planets toward it, so the planets orbit the Sun.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The planets keep moving sideways, and the Sun's gravity continuously pulls them into a curved path, so they do not leave in a straight line.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Mass and distance (b) $\\frac{F}{4}$ (c) About 109 (d) The Sun has almost all the mass and the strongest gravity, which pulls planets into curved orbits around it.",
            commonErrors: ["In (b) answering F/2.", "In (c) dividing Earth by Sun, or using radius for one and diameter for the other.", "In (d) saying the planets are held by the Sun's heat or by magnetism."],
            examinerNote: "(a) Reject size or density alone. (b) Allow 25% of F or 0.25F. (c) Allow 109 only; accept 109.4 with M1 A1 if rounded later. (d) Allow 'the Sun is most massive' for the first mark.",
          },
        },
      ],
    },
  ],
};
