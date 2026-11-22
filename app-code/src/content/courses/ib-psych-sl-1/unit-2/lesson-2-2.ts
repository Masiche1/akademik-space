import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "psych-u2-lesson-2-2",
  code: "2-2",
  title: "Perception and Attention",
  goal: "I CAN explain perceptual processes including top-down and bottom-up processing, and describe models and types of attention.",
  standards: ["Paper 1", "Paper 2", "Topic 3"],
  vocabulary: [
    { term: "Perception", definition: "The brain's organisation and interpretation of sensory information into meaningful experience." },
    { term: "Sensation", definition: "The detection of physical stimuli by sensory receptors — raw data before interpretation." },
    { term: "Top-down processing", definition: "Perception guided by expectations, knowledge and context rather than raw sensory input." },
    { term: "Bottom-up processing", definition: "Perception built directly from sensory data without prior expectations." },
    { term: "Selective attention", definition: "Focusing cognitive resources on a particular stimulus while ignoring others." },
    { term: "Divided attention", definition: "Distributing attention across multiple tasks simultaneously." },
  ],
  concepts: [
    {
      id: "psych-u2-perception",
      title: "Perceptual processes",
      skill: "Distinguish sensation from perception and explain top-down, bottom-up and Gestalt principles of organisation.",
      lesson: {
        sections: [
          {
            heading: "Sensation versus perception",
            body: "**Sensation** is the raw detection of stimuli by receptors (light, sound waves). **Perception** is the brain's interpretation — turning sensation into meaningful experience. The same retinal image can be perceived differently depending on context, which is why perception is an active, constructive process rather than a passive recording.",
          },
          {
            heading: "Top-down and bottom-up processing",
            body: "**Bottom-up (data-driven) processing** builds perception from the sensory input itself — essential when encountering novel stimuli. **Top-down (conceptually driven) processing** uses prior knowledge, expectations and context to interpret ambiguous input — we read words faster when they form sentences, and see faces in clouds because we expect them. Most perception blends both: sensory data constrains interpretation while expectations fill gaps.",
          },
          {
            heading: "Gestalt principles",
            body: "Gestalt psychologists argued we perceive wholes rather than isolated parts. Key principles: **figure-ground** (we separate objects from backgrounds), **proximity** (nearby elements grouped together), **similarity** (similar elements grouped), **closure** (we mentally complete incomplete figures) and **continuity** (we perceive smooth continuous patterns). These explain illusions and rapid scene understanding.",
          },
        ],
        keyFormulas: [
          { name: "Processing directions", statement: "Bottom-up = stimulus-driven; Top-down = knowledge-driven" },
          { name: "Gestalt laws", statement: "Proximity + similarity + closure + continuity + figure-ground" },
        ],
        workedExample: {
          problem: "Why do we read a sentence faster than a random list of the same words?",
          solution: "Top-down processing: sentence context and grammar let the brain predict upcoming words, so less bottom-up analysis of each word is needed — perception is guided by expectations.",
        },
      },
      questions: [
        {
          id: "psych-u2-pqq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The principle that we mentally complete incomplete figures is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Similarity" },
              { id: "b", text: "Proximity" },
              { id: "c", text: "Closure" },
              { id: "d", text: "Continuity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Closure", statement: "The mind fills in missing parts to perceive complete objects." },
            ],
            steps: [
              { reasoning: "Closure is the Gestalt principle of completing incomplete figures.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Closure",
            commonErrors: ["Confusing closure with continuity (smooth patterns)."],
          },
        },
        {
          id: "psych-u2-pqq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between top-down and bottom-up processing, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Top-down vs bottom-up", statement: "Bottom-up = data-driven; top-down = conceptually driven." },
            ],
            steps: [
              { reasoning: "Bottom-up: perception built from raw sensory features — e.g. identifying an unfamiliar object by its edges and colours.", marks: 1, markCode: "M" },
              { reasoning: "Top-down: perception guided by knowledge and expectation — e.g. reading a word faster in a sentence because context predicts it.", marks: 1, markCode: "M" },
              { reasoning: "Most real perception integrates both processes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bottom-up = stimulus-driven; top-down = expectation-driven; both operate together.",
            commonErrors: ["Treating them as mutually exclusive rather than complementary."],
          },
        },
        {
          id: "psych-u2-pqq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how perception can be described as a 'constructive' process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constructive perception", statement: "The brain actively organises and interprets sensory data rather than passively recording it." },
            ],
            steps: [
              { reasoning: "Sensory input is ambiguous — the same retinal image can correspond to many real-world scenes.", marks: 1, markCode: "M" },
              { reasoning: "The brain uses prior knowledge, expectations and Gestalt rules to select one interpretation.", marks: 1, markCode: "M" },
              { reasoning: "This explains illusions: the constructed interpretation can differ from physical reality.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: perception is an active construction, not a copy of the stimulus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The brain actively interprets ambiguous sensory data using knowledge and rules — hence illusions.",
            commonErrors: ["Saying perception is 'wrong' — it is normally adaptive, illusions are exceptions."],
          },
        },
        {
          id: "psych-u2-pqq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Researchers debate whether attention is a single 'spotlight' or a set of separate processes.",
          parts: [
            { label: "a", prompt: "Describe two types of attention and how they differ.", marks: 2 },
            { label: "b", prompt: "Explain the 'spotlight' model of selective attention.", marks: 3 },
            { label: "c", prompt: "Evaluate whether attention can truly be divided across tasks.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attention models", statement: "Attention can be selective (focused) or divided (multi-task); capacity is limited." },
            ],
            steps: [
              { part: "a", reasoning: "Selective attention: focusing on one stimulus while ignoring distractors (e.g. cocktail party effect).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divided attention: allocating resources across two or more tasks simultaneously (e.g. talking while driving).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The spotlight model proposes attention moves across the visual field like a beam, selecting one region.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stimuli inside the spotlight are processed deeply; outside stimuli are filtered out early.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Supported by studies showing detection benefits for cued locations and costs for uncued ones.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divided attention works only when tasks are automatic or use different modalities — capacity is limited.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Dual-task studies show performance costs when two demanding tasks compete.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: attention can be divided for simple tasks but not without performance costs for complex ones.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Selective + divided. (b) Spotlight selects one region for deep processing. (c) Division possible but costly for demanding tasks.",
            commonErrors: ["Claiming multitasking is cost-free — divided attention has measurable costs."],
          },
        },
        {
          id: "psych-u2-pqq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which term refers to the brain's interpretation and organisation of sensory information into meaningful experience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attention" },
              { id: "b", text: "Encoding" },
              { id: "c", text: "Sensation" },
              { id: "d", text: "Perception" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perception", statement: "The brain's active interpretation of sensory data; sensation is the raw detection before interpretation." },
            ],
            steps: [
              { reasoning: "Sensation is raw detection by receptors; perception is the interpretive step.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Perception",
            commonErrors: ["Confusing sensation (raw data) with perception (interpretation)."],
          },
        },
        {
          id: "psych-u2-pqq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which scenario best illustrates bottom-up (data-driven) processing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seeing a face in a cloud because faces are expected" },
              { id: "b", text: "Interpreting an ambiguous figure using prior experience" },
              { id: "c", text: "Reading a sentence faster because context predicts the words" },
              { id: "d", text: "Identifying an unfamiliar object by analysing its edges and colours" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bottom-up processing", statement: "Perception constructed directly from sensory features without prior expectations." },
            ],
            steps: [
              { reasoning: "Bottom-up processing builds perception from the stimulus itself — essential for novel inputs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Identifying an unfamiliar object by analysing its edges and colours",
            commonErrors: ["Choosing an expectation-driven example — those are top-down."],
          },
        },
        {
          id: "psych-u2-pqq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Gestalt principle of proximity states that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We separate objects from their backgrounds" },
              { id: "b", text: "We perceive smooth continuous patterns" },
              { id: "c", text: "We group nearby elements together" },
              { id: "d", text: "We mentally complete incomplete figures" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proximity", statement: "Elements close together in space or time are perceived as grouped." },
            ],
            steps: [
              { reasoning: "Proximity groups elements that are near each other.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** We group nearby elements together",
            commonErrors: ["Confusing proximity with similarity (grouping like elements)."],
          },
        },
        {
          id: "psych-u2-pqq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "An ambiguous figure such as the Rubin vase — seen alternately as a vase or two faces — best demonstrates which Gestalt principle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Figure-ground" },
              { id: "b", text: "Continuity" },
              { id: "c", text: "Proximity" },
              { id: "d", text: "Similarity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Figure-ground", statement: "We separate a figure from its background; ambiguous figures allow either assignment." },
            ],
            steps: [
              { reasoning: "The same region can be assigned as figure or ground, which is the essence of figure-ground organisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Figure-ground",
            commonErrors: ["Confusing figure-ground reversal with closure illusions."],
          },
        },
        {
          id: "psych-u2-pqq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many Gestalt principles of perceptual organisation are named in this lesson (figure-ground, proximity, similarity, closure and continuity)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gestalt principles", statement: "Figure-ground, proximity, similarity, closure and continuity — five organising principles." },
            ],
            steps: [
              { reasoning: "Count the listed principles: figure-ground, proximity, similarity, closure, continuity.", marks: 1, markCode: "M" },
              { reasoning: "That gives 5 principles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Missing figure-ground when counting."],
          },
        },
        {
          id: "psych-u2-pqq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which finding is strongest evidence that top-down processing contributes to reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We read words in isolation slower than in sentences" },
              { id: "b", text: "Reading speed is identical in all fonts" },
              { id: "c", text: "Readers make more errors on longer words" },
              { id: "d", text: "Children learn letters before words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Top-down reading", statement: "Sentence context lets the brain predict words, speeding recognition." },
            ],
            steps: [
              { reasoning: "Faster reading in context shows expectations guide perception of individual words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** We read words in isolation slower than in sentences",
            commonErrors: ["Confusing the word superiority effect with bottom-up letter-by-letter reading."],
          },
        },
        {
          id: "psych-u2-pqq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how top-down processing uses expectations and prior knowledge to shape perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Top-down processing", statement: "Expectations and knowledge guide interpretation of ambiguous sensory input." },
            ],
            steps: [
              { reasoning: "Sensory input is often ambiguous — many real-world scenes could produce the same retinal image.", marks: 1, markCode: "M" },
              { reasoning: "Prior knowledge and context supply the most likely interpretation, so perception is guided rather than purely data-driven.", marks: 1, markCode: "M" },
              { reasoning: "This explains faster reading in sentences and seeing faces in clouds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expectations and prior knowledge select among possible interpretations of ambiguous input.",
            commonErrors: ["Describing top-down as ignoring sensory data — it works with, not against, bottom-up input."],
          },
        },
        {
          id: "psych-u2-pqq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe three Gestalt principles of perceptual organisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gestalt principles", statement: "We perceive organised wholes: proximity, similarity and closure (among others)." },
            ],
            steps: [
              { reasoning: "Proximity: elements near each other are grouped together.", marks: 1, markCode: "M" },
              { reasoning: "Similarity: elements sharing features (colour, shape) are grouped together.", marks: 1, markCode: "M" },
              { reasoning: "Closure: the mind fills in gaps to perceive complete figures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proximity, similarity and closure (also figure-ground and continuity).",
            commonErrors: ["Describing bottom-up processing instead of Gestalt grouping rules."],
          },
        },
        {
          id: "psych-u2-pqq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the same retinal image can produce different perceptions, using the concept of constructive perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constructive perception", statement: "The brain actively interprets ambiguous sensory data using knowledge, expectations and organising rules." },
            ],
            steps: [
              { reasoning: "A single retinal image is compatible with many different real-world scenes — the input is inherently ambiguous.", marks: 1, markCode: "M" },
              { reasoning: "The brain applies prior knowledge, context and Gestalt rules to select one interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Different contexts or expectations therefore yield different perceptions of identical input.", marks: 1, markCode: "R" },
              { reasoning: "This is why perception is described as constructive rather than a passive copy of the stimulus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ambiguous input plus brain-based interpretation (knowledge, context, Gestalt rules) produces different perceptions.",
            commonErrors: ["Claiming the eye 'sees' different things — the difference arises in cortical interpretation."],
          },
        },
        {
          id: "psych-u2-pqq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Participants shown an ambiguous cloud formation report seeing different images — one sees a dragon, another an elephant.",
          parts: [
            { label: "a", prompt: "Name the phenomenon and explain why the same stimulus yields different perceptions.", marks: 2 },
            { label: "b", prompt: "Explain how top-down processing contributes to each participant's perception.", marks: 3 },
            { label: "c", prompt: "Evaluate the view that perception is a constructive rather than passive process.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constructive perception", statement: "Ambiguous stimuli are interpreted differently depending on expectations and prior knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Ambiguous perception — the cloud shape supports multiple interpretations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sensory input is identical; the difference arises in how each brain organises and interprets it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Top-down processing: each participant's expectations and prior knowledge bias interpretation toward familiar shapes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The dragon-seer applies dragon-related schemas; the elephant-seer applies animal schemas.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Bottom-up features (edges, contours) constrain but do not determine the final perception.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Supporting evidence: illusions, ambiguous figures and context effects show the brain constructs meaning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "However, perception is constrained by the physical stimulus — it is not arbitrary invention.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: perception is best described as an active construction guided by, but not independent of, sensory data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ambiguous perception. (b) Expectations bias interpretation. (c) Constructive but stimulus-constrained.",
            commonErrors: ["Claiming perception is purely passive — or purely invented with no link to the stimulus."],
          },
        },
        {
          id: "psych-u2-pqq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between sensation and perception, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensation vs perception", statement: "Sensation = raw detection by receptors; perception = brain's interpretation of that data." },
            ],
            steps: [
              { reasoning: "Sensation: receptors detect physical energy — e.g. light waves striking the retina producing a neural signal.", marks: 1, markCode: "M" },
              { reasoning: "Sensation is unanalysed data — it has no meaning until processed.", marks: 1, markCode: "M" },
              { reasoning: "Perception: the brain interprets that signal — e.g. recognising the light pattern as a friend's face.", marks: 1, markCode: "M" },
              { reasoning: "The same sensation can yield different perceptions depending on context and expectation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sensation = raw receptor detection (light hitting retina); perception = interpreted experience (recognising a face).",
            commonErrors: ["Treating the two terms as interchangeable."],
          },
        },
        {
          id: "psych-u2-pqq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a study, 70% of 50 participants reported seeing a face in a random cloud pattern. How many participants saw a face?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Top-down perception", statement: "Expectations lead observers to project familiar forms onto ambiguous stimuli." },
            ],
            steps: [
              { reasoning: "Calculate 70% of 50: 0.70 × 50.", marks: 1, markCode: "M" },
              { reasoning: "0.70 × 50 = 35 participants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35 participants",
            commonErrors: ["Answering 70 — that is the percentage, not the count."],
          },
        },
      ],
    },
    {
      id: "psych-u2-attention",
      title: "Attention: models and applications",
      skill: "Describe filter and attenuation models of attention and explain divided attention and cognitive load.",
      lesson: {
        sections: [
          {
            heading: "Early filter models",
            body: "**Broadbent's filter model (1958)** proposed that all sensory input enters a limited-capacity channel but only one input passes the **filter** for full processing; the rest is lost. Evidence: the **cocktail party effect** — we can detect our name in an unattended channel, showing some processing of rejected inputs. **Treisman's attenuation model** revised this: unattended inputs are not blocked but **attenuated** (weakened), so meaningful or loud stimuli can still break through.",
          },
          {
            heading: "Late selection and capacity",
            body: "**Deutsch and Deutsch's late selection model** argues all inputs receive semantic analysis and selection happens at the response stage — explaining why our own name captures attention even when ignored. Modern views treat attention as **capacity-limited**: resources are allocated to tasks in priority order, and **cognitive load** determines how much can be handled. Automatic processes (well-learned skills) require little attention; controlled processes demand it fully.",
          },
          {
            heading: "Applications",
            body: "Understanding attention explains real phenomena: **inattentional blindness** (failing to notice obvious objects when focused elsewhere, e.g. the gorilla experiment), **change blindness**, and why drivers using phones have slower reaction times — phone conversations compete for the same limited attentional resources as driving.",
          },
        ],
        keyFormulas: [
          { name: "Filter vs attenuation", statement: "Broadbent: early filter blocks; Treisman: attenuates unattended input" },
          { name: "Cognitive load", statement: "Limited attentional capacity; automatic vs controlled processing" },
        ],
        workedExample: {
          problem: "A driver talks on a hands-free phone and misses a pedestrian. Explain using attention theory.",
          solution: "Conversation is a controlled process demanding attentional resources; divided attention reduces resources for detecting the pedestrian (inattentional blindness). Even hands-free phones impair driving because the cognitive load is the problem, not the hands.",
        },
      },
      questions: [
        {
          id: "psych-u2-aqq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Broadbent's filter model, information that does not pass the filter is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attenuated but still processed" },
              { id: "b", text: "Fully analysed semantically" },
              { id: "c", text: "Lost entirely" },
              { id: "d", text: "Stored in long-term memory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Broadbent's filter", statement: "Early selection: only one channel passes; rejected input is lost." },
            ],
            steps: [
              { reasoning: "Broadbent proposed rejected inputs receive no further processing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Lost entirely",
            commonErrors: ["Confusing Broadbent's filter with Treisman's attenuation."],
          },
        },
        {
          id: "psych-u2-aqq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how the cocktail party effect challenges Broadbent's filter model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cocktail party effect", statement: "We detect our name in an unattended channel, implying rejected inputs are still processed." },
            ],
            steps: [
              { reasoning: "Broadbent predicted unattended inputs are completely lost after filtering.", marks: 1, markCode: "M" },
              { reasoning: "Yet participants detect their own name spoken in an ignored channel — semantic processing occurred.", marks: 1, markCode: "M" },
              { reasoning: "This contradicts complete blocking and supports Treisman's attenuation: unattended signals are weakened, not eliminated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Name detection in unattended channel shows inputs are attenuated, not blocked.",
            commonErrors: ["Saying the cocktail party effect supports Broadbent — it actually challenges him."],
          },
        },
        {
          id: "psych-u2-aqq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why using a hands-free phone while driving is still dangerous, according to attention theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attentional capacity", statement: "Driving and conversation compete for limited attentional resources regardless of physical hands." },
            ],
            steps: [
              { reasoning: "Driving requires continuous monitoring — a controlled process consuming attentional capacity.", marks: 1, markCode: "M" },
              { reasoning: "Conversation, especially complex topics, is also a controlled process demanding resources.", marks: 1, markCode: "M" },
              { reasoning: "Divided attention means fewer resources remain for detecting hazards — slower reaction, missed signals.", marks: 1, markCode: "R" },
              { reasoning: "This is why hands-free phones produce similar impairment to handheld ones: the cognitive load is the problem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cognitive load, not manual demand, causes impairment — hands-free does not eliminate risk.",
            commonErrors: ["Arguing hands-free is safe because hands are free — the cognitive demand remains."],
          },
        },
        {
          id: "psych-u2-aqq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a famous study, observers counting basketball passes failed to notice a person in a gorilla suit walking through the scene.",
          parts: [
            { label: "a", prompt: "Name and explain the phenomenon demonstrated.", marks: 2 },
            { label: "b", prompt: "Explain how this supports limited-capacity models of attention.", marks: 3 },
            { label: "c", prompt: "Evaluate whether attention is better explained as a spotlight or a capacity model.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inattentional blindness", statement: "Focused attention on one task causes failure to notice unexpected but salient stimuli." },
            ],
            steps: [
              { part: "a", reasoning: "Inattentional blindness — observers miss obvious unexpected events when attention is engaged elsewhere.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The gorilla was fully visible yet unnoticed because all capacity was devoted to counting passes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Attention is limited — allocating it to the counting task left insufficient capacity for the gorilla.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The gorilla's unexpectedness meant no top-down expectation directed attention to it.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This supports capacity models over simple spotlight selection: absence of capacity, not location, caused the miss.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Spotlight explains spatial selection but not why an in-view object is missed entirely.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Capacity models better explain load effects and dual-task costs, though spotlight ideas still apply to visual search.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Modern view: attention is capacity-limited with flexible allocation — judgement: capacity model stronger overall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Inattentional blindness. (b) Limited capacity left none for the gorilla. (c) Capacity model fits better.",
            commonErrors: ["Confusing inattentional blindness with change blindness."],
          },
        },
        {
          id: "psych-u2-aqq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How does Treisman's attenuation model differ from Broadbent's filter model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attenuation allows all inputs equal processing" },
              { id: "b", text: "Attenuation blocks all unattended inputs completely" },
              { id: "c", text: "Attenuation occurs after semantic analysis of all inputs" },
              { id: "d", text: "Attenuation weakens unattended inputs rather than blocking them entirely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attenuation", statement: "Unattended inputs are weakened, not eliminated — salient or meaningful signals can still break through." },
            ],
            steps: [
              { reasoning: "Broadbent's filter blocks rejected inputs; Treisman's attenuation only reduces their signal strength.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Attenuation weakens unattended inputs rather than blocking them entirely",
            commonErrors: ["Saying attenuation = complete blocking, which is Broadbent's model."],
          },
        },
        {
          id: "psych-u2-aqq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the key difference between selective and divided attention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selective attention focuses on one stimulus; divided attention spreads resources across tasks" },
              { id: "b", text: "Selective attention lasts longer than divided attention" },
              { id: "c", text: "Divided attention only works for visual tasks" },
              { id: "d", text: "They are identical processes with different names" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Selective vs divided attention", statement: "Selective = focused on one stimulus; divided = resources allocated across multiple tasks." },
            ],
            steps: [
              { reasoning: "Selective attention concentrates capacity on a single input while filtering distractors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Selective attention focuses on one stimulus; divided attention spreads resources across tasks",
            commonErrors: ["Treating the two as the same process."],
          },
        },
        {
          id: "psych-u2-aqq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'cocktail party effect' — detecting one's own name in an ignored conversation — demonstrates that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unattended inputs are still partially processed" },
              { id: "b", text: "All inputs receive equal processing" },
              { id: "c", text: "Attention capacity is unlimited" },
              { id: "d", text: "Semantic analysis only occurs after selection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cocktail party effect", statement: "Meaningful stimuli in unattended channels can still capture attention." },
            ],
            steps: [
              { reasoning: "Detecting your name shows the 'rejected' channel was still analysed semantically.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Unattended inputs are still partially processed",
            commonErrors: ["Interpreting it as proof of unlimited capacity — it shows partial processing of attenuated input."],
          },
        },
        {
          id: "psych-u2-aqq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Deutsch and Deutsch's late selection model proposes that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All inputs receive semantic analysis before selection at the response stage" },
              { id: "b", text: "Unattended inputs are completely lost" },
              { id: "c", text: "Only one channel can be attended at a time" },
              { id: "d", text: "Selection occurs before any semantic analysis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Late selection", statement: "Deutsch and Deutsch: all inputs are semantically analysed; selection happens at response." },
            ],
            steps: [
              { reasoning: "Late selection places the filter after meaning analysis, explaining why your name breaks through.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** All inputs receive semantic analysis before selection at the response stage",
            commonErrors: ["Confusing late selection with Broadbent's early filter."],
          },
        },
        {
          id: "psych-u2-aqq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An automatic process, such as a well-learned skill like typing, is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demanding conscious control" },
              { id: "b", text: "Requiring full attentional capacity" },
              { id: "c", text: "Impossible to combine with other tasks" },
              { id: "d", text: "Proceeding with little attentional demand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Automatic processing", statement: "Well-learned tasks run with minimal attentional resources." },
            ],
            steps: [
              { reasoning: "Automatic processes are fast and require little conscious attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Proceeding with little attentional demand",
            commonErrors: ["Confusing automatic (low demand) with controlled (high demand) processing."],
          },
        },
        {
          id: "psych-u2-aqq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a dual-task study, a driver's reaction time increased from 200 ms when driving alone to 350 ms when simultaneously talking on a phone. By how many milliseconds did reaction time increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150, unit: "ms" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dual-task costs", statement: "Divided attention slows performance on demanding tasks." },
            ],
            steps: [
              { reasoning: "Subtract the single-task time from the dual-task time: 350 - 200.", marks: 1, markCode: "M" },
              { reasoning: "350 - 200 = 150 ms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 ms",
            commonErrors: ["Dividing the two values — the question asks for the difference."],
          },
        },
        {
          id: "psych-u2-aqq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe Treisman's attenuation model of attention and how it differs from Broadbent's filter model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attenuation model", statement: "Unattended inputs are weakened rather than blocked, allowing salient signals through." },
            ],
            steps: [
              { reasoning: "Broadbent: a single early filter lets one channel pass for full processing; rejected inputs are lost.", marks: 1, markCode: "M" },
              { reasoning: "Treisman: all inputs are processed but unattended ones are attenuated — reduced in strength.", marks: 1, markCode: "M" },
              { reasoning: "Meaningful, loud or personally relevant stimuli (like your name) can overcome attenuation and capture attention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Treisman attenuates unattended input rather than blocking it — explaining the cocktail party effect.",
            commonErrors: ["Describing only one model without the comparison."],
          },
        },
        {
          id: "psych-u2-aqq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between automatic and controlled processing and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Automatic vs controlled processing", statement: "Automatic = minimal attention, well-learned; controlled = demands full attentional capacity." },
            ],
            steps: [
              { reasoning: "Automatic processing: well-practised, effortless tasks — e.g. riding a bike or reading well-learned words.", marks: 1, markCode: "M" },
              { reasoning: "Controlled processing: novel or demanding tasks needing conscious attention — e.g. learning to drive or solving a new problem.", marks: 1, markCode: "M" },
              { reasoning: "Controlled processes can become automatic with practice, freeing attentional capacity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Automatic = effortless well-learned tasks; controlled = attention-demanding novel tasks that can become automatic.",
            commonErrors: ["Omitting the transition from controlled to automatic with practice."],
          },
        },
        {
          id: "psych-u2-aqq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Distinguish between inattentional blindness and change blindness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Blindness phenomena", statement: "Inattentional blindness = missing unexpected objects; change blindness = missing changes to a scene." },
            ],
            steps: [
              { reasoning: "Inattentional blindness: failing to notice a fully visible but unexpected object while focused on another task (e.g. the gorilla).", marks: 1, markCode: "M" },
              { reasoning: "Change blindness: failing to detect a change in a scene, often when a brief interruption masks the transition.", marks: 1, markCode: "M" },
              { reasoning: "Key difference: inattentional blindness concerns noticing an object at all; change blindness concerns detecting an alteration.", marks: 1, markCode: "R" },
              { reasoning: "Both show perception depends on attention — unattended or unmonitored information is not fully processed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inattentional = missing an unexpected object; change = missing a scene alteration. Both stem from limited attention.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "psych-u2-aqq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A pedestrian is hit by a driver who was texting on a handheld phone while approaching a busy junction.",
          parts: [
            { label: "a", prompt: "Identify the attentional phenomenon involved and describe what likely happened.", marks: 2 },
            { label: "b", prompt: "Explain how limited-capacity attention accounts for this accident.", marks: 3 },
            { label: "c", prompt: "Evaluate the claim that hands-free phones would have prevented this accident.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attentional capacity", statement: "Driving and texting compete for limited attentional resources, causing divided-attention failure." },
            ],
            steps: [
              { part: "a", reasoning: "Inattentional blindness — the driver failed to notice the pedestrian despite looking toward them.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Attention was captured by the phone, so the pedestrian never entered conscious awareness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Driving requires continuous controlled monitoring of the road, pedestrians and signals.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Texting is also a controlled process demanding visual and cognitive resources.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divided attention leaves insufficient capacity for hazard detection — slower reactions and missed signals.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Hands-free removes manual demand but not cognitive load — conversation still competes for attention.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Studies show hands-free phoning impairs driving comparably to handheld use.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: hands-free reduces some risk but does not eliminate the attentional competition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Inattentional blindness. (b) Texting competed for limited capacity. (c) Hands-free reduces but does not remove risk.",
            commonErrors: ["Arguing hands-free is safe because the hands are free — cognitive load remains."],
          },
        },
        {
          id: "psych-u2-aqq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the late selection model of attention and give evidence that supports it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Late selection", statement: "All inputs receive semantic analysis; selection occurs at the response stage." },
            ],
            steps: [
              { reasoning: "Deutsch and Deutsch proposed every input is analysed for meaning before a response-selection filter chooses what to act on.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: the cocktail party effect — hearing your name in an unattended channel requires semantic processing before selection.", marks: 1, markCode: "M" },
              { reasoning: "This contrasts with Broadbent's early filter, which predicts unattended inputs are lost before meaning analysis.", marks: 1, markCode: "R" },
              { reasoning: "However, late selection struggles to explain why truly irrelevant inputs are ignored so efficiently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Late selection analyses all inputs semantically before responding — supported by the cocktail party effect.",
            commonErrors: ["Confusing late selection with Treisman's attenuation model."],
          },
        },
        {
          id: "psych-u2-aqq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a replication of the gorilla study, 50% of 40 observers failed to notice the gorilla. How many observers missed it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inattentional blindness", statement: "Focused attention causes failure to notice unexpected but visible stimuli." },
            ],
            steps: [
              { reasoning: "Calculate 50% of 40: 0.50 × 40.", marks: 1, markCode: "M" },
              { reasoning: "0.50 × 40 = 20 observers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 observers",
            commonErrors: ["Answering 50 — that is the percentage, not the number of observers."],
          },
        },
      ],
    },
  ],
};
