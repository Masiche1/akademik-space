import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "alg1-u1-lesson-1-2",
  code: "1-2",
  title: "Literal Equations and Formulas",
  goal: "I CAN rearrange literal equations to isolate a specified variable and interpret formulas with appropriate units.",
  standards: ["HSA-CED.A.4"],
  vocabulary: [
    { term: "Literal equation", definition: "An equation involving two or more variables, often expressing a relationship or formula." },
    { term: "Isolate", definition: "Rewrite an equation so the specified variable appears alone on one side." },
    { term: "Coefficient", definition: "A numerical factor multiplying a variable, such as 3 in $3x$." },
    { term: "Inverse operation", definition: "An operation that reverses another operation, such as addition and subtraction or multiplication and division." },
    { term: "Dimensional analysis", definition: "Using units and their relationships to interpret or check a calculation." },
    { term: "Substitution", definition: "Replacing a variable with a known value in an expression or equation." },
  ],
  concepts: [
    {
      id: "alg1-u1-1-2-rearranging",
      title: "Rearrange formulas to isolate a variable",
      skill: "Use inverse operations and the properties of equality to solve a formula for a selected variable.",
      lesson: {
        sections: [
          {
            heading: "Treat other variables as known quantities",
            body: "To solve a literal equation for a selected variable, use the same balance principles as for a numerical equation. Other variables are treated as constants during the rearrangement. For $A=lw$, solving for $w$ means divide both sides by $l$, assuming $l\\ne0$: $w=A/l$.",
          },
          {
            heading: "Undo operations in reverse order",
            body: "If the target variable is multiplied and then added, undo addition first and multiplication second. For $y=mx+b$, subtract $b$ from both sides, then divide by $m$ (assuming $m\\ne0$): $x=(y-b)/m$. Keep parentheses around grouped expressions to avoid changing the order of operations.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle area solved for width", statement: "$A=lw \\implies w=\\dfrac{A}{l}$, for $l\\ne0$" },
          { name: "Linear relation solved for input", statement: "$y=mx+b \\implies x=\\dfrac{y-b}{m}$, for $m\\ne0$" },
        ],
        workedExample: {
          problem: "Solve $P=2l+2w$ for $w$.",
          solution: "Subtract $2l$ from both sides: $P-2l=2w$. Divide both sides by 2: $w=\\frac{P-2l}{2}$, equivalently $w=\\frac{P}{2}-l$.",
        },
      },
      questions: [
        {
          id: "alg1-u1-1-2-rearranging-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $A=\\frac{1}{2}bh$ for $h$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$h=\\frac{2A}{b}$" },
            { id: "b", text: "$h=\\frac{b}{2A}$" },
            { id: "c", text: "$h=\\frac{A}{2b}$" },
            { id: "d", text: "$h=2Ab$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [
              { kind: "property", name: "Properties of equality", statement: "Multiplying both sides by the same nonzero quantity preserves equality." },
              { kind: "formula", name: "Triangle area", statement: "$A=\\dfrac{1}{2}bh$." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 2 to remove the factor of one-half.", working: "2A=bh", marks: 1, markCode: "M" },
              { reasoning: "Divide by $b$ to isolate $h$ (with $b\\ne0$).", working: "h=\\dfrac{2A}{b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $h=\\dfrac{2A}{b}$",
            commonErrors: ["Dividing by 2 instead of undoing multiplication by $\\frac12$.", "Failing to divide the whole expression by $b$."],
          },
        },
        {
          id: "alg1-u1-1-2-rearranging-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The formula $y=3x-8$ relates $x$ and $y$. Solve for $x$ and then find $x$ when $y=13$. Enter the numerical value of $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Properties of equality", statement: "Adding or subtracting the same expression on both sides preserves equality; dividing by a nonzero coefficient isolates the variable." },
            ],
            steps: [
              { reasoning: "Add 8 to both sides to undo the subtraction.", working: "y+8=3x", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3 to isolate $x$.", working: "x=\\dfrac{y+8}{3}", marks: 1, markCode: "A" },
              { reasoning: "Substitute $y=13$ and evaluate.", working: "x=\\dfrac{13+8}{3}=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\dfrac{y+8}{3}$; when $y=13$, $x=7$.",
            commonErrors: ["Subtracting 8 from $y$ rather than adding 8 to undo $-8$."],
          },
        },
        {
          id: "alg1-u1-1-2-rearranging-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The Celsius-to-Fahrenheit formula is $C=\\frac{5}{9}(F-32)$. Rearrange the formula to solve for $F$, then use it to find the Fahrenheit temperature when $C=20$. Explain the inverse operations used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Celsius-Fahrenheit conversion", statement: "$C=\\dfrac{5}{9}(F-32)$." },
              { kind: "property", name: "Properties of equality", statement: "Multiplying or dividing both sides by a nonzero number and adding the same quantity to both sides preserve equality." },
            ],
            steps: [
              { reasoning: "Multiply both sides by $\\frac{9}{5}$ to undo multiplication by $\\frac{5}{9}$.", working: "\\dfrac{9}{5}C=F-32", marks: 1, markCode: "M" },
              { reasoning: "Add 32 to both sides to isolate $F$.", working: "F=\\dfrac{9}{5}C+32", marks: 1, markCode: "A" },
              { reasoning: "Substitute $C=20$.", working: "F=\\dfrac{9}{5}(20)+32", marks: 1, markCode: "M" },
              { reasoning: "Calculate and report the temperature in degrees Fahrenheit.", working: "F=36+32=68", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F=\\dfrac{9}{5}C+32$; at $20^\\circ\\text{C}$, $F=68^\\circ\\text{F}$.",
            commonErrors: ["Adding 32 before undoing the factor $\\frac{5}{9}$.", "Applying the conversion to 20 without preserving the parentheses $F-32$."],
            examinerNote: "Accept a correctly justified equivalent form such as $F=1.8C+32$.",
          },
        },
        {
          id: "alg1-u1-1-2-rearranging-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A credit union pays simple interest. The final amount $A$ (in dollars) after $t$ years on a deposit of $P$ dollars at annual interest rate $r$ (written as a decimal) is given by $A=P(1+rt)$.",
          parts: [
            { label: "a", prompt: "Rearrange the formula to solve for $r$.", marks: 2 },
            { label: "b", prompt: "A deposit of $\\$2000$ grows to $\\$2360$ in $3$ years. Find $r$ as a decimal.", marks: 2 },
            { label: "c", prompt: "Rearrange the formula to solve for $t$, then find how many years it takes a $\\$2000$ deposit at the rate from (b) to reach $\\$2600$.", marks: 2 },
            { label: "d", prompt: "A friend computes the rate in (b) as $\\frac{360}{2000}=18\\%$. Explain the error and the correct rate per year.", marks: 2 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) Annual rate as a decimal", answer: 0.06, tolerance: 0.001 },
            { label: "(c) Time in years to reach $\\$2600$", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$A=P(1+rt)$, so the interest earned is $A-P=Prt$." },
              { kind: "property", name: "Properties of equality", statement: "Dividing both sides by the same nonzero quantity, or subtracting the same quantity from both sides, gives an equivalent equation." },
            ],
            steps: [
              { part: "a", reasoning: "Divide both sides by $P$ (with $P\\ne0$), then subtract 1.", working: "\\frac{A}{P}=1+rt \\implies \\frac{A}{P}-1=rt", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by $t$ (with $t\\ne0$).", working: "r=\\frac{A-P}{Pt}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $A=2360$, $P=2000$, $t=3$.", working: "r=\\frac{2360-2000}{2000\\cdot3}=\\frac{360}{6000}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "r=0.06", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Isolate $t$ using the same steps, then substitute $A=2600$, $P=2000$, $r=0.06$.", working: "t=\\frac{A-P}{Pr}=\\frac{600}{2000(0.06)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "t=\\frac{600}{120}=5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The friend's $18\\%$ is the total interest ($\\$360$) divided by the deposit, which covers all 3 years, not one year.", working: "\\frac{360}{2000}=0.18", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Divide by the number of years to get the rate per year.", working: "\\frac{0.18}{3}=0.06=6\\%", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $r=\\frac{A-P}{Pt}$; (b) $r=0.06$; (c) $t=\\frac{A-P}{Pr}$, $5$ years; (d) $18\\%$ is the total over 3 years; the annual rate is $6\\%$.",
            commonErrors: ["Writing $r=\\frac{A}{P}-1-t$ by subtracting $t$ instead of dividing.", "Dividing only part of the numerator by $t$.", "Ignoring the time factor and reporting total growth as the yearly rate."],
          },
        },
      ],
    },
    {
      id: "alg1-u1-1-2-units",
      title: "Formulas in context and units",
      skill: "Interpret and rearrange a formula in context, tracking units to validate the result.",
      lesson: {
        sections: [
          {
            heading: "Units describe what a quantity measures",
            body: "A formula relates quantities with units. In $d=rt$, distance equals rate times time. If $r$ is measured in miles per hour and $t$ in hours, then $rt$ is measured in miles: $\\frac{\\text{miles}}{\\text{hour}}\\cdot\\text{hours}=\\text{miles}$. The units help identify which operation is reasonable and can reveal an incorrect rearrangement.",
          },
          {
            heading: "Solve first, then substitute with units",
            body: "To find an unknown time in $d=rt$, divide by the rate: $t=d/r$. The units become distance divided by distance per time, which simplifies to time. Substitute measured values only after isolating the requested variable, and state the unit in the final result. Ensure quantities use compatible units before calculating; for example, convert minutes to hours when the rate is in miles per hour.",
          },
        ],
        keyFormulas: [
          { name: "Distance, rate, and time", statement: "$d=rt$, so $t=\\dfrac{d}{r}$ and $r=\\dfrac{d}{t}$ for nonzero divisors." },
          { name: "Unit cancellation", statement: "$\\dfrac{\\text{distance}}{\\text{distance}/\\text{time}}=\\text{time}$" },
        ],
        workedExample: {
          problem: "A cyclist travels 42 miles at a constant rate of 14 miles per hour. Use $d=rt$ to find the travel time.",
          solution: "Solve for time: $t=d/r$. Substitute with units: $t=42\\text{ mi}/(14\\text{ mi/h})=3\\text{ h}$. Miles cancel, leaving hours, as expected.",
        },
      },
      questions: [
        {
          id: "alg1-u1-1-2-units-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car travels at $60$ miles per hour for $2$ hours. Using $d=rt$, which expression gives the distance and what is its unit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$60\\div2=30$ miles" },
            { id: "b", text: "$60+2=62$ miles" },
            { id: "c", text: "$60\\cdot2=120$ miles" },
            { id: "d", text: "$2\\div60=\\frac{1}{30}$ hours" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=rt$." },
              { kind: "principle", name: "Unit multiplication", statement: "$\\text{miles/hour}\\times\\text{hours}=\\text{miles}$." },
            ],
            steps: [
              { reasoning: "Multiply rate by elapsed time.", working: "d=60\\cdot2=120", marks: 1, markCode: "M" },
              { reasoning: "The hour units cancel, leaving miles.", working: "\\dfrac{\\text{mi}}{\\text{h}}\\cdot\\text{h}=\\text{mi}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** $120$ miles",
            commonErrors: ["Adding rate and time, which have different units.", "Dividing by time when the formula requires rate times time."],
          },
        },
        {
          id: "alg1-u1-1-2-units-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A runner covers $15$ kilometers at a constant rate of $5$ kilometers per hour. Use $d=rt$ to find the time in hours.",
          response: { type: "numeric", parts: [{ label: "Time in hours", answer: 3, unit: "h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=rt$; solving for time gives $t=d/r$." },
              { kind: "principle", name: "Unit cancellation", statement: "$\\text{km}/(\\text{km}/\\text{h})=\\text{h}$." },
            ],
            steps: [
              { reasoning: "Rearrange the distance formula to isolate time.", working: "t=\\dfrac{d}{r}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the distance and rate.", working: "t=\\dfrac{15\\text{ km}}{5\\text{ km/h}}", marks: 1, markCode: "M" },
              { reasoning: "Divide and retain the resulting time unit.", working: "t=3\\text{ h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ hours",
            commonErrors: ["Reporting $3$ kilometers per hour, which is the rate unit rather than time."],
          },
        },
        {
          id: "alg1-u1-1-2-units-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular garden has perimeter $P=2l+2w$. Its perimeter is $54$ feet and its length is $17$ feet. Rearrange the formula to solve for width, calculate the width, and explain how the units support your result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangle perimeter", statement: "$P=2l+2w$." },
              { kind: "property", name: "Properties of equality", statement: "Subtracting the same quantity from both sides and dividing by a nonzero number preserve equality." },
              { kind: "principle", name: "Like units", statement: "Perimeter and side lengths are measured in the same unit of length." },
            ],
            steps: [
              { reasoning: "Subtract $2l$ from both sides to isolate the term containing $w$.", working: "P-2l=2w", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2 to solve the literal equation for width.", working: "w=\\dfrac{P-2l}{2}", marks: 1, markCode: "A" },
              { reasoning: "Substitute the measurements and evaluate.", working: "w=\\dfrac{54-2(17)}{2}=\\dfrac{20}{2}=10", marks: 1, markCode: "A" },
              { reasoning: "The result is a length, so report feet; checking gives $2(17)+2(10)=54$ feet.", working: "w=10\\text{ ft}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$w=\\dfrac{P-2l}{2}$; the garden is $10$ feet wide.",
            commonErrors: ["Using $P-l$ instead of subtracting $2l$.", "Reporting square feet, even though width is a length."],
          },
        },
        {
          id: "alg1-u1-1-2-units-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A delivery drone flies at a constant speed of $12$ meters per second. A customer lives $7.2$ kilometers from the warehouse. Use $d=rt$ with $d$ in meters, $r$ in meters per second, and $t$ in seconds. ($1\\text{ km}=1000\\text{ m}$.)",
          parts: [
            { label: "a", prompt: "Rearrange $d=rt$ to solve for $t$.", marks: 2 },
            { label: "b", prompt: "Convert the distance to meters and find the one-way flight time in seconds.", marks: 3 },
            { label: "c", prompt: "Convert your answer to (b) to minutes.", marks: 2 },
            { label: "d", prompt: "The drone's battery allows $16$ minutes of flight. It must fly to the customer and back. Find the minimum constant speed, in meters per second, needed, and state whether the drone's speed of $12$ m/s is sufficient.", marks: 3 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) One-way time in seconds", answer: 600, unit: "s" },
            { label: "(c) One-way time in minutes", answer: 10, unit: "min" },
            { label: "(d) Minimum speed in meters per second", answer: 15, unit: "m/s" },
          ] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=rt$, so $t=\\frac{d}{r}$ and $r=\\frac{d}{t}$ for nonzero divisors." },
              { kind: "principle", name: "Unit conversion", statement: "Multiply by a conversion factor equal to 1, such as $\\frac{1000\\text{ m}}{1\\text{ km}}$, so that units are compatible before computing." },
            ],
            steps: [
              { part: "a", reasoning: "Divide both sides by $r$ (with $r\\ne0$).", working: "\\frac{d}{r}=t", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the rearranged formula.", working: "t=\\frac{d}{r}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert kilometers to meters so the units match the speed.", working: "7.2\\text{ km}=7.2(1000)=7200\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute into $t=d/r$.", working: "t=\\frac{7200\\text{ m}}{12\\text{ m/s}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate; meters cancel, leaving seconds.", working: "t=600\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide by 60 seconds per minute.", working: "\\frac{600}{60}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the time with its unit.", working: "10\\text{ min}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The round trip is twice the one-way distance, and $16\\text{ min}=960\\text{ s}$.", working: "d=2(7200)=14400\\text{ m},\\quad t=16(60)=960\\text{ s}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve $d=rt$ for $r$.", working: "r=\\frac{14400}{960}=15\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The required speed exceeds $12$ m/s (indeed the round trip at 12 m/s takes $20$ minutes, longer than the battery life), so the drone is not fast enough.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $t=\\frac{d}{r}$; (b) $600$ s; (c) $10$ min; (d) at least $15$ m/s is needed, so $12$ m/s is not sufficient.",
            commonErrors: ["Dividing $7.2$ by $12$ without converting kilometers to meters.", "Using the one-way distance in (d) instead of the round trip.", "Mixing minutes with seconds when finding the speed."],
            examinerNote: "In (d), accept a comparison of times (20 minutes versus 16 minutes) as the justification.",
          },
        },
      ],
    },
  ],
};
