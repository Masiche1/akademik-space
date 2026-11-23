import type { Lesson } from "../../../types.ts";

export const lesson353: Lesson = {
  id: "ecs11-u9-lesson-9-3",
  code: "9-3",
  title: "Compression and Error Checking",
  goal: "I CAN distinguish lossy from lossless compression and explain how parity bits and checksums detect errors.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation", "4CP1: compression (lossy/lossless, RLE, Huffman), parity and checksum error detection"],
  
  vocabulary: [
    { term: "Compression", definition: "Reducing the size of a file so it uses less storage and bandwidth." },
    { term: "Lossy compression", definition: "Compression that permanently discards some data; the original cannot be fully recovered." },
    { term: "Lossless compression", definition: "Compression that allows the original file to be reconstructed exactly." },
    { term: "Run-length encoding", definition: "A lossless method replacing runs of repeated values with a count and the value." },
    { term: "Huffman coding", definition: "A lossless method assigning shorter codes to frequent symbols and longer codes to rare ones." },
    { term: "Parity bit", definition: "An extra bit added to data so the total number of 1s is even or odd, enabling error detection." },
    { term: "Checksum", definition: "A calculated value from the data that is sent with it and verified on receipt." },
  ],
  concepts: [
    {
      id: "ecs11-u9-compression",
      title: "Lossy and lossless compression",
      skill: "Explain compression methods and choose between lossy and lossless at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Lossy vs lossless",
            body: "Lossy compression discards data that is judged less important, producing much smaller files but losing quality permanently — the original cannot be restored. JPEG images and MP3 audio are lossy.\n\nLossless compression rearranges or encodes data so the original can be reconstructed exactly — the file is identical after decompression. PNG images, ZIP archives and most text/document formats are lossless.",
          },
          {
            heading: "RLE and Huffman coding",
            body: "Run-length encoding (RLE) replaces runs of repeated values with a count followed by the value: WWWBBWWW becomes 3W2B3W. It works extremely well on simple images with flat colour areas but poorly on complex, varied data.\n\nHuffman coding assigns shorter binary codes to the most frequent symbols and longer codes to rare symbols. Because frequent symbols dominate real files, the average code length shrinks, giving lossless compression. Huffman is used inside formats such as ZIP, PNG and JPEG.",
          },
        ],
        keyFormulas: [
          { name: "Compression choice", statement: "Lossy = smaller files, permanent quality loss; lossless = exact recovery" },
          { name: "RLE", statement: "Run of n identical values -> count + value" },
          { name: "Huffman", statement: "Frequent symbols get shorter codes" },
        ],
        workedExample: {
          problem: "Encode the string AAAABBBBA using run-length encoding.",
          solution: "4A4B1A — each run of identical characters is replaced by a count and the character.",
        },
      },
      questions: [
        {
          id: "ecs11-u9-cmp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the key difference between lossy and lossless compression?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lossy discards data permanently; lossless allows the original to be recovered exactly"
                    },
                    {
                              "id": "b",
                              "text": "Lossy files are always smaller than lossless files"
                    },
                    {
                              "id": "c",
                              "text": "Lossless compression only works on text files"
                    },
                    {
                              "id": "d",
                              "text": "There is no difference — both restore the original"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lossy vs lossless",
                              "statement": "Permanent loss vs exact recovery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lossy discards data permanently; lossless can be reversed to give the exact original.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Lossy loses data; lossless preserves everything."
},
        },
        {
          id: "ecs11-u9-cmp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which file type typically uses lossy compression?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "JPEG photograph"
                    },
                    {
                              "id": "b",
                              "text": "PNG logo graphic"
                    },
                    {
                              "id": "c",
                              "text": "ZIP archive of documents"
                    },
                    {
                              "id": "d",
                              "text": "Plain text (.txt) file"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Compression in practice",
                              "statement": "JPEG/MP3 lossy; PNG/ZIP/TXT lossless."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "JPEG and MP3 are lossy; PNG, ZIP and text files must remain exact.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "JPEG photograph"
},
        },
        {
          id: "ecs11-u9-cmp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how run-length encoding (RLE) compresses data, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "RLE",
                              "statement": "Count + value for runs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RLE scans for consecutive repeated values and stores a count followed by the value once.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: WWWBB becomes 3W2B — far fewer symbols than the original.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It works best on data with long runs; it can be ineffective or even expand data with no repeats.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Runs replaced by count+value, e.g. WWWBB -> 3W2B."
},
        },
        {
          id: "ecs11-u9-cmp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the principle behind Huffman coding.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Huffman coding",
                              "statement": "Short codes for frequent symbols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The frequency of each symbol in the data is measured first.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The most frequent symbols are assigned the shortest binary codes; rare symbols get longer codes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Because frequent symbols dominate real files, the average code length is reduced.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The result is lossless — every original symbol can still be decoded exactly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Short codes for frequent symbols shrink the average code length losslessly."
},
        },
        {
          id: "ecs11-u9-cmp-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The string WWWBBWWW is to be compressed using run-length encoding.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the RLE representation of the string.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the length of the original string and of the compressed string.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain one situation in which RLE would fail to compress data, or even make it larger.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "RLE application",
                              "statement": "Encode runs as count + value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) WWW = 3W, BB = 2B, WWW = 3W, giving 3W2B3W.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Original = 8 characters; compressed = 6 characters.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) If data has no repeated runs, e.g. ABCDEFGH, each symbol needs count+value and the output is larger.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 3W2B3W (b) 8 -> 6 (c) no repeated runs means expansion",
          "commonErrors": [
                    "Writing the count after the value instead of before it."
          ]
},
        },
        {
          id: "ecs11-u9-cmp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A photo-sharing app sends millions of images to users' phones over mobile data.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why lossy compression is suitable for photographs.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why lossless compression is required for files such as executables or text documents.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe how Huffman coding reduces file size while remaining lossless.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Choosing compression",
                              "statement": "Lossy for media, lossless for data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Photos contain detail the human eye barely notices; discarding it has little visible effect.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Lossy compression removes that detail, producing dramatically smaller files.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Smaller files mean faster downloads and less mobile data usage for users.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Executables and text must be reproduced exactly — a single changed bit can corrupt a program or change meaning.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Lossless compression shrinks the file while allowing perfect reconstruction.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Using lossy on such files would destroy information irreversibly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Huffman coding first measures how often each symbol appears.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Frequent symbols receive the shortest binary codes; rare symbols receive longer ones.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) The weighted average code length is therefore smaller than a fixed-length code.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Every symbol is still uniquely decodable, so the original data is recovered exactly — lossless.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) imperceptible detail removed for huge size saving (b) data must be exact (c) frequency-based variable-length codes"
},
        },
      ],
    },
    {
      id: "ecs11-u9-errors",
      title: "Error detection: parity and checksums",
      skill: "Explain how parity bits and checksums detect transmission errors at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Parity checking",
            body: "When data is transmitted it can be corrupted by noise. A parity bit is an extra bit added to a byte so that the total number of 1 bits is always even (even parity) or always odd (odd parity). The receiver recounts the 1s: if the parity is wrong, an error has occurred.\n\nParity can only detect an odd number of bit errors — two bit flips cancel out and go undetected. It also cannot say which bit is wrong or fix it, only flag that something is wrong.",
          },
          {
            heading: "Checksums",
            body: "A checksum extends the idea to whole messages. The sender calculates a value from the data — often a sum of the bytes, possibly modulo a number — and sends it with the data. The receiver repeats the calculation on the received data; if the checksums differ, the data was corrupted.\n\nStronger methods such as cyclic redundancy checks (CRC) and cryptographic hashes detect far more error patterns. In practice, detected errors are usually handled by asking the sender to retransmit (automatic repeat request, ARQ).",
          },
        ],
        keyFormulas: [
          { name: "Parity", statement: "Extra bit keeps count of 1s even (or odd)" },
          { name: "Checksum", statement: "checksum = function of data; compare on receipt" },
        ],
        workedExample: {
          problem: "A byte 10110101 is sent with even parity. How many 1 bits does it contain, and what parity bit is needed?",
          solution: "Count of 1s = 5 (odd). For even parity the bit must be 1, making the total 6.",
        },
      },
      questions: [
        {
          id: "ecs11-u9-err-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of a parity bit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To detect whether a single bit error has occurred during transmission"
                    },
                    {
                              "id": "b",
                              "text": "To compress the data before transmission"
                    },
                    {
                              "id": "c",
                              "text": "To encrypt the data so it cannot be read"
                    },
                    {
                              "id": "d",
                              "text": "To correct any errors automatically"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Parity bit",
                              "statement": "Error detection bit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A parity bit lets the receiver detect bit errors; it does not correct or encrypt.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Detect transmission errors"
},
        },
        {
          id: "ecs11-u9-err-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The byte 10110101 is transmitted using even parity. It contains five 1 bits (an odd count). What parity bit must be added?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Parity bit",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Even parity",
                              "statement": "Make total 1s even."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Even parity requires an even total number of 1 bits.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "5 is odd, so a 1 is needed to make 6.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "1"
},
        },
        {
          id: "ecs11-u9-err-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a parity check detects errors and state one limitation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Parity check",
                              "statement": "Detects odd bit errors only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sender adds a bit so the total count of 1s is even (or odd).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The receiver recounts the 1s; a wrong parity reveals that an error occurred.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Limitation: an even number of bit errors cancels out and passes undetected; it cannot locate or fix the error.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Parity flags odd bit errors; even numbers of errors evade it."
},
        },
        {
          id: "ecs11-u9-err-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a checksum is used to verify that data arrived correctly.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Checksum",
                              "statement": "Verify by recomputation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sender calculates a value from the data, e.g. a sum of the byte values.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The checksum is sent alongside the data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The receiver repeats the same calculation on the received data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "If the two checksums match the data is almost certainly intact; a mismatch signals corruption.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Sender computes, receiver recomputes and compares."
},
        },
        {
          id: "ecs11-u9-err-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Three data bytes have values 200, 100 and 56. The checksum is the sum of the values modulo 256.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the sum of the three byte values.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the checksum value.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "The receiver calculates the same checksum from the data it received. What does this indicate?",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Checksum calculation",
                              "statement": "Sum modulo 256."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 200 + 100 + 56 = 356.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 356 - 256 = 100, so the checksum is 100.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) The data arrived intact — the receiver's calculation matches the sender's checksum.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 356 (b) 100 (c) data verified as intact",
          "commonErrors": [
                    "Forgetting to reduce the sum modulo 256."
          ]
},
        },
        {
          id: "ecs11-u9-err-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school sends exam results files to an exam board over a network.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a parity bit could be used to check each transmitted byte.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two limitations of parity checking.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest and justify a stronger error-checking method for this file transfer.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Error detection methods",
                              "statement": "Simple parity vs stronger checks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The sender counts the 1 bits in each byte and adds a parity bit so the total is even.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The parity bit travels with the byte.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The receiver recounts; wrong parity flags a corrupted byte.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Parity only detects an odd number of bit errors — two flips cancel out undetected.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It cannot locate or correct the error, only signal that one exists.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A checksum or CRC over the whole file detects far more error patterns, including bursts.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Use a checksum or CRC computed over the entire file rather than per byte.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) It detects multi-bit and burst errors that parity misses.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Combine with retransmission (ARQ): any mismatch triggers resending the file.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) This gives strong assurance that exam results — where accuracy is critical — arrive intact.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) parity bit per byte (b) odd errors only, no correction (c) file-level checksum/CRC + retransmission"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u9-compression-errors-notes",
      title: "Compression and error checking — notes",
      summary: "Lossy discards data for size; lossless preserves it exactly; parity and checksums detect transmission errors.",
      sections: [
        { heading: "Key idea", body: "Compression trades size against fidelity; error checking adds redundancy to detect corruption." },
        { heading: "Compression", body: "Lossy (JPEG, MP3) discards imperceptible detail. Lossless (PNG, ZIP) reconstructs exactly. RLE encodes runs; Huffman gives short codes to frequent symbols." },
        { heading: "Error checking", body: "Parity bit: extra bit making 1s even/odd — detects odd bit errors. Checksum: computed value compared on receipt — detects more patterns." },
        { heading: "Limitations", body: "Parity misses even numbers of errors; checksums are probabilistic. Retransmission fixes detected errors." },
      ],
    },
  ],
};
