import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eiascs-u3-lesson-3-2",
  code: "3-2",
  title: "Boolean Logic and Data Types",
  goal: "I CAN apply Boolean operations and understand data type representation.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 3 — Data Representation",
  ],
  vocabulary: [
    { term: "Boolean", definition: "True/false values — 1 bit." },
    {
      term: "Logic gate",
      definition: "Electronic circuit performing Boolean operation.",
    },
    { term: "AND gate", definition: "Output 1 only if both inputs 1." },
    { term: "OR gate", definition: "Output 1 if either input 1." },
    { term: "NOT gate", definition: "Inverts input — 0→1, 1→0." },
    {
      term: "Truth table",
      definition: "Table showing all input/output combinations.",
    },
  ],
  concepts: [
    {
      id: "eiascs-u3-boolean",
      title: "Boolean Logic",
      skill: "Apply Boolean operations and truth tables.",
      lesson: {
        sections: [
          {
            heading: "Boolean values",
            body: "**Boolean**: true/false — represented as 1/0 — 1 bit. **Boolean algebra**: operations on true/false values. **Truth table**: shows output for all input combinations — AND has 4 rows, NOT has 2.\n\n**Logic gates**: electronic circuits — AND, OR, NOT, XOR, NAND, NOR. **Combinations**: complex circuits from simple gates — processors use millions.",
          },
          {
            heading: "Truth tables",
            body: "**AND**: 0 AND 0=0, 0 AND 1=0, 1 AND 0=0, 1 AND 1=1. **OR**: 0 OR 0=0, 0 OR 1=1, 1 OR 0=1, 1 OR 1=1. **NOT**: NOT 0=1, NOT 1=0.\n\n**Application**: circuit design, programming conditions, digital logic.",
          },
        ],
        keyFormulas: [
          { name: "AND", statement: "1 only if both 1" },
          { name: "OR", statement: "1 if either 1" },
          { name: "NOT", statement: "Invert" },
        ],
        workedExample: { problem: "1 OR 0 = ?", solution: "1." },
      },
      questions: [
        {
          id: "eiascs-u3-bool-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a Boolean value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "True or false" },
              { id: "b", text: "Any number" },
              { id: "c", text: "Character" },
              { id: "d", text: "Image" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Boolean", statement: "True/false." },
            ],
            steps: [
              { reasoning: "Boolean = true/false.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** True/false",
            commonErrors: ["Number confused."],
          },
        },
        {
          id: "eiascs-u3-bool-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate: 1 AND 0.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "AND operation",
                statement: "Both must be 1.",
              },
            ],
            steps: [
              {
                reasoning: "AND: both inputs must be 1.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "1 AND 0: second input 0 → result 0.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer: 0.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "0.",
            commonErrors: ["1 — wrong AND."],
          },
        },
        {
          id: "eiascs-u3-bool-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a truth table shows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Truth table",
                statement: "All combinations.",
              },
            ],
            steps: [
              {
                reasoning: "Lists all possible input combinations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows output for each combination.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "AND has 4 rows (2 inputs × 2 values).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Used to verify logic, design circuits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "All input/output combinations.",
            commonErrors: ["One row.", "No purpose."],
          },
        },
        {
          id: "eiascs-u3-bool-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Circuit: output = (A AND B) OR (NOT A AND B).",
          parts: [
            { label: "a", prompt: "Simplify expression.", marks: 4 },
            { label: "b", prompt: "Explain result.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boolean simplification",
                statement: "Algebra rules.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Factor B: B AND (A OR NOT A) = B AND 1 = B.",
                marks: 3,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(a) Simplified: output = B.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) When B=1, output always 1 regardless of A.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) When B=0, output always 0.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) B (b) output=B",
            commonErrors: ["No simplification.", "Wrong result."],
          },
        },
      ],
    },
    {
      id: "eiascs-u3-compression",
      title: "Data Compression and Encryption",
      skill: "Explain compression methods and basic encryption.",
      lesson: {
        sections: [
          {
            heading: "Compression",
            body: "**Lossless**: no data loss — ZIP, PNG, FLAC. **Lossy**: reduces quality — JPEG, MP3, video. **Why**: smaller files = faster transfer, less storage. **Trade-off**: lossy = smaller but quality loss.\n\n**Methods**: run-length encoding (repeat values), dictionary coding (common patterns), perceptual coding (remove imperceptible data).",
          },
          {
            heading: "Encryption",
            body: "**Encryption**: encode data so only authorised can read. **Symmetric**: same key encrypt/decrypt — AES, DES. **Asymmetric**: public/private keys — RSA. **Uses**: secure communication, HTTPS, banking.\n\n**Hashing**: one-way — can't reverse — passwords stored as hashes. **SSL/TLS**: encrypts web traffic.",
          },
        ],
        keyFormulas: [
          { name: "Lossless", statement: "No data loss" },
          { name: "Lossy", statement: "Quality reduced for size" },
          { name: "Symmetric/Asymmetric", statement: "Same key vs key pair" },
        ],
        workedExample: {
          problem:
            "MP3 file smaller than WAV but lower quality. Compression type?",
          solution: "Lossy.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is lossy compression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stores data" },
              { id: "b", text: "Reduces quality for smaller size" },
              { id: "c", text: "No data loss" },
              { id: "d", text: "Encrypts data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lossy", statement: "Quality loss." },
            ],
            steps: [
              {
                reasoning: "Lossy = quality reduced.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Quality loss",
            commonErrors: ["Lossless confused."],
          },
        },
        {
          id: "eiascs-u3-comp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two uses of encryption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Encryption uses",
                statement: "Secure communication.",
              },
            ],
            steps: [
              {
                reasoning: "Secure web traffic — HTTPS.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protect sensitive data — banking, passwords.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Private messaging — end-to-end encryption.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "HTTPS, banking, messaging.",
            commonErrors: ["Only one.", "Wrong use."],
          },
        },
        {
          id: "eiascs-u3-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain symmetric vs asymmetric encryption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Symmetric vs asymmetric",
                statement: "Same vs different keys.",
              },
            ],
            steps: [
              {
                reasoning: "Symmetric: same key encrypts and decrypts — fast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Asymmetric: public encrypts, private decrypts — secure key exchange.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Symmetric: key distribution problem.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Asymmetric: slower but solves key exchange.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Same key vs key pair.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u3-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare JPEG vs PNG for storing photos.",
          parts: [
            { label: "a", prompt: "Compare compression.", marks: 4 },
            { label: "b", prompt: "Recommend for photos.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "JPEG vs PNG",
                statement: "Lossy vs lossless.",
              },
            ],
            steps: [
              {
                reasoning: "(a) JPEG lossy — smaller, quality loss.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) PNG lossless — larger, no quality loss.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) JPEG for photos — smaller files acceptable quality loss.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) PNG for graphics/text — need sharp edges.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) JPEG lossy, PNG lossless (b) JPEG for photos",
            commonErrors: ["PNG always.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "eiascs-u3-representation",
      title: "Data Representation Summary",
      skill: "Summarise how different data types are represented in binary.",
      lesson: {
        sections: [
          {
            heading: "Data type representation",
            body: "**Numbers**: binary — integers, reals (floating point). **Text**: character codes — ASCII, Unicode. **Images**: pixels — RGB values, resolution. **Sound**: samples — amplitude over time. **Video**: image sequences + audio.\n\n**File size**: resolution × color depth × duration. **Compression**: reduces size — lossy or lossless.",
          },
          {
            heading: "Evaluation",
            body: "**Trade-offs**: quality vs file size; accuracy vs storage. **Context matters**: photos need JPEG, documents need PNG, music needs MP3. **Future**: higher resolution, better compression — more data.\n\n**Understanding**: all digital data = binary — different representations for different purposes.",
          },
        ],
        keyFormulas: [
          {
            name: "File size",
            statement: "Resolution × color depth × duration",
          },
          { name: "All data", statement: "Binary representation" },
        ],
        workedExample: {
          problem: "Video file larger than audio. Why?",
          solution: "Images + audio = more data.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-rep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How is text stored in binary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As numbers" },
              { id: "b", text: "As character codes" },
              { id: "c", text: "As audio" },
              { id: "d", text: "As images" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text representation",
                statement: "Character codes.",
              },
            ],
            steps: [
              {
                reasoning: "Text = character codes.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Character codes",
            commonErrors: ["Image confused."],
          },
        },
        {
          id: "eiascs-u3-rep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors affecting file size.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "File size factors",
                statement: "Resolution + duration.",
              },
            ],
            steps: [
              {
                reasoning: "Resolution — more pixels = larger.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Color depth — more bits per pixel = larger.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Duration — longer audio/video = larger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Resolution, color depth, duration.",
            commonErrors: ["Only one.", "Wrong factor."],
          },
        },
        {
          id: "eiascs-u3-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why all digital data is binary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binary universality",
                statement: "Two states only.",
              },
            ],
            steps: [
              {
                reasoning: "Computers use transistors — on/off only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "On = 1, off = 0 — two states.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "All data encoded as 0s and 1s — different schemes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Universal representation — any data type possible.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Transistors = 2 states = binary.",
            commonErrors: ["Not binary.", "No reason."],
          },
        },
        {
          id: "eiascs-u3-rep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare file sizes: 10-second video vs 10-second audio.",
          parts: [
            { label: "a", prompt: "Explain why video larger.", marks: 4 },
            { label: "b", prompt: "Suggest compression.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data comparison",
                statement: "More data = larger.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Video = images + audio — more data.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Images: resolution × color depth × frame rate.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Lossy compression — reduce quality for size.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Lower resolution, frame rate, or codec.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) images+audio (b) lossy compression",
            commonErrors: ["Same size.", "No compression."],
          },
        },
      ],
    },
  ],
};
