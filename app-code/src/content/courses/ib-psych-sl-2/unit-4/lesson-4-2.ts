import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "psych-u4-lesson-4-2",
  code: "4-2",
  title: "Attribution Theory and Attitude Change",
  goal: "I CAN describe attribution theories and explain how attitudes are formed and changed, including persuasion and cognitive dissonance.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Attribution", definition: "The process of explaining the causes of behaviour — ours or others'." },
    { term: "Fundamental attribution error", definition: "Overestimating dispositional causes and underestimating situational causes for others' behaviour." },
    { term: "Self-serving bias", definition: "Attributing our successes to internal causes and failures to external causes." },
    { term: "Cognitive dissonance", definition: "The discomfort from holding contradictory beliefs or behaving inconsistently with beliefs." },
    { term: "Central route", definition: "Persuasion through careful evaluation of argument quality and evidence." },
    { term: "Peripheral route", definition: "Persuasion through superficial cues like attractiveness, emotion or authority." },
  ],
  concepts: [
    {
      id: "psych-u4-attribution",
      title: "Attribution theory",
      skill: "Describe Heider's attribution theory, Kelley's covariation model and common attribution biases.",
      lesson: {
        sections: [
          {
            heading: "Heider's attribution theory",
            body: "Fritz **Heider (1958)** proposed we explain behaviour by attributing it to **internal/dispositional causes** (personality, ability) or **external/situational causes** (circumstances, luck). We act as 'naive psychologists', seeking to understand why people behave as they do. The choice of attribution affects our emotional reactions and future expectations of that person.",
          },
          {
            heading: "Kelley's covariation model",
            body: "Harold **Kelley (1967)** refined attribution by saying we consider three sources of information: **consensus** (do others behave the same way?), **distinctiveness** (does the person behave this way in other situations?), and **consistency** (does the behaviour occur across time?). High consensus + high distinctiveness + high consistency → situational attribution. Low consensus + low distinctiveness + high consistency → dispositional attribution.",
          },
          {
            heading: "Attribution biases",
            body: "The **fundamental attribution error**: we overestimate dispositional causes for others' behaviour while ignoring situations — explaining failures as character flaws. The **self-serving bias**: we attribute our own successes internally and failures externally. The **actor-observer bias**: we explain our own actions by situation but others' by disposition. These biases protect self-esteem but distort social judgement.",
          },
        ],
        keyFormulas: [
          { name: "Attribution types", statement: "Internal (disposition) vs external (situation)" },
          { name: "Covariation info", statement: "Consensus + Distinctiveness + Consistency → attribution" },
          { name: "Key biases", statement: "Fundamental attribution error + self-serving bias + actor-observer bias" },
        ],
        workedExample: {
          problem: "A student fails an exam. A classmate says 'they're lazy'; the student says 'the exam was unfair'. Explain both attributions.",
          solution: "Classmate: fundamental attribution error — attributing failure to disposition (laziness) ignoring situational factors. Student: self-serving bias — attributing failure externally (unfair exam) to protect self-esteem.",
        },
      },
      questions: [
        {
          id: "psych-u4-atq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The fundamental attribution error is the tendency to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overestimate situational causes for others" },
              { id: "b", text: "Overestimate dispositional causes for others" },
              { id: "c", text: "Attribute own failures to internal causes" },
              { id: "d", text: "Ignore consensus information" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fundamental attribution error", statement: "Overestimating personality causes and underestimating situational causes for others' behaviour." },
            ],
            steps: [
              { reasoning: "FAE = disposition over situation for others' behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Overestimate dispositional causes for others",
            commonErrors: ["Confusing FAE with self-serving bias — FAE is about others, self-serving about self."],
          },
        },
        {
          id: "psych-u4-atq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the three types of information Kelley says we use in covariation analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Covariation model", statement: "Consensus, distinctiveness and consistency determine attribution." },
            ],
            steps: [
              { reasoning: "Consensus: do other people behave the same way toward this stimulus?", marks: 1, markCode: "M" },
              { reasoning: "Distinctiveness: does this person behave this way only toward this stimulus or in all situations?", marks: 1, markCode: "M" },
              { reasoning: "Consistency: does the behaviour occur reliably across time and situations?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consensus + distinctiveness + consistency inform attribution.",
            commonErrors: ["Omitting one covariation factor — all three are needed."],
          },
        },
        {
          id: "psych-u4-atq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the self-serving bias differs from the fundamental attribution error.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-serving vs FAE", statement: "Self-serving protects self-esteem; FAE explains others' behaviour by disposition." },
            ],
            steps: [
              { reasoning: "Self-serving bias: we credit ourselves for successes (internal) but blame failures on external factors.", marks: 1, markCode: "M" },
              { reasoning: "Fundamental attribution error: we explain others' behaviour by their character, ignoring their situations.", marks: 1, markCode: "M" },
              { reasoning: "Difference: self-serving is about self-protection; FAE is about explaining others.", marks: 1, markCode: "R" },
              { reasoning: "Both distort accurate social judgement but serve different psychological functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Self-serving = protect self-esteem; FAE = blame others' character. Different targets, different functions.",
            commonErrors: ["Treating them as the same bias — they operate in opposite directions."],
          },
        },
        {
          id: "psych-u4-atq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student attributes a friend's low exam grade to 'not being smart enough'.",
          parts: [
            { label: "a", prompt: "Identify the attribution bias shown and explain it.", marks: 2 },
            { label: "b", prompt: "Describe two situational factors the student may have ignored.", marks: 2 },
            { label: "c", prompt: "Evaluate whether dispositional or situational attribution is more accurate here.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attribution accuracy", statement: "Both dispositions and situations contribute; ignoring either distorts judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Fundamental attribution error — attributing failure to internal disposition (not smart) ignoring situation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also possibly actor-observer bias — judging others by character, self by circumstance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ignored factors: illness, family problems, poor teaching, exam difficulty, lack of sleep.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consistent underperformance across contexts would support disposition; single failure suggests situation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Without more information, dispositional attribution is premature — one failure proves little.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Kelley's model: low consensus (others may pass) + low distinctiveness would suggest situation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "High consistency across time and contexts would be needed to support 'not smart'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: situational factors are likely more accurate; dispositional attribution needs stronger evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) FAE/actor-observer. (b) Illness, circumstances, exam difficulty. (c) Situation more likely — need consistency for disposition.",
            commonErrors: ["Assuming one failure indicates stable trait — need pattern across situations."],
          },
        },
        {
          id: "psych-u4-atq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Attributing a person's behaviour to their personality traits rather than to circumstances is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "external (situational) attribution" },
              { id: "b", text: "internal (dispositional) attribution" },
              { id: "c", text: "self-serving bias" },
              { id: "d", text: "covariation analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal attribution", statement: "Causes located within the person — personality, ability, motives." },
            ],
            steps: [
              { reasoning: "Trait-based explanations are dispositional/internal attributions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Internal (dispositional) attribution",
            commonErrors: ["Confusing internal attribution with the self-serving bias — the latter is about self-protection."],
          },
        },
        {
          id: "psych-u4-atq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Kelley's covariation model, 'consensus' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "how consistent the behaviour is across time" },
              { id: "b", text: "whether other people behave the same way toward the same stimulus" },
              { id: "c", text: "whether the person acts this way in all situations" },
              { id: "d", text: "the agreement of observers' ratings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consensus", statement: "Do others behave the same way toward this stimulus?" },
            ],
            steps: [
              { reasoning: "Consensus concerns whether the behaviour is shared by others in the same situation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whether others behave the same way",
            commonErrors: ["Confusing consensus (others) with consistency (across time)."],
          },
        },
        {
          id: "psych-u4-atq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher records 50 attributions people make for others' behaviour: 35 dispositional and 15 situational. What percentage of attributions were dispositional?",
          response: { type: "numeric", parts: [{ label: "Dispositional percentage", answer: 70, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage = part / total x 100." },
            ],
            steps: [
              { reasoning: "35 / 50 x 100 = 70%.", working: "35 / 50 x 100", marks: 1, markCode: "M" },
              { reasoning: "70% of attributions were dispositional.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70%",
            commonErrors: ["Using 15 instead of 35 (situational, not dispositional)."],
          },
        },
        {
          id: "psych-u4-atq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The actor-observer bias describes the tendency to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "explain our own actions by situation but others' actions by disposition" },
              { id: "b", text: "overestimate dispositional causes for everyone equally" },
              { id: "c", text: "blame all failures on bad luck" },
              { id: "d", text: "ignore consensus information entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Actor-observer bias", statement: "We attribute our own behaviour to situations and others' behaviour to dispositions." },
            ],
            steps: [
              { reasoning: "The asymmetry — self by situation, others by character — defines the actor-observer bias.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Self by situation, others by disposition",
            commonErrors: ["Confusing it with the fundamental attribution error — the actor-observer bias applies to both self and others asymmetrically."],
          },
        },
        {
          id: "psych-u4-atq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Apply Kelley's covariation model: a student laughs at a joke during class. Describe what consensus, distinctiveness and consistency information would help explain the laughter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Covariation applied", statement: "Three information sources determine whether the laughter is attributed to the joke or the person." },
            ],
            steps: [
              { reasoning: "Consensus: do other students also laugh at this joke?", marks: 1, markCode: "M" },
              { reasoning: "Distinctiveness: does the student laugh at all jokes or only this type?", marks: 1, markCode: "M" },
              { reasoning: "Consistency: does the student always laugh at this joke whenever it is told?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consensus + distinctiveness + consistency — their pattern indicates situational vs dispositional cause.",
            commonErrors: ["Describing the three factors without applying them to the scenario."],
          },
        },
        {
          id: "psych-u4-atq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Of 200 attributions to others' behaviour, 80% were dispositional. How many attributions were situational?",
          response: { type: "numeric", parts: [{ label: "Situational attributions", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary percentage", statement: "Situational share = 100% - dispositional share." },
            ],
            steps: [
              { reasoning: "Situational share = 20% of 200 = 40.", working: "0.20 x 200", marks: 1, markCode: "M" },
              { reasoning: "40 attributions were situational.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40",
            commonErrors: ["Answering 160 (the dispositional count) instead of the situational count."],
          },
        },
        {
          id: "psych-u4-atq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "According to Kelley's covariation model, a purely situational attribution is most strongly supported when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "consensus, distinctiveness and consistency are all high" },
              { id: "b", text: "consensus is low but distinctiveness is high" },
              { id: "c", text: "consistency is low across situations" },
              { id: "d", text: "the person behaves this way in every situation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Covariation pattern", statement: "High consensus + high distinctiveness + high consistency points to the situation." },
            ],
            steps: [
              { reasoning: "All three covariation sources pointing the same way give the strongest attribution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** All three covariation indices high",
            commonErrors: ["Confusing the pattern with the dispositional pattern (low consensus, low distinctiveness, high consistency)."],
          },
        },
        {
          id: "psych-u4-atq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the actor-observer bias and suggest why it occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Actor-observer bias", statement: "Self explained by situation, others by disposition — driven by differing information and self-protection." },
            ],
            steps: [
              { reasoning: "We know our own circumstances, so we explain our actions situationally ('I was late because of traffic').", marks: 1, markCode: "M" },
              { reasoning: "For others we see only behaviour, so we infer disposition ('they are always late').", marks: 1, markCode: "M" },
              { reasoning: "Motivational factors — protecting self-esteem — reinforce the asymmetry.", marks: 1, markCode: "A" },
              { reasoning: "Result: distorted social judgement — others' rudeness attributed to character, our own to circumstances.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Different information + self-protection → self by situation, others by disposition.",
            commonErrors: ["Describing only the pattern without explaining why it occurs."],
          },
        },
        {
          id: "psych-u4-atq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the self-serving bias and explain its psychological function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-serving bias", statement: "Crediting ourselves for successes and blaming external factors for failures." },
            ],
            steps: [
              { reasoning: "Successes are attributed internally ('I am capable'); failures externally ('the exam was unfair').", marks: 1, markCode: "M" },
              { reasoning: "Function: protects and maintains self-esteem.", marks: 1, markCode: "M" },
              { reasoning: "Sustained positive self-concept supports motivation — but distorts accurate self-assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Internal credit for success, external blame for failure — protects self-esteem.",
            commonErrors: ["Confusing it with the fundamental attribution error — self-serving concerns the self."],
          },
        },
        {
          id: "psych-u4-atq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Heider described people as 'naive psychologists' because we:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "conduct formal experiments on each other's behaviour" },
              { id: "b", text: "naturally try to explain the causes of behaviour" },
              { id: "c", text: "always make perfectly accurate attributions" },
              { id: "d", text: "avoid making judgements about others" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Naive psychology", statement: "Heider: people spontaneously attribute causes to behaviour like intuitive scientists." },
            ],
            steps: [
              { reasoning: "Heider's metaphor captures our everyday, informal search for behavioural causes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Naturally explain the causes of behaviour",
            commonErrors: ["Thinking 'naive' means inaccurate — it means informal, not foolish."],
          },
        },
        {
          id: "psych-u4-atq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate whether attribution biases are necessarily maladaptive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biases: costs and benefits", statement: "Attribution biases distort accuracy but serve self-esteem and decision efficiency." },
            ],
            steps: [
              { reasoning: "Costs: the fundamental attribution error misreads situational causes, producing unfair judgements and poorer relationships.", marks: 2, markCode: "M" },
              { reasoning: "Benefits: the self-serving bias protects self-esteem and motivation; quick attributions aid decisions under uncertainty.", marks: 2, markCode: "M" },
              { reasoning: "Self-serving bias can also block learning from failure — a maladaptive side.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: adaptive for the self, potentially maladaptive socially — context-dependent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Biases serve self-protection but distort social judgement — adaptive for self, risky for relationships.",
            commonErrors: ["Arguing biases are always irrational — they have functional value."],
          },
        },
        {
          id: "psych-u4-atq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Kelley's model, 'distinctiveness' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "whether the behaviour occurs consistently across time" },
              { id: "b", text: "whether the person behaves this way only toward this stimulus or in many situations" },
              { id: "c", text: "whether other people behave similarly" },
              { id: "d", text: "the strength of the dispositional cause" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Distinctiveness", statement: "Does the person behave this way only toward this stimulus, or in all situations?" },
            ],
            steps: [
              { reasoning: "Distinctiveness concerns the range of situations that trigger the behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whether the behaviour is specific to this stimulus",
            commonErrors: ["Confusing distinctiveness (situations) with consistency (time)."],
          },
        },
        {
          id: "psych-u4-atq17",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how internal versus external attributions affect our emotional reactions and expectations of a person.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attribution consequences", statement: "Internal attributions imply stable traits and stronger emotion; external ones imply temporary causes." },
            ],
            steps: [
              { reasoning: "Dispositional attribution ('they are lazy') creates stable expectations — we predict the behaviour will recur.", marks: 1, markCode: "M" },
              { reasoning: "It also produces stronger emotion — anger at character rather than sympathy for circumstances.", marks: 1, markCode: "M" },
              { reasoning: "Situational attribution ('they had car trouble') yields temporary expectations and milder emotion.", marks: 1, markCode: "A" },
              { reasoning: "This is why misattribution damages relationships — blame attaches to the person, not the event.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Internal → stable expectations + strong emotion; external → temporary + mild. Shapes relationships.",
            commonErrors: ["Saying attributions have no emotional consequences — they drive blame and forgiveness."],
          },
        },
        {
          id: "psych-u4-atq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe what 'consistency' information tells us in Kelley's covariation model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consistency", statement: "Does the person behave this way reliably across time and situations?" },
            ],
            steps: [
              { reasoning: "Consistency asks whether the behaviour occurs repeatedly over time.", marks: 1, markCode: "M" },
              { reasoning: "Low consensus + low distinctiveness + high consistency supports a dispositional attribution.", marks: 1, markCode: "M" },
              { reasoning: "High consistency is necessary for any strong attribution — a one-off event proves little.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consistency = reliability across time; high consistency is needed for strong attribution.",
            commonErrors: ["Confusing consistency with consensus — one is about time, the other about other people."],
          },
        },
        {
          id: "psych-u4-atq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A team member misses a project deadline. Colleagues say 'they're just disorganised'.",
          parts: [
            { label: "a", prompt: "Identify two attribution biases in the colleagues' explanation.", marks: 2 },
            { label: "b", prompt: "Using Kelley's model, describe what information should be gathered.", marks: 3 },
            { label: "c", prompt: "Evaluate whether a dispositional attribution is justified.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attribution accuracy", statement: "One event cannot establish a trait; covariation information is needed." },
            ],
            steps: [
              { part: "a", reasoning: "Fundamental attribution error — blaming disposition (disorganised) while ignoring situation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Possibly actor-observer bias — judging the colleague's character while excusing oneself.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consensus: do other team members also miss deadlines?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Distinctiveness: does the member miss only this type of task or everything?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consistency: is this a repeated pattern across time or a single event?", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One missed deadline is insufficient evidence for a stable trait.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Situational causes — illness, overload, unclear brief — are plausible and unchecked.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: dispositional attribution is premature; gather covariation data first.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) FAE + actor-observer. (b) Consensus, distinctiveness, consistency. (c) Premature — need pattern of evidence.",
            commonErrors: ["Accepting 'disorganised' as fact — it is an untested dispositional attribution."],
          },
        },
        {
          id: "psych-u4-atq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which bias most directly protects self-esteem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fundamental attribution error" },
              { id: "b", text: "Self-serving bias" },
              { id: "c", text: "Actor-observer bias" },
              { id: "d", text: "Confirmation bias" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-esteem protection", statement: "The self-serving bias exists specifically to buffer self-worth." },
            ],
            steps: [
              { reasoning: "Crediting success internally and blaming failure externally directly protects self-esteem.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Self-serving bias",
            commonErrors: ["Choosing the fundamental attribution error — that concerns others' behaviour, not self-esteem."],
          },
        },
      ],
    },
    {
      id: "psych-u4-attitude-change",
      title: "Attitude change and persuasion",
      skill: "Describe how attitudes form and change, including central/peripheral routes, cognitive dissonance and foot-in-the-door.",
      lesson: {
        sections: [
          {
            heading: "Attitudes and persuasion",
            body: "An **attitude** is a relatively stable evaluation of a person, object or idea along a positive-negative dimension. **Persuasion** changes attitudes through two routes: the **central route** (careful evaluation of argument quality — produces lasting change) and the **peripheral route** (superficial cues like attractiveness, emotion, authority — produces temporary change). Factors enhancing persuasion: credible sources, emotional appeals, repetition, and two-sided arguments for educated audiences.",
          },
          {
            heading: "Cognitive dissonance",
            body: "**Festinger's cognitive dissonance theory (1957)**: when behaviour contradicts beliefs, the resulting discomfort motivates attitude change. In Festinger and Carlsmith's study, participants paid 1 dollar to lie about a boring task reported liking it more than those paid 20 dollars — small payment created dissonance resolved by changing attitude; large payment provided external justification. **Self-perception theory** offers an alternative: we infer attitudes from our behaviour.",
          },
          {
            heading: "Compliance techniques",
            body: "The **foot-in-the-door technique**: get agreement to a small request first, making a larger request more likely — consistency principle. The **door-in-the-face**: start with an unreasonable request, retreat to a smaller one — reciprocity norm. **Low-ball**: get agreement then change terms. These exploit cognitive consistency and social norms rather than direct argument.",
          },
        ],
        keyFormulas: [
          { name: "Persuasion routes", statement: "Central = argument quality; Peripheral = superficial cues" },
          { name: "Cognitive dissonance", statement: "Behaviour contradicts belief → discomfort → attitude change" },
          { name: "Foot-in-the-door", statement: "Small agreement → larger request (consistency)" },
        ],
        workedExample: {
          problem: "Why might someone who publicly commits to a cause come to believe in it more strongly?",
          solution: "Cognitive dissonance: public commitment creates pressure to align private attitudes with stated position — attitude shifts to reduce discomfort.",
        },
      },
      questions: [
        {
          id: "psych-u4-actq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The foot-in-the-door technique works by exploiting:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reciprocity norm" },
              { id: "b", text: "Consistency principle" },
              { id: "c", text: "Social proof" },
              { id: "d", text: "Authority bias" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Foot-in-the-door", statement: "Prior small agreement creates pressure for consistency on larger requests." },
            ],
            steps: [
              { reasoning: "FITD exploits the desire to appear consistent with prior commitments.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Consistency principle",
            commonErrors: ["Confusing FITD with door-in-the-face which uses reciprocity."],
          },
        },
        {
          id: "psych-u4-actq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between the central and peripheral routes to persuasion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "ELM routes", statement: "Central = careful argument evaluation; peripheral = superficial cues." },
            ],
            steps: [
              { reasoning: "Central route: receiver carefully evaluates argument quality and evidence — produces durable attitude change.", marks: 1, markCode: "M" },
              { reasoning: "Peripheral route: relies on cues like source attractiveness, emotion, or authority — produces temporary change.", marks: 1, markCode: "M" },
              { reasoning: "Route taken depends on motivation and ability to process the message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Central = quality evaluation (lasting); peripheral = superficial cues (temporary).",
            commonErrors: ["Saying peripheral persuasion never works — it works for low-involvement situations."],
          },
        },
        {
          id: "psych-u4-actq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain Festinger's cognitive dissonance theory using the one-dollar/twenty-dollar experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cognitive dissonance", statement: "Contradiction between behaviour and belief creates discomfort resolved by attitude change." },
            ],
            steps: [
              { reasoning: "Participants who lied about a boring task for 1 dollar experienced dissonance — lying conflicts with honesty belief.", marks: 1, markCode: "M" },
              { reasoning: "With insufficient external justification (1 dollar), they resolved dissonance by changing attitude — reporting they enjoyed the task.", marks: 1, markCode: "M" },
              { reasoning: "Participants paid 20 dollars had sufficient justification — no dissonance, so no attitude change.", marks: 1, markCode: "R" },
              { reasoning: "This shows attitude change is driven by need to reduce psychological discomfort, not just information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One-dollar group changed attitude (dissonance); twenty-dollar group didn't (justified). Attitude follows insufficient justification.",
            commonErrors: ["Reversing the results — small payment creates more attitude change."],
          },
        },
        {
          id: "psych-u4-actq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A charity wants to increase donations for disaster relief.",
          parts: [
            { label: "a", prompt: "Describe two persuasion techniques the charity could use and the route each relies on.", marks: 3 },
            { label: "b", prompt: "Explain how cognitive dissonance could increase donation rates.", marks: 2 },
            { label: "c", prompt: "Evaluate the ethical concerns of using persuasion techniques in charity appeals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Persuasion ethics", statement: "Techniques can increase donations but may exploit rather than inform donors." },
            ],
            steps: [
              { part: "a", reasoning: "Emotional imagery of suffering victims — peripheral route via emotional arousal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Statistics on lives saved per dollar — central route via argument quality.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Celebrity endorsement or authority figures — peripheral route via source credibility.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dissonance: people who value helping others but haven't donated feel inconsistency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Small donation or public pledge resolves dissonance, then commitment consistency increases future giving.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Concern: emotional manipulation can exploit vulnerability, especially of elderly or distressed donors.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Misleading statistics or guilt-tripping undermines informed consent to donate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethical balance: persuasion for genuine cause is acceptable if honest; deception is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Emotion + stats + celebrity (routes vary). (b) Dissonance + consistency. (c) Acceptable if honest, unethical if manipulative.",
            commonErrors: ["Using guilt to the point of distress — manipulation crosses ethical lines."],
          },
        },
        {
          id: "psych-u4-actq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An attitude is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a temporary emotional reaction to an event" },
              { id: "b", text: "a relatively stable positive or negative evaluation of a person, object or idea" },
              { id: "c", text: "a behaviour directed toward others" },
              { id: "d", text: "a generalised belief about a group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attitude", statement: "A relatively stable evaluation along a positive-negative dimension." },
            ],
            steps: [
              { reasoning: "Attitudes are evaluative and relatively enduring — not momentary reactions or behaviours.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Relatively stable positive/negative evaluation",
            commonErrors: ["Confusing attitudes with behaviours or stereotypes."],
          },
        },
        {
          id: "psych-u4-actq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which route to persuasion typically produces the most durable attitude change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The peripheral route" },
              { id: "b", text: "The central route" },
              { id: "c", text: "The foot-in-the-door technique" },
              { id: "d", text: "The door-in-the-face technique" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Route durability", statement: "Central-route change rests on argument evaluation and lasts longer than peripheral-route change." },
            ],
            steps: [
              { reasoning: "Careful evaluation of evidence produces deeper, more stable attitude change.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Central route",
            commonErrors: ["Choosing peripheral — it works via superficial cues and fades quickly."],
          },
        },
        {
          id: "psych-u4-actq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In a persuasion study, average attitude ratings rose from 3.0 to 4.5 on a 7-point scale after a foot-in-the-door request. What was the increase in rating points?",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Change calculation", statement: "Increase = final rating - initial rating." },
            ],
            steps: [
              { reasoning: "4.5 - 3.0 = 1.5 points.", working: "4.5 - 3.0", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1.5",
            commonErrors: ["Reporting the final rating (4.5) instead of the change."],
          },
        },
        {
          id: "psych-u4-actq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The door-in-the-face technique relies primarily on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the consistency principle" },
              { id: "b", text: "the reciprocity norm" },
              { id: "c", text: "social proof" },
              { id: "d", text: "the scarcity principle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Door-in-the-face", statement: "After refusing a large request, people feel obliged to reciprocate the concession on a smaller one." },
            ],
            steps: [
              { reasoning: "Retreating from an unreasonable request exploits the reciprocity/concession norm.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The reciprocity norm",
            commonErrors: ["Confusing it with foot-in-the-door, which uses consistency."],
          },
        },
        {
          id: "psych-u4-actq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain Bem's self-perception theory as an alternative to cognitive dissonance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-perception theory", statement: "We infer our attitudes by observing our own behaviour, like outsiders do." },
            ],
            steps: [
              { reasoning: "Rather than experiencing dissonance, we simply observe our behaviour and infer the attitude behind it.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'I donated money, so I must care about this cause.'", marks: 1, markCode: "M" },
              { reasoning: "Unlike Festinger, attitude follows behaviour without needing an internal contradiction to resolve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Attitudes are inferred from observed behaviour — no dissonance required.",
            commonErrors: ["Saying self-perception denies behaviour affects attitude — it agrees, via a different mechanism."],
          },
        },
        {
          id: "psych-u4-actq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Of 80 participants exposed to a persuasive message, 48 showed lasting attitude change through the central route. What percentage used the central route?",
          response: { type: "numeric", parts: [{ label: "Central route percentage", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage = part / total x 100." },
            ],
            steps: [
              { reasoning: "48 / 80 x 100 = 60%.", working: "48 / 80 x 100", marks: 1, markCode: "M" },
              { reasoning: "60% changed attitudes via the central route.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60%",
            commonErrors: ["Answering 40% (the peripheral-route share)."],
          },
        },
        {
          id: "psych-u4-actq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The peripheral route to persuasion is most likely when the receiver:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is highly motivated and able to evaluate arguments" },
              { id: "b", text: "has low motivation or limited ability to process the message" },
              { id: "c", text: "faces a detailed two-sided argument" },
              { id: "d", text: "holds strong prior attitudes on the topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elaboration likelihood", statement: "Low motivation/ability → peripheral route; high motivation/ability → central route." },
            ],
            steps: [
              { reasoning: "Without motivation or capacity for careful evaluation, receivers rely on superficial cues.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low motivation or ability to process",
            commonErrors: ["Choosing strong prior attitudes — they can motivate central processing."],
          },
        },
        {
          id: "psych-u4-actq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the door-in-the-face compliance technique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Door-in-the-face", statement: "A large refused request is followed by a smaller target request, exploiting the concession norm." },
            ],
            steps: [
              { reasoning: "The persuader first makes an unreasonably large request that is likely to be refused.", marks: 1, markCode: "M" },
              { reasoning: "They then 'retreat' to a smaller target request.", marks: 1, markCode: "M" },
              { reasoning: "The target feels obliged to reciprocate the concession — agreeing to the smaller request.", marks: 1, markCode: "A" },
              { reasoning: "A contrast effect makes the smaller request seem reasonable compared with the first.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Large refusal → smaller request → concession norm + contrast effect produce agreement.",
            commonErrors: ["Confusing it with foot-in-the-door — the request order is reversed."],
          },
        },
        {
          id: "psych-u4-actq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe three factors that enhance the effectiveness of persuasive messages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Persuasion factors", statement: "Source credibility, emotional appeal, repetition and argument structure shape persuasion." },
            ],
            steps: [
              { reasoning: "Credible, expert sources are more persuasive than unknown or biased ones.", marks: 1, markCode: "M" },
              { reasoning: "Emotional appeals and repetition strengthen message impact.", marks: 1, markCode: "M" },
              { reasoning: "Two-sided arguments work best for educated audiences; timing and receiver involvement also matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Credible source + emotion + repetition + appropriate argument structure.",
            commonErrors: ["Listing techniques without linking them to the receiver's motivation/ability."],
          },
        },
        {
          id: "psych-u4-actq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "After agreeing to a small request, the foot-in-the-door technique makes people more likely to agree to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a completely unrelated large request" },
              { id: "b", text: "a larger related request consistent with the first" },
              { id: "c", text: "a smaller request than the first" },
              { id: "d", text: "nothing further at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Foot-in-the-door", statement: "Prior small agreement builds commitment to consistent, related larger requests." },
            ],
            steps: [
              { reasoning: "The technique escalates within the same behavioural domain — consistency drives further compliance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A larger related request",
            commonErrors: ["Thinking any unrelated request works — requests should be consistent."],
          },
        },
        {
          id: "psych-u4-actq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate Festinger and Carlsmith's cognitive dissonance experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dissonance paradigm", statement: "Insufficient external justification forces attitude change to resolve discomfort." },
            ],
            steps: [
              { reasoning: "Strength: the $1 vs $20 manipulation cleanly tests the role of justification — small payment produced more attitude change.", marks: 2, markCode: "M" },
              { reasoning: "Ethical issue: participants were deceived about the study's true purpose.", marks: 1, markCode: "M" },
              { reasoning: "Alternative explanation: self-perception theory accounts for the same pattern without invoking dissonance.", marks: 2, markCode: "A" },
              { reasoning: "Conclusion: the study supports dissonance but is not definitive — replications and alternatives qualify it.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Clever justification manipulation, but deception and rival theories limit conclusiveness.",
            commonErrors: ["Ignoring that self-perception theory offers a competing explanation."],
          },
        },
        {
          id: "psych-u4-actq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Cognitive dissonance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "harmony between beliefs and behaviour" },
              { id: "b", text: "discomfort from contradictory beliefs or behaviour inconsistent with beliefs" },
              { id: "c", text: "persuasion through emotional cues" },
              { id: "d", text: "conformity to group norms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cognitive dissonance", statement: "Psychological discomfort when cognitions or behaviour contradict each other." },
            ],
            steps: [
              { reasoning: "Dissonance is the aversive state produced by inconsistency — resolved by changing attitude or behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Discomfort from contradictory beliefs or inconsistent behaviour",
            commonErrors: ["Confusing dissonance with the peripheral route of persuasion."],
          },
        },
        {
          id: "psych-u4-actq17",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how public commitment can strengthen attitude change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Public commitment", statement: "Stating a position publicly creates accountability, pressuring private attitudes to align." },
            ],
            steps: [
              { reasoning: "Public statements create social accountability — backing down costs face and credibility.", marks: 1, markCode: "M" },
              { reasoning: "If private doubts remain, dissonance arises between stated position and true belief.", marks: 1, markCode: "M" },
              { reasoning: "The easiest resolution is shifting the private attitude to match the public one.", marks: 1, markCode: "A" },
              { reasoning: "The consistency principle then reinforces the new attitude in future behaviour.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Public commitment → accountability + dissonance → private attitude aligns with stated position.",
            commonErrors: ["Saying public commitment only affects behaviour — it changes attitudes via dissonance."],
          },
        },
        {
          id: "psych-u4-actq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish the foot-in-the-door and door-in-the-face techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "FITD vs DITF", statement: "Opposite request sequences exploiting different social norms." },
            ],
            steps: [
              { reasoning: "Foot-in-the-door: small request first, then a larger one — exploits consistency.", marks: 1, markCode: "M" },
              { reasoning: "Door-in-the-face: large refused request first, then a smaller one — exploits reciprocity/concession.", marks: 1, markCode: "M" },
              { reasoning: "The order of requests and the norm exploited are the key differences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "FITD = small→large (consistency); DITF = large→small (reciprocity).",
            commonErrors: ["Reversing which technique uses which norm."],
          },
        },
        {
          id: "psych-u4-actq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An airline wants passengers to accept new baggage fees without generating anger.",
          parts: [
            { label: "a", prompt: "Describe two persuasion techniques the airline could use and the route each relies on.", marks: 3 },
            { label: "b", prompt: "Explain how cognitive dissonance could increase acceptance of the fees.", marks: 2 },
            { label: "c", prompt: "Evaluate the ethics of using such persuasion techniques.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Persuasion ethics", statement: "Techniques can shift attitudes but may inform or manipulate depending on honesty." },
            ],
            steps: [
              { part: "a", reasoning: "Emotional framing — fees fund better service and comfort — peripheral route via emotion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Transparent cost statistics — breakdown of fuel and staffing costs — central route via argument quality.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Authority endorsement — safety or pilot association backing — peripheral route via credibility cues.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dissonance: valuing the airline while resenting fees creates discomfort.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Small initial acceptance resolves dissonance; consistency then increases future acceptance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Honest central-route information respects passengers' autonomy and builds trust.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Hidden or misleading peripheral appeals exploit rather than inform — undermining informed choice.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: persuasion is ethical when transparent; deceptive manipulation is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Emotion + statistics + authority endorsement. (b) Dissonance + consistency. (c) Ethical if honest, manipulative if deceptive.",
            commonErrors: ["Treating all persuasion as manipulation — honest argument-based persuasion is legitimate."],
          },
        },
        {
          id: "psych-u4-actq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Relying on a celebrity's attractiveness rather than argument quality illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the central route to persuasion" },
              { id: "b", text: "the peripheral route to persuasion" },
              { id: "c", text: "cognitive dissonance" },
              { id: "d", text: "the foot-in-the-door technique" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peripheral route", statement: "Persuasion through superficial cues like attractiveness, emotion or authority." },
            ],
            steps: [
              { reasoning: "Source attractiveness is a classic peripheral cue, bypassing argument evaluation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Peripheral route",
            commonErrors: ["Choosing central route — that requires evaluating argument quality."],
          },
        },
      ],
    },
  ],
};
