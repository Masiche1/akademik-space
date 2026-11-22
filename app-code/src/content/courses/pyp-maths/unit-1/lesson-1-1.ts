import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "pypm-u1-lesson-1-1",
  code: "1-1",
  title: "Counting, Place Value and Adding and Subtracting",
  goal: "I CAN count to 1000, use place value, and add and subtract numbers confidently.",
  standards: [
    "PYP Mathematics: Number",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depending on its position — in $345$ the $4$ is worth $40$." },
    { term: "Ones, tens, hundreds", definition: "The three place values used for numbers up to $999$: $1$, $10$ and $100$." },
    { term: "Addition", definition: "Combining two or more amounts to find a total; written with a $+$ sign." },
    { term: "Subtraction", definition: "Finding the difference between two amounts; written with a $-$ sign." },
    { term: "Number line", definition: "A line showing numbers in order, useful for counting and adding or subtracting." },
    { term: "Estimate", definition: "A sensible guess at an answer before calculating, used to check if the answer makes sense." },
  ],
  concepts: [
    {
      id: "pypm-u1l1-c1-place-value",
      title: "Place value to 1000",
      skill: "Count to 1000 and use place value to read, write and order numbers.",
      lesson: {
        sections: [
          {
            heading: "Ones, tens and hundreds",
            body: "Every number up to $999$ has three place values. In $472$: the $4$ is in the **hundreds** place ($400$), the $7$ is in the **tens** place ($70$), and the $2$ is in the **ones** place ($2$). So $472 = 400 + 70 + 2$. The same digit means different amounts in different places — the $7$ in $472$ is $70$, but the $7$ in $725$ is $700$.",
          },
          {
            heading: "Counting and ordering",
            body: "We count forwards and backwards in $1$s, $2$s, $5$s and $10$s. To **order** numbers, compare the hundreds first, then the tens, then the ones: $345 < 354 < 435$. On a number line, numbers increase to the right and decrease to the left.",
          },
        ],
        keyFormulas: [
          { name: "Place value expansion", statement: "$472 = 400 + 70 + 2$" },
          { name: "Ordering rule", statement: "Compare hundreds, then tens, then ones" },
        ],
        workedExample: {
          problem: "What is the value of the digit $6$ in $693$?",
          solution: "The $6$ is in the hundreds place, so its value is $600$. Check: $693 = 600 + 90 + 3$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u1l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit $5$ in the number $258$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$500$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$50$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The value of a digit is the digit times the value of its place." },
            ],
            steps: [
              { reasoning: "The $5$ is in the tens place: $5 \\times 10 = 50$.", working: "5\\times10=50", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $50$",
            commonErrors: ["Choosing $5$ — that ignores the place value.", "Choosing $500$ — that would be if the 5 were in the hundreds place."],
          },
        },
        {
          id: "pypm-q-u1l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $600 + 40 + 8$ as a single number.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 648 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value expansion", statement: "Hundreds + tens + ones combine into one number." },
            ],
            steps: [
              { reasoning: "The hundreds digit is $6$, the tens digit is $4$, the ones digit is $8$.", working: "6\\underline{4}8", marks: 1, markCode: "M" },
              { reasoning: "Combine: $600+40+8=648$.", working: "648", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$648$",
            commonErrors: ["Writing $648$ as $6048$ — the places must be single digits."],
          },
        },
        {
          id: "pypm-q-u1l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Put these numbers in order from smallest to largest: $509$, $590$, $495$, $905$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$495, 509, 590, 905$" },
              { id: "b", text: "$905, 590, 509, 495$" },
              { id: "c", text: "$509, 495, 590, 905$" },
              { id: "d", text: "$495, 509, 905, 590$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ordering numbers", statement: "Compare hundreds first, then tens, then ones." },
            ],
            steps: [
              { reasoning: "Hundreds digits: $495$ has $4$; $509$ and $590$ have $5$; $905$ has $9$. So $495$ is smallest and $905$ is largest.", working: "4<5<9", marks: 1, markCode: "M" },
              { reasoning: "Between $509$ and $590$: both have hundreds $5$; tens digits $0$ and $9$, so $509<590$.", working: "509<590", marks: 1, markCode: "M" },
              { reasoning: "Full order: $495, 509, 590, 905$.", working: "495<509<590<905", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $495, 509, 590, 905$",
            commonErrors: ["Comparing only the first digit — $495$ and $509$ both start with $4$ but differ in tens."],
            examinerNote: "Verify: 495<509<590<905 is the correct ordering.",
          },
        },
        {
          id: "pypm-q-u1l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A school has $486$ pupils. $235$ are girls and the rest are boys.",
          parts: [
            { label: "a", prompt: "Write $486$ in expanded form (hundreds + tens + ones).", marks: 1 },
            { label: "b", prompt: "How many boys are there?", marks: 2 },
            { label: "c", prompt: "Order these class sizes from smallest to largest: $486$, $598$, $467$, $576$.", marks: 2 },
            { label: "d", prompt: "A new class of $58$ pupils joins. What is the new total number of pupils?", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expanded form value check: hundreds digit", answer: 400 },
              { label: "(b) Number of boys", answer: 251 },
              { label: "(c) Largest class size", answer: 598 },
              { label: "(d) New total pupils", answer: 544 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value expansion", statement: "$486 = 400 + 80 + 6$." },
              { kind: "principle", name: "Ordering numbers", statement: "Compare hundreds, then tens, then ones." },
            ],
            steps: [
              { part: "a", reasoning: "The hundreds digit $4$ is worth $400$.", working: "4\\times100=400", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Boys = total − girls: $486-235$.", working: "486-235=251", marks: 1, markCode: "M" },
              { part: "b", reasoning: "There are $251$ boys.", working: "251", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compare hundreds: $467$ and $486$ start $4$; $576$ and $598$ start $5$.", working: "4xx<5xx", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Largest is $598$ (hundreds $5$, tens $9$ beats $576$'s $7$).", working: "598", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the new class: $486+58$.", working: "486+58=544", marks: 1, markCode: "M" },
              { part: "d", reasoning: "New total is $544$.", working: "544", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $400$ (b) $251$ boys (c) $598$ largest (d) $544$ pupils",
            commonErrors: ["In (b), adding instead of subtracting: $486+235$.", "In (c), picking $576$ because $7>9$ wrongly compared digits out of place."],
            examinerNote: "(a) accepts the expanded form written out; the numeric part checks the hundreds value.",
          },
        },
        {
          id: "pypm-q-u1l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit $7$ in the number $374$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$37$" },
              { id: "b", text: "$70$" },
              { id: "c", text: "$700$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The value of a digit is the digit times the value of its place." },
            ],
            steps: [
              { reasoning: "The $7$ is in the tens place: $7 \\times 10 = 70$.", working: "7\\times10=70", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $70$",
            commonErrors: ["Choosing $7$ — that ignores the place value.", "Choosing $700$ — that would be if the 7 were in the hundreds place."],
          },
        },
        {
          id: "pypm-q-u1l1c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $500 + 60 + 9$ as a single number.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 569 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value expansion", statement: "Hundreds + tens + ones combine into one number." },
            ],
            steps: [
              { reasoning: "Hundreds digit $5$, tens digit $6$, ones digit $9$: $569$.", working: "569", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$569$",
            commonErrors: ["Writing $569$ as $5009$ — each place must be a single digit."],
          },
        },
        {
          id: "pypm-q-u1l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number is the largest: $412$, $421$ or $214$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$412$" },
              { id: "b", text: "$421$" },
              { id: "c", text: "They are all equal" },
              { id: "d", text: "$214$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ordering numbers", statement: "Compare hundreds first, then tens, then ones." },
            ],
            steps: [
              { reasoning: "$412$ and $421$ have hundreds digit $4$; $214$ has $2$, so $214$ is smallest.", working: "2<4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $421$",
            commonErrors: ["Choosing $412$ — compare tens digits: $1<2$, so $421$ is larger."],
          },
        },
        {
          id: "pypm-q-u1l1c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do we write the number $305$ in words?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three hundred and five" },
              { id: "b", text: "Three thousand and five" },
              { id: "c", text: "Thirty-five" },
              { id: "d", text: "Three hundred and fifty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reading numbers", statement: "Say the hundreds, then tens, then ones; $0$ tens is not read." },
            ],
            steps: [
              { reasoning: "$305$ has $3$ hundreds and $5$ ones, no tens: 'three hundred and five'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Three hundred and five",
            commonErrors: ["Choosing (b) — $305$ has zero tens, not fifty."],
          },
        },
        {
          id: "pypm-q-u1l1c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What number is $10$ more than $348$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$348$" },
              { id: "b", text: "$358$" },
              { id: "c", text: "$349$" },
              { id: "d", text: "$448$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value and adding ten", statement: "Adding $10$ increases the tens digit by $1$." },
            ],
            steps: [
              { reasoning: "$348 + 10$: the tens digit $4$ becomes $5$.", working: "348+10", marks: 1, markCode: "M" },
              { reasoning: "Answer: $358$.", working: "348+10=358", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $358$",
            commonErrors: ["Choosing $349$ — that is $1$ more, not $10$ more."],
          },
        },
        {
          id: "pypm-q-u1l1c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which number has the digit $8$ in the hundreds place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$128$" },
              { id: "b", text: "$288$" },
              { id: "c", text: "$108$" },
              { id: "d", text: "$812$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The hundreds digit is the first digit of a three-digit number." },
            ],
            steps: [
              { reasoning: "In $812$ the first digit $8$ is in the hundreds place.", working: "8\\underline{1}2", marks: 1, markCode: "M" },
              { reasoning: "In $288$, $128$ and $108$ the $8$ is in the ones or tens place, not the hundreds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $812$",
            commonErrors: ["Choosing $288$ — the $8$ is in the ones place there."],
          },
        },
        {
          id: "pypm-q-u1l1c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many tens are in the number $640$?",
          response: { type: "numeric", parts: [{ label: "Number of tens", answer: 64 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value", statement: "The tens digit counts groups of ten: $640 = 64 \\times 10$." },
            ],
            steps: [
              { reasoning: "Divide by ten: $640 \\div 10 = 64$.", working: "640\\div10=64", marks: 1, markCode: "M" },
              { reasoning: "There are $64$ tens in $640$.", working: "64", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$64$ tens",
            commonErrors: ["Answering $4$ — that is only the tens digit, not the number of tens."],
          },
        },
        {
          id: "pypm-q-u1l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what each digit in the number $258$ is worth, using place value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "Each digit's value depends on its position: hundreds, tens or ones." },
            ],
            steps: [
              { reasoning: "The $2$ is in the hundreds place, so it is worth $200$.", marks: 1, markCode: "M" },
              { reasoning: "The $5$ is in the tens place, worth $50$; the $8$ is in the ones place, worth $8$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $200 + 50 + 8 = 258$.", working: "200+50+8=258", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ hundreds $= 200$, $5$ tens $= 50$, $8$ ones $= 8$; total $258$.",
            commonErrors: ["Saying the digits are worth $2$, $5$ and $8$ — place value multiplies by the place."],
          },
        },
        {
          id: "pypm-q-u1l1c1-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $10$ less than $560$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 550 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value and subtracting ten", statement: "Subtracting $10$ decreases the tens digit by $1$." },
            ],
            steps: [
              { reasoning: "$560 - 10$: the tens digit $6$ becomes $5$.", working: "560-10", marks: 1, markCode: "M" },
              { reasoning: "Answer: $550$.", working: "560-10=550", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$550$",
            commonErrors: ["Answering $549$ — that is $1$ less, not $10$ less."],
          },
        },
        {
          id: "pypm-q-u1l1c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these numbers is closest to $500$: $487$, $512$ or $465$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$487$" },
              { id: "b", text: "$465$" },
              { id: "c", text: "They are equally close" },
              { id: "d", text: "$512$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Estimating on a number line", statement: "Distance from $500$ decides which number is closest." },
            ],
            steps: [
              { reasoning: "Distances: $500-487=13$, $512-500=12$, $500-465=35$.", working: "13,12,35", marks: 1, markCode: "M" },
              { reasoning: "$512$ is only $12$ away — the smallest distance.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $512$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $512$",
            commonErrors: ["Choosing $487$ — $13$ away, slightly more than $512$'s $12$."],
          },
        },
        {
          id: "pypm-q-u1l1c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A mystery number has $7$ hundreds, $0$ tens and $5$ ones. What is the number after $45$ is added to it?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 750 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Place value and addition", statement: "Build the number from its digits, then add." },
            ],
            steps: [
              { reasoning: "The number is $705$ ($700 + 0 + 5$).", working: "705", marks: 1, markCode: "M" },
              { reasoning: "Add $45$: $705 + 45$.", working: "705+45", marks: 1, markCode: "M" },
              { reasoning: "Answer: $750$.", working: "705+45=750", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$750$",
            commonErrors: ["Writing $745$ — forgetting the $0$ tens still leaves room for the $4$ tens from $45$."],
          },
        },
        {
          id: "pypm-q-u1l1c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use the digits $2$, $9$ and $5$ once each to make the largest and the smallest 3-digit numbers. Explain how you decided.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ordering by place value", statement: "Put the biggest digit in the highest place for the largest number; the smallest digit there for the smallest." },
            ],
            steps: [
              { reasoning: "Largest: put $9$ in hundreds, then $5$ in tens, $2$ in ones: $952$.", marks: 1, markCode: "M" },
              { reasoning: "Smallest: put $2$ in hundreds, then $5$ in tens, $9$ in ones: $259$.", marks: 1, markCode: "M" },
              { reasoning: "Hundreds place matters most, so the biggest/smallest digit goes there first.", marks: 1, markCode: "R" },
              { reasoning: "Check: $952 > 925 > 592 > 259$; $259$ is the smallest possible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Largest $952$, smallest $259$.",
            commonErrors: ["Making $952$ and $295$ — for the smallest, the hundreds digit must be the smallest digit $2$."],
          },
        },
      ],
    },
    {
      id: "pypm-u1l1-c2-add-subtract",
      title: "Adding and subtracting",
      skill: "Add and subtract numbers up to 1000 using efficient strategies.",
      lesson: {
        sections: [
          {
            heading: "Adding",
            body: "To add, line up the numbers by place value and add ones first, then tens, then hundreds — **carrying** when a column makes $10$ or more. $47 + 36$: ones $7+6=13$ (write $3$, carry $1$), tens $4+3+1=8$, answer $83$. Or use **partitioning**: $47+36 = (40+30)+(7+6) = 70+13 = 83$.",
          },
          {
            heading: "Subtracting",
            body: "To subtract, line up place values and subtract ones first, then tens, then hundreds — **borrowing** from the next column when needed. $52 - 27$: ones $2-7$ needs borrowing, $12-7=5$; tens $4-2=2$ after borrowing, answer $25$. Check answers by adding back: $25+27=52$.",
          },
        ],
        keyFormulas: [
          { name: "Column method", statement: "Ones → tens → hundreds; carry when $\\ge 10$, borrow when needed" },
          { name: "Check by inverse", statement: "Subtraction check: answer $+$ subtracted number $=$ starting number" },
        ],
        workedExample: {
          problem: "Work out $58 + 37$.",
          solution: "Ones: $8+7=15$ — write $5$, carry $1$. Tens: $5+3+1=9$. Answer: $95$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u1l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $34 + 25$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 59 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Addition", statement: "Add ones, then tens, carrying when a column reaches 10." },
            ],
            steps: [
              { reasoning: "Ones: $4+5=9$; tens: $3+2=5$; answer $59$.", working: "34+25=59", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$59$",
            commonErrors: ["Writing $59$ as $519$ — forgetting to combine tens properly."],
          },
        },
        {
          id: "pypm-q-u1l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $76 - 48$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 28 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtraction with borrowing", statement: "When ones cannot subtract, borrow 1 ten (=10 ones) from the tens column." },
            ],
            steps: [
              { reasoning: "Ones: $6-8$ needs borrowing: $16-8=8$; tens become $6$.", working: "16-8=8", marks: 1, markCode: "M" },
              { reasoning: "Tens: $6-4=2$; answer $28$. Check: $28+48=76$.", working: "76-48=28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$",
            commonErrors: ["Writing $38$ — subtracting the smaller digit from the larger in the ones column instead of borrowing."],
          },
        },
        {
          id: "pypm-q-u1l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bookshop sold $156$ books on Monday and $89$ books on Tuesday. How many books did it sell in total?",
          response: { type: "numeric", parts: [{ label: "Total books", answer: 245 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Addition in context", statement: "Total = Monday + Tuesday; line up place values and carry." },
            ],
            steps: [
              { reasoning: "Add ones: $6+9=15$ — write $5$, carry $1$.", working: "6+9=15", marks: 1, markCode: "M" },
              { reasoning: "Tens: $5+8+1=14$ — write $4$, carry $1$ to hundreds.", working: "5+8+1=14", marks: 1, markCode: "M" },
              { reasoning: "Hundreds: $1+0+1=2$; total $245$.", working: "156+89=245", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$245$ books",
            commonErrors: ["Forgetting the carried $1$ in the tens column, giving $235$."],
          },
        },
        {
          id: "pypm-q-u1l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A library had $425$ books. It lent out $137$ books, then received $96$ new books.",
          parts: [
            { label: "a", prompt: "How many books were left after lending?", marks: 2 },
            { label: "b", prompt: "How many books does the library have now?", marks: 2 },
            { label: "c", prompt: "How many more books would the library need to reach $500$?", marks: 2 },
            { label: "d", prompt: "Explain why checking $425 - 137$ by adding is a good idea.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Books left after lending", answer: 288 },
              { label: "(b) Books now", answer: 384 },
              { label: "(c) Books needed to reach 500", answer: 116 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtraction and addition", statement: "Subtract then add for multi-step problems; check by inverse operation." },
            ],
            steps: [
              { part: "a", reasoning: "$425-137$: ones $5-7$ borrow $15-7=8$; tens $1-3$ borrow $11-3=8$; hundreds $3-1=2$ → $288$.", working: "425-137=288", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer $288$.", working: "288", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the new books: $288+96$.", working: "288+96=384", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer $384$.", working: "384", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$500-384=116$.", working: "500-384=116", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer $116$.", working: "116", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Adding the answer back to $137$ should give $425$, confirming the subtraction.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $288$ (b) $384$ (c) $116$ (d) Adding back checks the answer.",
            commonErrors: ["In (b), subtracting $96$ instead of adding — new books increase the total."],
          },
        },
        {
          id: "pypm-q-u1l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $45 + 32$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$" },
              { id: "b", text: "$77$" },
              { id: "c", text: "$67$" },
              { id: "d", text: "$87$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Addition", statement: "Add ones, then tens." },
            ],
            steps: [
              { reasoning: "Ones: $5+2=7$; tens: $4+3=7$; answer $77$.", working: "45+32=77", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $77$",
            commonErrors: ["Choosing $13$ — that is $45-32$, subtraction not addition."],
          },
        },
        {
          id: "pypm-q-u1l1c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $58 - 23$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 35 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtraction", statement: "Subtract ones, then tens." },
            ],
            steps: [
              { reasoning: "Ones: $8-3=5$; tens: $5-2=3$; answer $35$.", working: "58-23=35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$35$",
            commonErrors: ["Writing $45$ — subtracting the smaller digit from the larger in each column."],
          },
        },
        {
          id: "pypm-q-u1l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best estimate for $50 + 48$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$98$" },
              { id: "b", text: "$90$" },
              { id: "c", text: "$88$" },
              { id: "d", text: "$108$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Estimating", statement: "Round to friendly numbers: $50+48$ is about $50+50$." },
            ],
            steps: [
              { reasoning: "$50 + 48$ is close to $50 + 50 = 100$; exactly it is $98$.", working: "50+48=98", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $98$",
            commonErrors: ["Choosing $108$ — that would need $58$ not $48$."],
          },
        },
        {
          id: "pypm-q-u1l1c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $67 + 25$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 92 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Addition with carrying", statement: "Ones $7+5=12$: write $2$, carry $1$ to the tens." },
            ],
            steps: [
              { reasoning: "Ones: $7+5=12$ (write $2$, carry $1$); tens: $6+2+1=9$; answer $92$.", working: "67+25=92", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$92$",
            commonErrors: ["Writing $812$ — forgetting to carry the ten properly."],
          },
        },
        {
          id: "pypm-q-u1l1c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $83 - 46$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 37 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtraction with borrowing", statement: "When ones cannot subtract, borrow 1 ten from the tens column." },
            ],
            steps: [
              { reasoning: "Ones: $3-6$ needs borrowing: $13-6=7$; tens become $7$.", working: "13-6=7", marks: 1, markCode: "M" },
              { reasoning: "Tens: $7-4=3$; answer $37$. Check: $37+46=83$.", working: "83-46=37", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$37$",
            commonErrors: ["Writing $43$ — subtracting smaller from larger digit-wise without borrowing."],
          },
        },
        {
          id: "pypm-q-u1l1c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: $\\square + 27 = 63$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90$" },
              { id: "b", text: "$36$" },
              { id: "c", text: "$26$" },
              { id: "d", text: "$46$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square + 27 = 63$ then $\\square = 63 - 27$." },
            ],
            steps: [
              { reasoning: "Use the inverse: $63 - 27 = 36$.", working: "63-27=36", marks: 1, markCode: "M" },
              { reasoning: "Check: $36 + 27 = 63$ — correct.", working: "36+27=63", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $36$",
            commonErrors: ["Choosing $90$ — that is $63+27$, the wrong direction."],
          },
        },
        {
          id: "pypm-q-u1l1c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $145 + 237$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 382 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Column addition", statement: "Add ones, then tens, then hundreds, carrying as needed." },
            ],
            steps: [
              { reasoning: "Ones: $5+7=12$ (write $2$, carry $1$); tens: $4+3+1=8$; hundreds: $1+2=3$.", working: "145+237", marks: 1, markCode: "M" },
              { reasoning: "Answer: $382$.", working: "145+237=382", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$382$",
            commonErrors: ["Writing $372$ — forgetting the carried $1$ in the tens column."],
          },
        },
        {
          id: "pypm-q-u1l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why checking a subtraction answer by adding is a good idea. Use $425 - 137 = 288$ as your example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Addition undoes subtraction, so adding back checks the answer." },
            ],
            steps: [
              { reasoning: "Subtraction and addition are inverse operations.", marks: 1, markCode: "R" },
              { reasoning: "Add the answer to the number subtracted: $288 + 137$.", working: "288+137", marks: 1, markCode: "M" },
              { reasoning: "$288+137=425$, matching the starting number — the subtraction is correct.", working: "288+137=425", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adding back: $288+137=425$ confirms the answer.",
            commonErrors: ["Saying 'just recheck' without using the inverse operation."],
          },
        },
        {
          id: "pypm-q-u1l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain step by step how to work out $52 - 27$, including any borrowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtraction with borrowing", statement: "Borrow 1 ten (= 10 ones) when the ones digit is too small." },
            ],
            steps: [
              { reasoning: "Ones: $2-7$ is impossible, so borrow 1 ten: $12-7=5$; tens digit drops from $5$ to $4$.", working: "12-7=5", marks: 1, markCode: "M" },
              { reasoning: "Tens: $4-2=2$.", working: "4-2=2", marks: 1, markCode: "M" },
              { reasoning: "Answer: $25$. Check: $25+27=52$.", working: "52-27=25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25$",
            commonErrors: ["Writing $35$ — subtracting $7-2$ instead of borrowing first."],
          },
        },
        {
          id: "pypm-q-u1l1c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Tom had $300$ stickers. He gave away $145$ stickers, then received $50$ more as a gift. How many stickers does he have now?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$395$" },
              { id: "b", text: "$205$" },
              { id: "c", text: "$255$" },
              { id: "d", text: "$155$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Multi-step problems", statement: "Subtract what is given away, then add what is received." },
            ],
            steps: [
              { reasoning: "After giving away: $300 - 145 = 155$.", working: "300-145=155", marks: 1, markCode: "M" },
              { reasoning: "After the gift: $155 + 50 = 205$.", working: "155+50=205", marks: 1, markCode: "M" },
              { reasoning: "Answer: $205$ stickers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $205$",
            commonErrors: ["Choosing $255$ — computing $300-145+100$ or similar; the gift is only $50$."],
          },
        },
        {
          id: "pypm-q-u1l1c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $600 - 275$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 325 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtraction across zeros", statement: "Borrow through the tens when the tens digit is $0$." },
            ],
            steps: [
              { reasoning: "Ones: borrow for $0-5$: $10-5=5$; tens become $9$ after borrowing through hundreds.", working: "10-5=5", marks: 1, markCode: "M" },
              { reasoning: "Tens: $9-7=2$; hundreds: $5-2=3$.", working: "9-7=2", marks: 1, markCode: "M" },
              { reasoning: "Answer: $325$. Check: $325+275=600$.", working: "600-275=325", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$325$",
            commonErrors: ["Writing $425$ — not borrowing correctly through the zero tens digit."],
          },
        },
        {
          id: "pypm-q-u1l1c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A stationery shop had $480$ pens. It sold $196$ pens on Monday, then bought $125$ new pens on Tuesday. How many pens does the shop have now? Explain each step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Multi-step word problems", statement: "Selling subtracts, buying adds — work in the order events happen." },
            ],
            steps: [
              { reasoning: "After selling: $480 - 196 = 284$ pens.", working: "480-196=284", marks: 1, markCode: "M" },
              { reasoning: "After buying: $284 + 125 = 409$ pens.", working: "284+125=409", marks: 1, markCode: "M" },
              { reasoning: "Order matters: subtract first, then add.", marks: 1, markCode: "R" },
              { reasoning: "The shop has $409$ pens.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$409$ pens",
            commonErrors: ["Adding $196$ instead of subtracting — sold pens reduce the stock."],
          },
        },
      ],
    },
  ],
};
