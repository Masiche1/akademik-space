import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ecs10-u9-lesson-9-1",
  code: "9-1",
  title: "Number Systems and Data Units",
  goal: "I CAN convert between binary, hexadecimal and denary, and use data units to calculate storage requirements.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data representation"],
  
  vocabulary: [
    { term: "Hexadecimal", definition: "Base-16 number system using digits 0-9 and letters A-F; each digit represents 4 bits." },
    { term: "Nibble", definition: "A group of 4 bits — the amount one hexadecimal digit encodes." },
    { term: "Denary", definition: "Base-10 number system using digits 0-9." },
    { term: "Bit", definition: "The smallest unit of data — a single binary digit, 0 or 1." },
    { term: "Byte", definition: "A group of 8 bits." },
    { term: "Kilobyte / megabyte / gigabyte", definition: "Units of data capacity; in computing contexts 1 kB = 1024 bytes." },
  ],
  concepts: [
    {
      id: "ecs10-u9-hexadecimal",
      title: "Hexadecimal and number conversions",
      skill: "Convert values between hexadecimal, binary and denary and explain why hexadecimal is used in computing.",
      lesson: {
        sections: [
          {
            heading: "Why hexadecimal?",
            body: "Computers store everything in binary, but long binary strings are hard for humans to read. **Hexadecimal** (base 16) is a compact shorthand: each hex digit stands for exactly **4 bits** (one nibble), so a byte is always two hex digits. Hex is used for memory addresses, colour codes and low-level debugging because it maps cleanly onto binary — converting between them is just regrouping nibbles.",
          },
          {
            heading: "Converting between bases",
            body: "Hex digits run 0-9 then A-F where A=10, B=11 ... F=15. **Binary → hex**: pad to a multiple of 4 bits, split into nibbles, convert each nibble. **Hex → binary**: expand each digit to 4 bits. **Hex → denary**: multiply each digit by its place value (16^n) and sum, e.g. 0x2A = 2×16 + 10 = 42. **Denary → hex**: repeatedly divide by 16 and read remainders bottom-up.",
          },
        ],
        keyFormulas: [
          { name: "Hex digit", statement: "1 hex digit = 4 bits (one nibble); 1 byte = 2 hex digits." },
          { name: "Hex to denary", statement: "sum of digit × 16^place value (units, sixteens, two-hundred-fifty-sixes, ...)." },
          { name: "Binary to hex", statement: "group bits into nibbles from the right, convert each nibble." },
        ],
        workedExample: {
          problem: "Convert 0x3F to binary and then to denary.",
          solution: "3 = 0011, F = 1111, so 0x3F = 0011 1111₂. Denary: 0+32+16+8+4+2+1 = 63 (or 3×16 + 15 = 63).",
        },
      },
      questions: [
        {
          id: "ecs10-u9-hexadecimal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In hexadecimal, what denary value does the digit F represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "16"
                    },
                    {
                              "id": "d",
                              "text": "255"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hexadecimal digits",
                              "statement": "0-9 then A=10 to F=15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hex digits run 0-9, A=10, B=11, C=12, D=13, E=14, F=15.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) 15",
          "commonErrors": [
                    "Thinking F = 16 — 16 is the base, not a digit value."
          ]
},
        },
        {
          id: "ecs10-u9-hexadecimal-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Convert the hexadecimal number 2A to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 42
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Hex to denary",
                              "statement": "digit × 16^place, then sum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 is in the sixteens place: 2 × 16 = 32.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A = 10 in the units place: 10 × 1 = 10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "32 + 10 = 42.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "42",
          "commonErrors": [
                    "Treating A as 10 but forgetting place values — 2A is not 2+10."
          ]
},
        },
        {
          id: "ecs10-u9-hexadecimal-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Convert the binary number 10110110 to hexadecimal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Binary to hex",
                              "statement": "Group into nibbles, convert each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Split into nibbles from the right: 1011 0110.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "1011₂ = 11 denary = B in hex.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "0110₂ = 6 in hex.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: 0xB6 (or B6₁₆).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "B6 (hexadecimal)",
          "commonErrors": [
                    "Converting each nibble to denary and forgetting the hex letters — answer must use A-F."
          ]
},
        },
        {
          id: "ecs10-u9-hexadecimal-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A memory address is stored as the hexadecimal value 5C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert 5C to binary.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Convert 5C to denary.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Hex conversions",
                              "statement": "4 bits per digit; place values 16 and 1."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 = 0101 and C = 1100, so 5C = 0101 1100₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each hex digit expands to exactly 4 bits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Full binary: 01011100 (leading zero may be dropped: 1011100).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "5 is in the sixteens place: 5 × 16 = 80.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "C = 12 in the units place: 12 × 1 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "80 + 12 = 92.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 01011100₂ (b) 92",
          "commonErrors": [
                    "Writing C as 1100 but pairing it with only 3 bits for 5 — each digit needs 4 bits."
          ]
},
        },
        {
          id: "ecs10-u9-hexadecimal-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A student is converting values between number bases for a programming task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert the denary number 175 to hexadecimal.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Convert the hexadecimal number 2D to binary, and hence give its denary value.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Denary/hex conversion",
                              "statement": "Divide by 16 for denary→hex; expand nibbles for hex→binary."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "175 ÷ 16 = 10 remainder 15.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Quotient 10 = A, remainder 15 = F.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reading remainders bottom-up: 0xAF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "2 = 0010 and D = 1101, so 2D = 0010 1101₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Binary value: 00101101 = 32 + 8 + 4 + 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sum: 32 + 8 + 4 + 1 = 45.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Denary value is 45.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) AF (b) 00101101₂ = 45",
          "commonErrors": [
                    "Reading denary→hex remainders top-down instead of bottom-up."
          ]
},
        },
        {
          id: "ecs10-u9-hexadecimal-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A computer technician is examining memory addresses written in hexadecimal.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons why hexadecimal is used to write memory addresses instead of binary.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Convert the address 1F3 to binary.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether hexadecimal or binary is easier for a human to read and compare addresses, justifying your answer.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Hex vs binary",
                              "statement": "Hex is compact yet losslessly maps to binary."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hex is more compact — one digit per 4 bits, so strings are 4× shorter.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Conversion to/from binary is trivial — each digit is one nibble.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It is less error-prone than long binary strings when reading or typing addresses.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Denary would lose the direct binary mapping, so hex is the practical compromise.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "1 = 0001, F = 1111, 3 = 0011.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Concatenate nibbles: 0001 1111 0011.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Full binary: 000111110011₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hexadecimal is far easier for humans — fewer digits, clearer grouping.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Binary remains the computer's native form and cannot be misread, but humans prefer hex.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Conclusion: use hex for human-readable addresses, binary only when interfacing directly with hardware.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) compact + easy nibble mapping + less error-prone (b) 000111110011₂ (c) hex easier for humans.",
          "commonErrors": [
                    "Claiming hex changes the stored value — it is only a representation."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u9-data-units",
      title: "Bits, bytes and storage units",
      skill: "Convert between bits, bytes and larger storage units and calculate file sizes and storage capacities.",
      lesson: {
        sections: [
          {
            heading: "Units of data",
            body: "The hierarchy runs: **bit** → **byte** (8 bits) → **kilobyte** → **megabyte** → **gigabyte** → **terabyte**. Computing uses binary prefixes: 1 kB = 1024 bytes (not 1000), 1 MB = 1024 kB, and so on — this is why a '500 GB' drive holds slightly less than 500 billion bytes. Always track whether a quantity is in bits or bytes before calculating — dividing by 8 converts bits to bytes.",
          },
          {
            heading: "Capacity vs file size",
            body: "**File size** is how much space one file occupies; **capacity** is how much a device can hold. A capacity question like 'how many photos fit?' needs both: convert capacity to the same unit as the file size, then divide — and remember the answer must be rounded down, since a partial file cannot be stored.",
          },
        ],
        keyFormulas: [
          { name: "Byte", statement: "1 byte = 8 bits." },
          { name: "Units", statement: "1 kB = 1024 B; 1 MB = 1024 kB; 1 GB = 1024 MB; 1 TB = 1024 GB." },
          { name: "Text file size", statement: "characters × bits per character ÷ 8 = bytes." },
        ],
        workedExample: {
          problem: "A text file contains 500 characters stored using 8 bits per character. What is its size in bytes and in kB?",
          solution: "500 × 8 = 4000 bits ÷ 8 = 500 bytes. 500 ÷ 1024 ≈ 0.49 kB.",
        },
      },
      questions: [
        {
          id: "ecs10-u9-data-units-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many bits are there in 1 kilobyte (using 1 kB = 1024 bytes)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1024"
                    },
                    {
                              "id": "b",
                              "text": "8000"
                    },
                    {
                              "id": "c",
                              "text": "8192"
                    },
                    {
                              "id": "d",
                              "text": "10,000"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data units",
                              "statement": "1 byte = 8 bits; 1 kB = 1024 bytes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1024 bytes × 8 bits = 8192 bits.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(c) 8192",
          "commonErrors": [
                    "Answering 1024 — that is bytes, not bits."
          ]
},
        },
        {
          id: "ecs10-u9-data-units-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Convert 5 megabytes to kilobytes (1 MB = 1024 kB).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 5120
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Unit conversion",
                              "statement": "Multiply by 1024 when going down a unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 MB × 1024 kB/MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "5 × 1024 = 5120.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 5120 kB.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5120 kB",
          "commonErrors": [
                    "Multiplying by 1000 — computing uses 1024."
          ]
},
        },
        {
          id: "ecs10-u9-data-units-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a computer's 1 kB is 1024 bytes rather than 1000 bytes, and what effect this has on advertised storage sizes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Binary prefixes",
                              "statement": "1024 = 2^10, matching binary structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computers work in binary, and 1024 = 2^10 is a natural binary unit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "1024 is a power of two, so conversions stay exact in binary.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A '500 GB' drive therefore holds 500 × 1024³ bytes of real capacity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Manufacturers sometimes quote decimal sizes, so usable space can appear slightly less than expected.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "1024 = 2^10 suits binary; advertised sizes can differ from formatted capacity.",
          "commonErrors": [
                    "Claiming 1024 is arbitrary — it comes from binary powers."
          ]
},
        },
        {
          id: "ecs10-u9-data-units-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A plain text file contains 400 characters, each stored using 8 bits.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total number of bits in the file.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the file size in bytes.",
                    "marks": 3
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
                              "statement": "chars × bits ÷ 8 = bytes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "400 characters × 8 bits per character.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "400 × 8 = 3200 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Total = 3200 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Convert bits to bytes: 3200 ÷ 8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "3200 ÷ 8 = 400.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "File size = 400 bytes (≈ 0.39 kB).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 3200 bits (b) 400 bytes",
          "commonErrors": [
                    "Forgetting to divide by 8 when converting bits to bytes."
          ]
},
        },
        {
          id: "ecs10-u9-data-units-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A USB stick has a capacity of 4 GB. Each photo file on it is 250 MB.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert the stick's capacity to megabytes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the maximum number of complete photo files the stick can hold.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Capacity calculation",
                              "statement": "Same units, then divide; round down."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "1 GB = 1024 MB, so 4 GB = 4 × 1024.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "4 × 1024 = 4096 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Capacity = 4096 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Divide capacity by file size: 4096 ÷ 250.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "4096 ÷ 250 = 16 remainder 96.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only complete files count — a partial 17th file cannot be stored.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Maximum = 16 photos (96 MB left unused).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 4096 MB (b) 16 photos",
          "commonErrors": [
                    "Rounding 16.38 up to 17 — partial files are impossible."
          ]
},
        },
        {
          id: "ecs10-u9-data-units-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school is planning a 2 TB network backup drive for staff photos averaging 5 MB each.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert 2 TB into gigabytes, showing each conversion step.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Estimate how many 5 MB photos the drive could hold.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate two reasons why the real number of photos stored might be lower than your estimate.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Large-unit conversion",
                              "statement": "Chain ×1024 through kB→MB→GB→TB."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "1 TB = 1024 GB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "2 TB = 2 × 1024 = 2048 GB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "In MB: 2048 × 1024 = 2,097,152 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Answer stated clearly: 2048 GB (or 2,097,152 MB).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "2,097,152 ÷ 5 = 419,430.4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Round down to whole files: ≈ 419,430 photos.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Or equivalently 2048 GB × 1024 ÷ 5 ≈ 419,430.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "The file system itself and the operating system reserve space on the drive.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Photos may be compressed differently or grow over time, changing real sizes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Quoted '5 MB' is an average — actual files vary, so the estimate is approximate only.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) 2048 GB / 2,097,152 MB (b) ≈ 419,430 photos (c) OS/file-system overhead and varying file sizes.",
          "commonErrors": [
                    "Dividing GB by MB directly — units must match first."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u9-number-systems-notes",
      title: "Number systems and data units — notes",
      summary: "Hex is 4 bits per digit; data units chain ×1024; always match units before dividing.",
      sections: [
        { heading: "Hexadecimal", body: "Digits 0-9, A-F = 10-15. Binary↔hex is nibble regrouping; hex↔denary uses place values 16^n." },
        { heading: "Units", body: "bit → byte (×8) → kB → MB → GB → TB (×1024 each step). Divide bits by 8 for bytes." },
        { heading: "Capacity questions", body: "Convert capacity and file size to the same unit, divide, round DOWN — partial files cannot be stored." },
      ],
    },
  ],
};
