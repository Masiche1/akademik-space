import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "edxbtecit-u9-lesson-9-1",
  code: "9-1",
  title: "Bitmap, Vector and Image Properties",
  goal: "I CAN distinguish bitmap and vector graphics and calculate image file sizes from resolution and colour depth.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Digital Graphics and Multimedia", "Raster/vector graphics, resolution, colour depth, file size"],
  
  vocabulary: [
    { term: "Bitmap (raster)", definition: "Image made of a grid of pixels, each storing a colour value." },
    { term: "Vector graphic", definition: "Image defined by mathematical shapes — points, lines, curves." },
    { term: "Pixel", definition: "Picture element — smallest unit of a bitmap image." },
    { term: "Resolution", definition: "Number of pixels per unit (ppi/dpi) or total pixel dimensions." },
    { term: "Colour depth", definition: "Number of bits used to store the colour of each pixel." },
    { term: "Anti-aliasing", definition: "Smoothing jagged edges by blending edge pixels with background colours." },
  ],
  concepts: [
    {
      id: "edxbtecit-u9-l1-bitvvec",
      title: "Bitmap versus vector graphics",
      skill: "Compare bitmap and vector graphics and select the appropriate type for a given task.",
      lesson: {
        sections: [
          {
            heading: "Bitmap (raster) images",
            body: "A bitmap stores an image as a grid of pixels, each with a colour value. Common formats: JPEG, PNG, GIF, TIFF. Great for photographs and complex tonal images.\n\n**Advantages**: realistic detail, millions of colours, easy photo editing. **Disadvantages**: scaling up causes pixelation/blurring; file size grows with resolution and colour depth; editing is destructive to pixels.",
          },
          {
            heading: "Vector graphics",
            body: "Vector images store mathematical descriptions — points, lines, curves and fills — rendered at any size. Formats: SVG, AI, EPS.\n\n**Advantages**: infinite scalability without quality loss, tiny file sizes for simple graphics, easy to edit shapes, text stays sharp. **Disadvantages**: poor for photographic detail; not all software supports all formats; complex gradients can be slow to render.\n\n**Rule of thumb**: photos → bitmap; logos, icons, diagrams, text → vector.",
          },
        ],
        keyFormulas: [
          { name: "Bitmap scaling", statement: "Enlarge → pixels stretch → pixelation" },
          { name: "Vector scaling", statement: "Shapes re-rendered → no quality loss" },
        ],
        workedExample: {
          problem: "A designer must create a company logo that will appear on a business card and a 10-metre billboard. Which graphic type is suitable and why?",
          solution: "Vector graphics — the logo scales from card to billboard without pixelation and keeps a small file size.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u9-l1-bitvvec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which graphic type is best for a photograph?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vector"
                    },
                    {
                              "id": "b",
                              "text": "Bitmap"
                    },
                    {
                              "id": "c",
                              "text": "SVG"
                    },
                    {
                              "id": "d",
                              "text": "EPS"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bitmap",
                              "statement": "Pixel grid suited to photographic detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photos need pixel-level colour detail = bitmap.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Bitmap"
},
        },
        {
          id: "edxbtecit-u9-l1-bitvvec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State one advantage and one disadvantage of vector graphics.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Vector trade-offs",
                              "statement": "Scalable vs poor photo detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: scales to any size without quality loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disadvantage: unsuitable for photographic detail.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Scalable; poor for photos"
},
        },
        {
          id: "edxbtecit-u9-l1-bitvvec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why enlarging a bitmap image causes pixelation while a vector image stays sharp.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Scaling behaviour",
                              "statement": "Pixels stretch; vector shapes re-render."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bitmap: fixed pixels are stretched to fill space → visible blocks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vector: mathematical shapes are re-rendered at the new size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hence vectors stay sharp at any scale.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bitmap pixels stretch; vector shapes re-render"
},
        },
        {
          id: "edxbtecit-u9-l1-bitvvec-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A client needs an image for a website banner AND a printed poster. Recommend a graphic type for each and justify your choices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Choosing graphic type",
                              "statement": "Match type to content and scaling needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poster needs large-scale printing — vector avoids pixelation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If banner is photographic, bitmap at sufficient resolution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If banner is logo/text-based, vector works for both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justification linked to resolution/scaling needs.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Consistent recommendation across both uses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vector for scalable logo/poster; bitmap for photos at adequate resolution"
},
        },
        {
          id: "edxbtecit-u9-l1-bitvvec-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define bitmap and vector graphics.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two bitmap formats and two vector formats.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one task suited to each type.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Graphic types",
                              "statement": "Pixel grid vs mathematical shapes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bitmap = pixel grid; vector = mathematical shapes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined accurately.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bitmap: JPEG/PNG/GIF; vector: SVG/AI/EPS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "At least two of each correctly named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bitmap: photo editing; vector: logos/icons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Tasks correctly matched.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bitmap=pixels (JPEG/PNG), vector=shapes (SVG/AI); photos vs logos"
},
        },
        {
          id: "edxbtecit-u9-l1-bitvvec-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define bitmap and vector graphics. (b) State two advantages of bitmap graphics. (c) State two advantages of vector graphics. (d) Name two bitmap and two vector file formats. (e) Explain why a logo should be vector. (f) Explain when a bitmap is essential.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define both types.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Two bitmap advantages.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Two vector advantages.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Formats for each type.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Why logos should be vector.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "When bitmap is essential.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bitmap vs vector",
                              "statement": "Pixel detail vs scalable shapes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bitmap = pixel grid; vector = mathematical shapes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Realistic photos; millions of colours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second advantage: easy pixel-level editing.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Infinite scaling; tiny file sizes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second advantage: easy shape editing/text stays sharp.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "JPEG/PNG bitmap; SVG/AI vector.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Scales to any size; small file; editable shapes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Photographs and complex tonal images.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Bitmap vs vector trade-offs and appropriate uses."
},
        },
      ],
    },
    {
      id: "edxbtecit-u9-l1-resdepth",
      title: "Resolution, colour depth and file size",
      skill: "Calculate bitmap file size from dimensions and colour depth and relate resolution to output quality.",
      lesson: {
        sections: [
          {
            heading: "Resolution and colour depth",
            body: "**Resolution** = pixel dimensions (e.g. 1920×1080) or density (ppi for screens, dpi for print). Higher resolution = more detail but larger files.\n\n**Colour depth** = bits per pixel: 1-bit = 2 colours (B&W), 8-bit = 256 colours (grayscale/palette), 24-bit = ~16.7 million colours (true colour RGB). More colour depth = richer colour, bigger files.\n\n**File size** = width × height × colour depth ÷ 8 bytes (uncompressed).",
          },
          {
            heading: "File size and compression",
            body: "Uncompressed size grows fast: a 24-bit 1920×1080 image ≈ 6.2 MB. **Compression** reduces size: lossless (PNG, TIFF — no quality loss) or lossy (JPEG — discards detail).\n\n**Anti-aliasing** smooths jagged edges by blending edge pixels. Screen images need ~72-96 ppi; print needs 300 dpi for quality.",
          },
        ],
        keyFormulas: [
          { name: "File size", statement: "size (bytes) = width × height × bits per pixel ÷ 8" },
          { name: "Colour depth", statement: "8-bit = 256 colours; 24-bit ≈ 16.7 million" },
          { name: "Print resolution", statement: "≈ 300 dpi for quality printing" },
        ],
        workedExample: {
          problem: "Calculate the uncompressed file size of a 800×600 image at 24-bit colour depth.",
          solution: "800 × 600 × 24 ÷ 8 = 11,520,000 ÷ 8 = 1,440,000 bytes ≈ 1.44 MB.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u9-l1-resdepth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many colours can an 8-bit colour depth represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "16"
                    },
                    {
                              "id": "c",
                              "text": "256"
                    },
                    {
                              "id": "d",
                              "text": "16,777,216"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Colours",
                              "statement": "2^bits = number of colours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2^8 = 256 colours.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** 256"
},
        },
        {
          id: "edxbtecit-u9-l1-resdepth-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the formula for uncompressed bitmap file size.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "File size",
                              "statement": "width × height × bits per pixel ÷ 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Width × height × colour depth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divide by 8 to get bytes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "width × height × bits per pixel ÷ 8 bytes"
},
        },
        {
          id: "edxbtecit-u9-l1-resdepth-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a 24-bit image produces a much larger file than an 8-bit image of the same dimensions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Colour depth vs size",
                              "statement": "3× the bits per pixel = 3× the data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each pixel stores 24 bits vs 8 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "File size is proportional to bits per pixel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "So 24-bit ≈ 3× the file size of 8-bit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3× bits per pixel → ~3× file size"
},
        },
        {
          id: "edxbtecit-u9-l1-resdepth-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Calculate the uncompressed file size in MB of a 1920×1080 image at 24-bit colour depth. Show all working.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "file size",
                              "answer": 6.22,
                              "tolerance": 0.05,
                              "unit": "MB"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "File size",
                              "statement": "w × h × bpp ÷ 8 bytes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1920 × 1080 = 2,073,600 pixels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "× 24 = 49,766,400 bits; ÷ 8 = 6,220,800 bytes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "÷ 1,048,576 ≈ 5.93 MB (or ÷ 1,000,000 ≈ 6.22 MB).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer ≈ 6.2 MB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "≈ 6.22 MB",
          "commonErrors": [
                    "Using 8 instead of 24 bits per pixel.",
                    "Not dividing by 8."
          ]
},
        },
        {
          id: "edxbtecit-u9-l1-resdepth-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define resolution and colour depth.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "How many colours does 24-bit colour depth give?",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State the recommended resolution for quality printing.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Explain what anti-aliasing does.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Image properties",
                              "statement": "Resolution, depth, anti-aliasing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Resolution = pixel count/density; colour depth = bits per pixel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined accurately.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "2^24 ≈ 16.7 million colours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "About 300 dpi.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Blends edge pixels with background to smooth jagged edges.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Resolution/depth definitions; 16.7M colours; 300 dpi; anti-aliasing smooths edges"
},
        },
        {
          id: "edxbtecit-u9-l1-resdepth-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define resolution and colour depth. (b) State the file size formula. (c) How many colours does 8-bit depth give? (d) Calculate the file size of a 640×480 image at 24-bit. (e) Explain the difference between lossless and lossy compression. (f) Why is 300 dpi needed for print?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define resolution and colour depth.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "File size formula.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Colours in 8-bit.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "640×480 at 24-bit file size.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Lossless vs lossy.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Why 300 dpi for print.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Image metrics",
                              "statement": "Size = w × h × bpp ÷ 8; compression trade-offs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Resolution = pixel count/density; colour depth = bits per pixel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "w × h × bpp ÷ 8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "2^8 = 256.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "640×480×24÷8 = 921,600 bytes ≈ 0.92 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Lossless keeps all data; lossy discards detail for smaller size.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "High density prevents visible pixels at print sizes.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Image metrics, file size 0.92 MB, compression and print resolution."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u9-n101-notes",
      title: "Graphics 9-1 — notes",
      summary: "Bitmap = pixels for photos; vector = shapes for scalable graphics. File size = w × h × bpp ÷ 8.",
      sections: [
        { heading: "Key idea", body: "Match graphic type to content: photos → bitmap, logos/diagrams → vector." },
        { heading: "Formula", body: "size bytes = width × height × bits per pixel ÷ 8." },
        { heading: "Remember", body: "24-bit ≈ 16.7 million colours; print ≈ 300 dpi." },
      ],
    },
  ],
};
