import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "cieigcseict-u5-lesson-5-4",
  code: "5-4",
  title: "Digital Media: Graphics, Animation and Sound",
  goal: "I CAN compare vector and raster graphics, explain animation and sound editing.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 5: ICT applications in depth"],
  vocabulary: [
    {
      term: "Raster graphic",
      definition: "Pixel-based image (JPEG, PNG, GIF).",
    },
    {
      term: "Vector graphic",
      definition: "Mathematical object-based image (SVG).",
    },
    { term: "Resolution", definition: "Detail level measured in DPI/PPI." },
    { term: "Frame", definition: "Single image in animation sequence." },
    {
      term: "Frame rate",
      definition: "Frames per second (fps) — affects smoothness.",
    },
    {
      term: "Compression",
      definition: "Reducing file size (lossy vs lossless).",
    },
  ],
  concepts: [
    {
      id: "cieigcseict-u5l4-c1-vector-raster",
      title: "Vector vs raster graphics",
      skill: "Compare vector and raster formats and choose appropriately.",
      lesson: {
        sections: [
          {
            heading: "Raster graphics",
            body: "Made of **pixels** — grid of coloured dots. Formats: JPEG (photos, lossy compression), PNG (transparency, lossless), GIF (animation, limited colours). **Advantages**: rich detail, photos realistic. **Disadvantages**: resolution-dependent (enlarge = pixelated), large files, editing difficult.",
          },
          {
            heading: "Vector graphics",
            body: "Made of **mathematical objects** — lines, curves, shapes defined by coordinates. Formats: SVG, AI, EPS. **Advantages**: scalable without quality loss, small files, easy to edit objects. **Disadvantages**: limited for complex images/photos, requires specialised software. Best for logos, diagrams, illustrations.",
          },
        ],
        keyFormulas: [
          { name: "Raster", statement: "Pixels — resolution-dependent" },
          { name: "Vector", statement: "Objects — scalable" },
          { name: "JPEG", statement: "Lossy photo compression" },
        ],
        workedExample: {
          problem:
            "Which format for a company logo that must work on billboard and business card?",
          solution:
            "Vector (SVG/AI) — scales to any size without pixelation, small file; raster would need separate high-res versions and pixelate when enlarged.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Raster images are made of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vectors" },
              { id: "b", text: "Mathematical objects" },
              { id: "c", text: "Pixels" },
              { id: "d", text: "Curves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Raster", statement: "Pixels." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Pixels",
            commonErrors: ["Vector."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two advantages of vector graphics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Vector adv", statement: "Scalable." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. scalable to any size without quality loss, and smaller file sizes — plus easy object editing; ideal for logos and diagrams.",
            commonErrors: ["Raster advantages."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why enlarging a raster image causes pixelation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pixelation",
                statement: "Resolution limit.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Visual effect.", marks: 1, markCode: "M" },
              { reasoning: "Solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Raster = fixed pixel grid; enlarging stretches pixels beyond natural size — each pixel becomes visible block; solution: higher resolution source or vector format.",
            commonErrors: ["No quality loss."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare JPEG and PNG formats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "JPEG vs PNG",
                statement: "Lossy vs lossless.",
              },
            ],
            steps: [
              { reasoning: "JPEG.", marks: 1, markCode: "M" },
              { reasoning: "PNG.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "JPEG: lossy compression (smaller files, some quality loss), good for photos. PNG: lossless (no quality loss), supports transparency, larger files — good for graphics, screenshots, logos.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse when lossy compression is acceptable versus when lossless is needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compression choice",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Lossy acceptable.", marks: 1, markCode: "M" },
              { reasoning: "Lossless needed.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lossy (JPEG): web photos, email — size matters more than minor quality loss. Lossless (PNG): medical images, graphics with text, repeated editing — quality critical; irreversible data loss unacceptable.",
            commonErrors: ["Always lossless."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'resolution' in digital images?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resolution",
                statement: "Detail level.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Measurement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Amount of detail — measured in DPI (dots per inch) or PPI (pixels per inch); higher resolution = more detail but larger file; affects print quality and screen display.",
            commonErrors: ["File size only."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which format supports transparency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PNG" },
              { id: "b", text: "JPEG" },
              { id: "c", text: "TIFF" },
              { id: "d", text: "BMP" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PNG transparency",
                statement: "Alpha channel.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** PNG",
            commonErrors: ["JPEG."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two situations where vector graphics are better than raster.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Vector uses", statement: "Scalable." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. logos needing multiple sizes (billboard to icon) and technical diagrams needing precise object editing — scalability and editability advantages over raster.",
            commonErrors: ["Photos."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'lossy' versus 'lossless' compression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Lossy vs lossless",
                statement: "Data loss.",
              },
            ],
            steps: [
              { reasoning: "Lossy.", marks: 1, markCode: "M" },
              { reasoning: "Lossless.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lossy: permanently discards data for smaller files (JPEG) — can't recover. Lossless: compresses without data loss (PNG, ZIP) — decompresses to original; quality preserved.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the suitability of SVG for web graphics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SVG eval", statement: "Web vector." },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Scalable, small files, scriptable, resolution-independent — excellent for icons, charts, responsive design; but limited for photos/complex imagery, needs fallback for old browsers; best for simple graphics.",
            commonErrors: ["Universal format."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which image format is best for a company logo that must be resized cleanly from a business card to a billboard?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GIF" },
              { id: "b", text: "SVG" },
              { id: "c", text: "BMP" },
              { id: "d", text: "JPEG" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "SVG", statement: "Scalable vector." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** SVG",
            commonErrors: ["JPEG confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "An uncompressed image is 800 pixels wide and 600 pixels high, using 3 bytes per pixel. Calculate the file size in kilobytes, taking 1 KB = 1000 bytes.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1440, unit: "KB" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Image size",
                statement: "Width × height × bytes per pixel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total pixels = 800 × 600 = 480,000; multiply by 3 bytes = 1,440,000 bytes.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Convert bytes to kilobytes by dividing by 1000.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "1,440,000 / 1000 = 1440 KB.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "1440 KB",
            commonErrors: ["Forgets bytes per pixel."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Lossy compression is most suitable for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photographs where small quality loss is acceptable" },
              { id: "b", text: "Legal documents that must be exact" },
              { id: "c", text: "Icons needing transparency" },
              { id: "d", text: "Medical scans requiring full detail" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Lossy compression",
                statement: "Quality vs size.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Photographs",
            commonErrors: ["Critical data."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many different colours can be represented with an 8-bit colour palette?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 256, unit: "colours" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Colour depth",
                statement: "2^bits = colours.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate 2^8.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "2^8 = 256 colours.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "256 colours",
            commonErrors: ["Answers 8."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A digital photo is 1200 pixels wide and 800 pixels high. It is enlarged to 200% of its original size in each dimension. Calculate the new width and the new height in pixels.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2400, unit: "pixels" },
              { label: "b", answer: 1600, unit: "pixels" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Scaling",
                statement: "New = old × scale factor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New width = 1200 × 2 = 2400 pixels.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "New height = 800 × 2 = 1600 pixels.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "2400 × 1600 pixels",
            commonErrors: ["Adds 200% instead of doubling."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the suitability of PNG versus JPEG for the product photos on an online clothing store's website.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PNG vs JPEG",
                statement: "Lossless vs lossy.",
              },
            ],
            steps: [
              { reasoning: "PNG strengths.", marks: 1, markCode: "M" },
              { reasoning: "JPEG strengths.", marks: 1, markCode: "M" },
              { reasoning: "Context fit.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PNG: lossless, supports transparency — good for graphics/logos but large files for photos. JPEG: lossy compression, small files — ideal for product photos where fast loading matters and slight quality loss is invisible; typical choice is JPEG for photos, PNG for logos/UI elements.",
            commonErrors: ["One format always best."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u5l4-c2-animation-sound",
      title: "Animation and sound editing",
      skill: "Explain animation principles and digital sound processing.",
      lesson: {
        sections: [
          {
            heading: "Animation principles",
            body: "Animation = sequence of images creating motion illusion. **Frame rate**: more fps = smoother (24fps film, 60fps gaming). **Keyframes**: major poses; **in-betweening**: software generates intermediate frames. **Tweening**: automatic interpolation between keyframes. Formats: GIF (simple loops), Flash (deprecated), HTML5/JavaScript, video formats.",
          },
          {
            heading: "Digital sound and editing",
            body: "Sound = waveforms sampled digitally. **Sample rate**: samples per second (44.1kHz CD quality). **Bit depth**: dynamic range (16-bit = 65,536 levels). **Formats**: MP3 (lossy, small), WAV (lossless, large), AAC. Editing: trim, fade in/out, normalise, remove noise, mix tracks. Podcasting/video editing common uses.",
          },
        ],
        keyFormulas: [
          { name: "Frame rate", statement: "fps — smoothness" },
          { name: "Sample rate", statement: "Samples/sec — quality" },
          { name: "MP3", statement: "Lossy audio" },
        ],
        workedExample: {
          problem: "Why does 30fps look smoother than 12fps?",
          solution:
            "More frames per second = more images shown = smoother perceived motion; 12fps choppy (cartoon style), 30fps fluid — frame rate directly affects smoothness.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animation creates the illusion of motion by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3D printing" },
              { id: "b", text: "Using video only" },
              { id: "c", text: "Showing rapid sequence of images" },
              { id: "d", text: "Sound effects" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Animation", statement: "Image sequence." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Rapid images",
            commonErrors: ["Video only."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'frame rate' and how does it affect animation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frame rate", statement: "fps." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Frames per second — higher fps = smoother motion; 12fps choppy/cartoon-like, 24-30fps smooth film, 60fps very fluid gaming; affects perceived quality and file size.",
            commonErrors: ["File size only."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'tweening' in animation software.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tweening",
                statement: "Auto interpolation.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Automatic generation of in-between frames between keyframes — software interpolates position/size/colour; saves manual frame-by-frame work, speeds animation production.",
            commonErrors: ["Manual frames."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare MP3 and WAV audio formats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "MP3 vs WAV",
                statement: "Lossy vs lossless.",
              },
            ],
            steps: [
              { reasoning: "MP3.", marks: 1, markCode: "M" },
              { reasoning: "WAV.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "MP3: lossy compression, small files, slight quality loss — streaming, downloads. WAV: lossless, CD quality, large files — editing, archiving, professional work; choose based on quality vs size needs.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the trade-offs between animation frame rate and file size.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FPS trade-off",
                statement: "Quality vs size.",
              },
            ],
            steps: [
              { reasoning: "Higher fps.", marks: 1, markCode: "M" },
              { reasoning: "Lower fps.", marks: 1, markCode: "M" },
              { reasoning: "Context.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher fps = smoother but larger files/slower loading; lower fps = smaller but choppy — choose based on purpose: web animation lower fps acceptable, gaming/cinema needs high fps despite size.",
            commonErrors: ["Max always."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'sample rate' in digital audio?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sample rate",
                statement: "Samples/sec.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Number of samples taken per second of audio — 44.1kHz = 44,100 samples/sec (CD quality); higher = better quality but larger files; below 20kHz loses high frequencies.",
            commonErrors: ["Bit depth."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animation technique automatically generates frames between keyframes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tracing" },
              { id: "b", text: "Morphing only" },
              { id: "c", text: "Tweening" },
              { id: "d", text: "Rotoscoping" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Tweening", statement: "Auto frames." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Tweening",
            commonErrors: ["Wrong technique."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two common audio editing operations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Audio editing", statement: "Operations." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. trimming/cutting unwanted sections, and applying fade in/out effects — also normalising volume, removing noise, mixing multiple tracks for podcasts/video.",
            commonErrors: ["No operations."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'bit depth' and its effect on audio quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bit depth",
                statement: "Dynamic range.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Number of bits per sample — 16-bit = 65,536 amplitude levels, 24-bit = 16.7 million; higher bit depth = smoother sound, less quantisation noise, better dynamic range; CD=16-bit, professional=24-bit.",
            commonErrors: ["Sample rate."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the choice of GIF for simple web animations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GIF eval",
                statement: "Simple but limited.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Simple, widely supported, no plugins — good for small animations/icons; but limited to 256 colours, no audio, large files for long animations — HTML5 video/CSS better for complex animation.",
            commonErrors: ["Universal best."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which audio format is lossy (discards some data) and therefore produces smaller files?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "WAV" },
              { id: "b", text: "PCM" },
              { id: "c", text: "AIFF" },
              { id: "d", text: "MP3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "MP3", statement: "Lossy format." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** MP3",
            commonErrors: ["WAV is lossless."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many amplitude levels can be represented by 16-bit audio?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 65536, unit: "levels" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bit depth",
                statement: "2^bits = levels.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate 2^16.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "2^16 = 65536 levels.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "65536 levels",
            commonErrors: ["Answers 16."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing the frame rate of an animation will generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make motion smoother but increase file size" },
              { id: "b", text: "Decrease visual quality" },
              { id: "c", text: "Remove the need for keyframes" },
              { id: "d", text: "Reduce the file size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Frame rate",
                statement: "Smoothness vs size.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Smoother but larger",
            commonErrors: ["Smaller files."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A mono (single channel) recording is sampled 8000 times per second at 8 bits per sample and lasts 10 seconds. Calculate the file size in bytes.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80000, unit: "bytes" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audio size",
                statement: "Samples × bits ÷ 8.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total samples = 8000 × 10 = 80,000 samples.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Total bits = 80,000 × 8 = 640,000 bits.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Convert to bytes: 640,000 / 8 = 80,000 bytes.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "80000 bytes",
            commonErrors: ["Forgets ÷8 for bytes."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An animation plays at 24 frames per second and lasts 5 seconds. Each frame occupies 0.05 MB. Calculate the total number of frames and the total file size in MB.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120, unit: "frames" },
              { label: "b", answer: 6, unit: "MB" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Animation size",
                statement: "fps × duration; frames × size.",
              },
            ],
            steps: [
              {
                reasoning: "Frames = 24 × 5 = 120.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Total frames = 120.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "File size = 120 × 0.05 = 6 MB.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "120 frames; 6 MB",
            commonErrors: ["Uses 24 frames total."],
          },
        },
        {
          id: "cieigcseict-q-u5l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of MP3 for distributing music online.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MP3 eval",
                statement: "Convenience vs quality.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Small files enable fast downloads and streaming on limited bandwidth; near-transparent quality at high bitrates — but lossy compression degrades audio, especially on repeated re-encoding; suitable for casual listening, less so for archival or professional use (WAV/FLAC better).",
            commonErrors: ["Identical to original."],
          },
        },
      ],
    },
  ],
};
