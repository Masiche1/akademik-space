import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypm2-u1-lesson-1-1",
  code: "1-1",
  title: "Powers, Roots and Standard Form",
  goal: "I CAN use the laws of indices, and write and calculate with very large and very small numbers in standard form.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Index (power)", definition: "The small number written above a base that shows how many times the base is multiplied by itself. In $2^5$ the index is 5." },
    { term: "Base", definition: "The number being multiplied by itself. In $2^5$ the base is 2." },
    { term: "Index laws", definition: "Rules for simplifying powers with the same base: $a^m\\times a^n=a^{m+n}$ and $a^m\\div a^n=a^{m-n}$." },
    { term: "Standard form", definition: "A number written as $a\\times10^n$ where $1\\le a<10$ and $n$ is an integer." },
    { term: "Order of magnitude", definition: "The power of 10 that a number is closest to; it tells you roughly how big or small a quantity is." },
  ],
  concepts: [
    {
      id: "mypm2-u1-index-laws",
      title: "Index notation and the laws of indices",
      skill: "Use index notation, the laws for multiplying and dividing powers of the same base, and the power of zero.",
      lesson: {
        sections: [
          {
            heading: "Index notation",
            body: "A power is repeated multiplication: $2^5=2\\times2\\times2\\times2\\times2=32$. The **base** is 2 and the **index** is 5. Be careful: $2^5$ is not $2\\times5$.",
          },
          {
            heading: "Multiplying and dividing powers",
            body: "When the bases are the same, **add** the indices to multiply and **subtract** them to divide.\n\n$$a^m\\times a^n=a^{m+n}\\qquad a^m\\div a^n=a^{m-n}$$\n\nFor example $3^4\\times3^2=3^6$ because $(3\\times3\\times3\\times3)\\times(3\\times3)$ has six threes. These laws only work when the bases are the same.",
          },
          {
            heading: "The power of zero",
            body: "Using the division law, $5^3\\div5^3=5^{3-3}=5^0$. But any number divided by itself is 1, so $5^0=1$. In general $a^0=1$ for any non-zero $a$. This is a rule we can justify, not just memorise.",
          },
        ],
        keyFormulas: [
          { name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
          { name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
          { name: "Power of zero", statement: "$a^0=1$" },
        ],
        workedExample: {
          problem: "Write $7^6\\div7^2\\times7$ as a single power of 7.",
          solution: "Remember $7=7^1$. Then $7^{6-2+1}=7^5$.",
        },
      },
      questions: [
        {
          id: "mypm2-u1-index-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $a^3\\times a^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a^{34}$" },
              { id: "b", text: "$2a^{7}$" },
              { id: "c", text: "$a^{12}$" },
              { id: "d", text: "$a^{7}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
            ],
            steps: [
              { reasoning: "The bases are the same, so add the indices.", working: "a^3\\times a^4=a^{3+4}=a^7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $a^7$",
            commonErrors: ["Multiplying the indices to get $a^{12}$.", "Writing the indices side by side, $a^{34}$.", "Adding a coefficient, $2a^7$."],
            examinerNote: "B1 for $a^7$.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of $5^0+2^3\\times2^2$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 33 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of zero", statement: "$a^0=1$ for any non-zero $a$." },
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
            ],
            steps: [
              { reasoning: "Use $5^0=1$, and add the indices of the powers of 2.", working: "5^0=1,\\quad 2^3\\times2^2=2^5=32", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "1+32=33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$33$",
            commonErrors: ["Taking $5^0=0$, giving 32.", "Multiplying the indices, $2^6=64$, giving 65."],
            examinerNote: "M1 for $5^0=1$ or $2^5$ seen. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write $3^8\\div3^5\\times3^2$ as a single power of 3, and then work out its value.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 243 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Subtract the indices for the division and add them for the multiplication.", working: "3^{8-5+2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify to a single power.", working: "3^5", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "3\\times3\\times3\\times3\\times3=243", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3^5=243$",
            commonErrors: ["Adding the 5 instead of subtracting it, giving $3^{15}$.", "Evaluating $3\\times5=15$."],
            examinerNote: "M1 for correct use of both laws. A1 for $3^5$. A1 for 243.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A scientist is investigating a culture of bacteria. At the start there is 1 cell. The number of cells doubles every hour, so after $t$ hours there are $2^t$ cells.",
          parts: [
            { label: "a", prompt: "Work out the number of cells after 5 hours.", marks: 2 },
            { label: "b", prompt: "Write $2^6\\times2^4$ as a single power of 2 and work out its value.", marks: 2 },
            { label: "c", prompt: "How many times greater is the number of cells after 10 hours than after 7 hours? Use the laws of indices.", marks: 2 },
            { label: "d", prompt: "Show, using $2^3\\div2^3$, why $2^0=1$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cells after 5 hours", answer: 32 },
              { label: "(b) Value of $2^6\\times2^4$", answer: 1024 },
              { label: "(c) Number of times greater", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
              { kind: "principle", name: "Justifying a rule", statement: "A rule such as $a^0=1$ follows by applying a known law to a case where the answer is already known." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $t=5$ into $2^t$.", working: "2^5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "2\\times2\\times2\\times2\\times2=32", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same base, so add the indices.", working: "2^{6+4}=2^{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $2^{10}=1024$.", working: "1024", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the number of cells after 10 hours by the number after 7 hours, and subtract the indices.", working: "2^{10}\\div2^7=2^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "2^3=8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluating directly, any number divided by itself is 1.", working: "2^3\\div2^3=8\\div8=1", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The division law gives the same expression as a power with index $3-3=0$. Both are equal, so $2^0=1$.", working: "2^3\\div2^3=2^{3-3}=2^0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $32$ (b) $2^{10}=1024$ (c) $8$ times (d) $2^3\\div2^3=8\\div8=1$ and also $=2^0$, so $2^0=1$.",
            commonErrors: ["Computing $2\\times5=10$ for $2^5$.", "Multiplying the indices in (b), giving $2^{24}$.", "In (d), simply stating that $2^0=1$ without using the division law."],
            examinerNote: "In (c) accept $1024\\div128=8$ as an alternative method for M1 A1.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $m^9\\div m^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$m^{13}$" },
              { id: "b", text: "$m^{36}$" },
              { id: "c", text: "$m^{5}$" },
              { id: "d", text: "$5m$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
            ],
            steps: [
              { reasoning: "The bases are the same, so subtract the indices.", working: "m^{9-4}=m^5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $m^5$",
            commonErrors: ["Adding the indices to get $m^{13}$.", "Multiplying the indices to get $m^{36}$.", "Subtracting the bases, giving $5m$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-index-laws-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $4^0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of zero", statement: "$a^0=1$ for any non-zero $a$." },
            ],
            steps: [
              { reasoning: "Any non-zero number to the power 0 equals 1.", working: "4^0=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1$",
            commonErrors: ["Thinking $a^0=0$.", "Confusing $4^0$ with $4^1$ or $4^2$."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm2-u1-index-laws-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of $3^2\\times3^3\\div3^4$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Combine the indices: add for the multiplication and subtract for the division.", working: "3^{2+3-4}=3^1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3^1=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Computing $3^2=9$ first and losing track of the powers.", "Subtracting 4 from 2 only, ignoring the $\\times3^3$."],
            examinerNote: "M1 for $3^{2+3-4}$ or $3^1$ seen. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of $2^5\\times5^0$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 32 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of zero", statement: "$a^0=1$ for any non-zero $a$." },
            ],
            steps: [
              { reasoning: "Use $5^0=1$ and evaluate $2^5$.", working: "2^5=32,\\quad 32\\times1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the product.", working: "32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32$",
            commonErrors: ["Taking $5^0=0$, giving 0.", "Multiplying the bases, $10^5$."],
            examinerNote: "M1 for $5^0=1$ or $2^5=32$ seen. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which expression is equal to $7^4\\div7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7^0$" },
              { id: "b", text: "$7^3$" },
              { id: "c", text: "$7^4$" },
              { id: "d", text: "$7^5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$, and $7=7^1$." },
            ],
            steps: [
              { reasoning: "Write 7 as $7^1$ and subtract the indices.", working: "7^4\\div7^1=7^{4-1}=7^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7^3$",
            commonErrors: ["Leaving the answer as $7^4$ and forgetting to divide.", "Adding the index 1 to get $7^5$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-index-laws-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is equal to $5^3\\times5^2\\div5^4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5^{9}$" },
              { id: "b", text: "$5^{1}$" },
              { id: "c", text: "$5^{2}$" },
              { id: "d", text: "$5^{24}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Combine the indices in order: $3+2-4=1$.", working: "5^{3+2-4}=5^1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5^1$",
            commonErrors: ["Multiplying all the indices to get $5^{24}$.", "Adding all the indices to get $5^9$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-index-laws-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $2^6\\div2^2\\times2^3$ as a single power of 2, and then find its value.",
          response: {
            type: "numeric",
            parts: [
              { label: "Exponent", answer: 7 },
              { label: "Value", answer: 128 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Subtract the indices for the division and add them for the multiplication.", working: "2^{6-2+3}", marks: 1, markCode: "M" },
              { reasoning: "Simplify to a single power.", working: "2^7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^7=128", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2^7=128$",
            commonErrors: ["Adding 2 instead of subtracting it, giving $2^{11}$.", "Multiplying the indices to get $2^{36}$.", "Evaluating $2\\times7=14$."],
            examinerNote: "M1 for $2^{6-2+3}$ or $2^7$. M1 for $2^7$. A1 for 128.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $a^5\\times a^n=a^9$, what is the value of $n$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$14$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
            ],
            steps: [
              { reasoning: "The indices add, so $5+n=9$.", working: "5+n=9\\Rightarrow n=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $n=4$",
            commonErrors: ["Multiplying the indices, giving $n=\\frac{9}{5}$.", "Subtracting in the wrong order, giving $n=14$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-index-laws-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why $10^0=1$ using the laws of indices, not just by stating the rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
              { kind: "principle", name: "Justifying a rule", statement: "A rule follows by applying a known law to a case where the answer is already known." },
            ],
            steps: [
              { reasoning: "Divide a power of 10 by itself using the division law.", working: "10^3\\div10^3=10^{3-3}=10^0", marks: 1, markCode: "M" },
              { reasoning: "Any number divided by itself equals 1.", working: "10^3\\div10^3=1000\\div1000=1", marks: 1, markCode: "M" },
              { reasoning: "Both ways of writing the same expression must be equal, so $10^0=1$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$10^3\\div10^3=10^{3-3}=10^0$ and also $=1$, so $10^0=1$.",
            commonErrors: ["Simply stating that $10^0=1$ without using a division law.", "Using different bases in the two calculations."],
            examinerNote: "The R mark needs the argument that the same expression is written two ways.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that $a^2\\times a^3\\div a^4=a$ for any non-zero number $a$. Explain each step you use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Multiply the first two powers by adding the indices.", working: "a^2\\times a^3=a^{2+3}=a^5", marks: 1, markCode: "M" },
              { reasoning: "Divide by $a^4$ by subtracting the index 4.", working: "a^5\\div a^4=a^{5-4}=a^1", marks: 1, markCode: "M" },
              { reasoning: "Simplify $a^1$ to $a$.", working: "a^1=a", marks: 1, markCode: "A" },
              { reasoning: "The laws hold for any non-zero base $a$, so the result is true generally.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$a^2\\times a^3\\div a^4=a^5\\div a^4=a$",
            commonErrors: ["Computing $2\\times3=6$ and $6\\div4$ to get a fractional index.", "Forgetting that $a^1=a$."],
            examinerNote: "The final R mark is for recognising the result holds for any non-zero $a$.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Simplify and evaluate these expressions.",
          parts: [
            { label: "a", prompt: "Write $5^6\\div5^3$ as a single power of 5, and then find its value.", marks: 2 },
            { label: "b", prompt: "Write $7^2\\times7^3\\div7^4$ as a single power of 7, and then find its value.", marks: 2 },
            { label: "c", prompt: "Explain why the answer to part (b) is 7.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Value", answer: 125 },
              { label: "(b) Value", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the indices for the division.", working: "5^{6-3}=5^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "5^3=125", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Combine the indices: add 2 and 3, then subtract 4.", working: "7^{2+3-4}=7^1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate $7^1$.", working: "7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The combined index is $2+3-4=1$, and any number to the power 1 is itself.", working: "7^1=7", marks: 1, markCode: "R" },
              { part: "c", reasoning: "State the rule used: $a^1=a$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $5^3=125$ (b) $7^1=7$ (c) the index is 1 and $a^1=a$",
            commonErrors: ["In (b) subtracting 4 from 2 only and ignoring the $\\times7^3$.", "In (c) saying the answer is 7 because 7 is a prime number."],
            examinerNote: "In (c) the reason must refer to the index being 1.",
          },
        },
        {
          id: "mypm2-u1-index-laws-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A virus count triples every hour. One hour after the first test there are $3^1=3$ virus particles.",
          parts: [
            { label: "a", prompt: "Work out the number of virus particles 4 hours after the first test.", marks: 2 },
            { label: "b", prompt: "Write $3^5\\times3^2\\div3^3$ as a single power of 3 and work out its value.", marks: 2 },
            { label: "c", prompt: "How many times greater is the number of particles 6 hours after the first test than 4 hours after it? Use the laws of indices.", marks: 2 },
            { label: "d", prompt: "Show, using $3^4\\div3^4$, why $3^0=1$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Particles after 4 hours", answer: 81 },
              { label: "(b) Value", answer: 81 },
              { label: "(c) Number of times greater", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m\\times a^n=a^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$a^m\\div a^n=a^{m-n}$" },
              { kind: "principle", name: "Justifying a rule", statement: "A rule such as $a^0=1$ follows by applying a known law to a case where the answer is already known." },
            ],
            steps: [
              { part: "a", reasoning: "Tripling each hour means the count is $3^t$ after $t$ hours; substitute $t=4$.", working: "3^4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "3^4=81", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same base, so combine the indices $5+2-3=4$.", working: "3^{5+2-3}=3^4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "3^4=81", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the count after 6 hours by the count after 4 hours and subtract the indices.", working: "3^6\\div3^4=3^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "3^2=9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluating directly, any number divided by itself is 1.", working: "3^4\\div3^4=81\\div81=1", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The division law gives $3^{4-4}=3^0$ for the same expression, so $3^0=1$.", working: "3^4\\div3^4=3^{4-4}=3^0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $81$ (b) $3^4=81$ (c) $9$ times (d) $3^4\\div3^4=81\\div81=1$ and also $=3^0$, so $3^0=1$",
            commonErrors: ["In (c) computing $3^6\\div3^4=3^2$ then giving 6.", "In (d) stating $3^0=1$ without using the division law."],
            examinerNote: "In (d) accept any non-zero base used consistently.",
          },
        },
      ],
    },
    {
      id: "mypm2-u1-standard-form",
      title: "Standard form",
      skill: "Convert numbers to and from standard form, calculate with it and use it to describe real quantities.",
      lesson: {
        sections: [
          {
            heading: "What is standard form?",
            body: "Standard form writes a number as $a\\times10^n$ where $1\\le a<10$ and $n$ is an integer. Large numbers have a positive $n$: $45\\,000=4.5\\times10^4$. Numbers smaller than 1 have a negative $n$: $0.0032=3.2\\times10^{-3}$.",
          },
          {
            heading: "Calculating",
            body: "Multiply or divide the front numbers, and use the index laws on the powers of 10. Then check that the front number is between 1 and 10.\n\n$(3\\times10^5)\\times(4\\times10^3)=12\\times10^8=1.2\\times10^9$.\n\nFor division, $\\dfrac{6\\times10^7}{2\\times10^4}=3\\times10^3$.",
          },
          {
            heading: "Comparing sizes",
            body: "To order numbers in standard form, compare the powers of 10 first, and only compare the front numbers if the powers are equal. Standard form is used for distances in space and the sizes of cells because ordinary numbers would have too many zeros to read easily.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a\\times10^n$, with $1\\le a<10$ and $n$ an integer" },
        ],
        workedExample: {
          problem: "Write $0.000\\,072$ in standard form.",
          solution: "Move the decimal point 5 places to the right to get 7.2, so the power of 10 is $-5$. The answer is $7.2\\times10^{-5}$.",
        },
      },
      questions: [
        {
          id: "mypm2-u1-standard-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is 45 000 written in standard form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5\\times10^{3}$" },
              { id: "b", text: "$4.5\\times10^{4}$" },
              { id: "c", text: "$4.5\\times10^{5}$" },
              { id: "d", text: "$45\\times10^{3}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Move the decimal point 4 places left to get 4.5, so the power of 10 is 4.", working: "45\\,000=4.5\\times10^4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4.5\\times10^4$",
            commonErrors: ["Choosing $45\\times10^3$, where the front number is not between 1 and 10.", "Counting the zeros instead of the places moved."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm2-u1-standard-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(6\\times10^3)\\times(4\\times10^5)$. Give your answer in standard form as $a\\times10^n$, and enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2.4 },
              { label: "$n$", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$10^m\\times10^n=10^{m+n}$" },
              { kind: "definition", name: "Standard form", statement: "The front number must be at least 1 and less than 10." },
            ],
            steps: [
              { reasoning: "Multiply the front numbers and add the indices.", working: "6\\times4=24,\\quad 10^3\\times10^5=10^8", marks: 1, markCode: "M" },
              { reasoning: "24 is not between 1 and 10, so write $24=2.4\\times10$ and add 1 to the index.", working: "24\\times10^8=2.4\\times10^9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.4\\times10^9$",
            commonErrors: ["Leaving the answer as $24\\times10^8$.", "Multiplying the indices to get $10^{15}$."],
            examinerNote: "M1 for $24\\times10^8$ oe. A1 for $2.4\\times10^9$.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The distance from the Earth to the Sun is $1.5\\times10^8$ km. Light travels at $3\\times10^5$ km per second. Work out how many seconds light takes to travel from the Sun to the Earth.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 500, unit: "seconds" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
              { kind: "law", name: "Dividing powers", statement: "$10^m\\div10^n=10^{m-n}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the speed.", working: "\\dfrac{1.5\\times10^8}{3\\times10^5}", marks: 1, markCode: "M" },
              { reasoning: "Divide the front numbers and subtract the indices.", working: "0.5\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Write as an ordinary number.", working: "500\\text{ seconds}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500$ seconds (about 8 minutes 20 seconds)",
            commonErrors: ["Multiplying distance and speed.", "Dividing the front numbers the wrong way round, giving 2 instead of 0.5."],
            examinerNote: "M1 for division. M1 for correct handling of front numbers and indices. A1 for 500.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A biologist records the sizes of some tiny objects.\n\n- Red blood cell diameter: $7\\times10^{-6}$ m\n- Width of a human hair: $8\\times10^{-5}$ m\n- Length of one bacterium: $2\\times10^{-6}$ m",
          parts: [
            { label: "a", prompt: "Write the three sizes in order, starting with the smallest.", marks: 2 },
            { label: "b", prompt: "How many bacteria placed end to end would have the same length as the width of one hair?", marks: 2 },
            { label: "c", prompt: "A line of $5\\times10^4$ bacteria is placed end to end. Work out the length of the line in metres, as an ordinary number.", marks: 2 },
            { label: "d", prompt: "A student writes this length as $10\\times10^{-2}$ m and says it is in standard form. Explain the error and write the length correctly in standard form.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Number of bacteria", answer: 40 },
              { label: "(c) Length of the line", answer: 0.1, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
              { kind: "principle", name: "Comparing in standard form", statement: "Compare the powers of 10 first, then the front numbers if the powers are equal." },
              { kind: "law", name: "Index laws", statement: "$10^m\\times10^n=10^{m+n}$ and $10^m\\div10^n=10^{m-n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Compare the powers of 10 first: $10^{-5}$ is greater than $10^{-6}$, so the hair is the largest. Then compare the front numbers 2 and 7 for the two $10^{-6}$ values.", working: "2\\times10^{-6}<7\\times10^{-6}<8\\times10^{-5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the order in words.", working: "\\text{bacterium, red blood cell, hair}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the hair width by the length of one bacterium.", working: "\\dfrac{8\\times10^{-5}}{2\\times10^{-6}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide the front numbers and subtract the indices.", working: "4\\times10^{1}=40", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the number of bacteria by the length of one.", working: "5\\times10^4\\times2\\times10^{-6}=10\\times10^{-2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write as an ordinary number.", working: "10\\times10^{-2}=0.1\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In standard form the front number must be at least 1 and less than 10. Here it is 10, which is too big.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Write $10=1\\times10^1$, so the index increases by 1.", working: "10\\times10^{-2}=1\\times10^{-1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) bacterium, red blood cell, hair (b) $40$ (c) $0.1$ m (d) the front number 10 is not less than 10; $1\\times10^{-1}$ m",
            commonErrors: ["Ordering by the front numbers only (2, 7, 8) and ignoring that $10^{-5}$ is ten times bigger than $10^{-6}$ so the hair is much larger than the others.", "Subtracting the indices the wrong way round, $-6-(-5)$.", "Leaving the answer to (c) as $10\\times10^{-2}$ and not converting."],
            examinerNote: "In (d) accept $1.0\\times10^{-1}$ or $1\\times10^{-1}$.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is $0.004$ written in standard form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\times10^{-4}$" },
              { id: "b", text: "$0.4\\times10^{-2}$" },
              { id: "c", text: "$4\\times10^{3}$" },
              { id: "d", text: "$4\\times10^{-3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Move the decimal point 3 places right to get 4, so the power of 10 is $-3$.", working: "0.004=4\\times10^{-3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4\\times10^{-3}$",
            commonErrors: ["Counting the zeros after the decimal point incorrectly, giving $10^{-4}$.", "Choosing (c), where the front number is less than 1."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-standard-form-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT written in standard form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\times10^{2}$" },
              { id: "b", text: "$3\\times10^{5}$" },
              { id: "c", text: "$9\\times10^{-2}$" },
              { id: "d", text: "$0.6\\times10^{4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "In standard form the front number must be at least 1 and less than 10. Only $12\\times10^2$ fails this test.", working: "12\\notin[1,10)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $12\\times10^{2}$",
            commonErrors: ["Thinking a negative power of 10 is not allowed, so choosing (c) or (d)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-standard-form-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $650\\,000$ in standard form, $a\\times10^n$. Find the values of $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 6.5 },
              { label: "$n$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Move the decimal point 5 places left to get a number between 1 and 10.", working: "650\\,000=6.5\\times10^5", marks: 1, markCode: "M" },
              { reasoning: "State the values of $a$ and $n$.", working: "a=6.5,\\quad n=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.5\\times10^{5}$, so $a=6.5$ and $n=5$",
            commonErrors: ["Writing $65\\times10^4$, where the front number is too big.", "Counting the zeros (5) but forgetting the decimal point moves, giving $n=6$."],
            examinerNote: "M1 for $6.5\\times10^5$ oe. A1 for both values.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(2\\times10^{4})\\div(5\\times10^{2})$. Give your answer in standard form, $a\\times10^n$. Find the values of $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 0.4 },
              { label: "$n$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing powers", statement: "$10^m\\div10^n=10^{m-n}$" },
              { kind: "definition", name: "Standard form", statement: "The front number must be at least 1 and less than 10." },
            ],
            steps: [
              { reasoning: "Divide the front numbers and subtract the indices.", working: "\\frac{2}{5}=0.4,\\quad 10^{4-2}=10^2", marks: 1, markCode: "M" },
              { reasoning: "0.4 is less than 1, so write $0.4=4\\times10^{-1}$ and adjust the index.", working: "0.4\\times10^2=4\\times10^{1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\times10^{1}$, so $a=4$ and $n=1$",
            commonErrors: ["Stopping at $0.4\\times10^2$, which is not standard form.", "Subtracting the indices the wrong way round, giving $10^6$."],
            examinerNote: "M1 for $0.4\\times10^2$ oe. A1 for $4\\times10^1$ with correct $a$ and $n$.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these numbers is the largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9\\times10^{4}$" },
              { id: "b", text: "$3\\times10^{4}$" },
              { id: "c", text: "$2\\times10^{5}$" },
              { id: "d", text: "$8\\times10^{3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing in standard form", statement: "Compare the powers of 10 first, then the front numbers if the powers are equal." },
            ],
            steps: [
              { reasoning: "The largest power of 10 is $10^5$, so $2\\times10^5$ is the largest even though its front number is small.", working: "10^5>10^4>10^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $2\\times10^{5}$",
            commonErrors: ["Choosing (d) because 9 is the biggest front number."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm2-u1-standard-form-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why $45\\times10^{3}$ is not in standard form, and write it correctly in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "The front number must be at least 1 and less than 10. Here it is 45, which is too big.", marks: 1, markCode: "R" },
              { reasoning: "Write $45=4.5\\times10$, so the power of 10 increases by 1.", working: "45\\times10^3=4.5\\times10^4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4.5\\times10^{4}$",
            commonErrors: ["Changing 45 to 4.5 without increasing the index, giving $4.5\\times10^3$."],
            examinerNote: "R1 for identifying the front number must be less than 10. B1 for the correct standard form.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $(3\\times10^{6})\\times(2\\times10^{2})\\div(6\\times10^{5})$. Give your answer in standard form.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 1000 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$10^m\\times10^n=10^{m+n}$" },
              { kind: "law", name: "Dividing powers", statement: "$10^m\\div10^n=10^{m-n}$" },
            ],
            steps: [
              { reasoning: "Multiply the first two numbers in standard form.", working: "(3\\times10^6)(2\\times10^2)=6\\times10^8", marks: 1, markCode: "M" },
              { reasoning: "Divide by the third number, dividing front numbers and subtracting indices.", working: "\\frac{6\\times10^8}{6\\times10^5}=1\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Write as an ordinary number.", working: "1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\times10^{3}=1000$",
            commonErrors: ["Multiplying all three numbers instead of dividing.", "Adding all the indices, giving $10^{13}$."],
            examinerNote: "M1 for $6\\times10^8$. M1 for correct division. A1 for 1000 or $10^3$.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The mass of the Earth is about $6\\times10^{24}$ kg and the mass of the Moon is about $7.4\\times10^{22}$ kg. Roughly how many times heavier is the Earth than the Moon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About $8$ times" },
              { id: "b", text: "About $800$ times" },
              { id: "c", text: "About $0.1$ times" },
              { id: "d", text: "About $80$ times" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing in standard form", statement: "Compare the powers of 10 first, then the front numbers if the powers are equal." },
            ],
            steps: [
              { reasoning: "Divide the front numbers and subtract the indices: $6\\div7.4\\approx0.8$ and $10^{24-22}=10^2$, so about $0.8\\times10^2\\approx80$.", working: "\\frac{6\\times10^{24}}{7.4\\times10^{22}}\\approx0.8\\times10^2=80", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** About $80$ times",
            commonErrors: ["Dividing the powers of 10 the wrong way round.", "Comparing only the front numbers 6 and 7.4."],
            examinerNote: "B1 for choice (b). Accept estimates in the range 75-85 for the working.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes $0.00056=5.6\\times10^{4}$. Explain the error and write the correct answer in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "The number is less than 1, so the power of 10 must be negative; $10^4$ makes the value far too large.", marks: 1, markCode: "R" },
              { reasoning: "Move the decimal point 4 places right to get 5.6, so the power of 10 is $-4$.", working: "0.00056=5.6\\times10^{-4}", marks: 1, markCode: "M" },
              { reasoning: "Check: $5.6\\times10^{-4}=0.00056$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.6\\times10^{-4}$; the power should be negative because the number is less than 1.",
            commonErrors: ["Giving $5.6\\times10^{-3}$, miscounting the places.", "Only correcting the sign without checking the number of places."],
            examinerNote: "R1 for recognising the sign error. M1 for the correct conversion. A1 for the check.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A star is about $4\\times10^{16}$ m from Earth. Light travels at about $3\\times10^{8}$ m per second. Estimate how many seconds light takes to reach Earth from the star, and explain whether your estimate could be an overestimate or an underestimate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
              { kind: "law", name: "Dividing powers", statement: "$10^m\\div10^n=10^{m-n}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the speed.", working: "\\frac{4\\times10^{16}}{3\\times10^{8}}", marks: 1, markCode: "M" },
              { reasoning: "Divide the front numbers and subtract the indices.", working: "\\frac{4}{3}\\times10^{8}\\approx1.3\\times10^{8}", marks: 1, markCode: "M" },
              { reasoning: "State the estimate as a number.", working: "\\approx1.3\\times10^{8}\\text{ seconds}", marks: 1, markCode: "A" },
              { reasoning: "The real distance is 'about' $4\\times10^{16}$ m, so the true time could be slightly more or less; the estimate is only as accurate as the given values.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "About $1.3\\times10^{8}$ seconds (about 4 years); the estimate inherits the uncertainty of the given distance.",
            commonErrors: ["Multiplying distance and speed.", "Dividing $10^{16}$ by $10^8$ to get $10^{24}$ instead of subtracting."],
            examinerNote: "Accept answers in the range $1.3\\times10^8$ to $1.4\\times10^8$ seconds. The R mark is for discussing the 'about' values.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A city has a population of $8.5\\times10^{5}$ and a nearby town has a population of $4\\times10^{4}$. Each person in the region uses about $2\\times10^{3}$ litres of water per year.",
          parts: [
            { label: "a", prompt: "Work out how many times larger the city population is than the town population.", marks: 2 },
            { label: "b", prompt: "Work out the combined population of the city and the town, as an ordinary number.", marks: 2 },
            { label: "c", prompt: "Work out the total volume of water used by the combined population in one year, in litres. Give your answer in standard form.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of times larger", answer: 21.25 },
              { label: "(b) Combined population", answer: 890000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing in standard form", statement: "Divide the front numbers and subtract the indices." },
              { kind: "law", name: "Index laws", statement: "$10^m\\times10^n=10^{m+n}$ and $10^m\\div10^n=10^{m-n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the city population by the town population.", working: "\\frac{8.5\\times10^5}{4\\times10^4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $8.5\\div4=2.125$ and $10^{5-4}=10$, so $2.125\\times10=21.25$.", working: "21.25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the two populations, first as $8.5\\times10^5+0.4\\times10^5$.", working: "8.9\\times10^5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write as an ordinary number.", working: "890\\,000", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the combined population by the water use per person.", working: "8.9\\times10^5\\times2\\times10^3=17.8\\times10^8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rewrite with a front number between 1 and 10.", working: "1.78\\times10^9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $21.25$ times (b) $890\\,000$ (c) $1.78\\times10^{9}$ litres",
            commonErrors: ["In (b) adding $8.5+4$ and keeping $10^5$.", "In (c) leaving the answer as $17.8\\times10^8$, which is not standard form."],
            examinerNote: "In (a) accept 21.25 or 21.3.",
          },
        },
        {
          id: "mypm2-u1-standard-form-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The distances of three planets from the Sun are: Mercury $5.8\\times10^{7}$ km, Earth $1.5\\times10^{8}$ km and Neptune $4.5\\times10^{9}$ km. Light travels at about $3\\times10^{5}$ km per second.",
          parts: [
            { label: "a", prompt: "Work out how much further Earth is from the Sun than Mercury, in kilometres, as an ordinary number.", marks: 2 },
            { label: "b", prompt: "Work out how many times further Neptune is from the Sun than Earth is.", marks: 2 },
            { label: "c", prompt: "Work out how many seconds light takes to travel from the Sun to Neptune.", marks: 2 },
            { label: "d", prompt: "Explain why standard form makes it easier to compare these distances than writing them as ordinary numbers.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Difference in distance", answer: 92000000, unit: "km" },
              { label: "(b) Number of times further", answer: 30 },
              { label: "(c) Time for light", answer: 15000, unit: "seconds" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing in standard form", statement: "Compare the powers of 10 first, then the front numbers if the powers are equal." },
              { kind: "law", name: "Index laws", statement: "$10^m\\div10^n=10^{m-n}$." },
              { kind: "formula", name: "Time", statement: "$\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Write both distances with the same power of 10 and subtract.", working: "1.5\\times10^8-0.58\\times10^8=0.92\\times10^8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Write as an ordinary number.", working: "92\\,000\\,000\\text{ km}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the Neptune distance by the Earth distance.", working: "\\frac{4.5\\times10^9}{1.5\\times10^8}=3\\times10^{1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the distance by the speed of light.", working: "\\frac{4.5\\times10^9}{3\\times10^5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide front numbers and subtract indices.", working: "1.5\\times10^4=15\\,000\\text{ seconds}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Standard form shows the size of each number at a glance through the power of 10, without counting long strings of zeros.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It also makes calculations easier because the powers of 10 combine with the index laws.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $92\\,000\\,000$ km (b) $30$ times (c) $15\\,000$ seconds (d) the power of 10 shows the size and index laws make calculations easier",
            commonErrors: ["In (a) subtracting $5.8$ from $1.5$ and keeping $10^8$ without adjusting.", "In (c) dividing $10^9$ by $10^5$ to get $10^{14}$ instead of subtracting."],
            examinerNote: "In (a) accept $9.2\\times10^7$ km.",
          },
        },
      ],
    },
  ],
};
