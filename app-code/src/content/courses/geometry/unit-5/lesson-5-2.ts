import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "geo-u5-5-2",
  code: "5-2",
  title: "Volume and Surface Area",
  goal: "I CAN calculate and compare the volume and surface area of familiar and composite solids, using cross-sectional reasoning when appropriate.",
  standards: ["HSG-GMD.A.1", "HSG-GMD.A.3"],
  vocabulary: [
    { term: "Volume", definition: "The amount of three-dimensional space enclosed by a solid, measured in cubic units." },
    { term: "Prism", definition: "A solid with two congruent, parallel polygonal bases and a constant cross-section along its length." },
    { term: "Cavalieri's principle", definition: "If two solids have equal heights and equal cross-sectional areas at every height parallel to their bases, then they have equal volumes." },
    { term: "Slant height", definition: "The length along a lateral face of a cone or pyramid from the base boundary to the apex." },
    { term: "Surface area", definition: "The total area of all exposed faces or curved surfaces of a solid." },
    { term: "Composite solid", definition: "A solid formed by joining or removing simpler solids; only exposed boundary surfaces contribute to external surface area." },
  ],
  concepts: [
    {
      id: "geo-u5-solid-volume",
      title: "Volume formulas and Cavalieri's principle",
      skill: "Calculate volumes of prisms, cylinders, pyramids, cones, and spheres, and explain volume comparisons using cross-sections.",
      lesson: {
        sections: [
          {
            heading: "Base area and height",
            body: "A prism or cylinder has volume $V=Bh$, where $B$ is the area of its base and $h$ is the perpendicular height. A pyramid or cone with the same base area and height has one-third the volume: $V=\\frac13Bh$. For a circular base, $B=\\pi r^2$. A sphere's volume is $V=\\frac43\\pi r^3$. Keep units cubed, and distinguish perpendicular height from a slant height.",
          },
          {
            heading: "Why Cavalieri's principle works",
            body: "Imagine slicing two solids at every level with planes parallel to their bases. If the solids have equal heights and every pair of corresponding slices has equal area, Cavalieri's principle says the solids have equal volume. A sheared prism and a right prism can have the same volume because the parallel cross-sections have the same area at every height. A cylinder and an oblique cylinder with the same base area and height likewise have equal volume.",
          },
        ],
        keyFormulas: [
          { name: "Prism and cylinder", statement: "$V=Bh$; for a cylinder, $V=\\pi r^2h$" },
          { name: "Pyramid and cone", statement: "$V=\\dfrac13Bh$; for a cone, $V=\\dfrac13\\pi r^2h$" },
          { name: "Sphere", statement: "$V=\\dfrac43\\pi r^3$" },
        ],
        workedExample: {
          problem: "A cone and a cylinder have the same circular base of radius 3 cm and perpendicular height 8 cm. Find each volume and explain their relationship.",
          solution: "The base area is $B=\\pi(3)^2=9\\pi$. The cylinder volume is $V=Bh=9\\pi(8)=72\\pi\\text{ cm}^3$. The cone volume is $V=\\frac13Bh=24\\pi\\text{ cm}^3$. The cone has one-third the cylinder's volume because they share the same base area and height.",
        },
      },
      questions: [
        {
          id: "geo-u5-solid-volume-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cylinder has radius $3$ cm and height $5$ cm. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15\\pi\\text{ cm}^3$" },
              { id: "b", text: "$45\\pi\\text{ cm}^3$" },
              { id: "c", text: "$30\\pi\\text{ cm}^3$" },
              { id: "d", text: "$90\\pi\\text{ cm}^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
              { kind: "property", name: "Radius", statement: "The formula uses the radius, squared, not the diameter." },
            ],
            steps: [
              { reasoning: "Substitute the given radius and height into the cylinder volume formula.", working: "V=\\pi(3)^2(5)", marks: 1, markCode: "M" },
              { reasoning: "Square the radius and multiply by the height, retaining the exact factor of $\\pi$.", working: "V=45\\pi\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $45\\pi\\text{ cm}^3$.",
            commonErrors: ["Using $3$ as the diameter and halving the radius.", "Forgetting to square the radius."],
          },
        },
        {
          id: "geo-u5-solid-volume-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangular base has perpendicular legs $6$ cm and $8$ cm. A right prism and a pyramid have this same base and both have height $10$ cm. Find the volume of each solid.",
          response: { type: "numeric", parts: [{ label: "Prism volume", answer: 240, unit: "cm^3" }, { label: "Pyramid volume", answer: 80, unit: "cm^3" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Prism volume", statement: "$V=Bh$, where $B$ is the area of the base and $h$ is the prism length." },
              { kind: "formula", name: "Triangle area", statement: "$B=\\dfrac12 bh$ for perpendicular base and height." },
            ],
            steps: [
              { reasoning: "Find the triangular base area from its perpendicular legs.", working: "B=\\frac12(6)(8)=24\\text{ cm}^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the prism height for the prism volume, then apply one-third of the same base-area-by-height product for the pyramid.", working: "V_{prism}=24(10)=240\\text{ cm}^3,\\quad V_{pyramid}=\\frac13(24)(10)=80\\text{ cm}^3", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Prism volume $=240\\text{ cm}^3$; pyramid volume $=80\\text{ cm}^3$.",
            commonErrors: ["Using the prism length as one leg of the triangular base.", "Forgetting the factor of one-third for the pyramid."],
          },
        },
        {
          id: "geo-u5-solid-volume-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sphere has radius $6$ cm. Find its volume in terms of $\\pi$, then give a decimal rounded to the nearest tenth.",
          response: { type: "numeric", parts: [{ label: "Volume rounded to nearest tenth", answer: 904.8, tolerance: 0.05, unit: "cm^3" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sphere volume", statement: "$V=\\dfrac43\\pi r^3$." },
              { kind: "property", name: "Rounding", statement: "To round to the nearest tenth, retain one digit after the decimal point and inspect the next digit." },
            ],
            steps: [
              { reasoning: "Substitute the radius into the sphere formula.", working: "V=\\frac43\\pi(6)^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the cube and simplify the exact coefficient.", working: "V=\\frac43\\pi(216)=288\\pi\\text{ cm}^3", marks: 2, markCode: "A" },
              { reasoning: "Convert the exact expression to a decimal and round to the nearest tenth as requested.", working: "288\\pi\\approx904.778\\implies904.8\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$288\\pi\\text{ cm}^3\\approx904.8\\text{ cm}^3$.",
            commonErrors: ["Using $r^2$ rather than $r^3$.", "Using the formula for a hemisphere instead of a sphere."],
          },
        },
        {
          id: "geo-u5-solid-volume-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A composite solid is made from a cylinder of radius $2$ cm and height $7$ cm with a hemisphere of radius $2$ cm attached on top. A second, oblique cylinder has the same circular base radius and perpendicular height as the first cylinder. Round decimal volumes to the nearest tenth.",
          parts: [
            { label: "a", prompt: "Find the right cylinder's volume as an exact multiple of $\\pi$ and as a decimal.", marks: 2 },
            { label: "b", prompt: "Find the hemisphere's volume as an exact multiple of $\\pi$ and as a decimal.", marks: 2 },
            { label: "c", prompt: "Write the composite volume exactly in the form $k\\pi$ and state $k$.", marks: 2 },
            { label: "d", prompt: "Give the composite volume rounded to the nearest tenth of a cubic centimeter.", marks: 2 },
            { label: "e", prompt: "Find the oblique cylinder's volume and justify why it matches the right cylinder's volume.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
              { kind: "formula", name: "Sphere and hemisphere volume", statement: "A sphere has volume $\\dfrac43\\pi r^3$; a hemisphere has half that volume, $\\dfrac23\\pi r^3$." },
              { kind: "property", name: "Composite volume", statement: "The volume of joined non-overlapping solids is the sum of their volumes." },
            ],
            steps: [
              { part: "a", reasoning: "Use the cylinder formula and evaluate the exact expression and requested decimal.", working: "V_c=\\pi(2)^2(7)=28\\pi\\approx88.0\\text{ cm}^3", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A hemisphere is half a sphere, so use the hemisphere formula with radius 2.", working: "V_h=\\frac23\\pi(2)^3=\\frac{16}{3}\\pi\\approx16.8\\text{ cm}^3", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Add the exact component volumes and combine their coefficients of $\\pi$.", working: "V=28\\pi+\\frac{16}{3}\\pi=\\frac{100}{3}\\pi,\\quad k=\\frac{100}{3}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Convert the exact total to a decimal and round to the nearest tenth.", working: "\\frac{100}{3}\\pi\\approx104.719\\implies104.7\\text{ cm}^3", marks: 2, markCode: "A" },
              { part: "e", reasoning: "Cavalieri's principle applies because the oblique and right cylinders have the same height and equal circular cross-sectional areas at every level.", working: "V_{oblique}=V_{right}=\\pi(2)^2(7)=28\\pi\\text{ cm}^3", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $28\\pi\\text{ cm}^3\\approx88.0\\text{ cm}^3$. (b) $\\frac{16}{3}\\pi\\text{ cm}^3\\approx16.8\\text{ cm}^3$. (c) $V=\\frac{100}{3}\\pi\\text{ cm}^3$, so $k=\\frac{100}{3}$. (d) $104.7\\text{ cm}^3$. (e) The oblique cylinder has volume $28\\pi\\text{ cm}^3$ by Cavalieri's principle.",
            commonErrors: ["Using the full-sphere volume for the hemisphere.", "Adding the decimal approximations before keeping the exact multiple of $\\pi$."],
          },
        },
      ],
    },
    {
      id: "geo-u5-surface-area-composite",
      title: "Surface area and composite solids",
      skill: "Find total or exposed surface area of familiar solids and composites, excluding joined or hidden faces.",
      lesson: {
        sections: [
          {
            heading: "Faces and curved surfaces",
            body: "For a prism, add the areas of all faces; for a cylinder, total surface area is the two circular bases plus the curved lateral area. A cone's lateral area is $\\pi r\\ell$, where $\\ell$ is slant height, not vertical height. A sphere's surface area is $4\\pi r^2$. Use square units, and keep exact multiples of $\\pi$ when possible.",
          },
          {
            heading: "What counts on a composite solid?",
            body: "External surface area includes only surfaces exposed to the outside. If two solids are joined along a face or circular region, that shared interior region is not part of the external surface. Sketch the exposed surfaces or imagine unfolding them before adding. For a cone, if the slant height is not given, use the right triangle formed by the radius, height, and slant height: $\\ell=\\sqrt{r^2+h^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Cylinder total surface area", statement: "$SA=2\\pi r^2+2\\pi rh$" },
          { name: "Cone total surface area", statement: "$SA=\\pi r^2+\\pi r\\ell$" },
          { name: "Sphere surface area", statement: "$SA=4\\pi r^2$" },
        ],
        workedExample: {
          problem: "Find the total surface area of a closed cylinder with radius 2 cm and height 5 cm.",
          solution: "Include both circular bases and the curved lateral area: $SA=2\\pi r^2+2\\pi rh=2\\pi(2)^2+2\\pi(2)(5)=8\\pi+20\\pi=28\\pi\\text{ cm}^2$.",
        },
      },
      questions: [
        {
          id: "geo-u5-surface-area-composite-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the total surface area of a cube with edge length $4$ cm.",
          response: { type: "numeric", parts: [{ label: "Surface area", answer: 96, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cube surface area", statement: "$SA=6s^2$ for edge length $s$." },
              { kind: "property", name: "Square face area", statement: "Each square face has area $s^2$." },
            ],
            steps: [
              { reasoning: "A cube has six congruent square faces, each with area $4^2$.", working: "SA=6(4^2)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total area and use square units.", working: "SA=96\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96\\text{ cm}^2$.",
            commonErrors: ["Using 4 faces rather than 6.", "Giving cubic units instead of square units."],
          },
        },
        {
          id: "geo-u5-surface-area-composite-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A closed right cone has radius $3$ cm and slant height $5$ cm. Find its total surface area in terms of $\\pi$, then give a decimal rounded to the nearest tenth.",
          response: { type: "numeric", parts: [{ label: "Surface area rounded to nearest tenth", answer: 75.4, tolerance: 0.05, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cone total surface area", statement: "$SA=\\pi r^2+\\pi r\\ell$, including the circular base and lateral surface." },
              { kind: "property", name: "Rounding", statement: "Round the decimal value to one digit after the decimal point." },
            ],
            steps: [
              { reasoning: "Substitute the radius and the given slant height into the total surface-area formula.", working: "SA=\\pi(3)^2+\\pi(3)(5)", marks: 1, markCode: "M" },
              { reasoning: "Combine the base area and lateral area exactly.", working: "SA=9\\pi+15\\pi=24\\pi\\text{ cm}^2", marks: 1, markCode: "A" },
              { reasoning: "Approximate and round to the nearest tenth as requested.", working: "24\\pi\\approx75.398\\implies75.4\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\pi\\text{ cm}^2\\approx75.4\\text{ cm}^2$.",
            commonErrors: ["Using the vertical height instead of the given slant height.", "Leaving off the base area of a closed cone."],
          },
        },
        {
          id: "geo-u5-surface-area-composite-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular prism measures $3$ cm by $4$ cm by $12$ cm. Find its total surface area.",
          response: { type: "numeric", parts: [{ label: "Surface area", answer: 192, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangular prism surface area", statement: "$SA=2(lw+lh+wh)$." },
              { kind: "property", name: "Opposite faces", statement: "A rectangular prism has two faces of each of the three distinct face dimensions." },
            ],
            steps: [
              { reasoning: "Find the areas of the three distinct pairs of congruent faces.", working: "lw=3(4)=12,\\quad lh=3(12)=36,\\quad wh=4(12)=48", marks: 2, markCode: "M" },
              { reasoning: "Double the sum of the distinct face areas to include both faces in each pair.", working: "SA=2(12+36+48)=192\\text{ cm}^2", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$192\\text{ cm}^2$.",
            commonErrors: ["Adding only three faces and failing to account for the congruent opposite faces.", "Multiplying the three dimensions, which gives volume."],
          },
        },
        {
          id: "geo-u5-surface-area-composite-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A solid consists of a cylinder of radius $3$ cm and height $8$ cm with a hemisphere of radius $3$ cm attached to one end. The other circular end of the cylinder remains exposed. Give the exact external surface area in terms of $\\pi$, then give a decimal rounded to the nearest tenth.",
          parts: [
            { label: "a", prompt: "Find the cylinder's curved lateral area.", marks: 2 },
            { label: "b", prompt: "Find the area of the exposed circular end of the cylinder.", marks: 2 },
            { label: "c", prompt: "Find the hemisphere's curved surface area, excluding its flat circular base.", marks: 2 },
            { label: "d", prompt: "Add only the exposed surfaces to find the exact external area and its rounded decimal value.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder lateral area", statement: "$A_{lat}=2\\pi rh$." },
              { kind: "formula", name: "Circle area", statement: "$A=\\pi r^2$." },
              { kind: "formula", name: "Hemisphere curved area", statement: "A sphere has area $4\\pi r^2$, so a hemisphere's curved area is $2\\pi r^2$." },
              { kind: "property", name: "Exposed area", statement: "The joined circular face is internal and must not be included in external surface area." },
            ],
            steps: [
              { part: "a", reasoning: "Use the cylinder's curved area formula; its circular bases are not part of this part.", working: "A_{lat}=2\\pi(3)(8)=48\\pi\\text{ cm}^2", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Only the opposite circular end is exposed; the joined end is hidden by the hemisphere.", working: "A_{end}=\\pi(3)^2=9\\pi\\text{ cm}^2", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Use only the hemisphere's curved area; its flat base is the joined internal face.", working: "A_{hemi}=2\\pi(3)^2=18\\pi\\text{ cm}^2", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Add the three exposed pieces, preserve the exact multiple of $\\pi$, then round the decimal to a tenth.", working: "SA=48\\pi+9\\pi+18\\pi=75\\pi\\approx235.6\\text{ cm}^2", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $48\\pi\\text{ cm}^2$. (b) $9\\pi\\text{ cm}^2$. (c) $18\\pi\\text{ cm}^2$. (d) $75\\pi\\text{ cm}^2\\approx235.6\\text{ cm}^2$.",
            commonErrors: ["Counting the joined circular face between the cylinder and hemisphere.", "Using the full sphere area rather than half the sphere's curved area."],
          },
        },
      ],
    },
  ],
};
