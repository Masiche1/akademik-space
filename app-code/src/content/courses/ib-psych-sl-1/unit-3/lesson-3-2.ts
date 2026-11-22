import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "psych-u3-lesson-3-2",
  code: "3-2",
  title: "Social Learning Theory",
  goal: "I CAN describe Bandura's social learning theory including the four processes of observational learning and evaluate its applications.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Social learning theory", definition: "Bandura's theory that behaviour is learned through observation and imitation of others, mediated by cognition." },
    { term: "Observational learning", definition: "Learning by watching others' behaviour and its consequences." },
    { term: "Vicarious reinforcement", definition: "Learning from the consequences others experience rather than direct reinforcement." },
    { term: "Attention", definition: "The first process — the observer must notice the modelled behaviour." },
    { term: "Retention", definition: "The second process — the observer must remember the behaviour for later reproduction." },
    { term: "Motivation", definition: "The fourth process — the observer must have a reason to reproduce the behaviour." },
  ],
  concepts: [
    {
      id: "psych-u3-observational",
      title: "Observational learning",
      skill: "Describe Bandura's four processes of observational learning and the Bobo doll experiment.",
      lesson: {
        sections: [
          {
            heading: "Bandura's social learning theory",
            body: "Albert **Bandura** argued learning occurs not only through direct reinforcement but through **observation** of others. Unlike strict behaviourism, SLT includes **cognitive processes** — observers mentally represent behaviour and its consequences. People can learn without performing the behaviour immediately, and learning can occur from watching models who are rewarded or punished (**vicarious reinforcement/punishment**).",
          },
          {
            heading: "The four processes",
            body: "Observational learning requires four processes in sequence. **Attention**: the observer must notice the model's behaviour — models who are prestigious, similar or attractive capture more attention. **Retention**: the behaviour must be remembered — through mental imagery or verbal coding. **Reproduction**: the observer must be physically and cognitively capable of performing the behaviour. **Motivation**: there must be a reason to reproduce it — expected reinforcement, vicarious reinforcement, or self-reinforcement.",
          },
          {
            heading: "The Bobo doll experiment",
            body: "In **Bandura, Ross and Ross (1961)**, children watched an adult aggressively attack an inflatable Bobo doll. Children who saw the adult rewarded for aggression showed high aggression; those who saw punishment showed less — demonstrating **vicarious reinforcement**. Boys imitated more than girls, and same-sex models were more influential. The study showed aggression is learned socially, not just through direct experience.",
          },
        ],
        keyFormulas: [
          { name: "Four processes", statement: "Attention → Retention → Reproduction → Motivation" },
          { name: "Vicarious learning", statement: "Watch model → observe consequence → imitate if reinforced" },
        ],
        workedExample: {
          problem: "A child watches an older sibling clean up after playing and receives praise. Explain the learning processes.",
          solution: "Attention: the child notices the sibling's cleaning. Retention: the sequence is remembered. Reproduction: the child is capable of cleaning. Motivation: vicarious reinforcement — seeing praise makes cleaning seem worthwhile, so the child imitates.",
        },
      },
      questions: [
        {
          id: "psych-u3-soq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Bandura's four processes, remembering the modelled behaviour is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attention" },
              { id: "b", text: "Retention" },
              { id: "c", text: "Reproduction" },
              { id: "d", text: "Motivation" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retention", statement: "The process of storing the observed behaviour in memory." },
            ],
            steps: [
              { reasoning: "Retention is the memory stage of observational learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Retention",
            commonErrors: ["Confusing retention (memory) with reproduction (performance)."],
          },
        },
        {
          id: "psych-u3-soq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe what Bandura's Bobo doll experiment demonstrated about aggression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Bobo doll study", statement: "Children imitated adult aggression; vicarious reinforcement affected imitation rates." },
            ],
            steps: [
              { reasoning: "Children who watched an adult attack the doll later imitated the aggressive acts — aggression is learned by observation.", marks: 1, markCode: "M" },
              { reasoning: "Children who saw the adult rewarded showed more aggression; punished models produced less imitation — vicarious reinforcement matters.", marks: 1, markCode: "M" },
              { reasoning: "Same-sex models were more influential, showing model characteristics affect learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aggression is learned observationally; vicarious reinforcement and model similarity matter.",
            commonErrors: ["Claiming children were aggressive before watching — the model created the behaviour."],
          },
        },
        {
          id: "psych-u3-soq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between learning and performance in social learning theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Learning vs performance", statement: "One can learn a behaviour by observation without performing it if motivation is absent." },
            ],
            steps: [
              { reasoning: "Bandura showed children could learn aggressive acts by watching but not perform them when the model was punished.", marks: 1, markCode: "M" },
              { reasoning: "Learning = acquiring the cognitive representation through attention and retention.", marks: 1, markCode: "M" },
              { reasoning: "Performance = actually reproducing the behaviour, which requires motivation (expected reinforcement).", marks: 1, markCode: "R" },
              { reasoning: "This distinguishes SLT from strict behaviourism, which only explains observable performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Learning can occur without performance — performance needs motivation; learning needs attention + retention.",
            commonErrors: ["Assuming observed behaviour equals learned behaviour — learning can be latent."],
          },
        },
        {
          id: "psych-u3-soq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A teenager adopts the fashion, slang and attitudes of a popular social media influencer.",
          parts: [
            { label: "a", prompt: "Explain the adoption using Bandura's four processes of observational learning.", marks: 3 },
            { label: "b", prompt: "Explain the role of vicarious reinforcement in this scenario.", marks: 2 },
            { label: "c", prompt: "Evaluate social learning theory's explanation of media influence on behaviour.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Media modelling", statement: "Influencers serve as models; their rewarded styles are imitated through the four processes." },
            ],
            steps: [
              { part: "a", reasoning: "Attention: the influencer is prestigious and aspirational, capturing attention.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Retention: the styles and phrases are remembered and mentally rehearsed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reproduction + motivation: the teen can copy the style and is motivated by likes and social approval.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vicarious reinforcement: the influencer's popularity (likes, fame) acts as a reward the teen expects to gain by imitating.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No direct reinforcement is needed — seeing the model rewarded is sufficient motivation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: explains how media shapes attitudes and behaviour without direct conditioning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: correlational media research cannot prove causation; individual differences matter.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "SLT may overstate media influence — personal and social factors also shape behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Attention→retention→reproduction→motivation. (b) Model's rewards motivate imitation. (c) Explains influence but causation hard to prove.",
            commonErrors: ["Ignoring that reproduction requires capability, not just motivation."],
          },
        },
        {
          id: "psych-u3-soq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the correct sequence of Bandura's four processes, which comes immediately after attention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Motivation" },
              { id: "b", text: "Retention" },
              { id: "c", text: "Vicarious reinforcement" },
              { id: "d", text: "Reproduction" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Four processes", statement: "Attention → Retention → Reproduction → Motivation." },
            ],
            steps: [
              { reasoning: "Retention follows attention in the sequence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Retention",
            commonErrors: ["Placing reproduction before retention — the behaviour must be remembered before it can be performed."],
          },
        },
        {
          id: "psych-u3-soq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Vicarious reinforcement refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being directly rewarded for one's own behaviour" },
              { id: "b", text: "Reinforcing one's own behaviour privately" },
              { id: "c", text: "Learning from the consequences experienced by a model" },
              { id: "d", text: "Forgetting a modelled behaviour over time" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vicarious reinforcement", statement: "Learning from observing the rewards or punishments a model receives." },
            ],
            steps: [
              { reasoning: "Vicarious = through another person; the observer learns from the model's consequences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Learning from the consequences experienced by a model",
            commonErrors: ["Confusing vicarious reinforcement (observing others' outcomes) with direct reinforcement."],
          },
        },
        {
          id: "psych-u3-soq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which factor makes a model most likely to capture an observer's attention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being physically distant from the observer" },
              { id: "b", text: "Being unlike the observer in every way" },
              { id: "c", text: "Being punished for the modelled behaviour" },
              { id: "d", text: "Being prestigious, attractive or similar to the observer" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model characteristics", statement: "Prestigious, attractive and similar models attract more attention and imitation." },
            ],
            steps: [
              { reasoning: "Bandura showed model prestige, attractiveness and similarity increase attention and imitation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Being prestigious, attractive or similar",
            commonErrors: ["Assuming any model is equally influential — model characteristics strongly affect attention."],
          },
        },
        {
          id: "psych-u3-soq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Bandura's Bobo doll experiment, children who observed the adult model being rewarded for aggression showed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immediate punishment for their own aggression" },
              { id: "b", text: "No difference from the control group" },
              { id: "c", text: "More imitation of the aggressive acts than punished-model children" },
              { id: "d", text: "Less aggression than children who saw punishment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Bobo doll study", statement: "Rewarded models produced more imitation; punished models produced less — vicarious reinforcement." },
            ],
            steps: [
              { reasoning: "Vicarious reinforcement: seeing the model rewarded motivated greater imitation of aggression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** More imitation than punished-model children",
            commonErrors: ["Reversing the finding — punished models produced less imitation, not more."],
          },
        },
        {
          id: "psych-u3-soq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many distinct processes does Bandura's model require for observational learning to occur?",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of processes", answer: 4 },
              { label: "Position of motivation in the sequence", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Four processes", statement: "Attention, Retention, Reproduction and Motivation — four processes in fixed order." },
            ],
            steps: [
              { reasoning: "Attention, retention, reproduction, motivation — four processes.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Motivation is the fourth and final process.", working: "4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "4 processes; motivation is 4th.",
            commonErrors: ["Including reinforcement as a separate fifth process — it operates through the motivation stage."],
          },
        },
        {
          id: "psych-u3-soq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the role of retention in observational learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retention", statement: "The process of storing the observed behaviour in memory for later reproduction." },
            ],
            steps: [
              { reasoning: "After attending to a model, the observer must encode the behaviour into memory.", marks: 1, markCode: "M" },
              { reasoning: "Retention uses mental imagery or verbal coding to store the sequence of actions.", marks: 1, markCode: "M" },
              { reasoning: "Without retention, the behaviour cannot be reproduced later — memory is the bridge between watching and doing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Retention stores the observed behaviour in memory so it can be reproduced later.",
            commonErrors: ["Confusing retention with attention — attention is noticing; retention is remembering."],
          },
        },
        {
          id: "psych-u3-soq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how vicarious punishment can reduce the imitation of a modelled behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vicarious punishment", statement: "Observing a model punished for a behaviour reduces the observer's motivation to imitate it." },
            ],
            steps: [
              { reasoning: "The observer watches a model perform a behaviour and then experience an aversive consequence.", marks: 1, markCode: "M" },
              { reasoning: "The observer mentally associates the behaviour with the negative outcome — a form of vicarious learning.", marks: 1, markCode: "M" },
              { reasoning: "This reduces the observer's motivation to reproduce the behaviour, even if they retained it.", marks: 1, markCode: "R" },
              { reasoning: "In the Bobo doll study, children who saw punished models showed less aggression than those who saw rewarded models.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seeing a model punished lowers motivation to imitate — the observer learns the behaviour leads to negative outcomes.",
            commonErrors: ["Assuming punished models are never imitated — imitation is reduced, not eliminated."],
          },
        },
        {
          id: "psych-u3-soq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A child watches an older sibling tidy their room and is later praised by a parent for doing the same.",
          parts: [
            { label: "a", prompt: "Explain the observational learning processes involved in the child learning to tidy.", marks: 3 },
            { label: "b", prompt: "Explain why the parent's praise is a vicarious or direct reinforcement and its effect.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Observational learning", statement: "Attention → Retention → Reproduction → Motivation; reinforcement strengthens performance." },
            ],
            steps: [
              { part: "a", reasoning: "Attention: the child notices the sibling's tidying behaviour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Retention: the sequence of tidying actions is mentally stored.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reproduction + motivation: the child can perform the behaviour and is motivated to imitate the sibling.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The praise is direct reinforcement for the child's own behaviour — an added pleasant stimulus.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It increases the likelihood the child tidies again — operant conditioning strengthens the behaviour.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Additionally, seeing the sibling praised earlier could have provided vicarious reinforcement motivating imitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Attention, retention, reproduction, motivation. (b) Praise directly reinforces tidying; earlier model praise adds vicarious motivation.",
            commonErrors: ["Ignoring that SLT includes cognitive processes — not just copying behaviour."],
          },
        },
        {
          id: "psych-u3-soq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The ability to physically perform a behaviour that has been observed is the process of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retention" },
              { id: "b", text: "Attention" },
              { id: "c", text: "Motivation" },
              { id: "d", text: "Reproduction" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reproduction", statement: "The observer's physical and cognitive ability to perform the modelled behaviour." },
            ],
            steps: [
              { reasoning: "Reproduction = converting the mental representation into actual performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reproduction",
            commonErrors: ["Confusing reproduction (doing) with retention (remembering)."],
          },
        },
        {
          id: "psych-u3-soq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher shows 48 children a film of a model helping an elderly person. 32 children later helped in a similar situation without being rewarded.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percentage of children who helped", answer: 66.7, tolerance: 0.2 },
              { label: "(b) Number of children who did not help", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Observational learning data", statement: "Percentage = (helpers / total) x 100; non-helpers = total - helpers." },
            ],
            steps: [
              { reasoning: "32 of 48 children helped: 32/48 x 100 = 66.7%.", working: "32/48 x 100 = 66.7", marks: 1, markCode: "M" },
              { reasoning: "48 - 32 = 16 children did not help.", working: "48-32=16", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 66.7% (b) 16",
            commonErrors: ["Using 32 as the denominator instead of the total 48."],
          },
        },
        {
          id: "psych-u3-soq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a person might learn a behaviour through observation but never perform it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Learning vs performance", statement: "Learning requires attention and retention; performance additionally requires motivation." },
            ],
            steps: [
              { reasoning: "The observer may fully attend to and retain the modelled behaviour — learning has occurred.", marks: 1, markCode: "M" },
              { reasoning: "However, reproduction also needs the physical/cognitive capability, and motivation needs an expected reward.", marks: 1, markCode: "M" },
              { reasoning: "If the model was punished or no reinforcement is expected, motivation is absent — the behaviour is not performed.", marks: 1, markCode: "R" },
              { reasoning: "This latent learning distinguishes SLT from behaviourism, which cannot explain learning without performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Learning (attention + retention) can occur without performance when motivation or capability is lacking.",
            commonErrors: ["Equating watching with doing — SLT separates learning from performance."],
          },
        },
        {
          id: "psych-u3-soq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A teenager learns to cook a family recipe by watching their grandmother, then teaches it to a friend months later. Identify and explain each process involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Four processes", statement: "Attention → Retention → Reproduction → Motivation." },
            ],
            steps: [
              { reasoning: "Attention: the teenager noticed the grandmother's cooking techniques.", marks: 1, markCode: "M" },
              { reasoning: "Retention: the recipe steps were mentally stored over the months.", marks: 1, markCode: "M" },
              { reasoning: "Reproduction: months later the teenager performed the recipe and taught it — showing both capability and motivation to reproduce.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Attention + retention enabled delayed reproduction — evidence learning can persist without immediate performance.",
            commonErrors: ["Assuming the behaviour was forgotten — retention explains the delayed reproduction."],
          },
        },
      ],
    },
    {
      id: "psych-u3-slt-eval",
      title: "Social learning theory: evaluation and applications",
      skill: "Evaluate social learning theory against behaviourism and describe its applications to aggression and behaviour change.",
      lesson: {
        sections: [
          {
            heading: "SLT versus behaviourism",
            body: "Unlike **Skinner's operant conditioning**, which requires direct reinforcement, SLT allows **latent learning** — acquiring behaviour without immediate performance. SLT adds **cognitive mediational processes** (attention, retention, motivation) that behaviourism ignores. However, SLT still struggles to explain biological drives, and its cognitive processes are hard to observe and measure directly.",
          },
          {
            heading: "Applications: aggression and media",
            body: "SLT explains **media violence effects**: children imitate aggressive behaviours seen on screen, especially when models are rewarded. Bandura argued violent media provides models whose aggression is glorified. However, correlational media studies show association, not causation — aggressive children may seek violent media. **Self-efficacy** — belief in one's ability to succeed — is Bandura's later addition explaining why people do or don't attempt behaviours.",
          },
          {
            heading: "Applications: behaviour change",
            body: "SLT principles underpin **modelling therapy** (clients learn coping behaviours by watching models succeed) and **assertiveness training**. Self-efficacy beliefs predict whether people attempt behaviour change — smokers with high self-efficacy are more likely to quit. The theory also explains cultural transmission: children learn gender roles, language and social norms largely through observation.",
          },
        ],
        keyFormulas: [
          { name: "SLT vs behaviourism", statement: "SLT: observation + cognition; Behaviourism: direct reinforcement only" },
          { name: "Self-efficacy", statement: "Belief in one's capability to succeed — predicts behaviour change" },
        ],
        workedExample: {
          problem: "Why might watching a friend successfully quit smoking increase your own chances of quitting?",
          solution: "Vicarious reinforcement: seeing the friend succeed raises your self-efficacy — you believe quitting is achievable. The friend's behaviour also provides a model for coping strategies you can imitate.",
        },
      },
      questions: [
        {
          id: "psych-u3-seq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Self-efficacy refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fear of failure in social situations" },
              { id: "b", text: "Confidence gained from past success only" },
              { id: "c", text: "Belief in one's ability to succeed at a task" },
              { id: "d", text: "The tendency to imitate others" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-efficacy", statement: "An individual's belief in their capacity to execute behaviours needed for success." },
            ],
            steps: [
              { reasoning: "Self-efficacy is a belief about one's capability, not just past performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Belief in one's ability to succeed",
            commonErrors: ["Confusing self-efficacy with self-esteem or confidence generally."],
          },
        },
        {
          id: "psych-u3-seq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how social learning theory differs from strict behaviourism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SLT vs behaviourism", statement: "SLT includes observation and cognition; behaviourism only direct reinforcement." },
            ],
            steps: [
              { reasoning: "Behaviourism (Skinner) requires direct reinforcement of behaviour; SLT allows learning through observation alone.", marks: 1, markCode: "M" },
              { reasoning: "SLT adds cognitive processes — attention, retention, motivation — explaining latent learning.", marks: 1, markCode: "M" },
              { reasoning: "SLT can explain learning without immediate performance; behaviourism cannot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SLT adds observation and cognition to learning; behaviourism is limited to direct reinforcement.",
            commonErrors: ["Saying SLT rejects reinforcement — it includes vicarious reinforcement."],
          },
        },
        {
          id: "psych-u3-seq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the claim that exposure to violent media causes aggressive behaviour in children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Media violence", statement: "SLT predicts imitation of rewarded aggression; correlational evidence shows association but causation is disputed." },
            ],
            steps: [
              { reasoning: "SLT supports the claim: children imitate aggressive models, especially when violence is rewarded or glorified.", marks: 1, markCode: "M" },
              { reasoning: "Experimental evidence (e.g. Bandura's studies) shows short-term increases in aggression after violent media exposure.", marks: 1, markCode: "M" },
              { reasoning: "However, correlation may run both ways — aggressive children may seek violent media (reverse causation).", marks: 1, markCode: "R" },
              { reasoning: "Many children exposed to violence do not become aggressive — individual factors and parental mediation matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Association exists and SLT explains mechanisms, but causation is complex and individual differences are large.",
            commonErrors: ["Treating correlation as proof of causation in media violence research."],
          },
        },
        {
          id: "psych-u3-seq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A school wants to reduce bullying by using principles from social learning theory.",
          parts: [
            { label: "a", prompt: "Explain how social learning theory accounts for bullying behaviour.", marks: 2 },
            { label: "b", prompt: "Design two SLT-based interventions to reduce bullying.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of SLT-based anti-bullying programmes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anti-bullying via SLT", statement: "Bullying is learned through modelling; prosocial models and vicarious reinforcement can counteract it." },
            ],
            steps: [
              { part: "a", reasoning: "Bullies learn aggressive behaviour by observing models (peers, media, family) who are rewarded for dominance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vicarious reinforcement — seeing others get away with bullying — motivates imitation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Modeling therapy: show videos or have peers demonstrate prosocial conflict resolution.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vicarious reinforcement: publicly reward students who intervene or support victims.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Peer mentoring: pair bullies with positive role models for sustained observation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: addresses root cause — behaviour learned socially can be unlearned through counter-models.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evidence: modelling and reinforcement programmes show reductions in aggressive behaviour.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: SLT alone ignores deeper causes (family dysfunction, school climate) — multi-level approaches work better.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Learned through rewarded models. (b) Modeling + vicarious reinforcement + mentoring. (c) Helpful but insufficient alone.",
            commonErrors: ["Punishing bullies only — punishment suppresses behaviour without teaching alternatives."],
          },
        },
        {
          id: "psych-u3-seq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Latent learning, as described by social learning theory, refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Learning that is quickly forgotten" },
              { id: "b", text: "Learning that is immediately performed" },
              { id: "c", text: "Learning that requires direct reinforcement" },
              { id: "d", text: "Learning acquired through observation without immediate performance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Latent learning", statement: "Acquiring a behaviour through observation without performing it until motivated." },
            ],
            steps: [
              { reasoning: "Latent learning = learned but not yet performed — e.g. children imitating punished models later.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Learning acquired without immediate performance",
            commonErrors: ["Confusing latent learning with no learning — the behaviour is acquired, just not shown."],
          },
        },
        {
          id: "psych-u3-seq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Bandura's concept of self-efficacy refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The belief that one can successfully perform a behaviour" },
              { id: "b", text: "Fear of being judged by others" },
              { id: "c", text: "The tendency to copy others automatically" },
              { id: "d", text: "The amount of reinforcement received" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-efficacy", statement: "An individual's belief in their capacity to execute the behaviours needed to succeed." },
            ],
            steps: [
              { reasoning: "Self-efficacy is a belief about capability — it predicts whether someone attempts a behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Belief that one can successfully perform a behaviour",
            commonErrors: ["Confusing self-efficacy with general self-esteem — it is task-specific capability belief."],
          },
        },
        {
          id: "psych-u3-seq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the strongest criticism of using media violence research to support social learning theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Media violence has never been studied" },
              { id: "b", text: "Correlational studies cannot prove causation — aggressive children may seek violent media" },
              { id: "c", text: "Bandura never studied aggression" },
              { id: "d", text: "Children cannot imitate televised behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation vs causation", statement: "Media-violence studies are mostly correlational; direction of causality is ambiguous." },
            ],
            steps: [
              { reasoning: "Most media violence research shows association; reverse causation (aggressive children seek violent media) is possible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Correlation does not prove causation — direction may be reversed",
            commonErrors: ["Treating correlational media findings as proof of causation."],
          },
        },
        {
          id: "psych-u3-seq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two applications of social learning theory to behaviour change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SLT applications", statement: "Modelling therapy, assertiveness training and anti-bullying programmes use observational learning." },
            ],
            steps: [
              { reasoning: "Modelling therapy: clients observe a model coping successfully with a feared situation, then imitate it.", marks: 1, markCode: "M" },
              { reasoning: "Assertiveness training: clients watch and rehearse assertive responses, building self-efficacy.", marks: 1, markCode: "M" },
              { reasoning: "Anti-bullying: prosocial peer models and rewards for intervention counteract aggressive modelling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Modelling therapy, assertiveness training and anti-bullying programmes all apply observational learning.",
            commonErrors: ["Listing applications without explaining how SLT principles are used."],
          },
        },
        {
          id: "psych-u3-seq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A study finds that 75 out of 100 children who watched a prosocial video later shared toys, compared with 40 out of 100 who watched a neutral film. What is the percentage-point difference in sharing rates?",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage sharing in prosocial group", answer: 75 },
              { label: "Percentage-point difference", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Media effects data", statement: "Percentage = (count/total) x 100; difference = prosocial rate minus control rate." },
            ],
            steps: [
              { reasoning: "75/100 x 100 = 75% shared after the prosocial video.", working: "75/100 x 100=75", marks: 1, markCode: "M" },
              { reasoning: "40/100 x 100 = 40%; difference = 75 - 40 = 35 percentage points.", working: "75-40=35", marks: 1, markCode: "M" },
            ],
            finalAnswer: "75% vs 40%; 35 percentage-point difference.",
            commonErrors: ["Reporting a relative percentage change (87.5%) instead of the percentage-point difference."],
          },
        },
        {
          id: "psych-u3-seq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how self-efficacy influences whether a person attempts behaviour change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-efficacy and change", statement: "Higher self-efficacy predicts greater effort, persistence and success in behaviour change." },
            ],
            steps: [
              { reasoning: "People with high self-efficacy believe they can succeed, so they are more willing to attempt the change.", marks: 1, markCode: "M" },
              { reasoning: "They persist longer through setbacks because they expect eventual success.", marks: 1, markCode: "M" },
              { reasoning: "Low self-efficacy leads to avoidance — e.g. smokers who doubt they can quit rarely try.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Self-efficacy determines whether people attempt change and how long they persist — high efficacy predicts success.",
            commonErrors: ["Treating self-efficacy as fixed — it can be raised through mastery experiences and modelling."],
          },
        },
        {
          id: "psych-u3-seq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate social learning theory as an explanation of how children acquire gender roles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gender role acquisition", statement: "Children observe and imitate same-sex models who are rewarded for gender-typical behaviour." },
            ],
            steps: [
              { reasoning: "Strength: SLT explains transmission of gender roles through observation of parents, peers and media models.", marks: 1, markCode: "M" },
              { reasoning: "Vicarious reinforcement explains why gender-typical behaviour is repeated — models are praised or approved.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: SLT underplays biological and hormonal influences on gendered behaviour.", marks: 1, markCode: "R" },
              { reasoning: "Also, children often imitate models of both sexes — same-sex preference is a tendency, not a rule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SLT explains gender role learning through rewarded same-sex modelling, but ignores biological factors and overstates same-sex imitation.",
            commonErrors: ["Claiming SLT explains everything about gender — it addresses social transmission only."],
          },
        },
        {
          id: "psych-u3-seq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A charity wants to use social learning principles to encourage recycling in a community.",
          parts: [
            { label: "a", prompt: "Explain how SLT could be applied to promote recycling behaviour.", marks: 3 },
            { label: "b", prompt: "Describe two specific SLT-based strategies the charity could use.", marks: 3 },
            { label: "c", prompt: "Evaluate the likely effectiveness of these strategies.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SLT behaviour change", statement: "Visible models, vicarious reinforcement and self-efficacy can promote prosocial behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Show community members successfully recycling — models demonstrate the behaviour is achievable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Highlight rewards or social approval received by recyclers — vicarious reinforcement motivates imitation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Build self-efficacy by showing simple first steps anyone can perform.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: testimonial videos of respected neighbours describing their recycling routine and benefits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: public recognition or rewards for households that recycle consistently — making the model's reinforcement visible.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 3 (credit): peer mentors demonstrating sorting techniques door-to-door.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: modelling and social proof are low-cost and can shift descriptive norms quickly.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: behaviour change also needs infrastructure (bins, collection) and habits take time — SLT alone is insufficient.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Models + vicarious reinforcement + self-efficacy. (b) Testimonials, public rewards, peer mentors. (c) Effective for norms but needs infrastructure.",
            commonErrors: ["Relying only on information campaigns — SLT emphasises modelling, not just facts."],
          },
        },
        {
          id: "psych-u3-seq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following best distinguishes social learning theory from Skinner's operant conditioning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SLT includes cognitive processes and learning through observation" },
              { id: "b", text: "SLT only explains animal behaviour" },
              { id: "c", text: "SLT ignores reinforcement entirely" },
              { id: "d", text: "SLT requires direct rewards for every behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "SLT vs behaviourism", statement: "SLT adds observation and cognitive mediational processes to learning." },
            ],
            steps: [
              { reasoning: "SLT includes attention, retention and motivation — cognitive processes behaviourism lacks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** SLT includes cognitive processes and learning through observation",
            commonErrors: ["Claiming SLT rejects reinforcement — vicarious reinforcement is central to it."],
          },
        },
        {
          id: "psych-u3-seq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a survey, 60 out of 80 adolescents said they had tried a behaviour after seeing it online. What percentage is this?",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage who tried the behaviour", answer: 75 },
              { label: "Number who had not tried it", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Survey data", statement: "Percentage = (count/total) x 100." },
            ],
            steps: [
              { reasoning: "60/80 x 100 = 75%.", working: "60/80 x 100=75", marks: 1, markCode: "M" },
              { reasoning: "80 - 60 = 20 had not tried it.", working: "80-60=20", marks: 1, markCode: "M" },
            ],
            finalAnswer: "75%; 20 adolescents.",
            commonErrors: ["Dividing by 60 instead of the total 80."],
          },
        },
        {
          id: "psych-u3-seq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why social learning theory cannot fully explain all human behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of SLT", statement: "SLT underplays biological drives, cognition beyond imitation, and individual agency." },
            ],
            steps: [
              { reasoning: "It underplays biological factors — hunger, hormones and genetics motivate behaviour independently of models.", marks: 1, markCode: "M" },
              { reasoning: "Its cognitive processes (attention, retention, motivation) are inferred, not directly observable — hard to test.", marks: 1, markCode: "M" },
              { reasoning: "People sometimes act against models — individual reasoning, values and creativity go beyond imitation.", marks: 1, markCode: "R" },
              { reasoning: "Cultural transmission is complex — children do not simply copy; they interpret and reconstruct behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SLT misses biological drives, unobservable cognition, individual agency and interpretive cultural learning.",
            commonErrors: ["Claiming SLT is wrong — it is incomplete, not incorrect."],
          },
        },
        {
          id: "psych-u3-seq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A school introduces a 'buddy system' where older students mentor younger ones in reading. This programme mainly works through social learning theory because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It relies only on biological drives" },
              { id: "b", text: "It uses direct punishment for reading errors" },
              { id: "c", text: "It eliminates the need for motivation" },
              { id: "d", text: "Peer models demonstrate reading and their encouragement provides reinforcement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Peer modelling", statement: "Similar, slightly older models are effective because they are relatable and aspirational." },
            ],
            steps: [
              { reasoning: "Older students model reading; peer similarity boosts attention and mentors' encouragement reinforces the behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Peer models demonstrate reading and their encouragement provides reinforcement",
            commonErrors: ["Assuming only adult models work — similar-age models can be more influential."],
          },
        },
      ],
    },
  ],
};
