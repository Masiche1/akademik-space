import type { Lesson } from "../../../types.ts";

export const lesson351: Lesson = {
  id: "ecs11-u9-lesson-9-1",
  code: "9-1",
  title: "Number Systems and Data Units",
  goal: "I CAN convert between binary, denary and hexadecimal, perform binary addition and use data units and character encoding.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation", "4CP1: number systems, binary/hexadecimal conversion, data units, character encoding"],
  
  vocabulary: [
    { term: "Denary", definition: "The base-10 number system using digits 0-9; also called decimal." },
    { term: "Binary", definition: "The base-2 number system using only digits 0 and 1." },
    { term: "Hexadecimal", definition: "The base-16 number system using digits 0-9 and A-F; each digit represents 4 bits." },
    { term: "Bit", definition: "The smallest unit of data — a single binary digit, 0 or 1." },
    { term: "Byte", definition: "A group of 8 bits, the standard unit used to measure data." },
    { term: "ASCII", definition: "American Standard Code for Information Interchange — a character encoding mapping characters to binary codes." },
  ],
  concepts: [
    {
      id: "ecs11-u9-num-convert",
      title: "Converting between number systems",
      skill: "Convert between binary, denary and hexadecimal and perform binary addition at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Number bases",
            body: "Computers store all data in binary (base 2), using only the digits 0 and 1. Each position is worth a power of 2: 1, 2, 4, 8, 16, 32 and so on from right to left.\n\nDenary (base 10) is the everyday number system using digits 0-9. Hexadecimal (base 16) uses digits 0-9 and A-F, where A=10, B=11, C=12, D=13, E=14, F=15. Each hexadecimal digit represents exactly 4 bits, so hex is a compact shorthand for binary: 0x2A means binary 0010 1010.",
          },
          {
            heading: "Converting and adding in binary",
            body: "Binary to denary: multiply each bit by its place value and add the results, e.g. 101101 = 32+8+4+1 = 45.\n\nDenary to binary: repeatedly divide by 2 and record the remainders, then read them in reverse order. Hexadecimal to binary: replace each hex digit with its 4-bit binary equivalent.\n\nBinary addition works column by column from the right. Each column sums to 0, 1, 2 or 3: 1+1 = 10 (write 0, carry 1) and 1+1+1 = 11 (write 1, carry 1).",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Binary value = sum of each bit x its power-of-2 place value" },
          { name: "Hex grouping", statement: "1 hex digit = 4 bits; group binary digits in 4s to convert" },
          { name: "Binary addition", statement: "Column-wise addition; 1+1 = 10, carry the 1" },
        ],
        workedExample: {
          problem: "Convert denary 156 to hexadecimal.",
          solution: "156 / 16 = 9 remainder 12. The remainder 12 is the hex digit C. 9 / 16 = 0 remainder 9. Reading remainders bottom-up: 9C. Check: 9 x 16 + 12 = 156.",
        },
      },
      questions: [
        {
          id: "ecs11-u9-ncv-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert the binary number 101101 to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Denary",
                              "answer": 45
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary to denary",
                              "statement": "Sum bits x powers of 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Place values of 101101 are 32, 16, 8, 4, 2, 1; the 1-bits are 32, 8, 4 and 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "32 + 8 + 4 + 1 = 45.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "45",
          "commonErrors": [
                    "Misreading the place values or forgetting that the rightmost bit is worth 1."
          ]
},
        },
        {
          id: "ecs11-u9-ncv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which binary number is equal to denary 29?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11101"
                    },
                    {
                              "id": "b",
                              "text": "11011"
                    },
                    {
                              "id": "c",
                              "text": "10111"
                    },
                    {
                              "id": "d",
                              "text": "11100"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Denary to binary",
                              "statement": "Repeated division by 2 or place-value check."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "11101 = 16+8+4+1 = 29; the others give 27, 23 and 28.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "11101"
},
        },
        {
          id: "ecs11-u9-ncv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert the hexadecimal number 0x2F into binary and into denary.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hex to binary",
                              "statement": "Each hex digit = 4 bits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Split into nibbles: 2 = 0010 and F = 1111.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Binary is 0010 1111, i.e. 101111.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Denary: 32 + 8 + 4 + 2 + 1 = 47.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Binary 101111, denary 47"
},
        },
        {
          id: "ecs11-u9-ncv-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Add the binary numbers 101101 and 011011, showing your working with carries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Binary addition",
                              "statement": "Column-wise with carry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Align the numbers in columns from the right: 101101 + 011011.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Rightmost columns: 1+1=10 write 0 carry 1; 0+1+1=10 write 0 carry 1; 1+0+1=10 write 0 carry 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Next columns: 1+1+1=11 write 1 carry 1; 0+1+1=10 write 0 carry 1; 1+0+1=10 write 0 carry 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Final carry 1 gives 1001000; check 45 + 27 = 72 = 1001000.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "1001000",
          "commonErrors": [
                    "Forgetting the carried 1 when a column already sums to 2."
          ]
},
        },
        {
          id: "ecs11-u9-ncv-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A programmer must convert values between number systems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert denary 156 to hexadecimal.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Convert hexadecimal 0x3A7 to binary.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Base conversion",
                              "statement": "Divide by base / expand place values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 156 / 16 = 9 remainder 12; 12 is hex digit C.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 9 / 16 = 0 remainder 9, so 156 = 0x9C.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Convert each hex digit to 4 bits: 3 = 0011, A = 1010, 7 = 0111.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Concatenate: 0011 1010 0111.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Leading zeros may be dropped: 1110100111.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 0x9C (b) 001110100111"
},
        },
        {
          id: "ecs11-u9-ncv-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A computer science student is learning number systems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert denary 200 to hexadecimal, showing each division step.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Add the binary numbers 11011 and 10101, showing carries.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why hexadecimal is a convenient shorthand for binary and give one example of where it is used.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Number bases",
                              "statement": "Why hex sits between binary and denary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 200 / 16 = 12 remainder 8; 12 / 16 = 0 remainder 12.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reading remainders bottom-up with 12 = C gives 0xC8.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Column addition of 11011 + 10101 with carries gives 110000.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Carries are handled correctly: 1+1=10 three times, final carry extends the result.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Check: 27 + 21 = 48 = 110000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Each hexadecimal digit is exactly 4 bits, so hex maps directly onto binary.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) It is far more compact: a byte needs 2 hex digits instead of 8 binary digits.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Shorter strings are easier to read, write and check for errors.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Conversion between hex and binary is trivial — no arithmetic needed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Example: memory addresses, colour codes such as #FF8800, or MAC addresses.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 0xC8 (b) 110000 (c) 1 hex digit = 4 bits; compact and error-resistant",
          "commonErrors": [
                    "Writing the remainders in the wrong order when converting to hex."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u9-units-encoding",
      title: "Data units and character encoding",
      skill: "Use data units to calculate file sizes and describe how characters are encoded at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Bits, bytes and data units",
            body: "A bit is a single binary digit (0 or 1) and is the smallest unit of data. A byte is 8 bits and is the unit used to measure storage.\n\nData units are based on powers of 2: 1 kilobyte (KB) = 1024 bytes, 1 megabyte (MB) = 1024 KB, 1 gigabyte (GB) = 1024 MB and 1 terabyte (TB) = 1024 GB. To convert to a smaller unit, multiply; to convert to a larger unit, divide by 1024.",
          },
          {
            heading: "Character encoding",
            body: "Encoding assigns a binary code to each character so computers can store and process text. ASCII uses 7 bits, giving 128 possible characters — enough for basic English letters, digits and punctuation. Extended ASCII uses 8 bits (1 byte) giving 256 characters.\n\nUnicode (such as UTF-8 or UTF-16) was designed to encode all the world's writing systems. UTF-8 uses a variable number of bytes per character, while UTF-16 commonly uses 2 bytes per character — larger files but support for far more characters and languages.",
          },
        ],
        keyFormulas: [
          { name: "File size", statement: "bytes = number of characters x bytes per character" },
          { name: "Unit conversion", statement: "1 KB = 1024 bytes; 1 MB = 1024 KB; 1 GB = 1024 MB" },
          { name: "Encoding capacity", statement: "n bits can represent 2^n different characters" },
        ],
        workedExample: {
          problem: "A text file contains 4096 characters stored using extended ASCII (1 byte per character). What is its size in KB?",
          solution: "4096 characters x 1 byte = 4096 bytes. 4096 / 1024 = 4 KB.",
        },
      },
      questions: [
        {
          id: "ecs11-u9-uec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many bytes are there in 1 kilobyte?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1000"
                    },
                    {
                              "id": "b",
                              "text": "1024"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "2048"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Kilobyte",
                              "statement": "1024 bytes in computing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data units are based on powers of 2: 1 KB = 1024 bytes.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "1024",
          "commonErrors": [
                    "Answering 1000 — that is the metric interpretation, not the computing standard."
          ]
},
        },
        {
          id: "ecs11-u9-uec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A plain text file contains 6000 characters, each stored using one byte (extended ASCII). How many bytes does the text occupy?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Bytes",
                              "answer": 6000,
                              "unit": "bytes"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "File size",
                              "statement": "characters x bytes per character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each character takes 1 byte.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "6000 x 1 = 6000 bytes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "6000 bytes"
},
        },
        {
          id: "ecs11-u9-uec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A file is 5 MB. How many KB is this? Show your calculation.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Kilobytes",
                              "answer": 5120,
                              "unit": "KB"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Unit conversion",
                              "statement": "1 MB = 1024 KB."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 MB = 1024 KB.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "5 x 1024 = 5120.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "5120 KB"
},
        },
        {
          id: "ecs11-u9-uec-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why computing uses powers of 2 (1024) for data units rather than powers of 10.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Binary storage",
                              "statement": "Units mirror binary structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computers organise storage and memory in binary — powers of 2.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "1024 = 2^10, so unit boundaries align exactly with addressable storage blocks.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It is a long-standing convention that makes conversions simple multiplications.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Marketing sometimes uses 1000, which is why device capacities appear smaller in an operating system.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Storage is binary, so units use 2^10 = 1024."
},
        },
        {
          id: "ecs11-u9-uec-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A text file contains 8192 characters stored as extended ASCII (8 bits per character, i.e. 1 byte per character).",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the size of the file in bytes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Convert the size to kilobytes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one reason the file's actual size on disk is likely to be larger than your answer to part (b).",
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
                              "name": "File size calculation",
                              "statement": "chars x bytes then convert units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 8192 characters x 1 byte = 8192 bytes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 8192 / 1024 = 8.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) File systems add metadata — file name, timestamps, permissions and block allocation padding.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 8192 bytes (b) 8 KB (c) metadata and padding overhead"
},
        },
        {
          id: "ecs11-u9-uec-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A document has 4096 characters stored using a 16-bit Unicode encoding (2 bytes per character).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the size of the encoded text in bytes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Convert the size to kilobytes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the size in bytes using extended ASCII (1 byte per character) and explain the trade-off of choosing Unicode.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Encoding trade-offs",
                              "statement": "Coverage vs file size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 4096 characters x 2 bytes = 8192 bytes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 8192 / 1024 = 8 KB.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Extended ASCII would need 4096 x 1 = 4096 bytes (4 KB).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Unicode can encode all the world's writing systems, whereas ASCII covers only 256 characters.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) UTF-16 uses a fixed 2 bytes per character, so files are larger.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) This costs more storage and bandwidth but is essential for non-Latin text.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) UTF-8 offers a middle ground — compact for Latin text, still full Unicode coverage.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 8192 bytes (b) 8 KB (c) 4096 bytes; Unicode gives full language coverage at double the size"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u9-number-systems-notes",
      title: "Number systems and data units — notes",
      summary: "Convert between binary, denary and hex; data units use powers of 2; encoding assigns binary codes to characters.",
      sections: [
        { heading: "Key idea", body: "Binary is base 2, denary is base 10, hexadecimal is base 16. Each hex digit equals 4 bits." },
        { heading: "Converting", body: "Binary to denary: sum bit x place value. Denary to binary: divide by 2, read remainders backwards. Hex to binary: expand each digit to 4 bits." },
        { heading: "Data units", body: "1 byte = 8 bits; 1 KB = 1024 bytes, then MB, GB, TB each x1024." },
        { heading: "Encoding", body: "ASCII = 128 characters (7-bit); extended ASCII = 256 (8-bit); Unicode covers all languages but uses more bytes." },
      ],
    },
  ],
};
