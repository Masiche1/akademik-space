// Edexcel International GCSE English Language A (4EA1) - Unit 6
// Comparing and Evaluating Texts
// Run: node scripts/gen-lesson.cjs scripts/data-edx-englang-y10-u6.cjs src/content/courses/edx-englang-y10/unit-6

const bands = (top, part) => {
  const base = part ? { part } : {};
  const hi = "Perceptive, secure and well-developed answer with precise terminology and integrated evidence.";
  const mid = "Clear, relevant points with some development and supporting detail.";
  const lo = "Simple or partial points; limited development or relevance.";
  if (top <= 4) {
    return [
      { ...base, level: "Level 2", marks: `1-${top}`, descriptor: mid },
      { ...base, level: "Level 1", marks: "1-1", descriptor: lo },
    ];
  }
  return [
    { ...base, level: "Level 3", marks: `${top - 1}-${top}`, descriptor: hi },
    { ...base, level: "Level 2", marks: `3-${top - 2}`, descriptor: mid },
    { ...base, level: "Level 1", marks: "1-2", descriptor: lo },
  ];
};

const REVIEW_FORMAL = {
  title: "Review of the Riverside Café",
  author: "Restaurant critic",
  source: "Newspaper review column",
  text: "The Riverside Café occupies a prime position on the waterfront, though the interior feels somewhat sterile. The coffee is excellent — single-origin beans, expertly roasted — but the service is inconsistent, with long waits at peak times. Prices are above average, though the quality of the food partially justifies the premium. Overall, a competent establishment that fails to distinguish itself.",
};

const REVIEW_BLOG = {
  title: "Riverside Café — worth the hype?",
  author: "Food blogger",
  source: "Personal blog post",
  text: "OK so the Riverside Cafe — I was NOT expecting much but WOW. The flat white is genuinely the best coffee I have had outside London. Yeah it is a bit pricey and you might wait a bit at lunch, but honestly? Worth it. Go on a weekday if you can, it will be quieter. 10/10 would queue again.",
};

const LETTER_PARENT = {
  title: "Letter to the headteacher about school uniform",
  author: "Parent",
  source: "Formal letter",
  text: "Dear Headteacher,\nI am writing regarding the proposal to abolish school uniform. As a parent, I believe uniforms serve an important purpose: they promote equality, reduce bullying based on clothing and prepare students for professional dress codes. I urge the governors to reconsider this decision.\nYours sincerely,\nA parent",
};

const LETTER_STUDENT = {
  title: "Letter to the headteacher about school uniform",
  author: "Year 10 student",
  source: "School magazine letter",
  text: "Hi! Just saw the uniform news — honestly I am gutted. Uniforms are so boring and expensive, and nobody actually looks at what you wear anyway. Can we please just have a dress code instead? School is meant to be fun, not a fashion show. Anyway, fingers crossed.\n— Year 10",
};

const POEM_A = {
  title: "The Harbour at Dawn",
  author: "Student poem",
  source: "Comparison exercise, Poem A",
  lineNumbers: true,
  text: "The harbour wakes in washes of grey and rose,\nFisher-boats stir like sleeping thoughts,\nWhile gulls write bright announcements in the air.\n\nBeneath the bridge a cold tide combs the stones,\nEach ripple spelling out the day's new page.",
};

const POEM_B = {
  title: "Port Morning",
  author: "Student poem",
  source: "Comparison exercise, Poem B",
  lineNumbers: true,
  text: "Port in the morning: boats, boats, boats.\nFish everywhere, chips, seagulls, tea.\nGet up late, walk down, smell the sea.\n\nBest place ever. No contest.",
};

module.exports = [
  // ============================== UNIT 6, LESSON 1 ==============================
  {
    file: "lesson-6-1.ts",
    exportName: "lesson61",
    lesson: {
      id: "el10-u6-lesson-6-1",
      code: "6-1",
      title: "Comparing Writers' Methods",
      goal: "I CAN compare how two writers use language, imagery, structure and form to achieve their purposes.",
      standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Comparison", definition: "Identifying similarities and differences between two texts." },
        { term: "Comparative connective", definition: "A linking word or phrase showing comparison, such as 'whereas', 'similarly', 'in contrast'." },
        { term: "Register", definition: "The level of formality a writer chooses." },
        { term: "Tone", definition: "The writer's attitude towards the subject." },
        { term: "Structure", definition: "How a text is organised: openings, paragraphs and endings." },
        { term: "Integrated comparison", definition: "Weaving points about both texts together in one paragraph rather than treating them separately." },
      ],
      concepts: [
        {
          id: "el10-u6-language-imagery",
          title: "Comparing language and imagery across texts",
          skill: "Compare how two writers use word choice, imagery and tone.",
          sections: [
            {
              heading: "How to compare language",
              body: "Comparison is not two separate analyses placed side by side. **Integrated comparison** weaves both texts into each point: 'Whereas the critic calls the coffee 'expertly roasted', the blogger simply calls it 'the best coffee I have had'.' Use **comparative connectives** — 'whereas', 'similarly', 'in contrast', 'both' — to make the relationship explicit.",
            },
            {
              heading: "Comparing tone and register",
              body: "The formal review uses measured, evaluative language ('competent', 'partially justifies') and a balanced tone. The blog uses enthusiastic, informal language ('WOW', 'honestly?', '10/10'). Comparing register shows how each writer positions themselves: the critic as expert judge, the blogger as fellow enthusiast.",
            },
            {
              heading: "Comparing imagery",
              body: "Look for the images each writer creates. The critic's 'prime position' and 'premium' suggest value and status; the blogger's 'WOW' and 'would queue again' create excitement and appetite. Different imagery serves different purposes: evaluation versus persuasion.",
            },
          ],
          keyFormulas: [
            { name: "Integrated comparison", statement: "Weave both texts into each point using 'whereas', 'similarly', 'both'." },
            { name: "Comparative connective", statement: "Words like 'whereas', 'in contrast', 'similarly' signal the relationship." },
            { name: "Register comparison", statement: "Formal evaluative language vs informal enthusiastic language." },
          ],
          workedExample: {
            problem: "Compare how the two reviewers describe the coffee.",
            solution: "Both reviewers praise the coffee, but differently. The critic uses precise, evaluative language — 'single-origin beans, expertly roasted' — which conveys expertise and judgement. The blogger uses enthusiastic, personal language — 'genuinely the best coffee I have had outside London' — which conveys excitement and personal experience. The critic evaluates objectively; the blogger recommends subjectively.",
          },
          questions: [
            {
              id: "el10-u6-language-imagery-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which review uses the more formal register?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The newspaper review" },
                  { id: "b", text: "The blog post" },
                  { id: "c", text: "Both equally" },
                  { id: "d", text: "Neither" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Register", statement: "The level of formality in writing." }],
                steps: [{ reasoning: "The critic uses measured evaluative language; the blogger uses informal enthusiasm.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(a)** The newspaper review.",
                commonErrors: ["Choosing the blog because it is longer or more enthusiastic."],
              },
            },
            {
              id: "el10-u6-language-imagery-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Identify one difference in word choice between the two reviews and explain its effect.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Word choice", statement: "Different vocabulary creates different tones." }],
                steps: [
                  { reasoning: "The critic says 'competent' and 'partially justifies'; the blogger says 'WOW' and '10/10'.", marks: 1, markCode: "AO2" },
                  { reasoning: "The critic's words are measured and evaluative; the blogger's are enthusiastic and emphatic.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The critic's measured 'competent' vs the blogger's emphatic '10/10' shows evaluation vs enthusiasm.",
                commonErrors: ["Quoting words without explaining their tonal effect."],
              },
            },
            {
              id: "el10-u6-language-imagery-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Compare how each reviewer presents the café's service.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Comparative analysis", statement: "Weaving both texts into one point shows comparison." }],
                steps: [
                  { reasoning: "The critic notes 'inconsistent' service with 'long waits at peak times' — a measured criticism.", evidence: "the service is inconsistent, with long waits", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger admits 'you might wait a bit at lunch' but dismisses it with 'honestly? Worth it'.", evidence: "you might wait a bit at lunch", marks: 1, markCode: "AO2" },
                  { reasoning: "Both acknowledge the wait, but the critic weighs it against quality while the blogger waves it away.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Both mention waits; the critic criticises inconsistency while the blogger excuses it as worth it.",
                commonErrors: ["Analysing each review separately without comparing."],
              },
            },
            {
              id: "el10-u6-language-imagery-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Analyse how the difference in register between the two reviews shapes the reader's response.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Register and persuasion", statement: "Formality signals expertise; informality signals enthusiasm." },
                  { kind: "context", name: "Audience", statement: "Different registers suit different readers." },
                ],
                steps: [
                  { reasoning: "The critic's formal register ('prime position', 'premium', 'competent') positions them as an expert judge.", evidence: "a competent establishment that fails to distinguish itself", marks: 1, markCode: "AO2" },
                  { reasoning: "This invites readers to trust the evaluation as objective and informed.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger's informal register ('WOW', 'OK so', '10/10') positions them as a fellow enthusiast.", evidence: "I was NOT expecting much but WOW", marks: 1, markCode: "AO2" },
                  { reasoning: "This invites readers to share the excitement rather than defer to expertise.", marks: 1, markCode: "AO2" },
                  { reasoning: "The register difference means the same café is presented as 'competent' by one and '10/10' by the other.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "Formal register signals expert judgement; informal register signals shared enthusiasm — shaping trust vs excitement in readers.",
                commonErrors: ["Describing registers without linking to reader response."],
              },
            },
            {
              id: "el10-u6-language-imagery-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Compare the evaluative language in the two reviews and explain how each writer tries to persuade the reader.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Evaluative language", statement: "Judgement words persuade readers to agree." },
                  { kind: "skill", name: "Persuasion", statement: "Different writers persuade through different language." },
                ],
                steps: [
                  { reasoning: "The critic uses measured judgements: 'excellent', 'competent', 'fails to distinguish itself'.", evidence: "fails to distinguish itself", marks: 1, markCode: "AO2" },
                  { reasoning: "These balanced judgements persuade through apparent objectivity and expertise.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger uses emphatic superlatives: 'genuinely the best', 'WOW', '10/10 would queue again'.", evidence: "10/10 would queue again", marks: 1, markCode: "AO2" },
                  { reasoning: "These enthusiastic judgements persuade through excitement and personal endorsement.", marks: 1, markCode: "AO2" },
                  { reasoning: "The critic persuades by seeming fair; the blogger persuades by seeming genuine.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both aim to convince, but through opposite strategies: restraint vs enthusiasm.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "The critic persuades through measured, objective judgements; the blogger through emphatic, personal enthusiasm — restraint vs excitement.",
                commonErrors: ["Listing evaluative words without comparing persuasion strategies."],
              },
            },
            {
              id: "el10-u6-language-imagery-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the two reviews and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify two differences in register between the reviews.", marks: 2 },
                { label: "b", prompt: "Compare how each reviewer describes the coffee.", marks: 3 },
                { label: "c", prompt: "Analyse how each writer's language positions them differently for the reader.", marks: 3 },
                { label: "d", prompt: "Evaluate which review is more convincing and why.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Register", statement: "Formality level positions the writer relative to the reader." },
                  { kind: "context", name: "Audience", statement: "Critic vs blogger audiences expect different styles." },
                ],
                steps: [
                  { part: "a", reasoning: "The critic uses formal evaluative vocabulary ('prime position', 'premium').", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "The blogger uses informal enthusiasm ('WOW', 'OK so', '10/10').", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "The critic: 'single-origin beans, expertly roasted' — precise, expert judgement.", evidence: "single-origin beans, expertly roasted", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The blogger: 'genuinely the best coffee I have had outside London' — personal, enthusiastic.", evidence: "genuinely the best coffee", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Both praise, but the critic evaluates while the blogger recommends.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The critic positions as expert: measured judgements invite trust.", evidence: "a competent establishment", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The blogger positions as peer: enthusiasm invites shared excitement.", evidence: "would queue again", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The critic's restraint suggests fairness; the blogger's enthusiasm suggests genuine passion.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The critic is more convincing for a reader seeking reliable judgement; the blogger for one seeking recommendations.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Effectiveness depends on audience: objectivity persuades skeptics, enthusiasm persuades enthusiasts.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(3, "b"),
                  ...bands(3, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) Formal vs informal register. (b) Both praise coffee; critic evaluates, blogger recommends. (c) Critic = expert, blogger = enthusiast. (d) The critic convinces skeptics; the blogger convinces enthusiasts.",
                commonErrors: ["Analysing reviews separately without comparing.", "Judging one as simply better without considering audience."],
              },
            },
          ],
        },
        {
          id: "el10-u6-structure-form",
          title: "Comparing structure and form across texts",
          skill: "Compare how two texts are organised and shaped by their form.",
          sections: [
            {
              heading: "Structure in reviews",
              body: "Both reviews follow a loose pattern: **introduction** (position/first impression), **points** (coffee, service, price), **verdict** (overall judgement). But they differ: the critic's structure is balanced — praise, criticism, partial justification, measured conclusion. The blogger's is enthusiastic throughout, ending on a personal recommendation ('10/10 would queue again').",
            },
            {
              heading: "Form shapes meaning",
              body: "The critic's newspaper column has paragraphs that each develop one evaluative point. The blog's shorter paragraphs and exclamations create breathless excitement. Form is not just layout — it guides how the reader receives the message.",
            },
            {
              heading: "Openings and endings",
              body: "The critic opens with location and first impression ('prime position... somewhat sterile'). The blogger opens with anticipation ('I was NOT expecting much but WOW'). The critic ends with a measured verdict; the blogger ends with a personal pledge ('would queue again'). Different endings serve different purposes: judgement vs recommendation.",
            },
          ],
          keyFormulas: [
            { name: "Review structure", statement: "Introduction, evaluative points, verdict or recommendation." },
            { name: "Balanced vs enthusiastic", statement: "Critic weighs pros and cons; blogger celebrates." },
            { name: "Ending function", statement: "Verdict judges; recommendation urges action." },
          ],
          workedExample: {
            problem: "Compare the structure of the two reviews.",
            solution: "Both follow introduction-points-verdict, but differently. The critic opens with location and a balanced first impression, devotes paragraphs to coffee, service and price, and ends with a measured verdict ('competent... fails to distinguish itself'). The blogger opens with personal anticipation, gives brief enthusiastic points, and ends with a personal pledge ('10/10 would queue again'). The critic's structure supports judgement; the blogger's supports recommendation.",
          },
          questions: [
            {
              id: "el10-u6-structure-form-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the shared structural pattern of both reviews?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Introduction, evaluative points, verdict" },
                  { id: "b", text: "Question, answer, conclusion" },
                  { id: "c", text: "Chronological narrative" },
                  { id: "d", text: "Problem, solution, evaluation" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "convention", name: "Review structure", statement: "Reviews typically introduce, evaluate points, then give a verdict." }],
                steps: [{ reasoning: "Both open with an impression, discuss coffee/service/price, and end with a judgement.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(a)** Introduction, evaluative points, verdict.",
                commonErrors: ["Missing the shared pattern by focusing only on differences."],
              },
            },
            {
              id: "el10-u6-structure-form-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Identify one structural difference between the two reviews.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Structure", statement: "Organisation shapes how the message is received." }],
                steps: [
                  { reasoning: "The critic balances praise and criticism in each paragraph; the blogger is enthusiastic throughout.", marks: 1, markCode: "AO2" },
                  { reasoning: "The critic ends with a measured verdict; the blogger ends with a personal recommendation.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The critic balances points; the blogger celebrates throughout and ends with a recommendation.",
                commonErrors: ["Describing content rather than structure."],
              },
            },
            {
              id: "el10-u6-structure-form-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Compare the openings of the two reviews and explain how each prepares the reader.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Openings", statement: "First impressions frame the reader's expectations." }],
                steps: [
                  { reasoning: "The critic opens with location and a measured first impression: 'prime position... somewhat sterile'.", evidence: "prime position on the waterfront", marks: 1, markCode: "AO2" },
                  { reasoning: "This frames the review as balanced evaluation from the start.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger opens with personal anticipation: 'I was NOT expecting much but WOW'.", evidence: "I was NOT expecting much but WOW", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The critic's measured opening frames judgement; the blogger's enthusiastic opening frames excitement.",
                commonErrors: ["Quoting openings without explaining their framing effect."],
              },
            },
            {
              id: "el10-u6-structure-form-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Analyse how the different endings of the two reviews serve their different purposes.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Endings", statement: "The final lines deliver the text's purpose." },
                  { kind: "context", name: "Purpose", statement: "A verdict judges; a recommendation urges action." },
                ],
                steps: [
                  { reasoning: "The critic ends with a measured verdict: 'a competent establishment that fails to distinguish itself'.", evidence: "fails to distinguish itself", marks: 1, markCode: "AO2" },
                  { reasoning: "This delivers judgement — neither praise nor condemnation, a balanced assessment.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger ends with a personal pledge: '10/10 would queue again'.", evidence: "10/10 would queue again", marks: 1, markCode: "AO2" },
                  { reasoning: "This delivers recommendation — an endorsement that urges the reader to visit.", marks: 1, markCode: "AO2" },
                  { reasoning: "The endings show how structure serves purpose: the critic judges, the blogger recommends.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The critic's verdict judges; the blogger's pledge recommends — endings serve different purposes.",
                commonErrors: ["Describing endings without linking to purpose."],
              },
            },
            {
              id: "el10-u6-structure-form-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Compare the paragraph structure of the two reviews and explain how form affects the reading experience.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Form and structure", statement: "Layout and organisation guide the reader." },
                  { kind: "skill", name: "Reading experience", statement: "Different forms create different effects." },
                ],
                steps: [
                  { reasoning: "The critic uses full, developed paragraphs, each exploring one evaluative point in depth.", marks: 1, markCode: "AO2" },
                  { reasoning: "This creates a measured, considered reading experience suited to newspaper readers.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger uses shorter paragraphs and exclamations ('WOW', 'honestly?'), creating breathless excitement.", evidence: "but honestly? Worth it", marks: 1, markCode: "AO2" },
                  { reasoning: "This mimics enthusiastic speech and suits a casual blog audience.", marks: 1, markCode: "AO2" },
                  { reasoning: "Form thus reinforces content: the critic's form is evaluative, the blogger's is enthusiastic.", marks: 1, markCode: "AO2" },
                  { reasoning: "The same subject is experienced differently because of how each text is shaped.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "The critic's developed paragraphs create measured judgement; the blogger's short, exclamatory paragraphs create breathless excitement — form reinforces purpose.",
                commonErrors: ["Describing form without linking to reading experience."],
              },
            },
            {
              id: "el10-u6-structure-form-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the two reviews and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State the shared structural pattern of both reviews.", marks: 2 },
                { label: "b", prompt: "Compare the openings of the two reviews.", marks: 3 },
                { label: "c", prompt: "Analyse how the endings serve different purposes.", marks: 3 },
                { label: "d", prompt: "Evaluate how structure supports each writer's purpose.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Structure and form", statement: "Organisation shapes how purpose is delivered." },
                  { kind: "context", name: "Purpose", statement: "Verdict vs recommendation require different structures." },
                ],
                steps: [
                  { part: "a", reasoning: "Both follow introduction, evaluative points (coffee, service, price), verdict.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "The shared pattern is the review convention.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Critic opens with location and measured first impression.", evidence: "prime position on the waterfront", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Blogger opens with personal anticipation and surprise.", evidence: "I was NOT expecting much but WOW", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The critic frames judgement; the blogger frames excitement.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Critic ends with measured verdict: 'competent... fails to distinguish itself'.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "This delivers balanced judgement appropriate to a critic.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Blogger ends with personal pledge: '10/10 would queue again'.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The critic's balanced structure supports objective evaluation; the blogger's enthusiastic structure supports recommendation.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Each structure effectively serves its writer's purpose and audience.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(3, "b"),
                  ...bands(3, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) Introduction-points-verdict. (b) Critic = measured location; blogger = personal surprise. (c) Critic judges; blogger recommends. (d) Each structure serves its purpose effectively.",
                commonErrors: ["Describing structure without linking to purpose.", "Treating the shared pattern as the only point."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u6-compare-methods-notes",
      title: "Comparing writers' methods — notes",
      summary: "Integrated comparison weaves both texts into each point using 'whereas', 'similarly', 'both'; compare language, register, imagery and structure.",
      sections: [
        { heading: "Key idea", body: "Comparison means analysing the relationship between texts, not two separate descriptions." },
        { heading: "Language", body: "Compare word choice, register, tone and imagery using comparative connectives." },
        { heading: "Structure", body: "Compare openings, paragraph development and endings; form serves purpose." },
      ],
    },
  },
  // ============================== UNIT 6, LESSON 2 ==============================
  {
    file: "lesson-6-2.ts",
    exportName: "lesson62",
    lesson: {
      id: "el10-u6-lesson-6-2",
      code: "6-2",
      title: "Evaluating Texts and Writers' Intentions",
      goal: "I CAN infer writers' purposes and audiences and evaluate how effectively texts achieve their aims.",
      standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3", "4EA1 AO4"],
      vocabulary: [
        { term: "Purpose", definition: "What the writer wants to achieve: inform, persuade, entertain or argue." },
        { term: "Audience", definition: "The intended readers; their expectations shape the writing." },
        { term: "Persuasive device", definition: "A technique used to convince: rhetorical questions, emotive language, evidence." },
        { term: "Bias", definition: "A writer's favoured position that colours their presentation." },
        { term: "Effectiveness", definition: "How well a text achieves its purpose for its audience." },
        { term: "Judgement", definition: "An evaluative conclusion supported by evidence from the text." },
      ],
      concepts: [
        {
          id: "el10-u6-purpose-audience",
          title: "Inferring purpose and audience across texts",
          skill: "Infer why writers write and who they write for by analysing language and conventions.",
          sections: [
            {
              heading: "Inferring purpose",
              body: "Purpose is revealed by language choices. The parent's letter uses formal, respectful language ('I urge the governors to reconsider') — its purpose is to **persuade** the school to keep uniforms. The student's letter uses informal, emotional language ('honestly I am gutted', 'so boring and expensive') — its purpose is also to persuade, but through personal appeal rather than formal argument.",
            },
            {
              heading: "Inferring audience",
              body: "Audience is revealed by what the writer assumes. The parent addresses 'the governors' with formal conventions — assuming an adult, authoritative reader. The student addresses 'the headteacher' casually ('Hi!') — assuming a reader who will respond to informality, or perhaps not noticing the register mismatch.",
            },
            {
              heading: "Comparing intentions",
              body: "Both writers want the same outcome (keep or change uniform policy) but with opposite positions. Comparing their methods shows how purpose and audience shape every choice: formal argument vs informal appeal.",
            },
          ],
          keyFormulas: [
            { name: "Purpose", statement: "What the writer wants to achieve — infer from language and conventions." },
            { name: "Audience", statement: "The intended reader — infer from assumed knowledge and register." },
            { name: "Persuasive devices", statement: "Rhetorical questions, emotive language, evidence, direct address." },
          ],
          workedExample: {
            problem: "Compare the purposes and audiences of the two letters about school uniform.",
            solution: "Both aim to influence the uniform decision, but differently. The parent writes formally to 'the governors', using respectful address and structured argument — persuading through reason and authority. The student writes informally ('Hi!'), using emotion and personal complaint — persuading through relatability. The parent's audience is authority figures; the student's is the same headteacher but addressed as if to a peer.",
          },
          questions: [
            {
              id: "el10-u6-purpose-audience-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the main purpose of the parent's letter?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "To complain about school meals" },
                  { id: "b", text: "To persuade the school to keep school uniform" },
                  { id: "c", text: "To apply for a teaching job" },
                  { id: "d", text: "To describe school life" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Purpose", statement: "What the writer wants to achieve." }],
                steps: [{ reasoning: "The parent argues uniforms 'serve an important purpose' and urges governors to 'reconsider'.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** To persuade the school to keep uniform.",
                commonErrors: ["Missing the persuasive intent behind the formal argument."],
              },
            },
            {
              id: "el10-u6-purpose-audience-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Identify two features of the student's letter that reveal its informal register.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Register", statement: "Informal features signal casual address." }],
                steps: [
                  { reasoning: "Casual greeting 'Hi!' and sign-off '— Year 10' instead of formal conventions.", evidence: "Hi! Just saw the uniform news", marks: 1, markCode: "AO2" },
                  { reasoning: "Emotional, colloquial language: 'gutted', 'so boring and expensive', 'fingers crossed'.", evidence: "honestly I am gutted", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "'Hi!' greeting and emotional colloquialisms reveal the informal register.",
                commonErrors: ["Listing features without linking to register."],
              },
            },
            {
              id: "el10-u6-purpose-audience-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Compare the persuasive methods used in the two letters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Persuasive devices", statement: "Different writers convince through different methods." }],
                steps: [
                  { reasoning: "The parent uses formal argument: lists reasons (equality, bullying, dress codes) and addresses 'governors'.", evidence: "they promote equality, reduce bullying", marks: 1, markCode: "AO2" },
                  { reasoning: "The student uses emotional appeal and rhetorical question: 'Can we please just have a dress code instead?'", evidence: "Can we please just have a dress code instead?", marks: 1, markCode: "AO2" },
                  { reasoning: "The parent persuades through logic and authority; the student through personal feeling and relatability.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The parent argues logically to authority; the student appeals emotionally through personal complaint.",
                commonErrors: ["Describing methods separately without comparing effectiveness."],
              },
            },
            {
              id: "el10-u6-purpose-audience-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Analyse how each writer's assumed audience shapes their language choices in the letters.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Audience assumption", statement: "Writers choose language based on who they think will read it." },
                  { kind: "technique", name: "Address", statement: "Formal vs informal address signals assumed relationship." },
                ],
                steps: [
                  { reasoning: "The parent assumes an adult, authoritative audience: 'Dear Headteacher', 'governors', 'Yours sincerely'.", evidence: "I urge the governors to reconsider", marks: 1, markCode: "AO2" },
                  { reasoning: "This formal address commands respect and suits decision-makers.", marks: 1, markCode: "AO2" },
                  { reasoning: "The student assumes a casual or peer audience: 'Hi!', '— Year 10', no formal sign-off.", evidence: "— Year 10", marks: 1, markCode: "AO2" },
                  { reasoning: "This informal address may charm or may undermine credibility depending on the reader.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both address the headteacher, but the parent treats them as authority while the student treats them as approachable.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The parent assumes authority figures needing formal respect; the student assumes an approachable reader — shaping every language choice.",
                commonErrors: ["Identifying audience without linking to language choices."],
              },
            },
            {
              id: "el10-u6-purpose-audience-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Both letters aim to influence the uniform decision. Compare how effectively each achieves its purpose through language and structure.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Purpose achievement", statement: "Effectiveness depends on matching methods to audience." },
                  { kind: "technique", name: "Argument vs appeal", statement: "Reason and emotion persuade different readers differently." },
                ],
                steps: [
                  { reasoning: "The parent builds a structured argument: states position, gives three reasons, urges action — effective for decision-makers.", evidence: "I urge the governors to reconsider", marks: 1, markCode: "AO2" },
                  { reasoning: "The student's emotional appeal ('gutted', 'boring and expensive') is relatable but less substantiated.", evidence: "honestly I am gutted", marks: 1, markCode: "AO2" },
                  { reasoning: "The parent's formal register matches the governors' expectations; the student's casual register risks seeming disrespectful.", marks: 1, markCode: "AO2" },
                  { reasoning: "However, the student's personal voice may resonate with teachers who value student opinion.", marks: 1, markCode: "AO2" },
                  { reasoning: "Overall the parent is more likely to persuade authority; the student may persuade hearts but not minds.", marks: 1, markCode: "AO2" },
                  { reasoning: "Effectiveness depends on whether the audience responds to logic or emotion.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "The parent's structured argument better suits authority; the student's emotional appeal is relatable but less substantiated — effectiveness depends on audience.",
                commonErrors: ["Declaring one letter simply better without considering audience."],
              },
            },
            {
              id: "el10-u6-purpose-audience-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the two letters and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State the purpose of each letter.", marks: 2 },
                { label: "b", prompt: "Identify the intended audience of each letter.", marks: 2 },
                { label: "c", prompt: "Compare the persuasive methods used in each letter.", marks: 3 },
                { label: "d", prompt: "Evaluate which letter is more likely to achieve its purpose.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Purpose and audience", statement: "Both shape every language choice." },
                  { kind: "technique", name: "Persuasion", statement: "Reason and emotion convince differently." },
                ],
                steps: [
                  { part: "a", reasoning: "Parent: persuade school to keep uniform.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Student: persuade school to replace uniform with dress code.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Parent: governors/headteacher — authority figures.", evidence: "Dear Headteacher", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Student: headteacher addressed casually — possibly teachers or peers.", evidence: "— Year 10", marks: 1, markCode: "AO1" },
                  { part: "c", reasoning: "Parent: formal argument with three reasons (equality, bullying, dress codes).", evidence: "they promote equality, reduce bullying", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Student: emotional appeal and rhetorical question.", evidence: "Can we please just have a dress code instead?", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Parent persuades through logic; student through feeling.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Parent more likely to persuade authority through respectful, reasoned argument.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Student's emotion may resonate but risks seeming disrespectful.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Effectiveness depends on audience values: logic vs emotion.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(2, "b"),
                  ...bands(3, "c"),
                  ...bands(3, "d"),
                ],
                finalAnswer: "(a) Parent: keep uniform; student: replace with dress code. (b) Both address headteacher/governors but with different assumed relationships. (c) Parent argues logically; student appeals emotionally. (d) Parent more likely to persuade authority.",
                commonErrors: ["Confusing purpose with topic.", "Ignoring how audience shapes method."],
              },
            },
          ],
        },
        {
          id: "el10-u6-evaluating",
          title: "Evaluating effectiveness and making judgements",
          skill: "Judge how well texts achieve their purposes and support judgements with evidence.",
          sections: [
            {
              heading: "What makes a text effective?",
              body: "Effectiveness means achieving the purpose **for the audience**. A formal review succeeds if it informs and judges fairly; a blog succeeds if it recommends enthusiastically. Evaluate by asking: does the language suit the audience? Does the structure deliver the purpose? Is the evidence convincing?",
            },
            {
              heading: "Supporting judgements",
              body: "Never just say 'this is better'. **Judge, then justify**: 'The critic's review is more convincing because the balanced structure and precise vocabulary suggest objectivity, whereas the blogger's enthusiasm, while engaging, may seem biased.' Link every judgement to specific evidence.",
            },
            {
              heading: "Bias and balance",
              body: "All texts have a position. The critic's 'fails to distinguish itself' reveals a judgement; the blogger's '10/10' reveals enthusiasm. Recognising bias does not make a text ineffective — it makes it positioned. The best evaluation acknowledges both effectiveness and partiality.",
            },
          ],
          keyFormulas: [
            { name: "Effectiveness", statement: "Achieving purpose for the intended audience." },
            { name: "Judgement + evidence", statement: "Every evaluative claim needs textual support." },
            { name: "Bias", statement: "A writer's favoured position that colours presentation." },
          ],
          workedExample: {
            problem: "Evaluate which review of the café is more effective and justify your judgement.",
            solution: "The critic's review is more effective for a reader seeking reliable judgement: the balanced structure (praise, criticism, partial justification) and precise evaluative language ('competent', 'partially justifies') suggest objectivity. The blogger's review is more effective for a reader seeking a recommendation: the enthusiasm ('10/10 would queue again') is persuasive for those wanting a verdict. Effectiveness depends on audience — the critic informs, the blogger recommends.",
          },
          questions: [
            {
              id: "el10-u6-evaluating-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What does 'effectiveness' mean when evaluating a text?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Whether the text is long enough" },
                  { id: "b", text: "Whether the text achieves its purpose for its audience" },
                  { id: "c", text: "Whether the text uses complex words" },
                  { id: "d", text: "Whether the text has no errors" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Effectiveness", statement: "Achieving purpose for the intended audience." }],
                steps: [{ reasoning: "Effectiveness is about purpose and audience, not length or complexity.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** Achieving purpose for the audience.",
                commonErrors: ["Confusing effectiveness with length or sophistication."],
              },
            },
            {
              id: "el10-u6-evaluating-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain why a judgement like 'this review is good' is insufficient in an exam answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Evidence-based judgement", statement: "Claims need textual support to earn marks." }],
                steps: [
                  { reasoning: "'Good' is vague and unsupported; it does not show understanding of the text's methods.", marks: 1, markCode: "AO4" },
                  { reasoning: "A strong answer judges AND justifies: 'convincing because the balanced structure suggests objectivity'.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Unsupported judgements earn little; link every claim to specific evidence.",
                commonErrors: ["Giving opinions without evidence."],
              },
            },
            {
              id: "el10-u6-evaluating-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Identify a bias in the blogger's review and explain how it affects the evaluation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bias", statement: "A writer's favoured position that colours presentation." }],
                steps: [
                  { reasoning: "The blogger's '10/10 would queue again' reveals strong enthusiasm — a positive bias.", evidence: "10/10 would queue again", marks: 1, markCode: "AO2" },
                  { reasoning: "The bias makes the review less objective but more persuasive for recommendation.", marks: 1, markCode: "AO2" },
                  { reasoning: "An effective evaluation acknowledges this bias rather than ignoring it.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The blogger's enthusiasm is biased but effective for recommendation; acknowledge it in evaluation.",
                commonErrors: ["Calling bias a flaw without considering its persuasive function."],
              },
            },
            {
              id: "el10-u6-evaluating-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Analyse how the critic's balanced structure makes the review more convincing than a one-sided account would be.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Balance and credibility", statement: "Acknowledging drawbacks builds trust." },
                  { kind: "context", name: "Critic's role", statement: "Reviewers are expected to judge fairly." },
                ],
                steps: [
                  { reasoning: "The critic admits flaws: 'service is inconsistent', 'prices are above average'.", evidence: "the service is inconsistent", marks: 1, markCode: "AO2" },
                  { reasoning: "Admitting negatives makes the praise ('coffee is excellent') seem more credible.", marks: 1, markCode: "AO2" },
                  { reasoning: "The structure weighs pros and cons: 'though the quality of the food partially justifies the premium'.", evidence: "partially justifies the premium", marks: 1, markCode: "AO2" },
                  { reasoning: "This balance positions the critic as fair, which persuades readers to trust the verdict.", marks: 1, markCode: "AO2" },
                  { reasoning: "A one-sided account would seem promotional rather than evaluative.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The critic's balanced structure — acknowledging flaws — builds credibility and makes the praise convincing.",
                commonErrors: ["Describing balance without linking to credibility."],
              },
            },
            {
              id: "el10-u6-evaluating-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Evaluate the effectiveness of the student's letter compared to the parent's letter, considering both audience and purpose.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Evaluation", statement: "Judge effectiveness against purpose and audience." },
                  { kind: "context", name: "Register and credibility", statement: "Informal address can charm or undermine." },
                ],
                steps: [
                  { reasoning: "The student's informal register ('Hi!', 'gutted') is relatable but may seem disrespectful to governors.", evidence: "honestly I am gutted", marks: 1, markCode: "AO4" },
                  { reasoning: "The parent's formal argument matches the audience's expectations and commands respect.", evidence: "I urge the governors to reconsider", marks: 1, markCode: "AO4" },
                  { reasoning: "The student's emotional appeal may resonate with those who value student voice.", marks: 1, markCode: "AO4" },
                  { reasoning: "However, lack of structured reasons weakens the student's case compared to the parent's three-point argument.", marks: 1, markCode: "AO4" },
                  { reasoning: "The parent is more likely to persuade decision-makers; the student may persuade sympathisers.", marks: 1, markCode: "AO4" },
                  { reasoning: "Effectiveness depends on whether the audience responds to authority or emotion.", marks: 1, markCode: "AO4" },
                ],
                levels: bands(6),
                finalAnswer: "The parent's formal argument better suits authority; the student's emotion may charm but is less substantiated — audience determines effectiveness.",
                commonErrors: ["Judging effectiveness without reference to audience."],
              },
            },
            {
              id: "el10-u6-evaluating-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the two letters and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify one strength of each letter's approach.", marks: 2 },
                { label: "b", prompt: "Identify one weakness of each letter's approach.", marks: 2 },
                { label: "c", prompt: "Compare how effectively each letter persuades its audience.", marks: 3 },
                { label: "d", prompt: "Make an overall judgement on which letter is more effective, with justification.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Evaluation", statement: "Judge effectiveness against purpose and audience." },
                  { kind: "context", name: "Persuasion", statement: "Reason and emotion persuade differently." },
                ],
                steps: [
                  { part: "a", reasoning: "Parent's strength: structured, reasoned argument with formal authority.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "Student's strength: relatable emotional appeal and personal voice.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Parent's weakness: formal tone may feel distant or preachy.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Student's weakness: informal register may seem disrespectful; lacks structured reasons.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The parent persuades through logic suited to governors.", evidence: "they promote equality, reduce bullying", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The student persuades through emotion suited to sympathetic readers.", evidence: "Can we please just have a dress code instead?", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The parent's method is more likely to change policy; the student's may change hearts.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Overall judgement: the parent is more effective for the actual audience (authority).", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Justification: formal register, structured reasons and respectful address match governors' expectations.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "The student's approach, while engaging, risks undermining credibility.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(2, "b"),
                  ...bands(3, "c"),
                  ...bands(3, "d"),
                ],
                finalAnswer: "(a) Parent: reasoned authority; student: relatable emotion. (b) Parent: distant; student: disrespectful risk. (c) Parent persuades logic; student persuades feeling. (d) Parent more effective for authority audience.",
                commonErrors: ["Judging without evidence.", "Ignoring audience in the evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u6-evaluate-notes",
      title: "Evaluating texts — notes",
      summary: "Judge effectiveness against purpose and audience; support every judgement with evidence; recognise bias as positioning.",
      sections: [
        { heading: "Key idea", body: "Effectiveness = achieving purpose for the audience, not just being 'good'." },
        { heading: "Purpose and audience", body: "Infer from language and conventions: formal argument vs emotional appeal." },
        { heading: "Judgement", body: "Always judge AND justify with specific evidence; acknowledge bias." },
      ],
    },
  },
  // ============================== UNIT 6, LESSON 3 ==============================
  {
    file: "lesson-6-3.ts",
    exportName: "lesson63",
    lesson: {
      id: "el10-u6-lesson-6-3",
      code: "6-3",
      title: "Exam Technique for Comparison Questions",
      goal: "I CAN plan, structure and write high-level comparison answers under exam conditions.",
      standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3", "4EA1 AO4"],
      vocabulary: [
        { term: "Comparison question", definition: "An exam question requiring analysis of similarities and differences between texts." },
        { term: "Integrated paragraph", definition: "A paragraph that discusses both texts together on one point." },
        { term: "Comparative connective", definition: "Linking words showing relationship: 'whereas', 'similarly', 'both', 'in contrast'." },
        { term: "PEE paragraph", definition: "Point, Evidence, Explanation — the basic analytical paragraph structure." },
        { term: "Time management", definition: "Allocating exam time across questions to complete all parts." },
        { term: "Self-check", definition: "Reviewing an answer for AO coverage, evidence and clarity before time ends." },
      ],
      concepts: [
        {
          id: "el10-u6-planning",
          title: "Planning a comparison answer",
          skill: "Plan integrated comparative paragraphs that cover language, structure and evaluation.",
          sections: [
            {
              heading: "The integrated paragraph",
              body: "A strong comparison paragraph makes **one point** about **both texts** together: 'Whereas the critic uses measured judgement ('competent'), the blogger uses emphatic enthusiasm ('10/10').' This is integrated comparison — not Text A paragraph followed by Text B paragraph. Use 'whereas', 'similarly', 'both', 'in contrast' to weave them together.",
            },
            {
              heading: "What to compare",
              body: "Plan points across **language** (word choice, tone, imagery), **structure** (openings, organisation, endings) and **purpose/audience** (who each writer addresses and why). Aim for 3-4 integrated paragraphs for a 10-mark comparison. Each paragraph = one point + evidence from both texts + explanation of the difference/similarity.",
            },
            {
              heading: "Planning before writing",
              body: "Spend 3-5 minutes planning: identify 3-4 comparison points, note one quotation from each text per point, and decide your overall judgement. Planning prevents the common error of writing two separate analyses or running out of time.",
            },
          ],
          keyFormulas: [
            { name: "Integrated paragraph", statement: "One point about both texts, woven with 'whereas', 'similarly', 'both'." },
            { name: "Comparison points", statement: "Language, structure, purpose/audience — 3-4 integrated paragraphs." },
            { name: "Planning", statement: "3-5 minutes: points, quotations, judgement." },
          ],
          workedExample: {
            problem: "Plan a comparison of the two café reviews in three integrated paragraphs.",
            solution: "Paragraph 1 (language): critic's 'competent' vs blogger's '10/10' — measured vs enthusiastic. Paragraph 2 (structure): critic's balanced verdict vs blogger's personal pledge — judgement vs recommendation. Paragraph 3 (purpose/audience): critic informs skeptics; blogger recommends to enthusiasts. Each paragraph quotes both texts and explains the difference.",
          },
          questions: [
            {
              id: "el10-u6-planning-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is an integrated comparison paragraph?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A paragraph about Text A followed by a paragraph about Text B" },
                  { id: "b", text: "A paragraph that discusses both texts together on one point" },
                  { id: "c", text: "A paragraph listing similarities only" },
                  { id: "d", text: "A paragraph with no evidence" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Integrated comparison", statement: "Both texts discussed together on one point." }],
                steps: [{ reasoning: "Integration means weaving both texts into each point, not separating them.", marks: 1, markCode: "AO3" }],
                finalAnswer: "**(b)** Both texts together on one point.",
                commonErrors: ["Choosing the separate-paragraphs option."],
              },
            },
            {
              id: "el10-u6-planning-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain why 'Text A says X. Text B says Y.' is a weak comparison and how to improve it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Integrated comparison", statement: "Weak comparison separates; strong comparison relates." }],
                steps: [
                  { reasoning: "Separating texts into two statements does not show the relationship between them.", marks: 1, markCode: "AO3" },
                  { reasoning: "Improve by weaving together: 'Whereas Text A says X, Text B says Y, showing...'", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Separate statements don't compare; weave both texts with 'whereas' and explain the difference.",
                commonErrors: ["Thinking side-by-side mention equals comparison."],
              },
            },
            {
              id: "el10-u6-planning-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "List three areas you should compare when writing a comparison answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparison coverage", statement: "Language, structure and purpose are core areas." }],
                steps: [
                  { reasoning: "Language: word choice, tone, imagery, register.", marks: 1, markCode: "AO3" },
                  { reasoning: "Structure: openings, paragraph organisation, endings.", marks: 1, markCode: "AO3" },
                  { reasoning: "Purpose/audience: who each writer addresses and why.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Language, structure and purpose/audience.",
                commonErrors: ["Comparing only content, not methods."],
              },
            },
            {
              id: "el10-u6-planning-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain the planning process for a 10-mark comparison question and why each step matters.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Exam planning", statement: "Structured planning prevents common errors." },
                  { kind: "technique", name: "Integrated paragraphs", statement: "Planning ensures both texts appear in each point." },
                ],
                steps: [
                  { reasoning: "Identify 3-4 comparison points across language, structure and purpose — ensures coverage.", marks: 1, markCode: "AO3" },
                  { reasoning: "Note one quotation from each text per point — ensures evidence is ready.", marks: 1, markCode: "AO3" },
                  { reasoning: "Decide an overall judgement — prepares for the evaluative conclusion.", marks: 1, markCode: "AO3" },
                  { reasoning: "Planning prevents writing two separate analyses or running out of time.", marks: 1, markCode: "AO3" },
                  { reasoning: "3-5 minutes of planning saves time and improves structure.", marks: 1, markCode: "AO3" },
                ],
                levels: bands(5),
                finalAnswer: "Plan 3-4 points, gather quotations, decide judgement — prevents separate analyses and time pressure.",
                commonErrors: ["Starting to write without planning."],
              },
            },
            {
              id: "el10-u6-planning-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A student writes: 'The critic says the coffee is excellent. The blogger says it is the best.' Analyse why this is a weak comparison and rewrite it as an integrated paragraph.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Integrated comparison", statement: "Weak comparison separates; strong comparison relates and explains." },
                  { kind: "skill", name: "Analysis", statement: "Comparison requires explaining the significance of differences." },
                ],
                steps: [
                  { reasoning: "The student's version separates the texts and does not explain the difference.", marks: 1, markCode: "AO3" },
                  { reasoning: "It misses the point: 'excellent' is measured judgement; 'the best' is emphatic enthusiasm.", marks: 1, markCode: "AO3" },
                  { reasoning: "Rewrite: 'Whereas the critic praises the coffee as 'excellent' — measured, expert judgement — the blogger exclaims it is 'the best coffee I have had', conveying personal enthusiasm rather than objective evaluation.'", marks: 2, markCode: "AO3" },
                  { reasoning: "The rewrite uses 'whereas' to relate, quotes both, and explains the tonal difference.", marks: 1, markCode: "AO3" },
                  { reasoning: "This integrated approach earns higher marks because it analyses the relationship.", marks: 1, markCode: "AO3" },
                ],
                levels: bands(6),
                finalAnswer: "Separate statements don't compare; weave with 'whereas', quote both, and explain the tonal difference.",
                commonErrors: ["Quoting both texts without explaining the relationship."],
              },
            },
            {
              id: "el10-u6-planning-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "You are planning a comparison of the two café reviews. Answer the questions that follow.",
              parts: [
                { label: "a", prompt: "List three comparison points you would plan.", marks: 3 },
                { label: "b", prompt: "Write one integrated comparative sentence about the reviews' tone.", marks: 3 },
                { label: "c", prompt: "Explain why integrated paragraphs score higher than separate analyses.", marks: 2 },
                { label: "d", prompt: "Describe how you would use the final two minutes to check your answer.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Integrated comparison", statement: "Weaving both texts into each point shows analytical skill." },
                  { kind: "skill", name: "Exam technique", statement: "Planning and checking maximise marks." },
                ],
                steps: [
                  { part: "a", reasoning: "Language: 'competent' vs '10/10' — measured vs enthusiastic.", marks: 1, markCode: "AO3" },
                  { part: "a", reasoning: "Structure: balanced verdict vs personal pledge.", marks: 1, markCode: "AO3" },
                  { part: "a", reasoning: "Purpose/audience: informs skeptics vs recommends to enthusiasts.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "'Whereas the critic's tone is measured and evaluative, the blogger's is breathless and enthusiastic.'", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Uses 'whereas' to relate the two tones.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Quotes or references both texts with analysis.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Integrated paragraphs show the relationship between texts, which is what comparison assesses.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Separate analyses describe each text but miss the analytical skill of relating them.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Check both texts are referenced in each paragraph and comparative connectives are used.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Verify the conclusion judges effectiveness and that quotations are accurate.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(3, "b"),
                  ...bands(2, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) Language, structure, purpose/audience. (b) Integrated sentence with 'whereas' and analysis. (c) Integration shows relationship. (d) Check both texts appear, connectives used, judgement supported.",
                commonErrors: ["Planning separate analyses.", "Forgetting to check both texts are referenced."],
              },
            },
          ],
        },
        {
          id: "el10-u6-exam-technique",
          title: "Writing under timed conditions",
          skill: "Manage time, cover assessment objectives and self-check comparison answers in exams.",
          sections: [
            {
              heading: "Time management",
              body: "For a 10-mark comparison, spend about **5 minutes planning** and **15-20 minutes writing**. Do not spend equal time on both texts — integrated paragraphs cover both simultaneously. If time runs short, ensure each paragraph still references both texts rather than completing only Text A thoroughly.",
            },
            {
              heading: "Covering the assessment objectives",
              body: "Strong answers cover **AO1** (understanding the texts), **AO2** (analysing methods), **AO3** (comparing) and **AO4** (evaluating). Ensure at least one paragraph analyses methods, one compares, and the conclusion evaluates. Missing AO3 (comparison) or AO4 (evaluation) caps the mark.",
            },
            {
              heading: "The final check",
              body: "In the last 2 minutes: (1) does every paragraph mention BOTH texts? (2) are comparative connectives used? (3) is there a clear judgement in the conclusion? (4) are quotations accurate? Fix any 'Text A / Text B' separations by adding 'whereas' links.",
            },
          ],
          keyFormulas: [
            { name: "Time split", statement: "5 min plan + 15-20 min write for a 10-mark comparison." },
            { name: "AO coverage", statement: "AO1 understanding, AO2 methods, AO3 comparison, AO4 evaluation." },
            { name: "Final check", statement: "Both texts in each paragraph, connectives, judgement, accurate quotes." },
          ],
          workedExample: {
            problem: "A student has 20 minutes left and has written two paragraphs only about Text A. What should they do?",
            solution: "Immediately stop expanding Text A and write integrated paragraphs: add Text B evidence to existing points using 'whereas', then write one new paragraph covering both texts on structure. Ensure the conclusion judges both. This recovers AO3 marks even if the answer is shorter.",
          },
          questions: [
            {
              id: "el10-u6-exam-technique-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "How much time should you spend planning a 10-mark comparison question?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "1 minute" },
                  { id: "b", text: "About 5 minutes" },
                  { id: "c", text: "10 minutes" },
                  { id: "d", text: "No planning needed" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Time management", statement: "Planning time prevents poor structure." }],
                steps: [{ reasoning: "5 minutes of planning ensures coverage and integrated structure.", marks: 1, markCode: "AO3" }],
                finalAnswer: "**(b)** About 5 minutes.",
                commonErrors: ["Skipping planning or spending too long on it."],
              },
            },
            {
              id: "el10-u6-exam-technique-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain why integrated paragraphs are more time-efficient than separate analyses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Integrated paragraphs", statement: "Both texts covered simultaneously." }],
                steps: [
                  { reasoning: "One integrated paragraph covers both texts at once, halving the writing needed.", marks: 1, markCode: "AO3" },
                  { reasoning: "Separate analyses require double the paragraphs for the same coverage.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Integrated paragraphs cover both texts in one, saving time and improving marks.",
                commonErrors: ["Thinking separate analyses are clearer rather than slower."],
              },
            },
            {
              id: "el10-u6-exam-technique-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "List three things to check in the final two minutes of a comparison answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Self-check", statement: "Final checks catch structural and coverage errors." }],
                steps: [
                  { reasoning: "Every paragraph references BOTH texts.", marks: 1, markCode: "AO3" },
                  { reasoning: "Comparative connectives ('whereas', 'similarly') are used.", marks: 1, markCode: "AO3" },
                  { reasoning: "The conclusion contains a clear judgement/evaluation.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Both texts referenced, connectives used, judgement present.",
                commonErrors: ["Checking spelling but not structural coverage."],
              },
            },
            {
              id: "el10-u6-exam-technique-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A student's comparison answer analyses Text A thoroughly but barely mentions Text B. Explain the mark impact and how to fix it.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "AO coverage", statement: "Missing comparison caps the mark." },
                  { kind: "technique", name: "Integrated comparison", statement: "Both texts must appear in each point." },
                ],
                steps: [
                  { reasoning: "AO3 (comparison) is barely evidenced — the answer describes rather than compares.", marks: 1, markCode: "AO3" },
                  { reasoning: "This caps the mark regardless of how well Text A is analysed.", marks: 1, markCode: "AO3" },
                  { reasoning: "Fix: add Text B evidence to each existing paragraph using 'whereas'.", marks: 1, markCode: "AO3" },
                  { reasoning: "Write one new integrated paragraph covering both texts on structure or purpose.", marks: 1, markCode: "AO3" },
                  { reasoning: "Ensure the conclusion judges both texts, not just Text A.", marks: 1, markCode: "AO4" },
                ],
                levels: bands(5),
                finalAnswer: "Missing Text B caps AO3 marks; fix by adding 'whereas' links and one integrated paragraph on both texts.",
                commonErrors: ["Expanding Text A further instead of integrating Text B."],
              },
            },
            {
              id: "el10-u6-exam-technique-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain how to ensure all assessment objectives (AO1-AO4) are covered in a comparison answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "AO coverage", statement: "Each assessment objective needs evidence." },
                  { kind: "technique", name: "Balanced coverage", statement: "Plan paragraphs to hit each AO." },
                ],
                steps: [
                  { reasoning: "AO1 (understanding): show accurate knowledge of both texts' content.", marks: 1, markCode: "AO1" },
                  { reasoning: "AO2 (methods): analyse language, structure and form in both texts.", marks: 1, markCode: "AO2" },
                  { reasoning: "AO3 (comparison): use integrated paragraphs with 'whereas' throughout.", marks: 1, markCode: "AO3" },
                  { reasoning: "AO4 (evaluation): conclude with a justified judgement on effectiveness.", marks: 1, markCode: "AO4" },
                  { reasoning: "Plan one paragraph per AO area to ensure none is missed.", marks: 1, markCode: "AO3" },
                  { reasoning: "The final check verifies each AO has clear evidence.", marks: 1, markCode: "AO3" },
                ],
                levels: bands(6),
                finalAnswer: "Cover AO1 understanding, AO2 methods, AO3 comparison and AO4 evaluation; plan and check each.",
                commonErrors: ["Covering AO2 well but forgetting AO3 comparison or AO4 evaluation."],
              },
            },
            {
              id: "el10-u6-exam-technique-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "You have 20 minutes to write a comparison of the two café reviews. Answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State how you would spend the 5-minute planning time.", marks: 3 },
                { label: "b", prompt: "Describe the structure of your answer (how many paragraphs, what each covers).", marks: 3 },
                { label: "c", prompt: "Explain how you would ensure both texts are covered in every paragraph.", marks: 2 },
                { label: "d", prompt: "Describe your final two-minute check.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Exam technique", statement: "Planning, structure and checking maximise marks." },
                  { kind: "technique", name: "Integrated comparison", statement: "Both texts in each point." },
                ],
                steps: [
                  { part: "a", reasoning: "Identify 3-4 comparison points (language, structure, purpose).", marks: 1, markCode: "AO3" },
                  { part: "a", reasoning: "Note one quotation from each text per point.", marks: 1, markCode: "AO3" },
                  { part: "a", reasoning: "Decide an overall judgement for the conclusion.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "3-4 integrated paragraphs: language, structure, purpose/audience.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Each paragraph: one point + both texts' evidence + explanation.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Conclusion: justified judgement on effectiveness.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Use 'whereas', 'similarly', 'both' to weave both texts into each point.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Check each paragraph has a quotation or reference from BOTH texts.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Verify both texts appear in every paragraph and connectives are used.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Confirm conclusion judges effectiveness and quotations are accurate.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(3, "b"),
                  ...bands(2, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) Plan points, quotations, judgement. (b) 3-4 integrated paragraphs + conclusion. (c) Use 'whereas' and check both texts appear. (d) Check coverage, connectives, judgement, quotes.",
                commonErrors: ["Planning separate analyses.", "Not checking both texts appear in each paragraph."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u6-exam-technique-notes",
      title: "Comparison exam technique — notes",
      summary: "Plan 3-4 integrated points; use 'whereas' to weave both texts; cover AO1-AO4; check both texts appear in every paragraph.",
      sections: [
        { heading: "Key idea", body: "Integrated comparison — one point about both texts — scores higher than separate analyses." },
        { heading: "Planning", body: "5 minutes: 3-4 points, quotations from both texts, overall judgement." },
        { heading: "Checking", body: "Verify both texts in each paragraph, connectives used, conclusion judges, quotes accurate." },
      ],
    },
  },
];
