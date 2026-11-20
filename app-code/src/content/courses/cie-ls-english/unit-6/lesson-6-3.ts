import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cile-u6-lesson-6-3",
  code: "6-3",
  title: "Persuasive letters and speeches",
  goal: "I CAN write persuasive letters and speeches appropriate to their audience and purpose.",
  standards: ["0861 Writing: transactional persuasion"],
  vocabulary: [
    { term: "Letter to the editor", definition: "A letter published in a newspaper expressing opinion on a current issue." },
    { term: "Speech", definition: "A spoken address designed to inform, persuade or inspire an audience." },
    { term: "Salutation", definition: "The formal greeting opening a letter ('Dear Sir/Madam')." },
    { term: "Sign-off", definition: "The closing of a formal letter ('Yours faithfully')." },
    { term: "Audience awareness", definition: "Adjusting language, tone and content to suit the listener or reader." },
    { term: "Rhetorical devices", definition: "Techniques used in speeches — repetition, rhetorical questions, triads." },
  ],
  concepts: [
    {
      id: "cile-u6-persuasive-letters",
      title: "Persuasive letters",
      skill: "Write formal persuasive letters with correct structure, tone and evidence.",
      lesson: {
        sections: [
          {
            heading: "Letter conventions",
            body: "- **Sender's address and date**: top right.\n- **Recipient's address**: below, left.\n- **Salutation**: 'Dear Sir/Madam' (unknown) or 'Dear Ms Khan' (known).\n- **Body**: purpose in first paragraph; reasons and evidence; counter-argument; request.\n- **Sign-off**: 'Yours faithfully' (unknown) / 'Yours sincerely' (known); name.",
          },
          {
            heading: "Persuasive letter content",
            body: "- **Purpose clear**: state what you want in the first paragraph.\n- **Reasons + evidence**: support with facts, not just feelings.\n- **Tone**: formal, respectful, firm — not aggressive.\n- **Request specific**: 'I request that...' not 'do something about it'.",
          },
        ],
        keyFormulas: [
          { name: "Letter structure", statement: "Addresses + date → salutation → purpose → reasons/evidence → request → sign-off." },
        ],
        workedExample: {
          problem: "Letter to the council about potholes.",
          solution: "'Dear Councillor, I am writing to request repairs to the potholes on Mill Road. Three have caused damage to vehicles this month. I request that the road be resurfaced within two weeks. Yours sincerely, [Name]' — clear purpose, evidence, specific request.",
        },
      },
      questions: [
        {
          id: "cile-u6-letter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct sign-off for a letter to an unknown recipient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours sincerely" },
              { id: "b", text: "Yours faithfully" },
              { id: "c", text: "Best wishes" },
              { id: "d", text: "Love" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter conventions", statement: "'Yours faithfully' for unknown recipients; 'Yours sincerely' for known." },
            ],
            steps: [
              { reasoning: "Unknown recipient → 'Yours faithfully'.", working: "\\text{'faithfully'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Yours faithfully",
            commonErrors: ["Choosing (a) — 'Yours sincerely' is for named recipients."],
          },
        },
        {
          id: "cile-u6-letter-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should the purpose of a persuasive letter appear in the first paragraph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Purpose-first", statement: "Busy readers need to know immediately what is being requested." },
            ],
            steps: [
              { reasoning: "Recipients are busy — they need to know the request immediately.", working: "\\text{immediate}", marks: 1, markCode: "AO2" },
              { reasoning: "Delaying the purpose risks losing the reader before they reach it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The purpose must appear early because busy recipients need to know immediately what is being requested — delaying it risks losing their attention before they reach the point.",
            commonErrors: ["Saying 'it is polite' — the reason is reader attention and clarity."],
          },
        },
        {
          id: "cile-u6-letter-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this informal complaint as a formal persuasive letter opening: 'Hey, the park is rubbish and someone should fix it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal register", statement: "Persuasive letters need formal, respectful language." },
            ],
            steps: [
              { reasoning: "Problem: 'rubbish' is informal and vague; 'someone should' is weak.", working: "\\text{informal}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: state purpose clearly — 'I am writing to request repairs to the park.'", working: "\\text{purpose}", marks: 1, markCode: "AO2" },
              { reasoning: "Add specific evidence — 'broken swings, overgrown paths'.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register maintained throughout.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Dear Councillor, I am writing to request repairs to the local park. The swings are broken and the paths are overgrown, making the space unsafe for children. I would appreciate your attention to this matter. Yours faithfully, [Name]'",
            commonErrors: ["Keeping informal tone ('rubbish', 'hey') — formal letters need formal register."],
          },
        },
        {
          id: "cile-u6-letter-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a formal letter to a person in authority about an issue affecting your community.",
          parts: [
            { label: "a", prompt: "Write the opening including addresses and salutation.", marks: 2 },
            { label: "b", prompt: "State your purpose and two reasons in the first paragraph.", marks: 3 },
            { label: "c", prompt: "Provide one piece of evidence supporting your case.", marks: 2 },
            { label: "d", prompt: "Write a specific request and sign-off.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter conventions", statement: "Correct format, formal register, clear purpose, evidence, specific request." },
            ],
            steps: [
              { part: "a", reasoning: "Addresses, date, salutation correct.", working: "\\text{format}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Formal and complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Purpose stated clearly in first paragraph.", working: "\\text{purpose}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two relevant reasons given.", working: "\\text{reasons}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear and persuasive.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Credible evidence provided.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Evidence supports the case.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Specific request stated.", working: "\\text{request}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct sign-off and name.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) correct format (b) purpose + reasons (c) evidence (d) specific request + sign-off",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct format.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Errors.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear purpose + reasons.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Credible evidence.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Specific request + sign-off.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (d) vague request ('please do something') — must be specific."],
          },
        },
      ],
    },
    {
      id: "cile-u6-speeches",
      title: "Speeches and oral presentation",
      skill: "Write and deliver speeches using rhetorical devices, structure and audience awareness.",
      lesson: {
        sections: [
          {
            heading: "Speech structure",
            body: "- **Opening**: hook — greeting, attention-grabber, credibility.\n- **Body**: main points in logical order — usually three.\n- **Conclusion**: summary, call to action, memorable ending.",
          },
          {
            heading: "Speech techniques",
            body: "- **Repetition**: 'We will not rest... we will not retreat...' — builds momentum.\n- **Rhetorical questions**: involve the audience.\n- **Rule of three**: 'of the people, by the people, for the people'.\n- **Direct address**: 'You' — makes it personal.\n- **Pauses and emphasis**: written cues — '[pause]', 'slowly'.",
          },
          {
            heading: "Delivery",
            body: "- **Eye contact**: engage the audience.\n- **Pace**: not too fast — let points land.\n- **Voice**: vary volume and tone for emphasis.\n- **Body language**: open posture, purposeful gestures.",
          },
        ],
        keyFormulas: [
          { name: "Speech craft", statement: "Hook → three main points → call to action → memorable ending. Use repetition, rhetorical questions, direct address." },
        ],
        workedExample: {
          problem: "Opening for a speech about school lunches.",
          solution: "'Good morning. How many of you have skipped lunch because the queue was too long? [pause] Today I want to talk about why that should never happen again.' — hook (question), pause, clear purpose.",
        },
      },
      questions: [
        {
          id: "cile-u6-speech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the recommended number of main points in a short speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One" },
              { id: "b", text: "Three" },
              { id: "c", text: "Ten" },
              { id: "d", text: "As many as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rule of three", statement: "Three main points is memorable and manageable." },
            ],
            steps: [
              { reasoning: "Three points balances completeness and memorability.", working: "\\text{three}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Three",
            commonErrors: ["Choosing (d) — more points dilute focus."],
          },
        },
        {
          id: "cile-u6-speech-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of repetition in a speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Repetition", statement: "Repeating phrases builds rhythm, emphasis and memorability." },
            ],
            steps: [
              { reasoning: "Repetition creates rhythm and makes key phrases memorable.", working: "\\text{rhythm}", marks: 1, markCode: "AO2" },
              { reasoning: "It builds emotional momentum — each repetition intensifies the point.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Repetition builds rhythm and memorability — each repeated phrase intensifies emphasis and creates emotional momentum for the audience.",
            commonErrors: ["Saying 'it fills time' — repetition is for emphasis, not padding."],
          },
        },
        {
          id: "cile-u6-speech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a speech that reads like an essay — long paragraphs, no direct address, no rhetorical devices. Rewrite the approach for the spoken medium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech vs essay", statement: "Speeches need shorter sentences, direct address, rhetorical devices and pauses." },
            ],
            steps: [
              { reasoning: "Problem: essay style — too dense for listening.", working: "\\text{too dense}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: shorter sentences, direct address ('you'), rhetorical questions.", working: "\\text{'you'/questions}", marks: 1, markCode: "AO2" },
              { reasoning: "Add pauses and emphasis cues — '[pause]', repetition.", working: "\\text{pauses}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: engaging, memorable, audible.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rewrite with shorter sentences, direct address ('you'), rhetorical questions, repetition for emphasis, and pause cues — speeches are heard, not read, so they need rhythm and engagement.",
            commonErrors: ["Just shortening sentences without adding rhetorical devices or audience engagement."],
          },
        },
        {
          id: "cile-u6-speech-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a short speech (2-3 minutes) on a topic of your choice.",
          parts: [
            { label: "a", prompt: "Write an opening hook (1-2 sentences).", marks: 2 },
            { label: "b", prompt: "State your three main points.", marks: 2 },
            { label: "c", prompt: "Write one sentence using a rhetorical device and explain it.", marks: 2 },
            { label: "d", prompt: "Write a call-to-action ending.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech craft", statement: "Hook → three points → device → CTA." },
            ],
            steps: [
              { part: "a", reasoning: "Hook is engaging and relevant.", working: "\\text{hook}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Creates immediate interest.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Three clear main points.", working: "\\text{points}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Points are distinct and logical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Rhetorical device used correctly.", working: "\\text{device}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Call to action is clear and urgent.", working: "\\text{CTA}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Ending is memorable and motivating.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Speech concludes powerfully.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) engaging hook (b) three clear points (c) rhetorical device + explanation (d) powerful CTA",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Strong hook.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three clear points.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Unclear.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Device + explanation.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Powerful CTA.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) ending with 'thank you' — speeches need a call to action or memorable final image."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u6-letters-speeches-notes",
      title: "Persuasive letters and speeches — revision notes",
      summary: "Formal letter conventions, persuasive content, and speech techniques.",
      sections: [
        {
          heading: "Letters",
          body: "Addresses + date → salutation → purpose first → reasons + evidence → specific request → sign-off ('Yours faithfully' unknown / 'Yours sincerely' known). Formal register.",
        },
        {
          heading: "Speeches",
          body: "Hook → three main points → call to action → memorable ending. Repetition, rhetorical questions, rule of three, direct address, pauses.",
        },
        {
          heading: "Writing checklist",
          body: "Is the purpose clear and early? Is the register appropriate? Are rhetorical devices serving the message? Does the ending compel action?",
        },
      ],
    },
  ],
};
