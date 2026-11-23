import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "phys12-u1-lesson-1-1",
  code: "1-1",
  title: "Torque and Rotational Equilibrium",
  goal: "I CAN calculate torque about a pivot, apply the two conditions for equilibrium (net force and net torque zero), and solve problems involving levers, beams and supports.",
  standards: ["HS-PS2-1", "CCC: Structure and Function"],
  vocabulary: [
    { term: "Torque", definition: "The turning effect of a force about a pivot, measured in newton-meters (N·m)." },
    { term: "Lever arm", definition: "The perpendicular distance from the pivot to the line of action of the force." },
    { term: "Pivot", definition: "The fixed point about which rotation occurs; also called the fulcrum or axis." },
    { term: "Rotational equilibrium", definition: "A state where the net torque on an object is zero, so it does not angularly accelerate." },
    { term: "Clockwise", definition: "Rotation in the same direction as clock hands; conventionally negative torque." },
    { term: "Counterclockwise", definition: "Rotation opposite to clock hands; conventionally positive torque." },
    { term: "Center of gravity", definition: "The point where an object's entire weight can be considered to act." },
  ],
  concepts: [
    {
      id: "phys12-u1-torque-basics",
      title: "Torque and lever arms",
      skill: "Calculate torque from force and lever arm, and explain how lever arms affect turning effectiveness.",
      lesson: {
        sections: [
          {
            heading: "What is torque?",
            body: "A force applied to an object can cause translation (linear motion) or rotation, or both. The **torque** measures the turning effect of a force about a pivot.\n\n$$\\tau = rF\\sin\\theta$$\n\nwhere $r$ is the distance from pivot to force application, $F$ is the force, and $\\theta$ is the angle between the force and the lever arm.\n\nWhen the force is **perpendicular** to the lever arm ($\\theta = 90^\\circ$), this simplifies to:\n\n$$\\tau = rF$$\n\nThe unit is newton-meters (N·m). Torque is a vector: clockwise is conventionally negative, counterclockwise positive.",
          },
          {
            heading: "Lever arm matters",
            body: "The **lever arm** is the perpendicular distance from the pivot to the line of action of the force — not simply the distance to the point of application. A force applied far from the pivot produces more torque. This is why you push a door near the handle, not near the hinges, and why wrenches have long handles.\n\nA force directed **through** the pivot produces zero torque because its lever arm is zero.",
          },
          {
            heading: "Net torque",
            body: "When multiple torques act, add them with signs: counterclockwise positive, clockwise negative. The **net torque** determines angular acceleration. If net torque is zero, the object does not angularly accelerate.",
          },
        ],
        keyFormulas: [
          { name: "Torque", statement: "$\\tau = rF\\sin\\theta$; for perpendicular force $\\tau = rF$" },
          { name: "Units", statement: "Torque is measured in newton-meters (N·m)" },
        ],
        workedExample: {
          problem: "A 40 N force is applied perpendicular to a wrench handle 0.30 m from the nut. What torque is produced?",
          solution: "Since the force is perpendicular to the handle, $\\tau = rF = 0.30 \\times 40 = 12\\ \\text{N·m}$ clockwise (assuming clockwise direction).",
        },
      },
      questions: [
        {
          id: "phys12-u1-torque-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force of 50 N is applied perpendicular to a lever arm of 0.40 m. What is the torque?",
          response: { type: "numeric", parts: [{ label: "Torque", answer: 20, unit: "N·m" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Torque", statement: "$\\tau = rF$ for perpendicular force." }],
            steps: [
              { reasoning: "Force is perpendicular to lever arm, so $\\tau = rF = 0.40 \\times 50 = 20$ N·m.", working: "0.40\\times50=20", marks: 1, markCode: "M" },
            ],
            finalAnswer: "20 N·m",
            commonErrors: ["Using $\\tau = rF\\sin\\theta$ with wrong angle.", "Confusing torque units with energy units."],
            examinerNote: "M1 for 20 N·m.",
          },
        },
        {
          id: "phys12-u1-torque-basics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 30 N force is applied to a door handle 0.80 m from the hinges, at an angle of 30° to the door. Calculate the torque about the hinges.",
          response: { type: "numeric", parts: [{ label: "Torque", answer: 12, unit: "N·m", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Torque", statement: "$\\tau = rF\\sin\\theta$" },
              { kind: "method", name: "Angle selection", statement: "Use the angle between force and lever arm (perpendicular to door)." },
            ],
            steps: [
              { reasoning: "The force makes 30° with the door; the lever arm is perpendicular to the door, so the angle between force and lever arm is 60°.", marks: 1, markCode: "M" },
              { reasoning: "$\\tau = 0.80 \\times 30 \\times \\sin 60^\\circ = 0.80 \\times 30 \\times 0.866 = 20.8$ N·m.", working: "0.80\\times30\\times\\sin60^\\circ=20.8", marks: 1, markCode: "M" },
              { reasoning: "Torque ≈ 20.8 N·m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20.8 N·m",
            commonErrors: ["Using 30° instead of 60°.", "Ignoring the angle entirely."],
            examinerNote: "M1 angle reasoning, M1 substitution, A1 answer. Accept 20.8 or 20.78.",
          },
        },
        {
          id: "phys12-u1-torque-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two people push a revolving door. Person A pushes with 60 N at 1.2 m from the axis, perpendicular to the door. Person B pushes with 90 N at 0.80 m from the axis, also perpendicular. Person A pushes clockwise; Person B pushes counterclockwise. Calculate the net torque and state whether the door angularly accelerates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Torque", statement: "$\\tau = rF$ for perpendicular forces." },
              { kind: "principle", name: "Net torque", statement: "Opposite torques subtract; net torque determines angular acceleration." },
            ],
            steps: [
              { reasoning: "Torque A (clockwise): $\\tau_A = 1.2 \\times 60 = 72$ N·m.", working: "1.2\\times60=72", marks: 1, markCode: "M" },
              { reasoning: "Torque B (counterclockwise): $\\tau_B = 0.80 \\times 90 = 72$ N·m.", working: "0.80\\times90=72", marks: 1, markCode: "M" },
              { reasoning: "Net torque = 72 - 72 = 0 N·m.", marks: 1, markCode: "A" },
              { reasoning: "With zero net torque, the door does not angularly accelerate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Net torque = 0 N·m; the door does not angularly accelerate.",
            commonErrors: ["Adding torques instead of subtracting opposite directions.", "Confusing force with torque."],
            examinerNote: "M2 torques, A1 net, R1 conclusion.",
          },
        },
        {
          id: "phys12-u1-torque-basics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A uniform meter stick (weight 2.0 N) is pivoted at the 40 cm mark. A 5.0 N weight hangs at the 0 cm end. A student must hang a second weight at the 100 cm end to balance the stick.",
          parts: [
            { label: "a", prompt: "Calculate the torque produced by the 5.0 N weight about the pivot.", marks: 2 },
            { label: "b", prompt: "Calculate the torque produced by the stick's own weight about the pivot (the center of mass is at 50 cm).", marks: 2 },
            { label: "c", prompt: "Calculate the weight needed at 100 cm to balance the stick.", marks: 4 },
            { label: "d", prompt: "Explain why the student's hand does not need to supply any torque when the system balances.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Torque", statement: "$\\tau = rF$ with r measured from pivot." },
              { kind: "principle", name: "Rotational equilibrium", statement: "Net torque = 0 for balance." },
            ],
            steps: [
              { reasoning: "The 5.0 N weight is 40 cm = 0.40 m from the pivot: $\\tau = 0.40 \\times 5.0 = 2.0$ N·m clockwise.", working: "0.40\\times5.0=2.0", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Direction is clockwise (weight pulls down on the left of pivot).", marks: 1, markCode: "A", part: "a" },
              { reasoning: "The center of mass (50 cm) is 10 cm = 0.10 m to the RIGHT of the pivot (40 cm), so the weight pulls down on the right side, producing counterclockwise torque: $\\tau = 0.10 \\times 2.0 = 0.20$ N·m counterclockwise.", working: "0.10\\times2.0=0.20", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Direction is counterclockwise.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Total clockwise torque = 2.0 N·m; total counterclockwise = 0.20 N·m; net clockwise = 1.8 N·m must be balanced by the weight at 100 cm.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "The weight at 100 cm is 60 cm = 0.60 m from pivot; required torque = 1.8 N·m counterclockwise: $W = 1.8/0.60 = 3.0$ N.", working: "W=1.8/0.60=3.0", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: 3.0 N.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "When net torque is zero, the system is in rotational equilibrium; the hand holding the pivot supplies whatever force is needed for translation but no torque is needed because torques already balance.", marks: 2, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 2.0 N·m clockwise (b) 0.20 N·m counterclockwise (c) 3.0 N (d) net torque already zero.",
            commonErrors: ["Treating the stick's weight as acting at the pivot.", "Ignoring the stick's own weight.", "Getting directions backwards."],
            examinerNote: "2+2+4+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u1-equilibrium-conditions",
      title: "Conditions for equilibrium",
      skill: "Apply the two conditions for complete equilibrium: zero net force AND zero net torque.",
      lesson: {
        sections: [
          {
            heading: "Two conditions for equilibrium",
            body: "For an extended object to be in **complete equilibrium**, two conditions must both be satisfied:\n\n1. **Translational equilibrium**: the vector sum of all forces is zero ($\\sum F = 0$). The object does not accelerate linearly.\n2. **Rotational equilibrium**: the sum of all torques about any pivot is zero ($\\sum \\tau = 0$). The object does not angularly accelerate.\n\nSatisfying only the first is not enough — a see-saw can have zero net force but still rotate if torques are unbalanced.",
          },
          {
            heading: "Choosing a pivot",
            body: "When analyzing equilibrium, you may choose **any point** as the pivot — the net torque about that point must still be zero. Smart choice: pick the pivot at a point where an unknown force acts, so that force produces zero torque and drops out of the equation. This is how you solve for unknown forces in ladders, bridges and cranes.",
          },
          {
            heading: "Center of gravity",
            body: "The **center of gravity** is the point where the object's entire weight can be treated as acting. For a uniform object it is the geometric center; for irregular shapes it may be elsewhere. An object balances when its center of gravity is directly above the support base.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium conditions", statement: "$\\sum F = 0$ AND $\\sum \\tau = 0$ about any point" },
          { name: "Stable balance", statement: "Center of gravity above the base of support" },
        ],
        workedExample: {
          problem: "A 5.0 m uniform ladder (weight 200 N) leans against a wall. Its base is 3.0 m from the wall. Find the normal force from the wall if the ladder is in equilibrium (ignore friction at the wall; the ground is rough).",
          solution: "Choose the pivot at the base of the ladder. The ladder's weight acts at its center, 2.5 m along the ladder. The wall's normal force N acts horizontally at the top, 4.0 m up the wall (since base is 3.0 m from wall and ladder is 5.0 m, the top is 4 m high by Pythagoras: $\\sqrt{25-9}=4$). Taking torques about the base: weight torque = $200 \\times 1.5 = 300$ N·m (horizontal distance of center from base = 2.5 × 3/5 = 1.5 m). Wall force torque = $N \\times 4.0$. Setting equal: $N = 300/4.0 = 75$ N.",
        },
      },
      questions: [
        {
          id: "phys12-u1-equilibrium-conditions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of conditions must BOTH be satisfied for an object to be in complete equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero velocity and zero acceleration" },
              { id: "b", text: "Zero net force and zero net torque" },
              { id: "c", text: "Zero net force only" },
              { id: "d", text: "Constant speed only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Equilibrium", statement: "Complete equilibrium requires $\\sum F = 0$ and $\\sum \\tau = 0$." }],
            steps: [{ reasoning: "Both translational ($\\sum F = 0$) and rotational ($\\sum \\tau = 0$) equilibrium are needed.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Zero net force and zero net torque",
            commonErrors: ["Thinking zero net force alone guarantees equilibrium."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u1-equilibrium-conditions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A book rests on a table. The table pushes up with 15 N and the book weighs 15 N. Is the book in equilibrium? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Equilibrium", statement: "$\\sum F = 0$ and $\\sum \\tau = 0$." }],
            steps: [
              { reasoning: "Net force = $15 - 15 = 0$ N, so translational equilibrium holds.", marks: 1, markCode: "B" },
              { reasoning: "Both forces act through the book's center of gravity, so net torque is zero; the book is in complete equilibrium.", marks: 1, markCode: "B" },
              { reasoning: "Yes, the book is in equilibrium.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Yes — net force and net torque are both zero.",
            commonErrors: ["Forgetting to check torque; for symmetric objects torque usually cancels."],
            examinerNote: "B2 conditions, R1 conclusion.",
          },
        },
        {
          id: "phys12-u1-equilibrium-conditions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A uniform rod of weight 10 N and length 1.0 m is supported at two points: a knife-edge at 0.2 m from the left end and a scale at 0.8 m from the left end. Calculate the force on each support.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equilibrium", statement: "$\\sum F = 0$ and $\\sum \\tau = 0$." },
              { kind: "method", name: "Pivot choice", statement: "Choose pivot at one support to eliminate its unknown force." },
            ],
            steps: [
              { reasoning: "Weight acts at center (0.5 m). Take torques about left support (0.2 m): weight is 0.3 m away producing $10 \\times 0.3 = 3.0$ N·m clockwise.", working: "10\\times0.3=3.0", marks: 1, markCode: "M" },
              { reasoning: "The right support force R is 0.6 m from pivot: $R \\times 0.6 = 3.0$, so $R = 5.0$ N.", working: "R=3.0/0.6=5.0", marks: 1, markCode: "M" },
              { reasoning: "$\\sum F = 0$: left support $L + R = 10$, so $L = 10 - 5.0 = 5.0$ N.", marks: 1, markCode: "B" },
              { reasoning: "Both supports read 5.0 N because the center of gravity is midway between them.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Each support exerts 5.0 N.",
            commonErrors: ["Using 0.5 m as distance from pivot instead of 0.3 m.", "Forgetting $\\sum F = 0$ to find the second force."],
            examinerNote: "M2 torques, B1 force, R1 symmetry explanation.",
          },
        },
        {
          id: "phys12-u1-equilibrium-conditions-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A 4.0 m uniform beam (weight 80 N) is hinged at one end and held horizontal by a cable attached 1.0 m from the free end, making 30° with the beam. A 200 N load hangs at the free end.",
          parts: [
            { label: "a", prompt: "Calculate the torque about the hinge due to the beam's weight.", marks: 2 },
            { label: "b", prompt: "Calculate the torque about the hinge due to the 200 N load.", marks: 2 },
            { label: "c", prompt: "Calculate the tension in the cable.", marks: 4 },
            { label: "d", prompt: "Explain why the hinge can exert both upward and downward force components on the beam.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Torque", statement: "$\\tau = rF\\sin\\theta$; perpendicular distances." },
              { kind: "principle", name: "Equilibrium", statement: "$\\sum \\tau = 0$ about the hinge determines tension." },
            ],
            steps: [
              { reasoning: "Beam weight acts at center, 2.0 m from hinge, perpendicular to beam: $\\tau_w = 2.0 \\times 80 = 160$ N·m clockwise.", working: "2.0\\times80=160", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Direction is clockwise.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Load acts at free end, 4.0 m from hinge: $\\tau_L = 4.0 \\times 200 = 800$ N·m clockwise.", working: "4.0\\times200=800", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Direction is clockwise.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Total clockwise torque = 960 N·m. Cable is 3.0 m from hinge horizontally; its vertical component is $T\\sin 30^\\circ = 0.5T$. Torque from cable: $(3.0)(0.5T) = 1.5T$.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Set $1.5T = 960$, so $T = 640$ N.", working: "T=960/1.5=640", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: 640 N.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "The hinge must supply the remaining vertical force: total downward weight = 280 N, cable pulls up 320 N, so the hinge must pull DOWN with $320 - 280 = 40$ N to keep $\\sum F_y = 0$.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Hinge forces can point either direction depending on the balance; it is a pin joint supplying whatever force is needed.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) 160 N·m clockwise (b) 800 N·m clockwise (c) T = 640 N (d) hinge pulls down with 40 N.",
            commonErrors: ["Using cable's full tension instead of its vertical component.", "Wrong lever arm for the cable (3.0 m horizontal, not 4.0 m).", "Forgetting the beam's own weight."],
            examinerNote: "2+2+4+2 = 10. Cable attaches 1.0 m from free end, i.e. 3.0 m from hinge.",
          },
        },
      ],
    },
  ],
};
