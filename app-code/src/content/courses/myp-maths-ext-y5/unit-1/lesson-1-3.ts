import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypme5-u1-lesson-1-3",
  code: "1-3",
  title: "Proofs, Number Systems and Sets",
  goal: "I CAN construct proofs by contradiction and deduction, classify number types rigorously, and use set notation and Venn diagrams.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Proof by contradiction", definition: "Assume the statement is false, derive a contradiction, conclude the statement must be true." },
    { term: "Proof by deduction", definition: "Chain of logical steps from known facts to the conclusion." },
    { term: "Set", definition: "A collection of distinct objects; written $\\{1,2,3\\}$ or described by a rule." },
    { term: "Universal set $\\mathbb{U}$", definition: "The set containing all objects under consideration." },
    { term: "Complement $A'$", definition: "All elements in $\\mathbb{U}$ not in $A$; $P(A')=1-P(A)$." },
  ],
  concepts: [
    {
      id: "mypme5-u1-proofs",
      title: "Proof techniques and number systems",
      skill: "Construct proofs by contradiction and deduction, and prove properties of rational and irrational numbers.",
      lesson: {
        sections: [
          {
            heading: "Proof by contradiction",
            body: "Structure: (1) assume the negation, (2) derive consequences, (3) reach a contradiction, (4) conclude original statement true. Classic example: $\\sqrt{2}$ is irrational — assume $\\sqrt{2}=\\frac{p}{q}$ lowest terms → $p^2=2q^2$ → $p$ even → $q$ even → contradiction.",
          },
          {
            heading: "Proof by deduction",
            body: "Start from given facts and apply definitions/theorems step by step. For 'show that' questions, manipulate algebraically until the required form appears. Every step must be justified.",
          },
          {
            heading: "Number system properties",
            body: "Rational + rational = rational; rational × irrational = irrational (if rational ≠ 0); irrational + irrational can be rational ($\\sqrt{2}+(-\\sqrt{2})=0$) or irrational. Use these to classify expressions without full expansion.",
          },
        ],
        keyFormulas: [
          { name: "Contradiction structure", statement: "Assume false → derive contradiction → conclude true" },
          { name: "Irrational proof", statement: "$p^2=2q^2 \\Rightarrow p,q$ both even → contradiction" },
          { name: "Sum/product rules", statement: "R+R=R; R×I=I (R≠0); I+I can be either" },
        ],
        workedExample: {
          problem: "Prove that if $x$ is rational and $y$ is irrational, then $x+y$ is irrational.",
          solution: "Suppose $x+y=r$ rational. Then $y=r-x$ = rational − rational = rational. Contradiction. Hence $x+y$ irrational.",
        },
      },
      questions: [
        {
          id: "mypme5-u1-proof-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a valid proof method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Test many examples" },
              { id: "b", text: "Use a calculator" },
              { id: "c", text: "Draw a diagram" },
              { id: "d", text: "Assume the opposite and find a contradiction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proof by contradiction", statement: "Assume negation, derive contradiction." },
            ],
            steps: [
              { reasoning: "Proof by contradiction is a rigorous method; examples alone don't prove.", working: "contradiction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Assume opposite, find contradiction",
            commonErrors: ["Thinking testing examples constitutes proof."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-proof-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Prove that the sum of a rational and an irrational number is irrational.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Test $\\sqrt{2}+1$ and $\\sqrt{2}+2$ — both irrational, so always true." },
              { id: "b", text: "It is always irrational because irrationals are 'bigger'." },
              { id: "c", text: "Let $r$ rational, $i$ irrational. Suppose $r+i=s$ rational. Then $i=s-r$ = rational − rational = rational. Contradiction." },
              { id: "d", text: "Rational + irrational = irrational by definition." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contradiction", statement: "Assume sum rational → irrational equals difference of rationals → contradiction." },
            ],
            steps: [
              { reasoning: "Suppose $r+i=s$ rational; then $i=s-r$ rational — contradiction.", working: "i=s-r", marks: 1, markCode: "M" },
              { reasoning: "Therefore $r+i$ must be irrational.", working: "\\text{irrational}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proof by contradiction as shown",
            commonErrors: ["Using examples instead of general proof."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Prove that $\\sqrt{3}$ is irrational.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume $\\sqrt{3}=\\frac{p}{q}$ lowest terms. Then $p^2=3q^2$, so $p^2$ divisible by 3 → $p$ divisible by 3 → $p=3k$ → $9k^2=3q^2$ → $q^2=3k^2$ → $q$ divisible by 3 — contradiction." },
              { id: "b", text: "Assume $\\sqrt{3}=\\frac{p}{q}$; then $3=\\frac{p^2}{q^2}$; $p^2=3q^2$; $p$ divisible by 3; $p=3k$; $q^2=3k^2$; $q$ divisible by 3 — contradiction." },
              { id: "c", text: "$\\sqrt{3}$ cannot be a fraction because it doesn't terminate." },
              { id: "d", text: "All roots of non-perfect squares are irrational." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proof structure", statement: "Assume lowest terms → derive both divisible by 3 → contradiction." },
            ],
            steps: [
              { reasoning: "$p^2=3q^2$ → $p$ divisible by 3 → $p=3k$ → $q^2=3k^2$ → $q$ divisible by 3 → contradiction.", working: "p^2=3q^2", marks: 1, markCode: "M" },
              { reasoning: "Both $p,q$ divisible by 3 contradicts lowest terms.", working: "\\text{contradiction}", marks: 1, markCode: "M" },
              { reasoning: "Conclude $\\sqrt{3}$ irrational.", working: "\\sqrt{3}\\text{ irrational}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proof by contradiction",
            commonErrors: ["Not stating 'lowest terms' — proof incomplete without it."],
            examinerNote: "M1 M1 A1. Note (d) is also valid but (a) states lowest terms explicitly.",
          },
        },
        {
          id: "mypme5-u1-proof-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider $a=\\sqrt{2}$, $b=\\sqrt{8}$, $c=\\sqrt{18}$, $d=\\pi$, $e=\\frac{\\sqrt{16}}{2}$.",
          parts: [
            { label: "a", prompt: "Simplify each value.", marks: 2 },
            { label: "b", prompt: "Identify which are rational and which irrational.", marks: 2 },
            { label: "c", prompt: "Prove that $a+b$ is irrational.", marks: 2 },
            { label: "d", prompt: "Prove that $a\\times c$ is rational.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number properties", statement: "Simplify first, then classify; use sum/product rules." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt{2}=\\sqrt{2}$; $\\sqrt{8}=2\\sqrt{2}$; $\\sqrt{18}=3\\sqrt{2}$; $\\pi=\\pi$; $\\frac{\\sqrt{16}}{2}=\\frac{4}{2}=2$.", working: "\\sqrt{2},2\\sqrt{2},3\\sqrt{2},\\pi,2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All five simplified correctly.", working: "\\text{simplified}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rational: $\\pi$? No — $\\pi$ irrational; $e=2$ rational. Irrational: $\\sqrt{2},2\\sqrt{2},3\\sqrt{2},\\pi$.", working: "\\text{rational: }2;\\text{ irrational: rest}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State classification.", working: "\\text{classified}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$a+b=\\sqrt{2}+2\\sqrt{2}=3\\sqrt{2}$ — irrational (rational × irrational).", working: "3\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State conclusion.", working: "3\\sqrt{2}\\text{ irrational}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$a\\times c=\\sqrt{2}\\times3\\sqrt{2}=3\\times2=6$ — rational.", working: "6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State conclusion.", working: "6\\text{ rational}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\sqrt{2},2\\sqrt{2},3\\sqrt{2},\\pi,2$ (b) rational: 2 only (c) $3\\sqrt{2}$ irrational (d) 6 rational",
            commonErrors: ["In (b), classifying $\\pi$ as rational."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-proof-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a proof by contradiction that $\\sqrt{3}$ is irrational, we assume $\\sqrt{3}=\\frac{p}{q}$ where $p$ and $q$ have no common factor. What does this assumption imply about $p$ and $q$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are both even" },
              { id: "b", text: "One must be prime" },
              { id: "c", text: "They are coprime (lowest terms)" },
              { id: "d", text: "Nothing — any $p,q$ work" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by contradiction", statement: "Assume the negation in its strongest form: the fraction is in lowest terms." },
            ],
            steps: [
              { reasoning: "Lowest terms means $\\gcd(p,q)=1$ — no common factor.", working: "\\gcd(p,q)=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** They are coprime",
            commonErrors: ["Thinking the assumption allows common factors."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-proof-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $\\sqrt{18}$ in the form $k\\sqrt{2}$. Enter the value of $k$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Simplifying surds", statement: "$\\sqrt{18}=\\sqrt{9\\times2}=3\\sqrt{2}$, so $k=3$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{18}=\\sqrt9\\cdot\\sqrt2=3\\sqrt2$.", working: "k=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$k=3$",
            commonErrors: ["Writing $\\sqrt{18}=2\\sqrt{2}$ or $9\\sqrt{2}$."],
          },
        },
        {
          id: "mypme5-u1-proof-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the correct first step in proving by contradiction that there are infinitely many primes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume there are finitely many primes $p_1,p_2,\\dots,p_n$ and consider $N=p_1p_2\\cdots p_n+1$." },
              { id: "b", text: "Assume every number greater than 1 is prime." },
              { id: "c", text: "Prove that $N$ itself must be prime." },
              { id: "d", text: "List all primes up to 100 and count them." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by contradiction", statement: "Assume the negation: finitely many primes; construct $N$ coprime to all of them." },
            ],
            steps: [
              { reasoning: "Contradiction proofs start by assuming the opposite of the claim.", working: "\\text{assume finitely many primes}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Assume finitely many primes and form $N$",
            commonErrors: ["Choosing (d): $N$ need not be prime — it has a prime factor not in the list."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Prove by deduction that $x^2\\ge0$ for all real $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "If $x\\ge0$ then $x^2\\ge0$; if $x<0$ then $x^2=(-x)^2\\ge0$ since $-x>0$." },
              { id: "b", text: "It is false for $x=-1$." },
              { id: "c", text: "Squares are always positive, so this is obvious." },
              { id: "d", text: "Use proof by contradiction assuming $x^2<0$." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by deduction", statement: "Split into cases $x\\ge0$ and $x<0$; in both cases $x^2$ is a product of same-sign numbers." },
            ],
            steps: [
              { reasoning: "Case analysis: for $x<0$, write $x=-a$ with $a>0$, so $x^2=a^2>0$.", working: "x<0\\Rightarrow x^2=(-x)^2>0", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Case analysis on sign of $x$",
            commonErrors: ["Claiming the result is 'obvious' without justification."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove that the sum of two rational numbers is rational.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "A number expressible as $\\frac{p}{q}$ with $p,q\\in\\mathbb{Z}$, $q\\ne0$." },
            ],
            steps: [
              { reasoning: "Let $a=\\frac{m}{n}$ and $b=\\frac{p}{q}$ with integer $m,n,p,q$ and $n,q\\ne0$.", working: "a=\\frac{m}{n},\\ b=\\frac{p}{q}", marks: 1, markCode: "M" },
              { reasoning: "$a+b=\\frac{mq+np}{nq}$ — a ratio of integers with nonzero denominator.", working: "\\frac{mq+np}{nq}", marks: 1, markCode: "M" },
              { reasoning: "Hence $a+b$ is rational. QED.", working: "\\therefore\\ a+b\\in\\mathbb{Q}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sum of two rationals is rational.",
            commonErrors: ["Adding denominators directly: $\\frac{m+p}{n+q}$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $\\sqrt{50}$ in the form $k\\sqrt{2}$. Enter the value of $k$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Simplifying surds", statement: "$\\sqrt{50}=\\sqrt{25\\times2}=5\\sqrt{2}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{50}=5\\sqrt2$.", working: "k=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$k=5$",
            commonErrors: ["Taking out $\\sqrt{10}$ instead of the largest square factor."],
          },
        },
        {
          id: "mypme5-u1-proof-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the correct strategy for proving that $\\sqrt{5}+\\sqrt{3}$ is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot be proved with current methods." },
              { id: "b", text: "Compute its decimal expansion and observe it does not terminate." },
              { id: "c", text: "Show that $\\sqrt5$ and $\\sqrt3$ are each irrational — this is sufficient." },
              { id: "d", text: "Assume it equals $\\frac{p}{q}$ in lowest terms, isolate one surd, and square to derive a contradiction." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by contradiction", statement: "Irrationality of a sum requires a dedicated argument: isolate a radical and square." },
            ],
            steps: [
              { reasoning: "Sums of irrationals can be rational (e.g. $\\sqrt2+(1-\\sqrt2)=1$), so (b) is insufficient.", working: "\\text{need direct argument}", marks: 1, markCode: "M" },
              { reasoning: "Non-terminating decimals alone do not prove irrationality in general; the contradiction route is standard.", working: "\\text{contradiction}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Assume rational, isolate surd, square for contradiction",
            commonErrors: ["Thinking the sum of two irrationals is automatically irrational."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given that $a=\\sqrt{2}+1$, find the exact value of $(\\sqrt{2}+1)(\\sqrt{2}-1)$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Difference of squares", statement: "$(\\sqrt2+1)(\\sqrt2-1)=(\\sqrt2)^2-1^2=2-1=1$ — the surds are conjugates." },
            ],
            steps: [
              { reasoning: "Expand: $(\\sqrt2)^2-\\sqrt2+\\sqrt2-1=2-1=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "1", marks: 1, markCode: "A" },
              { reasoning: "Recognise conjugate pair giving rational result.", working: "\\text{conjugates}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "1",
            commonErrors: ["Expanding incorrectly to get $2+1=3$ or $\\sqrt2-1$."],
            examinerNote: "M1 A1 R1.",
          },
        },
        {
          id: "mypme5-u1-proof-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Prove that if $r$ is rational and $i$ is irrational, then $r+i$ is irrational.",
          parts: [
            { label: "a", prompt: "Suppose, for contradiction, that $r+i=s$ where $s$ is rational.", marks: 1 },
            { label: "b", prompt: "Rearrange to express $i$ in terms of $r$ and $s$.", marks: 1 },
            { label: "c", prompt: "Explain why this leads to a contradiction.", marks: 2 },
            { label: "d", prompt: "State the conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by contradiction", statement: "Assume $r+i$ rational; then $i$ would be a difference of rationals, hence rational — contradiction." },
            ],
            steps: [
              { part: "a", reasoning: "Assume $r+i=s\\in\\mathbb{Q}$ for contradiction.", working: "r+i=s\\in\\mathbb{Q}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Then $i=s-r$.", working: "i=s-r", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The difference of two rational numbers is rational, so $s-r$ is rational.", working: "s-r\\in\\mathbb{Q}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This contradicts the given fact that $i$ is irrational.", working: "\\text{contradiction}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Therefore $r+i$ cannot be rational, so it is irrational. QED.", working: "r+i\\text{ irrational}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the full conclusion clearly.", working: "\\therefore\\ r+i\\notin\\mathbb{Q}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "If $r$ rational and $i$ irrational, then $r+i$ is irrational.",
            commonErrors: ["Forgetting that the difference of rationals is rational."],
            examinerNote: "M1 for (a), M1 for (b), M1 R1 for (c), A1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-proof-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student writes: 'Assume $\\sqrt{2}$ is rational. Then $\\sqrt{2}=\\frac{p}{q}$. Squaring gives $2=\\frac{p^2}{q^2}$, so $p^2=2q^2$. Hence $p$ is even, say $p=2k$. Then $4k^2=2q^2$ so $q^2=2k^2$, so $q$ is even — contradicting lowest terms.' Which proof technique is used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proof by deduction" },
              { id: "b", text: "Proof by counterexample" },
              { id: "c", text: "Proof by exhaustion" },
              { id: "d", text: "Proof by contradiction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by contradiction", statement: "The argument assumes the negation and derives an impossibility." },
            ],
            steps: [
              { reasoning: "The proof assumes $\\sqrt2$ rational and derives a contradiction.", working: "\\text{contradiction}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Proof by contradiction",
            commonErrors: ["Calling it deduction because algebra is used."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Can we prove whether $\\pi+e$ is rational or irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is rational because irrationals cancel." },
              { id: "b", text: "It is irrational because $\\pi+e>3$." },
              { id: "c", text: "It is currently unknown — the sum of two irrationals may be either, and no proof exists yet." },
              { id: "d", text: "It is irrational because both $\\pi$ and $e$ are irrational." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Open problem", statement: "Whether $\\pi+e$ (and $\\pi e$) is irrational is a famous unsolved problem." },
            ],
            steps: [
              { reasoning: "Sums of irrationals are not determined: $\\sqrt2+(1-\\sqrt2)=1$ is rational.", working: "\\text{sum can be either}", marks: 1, markCode: "M" },
              { reasoning: "The rationality of $\\pi+e$ is an open problem in mathematics.", working: "\\text{unknown}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Currently unknown",
            commonErrors: ["Assuming irrational + irrational = irrational."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-proof-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Prove that $\\sqrt{2}$ is irrational.",
          parts: [
            { label: "a", prompt: "State the assumption made at the start of a proof by contradiction.", marks: 1 },
            { label: "b", prompt: "Squaring $\\sqrt2=\\frac pq$ leads to $p^2=2q^2$. Explain why $p$ must be even.", marks: 2 },
            { label: "c", prompt: "Complete the argument to reach a contradiction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by contradiction", statement: "Assume $\\sqrt2=\\frac pq$ in lowest terms; derive that both $p$ and $q$ are even, contradicting lowest terms." },
            ],
            steps: [
              { part: "a", reasoning: "Assume $\\sqrt2=\\frac{p}{q}$ with $p,q$ integers, $q\\ne0$, $\\gcd(p,q)=1$.", working: "\\sqrt2=\\frac{p}{q}\\text{ lowest terms}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$p^2=2q^2$ means $p^2$ is even.", working: "p^2=2q^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "If $p$ were odd, $p^2$ would be odd — so $p$ is even, $p=2k$.", working: "p=2k", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute: $4k^2=2q^2$ → $q^2=2k^2$, so $q$ is also even by the same argument.", working: "q^2=2k^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both $p,q$ even contradicts $\\gcd(p,q)=1$; hence $\\sqrt2$ is irrational. QED.", working: "\\therefore\\ \\sqrt2\\notin\\mathbb{Q}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{2}$ is irrational.",
            commonErrors: ["Claiming $q$ is even without repeating the odd-square argument."],
            examinerNote: "M1 for (a), M1 M1 for (b), M1 A1 for (c).",
          },
        },
      ],
    },
    {
      id: "mypme5-u1-sets",
      title: "Sets and Venn Diagrams",
      skill: "Use set notation, construct and interpret Venn diagrams, and apply set operations to probability and number problems.",
      lesson: {
        sections: [
          {
            heading: "Set notation",
            body: "$\\in$ (member), $\\notin$, $\\subseteq$ (subset), $\\cup$ (union), $\\cap$ (intersection), $A'$ (complement), $|A|$ (number of elements). $A\\subseteq B$ means every element of $A$ is in $B$.",
          },
          {
            heading: "Venn diagrams",
            body: "For two sets: regions represent $A\\cap B$, $A\\cap B'$, $A'\\cap B$, $(A\\cup B)'$. For three sets, 8 regions. Fill in known values and use $|A\\cup B|=|A|+|B|-|A\\cap B|$.",
          },
          {
            heading: "Sets and probability",
            body: "Events can be treated as sets: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ mirrors $|A\\cup B|=|A|+|B|-|A\\cap B|$. Mutually exclusive events have $A\\cap B=\\emptyset$.",
          },
        ],
        keyFormulas: [
          { name: "Union", statement: "$A\\cup B=\\{x:x\\in A\\text{ or }x\\in B\\}$" },
          { name: "Intersection", statement: "$A\\cap B=\\{x:x\\in A\\text{ and }x\\in B\\}$" },
          { name: "Inclusion-exclusion", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$" },
        ],
        workedExample: {
          problem: "In a class of 30, 18 study maths, 15 study physics, 7 study both. How many study neither?",
          solution: "$|M\\cup P|=18+15-7=26$; neither $=30-26=4$.",
        },
      },
      questions: [
        {
          id: "mypme5-u1-sets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $A=\\{1,2,3\\}$ and $B=\\{2,3,4\\}$, what is $A\\cap B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{2,3\\}$" },
              { id: "b", text: "$\\emptyset$" },
              { id: "c", text: "$\\{1,4\\}$" },
              { id: "d", text: "$\\{1,2,3,4\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "Elements in both sets: $\\{2,3\\}$." },
            ],
            steps: [
              { reasoning: "Common elements: 2 and 3.", working: "\\{2,3\\}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\{2,3\\}$",
            commonErrors: ["Computing union instead of intersection."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-sets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 50 students, 30 like tea, 25 like coffee, 10 like both. How many like neither?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "15" },
              { id: "c", text: "35" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inclusion-exclusion", statement: "$|T\\cup C|=30+25-10=45$; neither $=50-45=5$." },
            ],
            steps: [
              { reasoning: "$|T\\cup C|=30+25-10=45$.", working: "45", marks: 1, markCode: "M" },
              { reasoning: "Neither $=50-45=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting to subtract the overlap."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$\\mathbb{U}=\\{1,2,...,12\\}$, $A=\\{\\text{multiples of 3}\\}$, $B=\\{\\text{multiples of 4}\\}$. Find $A\\cap B$ and $A'\\cap B'$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A\\cap B=\\{3,4,6,8,9,12\\}$; $A'\\cap B'=\\{1,2,5,7,10,11\\}$" },
              { id: "b", text: "$A\\cap B=\\{12\\}$; $A'\\cap B'=\\{1,2,5,7,11\\}$" },
              { id: "c", text: "$A\\cap B=\\{6,12\\}$; $A'\\cap B'=\\{1,2,5,7,11\\}$" },
              { id: "d", text: "$A\\cap B=\\{12\\}$; $A'\\cap B'=\\{1,2,5,7,10,11\\}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Set operations", statement: "$A=\\{3,6,9,12\\}$, $B=\\{4,8,12\\}$; intersection $=\\{12\\}$; neither multiples of 3 or 4: $\\{1,2,5,7,10,11\\}$." },
            ],
            steps: [
              { reasoning: "$A=\\{3,6,9,12\\}$, $B=\\{4,8,12\\}$; $A\\cap B=\\{12\\}$.", working: "\\{12\\}", marks: 1, markCode: "M" },
              { reasoning: "$A'\\cap B'$ = elements of $\\mathbb{U}$ that are multiples of neither 3 nor 4: $\\{1,2,5,7,10,11\\}$ (10 is included).", working: "\\{1,2,5,7,10,11\\}", marks: 1, markCode: "M" },
              { reasoning: "State both sets.", working: "\\{12\\},\\{1,2,5,7,10,11\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A\\cap B=\\{12\\}$; $A'\\cap B'=\\{1,2,5,7,10,11\\}$",
            commonErrors: ["Excluding 10 from $A'\\cap B'$ — it is a multiple of neither 3 nor 4."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a survey of 100 people: 60 own a phone, 45 own a laptop, 30 own both.",
          parts: [
            { label: "a", prompt: "Draw a Venn diagram and fill in all regions.", marks: 2 },
            { label: "b", prompt: "How many own neither?", marks: 1 },
            { label: "c", prompt: "Given a person owns a phone, find the probability they also own a laptop.", marks: 2 },
            { label: "d", prompt: "Are owning a phone and owning a laptop independent events? Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Venn + probability", statement: "Regions: phone only 30, laptop only 15, both 30, neither 25." },
            ],
            steps: [
              { part: "a", reasoning: "Phone only: $60-30=30$; laptop only: $45-30=15$; both: 30; neither: $100-75=25$.", working: "30,15,30,25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All regions correct on Venn diagram.", working: "\\text{Venn filled}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Neither $=100-(30+15+30)=25$.", working: "25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(L|P)=\\frac{30}{60}=0.5$.", working: "0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", working: "0.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P(P)P(L)=0.6\\times0.45=0.27$; $P(P\\cap L)=0.3\\ne0.27$ → not independent.", working: "0.27\\ne0.3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compare products.", working: "P(P)P(L)=0.27", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State conclusion.", working: "\\text{not independent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30,15,30,25 (b) 25 (c) 0.5 (d) not independent",
            commonErrors: ["In (c), using 30/45 instead of 30/60."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-sets-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $A=\\{a,b,c\\}$ and $B=\\{b,c,d\\}$, what is $A\\cup B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{a,b,c,d\\}$" },
              { id: "b", text: "$\\{a,d\\}$" },
              { id: "c", text: "$\\emptyset$" },
              { id: "d", text: "$\\{b,c\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Union", statement: "$A\\cup B$ contains all elements in $A$ or $B$: $\\{a,b,c,d\\}$." },
            ],
            steps: [
              { reasoning: "List all distinct elements: $a,b,c,d$.", working: "\\{a,b,c,d\\}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\{a,b,c,d\\}$",
            commonErrors: ["Listing only common elements (that is intersection)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-sets-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $|A|=5$, $|B|=4$ and $|A\\cap B|=2$, find $|A\\cup B|$.",
          response: { type: "numeric", parts: [{ label: "$|A\\cup B|$", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inclusion-exclusion", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|=5+4-2=7$." },
            ],
            steps: [
              { reasoning: "$5+4-2=7$.", working: "7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "7",
            commonErrors: ["Adding without subtracting the intersection: 9."],
          },
        },
        {
          id: "mypme5-u1-sets-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the statement $A\\subseteq B$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A$ contains every element of $B$" },
              { id: "b", text: "$A$ and $B$ have the same elements" },
              { id: "c", text: "Every element of $A$ is also an element of $B$" },
              { id: "d", text: "$A$ and $B$ share at least one element" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subset", statement: "$A\\subseteq B$ iff $x\\in A\\Rightarrow x\\in B$." },
            ],
            steps: [
              { reasoning: "Subset means all of $A$'s elements belong to $B$.", working: "x\\in A\\Rightarrow x\\in B", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Every element of $A$ is in $B$",
            commonErrors: ["Confusing $\\subseteq$ with $\\cap$ or $=$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a group of 80 students, 45 study art and 50 study music, with 20 studying both. How many study neither?",
          response: { type: "numeric", parts: [{ label: "Neither", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inclusion-exclusion", statement: "$|A\\cup M|=45+50-20=75$; neither $=80-75=5$." },
            ],
            steps: [
              { reasoning: "$|A\\cup M|=45+50-20=75$.", working: "75", marks: 1, markCode: "M" },
              { reasoning: "Neither $=80-75=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting to subtract the overlap."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which Venn diagram region represents $(A\\cup B)'$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inside $A$ but outside $B$" },
              { id: "b", text: "Inside $B$ but outside $A$" },
              { id: "c", text: "Inside both circles" },
              { id: "d", text: "Outside both circles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complement of union", statement: "$(A\\cup B)'=A'\\cap B'$ — elements in neither set." },
            ],
            steps: [
              { reasoning: "Complement of union = in neither $A$ nor $B$.", working: "A'\\cap B'", marks: 1, markCode: "M" },
              { reasoning: "Match option (a): outside both circles.", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Outside both circles",
            commonErrors: ["Choosing the intersection region."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $|A\\cup B|=12$, $|A|=8$ and $|B|=7$, find $|A\\cap B|$.",
          response: { type: "numeric", parts: [{ label: "$|A\\cap B|$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inclusion-exclusion", statement: "$|A\\cap B|=|A|+|B|-|A\\cup B|=8+7-12=3$." },
            ],
            steps: [
              { reasoning: "$8+7-12=3$.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Rearranging the formula incorrectly."],
          },
        },
        {
          id: "mypme5-u1-sets-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sets $A$, $B$, $C$ have $|A|=10$, $|B|=8$, $|C|=6$, $|A\\cap B|=3$, $|A\\cap C|=2$, $|B\\cap C|=1$ and $|A\\cap B\\cap C|=1$. Find $|A\\cup B\\cup C|$.",
          response: { type: "numeric", parts: [{ label: "$|A\\cup B\\cup C|$", answer: 19 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inclusion-exclusion (3 sets)", statement: "$|A\\cup B\\cup C|=10+8+6-3-2-1+1=19$." },
            ],
            steps: [
              { reasoning: "Sum singles $=24$, subtract pairwise $=6$, add triple $=1$: $24-6+1=19$.", working: "19", marks: 1, markCode: "M" },
              { reasoning: "State the union size.", working: "19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19",
            commonErrors: ["Forgetting to add back the triple intersection."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a survey of 120 people: 60 drink tea, 55 drink coffee, 45 drink juice; 20 drink tea and coffee, 15 drink tea and juice, 10 drink coffee and juice, and 5 drink all three. How many drink only tea?",
          response: { type: "numeric", parts: [{ label: "Only tea", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Venn regions", statement: "Tea region $=60-(20+15-5)=60-30=30$ (the $-5$ avoids double-counting the triple overlap)." },
            ],
            steps: [
              { reasoning: "Tea∩(Coffee∪Juice) $=(20+15+10)-2(5)=40-10=30$? Recompute: elements in tea and at least one other $=(20+15)-5=30$.", working: "20+15-5=30", marks: 1, markCode: "M" },
              { reasoning: "Only tea $=60-30=30$.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
            commonErrors: ["Subtracting all pairwise intersections without adding back the triple."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In a class of 40 students: 25 play football, 20 play basketball and 8 play both.",
          parts: [
            { label: "a", prompt: "Fill in the four regions of a two-set Venn diagram.", marks: 2 },
            { label: "b", prompt: "How many students play neither sport?", marks: 1 },
            { label: "c", prompt: "Find the probability that a randomly chosen student who plays basketball also plays football.", marks: 2 },
            { label: "d", prompt: "Determine whether playing football and playing basketball are independent events.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Venn + probability", statement: "Regions: football only 17, basketball only 12, both 8, neither 3. Independence requires $P(F\\cap B)=P(F)P(B)$." },
            ],
            steps: [
              { part: "a", reasoning: "Football only $=25-8=17$; basketball only $=20-8=12$; both $=8$.", working: "17,12,8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Neither $=40-(17+12+8)=3$; all regions correct.", working: "3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Neither $=40-37=3$.", working: "3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(F|B)=\\frac{8}{20}=0.4$.", working: "0.4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", working: "0.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P(F)P(B)=\\frac{25}{40}\\cdot\\frac{20}{40}=0.625\\times0.5=0.3125\\ne P(F\\cap B)=0.2$ → not independent.", working: "0.3125\\ne0.2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 17,12,8,3 (b) 3 (c) 0.4 (d) not independent",
            commonErrors: ["In (c) using $\\frac{8}{40}$ instead of conditioning on basketball."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme5-u1-sets-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which expression is equivalent to $(A\\cup B)\\cap C$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(A\\cap B)\\cup C$" },
              { id: "b", text: "$(A\\cap C)\\cup(B\\cap C)$" },
              { id: "c", text: "$A\\cup(B\\cap C)$" },
              { id: "d", text: "$(A\\cup C)\\cap(B\\cup C)$ only when $A=B$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive law", statement: "$C$ distributes over $\\cup$: $(A\\cup B)\\cap C=(A\\cap C)\\cup(B\\cap C)$." },
            ],
            steps: [
              { reasoning: "Intersection distributes over union.", working: "(A\\cap C)\\cup(B\\cap C)", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(A\\cap C)\\cup(B\\cap C)$",
            commonErrors: ["Distributing incorrectly or reversing the operations."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The universal set has $|\\mathbb{U}|=50$ elements and $|A\\cup B|=40$. Find $n((A\\cup B)')$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "90" },
              { id: "c", text: "40" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complement", statement: "$(A\\cup B)'$ = elements in neither set $=|\\mathbb{U}|-|A\\cup B|=50-40=10$." },
            ],
            steps: [
              { reasoning: "$50-40=10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
              { reasoning: "State the count.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 10",
            commonErrors: ["Computing $50+40$ or $50\\times40$."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u1-sets-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "In a school of 200 students, 120 take mathematics, 90 take physics and 60 take both.",
          parts: [
            { label: "a", prompt: "Describe the four Venn regions with their sizes.", marks: 2 },
            { label: "b", prompt: "How many students take neither subject?", marks: 1 },
            { label: "c", prompt: "Find the probability that a student who takes physics also takes mathematics.", marks: 1 },
            { label: "d", prompt: "Are taking mathematics and taking physics independent? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Venn + probability", statement: "Regions: maths only 60, physics only 30, both 60, neither 50. $P(M|P)=\\frac{60}{90}=\\frac23$." },
            ],
            steps: [
              { part: "a", reasoning: "Maths only $=120-60=60$; physics only $=90-60=30$; both $=60$.", working: "60,30,60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Neither $=200-150=50$.", working: "50", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Neither $=200-(60+30+60)=50$.", working: "50", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(M|P)=\\frac{60}{90}=\\frac23\\approx0.667$.", working: "\\frac23", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$P(M)P(P)=0.6\\times0.45=0.27\\ne0.3=P(M\\cap P)$ → not independent.", working: "0.27\\ne0.3", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 60,30,60,50 (b) 50 (c) $\\frac23$ (d) not independent",
            commonErrors: ["In (c) dividing by 200 instead of 90."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 for (c), R1 for (d).",
          },
        },
      ],
    },
  ],
};
