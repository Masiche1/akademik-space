import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olm-u5-lesson-5-3",
  code: "5-3",
  title: "Hemispheres, Frustums and Composite Solids",
  goal: "I CAN calculate volumes and surface areas of hemispheres, frustums and composite solids.",
  standards: ["4024: mensuration"],
  vocabulary: [
    { term: "Hemisphere", definition: "Half of a sphere." },
    { term: "Frustum", definition: "Part of a cone/cone pyramid with top cut off." },
    { term: "Composite solid", definition: "Solid made by joining two or more shapes." },
    { term: "Slant height", definition: "Height along the curved surface of cone/frustum." },
  ],
  concepts: [
    {
      id: "olm-u5-s3-hemi",
      title: "Hemispheres and frustums",
      skill: "Calculate volumes of hemispheres and frustums at O Level.",
      lesson: {
        sections: [
          { heading: "Hemisphere", body: "A hemisphere is half a sphere: volume $V=\\frac23\\pi r^3$. Surface area: curved surface only is $2\\pi r^2$; total including flat circular base is $3\\pi r^2$. Read carefully whether 'surface area' means curved only or total — this is a classic exam trap." },
          { heading: "Frustum", body: "A frustum is a cone with the top removed. Volume = difference of two cones: $V=\\frac13\\pi h(R^2+Rr+r^2)$ where $R$ is bottom radius, $r$ top radius, $h$ height. Curved surface area $=\\pi(R+r)l$ where $l$ is slant height of frustum. Find $l$ using Pythagoras on the cone's cross-section: $l=\\sqrt{h^2+(R-r)^2}$." },
        ],
        keyFormulas: [
          { name: "Hemisphere", statement: "$V=\\frac23\\pi r^3$; curved SA $=2\\pi r^2$, total $=3\\pi r^2$" },
          { name: "Frustum", statement: "$V=\\frac13\\pi h(R^2+Rr+r^2)$; CSA $=\\pi(R+r)l$" },
        ],
        workedExample: { problem: "Find the volume of a hemisphere radius 6 cm.", solution: "$V=\\frac23\\pi\\times216=144\\pi\\approx452$ cm³." },
      },
      questions: [
        {
          id: "olm-u5-s3-he-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The volume of a hemisphere radius $r$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi r^3$" },
            { id: "b", text: "$\\frac23\\pi r^3$" },
            { id: "c", text: "$2\\pi r^2$" },
            { id: "d", text: "$\\frac43\\pi r^3$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Hemisphere", statement: "Half sphere." }], steps: [{ reasoning: "$\\frac12\\times\\frac43\\pi r^3=\\frac23\\pi r^3$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac23\\pi r^3$" },
        },
        {
          id: "olm-u5-s3-he-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the curved surface area of a hemisphere radius 4 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Curved SA", statement: "$2\\pi r^2$." }], steps: [
            { reasoning: "$2\\pi\\times16=32\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $32\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$32\\pi$ cm²" },
        },
        {
          id: "olm-u5-s3-he-q3", difficulty: "core", totalMarks: 3,
          stem: "A frustum has bottom radius 8 cm, top radius 3 cm, height 10 cm. Find its volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Frustum", statement: "$\\frac13\\pi h(R^2+Rr+r^2)$." }], steps: [
            { reasoning: "$V=\\frac13\\pi\\times10\\times(64+24+9)=\\frac{970\\pi}{3}$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{970\\pi}{3}\\approx1015$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Check: between cone(8,10)=640π/3 and smaller — plausible ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{970\\pi}{3}$ cm³" },
        },
        {
          id: "olm-u5-s3-he-q4", difficulty: "core", totalMarks: 4,
          stem: "A bucket is a frustum with top radius 20 cm, bottom radius 12 cm, height 30 cm. Find its capacity in litres (1 litre = 1000 cm³).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Frustum volume", statement: "Then convert units." }], steps: [
            { reasoning: "$V=\\frac13\\pi\\times30\\times(400+240+144)=10\\pi\\times784=7840\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx24630$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Convert: $\\frac{24630}{1000}\\approx24.6$ litres.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈24.6 litres.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈24.6 litres" },
        },
        {
          id: "olm-u5-s3-he-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The total surface area of a hemisphere of radius $r$ (including the flat base) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4\\pi r^2$" },
            { id: "b", text: "$\\pi r^2$" },
            { id: "c", text: "$2\\pi r^2$" },
            { id: "d", text: "$3\\pi r^2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Hemisphere SA", statement: "Curved $2\\pi r^2$ + base $\\pi r^2$." }], steps: [{ reasoning: "$2\\pi r^2+\\pi r^2=3\\pi r^2$.", marks: 1, markCode: "A" }], finalAnswer: "$3\\pi r^2$" },
        },
        {
          id: "olm-u5-s3-he-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the volume of a hemisphere of radius 6 cm, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 452.39, tolerance: 0.01, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Hemisphere", statement: "$\\frac23\\pi r^3$." }], steps: [
            { reasoning: "$V=\\frac23\\pi\\times216=144\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx452.39$ cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$144\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-he-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the curved surface area of a hemisphere of radius 5 cm, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 157.08, tolerance: 0.01, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Curved SA", statement: "$2\\pi r^2$." }], steps: [
            { reasoning: "$2\\pi\\times25=50\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "$\\approx157.08$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$50\\pi$ cm²" },
        },
        {
          id: "olm-u5-s3-he-q8", difficulty: "core", totalMarks: 2,
          stem: "A hemisphere has radius 4 cm. Its total surface area (including the base) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$64\\pi$ cm²" },
            { id: "b", text: "$16\\pi$ cm²" },
            { id: "c", text: "$48\\pi$ cm²" },
            { id: "d", text: "$32\\pi$ cm²" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Total SA", statement: "$3\\pi r^2$." }], steps: [
            { reasoning: "$3\\pi\\times16=48\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $48\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$48\\pi$ cm²" },
        },
        {
          id: "olm-u5-s3-he-q9", difficulty: "core", totalMarks: 2,
          stem: "The volume of a frustum of height $h$ with bottom radius $R$ and top radius $r$ is given by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi h(R+r)^2$" },
            { id: "b", text: "$\\pi h(R^2+Rr+r^2)$" },
            { id: "c", text: "$\\frac13\\pi h(R^2+Rr+r^2)$" },
            { id: "d", text: "$\\frac13\\pi h(R-r)^2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Frustum", statement: "Standard formula." }], steps: [
            { reasoning: "$V=\\frac13\\pi h(R^2+Rr+r^2)$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13\\pi h(R^2+Rr+r^2)$" },
        },
        {
          id: "olm-u5-s3-he-q10", difficulty: "core", totalMarks: 3,
          stem: "A frustum has bottom radius 10 cm, top radius 4 cm and perpendicular height 8 cm. Find its volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Frustum", statement: "$\\frac13\\pi h(R^2+Rr+r^2)$." }], steps: [
            { reasoning: "$V=\\frac13\\pi\\times8\\times(100+40+16)=\\frac{8\\pi\\times156}{3}=416\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $416\\pi$ cm³ ($\\approx1307$).", marks: 1, markCode: "M" },
            { reasoning: "All three terms included ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$416\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-he-q11", difficulty: "core", totalMarks: 3,
          stem: "Find the total surface area of a hemisphere of radius 3 cm, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 84.82, tolerance: 0.01, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Total SA", statement: "$3\\pi r^2$." }], steps: [
            { reasoning: "$3\\pi\\times9=27\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "$\\approx84.82$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $27\\pi$ cm² ($\\approx84.82$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$27\\pi$ cm²" },
        },
        {
          id: "olm-u5-s3-he-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A hemisphere has volume $18\\pi$ cm³. What is its radius?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6 cm" },
            { id: "b", text: "3 cm" },
            { id: "c", text: "9 cm" },
            { id: "d", text: "2 cm" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse formula", statement: "Solve for $r$." }], steps: [
            { reasoning: "$\\frac23\\pi r^3=18\\pi \\Rightarrow r^3=27 \\Rightarrow r=3$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 3 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 cm" },
        },
        {
          id: "olm-u5-s3-he-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A frustum has bottom radius 15 cm, top radius 9 cm and height 12 cm. Find its volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Frustum", statement: "$\\frac13\\pi h(R^2+Rr+r^2)$." }], steps: [
            { reasoning: "$V=\\frac13\\pi\\times12\\times(225+135+81)=4\\pi\\times441=1764\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1764\\pi$ cm³ ($\\approx5542$).", marks: 1, markCode: "M" },
            { reasoning: "Check: $225+135+81=441$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1764\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-he-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A dome is a hemisphere of radius 7 m. Find its curved surface area and its total surface area (including the base).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Hemisphere SA", statement: "Curved $2\\pi r^2$; total $3\\pi r^2$." }], steps: [
            { reasoning: "Curved $=2\\pi\\times49=98\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Total $=3\\pi\\times49=147\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Difference is the flat base $49\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $98\\pi$ m² and $147\\pi$ m².", marks: 1, markCode: "A" },
          ], finalAnswer: "Curved $98\\pi$ m², total $147\\pi$ m²" },
        },
        {
          id: "olm-u5-s3-he-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find the volume of a frustum with bottom radius 6 cm, top radius 3 cm and height 9 cm, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Frustum", statement: "$\\frac13\\pi h(R^2+Rr+r^2)$." }], steps: [
            { reasoning: "$V=\\frac13\\pi\\times9\\times(36+18+9)=3\\pi\\times63=189\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx593.76$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $189\\pi$ cm³ ($\\approx593.76$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$189\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-he-q16", difficulty: "challenge", totalMarks: 2,
          stem: "A hemisphere and a sphere have the same radius. The hemisphere's volume is what fraction of the sphere's volume?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac23$" },
            { id: "b", text: "$\\frac13$" },
            { id: "c", text: "$\\frac14$" },
            { id: "d", text: "$\\frac12$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Hemisphere", statement: "Exactly half a sphere." }], steps: [
            { reasoning: "$\\frac{\\frac23\\pi r^3}{\\frac43\\pi r^3}=\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $\\frac12$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac12$" },
        },
      ],
    },
    {
      id: "olm-u5-s3-composite",
      title: "Composite solids",
      skill: "Calculate volumes and surface areas of composite solids at O Level.",
      lesson: {
        sections: [
          { heading: "Adding and subtracting", body: "For a solid made of joined shapes, volume = sum of parts (easy). Surface area is trickier: add all outer faces but subtract the interfaces where shapes join (those faces are hidden). Draw the solid and identify which faces are external. For a shape with a hole or cut-out, subtract the removed volume/surface." },
          { heading: "Common composites", body: "Cylinder + hemisphere (capsule, tank), cone on cylinder (cup), cube with cylindrical hole. For surface area of a cone-on-cylinder: curved surface of cone + curved surface of cylinder + base circle(s). Always check whether the base is included or covered by the joined shape." },
        ],
        keyFormulas: [
          { name: "Volume", statement: "Sum of component volumes" },
          { name: "Surface area", statement: "External faces only — subtract interfaces" },
        ],
        workedExample: { problem: "A solid is a cylinder radius 3, height 8 with a hemisphere radius 3 on top. Find total volume.", solution: "Cylinder $=\\pi\\times9\\times8=72\\pi$; hemisphere $=\\frac23\\pi\\times27=18\\pi$; total $=90\\pi$ cm³." },
      },
      questions: [
        {
          id: "olm-u5-s3-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For the volume of a composite solid you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Multiply them" },
            { id: "b", text: "Use the largest only" },
            { id: "c", text: "Add the volumes of the parts" },
            { id: "d", text: "Average them" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Additive." }], steps: [{ reasoning: "Volumes add.", marks: 1, markCode: "A" }], finalAnswer: "Add volumes" },
        },
        {
          id: "olm-u5-s3-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A cube of side 4 has a cylindrical hole radius 1, height 4 drilled through. Find the volume removed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Subtraction", statement: "Volume = cube - cylinder." }], steps: [
            { reasoning: "Cylinder volume $=\\pi\\times1\\times4=4\\pi$; cube $=64$; remaining $=64-4\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $64-4\\pi$ cubic units.", marks: 1, markCode: "A" },
          ], finalAnswer: "$64-4\\pi$" },
        },
        {
          id: "olm-u5-s3-co-q3", difficulty: "core", totalMarks: 3,
          stem: "Two cubes of side 3 are joined face-to-face. Find the total surface area of the resulting cuboid.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Interface", statement: "Subtract hidden faces." }], steps: [
            { reasoning: "Resulting cuboid $3\\times3\\times6$: SA $=2(9+18+18)=90$.", marks: 1, markCode: "M" },
            { reasoning: "Or: $2\\times6\\times9-2\\times9=108-18=90$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 90 square units.", marks: 1, markCode: "A" },
          ], finalAnswer: "90" },
        },
        {
          id: "olm-u5-s3-co-q4", difficulty: "core", totalMarks: 4,
          stem: "A storage tank is a cylinder radius 1.5 m, height 2 m, topped by a hemisphere of radius 1.5 m. Find total volume in m³.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Cylinder + hemisphere." }], steps: [
            { reasoning: "Cylinder $=\\pi\\times2.25\\times2=4.5\\pi$ m³.", marks: 1, markCode: "M" },
            { reasoning: "Hemisphere $=\\frac23\\pi\\times3.375=2.25\\pi$ m³.", marks: 1, markCode: "M" },
            { reasoning: "Total $=6.75\\pi\\approx21.2$ m³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6.75\\pi$ m³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6.75\\pi$ m³" },
        },
        {
          id: "olm-u5-s3-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "When finding the surface area of a composite solid, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Add every face of every part" },
            { id: "b", text: "Multiply the volumes" },
            { id: "c", text: "Ignore curved faces" },
            { id: "d", text: "Count only the external faces" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Interfaces", statement: "Hidden faces are not external." }], steps: [{ reasoning: "Joined faces are internal and excluded.", marks: 1, markCode: "A" }], finalAnswer: "Count only the external faces" },
        },
        {
          id: "olm-u5-s3-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A cuboid 5 cm by 4 cm by 3 cm has a cube of side 2 cm attached on top. Find the total volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 68, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Volumes add." }], steps: [
            { reasoning: "$60+8=68$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 68 cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "68 cm³" },
        },
        {
          id: "olm-u5-s3-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A cube of side 5 cm has a smaller cube of side 3 cm removed from it. Find the volume remaining.",
          response: { type: "numeric", parts: [{ label: "a", answer: 98, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "technique", name: "Subtraction", statement: "Outer − inner." }], steps: [
            { reasoning: "$125-27=98$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 98 cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "98 cm³" },
        },
        {
          id: "olm-u5-s3-co-q8", difficulty: "core", totalMarks: 2,
          stem: "A solid is a cylinder of radius 3 cm and height 8 cm with a hemisphere of radius 3 cm on top. Its total volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$72\\pi$ cm³" },
            { id: "b", text: "$90\\pi$ cm³" },
            { id: "c", text: "$96\\pi$ cm³" },
            { id: "d", text: "$54\\pi$ cm³" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Cylinder + hemisphere." }], steps: [
            { reasoning: "$72\\pi+18\\pi=90\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $90\\pi$ cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-co-q9", difficulty: "core", totalMarks: 3,
          stem: "A cup is a cylinder of radius 4 cm and height 10 cm with a cone of radius 4 cm and height 6 cm on top. Find the total volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Cylinder + cone." }], steps: [
            { reasoning: "Cylinder $=\\pi\\times16\\times10=160\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Cone $=\\frac13\\pi\\times16\\times6=32\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Total $=192\\pi$ cm³ ($\\approx603$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$192\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-co-q10", difficulty: "core", totalMarks: 2,
          stem: "A solid is a cube of side 6 cm with a hemisphere of radius 3 cm mounted on top. Its volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$234$ cm³" },
            { id: "b", text: "$216+36\\pi$ cm³" },
            { id: "c", text: "$216+18\\pi$ cm³" },
            { id: "d", text: "$216+9\\pi$ cm³" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Cube + hemisphere." }], steps: [
            { reasoning: "$216+\\frac23\\pi\\times27=216+18\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "$216+18\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-co-q11", difficulty: "core", totalMarks: 3,
          stem: "A cuboid 10 cm by 6 cm by 4 cm has a cube of side 4 cm placed on top of it. Find the total volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 304, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Volumes add." }], steps: [
            { reasoning: "$240+64=304$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 304 cm³.", marks: 1, markCode: "M" },
            { reasoning: "Check: $10\\times6\\times4=240$, $4^3=64$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "304 cm³" },
        },
        {
          id: "olm-u5-s3-co-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Two cubes of side 4 cm are joined face-to-face. When finding the total surface area, the two touching faces…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are counted once each" },
            { id: "b", text: "Are not counted" },
            { id: "c", text: "Are doubled" },
            { id: "d", text: "Are counted twice" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Interface", statement: "Internal faces are hidden." }], steps: [
            { reasoning: "The interface is inside the solid.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: not counted.", marks: 1, markCode: "A" },
          ], finalAnswer: "Are not counted" },
        },
        {
          id: "olm-u5-s3-co-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A tank is a cylinder of radius 5 m and height 12 m with a hemispherical top of radius 5 m. Find its total surface area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite SA", statement: "Curved cylinder + curved hemisphere + base." }], steps: [
            { reasoning: "Cylinder curved $=2\\pi\\times5\\times12=120\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Hemisphere curved $=2\\pi\\times25=50\\pi$ m²; base $=25\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Total $=120\\pi+50\\pi+25\\pi=195\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $195\\pi$ m² ($\\approx612.6$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$195\\pi$ m²" },
        },
        {
          id: "olm-u5-s3-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A grain silo is a cylinder of radius 2 m and height 3 m topped by a cone of radius 2 m and height 4 m. Find the total volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Cylinder + cone." }], steps: [
            { reasoning: "Cylinder $=\\pi\\times4\\times3=12\\pi$ m³.", marks: 1, markCode: "M" },
            { reasoning: "Cone $=\\frac13\\pi\\times4\\times4=\\frac{16\\pi}{3}$ m³.", marks: 1, markCode: "M" },
            { reasoning: "Total $=\\frac{52\\pi}{3}\\approx54.45$ m³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{52\\pi}{3}$ m³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{52\\pi}{3}$ m³" },
        },
        {
          id: "olm-u5-s3-co-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A solid is a cylinder of radius 6 cm and height 4 cm with a hemisphere of radius 6 cm on top. Find its volume, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 904.78, tolerance: 0.01, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "technique", name: "Composite volume", statement: "Cylinder + hemisphere." }], steps: [
            { reasoning: "$144\\pi+144\\pi=288\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx904.78$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $288\\pi$ cm³ ($\\approx904.78$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$288\\pi$ cm³" },
        },
        {
          id: "olm-u5-s3-co-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A block is a cuboid 8 cm by 6 cm by 4 cm with a cylindrical hole of radius 2 cm drilled vertically through it. Find the volume of the block (material remaining).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Hole", statement: "Cuboid − cylinder." }], steps: [
            { reasoning: "Cuboid $=8\\times6\\times4=192$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Hole $=\\pi\\times4\\times4=16\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Remaining $=192-16\\pi\\approx141.7$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(192-16\\pi)$ cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(192-16\\pi)$ cm³" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u5-s3-comp-notes", title: "Composite solids — notes", summary: "Hemispheres, frustums, joined shapes.",
      sections: [
        { heading: "Parts", body: "Hemisphere $V=\\frac23\\pi r^3$; frustum $V=\\frac13\\pi h(R^2+Rr+r^2)$." },
        { heading: "Composite", body: "Volume adds; surface area needs external faces only — subtract interfaces." },
      ] },
  ],
};
