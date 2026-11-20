module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson121",
    lesson: {
      id: "ciealc-u1-lesson-1-1", code: "1-1",
      title: "Data Representation: Number Systems",
      goal: "I CAN convert between binary, denary and hexadecimal and explain place values and overflow.",
      standards: ["Cambridge A Level Computer Science 9618: data representation", "9618 topic 1"],
      vocabulary: [
        { term: "Binary", definition: "Base-2 number system using digits 0 and 1." },
        { term: "Bit", definition: "Single binary digit — smallest unit of data." },
        { term: "Byte", definition: "Group of 8 bits." },
        { term: "Place value", definition: "Each digit's value determined by position." },
        { term: "Overflow", definition: "Value exceeding storage capacity — wraps or errors." },
        { term: "Hexadecimal", definition: "Base-16 system: 0-9, A-F; each hex digit = 4 bits." },
      ],
      concept: {
        id: "ciealc-u1-s1-num", title: "Number systems",
        skill: "Convert between binary, denary and hexadecimal at A Level.",
        sections: [
          { heading: "Place values and conversions", body: "Binary place values double: 128 64 32 16 8 4 2 1. Denary→binary: halve repeatedly, record remainders bottom-up. Binary→denary: sum place values of 1-bits. Hex: group binary into nibbles (4 bits each)." },
          { heading: "Overflow and range", body: "n-bit values range 0 to 2^n−1. 8-bit: 0–255. Overflow when exceeding max — may wrap (modulo) or error. Signed representation uses two's complement for negatives." },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Range", statement: "n bits → 0 to 2^n−1" },
          { name: "Hex", statement: "1 hex digit = 4 bits" },
        ],
        workedExample: {
          problem: "Convert 1011 0110 to denary and hex. What's the max 8-bit value?",
          solution: "Denary: 128+32+16+4+2=182. Hex: 1011=B, 0110=6 → 0xB6. Max 8-bit=255.",
        },
        questions: [
          {
            id: "ciealc-u1-ns-q1", difficulty: "foundation", totalMarks: 1,
            stem: "How many bits in a byte?",
            response: { type: "mcq", choices: [
              { id: "a", text: "8" }, { id: "b", text: "4" }, { id: "c", text: "16" }, { id: "d", text: "32" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Byte", statement: "8 bits." }],
              steps: [{ reasoning: "Byte = 8 bits.", marks: 1, markCode: "M" }],
              finalAnswer: "8",
            },
          },
          {
            id: "ciealc-u1-ns-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Convert 0110 1010 to denary.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary→denary", statement: "Sum place values." }],
              steps: [
                { reasoning: "64+32+8+2=106.", marks: 1, markCode: "M" },
                { reasoning: "Answer 106.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "106",
            },
          },
          {
            id: "ciealc-u1-ns-q3", difficulty: "core", totalMarks: 3,
            stem: "Convert 0x2F to binary and denary. Show working.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Hex conversion", statement: "Hex→binary→denary." }],
              steps: [
                { reasoning: "2=0010, F=1111 → 0010 1111.", marks: 1, markCode: "M" },
                { reasoning: "Denary: 32+8+4+2+1=47.", marks: 1, markCode: "M" },
                { reasoning: "Answer: 47.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "47",
            },
          },
          {
            id: "ciealc-u1-ns-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define binary, bit, byte, place value, overflow, hexadecimal. (b) What are byte place values? (c) Convert 1100 0011 to denary. (d) Convert 200 to 8-bit binary. (e) Convert 0xFF to binary and denary. (f) What is overflow? (g) Convert 0xA3 to binary. (h) How many values can 4 bits represent?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Number systems", statement: "Conversions, overflow, hex." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 128 64 32 16 8 4 2 1.", marks: 1, markCode: "M" },
                { reasoning: "(c) 128+64+2+1=195.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1100 1000.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1111 1111 = 255.", marks: 1, markCode: "M" },
                { reasoning: "(f) Exceeds capacity → wraps/errors.", marks: 1, markCode: "M" },
                { reasoning: "(g) 1010 0011.", marks: 1, markCode: "M" },
                { reasoning: "(h) 16 (2^4).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Number system conversions and overflow.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u1-ns-notes", title: "Number systems — notes",
      summary: "Binary=base2, hex=base16 (4 bits/digit), denary=base10. n bits → 0 to 2^n−1.",
      sections: [
        { heading: "Key idea", body: "Group binary into nibbles for hex conversion." },
        { heading: "Overflow", body: "Values exceeding 2^n−1 wrap or error." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson122",
    lesson: {
      id: "ciealc-u1-lesson-1-2", code: "1-2",
      title: "Data Representation: Text, Images, Sound",
      goal: "I CAN explain how text, images and sound are represented as binary and calculate file sizes.",
      standards: ["Cambridge A Level Computer Science 9618: data representation", "9618 topic 1"],
      vocabulary: [
        { term: "Character encoding", definition: "Rules mapping characters to binary codes." },
        { term: "ASCII", definition: "7-bit encoding for basic English characters." },
        { term: "Unicode", definition: "Universal encoding for all languages/symbols." },
        { term: "Pixel", definition: "Smallest picture element — coloured dot." },
        { term: "Resolution", definition: "Number of pixels in an image." },
        { term: "Colour depth", definition: "Bits per pixel — determines colour range." },
      ],
      concept: {
        id: "ciealc-u1-s2-media", title: "Media data representation",
        skill: "Explain binary encoding and file size calculations at A Level.",
        sections: [
          { heading: "Text and image encoding", body: "Text: ASCII (7-bit, 128 chars) or Unicode (more bits, all languages). File size = characters × bits per character ÷ 8. Images: pixel grid, each pixel stores colour values. File size = pixels × colour depth ÷ 8." },
          { heading: "Sound encoding", body: "Sound sampled at intervals; amplitude stored as binary. File size = sample rate × bit depth × duration × channels. Higher rates = better quality, bigger files." },
        ],
        keyFormulas: [
          { name: "Text size", statement: "chars × bits ÷ 8" },
          { name: "Image size", statement: "pixels × colour depth ÷ 8" },
          { name: "Sound size", statement: "rate × depth × time × channels" },
        ],
        workedExample: {
          problem: "Calculate file size of a 1000×800 image at 24-bit colour depth.",
          solution: "Pixels = 1000×800 = 800,000. Bits = 800,000 × 24 = 19,200,000. Bytes = 19,200,000 ÷ 8 = 2,400,000 bytes ≈ 2.4 MB.",
        },
        questions: [
          {
            id: "ciealc-u1-md-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is character encoding?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Rules mapping characters to binary codes" }, { id: "b", text: "A file format" }, { id: "c", text: "A type of font" }, { id: "d", text: "A network protocol" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Character encoding", statement: "Char→binary mapping." }],
              steps: [{ reasoning: "Encoding = char↔binary rules.", marks: 1, markCode: "M" }],
              finalAnswer: "Char→binary rules",
            },
          },
          {
            id: "ciealc-u1-md-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Calculate file size of 'Hello' stored as ASCII (7 bits per character).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "File size", statement: "Chars × bits ÷ 8." }],
              steps: [
                { reasoning: "5 chars × 7 bits = 35 bits.", marks: 1, markCode: "M" },
                { reasoning: "35 ÷ 8 = 4.375 bytes ≈ 4.4 bytes.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "~4.4 bytes",
            },
          },
          {
            id: "ciealc-u1-md-q3", difficulty: "core", totalMarks: 3,
            stem: "Calculate file size of a 500×400 image at 16-bit colour depth.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Image file size", statement: "Pixels × depth ÷ 8." }],
              steps: [
                { reasoning: "Pixels = 500×400 = 200,000.", marks: 1, markCode: "M" },
                { reasoning: "Bits = 200,000 × 16 = 3,200,000.", marks: 1, markCode: "M" },
                { reasoning: "Bytes = 3,200,000 ÷ 8 = 400,000 bytes = 400 KB.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "400 KB",
            },
          },
          {
            id: "ciealc-u1-md-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth, sound sampling. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does colour depth affect image size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Calculate size of 2000×1500 image at 32-bit colour depth.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Media representation", statement: "Encoding and file size." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Covers all languages/symbols.", marks: 1, markCode: "M" },
                { reasoning: "(c) 128 (2^7).", marks: 1, markCode: "M" },
                { reasoning: "(d) Smallest image element.", marks: 1, markCode: "M" },
                { reasoning: "(e) More bits/pixel = bigger file.", marks: 1, markCode: "M" },
                { reasoning: "(f) 24 bits/pixel = 16.7M colours.", marks: 1, markCode: "M" },
                { reasoning: "(g) Emojis are symbols beyond ASCII.", marks: 1, markCode: "M" },
                { reasoning: "(h) 2000×1500×32÷8 = 12,000,000 bytes = 12 MB.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Media encoding and file size calculations.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u1-md-notes", title: "Media representation — notes",
      summary: "Text=chars×bits÷8; images=pixels×depth÷8; sound=rate×depth×time. Higher quality=more bits=bigger files.",
      sections: [
        { heading: "Key idea", body: "File size calculations are exam-relevant — practise formula application." },
        { heading: "Size", body: "More resolution or colour depth = bigger files." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson123",
    lesson: {
      id: "ciealc-u1-lesson-1-3", code: "1-3",
      title: "Data Compression",
      goal: "I CAN explain lossless and lossy compression and apply common algorithms.",
      standards: ["Cambridge A Level Computer Science 9618: data representation", "9618 topic 1: compression"],
      vocabulary: [
        { term: "Compression", definition: "Reducing file size by encoding data efficiently." },
        { term: "Lossless", definition: "Compression allowing exact reconstruction." },
        { term: "Lossy", definition: "Compression discarding data permanently." },
        { term: "Run-length encoding", definition: "Replacing repeats with counts." },
        { term: "Dictionary encoding", definition: "Replacing patterns with codes." },
        { term: "Huffman coding", definition: "Variable-length codes — frequent symbols get shorter codes." },
      ],
      concept: {
        id: "ciealc-u1-s3-comp", title: "Data compression",
        skill: "Compare compression methods at A Level.",
        sections: [
          { heading: "Lossless methods", body: "RLE: 'AAAA'→'4A'. Dictionary: common patterns→short codes. Huffman: variable-length codes where frequent symbols get shorter codes. Used for text, code, medical data." },
          { heading: "Lossy methods", body: "JPEG discards imperceptible image details; MP3 removes inaudible frequencies; MP4 compresses video heavily. Used for media where minor quality loss acceptable. Trade-off: smaller files vs quality." },
        ],
        keyFormulas: [
          { name: "Lossless", statement: "exact restoration — text/code" },
          { name: "Lossy", statement: "data discarded — media" },
          { name: "Huffman", statement: "frequent=symbols shorter codes" },
        ],
        workedExample: {
          problem: "Encode 'HELLO WORLD' using dictionary encoding. Why is it lossless?",
          solution: "Dictionary: H=1, E=2, L=3, O=4, space=5, W=6, R=7, D=8. 'HELLO WORLD'→12334456738. Exact reconstruction possible.",
        },
        questions: [
          {
            id: "ciealc-u1-cp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is compression?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Reducing file size by efficient encoding" }, { id: "b", text: "Deleting files" }, { id: "c", text: "A type of virus" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Compression", statement: "Size reduction." }],
              steps: [{ reasoning: "Compression encodes data to use fewer bits.", marks: 1, markCode: "M" }],
              finalAnswer: "Efficient encoding",
            },
          },
          {
            id: "ciealc-u1-cp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between lossless and lossy compression?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Lossless vs lossy", statement: "Exact vs approximate." }],
              steps: [
                { reasoning: "Lossless=exact restoration; lossy=permanent data loss.", marks: 1, markCode: "M" },
                { reasoning: "Examples for each.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Exact vs approximate",
            },
          },
          {
            id: "ciealc-u1-cp-q3", difficulty: "core", totalMarks: 3,
            stem: "Encode 'AAAAABBBCC' using run-length encoding. Why is this lossless?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "RLE", statement: "Run-length encoding." }],
              steps: [
                { reasoning: "5A3B2C.", marks: 1, markCode: "M" },
                { reasoning: "Exact reconstruction possible — no data lost.", marks: 1, markCode: "M" },
                { reasoning: "Shorter than original.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "5A3B2C; lossless",
            },
          },
          {
            id: "ciealc-u1-cp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define compression, lossless, lossy, RLE, dictionary encoding, Huffman coding, file size. (b) Encode 'BBBBBBAAAB' with RLE. (c) Why is RLE lossless? (d) What is Huffman coding? (e) Why use lossy for JPEG? (f) Why NOT use lossy for text? (g) Compare JPEG vs PNG use cases. (h) Design compression strategy for photo album app.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Compression", statement: "Lossless vs lossy." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 6B3A1B.", marks: 1, markCode: "M" },
                { reasoning: "(c) Exact reconstruction possible.", marks: 1, markCode: "M" },
                { reasoning: "(d) Variable-length codes; frequent=shorter.", marks: 1, markCode: "M" },
                { reasoning: "(e) Photos tolerate minor quality loss.", marks: 1, markCode: "M" },
                { reasoning: "(f) Text needs exact characters.", marks: 1, markCode: "M" },
                { reasoning: "(g) JPEG=photos; PNG=graphics/sharp.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid compression strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Compression methods and applications.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u1-cp-notes", title: "Compression — notes",
      summary: "Lossless=exact (RLE, dictionary, Huffman); lossy=approximate (JPEG, MP3). Choose by data type.",
      sections: [
        { heading: "Key idea", body: "Choose compression based on whether exact data matters." },
        { heading: "Huffman", body: "Frequent symbols get shorter codes — efficient for text." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson124",
    lesson: {
      id: "ciealc-u1-lesson-1-4", code: "1-4",
      title: "Boolean Logic",
      goal: "I CAN construct and analyse logic circuits using Boolean operators and truth tables.",
      standards: ["Cambridge A Level Computer Science 9618: data representation", "9618: Boolean logic"],
      vocabulary: [
        { term: "Boolean", definition: "Logic system with values TRUE/FALSE (1/0)." },
        { term: "AND", definition: "Output TRUE only if all inputs TRUE." },
        { term: "OR", definition: "Output TRUE if any input TRUE." },
        { term: "NOT", definition: "Output is opposite of input." },
        { term: "Logic gate", definition: "Physical circuit implementing Boolean operation." },
        { term: "Truth table", definition: "Table showing output for all input combinations." },
      ],
      concept: {
        id: "ciealc-u1-s4-bool", title: "Boolean logic",
        skill: "Construct and analyse logic circuits at A Level.",
        sections: [
          { heading: "Boolean operators", body: "AND: output 1 only if all inputs 1. OR: output 1 if any input 1. NOT: output is inverse. NAND = NOT AND, NOR = NOT OR, XOR = exclusive OR (1 if inputs differ)." },
          { heading: "Logic circuits", body: "Gates combine: AND/OR/NOT/NAND/NOR/XOR. Build truth tables to verify circuits. Simplify using Boolean algebra: A AND 0 = 0, A OR 1 = 1, A AND A = A." },
        ],
        keyFormulas: [
          { name: "AND", statement: "1 only if all inputs 1" },
          { name: "OR", statement: "1 if any input 1" },
          { name: "NOT", statement: "inverse output" },
          { name: "XOR", statement: "1 if inputs differ" },
        ],
        workedExample: {
          problem: "Draw truth table for XOR gate and simplify A XOR 0.",
          solution: "XOR: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0. A XOR 0 = A.",
        },
        questions: [
          {
            id: "ciealc-u1-bl-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does an AND gate output when inputs are 1 and 0?",
            response: { type: "mcq", choices: [
              { id: "a", text: "0" }, { id: "b", text: "1" }, { id: "c", text: "Depends" }, { id: "d", text: "Error" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "AND gate", statement: "1 only if all 1." }],
              steps: [{ reasoning: "AND needs all inputs 1.", marks: 1, markCode: "M" }],
              finalAnswer: "0",
            },
          },
          {
            id: "ciealc-u1-bl-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between OR and XOR?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "OR vs XOR", statement: "Any vs differ." }],
              steps: [
                { reasoning: "OR=1 if any input 1; XOR=1 only if inputs differ.", marks: 1, markCode: "M" },
                { reasoning: "XOR excludes both-1 case.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Any vs differ",
            },
          },
          {
            id: "ciealc-u1-bl-q3", difficulty: "core", totalMarks: 3,
            stem: "Simplify: A AND 1, A OR 0, A AND NOT A.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Boolean algebra", statement: "Simplification rules." }],
              steps: [
                { reasoning: "A AND 1 = A; A OR 0 = A.", marks: 1, markCode: "M" },
                { reasoning: "A AND NOT A = 0.", marks: 1, markCode: "M" },
                { reasoning: "All three simplified.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "A, A, 0",
            },
          },
          {
            id: "ciealc-u1-bl-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Boolean, AND, OR, NOT, logic gate, truth table, XOR, NAND. (b) Draw truth table for AND. (c) Draw truth table for OR. (d) What is XOR? (e) What is NAND? (f) Simplify: A OR 1, A AND 0, NOT NOT A. (g) What is a logic gate? (h) Design a circuit for 'both inputs must be 1 to activate'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Boolean logic", statement: "Gates, truth tables, simplification." }],
              steps: [
                { reasoning: "(a) All eight definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) AND truth table correct.", marks: 1, markCode: "M" },
                { reasoning: "(c) OR truth table correct.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1 if inputs differ.", marks: 1, markCode: "M" },
                { reasoning: "(e) NOT AND — 0 only if all 1.", marks: 1, markCode: "M" },
                { reasoning: "(f) 1, 0, A.", marks: 1, markCode: "M" },
                { reasoning: "(g) Physical circuit for Boolean ops.", marks: 1, markCode: "M" },
                { reasoning: "(h) AND gate design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Boolean logic and circuits.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u1-bl-notes", title: "Boolean logic — notes",
      summary: "AND=all 1, OR=any 1, NOT=inverse, XOR=differ. Gates implement logic; truth tables verify.",
      sections: [
        { heading: "Key idea", body: "Boolean algebra simplifies circuits — A AND 0 = 0." },
        { heading: "Gates", body: "AND/OR/NOT/NAND/NOR/XOR — combine for complex logic." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson125",
    lesson: {
      id: "ciealc-u1-lesson-1-5", code: "1-5",
      title: "Encryption and Data Security",
      goal: "I CAN explain encryption methods and their role in data security.",
      standards: ["Cambridge A Level Computer Science 9618: data security", "9618: encryption"],
      vocabulary: [
        { term: "Encryption", definition: "Scrambling data so only authorised parties read it." },
        { term: "Cipher", definition: "Algorithm for encrypting/decrypting data." },
        { term: "Symmetric encryption", definition: "Same key encrypts and decrypts." },
        { term: "Asymmetric encryption", definition: "Public key encrypts, private key decrypts." },
        { term: "Public key", definition: "Key shared openly for encryption." },
        { term: "Private key", definition: "Secret key for decryption." },
      ],
      concept: {
        id: "ciealc-u1-s5-enc", title: "Encryption",
        skill: "Explain symmetric vs asymmetric encryption at A Level.",
        sections: [
          { heading: "Symmetric encryption", body: "Same key encrypts and decrypts — fast but key distribution problem: how to share key securely? Used for bulk data encryption." },
          { heading: "Asymmetric encryption", body: "Public key encrypts, private key decrypts — solves key distribution. Slower but secure. Used for key exchange, digital signatures, HTTPS." },
        ],
        keyFormulas: [
          { name: "Symmetric", statement: "same key both ways" },
          { name: "Asymmetric", statement: "public encrypts, private decrypts" },
        ],
        workedExample: {
          problem: "Why does HTTPS use both symmetric and asymmetric encryption?",
          solution: "Asymmetric establishes secure connection (key exchange); symmetric encrypts bulk data (faster).",
        },
        questions: [
          {
            id: "ciealc-u1-en-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is encryption?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Scrambling data so only authorised parties read it" }, { id: "b", text: "Deleting files" }, { id: "c", text: "A type of virus" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Encryption", statement: "Data scrambling." }],
              steps: [{ reasoning: "Encryption protects data confidentiality.", marks: 1, markCode: "M" }],
              finalAnswer: "Data scrambling",
            },
          },
          {
            id: "ciealc-u1-en-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between symmetric and asymmetric encryption?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Symmetric vs asymmetric", statement: "Same vs different keys." }],
              steps: [
                { reasoning: "Symmetric=same key; asymmetric=public/private pair.", marks: 1, markCode: "M" },
                { reasoning: "Symmetric faster; asymmetric solves key distribution.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Same key vs key pair",
            },
          },
          {
            id: "ciealc-u1-en-q3", difficulty: "core", totalMarks: 3,
            stem: "Why does HTTPS use both symmetric and asymmetric encryption?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "HTTPS", statement: "Hybrid encryption." }],
              steps: [
                { reasoning: "Asymmetric for secure key exchange.", marks: 1, markCode: "M" },
                { reasoning: "Symmetric for fast bulk data encryption.", marks: 1, markCode: "M" },
                { reasoning: "Combines security and speed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Asymmetric=key exchange; symmetric=data",
            },
          },
          {
            id: "ciealc-u1-en-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define encryption, cipher, symmetric, asymmetric, public key, private key. (b) What is symmetric encryption? (c) What is asymmetric encryption? (d) What is the key distribution problem? (e) How does asymmetric solve it? (f) Why is asymmetric slower? (g) What is a digital signature? (h) Explain how HTTPS establishes a secure connection.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Encryption", statement: "Symmetric vs asymmetric." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Same key encrypts/decrypts.", marks: 1, markCode: "M" },
                { reasoning: "(c) Public encrypts, private decrypts.", marks: 1, markCode: "M" },
                { reasoning: "(d) Sharing symmetric key securely.", marks: 1, markCode: "M" },
                { reasoning: "(e) Public key can be shared openly.", marks: 1, markCode: "M" },
                { reasoning: "(f) Complex math operations.", marks: 1, markCode: "M" },
                { reasoning: "(g) Encrypted hash proving authenticity.", marks: 1, markCode: "M" },
                { reasoning: "(h) Asymmetric handshake→symmetric session.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Encryption methods and security.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u1-en-notes", title: "Encryption — notes",
      summary: "Symmetric=fast same key; asymmetric=secure key pair. HTTPS uses both for speed+security.",
      sections: [
        { heading: "Key idea", body: "Asymmetric solves key distribution; symmetric handles bulk data." },
        { heading: "HTTPS", body: "Asymmetric handshake → symmetric session encryption." },
      ],
    },
  },
];
