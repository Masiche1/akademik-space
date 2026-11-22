import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypm1-u1-lesson-1-2",
  code: "1-2",
  title: "Factors, Multiples and Primes",
  goal: "I CAN write numbers as products of primes, find the HCF and LCM, use squares, cubes and roots, and investigate patterns in square numbers.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Factor", definition: "A whole number that divides exactly into another number. The factors of 12 are 1, 2, 3, 4, 6 and 12." },
    { term: "Multiple", definition: "A number in the times table of a given number. The multiples of 4 are 4, 8, 12, 16, and so on." },
    { term: "Prime number", definition: "A number greater than 1 whose only factors are 1 and itself." },
    { term: "Index form", definition: "A product of repeated factors written with a power, for example $2\\times2\\times2\\times3=2^3\\times3$." },
    { term: "Highest common factor (HCF)", definition: "The largest number that is a factor of two or more given numbers." },
    { term: "Lowest common multiple (LCM)", definition: "The smallest positive number that is a multiple of two or more given numbers." },
    { term: "Square number", definition: "The result of multiplying a whole number by itself, such as $36=6^2$." },
  ],
  concepts: [
    {
      id: "mypm1-u1-prime-factors-hcf-lcm",
      title: "Prime factorisation, HCF and LCM",
      skill: "Write numbers as products of primes in index form and use them to find the HCF and LCM in problems.",
      lesson: {
        sections: [
          {
            heading: "Prime factorisation",
            body: "Use a factor tree to split a number into primes. For example $60=2\\times2\\times3\\times5=2^2\\times3\\times5$. The prime factorisation of a number is unique, so you always get the same primes however you build the tree.",
          },
          {
            heading: "HCF and LCM",
            body: "The **HCF** uses only the primes common to both numbers, each to the **lowest** power. The **LCM** uses every prime that appears, each to the **highest** power. For $24=2^3\\times3$ and $36=2^2\\times3^2$: HCF $=2^2\\times3=12$ and LCM $=2^3\\times3^2=72$.",
          },
          {
            heading: "Word problems",
            body: "Use the HCF when you must share things into equal groups with none left over, or find the largest size that fits. Use the LCM when two events repeat at different intervals and you want to know when they next happen together.",
          },
        ],
        keyFormulas: [
          { name: "HCF", statement: "Common primes, lowest powers" },
          { name: "LCM", statement: "All primes, highest powers" },
        ],
        workedExample: {
          problem: "Find the HCF and LCM of 18 and 30.",
          solution: "$18=2\\times3^2$ and $30=2\\times3\\times5$. HCF $=2\\times3=6$. LCM $=2\\times3^2\\times5=90$.",
        },
      },
      questions: [
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is 60 written as a product of its prime factors in index form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times3^2\\times5$" },
              { id: "b", text: "$2^3\\times3\\times5$" },
              { id: "c", text: "$2^2\\times3\\times5$" },
              { id: "d", text: "$4\\times15$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime factorisation", statement: "A number written as a product of prime numbers only." },
            ],
            steps: [
              { reasoning: "$60=2\\times2\\times3\\times5$, and 2, 3 and 5 are all prime.", working: "60=2^2\\times3\\times5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2^2\\times3\\times5$",
            commonErrors: ["Choosing $4\\times15$, where neither factor is prime.", "Choosing $2\\times3^2\\times5=90$ or $2^3\\times3\\times5=120$ without multiplying out."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the highest common factor (HCF) of 36 and 48.",
          response: { type: "numeric", parts: [{ label: "HCF", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common prime factors, each to the lowest power." },
            ],
            steps: [
              { reasoning: "Write both numbers as products of primes.", working: "36=2^2\\times3^2,\\quad 48=2^4\\times3", marks: 1, markCode: "M" },
              { reasoning: "Take the lowest power of each common prime and multiply.", working: "2^2\\times3=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Giving the LCM, 144.", "Using the highest powers of the common primes."],
            examinerNote: "M1 for either prime factorisation correct, or lists of factors with at least 4 correct for each number (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write 72 and 90 each as a product of prime factors in index form, and hence find their highest common factor.",
          response: { type: "numeric", parts: [{ label: "HCF of 72 and 90", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Index form", statement: "Repeated prime factors are written as powers." },
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common prime factors, each to the lowest power." },
            ],
            steps: [
              { reasoning: "Build factor trees for both numbers.", working: "72=2^3\\times3^2,\\quad 90=2\\times3^2\\times5", marks: 1, markCode: "M" },
              { reasoning: "Common primes are 2 and 3. Take the lowest power of each.", working: "2^1\\times3^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "2\\times9=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72=2^3\\times3^2$, $90=2\\times3^2\\times5$, HCF $=18$",
            commonErrors: ["Including the 5 in the HCF, although it is not a factor of 72.", "Taking the highest power of 2, giving 36."],
            examinerNote: "M1 for both factorisations correct. M1 for lowest common powers. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A teacher has 24 pencils and 36 erasers. She wants to make identical packs of stationery using all the items, with no items left over. Each pack must have the same number of pencils and the same number of erasers.",
          parts: [
            { label: "a", prompt: "Write 24 and 36 each as a product of prime factors in index form.", marks: 2 },
            { label: "b", prompt: "Find the largest number of packs she can make.", marks: 2 },
            { label: "c", prompt: "Work out how many pencils are in each pack when she makes the largest number of packs.", marks: 2 },
            { label: "d", prompt: "Bus X leaves a station every 8 minutes and bus Y every 12 minutes. They both leave at 8:00 am. Work out how many minutes later they next leave together.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Largest number of packs", answer: 12 },
              { label: "(c) Pencils in each pack", answer: 2 },
              { label: "(d) Minutes until the buses next leave together", answer: 24, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime factorisation", statement: "Every whole number greater than 1 is a product of primes." },
              { kind: "principle", name: "HCF for equal sharing", statement: "The largest number of equal groups that divides every quantity exactly is the HCF." },
              { kind: "principle", name: "LCM for repeating events", statement: "Events with different repeat times coincide after the LCM of the times." },
            ],
            steps: [
              { part: "a", reasoning: "Use a factor tree for 24.", working: "24=2^3\\times3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use a factor tree for 36.", working: "36=2^2\\times3^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The number of packs must divide both 24 and 36, so it is their HCF. Take the lowest powers of 2 and 3.", working: "2^2\\times3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply.", working: "12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Share the 24 pencils equally between 12 packs.", working: "24\\div12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate. (Each pack also has $36\\div12=3$ erasers.)", working: "2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The buses leave together after a time that is the lowest common multiple of 8 and 12. $8=2^3$ and $12=2^2\\times3$, so take the highest powers.", working: "2^3\\times3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply to find the number of minutes (they next leave together at 8:24 am).", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $24=2^3\\times3$, $36=2^2\\times3^2$ (b) $12$ packs (c) $2$ pencils (d) $24$ minutes",
            commonErrors: ["Using the LCM, 72, for the number of packs.", "Using the HCF, 4, in (d).", "Multiplying 8 and 12 to get 96."],
            examinerNote: "In (c) follow through from an incorrect number of packs in (b) (ft), provided it divides 24.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is 48 written as a product of its prime factors in index form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times3\\times8$" },
              { id: "b", text: "$2^4\\times3$" },
              { id: "c", text: "$4\\times12$" },
              { id: "d", text: "$2^3\\times3^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime factorisation", statement: "A number written as a product of prime numbers only, with repeated primes in index form." },
            ],
            steps: [
              { reasoning: "$48=2\\times2\\times2\\times2\\times3=2^4\\times3$. The other choices contain non-prime factors or give a different number.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2^4\\times3$",
            commonErrors: ["Choosing $2\\times3\\times8$, where 8 is not prime.", "Choosing $2^3\\times3^2=72$, a different number."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the highest common factor (HCF) of 12 and 18?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "HCF", statement: "The largest number that is a factor of both numbers." },
            ],
            steps: [
              { reasoning: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The largest common factor is 6.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $6$",
            commonErrors: ["Choosing 36, which is the product, not a factor.", "Choosing 9, which is not a factor of 12."],
            examinerNote: "B1 for 6.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the lowest common multiple (LCM) of 4 and 6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$24$" },
              { id: "d", text: "$12$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "LCM", statement: "The smallest positive number that is a multiple of both numbers." },
            ],
            steps: [
              { reasoning: "Multiples of 4: 4, 8, 12, 16. Multiples of 6: 6, 12, 18. The smallest common multiple is 12.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $12$",
            commonErrors: ["Choosing 2, the common factor rather than the common multiple.", "Choosing 24, a common multiple but not the lowest."],
            examinerNote: "B1 for 12.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the highest common factor (HCF) of 20 and 30.",
          response: { type: "numeric", parts: [{ label: "HCF", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common prime factors, each to the lowest power." },
            ],
            steps: [
              { reasoning: "Write both numbers as products of primes.", working: "20=2^2\\times5,\\quad 30=2\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "The common primes are 2 and 5, each to the lowest power: $2^1\\times5^1=10$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Including the 3, which is not a factor of 20.", "Giving the LCM, 60."],
            examinerNote: "M1 for both factorisations correct. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the lowest common multiple (LCM) of 8 and 12.",
          response: { type: "numeric", parts: [{ label: "LCM", answer: 24 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "LCM from primes", statement: "Multiply every prime that appears, each to the highest power." },
            ],
            steps: [
              { reasoning: "Write both numbers as products of primes.", working: "8=2^3,\\quad 12=2^2\\times3", marks: 1, markCode: "M" },
              { reasoning: "Take the highest power of 2 and include 3: $2^3\\times3=24$.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$",
            commonErrors: ["Multiplying 8 and 12 to get 96.", "Giving the HCF, 4."],
            examinerNote: "M1 for both factorisations correct. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these numbers is prime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$2$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime number", statement: "A number greater than 1 whose only factors are 1 and itself." },
            ],
            steps: [
              { reasoning: "1 is not greater than 1; 9=3×3; 15=3×5. Only 2 has just the factors 1 and 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: ["Choosing 1, forgetting that a prime must be greater than 1.", "Choosing 9 or 15 by missing a factor."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write 84 as a product of its prime factors in index form, and hence find the highest common factor of 84 and 60.",
          response: { type: "numeric", parts: [{ label: "HCF", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common prime factors, each to the lowest power." },
            ],
            steps: [
              { reasoning: "Build factor trees for both numbers.", working: "84=2^2\\times3\\times7,\\quad 60=2^2\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "The common primes are 2 and 3, each appearing twice in both numbers.", working: "2^2\\times3^1", marks: 1, markCode: "M" },
              { reasoning: "Multiply to find the HCF.", working: "4\\times3=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84=2^2\\times3\\times7$, $60=2^2\\times3\\times5$, HCF $=12$",
            commonErrors: ["Including the 7 or the 5, which are not common to both numbers.", "Taking the highest power of 3 instead of the lowest (both are power 1, so this is safe here)."],
            examinerNote: "M1 for both factorisations correct. M1 for the common primes with lowest powers. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Bus P leaves a stop every 10 minutes and bus Q every 15 minutes. They both leave together at 9:00 am. How many minutes later do they next leave together?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$150$ minutes" },
              { id: "b", text: "$30$ minutes" },
              { id: "c", text: "$25$ minutes" },
              { id: "d", text: "$5$ minutes" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LCM for repeating events", statement: "Events with different repeat times coincide after the LCM of the times." },
            ],
            steps: [
              { reasoning: "The buses leave together after the lowest common multiple of 10 and 15, which is 30.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $30$ minutes",
            commonErrors: ["Multiplying 10 and 15 to get 150.", "Finding the HCF, 5."],
            examinerNote: "B1 for 30.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class of 30 students lines up in equal rows. The teacher wants the largest possible number of rows with the same number of students in each row and no students left over.",
          parts: [
            { label: "a", prompt: "Explain whether to use the HCF or the LCM to solve this problem.", marks: 1 },
            { label: "b", prompt: "Work out the largest possible number of rows.", marks: 1 },
            { label: "c", prompt: "Work out how many students are in each row.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF for equal sharing", statement: "The largest number of equal groups that divides a quantity exactly is the HCF." },
              { kind: "definition", name: "HCF", statement: "The highest common factor of 30 and the number of columns, or of the divisors of 30." },
            ],
            steps: [
              { part: "a", reasoning: "Equal rows with no one left over means finding a factor of 30; the largest such arrangement uses the largest factor, so the HCF idea is needed, not the LCM.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The largest factor of 30 that gives a whole number of students per row is 6 (rows of 5) or 5 (rows of 6); the largest number of rows is 6.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide 30 by 6.", working: "30\\div6=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) HCF, because equal sharing needs a common factor (b) 6 rows (c) 5 students per row",
            commonErrors: ["Using the LCM of 30 and something.", "Giving 5 rows of 6 instead of 6 rows of 5 without checking which is asked."],
            examinerNote: "Accept either 5 rows of 6 or 6 rows of 5 for (b)-(c) if consistent, but the question asks for the largest number of rows, so 6 rows is required.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write down the prime factorisation of $2^3\\times3\\times5$ as a single number.",
          response: { type: "numeric", parts: [{ label: "Number", answer: 120 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Index form", statement: "A power means repeated multiplication: $2^3=2\\times2\\times2=8$." },
            ],
            steps: [
              { reasoning: "Evaluate the power first, then multiply.", working: "8\\times3\\times5=120", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$120$",
            commonErrors: ["Multiplying the base by the power: $2\\times3=6$ for $2^3$."],
            examinerNote: "B1 for 120.",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two drums are beaten at the start of a concert. Drum A beats every 12 beats and drum B every 18 beats.",
          parts: [
            { label: "a", prompt: "Write 12 and 18 each as a product of prime factors in index form.", marks: 2 },
            { label: "b", prompt: "Work out the lowest common multiple of 12 and 18.", marks: 1 },
            { label: "c", prompt: "After how many beats do the drums next beat together?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) LCM of 12 and 18", answer: 36 },
              { label: "(c) Beats until they next coincide", answer: 36 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LCM from primes", statement: "Multiply every prime that appears, each to the highest power." },
              { kind: "principle", name: "LCM for repeating events", statement: "Two repeating events coincide after the LCM of their intervals." },
            ],
            steps: [
              { part: "a", reasoning: "Factorise 12.", working: "12=2^2\\times3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise 18.", working: "18=2\\times3^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take the highest power of each prime: $2^2\\times3^2$.", working: "4\\times9=36", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The drums coincide after the LCM of their intervals.", working: "36", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $12=2^2\\times3$, $18=2\\times3^2$ (b) $36$ (c) $36$ beats",
            commonErrors: ["Using the HCF, 6, for when they next coincide.", "Multiplying 12 and 18 to get 216."],
            examinerNote: "Follow through from (b) in (c) (ft).",
          },
        },
        {
          id: "mypm1-u1-prime-factors-hcf-lcm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Nadia is investigating prime factorisations. She writes $30=2\\times3\\times5$ and $45=3\\times3\\times5$.",
          parts: [
            { label: "a", prompt: "Write $45=3\\times3\\times5$ in index form.", marks: 1 },
            { label: "b", prompt: "Work out the HCF of 30 and 45.", marks: 1 },
            { label: "c", prompt: "Work out the LCM of 30 and 45.", marks: 1 },
            { label: "d", prompt: "Explain why the HCF must use the lowest powers and the LCM the highest powers.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) HCF of 30 and 45", answer: 15 },
              { label: "(c) LCM of 30 and 45", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF and LCM", statement: "HCF: common primes, lowest powers. LCM: all primes, highest powers." },
            ],
            steps: [
              { part: "a", reasoning: "Write the repeated factor as a power.", working: "45=3^2\\times5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Common primes are 3 and 5, each to the lowest power: $3^1\\times5^1$.", working: "15", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take every prime to its highest power: $2^1\\times3^2\\times5^1$.", working: "90", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The HCF must divide both numbers, so it cannot include a power of a prime that one number lacks; the LCM must be a multiple of both, so it needs every prime to the highest power present.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $45=3^2\\times5$ (b) $15$ (c) $90$ (d) HCF must divide both so uses lowest powers; LCM must be a multiple of both so uses highest powers",
            commonErrors: ["Writing $45=3\\times15$ or leaving $3\\times3$ uncombined.", "Swapping HCF and LCM."],
            examinerNote: "In (d) accept either a dividing argument or a multiple argument covering both cases.",
          },
        },
      ],
    },
    {
      id: "mypm1-u1-squares-cubes-roots",
      title: "Squares, cubes, roots and divisibility",
      skill: "Use square and cube numbers and their roots, apply divisibility rules and investigate patterns in square numbers.",
      lesson: {
        sections: [
          {
            heading: "Squares, cubes and roots",
            body: "A square number is $n^2=n\\times n$, such as $7^2=49$. A cube number is $n^3=n\\times n\\times n$, such as $4^3=64$. Roots undo powers: $\\sqrt{81}=9$ because $9^2=81$, and $\\sqrt[3]{125}=5$ because $5^3=125$.",
          },
          {
            heading: "Divisibility rules",
            body: "A number is divisible by:\n\n- 2 if its last digit is even\n- 3 if its digit sum is a multiple of 3\n- 5 if its last digit is 0 or 5\n- 9 if its digit sum is a multiple of 9\n- 10 if its last digit is 0\n\nFor example $531$ has digit sum $5+3+1=9$, so it is divisible by 3 and by 9.",
          },
          {
            heading: "Investigating patterns in square numbers",
            body: "Look at the differences between consecutive squares: $1, 4, 9, 16, 25$ have differences $3, 5, 7, 9$. The differences are the odd numbers. In general $n^2-(n-1)^2=2n-1$. Spotting a pattern, stating a rule and testing it is the heart of investigating.",
          },
        ],
        keyFormulas: [
          { name: "Square and cube", statement: "$n^2=n\\times n$ and $n^3=n\\times n\\times n$" },
          { name: "Difference of consecutive squares", statement: "$n^2-(n-1)^2=2n-1$" },
        ],
        workedExample: {
          problem: "Work out $\\sqrt{49}+2^3$.",
          solution: "$\\sqrt{49}=7$ and $2^3=2\\times2\\times2=8$. The total is $7+8=15$.",
        },
      },
      questions: [
        {
          id: "mypm1-u1-squares-cubes-roots-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $5^3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$125$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$243$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cube", statement: "$n^3=n\\times n\\times n$" },
            ],
            steps: [
              { reasoning: "Multiply 5 by itself three times.", working: "5\\times5\\times5=125", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $125$",
            commonErrors: ["Multiplying the base by the power: $5\\times3=15$.", "Squaring instead of cubing, giving 25."],
            examinerNote: "B1 for 125.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $\\sqrt{144}+\\sqrt[3]{27}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Roots", statement: "Square roots undo squaring and cube roots undo cubing." },
            ],
            steps: [
              { reasoning: "$12^2=144$ and $3^3=27$.", working: "\\sqrt{144}=12,\\quad \\sqrt[3]{27}=3", marks: 1, markCode: "M" },
              { reasoning: "Add the two roots.", working: "12+3=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
            commonErrors: ["Dividing 27 by 3 to get 9 for the cube root.", "Halving 144 to get 72 for the square root."],
            examinerNote: "M1 for one correct root. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The three-digit number $4\\square6$ is divisible by 9, where $\\square$ stands for a single missing digit. Find the missing digit.",
          response: { type: "numeric", parts: [{ label: "Missing digit", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Divisibility rule for 9", statement: "A number is divisible by 9 if and only if its digit sum is a multiple of 9." },
            ],
            steps: [
              { reasoning: "The digit sum of the number must be a multiple of 9.", working: "4+\\square+6=10+\\square", marks: 1, markCode: "M" },
              { reasoning: "The next multiple of 9 after 10 is 18, and 27 is too large because a digit is at most 9.", working: "10+\\square=18", marks: 1, markCode: "M" },
              { reasoning: "Solve for the digit. Check: $486\\div9=54$.", working: "\\square=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ (the number is 486)",
            commonErrors: ["Using the rule for 3 and giving 2, 5 or 8 without checking for 9.", "Thinking the last digit must be 0 or 5."],
            examinerNote: "M1 for digit sum expression. M1 for 18 identified. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Noor is investigating the differences between consecutive square numbers, such as $2^2-1^2$ and $3^2-2^2$.",
          parts: [
            { label: "a", prompt: "Work out $8^2-7^2$.", marks: 2 },
            { label: "b", prompt: "The differences $2^2-1^2$, $3^2-2^2$, $4^2-3^2$, $5^2-4^2$ are $3, 5, 7, 9$. Describe the pattern in these differences.", marks: 2 },
            { label: "c", prompt: "Use your pattern to predict $12^2-11^2$ without working out $12^2$ or $11^2$. Then check by calculating the squares.", marks: 2 },
            { label: "d", prompt: "Noor's rule is $n^2-(n-1)^2=2n-1$. Use it to find $31^2-30^2$, and explain why the difference between two consecutive squares is always an odd number.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $8^2-7^2$", answer: 15 },
              { label: "(c) $12^2-11^2$", answer: 23 },
              { label: "(d) $31^2-30^2$", answer: 61 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square number", statement: "$n^2=n\\times n$" },
              { kind: "principle", name: "Pattern and generalisation", statement: "A pattern becomes a rule when it is stated in general terms and tested on further cases." },
              { kind: "property", name: "Odd numbers", statement: "A number of the form $2n-1$ is odd for any whole number $n$." },
            ],
            steps: [
              { part: "a", reasoning: "Work out each square.", working: "8^2=64,\\quad 7^2=49", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract.", working: "64-49=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The differences are the odd numbers in order.", working: "3,\\ 5,\\ 7,\\ 9", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Each difference is 2 more than the one before, and the difference $n^2-(n-1)^2$ is the $(n-1)$th odd number after 1.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Continuing the odd numbers: $3,5,7,9,11,13,15,17,19,21,23$ gives the difference for $12^2-11^2$ as 23.", working: "12^2-11^2=23", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check: $144-121=23$.", working: "144-121=23", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $n=31$ into the rule.", working: "2\\times31-1=61", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2n$ is always even, and subtracting 1 from an even number gives an odd number, so the difference is always odd.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $15$ (b) the differences are consecutive odd numbers, increasing by 2 (c) $23$ (d) $61$; $2n-1$ is always odd.",
            commonErrors: ["Writing $8^2-7^2=1^2=1$.", "Saying the differences increase by 1 instead of 2.", "Testing only one example and calling it a proof."],
            examinerNote: "In (b) accept 'odd numbers' or 'goes up by 2 each time'. In (d) the reason must refer to $2n$ being even (oe).",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $6^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$216$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$36$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square", statement: "$n^2=n\\times n$" },
            ],
            steps: [
              { reasoning: "Multiply 6 by itself.", working: "6\\times6=36", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $36$",
            commonErrors: ["Multiplying the base by the power: $6\\times2=12$.", "Cubing instead of squaring, giving 216."],
            examinerNote: "B1 for 36.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\sqrt{64}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$32$" },
              { id: "b", text: "$16$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square root", statement: "The square root of $n$ is the number that, multiplied by itself, gives $n$." },
            ],
            steps: [
              { reasoning: "$8\\times8=64$, so the square root is 8.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8$",
            commonErrors: ["Halving 64 to get 32.", "Choosing 4 because $4\\times4=16$ and confusing the numbers."],
            examinerNote: "B1 for 8.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these numbers is divisible by 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$127$" },
              { id: "b", text: "$342$" },
              { id: "c", text: "$481$" },
              { id: "d", text: "$235$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Divisibility rule for 3", statement: "A number is divisible by 3 if its digit sum is a multiple of 3." },
            ],
            steps: [
              { reasoning: "Digit sums: $1+2+7=10$, $2+3+5=10$, $3+4+2=9$, $4+8+1=13$. Only 9 is a multiple of 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $342$",
            commonErrors: ["Checking the last digit instead of the digit sum.", "Adding the digits incorrectly."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $\\sqrt[3]{216}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cube root", statement: "The cube root of $n$ is the number that, multiplied by itself three times, gives $n$." },
            ],
            steps: [
              { reasoning: "Find a number whose cube is 216: $6^3=6\\times6\\times6$.", working: "6\\times6\\times6=216", marks: 1, markCode: "M" },
              { reasoning: "State the cube root.", working: "\\sqrt[3]{216}=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Dividing 216 by 3 to get 72.", "Giving the square root, $\\sqrt{216}\\approx14.7$."],
            examinerNote: "M1 for identifying 6 cubed. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $9^2-6^2$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 45 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square number", statement: "$n^2=n\\times n$" },
            ],
            steps: [
              { reasoning: "Evaluate each square.", working: "9^2=81,\\quad 6^2=36", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "81-36=45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$",
            commonErrors: ["Writing $(9-6)^2=9$.", "Computing $9^2-6=75$."],
            examinerNote: "M1 for both squares correct. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A number is divisible by 5. Which statement about its last digit must be true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is 0 or 5" },
              { id: "b", text: "The digit sum is a multiple of 5" },
              { id: "c", text: "It is even" },
              { id: "d", text: "It is 0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Divisibility rule for 5", statement: "A number is divisible by 5 if and only if its last digit is 0 or 5." },
            ],
            steps: [
              { reasoning: "Divisibility by 5 depends only on the last digit being 0 or 5; the digit-sum rule applies to 3 and 9, and 'even' applies to 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is 0 or 5",
            commonErrors: ["Confusing the rule for 5 with the digit-sum rule for 3 and 9."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The three-digit number $3\\square7$ is divisible by 9, where $\\square$ stands for a single missing digit. Find the missing digit.",
          response: { type: "numeric", parts: [{ label: "Missing digit", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Divisibility rule for 9", statement: "A number is divisible by 9 if and only if its digit sum is a multiple of 9." },
            ],
            steps: [
              { reasoning: "The digit sum must be a multiple of 9.", working: "3+\\square+7=10+\\square", marks: 1, markCode: "M" },
              { reasoning: "The next multiple of 9 after 10 is 18 ($27$ is impossible for a single digit).", working: "10+\\square=18", marks: 1, markCode: "M" },
              { reasoning: "Solve and check: $387\\div9=43$.", working: "\\square=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ (the number is 387)",
            commonErrors: ["Using the rule for 3 and giving 2, 5 or 8 without checking 9.", "Thinking the last digit must be 0 or 9."],
            examinerNote: "M1 for the digit sum. M1 for 18. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The differences between consecutive square numbers $1, 4, 9, 16, 25$ are $3, 5, 7, 9$. What is the next difference, between $36$ and $25$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern in squares", statement: "The differences between consecutive squares are the odd numbers, increasing by 2." },
            ],
            steps: [
              { reasoning: "The differences increase by 2 each time: $9+2=11$. Check: $36-25=11$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $11$",
            commonErrors: ["Adding 1 instead of 2 and giving 10."],
            examinerNote: "B1 for 11.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Hana wants to test whether a number is divisible by 3.",
          parts: [
            { label: "a", prompt: "Write down the rule for divisibility by 3.", marks: 1 },
            { label: "b", prompt: "Use the rule to decide whether 258 is divisible by 3.", marks: 1 },
            { label: "c", prompt: "Explain why the rule works, using the fact that $10=9+1$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Divisibility rule for 3", statement: "A number is divisible by 3 if its digit sum is a multiple of 3." },
            ],
            steps: [
              { part: "a", reasoning: "State the digit-sum rule.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Digit sum $2+5+8=15$, a multiple of 3, so yes.", working: "2+5+8=15", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each place value is a power of 10, and every power of 10 leaves remainder 1 when divided by 3 (since $10=9+1$), so the number leaves the same remainder as its digit sum.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) digit sum is a multiple of 3 (b) yes, $15$ is a multiple of 3 (c) powers of 10 all have remainder 1 mod 3, so the digit sum decides",
            commonErrors: ["Checking only the last digit.", "Giving the rule for 9 instead of 3."],
            examinerNote: "In (c) accept any correct explanation linking place values to multiples of 3 plus 1.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\sqrt{225}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square root", statement: "$\\sqrt{n}$ is the number whose square is $n$." },
            ],
            steps: [
              { reasoning: "$15\\times15=225$.", working: "\\sqrt{225}=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$15$",
            commonErrors: ["Halving 225 to get 112.5.", "Giving $225\\div2$ or a division answer."],
            examinerNote: "B1 for 15.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Omar is investigating square numbers.",
          parts: [
            { label: "a", prompt: "Work out $10^2-9^2$.", marks: 1 },
            { label: "b", prompt: "The differences $2^2-1^2$, $3^2-2^2$, $4^2-3^2$, $5^2-4^2$ are $3, 5, 7, 9$. Predict $10^2-9^2$ using the pattern, and check your prediction.", marks: 2 },
            { label: "c", prompt: "Use the rule $n^2-(n-1)^2=2n-1$ to find $50^2-49^2$.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $10^2-9^2$", answer: 19 },
              { label: "(c) $50^2-49^2$", answer: 99 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Difference of consecutive squares", statement: "$n^2-(n-1)^2=2n-1$, an odd number." },
              { kind: "principle", name: "Pattern and generalisation", statement: "A rule must be tested on further cases before it is trusted." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate the squares and subtract.", working: "100-81=19", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The differences are the odd numbers: $11, 13, 15, 17, 19$ for the 6th to 10th cases.", working: "19", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check by direct calculation: $100-81=19$, which matches.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $n=50$ into the rule.", working: "2\\times50-1=99", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $19$ (b) $19$, confirmed by $100-81$ (c) $99$",
            commonErrors: ["Predicting the wrong odd number by miscounting the position.", "Writing $2n$ instead of $2n-1$."],
            examinerNote: "In (b) the check must be shown for the second mark.",
          },
        },
        {
          id: "mypm1-u1-squares-cubes-roots-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Zoe is investigating which numbers are perfect squares and perfect cubes.",
          parts: [
            { label: "a", prompt: "Write down the first five square numbers.", marks: 1 },
            { label: "b", prompt: "Write down the first four cube numbers.", marks: 1 },
            { label: "c", prompt: "Find a number that is both a square number and a cube number (other than 1). Justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square and cube numbers", statement: "A square number is $n^2$; a cube number is $n^3$ for a whole number $n$." },
            ],
            steps: [
              { part: "a", reasoning: "List $1^2$ to $5^2$.", working: "1, 4, 9, 16, 25", marks: 1, markCode: "B" },
              { part: "b", reasoning: "List $1^3$ to $4^3$.", working: "1, 8, 27, 64", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Give a correct example, e.g. 64: $8^2=64$ and $4^3=64$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justify by showing it is both a square and a cube (also accept 4096 or other valid examples with correct justification).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1, 4, 9, 16, 25$ (b) $1, 8, 27, 64$ (c) e.g. $64=8^2=4^3$",
            commonErrors: ["Giving 36 as a cube number.", "Giving an example without showing both the square root and cube root."],
            examinerNote: "In (c) any correct example with both justifications earns full marks; 64 is the expected answer.",
          },
        },
      ],
    },
  ],
};
