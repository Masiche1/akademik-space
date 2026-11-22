import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eias-soc-u4-lesson-4-3",
  code: "4-3",
  title: "Gender, Ethnicity and Crime",
  goal: "I CAN explain patterns of crime by gender and ethnicity.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 4 — Crime and Deviance"],
  vocabulary: [
    {
      term: "Gendered crime",
      definition: "Crime patterns differ by gender — men commit most crime.",
    },
    {
      term: "Double deviance",
      definition: "Women deviating from gender norms + law.",
    },
    {
      term: "Ethnic criminalisation",
      definition: "Minority groups disproportionately criminalised.",
    },
    {
      term: "Institutional racism",
      definition: "Racism in justice system — policing, sentencing.",
    },
    { term: "Victimisation", definition: "Being target of crime." },
    {
      term: "Labelling",
      definition: "Being defined as criminal by authorities.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u4-gender",
      title: "Gender and Crime",
      skill: "Explain gender patterns in crime and deviance.",
      lesson: {
        sections: [
          {
            heading: "Gender and crime statistics",
            body: "**Men commit most crime**: ~80-90% of arrests. **Women commit less**: but patterns differ — women more likely shoplifting, fraud; men more violent crime. **Why?**: socialisation — masculinity linked to aggression, risk-taking; opportunity — men more public space.\n\n**Feminist explanations**: patriarchal control — women's crime punished more harshly ('double deviance'); female crime often response to male violence (self-defence).",
          },
          {
            heading: "Gender and victimisation",
            body: "**Women more likely victims**: domestic violence, sexual assault. **Men more likely victims**: street crime, homicide. **Hidden crime**: domestic violence underreported — shame, fear, economic dependence.\n\n**Evaluation**: gender patterns reflect socialisation, opportunity, and control — complex interactions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Woman punished more harshly for same crime as man. Concept?",
          solution: "Double deviance.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-gender-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is double deviance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat offender" },
              { id: "b", text: "Two crimes" },
              { id: "c", text: "Violating gender norms + law" },
              { id: "d", text: "Double punishment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double deviance",
                statement: "Gender + law.",
              },
            ],
            steps: [
              {
                reasoning: "Double deviance = gender norm + crime.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Gender+law",
            commonErrors: ["Two crimes confused."],
          },
        },
        {
          id: "eias-soc-u4-gender-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two explanations for gender crime patterns.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender crime",
                statement: "Socialisation + opportunity.",
              },
            ],
            steps: [
              {
                reasoning: "Socialisation — masculinity linked to aggression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Opportunity — men more public space, exposure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Control — patriarchal system punishes female crime more.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Socialisation, opportunity, control.",
            commonErrors: ["Only one.", "Wrong explanation."],
          },
        },
        {
          id: "eias-soc-u4-gender-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why women are often victims of domestic violence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Domestic violence",
                statement: "Gender power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gender power imbalance — male dominance in relationships.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Economic dependence — women may lack resources to leave.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Underreporting — shame, fear, disbelief.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hidden crime — official stats underestimate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Power+dependence+underreporting.",
            commonErrors: ["No reason.", "Only one."],
          },
        },
        {
          id: "eias-soc-u4-gender-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Woman assaults abusive partner in self-defence.",
          parts: [
            {
              label: "a",
              prompt: "Explain double deviance concept.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest legal response considerations.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Self-defence case",
                statement: "Gender + law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Double deviance — violates gender norms (women shouldn't be violent) + law.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Punished more harshly — 'unnatural' for women.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Context matters — self-defence, abuse history.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Legal reform — recognise coercive control, abuse context.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) gender+law (b) context+reform",
            commonErrors: ["Simple crime.", "No context."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u4-ethnicity",
      title: "Ethnicity and Crime",
      skill: "Explain ethnic patterns in crime and criminalisation.",
      lesson: {
        sections: [
          {
            heading: "Ethnic crime statistics",
            body: "**Over-representation**: some ethnic minorities appear more in crime stats — Black, Asian groups. **But**: statistics reflect policing, not actual crime — ethnic minorities more likely stopped/searched, convicted. **Self-report studies**: show smaller differences — hidden crime similar across groups.\n\n**Institutional racism**: police targeting, stop-and-search, sentencing disparities — minority groups criminalised more.",
          },
          {
            heading: "Explanations",
            body: "**Marxist**: ethnic minorities disproportionately poor — structural deprivation → crime. **Interactionist**: labelling — police label minorities as suspects → self-fulfilling prophecy. **Realist**: crime concentrated in deprived areas — regardless of ethnicity.\n\n**Evaluation**: statistics problematic — reflect policing, not truth; multiple explanations needed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Ethnic group over-represented in arrests but not self-report crime. Explanation?",
          solution: "Policing bias, not actual crime.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is ethnic criminalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethnic groups commit more crime" },
              {
                id: "b",
                text: "Minorities disproportionately labelled/convicted",
              },
              { id: "c", text: "No ethnic crime" },
              { id: "d", text: "Ethnic crime is natural" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethnic criminalisation",
                statement: "Disproportionate.",
              },
            ],
            steps: [
              {
                reasoning: "Criminalisation = disproportionate labelling.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Disproportionate",
            commonErrors: ["Actual crime confused."],
          },
        },
        {
          id: "eias-soc-u4-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two explanations for ethnic crime statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnic crime",
                statement: "Deprivation + policing.",
              },
            ],
            steps: [
              {
                reasoning: "Structural deprivation — poverty, unemployment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Policing bias — more stops, searches, convictions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Labelling — stereotypes → self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Deprivation, policing bias, labelling.",
            commonErrors: ["Only one.", "Wrong explanation."],
          },
        },
        {
          id: "eias-soc-u4-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why self-report studies show different patterns than official stats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stats vs self-report",
                statement: "Policing vs actual.",
              },
            ],
            steps: [
              {
                reasoning: "Official stats reflect policing — who gets caught.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Self-report captures hidden crime — actual behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Minorities over-policed — more arrests, not more crime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Self-report may underreport — honesty issues.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Policing bias → official stats distorted.",
            commonErrors: ["Same patterns.", "No difference."],
          },
        },
        {
          id: "eias-soc-u4-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Minority neighbourhood has high crime stats and heavy policing.",
          parts: [
            { label: "a", prompt: "Explain possible causes.", marks: 4 },
            { label: "b", prompt: "Suggest solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnic crime response",
                statement: "Causes + solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Deprivation — poverty, unemployment, poor housing.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Policing bias — over-policing creates stats.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Address deprivation — jobs, education, community.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Reform policing — reduce bias, community policing.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) deprivation+policing (b) social+reform",
            commonErrors: ["One cause.", "No solution."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u4-evaluation",
      title: "Evaluating Crime and Deviance",
      skill: "Synthesize and evaluate theories of crime.",
      lesson: {
        sections: [
          {
            heading: "Theoretical synthesis",
            body: "**Multiple causes**: crime results from combination — inequality (Marxist), strain (functionalist), labelling (interactionist), individual choice (right realist). No single theory sufficient.\n\n**Structure vs agency**: structural theories explain patterns; interactionist shows individual agency. Best explanations combine both.",
          },
          {
            heading: "Policy evaluation",
            body: "**Prevention**: situational (short-term), social (long-term), restorative (repair). **Punishment**: retribution, deterrence, rehabilitation — each has limits. **Realist consensus**: crime real problem — need evidence-based solutions.\n\n**Evaluation**: crime complex — no easy answers; theory guides but doesn't dictate policy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Theory explains crime by poverty but ignores individual choice. Weakness?",
          solution: "Too deterministic — ignores agency.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-synth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why can't one theory explain all crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crime doesn't exist" },
              { id: "b", text: "Crime is simple" },
              { id: "c", text: "Theory is perfect" },
              { id: "d", text: "Crime has multiple causes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiple causes",
                statement: "Complex phenomenon.",
              },
            ],
            steps: [
              {
                reasoning: "Crime complex — multiple causes.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Multiple causes",
            commonErrors: ["Simple confused."],
          },
        },
        {
          id: "eias-soc-u4-synth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors contributing to crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crime factors",
                statement: "Structure + agency.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty/inequality — structural deprivation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Individual choice — rational decision.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Labelling — reaction creates criminal identity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Poverty, choice, labelling.",
            commonErrors: ["Only one.", "Wrong factor."],
          },
        },
        {
          id: "eias-soc-u4-synth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain structure vs agency in crime explanations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure vs agency",
                statement: "Forces vs choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure: poverty, inequality, institutions shape crime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Agency: individuals choose whether to commit crime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Best explanations combine both — context + choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Determinism vs free will — key debate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Structure shapes, agency chooses.",
            commonErrors: ["One only.", "No synthesis."],
          },
        },
        {
          id: "eias-soc-u4-synth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate crime prevention strategies.",
          parts: [
            {
              label: "a",
              prompt: "Compare situational vs social prevention.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest best approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prevention eval",
                statement: "Short vs long term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Situational: quick, cheap, reduces opportunities — but displaces crime.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Social: addresses causes — expensive, long-term, sustainable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Combined approach — situational for immediate + social for causes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Context-dependent — different crimes need different strategies.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) quick vs causes (b) combined approach",
            commonErrors: ["One strategy.", "No eval."],
          },
        },
      ],
    },
  ],
};
