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
            { id: "a", text: "$\\frac23\\pi r^3$" }, { id: "b", text: "$\\frac43\\pi r^3$" }, { id: "c", text: "$\\pi r^3$" }, { id: "d", text: "$2\\pi r^2$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Add the volumes of the parts" }, { id: "b", text: "Multiply them" }, { id: "c", text: "Average them" }, { id: "d", text: "Use the largest only" },
          ], correctChoiceId: "a" },
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
