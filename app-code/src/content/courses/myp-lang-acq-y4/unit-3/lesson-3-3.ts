import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mla4-u3-lesson-3-3",
  code: "3-3",
  title: "Intercultural Understanding and Media Literacy",
  goal: "I CAN discuss cultural differences respectfully and identify bias or unreliable information in media texts.",
  standards: [
    "MYP Language Acquisition",
    "Intercultural understanding",
    "Criterion B: Reading",
    "Criterion C: Speaking",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Culture", definition: "The shared customs, values, beliefs and ways of life of a group." },
    { term: "Bias", definition: "A one-sided preference that affects how information is presented." },
    { term: "Media literacy", definition: "The ability to understand and evaluate information from media sources." },
    { term: "Perspective", definition: "A particular way of seeing or understanding something." },
    { term: "Respect", definition: "Showing consideration for other people's cultures and views." },
  ],
  concepts: [
    {
      id: "mla4-u3-intercultural-understanding",
      title: "Intercultural understanding",
      skill: "Discuss cultural differences with respect, avoid stereotypes and ask questions to learn more.",
      lesson: {
        sections: [
          {
            heading: "Cultural differences",
            body: "Cultures differ in greetings, food, celebrations, communication styles and ideas about time. These differences are normal. Learning about them helps us communicate better and avoid misunderstandings.",
          },
          {
            heading: "Avoiding stereotypes",
            body: "A **stereotype** is an oversimplified idea about a group, such as 'All students from Country X are the same.' Avoid stereotypes by remembering that individuals vary. Use cautious language: 'Some people may...', 'In some contexts...', 'It can vary'.",
          },
          {
            heading: "Respectful questions",
            body: "Show interest respectfully: 'Could you tell me more about that tradition?' or 'I would like to learn about your culture.' Listen carefully and do not judge. If you make a mistake, apologise politely and learn from it.",
          },
        ],
        keyFormulas: [
          { name: "Cultural caution", statement: "Some people may / In some contexts / It can vary" },
          { name: "Respectful questions", statement: "Could you tell me more / I would like to learn" },
        ],
        workedExample: {
          problem: "Rewrite 'All people in Japan are shy.'",
          solution: "'Some people in Japan may appear reserved in formal situations, but this can vary.'",
        },
      },
      questions: [
        {
          id: "mla4-u3-intercultural-understanding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A detailed cultural description" },
              { id: "b", text: "A respectful greeting" },
              { id: "c", text: "A formal translation" },
              { id: "d", text: "An oversimplified belief about a group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stereotype", statement: "Oversimplified belief about a group." }],
            steps: [{ reasoning: "Criterion B: Reading — stereotype = oversimplified belief.", working: "oversimplified", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** An oversimplified belief about a group",
            commonErrors: ["Confusing stereotype with cultural fact."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Class Discussion",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "Student A: 'In my country, we greet elders by bowing.'\nStudent B: 'In my country, we shake hands. Both are polite ways to show respect.'",
          },
          stem: "Explain how the students show intercultural understanding.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Intercultural respect", statement: "Share customs and recognise different forms of politeness." }],
            steps: [
              { reasoning: "Criterion C: Speaking — Student A shares own custom: bowing.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — Student B shares own custom: handshake.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — Student B recognises both as polite.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Students share customs and recognise both as respectful.",
            commonErrors: ["Assuming one custom is superior."],
            examinerNote: "Must show respect for both cultures.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Stereotype Correction",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "A classmate says: 'Students from Country X are always quiet and shy.'\n\nYou know this is not true for everyone.",
          },
          stem: "Rewrite the statement in a culturally responsible way and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Stereotype avoidance", statement: "Use cautious language and avoid generalisations." }],
            steps: [
              { reasoning: "Criterion D: Writing — removes 'always' and absolute claim.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds cautious language: 'some', 'may', 'can vary'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains that individuals differ.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is respectful.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "'Some students from Country X may appear quiet in certain situations, but this can vary.' Avoids stereotype by acknowledging individual differences.",
            commonErrors: ["Replacing one stereotype with another."],
            examinerNote: "Must avoid absolute language.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Intercultural Reflection",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "You are preparing for an exchange with students from another country. Write a short message introducing your culture and asking about theirs.",
          },
          stem: "Write the message.",
          parts: [
            { label: "a", prompt: "Introduce yourself and your school.", marks: 1 },
            { label: "b", prompt: "Describe one cultural tradition or custom.", marks: 2 },
            { label: "c", prompt: "Ask one respectful question about their culture.", marks: 2 },
            { label: "d", prompt: "Write a polite closing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Intercultural communication", statement: "Share, ask and respect." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — introduction is clear and polite.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — tradition/custom is described accurately.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — description is respectful and clear.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — question is respectful and open.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — question is grammatically correct.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — closing is warm and polite.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate and appropriate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — message shows intercultural respect.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) intro (b) tradition (c) question (d) polite close.",
            commonErrors: ["Generalising about the other culture."],
            examinerNote: "Message should invite exchange, not stereotype.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A formal translation" },
              { id: "b", text: "A respectful greeting" },
              { id: "c", text: "A detailed cultural description" },
              { id: "d", text: "An oversimplified belief about a group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype", statement: "Oversimplified belief about a group." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — stereotype = oversimplified belief.", working: "oversimplified", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An oversimplified belief about a group",
            commonErrors: ["Confusing stereotype with cultural fact."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement avoids stereotyping?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'People from Country X never talk.'" },
              { id: "b", text: "'Everyone from Country X is the same.'" },
              { id: "c", text: "'Some students from Country X may appear quiet in certain situations.'" },
              { id: "d", text: "'All students from Country X are quiet.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cultural caution", statement: "Use 'some', 'may', 'can vary' to avoid generalisations." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — option b uses cautious language.", working: "cautious", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'Some students from Country X may appear quiet in certain situations.'",
            commonErrors: ["Choosing absolute statements."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Class Discussion",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "Student A: 'In my country, we greet elders by shaking hands.'\nStudent B: 'In my country, we bow. Both are ways to show respect.'",
          },
          stem: "How do the students show intercultural understanding?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural respect", statement: "Share customs and recognise different forms of politeness." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — both students share their own customs.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — Student B recognises both as respectful.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Students share customs and recognise both as respectful.",
            commonErrors: ["Assuming one custom is superior."],
            examinerNote: "Both parts needed.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Statement",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "'All people in Japan are shy.'",
          },
          stem: "What is wrong with this statement?",
          response: {
            type: "numeric",
            parts: [
              { label: "issues", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stereotype identification", statement: "Absolute generalisations are stereotypes." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'All' makes it an absolute generalisation = stereotype.", working: "stereotype", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**1** issue — it is an absolute stereotype.",
            commonErrors: ["Not recognising the generalisation."],
            examinerNote: "B1 for 1.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Statement",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "'Students from Country X are always quiet and shy.'",
          },
          stem: "Rewrite this in a culturally responsible way.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Some students from Country X may appear reserved in certain situations.'" },
              { id: "b", text: "'All students from Country X are quiet.'" },
              { id: "c", text: "'Students from Country X never talk.'" },
              { id: "d", text: "'Everyone from Country X is shy.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cultural caution", statement: "Use 'some', 'may', 'situations' to avoid generalisation." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — option b removes 'always' and adds cautious language.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — acknowledges individual variation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'Some students from Country X may appear reserved in certain situations.'",
            commonErrors: ["Replacing one stereotype with another."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Classmate's Comment",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "A classmate says: 'People from Country X are always late.' You know this is not true for everyone.",
          },
          stem: "Rewrite the statement respectfully and explain why your version is better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stereotype correction", statement: "Cautious language + respect." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes 'always' and absolute claim.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds 'some', 'may', 'can vary'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains individuals differ within groups.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Some people from Country X may sometimes be late, but this can vary.' — avoids generalisation.",
            commonErrors: ["Keeping 'always' or replacing with another absolute."],
            examinerNote: "Must avoid absolute language.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Cultural Exchange",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "You are preparing to meet students from another country. Write one question you could ask to learn about their culture respectfully.",
          },
          stem: "Write the question and explain why it is respectful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respectful questions", statement: "Open, curious questions invite sharing." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — question is open and respectful (e.g. 'Could you tell me about...?').", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — question is grammatically correct.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explains it invites sharing without stereotyping.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Could you tell me more about a tradition you enjoy?' — open, curious, respectful.",
            commonErrors: ["Questions that assume or stereotype."],
            examinerNote: "Question must invite, not assume.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to show respect when learning about another culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid all questions" },
              { id: "b", text: "Make jokes about differences" },
              { id: "c", text: "Ask questions respectfully and listen carefully" },
              { id: "d", text: "Assume everyone is the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intercultural respect", statement: "Ask + listen = respectful learning." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — respectful questions + listening show respect.", working: "respect", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Ask questions respectfully and listen carefully",
            commonErrors: ["Choosing options that assume or avoid engagement."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Statement",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "'In some cultures, people greet with a bow. In others, they shake hands. It can vary.'",
          },
          stem: "Why is this statement culturally responsible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses absolute language" },
              { id: "b", text: "It is too vague" },
              { id: "c", text: "It stereotypes one culture" },
              { id: "d", text: "It acknowledges variation between and within cultures" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural nuance", statement: "Acknowledging variation avoids stereotyping." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'in some... in others... can vary' acknowledges diversity.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — no absolute claims made.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It acknowledges variation between and within cultures",
            commonErrors: ["Thinking it is too vague."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Scenario",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "A new student from another country seems quiet in class. Some classmates say 'they are shy because of their culture.'",
          },
          stem: "Explain why this generalisation is problematic and suggest a better approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Avoiding stereotypes", statement: "Individual behaviour ≠ cultural label." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — problem: assumes culture explains behaviour; ignores individual differences.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — better approach: get to know the student individually, ask respectfully.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — suggestion is respectful and specific.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explanation is balanced.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Problem: stereotype; better: treat student as individual, ask questions, don't assume.",
            commonErrors: ["Agreeing with the stereotype."],
            examinerNote: "Must challenge the generalisation.",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Statement",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "'I would like to learn about your culture.'",
          },
          stem: "Why is this phrase effective for intercultural communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is very formal" },
              { id: "b", text: "It shows curiosity and respect" },
              { id: "c", text: "It assumes knowledge" },
              { id: "d", text: "It avoids all questions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respectful interest", statement: "Expressing desire to learn shows respect." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'would like to learn' shows genuine curiosity.", working: "curious", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** It shows curiosity and respect",
            commonErrors: ["Reading it as formality rather than interest."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla4-u3-intercultural-understanding-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Intercultural Reflection",
            author: "Written for Akademik Space",
            source: "Intercultural practice",
            text: "You are preparing for an exchange with students from another country. Write a short message introducing your culture and asking about theirs.",
          },
          stem: "Write the message.",
          parts: [
            { label: "a", prompt: "Introduce yourself and your school.", marks: 1 },
            { label: "b", prompt: "Describe one cultural tradition or custom.", marks: 2 },
            { label: "c", prompt: "Ask one respectful question about their culture.", marks: 2 },
            { label: "d", prompt: "Write a polite closing.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural communication", statement: "Share, ask, respect." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — introduction is clear and polite.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — tradition/custom described accurately.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — description is respectful and clear.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — question is respectful and open.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — question is grammatically correct.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — closing is warm and polite.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) intro (b) tradition (c) question (d) closing.",
            commonErrors: ["Generalising about the other culture."],
            examinerNote: "Message should invite exchange.",
          },
        },
      ],
    },
    {
      id: "mla4-u3-media-literacy",
      title: "Basic media literacy",
      skill: "Identify bias, unreliable sources and persuasive techniques in simple media texts.",
      lesson: {
        sections: [
          {
            heading: "What is bias?",
            body: "**Bias** means favouring one side. A biased article may use strong words like 'terrible' or 'wonderful', give only one side's evidence, or leave out important facts. A biased text is not always false, but it is one-sided.",
          },
          {
            heading: "Checking sources",
            body: "Ask: Who wrote this? What is their purpose? Do they give evidence? Do they mention other views? Reliable sources explain how they know something and acknowledge different opinions.",
          },
          {
            heading: "Persuasive techniques",
            body: "Watch for **exaggeration** ('the best ever'), **emotional language** ('disastrous', 'amazing') and **generalisation** ('everyone agrees'). These techniques try to persuade rather than inform. Always ask whether the claim is supported.",
          },
        ],
        keyFormulas: [
          { name: "Bias signals", statement: "Strong words + one-sided evidence + missing facts" },
          { name: "Source questions", statement: "Who / purpose / evidence / other views" },
        ],
        workedExample: {
          problem: "Headline: 'Wonderful new law saves our schools!' Is it biased?",
          solution: "Yes — 'wonderful' and 'saves' are positive loaded words with no evidence.",
        },
      },
      questions: [
        {
          id: "mla4-u3-media-literacy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bias in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of headline" },
              { id: "b", text: "A writing mistake" },
              { id: "c", text: "A factual error" },
              { id: "d", text: "A one-sided preference affecting presentation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Bias", statement: "One-sided preference in presentation." }],
            steps: [{ reasoning: "Criterion B: Reading — bias = one-sided preference.", working: "one-sided", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A one-sided preference affecting presentation",
            commonErrors: ["Confusing bias with error."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Headlines",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Headline A: 'New Recycling Law Passes After Debate'\nHeadline B: 'Disastrous Recycling Law Forces Painful Changes'",
          },
          stem: "Which headline is more biased and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Headline bias", statement: "Loaded adjectives reveal bias." }],
            steps: [
              { reasoning: "Criterion B: Reading — Headline B is biased.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Disastrous' is a strong negative word.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Painful changes' frames negatively.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Headline B — 'disastrous' and 'painful' are loaded negative words.",
            commonErrors: ["Choosing A, which is neutral."],
            examinerNote: "Must identify loaded language.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The new policy is a disaster for families. Everyone agrees it must be stopped immediately. Sources say the minister knew about the problems but did nothing.",
          },
          stem: "Identify three signs of bias in this article.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Bias identification", statement: "Loaded words, unsupported claims, vague sources." }],
            steps: [
              { reasoning: "Criterion B: Reading — 'disaster' is loaded negative language.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Everyone agrees' is unsupported generalisation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Sources say' is vague and unverified.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — no opposing view presented.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Disaster', 'everyone agrees', vague 'sources', no balance.",
            commonErrors: ["Missing vague attribution."],
            examinerNote: "Three or more bias signals needed.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Media Task",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "You see a social media post claiming 'This product cures all diseases!' with no evidence and many excited comments.",
          },
          stem: "Complete the media literacy tasks.",
          parts: [
            { label: "a", prompt: "Identify two warning signs in the post.", marks: 1 },
            { label: "b", prompt: "Explain why comments alone are not reliable evidence.", marks: 2 },
            { label: "c", prompt: "Write two questions you would ask before trusting the claim.", marks: 2 },
            { label: "d", prompt: "Write a short warning to share with classmates.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Media literacy production", statement: "Identify red flags, question evidence, warn others." }],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — warning sign 1: 'cures all diseases' is extreme claim.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — no scientific evidence or source given.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — comments are opinions, not evidence.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — question 1 asks for evidence/source.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — question 2 asks about safety or verification.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — warning is clear and factual.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — warning advises checking sources.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is appropriate and persuasive.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) extreme claim/no evidence (b) comments not evidence (c) two questions (d) warning message.",
            commonErrors: ["Trusting popularity as proof."],
            examinerNote: "Warning should promote critical checking.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'media literacy' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ability to create videos" },
              { id: "b", text: "The ability to use social media" },
              { id: "c", text: "The ability to watch TV" },
              { id: "d", text: "The ability to understand and evaluate media information" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Media literacy", statement: "Understand and evaluate media sources." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — media literacy = evaluate information.", working: "evaluate", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The ability to understand and evaluate media information",
            commonErrors: ["Confusing with media creation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a warning sign of unreliable information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It acknowledges different views" },
              { id: "b", text: "It cites multiple sources" },
              { id: "c", text: "It makes extreme claims with no evidence" },
              { id: "d", text: "It is written by experts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unreliability signals", statement: "Extreme claims + no evidence = unreliable." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — extreme claims without evidence are a red flag.", working: "red flag", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It makes extreme claims with no evidence",
            commonErrors: ["Choosing trustworthy signals."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Two Headlines",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Headline A: 'New Recycling Law Passes After Debate'\nHeadline B: 'Disastrous Recycling Law Forces Painful Changes'",
          },
          stem: "Which headline is biased and what words show it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Headline bias", statement: "Loaded adjectives reveal bias." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Headline B is biased.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Disastrous' and 'Painful' are loaded negative words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Headline B — 'Disastrous' and 'Painful' are loaded words.",
            commonErrors: ["Choosing A, which is neutral."],
            examinerNote: "Both needed.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Social Media Post",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Post: 'This product cures all diseases! No proof needed — just trust me!' 2,000 likes.",
          },
          stem: "How many warning signs does this post contain? (extreme claim, no proof, 'trust me')",
          response: {
            type: "numeric",
            parts: [
              { label: "signs", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Red flag counting", statement: "Count unreliable signals." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'cures all diseases' (extreme), 'no proof' (no evidence), 'trust me' (vague appeal) = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Missing one warning sign."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The new policy is a disaster for families. Everyone agrees it must be stopped immediately.",
          },
          stem: "Identify two signs of bias in this excerpt.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses statistics" },
              { id: "b", text: "It is balanced" },
              { id: "c", text: "It is too short" },
              { id: "d", text: "'disaster' is loaded and 'everyone agrees' is unsupported" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias identification", statement: "Loaded words + unsupported claims." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'disaster' is loaded; 'everyone agrees' is unsupported generalisation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — both correctly identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'disaster' is loaded and 'everyone agrees' is unsupported",
            commonErrors: ["Missing the generalisation."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The mayor's plan will transform our city. Crumbling roads will be repaired and parks will be renovated. No reasonable person could oppose such obvious progress.",
          },
          stem: "Identify two signs of bias in this article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias identification", statement: "Loaded words + dismissive claims." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'transform', 'crumbling', 'obvious progress' are loaded/positive.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'No reasonable person could oppose' dismisses opposing views.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — no evidence or balance offered.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Loaded positive words + dismissive claim + no balance.",
            commonErrors: ["Missing the dismissive generalisation."],
            examinerNote: "Two or more bias signals needed.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Social Media Post",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Post: 'Doctors hate this one weird trick to lose weight!' with no evidence and many excited comments.",
          },
          stem: "Write two questions a critical reader should ask before trusting this post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questioning", statement: "Ask for evidence and verification." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — question about evidence/source (e.g. 'What evidence supports this?').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — question about safety or verification (e.g. 'Is this medically approved?').", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — questions are clear and relevant.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'What scientific evidence supports this?' and 'Is this safe or approved?'",
            commonErrors: ["Questions unrelated to reliability."],
            examinerNote: "Questions must test credibility.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is 'everyone agrees' a warning sign in media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always true" },
              { id: "b", text: "It is grammatically wrong" },
              { id: "c", text: "It is an unsupported generalisation" },
              { id: "d", text: "It is too formal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Generalisation warning", statement: "'Everyone agrees' claims consensus without proof." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'everyone agrees' is an unsupported generalisation.", working: "generalisation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is an unsupported generalisation",
            commonErrors: ["Thinking it proves consensus."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Sources tell us the minister knew about the problems months ago but said nothing.",
          },
          stem: "Why might 'Sources tell us' be a weak attribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is vague and unverifiable" },
              { id: "b", text: "It is too specific" },
              { id: "c", text: "It is grammatically incorrect" },
              { id: "d", text: "It is too formal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Vague sources cannot be verified." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Sources' is unnamed; cannot verify.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'tell us' is informal and unverified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is vague and unverifiable",
            commonErrors: ["Thinking any attribution is reliable."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Evaluation",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The new law is wonderful for our community. It will solve all our problems. The minister called it 'a triumph'. Everyone is celebrating.",
          },
          stem: "Evaluate this article: identify its purpose, two bias signals, and whether it is reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media evaluation", statement: "Purpose, bias, reliability." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — purpose: promote the law positively.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — bias 1: 'wonderful', 'triumph' loaded positive; bias 2: 'solve all our problems' exaggeration.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — not reliable: no evidence, no opposing view.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — evaluation is justified.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Promotional; biased ('wonderful', 'all problems'); unreliable — no evidence.",
            commonErrors: ["Missing the exaggeration signal."],
            examinerNote: "Purpose + two bias signals + reliability needed.",
          },
        },
        {
          id: "mla4-u3-media-literacy-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The study, published in a peer-reviewed journal, found that exercise improves memory in students aged 12-15.",
          },
          stem: "Why is this source more reliable than a social media post?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has many likes" },
              { id: "b", text: "It is shorter" },
              { id: "c", text: "It uses emotional language" },
              { id: "d", text: "It cites a credible source and specific findings" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source reliability", statement: "Credible sources cite evidence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — peer-reviewed journal + specific age range = credible.", working: "credible", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It cites a credible source and specific findings",
            commonErrors: ["Thinking popularity = reliability."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-media-literacy-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Media Task",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "You see a social media post claiming 'This product cures all diseases!' with no evidence and many excited comments.",
          },
          stem: "Complete the media literacy tasks.",
          parts: [
            { label: "a", prompt: "Identify two warning signs in the post.", marks: 1 },
            { label: "b", prompt: "Explain why comments alone are not reliable evidence.", marks: 2 },
            { label: "c", prompt: "Write two questions you would ask before trusting the claim.", marks: 2 },
            { label: "d", prompt: "Write a short warning to share with classmates.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media literacy production", statement: "Identify red flags, question evidence, warn others." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — warning sign: 'cures all diseases' extreme claim.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — no scientific evidence or source given.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — comments are opinions, not evidence.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — question 1 asks for evidence/source.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — question 2 asks about safety or verification.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — warning is clear and advises checking sources.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) extreme claim (b) comments not evidence (c) two questions (d) warning.",
            commonErrors: ["Trusting popularity as proof."],
            examinerNote: "Warning should promote critical checking.",
          },
        },
      ],
    },
  ],
};
