import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "ciealc-u1-lesson-1-3",
  code: "1-3",
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
          problem: "Encode 'HELLO WORLD' using dictionary encoding. Why is it lossless?",
          solution: "Dictionary: H=1, E=2, L=3, O=4, space=5, W=6, R=7, D=8. 'HELLO WORLD'→12334456738. Exact reconstruction possible.",
        },
      },
      questions: [
        {
          id: "ciealc-u1-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is compression?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reducing file size by efficient encoding"
                    },
                    {
                              "id": "b",
                              "text": "Deleting files"
                    },
                    {
                              "id": "c",
                              "text": "A type of virus"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compression",
                              "statement": "Size reduction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compression encodes data to use fewer bits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Efficient encoding"
},
        },
        {
          id: "ciealc-u1-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between lossless and lossy compression?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lossless vs lossy",
                              "statement": "Exact vs approximate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lossless=exact restoration; lossy=permanent data loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples for each.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Exact vs approximate"
},
        },
        {
          id: "ciealc-u1-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Encode 'AAAAABBBCC' using run-length encoding. Why is this lossless?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "RLE",
                              "statement": "Run-length encoding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5A3B2C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exact reconstruction possible — no data lost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shorter than original.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5A3B2C; lossless"
},
        },
        {
          id: "ciealc-u1-cp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define compression, lossless, lossy, RLE, dictionary encoding, Huffman coding, file size. (b) Encode 'BBBBBBAAAB' with RLE. (c) Why is RLE lossless? (d) What is Huffman coding? (e) Why use lossy for JPEG? (f) Why NOT use lossy for text? (g) Compare JPEG vs PNG use cases. (h) Design compression strategy for photo album app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Compression",
                              "statement": "Lossless vs lossy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 6B3A1B.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Exact reconstruction possible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Variable-length codes; frequent=shorter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Photos tolerate minor quality loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Text needs exact characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) JPEG=photos; PNG=graphics/sharp.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid compression strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Compression methods and applications."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-cp-notes",
      title: "Compression — notes",
      summary: "Lossless=exact (RLE, dictionary, Huffman); lossy=approximate (JPEG, MP3). Choose by data type.",
      sections: [
        { heading: "Key idea", body: "Choose compression based on whether exact data matters." },
        { heading: "Huffman", body: "Frequent symbols get shorter codes — efficient for text." },
      ],
    },
  ],
};
