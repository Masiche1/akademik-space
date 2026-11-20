import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciem-u5-lesson-5-2",
  code: "5-2",
  title: "Surface Area and Volume",
  goal: "I CAN calculate the surface area and volume of cuboids, prisms, cylinders, pyramids, cones and spheres, including composite solids.",
  standards: ["0580 5.3", "0580 5.4"],
  vocabulary: [
    { term: "Volume", definition: "The amount of space occupied by a 3D solid, measured in cubic units." },
    { term: "Surface area", definition: "The total area of all faces of a solid, measured in square units." },
    { term: "Prism", definition: "A solid with a constant cross-section; volume = cross-section area $\\times$ length." },
    { term: "Cylinder", definition: "A prism with circular cross-section; like a can or pipe." },
    { term: "Frustum", definition: "The part of a cone or pyramid between two parallel planes." },
  ],
  concepts: [
    {
      id: "ciem-u5-solids-basic",
      title: "Cuboids, prisms and cylinders",
      skill: "Calculate surface area and volume of cuboids, prisms and cylinders.",
      lesson: {
        sections: [
          {
            heading: "Cuboid",
            body: "- Volume: $V=lwh$\n- Surface area: $SA=2(lw+lh+wh)$ — three pairs of identical faces.",
          },
          {
            heading: "Prisms",
            body: "Any prism (including cuboids) has **volume = cross-section area $\\times$ length**. For an L-shaped or triangular prism, find the cross-section area first, then multiply by the prism length.",
          },
          {
            heading: "Cylinder",
            body: "Treat a cylinder as a prism with circular cross-section:\n\n- Volume: $V=\\pi r^2 h$\n- Curved surface area: $2\\pi rh$\n- Total surface area: $2\\pi r^2+2\\pi rh$ (two circular ends + curved face)",
          },
        ],
        keyFormulas: [
          { name: "Cuboid volume", statement: "$lwh$" },
          { name: "Cuboid surface area", statement: "$2(lw+lh+wh)$" },
          { name: "Prism volume", statement: "$\\text{cross-section area}\\times\\text{length}$" },
          { name: "Cylinder volume", statement: "$\\pi r^2 h$" },
          { name: "Cylinder surface area", statement: "$2\\pi r^2+2\\pi rh$" },
        ],
        workedExample: {
          problem: "A cylinder has radius $3$ cm and height $10$ cm. Find its volume and total surface area.",
          solution: "$V=\\pi\\times9\\times10=90\\pi\\approx282.7$ cm$^3$. $SA=2\\pi\\times9+2\\pi\\times3\\times10=18\\pi+60\\pi=78\\pi\\approx245.0$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "ciem-u5-solids-basic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cuboid is $5$ cm $\\times$ $4$ cm $\\times$ $3$ cm. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60$ cm$^3$" },
              { id: "b", text: "$94$ cm$^3$" },
              { id: "c", text: "$12$ cm$^3$" },
              { id: "d", text: "$120$ cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cuboid volume", statement: "$V=lwh$" },
            ],
            steps: [
              { reasoning: "Multiply the three dimensions.", working: "5\\times4\\times3=60", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $60$ cm$^3$",
            commonErrors: ["Adding dimensions (that's surface-area thinking)."],
          },
        },
        {
          id: "ciem-u5-solids-basic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a cylinder with radius $7$ cm and height $12$ cm. Leave your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2 h$" },
            ],
            steps: [
              { reasoning: "Square the radius.", working: "r^2=49", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "V=\\pi\\times49\\times12", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=588\\pi \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$588\\pi$ cm$^3$",
            commonErrors: ["Using diameter instead of radius."],
          },
        },
        {
          id: "ciem-u5-solids-basic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An L-shaped prism has a cross-section consisting of two rectangles: $8$ cm $\\times$ $3$ cm and $5$ cm $\\times$ $3$ cm sharing a side. The prism is $20$ cm long. Find its volume.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 780, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Prism volume", statement: "Volume = cross-section area $\\times$ length." },
            ],
            steps: [
              { reasoning: "Total cross-section area = sum of the two rectangles (they share an edge, so no overlap).", working: "8\\times3+5\\times3=24+15=39", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the prism length.", working: "V=39\\times20", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=780", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$780$ cm$^3$",
            commonErrors: ["Treating the cross-section as a single rectangle $8\\times5$.", "Using surface area formula instead of volume."],
          },
        },
        {
          id: "ciem-u5-solids-basic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A closed cylindrical tank has radius $2$ m and height $5$ m.",
          parts: [
            { label: "a", prompt: "Find the volume of the tank.", marks: 3 },
            { label: "b", prompt: "Find the total surface area of the tank.", marks: 3 },
            { label: "c", prompt: "The tank is filled with water at a rate of $0.5$ m$^3$ per minute. How long does it take to fill?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2 h$" },
              { kind: "formula", name: "Cylinder surface area", statement: "$2\\pi r^2+2\\pi rh$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply volume formula with $r=2$, $h=5$.", working: "V=\\pi\\times4\\times5=20\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\approx62.8 \\text{ m}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the volume.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two circular ends plus curved surface.", working: "SA=2\\pi(4)+2\\pi(2)(5)=8\\pi+20\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=28\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and state.", working: "\\approx88.0 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide volume by rate.", working: "t=\\frac{20\\pi}{0.5}=40\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\approx125.7 minutes", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the time (accept minutes or hours $\\approx2.1$ h).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20\\pi \\approx 62.8$ m$^3$ (b) $28\\pi \\approx 88.0$ m$^2$ (c) $\\approx 125.7$ minutes",
            commonErrors: ["In (b) forgetting one circular end.", "In (c) using surface area instead of volume."],
          },
        },
      ],
    },
    {
      id: "ciem-u5-pyramids-cones",
      title: "Pyramids, cones and spheres",
      skill: "Calculate volumes of pyramids, cones and spheres, and surface areas where required.",
      lesson: {
        sections: [
          {
            heading: "Pyramid",
            body: "A pyramid has **one-third** the volume of the prism (or cuboid) with the same base and height:\n\n$$V=\\frac13\\times\\text{base area}\\times\\text{perpendicular height}$$",
          },
          {
            heading: "Cone",
            body: "A cone is a pyramid with a circular base:\n\n$$V=\\frac13\\pi r^2 h$$\n\nThe **slant height** $l$ is used for surface area: $SA=\\pi r l+\\pi r^2$ (curved + base).",
          },
          {
            heading: "Sphere",
            body: "- Volume: $V=\\frac43\\pi r^3$\n- Surface area: $SA=4\\pi r^2$\n\nNote the different powers of $r$: volume uses $r^3$, surface area uses $r^2$.",
          },
        ],
        keyFormulas: [
          { name: "Pyramid volume", statement: "$\\frac13 \\times \\text{base area} \\times h$" },
          { name: "Cone volume", statement: "$\\frac13\\pi r^2 h$" },
          { name: "Cone surface area", statement: "$\\pi r l+\\pi r^2$" },
          { name: "Sphere volume", statement: "$\\frac43\\pi r^3$" },
          { name: "Sphere surface area", statement: "$4\\pi r^2$" },
        ],
        workedExample: {
          problem: "A cone has radius $6$ cm and height $8$ cm. Find its volume.",
          solution: "$V=\\frac13\\pi\\times36\\times8=\\frac{288\\pi}{3}=96\\pi\\approx301.6$ cm$^3$.",
        },
      },
      questions: [
        {
          id: "ciem-u5-pyramids-cones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pyramid has base area $30$ cm$^2$ and perpendicular height $9$ cm. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90$ cm$^3$" },
              { id: "b", text: "$270$ cm$^3$" },
              { id: "c", text: "$10$ cm$^3$" },
              { id: "d", text: "$45$ cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pyramid volume", statement: "$V=\\frac13 \\times \\text{base area} \\times h$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac13\\times30\\times9=90", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $90$ cm$^3$",
            commonErrors: ["Forgetting the $\\frac13$ factor."],
          },
        },
        {
          id: "ciem-u5-pyramids-cones-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a sphere with radius $9$ cm. Leave your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sphere volume", statement: "$V=\\frac43\\pi r^3$" },
            ],
            steps: [
              { reasoning: "Cube the radius.", working: "r^3=729", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "V=\\frac43\\pi\\times729", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=972\\pi \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$972\\pi$ cm$^3$",
            commonErrors: ["Using $r^2$ instead of $r^3$."],
          },
        },
        {
          id: "ciem-u5-pyramids-cones-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cone has radius $5$ cm and perpendicular height $12$ cm. Find its slant height.",
          response: { type: "numeric", parts: [{ label: "Slant height", answer: 13, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cone slant height", statement: "$l=\\sqrt{r^2+h^2}$ (Pythagoras on the axial cross-section)." },
            ],
            steps: [
              { reasoning: "Apply Pythagoras.", working: "l=\\sqrt{25+144}=\\sqrt{169}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=13", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$ cm",
            commonErrors: ["Adding $r+h$ instead of using Pythagoras."],
          },
        },
        {
          id: "ciem-u5-pyramids-cones-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A solid is made by attaching a cone of radius $4$ cm and height $9$ cm to the top of a cylinder of radius $4$ cm and height $15$ cm.",
          parts: [
            { label: "a", prompt: "Find the total volume of the solid.", marks: 4 },
            { label: "b", prompt: "Find the total surface area of the solid.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2 h$" },
              { kind: "formula", name: "Cone volume", statement: "$\\frac13\\pi r^2 h$" },
              { kind: "property", name: "Composite surface", statement: "Where the cone sits on the cylinder, the shared circular face is not part of the external surface area." },
            ],
            steps: [
              { part: "a", reasoning: "Cylinder volume.", working: "\\pi\\times16\\times15=240\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cone volume.", working: "\\frac13\\pi\\times16\\times9=48\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "240\\pi+48\\pi=288\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the volume.", working: "\\approx904.8 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cylinder curved surface + bottom face (top face is covered by cone base).", working: "2\\pi(4)(15)+\\pi(16)=120\\pi+16\\pi=136\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cone slant height: $l=\\sqrt{16+81}=\\sqrt{97}$.", working: "l=\\sqrt{97}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cone curved surface (no base — it sits on the cylinder).", working: "\\pi(4)\\sqrt{97}=4\\pi\\sqrt{97}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add all external faces.", working: "SA=136\\pi+4\\pi\\sqrt{97}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and state.", working: "\\approx427.3+123.9\\approx551.1 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $288\\pi \\approx 904.8$ cm$^3$ (b) $136\\pi+4\\pi\\sqrt{97} \\approx 551.1$ cm$^2$",
            commonErrors: ["In (b) including both circular faces of the cylinder (the top is internal).", "Including the cone's base in its surface area."],
            examinerNote: "The interface between cone and cylinder is internal — exclude the cylinder's top face and the cone's base.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u5-solids-notes",
      title: "Surface area and volume — revision notes",
      summary: "Volumes and surface areas of cuboids, prisms, cylinders, pyramids, cones and spheres; composite solids.",
      sections: [
        {
          heading: "Basic solids",
          body: "- Cuboid: $V=lwh$, $SA=2(lw+lh+wh)$\n- Prism: $V=\\text{cross-section area}\\times\\text{length}$\n- Cylinder: $V=\\pi r^2 h$, $SA=2\\pi r^2+2\\pi rh$\n\n**Worked example.** Cylinder $r=3$, $h=10$: $V=90\\pi\\approx282.7$ cm$^3$, $SA=78\\pi\\approx245.0$ cm$^2$.",
        },
        {
          heading: "Pyramids, cones, spheres",
          body: "- Pyramid: $V=\\frac13\\times\\text{base area}\\times h$\n- Cone: $V=\\frac13\\pi r^2 h$, $SA=\\pi rl+\\pi r^2$\n- Sphere: $V=\\frac43\\pi r^3$, $SA=4\\pi r^2$\n\nCone slant height: $l=\\sqrt{r^2+h^2}$.",
        },
        {
          heading: "Composite solids",
          body: "Add volumes of parts. For surface area, **exclude internal faces** where solids join — the interface is not external surface.\n\n**Worked example.** Cylinder ($r=4$, $h=15$) + cone ($r=4$, $h=9$): $V=240\\pi+48\\pi=288\\pi$ cm$^3$; $SA=136\\pi+4\\pi\\sqrt{97}$ cm$^2$.",
        },
        {
          heading: "Exam technique",
          body: "- Match the formula to the solid — sphere volume is $\\frac43\\pi r^3$, not $\\pi r^3$.\n- For surface area of composites, trace the **external** outline only.\n- Leave answers in terms of $\\pi$ unless a decimal is requested.",
        },
      ],
    },
  ],
};
