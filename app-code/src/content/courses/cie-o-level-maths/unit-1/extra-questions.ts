import type { Difficulty, Question } from "../../../types.ts";

type D = Difficulty;
type M = [D, string, string[], number, string, string];
type N = [D, string, number, string, string, string, string];
type O = [D, string, string, string, string, string, string];

const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\b[abcd]\s+and\s+[abcd]\b/i;
const mcqSeed = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;
  let a = mcqSeed(seed);
  const rnd = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = texts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;
};
const letterOf = (i: number): string => String.fromCharCode(97 + i);
const letterMapOf = (order: number[]): Record<string, string> =>
  Object.fromEntries(order.map((oldI, pos) => [letterOf(oldI), letterOf(pos)]));
const remapLetters = (s: string, map: Record<string, string> | null): string =>
  map ? s.replace(/\(([abcd])\)/g, (m, L) => (map[L] ? "(" + map[L] + ")" : m)) : s;

function mcq(id: string, d: D, stem: string, choices: string[], correct: number, reasoning: string, pname = "O Level rule"): Question {
  const ids = ["a", "b", "c", "d"];
  const __o = mcqOrder(choices, id);
  const __choices = __o ? __o.map((i) => choices[i]) : choices;
  const __correct = __o ? __o.indexOf(correct) : correct;
  return {
    id, difficulty: d, totalMarks: 1, stem,
    response: { type: "mcq", choices: __choices.map((text, i) => ({ id: ids[i], text })), correctChoiceId: ids[__correct] },
    markscheme: {
      principles: [{ kind: "technique", name: pname, statement: "Apply the relevant O Level rule." }],
      steps: [{ reasoning, marks: 1, markCode: "A" }],
      finalAnswer: "**" + ids[__correct] + "** " + __choices[__correct],
    },
  };
}

function num(id: string, d: D, stem: string, answer: number, r1: string, r2: string, final: string, pname = "O Level rule"): Question {
  return {
    id, difficulty: d, totalMarks: 2, stem,
    response: { type: "numeric", parts: [{ label: "a", answer }] },
    markscheme: {
      principles: [{ kind: "technique", name: pname, statement: "Apply the relevant O Level rule." }],
      steps: [{ reasoning: r1, marks: 1, markCode: "M" }, { reasoning: r2, marks: 1, markCode: "A" }],
      finalAnswer: final,
    },
  };
}

function open(id: string, d: D, stem: string, r1: string, r2: string, r3: string, final: string, pname = "O Level rule"): Question {
  return {
    id, difficulty: d, totalMarks: 3, stem, response: { type: "open" },
    markscheme: {
      principles: [{ kind: "technique", name: pname, statement: "Apply the relevant O Level rule." }],
      steps: [{ reasoning: r1, marks: 1, markCode: "M" }, { reasoning: r2, marks: 1, markCode: "M" }, { reasoning: r3, marks: 1, markCode: "A" }],
      finalAnswer: final,
    },
  };
}

export function extraQuestions(id: string): Question[] {
  const q = (n: number) => `${id}-q${n}`;
  switch (id) {
    case "olm-u1-s1-classify": {
      const m: M[] = [
        ["foundation", "Which of these numbers is irrational?", ["$\\sqrt7$", "$0.125$", "$\\frac{9}{4}$", "$-12$"], 0, "$\\sqrt7$ never terminates or repeats.", "Irrational numbers"],
        ["foundation", "Which number is rational but not an integer?", ["$\\sqrt3$", "$0.6$", "$\\pi$", "$\\sqrt{16}$"], 1, "$0.6=\\frac35$; $\\sqrt{16}=4$ is an integer.", "Rational numbers"],
        ["core", "What is the largest prime factor of 60?", ["5", "3", "2", "7"], 0, "$60=2^2\\times3\\times5$.", "Prime factorisation"],
        ["core", "The recurring decimal $0.\\dot{6}$ is equal to…", ["$\\frac23$", "$\\frac35$", "$\\frac16$", "$\\frac56$"], 0, "If $x=0.666\\ldots$, then $9x=6$.", "Recurring decimals"],
        ["foundation", "The value of $5+3\\times(8-6)$ is…", ["11", "17", "29", "23"], 0, "Brackets first: $8-6=2$, then $5+6=11$.", "BIDMAS"],
        ["challenge", "Which of these is not rational?", ["$\\frac{\\sqrt{16}}{2}$", "$0.\\dot{3}$", "$\\pi$", "$\\sqrt{25}$"], 2, "$\\frac{\\sqrt{16}}{2}=2$ and $\\sqrt{25}=5$ are rational.", "Number sets"],
      ];
      const n: N[] = [
        ["foundation", "Evaluate $4+6\\times3-10\\div2$.", 17, "$6\\times3=18$ and $10\\div2=5$.", "$4+18-5=17$.", "17", "BIDMAS"],
        ["foundation", "Write $\\frac58$ as a decimal.", 0.625, "$\\frac58=5\\div8$.", "$5\\div8=0.625$.", "0.625", "Fraction to decimal"],
        ["core", "Evaluate $2^4-3\\times5$.", 1, "$2^4=16$ and $3\\times5=15$.", "$16-15=1$.", "1", "BIDMAS"],
        ["core", "Evaluate $48\\div(3+5)$.", 6, "$3+5=8$.", "$48\\div8=6$.", "6", "Brackets first"],
      ];
      const o: O[] = [
        ["core", "Classify $\\sqrt{16}$ and $0.\\dot{7}$, giving a reason for each.", "$\\sqrt{16}=4$, an integer, so rational.", "$0.\\dot{7}$ is recurring, so rational.", "Both are rational: $\\sqrt{16}=4$ and $0.\\dot{7}=\\frac79$.", "Number classification", "Number sets"],
        ["challenge", "Explain, with one example of each, the difference between rational and irrational numbers.", "Rational can be written $\\frac pq$ with integer $q\\neq0$, e.g. $0.4=\\frac25$.", "Irrational cannot; its decimal is non-terminating and non-recurring, e.g. $\\sqrt2$.", "Rational: $\\frac{22}{7}$; irrational: $\\pi$ or $\\sqrt2$.", "Rational vs irrational", "Number sets"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s1-negative": {
      const m: M[] = [
        ["foundation", "$(-6)\\times(-7)$ equals…", ["42", "-42", "-13", "13"], 0, "Negative times negative is positive.", "Sign rules"],
        ["foundation", "$-8+(-5)$ equals…", ["-13", "-3", "3", "13"], 0, "Both negative: $-8-5=-13$.", "Adding negatives"],
        ["core", "Which statement is correct?", ["$-3^2=9$", "$(-3)^2=-9$", "$(-3)^2=9$", "$-3^2=0$"], 2, "Brackets make the negative part of the base.", "Powers of negatives"],
        ["core", "$-20\\div(-4)$ equals…", ["5", "-5", "-16", "16"], 0, "Negative divided by negative is positive.", "Sign rules"],
        ["foundation", "$-2-(-9)$ equals…", ["7", "-7", "-11", "11"], 0, "Subtracting a negative adds: $-2+9=7$.", "Subtracting negatives"],
        ["challenge", "$(-1)^5$ equals…", ["-1", "1", "5", "-5"], 0, "An odd power of -1 stays negative.", "Powers of negatives"],
      ];
      const n: N[] = [
        ["foundation", "Evaluate $-7-(-12)$.", 5, "Subtracting -12 is adding 12.", "$-7+12=5$.", "5", "Subtracting negatives"],
        ["foundation", "Evaluate $(-4)\\times(-6)-(-3)$.", 27, "$(-4)(-6)=24$ and $-(-3)=+3$.", "$24+3=27$.", "27", "Sign rules"],
        ["core", "Evaluate $(-2)^3+(-3)\\times(-4)$.", 4, "$(-2)^3=-8$; $(-3)(-4)=12$.", "$-8+12=4$.", "4", "Powers and products"],
        ["challenge", "The temperature is $-3°$C. It falls by $6°$C then rises by $10°$C. Find the final temperature.", 1, "Fall: $-3-6=-9$; rise: $-9+10$.", "$-9+10=1°$C.", "1", "Negative context"],
      ];
      const o: O[] = [
        ["core", "Explain the rules for multiplying and dividing negative numbers, giving one example of each.", "Same signs give positive: $(-5)\\times4=-20$ and $(-20)\\div4=-5$.", "Different signs give negative: $(-5)\\times(-4)=20$ and $20\\div(-4)=-5$.", "Same signs → positive; different signs → negative.", "Sign rules", "Sign rules"],
        ["challenge", "A lift is at $-18$ m relative to ground. It rises 7 m, sinks 12 m, then rises 25 m. Find its final position.", "Start at $-18$; rising 7 gives $-18+7=-11$ m.", "Sinking 12 gives $-11-12=-23$ m; rising 25 gives $-23+25=2$ m.", "Final position is $+2$ m, 2 m above ground.", "Negative context", "Number line"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s2-convert": {
      const m: M[] = [
        ["foundation", "$0.35$ as a percentage is…", ["35%", "0.35%", "3.5%", "350%"], 0, "Multiply by 100: $0.35\\times100=35$.", "Decimal to percentage"],
        ["foundation", "$45\\%$ as a fraction in lowest terms is…", ["$\\frac{45}{100}$", "$\\frac9{20}$", "$\\frac5{9}$", "$\\frac9{10}$"], 1, "$\\frac{45}{100}=\\frac9{20}$.", "Percentage to fraction"],
        ["core", "$\\frac7{20}$ as a percentage is…", ["35%", "28%", "70%", "20.7%"], 0, "$\\frac7{20}=0.35=35\\%$.", "Fraction to percentage"],
        ["core", "$0.08$ as a fraction in lowest terms is…", ["$\\frac8{100}$", "$\\frac2{25}$", "$\\frac1{8}$", "$\\frac4{50}$"], 1, "$0.08=\\frac8{100}=\\frac2{25}$.", "Decimal to fraction"],
        ["foundation", "Which fraction is equivalent to $0.125$?", ["$\\frac18$", "$\\frac14$", "$\\frac5{8}$", "$\\frac1{12}$"], 0, "$0.125=\\frac{125}{1000}=\\frac18$.", "Decimal to fraction"],
        ["challenge", "The decimal $0.\\dot{3}$ is equal to…", ["$\\frac13$", "$\\frac23$", "$\\frac15$", "$\\frac35$"], 0, "If $x=0.333\\ldots$, then $9x=3$.", "Recurring decimal"],
      ];
      const n: N[] = [
        ["foundation", "Convert $\\frac38$ to a decimal.", 0.375, "$\\frac38=3\\div8$.", "$3\\div8=0.375$.", "0.375", "Fraction to decimal"],
        ["foundation", "Convert $0.64$ to a percentage.", 64, "Multiply by 100.", "$0.64\\times100=64$.", "64", "Decimal to percentage"],
        ["core", "Convert $\\frac56$ to a decimal, giving your answer to 3 decimal places.", 0.833, "$\\frac56=5\\div6=0.8333\\ldots$.", "Rounded to 3 d.p., $0.833$.", "0.833", "Fraction to decimal"],
        ["challenge", "Convert $18\\%$ to a decimal and then to a fraction in lowest terms; give the decimal value of the fraction.", 0.18, "$18\\%=0.18=\\frac{18}{100}=\\frac9{50}$.", "The decimal value is $0.18$.", "0.18", "Percentage conversion"],
      ];
      const o: O[] = [
        ["core", "Convert $0.45$ to a fraction in lowest terms and to a percentage.", "$0.45=\\frac{45}{100}$.", "Simplify to $\\frac9{20}$; percentage is $45\\%$.", "Fraction $\\frac9{20}$ and percentage $45\\%$.", "Conversion", "Conversions"],
        ["challenge", "Explain how to decide whether a fraction gives a terminating or recurring decimal, using $\\frac38$ and $\\frac16$.", "$\\frac38=0.375$ terminates because $8=2^3$.", "$\\frac16=0.1666\\ldots$ recurs because $6$ contains factor 3.", "Denominators of form $2^a5^b$ terminate; other factors recur.", "Terminating decimals", "Decimals"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s2-percent": {
      const m: M[] = [
        ["foundation", "20% of 80 is…", ["16", "20", "60", "100"], 0, "$0.20\\times80=16$.", "Percentage of amount"],
        ["foundation", "A price rises from 50 to 60. The percentage increase is…", ["20%", "10%", "16.7%", "25%"], 0, "Increase 10; $\\frac{10}{50}\\times100=20\\%$.", "Percentage change"],
        ["core", "80 is decreased by 25%. The new value is…", ["60", "55", "75", "105"], 0, "$25\\%$ of 80 is 20; $80-20=60$.", "Percentage decrease"],
        ["core", "After a 20% increase, a bill is 120. The original bill was…", ["100", "96", "144", "102"], 0, "120 is 120% of original: $120\\div1.2=100$.", "Reverse percentage"],
        ["foundation", "15% of 200 is…", ["30", "15", "45", "300"], 0, "$0.15\\times200=30$.", "Percentage of amount"],
        ["challenge", "A shop gives 10% off 45, then adds 8% tax to the reduced price. The final price is…", ["43.74", "45.90", "48.60", "40.50"], 0, "$45\\times0.9=40.50$; $40.50\\times1.08=43.74$.", "Successive percentages"],
      ];
      const n: N[] = [
        ["foundation", "Find 12% of 350.", 42, "$0.12\\times350$.", "$0.12\\times350=42$.", "42", "Percentage of amount"],
        ["foundation", "Increase 80 by 15%.", 92, "$0.15\\times80=12$.", "$80+12=92$.", "92", "Percentage increase"],
        ["core", "Decrease 240 by 10%.", 216, "$0.10\\times240=24$.", "$240-24=216$.", "216", "Percentage decrease"],
        ["challenge", "After a 25% decrease, a coat costs 75. Find the original price.", 100, "75 is 75% of original.", "$75\\div0.75=100$.", "100", "Reverse percentage"],
      ];
      const o: O[] = [
        ["core", "A number is increased by 30% to give 78. Find the original number.", "78 is 130% of the original.", "Original $=78\\div1.3$.", "Original number is 60.", "Reverse percentage", "Percentages"],
        ["challenge", "A shop reduces prices by 20%, then by a further 10%. Explain why the total reduction is not 30% and find the final price of a 50 item.", "The second reduction acts on the reduced price.", "$50\\times0.8=40$; $40\\times0.9=36$.", "Overall multiplier $0.72$ gives a 28% reduction; final price 36.", "Successive percentages", "Percentages"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s3-indices": {
      const m: M[] = [
        ["foundation", "$2^3\\times2^4$ equals…", ["$2^{12}$", "$2^7$", "$4^7$", "$2^{343}$"], 1, "Same base: add indices, $2^{3+4}=2^7$.", "Laws of indices"],
        ["foundation", "For non-zero $a$, $a^0$ equals…", ["0", "1", "$a$", "undefined"], 1, "Any non-zero number to power 0 is 1.", "Zero index"],
        ["core", "$(3^2)^3$ equals…", ["$3^5$", "$3^6$", "$3^8$", "$9^5$"], 1, "Multiply indices: $3^{2\\times3}=3^6$.", "Power of a power"],
        ["core", "$5^{-1}$ equals…", ["$-5$", "$\\frac15$", "$-\\frac15$", "5"], 1, "Negative index means reciprocal.", "Negative indices"],
        ["foundation", "$\\frac{10^3}{10^2}$ equals…", ["10", "100", "1000", "1"], 0, "Subtract indices: $10^{3-2}=10$.", "Dividing powers"],
        ["challenge", "Simplify $\\frac{6^4}{6^2}\\times6^3$.", ["$6^5$", "$6^9$", "$6^3$", "$6^{24}$"], 0, "$6^{4-2+3}=6^5$.", "Combining indices"],
      ];
      const n: N[] = [
        ["foundation", "Evaluate $3^4$.", 81, "$3^4=3\\times3\\times3\\times3$.", "$3^4=81$.", "81", "Indices"],
        ["foundation", "Evaluate $2^5\\times2^3$.", 256, "Add indices: $2^8$.", "$2^8=256$.", "256", "Multiplying powers"],
        ["core", "Evaluate $(2^3)^2$.", 64, "Multiply indices: $2^6$.", "$2^6=64$.", "64", "Power of a power"],
        ["challenge", "Evaluate $5^0+5^1+5^2$.", 31, "$5^0=1$, $5^1=5$, $5^2=25$.", "$1+5+25=31$.", "31", "Index laws"],
      ];
      const o: O[] = [
        ["core", "Simplify $\\frac{4^3}{4^2}\\times4$ and explain each law used.", "Division gives $4^{3-2}=4^1$; multiplying by 4 gives $4^2$.", "Or $\\frac{4^3\\times4}{4^2}=\\frac{4^4}{4^2}=4^2$.", "The simplified expression is $4^2=16$.", "Index laws", "Indices"],
        ["challenge", "Explain why $2^{-3}$ is positive and find its value.", "Negative index means reciprocal: $2^{-3}=\\frac1{2^3}$.", "$2^3=8$.", "$2^{-3}=\\frac18$.", "Negative indices", "Indices"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s3-standard": {
      const m: M[] = [
        ["foundation", "$45\\,000$ in standard form is…", ["$4.5\\times10^4$", "$45\\times10^3$", "$4.5\\times10^3$", "$0.45\\times10^5$"], 0, "$45\\,000=4.5\\times10^4$.", "Standard form"],
        ["foundation", "$0.00062$ in standard form is…", ["$6.2\\times10^{-4}$", "$62\\times10^{-5}$", "$6.2\\times10^{-3}$", "$0.62\\times10^{-3}$"], 0, "First significant digit is in the fourth decimal place.", "Standard form"],
        ["core", "$(2\\times10^3)\\times(3\\times10^4)$ equals…", ["$6\\times10^7$", "$6\\times10^{12}$", "$5\\times10^7$", "$6\\times10^1$"], 0, "$2\\times3=6$ and $10^{3+4}=10^7$.", "Standard form operations"],
        ["core", "$1.2\\times10^{-3}$ as an ordinary decimal is…", ["$0.0012$", "$0.00012$", "$1200$", "$0.012$"], 0, "Move the decimal three places left.", "Standard form"],
        ["foundation", "Which number is written correctly in standard form?", ["$12\\times10^3$", "$0.8\\times10^4$", "$3.4\\times10^2$", "$5\\times10^{-1}$"], 2, "The coefficient must satisfy $1\\le a<10$.", "Standard form"],
        ["challenge", "$\\frac{8\\times10^6}{2\\times10^2}$ equals…", ["$4\\times10^4$", "$4\\times10^8$", "$6\\times10^4$", "$4\\times10^3$"], 0, "$\\frac82=4$ and $10^{6-2}=10^4$.", "Standard form operations"],
      ];
      const n: N[] = [
        ["foundation", "Evaluate $3\\times10^4+2\\times10^4$.", 50000, "Same power: $(3+2)\\times10^4$.", "$5\\times10^4=50\\,000$.", "50000", "Standard form addition"],
        ["foundation", "Evaluate $(2\\times10^3)\\times(5\\times10^2)$.", 1000000, "$2\\times5=10$ and $10^{3+2}=10^5$.", "$10\\times10^5=1\\,000\\,000$.", "1000000", "Standard form multiplication"],
        ["core", "Evaluate $\\frac{8\\times10^5}{4\\times10^2}$.", 2000, "$8\\div4=2$ and $10^{5-2}=10^3$.", "$2\\times10^3=2000$.", "2000", "Standard form division"],
        ["challenge", "Evaluate $(1.5\\times10^4)-(2.5\\times10^3)$.", 12500, "Write as $15\\times10^3-2.5\\times10^3$.", "$12.5\\times10^3=12\\,500$.", "12500", "Standard form subtraction"],
      ];
      const o: O[] = [
        ["core", "Express $0.000078$ in standard form and explain the power of 10.", "The first significant digit 7 is five places after the decimal point.", "So the power is $-5$.", "$0.000078=7.8\\times10^{-5}$.", "Standard form", "Standard form"],
        ["challenge", "Calculate $\\frac{(4\\times10^3)\\times(2.5\\times10^2)}{5\\times10^4}$.", "Multiply: $4\\times2.5=10$ and $10^{3+2}=10^5$, giving $10\\times10^5=1\\times10^6$.", "Divide by $5\\times10^4$: $1\\div5=0.2$ and $10^{6-4}=10^2$.", "$0.2\\times10^2=2\\times10=20$.", "Standard form operations", "Standard form"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s4-estimate": {
      const m: M[] = [
        ["foundation", "The best estimate of $198\\times5.1$ is…", ["1000", "100", "10000", "995"], 0, "Round to $200\\times5=1000$.", "Estimation"],
        ["foundation", "The best estimate of $19.8+301.7$ is…", ["320", "300", "350", "322"], 0, "Round to $20+300=320$.", "Estimation"],
        ["core", "The best estimate of $0.49\\times20.1$ is…", ["10", "1", "100", "9.8"], 0, "Round to $0.5\\times20=10$.", "Estimation"],
        ["core", "The best estimate of $1003\\div9.9$ is…", ["100", "10", "1000", "90"], 0, "Round to $1000\\div10=100$.", "Estimation"],
        ["foundation", "Which is the most sensible estimate for $48.7+51.2$?", ["100", "90", "110", "99"], 0, "Round to $50+50=100$.", "Estimation"],
        ["challenge", "The best estimate of $3.97\\times19.8$ is…", ["80", "8", "800", "78.6"], 0, "Round to $4\\times20=80$.", "Estimation"],
      ];
      const n: N[] = [
        ["foundation", "Estimate $47.8\\times5.2$ by rounding to one significant figure.", 250, "Round to $50\\times5$.", "$50\\times5=250$.", "250", "Estimation"],
        ["foundation", "Estimate $199+301.6$ by rounding to the nearest hundred.", 500, "Round to $200+300$.", "$200+300=500$.", "500", "Estimation"],
        ["core", "Estimate $0.48\\times19.9$ by rounding to one significant figure.", 10, "Round to $0.5\\times20$.", "$0.5\\times20=10$.", "10", "Estimation"],
        ["challenge", "Estimate $1004\\div9.96$ by rounding to one significant figure.", 100, "Round to $1000\\div10$.", "$1000\\div10=100$.", "100", "Estimation"],
      ];
      const o: O[] = [
        ["core", "Estimate $3.98\\times19.8+0.02$ and explain why it is reliable.", "Round to $4\\times20=80$; 0.02 is negligible.", "Exact value is about 78.9.", "Estimate: 80.", "Estimation", "Estimation"],
        ["challenge", "A student estimates $297\\times4.1$ as $300\\times4=1200$. Explain whether this is good and how to improve it.", "297 is close to 300 and 4.1 is close to 4, so 1200 is sensible.", "Using $300\\times4.1=1230$ or $297\\times4=1188$ is closer; exact is about 1217.7.", "The estimate is reasonable; a better estimate is about 1220.", "Estimation", "Estimation"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    case "olm-u1-s4-bounds": {
      const m: M[] = [
        ["foundation", "A length is 8 cm to the nearest cm. The lower bound is…", ["7.5 cm", "7 cm", "8.5 cm", "8 cm"], 0, "Nearest cm gives $8\\pm0.5$ cm.", "Error bounds"],
        ["foundation", "A mass is 2.4 kg to 1 decimal place. The upper bound is…", ["2.45 kg", "2.35 kg", "2.5 kg", "2.44 kg"], 0, "$2.4+0.05=2.45$ kg.", "Error bounds"],
        ["core", "A time is 15 seconds to the nearest second. The possible range is…", ["14.5 s to 15.5 s", "14 s to 16 s", "15 s to 16 s", "14.9 s to 15.1 s"], 0, "Bounds are $15\\pm0.5$ seconds.", "Error bounds"],
        ["core", "A measurement of 0.30 m to 2 decimal places has upper bound…", ["0.305 m", "0.31 m", "0.35 m", "0.304 m"], 0, "Half of 0.01 is 0.005; $0.30+0.005=0.305$ m.", "Error bounds"],
        ["foundation", "If a length is 12 mm to the nearest mm, the lower bound is…", ["11.5 mm", "11 mm", "12.5 mm", "11.9 mm"], 0, "Half a millimetre below 12 is 11.5 mm.", "Error bounds"],
        ["challenge", "A rectangle has length 10.0 cm and width 5.0 cm, both to 1 d.p. The largest possible perimeter is…", ["30.2 cm", "30 cm", "30.4 cm", "30.1 cm"], 0, "Use upper bounds 10.05 and 5.05: $2(10.05+5.05)=30.2$ cm.", "Bounds of perimeter"],
      ];
      const n: N[] = [
        ["foundation", "Write the lower bound of 7.3 to 1 decimal place.", 7.25, "Half of 0.1 is 0.05.", "$7.3-0.05=7.25$.", "7.25", "Lower bound"],
        ["foundation", "Write the upper bound of 4.8 to 1 decimal place.", 4.85, "Half of 0.1 is 0.05.", "$4.8+0.05=4.85$.", "4.85", "Upper bound"],
        ["core", "A measurement is 3.0 m to 1 decimal place. Find the upper bound.", 3.05, "Half of 0.1 is 0.05.", "$3.0+0.05=3.05$ m.", "3.05", "Upper bound"],
        ["challenge", "A square has side 6.0 cm to 1 decimal place. Find the maximum possible area.", 36.6025, "Maximum side is 6.05 cm.", "$6.05^2=36.6025$ cm².", "36.6025", "Bounds of area"],
      ];
      const o: O[] = [
        ["core", "A journey takes 25 minutes to the nearest minute. Explain the bounds and state the maximum possible time.", "Nearest minute gives $25\\pm0.5$ minutes.", "Lower 24.5 min; upper 25.5 min.", "Maximum time is 25.5 minutes.", "Error bounds", "Bounds"],
        ["challenge", "Two lengths are 4.0 cm and 2.0 cm, each to 1 d.p. Find the minimum and maximum possible sum.", "Minimum uses lower bounds: $3.95+1.95=5.90$ cm.", "Maximum uses upper bounds: $4.05+2.05=6.10$ cm.", "Sum lies between 5.90 cm and 6.10 cm.", "Bounds of sum", "Bounds"],
      ];
      return [...m.map((s, i) => mcq(q(5 + i), ...s)), ...n.map((s, i) => num(q(11 + i), ...s)), ...o.map((s, i) => open(q(15 + i), ...s))];
    }
    default:
      return [];
  }
}
