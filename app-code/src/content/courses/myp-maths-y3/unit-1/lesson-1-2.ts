import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypm3-u1-lesson-1-2",
  code: "1-2",
  title: "Powers, Roots and Standard Form",
  goal: "I CAN apply the laws of indices and calculate with numbers in standard form, including addition and subtraction.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Power of a power", definition: "$(a^m)^n=a^{mn}$ — the indices multiply." },
    { term: "Standard form", definition: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
    { term: "Order of magnitude", definition: "The power of 10 nearest to a quantity; used to compare very large or very small sizes." },
    { term: "Index (power)", definition: "The small number showing how many times the base is multiplied by itself." },
  ],
  concepts: [
    {
      id: "mypm3-u1-index-laws",
      title: "Laws of indices",
      skill: "Use the laws of indices for products, quotients and powers of powers.",
      lesson: {
        sections: [
          {
            heading: "Recap and extension",
            body: "You already know $a^m\\times a^n=a^{m+n}$, $a^m\\div a^n=a^{m-n}$ and $a^0=1$. Two further laws complete the set for positive integer indices.",
          },
          {
            heading: "Power of a power",
            body: "$(a^m)^n$ means the power $a^m$ is used as a factor $n$ times, so the total number of $a$'s is $m\\times n$:\n\n$$\\left(a^m\\right)^n=a^{mn}$$\n\nFor example $(2^3)^2=8^2=64$ and also $2^{3\\times2}=2^6=64$.",
          },
          {
            heading: "Power of a product or quotient",
            body: `The index applies to every factor inside the brackets:

$$(ab)^n=a^nb^n\\qquad\\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}$$

Check: $(2\\times3)^2=6^2=36$ and $2^2\\times3^2=4\\times9=36$.`,
          },
        ],
        keyFormulas: [
          { name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
          { name: "Power of a product", statement: "$(ab)^n=a^nb^n$" },
          { name: "Power of a quotient", statement: "$(a/b)^n=a^n/b^n$" },
        ],
        workedExample: {
          problem: "Simplify $\\left(3^2\\right)^4\\div3^5$.",
          solution: "First $(3^2)^4=3^8$, then $3^8\\div3^5=3^{8-5}=3^3=27$.",
        },
      },
      questions: [
        {
          id: "mypm3-u1-index-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(x^3)^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{7}$" },
              { id: "b", text: "$x^{12}$" },
              { id: "c", text: "$x^{81}$" },
              { id: "d", text: "$x^{64}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
            ],
            steps: [
              { reasoning: "Multiply the indices.", working: "(x^3)^4=x^{3\\times4}=x^{12}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x^{12}$",
            commonErrors: ["Adding the indices to get $x^7$.", "Multiplying to get $x^{64}$ (multiplying the powers' values)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of $(2^4)^2\\div2^6\\times2$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
              { kind: "law", name: "Index laws", statement: "$a^m\\div a^n=a^{m-n}$, $a^m\\times a^n=a^{m+n}$" },
            ],
            steps: [
              { reasoning: "Apply the power-of-a-power law, then combine all indices in order.", working: "(2^4)^2=2^8,\\quad 2^8\\div2^6\\times2^1=2^{8-6+1}=2^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $2^3$.", working: "2^3=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Writing $(2^4)^2=2^6$ by adding indices.", "Forgetting the final $\\times2$ (which is $\\times2^1$)."],
            examinerNote: "M1 for correct index combination, A1 for 8.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Show that $\\left(\\frac{2^6}{2^3}\\right)^2=2^{6}$. Hence work out its value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
            ],
            steps: [
              { reasoning: "Simplify inside the brackets first.", working: "\\frac{2^6}{2^3}=2^{6-3}=2^3", marks: 1, markCode: "M" },
              { reasoning: "Apply the power of a power.", working: "(2^3)^2=2^{3\\times2}=2^6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^6=64", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\left(\\frac{2^6}{2^3}\\right)^2=2^6=64$",
            commonErrors: ["Applying the square to the numerator and denominator separately and then failing to combine.", "Writing $2^{6-3\\times2}$ instead of $(2^3)^2$."],
            examinerNote: "M1 for $2^3$ inside brackets, M1 for $2^6$, A1 for 64.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A culture of bacteria starts with 500 cells. The number of cells is multiplied by $2^3$ every 2 hours.",
          parts: [
            { label: "a", prompt: "Write $2^3$ as an ordinary number and state what it means for the culture.", marks: 2 },
            { label: "b", prompt: "After 4 hours the population is $500\\times(2^3)^2$. Work out the population as an ordinary number.", marks: 2 },
            { label: "c", prompt: "Simplify $\\left(5^2\\right)^3\\div5^4$ as a power of 5, and work out its value.", marks: 2 },
            { label: "d", prompt: "Explain why $(3\\times4)^2=3^2\\times4^2$ using the index laws.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(b) Population", answer: 32000 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
              { kind: "law", name: "Power of a product", statement: "$(ab)^n=a^nb^n$" },
              { kind: "principle", name: "Interpreting indices in context", statement: "Repeated multiplication by a fixed factor is growth; $(2^3)^2$ is two applications of the factor." },
            ],
            steps: [
              { part: "a", reasoning: "$2^3=8$; the population is multiplied by 8 every 2 hours.", working: "2^3=8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the meaning.", working: "8\\text{-fold increase every 2 hours}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Apply the power-of-a-power law: $(2^3)^2=2^6=64$.", working: "500\\times2^6=500\\times64", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply.", working: "32000", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Combine indices.", working: "(5^2)^3=5^6,\\quad 6-4=2\\Rightarrow5^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate $5^2$.", working: "25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$(3\\times4)^2$ means $(3\\times4)\\times(3\\times4)$; regrouping gives $(3\\times3)\\times(4\\times4)=3^2\\times4^2$.", working: "(3\\times4)^2=3^2\\times4^2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State the general law.", working: "(ab)^n=a^nb^n", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $8$, population multiplied by 8 every 2 hours (b) $32000$ (c) $5^2=25$ (d) $(3\\times4)^2$ expands to two 3s and two 4s, i.e. $3^2\\times4^2$",
            commonErrors: ["In (b), computing $(2^3)^2$ as $2^{3+2}=2^5$.", "In (c), forgetting to evaluate the power of a power before dividing."],
            examinerNote: "M1 A1 per part as indicated.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(x^3)^5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{15}$" },
              { id: "b", text: "$x^{125}$" },
              { id: "c", text: "$x^8$" },
              { id: "d", text: "$x^{240}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n = a^{mn}$." },
            ],
            steps: [
              { reasoning: "Multiply the indices 3 and 5.", working: "x^{3 \\times 5} = x^{15}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^{15}$",
            commonErrors: ["Adding the indices to get $x^8$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(2x^2)^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6x^6$" },
              { id: "b", text: "$8x^5$" },
              { id: "c", text: "$8x^6$" },
              { id: "d", text: "$2x^6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a product", statement: "$(ab)^n = a^n b^n$." },
            ],
            steps: [
              { reasoning: "Cube both the coefficient and the power of x.", working: "2^3 x^{2 \\times 3} = 8x^6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $8x^6$",
            commonErrors: ["Multiplying the coefficient by 3 instead of cubing it."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Simplify $x^7 \\times x^2 \\div x^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x$" },
              { id: "b", text: "$x^9$" },
              { id: "c", text: "$x^5$" },
              { id: "d", text: "$x^{11}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "Add indices for products and subtract for quotients with the same base." },
            ],
            steps: [
              { reasoning: "Combine indices in order: 7 + 2 - 4 = 5.", working: "x^{7+2-4} = x^5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $x^5$",
            commonErrors: ["Multiplying the indices instead of adding/subtracting."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $(3^2)^3 \\div 3^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$81$" },
              { id: "d", text: "$27$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n = a^{mn}$." },
              { kind: "law", name: "Dividing powers", statement: "$a^m \\div a^n = a^{m-n}$." },
            ],
            steps: [
              { reasoning: "First $(3^2)^3 = 3^6$, then $3^6 \\div 3^4 = 3^2 = 9$.", working: "3^2 = 9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: ["Adding indices inside the power of a power."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $2^4 \\times 2^3 \\div 2^5$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "Same-base products add indices and quotients subtract indices." },
            ],
            steps: [
              { reasoning: "Combine the indices: 4 + 3 - 5 = 2.", working: "2^{4+3-5} = 2^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power.", working: "2^2 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Computing each power separately and losing the index laws."],
            examinerNote: "M1 for combined index, A1 for 4.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(5^3)^2 \\div 5^4$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 25 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n = a^{mn}$." },
              { kind: "law", name: "Dividing powers", statement: "$a^m \\div a^n = a^{m-n}$." },
            ],
            steps: [
              { reasoning: "Apply the power-of-a-power law then subtract indices.", working: "(5^3)^2 = 5^6,\\ 5^6 \\div 5^4 = 5^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $5^2$.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25$",
            commonErrors: ["Writing $(5^3)^2 = 5^5$."],
            examinerNote: "M1 for index work, A1 for 25.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $7^6 \\div 7^3 \\times 7^0$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 343 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "Same-base products add indices and quotients subtract indices; $a^0 = 1$." },
            ],
            steps: [
              { reasoning: "Combine indices including the zero power.", working: "7^{6-3+0} = 7^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $7^3$.", working: "343", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$343$",
            commonErrors: ["Treating $7^0$ as 0 instead of 1."],
            examinerNote: "M1 for $7^3$, A1 for 343.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Simplify $(4a^2b)^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8a^4b^2$" },
              { id: "b", text: "$4a^4b^2$" },
              { id: "c", text: "$16a^4b^2$" },
              { id: "d", text: "$16a^2b$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a product", statement: "$(ab)^n = a^n b^n$ applies to every factor inside the brackets." },
            ],
            steps: [
              { reasoning: "Square the coefficient, $a^2$ and $b$: $4^2 a^{2 \\times 2} b^2$.", working: "16a^4b^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $16a^4b^2$",
            commonErrors: ["Doubling the coefficient instead of squaring it."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why $(x^2)^3$ and $(x^3)^2$ are equal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n = a^{mn}$, and multiplication of indices is commutative." },
            ],
            steps: [
              { reasoning: "Apply the law to each expression.", working: "(x^2)^3 = x^{2 \\times 3} = x^6,\\ (x^3)^2 = x^{3 \\times 2} = x^6", marks: 1, markCode: "M" },
              { reasoning: "Both give $x^6$ because $2 \\times 3 = 3 \\times 2$.", working: "x^6 = x^6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Both equal $x^6$ because the indices multiply in either order.",
            commonErrors: ["Adding the indices instead of multiplying them."],
            examinerNote: "M1 for both simplifications, R1 for commutativity explanation.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Work out $(2^5)^2 \\div 2^7 \\times 2^2$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 32 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n = a^{mn}$." },
              { kind: "law", name: "Index laws", statement: "Same-base quotients subtract indices and products add indices." },
            ],
            steps: [
              { reasoning: "Combine all indices in order: $(2^5)^2 = 2^{10}$, then $10 - 7 + 2 = 5$.", working: "2^5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $2^5$.", working: "32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32$",
            commonErrors: ["Applying the outer power to the division incorrectly."],
            examinerNote: "M1 for $2^5$, A1 for 32.",
          },
        },
        {
          id: "mypm3-u1-index-laws-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out $(3^4 \\div 3^2)^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$27$" },
              { id: "b", text: "$19683$" },
              { id: "c", text: "$81$" },
              { id: "d", text: "$729$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "Simplify inside brackets before applying the outer power." },
            ],
            steps: [
              { reasoning: "Inside: $3^4 \\div 3^2 = 3^2$; then $(3^2)^3 = 3^6 = 729$.", working: "729", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $729$",
            commonErrors: ["Cubing 3^4 and 3^2 separately before dividing."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u1-index-laws-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A machine multiplies a signal by $2^2$ in the first stage and again by $2^2$ in the second stage. Use index laws to find the total multiplier, and explain why you do not need to compute $4 \\times 4$ separately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "Same-base products add indices: $a^m \\times a^n = a^{m+n}$." },
              { kind: "principle", name: "Repeated operation", statement: "Two identical stages are a power of the stage factor." },
            ],
            steps: [
              { reasoning: "Each stage multiplies by $2^2$, so two stages multiply by $2^2 \\times 2^2$.", working: "2^2 \\times 2^2", marks: 1, markCode: "M" },
              { reasoning: "Add the indices.", working: "2^{2+2} = 2^4 = 16", marks: 1, markCode: "M" },
              { reasoning: "Explain that the index law gives the same result as repeated multiplication.", working: "16 total multiplier", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Total multiplier is $2^4 = 16$.",
            commonErrors: ["Multiplying the indices to get $2^4$ by mistake? Here the correct method is adding indices; $2^2 \\times 2^2 = 2^4$.", "Computing only one stage."],
            examinerNote: "M1 for product of powers, M1 for $2^4=16$, R1 for explanation.",
          },
        },
      ],
    },
    {
      id: "mypm3-u1-standard-form",
      title: "Standard form calculations",
      skill: "Add, subtract, multiply and divide numbers in standard form, and use orders of magnitude.",
      lesson: {
        sections: [
          {
            heading: "Multiplying and dividing",
            body: `For multiplication and division, operate on the front numbers and the powers of 10 separately, then adjust so the front number satisfies $1\\le a<10$.

$(2.5\\times10^4)\\times(4\\times10^3)=10\\times10^7=1.0\\times10^8$.

$\\dfrac{6\\times10^9}{3\\times10^4}=2\\times10^5$.`,
          },
          {
            heading: "Adding and subtracting",
            body: `You cannot simply add the front numbers and powers of 10 when the powers differ. Rewrite both numbers with the **same** power of 10, then add or subtract the front numbers.

$3.2\\times10^5+4.5\\times10^4=3.2\\times10^5+0.45\\times10^5=3.65\\times10^5$.`,
          },
          {
            heading: "Orders of magnitude",
            body: "The **order of magnitude** of a number is the power of 10 closest to it. It gives a quick estimate of size: $7\\times10^6$ has order of magnitude $10^6$ (since 7 rounds up? — more precisely, compare with $\\sqrt{10}\\times10^6$; in practice the power of 10 in standard form is used). It is useful for sanity-checking answers to very large or very small calculations.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a\\times10^n$, $1\\le a<10$, $n\\in\\mathbb{Z}$" },
          { name: "Addition rule", statement: "Rewrite to a common power of 10 before adding or subtracting" },
        ],
        workedExample: {
          problem: "Work out $2.4\\times10^3+5.6\\times10^2$, giving the answer in standard form.",
          solution: "$5.6\\times10^2=0.56\\times10^3$, so the sum is $(2.4+0.56)\\times10^3=2.96\\times10^3$.",
        },
      },
      questions: [
        {
          id: "mypm3-u1-standard-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $3\\times10^4+5\\times10^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\times10^4$" },
              { id: "b", text: "$8\\times10^0$" },
              { id: "c", text: "$8\\times10^8$" },
              { id: "d", text: "$15\\times10^4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "With the same power of 10, add the front numbers and keep the power." },
            ],
            steps: [
              { reasoning: "Same power of 10, so add fronts.", working: "(3+5)\\times10^4=8\\times10^4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8\\times10^4$",
            commonErrors: ["Multiplying the powers to get $10^8$.", "Adding the powers, $10^{4+4}$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $4.2\\times10^5-1.5\\times10^5$. Give your answer in standard form.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 2.7 }, { label: "$n$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtracting in standard form", statement: "With a common power of 10, subtract the front numbers." },
            ],
            steps: [
              { reasoning: "Same power, subtract fronts.", working: "(4.2-1.5)\\times10^5=2.7\\times10^5", marks: 1, markCode: "M" },
              { reasoning: "Check standard form conditions: $1\\le2.7<10$.", working: "2.7\\times10^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.7\\times10^5$",
            commonErrors: ["Subtracting the powers: $10^{5-5}=10^0$.", "Writing $27\\times10^4$ and stopping."],
            examinerNote: "M1 for $2.7\\times10^5$ seen, A1 for correct form.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The mass of the Earth is $5.97\\times10^{24}$ kg and the mass of the Moon is $7.35\\times10^{22}$ kg. Work out the difference in their masses, giving your answer in standard form.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 5.8965, tolerance: 0.001 }, { label: "$n$", answer: 24 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtracting in standard form", statement: "Rewrite to a common power of 10 before subtracting." },
            ],
            steps: [
              { reasoning: "Rewrite the Moon's mass with power $10^{24}$.", working: "7.35\\times10^{22}=0.0735\\times10^{24}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the fronts.", working: "(5.97-0.0735)\\times10^{24}=5.8965\\times10^{24}", marks: 1, markCode: "M" },
              { reasoning: "State in standard form.", working: "5.8965\\times10^{24}\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.8965\\times10^{24}$ kg",
            commonErrors: ["Subtracting $7.35$ from $5.97$ directly without aligning powers.", "Sign error giving a negative mass."],
            examinerNote: "M1 for common power, M1 for subtraction, A1 for answer. Accept $5.90\\times10^{24}$ if 3 s.f. requested — here exact is fine.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school is fundraising. The total raised in 2023 was $2.4\\times10^4$ euros and in 2024 it was $3.6\\times10^4$ euros. Over the two years the school spent $4.5\\times10^4$ euros on equipment.",
          parts: [
            { label: "a", prompt: "Work out the total amount raised over the two years, in standard form.", marks: 2 },
            { label: "b", prompt: "Write the total raised over the two years as an ordinary number.", marks: 1 },
            { label: "c", prompt: "Work out how much more was raised than was spent, giving the answer in standard form.", marks: 2 },
            { label: "d", prompt: "The head teacher says the amount raised in 2024 was \"1.5 times the 2023 amount\". Verify this claim and comment on whether the fundraising is sustainable if spending continues at the same rate. (Criterion D)", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $a$", answer: 6, tolerance: 0.001 },
              { label: "(a) $n$", answer: 4 },
              { label: "(b) Total raised", answer: 60000 },
              { label: "(c) $a$", answer: 1.5, tolerance: 0.001 },
              { label: "(c) $n$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Standard form arithmetic", statement: "Common power of 10 for addition/subtraction; adjust front for multiplication/division." },
              { kind: "principle", name: "Real-life interpretation", statement: "Compare quantities in the same units and judge against a stated rate." },
            ],
            steps: [
              { part: "a", reasoning: "Same power, add fronts.", working: "(2.4+3.6)\\times10^4=6.0\\times10^4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State in standard form.", working: "6.0\\times10^4\\text{ euros}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert.", working: "60000\\text{ euros}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract with common power.", working: "6.0\\times10^4-4.5\\times10^4=1.5\\times10^4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State answer.", working: "1.5\\times10^4\\text{ euros}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check the ratio.", working: "\\frac{3.6\\times10^4}{2.4\\times10^4}=1.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comment: the claim is correct; however spending $4.5\\times10^4$ exceeds the two-year total raised $6.0\\times10^4$? No — it is less, but a single year of raising ($3.6\\times10^4$) does not cover one year's spending, so reserves or further income are needed.", working: "3.6\\times10^4<4.5\\times10^4", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude sustainability depends on continued growth or reserves.", working: "\\text{not sustainable without reserves or growth}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6.0\\times10^4$ euros (b) $60000$ euros (c) $1.5\\times10^4$ euros (d) claim verified; one year's raising does not cover one year's spending, so reserves or growth are needed",
            commonErrors: ["In (c), subtracting $4.5$ from $6.0$ but keeping $10^4$ — correct here, but in general powers must match.", "In (d), comparing $4.5\\times10^4$ with the 2024 amount only instead of the two-year total."],
            examinerNote: "R1 for verifying the ratio, R1 for a justified sustainability comment. Accept any reasonable interpretation.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $3 \\times 10^4 + 5 \\times 10^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8 \\times 10^4$" },
              { id: "b", text: "$8 \\times 10^8$" },
              { id: "c", text: "$8 \\times 10^0$" },
              { id: "d", text: "$15 \\times 10^4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "With the same power of 10, add the front numbers and keep the power." },
            ],
            steps: [
              { reasoning: "Same power of 10, so add the front numbers only.", working: "(3 + 5) \\times 10^4 = 8 \\times 10^4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8 \\times 10^4$",
            commonErrors: ["Multiplying the powers of 10 to get $10^8$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $7 \\times 10^5 - 2 \\times 10^5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14 \\times 10^5$" },
              { id: "b", text: "$5 \\times 10^0$" },
              { id: "c", text: "$9 \\times 10^5$" },
              { id: "d", text: "$5 \\times 10^5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtracting in standard form", statement: "With a common power of 10, subtract the front numbers." },
            ],
            steps: [
              { reasoning: "Same power, subtract the front numbers.", working: "(7 - 2) \\times 10^5 = 5 \\times 10^5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $5 \\times 10^5$",
            commonErrors: ["Adding instead of subtracting the fronts."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $(2 \\times 10^3)(4 \\times 10^2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8 \\times 10^6$" },
              { id: "b", text: "$8 \\times 10^5$" },
              { id: "c", text: "$6 \\times 10^5$" },
              { id: "d", text: "$8 \\times 10^1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplying in standard form", statement: "Multiply the front numbers and add the powers of 10." },
            ],
            steps: [
              { reasoning: "Fronts: 2 × 4 = 8; powers: 10^3 × 10^2 = 10^5.", working: "8 \\times 10^5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $8 \\times 10^5$",
            commonErrors: ["Multiplying the powers of 10 instead of adding the indices."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $(8 \\times 10^6) \\div (2 \\times 10^2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4 \\times 10^3$" },
              { id: "b", text: "$4 \\times 10^4$" },
              { id: "c", text: "$4 \\times 10^8$" },
              { id: "d", text: "$6 \\times 10^4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dividing in standard form", statement: "Divide the front numbers and subtract the powers of 10." },
            ],
            steps: [
              { reasoning: "Fronts: 8 ÷ 2 = 4; powers: 10^6 ÷ 10^2 = 10^4.", working: "4 \\times 10^4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4 \\times 10^4$",
            commonErrors: ["Adding the powers instead of subtracting them."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $4.5 \\times 10^4 + 2.5 \\times 10^3$. Give the answer in standard form as $a \\times 10^n$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.75 }, { label: "n", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "Rewrite to a common power of 10 before adding." },
            ],
            steps: [
              { reasoning: "Rewrite $2.5 \\times 10^3$ as $0.25 \\times 10^4$.", working: "0.25 \\times 10^4", marks: 1, markCode: "M" },
              { reasoning: "Add the fronts and check $1 \\le a < 10$.", working: "a = 4.75,\\ n = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.75 \\times 10^4$",
            commonErrors: ["Adding 4.5 and 2.5 while ignoring the different powers."],
            examinerNote: "M1 for common power, A1 for 4.75 × 10^4.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $9 \\times 10^3 - 4 \\times 10^2$. Give the answer in standard form as $a \\times 10^n$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8.6 }, { label: "n", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtracting in standard form", statement: "Use a common power of 10 before subtracting." },
            ],
            steps: [
              { reasoning: "Rewrite $4 \\times 10^2$ as $0.4 \\times 10^3$.", working: "0.4 \\times 10^3", marks: 1, markCode: "M" },
              { reasoning: "Subtract the fronts.", working: "(9 - 0.4) \\times 10^3 = 8.6 \\times 10^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.6 \\times 10^3$",
            commonErrors: ["Subtracting 4 from 9 to get 5 × 10^3."],
            examinerNote: "M1 for common power, A1 for 8.6 × 10^3.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(3 \\times 10^4)(5 \\times 10^2)$, giving the answer in standard form as $a \\times 10^n$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }, { label: "n", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplying in standard form", statement: "Multiply fronts and add powers, then adjust so $1 \\le a < 10$." },
            ],
            steps: [
              { reasoning: "Multiply fronts and powers: 3 × 5 = 15 and 10^4 × 10^2 = 10^6.", working: "15 \\times 10^6", marks: 1, markCode: "M" },
              { reasoning: "Convert 15 × 10^6 to standard form.", working: "a = 1.5,\\ n = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5 \\times 10^7$",
            commonErrors: ["Leaving the answer as $15 \\times 10^6$, which is not standard form."],
            examinerNote: "M1 for $15 \\times 10^6$, A1 for standard form.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is written correctly in standard form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.5 \\times 10^5$" },
              { id: "b", text: "$15 \\times 10^4$" },
              { id: "c", text: "$0.15 \\times 10^6$" },
              { id: "d", text: "$150 \\times 10^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a \\times 10^n$ with $1 \\le a < 10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Only $1.5 \\times 10^5$ has a front number between 1 and 10.", working: "1 \\le 1.5 < 10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1.5 \\times 10^5$",
            commonErrors: ["Thinking any power of 10 makes a number standard form."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the order of magnitude of $7.3 \\times 10^6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7.3 \\times 10^6$" },
              { id: "b", text: "$10^6$" },
              { id: "c", text: "$10^7$" },
              { id: "d", text: "$10^5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Order of magnitude", statement: "The power of 10 used in the standard form of a number." },
            ],
            steps: [
              { reasoning: "The number is already in standard form with power $10^6$.", working: "10^6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $10^6$",
            commonErrors: ["Choosing the whole number instead of the power of 10."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-standard-form-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The distance from the Earth to the Moon is about $3.84 \\times 10^8$ m and to the Sun is about $1.5 \\times 10^{11}$ m. Find how much farther the Sun is than the Moon, giving the answer in standard form as $a \\times 10^n$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.49616, tolerance: 0.001 }, { label: "n", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtracting in standard form", statement: "Align powers of 10 before subtracting very different quantities." },
            ],
            steps: [
              { reasoning: "Rewrite the Moon distance with power $10^{11}$: $0.00384 \\times 10^{11}$.", working: "1.5 \\times 10^{11} - 0.00384 \\times 10^{11}", marks: 1, markCode: "M" },
              { reasoning: "Subtract and state in standard form.", working: "a \\approx 1.49616,\\ n = 11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 1.496 \\times 10^{11}$ m farther",
            commonErrors: ["Subtracting 3.84 from 1.5 without aligning the powers."],
            examinerNote: "Accept $1.50 \\times 10^{11}$ m if rounding to 3 s.f.; M1 for alignment, A1 for reasonable standard form.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain, with an example, why $3 \\times 10^4 + 4 \\times 10^2$ cannot be found by adding 3 and 4 directly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "The powers of 10 must be equal before the front numbers can be added." },
            ],
            steps: [
              { reasoning: "Point out the different powers: $10^4$ and $10^2$.", working: "powers differ", marks: 1, markCode: "R" },
              { reasoning: "Rewrite with a common power: $4 \\times 10^2 = 0.04 \\times 10^4$.", working: "0.04 \\times 10^4", marks: 1, markCode: "M" },
              { reasoning: "Add correctly: $(3 + 0.04) \\times 10^4 = 3.04 \\times 10^4$.", working: "3.04 \\times 10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The powers differ, so rewrite first: $3 \\times 10^4 + 4 \\times 10^2 = 3.04 \\times 10^4$.",
            commonErrors: ["Adding the front numbers and keeping $10^4$ to get $7 \\times 10^4$."],
            examinerNote: "R1 for the reason, M1 for rewriting, A1 for correct sum.",
          },
        },
        {
          id: "mypm3-u1-standard-form-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A charity says it raised $2.5 \\times 10^5$ euros in 2023 and $4.0 \\times 10^5$ euros in 2024, then spent $3.2 \\times 10^5$ euros. Find the amount left in standard form and comment on whether standard form helps compare the figures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Standard form arithmetic", statement: "Add raised amounts, then subtract spending using a common power of 10." },
            ],
            steps: [
              { reasoning: "Total raised: $(2.5 + 4.0) \\times 10^5 = 6.5 \\times 10^5$.", working: "6.5 \\times 10^5", marks: 1, markCode: "M" },
              { reasoning: "Subtract spending: $(6.5 - 3.2) \\times 10^5 = 3.3 \\times 10^5$ euros.", working: "3.3 \\times 10^5 euros", marks: 1, markCode: "A" },
              { reasoning: "Comment: standard form makes the powers of 10 explicit, so comparisons and subtraction are clearer.", working: "clear comparison", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$3.3 \\times 10^5$ euros left; standard form makes the magnitudes easy to compare.",
            commonErrors: ["Subtracting spending from only the 2024 amount."],
            examinerNote: "M1 for total, A1 for result, R1 for comment.",
          },
        },
      ],
    },
  ],
};
