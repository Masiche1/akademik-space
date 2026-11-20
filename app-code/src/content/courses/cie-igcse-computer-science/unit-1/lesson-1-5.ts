import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "ciecs-u1-lesson-1-5",
  code: "1-5",
  title: "Data Compression",
  goal: "I CAN explain lossless and lossy compression and when each is appropriate.",
  standards: ["Cambridge IGCSE Computer Science 0478: data representation", "0478 section 1: compression"],
  
  vocabulary: [
    { term: "Compression", definition: "Reducing file size by encoding data more efficiently." },
    { term: "Lossless", definition: "Compression allowing exact reconstruction of original." },
    { term: "Lossy", definition: "Compression discarding some data permanently." },
    { term: "Run-length encoding", definition: "Lossless method replacing repeats with counts." },
    { term: "Dictionary encoding", definition: "Replacing repeated patterns with codes." },
    { term: "File size", definition: "Amount of storage data occupies." },
  ],
  concepts: [
    {
      id: "ciecs-u1-s5-compress",
      title: "Data compression",
      skill: "Compare lossless and lossy compression at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Lossless compression",
            body: "Preserves all data — original can be exactly restored. Methods: run-length encoding (RRRR → 4R), dictionary encoding (common patterns → short codes). Used for text, code, medical data.",
          },
          {
            heading: "Lossy compression",
            body: "Discards some data permanently for greater size reduction. Used for images (JPEG), audio (MP3), video (MP4) where minor quality loss is acceptable. Trade-off: smaller files vs quality.",
          },
        ],
        keyFormulas: [
          { name: "Lossless", statement: "exact restoration — text/code" },
          { name: "Lossy", statement: "data discarded — media files" },
          { name: "RLE", statement: "run-length: repeats → counts" },
        ],
        workedExample: {
          problem: "Encode 'AAAAABBBCC' using run-length encoding.",
          solution: "5A3B2C — much shorter than 10 characters.",
        },
      },
      questions: [
        {
          id: "ciecs-u1-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is compression?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reducing file size by encoding more efficiently"
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
          "finalAnswer": "Efficient encoding for smaller files"
},
        },
        {
          id: "ciecs-u1-cp-q2",
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
          id: "ciecs-u1-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "When should you use lossy vs lossless compression? Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compression choice",
                              "statement": "Data type decides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lossless for text/code/medical — exact needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lossy for images/audio/video — minor loss OK.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reasoning given.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lossless for critical data; lossy for media"
},
        },
        {
          id: "ciecs-u1-cp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define compression, lossless, lossy, run-length encoding, dictionary encoding, file size. (b) Encode 'BBBBBBAAAB' with RLE. (c) Why is RLE lossless? (d) What is dictionary encoding? (e) Why use lossy for JPEG? (f) Why NOT use lossy for text documents? (g) Compare JPEG vs PNG use cases. (h) Design a compression strategy for a photo album app.",
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
                              "reasoning": "(a) All six definitions.",
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
                              "reasoning": "(d) Replace patterns with codes.",
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
                              "reasoning": "(g) JPEG=photos; PNG=text/graphics needing sharpness.",
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
      id: "ciecs-u1-cp-notes",
      title: "Compression — notes",
      summary: "Lossless=exact restoration (text/code); lossy=permanent loss (media). RLE and dictionary methods.",
      sections: [
        { heading: "Key idea", body: "Choose compression based on whether exact data matters." },
        { heading: "RLE", body: "Runs of repeats → count + symbol." },
      ],
    },
  ],
};
