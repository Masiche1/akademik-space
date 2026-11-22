import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cieict-u2-lesson-2-1",
  code: "2-1",
  title: "Graphics and Image Editing",
  goal: "I CAN edit images using graphics software for different purposes.",
  standards: [
    "Cambridge IGCSE ICT 0417: graphics",
    "0417 section: graphics software",
  ],

  vocabulary: [
    { term: "Raster graphic", definition: "Image made of pixels — photos." },
    {
      term: "Vector graphic",
      definition: "Image made of mathematical shapes — logos.",
    },
    {
      term: "Resolution",
      definition: "Number of pixels per inch — affects quality.",
    },
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
          solution:
            "Crop to 16:9 ratio, resize to 1920px wide, adjust brightness, save as JPEG (smaller) or PNG (if transparency needed).",
        },
      },
      questions: [
        {
          id: "cieict-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between raster and vector graphics?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "No difference",
              },
              {
                id: "b",
                text: "Raster=pixels, vector=mathematical shapes",
              },
              {
                id: "c",
                text: "Raster=photos, vector=videos",
              },
              {
                id: "d",
                text: "Raster=small, vector=large",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Raster vs vector",
                statement: "Pixels vs shapes.",
              },
            ],
            steps: [
              {
                reasoning: "Raster=pixel grid; vector=mathematical shapes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Pixels vs shapes",
          },
        },
        {
          id: "cieict-u2-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When would you use vector graphics over raster? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vector use",
                statement: "Scalable graphics.",
              },
            ],
            steps: [
              {
                reasoning: "When scaling without quality loss needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. logos, diagrams, icons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Logos/diagrams needing scaling",
          },
        },
        {
          id: "cieict-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between RGB and CMYK colour modes? When use each?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Colour modes",
                statement: "Screen vs print.",
              },
            ],
            steps: [
              {
                reasoning: "RGB=screen (Red Green Blue); CMYK=print.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "RGB for digital; CMYK for professional printing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Screen vs print colour",
          },
        },
        {
          id: "cieict-u2-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define raster graphic, vector graphic, resolution, cropping, layers, colour mode. (b) When use raster vs vector? (c) What is resolution? (d) What is cropping? (e) What is a layer? (f) What is RGB vs CMYK? (g) When use JPEG vs PNG? (h) Design a workflow to create a school logo.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Graphics",
                statement: "Image types, editing, colour.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Raster for photos; vector for logos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Pixels per inch/quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Trimming edges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Editable stacked levels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Screen vs print.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) JPEG=photos smaller; PNG=graphics/sharp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid logo workflow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Graphics editing and image formats.",
          },
        },
        {
          id: "cieict-u2-gr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to a raster image when it is enlarged significantly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It automatically converts to a vector image",
              },
              {
                id: "b",
                text: "It becomes pixelated and blurry because pixels are stretched",
              },
              {
                id: "c",
                text: "Its file size decreases",
              },
              {
                id: "d",
                text: "It stays perfectly sharp because it is made of shapes",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Raster scaling",
                statement: "Pixels stretch and lose quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enlarging raster images stretches pixels, causing pixelation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Pixelated and blurry",
          },
        },
        {
          id: "cieict-u2-gr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A camera sensor produces an image 1800 pixels wide and 1200 pixels tall. How many megapixels is this?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2.16,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Megapixels",
                statement: "width x height / 1,000,000.",
              },
            ],
            steps: [
              {
                reasoning: "1800 x 1200 = 2,160,000 pixels = 2.16 MP.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2.16 megapixels",
          },
        },
        {
          id: "cieict-u2-gr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scanned image is 4000 pixels wide and 3000 pixels tall. How many megapixels does it contain?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Megapixels",
                statement: "width x height / 1,000,000.",
              },
            ],
            steps: [
              {
                reasoning: "4000 x 3000 = 12,000,000 pixels = 12 MP.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "12 megapixels",
          },
        },
        {
          id: "cieict-u2-gr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A school logo needs a transparent background for use on different coloured posters. Which format is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "PNG",
              },
              {
                id: "b",
                text: "RAW only",
              },
              {
                id: "c",
                text: "GIF only",
              },
              {
                id: "d",
                text: "JPEG",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transparency",
                statement: "PNG supports alpha channel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PNG preserves transparency; JPEG does not support it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "PNG",
          },
        },
        {
          id: "cieict-u2-gr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two changes you would make to prepare a digital photo for professional printing.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Print preparation",
                statement: "Colour mode, resolution, bleed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert colour mode from RGB to CMYK for accurate print colours.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ensure resolution is at least 300 dpi at the final print size.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "CMYK conversion + 300 dpi resolution",
          },
        },
        {
          id: "cieict-u2-gr-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 2000 x 1500 pixel photo is cropped to 1000 x 750 pixels. How many pixels does the cropped image contain?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 750000,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pixel count",
                statement: "width x height.",
              },
            ],
            steps: [
              {
                reasoning: "1000 x 750 = 750,000 pixels.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "750,000 pixels",
          },
        },
        {
          id: "cieict-u2-gr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of using layers when editing an image?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It reduces the file size automatically",
              },
              {
                id: "b",
                text: "It allows non-destructive editing — elements can be changed or hidden without affecting others",
              },
              {
                id: "c",
                text: "It converts the image to vector format",
              },
              {
                id: "d",
                text: "It permanently merges all edits into one layer",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Layers",
                statement:
                  "Stacked editable levels for non-destructive editing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Layers let you edit elements independently and hide/reorder them.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Independent, non-destructive editing",
          },
        },
        {
          id: "cieict-u2-gr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which image resolution is generally recommended for high-quality printed photographs?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "150 dpi",
              },
              {
                id: "b",
                text: "72 dpi",
              },
              {
                id: "c",
                text: "1200 dpi",
              },
              {
                id: "d",
                text: "300 dpi",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Print resolution",
                statement: "300 dpi is standard for print.",
              },
            ],
            steps: [
              {
                reasoning:
                  "300 dpi gives sharp printed detail; 72 dpi is screen standard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "300 dpi",
          },
        },
        {
          id: "cieict-u2-gr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a vector graphic more suitable than a raster graphic for a company logo that must appear on business cards and a large billboard?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vector scaling",
                statement: "Mathematical shapes scale without quality loss.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vector images scale to any size without pixelation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Raster images would lose quality when enlarged for the billboard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Scales perfectly to any size",
          },
        },
        {
          id: "cieict-u2-gr-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A photo file is reduced from 8 MB to 2 MB during compression. By what percentage was the file size reduced?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 75,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compression",
                statement: "Reduction / original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(8 - 2) / 8 x 100 = 75% reduction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u2-gr-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which colour mode should be used when preparing images for display on a computer screen or website?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Spot colour only",
              },
              {
                id: "b",
                text: "Grayscale only",
              },
              {
                id: "c",
                text: "CMYK",
              },
              {
                id: "d",
                text: "RGB",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RGB",
                statement: "Red Green Blue — for screen display.",
              },
            ],
            steps: [
              {
                reasoning: "Screens emit light using RGB; CMYK is for print.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "RGB",
          },
        },
        {
          id: "cieict-u2-gr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student must create a poster image for a school event. Outline a workflow using graphics software, from starting photo to final file.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Image workflow",
                statement: "Import, edit, enhance, export.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Import the photo into graphics software and crop/resize to poster dimensions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adjust brightness/contrast, remove distractions, add text and graphics on separate layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Export in an appropriate format (e.g. JPEG for photos, PNG if transparency needed) at suitable resolution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Import, crop/edit on layers, export appropriate format",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-gr-notes",
      title: "Graphics — notes",
      summary:
        "Raster=pixels (photos), vector=shapes (logos). RGB for screen, CMYK for print.",
      sections: [
        {
          heading: "Key idea",
          body: "Choose image type based on use — photos need raster, logos need vector.",
        },
        {
          heading: "Formats",
          body: "JPEG=photos, PNG=graphics with transparency, SVG=vector web.",
        },
      ],
    },
  ],
};
