import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciealepsych-u5-lesson-5-2",
  code: "5-2",
  title: "Attachment: Types, Disruption and Evaluation",
  goal: "I CAN classify attachment types, analyse disruption effects and evaluate attachment theory.",
  standards: [
    "Cambridge A Level Psychology 9698",
    "Unit 5: developmental psychology depth",
  ],
  vocabulary: [
    {
      term: "Secure attachment",
      definition: "Healthy bond; distress on separation, comfort on return.",
    },
    {
      term: "Insecure-avoidant",
      definition: "Indifference to caregiver; little distress.",
    },
    {
      term: "Insecure-ambivalent",
      definition: "Anxiety; anger/ clinginess on reunion.",
    },
    {
      term: "Strange Situation",
      definition: "Ainsworth's attachment assessment procedure.",
    },
    {
      term: "Separation anxiety",
      definition: "Distress when separated from attachment figure.",
    },
    {
      term: "Internal working model",
      definition: "Cognitive template of relationships.",
    },
  ],
  concepts: [
    {
      id: "ciealepsych-u5l2-c1-types",
      title: "Attachment types and assessment",
      skill: "Classify attachment styles and evaluate assessment methods.",
      lesson: {
        sections: [
          {
            heading: "Attachment types",
            body: "**Secure** (~60%): uses caregiver as safe base, distressed on separation, comforted on reunion. **Avoidant** (~15%): ignores caregiver, little distress, avoids on reunion — caregiver rejecting/unresponsive. **Ambivalent/resistant** (~10%): anxious, clingy, angry on reunion — inconsistent caregiving. Later: **disorganised** added for abuse/neglect cases.",
          },
          {
            heading: "Assessment: Strange Situation",
            body: "Ainsworth (1970): 8-episode lab procedure observing infant response to separation/reunion with caregiver. Classified attachment type. **Strengths**: standardised, observational, predictive validity (links to later outcomes). **Limitations**: artificial setting, cultural bias (secure dominant in Western samples), mother-focused, doesn't capture disorganised well.",
          },
        ],
        keyFormulas: [
          { name: "Secure", statement: "~60% — healthy bond" },
          { name: "Avoidant", statement: "Indifference" },
          { name: "Ambivalent", statement: "Anxiety/clinginess" },
        ],
        workedExample: {
          problem:
            "An infant cries when mother leaves but ignores her on return. Attachment type?",
          solution:
            "Avoidant — distress on separation but avoidance on reunion suggests caregiver rejection; infant learned not to seek comfort.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secure attachment is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Indifference" },
              { id: "b", text: "Distress on separation, comfort on reunion" },
              { id: "c", text: "No distress" },
              { id: "d", text: "Anger on reunion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secure",
                statement: "Healthy bond.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Healthy",
            commonErrors: ["Insecure."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'Strange Situation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SS", statement: "Assessment." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ainsworth's 8-episode lab procedure observing infant responses to separation/reunion with caregiver — classifies attachment type.",
            commonErrors: ["Naturalistic only."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish insecure-avoidant from insecure-ambivalent attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Insecure types",
                statement: "Avoid vs ambivalent.",
              },
            ],
            steps: [
              { reasoning: "Avoidant.", marks: 1, markCode: "M" },
              { reasoning: "Ambivalent.", marks: 1, markCode: "M" },
              { reasoning: "Caregiver link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Avoidant: indifference, little distress, avoids reunion — rejecting caregiver. Ambivalent: anxiety, clinginess, anger on reunion — inconsistent caregiving.",
            commonErrors: ["Same type."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the Strange Situation as an attachment assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SS eval",
                statement: "Standardised vs biased.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Cultural issues.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Standardised, observational, predictive — but artificial lab setting, Western cultural bias, mother-focused, misses disorganised; useful but limited generalisability.",
            commonErrors: ["Perfect measure."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the cultural variation in attachment types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural variation",
                statement: "Western vs others.",
              },
            ],
            steps: [
              { reasoning: "Western pattern.", marks: 1, markCode: "M" },
              { reasoning: "Other cultures.", marks: 1, markCode: "M" },
              { reasoning: "Explanation.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Secure dominant in Western samples but avoidant more common in some cultures (e.g. Germany) — caregiving practices differ; 'secure' may be culturally constructed norm, not universal optimum.",
            commonErrors: ["Universal types."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'internal working model'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "IWM", statement: "Template." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Function.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cognitive template formed in early attachment — shapes expectations of relationships, self-worth, trust; influences adult romantic attachment style.",
            commonErrors: ["Memory store."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately what % of infants show secure attachment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "90%" },
              { id: "b", text: "30%" },
              { id: "c", text: "60%" },
              { id: "d", text: "10%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Secure %", statement: "~60%." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** ~60%",
            commonErrors: ["Wrong %."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of the Strange Situation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "SS limits",
                statement: "Artificial + biased.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. artificial lab setting (not natural behaviour) and cultural bias (Western norms assumed 'secure') — also only assesses mother-infant, misses disorganised.",
            commonErrors: ["Perfect method."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does caregiver responsiveness shape attachment type?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Caregiver role",
                statement: "Consistency.",
              },
            ],
            steps: [
              { reasoning: "Secure link.", marks: 1, markCode: "M" },
              { reasoning: "Insecure links.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consistent sensitive response → secure. Rejecting/unresponsive → avoidant. Inconsistent/anxious → ambivalent — infant learns what to expect from caregiver.",
            commonErrors: ["No link."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether attachment type is fixed in infancy or changeable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stability",
                statement: "Continuity vs change.",
              },
            ],
            steps: [
              { reasoning: "Stability evidence.", marks: 1, markCode: "M" },
              { reasoning: "Change evidence.", marks: 1, markCode: "M" },
              { reasoning: "Factors.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Moderately stable (continuity hypothesis) but changeable — life events, caregiving changes, interventions (e.g. adoption, therapy) can shift attachment; 'earned secure' attachment exists.",
            commonErrors: ["Fixed/destiny."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'Strange Situation' procedure was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ainsworth" },
              { id: "b", text: "Rutter" },
              { id: "c", text: "Bowlby" },
              { id: "d", text: "Bandura" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Strange Situation",
                statement: "Ainsworth 1970.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Ainsworth",
            commonErrors: ["Bowlby confused."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately what percentage of infants are classified as insecure-ambivalent?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, tolerance: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ambivalent %", statement: "~10%." },
            ],
            steps: [
              {
                reasoning:
                  "Insecure-ambivalent attachment occurs in roughly 10% of infants in Western samples.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10",
            commonErrors: ["Confused with avoidant."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately what percentage of infants are classified as insecure-avoidant?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, tolerance: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Avoidant %", statement: "~15%." },
            ],
            steps: [
              {
                reasoning:
                  "Insecure-avoidant attachment occurs in roughly 15% of infants in Western samples.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "15",
            commonErrors: ["Confused with ambivalent."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An infant who shows little distress on separation and avoids the caregiver on reunion is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disorganised" },
              { id: "b", text: "Securely attached" },
              { id: "c", text: "Insecure-ambivalent" },
              { id: "d", text: "Insecure-avoidant" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Avoidant pattern",
                statement: "Indifference + avoidance.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Insecure-avoidant",
            commonErrors: ["Secure confused."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "'Disorganised' attachment is most strongly associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working-class families" },
              { id: "b", text: "Abusive or neglectful caregiving" },
              { id: "c", text: "Consistent sensitive caregiving" },
              { id: "d", text: "First-born children" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Disorganised",
                statement: "Abuse/neglect link.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Abuse/neglect",
            commonErrors: ["Normal variation."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strengths of the Strange Situation as an attachment assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "SS strengths",
                statement: "Standardised + predictive.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. standardised procedure (8 controlled episodes, replicable) and predictive validity (attachment type predicts later social/emotional outcomes).",
            commonErrors: ["Limitations only."],
          },
        },
      ],
    },
    {
      id: "ciealepsych-u5l2-c2-disruption",
      title: "Attachment disruption and deprivation",
      skill:
        "Analyse effects of separation, deprivation and institutionalisation.",
      lesson: {
        sections: [
          {
            heading: "Separation and deprivation",
            body: "**Short-term separation**: protest → despair → detachment (Bowlby). **Privation** (never attached) worse than **deprivation** (lost attachment). Effects: emotional disturbance, cognitive delays, affectionless psychopathy, difficulty forming relationships — severity depends on duration, age, substitute care.",
          },
          {
            heading: "Institutionalisation and Romanian orphans",
            body: "Rutter's Romanian orphan studies: children adopted after institutionalisation showed cognitive deficits, disinhibited attachment, catch-up possible if adopted early. Shows deprivation effects reversible to degree — 'window of opportunity' for attachment formation.",
          },
        ],
        keyFormulas: [
          { name: "Privation vs deprivation", statement: "Never vs lost" },
          {
            name: "Protest-despair-detachment",
            statement: "Separation stages",
          },
          { name: "Catch-up", statement: "Adoption recovery" },
        ],
        workedExample: {
          problem: "Why might early institutionalisation cause lasting damage?",
          solution:
            "Critical period for attachment missed → internal working model distorted → later relationship difficulties; but early adoption enables catch-up — timing matters.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bowlby's separation stages are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fear, anxiety, calm" },
              { id: "b", text: "Protest, despair, detachment" },
              { id: "c", text: "Anger, bargaining, depression" },
              { id: "d", text: "Shock, denial, acceptance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Stages",
                statement: "Protest-despair-detach.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Three stages",
            commonErrors: ["Wrong sequence."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish 'privation' from 'deprivation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Priv/depriv",
                statement: "Never vs lost.",
              },
            ],
            steps: [
              { reasoning: "Privation.", marks: 1, markCode: "M" },
              { reasoning: "Deprivation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Privation: never formed attachment (worse — no internal model). Deprivation: had attachment then lost it — attachment figure removed.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'affectionless psychopathy' hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Affectionless psychopathy",
                statement: "Bowlby.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Criticism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Early privation → inability to feel guilt/ empathy → criminal behaviour; Bowlby's hypothesis — supported by some studies but causation and other factors (abuse, genetics) complicate.",
            commonErrors: ["Universal outcome."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse Rutter's Romanian orphan studies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rutter study",
                statement: "Adoption outcomes.",
              },
            ],
            steps: [
              { reasoning: "Design.", marks: 1, markCode: "M" },
              { reasoning: "Findings.", marks: 1, markCode: "M" },
              { reasoning: "Implications.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Orphans adopted before ~6 months showed catch-up; later adoptions showed persistent cognitive/attachment deficits — 'window of opportunity' for attachment; deprivation effects partially reversible.",
            commonErrors: ["Permanent damage only."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate Bowlby's 'monotropy' hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monotropy",
                statement: "One attachment.",
              },
            ],
            steps: [
              { reasoning: "Hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Evidence for.", marks: 1, markCode: "M" },
              { reasoning: "Evidence against.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bowlby: infant needs one primary attachment (monotropy) — supported by some evidence but contradicted by multiple attachments common in many cultures; 'hierarchy of attachments' may be more accurate.",
            commonErrors: ["Universal monotropy."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'disinhibited attachment'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disinhibited",
                statement: "Stranger clinginess.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Indiscriminate friendliness toward strangers — seen in institutionally deprived children; failure to discriminate safe vs unsafe attachment figures.",
            commonErrors: ["Secure attachment."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Privation' differs from 'deprivation' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "Privation is less severe" },
              { id: "c", text: "Deprivation is never harmful" },
              { id: "d", text: "No attachment ever formed vs attachment lost" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Priv vs depr",
                statement: "Never vs lost.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Never vs lost",
            commonErrors: ["Same."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors affecting severity of separation effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Severity factors",
                statement: "Duration, substitute.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. duration of separation (longer = worse) and quality of substitute care (good care mitigates) — also age at separation, attachment type.",
            commonErrors: ["Uniform effects."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does 'institutionalisation' differ from 'foster care'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Instit vs foster",
                statement: "Impersonal vs family.",
              },
            ],
            steps: [
              { reasoning: "Institutional.", marks: 1, markCode: "M" },
              { reasoning: "Foster.", marks: 1, markCode: "M" },
              { reasoning: "Outcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Institutions: impersonal, high child:staff ratio, no consistent attachment figure → deprivation. Foster: family environment, individual attention → better attachment outcomes.",
            commonErrors: ["Same care."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the 'critical period' hypothesis for attachment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Critical period",
                statement: "Time-limited.",
              },
            ],
            steps: [
              { reasoning: "Hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Evidence for.", marks: 1, markCode: "M" },
              { reasoning: "Evidence against.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bowlby: attachment must form in first ~2.5 years or damage permanent — Rutter shows catch-up possible with early adoption → 'sensitive period' more accurate than strict critical period.",
            commonErrors: ["Strict critical period."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bowlby's first stage of separation distress is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Despair" },
              { id: "b", text: "Detachment" },
              { id: "c", text: "Protest" },
              { id: "d", text: "Acceptance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Separation stages",
                statement: "Protest first.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Protest",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rutter found children adopted before approximately how many months showed the best catch-up in development?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Rutter orphans",
                statement: "Early adoption better.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Children adopted before about 6 months showed near-complete catch-up; later adoptions showed persistent deficits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Any age same."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bowlby suggested a primary attachment should form within approximately the first how many years of life?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, tolerance: 0.6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Critical period",
                statement: "~2.5 years.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bowlby's critical/sensitive period for attachment formation is roughly the first 2.5-3 years of life.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2.5",
            commonErrors: ["No time limit."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A likely long-term effect of early privation (never forming an attachment) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enhanced empathy" },
              { id: "b", text: "Perfectly normal development" },
              {
                id: "c",
                text: "Difficulty forming relationships / affectionless psychopathy",
              },
              { id: "d", text: "Stronger attachment later" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Privation effects",
                statement: "Relationship difficulties.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Relationship difficulties",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The 'window of opportunity' in attachment research refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any time attachment forms equally well" },
              {
                id: "b",
                text: "A limited period when attachment can form with good outcomes",
              },
              { id: "c", text: "Adoption agency waiting lists" },
              { id: "d", text: "Only the first day of life" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Window",
                statement: "Sensitive period.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Limited early period",
            commonErrors: ["Anytime."],
          },
        },
        {
          id: "ciealepsych-q-u5l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the evidence that the effects of early deprivation can be reversed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reversibility",
                statement: "Catch-up evidence.",
              },
            ],
            steps: [
              { reasoning: "Evidence for reversal.", marks: 1, markCode: "M" },
              { reasoning: "Conditions needed.", marks: 1, markCode: "M" },
              { reasoning: "Limits.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rutter's orphans: early adoption enabled catch-up in IQ and attachment — shows plasticity; but effects depend on timing (before ~6 months best), quality of substitute care; some deficits (disinhibited attachment) persist — partial not complete reversal.",
            commonErrors: ["Fully reversible."],
          },
        },
      ],
    },
  ],
};
