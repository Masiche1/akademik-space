module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "edxbtecit-u9-lesson-9-1", code: "9-1",
      title: "Bitmap, Vector and Image Properties",
      goal: "I CAN distinguish bitmap and vector graphics and calculate image file sizes from resolution and colour depth.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Digital Graphics and Multimedia",
        "Raster/vector graphics, resolution, colour depth, file size",
      ],
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
          id: "edxbtecit-u9-l1-bitvvec", title: "Bitmap versus vector graphics",
          skill: "Compare bitmap and vector graphics and select the appropriate type for a given task.",
          sections: [
            { heading: "Bitmap (raster) images", body: "A bitmap stores an image as a grid of pixels, each with a colour value. Common formats: JPEG, PNG, GIF, TIFF. Great for photographs and complex tonal images.\n\n**Advantages**: realistic detail, millions of colours, easy photo editing. **Disadvantages**: scaling up causes pixelation/blurring; file size grows with resolution and colour depth; editing is destructive to pixels." },
            { heading: "Vector graphics", body: "Vector images store mathematical descriptions — points, lines, curves and fills — rendered at any size. Formats: SVG, AI, EPS.\n\n**Advantages**: infinite scalability without quality loss, tiny file sizes for simple graphics, easy to edit shapes, text stays sharp. **Disadvantages**: poor for photographic detail; not all software supports all formats; complex gradients can be slow to render.\n\n**Rule of thumb**: photos → bitmap; logos, icons, diagrams, text → vector." },
          ],
          keyFormulas: [
            { name: "Bitmap scaling", statement: "Enlarge → pixels stretch → pixelation" },
            { name: "Vector scaling", statement: "Shapes re-rendered → no quality loss" },
          ],
          workedExample: {
            problem: "A designer must create a company logo that will appear on a business card and a 10-metre billboard. Which graphic type is suitable and why?",
            solution: "Vector graphics — the logo scales from card to billboard without pixelation and keeps a small file size.",
          },
          questions: [
            {
              id: "edxbtecit-u9-l1-bitvvec-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which graphic type is best for a photograph?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Vector" }, { id: "b", text: "Bitmap" }, { id: "c", text: "SVG" }, { id: "d", text: "EPS" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bitmap", statement: "Pixel grid suited to photographic detail." }],
                steps: [{ reasoning: "Photos need pixel-level colour detail = bitmap.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Bitmap",
              },
            },
            {
              id: "edxbtecit-u9-l1-bitvvec-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State one advantage and one disadvantage of vector graphics.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Vector trade-offs", statement: "Scalable vs poor photo detail." }],
                steps: [
                  { reasoning: "Advantage: scales to any size without quality loss.", marks: 1, markCode: "M" },
                  { reasoning: "Disadvantage: unsuitable for photographic detail.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Scalable; poor for photos",
              },
            },
            {
              id: "edxbtecit-u9-l1-bitvvec-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why enlarging a bitmap image causes pixelation while a vector image stays sharp.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Scaling behaviour", statement: "Pixels stretch; vector shapes re-render." }],
                steps: [
                  { reasoning: "Bitmap: fixed pixels are stretched to fill space → visible blocks.", marks: 1, markCode: "M" },
                  { reasoning: "Vector: mathematical shapes are re-rendered at the new size.", marks: 1, markCode: "M" },
                  { reasoning: "Hence vectors stay sharp at any scale.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Bitmap pixels stretch; vector shapes re-render",
              },
            },
            {
              id: "edxbtecit-u9-l1-bitvvec-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A client needs an image for a website banner AND a printed poster. Recommend a graphic type for each and justify your choices.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Choosing graphic type", statement: "Match type to content and scaling needs." }],
                steps: [
                  { reasoning: "Poster needs large-scale printing — vector avoids pixelation.", marks: 1, markCode: "M" },
                  { reasoning: "If banner is photographic, bitmap at sufficient resolution.", marks: 1, markCode: "M" },
                  { reasoning: "If banner is logo/text-based, vector works for both.", marks: 1, markCode: "M" },
                  { reasoning: "Justification linked to resolution/scaling needs.", marks: 1, markCode: "A" },
                  { reasoning: "Consistent recommendation across both uses.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Vector for scalable logo/poster; bitmap for photos at adequate resolution",
              },
            },
            {
              id: "edxbtecit-u9-l1-bitvvec-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define bitmap and vector graphics.", marks: 2 },
                { label: "b", prompt: "Name two bitmap formats and two vector formats.", marks: 2 },
                { label: "c", prompt: "Give one task suited to each type.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Graphic types", statement: "Pixel grid vs mathematical shapes." }],
                steps: [
                  { part: "a", reasoning: "Bitmap = pixel grid; vector = mathematical shapes.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined accurately.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Bitmap: JPEG/PNG/GIF; vector: SVG/AI/EPS.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "At least two of each correctly named.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Bitmap: photo editing; vector: logos/icons.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Tasks correctly matched.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Bitmap=pixels (JPEG/PNG), vector=shapes (SVG/AI); photos vs logos",
              },
            },
            {
              id: "edxbtecit-u9-l1-bitvvec-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define bitmap and vector graphics. (b) State two advantages of bitmap graphics. (c) State two advantages of vector graphics. (d) Name two bitmap and two vector file formats. (e) Explain why a logo should be vector. (f) Explain when a bitmap is essential.",
              parts: [
                { label: "a", prompt: "Define both types.", marks: 2 },
                { label: "b", prompt: "Two bitmap advantages.", marks: 2 },
                { label: "c", prompt: "Two vector advantages.", marks: 2 },
                { label: "d", prompt: "Formats for each type.", marks: 1 },
                { label: "e", prompt: "Why logos should be vector.", marks: 2 },
                { label: "f", prompt: "When bitmap is essential.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bitmap vs vector", statement: "Pixel detail vs scalable shapes." }],
                steps: [
                  { part: "a", reasoning: "Bitmap = pixel grid; vector = mathematical shapes.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Realistic photos; millions of colours.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Second advantage: easy pixel-level editing.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Infinite scaling; tiny file sizes.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Second advantage: easy shape editing/text stays sharp.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "JPEG/PNG bitmap; SVG/AI vector.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Scales to any size; small file; editable shapes.", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "Photographs and complex tonal images.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Bitmap vs vector trade-offs and appropriate uses.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u9-l1-resdepth", title: "Resolution, colour depth and file size",
          skill: "Calculate bitmap file size from dimensions and colour depth and relate resolution to output quality.",
          sections: [
            { heading: "Resolution and colour depth", body: "**Resolution** = pixel dimensions (e.g. 1920×1080) or density (ppi for screens, dpi for print). Higher resolution = more detail but larger files.\n\n**Colour depth** = bits per pixel: 1-bit = 2 colours (B&W), 8-bit = 256 colours (grayscale/palette), 24-bit = ~16.7 million colours (true colour RGB). More colour depth = richer colour, bigger files.\n\n**File size** = width × height × colour depth ÷ 8 bytes (uncompressed)." },
            { heading: "File size and compression", body: "Uncompressed size grows fast: a 24-bit 1920×1080 image ≈ 6.2 MB. **Compression** reduces size: lossless (PNG, TIFF — no quality loss) or lossy (JPEG — discards detail).\n\n**Anti-aliasing** smooths jagged edges by blending edge pixels. Screen images need ~72-96 ppi; print needs 300 dpi for quality." },
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
          questions: [
            {
              id: "edxbtecit-u9-l1-resdepth-q1", difficulty: "foundation", totalMarks: 1,
              stem: "How many colours can an 8-bit colour depth represent?",
              response: { type: "mcq", choices: [
                { id: "a", text: "2" }, { id: "b", text: "16" }, { id: "c", text: "256" }, { id: "d", text: "16,777,216" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "formula", name: "Colours", statement: "2^bits = number of colours." }],
                steps: [{ reasoning: "2^8 = 256 colours.", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** 256",
              },
            },
            {
              id: "edxbtecit-u9-l1-resdepth-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the formula for uncompressed bitmap file size.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "File size", statement: "width × height × bits per pixel ÷ 8." }],
                steps: [
                  { reasoning: "Width × height × colour depth.", marks: 1, markCode: "M" },
                  { reasoning: "Divide by 8 to get bytes.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "width × height × bits per pixel ÷ 8 bytes",
              },
            },
            {
              id: "edxbtecit-u9-l1-resdepth-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why a 24-bit image produces a much larger file than an 8-bit image of the same dimensions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Colour depth vs size", statement: "3× the bits per pixel = 3× the data." }],
                steps: [
                  { reasoning: "Each pixel stores 24 bits vs 8 bits.", marks: 1, markCode: "M" },
                  { reasoning: "File size is proportional to bits per pixel.", marks: 1, markCode: "M" },
                  { reasoning: "So 24-bit ≈ 3× the file size of 8-bit.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "3× bits per pixel → ~3× file size",
              },
            },
            {
              id: "edxbtecit-u9-l1-resdepth-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Calculate the uncompressed file size in MB of a 1920×1080 image at 24-bit colour depth. Show all working.",
              response: { type: "numeric", parts: [
                { label: "file size", answer: 6.22, tolerance: 0.05, unit: "MB" },
              ]},
              markscheme: {
                principles: [{ kind: "formula", name: "File size", statement: "w × h × bpp ÷ 8 bytes." }],
                steps: [
                  { reasoning: "1920 × 1080 = 2,073,600 pixels.", marks: 1, markCode: "M" },
                  { reasoning: "× 24 = 49,766,400 bits; ÷ 8 = 6,220,800 bytes.", marks: 2, markCode: "M" },
                  { reasoning: "÷ 1,048,576 ≈ 5.93 MB (or ÷ 1,000,000 ≈ 6.22 MB).", marks: 1, markCode: "M" },
                  { reasoning: "Answer ≈ 6.2 MB.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "≈ 6.22 MB",
                commonErrors: ["Using 8 instead of 24 bits per pixel.", "Not dividing by 8."],
              },
            },
            {
              id: "edxbtecit-u9-l1-resdepth-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define resolution and colour depth.", marks: 2 },
                { label: "b", prompt: "How many colours does 24-bit colour depth give?", marks: 1 },
                { label: "c", prompt: "State the recommended resolution for quality printing.", marks: 1 },
                { label: "d", prompt: "Explain what anti-aliasing does.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Image properties", statement: "Resolution, depth, anti-aliasing." }],
                steps: [
                  { part: "a", reasoning: "Resolution = pixel count/density; colour depth = bits per pixel.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined accurately.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "2^24 ≈ 16.7 million colours.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "About 300 dpi.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Blends edge pixels with background to smooth jagged edges.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Resolution/depth definitions; 16.7M colours; 300 dpi; anti-aliasing smooths edges",
              },
            },
            {
              id: "edxbtecit-u9-l1-resdepth-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define resolution and colour depth. (b) State the file size formula. (c) How many colours does 8-bit depth give? (d) Calculate the file size of a 640×480 image at 24-bit. (e) Explain the difference between lossless and lossy compression. (f) Why is 300 dpi needed for print?",
              parts: [
                { label: "a", prompt: "Define resolution and colour depth.", marks: 2 },
                { label: "b", prompt: "File size formula.", marks: 1 },
                { label: "c", prompt: "Colours in 8-bit.", marks: 1 },
                { label: "d", prompt: "640×480 at 24-bit file size.", marks: 2 },
                { label: "e", prompt: "Lossless vs lossy.", marks: 2 },
                { label: "f", prompt: "Why 300 dpi for print.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Image metrics", statement: "Size = w × h × bpp ÷ 8; compression trade-offs." }],
                steps: [
                  { part: "a", reasoning: "Resolution = pixel count/density; colour depth = bits per pixel.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "w × h × bpp ÷ 8.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "2^8 = 256.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "640×480×24÷8 = 921,600 bytes ≈ 0.92 MB.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Correct value.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "Lossless keeps all data; lossy discards detail for smaller size.", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "High density prevents visible pixels at print sizes.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Image metrics, file size 0.92 MB, compression and print resolution.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u9-n101-notes", title: "Graphics 9-1 — notes",
      summary: "Bitmap = pixels for photos; vector = shapes for scalable graphics. File size = w × h × bpp ÷ 8.",
      sections: [
        { heading: "Key idea", body: "Match graphic type to content: photos → bitmap, logos/diagrams → vector." },
        { heading: "Formula", body: "size bytes = width × height × bits per pixel ÷ 8." },
        { heading: "Remember", body: "24-bit ≈ 16.7 million colours; print ≈ 300 dpi." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "edxbtecit-u9-lesson-9-2", code: "9-2",
      title: "Colour, Design Principles and Page Layout",
      goal: "I CAN apply colour theory, design principles and typography to create clear, accessible layouts.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Digital Graphics and Multimedia",
        "Colour theory, composition principles, typography and accessibility",
      ],
      vocabulary: [
        { term: "Colour wheel", definition: "Circle showing relationships between colours: primary, secondary, tertiary." },
        { term: "Complementary colours", definition: "Colours opposite on the wheel — maximum contrast." },
        { term: "Analogous colours", definition: "Colours adjacent on the wheel — harmonious schemes." },
        { term: "Hierarchy", definition: "Visual ordering guiding the viewer's eye to important content first." },
        { term: "Leading", definition: "Vertical spacing between lines of text." },
        { term: "Kerning", definition: "Adjusting space between individual letter pairs." },
        { term: "Contrast ratio", definition: "Luminance difference between text and background; accessibility measure." },
      ],
      concepts: [
        {
          id: "edxbtecit-u9-l2-colour", title: "Colour theory and composition",
          skill: "Apply colour schemes, contrast and balance principles to create effective designs.",
          sections: [
            { heading: "Colour theory", body: "**Primary colours**: red, yellow, blue. **Secondary**: green, orange, purple (mixing primaries). **Tertiary**: mixes of primary + secondary. The **colour wheel** arranges them.\n\n**Schemes**: complementary (opposite — high contrast, e.g. blue/orange), analogous (adjacent — harmonious), triadic (three equidistant), monochromatic (shades of one hue). Colour carries meaning: red = danger/energy, blue = trust/calm, green = growth/success.\n\nColour models: **RGB** for screens (additive light), **CMYK** for print (subtractive ink)." },
            { heading: "Composition principles", body: "**Balance**: symmetrical (formal) or asymmetrical (dynamic). **Contrast**: differences in size/colour/shape create emphasis. **Alignment**: elements share edges or axes for order. **Proximity**: related items grouped together. **Hierarchy**: size, colour and position guide attention — most important largest/boldest.\n\n**Rule of thirds**: place focal points at grid intersections. **Whitespace** (negative space) improves readability and focus." },
          ],
          keyFormulas: [
            { name: "Colour schemes", statement: "Complementary = opposite; analogous = adjacent; triadic = equidistant" },
            { name: "Models", statement: "RGB = screens (additive); CMYK = print (subtractive)" },
            { name: "Principles", statement: "Balance, contrast, alignment, proximity, hierarchy" },
          ],
          workedExample: {
            problem: "Design a poster for a charity fun run using a blue and orange scheme. Justify the colour choice and layout principles used.",
            solution: "Blue/orange are complementary — high contrast makes the event name pop. Large bold title at top (hierarchy), event details grouped below (proximity), generous whitespace, balanced layout.",
          },
          questions: [
            {
              id: "edxbtecit-u9-l2-colour-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which colours are opposite each other on the colour wheel?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Red and blue" }, { id: "b", text: "Red and green" }, { id: "c", text: "Blue and yellow" }, { id: "d", text: "Green and purple" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Complementary colours", statement: "Opposite on the wheel: red/green, blue/orange, yellow/purple." }],
                steps: [{ reasoning: "Red and green are complementary (opposite on the wheel).", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Red and green",
                commonErrors: ["Confusing primary pairs with complementary pairs."],
              },
            },
            {
              id: "edxbtecit-u9-l2-colour-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the difference between RGB and CMYK colour models.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "RGB vs CMYK", statement: "Additive light for screens vs subtractive ink for print." }],
                steps: [
                  { reasoning: "RGB = red/green/blue light, additive, for screens.", marks: 1, markCode: "M" },
                  { reasoning: "CMYK = cyan/magenta/yellow/black ink, subtractive, for print.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "RGB for screens; CMYK for print",
              },
            },
            {
              id: "edxbtecit-u9-l2-colour-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how the principle of visual hierarchy helps a reader navigate a webpage.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Visual hierarchy", statement: "Size, colour and position guide attention to important content." }],
                steps: [
                  { reasoning: "Larger/bolder elements attract the eye first.", marks: 1, markCode: "M" },
                  { reasoning: "Colour and contrast highlight key actions (e.g. buttons).", marks: 1, markCode: "M" },
                  { reasoning: "Readers scan headings before details — reduces cognitive load.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Hierarchy orders attention: headings/buttons first via size, colour, position",
              },
            },
            {
              id: "edxbtecit-u9-l2-colour-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A poster uses pale yellow text on a white background. Identify two problems and suggest improvements using colour and contrast principles.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Contrast", statement: "Low contrast harms readability and accessibility." }],
                steps: [
                  { reasoning: "Problem: insufficient contrast — text nearly invisible.", marks: 1, markCode: "M" },
                  { reasoning: "Fails accessibility standards for visually impaired users.", marks: 1, markCode: "M" },
                  { reasoning: "Fix: dark text on light background or vice versa.", marks: 1, markCode: "M" },
                  { reasoning: "Or add a dark panel behind text.", marks: 1, markCode: "A" },
                  { reasoning: "Justified using contrast principle.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Low contrast = unreadable; use dark-on-light or panel behind text",
              },
            },
            {
              id: "edxbtecit-u9-l2-colour-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the three primary colours.", marks: 1 },
                { label: "b", prompt: "Define complementary colours and give one pair.", marks: 2 },
                { label: "c", prompt: "Explain two benefits of whitespace in a layout.", marks: 2 },
                { label: "d", prompt: "State the difference between symmetrical and asymmetrical balance.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Colour and layout", statement: "Schemes, whitespace, balance." }],
                steps: [
                  { part: "a", reasoning: "Red, yellow, blue.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Opposite on wheel = max contrast.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Pair: e.g. blue/orange.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Improves readability and separates elements.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Creates visual focus and reduces clutter.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Symmetrical = mirror balance; asymmetrical = different but equal visual weight.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Primaries; complementary pairs; whitespace benefits; balance types",
              },
            },
            {
              id: "edxbtecit-u9-l2-colour-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the primary colours. (b) Define complementary and analogous colour schemes. (c) State the difference between RGB and CMYK. (d) Name three composition principles. (e) Explain what visual hierarchy is. (f) Give one reason whitespace improves design.",
              parts: [
                { label: "a", prompt: "Primary colours.", marks: 1 },
                { label: "b", prompt: "Complementary vs analogous.", marks: 2 },
                { label: "c", prompt: "RGB vs CMYK.", marks: 2 },
                { label: "d", prompt: "Three composition principles.", marks: 1 },
                { label: "e", prompt: "What is visual hierarchy.", marks: 3 },
                { label: "f", prompt: "One whitespace benefit.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Colour and composition", statement: "Schemes, models, layout principles." }],
                steps: [
                  { part: "a", reasoning: "Red, yellow, blue.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Complementary = opposite; analogous = adjacent.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Both schemes defined.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "RGB additive screens; CMYK subtractive print.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Both models distinguished.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Balance, contrast, alignment, proximity, hierarchy.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Ordering of elements by importance.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Achieved via size, colour, position.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Guides the viewer's eye.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Improves readability/reduces clutter.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Colour schemes, models, composition principles and hierarchy.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u9-l2-typo", title: "Typography and page layout",
          skill: "Select typefaces and spacing and apply alignment and grid principles for readable layouts.",
          sections: [
            { heading: "Typography", body: "**Typeface** categories: serif (Times — formal, print body text), sans-serif (Arial — clean, screens), script/display (decorative — headings only).\n\n**Anatomy**: x-height, ascenders, descenders, baseline. **Kerning** adjusts space between letter pairs; **tracking** adjusts space across a word/line; **leading** adjusts line spacing (≈ 120-150% of font size for readability).\n\n**Rules**: limit to 2-3 typefaces; body text ≥ 12pt/16px; avoid ALL CAPS for long text; align left for body text (easier scanning)." },
            { heading: "Layout and grids", body: "**Alignment**: left (default for text), centre (titles), right (numbers). **Grids**: column grids organise content consistently — e.g. 12-column web grids. **Margins and gutters** provide breathing space.\n\n**Golden ratio / rule of thirds** guide focal placement. **Focal point**: one dominant element per view. **Accessibility**: minimum contrast ratios (WCAG), readable font sizes, alt text for images, keyboard navigability." },
          ],
          keyFormulas: [
            { name: "Leading", statement: "Line spacing ≈ 120-150% of font size" },
            { name: "Typefaces", statement: "2-3 max; serif=print, sans-serif=screens" },
            { name: "Grid", statement: "Columns + gutters organise layout" },
          ],
          workedExample: {
            problem: "Choose suitable typography for a school newsletter and a gaming poster.",
            solution: "Newsletter: sans-serif body (Arial) 12pt, 1.4 leading, left-aligned, two columns. Poster: bold display typeface for the title, high contrast, centred hierarchy.",
          },
          questions: [
            {
              id: "edxbtecit-u9-l2-typo-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is kerning?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Line spacing" }, { id: "b", text: "Space between letter pairs" }, { id: "c", text: "Font size" }, { id: "d", text: "Text alignment" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Kerning", statement: "Adjusting space between individual letter pairs." }],
                steps: [{ reasoning: "Kerning = letter-pair spacing.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Space between letter pairs",
              },
            },
            {
              id: "edxbtecit-u9-l2-typo-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Distinguish between serif and sans-serif typefaces with an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Serif vs sans-serif", statement: "Decorative strokes vs clean strokes." }],
                steps: [
                  { reasoning: "Serif has small strokes at letter ends (e.g. Times).", marks: 1, markCode: "M" },
                  { reasoning: "Sans-serif has no strokes (e.g. Arial).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Serif = strokes (Times); sans-serif = clean (Arial)",
              },
            },
            {
              id: "edxbtecit-u9-l2-typo-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why body text should be left-aligned rather than justified or centred.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Text alignment", statement: "Consistent left edge aids scanning." }],
                steps: [
                  { reasoning: "Left alignment gives a consistent starting edge for each line.", marks: 1, markCode: "M" },
                  { reasoning: "Justified text creates uneven word spacing ('rivers').", marks: 1, markCode: "M" },
                  { reasoning: "Centred text makes finding line starts harder — poor for long text.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Left alignment = consistent edge, easier scanning",
              },
            },
            {
              id: "edxbtecit-u9-l2-typo-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A webpage uses 10px grey text on a light grey background. Identify the accessibility problems and recommend fixes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Accessibility", statement: "Sufficient size, contrast and readability required." }],
                steps: [
                  { reasoning: "10px is too small to read comfortably.", marks: 1, markCode: "M" },
                  { reasoning: "Grey on light grey = very low contrast.", marks: 1, markCode: "M" },
                  { reasoning: "Fails WCAG contrast requirements for many users.", marks: 1, markCode: "M" },
                  { reasoning: "Fix: ≥16px and dark text on light background.", marks: 1, markCode: "A" },
                  { reasoning: "Also benefits low-vision users.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Too small + low contrast; use ≥16px dark-on-light",
              },
            },
            {
              id: "edxbtecit-u9-l2-typo-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define leading and kerning.", marks: 2 },
                { label: "b", prompt: "Why limit a design to 2-3 typefaces?", marks: 2 },
                { label: "c", prompt: "State two benefits of using a grid layout.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Typography and grids", statement: "Spacing terms and layout structure." }],
                steps: [
                  { part: "a", reasoning: "Leading = line spacing; kerning = letter-pair spacing.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined correctly.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Too many fonts look cluttered/unprofessional.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Consistency improves readability and brand identity.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Aligns elements consistently across pages.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Speeds up design and keeps layout predictable.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Leading/kerning defs; font limits for consistency; grids align content",
              },
            },
            {
              id: "edxbtecit-u9-l2-typo-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define serif and sans-serif typefaces. (b) State what kerning and leading control. (c) Name two rules for readable body text. (d) Explain why a grid improves page layout. (e) State two accessibility requirements for text. (f) When is a display typeface appropriate?",
              parts: [
                { label: "a", prompt: "Serif vs sans-serif.", marks: 2 },
                { label: "b", prompt: "Kerning and leading.", marks: 2 },
                { label: "c", prompt: "Two body-text rules.", marks: 2 },
                { label: "d", prompt: "Grid benefit.", marks: 2 },
                { label: "e", prompt: "Two accessibility requirements.", marks: 1 },
                { label: "f", prompt: "When display typeface fits.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Typography and layout", statement: "Typeface choice, spacing, grids, accessibility." }],
                steps: [
                  { part: "a", reasoning: "Serif = strokes at letter ends; sans-serif = clean.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Kerning = letter pairs; leading = line spacing.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Both defined.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Rules: ≥12pt, left-align, limited typefaces, adequate contrast.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Grids align elements and create consistent structure.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Sufficient contrast and readable font size.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "For headings/titles only — not body text.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Typography rules, grid layout and accessibility requirements.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u9-n102-notes", title: "Graphics 9-2 — notes",
      summary: "Complementary colours contrast; RGB screens/CMYK print; hierarchy via size+colour; left-align body text; grids organise layout.",
      sections: [
        { heading: "Key idea", body: "Design principles serve communication: guide the eye, ensure readability, meet accessibility." },
        { heading: "Colour", body: "Opposite wheel colours = contrast; adjacent = harmony." },
        { heading: "Typography", body: "2-3 typefaces max; kerning = letters, leading = lines." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "edxbtecit-u9-lesson-9-3", code: "9-3",
      title: "Audio and Video Authoring",
      goal: "I CAN explain digital audio sampling, video parameters and the tools used to author multimedia products.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Digital Graphics and Multimedia",
        "Digital audio, digital video and multimedia authoring",
      ],
      vocabulary: [
        { term: "Sampling", definition: "Measuring sound amplitude at regular intervals to digitise audio." },
        { term: "Sample rate", definition: "Number of samples taken per second, measured in Hz/kHz." },
        { term: "Bit depth", definition: "Number of bits per audio sample — determines dynamic range." },
        { term: "Bitrate", definition: "Amount of data used per second of audio or video, in bits per second." },
        { term: "Codec", definition: "Coder-decoder — algorithm compressing and decompressing media." },
        { term: "Frame rate", definition: "Number of video frames displayed per second (fps)." },
        { term: "Container format", definition: "File wrapper holding compressed media streams, e.g. MP4." },
      ],
      concepts: [
        {
          id: "edxbtecit-u9-l3-audio", title: "Digital audio",
          skill: "Explain audio sampling and calculate uncompressed audio file sizes and bitrates.",
          sections: [
            { heading: "Digitising sound", body: "Sound is analogue — a continuous wave. **Sampling** measures amplitude at regular intervals (**sample rate**, e.g. 44.1 kHz CD quality). **Bit depth** stores each sample's precision (16-bit CD standard).\n\n**File size** = sample rate × bit depth × channels × duration ÷ 8 bytes. Stereo = 2 channels. **Dynamic range** = difference between quietest and loudest sounds captured — higher bit depth = better range.\n\n**Bitrate** = bits per second. **Lossy** compression (MP3, AAC) discards imperceptible detail for small files; **lossless** (WAV, FLAC) keeps everything. CD ≈ 1,411 kbps; MP3 ≈ 128-320 kbps." },
            { heading: "Audio editing", body: "Editing operations: trim, fade in/out, normalise (peak to a target level), equalisation (adjust frequencies), noise reduction, mixing multiple tracks.\n\nFormats: WAV (uncompressed), MP3/AAC (lossy), FLAC (lossless compressed). Choose based on quality needs vs file size." },
          ],
          keyFormulas: [
            { name: "Audio file size", statement: "size (bytes) = sample rate × bit depth × channels × seconds ÷ 8" },
            { name: "CD quality", statement: "44.1 kHz, 16-bit, stereo ≈ 10.1 MB per minute" },
            { name: "Bitrate", statement: "bits per second of audio" },
          ],
          workedExample: {
            problem: "Calculate the size of a 3-minute stereo recording at 44.1 kHz, 16-bit.",
            solution: "44,100 × 16 × 2 × 180 ÷ 8 = 44,100 × 16 × 2 × 180 = 254,016,000 bits ÷ 8 = 31,752,000 bytes ≈ 30.3 MB.",
          },
          questions: [
            {
              id: "edxbtecit-u9-l3-audio-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does sample rate measure?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Bits per sample" }, { id: "b", text: "Samples taken per second" }, { id: "c", text: "File size" }, { id: "d", text: "Volume level" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sample rate", statement: "Number of amplitude measurements per second." }],
                steps: [{ reasoning: "Sample rate = samples per second.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Samples per second",
              },
            },
            {
              id: "edxbtecit-u9-l3-audio-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the difference between bit depth and sample rate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bit depth vs rate", statement: "Precision per sample vs samples per second." }],
                steps: [
                  { reasoning: "Bit depth = bits per sample (precision/dynamic range).", marks: 1, markCode: "M" },
                  { reasoning: "Sample rate = samples per second (frequency range).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Bit depth = precision per sample; rate = samples/sec",
              },
            },
            {
              id: "edxbtecit-u9-l3-audio-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why MP3 files are much smaller than WAV files of the same recording.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Lossy compression", statement: "MP3 discards less-noticeable audio detail." }],
                steps: [
                  { reasoning: "WAV stores every sample uncompressed.", marks: 1, markCode: "M" },
                  { reasoning: "MP3 uses lossy compression removing imperceptible frequencies.", marks: 1, markCode: "M" },
                  { reasoning: "Result: much smaller files with minor quality loss.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "MP3 = lossy compression discards detail; WAV = uncompressed",
              },
            },
            {
              id: "edxbtecit-u9-l3-audio-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Calculate the file size of a 60-second mono recording at 22.05 kHz, 8-bit. Show working.",
              response: { type: "numeric", parts: [
                { label: "file size", answer: 132300, tolerance: 10, unit: "bytes" },
              ]},
              markscheme: {
                principles: [{ kind: "formula", name: "Audio size", statement: "rate × depth × channels × seconds ÷ 8." }],
                steps: [
                  { reasoning: "22,050 × 8 × 1 × 60 = 10,584,000 bits.", marks: 2, markCode: "M" },
                  { reasoning: "÷ 8 = 1,323,000 bytes.", marks: 2, markCode: "M" },
                  { reasoning: "≈ 1.26 MB.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "1,323,000 bytes ≈ 1.26 MB",
                commonErrors: ["Using 44.1 kHz instead of 22.05 kHz.", "Forgetting ÷8."],
              },
            },
            {
              id: "edxbtecit-u9-l3-audio-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State the CD audio standard parameters.", marks: 2 },
                { label: "b", prompt: "Explain what dynamic range means in audio.", marks: 2 },
                { label: "c", prompt: "Name two common audio editing operations.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Audio parameters", statement: "Rate, depth, dynamic range, editing." }],
                steps: [
                  { part: "a", reasoning: "44.1 kHz sample rate, 16-bit depth, stereo.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Range between quietest and loudest captured sounds.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Higher bit depth = better dynamic range.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Trim, fade, normalise, equalise, mix.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Second operation named.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "CD = 44.1kHz/16-bit/stereo; dynamic range; editing ops",
              },
            },
            {
              id: "edxbtecit-u9-l3-audio-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define sampling and bit depth. (b) State the file size formula for audio. (c) Calculate the size of 30 seconds at 48 kHz, 24-bit, stereo. (d) Explain lossy vs lossless compression. (e) Name two audio formats and their typical use. (f) What is bitrate?",
              parts: [
                { label: "a", prompt: "Define sampling and bit depth.", marks: 2 },
                { label: "b", prompt: "File size formula.", marks: 1 },
                { label: "c", prompt: "30 s, 48 kHz, 24-bit, stereo size.", marks: 2 },
                { label: "d", prompt: "Lossy vs lossless.", marks: 2 },
                { label: "e", prompt: "Two formats and uses.", marks: 2 },
                { label: "f", prompt: "Define bitrate.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Digital audio", statement: "Sampling, depth, size, compression." }],
                steps: [
                  { part: "a", reasoning: "Sampling = amplitude measurements/sec; bit depth = bits per sample.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "rate × depth × channels × seconds ÷ 8.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "48,000 × 24 × 2 × 30 ÷ 8 = 8,640,000 bytes ≈ 8.24 MB.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Correct value.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Lossy discards detail (MP3); lossless keeps all (WAV/FLAC).", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "WAV uncompressed/mastering; MP3 distribution.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Second format with use.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Bits of data per second.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Audio digitisation, size ≈ 8.24 MB, compression and formats.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u9-l3-video", title: "Digital video and multimedia authoring",
          skill: "Explain video parameters (fps, resolution, bitrate) and describe authoring tools for multimedia products.",
          sections: [
            { heading: "Digital video", body: "Video = sequence of still frames played fast. **Frame rate** (fps): 24 = film, 25/30 = TV, 60 = smooth action. Higher fps = smoother motion, bigger files. **Resolution**: 720p, 1080p, 4K — more pixels = more detail, bigger files.\n\n**Codecs** compress video: H.264 (standard), H.265/HEVC (better compression), VP9, AV1. **Container** formats (MP4, MKV, MOV) wrap compressed streams with audio/subtitles. **Bitrate** controls quality vs size — higher = better quality, larger file." },
            { heading: "Multimedia authoring", body: "Authoring tools combine media: **presentation software** (slideshows), **video editors** (Premiere, DaVinci, iMovie), **audio editors** (Audacity), **animation tools**, **interactive authoring** (e-learning, games).\n\nAuthoring workflow: plan → gather/create assets → edit → add interactivity (buttons, hyperlinks, quizzes) → test → publish. Consider audience, purpose, platform constraints and accessibility (captions, alt text)." },
          ],
          keyFormulas: [
            { name: "Frame rate", statement: "24 film, 25/30 TV, 60 action" },
            { name: "Bitrate", statement: "Higher bitrate = better quality, larger file" },
            { name: "Codec vs container", statement: "Codec compresses; container wraps streams" },
          ],
          workedExample: {
            problem: "A 2-minute 1080p video at 24 fps is exported at 5 Mbps. Estimate the file size.",
            solution: "Size = bitrate × duration = 5 Mbit/s × 120 s = 600 Mbit = 75 MB.",
          },
          questions: [
            {
              id: "edxbtecit-u9-l3-video-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does fps measure?",
              response: { type: "mcq", choices: [
                { id: "a", text: "File size" }, { id: "b", text: "Frames per second" }, { id: "c", text: "Colour depth" }, { id: "d", text: "Bitrate" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Frame rate", statement: "Frames displayed per second." }],
                steps: [{ reasoning: "fps = frames per second.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Frames per second",
              },
            },
            {
              id: "edxbtecit-u9-l3-video-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the difference between a codec and a container format?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Codec vs container", statement: "Compression algorithm vs file wrapper." }],
                steps: [
                  { reasoning: "Codec compresses/decompresses the media data.", marks: 1, markCode: "M" },
                  { reasoning: "Container wraps compressed streams (video+audio) in a file, e.g. MP4.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Codec compresses; container packages",
              },
            },
            {
              id: "edxbtecit-u9-l3-video-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why higher bitrate improves video quality but increases file size.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bitrate trade-off", statement: "More bits per second = more detail retained." }],
                steps: [
                  { reasoning: "Higher bitrate allows codec to keep more image detail.", marks: 1, markCode: "M" },
                  { reasoning: "More data per second = larger file.", marks: 1, markCode: "M" },
                  { reasoning: "Trade-off between quality and storage/bandwidth.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "More bits = better quality but bigger files",
              },
            },
            {
              id: "edxbtecit-u9-l3-video-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A 90-second video is encoded at 4 Mbps. Calculate its file size in MB.",
              response: { type: "numeric", parts: [
                { label: "file size", answer: 45, tolerance: 0.5, unit: "MB" },
              ]},
              markscheme: {
                principles: [{ kind: "formula", name: "Video size", statement: "size = bitrate × duration." }],
                steps: [
                  { reasoning: "4 Mbit/s × 90 s = 360 Mbit.", marks: 2, markCode: "M" },
                  { reasoning: "360 ÷ 8 = 45 MB.", marks: 2, markCode: "M" },
                  { reasoning: "Answer in MB.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "45 MB",
                commonErrors: ["Forgetting to convert Mbit to MB (÷8)."],
              },
            },
            {
              id: "edxbtecit-u9-l3-video-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State typical frame rates for film, TV and action video.", marks: 2 },
                { label: "b", prompt: "Name two video codecs and one container format.", marks: 2 },
                { label: "c", prompt: "List three steps in a multimedia authoring workflow.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Video authoring", statement: "fps, codecs, workflow." }],
                steps: [
                  { part: "a", reasoning: "24 film, 25/30 TV, 60 action.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Codecs: H.264/H.265; container: MP4/MKV.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Correct codec and container named.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Plan/gather assets, edit, add interactivity, test, publish.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Third step named.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "fps values; codecs/containers; authoring workflow steps",
              },
            },
            {
              id: "edxbtecit-u9-l3-video-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define frame rate and bitrate. (b) State typical fps for film and TV. (c) Explain codec vs container. (d) Calculate the size of a 120-second video at 6 Mbps. (e) Name two factors that increase video file size. (f) Give two considerations when authoring multimedia for accessibility.",
              parts: [
                { label: "a", prompt: "Define frame rate and bitrate.", marks: 2 },
                { label: "b", prompt: "Film and TV fps.", marks: 1 },
                { label: "c", prompt: "Codec vs container.", marks: 2 },
                { label: "d", prompt: "120 s at 6 Mbps size.", marks: 2 },
                { label: "e", prompt: "Two size factors.", marks: 1 },
                { label: "f", prompt: "Two accessibility considerations.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Video authoring", statement: "fps, bitrate, codecs, accessibility." }],
                steps: [
                  { part: "a", reasoning: "Frame rate = frames/sec; bitrate = bits/sec of data.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "24 film; 25/30 TV.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Codec compresses; container wraps streams.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Both distinguished.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "6 × 120 = 720 Mbit ÷ 8 = 90 MB.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Correct value.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "Higher resolution/fps/bitrate increase size.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Captions/subtitles and alt text/descriptions.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Video parameters, 90 MB size, codecs and accessibility.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u9-n103-notes", title: "Multimedia 9-3 — notes",
      summary: "Audio: rate×depth×channels×time÷8; video: bitrate×time; codec compresses, container wraps.",
      sections: [
        { heading: "Key idea", body: "Higher quality always means more data — balance against file size and bandwidth." },
        { heading: "Formulas", body: "Audio bytes = rate × depth × channels × s ÷ 8; video bytes = bitrate × s ÷ 8." },
        { heading: "Authoring", body: "Plan → assets → edit → interactivity → test → publish; include captions/alt text." },
      ],
    },
  },
];
