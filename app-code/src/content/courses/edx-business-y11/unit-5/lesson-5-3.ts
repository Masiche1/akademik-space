import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ebz11-u5-lesson-5-3",
  code: "5-3",
  title: "Industrial Relations and Employment Law",
  goal: "I CAN explain employment rights, contracts and industrial relations.",
  standards: ["Edexcel IGCSE Business 4BS0 — Human Resources"],
  vocabulary: [
    {
      term: "Employment contract",
      definition: "Legal agreement between employer and employee.",
    },
    {
      term: "Trade union",
      definition: "Organisation representing workers' interests.",
    },
    {
      term: "Collective bargaining",
      definition: "Negotiation between employer and union.",
    },
    { term: "Dismissal", definition: "Ending employment — fair or unfair." },
    {
      term: "Discrimination",
      definition: "Unfair treatment based on protected characteristics.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u5-contracts",
      title: "Employment Contracts and Rights",
      skill: "Understand employment contracts and basic employee rights.",
      lesson: {
        sections: [
          {
            heading: "Employment contract",
            body: "**Written statement**: job title, hours, pay, holidays, notice period, duties. **Types**: permanent, fixed-term, part-time, zero-hours. **Implied terms**: mutual trust, duty of care, reasonable instructions.\n\n**Employee rights**: minimum wage, paid holidays, rest breaks, protection from unfair dismissal, anti-discrimination, safe working conditions, maternity/paternity leave.",
          },
          {
            heading: "Fair vs unfair dismissal",
            body: "**Fair dismissal**: misconduct, poor performance (after warnings), redundancy, capability. Must follow fair procedure — investigation, warnings, appeal.\n\n**Unfair dismissal**: dismissal without valid reason or proper procedure — employee can claim compensation. **Automatically unfair**: health & safety, pregnancy, trade union activity.\n\n**Redundancy**: job no longer needed — must be genuine, consultation required, redundancy pay may be due.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An employee is fired for being pregnant. Fair or unfair?",
          solution:
            "Unfair — pregnancy is protected characteristic, automatic unfair dismissal.",
        },
      },
      questions: [
        {
          id: "ebz11-u5-contracts-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should an employment contract include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only job title" },
              { id: "b", text: "Nothing — verbal is enough" },
              { id: "c", text: "Job title, hours, pay, holidays, duties" },
              { id: "d", text: "Only salary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contract contents",
                statement: "Title, hours, pay, holidays, duties.",
              },
            ],
            steps: [
              {
                reasoning: "Contract includes key terms.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Key terms",
            commonErrors: ["Verbal assumed enough."],
          },
        },
        {
          id: "ebz11-u5-contracts-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of unfair dismissal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unfair dismissal",
                statement: "No valid reason or improper procedure.",
              },
            ],
            steps: [
              {
                reasoning: "Dismissing for pregnancy/health & safety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dismissing without warnings or investigation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dismissing for trade union membership.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Pregnancy, no procedure, union membership.",
            commonErrors: ["Fair reasons listed.", "Only one."],
          },
        },
        {
          id: "ebz11-u5-contracts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why employment law protects employees from unfair dismissal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Employment protection",
                statement: "Balance employer power vs employee rights.",
              },
            ],
            steps: [
              {
                reasoning: "Employees have less power than employers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protection prevents arbitrary dismissal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Encourages fair treatment and due process.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protects vulnerable groups from discrimination.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Balances power — prevents arbitrary dismissal, protects vulnerable.",
            commonErrors: ["No reason.", "Employer perspective only."],
          },
        },
        {
          id: "ebz11-u5-contracts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An employee is dismissed after one warning for repeated lateness.",
          parts: [
            {
              label: "a",
              prompt: "Is this likely fair or unfair? Explain.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "What procedure should employer have followed?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fair dismissal",
                statement: "Valid reason + proper procedure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Possibly unfair — one warning may be insufficient.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Lateness is valid reason but procedure matters.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Investigation, verbal warning, written warning, final warning, dismissal.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Employee should have chance to explain/appeal.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) possibly unfair — insufficient warnings (b) progressive warnings+appeal",
            commonErrors: ["Auto fair.", "No procedure."],
          },
        },
      ],
    },
    {
      id: "ebz11-u5-industrial",
      title: "Industrial Relations and Discrimination",
      skill: "Understand unions, collective bargaining and discrimination law.",
      lesson: {
        sections: [
          {
            heading: "Trade unions and collective bargaining",
            body: "**Trade unions**: represent workers — negotiate pay, conditions, protect jobs. **Collective bargaining**: union negotiates with employer on behalf of members. **Benefits**: better pay/conditions, protection, voice. **Conflicts**: strikes, disputes over pay/conditions.\n\n**Strike**: workers stop work to pressure employer. **Lock-out**: employer prevents workers entering. Both disrupt business.",
          },
          {
            heading: "Discrimination law",
            body: "**Protected characteristics**: age, gender, race, disability, religion, sexual orientation, pregnancy. **Direct discrimination**: treating someone worse because of characteristic. **Indirect discrimination**: rules that disadvantage a group. **Harassment**: unwanted behaviour violating dignity.\n\n**Employer duties**: equal opportunities policy, anti-discrimination training, reasonable adjustments for disabled workers.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A company only hires men for a role. What type of discrimination?",
          solution:
            "Direct discrimination — gender is protected characteristic.",
        },
      },
      questions: [
        {
          id: "ebz11-u5-industrial-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is collective bargaining?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company buying another company" },
              { id: "b", text: "Union members voting" },
              { id: "c", text: "Workers striking" },
              {
                id: "d",
                text: "Union negotiating with employer on pay/conditions",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collective bargaining",
                statement: "Union negotiates pay/conditions for members.",
              },
            ],
            steps: [
              {
                reasoning: "Collective bargaining = union negotiation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Union negotiation",
            commonErrors: ["Strike confused."],
          },
        },
        {
          id: "ebz11-u5-industrial-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of trade unions for workers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Union benefits",
                statement: "Better pay, protection, voice.",
              },
            ],
            steps: [
              {
                reasoning: "Negotiate better pay and conditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protect against unfair treatment/dismissal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Provide legal support and representation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Better pay, protection, legal support.",
            commonErrors: ["Employer benefits.", "Only one."],
          },
        },
        {
          id: "ebz11-u5-industrial-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between direct and indirect discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discrimination types",
                statement:
                  "Direct = obvious; indirect = rules disadvantage group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direct: treat someone worse because of characteristic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: refuse job because of race.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Indirect: neutral rule disadvantages a group.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: height requirement excludes women disproportionately.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Direct = obvious treatment; indirect = neutral rule disadvantages group.",
            commonErrors: ["Same thing.", "No example."],
          },
        },
        {
          id: "ebz11-u5-industrial-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company has a 'no beards' policy that disadvantages Muslim employees.",
          parts: [
            {
              label: "a",
              prompt: "What type of discrimination is this?",
              marks: 3,
            },
            { label: "b", prompt: "Explain why it may be unlawful.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest a reasonable adjustment.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect discrimination",
                statement: "Neutral rule disadvantaging protected group.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Indirect discrimination — religion protected.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Rule appears neutral but disadvantages Muslims.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Disproportionate impact on protected group.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) No justification — beard doesn't affect job.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Allow exceptions for religious reasons / hygiene alternatives.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) indirect discrimination (b) disproportionate+no justification (c) reasonable adjustment",
            commonErrors: ["Direct assumed.", "No adjustment."],
          },
        },
      ],
    },
  ],
};
