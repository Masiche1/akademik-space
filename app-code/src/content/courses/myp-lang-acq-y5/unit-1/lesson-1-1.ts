import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mla5-u1-lesson-1-1",
  code: "1-1",
  title: "Following Academic Lectures and Podcasts",
  goal: "I CAN follow academic-style listening, distinguish claims from evidence, track the speaker's stance and infer meaning that is not stated directly.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Lecture", definition: "A structured spoken presentation that explains, analyses or argues a topic for an audience." },
    { term: "Hedging", definition: "Language that makes a claim cautious or less absolute, such as 'suggests', 'tends to' or 'may'." },
    { term: "Stance", definition: "The speaker's attitude or position towards the topic." },
    { term: "Evidence", definition: "Facts, data or examples used to support a claim." },
    { term: "Nuance", definition: "A subtle difference in meaning, tone or position." },
  ],
  concepts: [
    {
      id: "mla5-u1-academic-listening",
      title: "Academic listening signals",
      skill: "Identify structure, signposting and evaluative language in lectures and podcasts.",
      lesson: {
        sections: [
          {
            heading: "Academic listening structure",
            body: "Academic listening is not only about words; it is about organisation. Speakers use **signposts** such as 'The key issue is...', 'This raises a question...', 'Having considered X, we can now examine Y' and 'In conclusion'. These phrases reveal the structure: introduction, development, qualification and conclusion.",
          },
          {
            heading: "Claims and evidence",
            body: "An academic speaker usually separates a **claim** from its **support**. Listen for verbs such as 'argue', 'claim', 'demonstrate', 'indicate', 'suggest' and 'reveal'. Then listen for the evidence: statistics, examples, quotations or research findings. The strongest answers identify both the claim and what supports it.",
          },
          {
            heading: "Hedging and evaluation",
            body: "Academic English often avoids absolute statements. **Hedging** such as 'it appears that', 'there is some evidence that', 'this may indicate' and 'the results are consistent with' shows caution. Evaluation words such as 'significant', 'problematic', 'limited' and 'persuasive' reveal the speaker's judgement rather than neutral fact.",
          },
        ],
        keyFormulas: [
          { name: "Academic signposts", statement: "The key issue / This raises a question / Having considered / In conclusion" },
          { name: "Hedging devices", statement: "suggests / may indicate / appears to / is consistent with / tends to" },
        ],
        workedExample: {
          problem: "Speaker: 'The evidence suggests that sleep affects memory, although the effect may vary between individuals.' What is the claim and what shows caution?",
          solution: "Claim: sleep affects memory. Caution: 'suggests', 'may vary' and 'although' qualify the claim.",
        },
      },
      questions: [
        {
          id: "mla5-u1-academic-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In academic listening, what is the main purpose of a signpost such as 'The key issue is...'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To introduce a personal anecdote" },
              { id: "b", text: "To end the lecture politely" },
              { id: "c", text: "To signal an important point or the structure of the talk" },
              { id: "d", text: "To ask the audience a rhetorical question" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Signposting", statement: "Language that indicates the organisation or importance of a point." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — signposts reveal structure and emphasis.", working: "structure", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To signal an important point or the structure of the talk",
            commonErrors: ["Treating signposts as decoration rather than structural guidance."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla5-u1-academic-listening-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Podcast Excerpt",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Researcher: 'The study indicates that bilingual students often show stronger attention control. However, the researchers caution that the sample size was small and the effect was measured over only six months. Therefore, the findings should be interpreted as promising rather than conclusive.'",
          },
          stem: "Identify the claim, the evidence and the limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Claim-evidence-limitation tracking", statement: "Separate the main claim, its support and qualifications." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — claim: bilingual students may show stronger attention control.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — evidence: study findings on attention control.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — limitation: small sample and short six-month period.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Claim: possible stronger attention control; evidence: study findings; limitation: small sample and short duration.",
            commonErrors: ["Presenting the claim as certain despite the qualification."],
            examinerNote: "All three elements are required.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Lecture Snippet",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Lecturer: 'Having considered the economic argument, we now turn to its social costs. Some commentators claim that tourism always benefits local communities. Yet the evidence is more complicated. Where visitor numbers rise sharply, housing prices may increase, while cultural traditions can become staged for an audience. In other words, the impact depends on how tourism is managed.'",
          },
          stem: "Explain how the lecturer structures the argument and evaluates the simplistic view that tourism always benefits communities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument structure and evaluation", statement: "Track signposting, contrast and evaluative judgement." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Having considered... now turn' signals movement from economics to social costs.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'Yet the evidence is more complicated' introduces qualification.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — examples of costs: housing prices and staged culture.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — conclusion is conditional: impact depends on management.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The lecturer contrasts a simplistic claim with a qualified view: tourism can create costs, and its impact depends on management.",
            commonErrors: ["Ignoring the conditional conclusion and saying tourism is simply harmful."],
            examinerNote: "Must capture both the structure and the qualified judgement.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Panel Discussion: Artificial Intelligence in Education",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Host: 'Our question is whether AI should be used in assessment. Dr Lane, you are cautious — why?'\nDr Lane: 'AI can mark routine answers efficiently, but it may struggle with creative or culturally situated responses. It also raises concerns about privacy and bias.'\nMs Okafor: 'I share the caution, yet I would argue that AI could reduce teachers' workload if used selectively for low-stakes tasks. The key is oversight, not replacement.'\nHost: 'So both speakers seem to support limited use rather than full automation.'",
          },
          stem: "Read the discussion and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the discussion question.", marks: 1 },
            { label: "b", prompt: "Give two reasons Dr Lane is cautious about AI in assessment.", marks: 2 },
            { label: "c", prompt: "What qualified position does Ms Okafor take?", marks: 2 },
            { label: "d", prompt: "Write a 60-80 word synthesis of the speakers' shared and differing views.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis of academic discussion", statement: "Identify shared positions, differences and qualifications." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — whether AI should be used in assessment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — reason 1: difficulty with creative or culturally situated responses.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — reason 2: privacy and bias concerns.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — supports selective low-stakes use with teacher oversight.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — rejects full automation or replacement of teachers.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion B: Reading — synthesis accurately captures shared caution and selective-use difference.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — academic register and cohesive language.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — clear, accurate and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) AI in assessment (b) creative/cultural limits; privacy/bias (c) selective low-stakes use with oversight (d) accurate synthesis.",
            commonErrors: ["Saying both speakers fully reject AI."],
            examinerNote: "(d) must preserve the qualified, conditional positions.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression is an example of hedging in academic English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The evidence suggests a possible link..." },
              { id: "b", text: "Everyone agrees that..." },
              { id: "c", text: "It is certain that..." },
              { id: "d", text: "There is no doubt that..." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hedging", statement: "Language that makes a claim cautious or less absolute." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — hedging qualifies claims rather than stating them absolutely.", working: "suggests/possible", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The evidence suggests a possible link...",
            commonErrors: ["Choosing absolute language such as 'no doubt' or 'everyone agrees'."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla5-u1-academic-listening-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A lecturer says, 'This raises an important question.' What does this signpost do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It summarises the evidence so far" },
              { id: "b", text: "It ends the talk politely" },
              { id: "c", text: "It introduces a personal anecdote" },
              { id: "d", text: "It signals that a new issue or question will be developed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Signposting", statement: "Language that indicates the organisation or direction of a talk." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'raises a question' introduces a new line of argument.", working: "new issue", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It signals that a new issue or question will be developed",
            commonErrors: ["Confusing an introductory signpost with a concluding one."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla5-u1-academic-listening-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Interview Excerpt",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Interviewer: 'Why do you think reading scores have improved?' Guest: 'The report claims that the new library programme caused the rise. The claim rests on test data from forty schools, although the researchers admit the programme ran alongside other changes.'",
          },
          stem: "Which part of the extract provides evidence for the claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The word 'claims'" },
              { id: "b", text: "The phrase 'reading scores'" },
              { id: "c", text: "The interviewer's question" },
              { id: "d", text: "Test data from forty schools" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Claim-evidence tracking", statement: "Evidence is the data, example or finding that supports a claim." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'test data from forty schools' is the support for the claim.", working: "test data", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Test data from forty schools",
            commonErrors: ["Choosing the claim itself rather than its support."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla5-u1-academic-listening-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Researcher Comment",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Researcher: 'The findings may indicate a trend, although the sample was small and the results might not apply to older students. The team suggests that further study is needed.'",
          },
          stem: "How many cautious or qualifying expressions appear in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Qualifying expressions", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hedge counting", statement: "Hedges such as 'may', 'might', 'although' and 'suggests' qualify claims." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — count 'may indicate', 'although', 'might not' and 'suggests'.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Missing 'suggests' or counting 'the' as a qualifier."],
            examinerNote: "Accept 4.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q9",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speaker Comment",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Speaker: 'Urban gardens can improve food security in cities. In our study, plots in three districts produced enough vegetables for two hundred families. Residents also reported stronger neighbourhood ties, which may reduce isolation.'",
          },
          stem: "Identify the main claim and give two pieces of supporting evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Claim-evidence separation", statement: "Separate what is asserted from what is offered in support." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — claim: urban gardens can improve food security.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — evidence 1: plots produced enough vegetables for two hundred families.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — evidence 2: residents reported stronger neighbourhood ties.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Claim: urban gardens can improve food security; evidence: produce for 200 families and reported stronger neighbourhood ties.",
            commonErrors: ["Listing effects as claims without identifying the central assertion."],
            examinerNote: "Claim plus two distinct pieces of evidence.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Commentator Response",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Commentator: 'The new policy has been praised for increasing enrolment. Yet enrolment figures alone do not reveal whether students are learning more. Until achievement data are available, the success of the policy remains uncertain.'",
          },
          stem: "Which statement best captures the commentator's stance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Achievement data are irrelevant to the debate" },
              { id: "b", text: "Enrolment alone is insufficient evidence; success is uncertain" },
              { id: "c", text: "The policy should be cancelled immediately" },
              { id: "d", text: "The policy has clearly succeeded" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stance inference", statement: "Qualified language and 'yet'/'until' mark a cautious position." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Yet' and 'until achievement data' show the commentator withholds judgement.", working: "uncertain", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Enrolment alone is insufficient evidence; success is uncertain",
            commonErrors: ["Reading the praise for enrolment as the commentator's own view."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla5-u1-academic-listening-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Lecture Snippet",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Lecturer: 'Critics argue that exams measure memory rather than understanding. This view has some force, particularly for creative subjects. However, well-designed assessments can test application and reasoning, not just recall. The real question is not whether to test, but how.'",
          },
          stem: "Explain how the lecturer acknowledges and responds to the critics, and what position is finally adopted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument tracking", statement: "Identify concession, counter-argument and final position." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — acknowledges the critics' view 'has some force'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — qualifies the concession: particularly for creative subjects.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — counter-argument: well-designed assessments can test reasoning, not only recall.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — final position: the issue is how to assess, not whether to assess.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The lecturer concedes partial validity, then argues assessment design matters more than the existence of tests.",
            commonErrors: ["Missing the final reframing ('not whether, but how')."],
            examinerNote: "Must capture concession, counter and reframed conclusion.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Panel Introduction",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Host: 'We have three panellists today: Dr Rao on economics, Ms Silva on education and Mr Chen on technology.' Later, Dr Rao speaks first, Ms Silva responds, and Mr Chen offers a final comment.",
          },
          stem: "How many panellists are named, and how many times does Ms Silva speak?",
          response: {
            type: "numeric",
            parts: [
              { label: "Named panellists", answer: 3 },
              { label: "Speeches by Ms Silva", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail tracking", statement: "Count participants and turns accurately from the extract." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Dr Rao, Ms Silva and Mr Chen are named: 3.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Ms Silva 'responds' once.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 panellists; Ms Silva speaks once.",
            commonErrors: ["Counting the host as a panellist."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Lecture Sequence",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Speaker: 'First, we examine the cause. Second, we consider the effect. Finally, we evaluate the solution.'",
          },
          stem: "How many structural signposts appear in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Signposts", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Signposting", statement: "Words that mark the order or structure of a talk." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'First', 'Second' and 'Finally' are the signposts.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'we' or 'the' instead of sequence markers."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which signpost would best introduce a contrasting point in a lecture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To summarise" },
              { id: "b", text: "In conclusion" },
              { id: "c", text: "For example" },
              { id: "d", text: "Having considered the first argument, we now turn to a different view" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Signpost selection", statement: "Contrastive signposts mark a shift to an opposing or different point." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'now turn to a different view' signals contrast.", working: "contrast", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Having considered the first argument, we now turn to a different view",
            commonErrors: ["Choosing 'In conclusion', which signals ending rather than contrast."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla5-u1-academic-listening-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Panel Discussion: School Phone Bans",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Host: 'Should schools ban mobile phones? Teacher A: I support a ban because phones distract students and can enable bullying. Teacher B: I accept the distraction point, yet phones also support access to information and safety contact. A blanket ban may remove useful tools. Headteacher: Perhaps the answer lies in managed use rather than prohibition.'",
          },
          stem: "Read the discussion and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the discussion question.", marks: 1 },
            { label: "b", prompt: "Give two reasons Teacher A supports a ban.", marks: 2 },
            { label: "c", prompt: "What qualified position does Teacher B take?", marks: 2 },
            { label: "d", prompt: "Write a 60-80 word synthesis of the speakers' views.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis of academic discussion", statement: "Identify shared positions, differences and qualifications." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — whether schools should ban mobile phones.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — reason 1: phones distract students.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — reason 2: phones can enable bullying.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — accepts distraction but cites information access and safety contact.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — rejects a blanket ban; warns useful tools may be lost.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion B: Reading — synthesis captures support for ban, qualified opposition and managed-use compromise.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — academic register and cohesive language.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — clear, accurate and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) phone bans in schools (b) distraction; bullying (c) accepts distraction but warns against blanket ban (d) accurate synthesis.",
            commonErrors: ["Saying all speakers fully support or fully oppose a ban."],
            examinerNote: "(d) must preserve the qualified positions.",
          },
        },
        {
          id: "mla5-u1-academic-listening-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Researcher Comment",
            author: "Written for Akademik Space",
            source: "Academic listening practice",
            text: "Researcher: 'The trial produced encouraging results, but the follow-up period was short. It may be too early to draw firm conclusions about long-term effects.'",
          },
          stem: "Why does the researcher say 'it may be too early to draw firm conclusions'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To emphasise how strong the results were" },
              { id: "b", text: "To announce that the trial had failed" },
              { id: "c", text: "To criticise the research team personally" },
              { id: "d", text: "To show uncertainty because the follow-up period was short" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hedged conclusion", statement: "Hedged language signals caution about what the evidence can support." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'too early' plus 'short follow-up' signals limited evidence.", working: "uncertainty", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** To show uncertainty because the follow-up period was short",
            commonErrors: ["Reading hedged language as negative judgement of the trial."],
            examinerNote: "A1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u1-speaker-stance",
      title: "Inferring speaker stance and implied meaning",
      skill: "Read between the lines of academic and media texts to infer attitude, purpose and unstated assumptions.",
      lesson: {
        sections: [
          {
            heading: "Stated versus implied meaning",
            body: "Speakers and writers often imply more than they state. A phrase such as 'admittedly expensive' signals criticism before praise; 'while this policy has benefits' signals that drawbacks will follow. In academic texts, look for **contrastive framing**: 'Although X is true, Y remains decisive.'",
          },
          {
            heading: "Attitude through evaluation",
            body: "Evaluation is often carried by adjectives and verbs rather than explicit opinion. Words such as 'alarming', 'understated', 'compelling', 'questionable' and 'overlooked' reveal judgement. Ask: Does the writer treat the topic as a problem, an opportunity, a paradox or a moral issue? That classification reveals stance.",
          },
          {
            heading: "Purpose and audience",
            body: "Academic texts may aim to **inform**, **persuade**, **analyse** or **critique**. Purpose can be inferred from organisation: a text that presents evidence then draws a cautious conclusion is analytical; a text that uses repeated emotive examples and a direct call to action is persuasive. Audience affects formality, examples and assumed knowledge.",
          },
        ],
        keyFormulas: [
          { name: "Stance signals", statement: "Although / admittedly / while / remains / questionable / overlooked" },
          { name: "Purpose cues", statement: "Evidence + cautious conclusion = analysis; emotive examples + call to action = persuasion" },
        ],
        workedExample: {
          problem: "Writer says, 'The proposal is ambitious, yet its assumptions remain untested.' What stance is implied?",
          solution: "A cautious or sceptical stance: the writer acknowledges ambition but questions the evidence.",
        },
      },
      questions: [
        {
          id: "mla5-u1-speaker-stance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'implied meaning' refer to in academic texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact repeated several times" },
              { id: "b", text: "A formal definition" },
              { id: "c", text: "An idea suggested indirectly rather than stated explicitly" },
              { id: "d", text: "A quotation from another author" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Implied meaning", statement: "Meaning suggested indirectly through framing, tone or word choice." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — implied = suggested indirectly.", working: "indirect", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** An idea suggested indirectly rather than stated explicitly",
            commonErrors: ["Confusing implied meaning with a direct statement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Editorial Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "The report describes the initiative as 'innovative' but immediately notes that its benefits remain 'largely unproven'. It then highlights two schools where results were 'modest at best'. The repeated qualifiers suggest the writer is not persuaded by the official claims.",
          },
          stem: "Identify two language features that reveal the writer's sceptical stance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stance inference", statement: "Qualifying language reveals a cautious or sceptical attitude." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'largely unproven' questions the evidence.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'modest at best' minimises the positive result.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'repeated qualifiers' shows deliberate scepticism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Largely unproven', 'modest at best' and repeated qualifiers reveal scepticism.",
            commonErrors: ["Missing that quoted official language is framed critically."],
            examinerNote: "Two features must be supported by the text.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "Although remote work has widened access to employment for some communities, it has also blurred the boundary between labour and rest. Employers may gain flexibility, yet workers can experience isolation and an erosion of collective bargaining. A balanced policy would need to protect both opportunity and wellbeing.",
          },
          stem: "Analyse how the writer balances advantages and disadvantages and what stance the conclusion implies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced argument analysis", statement: "Identify concessions, contrasts and the implied recommendation." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Although' concedes an advantage: wider access to employment.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — disadvantages: blurred boundaries, isolation and weakened bargaining.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'yet' marks contrast between employer gain and worker cost.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — conclusion implies a cautious policy stance protecting opportunity and wellbeing.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The writer gives a qualified critique: remote work has benefits but also costs, so policy must balance both.",
            commonErrors: ["Selecting only one side of the argument."],
            examinerNote: "Must identify both sides and the conditional conclusion.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Opinion Article: Screen Time and Adolescents",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "Parents are often told that limiting screen time will solve adolescent anxiety. The evidence, however, is less straightforward. Some studies link heavy use to poorer sleep, while others emphasise the quality of online interaction rather than duration. What seems clearer is that context matters: passive scrolling may be more harmful than collaborative video calls. A sensible response is therefore neither panic nor dismissal, but informed, family-specific boundaries.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the common claim about screen time and anxiety?", marks: 1 },
            { label: "b", prompt: "Give two ways the evidence is described as complicated.", marks: 2 },
            { label: "c", prompt: "What distinction does the writer make between types of screen use?", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word critical summary in your own words.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical summary", statement: "Extract claim, complication and recommendation; summarise accurately." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — limiting screen time will solve adolescent anxiety.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — complication 1: studies differ on duration versus quality of interaction.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — complication 2: evidence is 'less straightforward' and context-dependent.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — passive scrolling may be more harmful than collaborative video calls.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — distinction is between passive and interactive use.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — summary captures claim, evidence, distinction and recommendation.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — own words, academic register and cohesion.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate, coherent and within range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) screen limits solve anxiety (b) duration vs quality; context matters (c) passive vs interactive use (d) accurate critical summary.",
            commonErrors: ["Reproducing long phrases instead of summarising."],
            examinerNote: "(d) should be a summary, not a list of extracted points.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the phrase 'admittedly expensive but effective', what does 'admittedly' signal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complaint about the product" },
              { id: "b", text: "Complete agreement with the listener" },
              { id: "c", text: "A concession before a contrasting positive point" },
              { id: "d", text: "A factual definition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Concessive framing", statement: "Words like 'admittedly' concede a point before introducing contrast." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'admittedly' accepts a cost before 'but effective' adds the benefit.", working: "concession", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A concession before a contrasting positive point",
            commonErrors: ["Reading 'admittedly' as a complaint rather than a concession."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An evaluative adjective such as 'questionable' in an academic text usually signals...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A direct quotation" },
              { id: "b", text: "The writer's judgement or doubt" },
              { id: "c", text: "A statistical finding" },
              { id: "d", text: "Neutral description" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluation", statement: "Words that express judgement rather than neutral fact." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'questionable' expresses doubt, revealing stance.", working: "judgement", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The writer's judgement or doubt",
            commonErrors: ["Treating evaluative adjectives as neutral facts."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Editorial Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "The policy was introduced with considerable publicity. Its benefits, however, remain largely theoretical, and few schools have reported measurable change.",
          },
          stem: "What is the writer's implied attitude toward the policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sceptical doubt about its effectiveness" },
              { id: "b", text: "Enthusiastic support" },
              { id: "c", text: "Confusion about the topic" },
              { id: "d", text: "Complete indifference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stance inference", statement: "Qualifiers such as 'largely theoretical' reveal doubt." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'however' and 'largely theoretical' contrast publicity with unproven benefits.", working: "sceptical", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sceptical doubt about its effectiveness",
            commonErrors: ["Missing the contrast introduced by 'however'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Review Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "The proposal's assumptions are 'questionable', its costs are 'overlooked' and the evidence is 'limited'; the plan is 'problematic'.",
          },
          stem: "How many quoted evaluative adjectives appear in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Evaluative adjectives", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation identification", statement: "Quoted adjectives such as 'questionable' carry the writer's judgement." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — count 'questionable', 'overlooked', 'limited' and 'problematic'.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Missing 'limited' or counting 'evidence'."],
            examinerNote: "Accept 4.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q9",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "The report describes the scheme as 'promising', yet immediately adds that its long-term impact is 'unproven'. It then describes two pilot schools where results were 'modest'.",
          },
          stem: "Infer the writer's stance and identify two language features that support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stance inference", statement: "Cautious qualifiers reveal a qualified or sceptical attitude." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — stance: cautious or sceptical about the scheme.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — feature 1: 'promising' is immediately qualified by 'unproven'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — feature 2: results described as only 'modest'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Cautious/sceptical stance; supported by 'unproven' and 'modest'.",
            commonErrors: ["Accepting 'promising' as the writer's own judgement."],
            examinerNote: "Stance plus two textual features required.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "The study found that students who read daily scored higher on vocabulary tests. Reading widely is therefore essential for academic success, and schools that neglect it are failing their students.",
          },
          stem: "What is the likely purpose of this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To persuade readers that schools should prioritise reading" },
              { id: "b", text: "To analyse competing explanations" },
              { id: "c", text: "To inform neutrally about a study" },
              { id: "d", text: "To describe a personal experience" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose inference", statement: "Emotive claims and direct judgement signal persuasive purpose." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'therefore essential' and 'failing their students' argue a position.", working: "persuasion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To persuade readers that schools should prioritise reading",
            commonErrors: ["Confusing a persuasive conclusion with neutral reporting."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "Critics claim that social media causes anxiety in teenagers. The evidence is less direct than this suggests: some studies link heavy use to poorer sleep, while others emphasise the quality of interaction rather than duration. A careful response would distinguish between different kinds of use rather than issuing blanket warnings.",
          },
          stem: "Explain how the writer signals caution and what response the writer recommends.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cautious argument analysis", statement: "Hedging and distinction-making signal a qualified stance." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'less direct than this suggests' qualifies the critics' claim.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — presents competing findings: sleep versus quality of interaction.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'rather than' contrasts careful response with blanket warnings.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — recommended response: distinguish types of use.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The writer urges caution: evidence is mixed, so responses should distinguish kinds of use rather than generalise.",
            commonErrors: ["Saying the writer agrees that social media causes anxiety."],
            examinerNote: "Must capture both the caution and the recommended distinction.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "Although remote work widened access to employment, it blurred the boundary between labour and rest. Yet employers gained flexibility, while workers faced isolation. Nevertheless, a balanced policy is needed.",
          },
          stem: "How many contrastive or concessive markers appear, and how many sentences contain a concession or contrast?",
          response: {
            type: "numeric",
            parts: [
              { label: "Contrastive markers", answer: 4 },
              { label: "Sentences with contrast or concession", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marker identification", statement: "Although, yet, while and nevertheless signal contrast or concession." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — markers: 'Although', 'Yet', 'while', 'Nevertheless' = 4.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — all three sentences contain a contrast or concession.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 markers; 3 sentences.",
            commonErrors: ["Counting 'and' or 'the' as markers."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Short Review",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "The cafe is 'charming' but 'wildly overpriced'; the reviewer adds that the staff were 'unfailingly kind'.",
          },
          stem: "How many evaluative adjectives are used in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Evaluative adjectives", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluation", statement: "Adjectives that express approval or criticism." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'charming', 'wildly overpriced' and 'unfailingly kind' = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'the' or 'but' instead of adjectives."],
            examinerNote: "Accept 3; 'overpriced' counts as one adjective.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase most strongly signals the writer's scepticism about a claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is clear that" },
              { id: "b", text: "Undoubtedly" },
              { id: "c", text: "Everyone knows that" },
              { id: "d", text: "The evidence remains contested" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scepticism signals", statement: "Phrases about contested or unproven evidence signal doubt." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'remains contested' expresses unresolved doubt.", working: "contested", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The evidence remains contested",
            commonErrors: ["Choosing confident phrases such as 'undoubtedly'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Opinion Article: Homework Policy",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "Many parents believe that more homework always means more learning. The evidence, however, is less clear-cut. Some studies link moderate homework to better retention, while others find little effect beyond a certain point and warn of stress. What seems more reliable is that quality matters more than quantity: purposeful tasks support independent learning, whereas repetitive worksheets may reduce motivation. A sensible policy would therefore set limits rather than simply increase workload.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the common belief about homework?", marks: 1 },
            { label: "b", prompt: "Give two ways the evidence is described as complicated.", marks: 2 },
            { label: "c", prompt: "What distinction does the writer make between types of homework?", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word critical summary in your own words.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical summary", statement: "Extract claim, complication and recommendation; summarise accurately." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — more homework always means more learning.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — complication 1: studies differ on whether homework helps beyond a point.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — complication 2: others warn of stress and reduced motivation.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — purposeful tasks support learning; repetitive worksheets may reduce motivation.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — distinction is quality versus quantity.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — summary captures belief, mixed evidence, quality distinction and recommendation.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — own words, academic register and cohesion.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate, coherent and within range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) more homework = more learning (b) mixed findings; stress risk (c) quality vs quantity (d) accurate critical summary.",
            commonErrors: ["Reproducing long phrases instead of summarising."],
            examinerNote: "(d) should be a summary, not a list of extracted points.",
          },
        },
        {
          id: "mla5-u1-speaker-stance-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Satirical Review",
            author: "Written for Akademik Space",
            source: "Critical reading practice",
            text: "After months of delays and three cancelled launches, the committee finally announced the project. 'A masterstroke of timing,' the editorial observed.",
          },
          stem: "What does the phrase 'a masterstroke of timing' imply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confusion about the announcement" },
              { id: "b", text: "Irony criticising the long delays" },
              { id: "c", text: "A neutral description of scheduling" },
              { id: "d", text: "Genuine praise for the committee" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "Praise used in a context of failure signals criticism." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'masterstroke' after 'months of delays' is ironic criticism.", working: "irony", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Irony criticising the long delays",
            commonErrors: ["Reading 'masterstroke' literally as praise."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
  ],
};
