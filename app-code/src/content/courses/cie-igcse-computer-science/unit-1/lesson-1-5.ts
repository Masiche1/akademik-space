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
                              "text": "A network cable"
                    },
                    {
                              "id": "c",
                              "text": "A type of virus"
                    },
                    {
                              "id": "d",
                              "text": "Deleting files"
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
        {
          id: "ciecs-u1-cp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of compression allows the original file to be reconstructed exactly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lossy compression" },
              { id: "b", text: "Sampling" },
              { id: "c", text: "Encryption" },
              { id: "d", text: "Lossless compression" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lossless compression", statement: "Allows exact reconstruction." },
            ],
            steps: [
              { reasoning: "Lossless compression preserves all data for exact restoration.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Lossless compression",
          },
        },
        {
          id: "ciecs-u1-cp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which file type commonly uses lossy compression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A JPEG photograph" },
              { id: "b", text: "A program source file" },
              { id: "c", text: "A plain text document" },
              { id: "d", text: "A spreadsheet of exact numbers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Lossy media", statement: "Images, audio and video often use lossy compression." },
            ],
            steps: [
              { reasoning: "JPEG photographs tolerate minor quality loss for smaller files.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** JPEG photograph",
          },
        },
        {
          id: "ciecs-u1-cp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Using run-length encoding, how is 'AAAAABBBCC' represented?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ABC" },
              { id: "b", text: "5A3B2C" },
              { id: "c", text: "10ABC" },
              { id: "d", text: "A5B3C2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Run-length encoding", statement: "Each run becomes count followed by symbol." },
            ],
            steps: [
              { reasoning: "Five A's, three B's and two C's encode as 5A3B2C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 5A3B2C",
          },
        },
        {
          id: "ciecs-u1-cp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does dictionary encoding do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It encrypts text using a password" },
              { id: "b", text: "It deletes repeated data permanently" },
              { id: "c", text: "It stores only the first character of each word" },
              { id: "d", text: "It replaces repeated patterns with short codes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dictionary encoding", statement: "Repeated patterns become short codes." },
            ],
            steps: [
              { reasoning: "Dictionary encoding replaces common repeated sequences with shorter symbols.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Replaces repeated patterns with short codes",
          },
        },
        {
          id: "ciecs-u1-cp-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which file should use lossless compression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A social media video" },
              { id: "b", text: "A music file for streaming" },
              { id: "c", text: "A casual phone photograph" },
              { id: "d", text: "A software installer that must install correctly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compression choice", statement: "Use lossless when exact data is essential." },
            ],
            steps: [
              { reasoning: "Software must be restored exactly, so lossless compression is appropriate.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Software installer",
          },
        },
        {
          id: "ciecs-u1-cp-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is lossy compression unsuitable for exam answer documents?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires a network connection" },
              { id: "b", text: "It always makes files larger" },
              { id: "c", text: "It permanently discards data needed for exact text" },
              { id: "d", text: "It only works on images" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Data integrity", statement: "Text documents require exact characters." },
            ],
            steps: [
              { reasoning: "Lossy compression can permanently remove detail, corrupting exact text.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** It permanently discards needed data",
          },
        },
        {
          id: "ciecs-u1-cp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A run of $18$ identical characters is stored by run-length encoding as $18X$, using $3$ characters. How many characters are saved compared with storing all $18$ characters?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "RLE savings", statement: "Saved characters = original length - encoded length." },
            ],
            steps: [
              { reasoning: "18 - 3 = 15 characters saved.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "ciecs-u1-cp-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $7,200$-byte image is compressed to $30$% of its original size. What is the compressed size in bytes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2160 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compressed size", statement: "Compressed size = original size × percentage." },
            ],
            steps: [
              { reasoning: "7200 * 0.30 = 2160 bytes.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "2160",
          },
        },
        {
          id: "ciecs-u1-cp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $5,000$-byte file is compressed to $2,000$ bytes. (a) What percentage reduction is achieved? (b) How many bytes are saved?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 3000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compression ratio", statement: "Reduction = saved bytes divided by original size." },
            ],
            steps: [
              { reasoning: "3000 / 5000 * 100 = 60% reduction.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Saved = 5000 - 2000 = 3000 bytes.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 60; (b) 3000",
          },
        },
        {
          id: "ciecs-u1-cp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A data string has runs of $5$ X's, $2$ Y's and $7$ Z's. (a) How many characters are in the original string? (b) How many characters are saved by writing it as $5X2Y7Z$?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 14 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "RLE comparison", statement: "Compare original run lengths with encoded token length." },
            ],
            steps: [
              { reasoning: "Original length = 5 + 2 + 7 = 14 characters.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Encoded length = 6, so saved = 14 - 6 = 8 characters.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 14; (b) 8",
          },
        },
        {
          id: "ciecs-u1-cp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $10$ MB photo album is compressed to $4$ MB. (a) What is the compressed size in MB? (b) How many MB are saved? (c) What percentage reduction is achieved?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 6 },
              { label: "c", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Lossy file size", statement: "Compressed size, saving and percentage reduction." },
            ],
            steps: [
              { reasoning: "Compressed size is given as 4 MB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Saved = 10 - 4 = 6 MB.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "6 / 10 * 100 = 60% reduction.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 4; (b) 6; (c) 60",
          },
        },
        {
          id: "ciecs-u1-cp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A company stores exam answer documents, software backups and a photo archive. Recommend a compression strategy for each type. Explain when lossless and lossy compression are appropriate and mention one suitable method for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Compression strategy", statement: "Choose lossless for exact data and lossy for media." },
            ],
            steps: [
              { reasoning: "Exam answers and software backups need lossless compression because every character must be restored.", marks: 1, markCode: "M" },
              { reasoning: "Suitable lossless methods include run-length or dictionary encoding for repeated data.", marks: 1, markCode: "M" },
              { reasoning: "Photos can use lossy compression because small quality loss is acceptable for much smaller files.", marks: 1, markCode: "M" },
              { reasoning: "The recommendation links each data type to an appropriate method and trade-off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lossless for exact data; lossy for photos",
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
