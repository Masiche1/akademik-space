import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "esc8-u3-lesson-3-1",
  code: "3-1",
  title: "Forces",
  goal: "I CAN identify contact and non-contact forces, find a resultant force, and calculate average speed using speed = distance / time.",
  standards: ["KS3 Physics: Forces", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Force", definition: "A push or a pull on an object. It is measured in newtons (N)." },
    { term: "Contact force", definition: "A force that acts only when two objects are touching, for example friction, air resistance and tension." },
    { term: "Non-contact force", definition: "A force that acts between objects without them touching, for example gravity, magnetic force and electrostatic force." },
    { term: "Resultant force", definition: "The single force that has the same effect as all the forces acting on an object added together, taking direction into account." },
    { term: "Balanced forces", definition: "Forces that cancel out so the resultant force is zero. The motion of the object does not change." },
    { term: "Friction", definition: "A contact force that opposes motion between two surfaces that are touching." },
    { term: "Average speed", definition: "The total distance travelled divided by the total time taken." },
  ],
  concepts: [
    {
      id: "esc8-u3-forces-resultant",
      title: "Contact and non-contact forces, resultant force",
      skill: "Classify forces as contact or non-contact, and find and interpret the resultant force on an object.",
      lesson: {
        sections: [
          {
            heading: "Contact and non-contact forces",
            body: "A force is a push or a pull, measured in **newtons (N)**. **Contact forces** only act when objects touch: friction, air resistance, water resistance, tension in a rope and the normal (reaction) force from a surface. **Non-contact forces** act across a gap: gravity (which gives an object its weight), magnetic force and electrostatic force.",
          },
          {
            heading: "Resultant force",
            body: "Several forces often act on one object. The **resultant force** is found by adding forces that act in the same direction and subtracting forces that act in opposite directions. Always state the direction of the resultant.\n\nIf the forces are **balanced** the resultant force is $0\\text{ N}$: a stationary object stays at rest and a moving object keeps moving at the same speed in a straight line. If the forces are **unbalanced** the object speeds up, slows down or changes direction, in the direction of the resultant force.",
          },
        ],
        keyFormulas: [
          { name: "Resultant force (same line)", statement: "Add forces in the same direction; subtract forces in opposite directions" },
          { name: "Balanced forces", statement: "Resultant force $=0\\text{ N}$, so no change in motion" },
          { name: "Unit of force", statement: "The newton, $\\text{N}$" },
        ],
        workedExample: {
          problem: "A sledge is pulled to the right with a force of $120\\text{ N}$. Friction of $45\\text{ N}$ acts to the left. Find the resultant force and describe what happens to the sledge.",
          solution: "The forces act in opposite directions, so subtract: $120-45=75\\text{ N}$. The resultant force is $75\\text{ N}$ to the right, so the sledge speeds up (accelerates) to the right.",
        },
      },
      questions: [
        {
          id: "esc8-u3-forces-resultant-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a non-contact force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tension in a rope" },
              { id: "b", text: "The force between two magnets" },
              { id: "c", text: "Air resistance on a falling leaf" },
              { id: "d", text: "Friction between a shoe and the floor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-contact force", statement: "A force that acts between objects without them touching, for example gravity, magnetic and electrostatic forces." },
            ],
            steps: [
              { reasoning: "Magnets can attract or repel each other across a gap, so the magnetic force does not need contact.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The force between two magnets",
            commonErrors: ["Choosing air resistance because the air is invisible and seems to act at a distance; it only acts where the air touches the object.", "Choosing tension, forgetting that the rope must touch the object."],
            examinerNote: "B1 for magnetic force only.",
          },
        },
        {
          id: "esc8-u3-forces-resultant-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A box is pushed to the right across the floor with a force of $40\\text{ N}$. Friction of $15\\text{ N}$ acts to the left. Calculate the resultant force on the box, in newtons.",
          response: { type: "numeric", parts: [{ label: "Resultant force (to the right)", answer: 25, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant force", statement: "For forces along one line, subtract forces acting in opposite directions." },
            ],
            steps: [
              { reasoning: "The forces act in opposite directions, so subtract the smaller from the larger.", working: "40-15", marks: 1, markCode: "M" },
              { reasoning: "The larger force acts to the right, so the resultant is to the right.", working: "25\\text{ N to the right}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\text{ N}$ to the right",
            commonErrors: ["Adding the forces to get 55 N.", "Giving the answer without a direction when the question asks for the resultant force."],
            examinerNote: "M1 for subtracting the two forces. A1 for 25 N. Allow A1 without direction here because the question asks only for the size (ignore a missing direction).",
          },
        },
        {
          id: "esc8-u3-forces-resultant-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car is driven along a straight, level road at a constant speed. The driving force from the engine is $800\\text{ N}$.\n\nThe driver then presses the accelerator so that the driving force increases to $1000\\text{ N}$. The resistive forces stay the same.\n\nExplain, using the idea of resultant force, how the motion of the car is different before and after the driving force increases. Include the size of the resultant force in each case.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Balanced forces", statement: "If the resultant force on an object is zero, its speed and direction do not change." },
              { kind: "law", name: "Unbalanced forces", statement: "A non-zero resultant force changes the motion of an object in the direction of the resultant." },
            ],
            steps: [
              { reasoning: "At constant speed the forces are balanced, so the resultant force is zero.", working: "\\text{resultant}=0\\text{ N}", marks: 1, markCode: "B" },
              { reasoning: "Balanced forces mean the resistive forces (friction and air resistance) equal the driving force.", working: "\\text{resistive forces}=800\\text{ N}", marks: 1, markCode: "B" },
              { reasoning: "After the increase, the driving force is bigger than the resistive forces.", working: "1000-800=200\\text{ N forwards}", marks: 1, markCode: "B" },
              { reasoning: "A resultant force forwards means the car speeds up (accelerates) in the forward direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Before: resultant $0\\text{ N}$, constant speed. After: resultant $200\\text{ N}$ forwards, so the car speeds up.",
            commonErrors: ["Saying that a moving car needs a resultant force to keep moving at constant speed.", "Stating that the resistive forces become 1000 N."],
            examinerNote: "Allow 'accelerates' for 'speeds up'. Reject 'moves faster' without reference to the resultant force for the last mark. ecf from an incorrect resistive force.",
          },
        },
        {
          id: "esc8-u3-forces-resultant-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A motorboat is on a calm lake. The engine pushes the boat forwards with a force of $600\\text{ N}$. The water resistance on the boat acts backwards and is $450\\text{ N}$ when the boat starts to move.",
          parts: [
            { label: "a", prompt: "Name one non-contact force that acts on the boat.", marks: 1 },
            { label: "b", prompt: "Calculate the resultant force on the boat when it starts to move. Give the direction of the force.", marks: 2 },
            { label: "c", prompt: "Describe the motion of the boat at this moment.", marks: 2 },
            { label: "d", prompt: "As the boat gains speed, the water resistance increases until it is $600\\text{ N}$. State the resultant force on the boat then, and explain how the boat moves.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-contact force", statement: "A force that acts without the objects touching, for example gravity." },
              { kind: "principle", name: "Resultant force", statement: "Subtract forces acting in opposite directions along the same line." },
              { kind: "law", name: "Balanced forces", statement: "If the resultant force is zero, the object stays at rest or moves at constant speed in a straight line." },
            ],
            steps: [
              { part: "a", reasoning: "Gravity (weight) acts on the boat without contact between the boat and the Earth.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The two horizontal forces act in opposite directions, so subtract.", working: "600-450", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The engine force is bigger, so the resultant acts forwards.", working: "150\\text{ N forwards}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The resultant force is forwards and not zero, so the boat is unbalanced.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "An unbalanced forward force makes the boat speed up (accelerate) in the forward direction.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The engine force and the water resistance are now equal and opposite.", working: "600-600=0\\text{ N}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The forces are balanced, so there is no change in the boat's motion.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The boat travels at a constant speed in a straight line (it stops accelerating).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Gravity / weight (b) $150\\text{ N}$ forwards (c) The boat speeds up in the forward direction (d) Resultant $0\\text{ N}$; forces balanced, so the boat moves at constant speed in a straight line.",
            commonErrors: ["Saying that the boat stops when the resultant force is zero.", "Naming water resistance or friction as the non-contact force in (a).", "Adding 600 N and 450 N to get 1050 N in (b)."],
            examinerNote: "(a) Allow magnetic or electrostatic force only if linked to the boat; gravity or weight is expected. Reject 'upthrust'. (c) Allow 'accelerates forwards' (oe). (d) Reject 'stops moving'.",
          },
        },
      ],
    },
    {
      id: "esc8-u3-speed",
      title: "Speed = distance / time",
      skill: "Calculate average speed, distance and time, and analyse timing data from a simple practical.",
      lesson: {
        sections: [
          {
            heading: "Calculating average speed",
            body: "Speed tells you how far an object travels in each unit of time. **Average speed** is the total distance divided by the total time:\n\n$$\\text{speed}=\\frac{\\text{distance}}{\\text{time}}$$\n\nThe usual units are metres per second ($\\text{m/s}$), with distance in metres ($\\text{m}$) and time in seconds ($\\text{s}$). Speeds in kilometres per hour ($\\text{km/h}$) use kilometres and hours.",
          },
          {
            heading: "Rearranging the equation",
            body: "Rearrange to find distance or time: $\\text{distance}=\\text{speed}\\times\\text{time}$ and $\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$. For a journey in several stages, add all the distances and add all the times before dividing. Do **not** average the speeds of the stages.",
          },
          {
            heading: "Measuring speed in an experiment",
            body: "Measure the distance with a metre rule or tape measure and the time with a stopwatch. Repeat the timing and calculate a mean, ignoring any **anomalous** result (one that does not fit the pattern). Human reaction time when starting and stopping a stopwatch causes error; light gates reduce it.",
          },
        ],
        keyFormulas: [
          { name: "Average speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Distance", statement: "$\\text{distance}=\\text{speed}\\times\\text{time}$" },
          { name: "Time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
        ],
        workedExample: {
          problem: "A cyclist travels $1500\\text{ m}$ in $300\\text{ s}$. Calculate the average speed in $\\text{m/s}$, then the distance travelled in $40\\text{ s}$ at that speed.",
          solution: "$\\text{speed}=\\dfrac{1500}{300}=5\\text{ m/s}$. In $40\\text{ s}$: $\\text{distance}=5\\times40=200\\text{ m}$.",
        },
      },
      questions: [
        {
          id: "esc8-u3-speed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation is used to calculate average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{speed}=\\dfrac{\\text{time}}{\\text{distance}}$" },
              { id: "b", text: "$\\text{speed}=\\text{distance}\\times\\text{time}$" },
              { id: "c", text: "$\\text{speed}=\\text{distance}+\\text{time}$" },
              { id: "d", text: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Speed is the distance travelled per unit of time, so divide distance by time.", working: "v=\\frac{s}{t}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$",
            commonErrors: ["Inverting the equation to time divided by distance.", "Multiplying distance and time, which gives a quantity measured in metre-seconds."],
            examinerNote: "B1 for the correct equation.",
          },
        },
        {
          id: "esc8-u3-speed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels $1500\\text{ m}$ in $300\\text{ s}$. Calculate the average speed of the cyclist in $\\text{m/s}$.",
          response: { type: "numeric", parts: [{ label: "Average speed", answer: 5, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Substitute the distance and time into the equation.", working: "v=\\frac{s}{t}=\\frac{1500}{300}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "v=5\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\text{ m/s}$",
            commonErrors: ["Dividing time by distance to get 0.2.", "Multiplying to get 450 000."],
            examinerNote: "M1 for 1500 / 300. A1 for 5 with the unit m/s (allow 5 without the unit if the unit is given on the answer line).",
          },
        },
        {
          id: "esc8-u3-speed-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A runner runs $400\\text{ m}$ in $80\\text{ s}$ and then walks $200\\text{ m}$ in $120\\text{ s}$. Calculate the average speed for the whole journey, in $\\text{m/s}$.",
          response: { type: "numeric", parts: [{ label: "Average speed for the whole journey", answer: 3, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{average speed}=\\dfrac{\\text{total distance}}{\\text{total time}}$" },
            ],
            steps: [
              { reasoning: "Add the distances and add the times for the whole journey.", working: "400+200=600\\text{ m},\\quad 80+120=200\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Divide the total distance by the total time.", working: "v=\\frac{600}{200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "v=3\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\text{ m/s}$",
            commonErrors: ["Averaging the two speeds (5 m/s and 1.67 m/s) to get about 3.33 m/s.", "Using only the first stage of the journey."],
            examinerNote: "M1 for both totals. M1 for total distance / total time. A1 for 3. Reject the mean of the two speeds.",
          },
        },
        {
          id: "esc8-u3-speed-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the speed of a toy car on a flat track. The car travels a distance of $1.50\\text{ m}$. The student times the car with a stopwatch four times.\n\nTimes: $2.0\\text{ s}$, $2.2\\text{ s}$, $3.4\\text{ s}$, $2.1\\text{ s}$.",
          parts: [
            { label: "a", prompt: "Identify the anomalous result.", marks: 1 },
            { label: "b", prompt: "Calculate the mean time, ignoring the anomalous result.", marks: 2 },
            { label: "c", prompt: "Calculate the average speed of the car in $\\text{m/s}$. Give your answer to 2 significant figures.", marks: 2 },
            { label: "d", prompt: "Suggest one reason for the anomalous result and one way to improve the reliability of the investigation.", marks: 2 },
            { label: "e", prompt: "Another toy car travels at a constant $0.80\\text{ m/s}$. Calculate the distance it travels in $12\\text{ s}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
              { kind: "formula", name: "Distance", statement: "$\\text{distance}=\\text{speed}\\times\\text{time}$" },
              { kind: "principle", name: "Anomalous results", statement: "An anomalous result does not fit the pattern of repeats and is left out of the mean." },
            ],
            steps: [
              { part: "a", reasoning: "The other three times are close together (2.0 to 2.2 s); 3.4 s is far from them.", working: "3.4\\text{ s}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the three valid times and divide by three.", working: "\\frac{2.0+2.2+2.1}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{6.3}{3}=2.1\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute the distance and the mean time.", working: "v=\\frac{s}{t}=\\frac{1.50}{2.1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round to 2 significant figures.", working: "v=0.714\\ldots=0.71\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A reason linked to timing by hand, for example reaction time when starting or stopping the stopwatch.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "An improvement, for example use light gates or video analysis, or take more repeats.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Rearrange the speed equation and substitute.", working: "s=v\\times t=0.80\\times12", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate with the unit.", working: "s=9.6\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.4\\text{ s}$ (b) $2.1\\text{ s}$ (c) $0.71\\text{ m/s}$ (d) Reaction time error; use light gates or more repeats (e) $9.6\\text{ m}$",
            commonErrors: ["Including 3.4 s in the mean, giving 2.425 s.", "Calculating the mean of the speeds rather than using the mean time.", "Giving the answer to (e) as 15 m by dividing 12 by 0.80."],
            examinerNote: "(c) Allow 0.714 or 0.7 (ecf from the mean in (b), tolerance 0.01). (d) Allow 'human error' only if linked to starting or stopping the stopwatch. 'Repeat the experiment' alone does not gain the second mark unless it refers to more repeats to calculate a mean.",
          },
        },
      ],
    },
  ],
};
