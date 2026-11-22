import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "langab-u5-lesson-5-2",
  code: "5-2",
  title: "Completing forms and simple documents",
  goal: "I CAN complete forms and simple documents accurately with correct personal information.",
  standards: ["Writing", "Reading", "Vocabulary"],
  vocabulary: [
    { term: "Form", definition: "A document with fields to complete." },
    {
      term: "Field",
      definition: "One space or line on a form where you write an answer.",
    },
    {
      term: "Label",
      definition: "The word that tells you what to write in a field.",
    },
    {
      term: "Signature",
      definition: "Your name written by hand at the end of a document.",
    },
    { term: "Date", definition: "The day, month and year." },
    {
      term: "Document",
      definition: "An official paper such as a form, letter or notice.",
    },
  ],
  concepts: [
    {
      id: "langab-u5-form-basics",
      title: "Form fields and accuracy",
      skill: "Understand form labels and fill them in correctly.",
      lesson: {
        sections: [
          {
            heading: "Reading labels",
            body: "Each field on a form has a **label** telling you what to write: Name, Age, Address, Date of birth, Phone, Email. Read the label first, then write only what it asks. Labels use small words — learn them: name, age, address, date, phone, email.",
          },
          {
            heading: "Accuracy rules",
            body: "Write in **capital letters** if asked. Use **digits** for numbers: age 14, phone 5551234. Write dates clearly: 03/06/2010 or 3 June 2010. Spell your name correctly — check it twice.",
          },
          {
            heading: "Signature and date",
            body: "Most forms end with **Date** and **Signature**. Sign your name by hand after checking everything. The date is usually today or the day you submit the form.",
          },
        ],
        keyFormulas: [
          {
            name: "Form accuracy",
            statement:
              "Label + correct format + clear handwriting + signature.",
          },
          {
            name: "Number formats",
            statement:
              "Age: digits (14). Phone: digits (5551234). Date: day/month/year.",
          },
        ],
        workedExample: {
          problem:
            "A form says 'Date of birth: __ / __ / ____'. Write 15 March 2010.",
          solution: "15 / 03 / 2010",
        },
      },
      questions: [
        {
          id: "langab-u5-l52q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a 'label' on a form tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price of the form" },
              { id: "b", text: "When the form expires" },
              { id: "c", text: "What to write in that field" },
              { id: "d", text: "Who made the form" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Label",
                statement:
                  "A label tells you what information goes in each field.",
              },
            ],
            steps: [
              {
                reasoning: "Labels indicate what to write.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** What to write in that field",
            commonErrors: ["Ignoring the label and guessing."],
          },
        },
        {
          id: "langab-u5-l52q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Complete this form with your details (imaginary details OK).",
          extract: {
            title: "Club membership form",
            author: "Written for Akademik Space",
            text: "Full name: ________________\nAge: ____\nPhone number: ________________\nSignature: ________________",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form completion",
                statement: "Correct format for each field type.",
              },
            ],
            steps: [
              {
                reasoning: "Name: first and last name.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Age: digits, e.g. 15.", marks: 1, markCode: "M" },
              {
                reasoning: "Phone and signature completed appropriately.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "All four fields completed correctly.",
            commonErrors: ["Writing words instead of digits for age/phone."],
          },
        },
        {
          id: "langab-u5-l52q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the form and answer questions about it.",
          extract: {
            title: "Sports club registration",
            author: "Written for Akademik Space",
            text: "Name: Jake Turner\nAge: 16\nAddress: 8 Hill Road, Manchester\nSport: Football\nSignature: J. Turner",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading forms",
                statement: "Match questions to the right fields.",
              },
            ],
            steps: [
              { reasoning: "Name: Jake Turner.", marks: 1, markCode: "M" },
              {
                reasoning: "Age: 16; sport: football.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Address: 8 Hill Road, Manchester.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Jake Turner; 16; football; 8 Hill Road, Manchester.",
            commonErrors: ["Mixing fields."],
          },
        },
        {
          id: "langab-u5-l52q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Create a simple registration form for a school event.",
          parts: [
            {
              label: "a",
              prompt: "Choose the event and four fields needed.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the form with labels and lines.",
              marks: 2,
            },
            { label: "c", prompt: "Add date and signature lines.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Form design",
                statement: "Clear labels + lines + date + signature.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Event chosen and four sensible fields.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Form layout with labels and lines.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Date and signature lines added.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Event + 4 fields. (b) Form layout. (c) Date + signature.",
            commonErrors: ["Missing signature or date."],
          },
        },
        {
          id: "langab-u5-l52q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A form field is labelled 'Date of birth'. What should you write?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The day, month and year you were born" },
              { id: "b", text: "Today's date" },
              { id: "c", text: "The date you joined the club" },
              { id: "d", text: "Your age" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Reading labels",
                statement: "Write only what the label asks for.",
              },
            ],
            steps: [
              {
                reasoning: "Date of birth means when you were born.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The day, month and year you were born",
            commonErrors: ["Writing today's date instead."],
          },
        },
        {
          id: "langab-u5-l52q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a form, how should you write your age?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "fifteen years old" },
              { id: "c", text: "fifteen" },
              { id: "d", text: "XV" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Number formats",
                statement: "Use digits for numbers on forms.",
              },
            ],
            steps: [
              {
                reasoning: "Age is a number and should be digits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 15",
            commonErrors: ["Writing the number as a word."],
          },
        },
        {
          id: "langab-u5-l52q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A form says 'Write dates as day/month/year'. Which is the correct way to write 3 June 2010?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "03/06/2010" },
              { id: "b", text: "2010/06/30" },
              { id: "c", text: "03/13/2010" },
              { id: "d", text: "30/05/2010" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Date formats",
                statement: "Day/month/year: 03/06/2010 means 3 June.",
              },
            ],
            steps: [
              {
                reasoning: "Day = 03, month = 06, year = 2010.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (a) has month 13 which does not exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 03/06/2010",
            commonErrors: ["Mixing up day and month order."],
          },
        },
        {
          id: "langab-u5-l52q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the completed form and find the mistake.",
          extract: {
            title: "Library registration",
            author: "Written for Akademik Space",
            text: "Full name: Amy Green\nAge: 14\nPhone number: call me\nSignature: A. Green",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The name" },
              { id: "b", text: "The phone number" },
              { id: "c", text: "The signature" },
              { id: "d", text: "The age" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form accuracy check",
                statement: "Phone numbers must be digits, not words.",
              },
            ],
            steps: [
              {
                reasoning: "'call me' is not a phone number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Name, age and signature are fine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The phone number",
            commonErrors: ["Accepting words where digits are needed."],
          },
        },
        {
          id: "langab-u5-l52q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A form says 'Write your name in CAPITAL LETTERS'. Which is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AnA" },
              { id: "b", text: "ana" },
              { id: "c", text: "ANA" },
              { id: "d", text: "Ana" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Capital letters",
                statement: "CAPITAL LETTERS means every letter is upper case.",
              },
            ],
            steps: [
              {
                reasoning: "All letters must be upper case.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only ANA is fully capitalised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** ANA",
            commonErrors: ["Capitalising only the first letter."],
          },
        },
        {
          id: "langab-u5-l52q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A form asks for 'Member no.'. Which answer is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "member" },
              { id: "b", text: "I do not know" },
              { id: "c", text: "My favourite number is 7" },
              { id: "d", text: "4521" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Field matching",
                statement:
                  "Answer only what the label asks for, in the right format.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A member number is a set of digits given by the club.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sentences and words do not fit the field.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 4521",
            commonErrors: ["Writing a sentence in a short field."],
          },
        },
        {
          id: "langab-u5-l52q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Complete these form fields: Full name, Age, City.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form completion",
                statement: "Each field gets the correct type of information.",
              },
            ],
            steps: [
              {
                reasoning: "Full name: first and last name.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Age: digits.", marks: 1, markCode: "M" },
              {
                reasoning: "City: a place name with correct spelling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Full name: ... / Age: ... / City: ...",
            commonErrors: ["Writing a sentence for the age field."],
          },
        },
        {
          id: "langab-u5-l52q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write today's date in two different correct formats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Date formats",
                statement:
                  "Day/month/year or written month forms are both acceptable.",
              },
            ],
            steps: [
              {
                reasoning: "First format, e.g. 03/06/2010.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second format, e.g. 3 June 2010.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both formats are valid and consistent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "03/06/2010 and 3 June 2010 (or similar pair).",
            commonErrors: ["Two formats that contradict each other."],
          },
        },
        {
          id: "langab-u5-l52q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Complete this library registration form: Full name, Age, Address, Phone number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form completion",
                statement: "Correct format for each field type.",
              },
            ],
            steps: [
              {
                reasoning: "Full name: first and last name.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Age: digits.", marks: 1, markCode: "M" },
              {
                reasoning: "Address: street, number, town.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Phone: digits only, correctly spelt name not needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "All four fields completed correctly.",
            commonErrors: ["Words instead of digits for age or phone."],
          },
        },
        {
          id: "langab-u5-l52q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Design four fields for a chess club registration form.",
          parts: [
            {
              label: "a",
              prompt: "Choose four sensible fields for the form.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the labels and lines for your form.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Form design",
                statement: "Relevant fields with clear labels.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Four relevant fields such as name, age, experience, phone.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Labels written clearly with lines to fill in.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 4 fields. (b) Labels + lines.",
            commonErrors: ["Fields unrelated to a chess club."],
          },
        },
        {
          id: "langab-u5-l52q19",
          difficulty: "core",
          totalMarks: 5,
          stem: "This completed form has four mistakes. Find and correct them.",
          extract: {
            title: "Sports club form",
            author: "Written for Akademik Space",
            text: "Name: lee brown\nAge: 15 years old\nDate of birth: 30/02/2009\nPhone: hello\nSignature: L Brown",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Correcting forms",
                statement: "Check capitals, digits and valid dates.",
              },
            ],
            steps: [
              {
                reasoning: "Name should be capitalised: Lee Brown.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Age should be digits only: 15.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Date 30/02 does not exist; give a real date.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phone should be digits, not 'hello'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four corrections clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lee Brown; 15; valid date; digit phone number.",
            commonErrors: [
              "Missing the impossible date.",
              "Not checking every field.",
            ],
          },
        },
        {
          id: "langab-u5-l52q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Create a complete mini-form for a school trip with five fields plus Date and Signature.",
          parts: [
            {
              label: "a",
              prompt: "Give the form a title and choose five fields.",
              marks: 2,
            },
            { label: "b", prompt: "Write the labels and lines.", marks: 2 },
            { label: "c", prompt: "Add Date and Signature lines.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Complete form",
                statement: "Title + relevant fields + date + signature.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Title plus five relevant fields.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear labels with lines.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Date and signature lines added.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Title + 5 fields. (b) Labels + lines. (c) Date + signature.",
            commonErrors: ["Missing date or signature."],
          },
        },
      ],
    },
    {
      id: "langab-u5-documents",
      title: "Simple documents and notes",
      skill:
        "Write simple documents like notes, lists and short letters with correct format.",
      lesson: {
        sections: [
          {
            heading: "Notes and lists",
            body: 'A **note** is a short message for yourself or someone: "Remember: buy milk, call mum, homework due Friday." A **list** puts items one per line. Both use short words and phrases — no full sentences needed.',
          },
          {
            heading: "Simple letters",
            body: "A simple letter has: your address (top right), the date, the recipient's address, a greeting (Dear ...), the body (2-3 paragraphs), and an ending (Best wishes / Yours faithfully) plus your name. Beginner letters can be short.",
          },
          {
            heading: "Choosing the right document",
            body: "Match the document to the situation: **note** for reminders, **list** for shopping or tasks, **message** for friends, **email** for longer or formal news, **letter** for formal or special occasions.",
          },
        ],
        keyFormulas: [
          {
            name: "Letter parts",
            statement: "Address + date + greeting + body + ending + name.",
          },
          {
            name: "Note vs list",
            statement: "Note = sentences/phrases; List = one item per line.",
          },
        ],
        workedExample: {
          problem: "Write a shopping list for the weekend.",
          solution: "Bread, milk, eggs, apples, juice, cheese.",
        },
      },
      questions: [
        {
          id: "langab-u5-l52q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When should you write a note instead of a full letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For a quick reminder to yourself" },
              { id: "b", text: "For a formal complaint" },
              { id: "c", text: "For a wedding invitation" },
              { id: "d", text: "For a job application" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Document choice",
                statement:
                  "Notes are for quick reminders; letters for formal matters.",
              },
            ],
            steps: [
              {
                reasoning: "Notes suit quick reminders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** For a quick reminder to yourself",
            commonErrors: ["Using a note for formal situations."],
          },
        },
        {
          id: "langab-u5-l52q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a shopping list of six items for the weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "List writing",
                statement: "One item per line, simple words.",
              },
            ],
            steps: [
              {
                reasoning: "Six sensible food or household items.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "One item per line, correct spelling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Bread, milk, eggs, fruit, juice, cheese (or similar).",
            commonErrors: ["Writing sentences instead of a list."],
          },
        },
        {
          id: "langab-u5-l52q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the note and answer the questions.",
          extract: {
            title: "Note on the fridge",
            author: "Written for Akademik Space",
            text: "Hi Mum,\nI went to the library after school. I will be home at five. There is pizza in the fridge for dinner. Call me if you need me.\nLove,\nSam",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Note comprehension",
                statement:
                  "Find where Sam is, when he returns and what is for dinner.",
              },
            ],
            steps: [
              {
                reasoning: "Sam went to the library after school.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "He will be home at five.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pizza is in the fridge for dinner.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Library; home at five; pizza for dinner.",
            commonErrors: ["Missing the time or the food."],
          },
        },
        {
          id: "langab-u5-l52q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a simple thank-you letter (5-6 lines).",
          parts: [
            {
              label: "a",
              prompt: "Greeting and first sentence thanking the person.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Two sentences about what you are thanking them for.",
              marks: 2,
            },
            { label: "c", prompt: "Polite ending and your name.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Thank-you letter",
                statement: "Greeting + thanks + reason + ending + name.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greeting plus thank-you sentence.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two sentences explaining the reason.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Polite ending and name.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Greeting + thanks. (b) Reason. (c) Ending + name.",
            commonErrors: ["No reason given for thanks."],
          },
        },
        {
          id: "langab-u5-l52q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a note and a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Notes are always formal" },
              { id: "b", text: "There is no difference" },
              {
                id: "c",
                text: "A note uses phrases or sentences; a list has one item per line",
              },
              { id: "d", text: "Lists are always longer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Note vs list",
                statement:
                  "Notes use phrases/sentences; lists use one item per line.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A note can be a short sentence; a list is items only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** A note uses phrases or sentences; a list has one item per line",
            commonErrors: ["Thinking notes and lists are the same."],
          },
        },
        {
          id: "langab-u5-l52q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "You want to remind yourself to buy milk after school. What is the best document?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An email" },
              { id: "b", text: "A note" },
              { id: "c", text: "A form" },
              { id: "d", text: "A formal letter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Document choice",
                statement: "Notes suit quick personal reminders.",
              },
            ],
            steps: [
              {
                reasoning: "A milk reminder is quick and personal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A note",
            commonErrors: ["Using a formal document for a simple reminder."],
          },
        },
        {
          id: "langab-u5-l52q23",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the correct order for a simple letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Address, date, greeting, body, ending, name" },
              { id: "b", text: "Ending, greeting, body, date" },
              { id: "c", text: "Body, greeting, ending, address" },
              { id: "d", text: "Greeting, address, date, body, ending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter structure",
                statement:
                  "Addresses and date first, then greeting, body, ending and name.",
              },
            ],
            steps: [
              {
                reasoning: "Sender's address and date come at the top.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Greeting opens the letter; ending and name close it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Address, date, greeting, body, ending, name",
            commonErrors: ["Putting the greeting before the addresses."],
          },
        },
        {
          id: "langab-u5-l52q24",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which ending is best for a formal letter to the headteacher?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours faithfully" },
              { id: "b", text: "Love," },
              { id: "c", text: "Bye" },
              { id: "d", text: "See you," },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal letter endings",
                statement:
                  "Formal letters use Yours faithfully or Yours sincerely.",
              },
            ],
            steps: [
              {
                reasoning: "The headteacher is a formal contact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only Yours faithfully is formal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Yours faithfully",
            commonErrors: ["Using an informal ending in a formal letter."],
          },
        },
        {
          id: "langab-u5-l52q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which document is best for a party invitation to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A receipt" },
              { id: "b", text: "A list" },
              { id: "c", text: "A form" },
              { id: "d", text: "A message" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Document choice",
                statement: "Messages suit informal invitations to friends.",
              },
            ],
            steps: [
              {
                reasoning: "A friend invitation is informal and short.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A message is the right choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** A message",
            commonErrors: ["Using a formal letter for a friend."],
          },
        },
        {
          id: "langab-u5-l52q26",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which situation best needs a formal letter rather than an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shopping list" },
              { id: "b", text: "Telling a friend about your day" },
              { id: "c", text: "A reminder note" },
              {
                id: "d",
                text: "Asking the school for a copy of your certificate",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal vs informal documents",
                statement:
                  "Official requests to institutions need formal letters.",
              },
            ],
            steps: [
              {
                reasoning: "A certificate request to a school is official.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The other options are informal or simple tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Asking the school for a copy of your certificate",
            commonErrors: ["Choosing an email for an official request."],
          },
        },
        {
          id: "langab-u5-l52q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a note to yourself reminding you of three things to do after school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Note writing",
                statement: "Short phrases, one reminder per item.",
              },
            ],
            steps: [
              {
                reasoning: "Note format: short and personal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three clear reminders listed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct spelling and simple words.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Remember: homework, call mum, pack bag.",
            commonErrors: ["Writing full formal sentences in a note."],
          },
        },
        {
          id: "langab-u5-l52q28",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a list of five things to pack for a school trip.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "List writing",
                statement: "One item per line, simple correct words.",
              },
            ],
            steps: [
              {
                reasoning: "Five sensible items for a trip.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "One item per line with correct spelling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bag, water, sandwich, coat, book (or similar).",
            commonErrors: ["Writing sentences instead of a list."],
          },
        },
        {
          id: "langab-u5-l52q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the skeleton of a short thank-you letter: your address, date, greeting and ending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter skeleton",
                statement: "Address + date + greeting + ending + name.",
              },
            ],
            steps: [
              {
                reasoning: "Sender's address at the top.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Date written correctly.", marks: 1, markCode: "M" },
              {
                reasoning: "Greeting such as Dear ...",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ending and name, e.g. Best wishes, ...",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Address / Date / Dear ... / Best wishes, ...",
            commonErrors: ["Missing address or date."],
          },
        },
        {
          id: "langab-u5-l52q30",
          difficulty: "core",
          totalMarks: 4,
          stem: "You must tell your aunt that you cannot visit her on Sunday. Choose the best document and write the first two lines.",
          parts: [
            {
              label: "a",
              prompt: "Name the document and give one reason for your choice.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the greeting and first sentence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Document choice + writing",
                statement:
                  "Match the document to the situation, then write correctly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Message or email chosen with a correct reason.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Greeting plus a clear first sentence.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Message/email + reason. (b) Greeting + first sentence.",
            commonErrors: ["Choosing a formal letter for family news."],
          },
        },
        {
          id: "langab-u5-l52q31",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short letter (6-8 lines) inviting your cousin to stay at your house at the weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Invitation letter",
                statement:
                  "Addresses + date + greeting + invitation + details + ending.",
              },
            ],
            steps: [
              {
                reasoning: "Addresses and date present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Greeting with cousin's name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Invitation plus weekend details.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "Polite ending and name.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full letter with invitation and weekend details.",
            commonErrors: ["Missing address block or ending."],
          },
        },
        {
          id: "langab-u5-l52q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a formal letter to your school asking for a reference letter for a job application.",
          parts: [
            {
              label: "a",
              prompt: "Write addresses, date and a formal greeting.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Two sentences making the request and explaining why.",
              marks: 2,
            },
            { label: "c", prompt: "A formal ending and your name.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal request letter",
                statement:
                  "Addresses + date + Dear ... + clear request + Yours faithfully + name.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Address block, date and Dear Sir/Madam.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear request plus reason (job application).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Yours faithfully and name.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Addresses + date + greeting. (b) Request + reason. (c) Formal ending + name.",
            commonErrors: ["Informal tone or missing address block."],
          },
        },
      ],
    },
  ],
};
