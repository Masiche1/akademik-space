import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edxbteceng-u6-lesson-6-1",
  code: "6-1",
  title: "Logic Gates and Truth Tables",
  goal: "I CAN interpret and construct truth tables for AND, OR, NOT, NAND, NOR and XOR gates, and combine gates into simple logic circuits.",
  standards: ["Pearson BTEC L3 National Engineering — Electronic and control principles", "Digital electronics: logic gates and Boolean operations"],
  
  vocabulary: [
    { term: "Logic gate", definition: "An electronic circuit with one or more inputs and one output that follows a Boolean rule." },
    { term: "Truth table", definition: "A table listing every possible input combination and the resulting output." },
    { term: "AND gate", definition: "Output is 1 only when ALL inputs are 1." },
    { term: "OR gate", definition: "Output is 1 when AT LEAST ONE input is 1." },
    { term: "NOT gate", definition: "Output is the inverse of the input (inverter)." },
    { term: "NAND gate", definition: "AND followed by NOT — output 0 only when all inputs are 1." },
    { term: "XOR gate", definition: "Output is 1 when inputs are DIFFERENT (exclusive OR)." },
  ],
  concepts: [
    {
      id: "edxbteceng-u6-1-gates",
      title: "Logic gates and Boolean operations",
      skill: "Read and build truth tables for standard logic gates and combine gates to form simple combinational circuits.",
      lesson: {
        sections: [
          {
            heading: "Basic gates",
            body: "Digital circuits operate on binary signals — logic **1** (high, typically 5 V or 3.3 V) and logic **0** (low, 0 V). Each gate implements a Boolean rule:\n\n- **AND**: output 1 only if all inputs are 1\n- **OR**: output 1 if at least one input is 1\n- **NOT**: output is the opposite of the input\n\nA **truth table** lists every input combination with its output, letting you verify gate behaviour exactly.",
          },
          {
            heading: "Derived and multi-input gates",
            body: "**NAND** = NOT(AND): output 0 only when all inputs are 1 — very common because any Boolean function can be built from NAND gates alone. **NOR** = NOT(OR): output 1 only when all inputs are 0. **XOR** (exclusive OR): output 1 when inputs differ — used in adders and parity checks.\n\nGates are combined into **combinational circuits** where outputs depend only on current inputs. Sequential circuits (with memory, e.g. flip-flops and counters) are covered later in control systems.",
          },
        ],
        keyFormulas: [
          { name: "AND", statement: "out = 1 only if all inputs = 1" },
          { name: "OR", statement: "out = 1 if any input = 1" },
          { name: "NOT", statement: "out = NOT input" },
          { name: "NAND", statement: "out = NOT(AND)" },
          { name: "XOR", statement: "out = 1 if inputs differ" },
        ],
        workedExample: {
          problem: "Complete the truth table for a 2-input XOR gate, then state its output when A = 1, B = 0.",
          solution: "XOR: (0,0)→0, (0,1)→1, (1,0)→1, (1,1)→0. For A=1, B=0 the inputs differ, so output = 1.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u6-1-gates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An AND gate has inputs A = 1 and B = 0. What is the output?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "Depends on voltage"
                    },
                    {
                              "id": "d",
                              "text": "Cannot be determined"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND gate",
                              "statement": "Output 1 only when all inputs are 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND requires all inputs = 1; here B = 0, so output = 0.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 0"
},
        },
        {
          id: "edxbteceng-u6-1-gates-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the output of a NOT gate when its input is logic 1, and state the output when its input is logic 0.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NOT gate",
                              "statement": "Output is the inverse of the input."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input 1 → output 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Input 0 → output 1.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1 → 0; 0 → 1"
},
        },
        {
          id: "edxbteceng-u6-1-gates-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 3-input AND gate has inputs A = 1, B = 1, C = 0. State the output and explain the rule applied. Then state the output of a 3-input OR gate with the same inputs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND gate",
                              "statement": "All inputs must be 1 for output 1."
                    },
                    {
                              "kind": "definition",
                              "name": "OR gate",
                              "statement": "Any input 1 gives output 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND: C = 0 so not all inputs are 1 → output 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OR: A and B are 1, so at least one input is 1 → output 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AND needs unanimity; OR needs only one — opposite conditions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "AND output = 0; OR output = 1"
},
        },
        {
          id: "edxbteceng-u6-1-gates-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Complete this truth table for a 2-input XOR gate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the output for inputs (0,0), (0,1), (1,0), (1,1).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State in words the condition for XOR output = 1.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "XOR gate",
                              "statement": "Output 1 when inputs differ."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "(0,0)→0, (0,1)→1, (1,0)→1, (1,1)→0.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Output is 1 when exactly one input is 1 — the inputs are different.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Outputs 0,1,1,0; 1 when inputs differ"
},
        },
        {
          id: "edxbteceng-u6-1-gates-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A security light should turn ON when it is dark (input D = 1 means dark) AND motion is detected (input M = 1 means motion).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the single logic gate that implements this rule.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write the truth table outputs for (D,M) = (0,0), (0,1), (1,0), (1,1).",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State when the light is OFF.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND gate",
                              "statement": "Both conditions must be true for output 1."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "AND gate — both inputs must be 1.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Outputs: 0, 0, 0, 1.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "OFF whenever dark=0 OR motion=0 — i.e. in all cases except (1,1).",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "AND; outputs 0,0,0,1; OFF unless dark AND motion"
},
        },
        {
          id: "edxbteceng-u6-1-gates-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A digital system has two inputs X and Y. A circuit is built as: an AND gate on X and Y, then a NOT gate on the AND output.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the resulting single gate equivalent.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Give the output for all four input combinations.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State the output when X = 1 and Y = 1.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Explain why NAND gates are useful for building any logic function.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State the logic level (1 or 0) represented by a high voltage of 5 V in a 5 V system.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NAND gate",
                              "statement": "NOT(AND): output 0 only when all inputs are 1."
                    },
                    {
                              "kind": "principle",
                              "name": "Functional completeness",
                              "statement": "NAND gates alone can implement any Boolean function."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "This is a NAND gate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "(0,0)→1, (0,1)→1, (1,0)→1, (1,1)→0.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Output = 0 (the only case where AND output is 1 is inverted).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "NOT(AND) can produce NOT, OR and AND, and hence any Boolean function.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Using only one gate type simplifies manufacturing and reduces component variety.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "In a 5 V system, logic 1 = high ≈ 5 V; logic 0 = low ≈ 0 V.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) NAND (b) 1,1,1,0 (c) 0 (d) NAND is functionally complete (e) 1"
},
        },
      ],
    },
    {
      id: "edxbteceng-u6-1-number",
      title: "Binary, hexadecimal and logic levels",
      skill: "Convert between binary, denary and hexadecimal, and relate binary values to logic voltage levels in digital circuits.",
      lesson: {
        sections: [
          {
            heading: "Binary and place values",
            body: "Digital systems store data in **binary** (base 2) using only digits 0 and 1. Each bit has a place value doubling left-to-right. An 8-bit byte holds values 0–255; overflow occurs above the maximum.\n\nConversion: binary→denary adds place values of 1-bits; denary→binary repeatedly divides by 2; binary→hex groups bits into nibbles (4 bits each), where each hex digit = 0–15.",
          },
          {
            heading: "Logic levels and voltage",
            body: "In a digital circuit, logic **1** is represented by a 'high' voltage (e.g. 5 V or 3.3 V) and logic **0** by 'low' voltage (≈ 0 V). These are idealised levels — real signals have noise margins. A **pull-up resistor** holds an input at logic 1 unless actively driven low; a **pull-down** does the reverse.\n\nHexadecimal is compact: 0xFF = 255, 0x0F = 15. Engineers write hex for memory addresses, colours and registers.",
          },
        ],
        keyFormulas: [
          { name: "8-bit range", statement: "0 to 255" },
          { name: "Hex", statement: "1 hex digit = 4 bits = 1 nibble" },
          { name: "Logic levels", statement: "1 = high voltage, 0 = low voltage" },
        ],
        workedExample: {
          problem: "Convert binary 1011 0101 to denary and hexadecimal.",
          solution: "Denary: 128+32+16+4+1 = 181. Hex: 1011 = B, 0101 = 5 → 0xB5.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u6-1-number-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different values can 4 bits represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "16"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "4"
                    },
                    {
                              "id": "d",
                              "text": "32"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Binary counting",
                              "statement": "n bits represent 2^n values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 bits → 2^4 = 16 combinations (0–15).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 16"
},
        },
        {
          id: "edxbteceng-u6-1-number-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert the binary number 0110 1010 to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "denary",
                              "answer": 106
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary→denary",
                              "statement": "Sum the place values of the 1-bits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Place values: 64+32+8+2 = 106.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 106.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "106"
},
        },
        {
          id: "edxbteceng-u6-1-number-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 0x2F to binary and to denary, showing your working.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hex conversion",
                              "statement": "Each hex digit = 4 bits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 = 0010, F = 1111 → binary 0010 1111.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Denary: 32+8+4+2+1 = 47.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Final: binary 0010 1111, denary 47.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0010 1111₂ = 47₁₀"
},
        },
        {
          id: "edxbteceng-u6-1-number-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An 8-bit register holds the binary value 1111 1111.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert it to denary.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Convert it to hexadecimal.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State what happens if 1 is added (in an 8-bit system).",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "8-bit range",
                              "statement": "0–255; overflow wraps or errors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "All bits set → 255 (2^8 − 1).",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "1111 = F, 1111 = F → 0xFF.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overflow: wraps to 0 or produces an error, since 256 exceeds the 8-bit range.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 255 (b) 0xFF (c) overflow → wraps to 0 or errors"
},
        },
        {
          id: "edxbteceng-u6-1-number-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A microcontroller uses 5 V logic: logic 1 is represented by ≈ 5 V and logic 0 by ≈ 0 V.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the logic level represented by 5 V.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "A sensor output of 4.8 V is applied to an input. Is this read as logic 1 or logic 0?",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why digital signals are more noise-resistant than analogue signals.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Logic levels",
                              "statement": "High voltage = 1, low voltage = 0; noise margins allow interpretation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Logic 1.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "4.8 V is close to the 5 V 'high' level, within the noise margin.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is read as logic 1.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Digital uses only two distinct levels, so small noise doesn't change the interpretation.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Noise margins around each level absorb interference.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Analogue signals represent values by exact voltage — any noise corrupts the value directly.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 1 (b) logic 1 (c) two levels + noise margins make digital robust"
},
        },
        {
          id: "edxbteceng-u6-1-number-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A memory chip stores the hexadecimal value 0xA3.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State how many bits each hex digit represents.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Convert 0xA3 to binary.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Convert 0xA3 to denary.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Convert denary 200 to hexadecimal.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why hexadecimal is preferred to binary for representing memory contents.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Number bases",
                              "statement": "Hex digit = 4 bits; conversions via place values."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 bits per hex digit (a nibble).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A = 1010, 3 = 0011 → 1010 0011.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "128+32+2+1 = 163.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "200 = 128+64+8 = 1100 1000₂ → nibbles 1100=C, 1000=8 → 0xC8.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Hex is compact: 1 hex digit replaces 4 binary digits, reducing errors and length.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Still maps directly to binary (each digit = nibble), so conversion is trivial.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 4 bits (b) 1010 0011 (c) 163 (d) 0xC8 (e) compact and maps to binary"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u6-logic-notes",
      title: "Logic and number systems — notes",
      summary: "AND/OR/NOT/NAND/NOR/XOR truth tables; binary↔denary↔hex; logic 1 = high voltage.",
      sections: [
        { heading: "Gate cheatsheet", body: "AND: all 1s; OR: any 1; NOT: invert; NAND: NOT(AND); NOR: NOT(OR); XOR: inputs differ." },
        { heading: "Conversions", body: "Binary→denary: sum 1-bit place values. Hex: 1 digit = 4 bits. 8-bit range 0–255." },
        { heading: "Why digital", body: "Two voltage levels + noise margins → robust against interference." },
      ],
    },
  ],
};
