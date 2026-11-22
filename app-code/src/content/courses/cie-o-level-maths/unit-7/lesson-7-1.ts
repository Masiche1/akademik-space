import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "olm-u7-lesson-7-1",
  code: "7-1",
  title: "Probability",
  goal: "I CAN calculate probabilities of simple and combined events.",
  standards: ["4024: probability"],
  vocabulary: [
    { term: "Probability", definition: "Likelihood of event: $P(E)=\\frac{\\text{favourable}}{\\text{total}}$." },
    { term: "Mutually exclusive", definition: "Events that cannot both happen." },
    { term: "Independent", definition: "One event doesn't affect the other." },
    { term: "Sample space", definition: "All possible outcomes." },
  ],
  concepts: [
    {
      id: "olm-u7-s1-basic",
      title: "Basic probability",
      skill: "Calculate simple probabilities at O Level.",
      lesson: {
        sections: [
          { heading: "The basics", body: "Probability ranges from 0 (impossible) to 1 (certain). For equally likely outcomes, $P(E)=\\frac{\\text{number favourable}}{\\text{total outcomes}}$. Probabilities of all outcomes sum to 1 — useful for finding missing probabilities. $P(\\text{not }E)=1-P(E)$ — the complement rule saves time when 'not' is easier to count." },
          { heading: "Counting outcomes", body: "List the sample space systematically: for two coins {HH, HT, TH, TT}; for dice pairs make a grid. 'At least one' problems are often easiest via complement: $P(\\text{at least one})=1-P(\\text{none})$. Always check whether outcomes are equally likely — biased coins/dice change everything." },
        ],
        keyFormulas: [
          { name: "Probability", statement: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$" },
          { name: "Complement", statement: "$P(E')=1-P(E)$" },
        ],
        workedExample: { problem: "A bag has 3 red, 5 blue balls. Find P(red).", solution: "$P(\\text{red})=\\frac{3}{8}=0.375$." },
      },
      questions: [
        {
          id: "olm-u7-s1-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The probability of an impossible event is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Depends" },
            { id: "b", text: "0" },
            { id: "c", text: "1" },
            { id: "d", text: "0.5" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Probability scale", statement: "0 to 1." }], steps: [{ reasoning: "Impossible → 0.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olm-u7-s1-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A die is rolled. Find P(rolling a 6).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Probability", statement: "Favourable/total." }], steps: [
            { reasoning: "$P=\\frac16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac16$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac16$" },
        },
        {
          id: "olm-u7-s1-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "A bag has 4 green and 6 yellow counters. Find P(not green).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "$1-P(E)$." }], steps: [
            { reasoning: "$P(\\text{green})=\\frac{4}{10}=0.4$ → $P(\\text{not green})=1-0.4=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Or directly $\\frac{6}{10}=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.6" },
        },
        {
          id: "olm-u7-s1-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Two coins are tossed. Find P(at least one head).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "At least one = 1 - none." }], steps: [
            { reasoning: "Sample space: HH, HT, TH, TT (4 equally likely).", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{no heads})=P(TT)=\\frac14$ → $P(\\text{at least one})=\\frac34$.", marks: 1, markCode: "M" },
            { reasoning: "Or count directly: HH, HT, TH = 3 of 4 → $\\frac34$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac34$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac34$" },
        },
        {
          id: "olm-u7-s1-ba-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A bag contains 5 red and 15 blue counters. One counter is chosen at random. Find P(red).",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.2" },
            { id: "b", text: "0.25" },
            { id: "c", text: "0.75" },
            { id: "d", text: "0.3" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Probability", statement: "$\\frac{\\text{favourable}}{\\text{total}}$." }], steps: [{ reasoning: "$P(\\text{red})=\\frac{5}{20}=0.25$.", marks: 1, markCode: "A" }], finalAnswer: "0.25" },
        },
        {
          id: "olm-u7-s1-ba-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A spinner is divided into 8 equal sectors numbered 1 to 8. Find the probability of spinning an odd number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Probability", statement: "Favourable/total." }], steps: [
            { reasoning: "Odd numbers: 1, 3, 5, 7 → 4 favourable of 8.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac48=0.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5" },
        },
        {
          id: "olm-u7-s1-ba-q7", difficulty: "core", totalMarks: 3,
          stem: "Two fair coins are tossed. Find the probability of getting at least one tail.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "$1-P(\\text{none})$." }], steps: [
            { reasoning: "Sample space: HH, HT, TH, TT.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{no tails})=P(HH)=\\frac14$ → $P=1-\\frac14=\\frac34=0.75$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.75.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.75" },
        },
        {
          id: "olm-u7-s1-ba-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these values cannot be a probability?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.9" },
            { id: "b", text: "1.0" },
            { id: "c", text: "0.4" },
            { id: "d", text: "1.2" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Probability range", statement: "0 to 1 inclusive." }], steps: [{ reasoning: "Probabilities must lie between 0 and 1.", marks: 1, markCode: "A" }], finalAnswer: "1.2" },
        },
        {
          id: "olm-u7-s1-ba-q9", difficulty: "core", totalMarks: 3,
          stem: "A box contains cards numbered 1 to 20. One card is drawn at random. Find the probability that the number is prime.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Counting outcomes", statement: "Count primes up to 20." }], steps: [
            { reasoning: "Primes ≤ 20: 2, 3, 5, 7, 11, 13, 17, 19 → 8 primes.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{8}{20}=\\frac25=0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.4 (or $\\frac25$).", marks: 1, markCode: "A" },
          ], finalAnswer: "0.4" },
        },
        {
          id: "olm-u7-s1-ba-q10", difficulty: "core", totalMarks: 2,
          stem: "Three fair coins are tossed. Find the probability of getting exactly two heads.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.375 }] },
          markscheme: { principles: [{ kind: "technique", name: "Sample space", statement: "8 equally likely outcomes." }], steps: [
            { reasoning: "Favourable: HHT, HTH, THH → 3 of 8.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac38=0.375$.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.375" },
        },
        {
          id: "olm-u7-s1-ba-q11", difficulty: "core", totalMarks: 1,
          stem: "For any event $E$, $P(E)+P(\\text{not }E)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(E)$" },
            { id: "b", text: "Depends on $E$" },
            { id: "c", text: "1" },
            { id: "d", text: "0" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Complement", statement: "Sum to 1." }], steps: [{ reasoning: "E and not-E cover all outcomes exactly once.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olm-u7-s1-ba-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A bag contains 4 red, 5 blue and 3 green balls. One ball is drawn at random. Find the probability that it is not blue.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "Count non-blue directly or use $1-P$." }], steps: [
            { reasoning: "Total balls: $4+5+3=12$.", marks: 1, markCode: "M" },
            { reasoning: "Not blue: $4+3=7$ balls → $P(\\text{not blue})=\\frac7{12}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $P(\\text{blue})=\\frac5{12}$; $1-\\frac5{12}=\\frac7{12}$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac7{12}\\approx0.583$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac7{12}$" },
        },
        {
          id: "olm-u7-s1-ba-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A fair die is rolled. Find the probability of rolling a multiple of 3. Give your answer as a decimal to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.333, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "formula", name: "Probability", statement: "Favourable/total." }], steps: [
            { reasoning: "Multiples of 3 on a die: 3 and 6 → 2 favourable.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac26=\\frac13\\approx0.333$.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.333" },
        },
        {
          id: "olm-u7-s1-ba-q14", difficulty: "core", totalMarks: 1,
          stem: "A biased coin lands heads with probability 0.6. What is the probability it lands tails?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.5" },
            { id: "b", text: "0.4" },
            { id: "c", text: "1.6" },
            { id: "d", text: "0.6" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Complement", statement: "$1-P(E)$." }], steps: [{ reasoning: "$1-0.6=0.4$.", marks: 1, markCode: "A" }], finalAnswer: "0.4" },
        },
        {
          id: "olm-u7-s1-ba-q15", difficulty: "core", totalMarks: 3,
          stem: "A bag contains cards showing 5 even numbers and 7 odd numbers. One card is drawn at random. Find the probability of drawing an even number and the probability of drawing an odd number.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Probability", statement: "Favourable/total for each." }], steps: [
            { reasoning: "Total $=12$; $P(\\text{even})=\\frac5{12}\\approx0.417$, $P(\\text{odd})=\\frac7{12}\\approx0.583$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac5{12}+\\frac7{12}=1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: even $\\frac5{12}$, odd $\\frac7{12}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$P(\\text{even})=\\frac5{12}$; $P(\\text{odd})=\\frac7{12}$" },
        },
        {
          id: "olm-u7-s1-ba-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A number is chosen at random from the integers 1 to 30 inclusive. Find the probability that the number is prime or a multiple of 5.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inclusive OR", statement: "Add, subtract overlap." }], steps: [
            { reasoning: "Primes ≤ 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 → 10 primes.", marks: 1, markCode: "M" },
            { reasoning: "Multiples of 5: 5, 10, 15, 20, 25, 30 → 6; overlap (prime and multiple of 5): only 5 → 1.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{10+6-1}{30}=\\frac{15}{30}=0.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5" },
        },
      ],
    },
    {
      id: "olm-u7-s1-combined",
      title: "Combined events",
      skill: "Calculate probabilities of combined events at O Level.",
      lesson: {
        sections: [
          { heading: "AND and OR", body: "For independent events: $P(A\\text{ and }B)=P(A)\\times P(B)$ — e.g. two dice, P(6 then 6) = $\\frac16\\times\\frac16=\\frac1{36}$. For mutually exclusive events: $P(A\\text{ or }B)=P(A)+P(B)$. If events aren't independent or mutually exclusive, draw a tree diagram or use the general addition rule carefully." },
          { heading: "Tree diagrams", body: "Tree diagrams organise multi-stage probabilities. Branch probabilities multiply along paths; add probabilities of all paths giving the required outcome. Always check: does the second stage depend on the first (sampling without replacement)? If yes, probabilities change — e.g. drawing two sweets without replacement." },
        ],
        keyFormulas: [
          { name: "Independent AND", statement: "$P(A)\\times P(B)$" },
          { name: "Mutually exclusive OR", statement: "$P(A)+P(B)$" },
        ],
        workedExample: { problem: "A bag has 2 red, 3 blue. Two balls drawn without replacement. Find P(both red).", solution: "$P=\\frac{2}{5}\\times\\frac{1}{4}=\\frac{2}{20}=\\frac1{10}$." },
      },
      questions: [
        {
          id: "olm-u7-s1-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For independent events, P(A and B) = …",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(A)-P(B)$" },
            { id: "b", text: "$P(A)+P(B)$" },
            { id: "c", text: "$P(A)\\times P(B)$" },
            { id: "d", text: "$P(A)/P(B)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "AND rule", statement: "Multiply for independent." }], steps: [{ reasoning: "Standard rule.", marks: 1, markCode: "A" }], finalAnswer: "$P(A)\\times P(B)$" },
        },
        {
          id: "olm-u7-s1-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A fair coin is tossed twice. Find P(two heads).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Independent", statement: "Multiply." }], steps: [
            { reasoning: "$P=\\frac12\\times\\frac12=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac14$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u7-s1-co-q3", difficulty: "core", totalMarks: 3,
          stem: "A bag has 3 red, 2 blue. One ball drawn. Find P(red or blue).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Mutually exclusive OR", statement: "Add." }], steps: [
            { reasoning: "$P(\\text{red})=\\frac35$, $P(\\text{blue})=\\frac25$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac35+\\frac25=1$ (certain — all balls are red or blue).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u7-s1-co-q4", difficulty: "core", totalMarks: 4,
          stem: "A bag has 4 red, 6 blue. Two balls drawn without replacement. Find P(both blue).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Without replacement", statement: "Probabilities change." }], steps: [
            { reasoning: "First blue: $\\frac{6}{10}=\\frac35$; second blue: $\\frac{5}{9}$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac35\\times\\frac59=\\frac{15}{45}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Verified: without replacement, second draw has 5 blue of 9 left ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u7-s1-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "For mutually exclusive events A and B, P(A or B) = …",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1-P(A)P(B)$" },
            { id: "b", text: "$P(A)\\times P(B)$" },
            { id: "c", text: "$P(A)+P(B)$" },
            { id: "d", text: "$P(A)-P(B)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "OR rule", statement: "Add for mutually exclusive." }], steps: [{ reasoning: "Standard rule.", marks: 1, markCode: "A" }], finalAnswer: "$P(A)+P(B)$" },
        },
        {
          id: "olm-u7-s1-co-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Two fair dice are rolled. Find P(the numbers shown sum to 12).",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac1{18}$" },
            { id: "b", text: "$\\frac1{36}$" },
            { id: "c", text: "$\\frac16$" },
            { id: "d", text: "$\\frac1{12}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Dice pairs", statement: "Only (6,6) sums to 12." }], steps: [{ reasoning: "1 favourable of 36 equally likely pairs → $\\frac1{36}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac1{36}$" },
        },
        {
          id: "olm-u7-s1-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A fair coin is tossed three times. Find the probability of getting three heads.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.125 }] },
          markscheme: { principles: [{ kind: "formula", name: "Independent AND", statement: "Multiply." }], steps: [
            { reasoning: "$P=\\frac12\\times\\frac12\\times\\frac12=\\frac18=0.125$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.125.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.125" },
        },
        {
          id: "olm-u7-s1-co-q8", difficulty: "core", totalMarks: 3,
          stem: "A bag has 4 red and 6 blue balls. Two balls are drawn with replacement. Find the probability that both are red.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.16 }] },
          markscheme: { principles: [{ kind: "technique", name: "With replacement", statement: "Probabilities stay the same." }], steps: [
            { reasoning: "$P(\\text{red})=\\frac4{10}=0.4$ each draw.", marks: 1, markCode: "M" },
            { reasoning: "$P=0.4\\times0.4=0.16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.16.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.16" },
        },
        {
          id: "olm-u7-s1-co-q9", difficulty: "core", totalMarks: 3,
          stem: "A bag contains 5 red, 5 blue and 5 green counters. One counter is drawn at random. Find P(red or green).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Mutually exclusive OR", statement: "Add probabilities." }], steps: [
            { reasoning: "$P(\\text{red})=\\frac5{15}$, $P(\\text{green})=\\frac5{15}$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac5{15}+\\frac5{15}=\\frac{10}{15}=\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac23$ ($\\approx0.667$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac23$" },
        },
        {
          id: "olm-u7-s1-co-q10", difficulty: "core", totalMarks: 1,
          stem: "Events A and B are independent with $P(A)=0.5$ and $P(B)=0.4$. Find $P(A\\text{ and }B)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.2" },
            { id: "b", text: "0.9" },
            { id: "c", text: "0.1" },
            { id: "d", text: "0.45" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Independent AND", statement: "Multiply." }], steps: [{ reasoning: "$0.5\\times0.4=0.2$.", marks: 1, markCode: "A" }], finalAnswer: "0.2" },
        },
        {
          id: "olm-u7-s1-co-q11", difficulty: "core", totalMarks: 3,
          stem: "A fair die is rolled and a fair coin is tossed. Find the probability of rolling a 6 and getting a head.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Independent AND", statement: "Multiply." }], steps: [
            { reasoning: "$P(6)=\\frac16$, $P(\\text{head})=\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac16\\times\\frac12=\\frac1{12}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac1{12}$ ($\\approx0.083$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac1{12}$" },
        },
        {
          id: "olm-u7-s1-co-q12", difficulty: "core", totalMarks: 3,
          stem: "A bag has 3 red and 2 blue balls. Two balls are drawn without replacement. Find the probability that the two balls are different colours.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Two paths", statement: "RB + BR." }], steps: [
            { reasoning: "RB: $\\frac35\\times\\frac24=\\frac{6}{20}$; BR: $\\frac25\\times\\frac34=\\frac{6}{20}$.", marks: 1, markCode: "M" },
            { reasoning: "Total: $\\frac{12}{20}=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.6" },
        },
        {
          id: "olm-u7-s1-co-q13", difficulty: "core", totalMarks: 1,
          stem: "For two events that are NOT mutually exclusive, P(A or B) = …",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(A)-P(B)$" },
            { id: "b", text: "$P(A)+P(B)$" },
            { id: "c", text: "$P(A)+P(B)-P(A\\cap B)$" },
            { id: "d", text: "$P(A)\\times P(B)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "General addition rule", statement: "Subtract overlap once." }], steps: [{ reasoning: "Overlap counted twice by addition — remove it.", marks: 1, markCode: "A" }], finalAnswer: "$P(A)+P(B)-P(A\\cap B)$" },
        },
        {
          id: "olm-u7-s1-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A bag contains 4 red, 3 blue and 3 green balls. Two balls are drawn without replacement. Find the probability of getting at least one red ball.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement via tree", statement: "1 - P(no red)." }], steps: [
            { reasoning: "$P(\\text{no red})=P(\\text{blue or green})=\\frac6{10}\\times\\frac59=\\frac{30}{90}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{at least one red})=1-\\frac13=\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "Direct check: RB+BR+RG+GR+RR paths give same total.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac23$ ($\\approx0.667$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac23$" },
        },
        {
          id: "olm-u7-s1-co-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A box has 2 green and 3 red pens. Two pens are taken without replacement. Find the probability that the two pens are the same colour.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Same colour", statement: "GG + RR paths." }], steps: [
            { reasoning: "GG: $\\frac25\\times\\frac14=\\frac2{20}$; RR: $\\frac35\\times\\frac24=\\frac6{20}$.", marks: 1, markCode: "M" },
            { reasoning: "Total: $\\frac8{20}=0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.4.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.4" },
        },
        {
          id: "olm-u7-s1-co-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Three fair coins are tossed. Find the probability of getting at least two heads.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sample space", statement: "List favourable outcomes." }], steps: [
            { reasoning: "Sample space has 8 equally likely outcomes.", marks: 1, markCode: "M" },
            { reasoning: "At least two heads: HHH, HHT, HTH, THH → 4 outcomes.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac48=\\frac12=0.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u7-s1-prob-notes", title: "Probability — notes", summary: "Basic and combined events.",
      sections: [
        { heading: "Rules", body: "$P(E)=\\text{fav}/\\text{total}$; complement $1-P$; independent AND multiply; exclusive OR add." },
        { heading: "Pitfalls", body: "Without replacement changes probabilities; 'at least one' via complement; list sample space for multi-stage." },
      ] },
  ],
};
