import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eiascs-u3-lesson-3-3",
  code: "3-3",
  title: "File Formats and Data Integrity",
  goal: "I CAN explain file formats, data validation and integrity checks.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 3 — Data Representation",
  ],
  vocabulary: [
    { term: "File format", definition: "Structure and encoding of file data." },
    {
      term: "File extension",
      definition: "Suffix indicating format — .txt, .jpg.",
    },
    {
      term: "Data validation",
      definition: "Checking data is reasonable — range, type.",
    },
    { term: "Checksum", definition: "Sum used to verify data integrity." },
    { term: "Parity bit", definition: "Extra bit for error detection." },
    { term: "Metadata", definition: "Data about data — file info." },
  ],
  concepts: [
    {
      id: "eiascs-u3-formats",
      title: "File Formats and Metadata",
      skill: "Identify file formats and their uses.",
      lesson: {
        sections: [
          {
            heading: "File formats",
            body: "**Text**: .txt (plain), .docx (formatted), .pdf (fixed layout). **Image**: .jpg (lossy photo), .png (lossless graphic), .gif (animation), .svg (vector). **Audio**: .mp3 (lossy), .wav (lossless), .flac (lossless compressed). **Video**: .mp4 (compressed), .avi (older).\n\n**Choice matters**: photos → JPEG; graphics → PNG; documents → PDF; music → MP3.",
          },
          {
            heading: "Metadata",
            body: "**Metadata**: data about data — author, date, resolution, camera settings. **Purpose**: organise, search, verify, rights management. **EXIF**: image metadata — camera, location, settings.\n\n**Privacy**: metadata can reveal personal info — location, device — should be aware.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "File named photo.jpg — what format?",
          solution: "JPEG — lossy image.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-fmt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does .png extension indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lossless image" },
              { id: "b", text: "Audio" },
              { id: "c", text: "Lossy image" },
              { id: "d", text: "Video" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PNG", statement: "Lossless image." },
            ],
            steps: [
              { reasoning: "PNG = lossless image.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Lossless image",
            commonErrors: ["JPEG confused."],
          },
        },
        {
          id: "eiascs-u3-fmt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two uses of metadata.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metadata uses",
                statement: "Organise + search.",
              },
            ],
            steps: [
              {
                reasoning: "Organise files — sort by date, author.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Search — find files by properties.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Verify — check authenticity, rights.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Organise, search, verify.",
            commonErrors: ["Only one.", "Wrong use."],
          },
        },
        {
          id: "eiascs-u3-fmt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why file format choice matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Format importance",
                statement: "Purpose + compatibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Purpose — photo vs document vs audio need different formats.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Compatibility — some apps only open certain formats.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Size — compression affects file size.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Quality — lossy vs lossless affects fidelity.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Purpose+compatibility+size+quality.",
            commonErrors: ["Any format.", "One reason."],
          },
        },
        {
          id: "eiascs-u3-fmt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Choose format for storing scanned documents.",
          parts: [
            { label: "a", prompt: "Suggest format.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Format selection",
                statement: "Need + purpose.",
              },
            ],
            steps: [
              {
                reasoning: "(a) PDF — standard for documents.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Or PNG if need editable images.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) PDF preserves layout, universally readable.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Compressed — smaller than images.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) PDF (b) layout+universal+compressed",
            commonErrors: ["JPEG.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiascs-u3-validation",
      title: "Data Validation and Integrity",
      skill: "Explain data validation methods and error detection.",
      lesson: {
        sections: [
          {
            heading: "Data validation",
            body: "**Type check**: is data correct type — number vs text. **Range check**: within limits — age 0-120. **Format check**: matches pattern — email has @. **Presence check**: required field filled. **Length check**: within character limits.\n\n**Purpose**: prevent invalid data entry — reduces errors, improves data quality.",
          },
          {
            heading: "Integrity checks",
            body: "**Checksum**: sum of data — detect changes during transmission. **Parity bit**: extra bit makes total even/odd — detect single-bit errors. **Hash**: complex checksum — verify file integrity.\n\n**Error detection**: checksums catch most errors; hashes for critical data.",
          },
        ],
        keyFormulas: [
          { name: "Checksum", statement: "Sum for error detection" },
          { name: "Parity bit", statement: "Even/odd bit check" },
        ],
        workedExample: {
          problem: "Age field accepts -5. What check missing?",
          solution: "Range check.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-val-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is data validation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Checking data is reasonable" },
              { id: "b", text: "Compressing data" },
              { id: "c", text: "Deleting data" },
              { id: "d", text: "Encrypting data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validation",
                statement: "Check reasonableness.",
              },
            ],
            steps: [
              {
                reasoning: "Validation = check data.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Check data",
            commonErrors: ["Encryption confused."],
          },
        },
        {
          id: "eiascs-u3-val-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two validation checks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validation types",
                statement: "Type, range, format.",
              },
            ],
            steps: [
              {
                reasoning: "Type check — number vs text.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Range check — within limits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Format check — matches pattern.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Type, range, format, presence, length.",
            commonErrors: ["Only one.", "Wrong check."],
          },
        },
        {
          id: "eiascs-u3-val-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how checksums detect errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Checksum",
                statement: "Sum verification.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate sum of data before sending.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Send data + checksum together.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Receiver recalculates sum — compares.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mismatch = error detected — request resend.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sum + compare = detect errors.",
            commonErrors: ["No process.", "No detection."],
          },
        },
        {
          id: "eiascs-u3-val-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design validation for email address field.",
          parts: [
            { label: "a", prompt: "Identify checks needed.", marks: 4 },
            { label: "b", prompt: "Explain each check.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validation design",
                statement: "Multiple checks.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Presence — field not empty.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Format — has @ and domain.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Length — reasonable limits.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Characters — valid email characters.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Each check prevents specific error type.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Combined checks ensure valid email.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) presence+format+length+chars (b) prevent errors",
            commonErrors: ["One check only.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eiascs-u3-summary",
      title: "Data Representation Summary",
      skill: "Summarise data representation concepts.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Binary**: base-2 — all digital data. **Hex**: compact binary. **Encoding**: ASCII, Unicode for text. **Images**: pixels + RGB. **Compression**: lossy vs lossless. **Encryption**: secure data. **Validation**: check data quality. **Integrity**: checksums, hashes.\n\n**Key idea**: all data = binary — representation depends on type and purpose.",
          },
          {
            heading: "Exam preparation",
            body: "**Conversions**: binary↔denary↔hex — practice essential. **File size**: resolution × color × duration. **Compression**: when to use lossy vs lossless. **Security**: encryption types, validation importance.\n\n**Evaluation**: trade-offs — quality vs size, security vs speed.",
          },
        ],
        keyFormulas: [
          { name: "Binary/Hex", statement: "Number systems" },
          { name: "File size", statement: "Resolution × color × duration" },
        ],
        workedExample: {
          problem: "All data stored as binary. True or false?",
          solution: "True.",
        },
      },
      questions: [
        {
          id: "eiascs-u3-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What number system do computers use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Octal" },
              { id: "b", text: "Binary" },
              { id: "c", text: "Decimal" },
              { id: "d", text: "Hexadecimal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Computer number system",
                statement: "Binary.",
              },
            ],
            steps: [
              { reasoning: "Computers use binary.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Binary",
            commonErrors: ["Decimal confused."],
          },
        },
        {
          id: "eiascs-u3-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two compression types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compression types",
                statement: "Lossy + lossless.",
              },
            ],
            steps: [
              {
                reasoning: "Lossy — quality reduced, smaller size.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lossless — no data loss.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Examples: JPEG lossy, PNG lossless.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Lossy, lossless.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiascs-u3-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why data validation is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validation importance",
                statement: "Data quality.",
              },
            ],
            steps: [
              {
                reasoning: "Prevents invalid data — reduces errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Improves data quality — reliable results.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Saves time — catch errors early.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Security — prevents malicious input.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Quality+reliability+security.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u3-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Store 100 photos for website.",
          parts: [
            { label: "a", prompt: "Choose format.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Format selection",
                statement: "Need + context.",
              },
            ],
            steps: [
              {
                reasoning: "(a) JPEG — lossy compression for photos.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Smaller files = faster loading.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Acceptable quality loss for web.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) PNG if need transparency/sharpness.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) JPEG (b) size+acceptable quality",
            commonErrors: ["PNG always.", "No justification."],
          },
        },
      ],
    },
  ],
};
