import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "psych-u3-lesson-3-1",
  code: "3-1",
  title: "Classical and Operant Conditioning",
  goal: "I CAN describe Pavlov's classical conditioning and Skinner's operant conditioning, including key terms and applications.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Classical conditioning", definition: "Learning by association — a neutral stimulus becomes associated with an unconditioned stimulus to produce a conditioned response." },
    { term: "Unconditioned stimulus", definition: "A stimulus that naturally and automatically triggers a response without learning." },
    { term: "Conditioned stimulus", definition: "A previously neutral stimulus that, after pairing, triggers a conditioned response." },
    { term: "Operant conditioning", definition: "Learning through consequences — behaviour is strengthened or weakened by its outcomes." },
    { term: "Reinforcement", definition: "A consequence that increases the likelihood of a behaviour being repeated." },
    { term: "Punishment", definition: "A consequence that decreases the likelihood of a behaviour being repeated." },
  ],
  concepts: [
    {
      id: "psych-u3-classical",
      title: "Classical conditioning",
      skill: "Describe Pavlov's model including key terms, processes of acquisition and extinction, and evaluate its applications.",
      lesson: {
        sections: [
          {
            heading: "Pavlov's discovery",
            body: "Ivan **Pavlov** studied digestion in dogs and noticed they salivated not only at food but at the sight of the lab assistant or sound of footsteps. He systematically paired a neutral stimulus (a bell) with food until the bell alone triggered salivation — the first demonstration of **classical conditioning**, learning by association.",
          },
          {
            heading: "Key terms and processes",
            body: "The **unconditioned stimulus (UCS)** (food) naturally produces the **unconditioned response (UCR)** (salivation). After repeated pairings, the **conditioned stimulus (CS)** (bell) produces the **conditioned response (CR)** (salivation to the bell). Acquisition requires the CS to precede the UCS; **extinction** occurs when the CS is presented without the UCS; **spontaneous recovery** is the brief return of an extinguished CR; **generalisation** is responding to similar stimuli; **discrimination** is responding only to the specific CS.",
          },
          {
            heading: "Applications and evaluation",
            body: "Classical conditioning explains **phobias** (a neutral object paired with trauma becomes feared), **taste aversion** (one-trial learning of food-illness links) and **advertising** (pairing products with positive feelings). Limitations: it explains reflexive, involuntary responses but not voluntary behaviour — which operant conditioning addresses. Watson's Little Albert study is famous but ethically problematic.",
          },
        ],
        keyFormulas: [
          { name: "Classical conditioning", statement: "NS + UCS → UCR; then CS alone → CR" },
          { name: "Key processes", statement: "Acquisition + extinction + spontaneous recovery + generalisation + discrimination" },
        ],
        workedExample: {
          problem: "A child fears dogs after being bitten by one. Explain using classical conditioning.",
          solution: "The dog (neutral stimulus) was paired with the painful bite (UCS producing fear UCR). After conditioning, the dog alone triggers fear (CR) — the child has acquired a phobia through association.",
        },
      },
      questions: [
        {
          id: "psych-u3-ccq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Pavlov's experiment, the bell that eventually triggers salivation is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unconditioned response" },
              { id: "b", text: "Conditioned stimulus" },
              { id: "c", text: "Conditioned response" },
              { id: "d", text: "Unconditioned stimulus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditioned stimulus", statement: "Previously neutral stimulus that triggers a learned response after pairing." },
            ],
            steps: [
              { reasoning: "The bell was neutral, then paired with food, becoming the CS.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Conditioned stimulus",
            commonErrors: ["Confusing the stimulus (bell) with the response (salivation)."],
          },
        },
        {
          id: "psych-u3-ccq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Define extinction and spontaneous recovery in classical conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extinction and recovery", statement: "Extinction = CR fades without UCS; spontaneous recovery = temporary return of CR." },
            ],
            steps: [
              { reasoning: "Extinction: presenting the CS repeatedly without the UCS weakens and eventually eliminates the CR.", marks: 1, markCode: "M" },
              { reasoning: "The association is not erased but suppressed — spontaneous recovery can bring the CR back briefly.", marks: 1, markCode: "M" },
              { reasoning: "Recovery shows extinction is not permanent unlearning — the trace persists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Extinction = CR fades without UCS; spontaneous recovery = temporary return showing trace persists.",
            commonErrors: ["Claiming extinction erases the memory completely."],
          },
        },
        {
          id: "psych-u3-ccq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how classical conditioning can account for the development of a phobia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phobia acquisition", statement: "Neutral stimulus paired with frightening UCS becomes a feared CS — one-trial conditioning possible." },
            ],
            steps: [
              { reasoning: "A neutral object or situation (e.g. spider, lift) is present when a frightening event occurs.", marks: 1, markCode: "M" },
              { reasoning: "The fear response (UCR) becomes associated with the previously neutral stimulus through pairing.", marks: 1, markCode: "M" },
              { reasoning: "Later, the stimulus alone triggers fear (CR) — avoidance maintains the phobia.", marks: 1, markCode: "R" },
              { reasoning: "Generalisation can spread fear to similar stimuli, widening the phobia.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neutral stimulus + fear pairing → conditioned fear; avoidance maintains it.",
            commonErrors: ["Assuming phobias require many trials — one intense pairing can suffice."],
          },
        },
        {
          id: "psych-u3-ccq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A therapist treats a client's fear of lifts using systematic desensitisation.",
          parts: [
            { label: "a", prompt: "Explain how the client's fear could have been classically conditioned.", marks: 2 },
            { label: "b", prompt: "Describe how systematic desensitisation uses extinction principles.", marks: 3 },
            { label: "c", prompt: "Evaluate the use of classical conditioning principles in therapy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterconditioning", statement: "Systematic desensitisation pairs the feared CS with relaxation, extinguishing the fear response." },
            ],
            steps: [
              { part: "a", reasoning: "The lift (neutral stimulus) was paired with a frightening event — e.g. being trapped — producing fear.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The lift alone now triggers the conditioned fear response.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A hierarchy of feared situations is constructed from least to most anxiety-provoking.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The client learns relaxation, then confronts each step while relaxed — pairing the CS with calm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeated CS-without-fear pairings extinguish the conditioned response progressively up the hierarchy.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: evidence-based for phobias and anxiety; directly applies extinction learning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: does not address underlying causes of anxiety; some clients find exposure distressing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More effective combined with cognitive approaches that challenge catastrophic thoughts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lift + trauma pairing. (b) Hierarchy + relaxation + extinction. (c) Effective for phobias; combine with cognitive work.",
            commonErrors: ["Flooding vs desensitisation — desensitisation uses gradual graded exposure."],
          },
        },
        {
          id: "psych-u3-ccq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Pavlov's experiment, the food that naturally triggers salivation without any learning is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conditioned response" },
              { id: "b", text: "Unconditioned stimulus" },
              { id: "c", text: "Unconditioned response" },
              { id: "d", text: "Conditioned stimulus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unconditioned stimulus", statement: "A stimulus that naturally and automatically triggers a response without learning." },
            ],
            steps: [
              { reasoning: "Food triggers salivation automatically — it is the UCS.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Unconditioned stimulus",
            commonErrors: ["Confusing the UCS (food) with the UCR (salivation)."],
          },
        },
        {
          id: "psych-u3-ccq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A stimulus that was originally neutral but now elicits a learned response after repeated pairing is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conditioned response" },
              { id: "b", text: "Unconditioned stimulus" },
              { id: "c", text: "Conditioned stimulus" },
              { id: "d", text: "Unconditioned response" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditioned stimulus", statement: "A previously neutral stimulus that triggers a conditioned response after pairing with a UCS." },
            ],
            steps: [
              { reasoning: "The stimulus was neutral, then learned — making it the CS.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Conditioned stimulus",
            commonErrors: ["Choosing conditioned response — the question asks about the stimulus, not the response."],
          },
        },
        {
          id: "psych-u3-ccq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A dog trained to salivate to a specific bell also salivates to a buzzer and a whistle. This illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spontaneous recovery" },
              { id: "b", text: "Discrimination" },
              { id: "c", text: "Extinction" },
              { id: "d", text: "Generalisation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stimulus generalisation", statement: "Responding to stimuli similar to the conditioned stimulus." },
            ],
            steps: [
              { reasoning: "The dog responds to stimuli similar to the bell — generalisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Generalisation",
            commonErrors: ["Confusing generalisation (responding to similar stimuli) with discrimination (responding only to the CS)."],
          },
        },
        {
          id: "psych-u3-ccq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a replication, a light (CS) was paired with a mild shock (UCS) for 25 trials, then presented alone for 40 trials. Salivation faded after 30 of the alone presentations.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of CS-UCS pairings", answer: 25 },
              { label: "(b) Number of CS-alone presentations showing no salivation", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Classical conditioning procedure", statement: "Acquisition involves repeated CS-UCS pairings; extinction involves CS-alone presentations." },
            ],
            steps: [
              { reasoning: "The light was paired with the shock on 25 trials.", working: "25 pairings", marks: 1, markCode: "M" },
              { reasoning: "40 alone presentations minus 30 until salivation faded leaves 10 without salivation.", working: "40-30=10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 25 (b) 10",
            commonErrors: ["Counting all 40 alone presentations as showing no salivation — the first 30 still produced the CR."],
          },
        },
        {
          id: "psych-u3-ccq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why the conditioned stimulus must precede the unconditioned stimulus for effective classical conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temporal contiguity", statement: "The CS must signal the upcoming UCS so the response can be transferred to it." },
            ],
            steps: [
              { reasoning: "If the CS precedes the UCS, it acts as a signal or predictor that the UCS is about to arrive.", marks: 1, markCode: "M" },
              { reasoning: "The organism learns to anticipate the UCS and begins the CR in advance of it.", marks: 1, markCode: "M" },
              { reasoning: "If the UCS comes first, there is nothing for the CS to predict — no association forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CS-before-UCS lets the CS predict the UCS, enabling the CR to be transferred to it.",
            commonErrors: ["Assuming any pairing works regardless of order."],
          },
        },
        {
          id: "psych-u3-ccq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Responding only to the exact conditioned stimulus and not to similar stimuli is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discrimination" },
              { id: "b", text: "Extinction" },
              { id: "c", text: "Acquisition" },
              { id: "d", text: "Generalisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stimulus discrimination", statement: "Responding selectively to the specific conditioned stimulus only." },
            ],
            steps: [
              { reasoning: "Selective responding to the exact CS is discrimination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Discrimination",
            commonErrors: ["Swapping generalisation and discrimination — discrimination is the opposite of generalisation."],
          },
        },
        {
          id: "psych-u3-ccq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how taste aversion demonstrates one-trial classical conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Taste aversion", statement: "A single pairing of a novel food (CS) with illness (UCS) can produce lasting avoidance." },
            ],
            steps: [
              { reasoning: "A person eats a novel food and later becomes ill — the food is the neutral stimulus.", marks: 1, markCode: "M" },
              { reasoning: "Nausea is the UCS producing the UCR of feeling sick; one pairing can link the food to illness.", marks: 1, markCode: "M" },
              { reasoning: "The food alone now triggers avoidance (CR) — often after just one trial.", marks: 1, markCode: "R" },
              { reasoning: "Taste aversion shows conditioning can occur rapidly when the UCS is biologically significant (survival-relevant).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One food-illness pairing creates lasting avoidance — single-trial conditioning for survival-relevant stimuli.",
            commonErrors: ["Assuming taste aversions require many pairings like standard conditioning."],
          },
        },
        {
          id: "psych-u3-ccq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Watson and Rayner's Little Albert study is frequently cited as evidence for classical conditioning.",
          parts: [
            { label: "a", prompt: "Describe how the study applied classical conditioning principles.", marks: 2 },
            { label: "b", prompt: "Evaluate the study's methodological and ethical problems.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Little Albert (1920)", statement: "A neutral stimulus (white rat) was paired with a loud noise (UCS) until the rat alone produced fear." },
            ],
            steps: [
              { part: "a", reasoning: "The white rat (neutral stimulus) was paired with a loud clang (UCS producing fear UCR).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The rat alone then triggered fear — the rat became a CS and fear the CR; fear also generalised to similar objects.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Single participant — results cannot be generalised to all children.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "No control group or baseline measures — cannot rule out other explanations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethically unacceptable: deliberately induced lasting fear in an infant without consent or deconditioning.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Its ethical problems mean modern ethics committees would never approve the study.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rat + noise pairing produced conditioned fear with generalisation. (b) N=1, no controls, unethical harm to a child.",
            commonErrors: ["Treating the study as strong evidence despite its severe methodological limits."],
          },
        },
        {
          id: "psych-u3-ccq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Extinction in classical conditioning occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The UCS is presented without the CS" },
              { id: "b", text: "A new stimulus is paired with the CS" },
              { id: "c", text: "The CS and UCS are presented simultaneously every trial" },
              { id: "d", text: "The CS is presented repeatedly without the UCS" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extinction", statement: "The gradual weakening and disappearance of the CR when the CS is presented without the UCS." },
            ],
            steps: [
              { reasoning: "Extinction = CS alone, repeatedly, without the UCS.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The CS is presented repeatedly without the UCS",
            commonErrors: ["Reversing the roles — extinction requires the CS without the UCS, not the reverse."],
          },
        },
        {
          id: "psych-u3-ccq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A researcher measures salivation in ml. Baseline before conditioning: 2 ml. After 20 CS-UCS pairings: 11 ml. After 20 CS-alone extinction trials: 5 ml.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Increase in salivation produced by conditioning (ml)", answer: 9 },
              { label: "(b) Decrease in salivation during extinction (ml)", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Measuring conditioning", statement: "Acquisition is measured as the rise in CR from baseline; extinction as its fall back toward baseline." },
            ],
            steps: [
              { reasoning: "Conditioning gain = post-conditioning minus baseline.", working: "11-2=9 ml", marks: 1, markCode: "M" },
              { reasoning: "Extinction loss = post-conditioning minus post-extinction.", working: "11-5=6 ml", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 9 ml (b) 6 ml",
            commonErrors: ["Comparing extinction value to baseline instead of to the conditioned peak."],
          },
        },
        {
          id: "psych-u3-ccq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how advertisers use classical conditioning principles to influence consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluative conditioning", statement: "Pairing a product (CS) with pleasant stimuli (UCS) transfers positive feelings to the brand." },
            ],
            steps: [
              { reasoning: "Advertisers repeatedly pair products with positive images — happy families, music, attractive people.", marks: 1, markCode: "M" },
              { reasoning: "The pleasant stimulus naturally produces positive feelings (UCR).", marks: 1, markCode: "M" },
              { reasoning: "Through pairing, the product alone triggers those positive feelings (CR) — consumers associate the brand with good emotions.", marks: 1, markCode: "R" },
              { reasoning: "Generalisation can extend the positive response to the whole product range or similar packaging.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Products paired with positive stimuli acquire positive emotional responses — evaluative conditioning.",
            commonErrors: ["Assuming consumers consciously evaluate the advert — the association can operate without awareness."],
          },
        },
        {
          id: "psych-u3-ccq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A client has developed a fear of dentists after a painful extraction and avoids appointments for years.",
          parts: [
            { label: "a", prompt: "Explain the client's fear using classical conditioning terminology.", marks: 3 },
            { label: "b", prompt: "Describe how systematic desensitisation could treat this fear.", marks: 3 },
            { label: "c", prompt: "Evaluate the strengths and limitations of this treatment approach.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counterconditioning", statement: "Systematic desensitisation pairs the feared CS with relaxation to extinguish the conditioned fear response." },
            ],
            steps: [
              { part: "a", reasoning: "The dental surgery/chair (neutral stimulus) was paired with the painful extraction (UCS producing pain/fear UCR).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The dental stimuli alone now trigger fear (CR); avoidance prevents extinction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fear may have generalised to the dentist's drill, white coat or even the word 'dentist'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A hierarchy is built from least to most anxiety-provoking dental situations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The client learns relaxation techniques, then imagines or encounters each step while staying relaxed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeated relaxed exposures extinguish the conditioned fear response up the hierarchy.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: evidence-based, gradual and client-controlled — less distressing than flooding.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: can be slow; does not address underlying beliefs about pain; requires client motivation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Dental CS + pain UCS → conditioned fear; avoidance maintains it. (b) Hierarchy + relaxation + graded exposure. (c) Effective but slow and limited.",
            commonErrors: ["Confusing systematic desensitisation with flooding — desensitisation is gradual and paired with relaxation."],
          },
        },
      ],
    },
    {
      id: "psych-u3-operant",
      title: "Operant conditioning",
      skill: "Describe Skinner's operant conditioning including reinforcement types, schedules and applications to behaviour change.",
      lesson: {
        sections: [
          {
            heading: "Skinner's model",
            body: "B.F. **Skinner** showed behaviour is shaped by its consequences. **Positive reinforcement** adds a pleasant stimulus (praise, food) to increase behaviour; **negative reinforcement** removes an unpleasant stimulus (turning off an alarm) to increase behaviour — note this is not punishment. **Punishment** decreases behaviour: positive punishment adds an aversive stimulus, negative punishment removes a pleasant one.",
          },
          {
            heading: "Schedules of reinforcement",
            body: "**Continuous reinforcement** rewards every response — fast learning but rapid extinction when stopped. **Partial reinforcement** rewards some responses: **fixed ratio** (every nth response), **variable ratio** (unpredictable number — most resistant to extinction, e.g. gambling), **fixed interval** (first response after a set time) and **variable interval** (unpredictable times — steady responding). Partial schedules produce slower learning but much greater persistence.",
          },
          {
            heading: "Applications and evaluation",
            body: "Operant conditioning underlies **behaviour modification** (token economies, shaping), explains why behaviours persist (intermittent rewards), and informs parenting and education. Weaknesses: it reduces behaviour to observable acts, ignoring cognition and biology; punishment can produce fear and aggression rather than learning; ethical concerns about control. Bandura's social learning theory later added cognitive processes.",
          },
        ],
        keyFormulas: [
          { name: "Reinforcement types", statement: "Positive = add reward; Negative = remove aversive (both increase behaviour)" },
          { name: "Punishment types", statement: "Positive = add aversive; Negative = remove reward (both decrease behaviour)" },
          { name: "Partial schedules", statement: "Variable ratio = most resistant to extinction" },
        ],
        workedExample: {
          problem: "A parent rewards a child with screen time after homework. Identify the reinforcement type and predict extinction pattern if rewards stop.",
          solution: "Positive reinforcement (adding a pleasant stimulus increases homework behaviour). If rewards stop, extinction occurs — but if rewards were given variably (not every time), extinction will be slower and resistance higher.",
        },
      },
      questions: [
        {
          id: "psych-u3-ocq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Negative reinforcement involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing an unpleasant stimulus" },
              { id: "b", text: "Adding an unpleasant stimulus" },
              { id: "c", text: "Removing a pleasant stimulus" },
              { id: "d", text: "Adding a pleasant stimulus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative reinforcement", statement: "Removing an aversive stimulus to increase behaviour." },
            ],
            steps: [
              { reasoning: "Negative reinforcement removes something unpleasant, strengthening behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Removing an unpleasant stimulus",
            commonErrors: ["Confusing negative reinforcement with punishment — reinforcement increases behaviour."],
          },
        },
        {
          id: "psych-u3-ocq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why variable ratio schedules produce the most persistent behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variable ratio", statement: "Unpredictable reinforcement creates high, steady response rates and slow extinction." },
            ],
            steps: [
              { reasoning: "Rewards come after an unpredictable number of responses — the learner cannot predict when the next reward will arrive.", marks: 1, markCode: "M" },
              { reasoning: "This uncertainty keeps motivation high — every response might be the rewarded one.", marks: 1, markCode: "M" },
              { reasoning: "When rewards stop, extinction is very slow because the learner keeps trying 'just in case' — e.g. gambling persistence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unpredictable rewards → persistent responding and slow extinction (gambling effect).",
            commonErrors: ["Confusing variable ratio with fixed interval schedules."],
          },
        },
        {
          id: "psych-u3-ocq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the difference between positive punishment and negative punishment, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Punishment types", statement: "Positive punishment adds aversive stimulus; negative punishment removes a pleasant one — both decrease behaviour." },
            ],
            steps: [
              { reasoning: "Positive punishment: adding something unpleasant — e.g. a fine for speeding reduces driving speed.", marks: 1, markCode: "M" },
              { reasoning: "Negative punishment: removing something pleasant — e.g. taking away a teenager's phone privileges reduces swearing.", marks: 1, markCode: "M" },
              { reasoning: "Both decrease behaviour but through opposite operations — adding vs removing.", marks: 1, markCode: "R" },
              { reasoning: "Note: both are punishment (decrease behaviour), unlike negative reinforcement which increases behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive punishment adds aversive; negative punishment removes pleasant — both reduce behaviour.",
            commonErrors: ["Labelling time-out as positive punishment — it removes reinforcers (negative punishment)."],
          },
        },
        {
          id: "psych-u3-ocq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A teacher wants to increase student participation in class discussions.",
          parts: [
            { label: "a", prompt: "Design an operant conditioning programme using reinforcement to achieve this.", marks: 3 },
            { label: "b", prompt: "Explain which schedule of reinforcement would maintain participation long-term.", marks: 2 },
            { label: "c", prompt: "Evaluate the ethical and practical limitations of behaviour modification in classrooms.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Behaviour modification", statement: "Reinforce desired behaviour to increase its frequency; use appropriate schedules for persistence." },
            ],
            steps: [
              { part: "a", reasoning: "Define target behaviour: voluntary contributions to discussion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply positive reinforcement — praise, points or privileges — immediately after each contribution.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shaping: reward successive approximations if students are initially reluctant.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Variable ratio or variable interval schedule maintains behaviour best — unpredictable rewards prevent extinction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Continuous reinforcement builds behaviour quickly initially, then switch to partial schedule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethical concern: extrinsic rewards may undermine intrinsic motivation to learn.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Practical: requires consistent teacher effort; rewards may become expected and lose effect.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Also ignores cognitive factors — students may participate for marks not understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reinforce contributions, shape if needed. (b) Variable schedule for persistence. (c) Intrinsic motivation risk + consistency demands.",
            commonErrors: ["Using punishment to increase participation — punishment decreases behaviour."],
          },
        },
        {
          id: "psych-u3-ocq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Positive reinforcement is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding a pleasant stimulus to increase behaviour" },
              { id: "b", text: "Removing an unpleasant stimulus to increase behaviour" },
              { id: "c", text: "Adding an unpleasant stimulus to decrease behaviour" },
              { id: "d", text: "Removing a pleasant stimulus to decrease behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive reinforcement", statement: "Adding a pleasant stimulus to increase the likelihood of a behaviour." },
            ],
            steps: [
              { reasoning: "Positive reinforcement adds something pleasant and increases behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Adding a pleasant stimulus to increase behaviour",
            commonErrors: ["Confusing positive reinforcement with negative reinforcement — both increase behaviour but differ in add vs remove."],
          },
        },
        {
          id: "psych-u3-ocq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Positive punishment involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding an unpleasant stimulus" },
              { id: "b", text: "Adding a pleasant stimulus" },
              { id: "c", text: "Removing a pleasant stimulus" },
              { id: "d", text: "Removing an unpleasant stimulus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive punishment", statement: "Adding an aversive stimulus to decrease the likelihood of a behaviour." },
            ],
            steps: [
              { reasoning: "Positive punishment adds something unpleasant to reduce behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Adding an unpleasant stimulus",
            commonErrors: ["Confusing positive punishment with positive reinforcement — punishment decreases behaviour."],
          },
        },
        {
          id: "psych-u3-ocq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "On a fixed interval schedule, reinforcement is delivered:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After an unpredictable number of responses" },
              { id: "b", text: "At unpredictable time intervals" },
              { id: "c", text: "For the first response after a set amount of time" },
              { id: "d", text: "After every nth response" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fixed interval schedule", statement: "Reinforcement follows the first response made after a fixed time period has elapsed." },
            ],
            steps: [
              { reasoning: "Fixed interval is time-based: first response after a set time is rewarded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** First response after a set amount of time",
            commonErrors: ["Confusing fixed interval (time-based) with fixed ratio (response-count-based)."],
          },
        },
        {
          id: "psych-u3-ocq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a token economy, a student needs 12 tokens to earn a reward. Each correct homework answer earns 3 tokens.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Minimum number of correct answers needed", answer: 4 },
              { label: "(b) Tokens earned after 6 correct answers", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Token economy", statement: "Tokens are secondary reinforcers exchanged for rewards; earnings = rate x quantity." },
            ],
            steps: [
              { reasoning: "12 tokens divided by 3 tokens per answer gives 4 answers.", working: "12/3=4", marks: 1, markCode: "M" },
              { reasoning: "6 answers at 3 tokens each gives 18 tokens.", working: "6x3=18", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 4 (b) 18",
            commonErrors: ["Dividing tokens by answers instead of answers by tokens-per-answer."],
          },
        },
        {
          id: "psych-u3-ocq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe how shaping is used to teach a complex behaviour through operant conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shaping", statement: "Reinforcing successive approximations toward a target behaviour until the full behaviour is produced." },
            ],
            steps: [
              { reasoning: "The target behaviour is broken into small steps or approximations the learner can already perform.", marks: 1, markCode: "M" },
              { reasoning: "Each closer approximation is reinforced, gradually raising the standard required for reward.", marks: 1, markCode: "M" },
              { reasoning: "Eventually the full target behaviour is produced and reinforced — e.g. teaching a dog to roll over step by step.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reinforce successive approximations, gradually raising the standard until the full behaviour is learned.",
            commonErrors: ["Assuming the full behaviour must be performed before any reinforcement is given."],
          },
        },
        {
          id: "psych-u3-ocq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Compare continuous reinforcement with partial reinforcement schedules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reinforcement schedules", statement: "Continuous rewards every response; partial rewards only some responses and produces slower extinction." },
            ],
            steps: [
              { reasoning: "Continuous reinforcement rewards every response — behaviour is acquired quickly.", marks: 1, markCode: "M" },
              { reasoning: "Partial reinforcement rewards only some responses — learning is slower but extinction is much slower and more resistant.", marks: 1, markCode: "M" },
              { reasoning: "Partial schedules (especially variable ratio) produce the most persistent behaviour — e.g. gambling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continuous = fast learning, fast extinction; partial = slower learning, much greater persistence.",
            commonErrors: ["Claiming continuous reinforcement produces more persistent behaviour — it extinguishes fastest."],
          },
        },
        {
          id: "psych-u3-ocq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why punishment is often ineffective at producing lasting behaviour change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of punishment", statement: "Punishment suppresses behaviour but teaches no alternative and can generate fear, aggression or avoidance." },
            ],
            steps: [
              { reasoning: "Punishment only decreases a behaviour — it does not teach what to do instead, so the behaviour may return when the punisher is absent.", marks: 1, markCode: "M" },
              { reasoning: "It can produce fear and anxiety toward the punishing person or situation, damaging relationships.", marks: 1, markCode: "M" },
              { reasoning: "It may model aggression — the punisher demonstrates that force controls behaviour.", marks: 1, markCode: "R" },
              { reasoning: "The punished person may avoid the context entirely rather than learn the desired behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Punishment suppresses without teaching, creates fear/aggression, and the behaviour often returns.",
            commonErrors: ["Assuming punishment produces permanent change — suppression is not unlearning."],
          },
        },
        {
          id: "psych-u3-ocq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A dog owner wants to teach their dog to sit on command, and a parent wants to reduce a child's tantrums.",
          parts: [
            { label: "a", prompt: "Explain how operant conditioning principles could be applied to each goal.", marks: 4 },
            { label: "b", prompt: "Evaluate the use of punishment versus reinforcement in achieving these goals.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Applied operant conditioning", statement: "Reinforce desired behaviour and withhold reinforcement for undesired behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Dog: positively reinforce sitting with food or praise immediately after the dog sits — shaping approximations if needed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use a continuous schedule initially, then switch to partial to maintain the behaviour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Child: ignore tantrums (extinction — attention is the reinforcer) while positively reinforcing calm behaviour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Time-out (negative punishment) can remove attention, but must be paired with reinforcement of alternatives.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strength of reinforcement: teaches desired behaviour and builds positive associations.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Limitation of punishment: fear, aggression and avoidance may result; behaviour returns when punishment stops.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reinforcement alone may be slow — extinction of tantrums requires consistency and tolerance of an initial increase.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Best practice combines reinforcement of alternatives with planned ignoring of unwanted behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reinforce sitting; ignore tantrums + reinforce calm. (b) Reinforcement teaches; punishment suppresses and backfires.",
            commonErrors: ["Using punishment for tantrums without reinforcing the alternative calm behaviour."],
          },
        },
        {
          id: "psych-u3-ocq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Negative punishment is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding an unpleasant stimulus to decrease behaviour" },
              { id: "b", text: "Adding a pleasant stimulus to increase behaviour" },
              { id: "c", text: "Removing an unpleasant stimulus to increase behaviour" },
              { id: "d", text: "Removing a pleasant stimulus to decrease behaviour" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative punishment", statement: "Removing a pleasant stimulus to decrease the likelihood of a behaviour." },
            ],
            steps: [
              { reasoning: "Negative punishment removes something pleasant and decreases behaviour — e.g. taking away phone time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Removing a pleasant stimulus to decrease behaviour",
            commonErrors: ["Confusing negative punishment with negative reinforcement — punishment decreases, reinforcement increases."],
          },
        },
        {
          id: "psych-u3-ocq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "On a fixed ratio schedule of reinforcement, a reward is given after every 5th correct response. A student makes 120 correct responses.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of rewards earned", answer: 24 },
              { label: "(b) Number of responses made between consecutive rewards", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fixed ratio schedule", statement: "Reinforcement follows every nth response; between rewards the learner makes n-1 unrewarded responses." },
            ],
            steps: [
              { reasoning: "120 responses divided by 5 responses per reward gives 24 rewards.", working: "120/5=24", marks: 1, markCode: "M" },
              { reasoning: "After each rewarded response, 4 unrewarded responses occur before the next reward.", working: "5-1=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 24 (b) 4",
            commonErrors: ["Answering 5 for part (b) — the rewarded response itself is not 'between' rewards."],
          },
        },
        {
          id: "psych-u3-ocq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why receiving 'likes' on social media posts is so effective at maintaining posting behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intermittent social reinforcement", statement: "Unpredictable likes act as variable-ratio reinforcement, producing persistent posting." },
            ],
            steps: [
              { reasoning: "Likes function as positive reinforcement — a pleasant stimulus (approval, attention) that increases posting.", marks: 1, markCode: "M" },
              { reasoning: "Likes arrive unpredictably — the user cannot predict which post will be rewarded, creating a variable ratio schedule.", marks: 1, markCode: "M" },
              { reasoning: "Variable ratio reinforcement produces high, steady response rates and slow extinction — users keep posting 'just in case'.", marks: 1, markCode: "R" },
              { reasoning: "Social approval also ties into belonging needs, making the reinforcement personally meaningful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Likes are unpredictable positive reinforcement (variable ratio) — producing persistent, extinction-resistant posting.",
            commonErrors: ["Describing likes as continuous reinforcement — they are intermittent by nature."],
          },
        },
        {
          id: "psych-u3-ocq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A rat presses a lever that occasionally delivers food pellets, and pressing gradually increases over weeks. This pattern is best explained by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variable ratio reinforcement" },
              { id: "b", text: "Negative punishment" },
              { id: "c", text: "Continuous reinforcement" },
              { id: "d", text: "Stimulus generalisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variable ratio reinforcement", statement: "Unpredictable food rewards strengthen lever pressing and make it resistant to extinction." },
            ],
            steps: [
              { reasoning: "Occasional, unpredictable pellets = variable ratio schedule, which produces steadily increasing persistent pressing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Variable ratio reinforcement",
            commonErrors: ["Assuming the rat presses because it 'understands' the mechanism — behaviour is shaped by consequences, not insight."],
          },
        },
      ],
    },
  ],
};
