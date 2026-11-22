import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const SPEECH: TextExtract = {
  title: "Speech to the School Assembly",
  author: "Written for Akademik Space",
  text: "Good morning, everyone. I want you to picture something. Picture a school where every corridor is silent, every locker is empty and every classroom has gone dark. Now ask yourself: how did we get here? We got here because we stopped caring. We stopped caring about our library, which is losing its books. We stopped caring about our playground, where the paint peels and the benches crumble. And we stopped caring about each other.\n\nBut it does not have to be this way. We are the students of this school, and we have the power to change it. Imagine a library full of new stories, a playground full of laughter, a school that is truly ours. This is not a dream; it is a choice, and it is a choice that we make today.\n\nSo I ask you to join me. Sign the petition. Give an hour of your time. Together, we will rebuild this school, and we will be proud of it.",
};

const OP_ED: TextExtract = {
  title: "Why Homework Should Be Optional",
  author: "Written for Akademik Space",
  text: "Every evening, millions of young people sit hunched over kitchen tables, grinding through pages of work they have already mastered. Is this really the best use of their precious time? I do not think so.\n\nResearch from several countries suggests that long hours of homework bring little extra benefit for children under fourteen. Meanwhile, sleep, exercise and family time, all of which genuinely improve learning, are squeezed out. Teachers, of course, mean well. They want every pupil to succeed. But good intentions do not make a good policy.\n\nI am not suggesting that we abolish homework altogether. Rather, let pupils choose it. Those who want extra practice can have it, and those who need a rest can take one. A little trust, after all, never harmed anyone.",
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis of rhetorical methods and their effects on the audience, with well-chosen quotations." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding of methods, with some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment, often naming techniques without effects." },
];

export const lesson22: Lesson = {
  id: "el8-u2-lesson-2-2",
  code: "2-2",
  title: "Persuasive Techniques",
  goal: "I CAN identify rhetorical devices in persuasive writing and explain how tone and viewpoint influence the reader.",
  standards: ["KS3 Reading", "KS3 AO2"],
  vocabulary: [
    { term: "Rhetorical question", definition: "A question asked for effect, not because an answer is expected." },
    { term: "Rule of three", definition: "Grouping three words, phrases or ideas for rhythm and emphasis." },
    { term: "Anaphora", definition: "Repeating the same word or phrase at the start of successive sentences or clauses." },
    { term: "Emotive language", definition: "Words chosen to stir the reader's feelings." },
    { term: "Tone", definition: "The writer's attitude to the subject or audience, such as urgent, humorous or calm." },
    { term: "Viewpoint", definition: "The position or perspective the writer takes on a subject." },
  ],
  concepts: [
    {
      id: "el8-u2-rhetorical-devices",
      title: "Rhetorical devices",
      skill: "Identify persuasive devices such as rhetorical questions, rule of three and repetition, and explain their effect.",
      lesson: {
        sections: [
          {
            heading: "The persuader's toolkit",
            body: "Speakers and columnists use **rhetorical devices** to move audiences: **rhetorical questions** make you think, the **rule of three** gives rhythm ('the library, the playground and each other'), **repetition** or **anaphora** drums an idea home ('We stopped caring about...'), and **direct address** ('I ask you to join me') involves the listener. **Emotive language** such as 'crumble' stirs feeling.",
          },
          {
            heading: "From device to effect",
            body: "Never stop at naming. Use the pattern: device, quotation, effect on the audience, link to purpose. 'The repetition of \"We stopped caring\" builds a rhythm that sounds like an accusation, making the audience feel responsible, which prepares them to act.'",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical question", statement: "A question that makes the audience think and implies its own answer." },
          { name: "Anaphora", statement: "Repeating words at the start of sentences for emphasis and rhythm." },
          { name: "Rule of three", statement: "A list of three, giving a sense of completeness and impact." },
          { name: "Call to action", statement: "A direct request that tells the audience what to do." },
        ],
        workedExample: {
          problem: "How does the speaker use language to persuade the audience in the first paragraph? (4 marks)",
          solution: "The speaker opens with the instruction 'Picture a school where every corridor is silent', a vivid image of an empty school that frightens the audience. She then asks 'how did we get here?', a rhetorical question which draws them in. The repeated structure 'We stopped caring' works as anaphora, creating an accusing rhythm that makes the listeners feel guilty, and the final short sentence, 'And we stopped caring about each other', raises the stakes from buildings to relationships.",
        },
      },
      questions: [
        {
          id: "el8-u2-rhetorical-devices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECH,
          stem: "'We stopped caring about our library... We stopped caring about our playground... And we stopped caring about each other.' What technique is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anaphora (repetition at the start of sentences)" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Anaphora", statement: "Repeating the opening words of successive sentences." }],
            steps: [{ reasoning: "Each sentence begins with 'We stopped caring', a repeated opening.", evidence: "We stopped caring about", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Anaphora. The repeated opening builds rhythm and emphasis.",
            commonErrors: ["Choosing alliteration, which is repetition of consonant sounds."],
          },
        },
        {
          id: "el8-u2-rhetorical-devices-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SPEECH,
          stem: "In the second paragraph the speaker lists 'a library full of new stories, a playground full of laughter, a school that is truly ours'. Explain the effect of this list.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rule of three", statement: "Three items sound complete, rhythmic and memorable." }],
            steps: [
              { reasoning: "The rule of three creates a balanced rhythm that sounds persuasive and memorable.", evidence: "a library full of new stories, a playground full of laughter, a school that is truly ours", marks: 1, markCode: "AO2" },
              { reasoning: "The positive images contrast with the earlier bleak picture and build to a climax of belonging, 'truly ours'.", evidence: "truly ours", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The rule of three builds a rhythm that is hard to forget. The images are positive, in contrast to the earlier picture, and the final item, 'a school that is truly ours', makes the audience feel ownership.",
            commonErrors: ["Writing 'it is a list' without saying why three items matter."],
          },
        },
        {
          id: "el8-u2-rhetorical-devices-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: SPEECH,
          stem: "How does the speaker try to make the audience feel responsible for the school's problems? Refer to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inclusive pronoun", statement: "'We' and 'us' share responsibility with the audience." },
              { kind: "technique", name: "Rhetorical question", statement: "Questions invite the listener to reflect on their own part." },
            ],
            steps: [
              { reasoning: "The rhetorical question forces the audience to examine their own part in the situation.", evidence: "how did we get here?", marks: 1, markCode: "AO2" },
              { reasoning: "The inclusive 'we' includes everybody, so no listener can feel blameless.", evidence: "We got here because we stopped caring", marks: 1, markCode: "AO2" },
              { reasoning: "Repetition of 'We stopped caring' sounds like an accusation.", evidence: "We stopped caring about our library", marks: 1, markCode: "AO2" },
              { reasoning: "The final item moves from objects to people, adding moral weight.", evidence: "And we stopped caring about each other", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The speaker asks 'how did we get here?' and answers 'because we stopped caring', using the inclusive 'we' so that everyone shares the blame. The repeated 'We stopped caring' sounds like an accusation, and ending on 'each other' adds moral weight.",
            commonErrors: ["Not linking the technique to the audience's feelings."],
          },
        },
        {
          id: "el8-u2-rhetorical-devices-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SPEECH,
          stem: "Answer all parts of this question about the speech.",
          parts: [
            { label: "a", prompt: "Write down two things the speaker asks the audience to do in the final paragraph.", marks: 2 },
            { label: "b", prompt: "What is the effect of the instruction 'Picture a school where every corridor is silent'?", marks: 2 },
            { label: "c", prompt: "Explain how the speaker uses the sentence 'This is not a dream; it is a choice' to persuade.", marks: 4 },
            { label: "d", prompt: "How does the speaker use rhetorical methods to persuade the audience to act?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Direct address", statement: "Commands and 'you' draw the audience in." },
              { kind: "technique", name: "Contrast", statement: "Opposing images or ideas sharpen a message." },
            ],
            steps: [
              { part: "a", reasoning: "Sign a petition.", evidence: "Sign the petition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Give time.", evidence: "Give an hour of your time", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The imperative engages the imagination and speaks directly to the audience.", evidence: "Picture a school", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The bleak list of silent, empty, dark places creates fear of what could happen.", evidence: "silent... empty... dark", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The contrast of 'dream' and 'choice' moves change from fantasy to something within their control.", evidence: "This is not a dream; it is a choice", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The semi-colon balances the two halves and the following sentence makes the choice immediate: 'today'.", evidence: "a choice that we make today", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Vivid opening imagery and a rhetorical question hook the audience.", evidence: "how did we get here?", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Anaphora and inclusive pronouns build shared responsibility.", evidence: "We stopped caring", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Short imperatives and a final promise give a clear call to action and a positive goal.", evidence: "Together, we will rebuild this school", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) Sign the petition; give an hour. (b) It engages the imagination with a bleak picture. (c) Contrasting 'dream' with 'choice' makes change seem achievable and urgent. (d) The speaker hooks with imagery and a question, builds responsibility with anaphora and 'we', and ends with commands and the positive 'Together, we will rebuild this school'.",
            commonErrors: ["Labelling devices without effects.", "Ignoring the structure of the speech from problem to solution."],
          },
        },
      ],
    },
    {
      id: "el8-u2-tone-viewpoint",
      title: "Tone and viewpoint",
      skill: "Identify the writer's tone and viewpoint and show how word choice and sentence structure create them.",
      lesson: {
        sections: [
          {
            heading: "What is tone?",
            body: "**Tone** is the writer's attitude, like a speaking voice: serious, ironic, humorous, urgent, sympathetic, outraged. Tone comes from word choice ('grinding', 'hunched'), sentence type (questions, exclamations) and details selected. Name the tone with a precise adjective and prove it with a quotation.",
          },
          {
            heading: "Viewpoint and the balanced voice",
            body: "**Viewpoint** is the writer's position: here, that homework should be optional. Skilled writers pretend to be reasonable, using concessions ('Teachers, of course, mean well') and then 'but'. Spotting this shows a sophisticated reading: the concession makes the writer seem fair, while the main argument still wins.",
          },
        ],
        keyFormulas: [
          { name: "Tone", statement: "The attitude or feeling shown through a writer's choices." },
          { name: "Viewpoint", statement: "The position or opinion the writer takes." },
          { name: "Concession", statement: "Admitting a point for the other side, to appear fair before arguing against it." },
        ],
        workedExample: {
          problem: "Describe the writer's tone in the opening paragraph and how it is created. (4 marks)",
          solution: "The tone is sympathetic and gently critical. The image of young people 'hunched over kitchen tables, grinding through pages of work' uses harsh verbs to make homework seem a joyless, physical burden. The question 'Is this really the best use of their precious time?' sounds concerned, while the short, calm 'I do not think so' shows a firm but polite viewpoint.",
        },
      },
      questions: [
        {
          id: "el8-u2-tone-viewpoint-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OP_ED,
          stem: "Which word best describes the writer's viewpoint on homework?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Indifferent" },
              { id: "b", text: "Sceptical" },
              { id: "c", text: "Enthusiastic" },
              { id: "d", text: "Fearful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Identifying viewpoint", statement: "Match an adjective to the evidence in the text." }],
            steps: [{ reasoning: "The writer questions the value of homework and argues for making it optional.", evidence: "Is this really the best use of their precious time?", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Sceptical. She doubts that homework is worthwhile, but she is neither fearful nor indifferent, since she argues actively.",
            commonErrors: ["Choosing 'indifferent', as the writer clearly cares about the issue."],
          },
        },
        {
          id: "el8-u2-tone-viewpoint-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: OP_ED,
          stem: "'Teachers, of course, mean well.' Why does the writer include this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To mock teachers" },
              { id: "b", text: "To change the subject" },
              { id: "c", text: "To show that she agrees with teachers completely" },
              { id: "d", text: "To seem fair and reasonable before disagreeing with homework policy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Concession", statement: "Granting a point to the opposition makes the writer seem balanced." }],
            steps: [
              { reasoning: "The concession acknowledges the other side and avoids sounding hostile.", evidence: "Teachers, of course, mean well.", marks: 1, markCode: "AO2" },
              { reasoning: "The following 'But' turns the argument back to her viewpoint.", evidence: "But good intentions do not make a good policy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** It makes her seem fair before she criticises the policy. 'But good intentions do not make a good policy' shows that she disagrees.",
            commonErrors: ["Choosing (b): the concession is followed by 'But'."],
          },
        },
        {
          id: "el8-u2-tone-viewpoint-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: OP_ED,
          stem: "How does the writer create a reasonable, balanced tone in the final paragraph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Moderation", statement: "Denying extreme positions makes a writer seem sensible." },
              { kind: "technique", name: "Balanced structure", statement: "Giving both groups something shows fairness." },
            ],
            steps: [
              { reasoning: "She rejects an extreme position, which makes her sound moderate.", evidence: "I am not suggesting that we abolish homework altogether", marks: 1, markCode: "AO2" },
              { reasoning: "'Rather' introduces a compromise, so the reader is more likely to accept it.", evidence: "Rather, let pupils choose it.", marks: 1, markCode: "AO2" },
              { reasoning: "The balanced sentence structure gives something to both groups.", evidence: "Those who want extra practice can have it, and those who need a rest can take one", marks: 1, markCode: "AO2" },
              { reasoning: "The gentle closing line with 'after all' sounds friendly and confident.", evidence: "A little trust, after all, never harmed anyone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer sounds reasonable by rejecting the extreme idea of abolishing homework, 'I am not suggesting...', and offering a compromise with 'Rather, let pupils choose it'. The balanced sentence gives something to both groups, and the closing line 'after all' is gentle and confident.",
            commonErrors: ["Describing the proposal without commenting on tone."],
          },
        },
        {
          id: "el8-u2-tone-viewpoint-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: OP_ED,
          stem: "Answer all parts of this question about 'Why Homework Should Be Optional'.",
          parts: [
            { label: "a", prompt: "Write down two things that the writer says are 'squeezed out' by homework.", marks: 2 },
            { label: "b", prompt: "What does the verb 'grinding' suggest about doing homework?", marks: 2 },
            { label: "c", prompt: "Explain how the writer uses the rhetorical question in the first paragraph.", marks: 4 },
            { label: "d", prompt: "How does the writer use tone and viewpoint to persuade the reader?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone", statement: "Attitude conveyed through word choice and sentence form." },
              { kind: "technique", name: "Evidence", statement: "Appeals to research make an argument seem credible." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: sleep, exercise, family time.", evidence: "sleep, exercise and family time", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "'Grinding' suggests dull, tiring, repetitive effort, like machinery wearing down.", evidence: "grinding through pages of work", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It makes homework seem joyless and pointless when pupils already know the work.", evidence: "work they have already mastered", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The question invites the reader to share her doubt.", evidence: "Is this really the best use of their precious time?", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The emotive 'precious' makes time seem valuable and wasted, and the short answer 'I do not think so' states her viewpoint.", evidence: "I do not think so.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "A sympathetic tone with vivid images of pupils hunched over tables wins sympathy.", evidence: "hunched over kitchen tables", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Reference to research and the concession to teachers build credibility and fairness.", evidence: "Research from several countries suggests", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "A moderate compromise and gentle ending make the viewpoint easy to accept.", evidence: "A little trust, after all, never harmed anyone.", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) Sleep and exercise (or family time). (b) Dull, tiring effort. (c) The question invites agreement, the word 'precious' makes time seem valuable and 'I do not think so' states her view. (d) She creates sympathy with vivid images, credibility with research and concession, and a reasonable tone by offering a compromise rather than an extreme demand.",
            commonErrors: ["Saying her tone is 'persuasive' without being precise.", "Not commenting on the writer's compromise."],
          },
        },
      ],
    },
  ],
};
