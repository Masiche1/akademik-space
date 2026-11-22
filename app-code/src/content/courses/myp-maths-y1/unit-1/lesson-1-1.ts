import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypm1-u1-lesson-1-1",
  code: "1-1",
  title: "Integers and Order of Operations",
  goal: "I CAN order and round numbers, use the order of operations with brackets, and calculate with negative numbers in real-life contexts.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Place value", definition: "The value of a digit decided by its position in a number, for example the 7 in 3.472 is worth 7 hundredths." },
    { term: "Decimal place", definition: "A position to the right of the decimal point. The first decimal place is tenths, the second is hundredths." },
    { term: "Rounding", definition: "Replacing a number with a nearby, simpler number, such as the nearest thousand or a given number of decimal places." },
    { term: "Integer", definition: "A whole number, which may be positive, negative or zero." },
    { term: "Directed number", definition: "A number with a sign that shows direction from zero, such as $+5$ or $-5$." },
    { term: "Order of operations", definition: "The agreed order for evaluating an expression: brackets, then indices, then division and multiplication, then addition and subtraction." },
  ],
  concepts: [
    {
      id: "mypm1-u1-place-value-order-ops",
      title: "Place value, rounding and order of operations",
      skill: "Use place value to order and round numbers, and evaluate expressions with brackets in the correct order.",
      lesson: {
        sections: [
          {
            heading: "Place value, ordering and rounding",
            body: "Each digit has a value that depends on its position. In $45\\,306$ the digit 3 is worth 300. To order decimals, compare digits from the left, one place at a time: $0.45 < 0.5$ because 4 tenths is less than 5 tenths.\n\nTo round, look at the digit **after** the place you are rounding to. If it is 5 or more, round up; otherwise leave the digit unchanged. For example $3.4729$ is $3.47$ to 2 decimal places.",
          },
          {
            heading: "The order of operations",
            body: "Work out brackets first, then indices (powers), then division and multiplication from left to right, then addition and subtraction from left to right. So $6+4\\times2=14$, not 20, because multiplication comes before addition.",
          },
        ],
        keyFormulas: [
          { name: "Rounding rule", statement: "Digit after the rounding place is 5 or more: round up. Otherwise: round down." },
          { name: "Order of operations", statement: "Brackets, Indices, Division and Multiplication, Addition and Subtraction" },
        ],
        workedExample: {
          problem: "Work out $(9+3)\\div 4+2\\times5$.",
          solution: "Brackets: $9+3=12$. Division and multiplication: $12\\div4=3$ and $2\\times5=10$. Addition: $3+10=13$.",
        },
      },
      questions: [
        {
          id: "mypm1-u1-place-value-order-ops-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit 7 in the number $3.472$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$0.007$" },
              { id: "c", text: "$0.07$" },
              { id: "d", text: "$0.7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "After the decimal point the places are tenths, hundredths, thousandths." },
            ],
            steps: [
              { reasoning: "The 4 is in the tenths place, so the 7 is in the hundredths place.", working: "7\\times0.01=0.07", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.07$",
            commonErrors: ["Choosing $0.7$ by counting the 7 as the first decimal place.", "Choosing $0.007$ by counting from the wrong end."],
            examinerNote: "B1 for 0.07 oe.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Round $5.0863$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 5.09 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rounding rule", statement: "Look at the digit after the rounding place. If it is 5 or more, round up." },
            ],
            steps: [
              { reasoning: "The third decimal place is 6, which is 5 or more, so the second decimal place (8) rounds up.", working: "5.0\\underline{8}6 \\to 5.09", marks: 1, markCode: "M" },
              { reasoning: "Write the rounded number.", working: "5.09", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.09$",
            commonErrors: ["Truncating to $5.08$ without rounding up.", "Rounding to 1 decimal place and giving $5.1$."],
            examinerNote: "M1 for identifying that the deciding digit is 6 (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $(24-4\\times3)\\div2^2+5$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Brackets first, and inside the bracket multiply before subtracting; then indices, division, then addition." },
            ],
            steps: [
              { reasoning: "Inside the bracket, multiply before subtracting.", working: "24-4\\times3=24-12=12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the index, then divide.", working: "12\\div2^2=12\\div4=3", marks: 1, markCode: "M" },
              { reasoning: "Finally add.", working: "3+5=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Working out $24-4=20$ first, because subtraction comes before multiplication.", "Dividing by 2 and then squaring, giving $(12\\div2)^2$."],
            examinerNote: "M1 for the bracket evaluated as 12. M1 for dividing by 4. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The populations of four towns are: Aldor $45\\,306$, Brenna $45\\,063$, Corvin $43\\,650$ and Dunmore $45\\,360$.",
          parts: [
            { label: "a", prompt: "Write down the value of the digit 3 in $45\\,306$.", marks: 1 },
            { label: "b", prompt: "Write the four populations in order, smallest first. Give the population of the town that is second largest.", marks: 2 },
            { label: "c", prompt: "Round the population of Aldor to the nearest thousand.", marks: 2 },
            { label: "d", prompt: "Sam works out $6+4\\times2.5$ on paper and gets 25. Work out the correct answer and explain Sam's mistake.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Value of the digit 3", answer: 300 },
              { label: "(b) Second largest population", answer: 45306 },
              { label: "(c) Aldor to the nearest thousand", answer: 45000 },
              { label: "(d) Correct value of $6+4\\times2.5$", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The value of a digit is the digit multiplied by the value of its place." },
              { kind: "principle", name: "Rounding rule", statement: "To round to the nearest thousand, look at the hundreds digit: 5 or more rounds up." },
              { kind: "principle", name: "Order of operations", statement: "Multiplication is done before addition." },
            ],
            steps: [
              { part: "a", reasoning: "The 3 is in the hundreds place.", working: "3\\times100=300", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Compare the numbers from the left. All start 4, then compare the thousands, hundreds and tens digits.", working: "43\\,650<45\\,063<45\\,306<45\\,360", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The second largest is the third in the list.", working: "45\\,306", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The hundreds digit is 3, which is less than 5, so the thousands digit stays the same.", working: "45\\,306 \\to 45\\,000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write the rounded number.", working: "45\\,000", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply before adding.", working: "4\\times2.5=10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add.", working: "6+10=16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sam added first: $6+4=10$, then multiplied $10\\times2.5=25$. Multiplication must be done before addition.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $300$ (b) $45\\,306$ (c) $45\\,000$ (d) $16$; Sam added before multiplying.",
            commonErrors: ["Giving the value of the 3 as 3 or 3000.", "Ordering by the last digits instead of from the left.", "Working left to right ignoring the order of operations."],
            examinerNote: "In (d) the explanation must mention that multiplication comes before addition (oe).",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit 6 in the number $7.068$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.006$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$0.06$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "After the decimal point the places are tenths, hundredths, thousandths." },
            ],
            steps: [
              { reasoning: "The 0 is in the tenths place, so the 6 is in the hundredths place.", working: "6\\times0.01=0.06", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.06$",
            commonErrors: ["Choosing $0.6$ by treating the 6 as the first decimal place.", "Choosing $0.006$ by counting an extra place."],
            examinerNote: "B1 for 0.06.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round $4.376$ to 1 decimal place.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$4.3$" },
              { id: "c", text: "$4.38$" },
              { id: "d", text: "$4.4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rounding rule", statement: "Look at the digit after the rounding place. If it is 5 or more, round up." },
            ],
            steps: [
              { reasoning: "The digit after the tenths place is 7, which is 5 or more, so 3 rounds up to 4.", working: "4.3\\underline{7}6 \\to 4.4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $4.4$",
            commonErrors: ["Choosing $4.3$ by truncating instead of rounding.", "Rounding to 2 decimal places and choosing $4.38$."],
            examinerNote: "B1 for 4.4.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these numbers is the largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.77$" },
              { id: "b", text: "$0.07$" },
              { id: "c", text: "$0.7$" },
              { id: "d", text: "$0.707$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ordering decimals", statement: "Compare digits from the left, one decimal place at a time." },
            ],
            steps: [
              { reasoning: "All start 0.7 except $0.07$ which is smaller. Between $0.707$ and $0.77$, the hundredths digit decides: 7 beats 0.", working: "0.77>0.707>0.7>0.07", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.77$",
            commonErrors: ["Choosing $0.707$ because it has more digits, thinking more digits means a larger number.", "Choosing $0.07$ by misreading the place value."],
            examinerNote: "B1 for choice (d).",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Round $0.0896$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.09 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rounding rule", statement: "If the digit after the rounding place is 5 or more, round up; otherwise leave the digit unchanged." },
            ],
            steps: [
              { reasoning: "The third decimal place is 9, which is 5 or more, so the second decimal place (8) rounds up to 9.", working: "0.08\\underline{9}6 \\to 0.09", marks: 1, markCode: "M" },
              { reasoning: "Write the rounded number.", working: "0.09", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.09$",
            commonErrors: ["Giving $0.08$ by truncating.", "Rounding to 1 decimal place and giving $0.1$."],
            examinerNote: "M1 for identifying 9 as the deciding digit (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $20-3\\times(6-4)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Brackets first, then multiplication, then subtraction." },
            ],
            steps: [
              { reasoning: "Evaluate the bracket, then multiply.", working: "6-4=2,\\quad 3\\times2=6", marks: 1, markCode: "M" },
              { reasoning: "Subtract from 20.", working: "20-6=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Working left to right: $(20-3)\\times(6-4)=34$.", "Multiplying 3 by 6 before subtracting 4."],
            examinerNote: "M1 for $3\\times2=6$ seen. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out $18\\div3+2\\times4-5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$19$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Division and multiplication are done before addition and subtraction." },
            ],
            steps: [
              { reasoning: "Divide and multiply first: $18\\div3=6$ and $2\\times4=8$. Then $6+8-5=9$.", working: "6+8-5=9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: ["Working strictly left to right and getting 19 or 11.", "Adding 3 and 4 before dividing and multiplying."],
            examinerNote: "B1 for 9.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $2^3+50\\div(9-4)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Brackets, then indices, then division, then addition." },
            ],
            steps: [
              { reasoning: "Evaluate the bracket and the index.", working: "9-4=5,\\quad 2^3=8", marks: 1, markCode: "M" },
              { reasoning: "Divide before adding.", working: "50\\div5=10", marks: 1, markCode: "M" },
              { reasoning: "Add the two results.", working: "8+10=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Dividing 50 by 9 before subtracting 4.", "Computing $2^3=6$ or $2\\times3=6$."],
            examinerNote: "M1 for the bracket or index. M1 for 50/5 = 10. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A piece of string is $2.346$ m long. To the nearest centimetre, how long is it, in metres? (1 m = 100 cm)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.3$ m" },
              { id: "b", text: "$2.4$ m" },
              { id: "c", text: "$2.34$ m" },
              { id: "d", text: "$2.35$ m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rounding rule", statement: "Nearest centimetre is 2 decimal places in metres. Round up when the next digit is 5 or more." },
            ],
            steps: [
              { reasoning: "The third decimal place is 6, which is 5 or more, so the hundredths digit 4 rounds up to 5.", working: "2.34\\underline{6} \\to 2.35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2.35$ m",
            commonErrors: ["Rounding to 1 decimal place and choosing $2.3$ or $2.4$.", "Rounding to the nearest 0.01 m incorrectly as $2.34$."],
            examinerNote: "B1 for 2.35.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Liam wants to round a number to 2 decimal places.",
          parts: [
            { label: "a", prompt: "Write down the rule he should use, in words.", marks: 1 },
            { label: "b", prompt: "Apply the rule to round $3.0471$ to 2 decimal places.", marks: 1 },
            { label: "c", prompt: "Explain why $3.0471$ does not round to $3.05$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rounding rule", statement: "Look at the digit immediately after the place you are rounding to; round up if it is 5 or more." },
            ],
            steps: [
              { part: "a", reasoning: "State that the deciding digit is the third decimal place (the digit after the hundredths place).", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The third decimal digit is 7, so the hundredths digit 4 rounds up to 5.", working: "3.04\\underline{7}1 \\to 3.05", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Rounding to 2 decimal places only looks at the next digit, which is 7, not at the later digit 1; a digit of 1 later in the number cannot force the hundredths digit up.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Look at the third decimal place; round up if it is 5 or more (b) $3.05$ (c) only the next digit (7) decides, and 7 already rounds up",
            commonErrors: ["Looking at the last digit instead of the digit after the rounding place.", "Saying 3.05 is wrong without identifying the deciding digit."],
            examinerNote: "The rule in (a) must mention the digit after the rounding place (oe). In (c) the point must be about only the next digit deciding.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $8+6\\div2$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Division is done before addition." },
            ],
            steps: [
              { reasoning: "Divide first, then add.", working: "8+3=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Working left to right: $(8+6)\\div2=7$."],
            examinerNote: "B1 for 11.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Four athletes recorded their best times for a 100 m race: Amara $12.486$ s, Ben $12.468$ s, Cato $12.496$ s and Dara $12.456$ s.",
          parts: [
            { label: "a", prompt: "Write down the value of the digit 8 in Amara's time, $12.486$.", marks: 1 },
            { label: "b", prompt: "Round each time to the nearest tenth of a second, and write down which athlete has the fastest (smallest) rounded time.", marks: 2 },
            { label: "c", prompt: "Work out $3^2\\times(20-18)+14$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Value of the digit 8", answer: 0.08 },
              { label: "(b) Fastest rounded time", answer: 12.5, unit: "s" },
              { label: "(c) Value of the expression", answer: 32 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The value of a digit depends on its position." },
              { kind: "principle", name: "Rounding rule", statement: "Round up when the digit after the rounding place is 5 or more." },
              { kind: "principle", name: "Order of operations", statement: "Brackets, indices, multiplication, addition." },
            ],
            steps: [
              { part: "a", reasoning: "The 8 is in the hundredths place.", working: "8\\times0.01=0.08", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Round each time: $12.5, 12.5, 12.5, 12.5$ seconds. All round to $12.5$ s to 1 decimal place, so any of them could be written; the athlete with the smallest exact time is Dara at $12.456$ s.", working: "12.456<12.468<12.486<12.496", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the fastest rounded time: $12.5$ s.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate the bracket and the index, then multiply.", working: "20-18=2,\\quad 3^2=9,\\quad 9\\times2=18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add 14.", working: "18+14=32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.08$ s (b) all round to $12.5$ s; Dara has the fastest exact time $12.456$ s (c) $32$",
            commonErrors: ["Giving the value of 8 as 8 or 0.8.", "Rounding to 2 decimal places instead of 1.", "Computing $3^2=6$."],
            examinerNote: "In (b) follow through from the ordering. Accept 'all equal after rounding' with the correct smallest exact time named.",
          },
        },
        {
          id: "mypm1-u1-place-value-order-ops-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tom works out $4+6\\times3$ on paper and writes: \"$4+6=10$ and $10\\times3=30$, so the answer is 30.\"",
          parts: [
            { label: "a", prompt: "Explain Tom's mistake.", marks: 2 },
            { label: "b", prompt: "Work out the correct value of $4+6\\times3$.", marks: 1 },
            { label: "c", prompt: "Write down the general rule Tom should have used.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Multiplication is carried out before addition, whatever the order the numbers are written in." },
            ],
            steps: [
              { part: "a", reasoning: "Tom added before multiplying. The operations must be done in the agreed order, not left to right.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Multiplication must be done first: $6\\times3=18$, then $4+18=22$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Evaluate in the correct order.", working: "4+18=22", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State BIDMAS: brackets, indices, division and multiplication, addition and subtraction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) He added before multiplying; multiplication comes first (b) $22$ (c) brackets, indices, division and multiplication, then addition and subtraction",
            commonErrors: ["Saying only that the answer is wrong without identifying the order issue.", "Writing the rule in the wrong order."],
            examinerNote: "In (a) both the mistake and the correct order must be identified for both marks.",
          },
        },
      ],
    },
    {
      id: "mypm1-u1-directed-numbers",
      title: "Directed numbers",
      skill: "Add, subtract, multiply and divide negative numbers and use them in contexts such as temperature and bank balances.",
      lesson: {
        sections: [
          {
            heading: "Adding and subtracting negative numbers",
            body: "Use a number line. Adding a positive moves right; adding a negative moves left. Subtracting a negative is the same as adding the positive: $5-(-2)=5+2=7$. So $-8+3=-5$ and $-6-(-9)=3$.",
          },
          {
            heading: "Multiplying and dividing",
            body: "Two numbers with the **same** sign give a positive answer; numbers with **different** signs give a negative answer. So $(-3)\\times(-7)=21$, $(-12)\\div3=-4$ and $4\\times(-5)=-20$.",
          },
          {
            heading: "Directed numbers in context",
            body: "A negative bank balance means the account is overdrawn. A temperature below zero is negative. A fall in temperature or a payment out of an account is a subtraction.",
          },
        ],
        keyFormulas: [
          { name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
          { name: "Signs in multiplication and division", statement: "Same signs give $+$; different signs give $-$" },
        ],
        workedExample: {
          problem: "The temperature at midnight is $-4^\\circ\\text{C}$ and it rises by $9^\\circ\\text{C}$. What is the new temperature?",
          solution: "A rise means add: $-4+9=5$. The new temperature is $5^\\circ\\text{C}$.",
        },
      },
      questions: [
        {
          id: "mypm1-u1-directed-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $-8+3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-11$" },
              { id: "b", text: "$-5$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number line", statement: "Adding a positive number moves to the right on the number line." },
            ],
            steps: [
              { reasoning: "Start at $-8$ and move 3 to the right.", working: "-8+3=-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $-5$",
            commonErrors: ["Adding the sizes and keeping the negative sign, giving $-11$.", "Ignoring the sign of 8 and giving $5$."],
            examinerNote: "B1 for -5.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(-12)\\div3-(-5)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Signs in division", statement: "Different signs give a negative answer." },
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
            ],
            steps: [
              { reasoning: "Divide first. Different signs give a negative answer.", working: "(-12)\\div3=-4", marks: 1, markCode: "M" },
              { reasoning: "Subtracting $-5$ is the same as adding 5.", working: "-4-(-5)=-4+5=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Writing $(-12)\\div3=4$.", "Treating $-(-5)$ as $-5$ and giving $-9$."],
            examinerNote: "M1 for -4. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Mara's bank account has a balance of $-35$ euros (she is overdrawn). She pays in 120 euros and then pays out 90 euros. Work out her new balance, in euros.",
          response: { type: "numeric", parts: [{ label: "New balance", answer: -5, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Directed numbers in context", statement: "Money paid in is added to the balance; money paid out is subtracted. A negative balance means overdrawn." },
            ],
            steps: [
              { reasoning: "Add the deposit to the starting balance.", working: "-35+120=85", marks: 1, markCode: "M" },
              { reasoning: "Subtract the payment out.", working: "85-90", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The balance is negative, so the account is overdrawn by 5 euros.", working: "-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-5$ euros (overdrawn by 5 euros)",
            commonErrors: ["Adding the payment out, giving 175.", "Writing $-35+120=-85$."],
            examinerNote: "Accept -35 + 120 - 90 in one line for M2. A1 for -5.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Look at this pattern of products.\n\n$3\\times(-2)=-6$\n\n$2\\times(-2)=-4$\n\n$1\\times(-2)=-2$\n\n$0\\times(-2)=0$",
          parts: [
            { label: "a", prompt: "Continue the pattern to work out $(-1)\\times(-2)$.", marks: 1 },
            { label: "b", prompt: "Continue the pattern to work out $(-5)\\times(-2)$.", marks: 1 },
            { label: "c", prompt: "Use the pattern to explain why a negative number multiplied by a negative number gives a positive answer.", marks: 3 },
            { label: "d", prompt: "The temperature at midnight is $-4^\\circ\\text{C}$. It falls by $3^\\circ\\text{C}$ every hour for 3 hours. Work out the temperature, in $^\\circ\\text{C}$, after 3 hours.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $(-1)\\times(-2)$", answer: 2 },
              { label: "(b) $(-5)\\times(-2)$", answer: 10 },
              { label: "(d) Temperature after 3 hours", answer: -13, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "Each answer in the pattern is 2 more than the one before." },
              { kind: "law", name: "Signs in multiplication", statement: "The product of two negative numbers is positive." },
            ],
            steps: [
              { part: "a", reasoning: "The first number goes down by 1 each time, so the answer goes up by 2.", working: "0+2=2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Continue the pattern: $(-1)\\to2$, $(-2)\\to4$, $(-3)\\to6$, $(-4)\\to8$, $(-5)\\to10$.", working: "(-5)\\times(-2)=10", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Describe the pattern: as the first number decreases by 1, the answer increases by 2.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The pattern continues past zero, so the answers become positive: $2, 4, 6, \\ldots$", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude that (negative) $\\times$ (negative) is positive, consistent with the rule that same signs give a positive answer.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Three falls of 3 degrees is a change of $3\\times(-3)$.", working: "3\\times(-3)=-9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the change to the starting temperature.", working: "-4+(-9)=-13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ (b) $10$ (c) answers rise by 2 as the first number falls by 1, passing zero, so negative times negative is positive (d) $-13^\\circ\\text{C}$",
            commonErrors: ["Writing $(-1)\\times(-2)=-2$.", "Giving $-4-3=-7$ in (d), applying only one fall."],
            examinerNote: "In (c) the pattern of +2 must be described explicitly. In (d) accept -4 - 3 - 3 - 3.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $-6+9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$-3$" },
              { id: "d", text: "$-15$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number line", statement: "Adding a positive number moves to the right on the number line." },
            ],
            steps: [
              { reasoning: "Start at $-6$ and move 9 to the right: $-6+9=3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Adding the sizes and keeping the negative sign, giving $-15$.", "Subtracting to give $-3$."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $-4-(-7)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3$" },
              { id: "b", text: "$-11$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
            ],
            steps: [
              { reasoning: "Subtracting $-7$ is the same as adding 7: $-4+7=3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $3$",
            commonErrors: ["Writing $-4-7=-11$.", "Giving $-3$ by treating the two negatives as cancelling."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $(-5)\\times(-4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$-9$" },
              { id: "c", text: "$-20$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Signs in multiplication", statement: "Same signs give a positive answer." },
            ],
            steps: [
              { reasoning: "Two negatives multiply to a positive: $5\\times4=20$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $20$",
            commonErrors: ["Giving $-20$ by keeping the negative sign.", "Adding 5 and 4 to get 9."],
            examinerNote: "B1 for 20.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(-18)\\div(-6)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Signs in division", statement: "Same signs give a positive answer." },
            ],
            steps: [
              { reasoning: "Two negatives give a positive answer: $18\\div6$.", working: "(-18)\\div(-6)=3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Writing $-3$ by treating the signs as different.", "Dividing 18 by 6 incorrectly."],
            examinerNote: "M1 for the sign decision. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $-7+12-(-3)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
            ],
            steps: [
              { reasoning: "Rewrite the subtraction of a negative as an addition, then work left to right.", working: "-7+12+3=5+3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Treating $-(-3)$ as $-3$ and giving 2.", "Computing $-7+12=-5$."],
            examinerNote: "M1 for $-7+12+3$ or equivalent. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The temperature at noon is $3^\\circ\\text{C}$. By midnight it has fallen by $8^\\circ\\text{C}$. What is the temperature at midnight?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5^\\circ\\text{C}$" },
              { id: "b", text: "$5^\\circ\\text{C}$" },
              { id: "c", text: "$11^\\circ\\text{C}$" },
              { id: "d", text: "$-11^\\circ\\text{C}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Directed numbers in context", statement: "A fall in temperature is a subtraction, which may give a negative answer." },
            ],
            steps: [
              { reasoning: "A fall of 8 means subtract 8: $3-8=-5$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-5^\\circ\\text{C}$",
            commonErrors: ["Adding to get $11^\\circ\\text{C}$.", "Writing $-11^\\circ\\text{C}$ by subtracting from zero."],
            examinerNote: "B1 for -5 °C.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ravi's bank account has a balance of $-20$ euros (he is overdrawn). He pays in 45 euros and then makes a payment of 60 euros. Work out his new balance, in euros.",
          response: { type: "numeric", parts: [{ label: "New balance", answer: -35, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Directed numbers in context", statement: "Money paid in is added to the balance; money paid out is subtracted. A negative balance means overdrawn." },
            ],
            steps: [
              { reasoning: "Add the deposit to the starting balance.", working: "-20+45=25", marks: 1, markCode: "M" },
              { reasoning: "Subtract the payment out.", working: "25-60", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The balance is negative, so the account is overdrawn by 35 euros.", working: "-35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-35$ euros (overdrawn by 35 euros)",
            commonErrors: ["Adding the payment out, giving 85.", "Writing $-20+45=-25$."],
            examinerNote: "Accept $-20+45-60$ in one line for full marks (oe).",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these has a positive answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-4)\\div(-2)\\times(-3)$" },
              { id: "b", text: "$(-2)\\times(-3)\\div(-2)$" },
              { id: "c", text: "$(-6)\\div(-3)$" },
              { id: "d", text: "$(-5)+(-7)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Signs in multiplication and division", statement: "Same signs give a positive answer; different signs give a negative answer." },
            ],
            steps: [
              { reasoning: "Evaluate each: (a) $6\\div(-2)=-3$; (b) $2\\times(-3)=-6$; (c) $(-6)\\div(-3)=2$; (d) $-12$. Only (c) is positive.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Stopping after the first operation, for example choosing (a) after seeing $(-2)\\times(-3)=6$."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Aisha is confused about subtracting negative numbers.",
          parts: [
            { label: "a", prompt: "Write down the rule for subtracting a negative number, using letters.", marks: 1 },
            { label: "b", prompt: "Explain, using a number line or a bank balance, why $5-(-2)=7$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
              { kind: "principle", name: "Number line", statement: "Subtracting a positive moves left; subtracting a negative moves right." },
            ],
            steps: [
              { part: "a", reasoning: "State the rule: subtracting a negative is the same as adding the positive.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Give a correct interpretation, for example removing a debt of 2 euros from a balance of 5 euros, or moving 2 to the right from 5.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Conclude that the result is 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a-(-b)=a+b$ (b) removing $-2$ adds 2, so $5+2=7$",
            commonErrors: ["Writing $a-(-b)=a-b$.", "Explaining only the rule without a number line or context."],
            examinerNote: "In (b) a picture or a verbal explanation must lead to 7.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $-9+4$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number line", statement: "Adding a positive moves right from $-9$." },
            ],
            steps: [
              { reasoning: "Move 4 to the right from $-9$.", working: "-9+4=-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$-5$",
            commonErrors: ["Writing $-13$ by adding the sizes and keeping the sign."],
            examinerNote: "B1 for -5.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The temperature in a town is recorded every 4 hours.",
          parts: [
            { label: "a", prompt: "At 8 pm the temperature is $-2^\\circ\\text{C}$. By midnight it has risen by $5^\\circ\\text{C}$. Work out the temperature at midnight, in $^\\circ\\text{C}$.", marks: 1 },
            { label: "b", prompt: "By 4 am the temperature has fallen by $9^\\circ\\text{C}$. Work out the temperature at 4 am, in $^\\circ\\text{C}$.", marks: 2 },
            { label: "c", prompt: "At 8 am the temperature is $-6^\\circ\\text{C}$. It has risen by $11^\\circ\\text{C}$ since 4 am. Work out the temperature at 4 am.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Temperature at midnight", answer: 3, unit: "°C" },
              { label: "(b) Temperature at 4 am", answer: -6, unit: "°C" },
              { label: "(c) Temperature at 4 am (worked backwards)", answer: -17, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Directed numbers in context", statement: "A rise in temperature is an addition; a fall is a subtraction." },
            ],
            steps: [
              { part: "a", reasoning: "A rise of 5 means add 5.", working: "-2+5=3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A fall of 9 means subtract 9.", working: "3-9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "-6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Work backwards: a rise of 11 means the 4 am temperature plus 11 equals $-6$, so subtract 11.", working: "-6-11=-17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3^\\circ\\text{C}$ (b) $-6^\\circ\\text{C}$ (c) $-17^\\circ\\text{C}$",
            commonErrors: ["Writing $3-9=6$.", "In (c) adding 11 to $-6$ to get 5 instead of working backwards."],
            examinerNote: "Follow through from (a) in (b) (ft). In (c) the direction of the change must be handled correctly.",
          },
        },
        {
          id: "mypm1-u1-directed-numbers-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Kai investigates differences of directed numbers.",
          parts: [
            { label: "a", prompt: "Work out $0-(-3)$.", marks: 1 },
            { label: "b", prompt: "Work out $(-2)-(-3)$.", marks: 1 },
            { label: "c", prompt: "Continue the pattern to work out $(-4)-(-3)$, then describe the pattern.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
              { kind: "principle", name: "Pattern continuation", statement: "Each step down by 1 in the first number changes the answer by $-1$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtracting $-3$ is adding 3.", working: "0+3=3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtracting $-3$ is adding 3.", working: "-2+3=1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Work out $(-4)-(-3)=-4+3=-1$.", working: "-1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Describe: as the first number decreases by 1 each time, the answer decreases by 1, because subtracting $-3$ is always adding 3.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $3$ (b) $1$ (c) $-1$; the answers decrease by 1 each step",
            commonErrors: ["Writing $0-(-3)=-3$.", "Describing the pattern without evaluating the next term."],
            examinerNote: "In (c) both the value $-1$ and a correct description are needed for the two marks.",
          },
        },
      ],
    },
  ],
};
