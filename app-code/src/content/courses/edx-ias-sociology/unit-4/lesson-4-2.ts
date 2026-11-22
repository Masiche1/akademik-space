import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eias-soc-u4-lesson-4-2",
  code: "4-2",
  title: "Types of Crime",
  goal: "I CAN describe different types of crime and their social significance.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 4 — Crime and Deviance"],
  vocabulary: [
    {
      term: "White-collar crime",
      definition: "Non-violent crime by professionals — fraud, embezzlement.",
    },
    {
      term: "Corporate crime",
      definition: "Crime by organisations — unsafe products, pollution.",
    },
    {
      term: "Cybercrime",
      definition: "Crime using computers/internet — hacking, fraud.",
    },
    {
      term: "Organised crime",
      definition: "Coordinated criminal groups — gangs, cartels.",
    },
    {
      term: "Victimless crime",
      definition: "Crime with no direct victim — drug use.",
    },
    {
      term: "Green crime",
      definition:
        "Crime against environment — pollution, wildlife trafficking.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u4-types",
      title: "Types of Crime",
      skill: "Describe and compare different crime categories.",
      lesson: {
        sections: [
          {
            heading: "Property and violent crime",
            body: "**Property crime**: theft, burglary, vandalism — against property. **Violent crime**: assault, murder, robbery — against persons. **Status offences**: truancy, running away — only illegal for certain groups (youth).\n\n**Street crime vs white-collar**: street crime visible, punished harshly; white-collar hidden, often lighter punishment.",
          },
          {
            heading: "Modern and corporate crime",
            body: "**Cybercrime**: hacking, identity theft, online fraud — growing rapidly, hard to police. **Corporate crime**: companies harm public — unsafe products, pollution, wage theft — often civil penalties, not criminal. **Green crime**: environmental damage — climate change, pollution.\n\n**Evaluation**: crime types reflect power — white-collar/corporate often less punished than street crime.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Company dumps toxic waste illegally. Type?",
          solution: "Corporate/green crime.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is white-collar crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cybercrime" },
              { id: "b", text: "Organised crime" },
              { id: "c", text: "Street violence" },
              { id: "d", text: "Non-violent crime by professionals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "White-collar crime",
                statement: "Professional crime.",
              },
            ],
            steps: [
              {
                reasoning: "White-collar = professional non-violent.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Professional crime",
            commonErrors: ["Street confused."],
          },
        },
        {
          id: "eias-soc-u4-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of modern crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modern crime",
                statement: "Cyber + corporate.",
              },
            ],
            steps: [
              {
                reasoning: "Cybercrime — hacking, online fraud.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Corporate crime — organisations harming public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Green crime — environmental damage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cyber, corporate, green.",
            commonErrors: ["Street only.", "Only one."],
          },
        },
        {
          id: "eias-soc-u4-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why white-collar crime is often punished less than street crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punishment inequality",
                statement: "Power + visibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Visibility — white-collar hidden, street crime obvious.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Power — wealthy offenders have better lawyers, influence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Perceived harm — street crime seen as more threatening.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marxist view: law protects property/ruling class.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Visibility+power+perception.",
            commonErrors: ["Equal punishment.", "No reason."],
          },
        },
        {
          id: "eias-soc-u4-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Tech company suffers data breach exposing millions.",
          parts: [
            { label: "a", prompt: "Classify the crime(s).", marks: 4 },
            { label: "b", prompt: "Suggest prevention measures.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cybercrime response",
                statement: "Classification + prevention.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Cybercrime — hacking/data theft.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Corporate crime — company failed duty of care.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Technical — encryption, security systems.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Legal — stricter regulations, accountability.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) cyber+corporate (b) technical+legal",
            commonErrors: ["One type.", "No prevention."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u4-measurement",
      title: "Measuring Crime",
      skill:
        "Explain official statistics, self-report studies and victim surveys.",
      lesson: {
        sections: [
          {
            heading: "Official statistics",
            body: "**Police recorded crime**: crimes reported to police — official data. **Problems**: many crimes not reported (dark figure); police discretion affects recording; political pressure to reduce stats. **Court statistics**: convictions — reflects prosecution, not all crime.\n\n**Self-report studies**: ask people about own offending — reveals hidden crime but relies on honesty; may underreport serious crime.",
          },
          {
            heading: "Victim surveys",
            body: "**Crime Survey for England and Wales (CSEW)**: asks people about victimisation — captures unreported crime. **Problems**: recall bias, definition issues, excludes victimless crime. **Triangulation**: combining methods gives fuller picture.\n\n**Dark figure of crime**: crime not recorded/reported — official stats underestimate.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Study asks 10,000 people about crimes committed. Method?",
          solution: "Self-report study.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-meas-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the dark figure of crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convicted crime" },
              { id: "b", text: "All crime" },
              { id: "c", text: "White-collar crime" },
              { id: "d", text: "Unreported/unrecorded crime" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dark figure",
                statement: "Hidden crime.",
              },
            ],
            steps: [
              {
                reasoning: "Dark figure = unreported crime.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unreported crime",
            commonErrors: ["All crime confused."],
          },
        },
        {
          id: "eias-soc-u4-meas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two methods of measuring crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crime measurement",
                statement: "Official + survey.",
              },
            ],
            steps: [
              {
                reasoning: "Official statistics — police recorded crime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Self-report studies — people report own offending.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Victim surveys — ask about victimisation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Official stats, self-report, victim surveys.",
            commonErrors: ["Only one.", "Wrong method."],
          },
        },
        {
          id: "eias-soc-u4-meas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one limitation of official crime statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stats limitations",
                statement: "Underreporting.",
              },
            ],
            steps: [
              {
                reasoning: "Many crimes not reported — dark figure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Police discretion — recording varies by officer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Political pressure — targets may distort stats.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Only counts detected crime — misses hidden.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Underreporting+discretion+pressure.",
            commonErrors: ["Accurate.", "No limitation."],
          },
        },
        {
          id: "eias-soc-u4-meas-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Official stats show crime rising but victim survey shows stable.",
          parts: [
            { label: "a", prompt: "Explain the discrepancy.", marks: 4 },
            { label: "b", prompt: "Suggest which is more reliable.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Measurement eval",
                statement: "Method comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Official stats may reflect reporting/recording changes.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Victim survey captures unreported — different picture.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Triangulation — both have limitations, combine.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Victim survey may capture more but has recall bias.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) reporting+unreported (b) triangulate",
            commonErrors: ["One correct.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u4-evaluation",
      title: "Evaluating Crime and Deviance Theory",
      skill: "Critically evaluate theories and explanations of crime.",
      lesson: {
        sections: [
          {
            heading: "Theoretical evaluation",
            body: "**Functionalist**: explains deviance's function but assumes consensus — ignores power. **Marxist**: explains inequality but too deterministic — ignores individual choice, victimisation. **Interactionist**: shows labelling power but may overstate — crime has real harm.\n\n**Realist view**: crime causes real suffering — can't reduce to labels or structure.",
          },
          {
            heading: "Policy implications",
            body: "**Left realist**: crime real problem — need social solutions (jobs, community). **Right realist**: crime rational choice — need deterrence, control. **Feminist**: crime gendered — male violence, female victimisation.\n\n**Evaluation**: no single theory sufficient — crime complex, multiple causes.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Theory explains crime by labels but ignores victim harm. Weakness?",
          solution: "Ignores real harm — interactionist limitation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is left realism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labelling theory" },
              { id: "b", text: "Crime real problem needing social solutions" },
              { id: "c", text: "Crime is rational choice" },
              { id: "d", text: "Deterministic view" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Left realism",
                statement: "Social solutions.",
              },
            ],
            steps: [
              {
                reasoning: "Left realist = social solutions.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Social solutions",
            commonErrors: ["Right confused."],
          },
        },
        {
          id: "eias-soc-u4-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two criticisms of Marxist crime theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist critique",
                statement: "Deterministic.",
              },
            ],
            steps: [
              {
                reasoning: "Too deterministic — ignores individual choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Ignores victimisation — focus on offender not victim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Can't explain all crime — white-collar not just poverty.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Deterministic, victim-blind, incomplete.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-soc-u4-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between left and right realism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Left vs right realism",
                statement: "Social vs control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Left: crime real — address social causes (jobs, community).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Right: crime rational choice — deter, control, punish.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Left focuses causes; right focuses consequences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Both agree crime real problem — unlike interactionists.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Left=social causes, right=control.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eias-soc-u4-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate functionalist view of deviance.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist eval",
                statement: "Function vs power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Explains deviance's function — defines boundaries.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Social change — deviance can lead to positive change.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Assumes consensus — ignores power, inequality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Justifies status quo — may excuse harmful deviance.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) function+change (b) consensus+status quo",
            commonErrors: ["Perfect theory.", "Only strengths."],
          },
        },
      ],
    },
  ],
};
