import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eph10-u1-lesson-1-3",
  code: "1-3",
  title: "Momentum, Moments and Springs",
  goal: "I CAN use conservation of momentum, calculate moments and apply the principle of moments, and use Hooke's law for springs.",
  standards: ["4PH1 1.16", "4PH1 1.17", "4PH1 1.18", "4PH1 1.19", "4PH1 1.20", "4PH1 1.21"],
  vocabulary: [
    { term: "Momentum", definition: "The product of mass and velocity, $p = mv$. It is a vector, measured in $\\text{kg m/s}$." },
    { term: "Conservation of momentum", definition: "In a closed system, the total momentum before a collision equals the total momentum after it." },
    { term: "Moment", definition: "The turning effect of a force about a pivot: force $\\times$ perpendicular distance from the pivot, in $\\text{N m}$." },
    { term: "Pivot", definition: "The point about which an object turns." },
    { term: "Extension", definition: "The increase in the length of a spring or wire compared with its original length." },
    { term: "Limit of proportionality", definition: "The point beyond which the extension of a spring is no longer directly proportional to the force applied." },
    { term: "Spring constant", definition: "The force needed per unit extension of a spring, $k$, measured in $\\text{N/m}$." },
  ],
  concepts: [
    {
      id: "eph10-u1-momentum",
      title: "Momentum and conservation of momentum",
      skill: "Calculate momentum, apply conservation of momentum, and use force = change in momentum / time.",
      lesson: {
        sections: [
          {
            heading: "Momentum",
            body: "$$p = mv$$\n\nMomentum $p$ (in $\\text{kg m/s}$) is mass $m$ (kg) times velocity $v$ ($\\text{m/s}$). It is a **vector**: choose one direction as positive and give movement the opposite way a negative sign.",
          },
          {
            heading: "Conservation of momentum",
            body: "In any collision or explosion in a closed system (no external forces), the **total momentum before equals the total momentum after**.\n\nWhen two trolleys collide and stick together, with the second at rest:\n\n$$m_1 u_1 = (m_1 + m_2)\\,v$$\n\nIn an explosion starting at rest, the total momentum is zero before, so the pieces move off with equal and opposite momenta.",
          },
          {
            heading: "Force and change in momentum",
            body: "A resultant force changes momentum:\n\n$$F = \\frac{mv - mu}{t} = \\frac{\\Delta p}{t}$$\n\nFor a given change in momentum, a **longer collision time** gives a **smaller force**. This is why crumple zones, air bags, seat belts and padded surfaces reduce injuries.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p = mv$ (units $\\text{kg m/s}$)" },
          { name: "Conservation of momentum", statement: "total momentum before = total momentum after" },
          { name: "Force and momentum", statement: "$F = \\frac{mv - mu}{t}$" },
        ],
        workedExample: {
          problem: "A $2.0\\text{ kg}$ trolley moving at $3.0\\text{ m/s}$ hits a stationary $1.0\\text{ kg}$ trolley and they stick together. Find their speed afterwards.",
          solution: "Momentum before $= 2.0 \\times 3.0 = 6.0\\text{ kg m/s}$. After: $(2.0 + 1.0)v = 6.0$, so $v = 2.0\\text{ m/s}$.",
        },
      },
      questions: [
        {
          id: "eph10-u1-momentum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct unit for momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{N m}$" },
              { id: "b", text: "$\\text{kg/m}$" },
              { id: "c", text: "$\\text{kg m/s}^2$" },
              { id: "d", text: "$\\text{kg m/s}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Momentum", statement: "$p = mv$, so the unit is kg $\\times$ m/s." },
            ],
            steps: [
              { reasoning: "Mass in kg multiplied by velocity in m/s gives kg m/s. N m is the unit of a moment; $\\text{kg m/s}^2$ is equivalent to a newton.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\text{kg m/s}$",
            commonErrors: ["Choosing $\\text{kg m/s}^2$, which is a force unit (N)."],
            examinerNote: "B1 for (a). Allow Ns in other contexts, but only (a) is offered here.",
          },
        },
        {
          id: "eph10-u1-momentum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car of mass $1500\\text{ kg}$ travels at $12\\text{ m/s}$. Calculate its momentum.",
          response: {
            type: "numeric",
            parts: [{ label: "Momentum", answer: 18000, unit: "kg m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Momentum", statement: "$p = mv$" },
            ],
            steps: [
              { reasoning: "Substitute into the equation.", working: "p = 1500 \\times 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "p = 18\\,000\\text{ kg m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18\\,000\\text{ kg m/s}$",
            commonErrors: ["Calculating $\\frac{1}{2}mv^2$, the kinetic energy.", "Dividing mass by velocity."],
            examinerNote: "A1 cao 18 000 with the unit. Allow $1.8 \\times 10^4$.",
          },
        },
        {
          id: "eph10-u1-momentum-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A truck of mass $3000\\text{ kg}$ moving at $4.0\\text{ m/s}$ collides with a stationary car of mass $1000\\text{ kg}$. They lock together and move off as one. Calculate their velocity immediately after the collision.",
          response: {
            type: "numeric",
            parts: [{ label: "Velocity after collision", answer: 3, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of momentum", statement: "Total momentum before a collision equals total momentum after it." },
              { kind: "formula", name: "Momentum", statement: "$p = mv$" },
            ],
            steps: [
              { reasoning: "Find the total momentum before. The car is at rest, so it has no momentum.", working: "3000 \\times 4.0 = 12\\,000\\text{ kg m/s}", marks: 1, markCode: "M" },
              { reasoning: "After the collision the combined mass moves together.", working: "12\\,000 = (3000 + 1000)\\,v", marks: 1, markCode: "M" },
              { reasoning: "Solve for $v$ with the unit.", working: "v = \\frac{12\\,000}{4000} = 3.0\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.0\\text{ m/s}$",
            commonErrors: ["Dividing by the truck's mass only (giving $4.0\\text{ m/s}$).", "Adding the two masses but forgetting to include the car's mass in the total after the collision."],
            examinerNote: "A1 cao 3.0. Allow ecf from a wrong momentum before.",
          },
        },
        {
          id: "eph10-u1-momentum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In a laboratory, trolley A of mass $0.50\\text{ kg}$ moves at $4.0\\text{ m/s}$ towards a stationary trolley B of mass $1.5\\text{ kg}$. When they collide, they stick together. Separately, a $0.40\\text{ kg}$ ball moving at $10\\text{ m/s}$ is caught by a goalkeeper and brought to rest in $0.020\\text{ s}$.",
          parts: [
            { label: "a", prompt: "State the principle of conservation of momentum.", marks: 1 },
            { label: "b", prompt: "Calculate the total momentum of the trolleys before the collision.", marks: 2 },
            { label: "c", prompt: "Calculate the velocity of the trolleys after the collision.", marks: 2 },
            { label: "d", prompt: "Calculate the average force exerted by the goalkeeper's gloves on the ball.", marks: 2 },
            { label: "e", prompt: "Explain why a goalkeeper wearing soft gloves who moves the hands backwards while catching feels a smaller force.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of momentum", statement: "In a closed system, total momentum before a collision equals total momentum after." },
              { kind: "formula", name: "Momentum", statement: "$p = mv$" },
              { kind: "formula", name: "Force and momentum", statement: "$F = \\frac{mv - mu}{t}$" },
            ],
            steps: [
              { part: "a", reasoning: "Total momentum before a collision equals total momentum after, provided no external force acts on the objects.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Only trolley A is moving.", working: "0.50 \\times 4.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "2.0\\text{ kg m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Momentum is conserved, and the combined mass is $0.50 + 1.5 = 2.0\\text{ kg}$.", working: "v = \\frac{2.0}{2.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "1.0\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Change in momentum is $0.40 \\times 10 = 4.0\\text{ kg m/s}$; divide by the time.", working: "F = \\frac{0.40 \\times 10 - 0}{0.020}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "200\\text{ N}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The change in momentum of the ball is the same, but the ball takes longer to stop.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Force = change in momentum / time, so a longer time gives a smaller force.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) total momentum before = total momentum after (b) $2.0\\text{ kg m/s}$ (c) $1.0\\text{ m/s}$ (d) $200\\text{ N}$ (e) longer stopping time, same change in momentum, so smaller force",
            commonErrors: ["Dividing by $0.50\\text{ kg}$ instead of $2.0\\text{ kg}$ in (c).", "Saying in (e) that the momentum change is smaller."],
            examinerNote: "In (c) allow ecf from (b). In (a) reject 'momentum is conserved' without 'before and after'.",
          },
        },
      ],
    },
    {
      id: "eph10-u1-moments-hooke",
      title: "Moments and Hooke's law",
      skill: "Calculate moments, apply the principle of moments, and use Hooke's law $F = kx$.",
      lesson: {
        sections: [
          {
            heading: "Moments",
            body: "A **moment** is the turning effect of a force about a pivot:\n\n$$\\text{moment} = \\text{force} \\times \\text{perpendicular distance from the pivot}$$\n\nThe unit is the newton metre ($\\text{N m}$). Distances must be in metres. A longer distance gives a bigger moment for the same force, which is why a long spanner turns a nut more easily.",
          },
          {
            heading: "Principle of moments",
            body: "When an object is in equilibrium (balanced), the **total clockwise moment equals the total anticlockwise moment** about any pivot.\n\nThe weight of a uniform object acts at its centre. If the pivot is at the centre, the object's own weight has no turning effect about the pivot.",
          },
          {
            heading: "Hooke's law",
            body: "For a spring, the extension is **directly proportional** to the force applied, up to the **limit of proportionality**:\n\n$$F = kx$$\n\nwhere $k$ is the spring constant in $\\text{N/m}$ and $x$ is the **extension** in metres (new length minus original length). A force-extension graph is a straight line through the origin up to the limit, and then curves. Beyond the limit, the spring may not return to its original length.",
          },
        ],
        keyFormulas: [
          { name: "Moment", statement: "$M = Fd$ (units $\\text{N m}$)" },
          { name: "Principle of moments", statement: "clockwise moment = anticlockwise moment (in equilibrium)" },
          { name: "Hooke's law", statement: "$F = kx$ (extension $x$ in metres, $k$ in $\\text{N/m}$)" },
        ],
        workedExample: {
          problem: "A spring of constant $80\\text{ N/m}$ is stretched by $0.15\\text{ m}$. Calculate the force.",
          solution: "$F = kx = 80 \\times 0.15 = 12\\text{ N}$.",
        },
      },
      questions: [
        {
          id: "eph10-u1-moments-hooke-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct unit for the moment of a force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{kg m}$" },
              { id: "b", text: "$\\text{N/m}$" },
              { id: "c", text: "$\\text{N m}$" },
              { id: "d", text: "$\\text{N}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$\\text{moment} = \\text{force} \\times \\text{distance}$, so the unit is N $\\times$ m." },
            ],
            steps: [
              { reasoning: "Force in newtons multiplied by distance in metres gives newton metres. N/m is the unit of the spring constant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\text{N m}$",
            commonErrors: ["Choosing $\\text{N/m}$, the spring constant unit."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph10-u1-moments-hooke-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spring has an original length of $12\\text{ cm}$. A force of $6.0\\text{ N}$ stretches it to a length of $15\\text{ cm}$. Assume the limit of proportionality is not exceeded. Calculate the spring constant.",
          response: {
            type: "numeric",
            parts: [{ label: "Spring constant", answer: 200, unit: "N/m" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hooke's law", statement: "$F = kx$, where $x$ is the extension in metres." },
            ],
            steps: [
              { reasoning: "Find the extension and convert it to metres.", working: "x = 15 - 12 = 3.0\\text{ cm} = 0.030\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange $F = kx$ and substitute.", working: "k = \\frac{F}{x} = \\frac{6.0}{0.030}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "k = 200\\text{ N/m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200\\text{ N/m}$",
            commonErrors: ["Using the total length of $15\\text{ cm}$ rather than the extension (giving $40\\text{ N/m}$ if converted).", "Not converting centimetres to metres, giving $2\\text{ N/cm}$ with a wrong unit."],
            examinerNote: "A1 cao 200. Allow $2.0\\text{ N/cm}$ with correct unit. Allow ecf for a wrong extension.",
          },
        },
        {
          id: "eph10-u1-moments-hooke-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A child weighing $300\\text{ N}$ sits $1.2\\text{ m}$ from the pivot of a uniform seesaw, which is pivoted at its centre. A second child weighing $400\\text{ N}$ sits on the other side so that the seesaw balances. Calculate the distance of the second child from the pivot.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance from pivot", answer: 0.9, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Principle of moments", statement: "In equilibrium, total clockwise moment = total anticlockwise moment." },
              { kind: "formula", name: "Moment", statement: "$M = Fd$" },
            ],
            steps: [
              { reasoning: "Calculate the moment of the first child.", working: "300 \\times 1.2 = 360\\text{ N m}", marks: 1, markCode: "M" },
              { reasoning: "Equate this to the moment of the second child.", working: "400 \\times d = 360", marks: 1, markCode: "M" },
              { reasoning: "Solve for $d$ with the unit.", working: "d = 0.90\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.90\\text{ m}$",
            commonErrors: ["Using $d = 1.2 \\times \\frac{400}{300} = 1.6\\text{ m}$ (inverting the ratio).", "Including the seesaw's weight, which acts at the pivot and has no moment."],
            examinerNote: "A1 cao 0.9. The heavier child sits closer to the pivot.",
          },
        },
        {
          id: "eph10-u1-moments-hooke-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates a spring. The original length is $10.0\\text{ cm}$. She adds weights and measures the length each time.\n\n| Force (N) | 0 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 | 6.0 |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| Length (cm) | 10.0 | 12.0 | 14.0 | 16.0 | 18.0 | 20.0 | 24.0 |",
          parts: [
            { label: "a", prompt: "Determine the extension of the spring when the force is $3.0\\text{ N}$.", marks: 1 },
            { label: "b", prompt: "Calculate the spring constant, in $\\text{N/m}$, using the results for $3.0\\text{ N}$.", marks: 3 },
            { label: "c", prompt: "Between which two forces does the spring pass its limit of proportionality? Justify your answer.", marks: 2 },
            { label: "d", prompt: "Name the independent variable and one control variable in this investigation.", marks: 2 },
            { label: "e", prompt: "Suggest one way to make the length readings more accurate.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Hooke's law", statement: "$F = kx$, with extension proportional to force up to the limit of proportionality." },
              { kind: "definition", name: "Extension", statement: "Extension = new length $-$ original length." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the original length from the length at $3.0\\text{ N}$.", working: "16.0 - 10.0 = 6.0\\text{ cm}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Convert the extension to metres.", working: "6.0\\text{ cm} = 0.060\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrange $F = kx$ and substitute.", working: "k = \\frac{3.0}{0.060}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "50\\text{ N/m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Between $5.0\\text{ N}$ and $6.0\\text{ N}$.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Up to $5.0\\text{ N}$ the extension rises by $2.0\\text{ cm}$ per newton; from $5.0\\text{ N}$ to $6.0\\text{ N}$ it rises by $4.0\\text{ cm}$, so it is no longer proportional.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The independent variable is the force (the weight added).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Control: the same spring (or the same ruler, or the same starting length).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Read the ruler at eye level, or use a set square or pointer to avoid parallax error. Allow repeating and averaging.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $6.0\\text{ cm}$ (b) $50\\text{ N/m}$ (c) between $5.0\\text{ N}$ and $6.0\\text{ N}$ (d) force; same spring (e) read at eye level",
            commonErrors: ["Using the length of $16.0\\text{ cm}$ rather than the extension of $6.0\\text{ cm}$.", "Forgetting to convert cm to m, giving $0.5$.", "Saying the limit is at $6.0\\text{ N}$ without comparing extensions."],
            examinerNote: "In (b) allow ecf from (a). In (d) the dependent variable (length or extension) is not accepted for the first mark.",
          },
        },
      ],
    },
  ],
};
