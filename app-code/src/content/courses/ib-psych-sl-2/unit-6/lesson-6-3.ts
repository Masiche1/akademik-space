import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "psych-u6-lesson-6-3",
  code: "6-3",
  title: "Forensic Psychology",
  goal: "I CAN describe offender profiling, eyewitness testimony research and psychological perspectives on criminal responsibility.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Forensic psychology", definition: "The application of psychological knowledge to legal and criminal justice contexts." },
    { term: "Offender profiling", definition: "Predicting an offender's characteristics from crime scene evidence and behaviour." },
    { term: "Eyewitness testimony", definition: "A witness's account of an event, which can be inaccurate due to memory and suggestion." },
    { term: "Misinformation effect", definition: "Post-event information altering eyewitness memory of the original event." },
    { term: "Criminal responsibility", definition: "The psychological/legal determination of whether an offender could control their actions." },
    { term: "Insanity defence", definition: "A defence arguing the defendant lacked mental capacity to understand or control their actions." },
  ],
  concepts: [
    {
      id: "psych-u6-forensic-evidence",
      title: "Offender profiling and eyewitness testimony",
      skill: "Describe offender profiling methods and evaluate the reliability of eyewitness testimony including memory factors.",
      lesson: {
        sections: [
          {
            heading: "Offender profiling",
            body: "**Offender profiling** (criminal investigative analysis) infers an offender's characteristics from crime evidence — personality, motivations, likely demographics. Two approaches: **deductive profiling** (top-down, based on crime scene analysis and offender typologies) and **inductive profiling** (bottom-up, based on statistical patterns from databases of known offenders). Profiling can narrow suspect pools and guide investigations but cannot identify specific individuals and has limited empirical validation.",
          },
          {
            heading: "Eyewitness testimony",
            body: "Eyewitness testimony is powerful but fallible. **Loftus and Palmer (1974)** showed that wording of questions alters memory — 'smashed' vs 'hit' produced different speed estimates and false memories of broken glass. The **misinformation effect**: post-event information (leading questions, discussions with other witnesses) contaminates original memory. Factors affecting accuracy: stress/arousal, weapon focus (attention on weapon reduces face recall), cross-race identification bias, retention interval, and confidence — which is poorly correlated with accuracy.",
          },
          {
            heading: "Improving eyewitness evidence",
            body: "The **cognitive interview** improves recall: reinstate context (mental and physical), report everything (no editing), recall in reverse order, and change perspective. Unlike standard interviews, it doesn't suggest answers. **Lineup procedures** require careful administration — sequential lineups (one at a time) reduce relative judgment errors; double-blind administration prevents unconscious cues. DNA evidence has shown eyewitness error contributes to a significant proportion of wrongful convictions.",
          },
        ],
        keyFormulas: [
          { name: "Profiling approaches", statement: "Deductive (crime scene) + Inductive (statistical patterns)" },
          { name: "Cognitive interview", statement: "Context reinstatement + report everything + reverse order + perspective change" },
          { name: "Memory threats", statement: "Misinformation + weapon focus + cross-race bias + retention interval" },
        ],
        workedExample: {
          problem: "A witness confidently identifies a suspect but their confidence was high only after seeing the lineup repeatedly. Evaluate.",
          solution: "Confidence is not reliable — post-identification confidence inflation is common. Repeated exposure to the lineup can create false familiarity. DNA or corroborating evidence is needed; the identification alone may reflect suggestion rather than accurate memory.",
        },
      },
      questions: [
        {
          id: "psych-u6-feq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The misinformation effect refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Witnesses confusing two similar events" },
              { id: "b", text: "Post-event information altering original memory" },
              { id: "c", text: "Witnesses forgetting the event entirely" },
              { id: "d", text: "Confidence increasing over time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Misinformation effect", statement: "Later information changes recall of the original event." },
            ],
            steps: [
              { reasoning: "Misinformation effect = post-event suggestion contaminating memory.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Post-event information altering original memory",
            commonErrors: ["Confusing with simple forgetting — it's memory distortion, not loss."],
          },
        },
        {
          id: "psych-u6-feq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two techniques used in the cognitive interview to improve eyewitness recall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cognitive interview", statement: "Context reinstatement and varied recall strategies improve memory accuracy." },
            ],
            steps: [
              { reasoning: "Context reinstatement: witness mentally and physically returns to the scene's context — sights, sounds, emotions.", marks: 1, markCode: "M" },
              { reasoning: "Report everything: witness narrates all details without editing, increasing chance of relevant recall.", marks: 1, markCode: "M" },
              { reasoning: "Reverse order or changed perspective: recalling events backwards or from another viewpoint accesses different memory pathways.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context reinstatement + report everything + varied recall order/perspective.",
            commonErrors: ["Confusing cognitive interview with leading questions — it avoids suggestion."],
          },
        },
        {
          id: "psych-u6-feq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why eyewitness confidence is a poor indicator of accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Confidence-accuracy", statement: "Witness confidence correlates weakly with accuracy due to memory reconstruction." },
            ],
            steps: [
              { reasoning: "Memory is reconstructive — witnesses fill gaps with expectations and post-event information.", marks: 1, markCode: "M" },
              { reasoning: "Repeated viewing of suspects or media coverage inflates confidence without improving accuracy.", marks: 1, markCode: "M" },
              { reasoning: "Stress, weapon focus and cross-race bias impair encoding regardless of how sure the witness feels.", marks: 1, markCode: "R" },
              { reasoning: "Studies show confident witnesses can be wrong — confidence reflects certainty, not correctness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Confidence ≠ accuracy — reconstruction, suggestion and bias affect memory regardless of certainty.",
            commonErrors: ["Assuming confident witnesses are reliable — courts have learned this is false."],
          },
        },
        {
          id: "psych-u6-feq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An eyewitness identifies a suspect in a lineup with high confidence, but the suspect has an alibi.",
          parts: [
            { label: "a", prompt: "Explain four factors that could have produced a false identification.", marks: 3 },
            { label: "b", prompt: "Describe how the lineup procedure could have been improved.", marks: 2 },
            { label: "c", prompt: "Evaluate the reliability of eyewitness testimony in criminal cases.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eyewitness fallibility", statement: "Memory reconstruction, suggestion and bias can produce confident but false identifications." },
            ],
            steps: [
              { part: "a", reasoning: "Misinformation effect: post-event discussion or leading questions contaminated memory.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Weapon focus: attention on weapon reduced encoding of the perpetrator's face.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cross-race bias or poor viewing conditions (darkness, distance, stress) impaired encoding.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sequential lineup (one photo at a time) reduces relative judgment errors.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Double-blind administration prevents the administrator's cues from influencing choice.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Eyewitness testimony is fallible — DNA exonerations show it contributes to wrongful convictions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "However, it's not useless — with proper procedures (cognitive interview, fair lineups) accuracy improves.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Best practice: corroborate eyewitness evidence with physical/DNA evidence and assess viewing conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Misinformation + weapon focus + bias/conditions. (b) Sequential + double-blind. (c) Fallible but improvable; corroborate.",
            commonErrors: ["Treating eyewitness testimony as definitive — it requires corroboration."],
          },
        },
        {
          id: "psych-u6-feq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Deductive offender profiling is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Predicting crime before it happens" },
              { id: "b", text: "Inferring offender characteristics from analysis of the specific crime scene" },
              { id: "c", text: "Using statistical databases of known offenders" },
              { id: "d", text: "Interviewing the suspect directly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deductive profiling", statement: "Top-down — crime scene analysis infers offender traits." },
            ],
            steps: [
              { reasoning: "Deductive profiling starts with the specific crime and works back to offender characteristics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Inferring offender characteristics from analysis of the specific crime scene",
            commonErrors: ["Confusing deductive (scene analysis) with inductive (statistical patterns)."],
          },
        },
        {
          id: "psych-u6-feq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Inductive offender profiling relies on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistical patterns from databases of known offenders" },
              { id: "b", text: "The offender's own confession" },
              { id: "c", text: "Detailed analysis of one crime scene" },
              { id: "d", text: "Witness interviews" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inductive profiling", statement: "Bottom-up — statistical patterns from offender databases." },
            ],
            steps: [
              { reasoning: "Inductive profiling generalises from data on many similar offenders to the current case.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Statistical patterns from databases of known offenders",
            commonErrors: ["Reversing deductive and inductive — inductive is data-driven, bottom-up."],
          },
        },
        {
          id: "psych-u6-feq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The weapon focus effect refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Witnesses forgetting the entire event" },
              { id: "b", text: "Weapons making crimes more memorable" },
              { id: "c", text: "Witnesses focusing on the perpetrator's face" },
              { id: "d", text: "Attention on the weapon reducing recall of other details" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weapon focus", statement: "Attention captured by the weapon reduces encoding of the perpetrator." },
            ],
            steps: [
              { reasoning: "Weapon focus = the weapon draws attention away from the face and other details.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Attention on the weapon reducing recall of other details",
            commonErrors: ["Thinking weapon focus improves memory — it impairs encoding of other details."],
          },
        },
        {
          id: "psych-u6-feq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Cross-race bias in eyewitness identification means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lineups only include one race" },
              { id: "b", text: "Witnesses identify all races equally well" },
              { id: "c", text: "People are less accurate identifying faces of other races" },
              { id: "d", text: "Witnesses prefer same-race suspects" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cross-race bias", statement: "Own-race faces are recognised more accurately than other-race faces." },
            ],
            steps: [
              { reasoning: "Cross-race bias = reduced accuracy when identifying faces of a different race.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** People are less accurate identifying faces of other races",
            commonErrors: ["Confusing the bias with prejudice — it is a perceptual/encoding deficit."],
          },
        },
        {
          id: "psych-u6-feq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Sequential lineups are preferred to simultaneous lineups because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Allow more suspects to be shown" },
              { id: "b", text: "Are faster to administer" },
              { id: "c", text: "Require less memory" },
              { id: "d", text: "Reduce relative judgment errors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lineup procedure", statement: "Sequential presentation reduces comparison-based errors." },
            ],
            steps: [
              { reasoning: "Showing photos one at a time prevents witnesses picking 'the best match' relative to others.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reduce relative judgment errors",
            commonErrors: ["Thinking sequential is just a preference — it specifically reduces relative judgment."],
          },
        },
        {
          id: "psych-u6-feq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Double-blind lineup administration means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only one photo is shown" },
              { id: "b", text: "Neither witness nor administrator knows who the suspect is" },
              { id: "c", text: "The witness cannot see the photos" },
              { id: "d", text: "The lineup is conducted online" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double-blind procedure", statement: "Administrator and witness are both unaware of the suspect's position." },
            ],
            steps: [
              { reasoning: "Double-blind prevents the administrator's unconscious cues from influencing the witness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Neither witness nor administrator knows who the suspect is",
            commonErrors: ["Confusing double-blind with sequential — they address different biases."],
          },
        },
        {
          id: "psych-u6-feq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Research on eyewitness confidence shows that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confidence eliminates memory errors" },
              { id: "b", text: "Confidence always decreases over time" },
              { id: "c", text: "Confidence correlates weakly with accuracy" },
              { id: "d", text: "Confidence strongly predicts accuracy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Confidence-accuracy", statement: "Witness confidence is a poor predictor of accuracy." },
            ],
            steps: [
              { reasoning: "Studies show confident witnesses can be wrong — certainty ≠ correctness.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Confidence correlates weakly with accuracy",
            commonErrors: ["Assuming confident witnesses are reliable — courts have learned this is false."],
          },
        },
        {
          id: "psych-u6-feq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two techniques used in the cognitive interview.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cognitive interview", statement: "Context reinstatement and varied recall improve accuracy without suggestion." },
            ],
            steps: [
              { reasoning: "Context reinstatement: witness mentally returns to the scene — sights, sounds, emotions, thoughts.", marks: 1, markCode: "M" },
              { reasoning: "Report everything: witness narrates all details without editing or omitting.", marks: 1, markCode: "M" },
              { reasoning: "Reverse order or changed perspective: recalling backwards or from another viewpoint.", marks: 1, markCode: "M" },
              { reasoning: "These techniques access different memory pathways without suggesting answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two — context reinstatement, report everything, reverse order, perspective change.",
            commonErrors: ["Confusing cognitive interview with leading questions — it avoids suggestion."],
          },
        },
        {
          id: "psych-u6-feq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two factors that reduce eyewitness identification accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eyewitness accuracy", statement: "Stress, weapon focus, cross-race bias and retention interval impair memory." },
            ],
            steps: [
              { reasoning: "Weapon focus: attention on the weapon reduces encoding of the perpetrator's face.", marks: 1, markCode: "M" },
              { reasoning: "Cross-race bias: people are less accurate identifying faces of other races.", marks: 1, markCode: "M" },
              { reasoning: "Retention interval: longer delays between event and identification increase forgetting.", marks: 1, markCode: "M" },
              { reasoning: "Stress and poor viewing conditions (darkness, distance) further impair encoding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two — weapon focus, cross-race bias, retention interval, stress, poor conditions.",
            commonErrors: ["Listing only one factor when two are required."],
          },
        },
        {
          id: "psych-u6-feq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain the weapon focus effect and its implications for eyewitness testimony.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weapon focus", statement: "Weapons capture attention, reducing encoding of other details." },
            ],
            steps: [
              { reasoning: "When a weapon is present, it is highly salient — it demands attention.", marks: 1, markCode: "M" },
              { reasoning: "Attention is limited — focusing on the weapon means less encoding of the face and clothing.", marks: 1, markCode: "M" },
              { reasoning: "This is an encoding failure — the information was never fully stored in memory.", marks: 1, markCode: "R" },
              { reasoning: "Studies show witnesses recall the weapon better than the perpetrator's face.", marks: 1, markCode: "M" },
              { reasoning: "Implication: identifications in armed crimes are less reliable — corroboration needed.", marks: 1, markCode: "R" },
              { reasoning: "Courts should consider weapon presence when evaluating eyewitness evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weapon focus = attention captured by weapon → poorer face recall → less reliable identification.",
            commonErrors: ["Describing the effect without explaining the attention/encoding mechanism."],
          },
        },
        {
          id: "psych-u6-feq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A witness identifies a suspect in a lineup but later says they were unsure at first. Using eyewitness research, explain this pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Confidence dynamics", statement: "Confidence can increase after identification through feedback and repeated exposure." },
            ],
            steps: [
              { reasoning: "Initial uncertainty suggests weak memory trace or poor viewing conditions.", marks: 1, markCode: "M" },
              { reasoning: "Post-identification feedback ('good, that's the one') inflates confidence.", marks: 1, markCode: "M" },
              { reasoning: "Repeated viewing of the suspect or lineup creates familiarity mistaken for recognition.", marks: 1, markCode: "R" },
              { reasoning: "Confidence-accuracy correlation is weak — high confidence doesn't guarantee correctness.", marks: 1, markCode: "M" },
              { reasoning: "The identification may reflect suggestion rather than accurate memory.", marks: 1, markCode: "R" },
              { reasoning: "Corroborating evidence (DNA, alibi) is needed to validate the identification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initial doubt + post-ID feedback → inflated confidence without improved accuracy.",
            commonErrors: ["Treating later confidence as evidence of accuracy — it may reflect suggestion."],
          },
        },
        {
          id: "psych-u6-feq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate offender profiling as an investigative tool.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Profiling evaluation", statement: "Profiling can guide investigations but lacks scientific validation and risks bias." },
            ],
            steps: [
              { reasoning: "Potential benefit: narrows suspect pools by inferring likely offender characteristics.", marks: 1, markCode: "M" },
              { reasoning: "Deductive profiling uses detailed crime scene analysis — case-specific reasoning.", marks: 1, markCode: "M" },
              { reasoning: "Inductive profiling uses statistical patterns — data-driven but may not fit the individual.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: methods lack rigorous empirical validation — accuracy is unproven.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: profiles may reflect stereotypes — embedding racial or gender biases.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: focusing on profiled suspects may produce false leads and miss the real offender.", marks: 1, markCode: "R" },
              { reasoning: "Profiling cannot identify a specific individual — it only narrows possibilities.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: acceptable as an investigative aid, never as evidence or sole basis for arrest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Profiling can guide investigations but is unvalidated, biased and cannot identify individuals.",
            commonErrors: ["One-sided evaluation — must weigh investigative utility against scientific and ethical limits."],
          },
        },
        {
          id: "psych-u6-feq17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a study, 200 witnesses viewed a crime and 150 later identified the correct suspect. What percentage were accurate?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage = (part / total) × 100." },
            ],
            steps: [
              { reasoning: "150 / 200 = 0.75 = 75%.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75",
            commonErrors: ["Giving 0.75 instead of 75%."],
          },
        },
        {
          id: "psych-u6-feq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A lineup study tested 80 witnesses: 60 used sequential lineups and 20 used simultaneous. (a) What percentage used sequential lineups? (b) How many more used sequential than simultaneous?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75 },
              { label: "b", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lineup types", statement: "Sequential (one at a time) and simultaneous (all at once) are the two main formats." },
            ],
            steps: [
              { part: "a", reasoning: "60 / 80 = 0.75 = 75%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: 75%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "60 − 20 = 40 witnesses.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: 40 witnesses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 75% (b) 40",
            commonErrors: ["Confusing the two lineup formats when calculating."],
          },
        },
        {
          id: "psych-u6-feq19",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two ways eyewitness evidence can be improved in criminal investigations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Improving eyewitness evidence", statement: "Cognitive interview and careful lineup procedures increase accuracy." },
            ],
            steps: [
              { reasoning: "Use the cognitive interview — context reinstatement and varied recall improve memory accuracy.", marks: 1, markCode: "M" },
              { reasoning: "Avoid leading questions — they trigger the misinformation effect and distort memory.", marks: 1, markCode: "M" },
              { reasoning: "Use sequential, double-blind lineups to reduce relative judgment and administrator bias.", marks: 1, markCode: "R" },
              { reasoning: "Corroborate with physical/DNA evidence — eyewitness testimony alone is fallible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cognitive interview + non-leading questions + fair lineups + corroboration.",
            commonErrors: ["Suggesting repeated viewing helps — it inflates confidence, not accuracy."],
          },
        },
        {
          id: "psych-u6-feq20",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A robbery occurs at night in poor lighting. A witness identifies a suspect two days later.",
          parts: [
            { label: "a", prompt: "Explain three factors that may have impaired the witness's memory.", marks: 3 },
            { label: "b", prompt: "Describe how the identification procedure could have been improved.", marks: 2 },
            { label: "c", prompt: "Evaluate whether this identification should be used as evidence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eyewitness conditions", statement: "Poor viewing conditions, delays and procedure affect identification reliability." },
            ],
            steps: [
              { part: "a", reasoning: "Poor viewing conditions: darkness and distance impaired initial encoding.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Retention interval: two-day delay increased forgetting and reconstruction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stress during the robbery may have narrowed attention (weapon focus if armed).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use a sequential, double-blind lineup administered by someone unaware of the suspect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interview with the cognitive interview technique soon after the event.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The identification is weak evidence — poor conditions and delay reduce reliability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Confidence should not be over-weighted — it correlates weakly with accuracy.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It should be corroborated with physical evidence before being used decisively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Poor conditions + delay + stress. (b) Sequential double-blind + cognitive interview. (c) Weak — needs corroboration.",
            commonErrors: ["Treating any identification as strong evidence — conditions matter."],
          },
        },
      ],
    },
    {
      id: "psych-u6-criminal-responsibility",
      title: "Criminal responsibility and offender profiling",
      skill: "Describe psychological perspectives on criminal responsibility including the insanity defence, and evaluate offender profiling.",
      lesson: {
        sections: [
          {
            heading: "Criminal responsibility",
            body: "**Criminal responsibility** asks whether an offender could understand the wrongfulness of their act and control their behaviour. The **insanity defence** (M'Naghten rules, 1843) argues defendants should be acquitted if, at the time of the crime, they didn't know what they were doing or that it was wrong due to mental disease. Modern standards (e.g. ALI Model Penal Code) add inability to conform conduct to legal requirements. Critics argue the defence can be abused and is inconsistently applied; supporters argue it recognises genuine mental incapacity.",
          },
          {
            heading: "Mental disorder and crime",
            body: "The relationship between mental illness and crime is complex: most mentally ill people are not violent, and most violent offenders are not mentally ill. However, certain conditions increase risk — psychosis (command hallucinations), personality disorders (antisocial), and substance-induced states. The **violence risk assessment** tries to predict dangerousness using actuarial tools and clinical judgement — but prediction is notoriously unreliable, with high false positive rates.",
          },
          {
            heading: "Offender profiling evaluated",
            body: "Profiling aims to narrow suspect pools by inferring offender characteristics. **Deductive profiling** (top-down) relies on crime scene analysis; **inductive profiling** (bottom-up) uses statistical databases of offender types. Supporters argue it directs investigations efficiently; critics note it lacks scientific validation, can reinforce stereotypes, and cannot identify specific individuals. Profiling is better viewed as an investigative aid than a diagnostic tool — it should never substitute for evidence.",
          },
        ],
        keyFormulas: [
          { name: "Insanity defence", statement: "Didn't know act or that it was wrong due to mental disease" },
          { name: "Profiling types", statement: "Deductive (scene analysis) + Inductive (statistical patterns)" },
          { name: "Violence prediction", statement: "High false positives — prediction is unreliable" },
        ],
        workedExample: {
          problem: "A defendant with schizophrenia committed a crime while responding to command hallucinations. Should the insanity defence apply?",
          solution: "Possibly — if the defendant genuinely could not understand the wrongfulness of their act due to psychosis, the M'Naghten standard may be met. However, courts require expert evaluation of capacity at the time of the offence, and 'control' standards vary by jurisdiction.",
        },
      },
      questions: [
        {
          id: "psych-u6-crq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The M'Naghten insanity defence requires that the defendant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Did not know the act or that it was wrong due to mental disease" },
              { id: "b", text: "Acted under extreme emotional provocation" },
              { id: "c", text: "Had a diagnosed mental disorder at any time" },
              { id: "d", text: "Was not aware of the crime at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "M'Naghten rules", statement: "Insanity defence requires not knowing the act or its wrongfulness due to mental disease." },
            ],
            steps: [
              { reasoning: "M'Naghten requires cognitive incapacity — not knowing what was done or that it was wrong.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Didn't know act or wrongfulness due to mental disease",
            commonErrors: ["Thinking any mental illness automatically qualifies — capacity at time of crime is required."],
          },
        },
        {
          id: "psych-u6-crq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the difference between deductive and inductive offender profiling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Profiling approaches", statement: "Deductive = crime scene analysis; inductive = statistical patterns from offender databases." },
            ],
            steps: [
              { reasoning: "Deductive profiling: top-down — analyst studies the specific crime scene and infers offender traits.", marks: 1, markCode: "M" },
              { reasoning: "Inductive profiling: bottom-up — uses statistical patterns from databases of similar known offenders.", marks: 1, markCode: "M" },
              { reasoning: "Deductive is case-specific but subjective; inductive is data-driven but may not fit the individual case.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deductive = scene analysis (top-down); inductive = statistical patterns (bottom-up).",
            commonErrors: ["Reversing the directions — deductive starts with crime, inductive with statistics."],
          },
        },
        {
          id: "psych-u6-crq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the reliability of violence risk assessment in predicting future dangerousness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk assessment", statement: "Predicting violence is inherently unreliable with high false positive rates." },
            ],
            steps: [
              { reasoning: "Base rate problem: serious violence is rare, so even accurate tests produce many false positives.", marks: 1, markCode: "M" },
              { reasoning: "Clinical judgement is biased — stereotypes about mentally ill people inflate risk estimates.", marks: 1, markCode: "M" },
              { reasoning: "Actuarial tools (statistical models) outperform clinical judgement but still have limited accuracy.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: risk can be assessed probabilistically but never predicted with certainty — precautionary approaches needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Risk assessment is probabilistic, not predictive — high false positives limit reliability.",
            commonErrors: ["Treating risk assessment as prediction — it estimates probability, not certainty."],
          },
        },
        {
          id: "psych-u6-crq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A serial offender is caught after a profiler narrows the suspect pool to 50 people.",
          parts: [
            { label: "a", prompt: "Describe how offender profiling contributed to the arrest.", marks: 2 },
            { label: "b", prompt: "Explain two limitations of relying on profiling in criminal investigations.", marks: 3 },
            { label: "c", prompt: "Evaluate the ethical concerns of using psychological profiling in justice systems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Profiling utility", statement: "Profiling can guide investigations but lacks scientific validation and risks bias." },
            ],
            steps: [
              { part: "a", reasoning: "The profile identified likely offender characteristics (age, background, methods) from crime patterns.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This focused the investigation on 50 suspects, making detection feasible.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lack of validation: profiling methods haven't been rigorously tested for accuracy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stereotyping: profiles may reflect biases about offender types, narrowing wrongly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "False leads: focusing resources on profiled suspects may miss the actual offender.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Concern: profiling may violate presumption of innocence by treating suspects as guilty before evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concern: profiles based on stereotypes can embed racial/gender biases into justice.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balance: profiling as investigative aid is acceptable; as evidence or sole basis for arrest is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Narrowed suspect pool. (b) Unvalidated + stereotypes + false leads. (c) Aid acceptable, sole basis unethical.",
            commonErrors: ["Treating profiling as scientific evidence — it's an investigative heuristic."],
          },
        },
        {
          id: "psych-u6-crq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Under the M'Naghten rules, the insanity defence requires that the defendant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Was provoked to extreme emotion" },
              { id: "b", text: "Had any diagnosed mental disorder" },
              { id: "c", text: "Acted under the influence of drugs" },
              { id: "d", text: "Did not know the act or that it was wrong due to mental disease" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "M'Naghten rules", statement: "Insanity defence requires cognitive incapacity due to mental disease." },
            ],
            steps: [
              { reasoning: "M'Naghten requires not knowing what was done or that it was wrong, due to mental disease.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Did not know the act or that it was wrong due to mental disease",
            commonErrors: ["Thinking any mental illness qualifies — capacity at the time of crime is required."],
          },
        },
        {
          id: "psych-u6-crq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The ALI Model Penal Code standard for insanity adds to M'Naghten by including:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inability to conform conduct to legal requirements" },
              { id: "b", text: "Extreme emotional provocation" },
              { id: "c", text: "Youth of the offender" },
              { id: "d", text: "Substance intoxication" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ALI standard", statement: "Adds inability to conform conduct to the law." },
            ],
            steps: [
              { reasoning: "The ALI standard covers both not knowing wrongfulness AND inability to control conduct.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Inability to conform conduct to legal requirements",
            commonErrors: ["Confusing the ALI 'control' prong with M'Naghten's purely cognitive test."],
          },
        },
        {
          id: "psych-u6-crq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which mental health condition is most associated with increased risk of violent behaviour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Psychosis with command hallucinations" },
              { id: "b", text: "Specific phobia" },
              { id: "c", text: "Mild depression" },
              { id: "d", text: "Generalised anxiety disorder" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mental disorder and crime", statement: "Certain conditions — psychosis, antisocial personality, substance states — raise violence risk." },
            ],
            steps: [
              { reasoning: "Command hallucinations in psychosis can directly drive violent acts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Psychosis with command hallucinations",
            commonErrors: ["Assuming all mental illness predicts violence — most mentally ill people are not violent."],
          },
        },
        {
          id: "psych-u6-crq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'base rate problem' in violence risk assessment means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Risk factors are always accurately measured" },
              { id: "b", text: "Most assessments are conducted quickly" },
              { id: "c", text: "Serious violence is rare, so even accurate tests produce many false positives" },
              { id: "d", text: "All offenders reoffend at the same rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Base rate problem", statement: "Rare events produce many false positives even with accurate tests." },
            ],
            steps: [
              { reasoning: "When serious violence is rare, a small false-positive rate still yields many wrong predictions.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Serious violence is rare, so even accurate tests produce many false positives",
            commonErrors: ["Confusing base rate with test accuracy — the problem is the rarity of the event."],
          },
        },
        {
          id: "psych-u6-crq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Clinical judgement in violence risk assessment tends to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be biased by stereotypes about mentally ill people" },
              { id: "b", text: "Be more accurate than actuarial tools" },
              { id: "c", text: "Eliminate all false positives" },
              { id: "d", text: "Predict violence with certainty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clinical judgement bias", statement: "Stereotypes inflate risk estimates for mentally ill offenders." },
            ],
            steps: [
              { reasoning: "Clinicians overestimate risk for groups stereotyped as dangerous.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Be biased by stereotypes about mentally ill people",
            commonErrors: ["Assuming clinical judgement is superior — actuarial tools usually outperform it."],
          },
        },
        {
          id: "psych-u6-crq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A major ethical criticism of offender profiling is that it can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reinforce stereotypes about offender types" },
              { id: "b", text: "Speed up investigations" },
              { id: "c", text: "Narrow suspect pools" },
              { id: "d", text: "Use crime scene evidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Profiling bias", statement: "Profiles may embed racial and gender stereotypes." },
            ],
            steps: [
              { reasoning: "Profiles built on biased data or assumptions can target specific demographic groups unfairly.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reinforce stereotypes about offender types",
            commonErrors: ["Choosing a benefit (narrowing pools) instead of the ethical criticism asked for."],
          },
        },
        {
          id: "psych-u6-crq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A key criticism of the insanity defence is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Applies only to minors" },
              { id: "b", text: "Is never used in any jurisdiction" },
              { id: "c", text: "Requires no expert evidence" },
              { id: "d", text: "Can be abused and is inconsistently applied" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insanity defence critique", statement: "The defence can be manipulated and applied inconsistently." },
            ],
            steps: [
              { reasoning: "Critics argue defendants may fake illness and that standards vary across jurisdictions.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can be abused and is inconsistently applied",
            commonErrors: ["Claiming the defence is abolished — it still exists in most jurisdictions."],
          },
        },
        {
          id: "psych-u6-crq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Define criminal responsibility and explain what it asks about an offender.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Criminal responsibility", statement: "Whether the offender understood wrongfulness and could control their actions." },
            ],
            steps: [
              { reasoning: "Criminal responsibility = legal/psychological determination of blameworthiness.", marks: 1, markCode: "M" },
              { reasoning: "It asks whether the offender could understand that their act was wrong.", marks: 1, markCode: "M" },
              { reasoning: "It also asks whether they could control their behaviour at the time of the crime.", marks: 1, markCode: "M" },
              { reasoning: "If either capacity was lacking due to mental disorder, responsibility may be diminished.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Criminal responsibility asks about capacity to understand wrongfulness and control conduct.",
            commonErrors: ["Confusing responsibility with punishment — it concerns capacity, not sentencing."],
          },
        },
        {
          id: "psych-u6-crq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the relationship between mental disorder and violent crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mental disorder and crime", statement: "The link is complex — most mentally ill people are not violent." },
            ],
            steps: [
              { reasoning: "Most mentally ill people are not violent, and most violent offenders are not mentally ill.", marks: 1, markCode: "M" },
              { reasoning: "However, certain conditions raise risk — psychosis with command hallucinations, antisocial personality disorder, substance-induced states.", marks: 1, markCode: "M" },
              { reasoning: "Substance abuse is a stronger predictor of violence than mental illness alone.", marks: 1, markCode: "R" },
              { reasoning: "The relationship is correlational and complex — mental illness alone does not determine violence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complex link — most mentally ill are not violent; specific conditions and substance abuse raise risk.",
            commonErrors: ["Assuming mental illness causes violence — the association is weak and confounded."],
          },
        },
        {
          id: "psych-u6-crq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain the methods used in violence risk assessment and their limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk assessment", statement: "Actuarial tools and clinical judgement estimate probability but cannot predict certainty." },
            ],
            steps: [
              { reasoning: "Actuarial tools: statistical models combining risk factors — more consistent than clinical judgement.", marks: 1, markCode: "M" },
              { reasoning: "Clinical judgement: expert assessment of individual case — flexible but biased.", marks: 1, markCode: "M" },
              { reasoning: "Risk factors include previous violence, substance abuse, psychosis and personality disorder.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: base rate problem — rare events produce many false positives.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: clinical judgement is biased by stereotypes; actuarial tools still have limited accuracy.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: risk can be estimated probabilistically but never predicted with certainty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Actuarial + clinical methods estimate probability; high false positives limit reliability.",
            commonErrors: ["Treating risk assessment as prediction — it estimates likelihood, not certainty."],
          },
        },
        {
          id: "psych-u6-crq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A defendant with schizophrenia committed assault while responding to command hallucinations. Apply the insanity defence standards to this case.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insanity defence application", statement: "Capacity at the time of the crime, not diagnosis alone, determines the defence." },
            ],
            steps: [
              { reasoning: "M'Naghten: if psychosis prevented knowing the act or its wrongfulness, the cognitive prong may be met.", marks: 1, markCode: "M" },
              { reasoning: "ALI standard: if the defendant could not conform conduct to the law, the control prong may apply.", marks: 1, markCode: "M" },
              { reasoning: "Command hallucinations may have compelled the act — suggesting impaired control.", marks: 1, markCode: "R" },
              { reasoning: "Expert evaluation is required — capacity at the exact time of the offence must be established.", marks: 1, markCode: "M" },
              { reasoning: "Jurisdiction matters — some use M'Naghten, others ALI or other standards.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the defence may apply if incapacity is proven, but it is not automatic from diagnosis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "May apply if incapacity proven — diagnosis alone insufficient; capacity at time of crime required.",
            commonErrors: ["Assuming diagnosis automatically qualifies — the defence requires functional incapacity."],
          },
        },
        {
          id: "psych-u6-crq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the insanity defence as a legal and psychological concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insanity defence evaluation", statement: "The defence recognises genuine incapacity but is hard to apply consistently." },
            ],
            steps: [
              { reasoning: "Strength: recognises that mental disorder can genuinely impair understanding and control.", marks: 1, markCode: "M" },
              { reasoning: "Strength: aligns law with psychological reality — blame requires capacity.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: 'insanity' is a legal term, not a clinical diagnosis — confusing the two causes problems.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: can be abused — defendants may feign illness; determining deception is difficult.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: inconsistent application across jurisdictions and cases — similar defendants treated differently.", marks: 1, markCode: "R" },
              { reasoning: "Alternative: some argue for diminished responsibility or treatment-based approaches instead.", marks: 1, markCode: "M" },
              { reasoning: "Expert evidence is essential — capacity must be assessed at the time of the crime.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: justified in principle but needs clearer standards and consistent application.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Defence is justified for genuine incapacity but suffers from abuse, inconsistency and conceptual confusion.",
            commonErrors: ["One-sided evaluation — must weigh recognition of incapacity against abuse and inconsistency."],
          },
        },
        {
          id: "psych-u6-crq17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a study of 150 offenders, 30 were found to have psychosis. What percentage had psychosis?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage = (part / total) × 100." },
            ],
            steps: [
              { reasoning: "30 / 150 = 0.2 = 20%.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
            commonErrors: ["Giving 0.2 instead of 20%."],
          },
        },
        {
          id: "psych-u6-crq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A risk assessment study followed 200 released offenders for 5 years: 40 committed a violent offence, 160 did not. (a) What percentage committed violence? (b) How many more did not commit violence than did?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 120 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Violence risk", statement: "Most released offenders do not commit violence — illustrating the base rate problem." },
            ],
            steps: [
              { part: "a", reasoning: "40 / 200 = 0.2 = 20%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: 20%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "160 − 40 = 120 offenders.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: 120 offenders.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20% (b) 120",
            commonErrors: ["Confusing the base rate (20%) with prediction accuracy."],
          },
        },
        {
          id: "psych-u6-crq19",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between using offender profiling as an investigative aid versus as evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Profiling roles", statement: "Profiling can guide investigation but cannot substitute for evidence." },
            ],
            steps: [
              { reasoning: "As an aid: profiling narrows suspect pools and directs investigative resources.", marks: 1, markCode: "M" },
              { reasoning: "As evidence: profiling cannot identify a specific individual or prove guilt.", marks: 1, markCode: "M" },
              { reasoning: "Using it as evidence would treat an unvalidated heuristic as scientific proof.", marks: 1, markCode: "R" },
              { reasoning: "The aid role is acceptable; the evidence role is unethical and unjustified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aid = narrows investigation (acceptable); evidence = unscientific and unethical.",
            commonErrors: ["Treating profiling as proof — it is an investigative heuristic, not evidence."],
          },
        },
        {
          id: "psych-u6-crq20",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A defendant diagnosed with antisocial personality disorder commits fraud.",
          parts: [
            { label: "a", prompt: "Explain whether the insanity defence could apply to this case.", marks: 3 },
            { label: "b", prompt: "Describe two psychological factors relevant to sentencing in this case.", marks: 2 },
            { label: "c", prompt: "Evaluate whether personality disorder should affect criminal responsibility.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Personality disorder and responsibility", statement: "APD rarely excuses crime — capacity is usually intact." },
            ],
            steps: [
              { part: "a", reasoning: "APD does not typically impair knowing right from wrong — M'Naghten likely not met.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Control may be impaired but fraud suggests planning — arguing against incapacity.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Expert evaluation needed — but APD alone rarely qualifies for insanity defence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impulsivity and manipulation may be relevant to risk of reoffending.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lack of empathy/remorse may influence sentencing decisions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Argument for: APD involves genuine impairment in empathy and impulse control.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Argument against: offenders with APD usually understand wrongfulness — responsibility intact.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: personality disorder may inform sentencing but rarely excuses responsibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unlikely — APD preserves capacity. (b) Impulsivity + lack of remorse. (c) Inform sentencing, not excuse.",
            commonErrors: ["Assuming any disorder excuses crime — APD typically preserves capacity."],
          },
        },
      ],
    },
  ],
};
