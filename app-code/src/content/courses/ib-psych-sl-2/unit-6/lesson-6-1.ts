import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "psych-u6-lesson-6-1",
  code: "6-1",
  title: "Stress Models and Coping",
  goal: "I CAN describe Selye's general adaptation syndrome and Lazarus's transactional model of stress, and explain coping strategies and health behaviours.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Stress", definition: "The psychological and physiological response to demands that exceed coping resources." },
    { term: "General adaptation syndrome", definition: "Selye's three-stage model: alarm, resistance, exhaustion." },
    { term: "Transactional model", definition: "Lazarus's view that stress arises from the interaction of demands and perceived coping ability." },
    { term: "Appraisal", definition: "Evaluating whether a stressor is a threat, challenge or harm/loss." },
    { term: "Problem-focused coping", definition: "Strategies that directly address the source of stress." },
    { term: "Emotion-focused coping", definition: "Strategies that manage the emotional response to stress." },
  ],
  concepts: [
    {
      id: "psych-u6-stress-models",
      title: "Models of stress",
      skill: "Describe Selye's GAS and Lazarus's transactional model and evaluate their explanations of stress.",
      lesson: {
        sections: [
          {
            heading: "Selye's general adaptation syndrome",
            body: "Hans **Selye (1936)** proposed stress is a non-specific physiological response to any demand. His **general adaptation syndrome (GAS)** has three stages: **alarm** (fight-or-flight activation — adrenaline release, increased heart rate), **resistance** (body adapts to continued stress — sustained cortisol elevation), and **exhaustion** (resources depleted — immune suppression, illness, potential death). Selye argued the response is the same regardless of the stressor's nature.",
          },
          {
            heading: "Lazarus's transactional model",
            body: "Richard **Lazarus (1966)** argued stress is not just physiological — it depends on **cognitive appraisal**. In **primary appraisal**, we evaluate whether a stressor is irrelevant, a **challenge** (opportunity for growth), a **threat** (potential harm) or a **harm/loss** (already damaged). In **secondary appraisal**, we assess our **coping resources** — can we handle it? Stress arises only when demands exceed perceived resources. This explains why the same event stresses some people but not others.",
          },
          {
            heading: "Evaluating stress models",
            body: "Selye's GAS is simple and supported by physiological evidence but oversimplifies — different stressors produce different responses, and psychological factors matter. Lazarus's model better captures individual differences and the role of cognition but is harder to test objectively. Modern views integrate both: physiological responses are real, but cognitive appraisal determines whether and how stress manifests.",
          },
        ],
        keyFormulas: [
          { name: "GAS stages", statement: "Alarm → Resistance → Exhaustion" },
          { name: "Appraisal types", statement: "Challenge + Threat + Harm/loss (primary); Coping resources (secondary)" },
        ],
        workedExample: {
          problem: "Two students face the same exam. One sees it as a challenge, the other as a threat. Explain using Lazarus.",
          solution: "Primary appraisal differs: challenge appraisal focuses on potential gain and mastery; threat appraisal focuses on potential failure and harm. Secondary appraisal of coping resources further determines stress — the student with higher self-efficacy appraises more resources, experiencing less stress.",
        },
      },
      questions: [
        {
          id: "psych-u6-stq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Selye's GAS, the stage where the body adapts to continued stress is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance" },
              { id: "b", text: "Adaptation" },
              { id: "c", text: "Exhaustion" },
              { id: "d", text: "Alarm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "GAS stages", statement: "Alarm → Resistance → Exhaustion." },
            ],
            steps: [
              { reasoning: "Resistance is the middle stage where the body copes with ongoing stress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Resistance",
            commonErrors: ["Confusing resistance (adaptation) with exhaustion (depletion)."],
          },
        },
        {
          id: "psych-u6-stq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between problem-focused and emotion-focused coping, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coping types", statement: "Problem-focused addresses the stressor; emotion-focused manages the emotional response." },
            ],
            steps: [
              { reasoning: "Problem-focused: directly tackles the stressor — e.g. making a study plan to reduce exam stress.", marks: 1, markCode: "M" },
              { reasoning: "Emotion-focused: manages feelings without changing the situation — e.g. deep breathing or talking to a friend.", marks: 1, markCode: "M" },
              { reasoning: "Problem-focused works best when the stressor is controllable; emotion-focused when it is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Problem = change situation; emotion = manage feelings. Match to controllability.",
            commonErrors: ["Using emotion-focused coping for controllable problems — less effective."],
          },
        },
        {
          id: "psych-u6-stq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how primary and secondary appraisal interact to determine stress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal interaction", statement: "Primary appraisal evaluates the stressor; secondary evaluates coping resources — both needed for stress." },
            ],
            steps: [
              { reasoning: "Primary appraisal: is this event irrelevant, a challenge, a threat, or harm/loss?", marks: 1, markCode: "M" },
              { reasoning: "Secondary appraisal: do I have the resources to cope — skills, support, time, money?", marks: 1, markCode: "M" },
              { reasoning: "Stress arises when primary appraisal sees threat/harm AND secondary appraisal sees insufficient resources.", marks: 1, markCode: "R" },
              { reasoning: "Same event: high resources → challenge appraisal → less stress; low resources → threat appraisal → more stress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary evaluates event; secondary evaluates resources. Stress = threat + insufficient coping.",
            commonErrors: ["Treating appraisal as one step — it's sequential and interactive."],
          },
        },
        {
          id: "psych-u6-stq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two employees face the same company restructuring announcement.",
          parts: [
            { label: "a", prompt: "Explain why one might experience severe stress while the other feels motivated, using Lazarus.", marks: 3 },
            { label: "b", prompt: "Describe two coping strategies each might use.", marks: 2 },
            { label: "c", prompt: "Evaluate Selye's GAS versus Lazarus's model for explaining these different responses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress individual differences", statement: "Cognitive appraisal determines whether the same stressor produces stress or motivation." },
            ],
            steps: [
              { part: "a", reasoning: "Primary appraisal differs: one sees threat (job loss, instability); other sees challenge (new opportunities).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Secondary appraisal differs: one has savings/support (more resources); other has dependents/few savings (less).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stress = threat appraisal + insufficient resources; challenge + resources = motivation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stressed employee: emotion-focused — relaxation, social support; problem-focused — job search.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Motivated employee: problem-focused — skill development, networking, career planning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "GAS would predict same physiological response for both — cannot explain different psychological outcomes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Lazarus explains differences through appraisal — better accounts for individual variation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "However GAS captures the physiological reality that both will show stress hormones — complementary views.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Appraisal differences. (b) Emotion vs problem-focused. (c) Lazarus explains psychology; GAS explains physiology.",
            commonErrors: ["Assuming same stressor = same stress — appraisal mediates."],
          },
        },
        {
          id: "psych-u6-stq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the alarm stage of Selye's GAS, the body typically shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fight-or-flight activation such as adrenaline release" },
              { id: "b", text: "Immune suppression and illness" },
              { id: "c", text: "Complete depletion of bodily resources" },
              { id: "d", text: "Long-term adaptation to the stressor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "GAS alarm stage", statement: "Alarm = acute fight-or-flight response with adrenaline and raised heart rate." },
            ],
            steps: [
              { reasoning: "Alarm is the first GAS stage — immediate physiological mobilisation for fight or flight.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Fight-or-flight activation such as adrenaline release",
            commonErrors: ["Confusing alarm (acute activation) with exhaustion (resource depletion)."],
          },
        },
        {
          id: "psych-u6-stq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Lazarus's model, when primary appraisal judges an event as 'irrelevant', the typical result is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No stress response" },
              { id: "b", text: "Harm appraisal" },
              { id: "c", text: "Maximum stress response" },
              { id: "d", text: "Immediate problem-focused coping" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Primary appraisal", statement: "Events appraised as irrelevant do not produce stress." },
            ],
            steps: [
              { reasoning: "Irrelevant appraisal means the event has no personal significance — no threat, challenge or harm.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** No stress response",
            commonErrors: ["Assuming every noticed event triggers stress — only appraised-relevant events do."],
          },
        },
        {
          id: "psych-u6-stq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Secondary appraisal in Lazarus's model involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measuring physiological arousal" },
              { id: "b", text: "Assessing available coping resources" },
              { id: "c", text: "Judging whether the event is a threat" },
              { id: "d", text: "Deciding the event is irrelevant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secondary appraisal", statement: "Evaluating one's coping resources — skills, support, time and money." },
            ],
            steps: [
              { reasoning: "Secondary appraisal asks 'can I cope?' — it assesses resources, not the event itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Assessing available coping resources",
            commonErrors: ["Confusing secondary appraisal (resources) with primary appraisal (event meaning)."],
          },
        },
        {
          id: "psych-u6-stq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Making a revision timetable to reduce exam anxiety is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoidance coping" },
              { id: "b", text: "Denial" },
              { id: "c", text: "Emotion-focused coping" },
              { id: "d", text: "Problem-focused coping" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Problem-focused coping", statement: "Strategies that directly address the source of stress." },
            ],
            steps: [
              { reasoning: "A revision timetable directly tackles the stressor — inadequate preparation for the exam.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Problem-focused coping",
            commonErrors: ["Labelling all planning as emotion-focused — it targets the stressor, not the feelings."],
          },
        },
        {
          id: "psych-u6-stq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Lazarus's model is often considered an improvement over Selye's GAS mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignores physiological responses entirely" },
              { id: "b", text: "Is simpler to measure" },
              { id: "c", text: "Accurately predicts the exhaustion stage" },
              { id: "d", text: "Accounts for cognitive appraisal and individual differences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model comparison", statement: "Lazarus explains why identical stressors affect people differently." },
            ],
            steps: [
              { reasoning: "Lazarus adds appraisal — the same event can be a challenge for one person and a threat for another.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Accounts for cognitive appraisal and individual differences",
            commonErrors: ["Saying Lazarus ignores physiology — it integrates physiology with cognition."],
          },
        },
        {
          id: "psych-u6-stq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Selye's claim that the stress response is 'non-specific' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different stressors produce different responses" },
              { id: "b", text: "Responses depend entirely on appraisal" },
              { id: "c", text: "The same physiological response occurs regardless of the stressor" },
              { id: "d", text: "Only psychological stressors produce a response" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Non-specific response", statement: "Selye held that GAS is the same whatever the demand." },
            ],
            steps: [
              { reasoning: "Non-specific = the bodily response pattern is identical no matter what the stressor is.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The same physiological response occurs regardless of the stressor",
            commonErrors: ["Reading 'non-specific' as 'psychological only' — it means stressor-independent."],
          },
        },
        {
          id: "psych-u6-stq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which finding would most strongly support Lazarus's model over Selye's?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All stressors raise cortisol equally" },
              { id: "b", text: "Exhaustion follows prolonged stress" },
              { id: "c", text: "The same event produces stress in one person but not another" },
              { id: "d", text: "Adrenaline rises during the alarm stage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal evidence", statement: "Individual differences in stress responses support cognitive appraisal." },
            ],
            steps: [
              { reasoning: "Lazarus predicts stress depends on appraisal — so identical events can stress some and not others.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The same event produces stress in one person but not another",
            commonErrors: ["Choosing physiological findings — those support GAS, not Lazarus."],
          },
        },
        {
          id: "psych-u6-stq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Outline the three stages of Selye's general adaptation syndrome.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "GAS", statement: "Alarm → resistance → exhaustion." },
            ],
            steps: [
              { reasoning: "Alarm: acute fight-or-flight response — adrenaline, raised heart rate, blood pressure.", marks: 1, markCode: "M" },
              { reasoning: "Resistance: body adapts to continued stress — sustained cortisol elevation.", marks: 1, markCode: "M" },
              { reasoning: "Exhaustion: resources depleted — immune suppression, illness, potential death.", marks: 1, markCode: "M" },
              { reasoning: "The stages occur in a fixed sequence as stress persists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alarm → resistance → exhaustion, in that order.",
            commonErrors: ["Reversing the sequence — resistance precedes exhaustion."],
          },
        },
        {
          id: "psych-u6-stq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between challenge appraisal and threat appraisal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Appraisal types", statement: "Challenge = opportunity for growth; threat = potential harm." },
            ],
            steps: [
              { reasoning: "Challenge appraisal: event seen as an opportunity for mastery or gain — focus on potential positive outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Threat appraisal: event seen as likely to cause harm, failure or loss — focus on negative outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Challenge tends to motivate approach behaviour; threat tends to produce stress and avoidance.", marks: 1, markCode: "R" },
              { reasoning: "Example: an exam appraised as a challenge ('chance to prove myself') versus a threat ('chance to fail').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Challenge = opportunity/growth; threat = potential harm. Both are primary appraisals of the same event.",
            commonErrors: ["Treating challenge and threat as different stressors rather than different appraisals of one event."],
          },
        },
        {
          id: "psych-u6-stq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain how primary and secondary appraisal interact to determine whether a stressor produces stress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal interaction", statement: "Primary evaluates the event; secondary evaluates resources — both required for stress." },
            ],
            steps: [
              { reasoning: "Primary appraisal classifies the event: irrelevant, challenge, threat or harm/loss.", marks: 1, markCode: "M" },
              { reasoning: "Only threat or harm/loss appraisals are potentially stressful — challenge and irrelevant are not.", marks: 1, markCode: "M" },
              { reasoning: "Secondary appraisal then assesses coping resources: skills, support, time, money.", marks: 1, markCode: "M" },
              { reasoning: "Stress arises when primary appraisal sees threat/harm AND secondary appraisal sees insufficient resources.", marks: 2, markCode: "R" },
              { reasoning: "The same event can therefore stress one person and not another, depending on appraisal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stress = threat/harm appraisal + perceived insufficient resources.",
            commonErrors: ["Treating appraisal as a single step — it is sequential and interactive."],
          },
        },
        {
          id: "psych-u6-stq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A student views an upcoming driving test as a challenge while a classmate views it as a threat. Using Lazarus's model, explain the likely difference in their stress responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal and stress", statement: "Different primary appraisals of the same event produce different stress responses." },
            ],
            steps: [
              { reasoning: "Both undergo primary appraisal of the same event — the driving test.", marks: 1, markCode: "M" },
              { reasoning: "The first student appraises it as a challenge — opportunity to demonstrate skill.", marks: 1, markCode: "M" },
              { reasoning: "The classmate appraises it as a threat — potential failure and consequences.", marks: 1, markCode: "M" },
              { reasoning: "Secondary appraisal then modulates this: perceived driving skills and support raise resources.", marks: 1, markCode: "M" },
              { reasoning: "Challenge appraisal + adequate resources → less stress, possibly motivation; threat appraisal → higher stress response.", marks: 1, markCode: "R" },
              { reasoning: "Thus identical events can produce different physiological and psychological stress outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Challenge appraisal → less stress/motivation; threat appraisal → more stress, moderated by coping resources.",
            commonErrors: ["Assuming the test itself determines stress — appraisal mediates the response."],
          },
        },
        {
          id: "psych-u6-stq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate Selye's general adaptation syndrome and Lazarus's transactional model as explanations of stress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress model evaluation", statement: "GAS captures physiology but oversimplifies; Lazarus captures cognition but is harder to test." },
            ],
            steps: [
              { reasoning: "GAS strength: simple, measurable, supported by physiological evidence of hormonal responses.", marks: 1, markCode: "M" },
              { reasoning: "GAS strength: identified the exhaustion stage — prolonged stress can damage health.", marks: 1, markCode: "M" },
              { reasoning: "GAS weakness: assumes a non-specific response — different stressors actually produce different patterns.", marks: 1, markCode: "R" },
              { reasoning: "GAS weakness: cannot explain why the same stressor affects people differently.", marks: 1, markCode: "M" },
              { reasoning: "Lazarus strength: explains individual differences through primary and secondary appraisal.", marks: 1, markCode: "M" },
              { reasoning: "Lazarus strength: links stress to coping — practical implications for intervention.", marks: 1, markCode: "A" },
              { reasoning: "Lazarus weakness: cognitive processes are harder to measure objectively than hormones.", marks: 1, markCode: "R" },
              { reasoning: "Modern view integrates both: physiology is real, but appraisal determines whether and how stress manifests.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GAS = physiological but oversimplified; Lazarus = cognitive but harder to test; integration is best.",
            commonErrors: ["One-sided evaluation — a good answer weighs strengths and weaknesses of both models."],
          },
        },
        {
          id: "psych-u6-stq17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a survey of 250 adults, 36% said they usually use problem-focused coping first. How many adults is this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage of a total = (percentage / 100) × total." },
            ],
            steps: [
              { reasoning: "0.36 × 250 = 90 adults.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90 adults.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90",
            commonErrors: ["Multiplying by 36 instead of 0.36 — percentages must be converted to decimals."],
          },
        },
        {
          id: "psych-u6-stq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "In a class of 30 students, 12 appraise exams as threats, 10 as challenges and 8 as irrelevant. (a) What percentage appraise exams as threats? (b) How many more students appraise exams as challenges than as irrelevant?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal categories", statement: "Primary appraisal yields threat, challenge, harm/loss or irrelevant." },
            ],
            steps: [
              { part: "a", reasoning: "12 / 30 = 0.4 = 40%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: 40%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "10 − 8 = 2 students.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: 2 students.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40% (b) 2",
            commonErrors: ["Giving 0.4 instead of 40% for part (a)."],
          },
        },
        {
          id: "psych-u6-stq19",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why combining problem-focused and emotion-focused coping can be more effective than using only one type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combined coping", statement: "Problem-focused changes the situation; emotion-focused manages the response — together they cover both." },
            ],
            steps: [
              { reasoning: "Problem-focused coping directly addresses the stressor when it is controllable.", marks: 1, markCode: "M" },
              { reasoning: "Emotion-focused coping manages distress when the stressor cannot be changed.", marks: 1, markCode: "M" },
              { reasoning: "Using both covers controllable and uncontrollable elements of a stressor simultaneously.", marks: 1, markCode: "R" },
              { reasoning: "Flexible use of both strategies adapts to changing circumstances and improves outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both strategies together address the situation and the emotional response — more flexible and effective.",
            commonErrors: ["Arguing one strategy is always best — effectiveness depends on controllability."],
          },
        },
        {
          id: "psych-u6-stq20",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two friends learn they have failed the same important exam.",
          parts: [
            { label: "a", prompt: "Explain using Lazarus's model why one feels devastated while the other feels motivated to try again.", marks: 3 },
            { label: "b", prompt: "Describe one problem-focused and one emotion-focused coping strategy each friend might use.", marks: 2 },
            { label: "c", prompt: "Evaluate how well Selye's GAS versus Lazarus's model explains these different reactions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal of failure", statement: "Identical failure events produce different responses through different appraisals." },
            ],
            steps: [
              { part: "a", reasoning: "One friend appraises the failure as harm/loss — devastation and low coping resources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The other appraises it as a challenge — an opportunity to improve and retry.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Secondary appraisal differs too: perceived ability and support shape the response.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Devastated friend: problem-focused — analyse errors, plan retake; emotion-focused — talk to friends.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Motivated friend: problem-focused — new study plan; emotion-focused — channel frustration into effort.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "GAS would predict the same physiological stress response for both — cannot explain the difference.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Lazarus explains the difference through appraisal — better accounts for individual variation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "However GAS still captures that both will show stress hormones — the models are complementary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Harm vs challenge appraisal + resources. (b) Problem + emotion strategies for each. (c) Lazarus explains psychology; GAS explains physiology.",
            commonErrors: ["Assuming the exam result alone determines reaction — appraisal mediates."],
          },
        },
      ],
    },
    {
      id: "psych-u6-health-behaviours",
      title: "Health behaviours and stress management",
      skill: "Describe health behaviours, Type A/B behaviour patterns, and evaluate stress management techniques.",
      lesson: {
        sections: [
          {
            heading: "Health behaviours and Type A/B",
            body: "**Health behaviours** are actions influencing health: exercise, diet, sleep, avoiding smoking/alcohol, preventive check-ups. **Type A behaviour pattern**: time urgency, competitiveness, hostility — linked to higher cardiovascular disease risk (especially hostility component). **Type B**: relaxed, patient, less driven — lower risk. However, the Type A–heart disease link has weakened in modern research; hostility and pessimism appear more predictive than the overall pattern.",
          },
          {
            heading: "Stress management techniques",
            body: "**Relaxation techniques**: progressive muscle relaxation, meditation, deep breathing — reduce physiological arousal. **Cognitive techniques**: CBT-style reframing of stressors, mindfulness — change appraisal. **Problem-solving**: breaking stressors into manageable steps. **Social support**: talking to others buffers stress effects. **Exercise**: reduces stress hormones and improves mood. **Time management**: prioritising and planning reduces perceived demands.",
          },
          {
            heading: "Evaluating stress management",
            body: "Effectiveness varies: relaxation and exercise have strong evidence for reducing anxiety and improving mood; CBT-based approaches address underlying appraisal patterns. However, techniques requiring time and motivation may be hard for the most stressed individuals — those who need them most may use them least. Cultural factors affect which techniques are acceptable and accessible. Combination approaches (physiological + cognitive + social) generally outperform single techniques.",
          },
        ],
        keyFormulas: [
          { name: "Type A/B", statement: "A = urgency/hostility (higher CVD risk); B = relaxed (lower risk)" },
          { name: "Coping match", statement: "Controllable stressor → problem-focused; uncontrollable → emotion-focused" },
        ],
        workedExample: {
          problem: "Why might a stressed person struggle to start exercising as stress management?",
          solution: "Stress reduces motivation and energy; the person may lack time or feel too overwhelmed. Starting with small, achievable goals (problem-focused coping) builds momentum and self-efficacy.",
        },
      },
      questions: [
        {
          id: "psych-u6-hbq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Type A behaviour pattern is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social withdrawal and passivity" },
              { id: "b", text: "Relaxation and patience" },
              { id: "c", text: "High empathy and cooperation" },
              { id: "d", text: "Time urgency, competitiveness and hostility" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Type A behaviour", statement: "Time urgency, competitiveness, hostility — linked to cardiovascular risk." },
            ],
            steps: [
              { reasoning: "Type A = driven, hostile, time-urgent behaviour pattern.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Time urgency, competitiveness and hostility",
            commonErrors: ["Confusing Type A (driven) with Type B (relaxed)."],
          },
        },
        {
          id: "psych-u6-hbq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two stress management techniques and explain how each works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress management", statement: "Techniques target physiological arousal, cognitive appraisal, or the stressor itself." },
            ],
            steps: [
              { reasoning: "Progressive muscle relaxation: systematically tensing and relaxing muscle groups — reduces physiological arousal.", marks: 1, markCode: "M" },
              { reasoning: "Cognitive reframing: challenging catastrophic thoughts about stressors — changes appraisal from threat to challenge.", marks: 1, markCode: "M" },
              { reasoning: "Exercise: reduces cortisol and adrenaline while releasing endorphins — physiological and psychological benefits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Relaxation reduces arousal; reframing changes appraisal; exercise reduces hormones.",
            commonErrors: ["Listing techniques without explaining mechanisms."],
          },
        },
        {
          id: "psych-u6-hbq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the link between Type A behaviour and heart disease may be weaker than originally claimed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Type A critique", statement: "The Type A–CVD link has weakened; hostility and pessimism may be the active ingredients." },
            ],
            steps: [
              { reasoning: "Original studies (Friedman & Rosenman) showed strong correlation between Type A and heart disease.", marks: 1, markCode: "M" },
              { reasoning: "Later research found the relationship weakened — Type A components (urgency, competitiveness) may be protective in some contexts.", marks: 1, markCode: "M" },
              { reasoning: "Hostility specifically — cynical distrust and aggression — appears more strongly linked to CVD than the overall pattern.", marks: 1, markCode: "R" },
              { reasoning: "This suggests the original construct was too broad — specific components matter more than the global type.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Type A is heterogeneous — hostility component drives CVD risk, not the whole pattern.",
            commonErrors: ["Treating Type A as a single predictor — it's a cluster of traits with different effects."],
          },
        },
        {
          id: "psych-u6-hbq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A workplace introduces stress management programmes but participation is low among the most stressed employees.",
          parts: [
            { label: "a", prompt: "Explain why the most stressed employees might not participate.", marks: 3 },
            { label: "b", prompt: "Describe two strategies to increase participation.", marks: 2 },
            { label: "c", prompt: "Evaluate the effectiveness of workplace stress management programmes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress programme participation", statement: "Those most in need may lack time, motivation or perceive programmes as irrelevant." },
            ],
            steps: [
              { part: "a", reasoning: "Time poverty: stressed employees lack time for programmes — work demands leave no capacity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low motivation: depression or exhaustion reduces initiative to seek help.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stigma: mental health programmes may be seen as weakness or irrelevant to 'real' stressors.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Make programmes accessible: short sessions during work time, online options, manager endorsement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reduce stigma: frame as performance/skill-building, not 'mental health treatment'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: evidence shows reduced stress, improved mood and productivity for participants.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: voluntary programmes miss those most in need — participation bias.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Individual programmes don't address organisational stressors — workload, job design must also change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Time + motivation + stigma. (b) Accessibility + destigmatisation. (c) Helps participants but misses those most in need.",
            commonErrors: ["Assuming offering a programme equals solving the problem — organisational factors matter."],
          },
        },
        {
          id: "psych-u6-hbq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Health behaviours are best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actions taken only when illness occurs" },
              { id: "b", text: "Actions that influence health, such as exercise and diet" },
              { id: "c", text: "Personality traits linked to disease" },
              { id: "d", text: "Treatments prescribed by doctors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Health behaviours", statement: "Actions influencing health — exercise, diet, sleep, avoiding smoking." },
            ],
            steps: [
              { reasoning: "Health behaviours are voluntary actions that promote or harm health.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Actions that influence health, such as exercise and diet",
            commonErrors: ["Confusing health behaviours with medical treatments."],
          },
        },
        {
          id: "psych-u6-hbq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Type B behaviour pattern is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social isolation and passivity" },
              { id: "b", text: "High achievement drive and anger" },
              { id: "c", text: "Relaxation, patience and lower competitiveness" },
              { id: "d", text: "Time urgency and hostility" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Type B behaviour", statement: "Relaxed, patient, less driven — lower cardiovascular risk." },
            ],
            steps: [
              { reasoning: "Type B is the relaxed counterpart to driven, hostile Type A.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Relaxation, patience and lower competitiveness",
            commonErrors: ["Confusing Type B with social withdrawal — it is relaxed, not withdrawn."],
          },
        },
        {
          id: "psych-u6-hbq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which component of the Type A behaviour pattern is most strongly linked to cardiovascular disease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hostility" },
              { id: "b", text: "Competitiveness" },
              { id: "c", text: "Time urgency" },
              { id: "d", text: "Achievement striving" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Type A components", statement: "Hostility — cynical distrust and aggression — drives the CVD link." },
            ],
            steps: [
              { reasoning: "Later research isolated hostility as the component most predictive of heart disease.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hostility",
            commonErrors: ["Treating all Type A traits as equally risky — only hostility is strongly linked."],
          },
        },
        {
          id: "psych-u6-hbq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Progressive muscle relaxation reduces stress primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing beliefs about the stressor" },
              { id: "b", text: "Removing the stressor from the situation" },
              { id: "c", text: "Increasing social support" },
              { id: "d", text: "Reducing physiological arousal through systematic tensing and relaxing of muscles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Relaxation mechanism", statement: "Relaxation techniques target physiological arousal directly." },
            ],
            steps: [
              { reasoning: "PMR lowers arousal by alternately tensing and relaxing muscle groups.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Reducing physiological arousal through systematic tensing and relaxing of muscles",
            commonErrors: ["Confusing relaxation (physiological) with cognitive reframing (appraisal)."],
          },
        },
        {
          id: "psych-u6-hbq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The link between Type A behaviour and heart disease may be weaker than originally claimed because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Type A has been redefined to include only relaxation" },
              { id: "b", text: "Heart disease is now considered purely genetic" },
              { id: "c", text: "Type B behaviour also causes heart disease" },
              { id: "d", text: "Later research found only the hostility component is strongly predictive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Type A critique", statement: "The global Type A construct is heterogeneous — hostility matters most." },
            ],
            steps: [
              { reasoning: "The original Type A–CVD correlation weakened when components were analysed separately.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Later research found only the hostility component is strongly predictive",
            commonErrors: ["Concluding Type A is irrelevant — hostility within it remains predictive."],
          },
        },
        {
          id: "psych-u6-hbq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A manager who prioritises tasks and plans each week to reduce overload is mainly using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotion-focused coping" },
              { id: "b", text: "Avoidance" },
              { id: "c", text: "Mindfulness meditation" },
              { id: "d", text: "Time management as problem-focused coping" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Time management", statement: "Planning and prioritising reduce perceived demands — a problem-focused strategy." },
            ],
            steps: [
              { reasoning: "Prioritising and planning directly addresses the stressor — excessive workload.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Time management as problem-focused coping",
            commonErrors: ["Labelling planning as emotion-focused — it changes the situation, not the feelings."],
          },
        },
        {
          id: "psych-u6-hbq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Social support buffers the effects of stress primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Providing emotional and practical resources that reduce perceived demands" },
              { id: "b", text: "Eliminating the physiological stress response" },
              { id: "c", text: "Replacing the need for coping strategies" },
              { id: "d", text: "Increasing Type A competitiveness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social support", statement: "Support adds coping resources, lowering the demand–resource gap." },
            ],
            steps: [
              { reasoning: "Support provides help, advice and emotional comfort — raising secondary appraisal of resources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Providing emotional and practical resources that reduce perceived demands",
            commonErrors: ["Claiming support removes the stressor — it buffers the response instead."],
          },
        },
        {
          id: "psych-u6-hbq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two health behaviours and explain why they matter for health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Health behaviours", statement: "Actions such as exercise, diet, sleep and avoiding smoking that influence health." },
            ],
            steps: [
              { reasoning: "Regular exercise: reduces cardiovascular risk, improves mood and helps manage stress hormones.", marks: 1, markCode: "M" },
              { reasoning: "Balanced diet / adequate sleep: supports immune function and energy, reducing illness risk.", marks: 1, markCode: "M" },
              { reasoning: "Avoiding smoking and excessive alcohol: removes major risk factors for cancer, heart and liver disease.", marks: 1, markCode: "M" },
              { reasoning: "Together these behaviours are modifiable — individuals can directly influence their health outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exercise, diet, sleep and avoiding harmful substances all reduce illness risk and are modifiable.",
            commonErrors: ["Listing behaviours without explaining their health relevance."],
          },
        },
        {
          id: "psych-u6-hbq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between Type A and Type B behaviour patterns.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Type A/B", statement: "A = urgency, competitiveness, hostility; B = relaxed and patient." },
            ],
            steps: [
              { reasoning: "Type A: time urgency, competitiveness, hostility — driven, high-achievement orientation.", marks: 1, markCode: "M" },
              { reasoning: "Type B: relaxed, patient, less competitive — lower-key lifestyle.", marks: 1, markCode: "M" },
              { reasoning: "Type A is linked to higher cardiovascular risk — especially via the hostility component.", marks: 1, markCode: "R" },
              { reasoning: "Type B is associated with lower risk, though the overall link has weakened in recent research.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Type A = driven/hostile (higher CVD risk); Type B = relaxed (lower risk).",
            commonErrors: ["Presenting Type A as purely negative — competitiveness can have adaptive aspects."],
          },
        },
        {
          id: "psych-u6-hbq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain how regular exercise can reduce stress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exercise and stress", statement: "Exercise lowers stress hormones and improves mood." },
            ],
            steps: [
              { reasoning: "Physiological: exercise reduces cortisol and adrenaline levels over time.", marks: 1, markCode: "M" },
              { reasoning: "Endorphins released during exercise improve mood and produce a calming effect.", marks: 1, markCode: "M" },
              { reasoning: "Regular exercise improves sleep quality, which reduces perceived stress.", marks: 1, markCode: "M" },
              { reasoning: "Exercise can serve as problem-focused coping — it directly addresses physiological arousal.", marks: 1, markCode: "R" },
              { reasoning: "It also builds self-efficacy — a sense of control that buffers future stress.", marks: 1, markCode: "M" },
              { reasoning: "Overall, exercise reduces both the physiological response and the psychological appraisal of stress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exercise lowers stress hormones, releases endorphins, improves sleep and builds self-efficacy.",
            commonErrors: ["Describing exercise as only physical — psychological mechanisms are required for full marks."],
          },
        },
        {
          id: "psych-u6-hbq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Two employees face the same tight deadline. One appraises it as a challenge, the other as a threat. Using coping theory, explain which coping strategies each is likely to use and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appraisal and coping", statement: "Challenge appraisal favours problem-focused coping; threat appraisal favours emotion-focused coping." },
            ],
            steps: [
              { reasoning: "The deadline is controllable (work can be prioritised), so problem-focused coping is available to both.", marks: 1, markCode: "M" },
              { reasoning: "Challenge appraisal: employee sees opportunity — likely uses problem-focused strategies like planning and prioritising.", marks: 1, markCode: "M" },
              { reasoning: "Threat appraisal: employee sees harm — may use problem-focused coping but also emotion-focused strategies like reassurance seeking.", marks: 1, markCode: "M" },
              { reasoning: "Secondary appraisal matters: more resources (skills, support, time) enable more problem-focused coping.", marks: 1, markCode: "R" },
              { reasoning: "The threatened employee may rely more on emotion-focused coping if resources are perceived as insufficient.", marks: 1, markCode: "M" },
              { reasoning: "Thus appraisal shapes both the stress level and the coping strategy selected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Challenge → problem-focused; threat → mixed but more emotion-focused, moderated by resources.",
            commonErrors: ["Assuming coping choice is random — it follows appraisal and controllability."],
          },
        },
        {
          id: "psych-u6-hbq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the effectiveness of stress management techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress management evaluation", statement: "Techniques vary in evidence, accessibility and fit to the stressor." },
            ],
            steps: [
              { reasoning: "Relaxation and exercise have strong evidence for reducing anxiety and improving mood.", marks: 1, markCode: "R" },
              { reasoning: "Cognitive techniques (reframing, mindfulness) address appraisal — targeting the root of stress.", marks: 1, markCode: "M" },
              { reasoning: "Social support and time management are practical and low-cost for many people.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: techniques needing time and motivation are hardest for the most stressed.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: cultural factors affect which techniques are acceptable and accessible.", marks: 1, markCode: "M" },
              { reasoning: "Single techniques may not suit all stressors — matching strategy to controllability improves outcomes.", marks: 1, markCode: "R" },
              { reasoning: "Combination approaches (physiological + cognitive + social) generally outperform single techniques.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: effective when matched to the person and stressor, but not a universal solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evidence supports relaxation, exercise and cognitive approaches; effectiveness depends on fit and access.",
            commonErrors: ["One-sided evaluation — must weigh evidence for and against."],
          },
        },
        {
          id: "psych-u6-hbq17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a company of 400 employees, 25% report exercising regularly. How many employees is this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage of a total = (percentage / 100) × total." },
            ],
            steps: [
              { reasoning: "0.25 × 400 = 100 employees.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 100 employees.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100",
            commonErrors: ["Multiplying by 25 instead of 0.25."],
          },
        },
        {
          id: "psych-u6-hbq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A stress survey of 50 people found 20 use relaxation techniques, 18 use exercise and 12 use social support. (a) What percentage use exercise? (b) How many more people use relaxation than social support?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 36 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress management techniques", statement: "Relaxation, exercise and social support are common stress management strategies." },
            ],
            steps: [
              { part: "a", reasoning: "18 / 50 = 0.36 = 36%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: 36%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "20 − 12 = 8 people.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: 8 people.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 36% (b) 8",
            commonErrors: ["Giving 0.36 instead of 36% for part (a)."],
          },
        },
        {
          id: "psych-u6-hbq19",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why people who are most stressed may be least likely to use stress management techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress and help-seeking", statement: "High stress reduces the time, motivation and energy needed to adopt techniques." },
            ],
            steps: [
              { reasoning: "Time poverty: heavy demands leave no capacity for exercise, relaxation or planning.", marks: 1, markCode: "M" },
              { reasoning: "Low motivation: exhaustion and low mood reduce initiative to seek help.", marks: 1, markCode: "M" },
              { reasoning: "Perceived barriers: stressed people may see techniques as effortful or irrelevant to their situation.", marks: 1, markCode: "R" },
              { reasoning: "Result: those who would benefit most often use techniques least — a paradox of stress management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High stress depletes the very resources (time, motivation, energy) needed to adopt management techniques.",
            commonErrors: ["Blaming laziness — the barriers are structural and psychological."],
          },
        },
        {
          id: "psych-u6-hbq20",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A school introduces a weekly mindfulness programme to reduce student stress.",
          parts: [
            { label: "a", prompt: "Explain why the most stressed students might not attend.", marks: 3 },
            { label: "b", prompt: "Describe two strategies to increase attendance.", marks: 2 },
            { label: "c", prompt: "Evaluate mindfulness as a stress management technique for students.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mindfulness in schools", statement: "Mindfulness targets appraisal but requires motivation, time and appropriate framing." },
            ],
            steps: [
              { part: "a", reasoning: "Time poverty: stressed students may see extra sessions as another demand.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Scepticism or stigma: mindfulness may be seen as 'fluffy' or irrelevant to exam pressure.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low self-efficacy: students doubt they can sit still or benefit.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Make sessions short, optional and scheduled within the school day; frame as performance skill.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use peer testimonials and teacher endorsement to reduce stigma and build self-efficacy.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: evidence shows mindfulness reduces anxiety and improves attention and emotional regulation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: effects are modest for some and require sustained practice to maintain.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It targets appraisal but not organisational stressors — workload and school culture also matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Time + stigma + self-efficacy. (b) Accessibility + peer endorsement. (c) Helpful but modest; needs sustained practice.",
            commonErrors: ["Assuming offering mindfulness solves stress — engagement and context matter."],
          },
        },
      ],
    },
  ],
};
