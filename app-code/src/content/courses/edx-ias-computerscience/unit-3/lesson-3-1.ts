import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eiascs-u3-lesson-3-1",
  code: "3-1",
  title: "Binary Representation",
  goal: "I CAN convert between denary and binary and explain number systems.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 3 — Data Representation",
  ],
  vocabulary: [
    { term: "Binary", definition: "Base-2 number system — digits 0 and 1." },
    { term: "Denary", definition: "Base-10 number system — digits 0-9." },
    { term: "Bit", definition: "Binary digit — 0 or 1." },
    { term: "Byte", definition: "8 bits — unit of storage." },
    {
      term: "Place value",
      definition: "Value depends on position — powers of 2.",
    },
    { term: "Hexadecimal", definition: "Base-16 number system — 0-9, A-F." },
  ],
  concepts: [
    {
      id: "eiascs-u3-binary",
      title: "Binary Numbers",
      skill: "Convert between binary and denary.",
      lesson: {
        sections: [
          {
            heading: "Binary basics",
            body: "**Binary**: base-2 — only 0 and 1. **Why**: transistors on/off — 0=off, 1=on. **Place values**: powers of 2 — 128, 64, 32, 16, 8, 4, 2, 1 (8-bit).\n\n**Denary to binary**: divide by 2 repeatedly, record remainders, read bottom-up. **Binary to denary**: multiply each bit by place value, sum.",
          },
          {
            heading: "Converting examples",
            body: "**5 in binary**: 4+1 = 101. **13 in binary**: 8+4+1 = 1101. **1010 binary**: 8+2 = 10 denary. **1111 binary**: 8+4+2+1 = 15.\n\n**Binary digits**: 4-bit = 0-15; 8-bit = 0-255. **n bits** = 2^n values.",
          },
        ],
        keyFormulas: [
          {
            name: "Binary place values",
            statement: "Powers of 2 right-to-left: 1, 2, 4, 8, 16, 32, 64, 128",
          },
          { name: "n bits", statement: "2^n possible values" },
        ],
        workedExample: {
          problem: "Convert 9 to binary.",
          solution: "9 = 8 + 1 = 1001.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-bin-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What digits are used in binary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0 and 1" },
              { id: "b", text: "0-9" },
              { id: "c", text: "0-5" },
              { id: "d", text: "A-F" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binary", statement: "Base-2." },
            ],
            steps: [
              { reasoning: "Binary = 0,1 only.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 0 and 1",
            commonErrors: ["Denary confused."],
          },
        },
        {
          id: "eiascs-u3-bin-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 6 to binary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Denary to binary",
                statement: "Divide by 2.",
              },
            ],
            steps: [
              {
                reasoning: "6/2=3 r0, 3/2=1 r1, 1/2=0 r1.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Read remainders bottom-up: 110.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Verify: 4+2 = 6. Correct.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "110.",
            commonErrors: ["011.", "No verify."],
          },
        },
        {
          id: "eiascs-u3-bin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert 1011 binary to denary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Binary to denary",
                statement: "Multiply + sum.",
              },
            ],
            steps: [
              {
                reasoning: "Place values: 8,4,2,1.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "1*8 + 0*4 + 1*2 + 1*1 = 11.",
                marks: 2,
                markCode: "AO2",
              },
              { reasoning: "Answer: 11.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "11.",
            commonErrors: ["13 — wrong place value."],
          },
        },
        {
          id: "eiascs-u3-bin-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How many values can 4 bits represent?",
          parts: [
            { label: "a", prompt: "Calculate using formula.", marks: 4 },
            { label: "b", prompt: "List all values.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Bits to values", statement: "2^n." },
            ],
            steps: [
              {
                reasoning: "(a) 2^4 = 16 values.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Values 0-15.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) 0000-1111 = 0,1,2,...,15.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) All combinations listed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 16 (b) 0-15",
            commonErrors: ["8 values.", "Incomplete list."],
          },
        },
      ],
    },
    {
      id: "eiascs-u3-hex",
      title: "Hexadecimal and Binary Operations",
      skill:
        "Convert between binary and hexadecimal, perform binary operations.",
      lesson: {
        sections: [
          {
            heading: "Hexadecimal",
            body: "**Hex**: base-16 — 0-9, A-F (10-15). **Why**: compact binary — 4 bits = 1 hex digit. **Conversion**: split binary into 4-bit groups, convert each.\n\n**Example**: 1101 1010 binary = DA hex (13=1101, 10=1010). **Binary to hex**: pad to multiple of 4 bits, group, convert. **Hex to binary**: each hex digit → 4 bits.",
          },
          {
            heading: "Binary operations",
            body: "**AND**: 1 AND 1 = 1; else 0 — both must be 1. **OR**: 1 OR 0 = 1; 0 OR 0 = 0 — either can be 1. **NOT**: flips — 1→0, 0→1. **XOR**: 1 XOR 1 = 0; different = 1.\n\n**Uses**: AND=masking, OR=combining, NOT=invert, XOR=encryption.",
          },
        ],
        keyFormulas: [
          {
            name: "4 bits = 1 hex digit",
            statement: "Hex compact representation",
          },
          { name: "Binary AND/OR/NOT", statement: "Bitwise operations" },
        ],
        workedExample: {
          problem: "1010 AND 1100 = ?",
          solution: "1000 (bit by bit).",
        },
      },
      questions: [
        {
          id: "eiascs-u3-hex-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What base is hexadecimal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Base-2" },
              { id: "b", text: "Base-8" },
              { id: "c", text: "Base-16" },
              { id: "d", text: "Base-10" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hexadecimal",
                statement: "Base-16.",
              },
            ],
            steps: [{ reasoning: "Hex = base-16.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(c)** Base-16",
            commonErrors: ["Binary confused."],
          },
        },
        {
          id: "eiascs-u3-hex-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 1010 binary to hex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Binary to hex",
                statement: "Groups of 4.",
              },
            ],
            steps: [
              { reasoning: "1010 = 10 in hex.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Or: pad to 4 bits, group, convert.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer: A hex.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A.",
            commonErrors: ["10 hex."],
          },
        },
        {
          id: "eiascs-u3-hex-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 1010 AND 1100.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Binary AND", statement: "Bitwise." },
            ],
            steps: [
              {
                reasoning: "Align bits: 1010, 1100.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "1 AND 1 = 1; 0 AND 1 = 0; 1 AND 0 = 0; 0 AND 0 = 0.",
                marks: 2,
                markCode: "AO2",
              },
              { reasoning: "Result: 1000.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1000.",
            commonErrors: ["1110 — wrong AND."],
          },
        },
        {
          id: "eiascs-u3-hex-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Convert DA hex to binary and denary.",
          parts: [
            { label: "a", prompt: "To binary.", marks: 4 },
            { label: "b", prompt: "To denary.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Hex conversion",
                statement: "Digit → 4 bits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) D=13=1101, A=10=1010 → 11011010.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Verify groups of 4.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) 128+64+0+16+0+0+8+0+0+2 = wait: 11011010 = 128+64+16+8+2=218.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Answer: 218.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 11011010 (b) 218",
            commonErrors: ["Wrong binary.", "Wrong denary."],
          },
        },
      ],
    },
    {
      id: "eiascs-u3-encoding",
      title: "Character Encoding and Data Types",
      skill: "Explain how text, numbers and images are represented in binary.",
      lesson: {
        sections: [
          {
            heading: "Character encoding",
            body: "**ASCII**: 7-bit — 128 characters — English only. **Unicode/UTF-8**: variable length — all languages. **Each character**: binary code — 'A' = 65 = 1000001.\n\n**Image data**: pixels — each pixel has RGB values (red, green, blue) — 24-bit color = 16.7 million colors. **Sound**: samples — amplitude measured at intervals — 44.1kHz CD quality.",
          },
          {
            heading: "Data representation",
            body: "**Numbers**: integer (whole), real (decimal). **Text**: character codes. **Images**: pixel values. **Sound**: amplitude samples. **Video**: sequence of images + sound.\n\n**File formats**: .txt (text), .jpg (compressed image), .mp3 (compressed audio), .mp4 (video).",
          },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7-bit character encoding" },
          { name: "UTF-8", statement: "Variable-length Unicode encoding" },
          { name: "RGB", statement: "Red-Green-Blue color model" },
        ],
        workedExample: {
          problem: "Image has 100x100 pixels, 24-bit color. Total bits?",
          solution: "100*100*24 = 240,000 bits.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-enc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is ASCII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character encoding" },
              { id: "b", text: "Number system" },
              { id: "c", text: "File format" },
              { id: "d", text: "Image format" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ASCII",
                statement: "Character encoding.",
              },
            ],
            steps: [
              {
                reasoning: "ASCII = character codes.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Character encoding",
            commonErrors: ["Image confused."],
          },
        },
        {
          id: "eiascs-u3-enc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How are images represented in binary?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Image representation",
                statement: "Pixels + RGB.",
              },
            ],
            steps: [
              {
                reasoning: "Image = grid of pixels.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each pixel = RGB values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "24-bit color = 8 bits each for R,G,B.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Pixels with RGB values.",
            commonErrors: ["Vector confused.", "No RGB."],
          },
        },
        {
          id: "eiascs-u3-enc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Unicode is better than ASCII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unicode advantage",
                statement: "All languages.",
              },
            ],
            steps: [
              {
                reasoning: "ASCII limited to English — 128 chars.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unicode covers all languages — millions of chars.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "UTF-8 variable length — efficient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Modern standard — supports emojis, symbols.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "All languages + efficient.",
            commonErrors: ["ASCII enough.", "No difference."],
          },
        },
        {
          id: "eiascs-u3-enc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Calculate file size for 1000x800 image, 24-bit color, no compression.",
          parts: [
            { label: "a", prompt: "Calculate total pixels.", marks: 4 },
            { label: "b", prompt: "Calculate file size in MB.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "File size",
                statement: "Pixels x bits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 1000 * 800 = 800,000 pixels.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Each pixel 24 bits.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) 800,000 * 24 = 19,200,000 bits = 2,400,000 bytes = 2.4 MB.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Answer: ~2.4 MB.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 800,000 pixels (b) 2.4 MB",
            commonErrors: ["Wrong pixels.", "Wrong conversion."],
          },
        },
      ],
    },
  ],
};
