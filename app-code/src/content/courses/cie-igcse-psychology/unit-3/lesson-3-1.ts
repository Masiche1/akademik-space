import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieipsych-u3-lesson-3-1",
  code: "3-1",
  title: "Research methods: design and analysis",
  goal: "I CAN evaluate experimental designs, variables, sampling and analysis in psychological research.",
  standards: ["Cambridge IGCSE Psychology 0266", "Section 2: Research methods"],
  vocabulary: [
    {
      term: "Independent variable (IV)",
      definition: "The variable the researcher deliberately manipulates.",
    },
    {
      term: "Dependent variable (DV)",
      definition: "The variable measured to see the effect of the IV.",
    },
    {
      term: "Extraneous variable",
      definition: "Any other variable that could affect the DV.",
    },
    {
      term: "Confounding variable",
      definition: "An extraneous variable systematically linked to the IV.",
    },
    {
      term: "Operationalisation",
      definition: "Defining variables in measurable terms.",
    },
    {
      term: "Random allocation",
      definition: "Assigning participants to conditions by chance.",
    },
    {
      term: "Counterbalancing",
      definition: "Varying the order of conditions to cancel order effects.",
    },
    {
      term: "Demand characteristics",
      definition:
        "Cues that reveal the hypothesis and change participants' behaviour.",
    },
    {
      term: " Investigator effect",
      definition: "The researcher's own expectations influencing results.",
    },
    {
      term: "Reliability",
      definition: "Consistency of measurement across time or raters.",
    },
    {
      term: "Validity",
      definition: "Whether the study measures what it claims to measure.",
    },
    {
      term: "Ethical guidelines",
      definition: "Consent, confidentiality, debriefing, protection from harm.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u3-design",
      title: "Experimental design and variables",
      skill:
        "Identify variables and evaluate experimental designs and controls.",
      lesson: {
        sections: [
          {
            heading: "Variables in experiments",
            body: "In an experiment the researcher manipulates the **independent variable (IV)** and measures the **dependent variable (DV)**. All other variables are **extraneous** — if they systematically affect the DV alongside the IV they become **confounding variables** and spoil the experiment. **Operationalisation** means defining variables precisely so they can be measured — 'anxiety' might become 'heart rate' or a self-report scale.",
          },
          {
            heading: "Experimental designs",
            body: "**Independent groups**: different participants in each condition — avoids order effects but participant variables may differ between groups. **Repeated measures**: same participants in all conditions — controls participant variables but risks practice effects and fatigue. **Matched pairs**: participants paired on key variables then split — combines advantages but is time-consuming.",
          },
          {
            heading: "Controlling extraneous variables",
            body: "Controls include **random allocation** of participants to conditions, **counterbalancing** the order of conditions, standardising procedures, and running the study in a controlled setting. **Demand characteristics** (cues revealing the hypothesis) and **investigator effects** (researcher expectations) can be reduced by standardisation, double-blind procedures and careful briefing.",
          },
        ],
        keyFormulas: [
          {
            name: "Independent groups",
            statement: "Different participants per condition",
          },
          {
            name: "Repeated measures",
            statement: "Same participants in all conditions",
          },
          {
            name: "Matched pairs",
            statement: "Paired participants split across conditions",
          },
        ],
        workedExample: {
          problem:
            "A researcher tests whether caffeine improves memory. Identify the IV, DV and one extraneous variable.",
          solution:
            "IV: caffeine (present/absent). DV: memory score. Extraneous variable: sleep the night before — could affect memory independently of caffeine.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The independent variable is the variable that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The researcher deliberately manipulates" },
              { id: "b", text: "Is measured as the outcome" },
              { id: "c", text: "Cannot be controlled" },
              { id: "d", text: "Is always extraneous" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent variable",
                statement: "The manipulated variable in an experiment.",
              },
            ],
            steps: [
              {
                reasoning: "The IV is what the researcher changes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The researcher deliberately manipulates.",
          },
        },
        {
          id: "cieipsych-u3-d-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The dependent variable is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The variable measured to see the effect of the IV",
              },
              { id: "b", text: "The manipulated variable" },
              { id: "c", text: "An uncontrolled variable" },
              { id: "d", text: "Always the same as the IV" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent variable",
                statement: "The measured outcome variable.",
              },
            ],
            steps: [
              {
                reasoning: "The DV is what is measured.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The measured outcome variable.",
          },
        },
        {
          id: "cieipsych-u3-d-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An extraneous variable is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Any variable other than the IV and DV that could affect results",
              },
              { id: "b", text: "The IV" },
              { id: "c", text: "The DV" },
              { id: "d", text: "Always confounding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extraneous variable",
                statement: "Any other variable affecting the DV.",
              },
            ],
            steps: [
              {
                reasoning: "Extraneous variables are neither IV nor DV.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Any variable other than IV/DV affecting results.",
          },
        },
        {
          id: "cieipsych-u3-d-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A confounding variable is an extraneous variable that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Systematically varies with the IV and affects the DV",
              },
              { id: "b", text: "Is always controlled" },
              { id: "c", text: "Never affects results" },
              { id: "d", text: "Is the same as the DV" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confounding variable",
                statement: "Extraneous variable linked to the IV.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Confounding variables spoil the experiment by varying with the IV.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Systematically linked to the IV.",
          },
        },
        {
          id: "cieipsych-u3-d-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Operationalisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Defining variables in measurable terms" },
              { id: "b", text: "Operating the experiment" },
              { id: "c", text: "Measuring only once" },
              { id: "d", text: "Using no variables" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operationalisation",
                statement: "Defining variables precisely for measurement.",
              },
            ],
            steps: [
              {
                reasoning: "Operationalisation makes variables measurable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Defining variables in measurable terms.",
          },
        },
        {
          id: "cieipsych-u3-d-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Random allocation means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Assigning participants to conditions by chance",
              },
              { id: "b", text: "Choosing participants randomly" },
              { id: "c", text: "Randomising the DV" },
              { id: "d", text: "Using random questions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Random allocation",
                statement: "Chance assignment to conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Random allocation assigns by chance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Chance assignment to conditions.",
          },
        },
        {
          id: "cieipsych-u3-d-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Counterbalancing is used to control:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Order effects such as practice and fatigue" },
              { id: "b", text: "Participant variables" },
              { id: "c", text: "Demand characteristics" },
              { id: "d", text: "Sampling bias" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counterbalancing",
                statement: "Varying condition order to cancel order effects.",
              },
            ],
            steps: [
              {
                reasoning: "Counterbalancing controls order effects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Order effects like practice/fatigue.",
          },
        },
        {
          id: "cieipsych-u3-d-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Demand characteristics occur when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cues reveal the hypothesis and change participants' behaviour",
              },
              { id: "b", text: "Participants demand payment" },
              { id: "c", text: "The DV is measured" },
              { id: "d", text: "Participants refuse to take part" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demand characteristics",
                statement: "Cues revealing the hypothesis affecting behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Demand characteristics bias results via cues.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cues reveal hypothesis, changing behaviour.",
          },
        },
        {
          id: "cieipsych-u3-d-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The investigator effect is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The researcher's expectations influencing results",
              },
              { id: "b", text: "Participants influencing each other" },
              { id: "c", text: "The IV affecting the DV" },
              { id: "d", text: "Random allocation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Investigator effect",
                statement: "Researcher expectations biasing results.",
              },
            ],
            steps: [
              {
                reasoning: "Researcher bias affects results.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Researcher's expectations influencing results.",
          },
        },
        {
          id: "cieipsych-u3-d-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between independent groups and repeated measures designs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Design types",
                statement: "Different participants vs same participants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Independent groups: different participants per condition — avoids order effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated measures: same participants all conditions — controls participant variables but risks practice effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Independent: different participants, no order effects. Repeated: same participants, order effects risk.",
          },
        },
        {
          id: "cieipsych-u3-d-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of the repeated measures design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeated measures",
                statement:
                  "Controls participant variables but risks order effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: same participants control individual differences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: practice/fatigue effects; participants may guess the hypothesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Controls participant variables; but order effects and demand characteristics.",
          },
        },
        {
          id: "cieipsych-u3-d-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why random allocation is important in an experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Random allocation",
                statement: "Chance assignment reduces bias.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Random allocation gives each participant equal chance of each condition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reduces systematic differences between groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It increases confidence that any DV difference is due to the IV.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reduces bias by giving equal chance; increases confidence in causation.",
          },
        },
        {
          id: "cieipsych-u3-d-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher studies whether noise affects concentration. Identify the IV, DV and two extraneous variables, and explain how to control them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variable identification",
                statement:
                  "IV manipulated, DV measured, extraneous controlled.",
              },
            ],
            steps: [
              {
                reasoning: "IV: noise level; DV: concentration score.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Extraneous: time of day, prior sleep — affect concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Control: random allocation, standardised testing conditions, counterbalancing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Matched pairs could control participant variables like baseline ability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IV noise, DV concentration; control time/sleep via randomisation and standardisation.",
          },
        },
        {
          id: "cieipsych-u3-d-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which design uses the same participants in all conditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated measures" },
              { id: "b", text: "Independent groups" },
              { id: "c", text: "Case study" },
              { id: "d", text: "Survey" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeated measures",
                statement: "Same participants in all conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Repeated measures uses same participants.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Repeated measures.",
          },
        },
        {
          id: "cieipsych-u3-d-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to reduce demand characteristics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reducing demand characteristics",
                statement: "Deception, standardisation, single-blind.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use deception so participants don't know the true aim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Standardise procedures and use single/double-blind designs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deception, standardisation, single/double-blind procedures.",
          },
        },
        {
          id: "cieipsych-u3-d-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Matched pairs design is used to control:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Participant variables" },
              { id: "b", text: "Order effects" },
              { id: "c", text: "Demand characteristics" },
              { id: "d", text: "Sampling bias" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Matched pairs",
                statement: "Controls participant variables.",
              },
            ],
            steps: [
              {
                reasoning: "Matching controls participant differences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Participant variables.",
          },
        },
        {
          id: "cieipsych-u3-d-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the investigator effect and how can it be reduced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Investigator effect",
                statement: "Researcher expectations biasing results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Researcher's expectations can subtly influence participants or scoring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduced by standardisation, double-blind procedures and automated measures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Researcher bias; reduced by standardisation and double-blind designs.",
          },
        },
        {
          id: "cieipsych-u3-d-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a confounding variable and an extraneous variable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variable types",
                statement:
                  "Confounding = linked to IV; extraneous = any other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Extraneous variables are any variables other than IV/DV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Confounding variables are extraneous variables that systematically vary with the IV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only confounding variables spoil the experiment's validity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Extraneous = any other variable; confounding = systematically linked to IV.",
          },
        },
        {
          id: "cieipsych-u3-d-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to test if background music affects revision. Choose a design and justify it, identifying variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Design justification",
                statement: "Design must suit the research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IV: music (present/absent); DV: revision performance score.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use matched pairs or independent groups to control participant ability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Control extraneous variables: same material, same time, quiet room.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counterbalance if repeated measures; standardise instructions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IV music/DV performance; matched pairs or independent groups with standardisation.",
          },
        },
        {
          id: "cieipsych-u3-d-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which variable does the researcher manipulate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Independent variable" },
              { id: "b", text: "Dependent variable" },
              { id: "c", text: "Extraneous variable" },
              { id: "d", text: "Confounding variable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IV",
                statement: "The manipulated variable.",
              },
            ],
            steps: [
              {
                reasoning: "The IV is manipulated.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Independent variable.",
          },
        },
        {
          id: "cieipsych-u3-d-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is operationalisation important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Operationalisation",
                statement: "Makes variables measurable.",
              },
            ],
            steps: [
              {
                reasoning: "It defines abstract concepts in measurable terms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without it, variables cannot be measured or compared.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Makes abstract variables measurable and comparable.",
          },
        },
        {
          id: "cieipsych-u3-d-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how counterbalancing controls order effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counterbalancing",
                statement: "Varying order cancels practice/fatigue effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Order effects occur when condition order affects performance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counterbalancing ensures each condition appears equally in each position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This cancels out order effects across participants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Equal condition order across participants cancels practice/fatigue effects.",
          },
        },
        {
          id: "cieipsych-u3-d-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the use of lab experiments in psychology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lab experiment evaluation",
                statement: "Control vs artificiality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: high control over variables → strong internal validity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: can establish cause-effect relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: artificial setting → low ecological validity.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: demand characteristics and ethical issues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High control and causality; but artificiality, demand characteristics, ethics.",
          },
        },
        {
          id: "cieipsych-u3-d-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment, the DV is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is measured" },
              { id: "b", text: "What is manipulated" },
              { id: "c", text: "Always extraneous" },
              { id: "d", text: "Always controlled" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DV",
                statement: "The measured variable.",
              },
            ],
            steps: [
              {
                reasoning: "The DV is measured.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) What is measured.",
          },
        },
        {
          id: "cieipsych-u3-d-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to control extraneous variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Controlling variables",
                statement: "Standardisation and randomisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Standardise procedures, environment and instructions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use random allocation and counterbalancing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Standardisation and randomisation/counterbalancing.",
          },
        },
        {
          id: "cieipsych-u3-d-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why matched pairs design is rarely used despite its advantages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Matched pairs limits",
                statement: "Time-consuming and hard to match perfectly.",
              },
            ],
            steps: [
              {
                reasoning: "It controls participant variables effectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But matching participants on all relevant variables is difficult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is time-consuming and may still leave unmatched variables.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective control but time-consuming and imperfect matching.",
          },
        },
        {
          id: "cieipsych-u3-d-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which design uses different participants in each condition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Independent groups" },
              { id: "b", text: "Repeated measures" },
              { id: "c", text: "Matched pairs" },
              { id: "d", text: "Case study" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Independent groups",
                statement: "Different participants per condition.",
              },
            ],
            steps: [
              {
                reasoning: "Independent groups uses different participants.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Independent groups.",
          },
        },
        {
          id: "cieipsych-u3-d-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'double-blind' procedure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double-blind",
                statement:
                  "Neither participant nor researcher knows condition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both participants and researchers are unaware of condition assignment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduces demand characteristics and investigator effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Neither participant nor researcher knows the condition.",
          },
        },
        {
          id: "cieipsych-u3-d-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the independent groups design for testing whether exercise improves mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Independent groups evaluation",
                statement:
                  "Avoids order effects but participant variables differ.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: no order effects; large sample possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: avoids demand characteristics from repeated testing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: participant variables may differ between groups.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Random allocation and large samples mitigate this.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No order effects; but participant variables may differ — mitigated by randomisation.",
          },
        },
        {
          id: "cieipsych-u3-d-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a researcher choose a field experiment over a lab experiment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Field vs lab",
                statement: "Field = higher ecological validity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Field experiments occur in natural settings → more realistic behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But less control over extraneous variables.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Higher ecological validity but less control.",
          },
        },
      ],
    },
    {
      id: "cieipsych-u3-analysis",
      title: "Sampling, data analysis and ethics",
      skill:
        "Evaluate sampling methods, data types, analysis and ethical issues.",
      lesson: {
        sections: [
          {
            heading: "Sampling methods",
            body: "**Random sampling** gives every member of the target population an equal chance — representative but needs a sampling frame. **Stratified sampling** divides the population into subgroups and samples from each — guarantees representation. **Opportunity/convenience sampling** uses whoever is available — quick but biased. **Volunteer sampling** uses willing participants — self-selected, prone to bias. **Snowball sampling** recruits through contacts — useful for hidden groups.",
          },
          {
            heading: "Data types and analysis",
            body: "**Quantitative data** is numerical — scores, counts, measurements — suitable for statistical analysis. **Qualitative data** is descriptive — interviews, observations, open answers — requires thematic analysis. **Measures of central tendency**: mean (average), median (middle value), mode (most frequent). The **mean** uses all data but is affected by outliers; the **median** resists outliers; the **mode** suits categorical data.",
          },
          {
            heading: "Ethics",
            body: "Psychological research must follow ethical guidelines: **informed consent** (participants agree knowing the study), **confidentiality** (data protected), **debriefing** (explaining the true aims afterwards), **protection from harm** (no physical/psychological damage), **right to withdraw**. Deception is sometimes necessary but must be justified and followed by debriefing. Studies of vulnerable groups need extra care.",
          },
        ],
        keyFormulas: [
          {
            name: "Mean",
            statement: "Sum of values / number of values",
          },
          {
            name: "Median",
            statement: "Middle value when ordered",
          },
          {
            name: "Mode",
            statement: "Most frequent value",
          },
          {
            name: "Ethics",
            statement:
              "Consent · confidentiality · debriefing · no harm · withdraw",
          },
        ],
        workedExample: {
          problem: "Scores: 5, 7, 7, 9, 12. Calculate mean, median and mode.",
          solution:
            "Mean = 40/5 = 8. Median = 7 (middle value). Mode = 7 (most frequent).",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-a-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Random sampling gives every member of the population:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An equal chance of selection" },
              { id: "b", text: "A guaranteed place" },
              { id: "c", text: "To volunteer" },
              { id: "d", text: "To be chosen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Random sampling",
                statement: "Equal chance of selection for all.",
              },
            ],
            steps: [
              {
                reasoning: "Random sampling = equal selection probability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) An equal chance of selection.",
          },
        },
        {
          id: "cieipsych-u3-a-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stratified sampling is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guarantee representation of subgroups" },
              { id: "b", text: "Avoid needing a sampling frame" },
              { id: "c", text: "Select by convenience" },
              { id: "d", text: "Recruit through contacts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratified sampling",
                statement: "Sampling from defined subgroups.",
              },
            ],
            steps: [
              {
                reasoning: "Stratified guarantees subgroup representation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Guarantee representation of subgroups.",
          },
        },
        {
          id: "cieipsych-u3-a-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Opportunity (convenience) sampling involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using whoever is readily available" },
              { id: "b", text: "Random selection" },
              { id: "c", text: "Stratified selection" },
              { id: "d", text: "Volunteer recruitment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convenience sampling",
                statement: "Using available participants.",
              },
            ],
            steps: [
              {
                reasoning: "Convenience uses whoever is available.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Using whoever is readily available.",
          },
        },
        {
          id: "cieipsych-u3-a-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Volunteer sampling is prone to bias because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Participants self-select and may differ from the population",
              },
              { id: "b", text: "It uses random selection" },
              { id: "c", text: "It guarantees representativeness" },
              { id: "d", text: "It needs no sampling frame" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volunteer bias",
                statement: "Self-selection creates unrepresentative samples.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Volunteers differ systematically from non-volunteers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Self-selection creates bias.",
          },
        },
        {
          id: "cieipsych-u3-a-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Snowball sampling is most useful for studying:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hidden or hard-to-reach groups" },
              { id: "b", text: "Large populations" },
              { id: "c", text: "Official statistics" },
              { id: "d", text: "Random samples" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Snowball sampling",
                statement: "Chain referral for hidden groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Snowballing reaches groups without sampling frames.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Hidden or hard-to-reach groups.",
          },
        },
        {
          id: "cieipsych-u3-a-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The mean is calculated by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Adding all values and dividing by the number of values",
              },
              { id: "b", text: "Finding the middle value" },
              { id: "c", text: "Finding the most frequent value" },
              { id: "d", text: "Multiplying values" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mean",
                statement: "Sum divided by count.",
              },
            ],
            steps: [
              {
                reasoning: "Mean = sum / number of values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sum divided by count.",
          },
        },
        {
          id: "cieipsych-u3-a-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The median is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The middle value when data is ordered" },
              { id: "b", text: "The most frequent value" },
              { id: "c", text: "The sum of values" },
              { id: "d", text: "The largest value" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Median",
                statement: "Middle value of ordered data.",
              },
            ],
            steps: [
              {
                reasoning: "Median = middle value.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The middle value.",
          },
        },
        {
          id: "cieipsych-u3-a-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The mode is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The most frequently occurring value" },
              { id: "b", text: "The middle value" },
              { id: "c", text: "The average" },
              { id: "d", text: "The range" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement: "Most frequent value.",
              },
            ],
            steps: [
              {
                reasoning: "Mode = most frequent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The most frequent value.",
          },
        },
        {
          id: "cieipsych-u3-a-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Quantitative data is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Numerical data that can be statistically analysed",
              },
              { id: "b", text: "Descriptive text" },
              { id: "c", text: "Interview transcripts" },
              { id: "d", text: "Observations only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantitative data",
                statement: "Numerical, countable data.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative = numerical.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Numerical data.",
          },
        },
        {
          id: "cieipsych-u3-a-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between quantitative and qualitative data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data types",
                statement: "Numerical vs descriptive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quantitative: numerical, countable, statistically analysed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Qualitative: descriptive, words/images, thematically analysed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Quantitative = numerical; qualitative = descriptive.",
          },
        },
        {
          id: "cieipsych-u3-a-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ethical requirements in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research ethics",
                statement: "Consent, confidentiality, debriefing, no harm.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent and confidentiality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debriefing and protection from harm (also right to withdraw).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consent, confidentiality, debriefing, no harm, right to withdraw.",
          },
        },
        {
          id: "cieipsych-u3-a-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why debriefing is important in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debriefing",
                statement: "Explaining true aims after the study.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants may have been deceived — debriefing reveals the truth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It addresses any distress caused by the study.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It allows participants to withdraw their data if they wish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reveals truth, addresses distress, allows withdrawal of data.",
          },
        },
        {
          id: "cieipsych-u3-a-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to study stress in students. Choose a sampling method and justify it, identifying ethical issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sampling + ethics",
                statement: "Method must suit population and ethics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stratified random sampling by year/subject for representativeness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Anonymous questionnaire — reduces social desirability bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethical issues: stress is sensitive — need confidentiality, support info.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Right to withdraw and debriefing essential.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stratified sampling, anonymous questionnaire; confidentiality and support essential.",
          },
        },
        {
          id: "cieipsych-u3-a-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which measure of central tendency is most affected by outliers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean" },
              { id: "b", text: "Median" },
              { id: "c", text: "Mode" },
              { id: "d", text: "Range" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mean vs outliers",
                statement: "Mean uses all values → affected by outliers.",
              },
            ],
            steps: [
              {
                reasoning: "Mean is affected by extreme values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Mean.",
          },
        },
        {
          id: "cieipsych-u3-a-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "When would the median be preferred over the mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Median preference",
                statement: "Resists outliers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When data has extreme outliers that distort the mean.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E.g. income data where a few very high earners skew the mean.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "When outliers distort the mean (e.g. income data).",
          },
        },
        {
          id: "cieipsych-u3-a-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sampling method uses chain referral through contacts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Snowball" },
              { id: "b", text: "Random" },
              { id: "c", text: "Stratified" },
              { id: "d", text: "Systematic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Snowball sampling",
                statement: "Chain referral through contacts.",
              },
            ],
            steps: [
              {
                reasoning: "Snowballing uses contacts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Snowball.",
          },
        },
        {
          id: "cieipsych-u3-a-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'informed consent'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement:
                  "Agreeing to participate after being told about the study.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants must know what the study involves before agreeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They can then decide freely whether to take part.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agreeing to participate after being told what research involves.",
          },
        },
        {
          id: "cieipsych-u3-a-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why deception might be necessary in some psychological experiments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deception necessity",
                statement: "Knowing the hypothesis changes behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If participants know the true aim, they may change their behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This would invalidate the study's findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deception is justified only if necessary and followed by debriefing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deception needed to prevent demand characteristics; must debrief after.",
          },
        },
        {
          id: "cieipsych-u3-a-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A researcher wants to study prejudice. Design a study using a non-experimental method and justify the choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Method selection",
                statement: "Match method to research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use interviews or questionnaires to measure attitudes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justify: prejudice is an attitude — self-report measures it directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: social desirability bias — people may hide prejudice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Could use implicit measures or observation to cross-check.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Self-report measures attitudes directly but risks social desirability bias.",
          },
        },
        {
          id: "cieipsych-u3-a-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which measure of central tendency is most appropriate for categorical data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mode" },
              { id: "b", text: "Mean" },
              { id: "c", text: "Median" },
              { id: "d", text: "Range" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mode for categories",
                statement: "Mode suits categorical data.",
              },
            ],
            steps: [
              {
                reasoning: "Mode works for categories.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Mode.",
          },
        },
        {
          id: "cieipsych-u3-a-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'confidentiality' in research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confidentiality",
                statement: "Protecting participants' identities and data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants' identities and responses must be protected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Data should be anonymised where possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Protecting identities and data; anonymising where possible.",
          },
        },
        {
          id: "cieipsych-u3-a-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why random sampling is preferred but often impractical.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Random sampling trade-off",
                statement: "Representative but needs complete frame.",
              },
            ],
            steps: [
              {
                reasoning: "Random sampling gives representative samples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But needs a complete sampling frame which may not exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convenience or volunteer sampling is often more practical.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Representative but needs complete frame; convenience often more practical.",
          },
        },
        {
          id: "cieipsych-u3-a-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the use of self-report questionnaires in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questionnaire evaluation",
                statement: "Efficient but biased.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: cheap, quick, large samples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: produces quantifiable data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: social desirability bias — people give 'correct' answers.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: response rates and question interpretation problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Efficient and quantifiable but prone to bias and low response rates.",
          },
        },
        {
          id: "cieipsych-u3-a-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is qualitative data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interview transcripts" },
              { id: "b", text: "Test scores" },
              { id: "c", text: "Reaction times" },
              { id: "d", text: "Heart rates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualitative data",
                statement: "Descriptive, non-numerical data.",
              },
            ],
            steps: [
              {
                reasoning: "Transcripts are qualitative.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Interview transcripts.",
          },
        },
        {
          id: "cieipsych-u3-a-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two reasons why participants must give informed consent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consent importance",
                statement: "Ethical requirement.",
              },
            ],
            steps: [
              {
                reasoning: "It is an ethical requirement respecting autonomy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Participants must know risks and aims before agreeing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ethical requirement; participants must know risks/aims before agreeing.",
          },
        },
        {
          id: "cieipsych-u3-a-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a researcher could reduce social desirability bias in a questionnaire.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reducing bias",
                statement: "Anonymity and indirect questioning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ensure anonymity — participants feel safe being honest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use indirect questions or projective techniques.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cross-check with behavioural measures or interviews.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anonymity, indirect questions, cross-checking with other methods.",
          },
        },
        {
          id: "cieipsych-u3-a-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sampling method requires a complete sampling frame?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              { id: "b", text: "Convenience" },
              { id: "c", text: "Snowball" },
              { id: "d", text: "Volunteer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sampling frame need",
                statement: "Random needs complete list.",
              },
            ],
            steps: [
              {
                reasoning: "Random sampling needs a frame.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Random.",
          },
        },
        {
          id: "cieipsych-u3-a-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'right to withdraw'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Right to withdraw",
                statement: "Participants may leave at any time.",
              },
            ],
            steps: [
              {
                reasoning: "Participants can stop taking part without penalty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They may also withdraw their data afterwards.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Participants may leave at any time and withdraw their data.",
          },
        },
        {
          id: "cieipsych-u3-a-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of opportunity sampling in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convenience sampling evaluation",
                statement: "Quick but biased.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: quick, cheap, easy to access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: useful for pilot studies and hard-to-reach groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: unrepresentative — whoever is available is not random.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: findings cannot be generalised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Quick and cheap but unrepresentative; cannot generalise.",
          },
        },
        {
          id: "cieipsych-u3-a-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a researcher use both quantitative and qualitative data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed methods",
                statement: "Combines breadth and depth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quantitative gives measurable patterns; qualitative gives depth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they provide a fuller picture (triangulation).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Combines measurable patterns with depth — fuller picture.",
          },
        },
      ],
    },
  ],
};
