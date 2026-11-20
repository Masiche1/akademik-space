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
            { id: "a", text: "A number assigned to a character" }, { id: "b", text: "A type of file" }, { id: "c", text: "A programming language" }, { id: "d", text: "A network protocol" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Pixels in a grid" }, { id: "b", text: "Mathematical shapes" }, { id: "c", text: "Sound samples" }, { id: "d", text: "Text codes" },
          ], correctChoiceId: "a" },
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
