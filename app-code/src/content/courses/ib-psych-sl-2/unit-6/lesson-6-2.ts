import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "psych-u6-lesson-6-2",
  code: "6-2",
  title: "Health Psychology",
  goal: "I CAN describe the role of psychology in health and illness, including lifestyle factors, illness prevention and patient-practitioner interaction.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Health psychology", definition: "The branch of psychology studying how biological, psychological and social factors influence health and illness." },
    { term: "Health belief model", definition: "Becker's model predicting health behaviours from perceived susceptibility, severity, benefits and barriers." },
    { term: "Health locus of control", definition: "Belief about whether health outcomes are controlled by oneself, powerful others or chance." },
    { term: "Patient-practitioner interaction", definition: "Communication between healthcare providers and patients affecting adherence and outcomes." },
    { term: "Placebo effect", definition: "Improvement from expecting treatment to work, even with an inactive substance." },
    { term: "Adherence", definition: "The extent to which patients follow prescribed treatment regimens." },
  ],
  concepts: [
    {
      id: "psych-u6-health-psych",
      title: "Health psychology: behaviour and prevention",
      skill: "Describe the biopsychosocial model, health belief model, and factors influencing health behaviours and illness prevention.",
      lesson: {
        sections: [
          {
            heading: "The biopsychosocial model",
            body: "Health psychology rejects the purely biomedical model (illness = biological dysfunction only) in favour of the **biopsychosocial model**: health and illness result from interactions among **biological** (genes, pathogens, physiology), **psychological** (thoughts, emotions, behaviours, stress) and **social** (culture, relationships, socioeconomic status) factors. This explains why identical diseases affect people differently and why psychological interventions can improve physical health outcomes.",
          },
          {
            heading: "Health belief model",
            body: "Hochbaum and Becker's **Health Belief Model** predicts whether people adopt preventive behaviours based on: **perceived susceptibility** (how likely am I to get the illness?), **perceived severity** (how serious would it be?), **perceived benefits** (would the action help?), **perceived barriers** (cost, effort, side effects), **cues to action** (reminders, symptoms) and **self-efficacy** (can I do it?). Campaigns work best when they address all these factors.",
          },
          {
            heading: "Health behaviours and prevention",
            body: "Key health behaviours: exercise, balanced diet, sleep, avoiding smoking/alcohol/drugs, preventive screenings, vaccination. Influencing factors: **locus of control** — internal (I control my health) predicts better self-management than external (doctors/luck control it); **self-efficacy** — belief in ability to change; **social norms** — peer behaviour influences ours; **socioeconomic status** — access to resources shapes health behaviours. Illness prevention operates at primary (prevent disease), secondary (early detection) and tertiary (reduce complications) levels.",
          },
        ],
        keyFormulas: [
          { name: "Biopsychosocial", statement: "Biological + Psychological + Social = health outcome" },
          { name: "HBM components", statement: "Susceptibility + severity + benefits - barriers + cues + self-efficacy" },
        ],
        workedExample: {
          problem: "Why might someone who knows smoking causes cancer continue to smoke?",
          solution: "Health Belief Model: they may perceive low susceptibility ('it won't happen to me'), high barriers (stress relief, addiction), or low self-efficacy ('I can't quit'). Knowledge alone is insufficient — all HBM factors must support change.",
        },
      },
      questions: [
        {
          id: "psych-u6-hpq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The biopsychosocial model argues health is determined by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological, psychological and social factors" },
              { id: "b", text: "Biological factors only" },
              { id: "c", text: "Psychological factors only" },
              { id: "d", text: "Social factors only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biopsychosocial model", statement: "Health emerges from biological, psychological and social interactions." },
            ],
            steps: [
              { reasoning: "The model integrates all three levels of influence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Biological, psychological and social factors",
            commonErrors: ["Choosing only biological — the model explicitly includes psychological and social."],
          },
        },
        {
          id: "psych-u6-hpq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the components of the Health Belief Model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Health Belief Model", statement: "Health behaviours depend on perceived susceptibility, severity, benefits, barriers, cues and self-efficacy." },
            ],
            steps: [
              { reasoning: "Perceived susceptibility and severity: how likely and how serious is the health threat?", marks: 1, markCode: "M" },
              { reasoning: "Perceived benefits and barriers: does the action help, and what does it cost in effort/side effects?", marks: 1, markCode: "M" },
              { reasoning: "Cues to action and self-efficacy: reminders prompt action; belief in ability enables it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Susceptibility + severity + benefits - barriers + cues + self-efficacy → health behaviour.",
            commonErrors: ["Omitting self-efficacy — added later and crucial for behaviour change."],
          },
        },
        {
          id: "psych-u6-hpq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between internal and external health locus of control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Health locus of control", statement: "Internal = I control my health; external = powerful others or chance control it." },
            ],
            steps: [
              { reasoning: "Internal locus: belief that personal actions determine health — associated with better self-management.", marks: 1, markCode: "M" },
              { reasoning: "External locus: belief that doctors, luck or fate determine health — associated with passive compliance.", marks: 1, markCode: "M" },
              { reasoning: "Internal locus predicts adherence to exercise, diet and preventive behaviours.", marks: 1, markCode: "R" },
              { reasoning: "However, pure internal locus can blame patients for illness beyond their control — balanced view needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Internal = personal control (better outcomes); external = fate/others (passive). Balance is ideal.",
            commonErrors: ["Assuming internal locus is always better — can produce self-blame."],
          },
        },
        {
          id: "psych-u6-hpq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A public health campaign wants to increase vaccination rates among young adults.",
          parts: [
            { label: "a", prompt: "Identify three barriers to vaccination using the Health Belief Model.", marks: 3 },
            { label: "b", prompt: "Describe two campaign strategies addressing these barriers.", marks: 2 },
            { label: "c", prompt: "Evaluate the effectiveness of health belief-based campaigns.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health campaigns", statement: "Addressing perceived barriers and building self-efficacy increases preventive behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Low perceived susceptibility: young adults feel invulnerable to serious illness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Perceived barriers: needle fear, time costs, misinformation about side effects.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low self-efficacy: doubt about ability to access or tolerate vaccination.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Address susceptibility: show real cases of young adults affected by vaccine-preventable disease.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reduce barriers + build efficacy: convenient locations, information sessions, peer testimonials.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: HBM-based campaigns show measurable increases in preventive behaviours.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: assumes rational decision-making — emotion, social influence and access also matter.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One-time campaigns have limited effect; sustained multi-channel approaches work better.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Susceptibility + barriers + efficacy. (b) Real cases + convenience + testimonials. (c) Effective but needs sustained multi-channel approach.",
            commonErrors: ["Focusing only on information — beliefs and barriers matter more than knowledge."],
          },
        },
        {
          id: "psych-u6-hpq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The biomedical model of illness assumes that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Psychological factors cause all illness" },
              { id: "b", text: "Illness results only from biological dysfunction" },
              { id: "c", text: "Social factors are irrelevant to health" },
              { id: "d", text: "Patients control their own illness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biomedical model", statement: "Illness = biological dysfunction only." },
            ],
            steps: [
              { reasoning: "The biomedical model reduces illness to biological causes — pathogens, genes, physiology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Illness results only from biological dysfunction",
            commonErrors: ["Confusing the biomedical model with the biopsychosocial model."],
          },
        },
        {
          id: "psych-u6-hpq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the Health Belief Model, 'perceived susceptibility' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How serious the illness would be" },
              { id: "b", text: "Whether the treatment is affordable" },
              { id: "c", text: "How likely one believes oneself to be at risk of the illness" },
              { id: "d", text: "Confidence in performing the health behaviour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perceived susceptibility", statement: "Belief about personal likelihood of getting the illness." },
            ],
            steps: [
              { reasoning: "Susceptibility = 'how likely am I to get this?' — a personal risk estimate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** How likely one believes oneself to be at risk of the illness",
            commonErrors: ["Confusing susceptibility (likelihood) with severity (seriousness)."],
          },
        },
        {
          id: "psych-u6-hpq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the Health Belief Model, 'perceived barriers' include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Costs, effort and side effects of the health behaviour" },
              { id: "b", text: "Belief in personal ability to change" },
              { id: "c", text: "Reminders to take action" },
              { id: "d", text: "The seriousness of the illness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perceived barriers", statement: "Costs, effort, side effects and obstacles to adopting the behaviour." },
            ],
            steps: [
              { reasoning: "Barriers are what makes the health behaviour difficult — cost, time, side effects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Costs, effort and side effects of the health behaviour",
            commonErrors: ["Confusing barriers with benefits — barriers hinder, benefits encourage."],
          },
        },
        {
          id: "psych-u6-hpq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Cues to action' in the Health Belief Model are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "External triggers or reminders that prompt health behaviour" },
              { id: "b", text: "Internal motivators like fear of illness" },
              { id: "c", text: "Evidence that the behaviour works" },
              { id: "d", text: "Costs that discourage the behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cues to action", statement: "Triggers — symptoms, reminders, media — that prompt behaviour." },
            ],
            steps: [
              { reasoning: "Cues are external prompts that tip a person into action.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** External triggers or reminders that prompt health behaviour",
            commonErrors: ["Confusing cues to action with perceived benefits."],
          },
        },
        {
          id: "psych-u6-hpq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Self-efficacy in the Health Belief Model refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowledge about the illness" },
              { id: "b", text: "Access to healthcare services" },
              { id: "c", text: "Belief that the illness is serious" },
              { id: "d", text: "Confidence in one's ability to perform the health behaviour" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-efficacy", statement: "Belief in one's ability to carry out the health behaviour." },
            ],
            steps: [
              { reasoning: "Self-efficacy is confidence in capability — 'can I do this?'", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Confidence in one's ability to perform the health behaviour",
            commonErrors: ["Confusing self-efficacy with actual ability — it is a belief."],
          },
        },
        {
          id: "psych-u6-hpq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A person with an internal health locus of control is most likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Take personal responsibility for health behaviours" },
              { id: "b", text: "Attribute illness entirely to luck" },
              { id: "c", text: "Rely passively on doctors" },
              { id: "d", text: "Avoid preventive check-ups" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health locus of control", statement: "Internal locus → personal responsibility and better self-management." },
            ],
            steps: [
              { reasoning: "Internal locus means 'I control my health' — leading to proactive health behaviours.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Take personal responsibility for health behaviours",
            commonErrors: ["Confusing internal locus (self-control) with external locus (fate/doctors)."],
          },
        },
        {
          id: "psych-u6-hpq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Secondary illness prevention refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Early detection of disease through screening" },
              { id: "b", text: "Reducing complications of established illness" },
              { id: "c", text: "Treating terminal illness" },
              { id: "d", text: "Preventing disease before it occurs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prevention levels", statement: "Primary = prevent; secondary = early detection; tertiary = reduce complications." },
            ],
            steps: [
              { reasoning: "Secondary prevention detects disease early — screenings, check-ups.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Early detection of disease through screening",
            commonErrors: ["Confusing secondary (early detection) with primary (preventing onset)."],
          },
        },
        {
          id: "psych-u6-hpq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Outline the three factors in the biopsychosocial model of health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biopsychosocial model", statement: "Biological + psychological + social factors jointly shape health." },
            ],
            steps: [
              { reasoning: "Biological: genes, pathogens, physiology — the body's physical state.", marks: 1, markCode: "M" },
              { reasoning: "Psychological: thoughts, emotions, behaviours, stress — how we think and act.", marks: 1, markCode: "M" },
              { reasoning: "Social: culture, relationships, socioeconomic status — the environment around us.", marks: 1, markCode: "M" },
              { reasoning: "Health outcomes emerge from interactions among all three levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Biological, psychological and social factors interact to determine health.",
            commonErrors: ["Listing factors without noting their interaction — the model emphasises interplay."],
          },
        },
        {
          id: "psych-u6-hpq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two components of the Health Belief Model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "HBM components", statement: "Susceptibility, severity, benefits, barriers, cues to action, self-efficacy." },
            ],
            steps: [
              { reasoning: "Perceived susceptibility and severity: personal risk estimate and how serious the illness would be.", marks: 1, markCode: "M" },
              { reasoning: "Perceived benefits and barriers: whether the action helps versus its costs and side effects.", marks: 1, markCode: "M" },
              { reasoning: "Cues to action: external triggers that prompt the behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Self-efficacy: confidence in ability to perform the behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two components described accurately — e.g. susceptibility/severity or benefits/barriers.",
            commonErrors: ["Mixing up components — e.g. calling self-efficacy a 'cue'."],
          },
        },
        {
          id: "psych-u6-hpq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain how socioeconomic status affects health behaviours.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SES and health", statement: "Lower SES limits access to resources that support healthy behaviours." },
            ],
            steps: [
              { reasoning: "Access: lower SES reduces access to healthy food, safe exercise spaces and healthcare.", marks: 1, markCode: "M" },
              { reasoning: "Cost: healthy options are often more expensive — processed food cheaper than fresh.", marks: 1, markCode: "M" },
              { reasoning: "Time: demanding low-paid work leaves less time for exercise, cooking and sleep.", marks: 1, markCode: "M" },
              { reasoning: "Stress: financial strain increases chronic stress, which itself drives unhealthy coping like smoking.", marks: 1, markCode: "R" },
              { reasoning: "Knowledge: health literacy varies with education, affecting understanding of preventive behaviours.", marks: 1, markCode: "M" },
              { reasoning: "Result: lower SES correlates with higher rates of smoking, poor diet and lower preventive screening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SES shapes access, cost, time, stress and knowledge — all influencing health behaviours.",
            commonErrors: ["Blaming individuals — SES effects are structural, not just personal choice."],
          },
        },
        {
          id: "psych-u6-hpq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A woman knows breast screening detects cancer early but avoids it because she feels healthy and the appointment is inconvenient. Using the Health Belief Model, explain her behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "HBM application", statement: "Behaviour depends on perceived susceptibility, severity, benefits, barriers, cues and self-efficacy." },
            ],
            steps: [
              { reasoning: "Low perceived susceptibility: feeling healthy lowers her estimate of personal risk.", marks: 1, markCode: "M" },
              { reasoning: "Perceived barriers: inconvenience and effort of attending act as obstacles.", marks: 1, markCode: "M" },
              { reasoning: "Perceived benefits exist (early detection) but are outweighed by barriers in her appraisal.", marks: 1, markCode: "R" },
              { reasoning: "Lack of cues to action: no symptoms or reminders prompt her to book.", marks: 1, markCode: "M" },
              { reasoning: "Self-efficacy may also be low if she doubts she can complete the procedure.", marks: 1, markCode: "M" },
              { reasoning: "Knowledge alone (she knows screening works) is insufficient — beliefs and barriers drive behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low susceptibility + high barriers + few cues → avoidance despite knowledge.",
            commonErrors: ["Assuming knowledge produces behaviour — HBM shows beliefs and barriers intervene."],
          },
        },
        {
          id: "psych-u6-hpq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the Health Belief Model as a framework for predicting health behaviours.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "HBM evaluation", statement: "HBM captures key beliefs but assumes rational decision-making and misses social/emotional factors." },
            ],
            steps: [
              { reasoning: "Strength: identifies concrete belief factors — susceptibility, severity, benefits, barriers — that campaigns can target.", marks: 1, markCode: "M" },
              { reasoning: "Strength: self-efficacy addition improved prediction of behaviour change.", marks: 1, markCode: "M" },
              { reasoning: "Strength: widely applied — explains vaccination, screening and lifestyle behaviours.", marks: 1, markCode: "A" },
              { reasoning: "Limitation: assumes rational calculation — emotion, habit and social influence also drive behaviour.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: ignores structural barriers like cost and access that beliefs cannot overcome.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: static model — does not capture how behaviours change over time or through habit formation.", marks: 1, markCode: "R" },
              { reasoning: "Alternative models (e.g. theory of planned behaviour) add social norms and intentions.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: useful framework but incomplete — best combined with other models.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HBM identifies key beliefs but is incomplete — ignores emotion, habit, social norms and structural barriers.",
            commonErrors: ["One-sided evaluation — must weigh predictive strengths against limitations."],
          },
        },
        {
          id: "psych-u6-hpq17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a survey of 300 adults, 40% report getting a flu vaccination each year. How many adults is this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage of a total = (percentage / 100) × total." },
            ],
            steps: [
              { reasoning: "0.40 × 300 = 120 adults.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120 adults.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120",
            commonErrors: ["Multiplying by 40 instead of 0.40."],
          },
        },
        {
          id: "psych-u6-hpq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A clinic screened 200 patients: 60 had high perceived susceptibility, 80 had high perceived barriers, and 40 had high self-efficacy. (a) What percentage had high perceived barriers? (b) How many more patients had high barriers than high self-efficacy?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HBM factors", statement: "Susceptibility, barriers and self-efficacy are distinct HBM components." },
            ],
            steps: [
              { part: "a", reasoning: "80 / 200 = 0.4 = 40%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: 40%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "80 − 40 = 40 patients.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: 40 patients.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40% (b) 40",
            commonErrors: ["Confusing barriers with susceptibility — they are separate HBM factors."],
          },
        },
        {
          id: "psych-u6-hpq19",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between primary, secondary and tertiary illness prevention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prevention levels", statement: "Primary prevents disease; secondary detects early; tertiary reduces complications." },
            ],
            steps: [
              { reasoning: "Primary: prevents disease before it occurs — vaccination, exercise, healthy diet.", marks: 1, markCode: "M" },
              { reasoning: "Secondary: detects disease early — screenings, check-ups, self-examination.", marks: 1, markCode: "M" },
              { reasoning: "Tertiary: reduces complications of established illness — rehabilitation, disease management.", marks: 1, markCode: "M" },
              { reasoning: "The levels are sequential — prevention, detection, then complication management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary = prevent; secondary = early detect; tertiary = reduce complications.",
            commonErrors: ["Confusing secondary (detection) with tertiary (managing existing illness)."],
          },
        },
        {
          id: "psych-u6-hpq20",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A city wants to reduce smoking rates among young adults.",
          parts: [
            { label: "a", prompt: "Identify three barriers to quitting smoking using the Health Belief Model.", marks: 3 },
            { label: "b", prompt: "Describe two campaign strategies addressing these barriers.", marks: 2 },
            { label: "c", prompt: "Evaluate the use of fear-based messages in anti-smoking campaigns.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Smoking cessation campaigns", statement: "Addressing barriers and self-efficacy improves quit rates." },
            ],
            steps: [
              { part: "a", reasoning: "Low perceived susceptibility: young adults feel invulnerable to smoking-related disease.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Perceived barriers: nicotine addiction, stress relief, social pressure, cost of alternatives.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low self-efficacy: doubt about ability to quit permanently.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Address susceptibility: show real cases of young smokers with smoking-related illness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reduce barriers + build efficacy: free cessation support, nicotine replacement, peer quit groups.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fear appeals can raise perceived severity — effective when paired with efficacy messages.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But fear without efficacy produces denial or avoidance — people feel unable to act.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Best practice: moderate fear + high self-efficacy + clear action steps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Susceptibility + barriers + efficacy. (b) Real cases + support + quit groups. (c) Fear works only with efficacy.",
            commonErrors: ["Relying on fear alone — without self-efficacy it backfires."],
          },
        },
      ],
    },
    {
      id: "psych-u6-patient-interaction",
      title: "Patient-practitioner interaction",
      skill: "Describe factors affecting doctor-patient communication, adherence to treatment and the placebo effect.",
      lesson: {
        sections: [
          {
            heading: "Doctor-patient communication",
            body: "Effective communication involves **active listening**, clear explanation of diagnosis and treatment, checking understanding, and involving patients in decisions (**shared decision-making**). Poor communication leads to misunderstanding, anxiety, non-adherence and complaints. Factors affecting it: practitioner empathy and warmth, time pressures, cultural/language differences, patient health literacy, and power imbalance between doctor and patient.",
          },
          {
            heading: "Adherence to treatment",
            body: "**Adherence** = following prescribed treatment as directed. Many patients don't adhere fully — estimates suggest 25-50% for chronic conditions. Influencing factors: complexity of regimen (more pills = worse adherence), side effects, cost, understanding of the condition, trust in practitioner, social support, and perceived benefits vs barriers. Improving adherence: simplifying regimens, clear instructions, follow-up, addressing concerns, involving patients in decisions.",
          },
          {
            heading: "Placebo effect and evaluation",
            body: "The **placebo effect**: patients improve after receiving an inactive treatment because they expect it to work — demonstrating the power of expectation and the therapeutic relationship. Placebos must be ethically managed — used in research (with consent and debriefing) to isolate treatment effects, and understood clinically as a real component of healing. Modern medicine integrates pharmacological treatment with psychological support — the therapeutic alliance itself has healing effects.",
          },
        ],
        keyFormulas: [
          { name: "Adherence factors", statement: "Complexity + side effects + cost + understanding + trust + support" },
          { name: "Placebo effect", statement: "Expectation of improvement produces real physiological changes" },
        ],
        workedExample: {
          problem: "Why do patients often stop taking antibiotics when they feel better?",
          solution: "They perceive the illness as resolved (primary appraisal) and don't understand that bacteria may remain — poor communication about completing the course. This is an adherence problem rooted in health beliefs and practitioner communication.",
        },
      },
      questions: [
        {
          id: "psych-u6-ppq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The placebo effect refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Worsening after stopping medication" },
              { id: "b", text: "Improvement from expecting treatment to work" },
              { id: "c", text: "Deliberate deception by practitioners" },
              { id: "d", text: "Side effects of inactive substances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Placebo effect", statement: "Improvement produced by expectation of treatment, not the treatment itself." },
            ],
            steps: [
              { reasoning: "Placebo = improvement from belief/expectation, not pharmacological action.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Improvement from expecting treatment to work",
            commonErrors: ["Confusing placebo effect with nocebo effect (harm from negative expectation)."],
          },
        },
        {
          id: "psych-u6-ppq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe three factors that reduce patient adherence to treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adherence barriers", statement: "Complexity, side effects, cost, poor understanding, low trust all reduce adherence." },
            ],
            steps: [
              { reasoning: "Regimen complexity: multiple pills or complicated schedules increase missed doses.", marks: 1, markCode: "M" },
              { reasoning: "Side effects and cost: unpleasant effects or financial burden discourage continued use.", marks: 1, markCode: "M" },
              { reasoning: "Poor understanding or distrust: patients who don't understand why or doubt the treatment stop early.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complexity, side effects/cost, poor understanding/trust all reduce adherence.",
            commonErrors: ["Blaming patients for non-adherence — factors are often systemic."],
          },
        },
        {
          id: "psych-u6-ppq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how shared decision-making improves patient outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shared decision-making", statement: "Involving patients in treatment choices increases adherence and satisfaction." },
            ],
            steps: [
              { reasoning: "Patients who participate in decisions understand options better and feel ownership of the choice.", marks: 1, markCode: "M" },
              { reasoning: "Ownership increases motivation to follow the chosen treatment — adherence improves.", marks: 1, markCode: "M" },
              { reasoning: "The therapeutic alliance strengthens — trust and communication improve outcomes.", marks: 1, markCode: "R" },
              { reasoning: "Research shows shared decision-making improves adherence, satisfaction and sometimes clinical outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Patient involvement → understanding + ownership → better adherence and outcomes.",
            commonErrors: ["Assuming doctors should decide alone — paternalism reduces engagement."],
          },
        },
        {
          id: "psych-u6-ppq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A clinic notices many diabetic patients fail to follow dietary advice despite understanding it.",
          parts: [
            { label: "a", prompt: "Explain three psychological factors that might explain this non-adherence.", marks: 3 },
            { label: "b", prompt: "Describe two strategies the clinic could use to improve adherence.", marks: 2 },
            { label: "c", prompt: "Evaluate the ethical use of placebo treatments in clinical practice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adherence psychology", statement: "Knowledge alone doesn't produce behaviour change — beliefs, barriers and self-efficacy matter." },
            ],
            steps: [
              { part: "a", reasoning: "Perceived barriers: diet changes feel restrictive, expensive or socially isolating.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low self-efficacy: patients doubt their ability to maintain dietary changes long-term.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Health locus of control: external locus ('genetics/fate control my diabetes') reduces personal effort.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Simplify regimen: provide concrete meal plans, culturally appropriate options, realistic goals.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Build self-efficacy: start with small achievable changes, track progress, celebrate successes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethical concern: deception violates informed consent if patients aren't told it's a placebo.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Open-label placebos (telling patients it's placebo) can still work — transparency possible.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "In research, placebos are ethical with consent and debriefing; in practice, deception is unethical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Barriers + efficacy + locus. (b) Simplify + build efficacy. (c) Deception unethical; open-label possible.",
            commonErrors: ["Assuming understanding produces compliance — beliefs and barriers intervene."],
          },
        },
        {
          id: "psych-u6-ppq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Adherence to treatment is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The patient's satisfaction with the practitioner" },
              { id: "b", text: "The extent to which patients follow prescribed treatment regimens" },
              { id: "c", text: "The cost of the prescribed medication" },
              { id: "d", text: "The speed of recovery after treatment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adherence", statement: "Following prescribed treatment as directed." },
            ],
            steps: [
              { reasoning: "Adherence = how closely patients follow medication schedules, diet and lifestyle advice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The extent to which patients follow prescribed treatment regimens",
            commonErrors: ["Confusing adherence with compliance — adherence is the preferred modern term."],
          },
        },
        {
          id: "psych-u6-ppq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Shared decision-making in healthcare involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Patients prescribing their own medication" },
              { id: "b", text: "Involving patients in choosing among treatment options" },
              { id: "c", text: "Insurance companies setting treatment" },
              { id: "d", text: "The doctor deciding treatment alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shared decision-making", statement: "Patient and practitioner jointly choose treatment." },
            ],
            steps: [
              { reasoning: "Shared decision-making means the patient participates in selecting treatment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Involving patients in choosing among treatment options",
            commonErrors: ["Confusing shared decision-making with patient autonomy — the doctor still advises."],
          },
        },
        {
          id: "psych-u6-ppq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which factor most directly reduces patient adherence to medication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Follow-up appointments" },
              { id: "b", text: "Unpleasant side effects" },
              { id: "c", text: "Involvement in treatment decisions" },
              { id: "d", text: "Clear written instructions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adherence barriers", statement: "Side effects, cost and complexity discourage continued treatment." },
            ],
            steps: [
              { reasoning: "Side effects are a direct barrier — patients stop medication that makes them feel worse.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Unpleasant side effects",
            commonErrors: ["Choosing a factor that improves adherence — clear instructions and involvement help."],
          },
        },
        {
          id: "psych-u6-ppq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The placebo effect works primarily through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Patient expectation that the treatment will work" },
              { id: "b", text: "The chemical action of the inactive substance" },
              { id: "c", text: "Natural recovery unrelated to treatment" },
              { id: "d", text: "Deception by the practitioner" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Placebo mechanism", statement: "Expectation of improvement produces real physiological change." },
            ],
            steps: [
              { reasoning: "Placebo effects arise from expectation and the therapeutic context, not pharmacology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Patient expectation that the treatment will work",
            commonErrors: ["Confusing placebo with natural recovery — the effect is specifically expectation-driven."],
          },
        },
        {
          id: "psych-u6-ppq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The nocebo effect refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Side effects of active medication" },
              { id: "b", text: "Recovery after stopping treatment" },
              { id: "c", text: "Harm produced by expecting negative effects" },
              { id: "d", text: "Improvement from expecting treatment to work" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nocebo effect", statement: "Negative outcomes produced by negative expectation." },
            ],
            steps: [
              { reasoning: "Nocebo is the harmful counterpart of placebo — expectation of harm produces symptoms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Harm produced by expecting negative effects",
            commonErrors: ["Confusing nocebo (expectation of harm) with real side effects."],
          },
        },
        {
          id: "psych-u6-ppq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The therapeutic alliance refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The trusting relationship between practitioner and patient" },
              { id: "b", text: "The patient's insurance coverage" },
              { id: "c", text: "The prescribed drug regimen" },
              { id: "d", text: "The physical clinic environment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Therapeutic alliance", statement: "The trusting practitioner–patient relationship that supports healing." },
            ],
            steps: [
              { reasoning: "The alliance is the bond of trust and collaboration between doctor and patient.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The trusting relationship between practitioner and patient",
            commonErrors: ["Confusing the alliance with the treatment itself — it is the relationship."],
          },
        },
        {
          id: "psych-u6-ppq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The main ethical problem with using hidden placebos in clinical practice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They require hospital admission" },
              { id: "b", text: "Deception violates the principle of informed consent" },
              { id: "c", text: "They are too expensive" },
              { id: "d", text: "They never produce any effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Placebo ethics", statement: "Deception without consent is unethical; open-label placebos avoid this." },
            ],
            steps: [
              { reasoning: "Hidden placebos deceive patients — violating informed consent and autonomy.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deception violates the principle of informed consent",
            commonErrors: ["Assuming placebo use is always unethical — in research with consent it is acceptable."],
          },
        },
        {
          id: "psych-u6-ppq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two factors that affect the quality of doctor-patient communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Communication factors", statement: "Practitioner warmth, time, culture, literacy and power imbalance shape communication." },
            ],
            steps: [
              { reasoning: "Practitioner factors: empathy, warmth and active listening improve communication.", marks: 1, markCode: "M" },
              { reasoning: "Time pressure: rushed consultations reduce explanation and checking of understanding.", marks: 1, markCode: "M" },
              { reasoning: "Cultural/language differences and health literacy can cause misunderstanding.", marks: 1, markCode: "M" },
              { reasoning: "Power imbalance may prevent patients from asking questions or disagreeing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two factors — practitioner warmth, time pressure, culture/language, literacy, power imbalance.",
            commonErrors: ["Listing only patient factors — practitioner and structural factors also matter."],
          },
        },
        {
          id: "psych-u6-ppq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Define adherence and state the approximate rate of non-adherence for chronic conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adherence", statement: "Following prescribed treatment as directed." },
            ],
            steps: [
              { reasoning: "Adherence = the extent to which patients follow medication schedules and treatment advice.", marks: 1, markCode: "M" },
              { reasoning: "Non-adherence is common — estimates suggest 25-50% for chronic conditions.", marks: 1, markCode: "M" },
              { reasoning: "This means a substantial minority do not follow treatment fully.", marks: 1, markCode: "R" },
              { reasoning: "Non-adherence reduces treatment effectiveness and worsens outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adherence = following treatment; ~25-50% non-adherence for chronic conditions.",
            commonErrors: ["Claiming most patients always adhere — rates are much lower for chronic illness."],
          },
        },
        {
          id: "psych-u6-ppq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Explain how regimen complexity affects patient adherence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regimen complexity", statement: "More pills and complicated schedules reduce adherence." },
            ],
            steps: [
              { reasoning: "Each additional medication or dose increases the chance of missed doses.", marks: 1, markCode: "M" },
              { reasoning: "Complex timing (with food, at intervals) is hard to remember in daily life.", marks: 1, markCode: "M" },
              { reasoning: "Complexity raises perceived barriers — the regimen feels overwhelming.", marks: 1, markCode: "R" },
              { reasoning: "Polypharmacy increases side effects, further discouraging adherence.", marks: 1, markCode: "M" },
              { reasoning: "Simplifying to once-daily dosing or combination pills measurably improves adherence.", marks: 1, markCode: "R" },
              { reasoning: "Thus complexity is a modifiable barrier — simplification is an effective intervention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complex regimens increase missed doses, perceived barriers and side effects — simplification improves adherence.",
            commonErrors: ["Blaming patients — complexity is a design problem, not just a patient problem."],
          },
        },
        {
          id: "psych-u6-ppq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A patient stops taking blood pressure medication because they feel fine and worry about side effects. Using adherence research, explain this decision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adherence psychology", statement: "Perceived benefits, barriers, beliefs and symptoms shape adherence." },
            ],
            steps: [
              { reasoning: "Perceived benefits are low — feeling fine means no perceived need for medication.", marks: 1, markCode: "M" },
              { reasoning: "Perceived barriers are high — side effect worries act as a deterrent.", marks: 1, markCode: "M" },
              { reasoning: "Health beliefs: hypertension is often asymptomatic — patients may not understand silent damage.", marks: 1, markCode: "M" },
              { reasoning: "Lack of cues to action: no symptoms mean no reminder that treatment is needed.", marks: 1, markCode: "R" },
              { reasoning: "If the practitioner did not explain long-term benefits, the patient sees only costs.", marks: 1, markCode: "M" },
              { reasoning: "Better communication about invisible benefits and side effect management could restore adherence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low perceived benefit (no symptoms) + high barriers (side effects) + poor understanding → non-adherence.",
            commonErrors: ["Assuming patients should just follow orders — beliefs and barriers intervene."],
          },
        },
        {
          id: "psych-u6-ppq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the ethical use of placebo treatments in clinical practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Placebo ethics", statement: "Placebo effects are real, but deception conflicts with informed consent." },
            ],
            steps: [
              { reasoning: "Placebo effects are genuine — expectation produces real physiological improvement.", marks: 1, markCode: "R" },
              { reasoning: "Ethical concern: hidden placebos deceive patients, violating informed consent and autonomy.", marks: 1, markCode: "M" },
              { reasoning: "Deception also undermines trust — if discovered, the therapeutic alliance is damaged.", marks: 1, markCode: "R" },
              { reasoning: "Open-label placebos (patient knows it is placebo) can still work — transparency is possible.", marks: 1, markCode: "M" },
              { reasoning: "In research, placebos are ethical when used with consent and debriefing.", marks: 1, markCode: "M" },
              { reasoning: "Using placebos instead of effective treatment is unethical — patients are denied real benefit.", marks: 1, markCode: "R" },
              { reasoning: "Some argue placebo use is acceptable when no effective treatment exists and harm is minimal.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: ethical only with transparency or genuine consent — deception is not justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Placebo effects are real but hidden use violates consent; open-label use may be ethical.",
            commonErrors: ["Treating placebo use as always acceptable — deception and withholding effective treatment are unethical."],
          },
        },
        {
          id: "psych-u6-ppq17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a clinic of 250 patients, 60% report taking medication as prescribed. How many patients is this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage of a total = (percentage / 100) × total." },
            ],
            steps: [
              { reasoning: "0.60 × 250 = 150 patients.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 150 patients.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150",
            commonErrors: ["Multiplying by 60 instead of 0.60."],
          },
        },
        {
          id: "psych-u6-ppq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A study of 120 patients found 48 fully adherent, 36 partially adherent and 36 non-adherent. (a) What percentage were fully adherent? (b) How many more patients were partially adherent than non-adherent?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adherence categories", statement: "Patients can be fully, partially or non-adherent." },
            ],
            steps: [
              { part: "a", reasoning: "48 / 120 = 0.4 = 40%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: 40%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "36 − 36 = 0 patients.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: 0 — the groups are equal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40% (b) 0",
            commonErrors: ["Assuming partial and non-adherent differ — here they are equal."],
          },
        },
        {
          id: "psych-u6-ppq19",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how poor doctor-patient communication can worsen health outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Communication and outcomes", statement: "Poor communication causes misunderstanding, anxiety and non-adherence." },
            ],
            steps: [
              { reasoning: "Patients may misunderstand diagnosis or treatment instructions.", marks: 1, markCode: "M" },
              { reasoning: "Anxiety from poor communication can worsen perceived symptoms and stress.", marks: 1, markCode: "M" },
              { reasoning: "Non-adherence rises when patients don't understand why treatment matters.", marks: 1, markCode: "R" },
              { reasoning: "Trust erodes — patients may seek second opinions, delay care or disengage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poor communication → misunderstanding, anxiety, non-adherence and eroded trust → worse outcomes.",
            commonErrors: ["Focusing only on the doctor's role — communication is a two-way process."],
          },
        },
        {
          id: "psych-u6-ppq20",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A hospital introduces a programme where doctors spend extra time explaining treatment options to patients.",
          parts: [
            { label: "a", prompt: "Explain two ways this could improve patient outcomes.", marks: 3 },
            { label: "b", prompt: "Describe one barrier to implementing this programme.", marks: 2 },
            { label: "c", prompt: "Evaluate whether shared decision-making should be standard practice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Communication and shared decisions", statement: "Better communication improves understanding, adherence and the therapeutic alliance." },
            ],
            steps: [
              { part: "a", reasoning: "Patients understand treatment better — reducing errors and improving adherence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Involvement increases ownership and motivation to follow treatment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Trust and alliance strengthen — improving satisfaction and outcomes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Time pressure: longer consultations reduce the number of patients seen — costly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Some patients prefer the doctor to decide — shared decisions may increase anxiety.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evidence supports shared decision-making — better adherence and satisfaction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But it assumes patients want and can engage — some prefer delegation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: standard practice is beneficial but should be flexible to patient preference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Understanding + ownership + trust. (b) Time cost + patient preference. (c) Beneficial but flexible.",
            commonErrors: ["Assuming shared decisions suit everyone — patient preference matters."],
          },
        },
      ],
    },
  ],
};
