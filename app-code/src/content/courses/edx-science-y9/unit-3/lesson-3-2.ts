import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "esc9-u3-lesson-3-2",
  code: "3-2",
  title: "Pressure and Moments",
  goal: "I CAN calculate pressure from force and area, explain pressure in fluids, and use moments and the principle of moments.",
  standards: ["KS3 Physics", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Pressure", definition: "The force acting per unit area, found by dividing force by the area over which it acts. Measured in pascals (Pa), where $1\\text{ Pa} = 1\\text{ N/m}^2$." },
    { term: "Pascal (Pa)", definition: "The unit of pressure. One pascal is a force of one newton acting on an area of one square metre." },
    { term: "Fluid", definition: "A substance that can flow: a liquid or a gas." },
    { term: "Moment", definition: "The turning effect of a force about a pivot, equal to the force multiplied by the perpendicular distance from the pivot. Measured in newton metres (Nm)." },
    { term: "Pivot", definition: "The fixed point about which an object can turn." },
    { term: "Principle of moments", definition: "When an object is balanced, the total clockwise moment about the pivot equals the total anticlockwise moment." },
  ],
  concepts: [
    {
      id: "esc9-u3-pressure-force-area",
      title: "Pressure, force and area",
      skill: "Calculate pressure using $p = \\frac{F}{A}$ and explain how pressure in liquids changes with depth.",
      lesson: {
        sections: [
          {
            heading: "Pressure on a surface",
            body: "Pressure tells you how concentrated a force is. It is the force acting on each square metre of a surface: $p = \\frac{F}{A}$. Force is in newtons (N), area in square metres ($\\text{m}^2$) and pressure in pascals (Pa). For the same force, a **smaller area** gives a **greater pressure**. This is why a knife is sharpened and why snowshoes have a large area.",
          },
          {
            heading: "Pressure in liquids and gases",
            body: "A fluid exerts pressure on everything in contact with it, and the pressure acts in all directions. In a liquid the pressure **increases with depth** because there is more liquid above pushing down. This is why dam walls are thicker at the bottom and why divers feel more pressure the deeper they go. Pressure also increases with the density of the liquid.",
          },
          {
            heading: "Using g = 10 N/kg",
            body: "In calculations in this course, use $g = 10\\text{ N/kg}$ on Earth. The weight of an object is $W = mg$. When an object rests on a surface, the force it exerts is its weight. Convert areas to $\\text{m}^2$ first: $1\\text{ cm}^2 = 0.0001\\text{ m}^2$.",
          },
        ],
        keyFormulas: [
          { name: "Pressure", statement: "$p = \\frac{F}{A}$ (pressure in Pa = force in N $\\div$ area in $\\text{m}^2$)" },
          { name: "Weight", statement: "$W = mg$ with $g = 10\\text{ N/kg}$" },
          { name: "Area conversion", statement: "$1\\text{ cm}^2 = 0.0001\\text{ m}^2$" },
        ],
        workedExample: {
          problem: "A box of weight 200 N rests on a table. The area of the box in contact with the table is 0.40 $\\text{m}^2$. Calculate the pressure on the table.",
          solution: "$p = \\frac{F}{A} = \\frac{200}{0.40} = 500\\text{ Pa}$.",
        },
      },
      questions: [
        {
          id: "esc9-u3-pressure-force-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a correct unit of pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{kg/m}^3$" },
              { id: "b", text: "$\\text{Nm}$" },
              { id: "c", text: "$\\text{N/m}^2$" },
              { id: "d", text: "$\\text{N}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$, so the unit is newtons per square metre, $\\text{N/m}^2$ (pascals)." },
            ],
            steps: [
              { reasoning: "Pressure is force divided by area, so its unit is newtons per square metre (the pascal).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\text{N/m}^2$",
            commonErrors: ["Choosing N, the unit of force.", "Choosing Nm, the unit of a moment.", "Choosing $\\text{kg/m}^3$, the unit of density."],
            examinerNote: "B1 for (b) only.",
          },
        },
        {
          id: "esc9-u3-pressure-force-area-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person has a weight of 600 N. When standing on both feet, the total area of the soles in contact with the floor is 0.040 $\\text{m}^2$. Calculate the pressure the person exerts on the floor, in pascals.",
          response: { type: "numeric", parts: [{ label: "Pressure", answer: 15000, unit: "Pa" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$" },
            ],
            steps: [
              { reasoning: "The force on the floor is the person's weight. Substitute into the pressure equation.", working: "p = \\frac{F}{A} = \\frac{600}{0.040}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "p = 15000\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15000\\text{ Pa}$ (15 kPa)",
            commonErrors: ["Multiplying force by area to get 24 Pa.", "Dividing area by force."],
            examinerNote: "M1 for $600 \\div 0.040$. A1 for 15000 Pa. Allow 1.5 $\\times 10^4$. Allow N/m$^2$ as the unit.",
          },
        },
        {
          id: "esc9-u3-pressure-force-area-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A woman of mass 60 kg stands on one stiletto heel. The area of the heel in contact with the floor is $1.0\\text{ cm}^2$. Use $g = 10\\text{ N/kg}$ and $1\\text{ cm}^2 = 0.0001\\text{ m}^2$. Calculate the pressure of the heel on the floor, in pascals.",
          response: { type: "numeric", parts: [{ label: "Pressure", answer: 6000000, tolerance: 1000, unit: "Pa" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$" },
            ],
            steps: [
              { reasoning: "Calculate the force exerted on the floor, which is her weight.", working: "W = mg = 60 \\times 10 = 600\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Convert the area to square metres and substitute.", working: "p = \\frac{600}{0.0001}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "p = 6\\,000\\,000\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6\\,000\\,000\\text{ Pa}$ ($6.0 \\times 10^6\\text{ Pa}$)",
            commonErrors: ["Not converting the area from $\\text{cm}^2$ to $\\text{m}^2$, giving 600 Pa.", "Using the mass (60) instead of the weight as the force."],
            examinerNote: "M1 for 600 N. M1 for correct area conversion in the substitution. A1 for $6.0 \\times 10^6$ Pa. Allow ecf for an incorrect weight.",
          },
        },
        {
          id: "esc9-u3-pressure-force-area-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A brick has a mass of 3.0 kg and dimensions 0.20 m $\\times$ 0.10 m $\\times$ 0.050 m. It rests on a flat table. Use $g = 10\\text{ N/kg}$.",
          parts: [
            { label: "a", prompt: "Calculate the weight of the brick, in newtons.", marks: 2 },
            { label: "b", prompt: "Calculate the pressure on the table when the brick rests on its largest face (0.20 m $\\times$ 0.10 m), in pascals.", marks: 2 },
            { label: "c", prompt: "Calculate the pressure on the table when the brick rests on its smallest face (0.10 m $\\times$ 0.050 m), in pascals.", marks: 2 },
            { label: "d", prompt: "Explain why the pressures in (b) and (c) are different.", marks: 2 },
            { label: "e", prompt: "Explain why the wall of a dam is built thicker at the bottom than at the top.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$" },
              { kind: "principle", name: "Pressure in liquids", statement: "Pressure in a liquid increases with depth." },
            ],
            steps: [
              { part: "a", reasoning: "Use the weight equation with $g = 10\\text{ N/kg}$.", working: "W = mg = 3.0 \\times 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "W = 30\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area of the largest face is $0.20 \\times 0.10 = 0.020\\text{ m}^2$. Divide the force by this area.", working: "p = \\frac{30}{0.020}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "p = 1500\\text{ Pa}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area of the smallest face is $0.10 \\times 0.050 = 0.0050\\text{ m}^2$.", working: "p = \\frac{30}{0.0050}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "p = 6000\\text{ Pa}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The force (the weight of the brick) is the same in both cases.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The smaller contact area in (c) means the same force is concentrated on a smaller area, so the pressure is greater (four times greater).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Pressure in water increases with depth because there is more water above pushing down.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The wall at the bottom must withstand a greater pressure, so it needs to be thicker and stronger.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $30\\text{ N}$ (b) $1500\\text{ Pa}$ (c) $6000\\text{ Pa}$ (d) same force on a smaller area gives a greater pressure (e) pressure increases with depth, so the base must withstand more pressure.",
            commonErrors: ["Using 3.0 as the force without converting mass to weight.", "Using the wrong faces to find the area in (b) or (c).", "Saying in (e) that the water is 'heavier' at the bottom, without referring to the weight of water above."],
            examinerNote: "In (b) and (c) allow ecf from an incorrect weight in (a). In (d) the idea of the same force must be stated for the first mark.",
          },
        },
      ],
    },
    {
      id: "esc9-u3-moments-balance",
      title: "Moments and the principle of moments",
      skill: "Calculate moments and use the principle of moments to find unknown forces or distances.",
      lesson: {
        sections: [
          {
            heading: "The turning effect of a force",
            body: "A force can make an object turn about a fixed point called a **pivot**. The turning effect is the **moment** of the force: moment = force $\\times$ perpendicular distance from the pivot, or $M = Fd$. The unit is the newton metre (Nm), and the distance must be in metres. Pushing a door far from the hinges gives a bigger moment than pushing near the hinges, so the door is easier to open.",
          },
          {
            heading: "The principle of moments",
            body: "An object that is balanced (in equilibrium) has no resultant turning effect. The **principle of moments** says: total clockwise moment = total anticlockwise moment about the pivot. For a seesaw with a person on each side, $F_1 d_1 = F_2 d_2$. A heavier person must sit closer to the pivot to balance a lighter person.",
          },
          {
            heading: "Solving moments problems",
            body: "Choose the pivot, then work out the moment of each force and say which direction it turns. Write the equation clockwise = anticlockwise and rearrange for the unknown. Make sure distances are measured from the pivot, not from the end of the beam, and convert centimetres to metres.",
          },
        ],
        keyFormulas: [
          { name: "Moment of a force", statement: "$M = Fd$ (moment in Nm = force in N $\\times$ perpendicular distance in m)" },
          { name: "Principle of moments", statement: "total clockwise moment = total anticlockwise moment (balanced)" },
        ],
        workedExample: {
          problem: "A 200 N child sits 1.5 m from the pivot of a seesaw. How far from the pivot must a 300 N adult sit on the other side to balance it?",
          solution: "Child's moment $= 200 \\times 1.5 = 300\\text{ Nm}$. For balance, $300 \\times d = 300$, so $d = 1.0\\text{ m}$.",
        },
      },
      questions: [
        {
          id: "esc9-u3-moments-balance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct unit for the moment of a force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{N/m}$" },
              { id: "b", text: "$\\text{N/kg}$" },
              { id: "c", text: "$\\text{N/m}^2$" },
              { id: "d", text: "$\\text{Nm}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M = Fd$, so the unit is newton metre (Nm)." },
            ],
            steps: [
              { reasoning: "Moment is force multiplied by distance, giving newton metres.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\text{Nm}$",
            commonErrors: ["Choosing N/m$^2$, the unit of pressure.", "Choosing N/kg, the unit of gravitational field strength."],
            examinerNote: "B1 for (c) only.",
          },
        },
        {
          id: "esc9-u3-moments-balance-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force of 40 N is applied to a spanner at a perpendicular distance of 0.35 m from the nut. Calculate the moment of the force about the nut, in Nm.",
          response: { type: "numeric", parts: [{ label: "Moment", answer: 14, unit: "Nm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment of a force", statement: "$M = Fd$" },
            ],
            steps: [
              { reasoning: "Multiply the force by the perpendicular distance from the pivot.", working: "M = Fd = 40 \\times 0.35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "M = 14\\text{ Nm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14\\text{ Nm}$",
            commonErrors: ["Dividing force by distance to get 114.", "Using 35 instead of 0.35 and getting 1400."],
            examinerNote: "M1 for $40 \\times 0.35$. A1 for 14 Nm.",
          },
        },
        {
          id: "esc9-u3-moments-balance-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A seesaw is balanced horizontally. A child of weight 300 N sits 1.5 m from the pivot. An adult of weight 450 N sits on the other side. Calculate the distance of the adult from the pivot, in metres.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 1, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Principle of moments", statement: "For a balanced object, total clockwise moment = total anticlockwise moment." },
              { kind: "formula", name: "Moment of a force", statement: "$M = Fd$" },
            ],
            steps: [
              { reasoning: "Find the moment of the child's weight about the pivot.", working: "M = 300 \\times 1.5 = 450\\text{ Nm}", marks: 1, markCode: "M" },
              { reasoning: "The seesaw is balanced, so the adult's moment equals the child's moment.", working: "450 \\times d = 450", marks: 1, markCode: "M" },
              { reasoning: "Rearrange for the distance.", working: "d = \\frac{450}{450} = 1.0\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.0\\text{ m}$",
            commonErrors: ["Putting the heavier person further from the pivot.", "Adding the two weights instead of equating moments."],
            examinerNote: "M1 for $300 \\times 1.5$ (or 450 seen). M1 for equating the moments. A1 for 1.0 m.",
          },
        },
        {
          id: "esc9-u3-moments-balance-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A uniform metre rule is balanced on a pivot placed at the 50 cm mark. A student hangs a mass of 0.20 kg from the 20 cm mark. She then hangs a second mass from the 70 cm mark so that the rule balances horizontally. Use $g = 10\\text{ N/kg}$.",
          parts: [
            { label: "a", prompt: "Calculate the clockwise or anticlockwise moment of the 0.20 kg mass about the pivot, in Nm.", marks: 3 },
            { label: "b", prompt: "Calculate the weight of the second mass, in newtons.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of the second mass, in kg.", marks: 1 },
            { label: "d", prompt: "State the principle of moments.", marks: 1 },
            { label: "e", prompt: "Explain why a long spanner makes it easier to loosen a tight nut.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment of a force", statement: "$M = Fd$" },
              { kind: "law", name: "Principle of moments", statement: "For a balanced object, total clockwise moment = total anticlockwise moment." },
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { part: "a", reasoning: "Find the weight of the 0.20 kg mass.", working: "W = mg = 0.20 \\times 10 = 2.0\\text{ N}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The distance from the pivot is $50 - 20 = 30\\text{ cm} = 0.30\\text{ m}$.", working: "d = 0.30\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply force by distance. The mass is on the left of the pivot, so this moment is anticlockwise.", working: "M = 2.0 \\times 0.30 = 0.60\\text{ Nm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The second mass is $70 - 50 = 20\\text{ cm} = 0.20\\text{ m}$ from the pivot. Balance requires equal moments.", working: "F \\times 0.20 = 0.60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrange.", working: "F = \\frac{0.60}{0.20} = 3.0\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the weight by $g$.", working: "m = \\frac{W}{g} = \\frac{3.0}{10} = 0.30\\text{ kg}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State that the clockwise and anticlockwise moments are equal when an object is balanced.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Moment = force $\\times$ distance, so a longer spanner increases the distance from the pivot (the nut).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "For the same force a larger moment is produced, so a smaller force is needed to turn the nut.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.60\\text{ Nm}$ (anticlockwise) (b) $3.0\\text{ N}$ (c) $0.30\\text{ kg}$ (d) total clockwise moment = total anticlockwise moment when balanced (e) a longer spanner gives a bigger moment for the same force.",
            commonErrors: ["Using distances measured from the end of the rule (20 cm and 70 cm) instead of from the pivot.", "Not converting centimetres to metres.", "Using 0.20 as a force in newtons rather than finding the weight."],
            examinerNote: "In (b) and (c) allow ecf from (a). Direction in (a) is not required for the A mark. In (d) accept 'sum of clockwise moments equals sum of anticlockwise moments' (oe).",
          },
        },
      ],
    },
  ],
};
