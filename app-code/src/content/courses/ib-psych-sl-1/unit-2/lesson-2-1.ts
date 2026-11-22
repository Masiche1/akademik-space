import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "psych-u2-lesson-2-1",
  code: "2-1",
  title: "Memory",
  goal: "I CAN describe models of memory, explain encoding, storage and retrieval, and evaluate explanations of forgetting.",
  standards: ["Paper 1", "Paper 2", "Topic 3"],
  vocabulary: [
    { term: "Encoding", definition: "The process of converting information into a form that can be stored in memory." },
    { term: "Storage", definition: "Retaining encoded information over time in memory stores." },
    { term: "Retrieval", definition: "Accessing and bringing stored information back into conscious awareness." },
    { term: "Multi-store model", definition: "Atkinson and Shiffrin's model: sensory, short-term and long-term memory stores." },
    { term: "Working memory", definition: "Baddeley's model of short-term memory with separate subsystems for different information types." },
    { term: "Forgetting", definition: "Failure to retrieve or store information that was previously learned." },
  ],
  concepts: [
    {
      id: "psych-u2-memory-models",
      title: "Models of memory",
      skill: "Describe the multi-store model and Baddeley's working memory model and evaluate their strengths and limitations.",
      lesson: {
        sections: [
          {
            heading: "The multi-store model",
            body: "**Atkinson and Shiffrin (1968)** proposed memory as a sequence of stores. Information enters **sensory memory** (iconic/echoic, lasting under a second), is attended to into **short-term memory** (capacity ~7±2 items, duration ~18 seconds without rehearsal), and through **rehearsal** passes to **long-term memory** (effectively unlimited capacity and duration). Forgetting occurs when information decays or is displaced before rehearsal.",
          },
          {
            heading: "Baddeley's working memory",
            body: "**Baddeley and Hitch (1974)** replaced the passive STM store with an active **working memory** system: the **central executive** (attention and coordination), the **phonological loop** (verbal-acoustic information), the **visuospatial sketchpad** (visual and spatial information) and the **episodic buffer** (integrating information across stores). This explains how we hold and manipulate information simultaneously.",
          },
          {
            heading: "Evaluating the models",
            body: "The multi-store model is simple and supported by serial position effects, but STM and LTM are not unitary stores — working memory evidence (e.g. patients with digit span deficits but intact LTM) shows multiple components. Baddeley's model explains dual-task performance and brain-damaged patients better, but the episodic buffer is less well specified. Both models treat memory as passive storage, understating reconstruction at retrieval.",
          },
        ],
        keyFormulas: [
          { name: "Multi-store flow", statement: "Sensory memory → (attention) → STM → (rehearsal) → LTM" },
          { name: "Working memory components", statement: "Central executive + phonological loop + visuospatial sketchpad + episodic buffer" },
        ],
        workedExample: {
          problem: "A patient can repeat a 7-digit number backwards but cannot remember a story's meaning. What does this suggest?",
          solution: "Digit span tests the phonological loop, which is intact; story comprehension requires the central executive and episodic buffer to integrate meaning — suggesting those components are impaired while the phonological loop is preserved.",
        },
      },
      questions: [
        {
          id: "psych-u2-mmq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Atkinson and Shiffrin's model, information passes from short-term to long-term memory through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primacy effect" },
              { id: "b", text: "Automatic processing" },
              { id: "c", text: "Chunking" },
              { id: "d", text: "Elaborative rehearsal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rehearsal", statement: "Maintenance or elaborative rehearsal transfers information from STM to LTM." },
            ],
            steps: [
              { reasoning: "Rehearsal is the mechanism linking STM to LTM in the multi-store model.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Elaborative rehearsal",
            commonErrors: ["Choosing chunking — that expands STM capacity, not transfers to LTM."],
          },
        },
        {
          id: "psych-u2-mmq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the components of Baddeley's working memory model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Working memory components", statement: "Central executive, phonological loop, visuospatial sketchpad, episodic buffer." },
            ],
            steps: [
              { reasoning: "Central executive: attention and coordination of the subsystems.", marks: 1, markCode: "M" },
              { reasoning: "Phonological loop: holds and rehearses verbal information; visuospatial sketchpad: visual-spatial information.", marks: 1, markCode: "M" },
              { reasoning: "Episodic buffer: integrates information from the subsystems and LTM into a unified episode.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Central executive, phonological loop, visuospatial sketchpad, episodic buffer.",
            commonErrors: ["Omitting the episodic buffer or confusing it with LTM."],
          },
        },
        {
          id: "psych-u2-mmq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the multi-store model accounts for the serial position effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Serial position effect", statement: "Early items benefit from rehearsal into LTM (primacy); late items remain in STM (recency)." },
            ],
            steps: [
              { reasoning: "Primacy effect: the first items are rehearsed longer, so they transfer to LTM and are remembered well.", marks: 1, markCode: "M" },
              { reasoning: "Recency effect: the last items are still in STM when recall begins, so they are retrieved easily.", marks: 1, markCode: "M" },
              { reasoning: "Middle items receive least rehearsal and are displaced from the limited-capacity STM — worst recalled.", marks: 1, markCode: "R" },
              { reasoning: "This pattern supports the model's distinction between stores and the role of rehearsal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primacy = rehearsal to LTM; recency = still in STM; middle items displaced.",
            commonErrors: ["Explaining primacy/recency without linking to the stores."],
          },
        },
        {
          id: "psych-u2-mmq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher presents participants with a 30-word list and tests recall after 30 seconds, 5 minutes and 1 week.",
          parts: [
            { label: "a", prompt: "Predict the pattern of recall at each delay and explain it using the multi-store model.", marks: 3 },
            { label: "b", prompt: "Describe one criticism of the multi-store model this study could reveal.", marks: 2 },
            { label: "c", prompt: "Evaluate whether working memory provides a better account of short-term retention.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Memory over time", statement: "Recall declines as unrehearsed STM items decay; rehearsed items persist in LTM." },
            ],
            steps: [
              { part: "a", reasoning: "At 30 seconds most unrehearsed items remain in STM — high recall, especially recency items.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "By 5 minutes unrehearsed STM items have decayed or been displaced — recall drops sharply.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At 1 week only rehearsed/elaborated items remain in LTM — low but stable recall.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "STM capacity is not fixed at 7±2 — chunking and rehearsal strategies change it, challenging the model.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The model treats STM as unitary, but different materials (words vs images) show different capacities.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Working memory explains why different information types are held separately and manipulated.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evidence: dual-task interference and patients with selective subsystem deficits support it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But it describes active processing, not long-term storage — it complements rather than replaces the multi-store model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) High→sharp drop→low stable. (b) Capacity/unitary-store assumptions. (c) Better for active STM, complements LTM model.",
            commonErrors: ["Predicting linear decline — decay is steepest early then plateaus."],
          },
        },
        {
          id: "psych-u2-mmq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Baddeley's working memory model was developed as a replacement for which component of Atkinson and Shiffrin's multi-store model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The long-term memory store" },
              { id: "b", text: "The short-term memory store" },
              { id: "c", text: "The rehearsal process" },
              { id: "d", text: "The sensory memory store" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Working memory", statement: "Baddeley's active replacement for the passive STM store in the multi-store model." },
            ],
            steps: [
              { reasoning: "Baddeley and Hitch (1974) replaced the unitary STM store with an active working memory system.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The short-term memory store",
            commonErrors: ["Thinking working memory replaces LTM — it only replaces STM."],
          },
        },
        {
          id: "psych-u2-mmq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the multi-store model, short-term memory has a limited capacity of about 7 ± 2 items. What is the maximum number of items STM can hold?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "STM capacity", statement: "Short-term memory holds approximately 7 ± 2 items." },
            ],
            steps: [
              { reasoning: "The capacity range is 7 ± 2, so the upper limit is 7 + 2.", marks: 1, markCode: "M" },
              { reasoning: "7 + 2 = 9 items.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 items",
            commonErrors: ["Answering 7 — that is the average, not the maximum."],
          },
        },
        {
          id: "psych-u2-mmq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Sensory memory stores a near-complete image of a stimulus for under one second. Using one second as the upper estimate, how many milliseconds is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "ms" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensory memory duration", statement: "Iconic/echoic sensory memory lasts under one second." },
            ],
            steps: [
              { reasoning: "One second must be converted to milliseconds.", marks: 1, markCode: "M" },
              { reasoning: "1 second = 1000 ms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 ms",
            commonErrors: ["Answering 1 — the question asks for milliseconds."],
          },
        },
        {
          id: "psych-u2-mmq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which component of Baddeley's working memory holds and rehearses verbal-acoustic information such as words and numbers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phonological loop" },
              { id: "b", text: "Episodic buffer" },
              { id: "c", text: "Central executive" },
              { id: "d", text: "Visuospatial sketchpad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phonological loop", statement: "The working memory subsystem that stores and rehearses verbal information." },
            ],
            steps: [
              { reasoning: "The phonological loop handles sound-based verbal material; the sketchpad handles visual-spatial material.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Phonological loop",
            commonErrors: ["Choosing the central executive — it coordinates but does not store verbal material."],
          },
        },
        {
          id: "psych-u2-mmq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A patient can repeat a 7-digit number backwards but cannot remember the meaning of a story. This pattern most directly challenges which assumption?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That sensory memory lasts under one second" },
              { id: "b", text: "That rehearsal transfers information to LTM" },
              { id: "c", text: "That STM is a single unitary store" },
              { id: "d", text: "That STM has a limited capacity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiple STM components", statement: "Digit span and story comprehension rely on different subsystems, so STM is not unitary." },
            ],
            steps: [
              { reasoning: "Intact digit span (phonological loop) with impaired story comprehension (central executive/episodic buffer) shows separable components.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** That STM is a single unitary store",
            commonErrors: ["Answering capacity — the deficit is qualitative, not quantitative."],
          },
        },
        {
          id: "psych-u2-mmq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The recency effect in free recall — remembering the last items on a list best — is best explained by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Last items still being held in STM at recall" },
              { id: "b", text: "Retroactive interference affecting earlier items" },
              { id: "c", text: "Last items being rehearsed into LTM" },
              { id: "d", text: "Last items receiving deeper encoding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Serial position effect", statement: "Recency reflects items still in STM; primacy reflects rehearsal into LTM." },
            ],
            steps: [
              { reasoning: "At recall, the most recent items have not yet decayed from STM, so they are retrieved easily.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Last items still being held in STM at recall",
            commonErrors: ["Confusing recency (STM) with primacy (LTM rehearsal)."],
          },
        },
        {
          id: "psych-u2-mmq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the flow of information through the multi-store model of memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Multi-store model", statement: "Sensory memory → attention → STM → rehearsal → LTM." },
            ],
            steps: [
              { reasoning: "Information first enters sensory memory, where it is briefly held in iconic or echoic form.", marks: 1, markCode: "M" },
              { reasoning: "Attended information passes to STM, which has limited capacity and duration and requires rehearsal.", marks: 1, markCode: "M" },
              { reasoning: "Rehearsed information is transferred to LTM, which has effectively unlimited capacity and duration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sensory memory → (attention) → STM → (rehearsal) → LTM.",
            commonErrors: ["Omitting the role of attention between sensory memory and STM."],
          },
        },
        {
          id: "psych-u2-mmq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Compare short-term memory and long-term memory in terms of capacity, duration and type of encoding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "STM vs LTM", statement: "STM is limited and brief; LTM is effectively unlimited and permanent." },
            ],
            steps: [
              { reasoning: "Capacity: STM holds about 7 ± 2 items; LTM has effectively unlimited capacity.", marks: 1, markCode: "M" },
              { reasoning: "Duration: STM lasts around 18 seconds without rehearsal; LTM can last a lifetime.", marks: 1, markCode: "M" },
              { reasoning: "Encoding: STM is largely acoustic/verbal; LTM stores semantic, visual and other codes.", marks: 1, markCode: "M" },
              { reasoning: "Information reaches LTM only through rehearsal from STM.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "STM: limited, ~18 s, acoustic; LTM: unlimited, permanent, semantic — linked by rehearsal.",
            commonErrors: ["Claiming STM has unlimited capacity or that LTM is always acoustic."],
          },
        },
        {
          id: "psych-u2-mmq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how Baddeley's working memory model accounts for the ability to hold a new phone number in mind while simultaneously planning a route through an unfamiliar city.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel processing in WM", statement: "Different subsystems handle different information types, coordinated by the central executive." },
            ],
            steps: [
              { reasoning: "The phone number is held in the phonological loop, which rehearses verbal digits.", marks: 1, markCode: "M" },
              { reasoning: "Route planning relies on the visuospatial sketchpad for spatial and visual information.", marks: 1, markCode: "M" },
              { reasoning: "The central executive coordinates attention between the two subsystems without overloading either.", marks: 1, markCode: "R" },
              { reasoning: "This parallel, multi-component processing explains dual-task performance better than a single STM store.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phonological loop holds digits; sketchpad handles the route; central executive coordinates both.",
            commonErrors: ["Assuming the two tasks would necessarily interfere — WM predicts they can run in parallel."],
          },
        },
        {
          id: "psych-u2-mmq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "After a head injury, a patient can vividly recall childhood events but cannot learn any new facts — even repeating the same information five times fails to produce recall the next day.",
          parts: [
            { label: "a", prompt: "Identify the type of amnesia shown and explain its key feature.", marks: 2 },
            { label: "b", prompt: "Explain what this pattern suggests about the role of the hippocampus in memory formation.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the multi-store model can account for this pattern of memory loss.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anterograde amnesia", statement: "Inability to form new long-term memories while old memories remain intact." },
            ],
            steps: [
              { part: "a", reasoning: "Anterograde amnesia — the inability to consolidate new information into LTM.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Key feature: retrograde memories preserved; new learning fails even with rehearsal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The hippocampus is critical for transferring information from STM to LTM (consolidation).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Damage here blocks the rehearsal-to-LTM transfer while leaving stored LTM and STM function intact.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This explains why immediate repetition may work but nothing survives to the next day.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Supports the model: a selective deficit at the STM→LTM stage fits the store-based architecture.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: the model does not specify the neural mechanism — it describes stores, not brain structures.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Overall: compatible with the model, but neuroscience adds the consolidation mechanism it lacks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Anterograde amnesia. (b) Hippocampus needed for consolidation to LTM. (c) Compatible, but mechanism is outside the model.",
            commonErrors: ["Calling it retrograde amnesia — that is loss of old memories, the opposite pattern."],
          },
        },
        {
          id: "psych-u2-mmq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which finding provides the strongest evidence against short-term memory being a single unitary store?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chunking increasing the number of items remembered" },
              { id: "b", text: "Patients with digit-span deficits but intact long-term memory" },
              { id: "c", text: "The serial position effect in free recall" },
              { id: "d", text: "Rehearsed information being recalled better" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence for multiple components", statement: "Selective STM deficits show STM is not a single store." },
            ],
            steps: [
              { reasoning: "KF and similar patients show verbal STM deficits with preserved spatial STM — impossible if STM were unitary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Patients with digit-span deficits but intact long-term memory",
            commonErrors: ["Choosing the serial position effect — it supports the multi-store model, not multiple STM components."],
          },
        },
        {
          id: "psych-u2-mmq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate Baddeley's working memory model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating working memory", statement: "Strengths: explains dual-task and patient data; limitations: episodic buffer vague, ignores long-term storage." },
            ],
            steps: [
              { reasoning: "Strength: explains why different information types are processed in parallel (e.g. holding digits while navigating).", marks: 1, markCode: "R" },
              { reasoning: "Strength: supported by patient studies (KF) and dual-task interference experiments.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: the episodic buffer is less well specified than the other components and its function is debated.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: superior to the unitary STM store but describes active processing, not how memories are stored long-term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Working memory explains active STM processing better than the MSM, but the episodic buffer is vague and it complements rather than replaces LTM theories.",
            commonErrors: ["Evaluating without reference to evidence or omitting a judgement."],
          },
        },
      ],
    },
    {
      id: "psych-u2-encoding-forgetting",
      title: "Encoding, retrieval and forgetting",
      skill: "Explain encoding strategies, retrieval cues and the main theories of forgetting.",
      lesson: {
        sections: [
          {
            heading: "Encoding and retrieval",
            body: "**Encoding** transforms information for storage: acoustic (sound-based), visual (image-based) or semantic (meaning-based). **Levels of processing** theory (Craik and Lockhart) argues deep, semantic encoding produces better retention than shallow acoustic or visual encoding — hence mnemonics that link meaning are effective. **Retrieval** is aided by **retrieval cues** — context-dependent and state-dependent cues can dramatically improve recall.",
          },
          {
            heading: "Theories of forgetting",
            body: "**Trace decay theory**: memory traces fade with time if not rehearsed. **Interference theory**: new learning disrupts old memories — **proactive interference** (old learning disrupts new) and **retroactive interference** (new learning disrupts old). **Retrieval failure theory**: information is stored but inaccessible without the right cue. **Motivated forgetting**: repression of anxiety-provoking memories (Freudian, weak evidence). **Amnesia**: organic damage (e.g. hippocampus) produces anterograde or retrograde amnesia.",
          },
          {
            heading: "Improving memory",
            body: "Effective strategies include **elaborative rehearsal** (connecting new to known information), **chunking** (grouping items, e.g. phone numbers), **mnemonics** (acronyms, method of loci), **spaced practice** (distributed over time beats massed cramming) and **testing effect** (retrieval practice strengthens memory more than re-reading).",
          },
        ],
        keyFormulas: [
          { name: "Levels of processing", statement: "Deep/semantic encoding > shallow/acoustic/visual encoding" },
          { name: "Interference", statement: "Proactive = old disrupts new; Retroactive = new disrupts old" },
        ],
        workedExample: {
          problem: "Why do students who test themselves outperform those who re-read notes?",
          solution: "The testing effect: retrieval practice strengthens memory traces and reveals gaps, whereas re-reading produces fluency without durable storage. Spaced self-testing also exploits spacing effects.",
        },
      },
      questions: [
        {
          id: "psych-u2-forq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Retroactive interference occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory traces fade over time" },
              { id: "b", text: "Old learning disrupts new learning" },
              { id: "c", text: "Information cannot be retrieved without cues" },
              { id: "d", text: "New learning disrupts old learning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retroactive interference", statement: "Newly learned material disrupts recall of previously learned material." },
            ],
            steps: [
              { reasoning: "Retroactive = new interferes with old.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** New learning disrupts old learning",
            commonErrors: ["Reversing proactive and retroactive interference."],
          },
        },
        {
          id: "psych-u2-forq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by 'levels of processing' and its effect on memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Levels of processing", statement: "Deeper semantic processing produces more durable memory than shallow processing." },
            ],
            steps: [
              { reasoning: "Information can be processed at shallow levels (structural — what it looks like; phonemic — how it sounds) or deep levels (semantic — what it means).", marks: 1, markCode: "M" },
              { reasoning: "Deeper processing creates more elaborate, meaningful memory traces linked to existing knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Result: semantically encoded information is recalled better than superficially processed information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deep semantic encoding yields better retention than shallow processing.",
            commonErrors: ["Confusing levels of processing with stages of memory."],
          },
        },
        {
          id: "psych-u2-forq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare trace decay theory and interference theory as explanations of forgetting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forgetting theories", statement: "Decay = traces fade with time; Interference = competing memories block recall." },
            ],
            steps: [
              { reasoning: "Trace decay: memory traces weaken spontaneously over time unless rehearsed — forgetting is passive and time-based.", marks: 1, markCode: "M" },
              { reasoning: "Interference: forgetting is caused by competing material — proactive (old→new) or retroactive (new→old).", marks: 1, markCode: "M" },
              { reasoning: "Key difference: decay predicts forgetting increases simply with delay; interference predicts it depends on what else was learned.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: recall plateaus after initial drop (favouring interference); sleep protects memory (favouring consolidation over decay).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decay = passive fading; Interference = competition. Both contribute; evidence favours interference for many cases.",
            commonErrors: ["Claiming only one theory explains all forgetting."],
          },
        },
        {
          id: "psych-u2-forq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examiners report that students often forget material studied early in the revision period by exam time.",
          parts: [
            { label: "a", prompt: "Explain this pattern using two theories of forgetting.", marks: 3 },
            { label: "b", prompt: "Describe two evidence-based revision strategies that reduce forgetting.", marks: 2 },
            { label: "c", prompt: "Evaluate the usefulness of the testing effect for exam preparation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forgetting and revision", statement: "Decay and interference cause forgetting; spaced practice, retrieval practice and elaboration counteract it." },
            ],
            steps: [
              { part: "a", reasoning: "Trace decay: unrehearsed early material fades over the long revision period.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Retroactive interference: later topics learned overwrite or block recall of earlier material.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both operate over long delays — early material has had the most time to decay and be interfered with.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Spaced practice: distribute study sessions over weeks rather than massed cramming.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Retrieval practice/self-testing and elaborative linking of new to old material.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Testing effect is well supported: retrieval strengthens memory more than re-reading.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It also identifies gaps and exploits spacing when tests are distributed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: poor-quality self-tests or cramming before exams reduce its benefit — judgement needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Decay + retroactive interference. (b) Spacing + retrieval practice. (c) Strong evidence; quality of practice matters.",
            commonErrors: ["Recommending only re-reading — passive review is the weakest strategy."],
          },
        },
        {
          id: "psych-u2-forq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Proactive interference occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Old learning disrupts recall of new learning" },
              { id: "b", text: "Information is stored but cannot be accessed" },
              { id: "c", text: "Memory traces fade with the passage of time" },
              { id: "d", text: "New learning disrupts recall of old learning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proactive interference", statement: "Previously learned material interferes with the recall of newly learned material." },
            ],
            steps: [
              { reasoning: "Proactive = old learning acts forward to disrupt new learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Old learning disrupts recall of new learning",
            commonErrors: ["Reversing proactive and retroactive interference."],
          },
        },
        {
          id: "psych-u2-forq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to the levels of processing approach, which type of encoding produces the best long-term retention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Semantic encoding — processing the word's meaning" },
              { id: "b", text: "Phonemic encoding — noting how the word sounds" },
              { id: "c", text: "Structural encoding — noting what the word looks like" },
              { id: "d", text: "Repetition encoding — saying the word aloud many times" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Levels of processing", statement: "Deep semantic processing yields better retention than shallow processing." },
            ],
            steps: [
              { reasoning: "Deeper, meaning-based processing creates more durable memory traces.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Semantic encoding",
            commonErrors: ["Choosing repetition — shallow maintenance does not produce deep traces."],
          },
        },
        {
          id: "psych-u2-forq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a study on revision, participants who spaced six study sessions over two weeks recalled 65% of material, while those who crammed recalled 45%. What is the difference in recall between the two groups, in percentage points?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spacing effect", statement: "Distributed practice produces better retention than massed practice." },
            ],
            steps: [
              { reasoning: "Subtract the massed-practice recall from the spaced-practice recall: 65 - 45.", marks: 1, markCode: "M" },
              { reasoning: "65 - 45 = 20 percentage points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 percentage points",
            commonErrors: ["Dividing instead of subtracting — the question asks for a difference."],
          },
        },
        {
          id: "psych-u2-forq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A student studies vocabulary in one room and is tested in the same room, and recall improves compared with being tested elsewhere. This illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Context-dependent retrieval" },
              { id: "b", text: "The testing effect" },
              { id: "c", text: "State-dependent retrieval" },
              { id: "d", text: "Proactive interference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Context-dependent retrieval", statement: "Recall improves when the retrieval environment matches the encoding environment." },
            ],
            steps: [
              { reasoning: "Matching the external environment (the room) is a context cue, not an internal state.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Context-dependent retrieval",
            commonErrors: ["Confusing context-dependent (environment) with state-dependent (mood/physiological state)."],
          },
        },
        {
          id: "psych-u2-forq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "What is the main reason motivated forgetting (repression) is considered to have weak empirical support?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has been disproven by brain imaging" },
              { id: "b", text: "It only applies to children" },
              { id: "c", text: "It contradicts the multi-store model of memory" },
              { id: "d", text: "Evidence comes mainly from case studies and cannot be tested experimentally" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repression evidence", statement: "Motivated forgetting relies on clinical case studies; the repressed memories cannot be verified independently." },
            ],
            steps: [
              { reasoning: "Repression is inferred from therapy case reports, not demonstrated in controlled experiments.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Evidence comes mainly from case studies and cannot be tested experimentally",
            commonErrors: ["Claiming repression is disproven — it is unfalsifiable rather than disproven."],
          },
        },
        {
          id: "psych-u2-forq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Anterograde amnesia is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Difficulty retrieving memories without cues" },
              { id: "b", text: "Loss of memories formed before the injury" },
              { id: "c", text: "Temporary forgetting caused by stress" },
              { id: "d", text: "Inability to form new long-term memories after the injury" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anterograde amnesia", statement: "Inability to consolidate new information into long-term memory, often from hippocampal damage." },
            ],
            steps: [
              { reasoning: "Anterograde = forward-facing: new learning fails to enter LTM.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Inability to form new long-term memories after the injury",
            commonErrors: ["Confusing anterograde (new memories lost) with retrograde (old memories lost)."],
          },
        },
        {
          id: "psych-u2-forq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by retrieval cues and describe one type of cue-dependent memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval cue", statement: "A stimulus that aids access to stored information; context and state are common cue types." },
            ],
            steps: [
              { reasoning: "Retrieval cues are external or internal stimuli associated with encoded information that trigger recall.", marks: 1, markCode: "M" },
              { reasoning: "Context-dependent memory: recall is better when the retrieval environment matches the learning environment.", marks: 1, markCode: "M" },
              { reasoning: "This supports retrieval failure theory — information is stored but inaccessible without the matching cue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Retrieval cues trigger stored information; context-dependent memory shows environment-matching improves recall.",
            commonErrors: ["Describing encoding strategies rather than cues that aid retrieval."],
          },
        },
        {
          id: "psych-u2-forq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between proactive and retroactive interference, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interference theory", statement: "Competing memories disrupt recall — proactively (old→new) or retroactively (new→old)." },
            ],
            steps: [
              { reasoning: "Proactive interference: old learning disrupts new — e.g. an old phone number interfering with remembering a new one.", marks: 1, markCode: "M" },
              { reasoning: "Retroactive interference: new learning disrupts old — e.g. learning a new password makes the old one harder to recall.", marks: 1, markCode: "M" },
              { reasoning: "Both arise because similar, competing traces compete during retrieval.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proactive = old disrupts new; retroactive = new disrupts old.",
            commonErrors: ["Reversing the two types or omitting an example."],
          },
        },
        {
          id: "psych-u2-forq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate retrieval failure theory as an explanation of forgetting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Retrieval failure", statement: "Forgetting is an access problem, not a storage problem — cues restore 'lost' memories." },
            ],
            steps: [
              { reasoning: "Strength: explains tip-of-the-tongue states and context/state-dependent recall effects.", marks: 1, markCode: "R" },
              { reasoning: "Strength: distinguishes forgetting from never-learned information via reinstatement of cues.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: cannot easily separate retrieval failure from decay or interference — all predict the same observable forgetting.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: a plausible complementary mechanism, but hard to test directly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Retrieval failure explains cue-dependent recall well but is difficult to isolate from decay and interference.",
            commonErrors: ["One-sided evaluation — the answer needs both strengths and limitations plus a judgement."],
          },
        },
        {
          id: "psych-u2-forq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student studies Spanish vocabulary intensively for three weeks before an exam, then recalls very little a month later.",
          parts: [
            { label: "a", prompt: "Explain two theories that could account for this forgetting.", marks: 3 },
            { label: "b", prompt: "Describe two evidence-based strategies that would improve retention.", marks: 2 },
            { label: "c", prompt: "Evaluate the usefulness of the testing effect for this student's revision.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forgetting and retention", statement: "Decay and interference cause forgetting; spacing, retrieval practice and elaboration strengthen retention." },
            ],
            steps: [
              { part: "a", reasoning: "Trace decay: unrehearsed vocabulary fades over the month after study stopped.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Retroactive interference: subsequently learned material disrupts recall of the Spanish words.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both operate over the long delay between study and the later test.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Spaced practice: distribute review sessions over weeks instead of one intensive block.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Retrieval practice/self-testing and elaborative linking of words to known material.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Testing effect is well supported — active retrieval strengthens memory more than re-reading.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It also reveals gaps and works best when combined with spacing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: it requires effortful recall; passive strategies like highlighting give false confidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Decay + retroactive interference. (b) Spacing + retrieval practice. (c) Strong support, especially combined with spacing.",
            commonErrors: ["Recommending only more cramming — massed practice is the weakest approach."],
          },
        },
        {
          id: "psych-u2-forq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe three theories of forgetting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forgetting theories", statement: "Decay (traces fade), interference (competing memories) and retrieval failure (access problem) are the main accounts." },
            ],
            steps: [
              { reasoning: "Trace decay theory: memory traces weaken spontaneously over time unless rehearsed.", marks: 1, markCode: "M" },
              { reasoning: "Interference theory: competing memories disrupt recall — proactive (old→new) or retroactive (new→old).", marks: 1, markCode: "M" },
              { reasoning: "Retrieval failure theory: information remains stored but cannot be accessed without appropriate cues.", marks: 1, markCode: "M" },
              { reasoning: "Motivated forgetting (repression) is a fourth, weaker-evidence account.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Trace decay, interference (proactive/retroactive) and retrieval failure; repression has weaker support.",
            commonErrors: ["Listing strategies for improving memory rather than theories of forgetting."],
          },
        },
        {
          id: "psych-u2-forq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A participant recalls 80% of a word list immediately after learning and 50% one week later. What is the decrease in recall, in percentage points?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forgetting curve", statement: "Recall declines steeply at first and then levels off over time." },
            ],
            steps: [
              { reasoning: "Subtract the delayed recall from the immediate recall: 80 - 50.", marks: 1, markCode: "M" },
              { reasoning: "80 - 50 = 30 percentage points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 percentage points",
            commonErrors: ["Calculating a percentage of 80 instead of the difference — the question asks for a change."],
          },
        },
      ],
    },
  ],
};
