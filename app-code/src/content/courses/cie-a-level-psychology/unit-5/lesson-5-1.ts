import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciealepsych-u5-lesson-5-1",
  code: "5-1",
  title: "Memory Models: Multi-Store and Working Memory",
  goal: "I CAN explain and evaluate models of memory including MSM and Baddeley's working memory.",
  standards: [
    "Cambridge A Level Psychology 9698",
    "Unit 5: cognitive psychology depth",
  ],
  vocabulary: [
    {
      term: "Multi-store model (MSM)",
      definition: "Atkinson-Shiffrin model: sensory, STM, LTM.",
    },
    { term: "Sensory memory", definition: "Brief icon/echoic store." },
    {
      term: "Short-term memory (STM)",
      definition: "Limited capacity/duration store.",
    },
    {
      term: "Long-term memory (LTM)",
      definition: "Permanent, unlimited store.",
    },
    {
      term: "Working memory",
      definition: "Baddeley's active manipulation system.",
    },
    {
      term: "Central executive",
      definition: "Working memory's attentional controller.",
    },
  ],
  concepts: [
    {
      id: "ciealepsych-u5l1-c1-msm",
      title: "Multi-store model of memory",
      skill: "Explain the MSM and evaluate its strengths and limitations.",
      lesson: {
        sections: [
          {
            heading: "MSM structure",
            body: "Atkinson-Shiffrin (1968): information flows **sensory memory** (iconic/echoic, ~seconds) → **STM** (limited capacity ~7±2 items, ~18-30 sec, acoustic coding) → **LTM** (unlimited, permanent, semantic coding). Transfer via **rehearsal** (maintenance). Forgetting: trace decay, displacement, interference.",
          },
          {
            heading: "MSM evaluation",
            body: "**Strengths**: simple, testable, explains serial position effect (primacy= LTM rehearsal, recency=STM). **Limitations**: STM/LTM not unitary (working memory evidence), rehearsal too simplistic (elaborative needed), ignores processing depth, linear flow oversimplified.",
          },
        ],
        keyFormulas: [
          { name: "STM capacity", statement: "~7±2 items" },
          { name: "STM duration", statement: "~18-30 seconds" },
          { name: "Serial position", statement: "Primacy + recency effect" },
        ],
        workedExample: {
          problem: "Why do people remember the start and end of lists best?",
          solution:
            "Primacy: early items rehearsed → transferred to LTM. Recency: last items still in STM. Middle items displaced/interfered → forgotten — supports MSM.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The MSM was proposed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atkinson and Shiffrin" },
              { id: "b", text: "Piaget" },
              { id: "c", text: "Baddeley" },
              { id: "d", text: "Freud" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "MSM authors",
                statement: "Atkinson-Shiffrin.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Atkinson-Shiffrin",
            commonErrors: ["Wrong authors."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is STM capacity and duration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "STM limits", statement: "7±2, ~30s." },
            ],
            steps: [
              { reasoning: "Capacity.", marks: 1, markCode: "M" },
              { reasoning: "Duration.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Capacity ~7±2 items (Miller); duration ~18-30 seconds without rehearsal; acoustic coding.",
            commonErrors: ["Unlimited."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'serial position effect'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Serial position",
                statement: "Primacy+recency.",
              },
            ],
            steps: [
              { reasoning: "Primacy.", marks: 1, markCode: "M" },
              { reasoning: "Recency.", marks: 1, markCode: "M" },
              { reasoning: "Middle.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primacy: early items rehearsed → LTM. Recency: last items still in STM. Middle items forgotten — evidence for STM/LTM distinction.",
            commonErrors: ["Uniform recall."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the MSM as a model of memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MSM eval",
                statement: "Strengths+limits.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Simple, testable, explains serial position — but STM/LTM not unitary (WM evidence), rehearsal too simple, ignores elaborative processing — historically important but superseded.",
            commonErrors: ["Perfect model."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of rehearsal in the MSM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rehearsal",
                statement: "Maintenance only.",
              },
            ],
            steps: [
              { reasoning: "Role.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "MSM sees rehearsal as maintenance repetition — but elaborative rehearsal (meaning, linking) transfers better; Craik & Lockhart show depth of processing matters more than repetition.",
            commonErrors: ["Rehearsal sufficient."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the three stores in the MSM?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "MSM stores",
                statement: "Sensory, STM, LTM.",
              },
            ],
            steps: [
              { reasoning: "Three named.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sensory (brief icon/echoic), STM (limited capacity/duration), LTM (unlimited/permanent) — linear flow via rehearsal.",
            commonErrors: ["Missing one."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "LTM is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acoustic coding only" },
              { id: "b", text: "Unlimited capacity, permanent duration" },
              { id: "c", text: "18 seconds" },
              { id: "d", text: "7±2 items" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "LTM", statement: "Unlimited." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Unlimited",
            commonErrors: ["STM limits."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two criticisms of the MSM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "MSM limits",
                statement: "Unitary + rehearsal.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. STM not unitary (WM shows subsystems) and rehearsal too simplistic (elaborative encoding better) — evidence shows processing more complex.",
            commonErrors: ["No criticisms."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does 'coding' differ between STM and LTM?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Coding",
                statement: "Acoustic vs semantic.",
              },
            ],
            steps: [
              { reasoning: "STM coding.", marks: 1, markCode: "M" },
              { reasoning: "LTM coding.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "STM: primarily acoustic (sound-alike errors — 'cat'→'hat'). LTM: primarily semantic (meaning-based) — coding differences support store distinction.",
            commonErrors: ["Same coding."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the MSM or working memory better explains memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model comparison",
                statement: "MSM vs WM.",
              },
            ],
            steps: [
              { reasoning: "MSM strengths.", marks: 1, markCode: "M" },
              { reasoning: "WM strengths.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "WM explains active manipulation, dual-task interference, better accounts for STM function — but MSM simpler, historically foundational; WM supersedes as more accurate but complex.",
            commonErrors: ["One better."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the MSM, information moves from STM to LTM through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displacement" },
              { id: "b", text: "No rehearsal needed" },
              { id: "c", text: "Maintenance rehearsal" },
              { id: "d", text: "Elaborative rehearsal only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Transfer", statement: "Rehearsal." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Maintenance rehearsal",
            commonErrors: ["No rehearsal."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to Miller, STM can hold approximately how many items (7±2)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "STM capacity", statement: "7±2." },
            ],
            steps: [
              {
                reasoning:
                  "Miller (1956) estimated STM capacity at 7±2 items.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7",
            commonErrors: ["Unlimited capacity."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Without rehearsal, information remains in STM for approximately how many seconds?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, tolerance: 15 }],
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "STM duration", statement: "~18-30s." },
            ],
            steps: [
              {
                reasoning:
                  "STM duration is approximately 18-30 seconds without rehearsal; ~30 seconds is the standard estimate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Permanent storage."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The primacy effect in free recall is best explained by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recency displacement" },
              { id: "b", text: "Early items still in STM" },
              { id: "c", text: "Random recall order" },
              {
                id: "d",
                text: "Early items rehearsed and transferred to LTM",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Primacy",
                statement: "LTM transfer.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Rehearsed into LTM",
            commonErrors: ["STM explanation."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which finding most challenges the MSM's claim of a unitary STM?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Limited STM capacity" },
              {
                id: "b",
                text: "Dual-task evidence for independent verbal and visuospatial systems",
              },
              { id: "c", text: "Acoustic coding errors in STM" },
              { id: "d", text: "Serial position effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WM evidence",
                statement: "Non-unitary STM.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Dual-task evidence",
            commonErrors: ["Supports MSM."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'levels of processing' (Craik & Lockhart) challenges the MSM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LoP",
                statement: "Depth matters.",
              },
            ],
            steps: [
              { reasoning: "Shallow vs deep.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deep processing (meaning) produces better recall than shallow (e.g. counting letters) regardless of rehearsal — MSM's rehearsal mechanism too simplistic; transfer depends on encoding depth, not repetition alone.",
            commonErrors: ["Rehearsal sufficient."],
          },
        },
      ],
    },
    {
      id: "ciealepsych-u5l1-c2-working",
      title: "Baddeley's working memory model",
      skill: "Explain the components of working memory and evaluate the model.",
      lesson: {
        sections: [
          {
            heading: "Working memory components",
            body: "Baddeley & Hitch (1974): **Central executive** (attentional control), **phonological loop** (verbal/acoustic — phonological store + articulatory rehearsal), **visuospatial sketchpad** (visual/spatial imagery), **episodic buffer** (added 2000 — integrates info, links to LTM). STM is active workspace, not passive store.",
          },
          {
            heading: "Evaluation",
            body: "**Strengths**: explains dual-task interference, more flexible than MSM, supported by dual-task studies, neuroimaging (Baddeley patients). **Limitations**: central executive vaguely defined, components may not be fully independent, complex vs MSM simplicity — but better explains real cognitive tasks.",
          },
        ],
        keyFormulas: [
          { name: "Central executive", statement: "Attentional control" },
          { name: "Phonological loop", statement: "Verbal storage" },
          { name: "Visuospatial sketchpad", statement: "Visual/spatial" },
        ],
        workedExample: {
          problem:
            "Why can you repeat a phone number while visualising a route?",
          solution:
            "Phonological loop handles verbal repetition; visuospatial sketchpad handles route imagery — independent systems allow simultaneous processing.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The central executive in working memory:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Links to LTM" },
              {
                id: "b",
                text: "Controls attention and coordinates subsystems",
              },
              { id: "c", text: "Stores visual info" },
              { id: "d", text: "Stores verbal info" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CE", statement: "Control." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Control",
            commonErrors: ["Storage confused."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two components of working memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "WM components",
                statement: "CE, loops, buffer.",
              },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. phonological loop (verbal storage) and visuospatial sketchpad (visual/spatial) — plus central executive, episodic buffer.",
            commonErrors: ["MSM stores."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'dual-task interference' and how it supports WM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual-task",
                statement: "Interference.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "WM prediction.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Two verbal tasks interfere (share phonological loop); verbal + visual don't (separate systems) — evidence for component independence supporting WM over unitary STM.",
            commonErrors: ["All interfere."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the working memory model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WM eval",
                statement: "Strengths+limits.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Better explains active processing, dual tasks, neuropsychological evidence — but central executive vaguely defined, component independence questioned, complex vs MSM simplicity.",
            commonErrors: ["Perfect model."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of the 'episodic buffer' in working memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Episodic buffer",
                statement: "Integration.",
              },
            ],
            steps: [
              { reasoning: "Function.", marks: 1, markCode: "M" },
              { reasoning: "Why added.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Integrates info across subsystems, links WM to LTM, holds multimodal episodes — added to explain binding problem; but its role still debated, may be LTM interface rather than WM component.",
            commonErrors: ["Uncontroversial."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'phonological loop' responsible for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "PL", statement: "Verbal." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Verbal/acoustic information — phonological store (holds sounds ~2s) + articulatory rehearsal (refreshes); explains word-length effect.",
            commonErrors: ["Visual."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Baddeley's working memory model includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only visual store" },
              { id: "b", text: "Central executive + slave systems" },
              { id: "c", text: "Sensory + STM + LTM" },
              { id: "d", text: "Only phonological loop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "WM", statement: "CE + subsystems." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CE + systems",
            commonErrors: ["MSM confused."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'word-length effect' and what it shows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Word-length",
                statement: "Short words better.",
              },
            ],
            steps: [
              { reasoning: "Effect.", marks: 1, markCode: "M" },
              { reasoning: "Explanation.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Short words recalled better than long words — phonological loop can hold fewer long words (time-based decay ~2s); supports articulatory rehearsal limit.",
            commonErrors: ["Meaning effect."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strengths of the working memory model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "WM strengths",
                statement: "Evidence-based.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. explains dual-task interference (component independence) and supported by neuropsychological evidence (patient studies, brain imaging).",
            commonErrors: ["Weaknesses."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'central executive' concept in working memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CE",
                statement: "Vague but essential.",
              },
            ],
            steps: [
              { reasoning: "Role.", marks: 1, markCode: "M" },
              { reasoning: "Vagueness.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Essential for attention control, task switching, coordination — but vaguely defined ('attention system'), hard to test independently, may be multiple processes; necessary but under-specified.",
            commonErrors: ["Fully understood."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which working memory component links information to LTM?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phonological store" },
              { id: "b", text: "Episodic buffer" },
              { id: "c", text: "Articulatory rehearsal" },
              { id: "d", text: "Visuospatial sketchpad" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Episodic buffer",
                statement: "LTM link.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Episodic buffer",
            commonErrors: ["Wrong component."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The phonological store holds speech sounds for approximately how many seconds?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, tolerance: 0.5 }],
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Phon store", statement: "~2s." },
            ],
            steps: [
              {
                reasoning:
                  "The phonological store holds sounds for about 2 seconds before decay unless refreshed by articulatory rehearsal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2",
            commonErrors: ["30 seconds (STM confusion)."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the episodic buffer added to Baddeley's working memory model?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Episodic buffer",
                statement: "Added 2000.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Baddeley added the episodic buffer in 2000 to explain binding and the link to LTM.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2000",
            commonErrors: ["1974 (original model)."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a dual-task experiment, which pairing would cause the MOST interference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digit span + route imagery" },
              { id: "b", text: "Two visual tasks" },
              { id: "c", text: "Verbal task + spatial task" },
              { id: "d", text: "Two verbal tasks (digit span + rhyming)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual-task",
                statement: "Same system interferes.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Two verbal tasks",
            commonErrors: ["Cross-modal pair."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Baddeley et al.'s patient with impaired phonological loop showed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No measurable deficit" },
              {
                id: "b",
                text: "Poor digit span but normal visual span",
              },
              { id: "c", text: "Impaired both verbal and visual" },
              { id: "d", text: "Poor visual span but normal digit span" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PL patient",
                statement: "Verbal deficit.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Poor digit span only",
            commonErrors: ["Both systems."],
          },
        },
        {
          id: "ciealepsych-q-u5l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the episodic buffer is better understood as part of working memory or as part of long-term memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Buffer debate",
                statement: "WM vs LTM.",
              },
            ],
            steps: [
              { reasoning: "WM arguments.", marks: 1, markCode: "M" },
              { reasoning: "LTM arguments.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "As WM component: integrates subsystems, temporary storage, links to LTM. As LTM interface: holds episodic LTM information, may be retrieval store; binding function suggests WM role — evidence ambiguous, best seen as WM-LTM interface.",
            commonErrors: ["Settled issue."],
          },
        },
      ],
    },
  ],
};
