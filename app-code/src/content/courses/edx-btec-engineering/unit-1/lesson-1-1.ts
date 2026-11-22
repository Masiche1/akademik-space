import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxbteceng-u1-lesson-1-1",
  code: "1-1",
  title: "Engineering Data and Calculations",
  goal: "I CAN handle engineering quantities using SI units, significant figures, standard form and correct use of calculators.",
  standards: ["BTEC L3 National Engineering — Unit 1: Engineering Principles"],
  vocabulary: [
    {
      term: "SI base unit",
      definition:
        "One of the seven fundamental units of the International System of Units (metre, kilogram, second, ampere, kelvin, mole, candela) from which all other units derive.",
    },
    {
      term: "Significant figure",
      definition:
        "A digit that contributes to the precision of a measured or calculated value; leading zeros never count but trailing zeros after a decimal point do.",
    },
    {
      term: "Standard form",
      definition:
        "A number written as $a \\times 10^n$ where $1 \\le |a| < 10$, used for very large or very small engineering quantities.",
    },
    {
      term: "Order of magnitude",
      definition:
        "The power of ten closest to a quantity, giving a quick estimate of its scale.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u1-1-si",
      title: "SI Units and Prefixes",
      skill:
        "Convert engineering quantities between SI base units and prefixed units.",
      lesson: {
        sections: [
          {
            heading: "Why SI units matter",
            body: "Engineering is international: a component designed in millimetres must fit a part manufactured in inches nowhere. The SI system removes ambiguity — a force in newtons, a stress in pascals, a current in amperes. Always convert to SI before substituting into formulae.\n\nPrefixes scale base units: milli ($10^{-3}$), centi ($10^{-2}$), kilo ($10^{3}$), mega ($10^{6}$). A common trap: $1\\ \\text{mm} = 10^{-3}\\ \\text{m}$ but $1\\ \\text{mm}^3 = 10^{-9}\\ \\text{m}^3$ — cube the prefix when the unit is cubed.",
          },
          {
            heading: "Derived units",
            body: "Engineering formulae often produce derived units: stress $= \\frac{\\text{force}}{\\text{area}}$ gives $\\text{N}/\\text{m}^2 = \\text{Pa}$; power $= \\text{force} \\times \\text{velocity}$ gives watts. Checking the derived unit is a free error-check: if your stress answer comes out in newtons, something is wrong.",
          },
        ],
        keyFormulas: [
          {
            name: "Stress",
            statement:
              "$\\sigma = \\dfrac{F}{A}$, unit $\\text{Pa}$ ($\\text{N}/\\text{m}^2$)",
          },
          {
            name: "Pressure",
            statement: "$p = \\dfrac{F}{A}$, unit $\\text{Pa}$",
          },
          {
            name: "Power",
            statement:
              "$P = \\dfrac{W}{t} = Fv$, unit $\\text{W}$ ($\\text{J}/\\text{s}$)",
          },
        ],
        workedExample: {
          problem:
            "A force of $2.5\\ \\text{kN}$ acts on an area of $500\\ \\text{mm}^2$. Find the stress in pascals.",
          solution:
            "Convert: $F = 2500\\ \\text{N}$, $A = 500 \\times 10^{-6}\\ \\text{m}^2 = 5 \\times 10^{-4}\\ \\text{m}^2$.\n\n$\\sigma = \\frac{2500}{5 \\times 10^{-4}} = 5 \\times 10^{6}\\ \\text{Pa} = 5\\ \\text{MPa}$.\n\nCheck the unit: N/m$^2$ = Pa. Correct.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u1-si-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shaft diameter is given as $25\\ \\text{mm}$. What is this in metres?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$2.5 \\times 10^{-4}\\ \\text{m}$",
              },
              {
                id: "b",
                text: "$2.5 \\times 10^{-2}\\ \\text{m}$",
              },
              {
                id: "c",
                text: "$0.25\\ \\text{m}$",
              },
              {
                id: "d",
                text: "$2.5 \\times 10^{-3}\\ \\text{m}$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "1 mm = m",
                statement: "1 mm = $10^{-3}$ m",
              },
            ],
            steps: [
              {
                reasoning:
                  "$25 \\times 10^{-3} = 2.5 \\times 10^{-2} = 0.025$ m",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "0.025 m",
            commonErrors: [
              "Treating milli as $10^{-2}$ (confusing centi and milli)",
              "Writing 0.25 m — a factor of 10 too large",
            ],
            examinerNote: "Check powers of ten carefully.",
          },
        },
        {
          id: "edxbteceng-u1-si-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert $450\\ \\text{kN}$ into newtons, and $2500\\ \\text{mm}^2$ into square metres. Show both conversions.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiply by the prefix factor; for",
                statement:
                  "Multiply by the prefix factor; for mm$^2$ square the $10^{-3}$ factor",
              },
            ],
            steps: [
              {
                reasoning: "$450 \\times 10^3 = 4.5 \\times 10^5$ N",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$2500 \\times 10^{-6} = 2.5 \\times 10^{-3}$ m$^2$ (mm$^2$ needs $10^{-6}$)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers in standard SI units",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4.5 \\times 10^5$ N; $2.5 \\times 10^{-3}$ m$^2$",
            commonErrors: [
              "Using $10^{-3}$ for mm$^2$ instead of $10^{-6}$",
              "Leaving answers in kN or mm$^2$",
            ],
            examinerNote: "Squared/cubed units square/cube the prefix.",
          },
        },
        {
          id: "edxbteceng-u1-si-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A motor delivers $1.5\\ \\text{kW}$ for $3$ minutes. Calculate the energy transferred in joules. Show unit conversions and check the final unit is joules.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy ; ;",
                statement:
                  "Energy $E = Pt$; $1\\ \\text{kW} = 1000\\ \\text{W}$; $1\\ \\text{min} = 60\\ \\text{s}$",
              },
            ],
            steps: [
              {
                reasoning: "$P = 1500$ W, $t = 180$ s",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 1500 \\times 180$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 270\\,000$ J",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Unit check: W $\\times$ s = J — answer is in joules as required",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "270 000 J",
            commonErrors: [
              "Forgetting to convert minutes to seconds",
              "Answering in kJ without converting",
            ],
            examinerNote: "Derived-unit check earns the reasoning mark.",
          },
        },
        {
          id: "edxbteceng-u1-si-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A steel bracket has mass $2.4\\ \\text{kg}$, dimensions $120 \\times 80 \\times 10\\ \\text{mm}$, and is loaded with $900\\ \\text{N}$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the volume in $\\text{m}^3$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the density in $\\text{kg}/\\text{m}^3$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The load acts on the $120 \\times 80\\ \\text{mm}$ face. Calculate the stress in MPa.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Density ; stress",
                statement:
                  "Density $\\rho = \\frac{m}{V}$; stress $\\sigma = \\frac{F}{A}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert dimensions to metres",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$V = 0.12 \\times 0.08 \\times 0.01 = 9.6 \\times 10^{-5}$ m$^3$",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$\\rho = \\frac{2.4}{9.6 \\times 10^{-5}}$",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "$\\rho = 2.5 \\times 10^4$ kg/m$^3$ (consistent with steel)",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$A = 0.12 \\times 0.08 = 9.6 \\times 10^{-3}$ m$^2$",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "$\\sigma = \\frac{900}{9.6 \\times 10^{-3}} = 93\\,750$ Pa",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$93.75$ MPa",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) $9.6 \\times 10^{-5}$ m$^3$ (b) $2.5 \\times 10^4$ kg/m$^3$ (c) $93.75$ MPa",
            commonErrors: [
              "Using mm throughout without converting",
              "Using the wrong face area in part (c)",
            ],
            examinerNote: "Each part builds on unit conversion from part (a).",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u1-sig",
      title: "Significant Figures and Standard Form",
      skill: "Round and express engineering results to appropriate precision.",
      lesson: {
        sections: [
          {
            heading: "Significant figures",
            body: "Measured values carry uncertainty, so calculated results should be reported to a sensible number of significant figures — usually matching the least precise input. Engineering drawings specify dimensions to a tolerance; reporting $25.000\\ \\text{mm}$ implies a precision you do not have.\n\nRules: leading zeros never count ($0.0045$ has 2 s.f.); zeros between non-zero digits count ($405$ has 3); trailing zeros after a decimal point count ($4.50$ has 3, but $450$ is ambiguous — write $4.50 \\times 10^2$ to be clear).",
          },
          {
            heading: "Standard form and estimation",
            body: "Engineering quantities span many orders of magnitude — microfarads ($10^{-6}$ F) to gigawatts ($10^9$ W). Standard form $a \\times 10^n$ keeps them readable and makes multiplication and division easy: multiply the mantissas, add the powers for multiplication, subtract for division.\n\nEstimation is a powerful check: $2.0 \\times 10^6 \\times 3.0 \\times 10^{-3} = 6.0 \\times 10^3$. If your calculator answer differs by orders of magnitude, you have made an exponent slip.",
          },
        ],
        keyFormulas: [
          {
            name: "Standard form product",
            statement:
              "$(a \\times 10^m)(b \\times 10^n) = ab \\times 10^{m+n}$",
          },
          {
            name: "Standard form quotient",
            statement:
              "$\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$",
          },
          {
            name: "Rounding to n s.f.",
            statement:
              "Keep n significant digits; round the last kept digit using the next digit.",
          },
        ],
        workedExample: {
          problem:
            "Calculate $\\frac{(2.5 \\times 10^4)(8.0 \\times 10^{-2})}{4.0 \\times 10^3}$, giving the answer to 2 significant figures.",
          solution:
            "Mantissa: $2.5 \\times 8.0 \\div 4.0 = 5.0$.\n\nExponent: $10^{4 + (-2) - 3} = 10^{-1}$.\n\nResult: $5.0 \\times 10^{-1} = 0.50$ (2 s.f.).",
        },
      },
      questions: [
        {
          id: "edxbteceng-u1-sig-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many significant figures are in $0.004050$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "6",
              },
              {
                id: "b",
                text: "4",
              },
              {
                id: "c",
                text: "3",
              },
              {
                id: "d",
                text: "5",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leading zeros never count; trailing zeros",
                statement:
                  "Leading zeros never count; trailing zeros after a decimal point do",
              },
            ],
            steps: [
              {
                reasoning: "Digits 4, 0, 5, 0 are significant → 4 s.f.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
            commonErrors: [
              "Counting the leading zeros",
              "Ignoring the trailing zero after the decimal point",
            ],
            examinerNote:
              "The trailing zero matters because it follows a decimal point.",
          },
        },
        {
          id: "edxbteceng-u1-sig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Round $3.8472 \\times 10^5$ to 3 significant figures, and express $0.0000623$ in standard form.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Round at the nth significant digit;",
                statement:
                  "Round at the nth significant digit; standard form needs $1 \\le |a| < 10$",
              },
            ],
            steps: [
              {
                reasoning: "$3.8472 \\to 3.85$ at 3 s.f.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Move decimal 5 places: $6.23 \\times 10^{-5}$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponent sign negative because the number is small",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3.85 \\times 10^5$; $6.23 \\times 10^{-5}$",
            commonErrors: [
              "$3.84 \\times 10^5$ — rounding error",
              "Positive exponent for a small number",
            ],
            examinerNote:
              "Check the exponent sign: small numbers get negative powers.",
          },
        },
        {
          id: "edxbteceng-u1-sig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sensor reads current as $2.4 \\times 10^{-3}$ A and voltage as $4.8 \\times 10^1$ V. Calculate the power $P = VI$ in watts, giving your answer to 2 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 0.12,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "; multiply mantissas, add exponents in",
                statement:
                  "$P = VI$; multiply mantissas, add exponents in standard form",
              },
            ],
            steps: [
              {
                reasoning: "$(2.4 \\times 4.8) = 11.52$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exponent: $-3 + 1 = -2$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$11.52 \\times 10^{-2} = 0.1152$ W",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "2 s.f.: $0.12$ W",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.12 W",
            commonErrors: [
              "Subtracting exponents instead of adding",
              "Reporting 0.1152 without rounding to 2 s.f.",
            ],
            examinerNote: "Inputs had 2 s.f., so the answer should too.",
          },
        },
        {
          id: "edxbteceng-u1-sig-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: 'An engineering report states: "The bridge deck deflects by $3.2\\ \\text{mm}$ under load. The allowable deflection is $L/250$ where $L = 12.5\\ \\text{m}$."',
          parts: [
            {
              label: "a",
              prompt: "Convert the span $L$ to millimetres.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Calculate the allowable deflection in millimetres.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State whether the measured deflection is acceptable and justify your answer.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If the report quotes the deflection as $0.00320\\ \\text{m}$, explain why the trailing zero is significant.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deflection limit ; comparison requires the",
                statement:
                  "Deflection limit $= L/250$; comparison requires the same units",
              },
            ],
            steps: [
              {
                reasoning: "$L = 12.5 \\times 1000 = 12\\,500$ mm",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$12\\,500 \\div 250$",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$= 50$ mm",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Both converted to mm before comparing",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "$3.2 < 50$ so acceptable",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Identifies the zero follows the decimal point",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning:
                  "Trailing zeros after a decimal point are significant",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "The zero conveys precision to $10^{-5}$ m / shows measurement certainty",
                marks: 1,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) $12\\,500$ mm (b) $50$ mm (c) acceptable (d) zero after decimal point is significant",
            commonErrors: [
              "Comparing 3.2 mm with 50 m without converting",
              "Claiming trailing zeros are never significant",
            ],
            examinerNote:
              "Parts (a)-(c) test unit consistency; (d) tests s.f. rules.",
          },
        },
      ],
    },
  ],
};
