import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "s8-u1-lesson-1-1",
  code: "1-1",
  title: "Motion and Forces",
  goal: "I CAN calculate speed, read distance-time graphs, explain motion using balanced and unbalanced forces, and apply Newton's three laws and $F = ma$.",
  standards: ["MS-PS2-2", "MS-PS2-1", "SEP: Analyzing and Interpreting Data", "SEP: Using Mathematics and Computational Thinking"],
  vocabulary: [
    { term: "Speed", definition: "How far an object travels in a given time: distance divided by time." },
    { term: "Net force", definition: "The overall force on an object after all the forces acting on it are added, taking direction into account." },
    { term: "Balanced forces", definition: "Forces that cancel out so the net force is zero and motion does not change." },
    { term: "Unbalanced forces", definition: "Forces that do not cancel, so the net force is not zero and the motion changes." },
    { term: "Inertia", definition: "The tendency of an object to keep doing what it is already doing, at rest or moving at constant velocity." },
    { term: "Acceleration", definition: "The rate at which velocity changes, measured in $\\text{m/s}^2$." },
    { term: "Newton", definition: "The SI unit of force, written N. One newton is $1\\text{ kg}\\cdot\\text{m/s}^2$." },
  ],
  concepts: [
    {
      id: "s8-u1-speed-forces",
      title: "Speed, distance-time graphs and balanced forces",
      skill: "Calculate speed, interpret distance-time graphs, and relate balanced and unbalanced forces to changes in motion.",
      lesson: {
        sections: [
          {
            heading: "Speed and distance-time graphs",
            body: "**Speed** tells you how fast an object is moving.\n\n$$\\text{speed}=\\frac{\\text{distance}}{\\text{time}}$$\n\nSpeed is measured in meters per second ($\\text{m/s}$). On a **distance-time graph**, time is on the horizontal axis and distance on the vertical axis.\n\n- A **horizontal** line means the object is **stationary** (distance is not changing).\n- A **straight sloped** line means **constant speed**. The steeper the line, the faster the object.\n- A **curved** line means the speed is changing.\n\nThe slope (gradient) of the line equals the speed.",
          },
          {
            heading: "Balanced and unbalanced forces",
            body: "A force is a push or a pull, measured in newtons (N). Several forces can act on one object. The **net force** is their combined effect, with forces in opposite directions subtracting.\n\n- **Balanced forces:** net force is zero. A stationary object stays at rest. A moving object keeps moving at the same speed in a straight line.\n- **Unbalanced forces:** net force is not zero. The object speeds up, slows down, or changes direction.\n\nA car moving at a steady 20 m/s has the forward force from the engine balanced by friction and air resistance. Balanced forces do **not** mean there is no motion.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Distance-time graph", statement: "Horizontal line = stationary; straight slope = constant speed; steeper = faster" },
          { name: "Balanced forces", statement: "Net force = 0, so no change in motion" },
        ],
        workedExample: {
          problem: "A student walks 240 m in 200 s, stops for 60 s, then walks another 120 m in 100 s. Calculate her average speed for the whole trip.",
          solution: "Total distance $=240+120=360\\text{ m}$. Total time $=200+60+100=360\\text{ s}$ (the stop counts). Average speed $=\\dfrac{360}{360}=1\\text{ m/s}$.",
        },
      },
      questions: [
        {
          id: "s8-u1-speed-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, an object is shown by a horizontal line. What does this tell you about the object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is stationary." },
              { id: "b", text: "It is moving backward." },
              { id: "c", text: "It is speeding up." },
              { id: "d", text: "It is moving at a constant speed." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Distance-time graphs", statement: "A horizontal line shows that distance is not changing, so the object is at rest." },
            ],
            steps: [
              { reasoning: "The distance stays the same while time passes, so the object is not moving.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is stationary.",
            commonErrors: ["Thinking a flat line means constant speed; that is true for a speed-time graph, not a distance-time graph."],
            examinerNote: "B1 for stationary / not moving.",
          },
        },
        {
          id: "s8-u1-speed-forces-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist rides 360 m in 45 s at a constant speed.\n\nCalculate her speed in meters per second.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 8, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Substitute distance and time into the speed equation.", working: "\\text{speed}=\\frac{360}{45}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "\\text{speed}=8\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\text{ m/s}$",
            commonErrors: ["Dividing time by distance, which gives 0.125.", "Leaving out the unit."],
            examinerNote: "M1 for 360 / 45. A1 for 8 with correct unit.",
          },
        },
        {
          id: "s8-u1-speed-forces-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A hockey puck slides across smooth ice at a constant speed in a straight line. A student says, \"There must be a forward force keeping the puck moving.\"\n\nUse the idea of balanced and unbalanced forces to evaluate the student's claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's first law", statement: "An object keeps its velocity unless an unbalanced force acts on it." },
            ],
            steps: [
              { reasoning: "Claim: the student is incorrect; a force is not needed to keep an object moving at constant speed.", marks: 1, markCode: "R" },
              { reasoning: "Constant speed in a straight line means the forces are balanced (net force is zero), or there is almost no friction on smooth ice.", marks: 1, markCode: "B" },
              { reasoning: "An unbalanced force is only needed to change the motion (speed up, slow down or turn); friction would eventually slow the puck.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The claim is wrong. Constant speed means the net force is zero (balanced forces); an unbalanced force is only needed to change the puck's motion.",
            commonErrors: ["Believing motion always needs a continuing force.", "Saying there are no forces at all; gravity and the ice's support force are still acting and are balanced."],
            examinerNote: "R1 for rejecting the claim. B1 for net force zero / balanced forces. B1 for unbalanced force needed to change speed or direction. Allow 'friction is very small' oe.",
          },
        },
        {
          id: "s8-u1-speed-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cyclist rides along a straight road. Her distance from the start is recorded.\n\n- At 0 s: 0 m\n- At 10 s: 50 m\n- At 20 s: 100 m\n- At 30 s: 100 m\n- At 40 s: 160 m",
          parts: [
            { label: "a", prompt: "Calculate her speed during the first 20 s.", marks: 2 },
            { label: "b", prompt: "Describe her motion between 20 s and 30 s.", marks: 1 },
            { label: "c", prompt: "Calculate her average speed over the whole 40 s.", marks: 2 },
            { label: "d", prompt: "During the first 20 s she moves at a steady speed. Explain what this tells you about the forces on her and the bicycle.", marks: 2 },
            { label: "e", prompt: "Describe how the graph of distance against time would look for the last 10 s compared with the first 20 s.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
              { kind: "law", name: "Newton's first law", statement: "Balanced forces cause no change in motion." },
            ],
            steps: [
              { part: "a", reasoning: "Distance in the first 20 s is 100 m.", working: "\\text{speed}=\\frac{100}{20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "5\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The distance does not change (stays at 100 m), so she is stationary.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Total distance 160 m in 40 s.", working: "\\frac{160}{40}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "4\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Constant speed in a straight line means the net force is zero (the forces are balanced).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The forward force from pedaling equals the backward resistive forces (friction and air resistance).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The last 10 s covers 60 m, a speed of 6 m/s, so the line is steeper.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $5\\text{ m/s}$ (b) Stationary (c) $4\\text{ m/s}$ (d) Forces balanced; forward force equals resistive forces (e) Steeper, because she travels faster (6 m/s).",
            commonErrors: ["In (c) averaging 5 m/s and 6 m/s instead of dividing total distance by total time.", "In (d) saying there are no forces on the cyclist."],
            examinerNote: "(a) M1 for 100 / 20. (c) M1 for 160 / 40; the stationary period must be included. (d) Allow 'driving force equals drag' oe. (e) Allow 'steeper gradient' oe.",
          },
        },
      ],
    },
    {
      id: "s8-u1-newtons-laws",
      title: "Newton's laws and F = ma",
      skill: "Apply Newton's three laws and calculate force, mass or acceleration using $F = ma$.",
      lesson: {
        sections: [
          {
            heading: "Newton's three laws",
            body: "- **First law (inertia):** An object at rest stays at rest, and an object in motion keeps moving at constant velocity, unless an unbalanced force acts on it.\n- **Second law:** The acceleration of an object depends on the net force on it and on its mass. A bigger net force gives a bigger acceleration. A bigger mass gives a smaller acceleration for the same force.\n- **Third law:** When object A pushes on object B, object B pushes back on A with an equal force in the opposite direction.\n\nThe two forces in a third-law pair act on **different objects**, so they never cancel each other out.",
          },
          {
            heading: "Calculating with F = ma",
            body: "The second law can be written as an equation.\n\n$$F=ma$$\n\n$F$ is the **net force** in newtons (N), $m$ is mass in kilograms (kg), and $a$ is acceleration in $\\text{m/s}^2$. Rearranged: $a=\\dfrac{F}{m}$ and $m=\\dfrac{F}{a}$.\n\nTo find net force, subtract opposing forces: a 2000 N forward force with a 500 N backward force gives a net force of 1500 N forward.",
          },
        ],
        keyFormulas: [
          { name: "Newton's second law", statement: "$F=ma$" },
          { name: "Acceleration", statement: "$a=\\dfrac{F}{m}$" },
          { name: "Newton's third law", statement: "Forces come in equal and opposite pairs acting on different objects" },
        ],
        workedExample: {
          problem: "A 5 kg cart is pushed with a net force of 20 N. Calculate its acceleration.",
          solution: "$a=\\dfrac{F}{m}=\\dfrac{20}{5}=4\\text{ m/s}^2$.",
        },
      },
      questions: [
        {
          id: "s8-u1-newtons-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A passenger in a car lurches forward when the car brakes suddenly. Which of Newton's laws best explains this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second law: the passenger has more mass than the car." },
              { id: "b", text: "Third law: the seat pushes the passenger forward." },
              { id: "c", text: "First law: the passenger's body tends to keep moving at its original velocity." },
              { id: "d", text: "None; forces are not involved." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's first law", statement: "An object keeps its velocity unless an unbalanced force acts on it." },
            ],
            steps: [
              { reasoning: "The car slows, but the passenger keeps moving forward because of inertia until a force (the seat belt) acts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** First law.",
            commonErrors: ["Choosing the third law because a pair of forces exists; the lurch comes from inertia."],
            examinerNote: "B1 for first law / inertia.",
          },
        },
        {
          id: "s8-u1-newtons-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A truck has a mass of 1200 kg. It accelerates at $2.5\\text{ m/s}^2$.\n\nCalculate the net force acting on the truck.",
          response: { type: "numeric", parts: [{ label: "Net force", answer: 3000, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's second law", statement: "$F=ma$" },
            ],
            steps: [
              { reasoning: "Substitute mass and acceleration.", working: "F=1200\\times2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "F=3000\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3000\\text{ N}$",
            commonErrors: ["Dividing mass by acceleration.", "Leaving out the unit."],
            examinerNote: "M1 for 1200 x 2.5. A1 for 3000 N.",
          },
        },
        {
          id: "s8-u1-newtons-laws-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car of mass 1500 kg has a forward force from its engine of 2000 N. Friction and air resistance together produce a backward force of 500 N.\n\nCalculate the acceleration of the car.",
          response: { type: "numeric", parts: [{ label: "Acceleration", answer: 1, unit: "m/s²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's second law", statement: "$a=\\dfrac{F_{\\text{net}}}{m}$" },
              { kind: "definition", name: "Net force", statement: "Net force is the overall force after opposing forces are subtracted." },
            ],
            steps: [
              { reasoning: "Find the net force by subtracting the opposing force.", working: "F_{\\text{net}}=2000-500=1500\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange $F=ma$ and substitute.", working: "a=\\frac{F}{m}=\\frac{1500}{1500}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "a=1\\text{ m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\text{ m/s}^2$",
            commonErrors: ["Using 2000 N instead of the net force, giving 1.33 m/s².", "Adding the forces instead of subtracting."],
            examinerNote: "M1 for 1500 N net force. M1 for 1500 / 1500 (oe). A1 for 1 with unit. Allow ecf from an incorrect net force.",
          },
        },
        {
          id: "s8-u1-newtons-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A skateboarder with a total mass of 50 kg stands on a skateboard next to a wall. She pushes on the wall and rolls away from it.",
          parts: [
            { label: "a", prompt: "State Newton's third law.", marks: 1 },
            { label: "b", prompt: "Use Newton's third law to explain why she moves away from the wall.", marks: 2 },
            { label: "c", prompt: "The wall exerts a net force of 100 N on her. Calculate her acceleration.", marks: 2 },
            { label: "d", prompt: "Another skater with a mass of 100 kg is pushed by the wall with the same 100 N net force. Calculate the acceleration of this skater.", marks: 1 },
            { label: "e", prompt: "Use Newton's second law to explain why the 100 kg skater accelerates less than the 50 kg skater.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's third law", statement: "If A exerts a force on B, B exerts an equal and opposite force on A." },
              { kind: "formula", name: "Newton's second law", statement: "$a=\\dfrac{F}{m}$" },
            ],
            steps: [
              { part: "a", reasoning: "Forces come in pairs: the forces are equal in size and opposite in direction, acting on different objects.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "She pushes on the wall, so the wall pushes back on her with an equal force in the opposite direction.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "This force acts on her and is unbalanced (little friction), so she accelerates away from the wall.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Rearrange and substitute.", working: "a=\\frac{F}{m}=\\frac{100}{50}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "a=2\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute the larger mass.", working: "a=\\frac{100}{100}=1\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Acceleration is equal to net force divided by mass ($a=F/m$).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The force is the same for both skaters, but the mass is doubled.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So the acceleration is halved (inversely proportional to mass): $1\\text{ m/s}^2$ compared with $2\\text{ m/s}^2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Equal and opposite force pairs (b) The wall pushes back on her, unbalanced force, she accelerates (c) $2\\text{ m/s}^2$ (d) $1\\text{ m/s}^2$ (e) Same force, double the mass, half the acceleration.",
            commonErrors: ["In (b) saying the two forces cancel; they act on different objects.", "In (e) saying the heavier skater feels a smaller force."],
            examinerNote: "(a) Allow 'every action has an equal and opposite reaction'. (b) Reject 'the forces cancel out'. (c) Allow ecf in (d) from a wrong method only if the same method is used.",
          },
        },
      ],
    },
  ],
};
