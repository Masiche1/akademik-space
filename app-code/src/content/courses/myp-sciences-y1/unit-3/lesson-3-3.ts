import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "myps1-u3-lesson-3-3",
  code: "3-3",
  title: "Earth and Space",
  goal: "I CAN describe the solar system, explain day, night, years and seasons, and explain the phases of the Moon, eclipses and orbits using gravity.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Criterion C: Processing and evaluating",
    "Key concept: Systems",
    "Related concept: Movement",
    "Global context: Orientation in space and time",
  ],
  vocabulary: [
    { term: "Solar system", definition: "The Sun and all the objects that orbit it, including the planets, moons, asteroids and comets." },
    { term: "Orbit", definition: "The curved path of an object around a star, planet or moon, held in place by gravity." },
    { term: "Axis", definition: "The imaginary line through the North and South Poles about which the Earth spins. It is tilted at about $23.5^\\circ$." },
    { term: "Rotation", definition: "The spinning of an object about its own axis. The Earth rotates once in 24 hours." },
    { term: "Revolution", definition: "One complete orbit of an object around another. The Earth takes about 365.25 days to orbit the Sun." },
    { term: "Eclipse", definition: "When one object moves into the shadow of another, blocking light from the Sun." },
    { term: "Gravity", definition: "The force of attraction between all objects with mass. It is stronger for larger masses and weaker as distance increases." },
  ],
  concepts: [
    {
      id: "myps1-u3-solar-system-seasons",
      title: "The solar system, day and night, and seasons",
      skill: "Describe the solar system and explain day and night, the length of a year and the seasons from the tilt of Earth's axis.",
      lesson: {
        sections: [
          {
            heading: "The solar system",
            body: "The **Sun** is a star at the centre of our solar system. Eight planets orbit it. In order from the Sun they are: Mercury, Venus, Earth, Mars (the **rocky planets**), then Jupiter, Saturn, Uranus and Neptune (the **gas and ice giants**). Between Mars and Jupiter is the asteroid belt. Moons orbit planets. The Moon orbits the Earth.\n\nThe planets are held in orbit by the Sun's **gravity**. Planets further from the Sun take longer to complete one orbit.",
          },
          {
            heading: "Day, night and years",
            body: "The Earth **rotates** about its axis once every 24 hours. The half of the Earth facing the Sun has **day**, and the half facing away has **night**. From Earth, the Sun appears to move across the sky, but it is the Earth's rotation that causes this.\n\nThe Earth also **orbits** the Sun. One complete orbit takes about $365\\frac{1}{4}$ days, which is one **year**. We add an extra day (29 February) every four years to keep the calendar in step.",
          },
          {
            heading: "Seasons",
            body: "The Earth's axis is tilted at about $23.5^\\circ$ and always points in the same direction in space as the Earth orbits.\n\n- When the **northern** hemisphere is tilted towards the Sun, it receives more direct sunlight and longer days, so it has **summer**. At the same time the southern hemisphere has winter.\n- Six months later the northern hemisphere is tilted away from the Sun, so sunlight is more spread out and days are shorter. It has **winter**.\n\nSeasons are caused by the **tilt** of the axis, not by the Earth being closer to or further from the Sun.",
          },
        ],
        keyFormulas: [
          { name: "Day and night", statement: "One rotation of the Earth takes 24 hours" },
          { name: "Year", statement: "One orbit of the Sun takes about 365.25 days" },
          { name: "Seasons", statement: "Caused by the tilt of Earth's axis ($23.5^\\circ$), not by distance from the Sun" },
        ],
        workedExample: {
          problem: "It is summer in Australia (southern hemisphere). Explain what season it is in Canada (northern hemisphere) and why.",
          solution: "It is winter in Canada. When the southern hemisphere is tilted towards the Sun, the northern hemisphere is tilted away from it. Sunlight there hits the surface at a lower angle and is more spread out, and days are shorter, so it is colder.",
        },
      },
      questions: [
        {
          id: "myps1-u3-solar-system-seasons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun moving around the Earth" },
              { id: "b", text: "The Moon blocking light from the Sun" },
              { id: "c", text: "The Earth orbiting the Sun once a year" },
              { id: "d", text: "The Earth rotating on its axis once every 24 hours" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rotation of the Earth", statement: "The Earth spins about its axis once every 24 hours, so each place faces the Sun and then faces away." },
            ],
            steps: [
              { reasoning: "As the Earth rotates, a place on its surface moves from the sunlit half into the dark half, giving day and then night.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The Earth rotating on its axis once every 24 hours",
            commonErrors: ["Choosing the orbit, which causes the length of the year, not day and night.", "Thinking that the Sun moves around the Earth."],
            examinerNote: "B1 for rotation of the Earth (on its axis).",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "One orbit of the Earth around the Sun takes 365.25 days.\n\nCalculate the total number of days in 4 orbits.",
          response: { type: "numeric", parts: [{ label: "Total days in 4 years", answer: 1461, unit: "days" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Year", statement: "One year is one orbit of the Earth around the Sun, about 365.25 days." },
            ],
            steps: [
              { reasoning: "Four years means four orbits. Multiply the days in one orbit by 4.", working: "365.25 \\times 4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. This is why one extra day is needed every four years (4 x 365 = 1460 plus 1 leap day).", working: "1461\\text{ days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1461$ days",
            commonErrors: ["Multiplying by 365 only to get 1460.", "Confusing orbits with rotations."],
            examinerNote: "M1 for 365.25 x 4 (oe). A1 for 1461.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student says: \"It is hot in summer because the Earth is closer to the Sun in summer.\"\n\nExplain why the student is wrong and describe the real cause of the seasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tilted axis", statement: "The Earth's axis is tilted at about $23.5^\\circ$ and points the same way during the orbit, so the hemispheres take turns tilting towards the Sun." },
            ],
            steps: [
              { reasoning: "The student is wrong: when it is summer in the northern hemisphere it is winter in the southern hemisphere, but both are the same distance from the Sun.", marks: 1, markCode: "R" },
              { reasoning: "The real cause is the tilt of the Earth's axis ($23.5^\\circ$).", marks: 1, markCode: "B" },
              { reasoning: "In summer the hemisphere is tilted towards the Sun, so sunlight is more direct (concentrated) over a smaller area.", marks: 1, markCode: "B" },
              { reasoning: "Days are also longer in summer, so there is more time for the ground to warm up.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The two hemispheres have opposite seasons at the same time, so distance cannot be the cause; the tilt of the axis makes sunlight more direct and days longer in summer.",
            commonErrors: ["Believing the Earth is closest to the Sun in summer (in fact the Earth is closest in early January).", "Saying that the tilt changes direction during the year."],
            examinerNote: "R1 for opposite seasons / same distance. B1 for tilt of the axis. B1 for more direct / concentrated sunlight. B1 for longer days. Allow 'the Sun is higher in the sky' for direct sunlight.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mercury is the planet closest to the Sun. It orbits the Sun once every 88 Earth days. Neptune is the furthest planet and orbits the Sun once every 60 000 Earth days (about 165 Earth years). A student plans to investigate whether the time for one orbit depends on the distance from the Sun.",
          parts: [
            { label: "a", prompt: "State the force that keeps the planets in orbit around the Sun.", marks: 1 },
            { label: "b", prompt: "Calculate how many times Mercury orbits the Sun in 352 Earth days.", marks: 2 },
            { label: "c", prompt: "Write a hypothesis for the student's investigation, with a scientific reason.", marks: 2 },
            { label: "d", prompt: "The student has data for all eight planets. State the independent variable and the dependent variable.", marks: 2 },
            { label: "e", prompt: "Explain why there are no seasons caused by tilt on a planet whose axis is not tilted.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity", statement: "The Sun's gravity pulls the planets towards it and keeps them in orbit." },
              { kind: "principle", name: "Orbits and distance", statement: "Planets further from the Sun have a longer path to travel and a weaker gravitational pull, so they take longer to orbit." },
              { kind: "skill", name: "Variables", statement: "The independent variable is changed or chosen; the dependent variable is measured." },
            ],
            steps: [
              { part: "a", reasoning: "The force is gravity (the Sun's gravitational attraction).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the total time by the time for one orbit.", working: "\\frac{352}{88}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "4\\text{ orbits}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Prediction: the further a planet is from the Sun, the longer its orbit takes.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Reason: the planet has further to travel to go round the Sun, and the Sun's gravity is weaker at a greater distance so the planet moves more slowly.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Independent variable: the distance of the planet from the Sun.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Dependent variable: the time taken for one orbit.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Seasons depend on the hemisphere being tilted towards or away from the Sun at different times of the year.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "With no tilt, both hemispheres receive the same amount of sunlight all year and day length stays constant, so there would be no seasons.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Gravity (b) 4 orbits (c) Further from the Sun means a longer orbit time because of a longer path and weaker gravity (d) Independent: distance from the Sun; dependent: orbit time (e) No tilt means no change in sunlight received during the year.",
            commonErrors: ["Naming magnetism or air pressure as the force.", "Reversing the independent and dependent variables.", "Multiplying 352 by 88."],
            examinerNote: "(a) Reject 'weight' unless linked to the Sun. (b) Allow ecf for A1 only if the division is shown. (c) Allow a hypothesis in the form 'If ... then ... because ...'. (d) Allow 'orbital period' for orbit time.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is one **year** on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The time for the Earth to orbit the Sun once" },
              { id: "b", text: "The time for the Sun to move across the sky once" },
              { id: "c", text: "The time for the Moon to orbit the Earth once" },
              { id: "d", text: "The time for the Earth to spin once on its axis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Year", statement: "One year is one complete orbit of the Earth around the Sun, taking about 365.25 days." },
            ],
            steps: [
              { reasoning: "A year is the time for one orbit of the Earth around the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The time for the Earth to orbit the Sun once",
            commonErrors: ["Confusing a year (orbit) with a day (rotation)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which planet is closest to the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mercury" },
              { id: "b", text: "Mars" },
              { id: "c", text: "Venus" },
              { id: "d", text: "Earth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solar system", statement: "The planets in order from the Sun are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune." },
            ],
            steps: [
              { reasoning: "Mercury is the first planet from the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mercury",
            commonErrors: ["Choosing Venus, which is second."],
            examinerNote: "B1 for Mercury.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Jupiter, Saturn, Uranus and Neptune are grouped together as the **gas and ice giants**. What do they have in common compared with the rocky planets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the four outer planets and are much larger" },
              { id: "b", text: "They are all closer to the Sun" },
              { id: "c", text: "They are all smaller than Earth" },
              { id: "d", text: "They have no moons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Planets", statement: "Mercury to Mars are the rocky inner planets; Jupiter to Neptune are the large gas and ice giants of the outer solar system." },
            ],
            steps: [
              { reasoning: "The gas and ice giants are the four outer planets and are much larger than the rocky planets.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They are the four outer planets and are much larger",
            commonErrors: ["Thinking the giants are smaller or closer to the Sun."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why it is daytime at your location right now but night-time on the opposite side of the Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rotation of the Earth", statement: "The Earth rotates once every 24 hours, so the half facing the Sun has day and the half facing away has night." },
            ],
            steps: [
              { reasoning: "The Earth is a sphere, so only half of it faces the Sun at any moment.", marks: 1, markCode: "B" },
              { reasoning: "Your location is on the sunlit half (day), while the opposite side is on the dark half facing away from the Sun (night).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Only half of the Earth faces the Sun; your location is in the sunlit half while the opposite side is in darkness.",
            commonErrors: ["Saying the Sun moves around the Earth.", "Saying the whole Earth is lit at once."],
            examinerNote: "B1 for half faces Sun. R1 for linking your location to day and opposite side to night.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main cause of the seasons on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon blocking more sunlight in winter" },
              { id: "b", text: "The Earth spinning faster in summer" },
              { id: "c", text: "The Earth being closer to the Sun in summer" },
              { id: "d", text: "The tilt of the Earth's axis at about $23.5^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tilted axis", statement: "Seasons are caused by the tilt of the Earth's axis ($23.5^\\circ$), not by distance from the Sun." },
            ],
            steps: [
              { reasoning: "The tilt of the axis changes how directly sunlight strikes each hemisphere during the year, causing the seasons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The tilt of the Earth's axis at about $23.5^\\circ$",
            commonErrors: ["Choosing distance from the Sun, which is the common misconception."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When it is summer in the northern hemisphere, what season is it in the southern hemisphere, and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tilted axis", statement: "When one hemisphere is tilted towards the Sun it has summer while the other, tilted away, has winter." },
            ],
            steps: [
              { reasoning: "It is winter in the southern hemisphere.", marks: 1, markCode: "B" },
              { reasoning: "Because the tilted axis means the two hemispheres lean in opposite directions: when the north tilts towards the Sun the south tilts away, so it gets less direct sunlight and shorter days.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Winter, because the southern hemisphere is tilted away from the Sun while the northern hemisphere is tilted towards it.",
            commonErrors: ["Saying it is also summer in the south.", "Explaining with distance from the Sun."],
            examinerNote: "B1 for winter. R1 for tilt towards/away explanation.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Earth rotates once every $24$ hours.\n\nCalculate the time taken for $6$ complete rotations.",
          response: { type: "numeric", parts: [{ label: "Time for 6 rotations", answer: 144, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation", statement: "The Earth rotates once on its axis every 24 hours." },
            ],
            steps: [
              { reasoning: "Multiply the time for one rotation by 6.", working: "24 \\times 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "144\\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$144$ hours",
            commonErrors: ["Dividing 24 by 6.", "Giving the answer in days without converting."],
            examinerNote: "M1 for 24 x 6. A1 for 144 hours (accept 6 days).",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A planet takes $200$ Earth days to orbit the Sun once.\n\nCalculate how many complete orbits the planet makes in $1000$ Earth days.",
          response: { type: "numeric", parts: [{ label: "Number of orbits", answer: 5, unit: "orbits" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Orbit", statement: "An orbit is one complete path around a star or planet." },
            ],
            steps: [
              { reasoning: "Divide the total time by the time for one orbit.", working: "\\frac{1000}{200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5\\text{ orbits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ orbits",
            commonErrors: ["Multiplying 1000 by 200.", "Giving 1000/200 = 500."],
            examinerNote: "M1 for 1000/200. A1 for 5.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "One orbit of the Earth takes $365.25$ days. Mercury orbits the Sun once every $88$ days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Days in 2 Earth orbits", answer: 730.5, unit: "days" },
              { label: "Days in 8 Earth orbits", answer: 2922, unit: "days" },
              { label: "Number of Mercury orbits in 528 days", answer: 6, unit: "orbits" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Year", statement: "One year is one orbit of the Earth around the Sun, about 365.25 days." },
            ],
            steps: [
              { reasoning: "Multiply days per orbit by 2.", working: "365.25 \\times 2 = 730.5\\text{ days}", marks: 1, markCode: "M" },
              { reasoning: "Multiply days per orbit by 8.", working: "365.25 \\times 8 = 2922\\text{ days}", marks: 1, markCode: "M" },
              { reasoning: "Divide the total time by Mercury's orbit time.", working: "\\frac{528}{88} = 6\\text{ orbits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$730.5$ days, $2922$ days, $6$ orbits",
            commonErrors: ["Using 365 instead of 365.25.", "Dividing 88 by 528 for the Mercury part."],
            examinerNote: "M1 for each multiplication/division. A1 for 6.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The Earth rotates once every $24$ hours and orbits the Sun once every $365.25$ days. The Moon orbits the Earth once every $27$ days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Hours in 10 complete rotations", answer: 240, unit: "hours" },
              { label: "Days in half an orbit around the Sun", answer: 182.625, unit: "days" },
              { label: "Number of Moon orbits in 135 days", answer: 5, unit: "orbits" },
              { label: "Extra days gained in 400 years of 365 days each", answer: 100, unit: "days" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation", statement: "One rotation of the Earth takes 24 hours." },
              { kind: "definition", name: "Year", statement: "One orbit of the Earth takes about 365.25 days; this is why a leap day is added periodically." },
            ],
            steps: [
              { reasoning: "Multiply 24 hours by 10.", working: "24 \\times 10 = 240\\text{ hours}", marks: 1, markCode: "M" },
              { reasoning: "Divide the orbit time by 2.", working: "\\frac{365.25}{2} = 182.625\\text{ days}", marks: 1, markCode: "M" },
              { reasoning: "Divide 135 days by the Moon's orbit time.", working: "\\frac{135}{27} = 5\\text{ orbits}", marks: 1, markCode: "M" },
              { reasoning: "Each year is 0.25 day longer than 365 days, so in 400 years the total extra is $0.25 \\times 400$.", working: "0.25 \\times 400 = 100\\text{ days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$240$ hours, $182.625$ days, $5$ orbits, $100$ days",
            commonErrors: ["Multiplying 365.25 by 2 for the half-orbit part.", "Using 365.25 instead of 365 for the leap-day calculation."],
            examinerNote: "M1 for each correct method. A1 for 100 days (the leap-day reasoning). Allow 182.6 days.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the Sun appears to move across the sky from east to west during the day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rotation of the Earth", statement: "The Earth rotates once every 24 hours, which makes the Sun appear to move across the sky." },
            ],
            steps: [
              { reasoning: "The Sun does not actually move across the sky; the Earth is rotating on its axis.", marks: 1, markCode: "R" },
              { reasoning: "As the Earth spins, our location turns towards the Sun (morning) and then away from it (evening).", marks: 1, markCode: "B" },
              { reasoning: "From our point of view the Sun therefore seems to rise in the east and set in the west.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The Earth rotates on its axis once every 24 hours, so the Sun appears to move across the sky from east to west.",
            commonErrors: ["Saying the Sun moves around the Earth.", "Conflating this with the yearly orbit."],
            examinerNote: "R1 for Sun does not move / Earth rotates. B1 for turning towards/away from Sun. R1 for apparent east-to-west motion.",
          },
        },
        {
          id: "myps1-u3-solar-system-seasons-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student makes a model of the solar system and wants to explain how it works to a younger class.",
          parts: [
            { label: "a", prompt: "List the four rocky planets and the four gas and ice giants.", marks: 2 },
            { label: "b", prompt: "State the force that keeps the planets in orbit around the Sun.", marks: 1 },
            { label: "c", prompt: "Explain why planets further from the Sun take longer to complete one orbit.", marks: 2 },
            { label: "d", prompt: "Explain the difference between the Earth's rotation and its revolution (orbit).", marks: 2 },
            { label: "e", prompt: "Explain why it is summer in Australia when it is winter in Europe.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity", statement: "The Sun's gravity pulls the planets towards it and keeps them in orbit." },
              { kind: "principle", name: "Orbits and distance", statement: "Planets further from the Sun have further to travel and a weaker gravitational pull, so they take longer to orbit." },
              { kind: "principle", name: "Tilted axis", statement: "Seasons are caused by the tilt of the Earth's axis; the two hemispheres have opposite seasons." },
            ],
            steps: [
              { part: "a", reasoning: "Rocky planets: Mercury, Venus, Earth, Mars.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Gas and ice giants: Jupiter, Saturn, Uranus, Neptune.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Gravity (the Sun's gravitational attraction).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Planets further away have a much longer path to travel around the Sun.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The Sun's gravity is also weaker at greater distances, so the planet moves more slowly, making the orbit longer still.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Rotation is the Earth spinning on its axis once every 24 hours, causing day and night.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Revolution is the Earth orbiting the Sun once every 365.25 days, causing the changing seasons and constellations.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Australia is in the southern hemisphere; when it is tilted towards the Sun it has summer.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Europe is in the northern hemisphere, which is tilted away at the same time, so it has winter.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Rocky: Mercury, Venus, Earth, Mars; giants: Jupiter, Saturn, Uranus, Neptune (b) Gravity (c) Longer path and weaker gravity at greater distance (d) Rotation = spin on axis (day/night); revolution = orbit of Sun (year) (e) Southern hemisphere tilted towards Sun while northern is tilted away.",
            commonErrors: ["Swapping rotation and revolution.", "In (e) giving the distance-from-Sun explanation."],
            examinerNote: "(a) B1 for each correct group of four. (c) Allow 'weaker gravity' alone for 1 mark plus path for second. (e) Accept 'opposite hemispheres' oe.",
          },
        },
      ],
    },
    {
      id: "myps1-u3-moon-eclipses-gravity",
      title: "Phases of the Moon, eclipses, gravity and orbits",
      skill: "Explain the phases of the Moon and eclipses, and describe how gravity keeps objects in orbit.",
      lesson: {
        sections: [
          {
            heading: "Phases of the Moon",
            body: "The Moon does not make its own light; it **reflects** sunlight. Half of the Moon is always lit by the Sun. As the Moon orbits the Earth (about every 27 days), we see different amounts of its lit half. This gives the **phases**: new Moon (we see none of the lit side), waxing crescent, first quarter, waxing gibbous, full Moon (we see all of the lit side), then waning back to a new Moon.\n\nThe cycle of phases takes about $29.5$ days, slightly longer than one orbit, because the Earth is also moving round the Sun. The phases are **not** caused by the Earth's shadow.",
          },
          {
            heading: "Eclipses",
            body: "An **eclipse** happens when the Sun, Moon and Earth line up.\n\n- **Solar eclipse**: the Moon passes between the Sun and the Earth at new Moon. The Moon's shadow falls on a small part of the Earth, and people there see the Sun blocked.\n- **Lunar eclipse**: the Earth is between the Sun and the Moon at full Moon. The Moon moves into the Earth's shadow and looks dim and reddish.\n\nEclipses do not happen every month because the Moon's orbit is tilted by about $5^\\circ$ compared with the Earth's orbit, so the three bodies are usually not exactly in line.",
          },
          {
            heading: "Gravity and orbits",
            body: "**Gravity** is an attractive force between all objects with mass. It is bigger when the masses are bigger and smaller when the objects are further apart. It is a non-contact force.\n\nAn orbit is the result of gravity pulling a moving object sideways towards a larger one. The Moon moves forwards while Earth's gravity pulls it inwards, so it follows a curved path instead of flying off in a straight line. Satellites orbit the Earth in the same way. Gravitational field strength on a planet, $g$, depends on its mass and size, so weight changes ($W = mg$) while mass stays the same.",
          },
        ],
        keyFormulas: [
          { name: "Moon phases", statement: "Caused by seeing different amounts of the lit half of the Moon as it orbits the Earth" },
          { name: "Gravity", statement: "Stronger for larger masses and weaker for greater distances" },
          { name: "Weight", statement: "$W = mg$" },
        ],
        workedExample: {
          problem: "A person has a mass of $50\\ \\text{kg}$. On Mars, $g = 3.7\\ \\text{N/kg}$. Calculate the person's weight on Mars.",
          solution: "$W = mg = 50 \\times 3.7 = 185\\ \\text{N}$. Gravity on Mars is weaker than on Earth, so the weight is smaller, but the mass is still $50\\ \\text{kg}$.",
        },
      },
      questions: [
        {
          id: "myps1-u3-moon-eclipses-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During a **solar eclipse**, which object is between the other two?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A planet is between the Sun and the Earth" },
              { id: "b", text: "The Moon is between the Sun and the Earth" },
              { id: "c", text: "The Sun is between the Earth and the Moon" },
              { id: "d", text: "The Earth is between the Sun and the Moon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solar eclipse", statement: "A solar eclipse happens when the Moon passes between the Sun and the Earth and its shadow falls on the Earth." },
            ],
            steps: [
              { reasoning: "The Moon blocks sunlight from reaching part of the Earth, so the Moon must be in the middle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The Moon is between the Sun and the Earth",
            commonErrors: ["Choosing the Earth in the middle, which describes a lunar eclipse."],
            examinerNote: "B1 for Moon between Sun and Earth.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student has a mass of $40\\ \\text{kg}$. On Jupiter the gravitational field strength is $25\\ \\text{N/kg}$.\n\nCalculate the student's weight on Jupiter.",
          response: { type: "numeric", parts: [{ label: "Weight on Jupiter", answer: 1000, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute the mass and Jupiter's gravitational field strength.", working: "W = 40 \\times 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "W = 1000\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1000\\ \\text{N}$",
            commonErrors: ["Dividing 40 by 25 to get 1.6.", "Giving the answer in kilograms."],
            examinerNote: "M1 for 40 x 25 (oe). A1 for 1000 N.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe and explain why we see a **full Moon** when the Moon is on the opposite side of the Earth from the Sun.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon phases", statement: "The Moon reflects sunlight and half of it is always lit. The phase depends on how much of the lit half faces the Earth." },
            ],
            steps: [
              { reasoning: "The Moon does not produce its own light; it reflects light from the Sun.", marks: 1, markCode: "B" },
              { reasoning: "Half of the Moon is always lit by the Sun, the half that faces the Sun.", marks: 1, markCode: "B" },
              { reasoning: "When the Moon is on the opposite side of the Earth from the Sun, the lit half faces the Earth.", marks: 1, markCode: "B" },
              { reasoning: "So we see the whole lit face as a full circle: a full Moon.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The Moon reflects sunlight; half is lit; when the Earth is between the Sun and the Moon the lit half faces us, giving a full Moon.",
            commonErrors: ["Saying the Earth's shadow causes the phases.", "Saying that the Moon makes its own light."],
            examinerNote: "B1 for reflects sunlight. B1 for half is lit. B1 for lit half facing the Earth. R1 for seeing all of the lit side / full circle. Reject 'the Earth's shadow covers the Moon' for a full Moon.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Moon orbits the Earth once every 27 days. The cycle of the Moon's phases (from one new Moon to the next) takes about 29.5 days. Light from the Sun takes about 500 seconds to reach the Earth. The speed of light is $300\\,000\\ \\text{km/s}$. An astronaut with mass $80\\ \\text{kg}$ travels to the Moon, where $g = 1.6\\ \\text{N/kg}$.",
          parts: [
            { label: "a", prompt: "Calculate the distance from the Sun to the Earth in kilometres using distance = speed x time.", marks: 2 },
            { label: "b", prompt: "Calculate the astronaut's weight on the Moon.", marks: 2 },
            { label: "c", prompt: "Explain why a lunar eclipse does not happen every month, although there is a full Moon every month.", marks: 2 },
            { label: "d", prompt: "Explain why the Moon stays in orbit around the Earth instead of moving off in a straight line.", marks: 2 },
            { label: "e", prompt: "State how the astronaut's mass on the Moon compares with the mass on Earth.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$\\text{distance}=\\text{speed}\\times\\text{time}$" },
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "law", name: "Gravity and orbits", statement: "Gravity pulls a moving object towards a larger mass, bending its path into an orbit." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the speed of light by the time.", working: "300\\,000 \\times 500", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "150\\,000\\,000\\text{ km}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into $W = mg$.", working: "W = 80 \\times 1.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "W = 128\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The Moon's orbit is tilted compared with the Earth's orbit around the Sun.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So at most full Moons the Moon passes above or below the Earth's shadow and the Sun, Earth and Moon are not exactly in line.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The Earth's gravity pulls the Moon towards the Earth.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The Moon is also moving sideways, so the pull bends its path into a curve around the Earth instead of a straight line.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The mass is the same, $80\\ \\text{kg}$, because mass does not change with location.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $150\\,000\\,000\\ \\text{km}$ (b) $128\\ \\text{N}$ (c) The Moon's orbit is tilted, so the three bodies are usually not lined up (d) Earth's gravity pulls the Moon inwards while it moves sideways, curving its path (e) The same, $80\\ \\text{kg}$.",
            commonErrors: ["Dividing speed by time in (a).", "Giving 80 kg as the weight in (b).", "In (c) saying the Moon is too far away to enter the shadow.", "In (e) giving a smaller mass because the astronaut 'feels lighter'."],
            examinerNote: "(a) Allow 1.5 x 10^8 km. (b) Allow ecf for A1. (c) Allow 'Moon's orbit is at an angle' oe. (d) Allow 'gravity keeps it moving in a curve' oe. (e) B1 for 80 kg.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the light that we see from the Moon come from?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Earth's shadow lighting the Moon" },
              { id: "b", text: "The Moon makes its own light like a star" },
              { id: "c", text: "Light from cities on Earth" },
              { id: "d", text: "The Moon reflects light from the Sun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon phases", statement: "The Moon does not make its own light; it reflects sunlight." },
            ],
            steps: [
              { reasoning: "The Moon is not a star; it reflects sunlight towards the Earth.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The Moon reflects light from the Sun",
            commonErrors: ["Thinking the Moon makes its own light."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During a **lunar eclipse**, which object is between the other two?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Earth is between the Sun and the Moon" },
              { id: "b", text: "The Moon is between the Sun and the Earth" },
              { id: "c", text: "The Sun is between the Earth and the Moon" },
              { id: "d", text: "The Moon is between the Earth and the Sun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lunar eclipse", statement: "A lunar eclipse happens when the Earth is between the Sun and the Moon and the Moon moves into the Earth's shadow." },
            ],
            steps: [
              { reasoning: "The Earth's shadow falls on the Moon, so the Earth must be in the middle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The Earth is between the Sun and the Moon",
            commonErrors: ["Choosing the Moon in the middle, which describes a solar eclipse."],
            examinerNote: "B1 for Earth between Sun and Moon.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why eclipses do not happen every month, even though there is a new Moon and a full Moon every month.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eclipses", statement: "Eclipses need the Sun, Moon and Earth to line up exactly, but the Moon's orbit is tilted about $5^\\circ$, so they are usually not in line." },
            ],
            steps: [
              { reasoning: "For an eclipse the Sun, Moon and Earth must be almost exactly in line so that one object's shadow can fall on another.", marks: 1, markCode: "B" },
              { reasoning: "The Moon's orbit is tilted by about $5^\\circ$ compared with the Earth's orbit, so at most new and full Moons the Moon passes above or below the line and no eclipse occurs.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Eclipses need perfect alignment, but the Moon's orbit is tilted about $5^\\circ$, so the three bodies are usually not in line.",
            commonErrors: ["Saying eclipses happen at random times.", "Ignoring the tilt of the Moon's orbit."],
            examinerNote: "B1 for alignment needed. R1 for tilted orbit / passes above or below shadow.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State **two** factors that affect the strength of the gravitational force between two objects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gravity", statement: "Gravity is an attractive force between objects with mass; it is stronger for larger masses and weaker as distance increases." },
            ],
            steps: [
              { reasoning: "The masses of the objects: gravity is stronger for larger masses.", marks: 1, markCode: "B" },
              { reasoning: "The distance between them: gravity is weaker as the distance increases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The masses of the objects (larger mass = stronger gravity) and the distance between them (greater distance = weaker gravity).",
            commonErrors: ["Listing temperature or speed, which do not affect gravity."],
            examinerNote: "B1 for each valid factor.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does the Moon stay in orbit around the Earth instead of flying off into space?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon is held by a rope of magnetic force" },
              { id: "b", text: "The Moon has rockets keeping it in place" },
              { id: "c", text: "The Earth's gravity pulls the Moon inwards while it keeps moving forwards" },
              { id: "d", text: "The Moon is not moving at all" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Gravity and orbits", statement: "An orbit is the result of gravity pulling a moving object towards a larger mass, bending its path into a curve." },
            ],
            steps: [
              { reasoning: "The Moon is moving forwards while Earth's gravity pulls it inwards, so its path curves into an orbit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The Earth's gravity pulls the Moon inwards while it keeps moving forwards",
            commonErrors: ["Saying gravity holds the Moon still rather than bending its path."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An astronaut travels from Earth to the Moon. Which statement about the astronaut's mass and weight is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass decreases and weight decreases" },
              { id: "b", text: "Mass stays the same and weight stays the same" },
              { id: "c", text: "Mass increases because the astronaut is floating" },
              { id: "d", text: "Mass stays the same but weight decreases because gravity is weaker" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$ — weight depends on mass and gravitational field strength; mass is constant." },
            ],
            steps: [
              { reasoning: "Mass is the amount of matter and does not change with location.", marks: 1, markCode: "B" },
              { reasoning: "Weight is $mg$; the Moon's gravity is weaker ($g = 1.6\\ \\text{N/kg}$), so the weight is smaller.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(d)** Mass stays the same but weight decreases because gravity is weaker",
            commonErrors: ["Thinking the astronaut 'loses mass' in space.", "Thinking weight is constant everywhere."],
            examinerNote: "B1 for mass constant. R1 for weight smaller due to weaker gravity.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On the Moon the gravitational field strength is $g = 1.6\\ \\text{N/kg}$.\n\nCalculate the weight of a $60\\ \\text{kg}$ astronaut on the Moon.",
          response: { type: "numeric", parts: [{ label: "Weight on the Moon", answer: 96, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute mass and the Moon's gravitational field strength into $W = mg$.", working: "W = 60 \\times 1.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "W = 96\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96\\ \\text{N}$",
            commonErrors: ["Dividing 60 by 1.6.", "Giving the answer in kilograms."],
            examinerNote: "M1 for 60 x 1.6. A1 for 96 N.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "On Mars the gravitational field strength is $g = 3.7\\ \\text{N/kg}$.\n\nCalculate the weight of an $80\\ \\text{kg}$ astronaut on Mars.",
          response: { type: "numeric", parts: [{ label: "Weight on Mars", answer: 296, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute mass and Mars's gravitational field strength into $W = mg$.", working: "W = 80 \\times 3.7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "W = 296\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$296\\ \\text{N}$",
            commonErrors: ["Giving the mass (80 kg) instead of weight.", "Dividing instead of multiplying."],
            examinerNote: "M1 for 80 x 3.7. A1 for 296 N.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "On the Moon $g = 1.6\\ \\text{N/kg}$ and on Mars $g = 3.7\\ \\text{N/kg}$. An astronaut has a mass of $90\\ \\text{kg}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Weight on the Moon", answer: 144, unit: "N" },
              { label: "Weight on Mars", answer: 333, unit: "N" },
              { label: "Difference between the two weights", answer: 189, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Moon: $90 \\times 1.6$.", working: "144\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Mars: $90 \\times 3.7$.", working: "333\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the Moon weight from the Mars weight.", working: "333-144=189\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$144\\ \\text{N}$, $333\\ \\text{N}$, $189\\ \\text{N}$",
            commonErrors: ["Using different masses for the two planets.", "Subtracting the wrong way round for a negative answer."],
            examinerNote: "M1 for each correct weight. A1 for 189 N.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The Moon is about $384\\,000\\ \\text{km}$ from the Earth. The speed of light is $300\\,000\\ \\text{km/s}$. On the Moon $g = 1.6\\ \\text{N/kg}$ and on Mars $g = 3.7\\ \\text{N/kg}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Time for light to travel from Earth to the Moon", answer: 1.28, unit: "s" },
              { label: "Distance light travels in 2 seconds", answer: 600000, unit: "km" },
              { label: "Weight of a 30 kg person on the Moon", answer: 48, unit: "N" },
              { label: "Weight of the same person on Mars", answer: 111, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$" },
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Time = distance / speed.", working: "\\frac{384\\,000}{300\\,000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1.28\\text{ s}", marks: 1, markCode: "A" },
              { reasoning: "Multiply speed by time for distance.", working: "300\\,000 \\times 2 = 600\\,000\\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Moon: $30 \\times 1.6$; Mars: $30 \\times 3.7$.", working: "48\\text{ N};\\ 111\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.28\\ \\text{s}$, $600\\,000\\ \\text{km}$, $48\\ \\text{N}$, $111\\ \\text{N}$",
            commonErrors: ["Multiplying distance by speed for the time part.", "Forgetting that the mass stays 30 kg on both planets."],
            examinerNote: "M1 for each correct method. A1 for both weights.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a **solar eclipse** and a **lunar eclipse**.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eclipse", statement: "An eclipse happens when one object moves into the shadow of another, blocking light from the Sun." },
            ],
            steps: [
              { reasoning: "In a solar eclipse the Moon passes between the Sun and the Earth at new Moon.", marks: 1, markCode: "B" },
              { reasoning: "The Moon's shadow falls on a small part of the Earth, so people there see the Sun blocked.", marks: 1, markCode: "B" },
              { reasoning: "In a lunar eclipse the Earth is between the Sun and the Moon at full Moon.", marks: 1, markCode: "B" },
              { reasoning: "The Moon moves into the Earth's shadow and looks dim and reddish.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Solar: Moon between Sun and Earth, Moon's shadow on Earth. Lunar: Earth between Sun and Moon, Moon in Earth's shadow.",
            commonErrors: ["Swapping which object is in the middle.", "Saying a lunar eclipse is seen by everyone on Earth."],
            examinerNote: "B1 for each correct arrangement. R1 for describing the shadow effect seen.",
          },
        },
        {
          id: "myps1-u3-moon-eclipses-gravity-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Moon orbits the Earth once every $27$ days, but the cycle of phases takes about $29.5$ days. An observer records the Moon's appearance every night for a month.",
          parts: [
            { label: "a", prompt: "Explain what causes the phases of the Moon.", marks: 2 },
            { label: "b", prompt: "Describe what the observer would see at new Moon and at full Moon.", marks: 2 },
            { label: "c", prompt: "Explain why the phases are not caused by the Earth's shadow.", marks: 2 },
            { label: "d", prompt: "Explain why the Moon stays in orbit around the Earth.", marks: 2 },
            { label: "e", prompt: "A probe has mass $500\\ \\text{kg}$. On Earth $g = 9.8\\ \\text{N/kg}$. Calculate its weight on Earth.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon phases", statement: "Half of the Moon is always lit; the phase depends on how much of the lit half we see as the Moon orbits." },
              { kind: "law", name: "Gravity and orbits", statement: "Gravity pulls a moving object towards a larger mass, bending its path into an orbit." },
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { part: "a", reasoning: "The Moon reflects sunlight and half of it is always lit by the Sun.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "As the Moon orbits the Earth we see different amounts of the lit half, which gives the phases.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "At new Moon we see none of the lit side (it is between the Earth and Sun).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "At full Moon we see all of the lit side (the Earth is between the Sun and Moon).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The Earth's shadow only reaches the Moon during a lunar eclipse, which happens rarely.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The phases change every night as we see different parts of the always-lit half, so they cannot be caused by the shadow.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The Earth's gravity pulls the Moon towards the Earth.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The Moon is also moving forwards, so the pull bends its path into a curve around the Earth.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "$W = 500 \\times 9.8 = 4900\\text{ N}$.", working: "500 \\times 9.8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Moon reflects sunlight; half lit; we see different amounts as it orbits (b) New: none of lit side; full: all of lit side (c) Shadow only during rare eclipses; phases change nightly (d) Gravity pulls inwards while Moon moves forwards (e) $4900\\ \\text{N}$",
            commonErrors: ["In (c) saying the Earth's shadow causes the phases.", "In (e) multiplying by the wrong g or giving kg."],
            examinerNote: "(b) Accept descriptions matching the definitions. (e) Allow ecf. Award R1 in (a), (c), (d) for linked explanations.",
          },
        },
      ],
    },
  ],
};
