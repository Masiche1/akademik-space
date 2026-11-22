import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "ciealc-u1-lesson-1-3",
  code: "1-3",
  title: "Data Compression",
  goal: "I CAN explain lossless and lossy compression and apply common algorithms.",
  standards: [
    "Cambridge A Level Computer Science 9618: data representation",
    "9618 topic 1: compression",
  ],

  vocabulary: [
    {
      term: "Compression",
      definition: "Reducing file size by encoding data efficiently.",
    },
    {
      term: "Lossless",
      definition: "Compression allowing exact reconstruction.",
    },
    { term: "Lossy", definition: "Compression discarding data permanently." },
    {
      term: "Run-length encoding",
      definition: "Replacing repeats with counts.",
    },
    {
      term: "Dictionary encoding",
      definition: "Replacing patterns with codes.",
    },
    {
      term: "Huffman coding",
      definition: "Variable-length codes — frequent symbols get shorter codes.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u1-s3-comp",
      title: "Data compression",
      skill: "Compare compression methods at A Level.",
      lesson: {
        sections: [
          {
            heading: "Lossless methods",
            body: "RLE: 'AAAA'→'4A'. Dictionary: common patterns→short codes. Huffman: variable-length codes where frequent symbols get shorter codes. Used for text, code, medical data.",
          },
          {
            heading: "Lossy methods",
            body: "JPEG discards imperceptible image details; MP3 removes inaudible frequencies; MP4 compresses video heavily. Used for media where minor quality loss acceptable. Trade-off: smaller files vs quality.",
          },
        ],
        keyFormulas: [
          { name: "Lossless", statement: "exact restoration — text/code" },
          { name: "Lossy", statement: "data discarded — media" },
          { name: "Huffman", statement: "frequent=symbols shorter codes" },
        ],
        workedExample: {
          problem:
            "Encode 'HELLO WORLD' using dictionary encoding. Why is it lossless?",
          solution:
            "Dictionary: H=1, E=2, L=3, O=4, space=5, W=6, R=7, D=8. 'HELLO WORLD'→12334456738. Exact reconstruction possible.",
        },
      },
      questions: [
        {
          id: "ciealc-u1-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is compression?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Deleting files",
              },
              {
                id: "b",
                text: "Reducing file size by efficient encoding",
              },
              {
                id: "c",
                text: "A type of virus",
              },
              {
                id: "d",
                text: "A network cable",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compression",
                statement: "Size reduction.",
              },
            ],
            steps: [
              {
                reasoning: "Compression encodes data to use fewer bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Efficient encoding",
          },
        },
        {
          id: "ciealc-u1-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between lossless and lossy compression?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lossless vs lossy",
                statement: "Exact vs approximate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lossless=exact restoration; lossy=permanent data loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples for each.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Exact vs approximate",
          },
        },
        {
          id: "ciealc-u1-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Encode 'AAAAABBBCC' using run-length encoding. Why is this lossless?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "RLE",
                statement: "Run-length encoding.",
              },
            ],
            steps: [
              {
                reasoning: "5A3B2C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exact reconstruction possible — no data lost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shorter than original.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5A3B2C; lossless",
          },
        },
        {
          id: "ciealc-u1-cp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define compression, lossless, lossy, RLE, dictionary encoding, Huffman coding, file size. (b) Encode 'BBBBBBAAAB' with RLE. (c) Why is RLE lossless? (d) What is Huffman coding? (e) Why use lossy for JPEG? (f) Why NOT use lossy for text? (g) Compare JPEG vs PNG use cases. (h) Design compression strategy for photo album app.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Compression",
                statement: "Lossless vs lossy.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 6B3A1B.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Exact reconstruction possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Variable-length codes; frequent=shorter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Photos tolerate minor quality loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Text needs exact characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) JPEG=photos; PNG=graphics/sharp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid compression strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Compression methods and applications.",
          },
        },
        {
          id: "ciealc-u1-cp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does run-length encoding replace in a sequence such as AAAAAB?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated symbols with a count and the symbol" },
              { id: "b", text: "Symbols with encrypted codes" },
              { id: "c", text: "The whole file with a checksum" },
              { id: "d", text: "Every symbol with a random number" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Run-length encoding",
                statement: "Runs become count + symbol.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RLE stores a run length followed by the repeated symbol.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Count and symbol",
          },
        },
        {
          id: "ciealc-u1-cp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Encode AAABBBCC using run-length encoding. How many characters are in the encoded string? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "RLE length",
                statement: "Each run contributes count + symbol.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3A3B2C has 6 characters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciealc-u1-cp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Huffman coding, symbol A has code 0, B has code 10 and C has code 11. Calculate the total number of bits needed to encode AABAC. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Huffman bits",
                statement: "Sum code lengths for each symbol.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A=1 bit ×3, B=2 bits ×1, C=2 bits ×1 gives 3+2+2=7 bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7 bits",
          },
        },
        {
          id: "ciealc-u1-cp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which file type must normally use lossless compression rather than lossy compression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A music streaming preview" },
              { id: "b", text: "A program's executable code" },
              { id: "c", text: "A social media profile photo" },
              { id: "d", text: "A video call recording" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lossless requirement",
                statement: "Exact data must be restored.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Executable code must decompress exactly; media can tolerate loss.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Executable code",
          },
        },
        {
          id: "ciealc-u1-cp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A JPEG image is reduced from 4 MB to 400 KB. Calculate the percentage reduction in file size. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compression saving",
                statement: "(Original − compressed) ÷ original × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "4 MB = 4096 KB; (4096 − 400) ÷ 4096 × 100 ≈ 90.2%, conventionally treated as 90% for MB/KB decimal sizing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "90%",
          },
        },
        {
          id: "ciealc-u1-cp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does Huffman coding assign shorter codes to more frequent symbols?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To remove repeated symbols completely" },
              { id: "b", text: "To make every symbol exactly the same length" },
              { id: "c", text: "To encrypt the symbols" },
              {
                id: "d",
                text: "To reduce the average number of bits needed for the message",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Huffman coding",
                statement: "Frequent symbols get shorter codes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shorter codes for frequent symbols lower total encoded length.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Reduces average bits",
          },
        },
        {
          id: "ciealc-u1-cp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these applications normally uses lossy compression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing a program's executable code" },
              { id: "b", text: "Storing a plain text configuration file" },
              { id: "c", text: "Storing a spreadsheet of financial records" },
              { id: "d", text: "Storing photos in a JPEG image archive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lossy compression",
                statement: "Used where minor quality loss is acceptable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "JPEG discards imperceptible image detail; code and records must be exact.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** JPEG image archive",
          },
        },
        {
          id: "ciealc-u1-cp-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A run-length encoded string is 12A3B5C. How many characters were in the original unencoded string? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "RLE decoding",
                statement: "Sum the run counts to recover original length.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "12 + 3 + 5 = 20 characters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "ciealc-u1-cp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A video file of 2500 KB is compressed to 500 KB using lossy compression. Calculate the percentage reduction in file size. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compression saving",
                statement: "(Original − compressed) ÷ original × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(2500 − 500) ÷ 2500 × 100 = 80%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "ciealc-u1-cp-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In dictionary encoding, what is stored in place of frequently occurring patterns?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A short code representing each frequent pattern",
              },
              { id: "b", text: "An encrypted copy of the whole file" },
              { id: "c", text: "A random number for every symbol" },
              { id: "d", text: "Only the first character of each pattern" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dictionary encoding",
                statement: "Patterns replaced by short codes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repeated patterns are replaced by dictionary codes, shrinking the output.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Short code per frequent pattern",
          },
        },
        {
          id: "ciealc-u1-cp-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A hospital wants to archive patient X-ray images. Explain why lossy compression such as JPEG is acceptable for this use, while lossless compression would be required for the patient database records.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lossy vs lossless choice",
                statement: "Lossy suits media; lossless suits exact data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "X-rays tolerate imperceptible quality loss, so JPEG gives smaller files.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Database records must be exact; any loss could corrupt patient data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Images tolerate loss; records must be exact",
          },
        },
        {
          id: "ciealc-u1-cp-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Using the Huffman codes E = 0, T = 10, A = 110 and O = 111, calculate the number of bits needed to encode the word TEA. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Huffman bits",
                statement: "Sum the code lengths of each symbol.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "T = 2 bits, E = 1 bit, A = 3 bits; total = 6 bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6 bits",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-cp-notes",
      title: "Compression — notes",
      summary:
        "Lossless=exact (RLE, dictionary, Huffman); lossy=approximate (JPEG, MP3). Choose by data type.",
      sections: [
        {
          heading: "Key idea",
          body: "Choose compression based on whether exact data matters.",
        },
        {
          heading: "Huffman",
          body: "Frequent symbols get shorter codes — efficient for text.",
        },
      ],
    },
  ],
};
