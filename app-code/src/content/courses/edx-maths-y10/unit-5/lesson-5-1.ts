import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edm10-u5-lesson-5-1",
  code: "5-1",
  title: "Index Laws",
  goal: "I CAN apply the laws of indices, including negative and fractional indices, to simplify expressions and solve equations.",
  standards: ["4MA1 1.7", "4MA1 1.8H"],
  
  vocabulary: [
    { term: "Index (power)", definition: "The small raised number showing how many times a base is multiplied by itself." },
    { term: "Base", definition: "The number or expression that is being raised to a power." },
    { term: "Zero index", definition: "$a^0=1$ for any non-zero $a$." },
    { term: "Negative index", definition: "$a^{-n}=\\frac{1}{a^n}$; a negative power means a reciprocal." },
    { term: "Fractional index", definition: "$a^{\\frac{1}{n}}$ is the $n$th root of $a$; $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$." },
    { term: "Index law", definition: "A rule for combining powers, e.g. $a^m\\times a^n=a^{m+n}$." },
  ],
  concepts: [
    {
      id: "edm10-u5-negative-fractional-indices",
      title: "Negative and fractional indices",
      skill: "Evaluate and rewrite expressions involving zero, negative and fractional indices.",
      lesson: {
        sections: [
          {
            heading: "Zero and negative indices",
            body: "For any non-zero number $a$, $a^0=1$. A negative index gives a reciprocal: $a^{-n}=\\frac{1}{a^n}$. So $2^{-3}=\\frac{1}{8}$ and $\\frac{1}{5^2}=5^{-2}$. Negative indices can appear in the denominator of a fraction.",
          },
          {
            heading: "Fractional indices",
            body: "A fractional index means a root followed by a power. $a^{\\frac{1}{n}}=\\sqrt[n]{a}$, so $8^{\\frac{1}{3}}=2$. More generally $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$, so $8^{\\frac{2}{3}}=(\\sqrt[3]{8})^2=2^2=4$. It is usually easiest to write the base as a power first: $27=3^3$, so $27^{\\frac{2}{3}}=(3^3)^{\\frac{2}{3}}=3^2=9$.",
          },
          {
            heading: "Combining the two",
            body: "Negative fractional indices combine both ideas: $a^{-\\frac{m}{n}}=\\frac{1}{(\\sqrt[n]{a})^m}$. For example $16^{-\\frac{3}{4}}=\\frac{1}{(\\sqrt[4]{16})^3}=\\frac{1}{2^3}=\\frac{1}{8}$. Always simplify the base into prime powers when the numbers are perfect powers.",
          },
        ],
        keyFormulas: [
          { name: "Zero index", statement: "$a^0=1$" },
          { name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
          { name: "Fractional index", statement: "$a^{\\frac{1}{n}}=\\sqrt[n]{a},\\quad a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$" },
        ],
        workedExample: {
          problem: "Evaluate $8^{-\\frac{2}{3}}$ without a calculator.",
          solution: "$8=2^3$, so $8^{\\frac{1}{3}}=2$ and $8^{\\frac{2}{3}}=4$. Therefore $8^{-\\frac{2}{3}}=\\frac{1}{4}$.",
        },
      },
      questions: [
        {
          id: "edm10-u5-nfi-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 1,
          stem: "What is the value of $4^{-2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{1}{16}$"
                    },
                    {
                              "id": "b",
                              "text": "$-8$"
                    },
                    {
                              "id": "c",
                              "text": "$16$"
                    },
                    {
                              "id": "d",
                              "text": "$-\\frac{1}{16}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative index",
                              "statement": "$a^{-n}=\\frac{1}{a^n}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$4^{-2}=\\frac{1}{4^2}=\\frac{1}{16}$.",
                              "working": "4^{-2}=\\frac{1}{16}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $\\frac{1}{16}$",
          "commonErrors": [
                    "Thinking a negative index makes the answer negative.",
                    "Reciprocating only once: $\\frac{1}{4}$ instead of $\\frac{1}{16}$."
          ]
},
        },
        {
          id: "edm10-u5-nfi-q2",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "Write $\\frac{1}{\\sqrt[3]{5}}$ in the form $5^n$, where $n$ is a fraction.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "n",
                              "answer": -0.333333,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fractional index",
                              "statement": "$5^{\\frac{1}{3}}=\\sqrt[3]{5}$, so its reciprocal is $5^{-\\frac{1}{3}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rewrite the cube root as a fractional index.",
                              "working": "\\frac{1}{\\sqrt[3]{5}}=\\frac{1}{5^{\\frac{1}{3}}}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply the negative index rule.",
                              "working": "=5^{-\\frac{1}{3}}\\Rightarrow n=-\\frac{1}{3}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$n=-\\frac{1}{3}$",
          "commonErrors": [
                    "Writing $n=-3$ instead of $n=-\\frac{1}{3}$.",
                    "Dropping the negative sign."
          ]
},
        },
        {
          id: "edm10-u5-nfi-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Evaluate $27^{\\frac{2}{3}}$ without using a calculator.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fractional index evaluation",
                              "statement": "Take the root first, then apply the power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Write 27 as a power of 3.",
                              "working": "27=3^3\\Rightarrow 27^{\\frac{1}{3}}=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply the remaining power of 2.",
                              "working": "27^{\\frac{2}{3}}=3^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "3^2=9",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Computing $27^2$ first, which is far too large.",
                    "Using $27^{\\frac{1}{3}}=9$ by taking a square root instead of a cube root."
          ]
},
        },
        {
          id: "edm10-u5-nfi-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Evaluate $\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}}$ without using a calculator. Give your answer as a fraction in its simplest form.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 3.375,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Negative fractional index of a fraction",
                              "statement": "Flip the fraction for the negative index, then take the root and power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A negative index reciprocates the whole bracket.",
                              "working": "\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}}=\\left(\\frac{81}{16}\\right)^{\\frac{3}{4}}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Find the fourth roots.",
                              "working": "\\sqrt[4]{81}=3,\\quad \\sqrt[4]{16}=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Raise each to the power 3.",
                              "working": "\\frac{3^3}{2^3}=\\frac{27}{8}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the value.",
                              "working": "\\frac{27}{8}=3.375",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$\\frac{27}{8}$",
          "commonErrors": [
                    "Reciprocating only the numerator or only the denominator.",
                    "Computing $81^{\\frac{3}{4}}$ as $81\\times\\frac{3}{4}$."
          ]
},
        },
        {
          id: "edm10-u5-nfi-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Evaluate each of the following without using a calculator.",
          parts: [
          {
                    "label": "a",
                    "prompt": "$8^{-\\frac{2}{3}}$",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "$\\left(\\frac{1}{32}\\right)^{\\frac{3}{5}}$",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "$64^{\\frac{5}{6}}$",
                    "marks": 2
          }
],
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "(a)",
                              "answer": 0.25
                    },
                    {
                              "label": "(b)",
                              "answer": 0.125
                    },
                    {
                              "label": "(c)",
                              "answer": 32
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Perfect-power bases",
                              "statement": "Write each base as a prime power, then use $(a^m)^n=a^{mn}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$8=2^3$, so $8^{\\frac{2}{3}}=2^2=4$ and the negative index reciprocates.",
                              "working": "8^{-\\frac{2}{3}}=\\frac{1}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the value.",
                              "working": "0.25",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$32=2^5$, so $32^{\\frac{3}{5}}=2^3=8$, then reciprocate.",
                              "working": "\\left(\\frac{1}{32}\\right)^{\\frac{3}{5}}=\\frac{1}{8}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the value.",
                              "working": "0.125",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$64=2^6$, so $64^{\\frac{5}{6}}=2^5$.",
                              "working": "64^{\\frac{5}{6}}=2^5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "2^5=32",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\frac{1}{4}$ (b) $\\frac{1}{8}$ (c) $32$",
          "commonErrors": [
                    "Applying the power before the root, e.g. $8^2=64$ then a cube root.",
                    "Forgetting to reciprocate the negative index."
          ]
},
        },
        {
          id: "edm10-u5-nfi-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "This question is about negative and fractional indices.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the value of $a^0$ for any non-zero number $a$, and write $a^{-n}$ in terms of $a^n$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate, without a calculator: (i) $16^{-\\frac{3}{4}}$ and (ii) $25^{\\frac{3}{2}}$.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Solve $4^x=32$.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Solve $x^{-\\frac{1}{2}}=\\frac{1}{2}$.",
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
                              "name": "Zero and negative indices",
                              "statement": "$a^0=1$ and $a^{-n}=\\frac{1}{a^n}$."
                    },
                    {
                              "kind": "method",
                              "name": "Fractional index evaluation",
                              "statement": "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "State the zero index result.",
                              "working": "a^0=1",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the negative index rule.",
                              "working": "a^{-n}=\\frac{1}{a^n}",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "For (i): $16=2^4$, so $16^{\\frac{3}{4}}=2^3=8$, then reciprocate.",
                              "working": "16^{-\\frac{3}{4}}=\\frac{1}{8}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State (i).",
                              "working": "\\frac{1}{8}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "For (ii): $25^{\\frac{1}{2}}=5$, so $25^{\\frac{3}{2}}=5^3$.",
                              "working": "25^{\\frac{3}{2}}=125",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State (ii).",
                              "working": "125",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Write both sides as powers of 2: $4^x=2^{2x}$ and $32=2^5$.",
                              "working": "2^{2x}=2^5\\Rightarrow 2x=5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solve.",
                              "working": "x=\\frac{5}{2}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reciprocate: $x^{-\\frac{1}{2}}=\\frac{1}{2}$ gives $x^{\\frac{1}{2}}=2$.",
                              "working": "\\sqrt{x}=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Square both sides.",
                              "working": "x=4",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $a^0=1$, $a^{-n}=\\frac{1}{a^n}$ (b) $\\frac{1}{8}$ and $125$ (c) $x=\\frac{5}{2}$ (d) $x=4$",
          "commonErrors": [
                    "Writing $16^{-\\frac{3}{4}}$ as $-16^{\\frac{3}{4}}$.",
                    "In part (d) squaring before reciprocating and getting $x=\\frac{1}{4}$."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u5-laws-of-indices",
      title: "Laws of indices",
      skill: "Simplify algebraic expressions using the laws of indices, including negative and fractional powers.",
      lesson: {
        sections: [
          {
            heading: "The laws",
            body: "For multiplication and division of the same base, add or subtract indices: $a^m\\times a^n=a^{m+n}$ and $\\frac{a^m}{a^n}=a^{m-n}$. Powers of powers multiply indices: $(a^m)^n=a^{mn}$. A product raised to a power splits: $(ab)^n=a^nb^n$. A negative power moves the base to the other side of the fraction line: $a^{-n}=\\frac{1}{a^n}$.",
          },
          {
            heading: "Working with algebraic indices",
            body: "The laws apply to letters as well as numbers. Collect like bases and add the indices for each base separately. For example $x^3\\times x^4=x^7$ and $\\frac{y^5}{y^2}=y^3$. When a term with a negative index appears in the denominator it can be written with a positive index on top.",
          },
          {
            heading: "Powers of products and quotients",
            body: "$(ab)^n=a^nb^n$ and $\\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}$. So $\\left(2x^3\\right)^2=4x^6$. When simplifying a big expression, deal with the coefficients and each base one at a time, and finish with positive indices only.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "$a^m\\times a^n=a^{m+n}$" },
          { name: "Divide", statement: "$\\frac{a^m}{a^n}=a^{m-n}$" },
          { name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
          { name: "Product to a power", statement: "$(ab)^n=a^nb^n$" },
          { name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{12x^3y^2}{4x^2y}\\times\\frac{3x}{2y}$, giving positive indices only.",
          solution: "Coefficients: $\\frac{12}{4}\\times\\frac{3}{2}=\\frac{9}{2}$. For $x$: $3-2+1=2$. For $y$: $2-1-1=0$. Result: $\\frac{9}{2}x^2$.",
        },
      },
      questions: [
        {
          id: "edm10-u5-loi-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "Simplify $5^3 \\times 5^2$. Give your answer as a power of 5.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5^5$"
                    },
                    {
                              "id": "b",
                              "text": "$5^6$"
                    },
                    {
                              "id": "c",
                              "text": "$25^5$"
                    },
                    {
                              "id": "d",
                              "text": "$5^9$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Multiplication of powers",
                              "statement": "$a^m\\times a^n=a^{m+n}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add the indices.",
                              "working": "5^{3+2}=5^5",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $5^5$",
          "commonErrors": [
                    "Multiplying the indices to get $5^6$.",
                    "Multiplying the bases to get $25^5$."
          ]
},
        },
        {
          id: "edm10-u5-loi-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Evaluate $2^5 \\times 2^3 \\div 2^4$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 16
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Index laws",
                              "statement": "Add indices for multiplication, subtract for division."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine all the powers of 2.",
                              "working": "2^{5+3-4}=2^4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "2^4=16",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$16$",
          "commonErrors": [
                    "Adding all three indices to get $2^{12}$.",
                    "Treating division as multiplication of indices."
          ]
},
        },
        {
          id: "edm10-u5-loi-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Simplify $\\frac{x^5 \\times x^3}{x^4}$, giving your answer in the form $x^n$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Index laws",
                              "statement": "$a^m\\times a^n=a^{m+n}$ and $\\frac{a^m}{a^n}=a^{m-n}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine the numerator first.",
                              "working": "x^5\\times x^3=x^8",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divide by $x^4$.",
                              "working": "\\frac{x^8}{x^4}=x^{8-4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the simplified form.",
                              "working": "x^4",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$x^4$",
          "commonErrors": [
                    "Subtracting the indices before multiplying the numerator, giving $x^{5-4}\\times x^{3-4}$."
          ]
},
        },
        {
          id: "edm10-u5-loi-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "Simplify $\\left(\\frac{2x^3}{y^2}\\right)^2 \\times \\frac{3y^4}{x}$, giving positive indices only.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Power of a quotient",
                              "statement": "$\\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}$."
                    },
                    {
                              "kind": "law",
                              "name": "Index laws",
                              "statement": "Add indices when multiplying like bases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square the bracket.",
                              "working": "\\left(\\frac{2x^3}{y^2}\\right)^2=\\frac{4x^6}{y^4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiply by the second fraction.",
                              "working": "\\frac{4x^6}{y^4}\\times\\frac{3y^4}{x}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Combine coefficients and the $x$ indices.",
                              "working": "12x^{6-1}=12x^5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Combine the $y$ indices: $-4+4=0$, so $y$ disappears.",
                              "working": "y^{4-4}=y^0=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the answer.",
                              "working": "12x^5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$12x^5$",
          "commonErrors": [
                    "Squaring only the $x$ term and forgetting $y^{-2}$ or the coefficient 2.",
                    "Adding the $y$ indices to get $y^8$ instead of subtracting."
          ]
},
        },
        {
          id: "edm10-u5-loi-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Simplify each expression, giving positive indices only.",
          parts: [
          {
                    "label": "a",
                    "prompt": "$p^4 q^3 \\div p^2 q$",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "$\\frac{x^2 y^{-1}}{x^{-2} y^3}$",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "$(2p^3 q)^2 \\times 3p^{-1} q^2$",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Index laws",
                              "statement": "Subtract indices on division; move negative indices across the fraction."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Subtract indices for each base.",
                              "working": "p^{4-2}q^{3-1}=p^2q^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "p^2q^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract indices: $x^{2-(-2)}=x^4$ and $y^{-1-3}=y^{-4}$.",
                              "working": "x^4y^{-4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Write with positive indices.",
                              "working": "\\frac{x^4}{y^4}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Expand the square, then multiply.",
                              "working": "4p^6q^2\\times 3p^{-1}q^2=12p^5q^4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the answer.",
                              "working": "12p^5q^4",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $p^2q^2$ (b) $\\frac{x^4}{y^4}$ (c) $12p^5q^4$",
          "commonErrors": [
                    "In (b) adding indices instead of subtracting, or keeping $y^{-4}$ in the numerator.",
                    "In (c) forgetting to square the coefficient 2."
          ]
},
        },
        {
          id: "edm10-u5-loi-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "This question tests the laws of indices.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State any two of the laws of indices.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Simplify $\\frac{6a^4b^2 \\times 3a^{-1}b}{2ab^3}$, giving positive indices only.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Simplify $(3m^2n)^2 \\div 9mn^2$.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate $\\left(\\frac{8}{27}\\right)^{\\frac{2}{3}}$ without a calculator.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Index laws",
                              "statement": "$a^m\\times a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(ab)^n=a^nb^n$, $a^0=1$, $a^{-n}=\\frac{1}{a^n}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "State any two correct laws.",
                              "working": "a^m \\times a^n = a^{m+n}, \\quad (a^m)^n = a^{mn}",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Multiply the numerator first.",
                              "working": "6a^4b^2\\times 3a^{-1}b=18a^3b^3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Divide by $2ab^3$: coefficients $18\\div2=9$, $a^{3-1}=a^2$, $b^{3-3}=b^0=1$.",
                              "working": "\\frac{18a^3b^3}{2ab^3}=9a^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "9a^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Expand the square.",
                              "working": "(3m^2n)^2=9m^4n^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Divide by $9mn^2$.",
                              "working": "\\frac{9m^4n^2}{9mn^2}=m^3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the answer.",
                              "working": "m^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Take cube roots: $8^{\\frac{1}{3}}=2$ and $27^{\\frac{1}{3}}=3$, then apply the power $\\frac{2}{3}$: $8^{\\frac{2}{3}}=2^2=4$ and $27^{\\frac{2}{3}}=3^2=9$.",
                              "working": "8^{\\frac{2}{3}}=4,\\ 27^{\\frac{2}{3}}=9\\Rightarrow\\frac{4}{9}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "State the value.",
                              "working": "\\frac{4}{9}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(b) $9a^2$ (c) $m^3$ (d) $\\frac{4}{9}$",
          "commonErrors": [
                    "In (d) computing $\\left(\\frac{8}{27}\\right)^2$ instead of using index $\\frac{2}{3}$.",
                    "Leaving a negative index in the final answer of (b)."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u5-index-laws-notes",
      title: "Index laws — notes",
      summary: "Zero, negative and fractional indices, and the laws for multiplying, dividing and raising powers.",
      sections: [
        { heading: "Key idea", body: "A fractional index is a root then a power: $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$. A negative index reciprocates." },
        { heading: "Perfect powers", body: "Write bases like 8, 27, 32, 64 as powers of 2 or 3 before applying fractional indices." },
        { heading: "Algebraic indices", body: "Apply each law to each base separately; finish with positive indices only." },
      ],
    },
  ],
};
