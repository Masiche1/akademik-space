import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "pypsc-u2-lesson-2-2",
  code: "2-2",
  title: "Forces and Motion",
  goal: "I CAN identify push and pull forces and describe how forces make objects move, stop or change direction.",
  standards: [
    "PYP Science: Forces and motion",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Force", definition: "A push or pull that can make an object move, stop, speed up, slow down or change direction." },
    { term: "Push", definition: "A force that moves an object away from you." },
    { term: "Pull", definition: "A force that moves an object towards you." },
    { term: "Friction", definition: "A force that slows moving objects by rubbing against surfaces." },
    { term: "Gravity", definition: "The force that pulls objects down towards the Earth." },
    { term: "Magnetism", definition: "A force that attracts certain metals like iron without touching them." },
  ],
  concepts: [
    {
      id: "pypsc-u2l2-c1-push-pull",
      title: "Push and pull forces",
      skill: "Identify push and pull forces and their effects on motion.",
      lesson: {
        sections: [
          {
            heading: "Forces make things move",
            body: "A **force** is a push or pull. **Push** moves things away (pushing a swing, kicking a ball). **Pull** moves things towards you (pulling a door open, drawing a bow). Forces can **start** movement, **stop** it, **speed it up**, **slow it down**, or **change direction**. A ball rolling to a stop is slowed by **friction** — the rubbing force between surfaces.",
          },
          {
            heading: "Gravity and magnets",
            body: "**Gravity** pulls everything towards the Earth — it makes dropped objects fall and keeps us on the ground. **Magnetism** attracts iron and steel without touching — a magnet pulls a paperclip across a table. **Friction** works the other way: it slows things down. All forces act on objects to change their motion.",
          },
        ],
        keyFormulas: [
          { name: "Force effects", statement: "Start, stop, speed up, slow down, change direction" },
          { name: "Force types", statement: "Push, pull, friction (slows), gravity (pulls down), magnetism (attracts metal)" },
        ],
        workedExample: {
          problem: "A ball is rolling and then stops. What force stopped it?",
          solution: "Friction — the ball rubs against the ground, and friction slows it until it stops. Gravity may also pull it down but friction stops the rolling.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u2l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a PUSH?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening a drawer" },
              { id: "b", text: "Kicking a football" },
              { id: "c", text: "Drawing back a bow" },
              { id: "d", text: "Pulling a door open" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Push vs pull", statement: "Push moves away; pull moves towards." },
            ],
            steps: [
              { reasoning: "Kicking moves the ball away — a push. The others are pulls.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Kicking a football",
            commonErrors: ["Choosing 'opening a drawer' — drawers are pulled towards you."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A toy car rolls across a carpet and stops quickly, but rolls much further on a smooth floor. What force explains this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Friction", statement: "Friction slows moving objects; rougher surfaces create more friction." },
            ],
            steps: [
              { reasoning: "The carpet is rough — more friction slows the car faster.", marks: 1, markCode: "M" },
              { reasoning: "The smooth floor has less friction, so the car rolls further.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction — carpet has more friction than smooth floor, so the car stops sooner.",
            commonErrors: ["Saying 'gravity stopped it' — gravity pulls down but friction slows rolling."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You drop a ball and it falls to the ground. Which force causes this, and what would happen on the Moon where gravity is weaker?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravity", statement: "Gravity pulls objects towards the Earth; weaker gravity means slower falls." },
            ],
            steps: [
              { reasoning: "Gravity pulls the ball down to the ground.", marks: 1, markCode: "M" },
              { reasoning: "On the Moon gravity is weaker, so the ball falls more slowly.", marks: 1, markCode: "M" },
              { reasoning: "It would still fall but take longer — gravity is weaker but still acts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravity pulls it down; on the Moon it falls more slowly because gravity is weaker.",
            commonErrors: ["Saying the ball would float — it still falls, just slower."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Investigate forces with a toy car, a ramp, a magnet and different surfaces.",
          parts: [
            { label: "a", prompt: "What force makes the car move down the ramp?", marks: 1 },
            { label: "b", prompt: "What happens to the car's speed on a rough surface vs smooth? Explain.", marks: 2 },
            { label: "c", prompt: "How does a magnet affect a car with a metal body? Explain the force.", marks: 2 },
            { label: "d", prompt: "Name two forces that always act on objects on Earth.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Force types", statement: "Gravity pulls down, friction slows, magnetism attracts metal — all are forces." },
            ],
            steps: [
              { part: "a", reasoning: "Gravity pulls the car down the ramp.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rough surface: more friction, car slows faster. Smooth: less friction, car goes further.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explanation links friction to surface texture.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Magnetism attracts the metal car — it pulls without touching.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The car moves towards the magnet even without being pushed.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gravity and friction (always present on Earth surfaces).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both correctly named as constant forces.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gravity (b) rough=more friction/slower (c) magnetism attracts metal (d) gravity+friction",
            commonErrors: ["In (d), saying 'wind' — wind is not always present; gravity and friction are."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which action is a pull?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kicking a ball away" },
              { id: "b", text: "Pulling a drawer towards you" },
              { id: "c", text: "Throwing a ball forward" },
              { id: "d", text: "Pushing a swing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Push vs pull", statement: "A pull moves an object towards you." },
            ],
            steps: [
              { reasoning: "Pulling a drawer moves it towards you.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pulling a drawer towards you",
            commonErrors: ["Choosing kicking — kicking pushes the ball away."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many effects can a force have: start motion, stop motion, speed up, slow down and change direction?",
          response: {
            type: "numeric",
            parts: [{ label: "Effects", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Force effects", statement: "Forces can start, stop, speed up, slow down or change direction." },
            ],
            steps: [
              { reasoning: "The effects are start, stop, speed up, slow down and change direction.", marks: 1, markCode: "M" },
              { reasoning: "There are five effects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only three — direction change is also an effect."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a rolling ball slows down and stops on a carpet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Friction", statement: "Friction is the rubbing force that slows moving objects." },
            ],
            steps: [
              { reasoning: "The ball rubs against the carpet surface as it rolls.", marks: 1, markCode: "M" },
              { reasoning: "Friction slows the ball until it stops.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction between the ball and carpet slows it until it stops.",
            commonErrors: ["Saying the ball runs out of push — friction removes its motion."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which force pulls dropped objects down towards the ground?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Magnetism" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Wind only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravity", statement: "Gravity pulls objects towards the Earth." },
            ],
            steps: [
              { reasoning: "Gravity pulls dropped objects downward.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Gravity",
            commonErrors: ["Choosing friction — friction slows movement but does not pull objects down."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many forces are described here: kicking a ball, pulling a drawer, a dropped book falling and a magnet attracting a paperclip?",
          response: {
            type: "numeric",
            parts: [{ label: "Forces", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Forces", statement: "Pushes, pulls, gravity and magnetism are all forces." },
            ],
            steps: [
              { reasoning: "Kicking, pulling, falling and magnet attraction are forces.", marks: 1, markCode: "M" },
              { reasoning: "There are four forces described.", marks: 1, markCode: "M" },
              { reasoning: "Each changes or affects motion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only push and pull — gravity and magnetism are forces too."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a magnet do to certain metals like iron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attracts them without touching" },
              { id: "b", text: "Pushes them away" },
              { id: "c", text: "Melts them" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnetism", statement: "Magnetism attracts iron and steel without touching." },
            ],
            steps: [
              { reasoning: "Magnets attract metal objects at a distance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Attracts them without touching",
            commonErrors: ["Thinking magnets need to touch — magnetism works at a distance."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many force types are named: push, pull, friction, gravity and magnetism?",
          response: {
            type: "numeric",
            parts: [{ label: "Force types", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Force types", statement: "Push, pull, friction, gravity and magnetism are force types." },
            ],
            steps: [
              { reasoning: "The five force types are push, pull, friction, gravity and magnetism.", marks: 1, markCode: "M" },
              { reasoning: "There are five types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only push and pull — friction, gravity and magnetism are also forces."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare gravity and friction. What does each force do to a moving object?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Gravity vs friction", statement: "Gravity pulls objects downward; friction slows movement by rubbing." },
            ],
            steps: [
              { reasoning: "Gravity pulls objects towards the Earth.", marks: 1, markCode: "M" },
              { reasoning: "Friction acts between surfaces and slows moving objects.", marks: 1, markCode: "M" },
              { reasoning: "They have different effects: gravity pulls down, friction opposes motion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gravity pulls down; friction slows moving objects by rubbing.",
            commonErrors: ["Saying friction pulls down — it slows, not pulls."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which observation best shows that magnetism is a force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The magnet changes colour" },
              { id: "b", text: "A paperclip moves towards the magnet without being touched" },
              { id: "c", text: "The paperclip melts" },
              { id: "d", text: "The magnet gets heavier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Force evidence", statement: "A force can change motion; the paperclip moving shows magnetism acts." },
            ],
            steps: [
              { reasoning: "The paperclip moving without touch shows a force acting.", marks: 1, markCode: "M" },
              { reasoning: "Colour or weight changes are not evidence of a force.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A paperclip moves towards the magnet without being touched",
            commonErrors: ["Choosing colour change — that does not show motion or force."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A toy car rolls 20 cm on carpet and 50 cm on wood. How many centimetres further does it roll on wood?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 30, tolerance: 0, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Comparing distances", statement: "Difference = larger distance minus smaller distance." },
            ],
            steps: [
              { reasoning: "Subtract carpet distance from wood distance: 50 - 20.", marks: 1, markCode: "M" },
              { reasoning: "The car rolls 30 cm further on wood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 cm",
            commonErrors: ["Adding the distances instead of subtracting."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these actions are pushes: kicking a ball, pulling a drawer, pushing a swing and opening a jar?",
          response: {
            type: "numeric",
            parts: [{ label: "Pushes", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Push", statement: "A push moves an object away; kicking and pushing are pushes." },
            ],
            steps: [
              { reasoning: "Kicking a ball and pushing a swing are pushes.", marks: 1, markCode: "M" },
              { reasoning: "Pulling a drawer and opening a jar are pulls.", marks: 1, markCode: "M" },
              { reasoning: "Two actions are pushes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting pulls as pushes — direction matters."],
          },
        },
        {
          id: "pypsc-q-u2l2c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A ball is rolled and then stops. Which force most directly slows and stops it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetism" },
              { id: "b", text: "Light" },
              { id: "c", text: "Sound" },
              { id: "d", text: "Friction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Friction", statement: "Friction is the force that slows moving objects until they stop." },
            ],
            steps: [
              { reasoning: "Friction rubs against the surface and removes motion.", marks: 1, markCode: "M" },
              { reasoning: "Magnetism, light and sound do not directly stop rolling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Friction",
            commonErrors: ["Choosing magnetism — magnets attract metal, not stop all rolling."],
          },
        },
      ],
    },
    {
      id: "pypsc-u2l2-c2-motion-speed",
      title: "Motion, speed and air resistance",
      skill: "Describe how objects move at different speeds and how forces affect motion.",
      lesson: {
        sections: [
          {
            heading: "Describing motion",
            body: "Objects move in different ways: **fast** or **slow**, in a **straight line** or **circle**, **forwards** or **backwards**. **Speed** is how quickly something moves — a cheetah is fast, a snail is slow. We can measure speed by timing how long an object takes to travel a set distance.",
          },
          {
            heading: "Forces that change motion",
            body: "Forces can make objects **speed up**, **slow down** or **change direction**. A bigger push makes a ball go faster. **Air resistance** (a type of friction) slows objects moving through air — it is why a feather falls slowly and a paper plane needs a good throw. **Water resistance** does the same in water.",
          },
        ],
        keyFormulas: [
          { name: "Speed description", statement: "Fast/slow; measure by time over distance" },
          { name: "Force effects on motion", statement: "Speed up, slow down, change direction, stop" },
          { name: "Resistance", statement: "Air resistance and water resistance slow moving objects" },
        ],
        workedExample: {
          problem: "Why does a paper plane need a hard throw to fly far?",
          solution: "The throw gives it speed; air resistance slows it down. A harder throw gives more speed to overcome air resistance for longer.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u2l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which object is the FASTEST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turtle" },
              { id: "b", text: "Sloth" },
              { id: "c", text: "Snail" },
              { id: "d", text: "Cheetah" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Speed", statement: "Speed is how quickly something moves; cheetahs are the fastest land animals." },
            ],
            steps: [
              { reasoning: "Cheetah is fastest; snail, turtle and sloth are slow.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cheetah",
            commonErrors: ["Choosing 'turtle' — turtles are slow; cheetahs are built for speed."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A feather and a stone are dropped from the same height. Which hits the ground first and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air resistance", statement: "Air resistance slows light objects with large surface area more than heavy compact ones." },
            ],
            steps: [
              { reasoning: "The stone hits first — it is heavier and has less air resistance effect.", marks: 1, markCode: "M" },
              { reasoning: "The feather has large surface area and light weight, so air resistance slows it greatly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stone first — feather is slowed by air resistance due to its light weight and large surface.",
            commonErrors: ["Saying 'they hit at the same time' — that ignores air resistance on the feather."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ball is rolled gently and then rolled hard. Describe how its motion changes and what causes it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Force and speed", statement: "A bigger push gives more speed; the ball travels further before stopping." },
            ],
            steps: [
              { reasoning: "The gentle roll gives the ball less speed — it stops sooner.", marks: 1, markCode: "M" },
              { reasoning: "The hard roll gives more force/speed — the ball travels further.", marks: 1, markCode: "M" },
              { reasoning: "The push force determines initial speed; friction eventually stops both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hard roll = faster initial speed and further travel; gentle roll stops sooner. Force sets the speed.",
            commonErrors: ["Saying 'the hard ball is heavier' — same ball, different force applied."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class races different objects down a ramp.",
          parts: [
            { label: "a", prompt: "Name two objects that would roll fastest and why.", marks: 2 },
            { label: "b", prompt: "What force pulls the objects down the ramp?", marks: 1 },
            { label: "c", prompt: "What slows the objects down at the bottom?", marks: 2 },
            { label: "d", prompt: "If the ramp is made steeper, what happens to the objects' speed? Explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motion on ramps", statement: "Gravity pulls down the ramp; friction and air resistance slow objects." },
            ],
            steps: [
              { part: "a", reasoning: "Round, smooth objects like balls or cylinders roll fastest — less friction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explanation: round shape reduces friction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gravity pulls them down.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Friction on the ramp surface and air resistance.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both named correctly.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Steeper ramp = gravity pulls more directly = faster.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation links slope to speed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) round/smooth objects (b) gravity (c) friction+air resistance (d) steeper=faster",
            commonErrors: ["In (a), choosing heavy objects — shape matters more than weight for rolling."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does speed describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How quickly an object moves" },
              { id: "b", text: "How old an object is" },
              { id: "c", text: "How heavy an object is" },
              { id: "d", text: "How colourful an object is" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Speed", statement: "Speed is how quickly something moves." },
            ],
            steps: [
              { reasoning: "Speed describes quickness of movement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** How quickly an object moves",
            commonErrors: ["Choosing weight — speed is about movement, not mass."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A toy car travels 30 cm in 3 seconds. What is its speed in centimetres per second?",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 10, tolerance: 0, unit: "cm/s" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Speed calculation", statement: "Speed = distance divided by time." },
            ],
            steps: [
              { reasoning: "Use distance divided by time: 30 divided by 3.", marks: 1, markCode: "M" },
              { reasoning: "30 divided by 3 equals 10.", marks: 1, markCode: "M" },
              { reasoning: "The speed is 10 cm per second.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 cm/s",
            commonErrors: ["Multiplying 30 by 3 instead of dividing."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does a feather fall more slowly than a stone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air resistance", statement: "Air resistance slows light objects with large surfaces more than heavy compact ones." },
            ],
            steps: [
              { reasoning: "The feather is light and has a large surface area.", marks: 1, markCode: "M" },
              { reasoning: "Air resistance slows it much more than the compact stone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Air resistance slows the feather because it is light with a large surface.",
            commonErrors: ["Saying feathers are heavier — they are lighter, so air resistance matters more."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is something a force can do to a moving object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make it stop moving" },
              { id: "b", text: "Remove its shape" },
              { id: "c", text: "Make it smell" },
              { id: "d", text: "Change its colour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Force effects", statement: "Forces can start, stop, speed up, slow down or change direction." },
            ],
            steps: [
              { reasoning: "A force can stop a moving object.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Make it stop moving",
            commonErrors: ["Choosing colour — forces affect motion, not colour."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ball travels 60 cm in 3 seconds. What is its speed in centimetres per second?",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 20, tolerance: 0, unit: "cm/s" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Speed calculation", statement: "Speed = distance divided by time." },
            ],
            steps: [
              { reasoning: "Divide distance by time: 60 divided by 3.", marks: 1, markCode: "M" },
              { reasoning: "60 divided by 3 equals 20.", marks: 1, markCode: "M" },
              { reasoning: "The speed is 20 cm per second.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 cm/s",
            commonErrors: ["Multiplying instead of dividing distance by time."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when you push a ball harder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "It becomes heavier" },
              { id: "c", text: "It usually moves faster" },
              { id: "d", text: "It stops immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Force and speed", statement: "A bigger push gives an object more speed." },
            ],
            steps: [
              { reasoning: "A harder push usually makes the ball go faster.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It usually moves faster",
            commonErrors: ["Thinking the ball becomes heavier — the force changes speed, not mass."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many types of resistance are named: air resistance and water resistance?",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance types", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resistance", statement: "Air resistance and water resistance slow moving objects." },
            ],
            steps: [
              { reasoning: "Air and water are the two resistance types named.", marks: 1, markCode: "M" },
              { reasoning: "There are two types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting friction separately — air and water resistance are types of friction."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why objects roll faster down a steeper ramp.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Slope and speed", statement: "A steeper ramp lets gravity pull more directly, increasing speed." },
            ],
            steps: [
              { reasoning: "Gravity still pulls objects down the ramp.", marks: 1, markCode: "M" },
              { reasoning: "On a steeper ramp the pull is more direct, so objects speed up more.", marks: 1, markCode: "M" },
              { reasoning: "Friction and air resistance still slow them, but speed is greater.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steeper ramps give gravity a more direct pull, so objects move faster.",
            commonErrors: ["Saying gravity disappears — it still acts but the slope changes its effect."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does a paper plane need a strong throw to fly far?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paper is very heavy" },
              { id: "b", text: "Gravity stops acting" },
              { id: "c", text: "The throw gives speed to overcome air resistance for longer" },
              { id: "d", text: "Air resistance helps it fly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air resistance", statement: "A strong throw gives speed that helps the plane travel before air resistance slows it." },
            ],
            steps: [
              { reasoning: "More initial speed lets the plane travel further.", marks: 1, markCode: "M" },
              { reasoning: "Air resistance still slows it; gravity still acts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The throw gives speed to overcome air resistance for longer",
            commonErrors: ["Choosing air resistance helps — resistance slows the plane."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car rolls 20 cm on carpet, 50 cm on wood and 80 cm on ice. How many centimetres further does it roll on ice than carpet?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 60, tolerance: 0, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Comparing distances", statement: "Difference = ice distance minus carpet distance." },
            ],
            steps: [
              { reasoning: "Subtract carpet distance from ice distance: 80 - 20.", marks: 1, markCode: "M" },
              { reasoning: "The car rolls 60 cm further on ice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 cm",
            commonErrors: ["Comparing wood instead of ice — the question asks ice versus carpet."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many surfaces are smoother than carpet: wood, ice and carpet itself?",
          response: {
            type: "numeric",
            parts: [{ label: "Smoother surfaces", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Surface smoothness", statement: "Wood and ice are smoother than carpet, so they create less friction." },
            ],
            steps: [
              { reasoning: "Wood and ice are smoother than carpet.", marks: 1, markCode: "M" },
              { reasoning: "Carpet itself is not smoother than carpet.", marks: 1, markCode: "M" },
              { reasoning: "Two surfaces are smoother.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting carpet — it cannot be smoother than itself."],
          },
        },
        {
          id: "pypsc-q-u2l2c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does a feather take longer to fall than a stone dropped at the same time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity does not act on feathers" },
              { id: "b", text: "Air resistance slows the feather more" },
              { id: "c", text: "The stone has wings" },
              { id: "d", text: "The feather is heavier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air resistance", statement: "Air resistance slows light, large-surface objects more." },
            ],
            steps: [
              { reasoning: "The feather's light weight and large surface increase air resistance.", marks: 1, markCode: "M" },
              { reasoning: "Gravity acts on both, but air resistance slows the feather more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Air resistance slows the feather more",
            commonErrors: ["Saying gravity ignores feathers — gravity acts on both objects."],
          },
        },
      ],
    },
  ],
};
