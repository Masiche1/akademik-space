import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciealc-u5-lesson-5-3",
  code: "5-3",
  title: "Number Systems and Data Representation in Depth",
  goal: "I CAN convert between number bases, apply two's complement and analyse floating-point representation.",
  standards: [
    "Cambridge A Level Computer Science 9618",
    "Paper 1: data representation",
  ],
  vocabulary: [
    { term: "Binary", definition: "Base-2 number system using 0 and 1." },
    {
      term: "Hexadecimal",
      definition: "Base-16 number system using 0-9 and A-F.",
    },
    {
      term: "Two's complement",
      definition: "Method for representing negative integers in binary.",
    },
    {
      term: "Mantissa and exponent",
      definition: "Components of floating-point representation.",
    },
    { term: "Denary", definition: "Base-10 number system." },
    { term: "Overflow", definition: "Result exceeding representable range." },
  ],
  concepts: [
    {
      id: "ciealc-u5-s3-num",
      title: "Number systems and representation",
      skill: "Convert bases, handle signed integers and floating point.",
      lesson: {
        sections: [
          {
            heading: "Base conversions",
            body: "Binary uses powers of 2; hex uses powers of 16 for compact representation. Convert binary to denary by summing powers of 2 (1,2,4,8,16...). Convert denary to binary by repeated division by 2. Convert hex to binary by expanding each hex digit to 4 bits; binary to hex by grouping bits in 4s.",
          },
          {
            heading: "Two's complement",
            body: "Computers store signed integers in two's complement: the leftmost bit is the sign bit (0=positive, 1=negative). To negate a number: invert all bits and add 1. Range for n bits is -2^(n-1) to 2^(n-1)-1. Overflow occurs when arithmetic exceeds this range.",
          },
          {
            heading: "Floating point",
            body: "Floating-point numbers use mantissa × 2^exponent to represent decimals. Normalisation ensures the mantissa is in a standard form. Limited bits cause rounding errors and overflow/underflow. Fixed-point uses a fixed decimal position — simpler but limited range.",
          },
        ],
      },
      questions: [
    {
      id: "ciealc-u5-ns-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the base of the binary number system?",
      response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Binary", statement: "Base 2." },
        ],
        steps: [
          {
            reasoning: "Binary is base-2, using digits 0 and 1.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "2",
      },
    },
    {
      id: "ciealc-u5-ns-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the base of hexadecimal?",
      response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Hexadecimal", statement: "Base 16." },
        ],
        steps: [
          {
            reasoning: "Hexadecimal is base-16, using digits 0-9 and A-F.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "16",
      },
    },
    {
      id: "ciealc-u5-ns-q3",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Convert binary 1010 to denary.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Binary to denary",
            statement: "Sum powers of 2.",
          },
        ],
        steps: [
          {
            reasoning: "1010 = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10.",
            marks: 1,
            markCode: "M",
          },
          { reasoning: "The denary value is 10.", marks: 1, markCode: "M" },
        ],
        finalAnswer: "10",
      },
    },
    {
      id: "ciealc-u5-ns-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many bits does one hexadecimal digit represent?",
      response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Hex-binary relation",
            statement: "1 hex = 4 bits.",
          },
        ],
        steps: [
          {
            reasoning:
              "Each hexadecimal digit represents 4 binary bits (16 = 2^4).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "4",
      },
    },
    {
      id: "ciealc-u5-ns-q5",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "What is two's complement used for?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Two's complement",
            statement: "Signed integer representation.",
          },
        ],
        steps: [
          {
            reasoning:
              "Two's complement represents negative integers in binary using the sign bit.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It allows arithmetic on negative numbers using the same operations as positive numbers.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Represents negative integers in binary.",
      },
    },
    {
      id: "ciealc-u5-ns-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Convert binary 1101 to denary.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Binary to denary",
            statement: "Sum powers of 2.",
          },
        ],
        steps: [
          {
            reasoning: "1101 = 1×8 + 1×4 + 0×2 + 1×1.",
            marks: 1,
            markCode: "M",
          },
          { reasoning: "= 8 + 4 + 0 + 1 = 13.", marks: 1, markCode: "M" },
          { reasoning: "The denary value is 13.", marks: 1, markCode: "A" },
        ],
        finalAnswer: "13",
      },
    },
    {
      id: "ciealc-u5-ns-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Convert denary 13 to binary.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Denary to binary",
            statement: "Repeated division by 2.",
          },
        ],
        steps: [
          {
            reasoning:
              "13 ÷ 2 = 6 remainder 1; 6 ÷ 2 = 3 remainder 0; 3 ÷ 2 = 1 remainder 1; 1 ÷ 2 = 0 remainder 1.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "Reading remainders bottom-up: 1101.",
            marks: 1,
            markCode: "M",
          },
          { reasoning: "Denary 13 = binary 1101.", marks: 1, markCode: "A" },
        ],
        finalAnswer: "1101",
      },
    },
    {
      id: "ciealc-u5-ns-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Convert hex A3 to binary.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Hex to binary",
            statement: "Expand each digit.",
          },
        ],
        steps: [
          {
            reasoning: "A = 1010 (10 in denary), 3 = 0011 (3 in denary).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "Combining: A3 = 1010 0011 = 10100011.",
            marks: 1,
            markCode: "M",
          },
          { reasoning: "Hex A3 = binary 10100011.", marks: 1, markCode: "A" },
        ],
        finalAnswer: "10100011",
      },
    },
    {
      id: "ciealc-u5-ns-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Convert binary 10101100 to hexadecimal.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Binary to hex",
            statement: "Group bits in 4s.",
          },
        ],
        steps: [
          { reasoning: "Group: 1010 1100.", marks: 1, markCode: "M" },
          {
            reasoning: "1010 = A (10), 1100 = C (12).",
            marks: 1,
            markCode: "M",
          },
          { reasoning: "Binary 10101100 = hex AC.", marks: 1, markCode: "A" },
        ],
        finalAnswer: "AC",
      },
    },
    {
      id: "ciealc-u5-ns-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "In two's complement, what does the leftmost bit represent?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Sign bit" },
          { id: "b", text: "Check bit" },
          { id: "c", text: "Parity bit" },
          { id: "d", text: "Least significant bit" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Sign bit",
            statement: "Leftmost in two's complement.",
          },
        ],
        steps: [
          {
            reasoning:
              "In two's complement, the leftmost bit is the sign bit — 0 for positive, 1 for negative.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(a)** Sign bit",
      },
    },
    {
      id: "ciealc-u5-ns-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "What is the range of a signed 8-bit two's complement integer?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Two's complement range",
            statement: "-128 to 127.",
          },
        ],
        steps: [
          {
            reasoning: "For n bits, range is -2^(n-1) to 2^(n-1)-1.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "For 8 bits: -2^7 to 2^7-1 = -128 to 127.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "-128 to 127",
      },
    },
    {
      id: "ciealc-u5-ns-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how to find the two's complement of a negative number.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Two's complement",
            statement: "Invert and add 1.",
          },
        ],
        steps: [
          {
            reasoning: "Take the positive binary representation of the number.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Invert all bits (0→1, 1→0) — this gives the one's complement.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Add 1 to the result — this gives the two's complement representation.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Invert all bits, then add 1.",
      },
    },
    {
      id: "ciealc-u5-ns-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why floating-point representation can cause rounding errors.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Floating-point limits",
            statement: "Finite bits, infinite decimals.",
          },
        ],
        steps: [
          {
            reasoning:
              "Floating-point uses finite bits for mantissa and exponent — cannot represent all decimal values exactly.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Numbers like 0.1 cannot be represented exactly in binary — they require infinite repeating fractions.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The computer rounds to the nearest representable value, introducing small errors.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Accumulated rounding errors can cause unexpected results — e.g., 0.1+0.2 ≠ 0.3 in floating point.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Finite binary representation can't capture all decimals — rounding errors result.",
      },
    },
    {
      id: "ciealc-u5-ns-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether hexadecimal is better than binary for representing data.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Hex vs binary.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: hex is more compact and human-readable but binary is the native format.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages of hex: 1 hex digit = 4 bits, so 2x more compact; easier for humans to read and write; used in memory addresses, colours, debugging.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages of binary: direct hardware representation, unambiguous, no conversion needed for computation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: hex is better for human use; binary is essential for machine processing — they complement each other.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Hex for humans, binary for machines — complementary.",
      },
    },
    {
      id: "ciealc-u5-ns-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the impact of limited bits on data representation.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Bit limitations.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: limited bits constrain representable values — range, precision and accuracy.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Integer overflow: values exceeding range wrap around or error; more bits = larger range.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Floating-point: limited mantissa bits cause rounding errors; limited exponent causes overflow/underflow.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: bit allocation involves trade-offs — more bits improve accuracy but use more memory/storage.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Bits limit range and precision — trade-offs are inherent.",
      },
    },
    {
      id: "ciealc-u5-ns-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why computers use binary rather than denary internally.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Binary hardware",
            statement: "Two states = on/off.",
          },
        ],
        steps: [
          {
            reasoning:
              "Transistors have two stable states — on and off — naturally representing 1 and 0.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Binary simplifies hardware design — circuits need only distinguish two voltage levels.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Boolean logic operates on binary states — AND, OR, NOT map directly to circuit behaviour.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Denary would require 10 distinguishable states — much harder to implement reliably in hardware.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Transistors have two states — binary maps perfectly to hardware.",
      },
    },
    {
      id: "ciealc-u5-ns-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'normalisation' in floating-point representation?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Converting to binary" },
          { id: "b", text: "Removing decimal points" },
          { id: "c", text: "Making numbers negative" },
          { id: "d", text: "Adjusting mantissa so leading digit is non-zero" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Normalisation",
            statement: "Standard mantissa form.",
          },
        ],
        steps: [
          {
            reasoning:
              "Normalisation adjusts the mantissa so the leading digit is non-zero, ensuring consistent representation.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(d)** Adjusting mantissa so leading digit is non-zero",
      },
    },
    {
      id: "ciealc-u5-ns-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the difference between fixed-point and floating-point representation.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Fixed-point",
            statement: "Fixed decimal position.",
          },
          {
            kind: "definition",
            name: "Floating-point",
            statement: "Mantissa + exponent.",
          },
        ],
        steps: [
          {
            reasoning:
              "Fixed-point reserves fixed bits for integer and fractional parts — simple but limited range.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Floating-point uses mantissa × 2^exponent — wide range but potential precision loss.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Fixed-point suits financial calculations needing exact decimals; floating-point suits scientific calculations needing range.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Fixed = fixed decimal position; floating = mantissa × exponent.",
      },
    },
    {
      id: "ciealc-u5-ns-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to convert a negative denary number to two's complement binary.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Denary to two's complement",
            statement: "Magnitude, invert, add 1.",
          },
        ],
        steps: [
          {
            reasoning: "Convert the absolute value to binary.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "Invert all bits (one's complement).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "Add 1 to get the two's complement representation.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Magnitude → invert bits → add 1.",
      },
    },
    {
      id: "ciealc-u5-ns-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether more bits always improve data representation.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Bit-accuracy trade-off.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: more bits improve range and precision but cost memory and bandwidth.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: larger integer range, finer floating-point precision, more colours in images, better audio quality.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Costs: more storage space, slower transmission, higher memory usage, may be unnecessary for simple data.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: choose bit depth based on required accuracy vs resource constraints — more is not always better.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Trade-off between accuracy and resources.",
      },
    },
      ],
    },
  ],
};
