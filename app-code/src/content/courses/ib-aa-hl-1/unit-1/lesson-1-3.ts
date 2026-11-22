import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "aahl-u1-lesson-1-3",
  code: "1-3",
  title: "Proof and De Moivre's Theorem",
  goal: "I CAN prove statements by induction, contradiction and counterexample, and use De Moivre's theorem for powers and roots of complex numbers.",
  standards: ["AHL 1.14", "AHL 1.15"],
  vocabulary: [
    { term: "Proof by induction", definition: "Prove a statement true for a base case, then show that truth for $n=k$ implies truth for $n=k+1$; conclude it holds for all integers $n\\ge$ the base case." },
    { term: "Proof by contradiction", definition: "Assume the statement is false, derive a contradiction, and conclude the statement is true." },
    { term: "Counterexample", definition: "A single case that satisfies the hypotheses but violates the conclusion; it disproves a universal statement." },
    { term: "De Moivre's theorem", definition: "$\\left[r(\\cos\\theta+i\\sin\\theta)\\right]^n=r^n(\\cos n\\theta+i\\sin n\\theta)$, equivalently $(re^{i\\theta})^n=r^ne^{in\\theta}$." },
    { term: "$n$th roots of unity", definition: "The $n$ solutions of $z^n=1$: $z=\\mathrm{cis}\\frac{2\\pi k}{n}$ for $k=0,1,\\ldots,n-1$." },
  ],
  concepts: [
    {
      id: "aahl-u1-proof-methods",
      title: "Induction, contradiction and counterexample",
      skill: "Construct valid proofs by mathematical induction and by contradiction, and refute claims with a counterexample.",
      lesson: {
        sections: [
          {
            heading: "Induction",
            body: "A proof by induction has four required parts. (1) **Base case:** show the statement holds for the first value of $n$. (2) **Assumption:** assume it holds for $n=k$. (3) **Inductive step:** use the assumption to prove it for $n=k+1$. (4) **Conclusion:** state that the result is true for $n=1$ and, if true for $n=k$, true for $n=k+1$, so by induction true for all $n\\in\\mathbb{Z}^+$. Marks are lost if the assumption or conclusion is not stated.",
          },
          {
            heading: "Contradiction and counterexample",
            body: "To prove by contradiction, assume the negation, reason carefully to an impossible statement (an odd number equal to an even number, for example), and conclude the original claim. To disprove a claim that holds 'for all' values, one counterexample is enough, and it must be checked explicitly.",
          },
        ],
        keyFormulas: [
          { name: "Divisibility step", statement: "To show $a_{k+1}$ is a multiple of $m$, write $a_{k+1}=c\\,a_k+m(\\ldots)$." },
          { name: "Factorial identity", statement: "$(k+1)!=(k+1)\\,k!$" },
        ],
        workedExample: {
          problem: "Prove by induction that $\\sum_{r=1}^{n}(2r-1)=n^2$ for $n\\in\\mathbb{Z}^+$.",
          solution: "Base case: $n=1$: LHS $=1$, RHS $=1$. Assume true for $n=k$: $\\sum_{r=1}^{k}(2r-1)=k^2$. Then $\\sum_{r=1}^{k+1}(2r-1)=k^2+2(k+1)-1=k^2+2k+1=(k+1)^2$. So true for $n=k+1$. True for $n=1$, and true for $n=k$ implies true for $n=k+1$, so true for all $n\\in\\mathbb{Z}^+$ by induction.",
        },
      },
      questions: [
        {
          id: "aahl-u1-proof-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A student claims that $n^2+n+41$ is prime for every positive integer $n$. Which value of $n$ is a counterexample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n=41$" },
              { id: "b", text: "$n=2$" },
              { id: "c", text: "$n=10$" },
              { id: "d", text: "$n=1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterexample", statement: "A single case where the statement fails disproves a universal claim." },
            ],
            steps: [
              { reasoning: "For $n=41$ every term has a factor 41.", working: "41^2+41+41=41(41+1+1)=41\\times43", marks: 1, markCode: "M" },
              { reasoning: "This is a product of two integers greater than 1, so it is not prime. (For $n=1,2,10$ the values $43,47,151$ are prime.)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $n=41$",
            commonErrors: ["Choosing a value that happens to give a prime and concluding the claim is true."],
          },
        },
        {
          id: "aahl-u1-proof-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Prove by contradiction that $\\log_2 3$ is irrational. In the proof you assume $\\log_2 3=\\frac pq$ with $p,q\\in\\mathbb{Z}^+$ and reach $2^p=3^q$. Enter the parity of $3^q$ used in the contradiction: $1$ if odd, $0$ if even.",
          response: { type: "numeric", parts: [{ label: "Parity of $3^q$ (1 odd, 0 even)", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proof by contradiction", statement: "Assume the negation, derive an impossibility." },
              { kind: "property", name: "Parity", statement: "Every positive power of 2 is even; every power of 3 is odd." },
            ],
            steps: [
              { reasoning: "Assume $\\log_2 3=\\frac pq$ with $p,q\\in\\mathbb{Z}^+$, then rewrite in index form.", working: "2^{p/q}=3\\Rightarrow 2^p=3^q", marks: 1, markCode: "M" },
              { reasoning: "The left side is even (as $p\\ge1$); the right side is odd.", working: "2^p\\text{ even},\\quad 3^q\\text{ odd}", marks: 1, markCode: "A" },
              { reasoning: "This is a contradiction, so $\\log_23$ is not rational.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$3^q$ is odd (answer 1); hence $\\log_2 3$ is irrational.",
            commonErrors: ["Not stating that $p,q$ are positive integers.", "Concluding without naming the contradiction."],
          },
        },
        {
          id: "aahl-u1-proof-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Prove by induction that $\\sum_{r=1}^{n} r\\cdot r!=(n+1)!-1$ for all $n\\in\\mathbb{Z}^+$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mathematical induction", statement: "Base case, assumption for $k$, step to $k+1$, conclusion." },
              { kind: "property", name: "Factorials", statement: "$(k+1)!=(k+1)\\,k!$, so $(k+1)!\\,(k+2)=(k+2)!$." },
            ],
            steps: [
              { reasoning: "Base case $n=1$.", working: "\\text{LHS}=1\\cdot1!=1,\\quad \\text{RHS}=2!-1=1", marks: 1, markCode: "B" },
              { reasoning: "Assume the result is true for $n=k$.", working: "\\sum_{r=1}^{k}r\\cdot r!=(k+1)!-1", marks: 1, markCode: "M" },
              { reasoning: "Add the next term to both sides.", working: "\\sum_{r=1}^{k+1}r\\cdot r!=(k+1)!-1+(k+1)(k+1)!", marks: 1, markCode: "M" },
              { reasoning: "Factor $(k+1)!$ and simplify.", working: "(k+1)!\\,(1+k+1)-1=(k+2)(k+1)!-1=(k+2)!-1", marks: 1, markCode: "A" },
              { reasoning: "State the conclusion.", working: "\\text{True for }n=1\\text{; true for }k\\Rightarrow\\text{true for }k+1\\text{; so true for all }n\\in\\mathbb{Z}^+", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Proved by induction.",
            commonErrors: ["Omitting the statement of the assumption.", "Writing $(k+1)(k+1)!$ as $(k+1)!^2$."],
            examinerNote: "Award the final R mark only if the base case, inductive step and 'true for all $n$' are all stated.",
          },
        },
        {
          id: "aahl-u1-proof-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Let $f(n)=7^n-3^n$ for $n\\in\\mathbb{Z}^+$. This question explores divisibility of $f(n)$.",
          parts: [
            { label: "a", prompt: "Evaluate $f(1)$ and $f(2)$.", marks: 2 },
            { label: "b", prompt: "Show that $f(k+1)=7f(k)+4\\times3^k$.", marks: 3 },
            { label: "c", prompt: "Hence prove by induction that $f(n)$ is divisible by 4 for all $n\\in\\mathbb{Z}^+$.", marks: 4 },
            { label: "d", prompt: "Hence or otherwise, give a counterexample to the claim that $f(n)$ is divisible by 8 for all $n\\in\\mathbb{Z}^+$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mathematical induction", statement: "Base case, assumption, step, conclusion." },
              { kind: "law", name: "Index laws", statement: "$a^{k+1}=a\\cdot a^k$." },
              { kind: "principle", name: "Counterexample", statement: "One failing case disproves a universal claim." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $n=1$.", working: "f(1)=7-3=4", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Substitute $n=2$.", working: "f(2)=49-9=40", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write $f(k+1)$ and split off $7\\times7^k$.", working: "f(k+1)=7\\cdot7^k-3\\cdot3^k", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add and subtract $7\\cdot3^k$ so that $7f(k)=7\\cdot7^k-7\\cdot3^k$ appears.", working: "=7(7^k-3^k)+7\\cdot3^k-3\\cdot3^k", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=7f(k)+4\\times3^k\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Base case: $f(1)=4$ is divisible by 4.", working: "f(1)=4=4\\times1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Assume $f(k)=4m$ for some integer $m$.", working: "f(k)=4m", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute into the result of (b).", working: "f(k+1)=7(4m)+4\\times3^k=4\\left(7m+3^k\\right)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude: $7m+3^k$ is an integer, so true for $k+1$; true for $n=1$, so true for all $n\\in\\mathbb{Z}^+$ by induction.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$n=1$ gives $f(1)=4$, which is not divisible by 8.", working: "f(1)=4,\\ 8\\nmid4", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4$, $40$ (b) shown (c) proved by induction (d) $n=1$ gives $f(1)=4$, not a multiple of 8.",
            commonErrors: ["Assuming $f(k)=4$ rather than a general multiple of 4.", "Concluding for all $n$ without stating the base case."],
            examinerNote: "In (d), $f(2)=40$ is divisible by 8, so a counterexample requires care in choosing $n$.",
          },
        },
        {
          id: "aahl-u1-proof-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A proof by induction is used to show that a statement $P(n)$ is true for all integers $n\\ge 3$. Which of the following must be verified first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(1)$ is true" },
              { id: "b", text: "$P(n)$ is true for all $n$" },
              { id: "c", text: "$P(2)$ is true" },
              { id: "d", text: "$P(3)$ is true" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Base case", statement: "Induction begins by verifying the statement at the smallest value in the claimed range." },
            ],
            steps: [
              { reasoning: "The claimed range starts at $n=3$, so the base case must check $P(3)$, not $P(1)$ or $P(2)$.", working: "P(3)\\ \\text{true}", marks: 1, markCode: "M" },
              { reasoning: "Checking $P(n)$ for all $n$ is the conclusion of the proof, not the first step.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $P(3)$ must be verified first",
            commonErrors: ["Automatically using $n=1$ as the base case without checking the stated range."],
          },
        },
        {
          id: "aahl-u1-proof-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A student claims that $2^n+1$ is prime for every positive integer $n$. Enter the smallest value of $n$ for which this claim is false.",
          response: { type: "numeric", parts: [{ label: "Smallest counterexample $n$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterexample", statement: "One case where the claim fails disproves a universal statement." },
            ],
            steps: [
              { reasoning: "Test successive values: $2^1+1=3$ and $2^2+1=5$ are both prime, but $2^3+1=9=3\\times3$ is composite.", working: "2^3+1=9=3^2", marks: 1, markCode: "M" },
              { reasoning: "The smallest failing value is $n=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=3$",
            commonErrors: ["Skipping ahead to $n=4$ or $n=5$ — the first failure occurs at $n=3$."],
          },
        },
        {
          id: "aahl-u1-proof-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the inductive step of a proof by induction, after assuming that $P(k)$ is true, what must be shown?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That $P(k+1)$ is true, using the assumption that $P(k)$ is true" },
              { id: "b", text: "That the base case $P(1)$ is true" },
              { id: "c", text: "That $P(k)$ is true for every integer $k$" },
              { id: "d", text: "That $P(k)$ implies $P(k-1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inductive step", statement: "Assume $P(k)$ is true; prove $P(k+1)$ is true; then the statement holds for all $n$ in the range." },
            ],
            steps: [
              { reasoning: "The inductive step uses the assumption $P(k)$ to establish $P(k+1)$.", working: "P(k)\\Rightarrow P(k+1)", marks: 1, markCode: "M" },
              { reasoning: "The base case and the final conclusion are separate parts of the proof.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Show $P(k+1)$ using $P(k)$",
            commonErrors: ["Re-proving $P(k)$ inside the inductive step instead of using it as the assumption."],
          },
        },
        {
          id: "aahl-u1-proof-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The sum of the first $n$ odd numbers is $1+3+5+\\cdots+(2n-1)=n^2$. Enter the value of $1+3+5+\\cdots+19$.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 100 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of odd numbers", statement: "$1+3+\\cdots+(2n-1)=n^2$." },
            ],
            steps: [
              { reasoning: "The terms run $1,3,\\ldots,19$, which is $10$ odd numbers, so $n=10$.", working: "2n-1=19\\Rightarrow n=10", marks: 1, markCode: "M" },
              { reasoning: "The sum is $10^2$.", working: "10^2=100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$",
            commonErrors: ["Using $n=19$ instead of counting the number of terms."],
          },
        },
        {
          id: "aahl-u1-proof-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In a proof by contradiction that $\\sqrt2$ is irrational, one assumes $\\sqrt2=\\frac pq$ with $p,q\\in\\mathbb{Z}^+$ in lowest terms. Which deduction produces the required contradiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$q$ divides $p$" },
              { id: "b", text: "$p$ and $q$ are both even, contradicting 'lowest terms'" },
              { id: "c", text: "$p$ is even and $q$ is odd" },
              { id: "d", text: "$p+q$ is odd" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proof by contradiction", statement: "Assume the negation and derive an impossibility." },
              { kind: "property", name: "Lowest terms", statement: "A fraction in lowest terms cannot have both numerator and denominator even." },
            ],
            steps: [
              { reasoning: "From $2q^2=p^2$, $p^2$ is even so $p$ is even; writing $p=2r$ gives $q^2=2r^2$, so $q$ is even too.", working: "p=2r\\Rightarrow q^2=2r^2\\Rightarrow q\\ \\text{even}", marks: 1, markCode: "M" },
              { reasoning: "Both even contradicts the fraction being in lowest terms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $p$ and $q$ both even — contradiction",
            commonErrors: ["Claiming only $p$ is even is enough — the contradiction requires BOTH to be even."],
          },
        },
        {
          id: "aahl-u1-proof-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Prove by mathematical induction that $\\sum_{r=1}^{n} r(r+1)=\\frac{n(n+1)(n+2)}{3}$ for all $n\\in\\mathbb{Z}^+$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mathematical induction", statement: "Verify the base case, assume $P(k)$, prove $P(k+1)$, then conclude for all $n$." },
              { kind: "law", name: "Index laws", statement: "Factor common terms to rewrite the sum in the required form." },
            ],
            steps: [
              { reasoning: "Base case $n=1$: LHS $=1\\times2=2$ and RHS $=\\frac{1\\times2\\times3}{3}=2$.", working: "\\text{LHS}=2,\\quad \\text{RHS}=2", marks: 1, markCode: "M" },
              { reasoning: "Assume the result is true for $n=k$.", working: "\\sum_{r=1}^{k}r(r+1)=\\frac{k(k+1)(k+2)}{3}", marks: 1, markCode: "M" },
              { reasoning: "Add the $(k+1)$th term $(k+1)(k+2)$ to both sides.", working: "\\sum_{r=1}^{k+1}r(r+1)=\\frac{k(k+1)(k+2)}{3}+(k+1)(k+2)", marks: 1, markCode: "M" },
              { reasoning: "Factor out $\\frac{(k+1)(k+2)}{3}$: the remaining bracket is $k+3$.", working: "=\\frac{(k+1)(k+2)}{3}\\left(k+3\\right)=\\frac{(k+1)(k+2)(k+3)}{3}", marks: 2, markCode: "A" },
              { reasoning: "State the conclusion: true for $n=1$, and true for $k$ implies true for $k+1$, so true for all $n\\in\\mathbb{Z}^+$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved by induction.",
            commonErrors: ["Omitting the statement of the assumption.", "Expanding instead of factoring, losing the required form."],
            examinerNote: "The key algebraic move is $\\frac{k(k+1)(k+2)}{3}+(k+1)(k+2)=\\frac{(k+1)(k+2)(k+3)}{3}$.",
          },
        },
        {
          id: "aahl-u1-proof-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a counterexample to the claim 'every prime number is odd'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterexample", statement: "A counterexample must satisfy the hypotheses (be prime) but violate the conclusion (be odd)." },
            ],
            steps: [
              { reasoning: "$2$ is prime and even, so it violates the claim.", working: "2\\ \\text{is prime and even}", marks: 1, markCode: "M" },
              { reasoning: "$9$ and $1$ are not prime, so they cannot serve as counterexamples; $3$ is odd.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: ["Choosing $9$ — it is not prime, so it does not test the claim."],
          },
        },
        {
          id: "aahl-u1-proof-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A student claims that $n!+1$ is prime for every positive integer $n$. Enter the smallest value of $n$ for which this claim is false.",
          response: { type: "numeric", parts: [{ label: "Smallest counterexample $n$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterexample", statement: "One failing case disproves a universal claim." },
            ],
            steps: [
              { reasoning: "Check small cases: $1!+1=2$, $2!+1=3$ and $3!+1=7$ are all prime.", working: "2,\\ 3,\\ 7\\ \\text{prime}", marks: 1, markCode: "M" },
              { reasoning: "For $n=4$: $4!+1=24+1=25=5\\times5$, which is composite.", working: "4!+1=25=5^2", marks: 1, markCode: "M" },
              { reasoning: "The smallest failing value is $n=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=4$",
            commonErrors: ["Answering $n=5$ — the first failure occurs earlier, at $n=4$."],
          },
        },
        {
          id: "aahl-u1-proof-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Prove by contradiction that there are infinitely many prime numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proof by contradiction", statement: "Assume the negation of the claim and derive an impossibility." },
              { kind: "theorem", name: "Fundamental theorem of arithmetic", statement: "Every integer greater than 1 has a prime factor." },
            ],
            steps: [
              { reasoning: "Assume, for contradiction, that there are only finitely many primes $p_1,p_2,\\ldots,p_n$.", marks: 1, markCode: "M" },
              { reasoning: "Form the number $N=p_1p_2\\cdots p_n+1$.", working: "N=p_1p_2\\cdots p_n+1", marks: 1, markCode: "M" },
              { reasoning: "$N>1$, so by the fundamental theorem of arithmetic $N$ has a prime factor $q$.", marks: 1, markCode: "A" },
              { reasoning: "Dividing $N$ by any $p_i$ leaves remainder 1, so no $p_i$ divides $N$.", working: "N\\equiv1\\pmod{p_i}", marks: 2, markCode: "M" },
              { reasoning: "Hence $q$ is a prime that is not in the list $p_1,\\ldots,p_n$, contradicting the assumption that the list was complete.", marks: 2, markCode: "M" },
              { reasoning: "The assumption is false, so there are infinitely many primes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved by contradiction: any finite list of primes produces a new prime factor.",
            commonErrors: ["Claiming $N$ itself is prime — it need not be; only that it has SOME prime factor.", "Forgetting to state the initial assumption."],
            examinerNote: "The subtle point is that $N$ may be composite; the argument only needs a prime FACTOR of $N$.",
          },
        },
      ],
    },
    {
      id: "aahl-u1-de-moivre",
      title: "De Moivre's theorem: powers and roots",
      skill: "Use De Moivre's theorem to compute powers and to find all $n$th roots of a complex number, including roots of unity.",
      lesson: {
        sections: [
          {
            heading: "Powers",
            body: "If $z=r\\,\\mathrm{cis}\\,\\theta$ then $z^n=r^n\\,\\mathrm{cis}\\,n\\theta$. For $(1+i)^8$, write $1+i=\\sqrt2\\,\\mathrm{cis}\\frac\\pi4$ so the power is $(\\sqrt2)^8\\mathrm{cis}\\,2\\pi=16$. Always convert to polar form first rather than expanding.",
          },
          {
            heading: "Roots",
            body: "To solve $z^n=w$ with $w=R\\,\\mathrm{cis}\\,\\alpha$, write $z=r\\,\\mathrm{cis}\\,\\theta$. Then $r^n=R$ and $n\\theta=\\alpha+2\\pi k$, so $z=R^{1/n}\\mathrm{cis}\\frac{\\alpha+2\\pi k}{n}$ for $k=0,1,\\ldots,n-1$. The $n$ roots lie on a circle of radius $R^{1/n}$ and are equally spaced by angle $\\frac{2\\pi}{n}$.",
          },
        ],
        keyFormulas: [
          { name: "De Moivre", statement: "$(r\\,\\mathrm{cis}\\,\\theta)^n=r^n\\,\\mathrm{cis}\\,n\\theta$" },
          { name: "nth roots", statement: "$z^n=R\\,\\mathrm{cis}\\,\\alpha\\Rightarrow z=R^{1/n}\\mathrm{cis}\\frac{\\alpha+2\\pi k}{n},\\ k=0,\\ldots,n-1$" },
        ],
        workedExample: {
          problem: "Solve $z^2=-4$ using De Moivre's theorem.",
          solution: "$-4=4\\,\\mathrm{cis}\\,\\pi$, so $z=2\\,\\mathrm{cis}\\frac{\\pi+2\\pi k}{2}$. For $k=0$: $2\\,\\mathrm{cis}\\frac\\pi2=2i$; for $k=1$: $2\\,\\mathrm{cis}\\frac{3\\pi}2=-2i$.",
        },
      },
      questions: [
        {
          id: "aahl-u1-demoivre-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\left(\\cos\\frac\\pi6+i\\sin\\frac\\pi6\\right)^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$i$" },
              { id: "b", text: "$-i$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$." },
            ],
            steps: [
              { reasoning: "Multiply the angle by 3.", working: "\\cos\\tfrac{3\\pi}{6}+i\\sin\\tfrac{3\\pi}{6}=\\cos\\tfrac\\pi2+i\\sin\\tfrac\\pi2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0+i=i", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $i$",
            commonErrors: ["Cubing the angle instead of multiplying by 3."],
          },
        },
        {
          id: "aahl-u1-demoivre-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact value of $(1+i)^8$.",
          response: { type: "numeric", parts: [{ label: "$(1+i)^8$" , answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(r\\,\\mathrm{cis}\\,\\theta)^n=r^n\\,\\mathrm{cis}\\,n\\theta$." },
            ],
            steps: [
              { reasoning: "Convert to polar form.", working: "1+i=\\sqrt2\\,\\mathrm{cis}\\tfrac\\pi4", marks: 1, markCode: "A" },
              { reasoning: "Apply De Moivre.", working: "(\\sqrt2)^8\\,\\mathrm{cis}\\,2\\pi", marks: 1, markCode: "M" },
              { reasoning: "$(\\sqrt2)^8=2^4=16$ and $\\mathrm{cis}\\,2\\pi=1$.", working: "16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Using $(\\sqrt2)^8=8$.", "Leaving the angle as $2\\pi$ and giving $16\\,\\mathrm{cis}\\,2\\pi$ without evaluating."],
          },
        },
        {
          id: "aahl-u1-demoivre-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Solve $z^3=8i$, giving the three roots in the form $a+bi$ with exact values of $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "If $z^n=R\\,\\mathrm{cis}\\,\\alpha$ then $z=R^{1/n}\\mathrm{cis}\\frac{\\alpha+2\\pi k}{n}$." },
            ],
            steps: [
              { reasoning: "Write $8i$ in polar form.", working: "8i=8\\,\\mathrm{cis}\\tfrac\\pi2", marks: 1, markCode: "A" },
              { reasoning: "Apply the root formula with $n=3$.", working: "z=2\\,\\mathrm{cis}\\frac{\\pi/2+2\\pi k}{3}=2\\,\\mathrm{cis}\\left(\\tfrac\\pi6+\\tfrac{2\\pi k}{3}\\right)", marks: 1, markCode: "M" },
              { reasoning: "$k=0$: argument $\\frac\\pi6$.", working: "2\\left(\\tfrac{\\sqrt3}2+\\tfrac12i\\right)=\\sqrt3+i", marks: 1, markCode: "A" },
              { reasoning: "$k=1$: argument $\\frac{5\\pi}6$.", working: "2\\left(-\\tfrac{\\sqrt3}2+\\tfrac12i\\right)=-\\sqrt3+i", marks: 1, markCode: "A" },
              { reasoning: "$k=2$: argument $\\frac{3\\pi}2$.", working: "2(0-i)=-2i", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z=\\sqrt3+i,\\ -\\sqrt3+i,\\ -2i$",
            commonErrors: ["Dividing $\\alpha$ by 3 but omitting the $2\\pi k$ term, finding only one root.", "Using modulus $8/3$ instead of $8^{1/3}=2$."],
            examinerNote: "Check: $(-2i)^3=-8i^3=8i$.",
          },
        },
        {
          id: "aahl-u1-demoivre-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Let $\\omega=\\cos\\frac{2\\pi}{n}+i\\sin\\frac{2\\pi}{n}$, where $n\\ge2$ is an integer. This question investigates the $n$th roots of unity, that is, the solutions of $z^n=1$.",
          parts: [
            { label: "a", prompt: "For $n=3$, write down the three solutions of $z^3=1$ in Cartesian form.", marks: 2 },
            { label: "b", prompt: "Show that the sum of these three solutions is zero.", marks: 2 },
            { label: "c", prompt: "Prove that the solutions of $z^n=1$ are $1,\\omega,\\omega^2,\\ldots,\\omega^{n-1}$.", marks: 3 },
            { label: "d", prompt: "Hence prove that $1+\\omega+\\omega^2+\\cdots+\\omega^{n-1}=0$ for all $n\\ge2$.", marks: 3 },
            { label: "e", prompt: "Hence show that $\\cos\\frac{2\\pi}{5}+\\cos\\frac{4\\pi}{5}=-\\frac12$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(\\mathrm{cis}\\,\\theta)^n=\\mathrm{cis}\\,n\\theta$." },
              { kind: "formula", name: "Geometric series", statement: "$1+r+\\cdots+r^{n-1}=\\frac{1-r^n}{1-r}$ for $r\\ne1$." },
              { kind: "property", name: "Cosine symmetry", statement: "$\\cos(2\\pi-x)=\\cos x$." },
            ],
            steps: [
              { part: "a", reasoning: "The solutions have modulus 1 and arguments $0,\\frac{2\\pi}3,\\frac{4\\pi}3$.", working: "1,\\quad -\\tfrac12+\\tfrac{\\sqrt3}2i", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The third root is the conjugate of the second.", working: "-\\tfrac12-\\tfrac{\\sqrt3}2i", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the three roots.", working: "1+\\left(-\\tfrac12+\\tfrac{\\sqrt3}2i\\right)+\\left(-\\tfrac12-\\tfrac{\\sqrt3}2i\\right)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Real parts: $1-\\frac12-\\frac12=0$; imaginary parts cancel.", working: "=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Let $z=r\\,\\mathrm{cis}\\,\\theta$. Then $z^n=r^n\\,\\mathrm{cis}\\,n\\theta=1$ gives $r=1$ and $n\\theta=2\\pi k$.", working: "r=1,\\quad \\theta=\\tfrac{2\\pi k}{n}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "By De Moivre, $\\mathrm{cis}\\frac{2\\pi k}{n}=\\omega^k$.", working: "z=\\omega^k", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Taking $k=0,\\ldots,n-1$ gives $n$ distinct arguments in $[0,2\\pi)$; larger $k$ repeat these roots.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Sum the geometric series with first term 1 and ratio $\\omega$.", working: "S=\\frac{1-\\omega^n}{1-\\omega}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\omega^n=\\mathrm{cis}\\,2\\pi=1$, and $\\omega\\ne1$ for $n\\ge2$, so the denominator is non-zero.", working: "S=\\frac{1-1}{1-\\omega}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude.", working: "S=0", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Take real parts for $n=5$: $1+\\cos\\frac{2\\pi}5+\\cos\\frac{4\\pi}5+\\cos\\frac{6\\pi}5+\\cos\\frac{8\\pi}5=0$, and use $\\cos\\frac{6\\pi}5=\\cos\\frac{4\\pi}5$, $\\cos\\frac{8\\pi}5=\\cos\\frac{2\\pi}5$.", working: "1+2\\cos\\tfrac{2\\pi}5+2\\cos\\tfrac{4\\pi}5=0", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Rearrange.", working: "\\cos\\tfrac{2\\pi}5+\\cos\\tfrac{4\\pi}5=-\\tfrac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1,\\ -\\frac12\\pm\\frac{\\sqrt3}2i$ (b) sum $=0$ (c) proved (d) proved via geometric series (e) $\\cos\\frac{2\\pi}5+\\cos\\frac{4\\pi}5=-\\frac12$",
            commonErrors: ["In (d), dividing by $1-\\omega$ without noting $\\omega\\ne1$.", "In (e), forgetting the term $1$ for $k=0$."],
            examinerNote: "The generalization in (d) is the key result: the roots of $z^n=1$ always sum to zero because the coefficient of $z^{n-1}$ in $z^n-1$ is zero.",
          },
        },
        {
          id: "aahl-u1-demoivre-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\left(\\cos\\frac\\pi4+i\\sin\\frac\\pi4\\right)^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$i$" },
              { id: "b", text: "$-1$" },
              { id: "c", text: "$-i$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$." },
            ],
            steps: [
              { reasoning: "Multiply the angle by 4.", working: "\\cos\\tfrac{4\\pi}{4}+i\\sin\\tfrac{4\\pi}{4}=\\cos\\pi+i\\sin\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-1+0i=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $-1$",
            commonErrors: ["Quadrupling the angle instead of multiplying by 4."],
          },
        },
        {
          id: "aahl-u1-demoivre-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Use De Moivre's theorem to find the exact value of $(\\sqrt3+i)^6$.",
          response: { type: "numeric", parts: [{ label: "$(\\sqrt3+i)^6$", answer: -64 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(r\\,\\mathrm{cis}\\,\\theta)^n=r^n\\,\\mathrm{cis}\\,n\\theta$." },
            ],
            steps: [
              { reasoning: "Convert $\\sqrt3+i$ to polar form: modulus $2$, argument $\\frac\\pi6$.", working: "\\sqrt3+i=2\\,\\mathrm{cis}\\tfrac\\pi6", marks: 1, markCode: "M" },
              { reasoning: "Apply De Moivre with $n=6$.", working: "2^6\\,\\mathrm{cis}\\tfrac{6\\pi}6=64\\,\\mathrm{cis}\\pi", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{cis}\\pi=-1$.", working: "64\\times(-1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-64", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-64$",
            commonErrors: ["Using modulus $2^6=12$ or forgetting to evaluate $\\mathrm{cis}\\pi$."],
          },
        },
        {
          id: "aahl-u1-demoivre-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT a cube root of $8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$2i$" },
              { id: "c", text: "$-1+i\\sqrt3$" },
              { id: "d", text: "$-1-i\\sqrt3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "The cube roots of $8=8\\,\\mathrm{cis}\\,0$ are $2\\,\\mathrm{cis}\\frac{2\\pi k}{3}$ for $k=0,1,2$." },
            ],
            steps: [
              { reasoning: "The three cube roots are $2$, $2\\,\\mathrm{cis}\\frac{2\\pi}3=-1+i\\sqrt3$ and $2\\,\\mathrm{cis}\\frac{4\\pi}3=-1-i\\sqrt3$.", working: "2,\\ -1\\pm i\\sqrt3", marks: 1, markCode: "M" },
              { reasoning: "$2i$ is not among them — indeed $(2i)^3=-8i\\ne8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2i$",
            commonErrors: ["Checking only that the modulus is 2 without testing the cube."],
          },
        },
        {
          id: "aahl-u1-demoivre-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Let $z=\\cos\\frac\\pi9+i\\sin\\frac\\pi9$. Find the real part of $z^3$.",
          response: { type: "numeric", parts: [{ label: "Real part of $z^3$", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$." },
            ],
            steps: [
              { reasoning: "Apply De Moivre: the modulus is 1 and the argument is multiplied by 3.", working: "z^3=\\cos\\tfrac{3\\pi}{9}+i\\sin\\tfrac{3\\pi}{9}=\\cos\\tfrac\\pi3+i\\sin\\tfrac\\pi3", marks: 1, markCode: "M" },
              { reasoning: "The real part is $\\cos\\frac\\pi3$.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\cos\\tfrac\\pi3=\\tfrac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac12$",
            commonErrors: ["Multiplying the angle by 9 instead of 3, or forgetting the modulus is 1."],
          },
        },
        {
          id: "aahl-u1-demoivre-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The $n$th roots of unity are equally spaced around the unit circle. What is the angle, in radians, between two consecutive roots?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{n}$" },
              { id: "b", text: "$\\frac{2\\pi}{n}$" },
              { id: "c", text: "$2\\pi$" },
              { id: "d", text: "$\\frac{\\pi}{2n}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "The arguments are $\\frac{\\alpha+2\\pi k}{n}$, spaced by $\\frac{2\\pi}{n}$." },
            ],
            steps: [
              { reasoning: "Consecutive values of $k$ differ by $\\frac{2\\pi}{n}$ in the argument.", working: "\\Delta\\theta=\\tfrac{2\\pi k}{n}\\Big|_{k+1}-\\tfrac{2\\pi k}{n}=\\tfrac{2\\pi}{n}", marks: 1, markCode: "M" },
              { reasoning: "The roots fill the full circle $2\\pi$, so $n$ equal gaps each have size $\\frac{2\\pi}{n}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{2\\pi}{n}$",
            commonErrors: ["Using $\\frac{\\pi}{n}$, which would only cover half the circle."],
          },
        },
        {
          id: "aahl-u1-demoivre-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Solve $z^4=-16$, giving all four roots in the form $a+bi$ with exact values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "If $z^n=R\\,\\mathrm{cis}\\,\\alpha$ then $z=R^{1/n}\\mathrm{cis}\\frac{\\alpha+2\\pi k}{n}$, $k=0,\\ldots,n-1$." },
              { kind: "property", name: "Exact values", statement: "$\\cos\\frac\\pi4=\\sin\\frac\\pi4=\\frac{\\sqrt2}2$." },
            ],
            steps: [
              { reasoning: "Write $-16$ in polar form.", working: "-16=16\\,\\mathrm{cis}\\pi", marks: 1, markCode: "M" },
              { reasoning: "Apply the root formula with $n=4$: $z=2\\,\\mathrm{cis}\\frac{\\pi+2\\pi k}{4}$.", working: "z=2\\,\\mathrm{cis}\\left(\\tfrac\\pi4+\\tfrac{\\pi k}{2}\\right)", marks: 1, markCode: "M" },
              { reasoning: "$k=0$: argument $\\frac\\pi4$.", working: "2\\left(\\tfrac{\\sqrt2}2+\\tfrac{\\sqrt2}2i\\right)=\\sqrt2+\\sqrt2\\,i", marks: 2, markCode: "A" },
              { reasoning: "$k=1$: argument $\\frac{3\\pi}4$.", working: "2\\left(-\\tfrac{\\sqrt2}2+\\tfrac{\\sqrt2}2i\\right)=-\\sqrt2+\\sqrt2\\,i", marks: 1, markCode: "A" },
              { reasoning: "$k=2$: argument $\\frac{5\\pi}4$.", working: "-\\sqrt2-\\sqrt2\\,i", marks: 1, markCode: "A" },
              { reasoning: "$k=3$: argument $\\frac{7\\pi}4$.", working: "\\sqrt2-\\sqrt2\\,i", marks: 1, markCode: "A" },
              { reasoning: "Check one root: $(\\sqrt2+\\sqrt2 i)^2=4i$, so $(\\sqrt2+\\sqrt2 i)^4=(4i)^2=-16$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z=\\pm\\sqrt2\\pm\\sqrt2\\,i$ (all four sign combinations)",
            commonErrors: ["Using modulus $16/4=4$ instead of $16^{1/4}=2$.", "Missing the $2\\pi k$ term and giving only one root."],
            examinerNote: "The four roots are $\\pm\\sqrt2\\pm\\sqrt2 i$; each has modulus $\\sqrt{2+2}=2$ as required.",
          },
        },
        {
          id: "aahl-u1-demoivre-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "De Moivre's theorem states that if $z=r(\\cos\\theta+i\\sin\\theta)$, then $z^n$ equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$r^n\\left(\\cos\\theta^n+i\\sin\\theta^n\\right)$" },
              { id: "b", text: "$r^n\\left(\\cos n\\theta+i\\sin n\\theta\\right)$" },
              { id: "c", text: "$n r\\left(\\cos\\theta+i\\sin\\theta\\right)$" },
              { id: "d", text: "$rn\\left(\\cos\\theta+i\\sin n\\theta\\right)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(r\\,\\mathrm{cis}\\,\\theta)^n=r^n\\,\\mathrm{cis}\\,n\\theta=r^n(\\cos n\\theta+i\\sin n\\theta)$." },
            ],
            steps: [
              { reasoning: "The modulus is raised to the power $n$ and the argument is multiplied by $n$.", working: "r\\mapsto r^n,\\quad \\theta\\mapsto n\\theta", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) has both features correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $r^n(\\cos n\\theta+i\\sin n\\theta)$",
            commonErrors: ["Confusing $r^n$ with $rn$, or $n\\theta$ with $\\theta^n$."],
          },
        },
        {
          id: "aahl-u1-demoivre-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the imaginary part of $(1+i)^6$.",
          response: { type: "numeric", parts: [{ label: "Imaginary part of $(1+i)^6$", answer: -8 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$(r\\,\\mathrm{cis}\\,\\theta)^n=r^n\\,\\mathrm{cis}\\,n\\theta$." },
            ],
            steps: [
              { reasoning: "Convert to polar form.", working: "1+i=\\sqrt2\\,\\mathrm{cis}\\tfrac\\pi4", marks: 1, markCode: "M" },
              { reasoning: "Apply De Moivre: modulus $(\\sqrt2)^6=8$, argument $\\frac{6\\pi}4=\\frac{3\\pi}2$.", working: "8\\,\\mathrm{cis}\\tfrac{3\\pi}2=8(0-i)=-8i", marks: 1, markCode: "M" },
              { reasoning: "The imaginary part is $-8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-8$",
            commonErrors: ["Giving the real part $0$ or the modulus $8$ instead of the imaginary part."],
          },
        },
        {
          id: "aahl-u1-demoivre-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Consider the equation $z^4+1=0$, that is, $z^4=-1$.",
          parts: [
            { label: "a", prompt: "Write $-1$ in polar form and state the four arguments of the roots of $z^4=-1$.", marks: 3 },
            { label: "b", prompt: "Hence find the four roots in the form $a+bi$ with exact values.", marks: 4 },
            { label: "c", prompt: "Show that the four roots are the vertices of a square centred at the origin.", marks: 2 },
            { label: "d", prompt: "Find the product of the four roots.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "If $z^n=R\\,\\mathrm{cis}\\,\\alpha$ then $z=R^{1/n}\\mathrm{cis}\\frac{\\alpha+2\\pi k}{n}$, $k=0,\\ldots,n-1$." },
              { kind: "property", name: "Exact values", statement: "$\\cos\\frac\\pi4=\\sin\\frac\\pi4=\\frac{\\sqrt2}2$." },
            ],
            steps: [
              { part: "a", reasoning: "Write $-1$ in polar form.", working: "-1=1\\,\\mathrm{cis}\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The root formula gives arguments $\\frac{\\pi+2\\pi k}{4}$.", working: "\\theta_k=\\tfrac{\\pi+2\\pi k}{4},\\ k=0,1,2,3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "List them: $\\frac\\pi4,\\frac{3\\pi}4,\\frac{5\\pi}4,\\frac{7\\pi}4$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All roots have modulus $1^{1/4}=1$; convert each argument to Cartesian form.", working: "z_k=\\cos\\theta_k+i\\sin\\theta_k", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$k=0$ and $k=3$ give $\\frac{\\sqrt2}2\\pm\\frac{\\sqrt2}2i$.", working: "\\tfrac{\\sqrt2}2+\\tfrac{\\sqrt2}2i,\\quad \\tfrac{\\sqrt2}2-\\tfrac{\\sqrt2}2i", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$k=1$ and $k=2$ give the negatives of the imaginary parts.", working: "-\\tfrac{\\sqrt2}2+\\tfrac{\\sqrt2}2i,\\quad -\\tfrac{\\sqrt2}2-\\tfrac{\\sqrt2}2i", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All four roots stated correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The arguments differ by $\\frac\\pi2$, so consecutive roots are related by multiplication by $i$ — a rotation of $90^\\circ$.", working: "z_{k+1}=i\\,z_k", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Four equal sides (all modulus 1, adjacent angle $90^\\circ$) centred at the origin form a square.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply the roots: the arguments sum to $\\frac\\pi4+\\frac{3\\pi}4+\\frac{5\\pi}4+\\frac{7\\pi}4=4\\pi$, so the product is $\\mathrm{cis}\\,4\\pi=1$.", working: "1\\,\\mathrm{cis}\\,4\\pi=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-1=\\mathrm{cis}\\,\\pi$; arguments $\\frac\\pi4,\\frac{3\\pi}4,\\frac{5\\pi}4,\\frac{7\\pi}4$ (b) $\\pm\\frac{\\sqrt2}2\\pm\\frac{\\sqrt2}2i$ (c) shown — rotations by $90^\\circ$ (d) product $=1$",
            commonErrors: ["Using modulus $1/4$ instead of $1^{1/4}=1$.", "In (d), forgetting that $\\mathrm{cis}\\,4\\pi=1$, not $-1$."],
            examinerNote: "Equivalently the roots are $\\frac{\\sqrt2}2(\\pm1\\pm i)$; they are also the roots of $z^2=\\pm i$.",
          },
        },
      ],
    },
  ],
};
