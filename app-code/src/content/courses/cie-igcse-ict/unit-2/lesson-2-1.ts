import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cieict-u2-lesson-2-1",
  code: "2-1",
  title: "Graphics and Image Editing",
  goal: "I CAN edit images using graphics software for different purposes.",
  standards: ["Cambridge IGCSE ICT 0417: graphics", "0417 section: graphics software"],
  
  vocabulary: [
    { term: "Raster graphic", definition: "Image made of pixels — photos." },
    { term: "Vector graphic", definition: "Image made of mathematical shapes — logos." },
    { term: "Resolution", definition: "Number of pixels per inch — affects quality." },
    { term: "Cropping", definition: "Trimming edges of an image." },
    { term: "Layers", definition: "Stacked editable levels in an image." },
    { term: "Colour mode", definition: "RGB for screen, CMYK for print." },
  ],
  concepts: [
    {
      id: "cieict-u2-s1-graphics",
      title: "Graphics software",
      skill: "Edit and prepare images at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Raster vs vector",
            body: "Raster images (photos) are pixel grids — good for complex images but lose quality when resized. Vector images (logos, diagrams) are mathematical shapes — scale perfectly but limited for photos.",
          },
          {
            heading: "Editing techniques",
            body: "Crop to focus, resize proportionally, adjust brightness/contrast, remove backgrounds, add text layers. Use RGB for screen display, CMYK for professional printing.",
          },
        ],
        keyFormulas: [
          { name: "Raster", statement: "pixels — photos" },
          { name: "Vector", statement: "shapes — logos" },
          { name: "RGB/CMYK", statement: "screen vs print" },
        ],
        workedExample: {
          problem: "Prepare a photo for a website banner.",
          solution: "Crop to 16:9 ratio, resize to 1920px wide, adjust brightness, save as JPEG (smaller) or PNG (if transparency needed).",
        },
      },
      questions: [
        {
          id: "cieict-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between raster and vector graphics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Raster=pixels, vector=mathematical shapes"
                    },
                    {
                              "id": "b",
                              "text": "Raster=small, vector=large"
                    },
                    {
                              "id": "c",
                              "text": "Raster=photos, vector=videos"
                    },
                    {
                              "id": "d",
                              "text": "No difference"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Raster vs vector",
                              "statement": "Pixels vs shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raster=pixel grid; vector=mathematical shapes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pixels vs shapes"
},
        },
        {
          id: "cieict-u2-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When would you use vector graphics over raster? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vector use",
                              "statement": "Scalable graphics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When scaling without quality loss needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. logos, diagrams, icons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Logos/diagrams needing scaling"
},
        },
        {
          id: "cieict-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between RGB and CMYK colour modes? When use each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Colour modes",
                              "statement": "Screen vs print."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RGB=screen (Red Green Blue); CMYK=print.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "RGB for digital; CMYK for professional printing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Screen vs print colour"
},
        },
        {
          id: "cieict-u2-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define raster graphic, vector graphic, resolution, cropping, layers, colour mode. (b) When use raster vs vector? (c) What is resolution? (d) What is cropping? (e) What is a layer? (f) What is RGB vs CMYK? (g) When use JPEG vs PNG? (h) Design a workflow to create a school logo.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Graphics",
                              "statement": "Image types, editing, colour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Raster for photos; vector for logos.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Pixels per inch/quality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Trimming edges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Editable stacked levels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Screen vs print.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) JPEG=photos smaller; PNG=graphics/sharp.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid logo workflow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Graphics editing and image formats."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-gr-notes",
      title: "Graphics — notes",
      summary: "Raster=pixels (photos), vector=shapes (logos). RGB for screen, CMYK for print.",
      sections: [
        { heading: "Key idea", body: "Choose image type based on use — photos need raster, logos need vector." },
        { heading: "Formats", body: "JPEG=photos, PNG=graphics with transparency, SVG=vector web." },
      ],
    },
  ],
};
