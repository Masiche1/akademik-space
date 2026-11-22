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
            { id: "a", text: "32" },
            { id: "b", text: "7" },
            { id: "c", text: "8" },
            { id: "d", text: "16" },
          ], correctChoiceId: "b" },
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
        {
          id: "olcs-u1-ts-q5", difficulty: "foundation", totalMarks: 1,
          stem: "How many different character codes can ASCII represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "256" },
            { id: "b", text: "1 048 576" },
            { id: "c", text: "65 536" },
            { id: "d", text: "128" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "ASCII", statement: "7 bits → $2^7=128$ codes." }], steps: [{ reasoning: "$2^7=128$ codes.", working: "128", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 128" },
        },
        {
          id: "olcs-u1-ts-q6", difficulty: "core", totalMarks: 2,
          stem: "An 8-bit sound sample uses how many amplitude levels?",
          response: { type: "numeric", parts: [{ label: "Levels", answer: 256 }] },
          markscheme: { principles: [{ kind: "formula", name: "Levels", statement: "$2^{\\text{bits}}$ levels." }], steps: [
            { reasoning: "$2^8=256$ amplitude levels.", working: "2^8=256", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "256", marks: 1, markCode: "A" },
          ], finalAnswer: "256" },
        },
        {
          id: "olcs-u1-ts-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Unicode is needed instead of ASCII when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The file is large" },
            { id: "b", text: "Text contains non-English characters" },
            { id: "c", text: "The text is encrypted" },
            { id: "d", text: "The computer has little RAM" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Unicode", statement: "Covers all world scripts; ASCII only English/basic." }], steps: [{ reasoning: "ASCII cannot represent other scripts.", working: "\\text{non-English}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Non-English characters" },
        },
        {
          id: "olcs-u1-ts-q8", difficulty: "core", totalMarks: 2,
          stem: "A mono recording is sampled at 12 kHz with 8-bit resolution for 5 seconds. Calculate the uncompressed size in bits.",
          response: { type: "numeric", parts: [{ label: "Bits", answer: 480000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sound size", statement: "$f\\times b\\times t\\times c$ bits." }], steps: [
            { reasoning: "Bits = $12000\\times8\\times5\\times1$.", working: "12000\\times8\\times5", marks: 1, markCode: "M" },
            { reasoning: "= $480\\,000$ bits.", working: "480000", marks: 1, markCode: "A" },
          ], finalAnswer: "480 000 bits" },
        },
        {
          id: "olcs-u1-ts-q9", difficulty: "core", totalMarks: 2,
          stem: "State one effect of increasing the sample resolution when recording sound.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sample resolution", statement: "More bits → finer amplitude detail." }], steps: [
            { reasoning: "Reduces quantisation noise / smoother reproduction.", working: "\\text{less noise}", marks: 1, markCode: "M" },
            { reasoning: "Increases file size.", working: "\\text{larger file}", marks: 1, markCode: "A" },
          ], finalAnswer: "Finer amplitude detail (less quantisation noise); larger file size." },
        },
        {
          id: "olcs-u1-ts-q10", difficulty: "core", totalMarks: 1,
          stem: "To reduce quantisation noise in a digitised recording, you should increase the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Number of channels" },
            { id: "b", text: "Sample resolution" },
            { id: "c", text: "Duration" },
            { id: "d", text: "File name length" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Quantisation", statement: "Noise reduced by more bits per sample." }], steps: [{ reasoning: "More bits per sample → smaller amplitude steps.", working: "\\text{bits/sample}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sample resolution" },
        },
        {
          id: "olcs-u1-ts-q11", difficulty: "core", totalMarks: 2,
          stem: "A stereo file sampled at 44.1 kHz with 16-bit resolution lasts 1 second. Calculate the uncompressed size in bytes.",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 176400 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sound size", statement: "Bits = $f\\times b\\times t\\times c$; bytes = bits $\\div 8$." }], steps: [
            { reasoning: "Bits = $44100\\times16\\times1\\times2=1\\,411\\,200$.", working: "1411200", marks: 1, markCode: "M" },
            { reasoning: "Bytes = $1411200/8=176\\,400$.", working: "176400", marks: 1, markCode: "A" },
          ], finalAnswer: "176 400 bytes" },
        },
        {
          id: "olcs-u1-ts-q12", difficulty: "core", totalMarks: 2,
          stem: "Which encoding scheme can represent characters from all world languages, including emoji?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Binary" },
            { id: "b", text: "Baudot" },
            { id: "c", text: "ASCII" },
            { id: "d", text: "Unicode (UTF-8)" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Unicode", statement: "All scripts, variable-length codes." }], steps: [{ reasoning: "Unicode covers all languages.", working: "\\text{Unicode}", marks: 1, markCode: "M" }, { reasoning: "ASCII is English-only.", working: "\\text{128 codes}", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Unicode (UTF-8)" },
        },
        {
          id: "olcs-u1-ts-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the uncompressed size of a sound file depends on the sample rate, sample resolution, duration and number of channels.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sound size", statement: "$f\\times b\\times t\\times c$ bits." }], steps: [
            { reasoning: "Sample rate = samples per second.", working: "\\text{samples/s}", marks: 1, markCode: "M" },
            { reasoning: "Sample resolution = bits stored per sample.", working: "\\text{bits/sample}", marks: 1, markCode: "M" },
            { reasoning: "Duration and channels multiply the total samples.", working: "\\text{t}\\times\\text{c}", marks: 1, markCode: "M" },
            { reasoning: "All four multiply to give total bits.", marks: 1, markCode: "A" },
          ], finalAnswer: "Size = rate × bits-per-sample × seconds × channels; each factor scales the total number of bits stored." },
        },
        {
          id: "olcs-u1-ts-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A recording doubles its sample rate but halves its duration, keeping the same sample resolution and channels. The file size…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Doubles" },
            { id: "b", text: "Halves" },
            { id: "c", text: "Quadruples" },
            { id: "d", text: "Stays the same" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Sound size", statement: "Size $\\propto f\\times t$ — the two changes cancel." }], steps: [{ reasoning: "$\\times2$ rate and $\\times0.5$ time cancel.", working: "2\\times0.5=1", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Stays the same" },
        },
        {
          id: "olcs-u1-ts-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A stereo file uses 22.05 kHz sampling, 8-bit resolution and lasts 30 seconds. Calculate the uncompressed size in kB ($1\\text{ kB}=1024$ bytes).",
          response: { type: "numeric", parts: [{ label: "kB", answer: 1292, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sound size", statement: "$f\\times b\\times t\\times c$ bits, then $\\div 8$ bytes and $\\div 1024$ kB." }], steps: [
            { reasoning: "Bits = $22050\\times8\\times30\\times2=10\\,584\\,000$.", working: "10584000", marks: 1, markCode: "M" },
            { reasoning: "Bytes = $1\\,323\\,000$; kB = $1323000/1024\\approx1292$.", working: "1292", marks: 1, markCode: "M" },
            { reasoning: "Correct final value in kB.", working: "1292", marks: 1, markCode: "A" },
          ], finalAnswer: "≈1292 kB" },
        },
        {
          id: "olcs-u1-ts-q16", difficulty: "foundation", totalMarks: 1,
          stem: "UTF-8 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A sound sampling rate" },
            { id: "b", text: "A Unicode character encoding" },
            { id: "c", text: "A network protocol" },
            { id: "d", text: "A type of compression" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "UTF-8", statement: "Variable-length Unicode encoding." }], steps: [{ reasoning: "UTF-8 encodes Unicode characters.", working: "\\text{Unicode}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Unicode character encoding" },
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
            { id: "a", text: "1024" },
            { id: "b", text: "256" },
            { id: "c", text: "64" },
            { id: "d", text: "16 million" },
          ], correctChoiceId: "b" },
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
        {
          id: "olcs-u1-img-q5", difficulty: "foundation", totalMarks: 1,
          stem: "How many colours can a 4-bit image store?",
          response: { type: "mcq", choices: [
            { id: "a", text: "256" },
            { id: "b", text: "16" },
            { id: "c", text: "8" },
            { id: "d", text: "4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Colours", statement: "$2^4=16$." }], steps: [{ reasoning: "$2^4=16$ colours.", working: "16", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 16" },
        },
        {
          id: "olcs-u1-img-q6", difficulty: "core", totalMarks: 2,
          stem: "A 320 × 200 image uses 24-bit colour depth. Calculate the uncompressed size in bytes.",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 192000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Image size", statement: "$w\\times h\\times d/8$ bytes." }], steps: [
            { reasoning: "Bytes = $320\\times200\\times24/8$.", working: "320\\times200\\times24\\div8", marks: 1, markCode: "M" },
            { reasoning: "= $192\\,000$ bytes.", working: "192000", marks: 1, markCode: "A" },
          ], finalAnswer: "192 000 bytes" },
        },
        {
          id: "olcs-u1-img-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Halving both the width and height of an image reduces its pixel count to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It stays the same" },
            { id: "b", text: "One quarter" },
            { id: "c", text: "One half" },
            { id: "d", text: "One eighth" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Pixels", statement: "Pixels $=$ width × height — halving each quarters it." }], steps: [{ reasoning: "$0.5\\times0.5=0.25$ of pixels.", working: "0.25", marks: 1, markCode: "B" }], finalAnswer: "**(a)** One quarter" },
        },
        {
          id: "olcs-u1-img-q8", difficulty: "core", totalMarks: 2,
          stem: "A 1000 × 800 greyscale image uses 8-bit colour depth. Calculate its uncompressed size in bytes.",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 800000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Image size", statement: "$w\\times h\\times d/8$ bytes." }], steps: [
            { reasoning: "Bytes = $1000\\times800\\times8/8=800\\,000$.", working: "800000", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "800000", marks: 1, markCode: "A" },
          ], finalAnswer: "800 000 bytes" },
        },
        {
          id: "olcs-u1-img-q9", difficulty: "core", totalMarks: 2,
          stem: "State one effect of increasing the colour depth of an image.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Colour depth", statement: "More bits → more colours, larger file." }], steps: [
            { reasoning: "More colours / smoother gradients.", working: "\\text{more colours}", marks: 1, markCode: "M" },
            { reasoning: "Larger file size.", working: "\\text{larger file}", marks: 1, markCode: "A" },
          ], finalAnswer: "More colours and smoother gradients; larger file size." },
        },
        {
          id: "olcs-u1-img-q10", difficulty: "core", totalMarks: 1,
          stem: "Which colour depth gives the smoothest colour gradients (true colour)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "24-bit" },
            { id: "b", text: "1-bit" },
            { id: "c", text: "8-bit" },
            { id: "d", text: "4-bit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "True colour", statement: "24-bit ≈ 16.7 million colours." }], steps: [{ reasoning: "24-bit gives the most colours.", working: "2^{24}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 24-bit" },
        },
        {
          id: "olcs-u1-img-q11", difficulty: "core", totalMarks: 2,
          stem: "A 500 × 400 black-and-white image uses 1-bit colour depth. Calculate the uncompressed size in bytes.",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 25000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Image size", statement: "$w\\times h\\times d/8$ bytes." }], steps: [
            { reasoning: "Bytes = $500\\times400\\times1/8=25\\,000$.", working: "25000", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "25000", marks: 1, markCode: "A" },
          ], finalAnswer: "25 000 bytes" },
        },
        {
          id: "olcs-u1-img-q12", difficulty: "core", totalMarks: 2,
          stem: "Which of these is an example of image metadata?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The bitmap data itself" },
            { id: "b", text: "EXIF camera settings" },
            { id: "c", text: "Pixel colour values" },
            { id: "d", text: "Image width in pixels" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Metadata", statement: "Extra data about the file, not the pixels." }], steps: [{ reasoning: "EXIF tags store camera/settings info.", working: "\\text{EXIF}", marks: 1, markCode: "M" }, { reasoning: "Pixels/bitmap are image data, not metadata.", working: "\\text{pixels}", marks: 1, markCode: "A" }], finalAnswer: "**(a)** EXIF camera settings" },
        },
        {
          id: "olcs-u1-img-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how resolution and colour depth each affect an image's file size and visual quality.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Size factors", statement: "Size $\\propto$ pixels × bits per pixel." }], steps: [
            { reasoning: "Higher resolution = more pixels = sharper but larger.", working: "\\text{pixels}", marks: 1, markCode: "M" },
            { reasoning: "Higher colour depth = more colours = smoother but larger.", working: "\\text{depth}", marks: 1, markCode: "M" },
            { reasoning: "Both multiply in the size formula.", working: "w\\times h\\times d", marks: 1, markCode: "M" },
            { reasoning: "Trade-off between quality and storage.", marks: 1, markCode: "A" },
          ], finalAnswer: "Resolution controls sharpness (more pixels); colour depth controls colour range; both increase file size proportionally." },
        },
        {
          id: "olcs-u1-img-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Doubling both the width and height of an image multiplies its uncompressed size by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "16" },
            { id: "c", text: "4" },
            { id: "d", text: "8" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Scaling", statement: "Area scales as the square of linear dimension." }], steps: [{ reasoning: "$2\\times2=4$ times the pixels.", working: "4", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 4" },
        },
        {
          id: "olcs-u1-img-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A 2048 × 1536 photo uses 24-bit colour. Estimate the raw file size in MB ($1\\text{ MB}=1024^2$ bytes).",
          response: { type: "numeric", parts: [{ label: "MB", answer: 9 }] },
          markscheme: { principles: [{ kind: "formula", name: "Image size", statement: "$w\\times h\\times d/8$ bytes." }], steps: [
            { reasoning: "Bytes = $2048\\times1536\\times24/8=9\\,437\\,184$.", working: "9437184", marks: 1, markCode: "M" },
            { reasoning: "MB = $9437184/1024^2=9.0$ MB.", working: "9", marks: 1, markCode: "M" },
            { reasoning: "Correct value in MB.", working: "9", marks: 1, markCode: "A" },
          ], finalAnswer: "9 MB" },
        },
        {
          id: "olcs-u1-img-q16", difficulty: "foundation", totalMarks: 1,
          stem: "A 1-bit image can store how many colours?",
          response: { type: "mcq", choices: [
            { id: "a", text: "256" },
            { id: "b", text: "16" },
            { id: "c", text: "2" },
            { id: "d", text: "65 536" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Colours", statement: "$2^1=2$ (e.g. black/white)." }], steps: [{ reasoning: "$2^1=2$ colours.", working: "2", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 2" },
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
