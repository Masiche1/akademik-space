import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edm10-u3-lesson-3-3",
  code: "3-3",
  title: "Mensuration",
  goal: "I CAN calculate arc lengths, sector areas, volumes and surface areas of compound shapes and solids.",
  standards: ["4MA1 4.4", "4MA1 4.5", "4MA1 4.6"],
  vocabulary: [
    { term: "Arc", definition: "Part of the circumference of a circle." },
    { term: "Sector", definition: "The region of a circle enclosed by two radii and an arc." },
    { term: "Slant height", definition: "The distance from the apex of a cone to a point on the edge of its circular base, measured along the surface." },
    { term: "Hemisphere", definition: "Half of a sphere." },
    { term: "Pyramid", definition: "A solid with a polygon as its base and triangular faces meeting at a single point, the apex." },
    { term: "Compound shape", definition: "A shape made by joining simple shapes together." },
  ],
  concepts: [
    {
      id: "edm10-u3-arcs-sectors",
      title: "Arc length, sector area and compound shapes",
      skill: "Calculate arc lengths, sector areas and perimeters and areas of compound shapes involving circles.",
      lesson: {
        sections: [
          {
            heading: "Arcs and sectors",
            body: "A sector with angle $\\theta$ is the fraction $\\frac{\\theta}{360}$ of a whole circle. Arc length is $\\frac{\\theta}{360}\\times2\\pi r$ and sector area is $\\frac{\\theta}{360}\\times\\pi r^2$. The perimeter of a sector includes the two straight radii as well as the arc.",
          },
          {
            heading: "Compound shapes",
            body: "Split a compound shape into rectangles, triangles and parts of circles. Find each area and add or subtract. For perimeters, include only the outer boundary and take care not to count joins between parts.",
          },
          {
            heading: "Accuracy",
            body: "Keep the full calculator value until the final step and round only at the end. Give lengths and areas to 3 significant figures unless told otherwise, and always include units: cm, cm$^2$.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" },
          { name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
          { name: "Circle", statement: "$C=2\\pi r$, $A=\\pi r^2$" },
        ],
        workedExample: {
          problem: "A sector has radius 9 cm and angle $80^\\circ$. Work out its arc length to 3 significant figures.",
          solution: "Arc length $=\\frac{80}{360}\\times2\\pi\\times9=\\frac{2}{9}\\times18\\pi=4\\pi=12.6$ cm.",
        },
      },
      questions: [
        {
          id: "edm10-u3-arcs-sectors-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A sector of a circle has radius 6 cm and angle $60^\\circ$. Work out the length of its arc. Give your answer to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.14$ cm" },
              { id: "b", text: "$18.8$ cm" },
              { id: "c", text: "$6.28$ cm" },
              { id: "d", text: "$37.7$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Arc length", statement: "$\\text{arc}=\\frac{\\theta}{360}\\times2\\pi r$" }],
            steps: [
              { reasoning: "The arc is one sixth of the circumference.", working: "\\frac{60}{360}\\times2\\pi\\times6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac16\\times12\\pi=2\\pi$.", working: "6.28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $6.28$ cm",
            commonErrors: ["Using the area formula and getting $18.8$.", "Using $\\pi r$ for the whole circumference, giving $3.14$."],
          },
        },
        {
          id: "edm10-u3-arcs-sectors-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A sector of a circle has radius 10 cm and angle $72^\\circ$. Work out the area of the sector. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 62.8, tolerance: 0.1, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Sector area", statement: "$\\text{area}=\\frac{\\theta}{360}\\times\\pi r^2$" }],
            steps: [
              { reasoning: "The fraction of the circle is $\\frac{72}{360}=\\frac15$.", working: "\\frac{72}{360}\\times\\pi\\times10^2", marks: 2, markCode: "M" },
              { reasoning: "Evaluate: $\\frac15\\times100\\pi=20\\pi$.", working: "62.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$62.8\\text{ cm}^2$",
            commonErrors: ["Using the diameter instead of the radius.", "Using arc length formula."],
          },
        },
        {
          id: "edm10-u3-arcs-sectors-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A sector of a circle has radius 8 cm and angle $135^\\circ$.\n\nWork out the perimeter of the sector. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 34.8, tolerance: 0.1, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Arc length", statement: "$\\text{arc}=\\frac{\\theta}{360}\\times2\\pi r$" }],
            steps: [
              { reasoning: "Find the arc length.", working: "\\frac{135}{360}\\times2\\pi\\times8", marks: 2, markCode: "M" },
              { reasoning: "Evaluate: $\\frac38\\times16\\pi=6\\pi=18.85$.", working: "18.85", marks: 1, markCode: "A" },
              { reasoning: "Add the two radii to the arc.", working: "18.85+8+8=34.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$34.8$ cm",
            commonErrors: ["Giving only the arc length, $18.8$ cm.", "Adding one radius only."],
          },
        },
        {
          id: "edm10-u3-arcs-sectors-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "A window is made from a rectangle with a semicircle on top. The rectangle is 80 cm wide and 120 cm high. The diameter of the semicircle is the top edge of the rectangle, 80 cm.\n\nGive answers to the nearest whole number.",
          parts: [
            { label: "a", prompt: "Work out the area of the semicircle in cm$^2$.", marks: 2 },
            { label: "b", prompt: "Work out the total area of the window in cm$^2$.", marks: 2 },
            { label: "c", prompt: "Work out the perimeter of the window in cm. The perimeter does not include the join between the rectangle and the semicircle.", marks: 2 },
            { label: "d", prompt: "A frame is fitted around the whole perimeter of the window. The frame costs £2.50 per metre. Work out the cost of the frame, in pounds to 2 decimal places.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Semicircle area (cm squared)", answer: 2513, tolerance: 1 },
              { label: "(b) Total area (cm squared)", answer: 12113, tolerance: 1 },
              { label: "(c) Perimeter (cm)", answer: 446, tolerance: 1 },
              { label: "(d) Cost (pounds)", answer: 11.14, tolerance: 0.02 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circle", statement: "$A=\\pi r^2$ and $C=\\pi d$." },
              { kind: "principle", name: "Compound shapes", statement: "Add the areas of the parts; for the perimeter include only the outer boundary." },
            ],
            steps: [
              { part: "a", reasoning: "The radius is 40 cm. The semicircle is half a circle.", working: "\\frac12\\times\\pi\\times40^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $800\\pi$.", working: "2513", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rectangle area is $80\\times120=9600$, then add the semicircle.", working: "9600+2513.27", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "12113", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Outer boundary: the base, two sides, and the curved edge $\\frac12\\pi\\times80=40\\pi=125.66$.", working: "80+120+120+125.66", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "445.66\\approx446", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert to metres and multiply by the cost per metre.", working: "4.4566\\times2.50", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "11.14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2513\\text{ cm}^2$ (b) $12113\\text{ cm}^2$ (c) $446$ cm (d) £11.14",
            commonErrors: ["Using 80 as the radius.", "Including the diameter in the perimeter.", "Not converting cm to metres."],
            examinerNote: "Accept ft in (d) from an incorrect perimeter. Accept 11.15 if 446 is used.",
          },
        },
      ],
    },
    {
      id: "edm10-u3-solids",
      title: "Spheres, cones and pyramids",
      skill: "Calculate volumes and surface areas of spheres, cones, hemispheres and pyramids, including composite solids.",
      lesson: {
        sections: [
          {
            heading: "Formulae",
            body: "Sphere: $V=\\frac43\\pi r^3$, surface area $4\\pi r^2$. Cone: $V=\\frac13\\pi r^2h$, curved surface area $\\pi rl$ where $l$ is the slant height. Pyramid: $V=\\frac13\\times\\text{base area}\\times\\text{perpendicular height}$. Cone and sphere formulae are given in the exam, but you must know how to use them.",
          },
          {
            heading: "Slant height",
            body: "The perpendicular height $h$, radius $r$ and slant height $l$ of a cone form a right-angled triangle, so $l^2=r^2+h^2$. Do not confuse $h$ and $l$.",
          },
          {
            heading: "Composite solids",
            body: "A hemisphere has half the volume of a sphere and a curved surface area of $2\\pi r^2$. When two solids are joined, their joined faces are no longer part of the surface. Mass $=$ density $\\times$ volume.",
          },
        ],
        keyFormulas: [
          { name: "Sphere", statement: "$V=\\frac43\\pi r^3$, $S=4\\pi r^2$" },
          { name: "Cone", statement: "$V=\\frac13\\pi r^2h$, curved $S=\\pi rl$" },
          { name: "Pyramid", statement: "$V=\\frac13\\times\\text{base area}\\times h$" },
        ],
        workedExample: {
          problem: "A square-based pyramid has base side 6 cm and perpendicular height 10 cm. Work out its volume.",
          solution: "Base area $=6^2=36$. $V=\\frac13\\times36\\times10=120\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "edm10-u3-solids-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A sphere has radius 3 cm. Work out its volume. Give your answer to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$28.3\\text{ cm}^3$" },
              { id: "b", text: "$339\\text{ cm}^3$" },
              { id: "c", text: "$37.7\\text{ cm}^3$" },
              { id: "d", text: "$113\\text{ cm}^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Volume of a sphere", statement: "$V=\\frac43\\pi r^3$" }],
            steps: [
              { reasoning: "Substitute $r=3$.", working: "\\frac43\\times\\pi\\times3^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $36\\pi$.", working: "113", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $113\\text{ cm}^3$",
            commonErrors: ["Using $4\\pi r^3$, giving $339$.", "Squaring instead of cubing, giving $37.7$."],
          },
        },
        {
          id: "edm10-u3-solids-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A cone has base radius 6 cm and perpendicular height 8 cm. Work out the volume of the cone. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 302, tolerance: 1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Volume of a cone", statement: "$V=\\frac13\\pi r^2h$" }],
            steps: [
              { reasoning: "Substitute $r=6$, $h=8$.", working: "\\frac13\\times\\pi\\times6^2\\times8", marks: 2, markCode: "M" },
              { reasoning: "Evaluate: $96\\pi=301.6$.", working: "302", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$302\\text{ cm}^3$",
            commonErrors: ["Omitting the $\\frac13$.", "Using the slant height instead of the perpendicular height."],
          },
        },
        {
          id: "edm10-u3-solids-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A solid cone has base radius 5 cm and perpendicular height 12 cm.\n\nWork out the total surface area of the cone, including its circular base. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Total surface area", answer: 283, tolerance: 1, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$l^2=r^2+h^2$" },
              { kind: "formula", name: "Cone surface area", statement: "Curved surface $=\\pi rl$; base $=\\pi r^2$." },
            ],
            steps: [
              { reasoning: "Find the slant height.", working: "l=\\sqrt{5^2+12^2}=13", marks: 1, markCode: "M" },
              { reasoning: "Curved surface area.", working: "\\pi\\times5\\times13=65\\pi", marks: 1, markCode: "M" },
              { reasoning: "Add the area of the base.", working: "65\\pi+25\\pi=90\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "282.7\\approx283", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$283\\text{ cm}^2$",
            commonErrors: ["Using $h=12$ in place of the slant height.", "Forgetting the base."],
          },
        },
        {
          id: "edm10-u3-solids-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A toy is made from a solid hemisphere and a solid cone. The flat circular face of the hemisphere is joined exactly to the base of the cone. Both have radius 6 cm. The perpendicular height of the cone is 8 cm.\n\nGive answers to 3 significant figures.",
          parts: [
            { label: "a", prompt: "Work out the volume of the hemisphere.", marks: 2 },
            { label: "b", prompt: "Work out the volume of the cone.", marks: 2 },
            { label: "c", prompt: "Work out the total surface area of the toy.", marks: 3 },
            { label: "d", prompt: "The toy is made of plastic with density $0.9\\text{ g/cm}^3$. Work out the mass of the toy in grams.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Hemisphere volume (cm cubed)", answer: 452, tolerance: 1 },
              { label: "(b) Cone volume (cm cubed)", answer: 302, tolerance: 1 },
              { label: "(c) Total surface area (cm squared)", answer: 415, tolerance: 1 },
              { label: "(d) Mass (g)", answer: 679, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volumes", statement: "Hemisphere $\\frac23\\pi r^3$; cone $\\frac13\\pi r^2h$." },
              { kind: "formula", name: "Curved areas", statement: "Hemisphere $2\\pi r^2$; cone $\\pi rl$." },
              { kind: "formula", name: "Density", statement: "$\\text{mass}=\\text{density}\\times\\text{volume}$." },
            ],
            steps: [
              { part: "a", reasoning: "Half of a sphere of radius 6.", working: "\\frac12\\times\\frac43\\times\\pi\\times6^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $144\\pi$.", working: "452", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the cone formula.", working: "\\frac13\\times\\pi\\times6^2\\times8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $96\\pi$.", working: "302", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Slant height of the cone.", working: "l=\\sqrt{6^2+8^2}=10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Curved surfaces only, since the joined faces are hidden: $\\pi\\times6\\times10+2\\pi\\times6^2$.", working: "60\\pi+72\\pi=132\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "415", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total volume is $144\\pi+96\\pi=240\\pi=753.98$; multiply by the density.", working: "753.98\\times0.9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "679", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $452\\text{ cm}^3$ (b) $302\\text{ cm}^3$ (c) $415\\text{ cm}^2$ (d) $679$ g",
            commonErrors: ["Including the joined circular face in the surface area.", "Using the perpendicular height in $\\pi rl$."],
            examinerNote: "In (d) accept ft from (a) and (b) using unrounded values or 754.",
          },
        },
      ],
    },
  ],
};
