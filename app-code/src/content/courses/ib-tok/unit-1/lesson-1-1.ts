import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "tok-u1-lesson-1-1",
  code: "1-1",
  title: "Sense Perception and Imagination",
  goal: "I CAN explain how sense perception and imagination function as ways of knowing and evaluate their reliability.",
  standards: ["TOK", "Ways of Knowing", "Sense Perception", "Imagination"],
  vocabulary: [
    { term: "Way of knowing", definition: "A cognitive process through which humans acquire, organise or justify knowledge." },
    { term: "Sense perception", definition: "Acquiring information through the senses: sight, hearing, touch, taste and smell." },
    { term: "Illusion", definition: "A misperception in which the senses report something that does not match physical reality." },
    { term: "Imagination", definition: "The ability to form mental images, scenarios or possibilities not directly given by the senses." },
    { term: "Empirical evidence", definition: "Information obtained through observation and measurement rather than pure reasoning." },
    { term: "Subjectivity", definition: "The quality of being shaped by personal perspective, expectations or prior experience." },
  ],
  concepts: [
    {
      id: "tok-u1-perception",
      title: "Sense perception as a way of knowing",
      skill: "Explain how perception builds knowledge and evaluate when sensory evidence can be trusted.",
      lesson: {
        sections: [
          {
            heading: "How we perceive",
            body: "Sense perception is the most basic way of knowing: we receive raw data through sight, hearing, touch, taste and smell, then the brain **interprets** that data using prior knowledge. The process is not passive — what we 'see' is already processed. This makes perception both essential and fallible.",
          },
          {
            heading: "Strengths and limits",
            body: "Perception is powerful for empirical knowledge: science depends on observation, and everyday life depends on trusting the senses most of the time. However, **illusions**, selective attention, cultural conditioning and sensory limits (we cannot perceive ultraviolet light or radio waves directly) show that perception is theory-laden — we see what we expect to see.",
          },
          {
            heading: "TOK significance",
            body: "Perception raises a classic knowledge question: if two people perceive the same event differently, is one of them 'wrong'? In TOK you should argue that perception gives us knowledge **of the world as experienced**, but it must be tested against other ways of knowing such as reason and shared evidence.",
          },
        ],
        keyFormulas: [
          { name: "Perception process", statement: "Sensation (raw input) + interpretation (prior knowledge) = perceived reality" },
          { name: "Key test", statement: "Can this claim be checked by another observer?" },
        ],
        workedExample: {
          problem: "A witness describes a robbery differently from a second witness. Does this prove perception is unreliable?",
          solution: "Not necessarily. Memory, attention and viewpoint affect what each witness encodes. Perception is fallible but can be corroborated: converging testimony, physical evidence and reasoned comparison of accounts strengthen the claim.",
        },
      },
      questions: [
        {
          id: "tok-u1-l11c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT one of the five traditional senses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Memory" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Hearing" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Traditional senses", statement: "Sight, hearing, touch, taste and smell are the five classical senses." },
            ],
            steps: [
              { reasoning: "Memory is a way of knowing but not a sensory channel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Memory",
            commonErrors: ["Confusing ways of knowing with individual senses."],
          },
        },
        {
          id: "tok-u1-l11c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why perception is described as 'theory-laden'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theory-ladenness", statement: "We interpret raw sensory data through prior beliefs, expectations and cultural frameworks." },
            ],
            steps: [
              { reasoning: "The brain does not passively record input; it interprets sensation using existing knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Expectations and culture shape what we notice — e.g. illusions persist even when we know they are illusions.", marks: 1, markCode: "M" },
              { reasoning: "Consequence: two observers can honestly perceive the same event differently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perception interprets raw sensory data through prior knowledge and expectations, so it is shaped by theory rather than being neutral.",
            commonErrors: ["Saying perception is 'always wrong' — it is fallible but usually reliable enough to function."],
          },
        },
        {
          id: "tok-u1-l11c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'seeing is believing' as a route to knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Empirical verification", statement: "Direct observation can confirm or falsify claims, but interpretation can deceive." },
            ],
            steps: [
              { reasoning: "For: observation grounds empirical claims — science and everyday navigation depend on it.", marks: 1, markCode: "M" },
              { reasoning: "Against: illusions, hallucinations and biased attention show sight can mislead.", marks: 1, markCode: "M" },
              { reasoning: "Perception must be checked against reason, corroborating testimony and instruments.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: 'seeing' is evidence, not proof — belief requires justified interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seeing provides evidence but requires interpretation; 'believing' additionally needs justification through other ways of knowing.",
            commonErrors: ["One-sided answer with no evaluation."],
          },
        },
        {
          id: "tok-u1-l11c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the reliability of sense perception as a way of knowing.",
          parts: [
            { label: "a", prompt: "Describe two strengths of perception as a source of knowledge.", marks: 2 },
            { label: "b", prompt: "Explain three ways perception can be unreliable.", marks: 3 },
            { label: "c", prompt: "Evaluate whether perception can ever provide certain knowledge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of perception", statement: "Perception is direct and testable but theory-laden and fallible." },
            ],
            steps: [
              { part: "a", reasoning: "Direct access to the physical world; empirical checkability by others.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Foundation for all empirical knowledge and practical action.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Illusions and sensory limits produce false impressions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Theory-ladenness: interpretation shaped by prior beliefs and culture.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Attention is selective and memory distorts what was actually perceived.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Perception cannot give certainty alone — interpretations can be wrong.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But convergent evidence from perception, reason and instruments yields justified belief.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: reliable in degree, not absolute — perception supports rather than guarantees knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Direct and checkable. (b) Illusions, theory-ladenness, selective attention. (c) Reliable but not certain; needs corroboration.",
            commonErrors: ["Ignoring the interpretive step between sensation and knowledge."],
          },
        },
        {
          id: "tok-u1-l11c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In TOK, the distinction between sensation and perception is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensation is conscious while perception is unconscious" },
              { id: "b", text: "Sensation occurs only in animals while perception occurs only in humans" },
              { id: "c", text: "Sensation requires memory while perception does not" },
              { id: "d", text: "Sensation is raw sensory input; perception is its interpretation using prior knowledge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sensation vs perception", statement: "Sensation is raw input from the senses; perception is the brain's interpreted version of that input." },
            ],
            steps: [
              { reasoning: "Sensation is the unprocessed data received through the senses.", marks: 1, markCode: "M" },
              { reasoning: "Perception adds interpretation, so choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Raw sensory input versus interpreted meaning",
            commonErrors: ["Treating sensation and perception as identical."],
          },
        },
        {
          id: "tok-u1-l11c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An optical illusion such as the Müller-Lyer figure demonstrates that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The senses are always accurate" },
              { id: "b", text: "Perception is impossible without language" },
              { id: "c", text: "Interpretation can distort or override accurate sensory data" },
              { id: "d", text: "All observers perceive illusions identically" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Illusion", statement: "An illusion is a misperception where interpretation produces an error despite accurate sensory input." },
            ],
            steps: [
              { reasoning: "In illusions the sensory data is often correct but the interpretation is wrong.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Interpretation can distort accurate sensory data",
            commonErrors: ["Believing illusions prove the senses themselves malfunction."],
          },
        },
        {
          id: "tok-u1-l11c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which scenario best illustrates theory-ladenness in perception?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A camera records an image regardless of the observer's beliefs" },
              { id: "b", text: "A radiologist trained to spot tumours notices a shadow a layperson misses" },
              { id: "c", text: "Two astronomers using the same telescope record different star positions" },
              { id: "d", text: "Two people disagree about the proof of a mathematical theorem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theory-ladenness", statement: "Prior knowledge and expectations shape what we notice and how we interpret it." },
            ],
            steps: [
              { reasoning: "Theory-ladenness means trained expectations change what is perceived.", marks: 1, markCode: "M" },
              { reasoning: "The radiologist's training makes relevant features visible; choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Training changes what the observer perceives",
            commonErrors: ["Confusing differences in instruments or reasoning with differences in perception."],
          },
        },
        {
          id: "tok-u1-l11c1q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how selective attention can cause two honest observers to perceive the same event differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective attention", statement: "Attention filters incoming stimuli, so observers notice what is relevant to them and miss the rest." },
            ],
            steps: [
              { reasoning: "The brain cannot process all sensory input at once, so attention selects what is noticed.", marks: 1, markCode: "M" },
              { reasoning: "Relevance depends on prior knowledge, goals and expertise — different observers attend to different details.", marks: 1, markCode: "M" },
              { reasoning: "Example: inattentional blindness experiments show people miss obvious events while focused on a task.", marks: 1, markCode: "M" },
              { reasoning: "Consequence: two people can honestly report different accounts of the same event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Selective attention filters perception by relevance, so honest observers can notice different aspects of the same event.",
            commonErrors: ["Claiming one observer must be lying or hallucinating."],
          },
        },
        {
          id: "tok-u1-l11c1q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student claims that 'perception is infallible because we directly experience the world.' Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fallibility of perception", statement: "Perception is direct but mediated by interpretation, so it can be mistaken." },
            ],
            steps: [
              { reasoning: "For the student: perception is our most direct contact with the world and is usually reliable enough for action.", marks: 1, markCode: "M" },
              { reasoning: "Against: illusions, sensory limits and theory-ladenness show perception can be wrong.", marks: 1, markCode: "M" },
              { reasoning: "Perception reports the world as experienced, not necessarily as it is.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: perception is fallible and must be corroborated by reason and other evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The claim fails: perception is direct but interpretive and demonstrably fallible.",
            commonErrors: ["Accepting the claim without engaging with counterexamples."],
          },
        },
        {
          id: "tok-u1-l11c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two reasons why eyewitness testimony, although based on honest perception, may be unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eyewitness fallibility", statement: "Honest perception at encoding does not guarantee accurate recall later." },
            ],
            steps: [
              { reasoning: "Memory is reconstructive: recall can introduce errors and be contaminated by later information.", marks: 2, markCode: "M" },
              { reasoning: "Attention and viewpoint limit what was actually encoded; stress and emotion distort encoding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore honest witnesses can sincerely disagree or be wrong.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reconstructive memory and limited encoding mean honest eyewitnesses can still be inaccurate.",
            commonErrors: ["Assuming honesty guarantees accuracy."],
          },
        },
        {
          id: "tok-u1-l11c1q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how converging evidence from multiple observers can strengthen a perceptual claim, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corroboration", statement: "Independent observations that agree are less likely to be mistaken than a single report." },
            ],
            steps: [
              { reasoning: "A single observer's perception may be distorted by theory-ladenness, attention or error.", marks: 1, markCode: "M" },
              { reasoning: "Independent observers have different viewpoints, expectations and biases, so agreement is meaningful.", marks: 1, markCode: "M" },
              { reasoning: "Physical evidence (photographs, measurements, instruments) further checks perceptual claims.", marks: 1, markCode: "M" },
              { reasoning: "Example: multiple witnesses plus CCTV footage can establish that an accident occurred as described.", marks: 1, markCode: "M" },
              { reasoning: "Convergence does not prove certainty but raises confidence proportionally.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: corroboration converts individual perception into intersubjectively checkable knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agreement across independent observers and instruments reduces the chance of shared error and strengthens the claim.",
            commonErrors: ["Treating corroboration as proof of certainty."],
          },
        },
        {
          id: "tok-u1-l11c1q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that sense perception is the most reliable way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative reliability", statement: "Perception is direct and testable but fallible; other ways of knowing have different strengths." },
            ],
            steps: [
              { reasoning: "For: perception is the only direct access to the physical world and grounds empirical science.", marks: 1, markCode: "M" },
              { reasoning: "For: perceptual claims can be publicly checked by other observers.", marks: 1, markCode: "M" },
              { reasoning: "Against: illusions, theory-ladenness, sensory limits and attention show perception can be wrong.", marks: 1, markCode: "M" },
              { reasoning: "Against: perception alone cannot access abstract, historical or value claims.", marks: 1, markCode: "R" },
              { reasoning: "Reason, memory and language correct and extend perceptual knowledge.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: perception is highly reliable for empirical claims but not sufficient alone; best combined with other ways of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perception is reliable for empirical knowledge but fallible; it is strongest when corroborated by other ways of knowing.",
            commonErrors: ["One-sided answer ignoring either the strengths or the limits."],
          },
        },
        {
          id: "tok-u1-l11c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of perception in the production of knowledge.",
          parts: [
            { label: "a", prompt: "Describe two strengths of perception as a source of knowledge.", marks: 2 },
            { label: "b", prompt: "Explain three sources of perceptual error.", marks: 3 },
            { label: "c", prompt: "Evaluate whether perception can ever provide certain knowledge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Role of perception", statement: "Perception grounds empirical knowledge but is interpretive and fallible." },
            ],
            steps: [
              { part: "a", reasoning: "Direct access to the physical world; claims can be checked by other observers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Foundation for all empirical knowledge and practical action.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Illusions and sensory limits produce false impressions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Theory-ladenness: interpretation shaped by prior beliefs and culture.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Selective attention and memory distortion affect what is perceived and recalled.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Perception alone cannot be certain — interpretations can be wrong.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Convergent evidence from perception, reason and instruments yields justified belief.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: reliable in degree, not absolute — perception supports rather than guarantees knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Direct and checkable. (b) Illusions, theory-ladenness, attention. (c) Reliable but not certain; needs corroboration.",
            commonErrors: ["Ignoring the interpretive step between sensation and knowledge."],
          },
        },
        {
          id: "tok-u1-l11c1q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a strength of sense perception as a way of knowing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It operates independently of the senses" },
              { id: "b", text: "It gives direct, checkable access to the physical world" },
              { id: "c", text: "It is immune to error" },
              { id: "d", text: "It requires no interpretation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strength of perception", statement: "Perception offers direct contact with the physical world and can be checked by others." },
            ],
            steps: [
              { reasoning: "Directness and intersubjective checkability are the key strengths.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Direct, checkable access to the physical world",
            commonErrors: ["Listing a weakness as a strength."],
          },
        },
        {
          id: "tok-u1-l11c1q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Cultural conditioning affects perception mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making all perception identical across cultures" },
              { id: "b", text: "Eliminating optical illusions" },
              { id: "c", text: "Changing the physics of light entering the eye" },
              { id: "d", text: "Shaping the categories and expectations used to interpret stimuli" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural conditioning", statement: "Culture supplies the categories and expectations that organise perceptual interpretation." },
            ],
            steps: [
              { reasoning: "Culture acts at the interpretive stage, not on the raw sensory input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It shapes the categories used to interpret stimuli",
            commonErrors: ["Believing culture changes sensation itself rather than interpretation."],
          },
        },
        {
          id: "tok-u1-l11c1q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Scientific instruments such as telescopes and microscopes affect perception by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proving that perception is unreliable" },
              { id: "b", text: "Replacing perception with reason" },
              { id: "c", text: "Making direct observation unnecessary" },
              { id: "d", text: "Extending the range of what can be perceived while still requiring interpretation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Instrumental extension", statement: "Instruments extend sensory reach but their outputs still need interpretation." },
            ],
            steps: [
              { reasoning: "Instruments expand what can be sensed; interpretation remains necessary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Extending perceptual range while requiring interpretation",
            commonErrors: ["Thinking instruments bypass the interpretive step."],
          },
        },
        {
          id: "tok-u1-l11c1q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the claim that scientific instruments 'extend' rather than replace perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Instrumental perception", statement: "Instruments amplify or redirect sensory input; the brain still interprets the result." },
            ],
            steps: [
              { reasoning: "Instruments convert imperceptible phenomena (radio waves, bacteria) into perceptible form.", marks: 1, markCode: "M" },
              { reasoning: "They enlarge or measure what the senses cannot directly detect.", marks: 1, markCode: "M" },
              { reasoning: "But the output — a reading, an image — still must be interpreted and can itself be misread.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: instruments extend the senses; they do not bypass interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Instruments widen what can be perceived but the data still requires human interpretation.",
            commonErrors: ["Claiming instruments produce knowledge automatically."],
          },
        },
        {
          id: "tok-u1-l11c1q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two witnesses honestly describe the same accident differently. Evaluate whether this shows that perception is unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Witness disagreement", statement: "Different honest accounts reflect different viewpoints, attention and memory, not necessarily error." },
            ],
            steps: [
              { reasoning: "Witnesses occupy different positions and attend to different details, so their perceptions genuinely differ.", marks: 1, markCode: "M" },
              { reasoning: "Memory is reconstructive, so later recall may diverge further from the original event.", marks: 1, markCode: "M" },
              { reasoning: "Disagreement does not prove perception is wholly unreliable — it shows it is perspectival.", marks: 1, markCode: "R" },
              { reasoning: "However, if accounts contradict on checkable facts, at least some perception was inaccurate.", marks: 1, markCode: "R" },
              { reasoning: "Physical evidence can arbitrate between accounts.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: perception is reliable enough to be evidence but unreliable as sole authority; corroboration is required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Disagreement shows perception is perspectival and fallible, not useless; evidence must corroborate it.",
            commonErrors: ["Concluding perception is either perfect or worthless from one example."],
          },
        },
        {
          id: "tok-u1-l11c1q19",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Knowledge question: To what extent can perception be trusted as a way of knowing?",
          parts: [
            { label: "a", prompt: "Describe two reasons to trust perception.", marks: 2 },
            { label: "b", prompt: "Explain three ways perception can mislead.", marks: 3 },
            { label: "c", prompt: "Reach a justified judgement on how far perception can be trusted.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trust in perception", statement: "Perception is direct and testable but theory-laden and fallible." },
            ],
            steps: [
              { part: "a", reasoning: "Direct contact with the world; claims can be checked by other observers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Underpins all empirical knowledge and practical navigation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Illusions and sensory limits produce false impressions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Theory-ladenness and selective attention shape what is noticed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cultural conditioning and expectation produce biased interpretation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Trust is warranted for routine empirical claims checked by others.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Trust is unwarranted for uncorroborated or contested claims.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: perception can be trusted provisionally and in degree, pending corroboration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Direct, checkable access. (b) Illusions, theory-ladenness, bias. (c) Trust provisionally with corroboration.",
            commonErrors: ["Answering with a yes/no verdict instead of a justified degree."],
          },
        },
        {
          id: "tok-u1-l11c1q20",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The claim 'perception is passive — we simply receive what is there' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "False, because the brain actively interprets sensation using prior knowledge" },
              { id: "b", text: "Accurate, because senses record reality directly" },
              { id: "c", text: "Accurate, because theory-laden perception is impossible" },
              { id: "d", text: "False, because perception requires imagination alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Active perception", statement: "Perception is constructive: the brain interprets raw sensation." },
            ],
            steps: [
              { reasoning: "Sensation is passive input but perception involves active interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** False — perception involves active interpretation",
            commonErrors: ["Conflating passive sensation with active perception."],
          },
        },
      ],
    },
    {
      id: "tok-u1-imagination",
      title: "Imagination as a way of knowing",
      skill: "Explain how imagination generates knowledge claims and evaluate its relationship with reason and perception.",
      lesson: {
        sections: [
          {
            heading: "What imagination does",
            body: "Imagination lets us form mental representations of things not present: possible futures, fictional worlds, counterfactual scenarios and **hypotheses**. In science, imagination drives conjecture — Einstein imagined riding a light beam; in the arts, it creates entirely new forms of meaning. Imagination is the engine of possibility.",
          },
          {
            heading: "Imagination in knowledge production",
            body: "Imagination is essential where perception and reason alone cannot go: it generates the **questions** we ask and the models we test. Mathematicians imagine abstract structures; historians imagine the past from fragmentary evidence; engineers imagine designs before building them. Without imagination, knowledge would only record what already exists.",
          },
          {
            heading: "Limits of imagination",
            body: "Imagination can also mislead: we imagine what we expect, project biases onto others, and confuse the plausible with the true. The distinction between imagination and **knowledge** is justification — an imagined scenario becomes knowledge only when tested against evidence and reason.",
          },
        ],
        keyFormulas: [
          { name: "Imagination role", statement: "Generates hypotheses, models and possibilities beyond direct observation" },
          { name: "Key distinction", statement: "Imagination proposes; reason and evidence dispose" },
        ],
        workedExample: {
          problem: "Is imagination more important in the arts or in the sciences?",
          solution: "Both depend on it. Science uses imagination to form hypotheses and models that are then tested empirically; the arts use imagination to create meaning and express experience. The difference is that scientific imagination must survive testing while artistic imagination is judged by coherence and insight.",
        },
      },
      questions: [
        {
          id: "tok-u1-l11c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Imagination is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ability to form mental representations beyond immediate perception" },
              { id: "b", text: "The storage of past experiences" },
              { id: "c", text: "Direct observation of physical objects" },
              { id: "d", text: "Logical deduction from premises" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Imagination", statement: "Forming mental images, scenarios or possibilities not directly given by the senses." },
            ],
            steps: [
              { reasoning: "Imagination constructs representations of absent or hypothetical things.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Forming mental representations beyond immediate perception",
            commonErrors: ["Confusing imagination with perception or memory."],
          },
        },
        {
          id: "tok-u1-l11c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how imagination contributes to scientific knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hypothesis generation", statement: "Science requires imagining explanations before they can be tested." },
            ],
            steps: [
              { reasoning: "Scientists imagine hypotheses and models — e.g. imagining atomic structure or disease mechanisms.", marks: 1, markCode: "M" },
              { reasoning: "Imagination enables thought experiments and counterfactual reasoning that guide research.", marks: 1, markCode: "M" },
              { reasoning: "Imagined models must then be tested against empirical evidence; imagination proposes but does not prove.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination generates hypotheses, models and thought experiments that direct and inspire scientific investigation.",
            commonErrors: ["Claiming science is purely empirical with no role for imagination."],
          },
        },
        {
          id: "tok-u1-l11c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the role of imagination in the arts and in the natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination comparison", statement: "Both areas rely on imagination but apply different tests: coherence vs empirical verification." },
            ],
            steps: [
              { reasoning: "In the arts, imagination creates meaning, form and expression judged by coherence and insight.", marks: 1, markCode: "M" },
              { reasoning: "In science, imagination builds models and hypotheses judged by empirical testability.", marks: 1, markCode: "M" },
              { reasoning: "Shared element: both require imagining what is not yet present or known.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: imagination is necessary in both but constrained differently — science demands evidence, art demands meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination is essential in both; arts value creative coherence, science values testable models.",
            commonErrors: ["Claiming imagination is only relevant to the arts."],
          },
        },
        {
          id: "tok-u1-l11c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine whether imagination should be considered a way of knowing at all.",
          parts: [
            { label: "a", prompt: "Define imagination and give two examples of it producing knowledge.", marks: 3 },
            { label: "b", prompt: "Explain two limitations of imagination as a source of knowledge.", marks: 2 },
            { label: "c", prompt: "Evaluate the claim that imagination is a genuine way of knowing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination debate", statement: "Imagination generates possibilities and models, but produces knowledge only when justified." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: forming mental representations of absent or possible things.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example 1: imagining hypotheses/models in science.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example 2: imagining scenarios or interpretations in the arts/humanities.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Imagination can generate false or biased possibilities mistaken for truth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It is unconstrained by direct evidence — plausible is not the same as true.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Against: imagination alone yields belief, not justified knowledge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "For: imagination is indispensable for generating the claims that other ways of knowing test.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: imagination is a way of knowing only in combination with reason and evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Defines and exemplifies. (b) Can mislead, unconstrained. (c) A way of knowing only when combined with justification.",
            commonErrors: ["Treating imagination as either wholly reliable or wholly irrelevant."],
          },
        },
        {
          id: "tok-u1-l11c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Imagination produces knowledge primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recording what the senses directly detect" },
              { id: "b", text: "Deducting conclusions from accepted premises" },
              { id: "c", text: "Generating possibilities, models and hypotheses beyond direct observation" },
              { id: "d", text: "Storing past experiences for later recall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Role of imagination", statement: "Imagination generates mental representations of things not directly perceived." },
            ],
            steps: [
              { reasoning: "Imagination works on what is absent or hypothetical, not on present sensory input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Generating possibilities beyond direct observation",
            commonErrors: ["Confusing imagination with perception or memory."],
          },
        },
        {
          id: "tok-u1-l11c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Einstein imagining what it would feel like to ride a beam of light illustrates that imagination:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replaces the need for evidence" },
              { id: "b", text: "Is limited to artistic creativity" },
              { id: "c", text: "Cannot contribute to knowledge" },
              { id: "d", text: "Can generate testable hypotheses in science" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thought experiments", statement: "Imagination can construct scenarios that guide scientific theorising." },
            ],
            steps: [
              { reasoning: "The light-beam thought experiment led to testable consequences in relativity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can generate testable hypotheses in science",
            commonErrors: ["Dismissing thought experiments as mere fantasy."],
          },
        },
        {
          id: "tok-u1-l11c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which claim best describes the relationship between imagination and evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence is unnecessary once an idea is imagined" },
              { id: "b", text: "Imagination proposes possibilities; reason and evidence test them" },
              { id: "c", text: "Imagination and evidence are identical processes" },
              { id: "d", text: "Imagination produces knowledge directly, without testing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination-evidence relation", statement: "Imagination generates candidates for knowledge; justification comes from reason and evidence." },
            ],
            steps: [
              { reasoning: "Imagined scenarios are proposals, not justified beliefs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Imagination proposes; reason and evidence dispose",
            commonErrors: ["Treating imagination as self-justifying."],
          },
        },
        {
          id: "tok-u1-l11c2q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how imagination helps historians reconstruct knowledge about the past.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical imagination", statement: "Historians must imagine past contexts and motivations from fragmentary evidence." },
            ],
            steps: [
              { reasoning: "Evidence about the past is incomplete, so historians imagine plausible contexts and actors' perspectives.", marks: 1, markCode: "M" },
              { reasoning: "Imagination generates hypotheses about motives, events and causal connections.", marks: 1, markCode: "M" },
              { reasoning: "These hypotheses must be constrained by and tested against sources.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: imagination is essential but subordinate to evidence in history.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Historians use imagination to fill gaps in evidence and generate interpretations, which sources then constrain and test.",
            commonErrors: ["Claiming history is pure imagination or pure record."],
          },
        },
        {
          id: "tok-u1-l11c2q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways in which imagination can mislead us about what is true.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imaginative error", statement: "Imagination generates possibilities without built-in constraints, so it can produce false beliefs." },
            ],
            steps: [
              { reasoning: "We imagine what we expect or wish for, projecting biases onto situations and people.", marks: 2, markCode: "M" },
              { reasoning: "The plausible is confused with the true — a coherent imagined scenario feels believable.", marks: 1, markCode: "M" },
              { reasoning: "Counterfactual imaginings can be mistaken for actual knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination misleads through wishful projection and by making the plausible feel true.",
            commonErrors: ["Listing only positive uses of imagination."],
          },
        },
        {
          id: "tok-u1-l11c2q10",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate the claim that imagination is necessary for the production of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Necessity of imagination", statement: "Knowledge production requires generating questions, models and hypotheses, which imagination supplies." },
            ],
            steps: [
              { reasoning: "For: science needs imagined hypotheses and models; mathematics needs imagined abstract structures.", marks: 1, markCode: "M" },
              { reasoning: "For: the arts create new meaning entirely through imagination.", marks: 1, markCode: "M" },
              { reasoning: "Against: some knowledge is purely accumulative — recording data or memorising facts needs little imagination.", marks: 1, markCode: "R" },
              { reasoning: "Against: routine empirical observation can proceed without novel imagining.", marks: 1, markCode: "R" },
              { reasoning: "Imagination is most necessary where the object of knowledge does not yet exist.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: imagination is necessary for generating and extending knowledge but not for every act of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination is necessary for generating new knowledge but not for all knowledge acquisition.",
            commonErrors: ["Answering only one side of the evaluation."],
          },
        },
        {
          id: "tok-u1-l11c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how imagination and reason work together when solving a novel problem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination-reason synergy", statement: "Imagination generates candidate solutions; reason evaluates and refines them." },
            ],
            steps: [
              { reasoning: "Imagination proposes possible approaches, including ones not given by direct experience.", marks: 1, markCode: "M" },
              { reasoning: "Reason tests each proposal for logical consistency and against constraints.", marks: 1, markCode: "M" },
              { reasoning: "Evidence or experiment further filters which imagined option survives.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: novelty comes from imagination; reliability comes from reason and evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination supplies novel candidates while reason and evidence select among them.",
            commonErrors: ["Describing the two as competing rather than complementary."],
          },
        },
        {
          id: "tok-u1-l11c2q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that 'imagination alone cannot produce knowledge.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination alone", statement: "An imagined claim becomes knowledge only when justified by reason or evidence." },
            ],
            steps: [
              { reasoning: "For: imagined scenarios are unverified until tested; plausibility is not truth.", marks: 1, markCode: "M" },
              { reasoning: "For: imagination is unconstrained — it generates false possibilities as readily as true ones.", marks: 1, markCode: "M" },
              { reasoning: "Against: in the arts, imagined works can themselves constitute knowledge or insight judged by coherence.", marks: 1, markCode: "R" },
              { reasoning: "Against: some knowledge is tacit or felt, where imagination and intuition suffice without formal proof.", marks: 1, markCode: "R" },
              { reasoning: "Imagination does produce the content of knowledge claims even if it does not justify them.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: imagination alone yields belief, not justified knowledge — except arguably in aesthetic domains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination generates knowledge claims but cannot justify them alone, though art may blur this boundary.",
            commonErrors: ["Denying any knowledge-producing role for imagination."],
          },
        },
        {
          id: "tok-u1-l11c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of imagination in the production of knowledge.",
          parts: [
            { label: "a", prompt: "Define imagination and give two examples of it producing knowledge.", marks: 3 },
            { label: "b", prompt: "Explain two limitations of imagination as a source of knowledge.", marks: 2 },
            { label: "c", prompt: "Evaluate whether imagination should count as a way of knowing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination debate", statement: "Imagination generates possibilities and models but produces knowledge only when justified." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: forming mental representations of absent or possible things.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example 1: hypothesising models and scenarios in science.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example 2: imagining designs or interpretations in engineering and the arts.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Imagination can generate false or biased possibilities mistaken for truth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It is unconstrained by evidence — the plausible is not necessarily true.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Against: imagination alone yields belief, not justified knowledge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "For: imagination is indispensable for generating the claims other ways of knowing test.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: a way of knowing only in combination with reason and evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Defined and exemplified. (b) Can mislead, unconstrained. (c) A way of knowing only when combined with justification.",
            commonErrors: ["Treating imagination as either wholly reliable or wholly irrelevant."],
          },
        },
        {
          id: "tok-u1-l11c2q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Imagination differs from perception in that imagination:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stores only past events" },
              { id: "b", text: "Requires direct sensory input" },
              { id: "c", text: "Is always accurate about the world" },
              { id: "d", text: "Forms representations not given by the senses" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Imagination vs perception", statement: "Perception deals with what is present; imagination deals with what is absent or possible." },
            ],
            steps: [
              { reasoning: "Imagination constructs representations beyond immediate sensory input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Forms representations not given by the senses",
            commonErrors: ["Confusing imagination with perception."],
          },
        },
        {
          id: "tok-u1-l11c2q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "In science, imagination is most valuable when it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proves theories without evidence" },
              { id: "b", text: "Generates hypotheses that can be tested empirically" },
              { id: "c", text: "Confirms existing beliefs" },
              { id: "d", text: "Replaces the need for experimentation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scientific imagination", statement: "Scientific imagination is valuable when it produces testable hypotheses and models." },
            ],
            steps: [
              { reasoning: "Imagined models must be constrained by empirical testing to produce knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Generates hypotheses that can be tested empirically",
            commonErrors: ["Thinking imagination substitutes for evidence in science."],
          },
        },
        {
          id: "tok-u1-l11c2q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the best example of imagination producing knowledge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating a mathematical proof already established" },
              { id: "b", text: "An engineer imagining a bridge design that is later tested and built successfully" },
              { id: "c", text: "Memorising a list of historical dates" },
              { id: "d", text: "Reading a description of a famous painting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imaginative knowledge", statement: "Imagination produces knowledge when the imagined possibility is tested and confirmed." },
            ],
            steps: [
              { reasoning: "The engineer's imagined design becomes knowledge only after testing and successful realisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An imagined design tested and successfully realised",
            commonErrors: ["Choosing an example where imagination is absent."],
          },
        },
        {
          id: "tok-u1-l11c2q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a fictional narrative can still yield knowledge about human experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fictional knowledge", statement: "Fiction can reveal truths about human psychology, society and values even though its events are invented." },
            ],
            steps: [
              { reasoning: "Fiction imagines scenarios that isolate and illuminate aspects of human experience.", marks: 1, markCode: "M" },
              { reasoning: "Readers recognise psychological truths in imagined characters and situations.", marks: 1, markCode: "M" },
              { reasoning: "The knowledge is about human nature or society, not about the fictional events themselves.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: imagination creates a vehicle for insight that evidence alone cannot provide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fiction yields knowledge of human experience through imagined scenarios that readers recognise as true.",
            commonErrors: ["Claiming fiction contains no knowledge because it is invented."],
          },
        },
        {
          id: "tok-u1-l11c2q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two students imagine very different futures for artificial intelligence. Evaluate what status these imaginings have as knowledge claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status of imaginings", statement: "Imagined futures are speculative claims that require evidence and reasoning to become knowledge." },
            ],
            steps: [
              { reasoning: "Each imagining is internally coherent but coherence does not guarantee truth.", marks: 1, markCode: "M" },
              { reasoning: "Both rest on assumptions about technology, society and human values that may be wrong.", marks: 1, markCode: "M" },
              { reasoning: "Current evidence can support some predictions and refute others.", marks: 1, markCode: "M" },
              { reasoning: "The imaginings function as hypotheses or scenarios rather than established knowledge.", marks: 1, markCode: "R" },
              { reasoning: "They have value for planning and ethics even if not yet true.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: imaginings are speculative claims whose epistemic status depends on how well they are tested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagined futures are hypotheses, not knowledge, until evidence and reasoning support them.",
            commonErrors: ["Treating a vivid imagination as a prediction."],
          },
        },
        {
          id: "tok-u1-l11c2q19",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Knowledge question: Does imagination deserve to be classified as a way of knowing?",
          parts: [
            { label: "a", prompt: "Describe two ways imagination contributes to knowledge.", marks: 3 },
            { label: "b", prompt: "Explain two reasons to doubt that imagination is a way of knowing.", marks: 2 },
            { label: "c", prompt: "Reach a justified conclusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imagination as WOK", statement: "Imagination generates knowledge claims but cannot justify them without reason and evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Generates hypotheses, models and questions that drive inquiry.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Creates meaning and insight in the arts and literature.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Supplies counterfactual scenarios for testing ideas.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Imagined claims are unverified; imagination is unconstrained by evidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It often reflects bias and wishful thinking rather than truth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Ways of knowing acquire knowledge; imagination mainly generates candidates for it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Yet without imagination no new questions or models would arise.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: imagination is a necessary but not sufficient route to knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Generates hypotheses and meaning. (b) Unconstrained, bias-prone. (c) Necessary but not sufficient — a generator of claims, not a justifier.",
            commonErrors: ["Binary verdict without acknowledging the generative role."],
          },
        },
        {
          id: "tok-u1-l11c2q20",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The statement 'an imagined scenario becomes knowledge only when tested' implies that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Imagination generates claims; justification comes from other ways of knowing" },
              { id: "b", text: "Imagination alone is a complete way of knowing" },
              { id: "c", text: "Testing destroys the value of imagination" },
              { id: "d", text: "Only scientific knowledge uses imagination" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification of imaginings", statement: "An imagined claim must be tested by reason or evidence to count as knowledge." },
            ],
            steps: [
              { reasoning: "Testing is what converts an imagined possibility into justified knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Imagination generates; other ways of knowing justify",
            commonErrors: ["Reading the statement as denying imagination any role."],
          },
        },
      ],
    },
  ],
};
