import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m8-u3-lesson-3-3",
  code: "3-3",
  title: "Volume",
  goal: "I CAN find the volume of cylinders, cones and spheres and of composite solids, and solve real-world problems about volume.",
  standards: ["8.G.C.9"],
  vocabulary: [
    { term: "Volume", definition: "The amount of space inside a three-dimensional solid, measured in cubic units." },
    { term: "Cylinder", definition: "A solid with two parallel congruent circular bases and a curved side. Its volume is $V = \\pi r^2 h$." },
    { term: "Cone", definition: "A solid with one circular base and a point (the apex). Its volume is one third of the cylinder with the same base and height." },
    { term: "Sphere", definition: "The set of all points in space at a fixed distance $r$ (the radius) from a center. Its volume is $V = \\frac{4}{3}\\pi r^3$." },
    { term: "Hemisphere", definition: "Half of a sphere, with volume $\\frac{2}{3}\\pi r^3$." },
    { term: "Composite solid", definition: "A solid made by joining two or more simpler solids; its volume is the sum (or difference) of the parts." },
  ],
  concepts: [
    {
      id: "m8-u3-cylinders-cones",
      title: "Volume of cylinders and cones",
      skill: "Use $V = \\pi r^2 h$ and $V = \\frac{1}{3}\\pi r^2 h$ to find volumes and missing dimensions.",
      lesson: {
        sections: [
          {
            heading: "Cylinders",
            body: "A cylinder is a stack of circles, so its volume is the area of the base times the height: $V = \\pi r^2 h$. Be careful to use the **radius**; if you are given the diameter, halve it first. Leave answers in terms of $\\pi$ for an exact value, or use an approximation such as $\\pi \\approx 3.14$ when asked.",
          },
          {
            heading: "Cones",
            body: "A cone with the same base and height as a cylinder holds exactly one third as much, so $V = \\frac{1}{3}\\pi r^2 h$. Here $h$ is the perpendicular height from the apex to the base, not the slanted side. To find a missing dimension, substitute the known values and solve the equation.",
          },
        ],
        keyFormulas: [
          { name: "Cylinder", statement: "$V = \\pi r^2 h$" },
          { name: "Cone", statement: "$V = \\dfrac{1}{3}\\pi r^2 h$" },
        ],
        workedExample: {
          problem: "A cone has radius $3$ cm and height $7$ cm. Find its volume in terms of $\\pi$.",
          solution: "$V = \\frac{1}{3}\\pi (3)^2 (7) = \\frac{1}{3}\\pi (9)(7) = \\frac{63\\pi}{3} = 21\\pi$ cubic centimeters.",
        },
      },
      questions: [
        {
          id: "m8-u3-cylinders-cones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cylinder has radius $3$ cm and height $5$ cm. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75\\pi \\text{ cm}^3$" },
              { id: "b", text: "$45\\pi \\text{ cm}^3$" },
              { id: "c", text: "$30\\pi \\text{ cm}^3$" },
              { id: "d", text: "$15\\pi \\text{ cm}^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V = \\pi r^2 h$." },
            ],
            steps: [
              { reasoning: "Substitute $r = 3$ and $h = 5$.", working: "V = \\pi (3)^2 (5) = 45\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $45\\pi \\text{ cm}^3$",
            commonErrors: ["Choosing $30\\pi$ by using $2r$ or $r \\cdot h \\cdot 2$ instead of $r^2$.", "Choosing $75\\pi$ by squaring the height instead of the radius."],
          },
        },
        {
          id: "m8-u3-cylinders-cones-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cone has radius $6$ cm and height $9$ cm. Find its volume. Give your answer as a multiple of $\\pi$; enter the number that multiplies $\\pi$ (cubic centimeters).",
          response: { type: "numeric", parts: [{ label: "Volume (number of $\\pi$ cm$^3$)", answer: 108 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$." },
            ],
            steps: [
              { reasoning: "Substitute $r = 6$ and $h = 9$.", working: "V = \\tfrac{1}{3}\\pi (6^2)(9) = \\tfrac{1}{3}\\pi (36)(9)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 108\\pi \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$108\\pi \\text{ cm}^3$ (about $339.3 \\text{ cm}^3$)",
            commonErrors: ["Forgetting the factor of $\\frac{1}{3}$, giving $324\\pi$.", "Using $r = 12$ or the slant height."],
          },
        },
        {
          id: "m8-u3-cylinders-cones-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cone has a volume of $100\\pi$ cubic centimeters and a base radius of $5$ cm. Find the height of the cone in centimeters.",
          response: { type: "numeric", parts: [{ label: "Height", answer: 12, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$." },
            ],
            steps: [
              { reasoning: "Substitute the known values into the formula.", working: "100\\pi = \\tfrac{1}{3}\\pi (5^2) h = \\tfrac{25}{3}\\pi h", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by $\\pi$ and multiply by $\\frac{3}{25}$.", working: "h = 100 \\times \\tfrac{3}{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "h = 12 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ cm",
            commonErrors: ["Omitting $\\frac{1}{3}$ and obtaining $h = 4$.", "Using $r = 10$."],
          },
        },
        {
          id: "m8-u3-cylinders-cones-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cylindrical water tank has a radius of $4$ feet and a height of $10$ feet. A cone-shaped funnel has the same radius and the same height as the tank. Leave answers in terms of $\\pi$ (enter the number multiplying $\\pi$) unless told to use $3.14$.",
          parts: [
            { label: "a", prompt: "Find the volume of the tank in cubic feet (as a multiple of $\\pi$).", marks: 2 },
            { label: "b", prompt: "The tank is filled to a depth of $6$ feet. Using $\\pi \\approx 3.14$, find the volume of water, in cubic feet, to the nearest hundredth.", marks: 2 },
            { label: "c", prompt: "Find the volume of the cone-shaped funnel, as a multiple of $\\pi$ (enter the number multiplying $\\pi$, rounded to two decimal places).", marks: 2 },
            { label: "d", prompt: "How many full funnels of water are needed to fill the empty tank? Explain your answer.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Tank volume (number of $\\pi$ ft$^3$)", answer: 160 },
              { label: "(b) Water volume with $\\pi \\approx 3.14$", answer: 301.44, tolerance: 0.01, unit: "ft³" },
              { label: "(c) Funnel volume (number of $\\pi$ ft$^3$)", answer: 53.33, tolerance: 0.01 },
              { label: "(d) Number of funnels", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V = \\pi r^2 h$." },
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$, one third of the cylinder with the same base and height." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $r = 4$, $h = 10$.", working: "V = \\pi (4^2)(10)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "V = 160\\pi \\text{ ft}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the water depth as the height of a cylinder of radius $4$.", working: "V = 3.14 \\times 16 \\times 6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "V = 301.44 \\text{ ft}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A cone with the same base and height is one third of the cylinder.", working: "V = \\tfrac{1}{3}\\pi (16)(10) = \\tfrac{160}{3}\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate as a decimal multiple of $\\pi$.", working: "V \\approx 53.33\\pi \\text{ ft}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the tank volume by the funnel volume.", working: "\\dfrac{160\\pi}{\\frac{160}{3}\\pi} = 3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The cone is exactly one third of the cylinder with the same base and height, so $3$ funnels fill the tank.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $160\\pi$ ft$^3$ (b) $301.44$ ft$^3$ (c) $\\frac{160}{3}\\pi \\approx 53.33\\pi$ ft$^3$ (d) $3$ funnels",
            commonErrors: ["Using the diameter $8$ as the radius.", "Forgetting the $\\frac{1}{3}$ for the cone and answering 1 funnel."],
            examinerNote: "In (c) accept $\\frac{160\\pi}{3}$ (oe) or about $167.55$ ft$^3$.",
          },
        },
      ],
    },
    {
      id: "m8-u3-spheres-composites",
      title: "Volume of spheres and composite solids",
      skill: "Use $V = \\frac{4}{3}\\pi r^3$ and combine volumes of simple solids to find the volume of composite solids.",
      lesson: {
        sections: [
          {
            heading: "Spheres and hemispheres",
            body: "The volume of a sphere with radius $r$ is $V = \\frac{4}{3}\\pi r^3$. The radius is cubed, so doubling the radius makes the volume eight times as large. A hemisphere is half of a sphere: $V = \\frac{2}{3}\\pi r^3$. If given a diameter, halve it before using the formula.",
          },
          {
            heading: "Composite solids",
            body: "Break a composite solid into cylinders, cones, spheres or hemispheres. Find each volume separately, then **add** the parts (or **subtract** a piece that was removed). Check that shared dimensions, such as the radius where two parts join, are used consistently.",
          },
        ],
        keyFormulas: [
          { name: "Sphere", statement: "$V = \\dfrac{4}{3}\\pi r^3$" },
          { name: "Hemisphere", statement: "$V = \\dfrac{2}{3}\\pi r^3$" },
        ],
        workedExample: {
          problem: "Find the volume of a sphere with diameter $10$ cm, in terms of $\\pi$.",
          solution: "The radius is $5$ cm. $V = \\frac{4}{3}\\pi (5)^3 = \\frac{4}{3}\\pi (125) = \\frac{500}{3}\\pi$ cubic centimeters.",
        },
      },
      questions: [
        {
          id: "m8-u3-spheres-composites-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sphere has radius $3$ inches. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\pi \\text{ in}^3$" },
              { id: "b", text: "$27\\pi \\text{ in}^3$" },
              { id: "c", text: "$36\\pi \\text{ in}^3$" },
              { id: "d", text: "$108\\pi \\text{ in}^3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a sphere", statement: "$V = \\frac{4}{3}\\pi r^3$." },
            ],
            steps: [
              { reasoning: "Cube the radius, then multiply by $\\frac{4}{3}\\pi$.", working: "V = \\tfrac{4}{3}\\pi (27) = 36\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $36\\pi \\text{ in}^3$",
            commonErrors: ["Squaring the radius instead of cubing it (choice b).", "Using $4\\pi r^3$ (choice c)."],
          },
        },
        {
          id: "m8-u3-spheres-composites-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sphere has a diameter of $12$ cm. Find its volume as a multiple of $\\pi$ (enter the number that multiplies $\\pi$, in cubic centimeters).",
          response: { type: "numeric", parts: [{ label: "Volume (number of $\\pi$ cm$^3$)", answer: 288 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a sphere", statement: "$V = \\frac{4}{3}\\pi r^3$, with $r$ half the diameter." },
            ],
            steps: [
              { reasoning: "The radius is half the diameter, so $r = 6$. Substitute.", working: "V = \\tfrac{4}{3}\\pi (6^3) = \\tfrac{4}{3}\\pi (216)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 288\\pi \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$288\\pi \\text{ cm}^3$ (about $904.8 \\text{ cm}^3$)",
            commonErrors: ["Using $r = 12$, giving $2304\\pi$.", "Squaring instead of cubing."],
          },
        },
        {
          id: "m8-u3-spheres-composites-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A silo is a cylinder of radius $3$ m and height $8$ m with a hemisphere of radius $3$ m on top. Find the total volume as a multiple of $\\pi$ (enter the number that multiplies $\\pi$, in cubic meters).",
          response: { type: "numeric", parts: [{ label: "Volume (number of $\\pi$ m$^3$)", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder and hemisphere", statement: "$V_{\\text{cyl}} = \\pi r^2 h$ and $V_{\\text{hem}} = \\frac{2}{3}\\pi r^3$." },
              { kind: "principle", name: "Composite volume", statement: "The volume of a composite solid is the sum of the volumes of its parts." },
            ],
            steps: [
              { reasoning: "Find the cylinder volume.", working: "\\pi (3^2)(8) = 72\\pi", marks: 1, markCode: "M" },
              { reasoning: "Find the hemisphere volume.", working: "\\tfrac{2}{3}\\pi (3^3) = 18\\pi", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "72\\pi + 18\\pi = 90\\pi \\text{ m}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\pi \\text{ m}^3$",
            commonErrors: ["Using a full sphere ($36\\pi$) instead of a hemisphere, giving $108\\pi$.", "Subtracting the hemisphere instead of adding."],
          },
        },
        {
          id: "m8-u3-spheres-composites-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An ice cream cone is a cone of radius $3$ cm and height $10$ cm. A scoop of ice cream in the shape of a hemisphere of radius $3$ cm sits on top of the cone. Leave volumes as multiples of $\\pi$ (enter the number that multiplies $\\pi$) unless told to use $3.14$.",
          parts: [
            { label: "a", prompt: "Find the volume of the cone, in cubic centimeters.", marks: 2 },
            { label: "b", prompt: "Find the volume of the hemisphere scoop, in cubic centimeters.", marks: 2 },
            { label: "c", prompt: "Find the total volume of the cone and scoop using $\\pi \\approx 3.14$, in cubic centimeters.", marks: 2 },
            { label: "d", prompt: "The scoop melts and all of it runs into the cone, which was empty. How much space, in cubic centimeters (as a multiple of $\\pi$), is left in the cone? Will it overflow?", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cone volume (number of $\\pi$ cm$^3$)", answer: 30 },
              { label: "(b) Hemisphere volume (number of $\\pi$ cm$^3$)", answer: 18 },
              { label: "(c) Total volume with $\\pi \\approx 3.14$", answer: 150.72, tolerance: 0.01, unit: "cm³" },
              { label: "(d) Space left (number of $\\pi$ cm$^3$)", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$." },
              { kind: "formula", name: "Volume of a hemisphere", statement: "$V = \\frac{2}{3}\\pi r^3$." },
              { kind: "principle", name: "Composite volume", statement: "Add the volumes of the parts; compare volumes to decide whether one container holds another." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $r = 3$, $h = 10$.", working: "V = \\tfrac{1}{3}\\pi (9)(10)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "V = 30\\pi \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $r = 3$ into the hemisphere formula.", working: "V = \\tfrac{2}{3}\\pi (27)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "V = 18\\pi \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the two volumes and substitute $\\pi \\approx 3.14$.", working: "(30 + 18)(3.14) = 48 \\times 3.14", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "150.72 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subtract the melted volume from the cone's capacity.", working: "30\\pi - 18\\pi = 12\\pi \\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The scoop's volume is less than the cone's capacity, so there is space left and it will not overflow.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $30\\pi$ (b) $18\\pi$ (c) $150.72$ cm$^3$ (d) $12\\pi$ cm$^3$ left; it does not overflow.",
            commonErrors: ["Using the full-sphere volume $36\\pi$ for the scoop.", "Forgetting the $\\frac{1}{3}$ in the cone."],
          },
        },
      ],
    },
  ],
};
