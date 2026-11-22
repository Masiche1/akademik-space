import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "olcs-u9-lesson-9-2",
  code: "9-2",
  title: "Character Representation",
  goal: "I CAN explain ASCII and Unicode, character codes, and how text is stored as binary.",
  standards: ["2210 9.3.1", "2210 9.3.2"],
  vocabulary: [
    { term: "Character set", definition: "The collection of characters a system can represent." },
    { term: "Character code", definition: "Numeric value assigned to a character — e.g. 'A' = 65." },
    { term: "ASCII", definition: "American Standard Code for Information Interchange — 7-bit codes for English characters." },
    { term: "Unicode", definition: "Universal character set covering almost all world scripts." },
    { term: "UTF-8", definition: "Popular Unicode encoding using variable-length bytes." },
    { term: "Encoding", definition: "Mapping characters to binary codes for storage/transmission." },
  ],
  concepts: [
    {
      id: "olcs-u9-charset",
      title: "Character sets and codes",
      skill: "Explain ASCII, Unicode and how characters map to binary.",
      lesson: {
        sections: [
          { heading: "Why codes?", body: "Computers store everything as binary. Characters are mapped to numbers via a **character set**: each character gets a **character code** — e.g. 'A' = 65, 'a' = 97 in ASCII." },
          { heading: "ASCII", body: "7-bit code covering 128 characters: letters, digits, punctuation, control codes. Limited to English/Latin — can't represent Chinese, Arabic, emoji etc." },
          { heading: "Unicode", body: "Covers nearly all world scripts — over 100,000 characters. **UTF-8** is the common encoding: English chars use 1 byte, others up to 4 bytes. Solves ASCII's limitation." },
          { heading: "Text storage", body: "Text files store character codes as binary bytes. Reading requires knowing the encoding (UTF-8 assumed by most systems)." },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7 bits → 128 characters" },
        ],
        workedExample: {
          problem: "Why can't ASCII represent the character ''?",
          solution: "ASCII only has 128 codes for English/Latin characters; '' needs Unicode.",
        },
      },
      questions: [
        {
          id: "olcs-u9-cs-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A character code is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of file" },
            { id: "b", text: "A number assigned to a character" },
            { id: "c", text: "A programming language" },
            { id: "d", text: "A network protocol" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Character code", statement: "Number for a character." }], steps: [{ reasoning: "Code = number.", working: "\\text{code}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Number for a character" },
        },
        {
          id: "olcs-u9-cs-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the main limitation of ASCII?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ASCII limit", statement: "128 chars, English only." }], steps: [
            { reasoning: "Only 128 characters.", working: "128", marks: 1, markCode: "M" },
            { reasoning: "No non-Latin scripts.", marks: 1, markCode: "A" },
          ], finalAnswer: "Only covers ~128 English/Latin characters — can't represent other world scripts." },
        },
        {
          id: "olcs-u9-cs-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why Unicode was developed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unicode", statement: "Universal coverage." }], steps: [
            { reasoning: "ASCII can't represent all world scripts.", working: "\\text{limit}", marks: 1, markCode: "M" },
            { reasoning: "Unicode covers nearly all characters.", working: "\\text{universal}", marks: 1, markCode: "M" },
            { reasoning: "Enables multilingual software.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "ASCII's 128-character limit couldn't cover world scripts; Unicode provides universal coverage." },
        },
        {
          id: "olcs-u9-cs-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Character representation review.",
          parts: [
            { label: "a", prompt: "Define character set and character code.", marks: 2 },
            { label: "b", prompt: "How many characters can ASCII represent?", marks: 1 },
            { label: "c", prompt: "Why was Unicode needed?", marks: 2 },
            { label: "d", prompt: "What is UTF-8?", marks: 2 },
            { label: "e", prompt: "Explain how 'Hi' is stored in a text file.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Character encoding", statement: "Codes map characters to binary." },
          ], steps: [
            { part: "a", reasoning: "Set: collection; code: number per char.", working: "\\text{set+code}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "128.", working: "128", marks: 1, markCode: "A" },
            { part: "c", reasoning: "ASCII too limited.", working: "\\text{limited}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Unicode universal.", working: "\\text{unicode}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Unicode encoding, variable bytes.", working: "\\text{utf8}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Each char → code → binary bytes.", working: "\\text{codes}", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Stored as binary.", working: "\\text{binary}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) collection+number (b) 128 (c) universal coverage (d) Unicode encoding (e) codes→binary" },
        },
        {
          id: "olcs-u9-cs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "How many different characters can standard ASCII represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "256" },
            { id: "b", text: "1024" },
            { id: "c", text: "64" },
            { id: "d", text: "128" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "ASCII", statement: "7-bit code, 128 characters." }], steps: [{ reasoning: "$2^7 = 128$.", working: "128", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 128" },
        },
        {
          id: "olcs-u9-cs-q6", difficulty: "core", totalMarks: 1,
          stem: "How many bits are used in a standard ASCII character code?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "definition", name: "ASCII", statement: "7-bit codes." }], steps: [{ reasoning: "ASCII uses 7 bits per character.", working: "7", marks: 1, markCode: "A" }], finalAnswer: "7" },
        },
        {
          id: "olcs-u9-cs-q7", difficulty: "foundation", totalMarks: 1,
          stem: "UTF-8 is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An old 7-bit character code" },
            { id: "b", text: "A programming language" },
            { id: "c", text: "A type of image compression" },
            { id: "d", text: "A Unicode encoding that uses variable-length bytes" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "UTF-8", statement: "Unicode encoding, variable bytes." }], steps: [{ reasoning: "UTF-8 encodes Unicode characters in 1-4 bytes.", working: "\\text{utf8}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A Unicode encoding using variable-length bytes" },
        },
        {
          id: "olcs-u9-cs-q8", difficulty: "core", totalMarks: 2,
          stem: "Explain why ASCII cannot be used to store Chinese characters.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ASCII limit", statement: "128 codes, English/Latin only." }], steps: [
            { reasoning: "ASCII has only 128 codes for English/Latin characters.", working: "128", marks: 1, markCode: "M" },
            { reasoning: "Chinese characters have no assigned ASCII codes.", marks: 1, markCode: "A" },
          ], finalAnswer: "ASCII's 128-character set covers only English/Latin; Chinese needs Unicode." },
        },
        {
          id: "olcs-u9-cs-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Which character set is designed to cover almost all world scripts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ASCII" },
            { id: "b", text: "Binary" },
            { id: "c", text: "Unicode" },
            { id: "d", text: "Denary" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Unicode", statement: "Universal character set." }], steps: [{ reasoning: "Unicode covers nearly all world scripts.", working: "\\text{unicode}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Unicode" },
        },
        {
          id: "olcs-u9-cs-q10", difficulty: "core", totalMarks: 2,
          stem: "A text file contains 5 ASCII characters. Each character uses 7 bits. How many bits are needed in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: { principles: [{ kind: "principle", name: "Text storage", statement: "Bits per character × characters." }], steps: [
            { reasoning: "$5 \\times 7 = 35$ bits.", working: "5*7=35", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "35" },
        },
        {
          id: "olcs-u9-cs-q11", difficulty: "core", totalMarks: 2,
          stem: "Describe how the word 'HI' would be stored in a text file.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Text storage", statement: "Characters → codes → binary." }], steps: [
            { reasoning: "Each letter is mapped to its character code (e.g. H and I).", working: "\\text{codes}", marks: 1, markCode: "M" },
            { reasoning: "The codes are stored as binary bytes in the file.", working: "\\text{binary}", marks: 1, markCode: "A" },
          ], finalAnswer: "Each character is converted to a character code, then stored as binary." },
        },
        {
          id: "olcs-u9-cs-q12", difficulty: "foundation", totalMarks: 1,
          stem: "Which encoding uses 1 byte for English characters but up to 4 bytes for other characters?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Denary" },
            { id: "b", text: "ASCII" },
            { id: "c", text: "Hexadecimal" },
            { id: "d", text: "UTF-8" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "UTF-8", statement: "Variable-length encoding." }], steps: [{ reasoning: "UTF-8 uses variable-length bytes.", working: "\\text{utf8}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** UTF-8" },
        },
        {
          id: "olcs-u9-cs-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Explain why a program using only ASCII might fail to display an emoji correctly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "ASCII limit", statement: "No codes outside 128 English/Latin chars." }], steps: [
            { reasoning: "ASCII has no code assigned to emoji characters.", working: "\\text{no code}", marks: 1, markCode: "M" },
            { reasoning: "Unicode assigns codes to emoji.", working: "\\text{unicode}", marks: 1, markCode: "M" },
            { reasoning: "Without Unicode the emoji cannot be represented.", marks: 1, markCode: "A" },
          ], finalAnswer: "ASCII has no emoji codes; Unicode is needed to represent them." },
        },
        {
          id: "olcs-u9-cs-q14", difficulty: "core", totalMarks: 2,
          stem: "An extended 8-bit character code can represent how many different characters?",
          response: { type: "numeric", parts: [{ label: "a", answer: 256 }] },
          markscheme: { principles: [{ kind: "principle", name: "Character codes", statement: "n bits → $2^n$ codes." }], steps: [
            { reasoning: "$2^8 = 256$ characters.", working: "256", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "256" },
        },
        {
          id: "olcs-u9-cs-q15", difficulty: "core", totalMarks: 1,
          stem: "The main advantage of Unicode over ASCII is that Unicode…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot represent digits" },
            { id: "b", text: "Uses fewer bits per character" },
            { id: "c", text: "Covers nearly all world scripts and symbols" },
            { id: "d", text: "Is faster for computers to process" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Unicode", statement: "Universal coverage." }], steps: [{ reasoning: "Unicode covers world scripts; ASCII is English-only.", working: "\\text{universal}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Covers nearly all world scripts and symbols" },
        },
        {
          id: "olcs-u9-cs-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Character representation review.",
          parts: [
            { label: "a", prompt: "Define the term character set.", marks: 2 },
            { label: "b", prompt: "State the main limitation of ASCII.", marks: 2 },
            { label: "c", prompt: "What is UTF-8?", marks: 2 },
            { label: "d", prompt: "Explain how the text 'Hi' is stored in a file.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Character encoding", statement: "Codes map characters to binary." },
          ], steps: [
            { part: "a", reasoning: "The collection of characters a system can represent.", working: "\\text{collection}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Only ~128 English/Latin characters.", working: "128", marks: 1, markCode: "M" },
            { part: "b", reasoning: "No other world scripts.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "A Unicode encoding using variable-length bytes.", working: "\\text{utf8}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "H and i are mapped to character codes.", working: "\\text{codes}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Codes converted to binary and stored as bytes.", working: "\\text{binary}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) collection of representable chars (b) ~128 English only (c) Unicode encoding (d) codes→binary bytes" },
        },
      ],
    },
    {
      id: "olcs-u9-images",
      title: "Representing images and sound",
      skill: "Explain bitmap and vector images, resolution, colour depth, sampling and compression.",
      lesson: {
        sections: [
          { heading: "Bitmap images", body: "Grid of **pixels**, each with a colour code. File size = width × height × colour depth. Higher **resolution** = more detail but bigger files. Colour depth (bits per pixel) determines colour range." },
          { heading: "Vector images", body: "Store mathematical shapes (lines, curves) with properties — scale perfectly, tiny files, but limited for photos. Used for logos and diagrams." },
          { heading: "Sound representation", body: "Sound is **sampled** at regular intervals; each sample's amplitude is stored as a number. Higher **sample rate** and **bit depth** = better quality but larger files." },
          { heading: "Compression", body: "- **Lossless**: exact copy (PNG, ZIP) — no quality loss.\n- **Lossy**: discards some data (JPEG, MP3) — smaller files, slight quality loss." },
        ],
        keyFormulas: [
          { name: "Bitmap size", statement: "width × height × bits per pixel / 8 = bytes" },
        ],
        workedExample: {
          problem: "Why does a JPEG photo compress better than a PNG screenshot of text?",
          solution: "JPEG is lossy — discards imperceptible detail; text needs lossless for sharp edges, so PNG is better there.",
        },
      },
      questions: [
        {
          id: "olcs-u9-im-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A bitmap image is made of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mathematical shapes" },
            { id: "b", text: "Pixels in a grid" },
            { id: "c", text: "Sound samples" },
            { id: "d", text: "Text codes" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Bitmap", statement: "Grid of pixels." }], steps: [{ reasoning: "Bitmap = pixels.", working: "\\text{pixels}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Pixels" },
        },
        {
          id: "olcs-u9-im-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the advantage of a vector image over a bitmap?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Vector", statement: "Scales perfectly." }], steps: [
            { reasoning: "Scales without losing quality.", working: "\\text{scale}", marks: 1, markCode: "M" },
            { reasoning: "Smaller file size.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vector images scale perfectly and have small files; bitmaps pixelate when enlarged." },
        },
        {
          id: "olcs-u9-im-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the effect of increasing colour depth on a bitmap image.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Colour depth", statement: "Bits per pixel → colours." }], steps: [
            { reasoning: "More colours representable.", working: "\\text{colours}", marks: 1, markCode: "M" },
            { reasoning: "Better quality/smoother gradients.", working: "\\text{quality}", marks: 1, markCode: "M" },
            { reasoning: "Larger file size.", working: "\\text{size}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Higher colour depth = more colours and better quality, but larger files." },
        },
        {
          id: "olcs-u9-im-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Media representation review.",
          parts: [
            { label: "a", prompt: "Distinguish bitmap from vector images.", marks: 2 },
            { label: "b", prompt: "What is colour depth?", marks: 2 },
            { label: "c", prompt: "Explain sound sampling.", marks: 2 },
            { label: "d", prompt: "Distinguish lossy from lossless compression.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Media representation", statement: "Bitmap/vector, sampling, compression." },
          ], steps: [
            { part: "a", reasoning: "Bitmap: pixels; vector: shapes.", working: "\\text{bitmap vs vector}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bits per pixel.", working: "\\text{bpp}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Determines colour range.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Amplitude measured at intervals.", working: "\\text{sample}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Stored as numbers.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Lossy: discards data.", working: "\\text{lossy}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Lossless: exact copy.", working: "\\text{lossless}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) pixels vs shapes (b) bits per pixel (c) interval sampling (d) discard vs exact" },
        },
        {
          id: "olcs-u9-im-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A vector image is made of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Character codes" },
            { id: "b", text: "Sound samples" },
            { id: "c", text: "Mathematical shapes such as lines and curves" },
            { id: "d", text: "A grid of pixels" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Vector", statement: "Shapes with properties." }], steps: [{ reasoning: "Vector images store mathematical shapes.", working: "\\text{shapes}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Mathematical shapes" },
        },
        {
          id: "olcs-u9-im-q6", difficulty: "core", totalMarks: 2,
          stem: "A bitmap image is 20 pixels wide and 20 pixels high, using 8 bits per pixel. Calculate the file size in bytes.",
          response: { type: "numeric", parts: [{ label: "a", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Bitmap size", statement: "width × height × bits per pixel / 8." }], steps: [
            { reasoning: "$20 \\times 20 \\times 8 / 8 = 400$ bytes.", working: "400", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "400 bytes" },
        },
        {
          id: "olcs-u9-im-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Increasing the resolution of a bitmap image…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reduces the file size" },
            { id: "b", text: "Removes colours from the image" },
            { id: "c", text: "Converts it into a vector image" },
            { id: "d", text: "Adds more pixels and detail but increases the file size" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Resolution", statement: "Number of pixels." }], steps: [{ reasoning: "More pixels = more detail and bigger file.", working: "\\text{pixels}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** More pixels and detail, larger file" },
        },
        {
          id: "olcs-u9-im-q8", difficulty: "core", totalMarks: 2,
          stem: "A 100 × 50 pixel bitmap uses 1 bit per pixel. What is its file size in bytes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 625 }] },
          markscheme: { principles: [{ kind: "principle", name: "Bitmap size", statement: "width × height × bpp / 8." }], steps: [
            { reasoning: "$100 \\times 50 \\times 1 / 8 = 625$ bytes.", working: "625", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "625 bytes" },
        },
        {
          id: "olcs-u9-im-q9", difficulty: "core", totalMarks: 2,
          stem: "Explain why a vector logo does not become pixelated when enlarged.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Vector", statement: "Scales mathematically." }], steps: [
            { reasoning: "Shapes are redrawn at any size rather than stretched.", working: "\\text{redraw}", marks: 1, markCode: "M" },
            { reasoning: "No fixed pixels, so edges stay sharp.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vector shapes are recalculated at any size, so they stay sharp." },
        },
        {
          id: "olcs-u9-im-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Lossy compression…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keeps an exact copy of the original" },
            { id: "b", text: "Always improves image quality" },
            { id: "c", text: "Is only used for text files" },
            { id: "d", text: "Discards some data to produce smaller files" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Lossy", statement: "Discards data for smaller files." }], steps: [{ reasoning: "Lossy compression discards some data.", working: "\\text{lossy}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Discards data for smaller files" },
        },
        {
          id: "olcs-u9-im-q11", difficulty: "core", totalMarks: 2,
          stem: "Sound is sampled 8000 times per second for 10 seconds. How many samples are recorded?",
          response: { type: "numeric", parts: [{ label: "a", answer: 80000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Sampling", statement: "Samples = rate × duration." }], steps: [
            { reasoning: "$8000 \\times 10 = 80000$ samples.", working: "80000", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "80000" },
        },
        {
          id: "olcs-u9-im-q12", difficulty: "challenge", totalMarks: 3,
          stem: "Explain why increasing the sample rate of a sound recording improves quality but increases the file size.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sampling", statement: "Rate affects detail and size." }], steps: [
            { reasoning: "Higher rate captures the waveform more accurately.", working: "\\text{accuracy}", marks: 1, markCode: "M" },
            { reasoning: "More samples per second are stored.", working: "\\text{more samples}", marks: 1, markCode: "M" },
            { reasoning: "More data means a larger file.", marks: 1, markCode: "A" },
          ], finalAnswer: "Higher sample rate = better quality but more data and larger files." },
        },
        {
          id: "olcs-u9-im-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these formats uses lossless compression?",
          response: { type: "mcq", choices: [
            { id: "a", text: "MP4" },
            { id: "b", text: "JPEG" },
            { id: "c", text: "MP3" },
            { id: "d", text: "PNG" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Lossless formats", statement: "PNG, ZIP preserve data exactly." }], steps: [{ reasoning: "PNG is lossless; JPEG and MP3 are lossy.", working: "\\text{png}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** PNG" },
        },
        {
          id: "olcs-u9-im-q14", difficulty: "core", totalMarks: 2,
          stem: "A 200 × 100 pixel bitmap uses 24 bits per pixel. Calculate the file size in bytes.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Bitmap size", statement: "width × height × bpp / 8." }], steps: [
            { reasoning: "$200 \\times 100 \\times 24 / 8 = 60000$ bytes.", working: "60000", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "60000 bytes" },
        },
        {
          id: "olcs-u9-im-q15", difficulty: "core", totalMarks: 1,
          stem: "Which format is most suitable for storing a photograph to share online?",
          response: { type: "mcq", choices: [
            { id: "a", text: "TIFF" },
            { id: "b", text: "PNG" },
            { id: "c", text: "JPEG" },
            { id: "d", text: "BMP" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Compression choice", statement: "Lossy suits photos." }], steps: [{ reasoning: "JPEG's lossy compression gives small files for photos.", working: "\\text{jpeg}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** JPEG" },
        },
        {
          id: "olcs-u9-im-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Media representation review.",
          parts: [
            { label: "a", prompt: "Distinguish bitmap from vector images.", marks: 2 },
            { label: "b", prompt: "What is colour depth and what does it affect?", marks: 2 },
            { label: "c", prompt: "A 50 × 40 pixel bitmap uses 8 bits per pixel. Calculate the file size in bytes.", marks: 2 },
            { label: "d", prompt: "Suggest a suitable format for (i) a photograph and (ii) a logo, justifying each choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Media representation", statement: "Bitmap/vector, colour depth, compression." },
          ], steps: [
            { part: "a", reasoning: "Bitmap: grid of pixels; vector: mathematical shapes.", working: "\\text{pixels vs shapes}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bits per pixel.", working: "\\text{bpp}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Determines the range of colours available.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$50 \\times 40 \\times 8 / 8 = 2000$ bytes.", working: "2000", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct result.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "JPEG for photo — lossy, small file.", working: "\\text{jpeg}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "PNG/vector for logo — sharp, lossless.", working: "\\text{png/vector}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Justified choices.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) pixels vs shapes (b) bits per pixel → colours (c) 2000 bytes (d) JPEG photo, PNG/vector logo" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u9-9-2-notes", title: "Data representation — notes", summary: "Character sets, ASCII/Unicode, images and sound.",
      sections: [
        { heading: "Text", body: "Characters → codes → binary. ASCII = 128 English chars; Unicode = universal; UTF-8 common encoding." },
        { heading: "Media", body: "Bitmap = pixel grid; vector = shapes. Sound = sampling. Lossy vs lossless compression." },
      ] },
  ],
};
