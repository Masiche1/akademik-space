import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "el7-u2-lesson-2-2",
  code: "2-2",
  title: "Persuasive and Formal Writing",
  goal: "I CAN write persuasively and formally, adapting tone and structure to purpose.",
  standards: ["Edexcel KS3 English Language — Writing"],
  vocabulary: [
    {
      term: "Persuasive writing",
      definition:
        "Writing that aims to convince the reader to accept a viewpoint or take action.",
    },
    {
      term: "Formal register",
      definition: "Impersonal, precise language without contractions or slang.",
    },
    {
      term: "Modal verbs",
      definition:
        "Verbs expressing possibility/obligation — should, must, could, might.",
    },
    {
      term: "Call to action",
      definition: "Final appeal telling the reader what to do.",
    },
  ],
  concepts: [
    {
      id: "el7-u2-persuasion",
      title: "Persuasive Writing Techniques",
      skill:
        "Use rhetorical devices, emotive language and logical argument to persuade.",
      lesson: {
        sections: [
          {
            heading: "Persuasive structure",
            body: "**Introduction**: state position clearly. **Body**: 2-3 reasons with evidence, strongest last. **Counter-argument**: acknowledge opposing view then refute it — strengthens credibility. **Conclusion**: restate position + call to action.\n\n**Techniques**: rhetorical questions ('Would you want...?'), emotive language ('innocent', 'cruel'), rule of three ('free, fair, fast'), statistics for authority, repetition of key phrase.",
          },
          {
            heading: "Logical argument",
            body: "Persuasion needs more than emotion — build a **logical chain**: claim → evidence → reasoning → conclusion. Avoid fallacies: ad hominem (attacking person not argument), false dilemma ('either X or disaster'), straw man (misrepresenting opponent's view).\n\n**Ethical persuasion**: honest evidence, fair representation of alternatives, realistic claims. Manipulative techniques may win short-term but damage credibility.",
          },
        ],
        keyFormulas: [
          {
            name: "Persuasive structure",
            statement:
              "Position → reasons+evidence → counter-argument → call to action.",
          },
          {
            name: "Ethical persuasion",
            statement:
              "Honest evidence, fair representation, realistic claims.",
          },
        ],
        workedExample: {
          problem: "Persuade school to allow phones in class.",
          solution:
            "Position: phones can aid learning. Reasons: research tools, calculators, organisation apps. Counter: distraction — solved by clear policy. Call to action: pilot scheme.",
        },
      },
      questions: [
        {
          id: "el7-u2-persuasion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'call to action' in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary of arguments" },
              { id: "b", text: "A final appeal telling the reader what to do" },
              { id: "c", text: "A statistics paragraph" },
              { id: "d", text: "A dramatic opening" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Call to action",
                statement: "Final appeal directing reader behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Call to action = directive to reader.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            finalAnswer: "**(b)** Final appeal telling reader what to do",
            commonErrors: ["Confusing with summary."],
          },
        },
        {
          id: "el7-u2-persuasion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is acknowledging the counter-argument a strong persuasive strategy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Counter-argument",
                statement:
                  "Addressing opposition strengthens credibility and pre-empts objections.",
              },
            ],
            steps: [
              {
                reasoning: "Shows fairness/objectivity.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Pre-empts reader objections.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Strengthens overall argument.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Acknowledging counter-arguments shows fairness and pre-empts objections — making your position stronger.",
            commonErrors: [
              "Ignoring opposition = weaker.",
              "No strategic reason.",
            ],
          },
        },
        {
          id: "el7-u2-persuasion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is a 'straw man' fallacy and why is it unethical in persuasion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Straw man",
                statement:
                  "Misrepresenting opponent's view to make it easier to attack.",
              },
            ],
            steps: [
              {
                reasoning: "Defined: distorting opponent's argument.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Makes opponent look weaker than reality.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Unethical: dishonest, undermines debate.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Fair representation is ethical.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Straw man = misrepresenting opponent's view — dishonest and unethical; fair representation is required.",
            commonErrors: ["Vague definition.", "No ethical reason."],
          },
        },
        {
          id: "el7-u2-persuasion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the opening two sentences of a persuasive letter to the headteacher arguing for longer lunch breaks.",
          parts: [
            { label: "a", prompt: "State your position clearly.", marks: 2 },
            { label: "b", prompt: "Use one persuasive technique.", marks: 3 },
            { label: "c", prompt: "Establish formal register.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasive opening",
                statement: "Clear position + technique + formal tone.",
              },
            ],
            steps: [
              {
                reasoning: "Position stated: longer lunch breaks needed.",
                marks: 2,
                markCode: "AO4",
                part: "a",
              },
              {
                reasoning: "Technique: emotive/rhetorical/statistical.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Technique appropriate to purpose.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Formal: no contractions/slang.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning: "Polite, respectful tone.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "c" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "c" },
                        ],
            finalAnswer:
              "e.g. 'I am writing to argue that our lunch breaks should be extended. Students currently have just 30 minutes...'",
            commonErrors: ["Informal tone.", "No clear position."],
          },
        },
      ],
    },
    {
      id: "el7-u2-formal",
      title: "Formal and Impersonal Writing",
      skill:
        "Write formally for different audiences using appropriate register and structure.",
      lesson: {
        sections: [
          {
            heading: "Formal register features",
            body: "**Impersonal constructions**: 'It is widely recognised that...' rather than 'I think...'. **Precise vocabulary**: 'approximately' not 'about', 'demonstrate' not 'show'. **No contractions**: 'do not' not 'don't'. **Objective tone**: balanced, evidence-based claims. **Structured paragraphs**: topic sentence + development.\n\n**Formal contexts**: reports, essays, letters of application, official emails, academic writing. **Informal contexts**: texts to friends, social media, casual emails.",
          },
          {
            heading: "Adapting register",
            body: "The same content can be written informally or formally:\n- Informal: 'Hey, just checking if u still want to hang out later lol'\n- Formal: 'I am writing to confirm our meeting this afternoon.'\n\n**Key shifts**: contractions→full forms, slang→standard English, first person→impersonal, emotive→measured, short sentences→varied complex. Formal writing isn't 'posh' — it's precise, clear and respectful of audience.",
          },
        ],
        keyFormulas: [
          {
            name: "Formal features",
            statement:
              "Impersonal, precise, no contractions, objective, structured.",
          },
          {
            name: "Register shift",
            statement:
              "Informal→formal: expand contractions, remove slang, objectify tone.",
          },
        ],
        workedExample: {
          problem: "Rewrite informally: 'Gonna be late, traffic's mad.'",
          solution: "Formal: 'I will be delayed due to heavy traffic.'",
        },
      },
      questions: [
        {
          id: "el7-u2-formal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "hey u coming??" },
              { id: "b", text: "this is da bomb" },
              { id: "c", text: "It's gonna be great lol" },
              {
                id: "d",
                text: "I am writing to inform you that the event will commence at noon",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal register",
                statement: "Impersonal, precise, no slang/contractions.",
              },
            ],
            steps: [
              {
                reasoning: "(b) is formal — precise, impersonal.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            finalAnswer: "**(b)** Impersonal, precise, no slang",
            commonErrors: ["Choosing informal."],
          },
        },
        {
          id: "el7-u2-formal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite informally: 'I am unable to attend the meeting.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register conversion",
                statement: "Formal→informal: contractions, casual phrasing.",
              },
            ],
            steps: [
              {
                reasoning: "'Cannot attend' → 'can't make it'.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "'I am unable' → 'I can't'.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Acceptable informal equivalent.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer: "e.g. 'I can't make the meeting.'",
            commonErrors: ["Still formal.", "Too informal/slang."],
          },
        },
        {
          id: "el7-u2-formal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might impersonal constructions be preferred in formal writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Impersonal style",
                statement:
                  "Focuses on information, not writer — objective appearance.",
              },
            ],
            steps: [
              {
                reasoning: "Emphasises content over author.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Appears more objective.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Universal rather than personal claim.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Appropriate for formal contexts.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Impersonal constructions emphasise information over author — appearing objective and authoritative.",
            commonErrors: ["Vague 'it's formal'.", "No objectivity reason."],
          },
        },
        {
          id: "el7-u2-formal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a formal opening paragraph for a letter of application for a part-time job.",
          parts: [
            {
              label: "a",
              prompt: "Address the recipient appropriately.",
              marks: 2,
            },
            { label: "b", prompt: "State purpose clearly.", marks: 3 },
            { label: "c", prompt: "Use formal register throughout.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal letter",
                statement: "Salutation + purpose + formal tone.",
              },
            ],
            steps: [
              {
                reasoning: "'Dear Sir/Madam' or 'Dear [Name]'.",
                marks: 2,
                markCode: "AO4",
                part: "a",
              },
              {
                reasoning: "Purpose: applying for position.",
                marks: 2,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "Clear, direct statement.",
                marks: 1,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "No contractions/slang/emoticons.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning: "Polite, professional tone.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "c" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "c" },
                        ],
            finalAnswer:
              "'Dear Sir or Madam, I am writing to apply for the position of...'",
            commonErrors: ["Informal greeting.", "Vague purpose."],
          },
        },
      ],
    },
  ],
};
