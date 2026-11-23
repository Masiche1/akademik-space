import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe6-u4-lesson-4-2",
  code: "4-2",
  title: "Formal Writing: Speeches and Articles",
  goal: "I CAN write formal speeches, articles and reports.",
  standards: ["Year 6 Writing"],
  vocabulary: [
    { term: "Speech", definition: "A talk given to an audience." },
    {
      term: "Rhetorical device",
      definition: "Technique to persuade: triads, repetition, direct address.",
    },
    {
      term: "Editorial",
      definition: "An article giving the publication's opinion.",
    },
    {
      term: "Objective writing",
      definition: "Factual, balanced, no personal opinion.",
    },
  ],
  concepts: [
    {
      id: "edpe6-u4-speech",
      title: "Writing speeches",
      skill: "Use rhetorical devices and formal structure for speeches.",
      lesson: {
        sections: [
          {
            heading: "Speech structure",
            body: "Speeches need: attention-grabbing opening, clear argument, rhetorical devices (repetition 'We shall fight...', triads 'of the people, by the people, for the people', direct address 'you'), emotional appeal, and a strong conclusion with call to action. Written to be heard, not read.",
          },
          {
            heading: "Rhetorical techniques",
            body: "Key devices: repetition for emphasis, rhetorical questions, inclusive language ('we', 'us'), emotive words, statistics for credibility, and rhythm. Vary sentence length for spoken delivery — short sentences land harder.",
          },
        ],
        keyFormulas: [
          {
            name: "Speech",
            statement: "Hook + argument + rhetorical devices + call to action",
          },
        ],
        workedExample: {
          problem: "Write a speech opening about school recycling.",
          solution:
            "Every day, our school produces mountains of waste. But what if I told you we could change that — starting today, starting with us?",
        },
      },
      questions: [
        {
          id: "edpe6-u4-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a triad in speech writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three paragraphs" },
              { id: "b", text: "Three-word phrases for emphasis" },
              { id: "c", text: "A type of poem" },
              { id: "d", text: "A speech ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triad",
                statement: "Three-word emphasis.",
              },
            ],
            steps: [
              {
                reasoning: "Triads are rhythmic triplets.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Three-word phrases",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u4-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is direct address effective in speeches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses the audience" },
              { id: "b", text: "It makes the audience feel involved" },
              { id: "c", text: "It shortens the speech" },
              { id: "d", text: "It is formal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Direct address",
                statement: "Involves audience.",
              },
            ],
            steps: [
              {
                reasoning: "'You' and 'we' create connection.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Audience feels involved",
            commonErrors: ["Wrong reasoning."],
          },
        },
        {
          id: "edpe6-u4-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening of a speech encouraging classmates to enter a competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Speech writing",
                statement: "Hook + engagement.",
              },
            ],
            steps: [
              {
                reasoning: "Attention-grabbing opening.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Direct address or question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds toward call to action.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speech opening for competition",
            commonErrors: ["No hook."],
          },
        },
        {
          id: "edpe6-u4-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify two rhetorical devices in: 'We can do this. We must do this. Together, we will do this.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical devices",
                statement: "Repetition + inclusive language.",
              },
            ],
            steps: [
              {
                reasoning: "Repetition of 'we will do this' / 'do this'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inclusive 'we' creates unity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both identified with explanation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Repetition + inclusive 'we'",
            commonErrors: ["Missing devices."],
          },
        },
      ],
    },
    {
      id: "edpe6-u4-articles",
      title: "Articles and Reports",
      skill: "Write objective news articles and structured reports.",
      lesson: {
        sections: [
          {
            heading: "News article conventions",
            body: "News articles: headline (punchy, accurate), byline, objective tone (no 'I think'), inverted pyramid (key facts first), quotes from sources, factual paragraphs. Language is formal and precise. No emotive or persuasive language unless it's clearly opinion/comment.",
          },
          {
            heading: "Report writing",
            body: "Reports: title, introduction (purpose/scope), methodology (what you did), findings (results with data), conclusion (what it means), recommendations. Objective tone, present tense for facts, past tense for your investigation. Charts/tables support data.",
          },
        ],
        keyFormulas: [
          {
            name: "Article",
            statement: "Headline + inverted pyramid + objective + quotes",
          },
          {
            name: "Report",
            statement:
              "Intro + method + findings + conclusion + recommendations",
          },
        ],
        workedExample: {
          problem:
            "What's wrong with: 'I think the school trip was amazing and everyone should go!' as a news article?",
          solution:
            "Too subjective — news needs objective facts: 'The school trip attracted record numbers, with 95% of students rating it excellent.'",
        },
      },
      questions: [
        {
          id: "edpe6-u4-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What tone should a news article use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotive" },
              { id: "b", text: "Objective" },
              { id: "c", text: "Casual" },
              { id: "d", text: "Persuasive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "News tone",
                statement: "Objective.",
              },
            ],
            steps: [
              {
                reasoning: "News reports facts without opinion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Objective",
            commonErrors: ["Confusing with editorial."],
          },
        },
        {
          id: "edpe6-u4-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the inverted pyramid in news writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Details first" },
              { id: "b", text: "Key facts first, details later" },
              { id: "c", text: "Ending with opinion" },
              { id: "d", text: "A headline style" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverted pyramid",
                statement: "Key facts first.",
              },
            ],
            steps: [
              {
                reasoning: "Most important info leads.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Key facts first",
            commonErrors: ["Chronological instead."],
          },
        },
        {
          id: "edpe6-u4-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a headline and opening sentence for a news article about a school winning a science award.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "News writing",
                statement: "Headline + objective opening.",
              },
            ],
            steps: [
              {
                reasoning: "Punchy, accurate headline.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Opening states key facts objectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No opinion or emotive language.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Headline + objective opening",
            commonErrors: ["Emotive language."],
          },
        },
        {
          id: "edpe6-u4-ar-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "List the sections of a formal report in order. Explain the purpose of 'findings'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Report structure",
                statement: "Sections + findings purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intro → method → findings → conclusion → recommendations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Findings = results/data collected.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Sections + findings = results",
            commonErrors: ["Wrong order or vague findings."],
          },
        },
      ],
    },
    {
      id: "edpe6-u4-formal",
      title: "Formal Letters and Emails",
      skill: "Write formal correspondence for different purposes.",
      lesson: {
        sections: [
          {
            heading: "Formal letter conventions",
            body: "Formal letters: sender's address, date, recipient's address, 'Dear Sir/Madam' or 'Dear Mr Smith', clear subject line, formal polite language ('I am writing to', 'I would be grateful'), structured paragraphs, 'Yours faithfully' (no name) or 'Yours sincerely' (named), signature. No contractions, slang or emojis.",
          },
          {
            heading: "Purpose-driven correspondence",
            body: "Different formal letters have different purposes: complaint (state problem, evidence, desired resolution), application (qualifications, skills, enthusiasm), enquiry (clear question, context), invitation. Each needs appropriate tone and content — a complaint is firm but polite, an application is confident but not boastful.",
          },
        ],
        keyFormulas: [
          {
            name: "Formal letter",
            statement: "Addresses + salutation + formal body + correct closing",
          },
        ],
        workedExample: {
          problem:
            "What's wrong with 'Hey, I want a refund for my broken toy'?",
          solution:
            "Too informal. Formal: 'I am writing to request a refund for a defective product purchased on [date], order number [X].'",
        },
      },
      questions: [
        {
          id: "edpe6-u4-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When do you use 'Yours faithfully'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When you know the name" },
              { id: "b", text: "When you don't know the name" },
              { id: "c", text: "In informal letters" },
              { id: "d", text: "In emails" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Yours faithfully",
                statement: "Unknown recipient.",
              },
            ],
            steps: [
              {
                reasoning: "'Faithfully' pairs with 'Dear Sir/Madam'.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Don't know the name",
            commonErrors: ["Wrong closing."],
          },
        },
        {
          id: "edpe6-u4-fl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase is appropriate for a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hey there" },
              { id: "b", text: "I am writing to enquire about..." },
              { id: "c", text: "Gimme a refund" },
              { id: "d", text: "Cheers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal language",
                statement: "Polite, precise.",
              },
            ],
            steps: [
              {
                reasoning: "Formal letters use polite formal phrasing.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** I am writing to enquire",
            commonErrors: ["Casual language."],
          },
        },
        {
          id: "edpe6-u4-fl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening paragraph of a formal letter complaining about a late delivery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Formal letter",
                statement: "Purpose + context + polite firmness.",
              },
            ],
            steps: [
              { reasoning: "States purpose clearly.", marks: 1, markCode: "M" },
              {
                reasoning: "Provides context (order/date).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Polite but firm tone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complaint letter opening",
            commonErrors: ["Too casual or vague."],
          },
        },
        {
          id: "edpe6-u4-fl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the tone needed for a job application letter vs a complaint letter. How do they differ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone",
                statement: "Application=confident; Complaint=firm polite.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Application: confident, enthusiastic, highlights skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complaint: firm, factual, requests resolution.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear comparison.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Confident vs firm-polite tones",
            commonErrors: ["Same tone for both."],
          },
        },
      ],
    },
  ],
};
