import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olcs-u1-lesson-1-2",
  code: "1-2",
  title: "Representing Text, Sound and Images",
  goal: "I CAN explain character sets, sound sampling, image resolution and colour depth, and calculate file sizes.",
  standards: ["2210 1.2.1", "2210 1.2.2", "2210 1.2.3"],
  vocabulary: [
    { term: "ASCII", definition: "7-bit character set encoding English letters, digits and basic symbols." },
    { term: "Unicode", definition: "Character set covering characters from all world languages; commonly UTF-8." },
    { term: "Sample rate", definition: "Number of sound samples taken per second, measured in Hz (or kHz)." },
    { term: "Sample resolution", definition: "Number of bits used to store each sound sample's amplitude." },
    { term: "Colour depth", definition: "Number of bits used to store the colour of each pixel." },
    { term: "Resolution", definition: "Number of pixels across and down an image (width × height)." },
  ],
  concepts: [
    {
      id: "olcs-u1-text-sound",
      title: "Text and sound representation",
      skill: "Explain character encoding and how sound is digitised by sampling.",
      lesson: {
        sections: [
          { heading: "Text: ASCII and Unicode", body: "Computers store text as numbers. **ASCII** uses 7 bits → $2^7=128$ codes, enough for English letters, digits and punctuation. **Unicode** (e.g. UTF-8) uses variable-length codes to represent characters from every language — essential for multilingual text and emoji." },
          { heading: "Sound: sampling", body: "Sound is an analogue wave; to store it digitally it must be **sampled**:\n\n- **Sample rate**: how many times per second the amplitude is measured (e.g. 44.1 kHz for CD quality). Higher rate → more accurate reproduction of high frequencies.\n- **Sample resolution**: bits per sample. 16-bit gives $2^{16}=65\\,536$ amplitude levels; more bits → less quantisation noise.\n\nFile size (uncompressed) = sample rate × sample resolution × duration × channels." },
          { heading: "Why digitise?", body: "Once sampled, sound becomes data — it can be stored, transmitted, edited and compressed exactly like any other file." },
        ],
        keyFormulas: [
          { name: "Sound file size", statement: "$\\text{size} = f \\times b \\times t \\times c$ (rate × bits × seconds × channels)" },
          { name: "Amplitude levels", statement: "$2^{\\text{bits}}$" },
        ],
        workedExample: {
          problem: "A mono recording is sampled at 8 kHz with 8-bit resolution for 10 seconds. Find the file size in kilobytes (1 kB = 1024 bytes).",
          solution: "Size = $8000 \\times 8 \\times 10 = 640\\,000$ bits = $80\\,000$ bytes ≈ $78.1$ kB.",
        },
      },
      questions: [
        {
          id: "olcs-u1-ts-q1", difficulty: "foundation", totalMarks: 1,
          stem: "ASCII uses how many bits per character?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" }, { id: "b", text: "8" }, { id: "c", text: "16" }, { id: "d", text: "32" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ASCII", statement: "7-bit encoding." }], steps: [{ reasoning: "ASCII = 7 bits.", working: "7", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 7" },
        },
        {
          id: "olcs-u1-ts-q2", difficulty: "core", totalMarks: 2,
          stem: "State two effects of increasing the sample rate when recording sound.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sample rate", statement: "Higher rate → better high-frequency capture, larger file." }], steps: [
            { reasoning: "Improves accuracy of high frequencies.", working: "\\text{better HF}", marks: 1, markCode: "M" },
            { reasoning: "Increases file size.", working: "\\text{larger file}", marks: 1, markCode: "A" },
          ], finalAnswer: "More accurate high-frequency reproduction; larger file size." },
        },
        {
          id: "olcs-u1-ts-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A stereo sound file uses 44.1 kHz sampling, 16-bit resolution and lasts 60 seconds. Calculate its uncompressed size in megabytes (1 MB = $1024^2$ bytes).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sound size", statement: "$f\\times b\\times t\\times c$ bits." }], steps: [
            { reasoning: "Bits = $44100\\times16\\times60\\times2$.", working: "44100\\times16\\times60\\times2", marks: 1, markCode: "M" },
            { reasoning: "= $84\\,787\\,200$ bits.", working: "84787200", marks: 1, markCode: "M" },
            { reasoning: "Bytes = $10\\,598\\,400$.", working: "10598400", marks: 1, markCode: "M" },
            { reasoning: "MB = $10.1$ MB.", working: "10.1", marks: 1, markCode: "A" },
          ], finalAnswer: "$10.1$ MB" },
        },
        {
          id: "olcs-u1-ts-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Text, sound and image representation review.",
          parts: [
            { label: "a", prompt: "Why was Unicode developed when ASCII already existed?", marks: 2 },
            { label: "b", prompt: "Define sample resolution.", marks: 2 },
            { label: "c", prompt: "An image is 800 × 600 pixels with 24-bit colour depth. Calculate its uncompressed size in MB ($1\\text{ MB}=1024^2$ bytes).", marks: 3 },
            { label: "d", prompt: "State one advantage and one disadvantage of a higher sample rate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Unicode", statement: "Encodes all world scripts, not just English." },
          ], steps: [
            { part: "a", reasoning: "ASCII only covers English/basic symbols.", working: "\\text{128 codes}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Unicode covers all languages/scripts.", working: "\\text{all scripts}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bits per sample = amplitude accuracy.", working: "\\text{bits/sample}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "More bits → less quantisation noise.", working: "\\text{less noise}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Pixels = $800\\times600=480\\,000$.", working: "480000", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Bits = $480000\\times24=11\\,520\\,000$.", working: "11520000", marks: 1, markCode: "M" },
            { part: "c", reasoning: "MB = $11\\,520\\,000/8/1024^2 \\approx 1.37$ MB.", working: "1.37", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Advantage: better high-frequency capture.", working: "\\text{accuracy}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Disadvantage: larger file size.", working: "\\text{size}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) covers all scripts (b) bits per sample (c) ≈1.37 MB (d) accuracy vs size" },
        },
      ],
    },
    {
      id: "olcs-u1-images",
      title: "Images and file sizes",
      skill: "Calculate image file sizes from resolution and colour depth, and explain metadata overhead.",
      lesson: {
        sections: [
          { heading: "Bitmap images", body: "A bitmap image is a grid of pixels. Each pixel stores a colour value using **colour depth** bits.\n\n- 1-bit: black/white only ($2^1=2$ colours)\n- 8-bit: $2^8=256$ colours (or 256 greys)\n- 24-bit: $2^{24}\\approx16.7$ million colours (true colour)\n\nFile size = width × height × colour depth ÷ 8 bytes." },
          { heading: "Resolution vs image quality", body: "More pixels (higher resolution) → sharper image but larger file. More colour depth → smoother colour gradients. Halving resolution quarters the pixel count — a big saving." },
          { heading: "Metadata", body: "Real files include extra data: file headers, colour profiles, EXIF tags (camera settings, GPS). The calculated size is the raw bitmap; the stored file may be slightly larger." },
        ],
        keyFormulas: [
          { name: "Image size", statement: "$\\text{bytes} = \\frac{w \\times h \\times \\text{depth}}{8}$" },
          { name: "Colours", statement: "$2^{\\text{depth}}$" },
        ],
        workedExample: {
          problem: "A 1024 × 768 photo uses 24-bit colour. Find the uncompressed size in MB.",
          solution: "Bytes = $1024\\times768\\times24/8 = 2\\,359\\,296$ bytes ≈ $2.25$ MB ($/1024^2$).",
        },
      },
      questions: [
        {
          id: "olcs-u1-img-q1", difficulty: "foundation", totalMarks: 1,
          stem: "How many colours can an 8-bit image store?",
          response: { type: "mcq", choices: [
            { id: "a", text: "256" }, { id: "b", text: "64" }, { id: "c", text: "1024" }, { id: "d", text: "16 million" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Colours", statement: "$2^8=256$." }], steps: [{ reasoning: "$2^8=256$.", working: "256", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 256" },
        },
        {
          id: "olcs-u1-img-q2", difficulty: "core", totalMarks: 2,
          stem: "A 640 × 480 image uses 8-bit colour depth. Calculate the uncompressed file size in kB ($1\\text{ kB}=1024$ bytes).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Image size", statement: "$w\\times h\\times d/8$ bytes." }], steps: [
            { reasoning: "Bytes = $640\\times480\\times8/8=307\\,200$.", working: "307200", marks: 1, markCode: "M" },
            { reasoning: "kB = $307200/1024=300$ kB.", working: "300", marks: 1, markCode: "A" },
          ], finalAnswer: "300 kB" },
        },
        {
          id: "olcs-u1-img-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A designer reduces an image's resolution from 2000 × 1500 to 1000 × 750, keeping 24-bit colour. Calculate the percentage reduction in uncompressed file size.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Image size", statement: "Size ∝ pixel count." }], steps: [
            { reasoning: "Original pixels = $3\\,000\\,000$; new = $750\\,000$.", working: "3000000,750000", marks: 1, markCode: "M" },
            { reasoning: "Reduction = $75\\%$ of pixels removed.", working: "75\\%", marks: 1, markCode: "M" },
            { reasoning: "File size falls by same proportion.", working: "\\text{proportional}", marks: 1, markCode: "M" },
            { reasoning: "Answer: 75% reduction.", marks: 1, markCode: "A" },
          ], finalAnswer: "75% reduction" },
        },
        {
          id: "olcs-u1-img-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Data representation and file sizes review.",
          parts: [
            { label: "a", prompt: "How many amplitude levels does 16-bit sound sampling give?", marks: 2 },
            { label: "b", prompt: "State the formula for uncompressed sound file size.", marks: 2 },
            { label: "c", prompt: "A 12-megapixel camera photo uses 24-bit colour. Estimate the raw file size in MB.", marks: 3 },
            { label: "d", prompt: "Give two reasons a real image file may be larger than the calculated bitmap size.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "formula", name: "Levels", statement: "$2^{16}=65\\,536$." },
          ], steps: [
            { part: "a", reasoning: "$2^{16}=65\\,536$ levels.", working: "65536", marks: 1, markCode: "M" },
            { part: "a", reasoning: "State the value.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "rate × bits × time × channels.", working: "f\\times b\\times t\\times c", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct formula.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$12\\times10^6$ pixels × 24 bits.", working: "12\\times10^6\\times24", marks: 1, markCode: "M" },
            { part: "c", reasoning: "= $288\\times10^6$ bits = $36$ MB raw.", working: "36", marks: 1, markCode: "M" },
            { part: "c", reasoning: "State in MB.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Metadata/headers add bytes.", working: "\\text{metadata}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Or file stored uncompressed vs container overhead.", working: "\\text{container}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 65 536 (b) f×b×t×c (c) ≈36 MB (d) metadata, container overhead" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u1-1-2-notes", title: "Text, sound and images — notes", summary: "Character sets, sampling, resolution, colour depth and size calculations.",
      sections: [
        { heading: "Key formulas", body: "Sound: rate × bits × seconds × channels (bits). Image: width × height × colour depth ÷ 8 (bytes). Colours: $2^{depth}$." },
        { heading: "Sampling", body: "Sample rate controls high-frequency accuracy; sample resolution controls amplitude accuracy. Both increase file size." },
        { heading: "Exam technique", body: "Convert bits→bytes (÷8) then bytes→kB/MB (÷1024 or ÷1024² as instructed). Show each step for method marks." },
      ] },
  ],
};
