import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypp4-u1-lesson-1-2",
  code: "1-2",
  title: "Forces, Newton's Laws and Momentum",
  goal: "I CAN apply Newton's laws of motion and use momentum in collisions.",
  standards: [
    "Key concept: Relationships",
    "MYP Sciences: Forces",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Force", definition: "A push or pull measured in newtons (N); a vector quantity." },
    { term: "Resultant force", definition: "The single force equivalent to all forces acting on a body." },
    { term: "Newton's first law", definition: "An object stays at rest or moves at constant velocity unless acted on by a resultant force." },
    { term: "Newton's second law", definition: "$F = ma$ — resultant force equals mass times acceleration." },
    { term: "Newton's third law", definition: "Every action has an equal and opposite reaction." },
    { term: "Momentum", definition: "$p = mv$, measured in kg m/s; conserved in collisions." },
  ],
  concepts: [
    {
      id: "mypp4-u1-newton",
      title: "Newton's laws of motion",
      skill: "Apply $F=ma$ and Newton's first and third laws to describe motion.",
      lesson: {
        sections: [
          {
            heading: "Newton's first law",
            body: "An object remains at rest or in uniform motion unless a resultant force acts. This explains inertia: passengers lurch forward when a bus brakes because their bodies tend to keep moving.",
          },
          {
            heading: "Newton's second law",
            body: "$F = ma$ where $F$ is resultant force (N), $m$ mass (kg), $a$ acceleration (m/s²). A 2 kg object accelerating at 3 m/s² needs $F = 6$ N. Weight $W = mg$ is a special case.",
          },
          {
            heading: "Newton's third law",
            body: "For every force there is an equal, opposite force on a different object. A book on a table pushes down on the table while the table pushes up on the book — the forces act on different bodies so they do not cancel.",
          },
        ],
        keyFormulas: [
          { name: "Second law", statement: "$F = ma$ (N = kg × m/s²)" },
          { name: "Weight", statement: "$W = mg$, $g = 9.8\\ \\text{N/kg}$" },
          { name: "Third law pair", statement: "Action and reaction: equal, opposite, different bodies" },
        ],
        workedExample: {
          problem: "A 5 kg box accelerates at 2 m/s² on a frictionless surface. What resultant force is needed?",
          solution: "$F = ma = 5 \\times 2 = 10$ N.",
        },
      },
      questions: [
        {
          id: "mypp4-u1-newton-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Joule" },
              { id: "b", text: "Newton" },
              { id: "c", text: "Pascal" },
              { id: "d", text: "Watt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Force", statement: "Force measured in newtons (N)." }],
            steps: [
              { reasoning: "1 N = 1 kg m/s².", working: "1\\ \\text{N}=1\\ \\text{kg m/s}^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Newton",
            commonErrors: ["Confusing with joule (energy)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-newton-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 4 kg object accelerates at 1.5 m/s². Calculate the resultant force.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.7 N" },
              { id: "b", text: "5.3 N" },
              { id: "c", text: "6.0 N" },
              { id: "d", text: "10.7 N" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "F = ma", statement: "$F = 4 \\times 1.5$" }],
            steps: [
              { reasoning: "Apply $F = ma$.", working: "4\\times1.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "6\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6.0 N",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A person standing in a bus lurches forward when the bus brakes suddenly. Which law explains this and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton's first law — the body tends to continue moving forward" },
              { id: "b", text: "Newton's second law — the bus accelerates the person" },
              { id: "c", text: "Newton's third law — the seat pushes back" },
              { id: "d", text: "Gravity pulls the person forward" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Inertia", statement: "Bodies resist changes in motion (first law)." }],
            steps: [
              { reasoning: "The bus decelerates but the person keeps moving forward due to inertia.", working: "\\text{inertia}", marks: 1, markCode: "M" },
              { reasoning: "Identify the law.", working: "\\text{1st law}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", working: "\\text{continues moving}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Newton's first law — inertia",
            commonErrors: ["Citing the second law; the person is not accelerating by force but by inertia."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 60 kg astronaut on the Moon ($g = 1.6\\ \\text{N/kg}$) and on Earth ($g = 9.8\\ \\text{N/kg}$).",
          parts: [
            { label: "a", prompt: "Calculate the astronaut's weight on Earth.", marks: 2 },
            { label: "b", prompt: "Calculate the astronaut's weight on the Moon.", marks: 1 },
            { label: "c", prompt: "Explain why the astronaut's mass is the same on both bodies.", marks: 2 },
            { label: "d", prompt: "The astronaut pushes a 20 kg rover with a force of 40 N on the Moon. Calculate its acceleration, assuming no friction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "W = mg", statement: "Weight depends on local $g$; mass does not." },
              { kind: "formula", name: "F = ma", statement: "Use mass (not weight) for acceleration." },
            ],
            steps: [
              { part: "a", reasoning: "$W = 60 \\times 9.8 = 588$ N.", working: "60\\times9.8=588\\ \\text{N}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct unit.", working: "\\text{N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$W = 60 \\times 1.6 = 96$ N.", working: "60\\times1.6=96\\ \\text{N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mass is the amount of matter — invariant.", working: "\\text{mass constant}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weight changes because $g$ differs.", working: "W=mg", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$a = F/m = 40/20$.", working: "\\frac{40}{20}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use mass, not weight, in $F=ma$.", working: "\\text{use mass}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$a = 2$ m/s².", working: "2\\ \\text{m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 588 N (b) 96 N (c) mass is amount of matter, weight = mg varies with g (d) 2 m/s²",
            commonErrors: ["Using weight instead of mass in (d)."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u1-newton-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's second law of motion states that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F = mv$" },
              { id: "b", text: "$F = ma$" },
              { id: "c", text: "$F = mgh$" },
              { id: "d", text: "$F = \\frac{1}{2}mv^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's second law", statement: "Resultant force = mass × acceleration." }],
            steps: [
              { reasoning: "$F = ma$ is the second law.", working: "F=ma", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $F = ma$",
            commonErrors: ["Confusing with momentum $p = mv$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-newton-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 3 kg mass accelerates at 4 m/s². Calculate the resultant force on it.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 12, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "F = ma", statement: "Force = mass × acceleration." }],
            steps: [
              { reasoning: "Apply $F = ma$.", working: "3\\times4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 N",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resultant force of 15 N produces an acceleration of 3 m/s² in an object. Calculate the mass of the object.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 5, unit: "kg" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "F = ma", statement: "Rearrange: $m = F/a$." }],
            steps: [
              { reasoning: "Rearrange $F = ma$ to $m = F/a$.", working: "m=\\frac{F}{a}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $15/3 = 5$ kg.", working: "5\\ \\text{kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 kg",
            commonErrors: ["Multiplying F × a instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the weight of a 2 kg mass on Earth, where $g = 9.8\\ \\text{N/kg}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 N" },
              { id: "b", text: "9.8 N" },
              { id: "c", text: "19.6 N" },
              { id: "d", text: "20 N" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "W = mg", statement: "Weight = mass × gravitational field strength." }],
            steps: [
              { reasoning: "Apply $W = mg$.", working: "2\\times9.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "19.6\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 19.6 N",
            commonErrors: ["Giving mass (2 kg) instead of weight."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A book rests on a table. Which pair of forces are a Newton's third law pair?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weight of book and normal force on book" },
              { id: "b", text: "Book pushes down on table; table pushes up on book" },
              { id: "c", text: "Gravity pulls book down; table holds book up" },
              { id: "d", text: "Book's weight and Earth's pull on book" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's third law", statement: "Action–reaction: equal, opposite, act on different bodies." }],
            steps: [
              { reasoning: "Third law forces must act on different objects.", working: "\\text{different bodies}", marks: 1, markCode: "M" },
              { reasoning: "Book-on-table and table-on-book satisfy this.", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Book pushes down on table; table pushes up on book",
            commonErrors: ["Choosing weight and normal force — those act on the same body and cancel."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 5 kg box on a frictionless surface is pushed with 20 N to the right and 8 N to the left. Calculate its acceleration.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.4 m/s² to the right" },
              { id: "b", text: "5.6 m/s² to the right" },
              { id: "c", text: "1.6 m/s² to the left" },
              { id: "d", text: "4.0 m/s² to the right" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Resultant force", statement: "$F_{net} = 20 - 8 = 12$ N; then $a = F/m$." }],
            steps: [
              { reasoning: "Find resultant force: $20 - 8 = 12$ N to the right.", working: "20-8=12\\ \\text{N}", marks: 1, markCode: "M" },
              { reasoning: "Apply $a = F/m = 12/5$.", working: "\\frac{12}{5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with direction.", working: "2.4\\ \\text{m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 2.4 m/s² to the right",
            commonErrors: ["Adding the forces instead of finding the resultant."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 10 kg crate rests on a frictionless floor.",
          parts: [
            { label: "a", prompt: "Calculate its acceleration when pushed with a resultant force of 50 N.", marks: 2 },
            { label: "b", prompt: "Calculate the force needed to accelerate it at 4 m/s².", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "F = ma", statement: "Use mass, not weight, in $F = ma$." }],
            steps: [
              { part: "a", reasoning: "$a = F/m = 50/10$.", working: "\\frac{50}{10}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$a = 5$ m/s².", working: "5\\ \\text{m/s}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F = ma = 10 \\times 4$.", working: "10\\times4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$F = 40$ N.", working: "40\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 m/s² (b) 40 N",
            commonErrors: ["Using weight (98 N) instead of mass in $F = ma$."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypp4-u1-newton-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Inertia is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the tendency of an object to resist changes in its motion" },
              { id: "b", text: "a force that pushes objects forward" },
              { id: "c", text: "the speed of a moving object" },
              { id: "d", text: "the mass of an object" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Inertia", statement: "Resistance to change in motion — explained by Newton's first law." }],
            steps: [
              { reasoning: "Inertia = tendency to keep current state of motion.", working: "\\text{first law}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** tendency to resist changes in motion",
            commonErrors: ["Confusing inertia with momentum."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypp4-u1-newton-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the weight of a 0.5 kg apple on Earth, where $g = 9.8\\ \\text{N/kg}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 4.9, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "W = mg", statement: "Weight = mass × g." }],
            steps: [
              { reasoning: "Apply $W = mg$.", working: "0.5\\times9.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4.9\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.9 N",
            commonErrors: ["Answering 0.5 kg (mass) instead of weight."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A passenger standing in a bus lurches forward when the bus brakes suddenly. Explain this using Newton's first law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's first law", statement: "Objects continue at rest or constant velocity unless a resultant force acts." },
              { kind: "definition", name: "Inertia", statement: "Bodies resist changes in motion." },
            ],
            steps: [
              { reasoning: "State the first law: the passenger's body tends to continue moving at its original velocity.", working: "\\text{continues moving}", marks: 1, markCode: "M" },
              { reasoning: "The bus decelerates because the brakes exert a force on the bus.", working: "\\text{bus decelerates}", marks: 1, markCode: "M" },
              { reasoning: "No horizontal force acts on the passenger initially, so they keep moving forward relative to the bus.", working: "\\text{no force on passenger}", marks: 1, markCode: "A" },
              { reasoning: "Result: passenger lurches forward — inertia in action.", working: "\\text{inertia}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First law/inertia: body keeps moving forward when bus decelerates",
            commonErrors: ["Saying a force pushes the passenger forward."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-newton-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 2 kg ball and a 1 kg ball are dropped from the same height on the Moon, where $g = 1.6\\ \\text{N/kg}$.",
          parts: [
            { label: "a", prompt: "Calculate the weight of the 2 kg ball.", marks: 1 },
            { label: "b", prompt: "Calculate the weight of the 1 kg ball.", marks: 1 },
            { label: "c", prompt: "State the acceleration of each ball as it falls.", marks: 1 },
            { label: "d", prompt: "Explain why the accelerations are the same even though the weights differ.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "W = mg", statement: "Weight depends on mass." },
              { kind: "formula", name: "a = F/m", statement: "Gravity force $mg$ divided by mass $m$ gives $a = g$ — independent of mass." },
            ],
            steps: [
              { part: "a", reasoning: "$W = 2 \\times 1.6 = 3.2$ N.", working: "3.2\\ \\text{N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$W = 1 \\times 1.6 = 1.6$ N.", working: "1.6\\ \\text{N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both accelerate at $g = 1.6$ m/s².", working: "1.6\\ \\text{m/s}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gravitational force $= mg$; $a = mg/m = g$, so mass cancels — heavier ball has proportionally more force.", working: "a=g", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3.2 N (b) 1.6 N (c) both 1.6 m/s² (d) a = mg/m = g — mass cancels",
            commonErrors: ["Thinking heavier objects fall faster."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypp4-u1-newton-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rocket expels exhaust gases backwards. The gases push the rocket forwards. What can be said about these two forces?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The force on the rocket is larger than on the gases" },
              { id: "b", text: "The forces are equal in size, opposite in direction, and act on different bodies" },
              { id: "c", text: "Only the rocket experiences a force" },
              { id: "d", text: "The forces cancel so nothing moves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Newton's third law", statement: "Action–reaction pairs are equal, opposite, on different bodies — so motion is possible." }],
            steps: [
              { reasoning: "Rocket pushes gases back; gases push rocket forward — an action–reaction pair.", working: "\\text{action-reaction}", marks: 1, markCode: "M" },
              { reasoning: "Forces are equal and opposite but act on different bodies, so they do not cancel.", working: "\\text{different bodies}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** equal, opposite, different bodies",
            commonErrors: ["Thinking the forces cancel and prevent motion."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u1-momentum",
      title: "Momentum and collisions",
      skill: "Calculate momentum and apply conservation of momentum in collisions.",
      lesson: {
        sections: [
          {
            heading: "Momentum",
            body: "**Momentum** $p = mv$ (kg m/s). It is a vector — direction matters. A heavy slow object can have more momentum than a light fast one: a loaded lorry at 5 m/s has far more momentum than a tennis ball at 30 m/s.",
          },
          {
            heading: "Conservation of momentum",
            body: "In any collision or explosion with no external forces, total momentum before = total momentum after. This explains recoil: a gun's backward momentum equals the bullet's forward momentum.",
          },
          {
            heading: "Impulse",
            body: "**Impulse** $= F \\times t = \\Delta p$. A longer collision time reduces force for the same momentum change — why crumple zones and airbags save lives.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p = mv$ kg m/s" },
          { name: "Conservation", statement: "$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$" },
          { name: "Impulse", statement: "$F \\times t = \\Delta p$" },
        ],
        workedExample: {
          problem: "A 0.5 kg ball moving at 6 m/s hits a wall and rebounds at 6 m/s. Find its change in momentum.",
          solution: "$\\Delta p = 0.5(6-(-6)) = 6$ kg m/s (taking original direction as positive).",
        },
      },
      questions: [
        {
          id: "mypp4-u1-mom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the units of momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kg m/s" },
              { id: "b", text: "N" },
              { id: "c", text: "J" },
              { id: "d", text: "kg m/s²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Momentum", statement: "$p = mv$ → kg × m/s." }],
            steps: [
              { reasoning: "Mass × velocity = kg m/s.", working: "\\text{kg m/s}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** kg m/s",
            commonErrors: ["Confusing with force (N)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypp4-u1-mom-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 2 kg trolley moves at 3 m/s. Calculate its momentum.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.5 kg m/s" },
              { id: "b", text: "5 kg m/s" },
              { id: "c", text: "6 kg m/s" },
              { id: "d", text: "9 kg m/s" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "p = mv", statement: "$p = 2 \\times 3$" }],
            steps: [
              { reasoning: "Momentum = mass × velocity.", working: "2\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "6\\ \\text{kg m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 kg m/s",
            commonErrors: ["Using weight instead of mass."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 0.01 kg bullet is fired at 400 m/s from a 4 kg rifle. Using conservation of momentum, what is the rifle's recoil velocity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 m/s" },
              { id: "b", text: "0.4 m/s" },
              { id: "c", text: "4 m/s" },
              { id: "d", text: "100 m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Conservation", statement: "$m_b v_b = m_r v_r$" }],
            steps: [
              { reasoning: "Momentum of bullet = momentum of rifle recoil.", working: "0.01\\times400", marks: 1, markCode: "M" },
              { reasoning: "Rifle recoil velocity = $4/v_r = 4$ → $v_r = 1$ m/s.", working: "\\frac{4}{4}=1\\ \\text{m/s}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "1\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 m/s",
            commonErrors: ["Using bullet momentum = 4 kg m/s correctly but dividing wrong."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 1000 kg car travelling at 10 m/s collides head-on with a stationary 1500 kg car. After the collision they move together at 4 m/s.",
          parts: [
            { label: "a", prompt: "Calculate the momentum of the moving car before the collision.", marks: 2 },
            { label: "b", prompt: "Calculate the total momentum before the collision.", marks: 1 },
            { label: "c", prompt: "Calculate the combined momentum after the collision.", marks: 2 },
            { label: "d", prompt: "Show whether momentum is conserved and explain what type of collision this is.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "p = mv", statement: "Before: only car 1 moves; after: combined mass moves." },
              { kind: "principle", name: "Conservation", statement: "Total momentum conserved in collisions." },
            ],
            steps: [
              { part: "a", reasoning: "$p = 1000 \\times 10 = 10\\,000$ kg m/s.", working: "1000\\times10=10000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct units.", working: "\\text{kg m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stationary car has zero momentum; total = 10 000 kg m/s.", working: "10000\\ \\text{kg m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Combined mass 2500 kg at 4 m/s.", working: "2500\\times4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "10000\\ \\text{kg m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Before = after = 10 000 kg m/s → conserved.", working: "10000=10000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They stick together → perfectly inelastic collision.", working: "\\text{inelastic}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Kinetic energy is lost (deformation, heat, sound).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 000 kg m/s (b) 10 000 kg m/s (c) 10 000 kg m/s (d) conserved; inelastic — KE lost",
            commonErrors: ["Forgetting stationary car still contributes mass after collision."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u1-mom-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Momentum is always conserved when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only in perfectly elastic collisions" },
              { id: "b", text: "no external forces act on the system" },
              { id: "c", text: "objects are moving slowly" },
              { id: "d", text: "the objects have equal mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Conservation of momentum", statement: "Total momentum is conserved when no external forces act." }],
            steps: [
              { reasoning: "Conservation requires no net external force.", working: "\\text{no external force}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** no external forces act",
            commonErrors: ["Thinking conservation only applies to elastic collisions."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-mom-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 4 kg object moves at 5 m/s. Calculate its momentum.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 20, unit: "kg m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "p = mv", statement: "Momentum = mass × velocity." }],
            steps: [
              { reasoning: "Apply $p = mv$.", working: "4\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "20\\ \\text{kg m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 kg m/s",
            commonErrors: ["Using weight instead of mass."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 0.2 kg ball travels at 15 m/s. Calculate its momentum.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 3, unit: "kg m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "p = mv", statement: "$p = 0.2 \\times 15$" }],
            steps: [
              { reasoning: "Apply $p = mv$.", working: "0.2\\times15", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3\\ \\text{kg m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 kg m/s",
            commonErrors: ["Decimal place errors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ball hits a wall at 6 m/s and rebounds at 6 m/s in the opposite direction. What is the change in its momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero — speed is unchanged" },
              { id: "b", text: "Twice the original momentum, because direction reverses" },
              { id: "c", text: "Half the original momentum" },
              { id: "d", text: "The same as before but negative only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Δp = mΔv", statement: "Momentum is a vector; reversing direction doubles the change." }],
            steps: [
              { reasoning: "Velocity changes from $+v$ to $-v$, so $\\Delta v = 2v$.", working: "\\Delta v=2v", marks: 1, markCode: "M" },
              { reasoning: "Change in momentum = $2mv$ — twice original.", working: "2mv", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** twice the original momentum",
            commonErrors: ["Assuming same speed means zero momentum change — direction matters."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 0.4 kg ball hits a wall at 5 m/s and rebounds at 5 m/s. Calculate the magnitude of its change in momentum.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 4, unit: "kg m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Δp = mΔv", statement: "$\\Delta p = 0.4 \\times (5-(-5))$" }],
            steps: [
              { reasoning: "Velocity reverses: $\\Delta v = 5 - (-5) = 10$ m/s.", working: "\\Delta v=10\\ \\text{m/s}", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta p = 0.4 \\times 10 = 4$ kg m/s.", working: "4\\ \\text{kg m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 kg m/s",
            commonErrors: ["Using $\\Delta v = 0$ because speed is unchanged."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two trolleys collide and stick together. Trolley A has mass 2 kg moving at 3 m/s; trolley B has mass 1 kg moving at $-2$ m/s (opposite direction). Calculate their common velocity after collision.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 1.33, tolerance: 0.01, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Conservation", statement: "$m_1u_1 + m_2u_2 = (m_1+m_2)v$" }],
            steps: [
              { reasoning: "Total momentum before = $2 \\times 3 + 1 \\times (-2) = 4$ kg m/s.", working: "6-2=4", marks: 1, markCode: "M" },
              { reasoning: "Combined mass = 3 kg; $v = 4/3$.", working: "\\frac{4}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1.33\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.33 m/s (in A's original direction)",
            commonErrors: ["Ignoring the sign of trolley B's velocity."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which situation produces the greatest impulse on an object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A small force acting for a short time" },
              { id: "b", text: "A large force acting for a long time" },
              { id: "c", text: "A small force acting for a long time" },
              { id: "d", text: "A large force acting for an instant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Impulse", statement: "$\\text{Impulse} = F \\times t = \\Delta p$ — larger F and larger t give larger impulse." }],
            steps: [
              { reasoning: "Impulse depends on both force and time.", working: "F\\times t", marks: 1, markCode: "M" },
              { reasoning: "Large force × long time maximises impulse.", working: "\\text{max }F\\times t", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** large force for a long time",
            commonErrors: ["Thinking only force matters, not duration."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the SI units of impulse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "N s" },
              { id: "b", text: "J" },
              { id: "c", text: "kg m/s²" },
              { id: "d", text: "W" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Impulse", statement: "$\\text{Impulse} = F \\times t$ → N × s." }],
            steps: [
              { reasoning: "Force (N) × time (s) = N s.", working: "\\text{N s}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** N s",
            commonErrors: ["Confusing with energy (J)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypp4-u1-mom-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 6 kg trolley moving at 2 m/s collides head-on with a stationary 3 kg trolley. They move together after the collision. Calculate their common velocity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 1.33, tolerance: 0.01, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Conservation", statement: "$6 \\times 2 = 9v$" }],
            steps: [
              { reasoning: "Momentum before = $12$ kg m/s; combined mass = 9 kg.", working: "12\\ \\text{kg m/s}", marks: 1, markCode: "M" },
              { reasoning: "$v = 12/9 = 1.33$ m/s.", working: "\\frac{12}{9}=1.33\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.33 m/s",
            commonErrors: ["Using only the 6 kg mass after collision."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a heavy lorry moving slowly can have more momentum than a fast tennis ball, using $p = mv$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "p = mv", statement: "Momentum depends on both mass and velocity." },
              { kind: "principle", name: "Vector quantity", statement: "Larger mass can compensate for smaller velocity." },
            ],
            steps: [
              { reasoning: "State that momentum = mass × velocity.", working: "p=mv", marks: 1, markCode: "M" },
              { reasoning: "The lorry's mass is thousands of times the ball's mass.", working: "\\text{large }m", marks: 1, markCode: "M" },
              { reasoning: "Even at low speed, $m$ dominates so lorry momentum is larger.", working: "m\\ \\text{dominates}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: heavy slow object can exceed light fast object's momentum.", working: "\\text{conclusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lorry's huge mass gives greater momentum despite lower speed",
            commonErrors: ["Assuming faster always means more momentum."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-mom-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 0.01 kg bullet is fired at 300 m/s from a rifle of mass 3 kg.",
          parts: [
            { label: "a", prompt: "Calculate the momentum of the bullet.", marks: 1 },
            { label: "b", prompt: "Calculate the recoil velocity of the rifle.", marks: 1 },
            { label: "c", prompt: "Explain how momentum is conserved in this situation.", marks: 1 },
            { label: "d", prompt: "State what type of interaction this is.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "p = mv", statement: "Bullet momentum = rifle recoil momentum." },
              { kind: "principle", name: "Conservation", statement: "Total momentum before (zero) = total after." },
            ],
            steps: [
              { part: "a", reasoning: "$p = 0.01 \\times 300 = 3$ kg m/s.", working: "3\\ \\text{kg m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$v = 3/3 = 1$ m/s backwards.", working: "1\\ \\text{m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equal and opposite momenta: bullet forward 3 kg m/s, rifle backward 3 kg m/s, total zero.", working: "3-3=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "An explosion-type interaction (energy released separates the parts).", working: "\\text{explosion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 kg m/s (b) 1 m/s backwards (c) equal opposite momenta sum to zero (d) explosion",
            commonErrors: ["Forgetting recoil direction is opposite."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypp4-u1-mom-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A firework at rest explodes into fragments. What is the total momentum of the fragments immediately after the explosion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal to the momentum before the explosion (zero)" },
              { id: "b", text: "Greater than before because energy is released" },
              { id: "c", text: "Zero only if fragments have equal mass" },
              { id: "d", text: "Impossible to determine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Conservation", statement: "Total momentum is conserved in explosions — internal forces cannot change total momentum." }],
            steps: [
              { reasoning: "Before explosion momentum = 0 (at rest).", working: "p_{before}=0", marks: 1, markCode: "M" },
              { reasoning: "No external force → total momentum after must also be zero (vector sum).", working: "p_{after}=0", marks: 1, markCode: "M" },
              { reasoning: "Match choice (a).", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** equal to before — zero",
            commonErrors: ["Thinking released energy increases momentum."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
