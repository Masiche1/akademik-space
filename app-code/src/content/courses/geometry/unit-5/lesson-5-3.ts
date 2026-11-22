import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "geo-u5-5-3",
  code: "5-3",
  title: "Modeling with Geometry",
  goal: "I CAN use geometry to model density, solve design constraints, analyze cross-sections, and predict how scaling affects volume.",
  standards: ["HSG-MG.A.2", "HSG-MG.A.3", "HSG-GMD.B.4"],
  vocabulary: [
    { term: "Density", definition: "A ratio comparing an amount of material or population to the area or volume it occupies." },
    { term: "Population density", definition: "The number of people per unit of land area, commonly people per square mile or square kilometer." },
    { term: "Design constraint", definition: "A required limit or condition a design must satisfy, such as capacity, dimensions, or material use." },
    { term: "Cross-section", definition: "A two-dimensional figure formed by intersecting a three-dimensional solid with a plane." },
    { term: "Solid of revolution", definition: "A three-dimensional solid formed by rotating a two-dimensional region around a line in its plane." },
    { term: "Scale factor", definition: "The ratio of a new linear measurement to its corresponding original measurement in similar figures or solids." },
  ],
  concepts: [
    {
      id: "geo-u5-density-design",
      title: "Density and design constraints",
      skill: "Use area and volume models to calculate density, determine capacity, and test whether designs meet practical constraints.",
      lesson: {
        sections: [
          {
            heading: "Choose the matching density model",
            body: "Density is an amount divided by the space it occupies. Population density is people per unit area; mass density is mass per unit volume. Keep numerator and denominator units visible so that a result such as $48$ people per square mile is not confused with people per square kilometer. If a model gives an average density, it may produce a non-whole population estimate; interpret it as an average rather than an exact count of individuals.",
          },
          {
            heading: "Turn design limits into inequalities",
            body: "Capacity and design conditions can be written as inequalities. For example, a tank with required capacity at least $V_0$ must satisfy $V\\ge V_0$. A container's mass limit may require the material density times its volume to be at most the allowed mass. Compute the geometric quantity first, convert units consistently, and then compare it with every stated constraint. A design is acceptable only if it meets all constraints, not just one.",
          },
        ],
        keyFormulas: [
          { name: "Population density", statement: "$D=\\dfrac{\\text{population}}{\\text{land area}}$" },
          { name: "Mass density", statement: "$\\rho=\\dfrac{\\text{mass}}{\\text{volume}}$" },
          { name: "Cylinder capacity", statement: "$V=\\pi r^2h$" },
        ],
        workedExample: {
          problem: "A cylindrical water tank has radius 2 m and height 5 m. Water has mass density $1000$ kg/m$^3$. Find the tank's capacity and the mass of water when full, in terms of $\\pi$ and approximately.",
          solution: "Capacity is $V=\\pi(2)^2(5)=20\\pi\\text{ m}^3\\approx62.8\\text{ m}^3$. Mass equals density times volume: $m=1000(20\\pi)=20000\\pi\\text{ kg}\\approx62,832\\text{ kg}$. The decimal estimates are rounded to the nearest tenth for volume and nearest whole kilogram for mass.",
        },
      },
      questions: [
        {
          id: "geo-u5-density-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A town has $18{,}000$ residents and an area of $60$ square miles. What is its population density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1{,}080{,}000$ people per square mile" },
              { id: "b", text: "$300$ people per square mile" },
              { id: "c", text: "$18{,}060$ people per square mile" },
              { id: "d", text: "$3{,}000$ people per square mile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Population density", statement: "Population density equals population divided by land area." },
              { kind: "property", name: "Units", statement: "Dividing people by square miles gives units of people per square mile." },
            ],
            steps: [
              { reasoning: "Divide the population by the area to obtain people per square mile.", working: "D=\\frac{18{,}000}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the quotient and preserve the density units.", working: "D=300\\text{ people per square mile}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $300$ people per square mile.",
            commonErrors: ["Multiplying population by area instead of dividing.", "Reporting the total population instead of a per-square-mile rate."],
          },
        },
        {
          id: "geo-u5-density-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A metal block has a volume of $120\\text{ cm}^3$ and a mass of $960$ g. Find its mass density.",
          response: { type: "numeric", parts: [{ label: "Mass density", answer: 8, unit: "g/cm^3" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass density", statement: "$\\rho=\\dfrac{m}{V}$, mass divided by volume." },
              { kind: "property", name: "Density units", statement: "Mass in grams divided by volume in cubic centimeters gives grams per cubic centimeter." },
            ],
            steps: [
              { reasoning: "Use mass divided by volume to obtain mass per unit volume.", working: "\\rho=\\frac{960\\text{ g}}{120\\text{ cm}^3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the quotient.", working: "\\rho=8\\text{ g/cm}^3", marks: 1, markCode: "A" },
              { reasoning: "State the result as mass per cubic centimeter, not as total mass.", working: "8\\text{ grams per cubic centimeter}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8\\text{ g/cm}^3$.",
            commonErrors: ["Dividing volume by mass, which gives the reciprocal units.", "Forgetting that volume uses cubic units."],
          },
        },
        {
          id: "geo-u5-density-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular storage container measures $2.5$ m by $1.6$ m by $1.2$ m. A design requires capacity of at least $4.8\\text{ m}^3$. Does this container meet the requirement? Find its capacity and state whether it passes.",
          response: { type: "numeric", parts: [{ label: "Capacity", answer: 4.8, unit: "m^3" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangular prism volume", statement: "$V=lwh$." },
              { kind: "principle", name: "Design constraint", statement: "A required minimum capacity is met when the calculated volume is greater than or equal to that minimum." },
            ],
            steps: [
              { reasoning: "Multiply the three perpendicular dimensions to find the container's capacity.", working: "V=(2.5)(1.6)(1.2)", marks: 2, markCode: "M" },
              { reasoning: "The first two dimensions multiply to 4, and multiplying by 1.2 gives the capacity.", working: "V=4.8\\text{ m}^3", marks: 1, markCode: "A" },
              { reasoning: "Compare the capacity with the minimum; equality satisfies an 'at least' constraint.", working: "4.8\\ge4.8\\implies\\text{passes}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Capacity $=4.8\\text{ m}^3$; **yes**, it meets the minimum exactly.",
            commonErrors: ["Treating 'at least' as requiring more than, rather than allowing equality.", "Adding dimensions instead of multiplying to find volume."],
          },
        },
        {
          id: "geo-u5-density-design-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A park is a rectangular region measuring $3$ miles by $2$ miles and has a population of $7{,}200$ residents. A proposed cylindrical water tank has radius $2$ m and height $5$ m. Water mass density is $1000$ kg/m$^3$. The tank design must hold at least $60\\text{ m}^3$ and the full water mass must not exceed $65{,}000$ kg. Round decimal answers to the nearest tenth.",
          parts: [
            { label: "a", prompt: "Find the park's population density in residents per square mile.", marks: 2 },
            { label: "b", prompt: "Find the tank's exact capacity in terms of $\\pi$ and its decimal capacity.", marks: 2 },
            { label: "c", prompt: "Find the exact full water mass in terms of $\\pi$ and its decimal mass.", marks: 2 },
            { label: "d", prompt: "Determine whether the tank satisfies both design constraints. Support each decision numerically.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Population density", statement: "Population density is population divided by land area." },
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
              { kind: "formula", name: "Mass from density", statement: "$m=\\rho V$." },
              { kind: "principle", name: "Constraint check", statement: "A design meets a minimum capacity if $V\\ge V_{min}$ and a maximum mass if $m\\le m_{max}$." },
            ],
            steps: [
              { part: "a", reasoning: "Find land area and divide population by that area.", working: "A=3(2)=6\\text{ mi}^2,\\quad D=\\frac{7200}{6}=1200\\text{ residents/mi}^2", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Use the cylinder formula, substitute radius 2 and height 5, and round the decimal to a tenth.", working: "V=\\pi(2)^2(5)=20\\pi\\approx62.8\\text{ m}^3", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Multiply the mass density by the exact volume and round the decimal to a tenth.", working: "m=1000(20\\pi)=20000\\pi\\approx62{,}831.9\\text{ kg}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Compare the capacity to its minimum and the mass to its maximum; both inequalities are satisfied.", working: "62.8\\ge60\\quad\\text{and}\\quad62{,}831.9\\le65{,}000", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $1{,}200$ residents/mi$^2$. (b) $20\\pi\\approx62.8\\text{ m}^3$. (c) $20{,}000\\pi\\approx62{,}831.9\\text{ kg}$. (d) The tank meets both constraints.",
            commonErrors: ["Using population divided by only one park dimension instead of the area.", "Comparing volume with the mass limit or mass with the capacity requirement.", "Rounding too early and making the decision from an inaccurate value."],
          },
        },
      ],
    },
    {
      id: "geo-u5-cross-sections-scaling",
      title: "Cross-sections, rotation, and scale",
      skill: "Identify cross-sections and solids of revolution, and apply linear and cubic scale effects to volume.",
      lesson: {
        sections: [
          {
            heading: "Cross-sections and rotations",
            body: "A plane slicing a right circular cylinder parallel to its circular bases produces a circle; a plane parallel to its axis produces a rectangle. A plane slicing a sphere through its center produces a great circle, and an off-center plane produces a smaller circle. Rotating a rectangle about one of its sides creates a cylinder. Rotating a right triangle about one leg creates a cone; the leg on the axis is the cone's height, and the other leg is its radius.",
          },
          {
            heading: "Scaling a solid",
            body: "For similar solids, if each linear dimension is multiplied by scale factor $k$, areas multiply by $k^2$ and volumes by $k^3$. This follows because volume uses three linear dimensions. For example, doubling every length multiplies volume by $2^3=8$, not by 2 or 4. When comparing two similar objects, identify which is original and which is scaled before applying the ratio.",
          },
        ],
        keyFormulas: [
          { name: "Scale factors", statement: "$\\text{length factor}=k,\\quad\\text{area factor}=k^2,\\quad\\text{volume factor}=k^3$" },
          { name: "Cone from a rotated right triangle", statement: "Rotating about one leg gives that leg as height and the other leg as radius." },
        ],
        workedExample: {
          problem: "A sphere of radius 3 cm is enlarged by a linear scale factor of 2. Find the new radius and the factor by which its volume changes.",
          solution: "The new radius is $2(3)=6$ cm. Volume scales by the cube of the linear factor, so the volume factor is $2^3=8$. Indeed the original volume is $\\frac43\\pi(3)^3=36\\pi$, while the new volume is $\\frac43\\pi(6)^3=288\\pi=8(36\\pi)\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "geo-u5-cross-sections-scaling-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A right circular cylinder is sliced by a plane parallel to its circular bases. What shape is the cross-section?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A circle congruent to the base" },
              { id: "b", text: "A triangle" },
              { id: "c", text: "An ellipse" },
              { id: "d", text: "A rectangle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cross-section", statement: "A cross-section is the planar figure formed by slicing a solid with a plane." },
              { kind: "property", name: "Cylinder cross-sections", statement: "A plane parallel to the circular bases of a right circular cylinder produces a congruent circle." },
            ],
            steps: [
              { reasoning: "The slicing plane has the same orientation as the cylinder's circular bases.", marks: 1, markCode: "B" },
              { reasoning: "At every height, the cylinder's parallel cross-section is a circle congruent to the base.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A circle congruent to the base.",
            commonErrors: ["Confusing a slice parallel to the axis, which is rectangular, with one parallel to the bases."],
          },
        },
        {
          id: "geo-u5-cross-sections-scaling-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solid is enlarged by a linear scale factor of $3$. By what factor does its volume change?",
          response: { type: "numeric", parts: [{ label: "Volume scale factor", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Volume scale factor", statement: "For similar solids with linear scale factor $k$, volume changes by factor $k^3$." },
              { kind: "definition", name: "Linear scale factor", statement: "A linear scale factor multiplies each length by the same ratio." },
            ],
            steps: [
              { reasoning: "Volume depends on three dimensions, so cube the linear scale factor.", working: "3^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the cube.", working: "3^3=27", marks: 1, markCode: "A" },
              { reasoning: "Interpret the factor as the enlarged volume being 27 times the original volume.", working: "V_{new}=27V_{original}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The volume is multiplied by $27$.",
            commonErrors: ["Multiplying volume by 3 or by $3^2$ rather than cubing the linear factor."],
          },
        },
        {
          id: "geo-u5-cross-sections-scaling-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A right triangle has legs $5$ cm and $12$ cm. It is rotated about the leg of length $12$ cm. Find the radius, height, and volume of the resulting solid in terms of $\\pi$.",
          response: { type: "numeric", parts: [{ label: "Radius", answer: 5, unit: "cm" }, { label: "Height", answer: 12, unit: "cm" }, { label: "Volume coefficient in $V=k\\pi$", answer: 100, unit: "cm^3" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solid of revolution", statement: "A solid of revolution forms when a plane region is rotated around an axis in its plane." },
              { kind: "property", name: "Right triangle rotation", statement: "Rotating a right triangle around a leg creates a cone whose height is the axis leg and whose radius is the other leg." },
              { kind: "formula", name: "Cone volume", statement: "$V=\\dfrac13\\pi r^2h$." },
            ],
            steps: [
              { reasoning: "The axis of rotation is the leg of length 12, so it becomes the cone's height; the other leg sweeps out the radius.", working: "h=12\\text{ cm},\\quad r=5\\text{ cm}", marks: 2, markCode: "M" },
              { reasoning: "Substitute those dimensions into the cone volume formula.", working: "V=\\frac13\\pi(5)^2(12)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the coefficient of $\\pi$ and use cubic units.", working: "V=100\\pi\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Radius $=5$ cm, height $=12$ cm, and volume $=100\\pi\\text{ cm}^3$.",
            commonErrors: ["Swapping the radius and height based on the axis of rotation.", "Omitting the factor $\\frac13$ in the cone volume formula."],
          },
        },
        {
          id: "geo-u5-cross-sections-scaling-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A scale model is similar to a cylindrical silo. The model has radius $3$ cm and height $8$ cm. The full-size silo has radius $4.5$ m and height $12$ m. Assume the model and silo are geometrically similar. Give exact volumes in terms of $\\pi$ and round decimal volumes to the nearest tenth.",
          parts: [
            { label: "a", prompt: "Find the linear scale factor from the model to the full-size silo, comparing corresponding radii.", marks: 2 },
            { label: "b", prompt: "Find the scale factor by which volume changes from model to silo.", marks: 2 },
            { label: "c", prompt: "Find the model's exact and decimal volume in cubic centimeters.", marks: 2 },
            { label: "d", prompt: "Find the silo's exact and decimal volume in cubic meters, and verify it is consistent with the volume scale factor.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Similarity", statement: "Corresponding lengths in similar solids share one linear scale factor." },
              { kind: "property", name: "Volume scale factor", statement: "Similar solids have volume ratio equal to the cube of their linear scale factor." },
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
            ],
            steps: [
              { part: "a", reasoning: "Convert the full-size radius to centimeters to compare like units, then divide by the model radius.", working: "4.5\\text{ m}=450\\text{ cm},\\quad k=\\frac{450}{3}=150", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Cube the linear scale factor because volume scales in three dimensions.", working: "k_V=150^3=3{,}375{,}000", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Use the cylinder volume formula for the model, then evaluate the decimal to the nearest tenth.", working: "V_m=\\pi(3)^2(8)=72\\pi\\approx226.2\\text{ cm}^3", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Calculate the full-size cylinder directly and verify that scaling the model volume by $150^3$, then converting cubic centimeters to cubic meters, gives the same result.", working: "72\\pi(150^3)=243{,}000{,}000\\pi\\text{ cm}^3=243\\pi\\text{ m}^3;\\quad V_s=\\pi(4.5)^2(12)=243\\pi\\approx763.4\\text{ m}^3", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $k=150$. (b) Volume factor $=3{,}375{,}000$. (c) Model $V=72\\pi\\text{ cm}^3\\approx226.2\\text{ cm}^3$. (d) Silo $V=243\\pi\\text{ m}^3\\approx763.4\\text{ m}^3$; this matches scaling the model volume by $150^3$ after converting cubic centimeters to cubic meters.",
            commonErrors: ["Comparing meters and centimeters without converting to consistent units.", "Applying the linear scale factor directly to volume.", "Forgetting that a cubic centimeter-to-cubic-meter conversion divides by $100^3$."],
            examinerNote: "In part (d), $72\\pi\\text{ cm}^3$ scaled by $150^3$ is $243{,}000{,}000\\pi\\text{ cm}^3$, which equals $243\\pi\\text{ m}^3$ after dividing by $1{,}000{,}000$.",
          },
        },
      ],
    },
  ],
};
