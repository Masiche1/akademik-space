import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "pypsc-u3-lesson-3-2",
  code: "3-2",
  title: "The Sun, Earth and Moon",
  goal: "I CAN explain day and night, the Moon's phases, and how Earth orbits the Sun.",
  standards: [
    "PYP Science: Earth and space",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Sun", definition: "A star that gives Earth light and heat; it is much bigger than Earth." },
    { term: "Earth", definition: "Our planet — the third from the Sun, where we live." },
    { term: "Moon", definition: "Earth's natural satellite — it orbits Earth and reflects sunlight." },
    { term: "Day and night", definition: "Day is when our part of Earth faces the Sun; night is when it faces away." },
    { term: "Orbit", definition: "The path an object takes around another — Earth orbits the Sun, Moon orbits Earth." },
    { term: "Moon phases", definition: "The changing shapes of the Moon we see: new, crescent, half, full." },
  ],
  concepts: [
    {
      id: "pypsc-u3l2-c1-sun-earth",
      title: "The Sun and Earth",
      skill: "Explain day and night, seasons, and Earth's orbit around the Sun.",
      lesson: {
        sections: [
          {
            heading: "Day and night",
            body: "The **Sun** gives Earth light and heat. Earth **spins** (rotates) on its axis once every $24$ hours. The side facing the Sun has **day**; the side facing away has **night**. This is why the Sun appears to 'rise' in the morning and 'set' in the evening — actually Earth is turning.",
          },
          {
            heading: "Earth's orbit and seasons",
            body: "Earth also **orbits** (revolves around) the Sun once every $365$ days — that is one year. Earth's axis is **tilted**, so different parts get more or less sunlight at different times — this causes **seasons**. When the Northern Hemisphere tilts towards the Sun, it is summer there; when it tilts away, it is winter.",
          },
        ],
        keyFormulas: [
          { name: "Rotation", statement: "Earth spins on axis every $24$ hours → day and night" },
          { name: "Revolution", statement: "Earth orbits Sun every $365$ days → one year" },
          { name: "Seasons cause", statement: "Earth's tilted axis changes sunlight angle" },
        ],
        workedExample: {
          problem: "Why do we have day and night?",
          solution: "Earth rotates on its axis every $24$ hours. The side facing the Sun has day; the side facing away has night.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u3l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Sun moving around Earth" },
              { id: "b", text: "Clouds covering the Sun" },
              { id: "c", text: "The Moon blocking the Sun" },
              { id: "d", text: "Earth spinning on its axis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation and day/night", statement: "Earth's rotation on its axis causes day and night." },
            ],
            steps: [
              { reasoning: "Earth spins every $24$ hours — day side faces Sun, night side faces away.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Earth spinning on its axis",
            commonErrors: ["Choosing 'Sun moving around Earth' — the Sun stays still; Earth moves."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How long does it take Earth to orbit the Sun once?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$ days" },
              { id: "b", text: "$24$ hours" },
              { id: "c", text: "$365$ days" },
              { id: "d", text: "$12$ hours" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Revolution period", statement: "Earth orbits the Sun once every $365$ days = one year." },
            ],
            steps: [
              { reasoning: "$365$ days is one year — Earth's orbital period.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $365$ days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $365$ days",
            commonErrors: ["Choosing $24$ hours — that is Earth's rotation (day/night), not orbit."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is it summer in one part of Earth while it is winter in another?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasons and tilt", statement: "Earth's tilted axis means different hemispheres get different sunlight at different times." },
            ],
            steps: [
              { reasoning: "Earth's axis is tilted, not straight up.", marks: 1, markCode: "M" },
              { reasoning: "When Northern Hemisphere tilts towards Sun, it gets more direct sunlight = summer; Southern tilts away = winter.", marks: 1, markCode: "M" },
              { reasoning: "Six months later the tilt reverses — seasons swap.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Earth's tilt means one hemisphere gets more direct sunlight while the other gets less — causing opposite seasons.",
            commonErrors: ["Saying 'Earth is closer to Sun in summer' — distance is not the cause; tilt is."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Earth has two motions: rotation and revolution.",
          parts: [
            { label: "a", prompt: "What is rotation and what does it cause?", marks: 2 },
            { label: "b", prompt: "What is revolution and what does it cause?", marks: 2 },
            { label: "c", prompt: "How long does one rotation take?", marks: 1 },
            { label: "d", prompt: "How long does one revolution take?", marks: 1 },
            { label: "e", prompt: "Which motion causes seasons? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation vs revolution", statement: "Rotation = spin on axis (24h, day/night); revolution = orbit Sun (365d, year/seasons)." },
            ],
            steps: [
              { part: "a", reasoning: "Rotation = Earth spinning on its axis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It causes day and night every $24$ hours.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Revolution = Earth orbiting the Sun.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It causes the change of seasons over the year.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$24$ hours.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$365$ days (one year).", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Revolution — Earth's tilt changes which hemisphere gets more sun as it orbits.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) spin→day/night (b) orbit→seasons (c) 24h (d) 365d (e) revolution+tilt",
            commonErrors: ["In (e), saying rotation causes seasons — it is revolution plus tilt."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clouds covering the Sun" },
              { id: "b", text: "The Moon blocking the Sun every night" },
              { id: "c", text: "Earth spinning on its axis" },
              { id: "d", text: "The Sun orbiting Earth daily" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation", statement: "Earth's spin on its axis causes day and night." },
            ],
            steps: [
              { reasoning: "The side facing the Sun has day; the side away has night.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Earth spinning on its axis",
            commonErrors: ["Choosing the Moon — the Moon does not cause daily night."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many hours does it take Earth to spin once on its axis?",
          response: {
            type: "numeric",
            parts: [{ label: "Hours", answer: 24, tolerance: 0, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation period", statement: "Earth rotates once every 24 hours." },
            ],
            steps: [
              { reasoning: "One full spin takes 24 hours.", marks: 1, markCode: "M" },
              { reasoning: "The answer is 24 hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 hours",
            commonErrors: ["Answering 365 — that is Earth's orbit, not rotation."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the Sun appears to rise in the morning and set in the evening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Apparent Sun motion", statement: "Earth's rotation makes the Sun appear to move across the sky." },
            ],
            steps: [
              { reasoning: "Earth spins on its axis every 24 hours.", marks: 1, markCode: "M" },
              { reasoning: "As Earth turns, different parts face the Sun, making it look like sunrise and sunset.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Earth's rotation makes the Sun appear to rise and set.",
            commonErrors: ["Saying the Sun moves around Earth — Earth is actually turning."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What path does Earth take around the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No path" },
              { id: "b", text: "An orbit" },
              { id: "c", text: "A square" },
              { id: "d", text: "A straight line" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Orbit", statement: "Earth orbits the Sun once every year." },
            ],
            steps: [
              { reasoning: "Earth follows an orbital path around the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An orbit",
            commonErrors: ["Choosing straight line — orbits are curved paths."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many days does it take Earth to orbit the Sun once?",
          response: {
            type: "numeric",
            parts: [{ label: "Days", answer: 365, tolerance: 0, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Revolution period", statement: "Earth orbits the Sun once every 365 days." },
            ],
            steps: [
              { reasoning: "Earth's revolution around the Sun takes one year.", marks: 1, markCode: "M" },
              { reasoning: "One year is about 365 days.", marks: 1, markCode: "M" },
              { reasoning: "The answer is 365 days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "365 days",
            commonErrors: ["Answering 24 — that is rotation, not orbit."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many main motions does Earth have: rotation and revolution?",
          response: {
            type: "numeric",
            parts: [{ label: "Motions", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Earth motions", statement: "Earth rotates on its axis and revolves around the Sun." },
            ],
            steps: [
              { reasoning: "Rotation and revolution are Earth's two motions.", marks: 1, markCode: "M" },
              { reasoning: "There are two motions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting only rotation — revolution is also a motion."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why one hemisphere has summer while the other has winter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasons and tilt", statement: "Earth's tilted axis gives different hemispheres different sunlight." },
            ],
            steps: [
              { reasoning: "Earth's axis is tilted, not straight up.", marks: 1, markCode: "M" },
              { reasoning: "When one hemisphere tilts towards the Sun it gets more direct light = summer.", marks: 1, markCode: "M" },
              { reasoning: "The other hemisphere tilts away and gets less light = winter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tilt makes one hemisphere get more direct sunlight while the other gets less.",
            commonErrors: ["Saying Earth is closer to the Sun — tilt is the cause."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When is it summer in a hemisphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When it tilts towards the Sun" },
              { id: "b", text: "When it rains every day" },
              { id: "c", text: "When the Moon is full" },
              { id: "d", text: "When it tilts away from the Sun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasons", statement: "A hemisphere has summer when it tilts towards the Sun." },
            ],
            steps: [
              { reasoning: "Tilting towards the Sun gives more direct light.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** When it tilts towards the Sun",
            commonErrors: ["Choosing tilts away — that gives winter."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many seasons are caused by Earth's tilt and orbit: spring, summer, autumn and winter?",
          response: {
            type: "numeric",
            parts: [{ label: "Seasons", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Seasons", statement: "There are four seasons linked to Earth's tilt." },
            ],
            steps: [
              { reasoning: "Spring, summer, autumn and winter are the seasons.", marks: 1, markCode: "M" },
              { reasoning: "There are four seasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting two — there are four seasons."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which side of Earth has daytime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the equator at night" },
              { id: "b", text: "The side facing away from the Sun" },
              { id: "c", text: "Only the poles" },
              { id: "d", text: "The side facing the Sun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Day and night", statement: "The side of Earth facing the Sun has daytime." },
            ],
            steps: [
              { reasoning: "Sunlight reaches the side facing the Sun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The side facing the Sun",
            commonErrors: ["Choosing facing away — that side has night."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If Earth rotates once every 24 hours, how many rotations does it complete in 2 days?",
          response: {
            type: "numeric",
            parts: [{ label: "Rotations", answer: 2, tolerance: 0, unit: "rotations" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Rotation count", statement: "One rotation happens every 24 hours, so two days need two rotations." },
            ],
            steps: [
              { reasoning: "Each day has 24 hours, matching one rotation.", marks: 1, markCode: "M" },
              { reasoning: "Two days contain two 24-hour periods.", marks: 1, markCode: "M" },
              { reasoning: "Earth completes two rotations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 rotations",
            commonErrors: ["Multiplying by 365 — that is for orbit, not daily rotation."],
          },
        },
        {
          id: "pypsc-q-u3l2c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do we not believe the Sun moves around Earth every day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth does not move at all" },
              { id: "b", text: "Earth's rotation makes the Sun only appear to move" },
              { id: "c", text: "Clouds stop the Sun" },
              { id: "d", text: "The Sun is too small to move" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Apparent motion", statement: "Earth's spin creates the appearance of the Sun moving." },
            ],
            steps: [
              { reasoning: "Rotation changes which side faces the Sun.", marks: 1, markCode: "M" },
              { reasoning: "This makes sunrise and sunset appear without the Sun orbiting Earth daily.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Earth's rotation makes the Sun only appear to move",
            commonErrors: ["Choosing Earth does not move — Earth both spins and orbits."],
          },
        },
      ],
    },
    {
      id: "pypsc-u3l2-c2-moon",
      title: "The Moon",
      skill: "Describe the Moon's phases and how it orbits Earth.",
      lesson: {
        sections: [
          {
            heading: "The Moon's orbit",
            body: "The **Moon** is Earth's natural satellite — it **orbits** Earth once every about $27$ days (roughly a month). It does **not** make its own light; we see it because it **reflects** sunlight. Half the Moon is always lit by the Sun, but from Earth we see different amounts of the lit side — that is why the Moon seems to **change shape**.",
          },
          {
            heading: "Moon phases",
            body: "The **phases** cycle through: **new Moon** (invisible — between Earth and Sun), **crescent** (thin sliver), **first quarter/half Moon** (right half lit), **gibbous** (more than half), **full Moon** (fully lit — opposite the Sun), then back through the phases. A full cycle takes about $29.5$ days. The Moon also has **craters** — holes made by meteorites hitting it.",
          },
        ],
        keyFormulas: [
          { name: "Moon orbit", statement: "Moon orbits Earth ~$27$ days; phases cycle ~$29.5$ days" },
          { name: "Why phases", statement: "We see different amounts of the Sun-lit half as Moon orbits Earth" },
        ],
        workedExample: {
          problem: "Why does the Moon appear to change shape?",
          solution: "As the Moon orbits Earth, we see different amounts of its sunlit half — new, crescent, half, gibbous, full.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u3l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does the Moon appear to change shape?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It moves closer and further away" },
              { id: "b", text: "We see different amounts of its sunlit side as it orbits Earth" },
              { id: "c", text: "Clouds cover parts of it" },
              { id: "d", text: "It grows and shrinks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon phases", statement: "Phases result from seeing different amounts of the sunlit half during orbit." },
            ],
            steps: [
              { reasoning: "The Moon's shape appears to change because we see different parts of its lit side.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** We see different amounts of its sunlit side as it orbits Earth",
            commonErrors: ["Choosing 'it grows and shrinks' — the Moon's size never changes; only the visible lit part does."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'full Moon'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Full Moon", statement: "Full Moon = we see the entire sunlit half of the Moon." },
            ],
            steps: [
              { reasoning: "A full Moon is when the whole sunlit side faces Earth.", marks: 1, markCode: "M" },
              { reasoning: "It looks like a complete circle — fully lit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full Moon = the entire sunlit half of the Moon faces Earth, appearing as a complete circle.",
            commonErrors: ["Saying 'the Moon is fully lit' — only half is lit; we just see all of the lit half."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "During a new Moon, why can't we see the Moon at all?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "New Moon", statement: "At new Moon, the Moon is between Earth and Sun — the lit side faces away from us." },
            ],
            steps: [
              { reasoning: "At new Moon the Moon is between Earth and the Sun.", marks: 1, markCode: "M" },
              { reasoning: "The sunlit side faces the Sun (away from Earth), so the dark side faces us.", marks: 1, markCode: "M" },
              { reasoning: "We see almost none of the lit part — the Moon is effectively invisible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Moon is between Earth and Sun; the lit side faces away so we see the dark side.",
            commonErrors: ["Saying 'the Moon is behind Earth' — that is full Moon position, not new Moon."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "The Moon orbits Earth and goes through phases.",
          parts: [
            { label: "a", prompt: "How long does the Moon take to orbit Earth?", marks: 1 },
            { label: "b", prompt: "Does the Moon make its own light? Explain.", marks: 2 },
            { label: "c", prompt: "Name the phase when we see the whole lit side.", marks: 1 },
            { label: "d", prompt: "Name the phase when the Moon is between Earth and Sun.", marks: 1 },
            { label: "e", prompt: "Explain why the Moon's phases repeat in a cycle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moon orbit and phases", statement: "Moon orbits Earth ~27 days; phases repeat because of this orbit." },
            ],
            steps: [
              { part: "a", reasoning: "About $27$ days (roughly a month).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "No — it reflects sunlight like a mirror.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The Moon has no light of its own; we see reflected sunlight.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Full Moon.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "New Moon.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "As the Moon orbits Earth, the angle between Sun, Moon and Earth changes.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "This repeating geometry causes the same phases to cycle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ~27 days (b) no, reflects sunlight (c) full Moon (d) new Moon (e) orbit changes viewing angle cyclically",
            commonErrors: ["In (b), saying the Moon 'glows' — it only reflects sunlight."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why can we see the Moon at night?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is on fire" },
              { id: "b", text: "It is made of glowing cheese" },
              { id: "c", text: "It reflects sunlight" },
              { id: "d", text: "It makes its own light like the Sun" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moon light", statement: "The Moon reflects sunlight; it does not make its own light." },
            ],
            steps: [
              { reasoning: "We see the Moon because it reflects sunlight.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It reflects sunlight",
            commonErrors: ["Choosing makes own light — the Moon only reflects sunlight."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "About how many days does the Moon take to orbit Earth once?",
          response: {
            type: "numeric",
            parts: [{ label: "Days", answer: 27, tolerance: 1, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moon orbit", statement: "The Moon orbits Earth about once every 27 days." },
            ],
            steps: [
              { reasoning: "The Moon's orbital period is about 27 days.", marks: 1, markCode: "M" },
              { reasoning: "The answer is about 27 days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About 27 days",
            commonErrors: ["Answering 365 — that is Earth's orbit around the Sun."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the Moon seems to change shape.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon phases", statement: "As the Moon orbits Earth we see different amounts of its sunlit side." },
            ],
            steps: [
              { reasoning: "Half the Moon is always lit by the Sun.", marks: 1, markCode: "M" },
              { reasoning: "Earth's view changes as the Moon orbits, so the lit part looks different.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "We see different amounts of the sunlit half as the Moon orbits Earth.",
            commonErrors: ["Saying the Moon changes size — only the visible lit amount changes."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a full Moon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the Moon is between Earth and Sun" },
              { id: "b", text: "When we see the whole sunlit half of the Moon" },
              { id: "c", text: "When the Moon is closest to Earth" },
              { id: "d", text: "When the Moon is invisible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Full Moon", statement: "Full Moon means the entire sunlit half faces Earth." },
            ],
            steps: [
              { reasoning: "At full Moon we see all of the lit side.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** When we see the whole sunlit half of the Moon",
            commonErrors: ["Choosing new Moon — that is when the lit side faces away."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "About how many days does a full cycle of Moon phases take?",
          response: {
            type: "numeric",
            parts: [{ label: "Days", answer: 29.5, tolerance: 0.1, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phase cycle", statement: "The Moon's phase cycle takes about 29.5 days." },
            ],
            steps: [
              { reasoning: "The phase cycle is slightly longer than one orbit.", marks: 1, markCode: "M" },
              { reasoning: "It takes about 29.5 days.", marks: 1, markCode: "M" },
              { reasoning: "The answer is about 29.5 days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About 29.5 days",
            commonErrors: ["Answering 27 — that is the orbit period; phases take about 29.5 days."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many Moon phases are named: new Moon, crescent, first quarter, gibbous and full Moon?",
          response: {
            type: "numeric",
            parts: [{ label: "Phases", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moon phases", statement: "The named phases are new, crescent, quarter, gibbous and full." },
            ],
            steps: [
              { reasoning: "New, crescent, first quarter, gibbous and full are listed.", marks: 1, markCode: "M" },
              { reasoning: "There are five named phases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only three main shapes — the named phases are five."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why we cannot see the Moon during a new Moon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "New Moon", statement: "At new Moon the lit side faces away from Earth." },
            ],
            steps: [
              { reasoning: "At new Moon the Moon is between Earth and the Sun.", marks: 1, markCode: "M" },
              { reasoning: "The sunlit side faces the Sun, away from Earth.", marks: 1, markCode: "M" },
              { reasoning: "We see mostly the dark side, so the Moon is effectively invisible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The lit side faces away from Earth, so we see the dark side.",
            commonErrors: ["Saying the Moon disappears — it is still there, just not lit toward us."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Does the Moon produce its own light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No, it reflects sunlight" },
              { id: "b", text: "Only at night" },
              { id: "c", text: "Yes, like a star" },
              { id: "d", text: "Only during full Moon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moon light", statement: "The Moon reflects sunlight and does not make its own light." },
            ],
            steps: [
              { reasoning: "The Moon is not a light source.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No, it reflects sunlight",
            commonErrors: ["Thinking full Moon means own light — it still reflects sunlight."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main ideas about the Moon are named: it orbits Earth, it has phases and it has craters?",
          response: {
            type: "numeric",
            parts: [{ label: "Ideas", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Moon facts", statement: "The Moon orbits Earth, shows phases and has craters." },
            ],
            steps: [
              { reasoning: "Orbit, phases and craters are the ideas named.", marks: 1, markCode: "M" },
              { reasoning: "There are three ideas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting only phases — orbit and craters are also named."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a crescent Moon look like?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A square" },
              { id: "b", text: "Totally invisible" },
              { id: "c", text: "A thin sliver of light" },
              { id: "d", text: "A complete circle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crescent Moon", statement: "A crescent Moon shows only a thin sliver of the lit side." },
            ],
            steps: [
              { reasoning: "Crescent means a thin lit sliver.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A thin sliver of light",
            commonErrors: ["Choosing complete circle — that is full Moon."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many Moon phases are named: new Moon, crescent, half Moon, gibbous and full Moon?",
          response: {
            type: "numeric",
            parts: [{ label: "Phases", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moon phases", statement: "New, crescent, half, gibbous and full are phase names." },
            ],
            steps: [
              { reasoning: "Five phase names are listed.", marks: 1, markCode: "M" },
              { reasoning: "They are all Moon phases.", marks: 1, markCode: "M" },
              { reasoning: "There are five phases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only three main shapes — five names are given."],
          },
        },
        {
          id: "pypsc-q-u3l2c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do the same Moon phases repeat again and again?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon's orbit repeats the same viewing angles" },
              { id: "b", text: "Clouds always hide the Moon" },
              { id: "c", text: "The Moon stops moving" },
              { id: "d", text: "Earth has no seasons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phase cycle", statement: "The Moon's repeating orbit changes the Sun-Moon-Earth angle in a cycle." },
            ],
            steps: [
              { reasoning: "The orbit repeats similar positions relative to Earth and Sun.", marks: 1, markCode: "M" },
              { reasoning: "This repeating geometry causes the phases to cycle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The Moon's orbit repeats the same viewing angles",
            commonErrors: ["Choosing Moon stops moving — it keeps orbiting."],
          },
        },
      ],
    },
  ],
};
