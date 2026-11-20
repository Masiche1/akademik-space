import type { Lesson } from "../../../types.ts";

export const lesson512: Lesson = {
  id: "cial-c-u5-lesson-5-2",
  code: "5-2",
  title: "Acids, bases and pH",
  goal: "I CAN apply Brønsted–Lowry theory, calculate pH and explain buffer action.",
  standards: ["9701 5.2: acids and bases"],
  vocabulary: [
    { term: "Brønsted–Lowry acid", definition: "Proton donor." },
    { term: "Brønsted–Lowry base", definition: "Proton acceptor." },
    { term: "pH", definition: "$-\\log_{10}[H^+]$; pOH $=-\\log_{10}[OH^-]$; $pH+pOH=14$ at 25 °C." },
    { term: "Ka", definition: "Acid dissociation constant: $K_a=\\frac{[H^+][A^-]}{[HA]}$." },
    { term: "Buffer", definition: "Resists pH change: weak acid + its salt (or weak base + salt)." },
    { term: "Strong vs weak acid", definition: "Strong: fully ionised (HCl); weak: partial (ethanoic acid)." },
  ],
  concepts: [
    {
      id: "cial-c-u5-acid-base",
      title: "Acids, bases and pH",
      skill: "Distinguish strong/weak acids and calculate pH and Ka.",
      lesson: {
        sections: [
          {
            heading: "Brønsted–Lowry",
            body: "Acid donates $H^+$; base accepts $H^+$. Conjugate pairs differ by one proton: $CH_3COOH/CH_3COO^-$, $NH_4^+/NH_3$. Strong acids ionise completely; weak acids partially — measure of weakness is $K_a$.",
          },
          {
            heading: "pH calculations",
            body: "Strong acid: $[H^+]=c$, $pH=-\\log c$. Weak acid: $[H^+]\\approx\\sqrt{K_a c}$ (if $K_a\\ll c$). $pH+pOH=14$. For bases use $K_b$ or $K_w/K_a$ of conjugate acid.",
          },
          {
            heading: "Indicators and titration",
            body: "Indicator chosen so colour change near equivalence point pH. Strong acid–strong base: pH jumps steeply near 7; weak acid–strong base: equivalence point alkaline.",
          },
        ],
        keyFormulas: [
          { name: "pH", statement: "$pH=-\\log_{10}[H^+]$; $pH+pOH=14$" },
          { name: "Weak acid", statement: "$[H^+]\\approx\\sqrt{K_a \\cdot c}$; $K_a=\\frac{[H^+][A^-]}{[HA]}$" },
        ],
        workedExample: {
          problem: "Find the pH of $0.010$ mol dm$^{-3}$ HCl.",
          solution: "$[H^+]=0.010$, $pH=-\\log(0.010)=2.0$.",
        },
      },
      questions: [
        {
          id: "cial-c-u5-ab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Brønsted–Lowry theory, an acid is a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proton donor" },
              { id: "b", text: "Proton acceptor" },
              { id: "c", text: "Electron donor" },
              { id: "d", text: "Electron acceptor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Brønsted–Lowry acid", statement: "Acid donates $H^+$." }],
            steps: [{ reasoning: "Acid = proton donor.", marks: 1, markCode: "A" }],
            finalAnswer: "Proton donor",
          },
        },
        {
          id: "cial-c-u5-ab-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the pH of $0.0010$ mol dm$^{-3}$ HCl.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "pH", statement: "$pH=-\\log[H^+]$; strong acid $[H^+]=c$." }],
            steps: [
              { reasoning: "$[H^+]=0.0010$ mol dm$^{-3}$.", marks: 1, markCode: "M" },
              { reasoning: "$pH=-\\log(0.0010)=3.0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pH=3.0$",
          },
        },
        {
          id: "cial-c-u5-ab-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A weak acid HA has $K_a=1.8\\times10^{-5}$ and concentration $0.10$ mol dm$^{-3}$. Estimate $[H^+]$ and pH.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Weak acid", statement: "$[H^+]\\approx\\sqrt{K_a c}$." }],
            steps: [
              { reasoning: "$[H^+]\\approx\\sqrt{1.8\\times10^{-5}\\times0.10}$.", working: "\\sqrt{1.8 \\times 10^{-6}}", marks: 1, markCode: "M" },
              { reasoning: "$[H^+]\\approx1.34\\times10^{-3}$ mol dm$^{-3}$.", marks: 1, markCode: "M" },
              { reasoning: "$pH=-\\log(1.34\\times10^{-3})$.", working: "-\\log(1.34 \\times 10^{-3})", marks: 1, markCode: "M" },
              { reasoning: "$pH\\approx2.87$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$[H^+]\\approx1.3\\times10^{-3}$, $pH\\approx2.9$",
            commonErrors: ["Using $[H^+]=c$ for a weak acid."],
          },
        },
        {
          id: "cial-c-u5-ab-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Acids and pH.",
          parts: [
            { label: "a", prompt: "Define a Brønsted–Lowry acid and base.", marks: 2 },
            { label: "b", prompt: "Calculate the pH of $0.010$ mol dm$^{-3}$ HCl.", marks: 2 },
            { label: "c", prompt: "Why is the pH of $0.010$ mol dm$^{-3}$ ethanoic acid higher than that of HCl?", marks: 3 },
            { label: "d", prompt: "What is the pH of $0.0010$ mol dm$^{-3}$ NaOH?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "pH", statement: "$pH=-\\log[H^+]$; weak acids partially ionise." }],
            steps: [
              { part: "a", reasoning: "Acid donates $H^+$; base accepts $H^+$.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$[H^+]=0.010$, $pH=-\\log(0.010)=2.0$.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Ethanoic acid is weak — only partially ionised.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$[H^+] < 0.010$ so $-\\log[H^+]$ is larger.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Higher pH = less acidic.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$[OH^-]=0.0010$, $pOH=3.0$, $pH=14-3=11$.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) donor/acceptor (b) pH 2 (c) partial ionisation (d) pH 11",
          },
        },
      ],
    },
    {
      id: "cial-c-u5-buffers",
      title: "Buffers and salt hydrolysis",
      skill: "Explain buffer action and predict whether salt solutions are acidic or alkaline.",
      lesson: {
        sections: [
          {
            heading: "Acidic buffer",
            body: "Weak acid HA + its salt (e.g. $CH_3COOH + CH_3COONa$). Added $H^+$: $A^- + H^+ \\to HA$ (consumed). Added $OH^-$: $HA + OH^- \\to A^- + H_2O$. Both reservoir species absorb the change.",
          },
          {
            heading: "Buffer pH",
            body: "$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$ (Henderson–Hasselbalch). When $[A^-]=[HA]$, $pH=pK_a$. Prepare by mixing weak acid and its salt in known ratio.",
          },
          {
            heading: "Salt hydrolysis",
            body: "Salt of strong acid + strong base ($NaCl$): neutral. Strong base + weak acid ($CH_3COONa$): alkaline ($A^-$ hydrolyses). Strong acid + weak base ($NH_4Cl$): acidic ($NH_4^+$ hydrolyses).",
          },
        ],
        keyFormulas: [
          { name: "Henderson–Hasselbalch", statement: "$pH=pK_a+\\log\\frac{[A^-]}{[HA]}$" },
          { name: "Hydrolysis", statement: "Strong+weak gives non-neutral pH; weak acid salt alkaline, weak base salt acidic." },
        ],
        workedExample: {
          problem: "A buffer has $[CH_3COOH]=0.10$ and $[CH_3COO^-]=0.20$ mol dm$^{-3}$, $pK_a=4.76$. Find pH.",
          solution: "$pH=4.76+\\log(0.20/0.10)=4.76+\\log2=4.76+0.30=5.06$.",
        },
      },
      questions: [
        {
          id: "cial-c-u5-bf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the two components of an acidic buffer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weak acid + its salt" },
              { id: "b", text: "Strong acid + strong base" },
              { id: "c", text: "Water + salt only" },
              { id: "d", text: "Strong acid + weak base" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Acidic buffer", statement: "Weak acid HA + salt of A⁻." }],
            steps: [{ reasoning: "Buffer = weak acid + its conjugate base (salt).", marks: 1, markCode: "A" }],
            finalAnswer: "Weak acid + salt",
          },
        },
        {
          id: "cial-c-u5-bf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is a solution of $NH_4Cl$ acidic, alkaline or neutral? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Salt hydrolysis", statement: "Weak base cation hydrolyses → acidic." }],
            steps: [
              { reasoning: "$NH_4^+$ is a weak acid — donates $H^+$ to water.", marks: 1, markCode: "M" },
              { reasoning: "Solution is acidic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acidic",
          },
        },
        {
          id: "cial-c-u5-bf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an ethanoic acid/ethanoate buffer resists pH change when a small amount of HCl is added.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Buffer action", statement: "$CH_3COO^-$ consumes added $H^+$." }],
            steps: [
              { reasoning: "Added $H^+$ would lower pH.", marks: 1, markCode: "M" },
              { reasoning: "$CH_3COO^- + H^+ \\to CH_3COOH$ — H⁺ removed.", working: "CH_3COO^-+H^+\\to CH_3COOH", marks: 1, markCode: "M" },
              { reasoning: "pH barely changes because reservoir of A⁻ absorbs the acid.", marks: 1, markCode: "M" },
              { reasoning: "Correct mechanism described.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A⁻ neutralises added H⁺",
          },
        },
        {
          id: "cial-c-u5-bf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Buffers and hydrolysis.",
          parts: [
            { label: "a", prompt: "State the two components of an acidic buffer.", marks: 1 },
            { label: "b", prompt: "Explain how the buffer responds to added acid.", marks: 3 },
            { label: "c", prompt: "Predict the pH of a $CH_3COONa$ solution and justify.", marks: 3 },
            { label: "d", prompt: "Give the Henderson–Hasselbalch equation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Buffer", statement: "$pH=pK_a+\\log\\frac{[A^-]}{[HA]}$; A⁻ hydrolyses → alkaline." }],
            steps: [
              { part: "a", reasoning: "Weak acid + its salt (conjugate base).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Added $H^+$ reacts with $A^-$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$A^-+H^+\\to HA$ removes the acid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "pH change is small.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$CH_3COO^-$ is a weak base.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$CH_3COO^-+H_2O\\rightleftharpoons CH_3COOH+OH^-$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alkaline solution.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$pH=pK_a+\\log\\frac{[A^-]}{[HA]}$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Correct equation stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) HA+salt (b) A-+H+→HA (c) alkaline (d) pH=pKa+log[A-]/[HA]",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u5-acid-buffer-notes",
      title: "Acids, bases, pH and buffers — revision notes",
      summary: "Brønsted–Lowry theory, pH calculations, Ka and buffer action.",
      sections: [
        {
          heading: "Theory and pH",
          body: "Acid = $H^+$ donor, base = acceptor. Strong acids fully ionise: $[H^+]=c$, $pH=-\\log c$. Weak acid: $[H^+]\\approx\\sqrt{K_ac}$. $pH+pOH=14$ at 25 °C.",
        },
        {
          heading: "Buffers",
          body: "Acidic buffer = weak acid + its salt. Added $H^+$: $A^-+H^+\\to HA$; added $OH^-$: $HA+OH^-\\to A^-+H_2O$. $pH=pK_a+\\log\\frac{[A^-]}{[HA]}$. Salt of strong acid + weak base is acidic; weak acid + strong base is alkaline.",
        },
        {
          heading: "Exam checklist",
          body: "Always check whether acid is strong or weak before using $[H^+]=c$. For buffers show the neutralisation equation — that's where the marks are.",
        },
      ],
    },
  ],
};
