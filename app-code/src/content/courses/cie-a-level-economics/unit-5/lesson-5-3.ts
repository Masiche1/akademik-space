import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cieale-u5-lesson-5-3",
  code: "5-3",
  title: "Behavioural Economics and Contestable Markets",
  goal: "I CAN apply behavioural insights to consumer choice and analyse contestable market theory.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 5: advanced microeconomics",
  ],
  vocabulary: [
    {
      term: "Bounded rationality",
      definition:
        "Decision-makers have limited information/processing ability.",
    },
    {
      term: "Loss aversion",
      definition: "Losses loom larger than equivalent gains.",
    },
    {
      term: "Nudge",
      definition: "Choice architecture influencing decisions without mandates.",
    },
    {
      term: "Default effect",
      definition: "People tend to accept pre-set options.",
    },
    {
      term: "Contestable market",
      definition: "Market with costless, instant entry/exit.",
    },
    {
      term: "Hit-and-run competition",
      definition: "Entry/exit to exploit temporary supernormal profit.",
    },
  ],
  concepts: [
    {
      id: "cieale-u5l3-c1-behavioural",
      title: "Behavioural economics",
      skill:
        "Apply bounded rationality, loss aversion and nudges to economic decisions.",
      lesson: {
        sections: [
          {
            heading: "Bounded rationality",
            body: "Traditional economics assumes perfect rationality — **behavioural economics** shows people have **bounded rationality**: limited information, cognitive biases, willpower limits. Decisions deviate from 'optimal' — e.g. people save too little, overestimate small probabilities, follow defaults.",
          },
          {
            heading: "Key biases and nudges",
            body: "**Loss aversion** — losses hurt ~2x more than gains please → status quo bias, endowment effect. **Default effect** — people stick with pre-set options (organ donation, pension enrolment). **Nudge** — choice architecture guides behaviour without restricting options (auto-enrolment, calorie labels).",
          },
        ],
        keyFormulas: [
          {
            name: "Bounded rationality",
            statement: "Limited info/processing → biases",
          },
          { name: "Loss aversion", statement: "Losses > gains in magnitude" },
          { name: "Nudge", statement: "Guide choice without mandates" },
        ],
        workedExample: {
          problem: "Why do people save too little for retirement?",
          solution:
            "Bounded rationality + present bias (hyperbolic discounting) + complexity → people under-save; auto-enrolment (nudge) dramatically increases saving rates.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bounded rationality means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random choice" },
              { id: "b", text: "Perfect rationality" },
              { id: "c", text: "Limited information/processing ability" },
              { id: "d", text: "Always optimal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bounded rationality",
                statement: "Limited capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Limited capacity",
            commonErrors: ["Opposite meaning."],
          },
        },
        {
          id: "cieale-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'loss aversion'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Loss aversion",
                statement: "Losses > gains.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "People feel losses ~2x more intensely than equivalent gains — explains status quo bias and reluctance to sell losing investments.",
            commonErrors: ["Confusing with risk aversion."],
          },
        },
        {
          id: "cieale-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'default effect' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Default effect",
                statement: "People accept pre-set options.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Policy use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "People tend to stick with default options — e.g. organ donation consent rates jump when 'opt-out' is default vs 'opt-in'; used in pension auto-enrolment.",
            commonErrors: ["Thinking people always choose."],
          },
        },
        {
          id: "cieale-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How do 'nudges' differ from mandates? Evaluate their use in policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nudge vs mandate",
                statement: "Choice architecture vs compulsion.",
              },
            ],
            steps: [
              { reasoning: "Nudge defined.", marks: 1, markCode: "M" },
              { reasoning: "Mandate contrast.", marks: 1, markCode: "M" },
              { reasoning: "Advantages.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Nudges preserve choice while guiding behaviour (libertarian paternalism) — less intrusive but may be less effective and ethically debatable; work best alongside mandates for serious harms.",
            commonErrors: ["Conflating with mandates."],
          },
        },
        {
          id: "cieale-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate behavioural economics' challenge to the rational consumer model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BE critique",
                statement: "Real behaviour deviates from rationality.",
              },
            ],
            steps: [
              { reasoning: "Evidence for.", marks: 1, markCode: "M" },
              { reasoning: "Limits of BE.", marks: 1, markCode: "M" },
              { reasoning: "Policy implications.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "BE shows systematic deviations from rationality (biases, defaults) that matter for policy — but models are simplified and effects may be context-dependent; complements rather than replaces rational model.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'hyperbolic discounting'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hyperbolic discounting",
                statement: "Present bias — value now over future.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "People disproportionately prefer immediate rewards over larger future ones — explains undersaving, procrastination, addiction-like consumption.",
            commonErrors: ["Confusing with normal discounting."],
          },
        },
        {
          id: "cieale-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'nudge' is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Choice architecture guiding behaviour without mandates",
              },
              { id: "b", text: "A subsidy" },
              { id: "c", text: "A law" },
              { id: "d", text: "A tax" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nudge",
                statement: "Guide without mandate.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Choice architecture",
            commonErrors: ["Confusing with mandate."],
          },
        },
        {
          id: "cieale-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of nudges in public policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Nudge examples",
                statement: "Auto-enrolment, labels, defaults.",
              },
            ],
            steps: [
              { reasoning: "Two valid examples.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. pension auto-enrolment (default effect increases saving) and calorie/sugar labels (information nudge reduces unhealthy consumption).",
            commonErrors: ["Examples without mechanism."],
          },
        },
        {
          id: "cieale-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do people exhibit 'status quo bias'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Status quo bias",
                statement: "Preference for current state.",
              },
            ],
            steps: [
              {
                reasoning: "Mechanism: loss aversion + effort.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Loss aversion (change feels like loss) + effort of switching + uncertainty about alternatives — people stick with familiar options even when better exist.",
            commonErrors: ["Thinking it's rational."],
          },
        },
        {
          id: "cieale-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should governments use nudges to change behaviour? Evaluate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nudge policy",
                statement: "Effective but ethically debated.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Ethical concerns.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Nudges are cheap and preserve choice but may manipulate without consent — best used transparently for beneficial outcomes, not as substitute for mandates on serious harms.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bounded rationality suggests consumers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never use heuristics" },
              { id: "b", text: "Always make optimal choices" },
              { id: "c", text: "Have perfect information" },
              {
                id: "d",
                text: "Have limited ability to process all relevant information",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bounded rationality",
                statement: "Limited capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Limited information processing",
            commonErrors: ["Opposite meaning."],
          },
        },
        {
          id: "cieale-q-u5l3c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'present bias' and how is it related to hyperbolic discounting?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Present bias",
                statement: "Overvalue immediate rewards.",
              },
            ],
            steps: [
              {
                reasoning: "Present bias: people overweight immediate vs future outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hyperbolic discounting explains it: discount rate is very high for near future.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Present bias is the tendency to overvalue immediate rewards; hyperbolic discounting (steep near-term discounting) explains why it occurs — leads to procrastination and undersaving.",
            commonErrors: ["Treating as separate concepts."],
          },
        },
        {
          id: "cieale-q-u5l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Automatic enrolment of employees into pension schemes is an example of exploiting:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economies of scale" },
              { id: "b", text: "Adverse selection" },
              { id: "c", text: "The kinked demand curve" },
              { id: "d", text: "The default effect" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Default effect",
                statement: "People accept pre-set options.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Default effect",
            commonErrors: ["Confusing with mandate."],
          },
        },
        {
          id: "cieale-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how loss aversion can lead to the 'disposition effect' in financial markets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disposition effect",
                statement: "Hold losers, sell winners.",
              },
            ],
            steps: [
              {
                reasoning: "Losses feel ~2x more painful than equivalent gains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Investors hold losing stocks too long, sell winners too early.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Irrational behaviour contradicts expected utility theory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Loss aversion makes investors reluctant to realise losses → hold losers too long and sell winners early — the disposition effect.",
            commonErrors: ["No link to loss aversion."],
          },
        },
        {
          id: "cieale-q-u5l3c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A critic of nudges might argue they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are always ineffective" },
              {
                id: "b",
                text: "Manipulate choice without genuine consent",
              },
              { id: "c", text: "Increase consumer choice" },
              { id: "d", text: "Require legal mandates" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nudge critique",
                statement: "Libertarian paternalism concerns.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Manipulate choice",
            commonErrors: ["Missing ethical concern."],
          },
        },
        {
          id: "cieale-q-u5l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how behavioural insights can be used to improve public policy design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Behavioural policy",
                statement: "Choice architecture for better outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Defaults and auto-enrolment (pensions, organ donation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplification and framing of choices.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Reminders and social norms.", marks: 1, markCode: "A" },
              { reasoning: "Limits: ethics, heterogeneous effects, manipulation.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Behavioural insights (defaults, framing, reminders) can cheaply improve outcomes like saving and health, but must be used transparently and ethically.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieale-u5l3-c2-contestable",
      title: "Contestable markets theory",
      skill:
        "Analyse how potential competition disciplines market power even without actual rivals.",
      lesson: {
        sections: [
          {
            heading: "Contestable markets",
            body: "A market is **contestable** if entry and exit are **costless and instant** — 'hit-and-run' competition possible. Even a monopolist in a contestable market must price at competitive levels (normal profit) because supernormal profit would attract instant entry. **Entry barriers** determine contestability.",
          },
          {
            heading: "Conditions and applications",
            body: "Requires: no sunk costs, rapid entry/exit, equal access to technology. Real markets rarely fully contestable (sunk costs exist), but contestability explains why some concentrated markets still behave competitively — e.g. airlines, retail.",
          },
        ],
        keyFormulas: [
          { name: "Contestable", statement: "Costless instant entry/exit" },
          {
            name: "Hit-and-run",
            statement: "Entry to exploit, exit when profit gone",
          },
          {
            name: "Discipline",
            statement: "Potential competition limits pricing",
          },
        ],
        workedExample: {
          problem:
            "Why might an airline monopoly still charge competitive prices?",
          solution:
            "If entry/exit is easy (contestable), supernormal profit attracts new entrants instantly → airline must keep prices at normal-profit level to deter entry.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A contestable market requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No barriers" },
              { id: "b", text: "Many firms" },
              { id: "c", text: "Government regulation" },
              { id: "d", text: "Costless, instant entry and exit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contestable",
                statement: "Free entry/exit.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Costless instant entry/exit",
            commonErrors: ["Confusing with competitive."],
          },
        },
        {
          id: "cieale-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'hit-and-run' competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hit-and-run",
                statement: "Enter to exploit, exit quickly.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Condition.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Firms enter a market to exploit supernormal profit, then exit when profit disappears — possible only in contestable markets with costless entry/exit.",
            commonErrors: ["Confusing with normal entry."],
          },
        },
        {
          id: "cieale-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how contestability disciplines a monopolist.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestability discipline",
                statement: "Threat of entry limits pricing.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Normal profit result.", marks: 1, markCode: "M" },
              { reasoning: "Condition.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If entry is costless, supernormal profit attracts entrants → monopolist must price at competitive level (normal profit) to deter entry — potential competition disciplines actual monopoly.",
            commonErrors: ["Thinking monopoly always exploits."],
          },
        },
        {
          id: "cieale-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why are most real markets not fully contestable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestability limits",
                statement: "Sunk costs, time, information.",
              },
            ],
            steps: [
              { reasoning: "Sunk costs barrier.", marks: 1, markCode: "M" },
              { reasoning: "Time delay.", marks: 1, markCode: "M" },
              { reasoning: "Information asymmetry.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sunk costs (can't recover on exit), time to enter, imperfect information about profit opportunities — real entry isn't instant/costless, so discipline is partial.",
            commonErrors: ["Assuming contestability common."],
          },
        },
        {
          id: "cieale-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate contestable markets theory's relevance to competition policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestability policy",
                statement: "Focus on entry barriers not firm numbers.",
              },
            ],
            steps: [
              { reasoning: "Policy implication.", marks: 1, markCode: "M" },
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Suggests policy should reduce entry barriers rather than just count firms — but real markets rarely contestable, so structural regulation still needed for true monopolies.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'sunk costs' and why do they matter for contestability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sunk costs",
                statement: "Irrecoverable costs.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Contestability link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Costs that can't be recovered on exit — they make entry risky and exit costly, reducing contestability; markets with high sunk costs are less contestable.",
            commonErrors: ["Confusing with variable costs."],
          },
        },
        {
          id: "cieale-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a contestable market, a monopolist earns:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any profit" },
              { id: "b", text: "Only normal profit" },
              { id: "c", text: "Supernormal profit" },
              { id: "d", text: "Economic losses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestable outcome",
                statement: "Normal profit only.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Normal profit",
            commonErrors: ["Thinking monopoly = supernormal."],
          },
        },
        {
          id: "cieale-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a relatively contestable market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Contestable examples",
                statement: "Low sunk cost industries.",
              },
            ],
            steps: [
              { reasoning: "Valid example.", marks: 1, markCode: "M" },
              { reasoning: "Why contestable.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. airlines or long-distance coaches — low sunk costs, easy entry/exit, so even dominant firms face competitive discipline.",
            commonErrors: ["Example with high sunk costs."],
          },
        },
        {
          id: "cieale-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does potential competition differ from actual competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Potential vs actual",
                statement: "Threat vs presence.",
              },
            ],
            steps: [
              { reasoning: "Actual defined.", marks: 1, markCode: "M" },
              { reasoning: "Potential defined.", marks: 1, markCode: "M" },
              { reasoning: "Effect same.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Actual competition = rivals present; potential = threat of entry disciplines behaviour — in contestable markets, potential competition can be as effective as actual.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether reducing entry barriers is always pro-competitive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entry barriers",
                statement: "Usually good but exceptions.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits of lower barriers.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Exceptions.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lower entry barriers usually increase competition, but some barriers serve social purposes (safety regulation, professional standards) — blanket removal can harm consumers.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Contestable markets theory was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hayek and Schumpeter" },
              { id: "b", text: "Smith, Ricardo and Marx" },
              { id: "c", text: "Keynes and Friedman" },
              {
                id: "d",
                text: "Baumol, Panzar and Willig",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Contestability",
                statement: "Baumol, Panzar, Willig.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Baumol, Panzar and Willig",
            commonErrors: ["Wrong attribution."],
          },
        },
        {
          id: "cieale-q-u5l3c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two conditions necessary for a market to be contestable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contestable conditions",
                statement: "Costless rapid entry/exit, no sunk costs.",
              },
            ],
            steps: [
              {
                reasoning: "Costless and rapid entry and exit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No significant sunk costs; equal access to technology.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Costless instant entry/exit and absence of sunk costs (plus equal access to technology).",
            commonErrors: ["Listing actual competitors instead."],
          },
        },
        {
          id: "cieale-q-u5l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Hit-and-run' competition is possible when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sunk costs are high" },
              { id: "b", text: "Firms earn permanent supernormal profit" },
              { id: "c", text: "There are many incumbents" },
              {
                id: "d",
                text: "Entry and exit are costless and rapid",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hit-and-run",
                statement: "Rapid entry/exit to exploit profit.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Costless rapid entry/exit",
            commonErrors: ["Confusing with actual entry."],
          },
        },
        {
          id: "cieale-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'hit-and-run' entry disciplines an incumbent monopolist.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hit-and-run discipline",
                statement: "Potential entry caps pricing.",
              },
            ],
            steps: [
              {
                reasoning: "Supernormal profit attracts potential entrants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Entrants can enter, take share, exit when profit gone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Incumbent must price at competitive level to deter entry.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Threat of hit-and-run entry forces the monopolist to charge competitive prices and earn only normal profit.",
            commonErrors: ["Thinking entry must actually occur."],
          },
        },
        {
          id: "cieale-q-u5l3c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Contestable markets theory is criticised because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It applies only to perfect competition" },
              { id: "b", text: "It ignores potential competition" },
              { id: "c", text: "It assumes perfect information only" },
              {
                id: "d",
                text: "Real markets have sunk costs and entry is never instant",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestability critique",
                statement: "Unrealistic entry assumptions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Unrealistic entry assumptions",
            commonErrors: ["Missing sunk costs point."],
          },
        },
        {
          id: "cieale-q-u5l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the limitations of contestable markets theory in explaining real-world market structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestability limits",
                statement: "Theory vs reality.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: explains competitive pricing in concentrated markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitation: sunk costs are pervasive in real markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Entry is never truly instant; information asymmetries exist.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Examples where it works: airlines, retail.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Contestability is a useful benchmark but real markets rarely satisfy its strict conditions — it explains some cases but not most.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
