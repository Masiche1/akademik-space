import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edm9-u3-lesson-3-2",
  code: "3-2",
  title: "Circles and Cylinders",
  goal: "I CAN calculate arc lengths, sector areas, and the volume and surface area of cylinders and composite solids.",
  standards: ["Y9 Geometry and Measures"],
  vocabulary: [
    { term: "Arc", definition: "Part of the circumference of a circle." },
    { term: "Sector", definition: "The region of a circle enclosed by two radii and an arc." },
    { term: "Circumference", definition: "The distance around a circle, $C=2\\pi r=\\pi d$." },
    { term: "Cylinder", definition: "A prism with a circular cross-section." },
    { term: "Cross-section", definition: "The shape you see when a solid is cut straight through, perpendicular to its length." },
    { term: "Curved surface area", definition: "The area of the curved face of a cylinder, equal to $2\\pi rh$." },
    { term: "Composite solid", definition: "A solid made by joining or removing simpler solids." },
  ],
  concepts: [
    {
      id: "edm9-u3-arc-sector",
      title: "Arc length and sector area",
      skill: "Find the arc length and area of a sector as a fraction of the whole circle.",
      lesson: {
        sections: [
          {
            heading: "The fraction of a circle",
            body: "A sector with angle $\\theta$ is the fraction $\\frac{\\theta}{360}$ of a full circle. A quarter circle has $\\theta=90^\\circ$, so the fraction is $\\frac{90}{360}=\\frac14$. Always write this fraction first and simplify it if you can.",
          },
          {
            heading: "Arc length and sector area",
            body: "Arc length $=\\frac{\\theta}{360}\\times2\\pi r$ and sector area $=\\frac{\\theta}{360}\\times\\pi r^2$. Use the same fraction for both, but remember that length uses the circumference and area uses $\\pi r^2$. Keep $\\pi$ in your answer until the final step to avoid rounding errors.",
          },
          {
            heading: "Perimeter of a sector",
            body: "The perimeter of a sector includes the arc **and** the two straight radii: perimeter $=\\text{arc}+2r$. Working backwards, if you know the area or arc length of a sector you can find the angle by dividing by the full-circle value and multiplying by $360$.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$\\dfrac{\\theta}{360}\\times2\\pi r$" },
          { name: "Sector area", statement: "$\\dfrac{\\theta}{360}\\times\\pi r^2$" },
        ],
        workedExample: {
          problem: "A sector has radius 9 cm and angle $40^\\circ$. Work out its arc length in terms of $\\pi$.",
          solution: "The fraction is $\\frac{40}{360}=\\frac19$. The circumference is $2\\pi\\times9=18\\pi$. Arc length $=\\frac19\\times18\\pi=2\\pi$ cm.",
        },
      },
      questions: [
        {
          id: "edm9-u3-arc-sector-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sector is a quarter of a circle of radius 4 cm (the sector angle is $90^\\circ$). What is the area of the sector, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\pi$ cm²" },
              { id: "b", text: "$8\\pi$ cm²" },
              { id: "c", text: "$2\\pi$ cm²" },
              { id: "d", text: "$16\\pi$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
            ],
            steps: [
              { reasoning: "Find the area of the full circle and take the fraction $\\frac{90}{360}=\\frac14$.", working: "\\tfrac14\\times\\pi\\times4^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\tfrac14\\times16\\pi=4\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4\\pi$ cm²",
            commonErrors: ["Giving the full circle area $16\\pi$.", "Giving the arc length $2\\pi$ instead of the area.", "Using $\\frac12$ instead of $\\frac14$."],
          },
        },
        {
          id: "edm9-u3-arc-sector-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector of a circle has radius 6 cm and angle $120^\\circ$. Work out the length of the arc. Give your answer in cm to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Arc length", answer: 12.6, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" },
            ],
            steps: [
              { reasoning: "Write the fraction of the circle and the circumference.", working: "\\frac{120}{360}\\times2\\pi\\times6", marks: 1, markCode: "M" },
              { reasoning: "Simplify using $\\frac{120}{360}=\\frac13$.", working: "\\tfrac13\\times12\\pi=4\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate and round to 1 decimal place.", working: "4\\pi=12.566\\ldots\\approx12.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12.6 cm",
            commonErrors: ["Using $\\pi r^2$ (area) instead of the circumference.", "Using the diameter as the radius."],
            examinerNote: "M1 for $\\frac{120}{360}\\times2\\pi\\times6$ oe; A1 for $4\\pi$ or 12.56 to 12.57; A1 for 12.6.",
          },
        },
        {
          id: "edm9-u3-arc-sector-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sector of a circle has radius 6 cm and area $15\\pi$ cm². Work out the angle of the sector, in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle", answer: 150, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
            ],
            steps: [
              { reasoning: "Find the area of the full circle.", working: "\\pi\\times6^2=36\\pi", marks: 1, markCode: "M" },
              { reasoning: "Write the sector as a fraction of the circle.", working: "\\frac{15\\pi}{36\\pi}=\\frac{5}{12}", marks: 1, markCode: "M" },
              { reasoning: "Multiply the fraction by 360.", working: "\\tfrac{5}{12}\\times360", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150^\\circ$",
            commonErrors: ["Using the circumference $12\\pi$ instead of the area.", "Forgetting to multiply the fraction by 360."],
            examinerNote: "Equation method $\\frac{\\theta}{360}\\times36\\pi=15\\pi$ also scores full marks.",
          },
        },
        {
          id: "edm9-u3-arc-sector-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sector of a circle has radius 10 cm and angle $72^\\circ$. Give lengths and areas to 1 decimal place where rounding is needed.",
          parts: [
            { label: "a", prompt: "Write $\\frac{72}{360}$ as a decimal.", marks: 1 },
            { label: "b", prompt: "Work out the length of the arc, in cm.", marks: 2 },
            { label: "c", prompt: "Work out the area of the sector, in cm².", marks: 2 },
            { label: "d", prompt: "Work out the perimeter of the sector, in cm.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) fraction as a decimal", answer: 0.2 },
              { label: "(b) arc length (cm)", answer: 12.6, tolerance: 0.05 },
              { label: "(c) area (cm²)", answer: 62.8, tolerance: 0.05 },
              { label: "(d) perimeter (cm)", answer: 32.6, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" },
              { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
              { kind: "definition", name: "Perimeter of a sector", statement: "Arc length plus two radii." },
            ],
            steps: [
              { part: "a", reasoning: "Simplify the fraction: $72\\div360=0.2$.", working: "\\frac{72}{360}=\\frac15=0.2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply the fraction by the circumference.", working: "0.2\\times2\\pi\\times10=4\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 1 decimal place.", working: "4\\pi=12.566\\ldots\\approx12.6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the fraction by $\\pi r^2$.", working: "0.2\\times\\pi\\times10^2=20\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 1 decimal place.", working: "20\\pi=62.83\\ldots\\approx62.8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The perimeter includes two straight radii as well as the arc.", working: "2\\times10=20", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Add the arc length (12.566...) to the radii.", working: "20+4\\pi", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and round.", working: "32.566\\ldots\\approx32.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.2. (b) 12.6 cm. (c) 62.8 cm². (d) 32.6 cm.",
            commonErrors: ["In (d), giving only the arc length 12.6.", "Mixing the arc length and area formulae."],
            examinerNote: "(d) allow ft from (b) for the final A mark.",
          },
        },
      ],
    },
    {
      id: "edm9-u3-cylinders",
      title: "Volume and surface area of cylinders",
      skill: "Calculate the volume and surface area of cylinders and composite solids.",
      lesson: {
        sections: [
          {
            heading: "Volume of a prism",
            body: "A cylinder is a prism with a circle as its cross-section. Volume of any prism $=\\text{area of cross-section}\\times\\text{length}$. For a cylinder of radius $r$ and height $h$ this gives $V=\\pi r^2h$. Check that your units are cubic, for example cm³.",
          },
          {
            heading: "Surface area",
            body: "A cylinder's curved surface opens out into a rectangle of width $2\\pi r$ (the circumference) and height $h$, so the curved surface area is $2\\pi rh$. A closed cylinder also has two circular ends, each of area $\\pi r^2$. Total surface area $=2\\pi rh+2\\pi r^2$.",
          },
          {
            heading: "Composite solids and units",
            body: "For composite solids, split the shape into simpler parts, find each volume, then add or subtract. A hollow pipe is the outer cylinder minus the inner one. To change units: $1\\text{ litre}=1000\\text{ cm}^3$.",
          },
        ],
        keyFormulas: [
          { name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
          { name: "Total surface area", statement: "$2\\pi rh+2\\pi r^2$" },
        ],
        workedExample: {
          problem: "A cylinder has radius 3 cm and height 10 cm. Work out its volume in terms of $\\pi$.",
          solution: "$V=\\pi r^2h=\\pi\\times3^2\\times10=90\\pi$ cm³.",
        },
      },
      questions: [
        {
          id: "edm9-u3-cylinders-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cylinder has radius 3 cm and height 5 cm. What is its volume, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75\\pi$ cm³" },
              { id: "b", text: "$15\\pi$ cm³" },
              { id: "c", text: "$45\\pi$ cm³" },
              { id: "d", text: "$30\\pi$ cm³" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
            ],
            steps: [
              { reasoning: "Substitute $r=3$ and $h=5$.", working: "V=\\pi\\times3^2\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V=45\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $45\\pi$ cm³",
            commonErrors: ["Not squaring the radius ($\\pi\\times3\\times5=15\\pi$).", "Using $2\\pi rh=30\\pi$ (curved surface area).", "Squaring the height instead ($75\\pi$)."],
          },
        },
        {
          id: "edm9-u3-cylinders-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cylinder has radius 5 cm and height 8 cm. Work out its volume. Give your answer in cm³ to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 628, tolerance: 0.5, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
            ],
            steps: [
              { reasoning: "Substitute the radius and height.", working: "V=\\pi\\times5^2\\times8", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "V=200\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate and round.", working: "200\\pi=628.3\\ldots\\approx628", marks: 1, markCode: "A" },
            ],
            finalAnswer: "628 cm³",
            commonErrors: ["Using $\\pi\\times10^2\\times8$ (diameter as radius).", "Using $2\\pi r h$."],
            examinerNote: "A1 for 628 (accept 628.3).",
          },
        },
        {
          id: "edm9-u3-cylinders-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A metal pipe is a hollow cylinder of length 20 cm. The outer radius is 5 cm and the inner radius is 3 cm. Work out the volume of metal in the pipe. Give your answer in cm³ to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Volume of metal", answer: 1005, tolerance: 0.5, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
              { kind: "principle", name: "Composite solid", statement: "Volume of a hollow shape = outer volume minus inner volume." },
            ],
            steps: [
              { reasoning: "Find the volume of the outer cylinder.", working: "\\pi\\times5^2\\times20=500\\pi", marks: 1, markCode: "M" },
              { reasoning: "Find the volume of the inner cylinder (the hole).", working: "\\pi\\times3^2\\times20=180\\pi", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "500\\pi-180\\pi=320\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round.", working: "320\\pi=1005.3\\ldots\\approx1005", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1005 cm³",
            commonErrors: ["Using $\\pi(5-3)^2\\times20$, subtracting the radii before squaring.", "Adding rather than subtracting the volumes."],
            examinerNote: "Accept $\\pi(25-9)\\times20$ oe.",
          },
        },
        {
          id: "edm9-u3-cylinders-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A closed tin is a cylinder with radius 7 cm and height 10 cm. Give answers to 1 decimal place unless told otherwise.",
          parts: [
            { label: "a", prompt: "Work out the volume of the tin, in cm³.", marks: 2 },
            { label: "b", prompt: "Work out the area of the curved surface of the tin, in cm².", marks: 2 },
            { label: "c", prompt: "Work out the total surface area of the tin, including both circular ends, in cm².", marks: 3 },
            { label: "d", prompt: "The tin is filled with paint to three quarters of its volume. Work out the volume of paint, in litres, to 2 decimal places. (1 litre = 1000 cm³)", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) volume (cm³)", answer: 1539.4, tolerance: 0.1 },
              { label: "(b) curved surface area (cm²)", answer: 439.8, tolerance: 0.1 },
              { label: "(c) total surface area (cm²)", answer: 747.7, tolerance: 0.1 },
              { label: "(d) paint (litres)", answer: 1.15, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
              { kind: "formula", name: "Surface area of a cylinder", statement: "Curved surface $2\\pi rh$; each circular end $\\pi r^2$." },
              { kind: "definition", name: "Litre", statement: "$1\\text{ litre}=1000\\text{ cm}^3$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into the volume formula.", working: "V=\\pi\\times7^2\\times10=490\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "490\\pi=1539.38\\ldots\\approx1539.4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The curved surface is a rectangle $2\\pi r$ by $h$.", working: "2\\pi\\times7\\times10=140\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "140\\pi=439.82\\ldots\\approx439.8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area of one circular end.", working: "\\pi\\times7^2=49\\pi", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the curved surface and the two ends.", working: "140\\pi+2\\times49\\pi=238\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "238\\pi=747.69\\ldots\\approx747.7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Take three quarters of the volume.", working: "0.75\\times1539.38\\ldots=1154.5\\ldots\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to litres by dividing by 1000.", working: "1154.5\\div1000=1.1545\\ldots", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Round to 2 decimal places.", working: "1.15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1539.4 cm³. (b) 439.8 cm². (c) 747.7 cm². (d) 1.15 litres.",
            commonErrors: ["In (c), forgetting the two circular ends or including only one.", "In (d), dividing by 100 instead of 1000."],
            examinerNote: "Accept $490\\pi$ and $\\frac34\\times490\\pi$ as method evidence.",
          },
        },
      ],
    },
  ],
};
