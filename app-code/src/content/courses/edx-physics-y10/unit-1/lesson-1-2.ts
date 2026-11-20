import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eph10-u1-lesson-1-2",
  code: "1-2",
  title: "Forces and Newton's Laws",
  goal: "I CAN find resultant forces, apply Newton's laws and $F = ma$, and explain weight, stopping distances and terminal velocity.",
  standards: ["4PH1 1.9", "4PH1 1.10", "4PH1 1.11", "4PH1 1.12", "4PH1 1.13", "4PH1 1.14", "4PH1 1.15"],
  vocabulary: [
    { term: "Resultant force", definition: "The single force that has the same effect as all the forces acting on an object together." },
    { term: "Newton's first law", definition: "An object stays at rest or moves at constant velocity unless a resultant force acts on it." },
    { term: "Inertia", definition: "The tendency of an object to resist any change in its motion." },
    { term: "Weight", definition: "The force of gravity on an object, found from $W = mg$. Measured in newtons." },
    { term: "Thinking distance", definition: "The distance a vehicle travels during the driver's reaction time, before the brakes are applied." },
    { term: "Braking distance", definition: "The distance a vehicle travels while the brakes are slowing it down." },
    { term: "Terminal velocity", definition: "The constant velocity reached when the resistive force on a falling object equals its weight." },
  ],
  concepts: [
    {
      id: "eph10-u1-resultant-newton",
      title: "Resultant forces and Newton's laws",
      skill: "Calculate resultant forces and use $F = ma$ and Newton's three laws.",
      lesson: {
        sections: [
          {
            heading: "Resultant force",
            body: "Forces are vectors. Forces in the same direction **add**; forces in opposite directions are **subtracted**. The result is the **resultant force**, in the direction of the larger force. If the forces balance, the resultant is zero.",
          },
          {
            heading: "Newton's first and second laws",
            body: "**First law**: if the resultant force is zero, a stationary object stays at rest and a moving object keeps moving at constant speed in a straight line.\n\n**Second law**: a resultant force causes acceleration in the direction of the force.\n\n$$F = ma$$\n\nwhere $F$ is the resultant force in newtons (N), $m$ is the mass in kg and $a$ is the acceleration in $\\text{m/s}^2$. For the same force, a larger mass has a smaller acceleration (inertia).",
          },
          {
            heading: "Newton's third law",
            body: "**Third law**: when object A exerts a force on object B, B exerts an equal and opposite force on A. The two forces are the same type, act on **different objects** and have equal size. A book on a table: the book pushes down on the table and the table pushes up on the book. These are a third-law pair. The book's weight and the table's support force are not a pair, as both act on the book.",
          },
        ],
        keyFormulas: [
          { name: "Newton's second law", statement: "$F = ma$ (resultant force = mass $\\times$ acceleration)" },
          { name: "Resultant force", statement: "Same direction: add. Opposite directions: subtract." },
          { name: "Newton's third law", statement: "Forces between two objects are equal in size, opposite in direction and act on different objects." },
        ],
        workedExample: {
          problem: "A $4.0\\text{ kg}$ trolley is pushed with a resultant force of $10\\text{ N}$. Calculate its acceleration.",
          solution: "$a = \\frac{F}{m} = \\frac{10}{4.0} = 2.5\\text{ m/s}^2$.",
        },
      },
      questions: [
        {
          id: "eph10-u1-resultant-newton-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parachutist falls at a constant velocity. What is the resultant force on the parachutist?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Downwards, equal to the weight" },
              { id: "b", text: "Upwards, equal to the air resistance" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Downwards, getting larger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's first law", statement: "Constant velocity means zero acceleration, so the resultant force is zero." },
            ],
            steps: [
              { reasoning: "Constant velocity means no acceleration, so the forces balance and the resultant force is zero.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Zero",
            commonErrors: ["Thinking that movement needs a resultant force in the direction of travel."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u1-resultant-newton-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car of mass $1200\\text{ kg}$ has an engine force of $3000\\text{ N}$ forwards. Resistive forces of $600\\text{ N}$ act backwards. Calculate the acceleration of the car.",
          response: {
            type: "numeric",
            parts: [{ label: "Acceleration", answer: 2, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's second law", statement: "$F = ma$, where $F$ is the resultant force." },
            ],
            steps: [
              { reasoning: "Subtract the opposing force.", working: "F = 3000 - 600 = 2400\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange $F = ma$ and substitute.", working: "a = \\frac{F}{m} = \\frac{2400}{1200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "a = 2.0\\text{ m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0\\text{ m/s}^2$",
            commonErrors: ["Using the engine force of $3000\\text{ N}$ instead of the resultant (giving $2.5\\text{ m/s}^2$).", "Adding the forces to get $3600\\text{ N}$."],
            examinerNote: "A1 cao 2. Allow ecf from a wrong resultant force.",
          },
        },
        {
          id: "eph10-u1-resultant-newton-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car of mass $800\\text{ kg}$ accelerates uniformly from rest to $15\\text{ m/s}$ in $10\\text{ s}$. A constant resistive force of $400\\text{ N}$ acts on it throughout. Calculate the force produced by the engine.",
          response: {
            type: "numeric",
            parts: [{ label: "Engine force", answer: 1600, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a = \\frac{v - u}{t}$" },
              { kind: "law", name: "Newton's second law", statement: "$F_{\\text{resultant}} = ma = F_{\\text{engine}} - F_{\\text{resistive}}$" },
            ],
            steps: [
              { reasoning: "Find the acceleration, and then the resultant force.", working: "a = \\frac{15 - 0}{10} = 1.5\\text{ m/s}^2,\\quad F = ma = 800 \\times 1.5 = 1200\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "The engine force must also overcome the resistive force.", working: "F_{\\text{engine}} = 1200 + 400", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "1600\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1600\\text{ N}$",
            commonErrors: ["Giving the resultant force, $1200\\text{ N}$, as the engine force.", "Subtracting the resistive force instead of adding it."],
            examinerNote: "A1 cao 1600. Allow ecf from a wrong acceleration.",
          },
        },
        {
          id: "eph10-u1-resultant-newton-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A trolley of mass $2.0\\text{ kg}$ is pulled along a bench, starting from rest, by a constant horizontal force of $5.0\\text{ N}$. Friction of $1.0\\text{ N}$ acts against the motion.",
          parts: [
            { label: "a", prompt: "Calculate the resultant force on the trolley.", marks: 2 },
            { label: "b", prompt: "Calculate the acceleration of the trolley.", marks: 2 },
            { label: "c", prompt: "Calculate the velocity of the trolley after $3.0\\text{ s}$.", marks: 2 },
            { label: "d", prompt: "The pulling force is removed when the trolley is moving. Use Newton's first law to explain what would happen if there were no friction.", marks: 2 },
            { label: "e", prompt: "The trolley pulls on the string with a force of $5.0\\text{ N}$. State the force that is the Newton's third law pair of this force.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's second law", statement: "$F = ma$" },
              { kind: "law", name: "Newton's first law", statement: "With zero resultant force, a moving object continues at constant velocity." },
              { kind: "law", name: "Newton's third law", statement: "Forces between two interacting objects are equal and opposite and act on different objects." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the friction from the pull, as they act in opposite directions.", working: "5.0 - 1.0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "4.0\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rearrange $F = ma$.", working: "a = \\frac{4.0}{2.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "2.0\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $a = \\frac{v - u}{t}$ with $u = 0$.", working: "v = u + at = 0 + 2.0 \\times 3.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "6.0\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "With no friction the resultant force is zero.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So the trolley continues at constant velocity (the same speed in a straight line).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The pair of 'trolley pulls on string' is 'string pulls on trolley'. The two forces act on different objects.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It is equal in size, $5.0\\text{ N}$, and opposite in direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $4.0\\text{ N}$ (b) $2.0\\text{ m/s}^2$ (c) $6.0\\text{ m/s}$ (d) resultant force zero, so constant velocity (e) the string pulls on the trolley with $5.0\\text{ N}$ in the opposite direction",
            commonErrors: ["Using $5.0\\text{ N}$ instead of the resultant in (b), giving $2.5\\text{ m/s}^2$.", "Saying in (d) that the trolley stops as there is no force.", "Choosing the friction force as the third-law pair in (e)."],
            examinerNote: "In (e) accept 'the force of the string on the trolley' for the first mark. Reject friction. Allow ecf in (c) from (b).",
          },
        },
      ],
    },
    {
      id: "eph10-u1-weight-stopping-terminal",
      title: "Weight, stopping distance and terminal velocity",
      skill: "Use $W = mg$, analyse stopping distances, and explain terminal velocity.",
      lesson: {
        sections: [
          {
            heading: "Mass and weight",
            body: "**Mass** is the amount of matter in an object, in kg, and does not change with place. **Weight** is the force of gravity on it, in N:\n\n$$W = mg$$\n\nwhere $g$ is the gravitational field strength. On Earth use $g = 10\\text{ N/kg}$. On the Moon it is about $1.6\\text{ N/kg}$, so the same object has the same mass but a smaller weight.",
          },
          {
            heading: "Stopping distance",
            body: "$$\\text{stopping distance} = \\text{thinking distance} + \\text{braking distance}$$\n\n**Thinking distance** = speed $\\times$ reaction time. It is increased by higher speed, tiredness, alcohol, drugs and distractions.\n\n**Braking distance** is increased by higher speed, a heavier vehicle, worn brakes or tyres, and wet or icy roads. Doubling the speed more than doubles the braking distance (it is four times as large).",
          },
          {
            heading: "Terminal velocity",
            body: "A skydiver starts with weight greater than air resistance, so accelerates downwards. As speed rises, **air resistance rises**, so the resultant force and acceleration fall. When air resistance equals weight, the resultant force is zero and the skydiver falls at constant **terminal velocity**. Opening the parachute suddenly increases air resistance, so the skydiver slows down until a new, lower terminal velocity is reached.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W = mg$, with $g = 10\\text{ N/kg}$ on Earth" },
          { name: "Stopping distance", statement: "thinking distance + braking distance" },
          { name: "Thinking distance", statement: "$\\text{speed} \\times \\text{reaction time}$" },
        ],
        workedExample: {
          problem: "Calculate the weight of a $3.0\\text{ kg}$ bag on Earth. ($g = 10\\text{ N/kg}$)",
          solution: "$W = mg = 3.0 \\times 10 = 30\\text{ N}$.",
        },
      },
      questions: [
        {
          id: "eph10-u1-weight-stopping-terminal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An astronaut travels from the Earth to the Moon. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass and weight both decrease" },
              { id: "b", text: "Mass stays the same and weight decreases" },
              { id: "c", text: "Mass decreases and weight stays the same" },
              { id: "d", text: "Mass and weight both stay the same" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$. Mass is constant; $g$ is smaller on the Moon." },
            ],
            steps: [
              { reasoning: "Mass is the amount of matter, which does not change. The Moon's gravitational field strength is smaller, so the weight decreases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mass stays the same and weight decreases",
            commonErrors: ["Confusing mass and weight."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph10-u1-weight-stopping-terminal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rock has a mass of $55\\text{ kg}$. Calculate its weight (i) on Earth, where $g = 10\\text{ N/kg}$, and (ii) on the Moon, where $g = 1.6\\text{ N/kg}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Weight on Earth", answer: 550, unit: "N" },
              { label: "(ii) Weight on the Moon", answer: 88, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute into $W = mg$ for Earth.", working: "W = 55 \\times 10 = 550\\text{ N}", marks: 1, markCode: "A" },
              { reasoning: "Substitute the Moon's gravitational field strength.", working: "W = 55 \\times 1.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "88\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $550\\text{ N}$ (ii) $88\\text{ N}$",
            commonErrors: ["Dividing mass by $g$.", "Using $1.6$ for the Earth's field strength."],
            examinerNote: "Allow ecf in (ii) if the same wrong method is used.",
          },
        },
        {
          id: "eph10-u1-weight-stopping-terminal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A skydiver jumps from a plane and later opens a parachute. Explain why the skydiver reaches a terminal velocity before the parachute opens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Terminal velocity", statement: "Terminal velocity is reached when air resistance equals weight, so the resultant force is zero." },
              { kind: "law", name: "Newton's first law", statement: "Zero resultant force means constant velocity." },
            ],
            steps: [
              { reasoning: "At first the weight is greater than the air resistance, so there is a resultant force downwards and the skydiver accelerates.", marks: 1, markCode: "B" },
              { reasoning: "As the speed increases, the air resistance increases.", marks: 1, markCode: "B" },
              { reasoning: "Eventually the air resistance equals the weight, so the resultant force is zero.", marks: 1, markCode: "B" },
              { reasoning: "So there is no acceleration and the skydiver falls at a constant (terminal) velocity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Air resistance rises with speed until it equals weight; the resultant force is zero, so velocity is constant.",
            commonErrors: ["Saying the weight decreases or that gravity stops acting.", "Saying that the skydiver stops accelerating because air resistance is greater than weight."],
            examinerNote: "Ignore references to 'friction' for air resistance, but reject 'gravity equals air resistance' unless weight or force is clear.",
          },
        },
        {
          id: "eph10-u1-weight-stopping-terminal-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A driver is travelling at $20\\text{ m/s}$ when a child runs into the road. The driver's reaction time is $0.70\\text{ s}$. After the brakes are applied, the car decelerates uniformly at $5.0\\text{ m/s}^2$ until it stops.",
          parts: [
            { label: "a", prompt: "State what is meant by stopping distance.", marks: 1 },
            { label: "b", prompt: "Calculate the thinking distance.", marks: 2 },
            { label: "c", prompt: "Use $v^2 = u^2 + 2as$ to calculate the braking distance.", marks: 3 },
            { label: "d", prompt: "Calculate the stopping distance.", marks: 1 },
            { label: "e", prompt: "Give two factors that would increase the stopping distance on a wet night.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stopping distance", statement: "Stopping distance = thinking distance + braking distance." },
              { kind: "formula", name: "Thinking distance", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
              { kind: "formula", name: "Uniform acceleration", statement: "$v^2 = u^2 + 2as$" },
            ],
            steps: [
              { part: "a", reasoning: "The total distance the car travels from when the driver sees the hazard to when it stops, the sum of thinking and braking distances.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The car moves at constant speed during the reaction time.", working: "20 \\times 0.70", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "14\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $v = 0$, $u = 20$ and $a = -5.0$.", working: "0 = 20^2 + 2 \\times (-5.0) \\times s", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange.", working: "10s = 400", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $s$ with the unit.", working: "s = 40\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the thinking and braking distances.", working: "14 + 40 = 54\\text{ m}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "A wet road reduces friction between tyres and road, increasing braking distance.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Tiredness (or poor visibility or distraction) increases the reaction time, increasing thinking distance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) thinking distance + braking distance (b) $14\\text{ m}$ (c) $40\\text{ m}$ (d) $54\\text{ m}$ (e) reduced friction on wet road; tiredness or poor visibility",
            commonErrors: ["Forgetting the negative sign on the deceleration.", "Quoting the braking distance as the stopping distance.", "Giving factors such as 'fast speed', which is already stated."],
            examinerNote: "Allow ecf in (d) from (b) and (c). In (e) accept worn tyres or brakes, icy road, alcohol or distractions. Reject a heavier car for thinking distance.",
          },
        },
      ],
    },
  ],
};
