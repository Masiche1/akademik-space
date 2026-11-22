import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "psych-u3-lesson-3-3",
  code: "3-3",
  title: "Motivation and Emotion",
  goal: "I CAN describe major theories of motivation and emotion and evaluate their strengths and limitations.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Motivation", definition: "The processes that initiate, guide and sustain goal-directed behaviour." },
    { term: "Drive theory", definition: "Hull's theory that behaviour is motivated by internal drives (hunger, thirst) seeking reduction." },
    { term: "Arousal theory", definition: "Behaviour is motivated by the need to maintain an optimal level of physiological arousal." },
    { term: "Maslow's hierarchy", definition: "A pyramid of needs from physiological to self-actualisation; lower needs must be met first." },
    { term: "James-Lange theory", definition: "Emotion is the perception of bodily changes — we feel afraid because we tremble." },
    { term: "Cannon-Bard theory", definition: "Emotion and physiological arousal occur simultaneously and independently." },
  ],
  concepts: [
    {
      id: "psych-u3-motivation",
      title: "Theories of motivation",
      skill: "Describe drive reduction, arousal, incentive and Maslow's hierarchy theories of motivation and evaluate them.",
      lesson: {
        sections: [
          {
            heading: "Drive reduction and arousal",
            body: "**Drive theory (Hull)** proposes behaviour is motivated by **drives** — internal states of tension (hunger, thirst) that seek reduction. A drive arises from a need; satisfying it restores homeostasis. **Arousal theory (Yerkes-Dodson)** proposes an **optimal level of arousal** — performance is best at moderate arousal and declines at very low (boredom) or very high (anxiety) levels. People differ in baseline arousal needs: sensation seekers chase stimulation, others avoid it.",
          },
          {
            heading: "Incentive theory",
            body: "**Incentive theory** argues behaviour is pulled by external rewards rather than pushed by internal drives — the attractiveness of the goal motivates action. This explains why people work hard for bonuses, why students study for grades, and why some behaviours persist even without biological need. Incentives can be intrinsic (enjoyment, mastery) or extrinsic (money, praise).",
          },
          {
            heading: "Maslow's hierarchy of needs",
            body: "**Maslow (1943)** proposed a hierarchy: **physiological** needs (food, water) at the base, then **safety**, **love/belonging**, **esteem**, and finally **self-actualisation** at the top. Lower needs must be reasonably satisfied before higher needs motivate behaviour. Criticisms: the strict hierarchy is not always observed — artists starve for their work; self-actualisation is vaguely defined and hard to measure; culture affects which needs are prioritised.",
          },
        ],
        keyFormulas: [
          { name: "Drive theory", statement: "Need → drive (tension) → behaviour → satisfaction → homeostasis" },
          { name: "Maslow's hierarchy", statement: "Physiological → Safety → Love → Esteem → Self-actualisation" },
        ],
        workedExample: {
          problem: "Why do people eat beyond hunger and exercise beyond necessity?",
          solution: "Incentive theory explains eating for taste/social reasons and exercising for health goals or enjoyment — external incentives pull behaviour beyond drive reduction.",
        },
      },
      questions: [
        {
          id: "psych-u3-mvq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Maslow, which need must be satisfied before esteem needs become motivating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physiological needs" },
              { id: "b", text: "Safety needs" },
              { id: "c", text: "Love and belonging" },
              { id: "d", text: "Self-actualisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Maslow's hierarchy", statement: "Order: physiological → safety → love/belonging → esteem → self-actualisation." },
            ],
            steps: [
              { reasoning: "Love/belonging precedes esteem in the hierarchy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Love and belonging",
            commonErrors: ["Placing esteem above self-actualisation — esteem is fourth, self-actualisation fifth."],
          },
        },
        {
          id: "psych-u3-mvq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the Yerkes-Dodson law of arousal and performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Yerkes-Dodson", statement: "Performance peaks at moderate arousal; too low or too high arousal impairs it." },
            ],
            steps: [
              { reasoning: "At low arousal, performance is poor due to boredom and inattention.", marks: 1, markCode: "M" },
              { reasoning: "At moderate arousal, performance is optimal — alert but not overwhelmed.", marks: 1, markCode: "M" },
              { reasoning: "At very high arousal, anxiety impairs performance — the inverted-U relationship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inverted-U: best performance at moderate arousal, worse at extremes.",
            commonErrors: ["Assuming more arousal always improves performance."],
          },
        },
        {
          id: "psych-u3-mvq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare drive reduction theory and incentive theory as explanations of motivation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Push vs pull", statement: "Drive theory = internal push (tension reduction); incentive theory = external pull (reward attraction)." },
            ],
            steps: [
              { reasoning: "Drive theory explains behaviour as reducing internal needs — hunger motivates eating.", marks: 1, markCode: "M" },
              { reasoning: "Incentive theory explains behaviour as attracted to external rewards — eating dessert for pleasure.", marks: 1, markCode: "M" },
              { reasoning: "Drive theory struggles with behaviours lacking biological need (gambling, altruism); incentive theory handles these.", marks: 1, markCode: "R" },
              { reasoning: "In practice both operate — drives create needs, incentives determine which goal-directed behaviour is chosen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Drive = internal push; incentive = external pull. Complementary, not competing.",
            commonErrors: ["Claiming one theory explains all motivation — each has domains."],
          },
        },
        {
          id: "psych-u3-mvq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student feels unmotivated to revise despite upcoming exams.",
          parts: [
            { label: "a", prompt: "Explain the student's lack of motivation using two theories.", marks: 3 },
            { label: "b", prompt: "Describe how arousal theory might explain poor exam performance even when prepared.", marks: 2 },
            { label: "c", prompt: "Evaluate Maslow's hierarchy for explaining student motivation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motivation in context", statement: "Different theories explain different aspects of motivated behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Drive theory: no immediate physiological need creates urgency — revision lacks a biological drive.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Incentive theory: if the reward (grade) seems distant or unattainable, motivation is low.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Maslow: if esteem or safety needs are threatened, higher achievement motivation suffers.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "High exam anxiety raises arousal beyond optimal — Yerkes-Dodson predicts performance decline.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The student may know material but fail to retrieve it under excessive arousal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: explains why basic needs (sleep, security) must be met before studying effectively.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: hierarchy is not rigid — students often pursue esteem/self-actualisation despite unmet lower needs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Self-actualisation is vague and culturally specific — hard to apply universally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Low drive + weak incentive + unmet needs. (b) Anxiety raises arousal past optimum. (c) Useful but not rigid.",
            commonErrors: ["Assuming all motivation is the same type — theories address different mechanisms."],
          },
        },
        {
          id: "psych-u3-mvq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Hull's drive reduction theory, a drive is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An internal state of tension arising from a need" },
              { id: "b", text: "A learned association between stimuli" },
              { id: "c", text: "An optimal level of arousal" },
              { id: "d", text: "An external reward that pulls behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Drive", statement: "An internal state of tension (e.g. hunger) that motivates behaviour to restore homeostasis." },
            ],
            steps: [
              { reasoning: "A drive is internal tension from an unmet need — e.g. hunger drive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An internal state of tension arising from a need",
            commonErrors: ["Confusing drives (internal) with incentives (external)."],
          },
        },
        {
          id: "psych-u3-mvq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Incentive theory argues that behaviour is primarily motivated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fulfilment of a strict need hierarchy" },
              { id: "b", text: "The maintenance of optimal arousal" },
              { id: "c", text: "The attraction of external rewards or goals" },
              { id: "d", text: "The reduction of internal drives" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Incentive theory", statement: "Behaviour is pulled by the attractiveness of external rewards rather than pushed by internal needs." },
            ],
            steps: [
              { reasoning: "Incentive theory = external pull — the goal's attractiveness motivates action.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The attraction of external rewards or goals",
            commonErrors: ["Confusing incentive theory with drive theory — pull vs push."],
          },
        },
        {
          id: "psych-u3-mvq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to the Yerkes-Dodson law, performance is optimal at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A moderate level of arousal" },
              { id: "b", text: "The highest possible arousal" },
              { id: "c", text: "Zero arousal" },
              { id: "d", text: "The lowest possible arousal" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Yerkes-Dodson", statement: "Performance peaks at moderate arousal — an inverted-U relationship." },
            ],
            steps: [
              { reasoning: "Moderate arousal = alert but not overwhelmed — optimal performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A moderate level of arousal",
            commonErrors: ["Assuming maximum arousal gives maximum performance."],
          },
        },
        {
          id: "psych-u3-mvq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Maslow's hierarchy contains five levels of needs. If physiological needs are level 1 and self-actualisation is level 5, what level number is esteem?",
          response: {
            type: "numeric",
            parts: [
              { label: "Level number of esteem needs", answer: 4 },
              { label: "Number of levels below esteem", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Maslow's hierarchy", statement: "1 physiological, 2 safety, 3 love/belonging, 4 esteem, 5 self-actualisation." },
            ],
            steps: [
              { reasoning: "Order: physiological → safety → love → esteem → self-actualisation; esteem is 4th.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Three levels (physiological, safety, love) sit below esteem.", working: "3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Esteem = level 4; 3 levels below it.",
            commonErrors: ["Placing esteem above love/belonging — esteem is fourth, not third."],
          },
        },
        {
          id: "psych-u3-mvq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the sequence of events in Hull's drive reduction theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drive reduction", statement: "Need → drive (tension) → motivated behaviour → satisfaction → homeostasis." },
            ],
            steps: [
              { reasoning: "A biological or psychological need arises (e.g. hunger).", marks: 1, markCode: "M" },
              { reasoning: "The need creates a drive — an internal state of tension that motivates behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Goal-directed behaviour reduces the drive, restoring homeostasis — e.g. eating relieves hunger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Need → drive → behaviour → satisfaction → homeostasis.",
            commonErrors: ["Starting with behaviour rather than the need that creates the drive."],
          },
        },
        {
          id: "psych-u3-mvq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between intrinsic and extrinsic incentives, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intrinsic vs extrinsic", statement: "Intrinsic incentives come from within (enjoyment, mastery); extrinsic from outside (money, praise)." },
            ],
            steps: [
              { reasoning: "Intrinsic incentives are internal rewards — pleasure, satisfaction or mastery from the activity itself.", marks: 1, markCode: "M" },
              { reasoning: "Example: a musician plays for the joy of performing.", marks: 1, markCode: "M" },
              { reasoning: "Extrinsic incentives are external rewards — money, grades, praise; example: working overtime for a bonus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intrinsic = internal enjoyment/mastery; extrinsic = external rewards like money or praise.",
            commonErrors: ["Assuming all incentives are extrinsic — intrinsic motivation is a major category."],
          },
        },
        {
          id: "psych-u3-mvq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why Maslow's strict hierarchy of needs is difficult to support empirically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Critique of Maslow", statement: "The strict ordering is not always observed — people pursue higher needs despite unmet lower ones." },
            ],
            steps: [
              { reasoning: "Artists and activists often sacrifice physiological security for esteem or self-actualisation — the hierarchy is not rigid.", marks: 1, markCode: "M" },
              { reasoning: "Self-actualisation is vaguely defined and difficult to measure — it cannot be operationalised easily.", marks: 1, markCode: "M" },
              { reasoning: "Cultural differences mean need priorities vary — individualist vs collectivist cultures rank belonging and esteem differently.", marks: 1, markCode: "R" },
              { reasoning: "Needs can operate simultaneously rather than strictly in sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maslow's ordering is not rigid, self-actualisation is unmeasurable, and culture reshapes priorities.",
            commonErrors: ["Treating the hierarchy as a proven law rather than a theoretical model."],
          },
        },
        {
          id: "psych-u3-mvq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A manager notices that employees who receive unexpected bonuses work harder for a few weeks, but the effect fades quickly.",
          parts: [
            { label: "a", prompt: "Explain this pattern using incentive theory and reinforcement principles.", marks: 4 },
            { label: "b", prompt: "Explain how Maslow's hierarchy might account for what motivates these employees long-term.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motivation interplay", statement: "Extrinsic incentives pull behaviour briefly; deeper needs sustain long-term motivation." },
            ],
            steps: [
              { part: "a", reasoning: "Bonuses are extrinsic incentives — external rewards that pull increased effort.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "If bonuses become expected or routine, their incentive value drops — habituation reduces motivation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Intermittent bonuses act like partial reinforcement — but if predictability rises, persistence falls.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "The fading effect suggests the bonus addresses surface motivation, not deeper needs.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Maslow: if basic needs (salary security, belonging, esteem) are met, employees seek higher fulfilment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Long-term motivation requires esteem (recognition, responsibility) and self-actualisation (meaningful work).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Job design offering autonomy and mastery addresses higher needs better than bonuses.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "However, the hierarchy is not rigid — individual differences in need priorities exist.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Bonuses are fading extrinsic incentives. (b) Long-term motivation needs esteem and self-actualisation, not just money.",
            commonErrors: ["Assuming bigger bonuses always fix motivation — diminishing returns and deeper needs intervene."],
          },
        },
        {
          id: "psych-u3-mvq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Arousal theory predicts that a student who feels too anxious before an exam is experiencing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complete absence of arousal" },
              { id: "b", text: "Stable homeostasis" },
              { id: "c", text: "Arousal below the optimal level" },
              { id: "d", text: "Arousal above the optimal level" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Yerkes-Dodson", statement: "Excessive arousal (anxiety) impairs performance — above the optimum." },
            ],
            steps: [
              { reasoning: "High anxiety = arousal beyond optimal — performance declines.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Arousal above the optimal level",
            commonErrors: ["Assuming all anxiety is bad — moderate arousal can enhance performance."],
          },
        },
        {
          id: "psych-u3-mvq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "On a scale of 1-10 for optimal performance, a task requiring high skill has an optimal arousal point of 6, while a simple task has an optimal of 4. For the complex task, what is the arousal value 2 points above its optimum?",
          response: {
            type: "numeric",
            parts: [
              { label: "Arousal 2 points above the complex-task optimum", answer: 8 },
              { label: "Difference between the two optimal arousal points", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Yerkes-Dodson", statement: "Optimal arousal is lower for complex tasks; exceeding it impairs performance." },
            ],
            steps: [
              { reasoning: "Complex task optimum = 6; 6 + 2 = 8.", working: "6+2=8", marks: 1, markCode: "M" },
              { reasoning: "Difference between optima = 6 - 4 = 2.", working: "6-4=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "8; difference of 2.",
            commonErrors: ["Adding 2 to the wrong baseline — use the complex task's optimum of 6."],
          },
        },
        {
          id: "psych-u3-mvq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate incentive theory as an explanation of human motivation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Incentive theory evaluation", statement: "Incentive theory explains reward-seeking but struggles with intrinsically motivated and drive-based behaviour." },
            ],
            steps: [
              { reasoning: "Strength: explains behaviours without biological need — gambling, altruism, achievement striving for rewards.", marks: 1, markCode: "M" },
              { reasoning: "Strength: accounts for why incentives change behaviour quickly — bonuses, grades, promotions work.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: cannot explain behaviour performed for its own sake — intrinsic motivation needs no external reward.", marks: 1, markCode: "R" },
              { reasoning: "Also ignores internal drives — hunger motivates eating regardless of incentives; theories complement rather than compete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Incentive theory explains reward-seeking well but misses intrinsic motivation and biological drives.",
            commonErrors: ["Claiming incentives explain all motivation — intrinsic and drive-based behaviour remain."],
          },
        },
        {
          id: "psych-u3-mvq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A hiker lost in the mountains focuses first on finding water and shelter before worrying about reaching the summit. According to Maslow, this is because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-actualisation is the easiest need to fulfil" },
              { id: "b", text: "Achievement motives are always strongest" },
              { id: "c", text: "Physiological and safety needs must be satisfied before higher needs motivate behaviour" },
              { id: "d", text: "All needs are satisfied simultaneously" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Maslow's hierarchy", statement: "Lower needs (physiological, safety) must be reasonably satisfied before higher needs motivate behaviour." },
            ],
            steps: [
              { reasoning: "Water and shelter are physiological/safety needs — they dominate until met; summit achievement is a higher need.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Basic needs must be satisfied before higher needs motivate behaviour",
            commonErrors: ["Assuming achievement motivation always dominates — Maslow places it above basic needs."],
          },
        },
      ],
    },
    {
      id: "psych-u3-emotion",
      title: "Theories of emotion",
      skill: "Describe James-Lange, Cannon-Bard and Schachter-Singer theories of emotion and evaluate them.",
      lesson: {
        sections: [
          {
            heading: "James-Lange theory",
            body: "**William James and Carl Lange (1880s)** proposed emotion follows physiological arousal: we do not tremble because we are afraid — we are afraid **because** we tremble. The sequence is stimulus → physiological response → emotion. Evidence: people report stronger emotions when arousal is artificially heightened; people with reduced bodily feedback (e.g. spinal injury) sometimes report blunted emotions — though this evidence is mixed.",
          },
          {
            heading: "Cannon-Bard and Schachter-Singer",
            body: "**Walter Cannon and Philip Bard (1927)** argued emotion and arousal occur **simultaneously and independently** — the thalamus sends signals to both cortex (emotion experience) and body (arousal). **Stanley Schachter and Jerome Singer (1962)** proposed a two-factor theory: emotion = **physiological arousal + cognitive label**. The same arousal (e.g. racing heart) can be labelled as excitement or fear depending on context — explaining why misattributed arousal can be reinterpreted.",
          },
          {
            heading: "Evaluating emotion theories",
            body: "James-Lange explains emotional intensity through arousal but struggles with rapid, distinct emotions (fear vs anger produce similar arousal). Cannon-Bard explains simultaneity but lacks detail on cognitive appraisal. Schachter-Singer elegantly explains misattribution and context effects but is hard to test — arousal and cognition are difficult to separate experimentally. Modern theories (appraisal theory) combine physiological, cognitive and neural components.",
          },
        ],
        keyFormulas: [
          { name: "James-Lange", statement: "Stimulus → arousal → emotion (we feel because we react)" },
          { name: "Cannon-Bard", statement: "Stimulus → arousal + emotion simultaneously" },
          { name: "Schachter-Singer", statement: "Emotion = arousal + cognitive label" },
        ],
        workedExample: {
          problem: "A person on a shaky bridge misattributes their arousal as fear of heights rather than fear of falling. Explain.",
          solution: "Schachter-Singer: the arousal (racing heart) is ambiguous; the cognitive label ('heights are scary') determines the emotion experienced — misattribution of arousal source.",
        },
      },
      questions: [
        {
          id: "psych-u3-eoq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the James-Lange theory, we feel afraid:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simultaneously with physiological arousal" },
              { id: "b", text: "Before any physiological response" },
              { id: "c", text: "Only after cognitive appraisal" },
              { id: "d", text: "Because we notice our physiological response" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "James-Lange", statement: "Emotion is the perception of bodily changes — feeling follows reaction." },
            ],
            steps: [
              { reasoning: "James-Lange: stimulus → bodily response → emotion experienced.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Because we notice our physiological response",
            commonErrors: ["Reversing the sequence — James-Lange puts arousal before emotion."],
          },
        },
        {
          id: "psych-u3-eoq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the two factors in Schachter-Singer's theory of emotion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Schachter-Singer", statement: "Emotion = physiological arousal + cognitive interpretation of that arousal." },
            ],
            steps: [
              { reasoning: "First factor: physiological arousal — a general state of activation (racing heart, sweating).", marks: 1, markCode: "M" },
              { reasoning: "Second factor: cognitive label — the mind interprets the arousal in context (e.g. 'this is fear').", marks: 1, markCode: "M" },
              { reasoning: "The same arousal can produce different emotions depending on the label applied.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arousal + cognitive label = emotion; same arousal can mean different emotions.",
            commonErrors: ["Omitting the cognitive component — arousal alone is not emotion in this theory."],
          },
        },
        {
          id: "psych-u3-eoq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Cannon-Bard theory differs from the James-Lange theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emotion timing", statement: "James-Lange: arousal → emotion; Cannon-Bard: simultaneous independent processes." },
            ],
            steps: [
              { reasoning: "James-Lange: physiological changes precede and cause the emotional experience.", marks: 1, markCode: "M" },
              { reasoning: "Cannon-Bard: the thalamus sends simultaneous signals to cortex (emotion) and body (arousal) — they occur together.", marks: 1, markCode: "M" },
              { reasoning: "Key difference: in Cannon-Bard, emotion does not depend on noticing bodily changes.", marks: 1, markCode: "R" },
              { reasoning: "This better explains why different emotions (fear vs anger) can have similar arousal patterns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "James-Lange: arousal causes emotion; Cannon-Bard: they occur simultaneously and independently.",
            commonErrors: ["Saying Cannon-Bard removes physiology — arousal still occurs, just independently."],
          },
        },
        {
          id: "psych-u3-eoq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher injects participants with adrenaline (arousal) then places them either with an angry confederate or a euphoric one.",
          parts: [
            { label: "a", prompt: "Predict the emotional outcome for each group using Schachter-Singer theory.", marks: 2 },
            { label: "b", prompt: "Explain how this design tests the two-factor theory of emotion.", marks: 3 },
            { label: "c", prompt: "Evaluate the ethical problems with this type of experiment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Misattribution of arousal", statement: "Same arousal labelled differently by context produces different emotions." },
            ],
            steps: [
              { part: "a", reasoning: "With the angry confederate, participants label arousal as anger/irritation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "With the euphoric confederate, the same arousal is labelled as excitement/happiness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Adrenaline standardises arousal across participants, isolating the cognitive label as the variable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "If emotion differs by confederate type despite identical arousal, cognition determines the emotion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This directly tests whether arousal alone produces emotion (it doesn't — label matters).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Deception: participants are not told about the injection's true purpose — needs debriefing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Potential harm: adrenaline can cause anxiety, palpitations; vulnerable individuals at risk.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Right to withdraw must be genuine — participants experiencing distress cannot easily leave.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Anger vs euphoria from same arousal. (b) Tests arousal+label. (c) Deception, drug risks, withdrawal concerns.",
            commonErrors: ["Assuming adrenaline itself creates a specific emotion — it only provides arousal."],
          },
        },
        {
          id: "psych-u3-eoq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the Cannon-Bard theory, emotion and physiological arousal:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Require a cognitive label" },
              { id: "b", text: "Only occur after appraisal" },
              { id: "c", text: "Occur simultaneously and independently" },
              { id: "d", text: "Occur sequentially, arousal first" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cannon-Bard", statement: "Emotion and arousal are simultaneous, independent processes triggered together." },
            ],
            steps: [
              { reasoning: "Cannon-Bard: thalamus signals cortex and body at once — emotion and arousal are parallel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Occur simultaneously and independently",
            commonErrors: ["Confusing Cannon-Bard with James-Lange — Cannon-Bard rejects arousal-first sequencing."],
          },
        },
        {
          id: "psych-u3-eoq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Schachter-Singer's two-factor theory, emotion is produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Facial expressions alone" },
              { id: "b", text: "Physiological arousal alone" },
              { id: "c", text: "Cognitive appraisal alone" },
              { id: "d", text: "The combination of arousal and a cognitive label" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Schachter-Singer", statement: "Emotion = physiological arousal + cognitive interpretation of that arousal." },
            ],
            steps: [
              { reasoning: "Two factors are required: arousal plus the cognitive label applied to it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Arousal plus a cognitive label",
            commonErrors: ["Omitting one factor — arousal alone or cognition alone does not produce emotion in this theory."],
          },
        },
        {
          id: "psych-u3-eoq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Misattribution of arousal occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physiological arousal is completely absent" },
              { id: "b", text: "Arousal from one source is labelled as caused by another" },
              { id: "c", text: "A person feels no emotion at all" },
              { id: "d", text: "Two different emotions occur simultaneously" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Misattribution", statement: "The cognitive label assigned to arousal does not match its actual source — e.g. bridge fear attributed to heights." },
            ],
            steps: [
              { reasoning: "Misattribution = arousal's real cause is mislabelled, changing the emotion experienced.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Arousal from one source is labelled as caused by another",
            commonErrors: ["Confusing misattribution with suppression — the emotion is relabelled, not hidden."],
          },
        },
        {
          id: "psych-u3-eoq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many distinct physiological-emotional theories are compared in this lesson (James-Lange, Cannon-Bard, Schachter-Singer)?",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of theories", answer: 3 },
              { label: "Number of factors in Schachter-Singer's theory", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Emotion theories", statement: "Three major theories: James-Lange, Cannon-Bard and Schachter-Singer (two-factor)." },
            ],
            steps: [
              { reasoning: "James-Lange, Cannon-Bard, Schachter-Singer = 3 theories.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Schachter-Singer has 2 factors: arousal and cognitive label.", working: "2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "3 theories; 2 factors.",
            commonErrors: ["Counting appraisal theory as a fourth — it is mentioned only as a modern extension."],
          },
        },
        {
          id: "psych-u3-eoq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the sequence proposed by the James-Lange theory of emotion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "James-Lange", statement: "Stimulus → physiological response → emotional experience." },
            ],
            steps: [
              { reasoning: "An emotional stimulus is encountered (e.g. seeing a bear).", marks: 1, markCode: "M" },
              { reasoning: "The body produces an automatic physiological response (trembling, racing heart).", marks: 1, markCode: "M" },
              { reasoning: "The brain perceives these bodily changes and experiences the emotion — we feel afraid because we tremble.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stimulus → bodily response → emotion; feeling follows reaction.",
            commonErrors: ["Reversing the order — James-Lange puts physiology before emotion."],
          },
        },
        {
          id: "psych-u3-eoq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how the Schachter-Singer theory accounts for why the same arousal can produce different emotions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-factor theory", statement: "Arousal is general; the cognitive label determines which emotion is experienced." },
            ],
            steps: [
              { reasoning: "Arousal (racing heart, sweating) is a general, undifferentiated state.", marks: 1, markCode: "M" },
              { reasoning: "The cognitive system labels the arousal based on context — 'this is excitement' vs 'this is fear'.", marks: 1, markCode: "M" },
              { reasoning: "Different labels produce different emotions from identical physiology — context determines the experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arousal is ambiguous; the cognitive label applied in context determines whether it is felt as fear, excitement or anger.",
            commonErrors: ["Assuming arousal has a fixed emotional meaning — the label is what matters."],
          },
        },
        {
          id: "psych-u3-eoq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the James-Lange theory of emotion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "James-Lange evaluation", statement: "Strong on explaining emotional intensity via arousal but weak on distinguishing similar-arousal emotions." },
            ],
            steps: [
              { reasoning: "Strength: explains why artificially heightened arousal intensifies emotion — adrenaline amplifies feelings.", marks: 1, markCode: "M" },
              { reasoning: "Strength: feedback from facial expressions and posture can sustain or modify emotion.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: different emotions (fear vs anger) produce similar arousal patterns — physiology alone cannot distinguish them.", marks: 1, markCode: "R" },
              { reasoning: "Evidence from spinal injury patients reporting blunted emotion is mixed and inconclusive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "James-Lange links emotion to bodily feedback but cannot distinguish emotions sharing similar arousal.",
            commonErrors: ["Claiming the theory is fully disproven — it explains intensity well but not emotional quality."],
          },
        },
        {
          id: "psych-u3-eoq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A person on a suspension bridge misattributes their racing heart as fear of heights rather than fear of the swaying bridge. Later, they feel attraction to a person they meet on a similar bridge.",
          parts: [
            { label: "a", prompt: "Explain the misattribution using Schachter-Singer theory.", marks: 3 },
            { label: "b", prompt: "Explain how the same theory accounts for the attraction on the bridge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Misattribution of arousal", statement: "Ambiguous arousal is labelled by context — the label determines the emotion experienced." },
            ],
            steps: [
              { part: "a", reasoning: "The bridge produces arousal (racing heart) from the physical danger of swaying.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The cognitive label 'height' or 'heights are scary' is applied — the true source (danger of falling) is misattributed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The labelled emotion is experienced as fear of heights.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Meeting someone on the bridge produces the same arousal state.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The cognitive label shifts to 'attraction' because a desirable person is present — context reinterprets the arousal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The same physiology produces a completely different emotion depending on the cognitive label.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Arousal relabelled as height fear. (b) Same arousal relabelled as attraction — context determines emotion.",
            commonErrors: ["Assuming the arousal itself differs — it is the same; only the label changes."],
          },
        },
        {
          id: "psych-u3-eoq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which theory proposes that emotion and arousal are sent simultaneously from the thalamus to both cortex and body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "James-Lange" },
              { id: "b", text: "Schachter-Singer" },
              { id: "c", text: "Drive reduction" },
              { id: "d", text: "Cannon-Bard" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cannon-Bard", statement: "Thalamus sends simultaneous signals to cortex (emotion) and body (arousal)." },
            ],
            steps: [
              { reasoning: "The thalamic simultaneity mechanism is Cannon and Bard's proposal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Cannon-Bard",
            commonErrors: ["Attributing the thalamus mechanism to James-Lange — James-Lange is peripheralist."],
          },
        },
        {
          id: "psych-u3-eoq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a study, participants injected with adrenaline reported feeling either euphoric or angry depending on the confederate's behaviour. If 45 of 60 participants in the euphoric condition reported happiness, what percentage is this?",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage reporting happiness", answer: 75 },
              { label: "Number not reporting happiness", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Schachter-Singer paradigm", statement: "Percentage = (count/total) x 100; the same arousal yields different emotions by context." },
            ],
            steps: [
              { reasoning: "45/60 x 100 = 75% reported happiness.", working: "45/60 x 100=75", marks: 1, markCode: "M" },
              { reasoning: "60 - 45 = 15 did not report happiness.", working: "60-45=15", marks: 1, markCode: "M" },
            ],
            finalAnswer: "75%; 15 participants.",
            commonErrors: ["Using 45 as the denominator."],
          },
        },
        {
          id: "psych-u3-eoq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the Schachter-Singer two-factor theory of emotion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-factor evaluation", statement: "Elegant explanation of context effects but difficult to test because arousal and cognition are hard to separate." },
            ],
            steps: [
              { reasoning: "Strength: elegantly explains misattribution and why identical arousal produces different emotions in different contexts.", marks: 1, markCode: "M" },
              { reasoning: "Strength: supported by adrenaline studies showing confederate type determines the emotion reported.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: arousal and cognition cannot be cleanly separated experimentally — the theory is hard to falsify.", marks: 1, markCode: "R" },
              { reasoning: "Also assumes people always search for labels — some emotions may be more automatic than the theory allows.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Schachter-Singer explains context effects well but is difficult to test and may overstate cognitive labelling.",
            commonErrors: ["Claiming the theory ignores physiology — arousal is the first factor."],
          },
        },
        {
          id: "psych-u3-eoq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A therapist teaches a client with panic attacks to reinterpret racing-heart sensations as excitement rather than danger. This technique works because, in Schachter-Singer's theory:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All emotions are purely physiological" },
              { id: "b", text: "Cognition plays no role in emotion" },
              { id: "c", text: "Changing the cognitive label applied to arousal changes the emotion experienced" },
              { id: "d", text: "Arousal must be completely eliminated" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cognitive relabelling", statement: "Changing the cognitive label applied to arousal changes the emotion experienced." },
            ],
            steps: [
              { reasoning: "Emotion = arousal + label; relabelling 'danger' as 'excitement' reduces fear without removing arousal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Changing the cognitive label changes the emotion experienced",
            commonErrors: ["Assuming the arousal must be eliminated — the theory changes the label, not the physiology."],
          },
        },
      ],
    },
  ],
};
