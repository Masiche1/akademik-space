import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "psych-u1-lesson-1-1",
  code: "1-1",
  title: "Research Methods",
  goal: "I CAN describe and evaluate experimental, correlational, case study and naturalistic observation designs and identify variables and sampling techniques.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Independent variable", definition: "The variable the researcher manipulates to test its effect on behaviour." },
    { term: "Dependent variable", definition: "The variable measured as the outcome of the experiment." },
    { term: "Correlation", definition: "A statistical relationship between two variables; does not prove causation." },
    { term: "Case study", definition: "An in-depth investigation of one individual or small group over time." },
    { term: "Operationalisation", definition: "Defining variables in measurable terms so they can be tested precisely." },
    { term: "Naturalistic observation", definition: "Watching and recording behaviour in its natural setting without interference." },
  ],
  concepts: [
    {
      id: "psych-u1-research-designs",
      title: "Research designs",
      skill: "Describe experimental, correlational, case study and naturalistic observation methods, including their strengths and limitations.",
      lesson: {
        sections: [
          {
            heading: "Experimental method",
            body: "In an **experiment**, the researcher manipulates an **independent variable (IV)** and measures a **dependent variable (DV)** under controlled conditions. **Laboratory experiments** offer high control and replicability; **field experiments** trade some control for greater ecological validity. Because participants are randomly allocated to conditions, cause-and-effect conclusions are possible — the strongest feature of this design.",
          },
          {
            heading: "Correlational, case study and naturalistic methods",
            body: "A **correlational study** measures the relationship between two co-variables, expressed as a correlation coefficient from -1 to +1. It cannot establish causation because a third variable may explain the link. A **case study** investigates one person or small group in depth (e.g. HM, Genie), giving rich qualitative detail but limited generalisability. **Naturalistic observation** records behaviour in situ, maximising ecological validity but risking observer bias.",
          },
          {
            heading: "Evaluating designs",
            body: "Experiments score high on internal validity but may lack ecological validity due to artificial settings and demand characteristics. Correlational studies are efficient for large samples but ambiguous causally. Case studies are idiographic and cannot be generalised statistically. Naturalistic observation captures real behaviour but the observer may influence or misinterpret it — triangulation (combining methods) strengthens conclusions.",
          },
        ],
        keyFormulas: [
          { name: "Correlation coefficient", statement: "r ranges from -1 (perfect negative) to +1 (perfect positive); 0 = no linear relationship" },
          { name: "Experimental design", statement: "Manipulate IV → measure DV → infer causation" },
        ],
        workedExample: {
          problem: "A psychologist finds that hours of sleep correlate +0.6 with exam scores. Can she conclude sleep causes better grades?",
          solution: "No. A positive correlation shows the variables co-vary, but causation is not established — a third variable (e.g. motivation or study time) could cause both. Only an experiment manipulating sleep while controlling other variables could test causation.",
        },
      },
      questions: [
        {
          id: "psych-u1-rdq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an experiment, the variable that the researcher measures as the outcome is called the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Independent variable" },
              { id: "b", text: "Dependent variable" },
              { id: "c", text: "Extraneous variable" },
              { id: "d", text: "Confounding variable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependent variable", statement: "The measured outcome that may be affected by the IV." },
            ],
            steps: [
              { reasoning: "The DV is the outcome variable that is measured.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dependent variable",
            commonErrors: ["Reversing IV and DV — the IV is manipulated, the DV is measured."],
          },
        },
        {
          id: "psych-u1-rdq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two advantages of using a laboratory experiment in psychology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Experiment advantages", statement: "Control of variables, replicability, high internal validity, precise measurement." },
            ],
            steps: [
              { reasoning: "High control: extraneous variables can be eliminated or held constant, isolating the IV's effect.", marks: 1, markCode: "M" },
              { reasoning: "Precise measurement of the DV using standardised apparatus.", marks: 1, markCode: "M" },
              { reasoning: "Replicability: standardised procedures allow other researchers to repeat and verify the study.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Control over variables, precise measurement and replicability.",
            commonErrors: ["Listing disadvantages such as low ecological validity."],
          },
        },
        {
          id: "psych-u1-rdq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a correlational study cannot demonstrate cause and effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation limitation", statement: "Direction of causality and third variables cannot be determined from correlation." },
            ],
            steps: [
              { reasoning: "No manipulation: the researcher measures variables as they naturally occur without controlling them.", marks: 1, markCode: "M" },
              { reasoning: "Direction problem: X may cause Y, Y may cause X, or both may be true — correlation cannot distinguish.", marks: 1, markCode: "M" },
              { reasoning: "Third-variable problem: an unmeasured variable (e.g. age) may cause the observed relationship.", marks: 1, markCode: "R" },
              { reasoning: "Only experimental manipulation can establish that changes in the IV produce changes in the DV.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correlation shows co-variation only; causation needs direction and exclusion of third variables.",
            commonErrors: ["Saying correlation 'proves nothing' — it does show a relationship, just not causation."],
          },
        },
        {
          id: "psych-u1-rdq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher wants to study how anxiety affects exam performance.",
          parts: [
            { label: "a", prompt: "Identify one experimental and one non-experimental design suitable for this study.", marks: 2 },
            { label: "b", prompt: "Explain two ethical or practical problems the researcher might face.", marks: 3 },
            { label: "c", prompt: "Evaluate the strengths of the experimental design for this particular research question.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design choice", statement: "Experiment tests causation; correlation measures natural relationship; observation captures real behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Experimental: manipulate anxiety (e.g. induced stress vs calm condition) and measure exam scores.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Non-experimental: correlational study of trait anxiety scores against real exam results.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stress could cause distress — protection from harm requires debriefing and right to withdraw.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Informed consent may be compromised if participants are deceived about stress induction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ecological validity: artificial anxiety may not resemble real exam anxiety.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Experiment allows causal inference: if anxiety is manipulated and performance changes, causation is supported.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Controlled conditions reduce confounding variables such as revision time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weigh against the artificiality of induced anxiety — a balanced judgement is needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Experiment + correlation. (b) Harm, consent, validity. (c) Causal power but artificial stress.",
            commonErrors: ["Choosing a design without linking it to the research question."],
          },
        },
        {
          id: "psych-u1-rdq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which research design is best able to establish a cause-and-effect relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An experiment that manipulates the independent variable" },
              { id: "b", text: "A correlational study measuring two co-variables" },
              { id: "c", text: "An in-depth case study of one person" },
              { id: "d", text: "Naturalistic observation in a public setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Causal inference", statement: "Manipulating the IV and measuring the DV supports causal conclusions." },
            ],
            steps: [
              { reasoning: "Only an experiment manipulates the IV while controlling other variables.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** An experiment that manipulates the independent variable",
            commonErrors: ["Choosing correlation because it uses numbers — correlation still cannot prove causation."],
          },
        },
        {
          id: "psych-u1-rdq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A correlation coefficient of +0.85 most accurately indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A strong positive linear relationship" },
              { id: "b", text: "A weak positive linear relationship" },
              { id: "c", text: "A strong negative linear relationship" },
              { id: "d", text: "No relationship between the variables" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation coefficient", statement: "r ranges from -1 to +1; values near +1 show strong positive co-variation." },
            ],
            steps: [
              { reasoning: "The positive sign means the variables increase together, and 0.85 is close to +1.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A strong positive linear relationship",
            commonErrors: ["Treating +0.85 as weak because it is not exactly +1."],
          },
        },
        {
          id: "psych-u1-rdq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement is a strength of the case study method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It provides rich, detailed qualitative data about an individual or small group" },
              { id: "b", text: "It always uses a large representative sample" },
              { id: "c", text: "It can be replicated exactly by other researchers" },
              { id: "d", text: "It eliminates all extraneous variables" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Case study strength", statement: "Case studies give idiographic, in-depth insight that other methods may miss." },
            ],
            steps: [
              { reasoning: "Case studies investigate one person or small group in depth over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Rich, detailed qualitative data",
            commonErrors: ["Confusing depth of detail with representativeness — case studies are usually not generalisable."],
          },
        },
        {
          id: "psych-u1-rdq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with a laboratory experiment, a field experiment usually has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher control but lower ecological validity" },
              { id: "b", text: "Lower control but higher ecological validity" },
              { id: "c", text: "No independent variable" },
              { id: "d", text: "No dependent variable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Lab versus field", statement: "Laboratories maximise control; field settings increase realism but introduce extraneous variables." },
            ],
            steps: [
              { reasoning: "Field experiments occur in natural settings, so behaviour is more realistic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lower control but higher ecological validity",
            commonErrors: ["Assuming field experiments always have better control than laboratory experiments."],
          },
        },
        {
          id: "psych-u1-rdq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main methodological risk of naturalistic observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Observer bias and the possibility that observation influences behaviour" },
              { id: "b", text: "It cannot measure any dependent variable" },
              { id: "c", text: "It always requires deception of participants" },
              { id: "d", text: "It can only be used with animals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Observer effects", statement: "Observers may interpret events selectively or change the behaviour they record." },
            ],
            steps: [
              { reasoning: "Naturalistic observation is high in ecological validity but vulnerable to bias and reactivity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Observer bias and observer influence",
            commonErrors: ["Saying naturalistic observation is invalid because it is not controlled — it is a different, valid method."],
          },
        },
        {
          id: "psych-u1-rdq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "In psychological research, triangulation is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combining different methods or sources of data to strengthen a conclusion" },
              { id: "b", text: "Repeating the same experiment with a larger sample" },
              { id: "c", text: "Using only quantitative data" },
              { id: "d", text: "Increasing the number of variables measured" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triangulation", statement: "Multiple methods or datasets are used so weaknesses in one are offset by strengths in another." },
            ],
            steps: [
              { reasoning: "Triangulation means cross-checking findings using more than one approach.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Combining methods or data sources",
            commonErrors: ["Confusing triangulation with replication — replication repeats a method, triangulation uses different methods."],
          },
        },
        {
          id: "psych-u1-rdq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two reasons why a correlational study cannot establish causation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation and causation", statement: "Correlation shows co-variation but not direction or exclusion of third variables." },
            ],
            steps: [
              { reasoning: "There is no manipulation of variables, so the researcher cannot control what causes what.", marks: 1, markCode: "M" },
              { reasoning: "Direction is ambiguous: X may cause Y, Y may cause X, or both may influence each other.", marks: 1, markCode: "M" },
              { reasoning: "A third variable may produce the observed relationship between the two measured variables.", marks: 1, markCode: "R" },
              { reasoning: "Therefore correlation can support hypotheses but cannot prove causal direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No manipulation, ambiguous direction and possible third variables prevent causal claims.",
            commonErrors: ["Saying correlation proves nothing at all — it does show a statistical relationship."],
          },
        },
        {
          id: "psych-u1-rdq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A psychologist watches customers in a supermarket without intervening to study queueing behaviour. Identify the method and evaluate its ecological validity and risk of observer bias.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Naturalistic observation", statement: "Behaviour is recorded in its natural setting without interference." },
            ],
            steps: [
              { reasoning: "The method is naturalistic observation because behaviour is watched in a real setting.", marks: 1, markCode: "M" },
              { reasoning: "Ecological validity is high because queueing occurs naturally rather than in a lab.", marks: 1, markCode: "A" },
              { reasoning: "Observer bias remains possible if the psychologist interprets or records events selectively.", marks: 1, markCode: "R" },
              { reasoning: "Overall it is strong for realism but weaker for control and replicability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Naturalistic observation: high ecological validity, but observer bias and low control are weaknesses.",
            commonErrors: ["Calling it a case study — the focus is observed behaviour, not deep investigation of one person."],
          },
        },
        {
          id: "psych-u1-rdq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Compare laboratory and field experiments for investigating the effect of noise on students' concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Lab versus field experiments", statement: "Lab experiments maximise control; field experiments increase ecological validity." },
            ],
            steps: [
              { reasoning: "A laboratory experiment could present controlled noise levels and a standardised concentration task.", marks: 1, markCode: "M" },
              { reasoning: "This isolates the IV and supports causal inference, but the setting is artificial.", marks: 1, markCode: "A" },
              { reasoning: "A field experiment could test students in a real classroom or library with natural noise.", marks: 1, markCode: "M" },
              { reasoning: "This improves ecological validity but makes extraneous variables harder to control.", marks: 1, markCode: "R" },
              { reasoning: "Noise level could still be manipulated in the field if headphones or sound systems are used.", marks: 1, markCode: "M" },
              { reasoning: "A balanced judgement: the lab gives cleaner causation; the field gives more realistic behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Laboratory = control and causation but artificiality; field = realism but more extraneous variables.",
            commonErrors: ["Describing only one design without a comparison."],
          },
        },
        {
          id: "psych-u1-rdq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A study reports a correlation of -0.40 between daily exercise and self-reported stress. Explain what this result means and why it cannot prove that exercise reduces stress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpreting correlation", statement: "Negative r means the variables co-vary in opposite directions; causation still requires direction and exclusion of third variables." },
            ],
            steps: [
              { reasoning: "The negative sign means higher exercise is associated with lower stress scores, and 0.40 shows a moderate relationship.", marks: 1, markCode: "M" },
              { reasoning: "The correlation is not perfect, so many cases will not fit the pattern.", marks: 1, markCode: "A" },
              { reasoning: "Causation could run from stress to exercise — stressed people may exercise less.", marks: 1, markCode: "R" },
              { reasoning: "A third variable, such as sleep quality or personality, could affect both exercise and stress.", marks: 1, markCode: "R" },
              { reasoning: "Only manipulating exercise while measuring stress could test whether exercise causes reduced stress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the result is consistent with a beneficial effect but does not prove it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moderate negative association; direction and third variables prevent causal inference.",
            commonErrors: ["Interpreting -0.40 as a strong relationship or as proof of cause."],
          },
        },
        {
          id: "psych-u1-rdq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher recruits 160 participants for a study. If 35% are randomly allocated to the experimental group, calculate how many participants are in the experimental group.",
          response: { type: "numeric", parts: [{ label: "Experimental group", answer: 56 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of sample", statement: "Group size = sample size x percentage / 100" },
            ],
            steps: [
              { reasoning: "Calculate 35% of 160.", working: "160 x 0.35", marks: 1, markCode: "M" },
              { reasoning: "The experimental group contains 56 participants.", working: "56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "56 participants",
            commonErrors: ["Multiplying by 35 instead of 0.35, giving 5600."],
          },
        },
        {
          id: "psych-u1-rdq16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "During naturalistic observation of 120 behaviours in a school playground, 30% are classified as helping behaviours. Calculate the number of helping behaviours and the number of other behaviours.",
          response: {
            type: "numeric",
            parts: [
              { label: "Helping behaviours", answer: 36 },
              { label: "Other behaviours", answer: 84 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage calculation", statement: "Part = total x percentage / 100; remainder = total - part" },
            ],
            steps: [
              { reasoning: "Calculate 30% of 120.", working: "120 x 0.30", marks: 1, markCode: "M" },
              { reasoning: "Helping behaviours = 36.", working: "36", marks: 1, markCode: "A" },
              { reasoning: "Other behaviours = 120 - 36 = 84.", working: "84", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 helping behaviours and 84 other behaviours",
            commonErrors: ["Calculating 30% of the wrong total or forgetting to find the remainder."],
          },
        },
      ],
    },
    {
      id: "psych-u1-variables-sampling",
      title: "Variables, operationalisation and sampling",
      skill: "Identify independent, dependent and extraneous variables, operationalise constructs, and describe sampling techniques.",
      lesson: {
        sections: [
          {
            heading: "Types of variables",
            body: "The **independent variable** is manipulated; the **dependent variable** is measured. **Extraneous variables** are any other factors that could affect the DV — **confounding variables** are a subset that systematically vary with the IV and distort results. Researchers control extraneous variables through standardised procedures, counterbalancing and randomisation.",
          },
          {
            heading: "Operationalisation",
            body: "**Operationalisation** means defining abstract constructs in measurable terms. 'Anxiety' might become 'score on the Spielberger State-Trait Anxiety Inventory' or 'heart rate in bpm'. Poor operationalisation makes replication impossible; good operationalisation makes results interpretable. Measurement must match the level of the construct — a flawed measure invalidates the whole study.",
          },
          {
            heading: "Sampling techniques",
            body: "The **target population** is who the researcher wants to study; the **sample** is who actually participates. **Random sampling** gives every member an equal chance — unbiased but hard to achieve. **Opportunity (convenience) sampling** uses whoever is available — easy but biased. **Stratified sampling** selects proportionally from subgroups to match population characteristics; **snowball sampling** recruits via existing participants, useful for hidden populations.",
          },
        ],
        keyFormulas: [
          { name: "Variable roles", statement: "IV manipulated → DV measured; extraneous variables controlled" },
          { name: "Sampling goal", statement: "Representative sample → generalisable findings" },
        ],
        workedExample: {
          problem: "A study measures 'intelligence' using a 10-minute puzzle. Evaluate the operationalisation.",
          solution: "The puzzle only captures one narrow aspect of intelligence (e.g. spatial reasoning), lacks reliability and may not represent the full construct. A better operationalisation would use a validated, multi-faceted IQ test, so scores are interpretable and replicable.",
        },
      },
      questions: [
        {
          id: "psych-u1-vsq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Operationalisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selecting participants randomly" },
              { id: "b", text: "Defining variables in measurable terms" },
              { id: "c", text: "Repeating a study exactly" },
              { id: "d", text: "Keeping conditions identical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Operationalisation", statement: "Translating abstract concepts into precise, measurable variables." },
            ],
            steps: [
              { reasoning: "Operationalisation defines how a variable will be measured or manipulated.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Defining variables in measurable terms",
            commonErrors: ["Confusing operationalisation with standardisation or replication."],
          },
        },
        {
          id: "psych-u1-vsq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two differences between random sampling and opportunity sampling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sampling comparison", statement: "Random = equal chance, representative; opportunity = convenient, biased." },
            ],
            steps: [
              { reasoning: "Selection: random gives every population member an equal chance; opportunity uses whoever is readily available.", marks: 1, markCode: "M" },
              { reasoning: "Bias: random sampling minimises sampling bias; opportunity sampling risks over-representing certain groups (e.g. students).", marks: 1, markCode: "M" },
              { reasoning: "Consequence: random samples support generalisation; opportunity samples limit external validity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random is unbiased but hard; opportunity is easy but biased and limits generalisation.",
            commonErrors: ["Saying random sampling is always possible — it is often impractical."],
          },
        },
        {
          id: "psych-u1-vsq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a confounding variable is more serious than a general extraneous variable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Confounding", statement: "A confound varies systematically with the IV and offers an alternative explanation for the DV." },
            ],
            steps: [
              { reasoning: "Extraneous variables add noise to results but do not systematically distort them.", marks: 1, markCode: "M" },
              { reasoning: "A confound is linked to the IV — e.g. if a drug study confounds dosage with time of day.", marks: 1, markCode: "M" },
              { reasoning: "The confound provides an alternative cause for changes in the DV, destroying causal inference.", marks: 1, markCode: "R" },
              { reasoning: "Therefore confounds must be eliminated through randomisation, counterbalancing or control; general extraneous variables only need reduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Confounds systematically mimic the IV's effect, offering false causal explanations.",
            commonErrors: ["Treating all extraneous variables as equally damaging."],
          },
        },
        {
          id: "psych-u1-vsq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher studies whether background music affects revision efficiency in IB students.",
          parts: [
            { label: "a", prompt: "Identify the independent and dependent variables and operationalise each.", marks: 2 },
            { label: "b", prompt: "Describe one extraneous variable and explain how it could be controlled.", marks: 3 },
            { label: "c", prompt: "Evaluate the use of opportunity sampling for this study.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variable control", statement: "Clear IV/DV operationalisation plus control of extraneous variables ensures valid results." },
            ],
            steps: [
              { part: "a", reasoning: "IV: presence/type of background music, e.g. music vs silence condition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "DV: revision efficiency, e.g. words revised per minute or comprehension test score.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Extraneous variable: prior knowledge of topic or time of day affecting performance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Control via random allocation so groups are equivalent, or by testing all participants at the same time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Standardised revision material and test ensures the DV is measured consistently.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantage: practical and quick — recruits students already available.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Disadvantage: sample likely biased toward accessible students, limiting generalisability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Overall: acceptable for exploratory work but stratified/random sampling would be stronger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) IV music, DV efficiency. (b) Prior knowledge controlled by randomisation. (c) Convenient but biased.",
            commonErrors: ["Forgetting to operationalise the DV — 'efficiency' alone is not measurable."],
          },
        },
        {
          id: "psych-u1-vsq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the best operationalisation of 'anxiety' in a controlled study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Score on a validated anxiety inventory" },
              { id: "b", text: "Whether participants feel nervous" },
              { id: "c", text: "The researcher's impression of anxiety" },
              { id: "d", text: "The number of worries mentioned in an interview" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Operationalisation", statement: "A construct is measured precisely so it can be tested and replicated." },
            ],
            steps: [
              { reasoning: "A validated inventory gives a standardised, measurable score for anxiety.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Score on a validated anxiety inventory",
            commonErrors: ["Choosing a vague or subjective measure that cannot be replicated."],
          },
        },
        {
          id: "psych-u1-vsq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An extraneous variable is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The variable manipulated by the researcher" },
              { id: "b", text: "The variable measured as the outcome" },
              { id: "c", text: "Any other variable that could affect the dependent variable" },
              { id: "d", text: "A variable that always invalidates a study" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extraneous variable", statement: "A variable other than the IV and DV that may influence the DV." },
            ],
            steps: [
              { reasoning: "Extraneous variables are potential influences on the DV other than the IV.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Any other variable that could affect the dependent variable",
            commonErrors: ["Confusing extraneous variables with confounding variables — all confounds are extraneous, not all extraneous variables confound."],
          },
        },
        {
          id: "psych-u1-vsq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A confounding variable is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any variable measured in a study" },
              { id: "b", text: "An extraneous variable that varies systematically with the IV" },
              { id: "c", text: "The dependent variable measured twice" },
              { id: "d", text: "A variable controlled by random allocation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Confounding variable", statement: "An extraneous variable linked to the IV that offers an alternative explanation for the DV." },
            ],
            steps: [
              { reasoning: "A confound is a subset of extraneous variables that systematically covaries with the IV.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An extraneous variable varying systematically with the IV",
            commonErrors: ["Assuming every extraneous variable is a confound."],
          },
        },
        {
          id: "psych-u1-vsq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Stratified sampling is used when a researcher wants to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recruit whoever is easiest to access" },
              { id: "b", text: "Select participants proportionally from known subgroups" },
              { id: "c", text: "Use existing participants to find more participants" },
              { id: "d", text: "Choose only the most extreme cases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stratified sampling", statement: "The population is divided into subgroups and sampled in proportion to their size." },
            ],
            steps: [
              { reasoning: "Stratified sampling preserves the population's subgroup proportions in the sample.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Select proportionally from subgroups",
            commonErrors: ["Confusing stratified sampling with random or opportunity sampling."],
          },
        },
        {
          id: "psych-u1-vsq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Snowball sampling is especially useful for studying:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large random samples of the general population" },
              { id: "b", text: "Hidden or hard-to-access populations" },
              { id: "c", text: "Exactly proportional subgroups" },
              { id: "d", text: "Participants selected by a computer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Snowball sampling", statement: "Participants recruit further participants, useful when the population is hidden or inaccessible." },
            ],
            steps: [
              { reasoning: "Snowball sampling relies on social networks to reach people who are otherwise hard to find.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hidden or hard-to-access populations",
            commonErrors: ["Assuming snowball samples are representative — they are usually biased toward connected networks."],
          },
        },
        {
          id: "psych-u1-vsq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A researcher studies whether caffeine affects reaction time. Identify the IV and DV, and operationalise each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variable operationalisation", statement: "Variables must be defined in measurable terms before testing." },
            ],
            steps: [
              { reasoning: "IV: caffeine condition, operationalised as caffeine dose such as 0 mg versus 200 mg.", marks: 1, markCode: "M" },
              { reasoning: "DV: reaction time, operationalised as milliseconds on a standardised computer task.", marks: 1, markCode: "A" },
              { reasoning: "Operationalisation makes the variables precise enough to manipulate and measure consistently.", marks: 1, markCode: "M" },
              { reasoning: "Extraneous variables such as sleep or time of day should also be controlled or measured.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IV = caffeine dose in mg; DV = reaction time in ms on a standardised task.",
            commonErrors: ["Writing 'caffeine' and 'reaction time' without measurable units."],
          },
        },
        {
          id: "psych-u1-vsq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how random allocation of participants to conditions helps control extraneous variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Random allocation", statement: "Random assignment makes groups equivalent on average, reducing systematic differences." },
            ],
            steps: [
              { reasoning: "Every participant has an equal chance of being placed in each condition.", marks: 1, markCode: "M" },
              { reasoning: "This distributes participant characteristics such as age, mood and ability across groups.", marks: 1, markCode: "M" },
              { reasoning: "Known and unknown extraneous variables are therefore less likely to be systematically linked to the IV.", marks: 1, markCode: "R" },
              { reasoning: "The result is stronger internal validity and better support for causal inference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random allocation balances groups on extraneous characteristics, reducing confounds.",
            commonErrors: ["Confusing random allocation with random sampling — allocation concerns assignment after selection."],
          },
        },
        {
          id: "psych-u1-vsq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "A researcher uses opportunity sampling to recruit IB students at one school for a study on sleep and mood. Evaluate this sampling choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sampling evaluation", statement: "Convenience sampling is fast but may not represent the target population." },
            ],
            steps: [
              { reasoning: "Advantage: it is practical and quick because students are readily available at the school.", marks: 1, markCode: "M" },
              { reasoning: "Advantage: it may be cheap and feasible for a small student project.", marks: 1, markCode: "A" },
              { reasoning: "Disadvantage: one school may differ from other IB schools in culture, workload or socioeconomic mix.", marks: 1, markCode: "R" },
              { reasoning: "Disadvantage: students present at school may exclude those absent, homeschooled or in other programmes.", marks: 1, markCode: "M" },
              { reasoning: "This sampling bias reduces external validity and limits generalisation.", marks: 1, markCode: "R" },
              { reasoning: "A stratified or random sample across several schools would produce stronger conclusions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Convenient but biased; results may not generalise beyond accessible students at one school.",
            commonErrors: ["Calling opportunity sampling random — availability does not mean equal chance."],
          },
        },
        {
          id: "psych-u1-vsq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why poor operationalisation can threaten both the reliability and validity of a psychological study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Measurement quality", statement: "A construct must be measured consistently and in a way that matches the intended concept." },
            ],
            steps: [
              { reasoning: "Reliability requires the same measurement procedure to produce consistent results over time or raters.", marks: 1, markCode: "M" },
              { reasoning: "If operationalisation is vague, different researchers may measure different things, lowering reliability.", marks: 1, markCode: "M" },
              { reasoning: "Validity requires the measure to actually capture the construct, such as intelligence or anxiety.", marks: 1, markCode: "R" },
              { reasoning: "A narrow or irrelevant measure may produce precise scores that still do not represent the construct.", marks: 1, markCode: "R" },
              { reasoning: "Poor measurement can also make replication impossible because procedures are ambiguous.", marks: 1, markCode: "M" },
              { reasoning: "Therefore operationalisation underpins the whole study's trustworthiness, not just data collection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague measures are inconsistent and may not capture the construct, harming reliability and validity.",
            commonErrors: ["Treating operationalisation as only a wording issue rather than a validity issue."],
          },
        },
        {
          id: "psych-u1-vsq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A researcher studies the effect of class size on examination grades using only classes from one international school. Identify the likely sampling technique, define the target population and sample, and evaluate generalisability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Population and sample", statement: "The target population is who findings should apply to; the sample is who is actually studied." },
            ],
            steps: [
              { reasoning: "The sampling technique is likely opportunity or cluster sampling because classes are recruited from one accessible school.", marks: 1, markCode: "M" },
              { reasoning: "Target population: students in similar international schools or IB classrooms broadly; sample: classes at that one school.", marks: 1, markCode: "M" },
              { reasoning: "The sample may differ systematically in teaching quality, resources or student background.", marks: 1, markCode: "R" },
              { reasoning: "Findings may not generalise to larger schools, different curricula or other countries.", marks: 1, markCode: "R" },
              { reasoning: "External validity is therefore limited even if the experiment itself is internally valid.", marks: 1, markCode: "M" },
              { reasoning: "Multi-school stratified sampling would better represent the target population.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One-school sample is convenient but limits generalisation to the broader student population.",
            commonErrors: ["Confusing the sample with the target population."],
          },
        },
        {
          id: "psych-u1-vsq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher wants to study whether social media use is associated with attention span in teenagers.",
          parts: [
            { label: "a", prompt: "Identify the independent and dependent variables and operationalise each.", marks: 2 },
            { label: "b", prompt: "Describe one extraneous variable and explain how it could be controlled.", marks: 3 },
            { label: "c", prompt: "Evaluate snowball sampling for recruiting teenagers for this study.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Study design", statement: "Clear operationalisation, control of extraneous variables and representative sampling support valid conclusions." },
            ],
            steps: [
              { part: "a", reasoning: "IV: daily social media use, operationalised as minutes logged per day or a usage category.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "DV: attention span, operationalised as score on a sustained-attention task or self-report scale.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Extraneous variable: sleep deprivation could affect both social media use and attention.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It could be controlled by measuring sleep hours and statistically adjusting, or by testing at similar times.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Standardising the attention task ensures the DV is measured consistently.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantage: teenagers may be hard to access, and snowballing can reach hidden or reluctant participants.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Disadvantage: participants tend to recruit similar friends, producing a biased, clustered sample.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Overall it may be practical for sensitive topics but weaker than stratified or random sampling for generalisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) IV social media minutes, DV attention score. (b) Sleep controlled by measurement/standardisation. (c) Useful but biased networks limit generalisability.",
            commonErrors: ["Using 'attention span' without an operational measure."],
          },
        },
        {
          id: "psych-u1-vsq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher wants a 20% sample of 450 students. Calculate how many students should be selected.",
          response: { type: "numeric", parts: [{ label: "Sample size", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sample size", statement: "Sample size = population size x sampling percentage / 100" },
            ],
            steps: [
              { reasoning: "Calculate 20% of 450.", working: "450 x 0.20", marks: 1, markCode: "M" },
              { reasoning: "The sample size is 90 students.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 students",
            commonErrors: ["Dividing 450 by 20 instead of multiplying by 0.20."],
          },
        },
      ],
    },
  ],
};
