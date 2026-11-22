import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "myps1-u3-lesson-3-1",
  code: "3-1",
  title: "Forces",
  goal: "I CAN describe types of force, find the resultant of forces in one dimension, calculate weight from mass, and design a fair test to investigate friction.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Key concept: Relationships",
    "Related concept: Interaction",
  ],
  vocabulary: [
    { term: "Force", definition: "A push or a pull that acts on an object, measured in newtons ($\\text{N}$)." },
    { term: "Resultant force", definition: "The single force that has the same effect as all the forces acting on an object added together." },
    { term: "Balanced forces", definition: "Forces that are equal in size and opposite in direction, so the resultant force is zero." },
    { term: "Weight", definition: "The force of gravity on an object, measured in newtons. $W = mg$." },
    { term: "Mass", definition: "The amount of matter in an object, measured in kilograms. It does not change with location." },
    { term: "Friction", definition: "A contact force between two surfaces that opposes motion or attempted motion." },
    { term: "Air resistance", definition: "The friction force from air that opposes the motion of an object moving through it." },
  ],
  concepts: [
    {
      id: "myps1-u3-forces-and-resultants",
      title: "Types of force and resultant force",
      skill: "Name contact and non-contact forces, measure forces in newtons, and find the resultant of forces acting along a line.",
      lesson: {
        sections: [
          {
            heading: "Contact and non-contact forces",
            body: "A **force** is a push or a pull. It is measured in **newtons** ($\\text{N}$) using a **newton meter**, which has a spring that stretches more when the force is larger. Before use, check that the pointer reads zero.\n\n- **Contact forces** act only when objects touch: friction, air resistance, tension, normal (support) force and upthrust.\n- **Non-contact forces** act across a gap: gravity (weight), magnetic force and electrostatic force.\n\nA force diagram is drawn with arrows. The arrow points in the direction of the force and a longer arrow means a bigger force.",
          },
          {
            heading: "Balanced and unbalanced forces",
            body: "Forces on the same line are added if they point the same way and subtracted if they point in opposite directions. The result is the **resultant force**.\n\n- If the forces are **balanced**, the resultant is $0\\ \\text{N}$. A stationary object stays at rest and a moving object keeps the same speed in a straight line.\n- If the forces are **unbalanced**, there is a resultant force. The object speeds up, slows down or changes direction. The change is in the direction of the resultant force.\n\nExample: a pushing force of $50\\ \\text{N}$ to the right and friction of $20\\ \\text{N}$ to the left give a resultant of $30\\ \\text{N}$ to the right.",
          },
        ],
        keyFormulas: [
          { name: "Resultant (same direction)", statement: "Add the forces" },
          { name: "Resultant (opposite directions)", statement: "Subtract the smaller force from the larger; it acts in the direction of the larger force" },
          { name: "Balanced forces", statement: "Resultant force $=0\\ \\text{N}$, so no change in motion" },
        ],
        workedExample: {
          problem: "A sledge is pulled forwards with a force of $85\\ \\text{N}$. Friction on the sledge is $35\\ \\text{N}$ backwards. Find the resultant force and describe what happens to the sledge's motion.",
          solution: "The forces act in opposite directions, so subtract: $85 - 35 = 50\\ \\text{N}$ forwards. The forces are unbalanced, so the sledge speeds up in the forward direction.",
        },
      },
      questions: [
        {
          id: "myps1-u3-forces-and-resultants-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a **non-contact** force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Magnetic force" },
              { id: "c", text: "Air resistance" },
              { id: "d", text: "Tension in a rope" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-contact force", statement: "A non-contact force acts between objects without them touching, for example gravity, magnetic and electrostatic forces." },
            ],
            steps: [
              { reasoning: "A magnet can attract an iron nail across a gap, so magnetic force is a non-contact force. The other three need objects to touch.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Magnetic force",
            commonErrors: ["Choosing air resistance because air is invisible; the air still has to touch the moving object.", "Thinking that any force that pulls is non-contact."],
            examinerNote: "B1 for magnetic force.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student pushes a box to the right with a force of $30\\ \\text{N}$. Friction acts on the box with a force of $12\\ \\text{N}$ to the left.\n\nCalculate the size of the resultant force on the box, in newtons.",
          response: { type: "numeric", parts: [{ label: "Resultant force", answer: 18, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of opposite forces", statement: "When two forces act in opposite directions along a line, the resultant is the larger force minus the smaller force." },
            ],
            steps: [
              { reasoning: "The forces act in opposite directions, so subtract the smaller from the larger.", working: "30 - 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The resultant acts to the right, in the direction of the push.", working: "18\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18\\ \\text{N}$ to the right",
            commonErrors: ["Adding the forces to get 42 N.", "Forgetting the unit."],
            examinerNote: "M1 for 30 - 12 (oe). A1 for 18 N. Allow ecf for A1 if the direction is not given.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car travels along a straight, level road at a constant speed. The driving force from the engine is $800\\ \\text{N}$ and the total resistance (friction and air resistance) is $800\\ \\text{N}$.\n\nExplain what happens to the motion of the car if the driver then increases the driving force to $1000\\ \\text{N}$ while the resistance stays at $800\\ \\text{N}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Unbalanced forces change motion", statement: "A non-zero resultant force makes an object accelerate in the direction of the resultant force. A zero resultant force leaves the motion unchanged." },
            ],
            steps: [
              { reasoning: "Originally the forces are balanced (resultant $0\\ \\text{N}$), which is why the speed was constant.", marks: 1, markCode: "B" },
              { reasoning: "After the change the resultant force is $1000 - 800 = 200\\ \\text{N}$ in the forward direction.", working: "1000 - 800 = 200\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "The forces are now unbalanced, so the car speeds up (accelerates) forwards.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The resultant force becomes $200\\ \\text{N}$ forwards, so the car speeds up.",
            commonErrors: ["Saying a force is needed to keep the car moving at constant speed; balanced forces are enough.", "Saying the car moves at a faster constant speed."],
            examinerNote: "B1 for balanced forces / resultant zero at first (oe). M1 for 200 N resultant. R1 for speeds up / accelerates. Reject 'moves faster at a steady speed'.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two teams play tug of war. Team A pulls the rope to the left with a force of $450\\ \\text{N}$. Team B pulls to the right with a force of $380\\ \\text{N}$. A newton meter is placed in the rope to measure the pull.",
          parts: [
            { label: "a", prompt: "Calculate the resultant force on the rope and state its direction.", marks: 2 },
            { label: "b", prompt: "State what happens to the motion of the rope, which is at rest at the start.", marks: 1 },
            { label: "c", prompt: "Describe how to use the newton meter correctly to read the pull of one team.", marks: 2 },
            { label: "d", prompt: "Team B then increases its pull to $450\\ \\text{N}$. A student says: \"The rope is not moving, so there are no forces acting on it.\" Evaluate the student's statement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of opposite forces", statement: "The resultant is the larger force minus the smaller force, in the direction of the larger force." },
              { kind: "law", name: "Balanced forces", statement: "Balanced forces give a resultant of $0\\ \\text{N}$ and no change in motion." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the smaller force from the larger.", working: "450 - 380 = 70\\text{ N}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The resultant acts in the direction of the larger force, to the left (towards Team A).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The forces are unbalanced, so the rope accelerates to the left (towards Team A).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Check that the newton meter reads zero before it is pulled (hold it so the spring is not stretched).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Read the scale at eye level when the spring is steady, and give the reading in newtons.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Resultant force is $450 - 450 = 0\\ \\text{N}$, so the forces are balanced and the rope stays at rest.", working: "450 - 450 = 0\\text{ N}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The student is wrong: the rope is not moving because the forces are balanced, not because there are no forces.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Support: both teams are still pulling with $450\\ \\text{N}$, so the rope is under tension and the newton meter would still read 450 N.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $70\\ \\text{N}$ to the left (b) accelerates to the left (c) zero the meter, read the steady value at eye level (d) Statement is incorrect: forces are balanced (resultant 0 N), not absent.",
            commonErrors: ["Adding the two pulls to get 830 N.", "Saying that no motion means no force.", "Giving the resultant direction as to the right."],
            examinerNote: "(a) Allow towards Team A. (b) Allow 'moves/speeds up to the left'. (c) Allow 'check pointer is at zero' oe. Reject 'read it from above'. (d) Allow ecf for the idea that equal forces cancel out.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a **contact** force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Electrostatic force" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Gravity" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contact force", statement: "A contact force acts only when two objects touch; friction is a contact force." },
              { kind: "definition", name: "Non-contact force", statement: "Gravity, magnetism and electrostatic forces act without the objects touching." },
            ],
            steps: [
              { reasoning: "Friction acts between surfaces that touch; the others act without contact.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Friction",
            commonErrors: ["Choosing gravity or magnetism, which are non-contact forces."],
            examinerNote: "B1 for friction.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two forces act on a box in the same direction: $5\\ \\text{N}$ to the left and $7\\ \\text{N}$ to the left. What is the resultant force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\ \\text{N}$ to the left" },
              { id: "b", text: "$2\\ \\text{N}$ to the left" },
              { id: "c", text: "$12\\ \\text{N}$ to the right" },
              { id: "d", text: "$0\\ \\text{N}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of same-direction forces", statement: "When forces act in the same direction, the resultant is their sum." },
            ],
            steps: [
              { reasoning: "Add the forces because they act in the same direction: $5+7=12\\ \\text{N}$ to the left.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $12\\ \\text{N}$ to the left",
            commonErrors: ["Subtracting to get 2 N, which is for opposite forces.", "Forgetting the direction."],
            examinerNote: "B1 for 12 N to the left.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two forces act on a trolley: $20\\ \\text{N}$ to the right and $8\\ \\text{N}$ to the left. What is the resultant force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\ \\text{N}$ to the right" },
              { id: "b", text: "$28\\ \\text{N}$ to the right" },
              { id: "c", text: "$0\\ \\text{N}$" },
              { id: "d", text: "$12\\ \\text{N}$ to the left" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of opposite forces", statement: "When two forces act in opposite directions, the resultant is the larger minus the smaller, in the direction of the larger." },
            ],
            steps: [
              { reasoning: "Subtract: $20-8=12\\ \\text{N}$, acting in the direction of the larger force, to the right.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $12\\ \\text{N}$ to the right",
            commonErrors: ["Adding to get 28 N.", "Giving the direction of the smaller force."],
            examinerNote: "B1 for 12 N to the right.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A book rests on a table. Its weight acts downwards and the table pushes up with an equal force.\n\nExplain what the resultant force on the book is and what this means for its motion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Balanced forces", statement: "Balanced forces give a resultant of $0\\ \\text{N}$ and no change in motion." },
            ],
            steps: [
              { reasoning: "The upward push and the downward weight are equal and opposite, so the resultant force is $0\\ \\text{N}$.", marks: 1, markCode: "B" },
              { reasoning: "With a zero resultant the book stays at rest; the forces are balanced, not absent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Resultant force is $0\\ \\text{N}$; the forces are balanced so the book does not move.",
            commonErrors: ["Saying there are 'no forces' on the book.", "Saying the book accelerates upwards."],
            examinerNote: "B1 for resultant 0 N. R1 for balanced / no change in motion oe.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a **non-contact** force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Air resistance" },
              { id: "c", text: "The push of a hand" },
              { id: "d", text: "Magnetism" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-contact force", statement: "A non-contact force acts between objects without them touching, for example gravity, magnetic and electrostatic forces." },
            ],
            steps: [
              { reasoning: "Magnetism acts at a distance; friction, air resistance and a push all need contact.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Magnetism",
            commonErrors: ["Choosing air resistance, which acts on a moving object in contact with air."],
            examinerNote: "B1 for magnetism.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sledge is pulled with a resultant force of $50\\ \\text{N}$. A student says 'the sledge is moving, so it must be moving at a steady speed.'\n\nEvaluate the student's statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Unbalanced forces change motion", statement: "A non-zero resultant force makes an object accelerate; a zero resultant leaves the motion unchanged." },
            ],
            steps: [
              { reasoning: "The resultant force is $50\\ \\text{N}$, not zero, so the forces are unbalanced.", marks: 1, markCode: "B" },
              { reasoning: "Unbalanced forces cause acceleration in the direction of the resultant, so the sledge speeds up rather than moving at a steady speed — the student is wrong.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The student is wrong: a $50\\ \\text{N}$ resultant is unbalanced, so the sledge accelerates instead of moving at a steady speed.",
            commonErrors: ["Saying any motion means balanced forces."],
            examinerNote: "B1 for unbalanced / non-zero resultant. R1 for acceleration oe.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two forces act on a parcel in the same direction: $25\\ \\text{N}$ and $15\\ \\text{N}$.\n\nCalculate the resultant force.",
          response: { type: "numeric", parts: [{ label: "Resultant force", answer: 40, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of same-direction forces", statement: "Forces in the same direction are added." },
            ],
            steps: [
              { reasoning: "Add the two forces.", working: "25+15=40\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "State the answer with the unit.", working: "40\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\ \\text{N}$",
            commonErrors: ["Subtracting to get 10 N.", "Forgetting the unit."],
            examinerNote: "M1 for 25+15. A1 for 40 N.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two forces act on a trolley in opposite directions: $60\\ \\text{N}$ to the right and $25\\ \\text{N}$ to the left.\n\nCalculate the size of the resultant force.",
          response: { type: "numeric", parts: [{ label: "Resultant force", answer: 35, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of opposite forces", statement: "Forces in opposite directions are subtracted; the resultant acts in the direction of the larger force." },
            ],
            steps: [
              { reasoning: "Subtract the smaller force from the larger.", working: "60-25=35\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "State the answer with the unit.", working: "35\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35\\ \\text{N}$ (to the right)",
            commonErrors: ["Adding to get 85 N.", "Forgetting the unit."],
            examinerNote: "M1 for 60-25. A1 for 35 N.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Three forces act along the same line on a box: $30\\ \\text{N}$ to the right, $15\\ \\text{N}$ to the left and $10\\ \\text{N}$ to the left.\n\nCalculate the resultant force and state its direction.",
          response: { type: "numeric", parts: [{ label: "Resultant force", answer: 5, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of forces in one dimension", statement: "Add forces in one direction and subtract forces in the opposite direction." },
            ],
            steps: [
              { reasoning: "Total force to the right is $30\\ \\text{N}$; total force to the left is $15+10=25\\ \\text{N}$.", working: "15+10=25\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the left total from the right total.", working: "30-25=5\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "The resultant is $5\\ \\text{N}$ to the right, the direction of the larger total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ \\text{N}$ to the right",
            commonErrors: ["Adding all three forces to get 55 N.", "Subtracting all from the largest."],
            examinerNote: "M1 for summing each direction. M1 for subtracting. A1 for 5 N to the right.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Team A pulls a rope to the left with a force of $480\\ \\text{N}$. Team B pulls to the right with a force of $350\\ \\text{N}$. Team B then increases its pull so that the rope does not move.",
          response: {
            type: "numeric",
            parts: [
              { label: "Resultant force at the start", answer: 130, unit: "N" },
              { label: "Team B's new pull to balance the forces", answer: 480, unit: "N" },
              { label: "Resultant force after balancing", answer: 0, unit: "N" },
              { label: "Change needed in Team B's pull to balance the forces", answer: 130, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of opposite forces", statement: "The resultant is the larger force minus the smaller force, in the direction of the larger force." },
              { kind: "law", name: "Balanced forces", statement: "Balanced forces give a resultant of $0\\ \\text{N}$ and no change in motion." },
            ],
            steps: [
              { reasoning: "Subtract Team B's pull from Team A's pull.", working: "480-350=130\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "For the rope not to move the forces must balance, so Team B must pull with $480\\ \\text{N}$.", working: "480\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Equal opposite forces give a resultant of zero.", working: "480-480=0\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "The resultant is $130\\ \\text{N}$, so Team B must increase its pull by $130\\ \\text{N}$ to balance Team A's $480\\ \\text{N}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$130\\ \\text{N}$; Team B pulls with $480\\ \\text{N}$; resultant $0\\ \\text{N}$; change of $130\\ \\text{N}$",
            commonErrors: ["Adding the pulls instead of subtracting.", "Thinking Team B needs to pull with 350 N still."],
            examinerNote: "M1 for each method. A1 for the change of 130 N (480 - 350).",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between balanced and unbalanced forces, and give one example of each.",
          parts: [
            { label: "a", prompt: "Define balanced forces and state the resultant force.", marks: 1 },
            { label: "b", prompt: "Define unbalanced forces and state what they cause.", marks: 1 },
            { label: "c", prompt: "Give one example of balanced forces.", marks: 1 },
            { label: "d", prompt: "Give one example of unbalanced forces.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Balanced forces", statement: "Balanced forces give a resultant of $0\\ \\text{N}$ and no change in motion." },
              { kind: "law", name: "Unbalanced forces change motion", statement: "A non-zero resultant force makes an object accelerate in the direction of the resultant." },
            ],
            steps: [
              { part: "a", reasoning: "Forces that cancel out; the resultant is $0\\ \\text{N}$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Forces that do not cancel; the resultant is non-zero and causes acceleration.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any valid example, for example a book resting on a table or two teams pulling equally in tug of war.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any valid example, for example a car accelerating or a sledge being pulled.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Balanced: cancel out, resultant $0\\ \\text{N}$ (b) Unbalanced: non-zero resultant, causes acceleration (c) e.g. book on a table (d) e.g. accelerating car.",
            commonErrors: ["Saying balanced forces mean 'no forces'.", "Giving an example that does not clearly show the force situation."],
            examinerNote: "(c) and (d) accept any correct example; the object must be in the described force situation.",
          },
        },
        {
          id: "myps1-u3-forces-and-resultants-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A crate is pulled along the ground by three ropes. Rope P pulls to the left with a force of $200\\ \\text{N}$. Rope Q pulls to the right with a force of $350\\ \\text{N}$. Rope R pulls to the right with a force of $100\\ \\text{N}$.",
          parts: [
            { label: "a", prompt: "Calculate the resultant force on the crate and state its direction.", marks: 3 },
            { label: "b", prompt: "The crate starts from rest. Describe what happens to its motion.", marks: 1 },
            { label: "c", prompt: "Rope P is removed. Calculate the new resultant force.", marks: 2 },
            { label: "d", prompt: "Rope Q's pull is reduced until the crate moves at a steady speed. State the resultant force and explain why.", marks: 2 },
            { label: "e", prompt: "Explain the difference between the crate's weight and the normal force from the ground in terms of the forces acting on it.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant of forces in one dimension", statement: "Add forces in one direction and subtract forces in the opposite direction." },
              { kind: "law", name: "Balanced forces", statement: "Balanced forces give a resultant of $0\\ \\text{N}$ and no change in motion." },
            ],
            steps: [
              { part: "a", reasoning: "Total to the right: $350+100=450\\ \\text{N}$; total to the left: $200\\ \\text{N}$.", working: "350+100=450\\text{ N}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract: $450-200=250\\ \\text{N}$.", working: "450-200=250\\text{ N}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The resultant is $250\\ \\text{N}$ to the right.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The forces are unbalanced, so the crate accelerates to the right from rest.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Only ropes Q and R act, both to the right: $350+100$.", working: "450\\text{ N}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The resultant is $450\\ \\text{N}$ to the right.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Resultant is $0\\ \\text{N}$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At a steady speed the forces are balanced, so the pulls must equal the resistance/friction.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Weight acts downwards (gravity) and the normal force acts upwards; they are equal and opposite so they balance vertically.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $250\\ \\text{N}$ to the right (b) accelerates to the right (c) $450\\ \\text{N}$ to the right (d) $0\\ \\text{N}$; steady speed means balanced forces (e) weight down, normal force up, equal and opposite.",
            commonErrors: ["In (a) adding all forces to get 650 N.", "In (c) forgetting rope R still acts.", "In (e) confusing weight with the normal force."],
            examinerNote: "(c) Allow '450 N to the right'. (d) Allow 'friction equals the pulls' oe. (e) Accept 'vertical forces balance' oe.",
          },
        },
      ],
    },
    {
      id: "myps1-u3-weight-and-friction",
      title: "Weight, mass and friction",
      skill: "Use $W = mg$, distinguish mass from weight, and plan a fair test of friction.",
      lesson: {
        sections: [
          {
            heading: "Mass and weight",
            body: "**Mass** is the amount of matter in an object. It is measured in kilograms ($\\text{kg}$) and is the same everywhere. **Weight** is the force of gravity on the object, measured in newtons ($\\text{N}$), and it depends on the **gravitational field strength** $g$.\n\n$$W = mg$$\n\nOn Earth $g$ is about $10\\ \\text{N/kg}$ (more exactly $9.8\\ \\text{N/kg}$). On the Moon $g$ is about $1.6\\ \\text{N/kg}$. An object has the same mass on the Moon as on Earth, but a smaller weight.",
          },
          {
            heading: "Friction and air resistance",
            body: "**Friction** acts where two surfaces touch and slide, or try to slide. It always acts against the motion. Rough surfaces give more friction because the bumps on each surface catch on each other. Friction can be useful (brakes, shoe grip) or a problem (wasted energy as heat, wear). Lubricants such as oil reduce friction.\n\n**Air resistance** is friction between air and a moving object. It increases with speed and with a larger surface area, which is why a parachute slows a falling person.",
          },
          {
            heading: "Investigating friction fairly",
            body: "To compare friction on different surfaces, pull a block along each surface with a newton meter and read the force while the block moves at a steady speed. At a steady speed the forces are balanced, so the pulling force equals the friction force.\n\n- **Independent variable**: the surface (what you change).\n- **Dependent variable**: the force reading in newtons (what you measure).\n- **Control variables**: the same block and mass, same pulling speed, same newton meter.\n\nRepeat each measurement at least three times and calculate a mean to improve reliability. A good hypothesis includes a prediction and a scientific reason.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W = mg$ ($W$ in $\\text{N}$, $m$ in $\\text{kg}$, $g$ in $\\text{N/kg}$)" },
          { name: "Gravitational field strength", statement: "Earth about $10\\ \\text{N/kg}$; Moon about $1.6\\ \\text{N/kg}$" },
          { name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
        ],
        workedExample: {
          problem: "An astronaut has a mass of $70\\ \\text{kg}$. Calculate the astronaut's weight on the Moon, where $g = 1.6\\ \\text{N/kg}$, and state the astronaut's mass there.",
          solution: "$W = mg = 70 \\times 1.6 = 112\\ \\text{N}$. Mass does not change with location, so the mass is still $70\\ \\text{kg}$.",
        },
      },
      questions: [
        {
          id: "myps1-u3-weight-and-friction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which unit is **weight** measured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton" },
              { id: "b", text: "Joule" },
              { id: "c", text: "Kilogram" },
              { id: "d", text: "Newton per kilogram" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weight", statement: "Weight is a force, so it is measured in newtons." },
            ],
            steps: [
              { reasoning: "Weight is the force of gravity on an object. All forces are measured in newtons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Newton",
            commonErrors: ["Choosing kilogram, which is the unit of mass.", "Choosing newton per kilogram, which is the unit of gravitational field strength."],
            examinerNote: "B1 for newton.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag of apples has a mass of $4.5\\ \\text{kg}$. Use $g = 10\\ \\text{N/kg}$.\n\nCalculate the weight of the bag of apples.",
          response: { type: "numeric", parts: [{ label: "Weight", answer: 45, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute the mass and gravitational field strength into $W = mg$.", working: "W = 4.5 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, with the unit newtons.", working: "W = 45\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45\\ \\text{N}$",
            commonErrors: ["Dividing the mass by 10 to get 0.45.", "Giving the answer in kilograms."],
            examinerNote: "M1 for 4.5 x 10 (oe). A1 for 45 N. Allow 44.1 N if $g = 9.8$ is used.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rock has a mass of $12\\ \\text{kg}$ on Earth, where $g = 10\\ \\text{N/kg}$. The rock is taken to the Moon, where $g = 1.6\\ \\text{N/kg}$.\n\nCalculate the weight of the rock on Earth and on the Moon, and give the mass of the rock on the Moon.",
          response: {
            type: "numeric",
            parts: [
              { label: "Weight on Earth", answer: 120, unit: "N" },
              { label: "Weight on the Moon", answer: 19.2, tolerance: 0.01, unit: "N" },
              { label: "Mass on the Moon", answer: 12, unit: "kg" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "property", name: "Mass is constant", statement: "Mass is the amount of matter and does not change with location." },
            ],
            steps: [
              { reasoning: "Weight on Earth: multiply mass by $g$ on Earth.", working: "W = 12 \\times 10 = 120\\text{ N}", marks: 1, markCode: "A" },
              { reasoning: "Weight on the Moon: multiply the same mass by the Moon's $g$.", working: "W = 12 \\times 1.6 = 19.2\\text{ N}", marks: 1, markCode: "A" },
              { reasoning: "The amount of matter has not changed, so the mass is still 12 kg.", working: "12\\text{ kg}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Earth $120\\ \\text{N}$; Moon $19.2\\ \\text{N}$; mass $12\\ \\text{kg}$ on the Moon.",
            commonErrors: ["Saying the mass on the Moon is 1.92 kg because the rock 'feels lighter'.", "Using $g = 10$ for both calculations."],
            examinerNote: "A1 for 120 N. A1 for 19.2 N. B1 for 12 kg. Award A marks for correct answers without working.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "A student investigates how the surface affects friction. A wooden block of mass $0.5\\ \\text{kg}$ is pulled at a steady speed across three surfaces using a newton meter. Each surface is tested three times. Use $g = 10\\ \\text{N/kg}$.\n\nThe newton meter readings, in newtons, were:\n\n- Sandpaper: 4.0, 4.2, 4.1\n- Wood: 2.4, 2.5, 2.6\n- Plastic: 1.2, 1.1, 1.3",
          parts: [
            { label: "a", prompt: "Calculate the weight of the block.", marks: 2 },
            { label: "b", prompt: "State the independent variable, the dependent variable and **one** control variable.", marks: 3 },
            { label: "c", prompt: "Calculate the mean force for sandpaper.", marks: 2 },
            { label: "d", prompt: "Write a hypothesis for this investigation, including a scientific reason.", marks: 2 },
            { label: "e", prompt: "Explain why the newton meter reading equals the friction force only when the block moves at a steady speed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "law", name: "Balanced forces", statement: "At constant speed the resultant force is zero, so the pulling force equals the friction force." },
              { kind: "skill", name: "Fair test", statement: "Change one variable (independent), measure one (dependent) and keep all others the same (control)." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $W = mg$.", working: "W = 0.5 \\times 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "W = 5\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent variable: the type of surface.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Dependent variable: the force needed to pull the block (newton meter reading).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "One control variable, for example the same block (mass), the same pulling speed or the same newton meter.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the three readings and divide by 3.", working: "\\frac{4.0 + 4.2 + 4.1}{3} = \\frac{12.3}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "4.1\\text{ N}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Prediction: the rougher the surface, the greater the friction force (so a larger newton meter reading).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reason: bumps on rougher surfaces interlock with the block more, so more force is needed to keep it sliding.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "At a steady speed the forces are balanced, so the resultant force is zero.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So the pulling force equals the friction force. If the block were speeding up, the pull would be bigger than friction.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $5\\ \\text{N}$ (b) independent: surface; dependent: force reading; control: e.g. same block (c) $4.1\\ \\text{N}$ (d) Rougher surface gives larger friction because bumps interlock more (e) Steady speed means balanced forces, so pull equals friction.",
            commonErrors: ["Giving the mass (0.5 kg) as the weight.", "Naming the block as the independent variable.", "Saying a rougher surface has less friction.", "In (e) saying the forces are zero rather than the resultant force."],
            examinerNote: "(b) Allow 'type of surface / roughness' for independent and 'friction force' for dependent. (c) A1 for 4.1 N; allow 4.10. (d) Allow a hypothesis written as 'If ... then ... because ...'. Reject a reason that mentions only heat. (e) Allow 'constant speed' oe.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these quantities is measured in newtons ($\\text{N}$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weight" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Volume" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weight", statement: "Weight is a force, so it is measured in newtons; mass is measured in kilograms." },
            ],
            steps: [
              { reasoning: "Weight is a force measured in newtons; mass is measured in kilograms.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Weight",
            commonErrors: ["Choosing mass, which is measured in kilograms."],
            examinerNote: "B1 for weight.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A block has a mass of $6\\ \\text{kg}$. Using $g = 10\\ \\text{N/kg}$, what is its weight on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16\\ \\text{N}$" },
              { id: "b", text: "$60\\ \\text{N}$" },
              { id: "c", text: "$6\\ \\text{N}$" },
              { id: "d", text: "$600\\ \\text{N}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute into $W = mg$: $6\\times10=60\\ \\text{N}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $60\\ \\text{N}$",
            commonErrors: ["Answering 6 N by using the mass value.", "Multiplying by 100."],
            examinerNote: "B1 for 60 N.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An astronaut travels from Earth to the Moon. Her mass is $60\\ \\text{kg}$ on Earth, where $g = 10\\ \\text{N/kg}$, and $g = 1.6\\ \\text{N/kg}$ on the Moon.\n\nDescribe what happens to her mass and her weight on the Moon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mass is constant", statement: "Mass is the amount of matter and does not change with location." },
              { kind: "formula", name: "Weight", statement: "$W = mg$; weight depends on $g$." },
            ],
            steps: [
              { reasoning: "Her mass stays the same: $60\\ \\text{kg}$ on the Moon as on Earth.", marks: 1, markCode: "B" },
              { reasoning: "Her weight decreases because $g$ is smaller: $60\\times1.6=96\\ \\text{N}$ compared with $600\\ \\text{N}$ on Earth.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Mass stays $60\\ \\text{kg}$; weight falls to $96\\ \\text{N}$ because the Moon's $g$ is smaller.",
            commonErrors: ["Saying her mass decreases on the Moon.", "Saying her weight stays the same."],
            examinerNote: "B1 for mass unchanged. R1 for weight decrease linked to smaller g.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these reduces friction between two sliding surfaces?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the speed of sliding" },
              { id: "b", text: "Pressing the surfaces together harder" },
              { id: "c", text: "Adding oil between the surfaces" },
              { id: "d", text: "Making the surfaces rougher" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lubricants", statement: "Lubricants such as oil reduce friction by separating the surfaces." },
            ],
            steps: [
              { reasoning: "Oil lubricates the surfaces, reducing friction; rougher surfaces and harder pressing increase it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Adding oil between the surfaces",
            commonErrors: ["Choosing rougher surfaces, which increase friction."],
            examinerNote: "B1 for oil.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Air resistance on a moving object increases when…",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the object has a smaller surface area" },
              { id: "b", text: "the object slows down" },
              { id: "c", text: "the air becomes thinner" },
              { id: "d", text: "the object speeds up or has a larger surface area" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air resistance", statement: "Air resistance increases with speed and with a larger surface area." },
            ],
            steps: [
              { reasoning: "Air resistance grows as the object moves faster and presents a larger area to the air.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** the object speeds up or has a larger surface area",
            commonErrors: ["Thinking slowing down increases air resistance."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A parachute has a very large canopy. Explain why this slows a falling person safely.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Air resistance", statement: "Air resistance increases with a larger surface area, opposing the motion of a falling object." },
            ],
            steps: [
              { reasoning: "The large canopy gives a large surface area facing the air.", marks: 1, markCode: "B" },
              { reasoning: "This creates a large air resistance force that opposes the fall, so the person descends more slowly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The large canopy increases air resistance, which opposes the fall and slows the descent.",
            commonErrors: ["Saying the parachute 'pushes' the person up.", "Saying air resistance increases with smaller surface area."],
            examinerNote: "B1 for large surface area / more air resistance. R1 for slowing the fall oe.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bag has a mass of $9\\ \\text{kg}$. Using $g = 10\\ \\text{N/kg}$, calculate its weight.",
          response: { type: "numeric", parts: [{ label: "Weight", answer: 90, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute into $W = mg$.", working: "W = 9 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "W = 90\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\ \\text{N}$",
            commonErrors: ["Answering 9 N (the mass).", "Using g = 1.6 (the Moon value)."],
            examinerNote: "M1 for 9 x 10. A1 for 90 N.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A child has a mass of $50\\ \\text{kg}$. On the Moon $g = 1.6\\ \\text{N/kg}$.\n\nCalculate the child's weight on the Moon.",
          response: { type: "numeric", parts: [{ label: "Weight on the Moon", answer: 80, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute into $W = mg$ using the Moon's $g$.", working: "W = 50 \\times 1.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "W = 80\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\ \\text{N}$",
            commonErrors: ["Using $g = 10$ instead of 1.6.", "Forgetting the unit."],
            examinerNote: "M1 for 50 x 1.6. A1 for 80 N.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rock has a mass of $25\\ \\text{kg}$. On Earth $g = 10\\ \\text{N/kg}$ and on the Moon $g = 1.6\\ \\text{N/kg}$.\n\nCalculate (i) the rock's weight on Earth, (ii) its weight on the Moon, and (iii) the difference between the two weights.",
          response: {
            type: "numeric",
            parts: [
              { label: "Weight on Earth", answer: 250, unit: "N" },
              { label: "Weight on the Moon", answer: 40, unit: "N" },
              { label: "Difference between the weights", answer: 210, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Weight on Earth: $25 \\times 10$.", working: "250\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Weight on the Moon: $25 \\times 1.6$.", working: "40\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the Moon weight from the Earth weight.", working: "250-40=210\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250\\ \\text{N}$, $40\\ \\text{N}$, $210\\ \\text{N}$",
            commonErrors: ["Using the mass (25 kg) as the weight.", "Subtracting in the wrong order."],
            examinerNote: "M1 for each W = mg. A1 for 210 N.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student pulls a wooden block of mass $1.5\\ \\text{kg}$ at a steady speed across two surfaces, using $g = 10\\ \\text{N/kg}$.\n\n- Carpet: 5.2 N, 5.4 N, 5.3 N\n- Tile: 3.1 N, 3.0 N, 3.2 N",
          response: {
            type: "numeric",
            parts: [
              { label: "Weight of the block", answer: 15, unit: "N" },
              { label: "Mean force on carpet", answer: 5.3, tolerance: 0.01, unit: "N" },
              { label: "Mean force on tile", answer: 3.1, tolerance: 0.01, unit: "N" },
              { label: "Difference between the mean forces", answer: 2.2, tolerance: 0.01, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Weight: $1.5 \\times 10$.", working: "15\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Mean for carpet: $(5.2+5.4+5.3)/3$.", working: "\\frac{15.9}{3}=5.3\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Mean for tile: $(3.1+3.0+3.2)/3$.", working: "\\frac{9.3}{3}=3.1\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the tile mean from the carpet mean.", working: "5.3-3.1=2.2\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\ \\text{N}$, $5.3\\ \\text{N}$, $3.1\\ \\text{N}$, $2.2\\ \\text{N}$",
            commonErrors: ["Dividing by 2 instead of 3.", "Subtracting the wrong pair of means."],
            examinerNote: "M1 for each correct method. A1 for 2.2 N. Allow ecf for the difference.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student wants to investigate how the mass of a block affects the friction force when it is pulled across a table.",
          parts: [
            { label: "a", prompt: "State the independent variable, the dependent variable and **two** control variables.", marks: 3 },
            { label: "b", prompt: "Describe how the student should pull the block so that the newton meter reading equals the friction force.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair test", statement: "Change one variable (independent), measure one (dependent) and keep all others the same (control)." },
              { kind: "law", name: "Balanced forces", statement: "At a steady speed the forces are balanced, so the pulling force equals the friction force." },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: the mass of the block.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Dependent variable: the friction force (newton meter reading).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Any two control variables, for example the same surface, the same pulling speed, or the same newton meter.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Pull the block at a steady (constant) speed so the forces are balanced and the reading equals the friction force.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Independent: mass of block; dependent: friction force; controls: same surface, same speed (b) Pull at a steady speed so forces balance.",
            commonErrors: ["Naming the surface as the independent variable when mass is being changed.", "Pulling faster and slower without controlling speed."],
            examinerNote: "(a) Reject 'friction' as the independent variable. (b) Accept 'constant speed' oe.",
          },
        },
        {
          id: "myps1-u3-weight-and-friction-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student pulls a block of mass $2\\ \\text{kg}$ at a steady speed across three surfaces, three times each. Use $g = 10\\ \\text{N/kg}$.",
          parts: [
            { label: "a", prompt: "Calculate the weight of the block.", marks: 2 },
            { label: "b", prompt: "State the independent variable, the dependent variable and one control variable.", marks: 3 },
            { label: "c", prompt: "The readings were: Carpet 6.1, 6.3, 6.2 N; Tile 4.0, 4.1, 4.2 N; Ice 1.5, 1.6, 1.4 N. Calculate the mean force on tile.", marks: 2 },
            { label: "d", prompt: "Write a hypothesis for the investigation, including a prediction and a scientific reason.", marks: 2 },
            { label: "e", prompt: "Suggest one improvement to make the results more reliable.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
              { kind: "skill", name: "Fair test", statement: "Change one variable, measure one, keep the rest the same, and repeat measurements." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $W = mg$.", working: "W = 2 \\times 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "W = 20\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent variable: the type of surface.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Dependent variable: the force reading (friction force).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "One control variable: same block/mass, same pulling speed, or same newton meter.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the three tile readings and divide by 3.", working: "\\frac{4.0+4.1+4.2}{3}=\\frac{12.3}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "4.1\\text{ N}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Prediction: the rougher the surface, the greater the friction force.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reason: bumps on rougher surfaces interlock more, needing more force to keep the block sliding.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Any valid improvement: more repeats, use a mean, check the newton meter is zeroed, keep speed constant, or use the same block.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $20\\ \\text{N}$ (b) independent: surface; dependent: force reading; control e.g. same block (c) $4.1\\ \\text{N}$ (d) Rougher surface gives larger friction because bumps interlock more (e) More repeats / check meter zero / keep speed constant.",
            commonErrors: ["Giving the mass (2 kg) as the weight.", "Dividing the tile mean by 2 instead of 3.", "In (d) predicting ice gives the most friction."],
            examinerNote: "(b) Allow 'type of surface / roughness' and 'friction force'. (e) Accept any valid reliability improvement.",
          },
        },
      ],
    },
  ],
};
